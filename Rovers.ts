import { Plateau } from "./Plateau";
import { handleDirections } from "./tools";
import { Coordinates, Direction, ErrorMovement, Movements } from "./types";

export class Rovers {
  private coordinates: Coordinates;
  private direction: Direction;
  private plateau: Plateau;
  private movementsError: ErrorMovement[]
  private steps: number;

  constructor(coordinates: Coordinates, direction:Direction, plateau: Plateau) {
    this.coordinates = coordinates;
    this.direction = direction;
    this.plateau = plateau;
    this.steps = 1;
    this.movementsError = []
  }

  /**
   * The function changes the direction based on the current direction and the given movement.
   * @param {Movements} move - The parameter "move" is of type "Movements".
   */
  private changeDirection (move: Movements) {
    const changeDirectionFn = handleDirections[this.direction]
    if (!!changeDirectionFn) {
      const newDir = changeDirectionFn(move);
      this.direction = newDir;
    }
    else {
      console.error('No change direction function finded');
    }
  }

  /**
   * The "movement" function checks if a move is valid and updates the coordinates accordingly, or adds
   * an error to the "movementsError" array.
   */
  movement() {
    const movement = this.plateau.isValidMove(this.direction, this.coordinates, this.steps);
  
    if(movement) {
      this.coordinates = movement;
    } else {
      this.movementsError.push({
        coordiates: this.coordinates,
        direction: this.direction,
        steps: this.steps,
      })
    }
  }

  /**
   * The function returns the movement errors.
   * @returns The `movementsError` property of the object.
   */
  getMovementErrors () {
    return this.movementsError;
  }

  /**
   * The function `runInstruction` takes a movement as input and either changes the direction or
   * performs a movement based on the input.
   * @param {Movements} move - The `move` parameter is of type `Movements`, which is likely an enum or
   * a string type that represents different types of movements.
   */
  runInstruction(move: Movements) {
    if (move === 'L' || move === 'R') {
      this.changeDirection(move);
    } else if (move === 'M'){
      this.movement()
    }
  }
  
  /**
   * The getStatus function returns an object containing the coordinates and direction.
   * @returns An object with the properties "coordinates" and "direction" is being returned.
   */
  getStatus () {
    return {
      coordinates: this.coordinates,
      direction: this.direction,
    }
  }
}
