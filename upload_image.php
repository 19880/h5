<?php
include_once('lib/ImageSaver.php');
$originalHTML = $_POST['data'];
$imageSaver = new ImageSaver();
$html = $imageSaver->saveImages($originalHTML);
$imageSaver->delFile($imageSaver->getFileName());
?>