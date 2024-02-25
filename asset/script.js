for (let i = 1; i <= 100; i++){

  let text, boxClass;

  if(i % 15 === 0 ){
    text = 'X'
    boxClass = '.FizzBuzz'
  }else if (i % 5 === 0){
    text = 'N';
    boxClass = 'box';
  }else if (i % 3 === 0){
    text = 'X';
    boxClass = '.Fizz';
  }else{
    text = i;
    boxClass = 'ciao';
  }


const box = document.createElement('div')
box.classList = 'box';
if(boxClass.lenght > 0) box.classList.add(boxClass);
box.append(text);
document.querySelector('.boxsection').append(box);
}