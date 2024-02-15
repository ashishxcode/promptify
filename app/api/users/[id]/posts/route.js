import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const posts = await Post.find({
      author: params.id,
    }).populate("author");

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
