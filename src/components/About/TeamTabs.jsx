import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import md from "../../images/team/management/md.png";
import gm from "../../images/team/management/gm.png";
import bdo from "../../images/team/management/bdo.png";
import operations from "../../images/team/management/operations.png";
import finance from "../../images/team/management/finance.png";
import legal from "../../images/team/management/legal.png";
import risk from "../../images/team/management/risk.png";
import audit from "../../images/team/management/audit.png";
import it from "../../images/team/management/it.png";
import chairman from "../../images/team/BOD/Kwadwo-Ohemeng-Asumaning.png";
import member1 from "../../images/team/BOD/kennedy.png";
import member2 from "../../images/team/BOD/FADDA-DICKSON.png";
import member3 from "../../images/team/BOD/ALEX-AKUAMOA-BOATENG.png";
import member4 from "../../images/team/BOD/RODNEY-SAINT-ACQUAYE_Benket.png";
import member5 from "../../images/team/BOD/ISAAC-OSEI-OWUSU.png";
import share1 from "../../images/team/share holders/ofori.png";
import share2 from "../../images/team/share holders/osei2.png";
import { Link } from "react-router-dom";

export const teamData = {
  management: [
    {
      id: 1,
      name: "Dr. Fred Sarfo Kantanka",
      position: "Managing Director",
      image: md,
      bio: "Dr. Fred Sarfo Kantanka brings over two decades of leadership experience in finance, corporate governance, and strategic management. Throughout his career, he has demonstrated a consistent ability to innovate within organizations, leading complex projects and driving sustainable growth. His approach combines a deep understanding of financial systems with visionary leadership, inspiring teams to perform at their best. He is known for his commitment to operational excellence, transparent governance, and fostering a culture of accountability. Dr. Kantanka believes that innovation, when paired with sound financial management, is the key to long-term success. He actively mentors future leaders and has played a crucial role in shaping policies that align with global best practices. His leadership style emphasizes collaboration, resilience, and strategic foresight.",
    },
    {
      id: 2,
      name: "JAMES OKRAH",
      position: "General Manager",
      image: gm,
      bio: "James Okrah is a seasoned and results-oriented manager with an extensive track record of driving organizational growth, enhancing operational efficiency, and optimizing team performance. With years of experience across different industries, James has honed a management style that is both people-centric and results-driven. He believes that empowering employees, setting clear objectives, and maintaining high standards of professionalism are the keys to achieving outstanding results. James’s leadership philosophy centers around continuous improvement, agility, and innovation. He has successfully led transformational projects that improved revenue, reduced costs, and enhanced customer satisfaction. Beyond operational oversight, James is passionate about leadership development, ensuring that teams are equipped with the necessary skills and mindset to adapt to changing market dynamics and achieve strategic goals.",
    },
    {
      id: 3,
      name: "MARTEY AGO-MENSAH",
      position: "Head of Risk",
      image: risk,
      bio: "Martey Ago-Mensah is a distinguished expert in risk management with a specialization in financial institutions, regulatory compliance, and corporate governance. Over the years, Martey has built a reputation for his analytical precision, strategic thinking, and ability to foresee and mitigate risks before they materialize. His work spans the development of risk frameworks, compliance systems, and enterprise risk management strategies tailored to complex organizational structures. Martey understands that proactive risk management is not just about avoiding threats but also about enabling organizations to seize opportunities with confidence. His approach combines rigorous analysis with a deep understanding of industry regulations and evolving market trends. He continuously advocates for ethical practices, robust internal controls, and a culture of risk awareness across all organizational levels.",
    },
    {
      id: 4,
      name: "MILLICENT ODOI",
      position: "Head of Legal",
      image: legal,
      bio: "Millicent Odoi is a highly respected legal professional with vast experience in corporate, commercial, and regulatory law. Throughout her career, she has been instrumental in providing strategic legal counsel that shapes corporate policies and ensures compliance with the ever-evolving regulatory environment. Millicent’s expertise extends beyond traditional legal advisory to include mergers and acquisitions, intellectual property, dispute resolution, and corporate governance. Her deep understanding of both local and international legal frameworks enables her to offer comprehensive solutions to complex challenges. Millicent is committed to promoting ethical leadership, protecting organizational integrity, and fostering a culture where legal compliance is seamlessly integrated into everyday operations. Her proactive approach to risk management and regulatory advocacy has earned her recognition as a trusted and influential voice within the organization.",
    },
    {
      id: 5,
      name: "ISSAC BAFFOUR AWUAH",
      position: "Head of Audit",
      image: audit,
      bio: "Isaac Baffour Awuah is a chartered auditor with deep expertise in internal controls, financial auditing, and risk assessment. His career spans over a decade, during which he has successfully led internal audit departments, conducted complex financial reviews, and enhanced operational transparency. Isaac believes that a strong audit function is essential for organizational integrity and long-term success. He has designed and implemented audit methodologies that not only identify weaknesses but also provide actionable recommendations for continuous improvement. Isaac’s approach is rooted in building trust, maintaining independence, and promoting a culture of accountability. His sharp analytical skills and attention to detail enable him to detect anomalies, ensuring that the organization remains resilient in an increasingly complex regulatory environment. He remains committed to upholding the highest standards of auditing excellence.",
    },
    {
      id: 6,
      name: "MARK KYEI DARKO",
      position: "Head of Operations",
      image: operations,
      bio: "Mark Kyei Darko is a dynamic operations leader responsible for crafting and executing strategies that drive organizational effectiveness and growth. With a comprehensive understanding of business processes, supply chain management, and operational risk, Mark ensures that day-to-day activities align with broader corporate goals. His leadership is defined by a commitment to excellence, operational efficiency, and customer satisfaction. Over the years, Mark has overseen large-scale operational transformations, streamlined workflows, and led initiatives that improved productivity while minimizing costs. He believes that innovation and agility are critical in today’s business environment, and he actively fosters a culture of continuous improvement among his teams. Mark is passionate about mentoring future leaders and is dedicated to building resilient, high-performing operational teams that can adapt and thrive in changing markets.",
    },
    {
      id: 7,
      name: "MAAME FRIMPOMAA NARTEY",
      position: "Head of Business Development",
      image: bdo,
      bio: "Maame Frimpomaa Nartey is a forward-thinking business development strategist with a passion for creating growth opportunities, forging strategic partnerships, and expanding market presence. With a background in sales, marketing, and strategic planning, Maame understands how to identify and capitalize on emerging trends and customer needs. Her work involves market research, client relationship management, and strategic planning aimed at opening new revenue streams and strengthening the company's competitive advantage. Maame's approach is rooted in building long-lasting relationships based on trust, delivering value, and anticipating market shifts. She is passionate about innovation, often seeking out new ways to differentiate the organization and sustain long-term growth. Her dynamic leadership style, coupled with her entrepreneurial spirit, makes her an invaluable asset to the team’s expansion efforts.",
    },
    {
      id: 8,
      name: "PRINCE AYENSU-AFFUL",
      position: "Head of Finance",
      image: finance,
      bio: "Prince Ayensu-Afful is a seasoned finance executive who oversees the financial health, investment strategy, and treasury management of the organization. With a strong background in accounting, financial analysis, and strategic financial planning, Prince ensures that the organization’s financial operations are robust, transparent, and aligned with long-term goals. He plays a critical role in budgeting, forecasting, and financial reporting, providing senior leadership with the insights needed to make sound strategic decisions. Prince believes in the importance of financial discipline, risk management, and value creation, and he is committed to maximizing shareholder value while ensuring financial sustainability. His experience working across different sectors has given him a versatile perspective on financial management in both stable and dynamic market environments. He advocates for ethical financial practices and continuous professional development.",
    },
    {
      id: 9,
      name: "ERIC KWAKYE",
      position: "Head of IT",
      image: it,
      bio: "Eric Kwakye is an innovative IT leader with deep expertise in digital transformation, cybersecurity, and IT infrastructure development. Throughout his career, Eric has been at the forefront of leveraging technology to drive business success. He is passionate about aligning IT strategies with organizational goals, enhancing operational efficiency through technology, and building secure, scalable digital ecosystems. Eric has led major IT projects that modernized systems, strengthened cybersecurity frameworks, and improved user experiences. His philosophy centers around proactive innovation, security-first thinking, and a commitment to continuous learning. Eric believes that technology should be an enabler of growth, and he actively champions initiatives that improve digital literacy within the organization. His leadership ensures that the organization remains at the cutting edge of technological advancement while maintaining high standards of cybersecurity and system integrity.",
    },
  ],
  BOD: [
    {
      id: 10,
      name: "KWADWO OHEMENG ASUMANING",
      position: "Chairman",
      image: chairman,
      bio: "Kwadwo Ohemeng Asumaning is a distinguished corporate leader with decades of experience in executive governance, organizational strategy, and leadership development. Throughout his illustrious career, he has provided visionary guidance to numerous organizations, helping them navigate complex market environments and achieve sustainable growth. His leadership is grounded in principles of transparency, ethical governance, and strategic foresight. As Chairman, Kwadwo offers a wealth of experience in boardroom dynamics, corporate risk management, and stakeholder engagement. He is known for his collaborative approach, fostering strong relationships between management and the board. Kwadwo’s focus on long-term value creation, innovation, and corporate responsibility has earned him immense respect within the business community. His commitment to mentorship and leadership development ensures the next generation of corporate leaders are well-equipped for future challenges.",
    },
    {
      id: 11,
      name: "KENNEDY ASANTE OSEI",
      position: "Non-Executive Director",
      image: member1,
      bio: "Kennedy Asante Osei is an influential figure who brings a wealth of experience in media, communications, and business development to the board. With a strong background in corporate leadership and brand management, Kennedy provides strategic insights that strengthen organizational visibility and market positioning. His deep understanding of consumer behavior, public relations, and modern marketing strategies has been invaluable in advising businesses on how to stay relevant in today’s dynamic environment. Kennedy is a forward-thinker who believes in innovation, sustainability, and leveraging emerging trends to drive growth. On the board, he plays a vital role in shaping strategic initiatives and governance frameworks, ensuring that organizational goals are aligned with stakeholder expectations. His commitment to ethical leadership and community engagement makes him a valued member of the team.",
    },
    {
      id: 12,
      name: "DR. FADDA DICKSON NARH",
      position: "Non-Executive Director",
      image: member2,
      bio: "Dr. Fadda Dickson Narh is a visionary media and business strategist known for transforming organizations through innovative thinking and strategic foresight. With decades of experience in media management, brand positioning, and corporate communications, Dr. Dickson brings a unique blend of creativity and strategic planning to the board. His leadership philosophy emphasizes adaptability, customer-centricity, and technological advancement. Over the years, he has been instrumental in building some of the most recognizable brands across multiple industries. Dr. Dickson’s contributions on the board include offering critical insights into market dynamics, shaping corporate strategies, and ensuring that business models remain relevant in a fast-evolving global economy. His passion for excellence, combined with his commitment to sustainable development, makes him a key driver of long-term value creation.",
    },
    {
      id: 13,
      name: "ALEX ASANTE AKUAMOA-BOATENG",
      position: "Non-Executive Director",
      image: member3,
      bio: "Alex Asante Akuamoa-Boateng is a seasoned legal and strategic advisor who brings a wealth of experience in corporate law, compliance, and governance to the board. Throughout his career, he has provided expert counsel to organizations on a wide range of issues, from regulatory compliance to strategic mergers and acquisitions. Alex has a deep understanding of the legal intricacies that underpin corporate operations and is skilled at balancing risk mitigation with business growth. His strategic mindset and analytical capabilities enable him to offer valuable guidance on both risk management and business development initiatives. On the board, Alex plays a crucial role in ensuring that decisions are made with sound legal judgment and strategic alignment. He is deeply committed to promoting transparency, ethical leadership, and long-term organizational success.",
    },
    {
      id: 14,
      name: "RODNEY SAINT ACQUAYE",
      position: "Non-Executive Director",
      image: member4,
      bio: "Rodney Saint Acquaye is a finance and advisory expert with a robust background in organizational oversight, financial management, and business strategy. Over the years, Rodney has cultivated a reputation for his analytical prowess, strategic insight, and dedication to excellence. His experience spans across multiple sectors where he has helped organizations optimize financial operations, implement governance structures, and navigate complex regulatory landscapes. As a board member, Rodney’s focus is on enhancing financial resilience, ensuring transparency, and advising on strategies that drive sustainable growth. He is passionate about creating value for stakeholders and believes that strong governance is the bedrock of long-term success. Rodney’s collaborative leadership style and commitment to ethical business practices make him an indispensable part of the board’s vision for the future.",
    },
    {
      id: 15,
      name: "ISAAC OSEI-OWUSU",
      position: "Executive Director",
      image: member5,
      bio: "Isaac Osei-Owusu is a seasoned corporate leader with significant experience in financial stewardship, corporate governance, and strategic management. As an Executive Director, Isaac bridges the gap between the board and operational management, ensuring that strategic goals are effectively implemented. Throughout his career, he has been instrumental in strengthening organizational systems, improving operational efficiency, and fostering a culture of accountability. Isaac has a deep understanding of financial markets, regulatory requirements, and risk management frameworks, which enables him to offer holistic leadership. His philosophy centers around transparency, strategic foresight, and sustainable value creation. He is a firm believer in teamwork and collaboration, and he consistently champions initiatives that align organizational success with community development and ethical business practices. Isaac’s expertise significantly enriches board deliberations and outcomes.",
    },
    {
      id: 16,
      name: "DR. FRED SAFO-KANTANKA",
      position: "Executive Director",
      image: md,
      bio: "Dr. Fred Safo-Kantanka, in his dual role as Managing Director and Executive Director, plays a pivotal part in shaping both strategic direction and day-to-day execution. With over two decades of leadership experience, he offers a rare combination of visionary planning and operational expertise. His deep understanding of corporate governance, financial management, and organizational development allows him to align the company’s activities with its long-term vision. Dr. Kantanka champions a leadership style that values innovation, collaboration, and integrity. His commitment to continuous improvement, operational excellence, and ethical leadership resonates across all levels of the organization. As an Executive Director, he ensures that board-level decisions are translated into actionable strategies, fostering a culture of accountability and resilience. His dedication is central to the company’s continued growth and success.",
    },
  ],

  shareholders: [
    {
      id: 17,
      name: "DR. ERNEST OFORI SARPONG",
      position: "Major Shareholder",
      image: share1,
      bio: "Dr. Ernest Ofori Sarpong is a renowned entrepreneur and investor whose contributions to the business world span across finance, media, manufacturing, and real estate. With a keen eye for opportunities and a strategic mindset, Dr. Sarpong has built a legacy of successful enterprises that have significantly contributed to Ghana’s economic development. His investment philosophy focuses on sustainable growth, innovation, and creating value for communities. As a major shareholder, Dr. Sarpong brings not only capital but also invaluable experience, strategic insight, and business acumen to the organization. He believes that businesses should not only pursue profit but also foster societal advancement. His commitment to ethical leadership, entrepreneurship, and community development continues to inspire a new generation of leaders and entrepreneurs across the country.",
    },
    {
      id: 18,
      name: "DR. OSEI-KWAME DESPITE",
      position: "Major Shareholder",
      image: share2,
      bio: "Dr. Osei-Kwame Despite is one of Ghana’s most celebrated businessmen, known for his visionary leadership, entrepreneurial spirit, and remarkable achievements across various industries. With substantial investments in media, manufacturing, finance, and agriculture, Dr. Despite has significantly influenced the country’s economic landscape. His journey from humble beginnings to one of the most successful entrepreneurs serves as a powerful testament to resilience, hard work, and strategic thinking. As a major shareholder, he brings more than just financial investment; he offers invaluable guidance, mentorship, and a wealth of practical business experience. Dr. Despite believes in building institutions that create lasting value, empower communities, and drive national development. His unwavering commitment to excellence, philanthropy, and social responsibility continues to leave a profound impact on Ghanaian society.",
    },
  ],
};
const categories = ["Management", "Shareholders", "Board of Directors"];

const getTeamByCategory = (category) => {
  switch (category.toLowerCase()) {
    case "management":
      return teamData.management || [];
    case "shareholders":
      return teamData.shareholders || [];
    case "board of directors":
      return teamData.BOD || [];
    default:
      return [];
  }
};
export default function TeamSection() {
  const [activeMobileCategory, setActiveMobileCategory] =
    useState("management");

  const [activeTab, setActiveTab] = useState("management");
  // Animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const renderManagementTeam = () => {
    const row1 = teamData.management.slice(0, 3);
    const row2 = teamData.management.slice(3, 6);
    const row3 = teamData.management.slice(6, 9);

    return (
      <>
        {/* First row */}
        <div className="flex gap-4 mb-4">
          {row1.map((member, colIdx) => {
            const index = colIdx; // 0 - 3
            return renderTeamMember(member, index, 0, 3);
          })}
        </div>

        {/* Second row  */}
        <div className="flex gap-4 mb-4">
          {row2.map((member, colIdx) => {
            const index = 5 + colIdx; // 4 - 8
            return renderTeamMember(member, index, 3, 6);
          })}
        </div>
        {/* Third row */}
        <div className="flex gap-4 mb-4">
          {row3.map((member, colIdx) => {
            const index = 6 + colIdx; // 8 - 9
            return renderTeamMember(member, index, 6, 9);
          })}
        </div>
      </>
    );
  };
useEffect(()=>{
setActiveMobileCategory("Management")
},[])
  const renderOtherTeam = () => {
    const members = teamData[activeTab];
    const rowLength = 3;
    const rowCount = Math.ceil(members.length / rowLength);

    return Array.from({ length: rowCount }).map((_, rowIdx) => {
      const rowMembers = members.slice(
        rowIdx * rowLength,
        (rowIdx + 1) * rowLength
      );

      return (
        <div key={rowIdx} className="flex gap-4 mb-4">
          {rowMembers.map((member, colIdx) => {
            const index = rowIdx * rowLength + colIdx;
            return renderTeamMember(member, index, rowIdx, rowLength);
          })}
        </div>
      );
    });
  };

  const renderTeamMember = (member, index) => {
   
    return (
      <Link to={`/about/${member.id}`} className="hover:-translate-y-2 duration-700 mt-2">
        <div
          key={index}
          className="overflow-hidden rounded-t-full bg-gray-300 cursor-pointer w-[250px] h-72"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-fill"
          />
        </div>
        <div className="flex flex-col justify-center text-center mt-2">

          <span className="text-xs font-semibold text-purple-200">{member.name}</span>
          <span className="text-sm font-extralight text-gray-800">{member.position}</span>
        </div>
      </Link>
    );
  };

  return (
    <section className="mb-16 w-full h-[60vh] md:h-auto">
      <div className="flex gap-x-16 items-center mb-6">
        <div className="bg-purple h-8 w-12" />
        <h2 className="text-3xl md:text-4xl font-bold capitalize text-gray-800">
          Meet The team
        </h2>
      </div>

      <div className="hidden md:flex ml-28 ">
        {/* Tab navigation */}
        <div className="w-[220px]">
          <ul className="space-y-4">
            {Object.keys(teamData).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg capitalize font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-purple bg-opacity-10 text-gray-800   border-purple"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{tab}</span>
                  <span className="ml-2 text-sm opacity-70">
                    ({teamData[tab].length})
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
      <div className="block md:hidden px-4 pb-10">
        <h2 className="text-gray-800 text-xl font-bold mb-4">Browse By:</h2>

        {/* Horizontal Category Buttons */}
        <div className="flex space-x-4  overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveMobileCategory(
                  activeMobileCategory === cat ? null : cat
                )
              }
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

        {/* Horizontal Team Cards */}
        {activeMobileCategory && (
          <div className="mt-6 overflow-x-auto p-8 scrollbar-hide">
            <div className="flex space-x-6">
              {getTeamByCategory(activeMobileCategory).map((member, index) => (
                <Link
                  to={`/about/${member.id}`}
                  key={index}
                  className="w-72 flex-shrink-0 rounded-xl bg-white shadow-md p-4"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-fill rounded-md mb-3"
                  />
                  <h3 className="text-base text-gray-800 font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {member.position}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-3">
                    {member.bio}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
