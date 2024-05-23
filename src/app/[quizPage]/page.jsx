"use client";

import { useState, useMemo, useEffect } from "react";
import ResultsPage from "@/components/ResultsPage";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";
import { javascript, html, css, accessibility } from "../data/quiz-data";

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("id");
  const subject = searchParams.get("subject");
  const imgUrl = searchParams.get("imgUrl");

  let letter = ["A", "B", "C", "D"];

  const getQuestion = (id) => {
    let question;
    if (id === "javascript") {
      question = javascript;
    } else if (id === "html") {
      question = html;
    } else if (id === "css") {
      question = css;
    } else {
      question = accessibility;
    }
    return question;
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [completedQuiz, SetCompletedQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const questions = getQuestion(subjectId) || [];

  // ***********************Functions**************//
  const calcWidth = useMemo(() => {
    // function to calculate the width of progress bar based on the nnumber of answered questions
    let width = 0;
    width = (currentQuestionIndex / questions.length) * 100;
    return Math.round(width);
  }, [currentQuestionIndex, questions.length]);

  const handleAnswerClick = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);
    }
  };

  const handleSubmitClick = () => {
    if (isAnswered) {
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 2);
        setCorrectAnswersCount(correctAnswersCount + 1);
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        SetCompletedQuiz(true);
      }
    }
  };

  if (!questions.length) {
    return <div>Loading...</div>;
  }
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const question = () => {
    return questions[currentQuestionIndex];
  };
  const answers = () => {
    return shuffle(questions[currentQuestionIndex].answers);
  };
  const currentQuestion = useMemo(() => {
    return question();
  }, [currentQuestionIndex]);
  const currentAnswers = useMemo(() => {
    return answers();
  }, [currentQuestion]);

  return (
    <section>
      {completedQuiz ? (
        <div>
          <ResultsPage result={score} attempted={questions.length} />
        </div>
      ) : (
        <section
          suppressHydrationWarning
          className={`lg:bg-[url("/pattern-background-desktop-light.svg")]  dark:lg:bg-[url('/pattern-background-desktop-dark.svg')] bg-[#f4f6fa] flex flex-col text-[24px] text-[#2b3849] w-full  md:w-full md:mx-auto h-full dark:text-[#fafafa] dark:bg-[#2b3849]  p-2 gap-1 justify-around align-middle xl:mt-0`}
        >
          <div className="w-full mb-1  lg:justify-start xl:justify-start lg:ml-0 xl:w-[50%] md:mx-auto md:text-center md:flex md:justify-center xl:mt-0 xl:flex xl;justify-left mt-0 md:w-[80%] flex flex-col gap-4 px-3 justify-around">
            {/* navigation bar */}
            <div className="flex flex-row gap-4    md:text-left md:flex md:gap-3 md:mx-auto md:justify-start mx-auto xl:w-full mt-0 xl:mt-0 xl:ml-0 xl:text-left text-center md:w-[80%] md:mt-0   lg:max-2xl:text-left lg:max-2xl:px-8 lg:max-2xltext-[48px] lg:max-2xl:w-[30%] lg:mb-0">
              <span className="flex bg-[#f4f6fa] rounded-md lg:p-2 xl:w-[40px] xl:h-[40px] align-middle my-auto  items-center">
                <img src={imgUrl} alt="icon" />
              </span>
              <h1 className="xl:text-[44px] text-center xl:w-[90%] xl:text-left font-semibold md:w-1/2 md:ml-3 text-[28px] mt-0 md:text-left">
                {subject}
              </h1>
            </div>
          </div>
          <div className="w-full lg: xl:flex xl:flex-row xl:gap-2 xl:justify-around lg:flex-row md:flex-col md:w-full md:gap-2 lg:mt-1 flex flex-col gap-4 ">
            <div className="w-full lg:w-[45%] lg:justify-start lg:pt-2 xl:ml-0 xl:text-left md:w-[80%] sm:p-3  md:pb-1 sm:mx-auto sm:flex sm:flex-col sm:gap-3">
              <div className="xl:pt-0 xl:pl-0 xl:mt-0 lg:flex  lg:w-[80%] lg:gap-4 lg:p-4 sm:flex-col sm:p-2 sm:flex sm:w-full sm:justify-center  md:mx-auto md:flex md:w-[80%]  md:flex-col ">
                <div className="xl:mt-0 xl:p-0 xl:text-left xl:ml-0 mx-auto  md:w-[80%] md:flex-row gap-2 text-[14px] p-2 justify-center lg:flex lg:flex-row  lg:gap-2 lg:p-4 lg:text-left md:text-left lg:px-8 lg:justify-between flex sm:flex-col   sm:justify-center sm:p-2">
                  <p className="xl:text-[20px] xl:ml-0 lg:text-[20px] md:text-left xl:text-left">
                    <i>
                      {" "}
                      You have attempted {currentQuestionIndex} /{" "}
                      {questions.length}
                    </i>
                  </p>
                </div>
                {/* ********************QUESTION*********************** */}

                <h1 className="xl:text-[28px] xl:text-left lg:text-[28px]  text-center md:text-left text-[18px] md:text-[20px]">
                  {currentQuestion.question}
                </h1>
              </div>
              {/* ***********PROGRESS BAR  ****************/}
              <div className="w-3/4 h-[80px]  md:w-[80%] justify-center lg:py-auto lg:justify-between mx-auto flex flex-col gap-2 p-2 mt-4">
                <div className=" lg:flex lg:flex-col lg:justify-center lg:m-0  w-full  rounded-3xl relative shadow-lg  lg:gap-1 mb-1">
                  <div
                    style={{ width: `${calcWidth}%` }}
                    className={`bg-[#a729f5] xl:h-[20px] shadow-lg rounded-3xl  lg:h-3/4 lg:w-[5%] w-[5%]   lg:transition-all transition-all  lg:p-1  h-[20px] `}
                  ></div>
                </div>
                <div className="w-full mx-auto ">
                  <p className="text-[14px] lg:text-[20px] xl:text-[20px] text-center">
                    {calcWidth}%
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[55%] lg:mt-0 lg:text-[16px] lg:justify-start lg:pt-2 lg:gap-2 w-full md:w-[80%] md:mt-0 md:mx-auto flex-col flex py-0 px-2 text-[14px] font-semibold  justify-center">
              <div className="lg:w-full w-full lg:justify-start lg:flex lg:flex-col  lg:gap-1 sm:flex sm:flex-col sm:p-2 sm:gap-1 lg:p-1">
                <div className="flex flex-col w-full lg:justify-start lg:m-1 gap-1 xl:w-[90%]  xl:mx-auto xl:text-[24px] lg:p-1 sm:p-1 text-[12px] mx-auto  lg:gap-0 ">
                  {currentAnswers.map((answer, index) => (
                    <>
                      <div
                        className="lg:hover:scale-[1.1] xl:w-full xl:mx-auto rounded-lg hover:scale-110 flex gap-1 md:w-full w-[80%] p-1 mx-auto"
                        key={answer}
                      >
                        <div
                          onClick={() => handleAnswerClick(answer)}
                          style={{
                            backgroundColor:
                              isAnswered &&
                              answer === currentQuestion.correctAnswer
                                ? "green"
                                : isAnswered &&
                                  answer === selectedAnswer &&
                                  answer !== currentQuestion.correctAnswer
                                ? "red"
                                : "#f4f6fa",

                            color:
                              isAnswered &&
                              answer === currentQuestion.correctAnswer
                                ? "white"
                                : isAnswered &&
                                  answer === selectedAnswer &&
                                  answer !== currentQuestion.correctAnswer
                                ? "white"
                                : "black",
                            cursor: isAnswered ? "default" : "pointer",
                            padding: "10px",
                            margin: "5px 0",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          className="xl:w-full flex cursor-pointer flex-row gap-1 lg:text-[16px] rounded-lg p-1 shadow-md bg-[#f4f6fa] dark:bg-slate-600  w-full"
                        >
                          <div className="w-[40px]  ml-0 text-center justify-center flex align-middle">
                            <span className="w-[36px] h-[36px] py-2 mx-0.5 my-0.5 rounded-lg px-3 text-center justify-center  align-middle font-semibold flex bg-slate-100 text-slate-800  lg:py-2 xl:py-2 xl:align-middle lg:align-middle lg:text-center">
                              {letter[index]}
                            </span>
                          </div>
                          <div className="w-[80%] dark:text-slate-700  px-1 m-0 justify-start align-middle text-left flex  py-1">
                            {answer}
                          </div>

                          {isAnswered &&
                            answer === currentQuestion.correctAnswer && (
                              <CiCircleCheck
                                style={{ color: "white", fontSize: "24px" }}
                              />
                            )}
                          {isAnswered &&
                            answer === selectedAnswer &&
                            answer !== currentQuestion.correctAnswer && (
                              <MdOutlineCancel
                                style={{ color: "white", fontSize: "24px" }}
                              />
                            )}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              {/* *************BUTTONS *************** */}

              <div className="flex w-[80%] flex-col mx-auto mt-1 lg:mt-0 xl:mt-0 hover:scale-[1.1] md:w-[75%] xl:w-[85%] xl:mx-auto bg-[#a729f5]  lg:w-[80%] lg:mx-auto hover:bg-[#8d3dcbd2] hover:text-[#f4f2f3] rounded-lg py-1 justify-center  px-4">
                <button
                  onClick={handleSubmitClick}
                  className="justify-center w-full p-2 text-center text-slate-200"
                >
                  {currentQuestionIndex < questions.length - 1
                    ? "Next Question"
                    : "Check Results"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
