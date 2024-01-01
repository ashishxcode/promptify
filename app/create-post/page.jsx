"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { Router } from "next/router";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    prompt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        Router.push("/");
      }
    } catch (error) {
      console.log("CREATE POST ERROR", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
