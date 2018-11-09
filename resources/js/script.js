$(document).ready(function(){
    //home page animations
    $('.waypoint-features').waypoint(function(direction){
        $('.waypoint-features').addClass('animated slideInUp slow');
    },{
        offset: '95%'
    });

    $('.waypoint-shops').waypoint(function(direction){
        $('#pagratiShop').addClass('animated slideInLeft slower');
        $("#glyfadaShop").addClass("animated slideInRight slower");
    });

    $('.kartalos-img').mouseenter(function(){
        $('.kartalos-img').addClass("animated flip fast");
    });
    $('.kartalos-img').mouseleave(function () {
        $('.kartalos-img').removeClass("animated flip fast");
    });
    $('.riris-img').mouseenter(function () {
        $('.riris-img').addClass("animated flip fast");
    });
    $('.riris-img').mouseleave(function () {
        $('.riris-img').removeClass("animated flip fast");
    });
    $('.tasaras-img').mouseenter(function () {
        $('.tasaras-img').addClass("animated flip fast");
    });
    $('.tasaras-img').mouseleave(function () {
        $('.tasaras-img').removeClass("animated flip fast");
    });

    $(".waypoint-contact").waypoint(function(direction){
        $(".l-anime").addClass("animated rotateInUpLeft slow");
        $(".r-anime").addClass("animated rotateInUpRight slow");
    }, {offset: "90%"});
    
    //pagrati and glyfada pages animations
    $(".waypoint-menu").waypoint(function(direction){
        $(".waypoint-menu").addClass("animated slideInUp slow");
    },{offset: "90%"});
    $(".waypoint-chef").waypoint(function(direction){
        $("#chef-info").addClass("animated rotateIn delay-2s");
    },{offset: "50%"});

    $("#pagrati-location").waypoint(function(direction){
        $("#location-info").addClass("animated slideInRight slow")
    },{offset: "70%"});
    $("#glyfada-location").waypoint(function (direction) {
        $("#location-info").addClass("animated slideInLeft slow")
    },{ offset: "70%" });
});