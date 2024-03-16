import { posts } from "./constants/index";

const TableOfContent = () => {
  return (
    <section className="w-[200px] h-full rounded-2xl ">
      <h1 className="font-bold text-white p-3 ">Table of Contents</h1>
      {posts[0].tableofContents.map((item, index) => {
        return (
          <div
            className="rounded-lg hover:bg-dark-40 hover:text-redish-50 cursor-pointer m-2 p-3"
            key={index}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </section>
  );
};

export default TableOfContent;
