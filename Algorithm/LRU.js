class LRUCache {
  constructor(length) {
    this.length = length; // 存储长度
    this.data = new Map(); // 存储数据
  }
  // 存储数据，通过键值对的方式
  set(key, value) {

  }
  // 获取数据
  get(key) {
    const data = this.data;
    if (!data.has(key)) {
      return null
    }
    data.set(key, value)
  }
}
const lruCache = new LRUCache(5)