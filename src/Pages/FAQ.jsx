import React from "react";
import Hero from "../components/About/Hero";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

function FAQ() {
  const [expandedQuestions, setExpandedQuestions] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
    q10: false,
  });

  const toggleQuestion = (question) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <div>
      <Helmet>
        <title>
          FAQs – How to Use *277#, Apply for Loans, and More | Best Point Ghana
        </title>
        <meta
          name="description"
          content="Get quick answers to common questions about loans, mobile banking via *277#, savings accounts, and more with Best Point Savings and Loans."
        />
      </Helmet>
      <Hero text1={"Frequently Asked Questions"} />
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Get Help with Loans, *277# Mobile Banking & More
        </h1>
      </div>
      <div className="w-full md:w-[80vw] mx-auto p-6">
        <div className="bg-white rounded-lg p-6 mb-8">
          <p className="text-gray-700 mb-6">
            Find answers to common questions about our products, services, and processes.
          </p>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q1")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q1 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    1. What services do Best Point Savings and Loans offer?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q1 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    We offer a wide range of financial solutions including Savings Accounts, 
                    Susu Savings, Current Accounts, Fixed Deposit, Loans, Remittance Services 
                    and Mobile Banking Services.
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q2")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q2 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    2. Who can open an account with Best Point Savings and Loans?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q2 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    Any Ghanaian resident aged 18 years and above with a valid national ID 
                    (Ghana Card) can open an account. Minors can also open accounts with a 
                    guardian's consent.
                  </p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q3")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q3 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    3. What do I need to apply for a loan?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q3 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="mb-2 text-gray-700">
                    To apply for a loan, you need:
                  </p>
                  <ul className="list-disc pl-8 text-gray-700 space-y-1">
                    <li>A valid national ID (Ghana Card)</li>
                    <li>Proof of income (e.g., payslip or business records)</li>
                    <li>Passport-sized photo</li>
                    <li>Completed loan application form</li>
                    <li>Guarantor(s), depending on loan type</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q4")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q4 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    4. Do you offer mobile banking or USSD services?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q4 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    Yes! Our USSD service is available 24/7. Dial *277# to check balances, 
                    transfer funds, buy airtime, bundle data, pay for utility bills, do 
                    shopping and more.
                  </p>
                </div>
              )}
            </div>

            {/* Question 5 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q5")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q5 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    5. How long does it take to process a loan?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q5 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    Loan processing time varies based on the type of loan and documents submitted, 
                    but most loans are processed within 24 to 72 hours once all requirements are met.
                  </p>
                </div>
              )}
            </div>

            {/* Question 6 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q6")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q6 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    6. Is my money safe with you?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q6 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    Absolutely. We are fully regulated by the Bank of Ghana and all deposits 
                    are protected. We also use industry-grade security systems to safeguard 
                    your data and funds.
                  </p>
                </div>
              )}
            </div>

            {/* Question 7 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q7")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q7 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    7. Can I make early repayments on my loan?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q7 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    Yes, early loan repayments are allowed. Depending on the loan product, 
                    early repayment may even reduce your interest costs. Please contact 
                    your branch for more details.
                  </p>
                </div>
              )}
            </div>

            {/* Question 8 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q8")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q8 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    8. Do you operate nationwide?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q8 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    Yes, we have branches across several regions in Ghana. You can also 
                    access our services through our mobile platform (Best Mobile Banking *277#).
                  </p>
                </div>
              )}
            </div>

            {/* Question 9 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q9")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q9 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    9. Can I open an account online?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q9 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    No, currently we do not have an online account opening channel. You would 
                    have to visit any of our branches to open an account. Our account opening 
                    process is fast and convenient.
                  </p>
                </div>
              )}
            </div>

            {/* Question 10 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion("q10")}
              >
                <div className="flex items-center text-gray-800">
                  {expandedQuestions.q10 ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    10. Who do I contact for support or complaints?
                  </h2>
                </div>
              </button>

              {expandedQuestions.q10 && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700 mb-4">
                    You can reach us via any of the following channels or by visiting any of our branches.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="font-medium min-w-[100px]">Toll-free:</span>
                      <span>0800505050</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium min-w-[100px]">WhatsApp:</span>
                      <span>0509823348</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium min-w-[100px]">E-mail:</span>
                      <span>info@bestpointgh.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium min-w-[100px]">Website:</span>
                      <span>www.bestpointgh.com</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We are committed to resolving complaints within 5 working days.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;