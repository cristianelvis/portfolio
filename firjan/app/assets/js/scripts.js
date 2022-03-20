$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navHide").addClass("navShow");
    } else {
        $(".navHide").removeClass("navShow");
    }
});
$(document).ready(function(){
    $("#head").load("../dashboard/_include_head.html");
    $("#sidebar").load("../dashboard/_include_sidebar.html");
    $("#footer").load("../dashboard/_include_footer.html");
    $("#modal").load("../dashboard/_include_modal.html");
    $("#dashboard").load("section_001.html");
    $("#mrh").load("section_001.html");
    $("#mrh-desligamento").load("section_001.html");
});

document.getElementById("login").onclick = function () {
    location.href = "dashboard/";
};