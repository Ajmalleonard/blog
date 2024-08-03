import { defineConfig, s } from "velite";

export default defineConfig({
  collections: {
    posts: {
      name: "Post",
      pattern: "content/posts/**/*.mdx", // Update this line

      schema: s.object({
        title: s.string(),
        date: s.date(),
        description: s.string(),
        content: s.mdx(),
        slug: s.string(),
      }),
    },
  },
});
