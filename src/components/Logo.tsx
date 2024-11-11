import React from 'react';
import { RefreshCw } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <RefreshCw className="w-8 h-8 text-[#00ffd0]" />
      <span className="text-2xl font-bold">
        Zoli<span className="text-[#00ffd0]">Convert</span>
      </span>
    </div>
  );
};

export default Logo;