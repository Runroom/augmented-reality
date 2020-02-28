varying vec2 posXY;

void main() {
    // storing a vec2 with components in range [0..1] (plane goes from -200 to 200 on X and Y)
    posXY = vec2(position.x+200.0, position.y+200.0) / 400.0;

    // Apply transform of mesh (mesh.position + mesh.rotation + mes.scale)
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);

    // Apply transform of view (relative to camera used: Perspective, Orthographic, cam.position, cam.rotation, cam.lookAt....)
    gl_Position = projectionMatrix * mvPos;
}
