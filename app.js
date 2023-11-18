//JSON

const apiKey = "8adf22bde9cee0ca13a5012d5a4ce2b6";
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?&units=metric&q=`
const searchboxInput = document.querySelector('search-box input');
const searchboxButton = document.querySelector('search-box button');
let str;
let monthName;
let city = 'Ufa';


async function takeInfo(city){
    
  const result = await fetch(apiUrl+city `&appid=${apiKey}`);
  const data = await result.json();
  console.log (data, "data");
  

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

  if (LeftWeatherElementMark){
          const image1 = document.createElement('img');
                image1.src = WeatherToIcon(data.list[0].weather[0].icon);
                image1.alt = 'Описание изображения';
          const container = document.querySelector('#imagecontainer')
                container.append(image1)};
  
  if (pressureElement) {
    pressureElement.innerText =  Math.round(data.list[0].main.pressure) +' hPa'};

  if (humidityElement){
      humidityElement.innerText = `${data.list[0].main.humidity} %`};

  if (windElement) {
      windElement.innerText = Math.round(data.list[0].wind.speed) + ' km/h'};


   
  let name = data.city.name;
  let country = data.city.country;
  let days = [data.list[0],data.list[8],data.list[16],data.list[24]];




//Weatherblock

  const daysContainer = document.querySelector('.right-block__weatherblock');
        daysContainer.innerHTML = ''  
  days.forEach((day,index) => {
  const dayiter  = day;
  const markClassname = 'weatherblock__unit__mark';
  const weekdayClassname = 'weatherblock__unit__week';
  const tempClassname = 'weatherblock__unit__temperature';
  const dayElname = 'right-block__weatherblock__unit';
  
  //Все про кнопку
  const btnElement = document.createElement('button')
        btnElement.classList.add('Buetton')
        btnElement.id = dayiter.id
        btnElement.addEventListener('click',()=>{
        btnElement.classList.toggle('BuettonActive')
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
  })
  const DayDate = new(Date)(dayiter.dt_txt)
  const weekDayEl = createDivElement(weekdayClassname, getCuttedWeekName(DayDate.getDay()));
  const tempDayEl = createDivElement(tempClassname, Math.round(dayiter.main.temp));
  const image = document.createElement('img');
        image.src= WeatherToIcon(dayiter.weather[0].icon);
        image.width=50;
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
//Возвращает полное название недели 
function weekChanger(str) {
  if (str=='Mon'){
    str='Monday'
  }
  else if  (str=="Thu"){
    str="Thursday"
  }
  else if (str=='Wed'){
    str='Wednesday'
  }
  else if (str=='Thu'){
    str='Thursday'
  }
  else if (str=='Fri'){
    str='Friday'
  }
  else if(str=='Sat'){
    str='Saturday'
  }
  else if(str=='Sun'){
    str="Sunday"
  }
  return str
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
if (iconid =="01d" ) {img = '/image/sunmark.svg'}  
else if (iconid =="02d" ) {img = '/image/cloudlymark.svg'}
else if (iconid =="03d") {img = '/image/cloudlymark.svg'}
else if (iconid =="04d") {img = '/image/cloudlymark.svg'}
else if (iconid =="09d") {img = '/image/rainymark.svg'}
else if (iconid =="10d") {img = '/image/rainymark.svg'}
else if (iconid =="11d") {img = '/image/rainymark.svg'}
else if (iconid =="13d") {img = '/image/snowmark.svg'}  
else if (iconid =="50d") {img = '/image/mistmark.svg'}
else if (iconid =="01n" ) {img = '/image/sunmark.svg'}  
else if (iconid =="02n" ) {img = '/image/cloudlymark.svg'}
else if (iconid =="03n") {img = '/image/cloudlymark.svg'}
else if (iconid =="04n") {img = '/image/cloudlymark.svg'}
else if (iconid =="09n") {img = '/image/rainymark.svg'}
else if (iconid =="10n") {img = '/image/rainymark.svg'}
else if (iconid =="11n") {img = '/image/rainymark.svg'}
else if (iconid =="13n") {img = '/image/snowmark.svg'}  
else if (iconid =="50n") {img = '/image/mistmark.svg'}
return img
};

};
// //Search Button
// window.onload = function(){
// searchboxButton.addEventListener("click",()=>{
//   takeInfo(searchboxInput.value);
//   searchboxInput.value='';
// })
// };
window.onload.takeInfo();