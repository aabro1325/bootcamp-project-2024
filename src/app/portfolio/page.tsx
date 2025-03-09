import React from "react";
import PortfolioContent from "../components/portfolio/portfolioContent";
import connectDB from "../database/db";
import Project from "../database/portfolioSchema";

// Async function to fetch blogs
async function getProjects() {
  await connectDB(); // Ensure DB connection is established
  try {
    // Fetch all blogs and sort by date
    const projects = await Project.find().sort({ date: -1 }).lean(); // Use lean for plain JS objects
    return projects.map((project) => ({
      slug: project.slug,
      title: project.title,
      description: project.description,
    }));
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}

// Server Component to Fetch and Render Blogs
export default async function PortfolioPage() {
  const projects = await getProjects(); // Fetch blogs on the server

  if (!projects || projects.length === 0) {
    return <p>No projects available at the moment.</p>;
  }

  return (
    <div>
      <PortfolioContent projects={projects} /> {/* Pass blogs to the BlogPreview component */}
    </div>
  );
}
