"use client";
import React, { useState } from "react";
import Input from "@/components/atoms/Fields/InputFields";
import TextArea from "@/components/atoms/Fields/TextArea";
import Form from "@/components/organisms/Forms";
import ContactForm from "@/components/organisms/Forms/Contactform";
import Breadcrumb from "@/components/atoms/BreadCrumb";
import { fetchAPI } from "@/utils/apiService";

const StepIndicator = ({ step, setStep }) => {
  return (
    <div className="w-full max-w-2xl flex flex-col px-6 items-center gap-0">
      <div className="w-full h-8 relative">
        <div className="w-full h-1 bg-gray-100 rounded-full absolute top-1/2 -translate-y-1/2" />
        <div
          className="h-1 bg-orange-light rounded-full absolute top-1/2 -translate-y-1/2 left-0 origin-left transition-all duration-300"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
        {[1, 2, 3].map((s) => (
          <button
            key={s}
            onClick={() => setStep(s)}
            className={`absolute w-6 h-6 rounded-full transition-colors duration-300 ${
              step >= s ? "bg-orange-500" : "bg-gray-300"
            } -translate-x-1/2 -translate-y-1/2 top-1/2 cursor-pointer`}
            style={{ left: `${((s - 1) / 2) * 100}%` }}
          >
            <span className="sr-only">Step {s}</span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl mx-auto relative mt-2 h-6">
        {["Trip Details", "Itinerary", "Contact"].map((label, index) => (
          <span
            key={label}
            className={`text-xs sm:text-sm md:text-base absolute -translate-x-1/2 ${
              step === index + 1 ? "text-orange-light font-semibold" : "text-gray-500"
            }`}
            style={{ left: `${index * 50}%`, transform: "translateX(-50%)" }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    adults: "",
    children: "",
    groupSize: "",
    tripSelection: "",
    travelDate: "",
    itinerary: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const responseDASTA =  fetchAPI("contacts", "GET", null);
      console.log("response data " ,responseDASTA)


  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        phone: `+977${formData.phone}`, // Ensure country code is included
      };

      const response = await fetchAPI("contacts", "POST", payload);
      
      alert("Success! Your form has been submitted.");
      setFormData({
        adults: "",
        children: "",
        groupSize: "",
        tripSelection: "",
        travelDate: "",
        itinerary: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        additionalInfo: "",
      });

      setStep(1);
    } catch (error) {
    }
  };

  const handlePrevClick = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNextClick = () => {
    if (step < 3) setStep(step + 1);
  };


  return (
    
    <>
      <Breadcrumb currentnavlink={"Customize My Trip"} />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
          <h1 className="text-center text-gray-800 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
            {["Plan Your Journey with Trip Details", "Customize Your Perfect Itinerary", "Complete Your Contact Information"][step - 1]}
          </h1>
          <StepIndicator step={step} setStep={setStep} />
        </div>

        <div className="flex flex-col items-center gap-6">
          {step === 1 && (
            <Form
              onSecondaryClick={handleNextClick}
              onPrimaryClick={handlePrevClick}
              formTitle="Trip Details"
              width="804px"
              title="Trip Details"
              secondaryButton="Next: Itinerary"
              fields={[
                { label: "Enter Number of Adults", placeholder: "e.g., 2", name: "adults", value: formData.adults, onChange: handleChange },
                { label: "Enter Number of Children", placeholder: "e.g., 1 (below 10 years)", name: "children", value: formData.children, onChange: handleChange },
                { label: "Group Size *", type: "select", placeholder: "Select group size", name: "groupSize", value: formData.groupSize, onChange: handleChange, options: [{ value: "1", label: "1" }, { value: "2", label: "2" }, { value: "3", label: "3" }, { value: "4", label: "4" }, { value: "5+", label: "5+" }] },
              ]}
            />
          )}

          {step === 2 && (
            <Form
              onSecondaryClick={handleNextClick}
              onPrimaryClick={handlePrevClick}
              width="804px"
              primaryButton="Previous: Trip Details"
              title="Itinerary"
              secondaryButton="Next: Contact Info"
              formTitle="Itinerary"
              fields={[
                { label: "Select your Trip *", placeholder: "e.g., Everest Base Camp", name: "tripSelection", value: formData.tripSelection, onChange: handleChange },
                { label: "Approx. Date of Travel", type: "date", placeholder: "MM/DD/YYYY", name: "travelDate", value: formData.travelDate, onChange: handleChange },
                { label: "Approx. Itinerary *", type: "textarea", placeholder: "e.g., Day 1: Arrive KTM, Day 2: Visit Pashupatinath.", name: "itinerary", value: formData.itinerary, onChange: handleChange },
              ]}
            />
          )}

          {step === 3 && (
            <ContactForm
              onPrimaryClick={handlePrevClick}
      onSecondaryClick={handleSubmit}
              primaryButton="Previous: Itinerary"
              width="804px"
              secondaryButton="Send Enquiry"
              formTitle="Contact Info"
              formData={formData}
              handleChange={handleChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
