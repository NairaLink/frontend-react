import React from 'react';

export const Signup = () => {
  return (
    <main className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center">
        <form className="border-2 border-green-600 rounded-2xl w-full max-w-lg p-6 ">
          <p className="capitalize font-bold text-2xl leading-9 text-therapyDarkGreen mb-10 ">
            signup
          </p>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Enter first name"
              name="firstname"
              className="w-full h-12 rounded-md border border-green-600 bg-white outline-none p-3 text-black mb-4"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Enter last name "
              className="w-full h-12 rounded-md border border-green-600 bg-white outline-none p-3 text-black mb-4"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full h-12 rounded-md border border-green-600 bg-white outline-none p-3 text-black mb-4"
          />
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder=" Enter password"
              className="w-full h-12 rounded-md border border-green-600 bg-white outline-none p-3 text-black mb-4"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="btn w-full max-w-[242px] bg-green-600 text-white capitalize h-14 rounded-xl hover:bg-green-900  border-none"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
