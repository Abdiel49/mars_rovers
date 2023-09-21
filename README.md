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

