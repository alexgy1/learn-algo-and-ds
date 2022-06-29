var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  let wordSet = new Set(wordList);
  let queue = [beginWord];
  let count = 1;

  while (queue.length) {
    let next = [];

    for (let word of queue) {
      if (word == endWord) return count;

      for (let i = 0; i < word.length; i++) {
        //replace the char wiith letters from [a-z]
        for (let j = 0; j < 26; j++) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);

          if (wordSet.has(newWord)) {
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }

    queue = next;
    count++;
  }
  return 0;
};
