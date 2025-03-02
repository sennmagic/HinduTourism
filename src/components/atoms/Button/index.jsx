import React from "react";

const Button = ({
  text,
  onClick,
  className = "",
  leftIcon,
  rightIcon,
  variant = "", // "default", "line", "big", "wholyrounded"
  size = "medium",
  bordercolor = "", // Default border color
  color = "orange-light", // Default background color
  textcolor = "orange-600", // Default text color
}) => {
  // Color variants configuration
  const colorVariants = {
    "orange-light": {
      bg: "bg-orange-light",
      text: "text-white",
      border: "border-orange-600",
      hoverBg: "hover:bg-default",
      hoverBorder: "hover:border-orange-700",
    },
    red: {
      bg: "bg-red",
      text: "text-white",
      border: "border-red-600",
      hoverBg: "hover:bg-red-600",
      hoverBorder: "hover:border-red-700",
    },
    blue: {
      bg: "bg-blue",
      text: "text-white",
      border: "border-blue-600",
      hoverBg: "hover:bg-blue-600",
      hoverBorder: "hover:border-blue-700",
    },
    pink: {
      bg: "bg-pink",
      text: "text-white",
      border: "border-white",
      hoverBg: "hover:bg-pink-600",
      hoverBorder: "hover:border-pink-700",
    },
    orangeborder: {
      bg:"white",
      text:"text-orange-light",
      border:"border-orange-light",
      hoverBg: "hover:bg-pink-600",
    }
  };

  // Variants configuration
  const variantClasses = {
    default: `${colorVariants[color]?.bg} ${colorVariants[color]?.text} border ${colorVariants[color]?.border} ${colorVariants[color]?.hoverBg} ${colorVariants[color]?.hoverBorder}`,


    line: `bg-transparent ${colorVariants[color]?.text} border ${colorVariants[color]?.border} hover:${colorVariants[color]?.hoverBg} hover:${colorVariants[color]?.hoverBorder}`,

    
    big: `${colorVariants[color]?.bg} ${colorVariants[color]?.text} border ${colorVariants[color]?.border} text-lg py-4 px-8 ${colorVariants[color]?.hoverBg} ${colorVariants[color]?.hoverBorder}`,
  };

  // Dynamic classnames for wholyrounded
// Dynamic classnames for wholyrounded with bordercolor prop
const wholyRoundedClasses = `px-5 py-1.5 ${colorVariants[color]?.bg} rounded-[28px] border border-${bordercolor} flex items-center justify-center ${colorVariants[color]?.text} text-sm font-bold uppercase leading-[21px] ${colorVariants[color]?.hoverBg} hover:border-${bordercolor}`;


  // Size configuration
  const sizeClasses = {
    small: "text-sm px-4 py-2",
    medium: "text-base px-6 py-3",
    large: "text-lg px-8 py-4",
  };

  return (
    <button
    type="button"
      onClick={onClick}
      className={`${
        variant === "wholyrounded"
          ? wholyRoundedClasses
          : `relative flex justify-center items-center border-2 rounded-lg transition-all duration-300 group ${variantClasses[variant] || ""} ${sizeClasses[size]}`
      } ${className}`}
    >
      {leftIcon && (
        <span className="mr-2">
          {typeof leftIcon === "string" ? (
            <img src={leftIcon} alt="left-icon" className="w-5 h-5" />
          ) : (
            leftIcon
          )}
        </span>
      )}
      {text}

      {/* Right Icon Only on Hover */}
      {rightIcon && (
        <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {typeof rightIcon === "string" ? (
            <img src={rightIcon} alt="right-icon" className="w-5 h-5" />
          ) : (
            rightIcon
          )}
        </span>
      )}

      {/* Right Hover Area */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 hover:bg-transparent"></div>
    </button>
  );
};

export default Button;
