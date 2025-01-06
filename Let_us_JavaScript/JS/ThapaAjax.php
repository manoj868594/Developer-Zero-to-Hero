<?php
$val = $_GET['selectvalue'];

$arr2 = array('Laravel', 'Symfony','CodeIgniter','CakePHP','Phalcon');
$arr3 = array('React','Vue','Angular','Ember','Backbone');
$arr4 = array('Django','CubicWeb','TurboGears','web2py');

switch($val){
    case 'PHP': foreach($arr2 as $phpval){
            echo "<option>$phpval</option>"; }
        break;
    case 'JavaScript': foreach($arr3 as $jsval){
            echo "<option>$jsval</option>"; }
        break;
    case 'PYTHON': foreach($arr4 as $python){
            echo "<option>$python</option>"; }
        break;
    default: echo "No data found";
    break;
}
?>