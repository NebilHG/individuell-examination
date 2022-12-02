

const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api/';



async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    console.log('Key :',data);

    return data.key;
}




async function getPlanets() {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': key
        }
    });
    const data = await response.json();
    

   console.log('All planets data: ',data);


   renderPlanets(data)

 
}






async function renderPlanets(data){
    let planets = data;
     planets.forEach(planet => {
    
        console.log('Each planets data: ',planet);

        const articleTag = document.querySelector('#planets');
        const singlePlanet = document.createElement('article')
        singlePlanet.innerHTML = planet.id.display=''
        singlePlanet.setAttribute('class', 'planet')

        singlePlanet.setAttribute('id',`${planet.name}`);
            
       
        articleTag.append(singlePlanet)

       
        const info = document.createElement('h3');
       
        info.setAttribute('class','info');
        info.innerHTML = ( planet.name + ' <br> <br>'+'Latin:  '+ planet.latinName +' <br> <br> ' + planet.desc + ' <br> <br> ' +'Omkrets:  '+ planet.circumference+' KM'
        +' <br> <br> '+'KM från solen:  '+planet.distance +' KM'+ ' <br> <br> '+'°C Temperatur dag:  ' + planet.temp.day + '<br> <br> ' +' °C Temperatur natt:  ' + planet.temp.night +' <br> <br> '+ 'Månar:  ' +planet.moons )
        singlePlanet.appendChild(info)
        info.style.display = 'none'
        singlePlanet.addEventListener('click', ()=>{
            let clear = document.querySelector(".planets");
            clear.replaceChildren(info);

           if(info.style.display === 'block'){
                info.style.display = 'none'
            }
            else{
                info.style.display = 'block'
            }
        })        


        
       
       })
       
       
}






function reset(){
  
    document.getElementsByClassName('restart-button')
    window.location.reload("Refresh")
    
   }





getPlanets();








