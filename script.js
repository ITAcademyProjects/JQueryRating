function getAllVideos(itinerary) {
    $("#AD").removeClass("active");
    $("#FE").removeClass("active");
    $("#BE").removeClass("active");
    $("#" + itinerary).toggleClass("active");
    $.getJSON("http://localhost:8081/" + itinerary + "/videos", function (data) {
        $("#videos").empty();
        $.each(data, function (k, v) {
            $("#videos").append(createVideoElement(v["name"]));
        });
    });
}

function createVideoElement(name) {
    return "<li class='list-group-item'>" + name + "</li>";
}