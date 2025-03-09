import React from 'react';
import type { Blog } from './blogData'
import styles from './blogPreview.module.css'
import Link from "next/link";

type BlogContentProps = {
    blogs: { slug: string; title: string; description: string }[];
  };
  
  const BlogContent: React.FC<BlogContentProps> = ({ blogs }) => {
    return (
      <div className={styles.blogContainer}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <div className={styles.blogList}>
          {blogs.map((blog) => (
            <div key={blog.slug} className={styles.blogCard}>
              <h2 className={styles.blogName}>{blog.title}</h2>
              <p className={styles.blogDescription}>{blog.description}</p>
              <Link href={`/blog/${blog.slug}`} className={styles.blogLink}>Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogContent;