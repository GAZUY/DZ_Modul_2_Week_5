var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Katridge = /** @class */ (function () {
    function Katridge(color, amount_of_ink) {
        this.color = color;
        this.amount_of_ink = amount_of_ink;
    }
    Katridge.prototype.display = function (str) {
        var quantity = this.amount_of_ink;
        for (var i = 0; i < str.length; i++) {
            if (quantity != 0 && str[i] != ' ') {
                quantity -= 0.5;
                document.write(str[i]);
            }
            else if (quantity != 0 && str[i] == ' ') {
                document.write(str[i]);
            }
            else {
                document.write('Кончились чернила');
                break;
            }
        }
    };
    return Katridge;
}());
var FullInk = /** @class */ (function (_super) {
    __extends(FullInk, _super);
    function FullInk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullInk.prototype.full = function (amount_of_ink) {
        this.amount_of_ink = 100;
    };
    return FullInk;
}(Katridge));
var asd = new FullInk('red', 10);
asd.full(10);
asd.display('метод для печати (метод принимает строку и выводит текст соответствующим цветом;');
