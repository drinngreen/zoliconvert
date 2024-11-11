import React, { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

const CURRENCIES = ['EUR', 'USD', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'CNY'];

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Convertitore di Valuta</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[2fr,auto,2fr] gap-4 items-center">
        <div className="space-y-2">
          <label className="block text-sm text-emerald-200/60">Importo</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 text-emerald-50"
            placeholder="Inserisci importo"
          />
        </div>

        <button
          onClick={handleSwap}
          className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-emerald-700 transition-colors mt-6"
        >
          <ArrowRightLeft className="w-5 h-5 text-emerald-200" />
        </button>

        <div className="space-y-2">
          <label className="block text-sm text-emerald-200/60">Converti in</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 text-emerald-50"
          >
            {CURRENCIES.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-950 rounded-lg">
        <div className="text-center">
          <span className="text-emerald-200/60">Risultato:</span>
          <div className="text-2xl font-bold text-emerald-400 mt-2">
            {amount ? `${amount} ${fromCurrency} = ${(Number(amount) * 1.1).toFixed(2)} ${toCurrency}` : '—'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;