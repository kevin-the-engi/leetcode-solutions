  # loop while start is less than nums length
  # in other words, loop while start of window hasn't reached the end
  #   check if start - end is less than or equal to k
  #     if yes
  #       check if start and end values are the same
  #         if yes then return true
  #         if no then increment end
  #     if no 
  #       increment start
  #       reset end to next

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        start = 0
        end = start + 1 

        while start < (len(nums) - 1):
            if end - start <= k:
                if nums[start] == nums[end]:
                    return True
                else:
                    if end < (len(nums) - 1):
                        end += 1
                    else:
                        start += 1
                        end = start + 1
            else:
                start += 1
                end = start + 1
                
        return False
