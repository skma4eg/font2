<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'/>
<b:include data='blog' name='all-head-content'/>
<!--Meta Tag SEO-->
<meta content='index, follow, noodp, noydir' name='robots'/>
<meta content='id' name='geo.country'/>
<meta content='xxxxx' name='author'/>
<meta content='1 days' name='revisit-after'/>
<meta content='Indonesia' name='geo.placename'/>
<meta content='blogger' name='generator'/>
<meta content='general' name='rating'/>
<meta content='index, follow, snipet' name='googlebot'/>
<b:if cond='data:blog.pageType == &quot;index&quot;'>
 <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
 <meta content='article' property='og:type'/>
 <meta expr:content='data:blog.title' property='og:site_name'/>
 <meta content='id_id' property='og:locale'/>
 <meta expr:content='data:blog.pageTitle' property='og:title'/>
 <meta expr:content='data:blog.metaDescription' property='og:description'/>
 <meta expr:content='data:blog.postImageThumbnailUrl' property='og:image'/>
 <title><data:blog.pageTitle/></title>
 <meta content='Template Blogger Material Design' name='keywords'/>
</b:if>
<b:if cond='data:blog.pageType != &quot;index&quot;'>
 <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
 <meta content='article' property='og:type'/>
 <meta expr:content='data:blog.title' property='og:site_name'/>
 <meta content='id_id' property='og:locale'/>
 <meta expr:content='data:blog.pageName' property='og:title'/>
 <meta expr:content='data:blog.metaDescription' property='og:description'/>
 <b:if cond='data:blog.postImageThumbnailUrl'>
  <meta expr:content='data:blog.postImageThumbnailUrl' property='og:image'/>
 </b:if>
 <title><data:blog.pageName/> - <data:blog.title/></title>
 <meta expr:content='data:blog.pageName' name='keywords'/>
</b:if>
<b:skin><![CDATA[/*
----------------------------------------
Blogger Template Style
Name       : Material Template - Blogger
Date       : March 2016
Version    : 1.0
Created by : Dihak M N A - Bloggerku.com
---------------------------------------- */

/* Variable definitions
   ====================
<Variable name="keycolor" description="Main Color" type="color" default="#0089FF" value="#0089ff"/>
<Group description="Backgrounds" selector="body">
<Variable name="body.background.color" description="Outer Background" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="content.background.color" description="Main Background" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="header.background.color" description="Header Background" type="color" default="#0089FF" value="#0089ff"/>
</Group>
<Group description="Blog Title" selector=".header h1">
<Variable name="header.font" description="Font" type="font"
default="normal normal bold 50px cursive, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal bold 50px cursive, Tahoma, Helvetica, FreeSans, sans-serif"/>
<Variable name="header.text.color" description="Title Color" type="color" default="#fff"  value="#ffffff"/>
</Group>
<Group description="Page Text" selector="body">
<Variable name="body.text.color" description="Text Color" type="color" default="#4b5f65" value="#4b5f65"/>
</Group>
<Group description="Links" selector="body">
<Variable name="link.color" description="Link Color" type="color" default="#0089FF" value="#0089ff"/>
<Variable name="link.visited.color" description="Visited Color" type="color" default="#0089FF" value="#0089ff"/>
<Variable name="link.hover.color" description="Hover Color" type="color" default="#000" value="#000000"/>
</Group>
<Variable name="body.background" description="Body Background" type="background" color="$(body.background.color)" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
<Group description="Gadgets Title" selector=".widget h2">
<Variable name="widget.title.text.color" description="Title Color" type="color" default="#fff" value="#ffffff"/>
<Variable name="widget.background.color" description="Title Background" type="color" default="#0089FF" value="#0089ff"/>
</Group>
<Group description="Back To Top" selector="#back-to-top">
<Variable name="backtotop.color" description="Color" type="color" default="#0089FF" value="#0089ff"/>
</Group>
<Group description="Page Navigation" selector=".showpagePoint,.showpageOf2">
<Variable name="navigation.color" description="Color" type="color" default="#0089FF" value="#0089ff"/>
</Group>
<Group description="Responsive Menu" selector=".responsive-menu">
<Variable name="responsive.color" description="Backgrround Color" type="color" default="#0089FF" value="#0089ff"/>
</Group>
<Group description="Footer" selector=".widget h2">
<Variable name="footer.background.color" description="Background Color" type="color" default="#0089FF" value="#0089ff"/>
</Group>
*/

/* Content
----------------------------------------------- */
#navbar-iframe{height:0;visibility:hidden;display:none}
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:'Open Sans'}
.widget{margin:0}
.section{margin:0}
.widget ul{padding:0;margin:0;line-height:normal}
.widget li,.BlogArchive #ArchiveList ul.flat li{padding:0}
a:link,a:visited{color:$(link.color);text-decoration:none;margin-left:0;margin-right:0}
a:hover{color:$(link.hover.color)}
a img{border-width:0}
img{max-width:100%;vertical-align:middle;border:0;height:auto}
b{font-weight:700}
acronym{border-bottom:1px dotted;cursor:help}
i{font-style:italic}
h1,h2,h3,h4,h5{margin:0;padding:0;display:block;font-weight:700}
h1{font-size:150%}
h2{font-size:140%}
h3{font-size:130%}
h4{font-size:120%}
h5{font-size:110%}
.quickedit,.blog-feeds,.post-feeds{display:none}
.clear{clear:both}
.hide{visibility:hidden;height:0;overflow:hidden;}
#layout #post-wrapper{width:70%;float:left}
#layout #sidebar-wrapper{width:30%;float:right}
#layout .footer-widget .footer{width:28.06%;float:left}
#layout .footer-widget:after{content:'Template By Bloggerku.com - Dihak'}
#layout header{position:static;height:auto}
#layout nav{position:static}
#layout .hide{visibility: visible;height: initial}
#layout #license{display:block}
#license{display:none}
body{background:$(body.background);margin:0;padding:0;color:$(body.text.color);font-family:'Open Sans';font-size:13px;font-weight:400;text-align:left}

/* Header
----------------------------------------------- */
header{background:$(header.background.color);position:fixed;width:100%;height:250px;text-align:center;box-shadow:0 0 4px rgba(0,0,0,0.38),0 7px 8px rgba(0,0,0,.28);-webkit-transition:height .3s;-moz-transition:height .3s;transition:height .3s;z-index:10}
.Header h1 a span{font:$(header.font);color:$(header.text.color);text-decoration:inherit}
.description span{color:$(header.text.color);font-size:20px}
.Header{padding-top:50px;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}
nav{display:block;background:$(header.background.color);width:100%;transition:all .3s;text-align:center;bottom:0;position:absolute}
.menu.show{display:inline-block}
.menu{display:none;margin:0}
.menu li{display:inline-block;margin:0;width:150px;z-index:2}
.menu li a{font-family:"Open Sans";text-transform:uppercase;font-size:14px;font-weight:700;text-decoration:none;padding:20px 10px;display:block;color:$(header.text.color);transition:all .25s ease}
.submenu ul{display:none;position:absolute;background:$(header.background.color);box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)}
.submenu li{display:block;position:relative;float:none;margin:0;padding:0;text-align:left}
.submenu li a{padding:15px 10px}
.menu ul li a:hover,.menu ul li:hover > a{background:rgba(0,0,0,0.2);color:#fff;padding-left:20px}
.submenu2 ul{position:absolute;left:100%;top:0}
li.submenu > a:after{content:"\f0d7";font-family:FontAwesome;font-style:normal;font-weight:400;text-decoration:inherit;padding-left:6px}
li.submenu2 > a:after{content:"\f0da";font-family:FontAwesome;font-style:normal;font-weight:400;text-decoration:inherit;margin-left:10px}
.mega-menu{width:1000px;position:absolute;display:none;left:0;right:0;margin-left:auto;margin-right:auto;top:100%;background:$(header.background.color);box-shadow:0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);overflow:hidden;height:300px}
.mitem{float:left;width:calc(100% / 4);overflow:hidden;position:relative;transition:none;padding:20px 0}
.mitem h3 a{padding:10px 15px}
.minfo{text-align:left;color:$(header.text.color);min-width:240px}
.mdate{padding:0 15px}
div.mgambar a{padding:0}
.indicator{width:150px;height:5px;background:$(header.text.color);position:absolute;bottom:0;transition:all .5s ease}
.mega-menu.loading:before{content:'';width:100%;height:300px;display:block;background:url(https://3.bp.blogspot.com/-BzBPPgHB5B0/VuS_U1eO7gI/AAAAAAAAAQs/LQrjcLbYVkIVslkwbWKxgb7nOIyHLkwBg/s1600/301.gif) 50% 50% no-repeat}
.mega-menu.loading .mitem{display:none}
.mitem{top:0;animation-name:slide;animation-timing-function:ease;animation-fill-mode:both;animation-duration:800ms}
.mitem:nth-child(2){animation-delay:.2s}
.mitem:nth-child(3){animation-delay:.25s}
.mitem:nth-child(4){animation-delay:.3s}
@-moz-keyframes slide {
0%{top:-300px}
100%{top:0}
}
@-webkit-keyframes slide {
0%{top:-300px}
100%{top:0}
}
@-o-keyframes slide {
0%{top:-300px}
100%{top:0}
}
@keyframes slide {
0%{top:-300px}
100%{top:0}
}
ul.tab-outer{display:table;position:relative;width:calc(100%/4);height:100%;float:left}
ul.tab-outer li{color:$(header.text.color);text-align:right;width:250px;padding:8px;cursor:pointer;font-weight:700}
ul.tab-outer li.active{background:rgba(0,0,0,0.09)}
.label .mitem{width:240px}
.isi-tab-outer{position:absolute;margin-left:280px}
header.kecil{height:120px}
header.kecil .Header{padding-top:0}
header.kecil h1 a span{font-size:40px;line-height: 60px}
header.kecil .description span{display:none}
.responsive-menu{position:fixed;top:0;background:$(responsive.color);color:#fff;width:250px;height:100%;z-index:12;box-shadow:5px 0 8px rgba(0,0,0,0.38);transition:all .5s ease;-moz-transform:translate(-310px,0px);-webkit-transform:translate(-310px,0px);-o-transform:translate(-310px,0px);-ms-transform:translate(-310px,0px);transform:translate(-310px,0px);overflow:auto}
.res-menu > li a{color:#FFF;display:block;height:50px;line-height:50px;padding:0 10px;margin-bottom:2px;font-weight:700}
ul.res-menu{margin-top:60px}
.responsive-menu.active{-moz-transform:translate(0px,0px);-webkit-transform:translate(0px,0px);-o-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px)}
.tombol-responsive span{display:block;width:30px;height:5px;background:#FFF;position:relative;border-radius:10px;-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}
.tombol-responsive span:before,.tombol-responsive span:after{display:block;width:inherit;height:5px;position:absolute;background:inherit;left:0;content:"";border-radius:10px;-webkit-animation-duration:300ms;animation-duration:300ms;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}
.tombol-responsive span:before{bottom:200%}
.tombol-responsive span:after{top:200%}
button.tombol-responsive{display:none;position:fixed;top:25px;left:10px;border:none;background:none;outline:0;cursor:pointer;z-index:13}
.icon-to-arrow{-webkit-animation-name:resp;animation-name:resp;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}
.icon-to-arrow:before{-webkit-animation-name:resp-before;animation-name:resp-before;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}
.icon-to-arrow:after{-webkit-animation-name:resp-after;animation-name:resp-after;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}
.icon-from-arrow{-webkit-animation-name:resp-from;animation-name:resp-from}
.icon-from-arrow:before{-webkit-animation-name:resp-before-from;animation-name:resp-before-from}
.icon-from-arrow:after{-webkit-animation-name:resp-after-from;animation-name:resp-after-from}
@-webkit-keyframes resp {
100%{-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}
}
@keyframes resp {
100%{-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}
}
@-webkit-keyframes resp-before {
100%{-moz-transform:rotate(40deg);-webkit-transform:rotate(40deg);-o-transform:rotate(40deg);-ms-transform:rotate(40deg);transform:rotate(40deg);margin:-15% 40%;width:60%}
}
@keyframes resp-before {
100%{-moz-transform:rotate(40deg);-webkit-transform:rotate(40deg);-o-transform:rotate(40deg);-ms-transform:rotate(40deg);transform:rotate(40deg);margin:-15% 40%;width:60%}
}
@-webkit-keyframes resp-after {
100%{-moz-transform:rotate(-40deg);-webkit-transform:rotate(-40deg);-o-transform:rotate(-40deg);-ms-transform:rotate(-40deg);transform:rotate(-40deg);margin:-15% 40%;width:60%}
}
@keyframes resp-after {
100%{-moz-transform:rotate(-40deg);-webkit-transform:rotate(-40deg);-o-transform:rotate(-40deg);-ms-transform:rotate(-40deg);transform:rotate(-40deg);margin:-15% 40%;width:60%}
}
@-webkit-keyframes resp-from {
0%{-moz-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);-o-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}
}
@keyframes resp-from {
0%{-moz-transform:rotate(-180deg);-webkit-transform:rotate(-180deg);-o-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}
}
@-webkit-keyframes resp-before-from {
0%{-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);margin:3% 37%;width:75%}
}
@keyframes resp-before-from {
0%{-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);margin:3% 37%;width:75%}
}
@-webkit-keyframes resp-after-from {
0%{-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);margin:3% 37%;width:75%}
}
@keyframes resp-after-from {
0%{-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);margin:3% 37%;width:75%}
}
.show-res-menu{overflow:hidden}
.show-res-menu:before{content:'';background-color:rgba(0,0,0,0.6);position:fixed;top:0;bottom:0;width:100%;z-index:11}
.res-menu .sub-menu,.res-menu .sub-sub-menu{width:100%;position:static}
.res-menu > li a.open{background:rgba(0, 0, 0, 0.25)}
.res-menu .mega-menu{position:static;height:auto;width:initial}
.res-menu .mitem{float:none;padding:0;margin-bottom:20px;animation:0;width:100%}
.res-menu .mitem h3 a{line-height:25px;height:auto}
.res-menu ul.tab-outer{float:none;position:static;width:100%}
.res-menu .isi-tab-outer{margin-left:0;position:static}
.res-menu ul.tab-outer li{text-align:left;width:20%;float:left}
#seacrh-btn{width:64px;height:64px;position:absolute;bottom:-20px;right:50px;cursor:pointer;color:#fff;line-height:64px}
.search-bg{width:64px;height:64px;border-radius:100%;box-sizing:border-box;padding:20px;background:$(header.background.color);outline:0;transform-origin:50%;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);transition:all .7s cubic-bezier(0.4,0,0.2,1)}
.search-bg:before {content: '';background: rgba(0,0,0,0.2);width: 64px;height: 64px;top: 0;left: 0;position: absolute;border-radius: 50%;}
i.icon-search{position:absolute;top:18px;left:18px;font-size:28px}
.search-dihak{z-index:999}
.search-dihak .form{height:80px;position:fixed;top:45%;left:50px;margin-top:-40px;transition:all .5s ease-in-out;opacity:0;transform:translate(100px,0);pointer-events:none}
.form form input{color:#fff;font-size:54px;border:0;background:transparent;-webkit-appearance:none;box-sizing:border-box;outline:0;font-weight:200}
i.icon-close.fa.fa-times{position:fixed;top:30px;right:30px;color:#FFF;font-size:80px;opacity:0;transform:translate(10px,0) rotate(90deg);transition:all .3s ease-in-out}
.mode-search .search-bg{transform:scale(70)}
.mode-search i.icon-search{opacity:0}
.mode-search .search-dihak .form{opacity:1;transform:none;pointer-events:all;z-index:15}
.mode-search i.icon-close.fa.fa-times{opacity:1;transform:none;pointer-events:all;z-index:15}
.search-dihak .form ::-webkit-input-placeholder{color:#EEE}
.search-dihak .form :-moz-placeholder{color:#EEE;opacity:1}
.search-dihak .form ::-moz-placeholder{color:#EEE;opacity:1}
.search-dihak .form :-ms-input-placeholder{color:#EEE}

/* Content Layout
----------------------------------------------- */
#content-wrapper{padding-top:270px;width:1000px;margin:0 auto}
#post-wrapper{width:70%;float:left}
#sidebar-wrapper{width:30%;float:right;position:relative}

/* Post
----------------------------------------------- */
.post{background:$(content.background.color)}
.nama-penulis{color:$(link.color)}
.breadcrumbs{background:$(widget.background.color)}
#comments{background:$(content.background.color)}
blockquote{border-left:8px solid $(widget.background.color)}
.sharepost li a{background-color: $(widget.background.color)}
.comment_admin .comment_author_flag{background:$(widget.background.color)}
.emo-button{background:$(widget.background.color)}

/* transnition
----------------------------------------------- */
a,.post,.photo-penulis,.post-img,#loadmore,#back-to-top{transition:all .3s ease-in-out}

/* Back To Top
----------------------------------------------- */
#back-to-top{position:fixed;bottom:50px;right:50px;width:50px;height:50px;background:$(backtotop.color);color:#fff;text-align:center;line-height:50px;font-size:20px;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);border-radius:5px;opacity:0;transform:translateY(100px)}
#back-to-top:hover{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)}
#back-to-top.show{opacity:1;transform:translateY(0px)}

/* Widget
----------------------------------------------- */
.widget-content li{list-style-type:none}
#sidebar .widget{box-shadow:0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);margin-bottom:20px;background:$(content.background.color);border-radius:4px;overflow:hidden}
.widget > h2{font-size:16px;font-weight:700;color:$(widget.title.text.color);background:$(widget.background.color);padding:15px}
#sidebar .widget-content{padding:15px;max-height:500px;overflow:auto}
.item-thumbnail{float:left;margin-right:10px}
.item-thumbnail img{border-radius:50%}
.widget-content.popular-posts li{border-bottom:1px solid rgba(0, 0, 0, 0.09);padding:10px 0;position:relative}
.widget-content.popular-posts li:last-child{border-bottom:none;padding:10px 0}
.item-title{font-size:14px}
.icon-social{background-image:url(https://1.bp.blogspot.com/-50sYrnfMaSA/VwSB-BCmTCI/AAAAAAAAATk/_7NY8NH3o2EWPxQPFa_xA0z7H2h5y56tQ/s1600/share-button.png);background-repeat:no-repeat;display:inline-block;position:relative;width:32px;height:32px;background-position:-20px -20px;border-right:1px solid rgba(255,255,255,0.1)}
.social li{height:32px;margin-bottom:10px;color:#fff;position:relative;-webkit-transition: background-color 0.2s cubic-bezier(0, 0, 0.58, 1) 0s;-moz-transition: background-color 0.2s cubic-bezier(0, 0, 0.58, 1) 0s;-o-transition: background-color 0.2s cubic-bezier(0, 0, 0.58, 1) 0s;transition: background-color 0.2s cubic-bezier(0, 0, 0.58, 1) 0s;position:relative;}
.social li.facebook{background-color:#516eab}
.social li.twitter{background-color:#29c5f6}
.twitter .icon-social{background-position:-20px -435px}
.social li.google{background-color:#eb4026}
.google .icon-social{background-position:-20px -280px}
.social li.youtube{background-color:#CC181E}
.youtube .icon-social{background-position:-20px -385px}
.social li.rss{background-color:#fd7800}
.rss .icon-social{background-position:-20px -125px}
.social li.soundcloud{background-color:#f50}
.soundcloud .icon-social{background-position:-20px -175px}
.social li.instagram{background-color:#417096}
.instagram .icon-social{background-position:-20px -228px}
.item-count,.social-name{padding-left:5px;position:relative;top:-12px}
.social span{font-family:'Open Sans',arial,sans-serif;font-weight:700;font-size:11px;color:#fff}
span.social-tombol{float:right;position:absolute;border-left:1px solid rgba(255,255,255,0.1);padding:0 14px;margin-top:8px;right:0;height:16px;line-height:15px;text-transform:uppercase}
.social a:after{content:"";display:block;height:32px;position:absolute;right:0;top:0;width:100%}
span.hide-count{display:none}
.social li:hover{background-color:#000}
.PopularPosts ul li:before{font-family:fontawesome;content:'\f005\f005';display:inline-block;position:absolute;color:$(widget.background.color);text-align:center;bottom:0;right:0;margin:9px 0;font-size:11px;padding:0;font-weight:400;line-height:normal;transition:all .3s}
.PopularPosts ul li:nth-child(1):before{font-family:fontawesome;content:'\f005\f005\f005\f005\f005'}
.PopularPosts ul li:nth-child(2):before{font-family:fontawesome;content:'\f005\f005\f005\f005\f006';opacity:.9}
.PopularPosts ul li:nth-child(3):before{font-family:fontawesome;content:'\f005\f005\f005\f006\f006';opacity:.85}
.PopularPosts ul li:nth-child(4):before{font-family:fontawesome;content:'\f005\f005\f006\f006\f006';opacity:.8}
.PopularPosts ul li:nth-child(5):before{font-family:fontawesome;content:'\f005\f006\f006\f006\f006';opacity:.75}
.PopularPosts ul li:hover:before{opacity:1}
.label-size{background:$(widget.background.color);margin:0 5px 5px 0;color:#fff;display:block;width:auto;float:left;border-radius:5px;line-height:30px;position:relative;padding:0 5px;opacity:1;font-size:100%}
.label-size a{color:#fff}
.emailfooter input{background:rgba(0,0,0,0.08);padding:12px;color:#fff;font-size:14px;margin-bottom:10px;border:0;transition:all .3s}
.emailfooter .submitfooter{background:rgba(0, 0, 0, 0.14);color:#fff;margin:0 0 0 5px;font-size:14px;cursor:pointer;padding:9px;border:0;border-radius:3px;transition:all .3s}
.emailfooter form{padding-top:15px}
.post-summary{padding:15px 20px}
.owl-theme .owl-dots .owl-dot.active span{background:$(widget.background.color)!important}
.item-slider .label{background:$(widget.background.color)}
.list-label-widget-content a{position:relative;display:inline-block;padding:10px 0;font-size:13px}
.list-label-widget-content a:before{content:'\f115';display:inline-block;font-family:FontAwesome;font-weight:400;margin-right:8px}
.list-label-widget-content li{border-bottom:1px solid rgba(0,0,0,0.09)}
.list-label-widget-content li:last-child{border-bottom:none}

/* Tabs Sidebar
----------------------------------------------- */
.tab-sidebar{display:block;margin:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;transition:all .5s cubic-bezier(0.35,0,0.25,1);box-shadow:0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);margin-bottom:20px;background:#fff;border-radius:4px;overflow:hidden}
.tab-wrapper{display:block;position:relative;height:48px;border-bottom:5px solid $(widget.background.color);overflow:hidden}
.tab-wrapper li{width:calc(100%/3);float:left;text-align:center;list-style-type:none}
.tab-wrapper li a{display:block;font-size:13px;text-decoration:none;line-height:48px}
.tab-wrapper li a.active{background:$(widget.background.color);color:#fff}
.tab-isi{display:block;min-height:0;position:relative;top:auto;left:auto;right:auto;bottom:auto;overflow:visible}
.tab-isi > div{bottom:auto;position:absolute;top:0;left:0;right:0;bottom:0;transition:-webkit-transform .5s cubic-bezier(.35,0,.25,1);transition:transform .5s cubic-bezier(.35,0,.25,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
.tab-isi > div.active{position:relative}
.tab-isi .t-kanan{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation:1s md-tab-content-hide;animation:1s md-tab-content-hide;opacity:0}
.tab-isi .t-kiri{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation:1s md-tab-content-hide;animation:1s md-tab-content-hide;opacity:0}
@-webkit-keyframes md-tab-content-hide {
0%,50%{opacity:1}
100%{opacity:0}
}
@keyframes md-tab-content-hide {
0%,50%{opacity:1}
100%{opacity:0}
}
.tab-sidebar h2{display:none}

/* Blog Navigation
----------------------------------------------- */
.showpageNum a,.showpage a{color:$(navigation.color)}
.showpagePoint,.showpageOf{background:$(navigation.color)}
.blog-pager,#blog-pager{clear:both;overflow:initial}
#blog-pager-newer-link{float:left;font-size:150%;width:50%}#blog-pager-older-link{float:right;font-size:150%;text-align: right;width:50%}
#blog-pager-newer-link a,#blog-pager-older-link a,a.home-link{color: #fff;}
#blog-pager-newer-link a:hover,#blog-pager-older-link a:hover,a.home-link:hover{color:#D8D8D8}
a.home-link{font-size:150%;border-color:transparent}
#blog-pager-newer-link a:hover,#blog-pager-older-link a:hover,a.home-link:hover,a.home-box:hover,.mobile-desktop-link a.home-link:hover{color: #000000!important;}
a.blog-pager-newer-link:hover,a.blog-pager-older-link:hover,a.home-link:hover{color:#ff675c;}
.mobile-desktop-link a.home-link,#blog-pager .mobile-desktop-link{font-size:0;font-weight:400;background:0 0;padding:0;width:0;height:0;border:0;}
.halaman{background:$(navigation.color)}
#loadmore{background:$(navigation.color)}

/* Footer
----------------------------------------------- */
#footer-wrapper{background:$(footer.background.color);color:#FFF;margin-top:20px;padding-top:20px;box-shadow:0 -2px 1px rgba(0,0,0,0.37)}
#footer-wrapper a{color:#FFF}
.footer-widget .footer{width:31%;float:left;margin:0 20px 20px 0}
.footer-widget{margin:auto;width:1000px;line-height:20px}
.footer h2{padding:15px 0;background:$(footer.background.color);border-bottom:2px solid #fff}
.credit{background:rgba(0, 0, 0, 0.14);text-align:center;padding:20px;margin:auto}
.footer .widget-content{margin-top:15px}
.footer .widget-content ul li:before{font-family:FontAwesome;content:'\f0a9';padding-right:5px}
#footer-wrapper a:hover{color:rgba(255,255,255,0.78)}
]]></b:skin>
<b:template-skin>
body#layout #license {
    background: #009fff;
    color: #fff;
    top: 10px;
    width: 30%;
    right: 0;
    padding: 5px;
    position: absolute;
}
body#layout #license h4 {
    display: none;
}
body#layout #license .layout-widget-description{
    display:none;
}

body#layout #license &gt; div {
    margin: 0;
}
#layout header {
    background: #0089ff;
}

#layout header div.section {
    background-color: transparent;
    border: none;
    color: #fff;
    padding: 0 16px 10px;
}

#layout #mainnav h4 {
    display: none;
}
#layout header .section h4 {
    text-align:center;
    padding-top:20px
}
#layout #content-wrapper {
    background: #DADADA;
}
#layout #content-wrapper div.section{
    border:none;
    margin: 15px;
    background: #fff;
}
#layout #footer-wrapper {
    background: #0089FF;
    color: #fff;
}
#layout #footer-wrapper div.section{
    background: transparent;
    border: none;
}
#layout #footer-wrapper .add_widget a{
    color:#fff
}
#layout #footer-wrapper .add-icon{
    display:none;
}
</b:template-skin>
<style type='text/css'>
/* Owl carousel */
.owl-carousel .animated{-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-fill-mode:both;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{-webkit-transition:height 500ms ease-in-out;-moz-transition:height 500ms ease-in-out;-ms-transition:height 500ms ease-in-out;-o-transition:height 500ms ease-in-out;transition:height 500ms ease-in-out}.owl-carousel{display:none;width:100%;-webkit-tap-highlight-color:transparent;position:relative;z-index:1;box-shadow:0 3px 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);border-radius:5px;overflow:hidden}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y}.owl-carousel .owl-stage:after{content:&quot;.&quot;;display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0px,0,0)}.owl-carousel .owl-controls .owl-dot,.owl-carousel .owl-controls .owl-nav .owl-next,.owl-carousel .owl-controls .owl-nav .owl-prev{cursor:pointer;cursor:hand;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-loaded{display:block}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel .owl-refresh .owl-item{display:none}.owl-carousel .owl-item{position:relative;min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel .owl-item img{display:block;width:100%;-webkit-transform-style:preserve-3d}.owl-carousel.owl-text-select-on .owl-item{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.owl-carousel .owl-grab{cursor:move;cursor:-webkit-grab;cursor:-o-grab;cursor:-ms-grab;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.no-js .owl-carousel{display:block}.owl-carousel .owl-item .owl-lazy{opacity:0;-webkit-transition:opacity 400ms ease;-moz-transition:opacity 400ms ease;-ms-transition:opacity 400ms ease;-o-transition:opacity 400ms ease;transition:opacity 400ms ease}.owl-carousel .owl-item img{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;background:url(owl.video.play.png) no-repeat;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;-webkit-transition:scale 100ms ease;-moz-transition:scale 100ms ease;-ms-transition:scale 100ms ease;-o-transition:scale 100ms ease;transition:scale 100ms ease}.owl-carousel .owl-video-play-icon:hover{-webkit-transition:scale(1.3,1.3);-moz-transition:scale(1.3,1.3);-ms-transition:scale(1.3,1.3);-o-transition:scale(1.3,1.3);transition:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain;-webkit-transition:opacity 400ms ease;-moz-transition:opacity 400ms ease;-ms-transition:opacity 400ms ease;-o-transition:opacity 400ms ease;transition:opacity 400ms ease}.owl-carousel .owl-video-frame{position:relative;z-index:1}
.owl-theme .owl-controls{margin-top:0px;text-align:center;-webkit-tap-highlight-color:transparent}.owl-theme .owl-controls .owl-nav [class*=owl-]{color:#999;font-size:20px;padding:5px 10px;background:#fff;display:inline-block;cursor:pointer;}.owl-theme .owl-controls .owl-nav [class*=owl-]:hover{background:#fff;color:#666;text-decoration:none}.owl-theme .owl-controls .owl-nav .disabled{opacity:.5;cursor:default}.owl-theme .owl-dots .owl-dot{display:inline-block;zoom:1;*display:inline}.owl-theme .owl-dots .owl-dot span{width:15px;height:15px;margin:5px 7px;background:#d6d6d6;display:block;-webkit-backface-visibility:visible;-webkit-transition:opacity 200ms ease;-moz-transition:opacity 200ms ease;-ms-transition:opacity 200ms ease;-o-transition:opacity 200ms ease;transition:opacity 200ms ease;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px}.owl-theme .owl-dots .owl-dot.active span{border:2px solid #fff;}.owl-theme .owl-dots .owl-dot:hover span{background:#718392}

/* Slider */
.single-outer{padding:0 10px 15px}
li.item-slider{position:relative;list-style-type:none}
li.item-slider:before{pointer-events:none;position:absolute;content:&#39;&#39;;width:100%;height:100%;left:0;top:0;vertical-align:top;background:transparent;z-index:1;background:-moz-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:-webkit-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:-o-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:-ms-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%)}
.owl-dots{position:absolute;bottom:0;width:100%}
.owl-nav{position:absolute;bottom:50%;width:100%}
.owl-prev{position:absolute;left:0;bottom:0}
.owl-next{position:absolute;right:0;bottom:0}
.content{position:absolute;bottom:40px;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-sizing:border-box;padding:0 30px;z-index:1;width:100%;color:#fff}
.item-slider a{color:#fff}
.item-slider .label{padding:5px;margin-right:10px}
.item-slider .meta{margin-bottom:10px}

/* Recent Comment */
.cm-nama{font-size:14px;padding-bottom:.2em}
.cm-item{border-bottom:1px solid rgba(0,0,0,0.09);padding:10px 0;position:relative}
.cm-item:last-child{border-bottom:none;padding:10px 0}
.cm-info{font-size:10px;color:#A5A5A5;margin-top:5px;text-transform:capitalize}
.cm-photo{float:left;border-radius:50%;overflow:hidden}
.cm-bubble{float:right;width:calc(100% - 58px)}

/* Responsive */
@media screen and (max-width: 1024px) {
#content-wrapper{width:90%}
.footer-widget{width:90%}
.footer-widget .footer{width:30%}
}
@media screen and (max-width: 780px) {
#content-wrapper{padding-top:80px}
#post-wrapper{width:100%}
#sidebar-wrapper{display:none}
nav{display:none}
.Header{padding-top:0px}
.descriptionwrapper{display:none}
.Header h1 a span{font-size:40px}
header.kecil,Header{height:60px;overflow:hidden;text-align:left;padding-left:80px}
button.tombol-responsive{display:block}
.footer-widget .footer{width:100%}
}
@media screen and (max-width: 470px) {
.Header h1 a span{font-size:30px;line-height:55px}
header.kecil h1 a span{font-size:30px}
}
</style>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<style type='text/css'>
/* Post */
.post{box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);overflow:hidden;border-radius:4px}
.post:hover .photo-penulis{left:10px}
.post:hover{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)}
.post-atas a{color:#fff;font-size:20px;font-weight:700}
.post-info{padding:20px;height:80px}
.post-outer{margin:0 10px 20px 10px;width:calc(50% - 20px);float:left}
.post-meta{font-size:12px}
div.post-atas{position:absolute;bottom:0;padding:15px}
.post-gambar{position:relative;overflow:hidden}
.post-img{height:250px}
.post:hover .post-img{transform:scale(1.2)}
.post-bg{height:100%;width:100%;bottom:0;position:absolute;background:transparent;background:-moz-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:-webkit-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:-o-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:-ms-linear-gradient(top,transparent 0%,rgba(0,0,0,0.6) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%)}
.photo-penulis{border-radius:50%;position:absolute;top:10px;left:-50px;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)}
.snippet{font-size:13px}
.post-date a{font-size:12px}
.nama-penulis{position:absolute;top:5px;line-height:60px;left:5px;font-size:12px;font-weight:700;background:#fff;border-radius:80px;padding:0 10px;padding-left:58px;transform:scaleX(0.4);-webkit-transform-origin:0 120%;transform-origin:0 120%;-webkit-transition:opacity 0.4s,-webkit-transform .4s;transition:all 0.4s,transform .4s;-webkit-transition-timing-function:ease,cubic-bezier(0.6,0,0.4,1);transition-timing-function:ease,cubic-bezier(0.6,0,0.4,1);opacity:0}
.author:hover .nama-penulis{transform:scale(1);border-radius:30px 10px 10px 30px;opacity:1}

/* Pagenation */
div#blog-pager{text-align:center}
.showpagePoint,.showpageOf{font-size:20px;color:#fff;margin:2px;padding:5px;border-radius:5px}
.showpageNum a,.showpage a{font-weight:700;font-size:20px;margin:0 2px;padding:10px;transition:all .3s ease-in}
.showpage.disable a{color:rgba(0, 0, 0, 0.21);cursor:default}
#loadmore a{color:#fff;font-size:15px;padding:10px 20px;display:block}
#loadmore{width:130px;text-align:center;margin:auto;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)}
#loadmore:hover{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)}

/* Responsive */
@media screen and (max-width: 600px) {
.post-outer{width:calc(100% - 20px)}
}
</style>
</b:if>
</b:if>
<b:if cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}'>
<style type='text/css'>
/* Post */
.post-outer{padding-bottom:20px}
.post-inner{margin-right:20px}
.post{box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);overflow:hidden}
.post-body{padding:20px;font-size:110%;letter-spacing:0;width:initial;line-height:1.5}
.post-title{font-size:20px;font-weight:700;padding:20px}
.post-meta span{line-height:20px;font-size:11px!important;text-decoration:none;text-transform:uppercase;font-weight:600;display:inline-block}
.post-meta{padding:0 20px 20px;border-bottom:1px solid rgba(0, 0, 0, 0.1)}
.post-author-img img{border-radius:50%}
.post-author-img{float:left;margin-right:5px}
span.post-author.vcard.post-author{display:block}

/* Post Code */
.post-body ul,.post-body ol{margin-left:20px}
sup,sub{vertical-align:baseline;position:relative;top:-.4em;font-size:86%}
sub{top:.4em}
code,kbd,pre,samp{font-family:monospace}
blockquote{background-color:#EFEFEF;display:block;position:relative;color:#000;border-radius:4px;margin:.75em 0;padding:10px 15px;font-style:italic;font-size:110%}
small{font-size:80%!important}

/* Breadcrumbs */
.breadcrumbs{box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);padding:15px;color:#fff;font-weight:700}
.breadcrumbs a{color:#fff}

/* Realated Article */
.judul-bawah{text-align:center;position:relative}
.judul-bawah:before,.judul-bawah:after{position:absolute;top:51%;overflow:hidden;width:50%;height:1px;content:&#39;\a0&#39;;background-color:rgba(0, 0, 0, 0.1)}
.judul-bawah:before{margin-left:-50%;text-align:right}
.related-post-item{display:block;float:left;width:calc(100%/3);height:auto}
ul.related-post{padding:10px}
img.related-post-item-thumbnail{width:100%;height:150px;border-radius:20px;margin-bottom:10px}
.related-post-item-inner{padding:0 5px}

/* Share Button */
.sharepost{overflow:hidden;border-top:1px solid rgba(0,0,0,0.1);text-align:center;padding:20px}
.sharepost li{padding:0;list-style:none}
.sharepost li a{padding:10px 0;color:#fff;display:block;box-shadow:0 0 1px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)}
.sharepost li a:hover{box-shadow:0 3px 5px rgba(0,0,0,0.16),0 5px 10px rgba(0,0,0,0.23)}
.sharepost li{float:left;margin-right:1.2%;width:19%}
.sharepost li:last-child{margin-right:0}
.sharepost li .fa:before{margin-right:5px}

/* Halaman */
.halaman{color:#fff;margin:20px 0 0 0;padding:15px;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);font-weight:700}
.halaman a{font-weight:100;font-size:16px}
span.current-page{font-size:16px;font-weight:100}

/* Comment */
#comments{margin:20px 0 0 0;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);padding-top:20px}
#comments h3{font-size:18px;padding:0 20px}
.comment-body-author{background:#FFF;color:green;border:1px dotted green;margin:0;padding:0 0 0 10px}
.comment_share{color:#999;cursor:pointer;font-family:verdana;font-size:10px;line-height:1.5em;max-width:100%;font-weight:400;padding-left:5px}
#comment_rep a:hover{text-decoration:none;color:#464646!important}
.comment_avatar{height:48px;width:48px;float:left;margin-right:10px;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;overflow:hidden}
.comment_name{color:#444;font-size:18px;font-weight:400;line-height:19.5px;max-width:100%;text-decoration:none;margin-top:5px}
.comment-menu{float:right;list-style:none;width:0;height:0}
.comment_name a{font-size:15px}
.comment_body p{font-size:14px;line-height:22px}
.comment_body{margin-top:10px;margin-bottom:20px;position:relative;margin-left:60px}
.comment_date{color:#999;font-size:11px;line-height:25px;cursor:pointer;font-weight:400}
#comments .separate{color:#ccc;font-family:&#39;Oswald&#39;,Arial,Helvetica,sans-serif;font-size:15px;line-height:40px;padding-left:5px;padding-right:5px;line-height:10px;t:15px}
#comments .author-mark{background:#d2d2d2;color:#fff;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:2px 6px;font-size:15px;line-height:15px}
.comment-share{display:inline}
.comment-share li{display:inline}
.comment-share li.button a{background:#555;color:#fff;padding:0 5px 2px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;display:none}
.comment-share li.button:hover a{background:#000}
#comment_rep{margin-top:-27px;float:right}
.comment_child .comment_wrap{padding-left:50px}
.comment_reply,.comment-delete{cursor:pointer;font-size:11px;line-height:1.5em;font-style:italic;max-width:100%;font-weight:400;padding:2px 12px;color:#999;float:right;position:absolute;right:1px;bottom:-20px}
.comment_reply{right:40px}
.comment_reply a{text-decoration:none;color:#999!important;float:right;position:absolute}
.unneeded-paging-control{display:none}
.comment-form{max-width:100%;margin-top:-15px!important}
#comment-editor{width:101%!important}
.comment_reply_form .comment-form{width:100%}
.comment_youtube{max-width:100%!important;width:400px;height:225px;display:block;padding-top:10px;padding-bottom:10px}
#respond{overflow:hidden;padding-left:10px;clear:both}
.comment_avatar *{max-width:1000%!important;display:block;max-height:1000%!important;width:48px!important;height:48px!important;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;margin-right:10px}
.comment_child .comment_avatar,.comment_child .comment_avatar *{float:left;margin-right:10px}
.comment_form a{color:#2f6986;text-decoration:none}
.comment_form a:hover{color:#2f6986;text-decoration:underline}
.comment_author_flag{display:none}
.comment_admin .comment_author_flag{display:inline;font-size:10px;font-weight:400;padding:2px 6px;margin-left:8px;color:#fff;border-radius:4px;letter-spacing:.1em}
.comment-delete img{float:right;margin-left:10px;position:absolute;margin-top:7px}
#comment-editor{width:100%!important;background:transparent url(data:image/gif;base64,R0lGODlhKwALAPAAAKrD2AAAACH5BAEKAAEAIf4VTWFkZSBieSBBamF4TG9hZC5pbmZvACH/C05FVFNDQVBFMi4wAwEAAAAsAAAAACsACwAAAjIMjhjLltnYg/PFChveVvPLheA2hlhZoWYnfd6avqcMZy1J14fKLvrEs/k+uCAgMkwVAAAh+QQBCgACACwAAAAAKwALAIFPg6+qw9gAAAAAAAACPRSOKMsSD2FjsZqEwax885hh3veMZJiYn8qhSkNKcBy4B2vNsa3pJA6yAWUUGm9Y8n2Oyk7T4posYlLHrwAAIfkEAQoAAgAsAAAAACsACwCBT4OvqsPYAAAAAAAAAj1UjijLAg9hY6maalvcb+IPBhO3eeF5jKTUoKi6AqYLwutMYzaJ58nO6flSmpisNcwwjEfK6fKZLGJSqK4AACH5BAEKAAIALAAAAAArAAsAgU+Dr6rD2AAAAAAAAAJAVI4oy5bZGJiUugcbfrH6uWVMqDSfRx5RGnQnxa6p+wKxNpu1nY/9suORZENd7eYrSnbIRVMQvGAizhAV+hIUAAA7) no-repeat 50% 30%}
.comment-form{max-width:100%;margin-top:25px!important;position:relative}
.comment_youtube{max-width:100%!important;width:400px;height:225px;display:block;margin:auto}
.comment_img{max-width:100%!important;margin: 10px 0;}
.comment-form p{margin:20px}
iframe{border:none;overflow:hidden}
#comment_block &gt; div{border-bottom:1px solid rgba(0, 0, 0, 0.1);padding:25px}
.comment_emo_list{position:absolute;bottom:calc(100% + 30px);background:#fff;width:300px;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);padding:10px;left:20px;display:none}
.comment_emo_list .item{float:left;margin:10px 0 0 10px}
.arrow-bawah{position:absolute;width:50px;height:25px;bottom:calc(100% + 5px);left:40px;overflow:hidden;display:none}
.arrow-bawah:before{content:&#39;&#39;;position:absolute;width:25px;height:25px;left:25%;bottom:0;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);background:#FFF;transform:translate3d(0,-50%,0) rotate3d(0,0,1,45deg)}
.emo-button{margin-left:30px;background:#0089FF;color:#fff;padding:5px;cursor:pointer;box-shadow:0 1px 6px rgba(0,0,0,0.16),0 1px 1px rgba(0,0,0,0.23)}
.emo-button i{margin-right:5px}
.emoKey{padding:0;margin-left:10px;width:20px}
.comment-media{margin:10px 0}
.spammer-detected{background:#CE3135;padding:10px;color:#fff}

/* Responsive Post */
@media screen and (max-width: 379px) {
.post-inner{margin-right:0}
#content-wrapper{width:100%}
.related-post-item{float:none;width:100%;margin-bottom:20px}
}
</style>
</b:if>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<style type='text/css'>
#post-wrapper{width:100%}#sidebar-wrapper{display:none}
</style>
</b:if>
<script src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'/>
<script type='text/javascript'>
//<![CDATA[
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//fonts.googleapis.com/css?family=Open+Sans:400,700");loadCSS("//fonts.googleapis.com/css?family=Roboto+Condensed:400,700");loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
//]]>
</script>
</head>
<body itemscope='itemscope' itemtype='http://schema.org/WebPage'>
<b:section class='license-code' id='license' maxwidgets='1'>
  <b:widget id='HTML1' locked='true' title='Enter License Here' type='HTML' version='1' visible='true'>
    <b:includable id='main'><data:content/></b:includable>
  </b:widget>
</b:section>
<div id='fb-root'/>
<script>
//<![CDATA[
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//]]>
</script>
  <button class='tombol-responsive'>
    <span class='tombol-menu icon-from-arrow'/>
  </button>
  <div itemprop='mainContentOfPage' itemscope='itemscope' itemtype='https://schema.org/WebPageElement'>
    <header itemprop='mainEntity' itemscope='itemscope' itemtype='http://schema.org/WPHeader'>
      <b:section class='header-wrapper' id='header' maxwidgets='1'>
        <b:widget id='Header1' locked='true' title='Material Design (Header)' type='Header' version='1' visible='true'>
          <b:includable id='main'>

            <b:if cond='data:useImage'>
              <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
                <!--
Show image as background to text. You can't really calculate the width
reliably in JS because margins are not taken into account by any of
clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
width if the user is using shrink to fit.
This results in a margin-width's worth of pixels being cropped. If the
user is not using shrink to fit then we expand the header.
-->
                <b:if cond='data:mobile'>
                  <div id='header-inner'>
                    <div class='titlewrapper' style='background: transparent'>
                      <h1 class='title' itemprop='headline'>
                        <b:include name='title'/>
                      </h1>
                    </div>
                    <b:include name='description'/>
                  </div>
                  <b:else/>
                  <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height                      + &quot;_height: &quot; + data:height                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
                    <div class='titlewrapper' style='background: transparent'>
                      <h1 class='title' style='background: transparent; border-width: 0px'>
                        <b:include name='title'/>
                      </h1>
                    </div>
                    <b:include name='description'/>
                  </div>
                </b:if>
                <b:else/>
                <!--Show the image only-->
                <div id='header-inner'>
                  <a expr:href='data:blog.homepageUrl' style='display: block'>
                    <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
                  </a>
                  <!--Show the description-->
                  <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
                    <b:include name='description'/>
                  </b:if>
                </div>
              </b:if>
              <b:else/>
              <!--No header image -->
              <div id='header-inner'>
                <div class='titlewrapper'>
                  <h1 class='title' itemprop='headline'>
                    <b:include name='title'/>
                  </h1>
                </div>
                <b:include name='description'/>
              </div>
            </b:if>
          </b:includable>
          <b:includable id='description'>
            <div class='descriptionwrapper'>
              <p class='description' itemprop='description'><span><data:description/></span></p>
            </div>
          </b:includable>
          <b:includable id='title'>
            <a expr:href='data:blog.homepageUrl' expr:title='data:title' itemprop='url'><span itemprop='name'><data:title/></span></a>
          </b:includable>
        </b:widget>
      </b:section>
      <nav itemprop='mainEntity' itemscope='itemscope' itemtype='http://schema.org/SiteNavigationElement'>
        <b:section class='mainnav' id='mainnav' maxwidgets='1'>
          <b:widget id='PageList1' locked='true' title='Menu' type='PageList' version='1' visible='true'>
            <b:includable id='main'>
              <div class='widget-content'>
                <ul class='menu'>
                  <b:loop values='data:links' var='link'>
                    <b:if cond='data:link.isCurrentPage'>
                      <li class='selected'><a expr:href='data:link.href'><data:link.title/></a></li>
                      <b:else/>
                      <li><a expr:href='data:link.href'><data:link.title/></a></li>
                    </b:if>
                  </b:loop>
                </ul>
              </div>
            </b:includable>
          </b:widget>
        </b:section>
        <div id='seacrh-btn'><div class='search-bg'/><i class='icon-search fa fa-search'/></div>
      </nav>
    </header>
<div class='search-dihak'>
    <div class='form'>
        <form action='/search' id='searchbox' method='get'>
          <input class='input-search' name='q' placeholder='Type here...' size='15' type='text'/>
        </form>
    </div>
    <i class='icon-close fa fa-times'/>
</div>
  <div id='content-wrapper' itemscope='itemscope' itemtype='http://schema.org/Blog'>
    <div id='post-wrapper'>
      <div class='post-inner'>
          <b:if cond='data:blog.url == data:blog.homepageUrl'>
            <b:section class='slider hide' id='slider-home' maxwidgets='1'>
              <b:widget id='Label2' locked='true' title='Slider Big' type='Label' version='1' visible='true'>
                <b:includable id='main'>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <ul>
      <b:loop values='data:labels' var='label'>
        <li>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
            <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
        </li>
      </b:loop>
    </ul>
  </div>
</b:includable>
              </b:widget>
            </b:section>
          </b:if>
          <b:section class='main' id='main'>
            <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='1' visible='true'>
              <b:includable id='main' var='top'>
                <b:include data='posts' name='breadcrumb'/>
                <b:if cond='!data:mobile'>
                  <!-- posts -->
                  <div class='blog-posts hfeed'>

                    <b:include data='top' name='status-message'/>

                    <b:loop values='data:posts' var='post'>
                      <article class='post-outer'>
                        <b:include data='post' name='post'/>
                        <b:include data='post' name='halaman'/>
                        <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
                      </article>

                      <!-- Ad -->
                      <b:if cond='data:post.includeAd'>
                        <div class='inline-ad'>
                          <data:adCode/>
                        </div>
                      </b:if>
                    </b:loop>
                    <div class='clear'/>
                  </div>

                  <!-- navigation -->
                  <b:include cond='data:blog.pageType == &quot;index&quot;' name='nextprev'/>

                  <!-- feed links -->
                  <b:include name='feedLinks'/>

                  <b:else/>
                  <b:include name='mobile-main'/>
                </b:if>

                <b:if cond='data:top.showPlusOne'>
                  <data:top.googlePlusBootstrap/>
                </b:if>

              </b:includable>
              <b:includable id='backlinkDeleteIcon' var='backlink'>
                <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
                  <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
                    <img src='//www.blogger.com/img/icon_delete13.gif'/>
                  </a>
                </span>
              </b:includable>
              <b:includable id='backlinks' var='post'>
                <a name='links'/><h4><data:post.backlinksLabel/></h4>
                <b:if cond='data:post.numBacklinks != 0'>
                  <dl class='comments-block' id='comments-block'>
                    <b:loop values='data:post.backlinks' var='backlink'>
                      <div class='collapsed-backlink backlink-control'>
                        <dt class='comment-title'>
                          <span class='backlink-toggle-zippy'>&#160;</span>
                          <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
                          <b:include data='backlink' name='backlinkDeleteIcon'/>
                        </dt>
                        <dd class='comment-body collapseable'>
                          <data:backlink.snippet/>
                        </dd>
                        <dd class='comment-footer collapseable'>
                          <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
                          <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
                        </dd>
                      </div>
                    </b:loop>
                  </dl>
                </b:if>
                <p class='comment-footer'>
                  <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
                </p>
              </b:includable>
              <b:includable id='breadcrumb' var='posts'>
                <b:if cond='data:blog.pageType != &quot;index&quot;'>
                  <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
                    <div class='breadcrumbs'><span class='breadhome'><a expr:href='data:blog.homepageUrl' rel='tag'>Home </a> <i class='fa fa-angle-right'/> </span><span class='breadlabel'><data:blog.pageName/></span></div>
                    <b:else/>
                    <b:if cond='data:blog.pageType == &quot;item&quot;'>
                      <!-- breadcrumb for the post page -->
                      <b:loop values='data:posts' var='post'>
                        <b:if cond='data:post.labels'>
                          <div class='breadcrumbs' xmlns:v='http://rdf.data-vocabulary.org/#'>
                            <span class='breadhome' typeof='v:Breadcrumb'><a expr:href='data:blog.homepageUrl' property='v:title' rel='v:url'>Home</a> <i class='fa fa-angle-right'/> </span>
                            <b:loop values='data:post.labels' var='label'>
                              <span class='breadlabel' typeof='v:Breadcrumb'><a expr:href='data:label.url + &quot;?&amp;amp;max-results=7&quot;' property='v:title' rel='v:url'><data:label.name/></a> <i class='fa fa-angle-right'/> </span>
                            </b:loop>
                            <span class='breadlabel'><data:post.title/></span>
                          </div>
                          <b:else/>
                          <div class='breadcrumbs'><span class='breadhome'><a expr:href='data:blog.homepageUrl' rel='tag'>Home</a> <i class='fa fa-angle-right'/> </span><span class='breadlabel'>Unlabelled</span> <i class='fa fa-angle-right'/> <span class='breadlabel'><data:post.title/></span></div>
                        </b:if>
                      </b:loop>
                      <b:else/>
                      <b:if cond='data:blog.pageType == &quot;archive&quot;'>
                        <!-- breadcrumb for the label archive page and search pages.. -->
                        <div class='breadcrumbs'>
                          <span class='breadhome'><a expr:href='data:blog.homepageUrl'>Home </a> <i class='fa fa-angle-right'/> </span><span>Archives for <data:blog.pageName/></span>
                        </div>
                        <b:else/>
                        <b:if cond='data:blog.pageType == &quot;index&quot;'>
                          <div class='breadcrumbs'>
                            <b:if cond='data:blog.pageName == &quot;&quot;'>
                              <span class='breadhome'><a expr:href='data:blog.homepageUrl'>Home</a> <i class='fa fa-angle-right'/> </span><span class='breadlabel'>All posts </span>
                              <b:else/>
                              <span class='breadhome'> <a expr:href='data:blog.homepageUrl'>Home</a> <i class='fa fa-angle-right'/> </span><span class='breadlabel'>Posts filed under <data:blog.pageName/></span>
                            </b:if>
                          </div>
                        </b:if>
                      </b:if>
                    </b:if>
                  </b:if>
                </b:if>
              </b:includable>
              <b:includable id='comment-form' var='post'>
                <div class='comment-form'>
                  <a name='comment-form'/>
                  <b:if cond='data:mobile'>
                    <h4 id='comment-post-message'>
                      <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
                    <p><data:blogCommentMessage/></p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                    <b:else/>
                    <h4 id='comment-post-message'><data:postCommentMsg/></h4>
                    <p><data:blogCommentMessage/></p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
                  </b:if>
                  <data:post.friendConnectJs/>
                  <data:post.cmtfpIframe/>
                  <script type='text/javascript'>
                    BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
                  </script>
                </div>
              </b:includable>
              <b:includable id='commentDeleteIcon' var='comment'>
                <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                  <b:if cond='data:showCmtPopup'>
                    <div class='goog-toggle-button'>
                      <div class='goog-inline-block comment-action-icon'/>
                    </div>
                    <b:else/>
                    <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
                      <img src='//www.blogger.com/img/icon_delete13.gif'/>
                    </a>
                  </b:if>
                </span>
              </b:includable>
              <b:includable id='comment_count_picker' var='post'>
                <b:if cond='data:post.commentSource == 1'>
                  <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'>
                  </span>
                  <b:else/>
                  <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                    <data:post.commentLabelFull/>:
                  </a>
                </b:if>
              </b:includable>
              <b:includable id='comment_picker' var='post'>
                <b:if cond='data:post.commentSource == 1'>
                  <b:include data='post' name='iframe_comments'/>
                  <b:elseif cond='data:post.showThreadedComments'/>
                  <b:include data='post' name='comments'/>
                  <b:else/>
                  <b:include data='post' name='comments'/>
                </b:if>
              </b:includable>
              <b:includable id='comments' var='post'>
                <div class='comments' id='comments'>
                  <b:if cond='data:post.allowComments'>

                    <b:if cond='data:post.numComments != 0'>
                      <h3>
                        <b:if cond='data:post.numComments == 1'>
                          1 <data:commentLabel/>
                          <b:else/>
                          <data:post.numComments/> <data:commentLabelPlural/>
                        </b:if>
                      </h3>
                      <b:else/>
                      <h3>0 <data:commentLabel/>
                      </h3>
                    </b:if>

                    <b:if cond='data:post.commentPagingRequired'>
                      <span class='paging-control-container'>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
                        &#160;
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
                        &#160;
                        <data:post.commentRangeText/>
                        &#160;
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
                        &#160;
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
                      </span>
                    </b:if>

                    <div class='clear'/>
                    <div id='comment_block'>
                      <b:loop values='data:post.comments' var='comment'>
                        <div data-level='0' expr:class='data:comment.adminClass' expr:id='data:comment.anchorName'> 
                          <b:if cond='data:post.adminClass == data:comment.adminClass'>
                            &lt;div class=&#39;comment_inner comment_admin&#39;&gt;
                            <b:else/>
                            &lt;div class=&#39;comment_inner&#39;&gt;
                          </b:if>
                          <div class='comment_header'>
                            <div class='comment_avatar'>
                              <img alt='avatar' expr:src='data:comment.authorAvatarSrc' expr:title='data:comment.author'/>
                            </div>
                            <div class='comment_name'>
                              <b:if cond='data:comment.authorUrl'>
                                <a expr:href='data:comment.authorUrl' rel='nofollow' target='_blank'><data:comment.author/></a>
                                <b:else/>
                                <data:comment.author/>
                              </b:if> 
                              <b:if cond='data:comment.author == data:post.author'>
                                <span class='comment_author_flag'>Author</span>
                              </b:if>  
                            </div>             
                            <div class='comment_service'>
                              <a expr:href='data:comment.url' rel='nofollow' title='permalink'><span class='comment_date'><data:comment.timestamp/></span></a>
                            </div>
                            <div class='clear'/>
                          </div> 
                          <div class='comment_body'>
                            <b:if cond='data:comment.isDeleted'>
                              <span class='deleted-comment'><data:comment.body/></span>
                              <b:else/>
                              <p><data:comment.body/></p>
                              <a class='comment-delete' expr:href='&quot;http://www.blogger.com/delete-comment.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot; + data:comment.id' expr:title='data:top.deleteCommentMsg'>
                                Delete
                              </a>
                              <a class='comment_reply' expr:href='&quot;#r_&quot;+data:comment.anchorName' expr:id='&quot;r&quot;+data:comment.anchorName' onclick='javascript:Display_Reply_Form(this)'>Reply</a>                                                            <div class='clear'/>                                          
                            </b:if>                                        
                          </div>
                          <div class='clear'/>
                          &lt;/div&gt;
                          <div class='clear'/>

                          <div class='comment_child'/>
                          <div class='comment_reply_form' expr:id='&quot;r_f_&quot;+data:comment.anchorName'/>               
                        </div>
                      </b:loop>               
                    </div>     
                    <div class='clear'/>
                    <b:if cond='data:post.commentPagingRequired'>
                      <span class='paging-control-container'>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
                        &#160;
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
                        &#160;
                        <data:post.commentRangeText/>
                        &#160;
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
                        &#160;
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
                      </span>
                    </b:if>
                    <div class='clear'/>
                    <div class='comment_form'>          

                      <b:if cond='data:post.embedCommentForm'>
                        <b:if cond='data:post.allowNewComments'>

                          <b:include data='post' name='threaded-comment-form'/>
                          <b:else/>
                          <data:post.noNewCommentsText/>
                        </b:if>
                        <b:else/>
                        <b:if cond='data:post.allowComments'>
                          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
                        </b:if>
                      </b:if>
                    </div>
                  </b:if>
                </div>

                <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
<script type='text/javascript'>

<b:if cond='data:post.numComments != 0'>
var Items = <data:post.commentJso/>;
var Msgs = <data:post.commentMsgs/>;
var Config = <data:post.commentConfig/>;
<b:else/>
var Items = {};
var Msgs = {};
var Config = {&#39;maxThreadDepth&#39;:&#39;0&#39;};
</b:if>
</script>
              </b:includable>
              <b:includable id='feedLinks'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
                  <b:if cond='data:feedLinks'>
                    <div class='blog-feeds'>
                      <b:include data='feedLinks' name='feedLinksBody'/>
                    </div>
                  </b:if>

                  <b:else/> <!--Post feed links -->
                  <div class='post-feeds'>
                    <b:loop values='data:posts' var='post'>
                      <b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/>
                    </b:loop>
                  </div>
                </b:if>
              </b:includable>
              <b:includable id='feedLinksBody' var='links'>
                <div class='feed-links'>
                  <data:feedLinksMsg/>
                  <b:loop values='data:links' var='f'>
                    <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
                  </b:loop>
                </div>
              </b:includable>
              <b:includable id='halaman' var='post'>
                <b:if cond='data:blog.pageType == &quot;item&quot;'>
                  <div class='halaman'>
                    <div class='halaman-kiri'>
                      <div class='isihalaman-kiri'>

                        <span id='blog-pager-newer-link'>
                          <span class='pager-title-left'>Next</span><br/>
                          <b:if cond='data:newerPageUrl'>
                            <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&#171; Next Post</a>
                            <b:else/>
                            <span class='current-page'> This is the most recent post.</span>
                          </b:if>
                        </span>
                      </div>
                    </div>
                    <div class='halaman-kanan'>
                      <div class='isihalaman-kanan'>

                        <span id='blog-pager-older-link'>
                          <span class='pager-title-left'>Previous</span><br/>
                          <b:if cond='data:olderPageUrl'>
                            <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>Prev Post &#187;</a>
                            <b:else/>
                            <span class='current-page'> This is the most last post.</span>
                          </b:if>
                        </span>              
                      </div>
                    </div>
                    <div class='clear'/>
                  </div>
                  <div class='clear'/>
                </b:if>  
              </b:includable>
              <b:includable id='iframe_comments' var='post'>

                <b:if cond='data:post.allowIframeComments'>
                  <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
                  <div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/>

                  <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
                    <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
                  </b:if>
                </b:if>
              </b:includable>
              <b:includable id='mobile-index-post' var='post'>
                <div class='mobile-date-outer date-outer'>
                  <b:if cond='data:post.dateHeader'>
                    <div class='date-header'>
                      <span><data:post.dateHeader/></span>
                    </div>
                  </b:if>

                  <div class='mobile-post-outer'>
                    <a expr:href='data:post.url'>
                      <h3 class='mobile-index-title entry-title' itemprop='name'>
                        <data:post.title/>
                      </h3>

                      <div class='mobile-index-arrow'>&amp;rsaquo;</div>

                      <div class='mobile-index-contents'>
                        <b:if cond='data:post.thumbnailUrl'>
                          <div class='mobile-index-thumbnail'>
                            <div class='Image'>
                              <img expr:src='data:post.thumbnailUrl'/>
                            </div>
                          </div>
                        </b:if>

                        <div class='post-body'>
                          <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
                        </div>
                      </div>

                      <div style='clear: both;'/>
                    </a>

                    <div class='mobile-index-comment'>
                      <b:include cond='data:blog.pageType != &quot;static_page&quot;                          and data:post.allowComments                          and data:post.numComments != 0' data='post' name='comment_count_picker'/>
                    </div>
                  </div>
                </div>
              </b:includable>
              <b:includable id='mobile-main' var='top'>
                <!-- posts -->
                <div class='blog-posts hfeed'>

                  <b:include data='top' name='status-message'/>

                  <b:if cond='data:blog.pageType == &quot;index&quot;'>
                    <b:loop values='data:posts' var='post'>
                      <b:include data='post' name='mobile-index-post'/>
                    </b:loop>
                    <b:else/>
                    <b:loop values='data:posts' var='post'>
                      <b:include data='post' name='mobile-post'/>
                    </b:loop>
                  </b:if>
                </div>

                <b:include name='mobile-nextprev'/>
              </b:includable>
              <b:includable id='mobile-nextprev'>
                <div class='blog-pager' id='blog-pager'>
                  <b:if cond='data:newerPageUrl'>
                    <div class='mobile-link-button' id='blog-pager-newer-link'>
                      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
                    </div>
                  </b:if>

                  <b:if cond='data:olderPageUrl'>
                    <div class='mobile-link-button' id='blog-pager-older-link'>
                      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
                    </div>
                  </b:if>

                  <div class='mobile-link-button' id='blog-pager-home-link'>
                    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
                  </div>

                  <div class='mobile-desktop-link'>
                    <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
                  </div>

                </div>
                <div class='clear'/>
              </b:includable>
              <b:includable id='mobile-post' var='post'>
                <div class='date-outer'>
                  <b:if cond='data:post.dateHeader'>
                    <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
                  </b:if>
                  <div class='date-posts'>
                    <div class='post-outer'>

                      <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
                        <b:if cond='data:post.thumbnailUrl'>
                          <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
                        </b:if>
                        <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                        <meta expr:content='data:post.id' itemprop='postId'/>

                        <a expr:name='data:post.id'/>
                        <b:if cond='data:post.title'>
                          <h3 class='post-title entry-title' itemprop='name'>
                            <b:if cond='data:post.link'>
                              <a expr:href='data:post.link'><data:post.title/></a>
                              <b:elseif cond='data:post.url and data:blog.url != data:post.url'/>
                              <a expr:href='data:post.url'><data:post.title/></a>
                              <b:else/>
                              <data:post.title/>
                            </b:if>
                          </h3>
                        </b:if>

                        <div class='post-header'>
                          <div class='post-header-line-1'/>
                        </div>

                        <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
                          <data:post.body/>
                          <div style='clear: both;'/> <!-- clear for photos floats -->
                        </div>

                        <div class='post-footer'>
                          <div class='post-footer-line post-footer-line-1'>
                            <span class='post-author vcard'>
                              <b:if cond='data:top.showAuthor'>
                                <b:if cond='data:post.authorProfileUrl'>
                                  <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                    <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                                    <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                                      <span itemprop='name'><data:post.author/></span>
                                    </a>
                                  </span>
                                  <b:else/>
                                  <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                                    <span itemprop='name'><data:post.author/></span>
                                  </span>
                                </b:if>
                              </b:if>
                            </span>

                            <span class='post-timestamp'>
                              <b:if cond='data:top.showTimestamp'>
                                <data:top.timestampLabel/>
                                <b:if cond='data:post.url'>
                                  <meta expr:content='data:post.url.canonical' itemprop='url'/>
                                  <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                                </b:if>
                              </b:if>
                            </span>

                            <span class='post-comment-link'>
                              <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                                  and data:post.allowComments' data='post' name='comment_count_picker'/>
                            </span>
                          </div>

                          <div class='post-footer-line post-footer-line-2'>
                            <b:if cond='data:top.showMobileShare'>
                              <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                                <a href='javascript:void(0);'><data:shareMsg/></a>
                              </div>
                            </b:if>
                            <b:if cond='data:top.showDummy'>
                              <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
                            </b:if>
                          </div>

                        </div>
                      </div>

                      <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
                    </div>
                  </div>
                </div>
              </b:includable>
              <b:includable id='nextprev'>
                <div class='blog-pager' id='blog-pager'>
                  <b:if cond='data:newerPageUrl'>
                    <span id='blog-pager-newer-link'>
                      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'/>
                    </span>
                  </b:if>

                  <b:if cond='data:olderPageUrl'>
                    <span id='blog-pager-older-link'>
                      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'/>
                    </span>
                  </b:if>

                  <a class='home-link' expr:href='data:blog.homepageUrl'/>

                  <b:if cond='data:mobileLinkUrl'>
                    <div class='blog-mobile-link'>
                      <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
                    </div>
                  </b:if>

                </div>
                <div class='clear'/>
              </b:includable>
              <b:includable id='post' var='post'>
                <div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
                  <b:if cond='data:post.firstImageUrl'>
                    <div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
                      <meta expr:content='data:post.firstImageUrl' itemprop='url'/>
                      <meta content='700' itemprop='width'/>
                      <meta content='700' itemprop='height'/>
                    </div>
                  </b:if>
                  <div itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'>
                    <div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
                      <meta content='http://3.bp.blogspot.com/-bkrcPUbWZrE/Vvnc_T9-JPI/AAAAAAAAAS4/efz03nJa5FomiVcgF87xjZG8R0mPIVF7w/s600-r/m_logo.png' itemprop='url'/>
                      <meta content='600' itemprop='width'/>
                      <meta content='600' itemprop='height'/>
                    </div>
                    <meta expr:content='data:blog.title' itemprop='name'/>
                  </div>   
                  <b:if cond='data:blog.pageType == &quot;index&quot;'>
                    <div class='post-gambar'>
                      <a expr:href='data:post.url' expr:title='data:post.title'>
                        <b:if cond='data:post.firstImageUrl'>
                        <img class='post-img' expr:alt='data:post.title' expr:data-src='resizeImage(data:post.firstImageUrl, 329, &quot;329:250&quot;)' expr:title='data:post.title' height='250' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' width='329'/>
                          <b:else/>
<img class='post-img' expr:alt='data:post.title' expr:data-src='resizeImage(&quot;https://2.bp.blogspot.com/-UD5hSPJ0YRA/VxjTIlmM_NI/AAAAAAAAAXs/Rjl6TdfSwwofU1XSFCCrqXucVpFCuT1rwCLcB/s1600/No%2BImage%2BDihak.png&quot;, 329, &quot;329:250&quot;)' expr:title='data:post.title' height='250' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' width='329'/>
                        </b:if>
<script>
//<![CDATA[
if($(window).width()<600&&$(window).width()>329){$('.post-img').each(function(){var t=$(this),s=t.attr('data-src').replace('w329','w'+t.parents('.post-outer').width());t.attr('data-src',s),t.attr('width',t.parents('.post-outer').width())})}
//]]>
</script>
                        <div class='post-bg'/>
                      </a>
                      <div class='post-atas'>
                        <div class='post-date'><a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published updated' expr:title='data:post.timestampISO8601' itemprop='datePublished dateModified'><data:post.timestamp/></abbr></a></div>
                        <h2 class='post-judul entry-title' itemprop='headline'>    
                          <a expr:href='data:post.url' expr:title='data:post.title' itemprop='url mainEntityOfPage'>
                            <data:post.title/>
                          </a>
                        </h2>
                      </div>
                      <span class='post-author vcard' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                        <a class='author fn' expr:href='data:post.authorProfileUrl' expr:title='data:post.author' itemprop='url' rel='author' target='_blank'>
                          <div class='nama-penulis' itemprop='name'><data:post.author/></div>
                          <img class='photo-penulis' expr:alt='data:post.author' expr:src='resizeImage(data:post.authorPhoto.url, 50, &quot;1:1&quot;)' expr:title='data:post.author' height='50' width='50'/>
                          <meta expr:content='data:post.authorPhoto.url' itemprop='image'/>
                        </a>
                      </span>

                    </div>
                  </b:if>
                  <div class='post-info'>
                    <b:if cond='data:blog.pageType == &quot;index&quot;'>
                      <div class='post-meta'>
                        <b:loop values='data:post.labels' var='label'>
                          <a expr:href='data:label.url' rel='tag'>#<data:label.name/></a>
                        </b:loop>
                      </div>
                      <div class='snippet' itemprop='description'>
                        <data:post.snippet/>
                      </div>
                    </b:if>
                    <b:if cond='data:blog.pageType != &quot;index&quot;'>
                      <b:if cond='data:post.title'>
                        <h1 class='post-title entry-title' itemprop='headline'>
                          <a expr:href='data:post.link ? data:post.link : data:post.url' itemprop='url mainEntityOfPage'><data:post.title/></a>
                        </h1>
                      </b:if>
                      <div class='post-meta'>
                        <span class='post-author-img'><a class='g-profile' data-gapiattached='true' data-gapiscan='true' data-onload='true' expr:href='data:post.authorProfileUrl' expr:title='data:post.author' rel='author'>
                          <img class='photo-penulis' expr:alt='data:post.author' expr:src='resizeImage(data:post.authorPhoto.url, 40, &quot;1:1&quot;)' expr:title='data:post.author' height='40' width='40'/>
                          </a></span>
                        <span class='post-author vcard post-author' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                          <span class='fn author'>
                            <a expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'>
                              <span itemprop='name'><data:post.author/></span>
                            </a>
                          </span>
                        </span>
                        <span class='post-dateheader'>
                          <span><a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published updated' expr:title='data:post.timestampISO8601' itemprop='datePublished dateModified'><data:post.timestamp/></abbr></a></span>
                        </span>
                        <span class='post-labels'>
                          <b:if cond='data:post.labels'>
                            | <b:loop values='data:post.labels' var='label'>
                            <a expr:href='data:label.url' rel='tag'>#<data:label.name/></a>
                            </b:loop>
                          </b:if>
                        </span>
                      </div>
                      <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'><data:post.body/></div>
                      <b:if cond='data:blog.pageType == &quot;item&quot;'>
                        <div class='related-post' id='related-post'/>
                        <script type='text/javascript'>var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if></b:loop></b:if>];</script>
                      </b:if>
                      <div class='sharepost'>
                        <ul>
                          <li><a class='facebook' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:blog.url' rel='nofollow' target='_blank' title='Facebook Share'><i class='fa fa-facebook'/>Share</a></li>
                          <li><a class='twitter' expr:href='&quot;http://twitter.com/share?url=&quot; + data:post.url' rel='nofollow' target='_blank' title='Twitter Tweet'><i class='fa fa-twitter'/>Tweet</a></li>
                          <li><a class='gplus' expr:href='&quot;http://plus.google.com/share?url=&quot; + data:blog.url' rel='nofollow' target='_blank' title='Google Plus Share'><i class='fa fa-google-plus'/>Share</a></li>
                          <li><a class='linkedin' expr:href='&quot;http://www.linkedin.com/shareArticle?mini=true&amp;amp;url=&quot; + data:post.url + &quot;&amp;amp;title=&quot; + data:post.title + &quot;&amp;amp;summary=&quot; + data:post.snippets' target='_blank' title='LinkedIn Share'><i class='fa fa-linkedin'/>Share</a></li>
                          <li><a class='pinterest' expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;amp;media=&quot; + data:post.thumbnailUrl + &quot;&amp;amp;description= + data:post.title&quot;' target='_blank' title='Pin It'><i class='fa fa-pinterest'/>Share</a></li>
                        </ul></div>
                    </b:if>
                  </div>
                </div>
              </b:includable>
              <b:includable id='postQuickEdit' var='post'>
                <b:if cond='data:post.editUrl'>
                  <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
                    <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
                      <img alt='' class='icon-action' height='18' src='//img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
                    </a>
                  </span>
                </b:if>
              </b:includable>
              <b:includable id='shareButtons' var='post'>
                <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if><b:if cond='data:top.showPlusOne'><div class='goog-inline-block google-plus-share-container'><data:post.googlePlusShareTag/></div></b:if>
              </b:includable>
              <b:includable id='status-message'>
                <b:if cond='data:navMessage'>
                  <div class='status-msg-wrap'>
                    <div class='status-msg-body'>
                      <data:navMessage/>
                    </div>
                    <div class='status-msg-border'>
                      <div class='status-msg-bg'>
                        <div class='status-msg-hidden'><data:navMessage/></div>
                      </div>
                    </div>
                  </div>
                  <div style='clear: both;'/>
                </b:if>
              </b:includable>
              <b:includable id='threaded-comment-form' var='post'>
                <div class='comment-form'>
                  <a name='comment-form'/>
                  <b:if cond='data:mobile'>
                    <p><data:blogCommentMessage/></p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                    <b:else/>
                    <div class='comment_emo_list'/>
                    <p><data:blogCommentMessage/></p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
                  </b:if>
                  <data:post.friendConnectJs/>
                  <data:post.cmtfpIframe/>
                  <script type='text/javascript'>
                    BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
                  </script>
                </div>
              </b:includable>
              <b:includable id='threaded_comment_js' var='post'>
                <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

                <script type='text/javascript'>
                  (function() {
                    var items = <data:post.commentJso/>;
                    var msgs = <data:post.commentMsgs/>;
                    var config = <data:post.commentConfig/>;

                    // <![CDATA[
                    var cursor = null;
                    if (items && items.length > 0) {
                      cursor = parseInt(items[items.length - 1].timestamp) + 1;
                    }

                    var bodyFromEntry = function(entry) {
                      if (entry.gd$extendedProperty) {
                        for (var k in entry.gd$extendedProperty) {
                          if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
                            return '<span class="deleted-comment">' + entry.content.$t + '</span>';
                          }
                        }
                      }
                      return entry.content.$t;
                    }

                    var parse = function(data) {
                      cursor = null;
                      var comments = [];
                      if (data && data.feed && data.feed.entry) {
                        for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
                          var comment = {};
                          // comment ID, parsed out of the original id format
                          var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
                          comment.id = id ? id[2] : null;
                          comment.body = bodyFromEntry(entry);
                          comment.timestamp = Date.parse(entry.published.$t) + '';
                          if (entry.author && entry.author.constructor === Array) {
                            var auth = entry.author[0];
                            if (auth) {
                              comment.author = {
                                name: (auth.name ? auth.name.$t : undefined),
                                profileUrl: (auth.uri ? auth.uri.$t : undefined),
                                avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                              };
                            }
                          }
                          if (entry.link) {
                            if (entry.link[2]) {
                              comment.link = comment.permalink = entry.link[2].href;
                            }
                            if (entry.link[3]) {
                              var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                              if (pid && pid[1]) {
                                comment.parentId = pid[1];
                              }
                            }
                          }
                          comment.deleteclass = 'item-control blog-admin';
                          if (entry.gd$extendedProperty) {
                            for (var k in entry.gd$extendedProperty) {
                              if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                                comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                              } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                                comment.displayTime = entry.gd$extendedProperty[k].value;
                              }
                            }
                          }
                          comments.push(comment);
                        }
                      }
                      return comments;
                    };

                    var paginator = function(callback) {
                      if (hasMore()) {
                        var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
                        if (cursor) {
                          url += '&published-min=' + new Date(cursor).toISOString();
                        }
                        window.bloggercomments = function(data) {
                          var parsed = parse(data);
                          cursor = parsed.length < 50 ? null
                          : parseInt(parsed[parsed.length - 1].timestamp) + 1
                          callback(parsed);
                          window.bloggercomments = null;
                        }
                        url += '&callback=bloggercomments';
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = url;
                        document.getElementsByTagName('head')[0].appendChild(script);
                      }
                    };
                    var hasMore = function() {
                      return !!cursor;
                    };
                    var getMeta = function(key, comment) {
                      if ('iswriter' == key) {
                        var matches = !!comment.author
                        && comment.author.name == config.authorName
                        && comment.author.profileUrl == config.authorUrl;
                        return matches ? 'true' : '';
                      } else if ('deletelink' == key) {
                        return config.baseUri + '/delete-comment.g?blogID='
                        + config.blogId + '&postID=' + comment.id;
                      } else if ('deleteclass' == key) {
                        return comment.deleteclass;
                      }
                      return '';
                    };

                    var replybox = null;
                    var replyUrlParts = null;
                    var replyParent = undefined;

                    var onReply = function(commentId, domId) {
                      if (replybox == null) {
                        // lazily cache replybox, and adjust to suit this style:
                        replybox = document.getElementById('comment-editor');
                        if (replybox != null) {
                          replybox.height = '250px';
                          replybox.style.display = 'block';
                          replyUrlParts = replybox.src.split('#');
                        }
                      }
                      if (replybox && (commentId !== replyParent)) {
                        replybox.src = '';
                        document.getElementById(domId).insertBefore(replybox, null);
                        replybox.src = replyUrlParts[0]
                        + (commentId ? '&parentID=' + commentId : '')
                        + '#' + replyUrlParts[1];
                        replyParent = commentId;
                      }
                    };

                    var hash = (window.location.hash || '#').substring(1);
                    var startThread, targetComment;
                    if (/^comment-form_/.test(hash)) {
                      startThread = hash.substring('comment-form_'.length);
                    } else if (/^c[0-9]+$/.test(hash)) {
                      targetComment = hash.substring(1);
                    }

                    // Configure commenting API:
                    var configJso = {
                      'maxDepth': config.maxThreadDepth
                    };
                    var provider = {
                      'id': config.postId,
                      'data': items,
                      'loadNext': paginator,
                      'hasMore': hasMore,
                      'getMeta': getMeta,
                      'onReply': onReply,
                      'rendered': true,
                      'initComment': targetComment,
                      'initReplyThread': startThread,
                      'config': configJso,
                      'messages': msgs
                    };

                    var render = function() {
                      if (window.goog && window.goog.comments) {
                        var holder = document.getElementById('comment-holder');
                        window.goog.comments.render(holder, provider);
                      }
                    };

                    // render now, or queue to render when library loads:
                    if (window.goog && window.goog.comments) {
                      render();
                    } else {
                      window.goog = window.goog || {};
                      window.goog.comments = window.goog.comments || {};
                      window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
                      window.goog.comments.loadQueue.push(render);
                    }
                  })();
                  // ]]>
                </script>
              </b:includable>
              <b:includable id='threaded_comments' var='post'>
                <div class='comments' id='comments'>
                  <a name='comments'/>
                  <h4><data:post.commentLabelFull/></h4>

                  <div class='comments-content'>
                    <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
                    <div id='comment-holder'>
                      <data:post.commentHtml/>
                    </div>
                  </div>

                  <p class='comment-footer'>
                    <b:if cond='data:post.allowNewComments'>
                      <b:include data='post' name='threaded-comment-form'/>
                      <b:else/>
                      <data:post.noNewCommentsText/>
                    </b:if>
                  </p>

                  <b:if cond='data:showCmtPopup'>
                    <div id='comment-popup'>
                      <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                      </iframe>
                    </div>
                  </b:if>

                  <div id='backlinks-container'>
                    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
                      <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
                    </div>
                  </div>
                </div>
              </b:includable>
            </b:widget>
          </b:section>
		</div>
    </div>
    <div id='sidebar-wrapper'>
      <div class='sidebar-inner' id='sidebar'>
        <b:section class='sidebar' id='sidebar-atas' showaddelement='yes'>
          <b:widget id='LinkList2' locked='false' title='Social Media' type='LinkList' version='1' visible='true'>
            <b:includable id='main'>

              <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
              <div class='widget-content social'>
                <ul>
                  <b:loop values='data:links' var='link'>
                    <li expr:class='data:link.name'><a expr:href='data:link.target' expr:title='data:link.name' rel='nofollow' target='_blank'><span class='icon-social'/><span class='hide-count'><data:link.name/></span><span class='item-count'/><span class='social-name'/><span class='social-tombol'/></a></li>
                  </b:loop>
                </ul>
              </div>
            </b:includable>
          </b:widget>
        </b:section>
        <div id='stickywidget'>
          <b:section class='tab-sidebar' id='tab-sidebar' maxwidgets='3' showaddelement='yes'>
            <b:widget id='PopularPosts1' locked='false' title='Popular' type='PopularPosts' version='1' visible='true'>
              <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='!data:showThumbnails'>
          <b:if cond='!data:showSnippets'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <!-- (3) Show only thumbnails or (4) Snippets and thumbnails. -->
          <div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'>
            <b:if cond='data:post.thumbnail'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.href' target='_blank'>
                  <img expr:alt='data:post.title' expr:src='resizeImage(data:post.thumbnail, 72, &quot;1:1&quot;)' expr:title='data:post.title' height='72' width='72'/>
                </a>
              </div>
            </b:if>
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <b:if cond='data:showSnippets'>
              <div class='item-snippet'><data:post.snippet/></div>
            </b:if>
          </div>
          <div style='clear: both;'/>
        </b:if>
      </li>
      </b:loop>
    </ul>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='BlogArchive1' locked='false' title='Archive' type='BlogArchive' version='1' visible='true'>
              <b:includable id='main'>
                <b:if cond='data:title != &quot;&quot;'>
                  <h2><data:title/></h2>
                </b:if>
                <div class='widget-content'>
                  <div id='ArchiveList'>
                    <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
                      <b:include cond='data:style == &quot;HIERARCHY&quot;' data='data' name='interval'/>
                      <b:include cond='data:style == &quot;FLAT&quot;' data='data' name='flat'/>
                      <b:include cond='data:style == &quot;MENU&quot;' data='data' name='menu'/>
                    </div>
                  </div>
                </div>
              </b:includable>
              <b:includable id='flat' var='data'>
                <ul class='flat'>
                  <b:loop values='data:data' var='i'>
                    <li class='archivedate'>
                      <a expr:href='data:i.url'><data:i.name/></a> (<data:i.post-count/>)
                    </li>
                  </b:loop>
                </ul>
              </b:includable>
              <b:includable id='interval' var='intervalData'>
                <b:loop values='data:intervalData' var='interval'>
                  <ul class='hierarchy'>
                    <li expr:class='&quot;archivedate &quot; + data:interval.expclass'>
                      <b:include cond='data:interval.toggleId' data='interval' name='toggle'/>
                      <a class='post-count-link' expr:href='data:interval.url'>
                        <data:interval.name/>
                      </a>
                      <span class='post-count' dir='ltr'>(<data:interval.post-count/>)</span>
                      <b:include cond='data:interval.data' data='interval.data' name='interval'/>
                      <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
                    </li>
                  </ul>
                </b:loop>
              </b:includable>
              <b:includable id='menu' var='data'>
                <select expr:id='data:widget.instanceId + &quot;_ArchiveMenu&quot;'>
                  <option value=''><data:title/></option>
                  <b:loop values='data:data' var='i'>
                    <option expr:value='data:i.url'><data:i.name/> (<data:i.post-count/>)</option>
                  </b:loop>
                </select>
              </b:includable>
              <b:includable id='posts' var='posts'>
                <ul class='posts'>
                  <b:loop values='data:posts' var='post'>
                    <li><a expr:href='data:post.url'><data:post.title/></a></li>
                  </b:loop>
                </ul>
              </b:includable>
              <b:includable id='toggle' var='interval'>
                <a class='toggle' href='javascript:void(0)'>
                  <span expr:class='&quot;zippy&quot; + (data:interval.expclass == &quot;expanded&quot; ? &quot; toggle-open&quot; : &quot;&quot;)'>
                    <b:if cond='data:interval.expclass == &quot;expanded&quot;'>
                      &#9660;&#160;
                      <b:elseif cond='data:blog.languageDirection == &quot;rtl&quot;'/>
                      &#9668;&#160;
                      <b:else/>
                      &#9658;&#160;
                    </b:if>
                  </span>
                </a>
              </b:includable>
            </b:widget>
            <b:widget id='HTML5' locked='false' title='Comment' type='HTML' version='1' visible='true'>
              <b:includable id='main'>
                <!-- only display title if it's non-empty -->
                <b:if cond='data:title != &quot;&quot;'>
                  <h2 class='title'><data:title/></h2>
                </b:if>
                <div class='widget-content'>
                  <data:content/>
                </div>
              </b:includable>
            </b:widget>
          </b:section>
          <b:section class='sidebar' id='sidebar-bawah' showaddelement='yes'>
            <b:widget id='Label1' locked='false' title='[fa fa-tag] Category' type='Label' version='1' visible='true'>
              <b:includable id='main'>
                <b:if cond='data:title != &quot;&quot;'>
                  <h2><data:title/></h2>
                </b:if>
                <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
                  <b:if cond='data:display == &quot;list&quot;'>
                    <ul>
                      <b:loop values='data:labels' var='label'>
                        <li>
                          <b:if cond='data:blog.url == data:label.url'>
                            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
                            <b:else/>
                            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
                          </b:if>
                          <b:if cond='data:showFreqNumbers'>
                            <span dir='ltr'>(<data:label.count/>)</span>
                          </b:if>
                        </li>
                      </b:loop>
                    </ul>
                    <b:else/>
                    <b:loop values='data:labels' var='label'>
                      <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
                        <b:if cond='data:blog.url == data:label.url'>
                          <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
                          <b:else/>
                          <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
                        </b:if>
                        <b:if cond='data:showFreqNumbers'>
                          <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
                        </b:if>
                      </span>
                    </b:loop>
                  </b:if>
                  <div class='clear'/>
                </div>
              </b:includable>
            </b:widget>
            <b:widget id='HTML2' locked='false' title='Facebook' type='HTML' version='1' visible='true'>
              <b:includable id='main'>
                <!-- only display title if it's non-empty -->
                <b:if cond='data:title != &quot;&quot;'>
                  <h2 class='title'><data:title/></h2>
                </b:if>
                <div class='widget-content'>
                  <data:content/>
                </div>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
      </div>
    </div>
    <div class='clear'/>
    </div>
    <footer id='footer-wrapper' itemprop='mainEntity' itemscope='itemscope' itemtype='http://schema.org/WPFooter'>
      <div class='footer-widget'>
        <b:section class='footer' id='footer-1' showaddelement='yes'>
          <b:widget id='HTML3' locked='false' title='About Material Blogger' type='HTML' version='1' visible='true'>
            <b:includable id='main'>
              <!-- only display title if it's non-empty -->
              <b:if cond='data:title != &quot;&quot;'>
                <h2 class='title'><data:title/></h2>
              </b:if>
              <div class='widget-content'>
                <data:content/>
              </div>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section class='footer' id='footer-2' showaddelement='yes'>
          <b:widget id='LinkList1' locked='false' title='Daftar Link' type='LinkList' version='1' visible='true'>
            <b:includable id='main'>

              <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
              <div class='widget-content'>
                <ul>
                  <b:loop values='data:links' var='link'>
                    <li><a expr:href='data:link.target'><data:link.name/></a></li>
                  </b:loop>
                </ul>
              </div>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section class='footer' id='footer-3' showaddelement='yes'>
          <b:widget id='FollowByEmail1' locked='false' title='Follow by Email' type='FollowByEmail' version='1' visible='true'>
            <b:includable id='main'>
              <b:if cond='data:title != &quot;&quot;'><h2 class='title'><data:title/></h2></b:if>
              <div class='widget-content'>
                <div class='emailfooter'>
                  <p>Subscribe here to receive new updates</p>
                  <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
                    <input name='email' onblur='if (this.value == &quot;&quot;) {this.value = &quot;Email address&quot;;}' onfocus='if (this.value == &quot;Email address&quot;) {this.value = &quot;&quot;;}' type='text' value='Email address'/>
                    <input class='submitfooter' type='submit' value='Submit'/>
                    <input expr:value='data:feedPath' name='uri' type='hidden'/>
                    <input name='loc' type='hidden' value='en_US'/>
                  </form>
                </div>
              </div>
              <span class='item-control blog-admin'>
              </span>
            </b:includable>
          </b:widget>
        </b:section>
      </div>
      <div class='clear'/>
var _0x3340=["\x68\x6F\x76\x65\x72\x54\x69\x6D\x65\x6F\x75\x74","\x66\x6E","\x63\x61\x6C\x6C","\x68\x6F\x76\x65\x72","\x65\x61\x63\x68","\x5A\x65\x70\x74\x6F","\x6A\x51\x75\x65\x72\x79","\x73\x65\x74\x74\x69\x6E\x67\x73","\x6F\x70\x74\x69\x6F\x6E\x73","\x65\x78\x74\x65\x6E\x64","\x24\x65\x6C\x65\x6D\x65\x6E\x74","\x64\x72\x61\x67","\x73\x74\x61\x74\x65","\x65","\x5F\x70\x6C\x75\x67\x69\x6E\x73","\x5F\x73\x75\x70\x72\x65\x73\x73","\x5F\x63\x75\x72\x72\x65\x6E\x74","\x5F\x73\x70\x65\x65\x64","\x5F\x63\x6F\x6F\x72\x64\x69\x6E\x61\x74\x65\x73","\x5F\x62\x72\x65\x61\x6B\x70\x6F\x69\x6E\x74","\x5F\x77\x69\x64\x74\x68","\x5F\x69\x74\x65\x6D\x73","\x5F\x63\x6C\x6F\x6E\x65\x73","\x5F\x6D\x65\x72\x67\x65\x72\x73","\x5F\x69\x6E\x76\x61\x6C\x69\x64\x61\x74\x65\x64","\x5F\x70\x69\x70\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x73\x6C\x69\x63\x65","\x70\x72\x6F\x78\x79","\x66\x69\x6C\x74\x65\x72","\x72\x75\x6E","\x70\x75\x73\x68","\x73\x65\x74\x75\x70","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65","\x74\x6F\x75\x63\x68\x65\x73","\x70\x61\x67\x65\x58","\x70\x61\x67\x65\x59","\x63\x6C\x69\x65\x6E\x74\x58","\x63\x6C\x69\x65\x6E\x74\x59","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x73\x74\x79\x6C\x65","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x57\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x4D\x6F\x7A\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x4F\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x57\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x4D\x6F\x7A\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x4F\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x6D\x73\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x70\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65","\x77\x65\x62\x6B\x69\x74\x50\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65","\x4D\x6F\x7A\x50\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65","\x4F\x50\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65","\x4D\x73\x50\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65","\x6F\x6E\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x6D\x73\x4D\x61\x78\x54\x6F\x75\x63\x68\x50\x6F\x69\x6E\x74\x73","\x6D\x73\x50\x6F\x69\x6E\x74\x65\x72\x45\x6E\x61\x62\x6C\x65\x64","\x6E\x61\x76\x69\x67\x61\x74\x6F\x72","\x44\x65\x66\x61\x75\x6C\x74\x73","\x73\x77\x69\x6E\x67","\x6F\x77\x6C\x2D\x74\x68\x65\x6D\x65","\x6F\x77\x6C\x2D\x63\x61\x72\x6F\x75\x73\x65\x6C","\x6F\x77\x6C\x2D\x69\x74\x65\x6D","\x63\x65\x6E\x74\x65\x72","\x61\x63\x74\x69\x76\x65","\x57\x69\x64\x74\x68","\x64\x65\x66\x61\x75\x6C\x74","\x69\x6E\x6E\x65\x72","\x6F\x75\x74\x65\x72","\x50\x6C\x75\x67\x69\x6E\x73","\x50\x69\x70\x65","\x77\x69\x64\x74\x68","\x69\x74\x65\x6D\x73","\x63\x75\x72\x72\x65\x6E\x74","\x72\x65\x6C\x61\x74\x69\x76\x65","\x2E\x63\x6C\x6F\x6E\x65\x64","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x24\x73\x74\x61\x67\x65","\x6C\x65\x6E\x67\x74\x68","\x6C\x6F\x6F\x70","\x72\x65\x6D\x6F\x76\x65","\x6D\x61\x78","\x61\x62\x73","\x65\x71","\x70\x6F\x70","\x63\x6C\x6F\x6E\x65\x64","\x61\x64\x64\x43\x6C\x61\x73\x73","\x63\x6C\x6F\x6E\x65","\x61\x70\x70\x65\x6E\x64","\x70\x72\x65\x70\x65\x6E\x64","\x72\x74\x6C","\x74\x6F\x46\x69\x78\x65\x64","\x6D\x65\x72\x67\x65\x46\x69\x74","\x6D\x69\x6E","\x61\x75\x74\x6F\x57\x69\x64\x74\x68","\x6D\x61\x72\x67\x69\x6E","\x73\x74\x61\x67\x65\x50\x61\x64\x64\x69\x6E\x67","","\x63\x73\x73","\x61\x75\x74\x6F","\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74","\x6D\x61\x72\x67\x69\x6E\x2D\x72\x69\x67\x68\x74","\x67\x72\x65\x70","\x69\x6E\x64\x65\x78","\x72\x65\x73\x65\x74","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x63\x6F\x6F\x72\x64\x69\x6E\x61\x74\x65\x73","\x61\x6E\x69\x6D\x61\x74\x65","\x3C\x3D","\x6F\x70","\x3E","\x3C","\x61\x63\x74\x69\x76\x65\x43\x6C\x61\x73\x73","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E","\x3A\x65\x71\x28","\x29\x2C\x20\x3A\x65\x71\x28","\x6A\x6F\x69\x6E","\x29","\x63\x65\x6E\x74\x65\x72\x43\x6C\x61\x73\x73","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x74\x72\x69\x67\x67\x65\x72","\x6F\x77\x6C\x2D\x72\x74\x6C","\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73","\x74\x68\x65\x6D\x65\x43\x6C\x61\x73\x73","\x62\x61\x73\x65\x43\x6C\x61\x73\x73","\x62\x72\x6F\x77\x73\x65\x72\x53\x75\x70\x70\x6F\x72\x74","\x69\x6D\x61\x67\x65\x73\x4C\x6F\x61\x64\x65\x64","\x69\x6D\x67","\x66\x69\x6E\x64","\x6E\x65\x73\x74\x65\x64\x49\x74\x65\x6D\x53\x65\x6C\x65\x63\x74\x6F\x72","\x70\x72\x65\x6C\x6F\x61\x64\x41\x75\x74\x6F\x57\x69\x64\x74\x68\x49\x6D\x61\x67\x65\x73","\x6F\x77\x6C\x2D\x6C\x6F\x61\x64\x69\x6E\x67","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x77\x6C\x2D\x73\x74\x61\x67\x65\x2D\x6F\x75\x74\x65\x72\x22\x3E","\x77\x72\x61\x70","\x73\x74\x61\x67\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x77\x6C\x2D\x73\x74\x61\x67\x65\x22\x2F\x3E","\x70\x61\x72\x65\x6E\x74","\x6E\x6F\x74","\x72\x65\x70\x6C\x61\x63\x65","\x72\x65\x66\x72\x65\x73\x68","\x6F\x77\x6C\x2D\x6C\x6F\x61\x64\x65\x64","\x65\x76\x65\x6E\x74\x73\x43\x61\x6C\x6C","\x69\x6E\x74\x65\x72\x6E\x61\x6C\x45\x76\x65\x6E\x74\x73","\x61\x64\x64\x54\x72\x69\x67\x67\x65\x72\x61\x62\x6C\x65\x45\x76\x65\x6E\x74\x73","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x64","\x76\x69\x65\x77\x70\x6F\x72\x74","\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65","\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x43\x6C\x61\x73\x73","\x6F\x77\x6C\x2D\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x2D","\x63\x6C\x61\x73\x73","\x61\x74\x74\x72","\x63\x68\x61\x6E\x67\x65","\x69\x6E\x76\x61\x6C\x69\x64\x61\x74\x65","\x63\x68\x61\x6E\x67\x65\x64","\x6F\x70\x74\x69\x6F\x6E\x73\x4C\x6F\x67\x69\x63","\x6F\x77\x6C\x2D\x63\x65\x6E\x74\x65\x72","\x6D\x65\x72\x67\x65","\x70\x72\x65\x70\x61\x72\x65","\x64\x61\x74\x61","\x69\x74\x65\x6D\x43\x6C\x61\x73\x73","\x69\x74\x65\x6D\x45\x6C\x65\x6D\x65\x6E\x74","\x2F\x3E","\x70\x72\x65\x70\x61\x72\x65\x64","\x75\x70\x64\x61\x74\x65","\x61\x6C\x6C","\x49\x6E\x6E\x65\x72","\x4F\x75\x74\x65\x72","\x44\x65\x66\x61\x75\x6C\x74","\x67\x65\x74\x54\x69\x6D\x65","\x6F\x77\x6C\x2D\x72\x65\x66\x72\x65\x73\x68","\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E","\x77\x61\x74\x63\x68\x56\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x72\x65\x66\x72\x65\x73\x68\x65\x64","\x5F\x6F\x6E\x44\x72\x61\x67\x53\x74\x61\x72\x74","\x6F\x6E\x44\x72\x61\x67\x53\x74\x61\x72\x74","\x5F\x6F\x6E\x44\x72\x61\x67\x4D\x6F\x76\x65","\x6F\x6E\x44\x72\x61\x67\x4D\x6F\x76\x65","\x5F\x6F\x6E\x44\x72\x61\x67\x45\x6E\x64","\x6F\x6E\x44\x72\x61\x67\x45\x6E\x64","\x5F\x6F\x6E\x52\x65\x73\x69\x7A\x65","\x6F\x6E\x52\x65\x73\x69\x7A\x65","\x5F\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x5F\x70\x72\x65\x76\x65\x6E\x74\x43\x6C\x69\x63\x6B","\x70\x72\x65\x76\x65\x6E\x74\x43\x6C\x69\x63\x6B","\x6F\x6E\x54\x68\x72\x6F\x74\x74\x6C\x65\x64\x52\x65\x73\x69\x7A\x65","\x72\x65\x73\x69\x7A\x65\x54\x69\x6D\x65\x72","\x63\x6C\x65\x61\x72\x54\x69\x6D\x65\x6F\x75\x74","\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x52\x65\x66\x72\x65\x73\x68\x52\x61\x74\x65","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x69\x73\x44\x65\x66\x61\x75\x6C\x74\x50\x72\x65\x76\x65\x6E\x74\x65\x64","\x72\x65\x73\x69\x7A\x65","\x72\x65\x73\x69\x7A\x65\x64","\x65\x76\x65\x6E\x74\x73\x52\x6F\x75\x74\x65\x72","\x74\x79\x70\x65","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65","\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65","\x6D\x6F\x75\x73\x65\x75\x70","\x74\x6F\x75\x63\x68\x65\x6E\x64","\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C","\x6D\x6F\x75\x73\x65\x44\x72\x61\x67","\x6F\x6E","\x64\x72\x61\x67\x73\x74\x61\x72\x74","\x6F\x6E\x73\x65\x6C\x65\x63\x74\x73\x74\x61\x72\x74","\x67\x65\x74","\x6F\x77\x6C\x2D\x74\x65\x78\x74\x2D\x73\x65\x6C\x65\x63\x74\x2D\x6F\x6E","\x74\x6F\x75\x63\x68\x44\x72\x61\x67","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x20\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64\x56\x65\x6E\x64\x6F\x72","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x45\x76\x65\x6E\x74","\x65\x76\x65\x6E\x74","\x77\x68\x69\x63\x68","\x69\x73\x54\x6F\x75\x63\x68","\x6F\x77\x6C\x2D\x67\x72\x61\x62","\x73\x74\x61\x72\x74\x54\x69\x6D\x65","\x73\x70\x65\x65\x64","\x69\x73\x53\x63\x72\x6F\x6C\x6C\x69\x6E\x67","\x69\x73\x53\x77\x69\x70\x69\x6E\x67","\x64\x69\x73\x74\x61\x6E\x63\x65","\x78","\x79","\x6F\x66\x66\x73\x65\x74\x58","\x6C\x65\x66\x74","\x6F\x66\x66\x73\x65\x74\x59","\x74\x6F\x70","\x69\x6E\x4D\x6F\x74\x69\x6F\x6E","\x73\x75\x70\x70\x6F\x72\x74\x33\x64","\x67\x65\x74\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D\x50\x72\x6F\x70\x65\x72\x74\x79","\x73\x74\x61\x72\x74\x58","\x73\x74\x61\x72\x74\x59","\x73\x74\x61\x72\x74","\x74\x61\x72\x67\x65\x74\x45\x6C","\x74\x61\x72\x67\x65\x74","\x73\x72\x63\x45\x6C\x65\x6D\x65\x6E\x74","\x75\x70\x64\x61\x74\x65\x64\x58","\x49\x4D\x47","\x74\x61\x67\x4E\x61\x6D\x65","\x41","\x64\x72\x61\x67\x67\x61\x62\x6C\x65","\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65\x2E\x6F\x77\x6C\x2E\x64\x72\x61\x67\x45\x76\x65\x6E\x74\x73\x20\x6D\x6F\x75\x73\x65\x75\x70\x2E\x6F\x77\x6C\x2E\x64\x72\x61\x67\x45\x76\x65\x6E\x74\x73\x20\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65\x2E\x6F\x77\x6C\x2E\x64\x72\x61\x67\x45\x76\x65\x6E\x74\x73\x20\x74\x6F\x75\x63\x68\x65\x6E\x64\x2E\x6F\x77\x6C\x2E\x64\x72\x61\x67\x45\x76\x65\x6E\x74\x73","\x63\x75\x72\x72\x65\x6E\x74\x58","\x63\x75\x72\x72\x65\x6E\x74\x59","\x64\x69\x72\x65\x63\x74\x69\x6F\x6E","\x72\x69\x67\x68\x74","\x6D\x69\x6E\x69\x6D\x75\x6D","\x6D\x61\x78\x69\x6D\x75\x6D","\x70\x75\x6C\x6C\x44\x72\x61\x67","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x72\x65\x74\x75\x72\x6E\x56\x61\x6C\x75\x65","\x64\x72\x61\x67\x67\x65\x64","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x65\x6E\x64\x54\x69\x6D\x65","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x69\x63\x6B","\x63\x6C\x6F\x73\x65\x73\x74","\x64\x72\x61\x67\x45\x6E\x64\x53\x70\x65\x65\x64","\x73\x6D\x61\x72\x74\x53\x70\x65\x65\x64","\x2E\x6F\x77\x6C\x2E\x64\x72\x61\x67\x45\x76\x65\x6E\x74\x73","\x6F\x66\x66","\x63\x6C\x69\x63\x6B\x2E\x70\x72\x65\x76\x65\x6E\x74\x43\x6C\x69\x63\x6B","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x76\x65\x6E\x64\x6F\x72\x4E\x61\x6D\x65","\x67\x65\x74\x50\x72\x6F\x70\x65\x72\x74\x79\x56\x61\x6C\x75\x65","\x67\x65\x74\x43\x6F\x6D\x70\x75\x74\x65\x64\x53\x74\x79\x6C\x65","\x2C","\x73\x70\x6C\x69\x74","\x66\x72\x65\x65\x44\x72\x61\x67","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65",                        "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28","\x70\x78\x2C\x30\x70\x78\x2C\x20\x30\x70\x78\x29","\x73","\x70\x78","\x66\x61\x6C\x6C\x62\x61\x63\x6B\x45\x61\x73\x69\x6E\x67","\x6E\x6F\x72\x6D\x61\x6C\x69\x7A\x65","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x64","\x73\x75\x70\x70\x72\x65\x73\x73","\x72\x65\x6C\x65\x61\x73\x65","\x69\x73\x4E\x75\x6D\x65\x72\x69\x63","\x43\x61\x6E\x20\x6E\x6F\x74\x20\x64\x65\x74\x65\x63\x74\x20\x6D\x61\x78\x69\x6D\x75\x6D\x20\x61\x62\x73\x6F\x6C\x75\x74\x65\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2E","\x6D\x65\x72\x67\x65\x72\x73","\x63\x6C\x6F\x6E\x65\x73","\x6D\x61\x70","\x64\x75\x72\x61\x74\x69\x6F\x6E","\x74\x6F","\x5F\x67\x6F\x54\x6F\x4C\x6F\x6F\x70","\x6E\x65\x78\x74","\x70\x72\x65\x76","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x54\x61\x72\x67\x65\x74","\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x42\x61\x73\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x63\x6C\x69\x65\x6E\x74\x57\x69\x64\x74\x68","\x43\x61\x6E\x20\x6E\x6F\x74\x20\x64\x65\x74\x65\x63\x74\x20\x76\x69\x65\x77\x70\x6F\x72\x74\x20\x77\x69\x64\x74\x68\x2E","\x65\x6D\x70\x74\x79","\x64\x61\x74\x61\x2D\x6D\x65\x72\x67\x65","\x5B\x64\x61\x74\x61\x2D\x6D\x65\x72\x67\x65\x5D","\x61\x6E\x64\x53\x65\x6C\x66","\x6E\x6F\x64\x65\x54\x79\x70\x65","\x73\x74\x61\x72\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x61\x64\x64","\x62\x65\x66\x6F\x72\x65","\x73\x70\x6C\x69\x63\x65","\x61\x64\x64\x65\x64","\x72\x65\x6D\x6F\x76\x65\x64","\x72\x65\x6C\x61\x74\x65\x64\x54\x61\x72\x67\x65\x74","\x61\x70\x70\x6C\x79","\x64\x65\x73\x74\x72\x6F\x79","\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C","\x6F\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68","\x6F\x66\x66\x73\x65\x74\x48\x65\x69\x67\x68\x74","\x6F\x77\x6C\x2D\x68\x69\x64\x64\x65\x6E","\x63\x6C\x65\x61\x72\x49\x6E\x74\x65\x72\x76\x61\x6C","\x5F\x63\x68\x65\x63\x6B\x56\x69\x73\x69\x62\x69\x6C\x65","\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C","\x6F\x6E\x6C\x6F\x61\x64","\x73\x72\x63","\x6F\x70\x61\x63\x69\x74\x79","\x64\x61\x74\x61\x2D\x73\x72\x63","\x64\x61\x74\x61\x2D\x73\x72\x63\x2D\x72\x65\x74\x69\x6E\x61","\x68\x61\x73\x43\x6C\x61\x73\x73","\x72\x65\x73\x69\x7A\x65\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x20\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x20\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C","\x2E\x6F\x77\x6C","\x6F\x77\x6C\x43\x61\x72\x6F\x75\x73\x65\x6C","\x72\x65\x6D\x6F\x76\x65\x44\x61\x74\x61","\x75\x6E\x77\x72\x61\x70","\x63\x6F\x6E\x74\x65\x6E\x74\x73","\x3E\x3D","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x61\x74\x74\x61\x63\x68\x45\x76\x65\x6E\x74","\x72\x65\x6D\x6F\x76\x65\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x64\x65\x74\x61\x63\x68\x45\x76\x65\x6E\x74","\x2D","\x63\x61\x6D\x65\x6C\x43\x61\x73\x65","\x6F\x77\x6C","\x63\x61\x72\x6F\x75\x73\x65\x6C","\x6F\x6E\x54\x72\x69\x67\x67\x65\x72","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x56\x65\x6E\x64\x6F\x72","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x65\x6E\x64","\x77\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x6F\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x43\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72","\x5F\x63\x6F\x72\x65","\x5F\x6C\x6F\x61\x64\x65\x64","\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x6E\x61\x6D\x65\x73\x70\x61\x63\x65","\x6C\x61\x7A\x79\x4C\x6F\x61\x64","\x70\x72\x6F\x70\x65\x72\x74\x79","\x6E\x61\x6D\x65","\x63\x65\x69\x6C","\x76\x61\x6C\x75\x65","\x6C\x6F\x61\x64","\x2E\x6F\x77\x6C\x2D\x6C\x61\x7A\x79","\x69\x6E\x41\x72\x72\x61\x79","\x64\x65\x76\x69\x63\x65\x50\x69\x78\x65\x6C\x52\x61\x74\x69\x6F","\x6C\x61\x7A\x79","\x69\x73","\x6C\x6F\x61\x64\x2E\x6F\x77\x6C\x2E\x6C\x61\x7A\x79","\x6C\x6F\x61\x64\x65\x64","\x6F\x6E\x65","\x75\x72\x6C\x28","\x31","\x68\x61\x6E\x64\x6C\x65\x72\x73","\x67\x65\x74\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79\x4E\x61\x6D\x65\x73","\x4C\x61\x7A\x79","\x61\x75\x74\x6F\x48\x65\x69\x67\x68\x74","\x65\x6C\x65\x6D\x65\x6E\x74","\x6F\x77\x6C\x2D\x68\x65\x69\x67\x68\x74","\x61\x75\x74\x6F\x48\x65\x69\x67\x68\x74\x43\x6C\x61\x73\x73","\x68\x65\x69\x67\x68\x74","\x41\x75\x74\x6F\x48\x65\x69\x67\x68\x74","\x5F\x76\x69\x64\x65\x6F\x73","\x5F\x70\x6C\x61\x79\x69\x6E\x67","\x5F\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E","\x76\x69\x64\x65\x6F","\x69\x73\x49\x6E\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E","\x73\x74\x6F\x70","\x2E\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F","\x63\x6F\x6E\x74\x65\x6E\x74","\x64\x69\x73\x70\x6C\x61\x79","\x6E\x6F\x6E\x65","\x66\x65\x74\x63\x68","\x63\x6C\x69\x63\x6B\x2E\x6F\x77\x6C\x2E\x76\x69\x64\x65\x6F","\x2E\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x70\x6C\x61\x79\x2D\x69\x63\x6F\x6E","\x70\x6C\x61\x79","\x64\x61\x74\x61\x2D\x76\x69\x6D\x65\x6F\x2D\x69\x64","\x76\x69\x6D\x65\x6F","\x79\x6F\x75\x74\x75\x62\x65","\x64\x61\x74\x61\x2D\x79\x6F\x75\x74\x75\x62\x65\x2D\x69\x64","\x64\x61\x74\x61\x2D\x77\x69\x64\x74\x68","\x76\x69\x64\x65\x6F\x57\x69\x64\x74\x68","\x64\x61\x74\x61\x2D\x68\x65\x69\x67\x68\x74","\x76\x69\x64\x65\x6F\x48\x65\x69\x67\x68\x74","\x68\x72\x65\x66","\x4D\x69\x73\x73\x69\x6E\x67\x20\x76\x69\x64\x65\x6F\x20\x55\x52\x4C\x2E","\x6D\x61\x74\x63\x68","\x79\x6F\x75\x74\x75","\x69\x6E\x64\x65\x78\x4F\x66","\x56\x69\x64\x65\x6F\x20\x55\x52\x4C\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x2E","\x64\x61\x74\x61\x2D\x76\x69\x64\x65\x6F","\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x73\x74\x79\x6C\x65\x3D\x22\x77\x69\x64\x74\x68\x3A","\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A","\x70\x78\x3B\x22","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x70\x6C\x61\x79\x2D\x69\x63\x6F\x6E\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x74\x6E\x20","\x22\x20","\x3D\x22","\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x74\x6E\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x6F\x70\x61\x63\x69\x74\x79\x3A\x31\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65\x3A\x75\x72\x6C\x28","\x29\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x61\x66\x74\x65\x72","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x77\x72\x61\x70\x70\x65\x72\x22","\x3E\x3C\x2F\x64\x69\x76\x3E","\x6F\x77\x6C\x2D\x6C\x61\x7A\x79","\x68\x74\x74\x70\x3A\x2F\x2F\x69\x6D\x67\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x76\x69\x2F","\x69\x64","\x2F\x68\x71\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x47\x45\x54","\x68\x74\x74\x70\x3A\x2F\x2F\x76\x69\x6D\x65\x6F\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x76\x32\x2F\x76\x69\x64\x65\x6F\x2F","\x2E\x6A\x73\x6F\x6E","\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x6A\x73\x6F\x6E\x70","\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x5F\x6C\x61\x72\x67\x65","\x61\x6A\x61\x78","\x2E\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x66\x72\x61\x6D\x65","\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x70\x6C\x61\x79\x69\x6E\x67","\x31\x30\x30\x25","\x3C\x69\x66\x72\x61\x6D\x65\x20\x77\x69\x64\x74\x68\x3D\x22","\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22","\x22\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F","\x3F\x61\x75\x74\x6F\x70\x6C\x61\x79\x3D\x31\x26\x76\x3D","\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x3C\x69\x66\x72\x61\x6D\x65\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x70\x6C\x61\x79\x65\x72\x2E\x76\x69\x6D\x65\x6F\x2E\x63\x6F\x6D\x2F\x76\x69\x64\x65\x6F\x2F","\x3F\x61\x75\x74\x6F\x70\x6C\x61\x79\x3D\x31\x22\x20\x77\x69\x64\x74\x68\x3D\x22","\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x77\x65\x62\x6B\x69\x74\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x20\x6D\x6F\x7A\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x22\x68\x65\x69\x67\x68\x74\x3A","\x70\x78\x3B\x20\x77\x69\x64\x74\x68\x3A","\x70\x78\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x66\x72\x61\x6D\x65\x22\x3E","\x3C\x2F\x64\x69\x76\x3E","\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74","\x6D\x6F\x7A\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74","\x77\x65\x62\x6B\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74","\x6F\x77\x6C\x2D\x76\x69\x64\x65\x6F\x2D\x66\x72\x61\x6D\x65","\x56\x69\x64\x65\x6F","\x63\x6F\x72\x65","\x73\x77\x61\x70\x70\x69\x6E\x67","\x70\x72\x65\x76\x69\x6F\x75\x73","\x61\x6E\x69\x6D\x61\x74\x65\x4F\x75\x74","\x61\x6E\x69\x6D\x61\x74\x65\x49\x6E","\x73\x77\x61\x70","\x63\x6C\x65\x61\x72","\x77\x65\x62\x6B\x69\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x45\x6E\x64\x20\x6D\x6F\x7A\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x45\x6E\x64\x20\x4D\x53\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x45\x6E\x64\x20\x6F\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x65\x6E\x64\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x65\x6E\x64","\x61\x6E\x69\x6D\x61\x74\x65\x64\x20\x6F\x77\x6C\x2D\x61\x6E\x69\x6D\x61\x74\x65\x64\x2D\x6F\x75\x74","\x61\x6E\x69\x6D\x61\x74\x65\x64\x20\x6F\x77\x6C\x2D\x61\x6E\x69\x6D\x61\x74\x65\x64\x2D\x69\x6E","\x61\x6E\x69\x6D\x61\x74\x65\x64\x20\x6F\x77\x6C\x2D\x61\x6E\x69\x6D\x61\x74\x65\x64\x2D\x6F\x75\x74\x20\x6F\x77\x6C\x2D\x61\x6E\x69\x6D\x61\x74\x65\x64\x2D\x69\x6E","\x41\x6E\x69\x6D\x61\x74\x65","\x61\x75\x74\x6F\x70\x6C\x61\x79","\x61\x75\x74\x6F\x70\x6C\x61\x79\x48\x6F\x76\x65\x72\x50\x61\x75\x73\x65","\x70\x61\x75\x73\x65","\x76\x69\x64\x65\x6F\x50\x6C\x61\x79","\x69\x6E\x74\x65\x72\x76\x61\x6C","\x61\x75\x74\x6F\x70\x6C\x61\x79\x54\x69\x6D\x65\x6F\x75\x74","\x68\x69\x64\x64\x65\x6E","\x61\x75\x74\x6F\x70\x6C\x61\x79\x53\x70\x65\x65\x64","\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x64","\x5F\x70\x61\x67\x65\x73","\x5F\x63\x6F\x6E\x74\x72\x6F\x6C\x73","\x5F\x74\x65\x6D\x70\x6C\x61\x74\x65\x73","\x5F\x6F\x76\x65\x72\x72\x69\x64\x65\x73","\x64\x6F\x74\x73\x44\x61\x74\x61","\x64\x61\x74\x61\x2D\x64\x6F\x74","\x5B\x64\x61\x74\x61\x2D\x64\x6F\x74\x5D","\x72\x65\x76\x65\x72\x74","\x6E\x61\x76\x52\x65\x77\x69\x6E\x64","\x64\x72\x61\x77","\x6E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E","\x6F\x77\x6C\x2D\x6E\x61\x76","\x6F\x77\x6C\x2D\x70\x72\x65\x76","\x6F\x77\x6C\x2D\x6E\x65\x78\x74","\x6F\x77\x6C\x2D\x64\x6F\x74","\x6F\x77\x6C\x2D\x64\x6F\x74\x73","\x6F\x77\x6C\x2D\x63\x6F\x6E\x74\x72\x6F\x6C\x73","\x6F\x75\x74\x65\x72\x48\x54\x4D\x4C","\x70\x72\x6F\x70","\x3C\x73\x70\x61\x6E\x3E","\x64\x6F\x74\x43\x6C\x61\x73\x73","\x3C\x64\x69\x76\x3E","\x6E\x61\x76\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x64\x6F\x74\x73\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x24\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x63\x6F\x6E\x74\x72\x6F\x6C\x73\x43\x6C\x61\x73\x73","\x24\x69\x6E\x64\x69\x63\x61\x74\x6F\x72\x73","\x64\x6F\x74\x73\x43\x6C\x61\x73\x73","\x68\x69\x64\x65","\x63\x6C\x69\x63\x6B","\x64\x6F\x74\x73\x53\x70\x65\x65\x64","\x70\x72\x65\x70\x65\x6E\x64\x54\x6F","\x6E\x61\x76\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72\x43\x6C\x61\x73\x73","\x24\x6E\x65\x78\x74","\x6E\x61\x76\x45\x6C\x65\x6D\x65\x6E\x74","\x24\x70\x72\x65\x76\x69\x6F\x75\x73","\x6E\x61\x76\x53\x70\x65\x65\x64","\x6E\x61\x76\x54\x65\x78\x74","\x68\x74\x6D\x6C","\x6E\x61\x76\x43\x6C\x61\x73\x73","\x6F\x76\x65\x72\x69\x64\x65\x73","\x64\x6F\x74\x44\x61\x74\x61","\x64\x6F\x74\x73\x45\x61\x63\x68","\x70\x61\x67\x65","\x73\x6C\x69\x64\x65\x42\x79","\x64\x6F\x74\x73","\x6E\x61\x76","\x64\x69\x73\x61\x62\x6C\x65\x64","\x74\x6F\x67\x67\x6C\x65","\x2E\x61\x63\x74\x69\x76\x65","\x65\x6E\x64","\x67\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x4E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E","\x5F\x68\x61\x73\x68\x65\x73","\x55\x52\x4C\x48\x61\x73\x68","\x68\x61\x73\x68\x63\x68\x61\x6E\x67\x65\x2E\x6F\x77\x6C\x2E\x6E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E","\x64\x61\x74\x61\x2D\x68\x61\x73\x68","\x5B\x64\x61\x74\x61\x2D\x68\x61\x73\x68\x5D","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x68\x61\x73\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x48\x61\x73\x68","\x6C\x69\x62","\x42\x61\x73\x65","\x6D\x69\x78\x49\x6E","\x69\x6E\x69\x74","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x24\x73\x75\x70\x65\x72","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x57\x6F\x72\x64\x41\x72\x72\x61\x79","\x77\x6F\x72\x64\x73","\x73\x69\x67\x42\x79\x74\x65\x73","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x63\x6C\x61\x6D\x70","\x72\x61\x6E\x64\x6F\x6D","\x65\x6E\x63","\x48\x65\x78","\x73\x75\x62\x73\x74\x72","\x4C\x61\x74\x69\x6E\x31","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x55\x74\x66\x38","\x4D\x61\x6C\x66\x6F\x72\x6D\x65\x64\x20\x55\x54\x46\x2D\x38\x20\x64\x61\x74\x61","\x70\x61\x72\x73\x65","\x42\x75\x66\x66\x65\x72\x65\x64\x42\x6C\x6F\x63\x6B\x41\x6C\x67\x6F\x72\x69\x74\x68\x6D","\x5F\x64\x61\x74\x61","\x5F\x6E\x44\x61\x74\x61\x42\x79\x74\x65\x73","\x73\x74\x72\x69\x6E\x67","\x63\x6F\x6E\x63\x61\x74","\x62\x6C\x6F\x63\x6B\x53\x69\x7A\x65","\x5F\x6D\x69\x6E\x42\x75\x66\x66\x65\x72\x53\x69\x7A\x65","\x48\x61\x73\x68\x65\x72","\x63\x66\x67","\x66\x69\x6E\x61\x6C\x69\x7A\x65","\x48\x4D\x41\x43","\x61\x6C\x67\x6F","\x42\x61\x73\x65\x36\x34","\x5F\x6D\x61\x70","\x63\x68\x61\x72\x41\x74","\x63\x72\x65\x61\x74\x65","\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D","\x73\x69\x6E","\x4D\x44\x35","\x5F\x68\x61\x73\x68","\x66\x6C\x6F\x6F\x72","\x48\x6D\x61\x63\x4D\x44\x35","\x45\x76\x70\x4B\x44\x46","\x68\x61\x73\x68\x65\x72","\x6B\x65\x79\x53\x69\x7A\x65","\x69\x74\x65\x72\x61\x74\x69\x6F\x6E\x73","\x63\x6F\x6D\x70\x75\x74\x65","\x43\x69\x70\x68\x65\x72","\x5F\x78\x66\x6F\x72\x6D\x4D\x6F\x64\x65","\x5F\x6B\x65\x79","\x65\x6E\x63\x72\x79\x70\x74","\x64\x65\x63\x72\x79\x70\x74","\x53\x74\x72\x65\x61\x6D\x43\x69\x70\x68\x65\x72","\x6D\x6F\x64\x65","\x5F\x69\x76","\x5F\x70\x72\x65\x76\x42\x6C\x6F\x63\x6B","\x42\x6C\x6F\x63\x6B\x43\x69\x70\x68\x65\x72\x4D\x6F\x64\x65","\x45\x6E\x63\x72\x79\x70\x74\x6F\x72","\x44\x65\x63\x72\x79\x70\x74\x6F\x72","\x5F\x63\x69\x70\x68\x65\x72","\x65\x6E\x63\x72\x79\x70\x74\x42\x6C\x6F\x63\x6B","\x64\x65\x63\x72\x79\x70\x74\x42\x6C\x6F\x63\x6B","\x43\x42\x43","\x50\x6B\x63\x73\x37","\x70\x61\x64","\x42\x6C\x6F\x63\x6B\x43\x69\x70\x68\x65\x72","\x69\x76","\x5F\x45\x4E\x43\x5F\x58\x46\x4F\x52\x4D\x5F\x4D\x4F\x44\x45","\x63\x72\x65\x61\x74\x65\x45\x6E\x63\x72\x79\x70\x74\x6F\x72","\x63\x72\x65\x61\x74\x65\x44\x65\x63\x72\x79\x70\x74\x6F\x72","\x5F\x6D\x6F\x64\x65","\x70\x72\x6F\x63\x65\x73\x73\x42\x6C\x6F\x63\x6B","\x70\x61\x64\x64\x69\x6E\x67","\x75\x6E\x70\x61\x64","\x43\x69\x70\x68\x65\x72\x50\x61\x72\x61\x6D\x73","\x66\x6F\x72\x6D\x61\x74\x74\x65\x72","\x4F\x70\x65\x6E\x53\x53\x4C","\x66\x6F\x72\x6D\x61\x74","\x63\x69\x70\x68\x65\x72\x74\x65\x78\x74","\x73\x61\x6C\x74","\x53\x65\x72\x69\x61\x6C\x69\x7A\x61\x62\x6C\x65\x43\x69\x70\x68\x65\x72","\x6B\x64\x66","\x50\x61\x73\x73\x77\x6F\x72\x64\x42\x61\x73\x65\x64\x43\x69\x70\x68\x65\x72","\x69\x76\x53\x69\x7A\x65","\x65\x78\x65\x63\x75\x74\x65","\x6B\x65\x79","\x41\x45\x53","\x5F\x6E\x52\x6F\x75\x6E\x64\x73","\x5F\x6B\x65\x79\x53\x63\x68\x65\x64\x75\x6C\x65","\x5F\x69\x6E\x76\x4B\x65\x79\x53\x63\x68\x65\x64\x75\x6C\x65","\x62\x6F\x64\x79","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74","\x43\x53\x53","\x63\x6F\x6D\x70\x61\x74\x4D\x6F\x64\x65","\x62\x6F\x74\x68","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x41\x74\x74\x61\x63\x68\x6D\x65\x6E\x74","\x73\x63\x72\x6F\x6C\x6C","\x6B\x65\x79\x64\x6F\x77\x6E","\x6C\x61\x73\x74\x58","\x6C\x61\x73\x74\x59","\x73\x63\x72\x6F\x6C\x6C\x4C\x65\x66\x74","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x64\x65\x66\x61\x75\x6C\x74\x50\x72\x65\x76\x65\x6E\x74\x65\x64","\x65\x6D\x62\x65\x64","\x74\x65\x73\x74","\x77\x68\x65\x65\x6C\x44\x65\x6C\x74\x61\x58","\x77\x68\x65\x65\x6C\x44\x65\x6C\x74\x61\x59","\x77\x68\x65\x65\x6C\x44\x65\x6C\x74\x61","\x63\x74\x72\x6C\x4B\x65\x79","\x61\x6C\x74\x4B\x65\x79","\x6D\x65\x74\x61\x4B\x65\x79","\x6E\x6F\x64\x65\x4E\x61\x6D\x65","\x69\x73\x43\x6F\x6E\x74\x65\x6E\x74\x45\x64\x69\x74\x61\x62\x6C\x65","\x62\x75\x74\x74\x6F\x6E","\x6B\x65\x79\x43\x6F\x64\x65","\x73\x70\x61\x63\x65\x62\x61\x72","\x63\x6C\x69\x65\x6E\x74\x48\x65\x69\x67\x68\x74","\x75\x70","\x64\x6F\x77\x6E","\x73\x68\x69\x66\x74\x4B\x65\x79","\x70\x61\x67\x65\x75\x70","\x70\x61\x67\x65\x64\x6F\x77\x6E","\x68\x6F\x6D\x65","\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65","\x65\x78\x70","\x73\x73\x63\x5F\x75\x6E\x69\x71\x75\x65\x49\x44","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x6D\x6F\x75\x73\x65\x77\x68\x65\x65\x6C","\x3C\x6C\x69\x3E\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22","\x22\x3E","\x74\x65\x78\x74","\x69","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22","\x22\x3E\x3C\x2F\x69\x3E","\x61","\x5F","\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x2F\x61\x3E\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x75\x6C\x3E\x3C\x2F\x6C\x69\x3E\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x2F\x61\x3E\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22","\x6C\x69","\x3C\x2F\x75\x6C\x3E\x3C\x2F\x6C\x69\x3E","\x75\x6C","\x73\x75\x62\x2D\x6D\x65\x6E\x75","\x73\x68\x6F\x77","\x2E\x6D\x65\x6E\x75","\x73\x75\x62\x2D\x73\x75\x62\x2D\x6D\x65\x6E\x75","\x2E\x73\x75\x62\x2D\x6D\x65\x6E\x75","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x2D\x6D\x65\x6E\x75\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x73\x2D\x6D\x65\x6E\x75\x2D\x61\x72\x65\x61\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x73\x6D\x65\x6E\x75\x2D\x69\x6E\x6E\x6E\x65\x72\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x73\x2D\x6D\x65\x6E\x75\x2D\x69\x6E\x6E\x65\x72\x22\x3E\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x73\x2D\x6D\x65\x6E\x75\x22\x3E\x3C\x2F\x75\x6C\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x77\x69\x64\x67\x65\x74","\x70\x61\x72\x65\x6E\x74\x73","\x2E\x72\x65\x73\x2D\x6D\x65\x6E\x75","\x73\x75\x62\x6D\x65\x6E\x75","\x73\x75\x62\x6D\x65\x6E\x75\x32","\x2E\x73\x75\x62\x2D\x73\x75\x62\x2D\x6D\x65\x6E\x75","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x69\x6E\x64\x69\x63\x61\x74\x6F\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x6E\x61\x76\x20\x2E\x6D\x65\x6E\x75","\x6F\x66\x66\x73\x65\x74","\x66\x69\x72\x73\x74","\x6E\x61\x76\x20\x6C\x69","\x2E\x69\x6E\x64\x69\x63\x61\x74\x6F\x72","\x6D\x6F\x75\x73\x65\x6C\x65\x61\x76\x65","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72","\x75\x6C\x2E\x6D\x65\x6E\x75\x20\x3E\x20\x6C\x69","\x73\x6C\x69\x64\x65\x44\x6F\x77\x6E","\x75\x6C\x2C\x2E\x6D\x65\x67\x61\x2D\x6D\x65\x6E\x75","\x73\x6C\x69\x64\x65\x55\x70","\x2E\x6D\x65\x6E\x75\x20\x2E\x73\x75\x62\x6D\x65\x6E\x75\x2C\x2E\x6D\x65\x6E\x75\x20\x2E\x73\x75\x62\x6D\x65\x6E\x75\x32","\x6D\x6F\x64\x65\x2D\x73\x65\x61\x72\x63\x68","\x66\x6F\x63\x75\x73","\x2E\x69\x6E\x70\x75\x74\x2D\x73\x65\x61\x72\x63\x68","\x23\x73\x65\x61\x63\x72\x68\x2D\x62\x74\x6E","\x2E\x69\x63\x6F\x6E\x2D\x63\x6C\x6F\x73\x65","\x69\x63\x6F\x6E\x2D\x74\x6F\x2D\x61\x72\x72\x6F\x77","\x2E\x74\x6F\x6D\x62\x6F\x6C\x2D\x6D\x65\x6E\x75","\x69\x63\x6F\x6E\x2D\x66\x72\x6F\x6D\x2D\x61\x72\x72\x6F\x77","\x2E\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x2D\x6D\x65\x6E\x75","\x73\x68\x6F\x77\x2D\x72\x65\x73\x2D\x6D\x65\x6E\x75","\x2E\x74\x6F\x6D\x62\x6F\x6C\x2D\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65","\x6F\x70\x65\x6E","\x2E\x6F\x70\x65\x6E","\x2E\x73\x75\x62\x2D\x6D\x65\x6E\x75\x2C\x2E\x73\x75\x62\x2D\x73\x75\x62\x2D\x6D\x65\x6E\x75\x2C\x2E\x6D\x65\x67\x61\x2D\x6D\x65\x6E\x75","\x3A\x76\x69\x73\x69\x62\x6C\x65","\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x3A\x3B","\x2E\x72\x65\x73\x2D\x6D\x65\x6E\x75\x20\x2E\x73\x75\x62\x6D\x65\x6E\x75\x20\x3E\x20\x61\x2C\x20\x2E\x72\x65\x73\x2D\x6D\x65\x6E\x75\x20\x2E\x73\x75\x62\x6D\x65\x6E\x75\x32\x20\x3E\x20\x61","\x2E\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x2D\x6D\x65\x6E\x75\x2C\x2E\x74\x6F\x6D\x62\x6F\x6C\x2D\x72\x65\x73\x70\x6F\x6E\x73\x69\x76\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x65\x6E\x74\x72\x79","\x66\x65\x65\x64","\x6C\x69\x6E\x6B","\x61\x6C\x74\x65\x72\x6E\x61\x74\x65","\x72\x65\x6C","\x73\x37\x32\x2D\x63","\x77\x32\x32\x35\x2D\x68\x31\x35\x30\x2D\x63","\x75\x72\x6C","\x6D\x65\x64\x69\x61\x24\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x24\x74","\x74\x69\x74\x6C\x65","\x70\x75\x62\x6C\x69\x73\x68\x65\x64","\x74\x65\x72\x6D","\x63\x61\x74\x65\x67\x6F\x72\x79","\x69\x6D\x67\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D","\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x6D\x61\x78\x72\x65\x73\x64\x65\x66\x61\x75\x6C\x74\x2E\x6A\x70\x67","\x3C\x69\x6D\x67\x20\x63\x6C\x61\x73\x73\x3D\x27\x79\x69\x6D\x67\x27\x20\x73\x72\x63\x3D\x27","\x27\x2F\x3E","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x27","\x72\x65\x73\x2D\x6D\x65\x6E\x75","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x6D\x69\x74\x65\x6D\x27\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x6D\x69\x6E\x66\x6F\x27\x3E\x3C\x68\x33\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27","\x27\x3E","\x3C\x2F\x61\x3E\x3C\x2F\x68\x33\x3E","\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x6D\x69\x74\x65\x6D\x27\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x6D\x67\x61\x6D\x62\x61\x72\x27\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27","\x3C\x2F\x61\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x6D\x69\x6E\x66\x6F\x27\x3E\x3C\x68\x33\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27","\x6C\x6F\x61\x64\x69\x6E\x67","\x2E\x6D\x65\x67\x61\x2D\x6D\x65\x6E\x75","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x6E\x6F\x70\x22\x3E\x26\x23\x78\x66\x31\x34\x33\x3B\x20\x4E\x6F\x20\x50\x6F\x73\x74\x20\x46\x6F\x75\x6E\x64\x3C\x2F\x73\x70\x61\x6E\x3E","\x4A\x61\x6E","\x46\x65\x62","\x4D\x61\x72","\x41\x70\x72","\x4D\x61\x79","\x4A\x75\x6E","\x4A\x75\x6C","\x41\x75\x67","\x53\x65\x70","\x4F\x63\x74","\x4E\x6F\x76","\x44\x65\x63","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x64\x61\x74\x65\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x63\x6C\x6F\x63\x6B\x2D\x6F\x22\x3E\x3C\x2F\x69\x3E\x20","\x20","\x3C\x2F\x73\x70\x61\x6E\x3E\x20","\x6D\x6F\x75\x73\x65\x65\x6E\x74\x65\x72\x20\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x2F\x66\x65\x65\x64\x73\x2F\x70\x6F\x73\x74\x73\x2F\x73\x75\x6D\x6D\x61\x72\x79\x2F\x2D\x2F","\x3F\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D\x34\x26\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x65\x67\x61\x2D\x6D\x65\x6E\x75\x20\x6C\x6F\x61\x64\x69\x6E\x67\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x6C\x61\x62\x65\x6C","\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x27\x74\x61\x62\x2D\x6F\x75\x74\x65\x72\x27\x3E","\x3C\x6C\x69\x3E","\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x75\x6C\x3E","\x2E\x74\x61\x62\x2D\x6F\x75\x74\x65\x72\x20\x6C\x69","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x69\x73\x69\x2D\x74\x61\x62\x2D\x6F\x75\x74\x65\x72\x27\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x69\x73\x69\x2D\x74\x61\x62","\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x69\x73\x69\x2D\x74\x61\x62\x2D\x6F\x75\x74\x65\x72\x3E\x64\x69\x76","\x69\x73\x69\x2D\x74\x61\x62","\x66\x61\x73\x74","\x66\x61\x64\x65\x49\x6E","\x3F\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D\x33\x26\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74","\x2E\x69\x73\x69\x2D\x74\x61\x62","\x6C\x69\x2E\x73\x75\x62\x6D\x65\x6E\x75","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x62\x61\x63\x6B\x2D\x74\x6F\x2D\x74\x6F\x70\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x61\x72\x72\x6F\x77\x2D\x75\x70\x22\x3C\x2F\x64\x69\x76\x3E","\x30","\x68\x74\x6D\x6C\x2C\x62\x6F\x64\x79","\x23\x62\x61\x63\x6B\x2D\x74\x6F\x2D\x74\x6F\x70","\x23\x48\x54\x4D\x4C\x31","\x62\x69\x73\x6D\x69\x6C\x6C\x61\x68","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x64\x69\x68\x61\x6B","\x23\x73\x69\x64\x65\x62\x61\x72\x2D\x61\x74\x61\x73","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x61\x64\x73\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x2D\x62\x6F\x74\x74\x6F\x6D\x3A\x20\x32\x30\x70\x78\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x20\x35\x70\x78\x3B\x6F\x76\x65\x72\x66\x6C\x6F\x77\x3A\x20\x68\x69\x64\x64\x65\x6E\x3B\x62\x6F\x78\x2D\x73\x68\x61\x64\x6F\x77\x3A\x20\x30\x20\x33\x70\x78\x20\x31\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x30\x2E\x31\x36\x29\x2C\x30\x20\x33\x70\x78\x20\x36\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x30\x2E\x32\x33\x29\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x69\x6E\x68\x65\x72\x69\x74\x3B\x68\x65\x69\x67\x68\x74\x3A\x20\x32\x35\x30\x70\x78\x3B\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x6C\x6F\x67\x67\x65\x72\x6B\x75\x2E\x63\x6F\x6D\x2F\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x4B\x75\x6D\x70\x75\x6C\x61\x6E\x20\x54\x75\x74\x6F\x72\x69\x61\x6C\x20\x42\x6C\x6F\x67\x67\x65\x72\x22\x3E\x3C\x69\x6D\x67\x20\x61\x6C\x74\x3D\x22\x62\x6C\x6F\x67\x67\x65\x72\x6B\x75\x22\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x33\x2E\x62\x70\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x2D\x36\x6B\x43\x6B\x49\x69\x54\x34\x73\x52\x6F\x2F\x56\x79\x5F\x74\x37\x6A\x65\x78\x4C\x43\x49\x2F\x41\x41\x41\x41\x41\x41\x41\x41\x41\x59\x30\x2F\x53\x34\x46\x55\x5A\x34\x77\x33\x76\x50\x41\x48\x62\x56\x69\x72\x4D\x75\x54\x39\x49\x32\x57\x32\x52\x6C\x70\x4B\x56\x38\x69\x41\x41\x43\x4C\x63\x42\x2F\x73\x31\x36\x30\x30\x2F\x69\x6B\x6C\x61\x6E\x25\x32\x42\x62\x6C\x6F\x67\x67\x65\x72\x6B\x75\x2E\x70\x6E\x67\x22\x3E\x3C\x2F\x61\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x69\x6E\x66\x6F\x2D\x69\x6B\x6C\x61\x6E\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x3A\x23\x64\x33\x64\x33\x64\x33\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x35\x70\x78\x3B\x62\x6F\x72\x64\x65\x72\x2D\x62\x6F\x74\x74\x6F\x6D\x2D\x6C\x65\x66\x74\x2D\x72\x61\x64\x69\x75\x73\x3A\x34\x70\x78\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x74\x6F\x70\x3A\x30\x3B\x72\x69\x67\x68\x74\x3A\x30\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x30\x30\x30\x3B\x66\x6F\x6E\x74\x3A\x6E\x6F\x72\x6D\x61\x6C\x20\x31\x31\x70\x78\x20\x41\x72\x69\x61\x6C\x2C\x53\x61\x6E\x73\x2D\x53\x65\x72\x69\x66\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x6C\x65\x66\x74\x3B\x6F\x76\x65\x72\x66\x6C\x6F\x77\x3A\x68\x69\x64\x64\x65\x6E\x3B\x70\x61\x64\x64\x69\x6E\x67\x2D\x72\x69\x67\x68\x74\x3A\x31\x39\x70\x78\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x3E\x49\x6B\x6C\x61\x6E\x20\x6F\x6C\x65\x68\x20\x42\x6C\x6F\x67\x67\x65\x72\x6B\x75\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x69\x6E\x66\x6F\x2D\x69\x63\x6F\x6E\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x77\x69\x64\x74\x68\x3A\x31\x35\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x35\x70\x78\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x74\x6F\x70\x3A\x30\x3B\x72\x69\x67\x68\x74\x3A\x30\x3B\x63\x75\x72\x73\x6F\x72\x3A\x70\x6F\x69\x6E\x74\x65\x72\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x6C\x6F\x67\x67\x65\x72\x6B\x75\x2E\x63\x6F\x6D\x2F\x70\x2F\x70\x61\x73\x61\x6E\x67\x2D\x69\x6B\x6C\x61\x6E\x2E\x68\x74\x6D\x6C\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x3C\x69\x6D\x67\x20\x61\x6C\x74\x3D\x22\x69\x6E\x66\x6F\x22\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x32\x2E\x62\x70\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x2D\x2D\x69\x76\x61\x48\x49\x67\x58\x54\x68\x6B\x2F\x55\x6E\x4A\x57\x55\x38\x30\x46\x4C\x68\x49\x2F\x41\x41\x41\x41\x41\x41\x41\x41\x46\x5F\x59\x2F\x57\x72\x48\x2D\x38\x61\x59\x69\x6A\x47\x77\x2F\x73\x31\x36\x30\x30\x2F\x69\x6E\x66\x6F\x2D\x69\x6B\x6C\x61\x6E\x2E\x70\x6E\x67\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x76\x65\x72\x74\x69\x63\x61\x6C\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x74\x6F\x70\x3B\x22\x3E\x3C\x2F\x61\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x69\x6E\x66\x6F\x2D\x69\x6B\x6C\x61\x6E","\x2E\x69\x6E\x66\x6F\x2D\x69\x63\x6F\x6E","\x69\x6E\x69\x74\x69\x61\x6C","\x23\x66\x66\x66","\x76\x69\x73\x69\x62\x6C\x65","\x23\x63\x72\x65\x64\x69\x74\x6D\x64","Template By <a href='https://www.facebook.com/elsayed.k.mohamed' target='_blank' title='Elsayed kamal'>Elsayed kamal</a>","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x62\x6C\x6F\x67\x67\x65\x72\x6B\x75\x2E\x63\x6F\x6D","\x6B\x65\x63\x69\x6C","\x68\x65\x61\x64\x65\x72","\x70\x61\x67\x65\x59\x4F\x66\x66\x73\x65\x74","\x5D","\x5B","\x23\x73\x69\x64\x65\x62\x61\x72\x20\x68\x32","\x2E\x68\x69\x64\x65\x2D\x63\x6F\x75\x6E\x74","\x66\x61\x63\x65\x62\x6F\x6F\x6B","\x46\x61\x6E\x73","\x72\x73\x73","\x53\x75\x62\x63\x72\x69\x62\x65\x72\x73","\x46\x6F\x6C\x6C\x6F\x77\x65\x72\x73","\x4C\x69\x6B\x65","\x67\x6F\x6F\x67\x6C\x65","\x2B\x31","\x53\x75\x62\x63\x72\x69\x62\x65","\x46\x6F\x6C\x6C\x6F\x77","\x2E\x69\x74\x65\x6D\x2D\x63\x6F\x75\x6E\x74","\x2E\x73\x6F\x63\x69\x61\x6C\x2D\x6E\x61\x6D\x65","\x2E\x73\x6F\x63\x69\x61\x6C\x2D\x74\x6F\x6D\x62\x6F\x6C","\x2E\x73\x6F\x63\x69\x61\x6C\x20\x6C\x69","\x68\x32","\x64\x61\x74\x61\x2D\x74\x61\x62","\x23\x74\x61\x62\x2D\x73\x69\x64\x65\x62\x61\x72","\x5B\x64\x61\x74\x61\x2D\x74\x61\x62\x5D","\x3C\x75\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x61\x62\x2D\x77\x72\x61\x70\x70\x65\x72\x22\x3E\x3C\x2F\x75\x6C\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x61\x62\x2D\x69\x73\x69\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x77\x69\x64\x67\x65\x74","\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x23\x27\x3E","\x74\x61\x62","\x2E\x74\x61\x62\x2D\x77\x72\x61\x70\x70\x65\x72","\x2E\x74\x61\x62\x2D\x69\x73\x69","\x2E\x74\x61\x62\x2D\x77\x72\x61\x70\x70\x65\x72\x20\x6C\x69\x3A\x66\x69\x72\x73\x74\x20\x61\x2C\x2E\x74\x61\x62\x2D\x69\x73\x69\x20\x3E\x20\x64\x69\x76\x3A\x66\x69\x72\x73\x74","\x74\x2D\x6B\x61\x6E\x61\x6E","\x2E\x74\x61\x62\x2D\x69\x73\x69\x20\x3E\x20\x64\x69\x76\x3A\x6E\x6F\x74\x28\x2E\x61\x63\x74\x69\x76\x65\x29","\x2E\x74\x61\x62\x2D\x77\x72\x61\x70\x70\x65\x72\x20\x6C\x69\x20\x61\x2C\x2E\x74\x61\x62\x2D\x69\x73\x69\x20\x3E\x20\x64\x69\x76","\x74\x2D\x6B\x69\x72\x69","\x2E\x74\x61\x62\x2D\x69\x73\x69\x20\x3E\x20\x64\x69\x76","\x6E\x65\x78\x74\x41\x6C\x6C","\x70\x72\x65\x76\x41\x6C\x6C","\x2E\x74\x61\x62\x2D\x77\x72\x61\x70\x70\x65\x72\x20\x6C\x69\x20\x61","\x72\x65\x61\x64\x79","\x2E\x2E\x2E","\x2E\x70\x6F\x70\x75\x6C\x61\x72\x2D\x70\x6F\x73\x74\x73\x20\x75\x6C\x20\x6C\x69\x20\x2E\x69\x74\x65\x6D\x2D\x73\x6E\x69\x70\x70\x65\x74","\x46\x42\x62\x6F\x78\x44\x69\x68\x61\x6B","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x46\x42\x62\x6F\x78\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x62\x2D\x70\x61\x67\x65\x22\x20\x64\x61\x74\x61\x2D\x68\x72\x65\x66\x3D\x22","\x22\x20\x64\x61\x74\x61\x2D\x77\x69\x64\x74\x68\x3D\x22\x35\x30\x30\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x63\x65\x6E\x74\x64\x61\x74\x65\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x63\x6C\x6F\x63\x6B\x2D\x6F\x22\x3E\x3C\x2F\x69\x3E\x20","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x27\x61\x75\x74\x68\x6F\x72\x6E\x61\x6D\x65\x27\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x27\x66\x61\x20\x66\x61\x2D\x75\x73\x65\x72\x27\x3E\x3C\x2F\x69\x3E\x20","\x3C\x2F\x73\x70\x61\x6E\x3E","\x2F\x66\x65\x65\x64\x73\x2F\x70\x6F\x73\x74\x73\x2F\x73\x75\x6D\x6D\x61\x72\x79","\x2F\x2D\x2F","\x3F\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D","\x26\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x69\x6E\x67\x6C\x65\x2D\x6F\x75\x74\x65\x72\x22\x3E\x3C\x75\x6C\x20\x69\x64\x3D\x22\x73\x6C\x69\x64\x65\x72\x22\x3E\x3C\x2F\x75\x6C\x3E\x3C\x2F\x64\x69\x76\x3E","\x2E\x73\x69\x6E\x67\x6C\x65\x2D\x6F\x75\x74\x65\x72","\x77","\x2D\x68\x34\x30\x30\x2D\x63","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x64\x70\x62\x2E\x6F\x72\x67\x2F\x73\x2F\x70\x68\x6F\x74\x6F\x67\x61\x6C\x6C\x65\x72\x79\x2F\x69\x6D\x67\x2F\x6E\x6F\x2D\x69\x6D\x61\x67\x65\x2D\x61\x76\x61\x69\x6C\x61\x62\x6C\x65\x2E\x6A\x70\x67","\x73\x75\x6D\x6D\x61\x72\x79","\x61\x75\x74\x68\x6F\x72","\x3C\x6C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x69\x74\x65\x6D\x2D\x73\x6C\x69\x64\x65\x72\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x3E\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22","\x22\x20\x74\x69\x74\x6C\x65\x3D\x22","\x22\x20\x77\x69\x64\x74\x68\x3D\x22","\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x34\x30\x30\x22\x2F\x3E\x3C\x2F\x61\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x65\x74\x61\x22\x3E\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x6C\x61\x62\x65\x6C\x22\x20\x68\x72\x65\x66\x3D\x22\x2F\x73\x65\x61\x72\x63\x68\x2F\x6C\x61\x62\x65\x6C\x2F","\x23","\x3C\x2F\x61\x3E","\x3C\x2F\x64\x69\x76\x3E\x3C\x68\x33\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x2F\x61\x3E\x3C\x2F\x68\x33\x3E\x3C\x70\x3E","\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x6C\x69\x3E","\x23\x73\x6C\x69\x64\x65\x72","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x27\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x6C\x65\x66\x74\x27\x3E\x3C\x2F\x69\x3E","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x27\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x72\x69\x67\x68\x74\x27\x3E\x3C\x2F\x69\x3E","\x75\x6E\x6C\x6F\x61\x64\x65\x64","\x2F\x66\x65\x65\x64\x73\x2F\x63\x6F\x6D\x6D\x65\x6E\x74\x73\x2F\x64\x65\x66\x61\x75\x6C\x74\x3F\x61\x6C\x74\x3D\x6A\x73\x6F\x6E\x2D\x69\x6E\x2D\x73\x63\x72\x69\x70\x74\x26\x6D\x61\x78\x2D\x72\x65\x73\x75\x6C\x74\x73\x3D","\x2F","\x67\x64\x24\x69\x6D\x61\x67\x65","\x73\x35\x31\x32\x2D\x63","\x73\x35\x30\x2D\x63","\x20\x2E\x2E\x2E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6D\x2D\x69\x6E\x66\x6F\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x2E\x2E\x2E\x20\x3C\x2F\x61\x3E","\x20\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22","\x22\x20\x61\x6C\x74\x3D\x22","\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x35\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x35\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6D\x6D\x65\x6E\x74\x5F\x65\x6D\x6F\x22\x2F\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6D\x2D\x69\x74\x65\x6D\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6D\x2D\x70\x68\x6F\x74\x6F\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x35\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x35\x30\x22\x2F\x3E\x3C\x2F\x61\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6D\x2D\x62\x75\x62\x62\x6C\x65\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6D\x2D\x6E\x61\x6D\x61\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x3C\x2F\x61\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6D\x2D\x69\x73\x69\x22\x3E","\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6C\x65\x61\x72\x22\x2F\x3E\x3C\x2F\x64\x69\x76\x3E","\x75\x6C\x20\x6C\x69\x20\x61","\x23\x73\x6C\x69\x64\x65\x72\x2D\x68\x6F\x6D\x65","\x2E\x77\x69\x64\x67\x65\x74\x2D\x63\x6F\x6E\x74\x65\x6E\x74","\x77\x69\x64\x67\x65\x74\x2D\x6C\x6F\x61\x64\x65\x64","\x2E\x48\x54\x4D\x4C","\x23\x73\x74\x69\x63\x6B\x79\x77\x69\x64\x67\x65\x74","\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68","\x23\x70\x6F\x73\x74\x2D\x77\x72\x61\x70\x70\x65\x72","\x23\x73\x69\x64\x65\x62\x61\x72\x2D\x77\x72\x61\x70\x70\x65\x72","\x2E\x62\x6C\x6F\x67\x2D\x70\x6F\x73\x74\x73\x2E\x68\x66\x65\x65\x64","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x66\x69\x78\x65\x64"];!function(_0x5387x1){_0x5387x1[_0x3340[1]][_0x3340[0]]=function(_0x5387x2,_0x5387x3,_0x5387x4,_0x5387x5){return this[_0x3340[4]](function(){var _0x5387x6=null,_0x5387x7=_0x5387x1(this);_0x5387x7[_0x3340[3]](function(){clearTimeout(_0x5387x6),_0x5387x6=setTimeout(function(){_0x5387x3[_0x3340[2]](_0x5387x7)},_0x5387x2)},function(){clearTimeout(_0x5387x6),_0x5387x6=setTimeout(function(){_0x5387x5[_0x3340[2]](_0x5387x7)},_0x5387x4)})})}}(jQuery);!function(_0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa){function _0x5387x4(_0x5387x9,_0x5387x7){this[_0x3340[7]]=null,this[_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387x4.Defaults,_0x5387x7),this[_0x3340[10]]=_0x5387x8(_0x5387x9),this[_0x3340[11]]=_0x5387x8[_0x3340[9]]({},_0x5387x11),this[_0x3340[12]]=_0x5387x8[_0x3340[9]]({},_0x5387x1),this[_0x3340[13]]=_0x5387x8[_0x3340[9]]({},_0x5387x6),this[_0x3340[14]]={},this[_0x3340[15]]={},this[_0x3340[16]]=null,this[_0x3340[17]]=null,this[_0x3340[18]]=[],this[_0x3340[19]]=null,this[_0x3340[20]]=null,this[_0x3340[21]]=[],this[_0x3340[22]]=[],this[_0x3340[23]]=[],this[_0x3340[24]]={},this[_0x3340[25]]=[],_0x5387x8[_0x3340[4]](_0x5387x4.Plugins,_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x9){this[_0x3340[14]][_0x5387x8[0][_0x3340[26]]()+_0x5387x8[_0x3340[27]](1)]=new _0x5387x9(this)},this)),_0x5387x8[_0x3340[4]](_0x5387x4.Pipe,_0x5387x8[_0x3340[28]](function(_0x5387x9,_0x5387x7){this[_0x3340[25]][_0x3340[31]]({filter:_0x5387x7[_0x3340[29]],run:_0x5387x8[_0x3340[28]](_0x5387x7[_0x3340[30]],this)})},this)),this[_0x3340[32]](),this[_0x3340[33]]()}function _0x5387xb(_0x5387x8){if(_0x5387x8[_0x3340[34]]!==_0x5387xa){return{x:_0x5387x8[_0x3340[34]][0][_0x3340[35]],y:_0x5387x8[_0x3340[34]][0][_0x3340[36]]}};if(_0x5387x8[_0x3340[34]]===_0x5387xa){if(_0x5387x8[_0x3340[35]]!==_0x5387xa){return{x:_0x5387x8[_0x3340[35]],y:_0x5387x8[_0x3340[36]]}};if(_0x5387x8[_0x3340[35]]===_0x5387xa){return{x:_0x5387x8[_0x3340[37]],y:_0x5387x8[_0x3340[38]]}}}}function _0x5387xc(_0x5387x8){var _0x5387x9,_0x5387xa,_0x5387x4=_0x5387x7[_0x3340[40]](_0x3340[39]),_0x5387xb=_0x5387x8;for(_0x5387x9 in _0x5387xb){if(_0x5387xa=_0x5387xb[_0x5387x9],_0x3340[41]!=typeof _0x5387x4[_0x3340[42]][_0x5387xa]){return _0x5387x4=null,[_0x5387xa,_0x5387x9]}};return[!1]}function _0x5387xd(){return _0x5387xc([_0x3340[43],_0x3340[44],_0x3340[45],_0x3340[46]])[1]}function _0x5387x5(){return _0x5387xc([_0x3340[47],_0x3340[48],_0x3340[49],_0x3340[50],_0x3340[51]])[0]}function _0x5387xe(){return _0x5387xc([_0x3340[52],_0x3340[53],_0x3340[54],_0x3340[55],_0x3340[56]])[0]}function _0x5387xf(){return _0x3340[57]in _0x5387x9||!!navigator[_0x3340[58]]}function _0x5387x10(){return _0x5387x9[_0x3340[60]][_0x3340[59]]}var _0x5387x11,_0x5387x1,_0x5387x6;_0x5387x11={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},_0x5387x1={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},_0x5387x6={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},_0x5387x4[_0x3340[61]]={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:_0x5387x9,responsiveClass:!1,fallbackEasing:_0x3340[62],info:!1,nestedItemSelector:!1,itemElement:_0x3340[39],stageElement:_0x3340[39],themeClass:_0x3340[63],baseClass:_0x3340[64],itemClass:_0x3340[65],centerClass:_0x3340[66],activeClass:_0x3340[67]},_0x5387x4[_0x3340[68]]={Default:_0x3340[69],Inner:_0x3340[70],Outer:_0x3340[71]},_0x5387x4[_0x3340[72]]={},_0x5387x4[_0x3340[73]]=[{filter:[_0x3340[74],_0x3340[75],_0x3340[7]],run:function(_0x5387x8){_0x5387x8[_0x3340[76]]=this[_0x3340[21]]&&this[_0x3340[21]][this[_0x3340[77]](this._current)]}},{filter:[_0x3340[75],_0x3340[7]],run:function(){var _0x5387x8=this[_0x3340[22]],_0x5387x9=this[_0x3340[80]][_0x3340[79]](_0x3340[78]);(_0x5387x9[_0x3340[81]]!==_0x5387x8[_0x3340[81]]||!this[_0x3340[7]][_0x3340[82]]&&_0x5387x8[_0x3340[81]]>0)&&(this[_0x3340[80]][_0x3340[79]](_0x3340[78])[_0x3340[83]](),this[_0x3340[22]]=[])}},{filter:[_0x3340[75],_0x3340[7]],run:function(){var _0x5387x8,_0x5387x9,_0x5387x7=this[_0x3340[22]],_0x5387xa=this[_0x3340[21]],_0x5387x4=this[_0x3340[7]][_0x3340[82]]?_0x5387x7[_0x3340[81]]-Math[_0x3340[84]](2*this[_0x3340[7]][_0x3340[75]],4):0;for(_0x5387x8=0,_0x5387x9=Math[_0x3340[85]](_0x5387x4/2);_0x5387x9>_0x5387x8;_0x5387x8++){_0x5387x4>0?(this[_0x3340[80]][_0x3340[79]]()[_0x3340[86]](_0x5387xa[_0x3340[81]]+_0x5387x7[_0x3340[81]]-1)[_0x3340[83]](),_0x5387x7[_0x3340[87]](),this[_0x3340[80]][_0x3340[79]]()[_0x3340[86]](0)[_0x3340[83]](),_0x5387x7[_0x3340[87]]()):(_0x5387x7[_0x3340[31]](_0x5387x7[_0x3340[81]]/2),this[_0x3340[80]][_0x3340[91]](_0x5387xa[_0x5387x7[_0x5387x7[_0x3340[81]]-1]][_0x3340[90]]()[_0x3340[89]](_0x3340[88])),_0x5387x7[_0x3340[31]](_0x5387xa[_0x3340[81]]-1-(_0x5387x7[_0x3340[81]]-1)/2),this[_0x3340[80]][_0x3340[92]](_0x5387xa[_0x5387x7[_0x5387x7[_0x3340[81]]-1]][_0x3340[90]]()[_0x3340[89]](_0x3340[88])))}}},{filter:[_0x3340[74],_0x3340[75],_0x3340[7]],run:function(){var _0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa=this[_0x3340[7]][_0x3340[93]]?1:-1,_0x5387x4=(this[_0x3340[74]]()/this[_0x3340[7]][_0x3340[75]])[_0x3340[94]](3),_0x5387xb=0;for(this[_0x3340[18]]=[],_0x5387x9=0,_0x5387x7=this[_0x3340[22]][_0x3340[81]]+this[_0x3340[21]][_0x3340[81]];_0x5387x7>_0x5387x9;_0x5387x9++){_0x5387x8=this[_0x3340[23]][this[_0x3340[77]](_0x5387x9)],_0x5387x8=this[_0x3340[7]][_0x3340[95]]&&Math[_0x3340[96]](_0x5387x8,this[_0x3340[7]][_0x3340[75]])||_0x5387x8,_0x5387xb+=(this[_0x3340[7]][_0x3340[97]]?this[_0x3340[21]][this[_0x3340[77]](_0x5387x9)][_0x3340[74]]()+this[_0x3340[7]][_0x3340[98]]:_0x5387x4*_0x5387x8)*_0x5387xa,this[_0x3340[18]][_0x3340[31]](_0x5387xb)}}},{filter:[_0x3340[74],_0x3340[75],_0x3340[7]],run:function(){var _0x5387x9,_0x5387x7,_0x5387xa=(this[_0x3340[74]]()/this[_0x3340[7]][_0x3340[75]])[_0x3340[94]](3),_0x5387x4={width:Math[_0x3340[85]](this[_0x3340[18]][this[_0x3340[18]][_0x3340[81]]-1])+2*this[_0x3340[7]][_0x3340[99]],"\x70\x61\x64\x64\x69\x6E\x67\x2D\x6C\x65\x66\x74":this[_0x3340[7]][_0x3340[99]]||_0x3340[100],"\x70\x61\x64\x64\x69\x6E\x67\x2D\x72\x69\x67\x68\x74":this[_0x3340[7]][_0x3340[99]]||_0x3340[100]};if(this[_0x3340[80]][_0x3340[101]](_0x5387x4),_0x5387x4={width:this[_0x3340[7]][_0x3340[97]]?_0x3340[102]:_0x5387xa-this[_0x3340[7]][_0x3340[98]]},_0x5387x4[this[_0x3340[7]][_0x3340[93]]?_0x3340[103]:_0x3340[104]]=this[_0x3340[7]][_0x3340[98]],!this[_0x3340[7]][_0x3340[97]]&&_0x5387x8[_0x3340[105]](this._mergers,function(_0x5387x8){return _0x5387x8>1})[_0x3340[81]]>0){for(_0x5387x9=0,_0x5387x7=this[_0x3340[18]][_0x3340[81]];_0x5387x7>_0x5387x9;_0x5387x9++){_0x5387x4[_0x3340[74]]=Math[_0x3340[85]](this[_0x3340[18]][_0x5387x9])-Math[_0x3340[85]](this[_0x3340[18]][_0x5387x9-1]||0)-this[_0x3340[7]][_0x3340[98]],this[_0x3340[80]][_0x3340[79]]()[_0x3340[86]](_0x5387x9)[_0x3340[101]](_0x5387x4)}}else{this[_0x3340[80]][_0x3340[79]]()[_0x3340[101]](_0x5387x4)}}},{filter:[_0x3340[74],_0x3340[75],_0x3340[7]],run:function(_0x5387x8){_0x5387x8[_0x3340[76]]&&this[_0x3340[107]](this[_0x3340[80]][_0x3340[79]]()[_0x3340[106]](_0x5387x8[_0x3340[76]]))}},{filter:[_0x3340[108]],run:function(){this[_0x3340[110]](this[_0x3340[109]](this._current))}},{filter:[_0x3340[74],_0x3340[108],_0x3340[75],_0x3340[7]],run:function(){var _0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa,_0x5387x4=this[_0x3340[7]][_0x3340[93]]?1:-1,_0x5387xb=2*this[_0x3340[7]][_0x3340[99]],_0x5387xc=this[_0x3340[109]](this[_0x3340[76]]())+_0x5387xb,_0x5387xd=_0x5387xc+this[_0x3340[74]]()*_0x5387x4,_0x5387x5=[];for(_0x5387x7=0,_0x5387xa=this[_0x3340[18]][_0x3340[81]];_0x5387xa>_0x5387x7;_0x5387x7++){_0x5387x8=this[_0x3340[18]][_0x5387x7-1]||0,_0x5387x9=Math[_0x3340[85]](this[_0x3340[18]][_0x5387x7])+_0x5387xb*_0x5387x4,(this[_0x3340[112]](_0x5387x8,_0x3340[111],_0x5387xc)&&this[_0x3340[112]](_0x5387x8,_0x3340[113],_0x5387xd)||this[_0x3340[112]](_0x5387x9,_0x3340[114],_0x5387xc)&&this[_0x3340[112]](_0x5387x9,_0x3340[113],_0x5387xd))&&_0x5387x5[_0x3340[31]](_0x5387x7)};this[_0x3340[80]][_0x3340[79]](_0x3340[117]+this[_0x3340[7]][_0x3340[115]])[_0x3340[116]](this[_0x3340[7]][_0x3340[115]]),this[_0x3340[80]][_0x3340[79]](_0x3340[118]+_0x5387x5[_0x3340[120]](_0x3340[119])+_0x3340[121])[_0x3340[89]](this[_0x3340[7]][_0x3340[115]]),this[_0x3340[7]][_0x3340[66]]&&(this[_0x3340[80]][_0x3340[79]](_0x3340[117]+this[_0x3340[7]][_0x3340[122]])[_0x3340[116]](this[_0x3340[7]][_0x3340[122]]),this[_0x3340[80]][_0x3340[79]]()[_0x3340[86]](this[_0x3340[76]]())[_0x3340[89]](this[_0x3340[7]][_0x3340[122]]))}}],_0x5387x4[_0x3340[123]][_0x3340[33]]=function(){if(this[_0x3340[124]](_0x3340[33]),this[_0x3340[10]][_0x3340[89]](this[_0x3340[7]][_0x3340[128]])[_0x3340[89]](this[_0x3340[7]][_0x3340[127]])[_0x3340[126]](_0x3340[125],this[_0x3340[7]][_0x3340[93]]),this[_0x3340[129]](),this[_0x3340[7]][_0x3340[97]]&&this[_0x3340[12]][_0x3340[130]]!==!0){var _0x5387x9,_0x5387x7,_0x5387x4;if(_0x5387x9=this[_0x3340[10]][_0x3340[132]](_0x3340[131]),_0x5387x7=this[_0x3340[7]][_0x3340[133]]?_0x3340[117]+this[_0x3340[7]][_0x3340[133]]:_0x5387xa,_0x5387x4=this[_0x3340[10]][_0x3340[79]](_0x5387x7)[_0x3340[74]](),_0x5387x9[_0x3340[81]]&&0>=_0x5387x4){return this[_0x3340[134]](_0x5387x9),!1}};this[_0x3340[10]][_0x3340[89]](_0x3340[135]),this[_0x3340[80]]=_0x5387x8(_0x3340[114]+this[_0x3340[7]][_0x3340[138]]+_0x3340[139])[_0x3340[137]](_0x3340[136]),this[_0x3340[10]][_0x3340[91]](this[_0x3340[80]][_0x3340[140]]()),this[_0x3340[142]](this[_0x3340[10]][_0x3340[79]]()[_0x3340[141]](this[_0x3340[80]][_0x3340[140]]())),this[_0x3340[20]]=this[_0x3340[10]][_0x3340[74]](),this[_0x3340[143]](),this[_0x3340[10]][_0x3340[116]](_0x3340[135])[_0x3340[89]](_0x3340[144]),this[_0x3340[145]](),this[_0x3340[146]](),this[_0x3340[147]](),this[_0x3340[124]](_0x3340[148])},_0x5387x4[_0x3340[123]][_0x3340[32]]=function(){var _0x5387x9=this[_0x3340[149]](),_0x5387x7=this[_0x3340[8]][_0x3340[150]],_0x5387xa=-1,_0x5387x4=null;_0x5387x7?(_0x5387x8[_0x3340[4]](_0x5387x7,function(_0x5387x8){_0x5387x9>=_0x5387x8&&_0x5387x8>_0x5387xa&&(_0x5387xa=Number(_0x5387x8))}),_0x5387x4=_0x5387x8[_0x3340[9]]({},this[_0x3340[8]],_0x5387x7[_0x5387xa]),delete _0x5387x4[_0x3340[150]],_0x5387x4[_0x3340[151]]&&this[_0x3340[10]][_0x3340[154]](_0x3340[153],function(_0x5387x8,_0x5387x9){return _0x5387x9[_0x3340[142]](/\b owl-responsive-\S+/g,_0x3340[100])})[_0x3340[89]](_0x3340[152]+_0x5387xa)):_0x5387x4=_0x5387x8[_0x3340[9]]({},this[_0x3340[8]]),(null===this[_0x3340[7]]||this[_0x3340[19]]!==_0x5387xa)&&(this[_0x3340[124]](_0x3340[155],{property:{name:_0x3340[7],value:_0x5387x4}}),this[_0x3340[19]]=_0x5387xa,this[_0x3340[7]]=_0x5387x4,this[_0x3340[156]](_0x3340[7]),this[_0x3340[124]](_0x3340[157],{property:{name:_0x3340[7],value:this[_0x3340[7]]}}))},_0x5387x4[_0x3340[123]][_0x3340[158]]=function(){this[_0x3340[10]][_0x3340[126]](_0x3340[159],this[_0x3340[7]][_0x3340[66]]),this[_0x3340[7]][_0x3340[82]]&&this[_0x3340[21]][_0x3340[81]]<this[_0x3340[7]][_0x3340[75]]&&(this[_0x3340[7]][_0x3340[82]]=!1),this[_0x3340[7]][_0x3340[97]]&&(this[_0x3340[7]][_0x3340[99]]=!1,this[_0x3340[7]][_0x3340[160]]=!1)},_0x5387x4[_0x3340[123]][_0x3340[161]]=function(_0x5387x9){var _0x5387x7=this[_0x3340[124]](_0x3340[161],{content:_0x5387x9});return _0x5387x7[_0x3340[162]]||(_0x5387x7[_0x3340[162]]=_0x5387x8(_0x3340[114]+this[_0x3340[7]][_0x3340[164]]+_0x3340[165])[_0x3340[89]](this[_0x3340[7]][_0x3340[163]])[_0x3340[91]](_0x5387x9)),this[_0x3340[124]](_0x3340[166],{content:_0x5387x7[_0x3340[162]]}),_0x5387x7[_0x3340[162]]},_0x5387x4[_0x3340[123]][_0x3340[167]]=function(){for(var _0x5387x9=0,_0x5387x7=this[_0x3340[25]][_0x3340[81]],_0x5387xa=_0x5387x8[_0x3340[28]](function(_0x5387x8){return this[_0x5387x8]},this._invalidated),_0x5387x4={};_0x5387x7>_0x5387x9;){(this[_0x3340[24]][_0x3340[168]]||_0x5387x8[_0x3340[105]](this[_0x3340[25]][_0x5387x9][_0x3340[29]],_0x5387xa)[_0x3340[81]]>0)&&this[_0x3340[25]][_0x5387x9][_0x3340[30]](_0x5387x4),_0x5387x9++};this[_0x3340[24]]={}},_0x5387x4[_0x3340[123]][_0x3340[74]]=function(_0x5387x8){switch(_0x5387x8=_0x5387x8||_0x5387x4[_0x3340[68]][_0x3340[171]]){case _0x5387x4[_0x3340[68]][_0x3340[169]]:;case _0x5387x4[_0x3340[68]][_0x3340[170]]:return this[_0x3340[20]];default:return this[_0x3340[20]]-2*this[_0x3340[7]][_0x3340[99]]+this[_0x3340[7]][_0x3340[98]]}},_0x5387x4[_0x3340[123]][_0x3340[143]]=function(){if(0===this[_0x3340[21]][_0x3340[81]]){return!1};(new Date)[_0x3340[172]]();this[_0x3340[124]](_0x3340[143]),this[_0x3340[32]](),this[_0x3340[158]](),this[_0x3340[80]][_0x3340[89]](_0x3340[173]),this[_0x3340[167]](),this[_0x3340[80]][_0x3340[116]](_0x3340[173]),this[_0x3340[12]][_0x3340[174]]=_0x5387x9[_0x3340[174]],this[_0x3340[175]](),this[_0x3340[124]](_0x3340[176])},_0x5387x4[_0x3340[123]][_0x3340[145]]=function(){this[_0x3340[13]][_0x3340[177]]=_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[178]](_0x5387x8)},this),this[_0x3340[13]][_0x3340[179]]=_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[180]](_0x5387x8)},this),this[_0x3340[13]][_0x3340[181]]=_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[182]](_0x5387x8)},this),this[_0x3340[13]][_0x3340[183]]=_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[184]](_0x5387x8)},this),this[_0x3340[13]][_0x3340[185]]=_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[186]](_0x5387x8)},this),this[_0x3340[13]][_0x3340[187]]=_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[188]](_0x5387x8)},this)},_0x5387x4[_0x3340[123]][_0x3340[189]]=function(){_0x5387x9[_0x3340[191]](this[_0x3340[190]]),this[_0x3340[190]]=_0x5387x9[_0x3340[193]](this[_0x3340[13]]._onResize,this[_0x3340[7]][_0x3340[192]])},_0x5387x4[_0x3340[123]][_0x3340[184]]=function(){return this[_0x3340[21]][_0x3340[81]]?this[_0x3340[20]]===this[_0x3340[10]][_0x3340[74]]()?!1:this[_0x3340[124]](_0x3340[195])[_0x3340[194]]()?!1:(this[_0x3340[20]]=this[_0x3340[10]][_0x3340[74]](),this[_0x3340[156]](_0x3340[74]),this[_0x3340[143]](),void(this)[_0x3340[124]](_0x3340[196])):!1},_0x5387x4[_0x3340[123]][_0x3340[197]]=function(_0x5387x8){var _0x5387x9=_0x5387x8[_0x3340[198]];_0x3340[199]===_0x5387x9||_0x3340[200]===_0x5387x9?this[_0x3340[178]](_0x5387x8):_0x3340[201]===_0x5387x9||_0x3340[202]===_0x5387x9?this[_0x3340[180]](_0x5387x8):_0x3340[203]===_0x5387x9||_0x3340[204]===_0x5387x9?this[_0x3340[182]](_0x5387x8):_0x3340[205]===_0x5387x9&&this[_0x3340[182]](_0x5387x8)},_0x5387x4[_0x3340[123]][_0x3340[146]]=function(){var _0x5387x7=(_0x5387xf(),_0x5387x10());this[_0x3340[7]][_0x3340[206]]?(this[_0x3340[80]][_0x3340[207]](_0x3340[199],_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[197]](_0x5387x8)},this)),this[_0x3340[80]][_0x3340[207]](_0x3340[208],function(){return!1}),this[_0x3340[80]][_0x3340[210]](0)[_0x3340[209]]=function(){return!1}):this[_0x3340[10]][_0x3340[89]](_0x3340[211]),this[_0x3340[7]][_0x3340[212]]&&!_0x5387x7&&this[_0x3340[80]][_0x3340[207]](_0x3340[213],_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[197]](_0x5387x8)},this)),this[_0x3340[214]]&&this[_0x3340[207]](this[_0x3340[80]][_0x3340[210]](0),this[_0x3340[214]],this[_0x3340[13]]._transitionEnd,!1),this[_0x3340[7]][_0x3340[150]]!==!1&&this[_0x3340[207]](_0x5387x9,_0x3340[195],_0x5387x8[_0x3340[28]](this[_0x3340[189]],this))},_0x5387x4[_0x3340[123]][_0x3340[178]]=function(_0x5387xa){var _0x5387x4,_0x5387xc,_0x5387xd,_0x5387x5;if(_0x5387x4=_0x5387xa[_0x3340[215]]||_0x5387xa||_0x5387x9[_0x3340[216]],3===_0x5387x4[_0x3340[217]]||this[_0x3340[12]][_0x3340[218]]){return!1};if(_0x3340[199]===_0x5387x4[_0x3340[198]]&&this[_0x3340[80]][_0x3340[89]](_0x3340[219]),this[_0x3340[124]](_0x3340[11]),this[_0x3340[11]][_0x3340[220]]=(new Date)[_0x3340[172]](),this[_0x3340[221]](0),this[_0x3340[12]][_0x3340[218]]=!0,this[_0x3340[12]][_0x3340[222]]=!1,this[_0x3340[12]][_0x3340[223]]=!1,this[_0x3340[11]][_0x3340[224]]=0,_0x5387xc=_0x5387xb(_0x5387x4)[_0x3340[225]],_0x5387xd=_0x5387xb(_0x5387x4)[_0x3340[226]],this[_0x3340[11]][_0x3340[227]]=this[_0x3340[80]][_0x3340[108]]()[_0x3340[228]],this[_0x3340[11]][_0x3340[229]]=this[_0x3340[80]][_0x3340[108]]()[_0x3340[230]],this[_0x3340[7]][_0x3340[93]]&&(this[_0x3340[11]][_0x3340[227]]=this[_0x3340[80]][_0x3340[108]]()[_0x3340[228]]+this[_0x3340[80]][_0x3340[74]]()-this[_0x3340[74]]()+this[_0x3340[7]][_0x3340[98]]),this[_0x3340[12]][_0x3340[231]]&&this[_0x3340[232]]){_0x5387x5=this[_0x3340[233]](),this[_0x3340[11]][_0x3340[227]]=_0x5387x5,this[_0x3340[110]](_0x5387x5),this[_0x3340[12]][_0x3340[231]]=!0}else{if(this[_0x3340[12]][_0x3340[231]]&&!this[_0x3340[232]]){return this[_0x3340[12]][_0x3340[231]]=!1,!1}};this[_0x3340[11]][_0x3340[234]]=_0x5387xc-this[_0x3340[11]][_0x3340[227]],this[_0x3340[11]][_0x3340[235]]=_0x5387xd-this[_0x3340[11]][_0x3340[229]],this[_0x3340[11]][_0x3340[236]]=_0x5387xc-this[_0x3340[11]][_0x3340[234]],this[_0x3340[11]][_0x3340[237]]=_0x5387x4[_0x3340[238]]||_0x5387x4[_0x3340[239]],this[_0x3340[11]][_0x3340[240]]=this[_0x3340[11]][_0x3340[236]],(_0x3340[241]===this[_0x3340[11]][_0x3340[237]][_0x3340[242]]||_0x3340[243]===this[_0x3340[11]][_0x3340[237]][_0x3340[242]])&&(this[_0x3340[11]][_0x3340[237]][_0x3340[244]]=!1),_0x5387x8(_0x5387x7)[_0x3340[207]](_0x3340[245],_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[197]](_0x5387x8)},this))},_0x5387x4[_0x3340[123]][_0x3340[180]]=function(_0x5387x8){var _0x5387x7,_0x5387x4,_0x5387xc,_0x5387xd,_0x5387x5,_0x5387xe;this[_0x3340[12]][_0x3340[218]]&&(this[_0x3340[12]][_0x3340[222]]||(_0x5387x7=_0x5387x8[_0x3340[215]]||_0x5387x8||_0x5387x9[_0x3340[216]],_0x5387x4=_0x5387xb(_0x5387x7)[_0x3340[225]],_0x5387xc=_0x5387xb(_0x5387x7)[_0x3340[226]],this[_0x3340[11]][_0x3340[246]]=_0x5387x4-this[_0x3340[11]][_0x3340[234]],this[_0x3340[11]][_0x3340[247]]=_0x5387xc-this[_0x3340[11]][_0x3340[235]],this[_0x3340[11]][_0x3340[224]]=this[_0x3340[11]][_0x3340[246]]-this[_0x3340[11]][_0x3340[227]],this[_0x3340[11]][_0x3340[224]]<0?this[_0x3340[12]][_0x3340[248]]=this[_0x3340[7]][_0x3340[93]]?_0x3340[249]:_0x3340[228]:this[_0x3340[11]][_0x3340[224]]>0&&(this[_0x3340[12]][_0x3340[248]]=this[_0x3340[7]][_0x3340[93]]?_0x3340[228]:_0x3340[249]),this[_0x3340[7]][_0x3340[82]]?this[_0x3340[112]](this[_0x3340[11]][_0x3340[246]],_0x3340[113],this[_0x3340[109]](this[_0x3340[250]]()))&&_0x3340[249]===this[_0x3340[12]][_0x3340[248]]?this[_0x3340[11]][_0x3340[246]]-=(this[_0x3340[7]][_0x3340[66]]&&this[_0x3340[109]](0))-this[_0x3340[109]](this[_0x3340[21]][_0x3340[81]]):this[_0x3340[112]](this[_0x3340[11]][_0x3340[246]],_0x3340[114],this[_0x3340[109]](this[_0x3340[251]]()))&&_0x3340[228]===this[_0x3340[12]][_0x3340[248]]&&(this[_0x3340[11]][_0x3340[246]]+=(this[_0x3340[7]][_0x3340[66]]&&this[_0x3340[109]](0))-this[_0x3340[109]](this[_0x3340[21]][_0x3340[81]])):(_0x5387xd=this[_0x3340[109]](this[_0x3340[7]][_0x3340[93]]?this[_0x3340[251]]():this[_0x3340[250]]()),_0x5387x5=this[_0x3340[109]](this[_0x3340[7]][_0x3340[93]]?this[_0x3340[250]]():this[_0x3340[251]]()),_0x5387xe=this[_0x3340[7]][_0x3340[252]]?this[_0x3340[11]][_0x3340[224]]/5:0,this[_0x3340[11]][_0x3340[246]]=Math[_0x3340[84]](Math[_0x3340[96]](this[_0x3340[11]][_0x3340[246]],_0x5387xd+_0x5387xe),_0x5387x5+_0x5387xe)),(this[_0x3340[11]][_0x3340[224]]>8||this[_0x3340[11]][_0x3340[224]]<-8)&&(_0x5387x7[_0x3340[253]]!==_0x5387xa?_0x5387x7[_0x3340[253]]():_0x5387x7[_0x3340[254]]=!1,this[_0x3340[12]][_0x3340[223]]=!0),this[_0x3340[11]][_0x3340[240]]=this[_0x3340[11]][_0x3340[246]],(this[_0x3340[11]][_0x3340[247]]>16||this[_0x3340[11]][_0x3340[247]]<-16)&&this[_0x3340[12]][_0x3340[223]]===!1&&(this[_0x3340[12]][_0x3340[222]]=!0,this[_0x3340[11]][_0x3340[240]]=this[_0x3340[11]][_0x3340[236]]),this[_0x3340[110]](this[_0x3340[11]][_0x3340[240]])))},_0x5387x4[_0x3340[123]][_0x3340[182]]=function(_0x5387x9){var _0x5387xa,_0x5387x4,_0x5387xb;if(this[_0x3340[12]][_0x3340[218]]){if(_0x3340[203]===_0x5387x9[_0x3340[198]]&&this[_0x3340[80]][_0x3340[116]](_0x3340[219]),this[_0x3340[124]](_0x3340[255]),this[_0x3340[11]][_0x3340[237]][_0x3340[256]](_0x3340[244]),this[_0x3340[12]][_0x3340[218]]=!1,this[_0x3340[12]][_0x3340[222]]=!1,this[_0x3340[12]][_0x3340[223]]=!1,0===this[_0x3340[11]][_0x3340[224]]&&this[_0x3340[12]][_0x3340[231]]!==!0){return this[_0x3340[12]][_0x3340[231]]=!1,!1};this[_0x3340[11]][_0x3340[257]]=(new Date)[_0x3340[172]](),_0x5387xa=this[_0x3340[11]][_0x3340[257]]-this[_0x3340[11]][_0x3340[220]],_0x5387x4=Math[_0x3340[85]](this[_0x3340[11]][_0x3340[224]]),(_0x5387x4>3||_0x5387xa>300)&&this[_0x3340[258]](this[_0x3340[11]][_0x3340[237]]),_0x5387xb=this[_0x3340[259]](this[_0x3340[11]][_0x3340[240]]),this[_0x3340[221]](this[_0x3340[7]][_0x3340[260]]||this[_0x3340[7]][_0x3340[261]]),this[_0x3340[76]](_0x5387xb),this[_0x3340[156]](_0x3340[108]),this[_0x3340[167]](),this[_0x3340[7]][_0x3340[252]]||this[_0x3340[11]][_0x3340[240]]!==this[_0x3340[109]](_0x5387xb)||this[_0x3340[186]](),this[_0x3340[11]][_0x3340[224]]=0,_0x5387x8(_0x5387x7)[_0x3340[263]](_0x3340[262])}},_0x5387x4[_0x3340[123]][_0x3340[258]]=function(_0x5387x7){this[_0x3340[11]][_0x3340[237]]=_0x5387x7,_0x5387x8(_0x5387x7)[_0x3340[207]](_0x3340[264],this[_0x3340[13]]._preventClick),_0x5387x9[_0x3340[193]](function(){_0x5387x8(_0x5387x7)[_0x3340[263]](_0x3340[264])},300)},_0x5387x4[_0x3340[123]][_0x3340[188]]=function(_0x5387x9){_0x5387x9[_0x3340[253]]?_0x5387x9[_0x3340[253]]():_0x5387x9[_0x3340[254]]=!1,_0x5387x9[_0x3340[265]]&&_0x5387x9[_0x3340[265]](),_0x5387x8(_0x5387x9[_0x3340[238]])[_0x3340[263]](_0x3340[264])},_0x5387x4[_0x3340[123]][_0x3340[233]]=function(){var _0x5387x8,_0x5387x7;return _0x5387x8=_0x5387x9[_0x3340[268]](this[_0x3340[80]][_0x3340[210]](0),null)[_0x3340[267]](this[_0x3340[266]]+_0x3340[47]),_0x5387x8=_0x5387x8[_0x3340[142]](/matrix(3d)?\(|\)/g,_0x3340[100])[_0x3340[270]](_0x3340[269]),_0x5387x7=16===_0x5387x8[_0x3340[81]],_0x5387x7!==!0?_0x5387x8[4]:_0x5387x8[12]},_0x5387x4[_0x3340[123]][_0x3340[259]]=function(_0x5387x9){var _0x5387x7=-1,_0x5387xa=30,_0x5387x4=this[_0x3340[74]](),_0x5387xb=this[_0x3340[109]]();return this[_0x3340[7]][_0x3340[271]]||_0x5387x8[_0x3340[4]](_0x5387xb,_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387xc){return _0x5387x9>_0x5387xc-_0x5387xa&&_0x5387xc+_0x5387xa>_0x5387x9?_0x5387x7=_0x5387x8:this[_0x3340[112]](_0x5387x9,_0x3340[114],_0x5387xc)&&this[_0x3340[112]](_0x5387x9,_0x3340[113],_0x5387xb[_0x5387x8+1]||_0x5387xc-_0x5387x4)&&(_0x5387x7=_0x3340[228]===this[_0x3340[12]][_0x3340[248]]?_0x5387x8+1:_0x5387x8),-1===_0x5387x7},this)),this[_0x3340[7]][_0x3340[82]]||(this[_0x3340[112]](_0x5387x9,_0x3340[113],_0x5387xb[this[_0x3340[250]]()])?_0x5387x7=_0x5387x9=this[_0x3340[250]]():this[_0x3340[112]](_0x5387x9,_0x3340[114],_0x5387xb[this[_0x3340[251]]()])&&(_0x5387x7=_0x5387x9=this[_0x3340[251]]())),_0x5387x7},_0x5387x4[_0x3340[123]][_0x3340[110]]=function(_0x5387x9){this[_0x3340[124]](_0x3340[272]),this[_0x3340[12]][_0x3340[231]]=this[_0x3340[221]]()>0,this[_0x3340[232]]?this[_0x3340[80]][_0x3340[101]]({transform:_0x3340[273]+_0x5387x9+_0x3340[274],transition:this[_0x3340[221]]()/1e3+_0x3340[275]}):this[_0x3340[12]][_0x3340[218]]?this[_0x3340[80]][_0x3340[101]]({left:_0x5387x9+_0x3340[276]}):this[_0x3340[80]][_0x3340[110]]({left:_0x5387x9},this[_0x3340[221]]()/1e3,this[_0x3340[7]][_0x3340[277]],_0x5387x8[_0x3340[28]](function(){this[_0x3340[12]][_0x3340[231]]&&this[_0x3340[186]]()},this))},_0x5387x4[_0x3340[123]][_0x3340[76]]=function(_0x5387x8){if(_0x5387x8===_0x5387xa){return this[_0x3340[16]]};if(0===this[_0x3340[21]][_0x3340[81]]){return _0x5387xa};if(_0x5387x8=this[_0x3340[278]](_0x5387x8),this[_0x3340[16]]!==_0x5387x8){var _0x5387x9=this[_0x3340[124]](_0x3340[155],{property:{name:_0x3340[108],value:_0x5387x8}});_0x5387x9[_0x3340[162]]!==_0x5387xa&&(_0x5387x8=this[_0x3340[278]](_0x5387x9[_0x3340[162]])),this[_0x3340[16]]=_0x5387x8,this[_0x3340[156]](_0x3340[108]),this[_0x3340[124]](_0x3340[157],{property:{name:_0x3340[108],value:this[_0x3340[16]]}})};return this[_0x3340[16]]},_0x5387x4[_0x3340[123]][_0x3340[156]]=function(_0x5387x8){this[_0x3340[24]][_0x5387x8]=!0},_0x5387x4[_0x3340[123]][_0x3340[107]]=function(_0x5387x8){_0x5387x8=this[_0x3340[278]](_0x5387x8),_0x5387x8!==_0x5387xa&&(this[_0x3340[17]]=0,this[_0x3340[16]]=_0x5387x8,this[_0x3340[280]]([_0x3340[272],_0x3340[279]]),this[_0x3340[110]](this[_0x3340[109]](_0x5387x8)),this[_0x3340[281]]([_0x3340[272],_0x3340[279]]))},_0x5387x4[_0x3340[123]][_0x3340[278]]=function(_0x5387x9,_0x5387x7){var _0x5387x4=_0x5387x7?this[_0x3340[21]][_0x3340[81]]:this[_0x3340[21]][_0x3340[81]]+this[_0x3340[22]][_0x3340[81]];return!_0x5387x8[_0x3340[282]](_0x5387x9)||1>_0x5387x4?_0x5387xa:_0x5387x9=this[_0x3340[22]][_0x3340[81]]?(_0x5387x9%_0x5387x4+_0x5387x4)%_0x5387x4:Math[_0x3340[84]](this[_0x3340[250]](_0x5387x7),Math[_0x3340[96]](this[_0x3340[251]](_0x5387x7),_0x5387x9))},_0x5387x4[_0x3340[123]][_0x3340[77]]=function(_0x5387x8){return _0x5387x8=this[_0x3340[278]](_0x5387x8),_0x5387x8-=this[_0x3340[22]][_0x3340[81]]/2,this[_0x3340[278]](_0x5387x8,!0)},_0x5387x4[_0x3340[123]][_0x3340[251]]=function(_0x5387x8){var _0x5387x9,_0x5387x7,_0x5387xa,_0x5387x4=0,_0x5387xb=this[_0x3340[7]];if(_0x5387x8){return this[_0x3340[21]][_0x3340[81]]-1};if(!_0x5387xb[_0x3340[82]]&&_0x5387xb[_0x3340[66]]){_0x5387x9=this[_0x3340[21]][_0x3340[81]]-1}else{if(_0x5387xb[_0x3340[82]]||_0x5387xb[_0x3340[66]]){if(_0x5387xb[_0x3340[82]]||_0x5387xb[_0x3340[66]]){_0x5387x9=this[_0x3340[21]][_0x3340[81]]+_0x5387xb[_0x3340[75]]}else{if(!_0x5387xb[_0x3340[97]]&&!_0x5387xb[_0x3340[160]]){throw _0x3340[283]};for(revert=_0x5387xb[_0x3340[93]]?1:-1,_0x5387x7=this[_0x3340[80]][_0x3340[74]]()-this[_0x3340[10]][_0x3340[74]]();(_0x5387xa=this[_0x3340[109]](_0x5387x4))&&!(_0x5387xa*revert>=_0x5387x7);){_0x5387x9=++_0x5387x4}}}else{_0x5387x9=this[_0x3340[21]][_0x3340[81]]-_0x5387xb[_0x3340[75]]}};return _0x5387x9},_0x5387x4[_0x3340[123]][_0x3340[250]]=function(_0x5387x8){return _0x5387x8?0:this[_0x3340[22]][_0x3340[81]]/2},_0x5387x4[_0x3340[123]][_0x3340[75]]=function(_0x5387x8){return _0x5387x8===_0x5387xa?this[_0x3340[21]][_0x3340[27]]():(_0x5387x8=this[_0x3340[278]](_0x5387x8,!0),this[_0x3340[21]][_0x5387x8])},_0x5387x4[_0x3340[123]][_0x3340[284]]=function(_0x5387x8){return _0x5387x8===_0x5387xa?this[_0x3340[23]][_0x3340[27]]():(_0x5387x8=this[_0x3340[278]](_0x5387x8,!0),this[_0x3340[23]][_0x5387x8])},_0x5387x4[_0x3340[123]][_0x3340[285]]=function(_0x5387x9){var _0x5387x7=this[_0x3340[22]][_0x3340[81]]/2,_0x5387x4=_0x5387x7+this[_0x3340[21]][_0x3340[81]],_0x5387xb=function(_0x5387x8){return _0x5387x8%2===0?_0x5387x4+_0x5387x8/2:_0x5387x7-(_0x5387x8+1)/2};return _0x5387x9===_0x5387xa?_0x5387x8[_0x3340[286]](this._clones,function(_0x5387x8,_0x5387x9){return _0x5387xb(_0x5387x9)}):_0x5387x8[_0x3340[286]](this._clones,function(_0x5387x8,_0x5387x7){return _0x5387x8===_0x5387x9?_0x5387xb(_0x5387x7):null})},_0x5387x4[_0x3340[123]][_0x3340[221]]=function(_0x5387x8){return _0x5387x8!==_0x5387xa&&(this[_0x3340[17]]=_0x5387x8),this[_0x3340[17]]},_0x5387x4[_0x3340[123]][_0x3340[109]]=function(_0x5387x9){var _0x5387x7=null;return _0x5387x9===_0x5387xa?_0x5387x8[_0x3340[286]](this._coordinates,_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x9){return this[_0x3340[109]](_0x5387x9)},this)):(this[_0x3340[7]][_0x3340[66]]?(_0x5387x7=this[_0x3340[18]][_0x5387x9],_0x5387x7+=(this[_0x3340[74]]()-_0x5387x7+(this[_0x3340[18]][_0x5387x9-1]||0))/2*(this[_0x3340[7]][_0x3340[93]]?-1:1)):_0x5387x7=this[_0x3340[18]][_0x5387x9-1]||0,_0x5387x7)},_0x5387x4[_0x3340[123]][_0x3340[287]]=function(_0x5387x8,_0x5387x9,_0x5387x7){return Math[_0x3340[96]](Math[_0x3340[84]](Math[_0x3340[85]](_0x5387x9-_0x5387x8),1),6)*Math[_0x3340[85]](_0x5387x7||this[_0x3340[7]][_0x3340[261]])},_0x5387x4[_0x3340[123]][_0x3340[288]]=function(_0x5387x7,_0x5387xa){if(this[_0x3340[7]][_0x3340[82]]){var _0x5387x4=_0x5387x7-this[_0x3340[77]](this[_0x3340[76]]()),_0x5387xb=this[_0x3340[76]](),_0x5387xc=this[_0x3340[76]](),_0x5387xd=this[_0x3340[76]]()+_0x5387x4,_0x5387x5=0>_0x5387xc-_0x5387xd?!0:!1,_0x5387xe=this[_0x3340[22]][_0x3340[81]]+this[_0x3340[21]][_0x3340[81]];_0x5387xd<this[_0x3340[7]][_0x3340[75]]&&_0x5387x5===!1?(_0x5387xb=_0x5387xc+this[_0x3340[21]][_0x3340[81]],this[_0x3340[107]](_0x5387xb)):_0x5387xd>=_0x5387xe-this[_0x3340[7]][_0x3340[75]]&&_0x5387x5===!0&&(_0x5387xb=_0x5387xc-this[_0x3340[21]][_0x3340[81]],this[_0x3340[107]](_0x5387xb)),_0x5387x9[_0x3340[191]](this[_0x3340[13]]._goToLoop),this[_0x3340[13]][_0x3340[289]]=_0x5387x9[_0x3340[193]](_0x5387x8[_0x3340[28]](function(){this[_0x3340[221]](this[_0x3340[287]](this[_0x3340[76]](),_0x5387xb+_0x5387x4,_0x5387xa)),this[_0x3340[76]](_0x5387xb+_0x5387x4),this[_0x3340[167]]()},this),30)}else{this[_0x3340[221]](this[_0x3340[287]](this[_0x3340[76]](),_0x5387x7,_0x5387xa)),this[_0x3340[76]](_0x5387x7),this[_0x3340[167]]()}},_0x5387x4[_0x3340[123]][_0x3340[290]]=function(_0x5387x8){_0x5387x8=_0x5387x8||!1,this[_0x3340[288]](this[_0x3340[77]](this[_0x3340[76]]())+1,_0x5387x8)},_0x5387x4[_0x3340[123]][_0x3340[291]]=function(_0x5387x8){_0x5387x8=_0x5387x8||!1,this[_0x3340[288]](this[_0x3340[77]](this[_0x3340[76]]())-1,_0x5387x8)},_0x5387x4[_0x3340[123]][_0x3340[186]]=function(_0x5387x8){return _0x5387x8!==_0x5387xa&&(_0x5387x8[_0x3340[265]](),(_0x5387x8[_0x3340[238]]||_0x5387x8[_0x3340[239]]||_0x5387x8[_0x3340[292]])!==this[_0x3340[80]][_0x3340[210]](0))?!1:(this[_0x3340[12]][_0x3340[231]]=!1,void(this)[_0x3340[124]](_0x3340[279]))},_0x5387x4[_0x3340[123]][_0x3340[149]]=function(){var _0x5387xa;if(this[_0x3340[8]][_0x3340[293]]!==_0x5387x9){_0x5387xa=_0x5387x8(this[_0x3340[8]][_0x3340[293]])[_0x3340[74]]()}else{if(_0x5387x9[_0x3340[294]]){_0x5387xa=_0x5387x9[_0x3340[294]]}else{if(!_0x5387x7[_0x3340[295]]||!_0x5387x7[_0x3340[295]][_0x3340[296]]){throw _0x3340[297]};_0x5387xa=_0x5387x7[_0x3340[295]][_0x3340[296]]}};return _0x5387xa},_0x5387x4[_0x3340[123]][_0x3340[142]]=function(_0x5387x9){this[_0x3340[80]][_0x3340[298]](),this[_0x3340[21]]=[],_0x5387x9&&(_0x5387x9=_0x5387x9 instanceof jQuery?_0x5387x9:_0x5387x8(_0x5387x9)),this[_0x3340[7]][_0x3340[133]]&&(_0x5387x9=_0x5387x9[_0x3340[132]](_0x3340[117]+this[_0x3340[7]][_0x3340[133]])),_0x5387x9[_0x3340[29]](function(){return 1===this[_0x3340[302]]})[_0x3340[4]](_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x9){_0x5387x9=this[_0x3340[161]](_0x5387x9),this[_0x3340[80]][_0x3340[91]](_0x5387x9),this[_0x3340[21]][_0x3340[31]](_0x5387x9),this[_0x3340[23]][_0x3340[31]](1*_0x5387x9[_0x3340[132]](_0x3340[300])[_0x3340[301]](_0x3340[300])[_0x3340[154]](_0x3340[299])||1)},this)),this[_0x3340[107]](_0x5387x8[_0x3340[282]](this[_0x3340[7]][_0x3340[303]])?this[_0x3340[7]][_0x3340[303]]:0),this[_0x3340[156]](_0x3340[75])},_0x5387x4[_0x3340[123]][_0x3340[304]]=function(_0x5387x8,_0x5387x9){_0x5387x9=_0x5387x9===_0x5387xa?this[_0x3340[21]][_0x3340[81]]:this[_0x3340[278]](_0x5387x9,!0),this[_0x3340[124]](_0x3340[304],{content:_0x5387x8,position:_0x5387x9}),0===this[_0x3340[21]][_0x3340[81]]||_0x5387x9===this[_0x3340[21]][_0x3340[81]]?(this[_0x3340[80]][_0x3340[91]](_0x5387x8),this[_0x3340[21]][_0x3340[31]](_0x5387x8),this[_0x3340[23]][_0x3340[31]](1*_0x5387x8[_0x3340[132]](_0x3340[300])[_0x3340[301]](_0x3340[300])[_0x3340[154]](_0x3340[299])||1)):(this[_0x3340[21]][_0x5387x9][_0x3340[305]](_0x5387x8),this[_0x3340[21]][_0x3340[306]](_0x5387x9,0,_0x5387x8),this[_0x3340[23]][_0x3340[306]](_0x5387x9,0,1*_0x5387x8[_0x3340[132]](_0x3340[300])[_0x3340[301]](_0x3340[300])[_0x3340[154]](_0x3340[299])||1)),this[_0x3340[156]](_0x3340[75]),this[_0x3340[124]](_0x3340[307],{content:_0x5387x8,position:_0x5387x9})},_0x5387x4[_0x3340[123]][_0x3340[83]]=function(_0x5387x8){_0x5387x8=this[_0x3340[278]](_0x5387x8,!0),_0x5387x8!==_0x5387xa&&(this[_0x3340[124]](_0x3340[83],{content:this[_0x3340[21]][_0x5387x8],position:_0x5387x8}),this[_0x3340[21]][_0x5387x8][_0x3340[83]](),this[_0x3340[21]][_0x3340[306]](_0x5387x8,1),this[_0x3340[23]][_0x3340[306]](_0x5387x8,1),this[_0x3340[156]](_0x3340[75]),this[_0x3340[124]](_0x3340[308],{content:null,position:_0x5387x8}))},_0x5387x4[_0x3340[123]][_0x3340[147]]=function(){var _0x5387x9=_0x5387x8[_0x3340[28]](function(_0x5387x9,_0x5387x7){return _0x5387x8[_0x3340[28]](function(_0x5387x8){_0x5387x8[_0x3340[309]]!==this&&(this[_0x3340[280]]([_0x5387x7]),_0x5387x9[_0x3340[310]](this,[][_0x3340[27]][_0x3340[2]](arguments,1)),this[_0x3340[281]]([_0x5387x7]))},this)},this);_0x5387x8[_0x3340[4]]({next:this[_0x3340[290]],prev:this[_0x3340[291]],to:this[_0x3340[288]],destroy:this[_0x3340[311]],refresh:this[_0x3340[143]],replace:this[_0x3340[142]],add:this[_0x3340[304]],remove:this[_0x3340[83]]},_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x7){this[_0x3340[10]][_0x3340[207]](_0x5387x8+_0x3340[312],_0x5387x9(_0x5387x7,_0x5387x8+_0x3340[312]))},this))},_0x5387x4[_0x3340[123]][_0x3340[175]]=function(){function _0x5387x7(_0x5387x8){return _0x5387x8[_0x3340[313]]>0&&_0x5387x8[_0x3340[314]]>0}function _0x5387xa(){_0x5387x7(this[_0x3340[10]][_0x3340[210]](0))&&(this[_0x3340[10]][_0x3340[116]](_0x3340[315]),this[_0x3340[143]](),_0x5387x9[_0x3340[316]](this[_0x3340[13]]._checkVisibile))}_0x5387x7(this[_0x3340[10]][_0x3340[210]](0))||(this[_0x3340[10]][_0x3340[89]](_0x3340[315]),_0x5387x9[_0x3340[316]](this[_0x3340[13]]._checkVisibile),this[_0x3340[13]][_0x3340[317]]=_0x5387x9[_0x3340[318]](_0x5387x8[_0x3340[28]](_0x5387xa,this),500))},_0x5387x4[_0x3340[123]][_0x3340[134]]=function(_0x5387x9){var _0x5387x7,_0x5387xa,_0x5387x4,_0x5387xb;_0x5387x7=0,_0x5387xa=this,_0x5387x9[_0x3340[4]](function(_0x5387xc,_0x5387xd){_0x5387x4=_0x5387x8(_0x5387xd),_0x5387xb=new Image,_0x5387xb[_0x3340[319]]=function(){_0x5387x7++,_0x5387x4[_0x3340[154]](_0x3340[320],_0x5387xb[_0x3340[320]]),_0x5387x4[_0x3340[101]](_0x3340[321],1),_0x5387x7>=_0x5387x9[_0x3340[81]]&&(_0x5387xa[_0x3340[12]][_0x3340[130]]=!0,_0x5387xa[_0x3340[33]]())},_0x5387xb[_0x3340[320]]=_0x5387x4[_0x3340[154]](_0x3340[320])||_0x5387x4[_0x3340[154]](_0x3340[322])||_0x5387x4[_0x3340[154]](_0x3340[323])})},_0x5387x4[_0x3340[123]][_0x3340[311]]=function(){this[_0x3340[10]][_0x3340[324]](this[_0x3340[7]][_0x3340[127]])&&this[_0x3340[10]][_0x3340[116]](this[_0x3340[7]][_0x3340[127]]),this[_0x3340[7]][_0x3340[150]]!==!1&&_0x5387x8(_0x5387x9)[_0x3340[263]](_0x3340[325]),this[_0x3340[214]]&&this[_0x3340[263]](this[_0x3340[80]][_0x3340[210]](0),this[_0x3340[214]],this[_0x3340[13]]._transitionEnd);for(var _0x5387xa in this[_0x3340[14]]){this[_0x3340[14]][_0x5387xa][_0x3340[311]]()};(this[_0x3340[7]][_0x3340[206]]||this[_0x3340[7]][_0x3340[212]])&&(this[_0x3340[80]][_0x3340[263]](_0x3340[326]),_0x5387x8(_0x5387x7)[_0x3340[263]](_0x3340[262]),this[_0x3340[80]][_0x3340[210]](0)[_0x3340[209]]=function(){},this[_0x3340[80]][_0x3340[263]](_0x3340[208],function(){return!1})),this[_0x3340[10]][_0x3340[263]](_0x3340[327]),this[_0x3340[80]][_0x3340[79]](_0x3340[78])[_0x3340[83]](),this[_0x3340[13]]=null,this[_0x3340[10]][_0x3340[329]](_0x3340[328]),this[_0x3340[80]][_0x3340[79]]()[_0x3340[331]]()[_0x3340[330]](),this[_0x3340[80]][_0x3340[79]]()[_0x3340[330]](),this[_0x3340[80]][_0x3340[330]]()},_0x5387x4[_0x3340[123]][_0x3340[112]]=function(_0x5387x8,_0x5387x9,_0x5387x7){var _0x5387xa=this[_0x3340[7]][_0x3340[93]];switch(_0x5387x9){case _0x3340[114]:return _0x5387xa?_0x5387x8>_0x5387x7:_0x5387x7>_0x5387x8;case _0x3340[113]:return _0x5387xa?_0x5387x7>_0x5387x8:_0x5387x8>_0x5387x7;case _0x3340[332]:return _0x5387xa?_0x5387x7>=_0x5387x8:_0x5387x8>=_0x5387x7;case _0x3340[111]:return _0x5387xa?_0x5387x8>=_0x5387x7:_0x5387x7>=_0x5387x8}},_0x5387x4[_0x3340[123]][_0x3340[207]]=function(_0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa){_0x5387x8[_0x3340[333]]?_0x5387x8[_0x3340[333]](_0x5387x9,_0x5387x7,_0x5387xa):_0x5387x8[_0x3340[334]]&&_0x5387x8[_0x3340[334]](_0x3340[207]+_0x5387x9,_0x5387x7)},_0x5387x4[_0x3340[123]][_0x3340[263]]=function(_0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa){_0x5387x8[_0x3340[335]]?_0x5387x8[_0x3340[335]](_0x5387x9,_0x5387x7,_0x5387xa):_0x5387x8[_0x3340[336]]&&_0x5387x8[_0x3340[336]](_0x3340[207]+_0x5387x9,_0x5387x7)},_0x5387x4[_0x3340[123]][_0x3340[124]]=function(_0x5387x9,_0x5387x7,_0x5387xa){var _0x5387x4={item:{count:this[_0x3340[21]][_0x3340[81]],index:this[_0x3340[76]]()}},_0x5387xb=_0x5387x8[_0x3340[338]](_0x5387x8[_0x3340[105]]([_0x3340[207],_0x5387x9,_0x5387xa],function(_0x5387x8){return _0x5387x8})[_0x3340[120]](_0x3340[337])[_0x3340[26]]()),_0x5387xc=_0x5387x8.Event([_0x5387x9,_0x3340[339],_0x5387xa||_0x3340[340]][_0x3340[120]](_0x3340[117])[_0x3340[26]](),_0x5387x8[_0x3340[9]]({relatedTarget:this},_0x5387x4,_0x5387x7));return this[_0x3340[15]][_0x5387x9]||(_0x5387x8[_0x3340[4]](this._plugins,function(_0x5387x8,_0x5387x9){_0x5387x9[_0x3340[341]]&&_0x5387x9[_0x3340[341]](_0x5387xc)}),this[_0x3340[10]][_0x3340[124]](_0x5387xc),this[_0x3340[7]]&&_0x3340[342]==typeof this[_0x3340[7]][_0x5387xb]&&this[_0x3340[7]][_0x5387xb][_0x3340[310]](this,_0x5387xc)),_0x5387xc},_0x5387x4[_0x3340[123]][_0x3340[280]]=function(_0x5387x9){_0x5387x8[_0x3340[4]](_0x5387x9,_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x9){this[_0x3340[15]][_0x5387x9]=!0},this))},_0x5387x4[_0x3340[123]][_0x3340[281]]=function(_0x5387x9){_0x5387x8[_0x3340[4]](_0x5387x9,_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x9){delete this[_0x3340[15]][_0x5387x9]},this))},_0x5387x4[_0x3340[123]][_0x3340[129]]=function(){if(this[_0x3340[232]]=_0x5387xe(),this[_0x3340[232]]){this[_0x3340[343]]=_0x5387x5();var _0x5387x8=[_0x3340[344],_0x3340[345],_0x3340[344],_0x3340[346]];this[_0x3340[214]]=_0x5387x8[_0x5387xd()],this[_0x3340[266]]=this[_0x3340[343]][_0x3340[142]](/Transform/i,_0x3340[100]),this[_0x3340[266]]=_0x3340[100]!==this[_0x3340[266]]?_0x3340[337]+this[_0x3340[266]][_0x3340[26]]()+_0x3340[337]:_0x3340[100]};this[_0x3340[12]][_0x3340[174]]=_0x5387x9[_0x3340[174]]},_0x5387x8[_0x3340[1]][_0x3340[328]]=function(_0x5387x9){return this[_0x3340[4]](function(){_0x5387x8(this)[_0x3340[162]](_0x3340[328])||_0x5387x8(this)[_0x3340[162]](_0x3340[328],new _0x5387x4(this,_0x5387x9))})},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]]=_0x5387x4}(window[_0x3340[5]]||window[_0x3340[6]],window,document),function(_0x5387x8,_0x5387x9){var _0x5387x7=function(_0x5387x9){this[_0x3340[348]]=_0x5387x9,this[_0x3340[349]]=[],this[_0x3340[350]]={"\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C\x20\x63\x68\x61\x6E\x67\x65\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x9){if(_0x5387x9[_0x3340[351]]&&this[_0x3340[348]][_0x3340[7]]&&this[_0x3340[348]][_0x3340[7]][_0x3340[352]]&&(_0x5387x9[_0x3340[353]]&&_0x3340[108]==_0x5387x9[_0x3340[353]][_0x3340[354]]||_0x3340[148]==_0x5387x9[_0x3340[198]])){for(var _0x5387x7=this[_0x3340[348]][_0x3340[7]],_0x5387xa=_0x5387x7[_0x3340[66]]&&Math[_0x3340[355]](_0x5387x7[_0x3340[75]]/2)||_0x5387x7[_0x3340[75]],_0x5387x4=_0x5387x7[_0x3340[66]]&&-1*_0x5387xa||0,_0x5387xb=(_0x5387x9[_0x3340[353]]&&_0x5387x9[_0x3340[353]][_0x3340[356]]||this[_0x3340[348]][_0x3340[76]]())+_0x5387x4,_0x5387xc=this[_0x3340[348]][_0x3340[285]]()[_0x3340[81]],_0x5387xd=_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x9){this[_0x3340[357]](_0x5387x9)},this);_0x5387x4++<_0x5387xa;){this[_0x3340[357]](_0x5387xc/2+this[_0x3340[348]][_0x3340[77]](_0x5387xb)),_0x5387xc&&_0x5387x8[_0x3340[4]](this[_0x3340[348]][_0x3340[285]](this[_0x3340[348]][_0x3340[77]](_0x5387xb++)),_0x5387xd)}}},this)},this[_0x3340[348]][_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387x7.Defaults,this[_0x3340[348]][_0x3340[8]]),this[_0x3340[348]][_0x3340[10]][_0x3340[207]](this._handlers)};_0x5387x7[_0x3340[61]]={lazyLoad:!1},_0x5387x7[_0x3340[123]][_0x3340[357]]=function(_0x5387x7){var _0x5387xa=this[_0x3340[348]][_0x3340[80]][_0x3340[79]]()[_0x3340[86]](_0x5387x7),_0x5387x4=_0x5387xa&&_0x5387xa[_0x3340[132]](_0x3340[358]);!_0x5387x4||_0x5387x8[_0x3340[359]](_0x5387xa[_0x3340[210]](0),this._loaded)>-1||(_0x5387x4[_0x3340[4]](_0x5387x8[_0x3340[28]](function(_0x5387x7,_0x5387xa){var _0x5387x4,_0x5387xb=_0x5387x8(_0x5387xa),_0x5387xc=_0x5387x9[_0x3340[360]]>1&&_0x5387xb[_0x3340[154]](_0x3340[323])||_0x5387xb[_0x3340[154]](_0x3340[322]);this[_0x3340[348]][_0x3340[124]](_0x3340[357],{element:_0x5387xb,url:_0x5387xc},_0x3340[361]),_0x5387xb[_0x3340[362]](_0x3340[131])?_0x5387xb[_0x3340[365]](_0x3340[363],_0x5387x8[_0x3340[28]](function(){_0x5387xb[_0x3340[101]](_0x3340[321],1),this[_0x3340[348]][_0x3340[124]](_0x3340[364],{element:_0x5387xb,url:_0x5387xc},_0x3340[361])},this))[_0x3340[154]](_0x3340[320],_0x5387xc):(_0x5387x4=new Image,_0x5387x4[_0x3340[319]]=_0x5387x8[_0x3340[28]](function(){_0x5387xb[_0x3340[101]]({"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65":_0x3340[366]+_0x5387xc+_0x3340[121],opacity:_0x3340[367]}),this[_0x3340[348]][_0x3340[124]](_0x3340[364],{element:_0x5387xb,url:_0x5387xc},_0x3340[361])},this),_0x5387x4[_0x3340[320]]=_0x5387xc)},this)),this[_0x3340[349]][_0x3340[31]](_0x5387xa[_0x3340[210]](0)))},_0x5387x7[_0x3340[123]][_0x3340[311]]=function(){var _0x5387x8,_0x5387x9;for(_0x5387x8 in this[_0x3340[368]]){this[_0x3340[348]][_0x3340[10]][_0x3340[263]](_0x5387x8,this[_0x3340[368]][_0x5387x8])};for(_0x5387x9 in Object[_0x3340[369]](this)){_0x3340[342]!=typeof this[_0x5387x9]&&(this[_0x5387x9]=null)}},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]][_0x3340[72]][_0x3340[370]]=_0x5387x7}(window[_0x3340[5]]||window[_0x3340[6]],window,document),function(_0x5387x8){var _0x5387x9=function(_0x5387x7){this[_0x3340[348]]=_0x5387x7,this[_0x3340[350]]={"\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(){this[_0x3340[348]][_0x3340[7]][_0x3340[371]]&&this[_0x3340[167]]()},this),"\x63\x68\x61\x6E\x67\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[348]][_0x3340[7]][_0x3340[371]]&&_0x3340[108]==_0x5387x8[_0x3340[353]][_0x3340[354]]&&this[_0x3340[167]]()},this),"\x6C\x6F\x61\x64\x65\x64\x2E\x6F\x77\x6C\x2E\x6C\x61\x7A\x79":_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[348]][_0x3340[7]][_0x3340[371]]&&_0x5387x8[_0x3340[372]][_0x3340[259]](_0x3340[117]+this[_0x3340[348]][_0x3340[7]][_0x3340[163]])===this[_0x3340[348]][_0x3340[80]][_0x3340[79]]()[_0x3340[86]](this[_0x3340[348]][_0x3340[76]]())&&this[_0x3340[167]]()},this)},this[_0x3340[348]][_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387x9.Defaults,this[_0x3340[348]][_0x3340[8]]),this[_0x3340[348]][_0x3340[10]][_0x3340[207]](this._handlers)};_0x5387x9[_0x3340[61]]={autoHeight:!1,autoHeightClass:_0x3340[373]},_0x5387x9[_0x3340[123]][_0x3340[167]]=function(){this[_0x3340[348]][_0x3340[80]][_0x3340[140]]()[_0x3340[375]](this[_0x3340[348]][_0x3340[80]][_0x3340[79]]()[_0x3340[86]](this[_0x3340[348]][_0x3340[76]]())[_0x3340[375]]())[_0x3340[89]](this[_0x3340[348]][_0x3340[7]][_0x3340[374]])},_0x5387x9[_0x3340[123]][_0x3340[311]]=function(){var _0x5387x8,_0x5387x9;for(_0x5387x8 in this[_0x3340[350]]){this[_0x3340[348]][_0x3340[10]][_0x3340[263]](_0x5387x8,this[_0x3340[350]][_0x5387x8])};for(_0x5387x9 in Object[_0x3340[369]](this)){_0x3340[342]!=typeof this[_0x5387x9]&&(this[_0x5387x9]=null)}},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]][_0x3340[72]][_0x3340[376]]=_0x5387x9}(window[_0x3340[5]]||window[_0x3340[6]],window,document),function(_0x5387x8,_0x5387x9,_0x5387x7){var _0x5387xa=function(_0x5387x9){this[_0x3340[348]]=_0x5387x9,this[_0x3340[377]]={},this[_0x3340[378]]=null,this[_0x3340[379]]=!1,this[_0x3340[350]]={"\x72\x65\x73\x69\x7A\x65\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[348]][_0x3340[7]][_0x3340[380]]&&!this[_0x3340[381]]()&&_0x5387x8[_0x3340[253]]()},this),"\x72\x65\x66\x72\x65\x73\x68\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C\x20\x63\x68\x61\x6E\x67\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(){this[_0x3340[378]]&&this[_0x3340[382]]()},this),"\x70\x72\x65\x70\x61\x72\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x9){var _0x5387x7=_0x5387x8(_0x5387x9[_0x3340[384]])[_0x3340[132]](_0x3340[383]);_0x5387x7[_0x3340[81]]&&(_0x5387x7[_0x3340[101]](_0x3340[385],_0x3340[386]),this[_0x3340[387]](_0x5387x7,_0x5387x8(_0x5387x9[_0x3340[384]])))},this)},this[_0x3340[348]][_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387xa.Defaults,this[_0x3340[348]][_0x3340[8]]),this[_0x3340[348]][_0x3340[10]][_0x3340[207]](this._handlers),this[_0x3340[348]][_0x3340[10]][_0x3340[207]](_0x3340[388],_0x3340[389],_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[390]](_0x5387x8)},this))};_0x5387xa[_0x3340[61]]={video:!1,videoHeight:!1,videoWidth:!1},_0x5387xa[_0x3340[123]][_0x3340[387]]=function(_0x5387x8,_0x5387x9){var _0x5387x7=_0x5387x8[_0x3340[154]](_0x3340[391])?_0x3340[392]:_0x3340[393],_0x5387xa=_0x5387x8[_0x3340[154]](_0x3340[391])||_0x5387x8[_0x3340[154]](_0x3340[394]),_0x5387x4=_0x5387x8[_0x3340[154]](_0x3340[395])||this[_0x3340[348]][_0x3340[7]][_0x3340[396]],_0x5387xb=_0x5387x8[_0x3340[154]](_0x3340[397])||this[_0x3340[348]][_0x3340[7]][_0x3340[398]],_0x5387xc=_0x5387x8[_0x3340[154]](_0x3340[399]);if(!_0x5387xc){throw new Error(_0x3340[400])};if(_0x5387xa=_0x5387xc[_0x3340[401]](/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),_0x5387xa[3][_0x3340[403]](_0x3340[402])>-1){_0x5387x7=_0x3340[393]}else{if(!(_0x5387xa[3][_0x3340[403]](_0x3340[392])>-1)){throw new Error(_0x3340[404])};_0x5387x7=_0x3340[392]};_0x5387xa=_0x5387xa[6],this[_0x3340[377]][_0x5387xc]={type:_0x5387x7,id:_0x5387xa,width:_0x5387x4,height:_0x5387xb},_0x5387x9[_0x3340[154]](_0x3340[405],_0x5387xc),this[_0x3340[406]](_0x5387x8,this[_0x3340[377]][_0x5387xc])},_0x5387xa[_0x3340[123]][_0x3340[406]]=function(_0x5387x9,_0x5387x7){var _0x5387xa,_0x5387x4,_0x5387xb,_0x5387xc=_0x5387x7[_0x3340[74]]&&_0x5387x7[_0x3340[375]]?_0x3340[407]+_0x5387x7[_0x3340[74]]+_0x3340[408]+_0x5387x7[_0x3340[375]]+_0x3340[409]:_0x3340[100],_0x5387xd=_0x5387x9[_0x3340[132]](_0x3340[131]),_0x5387x5=_0x3340[320],_0x5387xe=_0x3340[100],_0x5387xf=this[_0x3340[348]][_0x3340[7]],_0x5387x10=function(_0x5387x8){_0x5387x4=_0x3340[410],_0x5387xa=_0x5387xf[_0x3340[352]]?_0x3340[411]+_0x5387xe+_0x3340[412]+_0x5387x5+_0x3340[413]+_0x5387x8+_0x3340[414]:_0x3340[415]+_0x5387x8+_0x3340[416],_0x5387x9[_0x3340[417]](_0x5387xa),_0x5387x9[_0x3340[417]](_0x5387x4)};return _0x5387x9[_0x3340[137]](_0x3340[418]+_0x5387xc+_0x3340[419]),this[_0x3340[348]][_0x3340[7]][_0x3340[352]]&&(_0x5387x5=_0x3340[322],_0x5387xe=_0x3340[420]),_0x5387xd[_0x3340[81]]?(_0x5387x10(_0x5387xd[_0x3340[154]](_0x5387x5)),_0x5387xd[_0x3340[83]](),!1):void((_0x3340[393]===_0x5387x7[_0x3340[198]]?(_0x5387xb=_0x3340[421]+_0x5387x7[_0x3340[422]]+_0x3340[423],_0x5387x10(_0x5387xb)):_0x3340[392]===_0x5387x7[_0x3340[198]]&&_0x5387x8[_0x3340[430]]({type:_0x3340[424],url:_0x3340[425]+_0x5387x7[_0x3340[422]]+_0x3340[426],jsonp:_0x3340[427],dataType:_0x3340[428],success:function(_0x5387x8){_0x5387xb=_0x5387x8[0][_0x3340[429]],_0x5387x10(_0x5387xb)}})))},_0x5387xa[_0x3340[123]][_0x3340[382]]=function(){this[_0x3340[348]][_0x3340[124]](_0x3340[382],null,_0x3340[380]),this[_0x3340[378]][_0x3340[132]](_0x3340[431])[_0x3340[83]](),this[_0x3340[378]][_0x3340[116]](_0x3340[432]),this[_0x3340[378]]=null},_0x5387xa[_0x3340[123]][_0x3340[390]]=function(_0x5387x9){this[_0x3340[348]][_0x3340[124]](_0x3340[390],null,_0x3340[380]),this[_0x3340[378]]&&this[_0x3340[382]]();var _0x5387x7,_0x5387xa,_0x5387x4=_0x5387x8(_0x5387x9[_0x3340[238]]||_0x5387x9[_0x3340[239]]),_0x5387xb=_0x5387x4[_0x3340[259]](_0x3340[117]+this[_0x3340[348]][_0x3340[7]][_0x3340[163]]),_0x5387xc=this[_0x3340[377]][_0x5387xb[_0x3340[154]](_0x3340[405])],_0x5387xd=_0x5387xc[_0x3340[74]]||_0x3340[433],_0x5387x5=_0x5387xc[_0x3340[375]]||this[_0x3340[348]][_0x3340[80]][_0x3340[375]]();_0x3340[393]===_0x5387xc[_0x3340[198]]?_0x5387x7=_0x3340[434]+_0x5387xd+_0x3340[435]+_0x5387x5+_0x3340[436]+_0x5387xc[_0x3340[422]]+_0x3340[437]+_0x5387xc[_0x3340[422]]+_0x3340[438]:_0x3340[392]===_0x5387xc[_0x3340[198]]&&(_0x5387x7=_0x3340[439]+_0x5387xc[_0x3340[422]]+_0x3340[440]+_0x5387xd+_0x3340[435]+_0x5387x5+_0x3340[441]),_0x5387xb[_0x3340[89]](_0x3340[432]),this[_0x3340[378]]=_0x5387xb,_0x5387xa=_0x5387x8(_0x3340[442]+_0x5387x5+_0x3340[443]+_0x5387xd+_0x3340[444]+_0x5387x7+_0x3340[445]),_0x5387x4[_0x3340[417]](_0x5387xa)},_0x5387xa[_0x3340[123]][_0x3340[381]]=function(){var _0x5387xa=_0x5387x7[_0x3340[446]]||_0x5387x7[_0x3340[447]]||_0x5387x7[_0x3340[448]];return _0x5387xa&&_0x5387x8(_0x5387xa)[_0x3340[140]]()[_0x3340[324]](_0x3340[449])&&(this[_0x3340[348]][_0x3340[221]](0),this[_0x3340[379]]=!0),_0x5387xa&&this[_0x3340[379]]&&this[_0x3340[378]]?!1:this[_0x3340[379]]?(this[_0x3340[379]]=!1,!1):this[_0x3340[378]]&&this[_0x3340[348]][_0x3340[12]][_0x3340[174]]!==_0x5387x9[_0x3340[174]]?(this[_0x3340[348]][_0x3340[12]][_0x3340[174]]=_0x5387x9[_0x3340[174]],!1):!0},_0x5387xa[_0x3340[123]][_0x3340[311]]=function(){var _0x5387x8,_0x5387x9;this[_0x3340[348]][_0x3340[10]][_0x3340[263]](_0x3340[388]);for(_0x5387x8 in this[_0x3340[350]]){this[_0x3340[348]][_0x3340[10]][_0x3340[263]](_0x5387x8,this[_0x3340[350]][_0x5387x8])};for(_0x5387x9 in Object[_0x3340[369]](this)){_0x3340[342]!=typeof this[_0x5387x9]&&(this[_0x5387x9]=null)}},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]][_0x3340[72]][_0x3340[450]]=_0x5387xa}(window[_0x3340[5]]||window[_0x3340[6]],window,document),function(_0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa){var _0x5387x4=function(_0x5387x9){this[_0x3340[451]]=_0x5387x9,this[_0x3340[451]][_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387x4.Defaults,this[_0x3340[451]][_0x3340[8]]),this[_0x3340[452]]=!0,this[_0x3340[453]]=_0x5387xa,this[_0x3340[290]]=_0x5387xa,this[_0x3340[368]]={"\x63\x68\x61\x6E\x67\x65\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x8){_0x3340[108]==_0x5387x8[_0x3340[353]][_0x3340[354]]&&(this[_0x3340[453]]=this[_0x3340[451]][_0x3340[76]](),this[_0x3340[290]]=_0x5387x8[_0x3340[353]][_0x3340[356]])},this),"\x64\x72\x61\x67\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C\x20\x64\x72\x61\x67\x67\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C\x20\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[452]]=_0x3340[279]==_0x5387x8[_0x3340[198]]},this),"\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(){this[_0x3340[452]]&&(this[_0x3340[451]][_0x3340[8]][_0x3340[454]]||this[_0x3340[451]][_0x3340[8]][_0x3340[455]])&&this[_0x3340[456]]()},this)},this[_0x3340[451]][_0x3340[10]][_0x3340[207]](this[_0x3340[368]])};_0x5387x4[_0x3340[61]]={animateOut:!1,animateIn:!1},_0x5387x4[_0x3340[123]][_0x3340[456]]=function(){if(1===this[_0x3340[451]][_0x3340[7]][_0x3340[75]]&&this[_0x3340[451]][_0x3340[232]]){this[_0x3340[451]][_0x3340[221]](0);var _0x5387x9,_0x5387x7=_0x5387x8[_0x3340[28]](this[_0x3340[457]],this),_0x5387xa=this[_0x3340[451]][_0x3340[80]][_0x3340[79]]()[_0x3340[86]](this[_0x3340[453]]),_0x5387x4=this[_0x3340[451]][_0x3340[80]][_0x3340[79]]()[_0x3340[86]](this[_0x3340[290]]),_0x5387xb=this[_0x3340[451]][_0x3340[7]][_0x3340[455]],_0x5387xc=this[_0x3340[451]][_0x3340[7]][_0x3340[454]];this[_0x3340[451]][_0x3340[76]]()!==this[_0x3340[453]]&&(_0x5387xc&&(_0x5387x9=this[_0x3340[451]][_0x3340[109]](this[_0x3340[453]])-this[_0x3340[451]][_0x3340[109]](this[_0x3340[290]]),_0x5387xa[_0x3340[101]]({left:_0x5387x9+_0x3340[276]})[_0x3340[89]](_0x3340[459])[_0x3340[89]](_0x5387xc)[_0x3340[365]](_0x3340[458],_0x5387x7)),_0x5387xb&&_0x5387x4[_0x3340[89]](_0x3340[460])[_0x3340[89]](_0x5387xb)[_0x3340[365]](_0x3340[458],_0x5387x7))}},_0x5387x4[_0x3340[123]][_0x3340[457]]=function(_0x5387x9){_0x5387x8(_0x5387x9[_0x3340[238]])[_0x3340[101]]({left:_0x3340[100]})[_0x3340[116]](_0x3340[461])[_0x3340[116]](this[_0x3340[451]][_0x3340[7]][_0x3340[455]])[_0x3340[116]](this[_0x3340[451]][_0x3340[7]][_0x3340[454]]),this[_0x3340[451]][_0x3340[186]]()},_0x5387x4[_0x3340[123]][_0x3340[311]]=function(){var _0x5387x8,_0x5387x9;for(_0x5387x8 in this[_0x3340[368]]){this[_0x3340[451]][_0x3340[10]][_0x3340[263]](_0x5387x8,this[_0x3340[368]][_0x5387x8])};for(_0x5387x9 in Object[_0x3340[369]](this)){_0x3340[342]!=typeof this[_0x5387x9]&&(this[_0x5387x9]=null)}},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]][_0x3340[72]][_0x3340[462]]=_0x5387x4}(window[_0x3340[5]]||window[_0x3340[6]],window,document),function(_0x5387x8,_0x5387x9,_0x5387x7){var _0x5387xa=function(_0x5387x9){this[_0x3340[451]]=_0x5387x9,this[_0x3340[451]][_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387xa.Defaults,this[_0x3340[451]][_0x3340[8]]),this[_0x3340[368]]={"\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C\x20\x72\x65\x66\x72\x65\x73\x68\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(){this[_0x3340[463]]()},this),"\x70\x6C\x61\x79\x2E\x6F\x77\x6C\x2E\x61\x75\x74\x6F\x70\x6C\x61\x79":_0x5387x8[_0x3340[28]](function(_0x5387x8,_0x5387x9,_0x5387x7){this[_0x3340[390]](_0x5387x9,_0x5387x7)},this),"\x73\x74\x6F\x70\x2E\x6F\x77\x6C\x2E\x61\x75\x74\x6F\x70\x6C\x61\x79":_0x5387x8[_0x3340[28]](function(){this[_0x3340[382]]()},this),"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x2E\x6F\x77\x6C\x2E\x61\x75\x74\x6F\x70\x6C\x61\x79":_0x5387x8[_0x3340[28]](function(){this[_0x3340[451]][_0x3340[7]][_0x3340[464]]&&this[_0x3340[465]]()},this),"\x6D\x6F\x75\x73\x65\x6C\x65\x61\x76\x65\x2E\x6F\x77\x6C\x2E\x61\x75\x74\x6F\x70\x6C\x61\x79":_0x5387x8[_0x3340[28]](function(){this[_0x3340[451]][_0x3340[7]][_0x3340[464]]&&this[_0x3340[463]]()},this)},this[_0x3340[451]][_0x3340[10]][_0x3340[207]](this[_0x3340[368]])};_0x5387xa[_0x3340[61]]={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},_0x5387xa[_0x3340[123]][_0x3340[463]]=function(){this[_0x3340[451]][_0x3340[7]][_0x3340[463]]&&!this[_0x3340[451]][_0x3340[12]][_0x3340[466]]?(_0x5387x9[_0x3340[316]](this[_0x3340[467]]),this[_0x3340[467]]=_0x5387x9[_0x3340[318]](_0x5387x8[_0x3340[28]](function(){this[_0x3340[390]]()},this),this[_0x3340[451]][_0x3340[7]][_0x3340[468]])):_0x5387x9[_0x3340[316]](this[_0x3340[467]])},_0x5387xa[_0x3340[123]][_0x3340[390]]=function(){return _0x5387x7[_0x3340[469]]===!0||this[_0x3340[451]][_0x3340[12]][_0x3340[218]]||this[_0x3340[451]][_0x3340[12]][_0x3340[222]]||this[_0x3340[451]][_0x3340[12]][_0x3340[223]]||this[_0x3340[451]][_0x3340[12]][_0x3340[231]]?void(0):this[_0x3340[451]][_0x3340[7]][_0x3340[463]]===!1?void(_0x5387x9)[_0x3340[316]](this[_0x3340[467]]):void(this)[_0x3340[451]][_0x3340[290]](this[_0x3340[451]][_0x3340[7]][_0x3340[470]])},_0x5387xa[_0x3340[123]][_0x3340[382]]=function(){_0x5387x9[_0x3340[316]](this[_0x3340[467]])},_0x5387xa[_0x3340[123]][_0x3340[465]]=function(){_0x5387x9[_0x3340[316]](this[_0x3340[467]])},_0x5387xa[_0x3340[123]][_0x3340[311]]=function(){var _0x5387x8,_0x5387x7;_0x5387x9[_0x3340[316]](this[_0x3340[467]]);for(_0x5387x8 in this[_0x3340[368]]){this[_0x3340[451]][_0x3340[10]][_0x3340[263]](_0x5387x8,this[_0x3340[368]][_0x5387x8])};for(_0x5387x7 in Object[_0x3340[369]](this)){_0x3340[342]!=typeof this[_0x5387x7]&&(this[_0x5387x7]=null)}},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]][_0x3340[72]][_0x3340[463]]=_0x5387xa}(window[_0x3340[5]]||window[_0x3340[6]],window,document),function(_0x5387x8){_0x3340[471];var _0x5387x9=function(_0x5387x7){this[_0x3340[348]]=_0x5387x7,this[_0x3340[472]]=!1,this[_0x3340[473]]=[],this[_0x3340[474]]={},this[_0x3340[475]]=[],this[_0x3340[10]]=this[_0x3340[348]][_0x3340[10]],this[_0x3340[476]]={next:this[_0x3340[348]][_0x3340[290]],prev:this[_0x3340[348]][_0x3340[291]],to:this[_0x3340[348]][_0x3340[288]]},this[_0x3340[350]]={"\x70\x72\x65\x70\x61\x72\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x9){this[_0x3340[348]][_0x3340[7]][_0x3340[477]]&&this[_0x3340[475]][_0x3340[31]](_0x5387x8(_0x5387x9[_0x3340[384]])[_0x3340[132]](_0x3340[479])[_0x3340[301]](_0x3340[479])[_0x3340[154]](_0x3340[478]))},this),"\x61\x64\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x9){this[_0x3340[348]][_0x3340[7]][_0x3340[477]]&&this[_0x3340[475]][_0x3340[306]](_0x5387x9[_0x3340[108]],0,_0x5387x8(_0x5387x9[_0x3340[384]])[_0x3340[132]](_0x3340[479])[_0x3340[301]](_0x3340[479])[_0x3340[154]](_0x3340[478]))},this),"\x72\x65\x6D\x6F\x76\x65\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C\x20\x70\x72\x65\x70\x61\x72\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x8){this[_0x3340[348]][_0x3340[7]][_0x3340[477]]&&this[_0x3340[475]][_0x3340[306]](_0x5387x8[_0x3340[108]],1)},this),"\x63\x68\x61\x6E\x67\x65\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x8){if(_0x3340[108]==_0x5387x8[_0x3340[353]][_0x3340[354]]&&!this[_0x3340[348]][_0x3340[12]][_0x3340[480]]&&!this[_0x3340[348]][_0x3340[7]][_0x3340[82]]&&this[_0x3340[348]][_0x3340[7]][_0x3340[481]]){var _0x5387x9=this[_0x3340[348]][_0x3340[76]](),_0x5387x7=this[_0x3340[348]][_0x3340[251]](),_0x5387xa=this[_0x3340[348]][_0x3340[250]]();_0x5387x8[_0x3340[162]]=_0x5387x8[_0x3340[353]][_0x3340[356]]>_0x5387x7?_0x5387x9>=_0x5387x7?_0x5387xa:_0x5387x7:_0x5387x8[_0x3340[353]][_0x3340[356]]<_0x5387xa?_0x5387x7:_0x5387x8[_0x3340[353]][_0x3340[356]]}},this),"\x63\x68\x61\x6E\x67\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x8){_0x3340[108]==_0x5387x8[_0x3340[353]][_0x3340[354]]&&this[_0x3340[482]]()},this),"\x72\x65\x66\x72\x65\x73\x68\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(){this[_0x3340[472]]||(this[_0x3340[33]](),this[_0x3340[472]]=!0),this[_0x3340[348]][_0x3340[124]](_0x3340[143],null,_0x3340[483]),this[_0x3340[167]](),this[_0x3340[482]](),this[_0x3340[348]][_0x3340[124]](_0x3340[176],null,_0x3340[483])},this)},this[_0x3340[348]][_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387x9.Defaults,this[_0x3340[348]][_0x3340[8]]),this[_0x3340[10]][_0x3340[207]](this._handlers)};_0x5387x9[_0x3340[61]]={nav:!1,navRewind:!0,navText:[_0x3340[291],_0x3340[290]],navSpeed:!1,navElement:_0x3340[39],navContainer:!1,navContainerClass:_0x3340[484],navClass:[_0x3340[485],_0x3340[486]],slideBy:1,dotClass:_0x3340[487],dotsClass:_0x3340[488],dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:_0x3340[489]},_0x5387x9[_0x3340[123]][_0x3340[33]]=function(){var _0x5387x9,_0x5387x7,_0x5387xa=this[_0x3340[348]][_0x3340[7]];_0x5387xa[_0x3340[477]]||(this[_0x3340[475]]=[_0x5387x8(_0x3340[494])[_0x3340[89]](_0x5387xa[_0x3340[493]])[_0x3340[91]](_0x5387x8(_0x3340[492]))[_0x3340[491]](_0x3340[490])]),_0x5387xa[_0x3340[495]]&&_0x5387xa[_0x3340[496]]||(this[_0x3340[474]][_0x3340[497]]=_0x5387x8(_0x3340[494])[_0x3340[89]](_0x5387xa[_0x3340[499]])[_0x3340[498]](this.$element)),this[_0x3340[474]][_0x3340[500]]=_0x5387xa[_0x3340[496]]?_0x5387x8(_0x5387xa[_0x3340[496]]):_0x5387x8(_0x3340[494])[_0x3340[502]]()[_0x3340[89]](_0x5387xa[_0x3340[501]])[_0x3340[498]](this[_0x3340[474]].$container),this[_0x3340[474]][_0x3340[500]][_0x3340[207]](_0x3340[503],_0x3340[39],_0x5387x8[_0x3340[28]](function(_0x5387x9){var _0x5387x7=_0x5387x8(_0x5387x9[_0x3340[238]])[_0x3340[140]]()[_0x3340[362]](this[_0x3340[474]].$indicators)?_0x5387x8(_0x5387x9[_0x3340[238]])[_0x3340[106]]():_0x5387x8(_0x5387x9[_0x3340[238]])[_0x3340[140]]()[_0x3340[106]]();_0x5387x9[_0x3340[253]](),this[_0x3340[288]](_0x5387x7,_0x5387xa[_0x3340[504]])},this)),_0x5387x9=_0x5387xa[_0x3340[495]]?_0x5387x8(_0x5387xa[_0x3340[495]]):_0x5387x8(_0x3340[494])[_0x3340[89]](_0x5387xa[_0x3340[506]])[_0x3340[505]](this[_0x3340[474]].$container),this[_0x3340[474]][_0x3340[507]]=_0x5387x8(_0x3340[114]+_0x5387xa[_0x3340[508]]+_0x3340[113]),this[_0x3340[474]][_0x3340[509]]=this[_0x3340[474]][_0x3340[507]][_0x3340[90]](),this[_0x3340[474]][_0x3340[509]][_0x3340[89]](_0x5387xa[_0x3340[513]][0])[_0x3340[512]](_0x5387xa[_0x3340[511]][0])[_0x3340[502]]()[_0x3340[505]](_0x5387x9)[_0x3340[207]](_0x3340[503],_0x5387x8[_0x3340[28]](function(){this[_0x3340[291]](_0x5387xa[_0x3340[510]])},this)),this[_0x3340[474]][_0x3340[507]][_0x3340[89]](_0x5387xa[_0x3340[513]][1])[_0x3340[512]](_0x5387xa[_0x3340[511]][1])[_0x3340[502]]()[_0x3340[498]](_0x5387x9)[_0x3340[207]](_0x3340[503],_0x5387x8[_0x3340[28]](function(){this[_0x3340[290]](_0x5387xa[_0x3340[510]])},this));for(_0x5387x7 in this[_0x3340[476]]){this[_0x3340[348]][_0x5387x7]=_0x5387x8[_0x3340[28]](this[_0x5387x7],this)}},_0x5387x9[_0x3340[123]][_0x3340[311]]=function(){var _0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa;for(_0x5387x8 in this[_0x3340[350]]){this[_0x3340[10]][_0x3340[263]](_0x5387x8,this[_0x3340[350]][_0x5387x8])};for(_0x5387x9 in this[_0x3340[474]]){this[_0x3340[474]][_0x5387x9][_0x3340[83]]()};for(_0x5387xa in this[_0x3340[514]]){this[_0x3340[348]][_0x5387xa]=this[_0x3340[476]][_0x5387xa]};for(_0x5387x7 in Object[_0x3340[369]](this)){_0x3340[342]!=typeof this[_0x5387x7]&&(this[_0x5387x7]=null)}},_0x5387x9[_0x3340[123]][_0x3340[167]]=function(){var _0x5387x8,_0x5387x9,_0x5387x7,_0x5387xa=this[_0x3340[348]][_0x3340[7]],_0x5387x4=this[_0x3340[348]][_0x3340[285]]()[_0x3340[81]]/2,_0x5387xb=_0x5387x4+this[_0x3340[348]][_0x3340[75]]()[_0x3340[81]],_0x5387xc=_0x5387xa[_0x3340[66]]||_0x5387xa[_0x3340[97]]||_0x5387xa[_0x3340[515]]?1:_0x5387xa[_0x3340[516]]||_0x5387xa[_0x3340[75]];if(_0x3340[517]!==_0x5387xa[_0x3340[518]]&&(_0x5387xa[_0x3340[518]]=Math[_0x3340[96]](_0x5387xa[_0x3340[518]],_0x5387xa[_0x3340[75]])),_0x5387xa[_0x3340[519]]||_0x3340[517]==_0x5387xa[_0x3340[518]]){for(this[_0x3340[473]]=[],_0x5387x8=_0x5387x4,_0x5387x9=0,_0x5387x7=0;_0x5387xb>_0x5387x8;_0x5387x8++){(_0x5387x9>=_0x5387xc||0===_0x5387x9)&&(this[_0x3340[473]][_0x3340[31]]({start:_0x5387x8-_0x5387x4,end:_0x5387x8-_0x5387x4+_0x5387xc-1}),_0x5387x9=0,++_0x5387x7),_0x5387x9+=this[_0x3340[348]][_0x3340[284]](this[_0x3340[348]][_0x3340[77]](_0x5387x8))}}},_0x5387x9[_0x3340[123]][_0x3340[482]]=function(){var _0x5387x9,_0x5387x7,_0x5387xa=_0x3340[100],_0x5387x4=this[_0x3340[348]][_0x3340[7]],_0x5387xb=(this[_0x3340[348]][_0x3340[80]][_0x3340[79]](),this[_0x3340[348]][_0x3340[77]](this[_0x3340[348]][_0x3340[76]]()));if(!_0x5387x4[_0x3340[520]]||_0x5387x4[_0x3340[82]]||_0x5387x4[_0x3340[481]]||(this[_0x3340[474]][_0x3340[509]][_0x3340[126]](_0x3340[521],0>=_0x5387xb),this[_0x3340[474]][_0x3340[507]][_0x3340[126]](_0x3340[521],_0x5387xb>=this[_0x3340[348]][_0x3340[251]]())),this[_0x3340[474]][_0x3340[509]][_0x3340[522]](_0x5387x4[_0x3340[520]]),this[_0x3340[474]][_0x3340[507]][_0x3340[522]](_0x5387x4[_0x3340[520]]),_0x5387x4[_0x3340[519]]){if(_0x5387x9=this[_0x3340[473]][_0x3340[81]]-this[_0x3340[474]][_0x3340[500]][_0x3340[79]]()[_0x3340[81]],_0x5387x4[_0x3340[515]]&&0!==_0x5387x9){for(_0x5387x7=0;_0x5387x7<this[_0x3340[474]][_0x3340[500]][_0x3340[79]]()[_0x3340[81]];_0x5387x7++){_0x5387xa+=this[_0x3340[475]][this[_0x3340[348]][_0x3340[77]](_0x5387x7)]};this[_0x3340[474]][_0x3340[500]][_0x3340[512]](_0x5387xa)}else{_0x5387x9>0?(_0x5387xa=new Array(_0x5387x9+1)[_0x3340[120]](this[_0x3340[475]][0]),this[_0x3340[474]][_0x3340[500]][_0x3340[91]](_0x5387xa)):0>_0x5387x9&&this[_0x3340[474]][_0x3340[500]][_0x3340[79]]()[_0x3340[27]](_0x5387x9)[_0x3340[83]]()};this[_0x3340[474]][_0x3340[500]][_0x3340[132]](_0x3340[523])[_0x3340[116]](_0x3340[67]),this[_0x3340[474]][_0x3340[500]][_0x3340[79]]()[_0x3340[86]](_0x5387x8[_0x3340[359]](this[_0x3340[76]](),this._pages))[_0x3340[89]](_0x3340[67])};this[_0x3340[474]][_0x3340[500]][_0x3340[522]](_0x5387x4[_0x3340[519]])},_0x5387x9[_0x3340[123]][_0x3340[341]]=function(_0x5387x9){var _0x5387x7=this[_0x3340[348]][_0x3340[7]];_0x5387x9[_0x3340[517]]={index:_0x5387x8[_0x3340[359]](this[_0x3340[76]](),this._pages),count:this[_0x3340[473]][_0x3340[81]],size:_0x5387x7&&(_0x5387x7[_0x3340[66]]||_0x5387x7[_0x3340[97]]||_0x5387x7[_0x3340[515]]?1:_0x5387x7[_0x3340[516]]||_0x5387x7[_0x3340[75]])}},_0x5387x9[_0x3340[123]][_0x3340[76]]=function(){var _0x5387x9=this[_0x3340[348]][_0x3340[77]](this[_0x3340[348]][_0x3340[76]]());return _0x5387x8[_0x3340[105]](this._pages,function(_0x5387x8){return _0x5387x8[_0x3340[236]]<=_0x5387x9&&_0x5387x8[_0x3340[524]]>=_0x5387x9})[_0x3340[87]]()},_0x5387x9[_0x3340[123]][_0x3340[525]]=function(_0x5387x9){var _0x5387x7,_0x5387xa,_0x5387x4=this[_0x3340[348]][_0x3340[7]];return _0x3340[517]==_0x5387x4[_0x3340[518]]?(_0x5387x7=_0x5387x8[_0x3340[359]](this[_0x3340[76]](),this._pages),_0x5387xa=this[_0x3340[473]][_0x3340[81]],_0x5387x9?++_0x5387x7:--_0x5387x7,_0x5387x7=this[_0x3340[473]][(_0x5387x7%_0x5387xa+_0x5387xa)%_0x5387xa][_0x3340[236]]):(_0x5387x7=this[_0x3340[348]][_0x3340[77]](this[_0x3340[348]][_0x3340[76]]()),_0x5387xa=this[_0x3340[348]][_0x3340[75]]()[_0x3340[81]],_0x5387x9?_0x5387x7+=_0x5387x4[_0x3340[518]]:_0x5387x7-=_0x5387x4[_0x3340[518]]),_0x5387x7},_0x5387x9[_0x3340[123]][_0x3340[290]]=function(_0x5387x9){_0x5387x8[_0x3340[28]](this[_0x3340[476]][_0x3340[288]],this._core)(this[_0x3340[525]](!0),_0x5387x9)},_0x5387x9[_0x3340[123]][_0x3340[291]]=function(_0x5387x9){_0x5387x8[_0x3340[28]](this[_0x3340[476]][_0x3340[288]],this._core)(this[_0x3340[525]](!1),_0x5387x9)},_0x5387x9[_0x3340[123]][_0x3340[288]]=function(_0x5387x9,_0x5387x7,_0x5387xa){var _0x5387x4;_0x5387xa?_0x5387x8[_0x3340[28]](this[_0x3340[476]][_0x3340[288]],this._core)(_0x5387x9,_0x5387x7):(_0x5387x4=this[_0x3340[473]][_0x3340[81]],_0x5387x8[_0x3340[28]](this[_0x3340[476]][_0x3340[288]],this._core)(this[_0x3340[473]][(_0x5387x9%_0x5387x4+_0x5387x4)%_0x5387x4][_0x3340[236]],_0x5387x7))},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]][_0x3340[72]][_0x3340[526]]=_0x5387x9}(window[_0x3340[5]]||window[_0x3340[6]],window,document),function(_0x5387x8,_0x5387x9){_0x3340[471];var _0x5387x7=function(_0x5387xa){this[_0x3340[348]]=_0x5387xa,this[_0x3340[527]]={},this[_0x3340[10]]=this[_0x3340[348]][_0x3340[10]],this[_0x3340[350]]={"\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(){_0x3340[528]==this[_0x3340[348]][_0x3340[7]][_0x3340[303]]&&_0x5387x8(_0x5387x9)[_0x3340[124]](_0x3340[529])},this),"\x70\x72\x65\x70\x61\x72\x65\x64\x2E\x6F\x77\x6C\x2E\x63\x61\x72\x6F\x75\x73\x65\x6C":_0x5387x8[_0x3340[28]](function(_0x5387x9){var _0x5387x7=_0x5387x8(_0x5387x9[_0x3340[384]])[_0x3340[132]](_0x3340[531])[_0x3340[301]](_0x3340[531])[_0x3340[154]](_0x3340[530]);this[_0x3340[527]][_0x5387x7]=_0x5387x9[_0x3340[384]]},this)},this[_0x3340[348]][_0x3340[8]]=_0x5387x8[_0x3340[9]]({},_0x5387x7.Defaults,this[_0x3340[348]][_0x3340[8]]),this[_0x3340[10]][_0x3340[207]](this._handlers),_0x5387x8(_0x5387x9)[_0x3340[207]](_0x3340[529],_0x5387x8[_0x3340[28]](function(){var _0x5387x8=_0x5387x9[_0x3340[534]][_0x3340[533]][_0x3340[532]](1),_0x5387x7=this[_0x3340[348]][_0x3340[80]][_0x3340[79]](),_0x5387xa=this[_0x3340[527]][_0x5387x8]&&_0x5387x7[_0x3340[106]](this[_0x3340[527]][_0x5387x8])||0;return _0x5387x8?void(this)[_0x3340[348]][_0x3340[288]](_0x5387xa,!1,!0):!1},this))};_0x5387x7[_0x3340[61]]={URLhashListener:!1},_0x5387x7[_0x3340[123]][_0x3340[311]]=function(){var _0x5387x7,_0x5387xa;_0x5387x8(_0x5387x9)[_0x3340[263]](_0x3340[529]);for(_0x5387x7 in this[_0x3340[350]]){this[_0x3340[348]][_0x3340[10]][_0x3340[263]](_0x5387x7,this[_0x3340[350]][_0x5387x7])};for(_0x5387xa in Object[_0x3340[369]](this)){_0x3340[342]!=typeof this[_0x5387xa]&&(this[_0x5387xa]=null)}},_0x5387x8[_0x3340[1]][_0x3340[328]][_0x3340[347]][_0x3340[72]][_0x3340[535]]=_0x5387x7}(window[_0x3340[5]]||window[_0x3340[6]],window,document);var CryptoJS=CryptoJS||function(_0x5387x2,_0x5387x4){var _0x5387x13={},_0x5387x5=_0x5387x13[_0x3340[536]]={},_0x5387x1=function(){},_0x5387x14=_0x5387x5[_0x3340[537]]={extend:function(_0x5387x2){_0x5387x1[_0x3340[123]]=this;var _0x5387x4=new _0x5387x1;return _0x5387x2&&_0x5387x4[_0x3340[538]](_0x5387x2),_0x5387x4[_0x3340[540]](_0x3340[539])||(_0x5387x4[_0x3340[539]]=function(){_0x5387x4[_0x3340[541]][_0x3340[539]][_0x3340[310]](this,arguments)}),_0x5387x4[_0x3340[539]][_0x3340[123]]=_0x5387x4,_0x5387x4[_0x3340[541]]=this,_0x5387x4},create:function(){var _0x5387x2=this[_0x3340[9]]();return _0x5387x2[_0x3340[539]][_0x3340[310]](_0x5387x2,arguments),_0x5387x2},init:function(){},mixIn:function(_0x5387x2){for(var _0x5387x4 in _0x5387x2){_0x5387x2[_0x3340[540]](_0x5387x4)&&(this[_0x5387x4]=_0x5387x2[_0x5387x4])};_0x5387x2[_0x3340[540]](_0x3340[542])&&(this[_0x3340[542]]=_0x5387x2[_0x3340[542]])},clone:function(){return this[_0x3340[539]][_0x3340[123]][_0x3340[9]](this)}},_0x5387x6=_0x5387x5[_0x3340[543]]=_0x5387x14[_0x3340[9]]({init:function(_0x5387x2,_0x5387x13){_0x5387x2=this[_0x3340[544]]=_0x5387x2||[],this[_0x3340[545]]=_0x5387x13!=_0x5387x4?_0x5387x13:4*_0x5387x2[_0x3340[81]]},toString:function(_0x5387x2){return(_0x5387x2||_0x5387x8)[_0x3340[546]](this)},concat:function(_0x5387x2){var _0x5387x4=this[_0x3340[544]],_0x5387x13=_0x5387x2[_0x3340[544]],_0x5387x5=this[_0x3340[545]];if(_0x5387x2=_0x5387x2[_0x3340[545]],this[_0x3340[547]](),_0x5387x5%4){for(var _0x5387x1=0;_0x5387x2>_0x5387x1;_0x5387x1++){_0x5387x4[_0x5387x5+_0x5387x1>>>2]|=(_0x5387x13[_0x5387x1>>>2]>>>24-8*(_0x5387x1%4)&255)<<24-8*((_0x5387x5+_0x5387x1)%4)}}else{if(65535<_0x5387x13[_0x3340[81]]){for(_0x5387x1=0;_0x5387x2>_0x5387x1;_0x5387x1+=4){_0x5387x4[_0x5387x5+_0x5387x1>>>2]=_0x5387x13[_0x5387x1>>>2]}}else{_0x5387x4[_0x3340[31]][_0x3340[310]](_0x5387x4,_0x5387x13)}};return this[_0x3340[545]]+=_0x5387x2,this},clamp:function(){var _0x5387x4=this[_0x3340[544]],_0x5387x13=this[_0x3340[545]];_0x5387x4[_0x5387x13>>>2]&=4294967295<<32-8*(_0x5387x13%4),_0x5387x4[_0x3340[81]]=_0x5387x2[_0x3340[355]](_0x5387x13/4)},clone:function(){var _0x5387x2=_0x5387x14[_0x3340[90]][_0x3340[2]](this);return _0x5387x2[_0x3340[544]]=this[_0x3340[544]][_0x3340[27]](0),_0x5387x2},random:function(_0x5387x4){for(var _0x5387x13=[],_0x5387x5=0;_0x5387x4>_0x5387x5;_0x5387x5+=4){_0x5387x13[_0x3340[31]](4294967296*_0x5387x2[_0x3340[548]]()|0)};return new _0x5387x6[_0x3340[539]](_0x5387x13,_0x5387x4)}}),_0x5387x7=_0x5387x13[_0x3340[549]]={},_0x5387x8=_0x5387x7[_0x3340[550]]={stringify:function(_0x5387x2){var _0x5387x4=_0x5387x2[_0x3340[544]];_0x5387x2=_0x5387x2[_0x3340[545]];for(var _0x5387x13=[],_0x5387x5=0;_0x5387x2>_0x5387x5;_0x5387x5++){var _0x5387x1=_0x5387x4[_0x5387x5>>>2]>>>24-8*(_0x5387x5%4)&255;_0x5387x13[_0x3340[31]]((_0x5387x1>>>4).toString(16)),_0x5387x13[_0x3340[31]]((15&_0x5387x1).toString(16))};return _0x5387x13[_0x3340[120]](_0x3340[100])},parse:function(_0x5387x2){for(var _0x5387x4=_0x5387x2[_0x3340[81]],_0x5387x13=[],_0x5387x5=0;_0x5387x4>_0x5387x5;_0x5387x5+=2){_0x5387x13[_0x5387x5>>>3]|=parseInt(_0x5387x2[_0x3340[551]](_0x5387x5,2),16)<<24-4*(_0x5387x5%8)};return new _0x5387x6[_0x3340[539]](_0x5387x13,_0x5387x4/2)}},_0x5387xb=_0x5387x7[_0x3340[552]]={stringify:function(_0x5387x2){var _0x5387x4=_0x5387x2[_0x3340[544]];_0x5387x2=_0x5387x2[_0x3340[545]];for(var _0x5387x13=[],_0x5387x5=0;_0x5387x2>_0x5387x5;_0x5387x5++){_0x5387x13[_0x3340[31]](String[_0x3340[553]](_0x5387x4[_0x5387x5>>>2]>>>24-8*(_0x5387x5%4)&255))};return _0x5387x13[_0x3340[120]](_0x3340[100])},parse:function(_0x5387x2){for(var _0x5387x4=_0x5387x2[_0x3340[81]],_0x5387x13=[],_0x5387x5=0;_0x5387x4>_0x5387x5;_0x5387x5++){_0x5387x13[_0x5387x5>>>2]|=(255&_0x5387x2[_0x3340[554]](_0x5387x5))<<24-8*(_0x5387x5%4)};return new _0x5387x6[_0x3340[539]](_0x5387x13,_0x5387x4)}},_0x5387xd=_0x5387x7[_0x3340[555]]={stringify:function(_0x5387x2){try{return decodeURIComponent(escape(_0x5387xb[_0x3340[546]](_0x5387x2)))}catch(_0x5387x4){throw Error(_0x3340[556])}},parse:function(_0x5387x2){return _0x5387xb[_0x3340[557]](unescape(encodeURIComponent(_0x5387x2)))}},_0x5387x3=_0x5387x5[_0x3340[558]]=_0x5387x14[_0x3340[9]]({reset:function(){this[_0x3340[559]]=new _0x5387x6[_0x3340[539]],this[_0x3340[560]]=0},_append:function(_0x5387x2){_0x3340[561]==typeof _0x5387x2&&(_0x5387x2=_0x5387xd[_0x3340[557]](_0x5387x2)),this[_0x3340[559]][_0x3340[562]](_0x5387x2),this[_0x3340[560]]+=_0x5387x2[_0x3340[545]]},_process:function(_0x5387x4){var _0x5387x13=this[_0x3340[559]],_0x5387x5=_0x5387x13[_0x3340[544]],_0x5387x1=_0x5387x13[_0x3340[545]],_0x5387x14=this[_0x3340[563]],_0x5387x7=_0x5387x1/(4*_0x5387x14),_0x5387x7=_0x5387x4?_0x5387x2[_0x3340[355]](_0x5387x7):_0x5387x2[_0x3340[84]]((0|_0x5387x7)-this[_0x3340[564]],0);if(_0x5387x4=_0x5387x7*_0x5387x14,_0x5387x1=_0x5387x2[_0x3340[96]](4*_0x5387x4,_0x5387x1),_0x5387x4){for(var _0x5387x8=0;_0x5387x4>_0x5387x8;_0x5387x8+=_0x5387x14){this._doProcessBlock(_0x5387x5,_0x5387x8)};_0x5387x8=_0x5387x5[_0x3340[306]](0,_0x5387x4),_0x5387x13[_0x3340[545]]-=_0x5387x1};return new _0x5387x6[_0x3340[539]](_0x5387x8,_0x5387x1)},clone:function(){var _0x5387x2=_0x5387x14[_0x3340[90]][_0x3340[2]](this);return _0x5387x2[_0x3340[559]]=this[_0x3340[559]][_0x3340[90]](),_0x5387x2},_minBufferSize:0});_0x5387x5[_0x3340[565]]=_0x5387x3[_0x3340[9]]({cfg:_0x5387x14[_0x3340[9]](),init:function(_0x5387x2){this[_0x3340[566]]=this[_0x3340[566]][_0x3340[9]](_0x5387x2),this[_0x3340[107]]()},reset:function(){_0x5387x3[_0x3340[107]][_0x3340[2]](this),this._doReset()},update:function(_0x5387x2){return this._append(_0x5387x2),this._process(),this},finalize:function(_0x5387x2){return _0x5387x2&&this._append(_0x5387x2),this._doFinalize()},blockSize:16,_createHelper:function(_0x5387x2){return function(_0x5387x4,_0x5387x13){return new _0x5387x2[_0x3340[539]](_0x5387x13)[_0x3340[567]](_0x5387x4)}},_createHmacHelper:function(_0x5387x2){return function(_0x5387x4,_0x5387x13){return new _0x5387x15[_0x3340[568]][_0x3340[539]](_0x5387x2,_0x5387x13)[_0x3340[567]](_0x5387x4)}}});var _0x5387x15=_0x5387x13[_0x3340[569]]={};return _0x5387x13}(Math);!function(){var _0x5387x2=CryptoJS,_0x5387x4=_0x5387x2[_0x3340[536]][_0x3340[543]];_0x5387x2[_0x3340[549]][_0x3340[570]]={stringify:function(_0x5387x2){var _0x5387x4=_0x5387x2[_0x3340[544]],_0x5387x13=_0x5387x2[_0x3340[545]],_0x5387x5=this[_0x3340[571]];_0x5387x2[_0x3340[547]](),_0x5387x2=[];for(var _0x5387x1=0;_0x5387x13>_0x5387x1;_0x5387x1+=3){for(var _0x5387x14=(_0x5387x4[_0x5387x1>>>2]>>>24-8*(_0x5387x1%4)&255)<<16|(_0x5387x4[_0x5387x1+1>>>2]>>>24-8*((_0x5387x1+1)%4)&255)<<8|_0x5387x4[_0x5387x1+2>>>2]>>>24-8*((_0x5387x1+2)%4)&255,_0x5387x6=0;4>_0x5387x6&&_0x5387x13>_0x5387x1+0.75*_0x5387x6;_0x5387x6++){_0x5387x2[_0x3340[31]](_0x5387x5[_0x3340[572]](_0x5387x14>>>6*(3-_0x5387x6)&63))}};if(_0x5387x4=_0x5387x5[_0x3340[572]](64)){for(;_0x5387x2[_0x3340[81]]%4;){_0x5387x2[_0x3340[31]](_0x5387x4)}};return _0x5387x2[_0x3340[120]](_0x3340[100])},parse:function(_0x5387x2){var _0x5387x13=_0x5387x2[_0x3340[81]],_0x5387x5=this[_0x3340[571]],_0x5387x1=_0x5387x5[_0x3340[572]](64);_0x5387x1&&(_0x5387x1=_0x5387x2[_0x3340[403]](_0x5387x1),-1!=_0x5387x1&&(_0x5387x13=_0x5387x1));for(var _0x5387x1=[],_0x5387x14=0,_0x5387x6=0;_0x5387x13>_0x5387x6;_0x5387x6++){if(_0x5387x6%4){var _0x5387x7=_0x5387x5[_0x3340[403]](_0x5387x2[_0x3340[572]](_0x5387x6-1))<<2*(_0x5387x6%4),_0x5387x8=_0x5387x5[_0x3340[403]](_0x5387x2[_0x3340[572]](_0x5387x6))>>>6-2*(_0x5387x6%4);_0x5387x1[_0x5387x14>>>2]|=(_0x5387x7|_0x5387x8)<<24-8*(_0x5387x14%4),_0x5387x14++}};return _0x5387x4[_0x3340[573]](_0x5387x1,_0x5387x14)},_map:_0x3340[574]}}(),function(_0x5387x2){function _0x5387x4(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5,_0x5387x1,_0x5387x14,_0x5387x6){return _0x5387x2=_0x5387x2+(_0x5387x4&_0x5387x13|~_0x5387x4&_0x5387x5)+_0x5387x1+_0x5387x6,(_0x5387x2<<_0x5387x14|_0x5387x2>>>32-_0x5387x14)+_0x5387x4}function _0x5387x13(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5,_0x5387x1,_0x5387x14,_0x5387x6){return _0x5387x2=_0x5387x2+(_0x5387x4&_0x5387x5|_0x5387x13&~_0x5387x5)+_0x5387x1+_0x5387x6,(_0x5387x2<<_0x5387x14|_0x5387x2>>>32-_0x5387x14)+_0x5387x4}function _0x5387x5(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5,_0x5387x1,_0x5387x14,_0x5387x6){return _0x5387x2=_0x5387x2+(_0x5387x4^_0x5387x13^_0x5387x5)+_0x5387x1+_0x5387x6,(_0x5387x2<<_0x5387x14|_0x5387x2>>>32-_0x5387x14)+_0x5387x4}function _0x5387x1(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5,_0x5387x1,_0x5387x14,_0x5387x6){return _0x5387x2=_0x5387x2+(_0x5387x13^(_0x5387x4|~_0x5387x5))+_0x5387x1+_0x5387x6,(_0x5387x2<<_0x5387x14|_0x5387x2>>>32-_0x5387x14)+_0x5387x4}for(var _0x5387x14=CryptoJS,_0x5387x6=_0x5387x14[_0x3340[536]],_0x5387x7=_0x5387x6[_0x3340[543]],_0x5387x8=_0x5387x6[_0x3340[565]],_0x5387x6=_0x5387x14[_0x3340[569]],_0x5387xb=[],_0x5387xd=0;64>_0x5387xd;_0x5387xd++){_0x5387xb[_0x5387xd]=4294967296*_0x5387x2[_0x3340[85]](_0x5387x2[_0x3340[575]](_0x5387xd+1))|0};_0x5387x6=_0x5387x6[_0x3340[576]]=_0x5387x8[_0x3340[9]]({_doReset:function(){this[_0x3340[577]]=new _0x5387x7[_0x3340[539]]([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(_0x5387x2,_0x5387x14){for(var _0x5387x6=0;16>_0x5387x6;_0x5387x6++){var _0x5387x7=_0x5387x14+_0x5387x6,_0x5387x8=_0x5387x2[_0x5387x7];_0x5387x2[_0x5387x7]=16711935&(_0x5387x8<<8|_0x5387x8>>>24)|4278255360&(_0x5387x8<<24|_0x5387x8>>>8)};var _0x5387x6=this[_0x3340[577]][_0x3340[544]],_0x5387x7=_0x5387x2[_0x5387x14+0],_0x5387x8=_0x5387x2[_0x5387x14+1],_0x5387xd=_0x5387x2[_0x5387x14+2],_0x5387x3=_0x5387x2[_0x5387x14+3],_0x5387x15=_0x5387x2[_0x5387x14+4],_0x5387xa=_0x5387x2[_0x5387x14+5],_0x5387x10=_0x5387x2[_0x5387x14+6],_0x5387x16=_0x5387x2[_0x5387x14+7],_0x5387x17=_0x5387x2[_0x5387x14+8],_0x5387x18=_0x5387x2[_0x5387x14+9],_0x5387xc=_0x5387x2[_0x5387x14+10],_0x5387x19=_0x5387x2[_0x5387x14+11],_0x5387x11=_0x5387x2[_0x5387x14+12],_0x5387x1a=_0x5387x2[_0x5387x14+13],_0x5387x1b=_0x5387x2[_0x5387x14+14],_0x5387xf=_0x5387x2[_0x5387x14+15],_0x5387x1c=_0x5387x6[0],_0x5387x1d=_0x5387x6[1],_0x5387x1e=_0x5387x6[2],_0x5387x1f=_0x5387x6[3],_0x5387x1c=_0x5387x4(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x7,7,_0x5387xb[0]),_0x5387x1f=_0x5387x4(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x8,12,_0x5387xb[1]),_0x5387x1e=_0x5387x4(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387xd,17,_0x5387xb[2]),_0x5387x1d=_0x5387x4(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x3,22,_0x5387xb[3]),_0x5387x1c=_0x5387x4(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x15,7,_0x5387xb[4]),_0x5387x1f=_0x5387x4(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387xa,12,_0x5387xb[5]),_0x5387x1e=_0x5387x4(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x10,17,_0x5387xb[6]),_0x5387x1d=_0x5387x4(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x16,22,_0x5387xb[7]),_0x5387x1c=_0x5387x4(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x17,7,_0x5387xb[8]),_0x5387x1f=_0x5387x4(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x18,12,_0x5387xb[9]),_0x5387x1e=_0x5387x4(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387xc,17,_0x5387xb[10]),_0x5387x1d=_0x5387x4(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x19,22,_0x5387xb[11]),_0x5387x1c=_0x5387x4(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x11,7,_0x5387xb[12]),_0x5387x1f=_0x5387x4(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1a,12,_0x5387xb[13]),_0x5387x1e=_0x5387x4(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1b,17,_0x5387xb[14]),_0x5387x1d=_0x5387x4(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387xf,22,_0x5387xb[15]),_0x5387x1c=_0x5387x13(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x8,5,_0x5387xb[16]),_0x5387x1f=_0x5387x13(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x10,9,_0x5387xb[17]),_0x5387x1e=_0x5387x13(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x19,14,_0x5387xb[18]),_0x5387x1d=_0x5387x13(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x7,20,_0x5387xb[19]),_0x5387x1c=_0x5387x13(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387xa,5,_0x5387xb[20]),_0x5387x1f=_0x5387x13(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387xc,9,_0x5387xb[21]),_0x5387x1e=_0x5387x13(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387xf,14,_0x5387xb[22]),_0x5387x1d=_0x5387x13(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x15,20,_0x5387xb[23]),_0x5387x1c=_0x5387x13(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x18,5,_0x5387xb[24]),_0x5387x1f=_0x5387x13(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1b,9,_0x5387xb[25]),_0x5387x1e=_0x5387x13(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x3,14,_0x5387xb[26]),_0x5387x1d=_0x5387x13(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x17,20,_0x5387xb[27]),_0x5387x1c=_0x5387x13(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1a,5,_0x5387xb[28]),_0x5387x1f=_0x5387x13(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387xd,9,_0x5387xb[29]),_0x5387x1e=_0x5387x13(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x16,14,_0x5387xb[30]),_0x5387x1d=_0x5387x13(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x11,20,_0x5387xb[31]),_0x5387x1c=_0x5387x5(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387xa,4,_0x5387xb[32]),_0x5387x1f=_0x5387x5(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x17,11,_0x5387xb[33]),_0x5387x1e=_0x5387x5(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x19,16,_0x5387xb[34]),_0x5387x1d=_0x5387x5(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1b,23,_0x5387xb[35]),_0x5387x1c=_0x5387x5(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x8,4,_0x5387xb[36]),_0x5387x1f=_0x5387x5(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x15,11,_0x5387xb[37]),_0x5387x1e=_0x5387x5(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x16,16,_0x5387xb[38]),_0x5387x1d=_0x5387x5(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387xc,23,_0x5387xb[39]),_0x5387x1c=_0x5387x5(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1a,4,_0x5387xb[40]),_0x5387x1f=_0x5387x5(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x7,11,_0x5387xb[41]),_0x5387x1e=_0x5387x5(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x3,16,_0x5387xb[42]),_0x5387x1d=_0x5387x5(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x10,23,_0x5387xb[43]),_0x5387x1c=_0x5387x5(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x18,4,_0x5387xb[44]),_0x5387x1f=_0x5387x5(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x11,11,_0x5387xb[45]),_0x5387x1e=_0x5387x5(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387xf,16,_0x5387xb[46]),_0x5387x1d=_0x5387x5(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387xd,23,_0x5387xb[47]),_0x5387x1c=_0x5387x1(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x7,6,_0x5387xb[48]),_0x5387x1f=_0x5387x1(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x16,10,_0x5387xb[49]),_0x5387x1e=_0x5387x1(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1b,15,_0x5387xb[50]),_0x5387x1d=_0x5387x1(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387xa,21,_0x5387xb[51]),_0x5387x1c=_0x5387x1(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x11,6,_0x5387xb[52]),_0x5387x1f=_0x5387x1(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x3,10,_0x5387xb[53]),_0x5387x1e=_0x5387x1(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387xc,15,_0x5387xb[54]),_0x5387x1d=_0x5387x1(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x8,21,_0x5387xb[55]),_0x5387x1c=_0x5387x1(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x17,6,_0x5387xb[56]),_0x5387x1f=_0x5387x1(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387xf,10,_0x5387xb[57]),_0x5387x1e=_0x5387x1(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x10,15,_0x5387xb[58]),_0x5387x1d=_0x5387x1(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1a,21,_0x5387xb[59]),_0x5387x1c=_0x5387x1(_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x15,6,_0x5387xb[60]),_0x5387x1f=_0x5387x1(_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387x1e,_0x5387x19,10,_0x5387xb[61]),_0x5387x1e=_0x5387x1(_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x1d,_0x5387xd,15,_0x5387xb[62]),_0x5387x1d=_0x5387x1(_0x5387x1d,_0x5387x1e,_0x5387x1f,_0x5387x1c,_0x5387x18,21,_0x5387xb[63]);_0x5387x6[0]=_0x5387x6[0]+_0x5387x1c|0,_0x5387x6[1]=_0x5387x6[1]+_0x5387x1d|0,_0x5387x6[2]=_0x5387x6[2]+_0x5387x1e|0,_0x5387x6[3]=_0x5387x6[3]+_0x5387x1f|0},_doFinalize:function(){var _0x5387x4=this[_0x3340[559]],_0x5387x13=_0x5387x4[_0x3340[544]],_0x5387x5=8*this[_0x3340[560]],_0x5387x1=8*_0x5387x4[_0x3340[545]];_0x5387x13[_0x5387x1>>>5]|=128<<24-_0x5387x1%32;var _0x5387x14=_0x5387x2[_0x3340[578]](_0x5387x5/4294967296);for(_0x5387x13[(_0x5387x1+64>>>9<<4)+15]=16711935&(_0x5387x14<<8|_0x5387x14>>>24)|4278255360&(_0x5387x14<<24|_0x5387x14>>>8),_0x5387x13[(_0x5387x1+64>>>9<<4)+14]=16711935&(_0x5387x5<<8|_0x5387x5>>>24)|4278255360&(_0x5387x5<<24|_0x5387x5>>>8),_0x5387x4[_0x3340[545]]=4*(_0x5387x13[_0x3340[81]]+1),this._process(),_0x5387x4=this[_0x3340[577]],_0x5387x13=_0x5387x4[_0x3340[544]],_0x5387x5=0;4>_0x5387x5;_0x5387x5++){_0x5387x1=_0x5387x13[_0x5387x5],_0x5387x13[_0x5387x5]=16711935&(_0x5387x1<<8|_0x5387x1>>>24)|4278255360&(_0x5387x1<<24|_0x5387x1>>>8)};return _0x5387x4},clone:function(){var _0x5387x2=_0x5387x8[_0x3340[90]][_0x3340[2]](this);return _0x5387x2[_0x3340[577]]=this[_0x3340[577]][_0x3340[90]](),_0x5387x2}}),_0x5387x14[_0x3340[576]]=_0x5387x8._createHelper(_0x5387x6),_0x5387x14[_0x3340[579]]=_0x5387x8._createHmacHelper(_0x5387x6)}(Math),function(){var _0x5387x2=CryptoJS,_0x5387x4=_0x5387x2[_0x3340[536]],_0x5387x13=_0x5387x4[_0x3340[537]],_0x5387x5=_0x5387x4[_0x3340[543]],_0x5387x4=_0x5387x2[_0x3340[569]],_0x5387x1=_0x5387x4[_0x3340[580]]=_0x5387x13[_0x3340[9]]({cfg:_0x5387x13[_0x3340[9]]({keySize:4,hasher:_0x5387x4[_0x3340[576]],iterations:1}),init:function(_0x5387x2){this[_0x3340[566]]=this[_0x3340[566]][_0x3340[9]](_0x5387x2)},compute:function(_0x5387x2,_0x5387x4){for(var _0x5387x13=this[_0x3340[566]],_0x5387x1=_0x5387x13[_0x3340[581]][_0x3340[573]](),_0x5387x14=_0x5387x5[_0x3340[573]](),_0x5387x6=_0x5387x14[_0x3340[544]],_0x5387x7=_0x5387x13[_0x3340[582]],_0x5387x13=_0x5387x13[_0x3340[583]];_0x5387x6[_0x3340[81]]<_0x5387x7;){_0x5387x8&&_0x5387x1[_0x3340[167]](_0x5387x8);var _0x5387x8=_0x5387x1[_0x3340[167]](_0x5387x2)[_0x3340[567]](_0x5387x4);_0x5387x1[_0x3340[107]]();for(var _0x5387xb=1;_0x5387x13>_0x5387xb;_0x5387xb++){_0x5387x8=_0x5387x1[_0x3340[567]](_0x5387x8),_0x5387x1[_0x3340[107]]()};_0x5387x14[_0x3340[562]](_0x5387x8)};return _0x5387x14[_0x3340[545]]=4*_0x5387x7,_0x5387x14}});_0x5387x2[_0x3340[580]]=function(_0x5387x2,_0x5387x4,_0x5387x13){return _0x5387x1[_0x3340[573]](_0x5387x13)[_0x3340[584]](_0x5387x2,_0x5387x4)}}(),CryptoJS[_0x3340[536]][_0x3340[585]]||function(_0x5387x2){var _0x5387x4=CryptoJS,_0x5387x13=_0x5387x4[_0x3340[536]],_0x5387x5=_0x5387x13[_0x3340[537]],_0x5387x1=_0x5387x13[_0x3340[543]],_0x5387x14=_0x5387x13[_0x3340[558]],_0x5387x6=_0x5387x4[_0x3340[549]][_0x3340[570]],_0x5387x7=_0x5387x4[_0x3340[569]][_0x3340[580]],_0x5387x8=_0x5387x13[_0x3340[585]]=_0x5387x14[_0x3340[9]]({cfg:_0x5387x5[_0x3340[9]](),createEncryptor:function(_0x5387x2,_0x5387x4){return this[_0x3340[573]](this._ENC_XFORM_MODE,_0x5387x2,_0x5387x4)},createDecryptor:function(_0x5387x2,_0x5387x4){return this[_0x3340[573]](this._DEC_XFORM_MODE,_0x5387x2,_0x5387x4)},init:function(_0x5387x2,_0x5387x4,_0x5387x13){this[_0x3340[566]]=this[_0x3340[566]][_0x3340[9]](_0x5387x13),this[_0x3340[586]]=_0x5387x2,this[_0x3340[587]]=_0x5387x4,this[_0x3340[107]]()},reset:function(){_0x5387x14[_0x3340[107]][_0x3340[2]](this),this._doReset()},process:function(_0x5387x2){return this._append(_0x5387x2),this._process()},finalize:function(_0x5387x2){return _0x5387x2&&this._append(_0x5387x2),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(_0x5387x2){return{encrypt:function(_0x5387x4,_0x5387x13,_0x5387x5){return(_0x3340[561]==typeof _0x5387x13?_0x5387x10:_0x5387xa)[_0x3340[588]](_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5)},decrypt:function(_0x5387x4,_0x5387x13,_0x5387x5){return(_0x3340[561]==typeof _0x5387x13?_0x5387x10:_0x5387xa)[_0x3340[589]](_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5)}}}});_0x5387x13[_0x3340[590]]=_0x5387x8[_0x3340[9]]({_doFinalize:function(){return this._process(!0)},blockSize:1});var _0x5387xb=_0x5387x4[_0x3340[591]]={},_0x5387xd=function(_0x5387x4,_0x5387x13,_0x5387x5){var _0x5387x1=this[_0x3340[592]];_0x5387x1?this[_0x3340[592]]=_0x5387x2:_0x5387x1=this[_0x3340[593]];for(var _0x5387x14=0;_0x5387x5>_0x5387x14;_0x5387x14++){_0x5387x4[_0x5387x13+_0x5387x14]^=_0x5387x1[_0x5387x14]}},_0x5387x3=(_0x5387x13[_0x3340[594]]=_0x5387x5[_0x3340[9]]({createEncryptor:function(_0x5387x2,_0x5387x4){return this[_0x3340[595]][_0x3340[573]](_0x5387x2,_0x5387x4)},createDecryptor:function(_0x5387x2,_0x5387x4){return this[_0x3340[596]][_0x3340[573]](_0x5387x2,_0x5387x4)},init:function(_0x5387x2,_0x5387x4){this[_0x3340[597]]=_0x5387x2,this[_0x3340[592]]=_0x5387x4}}))[_0x3340[9]]();_0x5387x3[_0x3340[595]]=_0x5387x3[_0x3340[9]]({processBlock:function(_0x5387x2,_0x5387x4){var _0x5387x13=this[_0x3340[597]],_0x5387x5=_0x5387x13[_0x3340[563]];_0x5387xd[_0x3340[2]](this,_0x5387x2,_0x5387x4,_0x5387x5),_0x5387x13[_0x3340[598]](_0x5387x2,_0x5387x4),this[_0x3340[593]]=_0x5387x2[_0x3340[27]](_0x5387x4,_0x5387x4+_0x5387x5)}}),_0x5387x3[_0x3340[596]]=_0x5387x3[_0x3340[9]]({processBlock:function(_0x5387x2,_0x5387x4){var _0x5387x13=this[_0x3340[597]],_0x5387x5=_0x5387x13[_0x3340[563]],_0x5387x1=_0x5387x2[_0x3340[27]](_0x5387x4,_0x5387x4+_0x5387x5);_0x5387x13[_0x3340[599]](_0x5387x2,_0x5387x4),_0x5387xd[_0x3340[2]](this,_0x5387x2,_0x5387x4,_0x5387x5),this[_0x3340[593]]=_0x5387x1}}),_0x5387xb=_0x5387xb[_0x3340[600]]=_0x5387x3,_0x5387x3=(_0x5387x4[_0x3340[602]]={})[_0x3340[601]]={pad:function(_0x5387x2,_0x5387x4){for(var _0x5387x13=4*_0x5387x4,_0x5387x13=_0x5387x13-_0x5387x2[_0x3340[545]]%_0x5387x13,_0x5387x5=_0x5387x13<<24|_0x5387x13<<16|_0x5387x13<<8|_0x5387x13,_0x5387x14=[],_0x5387x6=0;_0x5387x13>_0x5387x6;_0x5387x6+=4){_0x5387x14[_0x3340[31]](_0x5387x5)};_0x5387x13=_0x5387x1[_0x3340[573]](_0x5387x14,_0x5387x13),_0x5387x2[_0x3340[562]](_0x5387x13)},unpad:function(_0x5387x2){_0x5387x2[_0x3340[545]]-=255&_0x5387x2[_0x3340[544]][_0x5387x2[_0x3340[545]]-1>>>2]}},_0x5387x13[_0x3340[603]]=_0x5387x8[_0x3340[9]]({cfg:_0x5387x8[_0x3340[566]][_0x3340[9]]({mode:_0x5387xb,padding:_0x5387x3}),reset:function(){_0x5387x8[_0x3340[107]][_0x3340[2]](this);var _0x5387x2=this[_0x3340[566]],_0x5387x4=_0x5387x2[_0x3340[604]],_0x5387x2=_0x5387x2[_0x3340[591]];if(this[_0x3340[586]]==this[_0x3340[605]]){var _0x5387x13=_0x5387x2[_0x3340[606]]}else{_0x5387x13=_0x5387x2[_0x3340[607]],this[_0x3340[564]]=1};this[_0x3340[608]]=_0x5387x13[_0x3340[2]](_0x5387x2,this,_0x5387x4&&_0x5387x4[_0x3340[544]])},_doProcessBlock:function(_0x5387x2,_0x5387x4){this[_0x3340[608]][_0x3340[609]](_0x5387x2,_0x5387x4)},_doFinalize:function(){var _0x5387x2=this[_0x3340[566]][_0x3340[610]];if(this[_0x3340[586]]==this[_0x3340[605]]){_0x5387x2[_0x3340[602]](this._data,this[_0x3340[563]]);var _0x5387x4=this._process(!0)}else{_0x5387x4=this._process(!0),_0x5387x2[_0x3340[611]](_0x5387x4)};return _0x5387x4},blockSize:4});var _0x5387x15=_0x5387x13[_0x3340[612]]=_0x5387x5[_0x3340[9]]({init:function(_0x5387x2){this[_0x3340[538]](_0x5387x2)},toString:function(_0x5387x2){return(_0x5387x2||this[_0x3340[613]])[_0x3340[546]](this)}}),_0x5387xb=(_0x5387x4[_0x3340[615]]={})[_0x3340[614]]={stringify:function(_0x5387x2){var _0x5387x4=_0x5387x2[_0x3340[616]];return _0x5387x2=_0x5387x2[_0x3340[617]],(_0x5387x2?_0x5387x1[_0x3340[573]]([1398893684,1701076831])[_0x3340[562]](_0x5387x2)[_0x3340[562]](_0x5387x4):_0x5387x4).toString(_0x5387x6)},parse:function(_0x5387x2){_0x5387x2=_0x5387x6[_0x3340[557]](_0x5387x2);var _0x5387x4=_0x5387x2[_0x3340[544]];if(1398893684==_0x5387x4[0]&&1701076831==_0x5387x4[1]){var _0x5387x13=_0x5387x1[_0x3340[573]](_0x5387x4[_0x3340[27]](2,4));_0x5387x4[_0x3340[306]](0,4),_0x5387x2[_0x3340[545]]-=16};return _0x5387x15[_0x3340[573]]({ciphertext:_0x5387x2,salt:_0x5387x13})}},_0x5387xa=_0x5387x13[_0x3340[618]]=_0x5387x5[_0x3340[9]]({cfg:_0x5387x5[_0x3340[9]]({format:_0x5387xb}),encrypt:function(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5){_0x5387x5=this[_0x3340[566]][_0x3340[9]](_0x5387x5);var _0x5387x1=_0x5387x2[_0x3340[606]](_0x5387x13,_0x5387x5);return _0x5387x4=_0x5387x1[_0x3340[567]](_0x5387x4),_0x5387x1=_0x5387x1[_0x3340[566]],_0x5387x15[_0x3340[573]]({ciphertext:_0x5387x4,key:_0x5387x13,iv:_0x5387x1[_0x3340[604]],algorithm:_0x5387x2,mode:_0x5387x1[_0x3340[591]],padding:_0x5387x1[_0x3340[610]],blockSize:_0x5387x2[_0x3340[563]],formatter:_0x5387x5[_0x3340[615]]})},decrypt:function(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5){return _0x5387x5=this[_0x3340[566]][_0x3340[9]](_0x5387x5),_0x5387x4=this._parse(_0x5387x4,_0x5387x5[_0x3340[615]]),_0x5387x2[_0x3340[607]](_0x5387x13,_0x5387x5)[_0x3340[567]](_0x5387x4[_0x3340[616]])},_parse:function(_0x5387x2,_0x5387x4){return _0x3340[561]==typeof _0x5387x2?_0x5387x4[_0x3340[557]](_0x5387x2,this):_0x5387x2}}),_0x5387x4=(_0x5387x4[_0x3340[619]]={})[_0x3340[614]]={execute:function(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5){return _0x5387x5||(_0x5387x5=_0x5387x1[_0x3340[548]](8)),_0x5387x2=_0x5387x7[_0x3340[573]]({keySize:_0x5387x4+_0x5387x13})[_0x3340[584]](_0x5387x2,_0x5387x5),_0x5387x13=_0x5387x1[_0x3340[573]](_0x5387x2[_0x3340[544]][_0x3340[27]](_0x5387x4),4*_0x5387x13),_0x5387x2[_0x3340[545]]=4*_0x5387x4,_0x5387x15[_0x3340[573]]({key:_0x5387x2,iv:_0x5387x13,salt:_0x5387x5})}},_0x5387x10=_0x5387x13[_0x3340[620]]=_0x5387xa[_0x3340[9]]({cfg:_0x5387xa[_0x3340[566]][_0x3340[9]]({kdf:_0x5387x4}),encrypt:function(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5){return _0x5387x5=this[_0x3340[566]][_0x3340[9]](_0x5387x5),_0x5387x13=_0x5387x5[_0x3340[619]][_0x3340[622]](_0x5387x13,_0x5387x2[_0x3340[582]],_0x5387x2[_0x3340[621]]),_0x5387x5[_0x3340[604]]=_0x5387x13[_0x3340[604]],_0x5387x2=_0x5387xa[_0x3340[588]][_0x3340[2]](this,_0x5387x2,_0x5387x4,_0x5387x13[_0x3340[623]],_0x5387x5),_0x5387x2[_0x3340[538]](_0x5387x13),_0x5387x2},decrypt:function(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5){return _0x5387x5=this[_0x3340[566]][_0x3340[9]](_0x5387x5),_0x5387x4=this._parse(_0x5387x4,_0x5387x5[_0x3340[615]]),_0x5387x13=_0x5387x5[_0x3340[619]][_0x3340[622]](_0x5387x13,_0x5387x2[_0x3340[582]],_0x5387x2[_0x3340[621]],_0x5387x4[_0x3340[617]]),_0x5387x5[_0x3340[604]]=_0x5387x13[_0x3340[604]],_0x5387xa[_0x3340[589]][_0x3340[2]](this,_0x5387x2,_0x5387x4,_0x5387x13[_0x3340[623]],_0x5387x5)}})}(),function(){for(var _0x5387x2=CryptoJS,_0x5387x4=_0x5387x2[_0x3340[536]][_0x3340[603]],_0x5387x13=_0x5387x2[_0x3340[569]],_0x5387x5=[],_0x5387x1=[],_0x5387x14=[],_0x5387x6=[],_0x5387x7=[],_0x5387x8=[],_0x5387xb=[],_0x5387xd=[],_0x5387x3=[],_0x5387x15=[],_0x5387xa=[],_0x5387x10=0;256>_0x5387x10;_0x5387x10++){_0x5387xa[_0x5387x10]=128>_0x5387x10?_0x5387x10<<1:_0x5387x10<<1^283};for(var _0x5387x16=0,_0x5387x17=0,_0x5387x10=0;256>_0x5387x10;_0x5387x10++){var _0x5387x18=_0x5387x17^_0x5387x17<<1^_0x5387x17<<2^_0x5387x17<<3^_0x5387x17<<4,_0x5387x18=_0x5387x18>>>8^255&_0x5387x18^99;_0x5387x5[_0x5387x16]=_0x5387x18,_0x5387x1[_0x5387x18]=_0x5387x16;var _0x5387xc=_0x5387xa[_0x5387x16],_0x5387x19=_0x5387xa[_0x5387xc],_0x5387x11=_0x5387xa[_0x5387x19],_0x5387x1a=257*_0x5387xa[_0x5387x18]^16843008*_0x5387x18;_0x5387x14[_0x5387x16]=_0x5387x1a<<24|_0x5387x1a>>>8,_0x5387x6[_0x5387x16]=_0x5387x1a<<16|_0x5387x1a>>>16,_0x5387x7[_0x5387x16]=_0x5387x1a<<8|_0x5387x1a>>>24,_0x5387x8[_0x5387x16]=_0x5387x1a,_0x5387x1a=16843009*_0x5387x11^65537*_0x5387x19^257*_0x5387xc^16843008*_0x5387x16,_0x5387xb[_0x5387x18]=_0x5387x1a<<24|_0x5387x1a>>>8,_0x5387xd[_0x5387x18]=_0x5387x1a<<16|_0x5387x1a>>>16,_0x5387x3[_0x5387x18]=_0x5387x1a<<8|_0x5387x1a>>>24,_0x5387x15[_0x5387x18]=_0x5387x1a,_0x5387x16?(_0x5387x16=_0x5387xc^_0x5387xa[_0x5387xa[_0x5387xa[_0x5387x11^_0x5387xc]]],_0x5387x17^=_0x5387xa[_0x5387xa[_0x5387x17]]):_0x5387x16=_0x5387x17=1};var _0x5387x1b=[0,1,2,4,8,16,32,64,128,27,54],_0x5387x13=_0x5387x13[_0x3340[624]]=_0x5387x4[_0x3340[9]]({_doReset:function(){for(var _0x5387x2=this[_0x3340[587]],_0x5387x4=_0x5387x2[_0x3340[544]],_0x5387x13=_0x5387x2[_0x3340[545]]/4,_0x5387x2=4*((this[_0x3340[625]]=_0x5387x13+6)+1),_0x5387x1=this[_0x3340[626]]=[],_0x5387x14=0;_0x5387x2>_0x5387x14;_0x5387x14++){if(_0x5387x13>_0x5387x14){_0x5387x1[_0x5387x14]=_0x5387x4[_0x5387x14]}else{var _0x5387x6=_0x5387x1[_0x5387x14-1];_0x5387x14%_0x5387x13?_0x5387x13>6&&4==_0x5387x14%_0x5387x13&&(_0x5387x6=_0x5387x5[_0x5387x6>>>24]<<24|_0x5387x5[_0x5387x6>>>16&255]<<16|_0x5387x5[_0x5387x6>>>8&255]<<8|_0x5387x5[255&_0x5387x6]):(_0x5387x6=_0x5387x6<<8|_0x5387x6>>>24,_0x5387x6=_0x5387x5[_0x5387x6>>>24]<<24|_0x5387x5[_0x5387x6>>>16&255]<<16|_0x5387x5[_0x5387x6>>>8&255]<<8|_0x5387x5[255&_0x5387x6],_0x5387x6^=_0x5387x1b[_0x5387x14/_0x5387x13|0]<<24),_0x5387x1[_0x5387x14]=_0x5387x1[_0x5387x14-_0x5387x13]^_0x5387x6}};for(_0x5387x4=this[_0x3340[627]]=[],_0x5387x13=0;_0x5387x2>_0x5387x13;_0x5387x13++){_0x5387x14=_0x5387x2-_0x5387x13,_0x5387x6=_0x5387x13%4?_0x5387x1[_0x5387x14]:_0x5387x1[_0x5387x14-4],_0x5387x4[_0x5387x13]=4>_0x5387x13||4>=_0x5387x14?_0x5387x6:_0x5387xb[_0x5387x5[_0x5387x6>>>24]]^_0x5387xd[_0x5387x5[_0x5387x6>>>16&255]]^_0x5387x3[_0x5387x5[_0x5387x6>>>8&255]]^_0x5387x15[_0x5387x5[255&_0x5387x6]]}},encryptBlock:function(_0x5387x2,_0x5387x4){this._doCryptBlock(_0x5387x2,_0x5387x4,this._keySchedule,_0x5387x14,_0x5387x6,_0x5387x7,_0x5387x8,_0x5387x5)},decryptBlock:function(_0x5387x2,_0x5387x4){var _0x5387x13=_0x5387x2[_0x5387x4+1];_0x5387x2[_0x5387x4+1]=_0x5387x2[_0x5387x4+3],_0x5387x2[_0x5387x4+3]=_0x5387x13,this._doCryptBlock(_0x5387x2,_0x5387x4,this._invKeySchedule,_0x5387xb,_0x5387xd,_0x5387x3,_0x5387x15,_0x5387x1),_0x5387x13=_0x5387x2[_0x5387x4+1],_0x5387x2[_0x5387x4+1]=_0x5387x2[_0x5387x4+3],_0x5387x2[_0x5387x4+3]=_0x5387x13},_doCryptBlock:function(_0x5387x2,_0x5387x4,_0x5387x13,_0x5387x5,_0x5387x1,_0x5387x14,_0x5387x6,_0x5387x7){for(var _0x5387x8=this[_0x3340[625]],_0x5387xb=_0x5387x2[_0x5387x4]^_0x5387x13[0],_0x5387xd=_0x5387x2[_0x5387x4+1]^_0x5387x13[1],_0x5387x3=_0x5387x2[_0x5387x4+2]^_0x5387x13[2],_0x5387x15=_0x5387x2[_0x5387x4+3]^_0x5387x13[3],_0x5387xa=4,_0x5387x10=1;_0x5387x8>_0x5387x10;_0x5387x10++){var _0x5387x16=_0x5387x5[_0x5387xb>>>24]^_0x5387x1[_0x5387xd>>>16&255]^_0x5387x14[_0x5387x3>>>8&255]^_0x5387x6[255&_0x5387x15]^_0x5387x13[_0x5387xa++],_0x5387x17=_0x5387x5[_0x5387xd>>>24]^_0x5387x1[_0x5387x3>>>16&255]^_0x5387x14[_0x5387x15>>>8&255]^_0x5387x6[255&_0x5387xb]^_0x5387x13[_0x5387xa++],_0x5387x18=_0x5387x5[_0x5387x3>>>24]^_0x5387x1[_0x5387x15>>>16&255]^_0x5387x14[_0x5387xb>>>8&255]^_0x5387x6[255&_0x5387xd]^_0x5387x13[_0x5387xa++],_0x5387x15=_0x5387x5[_0x5387x15>>>24]^_0x5387x1[_0x5387xb>>>16&255]^_0x5387x14[_0x5387xd>>>8&255]^_0x5387x6[255&_0x5387x3]^_0x5387x13[_0x5387xa++],_0x5387xb=_0x5387x16,_0x5387xd=_0x5387x17,_0x5387x3=_0x5387x18};_0x5387x16=(_0x5387x7[_0x5387xb>>>24]<<24|_0x5387x7[_0x5387xd>>>16&255]<<16|_0x5387x7[_0x5387x3>>>8&255]<<8|_0x5387x7[255&_0x5387x15])^_0x5387x13[_0x5387xa++],_0x5387x17=(_0x5387x7[_0x5387xd>>>24]<<24|_0x5387x7[_0x5387x3>>>16&255]<<16|_0x5387x7[_0x5387x15>>>8&255]<<8|_0x5387x7[255&_0x5387xb])^_0x5387x13[_0x5387xa++],_0x5387x18=(_0x5387x7[_0x5387x3>>>24]<<24|_0x5387x7[_0x5387x15>>>16&255]<<16|_0x5387x7[_0x5387xb>>>8&255]<<8|_0x5387x7[255&_0x5387xd])^_0x5387x13[_0x5387xa++],_0x5387x15=(_0x5387x7[_0x5387x15>>>24]<<24|_0x5387x7[_0x5387xb>>>16&255]<<16|_0x5387x7[_0x5387xd>>>8&255]<<8|_0x5387x7[255&_0x5387x3])^_0x5387x13[_0x5387xa++],_0x5387x2[_0x5387x4]=_0x5387x16,_0x5387x2[_0x5387x4+1]=_0x5387x17,_0x5387x2[_0x5387x4+2]=_0x5387x18,_0x5387x2[_0x5387x4+3]=_0x5387x15},keySize:8});_0x5387x2[_0x3340[624]]=_0x5387x4._createHelper(_0x5387x13)}();function ssc_init(){if(document[_0x3340[628]]){var _0x5387x4=document[_0x3340[628]],_0x5387x14=document[_0x3340[295]],_0x5387x7=window[_0x3340[629]],_0x5387x2=_0x5387x4[_0x3340[630]];if(ssc_root=document[_0x3340[632]][_0x3340[403]](_0x3340[631])>=0?_0x5387x14:_0x5387x4,ssc_activeElement=_0x5387x4,ssc_initdone=!0,top!=self){ssc_frame=!0}else{if(_0x5387x2>_0x5387x7&&(_0x5387x4[_0x3340[314]]<=_0x5387x7||_0x5387x14[_0x3340[314]]<=_0x5387x7)&&(ssc_root[_0x3340[42]][_0x3340[375]]=_0x3340[102],ssc_root[_0x3340[314]]<=_0x5387x7)){var _0x5387x6=document[_0x3340[40]](_0x3340[39]);_0x5387x6[_0x3340[42]][_0x3340[457]]=_0x3340[633],_0x5387x4[_0x3340[634]](_0x5387x6)}};ssc_fixedback||(_0x5387x4[_0x3340[42]][_0x3340[635]]=_0x3340[636],_0x5387x14[_0x3340[42]][_0x3340[635]]=_0x3340[636]),ssc_keyboardsupport&&ssc_addEvent(_0x3340[637],ssc_keydown)}}function ssc_scrollArray(_0x5387x4,_0x5387x14,_0x5387x7,_0x5387x2){if(_0x5387x2||(_0x5387x2=1e3),ssc_directionCheck(_0x5387x14,_0x5387x7),ssc_que[_0x3340[31]]({x:_0x5387x14,y:_0x5387x7,lastX:0>_0x5387x14?0.99:-0.99,lastY:0>_0x5387x7?0.99:-0.99,start:+new Date}),!ssc_pending){var _0x5387x6=function(){for(var _0x5387x13=+new Date,_0x5387x1=0,_0x5387x8=0,_0x5387x5=0;_0x5387x5<ssc_que[_0x3340[81]];_0x5387x5++){var _0x5387x10=ssc_que[_0x5387x5],_0x5387x17=_0x5387x13-_0x5387x10[_0x3340[236]],_0x5387x3=_0x5387x17>=ssc_animtime,_0x5387xa=_0x5387x3?1:_0x5387x17/ssc_animtime;ssc_pulseAlgorithm&&(_0x5387xa=ssc_pulse(_0x5387xa));var _0x5387xb=_0x5387x10[_0x3340[225]]*_0x5387xa-_0x5387x10[_0x3340[638]]>>0,_0x5387x11=_0x5387x10[_0x3340[226]]*_0x5387xa-_0x5387x10[_0x3340[639]]>>0;_0x5387x1+=_0x5387xb,_0x5387x8+=_0x5387x11,_0x5387x10[_0x3340[638]]+=_0x5387xb,_0x5387x10[_0x3340[639]]+=_0x5387x11,_0x5387x3&&(ssc_que[_0x3340[306]](_0x5387x5,1),_0x5387x5--)};if(_0x5387x14){var _0x5387xd=_0x5387x4[_0x3340[640]];_0x5387x4[_0x3340[640]]+=_0x5387x1,_0x5387x1&&_0x5387x4[_0x3340[640]]===_0x5387xd&&(_0x5387x14=0)};if(_0x5387x7){var _0x5387x15=_0x5387x4[_0x3340[641]];_0x5387x4[_0x3340[641]]+=_0x5387x8,_0x5387x8&&_0x5387x4[_0x3340[641]]===_0x5387x15&&(_0x5387x7=0)};_0x5387x14||_0x5387x7||(ssc_que=[]),ssc_que[_0x3340[81]]?setTimeout(_0x5387x6,_0x5387x2/ssc_framerate+1):ssc_pending=!1};setTimeout(_0x5387x6,0),ssc_pending=!0}}function ssc_wheel(_0x5387x4){ssc_initdone||ssc_init();var _0x5387x14=_0x5387x4[_0x3340[238]],_0x5387x7=ssc_overflowingAncestor(_0x5387x14);if(!_0x5387x7||_0x5387x4[_0x3340[642]]||ssc_isNodeName(ssc_activeElement,_0x3340[643])||ssc_isNodeName(_0x5387x14,_0x3340[643])&&/\.pdf/i[_0x3340[644]](_0x5387x14[_0x3340[320]])){return!0};var _0x5387x2=_0x5387x4[_0x3340[645]]||0,_0x5387x6=_0x5387x4[_0x3340[646]]||0;_0x5387x2||_0x5387x6||(_0x5387x6=_0x5387x4[_0x3340[647]]||0),Math[_0x3340[85]](_0x5387x2)>1.2&&(_0x5387x2*=ssc_stepsize/120),Math[_0x3340[85]](_0x5387x6)>1.2&&(_0x5387x6*=ssc_stepsize/120),ssc_scrollArray(_0x5387x7,-_0x5387x2,-_0x5387x6),_0x5387x4[_0x3340[253]]()}function ssc_keydown(_0x5387x4){var _0x5387x14=_0x5387x4[_0x3340[238]],_0x5387x7=_0x5387x4[_0x3340[648]]||_0x5387x4[_0x3340[649]]||_0x5387x4[_0x3340[650]];if(/input|textarea|embed/i[_0x3340[644]](_0x5387x14[_0x3340[651]])||_0x5387x14[_0x3340[652]]||_0x5387x4[_0x3340[642]]||_0x5387x7){return!0};if(ssc_isNodeName(_0x5387x14,_0x3340[653])&&_0x5387x4[_0x3340[654]]===ssc_key[_0x3340[655]]){return!0};var _0x5387x2,_0x5387x6=0,_0x5387x13=0,_0x5387x1=ssc_overflowingAncestor(ssc_activeElement),_0x5387x8=_0x5387x1[_0x3340[656]];switch(_0x5387x1==document[_0x3340[628]]&&(_0x5387x8=window[_0x3340[629]]),_0x5387x4[_0x3340[654]]){case ssc_key[_0x3340[657]]:_0x5387x13=-ssc_arrowscroll;break;case ssc_key[_0x3340[658]]:_0x5387x13=ssc_arrowscroll;break;case ssc_key[_0x3340[655]]:_0x5387x2=_0x5387x4[_0x3340[659]]?1:-1,_0x5387x13=-_0x5387x2*_0x5387x8*0.9;break;case ssc_key[_0x3340[660]]:_0x5387x13=0.9*-_0x5387x8;break;case ssc_key[_0x3340[661]]:_0x5387x13=0.9*_0x5387x8;break;case ssc_key[_0x3340[662]]:_0x5387x13=-_0x5387x1[_0x3340[641]];break;case ssc_key[_0x3340[524]]:var _0x5387x5=_0x5387x1[_0x3340[630]]-_0x5387x1[_0x3340[641]]-_0x5387x8;_0x5387x13=_0x5387x5>0?_0x5387x5+10:0;break;case ssc_key[_0x3340[228]]:_0x5387x6=-ssc_arrowscroll;break;case ssc_key[_0x3340[249]]:_0x5387x6=ssc_arrowscroll;break;default:return!0};ssc_scrollArray(_0x5387x1,_0x5387x6,_0x5387x13),_0x5387x4[_0x3340[253]]()}function ssc_mousedown(_0x5387x4){ssc_activeElement=_0x5387x4[_0x3340[238]]}function ssc_setCache(_0x5387x4,_0x5387x14){for(var _0x5387x7=_0x5387x4[_0x3340[81]];_0x5387x7--;){ssc_cache[ssc_uniqueID(_0x5387x4[_0x5387x7])]=_0x5387x14};return _0x5387x14}function ssc_overflowingAncestor(_0x5387x4){var _0x5387x14=[],_0x5387x7=ssc_root[_0x3340[630]];do{var _0x5387x2=ssc_cache[ssc_uniqueID(_0x5387x4)];if(_0x5387x2){return ssc_setCache(_0x5387x14,_0x5387x2)};if(_0x5387x14[_0x3340[31]](_0x5387x4),_0x5387x7===_0x5387x4[_0x3340[630]]){if(!ssc_frame||ssc_root[_0x3340[656]]+10<_0x5387x7){return ssc_setCache(_0x5387x14,document[_0x3340[628]])}}else{if(_0x5387x4[_0x3340[656]]+10<_0x5387x4[_0x3340[630]]&&(overflow=getComputedStyle(_0x5387x4,_0x3340[100])[_0x3340[267]](_0x3340[663]),_0x3340[636]===overflow||_0x3340[102]===overflow)){return ssc_setCache(_0x5387x14,_0x5387x4)}}}while(_0x5387x4=_0x5387x4[_0x3340[664]])}function ssc_addEvent(_0x5387x4,_0x5387x14,_0x5387x7){window[_0x3340[333]](_0x5387x4,_0x5387x14,_0x5387x7||!1)}function ssc_removeEvent(_0x5387x4,_0x5387x14,_0x5387x7){window[_0x3340[335]](_0x5387x4,_0x5387x14,_0x5387x7||!1)}function ssc_isNodeName(_0x5387x4,_0x5387x14){return _0x5387x4[_0x3340[651]][_0x3340[26]]()===_0x5387x14[_0x3340[26]]()}function ssc_directionCheck(_0x5387x4,_0x5387x14){_0x5387x4=_0x5387x4>0?1:-1,_0x5387x14=_0x5387x14>0?1:-1,(ssc_direction[_0x3340[225]]!==_0x5387x4||ssc_direction[_0x3340[226]]!==_0x5387x14)&&(ssc_direction[_0x3340[225]]=_0x5387x4,ssc_direction[_0x3340[226]]=_0x5387x14,ssc_que=[])}function ssc_pulse_(_0x5387x4){var _0x5387x14,_0x5387x7,_0x5387x2;return _0x5387x4*=ssc_pulseScale,1>_0x5387x4?_0x5387x14=_0x5387x4-(1-Math[_0x3340[665]](-_0x5387x4)):(_0x5387x7=Math[_0x3340[665]](-1),_0x5387x4-=1,_0x5387x2=1-Math[_0x3340[665]](-_0x5387x4),_0x5387x14=_0x5387x7+_0x5387x2*(1-_0x5387x7)),_0x5387x14*ssc_pulseNormalize}function ssc_pulse(_0x5387x4){return _0x5387x4>=1?1:0>=_0x5387x4?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(_0x5387x4))}var ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document[_0x3340[295]],ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var _0x5387x4=0;return function(_0x5387x14){return _0x5387x14[_0x3340[666]]||(_0x5387x14[_0x3340[666]]=_0x5387x4++)}}(),ischrome=/chrome/[_0x3340[644]](navigator[_0x3340[667]][_0x3340[26]]());ischrome&&(ssc_addEvent(_0x3340[199],ssc_mousedown),ssc_addEvent(_0x3340[668],ssc_wheel),ssc_addEvent(_0x3340[357],ssc_init));(function(_0x5387x41){function _0x5387x4(_0x5387x4,_0x5387x8){var _0x5387x14=_0x3340[669]+_0x5387x4+_0x3340[670];_0x5387x41(_0x3340[681],_0x5387x8)[_0x3340[4]](function(){var _0x5387x8=_0x5387x41(this)[_0x3340[671]](),_0x5387x5=_0x5387x8[_0x3340[551]](0,1),_0x5387x6=_0x5387x8[_0x3340[551]](1),_0x5387x13=_0x5387x41(this)[_0x3340[132]](_0x3340[672])[_0x3340[81]]?_0x3340[673]+_0x5387x41(this)[_0x3340[132]](_0x3340[672])[_0x3340[154]](_0x3340[153])+_0x3340[674]:_0x3340[100],_0x5387x1=_0x5387x41(this)[_0x3340[132]](_0x3340[675])[_0x3340[154]](_0x3340[399]);_0x5387x14=_0x3340[676]==_0x5387x5||_0x3340[337]==_0x5387x5?_0x5387x14+(_0x3340[677]+_0x5387x1+_0x3340[670]+_0x5387x13+_0x5387x6+_0x3340[678]):_0x5387x14+(_0x3340[679]+_0x5387x1+_0x3340[670]+_0x5387x13+_0x5387x8+_0x3340[680]+_0x5387x4+_0x3340[670])}),_0x5387x14+=_0x3340[682],_0x5387x41(_0x5387x8)[_0x3340[512]](_0x5387x14),_0x5387x41(_0x3340[683],_0x5387x8)[_0x3340[4]](function(){var _0x5387x4=_0x5387x41(this);0==_0x5387x4[_0x3340[512]]()[_0x3340[142]](/\s| /g,_0x3340[100])[_0x3340[81]]&&_0x5387x4[_0x3340[83]]()}),_0x5387x41(_0x3340[681],_0x5387x8)[_0x3340[4]](function(){var _0x5387x4=_0x5387x41(this);0==_0x5387x4[_0x3340[512]]()[_0x3340[142]](/\s| /g,_0x3340[100])[_0x3340[81]]&&_0x5387x4[_0x3340[83]]()})}_0x5387x41(_0x3340[686])[_0x3340[4]](function(){_0x5387x4(_0x3340[684],this),_0x5387x41(this)[_0x3340[89]](_0x3340[685])}),_0x5387x41(_0x3340[688])[_0x3340[4]](function(){_0x5387x4(_0x3340[687],this)});_0x5387x41(_0x3340[628])[_0x3340[91]](_0x3340[689]),_0x5387x41(_0x3340[686])[_0x3340[4]](function(){var _0x5387x4=_0x5387x41(this);_0x5387x4[_0x3340[691]](_0x3340[690]),_0x5387x4=_0x5387x4[_0x3340[512]](),_0x5387x41(_0x3340[692])[_0x3340[91]](_0x5387x4)});_0x5387x41(_0x3340[688])[_0x3340[140]](_0x3340[681])[_0x3340[89]](_0x3340[693]),_0x5387x41(_0x3340[695])[_0x3340[140]](_0x3340[681])[_0x3340[89]](_0x3340[694]);_0x5387x41(_0x3340[697])[_0x3340[91]](_0x3340[696]);_0x5387x41(_0x3340[701])[_0x3340[101]](_0x3340[228],_0x5387x41(_0x3340[700])[_0x3340[699]]()[_0x3340[698]]()[_0x3340[228]]);_0x5387x41(_0x3340[704])[_0x3340[703]](function(){var _0x5387x42=_0x5387x41(this)[_0x3340[698]]()[_0x3340[228]];kiri1=_0x5387x41(_0x3340[700])[_0x3340[699]]()[_0x3340[698]]()[_0x3340[228]];_0x5387x41(_0x3340[701])[_0x3340[101]](_0x3340[228],_0x5387x42)})[_0x3340[702]](function(){_0x5387x41(_0x3340[701])[_0x3340[101]](_0x3340[228],kiri1)});_0x5387x41(_0x3340[708])[_0x3340[0]](500,function(){_0x5387x41(this)[_0x3340[79]](_0x3340[706])[_0x3340[705]](500)},300,function(){_0x5387x41(this)[_0x3340[79]](_0x3340[706])[_0x3340[707]](500)});_0x5387x41(_0x3340[712])[_0x3340[503]](function(){_0x5387x41(_0x3340[628])[_0x3340[89]](_0x3340[709]);_0x5387x41(_0x3340[711])[_0x3340[710]]()});_0x5387x41(_0x3340[713])[_0x3340[503]](function(){_0x5387x41(_0x3340[628])[_0x3340[116]](_0x3340[709])});_0x5387x41(_0x3340[719])[_0x3340[207]](_0x3340[503],function(){if(_0x5387x41(_0x3340[715])[_0x3340[324]](_0x3340[714])){_0x5387x41(_0x3340[715])[_0x3340[116]](_0x3340[714]);_0x5387x41(_0x3340[715])[_0x3340[89]](_0x3340[716])}else{_0x5387x41(_0x3340[715])[_0x3340[116]](_0x3340[716]);_0x5387x41(_0x3340[715])[_0x3340[89]](_0x3340[714])};_0x5387x41(_0x3340[717])[_0x3340[126]](_0x3340[67]);_0x5387x41(_0x3340[628])[_0x3340[126]](_0x3340[718])});_0x5387x41(_0x3340[725])[_0x3340[154]](_0x3340[399],_0x3340[724])[_0x3340[503]](function(){if(!_0x5387x41(this)[_0x3340[140]](_0x3340[681])[_0x3340[324]](_0x3340[694])){_0x5387x41(_0x3340[721])[_0x3340[116]](_0x3340[720]);_0x5387x41(_0x3340[722])[_0x3340[707]](500)};b=_0x5387x41(this)[_0x3340[290]]();if(b[_0x3340[362]](_0x3340[723])){_0x5387x41(this)[_0x3340[116]](_0x3340[720]);b[_0x3340[707]](500)}else{_0x5387x41(this)[_0x3340[89]](_0x3340[720]);b[_0x3340[705]](500)}});_0x5387x41(_0x3340[628])[_0x3340[503]](function(_0x5387x4){if(_0x5387x41(_0x3340[715])[_0x3340[324]](_0x3340[714])){0===_0x5387x41(_0x5387x4[_0x3340[238]])[_0x3340[259]](_0x3340[726])[_0x3340[81]]&&_0x5387x41(_0x3340[719])[_0x3340[503]]()}});_0x5387x41(function(){function _0x5387x8(_0x5387x8,_0x5387x2,_0x5387x4){$[_0x3340[430]]({type:_0x3340[424],url:_0x5387x8,async:!0,contentType:_0x3340[727],dataType:_0x3340[428],success:function(_0x5387x8){var _0x5387x5=_0x5387x8[_0x3340[729]][_0x3340[728]];if(_0x5387x5){var _0x5387x1c=_0x3340[100];for(var _0x5387x14=0;_0x5387x14<_0x5387x5[_0x3340[81]];_0x5387x14++){for(var _0x5387x1=_0x5387x5[_0x5387x14],_0x5387x10=0;_0x5387x10<_0x5387x1[_0x3340[730]][_0x3340[81]];_0x5387x10++){if(_0x3340[731]==_0x5387x1[_0x3340[730]][_0x5387x10][_0x3340[732]]){var _0x5387x13=_0x5387x1[_0x3340[730]][_0x5387x10][_0x3340[399]];break}};try{var _0x5387xa=_0x5387x1[_0x3340[736]][_0x3340[735]][_0x3340[142]](_0x3340[733],_0x3340[734])}catch(c){var _0x5387xa};var _0x5387x6=_0x5387x1[_0x3340[738]][_0x3340[737]],_0x5387x18=_0x5387x43(_0x5387x1[_0x3340[739]].$t),_0x5387xd=_0x5387x1[_0x3340[741]][0][_0x3340[740]];if(-1!==_0x5387xa[_0x3340[403]](_0x3340[742])){_0x5387xa=_0x5387x1[_0x3340[736]][_0x3340[735]][_0x3340[142]](_0x3340[743],_0x3340[744]);var _0x5387xb=_0x3340[745]+_0x5387xa+_0x3340[746]}else{var _0x5387xb=_0x3340[747]+_0x5387xa+_0x3340[746]};if(_0x5387x2[_0x3340[140]](_0x3340[683])[_0x3340[324]](_0x3340[748])){_0x5387x1c+=_0x3340[749]+_0x5387x13+_0x3340[750]+_0x5387x6+_0x3340[751]+_0x5387x18+_0x3340[752]}else{_0x5387x1c+=_0x3340[753]+_0x5387x13+_0x3340[750]+_0x5387xb+_0x3340[754]+_0x5387x13+_0x3340[750]+_0x5387x6+_0x3340[751]+_0x5387x18+_0x3340[752]}};_0x5387x2[_0x3340[132]](_0x5387x4)[_0x3340[91]](_0x5387x1c),_0x5387x2[_0x3340[132]](_0x3340[756])[_0x3340[116]](_0x3340[755])}else{_0x5387x2[_0x3340[132]](_0x5387x4)[_0x3340[116]](_0x3340[755])[_0x3340[91]](_0x3340[757])}}})}function _0x5387x43(_0x5387x2){var _0x5387x4=new Array;_0x5387x4[1]=_0x3340[758],_0x5387x4[2]=_0x3340[759],_0x5387x4[3]=_0x3340[760],_0x5387x4[4]=_0x3340[761],_0x5387x4[5]=_0x3340[762],_0x5387x4[6]=_0x3340[763],_0x5387x4[7]=_0x3340[764],_0x5387x4[8]=_0x3340[765],_0x5387x4[9]=_0x3340[766],_0x5387x4[10]=_0x3340[767],_0x5387x4[11]=_0x3340[768],_0x5387x4[12]=_0x3340[769];var _0x5387x8=_0x5387x2[_0x3340[532]](0,4),_0x5387x14=_0x5387x2[_0x3340[532]](5,7),_0x5387x13=_0x5387x2[_0x3340[532]](8,10),_0x5387x1=_0x3340[770]+_0x5387x4[parseInt(_0x5387x14,10)]+_0x3340[771]+_0x5387x13+_0x3340[771]+_0x5387x8+_0x3340[772];return _0x5387x1}_0x5387x41(_0x3340[792])[_0x3340[365]](_0x3340[773],function(){var _0x5387x4=_0x5387x41(this),_0x5387x9=_0x5387x4[_0x3340[132]](_0x3340[681]),_0x5387x5=_0x5387x9[_0x3340[671]]();if(/label/g[_0x3340[644]](_0x5387x5)&&!(/,/g[_0x3340[644]](_0x5387x5))){_0x5387x9[_0x3340[140]](_0x3340[683])[_0x3340[83]](),_0x5387x5=_0x5387x5[_0x3340[142]](/label\//g,_0x3340[100]);var _0x5387x10=_0x3340[774]+_0x5387x5+_0x3340[775];_0x5387x4[_0x3340[91]](_0x3340[776]),_0x5387x8(_0x5387x10,_0x5387x4,_0x3340[756])};if(/label/g[_0x3340[644]](_0x5387x5)&&/,/g[_0x3340[644]](_0x5387x5)){_0x5387x9[_0x3340[140]](_0x3340[683])[_0x3340[83]](),_0x5387x5=_0x5387x5[_0x3340[142]](/label\//g,_0x3340[100]),_0x5387x4[_0x3340[89]](_0x3340[777]);_0x5387x4[_0x3340[91]](_0x3340[776]);var _0x5387x10=_0x5387x5;for(var _0x5387x44=_0x3340[778],_0x5387x13=0,_0x5387x5=_0x5387x10[_0x3340[270]](_0x3340[269]);_0x5387x13<_0x5387x5[_0x3340[81]];_0x5387x13++){var _0x5387x45=_0x5387x5[_0x5387x13],_0x5387x15=_0x3340[779]+_0x5387x45+_0x3340[780];_0x5387x44+=_0x5387x15};_0x5387x44+=_0x3340[781];_0x5387x4[_0x3340[132]](_0x3340[756])[_0x3340[91]](_0x5387x44);li=_0x5387x4[_0x3340[132]](_0x3340[782]);if(li[_0x3340[81]]>0){for(var _0x5387x5=_0x3340[783],_0x5387x14=1;_0x5387x14<=li[_0x3340[81]];_0x5387x14++){_0x5387x5+=_0x3340[784]+_0x5387x14+_0x3340[785]};_0x5387x5+=_0x3340[445],_0x5387x4[_0x3340[132]](_0x3340[756])[_0x3340[91]](_0x5387x5),li[_0x3340[699]]()[_0x3340[89]](_0x3340[67]),_0x5387x4[_0x3340[132]](_0x3340[786])[_0x3340[502]](0),_0x5387x4[_0x3340[132]](_0x3340[786])[_0x3340[699]]()[_0x3340[685]](0),li[_0x3340[4]](function(){_0x5387x41(this)[_0x3340[703]](function(){var _0x5387x8=(_0x5387x41(this),_0x5387x41(this)[_0x3340[106]]())+1;_0x5387x4[_0x3340[132]](_0x3340[786])[_0x3340[4]](function(){_0x5387x41(this)[_0x3340[324]](_0x3340[787]+_0x5387x8)?_0x5387x41(this)[_0x3340[382]]()[_0x3340[789]](_0x3340[788]):_0x5387x41(this)[_0x3340[382]]()[_0x3340[502]](0)});li[_0x3340[116]](_0x3340[67]),_0x5387x41(this)[_0x3340[89]](_0x3340[67])});var _0x5387xa=_0x5387x41(this)[_0x3340[671]](),_0x5387x14=_0x3340[774]+_0x5387xa+_0x3340[790],_0x5387x1=_0x5387x41(this)[_0x3340[106]]()+1;_0x5387x8(_0x5387x14,_0x5387x4,_0x3340[791]+_0x5387x1)})}}})});backtotop&&(_0x5387x41(_0x3340[628])[_0x3340[91]](_0x3340[793]),_0x5387x41(_0x3340[796])[_0x3340[503]](function(){_0x5387x41(_0x3340[795])[_0x3340[110]]({scrollTop:_0x3340[794]})}));_0x5387x41(function(){notload=true;var _0x5387x46=$(_0x3340[797])[_0x3340[671]]();var _0x5387x47=CryptoJS[_0x3340[624]][_0x3340[589]](_0x5387x46,_0x3340[798]).toString(CryptoJS[_0x3340[549]].Utf8);var _0x5387x48=_0x5387x47[_0x3340[270]](_0x3340[269]);var _0x5387x49=_0x5387x48[0];var _0x5387x4a=_0x5387x48[1];var _0x5387x4b=window[_0x3340[534]][_0x3340[399]];_0x5387x4b=_0x5387x4b[_0x3340[532]](0,_0x5387x4b[_0x3340[799]](_0x3340[117]));if(!(_0x3340[800]==_0x5387x49&&window[_0x3340[534]][_0x3340[399]][_0x3340[403]](_0x5387x4a)>-1)&&notload){_0x5387x41(_0x3340[803])[_0x3340[802]](_0x3340[801]);_0x5387x41(_0x3340[805])[_0x3340[3]](function(){_0x5387x41(_0x3340[804])[_0x3340[522]]()});_0x5387x41(_0x3340[809])[_0x3340[101]]({display:_0x3340[806],"\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65":_0x3340[433],color:_0x3340[807],visibility:_0x3340[808]});if(_0x5387x41(_0x3340[809])[_0x3340[512]]()!=(_0x3340[810])){location[_0x3340[399]]=_0x3340[811]};notload=false}});_0x5387x41(function(){var _0x5387x4c=100;_0x5387x41(window)[_0x3340[636]](function(){var _0x5387x4d=_0x5387x4e();if(_0x5387x4d>=_0x5387x4c){_0x5387x41(_0x3340[813])[_0x3340[89]](_0x3340[812]),backtotop&&_0x5387x41(_0x3340[796])[_0x3340[89]](_0x3340[685])}else{_0x5387x41(_0x3340[813])[_0x3340[116]](_0x3340[812]),backtotop&&_0x5387x41(_0x3340[796])[_0x3340[116]](_0x3340[685])}});function _0x5387x4e(){return window[_0x3340[814]]}});_0x5387x41(_0x3340[817])[_0x3340[4]](function(){t=_0x5387x41(this)[_0x3340[671]]()[_0x3340[142]](_0x3340[816],_0x3340[673])[_0x3340[142]](_0x3340[815],_0x3340[674]);_0x5387x41(this)[_0x3340[512]](t)});_0x5387x41(_0x3340[832])[_0x3340[4]](function(){var _0x5387x4=_0x5387x41(this),_0x5387x2=_0x5387x4[_0x3340[132]](_0x3340[818])[_0x3340[671]](),_0x5387xa=(_0x5387x4[_0x3340[324]](_0x3340[819]))?_0x3340[820]:(_0x5387x4[_0x3340[324]](_0x3340[393])||_0x5387x4[_0x3340[324]](_0x3340[821]))?_0x3340[822]:_0x3340[823],_0x5387x7=(_0x5387x4[_0x3340[324]](_0x3340[819]))?_0x3340[824]:(_0x5387x4[_0x3340[324]](_0x3340[825]))?_0x3340[826]:(_0x5387x4[_0x3340[324]](_0x3340[393])||_0x5387x4[_0x3340[324]](_0x3340[821]))?_0x3340[827]:_0x3340[828];h=_0x5387x2[_0x3340[27]]((_0x5387x2[_0x3340[403]](_0x3340[816])+1),_0x5387x2[_0x3340[403]](_0x3340[815]));_0x5387x4[_0x3340[132]](_0x3340[829])[_0x3340[671]](h),_0x5387x4[_0x3340[132]](_0x3340[830])[_0x3340[671]](_0x5387xa),_0x5387x4[_0x3340[132]](_0x3340[831])[_0x3340[671]](_0x5387x7),_0x5387x4[_0x3340[132]](_0x3340[818])[_0x3340[83]]()});_0x5387x41(function(){var _0x5387x46=$(_0x3340[797])[_0x3340[671]]();var _0x5387x47=CryptoJS[_0x3340[624]][_0x3340[589]](_0x5387x46,_0x3340[798]).toString(CryptoJS[_0x3340[549]].Utf8);var _0x5387x48=_0x5387x47[_0x3340[270]](_0x3340[269]);var _0x5387x49=_0x5387x48[0];var _0x5387x4a=_0x5387x48[1];var _0x5387x4b=window[_0x3340[534]][_0x3340[399]];_0x5387x4b=_0x5387x4b[_0x3340[532]](0,_0x5387x4b[_0x3340[799]](_0x3340[117]));if(!(_0x3340[800]==_0x5387x49&&window[_0x3340[534]][_0x3340[399]][_0x3340[403]](_0x5387x4a)>-1)&&notload){_0x5387x41(_0x3340[803])[_0x3340[802]](_0x3340[801]);_0x5387x41(_0x3340[805])[_0x3340[3]](function(){_0x5387x41(_0x3340[804])[_0x3340[522]]()});_0x5387x41(_0x3340[809])[_0x3340[101]]({display:_0x3340[806],"\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65":_0x3340[433],color:_0x3340[807],visibility:_0x3340[808]});if(_0x5387x41(_0x3340[809])[_0x3340[512]]()!=(_0x3340[810])){location[_0x3340[399]]=_0x3340[811]};notload=false}});_0x5387x41(_0x3340[835])[_0x3340[132]](_0x3340[690])[_0x3340[4]](function(){title=_0x5387x41(this)[_0x3340[132]](_0x3340[833])[_0x3340[671]](),_0x5387x41(this)[_0x3340[154]](_0x3340[834],title)});_0x5387x41(_0x3340[835])[_0x3340[4]](function(){var _0x5387x5=_0x5387x41(this),_0x5387x8=_0x5387x5[_0x3340[79]](_0x3340[836]);_0x5387x5[_0x3340[92]](_0x3340[837]),_0x5387x41(_0x3340[842])[_0x3340[91]](_0x5387x8)[_0x3340[4]](function(){_0x5387x41(this)[_0x3340[79]](_0x3340[39])[_0x3340[4]](function(){_0x5387x41(this)[_0x3340[116]](_0x3340[838]),_0x5387x5[_0x3340[132]](_0x3340[841])[_0x3340[91]](_0x3340[839]+_0x5387x41(this)[_0x3340[162]](_0x3340[840])+_0x3340[678])})});_0x5387x41(_0x3340[843])[_0x3340[89]](_0x3340[67]);_0x5387x41(_0x3340[845])[_0x3340[89]](_0x3340[844]);_0x5387x41(_0x3340[851])[_0x3340[503]](function(){_0x5387x41(_0x3340[846])[_0x3340[116]](_0x3340[67]);_0x5387x41(this)[_0x3340[89]](_0x3340[67]);var _0x5387x4f=_0x5387x41(this)[_0x3340[140]]()[_0x3340[106]]();_0x5387x41(_0x3340[848])[_0x3340[116]](_0x3340[844])[_0x3340[116]](_0x3340[847]);_0x5387x41(_0x3340[848])[_0x3340[86]](_0x5387x4f)[_0x3340[89]](_0x3340[67]);_0x5387x41(_0x3340[848])[_0x3340[86]](_0x5387x4f)[_0x3340[849]]()[_0x3340[89]](_0x3340[844]);_0x5387x41(_0x3340[848])[_0x3340[86]](_0x5387x4f)[_0x3340[850]]()[_0x3340[89]](_0x3340[847]);_0x5387x41(_0x3340[835])[_0x3340[101]](_0x3340[375],(_0x5387x41(_0x3340[848])[_0x3340[86]](_0x5387x4f)[_0x3340[375]]()+_0x5387x41(_0x3340[841])[_0x3340[375]]()+5)+_0x3340[276]);return false})});_0x5387x41(document)[_0x3340[852]](function(){_0x5387x41(_0x3340[835])[_0x3340[101]](_0x3340[375],_0x5387x41(_0x3340[835])[_0x3340[375]]()+_0x3340[276])});_0x5387x41(_0x3340[854])[_0x3340[4]](function(){var _0x5387x2=_0x5387x41(this)[_0x3340[671]]()[_0x3340[551]](0,40),_0x5387x14=_0x5387x2[_0x3340[799]](_0x3340[771]);_0x5387x14>21&&_0x5387x41(this)[_0x3340[671]](_0x5387x2[_0x3340[551]](0,_0x5387x14)[_0x3340[142]](/[?,!\.-:;]*$/,_0x3340[853]))});function _0x5387x50(_0x5387x2,_0x5387x4,_0x5387x8){_0x5387x4[_0x3340[89]](_0x3340[855]),_0x5387x8[_0x3340[83]](),_0x5387x4[_0x3340[512]](_0x3340[856]+_0x5387x2+_0x3340[857])}function _0x5387x43(_0x5387x2){var _0x5387x4=new Array;_0x5387x4[1]=_0x3340[758],_0x5387x4[2]=_0x3340[759],_0x5387x4[3]=_0x3340[760],_0x5387x4[4]=_0x3340[761],_0x5387x4[5]=_0x3340[762],_0x5387x4[6]=_0x3340[763],_0x5387x4[7]=_0x3340[764],_0x5387x4[8]=_0x3340[765],_0x5387x4[9]=_0x3340[766],_0x5387x4[10]=_0x3340[767],_0x5387x4[11]=_0x3340[768],_0x5387x4[12]=_0x3340[769];var _0x5387x8=_0x5387x2[_0x3340[532]](0,4),_0x5387x14=_0x5387x2[_0x3340[532]](5,7),_0x5387x13=_0x5387x2[_0x3340[532]](8,10),_0x5387x1=_0x3340[858]+_0x5387x4[parseInt(_0x5387x14,10)]+_0x3340[771]+_0x5387x13+_0x3340[771]+_0x5387x8+_0x3340[772];return _0x5387x1}function _0x5387x51(_0x5387x2){for(var _0x5387x4=0;_0x5387x4<_0x5387x2[_0x3340[81]];_0x5387x4++){var _0x5387x8=_0x3340[859]+_0x5387x2[_0x5387x4][_0x3340[354]][_0x3340[737]]+_0x3340[860]};return _0x5387x8}function _0x5387x52(_0x5387x4){if(_0x5387x4[_0x3340[741]][0]!==_0x3340[41]){return _0x5387x4[_0x3340[741]][0][_0x3340[740]]}}function _0x5387x53(_0x5387x4,_0x5387x2){var _0x5387x54=_0x5387x4[_0x3340[142]](/sliderbig\//g,_0x3340[100]),_0x5387x1=_0x3340[861]+(_0x5387x54===_0x3340[100]?_0x3340[100]:_0x3340[862]+_0x5387x54)+_0x3340[863]+sliderbignum+_0x3340[864],_0x5387x55=_0x5387x2;$[_0x3340[430]]({type:_0x3340[424],url:_0x5387x1,async:true,contentType:_0x3340[727],dataType:_0x3340[428],success:function(_0x5387x4){var _0x5387x8=_0x5387x4[_0x3340[729]][_0x3340[728]];if(_0x5387x8){_0x5387x55[_0x3340[512]](_0x3340[865]);width=_0x5387x41(_0x3340[866])[_0x3340[74]]();for(var _0x5387x2=0;_0x5387x2<_0x5387x8[_0x3340[81]];_0x5387x2++){for(var _0x5387x13,_0x5387x10=_0x5387x8[_0x5387x2],_0x5387x14=0;_0x5387x14<_0x5387x10[_0x3340[730]][_0x3340[81]];_0x5387x14++){if(_0x3340[731]==_0x5387x10[_0x3340[730]][_0x5387x14][_0x3340[732]]){var _0x5387x5=_0x5387x10[_0x3340[730]][_0x5387x14][_0x3340[399]];break}};_0x5387x13=void(0)!==_0x5387x10[_0x3340[736]]?_0x5387x10[_0x3340[736]][_0x3340[735]][_0x3340[142]](_0x3340[733],_0x3340[867]+width+_0x3340[868]):_0x3340[869];var _0x5387x1=_0x5387x10[_0x3340[738]][_0x3340[737]],_0x5387xa=_0x5387x10[_0x3340[870]][_0x3340[737]][_0x3340[551]](0,150)+_0x3340[853],_0x5387x6=_0x5387x52(_0x5387x10),_0x5387x7=_0x5387x51(_0x5387x10[_0x3340[871]]),_0x5387x3=(_0x5387x43(_0x5387x10[_0x3340[739]].$t),_0x3340[872]+_0x5387x5+_0x3340[873]+_0x5387x13+_0x3340[874]+_0x5387x1+_0x3340[875]+width+_0x3340[876]+_0x5387x6+_0x3340[670]+_0x3340[877]+_0x5387x6+_0x3340[878]+_0x5387x7+_0x3340[879]+_0x5387x5+_0x3340[670]+_0x5387x1+_0x3340[880]+_0x5387xa+_0x3340[881]);_0x5387x55[_0x3340[116]](_0x3340[502])[_0x3340[132]](_0x3340[882])[_0x3340[91]](_0x5387x3)};_0x5387x55[_0x3340[132]](_0x3340[882])[_0x3340[328]]({nav:true,navText:[_0x3340[883],_0x3340[884]],autoplay:true,loop:true,autoplayTimeout:3500,autoplayHoverPause:true,items:1}),_0x5387x55[_0x3340[89]](_0x3340[364])[_0x3340[116]](_0x3340[885])[_0x3340[789]]()}}})}function _0x5387x56(_0x5387x13){var _0x5387x14=_0x3340[886]+num_comment;$[_0x3340[430]]({type:_0x3340[424],url:_0x5387x14,async:true,contentType:_0x3340[727],dataType:_0x3340[428],success:function(_0x5387x2){_0x5387x13[_0x3340[512]](_0x3340[100]);for(var _0x5387x4=0;_0x5387x4<_0x5387x2[_0x3340[729]][_0x3340[728]][_0x3340[81]];_0x5387x4++){for(var _0x5387x8=_0x5387x2[_0x3340[729]][_0x3340[728]][_0x5387x4],_0x5387x14=0;_0x5387x14<_0x5387x8[_0x3340[730]][_0x3340[81]];_0x5387x14++){if(_0x3340[731]==_0x5387x8[_0x3340[730]][_0x5387x14][_0x3340[732]]){var _0x5387x1=_0x5387x8[_0x3340[730]][_0x5387x14][_0x3340[399]];break}else{var _0x5387x1=_0x3340[887]}};var _0x5387x10=_0x5387x8[_0x3340[871]][0][_0x3340[354]][_0x3340[737]],_0x5387xa=/blogblog/g[_0x3340[644]](_0x5387x8[_0x3340[871]][0][_0x3340[888]][_0x3340[320]])?defaultavatar:_0x5387x8[_0x3340[871]][0][_0x3340[888]][_0x3340[320]][_0x3340[142]](_0x3340[889],_0x3340[890]),_0x5387x6=_0x5387x8[_0x3340[384]][_0x3340[737]][_0x3340[81]]<=65?_0x5387x8[_0x3340[384]][_0x3340[737]]:_0x5387x8[_0x3340[384]][_0x3340[737]][_0x3340[551]](0,_0x5387x8[_0x3340[384]][_0x3340[737]][_0x3340[142]](/<br *\/?>|[\s]+/gi,_0x3340[771])[_0x3340[142]](/<.*?>|[<>]/g,_0x3340[100])[_0x3340[142]](/\[\S[^\]]*\]/g,_0x3340[100])[_0x3340[551]](0,65)[_0x3340[799]](_0x3340[771]))+_0x3340[891],_0x5387x14=(_0x5387x1[_0x3340[270]](_0x3340[337])[_0x3340[120]](_0x3340[771])[_0x3340[532]](_0x5387x1[_0x3340[799]](_0x3340[887])+1,_0x5387x1[_0x3340[799]](_0x3340[117])));c=_0x5387x43(_0x5387x8[_0x3340[739]].$t),m=_0x5387x8[_0x3340[730]][_0x3340[81]]>2?(_0x3340[892]+_0x5387x1+_0x3340[670]+_0x5387x14[_0x3340[551]](0,_0x5387x14[_0x3340[551]](0,30)[_0x3340[799]](_0x3340[771]))+_0x3340[893]+c+_0x3340[445]):_0x3340[100];if(display_emo){for(i=0;i<Emo_List[_0x3340[81]];i+=2){if(_0x5387x6[_0x3340[403]](Emo_List[i])>0){var _0x5387x15=_0x3340[894]+Emo_List[i+1]+_0x3340[874]+Emo_List[i]+_0x3340[895]+Emo_List[i]+_0x3340[896],_0x5387x9=Emo_List[i];_0x5387x6=_0x5387x6[_0x3340[142]](_0x3340[771]+_0x5387x9,_0x5387x15)}}};_0x5387x13[_0x3340[91]](_0x3340[897]+_0x5387x1+_0x3340[873]+_0x5387xa+_0x3340[898]+_0x5387x1+_0x3340[670]+_0x5387x10+_0x3340[899]+_0x5387x6+_0x3340[445]+m+_0x3340[900])}}})}_0x5387x41(_0x3340[902])[_0x3340[4]](function(){var _0x5387x15=_0x5387x41(this),_0x5387x11=_0x5387x15[_0x3340[132]](_0x3340[901])[_0x3340[81]]>1?_0x3340[100]:_0x5387x15[_0x3340[132]](_0x3340[901])[_0x3340[699]]()[_0x3340[671]]();_0x5387x15[_0x3340[324]](_0x3340[502])&&_0x5387x53(_0x5387x11,_0x5387x15)});_0x5387x41(_0x3340[905])[_0x3340[4]](function(){var _0x5387x15=_0x5387x41(this),_0x5387x11=_0x5387x15[_0x3340[79]](_0x3340[903]),_0x5387xd=_0x5387x11[_0x3340[671]]();!_0x5387x15[_0x3340[324]](_0x3340[904])&&(/facebook.com/g[_0x3340[644]](_0x5387xd)?_0x5387x50(_0x5387xd,_0x5387x15,_0x5387x11):/recentcomment/g[_0x3340[644]](_0x5387xd)&&_0x5387x56(_0x5387x11))});stickysidebar&&_0x5387x41(document)[_0x3340[852]](function(){var _0x5387x14=_0x5387x41(_0x3340[906]),_0x5387x1e=_0x5387x41(window),_0x5387xa=_0x5387x41(document),_0x5387x10=5,_0x5387x57=_0x5387x14[_0x3340[698]]()[_0x3340[230]],_0x5387x2=0,_0x5387x58=135;_0x5387x14[_0x3340[101]](_0x3340[74],_0x5387x14[_0x3340[907]](true));_0x5387x41(window)[_0x3340[636]](function(){if(_0x5387x41(_0x3340[908])[_0x3340[375]]()>_0x5387x41(_0x3340[909])[_0x3340[375]]()){if(_0x5387x1e[_0x3340[641]]()===false||_0x5387x1e[_0x3340[641]]()===0){_0x5387x14[_0x3340[101]](_0x3340[74],_0x5387x14[_0x3340[907]](true))}else{if(_0x5387x1e[_0x3340[641]]()>_0x5387x2){if(_0x5387x41(_0x3340[910])[_0x3340[698]]()[_0x3340[230]]+_0x5387x41(_0x3340[910])[_0x3340[375]]()-_0x5387x1e[_0x3340[375]]()<_0x5387x1e[_0x3340[641]]()){_0x5387x14[_0x3340[101]]({position:_0x3340[911],top:(_0x5387x41(_0x3340[910])[_0x3340[698]]()[_0x3340[230]]+_0x5387x41(_0x3340[910])[_0x3340[375]]()-_0x5387x41(_0x3340[909])[_0x3340[698]]()[_0x3340[230]]-_0x5387x14[_0x3340[375]]()),bottom:_0x3340[100]})}else{if(_0x5387x14[_0x3340[698]]()[_0x3340[230]]+_0x5387x14[_0x3340[375]]()-_0x5387x1e[_0x3340[375]]()-_0x5387x10<_0x5387x1e[_0x3340[641]]()){_0x5387x14[_0x3340[101]]({position:_0x3340[912],top:_0x3340[100],bottom:0})}else{_0x5387x14[_0x3340[101]]({position:_0x3340[911],top:(_0x5387x14[_0x3340[698]]()[_0x3340[230]]-_0x5387x41(_0x3340[909])[_0x3340[698]]()[_0x3340[230]]),bottom:_0x3340[100]})}};_0x5387x2=_0x5387x1e[_0x3340[641]]()}else{if(_0x5387x1e[_0x3340[641]]()<_0x5387x2){if(_0x5387x57>_0x5387x1e[_0x3340[641]]()+_0x5387x58){_0x5387x14[_0x3340[101]]({position:_0x3340[100],top:_0x3340[100],bottom:_0x3340[100]})}else{if(_0x5387x14[_0x3340[698]]()[_0x3340[230]]+_0x5387x10>_0x5387x1e[_0x3340[641]]()+_0x5387x58){_0x5387x14[_0x3340[101]]({position:_0x3340[912],top:_0x5387x58,bottom:_0x3340[100]});_0x5387x2=_0x5387x1e[_0x3340[641]]()}else{_0x5387x14[_0x3340[101]]({position:_0x3340[911],top:(_0x5387x14[_0x3340[698]]()[_0x3340[230]]-_0x5387x41(_0x3340[909])[_0x3340[698]]()[_0x3340[230]]),bottom:_0x3340[100]})};_0x5387x2=_0x5387x1e[_0x3340[641]]()}}}}}})})})(jQuery)