const correctAnswers = ['option1','option2','option3','option4'];
const form = document.querySelector('.quiz-form');
const points = document.querySelector('.points');

form.addEventListener('submit', event =>{
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.radio1.value,form.radio2.value,form.radio3.value,form.radio4.value,];
    // Check Answers
    userAnswers.forEach((answer,index)=> {
        if (answer === correctAnswers[index]) {
            score = score + 25;
        }
    });

    // Show Score
    window.scrollTo(0,0);
    
    points.classList.remove('d-none');

    let scoreIncrease = 0;
    const timer = setInterval(()=>{
        points.querySelector('span').innerText = ''+ scoreIncrease + '%';
        if(scoreIncrease === score){
            clearInterval(timer);
        }
        else{
            scoreIncrease++;    
        }
    },10);

});