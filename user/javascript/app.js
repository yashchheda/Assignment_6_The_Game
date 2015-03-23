$(document).ready(function fetchGameResult(data) {

    $.ajax({
        url: "/outcome",
        dataType: "json",
        type: "POST",
        success: function(data) {
            $("#outcome").append(data);
            $("#outcome").empty();
            $("#outcome").append("<h3> Outcome: " + data.outcome + "</h3>");
            $("#outcome").append("<h4>Wins:" + data.wins + " &nbsp;&nbsp;  Losses:" +
                data.losses + "&nbsp;&nbsp;  Ties:" + data.ties + "</h4>");
        }
    });

    $(".btnchoice").on("click", function(event) {
        if ($(this).val() != " ") {
            var id = $(this).val();
            $.ajax({
                url: "/play/" + id,
                dataType: "json",
                type: "POST",
                success: function(data) {
                    $("#outcome").append(data);
                    var classname;
                    $("#outcome").attr("class", "");
                    if (data.outcome === 'Win') classname = "win";
                    if (data.outcome === 'Lose') classname = "lose";
                    if (data.outcome === 'Tie') classname = "tie";
                    $("#outcome").addClass(classname);
                    $("#outcome").empty();
                    $("#outcome").append("<h3> Outcome: " + data.outcome + "</h3>");
                    $("#outcome").append("<h4>Wins:" + data.wins + " &nbsp;&nbsp;  Losses:" +
                        data.losses + "&nbsp;&nbsp;  Ties:" + data.ties + "</h4>");
                }
            });

        }

    });
});