import React from 'react'
import Hero from '../components/About/Hero'
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";



function Privacy() {
    const [expandedSections, setExpandedSections] = useState({
        collection: true,
        consent: false,
        thirdParties: false,
        storing: false,
        security: false,
        marketing: false,
      });
    
      const toggleSection = (section) => {
        setExpandedSections((prev) => ({
          ...prev,
          [section]: !prev[section],
        }));
      };
  return (
    <div>
      <Hero text1={"Privacy Policy"}/>
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800  leading-tight">
          Our Privacy Policy
        </h1>
      </div>
      <div className="w-full md:w-[80vw] mx-auto p-6">
        <div className="bg-white rounded-lg p-6 mb-8">
          <p className="text-gray-700 mb-6">
            Best Point Savings and Loans treat personal information we collect
            through this website, account opening forms, mobile applications and
            other channels as private and confidential.
          </p>

          <div className="space-y-6">
            {/* Collection Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleSection("collection")}
              >
                <div className="flex items-center text-gray-800 ">
                  {expandedSections.collection ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">Collection</h2>
                </div>
              </button>

              {expandedSections.collection && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="mb-3 text-gray-700">
                    We collect personal information directly from you, and where
                    lawful and reasonable, we may collect personal information
                    about you from third parties and publicly available sources,
                    such as credit reporting and government agencies for the
                    purposes set out below.
                  </p>

                  <p className="mb-2 text-gray-700">
                    We use your personal information to:
                  </p>
                  <ul className="list-disc pl-8 mb-3 text-gray-700">
                    <li>meet our responsibilities to you;</li>
                    <li>follow your instructions;</li>
                    <li>
                      process your personal information for ordinary business
                      purposes (this includes opening and divtaining your
                      account, giving effect to transactions, administering
                      claims where applicable, managing our risks and divtaining
                      our overall relationship with you);
                    </li>
                    <li>tell you about services and products available;</li>
                    <li>make sure our business suits your needs;</li>
                    <li>comply with applicable regulations.</li>
                  </ul>

                  <p className="text-gray-700">
                    Without your personal information, we may not be able to
                    provide or continue to provide you with the products or
                    services that you need.
                  </p>
                </div>
              )}
            </div>

            {/* Consent Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleSection("consent")}
              >
                <div className="flex items-center text-gray-800 ">
                  {expandedSections.consent ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">Your Consent</h2>
                </div>
              </button>

              {expandedSections.consent && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="mb-3 text-gray-700">
                    We will process your personal information if you give us
                    your consent willingly or in accordance with the law. You
                    give your consent to us through our products and services
                    agreements.
                  </p>

                  <p className="mb-2 text-gray-700">
                    We will only disclose your personal information if:
                  </p>
                  <ul className="list-disc pl-8 text-gray-700">
                    <li>the law requires it;</li>
                    <li>we have a public duty to disclose the information;</li>
                    <li>
                      our or your legitimate interests require disclosure;
                    </li>
                    <li>you agreed that we may disclose your information.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Third Parties Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleSection("thirdParties")}
              >
                <div className="flex items-center text-gray-800 ">
                  {expandedSections.thirdParties ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">Third Parties</h2>
                </div>
              </button>

              {expandedSections.thirdParties && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    We ask third-party service providers to agree to our privacy
                    policies if they need access to any Personal Information to
                    carry out their services. We will not disclose your personal
                    information to external organizations that are not our
                    service providers, unless you gave us your consent, unless
                    we may do so by law, or if it is necessary for the
                    conclusion or performance of our agreement with you.
                  </p>
                </div>
              )}
            </div>

            {/* Storing Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleSection("storing")}
              >
                <div className="flex items-center text-gray-800 ">
                  {expandedSections.storing ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    Storing Personal Information
                  </h2>
                </div>
              </button>

              {expandedSections.storing && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    We store personal information as required by law.
                  </p>
                </div>
              )}
            </div>

            {/* Security Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleSection("security")}
              >
                <div className="flex items-center text-gray-800 ">
                  {expandedSections.security ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    Our Security Practices
                  </h2>
                </div>
              </button>

              {expandedSections.security && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="mb-3 text-gray-700">
                    Our security systems are designed to prevent the loss,
                    unauthorized destruction, damage and/or access to your
                    personal information from unauthorized third parties.
                  </p>
                  <p className="text-gray-700">
                    You should read the security tips and updates on our
                    websites and social media handles regularly to make sure
                    that you benefit from our security systems, and stay updated
                    with the latest fraud scams and trends.
                  </p>
                </div>
              )}
            </div>

            {/* Marketing Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => toggleSection("marketing")}
              >
                <div className="flex items-center text-gray-800 ">
                  {expandedSections.marketing ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                  <h2 className="ml-2 text-lg font-medium">
                    Marketing By Electronic Means
                  </h2>
                </div>
              </button>

              {expandedSections.marketing && (
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">
                    If you permit us, we may use your personal information to
                    tell you about products, services and special offers from us
                    or other companies that may interest you. We will do this
                    through email, text message (SMS), social media platforms or
                    notify you on your mobile applications. If you later decide
                    that you do not want us to do this, please contact us
                    through our customer service channels to stop this service.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
