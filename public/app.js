const searchBar = document.getElementById('myInput');

fetch(`${window.location.href}api/assets`)
  .then(data => data.json()).then(({ files }) => {
    console.log(files);
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
      console.log('here2');
      return files;
    });
};

document.getElementById("start").addEventListener("click", function(){
  console.log('here1');
 document.getElementById("note").innerHTML = transcribe(searchBar.value);
});

function search_audio() {
  let input = searchBar.value.toLowerCase();
  const x = document.getElementsByClassName('file_li');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = 'list-item';
    }
  }
}

