import React from "react";

function QuestionItem({ question, deleteQuestion }) {
  
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClick(e) {
    const id = e.target.parentNode.id;
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
    .then(() => deleteQuestion(id));
    // i previously had .then(() => updateQuestions()) instead of the previous line, but it caused the questionlist to show loading...
    // until i manually rerendered it by clicking view questions again
  }

  return (
    <li id={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={e=>handleClick(e)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
