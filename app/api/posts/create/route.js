import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (req, res) => {
  const { userId, title, prompt, tag } = await req.json();

  try {
    await connectToDB();

    const newPost = new Post({
      author: userId,
      title: title,
      prompt: prompt,
      tag: tag,
    });

    const savedPost = await newPost.save();

    return new Response(savedPost, { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
