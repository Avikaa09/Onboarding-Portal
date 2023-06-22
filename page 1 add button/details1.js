document.getElementById("back").onclick = function () {
    location.href = "dashboard.html";}

    document.getElementById("next1").onclick = function () {
        location.href = "details2.html";}

// maps part
let autocomplete;
function initAutocomplete(){
    autocomplete = new google.mps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['establishment'],
            componentRestrictions : {'country' : ['IN']},
            fields : ['place_id', 'geometry', 'name']
        }
    );
autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged(){
    var place = autocomplete.getPlace();

    if (!place.geometry){
        document.getElementById('autocomplete').placeholder=
        'enter a place';

    }
    else{
        document.getElementById('details').innerHTML = place.name;
    }
}
    
