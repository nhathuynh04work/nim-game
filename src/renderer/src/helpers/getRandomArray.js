import getRandomNumber from "./getRandomNumber";

export default function getRandomArray(minLength, maxLength, minValue, maxValue) {
    const length = getRandomNumber(minLength, maxLength);
    const array = [];

    for (let i = 0; i < length; i++) {
        array.push(getRandomNumber(minValue, maxValue));
    }

    return array;
}
