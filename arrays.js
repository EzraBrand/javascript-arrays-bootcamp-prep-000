var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray(x) {
  let myArray = []
  [...x]
  return myArray
}

destructivelyAddElementToBeginningOfArray(x) {
  let myArray = []
  myArray.unshift(x)
  return myArray
}
