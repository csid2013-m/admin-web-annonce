<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<meta http-equiv="Content-Type" content="text/html; charest=ISO-8859-1" />

	<meta name='Identifier-URL' content='http://www.stagesenfrance.fr' />
	<meta name="Language" content="fr" />
	<meta name="Author" content="Helene" ></meta>
	<meta name="Copyright" content="© stagesenfrance.fr - 2011" /> 
	<meta name="Description" content="Votre site de recherche de stage ." />
	
<html>
	<head>
			<title>Offres de stages</title>
			<link rel="stylesheet" media="screen" href="./inc/styles/style_page.css" />
			<link rel="stylesheet" media="screen" href="./inc/styles/style_contenue.css" />
			<link rel="stylesheet" media="screen" href="./inc/styles/style_annonces.css" />
			<!--<link rel="shortcut icon" href="./img/mon_icone.png" />-->
			<script src="./inc/js/clearbox.js?dir=./inc/js/clearbox&lng=fr" type="text/javascript">
    
			</script> 
			<style>
				div#header a:link {
					color: white;
				}
				#hdrPub {
					background-color: #EFECCA;
					height: 60px;
					left: 570px;
					position: absolute;
					top: 25px;
					width: 468px;
					behavior : url(./inc/styles/ie-css3.htc);
				}
				#menu{
					width:90%;
					height:90%;
				}
				#menu:hover
				{
					-moz-transform: scale(1.2);
					-webkit-transform: scale(1.2);
					-o-transform: scale(1.2) ;
					-ms-transform: scale(1.2);
					transform: scale(1.2) ;


					-webkit-transition: all 0.3s ease-in;
					-moz-transition: all 0.3s ease-in;
					-o-transition: all 0.3s ease-in;
					transition: all 0.3s ease-in;
				}
				#menu_boutons  img{
					width:100%;
					height:100%;
					behavior : url(./inc/styles/ie-css3.htc);
				}
				#IconSpec
				{
					float:right;
					behavior : url(./inc/styles/ie-css3.htc);
				}
				fluxActu.titreActu
				{
					color:#002F2F;
					text-align:center;
				}		
				fluxActu.contenuActu
				{
					color:#2E1C0B;
					text-align:center;
				}
			</style>
	</head>
	<body>
		<div class="wrapper">
			<!-- header -->
			<div id="header" class="header">
				<!-- Logo -->
				<div  class="hdrlogo" id="hdrlogo" >
					<img src="./img/header_stagesenfrance_test14.png">
				</div>
				
				<!-- Publicites -->
				<div class="hdrPub" id="hdrPub" ></div>
				
				<!-- Menu -->
				<div class="hdrmenu" id="hdrmenu">
					<div class="boutons" id="boutons">
						<table width="70%" id='menu_boutons'>
							<tr style="position:absolute;left:45px;top:130px">					
								<td    style="height:90px;width:90px;"><img 	id="menu"     src="./img/accueil.png" /></td>
								<td    style="height:90px;width:90px;"><img     id="menu"     src="./img/accueil.png" /></td>
								<td    style="height:90px;width:90px;"><img 	id="menu"     src="./img/accueil.png" /></td>
								<td    style="height:90px;width:90px;"><img 	id="menu"     src="./img/accueil.png" ></td>
								<td    style="height:90px;width:90px;"><img 	id="menu"     src="./img/accueil.png" ></td>
								<td    style="height:90px;width:90px;"><img 	id="menu"     src="./img/accueil.png" ></td>
							</tr>
						</table>
					</div>	
				</div>
				
				<div class="effet_d"><img src="./img/effet_d.png" /></div>
				<div class="effet_g"><img src="./img/effet_g.png" /></div>
			</div>					
			<!-- Corps de la page -->
			<div class="content" id="content">
				
				<!--les Outils -->
				<div class="avecmarge" id="avecmarge">
						<table id="table_haut">
							<tr>
								<!-- recherche-->
								<td valign=top>
									<div id="recherche">
										<?php include('./inc/php/recherche.php');?>
									</div>
								</td>
								
								<!-- conseil -->
								<td valign=top >
									<div  class="outil" id="conseil">
										<h2 class="test">Conseil</h1>
										-modèle de lettre de motivation et de cv <br/>
										-conseil pour un entretien <br/>
										-technique de recherche d'un stage 
										
									</div>
								</td>
								
								<!-- actualite du site -->
								<td  rowspan="2"  valign=top>
										<div  class="outil" id="actualite" >
											<h1 class="test">Actualité</h1>		 
											
											 <?php  //&eacute;
											 include("afficheActu.php"); ?>	
										</div>			
								</td>
								
							</tr>

							<tr>
								<!-- Partenaires -->
								<td colspan="2" align="left">
									<div class="partenaires" id="partenaires">
										<h1 class="test_part">Partenaires</h1>
										<?php include('./partenaire.html');?>
									</div>
								</td>
							</tr>
			    	</table>
						
						
					<table id="table_bas">
						<tr>
							<!-- Annonces :le flux rss ou le resultat des recherche-->
							<td id="annonces" colspan="2"  valign=top>
								<?php require_once("./inc/php/FeedParserStage.php");	
								#region 
									
									
									// if(isset($_POST['rechercher']) OR isset($_GET['region']))
									// {
										// print "<h1 class='test'>Résultat de la recherche</h1><table id='annonce_tableau'>";
										// print $html;
										// print "oook";
										
										// print "</table>";
									// }
									// else
									// {
													// $rss = fetch_rss("http://jobsenfrance.fr/rss_jef.php");
													// if (is_array($rss->items))  {

														// $items = array_slice($rss->items, 0, 300);				
															// foreach($items as $item) {

																// $id = $item["guid"];
																// $tab_id = explode("=",$id);
																// $id = $tab_id[2];
																// $titre = $item["title"];
																// $lien = $item["link"];
																// $site_annonce = convert_link_site_annnonce($lien);
																// $description = $item["description"];
																// $description = substr($description, 0, 230);
																// $date = $item["pubdate"];
																// $date_convert = convert_rfc822_to_date($date);
																// $ville = $item["ville"];
																																													
																// $html .= "<tr><td>Ref ".$id."</td>";
																// $html .= "<td style=\"width:700px; height:30px; padding-left:20px;\"><a href=\"".$lien."\">".$titre."</a>";
																// $html .= "<p><span>Offre déposée le : ".$date_convert."</span></p>";
																// $html .= "<p><span>Annonce publiée sur : ".$site_annonce."</span></p>";
																// $html .= "<p>".$description."...  <a href=''>Lire la suite.</a></p>";
																// $html .= "</td></tr>";


															// }	
															// print "<h1 class='test'>Nos dernières annonces</h1><table id='annonce_tableau' >".$html."</table>";
													// }
									// }
									#end
																 
								if(isset($_POST['rechercher']) OR isset($_GET['region'])){
									print "<h1 class='test'>Résultat de la recherche</h1><table id='annonce_tableau'>";
									print $html;
									print "</table>";
								}
								else{
									print FeedParserStage("http://jobsenfrance.fr/rss_jef.php");
								}
								?>
							</td>
							<td valign="top" align="center">
											<div id="corps_pub">
											<h1 class="test"  valign=top style="margin-bottom:30px;">Pub</h1>
												<?php
													for($compt_pub=1;$compt_pub<=5;$compt_pub++)
														echo '<div id="pub_'.$compt_pub.'" style="display:none;width:120px;height:600px;background-color:black;padding:10px;"></div><br/>';
												?>
							</td>		
						</tr>
				</table>
			</div>
			
				<!-- Footer -->
				<div class="footer" id="footer">
					<div class="f_content"></div>
				</div>	
		</div><!--fin de wrapper-->
				
		<script>
			if(document.getElementById('corps_pub').offsetHeight>610){
				
				var fin_compteur = parseInt(document.getElementById('annonces').offsetHeight/610);
				var affichage = (fin_compteur*640+80)+'px';
				document.getElementById('corps_pub').style.height = affichage;
				var compt_publicite = 1;
				
				for( compt_publicite; compt_publicite <= fin_compteur ; compt_publicite++ )
					document.getElementById('pub_'+compt_publicite).style.display = "block" ;
				
			}
			elseif(document.getElementById('corps_pub').offsetHeight==610)
				document.getElementById('pub_1').style.display = "block" ;
		</script>
	</body>
</html>
