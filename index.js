






const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

function myEach(collection, callback) {
    for (const key in collection) {
        callback( collection[key] )
    }
    return collection;
}

function myMap(collection, callback) {
    const newArray =  []
    for (const key in collection) {
        newArray.push( callback( collection[key] ) )
    }
    return newArray
}





function myReduce(collection, callback, acc = 0) {
    let newCollection = standardizeInput(collection)


    if (acc === 0) {
        acc = newCollection[0] 
        newCollection = newCollection.slice(1) 
    } 
    for (const key in newCollection) {
        acc = callback(acc, newCollection[key], newCollection )
    }

    return acc
}


function myFind(collection, predicate) {
    let newCollection = standardizeInput(collection)

    for (const iterator of collection) {
        if (predicate(iterator)) {
            return iterator;
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let newCollection = standardizeInput(collection)
    let newArray = []

    for (const i of newCollection) {
        if (predicate(i)) {
            newArray.push(i)
        }
    }
    return newArray

}

function mySize(collection) {
    let newCollection = standardizeInput(collection)
    return (newCollection.length )
}



function myFirst(array, n = 0) {
    if (n === 0) { 
        return (array[0])
    } else {
        return (array.slice(0, n) )
    }

}

arr = [1,2,3,4,5]

console.log(
    myFirst([1,2,3,4,5])

)

function myLast(array, n = 0) {
    if (n === 0) {
        return array[ array.length-1 ]
    } else {
        return array.slice(-n)
    }

    
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}