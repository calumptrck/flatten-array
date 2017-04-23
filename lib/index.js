'use strict'

// flatten arrays into a single array.
// NOTE: this mutates the specified array.
module.exports = function flatten (array) {

  // usual loop, but, don't put `i++` in third clause
  // because it won't increment it when the element is an array.
  for (var i = 0; i < array.length; ) {

    var value = array[i]

    // if the element is an array then we'll put its contents
    // into `array` replacing the current element.
    if (Array.isArray(value)) {

      // to provide the `value` array to splice() we need to add the
      // splice() args to its front.
      // these args tell it to splice at `i` and delete what's at `i`.
      value.unshift(i, 1)

      // NOTE: this is an in-place change. it mutates `array`.
      array.splice.apply(array, value)

      // NOTE: we don't do `i++` because we want it to re-evaluate
      // the new element at `i` in case it is an array.
    } else {
      // it's not an array so move on to the next element.
      i++
    }
  }

  // return the array so `flatten` can be used inline.
  return array
}