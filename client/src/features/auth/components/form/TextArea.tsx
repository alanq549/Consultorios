import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-medium">{label}</label>}
    <textarea
      {...props}
      className="border px-3 py-2 rounded-md focus:outline-blue-400"
    />
  </div>
);

export default TextArea;
