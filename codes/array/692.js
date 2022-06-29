/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};
  words.sort();
  console.log(words);
  for (let w of words) {
    map[w] = map[w] || 1 + 1;
  }
  console.log(map);

  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
//["i","love"]
