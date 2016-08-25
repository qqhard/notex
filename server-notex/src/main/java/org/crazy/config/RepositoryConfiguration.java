package org.crazy.config;

import org.crazy.listener.NoteEventHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfiguration {
	@Bean
	NoteEventHandler noteEventHandler() {
		return new NoteEventHandler();
	}
}
