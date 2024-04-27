"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const { data: session } = useSession();
  const router = useRouter();
  if (session) router.replace("/welcome");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid credentials");
        setLoading(false); // Set loading to false if there is an error
        return;
      }
      router.replace("welcome");
    } catch (e) {
      console.log(e);
      setError("An error occurred while signing in");
      setLoading(false); // Set loading to false if there is an error
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" container mx-auto py-5">
        <h1>Login Page</h1>
        <hr className="my-3" />
        <form action="" onSubmit={handleSubmit}>
          {error && (
            <div className=" bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className=" block bg-gray-300 p-2 my-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className=" block bg-gray-300 p-2 my-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />

          <button
            className=" bg-green-500 p-2 rounded-md text-white"
            type="submit"
          >
            {loading ? "Signing In..." : "Sign In"}{" "}
            {/* Change button text based on loading state */}
          </button>
        </form>
        <hr className="my-3" />
        <p>
          Already have an account? go to{" "}
          <Link className=" text-blue-600 hover:underline" href={"/register"}>
            Register
          </Link>{" "}
          Page
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
