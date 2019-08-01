const searchBar = document.getElementById('myInput');

const runFetch = (url, cb) => {
  fetch(url)
    .then(data => data.json()).then(({ files }) => {
      cb(null, files);
    }).catch((err) => {
      cb(err);
    });
};

const getStoredFiles = () => {
  runFetch('/api/assets', (err, files) => {
    if (err) {
      document.getElementById('note').innerHTML = 'Transcription was not possible with this file sorry';
    } else {
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
    }
  });
};

const transcribe = (filename) => {
  runFetch(`/api/transcribe?file=${filename}`, (err, files) => {
    if (err) {
      document.getElementById('note').innerHTML = 'Transcription was not possible with this file sorry';
    } else {
      document.getElementById('note').innerHTML = files;
    }
  });
};

const searchAudio = () => {
  const input = searchBar.value.toLowerCase();
  const x = document.getElementsByClassName('file_li');
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none';
    } else {
      x[i].style.display = 'list-item';
    }
  }
};

getStoredFiles();

document.getElementById('start').addEventListener('click', () => {
  transcribe(searchBar.value);
});
