package go.Shop.com.User.config;

public class BuildDescription {

	public static String get(String format,String ... args) {
		
		String desc=String.format(format, args);
		return desc;
	}
}
