
// var fs = require('fs');
// var files = fs.readdirSync('/assets/photos/');
// console.log(files);
// const path = require('path');
// const fs = require('fs');
// //joining path of directory
// const directoryPath = path.join(__dirname,'..','Assets');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     //listing all files using forEach
//     files.forEach(function (file) {

//     });
//  });

const str = ['Im A Mess Bebe Rexha ringtones - iRingtones.net.mp3',
  'Robin ringtones - iRingtones.net.mp3',
  'Smooth Criminal ringtones - iRingtones.net.mp3',
  'They Dont Care About Us ringtones - iRingtones.net.mp3'];


str.forEach((file) => {
  const node = document.createElement('LI');
  const textnode = document.createTextNode(file);
  node.appendChild(textnode);
  document.getElementById('demo').appendChild(node);
});

//  let input = document.getElementById('myInput').value;
//     input=input.toLowerCase();
//     let x = str;

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].includes(input)) {
//             x[i].style.display="none"; n
//         }
//         else {
//             x[i].style.display="list-item";
//         }
//     }


// document.getElementById("submit").addEventListener("click", function (e) {
//     if(document.getElementById("myInput").value === "")
//     {
//        inputError = "Please select some value!";
//        document.getElementById("input_error").style.color="red";
//        document.getElementById("input_error").innerHTML = inputError;
//      }
//      else
//      {
//        document.getElementById("input_error").innerHTML = '';
//        console.log(document.getElementById("myInput").value);
//      }

// });
