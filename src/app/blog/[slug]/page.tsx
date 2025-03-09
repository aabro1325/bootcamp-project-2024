"use client";
import styled from "styled-components";

type Props = {
  params: { slug: string };
};

type CommentProps = {
  comment: IComment;
};

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

function parseCommentTime(time: Date) {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

const CommentContainer = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #f8f8f8;
`;

const Username = styled.h4`
  margin: 0;
  color: #333;
  font-size: 1.1rem;
`;

const CommentText = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const TimeStamp = styled.span`
  color: #999;
  font-size: 0.9rem;
`;

function Comment({ comment }: CommentProps) {
  return (
    <CommentContainer>
      <Username>{comment.user}</Username>
      <CommentText>{comment.comment}</CommentText>
      <TimeStamp>{parseCommentTime(comment.time)}</TimeStamp>
    </CommentContainer>
  );
}

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      {/* Add your blog display JSX here */}
      <h1>{blog.title}</h1>
      <div>{blog.content}</div>
    </div>
  );
}
