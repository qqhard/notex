package org.crazy.repository;

import org.crazy.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * 
 * 类UserRepository.java的实现描述：用户DAO 
 * @author bolin.fbl 2016年8月30日 下午12:52:02
 */
public interface UserRepository extends MongoRepository<User, String>{
    public User findByUsernameAndPassword(String username, String password);
	public User findByUsername(String username);
}
