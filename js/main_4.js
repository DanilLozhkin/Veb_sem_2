let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
let geometry = new THREE.BoxGeometry( 10, 10, 10);
let material = new THREE.MeshPhongMaterial( { color:  0xa55151 } );
let cube = new THREE.Mesh( geometry, material );

camera.position.z = 25;


// function render() {
//  renderer.render( scene, camera );
// }
// render();



const geometry_2 = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	-200.0, -200.0,  -15.0,
	 200.0, -200.0,  -15.0,
	 200.0,  200.0,  -15.0,

	 200.0,  200.0,  -15.0,
	-200.0,  200.0,  -15.0,
	-200.0, -200.0,  -15.0
] );

// itemSize = 3 because there are 3 values (components) per vertex
geometry_2.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material_2 = new THREE.MeshBasicMaterial( { color: 0xc0c0c0 } );
const mesh = new THREE.Mesh( geometry_2, material_2 );

scene.add( mesh, cube );

function render() {
    requestAnimationFrame( render );
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;      
renderer.render( scene, camera );
}
render();

{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }