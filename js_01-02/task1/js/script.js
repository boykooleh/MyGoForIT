function pow() {
	var base = prompt('Введите число');
	var exponent = prompt('Введите степень');
	var result = 1;
		if (base == 0) {
			result = 0
		} else
			for(var i = 0; i < exponent; i++){
			result*=base;
			}
		console.log('результат числа ' + '"' + base + '"' + ' в сепени ' + '"' + exponent + '"' + ' = ' + result);
}
pow();



	
		
				
