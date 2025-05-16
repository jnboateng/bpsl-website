import React from "react";
import { Link } from "react-router-dom";

const BankingMenu = () => {
  return (
    <div className="w-[90vw] md:w-[900px] bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Loans Column */}
        <nav>
          <ul className="space-y-2">
            <li className="font-medium text-lg px-2">Loans</li>
            <li><Link to={"/products/loans/salary loans"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Salary Loans</Link></li>
            <li><Link to={"/products/loans/sme loans"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">SME Loans</Link></li>
            <li><Link to={"/products/loans/auto loans"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Auto Loans</Link></li>
            <li><Link to={"/products/loans/church loans"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Church Loans</Link></li>
          </ul>
        </nav>

        {/* Accounts Column */}
        <nav>
          <ul className="space-y-2">
            <li className="font-medium text-lg px-2">Accounts</li>
            <li><Link to={"/products/accounts/savings account"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Savings Account</Link></li>
            <li><Link to={"/products/accounts/fixed deposit account"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Fixed Deposit Account</Link></li>
            <li><Link to={"/products/accounts/current account"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Current Account</Link></li>
            <li><Link to={"/products/accounts/susu account"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Susu Account</Link></li>
            <li><Link to={"/products/accounts/savings plus account"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Savings Plus Account</Link></li>
            <li><Link to={"/products/accounts/mmofra daakye account"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Mmofra Daakye Account</Link></li>
          </ul>
        </nav>

        {/* Digital Banking Column */}
        <nav>
          <ul className="space-y-2">
            <li className="font-medium text-lg px-2">Digital Banking</li>
            <li><Link to={"/products/digital/ussd service (*277#)"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">USSD Service (*277#)</Link></li>
          </ul>
        </nav>

        {/* Transfers Column */}
        <nav className="md:border-l md:border-gray-300 md:pl-6">
          <ul className="space-y-2">
            <li className="font-medium text-lg px-2">Transfers</li>
            <li><Link to={"/products/transfers/western union"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Western Union</Link></li>
            <li><Link to={"/products/transfers/moneygram"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">MoneyGram</Link></li>
            <li><Link to={"/products/transfers/ria"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Ria</Link></li>
            <li><Link to={"/products/transfers/unitylink"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">UnityLink</Link></li>
            <li><Link to={"/products/transfers/mobile money services"} className="block text-sm px-2 hover:bg-white/90 rounded-lg transition-transform duration-300 hover:scale-[1.03]">Mobile Money Services</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BankingMenu;
