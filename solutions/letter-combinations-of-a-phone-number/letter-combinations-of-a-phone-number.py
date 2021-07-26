#     create hash of letters
#     create container for result
    
#     create inner function for recursion and pass in digits and current string combo
#         if digit length is 0 then it went thru all the digits in the input str
#             push final letter combo into result container
    
#         get letters associated with first/current digit
#         iterate thru letters
#             combine current letter with letter(s) passed down
#             recurse with next digit and current letter combo
#     call inner function
#     return result

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        hash = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        };
        
        combinations = []
        
        def innerFunction(d: str, letters: str) -> None:
            if len(d) == 0:
                if letters is not None:
                    combinations.append(letters)
                    
                return
            
            sequence = hash[d[0]]
            
            for value in sequence:
                if letters is not None:
                    innerFunction(d[1:], letters + value)
                else:
                    innerFunction(d[1:], value)
            
        innerFunction(digits, None)
            
        return combinations
