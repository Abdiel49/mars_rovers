import { Coordinates, Direction } from "./types";

export class Plateau {
  lengthX: number;
  lengthY: number;
  
  constructor(x: number, y:number) {
    this.lengthX = x;
    this.lengthY = y;
  }

  /**
   * The `isValidMove` function checks if a given move in a specified direction is valid within the
   * given boundaries.
   * @param {Direction} dir - The `dir` parameter represents the direction in which the move is
   * intended. It can have one of the following values: 'N' (north), 'E' (east), 'W' (west), or 'S'
   * (south).
   * @param {Coordinates} position - The `position` parameter represents the current coordinates of the
   * rover on a grid. It is an object with properties `x` and `y`, representing the x and y coordinates
   * respectively.
   * @param {number} steps - The `steps` parameter represents the number of steps the rover wants to
   * move in the specified direction (`dir`).
   * @returns The function `isValidMove` returns a `Coordinates` object if the move is valid, or
   * `undefined` if the move is not valid.
   */
  isValidMove(dir: Direction, position: Coordinates, steps: number): Coordinates | undefined {
    const {x: roverX, y: roverY} = position;

    switch (dir) {
      case 'N':
        return roverY + steps <= this.lengthY ? {x: roverX, y: roverY + steps} : undefined;

      case 'E':
        return roverX + steps <= this.lengthX ? {x: roverX + steps, y: roverY} : undefined;

      case 'W':
        return roverX - steps >= 0 ? {x: roverX - steps, y: roverY} : undefined;
        
      case 'S':
        return roverY - steps >= 0 ? {x: roverX, y: roverY - steps} : undefined;
    
      default:
        return undefined;
    }
  }

}