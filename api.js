async function fetchData(){

    const response=await fetch("https://swapi.dev/api/planets/1/");
    const dataDiv=document.getElementById("showData")

    const data=await response.json()

    dataDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Rotation Period:</strong> ${data.rotation_period} hours</p>
            <p><strong>Orbital Period:</strong> ${data.orbital_period} days</p>
            <p><strong>Diameter:</strong> ${data.diameter} km</p>
            <p><strong>Climate:</strong> ${data.climate}</p>
            <p><strong>Gravity:</strong> ${data.gravity}</p>
            <p><strong>Terrain:</strong> ${data.terrain}</p>
            <p><strong>Surface Water:</strong> ${data.surface_water}</p>
            <p><strong>Population:</strong> ${data.population}</p>
            <p><strong>Residents:</strong> <a href="residents.html">Residents</a></p>
            <p><strong>Films:</strong> <a href="films.html">Films</a></p>
            <p><strong>Created:</strong> ${data.created} </p>
        <p><strong>Edited:</strong> ${data.edited} </p>
        <p><strong>Url:</strong> ${data.url} </p>


        `;


   

   
}