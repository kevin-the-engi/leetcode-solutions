# check if num2 is empty or n = 0
#     return num1
# slice num1 array from start to m to get all relevant values
# concat num2 array to num1 array
# sort array
# iterate thru num1 array
#     modify all values in num1 with sorted values in result array


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        if n == 0:
            return
        
        merged = sorted(nums1[0:m] + nums2)
        
        for index, value in enumerate(nums1):
            nums1[index] = merged[index]
        
