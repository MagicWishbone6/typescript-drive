// 1. Write a function called `compact` that removes all falsy values from an array
export const compact = (input) => {
    return input.filter((item) => {
        return !!item
    })
}

// 2. Write function called `sumValues` to calculate the sum of all the number in an array
export const sumValues = (input) => {
    if (input.length === 0) {
        return 0
    }
    return input.reduce((accum, curr) => {
        return accum += curr
    })
}

// 3. Write a function called `addOrRemove` that adds an item to an array if it doesn't already exist, and removes it otherwise.
//    The array can be heterogeneous, but only contain primitive values.
export const addOrRemove = (itemToCheck, array) => {
    if (array.indexOf(itemToCheck) === -1) {
        array.push(itemToCheck)
    } else {
        array.slice(array.splice(array.indexOf(itemToCheck), 1))
    }
    return array
}


// 4. Write a function called `chunk` that accepts an array and splits it into groups of length `size`. If the array can't be split evenly, the final chunk will be the remaining elements.
export const chunk = (before, size) => {
    // let result = []
    // for (let i = 0; i < before.length; i+size) {
        
    // }
}


// 5. Write a function called `arrayDifference` that returns all the values from the first array that are not present in any of the other provided arrays
export const arrayDifference = (input, ...rest) => {
    return input.filter(item => {
        let foundItem = false
        rest.forEach(array => {
            array.indexOf(item) > -1 ? foundItem = true : null;

        })
        return !foundItem
    })
}

// 6. Write a function called `isPalindrome` that returns true if a string is a palindrome, and false otherwise
export const isPalindrome = (text) => {
    let backwards = text.split('').reverse().join('').toLowerCase()
    return text.toLowerCase() === backwards
}

// 7. Write a function called `getAllKeys` that returns all the keys of a nested object
export const getAllKeys = (obj, r = []) => {
    const results = r
    Object.keys(obj).forEach(key => {
        const value = obj[key]
        if (typeof value !== 'object') {
            results.push(key)
        } else {
            results.push(key)
            getAllKeys(value, results)
        }
    })
    return results
}


// 8. Write a class called `Calculator` with the following requirements...
//      - may optionally be initialized with a starting value, otherwise it starts with zero in the register
//      - has the ability to add, subtract, multiply, and divide
//      - calculations may be chained together (fluent API)
//      - the register can be reset to zero using a `clear` method
//      - returns the calculated result when `calculate` is called
//    Example:
//      const myCalc = new Calculator(3)
//      const result = myCalc.add(2).multiply(10).calculate()
//      console.log(result) //=> 50

// 9. Write a function called `sleep` that awaits a given number of milliseconds before resolving

// 10. Write a function called `memoize` that memoizes a function that accepts a variable number of arguments and returns it
