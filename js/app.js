/**
 * Created by onkar on 22-06-2018.
 */

var incrVar = 0;
$(document).ready(function () {
    $(document).bind('mousemove', function(e){
        $('#tail').css({
            left:  e.pageX ,
            top:   0
        });
    });

    $(document).bind('click', function(e){
        $("body").append("<div class='addedDiv' style='left:"+(e.pageX-10)+"px;top:0;padding-right:10px;margin-left:10px;' onclick='removeMe(this)'></div>");

    });

    for(var i=0;i<window.innerWidth/10;i++){
        var ruler1Str =   '<span class="numSection" num="'+(i*10)+'"  style="left:'+(incrVar)+'px;"></span>'+
            '<span class="minorSection" style="left:'+(incrVar+10)+'px;"></span>'+
            '<span class="majorSection"  style="left:'+(incrVar+20)+'px;"></span>'+
            '<span class="minorSection"  style="left:'+(incrVar+30)+'px;"></span>'+
            '<span class="majorSection"  style="left:'+(incrVar+40)+'px;"></span>'+
            '<span class="minorSection middle" num="'+(i)+'5" style="left:'+(incrVar+50)+'px;"></span>'+
            '<span class="majorSection"  style="left:'+(incrVar+60)+'px;"></span>'+
            '<span class="minorSection"  style="left:'+(incrVar+70)+'px;"></span>'+
            '<span class="majorSection"  style="left:'+(incrVar+80)+'px;"></span>'+
            '<span class="minorSection"  style="left:'+(incrVar+90)+'px;"></span>';
        $(".ruler").append("<span class="+(i+1)+">"+ruler1Str+"</span>");
        incrVar+=100;
    }
});
function removeMe(el){
    event.stopImmediatePropagation();
    el.parentNode.removeChild(el);
}