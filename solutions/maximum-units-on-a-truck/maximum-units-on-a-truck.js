/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

// Goal: Given a 2D array of boxTypes and num truckSize, return the max number of units for number of boxes that a truck can fit.
// Sort boxTypes by unit size then remove boxes from boxTypes and calculate units until number of boxes have reached truck size or out of boxes.

// track results for units
// sort boxTypes according to ascending units
// loop while truckSize > 0 and boxes still exist in boxTypes
    // pop highest unit box from boxTypes
    // check if truckSize - number of current box types >= 0
        // if yes then update results with number of current box types * units for box type
        // otherwise update results with remaining truckSize * units for box type
    // decrement numBoxes from truckSize
// return results

var maximumUnits = function(boxTypes, truckSize) {
    let results = 0;
    boxTypes.sort((a, b) => a[1] - b[1]);

    while (truckSize > 0 && boxTypes.length) {
        let box = boxTypes.pop();
        const [numBoxes, units] = box;
        
        if (truckSize - numBoxes >= 0) {
            results += numBoxes * units;
        } else {
            results += truckSize * units;
        }

        truckSize -= numBoxes;
    }
    
    return results;
};

// Time complexity = O(nlog n)
// Space complexity = O(1)
