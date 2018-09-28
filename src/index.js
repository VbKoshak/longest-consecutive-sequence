module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let length = array.length - 1;
  if (!length) return 1;
  if (length == -1) return 0;
  let max = 0;
  array.sort(function(a,b)
{
    return a-b;
})
  for (let i = 0, j = 1, temp = 1; i < length; i++, j++)
  {
     if (array[j] - array[i] == 0) continue;
     if (array[j] - array[i] == 1) temp++;
     else
     {
         if (temp > max) max = temp;
         temp = 1;
     }
  }
  return max;
}
