// var i;
// var j;
// for (i = 0; i < 10; i++) {
//     for (j = 0; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

  

// function drawPyramid(lines, fillChar, spacerChar) {
//     let fillChars = '';
//     let spacer = spacerChar || ' '; // Default spacer is ' '
//     let spacerCount = lines;
  
//     for (let i = 1; i <= lines; i++) {
//         fillChars += fillChar;
  
//     // Makes lines always have an odd number of fill characters
//       if (i >= 2)
//           fillChars = fillChar + fillChars;
  
//       console.log(spacer.repeat(spacerCount - 1) + fillChars);
//       spacerCount--;
//     }
//   }
  
//   drawPyramid(5, 'J');

// function generatePyramid(n) {
//     let pyramid = '';
//     let prev;
  
//     for (let i = 1; i <= n; i++) {
//       if (prev) {
//         pyramid += '\n';
//         prev =  prev + ' ' + i;
//       } else {
//         prev = i;
//       }
//       pyramid += ' '.repeat(n - i) + prev;
//     }
  
//     return pyramid;
// }

//  console.log( generatePyramid(5));


// function generatePyramid(n) {
//     var output="";
//     for (var i = 1; i <= n; i++) {
//         output += i + " ";
//         console.log(output);
//     }
// }  

// generatePyramid(5);

// var n = 10;
// generateNumberTriangle(n);

// function generateNumberTriangle(n) {
//     var width = (2 * n) -1; // Always the case.
//     var midpoint = Math.floor(width / 2); // Middle of pyramid.
//     let level = ''; // will be reset each level loop

//     for(var i = 0; i < n; i++) { // Looping through levels
//         level = '';
//         for(var j = 0; j < width; j++) {
//             if(j < midpoint-i || j > midpoint+i) {
//                 level += '.';
//             } else {
//                 level += '#';
//             }
//         }
//         console.log(level);
//     }
// }
