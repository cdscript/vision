package ch.rasc.vision.entity;

import ch.rasc.bsoncodec.annotation.BsonDocument;
import ch.rasc.extclassgenerator.Model;

@BsonDocument
@Model(value = "Vision.model.Label", extend = "Vision.model.Base")
public class Label {

	private String description;

	private Float score;

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Float getScore() {
		return this.score;
	}

	public void setScore(Float score) {
		this.score = score;
	}

}
