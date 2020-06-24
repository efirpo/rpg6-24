import { thisFunction, storeState, changeState, changeArray, initialCharacterState, removeFromArray } from "./../src/rpg.js";

test("does it double", () => {

  const player = storeState(initialCharacterState);
  const damagePlayer = changeState("health");
  const healPlayer = changeState("health");
  const addItem = changeArray("inventory");
  const takeDamage = damagePlayer(-1);

  player(addItem("hand-lens"));
  player(addItem("hand-lens"));
  player(addItem("hand-lens"));

  const newState = player(takeDamage);
  console.log(newState.inventory);
  expect(newState.health).toEqual(9);

})

test("should change array", () => {
  const thisCharacterState = storeState(initialCharacterState);
  // console.log("initial health" + initialCharacterState.health);
  // console.log("what up " + thisCharacterState);
  const changeInventory = changeArray("inventory");
  // const newCharState = changeInventory("hand-lens")(thisCharacterState);
  const newCharState = thisCharacterState(changeInventory("hand-lens"));
  console.log("CHARACTER HEALTH" + newCharState.health);
  const newNewCharState = (storeState(newCharState))(changeInventory("ink"));
  console.log("new char state value is : " + newCharState);
  // console.log("\n\n\n\n" + newNewCharState.health + "\n\n\n");
  expect(newNewCharState.inventory).toEqual(["hand-lens", "ink"]);

})

test("should remove from array", () => {
  const player = storeState(initialCharacterState);
  const addItem = changeArray("inventory");
  const removeItem = removeFromArray("inventory");
  player(addItem("ink"));
  player(addItem("hand-lens"));
  player(removeItem("ink"));
  const editedPlayer = player(addItem("paper"));

  expect(editedPlayer.inventory).toEqual(["hand-lens", "paper"])


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