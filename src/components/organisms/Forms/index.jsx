
"use client"

import React, { useState, useRef, useEffect } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Fields/InputFields";
import TextArea from "@/components/atoms/Fields/TextArea"; // Assuming TextArea component is available

// FormContainer: Handles layout and structure
export const FormContainer = ({
  primaryButton,
  secondaryButton,
  onPrimaryClick,
  onSecondaryClick,
  formTitle = "",
  width = "full",
  padding = "30px",
  children,
  onSubmit,
  onClose, // Pass a function to close the form
}) => {
  const formRef = useRef(null);

  // Close form when clicking outside

  return (
    <form>
      <div className="flex flex-col items-center">
        <div
          ref={formRef}
          className={`bg-white rounded-2xl shadow-[0px_12px_20px_0px_rgba(193,196,214,0.20)] border flex flex-col gap-7 ${
            width === "full" ? "w-full" : "w-full md:w-[800px] lg:w-[800px]"
          }`}
          style={{ padding }}
        >
          <div className="flex justify-between items-center">
            {formTitle && (
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
                {formTitle}
              </h2>
            )}
           
          </div>

          {/* Render fields from children */}
          {children}
        </div>

        {/* Render buttons if provided */}
        {(primaryButton || secondaryButton) && (
          <div
            className={`flex mt-6 ${
              width === "full" ? "w-full" : "w-full md:w-[800px] lg:w-[800px]"
            } ${primaryButton && secondaryButton ? "justify-between" : "justify-start"}`}
          >
            {primaryButton && (
              <Button
                text={primaryButton}
                variant="default"
                color="orangeborder"
                size="medium"
                onClick={onPrimaryClick}
                className="mr-auto"
              />
            )}
            {secondaryButton && (
              <Button
                text={secondaryButton}
                variant="default"
                onClick={onSecondaryClick}
                className="ml-auto"
              />
            )}
          </div>
        )}
      </div>
    </form>
  );
};

// Form: Handles form field rendering and data passing
const Form = ({
  primaryButton,
  secondaryButton,
  onPrimaryClick,
  onSecondaryClick,
  formTitle,
  fields,
  onSubmit,
  width,
  padding,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    isFormVisible && (
      <FormContainer
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
        formTitle={formTitle}
        width={width}
        padding={padding}
        onSubmit={onSubmit}
        onClose={closeForm}
      >
        {/* Render fields dynamically */}
        {fields?.map((field, index) => {
          if (field.type === "textarea") {
            return (
              <TextArea
                key={index}
                label={field.label}
                placeholder={field.placeholder}
                name={field.name}
              />
            );
          } else if (field.type === "select") {
            return (
              <Input
                key={index}
                label={field.label}
                type="select"
                placeholder={field.placeholder}
                options={field.options}
                name={field.name}
              />
            );
          } else {
            return (
              <Input
                key={index}
                label={field.label}
                type={field.type || "text"}
                placeholder={field.placeholder}
                name={field.name}
              />
            );
          }
        })}
      </FormContainer>
    )
  );
};

export default Form;
 