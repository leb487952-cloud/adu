import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  const currentQuestion = questions[currentStep];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 purple-gradient rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="text-white w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Hoàn thành!</h2>
        <p className="text-text-muted mb-6">Bạn đã hoàn thành bài trắc nghiệm ôn tập.</p>
        
        <div className="text-5xl font-bold text-highlight-purple mb-8">
          {score} / {questions.length}
        </div>
        
        <div className="space-y-4">
          <p className="text-lg">
            {score >= 8 ? 'Xuất sắc! Bạn đã nắm vững kiến thức.' : 
             score >= 5 ? 'Khá tốt! Hãy ôn tập thêm những câu sai nhé.' : 
             'Cần cố gắng hơn! Hãy đọc lại phần lý thuyết.'}
          </p>
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-3 purple-gradient rounded-xl font-bold mx-auto hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-5 h-5" />
            Làm lại Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-text-muted">
          <span>Câu hỏi {currentStep + 1} / {questions.length}</span>
          <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            className="h-full purple-gradient"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-8">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correctAnswer;
              const isSelected = index === selectedOption;
              
              let buttonClass = 'w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ';
              
              if (!isAnswered) {
                buttonClass += isSelected 
                  ? 'bg-primary-purple/20 border-primary-purple text-white' 
                  : 'bg-white/5 border-white/10 text-text-muted hover:border-white/30 hover:text-white';
              } else {
                if (isCorrect) {
                  buttonClass += 'bg-green-500/20 border-green-500 text-green-400';
                } else if (isSelected && !isCorrect) {
                  buttonClass += 'bg-red-500/20 border-red-500 text-red-400';
                } else {
                  buttonClass += 'bg-white/5 border-white/10 text-text-muted opacity-50';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <h4 className="text-sm font-bold text-highlight-purple uppercase mb-2">Giải thích</h4>
                <p className="text-sm text-text-muted">{currentQuestion.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex justify-end">
            {!isAnswered ? (
              <button
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className="px-8 py-3 purple-gradient rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Kiểm tra đáp án
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 purple-gradient rounded-xl font-bold"
              >
                {currentStep === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
