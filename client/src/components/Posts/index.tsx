// components/pages/posts/index.tsx
import Link from "next/link";
import { posts } from "../constants";

function Posts() {
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
    <div className="flex gap-10 flex-col my-10 rounded-3xl p-5 w-full bg-dark-50 md:w-[60%] h-full">
      <h3 className="subheading">RECENTLY PUBLISHED</h3>
      <div className="flex gap-1 space-y-1 flex-wrap w-full">
        {posts.map((post, index) => (
          <Link key={post.title + index} href={"/post"}>
            <div className="cursor-pointer flex flex-col gap-3 rounded-lg hover:bg-dark-40 p-5">
              <h3 className="heading">{post.title}</h3>
              <p className="font-small text-[15px] max-w-[100%] md:max-w-[90%]">
                {subwords(post.content, 50) + "  ......"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Posts;
