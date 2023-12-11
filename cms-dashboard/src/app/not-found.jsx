"use client";

import Error from "@/assets/error.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <>
      <div className="container-error">
        <Image src={Error} alt="error" className="img-error" />
      </div>
    </>
  );
}
