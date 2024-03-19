import { Button, Input } from "@nextui-org/react";

const Newsletter = () => {
  return (<section  className=" relative flex w-full items-center justify-center  min-h-[500px] ">
    <div className="flex rounded-full absolute filter blur-[400px] bg-gradient-to-r from-redish-50 via-redish-50  to-blue-50 -z-1 min-w-[500px] min-h-[500px] aspect-square">Hey</div>
<div className="fex z-10 px-10 md:p-0 md:w-full lg:w-[70%] flex-col-reverse lg:flex-row  ">
  <div className="flex flex-col gap-5">
    <h3>A Full-Stack web &  mobile Development newsletter that sparks joy</h3>
    <p className="max-w-[70%]">A goal is to create helpfull content for developers , the newsletter will let you know upcoming contents and exclusove newsletters about devs trending</p>
    <p>No spam, unsubscribe at anytime.</p>

   <div className="flex gap-4 w-full">
    <form className="flex w-full gap-4">
    <div className="flex max-w-[80%] gap-2 "> <Input isRequired label="First name" variant="bordered" type="text"/>
              <Input isRequired variant="bordered" label="Email" type="email"/></div>
            <Button type="submit" color="danger" variant="bordered">Subscribe</Button></form>
   </div>

  </div>
  <div className="flex p-5">
    Hey
  </div>
</div>
  </section>);
};

export default Newsletter;
