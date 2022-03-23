import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import {Element} from "./CssExample";

class ThreeManager {
    camera: THREE.PerspectiveCamera
    sceneCSS: THREE.Scene; 
    scene: THREE.Scene; 
    rendererCSS: CSS3DRenderer; 
    renderer: THREE.WebGLRenderer; 
    controls: TrackballControls;
    animationqueue: any[];//holds every function that needs to be executed in one frame.

    constructor() {
        const container = document.getElementById( 'container' );
        this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
        this.camera.position.set( 500, 350, 750 );

        this.sceneCSS = new THREE.Scene();
        this.scene = new THREE.Scene();

        this.rendererCSS = new CSS3DRenderer();
        this.rendererCSS.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( this.rendererCSS.domElement );


        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );

        const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(200,200,200);
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );
        this.animationqueue = [(()=>{cube.position.x = cube.position.x + 1}), ()=>{console.log("aa")}]

        this.camera.position.z = 5;


        const group = new THREE.Group();
        group.add(Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
        group.add(Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
        group.add(Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
        group.add(Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
        this.sceneCSS.add( group );

        this.controls = new TrackballControls( this.camera, this.rendererCSS.domElement );
        this.controls.rotateSpeed = 4;

        window.addEventListener( 'resize', this.onWindowResize );

        // Block iframe events when dragging camera

        const blocker = document.getElementById( 'blocker' );
        blocker.style.display = 'none';

        this.controls.addEventListener( 'start', function () {

            blocker.style.display = '';

        } );
        this.controls.addEventListener( 'end', function () {

            blocker.style.display = 'none';

        } );
        
        this.animate();
    }
    onWindowResize() {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.rendererCSS.setSize( window.innerWidth, window.innerHeight );

    }
    animate() {
        console.log(this.animationqueue);
        this.animationqueue.forEach((i)=>{i();})
        requestAnimationFrame( this.animate.bind(this) );
        this.controls.update();
        //rendererCSS.render( sceneCSS, camera );
        this.renderer.render( this.scene, this.camera );
    }
}






export{ThreeManager}