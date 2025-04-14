import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Question {
  id: number;
  text: string;
  options: { value: string; label: string }[];
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Who was the first Emperor of Rome?",
    options: [
      { value: "a", label: "Julius Caesar" },
      { value: "b", label: "Augustus" },
      { value: "c", label: "Nero" },
      { value: "d", label: "Constantine" }
    ],
    answer: "b"
  },
  {
    id: 2,
    text: "What was the Colosseum primarily used for?",
    options: [
      { value: "a", label: "Political debates" },
      { value: "b", label: "Religious ceremonies" },
      { value: "c", label: "Gladiatorial contests" },
      { value: "d", label: "Theatrical performances" }
    ],
    answer: "c"
  },
  {
    id: 3,
    text: "What was the traditional Roman garment called?",
    options: [
      { value: "a", label: "Kimono" },
      { value: "b", label: "Toga" },
      { value: "c", label: "Kilt" },
      { value: "d", label: "Sari" }
    ],
    answer: "b"
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const handleRadioChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const getResultMessage = (score: number) => {
    if (score === 3) {
      return "Ave! You are a true Roman scholar worthy of attending our celebration!";
    } else if (score === 2) {
      return "Your knowledge is impressive, but there is still more to learn about Rome.";
    } else if (score === 1) {
      return "Your Roman knowledge is limited. Study more before the celebration!";
    } else {
      return "Alas! You must study the ways of Rome before the celebration.";
    }
  };

  const currentQ = questions.find(q => q.id === currentQuestion);

  return (
    <section className="py-16 md:py-24 px-4">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary mb-4">TEST YOUR ROMAN KNOWLEDGE</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Prove yourself worthy of attending our Roman celebration by testing your knowledge of the ancient empire
          </p>
        </div>
        
        <div className="bg-background border-2 border-secondary p-8 rounded-sm shadow-lg">
          <div id="quiz-container">
            {!showResults ? (
              <div className="quiz-question">
                <h3 className="font-cinzel text-2xl text-primary mb-6">
                  {`${currentQuestion}. ${currentQ?.text}`}
                </h3>
                <div className="space-y-4">
                  {currentQ?.options.map(option => (
                    <label 
                      key={option.value}
                      className="block p-4 border border-muted rounded-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      <input 
                        type="radio" 
                        name={`q${currentQuestion}`} 
                        value={option.value} 
                        checked={answers[currentQuestion] === option.value}
                        onChange={() => handleRadioChange(currentQuestion, option.value)}
                        className="mr-2" 
                      /> 
                      {option.label}
                    </label>
                  ))}
                </div>
                <div className={`mt-8 ${currentQuestion > 1 ? 'flex justify-between' : 'text-right'}`}>
                  {currentQuestion > 1 && (
                    <button 
                      onClick={handlePrevious}
                      className="bg-muted text-muted-foreground font-cinzel py-2 px-6 rounded-sm hover:bg-opacity-90 transition-opacity">
                      PREVIOUS
                    </button>
                  )}
                  {currentQuestion < questions.length ? (
                    <button 
                      onClick={handleNext}
                      className="bg-primary text-primary-foreground font-cinzel py-2 px-6 rounded-sm hover:bg-opacity-90 transition-opacity">
                      NEXT QUESTION
                    </button>
                  ) : (
                    <button 
                      onClick={handleSubmit}
                      className="bg-secondary text-primary font-cinzel py-2 px-6 rounded-sm hover:bg-opacity-90 transition-opacity">
                      CHECK RESULTS
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div id="quiz-results" className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <span id="score" className="font-cinzel text-4xl text-primary-foreground">
                    {score}/3
                  </span>
                </div>
                <h3 className="font-cinzel text-2xl text-primary mb-4">Your Roman Knowledge</h3>
                <p id="result-message" className="font-lato text-lg mb-6">
                  {getResultMessage(score)}
                </p>
                <div className="mt-8">
                  <button 
                    onClick={resetQuiz}
                    className="bg-primary text-primary-foreground font-cinzel py-3 px-8 rounded-sm hover:bg-opacity-90 transition-opacity">
                    TRY AGAIN
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Quiz;
