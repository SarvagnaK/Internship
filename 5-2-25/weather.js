

const weatherform=document.querySelector(".weatherform");
const cityinput=document.querySelector(".cityinput");
const card=document.querySelector(".card");
const apikey="2335f7a1ddbd4c1c80a102228250502";

weatherform.addEventListener("submit",async event =>{
event.preventDefault();
const city=cityinput.value;
if(city)
{
 try{
const weatherdata=await getweatherdata(city);
displayweatherinfo(weatherdata);
 }
 catch(error)
 {
    console.log(error);
    displayerror(error);
 }
}
else{
    displayerror("please enter a city");
}
});
 
async function getweatherdata(city) {
    const apiurl=`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;
    const response=await fetch(apiurl);

    if(!response.ok){
        throw new Error("could not fetch weather data");

    }
    return await response.json();
}

function displayweatherinfo(data)
{


    console.log(data);
    

    card.textContent="";
    card.style.display="flex";

    const citydisplay=document.createElement("h1");
    const tempdisplay=document.createElement("p");
    const humiditydisplay=document.createElement("p");
    const descdisplay=document.createElement("p");
    const weatherIcon = document.createElement("img"); 


    citydisplay.textContent=`${data.location.name}`;
    tempdisplay.textContent=`${data.current.temp_c}°C`;
    humiditydisplay.textContent=`Humidity: ${data.current.humidity}%`
    descdisplay.textContent=`${data.current.condition.text}`;
    weatherIcon.src = `https:${data.current.condition.icon}`; 
    
    
    citydisplay.classList.add("citydisplay")
    tempdisplay.classList.add("tempdisplay");
    humiditydisplay.classList.add("humiditydisplay");
    descdisplay.classList.add("descdisplay");
    weatherIcon.classList.add("weatherIcon");

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay);
    card.appendChild(weatherIcon);
}
function displayerror(message) {
    const errordisplay=document.createElement("p");
    errordisplay.textContent=message;
    errordisplay.classList.add("errordisplay");
    card.textContent="";
    card.style.display="flex";
    card.appendChild(errordisplay);
}