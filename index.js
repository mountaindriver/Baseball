var nameEl = $('#name');
var positionEl = $("#position");
var pobEl = $('#pob');
var searchName = "";
var inputElement = $('#playerName');

inputElement.on("submit", function(event){
    event.preventDefault();
    debugger
    search(inputElement.val())
});

function search(playerName) {


    var url = `http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part=${playerName}%25`;


    fetch(url).then(function (response) {
        return response.json()
    }).then(function (data) {
        var row = data.search_player_all.queryResults.row
        if(row.length) {
            row -row[0]
        }
        console.log(row);
        nameEl.text(row.name_display_first_last);
        positionEl.text(row.position);
        var place = row.birth_country + ", " + row.birth_city
        pobEl.text(place);
        pobEl.attr('href', "https://www.google.com/maps/search/?api=1&query=" + place)
        // todo update the DOM!
    });

};
search(playerName);