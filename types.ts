export type Coordinates = {
  x:number;
  y: number;
}

export type Direction = 'N' | 'E' | 'W' | 'S';

export type Movements = 'L' | 'R' | 'M';

export interface ErrorMovement {
  coordiates: Coordinates,
  direction: Direction,
  steps: number,
}

export interface RoverLaunch {
  initilCoordinates: Coordinates;
  initialDir: Direction;
  movements: Movements[];
}

export type RawDataInputToData = {
  plateauX: number;
  plateauY: number;
  rovers: RoverLaunch[]
}

export type HandleDirection = {[key: string]: (move: Movements) => Direction};
