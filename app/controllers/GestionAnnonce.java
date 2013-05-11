package controllers;

import java.util.List;

import models.Annonce;
import models.Entreprise;
import play.data.validation.Required;
import play.mvc.Controller;
import dto.ReponseAnnonceDTO;
import dto.ReponseEntrepriseDTO;

public class GestionAnnonce extends Controller {
	public static void list() {
		List<Annonce> annonces = Annonce.find("order by titre desc")
				.from(1).fetch();
		renderJSON(new ReponseAnnonceDTO(true, "successfully", annonces));
	}

	public static void add_annonce(@Required String titre_add,
			@Required String description_add, @Required String ville_add,
			@Required String id, @Required String diffusion_add,
			@Required String date_publication, @Required String langue_add) {

		Entreprise uneEntreprise = Entreprise.findById(new Long(id));
		new Annonce(titre_add, description_add, langue_add, date_publication,
				ville_add, diffusion_add, uneEntreprise).save();
		list();
	}

	public static void edit_annonce(@Required String id_annonce,
			@Required String titre_edit, @Required String description_edit,
			@Required String ville_edit, @Required String id,
			@Required String diffusion_edit, @Required String date_publication_edit, 
			@Required String langue_edit) {

		// Retrieve post
		Annonce uneAnnonce = Annonce.findById(new Long(id_annonce));
		// edit
		uneAnnonce.titre = titre_edit;
		uneAnnonce.description = description_edit;
		uneAnnonce.date_publication = date_publication_edit;
		String cd;
		try {
			if (diffusion_edit.equals("on")) {
				cd = "oui";

			} else {
				cd = "non";
			}
		} catch (Exception e) {
			cd = "non";
		}
		uneAnnonce.diffusion = cd;
		uneAnnonce.langue = langue_edit;
		uneAnnonce.Ville = ville_edit;
		uneAnnonce.save();
		list();

	}
	public static void getEntreprise() {
		List<Entreprise> entreprise = Entreprise.find("order by Libelle desc")
				.from(1).fetch();
		renderJSON(new ReponseEntrepriseDTO(true, "successfully", entreprise));
	}
	public static void en_savoir_plus(@Required String id_annonce) {
		Annonce uneAnnonce = Annonce.findById(new Long(id_annonce));
		System.out.println(uneAnnonce.description);
		render("GestionAnnonces/en_savoir_plus.html", uneAnnonce);
	}
	public static void  deleteAnnonce(@Required String id_annonce_delete){
		List<Entreprise> entreprise = Entreprise.find("order by Libelle desc")
				.from(1).fetch();
		renderJSON(new ReponseEntrepriseDTO(true, "successfully", entreprise));
	}
}
