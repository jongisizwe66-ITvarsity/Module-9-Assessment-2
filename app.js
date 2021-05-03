
var cities =[
    {name:"Paris", utcOffset: 2, flag:"France.png"},
    {name:"Buenos Aires", utcOffset: -3, flag:"Argentina.png"},
    {name:"Singapore", utcOffset: 8, flag:"Singapore.png"},
    {name:"Stockholm", utcOffset: 2, flag:"Sweden.png"},
    {name:"Rome", utcOffset: 2, flag:"Italy.png"},
    {name:"Riyadh", utcOffset: 3, flag:"Saudi-Arabia.png"},
    {name:"Dubai", utcOffset: 4, flag:"United-Arab-Emirates.png"},
    {name:"Monaco", utcOffset: 2, flag:"Monaco.png"},
];

cities.sort(compare);

function compare(a,b){
     var cityA = a.name;
     var cityB = b.name;

     var comparison = 0;
     if(cityA > cityB){
         comparison = 1;
     }else if(cityA < cityB){
         comparison = -1;
     }

     return comparison;
}

function getUtcTime(){
    var dt = new Date();
    var utcOffset = dt.getTimezoneOffset() * 60000;
    var utcTime = new Date(dt.getTime() + utcOffset);

    return utcTime.getTime();
}

function getCurrentTime(utcOffset){
    var mil = 1000 * 60 * 60;
    var time = new Date(getUtcTime() + utcOffset * mil);
    return time.toLocaleTimeString();
}

function displayWorldTime(){
    var dt = new Date();
    document.getElementById("local").innerHTML = `Local Time : ${dt.toLocaleTimeString()}`;

    var table = `<table id="cities">`;
    table += `<tr> <th class="col1"></th> <th class="col2"></th> <th></th> </tr>`;

    for(let i = 0; i < cities.length; i++){
        table += `
                   <tr>
                     <td> <img src="images/${cities[i].flag}"> </td>
                     <td> ${cities[i].name} </td>
                     <td> ${getCurrentTime(cities[i].utcOffset)} </td>
                   </tr>
                  `;
    }

    table += `</table>`;

    document.getElementById("output").innerHTML = table;
}

setInterval(displayWorldTime, 1000);