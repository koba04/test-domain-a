'use strict';

const p = document.querySelector('p');
p.textContent = 'Hello from app.js';

if (typeof document.hasStorageAccess === 'function') {
  console.log('Your browser supports Storage Access API');
  document.hasStorageAccess().then((res) => {
    p.textContent = 'document.hasStorageAccess returns ' + res;
  });
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  if (typeof document.requestStorageAccess === 'function') {
    document.requestStorageAccess().then(
      () => p.textContent = 'requestStorageAccess successed!',
      () => p.textContent = 'requestStorageAccess failed!'
    );
  }
});
