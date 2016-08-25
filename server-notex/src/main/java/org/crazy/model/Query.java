package org.crazy.model;

public class Query {
	private String userId;
	private String text;
	public Query(String userId,String text){
		this.userId = userId;
		this.text = text;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
}
