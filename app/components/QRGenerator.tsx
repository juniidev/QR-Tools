"use client";

import React, { useRef, useState } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import QRPreview from "./QRPreview";
import QRControls from "./QRControls";
import QRDownloadButtons from "./Button";

const themes = [
  { name: "Lima (Default)", color: "#c8f543" },
  { name: "Azul", color: "#2B7FFF" },
  { name: "Rojo", color: "#FB2C36" },
  { name: "Morado", color: "#AD46FF" },
  { name: "Naranja", color: "#FF692A" },
  { name: "Amarillo", color: "#F0B13B" },
  { name: "Turquesa", color: "#36BBA7" },
];

const initialOptions: Partial<Options> = {
  width: 300,
  height: 300,
  data: "https://instagram.com/_henry.jr",
  dotsOptions: { color: "#f1f3f4", type: "dots" },
  backgroundOptions: { color: "transparent",},
  cornersSquareOptions: { color: "#3f3f46", type: "extra-rounded" },
  cornersDotOptions: { color: "#00ff00", type: "dots" },
};

const QRGenerator: React.FC = () => {
  const [url, setUrl] = useState(initialOptions.data || "");
  const [themeIndex, setThemeIndex] = useState(0);
  const qrCode = useRef<QRCodeStyling | null>(new QRCodeStyling(initialOptions as Options));

  const options: Options = {
    ...(initialOptions as Options),
    data: url,
    cornersDotOptions: { color: themes[themeIndex].color, type: "dots" },
    backgroundOptions: { color: "transparent" },
  };

  return (
    <div className="w-full max-w-xl flex flex-col items-center gap-4 p-4 border border-gray-900 text-white rounded-[12px] shadow-lg fontFamilySFPro">
      <QRPreview options={options} />
      <QRControls
        url={url}
        setUrl={setUrl}
        themeIndex={themeIndex}
        setThemeIndex={setThemeIndex}
        themes={themes}
      />
      <QRDownloadButtons qrCode={qrCode} />
    </div>
  );
};

export default QRGenerator;
