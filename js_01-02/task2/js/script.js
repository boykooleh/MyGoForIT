var arr = [];
var flag = true;
for (var i = 0; i < 5; i++) {
	arr[i] = prompt('заполните массив');
}
var name = prompt('введите имя пользователя');
if (flag == true) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == name) {
			flag = true;
			alert(name + ', Вы успешно вошли');
			break;
		}
		else {
			flag = false;
		}
	}
}
	if (flag == false){
		alert('Error, Данный пользователь не зарегестрирован')
	}
	
	







	
		
				
