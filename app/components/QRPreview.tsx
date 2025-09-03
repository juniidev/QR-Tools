"use client";

import React, { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

interface QRPreviewProps {
  options: Options;
}

const QRPreview: React.FC<QRPreviewProps> = ({ options }) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling(options);
    }
    if (qrRef.current && qrCode.current) {
      qrCode.current.append(qrRef.current);
    }
    // update QR whenever options change
    if (qrCode.current) {
      qrCode.current.update(options);
    }
  }, [options]);

  return <div ref={qrRef} />;
};

export default QRPreview;
