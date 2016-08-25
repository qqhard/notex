package org.crazy.action;

import java.util.List;

import org.crazy.model.Note;
import org.crazy.model.Query;
import org.crazy.sevice.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QueryAction {
	@Autowired
	private SearchService searchService;
	@RequestMapping(value = "/query",method = RequestMethod.GET)
	public Object query(@RequestParam("userId") String userId,@RequestParam("text") String text){
		Query query = new Query(userId, text);
		List<Note> notes = searchService.search(query);
		return notes;
	}
}
