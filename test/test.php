<?php
@ini_set('display_errors', E_ALL);

if ( !empty($_POST) || !empty($_FILES) )
{
    echo json_encode(array(
        '$_POST'        => empty($_POST) ? array() : $_POST,
        '$_FILES'       => empty($_FILES) ? array() : $_FILES
    ));
    exit;
}
require('../../Importer/src/php/Importer.php');
require('../HtmlWidget.php');

global $importer;

$importer = new Importer( );
$importer->register( 'assets', HtmlWidget::assets(array(
            'base'      => '../',
            'full'      => true,
            'jquery'    => true,
            'dev'       => true,
            'cdn'       => false
        )) );
HtmlWidget::enqueueAssets( array( $importer, 'enqueue' ) );

function widget( $widget, $attr=array(), $data=array() )
{
    echo HtmlWidget::widget( $widget, $attr, $data );
}
function options( $options, $key=null, $val=null )
{
    return HtmlWidget::options( $options, $key, $val );
}
function enqueue( $type, $asset )
{
    global $importer;
    $importer->enqueue( $type, $asset );
}
function styles( )
{
    global $importer;
    echo $importer->assets( 'styles' );
}
function scripts( )
{
    global $importer;
    echo $importer->assets( 'scripts' );
}

$currentUri = $_SERVER['REQUEST_URI'];
if ( false !== ($pos = strpos($currentUri,'#')) ) $currentUri = substr($currentUri, 0, $pos);
if ( false !== ($pos = strpos($currentUri,'?')) ) $currentUri = substr($currentUri, 0, $pos);
$paginationUri = $currentUri.'?page=(:page)';
?>
<!doctype html>
<!--[if lt IE 7]>
<html lang="en" class="ie lt-ie9 lt-ie8 lt-ie7">
<![endif]-->
<!--[if IE 7]>
<html lang="en" class="ie lt-ie9 lt-ie8">
<![endif]-->
<!--[if IE 8]>
<html lang="en" class="ie lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" class="no-ie">
<!--<![endif]-->
<head>
    <meta charset="utf-8"/>
    <style type="text/css">
    #forkongithub  a {
        background: #aa0000;
        color: #fff;
        text-decoration: none;
        font-family: arial, sans-serif;
        text-align: center;
        font-weight: bold;
        padding: 5px 40px;
        font-size: 0.9rem;
        line-height: 1.4rem;
        position: relative;
        transition: all 0.5s;
    }
    #forkongithub a {
        width: 200px;
        position: absolute;
        top: 60px;
        right: -60px;
        transform: rotate(45deg);
        box-shadow: 4px 4px 10px rgba(0,0,0,0.8);
    }
    #forkongithub a:hover {
        background: #aa0000;
        color: #fff;
    }
    #forkongithub a::before, #forkongithub a::after {
        content: "";
        width: 100%;
        display: block;
        position: absolute;
        z-index: 100;
        top: 1px;
        left: 0;
        height: 1px;
        background: #fff;
    }
    #forkongithub a::after
    {
        bottom: 1px;
        top: auto;
    }
    .box {
        width: 600px; height: 200px;
        position: relative;
        border: 1px solid #BBB;
        background: #EEE;
        margin-left: 100px;
    }
    .boxaki {
        border: 2px solid #ccc;
        min-height: 200px;
    }
    .w-menu-controller-bt {
        cursor: pointer;
        display: none;
    }
    .w-vertical-menu {
        width: 300px;
    }
    .w-bubble {
        max-width: 300px;
        border-color: #f3961c;
        background: #f3961c;
        color: #fff;
        font-weight: bold;
    }
    fieldset:not(.w-rating) {
        position: relative; display: block;
        font-size: 1em;
        padding: 0; width: 100%;
        float: none;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        margin: 40px 0;
    }
    legend {
        position: relative;
        font-size: 2em;
        font-weight: bold;
        padding: 20px;
    }
    @media (max-width: 60em), (max-device-width: 60em)
    {
    .w-vertical-menu.w-mobile > .w-menu-controller-bt,
    .w-dropdown-menu.w-mobile > .w-menu-controller-bt {
        display: block;
        position: absolute;
        top: 0; left: 0;
    }
    #forkongithub {
        position: absolute;
        display: block;
        z-index: 100;
        top: 0;
        right: 0;
        width: 200px;
        overflow: hidden;
        height: 200px;
    }
    }
    </style>
    <title>HtmlWidgets Test page (v.<?php echo HtmlWidget::VERSION; ?>)</title>
</head>
<body class="fluid col-1-1 responsive-960-container" style="padding:10px 20px">
    <span id="forkongithub"><a href="https://github.com/foo123/HtmlWidget">Find me on GitHub</a></span>
    <h1>HtmlWidgets Test page (v.<?php echo HtmlWidget::VERSION; ?>)</h1>
    
    <form method="post" enctype="multipart/form-data">
    <fieldset><legend>Menus</legend>
    
    <nav class="w-dropdown-menu"><ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></nav>
    
    <hr />
    <nav class="w-dropdown-menu w-mobile" style="z-index:300">
    <label for="mobile-menu" class="w-menu-controller-bt"><i class="fa fa-bars fa-2x"></i>&nbsp;</label>
    <input id="mobile-menu" type="checkbox" class="w-menu-controller" value="1" />
    <ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></nav>

    <hr />
    
    <nav class="w-vertical-menu" style="z-index:200"><ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></nav>
    
    <hr />
    
    <nav class="w-vertical-menu w-mobile" style="z-index:100">
    <label for="mobile-menu2" class="w-menu-controller-bt"><i class="fa fa-bars fa-2x"></i>&nbsp;</label>
    <input id="mobile-menu2" type="checkbox" class="w-menu-controller" value="1" />
    <ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></nav>
    
    <hr />
    <?php widget('menu', array(
        'mobile' => true,
        'class' => 'w-dropdown-menu w-mobile',
        'style' => 'z-index:200'
    ),array(
        array(
            'text' => 'Item',
            'active' => 1,
            'submenu' => array(
                array(
                    'text' => 'Sub Item',
                    'submenu' => array(
                        array(
                            'text' => 'Sub Sub Item'
                        ),
                        array(
                            'text' => 'Sub Sub Item'
                        ),
                        array(
                            'text' => 'Sub Sub Item'
                        ),
                        array(
                            'text' => 'Sub Sub Item'
                        )
                    )
                ),
                array(
                    'text' => 'Sub Item'
                ),
                array(
                    'text' => 'Sub Item'
                ),
                array(
                    'text' => 'Sub Item'
                )
            )
        ),
        array(
            'text' => 'Item'
        ),
        array(
            'text' => 'Item'
        ),
        array(
            'text' => 'Item'
        )
    )); ?>
    <hr />
    <?php widget('menu', array(
        'class' => 'w-vertical-menu',
        'style' => 'z-index:100'
    ),array(
        array(
            'text' => 'Item',
            'active' => 1,
            'submenu' => array(
                array(
                    'text' => 'Sub Item',
                    'submenu' => array(
                        array(
                            'text' => 'Sub Sub Item'
                        ),
                        array(
                            'text' => 'Sub Sub Item'
                        ),
                        array(
                            'text' => 'Sub Sub Item'
                        ),
                        array(
                            'text' => 'Sub Sub Item'
                        )
                    )
                ),
                array(
                    'text' => 'Sub Item'
                ),
                array(
                    'text' => 'Sub Item'
                ),
                array(
                    'text' => 'Sub Item'
                )
            )
        ),
        array(
            'text' => 'Item'
        ),
        array(
            'text' => 'Item'
        ),
        array(
            'text' => 'Item'
        )
    )); ?>
    </fieldset>
    
    <fieldset><legend>Pagination</legend>
    <nav><?php widget('pagination',array('urlPattern'=>$paginationUri),array('totalItems'=>100,'itemsPerPage'=>10,'currentPage'=>2)); ?></nav>
    
    <nav><?php widget('pagination',array(),array('totalItems'=>100,'itemsPerPage'=>10,'currentPage'=>1)); ?></nav>
    
    <nav><?php widget('pagination',array(),array('totalItems'=>1000,'itemsPerPage'=>10,'currentPage'=>3)); ?></nav>
    <hr />
    
    <?php widget('pagination',array('urlPattern'=>$paginationUri,'selectBox'=>1),array('totalItems'=>1000,'itemsPerPage'=>10,'currentPage'=>3)); ?>
    </fieldset>
    
    <fieldset><legend>Buttons</legend>
    <?php widget('button',array('class'=>'w-xsmall','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-black','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-black','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-black','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-black','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-black','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-black','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-black','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-black','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-black','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-black','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-black','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-black','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-black','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-primary','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-primary','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-primary','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-primary','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-primary','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-primary','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-primary','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-primary','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-primary','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-primary','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-primary','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-primary','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-primary','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-red','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-red','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-red','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-red','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-red','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-red','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-red','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-red','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-red','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-red','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-red','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-red','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-red','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-blue','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-blue','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-blue','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-blue','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-blue','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-blue','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-blue','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-blue','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-blue','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-blue','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-blue','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-blue','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-blue','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-orange','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-orange','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-orange','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-orange','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-orange','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-orange','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-orange','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-orange','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-orange','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-orange','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-orange','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-orange','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-orange','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-green','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-green','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-green','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-green','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-green','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-green','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-green','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-green','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-green','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-green','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-green','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-green','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-green','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-aqua','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-aqua','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-aqua','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-aqua','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-aqua','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-aqua','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-aqua','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-aqua','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-aqua','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-aqua','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-aqua','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-aqua','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-aqua','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-yellow','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-yellow','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-yellow','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-yellow','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-yellow','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-yellow','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-yellow','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-yellow','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-yellow','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-yellow','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-yellow','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-yellow','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-yellow','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    
    <br />
    
    <?php widget('button',array('class'=>'w-xsmall w-purple','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-small w-purple','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-purple','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-large w-purple','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-purple','icon'=>'info-circle')); ?>
    
    <?php widget('button',array('class'=>'w-xsmall w-purple','icon'=>'plus'),array('text'=>'xsmall')); ?>
    <?php widget('button',array('class'=>'w-small w-purple','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'w-purple','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-purple','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-purple','icon'=>'plus','readonly'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-large w-purple','icon'=>'plus','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-purple','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-purple','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    </fieldset>
    
    <fieldset><legend>Tables</legend>
    <strong>multi-responsive blocks</strong>
    <div class="fluid col-1-1">
    <div class="fluid col-1-4 autoadjust autocol-1-3-1024 autocol-1-2-768 autocol-1-1-640" style="height:100px;background:red;">&nbsp;</div>
    <div class="fluid col-1-4 autoadjust autocol-1-3-1024 autocol-1-2-768 autocol-1-1-640" style="height:100px;background:green;">&nbsp;</div>
    <div class="fluid col-1-4 autoadjust autocol-1-3-1024 autocol-1-2-768 autocol-1-1-640" style="height:100px;background:yellow;">&nbsp;</div>
    <div class="fluid col-1-4 autoadjust autocol-1-3-1024 autocol-1-2-768 autocol-1-1-640" style="height:100px;background:blue;">&nbsp;</div>
    </div>
    
    <br />
    
    <strong>multi-responsive cellular table</strong>
    <table id="table_1" w-init="1" class="w-widget w-table w-datatable cellular responsive bordered vstripped cell-1-4 autocell-1-3-960 autocell-1-2-768 autocell-1-1-640">
    <thead>
        <tr>
        <th data-columnkey="column1"><span>column1</span></th>
        <th data-columnkey="column2"><span>column2</span></th>
        <th data-columnkey="column3"><span>column3</span></th>
        <th data-columnkey="column4"><span>column4</span></th>
        <th data-columnkey="column5"><span>column5</span></th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 1</td>
        <td data-columnkey="column3" data-column="column3">data 1</td>
        <td data-columnkey="column4" data-column="column4">data 1</td>
        <td data-columnkey="column5" data-column="column5">data 1</td>
        </tr>
        <tr class="selected">
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 2</td>
        <td data-columnkey="column3" data-column="column3">data 2</td>
        <td data-columnkey="column4" data-column="column4">data 2</td>
        <td data-columnkey="column5" data-column="column5">data 2</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 3</td>
        <td data-columnkey="column3" data-column="column3">data 3</td>
        <td data-columnkey="column4" data-column="column4">data 3</td>
        <td data-columnkey="column5" data-column="column5">data 3</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 4</td>
        <td data-columnkey="column3" data-column="column3">data 4</td>
        <td data-columnkey="column4" data-column="column4">data 4</td>
        <td data-columnkey="column5" data-column="column5">data 4</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 5</td>
        <td data-columnkey="column3" data-column="column3">data 5</td>
        <td data-columnkey="column4" data-column="column4">data 5</td>
        <td data-columnkey="column5" data-column="column5">data 5</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 6</td>
        <td data-columnkey="column3" data-column="column3">data 6</td>
        <td data-columnkey="column4" data-column="column4">data 6</td>
        <td data-columnkey="column5" data-column="column5">data 6</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 7</td>
        <td data-columnkey="column3" data-column="column3">data 7</td>
        <td data-columnkey="column4" data-column="column4">data 7</td>
        <td data-columnkey="column5" data-column="column5">data 7</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 8</td>
        <td data-columnkey="column3" data-column="column3">data 8</td>
        <td data-columnkey="column4" data-column="column4">data 8</td>
        <td data-columnkey="column5" data-column="column5">data 8</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 9</td>
        <td data-columnkey="column3" data-column="column3">data 9</td>
        <td data-columnkey="column4" data-column="column4">data 9</td>
        <td data-columnkey="column5" data-column="column5">data 9</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 0</td>
        <td data-columnkey="column3" data-column="column3">data 0</td>
        <td data-columnkey="column4" data-column="column4">data 0</td>
        <td data-columnkey="column5" data-column="column5">data 0</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 7</td>
        <td data-columnkey="column3" data-column="column3">data 7</td>
        <td data-columnkey="column4" data-column="column4">data 7</td>
        <td data-columnkey="column5" data-column="column5">data 7</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 8</td>
        <td data-columnkey="column3" data-column="column3">data 8</td>
        <td data-columnkey="column4" data-column="column4">data 8</td>
        <td data-columnkey="column5" data-column="column5">data 8</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 9</td>
        <td data-columnkey="column3" data-column="column3">data 9</td>
        <td data-columnkey="column4" data-column="column4">data 9</td>
        <td data-columnkey="column5" data-column="column5">data 9</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 0</td>
        <td data-columnkey="column3" data-column="column3">data 0</td>
        <td data-columnkey="column4" data-column="column4">data 0</td>
        <td data-columnkey="column5" data-column="column5">data 0</td>
        </tr>
    </tbody>
    </table>

    <br />
    
    <strong>responsive table</strong>
    <table id="table_2" w-init="1" class="w-widget w-table w-datatable responsive bordered stripped vstripped">
    <thead>
        <tr>
        <th data-columnkey="column1"><span>column1</span></th>
        <th data-columnkey="column2"><span>column2</span></th>
        <th data-columnkey="column3"><span>column3</span></th>
        <th data-columnkey="column4"><span>column4</span></th>
        <th data-columnkey="column5"><span>column5</span></th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 1</td>
        <td data-columnkey="column3" data-column="column3">data 1</td>
        <td data-columnkey="column4" data-column="column4">data 1</td>
        <td data-columnkey="column5" data-column="column5">data 1</td>
        </tr>
        <tr class="selected">
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 2</td>
        <td data-columnkey="column3" data-column="column3">data 2</td>
        <td data-columnkey="column4" data-column="column4">data 2</td>
        <td data-columnkey="column5" data-column="column5">data 2</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 3</td>
        <td data-columnkey="column3" data-column="column3">data 3</td>
        <td data-columnkey="column4" data-column="column4">data 3</td>
        <td data-columnkey="column5" data-column="column5">data 3</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 4</td>
        <td data-columnkey="column3" data-column="column3">data 4</td>
        <td data-columnkey="column4" data-column="column4">data 4</td>
        <td data-columnkey="column5" data-column="column5">data 4</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 5</td>
        <td data-columnkey="column3" data-column="column3">data 5</td>
        <td data-columnkey="column4" data-column="column4">data 5</td>
        <td data-columnkey="column5" data-column="column5">data 5</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 6</td>
        <td data-columnkey="column3" data-column="column3">data 6</td>
        <td data-columnkey="column4" data-column="column4">data 6</td>
        <td data-columnkey="column5" data-column="column5">data 6</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 7</td>
        <td data-columnkey="column3" data-column="column3">data 7</td>
        <td data-columnkey="column4" data-column="column4">data 7</td>
        <td data-columnkey="column5" data-column="column5">data 7</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 8</td>
        <td data-columnkey="column3" data-column="column3">data 8</td>
        <td data-columnkey="column4" data-column="column4">data 8</td>
        <td data-columnkey="column5" data-column="column5">data 8</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 9</td>
        <td data-columnkey="column3" data-column="column3">data 9</td>
        <td data-columnkey="column4" data-column="column4">data 9</td>
        <td data-columnkey="column5" data-column="column5">data 9</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 0</td>
        <td data-columnkey="column3" data-column="column3">data 0</td>
        <td data-columnkey="column4" data-column="column4">data 0</td>
        <td data-columnkey="column5" data-column="column5">data 0</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 7</td>
        <td data-columnkey="column3" data-column="column3">data 7</td>
        <td data-columnkey="column4" data-column="column4">data 7</td>
        <td data-columnkey="column5" data-column="column5">data 7</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 8</td>
        <td data-columnkey="column3" data-column="column3">data 8</td>
        <td data-columnkey="column4" data-column="column4">data 8</td>
        <td data-columnkey="column5" data-column="column5">data 8</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 9</td>
        <td data-columnkey="column3" data-column="column3">data 9</td>
        <td data-columnkey="column4" data-column="column4">data 9</td>
        <td data-columnkey="column5" data-column="column5">data 9</td>
        </tr>
        <tr>
        <td data-columnkey="column1" data-column="column1"><i class="fa fa-info-circle fa-2x"></i></td>
        <td data-columnkey="column2" data-column="column2">data 0</td>
        <td data-columnkey="column3" data-column="column3">data 0</td>
        <td data-columnkey="column4" data-column="column4">data 0</td>
        <td data-columnkey="column5" data-column="column5">data 0</td>
        </tr>
    </tbody>
    </table>
    </fieldset>
    
    <fieldset><legend>Dropdowns</legend>
    <?php widget('dropdown',array('placeholder'=>'select..'),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('dropdown',array('placeholder'=>'large..','class'=>'w-large','disabled'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('dropdown',array('placeholder'=>'xlarge..','class'=>'w-xlarge','readonly'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    
    <hr />
    
    <?php widget('select2',array('placeholder'=>'select..'),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('select2',array('placeholder'=>'large..','class'=>'w-large','disabled'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('select2',array('placeholder'=>'xlarge..','class'=>'w-xlarge','multiple'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    </fieldset>
    
    <fieldset><legend>Color Picker</legend>
    <?php widget('colorpicker',array(
        'title'=>'Select color',
        'data'=>array(
            'colorpicker-format' => 'rgba'
        )
    ),array(
        'color'=>'rgba(210,0,0,0.7)'
    )); ?>
    <?php widget('colorpicker',array(
        'title'=>'Select color',
        'class' => 'w-large',
        'data'=>array(
            'colorpicker-format' => 'rgba'
        )
    ),array(
        'color'=>'rgba(210,0,0,0.7)'
    )); ?>
    <?php widget('colorpicker',array(
        'title'=>'Select color',
        'class' => 'w-xlarge',
        'data'=>array(
            'colorpicker-format' => 'rgba'
        )
    ),array(
        'color'=>'rgba(210,0,0,0.7)'
    )); ?>
    </fieldset>
    
    <fieldset><legend>Date-Time Picker</legend>
    <?php widget('datetimepicker',array(
        'title'=>'Select date-time',
        'data'=>array(
            'datetime-format' => 'Y-m-d H:i:s',
            'datetime-time' => 1,
            'datetime-seconds' => 1
        )
    ),array(
        'value'=>'2016-01-24 12:00:00'
    )); ?>
    <?php widget('datetimepicker',array(
        'title'=>'Select date-time',
        'class' => 'w-large',
        'disabled' => 1,
        'data'=>array(
            'datetime-format' => 'Y-m-d H:i:s',
            'datetime-time' => 1,
            'datetime-seconds' => 1
        )
    ),array(
        'value'=>'2016-01-24 12:00:00'
    )); ?>
    <?php widget('datetimepicker',array(
        'title'=>'Select date-time',
        'class' => 'w-xlarge',
        'readonly' => 1,
        'data'=>array(
            'datetime-format' => 'Y-m-d H:i:s',
            'datetime-time' => 1,
            'datetime-seconds' => 1
        )
    ),array(
        'value'=>'2016-01-24 12:00:00'
    )); ?>
    </fieldset>
    
    <fieldset><legend>Ratings</legend>
    <?php widget('rating',array('title'=>'Please rate:','icon'=>'star'),array('value'=>'3')); ?>
    <?php widget('rating',array('title'=>'Please rate:','class'=>'w-large','icon'=>'star','disabled'=>1),array('value'=>'3')); ?>
    <?php widget('rating',array('title'=>'Please rate:','class'=>'w-xlarge','icon'=>'star','readonly'=>1),array('value'=>'3')); ?>
    </fieldset>
    
    <fieldset><legend>Textboxes</legend>
    <?php widget('textbox',array('title'=>'text..','icon'=>'pencil'),array('value'=>'')); ?>
    <?php widget('textbox',array('class'=>'w-large','title'=>'large..','icon'=>'pencil','disabled'=>1),array('value'=>'')); ?>
    <?php widget('textbox',array('class'=>'w-xlarge','title'=>'xlarge..','icon'=>'pencil','readonly'=>1),array('value'=>'')); ?>
    
    <hr />
    
    <?php widget('textarea',array('title'=>'text..','icon'=>'pencil'),array('value'=>'')); ?>
    <?php widget('textarea',array('class'=>'w-large','title'=>'large..','icon'=>'pencil','disabled'=>1),array('value'=>'')); ?>
    <?php widget('textarea',array('class'=>'w-xlarge','title'=>'xlarge..','icon'=>'pencil','readonly'=>1),array('value'=>'')); ?>
    </fieldset>
    
    <fieldset style="overflow:hidden;"><legend>Panels</legend>
    <?php widget("button", array(
        "class" => "w-orange",
        "for"   => "controller_a_panel",
        "title" => "Open/Close Panel",
        "icon"  => "check-circle-o"
    ),array(
        "text"  => "Toggle"
    )); ?>
    <?php widget("button", array(
        "class" => "w-orange",
        "for"   => "controller_a_left_panel",
        "title" => "Open/Close Panel",
        "icon"  => "check-circle-o"
    ),array(
        "text"  => "Toggle Left"
    )); ?>
    <?php widget("button", array(
        "class" => "w-orange",
        "for"   => "controller_a_right_panel",
        "title" => "Open/Close Panel",
        "icon"  => "check-circle-o"
    ),array(
        "text"  => "Toggle Right"
    )); ?>
    
    <br />
    
    
    <?php widget("panel",array("id"=>"a_panel","class"=>"w-panel-no-header")); ?>
    <div class="fluid col-1-1 text-right">
    <?php widget("button", array(
        "class" => "w-red w-large",
        "for"   => "controller_a_panel",
        "title" => "Close Panel",
        "icon"  => "minus"
    )); ?>
    <?php widget("button", array(
        "class" => "w-orange w-large",
        "href"  => "#",
        "title" => "Clear Filters",
        "icon"  => "square"
    )); ?>
    <?php widget("button", array(
        "class" => "w-green w-large",
        "href"  => "#",
        "title" => "Apply Filters",
        "icon"  => "play"
    )); ?>
    </div>
    
    <div class="fluid col-1-1" style="border-radius:10px;border:1px solid #ccc;padding:4px;">
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-red">Questions</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'Q1','2'=>'Q2','3'=>'Q3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_question_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_question_".$qid,"name"=>"question[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-blue">Answers</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'A1','2'=>'A2','3'=>'A3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_answer_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_answer_".$qid,"name"=>"answer[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-orange">Variables</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'V1','2'=>'V2','3'=>'V3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_var_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_var_".$qid,"name"=>"var[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-green">Values</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'T1','2'=>'T2','3'=>'T3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_val_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_val_".$qid,"name"=>"val[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    </div>
    <?php widget("panel_end"); ?>
    
    <?php widget("panel",array("id"=>"a_left_panel","class"=>"w-side-panel-left w-panel-no-header","style"=>"width:100%;max-width:100%")); ?>
    <div class="fluid col-1-1 text-right">
    <?php widget("button", array(
        "class" => "w-red w-large",
        "for"   => "controller_a_left_panel",
        "title" => "Close Panel",
        "icon"  => "minus"
    )); ?>
    <?php widget("button", array(
        "class" => "w-orange w-large",
        "href"  => "#",
        "title" => "Clear Filters",
        "icon"  => "square"
    )); ?>
    <?php widget("button", array(
        "class" => "w-green w-large",
        "href"  => "#",
        "title" => "Apply Filters",
        "icon"  => "play"
    )); ?>
    </div>
    
    <div class="fluid col-1-1" style="border-radius:10px;border:1px solid #ccc;padding:4px;">
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-red">Questions</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'Q1','2'=>'Q2','3'=>'Q3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_question2_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_question2_".$qid,"name"=>"question2[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-blue">Answers</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'A1','2'=>'A2','3'=>'A3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_answer2_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_answer2_".$qid,"name"=>"answer2[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-orange">Variables</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'V1','2'=>'V2','3'=>'V3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_var2_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_var2_".$qid,"name"=>"var2[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-green">Values</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'T1','2'=>'T2','3'=>'T3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_val2_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_val2_".$qid,"name"=>"val2[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    </div>
    <?php widget("panel_end"); ?>
    
    <br />
    <?php widget("panel",array("id"=>"a_right_panel","class"=>"w-side-panel-right w-panel-no-header","style"=>"width:100%;max-width:100%")); ?>
    <div class="fluid col-1-1 text-right">
    <?php widget("button", array(
        "class" => "w-red w-large",
        "for"   => "controller_a_right_panel",
        "title" => "Close Panel",
        "icon"  => "minus"
    )); ?>
    <?php widget("button", array(
        "class" => "w-orange w-large",
        "href"  => "#",
        "title" => "Clear Filters",
        "icon"  => "square"
    )); ?>
    <?php widget("button", array(
        "class" => "w-green w-large",
        "href"  => "#",
        "title" => "Apply Filters",
        "icon"  => "play"
    )); ?>
    </div>
    
    <div class="fluid col-1-1" style="border-radius:10px;border:1px solid #ccc;padding:4px;">
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-red">Questions</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'Q1','2'=>'Q2','3'=>'Q3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_question3_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_question3_".$qid,"name"=>"question3[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-blue">Answers</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'A1','2'=>'A2','3'=>'A3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_answer3_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_answer3_".$qid,"name"=>"answer3[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-orange">Variables</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'V1','2'=>'V2','3'=>'V3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_var3_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_var3_".$qid,"name"=>"var3[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    <div class="fluid col-1-2" style="padding:2px"><table class="w-table stripped"><tbody>
    <tr>
    <td><span class="w-tag w-tag3 w-green">Values</span></td>
    <td><?php widget("button",array("href"=>"#","icon"=>"square","title"=>"Clear","class"=>"w-red w-xsmall"));?>
    <?php widget("button",array("href"=>"#","icon"=>"check-square","title"=>"Invert","class"=>"w-blue w-xsmall"));?></td>
    </tr>
    <?php foreach(array('1'=>'T1','2'=>'T2','3'=>'T3') as $qid=>$q) { ?>
    <tr>
    <td><label for="filter_val3_<?php echo $qid; ?>" class="w-label"><?php echo $q; ?></label></td>
    <td><?php widget("checkbox",array("title"=>$q,"id"=>"filter_val3_".$qid,"name"=>"val3[]"),array("value"=>$qid));?></td>
    </tr>
    <?php } ?>
    </tbody></table></div>
    
    </div>
    <?php widget("panel_end"); ?>
    </fieldset>
    
    <fieldset><legend>Wysiwyg Editor(s)</legend>
    <?php widget('wysiwyg-editor',array(
        'placeholder'=>'rich text..'
    ),array(
        'value'=>'<i>Hello Tinymce</i>'
    )); ?>
    </fieldset>
    
    <fieldset><legend>Syntax Editor(s)</legend>
    <?php widget('codemirror',array(
        'placeholder'=>'source text..',
        //'readonly' => 1,
        'data'=>array('cm-mode'=>'xml')
    ),array(
        'value'=>'<i>Hello Codemirror</i>'
    )); ?>
    <br />
    <?php widget('ace',array(
        'placeholder'=>'source text..',
        //'readonly' => 1,
        'data'=>array('ace-mode'=>'xml')
    ),array(
        'value'=>'<i>Hello Ace</i>'
    )); ?>
    </fieldset>
    
    <fieldset><legend>Syntax Highlighter(s)</legend>
    <strong>Highlight.js</strong><br />
    <?php widget('syntax-highlight',array(
        'highlighter'=>'hjs',
        'language' => 'javascript'
    ),array(
        'value'=>"// demo code
function hello( )
{
    alert('hello!');
}
"
    )); ?>
    <br />
    <strong>SyntaxHighlighter</strong><br />
    <?php widget('syntax-highlight',array(
        'highlighter'=>'sh',
        'language' => 'javascript'
    ),array(
        'value'=>"// demo code
function hello( )
{
    alert('hello!');
}
"
    )); ?>
    <br />
    <strong>Prism</strong><br />
    <?php widget('syntax-highlight',array(
        //'highlighter'=>'prism',
        'language' => 'javascript'
    ),array(
        'value'=>"// demo code
function hello( )
{
    alert('hello!');
}
"
    )); ?>
    </fieldset>
    
    <fieldset><legend>Translator</legend>
    <?php //widget('translator'); ?>
    </fieldset>
    
    <fieldset><legend>Music Notation / Tablature</legend>
    <?php widget('tablature', array(
        //'id'    => 'late_init',
        //'render' => 'svg',
        'width' => 700,
        'scale' => 1.0,
        'editor' => "true",
        'editor_height' => 110
    ),array(
        'notes'=> "
options player=true
options space=20

tabstave
  notation=true
  key=A time=4/4

  notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
  notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4
  text :w, |#segno, ,|, :hd, , #tr


options space=25

tabstave
  notation=true

  notes :q (5/4.5/5) (7/4.7/5)s(5/4.5/5) ^3^
  notes :8 7-5/4 $.a./b.$ (5/4.5/5)h(7/5) =:|
  notes :8 (12/5.12/4)ds(5/5.5/4)u 3b4/5
  notes :h (5V/6.5/4.6/3.7/2) $.italic.let ring$ =|=

  text :h, ,.font=Times-12-italic, D.S. al coda, |#coda
  text :h, ,.-1, .font=Arial-14-bold,A13
  text ++, .23, #f
"
      )); ?>
    </fieldset>
    
    <fieldset><legend>Chart / Graph</legend>
    <?php widget('chart', array(),array(
        'data'=> array(
          'columns'=> array(
            array('data1', 30, 200, 100, 400, 150, 250),
            array('data2', 50, 20, 10, 40, 15, 25)
          ),
        )
      )); ?>
    </fieldset>
    
    <fieldset><legend>Google Map</legend>
    <?php /*widget('map', array(
        'title' => 'Here',
        'style' => 'width:100%',
        'options' => array(
            'center'        => array(39.5455, 22.345353),
            'centerMarker'  => true,
            'zoom'          => 12,
            'type'          => 'ROADMAP',
            'responsive'    => true
        )
    ));*/ ?>
    </fieldset>
    
    <fieldset><legend>Flash Video</legend>
    <?php /*widget('swf', array(
        'width' => '600', 'height' => '400'
    ),array(
        'swf'    => 'https://www.youtube.com/v/g_2regfwgggreggeW40'
    ));*/ ?>
    </fieldset>
    
    <fieldset><legend>Html5 Audio</legend>
    <?php /*widget('audio', array('autoplay'=>1,'controls'=>1,'data'=>array('foo'=>array('1'=>1,'2'=>2),'bar'=>3)),array(
        'sources'    => options(array(
        './audio.mp3' => 'audio/mp3',
        './audio.ogg' => 'audio/ogg'
        ),-1)
    ));*/ ?>
    </fieldset>
    
    <fieldset><legend>Html5 Video</legend>
    <?php /*widget('video', array('autoplay'=>1,'controls'=>1),array(
        'sources'    => options(array(
        './video.mp4' => 'video/mp4',
        './video.ogv' => 'video/ogv'
        ),-1)
    ));*/ ?>
    </fieldset>
    
    <fieldset><legend>Checkboxes</legend>
    <?php widget('checkbox',array('title'=>'Check'),array('value'=>'1')); ?>
    <?php widget('checkbox',array('title'=>'Check','class'=>'w-large','disabled'=>1),array('value'=>'1')); ?>
    <?php widget('checkbox',array('title'=>'Check','class'=>'w-xlarge','readonly'=>1),array('value'=>'1')); ?>
    
    <hr />
    
    <?php widget('radio',array('title'=>'Check','name'=>'radio'),array('value'=>'1')); ?>
    <?php widget('radio',array('title'=>'Check','name'=>'radio','class'=>'w-large','disabled'=>1),array('value'=>'1')); ?>
    <?php widget('radio',array('title'=>'Check','name'=>'radio','class'=>'w-xlarge','readonly'=>1),array('value'=>'1')); ?>
    
    <hr />
    
    <?php widget('switch',array('title'=>'Check','readonly'=>1),array('value'=>'1')); ?>
    <?php widget('switch',array('title'=>'Check','class'=>'w-large','iconon'=>'check','iconoff'=>'times-circle','disabled'=>1),array('value'=>'1')); ?>
    <?php widget('switch',array('title'=>'Check','class'=>'w-xlarge','iconon'=>'check','iconoff'=>'times-circle'),array('value'=>'1')); ?>
    
    <hr />
    
    <?php widget('checklist',array('name'=>'demo_list_1[]'),array('options'=>options(array(
        '1' => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3'
    ),-1), 'value'=>array(2,3))); ?>
    <?php widget('radiolist',array('class'=>'w-large','name'=>'demo_list_2'),array('options'=>options(array(
        '1' => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3'
    ),-1), 'value'=>1)); ?>
    <span>A choice:</span> <?php widget('radiolist',array('class'=>'w-large','name'=>'demo_list_2_1','horizontal'=>true),array('options'=>options(array(
        '1' => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3'
    ),-1), 'value'=>1)); ?>
    <?php widget('radiolist',array('class'=>'w-xlarge','name'=>'demo_list_3','disabled'=>1),array('options'=>options(array(
        '1' => 'Option 1 very loooong option very loooong option very loooong option very loooong option very loooong option very loooong option',
        '2' => 'Option 2 very loooong option very loooong option very loooong option very loooong option very loooong option very loooong option',
        '3' => 'Option 3 very loooong option very loooong option very loooong option very loooong option very loooong option very loooong option'
    ),-1), 'value'=>3)); ?>
    
    <hr />
    <?php widget('checkbox-array',array('name'=>'demo_array_1','randomised'=>true),array(
    'fields'=>array(
    'darth_vader'=>'Darth Vader',
    'obi_wan'=>'Obi Wan',
    'yoda'=>'Yoda'
    ),
    'options'=>options(array(
        '1' => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3'
    ),-1),
    'value'=>array(
    'darth_vader'=>array(2,3),
    'yoda'=>array(1,3)
    )
    )); ?>
    <?php widget('radio-array',array('class'=>'w-large','name'=>'demo_array_2'),array(
    'fields'=>array(
    'darth_vader'=>'Darth Vader',
    'obi_wan'=>'Obi Wan',
    'yoda'=>'Yoda'
    ),
    'options'=>options(array(
        '1' => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3'
    ),-1),
    'value'=>array(
    'darth_vader'=>2,
    'obi_wan'=>3,
    'yoda'=>1
    )
    )); ?>
    <hr />
    
    <?php widget('checkbox-image',array('image'=>'./luxury.jpg','name'=>'demo_image_1','style'=>'width:152px;height:152px'),array()); ?>
    <?php widget('radio-image',array('image'=>'./luxury.jpg','name'=>'demo_image_2','style'=>'width:152px;height:152px'),array()); ?>
    <?php widget('radio-image',array('image'=>'./comfort.jpg','name'=>'demo_image_2','style'=>'width:152px;height:152px','checked'=>1),array()); ?>
    
    <hr />
    <?php widget('radio-label',array('label'=>'label 1','name'=>'demo_label_1')); ?>
    <?php widget('radio-label',array('label'=>'label 2','name'=>'demo_label_1')); ?>
    
    <?php widget('checkbox-label',array('label'=>'Red','name'=>'demo_label_2','data'=>array('morph-a-morphable'=>'mode-red'))); ?>
    <?php widget('checkbox-label',array('label'=>'Green','name'=>'demo_label_2','checked'=>1,'data'=>array('morph-a-morphable'=>'mode-green'))); ?>
    <?php widget('checkbox-label',array('label'=>'Blue','name'=>'demo_label_2','checked'=>1,'data'=>array('morph-a-morphable'=>'mode-blue'))); ?>
    
    <hr />
    <?php widget('morphable',array('id'=>'a-morphable','modes'=>array('red','green','blue'))); ?>
    <div id="a-morphable" class="fluid col-1-1 w-morphable w-animated-morphable w-morphable-level-1">
    
    <!-- red and green and blue -->
    <div class="fluid col-1-6 w-morphable-item hide-if-not-red hide-if-not-green hide-if-not-blue">
    <div class="fluid col-1-1 boxaki" style="background:#fff;"></div>
    </div>
    
    <!-- neither red nor green nor blue -->
    <div class="fluid col-1-6 w-morphable-item show-if-not-red show-if-not-green show-if-not-blue">
    <div class="fluid col-1-3 boxaki" style="background:#000;"></div>
    <div class="fluid col-1-3 boxaki" style="background:#000;"></div>
    <div class="fluid col-1-3 boxaki" style="background:#000;"></div>
    </div>
    
    <!-- red or green -->
    <div class="fluid col-1-6 w-morphable-item show-if-red show-if-green">
    <div class="fluid col-1-2 boxaki" style="background:#f00;"></div>
    <div class="fluid col-1-2 boxaki" style="background:#0f0;"></div>
    </div>
    
    <!-- red or blue -->
    <div class="fluid col-1-6 w-morphable-item show-if-red show-if-blue">
    <div class="fluid col-1-2 boxaki" style="background:#f00;"></div>
    <div class="fluid col-1-2 boxaki" style="background:#00f;"></div>
    </div>
    
    <!-- green or blue -->
    <div class="fluid col-1-6 w-morphable-item show-if-blue show-if-green">
    <div class="fluid col-1-2 boxaki" style="background:#0f0;"></div>
    <div class="fluid col-1-2 boxaki" style="background:#00f;"></div>
    </div>
    
    <!-- red or green or blue -->
    <div class="fluid col-1-6 w-morphable-item show-if-red show-if-green show-if-blue">
    <div class="fluid col-1-3 boxaki" style="background:#f00;"></div>
    <div class="fluid col-1-3 boxaki" style="background:#0f0;"></div>
    <div class="fluid col-1-3 boxaki" style="background:#00f;"></div>
    </div>
    
    <!-- red and green -->
    <div class="fluid col-1-6 w-morphable-item hide-if-not-red hide-if-not-green">
    <div class="fluid col-1-1 boxaki" style="background:#ff0;"></div>
    </div>
    
    <!-- red and blue -->
    <div class="fluid col-1-6 w-morphable-item hide-if-not-red hide-if-not-blue">
    <div class="fluid col-1-1 boxaki" style="background:#f0f;"></div>
    </div>
    
    <!-- green and blue -->
    <div class="fluid col-1-6 w-morphable-item hide-if-not-green hide-if-not-blue">
    <div class="fluid col-1-1 boxaki" style="background:#0ff;"></div>
    </div>
    
    <!-- neither red nor green -->
    <div class="fluid col-1-6 w-morphable-item hide-if-red hide-if-green">
    <div class="fluid col-1-2 boxaki" style="background:#00f;"></div>
    <div class="fluid col-1-2 boxaki" style="background:#00f;"></div>
    </div>
    
    <!-- neither red nor blue -->
    <div class="fluid col-1-6 w-morphable-item hide-if-red hide-if-blue">
    <div class="fluid col-1-2 boxaki" style="background:#0f0;"></div>
    <div class="fluid col-1-2 boxaki" style="background:#0f0;"></div>
    </div>
    
    <!-- neither green nor blue -->
    <div class="fluid col-1-6 w-morphable-item hide-if-green hide-if-blue">
    <div class="fluid col-1-2 boxaki" style="background:#f00;"></div>
    <div class="fluid col-1-2 boxaki" style="background:#f00;"></div>
    </div>
    
    <!-- red -->
    <div class="fluid col-1-6 w-morphable-item show-if-red">
    <div class="fluid col-1-1 boxaki" style="background:#f00;"></div>
    </div>
    
    <!-- green -->
    <div class="fluid col-1-6 w-morphable-item show-if-green">
    <div class="fluid col-1-1 boxaki" style="background:#0f0;"></div>
    </div>
    
    <!-- blue -->
    <div class="fluid col-1-6 w-morphable-item show-if-blue">
    <div class="fluid col-1-1 boxaki" style="background:#00f;"></div>
    </div>
    
    </div>
    </fieldset>
    
    <fieldset><legend>Uploads</legend>
    <?php widget('file',array('title'=>'Upload your file here','placeholder'=>'Upload your file here')); ?>
    <?php widget('dnd-upload',array('name'=>'foo','title'=>'Upload your file here','show-preview'=>1,'upload-thumbnail'=>1)); ?>
    <?php widget('dnd-upload',array('name'=>'bar[foo]','title'=>'Upload your file here','show-preview'=>1,'upload-thumbnail'=>1)); ?>
    <?php widget('dnd-upload',array('name'=>'foo2[]','title'=>'Upload your file here','show-preview'=>1,'upload-thumbnail'=>1)); ?>
    <?php widget('dnd-upload',array('name'=>'bar2[foo2][]','title'=>'Upload your file here','show-preview'=>1,'upload-thumbnail'=>1)); ?>
    </fieldset>
    
    
    <fieldset><legend>Tooltips</legend>
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Right <span class="w-tooltip-arrow w-arrow-right"></span></div>
    <hr /><br /><br />
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Bottom <span class="w-tooltip-arrow w-arrow-bottom"></span></div>
    <hr /><br /><br />
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Left <span class="w-tooltip-arrow w-arrow-left"></span></div>
    <hr /><br /><br />
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Top <span class="w-tooltip-arrow w-arrow-top"></span></div>
    </fieldset>
    
    <fieldset><legend>Spinners</legend>
    <div class="box w-delayable w-delayed"></div>
    <div class="box"><div class="w-spinner w-spinner-dots2 active"></div></div>
    </fieldset>
    
    <fieldset><legend>Ribbons</legend>
    <div class="box">
       <div class="w-ribbon-dtl w-red w-ribbon-fold w-large"><span>Ribbon</span></div>
       <div class="w-ribbon-dtr w-blue w-ribbon-fold"><span>Ribbon</span></div>
    </div>
    </fieldset>
    
    <fieldset><legend>Popup Menus</legend>
    <div class="popr inline-block w-popr" data-popr="popr_1"><i class="fa fa-list-alt"></i> Feugait nostrud</div>
    <div class="popr inline-block w-popr" data-popr="popr_2"><i class="fa fa-cog"></i></div>
    <div class="popr inline-block w-popr" data-popr="popr_3" data-popr-mode="top"><i class="fa fa-list-alt"></i> Dolore</div>
    </fieldset>
    
    <fieldset><legend>(Speech) Bubbles</legend>
    <div class="w-bubble w-bubble-up">Bubble Up</div>
    <div class="w-bubble w-bubble-down">Bubble Down</div>
    <div class="w-bubble w-bubble-left">Bubble Left</div>
    <div class="w-bubble w-bubble-right">Bubble Right</div>
    <div class="w-bubble w-bubble2-up">Bubble Up</div>
    <div class="w-bubble w-bubble2-down">Bubble Down</div>
    <div class="w-bubble w-bubble2-left">Bubble Left</div>
    <div class="w-bubble w-bubble2-right">Bubble Right</div>
    </fieldset>
    
    <fieldset><legend>Animation Sprites</legend>
    <div class="fluid col-1-1">
    <?php widget('sprite',array('title'=>'Walking.. (sprite animation)','animation'=>'spriteanimation','rows'=>2,'columns'=>8,'sprite'=>'./spriteanimation.png','width'=>300,'height'=>521)); ?>
    </div>
    <div class="fluid col-3-4" style="margin-top:20px">
    <?php widget('sprite',array('title'=>'Walking.. (sprite animation)','animation'=>'spriteanimation2','rows'=>2,'columns'=>8,'sprite'=>'./spriteanimation.png','width'=>300,'height'=>521, 'class'=>'responsive')); ?>
    </div>
    </fieldset>
    
    <fieldset><legend>Tags</legend>
    <span class="w-tag w-orange">Tag 1</span>
    <span class="w-tag w-purple">Tag 1</span>
    <span class="w-tag w-aqua">Tag 2</span>
    <span class="w-tag w-large w-green">Tag 2</span>
    <span class="w-tag w-xlarge w-red w-tag2">Tag 3</span>
    <span class="w-tag w-primary w-tag2">Tag 4</span>
    <span class="w-tag w-blue w-tag3">Tag 5</span>
    <span class="w-tag w-green w-large w-tag3">Tag 6</span>
    <span class="w-tag w-yellow w-large w-tag2">Tag 7</span>
    <br />
    <span class="w-tag w-orange w-large"><?php widget('select',array(
    ),array(
        'options' => options(array('Option 1','Option 2','Option 3'),-1)
    ))?></span>
    <span class="w-tag w-green w-tag3"><select>
    <option value="0">Option 1</option>
    <option value="1">Option 2</option>
    <option value="2">Option 3</option>
    </select></span>
    </fieldset>
    
    <fieldset><legend>Messages</legend>
    <div class="w-msg w-msg-ok">
        <i class="fa fa-check"></i> <strong>Success!</strong>
        This msg indicates a successful or positive action.
    </div>
    <div class="w-msg w-msg-info">
        <i class="fa fa-info"></i> <strong>Info!</strong>
        This msg indicates a neutral informative change or action. 
    </div>
    <div class="w-msg w-msg-warn">
        <i class="fa fa-exclamation-circle"></i> <strong>Warning!</strong>
        This msg indicates a warning that might need attention.
    </div>
    <div class="w-msg w-msg-err">
        <i class="fa fa-exclamation-triangle"></i> <strong>Error!</strong>
        This msg indicates a dangerous or potentially negative action. 
    </div>
    </fieldset>
    
    <button id="submit_form" type="submit">Submit Test</button>
    </form>
    
<div class="popr-box" id="popr_1">
<a href="#"><i class="fa fa-list-alt"></i> Feugait delenit</a>
<a href="#"><i class="fa fa-list-alt"></i> Vero dolor et</a>
<a href="#"><i class="fa fa-list-alt"></i> Exerci ipsum</a>
</div>

<div class="popr-box" id="popr_2">
<a href="#"><i class="fa fa-list-alt"></i> Vero dolor et</a>
<a href="#" id="feugait"><i class="fa fa-list-alt"></i> Feugait</a>
<a href="#"><i class="fa fa-list-alt"></i> Commodo quis</a>
</div>

<div class="popr-box" id="popr_3">
<a href="#">Malorum</a>
<a href="#"><i class="fa fa-list-alt"></i> Vero dolor et</a>
<a href="#">Exerci ipsum</a>
</div>

    <?php
    //enqueue('scripts','-external-google-maps-api');
    enqueue('styles','normalize.css');
    enqueue('styles','responsive.css');
    enqueue('styles','fontawesome.css');
    //enqueue('styles','bootstrap.css');
    enqueue('scripts','jquery');
    enqueue('scripts','datatables');
    enqueue('scripts','tooltipster');
    enqueue('scripts','popr2');
    enqueue('scripts','serialiser');
    styles( );
    scripts( );
    ?>
    <script>
    jQuery(function($){
       /*setTimeout(function(){
       $('#late_init').addClass('w-vextab');
       }, 10000);*/
       $('#submit_form').on('click', function( evt ){
           evt.preventDefault( );
           evt.stopPropagation( );
           $.ajax({
                type: 'POST',
                method: 'POST',
                dataType: 'json',
                url: document.location,
                data: Serialiser.ModelToFormData(Serialiser.FieldsToModel($('form').find('input,textarea,select'), {})),
                processData: false,
                contentType: false
            });
           return false;
       });
    });
    </script>
</body>
</html>