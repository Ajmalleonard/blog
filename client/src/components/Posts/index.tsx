// components/pages/posts/index.tsx
import { BlogPost } from "@/types";
import Link from "next/link";
import React from "react";
import { api } from "../../../config";
import { toast } from "sonner";
import { Skeleton } from "@nextui-org/react";
import { formatDate } from "@/utils/utils";

function Posts() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await api.get("api/blogs/");
        setPosts(posts.data);
        toast.success("Posts fetched successfully!");
      } catch (err: any) {
        toast.error(err.message);
      }
    };
    fetchPosts();
    toast.loading;
  }, []);

  const subwords = (text: string, numWords: number) => {
    // Split the text into an array of words
    const words = text.split(" ");

    // Take the specified number of words
    const trimmedWords = words.slice(0, numWords);

    // Join the words back into a string
    const subwords = trimmedWords.join(" ");

    return subwords;
  };

  return (
    <div className="flex gap-10 flex-col   rounded-3xl p-5 w-full  h-full">
      <h3 className="subheading">RECENTLY PUBLISHED</h3>
      <div className="flex gap-1 space-y-1 flex-wrap  w-full">
        {posts.map((post, index) => (
          <Link key={post.title + index} href={`/post/${post.slug}`}>
            <div className="cursor-pointer flex flex-col gap-3 min-h-[300px] rounded-3xl bg-dark-50 p-5">
              <div className="w-full">
                {" "}
                <h3 className="text-md title ">{post.title}</h3>
                <div className="flex justify-start text-sm opacity-50 w-full">
                  <p className="date font-mono font-light">
                    {formatDate(post.createdAt.toString())}
                  </p>
                </div>
              </div>
              <p className=" font-normal text-[18px] max-w-[100%] md:max-w-[90%]">
                {subwords(post.content, 200) + "  ."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
