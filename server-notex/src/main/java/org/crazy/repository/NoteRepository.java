package org.crazy.repository;
import java.util.List;

import org.crazy.model.Note;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;


public interface NoteRepository extends MongoRepository<Note, String> {
	public Note findByUrl(@Param("url") String url);
	public List<Note> findByUserId(String userId);
	public Page<Note> findByUserId(String userId,Pageable pagable);
	public List<Note> findByUserIdOrderByTimeDesc(String userId);
}