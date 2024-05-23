"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

import Link from "next/link";

const ResultsPage = ({ result, attempted }) => {
  const correctResponses = result / 2;

  return (
    <div className="w-[90%] flex flex-col p-2 shrink-0 lg:p-4  lg:w-[80%] justify-center align-middle mx-auto md:mx-auto lg:mx-auto gap-4 text-center dark:text-slate-700">
      <div className="bg-[#f4f6fa] mt-6 xl:w-3/4 xl:rounded-2xl xl:p-2 2xl:rounded-2xl 2xl:shadow-2xl 2xl:p-6 p-6 md:p-2 flex gap-2 lg:p-2 lg:w-[80%] md:w-[80%] lg:mt-1 md:mx-auto lg:mx-auto shadow-2xl rounded-xl flex-col">
        <h1 className="text-[24px] lg:text-[44px] xl:text-[52px] 2xl:text-[84px] md:text-[32px] md:text-center md:mx-auto font-bold mb-2 md:w-3/4">
          Congratulations!
        </h1>
        <h2 className="text-[24px] lg:text-[24px] xl:text-[32px] 2xl:text-[64px]">
          {" "}
          You have completed the quiz
        </h2>
        <h1 className="text-[24px] lg:text-[24px] xl:text-[32px] 2xl:text-[64px]">
          Your new score is: <strong>{result}</strong>
        </h1>
        <h1 className="text-[24px] lg:text-[24px] xl:text-[32px] 2xl:text-[64px]">
          You attempted <strong>{attempted}</strong> questions in all
        </h1>
        <h1 className="text-[24px] lg:text-[24px] xl:text-[32px] xl:mb-4 2xl:text-[64px]">
          You got <strong>{correctResponses}</strong> correct answers
        </h1>
      </div>
      <div className="bg-[#a729f5] text-[#f4f6fa] lg:mx-auto mx-auto rounded-xl 2xl:mt-3 xl:rounded-2xl 2xl:rounded-2xl 2xl:shadow-2xl shadow-2xl hover:scale-105 w-full md:mx-auto md:w-[60%] lg:w-[60%] justify-center flex p-2 ">
        <Link
          className="text-[20px] font-semibold xl:text-[32px] 2xl:text-[64px]"
          href={"/"}
        >
          Take another quiz
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
