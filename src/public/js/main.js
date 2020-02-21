const socket = io();

const map = L.map('leafletmap').setView([6.8996295, -76.16676939999999], 10);

const tile = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png');
tile.addTo(map);

const marker = L.marker([6.8096295, -76.16676939999999])
marker.addTo(map).bindPopup('Bykenog Desarrolladores!');

map.locate({enableHighAccuracy:true})//habilitar la localizacion

map.on('locationfound', (e)=>{
    // console.log(e)//sabemos nuetsra ubicacion
    socket.emit('userCoord', e.latlng);
});


socket.on('newUserCoords',(coord)=>{
    L.marker([coord.lat, coord.lng])
       .addTo(map)
       .bindPopup('You Are Here');
})
