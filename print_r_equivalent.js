function print_r(arr, level)    //выводит всё содержимое массива
{
    var print_red_text = "";
    if(!level) level = 0;
    var level_padding = "";
    for(var j=0; j<level+1; j++) level_padding += "    ";
    if(typeof(arr) == 'object') {
        for(var item in arr) {
            var value = arr[item];
            if(typeof(value) == 'object') {
                print_red_text += level_padding + "'" + item + "' :\n";
                print_red_text += print_r(value,level+1);
            }
            else
                print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
    }

    else  print_red_text = "===>"+arr+"<===("+typeof(arr)+")";
    return print_red_text;
}

//Пример использования
var some_mas = new Array('a' => 'aa11', 'b' => 'aa22', 'c' => 'aa33');
print_r(some_mas);
