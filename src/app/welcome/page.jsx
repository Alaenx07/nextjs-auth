"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function WelcomePage() {
  const { data: session } = useSession();
  console.log(session?.user?.role);
  if (!session) redirect("/login");

  if (session?.user?.role === "admin") {
    redirect("/admin");
  }

  return (
    <div>
      <Navbar session={session} />
      <div className="container mx-auto">
        <h3 className=" text-3xl my-3">Welcome {session?.user?.name}</h3>
        <p>Email: {session?.user?.email}</p>

        <hr className="my-3" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum
          repellat harum, voluptas quas nostrum nihil officiis laboriosam quidem
          magni laborum odit fugit ab perspiciatis iste debitis nam suscipit
          dicta!
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
