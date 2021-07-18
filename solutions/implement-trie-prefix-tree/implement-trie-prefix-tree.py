class Trie:

    def __init__(self):
        self.storage = set()
        

    def insert(self, word: str) -> None:
        self.storage.add(word)
        

    def search(self, word: str) -> bool:
        return word in self.storage
        

    def startsWith(self, prefix: str) -> bool:
        if len(self.storage) == 0:
            return False
        
        length = len(prefix)
        
        for item in self.storage:
            if item[0:length] == prefix:
                return True
        
        return False
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
