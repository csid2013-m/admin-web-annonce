package controllers;

import java.util.List;

import models.Annonce;
import play.mvc.Controller;

public class RechercheMap extends Controller {
	public static void Corse(){
		List<Annonce> annonces = Annonce.find("region like ?", "Corse")
				.from(1).fetch();
		render("Application/index.html", annonces);
	}

}
