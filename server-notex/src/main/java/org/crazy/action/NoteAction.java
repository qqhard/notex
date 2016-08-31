package org.crazy.action;

import javax.servlet.http.HttpSession;

import org.crazy.model.Note;
import org.crazy.repository.NoteRepository;
import org.crazy.sevice.SearchService;
import org.crazy.sevice.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteAction {
	
	@Autowired
	private NoteRepository noteRepository;
	
	@Autowired
	private SearchService searchService;
	
	@Autowired
	private TagService tagService;
	
	
	@RequestMapping(value="/notes/{userId}", method=RequestMethod.GET)
	public Object gets2(@PathVariable("userId") String userId, HttpSession httpSession){
		if(userId == null){
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}
		return noteRepository.findByUserId(userId);
	}
	
	@RequestMapping(value="/note", method=RequestMethod.GET)
	public Object gets(HttpSession httpSession){
		String userId = (String) httpSession.getAttribute("userId");
		if(userId == null){
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}
		return noteRepository.findByUserId(userId);
	}
	
	@RequestMapping(value="/note/{noteId}", method=RequestMethod.GET)
	public Note get(@PathVariable("noteId") String noteId){
		return noteRepository.findOne(noteId);
	}
	
	@RequestMapping(value="/note", method=RequestMethod.POST)
	public Note post(@RequestBody Note note){
		note.setTags(tagService.getKeyWords(note.getText(), 3));
		noteRepository.save(note);
		searchService.pushNote(note);
		return note;
	}
	
	@RequestMapping(value="/note/{noteId}", method=RequestMethod.PUT)
	public Note put(@PathVariable("noteId") String noteId, @RequestBody Note note){
		noteRepository.save(note);
		searchService.updateNote(note);
		return note;
	}
	
	@RequestMapping(value="/note/{noteId}", method=RequestMethod.DELETE)
	public Object delete(@PathVariable("noteId") String noteId){
		noteRepository.delete(noteId);
		Note note = new Note();
		note.setNoteId(noteId);
		searchService.removeNote(note);
		return "";
	}
	
}
