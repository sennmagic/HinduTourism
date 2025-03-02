import React from 'react'
import HeaderBanner from '@/components/organisms/HeaderBanner'
import Midnavbar from '@/components/NavBar/mid-navbar'
import BlogCardContainer from '@/components/cards/BlogCard'
import { fetchAPI } from '@/utils/apiService'

const BlogPage = async () => {
  const navItems = [
    { label: "All", id: "All" },
    { label: "Travel tips", id: "tips" },
    { label: "Hinduism", id: "Hinduism" },
    { label: "Nepal", id: "Nepal" },
  ]

  const endpoint = "blog"
const blogdata = await fetchAPI("blogs", "GET", null, null);

  return (
    <div>
      <HeaderBanner 
        backgroundImage="/images/heroblog.svg"
        title="Hindu Tourism Blog"
        subtitle="Travel tips, facts & customer stories"
        titleColor="orange.light"
        subtitleColor="text-black-500"
      />
      
      <Midnavbar navItems={navItems} />
      <BlogCardContainer data={blogdata.data} />
    </div>
  )
}

export default BlogPage; 