"use client";
import React, { useState } from "react";
import Input from "@/components/atoms/Fields/InputFields";
import TextArea from "@/components/atoms/Fields/TextArea";
import { FormContainer } from "..";
import { fetchAPI } from "@/utils/apiService";
import Swal from "sweetalert2";

const ContactForm = ({
  padding,
  width,
  primaryButton,
  secondaryButton,
  formTitle,
  onSecondaryClick,
  onPrimaryClick,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (field, value) => {
    if (field === "phone" && value && typeof value === "object") {
      setFormData((prev) => ({
        ...prev,
        phone: value.number,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a 10-digit phone number.",
        confirmButtonColor: "#F05A28",
      });
      return;
    }

    try {
      const payload = {
        ...formData,
        phone: `+977${formData.phone}`,
      };

      const response = await fetchAPI("contacts", "POST", payload);

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        additionalInfo: "",
      });

      Swal.fire({
        icon: "success",
        title: "Form Submitted!",
        text: "Your form has been submitted successfully.",
        confirmButtonColor: "#F05A28",
      });

      if (onPrimaryClick) onPrimaryClick(response);
    } catch (error) {
      console.error("Form submission failed:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed!",
        text: error.message || "Failed to submit form. Please try again.",
        confirmButtonColor: "#F05A28",
      });
    }
  };

  return (
    <FormContainer
      onSecondaryClick={handleSubmit}
      secondaryButton={secondaryButton}
      width={width}
      padding={padding || 30}
      primaryButton={primaryButton}
      formTitle={formTitle}
      onPrimaryClick={onPrimaryClick}
    >
      <div className="w-full flex flex-col gap-7">
        <div className="w-full flex gap-10">
          <Input
            label="First Name"
            required
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e?.target?.value ?? e)}
          />
          <Input
            label="Last Name"
            required
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e?.target?.value ?? e)}
          />
        </div>
        <Input
          label="Phone Number"
          required
          phone={true}
          placeholder="Your Phone Number"
          prefix="+977"
          value={formData.phone}
          onChange={(value) => handleChange("phone", value)}
        />
        <Input
          label="Email Address"
          required
          placeholder="Your Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e?.target?.value ?? e)}
        />
        <TextArea
          label="Additional Necessity"
          placeholder="e.g. We'd like to travel to three temples: Pashupatinath, Muktinath & Manakamana."
          value={formData.additionalInfo}
          onChange={(e) =>
            handleChange("additionalInfo", e?.target?.value ?? e)
          }
        />
      </div>
    </FormContainer>
  );
};

export default ContactForm;
