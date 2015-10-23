// 1. Реализовать функцию clone, которая позволяет копировать объекты, содержащие примитивные значения. Пример работы:
var obj1 = {
		a: 10,
		b: 20
	};

var obj2 = clone(obj1);
obj1.a = 15;
console.log(obj2.a); // 10
obj2.b = 25;
console.log(obj1.b); // 20
// (0.5h)


// 2. Улучшить функцию clone таким образом, чтобы кроме примитивных значений она могла копировать вложенные значения,
// включая объекты, массивы, даты. Пример работы:
var obj1 = {
		a: 10,
		b: 20,
		c: {
			item1: 'title',
			nestedObj: {
				x: 50,
				y: 60
			}
		},
		arr: [1,2,3]
	};
var obj2 = clone(obj1);
obj2.arr.push(4);
console.log(obj2.arr, obj1.arr); // [1,2,3,4], [1,2,3]
obj1.c.item1 = 'titleChanged';
obj1.c.nestedObj.x = 90;
console.log(obj1.c.item1, obj2.c.item1); // "titleChanged", "title"
console.log(obj1.c.nestedObj.x, obj1.c.nestedObj.y, obj2.c.nestedObj.x, obj2.c.nestedObj.y); // 90, 60, 50, 60
// (0.3h)


// 3. Реализовать функцию merge(destination, source), которая записывает значения из объекта source в объект destination.
// Функция поддерживает глубокое копирование, для этого можно воспользоваться реализованной выше функцией clone. Пример работы:
var source = {
		a: 10,
		b: {
			item1: 'title'
		}
	};

var destination = {
		a: 20,
		b: {
			item1: 'panel'
		},
		c: true
	};

merge(destination, source);
console.log(destination.a, destination.b.item1, destination.c); // 10, 'title', true
source.b.item1 = 'window';
console.log(destination.b.item1); // 'title'
// (0.5h)


// 4. Реализовать функцию mergeIf(destination, source), которая записывает значения из объекта source в объект destination
// только в том случае, если в destination отсутствует такое свойство. Пример работы:
var source = {
		a: 10,
		b: {
			item1: 'title'
		},
		c: false
	};

var destination = {
		c: true
	};
mergeIf(destination, source);
console.log(destination.a, destination.b.item1, destination.c); // 10, 'title', true
// (0.3h)


// 5. Улучшить функцию merge(destination [, source1, source2 ... sourceN]), таким образом, чтобы вместо второго аргумента
// source она могла принимать 1 и более source-объектов. Пример работы.
var source1 = {
		a: 10,
		b: {
			item1: 'title'
		},
		c: false
	};
var source2 = {
	b: [1,2,3]
	c: true
};
var destination = {};

merge(destination, source1, source2);
console.log(destination.a, destination.b, destination.c); // 10, [1,2,3], true
source2.b.push(4);
source1.a = 50;
console.log(destination.a, destination.b, destination.c); // 10, [1,2,3], true
console.log(source1.a, source2.b); // 50, [1,2,3,4]
// (0.5h)