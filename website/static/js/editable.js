$(document).ready(function(){
    $(".section111").fadeTo(0,0);
    $(".section12").hide()
    $(".section11").mouseenter(function(){
        $(".section111").fadeTo(0,1);
    });
    $(".section11").mouseleave(function(){
        $(".section111").fadeTo(0,0);
    });
    $(".section111").click(function(){
        $(".section11").hide(250)
        $(".section12").show(250)
    });
    $(".cancel1").click(function(){
        $(".section11").show(500)
        $(".section12").hide(500)
    });

    $(".section211").fadeTo(0,0);
    $(".section22").hide()
    $(".section21").mouseenter(function(){
        $(".section211").fadeTo(0,1);
    });
    $(".section21").mouseleave(function(){
        $(".section211").fadeTo(0,0);
    });
    $(".section211").click(function(){
        $(".section21").hide(250)
        $(".section22").show(250)
    });
    $(".cancel2").click(function(){
        $(".section21").show(100)
        $(".section22").hide(250)
    });

    $(".section311").fadeTo(0,0);
    $(".section32").hide()
    $(".section31").mouseenter(function(){
        $(".section311").fadeTo(0,1);
    });
    $(".section31").mouseleave(function(){
        $(".section311").fadeTo(0,0);
    });
    $(".section311").click(function(){
        $(".section31").hide(250)
        $(".section32").show(250)
    });
    $(".cancel3").click(function(){
        $(".section31").show(500)
        $(".section32").hide(500)
    });

});
