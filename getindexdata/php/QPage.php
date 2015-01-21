<?php
class QPage {
	public static function getHtmlCode($url, $ctx=false){
		if($ctx == false){
			return @file_get_contents($url, false);
		} else{
			if (false !== ($contents = @file_get_contents($url, false, $ctx))) {
				return $contents;
			}
		}
	}

	public static function getURL( $key, $url ){
		return str_replace("%key%", $key, $url);
	}

	public static function encodeURI ( $val ){
		return urlencode(iconv('utf-8', 'gbk//ignore', $val)); 
	}

	public static function createItem(&$dom, $_item, $_data){
		foreach ($_data as $key => $val) {
			$$key = $dom->createElement($key);
			$_item->appendchild($$key);

			if(is_array($val)){
				self::createItem($dom, $$key, $val);
			} else {
				$text = $dom->createTextNode($val);
				$$key->appendchild($text);
			}
		}
	}
}
?>