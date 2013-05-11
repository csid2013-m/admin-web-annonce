package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Admin extends Model {
	public String login;
	public String mdp;

	public Admin(String login, String mdp) {
		super();
		this.login = login;
		this.mdp = mdp;
	}

}