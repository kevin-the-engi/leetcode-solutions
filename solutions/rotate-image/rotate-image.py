# create a temp array
# iterate from first col to last
#     iterate from last row to first
#         collect numbers and push into temp
#         [1,2,3][4,5,6][7,8,9] => 7,4,1,8,5,2,9,6,3
# iterate from first row to last
#     iterate from first col to last
#         update matrix with values from temp array

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        temp = []
        size = len(matrix)
        
        for col in range(size):
            for row in reversed(range(size)):
                temp.append(matrix[row][col])
                
        i = 0
        
        for row in range(size):
            for col in range(size):
                matrix[row][col] = temp[i]
                i += 1
