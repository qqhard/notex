package org.crazy;

import java.util.List;

import org.junit.Test;

import com.hankcs.hanlp.HanLP;

public class TestTextRank {
	@Test
	public void test(){
		String content = "《Chrome扩展及应用开发》是第一本讲解如何开发Chrome扩展和应用的系统教程。全书共十章，分为两大部分，分别是扩展和...本书提供了大量实例，并结合实例详细生动地讲解相关知识在实践中的应用，加深读者对知识的理解。";
		List<String> keywordList = HanLP.extractKeyword(content, 3);
		System.out.println(keywordList);
	}
}
