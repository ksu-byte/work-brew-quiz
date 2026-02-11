import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { WelcomePage, QuestionPage } from "./components/QuizPages";
import { ResultsPage } from "./components/ResultsPage";
import { questions, calculateResult } from "./data/questions";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [dessertKey, setDessertKey] = useState(null);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
      }, 300);
    } else {
      const { dessertKey: key } = calculateResult(newAnswers);
      setDessertKey(key);
      setTimeout(() => {
        setScreen("result");
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setAnswers((prev) => prev.slice(0, -1));
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRetake = () => {
    setScreen("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
    setDessertKey(null);
  };

  return (
    <AnimatePresence mode="wait">
      {screen === "welcome" && (
        <WelcomePage key="welcome" onStart={handleStart} />
      )}
      {screen === "quiz" && (
        <QuestionPage
          key={`question-${currentQuestion}`}
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
          selectedAnswer={null}
        />
      )}
      {screen === "result" && dessertKey && (
        <ResultsPage
          key="result"
          dessertKey={dessertKey}
          onRetake={handleRetake}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
