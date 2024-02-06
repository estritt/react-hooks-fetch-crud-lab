import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [ questions, setQuestions ] = useState([]);
  function updateQuestions(questions) {
    setQuestions(questions);
  }
  function addQuestion(question) {
    setQuestions([...questions, question]);
  }
  function deleteQuestion(id) {
    setQuestions(questions.filter(question => question.id != id));
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion} /> : <QuestionList questions={questions} updateQuestions={updateQuestions} deleteQuestion={deleteQuestion} />}
    </main>
  );
}

export default App;
