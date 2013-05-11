package dto;

import java.util.List;

import models.Entreprise;

import com.google.gson.Gson;

public class ReponseEntrepriseDTO {
	public boolean success;
	public String message;
	public List<Entreprise> data;

	public ReponseEntrepriseDTO(boolean success, String message, List<Entreprise> data) {
		super();
		this.success = success;
		this.data = data;
	}

	public String toJson() {
		return new Gson().toJson(this);
	}
}
