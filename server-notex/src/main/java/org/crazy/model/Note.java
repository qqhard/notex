package org.crazy.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "note", type = "note", shards = 1, replicas = 0, refreshInterval = "-1")
public class Note {
	@Id
	private String noteId;
	private String userId;
	private String text;
	private String title;
	private String url;
	private String tags;
	private Long time;
	public String getNoteId() {
		return noteId;
	}
	public void setNoteId(String noteId) {
		this.noteId = noteId;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public Long getTime() {
		return time;
	}
	public void setTime(Long time) {
		this.time = time;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	@Override
	public String toString(){
		return String.format("noteId : %s\nuserId : %s\ntitle : %s\nurl : %s\ntags : %s\ntime : %s\ntext : %s\n", noteId, userId, title, url, tags, time, text);
	}
}
