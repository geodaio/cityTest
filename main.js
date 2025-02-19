import * as THREE from 'three';

var camera, scene, renderer;
var gemoetry, material, mesh;

function init() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
  camera.position.y = 400;
  camera.position.z = 400;
  camera.position.x = -45 * Math.PI / 180;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1b0d72);

  var geo = new.THREE.PlaneGemoetry(2000, 2000, 20, 20); //Last two 20s split it into 20x20 grid
  var mat = new THREE.MeshBasicMaterial({color: 0x9db3b5, overdraw:true});
  var mesh = new THREE.Mesh(geo, mat);
  
  mesh.rotation.x = -90 * Math.PI / 180; //Make it lie flat instead of up and down
  scene.add(mesh);

  //Original Building
  geometry = new THREE.CubeGeometry(1, 1, 1);
  geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));

  material = new THREE.MeshDepthMaterial({overdraw: true});
  
  //Creation of Buildings
  for (var a = 0; a < 300; a++){
    var building = new THREE.Mesh(geometry.clone(), material.clone())
    building.position.x = Math.floor(Math.random() * 200 - 100) * 4;
    building.position.z = Math.floor(Math.random() * 200 - 100) * 4;
    building.scale.x = Math.random() * 50 + 10;
    building.scale.y = Math.random() * building.scale.x * 8 + 8;
    building.scale.z = building.scale.x;
    scene.add(building); 
    console.log("loop");
  }
  console.log("finish");
  requestAnimationFrame(function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  });
}

init();
