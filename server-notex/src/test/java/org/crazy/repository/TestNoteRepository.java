package org.crazy.repository;

import java.util.List;

import org.crazy.model.Note;
import org.crazy.model.NotePageable;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestNoteRepository {
	@Autowired
	private NoteRepository noteRepository;
	
	@Test
	public void testFind() {
		List<Note> list = noteRepository.findAll();
		for(Note note : list){
			System.out.println(note);
		}
	}
	
	@Test
	public void testSave(){
		Note note = new Note();
		note.setTags("");
		note.setText("hello world");
		note.setTime(System.currentTimeMillis());
		note.setUrl("www.baidu.com");
		note.setUserId("123");
		note.setTitle("code");
		noteRepository.save(note);
	}
	
	
	@Test
	public void testDelete(){
		String noteId = "57bdc2694df1b00c2ea62716";
		noteRepository.delete(noteId);
	}
	
	
	@Test
	public void testFindById(){
		String noteId = "57bdc2694df1b00c2ea62716";
		Note note = noteRepository.findOne(noteId);
		System.out.println(note);
	}
	
	@Test
	public void testFindByUserId(){
		String userId = "123";
		NotePageable page = new NotePageable();
		page.setPageNumber(1);
		page.setPageSize(5);
		Page<Note> notes = noteRepository.findByUserId(userId, page);
		List<Note> list = notes.getContent();
		for(Note note : list){
			System.out.println(note);
		}
	}
}
