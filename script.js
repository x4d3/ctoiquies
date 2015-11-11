  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-22989604-1', 'auto');
  ga('send', 'pageview');

  
  
 function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
} 
$( document ).ready(function() {
	var loc = window.location;
	var pathname = loc.pathname;
	var split = pathname.split("/");
	var filename = split[split.length-1];
	var decoded = decodeURIComponent(filename);
	var arg = replaceAll(decoded, "_", " ");
	var wittyRemark = "c'est toi qui es " + arg + ".";
	$('#wittyRemark').text(wittyRemark);
	document.title = wittyRemark;
});