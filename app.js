//find the largest numbers in each array
function largestOfFour(arr){
    var maxes = [];//create an empty array to hold the largest numbers
    for(var i = 0; i<arr.length; i++) {//loop through the array of arrays
      var tempMax = arr[i][0];//variable to store the first num in the array
      for(var j = 0; j<arr[i].length; j++){//loop through each number in each array
        var currentElement = arr[i][j];//make each num the current Element
        if(currentElement>=tempMax){//compare each num to tempMax
          tempMax=currentElement;//make tempMax currentElement
        }
      }
      maxes.push(tempMax);//push each tempMax num from the array to the maxes array
    }
    return maxes//print out maxes
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [100, 101, 857, 1]])