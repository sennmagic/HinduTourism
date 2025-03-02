"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import { fetchAPI } from "@/utils/apiService";
const BlogCard = ({ category, title, description, slug, admin = false  , id }) => {

   const handleDelete = async () => {
      try {
        await fetchAPI(`blogs/${id}`, "DELETE");
     // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    };
  return (
    <div className="w-full h-full bg-white rounded-[10px] shadow-md p-6 flex flex-col justify-between relative">
      {/* Admin Actions */}
      {admin && (
        <div className="absolute top-4 right-4 flex gap-3">
          <FaEdit size={22} className="text-gray-600 cursor-pointer" />
          <FaTrash onClick={handleDelete} size={22} className="text-red-500 cursor-pointer" />
        </div>
      )}

      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <div className="w-[100px] p-3 bg-[#fcfaf1] rounded-2xl text-[#8b91a2] text-sm font-normal">
          {category}
        </div>
        <h2 className="text-[#2b2727] text-lg md:text-xl lg:text-2xl font-semibold">
          {title}
        </h2>
        <div className="text-[#5e6282] text-base md:text-lg font-normal leading-normal">
          {description}
        </div>
      </div>

      <div className="flex items-center gap-2 cursor-pointer text-orange-light mt-4 md:mt-6 lg:mt-8 text-base font-semibold">
        <Link href={`/blogs/${slug}`}>Read more</Link>
        <Image
          src="/images/primaryarrowleft.svg"
          alt="Read more arrow"
          width={20}
          height={10}
        />
      </div>
    </div>
  );
};

const BlogCardContainer = ({ data = [], admin = false, itemsPerPage = 7  , onDelete}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (data.length === 0) {
    return <p className="text-center text-gray-500">No blogs available.</p>;
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 my-spacer">
        {paginatedData.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            category={blog.category?.name || "Uncategorized"}
            title={blog.title}
            description={blog.content.substring(0, 100) + "..."}
            slug={blog._id}
            admin={admin}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-3">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full transition-all ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Prev
          </button>
          <span className="px-4 py-2 border border-gray-300 rounded-full bg-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full transition-all ${
              currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCardContainer;
