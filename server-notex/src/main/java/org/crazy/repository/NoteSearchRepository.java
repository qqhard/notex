package org.crazy.repository;

import org.crazy.model.Note;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface NoteSearchRepository extends ElasticsearchRepository<Note, String> {
	
}
