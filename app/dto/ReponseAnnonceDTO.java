package dto;

import java.util.List;
import models.Annonce;

import com.google.gson.Gson;

public class ReponseAnnonceDTO {

	public boolean success;
	public String message;
	public List<Annonce> data;

	public ReponseAnnonceDTO(boolean success, String message, List<Annonce> data) {
		super();
		this.success = success;
		this.data = data;
	}

	public String toJson() {
		return new Gson().toJson(this);
	}

}
