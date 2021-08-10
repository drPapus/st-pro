import{GLTFLoader as t}from"https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js";import{AnimationMixer as e,TubeGeometry as n,MeshBasicMaterial as s,TextureLoader as o,BackSide as i,MirroredRepeatWrapping as r,Mesh as a,PerspectiveCamera as c,HemisphereLight as l,DirectionalLight as p,Scene as u,Color as d,AxesHelper as m,GridHelper as h,WebGLRenderer as w,Clock as g}from"https://unpkg.com/three@0.127.0/build/three.module.js";import{GrannyKnot as f}from"https://cdn.jsdelivr.net/npm/three-full@28.0.2/sources/curves/CurveExtras.js";import{OrbitControls as k}from"https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";async function y(){const n=new t,[s]=await Promise.all([n.loadAsync("src/assets/models/falling.glb",(function(t){}),void 0,(function(t){console.error(t)}))]);console.log("Human!",s);const o=function(t){const n=t.scene.children[0],s=t.animations[0],o=new e(n);return o.clipAction(s).play(),n.tick=t=>o.update(t),n}(s);return o.scale.set(.008,.008,.008),o.position.set(0,-2,-6),o.rotation.set(2,0,4),{human:o}}function b(){const t=new f([]),e=new n(t,150,3,32,!0),c=new s({map:(new o).load("src/assets/img/galaxyTexture.jpg"),side:i});c.map.wrapS=r,c.map.wrapT=r,c.map.repeat.set(30,4);const l=new a(e,c);return l.position.set(0,0,0),console.log("Tube!"),l.tick=()=>{},l}const L=(t,e,n)=>{e.aspect=t.clientWidth/t.clientHeight,e.updateProjectionMatrix(),n.setSize(t.clientWidth,t.clientHeight),n.setPixelRatio(window.devicePixelRatio)};class j{constructor(t,e,n){L(t,e,n),window.addEventListener("resize",(()=>{L(t,e,n),this.onResize()}))}onResize(){}}const x=new g;class v{constructor(t,e,n){this.camera=t,this.scene=e,this.renderer=n,this.updatables=[]}start(){this.renderer.setAnimationLoop((()=>{this.tick(),this.renderer.render(this.scene,this.camera)}))}stop(){this.renderer.setAnimationLoop(null)}tick(){const t=x.getDelta();for(const e of this.updatables)e.tick(t)}}let A,P,z,H;class T{constructor(t){A=function(){const t=b(),e=new c(45,2,.1,1e3);e.position.set(0,0,100);let n=0;return e.tick=()=>{n+=3e-4;let s=t.geometry.parameters.path.getPointAt(n%1),o=t.geometry.parameters.path.getPointAt((n+.01)%1);e.position.set(s.x,s.y,s.z),e.lookAt(o)},e}(),P=function(){const t=new w({antialias:!0});return t.setAnimationLoop((()=>{})),t.physicallyCorrectLights=!0,t}(),z=function(){const t=new u;return t.background=new d("lightblue"),t}(),H=new v(A,z,P),t.append(P.domElement),function(t,e){const n=new k(t,e);n.tick=()=>n.update()}(A,P.domElement);const{ambientLight:e,mainLight:n}=function(){const t=new l("white","darkslategrey",5),e=new p("white",5);return e.position.set(10,10,10),{ambientLight:t,mainLight:e}}(),s=b();z.add(e,n,s),H.updatables.push(A),new j(t,A,P),z.add(function(){const t=new m(30);return t.position.set(-3.5,0,-3.5),t}(),new h(60))}async init(){const{human:t}=await y();H.updatables.push(t),z.add(A),A.add(t)}render(){P.render(z,A)}start(){H.start()}stop(){H.stop()}}(async function(){document.querySelector("#app").innerHTML='\n  <h1>Hello Vite!</h1>\n  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>\n';const t=document.querySelector("#scene-container"),e=new T(t);await e.init(),e.render(),e.start()})().catch((t=>{console.error(t)}));
