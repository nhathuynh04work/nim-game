export default function calculateNimSum(piles) {
    return piles.reduce((acc, cur) => acc ^ cur, 0);
}
