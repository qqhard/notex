package org.crazy.action;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.mock.web.MockServletContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


@RunWith(SpringRunner.class)
@SpringApplicationConfiguration(classes=MockServletContext.class)//MockServletContext.class
@WebAppConfiguration
public class UserActionTest extends MockMvcResultMatchers {
    //模拟mvc对象类.
    private MockMvc mvc;
   
    @Before
    public void setup(){
       /*
        * MockMvcBuilders使用构建MockMvc对象.
        */
       mvc = MockMvcBuilders.standaloneSetup(new UserAction()).build();
    }
    
    @Test
    public void testAddUser() throws Exception{
       RequestBuilder request = null;
       request = MockMvcRequestBuilders.post("/user/addUser").param("username", "testadd").param("password", "pass343");
       mvc.perform(request).andExpect(status().isOk()).andExpect(content().string("true"));
    }
    
    @Test
    public void testLogin() throws Exception{
       RequestBuilder request = null;
       request = MockMvcRequestBuilders.post("/user/login").param("username", "jike").param("password", "1323");
       mvc.perform(request).andExpect(status().isOk());
    }
    
    @Test
    public void testLogout() throws Exception{
       RequestBuilder request = null;
       request = MockMvcRequestBuilders.post("/user/logout");
       mvc.perform(request).andExpect(status().isOk());
    }
}
