package org.crazy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import com.aliyun.opensearch.CloudsearchClient;
import com.aliyun.opensearch.CloudsearchDoc;
import com.aliyun.opensearch.CloudsearchSearch;
import com.aliyun.opensearch.object.KeyTypeEnum;

public class TestOpenSearch {
	String accesskey= "bsR8ExAjBhVoCJpz";
	String secret =   "AO1L9hnVnDnELDqE2CHYKYXcN9b9RR";
	String appName =  "notex";
	Map<String, Object> opts = new HashMap<String, Object>();
	String host = "http://opensearch-cn-beijing.aliyuncs.com";
	@Test
	public void testPush() throws ClientProtocolException, IOException{
		CloudsearchClient client = new CloudsearchClient(accesskey, secret , host, opts, KeyTypeEnum.ALIYUN);
		CloudsearchDoc doc = new CloudsearchDoc("notex", client);
		Map<String, Object> fields = new HashMap<String, Object>();
		fields.put("note_id", 1);
		fields.put("text", "尝试21 一下opensearch");
		fields.put("url", "www.google.com");	
		fields.put("user_id",1);
		List<Integer> list = new ArrayList<Integer>();
		list.add(4);list.add(5);
		fields.put("tags", list);
		doc.add(fields);
		
		System.out.println(doc.push("note"));
	}
	
	@Test
	public void testSearch() throws ClientProtocolException, IOException {
		CloudsearchClient client = new CloudsearchClient(accesskey, secret , host, opts, KeyTypeEnum.ALIYUN);
		CloudsearchSearch search = new CloudsearchSearch(client);
		search.addIndex("notex");
		search.setQueryString("text:'尝试'");
		search.setFormat("json");
		System.out.println(search.search());
	}
}
