// en Next no se necesita importar react import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find & Share <br className="max-md:hidden" />{" "}
        <span className="orange_gradient text-center"> AI-Super Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptBites is a modern, open-source AI prompting tool designed to
        facilitate the exploration, generation, and sharing of imaginative
        prompts in today's world.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
