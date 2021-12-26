var verifyLargest = function (largest, strings) {
  if (largest.length < strings.length) {
    largest = strings;
    strings = '';
  }

  return largest;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var elements = [];
  var strings = '';
  var largest = '';
  var increment = 0;

  for (var x = 0; x <= s.length - 1; x++) {
    if (!elements[increment] || elements[increment].indexOf(s[x]) < 0) {
      strings += s[x];
      elements[increment] = strings;

      largest = verifyLargest(largest, strings);

    } else {

      largest = verifyLargest(largest, strings);

      increment++;
      elements[increment] = s[x];
      strings = s[x];
    }
  }

  return largest.length;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));