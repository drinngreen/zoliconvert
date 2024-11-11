import React, { useState } from 'react';
import { Clock, Percent, Ruler, Wallet } from 'lucide-react';
import CurrencyConverter from './components/CurrencyConverter';
import UnitConverter from './components/UnitConverter';
import PercentageCalculator from './components/PercentageCalculator';
import Logo from './components/Logo';

function App() {
  const [activeTab, setActiveTab] = useState('currency');

  return (
    <div className="min-h-screen bg-[#0A1116] text-emerald-50">
      {/* Header */}
      <header className="border-b border-emerald-900 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <TabButton
            active={activeTab === 'currency'}
            onClick={() => setActiveTab('currency')}
            icon={<Wallet className="w-5 h-5" />}
            text="Valute"
          />
          <TabButton
            active={activeTab === 'units'}
            onClick={() => setActiveTab('units')}
            icon={<Ruler className="w-5 h-5" />}
            text="Unità"
          />
          <TabButton
            active={activeTab === 'percentage'}
            onClick={() => setActiveTab('percentage')}
            icon={<Percent className="w-5 h-5" />}
            text="Percentuali"
          />
        </div>

        {/* Converter Content */}
        <div className="bg-emerald-900/30 rounded-lg p-6 shadow-xl">
          {activeTab === 'currency' && <CurrencyConverter />}
          {activeTab === 'units' && <UnitConverter />}
          {activeTab === 'percentage' && <PercentageCalculator />}
        </div>
      </main>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}

function TabButton({ active, onClick, icon, text }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-emerald-900/30 text-emerald-400'
          : 'text-emerald-200/60 hover:bg-emerald-900/20 hover:text-emerald-200'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default App;