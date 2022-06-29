/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (let m of magazine) {
    map[m] = map[m] + 1 || 1;
  }

  for (let r of ransomNote) {
    if (!map[r]) {
      return false;
    } else {
      map[r]--;
      if (map[r] < 0) return false;
    }
  }
  return true;
};

let ransomNote = 'a',
  magazine = 'b';
console.log(canConstruct(ransomNote, magazine));
