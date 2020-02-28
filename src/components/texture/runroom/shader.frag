#define PI 3.1415926538
precision highp float;

uniform vec2 resolution;
uniform float time;

uniform float tint;

uniform vec3 color1[3];
uniform vec3 color2[3];
uniform float aspect;

float rand(float x) {
    return fract(sin(x)*1.0);
}

float noise(float x) {
    float i = floor(x);  // integer
    float f = fract(x);  // fraction
    return mix(rand(i), rand(i + 1.0), smoothstep(0.,1.,f));
}

float plot(vec2 st, float pct, float thickness){
  return  smoothstep( pct-thickness, pct, st.y) -
          smoothstep( pct, pct+thickness, st.y);
}

// 2D Random
float random(vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    //u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 st = gl_FragCoord.xy / resolution;

    float t = time * .2;

    // WAVE input (contour extracted with plot function) --> See The Book of Shaders!!
    float n = snoise(st * .16 + vec2(t*.2));
    float aspect = smoothstep(320.0, 992.0, resolution.x);
    float window = mix(1.5, 1.0 * PI, aspect);
    float y = noise(st.x * window + time * .5) * n;

    // GRAIN
    vec2 pos = vec2(st*512.);
    vec2 vel = vec2(sin(st.x+t), cos(st.y+t));
    float n2 = snoise(pos+vel);

    float grain = smoothstep(.1,.75,fract(n2))* fract(random(st));

    float Fx = plot(st, y, .4 + .1 * sin(t *.5 ));

    float duration = 1.0;
    float transition = 1.0;
    float tColor = mod(t, (duration + transition) * 3.0);

    vec3 col1;
    vec3 col2;

    if (tColor < duration + transition) {
      float threshold = smoothstep(duration, duration + transition, tColor);
      col1 = mix(color1[0], color1[1], threshold);
      col2 = mix(color2[0], color2[1], threshold);
    }
    else if (tColor < (duration + transition) * 2.0) {
      float threshold = smoothstep(duration * 2.0+ transition, 2.0 * (duration + transition), tColor);
      col1 = mix(color1[1], color1[2], threshold);
      col2 = mix(color2[1], color2[2], threshold);
    }
    else if (tColor < (duration + transition) * 3.0) {
      float threshold = smoothstep(3.0 * duration + 2.0 * transition, 3.0 * (duration + transition), tColor);
      col1 = mix(color1[2], color1[0], threshold);
      col2 = mix(color2[2], color2[0], threshold);
    }

    float m = Fx + grain;
    //vec3 color = vec3(Fx+grain)
    vec3 color = mix(col1, col2, m*1.2); // .2 overexposure
    color = mix(color, vec3(1.), tint);

    gl_FragColor = vec4(color, 1.0);
}
