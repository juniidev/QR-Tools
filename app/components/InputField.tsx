// // app/components/InputField.tsx
// "use client";

// import React from "react";

// interface InputFieldProps {
//   label: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "300px" }}>
//       <label>{label}</label>
//       <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         style={{
//           padding: "8px 12px",
//           fontSize: "16px",
//           border: "1px solid #ccc",
//           borderRadius: "6px"
//         }}
//       />
//     </div>
//   );
// };

// export default InputField;
