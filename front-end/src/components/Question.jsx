import React, { useState } from 'react';

const Question = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      details: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
      showDetails: false
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      details: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
      showDetails: false
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      details: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
      showDetails: false
    }
  ]);

  const toggleDetails = (id) => {
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        if (question.id === id) {
          return {
            ...question,
            showDetails: !question.showDetails
          };
        }
        return question;
      });
    });
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      {questions.map(q => (
        <div className="p-4 mb-4 bg-purple-50 rounded-lg border border-purple-50" key={q.id}>
          <div className="flex justify-between items-center">
            <div className={`text-lg font-inter font-medium leading-7 ${q.showDetails ? 'text-purple-600' : 'text-inter'}`}>{q.question}</div>
            <button
              onClick={() => toggleDetails(q.id)}
              className={`text-gray-500 focus:outline-none p-2 ${q.showDetails ? 'text-xl text-purple-600 font-bold' : 'text-lg'}`}
            >
              <span className={q.showDetails ? 'text-xl' : 'text-lg'}>
                {q.showDetails ? '-' : '+'}
              </span>
            </button>
          </div>
          {q.showDetails && <p className="text-inter text-base font-normal leading-7 text-gray-600 mt-2">{q.details}</p>}
        </div>
      ))}
    </div>
  );
};

export default Question;
