package org.crazy.sevice;

import java.util.ArrayList;
import java.util.List;

import org.crazy.model.User;
import org.crazy.model.UserLoginDetails;
import org.crazy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserLoginServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DataAccessException {

		User user = userRepository.findByUsername(username);

		if (user != null) {

			UserLoginDetails userLogin = new UserLoginDetails(user.getUsername(), user.getPassword(), true, false);

			List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

			authorities.add(new SimpleGrantedAuthority("USER"));

			userLogin.setAuthorities(authorities);

			return userLogin;
		} else {
			throw new UsernameNotFoundException(username);
		}

	}
}