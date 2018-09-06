(function(d){d.fn.theiaStickySidebar=function(h){function k(c,f){if(!0===c.initialized)return!0;if(d("body").width()<c.minWidth)return!1;t(c,f);return!0}function t(c,f){c.initialized=!0;0===d("#theia-sticky-sidebar-stylesheet-"+c.namespace).length&&d("head").append(d('<style id="theia-sticky-sidebar-stylesheet-'+c.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));f.each(function(){function f(){a.fixedScrollTop=0;a.sidebar.css({"min-height":"1px"});a.stickySidebar.css({position:"static",
width:"",transform:"none"})}function h(b){var a=b.height();b.children().each(function(){a=Math.max(a,d(this).height())});return a}var a={};a.sidebar=d(this);a.options=c||{};a.container=d(a.options.containerSelector);0==a.container.length&&(a.container=a.sidebar.parent());a.sidebar.parents().css("-webkit-transform","none");a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});a.stickySidebar=
a.sidebar.find(".theiaStickySidebar");if(0==a.stickySidebar.length){var k=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(b,a){return 0===a.type.length||a.type.match(k)}).remove();a.stickySidebar=d("<div>").addClass("theiaStickySidebar").append(a.sidebar.children());a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom"));a.paddingTop=parseInt(a.sidebar.css("padding-top"));a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));
var p=a.stickySidebar.offset().top,q=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1);a.stickySidebar.css("padding-bottom",1);p-=a.stickySidebar.offset().top;q=a.stickySidebar.outerHeight()-q-p;0==p?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1;0==q?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1;a.previousScrollTop=null;a.fixedScrollTop=0;f();a.onScroll=function(b){if(b.stickySidebar.is(":visible"))if(d("body").width()<
b.options.minWidth)f();else if(b.options.disableOnResponsiveLayouts&&b.sidebar.outerWidth("none"==b.sidebar.css("float"))+50>b.container.width())f();else{var a=d(document).scrollTop(),l="static";if(a>=b.sidebar.offset().top+(b.paddingTop-b.options.additionalMarginTop)){var g=b.paddingTop+c.additionalMarginTop,k=b.paddingBottom+b.marginBottom+c.additionalMarginBottom,m=b.sidebar.offset().top,e=b.sidebar.offset().top+h(b.container);l=0+c.additionalMarginTop;g=b.stickySidebar.outerHeight()+g+k<d(window).height()?
l+b.stickySidebar.outerHeight():d(window).height()-b.marginBottom-b.paddingBottom-c.additionalMarginBottom;m=m-a+b.paddingTop;k=e-a-b.paddingBottom-b.marginBottom;e=b.stickySidebar.offset().top-a;var n=b.previousScrollTop-a;"fixed"==b.stickySidebar.css("position")&&"modern"==b.options.sidebarBehavior&&(e+=n);"stick-to-top"==b.options.sidebarBehavior&&(e=c.additionalMarginTop);"stick-to-bottom"==b.options.sidebarBehavior&&(e=g-b.stickySidebar.outerHeight());e=0<n?Math.min(e,l):Math.max(e,g-b.stickySidebar.outerHeight());
e=Math.max(e,m);e=Math.min(e,k-b.stickySidebar.outerHeight());l=(m=b.container.height()==b.stickySidebar.outerHeight())||e!=l?m||e!=g-b.stickySidebar.outerHeight()?a+e-b.sidebar.offset().top-b.paddingTop<=c.additionalMarginTop?"static":"absolute":"fixed":"fixed"}"fixed"==l?(g=d(document).scrollLeft(),b.stickySidebar.css({position:"fixed",width:r(b.stickySidebar)+"px",transform:"translateY("+e+"px)",left:b.sidebar.offset().left+parseInt(b.sidebar.css("padding-left"))-g+"px",top:"0px"})):"absolute"==
l?(g={},"absolute"!=b.stickySidebar.css("position")&&(g.position="absolute",g.transform="translateY("+(a+e-b.sidebar.offset().top-b.stickySidebarPaddingTop-b.stickySidebarPaddingBottom)+"px)",g.top="0px"),g.width=r(b.stickySidebar)+"px",g.left="",b.stickySidebar.css(g)):"static"==l&&f();"static"!=l&&1==b.options.updateSidebarHeight&&b.sidebar.css({"min-height":b.stickySidebar.outerHeight()+b.stickySidebar.offset().top-b.sidebar.offset().top+b.paddingBottom});b.previousScrollTop=a}};a.onScroll(a);
d(document).on("scroll."+a.options.namespace,function(a){return function(){a.onScroll(a)}}(a));d(window).on("resize."+a.options.namespace,function(a){return function(){a.stickySidebar.css({position:"static"});a.onScroll(a)}}(a));"undefined"!==typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(a){return function(){a.onScroll(a)}}(a))})}function r(c){try{var d=c[0].getBoundingClientRect().width}catch(n){}"undefined"===typeof d&&(d=c.width());return d}h=d.extend({containerSelector:"",
additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},h);h.additionalMarginTop=parseInt(h.additionalMarginTop)||0;h.additionalMarginBottom=parseInt(h.additionalMarginBottom)||0;(function(c,f){k(c,f)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),d(document).on("scroll."+c.namespace,function(c,f){return function(a){k(c,f)&&d(this).unbind(a)}}(c,
f)),d(window).on("resize."+c.namespace,function(c,f){return function(a){k(c,f)&&d(this).unbind(a)}}(c,f)))})(h,this);return this}})(jQuery);
var kieuthang = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    noThumbnail = "https://code.google.com/images/developers.png";
	
function t(b, a) {
        for (var c = 0; c < b[a].link.length; c++)
            if ("alternate" == b[a].link[c].rel) {
                var e = b[a].link[c].href;
                break
            } return e
    }
    function u(b, a) {
        var c = b[a].published.$t,
            e = c.substring(0, 4),
            d = c.substring(5, 7);
        c = c.substring(8, 10);
        return '<span class="post-date">' + (kieuthang[parseInt(d, 10) - 1] + " " + c + ", " + e) + "</span>"
    }

    function v(b, a) {
        var c = b[a].title.$t,
            e = b[a].content.$t;
        if ("media$thumbnail" in b[a]) {
            var d = b[a].media$thumbnail.url,
                k = d.replace("/s72-c", "/w680"),
                r = d.replace("/s72-c", "/w320"),
                f = d.replace("/s72-c",
                    "/w100"); - 1 < e.indexOf("youtube.com/embed") && (k = d.replace("/default.", "/hqdefault."), r = d.replace("/default.", "/mqdefault."), f = d)
        } else k = noThumbnail, r = noThumbnail.replace("/s680", "/w320"), f = noThumbnail.replace("/s680", "/w320");
        return ['<img class="post-thumb" alt="' + c + '" src="' + k + '"/>', '<img class="post-thumb" alt="' + c + '" src="' + r + '"/>', '<img class="post-thumb" alt="' + c + '" src="' + f + '"/>']
    }

    function w(b, a) {
        var c = b[a].content.$t;
        return '<p class="post-snippet">' + $("<div>").html(c).text().trim().substr(0,
            120) + "\u2026</p>"
    }

    function h(b, a, c, e) {
        if (a.match("mega-menu") || a.match("hot-posts") || a.match("feat-big") || a.match("col-left") || a.match("col-right") || a.match("grid-small") || a.match("grid-big") || a.match("feat-list") || a.match("post-list") || a.match("related")) {
            var d = "";
            "recent" == e ? d = "/feeds/posts/default?alt=json-in-script&max-results=" + c : "random" == e ? (d = Math.floor(Math.random() * c) + 1, d = "/feeds/posts/default?max-results=" + c + "&start-index=" + d + "&alt=json-in-script") : d = "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" +
                c;
            $.ajax({
                url: d,
                type: "get",
                dataType: "jsonp",
                beforeSend: function() {
                    a.match("hot-posts") && b.html('<div class="hot-loader"/>').parent().addClass("show-hot")
                },
                success: function(c) {
                    if (a.match("mega-menu")) var d = '<ul class="mega-menu-inner">';
                    else a.match("hot-posts") ? d = '<ul class="hot-posts">' : a.match("feat-big") ? d = '<ul class="feat-big">' : a.match("col-right") || a.match("col-left") ? d = '<ul class="feat-col">' : a.match("grid-small") ? d = '<ul class="grid-small">' : a.match("grid-big") ? d = '<ul class="grid-big">' : a.match("feat-list") ?
                        d = '<ul class="feat-list">' : a.match("post-list") ? d = '<ul class="custom-widget">' : a.match("related") && (d = '<ul class="related-posts">');
                    c = c.feed.entry;
                    if (void 0 != c) {
                        for (var f = 0; f < c.length; f++) {
                            var l = t(c, f),
                                m = '<a href="' + l + '">' + c[f].title.$t + "</a>",
                                n = v(c, f),
                                k = void 0 != c[f].category ? '<span class="post-tag">' + c[f].category[0].term + "</span>" : "",
                                h = '<span class="post-author">' + c[f].author[0].name.$t + " </span>",
                                p = u(c, f),
                                q = w(c, f),
                                g = "";
                            a.match("mega-menu") ? g += '<div class="mega-item item-' + f + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' +
                                l + '">' + n[1] + '</a></div><h2 class="post-title">' + m + '</h2><div class="post-meta">' + p + "</div></div></div>" : a.match("hot-posts") ? g = 0 == f ? g + ('<li class="hot-item item-' + f + '"><div class="hot-item-inner"><a class="post-image-link" href="' + l + '">' + n[0] + '</a><div class="post-info">' + k + '<h2 class="post-title">' + m + '</h2><div class="post-meta">' + h + p + "</div></div></div></li>") : g + ('<li class="hot-item item-' + f + '"><div class="hot-item-inner"><a class="post-image-link" href="' + l + '">' + n[0] + '</a><div class="post-info">' +
                                    k + '<h2 class="post-title">' + m + '</h2><div class="post-meta">' + p + "</div></div></div></li>") : a.match("feat-big") ? g = 0 == f ? g + ('<li class="feat-item item-big item-' + f + '"><div class="feat-inner"><a class="post-image-link" href="' + l + '">' + n[0] + "</a>" + k + '<div class="post-info"><h2 class="post-title">' + m + '</h2><div class="post-meta">' + h + p + "</div>" + q + "</div></div></li>") : g + ('<li class="feat-item item-small item-' + f + '"><a class="post-image-link" href="' + l + '">' + n[1] + '</a><div class="post-info"><h2 class="post-title">' +
                                    m + '</h2><div class="post-meta">' + p + "</div></div></li>") : a.match("col-left") || a.match("col-right") ? g = 0 == f ? g + ('<li class="feat-item item-big item-' + f + '"><div class="feat-inner"><a class="post-image-link" href="' + l + '">' + n[0] + "</a>" + k + '<div class="post-info"><h2 class="post-title">' + m + '</h2><div class="post-meta">' + h + p + "</div>" + q + "</div></div></li>") : g + ('<li class="feat-item item-small item-' + f + '"><a class="post-image-link" href="' + l + '">' + n[2] + '</a><div class="post-info"><h2 class="post-title">' + m + '</h2><div class="post-meta">' +
                                    p + "</div></div></li>") : a.match("grid-small") ? g += '<li class="feat-item item-small item-' + f + '"><a class="post-image-link" href="' + l + '">' + n[1] + '</a><div class="post-info"><h2 class="post-title">' + m + '</h2><div class="post-meta">' + p + "</div></div></li>" : a.match("grid-big") ? g += '<li class="feat-item item-big item-' + f + '"><div class="feat-inner"><a class="post-image-link" href="' + l + '">' + n[0] + "</a>" + k + '<div class="post-info"><h2 class="post-title">' + m + '</h2><div class="post-meta">' + h + p + "</div>" + q + "</div></div></li>" :
                                a.match("feat-list") ? g += '<li class="feat-item item-' + f + '"><div class="feat-inner"><a class="post-image-link" href="' + l + '">' + n[0] + "</a>" + k + '<div class="post-info"><h2 class="post-title">' + m + '</h2><div class="post-meta">' + h + p + "</div>" + q + "</div></div></li>" : a.match("post-list") ? g += '<li class="item-' + f + '"><a class="post-image-link" href="' + l + '">' + n[2] + '</a><h2 class="post-title">' + m + '</h2><div class="post-meta">' + p + "</div></div></li>" : a.match("related") && (g += '<li class="related-item item-' + f + '"><a class="post-image-link" href="' +
                                    l + '">' + n[1] + '</a><h2 class="post-title">' + m + '</h2><div class="post-meta">' + p + "</div></li>");
                            d += g
                        }
                        d += "</ul>"
                    } else d = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown-o"/></ul>';
                    if (a.match("mega-menu")) b.addClass("has-sub mega-menu").append(d), b.find("a:first").attr("href", function(a, b) {
                        return "recent" == e || "random" == e ? b.replace(b, "/search/?&max-results=" + 4) : b.replace(b, "/search/label/" + e + "?&max-results=" + 4)
                    });
                    else if (a.match("hot-posts")) b.html(d).parent().addClass("show-hot");
                    else if (a.match("feat-big") || a.match("feat-list") || a.match("col-left") || a.match("col-right") || a.match("grid-small") || a.match("grid-big")) {
                        b.parent().find(".widget-title").append('<a class="view-all" href="/search/label/' + e + "?&max-results=" + 4 + '">' + messages.viewAll + "</a>");
                        if (a.match("col-left") || a.match("col-right")) a.match("col-right") && b.parent().addClass("col-right"), b.parent().addClass("col-width");
                        b.html(d).parent().addClass("show-widget")
                    } else b.html(d)
                }
            })
        }
    }
    $("#main-menu").each(function() {
        for (var b =
                $(this).find(".LinkList ul > li").children("a"), a = b.length, c = 0; c < a; c++) {
            var e = b.eq(c),
                d = e.text();
            if ("_" !== d.charAt(0) && "_" === b.eq(c + 1).text().charAt(0)) {
                var k = e.parent();
                k.append('<ul class="sub-menu m-sub"/>')
            }
            "_" === d.charAt(0) && (e.text(d.replace("_", "")), e.parent().appendTo(k.children(".sub-menu")))
        }
        for (c = 0; c < a; c++) {
            e = b.eq(c);
            d = e.text();
            if ("_" !== d.charAt(0) && "_" === b.eq(c + 1).text().charAt(0)) {
                var h = e.parent();
                h.append('<ul class="sub-menu2 m-sub"/>')
            }
            "_" === d.charAt(0) && (e.text(d.replace("_", "")),
                e.parent().appendTo(h.children(".sub-menu2")))
        }
        $("#main-menu ul li ul").parent("li").addClass("has-sub");
        $("#main-menu .widget").addClass("show-menu")
    });
    $("#main-menu-nav").clone().appendTo(".mobile-menu");
    $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>');
    $(".mobile-menu ul > li a").each(function() {
        var b = $(this),
            a = b.attr("href").trim(),
            c = a.toLowerCase();
        a = a.split("/")[0];
        c.match("mega-menu") && b.attr("href", "/search/label/" + a + "?&max-results=" + 4)
    });
    $(".slide-menu-toggle").on("click",
        function() {
            $("body").toggleClass("nav-active");
            $(".overlay").fadeToggle(170)
        });
    $(".mobile-menu ul li .submenu-toggle").on("click", function(b) {
        $(this).parent().hasClass("has-sub") && (b.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
    });
    $(".show-search, .show-mobile-search").on("click", function() {
        $("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()
    });
    $(".hide-search, .hide-mobile-search").on("click", function() {
        $("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()
    });
    $(".Label a, a.b-label").attr("href", function(b, a) {
        return a.replace(a, a + "?&max-results=" + 4)
    });
    $(".avatar-image-container img").attr("src", function(b, a) {
        a = a.replace("/s35-c/", "/s45-c/");
        return a.replace("//img1.blogblog.com/img/blank.gif", "https://code.google.com/images/developers.png")
    });
    $(".index-post .post-image-link img").attr("src",
        function(b, a) {
            return a.replace("https://code.google.com/images/developers.png", noThumbnail)
        });
    $(".author-description a").each(function() {
        $(this).attr("target", "_blank")
    });
    $(".post-nav").each(function() {
        var b = $("a.prev-post-link").attr("href"),
            a = $("a.next-post-link").attr("href");
        $.ajax({
            url: b,
            type: "get",
            success: function(a) {
                a = $(a).find(".blog-post h1.post-title").text();
                $(".post-prev a .post-nav-inner p").text(a)
            }
        });
        $.ajax({
            url: a,
            type: "get",
            success: function(a) {
                a = $(a).find(".blog-post h1.post-title").text();
                $(".post-next a .post-nav-inner p").text(a)
            }
        })
    });
    $(".post-body strike").each(function() {
        var b = $(this),
            a = b.text();
        a.match("left-sidebar") && b.replaceWith("<style>.item #main-wrapper{float:right;padding:0 0 0 25px}.item #sidebar-wrapper{float:left}</style>");
        a.match("right-sidebar") && b.replaceWith("<style>.item #main-wrapper{float:left;padding:0 25px 0 0}.item #sidebar-wrapper{float:right}</style>");
        a.match("full-width") &&
            b.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}</style>")
    });
    $("#main-wrapper, #sidebar-wrapper").each(function() {
        1 == true && $(this).theiaStickySidebar({
            additionalMarginTop: 25,
            additionalMarginBottom: 25
        })
    });
    $("#main-menu #main-menu-nav li").each(function() {
        var b =
            $(this),
            a = b.find("a").attr("href").trim(),
            c = a.toLowerCase();
        a = a.split("/")[0];
        h(b, c, 4, a)
    });
    $("#hot-section .widget-content").each(function() {
        var b = $(this),
            a = b.text().trim(),
            c = a.toLowerCase();
        a = a.split("/")[0];
        h(b, c, 4, a)
    });
    $(".common-widget .widget-content").each(function() {
        var b = $(this),
            a = b.text().trim(),
            c = a.toLowerCase();
        a = a.split("/");
        h(b, c, a[0], a[1])
    });
    $(".related-ready").each(function() {
        var b = $(this),
            a = b.find(".related-tag").data("label");
        h(b, "related", 3, a)
    });
