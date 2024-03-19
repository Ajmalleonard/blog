"use client";

import React, { ChangeEvent, useReducer, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { featuresfroAccount } from "@/components/constants";
import Account from "../account/account";
import Link from "next/link";
import { METHODS } from "http";

// Define action types
type ActionType = {
  type: "Switch";
};

// Define state type
type StateType = {
  Switch: boolean;
};

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
  // UI state transition
  const [state, dispatch] = useReducer(reducer, {
    Switch: true,
  });
  const toggle = () => {
    dispatch({ type: "Switch" });
  };

  // Loging State

  const [formValue, setFormValue] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.id]: e.target.value });
    console.log(formValue);
  };

  const handleNewUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch("auth/login", {
        // Using absolute URLs
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      });
      // Handle response
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="h-full w-full md:p-20 lg:p-32 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-10 items-center w-full max-w-5xl md:bg-dark-50 p-10 min-h-unit-9xl rounded-xl ">
        <form
          action="/login"
          method="POST"
          onSubmit={handleNewUser}
          className={`flex  mx-auto gap-5 w-[80%] lg:w-[30%]
         flex-col items-start justify-center`}
        >
          <h2 className="text-3xl font-bold">"Welcome Back"</h2>
          <h2 className="text-[20px] font-normal">
            "Hey Welcome back again take your sit back "
          </h2>

          <div className="flex w-full">
            <div className="flex w-full flex-col md:flex-nowrap gap-4">
              <Input
                isRequired
                type="text"
                id="name"
                label="Username"
                onChange={handleChange}
              />
              <Input
                isRequired
                id="password"
                type="password"
                label="Password"
                onChange={handleChange}
              />

              <Button color="danger" variant="bordered" type="submit">
                Login
              </Button>
              <p className="text-gray-500 text-[12px]">
                "You Are New Here ?"
                <span>
                  <a onClick={toggle} className="text-white" href="/account">
                    Register
                  </a>
                </span>
              </p>
            </div>
          </div>
        </form>
        <div className="flex w-full lg:w-[60%] relative p-5 justify-center items-center rounded-xl overflow-clip ring-1 ring-gray-600">
          <Image
            className="absolute -bottom-2 -left-4"
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
