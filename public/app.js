const searchBar = document.getElementById('myInput');

fetch(`${window.location.href}api/assets`)
  .then(data => data.json()).then(({ files }) => {
    files.forEach((file) => {
      const node = document.createElement('LI');
      const textnode = document.createTextNode(file);
      node.className = 'file_li';
      node.appendChild(textnode);
      node.addEventListener('click', (e) => {
        searchBar.value = file;
      });
      document.getElementById('list').appendChild(node);
    });
  });

const transcribe = (filename) => {
  fetch(`${window.location.href}api/transcribe?file=${filename}`)
    .then(data => data.json()).then(({ files }) => {

    });
};
// transcribe('ameer-test.wav');

function search_audio() {
  const input = searchBar.value.toLowerCase();
  const x = document.getElementsByClassName('file_li');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = 'list-item';
    }
  }
}
// document.getElementById('submit').addEventListener('click', (e) => {
//   if (document.getElementById('myInput').value === '') {
//     inputError = 'Please select some value!';
//     document.getElementById('input_error').style.color = 'red';
//     document.getElementById('input_error').innerHTML = inputError;
//   } else {
//     document.getElementById('input_error').innerHTML = '';
//     console.log(document.getElementById('myInput').value);
//   }
// });
