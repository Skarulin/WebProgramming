const table = document.createElement('table');
let count = 0;
function fortable() {
    if(document.getElementById('table')){
        alert("Вы уже создали таблицу, простите :(");
    }
    else{
        table.innerHTML = "<table>\n" +
            " Вы создали таблиу! Теперь добавьте строки "+
            count+
        "</table>";

        table.setAttribute('id', 'table');
        document.body.append(table);
        count+=1;
    }
}

function add(){
        let a = table.insertRow();
        a.insertCell().append(count);
        a.insertCell().append("name cat");
        a.insertCell().append("some text about cats");
        count++;
}
function del(){
    if(document.getElementById('a').value===""){
        alert("введите число");
    }
    element_for_del = document.getElementById('a').value;
    try {
        table.deleteRow(element_for_del-1);
        alert("строка успешно удалена!");
    }
    catch (e){
        alert("неправильный номер строки!");
    }
}