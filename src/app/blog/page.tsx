import React from "react";
import BlogPreview from "../components/blog/blogPreview";
import connectDB from "../database/db";
import Blog from "../database/blogSchema";

// Async function to fetch blogs
async function getBlogs() {
  await connectDB(); // Ensure DB connection is established
  try {
    // Fetch all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).lean(); // Use lean for plain JS objects
    return blogs.map((blog) => ({
      slug: blog.slug,
      title: blog.title,
      description: blog.description,
    }));
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

// Server Component to Fetch and Render Blogs
export default async function BlogPage() {
  const blogs = await getBlogs(); // Fetch blogs on the server

  if (!blogs || blogs.length === 0) {
    return <p>No blogs available at the moment.</p>;
  }

  return (
    <div>
      <BlogPreview blogs={blogs} /> {/* Pass blogs to the BlogPreview component */}
    </div>
  );
}
