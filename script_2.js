  let phrases = [
      { text: 'задаться вопросом: что сделать?', image: 'working_0.png' },
      { text: 'поработать головой', image: 'working_1.png' },
      { text: 'жить', image: 'working_2.jpg' },
      { text: 'создать собственный бизнес', image: 'working_3.jpg' },
      { text: 'послушать что говорит начальник', image: 'working_4.jpg' },
      { text: 'принести пользу', image: 'working_5.jpg' },
      { text: 'поделиться гнетущим', image: 'working_6.jpg' },
      { text: 'управлять своим временем', image: 'working_7.jpg' },
      { text: 'заработать бабла и уехать на Бали', image: 'working_8.jpg' },
      { text: 'дисциплинировать себя', image: 'working_9.jpg' }
    ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');

  
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image)
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  /*
  for (let i = 0; i <= 2; i = i + 1){
    //console.log(phrases[i]);
    smoothly(phrase, 'textContent', phrases[i].text)
    smoothly(image, 'src', phrases[i].image)
  }
  */