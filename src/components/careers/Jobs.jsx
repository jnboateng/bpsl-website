import { useState } from "react";
import { MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export const roles = [
  {
    id: 1,
    category: "Admin",
    title: "Procurement Officer",
    location: "Kumasi, Ejisu",
    type: "Contract",
    description: "Responsible for sourcing goods and services, managing supplier relationships, and negotiating contracts to ensure cost efficiency and timely procurement for the organization. The role demands excellent organizational and negotiation skills.",
    payStart: 2500,
    payEnd: 3200,
    skills: [
      "Strong negotiation and vendor management skills",
      "Proficiency in procurement software and inventory systems",
      "Analytical skills for cost comparison and budgeting",
      "Knowledge of supply chain management principles",
      "Understanding of contract law and compliance"
    ],
    responsibilities: [
      "Identify and evaluate potential suppliers",
      "Negotiate pricing and contract terms",
      "Process purchase orders and track deliveries",
      "Maintain accurate procurement records",
      "Ensure compliance with company policies and regulations"
    ],
    qualifications: [
      "Bachelor's degree in Business Administration, Supply Chain, or related field",
      "3+ years of procurement experience",
      "Familiarity with procurement regulations and best practices",
      "Strong analytical and problem-solving skills"
    ],
    certifications: [
      "Certified Professional in Supply Management (CPSM)",
      "Certified Purchasing Professional (CPP)"
    ],
    salaryBenefits: [
      "Performance-based bonuses",
      "Transportation allowance",
      "Professional development opportunities",
      "Health insurance coverage"
    ],
  },
  {
    id: 2,
    category: "Operations",
    title: "Mobile Banker",
    location: "Accra, Head Office",
    type: "Contract",
    description: "Engage with clients in different locations to offer banking services, promote financial products, and support customer transactions. Ideal candidates should have great communication skills and a strong understanding of financial operations.",
    payStart: 1800,
    payEnd: 2500,
    skills: [
      "Excellent customer service and interpersonal skills",
      "Knowledge of banking products and services",
      "Cash handling and basic accounting skills",
      "Ability to use mobile banking technology",
      "Strong sales and negotiation abilities"
    ],
    responsibilities: [
      "Provide banking services at various locations",
      "Educate customers on financial products",
      "Process deposits, withdrawals, and account openings",
      "Meet sales targets for banking products",
      "Resolve customer queries and complaints"
    ],
    qualifications: [
      "Diploma in Banking, Finance or related field",
      "1+ years experience in customer service or banking",
      "Strong numerical and communication skills",
      "Valid driver's license (for mobile units)"
    ],
    certifications: [
      "Certified Banker (CB)",
      "Financial Market Certification"
    ],
    salaryBenefits: [
      "Commission on sales targets",
      "Travel allowance",
      "Mobile device provided",
      "Health and life insurance"
    ],
  },
  {
    id: 3,
    category: "Information Technology",
    title: "Network & Infrastructure",
    location: "Kumasi, Suame",
    type: "Full time",
    description: "Design, implement, and maintain the organization's IT network and infrastructure systems. Ensure network security, scalability, and reliability while collaborating with internal teams and external vendors for optimal performance.",
    payStart: 3000,
    payEnd: 4500,
    skills: [
      "Proficient in configuring routers, switches (Cisco, Juniper, etc.), and firewalls.",
      "Knowledge of protocols such as TCP/IP, DNS, DHCP, VLANs, and MPLS.",
      "Experience with Windows Server, Linux, and virtualization platforms (VMware, Hyper-V).",
      "Understanding of storage technologies like SAN and NAS.",
      "Understanding of security protocols, encryption methods, and cybersecurity best practices.",
    ],
    responsibilities: [
      "Design and implement network infrastructure solutions",
      "Monitor network performance and troubleshoot issues",
      "Implement security measures to protect data",
      "Coordinate with vendors for hardware/software procurement",
      "Maintain documentation of network configurations"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Information Technology, or a related field (or equivalent experience).",
    ],
    certifications: [
      "Cisco Certified Network Associate (CCNA) or Professional (CCNP).",
      "Microsoft Certified: Azure Administrator or Solutions Architect.",
      "CompTIA Network+, Security+, or Server+.",
    ],
    salaryBenefits: [
      "Competitive salary based on experience and certifications.",
      "Professional development opportunities, including training and certifications.",
      "Comprehensive health, dental, and vision insurance.",
      "Flexible work arrangements and remote work options, if applicable.",
    ],
  },
  {
    id: 4,
    category: "HR",
    title: "Talent Acquisition Specialist",
    location: "Accra, Spintex",
    type: "Full time",
    description: "Manage full-cycle recruitment processes, source candidates through various channels, and build strong employer branding initiatives. The role requires strong interpersonal skills and knowledge of modern hiring practices.",
    payStart: 2800,
    payEnd: 4000,
    skills: [
      "Expertise in various recruitment channels and techniques",
      "Strong interviewing and assessment skills",
      "Knowledge of employment laws and regulations",
      "Experience with Applicant Tracking Systems",
      "Employer branding and social media recruiting"
    ],
    responsibilities: [
      "Develop and implement recruitment strategies",
      "Source candidates through multiple channels",
      "Conduct interviews and coordinate hiring process",
      "Build relationships with universities and professional networks",
      "Track recruitment metrics and improve processes"
    ],
    qualifications: [
      "Bachelor's degree in Human Resources or related field",
      "3+ years experience in recruitment or talent acquisition",
      "Excellent communication and interpersonal skills",
      "Knowledge of labor legislation"
    ],
    certifications: [
      "Professional in Human Resources (PHR)",
      "Talent Acquisition Strategist Certification"
    ],
    salaryBenefits: [
      "Performance-based bonuses",
      "Professional development budget",
      "Comprehensive health package",
      "Flexible work arrangements"
    ],
  },
  {
    id: 5,
    category: "Corporate Communication",
    title: "PR & Media Manager",
    location: "Accra, Ridge",
    type: "Contract",
    description: "Develop and execute communication strategies to promote and protect the company's image. Manage media relations, oversee press releases, and act as the primary point of contact for public communications.",
    payStart: 3500,
    payEnd: 4800,
    skills: [
      "Excellent written and verbal communication",
      "Media relations and crisis management",
      "Content creation and storytelling",
      "Social media strategy",
      "Event planning and management"
    ],
    responsibilities: [
      "Develop PR strategies and campaigns",
      "Write press releases and official statements",
      "Manage relationships with media outlets",
      "Monitor public opinion and media coverage",
      "Organize press conferences and media events"
    ],
    qualifications: [
      "Bachelor's degree in Communications, Journalism or related field",
      "5+ years experience in PR or corporate communications",
      "Established media network",
      "Crisis communication experience"
    ],
    certifications: [
      "Accredited in Public Relations (APR)",
      "Certified Public Relations Counselor"
    ],
    salaryBenefits: [
      "Performance bonuses",
      "Communication allowance",
      "Professional association memberships",
      "Health and wellness package"
    ],
  },
  {
    id: 6,
    category: "Audit",
    title: "Internal Auditor",
    location: "Takoradi, Main Branch",
    type: "Full time",
    description: "Conduct audits to evaluate financial and operational risks, ensure compliance with regulations, and recommend improvements. The role requires strong analytical skills and attention to detail.",
    payStart: 3200,
    payEnd: 4200,
    skills: [
      "Strong analytical and critical thinking",
      "Knowledge of accounting principles and standards",
      "Risk assessment and management",
      "Data analysis and forensic accounting",
      "Understanding of regulatory requirements"
    ],
    responsibilities: [
      "Plan and execute financial and operational audits",
      "Evaluate internal controls and processes",
      "Identify risks and recommend improvements",
      "Prepare audit reports with findings",
      "Follow up on implementation of recommendations"
    ],
    qualifications: [
      "Bachelor's degree in Accounting, Finance or related field",
      "3+ years audit experience",
      "Professional accounting qualification",
      "Knowledge of auditing standards"
    ],
    certifications: [
      "Certified Internal Auditor (CIA)",
      "Certified Public Accountant (CPA)"
    ],
    salaryBenefits: [
      "Performance bonuses",
      "Professional certification support",
      "Retirement benefits",
      "Comprehensive health coverage"
    ],
  },
  {
    id: 7,
    category: "IT",
    title: "Software Engineer",
    location: "Kumasi, Adum",
    type: "Full time",
    description: "Design, develop, and maintain software applications aligned with business needs. Collaborate with cross-functional teams to deliver scalable and efficient digital solutions in a fast-paced environment.",
    payStart: 4000,
    payEnd: 6000,
    skills: [
      "Proficiency in programming languages (Java, Python, C#, etc.)",
      "Software development methodologies (Agile, Scrum)",
      "Database design and management",
      "API development and integration",
      "Problem-solving and debugging"
    ],
    responsibilities: [
      "Develop and maintain software applications",
      "Collaborate with teams to define requirements",
      "Write clean, efficient, and documented code",
      "Test and debug software",
      "Participate in code reviews"
    ],
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years software development experience",
      "Strong knowledge of data structures and algorithms",
      "Experience with version control systems"
    ],
    certifications: [
      "AWS Certified Developer",
      "Microsoft Certified: Azure Developer Associate"
    ],
    salaryBenefits: [
      "Competitive salary with bonus potential",
      "Flexible work hours and remote options",
      "Tech gadget allowance",
      "Continuous learning budget"
    ],
  },
  {
    id: 8,
    category: "Admin",
    title: "Administrative Assistant",
    location: "Cape Coast, Branch Office",
    type: "Contract",
    description: "Provide administrative support including scheduling meetings, handling correspondence, organizing files, and assisting with office management tasks. This role demands attention to detail and excellent organizational skills.",
    payStart: 1500,
    payEnd: 2000,
    skills: [
      "Excellent organizational abilities",
      "Proficiency in office software (MS Office)",
      "Time management and multitasking",
      "Strong written and verbal communication",
      "Basic accounting and record keeping"
    ],
    responsibilities: [
      "Manage schedules and appointments",
      "Handle correspondence and communications",
      "Maintain filing and record systems",
      "Coordinate office supplies and equipment",
      "Assist with basic accounting tasks"
    ],
    qualifications: [
      "Diploma in Business Administration or related field",
      "2+ years administrative experience",
      "Proficiency in office software",
      "Strong organizational skills"
    ],
    certifications: [
      "Certified Administrative Professional (CAP)",
      "Microsoft Office Specialist"
    ],
    salaryBenefits: [
      "Transportation allowance",
      "Health insurance coverage",
      "Professional development opportunities",
      "Performance bonuses"
    ],
  },
  {
    id: 9,
    category: "Operations",
    title: "Field Operations Coordinator",
    location: "Sunyani, Regional HQ",
    type: "Full time",
    description: "Oversee field teams, ensure the smooth execution of operations, monitor KPIs, and provide on-ground support for projects and activities. Requires excellent coordination and leadership abilities.",
    payStart: 2700,
    payEnd: 3600,
    skills: [
      "Strong leadership and team management",
      "Operations planning and execution",
      "Performance monitoring and reporting",
      "Problem-solving and decision making",
      "Stakeholder communication"
    ],
    responsibilities: [
      "Coordinate field operations and teams",
      "Monitor and report on operational KPIs",
      "Ensure compliance with policies and standards",
      "Resolve operational issues in the field",
      "Train and support field staff"
    ],
    qualifications: [
      "Bachelor's degree in Business Administration or related field",
      "3+ years operations coordination experience",
      "Project management skills",
      "Valid driver's license"
    ],
    certifications: [
      "Project Management Professional (PMP)",
      "Six Sigma Certification"
    ],
    salaryBenefits: [
      "Field operations allowance",
      "Performance bonuses",
      "Vehicle or transportation support",
      "Comprehensive benefits package"
    ],
  },
  {
    id: 10,
    category: "HR",
    title: "Payroll Manager",
    location: "Accra, Osu",
    type: "Full time",
    description: "Manage the entire payroll process ensuring accurate and timely payment of employee salaries. Maintain payroll records, resolve discrepancies, and ensure compliance with tax and labor laws.",
    payStart: 3000,
    payEnd: 4200,
    skills: [
      "Expertise in payroll software and systems",
      "Knowledge of tax laws and labor regulations",
      "Attention to detail and accuracy",
      "Data analysis and reporting",
      "Problem-solving and dispute resolution"
    ],
    responsibilities: [
      "Process payroll accurately and timely",
      "Ensure compliance with tax regulations",
      "Resolve payroll discrepancies",
      "Maintain payroll records and reports",
      "Stay updated on payroll legislation"
    ],
    qualifications: [
      "Bachelor's degree in Accounting, HR or related field",
      "3+ years payroll management experience",
      "Knowledge of payroll software",
      "Understanding of labor laws and tax regulations"
    ],
    certifications: [
      "Certified Payroll Professional (CPP)",
      "Fundamental Payroll Certification (FPC)"
    ],
    salaryBenefits: [
      "Performance bonuses",
      "Professional development support",
      "Comprehensive health benefits",
      "Retirement plan contributions"
    ],
  },
];

const categories = [
  "All Roles",
  "HR",
  "Operations",
  "Corporate Communication",
  "Audit",
  "IT",
];

export default function OpenRoles() {
  const [selectedCategory, setSelectedCategory] = useState("All Roles");
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);

  const filteredRoles =
    selectedCategory === "All Roles"
      ? roles
      : roles.filter((role) => role.category === selectedCategory);

  const getRolesByCategory = (cat) =>
    cat === "All Roles" ? roles : roles.filter((role) => role.category === cat);

  return (
    <div id="jobs" className="min-h-screen">
      <div className="flex gap-x-12 items-center justify-start ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Open Roles</h1>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden px-6 pb-10">
        <h2 className="text-gray-800 text-2xl font-bold mb-6">Browse By:</h2>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setActiveMobileCategory(
                    activeMobileCategory === cat ? null : cat
                  )
                }
              >
                <span
                  className={`${
                    activeMobileCategory === cat
                      ? "text-gray-800 font-semibold"
                      : "text-black"
                  }`}
                >
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
                  {getRolesByCategory(cat).map((role) => (
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
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {role.type}
                        </span>
                      </div>
                      <Link to={`/careers/${role.id}`} className="bg-gradient-to-r from-purple-800 to-purple-600 text-white font-semibold px-4 py-2 rounded-md self-start">
                        Apply Now
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row px-20 py-12 gap-10">
        <aside className="md:w-1/4">
          <h2 className="text-gray-800 text-2xl font-bold mb-6">
            Browse By:
          </h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`bg-gray cursor-pointer ${
                  selectedCategory === cat
                    ? "text-gray-800 font-semibold"
                    : "text-black"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 space-y-6 overflow-y-scroll h-[calc(100vh-200px)] pr-4 border-purple-300">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="rounded-xl p-6 flex justify-between items-center border"
              style={{
                borderTop: "1px solid rgba(168, 85, 247, 0.3)",     // border-t-purple-500/20
                borderLeft: "1px solid rgba(168, 85, 247, 0.3)",    // border-l-purple-500/20
                borderBottom: "1px solid rgba(168, 85, 247, 1)",    // border-b-purple-500/100
                borderRight: "1px solid rgba(168, 85, 247, 1)",     // border-r-purple-500/100
              }}            >
              <div>
                <span className="bg-purple text-white text-xs font-medium px-3 py-1 rounded-md inline-block mb-2">
                  {role.category}
                </span>
                <h3 className="text-2xl text-gray-800 font-semibold mb-1">
                  {role.title}
                </h3>
                <div className="flex items-center text-gray-800 gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {role.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {role.type}
                  </div>
                </div>
              </div>
              <Link to={`/careers/${role.id}`} className="bg-gradient-to-r from-purple-800 to-purple-600 text-white font-semibold px-6 py-2 rounded-md">
                Apply Now
              </Link>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
