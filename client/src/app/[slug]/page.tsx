import React from "react";
import Link from "next/link";
import TableOfContent from "@/components/table_of_contents";

function SinglePost() {
  return (
    <section className="flex mx-auto flex-col lg:max-w-7xl h-auto ">
      <div className="bg-black flex gap-4 justify-start items-center h-[140px] px-4">
        <div className="flex gap-1 p-4  bg-dark-40 rounded-xl w-[210px]">
          <Link href={"/"}>
            {" "}
            <h3 className="">Home</h3>
          </Link>
          <p>/</p>
          <Link href={"/"}>
            {" "}
            <h3 className="">Tutorial</h3>{" "}
          </Link>
          <p>/</p>
          <Link href={"/"}>
            <h3 className="">CSS</h3>
          </Link>
        </div>
        <h3 className="text-4xl">BEST CSS TOOLS FOR 2024</h3>
      </div>
      <section className="w-full h-[1900px] xl:max-w-7xl bg-dark flex  justify-between xl:px-10 ">
        <div className="flex flex-col m-3 rounded-2xl w-full md:w-[80%] bg-dark-50 items-start px-10 py-10 justify-start gap-10">
          {/* Overview */}
          <div>
            <h3 className="text-xl text-white opacity-50 font-regular mb-4">
              Overview
            </h3>
            <div className="flex w-full  md:w-[80%]">
              <div className="bg-white w-2"></div>
              <div className="flex flex-col bg-black rounded-ss-0 rounded-tr-3xl rounded-b-3xl ml-2 p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  quisquam nobis iure officia rerum praesentium laboriosam
                  aliquam consequatur neque enim voluptas omnis assumenda
                  dolorum voluptatibus corporis accusantium animi, delectus
                  commodi expedita facilis, tenetur reiciendis. Iusto
                  dignissimos dolorem ad quod numquam atque officia ipsam,
                  temporibus alias assumenda soluta, tempora magnam neque iure
                  perspiciatis voluptatem ullam commodi impedit laudantium
                  quibusdam. Delectus, corrupti.
                </p>
              </div>
            </div>
          </div>
          {/* content */}
          <div>
            <p className="text-xl uppercase mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quas reprehenderit nisi vero sapiente numquam accusantium
              perferendis. Placeat qui quasi similique, optio, sed voluptates
              accusantium numquam at voluptas facilis nemo debitis veniam minima
              cumque corrupti dolorum ratione adipisci consectetur totam sequi
              consequuntur obcaecati velit aliquid. Consequatur sequi autem quos
              nesciunt libero corrupti iste recusandae. Aperiam distinctio sed
              dolores dolore in? Ea quo dolore cum iste voluptatibus quam quos
              ipsam, consequatur dolores accusamus placeat natus illum nisi illo
              voluptate fugiat expedita dolorum amet. Culpa, quo fuga
              necessitatibus blanditiis aut ipsa in!
            </p>
          </div>{" "}
          {/* content */}
          <div>
            <p className="text-xl uppercase mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quas reprehenderit nisi vero sapiente numquam accusantium
              perferendis. Placeat qui quasi similique, optio, sed voluptates
              accusantium numquam at voluptas facilis nemo debitis veniam minima
              cumque corrupti dolorum ratione adipisci consectetur totam sequi
              consequuntur obcaecati velit aliquid. Consequatur sequi autem quos
              nesciunt libero corrupti iste recusandae. Aperiam distinctio sed
              dolores dolore in? Ea quo dolore cum iste voluptatibus quam quos
              ipsam, consequatur dolores accusamus placeat natus illum nisi illo
              voluptate fugiat expedita dolorum amet. Culpa, quo fuga
              necessitatibus blanditiis aut ipsa in!
            </p>
          </div>{" "}
          {/* content */}
          <div>
            <p className="text-xl uppercase mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quas reprehenderit nisi vero sapiente numquam accusantium
              perferendis. Placeat qui quasi similique, optio, sed voluptates
              accusantium numquam at voluptas facilis nemo debitis veniam minima
              cumque corrupti dolorum ratione adipisci consectetur totam sequi
              consequuntur obcaecati velit aliquid. Consequatur sequi autem quos
              nesciunt libero corrupti iste recusandae. Aperiam distinctio sed
              dolores dolore in? Ea quo dolore cum iste voluptatibus quam quos
              ipsam, consequatur dolores accusamus placeat natus illum nisi illo
              voluptate fugiat expedita dolorum amet. Culpa, quo fuga
              necessitatibus blanditiis aut ipsa in!
            </p>
          </div>{" "}
          {/* content */}
          <div>
            <p className="text-xl uppercase mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quas reprehenderit nisi vero sapiente numquam accusantium
              perferendis. Placeat qui quasi similique, optio, sed voluptates
              accusantium numquam at voluptas facilis nemo debitis veniam minima
              cumque corrupti dolorum ratione adipisci consectetur totam sequi
              consequuntur obcaecati velit aliquid. Consequatur sequi autem quos
              nesciunt libero corrupti iste recusandae. Aperiam distinctio sed
              dolores dolore in? Ea quo dolore cum iste voluptatibus quam quos
              ipsam, consequatur dolores accusamus placeat natus illum nisi illo
              voluptate fugiat expedita dolorum amet. Culpa, quo fuga
              necessitatibus blanditiis aut ipsa in!
            </p>
          </div>{" "}
          {/* content */}
          <div>
            <p className="text-xl uppercase mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quas reprehenderit nisi vero sapiente numquam accusantium
              perferendis. Placeat qui quasi similique, optio, sed voluptates
              accusantium numquam at voluptas facilis nemo debitis veniam minima
              cumque corrupti dolorum ratione adipisci consectetur totam sequi
              consequuntur obcaecati velit aliquid. Consequatur sequi autem quos
              nesciunt libero corrupti iste recusandae. Aperiam distinctio sed
              dolores dolore in? Ea quo dolore cum iste voluptatibus quam quos
              ipsam, consequatur dolores accusamus placeat natus illum nisi illo
              voluptate fugiat expedita dolorum amet. Culpa, quo fuga
              necessitatibus blanditiis aut ipsa in!
            </p>
          </div>{" "}
        </div>
        <div className="hidden md:block p-3 w-[20%] h-[600px]">
          <TableOfContent />
        </div>
      </section>
    </section>
  );
}

export default SinglePost;
