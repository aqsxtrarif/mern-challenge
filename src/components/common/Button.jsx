import React from "react";

const Button = ({
  type,
  onClick,
  children,
  className,
  dissability = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={dissability}
    >
      {children}
    </button>
  );
};

export default Button;
