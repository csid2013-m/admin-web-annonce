package controllers;

import java.util.List;

import models.Admin;
import models.Annonce;
import models.Candidat;
import play.cache.Cache;
import play.data.validation.Required;
import play.mvc.Controller;

public class GestionAdmin extends Controller{
  
	public static void connectionAdmin(@Required String login, @Required String password){
		List<Admin> lesAdmins = Admin.find("login like ?", login)
				.fetch(1);
		if (lesAdmins.size() == 1) {
			if (lesAdmins.get(0).mdp.equals(password)) {
				 Cache.delete("2");	 		 
				 Admin ladmin = lesAdmins.get(0);	
				 Cache.set("2",ladmin  , "30mn"); 
				 render("GestionAnnonces/export/exp/index.html");
			} else {
				System.out.println("faux");
			}
			return;
		} else {
			System.out.println("faux");
		}
	}
}
