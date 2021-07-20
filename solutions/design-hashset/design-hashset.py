class MyHashSet:

    def __init__(self):
        self.storage = {}
        

    def add(self, key: int) -> None:
        if not self.contains(key):
            self.storage[key] = key

    def remove(self, key: int) -> None:
        if self.contains(key):
            del self.storage[key]

    def contains(self, key: int) -> bool:
        if key in self.storage:
            return True
        
        return False
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
