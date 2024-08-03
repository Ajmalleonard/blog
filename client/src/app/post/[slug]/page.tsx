"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { api } from "../../../../config";
import { toast } from "sonner";
import { ArrowLeft } from "iconsax-react";
import { BlogPost } from "@/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode, {
  Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import { formatDate } from "@/utils/utils"; // Adjust the import path as needed

const BlogPostPage: React.FC = () => {
  const param = usePathname().split("/");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    const fetchPostData = async () => {
      if (!post) {
        toast.loading("Loading...");
      }
      try {
        const response = await api.get<BlogPost>(`/api/blogs/${param[2]}`);
        const data = response.data;
        setPost(data);

        const prettyCodeOptions: Partial<PrettyCodeOptions> = {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className!.push("highlighted");
          },
          onVisitHighlightedChars(node) {
            node.properties.className = ["word"];
          },
        };

        // Serialize the MDX content
        const mdxSource = await serialize(data.content, {
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          },
        });
        setMdxSource(mdxSource);

        toast.dismiss();
      } catch (error) {
        toast.error("Error loading post");
      }
    };
    fetchPostData();
  }, [param]);

  if (!post || !mdxSource) {
    return <div className="max-w-4xl mx-auto py-32">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-32 px-4">
      <div
        onClick={() => router.push("/")}
        className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 cursor-pointer mb-8"
      >
        <ArrowLeft size={20} />
        <p>All Posts</p>
      </div>
      <article className="prose lg:prose-xl dark:prose-invert">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="mb-8 text-gray-500">
          {post.publishedAt && (
            <time dateTime={new Date(post.publishedAt).toISOString()}>
              {formatDate(post.publishedAt.toString())}
            </time>
          )}
          {post.lastModified && (
            <span>
              {" "}
              · Updated on {formatDate(post.lastModified.toString())}
            </span>
          )}
        </div>
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  );
};

export default BlogPostPage;
