// 1. Создайте новый deferred объект с помощью jQuery. Используя deferred-функциональность зарегистрировать функцию
// обратного вызова incrementCounter для успешного разрешения deferred. После этого зарезолвить deferred. Проверить счетчик.
var counter = 0;
function incrementCounter(){
	counter++;
}

setTimeout(function(){
	// ...code here
	console.log(counter); // 1
}, 0);
// (0.5h)


// 2. Создайте новый deferred объект с помощью jQuery. Используя deferred-функциональность зарегистрировать функцию
// обратного вызова incrementCounter для неудачного(!) разрешения deferred. Зарезолвить deferred с аргументами. Проверить счетчик.
var rejectCounter = 0;
function incrementCounter(reason){
	rejectCounter++;
	console.log('Deferred failed - ' + reason);
}

setTimeout(function(){
	// ...code here  // 'Deferred failed - because 42'
	console.log(rejectCounter); // 1
}, 0);
// (0.3h)


// 3. а) Создайте класс Deferred.
// б) Этот класс должен предоставлять 2 метода: done и fail для того,
// чтобы регистрировать и сохранять внутри класса функции обратного вызова. Использование:
var dfd = new Deferred();
dfd.done(function(){ console.log('Success'); });
dfd.fail(function(){ console.log('Fail'); });

// в) Реализуйте 2 метода: resolve и reject. Эти методы вызывают зарегистрированные
// с помощью done/fail соответствующие функции обратного вызова. Использование:
dfd.resolve(); // 'Success'
dfd.reject(); // 'Fail'
// (1h)


// 4. setTimeout имитирует 2 асинхронных запроса, которые завершаются в разное время.
// Используя JQuery Deferred функционал, модифицируйте код таким образом, чтобы функция allXhrCompleted
// была вызвана сразу, как только завершится выполнение 2х запросов. (установить setTimeout(..., 2000+) - не считается решением :)).
function allXhrCompleted(){
	console.log(data.length); // 2
}

var data = [];

var randomTimeout = Math.ceil(20 * Math.random() + 1);
setTimeout(function(){
	data.push(10);
	console.log('Request 1 completed');
}, randomTimeout);

randomTimeout = Math.ceil(20 * Math.random() + 1);
setTimeout(function(){
	data.push(20);
	console.log('Request 2 completed');
}, randomTimeout);
// (0.75h)


// 5. Для функции logQueue установлен таймаут, чтобы вывести в консоль результат через определенный промежуток времени.
// Однако, logQueue вызвана из кода раньше, и теперь вывод в консоль производится дважды.
// Измените код таким образом, чтобы очищать расписание таймаута, если вызов logQueue уже произошел раньше.
function logQueue(){
	for(var i = result.length - 1; i >= 0; i--){
		console.log(result[i]);
	}
}

var result = [101, 201, 301];
setTimeout(logQueue, 1000);

logQueue();
// (1h)