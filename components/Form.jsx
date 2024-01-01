import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="font-[800] text-4xl text-left">
        <span className="blue_gradient">{type} </span>Post
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-5 glassmorphism"
      >
        <div>
          <label htmlFor="title" className="mb-2 inline-block">
            <span className="text-base text-gray-700">Title</span>
          </label>
          <input
            className="w-full rounded-lg p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="title"
            placeholder="eg. How to cook a delicious meal"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="description" className="mb-2 inline-block">
            <span className="text-base text-gray-700">Description</span>
          </label>
          <textarea
            className="w-full rounded-lg p-2 border border-gray-400 focus:outline-none focus:ring-2 focus
            :ring-blue-300"
            type="text"
            name="description"
            placeholder="eg. How to cook a delicious meal"
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            rows={6}
          />
        </div>
        <div>
          <label htmlFor="tags" className="mb-2 inline-block">
            <span className="text-base text-gray-700">
              Tag &nbsp;
              <span className="font-normal">
                (#programming, #product, #idea)
              </span>
            </span>
          </label>
          <input
            className="w-full rounded-lg p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="tags"
            placeholder="eg. #programming"
            value={post.tags}
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          />
        </div>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="outline_btn">
            Cancel
          </Link>
          <button type="submit" className="black_btn">
            {submitting ? `${type}...` : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
