package org.crazy.sevice;

import java.util.List;

import org.crazy.model.Note;
import org.crazy.model.Query;

public interface SearchService {
	void pushNote(Note note);

	void updateNote(Note note);

	void removeNote(Note note);

	List<Note> search(Query query);
}
