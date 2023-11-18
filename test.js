const result = await fetch('https://api.openweathermap.org/data/2.5/weather?id=479561&appid=8adf22bde9cee0ca13a5012d5a4ce2b6');
const data = await result.json();
console.log(data)