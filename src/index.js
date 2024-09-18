module.exports = function toReadable (number) {
  const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let readable = "";

  if (number === 0) return digits[0];

  // Hundreads
  if (number >= 100) {
    readable = digits[Math.floor(number / 100)] + " hundred";
    let remainder = number % 100;
    if (remainder === 0) return readable.trim();
    if (remainder < 10) return readable = readable + " " + digits[remainder];
    if (remainder >= 10 && remainder < 20) return readable += " " + teens[remainder -10];
    if (remainder % 10 === 0) return readable += " " + tens[Math.floor(remainder/10)];
    if (remainder >= 20) return readable += " " + tens[Math.floor(remainder/10)] + " " + digits[remainder % 10];
  }

  // Tens 
  if ( number > 19 && number < 100) {
    readable = tens[Math.floor(number / 10)];
    if (number % 10 !== 0) return readable += " " + digits[number % 10];
    return readable.trim();
  }

  // Teens 
  if ( number > 9 && number < 20) {
    return readable += teens[number - 10];
  }

  // Digits 
  if ( number < 10) {
     return readable += digits[number];
  }
  
}
