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

  const types = ["Hindu", "Nepal", "Tourism"];

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "loneWolf",
    category: "Travel Tips",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const fetchBlogs = async () => {
    try {
      const response = await fetchAPI("blogs", "GET");
      if (response?.data) {
        setBlogdata(response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

 

  const toggleAddBlog = () => {
    setIsAddBlogOpen(!isAddBlogOpen);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    setSubmitMessage("Saving...");

    if (!newBlog.title.trim() || !newBlog.content.trim()) {
      alert("Title and content are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("author", newBlog.author);
    formData.append("category", "67b4162184adf1fc9b8274e3");

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetchAPI("blogs", "POST", formData);
      if (response?.data) {
        setBlogdata((prev) => [...prev, response.data]);
        setIsAddBlogOpen(false);
        setNewBlog({
          title: "",
          content: "",
          author: "loneWolf",
          category: "Travel Tips",
        });
        setImageFile(null);
        setPreview(null);
        setSubmitMessage("Blog posted successfully!");
      } else {
        setSubmitMessage("Failed to post blog. Please try again.");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      setSubmitMessage("Error posting blog. Please try again.");
    }
  };

  const filteredBlogs = useMemo(() => {
    if (category === "all") return blogdata;
    return blogdata.filter((blog) => blog.category.name === category);
  }, [category, blogdata]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-center sm:text-left">Blog Management</h1>
        <div className="flex items-center gap-4">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-lg shadow-md bg-gray-200 text-black hover:bg-gray-300"
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <Button
            onClick={toggleAddBlog}
            text={isAddBlogOpen ? "Close" : "Add Blog +"}
            variant="default"
            size="medium"
          />
        </div>
      </div>

      {isAddBlogOpen && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="rounded-2xl shadow-lg p-8 w-full max-w-lg relative bg-white">
            <FormContainer width="100%" formTitle="Create Blog">
              <Input
                label="Blog Title *"
                required
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <TextArea
                label="Blog Content *"
                required
                value={newBlog.content}
                onChange={(e) =>
                  setNewBlog((prev) => ({ ...prev, content: e.target.value }))
                }
              />
              <Input
                label="Category"
                required
                name="category"
                value={newBlog.category}
                onChange={(e) =>
                  setNewBlog((prev) => ({ ...prev, category: e.target.value }))
                }
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

              <Button onClick={handleSaveBlog} text="Save Blog" variant="primary" size="medium" />
            </FormContainer>
          </div>
        </div>
      )}

      {submitMessage && (
        <div className="text-center mt-4 text-lg text-green-500">
          {submitMessage}
        </div>
      )}
{/* 
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6">
        {["all", "new", "latest", "popular"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-lg shadow-md transition-all ${
              category === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div> */}

      <BlogCardContainer data={filteredBlogs} admin={true}  />
    </div>
  );
};

export default BlogPage;