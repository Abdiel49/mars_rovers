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
  plateuX: number;
  plateuY: number;
  rovers: RoverLaunch[]
} 