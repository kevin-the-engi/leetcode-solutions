# Goal: Given an array of strings with number of visited and domain, return the total number of visits per domain.

# store results
# track domains + visits with obj
# iterate thru array input
#     split with space to get count and full domain
#     split with period to get separate domain levels
#     track current domains with string
#     iterate backwards thru domain levels
#     update curr domain with curr level + curr domain
#     add domain += visited to tracker
# iterate thru tracker
#     create string with value(count) + key(domain)
#     push string to result
# return result

class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        results = []
        domains = {}
    
        for i in range(len(cpdomains)): 
            count, domain = cpdomains[i].split(' ')
            levels = domain.split('.')
            currDomain = ''

            for j in range(len(levels) - 1, -1, -1):
                if j == len(levels) - 1: 
                    currDomain = levels[j]
                else:
                    currDomain = levels[j] + '.' + currDomain

                if currDomain in domains:
                    domains[currDomain] += int(count)
                else:
                    domains[currDomain] = int(count)

        for domain in domains:
            countDomain = str(domains[domain]) + ' ' + domain
            results.append(countDomain)

        return results;

# Time complexity = O(n domains in input * k levels in each domain) = O(nk)
# Space complexity = O(nk)
