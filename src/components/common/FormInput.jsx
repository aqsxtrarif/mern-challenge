import React from "react";

const FormInput = ({
  label,
  type,
  name,
  id,
  placeholder,
  className,
  rules,
  error,
}) => {
  return (
    <div className="font-urbanist font-medium text-lg w-full">
      <label htmlFor={name} className="block mb-1 font-poppinsRegular text-base">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        {...rules}
      />
      {error && (
        <span className="pl-2 text-sm text-red-500 font-poppinsRegular">{error.message}</span>
      )}
    </div>
  );
};

export default FormInput;
