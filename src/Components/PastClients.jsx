import React from "react";

function PastClients({ no, title, img }) {
  return (
    <div
      id="mini-client"
      className="flex w-full text-stone-500 border-b-2 py-5 mb-10 h-[208px]"
    >
      <div className=" w-1/12 font-medium">{no}</div>
      <div className=" w-2/6 flex justify-center relative  items-center p-1 ">
        <img
          id="hidden-img"
          src="src/assets/ai-generated-8649123_640.jpg"
          alt=""
          className="rounded-lg w-4/5 object-top object-cover h-64 absolute -top-16"
        />
      </div>
      <article className=" w-3/6">
        <h2 className="font-semibold text-xl mb-10">{title}</h2>
        <p className="font-medium">
          Through our community practice,helping one of the world's leading
          technology companies advise and mentor for and ongoing global
          initiative that spotlights inspirational YouTube creators
        </p>
      </article>
    </div>
  );
}

export default PastClients;
