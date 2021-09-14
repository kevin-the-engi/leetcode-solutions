/**
 * @param {number[]} deck
 * @return {boolean}
 */

// map out all occurances of values in deck
// find greatest common denominator from values
    // if gcd value is less than 2
        // then return false
// otherwise return true if gcd value is 2 or more

var hasGroupsSizeX = function(deck) {
    if (deck.length === 1) {
        return false;
    }
    
    let map = {};
    
    for (let i = 0; i < deck.length; i++) {
        let card = deck[i];
        map[card] = !map[card] ? 1 : map[card] + 1; 
    }
    
    cards = Object.values(map);
    group = cards[0];
    
    for (let i = 1; i < cards.length; i++) {
        group = gcd(group, cards[i])
        
        if (group < 2) {
            return false;
        }
    }
    
    return group >= 2;
    
//     if (deck.length === 1) {
//         return false;
//     }
    
//     let max = 0;
//     let curr = 1;
//     let cards = {};
    
//     deck.sort((a, b) => a - b);
    
//     for (let i = 0; i < deck.length; i++) {
//         let cardNum = deck[i];
//         if (cards[cardNum]) {
//             cards[cardNum]++;
//             curr++;
//         } else {    return true;
//             cards[cardNum] = 1;
//             curr = 1;
//         }
        
//         max = Math.max(curr, max)
//     }
    
//     for (const value in cards) {
//         if (max % cards[value] !== 0) {
//             return false;
//         }
//     }
    
};

function gcd (a, b) {
    if (a === 0) {
        return b;
    }
    
    return gcd(b % a, a)
} 

// Time complexity = O(N)
// Space complexity = O(N)
