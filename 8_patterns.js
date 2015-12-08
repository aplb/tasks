// 1. Единственный объект/Singleton. Реализуйте показанное ниже поведение. Выполните задание двумя способами.
function Constructor(){}
var a = new Constructor();
var b = new Constructor();
a === b // true
// (0.5h)


// 2. Реализуйте итератор как показано ниже:
var iter = new Iterator([1,2,3]);
iter.next(); // 1
iter.next(); // 2
iter.hasNext(); // true
iter.next(); // 3
iter.hasNext(); // false
// (1h)


// 3. С помощью функции extend реализуйте наследование 2 способами: а) установкой ссылки на прототип родителя.
// б) копированием свойств из прототипа родителя. (учитывать глубокое копирование, можно использовать jQuery.extend)
function Toolbar(){}

Toolbar.prototype.init = function(){
	console.log('init toolbar');
};

Toolbar.prototype.align = function(){
	console.log('align toolbar');
};

function ToolbarWithDocked(){}
extend(Toolbar, ToolbarWithDocked);

var customWindowToolbar = new ToolbarWithDocked();
customWindowToolbar.init();
customWindowToolbar.align();
// (0.5h)


// 4. а) Реализуйте простой модуль, который экспортирует функцию, выполняющую умножение:
var multiply /*= вызов модуля здесь*/
multiply(6, 7); // 42



// б) Реализуйте простой модуль, который экспортирует объект с двумя методами:
// один из методов выполняет проверку чисел на простоту, а второй - целое ли число.
var math /*= вызов модуля здесь*/
math.isPrime(13); // true
math.isPrime(16); // false
math.isInteger(16); // true
math.isInteger(1.6); // false
math.isInteger(NaN); // false
// (0.5h)


// 5. Используем механизм publish/subscribe. Реализуйте класс Observable.
// Он должен предоставлять метод on(eventName, handler), который принимает в качестве параметров
// имя события и обработчик. При этом, на одно событие можно подписывать несколько обработчиков. Пример:
var store = new Observable();
store.on('load', function(e){ console.log('iLoad!', e.mode) });
store.on('someEvent', function(){ console.log('someEvent triggered') });
store.on('someEvent', function(){ console.log('someEvent triggered again') });

// Далее реализуйте метод fireEvent(eventName), который в качестве параметра принимает имя события. Проверка:
// Одновременно с этим, fireEvent может вызываться с дополнтельными аргументами, которые затем передаются в обработчик.
store.fireEvent('load', {mode: 'cool'}); // iLoad, cool
store.fireEvent('someEvent'); // someEvent triggered, someEvent triggered again

// После этого имеет смысл предоставить возможность отписываться от событий.
// метод on() возвращает функцию, которую затем можно вызвать и отвязать обработчик от события. Пример:
var off = store.on('load', function(){ console.log('iLoad!') });
off();
store.fireEvent('load'); // nothing
// (1h)


// 6. Паттерн медиатор. Ниже представлены 3 сущности: employee, department и HR.
// Сделайте их экземплярами класса Observable из задачи выше, а после присвойте поля,
// как показано ниже. Сущности должны общаться между собой следующим образом:
// Departments и новый employee не связаны напрямую.
// Новый employee, вызывает событие на HR через метод applyToDep.
// Получив уведомление HR проверяет, у какого департамента меньше людей.
// После этого HR вызывает метод dep hireNewEmployee, который увеличивает количество employees на 1.
var employee = {
	name: 'Tony',
	depId: null,
	applyToDep: function(){},
	HR: HR
};
var dep1 = {
	id: 1,
	name: 'dep1',
	employees: 4,
	hireNewEmployee: function(){}
};
var dep2 = {
	id: 2,
	name: 'dep2',
	employees: 2,
	hireNewEmployee: function(){}
};

var HR = {
	onNewApply: function(){},
	checkDepsPeople: function(){}
};

employee.applyToDep();
dep2.employees === 3 // true
// (1h)


// 7. Memory. Ниже представлены простой list & store. Store - экземпляр класса Observable из задачи 5. Почему после удаления объект store остается доступным через list?
// Измените код таким образом, чтобы удалить store корректно.
function destroyStore(){
	store = null;
}
var list = {};
var store = new Observable();
store.data = [];
list.store = store;
list.store.on('load', function(){ console.log('load event'); });
destroyStore();

p.store // Object {data: Array[0]}
// (0.5h)

// 8. Почему после удаления Панели из DOM, она доступна через list?
// Как выполнить удаление правильно?
<div id="panel">
	<ul id="list">
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
	</ul>
</div>

var panel = $('#panel')
var list = $('#list')
panel.remove()
panel = null
list.parentNode // <div id=​"panel">​…​</div>​
// (0.5h)


// 9. Ниже представлена коллекция элементов, обход которой выполняется с помощью jQuery.each.
// Оптимизируйте jQuery.each следующим образом: как только обнаруживается сущность, у которой поле someState true, установить переменной hasStateSet true
// и завершить цикл вместо перебора всех сущностей.
var list = [{name: 'z', someState: false}, {name: 'y', someState: true}, {name: 'x', someState: false}, {name: 'v', someState: true}, {name: 'u', someState: false}];
var hasStateSet = false;
$.each(list, function(i, item){});
// (0.3h)


// 10. В анти-примере ниже тело таблицы заполняется данными сущностей из списка, при это append к таблице происходит
// на каждой итерации цикла. Оптимизируйт доступ к DOM так, чтобы обращение к таблице происходило только один раз
<table id="employees"></table>
var list = [{name: 'z', someState: false}, {name: 'y', someState: true}, {name: 'x', someState: false}, {name: 'v', someState: true}, {name: 'u', someState: false}];
var table = document.getElementById('employees');
for(var i = 0, len = list.length; i < len; i++){
	var tr = document.createElement('tr');
	tr.innerHTML = '<td># ' + (i+1) + ' | </td><td>' + list[i].name + ' | </td><td>' + list[i].someState + '</td>';
	table.appendChild(tr);
}
// (0.5h)


// 11. Добавьте в div container несколько div-ов, половине из которых должен быть присвоен класс `visited`.
// Используйте шаблон делегирование событий, чтобы добавлять класс `visited` только тем div элементам, у которых он отсутствует.
<div class="container"></div>
// (0.5h)