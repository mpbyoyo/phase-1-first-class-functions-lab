// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr) {
  return [ arr[arr.length-2], arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
  return function (num2) {
    return num1 * num2
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, fn) {
  return fn(arr)
}