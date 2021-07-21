#     create container
#     add empty arr to container

#     iterate thru nums
#         get length of container
#         iterate thru container
#           create new set with copy of current item from subset container
#           add current value to new set
#           add set to container

#     return container

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        subsets = [[]]
        
        for value in nums:
            length = range(len(subsets))
            
            for index in length:
                set = subsets[index][0:]
                set.append(value)
                subsets.append(set)

        return subsets
