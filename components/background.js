import { useEffect, useRef } from "react";
import * as THREE from "three";

const Background = () => {
  

  useEffect(() => {
    const canvas = document.querySelector('canvas#threedbg')
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        camera.aspect = sizes.width/sizes.height
        camera.updateProjectionMatrix()
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, sizes.width/sizes.height, 0.1, 100 );
    const renderer = new THREE.WebGLRenderer({canvas : canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    

    // sphere
    const spheregeo = new THREE.SphereGeometry(9, 32, 32);
    const spheremat = new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 1,
      color: 0x0,
    });
    const sphere = new THREE.Mesh(spheregeo, spheremat);
    scene.add(sphere);

    // lights
    const light1 = new THREE.PointLight(0xffffff, 0.5);
    light1.position.set(2, 3, 4);
    scene.add(light1);

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    camera.position.set(0,0,2);
    scene.add(camera);
    const clock = new THREE.Clock()
    const animate = function () {
        const elapsedTime = clock.getElapsedTime()
        window.requestAnimationFrame( animate );
        sphere.rotation.x = .5 * elapsedTime;
        renderer.render( scene, camera );
      };
      
      animate();

    // return () => {
    //   mountRef.current.removeChild(renderer.domElement);
    // };
  }, []);

  return <canvas id='threedbg'/>;
};

export default Background;
