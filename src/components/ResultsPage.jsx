import { useState } from "react";
import { motion } from "framer-motion";
import {
    Share2,
    RotateCcw,
    CheckCircle,
    XCircle,
    ThumbsUp,
    AlertTriangle,
    Heart,
    MessageCircle,
    Briefcase,
    Swords,
} from "lucide-react";
import { personalities } from "../data/personalities";

function IngredientBar({ ingredient, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="mb-4"
        >
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-amber-800">
                    {ingredient.name}
                </span>
                <span className="text-sm text-amber-600">{ingredient.percent}%</span>
            </div>
            <div className="h-4 bg-amber-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${ingredient.percent}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + 0.1 * index }}
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                />
            </div>
            <p className="text-xs text-amber-600/70 mt-1">{ingredient.description}</p>
        </motion.div>
    );
}

function CommunicationExamples({ examples }) {
    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-green-100 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-green-800">Say this to me 💚</h4>
                </div>
                <div className="space-y-2">
                    {examples.doSay.map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm"
                        >
                            "{text}"
                        </motion.div>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-red-100 rounded-lg">
                        <XCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <h4 className="font-semibold text-red-700">Please avoid 🚫</h4>
                </div>
                <div className="space-y-2">
                    {examples.dontSay.map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.4 }}
                            className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                        >
                            "{text}"
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ResultsPage({ dessertKey, onRetake }) {
    const result = personalities[dessertKey];
    const [activeTab, setActiveTab] = useState("ingredients");

    if (!result) return null;

    const handleShare = async () => {
        const text = `I'm a ${result.name} ${result.emoji} at work! My communication style: ${result.communicationStyle}. Only ${result.percentage}% of people are this type! Find out your Work Brew personality!`;
        if (navigator.share) {
            try {
                await navigator.share({ title: "What's Your Work Brew?", text });
            } catch { }
        } else {
            navigator.clipboard.writeText(text);
        }
    };

    const tabs = [
        { id: "ingredients", label: "Made Of" },
        { id: "traits", label: "Strengths" },
        { id: "communication", label: "Talk to Me" },
        { id: "matches", label: "Matches" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header with emoji and name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <motion.p className="text-amber-600 font-medium mb-2">
                        Your Work Brew is...
                    </motion.p>
                    <motion.div
                        className="text-8xl mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {result.emoji}
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-amber-900 mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {result.name}
                    </motion.h1>
                    <motion.div
                        className="flex items-center justify-center gap-4 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <span className="px-4 py-2 bg-amber-100 rounded-full text-amber-800 font-medium">
                            {result.mbti}
                        </span>
                        <span className="px-4 py-2 bg-rose-100 rounded-full text-rose-700 font-medium">
                            {result.percentage}% of people
                        </span>
                    </motion.div>
                </motion.div>

                {/* Description card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-6 bg-white/80 backdrop-blur-sm border border-amber-100 rounded-xl shadow-xl mb-6"
                >
                    <p className="text-amber-800 text-lg leading-relaxed text-center">
                        {result.description}
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mb-6"
                >
                    <div className="grid w-full grid-cols-4 bg-amber-100/50 rounded-lg p-1 mb-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${activeTab === tab.id
                                        ? "bg-white text-amber-900 shadow-sm"
                                        : "text-amber-700 hover:text-amber-900"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    <div className="bg-white/80 border border-amber-100 rounded-xl p-6">
                        {activeTab === "ingredients" && (
                            <>
                                <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">
                                    What You're Made Of 🧪
                                </h3>
                                {result.ingredients.map((ingredient, i) => (
                                    <IngredientBar key={i} ingredient={ingredient} index={i} />
                                ))}
                            </>
                        )}

                        {activeTab === "traits" && (
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-2 bg-green-100 rounded-xl">
                                            <ThumbsUp className="w-5 h-5 text-green-600" />
                                        </div>
                                        <h3 className="font-bold text-green-800">Strengths</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {result.strengths.map((s, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-2 text-green-700"
                                            >
                                                <span className="text-green-500 mt-1">✓</span>
                                                {s}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-2 bg-orange-100 rounded-xl">
                                            <AlertTriangle className="w-5 h-5 text-orange-500" />
                                        </div>
                                        <h3 className="font-bold text-orange-700">Growth Areas</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {result.weaknesses.map((w, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + 0.4 }}
                                                className="flex items-start gap-2 text-orange-700"
                                            >
                                                <span className="text-orange-400 mt-1">⚠</span>
                                                {w}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === "communication" && (
                            <>
                                <h3 className="text-xl font-bold text-amber-900 mb-2 text-center">
                                    How to Communicate With Me 💬
                                </h3>
                                <p className="text-center text-amber-600 mb-6">
                                    I prefer:{" "}
                                    <span className="font-semibold">
                                        {result.likesToBeCommunicatedWith}
                                    </span>
                                </p>
                                <CommunicationExamples examples={result.communicationExamples} />
                            </>
                        )}

                        {activeTab === "matches" && (
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-2 bg-green-100 rounded-xl">
                                            <Heart className="w-5 h-5 text-green-600" />
                                        </div>
                                        <h3 className="font-bold text-green-800">
                                            Perfect Pairings
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">
                                        You work brilliantly with these desserts:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {result.worksBestWith.map((name, i) => {
                                            const match = Object.values(personalities).find(
                                                (p) =>
                                                    p.name === name ||
                                                    p.name.includes(name.split(" ")[0])
                                            );
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="px-4 py-3 bg-green-50 border border-green-200 rounded-xl"
                                                >
                                                    <span className="text-2xl mr-2">
                                                        {match?.emoji || "🍰"}
                                                    </span>
                                                    <span className="text-green-800 font-medium">
                                                        {name}
                                                    </span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-2 bg-orange-100 rounded-xl">
                                            <Swords className="w-5 h-5 text-orange-500" />
                                        </div>
                                        <h3 className="font-bold text-orange-700">
                                            Challenging Combos
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">
                                        You might need extra patience with:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(result.clashesWith || []).map((name, i) => {
                                            const match = Object.values(personalities).find(
                                                (p) =>
                                                    p.name === name ||
                                                    p.name.includes(name.split(" ")[0])
                                            );
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 + 0.3 }}
                                                    className="px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl"
                                                >
                                                    <span className="text-2xl mr-2">
                                                        {match?.emoji || "🍰"}
                                                    </span>
                                                    <span className="text-orange-700 font-medium">
                                                        {name}
                                                    </span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Work Style / Communication cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="grid grid-cols-2 gap-4 mb-6"
                >
                    <div className="p-4 bg-white/80 border border-amber-100 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-medium text-amber-800">
                                Work Style
                            </span>
                        </div>
                        <p className="text-amber-700">{result.workStyle}</p>
                    </div>
                    <div className="p-4 bg-white/80 border border-amber-100 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                            <MessageCircle className="w-4 h-4 text-rose-500" />
                            <span className="text-sm font-medium text-amber-800">
                                Communication
                            </span>
                        </div>
                        <p className="text-amber-700">{result.communicationStyle}</p>
                    </div>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={handleShare}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full shadow-lg cursor-pointer font-medium transition-all"
                    >
                        <Share2 className="w-5 h-5 mr-2" />
                        Share My Result
                    </button>
                    <button
                        onClick={onRetake}
                        className="inline-flex items-center justify-center border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full cursor-pointer font-medium transition-all"
                    >
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Take Again
                    </button>
                </motion.div>

                <motion.p
                    className="text-center mt-10 text-sm text-amber-500/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                >
                    Made with ❤️ for UK & DK teams at Verci
                </motion.p>
            </div>
        </div>
    );
}
