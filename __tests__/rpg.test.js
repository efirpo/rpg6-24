import { thisFunction, storeState, changeState, changeArray, initialCharacterState } from "./../src/rpg.js";

test("does it double", () => {
  expect(thisFunction(2)).toEqual(4);

})

test("should change array", () => {
  const thisCharacterState = storeState(initialCharacterState);
  // console.log("initial health" + initialCharacterState.health);
  // console.log("what up " + thisCharacterState);
  const changeInventory = changeArray("inventory");
  // const newCharState = changeInventory("hand-lens")(thisCharacterState);
  const newCharState = thisCharacterState(changeInventory("hand-lens"));
  // console.log("CHARACTER HEALTH" + newCharState.health);
  const newNewCharState = newCharState(changeInventory("ink"));
  // console.log("\n\n\n\n" + newNewCharState.health + "\n\n\n");
  expect(newNewCharState.inventory).toEqual(["hand-lens", "ink"]);

})


//   // const test = thisCharacterState(changeInventory("staff"));
//   const thisCharacterState = storeState(initialCharacterState)
//   // const newCharState = changeInventory("hand-lens")
//   const test = thisCharacterState(changeInventory("staff"));
//   const testState = storeState(test);
//   console.log(test);
//   const newNewwCharState = testState(changeInventory("dagger"))
//   console.log(newNewwCharState)

//   {
//     name: 'Pat',
//       occupation: 'Artist',
//         maxHealth: 10,
//           health: 10,
//             xp: 0,
//               inventory: ['staff'],
//                 level: 1
//   }
//   {
//     name: 'Pat',
//       occupation: 'Artist',
//         maxHealth: 10,
//           health: 10,
//             xp: 0,
//               inventory: ['staff', 'dagger'],
//                 level: 1
//   }

// })