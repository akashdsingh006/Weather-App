const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a0af893a6msh3b1cb2c331d437fp10f211jsnf15b9bb5f502',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

var getWeather= (city)=>
{
    cityName.innerHTML=city.toUpperCase();
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        //wind_degree.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
        
    })
    .catch(err => console.error(err));
}
    submit.addEventListener("click",(e)=>
    {
        e.preventDefault();
        getWeather(city.value)
    })

    getWeather("Kolkata")


    myWeather=(myCity,x)=>
    {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +myCity, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        
        document.getElementsByClassName("cloud")[x].innerHTML = response.cloud_pct;
        document.getElementsByClassName("temp")[x].innerHTML = response.temp;
        document.getElementsByClassName("feels")[x].innerHTML = response.feels_like;
        document.getElementsByClassName("humidity")[x].innerHTML = response.humidity;
        document.getElementsByClassName("min")[x].innerHTML = response.min_temp;
        document.getElementsByClassName("max")[x].innerHTML = response.max_temp;
        document.getElementsByClassName("wind_speed")[x].innerHTML = response.wind_speed;
        document.getElementsByClassName("wind_degree")[x].innerHTML = response.wind_degrees;
        document.getElementsByClassName("sunrise")[x].innerHTML = response.sunrise;
        document.getElementsByClassName("sunset")[x].innerHTML = response.sunset;
        
    })
    .catch(err => console.error(err));
    }

  var cities=["Delhi","London","Tokyo","Dubai","Sydney"]
    for(var x=0;x<cities.length;x++)
    {
        if(cities[x]==="Delhi")
        {
            myWeather(cities[x],x)
        }
        else if(cities[x]==="London")
        {
            myWeather("London",x)
        }
        else if(cities[x]==="Tokyo")
        {
            myWeather(cities[x],x)
        }
        else if(cities[x]==="Dubai")
        {
            myWeather(cities[x],x)
        }
        else if(cities[x]==="Sydney")
        {
            myWeather(cities[x],x)
        }
    }
    

    