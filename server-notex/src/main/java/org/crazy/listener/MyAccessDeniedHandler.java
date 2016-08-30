package org.crazy.listener;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

public class MyAccessDeniedHandler implements AccessDeniedHandler {
    
    private String accessDeniedUrl;

    public MyAccessDeniedHandler()  {          
    }  
    
    public String getAccessDeniedUrl() {  
        return accessDeniedUrl;  
    }  
  
    public void setAccessDeniedUrl(String accessDeniedUrl) {  
        this.accessDeniedUrl = accessDeniedUrl;  
    }  
  
    public MyAccessDeniedHandler(String accessDeniedUrl)  {  
        this.accessDeniedUrl=accessDeniedUrl;  
    }  
    
    @Override
    public void handle(HttpServletRequest req, HttpServletResponse resp, AccessDeniedException reason)
                                                                                                     throws IOException,
                                                                                                     ServletException {
        
                  String jsonObject = "{\"message\":\"You are not privileged to request this resource.\"," + "\"access-denied\":true,\"cause\":\"AUTHORIZATION_FAILURE\"}";  
                  String contentType = "application/json";  
                  resp.setContentType(contentType);  
                  String jsonObject1="noright";  
                  PrintWriter out = resp.getWriter();  
                  out.print(jsonObject1);  
                  out.flush();  
                  out.close();  
                  return;  
             
    }

}
