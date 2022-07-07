# Goal: Given an array of strings, group strings that are anagrams of each other and return an array of those groups.

# create result container
# track container index
# track word with index
# iterate thru array
#     sort curr word
#     check if sorted word exists in tracker
#         if not then add to tracker with curr index++
#         if yes then push to container array using index
        
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        results = list()
        index = 0
        words = dict()
        
        for word in strs:
            chars = list(word)
            curr = ''.join(sorted(list(chars)))

            if curr not in words:
                words[curr] = index
                index += 1
                results.append([word])
            else:
                results[words[curr]].append(word)
                
        return results

# Time complexity = O(n) * ( O(k) + O(klogk) + O(k)) = O(n) * O(klogk)
# Space complexity = O(n)
