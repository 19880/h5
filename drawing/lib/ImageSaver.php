<?php

class ImageSaver
{
    private $saveURL = 'img/';
    private $number = 0;
    private $name = '';
    
    public function __construct($saveURL = 'img/') {
        $this->saveURL = $saveURL;
    }

    public function saveImages($originalHTML) {
        $filename = $this->baseToFile($originalHTML);
        $imgs = array(
            'dst' => 'static/img/paper.jpg',
            'src' => $filename
        );
        return $this->mergerImg($imgs);
    }

    public function baseToFile($base64Image){
        $extension = explode(';', $base64Image , 2);
        if($extension[0] != 'data:image/png'){
            throw new Exception();
        }
        $base64Image = explode(',', $base64Image , 2);
        $this->name = time() . $this->number;
        $filename = $this->getFileName();
        file_put_contents($filename, base64_decode(str_replace(' ', '+', $base64Image[1])));
        $this->number ++;
        return $filename;
    }

    public function delFile( $file = null ){
        if($file !== null){
            unlink($file);
        }
    }

    public function getFileName($filetype = 'png'){
        return $this->saveURL.$this->name.'.'.$filetype;
    }

    private function mergerImg($imgs) {

        list($max_width, $max_height) = getimagesize($imgs['dst']);

        $dest = imagecreatefromjpeg($imgs['dst']);
        $src = imageCreateFromPng($imgs['src']);

        imageAlphaBlending($dest, true);
        imageSaveAlpha($dest, true);
        
        self::imagecopymerge_alpha($dest, $src, 0, 0, 0, 0, $max_width, $max_height, 100);

        $filename = $this->getFileName('jpg');
        header("Content-type: image/jpeg");
        imagejpeg($dest, $filename, 80);

        imagedestroy($src);
        imagedestroy($dest);

        return $filename;
    }

    public static function imagecopymerge_alpha($dst_im, $src_im, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h, $pct){
        // creating a cut resource 
        $cut = imagecreatetruecolor($src_w, $src_h); 

        // copying relevant section from background to the cut resource 
        imagecopy($cut, $dst_im, 0, 0, $dst_x, $dst_y, $src_w, $src_h); 
        
        // copying relevant section from watermark to the cut resource 
        imagecopy($cut, $src_im, 0, 0, $src_x, $src_y, $src_w, $src_h); 
        
        // insert cut resource to destination image 
        imagecopymerge($dst_im, $cut, $dst_x, $dst_y, 0, 0, $src_w, $src_h, $pct); 
    } 
}
