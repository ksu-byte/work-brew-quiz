export const personalities = {
    pain_au_chocolat: {
        name: "Pain au Chocolat",
        emoji: "🍫",
        mbti: "ISTJ",
        workStyle: "Organized, structured",
        communicationStyle: "Direct, factual",
        likesToBeCommunicatedWith: "Clear instructions",
        worksBestWith: ["Scone", "Biscuit / Digestive"],
        clashesWith: ["Brigadeiro", "Churros"],
        percentage: 12,
        description: "You're the dependable backbone of any team. Your methodical approach and attention to detail mean nothing slips through the cracks.",
        color: "#8B4513",
        ingredients: [
            { name: "Precision", percent: 35, description: "Measured to perfection" },
            { name: "Reliability", percent: 30, description: "Always consistent" },
            { name: "Rich Chocolate Core", percent: 20, description: "Depth beneath the surface" },
            { name: "Golden Crust", percent: 15, description: "Professional exterior" }
        ],
        strengths: [
            "Incredibly reliable and consistent",
            "Excellent attention to detail",
            "Creates clear processes others can follow",
            "Meets deadlines without fail"
        ],
        weaknesses: [
            "Can be resistant to sudden changes",
            "May struggle with ambiguity",
            "Sometimes seen as inflexible",
            "Might overlook creative alternatives"
        ],
        communicationExamples: {
            doSay: [
                "Here's the agenda for our meeting...",
                "The deadline is Friday at 3pm",
                "I've documented the process in steps 1-5",
                "Let me share the data that supports this"
            ],
            dontSay: [
                "Let's just wing it and see what happens!",
                "The deadline is flexible-ish",
                "Use your intuition on this one",
                "I have a feeling this might work..."
            ]
        }
    },
    croissant: {
        name: "Croissant",
        emoji: "🥐",
        mbti: "INFJ",
        workStyle: "Visionary, thoughtful",
        communicationStyle: "Thoughtful, detailed",
        likesToBeCommunicatedWith: "Private, reflective",
        worksBestWith: ["Pavlova", "Lemon Tart"],
        clashesWith: ["Tebirkes", "Churros"],
        percentage: 5,
        description: "You see the bigger picture and inspire others with your vision. You're the rarest treat - combining deep insight with quiet determination.",
        color: "#D4A574",
        ingredients: [
            { name: "Layered Wisdom", percent: 40, description: "72 layers of insight" },
            { name: "Buttery Intuition", percent: 25, description: "Smooth gut feelings" },
            { name: "Golden Vision", percent: 20, description: "Future-focused clarity" },
            { name: "Flaky Mystery", percent: 15, description: "Depth that unfolds over time" }
        ],
        strengths: [
            "Exceptional at seeing the big picture",
            "Deeply empathetic and understanding",
            "Creates meaningful, lasting change",
            "Inspires others with quiet conviction"
        ],
        weaknesses: [
            "Can be overly perfectionistic",
            "May withdraw when overwhelmed",
            "Sometimes struggles to delegate",
            "Might take criticism too personally"
        ],
        communicationExamples: {
            doSay: [
                "I'd love to hear your thoughts on this privately",
                "Take your time to think it over",
                "I can see how this connects to our bigger goals",
                "What does this mean for you personally?"
            ],
            dontSay: [
                "Let's hash this out in front of everyone!",
                "I need an answer right now",
                "Don't overthink it, just do it",
                "Let's skip the why and focus on what"
            ]
        }
    },
    tebirkes: {
        name: "Tebirkes",
        emoji: "🥟",
        mbti: "ESTJ",
        workStyle: "Task-focused, decisive",
        communicationStyle: "Clear, no-nonsense",
        likesToBeCommunicatedWith: "Bullet points, to the point",
        worksBestWith: ["Bolle", "Scone"],
        clashesWith: ["Macaron", "Pavlova"],
        percentage: 9,
        description: "You're a natural leader who gets things done. The Danish classic that means business - efficient, traditional, and satisfyingly substantial.",
        color: "#C4A35A",
        ingredients: [
            { name: "Poppy Seed Determination", percent: 35, description: "Thousands of focused goals" },
            { name: "Sturdy Pastry Base", percent: 30, description: "Solid foundation" },
            { name: "Efficient Butter", percent: 20, description: "No-waste richness" },
            { name: "Traditional Backbone", percent: 15, description: "Proven methods" }
        ],
        strengths: [
            "Excellent at organizing and delegating",
            "Makes decisions quickly and confidently",
            "Brings structure to chaos",
            "Gets results consistently"
        ],
        weaknesses: [
            "Can come across as too direct",
            "May dismiss emotional considerations",
            "Sometimes struggles with patience",
            "Might miss nuanced perspectives"
        ],
        communicationExamples: {
            doSay: [
                "Here's the summary: 3 key points...",
                "Decision needed by end of day",
                "What's the bottom line?",
                "Let's focus on actionable next steps"
            ],
            dontSay: [
                "Let's explore all possibilities first...",
                "How does everyone feel about this?",
                "There's no rush on this decision",
                "Let's discuss the philosophy behind it"
            ]
        }
    },
    bolle: {
        name: "Bolle",
        emoji: "🫧",
        mbti: "ESFJ",
        workStyle: "Social, team-oriented",
        communicationStyle: "Warm, collaborative",
        likesToBeCommunicatedWith: "Friendly chat",
        worksBestWith: ["Tebirkes", "Chocolate Chip Cookie"],
        clashesWith: ["Pastel de Nata", "Croissant"],
        percentage: 12,
        description: "You're the heart of the team! Like this beloved Danish bun, you bring sweetness and warmth to every interaction.",
        color: "#DEB887",
        ingredients: [
            { name: "Warm Heart", percent: 35, description: "Fresh from the oven kindness" },
            { name: "Social Glaze", percent: 25, description: "Connects everything together" },
            { name: "Soft Interior", percent: 25, description: "Approachable and comforting" },
            { name: "Cardamom Soul", percent: 15, description: "Distinctive caring nature" }
        ],
        strengths: [
            "Creates harmony in any team",
            "Remembers personal details about colleagues",
            "Excellent at building consensus",
            "Makes everyone feel included"
        ],
        weaknesses: [
            "May avoid necessary conflict",
            "Can take on too much to please others",
            "Sometimes struggles with tough feedback",
            "Might prioritize harmony over efficiency"
        ],
        communicationExamples: {
            doSay: [
                "How are you doing today? Really?",
                "Let's grab a coffee and chat about this",
                "I really appreciate your help with...",
                "What does the team think about this?"
            ],
            dontSay: [
                "Skip the small talk, what do you need?",
                "Just send me an email about it",
                "Your personal situation isn't relevant here",
                "I don't care how, just get it done"
            ]
        }
    },
    scone: {
        name: "Scone",
        emoji: "🫖",
        mbti: "ISFJ",
        workStyle: "Steady, reliable",
        communicationStyle: "Patient, supportive",
        likesToBeCommunicatedWith: "Gentle, polite",
        worksBestWith: ["Biscuit / Digestive", "Bolle"],
        clashesWith: ["Churros", "Lemon Tart"],
        percentage: 14,
        description: "You're the calm presence that keeps everything running smoothly. Classic, comforting, and absolutely essential to any proper team.",
        color: "#F5DEB3",
        ingredients: [
            { name: "Steady Flour", percent: 35, description: "Reliable foundation" },
            { name: "Patience Butter", percent: 25, description: "Smooth and measured" },
            { name: "Gentle Warmth", percent: 25, description: "Comforting presence" },
            { name: "Traditional Values", percent: 15, description: "Time-tested approach" }
        ],
        strengths: [
            "Incredibly dependable and loyal",
            "Excellent memory for details and history",
            "Creates stable, supportive environments",
            "Quietly gets things done without fuss"
        ],
        weaknesses: [
            "May undervalue own contributions",
            "Can be resistant to change",
            "Sometimes struggles to say no",
            "Might not speak up in groups"
        ],
        communicationExamples: {
            doSay: [
                "Thank you for your help with this",
                "Would you mind if I asked for your input?",
                "I appreciate your consistent effort",
                "Let me walk you through this step by step"
            ],
            dontSay: [
                "We're changing everything starting now!",
                "Why didn't you speak up sooner?",
                "Just figure it out yourself",
                "Your way is outdated, try this instead"
            ]
        }
    },
    macaron: {
        name: "Macaron",
        emoji: "🧁",
        mbti: "INFP",
        workStyle: "Creative, idealistic",
        communicationStyle: "Reflective, careful",
        likesToBeCommunicatedWith: "Encouraging, positive",
        worksBestWith: ["Croissant", "Pavlova"],
        clashesWith: ["Tebirkes", "Pain au Chocolat"],
        percentage: 6,
        description: "You bring creativity and heart to everything. Delicate on the outside but with a rich, complex filling of ideas and emotions.",
        color: "#FFB6C1",
        ingredients: [
            { name: "Creative Almond", percent: 35, description: "Unique perspective" },
            { name: "Idealistic Filling", percent: 30, description: "Rich inner world" },
            { name: "Sensitive Meringue", percent: 20, description: "Emotionally aware" },
            { name: "Artistic Color", percent: 15, description: "Expressive nature" }
        ],
        strengths: [
            "Brings unique creative perspectives",
            "Deeply committed to meaningful work",
            "Excellent at understanding others' emotions",
            "Creates authentic, heartfelt content"
        ],
        weaknesses: [
            "Can be overly self-critical",
            "May struggle with criticism",
            "Sometimes loses focus on practical details",
            "Might withdraw when undervalued"
        ],
        communicationExamples: {
            doSay: [
                "I love how you approached this creatively",
                "Your unique perspective really helps here",
                "How do you feel about this direction?",
                "Take the time you need to do it right"
            ],
            dontSay: [
                "Stop being so sensitive about it",
                "Just stick to the template",
                "Your feelings aren't relevant to this task",
                "We need this done fast, not perfect"
            ]
        }
    },
    lemon_tart: {
        name: "Lemon Tart",
        emoji: "🍋",
        mbti: "ENFP",
        workStyle: "Energetic, idea-driven",
        communicationStyle: "Animated, expressive",
        likesToBeCommunicatedWith: "Open-ended, brainstorming",
        worksBestWith: ["Croissant", "Cupcake"],
        clashesWith: ["Pain au Chocolat", "Scone"],
        percentage: 7,
        description: "You're a burst of creative energy! Bright, zesty, and impossible to ignore - you bring fresh ideas to every situation.",
        color: "#FFF44F",
        ingredients: [
            { name: "Zesty Enthusiasm", percent: 40, description: "Bright energy" },
            { name: "Creative Curd", percent: 25, description: "Rich with ideas" },
            { name: "Sweet Optimism", percent: 20, description: "Positive outlook" },
            { name: "Buttery Charm", percent: 15, description: "Irresistible warmth" }
        ],
        strengths: [
            "Generates innovative ideas constantly",
            "Inspires and energizes others",
            "Adapts quickly to new situations",
            "Sees possibilities everywhere"
        ],
        weaknesses: [
            "May struggle with follow-through",
            "Can become scattered with too many projects",
            "Sometimes overlooks important details",
            "Might lose interest in routine tasks"
        ],
        communicationExamples: {
            doSay: [
                "What if we tried something completely new?",
                "I'd love to brainstorm this with you!",
                "There are so many exciting possibilities here",
                "Let's explore this idea further together"
            ],
            dontSay: [
                "We've always done it this way",
                "Stick to the script please",
                "Your enthusiasm is a bit much",
                "Focus on one thing at a time"
            ]
        }
    },
    chocolate_chip_cookie: {
        name: "Chocolate Chip Cookie",
        emoji: "🍪",
        mbti: "ESFP",
        workStyle: "Fun, cheerful, spontaneous",
        communicationStyle: "Lively, casual",
        likesToBeCommunicatedWith: "Casual chat, emojis",
        worksBestWith: ["Cupcake", "Bolle"],
        clashesWith: ["Pastel de Nata", "Pain au Chocolat"],
        percentage: 9,
        description: "You bring joy and energy wherever you go! The ultimate crowd-pleaser - warm, welcoming, and always a good time.",
        color: "#D2691E",
        ingredients: [
            { name: "Warm Personality", percent: 35, description: "Fresh-baked friendliness" },
            { name: "Chocolate Chunks of Fun", percent: 30, description: "Bursts of joy" },
            { name: "Sweet Spontaneity", percent: 20, description: "Delightful surprises" },
            { name: "Golden Energy", percent: 15, description: "Radiant presence" }
        ],
        strengths: [
            "Brings energy and fun to any situation",
            "Excellent at reading the room",
            "Makes work enjoyable for everyone",
            "Great in client-facing roles"
        ],
        weaknesses: [
            "May avoid serious or difficult topics",
            "Can struggle with long-term planning",
            "Sometimes distracted by social opportunities",
            "Might resist structured processes"
        ],
        communicationExamples: {
            doSay: [
                "Hey! Got a sec to chat? 😊",
                "This is going to be so fun!",
                "Let's make this meeting more interactive",
                "Great job! 🎉 That was awesome!"
            ],
            dontSay: [
                "Please maintain professional distance",
                "Emojis aren't appropriate in work chat",
                "We need to be serious about this",
                "Fun isn't the priority here"
            ]
        }
    },
    alfajor: {
        name: "Alfajor",
        emoji: "🤎",
        mbti: "ISFP",
        workStyle: "Sensitive, adaptable",
        communicationStyle: "Gentle, observant",
        likesToBeCommunicatedWith: "Encouraging, supportive",
        worksBestWith: ["Macaron", "Pain au Chocolat"],
        clashesWith: ["Tebirkes", "Churros"],
        percentage: 6,
        description: "You have a quiet strength and keen artistic eye. Delicate, layered, and with hidden sweetness that reveals itself over time.",
        color: "#C4A484",
        ingredients: [
            { name: "Dulce de Leche Soul", percent: 35, description: "Sweet depth" },
            { name: "Artistic Coconut", percent: 25, description: "Unique texture" },
            { name: "Gentle Layers", percent: 25, description: "Complex sensitivity" },
            { name: "Quiet Strength", percent: 15, description: "Understated power" }
        ],
        strengths: [
            "Exceptional aesthetic sensibility",
            "Adapts smoothly to changing situations",
            "Creates beauty in everything they touch",
            "Deeply in tune with others' needs"
        ],
        weaknesses: [
            "May not speak up for themselves",
            "Can be overwhelmed by conflict",
            "Sometimes struggles with deadlines",
            "Might take feedback too personally"
        ],
        communicationExamples: {
            doSay: [
                "I really value your creative input",
                "No pressure, share when you're ready",
                "Your attention to detail is impressive",
                "How can I support you on this?"
            ],
            dontSay: [
                "Speak up! Don't be so quiet",
                "Stop being so sensitive about it",
                "We don't have time for aesthetics",
                "Just follow the standard process"
            ]
        }
    },
    brigadeiro: {
        name: "Brigadeiro",
        emoji: "🟤",
        mbti: "ENFP",
        workStyle: "Playful, energetic, creative",
        communicationStyle: "Expressive, inspiring",
        likesToBeCommunicatedWith: "Friendly, energetic",
        worksBestWith: ["Chocolate Chip Cookie", "Churros"],
        clashesWith: ["Scone", "Pastel de Nata"],
        percentage: 7,
        description: "You're a bundle of creative energy! This Brazilian favourite is all about bringing people together with infectious enthusiasm.",
        color: "#5C4033",
        ingredients: [
            { name: "Condensed Enthusiasm", percent: 40, description: "Concentrated energy" },
            { name: "Cocoa Creativity", percent: 25, description: "Rich imagination" },
            { name: "Sprinkle of Joy", percent: 20, description: "Colourful personality" },
            { name: "Social Sweetness", percent: 15, description: "Brings people together" }
        ],
        strengths: [
            "Infectious enthusiasm that motivates others",
            "Generates creative solutions rapidly",
            "Excellent at building connections",
            "Brings joy to any workplace"
        ],
        weaknesses: [
            "May take on too many projects at once",
            "Can struggle with routine maintenance",
            "Sometimes overlooks practical constraints",
            "Might need external accountability"
        ],
        communicationExamples: {
            doSay: [
                "I love your energy on this project!",
                "What wild ideas do you have?",
                "Let's make this collaboration fun!",
                "Your enthusiasm is contagious!"
            ],
            dontSay: [
                "Calm down a bit, please",
                "Let's be more realistic here",
                "Stick to what's been assigned",
                "Your energy is overwhelming"
            ]
        }
    },
    cupcake: {
        name: "Cupcake",
        emoji: "🧁",
        mbti: "ENFJ",
        workStyle: "Charismatic, supportive",
        communicationStyle: "Inclusive, motivating",
        likesToBeCommunicatedWith: "Social, positive",
        worksBestWith: ["Chocolate Chip Cookie", "Lemon Tart"],
        clashesWith: ["Pastel de Nata", "Alfajor"],
        percentage: 3,
        description: "You're a natural connector and motivator. Beautifully presented and genuinely sweet - you make everyone feel special.",
        color: "#FF69B4",
        ingredients: [
            { name: "Motivating Frosting", percent: 35, description: "Uplifting top layer" },
            { name: "Caring Sponge", percent: 30, description: "Soft, supportive base" },
            { name: "Leadership Sprinkles", percent: 20, description: "Natural authority" },
            { name: "Charisma Wrapper", percent: 15, description: "Attractive presence" }
        ],
        strengths: [
            "Inspires others to be their best",
            "Natural talent for leadership",
            "Creates inclusive, positive environments",
            "Excellent communicator and mediator"
        ],
        weaknesses: [
            "May neglect own needs for others",
            "Can be overly idealistic about people",
            "Sometimes struggles with tough decisions",
            "Might take others' problems too personally"
        ],
        communicationExamples: {
            doSay: [
                "You're doing amazing work!",
                "I believe in what we can achieve together",
                "How can I help you succeed?",
                "Let's celebrate this win as a team!"
            ],
            dontSay: [
                "Your problems aren't my concern",
                "Just do your job, that's all",
                "I don't have time for team building",
                "Keep personal matters out of work"
            ]
        }
    },
    pavlova: {
        name: "Pavlova",
        emoji: "🎂",
        mbti: "INFJ",
        workStyle: "Elegant, creative",
        communicationStyle: "Calm, persuasive",
        likesToBeCommunicatedWith: "Thoughtful, reflective",
        worksBestWith: ["Macaron", "Croissant"],
        clashesWith: ["Tebirkes", "Chocolate Chip Cookie"],
        percentage: 5,
        description: "You combine creativity with depth. Elegant, airy, and more complex than you first appear - a true masterpiece.",
        color: "#FFF0F5",
        ingredients: [
            { name: "Meringue Dreams", percent: 35, description: "Light, elevated thinking" },
            { name: "Fresh Perspective", percent: 25, description: "Like fresh fruit on top" },
            { name: "Cream of Wisdom", percent: 25, description: "Rich inner knowledge" },
            { name: "Elegant Structure", percent: 15, description: "Beautiful presentation" }
        ],
        strengths: [
            "Creates elegant, innovative solutions",
            "Persuasive without being pushy",
            "Deep understanding of people",
            "Balances creativity with insight"
        ],
        weaknesses: [
            "May be seen as too idealistic",
            "Can spend too long perfecting details",
            "Sometimes struggles with confrontation",
            "Might withdraw when misunderstood"
        ],
        communicationExamples: {
            doSay: [
                "I'd value your thoughtful perspective",
                "Let's take time to consider this properly",
                "Your vision for this is inspiring",
                "How does this align with your values?"
            ],
            dontSay: [
                "Don't overthink it, just decide",
                "We need quick and dirty, not perfect",
                "Stop being so philosophical about it",
                "Your idealism isn't practical"
            ]
        }
    },
    churros: {
        name: "Churros",
        emoji: "🔥",
        mbti: "ESTP",
        workStyle: "Adventurous, energetic",
        communicationStyle: "Bold, expressive",
        likesToBeCommunicatedWith: "Direct, fun",
        worksBestWith: ["Brigadeiro", "Cupcake"],
        clashesWith: ["Croissant", "Alfajor"],
        percentage: 4,
        description: "You're bold, action-oriented, and always ready for the next challenge. Hot, exciting, and impossible to resist!",
        color: "#DAA520",
        ingredients: [
            { name: "Cinnamon Confidence", percent: 40, description: "Bold and spicy" },
            { name: "Crispy Action", percent: 25, description: "Quick and decisive" },
            { name: "Sweet Charm", percent: 20, description: "Dipped in charisma" },
            { name: "Hot Energy", percent: 15, description: "Fresh and exciting" }
        ],
        strengths: [
            "Thrives in high-pressure situations",
            "Excellent problem-solver in the moment",
            "Brings excitement and energy",
            "Takes decisive action quickly"
        ],
        weaknesses: [
            "May act before fully thinking",
            "Can get bored with routine",
            "Sometimes insensitive to others' pace",
            "Might overlook long-term consequences"
        ],
        communicationExamples: {
            doSay: [
                "Let's just do it and see what happens!",
                "I've got a bold idea - hear me out",
                "What's the fastest way to solve this?",
                "Action time! Let's move!"
            ],
            dontSay: [
                "Let's carefully analyse all options first",
                "We need more meetings about this",
                "Slow down and think it through",
                "The process is more important than speed"
            ]
        }
    },
    pastel_de_nata: {
        name: "Pastel de Nata",
        emoji: "🥧",
        mbti: "ISTP",
        workStyle: "Practical, independent",
        communicationStyle: "Factual, concise",
        likesToBeCommunicatedWith: "Straightforward, minimal",
        worksBestWith: ["Biscuit / Digestive", "Pain au Chocolat"],
        clashesWith: ["Bolle", "Cupcake"],
        percentage: 5,
        description: "You're a practical problem-solver who values independence. This Portuguese classic is precise, perfectly crafted, and satisfyingly efficient.",
        color: "#FFEFD5",
        ingredients: [
            { name: "Precise Custard", percent: 35, description: "Exactly right consistency" },
            { name: "Independent Layers", percent: 25, description: "Self-sufficient structure" },
            { name: "Practical Caramel", percent: 25, description: "Functional beauty" },
            { name: "Efficient Pastry", percent: 15, description: "No wasted effort" }
        ],
        strengths: [
            "Excellent at solving practical problems",
            "Works efficiently and independently",
            "Stays calm in crises",
            "Highly skilled and competent"
        ],
        weaknesses: [
            "May seem detached or unemotional",
            "Can struggle with team dynamics",
            "Sometimes dismissive of feelings",
            "Might resist collaborative processes"
        ],
        communicationExamples: {
            doSay: [
                "Here's the problem and my solution",
                "Just the key facts, please",
                "I'll handle this independently",
                "What's the most efficient approach?"
            ],
            dontSay: [
                "Let's have a long meeting about feelings",
                "We all need to collaborate closely on this",
                "Tell me the whole background story",
                "Let's check in frequently together"
            ]
        }
    },
    biscuit: {
        name: "Biscuit / Digestive",
        emoji: "🍪",
        mbti: "ISFJ",
        workStyle: "Reliable, steady, loyal",
        communicationStyle: "Clear, polite",
        likesToBeCommunicatedWith: "Gentle, step-by-step",
        worksBestWith: ["Scone", "Chocolate Chip Cookie"],
        clashesWith: ["Lemon Tart", "Churros"],
        percentage: 14,
        description: "You're the dependable constant everyone can count on. The humble hero - essential, comforting, and universally appreciated.",
        color: "#D2B48C",
        ingredients: [
            { name: "Reliable Wheat", percent: 40, description: "Dependable foundation" },
            { name: "Steady Oats", percent: 25, description: "Consistent quality" },
            { name: "Loyal Butter", percent: 20, description: "Trustworthy richness" },
            { name: "Humble Sweetness", percent: 15, description: "Quiet contribution" }
        ],
        strengths: [
            "Incredibly dependable and trustworthy",
            "Excellent at maintaining systems",
            "Loyal and supportive team member",
            "Brings stability to any group"
        ],
        weaknesses: [
            "May underestimate own value",
            "Can be resistant to new methods",
            "Sometimes struggles to innovate",
            "Might not advocate for themselves"
        ],
        communicationExamples: {
            doSay: [
                "Here's a clear step-by-step guide",
                "Thank you for your consistent work",
                "Let me explain this thoroughly",
                "I really appreciate your reliability"
            ],
            dontSay: [
                "Just improvise, you'll figure it out",
                "We're changing everything immediately",
                "Your steady approach is boring",
                "Take more risks, be less careful"
            ]
        }
    },
    lamington: {
        name: "Lamington",
        emoji: "🟫",
        mbti: "ENFP",
        workStyle: "Playful, creative, social",
        communicationStyle: "Enthusiastic, lively",
        likesToBeCommunicatedWith: "Interactive, collaborative",
        worksBestWith: ["Cupcake", "Pavlova"],
        clashesWith: ["Pain au Chocolat", "Pastel de Nata"],
        percentage: 7,
        description: "You bring playfulness and creativity to everything! This Aussie icon combines layers of fun with a social, collaborative spirit.",
        color: "#8B4513",
        ingredients: [
            { name: "Chocolate Enthusiasm", percent: 35, description: "Rich excitement" },
            { name: "Coconut Creativity", percent: 25, description: "Textured ideas" },
            { name: "Sponge Flexibility", percent: 25, description: "Adaptable nature" },
            { name: "Social Layers", percent: 15, description: "Connection-focused" }
        ],
        strengths: [
            "Brings creative energy to collaborations",
            "Excellent at building team morale",
            "Adapts easily to different people",
            "Makes work feel like play"
        ],
        weaknesses: [
            "May struggle with solo work",
            "Can be distracted by social aspects",
            "Sometimes overpromises in enthusiasm",
            "Might avoid difficult individual tasks"
        ],
        communicationExamples: {
            doSay: [
                "Let's collaborate on this together!",
                "What does everyone think?",
                "This could be really fun if we...",
                "Let's make this a team effort!"
            ],
            dontSay: [
                "Work on this alone, no help needed",
                "Keep the socializing to a minimum",
                "This needs to be serious, not fun",
                "Individual contribution only, please"
            ]
        }
    }
};
