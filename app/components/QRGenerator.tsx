"use client";

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

// Temas predefinidos
const themes = [
  { name: "Lima (Default)", color: "#c8f543" },
  { name: "Azul", color: "#2B7FFF" },
  { name: "Rojo", color: "#FB2C36" },
  { name: "Morado", color: "#AD46FF" },
  { name: "Naranja", color: "#FF692A" },
  { name: "Amarillo", color: "#F0B13B" },
  { name: "Turquesa", color: "#36BBA7" },
];

// Opciones iniciales del QR
const initialOptions: Partial<Options> = {
  width: 300,
  height: 300,
  data: "https://instagram.com/_henry.jr",
  dotsOptions: { color: "#f1f3f4", type: "dots" },
  backgroundOptions: { color: "#000000" },
  cornersSquareOptions: { color: "#3f3f46", type: "extra-rounded" },
  cornersDotOptions: { color: "#00ff00", type: "dots" },
};

const QRGenerator: React.FC = () => {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  const [url, setUrl] = useState(initialOptions.data || "");
  const [themeIndex, setThemeIndex] = useState(0);

  // Inicializar QR al montar
  useEffect(() => {
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling(initialOptions as Options);
    }
    if (qrRef.current && qrCode.current) {
      qrCode.current.append(qrRef.current);
    }
  }, []);

  // Actualizar QR cuando cambian URL, tema o logo
  useEffect(() => {
    if (qrCode.current) {
      qrCode.current.update({
        data: url,
        cornersDotOptions: { color: themes[themeIndex].color, type: "dots" },
        backgroundOptions: { color: "transparent" },
      });
    }
  }, [url, themeIndex]);

  // Descarga el QR en PNG / SVG
  // punto a futuro: Tratar de hacer que al descargar el QR se pueda descargar con un nombre dinámico usando la URL
   const handleDownload = (ext: "png" | "svg") => {
    qrCode.current?.download({ name: "qr-code", extension: ext });
  };



  return (
    <div className="w-full max-w-xl flex flex-col  items-center gap-4 p-4 border border-gray-900 text-white rounded-[12px] shadow-lg fontFamilySFPro">
      {/* QR */}
      <div ref={qrRef} />

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md" >
      {/* <div className="border-1 border-gray-900 p-6 rounded-[9px] w-full max-w-xl"> */}
        {/* Input URL */}
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

        {/* Dropdown de temas */}
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

      {/* Botones de descarga */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => handleDownload("png")}
          className="flex items-center px-4 py-2 bg-zinc-950 border border-gray-900 text-white rounded-[9px] focus:outline-none focus:ring-1 focus:ring-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          PNG
        </button>
        <button
          onClick={() => handleDownload("svg")}
          className="px-4 flex items-center py-2 bg-zinc-950 border border-gray-900 text-white rounded-[9px] focus:outline-none focus:ring-1 focus:ring-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          SVG
        </button>
      </div>
    </div>
  );
};

export default QRGenerator;
