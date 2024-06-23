import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import PastClients from "../Components/PastClients";
import Navigations from "../Components/Navigations";

function Home() {
  const [imageSlider, setImageSlider] = useState(1);
  const [quotes, setQuotes] = useState(1);

  // useEffect(() => {
  //   fetch("http://quotes.rest/quote/random.json?")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Sorry response not found");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setQuotes(data);
  //       console.log(quotes);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <main className=" quite-dark text-white py-4 w-11/12 rounded-3xl flex flex-col justify-center min-h-fit">
        <div
          id="text"
          className="flex flex-col items-center gap-y-4 mb-5 rounded-3xl "
        >
          <h1
            className="text-center font-bold text-5xl w-2/5 
      "
          >
            Visual Designer Based in Indonesia
          </h1>
          <p className="text-center text-stone-600 w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            culpa, iste numquam rerum, quo perferendis aperiam animi rem
            quibusdam beatae dolorum assumenda odit voluptate officia placeat
            recusandae reprehenderit optio quod.
          </p>
          <Link to="/contact">
            <button
              id="cnt-btn"
              className="bg-orange-500 flex gap-3 px-4 py-2 rounded-3xl font-semibold items-center text-xl relative"
            >
              Contact Me
              <div className=" bg-white text-orange-500 w-[30px] h-[30px] rounded-full flex justify-center text-xl ">
                <img
                  src="src/assets/rarr.png"
                  className="w-[20px]  object-left "
                  alt=""
                />
              </div>
            </button>
          </Link>
        </div>

        <div id="slide" className="flex justify-around w-full">
          <div className="w-1/2 relative flex justify-center">
            <img
              src="src/assets/phone-1.jpg"
              alt=""
              className="w-11/12 object rounded-2xl"
            />
            <div className="cursor-pointer absolute flex justify-between self-center right-8 left-8 bottom-8">
              <h1 className="text-2xl font-semibold">Branding Projects</h1>
              <div
                id="rot"
                className="bg-white text-orange-500 w-9 h-9 rounded-full flex justify-center"
              >
                <img
                  src="src/assets/rarr.png"
                  className="w-[20px]  object-left "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 relative flex justify-center">
            <img
              src="src/assets/phone-2.jpg"
              alt=""
              className="w-11/12 object rounded-2xl"
            />
            <div className="cursor-pointer absolute flex justify-between self-center right-8 left-8 bottom-8">
              <h1 className="text-2xl font-semibold">Branding Projects</h1>
              <div
                id="rot"
                className="bg-white text-orange-500 w-9 h-9 rounded-full flex justify-center"
              >
                <img
                  src="src/assets/rarr.png"
                  className="w-[20px]  object-left "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div
        id="bio"
        className="fade-in my-20 w-full min-h-fit flex items-center gap-20 px-20"
      >
        <div className="w-1/3 ">
          <img
            src="src/assets/profile.jpeg"
            alt=""
            className="w-2/3 rounded-full object"
          />
        </div>

        <article className="w-2/3">
          <p className="text-pretty w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam
            unde nemo doloremque cumque esse laboriosam fugit. Laboriosam vero
            nesciunt quam quibusdam enim non, eveniet dignissimos ducimus, odio
            possimus minus pariatur. Rerum doloremque iusto unde, id dolor ullam
            laudantium fugit, quis sint quae totam, reiciendis voluptatem. Magni
            tempore esse similique?
          </p>
        </article>
      </div>

      <main className=" quite-dark text-white w-11/12 rounded-3xl flex flex-col justify-center pt-10 mb-10">
        <p className="uppercase text-stone-500/40 self-center text-xl py-5 ">
          what i'm Doing
        </p>
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl text-pretty uppercase hover:text-7xl hover:text-purple-300 cursor-pointer w-fit self-center">
            Branding Design
          </h1>
          <h1 className="text-6xl text-pretty uppercase hover:text-7xl hover:text-purple-300 cursor-pointer w-fit self-center">
            ui/ux design
          </h1>
          <h1 className="text-6xl text-pretty uppercase hover:text-7xl hover:text-purple-300 cursor-pointer w-fit self-center">
            development
          </h1>
          <h1 className="text-6xl text-pretty uppercase hover:text-7xl hover:text-purple-300 cursor-pointer w-fit self-center">
            digital marketing
          </h1>
        </div>

        <div id="sub" className="">
          <header className="flex justify-between px-5 pt-10 pb-3 ">
            <p className="uppercase text-stone-500 font-semibold">
              Selected Project
            </p>
            <div className="flex gap-2">
              <button
                className="bg-stone-500/45 rounded-full w-7 h-7 cursor-pointer hover:bg-stone-800 active:bg-slate-700"
                onClick={() => setImageSlider(imageSlider - 1)}
                disabled={imageSlider === 1 ? true : false}
              >
                <p className="font-bold">{"<"} </p>
              </button>
              <button
                className="bg-stone-500/45 rounded-full w-7 h-7 cursor-pointer hover:bg-stone-800 active:bg-slate-700"
                onClick={() => setImageSlider(imageSlider + 1)}
                disabled={imageSlider === 7 ? true : false}
              >
                <p className="font-bold">{">"}</p>
              </button>
            </div>
          </header>

          <div id="images" className="w-full p-3 relative">
            <p className="absolute top-10 left-10 text-stone-500 text-lg font-medium">{`0${imageSlider}/07`}</p>
            <img
              src={`src/assets/phone-${imageSlider}.jpg`}
              alt=""
              className="w-full h-[540px] object rounded-lg"
            />
            <div className="absolute bottom-10 left-10 flex w-2/5 gap-10">
              <div className=" w-1/3 leading-s">
                <h3 className="text-stone-700 font-semibold pl-3 pb-3">
                  PROJECT
                </h3>
                <p className="text-pretty text-stone-400">
                  Designing a Social Media App for the Black Experience
                </p>
              </div>
              <div className=" leading-s">
                <h3 className="text-stone-700 font-semibold pl-3 pb-3">TYPE</h3>
                <p className="text-stone-400">Branding Project</p>
                <p className="text-stone-400">Web Design</p>
                <p className="text-stone-400">Mobile Apps</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="clients" className="w-11/12 flex flex-col items-center ">
        <p className="self-start text-stone-300 mb-10">PAST CLIENT</p>
        <main>
          <PastClients no="01" title="FACEBOOK" />
          <PastClients no="02" title="NETFLIX" />
          <PastClients no="03" title="ZOOM" />
        </main>
      </div>

      <div className="w-full mb-20">
        <header className="flex justify-between px-5  ">
          <p className="self-start text-stone-300 mb-10">PAST CLIENT</p>
          <div className="flex gap-2">
            <button
              className="bg-stone-500/45 rounded-full w-7 h-7 cursor-pointer hover:bg-stone-800 active:bg-slate-700 text-white"
              onClick={() => setQuotes(quotes - 1)}
              disabled={quotes === 1 ? true : false}
            >
              <p className="font-bold">{"<"} </p>
            </button>
            <button
              className="bg-stone-500/45 rounded-full w-7 h-7 cursor-pointer hover:bg-stone-800 active:bg-slate-700 text-white"
              onClick={() => setQuotes(quotes + 1)}
              disabled={quotes === 7 ? true : false}
            >
              <p className="font-bold">{">"}</p>
            </button>
          </div>
        </header>

        <article className="text-black px-10">
          <p className="text-2xl mb-7 font-bold w-10/12">
            "Donnie transformed our brand identity and website into a modern,
            sleek and professional representation of our company. Their design
            skills are second to none"
          </p>
          <div id="profile" className="flex gap-2 items-center">
            <img
              src="src/assets/profile.jpeg"
              alt=""
              className="rounded-full object h-10 w-10"
            />
            <div>
              <h3 className="font-bold">Joshua Jones</h3>
              <p className="text-stone-500">Popular Speaker</p>
            </div>
          </div>
        </article>
      </div>

      <main className=" quite-dark text-white py-4 w-11/12 rounded-3xl flex flex-col justify-center items-center min-h-fit">
        <div className="w-11/12 border-b-2 flex flex-col justify-center items-center pb-20 gap-5 border-stone-700">
          <h1 className="text-5xl w-4/12 font-medium  text-center">
            Having a Cool Project?
          </h1>
          <Link to="/contact" className=" w-fit">
            <button
              id="cnt-btn"
              className="bg-orange-500 flex gap-3 px-4 py-2 rounded-3xl font-semibold items-center text-xl relative"
            >
              Contact Me
              <div className=" bg-white text-orange-500 w-[30px] h-[30px] rounded-full flex justify-center text-xl ">
                <img
                  src="src/assets/rarr.png"
                  className="w-[20px]  object-left "
                  alt=""
                />
              </div>
            </button>
          </Link>
        </div>

        <div className="w-11/12 border-b-2 flex justify-center items-center pb-20 border-stone-700 pt-10">
          <div className=" w-1/2">
            <img
              src="src/assets/profile.jpeg"
              alt=""
              className="w-1/3 rounded-full object mb-5"
            />
            <h1 className="text-xl font-medium text-stone-400">
              Web Developer Based In <br /> Indonesia
            </h1>
          </div>
          <div className=" w-1/2 flex gap-10">
            <div className="flex flex-col gap-3 ">
              <h1 className="font-semibold text-xl">Navigation</h1>
              <Navigations name="home" />
              <Navigations name="about" />
              <Navigations name="explore" />
              <Navigations name="works" />
            </div>

            <div className="flex flex-col gap-3 ">
              <h1 className="font-semibold text-xl">Services</h1>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>Branding</p>
              </Link>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>UI/UX Design</p>
              </Link>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>Development</p>
              </Link>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>Degital Marketing</p>
              </Link>
            </div>

            <div className="flex flex-col gap-3 ">
              <h1 className="font-semibold text-xl">Socail Media</h1>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>Dribble</p>
              </Link>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>Twitter</p>
              </Link>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>Instagram</p>
              </Link>
              <Link
                className="text-stone-500 hover:underline font-medium capitalize"
                to="/"
              >
                <p>LinkedIn</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
