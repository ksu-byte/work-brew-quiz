import { motion, AnimatePresence } from "framer-motion";
import { Coffee, ArrowLeft } from "lucide-react";

export function WelcomePage({ onStart }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4">
            <div className="max-w-lg mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-7xl mb-6"
                >
                    ☕
                </motion.div>
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-amber-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    What's Your
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">
                        Work Brew?
                    </span>
                </motion.h1>
                <motion.p
                    className="text-amber-700/80 text-lg mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Discover your workplace communication style through the sweetest
                    personality quiz. Find out which delicious treat matches your work
                    persona!
                </motion.p>
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    {["10 Quick Questions", "16 Personalities", "Team Matches"].map(
                        (tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-amber-800 border border-amber-200/50"
                            >
                                {tag}
                            </span>
                        )
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <button
                        onClick={onStart}
                        className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 text-lg rounded-full shadow-lg shadow-amber-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-300/50 hover:-translate-y-1 cursor-pointer font-medium"
                    >
                        <Coffee className="w-5 h-5 mr-2" />
                        Start the Quiz
                    </button>
                </motion.div>
                <motion.p
                    className="mt-8 text-sm text-amber-600/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    Takes only 2 minutes • Made with ❤️ for UK & DK teams
                </motion.p>
            </div>
        </div>
    );
}

export function QuestionPage({
    question,
    questionNumber,
    totalQuestions,
    onAnswer,
    onBack,
    selectedAnswer,
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl mx-auto">
                {/* Progress bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-3">
                        {questionNumber > 1 ? (
                            <button
                                onClick={onBack}
                                className="inline-flex items-center text-amber-700 hover:text-amber-900 hover:bg-amber-100/50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer -ml-2"
                            >
                                <ArrowLeft className="w-4 h-4 mr-1" />
                                Back
                            </button>
                        ) : (
                            <div />
                        )}
                        <span className="text-amber-600/80 text-sm font-medium">
                            {questionNumber} of {totalQuestions}
                        </span>
                    </div>
                    <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{
                                width: `${(questionNumber / totalQuestions) * 100}%`,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </div>
                </motion.div>

                {/* Question and options */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <motion.h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-8 text-center leading-relaxed">
                            {question.question}
                        </motion.h2>
                        <div className="space-y-4">
                            {question.options.map((option, idx) => (
                                <motion.button
                                    key={idx}
                                    onClick={() => onAnswer(option)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full p-5 text-left rounded-2xl border-2 transition-all duration-300 cursor-pointer ${selectedAnswer === option
                                            ? "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-400 shadow-lg shadow-amber-100"
                                            : "bg-white/80 backdrop-blur-sm border-amber-100 hover:border-amber-300 hover:bg-white hover:shadow-md"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${selectedAnswer === option
                                                    ? "bg-amber-500 text-white"
                                                    : "bg-amber-100 text-amber-700"
                                                }`}
                                        >
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span
                                            className={`text-lg ${selectedAnswer === option
                                                    ? "text-amber-900 font-medium"
                                                    : "text-amber-800"
                                                }`}
                                        >
                                            {option.text}
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
