# Goal = Search a 2D matrix for the target value and return true if it exists.

# iterate thru matrix
#     check first and last elements of matrix[i] to see if target is within range
#         if so, call binary search function

# binary search function takes in arr and target and recursively search
#     divide array length into 2 to get midpoint
#     base: check if midpoint value is target and return true if so
#     base: if array size is 1 and not target value then return false
#     recursion: if target is less than mid value, recursively call left half of array, otherwise call right half

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for arr in matrix:
            start = arr[0]
            end = arr[len(arr) - 1]
            
            if target >= start and target <= end:
                return self.binarySearch(arr, target)
        
        return False
    
    def binarySearch(self, arr: List[int], target: int) -> bool:
        mid = floor(len(arr) / 2)
        
        if arr[mid] == target:
            return True
        elif arr[mid] != target and len(arr) == 1:
            return False
        
        if target < arr[mid]:
            return self.binarySearch(arr[0:mid], target)
        else:
            return self.binarySearch(arr[mid:], target)
