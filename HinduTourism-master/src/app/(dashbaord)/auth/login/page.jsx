"use client";
import { FormContainer } from "@/components/organisms/Forms";

import React, { useState } from "react";
import Cookies from "js-cookie";
import Input from "@/components/atoms/Fields/InputFields";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    // Validate inputs
    if (!username.trim()) {
      setMessage({ text: "Username is required!", type: "error" });
      return;
    }
    if (!password.trim()) {
      setMessage({ text: "Password is required!", type: "error" });
      return;
    }

    try {
      setMessage({ text: "Logging in...", type: "info" });

      const response = await fetch(`https://thehindutourism.com/api/admin/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      let data;
      if (response.ok) {
        data = await response.json();
        console.log("Response Data:", data);

        const accessToken = data?.data?.accessToken;
        if (accessToken) {
          sessionStorage.setItem("accessToken", accessToken);
          Cookies.set("access_token", accessToken);
          console.log("AccessToken stored in sessionStorage:", accessToken);
          setMessage({ text: "Login successful!", type: "success" });

          setTimeout(() => {
            router.push("/admin/customise-temple");
          }, 1500); // Redirect after 1.5s
        } else {
          setMessage({ text: "Access token not found in response.", type: "error" });
        }
      } else {
        const text = await response.text();
        setMessage({ text: "Invalid response from server: " + text, type: "error" });
        return;
      }

      if (!response.ok) {
        setMessage({ text: data?.message || "Invalid username or password", type: "error" });
        return;
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage({ text: "Something went wrong, please try again!", type: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <FormContainer width="400px" formTitle="" padding="60px">
        <div className="flex justify-center mb-6">
          <Image src="/images/Logo.svg" alt="Logo" width={144} height={112} />
        </div>

        <Input
          label="Username *"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          label="Password *"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Message Display */}


        <Button text="Login" className="w-full bg-orange-light text-white" onClick={handleLogin} />
        {message.text && (
          <p
            className={`text-sm mb-4 ${
              message.type === "success"
                ? "text-green-600"
                : message.type === "info"
                ? "text-blue-600"
                : "text-red"
            }`}
          >
            {message.text}
          </p>
        )}
      </FormContainer>
    </div>
  );
};

export default Page;
