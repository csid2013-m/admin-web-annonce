package controllers;


import java.util.List;

import models.Entreprise;
import play.cache.Cache;
import play.data.validation.Required;
import play.mvc.Controller;


public class GestionEntreprise extends Controller {

	public static void connectionEntreprise (@Required String login, @Required String password){
		List<Entreprise> lesEntreprises = Entreprise.find("login like ?", login)
				.fetch(1);
		if (lesEntreprises.size() == 1) {
			if (lesEntreprises.get(0).mdp.equals(password)) {
				 Cache.delete("2");	 		 
				 Entreprise ent = lesEntreprises.get(0);	
				 Cache.set("2",ent  , "30mn"); 
				 render("GestionEntreprise/index.html");
			} else {
				System.out.println("faux");
			}
			return;
		} else {
			System.out.println("faux");
		}
	}
}
