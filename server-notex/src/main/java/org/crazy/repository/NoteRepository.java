package org.crazy.repository;
import org.crazy.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "note", path = "note")
public interface NoteRepository extends MongoRepository<Note, String> {
	public Note findByUrl(@Param("url") String url);
}