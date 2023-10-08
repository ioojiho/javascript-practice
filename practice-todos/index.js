const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault() //콘솔창 초기화 방지
  console.log(input.value) //input창의 값을 print
  
  if (input.value !== ''){ //아무것도안입력하고 enter 누르기 방지
    const li = document.createElement('li'); //li태그 생성
    li.innerText = input.value; //li의 innerText속성에 input에 입력한값을 넣음
    ul.appendChild(li); //ul태그의 자식으로 li 넣어줌

    input.value=''; //enter 이후 입력창초기화
  }
});
