package org.crazy.sevice;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.crazy.model.Note;
import org.crazy.model.Query;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import redis.clients.jedis.Jedis;

@Scope("singleton")
@Service
public class RedisService {
	private static final Logger logger = LoggerFactory
			.getLogger(RedisService.class);

	// private Map<String, Object> opts = new HashMap<String, Object>();
	private Map<String, String> noteToMap(Note note) {
		Map<String, String> fields = new HashMap<String, String>();
		fields.put("note_id", note.getNoteId());
		fields.put("user_id", note.getUserId());
		fields.put("title", note.getTitle());
		fields.put("text", note.getText());
		fields.put("url", note.getUrl());
		fields.put("time", note.getTime().toString());
		fields.put("tags", "");
		return fields;
	}

	public void redisCreateNote(Note note) {
		@SuppressWarnings("resource")
		Jedis jedis = new Jedis("localhost");
		try {
			Map<String, String> fields = noteToMap(note);
			String res = jedis.hmset(note.getNoteId(), fields);
			logger.warn("create note result" + res);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void redisDeleteNote(Note note) {
		@SuppressWarnings("resource")
		Jedis jedis = new Jedis("localhost");
		Long res = jedis.del(note.getNoteId());
		logger.warn("delete note result" + res);
	}

	public void redisUpdateNote(Note note) {
		@SuppressWarnings("resource")
		Jedis jedis = new Jedis("localhost");
		String res = jedis.hmset(note.getNoteId(), noteToMap(note));
		logger.warn("update note result" + res);
	}

	public Set<String> redisQuery(Query query) {
		@SuppressWarnings("resource")
		Jedis jedis = new Jedis("localhost");
		// 每个用户的notes按照权重大小进行排序
		Set<String> set = jedis.zrangeByScore(query.getUserId(), 0, 10);
		return set;
		// List<String> list=new ArrayList<String>();
		// return list.addAll(set);
	}

	public void redisDeleteNoteList(Query query) {
		Set<String> set = redisQuery(query);
	}
}
