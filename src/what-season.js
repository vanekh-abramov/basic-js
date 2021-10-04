import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let month = date.getMonth();
  switch(month) {
    case 1 : 
      return 'winter'
      break;
    case 2 : 
      return 'winter'
      break;
    case 3 : 
      return 'spring'
      break;
    case 4 : 
      return 'spring'
      break;
    case 5 : 
      return 'spring'
      break;
    case 6 : 
      return 'summer'
      break;
    case 7 : 
      return 'summer'
      break;
    case 8 : 
      return 'summer'
      break;
    case 9 : 
      return 'autumn '
      break;
    case 10 : 
      return 'autumn '
      break;
    case 11 : 
      return 'autumn '
      break;
    case 12 : 
      return 'winter'
      break;
  }
}
