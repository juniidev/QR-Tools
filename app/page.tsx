import QRGenerator from "./components/QRGenerator";

export default function Page() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      {/* <h1>Generador de QR</h1> */}
      <QRGenerator />
    </main>
  );
}
