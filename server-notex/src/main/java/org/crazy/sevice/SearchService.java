package org.crazy.sevice;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.crazy.model.Note;
import org.crazy.model.Query;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.aliyun.opensearch.CloudsearchClient;
import com.aliyun.opensearch.CloudsearchDoc;
import com.aliyun.opensearch.CloudsearchSearch;
import com.aliyun.opensearch.object.KeyTypeEnum;

@Scope("singleton")
@Service
public class SearchService {
	private static final Logger logger = LoggerFactory.getLogger(SearchService.class);
	private String accesskey = "BEm8QbEYCBnNab0h";
	private String secret = "UbCBKoEFeA2YPavT3CTjSUSRCNNlR5";
	private String appName = "notex";
	private Map<String, Object> opts = new HashMap<String, Object>();
	private String host = "http://opensearch-cn-beijing.aliyuncs.com";
	private CloudsearchClient client;
	
	public SearchService() throws UnknownHostException{
		this.client = new CloudsearchClient(accesskey, secret , host, opts, KeyTypeEnum.ALIYUN);
	}
	
	private Map<String,Object> noteToMap(Note note){
		Map<String, Object> fields = new HashMap<String, Object>();
		fields.put("note_id", note.getNoteId());
		fields.put("user_id", note.getUserId());
		fields.put("title", note.getTitle());
		fields.put("text", note.getText());
		fields.put("url", note.getUrl());	
		fields.put("time", note.getTime());
		fields.put("tags", "");
		return fields;
	}
	
	public void pushNote(Note note){
		CloudsearchDoc doc = new CloudsearchDoc(appName, this.client);
		Map<String, Object> fields = noteToMap(note);
		doc.add(fields);
		
		try {
			String res = doc.push("note");
			logger.warn("push note result : " + res);
		} catch (ClientProtocolException e) {
			logger.warn("push note exception : " + e.getMessage());
		} catch (IOException e) {
			logger.warn("push note exception : " + e.getMessage());
		}
	}
	
	public void updateNote(Note note){
		CloudsearchDoc doc = new CloudsearchDoc(appName, this.client);
		Map<String, Object> fields = noteToMap(note);
		doc.update(fields);
		try {
			String res = doc.push("note");
			logger.warn("update note result : " + res);
		} catch (ClientProtocolException e) {
			logger.warn("update note exception : " + e.getMessage());
		} catch (IOException e) {
			logger.warn("update note exception : " + e.getMessage());
		}
	}
	
	public void removeNote(Note note){
		CloudsearchDoc doc = new CloudsearchDoc(appName, this.client);
		Map<String, Object> fields = noteToMap(note);
		doc.remove(fields);
		try {
			String res = doc.push("note");
			logger.warn("remove note result : " + res);
		} catch (ClientProtocolException e) {
			logger.warn("remove note exception : " + e.getMessage());
		} catch (IOException e) {
			logger.warn("remove note exception : " + e.getMessage());
		}
	}
	
	private List<Note> jsonToNotes(String str){
		JSONObject result = new JSONObject(str);
		result = (JSONObject) result.get("result");
		JSONArray items = (JSONArray)result.get("items");
		List<Note> notes = new ArrayList<Note>();
		for(int i=0;i<items.length();i++){
			JSONObject item = items.getJSONObject(i);
			Note note = new Note();
			note.setNoteId(item.getString("note_id"));
			note.setUserId(item.getString("user_id"));
			note.setText(item.getString("text"));
			note.setTags(item.getString("tags"));
			note.setTime(item.getLong("time"));
			note.setUrl(item.getString("url"));
			note.setTitle(item.getString("title"));
			notes.add(note);
		}
		return notes;
	}
	
	public List<Note> search(Query query){
		CloudsearchSearch search = new CloudsearchSearch(this.client);
		search.addIndex("notex");
		search.setQueryString(String.format("text:'%s'", query.getText()));
		search.setFormat("json");
		search.addFilter(String.format("user_id=\"%s\"", query.getUserId()));
		List<Note> notes = null;
		try {
			String result = search.search();
			notes = jsonToNotes(result);
		} catch (ClientProtocolException e) {
			logger.warn("search note exception : " + e.getMessage());
			notes = new ArrayList<Note>();
		} catch (IOException e) {
			logger.warn("search note exception : " + e.getMessage());
			notes = new ArrayList<Note>();
		}
		return notes;
	}
	
}
