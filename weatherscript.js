//icon url = https://openweathermap.org/img/wn/{code)@2x,png
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=461f6df9424738ff257dd3ab2acbc1e1

const searchForm = document.querySelector('.formInput');
const searchInput = document.querySelector('.input');
const searchButton = document.querySelector('.button');
const tempValue = document.querySelector('.temp_value');
const tempDesc = document.querySelector('.tempDesc');
const stateVal = document.querySelector('.state');
const speedVal = document.querySelector('.speed');
const weatherImages = document.querySelectorAll('.weather_image')

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    //console.log(searchForm.value);
    const state = searchInput.value;
    getWeather(state);
    //console.log(searchInput.value);
    console.log('hello');

})

async function getWeather(state){
    console.log('we got')
    try{
        searchInput.value = " "
        //debugger
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${state}&APPID=461f6df9424738ff257dd3ab2acbc1e1`)
        //console.log('we are here)
        if(response.ok){
            //console.log(response.json())
            const data =  await response.json();
            //console.log('we got here')
            console.log(data);

            //get name from json data
            const names = data.name

            //get temp data from json
            const temp = data.main.temp
            console.log(temp)

            //get speed data from json
            // const speed = data.weather[0].wind.speed

            //get description from json
            const description = data.weather[0].description

            //get weather icon from json data
            const icon = data.weather[0].icon


            const stateValue = data.name

            const speedValue = data.wind.speed
            //Use a forEach to assign src attribute for image DOM
            weatherImages.forEach((img) =>{
                img.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
            })

            //Change the value of dummy temp value to json data value
            //tempValue.innerHTML = ((temp - 32) * (5/9)) + 'C'
            tempValue.innerHTML = (temp -273.15).toFixed(2) + 'C'
            //change the value of dummy description to json data value
            tempDesc.innerHTML = description


            stateVal.innerHTML = stateValue

            speedVal.innerHTML = speedValue
            //change dummy state text to json data value\
            //state.innerHTML = names

            console.log('we got here too')
            
            // weatherImages.forEach((img) =>{
            //     img.setAttribute("src", `images/happy.jpg`);
            // })

            //OR

            // for (let i = 0; i < weatherImages.length; i++){
            //     img.setAttribute("src", `http://openweathermap.org/img/wn/${(icon)}@2x.png`);
            // }
            

        }
        else{
            alert("Something Went Wrong")
        }
    }
    catch(e){
        console.log(e)
    }
}

//getWeather('lagos');