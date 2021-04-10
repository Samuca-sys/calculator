export default function isNumber(item){
  //search for a match between a regular expression and a specified string
  return /[0-9]+/.test(item);
}