const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let names = [];

  if (typeof (members) == 'numbers' || members == null || members == undefined) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {

    if (typeof (members[i]) == 'string') {
      let item = members[i].split('');

      for (let j = 0; j < item.length; j++) {
        if (item[j] != ' ') {
          names.push(item[j].toUpperCase());
          j = item.length;
        }
      }
    }
  }

  return names.sort().join('');
}

module.exports = {
  createDreamTeam
};
