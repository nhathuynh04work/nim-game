export default function saveMatchResult({
    player1,
    player2,
    winner,
    piles,
    mode,
    difficulty,
    timestamp = Date.now()
}) {
    const history = JSON.parse(localStorage.getItem("nim-history")) || [];
    history.push({ mode, player1, player2, winner, difficulty, piles, timestamp });
    localStorage.setItem("nim-history", JSON.stringify(history));
}
