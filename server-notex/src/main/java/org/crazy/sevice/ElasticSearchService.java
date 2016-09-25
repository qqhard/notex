package org.crazy.sevice;

import java.util.List;

import org.crazy.model.Note;
import org.crazy.model.Query;
import org.crazy.repository.NoteSearchRepository;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchQuery;

public class ElasticSearchService implements SearchService {
	
	@Autowired
	private NoteSearchRepository repository;

	@Override
	public void pushNote(Note note) {
		repository.index(note);
	}

	@Override
	public void updateNote(Note note) {
		repository.index(note);
	}

	@Override
	public void removeNote(Note note) {
		repository.delete(note);
	}

	@Override
	public List<Note> search(Query query) {
		SearchQuery searchQuery = new NativeSearchQueryBuilder()
			    .withQuery(QueryBuilders.queryStringQuery(query.getText()))
			    .withFilter(QueryBuilders.termQuery("userId", query.getUserId()))
			    .build();
		return repository.search(searchQuery).getContent();
	}

}
