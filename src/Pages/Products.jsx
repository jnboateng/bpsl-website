import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/About/Hero";
import { cards } from "../components/Home/ProductsCarousel";
import { motion } from "framer-motion";

const heroBg="https://res.cloudinary.com/dinb6qtto/image/upload/v1747327037/fuelme/eunqurz5ywlilv9qris7.png"

const cardDetails = {
  "Salary Loans":
    "Salary Loans are specially designed for salaried workers who need quick access to funds for personal or emergency needs. These loans offer fast approval processes, competitive interest rates, and flexible repayment options that are automatically deducted from your salary, making repayment stress-free and seamless.",

  "SME Loans":
    "SME Loans are tailored to support small and medium-sized enterprises with funding solutions to grow their businesses. Whether it's for expanding operations, purchasing new equipment, or managing day-to-day expenses, these loans offer business-friendly repayment terms and may not require collateral for smaller amounts.",

  "Auto Loans":
    "Auto Loans provide financing solutions to help you purchase new or used vehicles with ease. They come with low down payment requirements, attractive interest rates, and flexible repayment periods, allowing you to own your dream car without financial strain.",

  "Church Loans":
    "Church Loans are created specifically for religious organizations that need financial assistance for building projects, acquiring equipment, or organizing events. These loans come with flexible tenors and competitive interest rates, supporting the growth of faith-based institutions.",

  "Savings Account":
    "The Savings Account offers a secure and convenient way to save money while earning interest on deposits. It is ideal for individuals looking to build a financial cushion, with features like free monthly statements, easy fund access, and no hidden charges.",

  "Fixed Deposit Account":
    "Fixed Deposit Accounts are a great option for individuals who want to earn higher interest on their savings over a fixed period. With guaranteed returns, flexible maturity options, and secure investment terms, they provide peace of mind and financial growth.",

  "Current Account":
    "Current Accounts are best suited for individuals and businesses that carry out frequent financial transactions. With benefits like unlimited withdrawals, access to a cheque book, and real-time payments, this account ensures smooth and efficient banking.",

  "Susu Account":
    "The Susu Account is designed for people who prefer saving small amounts consistently over time, such as market women and artisans. It encourages a disciplined savings culture with no maintenance fees and the flexibility to withdraw at any time.",

  "Savings Plus Account":
    "The Savings Plus Account combines the benefits of a traditional savings account with higher interest rates and added perks. It’s ideal for customers who maintain a minimum balance and are committed to long-term savings, offering bonuses and priority services.",

  "Mmofra Daakye Account":
    "Mmofra Daakye Account is crafted to help parents save for their children's future. With parental monitoring, interest earnings, and educational incentives, it nurtures a strong savings habit from an early age and sets kids on the path to financial literacy.",

  "USSD Service (*277#)":
    "Our USSD Service (*277#) allows customers to perform essential banking activities without needing internet access. Available on all mobile phones, the service is accessible 24/7 for balance inquiries, transfers, bill payments, and more.",

  "Western Union":
    "Western Union enables secure, fast, and reliable money transfers across the globe. Whether sending or receiving, customers can choose from cash pickup or direct deposit options, making it a trusted solution for global remittances.",

  MoneyGram:
    "MoneyGram offers convenient international money transfers with multiple payout options including bank deposit and mobile wallet. It’s a dependable service used in over 200 countries, perfect for personal and business transactions alike.",

  Ria: "Ria specializes in affordable and speedy money transfers worldwide, with a strong presence in Africa. It supports mobile wallet deposits, cash pickup, and more, making it a practical solution for sending money to family or friends.",

  UnityLink:
    "UnityLink is a licensed remittance provider that focuses on money transfers from the UK and Europe to Ghana. Customers enjoy competitive exchange rates and can receive funds via mobile money or direct bank deposit.",

  "Mobile Money Services":
    "Our Mobile Money Services offer instant and secure transactions, allowing you to send money, pay bills, buy airtime, and link your wallet to a bank account. It’s a fast and convenient way to manage your finances on the go.",
};

function Products() {
  const { category, title } = useParams();
  const filteredCards = cards.filter(
    (card) => card.title.toLowerCase() === title.toLowerCase()
  );
  const card = filteredCards[0];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 min-h-screen">
      <Hero image={heroBg} text1={card?.title || "Product"} />

      {card ? (
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-10 items-start backdrop-blur-md rounded-3xl  p-10"
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
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple">
                {card.title}
              </h2>
              <p className="uppercase  text-xs sm:text-sm tracking-widest text-purple-100">
                {card.cat}
              </p>

              <ul className="space-y-2  text-sm sm:text-base text-gray-700 font-medium list-disc list-inside">
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <motion.p
                className="text-sm text-justify md:text-left sm:text-base text-gray-600 leading-relaxed mt-4 border-t pt-4"
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
  );
}

export default Products;
