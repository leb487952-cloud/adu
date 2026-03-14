import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react';
import { quizData } from '../data/content';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('env-quiz-highscore');
    if (savedScore) setHighScore(parseInt(savedScore));
  }, []);

  const handleAnswerOptionClick = (option: string) => {
    if (selectedOption) return; // Prevent multiple clicks

    setSelectedOption(option);
    const correct = option === quizData[currentQuestion].answer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    const nextQ = currentQuestion + 1;
    if (nextQ < quizData.length) {
      setCurrentQuestion(nextQ);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
      if (score > highScore) {
        localStorage.setItem('env-quiz-highscore', score.toString());
        setHighScore(score);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-serif font-bold text-slate-100">Quiz Ôn tập</h1>
        <p className="text-slate-400">Kiểm tra kiến thức chuyên ngành của bạn.</p>
      </header>

      <div className="bg-slate-900/50 border border-purple-900/30 rounded-3xl p-8 md:p-12 shadow-2xl">
        <AnimatePresence mode="wait">
          {showScore ? (
            <motion.div
              key="score"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 py-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-900/30 border-2 border-purple-500/50 text-purple-400 mb-4">
                <Trophy size={48} />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold text-slate-100">Hoàn thành!</h2>
                <p className="text-slate-400 text-lg">Bạn đã trả lời đúng <span className="text-purple-400 font-bold">{score}</span> / {quizData.length} câu hỏi.</p>
              </div>
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 inline-block">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Điểm cao nhất</p>
                <p className="text-xl font-bold text-slate-200">{highScore} / {quizData.length}</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 bg-purple-900 hover:bg-purple-800 text-white rounded-xl font-medium transition-all flex items-center gap-2 mx-auto"
                >
                  <RotateCcw size={18} /> Thử lại lần nữa
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
                  Câu hỏi {currentQuestion + 1} / {quizData.length}
                </span>
                <div className="h-1.5 w-32 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 transition-all duration-500" 
                    style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-slate-100 leading-tight">
                {quizData[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {quizData[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedOption === option;
                  const isCorrectOption = option === quizData[currentQuestion].answer;
                  
                  let buttonClass = "w-full p-5 rounded-2xl text-left transition-all border-2 flex items-center justify-between ";
                  
                  if (!selectedOption) {
                    buttonClass += "bg-slate-950 border-slate-800 hover:border-purple-500/50 hover:bg-slate-900";
                  } else if (isSelected) {
                    buttonClass += isCorrect ? "bg-emerald-900/20 border-emerald-500/50 text-emerald-200" : "bg-red-900/20 border-red-500/50 text-red-200";
                  } else if (isCorrectOption) {
                    buttonClass += "bg-emerald-900/20 border-emerald-500/50 text-emerald-200";
                  } else {
                    buttonClass += "bg-slate-950 border-slate-900 opacity-50";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerOptionClick(option)}
                      disabled={!!selectedOption}
                      className={buttonClass}
                    >
                      <span className="font-medium">{option}</span>
                      {selectedOption && isCorrectOption && <CheckCircle2 size={20} className="text-emerald-500" />}
                      {selectedOption && isSelected && !isCorrect && <XCircle size={20} className="text-red-500" />}
                    </button>
                  );
                })}
              </div>

              {selectedOption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4 flex justify-end"
                >
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-2 bg-purple-900 hover:bg-purple-800 text-white rounded-lg font-medium transition-all flex items-center gap-2"
                  >
                    {currentQuestion + 1 === quizData.length ? 'Xem kết quả' : 'Câu tiếp theo'} <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
