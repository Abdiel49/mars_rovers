import readline from 'readline';

import { Plateau } from "./Plateau";
import { Rovers } from "./Rovers";
import { Direction, Movements, RawDataInputToData, RoverLaunch } from "./types";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const parseUserInputs = (input: string[]): RawDataInputToData => {
  const rawData: RawDataInputToData = {
    plateuX: 0,
    plateuY: 0,
    rovers: [],
  };
  // extract sixe of plateau
  const plateuSize = input[0].split(' ')
  rawData.plateuX = +plateuSize[0];
  rawData.plateuY = +plateuSize[1];

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

const run = (lines: string[]) => {
  const data = parseUserInputs(lines)

  const plateau = new Plateau(data.plateuX, data.plateuY);

  const finalRoversStatus: string[] = [];

  const rovers = data.rovers;
  for (const rLaunch of rovers) {
    const finihRover = moveRover(rLaunch, plateau);
    finalRoversStatus.push(finihRover);
  }

  for (const result of finalRoversStatus) {
    console.log(result);
  }
}

const moveRover = (rLaunch: RoverLaunch, plateau: Plateau): string => {
  const rover = new Rovers(rLaunch.initilCoordinates, rLaunch.initialDir, plateau);
  const movements = rLaunch.movements;
  for (const move of movements) {
    rover.runInstruction(move)
  }
  const {coordinates, direction} = rover.getStatus();

  const error = rover.getMovementErrors();
  return `${coordinates.x} ${coordinates.y} ${direction}`
};

function main() {
  let lines: string[] = [];

  // mock test
  const mockInput: string[] = [
    "5 5",
    "1 2 N",
    "LMLMLMLMM",
    "3 3 N",
    "MMRMMRMRRM",
  ]
  run(mockInput);
  
  // commnet this section to test mock data
  // rl.on('line', (input) => {
  //   lines.push(input);
  // });

  // rl.on('close', () => {
  //   run(lines)
  // });
}

main();