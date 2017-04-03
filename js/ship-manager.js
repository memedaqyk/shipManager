require(['esri/map',  'esri/layers/FeatureLayer','dojo/domReady!'], function(Map, FeatureLayer) {
  var map = new Map('map', {
    center: [-118, 34.5],
    zoom: 8,
    basemap: 'topo'
  });


});

//设置内容高度等于页面高度
var content = document.getElementsByClassName('content')[0];
content.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 45 + 'px';
//设置左边部分等于页面高度
var mainLeft = document.getElementsByClassName('main-left')[0];
mainLeft.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 45 + 'px';

var mainLeftLi = document.getElementsByClassName('left-ul')[0];
var list = mainLeftLi.children;


function showInfo() {
	var bottomInfo = document.getElementsByClassName('bottom-info')[0];
	var table = document.createElement('table');
	table.style.border = '1px';
	// table.style.width = '400px';
	table.style.borderCollapse = 'collapse';
	table.style.borderColor = '#ccc';
	table.innerHTML = '<tr><th>haha</th><th>hahaha</th></tr><tr><td>chuan</td><td>gao</td></tr>';
	bottomInfo.appendChild(table);
}
list[0].addEventListener('click', showInfo, false);



  $( function() {
    $( '#dialog' ).dialog({
      autoOpen: false,
      show: {
        effect: 'blind',
        duration: 600
      },
      hide: {
        effect: 'explode',
        duration: 600
      }
    });
 
    $( '#opener' ).on( 'click', function() {
      $( '#dialog' ).dialog( 'open' );
    });
  } );


