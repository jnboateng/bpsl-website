import React, { useState } from 'react';

const ToggleButtons = () => {
  const [activeTab, setActiveTab] = useState('account'); 
  
  return (
    <div className="h-10 w-[16.2rem] bg-purple-200 rounded-3xl flex items-center justify-between relative">
      {/* Moving background element */}
      <div 
        className={`absolute h-8 w-32 bg-gradient-to-b from-purple to-purple-200 rounded-2xl transition-all duration-300 ease-in-out ${
          activeTab === 'account' ? 'left-1' : 'left-32'
        }`}
      />
      
      {/* Buttons */}
      <button
        onClick={() => setActiveTab('account')}
        className="text-sm text-white capitalize p-2 rounded-2xl z-10 w-32 text-center"
      >
        <span>quick account</span>
      </button>
      <button
        onClick={() => setActiveTab('loan')}
        className="text-sm text-white capitalize p-2 rounded-2xl z-10 w-32 text-center"
      >
        <span>quick loan</span>
      </button>
    </div>
  );
};

export default ToggleButtons;