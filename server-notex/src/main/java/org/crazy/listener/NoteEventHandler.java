package org.crazy.listener;

import org.crazy.model.Note;
import org.crazy.sevice.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@RepositoryEventHandler
public class NoteEventHandler {
	@Autowired
	private SearchService searchService;
	
	@HandleAfterCreate
	public void handleNoteCreate(Note note) {
		System.out.println("##########create note#############");
		System.out.println(note);
		searchService.pushNote(note);
	}
	
	@HandleAfterDelete
	public void handleNoteDelete(Note note) {
		System.out.println("##########delete note#############");
		System.out.println(note);
		searchService.removeNote(note);
	}
	
	@HandleAfterSave
	public void handleNoteSave(Note note){
		System.out.println("##########update note#############");
		System.out.println(note);
		searchService.updateNote(note);
	}
}	
