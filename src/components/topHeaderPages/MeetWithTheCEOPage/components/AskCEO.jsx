import React from "react";

const AskCEO = () => {
  const questionsAndAnswers = [
    {
      question: "What motivates you every morning?",
      answer:
        "The thought that one story, one course, or one idea could change a student's life keeps me going. Impact drives me.",
    },
    {
      question: "If you could change one thing in education, what would it be?",
      answer:
        "I'd make learning more personal and experiential — less about memorizing and more about solving real-world problems.",
    },
    {
      question: "Who has inspired your journey the most?",
      answer:
        "My grandfather, who was a teacher in a small village. His passion for education shaped everything I believe in.",
    },
    {
      question: "How do you unwind after a long day?",
      answer:
        "I enjoy reading biographies, journaling, and sometimes just talking to our students and team members to reflect.",
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          💬 Ask the CEO
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {questionsAndAnswers.map((qa, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {qa.question}
              </h3>
              <p className="text-gray-700">{qa.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskCEO;
