const magicBall = document.createElement('div');
magicBall.classList.add('magic-ball');

const question = document.createElement('div'); // Создаем элемент для вопроса
question.classList.add('question'); // Добавляем класс для стилизации
question.textContent = "Сьогодні буде сонячно?"; // Замените "Ваш вопрос здесь" на свой собственный текст вопроса

const answer = document.createElement('div');
answer.classList.add('answer');

const yesButton = document.createElement('button');
yesButton.textContent = 'Так';

const noButton = document.createElement('button');
noButton.textContent = 'Ні';

document.body.appendChild(magicBall);
document.body.appendChild(question); // Добавляем вопрос на страницу
document.body.appendChild(answer);

magicBall.style.width = '25%';
magicBall.style.height = '50%';
magicBall.style.background = 'black';
magicBall.style.borderRadius = '50%';
magicBall.style.cursor = 'pointer';
magicBall.style.position = 'absolute';
magicBall.style.left = '50%';
magicBall.style.top = '50%';
magicBall.style.transform = 'translate(-50%, -50%)';

question.style.position = 'absolute'; 
question.style.left = '50%';
question.style.top = '20%'; 
question.style.transform = 'translate(-50%, -50%)';

answer.style.display = 'none';

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
        magicBall.style.background = 'green';
        magicBall.style.display = 'block';
    } else {
        answer.innerText = "NO";
        magicBall.style.background = 'red';
        magicBall.style.display = 'block';
    }

    answer.style.display = 'block';
    answer.style.position = 'absolute';
    answer.style.left = '50%';
    answer.style.top = '50%';
    answer.style.transform = 'translate(-50%, -50%)';
});
