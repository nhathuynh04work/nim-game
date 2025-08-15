import calculateNimSum from "./calculateNimSum";

export default function getOptimalMove(piles) {
    const nimSum = calculateNimSum(piles);

    for (let i = 0; i < piles.length; i++) {
        const currentSize = piles[i];
        const desiredSize = nimSum ^ currentSize;

        if (desiredSize < currentSize) {
            return { pileIndex: i, objectIndex: desiredSize };
        }
    }

    return { pileIndex: 0, objectIndex: piles[0] - 1 };
}
