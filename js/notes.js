let LSsubmits = JSON.parse(localStorage.getItem('submits'));
console.log(LSsubmits);


let body = document.querySelector('body');

for (let i = 0; i < LSsubmits.length; i++) {
  let div = document.createElement('div');
  div.className = 'myDiv';
  let name = document.createElement('p');
  let age = document.createElement('p');
  let note = document.createElement('p');
  // let br = document.createElement('br');
  name.textContent = LSsubmits[i].name;
  age.textContent = LSsubmits[i].age;
  note.textContent = LSsubmits[i].note;
  div.appendChild(name);
  div.appendChild(age);
  div.appendChild(note);
  body.appendChild(div);


}
