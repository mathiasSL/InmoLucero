import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {


  constructor() { }

  ngAfterViewInit(){

    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlhc3NsIiwiYSI6ImNrdnUzN3B3bDU0cmQydm1sNmRhZ3Bua28ifQ.lP8vEDHNhybS1WV64T20aQ';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-66.334396,-33.303064
    ],
    zoom: 15.5,

    });

const marker = new mapboxgl.Marker({
  color: "#FF0000",
draggable: true,
setDraggable: true
})
.setLngLat([-66.334396,-33.303064])
.addTo(map);

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

const markerHeight = 50;
const markerRadius = 10;
const linearOffset = 25;
const popupOffsets = {
    'top': [0, 0],
    'top-left': [0, 0],
    'top-right': [0, 0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};
const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
    .setLngLat([-66.334396,-33.303064])
    .setHTML("<h1>Karttem!</h1>")
    .setMaxWidth("300px")
    .addTo(map);
  
  }

  ngOnInit() {
  }
}

