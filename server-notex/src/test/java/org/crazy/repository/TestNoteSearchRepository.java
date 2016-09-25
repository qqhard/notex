package org.crazy.repository;

import java.util.Iterator;
import java.util.List;

import org.crazy.model.Note;
import org.crazy.model.Query;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestNoteSearchRepository {
	@Autowired
	private NoteSearchRepository noteRepository;
	
	@Autowired
	private ElasticsearchTemplate template;

	@Test
	public void test() {
		Note note = new Note();
		note.setTags("f");
		note.setText("test");
		note.setTime(System.currentTimeMillis());
		note.setUrl("www.baidu.com");
		note.setUserId("github11865322");
		note.setTitle("code");
		noteRepository.save(note);
	}
	
	@Test
	public void test2(){
		QueryBuilder query = QueryBuilders.queryStringQuery("f");
		Iterator<Note> it = noteRepository.search(query).iterator();
		while(it.hasNext()){
			Note note = it.next();
			System.out.println(note);
		}
	}
	
	@Test
	public void test3(){
		Query query = new Query("github-11865322","test");
		
		SearchQuery searchQuery = new NativeSearchQueryBuilder()
			    .withQuery(QueryBuilders.queryStringQuery(query.getText()))
			    .withFilter(QueryBuilders.termQuery("userId", query.getUserId()))
			    .build();
		
		List<Note> notes = noteRepository.search(searchQuery).getContent();
		for(Note note : notes){
			System.out.println(note);
		}
	}

}
