"use client";

import Image from "next/image";
import Link from "next/link";

const subjects = [
  { id: "javascript", name: "Javascript", img: "/icon-js.svg" },
  { id: "html", name: "Html", img: "/icon-html.svg" },
  { id: "css", name: "Css", img: "/icon-css.svg" },
  {
    id: "accessibility",
    name: "Accessibility",
    img: "/icon-accessibility.svg",
  },
];

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-8 w-full py-3 gap-3 px-0 mx-auto lg:text-[24px] sm:text-[14px] text-[#3b4d66] dark:text-slate-200  lg:p-8 justify-center align-middle">
      <div className="mx-auto w-full  justify-center flex gap-2 flex-col lg:flex lg:flex-row lg:gap-4 lg:px-6">
        <div className="w-full lg:w-[45%] xl:text-[52px] justify-center lg:justify-start lg:items-start mx-auto lg:p-2 flex flex-col lg:gap-8 ">
          <h1 className="text-[32px] md:text-[36px] flex flex-col justify-center lg:justify-start lg:items-start mx-auto lg:text-[48px]">
            Welcome to the <br></br>
            <strong>Frontend Quiz!</strong>
          </h1>
          <p className="flex flex-col xl:text-left lg:justify-start lg:items-start xl:text-[28px] justify-center mx-auto text-[16px]">
            <i>pick a subject to get started</i>
          </p>
        </div>

        <div className="md:w-[75%] md:mx-auto w-full justify-self-center  mt-2 lg:mt-0 gap-3 p-2  lg:w-[40%] lg:p-3 text-[14px] font-semibold flex flex-col lg:gap-4 ">
          {subjects.map((subject) => (
            <ul
              key={subject.id}
              className="w-[80%] xl:w-full hover:scale-110 mx-auto  rounded-lg flex flex-col shadow-xl hover:bg-slate-100 dark:hover:bg-slate-500 hover:text-slate-500 dark:hover:text-slate-200 bg-transparent dark:bg-[#3b4d66] gap-3 p-1"
            >
              <li className="flex flex-row justify-start m-0 p-0 gap-4 w-full align-middle  text-center py-auto rounded-md">
                <span className="bg-[#f4f6fa] p-2 rounded-md ml-0">
                  <Image src={subject.img} width={50} height={50} alt="icon" />
                </span>
                <Link
                  className="w-full text-left text-[24px] flex justify-start py-3 lg:py-auto xl:p-auto align-middle"
                  href={{
                    pathname: `/${subject.id}`,
                    query: {
                      id: subject.id,
                      subject: subject.name,
                      imgUrl: subject.img,
                    },
                  }}
                >
                  {subject.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
