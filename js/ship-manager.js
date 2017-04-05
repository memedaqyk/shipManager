var myMap;  
  
require([  
  'esri/map', 
  'esri/toolbars/draw',  
  'esri/symbols/SimpleMarkerSymbol', 
  'esri/symbols/SimpleLineSymbol',
  'esri/symbols/PictureMarkerSymbol',
  'esri/geometry/Point',
  'esri/geometry/Multipoint',
  'esri/layers/GraphicsLayer',  
  'esri/symbols/PictureFillSymbol',
  'esri/symbols/CartographicLineSymbol', 
  'esri/SpatialReference','esri/InfoTemplate',  
  'esri/graphic',   
  'dojo/_base/Color', 
  'dojo/dom', 
  'dojo/on',
  'dojo/domReady!'  
], function(  
  Map,
  Draw,  
  SimpleMarkerSymbol,
  SimpleLineSymbol,
  PictureMarkerSymbol,
  Point,
  Multipoint,
  GraphicsLayer,  
  PictureFillSymbol,
  CartographicLineSymbol, 
  SpatialReference,InfoTemplate,  
  Graphic,   
  Color, 
  dom,
  on  
) {  
  

myMap = new Map('map', {
    center: [117.952800,38.910960],
    zoom: 8,
    basemap: 'topo'
  });

dojo.connect(myMap, 'onLoad', graphicLoad);  
    
  
  
function graphicLoad()  
{  
  
   // new SpatialReference({ wkid: 102100 }) 这个参数必须加，而且wkid的值要和图层保持一致，否则显示不出来，这个值可以从  
     // var newPoint = new Point(117.952800,38.910960, new SpatialReference({ wkid: 4326 }));  
    var mp = new Multipoint(new SpatialReference({wkid:4326}));
    mp.points = [[117.952800,38.910960], [116.830200, 38.910960]];
    
    var picSymbol = new PictureMarkerSymbol('images/ship.png', 20, 20);  
    var picGraphic = new Graphic(mp, picSymbol);  
      
    var infoTemplate = new InfoTemplate();  
    infoTemplate.setTitle('hello world');  
    infoTemplate.setContent('hello');  
          
    picGraphic.setInfoTemplate(infoTemplate);  
    myMap.graphics.add(picGraphic);  
    
}  

});  
//回到顶部
var backTop = document.getElementById('backTop');
backTop.onclick = function() {
  window.scrollBy(0, -100);
  };

//设置内容高度等于页面高度
var content = document.getElementsByClassName('main-content')[0];
content.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 45 + 'px';
//设置左边部分等于页面高度
var mainLeft = document.getElementsByClassName('main-left')[0];
mainLeft.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 45 + 'px';

var mainLeftLi = document.getElementsByClassName('left-ul')[0];
var list = mainLeftLi.children;

  function createTable(count){
     var table = $('<table class="table11_2">');
     table.appendTo($('#mytable'));

     var temptr1 = $('<tr></tr>');
     temptr1.appendTo(table);
     var tempth = $('<th>MMSI</th><th>Type</th><th>Nationality</th><th>Length</th><th>Width</th><th>Depth</th><th>Speed</th><th>Destination</th>');
     tempth.appendTo(temptr1);
     var temptd2 = $('<td>4123666414</td><td>捕捞</td><td>中国</td><td>36</td><td>6</td><td>0</td><td>0.2</td><td>LIANYUNGANG</td>');
     var temptr2 = $('<tr></tr>');
     temptd2.appendTo(temptr2);
     temptr2.appendTo(table);
     $('#mytable').append('</table>');
  }

  var shipData = {
      MMSI: '41236614',
      Type: '油轮',
      Nationality: '中国',
      Length: '168',
      Width: '30',
      Depth: '11',
      Speed: '4.7',
      Destination: 'COLOMBO'

  };
  var shipData2  = {
    ship1: {

    },
    ship2: {

    }
  }; 
  // $('.left-ul')[0].children[0].click(shipData, function(event){
  //     alert(event.data.Type); // CodePlayer
  // } );

  $('#li-1').click(shipData, function createTable(event){
     var table = $('<table class="table11_2">');
     table.appendTo($('#mytable'));

     var temptr1 = $('<tr></tr>');
     temptr1.appendTo(table);
     var tempth = $('<th>MMSI</th><th>Type</th><th>Nationality</th><th>Length</th><th>Width</th><th>Depth</th><th>Speed</th><th>Destination</th>');
     tempth.appendTo(temptr1);
     var temptd2 = $('<td>' + event.data.MMSI + '</td><td>' + event.data.Type + '</td><td>' + event.data.Nationality + 
      '</td><td>' + event.data.Length + '</td><td>' + event.data.Width + '</td><td>' + event.data.Depth + '</td><td>' + event.data.Speed + '</td><td>' + event.data.Destination + '</td>');
     var temptr2 = $('<tr></tr>');
     temptd2.appendTo(temptr2);
     temptr2.appendTo(table);
     $('#mytable').append('</table>');

     //滚动
      scrollTo('#mytable',2000);

      $('#mytable').css({'padding-top': '20px', 'padding-bottom': '20px', 'background-color': '#ccc', 'padding-left': '50%', 'margin-left': '-300px'});

  });
  //console.log($('.left-ul')[0].children[0]);

//list[0].addEventListener('click', createTable, false);




