# Goal = Given an image represented as a mxn matrix, and coordinates represented by sr and sc, take the value at those coordinates and all surrounding squares of the same value, and convert them to the newColor number.
# Use recursion to recursively check all surrounding numbers for the same value.

# create tracker to track visited coordinates
# base = if coordinates are out of bounds then return
# base = if value of matrix location is not equal to initial value or if coordinates exist in tracker, then return
# change current matrix location to value of newColor
# add current coordinates to tracker
# recursion = call function separately, one for each 4-directional connected coordinate

class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        tracker = set()
        self.fill(tracker, image[sr][sc], image, sr, sc, newColor)
        
        return image
    
    def fill(self, tracker: set, target: int, image: List[List[int]], sr: int, sc: int, newColor: int) -> None:
        x = str(sr)
        y = str(sc)
        
        if sr < 0 or sc < 0 or sr >= len(image) or sc >= len(image[sr]):
            return
        if image[sr][sc] != target or (x + y) in tracker:
            return
        
        image[sr][sc] = newColor
        tracker.add(x + y)
        self.fill(tracker, target, image, sr + 1, sc, newColor)
        self.fill(tracker, target, image, sr - 1, sc, newColor)
        self.fill(tracker, target, image, sr, sc + 1, newColor)
        self.fill(tracker, target, image, sr, sc - 1, newColor)
        
        return
        
# Time complexity = O(4ⁿ)
# Space complexity = O(n)
