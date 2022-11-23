var nums1 = [2, 7, 11, 15]
var target1 = 9

var nums2 = [3, 2, 4]
var target2 = 6

var nums3 = [3, 3]
var target3 = 6

// 暴力法
var violence = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

var violenceRes1 = violence(nums1, target1)
violenceRes1
var violenceRes2 = violence(nums2, target2)
violenceRes2
var violenceRes3 = violence(nums3, target3)
violenceRes3

// 哈希表法
// 建立一个hash表，nums中的值跟索引对应
var hashMethods = function (nums, target) {
  var hashTable = new Object()
  hashTable[nums[0]] = 0 // 初始化hash中的第一对元素
  for (var i = 1; i < nums.length; i++) {
    var result = target - nums[i] // 通过减法来找另外一个值
    if (result in hashTable) {
      return [hashTable[result], i]
    }
    hashTable[nums[i]] = i
  }
}

var hashResult1 = hashMethods(nums1, target1)
hashResult1
var hashResult2 = hashMethods(nums2, target2)
hashResult2
var hashResult3 = hashMethods(nums3, target3)
hashResult3