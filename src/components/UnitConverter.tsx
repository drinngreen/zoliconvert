import React, { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

const UNIT_TYPES = {
  length: ['metri', 'piedi', 'pollici', 'chilometri', 'miglia'],
  weight: ['chilogrammi', 'libbre', 'once', 'grammi'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
};

const UnitConverter = () => {
  const [unitType, setUnitType] = useState('length');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState(UNIT_TYPES.length[0]);
  const [toUnit, setToUnit] = useState(UNIT_TYPES.length[1]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const getUnitTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      length: 'Lunghezza',
      weight: 'Peso',
      temperature: 'Temperatura'
    };
    return labels[type];
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Convertitore di Unità</h2>

      <div className="space-y-2">
        <label className="block text-sm text-emerald-200/60">Tipo di Unità</label>
        <select
          value={unitType}
          onChange={(e) => setUnitType(e.target.value)}
          className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 text-emerald-50"
        >
          {Object.keys(UNIT_TYPES).map((type) => (
            <option key={type} value={type}>
              {getUnitTypeLabel(type)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr,auto,2fr] gap-4 items-center">
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

        <button
          onClick={handleSwap}
          className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-emerald-700 transition-colors mt-6"
        >
          <ArrowRightLeft className="w-5 h-5 text-emerald-200" />
        </button>

        <div className="space-y-2">
          <label className="block text-sm text-emerald-200/60">Converti in</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 text-emerald-50"
          >
            {UNIT_TYPES[unitType as keyof typeof UNIT_TYPES].map((unit) => (
              <option key={unit} value={unit}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-950 rounded-lg">
        <div className="text-center">
          <span className="text-emerald-200/60">Risultato:</span>
          <div className="text-2xl font-bold text-emerald-400 mt-2">
            {value ? `${value} ${fromUnit} = ${(Number(value) * 3.28084).toFixed(2)} ${toUnit}` : '—'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;