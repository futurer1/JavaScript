var obj = new Object();                       //создали объект
obj.param1 = "значение свойства param1";      //добавили свойство со значением
obj.param2 = { val1: "значение1", val2: 2};   //добавили ещё одно свойство-объект с 2мя свойствами внутри

alert(obj.param1);
alert(obj.param2.val1);
