// 1. Напишите код, который позволяет поймать все клики на странице. Без использования jQuery.
// (0.3h)


// 2. Представлена следующая разметка. Напишите код, который удаляет элемент из списка при щелчке по нему.
// Можно использовать jQuery.
<ul id="listToDestroy">
    <li><a href="#">first item</a></li>
    <li><a href="#">second item</a></li>
    <li><a href="#">third item</a></li>
    <li><a href="#">forth item</a></li>
    <li><a href="#">Fifth item</a></li>
</ul>
// (0.5h)


// 3. Напишите код, который при клике по кнопке Save удаляет эту кнопку и на ее месте создает 2 кнопки:
// Update и Cancel. Покажите 2 способа решения задачи. (с JQuery)
<div id="toolbar">
  <button class="save">Save</button>
</div>
// (0.75h)


// 4. Добавьте инпут-элемент в body. Повесьте обработчик события. При клике текст должен выводиться в консоль.
// Почему снятие обработчика не срабатывает? Каким образом правильно убирать обработчик события?
<input type="button" id="show" />
document.getElementById('show').addEventListener('click', function(){ console.log('I am called'); });
document.getElementById('show').removeEventListener('click', function(){ console.log('I am called'); });
// (0.3h)