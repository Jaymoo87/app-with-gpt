import React from 'react';

const Subscribe = () => {
  return (
    <div className="px-5 py-10 text-center bg-wh-10">
      <h4 className="text-base font-semibold">Subscribe to the Newsletter</h4>
      <p className="w-5/6 mx-auto my-3 text-wh-500">Enter Your Email Address to Subscribe</p>
      <input
        type="text"
        className="text-center w-5/6 min-s-[100px] px-5 py-2 border-2"
        placeholder="Enter Email Address"
      />
      <button className="bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] px-5 py-2 mt-3">Subscribe</button>
    </div>
  );
};

export default Subscribe;
