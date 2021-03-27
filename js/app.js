// let submits_array = [];

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



















document.addEventListener('submit', SHandler);


function SHandler(event) {
  event.preventDefault();
    new Submit(event.target.namen.value, event.target.agen.value, event.target.noten.value);
  // console.log(submits_array);
    localStorage.setItem('submits', JSON.stringify(LSsubmitsLS));
}
