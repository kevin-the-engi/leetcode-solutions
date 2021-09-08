/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

// Using a minPriorityQueue, we track the height difference and use ladders to start with. If the current difference is greater than the one in queue, it is replaced and bricks are used as a substitute instead. If there are no remaining ladders, use bricks, and if there are no remaining bricks, we are done.

// create a new priority queue
// iterate thru length of heights - 1
    // get the current difference between next height and current height
    // if diff is valid, meaning it is greater than 0 since we need bricks/ladders to travel up and less than 0 means traveling down buildings
        // then check if there are ladders remaining
            // if yes then add diff to queue
                // decrement ladders
            // else check if item exists in queue and current diff is greater than diff in queue
                // if so then add current diff to queue and dequeue 
                // substract dequeue value from bricks
            // else if no more ladders
                // then subtract diff from bricks
            // check if there are no remaining bricks
                // return current index if so
// return length of heights - 1 if successfully climb all buildings using bricks and ladders

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  peek() {
    return this.values[0];
  }

  enqueue(val, priority) {
    if (priority < 0) {
      return null;
    }

    let newNode = new Node(val, priority);

    this.values.push(newNode);
    this.bubble();

    return this.values;
  }

  dequeue() {
    return this.values.shift();
  }

  bubble() {
    const reorder = (index) => {
      if (index === 0) {
        return;
      }

      let prev = index - 1;

      if (this.values[prev].priority > this.values[index].priority) {
        this.swap(prev, index);
      }
      
      reorder(prev);
    } 

    reorder(this.values.length - 1);
  }

  swap(a, b) {
    return [this.values[a], this.values[b]] = [this.values[b], this.values[a]];    
  }
}

var furthestBuilding = function(heights, bricks, ladders) {
    let len = heights.length - 1;
    let pq = new PriorityQueue();
    
    for (let i = 0; i < len; i++) {
        let diff = heights[i + 1] - heights[i];
        
        if (diff > 0) {
            if(ladders > 0) {
                pq.enqueue(diff, diff);
                ladders--;
            } else if (pq.peek() && diff > pq.peek().value) {
                pq.enqueue(diff, diff);
                bricks -= pq.dequeue().value; 
            } else {
                bricks -= diff;
            }
            
            if (bricks < 0) {
                return i;
            }
        }
    }
    
    return len;
};
