let googleMap;
let markers = [];
let wikipediaMarkers = [];
let currentCoordinates;
function initMap()
{
        let defaultCoord = {lat: 60.220859, lng: 24.805229};
        currentCoordinates = defaultCoord;
        googleMap = new google.maps.Map(
            document.getElementById('map'), 
            {
            zoom: 16,
            center: defaultCoord
            }
        );
        let marker = new google.maps.Marker(
          {
          position: defaultCoord,
          map: googleMap,
          });
        markers.push(marker);
}

document.getElementById('clearmarkers').addEventListener('click', clearMarkers);

function clearMarkers(array)
{
  array.forEach(deleteMarkers);
  array = [];
}

function deleteMarkers(item, index, arr)
{
  item.setMap(null);
}

initMap();