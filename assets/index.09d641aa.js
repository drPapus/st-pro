import{GLTFLoader as t}from"https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js";import{AnimationMixer as e,TubeGeometry as n,MeshBasicMaterial as i,TextureLoader as o,BackSide as s,MirroredRepeatWrapping as a,Mesh as r,PerspectiveCamera as c,HemisphereLight as p,DirectionalLight as l,Scene as d,Color as m,AxesHelper as u,GridHelper as h,WebGLRenderer as w,Clock as g}from"https://unpkg.com/three@0.127.0/build/three.module.js";import{GrannyKnot as f}from"https://cdn.jsdelivr.net/npm/three-full@28.0.2/sources/curves/CurveExtras.js";import{OrbitControls as j}from"https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";async function y(){const n=new t,[i]=await Promise.all([n.loadAsync("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb",(function(t){}),void 0,(function(t){console.error(t)}))]);console.log("Human!",i);const o=function(t){const n=t.scene.children[0],i=t.animations[0],o=new e(n);return o.clipAction(i).play(),n.tick=t=>o.update(t),n}(i);return o.scale.set(.008,.008,.008),o.position.set(0,-2,-6),o.rotation.set(2,0,4),{human:o}}function b(){const t=new f([]),e=new n(t,150,3,32,!0),c=new i({map:(new o).load("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f49e62e3-9d09-4452-a762-f750621d25bd/d77gh18-80e0517b-252c-40f5-95cc-c0d2f0a3bf58.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0OWU2MmUzLTlkMDktNDQ1Mi1hNzYyLWY3NTA2MjFkMjViZFwvZDc3Z2gxOC04MGUwNTE3Yi0yNTJjLTQwZjUtOTVjYy1jMGQyZjBhM2JmNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RMaz2qU-sIFa9O1CcV0i5augrp-v6-DwmVD1pPtbfdI"),side:s});c.map.wrapS=a,c.map.wrapT=a,c.map.repeat.set(30,4);const p=new r(e,c);return p.position.set(0,0,0),console.log("Tube!"),p.tick=()=>{},p}const k=(t,e,n)=>{e.aspect=t.clientWidth/t.clientHeight,e.updateProjectionMatrix(),n.setSize(t.clientWidth,t.clientHeight),n.setPixelRatio(window.devicePixelRatio)};class M{constructor(t,e,n){k(t,e,n),window.addEventListener("resize",(()=>{k(t,e,n),this.onResize()}))}onResize(){}}const L=new g;class z{constructor(t,e,n){this.camera=t,this.scene=e,this.renderer=n,this.updatables=[]}start(){this.renderer.setAnimationLoop((()=>{this.tick(),this.renderer.render(this.scene,this.camera)}))}stop(){this.renderer.setAnimationLoop(null)}tick(){const t=L.getDelta();for(const e of this.updatables)e.tick(t)}}let T,I,N,O;class x{constructor(t){T=function(){const t=b(),e=new c(45,2,.1,1e3);e.position.set(0,0,100);let n=0;return e.tick=()=>{n+=3e-4;let i=t.geometry.parameters.path.getPointAt(n%1),o=t.geometry.parameters.path.getPointAt((n+.01)%1);e.position.set(i.x,i.y,i.z),e.lookAt(o)},e}(),I=function(){const t=new w({antialias:!0});return t.setAnimationLoop((()=>{})),t.physicallyCorrectLights=!0,t}(),N=function(){const t=new d;return t.background=new m("lightblue"),t}(),O=new z(T,N,I),t.append(I.domElement),function(t,e){const n=new j(t,e);n.tick=()=>n.update()}(T,I.domElement);const{ambientLight:e,mainLight:n}=function(){const t=new p("white","darkslategrey",5),e=new l("white",5);return e.position.set(10,10,10),{ambientLight:t,mainLight:e}}(),i=b();N.add(e,n,i),O.updatables.push(T),new M(t,T,I),N.add(function(){const t=new u(30);return t.position.set(-3.5,0,-3.5),t}(),new h(60))}async init(){const{human:t}=await y();O.updatables.push(t),N.add(T),T.add(t)}render(){I.render(N,T)}start(){O.start()}stop(){O.stop()}}(async function(){document.querySelector("#app").innerHTML='\n  <h1>Hello Vite!</h1>\n  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>\n';const t=document.querySelector("#scene-container"),e=new x(t);await e.init(),e.render(),e.start()})().catch((t=>{console.error(t)}));
