let country = {
    fetchData: function(name){
        document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x1900/?"+name+"&skyline)"
        fetch(
            `https://restcountries.com/v2/name/${name}` 
        )
        .then((response) => response.json())
        .then((data)=>this.displayCountry(data))
    },
    displayCountry(data){
        document.querySelector("#name").innerHTML = data[0].name;
        document.querySelector("#flag").src = data[0].flags.svg;
        document.querySelector("#region").innerHTML = "Region: "+data[0].region;
        document.querySelector('#capital').innerHTML = "Capital: "+data[0].capital;
        document.querySelector("#population").innerHTML = "Population: "+ formatData(data[0].population) + " People"; 
        document.querySelector("#currency").innerHTML = "Currency: "+data[0].currencies[0].name + " (" + data[0].currencies[0].symbol+")";
        document.querySelector("#area").innerHTML = "Area: " + formatData(data[0].area) + " m&sup2";
    },
    search: function(){
        this.fetchData(document.querySelector("#search-bar").value);
        document.getElementById("search-bar").value='';
    },
};

function formatData(data){
    return (data).toLocaleString('en-US');

}

window.onload = country.fetchData("Germany");

document.querySelector("#search-bar").addEventListener("keyup", function (event){
    if(event.key=="Enter"){
        country.search();
    }
});
