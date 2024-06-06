const apiKey = "8adf22bde9cee0ca13a5012d5a4ce2b6";
const getApiUrl = (apiKey, cityName) => `https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=${cityName}&appid=${apiKey}`;
const searchboxInput = document.getElementById('inputModal');
const searchboxButton = document.querySelector('modal button');
const searchboxInput2 = document.getElementById('inputSearch-box')
const searchboxButton2 = document.getElementById('OpenButton2')
const errorWindow = document.getElementById('closed')
const ModalWindow = document.getElementById("modalwindow");
let str;
let monthName;

//Обращение к функции после загрузки страницы
window.onload = function() {
  CityFinder()
}
//Модальное окно, поиск города
async function CityFinder (){
  const OpenBtn = document.getElementById('OpenButton');
        OpenBtn.addEventListener('click',()=>{
        ModalWindow.classList.add('closed')
        let city = searchboxInput.value;
        startApp(city)
        NewCity()
        searchboxInput.value='';
        })
};
//
async function takeInfo(city){
  try {
    const result = await fetch(getApiUrl(apiKey, city));

    if (result.status !== 200) {
      console.error('Error:', data.message);
      
      return;
    }

    return await result.json();
  } catch (error) {
    console.log('Error: ', error);
  }
  
};


async function startApp(city){
  const data = await takeInfo(city);
  console.log ("###: data", data);

  if (!data) {
    return;
  }
  
  //Переменные левый блок, верх
  const LeftWeekElement = document.getElementById('week');
  const LeftDateElement = document.getElementById('dateEl')
  const cityElement = document.getElementById('city');
  const countryElement = document.getElementById('country');
  const novayadata = new(Date)(data.list[0].dt_txt)

  //Переменные правый блок, верх
  const pressureElement = document.getElementById('first-percent');
  const humidityElement = document.getElementById('second-percent');
  const windElement = document.getElementById('WindPercent');

 //Переменные левый блок, низ
  const LeftTempElement = document.getElementById('Temperature')
  const LeftWeatherElement = document.getElementById('WeatherEl')
  const LeftWeatherElementMark = document.getElementsByClassName("left-block__weather-mark")
  const CreatedLeftWeatherElementMark = document.getElementById('LeftWeatherMark')

//Раскидывание данных по HTML
  if (LeftWeekElement){
      LeftWeekElement.innerText = getWeekName(novayadata.getDay())};

  if (LeftDateElement){
      LeftDateElement.innerText = `${novayadata.getDate()} ${getMonthName(novayadata.getMonth())} ${novayadata.getFullYear()}`};


  if (cityElement) {
      cityElement.innerText = data.city.name};

  if (countryElement) { 
      countryElement.innerText = data.city.country};

  if (LeftTempElement){
      LeftTempElement.innerText = Math.round(data.list[0].main.temp) + '°C'};

  if (LeftWeatherElement){
      LeftWeatherElement.innerText=MakeZaglav(`${data.list[0].weather[0].description}`)};
  if (CreatedLeftWeatherElementMark){

  }
  if (CreatedLeftWeatherElementMark){
    CreatedLeftWeatherElementMark.remove();
  }
  if (LeftWeatherElementMark){
          const image1 = document.createElement('img');
                image1.id = 'LeftWeatherMark'
                image1.src = WeatherToIcon(data.list[0].weather[0].icon);
                image1.alt = 'Описание изображения';
                image1.width = 100;
                image1.height = 100;
          const container = document.querySelector('#imagecontainer')
                container.append(image1)};
  
  if (pressureElement) {
    pressureElement.innerText =  Math.round(data.list[0].main.pressure) +' hPa'};

  if (humidityElement){
      humidityElement.innerText = `${data.list[0].main.humidity} %`};

  if (windElement) {
      windElement.innerText = Math.round(data.list[0].wind.speed) + ' km/h'};


   

  let days = [data.list[0],data.list[8],data.list[16],data.list[24]];




//Weatherblock
  const daysContainer = document.querySelector('.right-block__weatherblock');
        daysContainer.innerHTML = ''  
        const idList = [];
  days.forEach((day,index) => {
  const dayiter  = day;
  const markClassname = 'weatherblock__unit__mark';
  const weekdayClassname = 'weatherblock__unit__week';
  const tempClassname = 'weatherblock__unit__temperature';
  const dayElname = 'right-block__weatherblock__unit';
  const ButtonClassname = 'Buetton';


  
  //Все про кнопки WeatherBlock'a
  const btnElement = document.createElement('button')
        btnElement.id = dayiter.dt
        
        idList.push(btnElement.id)
        btnElement.classList.add(ButtonClassname)
        if (index == 0){
        btnElement.classList.add('BuettonActive')
        }
        btnElement.addEventListener('click',()=>{
        btnElement.classList.toggle('BuettonActive')

  function ActiveButtonRemoval (id){
    let OtherElement0 = document.getElementById(`${idList[0]}`)
    let OtherElement1 = document.getElementById(`${idList[1]}`)
    let OtherElement2 = document.getElementById(`${idList[2]}`)
    let OtherElement3 = document.getElementById(`${idList[3]}`)
    if (id==idList[0]) {
      OtherElement1.classList.remove('BuettonActive')
      OtherElement2.classList.remove('BuettonActive')
      OtherElement3.classList.remove('BuettonActive')
    }
    else if (id == idList[1]){
      OtherElement0.classList.remove('BuettonActive')
      OtherElement2.classList.remove('BuettonActive')
      OtherElement3.classList.remove('BuettonActive')}
    else if (id == idList[2]){
      OtherElement0.classList.remove('BuettonActive')
      OtherElement1.classList.remove('BuettonActive')
      OtherElement3.classList.remove('BuettonActive')}
    else if (id == idList[3]){
      OtherElement0.classList.remove('BuettonActive')
      OtherElement1.classList.remove('BuettonActive')
      OtherElement2.classList.remove('BuettonActive')}
  };


  if (pressureElement) {
      pressureElement.innerText = '';
      pressureElement.innerText =  `${dayiter.main.pressure} hPa`;
  };
  if (humidityElement){
      humidityElement.innerText =' ';
      humidityElement.innerText = Math.round(dayiter.main.humidity) + ' %'
  };
  if (windElement) {
      windElement.innerText = ' ';
      windElement.innerText = Math.round(dayiter.wind.speed) + ' km/h';
  };
  ActiveButtonRemoval(btnElement.id)
  })
  const DayDate = new(Date)(dayiter.dt_txt)
  const weekDayEl = createDivElement(weekdayClassname, getCuttedWeekName(DayDate.getDay()));
  const tempDayEl = createDivElement(tempClassname, `${Math.round(dayiter.main.temp)}`);
  const image = document.createElement('img');
        image.src= WeatherToIcon(dayiter.weather[0].icon);
  const markDayEl = createDivElement(markClassname);
        markDayEl.append(image);
  const dayEl = createDivElement(dayElname);  



  btnElement.append(markDayEl);
  btnElement.append(weekDayEl);
  btnElement.append(tempDayEl);
  dayEl.append(btnElement);
  daysContainer.append(dayEl);
});

// Делает первую букву заглавной
function MakeZaglav(str) {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  return(capitalize(str)) ;
}

//Создание div элемента
function createDivElement(className, innerText) {
  const el = this.document.createElement('div');
  el.classList.add(className);

  if (innerText) {
    el.innerText = innerText
  }

  return el;
};
// Преобразование числа от getDay в строку с названием дня недели
function getWeekName(daynumber){
  if (daynumber == 1){str = 'Monday'}
  else if (daynumber ==2 ) {str = 'Tuesday'}
  else if (daynumber == 3) {str = 'Wednesday'}
  else if (daynumber == 4) {str = "Thursday"}
  else if (daynumber == 5) {str = 'Friday'}
  else if (daynumber == 6) {str ='Saturday'}
  else if (daynumber == 0) {str = 'Sunday'}
  return str
};
function getCuttedWeekName (daynumber){
  if (daynumber == 1){str = 'Mon'}
  else if (daynumber ==2 ) {str = 'Tue'}
  else if (daynumber == 3) {str = 'Wed'}
  else if (daynumber == 4) {str = "Thu"}
  else if (daynumber == 5) {str = 'Fri'}
  else if (daynumber == 6) {str ='Sat'}
  else if (daynumber == 0) {str = 'Sun'}
  return str
}
// Преобразование числа от getMonth в строку с названием месяца
function getMonthName (month){
  if (month==0) {monthName = "Jan"}
  else if (month==1)   {monthName = "Feb"}
  else if (month==2)      {monthName = "March"}
  else if (month==3)    {monthName = "April"}
  else if (month==4)       {monthName = "May"}
  else if (month==5)      {monthName = "Jun"}
  else if (month==6)      {monthName = "Jul"}
  else if (month==7)    {monthName = "Aug"}
  else if (month==8)  {monthName = "Sep"}
  else if (month==9)   {monthName = "Oct"}
  else if (month==10)   {monthName = "Nov"}
  else if (month==11)  {monthName = "Dec"}
  return monthName
};
// Иконки с погодой
function WeatherToIcon (iconid){
if (iconid =="01d" ) {img = './image/sunmark.svg'}  
else if (iconid =="02d" ) {img = './image/cloudlymark.svg'}
else if (iconid =="03d") {img = './image/cloudlymark.svg'}
else if (iconid =="04d") {img = './image/cloudlymark.svg'}
else if (iconid =="09d") {img = './image/rainymark.svg'}
else if (iconid =="10d") {img = './image/rainymark.svg'}
else if (iconid =="11d") {img = './image/rainymark.svg'}
else if (iconid =="13d") {img = './image/snowmark.svg'}  
else if (iconid =="50d") {img = './image/mistmark.svg'}
else if (iconid =="01n" ) {img = './image/sunmark.svg'}  
else if (iconid =="02n" ) {img = './image/cloudlymark.svg'}
else if (iconid =="03n") {img = './image/cloudlymark.svg'}
else if (iconid =="04n") {img = './image/cloudlymark.svg'}
else if (iconid =="09n") {img = './image/rainymark.svg'}
else if (iconid =="10n") {img = './image/rainymark.svg'}
else if (iconid =="11n") {img = './image/rainymark.svg'}
else if (iconid =="13n") {img = './image/snowmark.svg'}  
else if (iconid =="50n") {img = './image/mistmark.svg'}
return img
};

};
//Поиск нового города
async function NewCity (){
searchboxButton2.addEventListener("click",()=>{ 
    startApp(searchboxInput2.value);
  searchboxInput2.value='';
})
};




