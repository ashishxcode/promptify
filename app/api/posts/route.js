import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const GET = async (req, res) => {
  try {
    await connectToDB();

    const posts = await Post.find({}).populate("author");

    console.log("posts", posts);

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log("ERROR", error);
    return new Response(
      JSON.stringify({
        message: "Error fetching posts",
        error: error,
      }),
      { status: 400 }
    );
  }
};
