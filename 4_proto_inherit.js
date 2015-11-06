// 1. Реализуйте простое наследование с помощью функции extend(parent). Пример работы:
function Dropdown(options){}

Dropdown.prototype.setHeight = function(height){
	console.log('Height');
};

Dropdown.prototype.itemsToShow = 15;

var CoolDropdownClass = extend(Dropdown);
var coolDropdownInstance = new CoolDropdownClass();
console.log(coolDropdownInstance.itemsToShow); // 15
coolDropdownInstance.setHeight(); // 'Height'
// (1h)


// 2. Реализуйте наследование классов подобным образом Grandparent -> Parent -> Child. При этом, вызов init должен в начале вызывать init родительского класса.
function Grandparent(){}
Grandparent.prototype.init = function(){
	console.log('Grandparent init called');
};
function Parent(){}
function Child(){}

var aChild = new Child();
aChild.init(); // 'Grandparent init called', 'Parent init called', 'Child init called'
// (0.5h)




// 3. a) Реализовать наследование класса SubMenu от Menu. б) Вызвать init родителя в методе init наследника.
// в) в текущей реализации runListeners вызовет как listener-ы родителя, так и наследника. Измените код таким образом, чтобы
// subMenu.runListeners(); вызывал только listener-ы subMenu. Ожидаемый пример работы:
function Menu(){}

Menu.prototype.init = function(){
	console.log('init done');
	this.listeners = [function(){ console.log('listenerFn1 is run'); },
						function(){ console.log('listenerFn1 is run'); }];
};

Menu.prototype.runListeners = function(){
	for(var i = 0, ln = this.listeners.length; i < ln; i++){
		this.listeners[i]();
	}
};

function SubMenu(){}
var subMenu = new SubMenu();
subMenu.init(); // 'init done'
subMenu.listeners.push (function(){ console.log('subMenu listener is run');} );
subMenu.runListeners(); // 'subMenu listener is run'
// (1h)


// 4. Реализуйте наследование класса Panel от класса Component. После этого реализуйте функцию mixin(...args),
// с необходимыми параметрами. mixin выполняет подмешивание свойств и методов класса Form в прототип Panel,
// таким образом каждый экземпляр класса Panel может использовать функциональность Form.
// Важный момент: свойства и методы Form не должны перетирать аналогичные поля Component.
// Как видно из вывода в консоль ниже - метод setWidth является методом Component, а не Form.
function Component(){}
Component.prototype.initComponent = function(){
	console.log('inited - true');
};

Component.prototype.setWidth = function(width){
	console.log('Set width: ' + width);
};

function Form(){}
Form.prototype.validate = function(){
	console.log('validate - true');
};

Form.prototype.setWidth = function(width){
	console.log('Set form width: ' + width);
};

function Panel(){}
// mixin(...args);
var panel = new Panel();
panel.initComponent(); // 'inited - true'
panel.validate(); // 'validate - true'
panel.setWidth(600); // 'Set width: 600'
// (0.5h)


// 5. Реализовать наследование класса Child от Father без использования Object.create();
// Почему brother2 умеет читать, хотя у него этот скилл не выставлен в true?
// Что нужно изменить в коде, чтобы brother2 умел только бегать?
function Father(){}
Father.prototype.skills = {};
function Child(){}

var brother1 = new Child();
console.log(typeof brother1.skills == 'object');
brother1.skills.run = true;
brother1.skills.read = true;
var brother2 = new Child();
brother2.skills.run = true;
console.log(brother2.skills.read); // true
// (0.5h)