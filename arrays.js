var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  newArray = [...element,]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(0,1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.push()
}
