export default function getOptimalMove(piles) {
    let pileIndex = 0,
        objectIndex = piles[0] - 1;

    // Calculate NIM sum
    const nimSum = piles.reduce((acc, cur) => acc ^ cur, 0);

    piles.forEach((currentSize, index) => {
        const desiredSize = nimSum ^ currentSize;

        if (desiredSize < currentSize) {
            pileIndex = index;
            objectIndex = desiredSize;
        }
    });

    return { pileIndex, objectIndex };
}
