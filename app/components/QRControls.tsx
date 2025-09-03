"use client";

import React from "react";

interface Theme {
  name: string;
  color: string;
}

interface QRControlsProps {
  url: string;
  setUrl: (val: string) => void;
  themeIndex: number;
  setThemeIndex: (idx: number) => void;
  themes: Theme[];
}

const QRControls: React.FC<QRControlsProps> = ({
  url,
  setUrl,
  themeIndex,
  setThemeIndex,
  themes,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
      <div className="flex flex-col flex-1">
        <label className="text-sm mb-1">URL o Texto</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://instagram.com/_henry.jr"
          className="w-full p-2 rounded-[9px] bg-zinc-950 border border-gray-900 text-white placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-800"
        />
      </div>

      <div className="flex flex-col flex-1">
        <label className="text-sm mb-1">Estilos</label>
        <select
          value={themeIndex}
          onChange={(e) => setThemeIndex(Number(e.target.value))}
          className="w-full p-2 rounded-[9px] bg-zinc-950 border border-gray-900 text-white focus:outline-none focus:ring-1 focus:ring-gray-800"
        >
          {themes.map((theme, idx) => (
            <option key={idx} value={idx}>
              {theme.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QRControls;
