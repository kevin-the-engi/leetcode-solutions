/**
 * @param {number[][]} points
 * @return {number}
 */

// track nums for x
// iterate thru points arr
    // grab x and push into x array
// sort nums 
// iterate thru x array
    // get difference between next and current num
    // update width if current difference is greater than previous
// return width

var maxWidthOfVerticalArea = function(points) {
    let xCoords = [];
    
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        
        xCoords.push(point[0]);
    }
    
    xCoords.sort((a, b) => a - b);
    
    let width = 0;

    for (let i = 0; i < xCoords.length - 1; i++) {
        let next = xCoords[i + 1];
        let curr = xCoords[i];
        
        width = Math.max(width, next - curr);
    }
    
    return width;
};
