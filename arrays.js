var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(x) {
  let myArray = []
  [...x]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(x) {
  let myArray = []
  myArray.unshift(x)
  return myArray
}

function accessElementInArray(array,index) {
  return array[index]
}

