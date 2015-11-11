<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >


<?php
	$nom = $_GET['arg'];
	$nom = str_replace("_"," ",$nom);
	if ($nom){
		$witty_remark = "C' est toi qui es ".$nom.".";
	}
?>
<head>
	<title><?php echo $witty_remark ?></title>
	<meta name="keywords" content="<?php echo $witty_remark ?>">
	<meta name="description" content="<?php echo $witty_remark ?>">
	<meta name="language" CONTENT="fr">
	<meta content="text/html; Charset=UTF-8" http-equiv="Content-Type" />
	<meta http-equiv="Content-Language" content="fr">
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-22989604-1', 'auto');
	  ga('send', 'pageview');

	</script>
	
<style type="text/css">
	html, body {background-color:black;
		cursor: pointer;
		height: 100%;
		margin: 0;
		position: absolute;
		width: 100%;
	}
	
	
	#wittyRemark{
		font-family: Garamond;
		color: white;
		font-size: 50px;
		text-align: center;
		margin: 20% auto 0 auto;
	}
</style>
</head>
   <head>
   </head>
   <body onclick="window.location.href='http://ctoiqui.es';"> 
   <div id="wittyRemark"><?php echo $witty_remark ?></div >
   </body>
</html>