/* eslint-disable */

// This is a basic asyncronous shader loader for THREE.js.
const shaderLoader = (vertex_url, fragment_url, onLoad, onProgress, onError) => {
  var vertex_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
  vertex_loader.setResponseType('text');
  vertex_loader.load(vertex_url + `?v=${Date.now()}`, function (vertex_text) {
    var fragment_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
    fragment_loader.setResponseType('text');
    fragment_loader.load(fragment_url + `?v=${Date.now()}`, function (fragment_text) {
      onLoad(vertex_text, fragment_text);
    });
  }, onProgress, onError);
};

export default shaderLoader;
