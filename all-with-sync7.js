//<![CDATA[
// News Ticker plugin ~ URL: http://jonmifsud.com/open-source/jquery/jquery-webticker
(function(e){function n(e,t){var s=e.data("settings");if(typeof t==="undefined")t=false;if(t){i(e)}var o=r(e);e.animate(o.css,o.time,"linear",function(){e.css(s.direction,"0");n(e,true)})}function r(e){var t=e.data("settings");var n=e.children().first();var r=Math.abs(-e.css(t.direction).replace("px","").replace("auto","0")-n.outerWidth(true));var t=e.data("settings");var i=r*1e3/t.speed;var s={};s[t.direction]=e.css(t.direction).replace("px","").replace("auto","0")-r;return{css:s,time:i}}function i(e){var t=e.data("settings");e.css("transition-duration","0s").css(t.direction,"0");var n=e.children().first();if(n.hasClass("webticker-init"))n.remove();else e.children().last().after(n)}function s(e,t){if(typeof t==="undefined")t=false;if(t){i(e)}var n=r(e);var s=n.time/1e3;s+="s";e.css(n.css).css("transition-duration",s)}function o(t,n,r){var i;e.get(t,function(t){var s=e(t);s.find("item").each(function(){var t=e(this),n={title:t.find("title").text(),link:t.find("link").text()};listItem="<li><a href='"+n.link+"'>"+n.title+"</a></li>";i+=listItem});r.webTicker("update",i,n)})}function u(t){var n=t.data("settings");t.width("auto");var r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});if(r<t.parent().width()||t.children().length==1){if(n.duplicate){itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get());while(r-itemWidth<t.parent().width()||t.children().length==1){var i=t.children().clone();t.append(i);r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get())}}else{var s=t.parent().width()-r;s+=t.find("li:first").width();var o=t.find("li:first").height();t.append('<li class="ticker-spacer" style="width:'+s+"px;height:"+o+'px;"></li>')}}if(n.startEmpty){var o=t.find("li:first").height();t.prepend('<li class="webticker-init" style="width:'+t.parent().width()+"px;height:"+o+'px;"></li>')}r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});t.width(r+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)});while(widthCompare>=t.width()){t.width(t.width()+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)})}}var t=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(e["transition"]=="")return true;while(t.length)if(t.pop()+"Transition"in e)return true;return false}();var a={init:function(r){r=jQuery.extend({speed:50,direction:"right",moving:true,startEmpty:true,duplicate:false,rssurl:false,hoverpause:true,rssfrequency:0,updatetype:"reset"},r);return this.each(function(){jQuery(this).data("settings",r);var i=jQuery(this);i.addClass("newsticker");var a=i.wrap("<div class='mask'></div>");a.after("<span class='tickeroverlay-right'>&nbsp;</span><span class='tickeroverlay-left'>&nbsp;</span>");var f=i.parent().wrap("<div class='tickercontainer'></div>");u(i);if(r.rssurl){o(r.rssurl,r.type,i);if(r.rssfrequency>0){window.setInterval(function(){o(r.rssurl,r.type,i)},r.rssfrequency*1e3*60)}}if(t){i.css("transition-duration","0s").css(r.direction,"0");s(i,false);i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){if(!i.is(t.target)){return false}s(e(this),true)})}else{n(e(this))}if(r.hoverpause){i.hover(function(){if(t){var n=e(this).css(r.direction);e(this).css("transition-duration","0s").css(r.direction,n)}else jQuery(this).stop()},function(){if(jQuery(this).data("settings").moving){if(t){s(e(this),false)}else{n(i)}}})}})},stop:function(){var n=e(this).data("settings");if(n.moving){n.moving=false;return this.each(function(){if(t){var r=e(this).css(n.direction);e(this).css("transition-duration","0s").css(n.direction,r)}else e(this).stop()})}},cont:function(){var r=e(this).data("settings");if(!r.moving){r.moving=true;return this.each(function(){if(t){s(e(this),false)}else{n(e(this))}})}},update:function(t,n,r,i){n=n||"reset";if(typeof r==="undefined")r=true;if(typeof i==="undefined")i=false;if(typeof t==="string"){t=e(t)}var s=e(this);s.webTicker("stop");var o=e(this).data("settings");if(n=="reset"){s.html(t);s.css(o.direction,"0");u(s)}else if(n=="swap"){s.children("li").addClass("old");for(var a=0;a<t.length;a++){id=e(t[a]).data("update");match=s.find('[data-update="'+id+'"]');if(match.length<1){if(r){if(s.find(".ticker-spacer:first-child").length==0&&s.find(".ticker-spacer").length>0){s.children("li.ticker-spacer").before(t[a])}else{s.append(t[a])}}}else s.find('[data-update="'+id+'"]').replaceWith(t[a]);}s.children("li.webticker-init, li.ticker-spacer").removeClass("old");if(i)s.children("li").remove(".old");stripWidth=0;s.children("li").each(function(){stripWidth+=e(this).outerWidth(true)});s.width(stripWidth+200)}s.webTicker("cont")}};e.fn.webTicker=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.webTicker")}}})(jQuery);
  
var _0xa772=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x64\x61\x74\x61\x2D\x6E\x6F","\x61\x74\x74\x72","\x73\x70\x61\x6E","\x66\x69\x6E\x64","","\x64\x61\x74\x61\x2D\x6C\x61\x62\x65\x6C","\x64\x61\x74\x61\x2D\x74\x79\x70\x65","\x72\x65\x63\x65\x6E\x74","\x6D\x61\x74\x63\x68","\x2F\x66\x65\x65\x64\x73\x2F\x70\x6F\x73\x74\x73\x2F\x64\x65\x66\x61\x75\x6C\x74\x3F\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74\x26\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D","\x67\x65\x74","\x6A\x73\x6F\x6E\x70","\x3C\x75\x6C\x3E","\x6C\x65\x6E\x67\x74\x68","\x65\x6E\x74\x72\x79","\x66\x65\x65\x64","\x6C\x69\x6E\x6B","\x61\x6C\x74\x65\x72\x6E\x61\x74\x65","\x72\x65\x6C","\x68\x72\x65\x66","\x24\x74","\x74\x69\x74\x6C\x65","\x74\x65\x72\x6D","\x63\x61\x74\x65\x67\x6F\x72\x79","\x63\x6F\x6E\x74\x65\x6E\x74","\x68\x74\x6D\x6C","\x3C\x64\x69\x76\x3E","\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F","\x69\x6E\x64\x65\x78\x4F\x66","\x2F\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x2F\x6D\x71\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x72\x65\x70\x6C\x61\x63\x65","\x75\x72\x6C","\x6D\x65\x64\x69\x61\x24\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x3C\x69\x6D\x67","\x73\x37\x32\x2D\x63","\x73\x31\x36\x30\x30","\x73\x72\x63","\x69\x6D\x67\x3A\x66\x69\x72\x73\x74","\x3C\x6C\x69\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x6B\x2D\x74\x68\x75\x6D\x62\x22\x3E\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x6B\x2D\x69\x6D\x67\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22\x74\x6B\x69\x6D\x67\x22\x20\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x75\x72\x6C\x28","\x29\x20\x6E\x6F\x2D\x72\x65\x70\x65\x61\x74\x20\x63\x65\x6E\x74\x65\x72\x20\x63\x65\x6E\x74\x65\x72\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x73\x69\x7A\x65\x3A\x20\x63\x6F\x76\x65\x72\x22\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x79\x69\x6D\x67\x2D\x6C\x61\x79\x22\x2F\x3E\x3C\x2F\x61\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x2F\x73\x65\x61\x72\x63\x68\x2F\x6C\x61\x62\x65\x6C\x2F","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x6F\x73\x74\x2D\x74\x61\x67\x20\x69\x63\x6F\x6E\x20","\x22\x3E","\x3C\x2F\x61\x3E\x3C\x68\x33\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x79\x61\x72\x64\x2D\x74\x69\x74\x6C\x65\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x2F\x61\x3E\x3C\x2F\x68\x33\x3E\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x75\x6C\x3E","\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x77\x72\x61\x70\x49\x6E\x6E\x65\x72","\x68\x32","\x70\x72\x65\x76","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x66\x69\x72\x65\x22\x3E\x3C\x2F\x69\x3E","\x70\x72\x65\x70\x65\x6E\x64","\x77\x65\x62\x54\x69\x63\x6B\x65\x72","\x75\x6C","\x65\x61\x63\x68","\x2E\x74\x69\x63\x6B\x65\x72\x20\x2E\x77\x69\x64\x67\x65\x74\x2D\x63\x6F\x6E\x74\x65\x6E\x74","\x61\x6A\x61\x78","\x6C\x61\x62\x65\x6C","\x2F\x66\x65\x65\x64\x73\x2F\x70\x6F\x73\x74\x73\x2F\x64\x65\x66\x61\x75\x6C\x74\x2F\x2D\x2F","\x3F\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74\x26\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D","\x2E\x74\x69\x63\x6B\x65\x72\x20\x2E\x48\x54\x4D\x4C\x20\x2E\x77\x69\x64\x67\x65\x74\x2D\x63\x6F\x6E\x74\x65\x6E\x74"];_0xa772[0];var _0x26b0=[_0xa772[1],_0xa772[2],_0xa772[3],_0xa772[4],_0xa772[5],_0xa772[6],_0xa772[7],_0xa772[8],_0xa772[9],_0xa772[10],_0xa772[11],_0xa772[12],_0xa772[13],_0xa772[14],_0xa772[15],_0xa772[16],_0xa772[17],_0xa772[18],_0xa772[19],_0xa772[20],_0xa772[21],_0xa772[22],_0xa772[23],_0xa772[24],_0xa772[25],_0xa772[26],_0xa772[27],_0xa772[28],_0xa772[29],_0xa772[30],_0xa772[31],_0xa772[32],_0xa772[33],_0xa772[34],_0xa772[35],_0xa772[36],_0xa772[37],_0xa772[38],_0xa772[39],_0xa772[40],_0xa772[41],_0xa772[42],_0xa772[43],_0xa772[44],_0xa772[45],_0xa772[46],_0xa772[47],_0xa772[48],_0xa772[49],_0xa772[50],_0xa772[51],_0xa772[52],_0xa772[53],_0xa772[54],_0xa772[55],_0xa772[56],_0xa772[57],_0xa772[58],_0xa772[59],_0xa772[60],_0xa772[61],_0xa772[62]];var _0xb9cb=[_0x26b0[0],_0x26b0[1],_0x26b0[2],_0x26b0[3],_0x26b0[4],_0x26b0[5],_0x26b0[6],_0x26b0[7],_0x26b0[8],_0x26b0[9],_0x26b0[10],_0x26b0[11],_0x26b0[12],_0x26b0[13],_0x26b0[14],_0x26b0[15],_0x26b0[16],_0x26b0[17],_0x26b0[18],_0x26b0[19],_0x26b0[20],_0x26b0[21],_0x26b0[22],_0x26b0[23],_0x26b0[24],_0x26b0[25],_0x26b0[26],_0x26b0[27],_0x26b0[28],_0x26b0[29],_0x26b0[30],_0x26b0[31],_0x26b0[32],_0x26b0[33],_0x26b0[34],_0x26b0[35],_0x26b0[36],_0x26b0[37],_0x26b0[38],_0x26b0[39],_0x26b0[40],_0x26b0[41],_0x26b0[42],_0x26b0[43],_0x26b0[44],_0x26b0[45],_0x26b0[46],_0x26b0[47],_0x26b0[48],_0x26b0[49],_0x26b0[50],_0x26b0[51],_0x26b0[52],_0x26b0[53],_0x26b0[54],_0x26b0[55],_0x26b0[56],_0x26b0[57],_0x26b0[58],_0x26b0[59],_0x26b0[60],_0x26b0[61]];var _0xd6ef=[_0xb9cb[0],_0xb9cb[1],_0xb9cb[2],_0xb9cb[3],_0xb9cb[4],_0xb9cb[5],_0xb9cb[6],_0xb9cb[7],_0xb9cb[8],_0xb9cb[9],_0xb9cb[10],_0xb9cb[11],_0xb9cb[12],_0xb9cb[13],_0xb9cb[14],_0xb9cb[15],_0xb9cb[16],_0xb9cb[17],_0xb9cb[18],_0xb9cb[19],_0xb9cb[20],_0xb9cb[21],_0xb9cb[22],_0xb9cb[23],_0xb9cb[24],_0xb9cb[25],_0xb9cb[26],_0xb9cb[27],_0xb9cb[28],_0xb9cb[29],_0xb9cb[30],_0xb9cb[31],_0xb9cb[32],_0xb9cb[33],_0xb9cb[34],_0xb9cb[35],_0xb9cb[36],_0xb9cb[37],_0xb9cb[38],_0xb9cb[39],_0xb9cb[40],_0xb9cb[41],_0xb9cb[42],_0xb9cb[43],_0xb9cb[44],_0xb9cb[45],_0xb9cb[46],_0xb9cb[47],_0xb9cb[48],_0xb9cb[49],_0xb9cb[50],_0xb9cb[51],_0xb9cb[52],_0xb9cb[53],_0xb9cb[54],_0xb9cb[55],_0xb9cb[56],_0xb9cb[57],_0xb9cb[58],_0xb9cb[59],_0xb9cb[60],_0xb9cb[61]];$(_0xd6ef[61])[_0xd6ef[55]](function(){var _0x81e4x4=$(this)[_0xd6ef[3]](_0xd6ef[2])[_0xd6ef[1]](_0xd6ef[0])|| _0xd6ef[4];var _0x81e4x5=$(this)[_0xd6ef[3]](_0xd6ef[2])[_0xd6ef[1]](_0xd6ef[5])|| _0xd6ef[4];var _0x81e4x6=$(this)[_0xd6ef[3]](_0xd6ef[2])[_0xd6ef[1]](_0xd6ef[6])|| _0xd6ef[4];if(_0x81e4x6!= void(0)&& _0x81e4x6[_0xd6ef[8]](_0xd6ef[7])){$[_0xd6ef[57]]({url:_0xd6ef[9]+ _0x81e4x4,type:_0xd6ef[10],dataType:_0xd6ef[11],success:function _0x81e4x7(_0x81e4x8){var _0x81e4x9=_0xd6ef[4];var _0x81e4xa=_0xd6ef[12];var _0x81e4xb=0;for(;_0x81e4xb< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0xd6ef[13]];_0x81e4xb++){var _0x81e4xc=0;for(;_0x81e4xc< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0xd6ef[13]];_0x81e4xc++){if(_0xd6ef[17]== _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[18]]){_0x81e4x9= _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[19]];break}};var _0x81e4xd=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[21]][_0xd6ef[20]];var _0x81e4xe=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[23]][0][_0xd6ef[22]];var _0x81e4xf=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[24]][_0xd6ef[20]];var _0x81e4x10=$(_0xd6ef[26])[_0xd6ef[25]](_0x81e4xf);if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[27])){var _0x81e4x11=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[33]][_0xd6ef[32]][_0xd6ef[31]](_0xd6ef[29],_0xd6ef[30]);var _0x81e4x12=_0x81e4x11}else {if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[34])){var _0x81e4x13=_0x81e4x10[_0xd6ef[3]](_0xd6ef[38])[_0xd6ef[1]](_0xd6ef[37])[_0xd6ef[31]](_0xd6ef[35],_0xd6ef[36]);_0x81e4x12= _0x81e4x13}else {_0x81e4x12= no_image}};_0x81e4xa= _0x81e4xa+ (_0xd6ef[39]+ _0x81e4x9+ _0xd6ef[40]+ _0x81e4x12+ _0xd6ef[41]+ _0x81e4xe+ _0xd6ef[42]+ _0x81e4xe+ _0xd6ef[43]+ _0x81e4xe+ _0xd6ef[44]+ _0x81e4x9+ _0xd6ef[43]+ _0x81e4xd+ _0xd6ef[45])};_0x81e4xa= _0x81e4xa+ _0xd6ef[46];$(_0xd6ef[56])[_0xd6ef[55]](function(){$(this)[_0xd6ef[25]](_0x81e4xa);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[48]](_0xd6ef[47]);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[52]](_0xd6ef[51]);$(this)[_0xd6ef[3]](_0xd6ef[54])[_0xd6ef[53]]()})}})}else {if(_0x81e4x6!= void(0)&& _0x81e4x6[_0xd6ef[8]](_0xd6ef[58])){$[_0xd6ef[57]]({url:_0xd6ef[59]+ _0x81e4x5+ _0xd6ef[60]+ _0x81e4x4,type:_0xd6ef[10],dataType:_0xd6ef[11],success:function _0x81e4x7(_0x81e4x8){var _0x81e4x9=_0xd6ef[4];var _0x81e4xa=_0xd6ef[12];var _0x81e4xb=0;for(;_0x81e4xb< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0xd6ef[13]];_0x81e4xb++){var _0x81e4xc=0;for(;_0x81e4xc< _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0xd6ef[13]];_0x81e4xc++){if(_0xd6ef[17]== _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[18]]){_0x81e4x9= _0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[16]][_0x81e4xc][_0xd6ef[19]];break}};var _0x81e4xd=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[21]][_0xd6ef[20]];var _0x81e4xe=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[23]][0][_0xd6ef[22]];var _0x81e4xf=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[24]][_0xd6ef[20]];var _0x81e4x10=$(_0xd6ef[26])[_0xd6ef[25]](_0x81e4xf);if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[27])){var _0x81e4x11=_0x81e4x8[_0xd6ef[15]][_0xd6ef[14]][_0x81e4xb][_0xd6ef[33]][_0xd6ef[32]][_0xd6ef[31]](_0xd6ef[29],_0xd6ef[30]);var _0x81e4x12=_0x81e4x11}else {if(-1< _0x81e4xf[_0xd6ef[28]](_0xd6ef[34])){var _0x81e4x13=_0x81e4x10[_0xd6ef[3]](_0xd6ef[38])[_0xd6ef[1]](_0xd6ef[37])[_0xd6ef[31]](_0xd6ef[35],_0xd6ef[36]);_0x81e4x12= _0x81e4x13}else {_0x81e4x12= no_image}};_0x81e4xa= _0x81e4xa+ (_0xd6ef[39]+ _0x81e4x9+ _0xd6ef[40]+ _0x81e4x12+ _0xd6ef[41]+ _0x81e4xe+ _0xd6ef[42]+ _0x81e4xe+ _0xd6ef[43]+ _0x81e4xe+ _0xd6ef[44]+ _0x81e4x9+ _0xd6ef[43]+ _0x81e4xd+ _0xd6ef[45])};_0x81e4xa= _0x81e4xa+ _0xd6ef[46];$(_0xd6ef[61])[_0xd6ef[55]](function(){$(this)[_0xd6ef[25]](_0x81e4xa);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[48]](_0xd6ef[47]);$(this)[_0xd6ef[50]](_0xd6ef[49])[_0xd6ef[52]](_0xd6ef[51]);$(this)[_0xd6ef[3]](_0xd6ef[54])[_0xd6ef[53]]()})}})}}})
    
var no_image = "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png";
var month_format = [, "كانون2", "شباط", "آذار", "نيسان", "آيار", "حزيران", "تموز", "آب", "أيلول", "تشرين1", "تشرين2", "كانون1"];
var more_text = "View More";
var comments_text = "<span>Post </span>Comment";
var POSTPAGER_OLDER = "السابق <i class='fa fa-hand-o-left'></i>"; // post nav text "previous post"
var POSTPAGER_NEWER = "<i class='fa fa-hand-o-right'></i> التالي"; // post nav text "next post"
  
function nocontext(e) {
        var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
        if (clickedTag == "IMG") {
            return false;
        }
    }
    var alertMsg = "يمنع منعا باتا نسخ الصور";
    document.oncontextmenu = nocontext;
  
var divOfPosts = ".grid-post-home",
    do7a = !0;
$("#btn-7a").click(function(a) {
    if (a.preventDefault(), 1 == do7a) {
        let a = $(this).attr("data-url");
        $(this).hide(), $("#loader-7a").show(), $.ajax({
            url: a,
            success: function(a) {
                let t = $(a).find("#Blog1 " + divOfPosts).html(),
                    o = $(a).find("#btn-7a").attr("data-url");
                $("#Blog1 " + divOfPosts).append(t), o.length > 1 ? $("#btn-7a").attr("data-url", o) : ($("#btn-7a").html("لا يوجد المزيد"), do7a = !1, $("#btn-7a").css("background-color", "#aaa"))
            },
            complete: function() {
                $("#loader-7a").hide(), $("#btn-7a").fadeIn()
            }
        })
    }
});

/* Night Mode/Dark Mode Feature - By cena1web.com */    
$(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#cenaweb").on("click",function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode",$(".section-center").css("display","block")):($("body").toggleClass("nightmode",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("nightmode")?$("#cenaweb").prop("checked",!0):$("#cenaweb").prop("checked",!1)});  

$(".link-lightbox").on("click",function(){var i;540<window.innerHeight&&(i=(window.innerHeight-540)/2);var o='<div class="lightbox" style="margin-top:'+i+'px">',e="</div></div></div></div>";$("body").append('<div id="window"><div id="background-close"></div><div id="back-lightbox">'+o+'<div id="close-icon"></div><iframe src="" width="640" height="480" id="video-embed" style="border:0;"></iframe><div id="ref"><a href="//www.arabes1.com/2018/03/jquery-on-click-pop-up-light-box-video.html" rel="nofollow" target="_blank">مطورة بواسطة: سينا ويب</a>'+e),$("#window").hide(),"youtube"==$(this).data("videosite")?e="https://www.youtube.com/embed/"+$(this).data("videoid")+"?autoplay=1":"vimeo"==$(this).data("videosite")&&(e="https://player.vimeo.com/video/"+$(this).data("videoid")+"?autoplay=1"),$("#window").fadeIn(),$("#video-embed").attr("src",e),$("#close-icon").on("click",function(){$("#window").fadeOut(1e3,function(){$(this).remove()})}),$("#background-close").on("click",function(){$("#window").fadeOut(1e3,function(){$(this).remove()})})}),$(document).on("keyup",function(i){27==i.keyCode&&$("#window").fadeOut(1e3,function(){$(this).remove()})}),$(document).on("mouseover",function(){var i=(window.innerHeight-540)/2;$(".lightbox").attr("style","margin-top:"+i+"px")});

/* code for navimenufixed */  
$(function() {
  var navigasi = $(".navi-menu-wrap").offset().top;

  var sticky = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > navigasi) {
      $(".navi-menu-wrap").addClass("fixed");
      $(".navi-menu-wrap").css("top", "0");
    } else {
      $(".navi-menu-wrap").removeClass("fixed");
      $(".navi-menu-wrap").css("top", "-50px");
    }
  };

  sticky();

  $(window).scroll(function() {
    sticky();
  });
});

/* code for open and close mobile side menu */
var openNavButton = document.querySelector(".open-nav");
var closeNavButton = document.querySelector(".closebtn");
var sideNav = document.querySelector("#mySidenav");
var posTT = document.querySelector(".pos-t-t");

// إضافة مستمع للنقر على زر فتح القائمة
openNavButton.addEventListener("click", function() {
  sideNav.classList.add("open");
  posTT.style.display = "block";
});

// إضافة مستمع للنقر على زر إغلاق القائمة
closeNavButton.addEventListener("click", function() {
  sideNav.classList.remove("open");
  posTT.style.display = "none";
}); 

// إضافة مستمع للنقر على posTT
posTT.addEventListener("click", function(event) {
  event.stopPropagation(); // منع انتشار الحدث
  sideNav.classList.remove("open");
  posTT.style.display = "none";
});

/* code for drop submenu in mobile side menu */
function openDropdown() {
  var submenu = document.getElementById('submenu');
  var arrow = document.querySelector('.menu1 > a > .fa');
  
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'block';
  }
  
  arrow.classList.toggle('rotated');
}

function openDropdown2() {
  var submenu2 = document.getElementById('submenu2');
  var arrow = document.querySelector('.menu2 > a > .fa');
  
  if (submenu2.style.display === 'block') {
    submenu2.style.display = 'none';
  } else {
    submenu2.style.display = 'block';
  }
  
  arrow.classList.toggle('rotated');
}

/* code for search box */
$(".btn").click(function(){
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});
//]]>
