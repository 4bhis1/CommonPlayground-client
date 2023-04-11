let ColorForCards = [
"#f28b82",
"#fbbc04",
"#fff475",
"#ccff90",
"#a7ffeb",
"#cbf0f8",
"#aecbfa",
"#d7aefb",
"#fdcfe8",
"#e6c9a8",
"#e8eaed",
]

const RandomColor = () => {
    return ColorForCards[Math.floor(Math.random()*ColorForCards.length)]
}

export {ColorForCards, RandomColor}