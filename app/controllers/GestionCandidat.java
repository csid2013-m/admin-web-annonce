package controllers;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import models.Annonce;
import models.Candidat;
import net.sf.ehcache.hibernate.HibernateUtil;

import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.SimpleEmail;
import org.h2.engine.User;
import org.hibernate.Session;

import play.cache.Cache;
import play.data.validation.Required;
import play.db.jpa.JPA;
import play.libs.Mail;
import play.mvc.Controller;

public class GestionCandidat extends Controller {
	public static void connection(@Required String login,
			@Required String password) {

		List<Candidat> lesCandidats = Candidat.find("login like ?", login)
				.fetch(1);
		if (lesCandidats.size() == 1) {
			if (lesCandidats.get(0).password.equals(password)) {

				Candidat candidat = lesCandidats.get(0);
				Cache.set("2", candidat, "30mn");
				List<Annonce> annonces = Annonce
						.find("order by date_publication desc").from(1).fetch();
				render("/GestionCandidats/page_profil.html", candidat, annonces);

			} else {
				System.out.println("faux1");
			}

			return;
		} else {
			System.out.println("faux2");
		}

	}

	public static void inscription() {
		render("/GestionCandidats/inscriptionCandidat.html");
	}

	public static void postuler(@Required String id_annonce,
			@Required String id_candidat) {

		Annonce uneAnnonce = Annonce.findById(new Long(id_annonce));
		Candidat unCandidat = Candidat.findById(new Long(id_candidat));
		uneAnnonce.lesCandidats.add(unCandidat);
		uneAnnonce.save();

		List<Annonce> Annonces = uneAnnonce.findAll();
		Candidat ce_candidat = Candidat.findById(new Long(id_candidat));
		List<Annonce> mesAnnonces = new ArrayList<>();

	 

		for (int i = 0; i < Annonces.size(); i++) {
			if (Annonces.get(i).lesCandidats.contains(ce_candidat)) {

				mesAnnonces.add(Annonces.get(i));
				// Annonces.get(i).
			}
		}
		render("/GestionCandidats/mes_annonces.html", mesAnnonces);
	}

	@SuppressWarnings("deprecation")
	public static void addCandidat(@Required String Nom,
			@Required String Prenom, @Required String Login,
			@Required String Email, @Required String date,
			@Required String mot_de_passe, @Required String diplome)
			throws EmailException {
		new Candidat(Nom, Prenom, new Date(0, 0, 0), diplome, Login,
				mot_de_passe, false, null).save();

		SimpleEmail email = new SimpleEmail();
		email.setFrom("jeoannysimpore@gmail.com");
		email.addTo("joannysimpore@gmail.com");
		email.setSubject("subject");
		email.setMsg("Message");
		Mail.send(email);

	}
}
