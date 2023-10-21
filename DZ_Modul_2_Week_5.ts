
/*
Задание 1
Реализовать класс, описывающий простой маркер. В классе
должны быть следующие компоненты:
■ поле, которое хранит цвет маркера;
■ поле, которое хранит количество чернил в маркере (в про-
центах);
■ метод для печати (метод принимает строку и выводит
текст соответствующим цветом; текст выводится до тех
пор, пока в маркере есть чернила; один не пробельный
символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от. простого маркера и добавив метод для заправки
маркера.
Продемонстрировать работу написанных методов.
*/
class Katridge {
    color: string;
    amount_of_ink: number;
    constructor(color: string, amount_of_ink: number) {
        this.color = color;
        this.amount_of_ink = amount_of_ink;
    }
    display(str: string) {
        let quantity = this.amount_of_ink;
        for (let i = 0; i < str.length; i++) {
            if (quantity != 0 && str[i] != ' ') {
                quantity -= 0.5
                document.write (str[i]);
            }else if(quantity != 0 && str[i] == ' '){
                document.write(str[i]);   
            }else{
                document.write('Кончились чернила')
                break
            }
        }

    }
}
class FullInk extends Katridge{
    full (amount_of_ink:number){
        this.amount_of_ink = 100
    }
}
const lineText = document.querySelector('#task1 input') as HTMLInputElement
if (lineText) lineText.value
console.log (lineText.value)




const asd = new FullInk('red',10)
asd.full(10)
asd.display('метод для печати (метод принимает строку и выводит текст соответствующим цветом;')
// Создаём и описываем новый html-элемент
const myNewDiv = document.createElement('div')
myNewDiv.className = 'aaa bbb'
myNewDiv.setAttribute('style','color:green')
myNewDiv.innerText = 'div созданный в js'
myNewDiv.addEventListener('click', ()=>{alert('hello')})

// Добавляем в уже существующий элемент
const divForPrintMachine = document.querySelector('.forPrintMachine')
divForPrintMachine?.appendChild(myNewDiv)


// Получаем элементы
const input1 = document.querySelector('#task1 input') as HTMLInputElement

if (input1) input1.value
console.log (input1)


const text1 = document.querySelector('#task1 b') as HTMLElement
const button1 = document.querySelectorAll('#task1 button') as Record<number,HTMLButtonElement>
const output1 = document.querySelector('#task1 p') as HTMLParagraphElement
document.write('<h1>asddasdas</h1>')
document.write('<p>asddasdas</p>')
document.write('<q>asddasdas</q>')
const h1 = document.querySelector('h1')
if (h1) h1.innerText = 'ddad'
if (text1) text1.innerText = 'Кто там?'
// По нажатию на кнопку выводим результат
const onClick = function () {
  // @ts-ignore
  output1.innerText = ''

  // @ts-ignore
  if (input1.value == 'Админ') {
    // @ts-ignore
    text1.innerText = 'Пароль?'
    // @ts-ignore
    input1.value = ''
    button1[0].classList.add('hidden')
    button1[1].classList.remove('hidden')
  } else {
    // @ts-ignore
    output1.innerText = 'Я вас не знаю'
  }
}
button1[0]?.addEventListener('click', onClick)
button1[1]?.addEventListener('click', function () {
  // @ts-ignore
  output1.innerText = ''

  // @ts-ignore
  if (input1.value == 'Я Главный') {
    // @ts-ignore
    output1.innerText = 'Здравствуйте!'
  } else {
    // @ts-ignore
    text1.innerText = 'Кто там?'
    // @ts-ignore
    output1.innerText = 'Я вас не знаю'
    // @ts-ignore
    input1.value = ''
    button1[0].classList.remove('hidden')
    button1[1].classList.add('hidden')
  }
})
