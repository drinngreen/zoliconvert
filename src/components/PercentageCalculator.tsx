import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Calcolatore Percentuale</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm text-emerald-200/60">Valore</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 text-emerald-50"
            placeholder="Inserisci valore"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-emerald-200/60">Percentuale</label>
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 text-emerald-50"
            placeholder="Inserisci percentuale"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-emerald-950 rounded-lg">
          <div className="text-center">
            <span className="text-emerald-200/60">Percentuale del valore:</span>
            <div className="text-2xl font-bold text-emerald-400 mt-2">
              {value && percentage
                ? `${((Number(value) * Number(percentage)) / 100).toFixed(2)}`
                : '—'}
            </div>
          </div>
        </div>

        <div className="p-4 bg-emerald-950 rounded-lg">
          <div className="text-center">
            <span className="text-emerald-200/60">Valore + Percentuale:</span>
            <div className="text-2xl font-bold text-emerald-400 mt-2">
              {value && percentage
                ? `${(
                    Number(value) +
                    (Number(value) * Number(percentage)) / 100
                  ).toFixed(2)}`
                : '—'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;