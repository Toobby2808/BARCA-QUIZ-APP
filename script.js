document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const icon = document.querySelector('.hamburger-btn i');
  const mobileMenu = document.querySelector('.mobile-menu');


  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

});


document.addEventListener('DOMContentLoaded', () => {
  const correctAnswers = ['B', 'A', 'B', 'A', 'D', 'C', 'B', 'C', 'D', 'A', 'A', 'B', 'C', 'A', 'B', 'D', 'A', 'C', 'B', 'A'];
  const form = document.querySelector('.quiz-form');
  const result = document.querySelector('.result');
  const remark = document.querySelector('.remark');
  const popup = document.querySelector('.popup');
  

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const userAnswers = [form.q1.value, form.q2.value,form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, form.q11.value, form.q12.value,form.q13.value, form.q14.value, form.q15.value, form.q16.value, form.q17.value, form.q18.value, form.q19.value, form.q20.value];
    let score = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score++;
      }
    });

    if (score > 15) {
      remark.textContent = `"Visca el Barca! You're a true Cule!"`
    } else if (score > 10 && score <= 15) {
      remark.textContent = `"Good work! You're a Cule in the making!"`
    } else {
      remark.textContent = `"Better Luck next time, Cule!"`
    }
    
    result.classList.remove('d-none');
    scrollTo(0,0);

    let output = 0;
    const animation = setInterval(() => {
      result.querySelector('span').textContent = `${output}`;
      if (output === score) {
        clearInterval(animation);
      } else {
        output++;
      }

      
    }, 10);
    popup.textContent = 'QUIZ RESULT';
    form.classList.add('d-none');
  });

  



})