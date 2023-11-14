const locations = [
    {
      "id": 1,
      "name": "Biarritz",
      "country": "FR",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 3,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 4,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    },
    {
      "id": 2,
      "name": "Moscow",
      "country": "RU",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 3,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 4,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    },
    {
      "id": 3,
      "name": "London",
      "country": "UK",
      "days": [
        {
          "id": 1,
          "date": "Thu Nov 09 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 0,
          "humidity": 42,
          "wind": 3
        },
        {
          "id": 2,
          "date": "Thu Nov 10 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "cloudy",
          "temperature": 24,
          "precipitation": 5,
          "humidity": 64,
          "wind": 4
        },
        {
          "id": 3,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 4,
          "date": "Thu Nov 12 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "sunny",
          "temperature": 29,
          "precipitation": 4,
          "humidity": 60,
          "wind": 4
        }
      ]
    }
  ];


  // console.log(locations);

window.addEventListener('load', function() {
    const [currentLocation] = locations;
    const { name, country, days } = currentLocation;
    const [ firstDay ] = days;
    
    console.log(days.length);

  // console.log(days);
    const cityElement = document.getElementById('city');
    const countryElement = document.getElementById('country');
    const weekElement = document.getElementById('week');
    const precipitationElement = document.getElementById('first-percent');
    const humidityElement = document.getElementById('second-percent');
    const windElement = document.getElementById('WindPercent');
    const tempElement = document.getElementById('Temperature')
    const weatherElement = document.getElementById('WeatherEl')
    const dateElement = document.getElementById('dateEl')
    const weatherDateElement=document.getElementById('weatherDateElement')
    const daysContainer = this.document.querySelector('.right-block__weatherblock');
    console.log(days.length);

      // days.forEach((day, index) => {
      //   const { temperature, date } = day;
      //   const weekdayClassname = index !== 0 ? 'weatherblock__unit__week' : 'right-block__weatherblock__1st-unit';

      //   const weekDayEl = createDivElement(weekdayClassname, date);
      //   const tempDayEl = createDivElement('weatherblock__unit__temperature', temperature);
      //   const dayEl = createDivElement('right-block__weatherblock__unit');


      //   dayEl.append(weekDayEl);
      //   dayEl.append(tempDayEl);

      //   daysContainer.append(dayEl);
      // });



    const citySelectElement = this.document.getElementById('city-select');

    locations.forEach(location => {
      const option = document.createElement('option');
      option.innerText = `${location.name}, ${location.country}`;
      option.value = location.id;

      citySelectElement.appendChild(option);
    })

    console.log(citySelectElement.value);
    const newCity = locations.find(location => location.id = citySelectElement.value);
    
    if (cityElement) {
        cityElement.innerText = name;
    }
    if (countryElement) { 
        countryElement.innerText = country;
    }
    // if(weekElement) {
    //   let needday = Object.entries(days[0]);
    //   console.log(needday[6]);
    //   let needday1 = needday[6]
    //   console.log(needday1[1])


    //   weekElement.innerText = Object.values(days[2]);
    //   console.log(weekElement);
    // };
    if (weekElement){
      weekElement.innerText = weekChanger(firstDay.date.slice(0,3))
      console.log(firstDay.date.slice(0,3))
    }
    if (precipitationElement) {
      precipitationElement.innerText =  `${firstDay.precipitation} %`;
    }
    if (humidityElement){
      humidityElement.innerText = firstDay.humidity + ' %'
    }
    if (windElement) {
      windElement.innerText = firstDay.wind + ' km/h';
    }
    if (tempElement){
      tempElement.innerText = firstDay.temperature + '°C'
    }
    if (weatherElement){
      weatherElement.innerText=zaglav(firstDay.weather)
    }
    if (dateElement){
      dateElement.innerText = firstDay.date.slice(4,15)
    }


    const modalElement = this.document.getElementById('first'); 

    if (modalElement) {
      document.querySelectorAll('.js-open-modal').forEach(button => {
        button.addEventListener('click', () => {
          modalElement.classList.remove('closed');
        })
      });
    }
    if (modalElement){
      document.querySelectorAll('.js-close-modal').forEach(button => {
        button.addEventListener('click',()=>{
          modalElement.classList.add('closed');
        })
      })
    }
});

function zaglav(str) {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  console.log(capitalize(str));
  return(capitalize(str)) 
}

function weekChanger(str) {
  if (str=='Mon'){
    str=Monday
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
  else if (str=='Fry'){
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

// document.querySelector('left-block__location-place').innerHTML = '<span id="city"></span>, <span id="country"></span>'

// var closebutton = document.getElementById('btn-close'),
//   first = document.getElementById('first');
  

  // closebutton.addEventListener('click', function() {
  // first.classList.remove('opened');
  
  // });

// var openbutton = document.getElementById('btn'),
//   second = document.getElementById('first')
//   second.classList.add('opened')

function createDivElement(className, innerText) {
  const el = document.createElement('div');
  el.classList.add(className);

  if (innerText) {
    el.innerText = innerText
  }

  return el;
}