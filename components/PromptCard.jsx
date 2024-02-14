"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ prompt, handleTagClick }) => {
  const [copied, setCopied] = React.useState("");

  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => {
      setCopied("");
    }, 1500);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5 mb-4">
        <div className="flex-1 flex justify-start items-center gap-4 cursor-pointer">
          <Image
            src={prompt.author.image}
            width={40}
            height={40}
            className="rounded-full object-contain"
            alt={prompt.author.name}
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {prompt.author.name}
            </h3>
            {prompt.author.username && (
              <p className="text-sm text-gray-500">@{prompt.author.username}</p>
            )}
          </div>
        </div>
        <div className="copy_btn" onClick={() => handleCopy()}>
          <Image
            src={
              copied === prompt.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={16}
            height={16}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 my-4 font-satoshi">
        <p className="text-sm font">{prompt.prompt}</p>
        <p
          className="text-sm font-inter cursor-pointer blue_gradient"
          onClick={handleTagClick && handleTagClick(prompt.tag)}
          role="button "
        >
          {prompt.tag}
        </p>
      </div>
    </div>
  );
};

export default PromptCard;
