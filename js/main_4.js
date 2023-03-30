
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
let f=0;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }

    //куб
    let geometry = new THREE.BoxGeometry(10, 10, 10);
    let material = new THREE.MeshPhongMaterial({ color: collor_1.value });
    let cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.position.x = -10;
    scene.add(cube);

    //поверхность
    let mesh_plane = new THREE.PlaneGeometry(600, 200, 600);
    let material_plane = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let plane = new THREE.Mesh(mesh_plane, material_plane);
    plane.receiveShadow = true;
    plane.position.y = -5;
    plane.rotation.x = 4.7;
    scene.add(plane);

    //фон
    let mesh = new THREE.BufferGeometry();
    let vertices = new Float32Array([
        //полигон 1
        -200, -200, -40,
        200, -200, -40,
        200, 200, -40,
        //полигон 2
        200, 200, -40,
        -200, 200, -40,
        -200, -200, -40
    ]);
    mesh.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    let material_2 = new THREE.MeshBasicMaterial({ color: 0xc0c0c0 });
    let polygon = new THREE.Mesh(mesh, material_2);
    scene.add(polygon);


    let mesh_3 = new THREE.BufferGeometry();
    let vertices_3 = new Float32Array([
        //полигон 1
        4.322220, 0.000000, 0.000000,
        -2.161117, -3.743149, 0.000000,
        -2.161117, 3.743149, 0.000000,
        //2
        0.000000, 0.000000, 8.550000,
        4.322220, 0.000000, 0.000000,
        -2.161117, 3.743149, 0.000000,
        //3
        0.000000, 0.000000, 8.550000,
        -2.161117, 3.743149, 0.000000,
        -2.161117, -3.743149, 0.000000,
        //4
        -2.161117, -3.743149, 0.000000,
        4.322220, 0.000000, 0.000000,
        0.000000, 0.000000, 8.550000
    ])
    let normalized = new Float32Array([
        -0.000000, 0.000000, -1.000000,
        0.484754, 0.839620, 0.245054,
        -0.969509, 0.000000, 0.245055,
        0.484754, -0.839620, 0.245054
    ])


    mesh_3.setAttribute('position', new THREE.BufferAttribute(vertices_3, 3));
    mesh_3.computeVertexNormals();
    let material_3 = new THREE.MeshPhongMaterial({ color: collor_2.value });
    let pyramid = new THREE.Mesh(mesh_3, material_3);
    pyramid.castShadow = true;
    pyramid.rotation.set(4.7, 0, 1);
    pyramid.position.set(10,-5,0);
    scene.add(pyramid);


    function render() {
        requestAnimationFrame(render);
        //cube.rotation.y += 0.01;
        //scene.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    render();

    //свет 1
    let light = new THREE.PointLight(0xffffff, litning_1.value);
    light.position.set(0, 30, -9);
    light.castShadow = true;

    scene.add(light);
    //свет 2
    let light_2 = new THREE.SpotLight(0xffffff,  litning_2.value);
    light_2.position.set(20, 20, 20);
    light_2.castShadow = true;

    scene.add(light_2);


    // const helper = new THREE.CameraHelper(light.shadow.camera);
    // const helper2 = new THREE.CameraHelper(light_2.shadow.camera);
    // scene.add(helper, helper2);

    camera.position.set(0, 4, 30);
    camera.rotation.x = 0.2;

    renderer.render(scene, camera);
});
