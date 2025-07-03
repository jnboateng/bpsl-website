import { useEffect, useState } from "react";
import { MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { getCareers } from "../../Api";
import { toast } from "react-toastify";

const categories = [
  "All Roles",
  "HR",
  "Operations",
  "Corporate Communication",
  "Audit",
  "IT",
];

export default function OpenRoles() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Roles");
  const [activeMobileCategory, setActiveMobileCategory] = useState("All Roles");

  // Fetch all roles
  const fetchRoles = async () => {
    try {
      setLoading(true);
      const response = await getCareers();
      setRoles(response.data || []);
    } catch (error) {
      toast.error('Failed to fetch roles');
      setRoles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const filteredRoles = selectedCategory === "All Roles"
    ? roles
    : roles.filter((role) => role.category === selectedCategory);

  const getRolesByCategory = (cat) => 
    cat === "All Roles" ? roles : roles.filter((role) => role.category === cat);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  return (
    <div id="jobs" className="min-h-screen">
      <div className="flex gap-x-12 items-center justify-start">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Open Roles</h1>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-2 px-6 pb-10">
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActiveMobileCategory(cat)}
              >
                <span className={`${
                  activeMobileCategory === cat
                    ? "text-gray-800 font-semibold"
                    : "text-black"
                }`}>
                  {cat}
                </span>
                {activeMobileCategory === cat ? (
                  <ChevronUp className="w-4 h-4 text-gray-800" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-800" />
                )}
              </div>
              {activeMobileCategory === cat && (
                <div className="mt-4 space-y-6">
                  {getRolesByCategory(cat).length > 0 ? (
                    getRolesByCategory(cat).map((role) => (
                      <div
                        key={role.id}
                        className="border border-purple-200 rounded-xl p-4 flex flex-col"
                      >
                        <span className="bg-purple text-white text-xs font-medium px-3 py-1 rounded-md w-fit mb-2">
                          {role.category}
                        </span>
                        <h3 className="text-lg text-gray-800 font-semibold mb-1">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-800 mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {role.location || "Location not specified"}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {role.type || "Type not specified"}
                          </span>
                        </div>
                        <Link 
                          to={`/careers/${role.id}`} 
                          className="bg-gradient-to-r from-purple-200 to-purple-100 text-white font-semibold px-4 py-2 rounded-md self-start"
                        >
                          Apply Now
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 py-4">No roles found in this category</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row px-20 py-12 gap-10">
        <aside className="md:w-1/4">
          <h2 className="text-gray-800 text-2xl font-bold mb-6">Browse By:</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-3xl ${
                  selectedCategory === cat
                    ? "bg-purple bg-opacity-10 text-gray-800 font-bold"
                    : "hover:bg-purple-50"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 space-y-6 overflow-y-auto h-[calc(100vh-200px)] pr-4">
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role) => (
              <div
                key={role.id}
                className="rounded-xl p-6 flex justify-between items-center border"
                style={{
                  borderTop: "1px solid rgba(168, 85, 247, 0.3)",
                  borderLeft: "1px solid rgba(168, 85, 247, 0.3)",
                  borderBottom: "1px solid rgba(168, 85, 247, 1)",
                  borderRight: "1px solid rgba(168, 85, 247, 1)",
                }}
              >
                <div>
                  <span className="bg-purple text-white text-xs font-medium px-3 py-1 rounded-md inline-block mb-2">
                    {role.category}
                  </span>
                  <h3 className="text-2xl text-gray-800 font-semibold mb-1">
                    {role.title}
                  </h3>
                  <div className="flex items-center text-gray-800 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> 
                      {role.location || "Location not specified"}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> 
                      {role.type || "Type not specified"}
                    </div>
                  </div>
                </div>
                <Link 
                  to={`/careers/${role.id}`} 
                  className="bg-gradient-to-r from-purple-200 to-purple-100 text-white font-semibold px-6 py-2 rounded-md"
                >
                  Apply Now
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 py-10 text-center">No roles found in this category</p>
          )}
        </main>
      </div>
    </div>
  );
}