import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getTeamMembers } from "../../Api";

const TeamSection = () => {
  const [teams, setTeams] = useState({
    management: [],
    shareholders: [],
    BOD: []
  });
  const [loading, setLoading] = useState(true);
  const [activeMobileCategory, setActiveMobileCategory] = useState("Management");
  const [activeTab, setActiveTab] = useState("management");

  // Animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const fetchTeams = async () => {
    try {
      setLoading(true);
      const res = await getTeamMembers();
      
      // Transform the API data into our desired structure
      const transformedData = {
        management: res.data.filter(member => member.category === "management"),
        shareholders: res.data.filter(member => member.category === "shareholders"),
        BOD: res.data.filter(member => member.category === "board of directors")
      };
      
      setTeams(transformedData);
    } catch (err) {
      toast.error("Failed to fetch teams");
      setTeams({
        management: [],
        shareholders: [],
        BOD: []
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const categories = ["Management", "Shareholders", "Board of Directors"];

  const getTeamByCategory = (category) => {
    switch (category.toLowerCase()) {
      case "management":
        return teams.management || [];
      case "shareholders":
        return teams.shareholders || [];
      case "board of directors":
        return teams.BOD || [];
      default:
        return [];
    }
  };

  const renderManagementTeam = () => {
    const management = teams.management || [];
    const row1 = management.slice(0, 3);
    const row2 = management.slice(3, 6);
    const row3 = management.slice(6, 9);

    return (
      <>
        <div className="flex gap-4 mb-4">
          {row1.map((member) => renderTeamMember(member))}
        </div>
        <div className="flex gap-4 mb-4">
          {row2.map((member) => renderTeamMember(member))}
        </div>
        <div className="flex gap-4 mb-4">
          {row3.map((member) => renderTeamMember(member))}
        </div>
      </>
    );
  };

  const renderOtherTeam = () => {
    const members = teams[activeTab] || [];
    const rowLength = 3;
    const rowCount = Math.ceil(members.length / rowLength);

    return Array.from({ length: rowCount }).map((_, rowIdx) => {
      const rowMembers = members.slice(
        rowIdx * rowLength,
        (rowIdx + 1) * rowLength
      );

      return (
        <div key={rowIdx} className="flex gap-4 mb-4">
          {rowMembers.map((member) => renderTeamMember(member))}
        </div>
      );
    });
  };

  const renderTeamMember = (member) => {
    if (!member) return null;
    
    return (
      <Link to={`/about/${member.id}`} key={member.id} className="hover:-translate-y-2 duration-700 mt-2">
        <div className="overflow-hidden rounded-t-full bg-gray-300 cursor-pointer w-[250px] h-72">
          {member.image_url && (
            <img
              src={member.image_url}
              alt={member.name}
              className="w-full h-full object-fit"
            />
          )}
        </div>
        <div className="flex flex-col justify-center text-center mt-2">
          <span className="text-xs font-semibold text-purple-200">
            {member.name || "Unknown"}
          </span>
          <span className="text-sm font-extralight text-gray-800">
            {member.position || "Position not specified"}
          </span>
        </div>
      </Link>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  return (
    <section className="mb-16 w-full h-[60vh] md:h-auto">
      <div className="flex gap-x-16 items-center mb-6">
        <div className="bg-purple h-8 w-12" />
        <h2 className="text-3xl md:text-4xl font-bold capitalize text-gray-800">
          Meet The team
        </h2>
      </div>

      <div className="hidden md:flex ml-28">
        {/* Tab navigation */}
        <div className="w-[220px]">
          <ul className="space-y-4">
            {Object.keys(teams).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg capitalize font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-purple bg-opacity-10 text-gray-800 border-purple"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{tab}</span>
                  <span className="ml-2 text-sm opacity-70">
                    ({(teams[tab] || []).length})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Team members grid */}
        <div className="w-7/8 mx-auto overflow-x-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabContentVariants}
            >
              {activeTab === "management"
                ? renderManagementTeam()
                : renderOtherTeam()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block md:hidden px-4 pb-10">
        <h2 className="text-gray-800 text-xl font-bold mb-4">Browse By:</h2>

        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveMobileCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap border transition-all text-sm font-medium ${
                activeMobileCategory === cat
                  ? "bg-purple-100 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto p-8 scrollbar-hide">
          <div className="flex space-x-6">
            {getTeamByCategory(activeMobileCategory).map((member) => (
              <Link
                to={`/about/${member.id}`}
                key={member.id}
                className="w-72 flex-shrink-0 rounded-xl bg-white shadow-md p-4"
              >
                {member.image_url && (
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-full h-48 object-fit rounded-md mb-3"
                  />
                )}
                <h3 className="text-base text-gray-800 font-semibold mb-1">
                  {member.name || "Unknown"}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {member.position || "Position not specified"}
                </p>
                <p className="text-xs text-gray-500 line-clamp-3">
                  {member.biography || "No bio available"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;