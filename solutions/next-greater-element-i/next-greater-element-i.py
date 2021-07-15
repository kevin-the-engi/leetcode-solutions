# create pointer for nums2
# iterate thru nums1 array
#     assign p2 with index of nums1 value in nums2
#     get max of values from nums2 slice from p2 onwards
#     loop until the end of nums2 arr
#         check if next number is greater than nums1 value
#         if yes then push to results arr
#              break loop
#         if no then increment pointer to continue checking
#     if pointer reaches end of nums2 array then nothing greater was found
#         so push -1 to results arr     
# return results

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        p2 = 0
        results = []
        
        for value in nums1:
            p2 = nums2.index(value) + 1
            
            while p2 < len(nums2):
                next = nums2[p2]
                
                if next > value:
                    results.append(next)
                    break
                else:
                    p2 += 1
            
            if (p2 == len(nums2)):
                results.append(-1)
                
        return results
