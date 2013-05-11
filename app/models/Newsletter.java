package models;

import javax.persistence.Entity;

import play.db.jpa.*;

@Entity
public class Newsletter extends Model {
	public String mail;

	public Newsletter(String mail) {
		super();
		this.mail = mail;
	}
}