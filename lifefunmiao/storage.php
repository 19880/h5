<?php
include_once('lib/ImageSaver.php');
$originalHTML = $_POST['picdata'];
$imageSaver = new ImageSaver();
$html = $imageSaver->saveImages($originalHTML, false);	// true:添加背景, false:没有背景
echo json_encode(array('pic'=>$html));
?>