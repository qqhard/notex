package org.crazy.sevice;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.hankcs.hanlp.HanLP;

@Scope("singleton")
@Service
public class TagService {
	public String getKeyWords(String text,int num){
		List<String> keys = HanLP.extractKeyword(text, num);
		StringBuilder sb = new StringBuilder();
		for(String word : keys){
			sb.append(word+",");
		}
		return sb.substring(0, sb.length()-1);
	}
}
