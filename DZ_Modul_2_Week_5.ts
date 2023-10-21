
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
const asd = new FullInk('red',10)
asd.full(10)
asd.display('метод для печати (метод принимает строку и выводит текст соответствующим цветом;')
