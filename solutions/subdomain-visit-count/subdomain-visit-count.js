/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

// Goal: Given an array of strings with number of visited and domain, return the total number of visits per domain.

// store results
// track domains + visits with obj
// iterate thru array input
    // split with space to get count and full domain
    // split with period to get separate domain levels
    // track current domains with string
    // iterate backwards thru domain levels
    // update curr domain with curr level + curr domain
    // add domain += visited to tracker
// iterate thru tracker
    // create string with value(count) + key(domain)
    // push string to result
// return result

var subdomainVisits = function(cpdomains) {
    let results = [];
    let domains = {};
    
    for (let i = 0; i < cpdomains.length; i++) {
        const [count, domain] = cpdomains[i].split(' ');
        const levels = domain.split('.');
        let currDomain = '';

        for (let j = levels.length - 1; j >= 0; j--) {
            if (j === levels.length - 1) {
                currDomain = levels[j];
            } else {
                currDomain = levels[j] + '.' + currDomain;
            }
            
            if (domains[currDomain]) {
                domains[currDomain] += Number(count);
            } else {
                domains[currDomain] = Number(count);
            }
        } 
    }
    
    for (const domain in domains) {
        const countDomain = domains[domain] + ' ' + domain;
        results.push(countDomain);
    }
    
    return results;
};

// Time complexity = O(n domains in input * k levels in each domain) = O(nk)
// Space complexity = O(nk)
