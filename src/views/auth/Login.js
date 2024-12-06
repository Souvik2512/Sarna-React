import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div class="h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white py-5 px-8 border-t-4 border-blue-700 rounded-md shadow-lg">
          <h2 class="text-3xl text-gray-400 mb-3">Login</h2>

          <div class="mb-2">
            <label class="text-sm">Name</label>
            <input
              type="text"
              placeholder="Name"
              class="w-full p-2 mt-1 bg-gray-200 rounded-md focus:outline-none"
            />
          </div>

          <div class="mt-2 mb-3">
            <label class="text-sm">Password</label>
            <input
              type="password"
              placeholder="Password"
              class="w-full p-2 mt-1 bg-gray-200 rounded-md focus:outline-none"
            />
          </div>

          <button
            class="border-none bg-blue-800 py-2 px-3 text-white roudend-sm w-full mt-2 rounded-md hover:bg-blue-700 mb-5"
            type="submit"
          >
            Sign In
          </button>

          <a href="/" class="text-sm text-blue-400">
            Forgot my Password
          </a>
        </div>
      </div>
    </>
  );
}
