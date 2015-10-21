// 1. В функцию logResult передается массив для вывода в консоль. Измените код таким образом, чтобы функция logResult использовала массив,
// через замыкание вместо аргумента.
function logResult(res){
	for(var i = 0; i< res.length; i++){
		console.log(res[i]);
	}
}

var result = [101, 201, 301];
logResult(result);
// (0.5h)


// 2. Реализовать фукцию makeSummator. Пример работы:
var doSum = makeSummator();
console.log( doSum(5) ); // 5
console.log( doSum(6) ); // 11
// (1h)

// 3. Написать функцию doSum работающюю след образом:
	doSum(1)(2)(3)() // 6
	doSum(1)(2)(3)(6)(7)() // 19
// (1h)


// 4. Релизуйте функцию every(enumerable, callback), которая возвращает true, если для каждого элемента множества callback возвращает true, и false в противном случае. Пример работы:
var flag = every({a: 50, b: 70, c: 80}, function(value, idx){ return value > 50; });
console.log( flag ); // false
// (1h)


// 5. Релизуйте функцию some(enumerable, callback), которая возвращает true, если для одного из элементов множества callback возвращает true, и false в противном случае. Пример работы:
var flag = some([101, 102, 103], function(value, idx){ return value === 101; });
console.log( flag ); // true

// 6. Следующий код выводит 5 раз '5'. Переделайте код так, чтобы он выводил 0,1,2,3,4. Задержка в 100мс должна остаться
	for(var i = 0; i < 5; i++) {
			setTimeout(function() {
				console.log(i);
			}, 100);
	}
// (0.5h)