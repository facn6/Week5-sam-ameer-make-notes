
fetch('http://localhost:4000/api/assets')
  .then(data => data.json()).then(({ files }) => {
    files.forEach((file) => {
      const node = document.createElement('LI');
      const textnode = document.createTextNode(file);
      node.className = 'file_li';
      node.appendChild(textnode);
      document.getElementById('list').appendChild(node);
    });
  });


function search_audio() {
  console.log('here1');
  let input = document.getElementById('myInput').value;
  input = input.toLowerCase();
  const x = document.getElementsByClassName('file_li');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none';
      console.log('here2');
    } else {
      x[i].style.display = 'list-item';
      console.log('here3');
    }
  }
}
document.getElementById('submit').addEventListener('click', (e) => {
  if (document.getElementById('myInput').value === '') {
    inputError = 'Please select some value!';
    document.getElementById('input_error').style.color = 'red';
    document.getElementById('input_error').innerHTML = inputError;
  } else {
    document.getElementById('input_error').innerHTML = '';
    console.log(document.getElementById('myInput').value);
  }
});
