import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-medium">{label}</label>}
    <input
      {...props}
      className="border px-3 py-2 rounded-md focus:outline-blue-400"
    />
  </div>
);

export default Input;
