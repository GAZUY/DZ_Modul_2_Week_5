
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
                output2.innerText = str[i]
            }else if(quantity != 0 && str[i] == ' '){
              output2.innerText =  str[i]   
            }else{
              output2.innerText = 'Кончились чернила'
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
const asd = new FullInk('red',10)
asd.full(10)
asd.display('метод для печати (метод принимает строку и выводит текст соответствующим цветом;')






// const printText = document.getElementById(".qwe") as HTMLButtonElement
// printText.addEventListener("click", () => {
//   const myInput = document.getElementById("#DZ1 input") as HTMLInputElement;
//   const value = myInput.value;
//   console.log(value);
// });

const printText = document.querySelector('.qwe') as HTMLButtonElement
const output2 = document.querySelector('#print1 p') as HTMLParagraphElement
const onClickc = function (){
    const lineText = (document.querySelector('#DZ1 input') as HTMLInputElement).value
    asd.display(lineText)
   
 
}
printText?.addEventListener('click', onClickc)









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
  console.log (input1.value)
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
/*
Реализуйте класс ExtendedDate, унаследовав его от стандарт-
ного класса Date и добавив следующие возможности:
■ метод для вывода даты (числа и месяца) текстом;
■ метод для проверки – это прошедшая дата или будущая
(если прошедшая, то метод возвращает false; если буду-
щая или текущая, то true);
■ метод для проверки – високосный год или нет;
■ метод, возвращающий следующую дату.
Создайте объект класса ExtendedDate и выведите на экран
результаты работы новых методов.
*/
let num = new Date().getDate().toLocaleString()
console.log (num)
let mon = new Date().getMonth()
 
      console.log (mon)

class ExtendedDate extends Date {
    getRussianDate() {
      let num = new Date().getDate().toLocaleString()
      let mon = new Date().getMonth()
      console.log (num)
      console.log (mon)
      const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
      const digit = ['','первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое']
      const twoDigitNumber = ['десятое', 'одиннадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семнадцатое', 'восемнадцатое', 'девятнадцатое']
      const dozens = ['','','двадцать', 'тридцать',]
      if (num.length == 2){
       if ((+ num[0]) == 1){
         return twoDigitNumber[(+ num[1])] + ' ' + month[(mon)]
       }else{
         return dozens[(+ num[0])] +' '+ digit[(+ num[1])] + ' ' + month[(mon)]
       }
      }
      if (num.length == 1){
        return digit[(+ num[0])] + ' ' + month[(mon)]
      }
      
    }
    now() {
      this.now()
    }
    parse(val:string) {
      this.parse(val)
    }
  }
  
  console.log((new ExtendedDate('2020-12-26')).getRussianDate())
   


//   function inWordsTheNumber (num : number|string) {
//     const digit = ['','один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
//     const twoDigitNumber = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
//     const dozens = ['','','двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
//     num = String (num)
//     if ((+ num[0]) == 1){
//       return twoDigitNumber[(+ num[1])]
//     }else{
//       return dozens[(+ num[0])] +' '+ digit[(+ num[1])]
//     }
   
//   }
//     console.log(inWordsTheNumber(35))
    
/*
Задание 3
Реализовать класс Employee, описывающий работника, и со-
здать массив работников банка.
Реализовать класс EmpTable для генерации html кода таблицы
со списком работников банка. Массив работников необходимо
передавать через конструктор, а получать html код с помощью
метода getHtml().
Создать объект класса EmpTable и вывести на экран результат
работы метода getHtml().
Задание 4
Реализовать класс StyledEmpTable, который наследуется от
класса EmpTable. Добавить метод getStyles(), который возвращает
строку со стилями для таблицы в тегах style. Переопределить
метод getHtml(), который добавляет стили к тому, что возвращает
метод getHtml() из родительского класса.
Создать объект класса StyledEmpTable и вывести на экран
результат работы метода getHtml().
*/
