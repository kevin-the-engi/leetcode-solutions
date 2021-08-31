# track visited positions
# track results
# create pointer for row
# create pointer for col
# get length of row
# get length of col

# loop while the number of items in results is less than matrix size
#     loop thru row/col and while position has not been visited
#         push val of position to results
#         add position to visited
#         increment/decrement corresponding row/col
#     fix position

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        positions = {}
        results = []
        row = 0
        col = 0
        
        numRows = len(matrix)
        numCols = len(matrix[0])
        matrixSize = numRows * numCols
                
        while len(results) != matrixSize:
            while (not self.checkPositions(positions, row, col) and col < numCols):
                results.append(matrix[row][col])
                positions[f'{row}{col}'] = True
                col += 1

            row += 1
            col -= 1
                        
            while (not self.checkPositions(positions, row, col) and row < numRows):
                results.append(matrix[row][col])
                positions[f'{row}{col}'] = True
                row += 1
                
            row -= 1
            col -= 1
            
            while (not self.checkPositions(positions, row, col) and col >= 0):
                results.append(matrix[row][col])
                positions[f'{row}{col}'] = True
                col -= 1
                
            row -= 1
            col += 1
            
            while (not self.checkPositions(positions, row, col) and row >= 0):
                results.append(matrix[row][col])
                positions[f'{row}{col}'] = True
                row -= 1
                
            row += 1
            col += 1
            
        return results
            
            
    def checkPositions(self, positions, row, col) -> bool:
        position = f'{row}{col}'

        if position in positions:
            return True
        else:
            return False
        
# Time complexity: Outer loops runs X times, first inner loop runs n times for n items in a row, 2nd loop runs m - 1 times for number of rows, 
#                     3rd loop runs n - 1 times for number of items in row, 4th loop runs m - 2 times for number of rows.
#                     O( x ((n) + (m - 1) + (n - 1) + (m - 2) ));
#                 =   O(xn + xm - x + xn - x + xm - 2x)
#                 =   O(2xn + 2xm + 4x)
#                 =   O(xn + xm)
# Space complexity: O(MN) to house same number of items as matrix.
