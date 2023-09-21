import { Direction, HandleDirection, Movements, RawDataInputToData } from "./types";

/* The `handleDirections` constant is an object that maps each cardinal direction ('N', 'E', 'W', 'S')
to a function. Each function takes a single argument `move` and returns a new direction based on the
current direction and the move. */
export const handleDirections: HandleDirection = {
  'N': (move) => move === 'L' ? 'W' : 'E',
  'E': (move) => move === 'L' ? 'N' : 'S',
  'W': (move) => move === 'L' ? 'S' : 'N',
  'S': (move) => move === 'L' ? 'E' : 'W',
}

/**
 * The function `parseUserInputs` takes an array of strings as input and extracts the plateau size and
 * rover data from it, returning an object with the parsed data.
 * @param {string[]} input - The `input` parameter is an array of strings. Each string represents a
 * line of user input. The expected format of the input is as follows:
 * @returns The function `parseUserInputs` returns an object of type `RawDataInputToData`.
 */
export const parseUserInputs = (input: string[]): RawDataInputToData => {
  const rawData: RawDataInputToData = {
    plateauX: 0,
    plateauY: 0,
    rovers: [],
  };
  // extract sixe of plateau
  const plateauSize = input[0].split(' ')
  rawData.plateauX = +plateauSize[0];
  rawData.plateauY = +plateauSize[1];

  let data = input.splice(1, input.length);

  for (let i = 0; i < data.length; i += 2) {
    const rawCoor = data[i].split(' ');
    const movements = data[i + 1].split('');

    if (rawCoor.length === 3) {
      rawData.rovers.push({
        initilCoordinates: {
          x: +rawCoor[0],
          y: +rawCoor[1],
        },
        initialDir: rawCoor[2] as Direction,
        movements: movements  as Movements[],
      })
    } else {
      console.error('Error on Coordinates input, the input is:', rawCoor);
    }
  }

  return rawData;
}
