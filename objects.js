var obj = new Object();                       //создали объект
obj.param1 = "значение свойства param1";      //добавили свойство со значением
obj.param2 = { val1: "значение1", val2: 2};   //добавили ещё одно свойство-объект с 2мя свойствами внутри
obj["param3"] = 5;  //добавили ещё свойство со значением 5

alert(obj.param1);
alert(obj.param2.val1);

delete obj.param2.val2;   //удалили свойство
