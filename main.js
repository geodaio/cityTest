import * as THREE from 'three';

var camera, scene, renderer;
var gemoetry, material, mesh;

function init() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
  camera.position.x = 2;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1b0d72);

  geometry = new THREE.CubeGeometry(1, 1, 1);
  geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));

  material = new THREE.MeshDepthMaterial({overdraw: true});

  for (var a = 0; a < 300; a++){
    var building = new THREE.Mesh(geometry.clone(), material.clone())
  }
}
