"use client";
import React, { useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data = [], handleTagClick }) => {
  return (
    <div className="my-16 prompt_layout">
      {data.map((item, index) => (
        <PromptCard key={index} prompt={item} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = React.useState("");
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();

        console.log("data", data);
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchTextChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
