import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/About/Hero";
import { cards } from "../components/Home/ProductsCarousel";
import { motion } from "framer-motion";
import UndoButton from "../components/UndoButton";
import { Helmet } from "react-helmet-async";

const heroBg =
  "https://res.cloudinary.com/dinb6qtto/image/upload/v1747327037/fuelme/eunqurz5ywlilv9qris7.png";

const cardDetails = {
  // Savings Products
  "Susu Account":
    "The Susu Account encourages a disciplined savings culture by allowing individuals—such as market women and artisans—to save small amounts consistently. It offers flexible withdrawals, no maintenance fees, and easy tracking of savings growth.",

  "Sika Dua":
    "Sika Dua is a unique micro-savings plan designed for daily or weekly contributions. It helps individuals build a strong savings habit with structured deposits and access to savings during emergencies or planned expenses.",

  "Mmofra Daakye":
    "Mmofra Daakye is a children's savings account that empowers parents to plan for their child's education and future needs. It features parental controls, interest earnings, and educational rewards to instill financial responsibility early on.",

  "Fixed Deposit":
    "Fixed Deposit Accounts are ideal for individuals looking to invest a lump sum for a fixed period. They offer higher interest rates, secure terms, and guaranteed returns, making them a great tool for long-term financial planning.",

  "Savings Account":
    "Our Savings Account provides a safe and accessible way to store money while earning interest. Perfect for building emergency funds or planning future expenses, it features easy withdrawals, no hidden charges, and monthly statements.",

  // Digital Banking
  "Best Mobile Banking":
    "Our award-winning Mobile Banking solution gives you full control of your finances from your phone. Check balances, make transfers, and pay bills instantly—all with bank-level security and 24/7 availability.",

  "Mobile Money Services":
    "Mobile Money Services allow you to send and receive money, pay bills, buy airtime, and link your wallet to your bank account. It offers fast, secure, and reliable access to financial services wherever you are.",

  // Remittance Services
  "Western Union":
    "Western Union enables fast and secure money transfers globally. Whether you're sending funds to family or receiving remittances, enjoy flexible options including cash pickup and direct deposit at competitive rates.",

  UnityLink:
    "UnityLink specializes in remittances from the UK and Europe to Ghana. It offers trusted, licensed services with direct deposit or mobile money delivery, supporting families and businesses with secure cross-border transfers.",

  "Ria Money Transfer":
    "Ria Money Transfer offers fast, low-cost international remittance services with coverage in over 160 countries. Funds can be received via mobile wallet, bank account, or cash pickup—making it ideal for personal support or business payments.",

  MoneyGram:
    "MoneyGram delivers reliable international money transfers with multiple payout options including bank accounts and mobile wallets. It's widely used across the globe, especially for sending funds quickly and safely to loved ones.",

  // Loan Products
  "Government Salary Loan":
    "The Government Salary Loan is tailored for public sector workers seeking financial assistance. It offers quick disbursement, competitive interest rates, and repayment deducted directly from monthly salaries—ideal for emergencies or personal needs.",

  "Nkosuo Loan":
    "The Nkosuo Loan is designed to empower individuals and micro-entrepreneurs with access to small-to-medium scale credit. It supports business growth and personal advancement, with simplified requirements and flexible repayment plans.",

  "SME Loan":
    "The SME Loan supports small and medium-sized enterprises with financial resources to expand operations, purchase inventory, or improve infrastructure. It often requires minimal collateral and offers flexible repayment options suited to business cycles.",

  "Salary Loan":
    "Salary Loans are fast-access credit options for employed individuals needing quick financial support. With low interest rates, minimal paperwork, and repayment deducted from salary, they ensure a convenient and stress-free borrowing experience.",

  "Trade Finance":
    "Our Trade Finance solutions support businesses engaged in import/export activities. We provide letters of credit, guarantees, and working capital financing to facilitate smooth international trade transactions with competitive terms.",

  // Category Descriptions (added for completeness)
  Loans:
    "Our diverse loan products are designed to meet various financial needs, from personal emergencies to business expansion. With competitive rates and flexible repayment terms, we provide the financial support you need to achieve your goals.",

  Savings:
    "Build your financial future with our range of savings products. Whether you're saving for education, business, or personal goals, we offer secure options with attractive returns to help grow your money.",

  "Digital Channels":
    "Bank anytime, anywhere with our secure digital platforms. Our mobile banking and money services bring convenience to your fingertips while maintaining the highest security standards.",

  Remittance:
    "Receive money from abroad quickly and securely through our trusted remittance partners. We offer multiple payout options including direct bank deposits and mobile wallet transfers.",
};

function Products() {
  const { category, title } = useParams();
  const filteredCards = cards.filter(
    (card) => card.title.toLowerCase() === title.toLowerCase()
  );
  const card = filteredCards[0];

  return (
    <div>
      <Helmet>
        <title>
          {" "}
          Our Products – Loans, Mobile Banking, Savings | Best Point Ghana
        </title>
        <meta
          name="description"
          content=" Explore Best Point’s financial services: flexible loans, mobile banking via *277#, savings and remittances tailored for Ghanaians."
        />
      </Helmet>
      <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 min-h-screen">
        <Hero image={heroBg} text1={card?.title || "Product"} />
        <div className="px-6 pt-2">
          <UndoButton />
        </div>
        {card ? (
          <div className="max-w-6xl mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-10 items-start backdrop-blur-md rounded-3xl  p-4"
            >
              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl overflow-hidden shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[500px] relative"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-500"
                />
              </motion.div>

              {/* Text Section */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                  {card.title}
                </h2>
                <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-800 ">
                  {card.cat}
                </p>

                <ul className="space-y-2  text-sm sm:text-base text-gray-700 font-medium list-disc list-inside">
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <motion.p
                  className="text-sm text-justify  sm:text-base text-gray-600 leading-relaxed mt-4 border-t pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {cardDetails[card.title]}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-600">
              Sorry, we couldn't find that product.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
