package org.crazy;

import java.util.List;

import org.crazy.model.Note;
import org.crazy.model.Query;
import org.crazy.sevice.OpenSearchService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestSearchService {
	@Autowired
	private OpenSearchService ss;
	@Test
	public void testPushNote(){
		Note note = new Note();
		note.setNoteId("3");
		note.setUserId("453");
		note.setUrl("www.baidu.com");
		note.setText("尝试一下搜索引擎");
		note.setTags("");
		note.setTime(System.currentTimeMillis());
		ss.pushNote(note);
	}
	
	@Test
	public void testSearch(){
		Query query = new Query("1","代码");
		List<Note> notes = ss.search(query);
		for(Note note : notes){
			System.out.println(note);
		}
	}
	
}
