package models;

import javax.persistence.Entity;

import play.db.jpa.*;

@Entity
public class Entreprise extends Model {
	public String siret;
	public String Libelle;
	public String secteur_activiter;
	public String taille;
	public String login;
	public String mdp;
	public boolean activer;

	public Entreprise(String siret, String libelle, String secteur_activiter,
			String taille, String log, String password, boolean actif) {
		super();
		this.siret = siret;
		this.Libelle = libelle;
		this.secteur_activiter = secteur_activiter;
		this.taille = taille;
		this.login = log;
		this.mdp = password;
		this.activer = actif;
	}

}