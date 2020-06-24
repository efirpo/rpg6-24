export const thisFunction = (thisNumber) => {
  thisNumber = thisNumber * 2;
  return thisNumber;
}

export const storeState = (initialCharacterState) => {
  let currentState = initialCharacterState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}


export const initialCharacterState = { name: "Pat", occupation: "Artist", maxHealth: 10, health: 10, xp: 0, inventory: [], level: 1 }

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      // [prop] : (...state[prop]).push(value)
      [prop]: (state[prop] || 0) + value
    })
  }
}


const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]


export const changeArray = (array) => {
  return (element) => {
    return (state) => ({
      ...state,
      [array]: (state[array] === undefined) ? state[array] = [element] : [...state[array], element]
    })
  }
}
export const removeFromArray = (array) => {
  return (element) => {
    return (state) => ({
      ...state,
      [array]: (state[array].filter(item => item != element))
    })
  }
}
const changeInventory = changeArray("inventory");

// changeInventory("hand-lens")(thisCharacterState)
const thisCharacterState = storeState(initialCharacterState)

export const levelLevel = changeState("level")(1)
export const levelUpHealth = changeState("health")(5);
export const levelUpMaxHealth = changeState("health")(5);


// thisCharacterState(levelUp);

