import React from 'react';

export const Signin = () => {
  return (
    <>
      <div className="h-[calc(100vh-64px)]">
        <form className="w-full flex items-center justify-center h-full">
          <div className="border-2 border-green-600 rounded-2xl w-full max-w-lg p-6">
            <p className="capitalize font-bold text-2xl leading-9 text-therapyDarkGreen mb-10">
              Signin
            </p>
            <div>
              <div>
                <input
                  className="w-full h-12 rounded-md border border-green-600  bg-white outline-none p-3 text-black mb-4"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
