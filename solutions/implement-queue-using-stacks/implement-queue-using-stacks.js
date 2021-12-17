
var MyQueue = function() {
    this.storage = [];
    this.index = 0;
    this.start = 0;
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.storage[this.index] = x;
    this.index++;
    this.size++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let value = this.storage[this.start];
    this.storage[this.start] = null;
    this.start++;
    this.size--;
    
    return value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.storage[this.start];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.size ? false : true;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
