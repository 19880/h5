<?php
include_once('QPage.php');
include_once('QData.php');
include_once('QUrl.php');
include_once('config.php');

$url = $QUrl[QPURL];
$line = $argv[1]; 

$date = date('Ymd');
$rootDir = 'result';
if(!is_dir("{$rootDir}")){
    mkdir("{$rootDir}",0777); 
}
if(!is_dir("{$rootDir}/{$date}")){
    mkdir("{$rootDir}/{$date}",0777); 
}


if($line==1){
    foreach ($QData as $key => &$keyWord) {
        $jsonDir = "{$rootDir}/{$date}/{$key}.json";
        echo "$key";
        if(!file_exists($jsonDir)){
            $direct = QPage::getURL($key,$url['url']);
            $code = QPage::getHtmlCode($direct);
            file_put_contents($jsonDir, $code);
            usleep(1500000);
        }
        echo "\n";
    }
} else {
    include_once('QProxy.php');

    $line = $argv[1]; 
    $data = array();
    $lineProxy = 0;
    foreach ($QData as $key => &$keyWord) {
        $i = $lineProxy%$line;
        if($line-1 == $i){
            $jsonDir = "{$rootDir}/{$date}/{$key}.json";
            
            echo "$key";

            if(!file_exists($jsonDir)){
                $isSuccess = null;
                while($isSuccess!=true){
                    $ctx = stream_context_create(
                        array(  'http' => array(
                                'timeout' => 3, 
                                'proxy' => $QProxy[array_rand($QProxy,1)], 
                                'request_fulluri' => true) 
                        ) 
                    ); 

                    $direct = QPage::getURL($key,$url['url']);
                    $code = QPage::getHtmlCode($direct, $ctx);
                    
                    // var_dump($code);
                    if($code != null && stripos($code, '360指数')==false){
                        file_put_contents($jsonDir, $code);
                        $isSuccess = true;
                    }
                }
            }
            echo "\n";
        }
        $lineProxy++;
    }
}
?>