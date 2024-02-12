/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  let result = false;
  if (number >= 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = a;
  if (a > b && a > c) {
    result = a;
  }
  if (b > a && b > c) {
    result = b;
  }
  if (c > a && c > b) {
    result = c;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * ({ x: 1, y: 1 }, { x: 5, y: 5 }),
 */

function canQueenCaptureKing(queen, king) {
  if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) return true;
  if (king.x === queen.x || king.y === queen.y) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const dump = [a, b, c];
  let subvariable = 0;
  let sameCount = 0;
  let result = a;
  if (a > b && a > c) {
    result = a;
  }
  if (b > a && b > c) {
    result = b;
  }
  if (c > a && c > b) {
    result = c;
  }
  for (let index = 0; index < dump.length; index += 1) {
    for (let elem = 0; elem < dump.length; elem += 1) {
      if (dump[index] === dump[elem]) {
        sameCount += 1;
        subvariable = dump[index];
      }
    }
    if (sameCount === 2) break;
    sameCount = 0;
  }
  if (sameCount <= 1) return false;
  if (sameCount > 2) return false;
  result -= 1;
  if (result === subvariable) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (typeof num !== 'number') return false;
  const romanNumerals = [
    { numeral: '' },
    { numeral: 'I' },
    { numeral: 'II' },
    { numeral: 'III' },
    { numeral: 'IV' },
    { numeral: 'V' },
    { numeral: 'VI' },
    { numeral: 'VII' },
    { numeral: 'VIII' },
    { numeral: 'IX' },
    { numeral: 'X' },
  ];
  let result = '';
  if (num >= 10) {
    const dump = Math.floor(num / 10);
    for (let index = 0; index < dump; index += 1) {
      result += romanNumerals[10].numeral;
    }
  }
  result += romanNumerals[num % 10].numeral;
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let output = '';
  const dump = numberStr;
  function addChar(params) {
    switch (params) {
      case '-':
        output += 'minus';
        break;
      case '.':
        output += 'point';
        break;
      case ',':
        output += 'point';
        break;
      case '0':
        output += 'zero';
        break;
      case '1':
        output += 'one';
        break;
      case '2':
        output += 'two';
        break;
      case '3':
        output += 'three';
        break;
      case '4':
        output += 'four';
        break;
      case '5':
        output += 'five';
        break;
      case '6':
        output += 'six';
        break;
      case '7':
        output += 'seven';
        break;
      case '8':
        output += 'eight';
        break;
      case '9':
        output += 'nine';
        break;
      default:
    }
  }
  addChar(dump[0]);
  for (let index = 1; index < dump.length; index += 1) {
    output += ' ';
    addChar(dump[index]);
  }
  return output;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === letter) return index;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const dump = `${num}`;
  for (let index = 0; index < dump.length; index += 1) {
    if (Number(dump[index]) === digit) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftEqual = 0;
  let rightEqual = 0;

  for (let index = 0; index < arr.length; index += 1) {
    for (let elem = 0; elem < arr.length; elem += 1) {
      if (elem < index) leftEqual += arr[elem];
      if (elem > index) rightEqual += arr[elem];
    }
    if (leftEqual === rightEqual && rightEqual !== 0) return index;
    leftEqual = 0;
    rightEqual = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    const items = [];
    for (let j = 0; j < size; j += 1) {
      items[j] = '';
    }
    arr[i] = items;
  }

  let count = 1;
  let k = 0;
  let m = arr.length;
  let l = 0;
  let n = arr[0].length;

  while (k < m && l < n) {
    for (let i = l; i < n; i += 1) {
      arr[k][i] = count;
      count += 1;
    }
    k += 1;
    for (let i = k; i < m; i += 1) {
      arr[i][n - 1] = count;
      count += 1;
    }
    n -= 1;
    if (k < m) {
      for (let i = n - 1; i >= l; i -= 1) {
        arr[m - 1][i] = count;
        count += 1;
      }
      m -= 1;
    }
    if (l < n) {
      for (let i = m - 1; i >= k; i -= 1) {
        arr[i][l] = count;
        count += 1;
      }
      l += 1;
    }
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(oldmatrix) {
  const array = [...oldmatrix];
  const result = oldmatrix;
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = [];
  }

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      newArray[j][i] = array[i][j];
    }
  }
  let cout = 0;
  for (let elem = 0; elem < newArray.length; elem += 1) {
    for (let inx = newArray[elem].length - 1; inx >= 0; inx -= 1) {
      result[elem][cout] = newArray[elem][inx];
      cout += 1;
    }
    cout = 0;
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(array) {
  const partition = (arr, start, end) => {
    const pivot = arr[end];
    let i = start;
    const subarr = arr;

    for (let j = start; j <= end - 1; j += 1) {
      if (subarr[j] <= pivot) {
        [subarr[i], subarr[j]] = [subarr[j], subarr[i]];
        i += 1;
      }
    }

    [subarr[i], subarr[end]] = [subarr[end], subarr[i]];
    return i;
  };

  const quickSort = (arr, start, end) => {
    if (start < end) {
      const pi = partition(arr, start, end);

      quickSort(arr, start, pi - 1);
      quickSort(arr, pi + 1, end);
    }
  };
  return quickSort(array, 0, array.length - 1);
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let leftvariable = '';
  let rightvariable = '';
  let sumvariable = str;
  let searchIndex = 0;
  const tempArray = [];
  for (let elem = 0; elem < iterations; elem += 1) {
    leftvariable = '';
    rightvariable = '';
    for (let index = 0; index < str.length; index += 1) {
      if (index % 2 === 0) {
        leftvariable += sumvariable[index];
      } else {
        rightvariable += sumvariable[index];
      }
    }
    sumvariable = leftvariable + rightvariable;
    tempArray[elem] = sumvariable;
    if (str === sumvariable) {
      searchIndex = Math.round((elem + 1) * ((iterations / (elem + 1)) % 1));
      return tempArray[searchIndex - 1];
    }
  }
  return sumvariable;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(n) {
  const digits = Array.from(`${n}`);
  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] >= digits[i]) {
    i -= 1;
  }
  if (i === 0) {
    return n;
  }
  const x = digits[i - 1];
  let smallest = i;
  for (let j = i + 1; j < digits.length; j += 1) {
    if (digits[j] > x && digits[j] < digits[smallest]) {
      smallest = j;
    }
  }
  [digits[smallest], digits[i - 1]] = [digits[i - 1], digits[smallest]];
  const dumpdigit = digits;
  const result = [
    ...dumpdigit.filter((_, index) => index < i),
    ...dumpdigit.filter((_, index) => index >= i).sort((a, b) => a - b),
  ].join('');

  return result > n ? Number(result) : n;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
