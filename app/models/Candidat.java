package models;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import play.db.jpa.Model;

@Entity
public class Candidat extends Model {
	public String nom_candidat;
	public String prenom_candidat;
	public Date date_naissance;
	public String diplome;
	public String login;
	public String password;
	public boolean activer;

	@ManyToMany(cascade = CascadeType.ALL)
	public Set<Annonce> lesAnnnonces = new HashSet<Annonce>();

	public Candidat(String nom_candidat, String prenom_candidat,
			Date date_naissance, String diplome, String login, String password,
			boolean activer, Set<Annonce> lesAnnnonces) {
		super();
		this.nom_candidat = nom_candidat;
		this.prenom_candidat = prenom_candidat;
		this.date_naissance = date_naissance;
		this.diplome = diplome;
		this.login = login;
		this.password = password;
		this.activer = activer;
		this.lesAnnnonces = lesAnnnonces;
	}

	 
}