import React from "react";
import { FaExclamationTriangle, FaGavel } from "react-icons/fa";
import Hero from "../components/About/Hero";
const Disclaimer = () => {
  return (
    <div>
      <Hero text1={"Disclaimer & Legal Information"} />
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Disclaimer Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="text-yellow-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  DISCLAIMER
                </h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The material on this website is for information and discussion
                  purposes only and does not constitute advice or an invitation
                  or recommendation to enter into a transaction. Best Point
                  Savings and Loans and its Agents shall not be held liable for
                  the use of information on this website.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Information contained on the website may be subject to change
                  without notice. While Best Point Savings and Loans has taken
                  reasonable care in preparing this material, the Bank and its
                  Agents make no representation or warranty as to its accuracy
                  or completeness and no responsibility or liability is accepted
                  for any errors of fact, omission or for any opinion expressed
                  herein.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Best Point Savings and Loans does not provide any accounting,
                  legal, regulatory or tax advice. Should you decide to rely on
                  the information contained herein, please exercise your
                  judgment or seek professional advice.
                </p>
              </div>
            </div>

            {/* Legal Information Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <FaGavel className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  LEGAL INFORMATION
                </h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Best Point Savings and Loans Ghana Limited ("BPSL") is a
                  financial institution registered under the Companies Act, 1963
                  (Act 179) and under the registration number{" "}
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    *********
                  </span>
                  .
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BPSL was issued with a universal banking license by the Bank
                  of Ghana on{" "}
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    ************
                  </span>
                  , under the then Banking Act, 2004 (Act 673 repealed by the
                  Banks and Specialised Deposit-Taking Institutions Act, 2016
                  (Act 930)).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  BPSL is regulated by the Bank of Ghana. Its registered office
                  is situated at{" "}
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    *****************
                  </span>
                  , Accra, Ghana.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Professional Advice?
              </h3>
              <p className="text-gray-600 mb-4">
                For specific financial, legal, or regulatory guidance, please
                consult with qualified professionals or contact our customer
                service team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0800505050"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Call Us: 0800 505 050
                </a>
                <a
                  href="/contact"
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
