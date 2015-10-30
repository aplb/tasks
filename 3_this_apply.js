// 1. Реализуйте вызов функции postInit в контексте разных виджетов, функция должна выводить this.height каждого виджета в консоль.
var someWindow = {
	height: 500
};

var panel = {
	height: 300
};
// (0.5h)


// 2. Реализуйте функцию interceptBefore(obj, method, fn, scope). Существует obj.method(); вызов interceptBefore позволяет создать у obj такой method, который вызывает fn в контексте scope перед оригинальным  obj.method();
// Пример работы:
var obj = {
	propA: 10,
	method: function(){
		console.log('Method called, prop = ' + this.propA);
	}
};

var scope = {
	propA: 20
};

function fn() {
	console.log('Method called BEFORE, prop = ' + this.propA);
}

interceptBefore(obj, method, fn, scope);
obj.method(); // 'Method called BEFORE, prop = 20', ''Method called, prop = 10'
// (1h)


// 3. Реализуйте функцию interceptAfter(obj, method, fn, scope). Существует obj.method(); вызов interceptAfter позволяет создать у obj такой method, который вызывает fn в контексте scope после оригинального  obj.method();
// Пример работы:
var obj = {
	propA: 10,
	method: function(){
		console.log('Method called, prop = ' + this.propA);
	}
};

var scope = {
	propA: 20
};

function fn() {
	console.log('Method called AFTER, prop = ' + this.propA);
}

interceptAfter(obj, method, fn, scope);
obj.method(); // 'Method called, prop = 10', 'Method called AFTER, prop = 20'
// (0.5h)


// 4. Реализуйте функцию-декоратор decorateMultiply, которая умножает на 10 результат работы функции multiply. При этом декорирующая функция принимает аргументы для того, чтобы multiply выполнила над ними операцию. Пример работы:
function multiply(x, y){ return x * y; }
var decor = decorateMultiply(multiply);
console.log( decor(2, 5) ); // 100
// (0.5h)


// 5. Реализуйте функцию each(enumerable, callback, context) без использования forEach. Функция должна обходить как массивы, так и объекты и вызывать callback в контексте context.
// (0.3h)


// 6. Реализуйте функцию map(enumerable, callback, context) без использования нативной js-функции map. Функция должна обходить как массивы, так и объекты и возвращать новый массив
// значений, которые возвращает вызов callback. callback должен вызываться в контексте context. Для этой функции map используйте each, реализованную выше. Пример работы:
var result = map([101, 102, 103], function(value, idx){ return value * 10 });
console.log( result ); // 1010, 1020, 1030
// (0.3h)


// 7. Реализуйте следующую функцию showVals, используя arguments. showVals может принимать строки, числа и массив из строк и чисел, после чего выводит их в консоль во одному. Если аргументы не переданы - выводит сообщение.
function showVals(){}

showVals(); // 'Nothing passed'
showVals(5); // 5
showVals('x', 'z'); // 'x', 'z'
showVals(['5', '6']); // '5', '6'
showVals(7, ['5', '6']); // 7, '5', '6'
// (1h)


// 8. Добавьте объекту store методы incEach() и multiplyEachByTen(), чтобы реализовать приведенную ниже цепочку вызовов. При этом incEach увеличивает каждый элемент массива values на 1,
// а multiplyEachByTen умножает каждый элемент на 10.
var store = {
	values: [1,2,3]
	// ...
};

store.incEach().multiplyEachByTen().incEach(); // 21, 31, 41
// (0.5h)