
//Для вывода цены
var finalPrice = document.getElementById('finalPrice');
var sum = 0; //итоговая цена
//Список услуг
var service = document.getElementById('service');

//Индекс типа услуги по умолчанию равный 0
var sTypeIndex = service.options.selectedIndex;

//Значение услуги по умолчанию unselected
var sValue = service.options[sTypeIndex].value; 

var servicePick = false; //якорь выбора услуги
var sitePick = false; //якорь выбора сайта

service.onchange = function(event){
	//Получаем индекс выбранного элемента списка
	sTypeIndex = service.options.selectedIndex;
	//Получаем значение услиги по новому индексу
	sValue = service.options[sTypeIndex].value; 

	//Если якорь истенен, то удаляем элементы предыдущей услуги
	if(servicePick == true){
		removeTags('serviceType');
		servicePick = false;
		sum = 0;
		finalPrice.innerHTML = '';
	}

	if(sitePick == true){
		removeTags('dopServices');
		sitePick = false;
		sum = 0;
		finalPrice.innerHTML = '';
	}

	if(sValue == 'site'){

		html = `<div class="radios">
			<h5>Выберите тип сайта:</h5> <br/>
		   <input id="vizitka" type="radio" name="siteRadio" value="3500"> Сайт-визитка<Br>
		   <input id="blog" type="radio" name="siteRadio" value="4500"> Блог<Br>
		   <input id= "landing" type="radio" name="siteRadio" value="0"> Landing Page<Br>
		   </div>
		`;
		
		addTags('div', 'form-group', 'serviceType', html, 'clientNameGroup');

		//Получаем радиокнопки
		var siteRadio = document.getElementsByName('siteRadio');

		for(var i = 0; i <= siteRadio.length - 1; i++){
			//ловим кнопку, которую выбрали
			siteRadio[i].onchange = function(event){
				
				if(sitePick == true){
					removeTags('dopServices');
					sitePick = false;
				}

				// записываем базовую цену сайта
				sum = parseInt(event.target.value);
				finalPrice.innerHTML = '<h1>Стоимость: ' + sum + '</h1>'; 

				if(event.target.id == 'vizitka'){
					//таблица
					html = `
						<h2>Дополнительные настройки</h2>

			<table class="table table-hover">
			    <thead>
			        <tr>
			            <th>Наименование</th>
			            <th>Стоимость</th>
			            <th>Подтверждение</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td>Панель администратора</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>

			        </tr>
			        <tr>
			            <td>Форма обратной связи</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Адаптиваня верстка</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Блок комментариев</td>
			            <td>1500</td>
			            <td><input value="1500" class="additionalServices" type="checkbox"></td>
			        </tr> 
			        <tr>
			            <td>Форум</td>
			            <td>4000</td>
			            <td><input value="4000" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Стандартный слайдер</td>
			            <td>1500</td>
			            <td><input value="1500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Нестандартный слайдер</td>
			            <td>3500</td>
			            <td><input value="3500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Стандартная галерея</td>
			            <td>2500</td>
			            <td><input value="2500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Нестандартная галерея</td>
			            <td>4500</td>
			            <td><input value="4500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Поиск по сайту</td>
			            <td>1500</td>
			            <td><input value="1500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Система категорий</td>
			            <td>1500</td>
			            <td><input value="1500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Система регистрации пользователей</td>
			            <td>3000</td>
			            <td><input value="3000" class="additionalServices" type="checkbox"></td>
			        </tr> 
			        <tr>
			            <td>Роли пользователей</td>
			            <td>2500</td>
			            <td><input value="2500" class="additionalServices" type="checkbox"></td>
			        </tr>
			    </tbody>
			</table>
					`;

					addTags('div', 'form-group', 'dopServices', html, 'clientNameGroup');
					sitePick = true;

					var selectedServices = document.getElementsByClassName('additionalServices');
					countPrice(selectedServices);
	
				}

				if(event.target.id == 'blog'){
					//таблица
					html = `
						<h2>Дополнительные настройки </h2>
			<table class="table table-hover">
			    <thead>
			        <tr>
			            <th>Наименование</th>
			            <th>Стоимость</th>
			            <th>Подтверждение</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td>Панель администратора</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Форма обратной связи</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Адаптиваня верстка</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Блок комментариев</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Поиск по сайту</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Стандартная галерея</td>
			            <td>Включено в стоимость</td>
			            <td><input class="additionalServices" type="checkbox" checked disabled></td>
			        </tr>
			        <tr>
			            <td>Стандартный слайдер</td>
			            <td>1500</td>
			            <td><input value="1500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Нестандартная галерея</td>
			            <td>2500</td>
			            <td><input value="2500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Система регистрации пользователей</td>
			            <td>3000</td>
			            <td><input value="3000" class="additionalServices" type="checkbox"></td>
			        </tr> 
			        <tr>
			            <td>Роли пользователей</td>
			            <td>2500</td>
			            <td><input value="2500" class="additionalServices" type="checkbox"></td>
			        </tr>
			    </tbody>
			</table>
					`;
					addTags('div', 'form-group', 'dopServices', html, 'clientNameGroup');
					sitePick = true;

					var selectedServices = document.getElementsByClassName('additionalServices');
					countPrice(selectedServices);
				}

				if(event.target.id == 'landing'){
					//таблица
					html = `
						<h2>Дополнительные настройки </h2>
			<table class="table table-hover">
			    <thead>
			        <tr>
			            <th>Наименование</th>
			            <th>Описание</th>
			            <th>Стоимость</th>
			            <th>Подтверждение</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			        	<td>Sales page</td>
			            <td>Страница продажи или продажник. Страница на которой находится подробное описание продукта. 
Цель данной страницы продать</td>
			            <td>9000</td>
			            <td><input value="9000" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Comming page</td>
			            <td>Страница-заглушка, говорящая о том, что скоро что-то появится.</td>
			            <td>1500</td>
			            <td><input value="1500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Sold Out</td>
			            <td>Противоположная страница странице ожидания, говорящая о том, что предложение закончилось</td>
			           	<td>1500</td>
			            <td><input value="1500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Страница поддержки</td>
			            <td>На большинстве сайтов есть страница с контактами, формой обратной связи. На некоторых сайтах ссылка сразу идет на форум или на какую-нибудь тикетную систему</td>
			            <td>3500</td>
			            <td><input value="3500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Наша команда / Об автора / О компании</td>
			            <td>На странице о вашей команде естественно размещаются фотографии специалистов. Можно графически показать навыки каждого специалиста, например, знания php, знания photoshop и прочее.</td>
			            <td>3500</td>
			            <td><input value="3500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Портфолио</td>
			            <td>Как правило на странице с портфолио размещаются какие-то работы или оказанные услуги. </td>
			            <td>9000</td>
			            <td><input value="9000" class="additionalServices" type="checkbox"></td>
			        </tr>
			    </tbody>
			</table>
					`;
					addTags('div', 'form-group', 'dopServices', html, 'clientNameGroup');
					sitePick = true;

					var selectedServices = document.getElementsByClassName('additionalServices');
					countPrice(selectedServices);
				}
			}

		}
		//Указываем якорю, что услуга была выбрана
		servicePick = true;
	}


	if(sValue == 'verstka'){
		html = `
			<table class="table table-hover">
			    <thead>
			        <tr>
			            <th>Наименование</th>
			            <th>Стоимость</th>
			            <th>Подтверждение</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td>Верстка макета с нуля</td>
			            <td>4000</td>
			            <td><input value="4000" class="additionalServices" type="checkbox"></td>

			        </tr>
			        <tr>
			            <td>Частичная верстка</td>
			            <td>2500</td>
			            <td><input value="2500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Переверстка</td>
			            <td>2000</td>
			            <td><input value="2000" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Статичная</td>
			            <td>1000</td>
			            <td><input value="1000" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Адаптиваня</td>
			            <td>2000</td>
			            <td><input value="2000" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Верстка 1 стр.</td>
			            <td>2500</td>
			            <td><input value="2500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Верстка 2-3 стр.</td>
			            <td>4000</td>
			            <td><input value="4000" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Верстка 3-5 стр.</td>
			            <td>5000</td>
			            <td><input value="5000" class="additionalServices" type="checkbox"></td>
			        </tr>
			    </tbody>
			</table>
		`;

		addTags('div', 'form-group', 'serviceType', html, 'clientNameGroup');
		//Указываем якорю, что услуга была выбрана
		servicePick = true;
	}

	if(sValue == 'raznoe'){
		html = `
			<table class="table table-hover">
			    <thead>
			        <tr>
			            <th>Наименование</th>
			            <th>Стоимость</th>
			            <th>Подтверждение</th>
			        </tr>
			    </thead>
			    <tbody>
			        <tr>
			            <td>Разработка меню</td>
			            <td>800</td>
			            <td><input value="800" class="additionalServices" type="checkbox"></td>

			        </tr>
			        <tr>
			            <td>Установка слайдера</td>
			            <td>500</td>
			            <td><input value="500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Установка галереи</td>
			            <td>2500</td>
			            <td><input value="2500" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Форум</td>
			            <td>5000</td>
			            <td><input value="5000" class="additionalServices" type="checkbox"></td>
			        </tr>
			        <tr>
			            <td>Создание визиток</td>
			            <td>600</td>
			            <td><input value="600" class="additionalServices" type="checkbox"></td>
			        </tr>
			    </tbody>
			</table>
		`;

		addTags('div', 'form-group', 'serviceType', html, 'clientNameGroup');
		//Указываем якорю, что услуга была выбрана
		servicePick = true;

	}
	
	//Подсчет суммы
	var selectedServices = document.getElementsByClassName('additionalServices');
	if(selectedServices.length != 0){
		countPrice(selectedServices);
	}
}

/**
 * Создает новые элементы 
 * @param {string} tagName - название тега, который нужно создать.
 * @param {string} className - название класса.
 * @param {string} idName - название идентификатора id.
 * @param {string} html - html теги
 * @param {string} stag - id элемента перед которым будет вставлен новый элемент
 * @param {bool} status - якорь 
 */
function addTags(tagName, className, idName, html, sTag){
	var element = document.createElement(tagName);
	element.className = className;
	element.id = idName;
	element.innerHTML = html;
	var sTag = document.getElementById(sTag);
	var parent = sTag.parentNode;
	parent.insertBefore(element, sTag);
}

function removeTags(idName){
	var element = document.getElementById(idName);
	element.parentNode.removeChild(element);
}

function countPrice(selectedServices){
	for(var i = 0; i <= selectedServices.length - 1; i++){
		selectedServices[i].onchange = function(event){
			if(event.target.checked){
				sum += parseInt(event.target.value);
			}else{
				sum -= parseInt(event.target.value);
			}
			if(sum > 9000){
				var discount = sum * 10 / 100; //скидка
				var sumDiscount = sum - discount;	//сумма со скидкой
				finalPrice.innerHTML = `
					<h3>Стоимость со скидкой: ${sumDiscount}</h3>
				`;
			}else{
				finalPrice.innerHTML = '<h1>Стоимость: ' + sum + '</h1>';
			}		
		}
	}
}

var submit = document.getElementById('submit');

submit.onclick = function(){
	alert('Ваша заявка принята!');
}