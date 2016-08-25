package org.crazy;

import java.util.ArrayList;
import java.util.List;

import org.crazy.model.Note;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Test;

public class testJson {
	
	@Test
	public void test(){
		String result = "{\"status\":\"OK\",\"request_id\":\"147182137817779942910719\",\"result\":{\"searchtime\":0.008451,\"total\":2,\"num\":2,\"viewtotal\":2,\"items\":[{\"note_id\":\"3\",\"user_id\":\"453\",\"text\":\"尝试一下搜索引擎\",\"url\":\"www.baidu.com\",\"tags\":\"\",\"time\":\"1471821368404\",\"index_name\":\"notex\"},{\"note_id\":\"2\",\"user_id\":\"453\",\"text\":\"尝试一下搜索引擎\",\"url\":\"www.baidu.com\",\"tags\":\"\",\"time\":\"1471821359975\",\"index_name\":\"notex\"}],\"facet\":[]},\"errors\":[],\"tracer\":\"\"}";
		JSONObject jsonResult = new JSONObject(result);
		JSONObject jsonResult2 = (JSONObject) jsonResult.get("result");
		JSONArray jsonArray = (JSONArray)jsonResult2.get("items");
		List<Note> notes = new ArrayList<Note>();
		for(int i=0;i<jsonArray.length();i++){
			JSONObject item = jsonArray.getJSONObject(i);
			Note note = new Note();
			note.setNoteId(item.getString("note_id"));
			note.setUserId(item.getString("user_id"));
			note.setText(item.getString("text"));
			note.setTags(item.getString("tags"));
			note.setTime(item.getLong("time"));
			note.setUrl(item.getString("url"));
			notes.add(note);
			System.out.println(note);
		}
		
		
	}
}
