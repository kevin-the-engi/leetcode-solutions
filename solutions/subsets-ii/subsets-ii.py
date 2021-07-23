#     create container
#     push empty array into container
#     create hash to track

#     iterate thru nums
#         get length of subset container
#         iterate thru subset container
#             create set from current subset item first value
#             push current value
#             check if set is in hash
#                 if no then add to container
#                 add to hash
#     return container

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        subsets = [[]]
        hash = {}
        
        for value in nums:
            length = range(len(subsets))
            
            for index in length:
                set = subsets[index][0:]
                set.append(value)
                
                key = ''.join(str(num) for num in sorted(set))
                
                if key not in hash:
                    subsets.append(set)
                    hash[key] = 1
                    
        return subsets
