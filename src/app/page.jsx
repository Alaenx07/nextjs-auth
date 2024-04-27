"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
export default function Home() {
  const { data: session } = useSession();
  if (!session) redirect("login");

  return (
    <main>
      <Navbar session={session} />
      <div className="container mx-auto">
        <h3>Welcome to home page</h3>
        <hr className="my-3" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          aliquid ad, corrupti, minus velit ex dolore vel consequatur esse
          inventore laborum ut perspiciatis repellendus. Quos velit ut at
          nostrum impedit.
        </p>
      </div>
    </main>
  );
}
