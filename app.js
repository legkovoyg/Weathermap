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
          "id": 1,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 1,
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
          "id": 1,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 1,
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
          "id": 1,
          "date": "Thu Nov 11 2023 18:21:45 GMT+0500 (Yekaterinburg Standard Time)",
          "weather": "rainy",
          "temperature": 18,
          "precipitation": 10,
          "humidity": 80,
          "wind": 5
        },
        {
          "id": 1,
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


  console.log(locations);

window.addEventListener('load', function() {
    const [currentLocation] = locations;
    const { name, country, days } = currentLocation;
  console.log(days);
    const cityElement = document.getElementById('city');
    const countryElement = document.getElementById('country');
    const weekElement = document.getElementById('week');
    const precipitationElement = document.getElementById('first-percent');
    const humidityElement = document.getElementById('second-percent');
    const windElement = document.getElementById('WindPercent')
    if (cityElement) {
        cityElement.innerText = name;
    }
    if (countryElement) { 
        countryElement.innerText = country;
    }
    if(weekElement) {
      let needday = Object.entries(days[0]);
      console.log(needday[6]);
      let needday1 = needday[6]
      console.log(needday1[1])


      weekElement.innerText = Object.values(days[2]);
      console.log(weekElement);
    };
    if (precipitationElement) {
      let needday = Object.entries(days[0]);
      let needday1 = needday[4]
      precipitationElement.innerText = needday1[1];
    }
    if (humidityElement){
      let needday = Object.entries(days[0]);
      let needday1 = needday[5]
      humidityElement.innerText = needday1[1]
    }
    if (windElement) {
      let needday = Object.entries(days[0]);
      let needday1 = needday[6]
      
      windElement.innerText = needday1[1]
    }
});


// document.querySelector('left-block__location-place').innerHTML = '<span id="city"></span>, <span id="country"></span>'

var closebutton = document.getElementById('btn-close'),
  first = document.getElementById('first');
  

  closebutton.addEventListener('click', function() {
  first.classList.remove('opened');
  
  });

var openbutton = document.getElementById('btn'),
  second = document.getElementById('first')
  openbutton.addEventListener('click',function(){
  second.classList.add('opened')
});

