import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}&nbsp;</span>
        Profile
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="my-16 prompt_layout">
        {data.map((item, index) => (
          <PromptCard
            key={index}
            prompt={item}
            handleEdit={() => handleEdit && handleEdit(item)}
            handleDelete={() => handleDelete && handleDelete(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
