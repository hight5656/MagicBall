const magicBall = document.createElement('div');
magicBall.classList.add('magic-ball');

const question = document.createElement('div'); 
question.classList.add('question');
question.textContent = "Сьогодні буде сонячно?";

const answer = document.createElement('div');
answer.classList.add('answer');

const yesButton = document.createElement('button');
yesButton.textContent = 'Так';

const noButton = document.createElement('button');
noButton.textContent = 'Ні';

document.body.appendChild(magicBall);
document.body.appendChild(question); 
document.body.appendChild(answer);
document.body.style.backgroundImage = "url('https://www.electronic-sirens.com/ru/wp-content/uploads/sites/8/2021/09/Yest-li-zvuk-v-kosmose-.jpg')";

magicBall.style.width = '25%';
magicBall.style.height = '50%';
magicBall.style.background = 'black';
magicBall.style.borderRadius = '50%';
magicBall.style.cursor = 'pointer';
magicBall.style.position = 'absolute';
magicBall.style.left = '50%';
magicBall.style.top = '50%';
magicBall.style.transform = 'translate(-50%, -50%)';
magicBall.style.backgroundImage = "url('https://png.pngtree.com/png-clipart/20210616/ourlarge/pngtree-magic-three-dimensional-abstract-magic-ball-png-image_3431297.jpg"
magicBall.style.backgroundSize = '500px';
magicBall.style.backgroundPosition= '-50px';

question.style.position = 'absolute'; 
question.style.left = '50%';
question.style.top = '20%'; 
question.style.fontSize='30px';
question.style.color='white';
question.style.transform = 'translate(-50%, -50%)';

answer.style.display = 'none';
answer.style.fontSize='30px';
answer.style.color='black';

yesButton.addEventListener('click', function () {
    answer.style.display = 'none';
});

noButton.addEventListener('click', function () {
    answer.style.display = 'none';
});

answer.appendChild(yesButton);
answer.appendChild(noButton);

magicBall.addEventListener('click', function () {
    const random = Math.floor(Math.random() * 2);

    if (random === 0) {
        answer.innerText = "YES";
        magicBall.style.display = 'block';
    } else {
        answer.innerText = "NO";
        magicBall.style.display = 'block';
    }

    answer.style.display = 'block';
    answer.style.position = 'absolute';
    answer.style.left = '50%';
    answer.style.top = '50%';
    answer.style.transform = 'translate(-50%, -50%)';
});
