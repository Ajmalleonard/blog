import Link from "next/link";
import React from "react";

function logo2() {
  return (
    <div>
      <Link href="/">
        <img src={"/logo2.svg"} alt={"logo"} width={19} height={30} />
      </Link>
    </div>
  );
}

export default logo2;
