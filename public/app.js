'use strict';

const p = document.querySelector('p');
const status = document.querySelector('.status');
p.textContent = 'Hello from app.js';

if (window === window.parent) {
  status.textContent = 'This is not in iframe so I set a cookie name=bar';
  document.cookie = 'name=bar';
} else {
  if (typeof document.hasStorageAccess === 'function') {
    status.textContent = 'Your browser supports Storage Access API';
    document.hasStorageAccess().then((res) => {
      p.textContent = 'document.hasStorageAccess returns ' + res;
    });
  } else {
    status.textContent = 'Your browser does not support Storage Access API';
  }
  console.log('cookie is ' + document.cookie);

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    if (typeof document.requestStorageAccess === 'function') {
      document.requestStorageAccess().then(
        () => {
          console.log('cookie is ' + document.cookie);
          p.textContent = 'requestStorageAccess successed!';
        },
        () => p.textContent = 'requestStorageAccess failed!'
      );
    }
  });
}


