"use client"

import React, { useState, useRef, useEffect } from "react";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Fields/InputFields";
import TextArea from "@/components/atoms/Fields/TextArea";

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
  onClose,
}) => {
  const formRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
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
          {children}
        </div>

        {(primaryButton || secondaryButton) && (
          <div
            className={`flex mt-6 ${
              width === "full" ? "w-full" : "w-full md:w-[800px] lg:w-[800px]"
            } ${primaryButton && secondaryButton ? "justify-between" : "justify-start"}`}
          >
            {primaryButton && (
              <Button
                type="submit"
                text={primaryButton}
                variant="default"
                color="orangeborder"
                size="medium"
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
  const [validFields, setValidFields] = useState({});
  const [forceValidate, setForceValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = Object.values(validFields).every(Boolean);
    
    if (allValid) {
      onPrimaryClick?.();
      onSubmit?.(e);
    } else {
      setForceValidate(true);
    }
  };

  const closeForm = () => setIsFormVisible(false);

  return (
    isFormVisible && (
      <FormContainer
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
        onSecondaryClick={onSecondaryClick}
        formTitle={formTitle}
        width={width}
        padding={padding}
        onSubmit={handleSubmit}
        onClose={closeForm}
      >
        {fields?.map((field, index) => {
          const commonProps = {
            key: index,
            label: field.label,
            name: field.name,
            placeholder: field.placeholder,
            required: field.required,
            forceValidation,
            onValidityChange: (name, isValid) => {
              setValidFields(prev => ({ ...prev, [name]: isValid }));
            },
          };

          if (field.type === "textarea") {
            return <TextArea {...commonProps} />;
          }
          if (field.type === "select") {
            return <Input {...commonProps} type="select" options={field.options} />;
          }
          return <Input {...commonProps} type={field.type || "text"} />;
        })}
      </FormContainer>
    )
  );
};

export default Form;