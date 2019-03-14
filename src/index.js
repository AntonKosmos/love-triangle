/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var arr = [];
 var count = 0;
 var first_index, second_index;
 preferences.unshift(0);
  for(var i = 1; i < preferences.length; i ++) {
  	if(arr.indexOf(i) == -1)
  	{

  		first_index = preferences[i]; 
  		second_index = preferences[preferences[first_index]]; 
  		if(i == second_index && preferences[first_index] != first_index) {
  		  count ++;
        arr.push(first_index, preferences[first_index]);
        }
      }
   }
return count;
};
