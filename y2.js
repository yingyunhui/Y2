/*
Y2, a beautiful lib for canvas.
code by yingyunhui, 2017.8.
*/
(function(window,undefined){
    var $=function(e){
        return new $.fn.init(e);
    }
    $.fn=$.prototype={
        init:function(e){
            ctx=document.getElementById(e).getContext("2d");
        },
        draw:function(p){
            switch(p.name){
                case "react":this.rect(p);break;
                case "text":this.text(p);break;
            }
            return this;
        },
        rect:function(p){
            var s=p.style;
            ctx.fillStyle=s.color;
            ctx.fillRect(s.left,s.top,s.width,s.height);
        },
        text:function(p){
            var s=p.style;
            ctx.font=s.font;
            ctx.fillStyle=s.color;
            ctx.fillText(p.data,s.left,s.top);
        }
    }
    $.fn.init.prototype=$.fn;
    window.Y2=window.y2=$;
})(window)