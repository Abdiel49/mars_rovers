# Interview Coding Problem for BolivianDevs

_Please see the [disclaimer](#disclaimer) section_
## rules:
- The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
- To control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point and maintain the same heading.

An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.


## Requeriments

- node.js
- npm

## How to run:

```bash
$ npx tsx main.ts
# input data...
# then press Ctrl + D to close input promt
```````

**Example:**

```bash
$ npx tsx main.ts      
5 5
1 2 N
LMLMLMLMM
3 3 N
MMRMMRMRRM
# result
1 3 N 
5 5 N
```

## How to test in development mode

To do the development tests you must comment out part of the code and uncomment another part inside the `main.ts` file as shown below:

```typescript
// current main.ts file
...
function main() {
  let lines: string[] = [];

  // mock test
  // const mockInput: string[] = [
  //   "5 5",
  //   "1 2 N",
  //   "LMLMLMLMM",
  //   "3 3 N",
  //   "MMRMMRMRRM",
  // ]
  // run(mockInput);
  
  // commnet this section to test mock data
  rl.on('line', (input) => {
    lines.push(input);
  });

  rl.on('close', () => {
    run(lines)
  });

}

main();
```

Change for this:

```typescript
// After main.ts file

...

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
```

Then run

```bash
$ npx tsx watch main.ts
```

## Disclaimer

According to the rules the lower left point is 0,0 and the upper right point is the one entered by console, for example 5,5, for this case it is taken into account:

- The accepted directions to be handled for the change of direction of the Rover vehicle are not provided, so the initial letter of each cardinal axis in English, 'N', 'E', 'W', 'S', North, East, West and South respectively, was assumed.
- The input order of Rover vehicle position is not explicitly specified in input data model, so the order X then Y was assumed as the example.
- The starting point and initial direction of each Rover vehicle is assumed from the input data.
- The output format of the data is not directly specified, the format assumed is: X, Y Dir (2 3 N).
- The moves "L" and "R" only change the direction of the vehicle.
- The "M" instruction moves one position on the map to the direction that the vehicle is heading.
- Assume that the square directly North from (x, y) is (x, y+1).

Considering this scenario the refined result for each case based on the image will have a green arrow as the starting point and a yellow arrow as the end point.

I checked the procedure thoroughly and the result is the same, sorry if the error is obvious, but I could not find a way to match the example data with the expected result, 

This is the input data as an example and the expected result:


### INPUT AND OUTPUT
#### Test Input:
```bash
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

#### Expected Output:
```bash
1 3 N
5 1 E 
==========
```


![disclaimer image ](https://raw.githubusercontent.com/Abdiel49/mars_rovers/master/assets/rovers-warn.png)
