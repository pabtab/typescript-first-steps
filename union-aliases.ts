type CombinablePabtab = number | string;
type Conversion = 'as-number' | 'as-text'

function combine(
    n1: CombinablePabtab,
    n2: CombinablePabtab,
    resultType: Conversion
  ) {
  let result;

  if (typeof n1 === 'number' && typeof n2 === 'number' || resultType === 'as-number'){
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString()
  }

  /* if (resultType === 'number') {
    return +result;
  } else {
    return result.toString()
  }
 */
  return result;
}

const combinedAges = combine(30, 26, 'as-number');

console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number');

console.log(combinedStringAges)

const combineNames = combine('Max', 'Anna', 'as-text')

console.log(combineNames)


