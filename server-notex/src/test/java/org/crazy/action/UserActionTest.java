package org.crazy.action;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.crazy.NotexApplication;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockServletContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;


@RunWith(SpringRunner.class)
@SpringApplicationConfiguration(classes=NotexApplication.class)//MockServletContext.class
@WebAppConfiguration
public class UserActionTest extends MockMvcResultMatchers {
	@Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;
  
    @Before
    public void setupMockMvc() {
    	 mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void testGet() throws Exception {

    	MvcResult ret = mockMvc.perform(get("/note")
                .accept(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andReturn();
    	
    }
    
    @Test
    public void testPost() throws Exception {
    	JSONObject obj = new JSONObject();
    	obj.put("text", "是第一本讲解如何开发Chrome扩展和应用的系统教程。"
    			+ "全书共十章，分为两大部分，分别是扩展和应用。本书由浅入深，条理清晰，非常适合初学者自学。"
    			+ "本书提供了大量实例，并结合实例详细生动地讲解相关知识在实践中的应用，加深读者对知识的理解");
    	String requestBody = obj.toString();
    	System.out.println(requestBody);
    	MvcResult ret = mockMvc.perform(post("/note")
    			.contentType(MediaType.APPLICATION_JSON)
    			 .content(requestBody)  
                .accept(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andReturn();
    	
    }
}
