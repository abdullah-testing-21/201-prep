// let submits_array = [];
let div = document.getElementById('div');
if (localStorage.getItem('submits') === null) {

  localStorage.setItem('submits', JSON.stringify([]));
}

let LSsubmitsLS = JSON.parse(localStorage.getItem('submits'));


function Submit(name, age, note) {
  this.name = name;
  this.age = age;
  this.note = note;
  //   submits_array.push(this);
  LSsubmitsLS.push(this);



}

Submit.prototype.render = function () {
  let name = document.createElement('p');
  let age = document.createElement('p');
  let note = document.createElement('p');
  name.textContent = this.name;
  age.textContent = this.age;
  note.textContent = this.note;
  div.appendChild(name);
  div.appendChild(age);
  div.appendChild(note);
};



document.addEventListener('submit', SHandler);


function SHandler(event) {
  event.preventDefault();
  let x = new Submit(event.target.namen.value, event.target.agen.value, event.target.noten.value);
  x.render();
  // console.log(submits_array);
  localStorage.setItem('submits', JSON.stringify(LSsubmitsLS));
}
