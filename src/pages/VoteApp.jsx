import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function VoteApp() {
  const dogVoteEl = useRef();
  const catVoteEl = useRef();
  const [dogVote, setdogVote] = useState(50);
  const [catVote, setCatVote] = useState(50);

  const dogVoteBtnHandler = () => {
    if (dogVote < 100) {
      setdogVote((prev) => prev + 5);
      setCatVote((prev) => prev - 5);
    }
  };
  const catVoteBtnHandler = () => {
    if (catVote < 100) {
      setCatVote((prev) => prev + 5);
      setdogVote((prev) => prev - 5);
    }
  };
  useEffect(() => {
    dogVoteEl.current.style.width = dogVote + "%";
    catVoteEl.current.style.width = catVote + "%";

    return () => {};
  }, [dogVote, catVote]);

  return (
    <>
      <div className="relative">
        <section className=" flex  w-[100vw] h-screen ">
          <div className="absolute">
<Link to={"/forms"}>
          <p className="text-center text-white">Click Me</p>
</Link>
          </div>
          <div
            className="bg-red-700 h-screen pr-4"
            ref={dogVoteEl}
          ></div>
          <div
            className="bg-green-700 h-screen pl-4 "
            ref={catVoteEl}
          ></div>
        </section>
        <section className="absolute top-[50vh] left-[22vw] lg:left-[42vw] [&_button]:h-10 [&_button]:rounded-md">
          <button
            onClick={dogVoteBtnHandler}
            className="bg-white font-bold text-red-700 px-8 hover:opacity-60 mr-4"
          >
            Dog
          </button>
          <button
            onClick={catVoteBtnHandler}
            className="bg-white  text-green-700 font-bold px-8 hover:opacity-60 "
          >
            Cat
          </button>
        </section>
        <section className="flex w-[100vw] justify-between px-[5rem] absolute bottom-10 font-bold text-white">
          <p>Dog: {dogVote}%</p>
          <p>Cat: {catVote}%</p>
        </section>
      </div>
    </>
  );
}

export default VoteApp;
