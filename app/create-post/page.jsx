"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    prompt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();

  const router = useRouter();

  const createPost = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch("/api/posts/create", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push("/");
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
