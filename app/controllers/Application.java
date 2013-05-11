package controllers;

import java.util.List;

import models.Annonce;
import models.Candidat;
import play.cache.Cache;
import play.data.validation.Required;
import play.mvc.Controller;

public class Application extends Controller {

	public static void index() {
		List<Annonce> annonces = Annonce.find("order by date_publication desc")
				.from(1).fetch();
		try {
			Candidat candidat = (Candidat) Cache.get("2");
			render("Application/index.html", annonces, candidat);
		} catch (Exception e) {
			render("Application/index.html", annonces);
		}
	}

	public static void admin_annonce() {
		render("GestionAnnonces/export/exp/index.html");
	}

	public static void admin_candidat() {
		render("GestionAnnonces/accueil_admin.html");
	}

	public static void connectionAdmin() {

		try {
			if ((Candidat) Cache.get("2") != null) {
				Candidat candidat = (Candidat) Cache.get("2") ;
				render("Admin/accueil_admin.html", candidat );
			} else {
				Candidat candidat = (Candidat) Cache.get("2") ;
				render("/Admin/connectionAdmin.html");
			}
		} catch (Exception e) {
			//Candidat candidat = (Candidat) Cache.get("2") ;
			render("Admin/accueil_admin.html");
		}
	}

	public static void deconnecter() {
		Cache.delete("2");
		List<Annonce> annonces = Annonce.find("order by date_publication desc")
				.from(1).fetch();
		render("Application/index.html", annonces);

	}

	public static void connectionCandidat() {

		try {
			Candidat candidat = (Candidat) Cache.get("2");
			List<Annonce> annonces = Annonce
					.find("order by date_publication desc").from(1).fetch();
			render("/GestionCandidats/page_profil.html", candidat, annonces);

		} catch (Exception e) {
			render("GestionCandidats/connexion.html");
		}
	}

	public static void seConnecterEmploye() {
		render("GestionEntreprise/connexion.html");
	}

	public static void rechercheAnnonces(@Required String saisi,
			@Required String lieux) {
		List<Annonce> annonces = Annonce
				.find("description like ?", "%" + saisi + "%").from(1).fetch();
		System.out.println(lieux);

		render("Application/index.html", annonces);
	}

	public static void rechercheMap() {

		render("Application/index.html");
	}

	public static void emploi() {

		render("/elements_menu/topicality.html");
	}

}