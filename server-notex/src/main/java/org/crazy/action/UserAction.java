
package org.crazy.action;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.crazy.model.User;
import org.crazy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * 类UserAction.java的实现描述：用户Controller 
 * @author bolin.fbl 2016年8月30日 下午12:51:40
 */

@RestController
public class UserAction {
    @Autowired
    private UserRepository userRepository;
    
    private PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(4);
   
    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public Object register(@RequestBody User user){
        
        HashMap<String, Object> rstMap = new HashMap<String, Object>();
        
        User rstUser = userRepository.findByUsername(user.getUsername());
        
        if(rstUser != null) {
            rstMap.put("success", false);
            rstMap.put("msg", "username exist");
        }
        else {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            rstMap.put("success", true);
        }
        
        return rstMap;
    }
    
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public Object login(@RequestBody User user,HttpSession httpSession){
        System.out.println(user.getUsername());
        HashMap<String, Object> rstMap = new HashMap<String, Object>();
        
        User rstUser = userRepository.findByUsername(user.getUsername());
        
        boolean flag = false;
        if(rstUser != null){
        	flag = passwordEncoder.matches(user.getPassword(), rstUser.getPassword());
        	if(flag){
        		httpSession.setAttribute("userId", rstUser.getUserId());
        		httpSession.setAttribute("username", rstUser.getUsername());
        		rstMap.put("userId", rstUser.getUserId());
        	}
        }
        rstMap.put("success", flag);
        return rstMap;
    }
    
    @RequestMapping(value = "/user/logout", method = RequestMethod.GET)
    public Object logout(HttpSession httpSession){
    	httpSession.removeAttribute("userId");
    	httpSession.removeAttribute("username");
    	HashMap<String,Object> map = new HashMap<String,Object>();
    	map.put("success", true);
    	return map;
    }
    
    @RequestMapping(value = "/user/userinfo", method = RequestMethod.GET)
    public Object username(HttpSession httpSession){
    	String userId = (String) httpSession.getAttribute("userId");
    	String username = (String) httpSession.getAttribute("username");
    	Map<String,Object> map = new HashMap<String,Object>();
    	if(userId != null && username != null){
    		map.put("success", true);
    		map.put("userId", userId);
    		map.put("username", username);
    	}else{
    		map.put("success", false);
    	}
    	return map;
    }
    
}
