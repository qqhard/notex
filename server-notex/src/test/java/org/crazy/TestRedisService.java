package org.crazy;

import org.crazy.model.Note;
import org.crazy.sevice.RedisService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestRedisService {
	@Autowired
	private RedisService rs;
	@Test
	public void testCreateNote(){
		Note note = new Note();
		note.setNoteId("3");
		note.setUserId("453");
		note.setUrl("www.baidu.com");
		note.setTitle("title");
		note.setText("尝试一下搜索引擎");
		note.setTags("12133");
		note.setTime(System.currentTimeMillis());
		rs.redisCreateNote(note);
	}
	@Test
	public void testDeleteNote(){
		Note note=new Note();
		note.setNoteId("3");
		rs.redisDeleteNote(note);
	}
}
