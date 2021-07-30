// $("button").click(function(){
//     $("td").addClass("cancelled");
//   });

$(document).ready(function () {
    $("button").click(function () {
        // $(this).parent().parent().css({ "text-decoration": "line-through"});
        $(this).parent().parent('tr').addClass("cancelled");
    });
});