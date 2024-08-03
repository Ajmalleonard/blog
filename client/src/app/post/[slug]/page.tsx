"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { api } from "../../../../config";
import { toast } from "sonner";
import { ArrowLeft } from "iconsax-react";
import { Router } from "next/router";

function page() {
  const param = usePathname().split("/");

  const router = useRouter();
  useEffect(() => {
    const postData = async () => {
      const response = await api.get(`/api/blogs/${param[2]}`);
      const data = await response.data;
      toast.loading("Loading ");
      console.log(data);
    };
    postData();
  });

  return (
    <div className="max-w-4xl py-32 w-full min-h-screen">
      <div onClick={() => router.push("/")} className="flex justify-start">
        <ArrowLeft />
        <p>AllPost</p>
      </div>
    </div>
  );
}

export default page;
