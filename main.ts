import readline from 'readline';

import { Plateau } from "./Plateau";
import { Rovers } from "./Rovers";
import { RoverLaunch } from "./types";
import { parseUserInputs } from './tools';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const run = (lines: string[]) => {
  const {plateauX, plateauY, rovers} = parseUserInputs(lines)

  const plateau = new Plateau(plateauX, plateauY);

  const finalRoversStatus: string[] = [];

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

  // // use this to see error on movementes
  // const errors = rover.getMovementErrors();
  // console.log('\n\nrover erros', errors);

  return `${coordinates.x} ${coordinates.y} ${direction}`
};

function main() {
  let lines: string[] = [];

  // //  mock test
  // const mockInput: string[] = [
  //   "5 5",
  //   "1 2 N",
  //   "LMLMLMLMM",
  //   "3 3 N",
  //   "MMRMMRMRRM",
  // ]
  // run(mockInput);
  
  //  commnet this section to test mock data
  rl.on('line', (input) => {
    lines.push(input);
  });

  rl.on('close', () => {
    run(lines)
  });
}

main();

// // uncommnet this if use a test development mode
// rl.close()
