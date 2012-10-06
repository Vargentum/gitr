// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

/*	
 *	CSSrefresh v1.0.1
 */
(function(){var a={array_filter:function(a,b){var c={};for(var d in a){if(b(a[d])){c[d]=a[d]}}return c},filemtime:function(a){var b=this.get_headers(a,1);return b&&b["Last-Modified"]&&Date.parse(b["Last-Modified"])/1e3||false},get_headers:function(a,b){var c=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;if(!c){throw new Error("XMLHttpRequest not supported.")}var d,e,f,g,h=0;try{c.open("HEAD",a,false);c.send(null);if(c.readyState<3){return false}d=c.getAllResponseHeaders();d=d.split("\n");d=this.array_filter(d,function(a){return a.toString().substring(1)!==""});e=b?{}:[];for(g in d){if(b){f=d[g].toString().split(":");e[f.splice(0,1)]=f.join(":").substring(1)}else{e[h++]=d[g]}}return e}catch(i){return false}}};var b=function(){this.reloadFile=function(b){for(var c=0,d=b.length;c<d;c++){var e=b[c],f=a.filemtime(this.getRandom(e.href));if(e.last){if(e.last!=f){e.elem.setAttribute("href",this.getRandom(this.getHref(e.elem)))}}e.last=f}setTimeout(function(){this.reloadFile(b)},1e3)};this.getHref=function(a){return a.getAttribute("href").split("?")[0]};this.getRandom=function(a){return a+"?x="+Math.random()};var b=document.getElementsByTagName("link"),c=[];for(var d=0,e=b.length;d<e;d++){var f=b[d],g=f.rel;if(typeof g!="string"||g.length==0||g=="stylesheet"){c.push({elem:f,href:this.getHref(f),last:false})}}this.reloadFile(c)};b()})()

$(function(){
    var buttons = { previous:$('#lofslidecontent45 .lof-next') ,
        next:$('#lofslidecontent45 .lof-previous') };

    $obj = $('#lofslidecontent45').lofJSidernews( { interval : 4000,
        direction		: 'opacitys',
        easing			: 'easeInOutExpo',
        duration		: 1200,
        auto		 	: false,
        maxItemDisplay  : 5,
        navPosition     : 'horizontal', // horizontal
        navigatorHeight : 100,
        navigatorWidth  : 164,
        mainWidth:746,
        buttons			: buttons} );
});

$(function(){
    var items = $('.tv__quality__item');
    $('.tv__quality__item').each(function(){
        $(this).click(function(){
//            for(var i=1; i>=items.length; i++){
//                if($(this).hasClass("'item-'+[i]")){
//                    $('#tv__quality__indicator').removeClass().addClass("'stage-'+[i]");
////                    return false;
//                }
//                else{return false;}
//            }
            if($(this).hasClass('item-1')){
                $('#tv__quality__indicator').removeClass().addClass('stage-1');
                return false;
            }
            else if($(this).hasClass('item-2')){
                $('#tv__quality__indicator').removeClass().addClass('stage-2');
                return false;
            }
            else if($(this).hasClass('item-3')){
                $('#tv__quality__indicator').removeClass().addClass('stage-3');
                return false;
            }
            else{return false;}
        });
    });
});
$('.tv__contols__volume').click(function(){
    // Пишем условие: если вложенный в див чекбокс отмечен
    if( $(this).find('input').is(':checked') ) {
        // то снимаем активность с дива
        $(this).removeClass('active');
        // и удаляем атрибут checked (делаем чекбокс не отмеченным)
        $(this).find('input').removeAttr('checked');
        // если же чекбокс не отмечен, то
    } else {
        // добавляем класс активности диву
        $(this).addClass('active');
        // добавляем атрибут checked чекбоксу
        $(this).find('input').attr('checked', true);
    }
});