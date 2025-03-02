
"use client"
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const accessToken = Cookies.get("access_token"); // Get JWT token from cookies

    if (!accessToken) {
      setError('You are not authorized. Please log in again.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://thehindutourism.com/api/blogs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'JWT': accessToken, // Use JWT as header instead of Bearer
        },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          author: formData.author,
          category: formData.category,  // Pass category as string
        }),
      });

      const result = await response.json();
      console.log("API Response: ", result);  // Log the result to inspect

      if (response.ok) {
        setSuccess('Blog post submitted successfully!');
        setFormData({
          title: '',
          content: '',
          author: '',
          category: '',
        });
      } else {
        // Show API error message
        setError(result.message || 'An error occurred while submitting the post.');
      }
    } catch (err) {
      // Show general error message in case of network issues or unexpected errors
      console.error("Error occurred: ", err);  // Log the error for debugging
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Submit a Blog Post</h2>

      {success && <div className="text-green-500 mb-4">{success}</div>}
      {error && (
        <div className="text-red-500 mb-4">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter the title of the blog"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Write the content of the blog"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-semibold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter the author's name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-semibold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter the blog category"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? 'Submitting...' : 'Submit Post'}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
