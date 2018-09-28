module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let length = array.length - 1;
  let max = 0;
  for (let i = 0, j = 1, temp = 1; i < length; i++, j++)
  {
      if (array[j] - array[i] == 1)
      temp++;
      else if (temp > max)
      {
          max = temp;
          temp = 0;
      }
      else temp = 1;
  }
  return max;
}
