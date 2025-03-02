"use client";
import React, { useState, useEffect, useMemo } from "react";
import { FormContainer } from "@/components/organisms/Forms";
import BlogCardContainer from "@/components/cards/BlogCard";
import { fetchAPI } from "@/utils/apiService";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Fields/InputFields";
import TextArea from "@/components/atoms/Fields/TextArea";

const BlogPage = () => {
  const [blogdata, setBlogdata] = useState([]);
  const [category, setCategory] = useState("all");
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Hindu");
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const types = ["Hindu", "Nepal", "Tourism"];

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "loneWolf",
    category: "67b4162184adf1fc9b8274e3", // Use actual category ID
  });

  const fetchBlogs = async () => {
    try {
      const response = await fetchAPI("blogs", "GET");
      response?.data && setBlogdata(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setSubmitMessage("Failed to load blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    setSubmitMessage("Saving...");

    if (!newBlog.title.trim() || !newBlog.content.trim()) {
      alert("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("author", newBlog.author);
    formData.append("category", newBlog.category);

    if (imageFile) {
      formData.append("images", imageFile); // Match server's expected field name
    }

    try {
      const response = await fetchAPI("blogs", "POST", formData);

      if (response?.data) {
        setBlogdata(prev => [response.data, ...prev]);
        setIsAddBlogOpen(false);
        setNewBlog({
          title: "",
          content: "",
          author: "loneWolf",
          category: "67b4162184adf1fc9b8274e3",
        });
        setImageFile(null);
        setPreview(null);
        setSubmitMessage("Blog created successfully!");
        setTimeout(() => setSubmitMessage(""), 3000);
      } else {
        setSubmitMessage(response?.message || "Failed to create blog");
      }
    } catch (error) {
      console.error("Blog creation error:", error);
      setSubmitMessage(error.message || "Error creating blog");
    }
  };

  const filteredBlogs = useMemo(() => {
    return category === "all" 
      ? blogdata 
      : blogdata.filter(blog => blog.category.name === category);
  }, [category, blogdata]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className=" text-3xl font-bold text-center sm:text-left">Blog Management</h1>
        <div className="flex items-center gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2  text-black hover:bg-gray-300"
          >
            <option value="all">All Categories</option>
            {blogdata.reduce((acc, blog) => {
              const exists = acc.some(cat => cat === blog.category.name);
              return exists ? acc : [...acc, blog.category.name];
            }, []).map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Button
            onClick={() => setIsAddBlogOpen(!isAddBlogOpen)}
            text={isAddBlogOpen ? "Close" : "Add Blog +"}
            variant="default"
            size="medium"
          />
        </div>
      </div>

      {isAddBlogOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="">
            <FormContainer width="100%" formTitle="Create Blog">
              <Input
                label="Blog Title *"
                required
                value={newBlog.title}
                onChange={(e) => setNewBlog(prev => ({ ...prev, title: e.target.value }))}
              />
              
              <TextArea
                label="Blog Content *"
                required
                value={newBlog.content}
                onChange={(e) => setNewBlog(prev => ({ ...prev, content: e.target.value }))}
              />

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Blog Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
                {preview && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Preview:</p>
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-h-40 rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <Button
                  onClick={() => setIsAddBlogOpen(false)}
                  text="Cancel"
                  variant="secondary"
                />
                <Button
                  onClick={handleSaveBlog}
                  text="Publish Blog"
                  variant="default"
                />
              </div>
            </FormContainer>
          </div>
        </div>
      )}

      {submitMessage && (
        <div className={`text-center p-4 mb-4 rounded-lg ${
          submitMessage.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {submitMessage}
        </div>
      )}

      <BlogCardContainer 
        data={filteredBlogs} 
        admin={true} 
        refreshData={fetchBlogs}
      />
    </div>
  );
};

export default BlogPage;