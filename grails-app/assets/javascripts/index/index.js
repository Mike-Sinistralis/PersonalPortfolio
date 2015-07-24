//= require threejs/three
//= require threejs/canvasRenderer
//= require threejs/projector

var camera, scene, renderer;

function setup() {
    document.body.style.backgroundColor = '#d7f0f7';
    setupThreeJS();
    setupWorld();

    requestAnimationFrame(function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    });
}

function setupThreeJS() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.y = 400;
    camera.position.z = 550;
    camera.rotation.x = -35 * Math.PI / 180;
    camera.near = 1;
    camera.far  = 1000;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x7ec0ee, 1);
    document.body.appendChild(renderer.domElement);
}

function setupWorld() {
    // Floor
    var geo = new THREE.PlaneGeometry(2000, 2000, 20, 20);
    var mat = new THREE.MeshBasicMaterial({color: 0x9db3b5, overdraw: true});
    var floor = new THREE.Mesh(geo, mat);
    floor.rotation.x = -90 * Math.PI / 180;
    scene.add(floor);

    // Original building
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
    var material = new THREE.MeshDepthMaterial({color: 0x123456, overdraw: true});

    var cityGeometry = new THREE.Geometry();
    for (var i = 0; i < 300; i++) {
        var building = new THREE.Mesh(geometry.clone());
        building.position.x = Math.floor(Math.random() * 200 - 100) * 4;
        building.position.z = Math.floor(Math.random() * 200 - 100) * 4;
        building.scale.x  = Math.random() * 50 + 10;
        building.scale.y  = Math.random() * building.scale.x * 8 + 8;
        building.scale.z  = building.scale.x;
        THREE.GeometryUtils.merge(cityGeometry, building);
    }
    var city = new THREE.Mesh(cityGeometry, material);
    scene.add(city);
}

// Run it!
setup();



window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}