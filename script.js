const ById = (id,value) => {
    document.getElementById(id).innerHTML = value;
}


const typingTag = (data) => {
    const flagCountry = document.getElementById("CountryId");
    const iconTemp = document.getElementById("tempIcon");
    if(data.name){
        ById("city",data.name);
        ById("country",data.sys.country);
        ById("temp",Math.round(data.main.temp));
        flagCountry.src = `https://www.countryflags.io/${data.sys.country}/flat/64.png`
        iconTemp.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    } else{
        ById("city","");
        ById("country","");
        ById("temp","");
        flagCountry.src = "`https://www.countryflags.io/${data.sys.country}/flat/64.png`"
        iconTemp.src = ""
        ById('errorMessage', 'The requested URL/error was not found this server');
    }
}


const gettingWeather = () => {
    const inputValue  = document.getElementById("input").value;
    

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='; 
    // link take this addres https://openweathermap.org/
    const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57';

    if(inputValue) {
        ById("errorMessage","")
    
        fetch(`${API_URL}${inputValue}&appid=${API_KEY}&units=metric`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            typingTag(data)
        })
        .catch(error => {
            ById('errorMessage', 'The requested URL/error was not found this server');  
        })
    } else {
        ById("errorMessage","Please Enter The City Name")
    }
}


