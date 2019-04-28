package go.shop.com.account.config;

public class BuildDescription {

	public static String get(String format,String ... args) {
		
		String desc=String.format(format, (Object)args);
		return desc;
	}
}
