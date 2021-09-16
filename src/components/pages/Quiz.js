import _ from "lodash";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  }

  function handlePrevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  }
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There is an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
