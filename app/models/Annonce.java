package models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import play.db.jpa.Model;

@Entity
public class Annonce extends Model {
	
	public String titre;
	public String description;
	public String langue;
	public String date_publication;
	public String diffusion;
	public String Ville;
	public String region;
	@ManyToOne
	public Entreprise uneEntreprise;

	@ManyToMany(cascade = CascadeType.ALL)
	public Set<Candidat> lesCandidats = new HashSet<Candidat>();

	public Annonce(String titre, String description, String langue,
			String date_publication, String Ville, String diffusion,
			Entreprise idEntreprise) {
		super();
		this.titre = titre;
		this.description = description;
		this.langue = langue;
		this.date_publication = date_publication;
		 
		this.diffusion = diffusion ; 
		this.Ville = Ville;
		this.uneEntreprise = idEntreprise;
	}

	@Override
	public String toString() {
		return "Annonce [titre=" + titre + ", description=" + description
				+ ", langue=" + langue + ", date_publication="
				+ date_publication + ", diffusion=" + diffusion + ", Ville="
				+ Ville + ", uneEntreprise=" + uneEntreprise
				+ ", lesCandidats=" + lesCandidats + "]";
	}
 

}
