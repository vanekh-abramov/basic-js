import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let repeatArr = []
  if (s1.length === 0 || s2.length === 0) return false;
  let bigLength = (s1.length > s2.length) ? s1.length : s2.length;
  for (let i = 0; i < bigLength; i++) {
    if(s1.indexOf(s2[i]) !== -1 && !repeatArr.includes(s2[i])) {
      repeatArr.push(s2[i]);    
    }
  }
  return repeatArr.length 
}
