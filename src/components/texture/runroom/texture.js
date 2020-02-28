/* eslint-disable */
import ShaderLoader from './shaderLoader';

const TARGET_ID = 'spray-animation';
const LOADED_CLASS = 'loaded';

// Defines variables -----------------------------------
let mat;
let w = window.innerWidth;
let h = window.innerHeight;

// -----------------------------------------------------

// Declares THREE Animation properties ------------------------
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
const spray = document.getElementById(TARGET_ID);

renderer.setSize(w, h);
renderer.setPixelRatio(window.devicePixelRatio || 1);
spray.appendChild(renderer.domElement);

const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
plane.material.visible = false;
plane.position.z = 11;

const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 0.00001, 1000); // left, right, top, bottom
camera.position.z = 500;

const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
const geo = new THREE.PlaneBufferGeometry(1, 1, 1, 1); // -.5 to .5 on XY
const mesh = new THREE.Mesh(geo, white);
mesh.scale.set(w, h, 1);

const scene = new THREE.Scene();
scene.add(camera);
scene.add(plane);
scene.add(mesh);

const clock = new THREE.Clock();
// ------------------------------------------------------

// --- Resize Handler ---------------------------
const resize = () => {
  w = window.innerWidth;
  h = window.innerHeight;

  renderer.setSize(w, h);

  camera.top = h / 2;
  camera.bottom = -h / 2;
  camera.left = -w / 2;
  camera.right = w / 2;
  camera.updateProjectionMatrix();

  if (mesh) {
    mesh.scale.set(w, h, 1);
    mat.uniforms.resolution.value.set(w, h);
  }
};
// ----------------------------------------------

// Loads shader with utils ------------------------------
ShaderLoader('/assets/js/animation/shader.vert', '/assets/js/animation/shader.frag', (vert, frag) => {
  mat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
      resolution: {
        type: 'v2',
        value: new THREE.Vector2(w, h)
      },
      time: {
        type: 'f',
        value: 0
      },
      color1: {
        typee: 'cv',
        value: [
          new THREE.Color(0xFF004E),
          new THREE.Color(0xFFB04B),
          new THREE.Color(0xA73FF4)
        ]
      },
      color2: {
        typee: 'cv',
        value: [
          new THREE.Color(0x5C3FDC),
          new THREE.Color(0x6CDCAC),
          new THREE.Color(0xFADB00)
        ]
      },
      tint: { type: 'f', value: 0 }
    }
  });

  mesh.material = mat;

  // --- Add Mesh to Scene --------
  resize();

  clock.start();
  spray.classList.add(LOADED_CLASS);
});
// ----------------------------------------------

const animate = function () {
  requestAnimationFrame(animate);

  if (mat) {
    mat.uniforms.time.value = clock.getElapsedTime();
  }

  renderer.render(scene, camera);
};

const init = () => {
  animate();

  window.addEventListener('resize', resize, false);
};

export default init;
