import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className=" select-none py-32 relative flex w-full items-center justify-center  min-h-[500px] ">
      <div className="flex rounded-full absolute filter blur-[400px] bg-gradient-to-r -z-1 min-w-[500px] min-h-[500px] aspect-square"></div>
      <div className="max-w-5xl  h-auto py-10 flex z-10 px-10   flex-col-reverse lg:flex-row  ">
        <div className="flex w-full flex-col gap-5  md:w-full lg:w-[80%]">
          <h3>
            A Full-Stack web & mobile Development newsletter that sparks joy
          </h3>
          <p className="max-w-[60%]">
            A goal is to create helpfull content for developers , the newsletter
            will let you know upcoming contents and exclusove newsletters about
            devs trending
          </p>
          <p className="text-white/60">
            <span className="text-redish-50">No spam,</span> unsubscribe at
            anytime.
          </p>

          <div className="flex gap-4 w-full">
            <form className="flex w-full max-w-[90%] gap-4 items-center justify-start">
              <div className="flex max-w-[80%] gap-2 ">
                <Input
                  isRequired
                  label="First name"
                  variant="bordered"
                  type="text"
                />
                <Input
                  isRequired
                  variant="bordered"
                  label="Email"
                  type="email"
                />
              </div>
              <Button type="submit" color="danger" variant="bordered">
                Subscribe
              </Button>
            </form>
          </div>
        </div>{" "}
        <div className="flex h-full w-[30%] relative items-center justify-center ">
          {" "}
          <Image
            className=" animate-bounce-easy  xl:w-[400px] object-cover lg:w-[300px] md:w-[200px] w-[200px] aspect-square"
            alt="Ajma;"
            src={"/memo.webp"}
            width={1000}
            height={1000}
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
