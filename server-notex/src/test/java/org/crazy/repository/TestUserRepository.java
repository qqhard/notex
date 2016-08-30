package org.crazy.repository;

import java.util.List;

import org.crazy.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TestUserRepository {
    @Autowired
    private UserRepository userRepository;
    
    @Test
    public void testSave(){
        User user = new User();
        user.setUsername("testjike");
        user.setPassword("abcdef");
        System.out.println(userRepository.save(user));
    }
    
    
    @Test
    public void testFind(){
        List<User> list  = userRepository.findAll();
        for(User user: list){
            System.out.println(user.getUserId()+" "+user.getUsername() + " " + user.getPassword());
        }
        
    }
    
    @Test
    public void testDelete(){
        String userId = "57c57bb16b1dc120978f3b78";
        userRepository.delete(userId);
    }
    
    
    @Test
    public void testFindById(){
        String userId = "57c41a16c2cc37097b7b999b";
        User user = userRepository.findOne(userId);
        System.out.println(user.getUserId() + " " + user.getUsername());
    }
    
    @Test
    public void testFindByUsernameAndPassword(){
        String username="testjike";
        String password = "abcdef";
        User user = userRepository.findByUsernameAndPassword(username, password);
        System.out.println(user.getUserId());
    }
    
    @Test
    public void testFindByUsername(){
        BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
        System.out.println(passwordEncoder.encode("mypassword"));
        System.out.println(passwordEncoder.encode("mypassword"));
    }
    
}
