class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, value);
  }

  get(key){
    if(!this.cache.has(key)){
        return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }
}


// Example usage:
const cache = new LRUCache(2); // Capacity is 2

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Output: 1
cache.put(3, 3); // Key 2 is evicted because it's the least recently used
console.log(cache.get(2)); // Output: -1 (Key 2 is not found in the cache anymore)
cache.put(4, 4); // Key 1 is evicted because it's the least recently used
console.log(cache.get(1)); // Output: -1 (Key 1 is not found in the cache anymore)
console.log(cache.get(3)); // Output: 3
console.log(cache.get(4)); // Output: 4