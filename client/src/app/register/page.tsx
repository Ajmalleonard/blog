"use client";

import React, { ChangeEvent, useReducer, useState } from "react";
import { Button, Input, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { featuresfroAccount } from "@/components/constants";
import Account from "../register/account";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userAgentFromString } from "next/server";

// Define action types (if you plan to expand the reducer's function)
type ActionType = {
  type: "Switch";
};

// Define state type
type StateType = {
  Switch: boolean;
};

// Define form data type
interface FormValues {
  username: string;
  password: string;
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "Switch":
      return {
        ...state,
        Switch: !state.Switch,
      };
    default:
      return state;
  }
};

const page = () => {
  // ... reducer logic ...

  const router = useRouter();

  const [isLoading, setisLoading] = useState(false);
  const [erroMesage, setErrerMessage] = useState<string | null>(null);

  // Initialize formValue with the correct type and initial values
  const [formValue, setFormValue] = useState<FormValues>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.id]: e.target.value });
    console.log(formValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formValue.username || !formValue.password) {
      // No type assertion needed now
      setErrerMessage("Fill all required fields");
    }

    try {
      setisLoading(true);
      const res = await fetch("http://localhost:1000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      });
      const data = await res.json();
      if (res.ok) {
        setErrerMessage(null);
        setisLoading(false);
        console.log("Redirecting to signin...");
        router.push("/login");
        // Add console log here
      } else if (data.success === false) {
        setisLoading(false);
        setErrerMessage(data.message);
      }

      // ... handle the response ...
    } catch (err) {
      setisLoading(false);
      setErrerMessage("Strange error occurred");
      console.error(err); // Log any errors
    } finally {
      setisLoading(false); // Reset loading state on success or error
    }
  };

  return (
    <section className="h-full w-full md:p-20 lg:p-32 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-10 items-center w-full max-w-5xl md:bg-dark-50 p-10 min-h-unit-9xl rounded-xl ">
        <form
          action="/login"
          method="POST"
          onSubmit={handleSubmit}
          className={`flex  mx-auto gap-5 w-[80%] lg:w-[30%]
         flex-col items-start justify-center`}
        >
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <h2 className="text-[20px] font-normal">
            Hey Welcome back again take your sit back
          </h2>

          <div className="flex w-full">
            <div className="flex w-full flex-col md:flex-nowrap gap-4">
              <Input
                type="text"
                id="username"
                label="Username"
                onChange={handleChange}
              />
              <Input
                type="email"
                id="email"
                label="email"
                onChange={handleChange}
              />
              <Input
                id="password"
                type="password"
                label="Password"
                onChange={handleChange}
              />

              {erroMesage && (
                <p className=" bg-redish-50/5 p-3 rounded-lg text-[12px]  text-white">
                  {erroMesage}
                </p>
              )}
              <Button color="danger" variant="bordered" type="submit">
                {isLoading ? (
                  <>
                    <Spinner color="danger" size="sm" />
                    <span className="text-[12px] text-white ">Loading...</span>
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
              <p className="text-gray-500 text-[12px]">
                Alredy a User ?
                <span>
                  <a className="text-white mx-2" href="/login">
                    Sign in
                  </a>
                </span>
              </p>
            </div>
          </div>
        </form>
        <div className="flex w-full lg:w-[60%] relative p-5 justify-center items-center rounded-xl overflow-clip ring-1 ring-gray-600">
          <Image
            className="absolute w-auto  -bottom-2 -left-4"
            src={"/curve.svg"}
            alt={"carved"}
            width={200}
            height={200}
          />
          <div className="flex flex-col items-center justify-center gap-5 w-[90%]">
            {featuresfroAccount.map((item, index) => {
              return (
                <Account
                  key={item.title + index}
                  icon={item.icon}
                  title={item.title}
                  details={item.details}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
