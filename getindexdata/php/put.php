<?php
include_once('QPage.php');
include_once('QData.php');
include_once('QUrl.php');
include_once('config.php');

$date = date('Ymd');
$data = array();
$rootDir = 'result';
foreach ($QData as $key => &$keyWord) {
    $jsonDir = "{$rootDir}/{$date}/{$key}.json";
    if(file_exists($jsonDir)){
        $code = file_get_contents($jsonDir);
        $r = json_decode($code);
        $result = explode('|',$r->data->index->$key );

        $data[$key]['id'] = $key;
        $data[$key]['name'] = $keyWord;
        for($i = 0; $i<5; $i++){
            $rowName = 'day'.($i+1);
            $data[$key][$rowName] = array_pop($result);
        }
        $data[$key]['url'] = QPage::getURL($key, $QUrl[QPURL]);
    }
}

$dom=new DomDocument('1.0', 'utf-8'); 
$list = $dom->createElement('list');
$dom->appendchild($list);
foreach($data as $value){
    QPage::createItem($dom, $list, array('item' =>$value));
}
$xmlDir = "{$rootDir}/{$date}.xml";
$dom->save($xmlDir);
echo "Finish!\n";
?>