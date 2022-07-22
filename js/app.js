const testimonials = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    image: "./images/image-tanya.jpg",
    description: "I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough.I’m now in the job of my dreams and so excited about the future.",
  },
  {
    id: 2,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    image: "./images/image-john.jpg",
    description: "If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer."
  }
];


//accediendo a los elementos del DOM que necesitan ser modificados
const user = document.querySelector('.name');
const job = document.querySelector('.job');
const person = document.getElementById('person-img');
const description = document.querySelector('.description');

//accediento a elementos que cambain el DOM
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
console.log(btnLeft);


let counter = 0;

window.addEventListener('DOMContentLoaded', function() {
 slider();
});

function slider() {
  const item = testimonials[counter];

  user.textContent = item.name;
  job.textContent = item.job;
  person.src = item.image;
  description.textContent = item.description;
}

btnRight.addEventListener('click', function() {
  counter++;
  if(counter > testimonials.length - 1) {
    counter = 0;
  }
  slider();
});

btnLeft.addEventListener('click', function() {
  counter--;
  if(counter < 0) {
    counter = testimonials.length -1;
  }
  slider();
})




