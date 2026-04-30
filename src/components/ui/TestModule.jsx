import React, { useState } from 'react';
import Button from './Button';

const dummyQuestions = [
  {
    id: 1,
    text: "Which of the following is an essential component of a robust research methodology?",
    options: ["Ignoring prior literature", "Clear hypothesis or research question", "Using only qualitative data", "Writing the conclusion first"],
    correct: 1
  },
  {
    id: 2,
    text: "In academic writing, what is the primary purpose of a literature review?",
    options: ["To list every book you've read", "To copy ideas from other authors", "To identify gaps in existing research and position your work", "To increase the word count of the thesis"],
    correct: 2
  },
  {
    id: 3,
    text: "When conducting statistical analysis in SPSS, a p-value less than 0.05 typically indicates:",
    options: ["The null hypothesis is accepted", "Statistical significance", "The data is invalid", "You should stop researching"],
    correct: 1
  },
  {
    id: 4,
    text: "What is the recommended structure for an IELTS Task 2 Essay?",
    options: ["Introduction, 2-3 Body Paragraphs, Conclusion", "Only one long paragraph", "Conclusion first, then Body, then Introduction", "Bullet points only"],
    correct: 0
  }
];

const TestModule = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === dummyQuestions[currentQ].correct) {
      setScore(score + 1);
    }
    
    if (currentQ < dummyQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (!started) {
    return (
      <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-100 mt-12">
        <h3 className="text-2xl font-bold text-secondary mb-4">End of Module Assessment</h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Test your understanding of the core concepts covered in this course. There are {dummyQuestions.length} multiple-choice questions.
        </p>
        <Button variant="primary" onClick={() => setStarted(true)}>
          Start Assessment
        </Button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg mt-12">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-2">Assessment Complete!</h3>
        <p className="text-gray-600 mb-6">
          You scored {score} out of {dummyQuestions.length}.
        </p>
        <Button variant="outline" onClick={() => { setStarted(false); setCurrentQ(0); setScore(0); setSelected(null); setFinished(false); }}>
          Retake Test
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-lg mt-12">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
        <h3 className="text-xl font-bold text-secondary">Module Assessment</h3>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-600">
          Question {currentQ + 1} of {dummyQuestions.length}
        </span>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium text-secondary mb-6">
          {dummyQuestions[currentQ].text}
        </h4>
        <div className="space-y-3">
          {dummyQuestions[currentQ].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full text-left p-4 rounded-xl border smooth-transition ${
                selected === idx 
                  ? 'border-primary bg-blue-50 text-primary font-medium' 
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          variant="primary" 
          disabled={selected === null}
          onClick={handleNext}
          className={selected === null ? 'opacity-50 cursor-not-allowed' : ''}
        >
          {currentQ === dummyQuestions.length - 1 ? 'Finish Assessment' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default TestModule;
