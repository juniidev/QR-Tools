"use client";

import React from "react";
import QRCodeStyling from "qr-code-styling";

interface QRDownloadButtonsProps {
    qrCode: React.MutableRefObject<QRCodeStyling | null>;
}

const QRDownloadButtons: React.FC<QRDownloadButtonsProps> = ({ qrCode }) => {
    const handleDownload = (ext: "png" | "svg") => {
        qrCode.current?.download({ name: "qr-code", extension: ext });
    };

    return (
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
                SVG
            </button>
        </div>
    );
};

export default QRDownloadButtons;
