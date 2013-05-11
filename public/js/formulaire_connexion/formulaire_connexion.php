<?php
session_start();

if((!empty($_SESSION['prenom'])) || (!empty($_SESSION['id'])) )
{
?>
<div class="tab">
	<ul class="login">
		<li class="left">&nbsp;</li>
		<li>Bonjour !</li>
		<li class="sep">|</li>
		<li id="toggle">
			<a id="open" >  <?php echo $_SESSION['nom']." "; ?> <?php echo $_SESSION['prenom'] ?>   </a>
		</li>	
		<li class="sep">|</li>
		<li id="toggle">
		<a style="display:none;"  class="close" ><a href="index.php?action=exit">Déconnexion</a></a>			
		</li>	
		<li class="right">&nbsp;</li>
	</ul> 
</div>
<?php
}
else
{
?>
<div class="tab">
	<ul class="login">
	

	</ul>
</div>	
<?php
}		 
?>
<div id="container">
	<div id="content" style="padding-top:0px;">
	</div>
</div>

























