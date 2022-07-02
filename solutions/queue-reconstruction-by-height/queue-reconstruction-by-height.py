# Goal: Given a 2D array of tuples, reorganize the array so that each person has person[i] has k people in front that are greater or equal to h of person[i].
# Sort people by height and k, then insert into new container by each person's k value as the index.

# create container for results
# sort array by ascending height then decending k value
# loop while people array has items
#     pop item from end
#     insert into result container by item's k value
# return results

class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        results = list()
        people.sort(key=lambda a: (a[0], -a[1]))
        
        while len(people):
            person = people.pop()
            index = person[1]
            
            results.insert(index, person)
            
        return results
        
# Time complexity = O(nlogn)
# Space complexity = O(n)
