import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          &nbsp;AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptify is an open-source Al prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      {/* TODO: Add Feed */}
    </section>
  );
};

export default Home;
