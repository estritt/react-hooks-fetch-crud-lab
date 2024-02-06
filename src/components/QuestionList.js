import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, updateQuestions, deleteQuestion }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(dbQuestions => updateQuestions(dbQuestions));
  }, []);


  // const questionItems = questions.map(question => <QuestionItem key={question.id} question={question} />)

  if (!questions) return <p>Loading...</p>
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem key={question.id} question={question} deleteQuestion={deleteQuestion} />)}</ul>
    </section>
  );
}

export default QuestionList;
