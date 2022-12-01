


let mapVar = L.map('map2').setView([-19.704684, -59.429373], 2.36);


L.tileLayer('https://api.mapbox.com/styles/v1/micaleiva1/clb1hq2p8000314mjjwoj5h2t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljYWxlaXZhMSIsImEiOiJjbGFsazYzazgwNjZhM29xYzg2djRpdWV0In0.mI9xq8pXSbYhFTvax_TOmA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mapVar);
