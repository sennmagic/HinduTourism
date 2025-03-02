import React from "react";
import PropTypes from "prop-types";

const TextHeader = ({
  text = "", // Default to an empty string if text is not passed
  size = "medium",
  color = "default",
  align = "center",
  className = "font-normal",
  specialWordsIndices = "", // Comma-separated indices of words to style
}) => {
  // Ensure text is always a string
  const validText = typeof text === "string" ? text : "";

  // Define available color variants
  const colorVariants = {
    default: "#2C2727", // Custom default color
    orange: "#AD3C16",
    "orange.light": "#F05A28",
    "orange.dark": "#833419",
    "white" : "#ffffff",
    red: "#9b1c1c",
    blue: "#00619E",
    pink:"#C6007B"
  };

  // Define styles for each size
  const sizeStyles = {
    large: "text-6xl md:text-7xl lg:text-7xl",
    medium: "text-5xl md:text-6xl lg:text-6xl",
    small: "text-4xl md:text-5xl lg:text-5xl",
    xsmall: "text-2xl md:text-3xl lg:text-4xl",
  };

  // Determine the color based on the 'color' prop
  const colorStyle = colorVariants[color] || colorVariants.default;

  // Combine the dynamic className and style
  const style = {
    color: colorStyle,
    textAlign: align,
    fontFamily: "Inter, sans-serif",
    fontWeight: 600, // Default bold weight for heading
    margin: 0,
  };

  // Ensure specialWordsIndices is properly processed, handle empty strings gracefully
  const specialIndices = specialWordsIndices
    ? specialWordsIndices
        .split(",")
        .map((index) => parseInt(index.trim(), 10)) // Convert the indices to integers
        .filter((index) => !isNaN(index)) // Filter out any non-number values
    : [];

  // Render the text with special words styled
  const renderText = () => {
    const words = validText.split(" "); // Split the text into words
    const renderedWords = words.map((word, index) => {
      const isSpecial = specialIndices.includes(index);

      return (
        <span key={index}>
          {isSpecial ? (
            <span className="font-[custom] italic">{word}</span>
          ) : (
            word
          )}
          {" "} {/* Ensure that we add a space between words */}
        </span>
      );
    });

    return renderedWords;
  };

  return (
    <h1 className={`text-header ${sizeStyles[size]} ${className}`} style={style}>
      {renderText()}
    </h1>
  );
};

TextHeader.propTypes = {
  text: PropTypes.string, // Text content for the header, now not required, defaults to ''
  size: PropTypes.oneOf(["large", "medium", "small", "xsmall"]), // Available sizes
  color: PropTypes.oneOf(["default", "orange", "orange.light", "orange.dark"]), // Color options
  align: PropTypes.oneOf(["left", "center", "right", "justify"]), // Alignment options
  className: PropTypes.string, // Additional CSS classes
  specialWordsIndices: PropTypes.string, // Comma-separated indices of words to style
};

TextHeader.defaultProps = {
  size: "medium",
  color: "default",
  align: "center",
  className: "",
  specialWordsIndices: "", // No special words by default
  text: "", // Default empty string for text
};

export default TextHeader;
