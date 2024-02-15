"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/Profile";

const MyProfile = () => {
  const [posts, setPosts] = useState([]);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/users/${session.user.id}/posts`);
        const data = await response.json();

        console.log("data", data);
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (session?.user?.id) {
      fetchPosts();
    }
  }, []);

  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to my profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
