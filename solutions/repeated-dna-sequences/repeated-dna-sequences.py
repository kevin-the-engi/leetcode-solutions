#     check if s is not size 10
#       if yes then return null
  
#     track each sequence  
#     track start and end
  
#     loop while end has not reached end of s
#       check if current sequence is logged
#         if yes then add to result array
#         if no then track
#       replace s with start + 1 and end + 1

class Solution2:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
      if len(s) < 10:
        return []

      sequences = {}
      results = []
      end = 10
    
      while end <= len(s):
        sequence = slice(end)
        sequence = s[sequence]

        if sequence not in sequences:
          sequences[sequence] = 1
        elif sequences[sequence] == 1:
          results.append(sequence)
          sequences[sequence] += 1

        sequence = slice(1, len(s))
        s = s[sequence]

      return results
