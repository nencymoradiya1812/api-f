fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2b28bb266f296e03a510a79ef5fe48e9`)
.then((response)=>response.json())
.then(data=>console.log(data.main.temp));