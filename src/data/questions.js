export const questions = [
    {
        id: 1,
        question: "You've just been assigned a brand new project. What's your first instinct?",
        options: [
            { text: "Create a detailed plan with timelines and milestones", scores: { I: 1, S: 1, T: 1, J: 1 } },
            { text: "Get the team together to brainstorm and share excitement", scores: { E: 1, N: 1, F: 1, P: 1 } },
            { text: "Think deeply about the bigger purpose and vision", scores: { I: 1, N: 1, F: 1, J: 0 } },
            { text: "Jump straight in and figure it out as you go", scores: { E: 1, S: 1, T: 0, P: 1 } }
        ]
    },
    {
        id: 2,
        question: "It's 3pm on Friday. A colleague asks for your help with something urgent. You...",
        options: [
            { text: "Drop everything - relationships matter more than my to-do list", scores: { E: 1, F: 1, S: 1, P: 0 } },
            { text: "Help, but feel internal frustration about your disrupted plan", scores: { I: 1, S: 1, T: 1, J: 1 } },
            { text: "Quickly assess if it's truly urgent or can wait until Monday", scores: { I: 0, S: 1, T: 1, J: 1 } },
            { text: "Love the spontaneity! Routine was getting boring anyway", scores: { E: 1, N: 0, F: 0, P: 1 } }
        ]
    },
    {
        id: 3,
        question: "You're in a team meeting and disagree with a decision being made. You...",
        options: [
            { text: "Speak up directly - honest feedback helps everyone", scores: { E: 1, S: 0, T: 1, J: 1 } },
            { text: "Stay quiet but raise it privately with the lead afterwards", scores: { I: 1, N: 1, F: 1, J: 0 } },
            { text: "Go along with it to maintain team harmony", scores: { I: 0, S: 1, F: 1, P: 0 } },
            { text: "Suggest exploring alternative possibilities together", scores: { E: 0, N: 1, F: 1, P: 1 } }
        ]
    },
    {
        id: 4,
        question: "What drains your energy most at work?",
        options: [
            { text: "Too many meetings with lots of small talk", scores: { I: 1, N: 1, T: 1, J: 0 } },
            { text: "Working alone for long periods without interaction", scores: { E: 1, F: 1, S: 1, P: 0 } },
            { text: "Constant changes to plans and priorities", scores: { I: 1, S: 1, T: 0, J: 1 } },
            { text: "Rigid rules and repetitive, routine tasks", scores: { E: 0, N: 1, F: 0, P: 1 } }
        ]
    },
    {
        id: 5,
        question: "When giving feedback to a teammate, you tend to...",
        options: [
            { text: "Be direct and factual - they'll appreciate the clarity", scores: { E: 0, S: 1, T: 1, J: 1 } },
            { text: "Sandwich it carefully between lots of positives", scores: { I: 0, F: 1, S: 1, J: 0 } },
            { text: "Focus on how it affects the team dynamic and feelings", scores: { E: 1, F: 1, N: 0, P: 0 } },
            { text: "Wait for the right moment and frame it thoughtfully", scores: { I: 1, N: 1, F: 1, J: 1 } }
        ]
    },
    {
        id: 6,
        question: "You learn best when...",
        options: [
            { text: "Given clear instructions and structured training", scores: { I: 0, S: 1, T: 0, J: 1 } },
            { text: "Thrown in the deep end to figure it out hands-on", scores: { E: 0, S: 1, T: 1, P: 1 } },
            { text: "You can explore the underlying concepts and theories", scores: { I: 1, N: 1, T: 1, J: 0 } },
            { text: "Learning alongside others in a collaborative setting", scores: { E: 1, N: 0, F: 1, P: 1 } }
        ]
    },
    {
        id: 7,
        question: "A project you care about isn't going well. What helps you most?",
        options: [
            { text: "Time alone to process and regroup mentally", scores: { I: 1, N: 1, F: 1, J: 0 } },
            { text: "Talking it through with supportive colleagues", scores: { E: 1, F: 1, S: 1, P: 0 } },
            { text: "Analysing what went wrong with hard data", scores: { I: 0, S: 1, T: 1, J: 1 } },
            { text: "Pivoting quickly to try a completely new approach", scores: { E: 0, N: 1, T: 0, P: 1 } }
        ]
    },
    {
        id: 8,
        question: "Your ideal recognition at work would be...",
        options: [
            { text: "Public acknowledgement in front of the team", scores: { E: 1, F: 1, S: 1, P: 0 } },
            { text: "A thoughtful private message from your manager", scores: { I: 1, F: 1, N: 1, J: 0 } },
            { text: "A promotion or tangible reward for results", scores: { E: 0, S: 1, T: 1, J: 1 } },
            { text: "More freedom and autonomy on future projects", scores: { I: 1, N: 1, T: 0, P: 1 } }
        ]
    },
    {
        id: 9,
        question: "When working on a creative task, you prefer to...",
        options: [
            { text: "Follow established best practices that work", scores: { I: 0, S: 1, T: 1, J: 1 } },
            { text: "Brainstorm wildly first, then narrow down later", scores: { E: 1, N: 1, F: 0, P: 1 } },
            { text: "Draw inspiration from your emotions and values", scores: { I: 1, N: 1, F: 1, P: 0 } },
            { text: "Collaborate closely with others throughout", scores: { E: 1, F: 1, S: 0, P: 1 } }
        ]
    },
    {
        id: 10,
        question: "At a work social event, you're most likely to...",
        options: [
            { text: "Chat with many people and work the room", scores: { E: 1, F: 1, S: 1, P: 1 } },
            { text: "Have one or two deep conversations in a corner", scores: { I: 1, N: 1, F: 1, J: 0 } },
            { text: "Leave a bit early - you've shown your face", scores: { I: 1, S: 1, T: 1, J: 1 } },
            { text: "Be the one suggesting fun activities or games", scores: { E: 1, N: 0, F: 0, P: 1 } }
        ]
    }
];

export function calculateResult(answers) {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    answers.forEach((answer) => {
        Object.entries(answer.scores).forEach(([key, value]) => {
            scores[key] += value;
        });
    });

    const mbti =
        (scores.E >= scores.I ? "E" : "I") +
        (scores.S >= scores.N ? "S" : "N") +
        (scores.T >= scores.F ? "T" : "F") +
        (scores.J >= scores.P ? "J" : "P");

    const mbtiToDessert = {
        ISTJ: "pain_au_chocolat",
        INFJ: "croissant",
        ESTJ: "tebirkes",
        ESFJ: "bolle",
        ISFJ: "scone",
        INFP: "macaron",
        ENFP: "lemon_tart",
        ESFP: "chocolate_chip_cookie",
        ISFP: "alfajor",
        ENFJ: "cupcake",
        ESTP: "churros",
        ISTP: "pastel_de_nata",
        ENTJ: "tebirkes",
        ENTP: "lemon_tart",
        INTJ: "croissant",
        INTP: "pastel_de_nata"
    };

    // Some MBTI types map to multiple desserts (randomly chosen)
    if (mbti === "ENFP") {
        const options = ["lemon_tart", "brigadeiro", "lamington"];
        return { dessertKey: options[Math.floor(Math.random() * options.length)], mbti };
    }
    if (mbti === "INFJ") {
        const options = ["croissant", "pavlova"];
        return { dessertKey: options[Math.floor(Math.random() * options.length)], mbti };
    }
    if (mbti === "ISFJ") {
        const options = ["scone", "biscuit"];
        return { dessertKey: options[Math.floor(Math.random() * options.length)], mbti };
    }

    return { dessertKey: mbtiToDessert[mbti] || "chocolate_chip_cookie", mbti };
}
