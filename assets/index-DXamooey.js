(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="170",Cp=0,Tu=1,Rp=2,Sd=1,Ed=2,fi=3,Wn=0,tn=1,He=2,Gi=0,Zs=1,Yo=2,Au=3,Cu=4,Pp=5,fs=100,Lp=101,Ip=102,Dp=103,Np=104,Up=200,Fp=201,Op=202,zp=203,kl=204,Bl=205,kp=206,Bp=207,Hp=208,Gp=209,Vp=210,Wp=211,Xp=212,qp=213,Yp=214,Hl=0,Gl=1,Vl=2,no=3,Wl=4,Xl=5,ql=6,Yl=7,Td=0,$p=1,jp=2,Vi=0,Zp=1,Jp=2,Kp=3,Qp=4,tm=5,em=6,Ad=7,Cd=300,io=301,so=302,$l=303,jl=304,wa=306,ti=1e3,ke=1001,Zl=1002,yn=1003,nm=1004,_r=1005,Jn=1006,Za=1007,ms=1008,Mi=1009,Rd=1010,Pd=1011,$o=1012,Bc=1013,ys=1014,Kn=1015,ar=1016,Hc=1017,Gc=1018,oo=1020,Ld=35902,Id=1021,Dd=1022,zn=1023,Nd=1024,Ud=1025,Js=1026,ro=1027,Vc=1028,Wc=1029,Fd=1030,Xc=1031,qc=1033,Qr=33776,ta=33777,ea=33778,na=33779,Jl=35840,Kl=35841,Ql=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,oc=37809,rc=37810,ac=37811,lc=37812,cc=37813,uc=37814,hc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,xc=37821,ia=36492,yc=36494,_c=36495,Od=36283,vc=36284,Mc=36285,bc=36286,im=3200,sm=3201,zd=0,om=1,gi="",Be="srgb",ho="srgb-linear",Sa="linear",fe="srgb",As=7680,Ru=519,rm=512,am=513,lm=514,kd=515,cm=516,um=517,hm=518,dm=519,Pu=35044,Lu="300 es",yi=2e3,la=2001;class fo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iu=1234567;const No=Math.PI/180,jo=180/Math.PI;function Ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Yc(i,t){return(i%t+t)%t}function fm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pm(i,t,e){return i!==t?(e-i)/(t-i):0}function Uo(i,t,e){return(1-e)*i+e*t}function mm(i,t,e,n){return Uo(i,t,1-Math.exp(-e*n))}function gm(i,t=1){return t-Math.abs(Yc(i,t*2)-t)}function xm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ym(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _m(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vm(i,t){return i+Math.random()*(t-i)}function Mm(i){return i*(.5-Math.random())}function bm(i){i!==void 0&&(Iu=i);let t=Iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wm(i){return i*No}function Sm(i){return i*jo}function Em(i){return(i&i-1)===0&&i!==0}function Tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Am(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cm(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),u=r((t+n)/2),h=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zo={DEG2RAD:No,RAD2DEG:jo,generateUUID:Ss,clamp:ze,euclideanModulo:Yc,mapLinear:fm,inverseLerp:pm,lerp:Uo,damp:mm,pingpong:gm,smoothstep:xm,smootherstep:ym,randInt:_m,randFloat:vm,randFloatSpread:Mm,seededRandom:bm,degToRad:wm,radToDeg:Sm,isPowerOfTwo:Em,ceilPowerOfTwo:Tm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Cm,normalize:Ke,denormalize:Xs};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,o,r,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],v=s[1],b=s[4],y=s[7],T=s[2],E=s[5],A=s[8];return o[0]=r*x+a*v+l*T,o[3]=r*p+a*b+l*E,o[6]=r*m+a*y+l*A,o[1]=c*x+u*v+h*T,o[4]=c*p+u*b+h*E,o[7]=c*m+u*y+h*A,o[2]=d*x+f*v+g*T,o[5]=d*p+f*b+g*E,o[8]=d*m+f*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,d=a*l-u*o,f=c*o-r*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*r)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Jt;function Bd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rm(){const i=Jo("canvas");return i.style.display="block",i}const Du={};function Lo(i){i in Du||(Du[i]=!0,console.warn(i))}function Pm(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Lm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Im(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Nu=[.64,.33,.3,.6,.15,.06],Uu=[.2126,.7152,.0722],Fu=[.3127,.329],Ou=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[ho]:{primaries:Nu,whitePoint:Fu,transfer:Sa,toXYZ:Ou,fromXYZ:zu,luminanceCoefficients:Uu,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Nu,whitePoint:Fu,transfer:fe,toXYZ:Ou,fromXYZ:zu,luminanceCoefficients:Uu,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let Cs;class Dm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=Jo("canvas")),Cs.width=t.width,Cs.height=t.height;const n=Cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=vi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nm=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ka(s[r].image)):o.push(Ka(s[r]))}else o=Ka(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Um=0;class Ve extends fo{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=ke,s=ke,o=Jn,r=ms,a=zn,l=Mi,c=Ve.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Ss(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Cd;Ve.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(f+1)/2,T=(m+1)/2,E=(u+d)/4,A=(h+x)/4,S=(g+p)/4;return b>y&&b>T?b<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(b),s=E/n,o=A/n):y>T?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=E/s,o=S/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=A/o,s=S/o),this.set(n,s,o,e),this}let v=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fm extends fo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends Fm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gd extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Om extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],f=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let p=1-a;const m=l*d+c*f+u*g+h*x,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const T=Math.sqrt(b),E=Math.atan2(T,m*v);p=Math.sin(p*E)/T,a=Math.sin(a*E)/T}const y=a*v;if(l=l*p+d*y,c=c*p+f*y,u=u*p+g*y,h=h*p+x*y,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(o/2),d=l(n/2),f=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ku.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+l*c+r*h-a*u,this.y=n+l*u+a*c-o*h,this.z=s+l*h+o*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new L,ku=new _n;class Ei{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Dn):Dn.fromBufferAttribute(o,r),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vo),Mr.subVectors(this.max,vo),Rs.subVectors(t.a,vo),Ps.subVectors(t.b,vo),Ls.subVectors(t.c,vo),Ci.subVectors(Ps,Rs),Ri.subVectors(Ls,Ps),ns.subVectors(Rs,Ls);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-ns.z,ns.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,ns.z,0,-ns.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-ns.y,ns.x,0];return!tl(e,Rs,Ps,Ls,Mr)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,Rs,Ps,Ls,Mr))?!1:(br.crossVectors(Ci,Ri),e=[br.x,br.y,br.z],tl(e,Rs,Ps,Ls,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ai=[new L,new L,new L,new L,new L,new L,new L,new L],Dn=new L,vr=new Ei,Rs=new L,Ps=new L,Ls=new L,Ci=new L,Ri=new L,ns=new L,vo=new L,Mr=new L,br=new L,is=new L;function tl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){is.fromArray(i,o);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),u=n.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zm=new Ei,Mo=new L,el=new L;class po{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zm.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const e=Mo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(el)),this.expandByPoint(Mo.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new L,nl=new L,wr=new L,Pi=new L,il=new L,Sr=new L,sl=new L;class $c{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nl.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(nl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(wr),a=Pi.dot(this.direction),l=-Pi.dot(wr),c=Pi.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*l-a,d=r*a-l,g=o*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+r*d+2*a)+d*(r*h+d+2*l)+c}else d=o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),f=-h*h+d*(d+2*l)+c);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(nl).addScaledVector(wr,d),f}intersectSphere(t,e){li.subVectors(t.center,this.origin);const n=li.dot(this.direction),s=li.dot(li)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,o){il.subVectors(e,t),Sr.subVectors(n,t),sl.crossVectors(il,Sr);let r=this.direction.dot(sl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Pi.subVectors(this.origin,t);const l=a*this.direction.dot(Sr.crossVectors(Pi,Sr));if(l<0)return null;const c=a*this.direction.dot(il.cross(Pi));if(c<0||l+c>r)return null;const u=-a*Pi.dot(sl);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(t,e,n,s,o,r,a,l,c,u,h,d,f,g,x,p){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,u,h,d,f,g,x,p)}set(t,e,n,s,o,r,a,l,c,u,h,d,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),o=1/Is.setFromMatrixColumn(t,1).length(),r=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,f=r*h,g=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;e[0]=d+x*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;e[0]=d-x*a,e[4]=-r*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=x-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,f=r*h,g=a*u,x=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=r*l,f=r*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=r*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,Bm)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Li.crossVectors(n,un),Li.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Li.crossVectors(n,un)),Li.normalize(),Er.crossVectors(un,Li),s[0]=Li.x,s[4]=Er.x,s[8]=un.x,s[1]=Li.y,s[5]=Er.y,s[9]=un.y,s[2]=Li.z,s[6]=Er.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],b=n[7],y=n[11],T=n[15],E=s[0],A=s[4],S=s[8],w=s[12],M=s[1],R=s[5],N=s[9],U=s[13],F=s[2],Y=s[6],B=s[10],K=s[14],X=s[3],st=s[7],q=s[11],nt=s[15];return o[0]=r*E+a*M+l*F+c*X,o[4]=r*A+a*R+l*Y+c*st,o[8]=r*S+a*N+l*B+c*q,o[12]=r*w+a*U+l*K+c*nt,o[1]=u*E+h*M+d*F+f*X,o[5]=u*A+h*R+d*Y+f*st,o[9]=u*S+h*N+d*B+f*q,o[13]=u*w+h*U+d*K+f*nt,o[2]=g*E+x*M+p*F+m*X,o[6]=g*A+x*R+p*Y+m*st,o[10]=g*S+x*N+p*B+m*q,o[14]=g*w+x*U+p*K+m*nt,o[3]=v*E+b*M+y*F+T*X,o[7]=v*A+b*R+y*Y+T*st,o[11]=v*S+b*N+y*B+T*q,o[15]=v*w+b*U+y*K+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+o*l*h-s*c*h-o*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*u-o*l*u)+p*(+e*c*h-e*a*f-o*r*h+n*r*f+o*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*d+s*r*h-n*r*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],v=h*p*c-x*d*c+x*l*f-a*p*f-h*l*m+a*d*m,b=g*d*c-u*p*c-g*l*f+r*p*f+u*l*m-r*d*m,y=u*x*c-g*h*c+g*a*f-r*x*f-u*a*m+r*h*m,T=g*h*l-u*x*l-g*a*d+r*x*d+u*a*p-r*h*p,E=e*v+n*b+s*y+o*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(x*d*o-h*p*o-x*s*f+n*p*f+h*s*m-n*d*m)*A,t[2]=(a*p*o-x*l*o+x*s*c-n*p*c-a*s*m+n*l*m)*A,t[3]=(h*l*o-a*d*o-h*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=b*A,t[5]=(u*p*o-g*d*o+g*s*f-e*p*f-u*s*m+e*d*m)*A,t[6]=(g*l*o-r*p*o-g*s*c+e*p*c+r*s*m-e*l*m)*A,t[7]=(r*d*o-u*l*o+u*s*c-e*d*c-r*s*f+e*l*f)*A,t[8]=y*A,t[9]=(g*h*o-u*x*o-g*n*f+e*x*f+u*n*m-e*h*m)*A,t[10]=(r*x*o-g*a*o+g*n*c-e*x*c-r*n*m+e*a*m)*A,t[11]=(u*a*o-r*h*o-u*n*c+e*h*c+r*n*f-e*a*f)*A,t[12]=T*A,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*p+e*h*p)*A,t[14]=(g*a*s-r*x*s-g*n*l+e*x*l+r*n*p-e*a*p)*A,t[15]=(r*h*s-u*a*s+u*n*l-e*h*l-r*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,u=r+r,h=a+a,d=o*c,f=o*u,g=o*h,x=r*u,p=r*h,m=a*h,v=l*c,b=l*u,y=l*h,T=n.x,E=n.y,A=n.z;return s[0]=(1-(x+m))*T,s[1]=(f+y)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+b)*A,s[9]=(p-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Is.set(s[0],s[1],s[2]).length();const r=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const c=1/o,u=1/r,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,e.setFromRotationMatrix(Nn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=yi){const l=this.elements,c=2*o/(e-t),u=2*o/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===yi)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===la)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=yi){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(r-o),d=(e+t)*c,f=(n+s)*u;let g,x;if(a===yi)g=(r+o)*h,x=-2*h;else if(a===la)g=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Is=new L,Nn=new Ft,km=new L(0,0,0),Bm=new L(1,1,1),Li=new L,Er=new L,un=new L,Bu=new Ft,Hu=new _n;class en{constructor(t=0,e=0,n=0,s=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hm=0;const Gu=new L,Ds=new _n,ci=new Ft,Tr=new L,bo=new L,Gm=new L,Vm=new _n,Vu=new L(1,0,0),Wu=new L(0,1,0),Xu=new L(0,0,1),qu={type:"added"},Wm={type:"removed"},Ns={type:"childadded",child:null},ol={type:"childremoved",child:null};class Re extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new L,e=new en,n=new _n,s=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Jt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Gu.copy(t).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(bo,Tr,this.up):ci.lookAt(Tr,bo,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ci),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wm),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,Gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new L(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new L,ui=new L,rl=new L,hi=new L,Us=new L,Fs=new L,Yu=new L,al=new L,ll=new L,cl=new L,ul=new me,hl=new me,dl=new me;class On{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Un.subVectors(s,e),ui.subVectors(n,e),rl.subVectors(t,e);const r=Un.dot(Un),a=Un.dot(ui),l=Un.dot(rl),c=ui.dot(ui),u=ui.dot(rl),h=r*c-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(r*u-a*l)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,hi.x),l.addScaledVector(r,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return ul.setScalar(0),hl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),dl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ul,o.x),r.addScaledVector(hl,o.y),r.addScaledVector(dl,o.z),r}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),ui.subVectors(t,e),Un.cross(ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Un.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return On.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Us.subVectors(s,n),Fs.subVectors(o,n),al.subVectors(t,n);const l=Us.dot(al),c=Fs.dot(al);if(l<=0&&c<=0)return e.copy(n);ll.subVectors(t,s);const u=Us.dot(ll),h=Fs.dot(ll);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Us,r);cl.subVectors(t,o);const f=Us.dot(cl),g=Fs.dot(cl);if(g>=0&&f<=g)return e.copy(o);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Fs,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Yu.subVectors(o,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Yu,a);const m=1/(p+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(Us,r).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Yc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=fl(r,o,t+1/3),this.g=fl(r,o,t),this.b=fl(r,o,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return re.fromWorkingColorSpace(Ye.copy(this),t),Math.round(ze(Ye.r*255,0,255))*65536+Math.round(ze(Ye.g*255,0,255))*256+Math.round(ze(Ye.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,o=Ye.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(s-o)/h+(s<o?6:0);break;case s:l=(o-n)/h+2;break;case o:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Be){re.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(Ar);const n=Uo(Ii.h,Ar.h,e),s=Uo(Ii.s,Ar.s,e),o=Uo(Ii.l,Ar.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new _t;_t.NAMES=Vd;let Xm=0;class mo extends fo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ss(),this.name="",this.blending=Zs,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Bl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kl&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xn extends mo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new L,Cr=new rt;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pu,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),o=Ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pu&&(t.usage=this.usage),t}}class Wd extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xd extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qm=0;const Sn=new Ft,pl=new Re,Os=new L,hn=new Ei,wo=new Ei,Fe=new L;class Se extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?Xd:Wd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];hn.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(hn.min,wo.min),hn.expandByPoint(Fe),Fe.addVectors(hn.max,wo.max),hn.expandByPoint(Fe)):(hn.expandByPoint(wo.min),hn.expandByPoint(wo.max))}hn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Fe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fe.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(t,c),Fe.add(Os)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new L,l[S]=new L;const c=new L,u=new L,h=new L,d=new rt,f=new rt,g=new rt,x=new L,p=new L;function m(S,w,M){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(o,S),f.fromBufferAttribute(o,w),g.fromBufferAttribute(o,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[S].add(x),a[w].add(x),a[M].add(x),l[S].add(p),l[w].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,w=v.length;S<w;++S){const M=v[S],R=M.start,N=M.count;for(let U=R,F=R+N;U<F;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new L,y=new L,T=new L,E=new L;function A(S){T.fromBufferAttribute(s,S),E.copy(T);const w=a[S];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),y.crossVectors(E,w);const R=y.dot(l[S])<0?-1:1;r.setXYZW(S,b.x,b.y,b.z,R)}for(let S=0,w=v.length;S<w;++S){const M=v[S],R=M.start,N=M.count;for(let U=R,F=R+N;U<F;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,o=new L,r=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new we(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const o=t.morphAttributes;for(const c in o){const u=[],h=o[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new Ft,ss=new $c,Rr=new po,ju=new L,Pr=new L,Lr=new L,Ir=new L,ml=new L,Dr=new L,Zu=new L,Nr=new L;class ht extends Re{constructor(t=new Se,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Dr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],h=o[l];u!==0&&(ml.fromBufferAttribute(h,t),r?Dr.addScaledVector(ml,u):Dr.addScaledVector(ml.sub(e),u))}e.add(Dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(o),ss.copy(t.ray).recast(t.near),!(Rr.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Rr,ju)===null||ss.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&($u.copy(o).invert(),ss.copy(t.ray).applyMatrix4($u),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=b;y<T;y+=3){const E=a.getX(y),A=a.getX(y+1),S=a.getX(y+2);s=Ur(this,m,t,n,c,u,h,E,A,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const v=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);s=Ur(this,r,t,n,c,u,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,T=b;y<T;y+=3){const E=y,A=y+1,S=y+2;s=Ur(this,m,t,n,c,u,h,E,A,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const v=p,b=p+1,y=p+2;s=Ur(this,r,t,n,c,u,h,v,b,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ym(i,t,e,n,s,o,r,a){let l;if(t.side===tn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Wn,a),l===null)return null;Nr.copy(a),Nr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:i}}function Ur(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Ir);const u=Ym(i,t,e,n,Pr,Lr,Ir,Zu);if(u){const h=new L;On.getBarycoord(Zu,Pr,Lr,Ir,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,h,new rt)),o&&(u.uv1=On.getInterpolatedAttribute(o,a,l,c,h,new rt)),r&&(u.normal=On.getInterpolatedAttribute(r,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};On.getNormal(Pr,Lr,Ir,d.normal),u.face=d,u.barycoord=h}return u}class Ge extends Se{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(h,2));function g(x,p,m,v,b,y,T,E,A,S,w){const M=y/A,R=T/S,N=y/2,U=T/2,F=E/2,Y=A+1,B=S+1;let K=0,X=0;const st=new L;for(let q=0;q<B;q++){const nt=q*R-U;for(let wt=0;wt<Y;wt++){const zt=wt*M-N;st[x]=zt*v,st[p]=nt*b,st[m]=F,c.push(st.x,st.y,st.z),st[x]=0,st[p]=0,st[m]=E>0?1:-1,u.push(st.x,st.y,st.z),h.push(wt/A),h.push(1-q/S),K+=1}}for(let q=0;q<S;q++)for(let nt=0;nt<A;nt++){const wt=d+nt+Y*q,zt=d+nt+Y*(q+1),G=d+(nt+1)+Y*(q+1),Q=d+(nt+1)+Y*q;l.push(wt,zt,Q),l.push(zt,G,Q),X+=6}a.addGroup(f,X,w),f+=X,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=ao(i[e]);for(const s in n)t[s]=n[s]}return t}function $m(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const jm={clone:ao,merge:Qe};var Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends mo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=$m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yd extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new L,Ju=new rt,Ku=new rt;class gn extends Yd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,Ku),e.subVectors(Ku,Ju)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zs=-90,ks=1;class Km extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(zs,ks,t,e);s.layers=this.layers,this.add(s);const o=new gn(zs,ks,t,e);o.layers=this.layers,this.add(o);const r=new gn(zs,ks,t,e);r.layers=this.layers,this.add(r);const a=new gn(zs,ks,t,e);a.layers=this.layers,this.add(a);const l=new gn(zs,ks,t,e);l.layers=this.layers,this.add(l);const c=new gn(zs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $d extends Ve{constructor(t,e,n,s,o,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:io,super(t,e,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qm extends _s{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $d(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ge(5,5,5),o=new ji({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Gi});o.uniforms.tEquirect.value=e;const r=new ht(s,o),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=Jn),new Km(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const gl=new L,t0=new L,e0=new Jt;class cs{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=gl.subVectors(n,e).cross(t0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||e0.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new po,Fr=new L;class lo{constructor(t=new cs,e=new cs,n=new cs,s=new cs,o=new cs,r=new cs){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],v=s[13],b=s[14],y=s[15];if(n[0].setComponents(l-o,d-c,p-f,y-m).normalize(),n[1].setComponents(l+o,d+c,p+f,y+m).normalize(),n[2].setComponents(l+r,d+u,p+g,y+v).normalize(),n[3].setComponents(l-r,d-u,p-g,y-v).normalize(),n[4].setComponents(l-a,d-h,p-x,y-b).normalize(),e===yi)n[5].setComponents(l+a,d+h,p+x,y+b).normalize();else if(e===la)n[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function n0(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Ee extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const v=m*d-r;for(let b=0;b<c;b++){const y=b*h-o;g.push(y,-v,0),x.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const b=v+c*m,y=v+c*(m+1),T=v+1+c*(m+1),E=v+1+c*m;f.push(b,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,T0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,X0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,j0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:o0,alphamap_pars_fragment:r0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:u0,batching_pars_vertex:h0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:x0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:M0,color_fragment:b0,color_pars_fragment:w0,color_pars_vertex:S0,color_vertex:E0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:C0,displacementmap_pars_vertex:R0,displacementmap_vertex:P0,emissivemap_fragment:L0,emissivemap_pars_fragment:I0,colorspace_fragment:D0,colorspace_pars_fragment:N0,envmap_fragment:U0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:j0,envmap_vertex:k0,fog_vertex:B0,fog_pars_vertex:H0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:W0,lightmap_pars_fragment:X0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:Y0,lights_pars_begin:$0,lights_toon_fragment:Z0,lights_toon_pars_fragment:J0,lights_phong_fragment:K0,lights_phong_pars_fragment:Q0,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:hg,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:yg,morphtarget_vertex:_g,normal_fragment_begin:vg,normal_fragment_maps:Mg,normal_pars_fragment:bg,normal_pars_vertex:wg,normal_vertex:Sg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Ig,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:kg,shadowmap_vertex:Bg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:$g,tonemapping_pars_fragment:jg,transmission_fragment:Zg,transmission_pars_fragment:Jg,uv_pars_fragment:Kg,uv_pars_vertex:Qg,uv_vertex:tx,worldpos_vertex:ex,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:ox,cube_vert:rx,cube_frag:ax,depth_vert:lx,depth_frag:cx,distanceRGBA_vert:ux,distanceRGBA_frag:hx,equirect_vert:dx,equirect_frag:fx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:xx,meshlambert_vert:yx,meshlambert_frag:_x,meshmatcap_vert:vx,meshmatcap_frag:Mx,meshnormal_vert:bx,meshnormal_frag:wx,meshphong_vert:Sx,meshphong_frag:Ex,meshphysical_vert:Tx,meshphysical_frag:Ax,meshtoon_vert:Cx,meshtoon_frag:Rx,points_vert:Px,points_frag:Lx,shadow_vert:Ix,shadow_frag:Dx,sprite_vert:Nx,sprite_frag:Ux},ft={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Zn={basic:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new _t(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new _t(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Qe([ft.points,ft.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Qe([ft.common,ft.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Qe([ft.sprite,ft.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Qe([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Qe([ft.lights,ft.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Zn.physical={uniforms:Qe([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Or={r:0,b:0,g:0},rs=new en,Fx=new Ft;function Ox(i,t,e,n,s,o,r){const a=new _t(0);let l=o===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b}function x(v){let b=!1;const y=g(v);y===null?m(a,l):y&&y.isColor&&(m(y,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===wa)?(u===void 0&&(u=new ht(new Ge(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ao(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),rs.copy(b.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(rs)),u.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ht(new Ee(2,2),new ji({name:"BackgroundMaterial",uniforms:ao(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(Or,qd(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,b,r)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:p}}function zx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(M,R,N,U,F){let Y=!1;const B=h(U,N,R);o!==B&&(o=B,c(o.object)),Y=f(M,U,N,F),Y&&g(M,U,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(M,R,N,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,N){const U=N.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let Y=F[R.id];Y===void 0&&(Y={},F[R.id]=Y);let B=Y[U];return B===void 0&&(B=d(l()),Y[U]=B),B}function d(M){const R=[],N=[],U=[];for(let F=0;F<e;F++)R[F]=0,N[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,R,N,U){const F=o.attributes,Y=R.attributes;let B=0;const K=N.getAttributes();for(const X in K)if(K[X].location>=0){const q=F[X];let nt=Y[X];if(nt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),q===void 0||q.attribute!==nt||nt&&q.data!==nt.data)return!0;B++}return o.attributesNum!==B||o.index!==U}function g(M,R,N,U){const F={},Y=R.attributes;let B=0;const K=N.getAttributes();for(const X in K)if(K[X].location>=0){let q=Y[X];q===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const nt={};nt.attribute=q,q&&q.data&&(nt.data=q.data),F[X]=nt,B++}o.attributes=F,o.attributesNum=B,o.index=U}function x(){const M=o.newAttributes;for(let R=0,N=M.length;R<N;R++)M[R]=0}function p(M){m(M,0)}function m(M,R){const N=o.newAttributes,U=o.enabledAttributes,F=o.attributeDivisors;N[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),F[M]!==R&&(i.vertexAttribDivisor(M,R),F[M]=R)}function v(){const M=o.newAttributes,R=o.enabledAttributes;for(let N=0,U=R.length;N<U;N++)R[N]!==M[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function b(M,R,N,U,F,Y,B){B===!0?i.vertexAttribIPointer(M,R,N,F,Y):i.vertexAttribPointer(M,R,N,U,F,Y)}function y(M,R,N,U){x();const F=U.attributes,Y=N.getAttributes(),B=R.defaultAttributeValues;for(const K in Y){const X=Y[K];if(X.location>=0){let st=F[K];if(st===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const q=st.normalized,nt=st.itemSize,wt=t.get(st);if(wt===void 0)continue;const zt=wt.buffer,G=wt.type,Q=wt.bytesPerElement,ct=G===i.INT||G===i.UNSIGNED_INT||st.gpuType===Bc;if(st.isInterleavedBufferAttribute){const it=st.data,Ct=it.stride,Dt=st.offset;if(it.isInstancedInterleavedBuffer){for(let kt=0;kt<X.locationSize;kt++)m(X.location+kt,it.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let kt=0;kt<X.locationSize;kt++)p(X.location+kt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let kt=0;kt<X.locationSize;kt++)b(X.location+kt,nt/X.locationSize,G,q,Ct*Q,(Dt+nt/X.locationSize*kt)*Q,ct)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<X.locationSize;it++)m(X.location+it,st.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<X.locationSize;it++)p(X.location+it);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let it=0;it<X.locationSize;it++)b(X.location+it,nt/X.locationSize,G,q,nt*Q,nt/X.locationSize*it*Q,ct)}}else if(B!==void 0){const q=B[K];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(X.location,q);break;case 3:i.vertexAttrib3fv(X.location,q);break;case 4:i.vertexAttrib4fv(X.location,q);break;default:i.vertexAttrib1fv(X.location,q)}}}}v()}function T(){S();for(const M in n){const R=n[M];for(const N in R){const U=R[N];for(const F in U)u(U[F].object),delete U[F];delete R[N]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const N in R){const U=R[N];for(const F in U)u(U[F].object),delete U[F];delete R[N]}delete n[M.id]}function A(M){for(const R in n){const N=n[R];if(N[M.id]===void 0)continue;const U=N[M.id];for(const F in U)u(U[F].object),delete U[F];delete N[M.id]}}function S(){w(),r=!0,o!==s&&(o=s,c(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function kx(i,t,e){let n;function s(c){n=c}function o(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function r(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bx(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const S=A===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Kn&&!S)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function Hx(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new cs,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||o&&!p)o?u(null):c();else{const v=o?0:n,b=v*4;let y=m.clippingState||null;l.value=y,y=u(g,d,b,f);for(let T=0;T!==b;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,y=f;b!==x;++b,y+=4)r.copy(h[b]).applyMatrix4(v,a),r.normal.toArray(p,y),p[y+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Gx(i){let t=new WeakMap;function e(r,a){return a===$l?r.mapping=io:a===jl&&(r.mapping=so),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===$l||a===jl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Qm(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Zd extends Yd{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,Qu=[.125,.215,.35,.446,.526,.582],ps=20,xl=new Zd,th=new _t;let yl=null,_l=0,vl=0,Ml=!1;const us=(1+Math.sqrt(5))/2,Bs=1/us,eh=[new L(-us,Bs,0),new L(us,Bs,0),new L(-Bs,0,us),new L(Bs,0,us),new L(0,us,-Bs),new L(0,us,Bs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class nh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,_l,vl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===io||t.mapping===so?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:ar,format:zn,colorSpace:ho,depthBuffer:!1},s=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(o)),this._blurMaterial=Wx(o,t,e)}return s}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,n,s){const a=new gn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(th),u.toneMapping=Vi,u.autoClear=!1;const f=new Xn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ht(new Ge,f);let x=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(th),x=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const b=this._cubeSize;zr(s,v*b,m>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===io||t.mapping===so;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new ht(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,xl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=eh[(s-o-1)%eh.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ps-1),x=o/g,p=isFinite(o)?1+Math.floor(u*x):ps;p>ps&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ps}`);const m=[];let v=0;for(let A=0;A<ps;++A){const S=A/x,w=Math.exp(-S*S/2);m.push(w),A===0?v+=w:A<p&&(v+=2*w)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const y=this._sizeLods[s],T=3*y*(s>b-Ys?s-b+Ys:0),E=4*(this._cubeSize-y);zr(e,T,E,3*y,2*y),l.setRenderTarget(e),l.render(h,xl)}}function Vx(i){const t=[],e=[],n=[];let s=i;const o=i-Ys+1+Qu.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Ys?l=Qu[r-i+Ys-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*f),b=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,S=E>2?0:-1,w=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];v.set(w,x*g*E),b.set(d,p*g*E);const M=[E,E,E,E,E,E];y.set(M,m*g*E)}const T=new Se;T.setAttribute("position",new we(v,x)),T.setAttribute("uv",new we(b,p)),T.setAttribute("faceIndex",new we(y,m)),t.push(T),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(i,t,e){const n=new _s(i,t,e);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wx(i,t,e){const n=new Float32Array(ps),s=new L(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function sh(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function oh(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$l||l===jl,u=l===io||l===so;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new nh(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new nh(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function qx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Lo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yx(i,t,e,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let b=0,y=v.length;b<y;b+=3){const T=v[b+0],E=v[b+1],A=v[b+2];d.push(T,E,E,A,A,T)}}else if(g!==void 0){const v=g.array;x=g.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const T=b+0,E=b+1,A=b+2;d.push(T,E,E,A,A,T)}}else return;const p=new(Bd(d)?Xd:Wd)(d,1);p.version=x;const m=o.get(h);m&&t.remove(m),o.set(h,p)}function u(h){const d=o.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $x(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,d*r,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function h(d,f,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/r,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*x[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zx(i,t,e){const n=new WeakMap,s=new me;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*T*4*h),A=new Gd(E,y,T,h);A.type=Kn,A.needsUpdate=!0;const S=b*4;for(let M=0;M<h;M++){const R=p[M],N=m[M],U=v[M],F=y*T*4*M;for(let Y=0;Y<R.count;Y++){const B=Y*S;f===!0&&(s.fromBufferAttribute(R,Y),E[F+B+0]=s.x,E[F+B+1]=s.y,E[F+B+2]=s.z,E[F+B+3]=0),g===!0&&(s.fromBufferAttribute(N,Y),E[F+B+4]=s.x,E[F+B+5]=s.y,E[F+B+6]=s.z,E[F+B+7]=0),x===!0&&(s.fromBufferAttribute(U,Y),E[F+B+8]=s.x,E[F+B+9]=s.y,E[F+B+10]=s.z,E[F+B+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new rt(y,T)},n.set(a,d),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Jx(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Jd extends Ve{constructor(t,e,n,s,o,r,a,l,c,u=Js){if(u!==Js&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Js&&(n=ys),n===void 0&&u===ro&&(n=oo),super(null,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Kd=new Ve,rh=new Jd(1,1),Qd=new Gd,tf=new Om,ef=new $d,ah=[],lh=[],ch=new Float32Array(16),uh=new Float32Array(9),hh=new Float32Array(4);function go(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=ah[s];if(o===void 0&&(o=new Float32Array(s),ah[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ea(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function ty(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function ey(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function ny(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),Ue(e,n)}}function iy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),Ue(e,n)}}function sy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;ch.set(n),i.uniformMatrix4fv(this.addr,!1,ch),Ue(e,n)}}function oy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ry(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function ay(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function ly(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function cy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function uy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function dy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function fy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(rh.compareFunction=kd,o=rh):o=Kd,e.setTexture2D(t||o,s)}function py(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tf,s)}function my(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ef,s)}function gy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qd,s)}function xy(i){switch(i){case 5126:return Kx;case 35664:return Qx;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return oy;case 35667:case 35671:return ry;case 35668:case 35672:return ay;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return uy;case 36295:return hy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}function yy(i,t){i.uniform1fv(this.addr,t)}function _y(i,t){const e=go(t,this.size,2);i.uniform2fv(this.addr,e)}function vy(i,t){const e=go(t,this.size,3);i.uniform3fv(this.addr,e)}function My(i,t){const e=go(t,this.size,4);i.uniform4fv(this.addr,e)}function by(i,t){const e=go(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wy(i,t){const e=go(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sy(i,t){const e=go(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ey(i,t){i.uniform1iv(this.addr,t)}function Ty(i,t){i.uniform2iv(this.addr,t)}function Ay(i,t){i.uniform3iv(this.addr,t)}function Cy(i,t){i.uniform4iv(this.addr,t)}function Ry(i,t){i.uniform1uiv(this.addr,t)}function Py(i,t){i.uniform2uiv(this.addr,t)}function Ly(i,t){i.uniform3uiv(this.addr,t)}function Iy(i,t){i.uniform4uiv(this.addr,t)}function Dy(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Kd,o[r])}function Ny(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||tf,o[r])}function Uy(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||ef,o[r])}function Fy(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Qd,o[r])}function Oy(i){switch(i){case 5126:return yy;case 35664:return _y;case 35665:return vy;case 35666:return My;case 35674:return by;case 35675:return wy;case 35676:return Sy;case 5124:case 35670:return Ey;case 35667:case 35671:return Ty;case 35668:case 35672:return Ay;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Py;case 36295:return Ly;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Fy}}class zy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xy(e.type)}}class ky{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Oy(e.type)}}class By{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function dh(i,t){i.seq.push(t),i.map[t.id]=t}function Hy(i,t,e){const n=i.name,s=n.length;for(bl.lastIndex=0;;){const o=bl.exec(n),r=bl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){dh(e,c===void 0?new zy(a,i,t):new ky(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new By(a),dh(e,h)),e=h}}}class sa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Hy(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function fh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gy=37297;let Vy=0;function Wy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const ph=new Jt;function Xy(i){re._getMatrix(ph,re.workingColorSpace,i);const t=`mat3( ${ph.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Sa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Wy(i.getShaderSource(t),r)}else return s}function qy(i,t){const e=Xy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yy(i,t){let e;switch(t){case Zp:e="Linear";break;case Jp:e="Reinhard";break;case Kp:e="Cineon";break;case Qp:e="ACESFilmic";break;case em:e="AgX";break;case Ad:e="Neutral";break;case tm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const kr=new L;function $y(){re.getLuminanceCoefficients(kr);const i=kr.x.toFixed(4),t=kr.y.toFixed(4),e=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Zy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Io(i){return i!==""}function gh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(Ky,t_)}const Qy=new Map;function t_(i,t){let e=te[t];if(e===void 0){const n=Qy.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(e_,n_)}function n_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function _h(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ed?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function s_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case io:case so:t="ENVMAP_TYPE_CUBE";break;case wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case so:t="ENVMAP_MODE_REFRACTION";break}return t}function r_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:t="ENVMAP_BLENDING_MULTIPLY";break;case $p:t="ENVMAP_BLENDING_MIX";break;case jp:t="ENVMAP_BLENDING_ADD";break}return t}function a_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=i_(e),c=s_(e),u=o_(e),h=r_(e),d=a_(e),f=jy(e),g=Zy(o),x=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Io).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`)):(p=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),m=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?te.tonemapping_pars_fragment:"",e.toneMapping!==Vi?Yy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,qy("linearToOutputTexel",e.outputColorSpace),$y(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),r=wc(r),r=gh(r,e),r=xh(r,e),a=wc(a),a=gh(a,e),a=xh(a,e),r=yh(r),a=yh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+p+r,y=v+m+a,T=fh(s,s.VERTEX_SHADER,b),E=fh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(E).trim();let Y=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{const K=mh(s,T,"vertex"),X=mh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+K+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||F==="")&&(B=!1);B&&(R.diagnostics={runnable:Y,programLog:N,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(T),s.deleteShader(E),S=new sa(s,x),w=Jy(s,x)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Gy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let c_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new h_(t),e.set(t,n)),n}}class h_{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}}function d_(i,t,e,n,s,o,r){const a=new jc,l=new u_,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,M,R,N,U){const F=N.fog,Y=U.geometry,B=w.isMeshStandardMaterial?N.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),X=K&&K.mapping===wa?K.image.height:null,st=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=q!==void 0?q.length:0;let wt=0;Y.morphAttributes.position!==void 0&&(wt=1),Y.morphAttributes.normal!==void 0&&(wt=2),Y.morphAttributes.color!==void 0&&(wt=3);let zt,G,Q,ct;if(st){const ue=Zn[st];zt=ue.vertexShader,G=ue.fragmentShader}else zt=w.vertexShader,G=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),ct=l.getFragmentShaderID(w);const it=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,kt=U.isBatchedMesh===!0,qt=!!w.map,J=!!w.matcap,at=!!K,D=!!w.aoMap,Nt=!!w.lightMap,ot=!!w.bumpMap,bt=!!w.normalMap,dt=!!w.displacementMap,Ht=!!w.emissiveMap,vt=!!w.metalnessMap,I=!!w.roughnessMap,C=w.anisotropy>0,H=w.clearcoat>0,j=w.dispersion>0,et=w.iridescence>0,Z=w.sheen>0,Rt=w.transmission>0,pt=C&&!!w.anisotropyMap,Mt=H&&!!w.clearcoatMap,ne=H&&!!w.clearcoatNormalMap,lt=H&&!!w.clearcoatRoughnessMap,St=et&&!!w.iridescenceMap,Gt=et&&!!w.iridescenceThicknessMap,Xt=Z&&!!w.sheenColorMap,Et=Z&&!!w.sheenRoughnessMap,oe=!!w.specularMap,Qt=!!w.specularColorMap,ye=!!w.specularIntensityMap,O=Rt&&!!w.transmissionMap,mt=Rt&&!!w.thicknessMap,$=!!w.gradientMap,tt=!!w.alphaMap,yt=w.alphaTest>0,gt=!!w.alphaHash,jt=!!w.extensions;let Pe=Vi;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const Xe={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:zt,fragmentShader:G,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:kt,batchingColor:kt&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ho,alphaToCoverage:!!w.alphaToCoverage,map:qt,matcap:J,envMap:at,envMapMode:at&&K.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:Nt,bumpMap:ot,normalMap:bt,displacementMap:d&&dt,emissiveMap:Ht,normalMapObjectSpace:bt&&w.normalMapType===om,normalMapTangentSpace:bt&&w.normalMapType===zd,metalnessMap:vt,roughnessMap:I,anisotropy:C,anisotropyMap:pt,clearcoat:H,clearcoatMap:Mt,clearcoatNormalMap:ne,clearcoatRoughnessMap:lt,dispersion:j,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:Gt,sheen:Z,sheenColorMap:Xt,sheenRoughnessMap:Et,specularMap:oe,specularColorMap:Qt,specularIntensityMap:ye,transmission:Rt,transmissionMap:O,thicknessMap:mt,gradientMap:$,opaque:w.transparent===!1&&w.blending===Zs&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:gt,combine:w.combine,mapUv:qt&&x(w.map.channel),aoMapUv:D&&x(w.aoMap.channel),lightMapUv:Nt&&x(w.lightMap.channel),bumpMapUv:ot&&x(w.bumpMap.channel),normalMapUv:bt&&x(w.normalMap.channel),displacementMapUv:dt&&x(w.displacementMap.channel),emissiveMapUv:Ht&&x(w.emissiveMap.channel),metalnessMapUv:vt&&x(w.metalnessMap.channel),roughnessMapUv:I&&x(w.roughnessMap.channel),anisotropyMapUv:pt&&x(w.anisotropyMap.channel),clearcoatMapUv:Mt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(w.sheenRoughnessMap.channel),specularMapUv:oe&&x(w.specularMap.channel),specularColorMapUv:Qt&&x(w.specularColorMap.channel),specularIntensityMapUv:ye&&x(w.specularIntensityMap.channel),transmissionMapUv:O&&x(w.transmissionMap.channel),thicknessMapUv:mt&&x(w.thicknessMap.channel),alphaMapUv:tt&&x(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(bt||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(qt||tt),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:qt&&w.map.isVideoTexture===!0&&re.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&re.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===He,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:jt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&w.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(v(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const M=g[w.type];let R;if(M){const N=Zn[M];R=jm.clone(N.uniforms)}else R=w.uniforms;return R}function T(w,M){let R;for(let N=0,U=u.length;N<U;N++){const F=u[N];if(F.cacheKey===M){R=F,++R.usedTimes;break}}return R===void 0&&(R=new l_(i,M,w,o),u.push(R)),R}function E(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function S(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:S}}function f_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,d,f,g,x,p){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=p),t++,m}function a(h,d,f,g,x,p){const m=r(h,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(h,d,f,g,x,p){const m=r(h,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||p_),n.length>1&&n.sort(d||vh),s.length>1&&s.sort(d||vh)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:u,sort:c}}function m_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Mh,i.set(n,[r])):s>=o.length?(r=new Mh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new _t};break;case"SpotLight":e={position:new L,direction:new L,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function x_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let y_=0;function __(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){const t=new g_,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,o=new Ft,r=new Ft;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,b=0,y=0,T=0,E=0,A=0;c.sort(__);for(let w=0,M=c.length;w<M;w++){const R=c[w],N=R.color,U=R.intensity,F=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*U,h+=N.g*U,d+=N.b*U;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],U);A++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,X=e.get(R);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=B,f++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(N).multiplyScalar(U),B.distance=F,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[x]=B;const K=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,K.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=K.matrix,R.castShadow){const X=e.get(R);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Y,y++}x++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(N).multiplyScalar(U),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=B,p++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const K=R.shadow,X=e.get(R);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(U),B.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==f||S.pointLength!==g||S.spotLength!==x||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==v||S.numPointShadows!==b||S.numSpotShadows!==y||S.numSpotMaps!==T||S.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,S.directionalLength=f,S.pointLength=g,S.spotLength=x,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=v,S.numPointShadows=b,S.numSpotShadows=y,S.numSpotMaps=T,S.numLightProbes=A,n.version=y_++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const b=c[m];if(b.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(b.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),r.identity(),o.copy(b.matrixWorld),o.premultiply(p),r.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function bh(i){const t=new v_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function M_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new bh(i),t.set(s,[a])):o>=r.length?(a=new bh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class b_ extends mo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class w_ extends mo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T_(i,t,e){let n=new lo;const s=new rt,o=new rt,r=new me,a=new b_({depthPacking:sm}),l=new w_,c={},u=e.maxTextureSize,h={[Wn]:tn,[tn]:Wn,[He]:He},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:S_,fragmentShader:E_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ht(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let m=this.type;this.render=function(E,A,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Gi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==fi&&this.type===fi,F=m===fi&&this.type!==fi;for(let Y=0,B=E.length;Y<B;Y++){const K=E[Y],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const st=X.getFrameExtents();if(s.multiply(st),o.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/st.x),s.x=o.x*st.x,X.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/st.y),s.y=o.y*st.y,X.mapSize.y=o.y)),X.map===null||U===!0||F===!0){const nt=this.type!==fi?{minFilter:yn,magFilter:yn}:{};X.map!==null&&X.map.dispose(),X.map=new _s(s.x,s.y,nt),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const q=X.getViewportCount();for(let nt=0;nt<q;nt++){const wt=X.getViewport(nt);r.set(o.x*wt.x,o.y*wt.y,o.x*wt.z,o.y*wt.w),N.viewport(r),X.updateMatrices(K,nt),n=X.getFrustum(),y(A,S,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===fi&&v(X,S),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,M,R)};function v(E,A){const S=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _s(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,S,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,S,f,x,null)}function b(E,A,S,w){let M=null;const R=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=S.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,U=A.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let Y=F[U];Y===void 0&&(Y=M.clone(),F[U]=Y,A.addEventListener("dispose",T)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,w===fi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=S}return M}function y(E,A,S,w,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===fi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const U=t.update(E),F=E.material;if(Array.isArray(F)){const Y=U.groups;for(let B=0,K=Y.length;B<K;B++){const X=Y[B],st=F[X.materialIndex];if(st&&st.visible){const q=b(E,st,w,M);E.onBeforeShadow(i,E,A,S,U,q,X),i.renderBufferDirect(S,null,U,q,E,X),E.onAfterShadow(i,E,A,S,U,q,X)}}}else if(F.visible){const Y=b(E,F,w,M);E.onBeforeShadow(i,E,A,S,U,Y,null),i.renderBufferDirect(S,null,U,Y,E,null),E.onAfterShadow(i,E,A,S,U,Y,null)}}const N=E.children;for(let U=0,F=N.length;U<F;U++)y(N[U],A,S,w,M)}function T(E){E.target.removeEventListener("dispose",T);for(const S in c){const w=c[S],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const A_={[Hl]:Gl,[Vl]:ql,[Wl]:Yl,[no]:Xl,[Gl]:Hl,[ql]:Vl,[Yl]:Wl,[Xl]:no};function C_(i,t){function e(){let O=!1;const mt=new me;let $=null;const tt=new me(0,0,0,0);return{setMask:function(yt){$!==yt&&!O&&(i.colorMask(yt,yt,yt,yt),$=yt)},setLocked:function(yt){O=yt},setClear:function(yt,gt,jt,Pe,Xe){Xe===!0&&(yt*=Pe,gt*=Pe,jt*=Pe),mt.set(yt,gt,jt,Pe),tt.equals(mt)===!1&&(i.clearColor(yt,gt,jt,Pe),tt.copy(mt))},reset:function(){O=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,$=null,tt=null,yt=null;return{setReversed:function(gt){if(mt!==gt){const jt=t.get("EXT_clip_control");mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Pe=yt;yt=null,this.setClear(Pe)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?it(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(gt){$!==gt&&!O&&(i.depthMask(gt),$=gt)},setFunc:function(gt){if(mt&&(gt=A_[gt]),tt!==gt){switch(gt){case Hl:i.depthFunc(i.NEVER);break;case Gl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case no:i.depthFunc(i.LEQUAL);break;case Wl:i.depthFunc(i.EQUAL);break;case Xl:i.depthFunc(i.GEQUAL);break;case ql:i.depthFunc(i.GREATER);break;case Yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=gt}},setLocked:function(gt){O=gt},setClear:function(gt){yt!==gt&&(mt&&(gt=1-gt),i.clearDepth(gt),yt=gt)},reset:function(){O=!1,$=null,tt=null,yt=null,mt=!1}}}function s(){let O=!1,mt=null,$=null,tt=null,yt=null,gt=null,jt=null,Pe=null,Xe=null;return{setTest:function(ue){O||(ue?it(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!O&&(i.stencilMask(ue),mt=ue)},setFunc:function(ue,Ln,oi){($!==ue||tt!==Ln||yt!==oi)&&(i.stencilFunc(ue,Ln,oi),$=ue,tt=Ln,yt=oi)},setOp:function(ue,Ln,oi){(gt!==ue||jt!==Ln||Pe!==oi)&&(i.stencilOp(ue,Ln,oi),gt=ue,jt=Ln,Pe=oi)},setLocked:function(ue){O=ue},setClear:function(ue){Xe!==ue&&(i.clearStencil(ue),Xe=ue)},reset:function(){O=!1,mt=null,$=null,tt=null,yt=null,gt=null,jt=null,Pe=null,Xe=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,b=null,y=null,T=null,E=null,A=new _t(0,0,0),S=0,w=!1,M=null,R=null,N=null,U=null,F=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=K>=2);let st=null,q={};const nt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),zt=new me().fromArray(nt),G=new me().fromArray(wt);function Q(O,mt,$,tt){const yt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(O,gt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<$;jt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(mt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return gt}const ct={};ct[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),it(i.DEPTH_TEST),r.setFunc(no),ot(!1),bt(Tu),it(i.CULL_FACE),D(Gi);function it(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Ct(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Dt(O,mt){return h[O]!==mt?(i.bindFramebuffer(O,mt),h[O]=mt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function kt(O,mt){let $=f,tt=!1;if(O){$=d.get(mt),$===void 0&&($=[],d.set(mt,$));const yt=O.textures;if($.length!==yt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,jt=yt.length;gt<jt;gt++)$[gt]=i.COLOR_ATTACHMENT0+gt;$.length=yt.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function qt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const J={[fs]:i.FUNC_ADD,[Lp]:i.FUNC_SUBTRACT,[Ip]:i.FUNC_REVERSE_SUBTRACT};J[Dp]=i.MIN,J[Np]=i.MAX;const at={[Up]:i.ZERO,[Fp]:i.ONE,[Op]:i.SRC_COLOR,[kl]:i.SRC_ALPHA,[Vp]:i.SRC_ALPHA_SATURATE,[Hp]:i.DST_COLOR,[kp]:i.DST_ALPHA,[zp]:i.ONE_MINUS_SRC_COLOR,[Bl]:i.ONE_MINUS_SRC_ALPHA,[Gp]:i.ONE_MINUS_DST_COLOR,[Bp]:i.ONE_MINUS_DST_ALPHA,[Wp]:i.CONSTANT_COLOR,[Xp]:i.ONE_MINUS_CONSTANT_COLOR,[qp]:i.CONSTANT_ALPHA,[Yp]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,mt,$,tt,yt,gt,jt,Pe,Xe,ue){if(O===Gi){x===!0&&(Ct(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),O!==Pp){if(O!==p||ue!==w){if((m!==fs||y!==fs)&&(i.blendEquation(i.FUNC_ADD),m=fs,y=fs),ue)switch(O){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,b=null,T=null,E=null,A.set(0,0,0),S=0,p=O,w=ue}return}yt=yt||mt,gt=gt||$,jt=jt||tt,(mt!==m||yt!==y)&&(i.blendEquationSeparate(J[mt],J[yt]),m=mt,y=yt),($!==v||tt!==b||gt!==T||jt!==E)&&(i.blendFuncSeparate(at[$],at[tt],at[gt],at[jt]),v=$,b=tt,T=gt,E=jt),(Pe.equals(A)===!1||Xe!==S)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Xe),A.copy(Pe),S=Xe),p=O,w=!1}function Nt(O,mt){O.side===He?Ct(i.CULL_FACE):it(i.CULL_FACE);let $=O.side===tn;mt&&($=!$),ot($),O.blending===Zs&&O.transparent===!1?D(Gi):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const tt=O.stencilWrite;a.setTest(tt),tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function bt(O){O!==Cp?(it(i.CULL_FACE),O!==R&&(O===Tu?i.cullFace(i.BACK):O===Rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),R=O}function dt(O){O!==N&&(B&&i.lineWidth(O),N=O)}function Ht(O,mt,$){O?(it(i.POLYGON_OFFSET_FILL),(U!==mt||F!==$)&&(i.polygonOffset(mt,$),U=mt,F=$)):Ct(i.POLYGON_OFFSET_FILL)}function vt(O){O?it(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function I(O){O===void 0&&(O=i.TEXTURE0+Y-1),st!==O&&(i.activeTexture(O),st=O)}function C(O,mt,$){$===void 0&&(st===null?$=i.TEXTURE0+Y-1:$=st);let tt=q[$];tt===void 0&&(tt={type:void 0,texture:void 0},q[$]=tt),(tt.type!==O||tt.texture!==mt)&&(st!==$&&(i.activeTexture($),st=$),i.bindTexture(O,mt||ct[O]),tt.type=O,tt.texture=mt)}function H(){const O=q[st];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xt(O){zt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),zt.copy(O))}function Et(O){G.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),G.copy(O))}function oe(O,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let tt=$.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(mt,O.name),$.set(O,tt))}function Qt(O,mt){const tt=c.get(mt).get(O);l.get(mt)!==tt&&(i.uniformBlockBinding(mt,tt,O.__bindingPointIndex),l.set(mt,tt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,q={},h={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,v=null,b=null,y=null,T=null,E=null,A=new _t(0,0,0),S=0,w=!1,M=null,R=null,N=null,U=null,F=null,zt.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:it,disable:Ct,bindFramebuffer:Dt,drawBuffers:kt,useProgram:qt,setBlending:D,setMaterial:Nt,setFlipSided:ot,setCullFace:bt,setLineWidth:dt,setPolygonOffset:Ht,setScissorTest:vt,activeTexture:I,bindTexture:C,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:St,texImage3D:Gt,updateUBOMapping:oe,uniformBlockBinding:Qt,texStorage2D:ne,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Xt,viewport:Et,reset:ye}}function wh(i,t,e,n){const s=R_(n);switch(e){case Id:return i*t;case Nd:return i*t;case Ud:return i*t*2;case Vc:return i*t/s.components*s.byteLength;case Wc:return i*t/s.components*s.byteLength;case Fd:return i*t*2/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case Dd:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case qc:return i*t*4/s.components*s.byteLength;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Jl:case Ql:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ia:case yc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Od:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mc:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R_(i){switch(i){case Mi:case Rd:return{byteLength:1,components:1};case $o:case Pd:case ar:return{byteLength:2,components:1};case Hc:case Gc:return{byteLength:2,components:4};case ys:case Bc:case Kn:return{byteLength:4,components:1};case Ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function P_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,C){return f?new OffscreenCanvas(I,C):Jo("canvas")}function x(I,C,H){let j=1;const et=vt(I);if((et.width>H||et.height>H)&&(j=H/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Z=Math.floor(j*et.width),Rt=Math.floor(j*et.height);h===void 0&&(h=g(Z,Rt));const pt=C?g(Z,Rt):h;return pt.width=Z,pt.height=Rt,pt.getContext("2d").drawImage(I,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Rt+")."),pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,C,H,j,et=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=C;if(C===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),C===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),C===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),C===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),C===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),C===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),C===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),C===i.RGBA){const Rt=et?Sa:re.getTransfer(j);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=Rt===fe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(I,C){let H;return I?C===null||C===ys||C===oo?H=i.DEPTH24_STENCIL8:C===Kn?H=i.DEPTH32F_STENCIL8:C===$o&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ys||C===oo?H=i.DEPTH_COMPONENT24:C===Kn?H=i.DEPTH_COMPONENT32F:C===$o&&(H=i.DEPTH_COMPONENT16),H}function T(I,C){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==Jn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function E(I){const C=I.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&u.delete(C)}function A(I){const C=I.target;C.removeEventListener("dispose",A),M(C)}function S(I){const C=n.get(I);if(C.__webglInit===void 0)return;const H=I.source,j=d.get(H);if(j){const et=j[C.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(I),Object.keys(j).length===0&&d.delete(H)}n.remove(I)}function w(I){const C=n.get(I);i.deleteTexture(C.__webglTexture);const H=I.source,j=d.get(H);delete j[C.__cacheKey],r.memory.textures--}function M(I){const C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(C.__webglFramebuffer[j]))for(let et=0;et<C.__webglFramebuffer[j].length;et++)i.deleteFramebuffer(C.__webglFramebuffer[j][et]);else i.deleteFramebuffer(C.__webglFramebuffer[j]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[j])}else{if(Array.isArray(C.__webglFramebuffer))for(let j=0;j<C.__webglFramebuffer.length;j++)i.deleteFramebuffer(C.__webglFramebuffer[j]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let j=0;j<C.__webglColorRenderbuffer.length;j++)C.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[j]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const H=I.textures;for(let j=0,et=H.length;j<et;j++){const Z=n.get(H[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(H[j])}n.remove(I)}let R=0;function N(){R=0}function U(){const I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function F(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function Y(I,C){const H=n.get(I);if(I.isVideoTexture&&dt(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(H,I,C);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+C)}function B(I,C){const H=n.get(I);if(I.version>0&&H.__version!==I.version){G(H,I,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+C)}function K(I,C){const H=n.get(I);if(I.version>0&&H.__version!==I.version){G(H,I,C);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+C)}function X(I,C){const H=n.get(I);if(I.version>0&&H.__version!==I.version){Q(H,I,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+C)}const st={[ti]:i.REPEAT,[ke]:i.CLAMP_TO_EDGE,[Zl]:i.MIRRORED_REPEAT},q={[yn]:i.NEAREST,[nm]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},nt={[rm]:i.NEVER,[dm]:i.ALWAYS,[am]:i.LESS,[kd]:i.LEQUAL,[lm]:i.EQUAL,[hm]:i.GEQUAL,[cm]:i.GREATER,[um]:i.NOTEQUAL};function wt(I,C){if(C.type===Kn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Jn||C.magFilter===Za||C.magFilter===_r||C.magFilter===ms||C.minFilter===Jn||C.minFilter===Za||C.minFilter===_r||C.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,st[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,st[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,st[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,q[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,q[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,nt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===yn||C.minFilter!==_r&&C.minFilter!==ms||C.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function zt(I,C){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",E));const j=C.source;let et=d.get(j);et===void 0&&(et={},d.set(j,et));const Z=F(C);if(Z!==I.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),et[Z].usedTimes++;const Rt=et[I.__cacheKey];Rt!==void 0&&(et[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(C)),I.__cacheKey=Z,I.__webglTexture=et[Z].texture}return H}function G(I,C,H){let j=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(j=i.TEXTURE_3D);const et=zt(I,C),Z=C.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+H);const Rt=n.get(Z);if(Z.version!==Rt.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const pt=re.getPrimaries(re.workingColorSpace),Mt=C.colorSpace===gi?null:re.getPrimaries(C.colorSpace),ne=C.colorSpace===gi||pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let lt=x(C.image,!1,s.maxTextureSize);lt=Ht(C,lt);const St=o.convert(C.format,C.colorSpace),Gt=o.convert(C.type);let Xt=b(C.internalFormat,St,Gt,C.colorSpace,C.isVideoTexture);wt(j,C);let Et;const oe=C.mipmaps,Qt=C.isVideoTexture!==!0,ye=Rt.__version===void 0||et===!0,O=Z.dataReady,mt=T(C,lt);if(C.isDepthTexture)Xt=y(C.format===ro,C.type),ye&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Xt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,St,Gt,null));else if(C.isDataTexture)if(oe.length>0){Qt&&ye&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,oe[0].width,oe[0].height);for(let $=0,tt=oe.length;$<tt;$++)Et=oe[$],Qt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,St,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,St,Gt,Et.data);C.generateMipmaps=!1}else Qt?(ye&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,lt.width,lt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,St,Gt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,St,Gt,lt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Qt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Xt,oe[0].width,oe[0].height,lt.depth);for(let $=0,tt=oe.length;$<tt;$++)if(Et=oe[$],C.format!==zn)if(St!==null)if(Qt){if(O)if(C.layerUpdates.size>0){const yt=wh(Et.width,Et.height,C.format,C.type);for(const gt of C.layerUpdates){const jt=Et.data.subarray(gt*yt/Et.data.BYTES_PER_ELEMENT,(gt+1)*yt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,gt,Et.width,Et.height,1,St,jt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,lt.depth,St,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Et.width,Et.height,lt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,lt.depth,St,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Et.width,Et.height,lt.depth,0,St,Gt,Et.data)}else{Qt&&ye&&e.texStorage2D(i.TEXTURE_2D,mt,Xt,oe[0].width,oe[0].height);for(let $=0,tt=oe.length;$<tt;$++)Et=oe[$],C.format!==zn?St!==null?Qt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,St,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,St,Gt,Et.data)}else if(C.isDataArrayTexture)if(Qt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Xt,lt.width,lt.height,lt.depth),O)if(C.layerUpdates.size>0){const $=wh(lt.width,lt.height,C.format,C.type);for(const tt of C.layerUpdates){const yt=lt.data.subarray(tt*$/lt.data.BYTES_PER_ELEMENT,(tt+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,St,Gt,yt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,St,Gt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,lt.width,lt.height,lt.depth,0,St,Gt,lt.data);else if(C.isData3DTexture)Qt?(ye&&e.texStorage3D(i.TEXTURE_3D,mt,Xt,lt.width,lt.height,lt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,St,Gt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,lt.width,lt.height,lt.depth,0,St,Gt,lt.data);else if(C.isFramebufferTexture){if(ye)if(Qt)e.texStorage2D(i.TEXTURE_2D,mt,Xt,lt.width,lt.height);else{let $=lt.width,tt=lt.height;for(let yt=0;yt<mt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Xt,$,tt,0,St,Gt,null),$>>=1,tt>>=1}}else if(oe.length>0){if(Qt&&ye){const $=vt(oe[0]);e.texStorage2D(i.TEXTURE_2D,mt,Xt,$.width,$.height)}for(let $=0,tt=oe.length;$<tt;$++)Et=oe[$],Qt?O&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,St,Gt,Et):e.texImage2D(i.TEXTURE_2D,$,Xt,St,Gt,Et);C.generateMipmaps=!1}else if(Qt){if(ye){const $=vt(lt);e.texStorage2D(i.TEXTURE_2D,mt,Xt,$.width,$.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Gt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,St,Gt,lt);p(C)&&m(j),Rt.__version=Z.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Q(I,C,H){if(C.image.length!==6)return;const j=zt(I,C),et=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const Z=n.get(et);if(et.version!==Z.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const Rt=re.getPrimaries(re.workingColorSpace),pt=C.colorSpace===gi?null:re.getPrimaries(C.colorSpace),Mt=C.colorSpace===gi||Rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const ne=C.isCompressedTexture||C.image[0].isCompressedTexture,lt=C.image[0]&&C.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!ne&&!lt?St[tt]=x(C.image[tt],!0,s.maxCubemapSize):St[tt]=lt?C.image[tt].image:C.image[tt],St[tt]=Ht(C,St[tt]);const Gt=St[0],Xt=o.convert(C.format,C.colorSpace),Et=o.convert(C.type),oe=b(C.internalFormat,Xt,Et,C.colorSpace),Qt=C.isVideoTexture!==!0,ye=Z.__version===void 0||j===!0,O=et.dataReady;let mt=T(C,Gt);wt(i.TEXTURE_CUBE_MAP,C);let $;if(ne){Qt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,oe,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){$=St[tt].mipmaps;for(let yt=0;yt<$.length;yt++){const gt=$[yt];C.format!==zn?Xt!==null?Qt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,gt.width,gt.height,Xt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,oe,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,gt.width,gt.height,Xt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,oe,gt.width,gt.height,0,Xt,Et,gt.data)}}}else{if($=C.mipmaps,Qt&&ye){$.length>0&&mt++;const tt=vt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,oe,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){Qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,Xt,Et,St[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,oe,St[tt].width,St[tt].height,0,Xt,Et,St[tt].data);for(let yt=0;yt<$.length;yt++){const jt=$[yt].image[tt].image;Qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,jt.width,jt.height,Xt,Et,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,oe,jt.width,jt.height,0,Xt,Et,jt.data)}}else{Qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Xt,Et,St[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,oe,Xt,Et,St[tt]);for(let yt=0;yt<$.length;yt++){const gt=$[yt];Qt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Xt,Et,gt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,oe,Xt,Et,gt.image[tt])}}}p(C)&&m(i.TEXTURE_CUBE_MAP),Z.__version=et.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ct(I,C,H,j,et,Z){const Rt=o.convert(H.format,H.colorSpace),pt=o.convert(H.type),Mt=b(H.internalFormat,Rt,pt,H.colorSpace),ne=n.get(C),lt=n.get(H);if(lt.__renderTarget=C,!ne.__hasExternalTextures){const St=Math.max(1,C.width>>Z),Gt=Math.max(1,C.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Mt,St,Gt,C.depth,0,Rt,pt,null):e.texImage2D(et,Z,Mt,St,Gt,0,Rt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,et,lt.__webglTexture,0,ot(C)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,et,lt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(I,C,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const j=C.depthTexture,et=j&&j.isDepthTexture?j.type:null,Z=y(C.stencilBuffer,et),Rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=ot(C);bt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Z,C.width,C.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Z,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Z,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,I)}else{const j=C.textures;for(let et=0;et<j.length;et++){const Z=j[et],Rt=o.convert(Z.format,Z.colorSpace),pt=o.convert(Z.type),Mt=b(Z.internalFormat,Rt,pt,Z.colorSpace),ne=ot(C);H&&bt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Mt,C.width,C.height):bt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Mt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(C.depthTexture);j.__renderTarget=C,(!j.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const et=j.__webglTexture,Z=ot(C);if(C.depthTexture.format===Js)bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(C.depthTexture.format===ro)bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Dt(I){const C=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),j){const et=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),C.__depthDisposeCallback=et}C.__boundDepthTexture=j}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ct(C.__webglFramebuffer,I)}else if(H){C.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[j]),C.__webglDepthbuffer[j]===void 0)C.__webglDepthbuffer[j]=i.createRenderbuffer(),it(C.__webglDepthbuffer[j],I,!1);else{const et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),it(C.__webglDepthbuffer,I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(I,C,H){const j=n.get(I);C!==void 0&&ct(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Dt(I)}function qt(I){const C=I.texture,H=n.get(I),j=n.get(C);I.addEventListener("dispose",A);const et=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=C.version,r.memory.textures++),Z){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<C.mipmaps.length;Mt++)H.__webglFramebuffer[pt][Mt]=i.createFramebuffer()}else H.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<C.mipmaps.length;pt++)H.__webglFramebuffer[pt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let pt=0,Mt=et.length;pt<Mt;pt++){const ne=n.get(et[pt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&bt(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){const Mt=et[pt];H.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);const ne=o.convert(Mt.format,Mt.colorSpace),lt=o.convert(Mt.type),St=b(Mt.internalFormat,ne,lt,Mt.colorSpace,I.isXRRenderTarget===!0),Gt=ot(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),it(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),wt(i.TEXTURE_CUBE_MAP,C);for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Mt=0;Mt<C.mipmaps.length;Mt++)ct(H.__webglFramebuffer[pt][Mt],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else ct(H.__webglFramebuffer[pt],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(C)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,Mt=et.length;pt<Mt;pt++){const ne=et[pt],lt=n.get(ne);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),wt(i.TEXTURE_2D,ne),ct(H.__webglFramebuffer,I,ne,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),p(ne)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,j.__webglTexture),wt(pt,C),C.mipmaps&&C.mipmaps.length>0)for(let Mt=0;Mt<C.mipmaps.length;Mt++)ct(H.__webglFramebuffer[Mt],I,C,i.COLOR_ATTACHMENT0,pt,Mt);else ct(H.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,pt,0);p(C)&&m(pt),e.unbindTexture()}I.depthBuffer&&Dt(I)}function J(I){const C=I.textures;for(let H=0,j=C.length;H<j;H++){const et=C[H];if(p(et)){const Z=v(I),Rt=n.get(et).__webglTexture;e.bindTexture(Z,Rt),m(Z),e.unbindTexture()}}}const at=[],D=[];function Nt(I){if(I.samples>0){if(bt(I)===!1){const C=I.textures,H=I.width,j=I.height;let et=i.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(I),pt=C.length>1;if(pt)for(let Mt=0;Mt<C.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Mt=0;Mt<C.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const ne=n.get(C[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,et,i.NEAREST),l===!0&&(at.length=0,D.length=0,at.push(i.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(at.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<C.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const ne=n.get(C[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function ot(I){return Math.min(s.maxSamples,I.samples)}function bt(I){const C=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function dt(I){const C=r.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function Ht(I,C){const H=I.colorSpace,j=I.format,et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==ho&&H!==gi&&(re.getTransfer(H)===fe?(j!==zn||et!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),C}function vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=bt}function L_(i,t){function e(n,s=gi){let o;const r=re.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===Hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rd)return i.BYTE;if(n===Pd)return i.SHORT;if(n===$o)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===Id)return i.ALPHA;if(n===Dd)return i.RGB;if(n===zn)return i.RGBA;if(n===Nd)return i.LUMINANCE;if(n===Ud)return i.LUMINANCE_ALPHA;if(n===Js)return i.DEPTH_COMPONENT;if(n===ro)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===Wc)return i.RED_INTEGER;if(n===Fd)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===qc)return i.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(r===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Qr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Qr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Kl||n===Ql||n===tc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ec||n===nc)return r===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ic)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===oc||n===rc||n===ac||n===lc||n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===sc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===yc||n===_c)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ia)return r===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Od||n===vc||n===Mc||n===bc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ia)return o.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class I_ extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ji({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends fo{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=new F_,p=e.getContextAttributes();let m=null,v=null;const b=[],y=[],T=new rt;let E=null;const A=new gn;A.viewport=new me;const S=new gn;S.viewport=new me;const w=[A,S],M=new I_;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=b[G];return Q===void 0&&(Q=new wl,b[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=b[G];return Q===void 0&&(Q=new wl,b[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=b[G];return Q===void 0&&(Q=new wl,b[G]=Q),Q.getHandSpace()};function U(G){const Q=y.indexOf(G.inputSource);if(Q===-1)return;const ct=b[Q];ct!==void 0&&(ct.update(G.inputSource,G.frame,c||r),ct.dispatchEvent({type:G.type,data:G.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let G=0;G<b.length;G++){const Q=y[G];Q!==null&&(y[G]=null,b[G].disconnect(Q))}R=null,N=null,x.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,v=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new _s(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ct=null,it=null;p.depth&&(it=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?ro:Js,ct=p.stencil?oo:ys);const Ct={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:o};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new _s(d.textureWidth,d.textureHeight,{format:zn,type:Mi,depthTexture:new Jd(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(G){for(let Q=0;Q<G.removed.length;Q++){const ct=G.removed[Q],it=y.indexOf(ct);it>=0&&(y[it]=null,b[it].disconnect(ct))}for(let Q=0;Q<G.added.length;Q++){const ct=G.added[Q];let it=y.indexOf(ct);if(it===-1){for(let Dt=0;Dt<b.length;Dt++)if(Dt>=y.length){y.push(ct),it=Dt;break}else if(y[Dt]===null){y[Dt]=ct,it=Dt;break}if(it===-1)break}const Ct=b[it];Ct&&Ct.connect(ct)}}const B=new L,K=new L;function X(G,Q,ct){B.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(ct.matrixWorld);const it=B.distanceTo(K),Ct=Q.projectionMatrix.elements,Dt=ct.projectionMatrix.elements,kt=Ct[14]/(Ct[10]-1),qt=Ct[14]/(Ct[10]+1),J=(Ct[9]+1)/Ct[5],at=(Ct[9]-1)/Ct[5],D=(Ct[8]-1)/Ct[0],Nt=(Dt[8]+1)/Dt[0],ot=kt*D,bt=kt*Nt,dt=it/(-D+Nt),Ht=dt*-D;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ht),G.translateZ(dt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ct[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const vt=kt+dt,I=qt+dt,C=ot-Ht,H=bt+(it-Ht),j=J*qt/I*vt,et=at*qt/I*vt;G.projectionMatrix.makePerspective(C,H,j,et,vt,I),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function st(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Q=G.near,ct=G.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),M.near=S.near=A.near=Q,M.far=S.far=A.far=ct,(R!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,N=M.far),A.layers.mask=G.layers.mask|2,S.layers.mask=G.layers.mask|4,M.layers.mask=A.layers.mask|S.layers.mask;const it=G.parent,Ct=M.cameras;st(M,it);for(let Dt=0;Dt<Ct.length;Dt++)st(Ct[Dt],it);Ct.length===2?X(M,A,S):M.projectionMatrix.copy(A.projectionMatrix),q(G,M,it)};function q(G,Q,ct){ct===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ct.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=jo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let nt=null;function wt(G,Q){if(u=Q.getViewerPose(c||r),g=Q,u!==null){const ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let it=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let Dt=0;Dt<ct.length;Dt++){const kt=ct[Dt];let qt=null;if(f!==null)qt=f.getViewport(kt);else{const at=h.getViewSubImage(d,kt);qt=at.viewport,Dt===0&&(t.setRenderTargetTextures(v,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(v))}let J=w[Dt];J===void 0&&(J=new gn,J.layers.enable(Dt),J.viewport=new me,w[Dt]=J),J.matrix.fromArray(kt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(kt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(qt.x,qt.y,qt.width,qt.height),Dt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(J)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Dt=h.getDepthInformation(ct[0]);Dt&&Dt.isValid&&Dt.texture&&x.init(t,Dt,s.renderState)}}for(let ct=0;ct<b.length;ct++){const it=y[ct],Ct=b[ct];it!==null&&Ct!==void 0&&Ct.update(it,Q,c||r)}nt&&nt(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const zt=new jd;zt.setAnimationLoop(wt),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}}const as=new en,z_=new Ft;function k_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),h(p,m)):m.isMeshPhongMaterial?(o(p,m),u(p,m)):m.isMeshStandardMaterial?(o(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),x(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),b=v.envMap,y=v.envMapRotation;b&&(p.envMap.value=b,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),p.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(as)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const y=b.program;n.uniformBlockBinding(v,y)}function c(v,b){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(v,T);const E=t.render.frame;o[v.id]!==E&&(d(v),o[v.id]=E)}function u(v){const b=h();v.__bindingPointIndex=b;const y=i.createBuffer(),T=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function h(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const b=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,A=y.length;E<A;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,M=S.length;w<M;w++){const R=S[w];if(f(R,E,w,T)===!0){const N=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let Y=0;Y<U.length;Y++){const B=U[Y],K=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,N+F,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,y,T){const E=v.value,A=b+"_"+y;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const S=T[A];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return T[A]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function g(v){const b=v.uniforms;let y=0;const T=16;for(let A=0,S=b.length;A<S;A++){const w=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,R=w.length;M<R;M++){const N=w[M],U=Array.isArray(N.value)?N.value:[N.value];for(let F=0,Y=U.length;F<Y;F++){const B=U[F],K=x(B),X=y%T,st=X%K.boundary,q=X+st;y+=st,q!==0&&T-q<K.storage&&(y+=T-q),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=K.storage}}}const E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function x(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){const b=v.target;b.removeEventListener("dispose",p);const y=r.indexOf(b.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}class H_{constructor(t={}){const{canvas:e=Rm(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,m=null;const v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Vi,this.toneMappingExposure=1;const y=this;let T=!1,E=0,A=0,S=null,w=-1,M=null;const R=new me,N=new me;let U=null;const F=new _t(0);let Y=0,B=e.width,K=e.height,X=1,st=null,q=null;const nt=new me(0,0,B,K),wt=new me(0,0,B,K);let zt=!1;const G=new lo;let Q=!1,ct=!1;const it=new Ft,Ct=new Ft,Dt=new L,kt=new me,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function at(){return S===null?X:1}let D=n;function Nt(P,z){return e.getContext(P,z)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){const z="webgl2";if(D=Nt(z,P),D===null)throw Nt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ot,bt,dt,Ht,vt,I,C,H,j,et,Z,Rt,pt,Mt,ne,lt,St,Gt,Xt,Et,oe,Qt,ye,O;function mt(){ot=new qx(D),ot.init(),Qt=new L_(D,ot),bt=new Bx(D,ot,t,Qt),dt=new C_(D,ot),bt.reverseDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),Ht=new jx(D),vt=new f_,I=new P_(D,ot,dt,vt,bt,Qt,Ht),C=new Gx(y),H=new Xx(y),j=new n0(D),ye=new zx(D,j),et=new Yx(D,j,Ht,ye),Z=new Jx(D,et,j,Ht),Xt=new Zx(D,bt,I),lt=new Hx(vt),Rt=new d_(y,C,H,ot,bt,ye,lt),pt=new k_(y,vt),Mt=new m_,ne=new M_(ot),Gt=new Ox(y,C,H,dt,Z,f,l),St=new T_(y,Z,bt),O=new B_(D,Ht,bt,dt),Et=new kx(D,ot,Ht),oe=new $x(D,ot,Ht),Ht.programs=Rt.programs,y.capabilities=bt,y.extensions=ot,y.properties=vt,y.renderLists=Mt,y.shadowMap=St,y.state=dt,y.info=Ht}mt();const $=new O_(y,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=ot.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ot.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(B,K,!1))},this.getSize=function(P){return P.set(B,K)},this.setSize=function(P,z,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,K=z,e.width=Math.floor(P*X),e.height=Math.floor(z*X),V===!0&&(e.style.width=P+"px",e.style.height=z+"px"),this.setViewport(0,0,P,z)},this.getDrawingBufferSize=function(P){return P.set(B*X,K*X).floor()},this.setDrawingBufferSize=function(P,z,V){B=P,K=z,X=V,e.width=Math.floor(P*V),e.height=Math.floor(z*V),this.setViewport(0,0,P,z)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(nt)},this.setViewport=function(P,z,V,W){P.isVector4?nt.set(P.x,P.y,P.z,P.w):nt.set(P,z,V,W),dt.viewport(R.copy(nt).multiplyScalar(X).round())},this.getScissor=function(P){return P.copy(wt)},this.setScissor=function(P,z,V,W){P.isVector4?wt.set(P.x,P.y,P.z,P.w):wt.set(P,z,V,W),dt.scissor(N.copy(wt).multiplyScalar(X).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(P){dt.setScissorTest(zt=P)},this.setOpaqueSort=function(P){st=P},this.setTransparentSort=function(P){q=P},this.getClearColor=function(P){return P.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(P=!0,z=!0,V=!0){let W=0;if(P){let k=!1;if(S!==null){const ut=S.texture.format;k=ut===qc||ut===Xc||ut===Wc}if(k){const ut=S.texture.type,xt=ut===Mi||ut===ys||ut===$o||ut===oo||ut===Hc||ut===Gc,Pt=Gt.getClearColor(),Lt=Gt.getClearAlpha(),Yt=Pt.r,Zt=Pt.g,It=Pt.b;xt?(g[0]=Yt,g[1]=Zt,g[2]=It,g[3]=Lt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Yt,x[1]=Zt,x[2]=It,x[3]=Lt,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}z&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Mt.dispose(),ne.dispose(),vt.dispose(),C.dispose(),H.dispose(),Z.dispose(),ye.dispose(),O.dispose(),Rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",yu),$.removeEventListener("sessionend",_u),es.stop()};function tt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Ht.autoReset,z=St.enabled,V=St.autoUpdate,W=St.needsUpdate,k=St.type;mt(),Ht.autoReset=P,St.enabled=z,St.autoUpdate=V,St.needsUpdate=W,St.type=k}function gt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function jt(P){const z=P.target;z.removeEventListener("dispose",jt),Pe(z)}function Pe(P){Xe(P),vt.remove(P)}function Xe(P){const z=vt.get(P).programs;z!==void 0&&(z.forEach(function(V){Rt.releaseProgram(V)}),P.isShaderMaterial&&Rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,z,V,W,k,ut){z===null&&(z=qt);const xt=k.isMesh&&k.matrixWorld.determinant()<0,Pt=Ep(P,z,V,W,k);dt.setMaterial(W,xt);let Lt=V.index,Yt=1;if(W.wireframe===!0){if(Lt=et.getWireframeAttribute(V),Lt===void 0)return;Yt=2}const Zt=V.drawRange,It=V.attributes.position;let ae=Zt.start*Yt,_e=(Zt.start+Zt.count)*Yt;ut!==null&&(ae=Math.max(ae,ut.start*Yt),_e=Math.min(_e,(ut.start+ut.count)*Yt)),Lt!==null?(ae=Math.max(ae,0),_e=Math.min(_e,Lt.count)):It!=null&&(ae=Math.max(ae,0),_e=Math.min(_e,It.count));const Me=_e-ae;if(Me<0||Me===1/0)return;ye.setup(k,W,Pt,V,Lt);let nn,le=Et;if(Lt!==null&&(nn=j.get(Lt),le=oe,le.setIndex(nn)),k.isMesh)W.wireframe===!0?(dt.setLineWidth(W.wireframeLinewidth*at()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(k.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),dt.setLineWidth(Ut*at()),k.isLineSegments?le.setMode(D.LINES):k.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else k.isPoints?le.setMode(D.POINTS):k.isSprite&&le.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ut=k._multiDrawStarts,ri=k._multiDrawCounts,ce=k._multiDrawCount,In=Lt?j.get(Lt).bytesPerElement:1,Ts=vt.get(W).currentProgram.getUniforms();for(let cn=0;cn<ce;cn++)Ts.setValue(D,"_gl_DrawID",cn),le.render(Ut[cn]/In,ri[cn])}else if(k.isInstancedMesh)le.renderInstances(ae,Me,k.count);else if(V.isInstancedBufferGeometry){const Ut=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ri=Math.min(V.instanceCount,Ut);le.renderInstances(ae,Me,ri)}else le.render(ae,Me)};function ue(P,z,V){P.transparent===!0&&P.side===He&&P.forceSinglePass===!1?(P.side=tn,P.needsUpdate=!0,yr(P,z,V),P.side=Wn,P.needsUpdate=!0,yr(P,z,V),P.side=He):yr(P,z,V)}this.compile=function(P,z,V=null){V===null&&(V=P),m=ne.get(V),m.init(z),b.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),P!==V&&P.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const W=new Set;return P.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ut=k.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Pt=ut[xt];ue(Pt,V,k),W.add(Pt)}else ue(ut,V,k),W.add(ut)}),b.pop(),m=null,W},this.compileAsync=function(P,z,V=null){const W=this.compile(P,z,V);return new Promise(k=>{function ut(){if(W.forEach(function(xt){vt.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){k(P);return}setTimeout(ut,10)}ot.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Ln=null;function oi(P){Ln&&Ln(P)}function yu(){es.stop()}function _u(){es.start()}const es=new jd;es.setAnimationLoop(oi),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(P){Ln=P,$.setAnimationLoop(P),P===null?es.stop():es.start()},$.addEventListener("sessionstart",yu),$.addEventListener("sessionend",_u),this.render=function(P,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,z,S),m=ne.get(P,b.length),m.init(z),b.push(m),Ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(Ct),ct=this.localClippingEnabled,Q=lt.init(this.clippingPlanes,ct),p=Mt.get(P,v.length),p.init(),v.push(p),$.enabled===!0&&$.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&ja(ut,z,-1/0,y.sortObjects)}ja(P,z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(st,q),J=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,J&&Gt.addToRenderList(p,P),this.info.render.frame++,Q===!0&&lt.beginShadows();const V=m.state.shadowsArray;St.render(V,P,z),Q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,k=p.transmissive;if(m.setupLights(),z.isArrayCamera){const ut=z.cameras;if(k.length>0)for(let xt=0,Pt=ut.length;xt<Pt;xt++){const Lt=ut[xt];Mu(W,k,P,Lt)}J&&Gt.render(P);for(let xt=0,Pt=ut.length;xt<Pt;xt++){const Lt=ut[xt];vu(p,P,Lt,Lt.viewport)}}else k.length>0&&Mu(W,k,P,z),J&&Gt.render(P),vu(p,P,z);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(y,P,z),ye.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],Q===!0&&lt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function ja(P,z,V,W){if(P.visible===!1)return;if(P.layers.test(z.layers)){if(P.isGroup)V=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){W&&kt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ct);const xt=Z.update(P),Pt=P.material;Pt.visible&&p.push(P,xt,Pt,V,kt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){const xt=Z.update(P),Pt=P.material;if(W&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),kt.copy(P.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(P.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Lt=xt.groups;for(let Yt=0,Zt=Lt.length;Yt<Zt;Yt++){const It=Lt[Yt],ae=Pt[It.materialIndex];ae&&ae.visible&&p.push(P,xt,ae,V,kt.z,It)}}else Pt.visible&&p.push(P,xt,Pt,V,kt.z,null)}}const ut=P.children;for(let xt=0,Pt=ut.length;xt<Pt;xt++)ja(ut[xt],z,V,W)}function vu(P,z,V,W){const k=P.opaque,ut=P.transmissive,xt=P.transparent;m.setupLightsView(V),Q===!0&&lt.setGlobalState(y.clippingPlanes,V),W&&dt.viewport(R.copy(W)),k.length>0&&xr(k,z,V),ut.length>0&&xr(ut,z,V),xt.length>0&&xr(xt,z,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Mu(P,z,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new _s(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?ar:Mi,minFilter:ms,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ut=m.state.transmissionRenderTarget[W.id],xt=W.viewport||R;ut.setSize(xt.z,xt.w);const Pt=y.getRenderTarget();y.setRenderTarget(ut),y.getClearColor(F),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),J&&Gt.render(V);const Lt=y.toneMapping;y.toneMapping=Vi;const Yt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Q===!0&&lt.setGlobalState(y.clippingPlanes,W),xr(P,V,W),I.updateMultisampleRenderTarget(ut),I.updateRenderTargetMipmap(ut),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let It=0,ae=z.length;It<ae;It++){const _e=z[It],Me=_e.object,nn=_e.geometry,le=_e.material,Ut=_e.group;if(le.side===He&&Me.layers.test(W.layers)){const ri=le.side;le.side=tn,le.needsUpdate=!0,bu(Me,V,W,nn,le,Ut),le.side=ri,le.needsUpdate=!0,Zt=!0}}Zt===!0&&(I.updateMultisampleRenderTarget(ut),I.updateRenderTargetMipmap(ut))}y.setRenderTarget(Pt),y.setClearColor(F,Y),Yt!==void 0&&(W.viewport=Yt),y.toneMapping=Lt}function xr(P,z,V){const W=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ut=P.length;k<ut;k++){const xt=P[k],Pt=xt.object,Lt=xt.geometry,Yt=W===null?xt.material:W,Zt=xt.group;Pt.layers.test(V.layers)&&bu(Pt,z,V,Lt,Yt,Zt)}}function bu(P,z,V,W,k,ut){P.onBeforeRender(y,z,V,W,k,ut),P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),k.onBeforeRender(y,z,V,W,P,ut),k.transparent===!0&&k.side===He&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,y.renderBufferDirect(V,z,W,k,P,ut),k.side=Wn,k.needsUpdate=!0,y.renderBufferDirect(V,z,W,k,P,ut),k.side=He):y.renderBufferDirect(V,z,W,k,P,ut),P.onAfterRender(y,z,V,W,k,ut)}function yr(P,z,V){z.isScene!==!0&&(z=qt);const W=vt.get(P),k=m.state.lights,ut=m.state.shadowsArray,xt=k.state.version,Pt=Rt.getParameters(P,k.state,ut,z,V),Lt=Rt.getProgramCacheKey(Pt);let Yt=W.programs;W.environment=P.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(P.isMeshStandardMaterial?H:C).get(P.envMap||W.environment),W.envMapRotation=W.environment!==null&&P.envMap===null?z.environmentRotation:P.envMapRotation,Yt===void 0&&(P.addEventListener("dispose",jt),Yt=new Map,W.programs=Yt);let Zt=Yt.get(Lt);if(Zt!==void 0){if(W.currentProgram===Zt&&W.lightsStateVersion===xt)return Su(P,Pt),Zt}else Pt.uniforms=Rt.getUniforms(P),P.onBeforeCompile(Pt,y),Zt=Rt.acquireProgram(Pt,Lt),Yt.set(Lt,Zt),W.uniforms=Pt.uniforms;const It=W.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(It.clippingPlanes=lt.uniform),Su(P,Pt),W.needsLights=Ap(P),W.lightsStateVersion=xt,W.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Zt,W.uniformsList=null,Zt}function wu(P){if(P.uniformsList===null){const z=P.currentProgram.getUniforms();P.uniformsList=sa.seqWithValue(z.seq,P.uniforms)}return P.uniformsList}function Su(P,z){const V=vt.get(P);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function Ep(P,z,V,W,k){z.isScene!==!0&&(z=qt),I.resetTextureUnits();const ut=z.fog,xt=W.isMeshStandardMaterial?z.environment:null,Pt=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ho,Lt=(W.isMeshStandardMaterial?H:C).get(W.envMap||xt),Yt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!V.morphAttributes.position,ae=!!V.morphAttributes.normal,_e=!!V.morphAttributes.color;let Me=Vi;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Me=y.toneMapping);const nn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=nn!==void 0?nn.length:0,Ut=vt.get(W),ri=m.state.lights;if(Q===!0&&(ct===!0||P!==M)){const wn=P===M&&W.id===w;lt.setState(W,P,wn)}let ce=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ri.state.version||Ut.outputColorSpace!==Pt||k.isBatchedMesh&&Ut.batching===!1||!k.isBatchedMesh&&Ut.batching===!0||k.isBatchedMesh&&Ut.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ut.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ut.instancing===!1||!k.isInstancedMesh&&Ut.instancing===!0||k.isSkinnedMesh&&Ut.skinning===!1||!k.isSkinnedMesh&&Ut.skinning===!0||k.isInstancedMesh&&Ut.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ut.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ut.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ut.instancingMorph===!1&&k.morphTexture!==null||Ut.envMap!==Lt||W.fog===!0&&Ut.fog!==ut||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==Yt||Ut.vertexTangents!==Zt||Ut.morphTargets!==It||Ut.morphNormals!==ae||Ut.morphColors!==_e||Ut.toneMapping!==Me||Ut.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Ut.__version=W.version);let In=Ut.currentProgram;ce===!0&&(In=yr(W,z,k));let Ts=!1,cn=!1,yo=!1;const be=In.getUniforms(),qn=Ut.uniforms;if(dt.useProgram(In.program)&&(Ts=!0,cn=!0,yo=!0),W.id!==w&&(w=W.id,cn=!0),Ts||M!==P){dt.buffers.depth.getReversed()?(it.copy(P.projectionMatrix),Lm(it),Im(it),be.setValue(D,"projectionMatrix",it)):be.setValue(D,"projectionMatrix",P.projectionMatrix),be.setValue(D,"viewMatrix",P.matrixWorldInverse);const Ti=be.map.cameraPosition;Ti!==void 0&&Ti.setValue(D,Dt.setFromMatrixPosition(P.matrixWorld)),bt.logarithmicDepthBuffer&&be.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&be.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,cn=!0,yo=!0)}if(k.isSkinnedMesh){be.setOptional(D,k,"bindMatrix"),be.setOptional(D,k,"bindMatrixInverse");const wn=k.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),be.setValue(D,"boneTexture",wn.boneTexture,I))}k.isBatchedMesh&&(be.setOptional(D,k,"batchingTexture"),be.setValue(D,"batchingTexture",k._matricesTexture,I),be.setOptional(D,k,"batchingIdTexture"),be.setValue(D,"batchingIdTexture",k._indirectTexture,I),be.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&be.setValue(D,"batchingColorTexture",k._colorsTexture,I));const _o=V.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Xt.update(k,V,In),(cn||Ut.receiveShadow!==k.receiveShadow)&&(Ut.receiveShadow=k.receiveShadow,be.setValue(D,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qn.envMap.value=Lt,qn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(qn.envMapIntensity.value=z.environmentIntensity),cn&&(be.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&Tp(qn,yo),ut&&W.fog===!0&&pt.refreshFogUniforms(qn,ut),pt.refreshMaterialUniforms(qn,W,X,K,m.state.transmissionRenderTarget[P.id]),sa.upload(D,wu(Ut),qn,I)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sa.upload(D,wu(Ut),qn,I),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&be.setValue(D,"center",k.center),be.setValue(D,"modelViewMatrix",k.modelViewMatrix),be.setValue(D,"normalMatrix",k.normalMatrix),be.setValue(D,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const wn=W.uniformsGroups;for(let Ti=0,Ai=wn.length;Ti<Ai;Ti++){const Eu=wn[Ti];O.update(Eu,In),O.bind(Eu,In)}}return In}function Tp(P,z){P.ambientLightColor.needsUpdate=z,P.lightProbe.needsUpdate=z,P.directionalLights.needsUpdate=z,P.directionalLightShadows.needsUpdate=z,P.pointLights.needsUpdate=z,P.pointLightShadows.needsUpdate=z,P.spotLights.needsUpdate=z,P.spotLightShadows.needsUpdate=z,P.rectAreaLights.needsUpdate=z,P.hemisphereLights.needsUpdate=z}function Ap(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,z,V){vt.get(P.texture).__webglTexture=z,vt.get(P.depthTexture).__webglTexture=V;const W=vt.get(P);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,z){const V=vt.get(P);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(P,z=0,V=0){S=P,E=z,A=V;let W=!0,k=null,ut=!1,xt=!1;if(P){const Lt=vt.get(P);if(Lt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Lt.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Lt.__hasExternalTextures)I.rebindTextures(P,vt.get(P.texture).__webglTexture,vt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const It=P.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&vt.has(It)&&(P.width!==It.image.width||P.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const Yt=P.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(xt=!0);const Zt=vt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Zt[z])?k=Zt[z][V]:k=Zt[z],ut=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?k=vt.get(P).__webglMultisampledFramebuffer:Array.isArray(Zt)?k=Zt[V]:k=Zt,R.copy(P.viewport),N.copy(P.scissor),U=P.scissorTest}else R.copy(nt).multiplyScalar(X).floor(),N.copy(wt).multiplyScalar(X).floor(),U=zt;if(dt.bindFramebuffer(D.FRAMEBUFFER,k)&&W&&dt.drawBuffers(P,k),dt.viewport(R),dt.scissor(N),dt.setScissorTest(U),ut){const Lt=vt.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Lt.__webglTexture,V)}else if(xt){const Lt=vt.get(P.texture),Yt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,V||0,Yt)}w=-1},this.readRenderTargetPixels=function(P,z,V,W,k,ut,xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(Pt=Pt[xt]),Pt){dt.bindFramebuffer(D.FRAMEBUFFER,Pt);try{const Lt=P.texture,Yt=Lt.format,Zt=Lt.type;if(!bt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=P.width-W&&V>=0&&V<=P.height-k&&D.readPixels(z,V,W,k,Qt.convert(Yt),Qt.convert(Zt),ut)}finally{const Lt=S!==null?vt.get(S).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(P,z,V,W,k,ut,xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=vt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(Pt=Pt[xt]),Pt){const Lt=P.texture,Yt=Lt.format,Zt=Lt.type;if(!bt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=P.width-W&&V>=0&&V<=P.height-k){dt.bindFramebuffer(D.FRAMEBUFFER,Pt);const It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(z,V,W,k,Qt.convert(Yt),Qt.convert(Zt),0);const ae=S!==null?vt.get(S).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,ae);const _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Pm(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(It),D.deleteSync(_e),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,z=null,V=0){P.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,P=arguments[1]);const W=Math.pow(2,-V),k=Math.floor(P.image.width*W),ut=Math.floor(P.image.height*W),xt=z!==null?z.x:0,Pt=z!==null?z.y:0;I.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xt,Pt,k,ut),dt.unbindTexture()},this.copyTextureToTexture=function(P,z,V=null,W=null,k=0){P.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1],z=arguments[2],k=arguments[3]||0,V=null);let ut,xt,Pt,Lt,Yt,Zt,It,ae,_e;const Me=P.isCompressedTexture?P.mipmaps[k]:P.image;V!==null?(ut=V.max.x-V.min.x,xt=V.max.y-V.min.y,Pt=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,Yt=V.min.y,Zt=V.isBox3?V.min.z:0):(ut=Me.width,xt=Me.height,Pt=Me.depth||1,Lt=0,Yt=0,Zt=0),W!==null?(It=W.x,ae=W.y,_e=W.z):(It=0,ae=0,_e=0);const nn=Qt.convert(z.format),le=Qt.convert(z.type);let Ut;z.isData3DTexture?(I.setTexture3D(z,0),Ut=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),Ut=D.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),Ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const ri=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),In=D.getParameter(D.UNPACK_SKIP_PIXELS),Ts=D.getParameter(D.UNPACK_SKIP_ROWS),cn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt);const yo=P.isDataArrayTexture||P.isData3DTexture,be=z.isDataArrayTexture||z.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const qn=vt.get(P),_o=vt.get(z),wn=vt.get(qn.__renderTarget),Ti=vt.get(_o.__renderTarget);dt.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<Pt;Ai++)yo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(P).__webglTexture,k,Zt+Ai),P.isDepthTexture?(be&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,k,_e+Ai),D.blitFramebuffer(Lt,Yt,ut,xt,It,ae,ut,xt,D.DEPTH_BUFFER_BIT,D.NEAREST)):be?D.copyTexSubImage3D(Ut,k,It,ae,_e+Ai,Lt,Yt,ut,xt):D.copyTexSubImage2D(Ut,k,It,ae,_e+Ai,Lt,Yt,ut,xt);dt.bindFramebuffer(D.READ_FRAMEBUFFER,null),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else be?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Ut,k,It,ae,_e,ut,xt,Pt,nn,le,Me.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,k,It,ae,_e,ut,xt,Pt,nn,Me.data):D.texSubImage3D(Ut,k,It,ae,_e,ut,xt,Pt,nn,le,Me):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,It,ae,ut,xt,nn,le,Me.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,It,ae,Me.width,Me.height,nn,Me.data):D.texSubImage2D(D.TEXTURE_2D,k,It,ae,ut,xt,nn,le,Me);D.pixelStorei(D.UNPACK_ROW_LENGTH,ri),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,In),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ts),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cn),k===0&&z.generateMipmaps&&D.generateMipmap(Ut),dt.unbindTexture()},this.copyTextureToTexture3D=function(P,z,V=null,W=null,k=0){return P.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,P=arguments[2],z=arguments[3],k=arguments[4]||0),Lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,z,V,W,k)},this.initRenderTarget=function(P){vt.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),dt.unbindTexture()},this.resetState=function(){E=0,A=0,S=null,dt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class Ta{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new Ta(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class G_ extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class V_ extends Ve{constructor(t=null,e=1,n=1,s,o,r,a,l,c=yn,u=yn,h,d){super(null,r,a,l,c,u,s,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hs=new Ft,Eh=new Ft,Br=[],Th=new Ei,W_=new Ft,So=new ht,Eo=new po;class kn extends ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Th.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Th)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new po),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Eo.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Eo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),t.ray.intersectsSphere(Eo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Hs),Eh.multiplyMatrices(n,Hs),So.matrixWorld=Eh,So.raycast(t,Br);for(let r=0,a=Br.length;r<a;r++){const l=Br[r];l.instanceId=o,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new V_(new Float32Array(s*this.count),s,this.count,Vc,Kn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ca extends mo{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ah=new Ft,Sc=new $c,Hr=new po,Gr=new L;class Ec extends Re{constructor(t=new Se,e=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=o,t.ray.intersectsSphere(Hr)===!1)return;Ah.copy(s).invert(),Sc.copy(t.ray).applyMatrix4(Ah);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,x=f;g<x;g++){const p=c.getX(g);Gr.fromBufferAttribute(h,p),Ch(Gr,p,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,x=f;g<x;g++)Gr.fromBufferAttribute(h,g),Ch(Gr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ch(i,t,e,n,s,o,r){const a=Sc.distanceSqToPoint(i);if(a<e){const l=new L;Sc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Jc extends Ve{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new rt:new L);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],o=[],r=[],a=new L,l=new Ft;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}o[0]=new L,r[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(ze(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Kc extends si{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class X_ extends Kc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,u,h){let d=(r-o)/c-(a-o)/(c+u)+(a-r)/u,f=(a-r)/u-(l-r)/(u+h)+(l-a)/h;d*=u,f*=u,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Vr=new L,Sl=new Qc,El=new Qc,Tl=new Qc;class Aa extends si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%o]:(Vr.subVectors(s[0],s[1]).add(s[0]),c=Vr);const h=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Vr.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Sl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,p),El.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,p),Tl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),El.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Tl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Sl.calc(l),El.calc(l),Tl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function q_(i,t){const e=1-i;return e*e*t}function Y_(i,t){return 2*(1-i)*i*t}function $_(i,t){return i*i*t}function Fo(i,t,e,n){return q_(i,t)+Y_(i,e)+$_(i,n)}function j_(i,t){const e=1-i;return e*e*e*t}function Z_(i,t){const e=1-i;return 3*e*e*i*t}function J_(i,t){return 3*(1-i)*i*i*t}function K_(i,t){return i*i*i*t}function Oo(i,t,e,n,s){return j_(i,t)+Z_(i,e)+J_(i,n)+K_(i,s)}class nf extends si{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Oo(t,s.x,o.x,r.x,a.x),Oo(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q_ extends si{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Oo(t,s.x,o.x,r.x,a.x),Oo(t,s.y,o.y,r.y,a.y),Oo(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sf extends si{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tv extends si{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends si{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Fo(t,s.x,o.x,r.x),Fo(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends si{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Fo(t,s.x,o.x,r.x),Fo(t,s.y,o.y,r.y),Fo(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(Rh(a,l.x,c.x,u.x,h.x),Rh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var ua=Object.freeze({__proto__:null,ArcCurve:X_,CatmullRomCurve3:Aa,CubicBezierCurve:nf,CubicBezierCurve3:Q_,EllipseCurve:Kc,LineCurve:sf,LineCurve3:tv,QuadraticBezierCurve:of,QuadraticBezierCurve3:rf,SplineCurve:af});class ev extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ua[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ua[s.type]().fromJSON(s))}return this}}class Tc extends ev{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new sf(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new of(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new nf(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Kc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tu extends Se{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],u=1/e,h=new L,d=new rt,f=new L,g=new L,x=new L;let p=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=e;v++){const b=n+v*u*s,y=Math.sin(b),T=Math.cos(b);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*y,h.y=t[E].y,h.z=t[E].x*T,r.push(h.x,h.y,h.z),d.x=v/e,d.y=E/(t.length-1),a.push(d.x,d.y);const A=l[3*E+0]*y,S=l[3*E+1],w=l[3*E+0]*T;c.push(A,S,w)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){const y=b+v*t.length,T=y,E=y+t.length,A=y+t.length+1,S=y+1;o.push(T,E,S),o.push(A,S,E)}this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("uv",new Vt(a,2)),this.setAttribute("normal",new Vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.points,t.segments,t.phiStart,t.phiLength)}}class ha extends tu{constructor(t=1,e=1,n=4,s=8){const o=new Tc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ha(t.radius,t.length,t.capSegments,t.radialSegments)}}class Gn extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new L,u=new rt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class de extends Se{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],f=[];let g=0;const x=[],p=n/2;let m=0;v(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function v(){const y=new L,T=new L;let E=0;const A=(e-t)/n;for(let S=0;S<=o;S++){const w=[],M=S/o,R=M*(e-t)+t;for(let N=0;N<=s;N++){const U=N/s,F=U*l+a,Y=Math.sin(F),B=Math.cos(F);T.x=R*Y,T.y=-M*n+p,T.z=R*B,h.push(T.x,T.y,T.z),y.set(Y,A,B).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-M),w.push(g++)}x.push(w)}for(let S=0;S<s;S++)for(let w=0;w<o;w++){const M=x[w][S],R=x[w+1][S],N=x[w+1][S+1],U=x[w][S+1];(t>0||w!==0)&&(u.push(M,R,U),E+=3),(e>0||w!==o-1)&&(u.push(R,N,U),E+=3)}c.addGroup(m,E,0),m+=E}function b(y){const T=g,E=new rt,A=new L;let S=0;const w=y===!0?t:e,M=y===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),g++;const R=g;for(let N=0;N<=s;N++){const F=N/s*l+a,Y=Math.cos(F),B=Math.sin(F);A.x=w*B,A.y=p*M,A.z=w*Y,h.push(A.x,A.y,A.z),d.push(0,M,0),E.x=Y*.5+.5,E.y=B*.5*M+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){const U=T+N,F=R+N;y===!0?u.push(F,F+1,U):u.push(F+1,F,U),S+=3}c.addGroup(m,S,y===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mn extends de{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lr extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const b=new L,y=new L,T=new L;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],y),f(e[E+2],T),l(b,y,T,v)}function l(v,b,y,T){const E=T+1,A=[];for(let S=0;S<=E;S++){A[S]=[];const w=v.clone().lerp(y,S/E),M=b.clone().lerp(y,S/E),R=E-S;for(let N=0;N<=R;N++)N===0&&S===E?A[S][N]=w:A[S][N]=w.clone().lerp(M,N/R)}for(let S=0;S<E;S++)for(let w=0;w<2*(E-S)-1;w++){const M=Math.floor(w/2);w%2===0?(d(A[S][M+1]),d(A[S+1][M]),d(A[S][M])):(d(A[S][M+1]),d(A[S+1][M+1]),d(A[S+1][M]))}}function c(v){const b=new L;for(let y=0;y<o.length;y+=3)b.x=o[y+0],b.y=o[y+1],b.z=o[y+2],b.normalize().multiplyScalar(v),o[y+0]=b.x,o[y+1]=b.y,o[y+2]=b.z}function u(){const v=new L;for(let b=0;b<o.length;b+=3){v.x=o[b+0],v.y=o[b+1],v.z=o[b+2];const y=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;r.push(y,1-T)}g(),h()}function h(){for(let v=0;v<r.length;v+=6){const b=r[v+0],y=r[v+2],T=r[v+4],E=Math.max(b,y,T),A=Math.min(b,y,T);E>.9&&A<.1&&(b<.2&&(r[v+0]+=1),y<.2&&(r[v+2]+=1),T<.2&&(r[v+4]+=1))}}function d(v){o.push(v.x,v.y,v.z)}function f(v,b){const y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){const v=new L,b=new L,y=new L,T=new L,E=new rt,A=new rt,S=new rt;for(let w=0,M=0;w<o.length;w+=9,M+=6){v.set(o[w+0],o[w+1],o[w+2]),b.set(o[w+3],o[w+4],o[w+5]),y.set(o[w+6],o[w+7],o[w+8]),E.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),S.set(r[M+4],r[M+5]),T.copy(v).add(b).add(y).divideScalar(3);const R=p(T);x(E,M+0,v,R),x(A,M+2,b,R),x(S,M+4,y,R)}}function x(v,b,y,T){T<0&&v.x===1&&(r[b]=v.x-1),y.x===0&&y.z===0&&(r[b]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.vertices,t.indices,t.radius,t.details)}}class Ca extends lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class Ra extends Tc{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Tc().fromJSON(s))}return this}}const nv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=lf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,u,h,d,f;if(n&&(o=av(i,t,o,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Ko(o,r,e,a,l,f,0),r}};function lf(i,t,e,n,s){let o,r;if(s===yv(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Ph(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Ph(o,i[o],i[o+1],r);return r&&Pa(r,r.next)&&(tr(r),r=r.next),r}function vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pa(e,e.next)||Ae(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ko(i,t,e,n,s,o,r){if(!i)return;!r&&o&&dv(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?sv(i,n,s,o):iv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),tr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=ov(vs(i),t,e),Ko(i,t,e,n,s,o,2)):r===2&&rv(i,t,e,n,s,o):Ko(vs(i),t,e,n,s,o,1);break}}}function iv(i){const t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,u=s<o?s<r?s:r:o<r?o:r,h=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&$s(s,a,o,l,r,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sv(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ae(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,u=s.y,h=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,p=u>h?u>d?u:d:h>d?h:d,m=Ac(f,g,t,e,n),v=Ac(x,p,t,e,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==r&&$s(a,u,l,h,c,d,b.x,b.y)&&Ae(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==r&&$s(a,u,l,h,c,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==r&&$s(a,u,l,h,c,d,b.x,b.y)&&Ae(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==r&&$s(a,u,l,h,c,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ov(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Pa(s,o)&&cf(s,n,n.next,o)&&Qo(s,o)&&Qo(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),tr(n),tr(n.next),n=i=o),n=n.next}while(n!==i);return vs(n)}function rv(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&mv(r,a)){let l=uf(r,a);r=vs(r,r.next),l=vs(l,l.next),Ko(r,t,e,n,s,o,0),Ko(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function av(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=lf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(pv(c));for(s.sort(lv),o=0;o<s.length;o++)e=cv(s[o],e);return e}function lv(i,t){return i.x-t.x}function cv(i,t){const e=uv(i,t);if(!e)return t;const n=uf(e,i);return vs(n,n.next),vs(e,e.next)}function uv(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&$s(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),Qo(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&hv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function hv(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function dv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fv(s)}function fv(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function Ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $s(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function mv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gv(i,t)&&(Qo(i,t)&&Qo(t,i)&&xv(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||Pa(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pa(i,t){return i.x===t.x&&i.y===t.y}function cf(i,t,e,n){const s=Xr(Ae(i,t,e)),o=Xr(Ae(i,t,n)),r=Xr(Ae(e,n,i)),a=Xr(Ae(e,n,t));return!!(s!==o&&r!==a||s===0&&Wr(i,e,t)||o===0&&Wr(i,n,t)||r===0&&Wr(e,i,n)||a===0&&Wr(e,t,n))}function Wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xr(i){return i>0?1:i<0?-1:0}function gv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qo(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function xv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uf(i,t){const e=new Cc(i.i,i.x,i.y),n=new Cc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ph(i,t,e,n){const s=new Cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yv(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class zo{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return zo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Lh(t),Ih(n,t);let r=t.length;e.forEach(Lh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Ih(n,e[l]);const a=nv.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Lh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class cr extends Se{constructor(t=new Ra([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:_v;let b,y=!1,T,E,A,S;m&&(b=m.getSpacedPoints(u),y=!0,d=!1,T=m.computeFrenetFrames(u,!1),E=new L,A=new L,S=new L),d||(p=0,f=0,g=0,x=0);const w=a.extractPoints(c);let M=w.shape;const R=w.holes;if(!zo.isClockWise(M)){M=M.reverse();for(let J=0,at=R.length;J<at;J++){const D=R[J];zo.isClockWise(D)&&(R[J]=D.reverse())}}const U=zo.triangulateShape(M,R),F=M;for(let J=0,at=R.length;J<at;J++){const D=R[J];M=M.concat(D)}function Y(J,at,D){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(at,D)}const B=M.length,K=U.length;function X(J,at,D){let Nt,ot,bt;const dt=J.x-at.x,Ht=J.y-at.y,vt=D.x-J.x,I=D.y-J.y,C=dt*dt+Ht*Ht,H=dt*I-Ht*vt;if(Math.abs(H)>Number.EPSILON){const j=Math.sqrt(C),et=Math.sqrt(vt*vt+I*I),Z=at.x-Ht/j,Rt=at.y+dt/j,pt=D.x-I/et,Mt=D.y+vt/et,ne=((pt-Z)*I-(Mt-Rt)*vt)/(dt*I-Ht*vt);Nt=Z+dt*ne-J.x,ot=Rt+Ht*ne-J.y;const lt=Nt*Nt+ot*ot;if(lt<=2)return new rt(Nt,ot);bt=Math.sqrt(lt/2)}else{let j=!1;dt>Number.EPSILON?vt>Number.EPSILON&&(j=!0):dt<-Number.EPSILON?vt<-Number.EPSILON&&(j=!0):Math.sign(Ht)===Math.sign(I)&&(j=!0),j?(Nt=-Ht,ot=dt,bt=Math.sqrt(C)):(Nt=dt,ot=Ht,bt=Math.sqrt(C/2))}return new rt(Nt/bt,ot/bt)}const st=[];for(let J=0,at=F.length,D=at-1,Nt=J+1;J<at;J++,D++,Nt++)D===at&&(D=0),Nt===at&&(Nt=0),st[J]=X(F[J],F[D],F[Nt]);const q=[];let nt,wt=st.concat();for(let J=0,at=R.length;J<at;J++){const D=R[J];nt=[];for(let Nt=0,ot=D.length,bt=ot-1,dt=Nt+1;Nt<ot;Nt++,bt++,dt++)bt===ot&&(bt=0),dt===ot&&(dt=0),nt[Nt]=X(D[Nt],D[bt],D[dt]);q.push(nt),wt=wt.concat(nt)}for(let J=0;J<p;J++){const at=J/p,D=f*Math.cos(at*Math.PI/2),Nt=g*Math.sin(at*Math.PI/2)+x;for(let ot=0,bt=F.length;ot<bt;ot++){const dt=Y(F[ot],st[ot],Nt);it(dt.x,dt.y,-D)}for(let ot=0,bt=R.length;ot<bt;ot++){const dt=R[ot];nt=q[ot];for(let Ht=0,vt=dt.length;Ht<vt;Ht++){const I=Y(dt[Ht],nt[Ht],Nt);it(I.x,I.y,-D)}}}const zt=g+x;for(let J=0;J<B;J++){const at=d?Y(M[J],wt[J],zt):M[J];y?(A.copy(T.normals[0]).multiplyScalar(at.x),E.copy(T.binormals[0]).multiplyScalar(at.y),S.copy(b[0]).add(A).add(E),it(S.x,S.y,S.z)):it(at.x,at.y,0)}for(let J=1;J<=u;J++)for(let at=0;at<B;at++){const D=d?Y(M[at],wt[at],zt):M[at];y?(A.copy(T.normals[J]).multiplyScalar(D.x),E.copy(T.binormals[J]).multiplyScalar(D.y),S.copy(b[J]).add(A).add(E),it(S.x,S.y,S.z)):it(D.x,D.y,h/u*J)}for(let J=p-1;J>=0;J--){const at=J/p,D=f*Math.cos(at*Math.PI/2),Nt=g*Math.sin(at*Math.PI/2)+x;for(let ot=0,bt=F.length;ot<bt;ot++){const dt=Y(F[ot],st[ot],Nt);it(dt.x,dt.y,h+D)}for(let ot=0,bt=R.length;ot<bt;ot++){const dt=R[ot];nt=q[ot];for(let Ht=0,vt=dt.length;Ht<vt;Ht++){const I=Y(dt[Ht],nt[Ht],Nt);y?it(I.x,I.y+b[u-1].y,b[u-1].x+D):it(I.x,I.y,h+D)}}}G(),Q();function G(){const J=s.length/3;if(d){let at=0,D=B*at;for(let Nt=0;Nt<K;Nt++){const ot=U[Nt];Ct(ot[2]+D,ot[1]+D,ot[0]+D)}at=u+p*2,D=B*at;for(let Nt=0;Nt<K;Nt++){const ot=U[Nt];Ct(ot[0]+D,ot[1]+D,ot[2]+D)}}else{for(let at=0;at<K;at++){const D=U[at];Ct(D[2],D[1],D[0])}for(let at=0;at<K;at++){const D=U[at];Ct(D[0]+B*u,D[1]+B*u,D[2]+B*u)}}n.addGroup(J,s.length/3-J,0)}function Q(){const J=s.length/3;let at=0;ct(F,at),at+=F.length;for(let D=0,Nt=R.length;D<Nt;D++){const ot=R[D];ct(ot,at),at+=ot.length}n.addGroup(J,s.length/3-J,1)}function ct(J,at){let D=J.length;for(;--D>=0;){const Nt=D;let ot=D-1;ot<0&&(ot=J.length-1);for(let bt=0,dt=u+p*2;bt<dt;bt++){const Ht=B*bt,vt=B*(bt+1),I=at+Nt+Ht,C=at+ot+Ht,H=at+ot+vt,j=at+Nt+vt;Dt(I,C,H,j)}}}function it(J,at,D){l.push(J),l.push(at),l.push(D)}function Ct(J,at,D){kt(J),kt(at),kt(D);const Nt=s.length/3,ot=v.generateTopUV(n,s,Nt-3,Nt-2,Nt-1);qt(ot[0]),qt(ot[1]),qt(ot[2])}function Dt(J,at,D,Nt){kt(J),kt(at),kt(Nt),kt(at),kt(D),kt(Nt);const ot=s.length/3,bt=v.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);qt(bt[0]),qt(bt[1]),qt(bt[3]),qt(bt[1]),qt(bt[2]),qt(bt[3])}function kt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function qt(J){o.push(J.x),o.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vv(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ua[s.type]().fromJSON(s)),new cr(n,t.options)}}const _v={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new rt(o,r),new rt(a,l),new rt(c,u)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new rt(r,1-l),new rt(c,1-h),new rt(d,1-g),new rt(x,1-m)]:[new rt(a,1-l),new rt(u,1-h),new rt(f,1-g),new rt(p,1-m)]}};function vv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class La extends lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class Ia extends lr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ia(t.radius,t.detail)}}class Da extends Se{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,f=new L,g=new rt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=o+p/n*r;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const v=m+p,b=v,y=v+n+1,T=v+n+2,E=v+1;a.push(b,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Bt extends Se{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const v=[],b=m/n;let y=0;m===0&&r===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const E=T/e;h.x=-t*Math.cos(s+E*o)*Math.sin(r+b*a),h.y=t*Math.cos(r+b*a),h.z=t*Math.sin(s+E*o)*Math.sin(r+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),p.push(E+y,1-b),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const b=u[m][v+1],y=u[m][v],T=u[m+1][v],E=u[m+1][v+1];(m!==0||r>0)&&f.push(b,y,E),(m!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bi extends Se{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*o,p=f/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(x),h.y=(t+e*Math.cos(p))*Math.sin(x),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,v=(s+1)*f+g;r.push(x,p,v),r.push(p,m,v)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class eu extends Se{constructor(t=new rf(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new L,l=new L,c=new rt;let u=new L;const h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function x(){for(let b=0;b<e;b++)p(b);p(o===!1?e:0),v(),m()}function p(b){u=t.getPointAt(b/e,u);const y=r.normals[b],T=r.binormals[b];for(let E=0;E<=s;E++){const A=E/s*Math.PI*2,S=Math.sin(A),w=-Math.cos(A);l.x=w*y.x+S*T.x,l.y=w*y.y+S*T.y,l.z=w*y.z+S*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){const T=(s+1)*(b-1)+(y-1),E=(s+1)*b+(y-1),A=(s+1)*b+y,S=(s+1)*(b-1)+y;g.push(T,E,S),g.push(E,A,S)}}function v(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)c.x=b/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new eu(new ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ee extends mo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Dh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mv{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const bv=new Mv;class nu{constructor(t){this.manager=t!==void 0?t:bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nu.DEFAULT_MATERIAL_NAME="__DEFAULT";class wv extends nu{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Dh.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=Jo("img");function l(){u(),Dh.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(h){u(),s&&s(h),o.manager.itemError(t),o.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class Sv extends nu{constructor(t){super(t)}load(t,e,n,s){const o=new Ve,r=new wv(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Na extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ev extends Na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Al=new Ft,Nh=new L,Uh=new L;class hf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uh),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fh=new Ft,To=new L,Cl=new L;class Tv extends hf{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),To.setFromMatrixPosition(t.matrixWorld),n.position.copy(To),Cl.copy(n.position),Cl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cl),n.updateMatrixWorld(),s.makeTranslation(-To.x,-To.y,-To.z),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}}class Ua extends Na{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Av extends hf{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cv extends Na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rv extends Na{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Oh=new Ft;class df{constructor(t,e,n=0,s=1/0){this.ray=new $c(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Oh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(t,e=!0,n=[]){return Rc(t,this,n,e),n.sort(zh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Rc(t[s],this,n,e);return n.sort(zh),n}}function zh(i,t){return i.distance-t.distance}function Rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Rc(o[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);const wi=3,ff=3,ei=7,Ao=5,Bn=600,ie=32,zi=42,Fa=[{id:"sword",count:1,label:"Sword"},{id:"drumstick",count:6,label:"Drumstick (feed dragons)"},{id:"bread",count:5,label:"Bread (heal you)"},{id:"block_wood",count:24,label:"Wood block (build)"},{id:"block_stone",count:16,label:"Stone block (build)"},{id:"axe",count:1,label:"Axe (chop trees)"},{id:"pickaxe",count:1,label:"Pickaxe"},{id:"water_bucket",count:1,label:"Bucket"},{id:"torch",count:4,label:"Torch"}],Pv=[{id:"dragon_book",count:1,label:"Dragon Types"},{id:"round_charm",count:1,label:"Camp charm"}],Lv=[{id:"axe",count:1,label:"Axe (chop trees)"},{id:"pickaxe",count:1,label:"Pickaxe"},{id:"water_bucket",count:1,label:"Bucket"},{id:"torch",count:4,label:"Torch"}],_i=7,Iv={ember:{body:"#e86a3a",belly:"#f0c070",wing:"#c04030",name:"Ember"},moss:{body:"#4a8a55",belly:"#c5d98a",wing:"#2f6a40",name:"Moss"},sky:{body:"#4a90c8",belly:"#d0e8f8",wing:"#2a5a9a",name:"Sky"},amethyst:{body:"#8a5cb8",belly:"#e0c8f0",wing:"#5a3080",name:"Amethyst"},sunshine:{body:"#f0c040",belly:"#fff0b0",wing:"#e09020",name:"Sunshine"},coral:{body:"#f08090",belly:"#ffe0e8",wing:"#d05070",name:"Coral"}},Dv={hair:"#f5d94a",top:"#3a7fd4",trousers:"#9b7bc8",shoes:"#4a2f6a",skin:"#f0c9a8"},di=[{id:"meadow",inner:0,outer:80,label:"Meadow Home"},{id:"forest",inner:80,outer:200,label:"Whispering Forest"},{id:"lake",inner:200,outer:320,label:"Silver Lakes"},{id:"rocky",inner:320,outer:420,label:"Stone Highlands"},{id:"snow",inner:420,outer:500,label:"Frost Peaks"},{id:"dragon_lands",inner:500,outer:1e9,label:"Dragon Lands"}],kh=40;function Bh(i,t){const e=Math.atan2(t,i);return Math.sin(e+Math.PI*.25)+(Math.sin(i*.01)+Math.cos(t*.01))*.15>0?{id:"desert",label:"Sunbaked Dunes"}:{id:"snow",label:"Frost Peaks"}}const Nv={meadow:{color:"#c5ddf2",density:.006,sky:"#a8d4f5"},forest:{color:"#a0b898",density:.008,sky:"#88b090"},lake:{color:"#a8c8e8",density:.006,sky:"#8eb8e0"},rocky:{color:"#c8c0b8",density:.007,sky:"#b0b8c0"},snow:{color:"#d8e8f8",density:.008,sky:"#c8d8f0"},desert:{color:"#e8d8b0",density:.006,sky:"#e0c888"},dragon_lands:{color:"#684848",density:.007,sky:"#6a5058"}};function ln(i,t){const e=Math.hypot(i,t),n=Math.sin(i*.037)*8+Math.cos(t*.029)*7+Math.sin((i+t)*.019)*5,s=Math.max(0,e+n);let o="meadow",r="Meadow Home",a=80;for(let d=0;d<di.length;d++){const f=di[d];if(s<f.outer||d===di.length-1){o=f.id,r=f.label,a=f.outer,f.inner;break}}if(o==="snow"||s>=420&&s<500){const d=Bh(i,t);o=d.id,r=d.label}let l=null,c=0;const u=a-s;if(u<kh&&a<1e8){c=1-u/kh,c=Math.max(0,Math.min(1,c)),di.find(g=>g.inner>=a-.1)??di[di.length-1];const d=di.findIndex(g=>g.outer===a),f=di[Math.min(di.length-1,d+1)];l=f.id==="snow"?Bh(i,t).id:f.id}const h=Nv[o];return{primary:o,secondary:l,blend:c,label:r,fogColor:h.color,fogDensity:h.density,skyTint:h.sky}}function Zi(i,t,e){return Math.max(t,Math.min(e,i))}function ur(i,t){const e=i.x-t.x,n=i.z-t.z;return Math.hypot(e,n)}function Hh(i){const t=Bn-1,e=Math.hypot(i.x,i.z);let n=i.x,s=i.z;if(e>t){const o=t/e;n*=o,s*=o}return{x:n,y:Zi(i.y,-20,120),z:s}}function Uv(i,t,e){return t||e?!1:i==="adventure"}function Fv(i,t){return t?!1:i==="safe_build"||i==="adventure"}function Ov(i,t){const e=i.player.monstersDefeated+1,n=i.player.stars+1;let s=i.player.level,o=i.player.levelProgress;const r=e/Ao;o=Zi(r%1===0&&r>0?1:r-Math.floor(r),0,1),e>0&&e%Ao===0?!i.settings.useStarsForLevelUnlock||n>=i.settings.starsToUnlockNextLevel?(s+=1,o=0):o=.99:o=Zi(e%Ao/Ao,0,1);const a=i.flags.firstObjectiveComplete||e>=Ao;return{...i,player:{...i.player,monstersDefeated:e,stars:n,level:s,levelProgress:o},flags:{...i.flags,firstObjectiveComplete:a}}}function zv(i,t,e){const n=i.find(a=>a.id===t);if(!n)return{companions:i,bondedNow:!1,rejected:"missing"};if(n.bonded)return{companions:i,bondedNow:!1,rejected:"already_bonded"};if(i.filter(a=>a.bonded).length>=ff)return{companions:i,bondedNow:!1,rejected:"max_companions"};let o=!1;return{companions:i.map(a=>{if(a.id!==t)return a;const l=Zi(a.tameness+e,0,1),c=l>=1;return c&&!a.bonded&&(o=!0),{...a,tameness:l,bonded:c}}),bondedNow:o,rejected:null}}function Pc(i,t,e){if(e!=="grounded")return{ok:!1,mount:e,mountedCompanionId:t,reason:"already_mounted"};const n=i.find(s=>s.id===t);return!n||!n.bonded||n.kind!=="dragon"?{ok:!1,mount:"grounded",mountedCompanionId:null,reason:"need_bonded_dragon"}:{ok:!0,mount:"mounted",mountedCompanionId:t}}function kv(i,t,e=2.5){return i==="grounded"?{ok:!1,mount:i,reason:"not_mounted"}:t>e?{ok:!0,mount:"grounded",softLanding:!0}:{ok:!0,mount:"grounded",softLanding:!1}}function Lc(i){return i==="mounted"||i==="flying"?"flying":i}function Bv(i,t){return i!=="flying"?i:t<=1.2?"mounted":"flying"}function Rl(i,t,e,n,s,o=200){if(!Fv(n,s))return{blocks:i,ok:!1,reason:"blocked"};if(i.length>=o)return{blocks:i,ok:!1,reason:"full"};const r=`${t.x}|${t.y}|${t.z}`;if(i.some(l=>`${l.x}|${l.y}|${l.z}`===r))return{blocks:i,ok:!1,reason:"occupied"};const a=`b_${i.length}_${t.x}_${t.y}_${t.z}`;return{blocks:[...i,{id:a,...t,material:e}],ok:!0}}function Ic(i,t,e){return i===t?{mode:i}:{mode:"adventure",flagsPatch:{readyToBattleAcknowledged:!0}}}function Gh(i,t){return Zi(i-t,0,ei)}function Hv(i,t,e=ei){return Zi(i+t,0,e)}const Gv="dragon-master-trilli",Vv=Gv,Wv=Vv,co="saves",pf="primary";async function Xv(i){return{imported:!1,note:null}}function mf(i=1){const t=[],e=[{r:22,kind:"field_monster",n:4},{r:120,kind:"forest_sprite",n:4},{r:250,kind:"river_skimmer",n:3},{r:360,kind:"stone_mite",n:3},{r:480,kind:"frost_puff",n:2},{r:500,kind:"sand_wisp",n:2},{r:580,kind:"ember_mite",n:3}];let n=0;for(const o of e)for(let r=0;r<o.n;r++){const a=r/o.n*Math.PI*2+o.r*.01;let l=o.kind;o.r>=440&&o.r<560&&(l=Math.cos(a)>0?"sand_wisp":"frost_puff"),t.push({id:`m_${n++}`,kind:l,position:{x:Math.cos(a)*o.r,y:0,z:Math.sin(a)*o.r},hp:3,maxHp:3,alive:!0,hostile:!1})}const s=[{id:"wild_ember",kind:"dragon",name:"Ember Dragon",palette:"ember",tameness:0,bonded:!1,position:{x:3.2,y:0,z:4.5}},{id:"wild_sky",kind:"dragon",name:"Sky Dragon",palette:"sky",tameness:0,bonded:!1,position:{x:-16,y:0,z:10}},{id:"wild_moss",kind:"dragon",name:"Moss Dragon",palette:"moss",tameness:0,bonded:!1,position:{x:6,y:0,z:-22}},{id:"wild_amethyst",kind:"dragon",name:"Amethyst Dragon",palette:"amethyst",tameness:0,bonded:!1,position:{x:-10,y:0,z:-18}}];return{version:wi,savedAt:new Date().toISOString(),player:{position:{x:0,y:1.6,z:3},yaw:0,pitch:0,hearts:ei,maxHearts:ei,level:1,levelProgress:0,stars:0,monstersDefeated:0,mode:"safe_build",mount:"grounded",mountedCompanionId:null,selectedHotbar:0,hotbar:Fa.map(o=>({...o})),inventory:Pv.map(o=>({...o})),hunger:_i,timeOfDay:8,appearance:{...Dv},sprinting:!1},companions:s,monsters:t,blocks:[],choppedTrees:[],pickedIds:[],flags:{firstObjectiveComplete:!1,tutorialSeen:!1,readyToBattleAcknowledged:!1,buildGuideComplete:!1,welcomeShownOnce:!1},settings:{muted:!1,quality:"medium",starsToUnlockNextLevel:20,useStarsForLevelUnlock:!1}}}function gf(i){const t={...i.player},e=t.hotbar.map(o=>({...o})),n=Array.isArray(t.inventory)?t.inventory.map(o=>({...o})):[],s=new Set([...e,...n].map(o=>o.id));for(const o of Lv)s.has(o.id)||o.id==="water_bucket"&&s.has("water_bucket_full")||(e.length<12?e.push({...o}):n.push({...o}));return t.hotbar=e,t.inventory=n,Number.isFinite(t.hunger)||(t.hunger=_i),t.hunger=Math.max(0,Math.min(_i,t.hunger)),Number.isFinite(t.timeOfDay)||(t.timeOfDay=8),t.timeOfDay=(t.timeOfDay%24+24)%24,{...i,version:wi,player:t,choppedTrees:Array.isArray(i.choppedTrees)?[...i.choppedTrees]:[],pickedIds:Array.isArray(i.pickedIds)?[...i.pickedIds]:[]}}function qv(i,t){const e=gf({...i,version:wi}),n=t(e.player.position.x,e.player.position.z),s=1.55;(!Number.isFinite(e.player.position.y)||e.player.position.y<n+.5||e.player.position.y>n+80)&&(e.player={...e.player,position:{...e.player.position,y:n+s}});const o=Math.hypot(e.player.position.x,e.player.position.z);if(o>598){const r=598/o;e.player.position={x:e.player.position.x*r,y:e.player.position.y,z:e.player.position.z*r};const a=t(e.player.position.x,e.player.position.z);e.player.position.y=a+s}return e.companions=e.companions.map(r=>{const a=t(r.position.x,r.position.z);return{...r,position:{...r.position,y:a}}}),e.monsters=e.monsters.map(r=>{const a=t(r.position.x,r.position.z);return{...r,position:{...r.position,y:a}}}),e}function Rn(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Wi(i,t,e){const n=typeof i=="number"?i:Number(i);return!Number.isFinite(n)||n<t||n>e?null:n}function iu(i,t=Bn+40){if(!Rn(i))return null;const e=Wi(i.x,-t,t),n=Wi(i.y,-5,120),s=Wi(i.z,-t,t);return e==null||n==null||s==null?null:{x:e,y:n,z:s}}function Yv(i){if(i===void 0||!Array.isArray(i)||i.length>40)return null;const t=[];for(const e of i){if(!Rn(e)||typeof e.id!="string"||typeof e.label!="string")return null;const n=Number(e.count);if(!Number.isFinite(n)||n<0||n>99)return null;t.push({id:e.id,count:n,label:e.label.slice(0,40)})}return t}function $v(i){if(!Array.isArray(i)||i.length<1||i.length>16)return null;const t=[];for(const e of i){if(!Rn(e)||typeof e.id!="string"||typeof e.label!="string")return null;const n=Number(e.count);if(!Number.isFinite(n)||n<0||n>99)return null;t.push({id:e.id,count:n,label:e.label.slice(0,40)})}return t}function jv(i){if(!Array.isArray(i)||i.length>12)return null;const t=[];let e=0;for(const n of i){if(!Rn(n)||typeof n.id!="string"||typeof n.name!="string"||n.kind!=="dragon"&&n.kind!=="animal")return null;const s=Number(n.tameness);if(!Number.isFinite(s)||s<0||s>1||typeof n.bonded!="boolean"||(n.bonded&&e++,e>ff))return null;const o=iu(n.position);if(!o)return null;t.push({...n,position:o,tameness:s})}return t}function Zv(i){if(!Array.isArray(i)||i.length>80)return null;const t=[];for(const e of i){if(!Rn(e)||typeof e.id!="string")return null;const n=Number(e.hp),s=Number(e.maxHp);if(!Number.isFinite(n)||!Number.isFinite(s)||n<0||n>20||s<1||s>20)return null;const o=typeof e.hostile=="boolean"?e.hostile:!1,r=iu(e.position);if(!r)return null;t.push({...e,hostile:o,position:r,hp:n,maxHp:s})}return t}function Jv(i){if(!Array.isArray(i)||i.length>250)return null;const t=[];for(const e of i){if(!Rn(e)||typeof e.id!="string"||e.material!=="wood"&&e.material!=="stone")return null;const n=Wi(e.x,-Bn-40,Bn+40),s=Wi(e.y,-20,120),o=Wi(e.z,-Bn-40,Bn+40);if(n==null||s==null||o==null)return null;t.push({id:String(e.id).slice(0,64),x:n,y:s,z:o,material:e.material})}return t}function xf(i){if(!Rn(i))return null;const t=Number(i.version);if(!Number.isInteger(t)||t<1||t>wi||!Rn(i.player)||!Rn(i.flags)||!Rn(i.settings))return null;const e=$v(i.player.hotbar);if(!e)return null;const n=jv(i.companions);if(!n)return null;const s=Zv(i.monsters);if(!s)return null;const o=Jv(i.blocks);if(!o)return null;const r=Number(i.player.hearts);if(!Number.isFinite(r)||r<0||r>ei)return null;const a=iu(i.player.position);if(!a)return null;const l=Wi(i.player.yaw,-100,100);if(l==null)return null;const c=-60*Math.PI/180,u=25*Math.PI/180;let h=Wi(i.player.pitch,-100,100);h==null||!Number.isFinite(h)?h=-.18:h=Math.max(c,Math.min(u,h));const d=mf();try{const f={...d,version:wi,savedAt:typeof i.savedAt=="string"?i.savedAt:new Date().toISOString(),player:{...d.player,...i.player,hearts:Zi(r,0,ei),maxHearts:ei,hotbar:e,position:a,yaw:l,pitch:h,appearance:{...d.player.appearance,...Rn(i.player.appearance)?i.player.appearance:{}},inventory:Yv(i.player.inventory)??[],hunger:Number.isFinite(Number(i.player.hunger))?Math.max(0,Math.min(_i,Number(i.player.hunger))):d.player.hunger,timeOfDay:Number.isFinite(Number(i.player.timeOfDay))?(Number(i.player.timeOfDay)%24+24)%24:d.player.timeOfDay},companions:n,monsters:s,blocks:o,choppedTrees:Array.isArray(i.choppedTrees)?i.choppedTrees.filter(g=>typeof g=="string").slice(0,400):[],pickedIds:Array.isArray(i.pickedIds)?i.pickedIds.filter(g=>typeof g=="string").slice(0,400):[],flags:{...d.flags,...i.flags},settings:{...d.settings,...i.settings,starsToUnlockNextLevel:Zi(Number(i.settings.starsToUnlockNextLevel)||20,1,100),useStarsForLevelUnlock:!!i.settings.useStarsForLevelUnlock}};return gf(f)}catch{return null}}function Kv(i){const t={...i,savedAt:new Date().toISOString(),version:wi};return JSON.stringify(t,null,2)}function Qv(i,t){try{if(i.length>5e5)return{ok:!1,error:"Save file too large.",previous:t};const e=JSON.parse(i),n=xf(e);return n?{ok:!0,state:n}:{ok:!1,error:"Save failed validation (schema or bounds).",previous:t}}catch{return{ok:!1,error:"Save JSON could not be parsed.",previous:t}}}function yf(){return new Promise((i,t)=>{const e=indexedDB.open(Wv,1);e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(co)||n.createObjectStore(co)},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function tM(){if(typeof indexedDB>"u")return null;const i=await yf();return new Promise((t,e)=>{const s=i.transaction(co,"readonly").objectStore(co).get(pf);s.onsuccess=()=>{const o=s.result;if(!o){t(null);return}const r=Rn(o)&&Number.isInteger(Number(o.version))?Number(o.version):0,a=xf(o);if(!a){t(null);return}t({state:a,incomingVersion:r})},s.onerror=()=>e(s.error)})}async function Ms(i){if(typeof indexedDB>"u")return;const t=await yf(),e={...i,savedAt:new Date().toISOString(),version:wi};return new Promise((n,s)=>{const o=t.transaction(co,"readwrite");o.objectStore(co).put(e,pf),o.oncomplete=()=>n(),o.onerror=()=>s(o.error)})}async function eM(){try{if(navigator.storage&&navigator.storage.persist)return await navigator.storage.persist()}catch{}return!1}function nM(i){return{...i,hostile:!!i.hostile}}function Pn(i){return i.map(nM)}function iM(i,t,e,n,s,o){if(!Uv(n,s,o))return{monsters:i,hit:!1,defeated:!1,becameHostile:!1};let r=!1,a=!1,l=!1;return{monsters:i.map(u=>{if(u.id!==t||!u.alive)return u;r=!0;const h=u.hostile,d=Math.max(0,u.hp-e);return d<=0&&(a=!0),h||(l=!0),{...u,hp:d,alive:d>0,hostile:!0}}),hit:r,defeated:a,becameHostile:l}}function sM(i){return i.alive&&i.hostile}function _f(i,t,e){const n=[];for(const s of i)s.alive&&ur(s.position,t)<=e&&n.push(s.id);return{nearbyIds:n,monsters:i.map(s=>({...s}))}}function oM(i,t,e=1.2){const n=_f(i,t,e);return{touchingIds:n.nearbyIds,monsters:n.monsters}}function da(i){return i.map(t=>({...t}))}function rM(i,t,e,n){let s=0;const o=[];for(const r of i)sM(r)&&ur(r.position,t)<=e&&(s+=n,o.push(r.id));return{damageToPlayer:s,attackerIds:o}}function aM(){return{forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,attack:!1,interact:!1,place:!1,removeBlock:!1,toggleMount:!1,readyBattle:!1,pause:!1,recenter:!1,slot:null,fireBreath:!1,toggleBag:!1,lookDx:0,lookDy:0,touchLookDx:0,touchLookDy:0,touchMoveX:0,touchMoveY:0}}const Vh=80;class lM{constructor(t,e){this.canvas=t,this.isMenuOpen=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),t.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===t;n&&!this.pointerLocked&&(this.ignoreNextLook=!0,this.state.lookDx=0,this.state.lookDy=0),this.pointerLocked=n}),this.setupTouch()}state=aM();keys=new Set;lastW=0;pointerLocked=!1;wantsLock=!1;attackQueued=!1;placeQueued=!1;readyQueued=!1;interactQueued=!1;mountQueued=!1;recenterQueued=!1;bagQueued=!1;touchJumpHeld=!1;ignoreNextLook=!1;armPointerLockIgnore(){this.ignoreNextLook=!0,this.state.lookDx=0,this.state.lookDy=0}requestLock(){this.wantsLock=!0,this.isMenuOpen()||this.canvas.requestPointerLock()}releaseLock(){this.wantsLock=!1,document.pointerLockElement&&document.exitPointerLock()}onKeyDown=t=>{if(t.code==="Escape"){this.state.pause=!0,this.releaseLock();return}if(t.code==="KeyI"||t.code==="KeyB"){this.state.toggleBag=!0,this.bagQueued=!0;return}if(!this.isMenuOpen()){if(this.keys.add(t.code),t.code==="KeyW"){const e=performance.now();e-this.lastW<280&&(this.state.sprint=!0),this.lastW=e}t.code>="Digit1"&&t.code<="Digit9"&&(this.state.slot=Number(t.code.replace("Digit",""))-1),t.code==="KeyE"&&(this.state.toggleMount=!0,this.mountQueued=!0),t.code==="KeyR"&&(this.state.readyBattle=!0,this.readyQueued=!0),t.code==="KeyF"&&(this.state.interact=!0,this.interactQueued=!0),t.code==="KeyQ"&&(this.state.fireBreath=!0),t.code==="KeyX"&&(this.state.removeBlock=!0),(t.code==="KeyC"||t.code==="Home")&&(this.state.recenter=!0,this.recenterQueued=!0,t.preventDefault())}};onKeyUp=t=>{this.keys.delete(t.code),t.code==="KeyW"&&(this.state.sprint=!1),t.code==="KeyQ"&&(this.state.fireBreath=!1)};onMouseDown=t=>{this.isMenuOpen()||(!this.pointerLocked&&t.button===0&&this.requestLock(),t.button===0&&(this.state.attack=!0,this.attackQueued=!0),t.button===2&&(this.state.place=!0,this.placeQueued=!0))};onMouseUp=t=>{t.button===0&&(this.state.attack=!1),t.button===2&&(this.state.place=!1)};onMouseMove=t=>{if(this.isMenuOpen()||!this.pointerLocked&&!this.wantsLock&&t.buttons!==1)return;if(this.ignoreNextLook){this.ignoreNextLook=!1;return}const e=t.movementX,n=t.movementY;Math.abs(e)>Vh||Math.abs(n)>Vh||(this.state.lookDx+=e,this.state.lookDy+=n)};setupTouch(){const t=document.getElementById("touch-move"),e=document.getElementById("touch-look"),n=document.getElementById("touch-jump"),s=document.getElementById("touch-action"),o=document.getElementById("touch-mount"),r=document.getElementById("touch-recenter"),a=document.getElementById("touch-fire");if(!t||!e)return;const l=(c,u)=>{let h=null,d=0,f=0;c.addEventListener("pointerdown",g=>{h=g.pointerId,d=g.clientX,f=g.clientY,c.setPointerCapture(h)}),c.addEventListener("pointermove",g=>{if(g.pointerId!==h)return;const x=(g.clientX-d)/40,p=(g.clientY-f)/40;u==="move"?(this.state.touchMoveX=Math.max(-1,Math.min(1,x)),this.state.touchMoveY=Math.max(-1,Math.min(1,p))):(this.state.touchLookDx=Math.max(-8,Math.min(8,x*4)),this.state.touchLookDy=Math.max(-8,Math.min(8,p*4)),d=g.clientX,f=g.clientY)}),c.addEventListener("pointerup",()=>{h=null,u==="move"?(this.state.touchMoveX=0,this.state.touchMoveY=0):(this.state.touchLookDx=0,this.state.touchLookDy=0)})};l(t,"move"),l(e,"look"),n?.addEventListener("pointerdown",()=>{this.touchJumpHeld=!0}),n?.addEventListener("pointerup",()=>{this.touchJumpHeld=!1}),n?.addEventListener("pointercancel",()=>{this.touchJumpHeld=!1}),s?.addEventListener("pointerdown",()=>{this.state.attack=!0}),s?.addEventListener("pointerup",()=>{this.state.attack=!1}),o?.addEventListener("pointerdown",()=>{this.state.toggleMount=!0}),r?.addEventListener("pointerdown",c=>{c.preventDefault(),this.state.recenter=!0,this.recenterQueued=!0}),a?.addEventListener("pointerdown",()=>{this.state.fireBreath=!0}),a?.addEventListener("pointerup",()=>{this.state.fireBreath=!1}),a?.addEventListener("pointercancel",()=>{this.state.fireBreath=!1})}sample(){this.isMenuOpen()||(this.state.forward=this.keys.has("KeyW")||this.state.touchMoveY<-.25,this.state.back=this.keys.has("KeyS")||this.state.touchMoveY>.25,this.state.left=this.keys.has("KeyA")||this.state.touchMoveX<-.25,this.state.right=this.keys.has("KeyD")||this.state.touchMoveX>.25,this.state.jump=this.keys.has("Space")||this.touchJumpHeld);const t={...this.state};return this.attackQueued&&(t.attack=!0),this.placeQueued&&(t.place=!0),this.readyQueued&&(t.readyBattle=!0),this.interactQueued&&(t.interact=!0),this.mountQueued&&(t.toggleMount=!0),this.recenterQueued&&(t.recenter=!0),this.bagQueued&&(t.toggleBag=!0),this.attackQueued=!1,this.placeQueued=!1,this.readyQueued=!1,this.interactQueued=!1,this.mountQueued=!1,this.recenterQueued=!1,this.bagQueued=!1,this.state.pause=!1,this.state.toggleMount=!1,this.state.readyBattle=!1,this.state.interact=!1,this.state.removeBlock=!1,this.state.attack=!1,this.state.place=!1,this.state.recenter=!1,this.state.toggleBag=!1,this.state.slot=null,this.state.lookDx=0,this.state.lookDy=0,this.state.touchLookDx=0,this.state.touchLookDy=0,t}}class cM{ctx=null;muted=!1;unlocked=!1;async unlock(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&await this.ctx.resume(),this.unlocked=!0}beep(t,e,n,s=.08){if(this.muted||!this.unlocked||!this.ctx)return;const o=this.ctx.currentTime,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=n,r.frequency.value=t,a.gain.setValueAtTime(s,o),a.gain.exponentialRampToValueAtTime(.001,o+e),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+e)}swing(){this.beep(180,.08,"square",.05)}hit(){this.beep(120,.12,"sawtooth",.07)}tame(){this.beep(520,.15,"sine",.06),this.beep(780,.2,"sine",.04)}mount(){this.beep(300,.1,"triangle",.05)}place(){this.beep(240,.06,"triangle",.04)}hurt(){this.beep(90,.2,"sawtooth",.08)}win(){this.beep(440,.12,"sine",.05),this.beep(660,.18,"sine",.05)}ui(){this.beep(600,.04,"sine",.03)}save(){this.beep(400,.08,"sine",.04),this.beep(500,.1,"sine",.03)}fire(){if(this.muted||!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.32),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let l=0;l<e;l++)s[l]=(Math.random()*2-1)*(1-l/e);const o=this.ctx.createBufferSource();o.buffer=n;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=640;const a=this.ctx.createGain();a.gain.setValueAtTime(.11,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),o.connect(r),r.connect(a),a.connect(this.ctx.destination),o.start(t),this.beep(88,.26,"sawtooth",.035)}}const En="./textures/v1/";let $n=null,Pl=null;const uM=new Sv;function hs(i,t={}){return new Promise((e,n)=>{uM.load(i,s=>{s.colorSpace=t.srgb?Be:gi,s.wrapS=s.wrapT=t.wrap??ti,t.flipY===!1&&(s.flipY=!1),s.anisotropy=4,s.needsUpdate=!0,e(s)},void 0,()=>n(new Error("texture load failed: "+i)))})}async function Gs(i,t={}){try{return await hs(i,t)}catch{return null}}const js={grass:.55,path:.35},Xi={grass:.92,dirt:.95,path:.9,rock:.88,wood:.72,scales:.62,water:.22};function bn(){return $n}async function vf(i){const t=i==="low";if($n&&Pl===(t?"low":"full"))return $n;if($n){for(const w of Object.values($n))if(w&&typeof w.dispose=="function"&&w.dispose(),Array.isArray(w))for(const M of w)M.dispose();$n=null}const e=w=>hs(En+w,{srgb:!0}),n=w=>hs(En+w,{srgb:!1});if(t){const[w,M,R,N,U,F,Y,B,K,X,st,q,nt]=await Promise.all([e("grass_color.webp"),e("dirt_color.webp"),e("path_dirt_blend_color.webp"),e("rock_dirt_blend_color.webp"),e("log_bark_color.webp"),e("roof_shingles_color.webp"),e("dragon_scales_color.webp"),e("dragon_belly_color.webp"),hs(En+"wing_membrane.webp",{srgb:!0,wrap:ke}),hs(En+"log_endgrain_color.webp",{srgb:!0,wrap:ke}),Gs(En+"cloud_01_256.webp",{srgb:!0,wrap:ke}),Gs(En+"cloud_02_256.webp",{srgb:!0,wrap:ke}),Gs(En+"cloud_03_256.webp",{srgb:!0,wrap:ke})]);return R.rotation=.17,R.center.set(.5,.5),N.offset.set(.13,.07),$n={grass:w,dirt:M,path:R,rock:N,wood:U,endgrain:X,shingle:F,scales:Y,belly:B,wing:K,clouds:[st,q,nt].filter(Boolean)},Pl="low",$n}const[s,o,r,a,l,c,u,h,d,f,g,x,p,m,v,b,y,T,E,A,S]=await Promise.all([e("grass_color.webp"),e("dirt_color.webp"),e("path_dirt_blend_color.webp"),e("rock_dirt_blend_color.webp"),n("grass_normal.webp"),n("dirt_normal.webp"),n("path_normal.webp"),n("rock_normal.webp"),e("log_bark_color.webp"),n("log_bark_normal.webp"),hs(En+"log_endgrain_color.webp",{srgb:!0,wrap:ke}),e("roof_shingles_color.webp"),n("roof_shingles_normal.webp"),e("dragon_scales_color.webp"),n("dragon_scales_normal.webp"),e("dragon_belly_color.webp"),hs(En+"wing_membrane.webp",{srgb:!0,wrap:ke}),n("water_ripple_normal.webp"),Gs(En+"cloud_01_256.webp",{srgb:!0,wrap:ke}),Gs(En+"cloud_02_256.webp",{srgb:!0,wrap:ke}),Gs(En+"cloud_03_256.webp",{srgb:!0,wrap:ke})]);return r.rotation=.17,r.center.set(.5,.5),u&&(u.rotation=.17,u.center.set(.5,.5)),a.offset.set(.13,.07),h&&h.offset.set(.13,.07),$n={grass:s,dirt:o,path:r,rock:a,grassNormal:l,dirtNormal:c,pathNormal:u,rockNormal:h,wood:d,woodNormal:f,endgrain:g,shingle:x,shingleNormal:p,scales:m,scalesNormal:v,belly:b,wing:y,waterNormal:T,clouds:[E,A,S].filter(Boolean)},Pl="full",$n}const Wh=new Map;function Es(i,t,e,n){const s=Wh.get(i);if(s)return s;const o=document.createElement("canvas");o.width=o.height=t;const r=o.getContext("2d");e(r,t);const a=new Jc(o);return a.colorSpace=Be,a.wrapS=a.wrapT=ti,a.anisotropy=4,a.needsUpdate=!0,Wh.set(i,a),a}function Mf(i=128){const t=bn();return t?.grass?t.grass:Es("grass",i,(e,n)=>{e.fillStyle="#4a8a3a",e.fillRect(0,0,n,n);for(let s=0;s<900;s++){const o=Math.random()*n,r=Math.random()*n;e.fillStyle=Math.random()>.5?"#5a9a48":"#3a7a30",e.fillRect(o,r,1+Math.random()*2,2+Math.random()*4)}})}function bf(i=128){const t=bn();return t?.dirt?t.dirt:Es("dirt",i,(e,n)=>{e.fillStyle="#6a4a28",e.fillRect(0,0,n,n);for(let s=0;s<600;s++)e.fillStyle=Math.random()>.5?"#7a5a38":"#5a3a20",e.fillRect(Math.random()*n,Math.random()*n,2,2)})}function hr(i=128){const t=bn();return t?.rock?t.rock:Es("rock",i,(e,n)=>{e.fillStyle="#6a6e72",e.fillRect(0,0,n,n);for(let s=0;s<200;s++){const o=Math.random()*n,r=Math.random()*n;e.fillStyle=`rgb(${90+Math.random()*40|0},${94+Math.random()*40|0},${98+Math.random()*40|0})`,e.beginPath(),e.ellipse(o,r,4+Math.random()*10,3+Math.random()*8,Math.random(),0,Math.PI*2),e.fill()}})}function hM(i=128){const t=bn();return t?.path?t.path:Es("path",i,(e,n)=>{e.fillStyle="#c4b090",e.fillRect(0,0,n,n);for(let s=0;s<80;s++)e.fillStyle=Math.random()>.5?"#b0a080":"#d0c4a0",e.beginPath(),e.ellipse(Math.random()*n,Math.random()*n,6,4,Math.random(),0,Math.PI*2),e.fill()})}function Oa(i=128){const t=bn();return t?.wood?t.wood:Es("wood",i,(e,n)=>{e.fillStyle="#8b5a2b",e.fillRect(0,0,n,n);for(let s=0;s<n;s+=8)e.strokeStyle=`rgba(60,30,10,${.25+Math.random()*.35})`,e.lineWidth=1+Math.random(),e.beginPath(),e.moveTo(0,s+Math.random()*3),e.bezierCurveTo(n*.3,s+2,n*.7,s-2,n,s+Math.random()*3),e.stroke()})}function wf(i=64){const t=bn();return t?.shingle?t.shingle:Es("shingle",i,(e,n)=>{e.fillStyle="#8b3a3a",e.fillRect(0,0,n,n);const s=8,o=6;for(let r=0;r<s;r++)for(let a=0;a<o;a++){const l=(a+r%2*.5)*(n/o),c=r*(n/s);e.fillStyle=r%2?"#a04840":"#7a3030",e.fillRect(l,c,n/o-1,n/s-1)}})}function Ll(i,t=64){const e=bn();return e?.scales?e.scales:Es("scales_"+i,t,(n,s)=>{n.fillStyle=i,n.fillRect(0,0,s,s);for(let o=0;o<s;o+=6)for(let r=0;r<s;r+=6){const a=r+(o%12===0?0:3);n.fillStyle="rgba(0,0,0,0.12)",n.beginPath(),n.ellipse(a,o,3,2.5,0,0,Math.PI*2),n.fill()}})}const Xh=new Map;function Ze(i,t){let e=Xh.get(i);return e||(e=t(),Xh.set(i,e)),e}function vn(i,t){const e=new ee({color:i,map:t,roughness:Xi.wood,metalness:0}),n=bn();return n?.woodNormal&&t===n.wood&&(e.normalMap=n.woodNormal,e.normalScale=new rt(.55,.55)),n?.shingleNormal&&t===n.shingle&&(e.normalMap=n.shingleNormal,e.normalScale=new rt(.65,.65)),e}function za(i){i.traverse(t=>{const e=t;e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})}function dM(){const i=new ht(Ze("bush2",()=>new La(.42,1)),vn("#3f7a40"));return i.scale.set(1.25,.9,1.15),i.castShadow=!0,i}function fM(i=3.2){const t=new Kt;t.name="pine";const e=Oa(64).clone();e.repeat.set(1,3),e.wrapS=e.wrapT=ti;const n=new ht(Ze("pineT3",()=>new de(.11,.18,1.8,8)),vn("#5a3a24",e));n.position.y=.9,t.add(n);for(let s=0;s<4;s++){const o=new ht(Ze("pineC3",()=>new Mn(1.05-s*.18,1.2,8)),vn("#2f6a38"));o.position.y=1.7+s*.7,t.add(o)}return t.scale.setScalar(i/3.2),za(t),t}function pM(i=2.8){const t=new Kt,e=new ht(Ze("broadT",()=>new de(.08,.12,1.2,6)),vn("#6a4a30",Oa(64)));e.position.y=.6,t.add(e);for(const[n,s,o,r]of[[0,1.8,0,1],[.45,1.6,.2,.7],[-.4,1.65,-.15,.65],[.1,2.15,-.2,.55]]){const a=new ht(Ze("broadL",()=>new La(.55,1)),vn("#4a9a48"));a.position.set(n,s,o),a.scale.setScalar(r),t.add(a)}return t.scale.setScalar(i/2.8),za(t),t}function mM(i=1){const t=new ht(Ze("rock2",()=>new Ca(.55,0)),vn("#a8a8a4",hr(64)));return t.scale.set(i,i*.7,i*1.1),t.castShadow=!0,t.receiveShadow=!0,t}function gM(i="#e86a3a"){const t=new Kt,e=new ht(Ze("stem2",()=>new de(.015,.02,.28,4)),vn("#3a6a30"));e.position.y=.14,t.add(e);const n=new ht(Ze("fhead",()=>new Bt(.09,8,6)),vn(i));n.position.y=.3,t.add(n);const s=new ht(Ze("pcenter",()=>new Bt(.04,6,4)),vn("#f0d878"));return s.position.y=.34,t.add(s),t}function xM(){const i=new Kt,t=Oa(64);for(const e of[-.5,.5]){const n=new ht(Ze("fpost2",()=>new de(.055,.065,1.15,6)),vn("#9a7050",t));n.position.set(e,.55,0),i.add(n)}for(const e of[.45,.75]){const n=new ht(Ze("frail2",()=>new Ge(1.2,.07,.05)),vn("#9a7050",t));n.position.y=e,i.add(n)}return za(i),i}function yM(){const i=new Kt,t=new ht(Ze("crystal2",()=>new Ia(.5,0)),new ee({color:"#7ec8ff",roughness:.25,metalness:.3,emissive:"#204060",emissiveIntensity:.15}));t.position.y=.85,t.scale.set(.55,1.35,.55),i.add(t);const e=new ht(Ze("crystalBase2",()=>new de(.35,.4,.15,6)),vn("#4a7a9a"));return e.position.y=.08,i.add(e),za(i),i}function _M(){const i=new Kt;i.name="cloud";const t=new Xn({color:"#ffffff",transparent:!0,opacity:.88,depthWrite:!1,fog:!0});for(const[e,n,s,o]of[[0,0,0,1.1],[.55,.08,.1,.85],[-.5,.05,-.08,.9],[.2,.18,-.2,.7],[-.25,.12,.22,.65],[.7,-.02,-.15,.55]]){const r=new ht(Ze("cloudPuff",()=>new Bt(.85,12,10)),t);r.position.set(e,n,s),r.scale.set(o,o*.62,o*.85),i.add(r)}return i}function vM(){const t=new Bt(850,24,12),e=new ht(t,new Xn({color:"#9ec8f0",side:tn,fog:!1,depthWrite:!1,depthTest:!1}));return e.name="skyDome",e.frustumCulled=!1,e.renderOrder=-10,e}function MM(){const i=new Kt;i.name="pond";const t=new ht(Ze("pond",()=>new Gn(3.2,32)),(()=>{const n=new ee({color:"#3a8ab8",roughness:Xi.water,metalness:.35,transparent:!0,opacity:.82}),s=bn();return s?.waterNormal&&(n.normalMap=s.waterNormal,n.normalScale=new rt(.4,.4),s.waterNormal.repeat.set(3,3)),n})());t.rotation.x=-Math.PI/2,t.position.y=.04,t.name="waterSurface",i.add(t);const e=new ht(Ze("pondRim",()=>new Da(3.15,3.55,32)),vn("#7a7060"));return e.rotation.x=-Math.PI/2,e.position.y=.05,i.add(e),i}function We(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Se;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in o){const h=qh(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<r[u].length;++x)f.push(r[u][x][d]);const g=qh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function qh(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new we(r,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else r.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Sf=new WeakMap;function Le(i,t){return Sf.set(i,t),i}class Ji{entries=[];colliders=[];stack=[new Ft];push(t,e,n,s=0){const o=new Ft().compose(new L(t,e,n),new _n().setFromEuler(new en(0,s,0)),new L(1,1,1));this.stack.push(this.top().clone().multiply(o))}pop(){this.stack.length>1&&this.stack.pop()}top(){return this.stack[this.stack.length-1]}add(t,e,n,s,o,r={}){const a=t.index?t.toNonIndexed():t.clone();a.attributes.uv||a.setAttribute("uv",new we(new Float32Array(a.attributes.position.count*2),2)),a.attributes.normal||a.computeVertexNormals();for(const u of Object.keys(a.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&a.deleteAttribute(u);const l=new Ft().compose(new L(n,s,o),new _n().setFromEuler(new en(r.rx??0,r.ry??0,r.rz??0,"YXZ")),new L(1,1,1)),c=this.top().clone().multiply(l);if(a.applyMatrix4(c),this.entries.push({geo:a,mat:e}),r.solid){a.computeBoundingBox();const u=a.boundingBox;this.colliders.push({minX:u.min.x,maxX:u.max.x,minY:u.min.y,maxY:u.max.y,minZ:u.min.z,maxZ:u.max.z})}}box(t,e,n,s,o,r,a,l={}){this.add(new Ge(e,n,s),t,o,r,a,l)}boxMin(t,e,n,s,o,r,a,l={}){this.add(new Ge(o,r,a),t,e+o/2,n+r/2,s+a/2,l)}cyl(t,e,n,s,o,r,a,l,c={}){this.add(new de(e,n,s,o),t,r,a,l,c)}cone(t,e,n,s,o,r,a,l={}){this.add(new Mn(e,n,s),t,o,r,a,l)}sphere(t,e,n,s,o,r={}){const a=new Bt(e,r.ws??10,r.hs??8);r.sy&&a.scale(1,r.sy,1),this.add(a,t,n,s,o,r)}plane(t,e,n,s,o,r,a={}){this.add(new Ee(e,n),t,s,o,r,a)}solidBox(t,e,n,s,o,r){const a=new L(t,e,n).applyMatrix4(this.top()),l=new L(s,o,r).applyMatrix4(this.top());this.colliders.push({minX:Math.min(a.x,l.x),maxX:Math.max(a.x,l.x),minY:Math.min(a.y,l.y),maxY:Math.max(a.y,l.y),minZ:Math.min(a.z,l.z),maxZ:Math.max(a.z,l.z)})}build(t,e={}){const n=new Kt;n.name=t;const s=new Map;for(const r of this.entries){const a=s.get(r.mat)??[];a.push(r.geo),s.set(r.mat,a)}let o=0;for(const[r,a]of s){const l=We(a,!1);if(!l)continue;const c=Sf.get(r);c&&bM(l,c),l.computeBoundingSphere();const u=new ht(l,r);u.name=`${t}_m${o++}`,u.castShadow=e.castShadow??!0,u.receiveShadow=e.receiveShadow??!0,n.add(u);for(const h of a)h.dispose()}return this.entries.length=0,n}}function bM(i,t){const e=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv;for(let o=0;o<e.count;o++){const r=Math.abs(n.getX(o)),a=Math.abs(n.getY(o)),l=Math.abs(n.getZ(o)),c=e.getX(o),u=e.getY(o),h=e.getZ(o);a>=r&&a>=l?s.setXY(o,c*t,h*t):r>=l?s.setXY(o,h*t,u*t):s.setXY(o,c*t,u*t)}s.needsUpdate=!0}const Yh=new Map;function ts(i,t,e,n){const s=Yh.get(i);if(s)return s;const o=document.createElement("canvas");o.width=t,o.height=e;const r=o.getContext("2d");n(r);const a=new Jc(o);return a.colorSpace=Be,a.wrapS=a.wrapT=ti,a.anisotropy=4,a.needsUpdate=!0,Yh.set(i,a),a}function dr(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ka(i="grey"){return ts("stoneBlocks_"+i,256,256,t=>{const e=dr(i==="grey"?11:23);t.fillStyle=i==="grey"?"#7d7a76":"#9a8a74",t.fillRect(0,0,256,256);const n=5,s=256/n;for(let o=0;o<n;o++){let r=o%2?-40:0;for(;r<256;){const a=60+e()*50,l=i==="grey"?118+e()*40:140+e()*35,c=i==="grey"?[l,l-3,l-6]:[l,l-14,l-30];t.fillStyle=`rgb(${c[0]|0},${c[1]|0},${c[2]|0})`,t.fillRect(r+3,o*s+3,a-6,s-6);for(let u=0;u<40;u++){const h=r+4+e()*(a-8),d=o*s+4+e()*(s-8);t.fillStyle=e()>.5?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.10)",t.fillRect(h,d,2+e()*3,2+e()*3)}t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(r+3,o*s+3,a-6,3),t.fillStyle="rgba(0,0,0,0.18)",t.fillRect(r+3,o*s+s-6,a-6,3),r+=a}}})}function su(){return ts("flagstone",256,256,i=>{const t=dr(77);i.fillStyle="#5e5b57",i.fillRect(0,0,256,256);const e=4,n=256/e;for(let s=0;s<e;s++)for(let o=0;o<e;o++){const r=140+t()*45;i.fillStyle=`rgb(${r|0},${r-6|0},${r-14|0})`,i.fillRect(s*n+3,o*n+3,n-6,n-6);for(let a=0;a<30;a++)i.fillStyle=t()>.5?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.09)",i.fillRect(s*n+4+t()*(n-8),o*n+4+t()*(n-8),3,3)}})}function qi(i="light"){return ts("planks_"+i,256,256,t=>{const e=dr(i==="light"?5:9),n=8,s=256/n;for(let o=0;o<n;o++){const r=i==="light"?150+e()*40:95+e()*30;t.fillStyle=`rgb(${r|0},${r*.68|0},${r*.42|0})`,t.fillRect(0,o*s,256,s);for(let l=0;l<6;l++){t.strokeStyle="rgba(40,20,8,0.22)",t.lineWidth=1,t.beginPath();const c=o*s+3+e()*(s-6);t.moveTo(0,c),t.bezierCurveTo(80,c+e()*4-2,170,c+e()*4-2,256,c),t.stroke()}t.fillStyle="rgba(30,15,5,0.55)",t.fillRect(0,o*s,256,2);const a=e()*256|0;t.fillRect(a,o*s,2,s),t.fillStyle="rgba(30,15,5,0.6)",t.beginPath(),t.arc(a+8,o*s+s/2,1.6,0,Math.PI*2),t.fill()}})}function $h(){return ts("logs",128,128,i=>{const t=dr(31),e=3,n=128/e;for(let s=0;s<e;s++){const o=i.createLinearGradient(0,s*n,0,s*n+n),r=150+t()*25;o.addColorStop(0,`rgb(${r*.55|0},${r*.36|0},${r*.2|0})`),o.addColorStop(.3,`rgb(${r|0},${r*.66|0},${r*.4|0})`),o.addColorStop(.7,`rgb(${r*.85|0},${r*.56|0},${r*.33|0})`),o.addColorStop(1,`rgb(${r*.42|0},${r*.27|0},${r*.15|0})`),i.fillStyle=o,i.fillRect(0,s*n,128,n);for(let a=0;a<5;a++){i.strokeStyle="rgba(50,25,10,0.25)",i.beginPath();const l=s*n+6+t()*(n-12);i.moveTo(0,l),i.lineTo(128,l+t()*2-1),i.stroke()}}})}function Dc(i="#a03030",t="#e0b040"){return ts("rug_"+i+t,128,256,e=>{e.fillStyle=t,e.fillRect(0,0,128,256),e.fillStyle=i,e.fillRect(10,10,108,236),e.strokeStyle=t,e.lineWidth=3,e.strokeRect(20,20,88,216),e.fillStyle=t;for(let n=40;n<230;n+=32)e.beginPath(),e.moveTo(64,n-10),e.lineTo(78,n),e.lineTo(64,n+10),e.lineTo(50,n),e.closePath(),e.fill()})}function wM(i="#b02030",t="#f0c040"){return ts("banner_"+i+t,128,256,e=>{e.fillStyle=i,e.fillRect(0,0,128,256),e.fillStyle=t,e.fillRect(0,0,128,10),e.fillRect(0,0,8,256),e.fillRect(120,0,8,256),e.clearRect(0,236,128,20),e.fillStyle=i,e.beginPath(),e.moveTo(0,236),e.lineTo(64,216),e.lineTo(128,236),e.lineTo(128,256),e.lineTo(96,236),e.lineTo(64,256),e.lineTo(32,236),e.lineTo(0,256),e.closePath(),e.fill(),e.fillStyle=t,e.beginPath(),e.moveTo(40,150),e.quadraticCurveTo(30,100,60,80),e.lineTo(52,60),e.lineTo(66,74),e.lineTo(70,56),e.lineTo(76,76),e.quadraticCurveTo(100,84,98,110),e.lineTo(86,112),e.quadraticCurveTo(78,140,88,160),e.lineTo(40,150),e.closePath(),e.fill(),e.fillStyle=i,e.beginPath(),e.arc(78,92,4,0,Math.PI*2),e.fill(),e.fillStyle=t,e.beginPath(),e.moveTo(44,46),e.lineTo(50,30),e.lineTo(58,42),e.lineTo(64,26),e.lineTo(70,42),e.lineTo(78,30),e.lineTo(84,46),e.closePath(),e.fill()})}function Ef(){return ts("hay",128,128,i=>{const t=dr(55);i.fillStyle="#c8a850",i.fillRect(0,0,128,128);for(let e=0;e<500;e++){const n=150+t()*90;i.strokeStyle=`rgba(${n|0},${n*.82|0},${n*.35|0},0.8)`,i.beginPath();const s=t()*128,o=t()*128,r=t()*Math.PI;i.moveTo(s,o),i.lineTo(s+Math.cos(r)*10,o+Math.sin(r)*4),i.stroke()}})}function SM(i,t="#8a5a30",e="#fff0c0"){return ts("sign_"+i,256,96,n=>{n.fillStyle=t,n.fillRect(0,0,256,96);for(let o=0;o<4;o++)n.fillStyle="rgba(40,20,8,0.35)",n.fillRect(0,o*24,256,2);n.strokeStyle="#3a2210",n.lineWidth=6,n.strokeRect(3,3,250,90),n.fillStyle=e;let s=34;for(n.font=`bold ${s}px sans-serif`;s>16&&n.measureText(i).width>220;)s-=2,n.font=`bold ${s}px sans-serif`;n.textAlign="center",n.textBaseline="middle",n.fillStyle="rgba(30,14,4,0.55)",n.fillText(i,130,52,220),n.fillStyle=e,n.fillText(i,128,50,220)})}function Tt(i,t={}){const e=new ee({color:i,map:t.map??null,roughness:t.rough??.85,metalness:t.metal??0,side:t.side??Wn,transparent:t.transparent??!1,opacity:t.opacity??1});return t.emissive?(e.emissive=new _t(t.emissive),e.emissiveIntensity=t.ei??1):t.glow&&(e.emissive=new _t(i),e.emissiveIntensity=t.glow,t.map&&(e.emissiveMap=t.map)),t.fog===!1&&(e.fog=!1),e}function ki(i,t,e){let n=(i|0)*374761393+(t|0)*668265263+e*982451653;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)/4294967295}function jh(i){return i*i*(3-2*i)}function Tf(i,t,e){const n=Math.floor(i),s=Math.floor(t),o=jh(i-n),r=jh(t-s),a=ki(n,s,e),l=ki(n+1,s,e),c=ki(n,s+1,e),u=ki(n+1,s+1,e),h=a+(l-a)*o,d=c+(u-c)*o;return h+(d-h)*r}function oa(i,t,e,n=4){let s=.5,o=1,r=0,a=0;for(let l=0;l<n;l++)r+=Tf(i*o,t*o,e+l*101)*s,a+=s,s*=.5,o*=2;return r/a}function Zh(i,t,e,n,s){switch(i){case"meadow":return n*.35+s*.15;case"forest":return .4+n*1.2+s*.6;case"lake":{const o=Math.max(0,1-Math.abs(oa(t*.007,e*.007,zi+9,3)-.42)*3.2);return-1.6*o*o+n*.3}case"rocky":return 2.5+n*4.5+s*2+Math.max(0,n-.55)*8;case"snow":return 2.4+n*1.8+s*.9+Math.max(0,n-.7)*1.5;case"desert":return .4+n*.9+Math.sin(t*.045)*.55+Math.cos(e*.038)*.4;case"dragon_lands":return 2.2+n*3+s*1.8+Math.max(0,s-.65)*4;default:return n}}const $t={x:0,z:-400,plateauR:40,rampR:80};let qr=null;function EM(i,t){return Af(i,t,!1)}function Ba(){if(qr!==null)return qr;let i=-1/0;for(let t=0;t<=$t.plateauR;t+=5){const e=Math.max(1,Math.round(t*Math.PI*2/5));for(let n=0;n<e;n++){const s=n/e*Math.PI*2;i=Math.max(i,EM($t.x+Math.cos(s)*t,$t.z+Math.sin(s)*t))}}return qr=Math.max(4,i+2.5),qr}function TM(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function AM(i,t,e){const n=Math.hypot(i-$t.x,t-$t.z);if(n>=$t.rampR)return e;const s=Ba();if(n<=$t.plateauR)return s;const o=TM((n-$t.plateauR)/($t.rampR-$t.plateauR));return s+(e-s)*o}function ko(i,t,e=0){return Math.hypot(i-$t.x,t-$t.z)<$t.rampR*.75+e}function se(i,t){return Af(i,t,!0)}function Af(i,t,e){const n=Math.hypot(i,t),s=Math.max(0,n-(Bn-25))/25,o=s*s*8;if(n<42){const u=Math.sin(i*.4)*.02+Math.cos(t*.35)*.015,h=Math.max(0,(n-28)/14),d=oa(i*.03,t*.03,zi,3);return u*(1-h)+d*.35*h}const r=ln(i,t),a=oa(i*.02,t*.02,zi,5),l=oa(i*.05,t*.05,zi+7,3);let c=Zh(r.primary,i,t,a,l);if(r.secondary&&r.blend>.01){const u=Zh(r.secondary,i,t,a,l);c=c*(1-r.blend)+u*r.blend}return c+=Tf(i*.004,t*.004,zi+3)*2.2,e&&(c=AM(i,t,c)),c+o}function CM(i,t){return se(i,t)}function Cf(i,t){if(ko(i,t,20))return null;const e=ln(i,t);return e.primary!=="lake"&&e.secondary!=="lake"?null:se(i,t)<-.15?-.05:null}const Rf=.55,RM=.32,PM=1.75,Bo=[];function xo(i,t,e,n){const s=Bo.findIndex(a=>a.id===i);s>=0&&Bo.splice(s,1);let o=0;for(const a of n)o=Math.max(o,Math.hypot(Math.max(Math.abs(a.minX),Math.abs(a.maxX)),Math.max(Math.abs(a.minZ),Math.abs(a.maxZ))));const r={id:i,x:t.x,y:t.y,z:t.z,rotY:e,cos:Math.cos(e),sin:Math.sin(e),radius:o+1,boxes:n};return Bo.push(r),r}function Pf(i,t,e){const n=t-i.x,s=e-i.z;return{lx:n*i.cos-s*i.sin,lz:n*i.sin+s*i.cos}}function Qn(i,t,e=1/0){let n=se(i,t);for(const s of Bo){const o=i-s.x,r=t-s.z;if(o*o+r*r>s.radius*s.radius)continue;const{lx:a,lz:l}=Pf(s,i,t);for(const c of s.boxes){if(a<c.minX||a>c.maxX||l<c.minZ||l>c.maxZ)continue;const u=s.y+c.maxY;u<=e+Rf&&u>n&&(n=u)}}return n}function Lf(i,t,e,n=RM,s=PM){for(const o of Bo){const r=i-o.x,a=t-o.z;if(r*r+a*a>(o.radius+n)*(o.radius+n))continue;const{lx:l,lz:c}=Pf(o,i,t);for(const u of o.boxes){if(l<u.minX-n||l>u.maxX+n||c<u.minZ-n||c>u.maxZ+n)continue;const h=o.y+u.maxY,d=o.y+u.minY;if(h<=e+Rf||d>=e+s)continue;const f=Math.max(u.minX,Math.min(l,u.maxX)),g=Math.max(u.minZ,Math.min(c,u.maxZ));if((l-f)*(l-f)+(c-g)*(c-g)<n*n)return!0}}return!1}const Ce={x:-4.2,z:-2,ry:.35},xn={x:9,z:-7,ry:-.4},Hn={x:-21,z:-13,ry:1.8},If=[{id:"cabin",label:"Home cabin",x:Ce.x,z:Ce.z,interiorRadius:16},{id:"stable",label:"Dragon stable",x:xn.x,z:xn.z,interiorRadius:16},{id:"watchtower",label:"Watchtower",x:Hn.x,z:Hn.z,interiorRadius:12}],Df=[{id:"castle_gate",label:"Castle gate",x:$t.x,z:$t.z+27.7,interiorRadius:150},{id:"great_hall",label:"Great hall",x:$t.x,z:$t.z-11,interiorRadius:150}];function fa(i,t,e){const n=Math.cos(i.ry),s=Math.sin(i.ry);return{x:i.x+t*n+e*s,z:i.z-t*s+e*n}}function LM(){const i=wf(64);return{logs:Le(Tt("#e0b890",{map:$h(),rough:.85}),1),logsIn:Le(Tt("#f0caa0",{map:$h(),rough:.85,glow:.1}),1),planks:Le(Tt("#d8b088",{map:qi("light"),rough:.8}),.6),planksIn:Le(Tt("#e8c098",{map:qi("light"),rough:.8,glow:.1}),.6),darkWood:Le(Tt("#8a5a36",{map:qi("dark"),rough:.75}),.8),stone:Le(Tt("#d0ccc4",{map:ka("grey"),rough:.9}),1),roof:Le(Tt("#d04a3c",{map:i,rough:.75}),.9),iron:Tt("#3a3a40",{rough:.45,metal:.6}),glassOut:Tt("#a8d0e8",{rough:.1,metal:.3,emissive:"#5a90b8",ei:.35}),glassIn:Tt("#e0f0ff",{emissive:"#c8e4ff",ei:.85,rough:.2}),flame:new Xn({color:"#ff8a2a"}),hay:Le(Tt("#e0c060",{map:Ef(),rough:.95}),1.2)}}let Il=null;function Ha(){return Il||(Il=LM()),Il}function Nf(i,t,e){const n=new Ra;return n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(0,t),n.closePath(),new cr(n,{depth:e,bevelEnabled:!1})}function ou(i,t,e){i.position.set(t.x,e,t.z),i.rotation.y=t.ry}const IM={hx:3.2,hz:2.6,t:.3,floor:.42,wallTop:2.95},mn=IM;function DM(i){const t=Ha(),e=new Ji,{hx:n,hz:s,t:o,wallTop:r}=mn;e.boxMin(t.stone,-n-.2,0-.4,-s-.2,2*n+.4,.75,2*s+.4,{solid:!0}),e.boxMin(t.planksIn,-n+o,.35,-s+o,2*(n-o),.07,2*(s-o),{solid:!0});const a=r-.35;e.boxMin(t.logs,-n,.35,-s,2*n,a,o,{solid:!0}),e.boxMin(t.logs,-n,.35,-s+o,o,a,2*(s-o),{solid:!0}),e.boxMin(t.logs,n-o,.35,-s+o,o,a,2*(s-o),{solid:!0}),e.boxMin(t.logs,-n,.35,s-o,n-.65,a,o,{solid:!0}),e.boxMin(t.logs,.65,.35,s-o,n-.65,a,o,{solid:!0}),e.boxMin(t.logs,-.65,2.5,s-o,1.3,r-2.5,o,{solid:!0}),e.boxMin(t.logsIn,-n+o,.42,-s+o,2*(n-o),a-.07,.02),e.boxMin(t.logsIn,-n+o,.42,-s+o,.02,a-.07,2*(s-o)),e.boxMin(t.logsIn,n-o-.02,.42,-s+o,.02,a-.07,2*(s-o));for(const v of[-1,1])e.box(t.darkWood,.14,2.15,.4,v*.68,.42+1.07,s-o/2);e.box(t.darkWood,1.5,.16,.4,0,2.55,s-o/2);for(const[v,b]of[[-n,-s],[n,-s],[-n,s],[n,s]])e.cyl(t.darkWood,.2,.22,r-.2,8,v,.2+(r-.2)/2,b);e.boxMin(t.planksIn,-n+o,2.78,-s+o,2*(n-o),.08,2*(s-o));for(const v of[-1.3,0,1.3])e.box(t.darkWood,2*(n-o),.16,.18,0,2.7,v);for(const v of[-1,1])e.add(Nf(2*s,1.6,o),t.logs,v<0?-n:n-o,r,0,{ry:Math.PI/2});const l=Math.atan2(1.6,s),c=Math.hypot(s,1.6)+.55;for(const v of[-1,1])e.box(t.roof,2*n+.9,.16,c,0,r+.8+.1,v*(s/2+.18),{rx:v*l});e.box(t.darkWood,2*n+1,.18,.3,0,r+1.62,0),e.boxMin(t.stone,-.6,0,-s-.65,1.2,5.3,.65,{solid:!0}),e.box(t.stone,1.45,.2,.9,0,5.35,-s-.33);const u=(v,b,y,T)=>{const E=T==="x"?Math.PI/2:0,A=T==="x"?Math.sign(v):1;for(const S of[-1,1]){const w=S*(o/2+.02),M=T==="x"?v+w*A:v,R=T==="z"?y+w:y;e.box(t.darkWood,1,.1,.1,M,b+.45,R,{ry:E}),e.box(t.darkWood,1,.1,.1,M,b-.45,R,{ry:E}),e.box(t.darkWood,.08,.9,.1,M,b,R,{ry:E});for(const N of[-.46,.46]){const U=T==="z"?M+N:M,F=T==="x"?R+N:R;e.box(t.darkWood,.1,.9,.1,U,b,F,{ry:0})}e.box(t.darkWood,.9,.06,.08,M,b,R,{ry:E}),e.box(S*A>0||T==="z"&&S>0?t.glassOut:t.glassIn,.84,.82,.02,T==="x"?v+S*(o/2+.005)*A:v,b,T==="z"?y+S*(o/2+.005):y,{ry:E})}};u(-n+o/2,1.65,.9,"x"),u(n-o/2,1.65,-.3,"x"),u(1.9,1.65,s-o/2,"z");const h=Tt("#e04060",{rough:.8}),d=Tt("#f0d040",{rough:.8});e.box(t.darkWood,1,.25,.3,1.9,1.05,s+.15);for(let v=0;v<5;v++)e.sphere(v%2?h:d,.09,1.5+v*.2,1.25,s+.15,{ws:6,hs:5});e.boxMin(t.planks,-1.8,0,s,3.6,.3,1.4,{solid:!0}),e.boxMin(t.planks,-.8,0,s+1.4,1.6,.15,.4,{solid:!0});for(const v of[-1.7,1.7])e.cyl(t.darkWood,.08,.09,2.5,6,v,1.55,s+1.3);e.box(t.roof,3.9,.12,1.7,0,2.86,s+.75,{rx:.25});for(let v=0;v<9;v++){const b=Math.floor(v/3);e.cyl(t.darkWood,.16,.16,1.1,7,n+.45,.17+b*.3,-1.2+v%3*.34+b%2*.17,{rz:Math.PI/2,ry:Math.PI/2})}const f=e.build("homeCabin"),g=new Kt;g.name="cabinDoor",g.position.set(-.6,.42,s-.05);const x=new Ji;x.box(t.darkWood,1.18,2.05,.08,.59,1.03,0);for(const v of[.4,1,1.6])x.box(t.iron,1.1,.07,.1,.59,v,0);x.sphere(Tt("#e0c050",{metal:.7,rough:.3}),.05,1,1,.07),g.add(x.build("cabinDoorLeaf")),f.add(g);const p=new Kt;p.name="chimneySmoke",p.position.set(1.7,.95,-s-.33);const m=new ee({color:"#e8e8ec",transparent:!0,opacity:.55,roughness:1,depthWrite:!1});for(let v=0;v<4;v++){const b=new ht(new Bt(.24,8,6),m.clone());b.position.set(-1.7,4.7+v*.35,0),p.add(b)}return f.add(p),f.userData.pose=Ce,ou(f,Ce,i),xo("cabin",{x:Ce.x,y:i,z:Ce.z},Ce.ry,e.colliders),f}function NM(i){const t=i.getObjectByName("cabin-interior");if(t)return t;const e=Ha(),n=new Ji,s=mn.floor,o=Tt("#c03838",{map:Dc("#c03838","#f4e8d0"),rough:.9,glow:.1}),r=Tt("#f4ecdc",{rough:.9,glow:.12}),a=Tt("#2a2420",{rough:1}),l=Tt("#ff6a20",{emissive:"#ff4a10",ei:1.6}),c=Tt("#ffffff",{map:Dc("#2c5aa0","#f0c040"),rough:.95,glow:.12}),u=Tt("#e8c050",{metal:.7,rough:.3,emissive:"#604810",ei:.3}),h=new Xn({color:"#ffa040",transparent:!0,opacity:.25,depthWrite:!1,blending:Yo}),d=-2.6+mn.t;n.boxMin(e.stone,-.95,s,d,.42,1.25,.55,{solid:!0}),n.boxMin(e.stone,.53,s,d,.42,1.25,.55,{solid:!0}),n.boxMin(e.stone,-.95,s+1.25,d,1.9,.4,.6),n.boxMin(e.darkWood,-1.05,s+1.65,d,2.1,.1,.7),n.boxMin(e.stone,-.7,s+1.75,d,1.4,2.78-s-1.75,.38),n.boxMin(a,-.53,s,d,1.06,1.25,.06),n.boxMin(e.stone,-1.1,s,d+.55,2.2,.06,.5),n.solidBox(-1,s,d,1,s+1.6,d+.6);for(const[A,S]of[[-.15,.25],[.15,-.25]])n.cyl(e.darkWood,.08,.08,.8,7,A,s+.12,d+.3,{rz:Math.PI/2+S*.2,ry:S});n.cone(e.flame,.2,.55,7,0,s+.45,d+.3),n.cone(e.flame,.13,.4,6,-.2,s+.38,d+.32),n.cone(e.flame,.13,.38,6,.2,s+.37,d+.28),n.box(l,.7,.05,.3,0,s+.06,d+.3),n.sphere(h,.6,0,s+.45,d+.4,{ws:8,hs:6}),n.cyl(r,.04,.04,.22,6,-.75,s+1.86,d+.3),n.cone(e.flame,.035,.09,5,-.75,s+2.02,d+.3),n.cyl(Tt("#5a7aa0",{rough:.6}),.09,.07,.2,8,.6,s+1.85,d+.3);const f=-3.2+mn.t;n.boxMin(e.darkWood,f,s,d,1.15,.38,2.1,{solid:!0}),n.boxMin(r,f+.05,s+.38,d+.05,1.05,.16,2),n.boxMin(o,f+.02,s+.5,d+.65,1.11,.07,1.43),n.box(r,.75,.14,.4,f+.57,s+.63,d+.3),n.boxMin(e.darkWood,f,s,d,1.15,1.05,.08),n.boxMin(e.darkWood,f,s,d+2.05,1.15,.7,.08),n.add(new Ee(2,1.4),c,.1,s+.012,-.15,{rx:-Math.PI/2});const g=1.75,x=.75;n.box(e.darkWood,1.25,.07,.85,g,s+.75,x);for(const[A,S]of[[-.55,-.35],[.55,-.35],[-.55,.35],[.55,.35]])n.box(e.darkWood,.07,.72,.07,g+A,s+.36,x+S);n.solidBox(g-.62,s,x-.42,g+.62,s+.8,x+.42);for(const A of[-1,1]){const S=x+A*.75;n.box(e.darkWood,.48,.06,.45,g,s+.46,S);for(const[w,M]of[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]])n.box(e.darkWood,.05,.45,.05,g+w,s+.22,S+M);n.box(e.darkWood,.48,.55,.05,g,s+.78,S+A*.2),n.solidBox(g-.25,s,S-.24,g+.25,s+1.05,S+.24)}n.cyl(Tt("#e8e0d0",{rough:.5}),.17,.12,.08,10,g-.2,s+.83,x),n.sphere(Tt("#e05030",{rough:.6}),.07,g-.24,s+.9,x-.03),n.sphere(Tt("#70c040",{rough:.6}),.065,g-.12,s+.9,x+.05),n.cyl(Tt("#9a6a40",{rough:.6}),.06,.05,.14,8,g+.3,s+.86,x+.15),n.cyl(r,.035,.035,.18,6,g+.35,s+.88,x-.2),n.cone(e.flame,.03,.08,5,g+.35,s+1.01,x-.2);const p=mn.hx-mn.t-.55,m=d+.4;n.box(e.darkWood,1,.5,.6,p,s+.25,m,{solid:!0}),n.cyl(e.darkWood,.3,.3,1,10,p,s+.5,m,{rz:Math.PI/2});for(const A of[-.35,.35])n.box(e.iron,.07,.82,.64,p+A,s+.42,m);n.box(u,.14,.16,.05,p,s+.5,m+.32);const v=mn.hx-mn.t-.14;n.box(e.darkWood,.26,.05,1.3,v,s+1.55,-1.5);const b=["#a03030","#3060a0","#40904a","#c09030","#7a3a90"];for(let A=0;A<5;A++)n.box(Tt(b[A],{rough:.7}),.2,.26+A%2*.05,.08,v,s+1.71,-2+A*.1);n.cyl(Tt("#c8a070",{rough:.5}),.07,.07,.18,8,v,s+1.67,-1.2),n.cyl(Tt("#80a0c0",{rough:.3}),.06,.06,.2,8,v,s+1.68,-1);{n.cyl(e.iron,.01,.01,.3,4,-.6,2.3+.3,-.9),n.cyl(e.iron,.02,.1,.07,8,-.6,2.3+.14,-.9),n.cyl(e.iron,.09,.09,.03,8,-.6,2.3-.12,-.9);for(const[M,R]of[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]])n.box(e.iron,.015,.24,.015,-.6+M,2.3,-.9+R);n.cyl(Tt("#ffe0a0",{emissive:"#ffb050",ei:1.1,rough:.2}),.065,.065,.2,8,-.6,2.3,-.9)}const y=new Jc((()=>{const A=document.createElement("canvas");A.width=64,A.height=48;const S=A.getContext("2d");return S.fillStyle="#a8d4f5",S.fillRect(0,0,64,48),S.fillStyle="#5aa040",S.fillRect(0,34,64,14),S.fillStyle="#d03020",S.beginPath(),S.ellipse(30,26,12,7,0,0,Math.PI*2),S.fill(),S.beginPath(),S.moveTo(36,22),S.lineTo(52,8),S.lineTo(44,24),S.fill(),S.beginPath(),S.moveTo(24,22),S.lineTo(14,6),S.lineTo(30,20),S.fill(),S.beginPath(),S.arc(44,20,4,0,Math.PI*2),S.fill(),A})());y.colorSpace=Be,n.box(e.darkWood,.06,.62,.8,f+.04,1.85,d+1),n.add(new Ee(.7,.52),Tt("#ffffff",{map:y,glow:.15}),f+.08,1.85,d+1,{ry:Math.PI/2});const T=n.build("cabin-interior",{castShadow:!1,receiveShadow:!0});T.traverse(A=>{const S=A;S.isMesh&&S.material===h&&(S.renderOrder=5)}),i.add(T);const E=i.userData.pose;return xo("cabinInterior",{x:E.x,y:i.position.y,z:E.z},E.ry,n.colliders),T}function ru(i){const t=-3.2+mn.t+.57,e=-2.6+mn.t+1.05,n=fa(Ce,t,e);return new L(n.x,i+mn.floor+.55,n.z)}function UM(i){const t=fa(Ce,0,-2.6+mn.t+.9);return new L(t.x,i+mn.floor+1.1,t.z)}function FM(i){const e={...Ha(),darkWood:Le(Tt("#b08058",{map:qi("dark"),rough:.75,glow:.14}),.8),planks:Le(Tt("#e0bc90",{map:qi("light"),rough:.8,glow:.12}),.6),hay:Le(Tt("#f0d070",{map:Ef(),rough:.95,glow:.18}),1.2)},n=new Ji,s=5,o=3,r=2.9;n.boxMin(e.planks,-s,-.3,-o,2*s,.42,2*o,{solid:!0}),n.boxMin(e.darkWood,-s,.12,-o,2*s,r,.2,{solid:!0}),n.boxMin(e.darkWood,-s,.12,-o+.2,.2,r,2*o-.2,{solid:!0}),n.boxMin(e.darkWood,s-.2,.12,-o+.2,.2,r,2*o-.2,{solid:!0});for(const f of[-1,1])n.add(Nf(2*o,1.4,.2),e.darkWood,f<0?-s:s-.2,r+.12,0,{ry:Math.PI/2});const a=Math.atan2(1.4,o),l=Math.hypot(o,1.4)+.7;for(const f of[-1,1])n.box(e.roof,2*s+.8,.16,l,0,r+.12+.7+.1,f*(o/2+.22),{rx:f*a});n.box(e.darkWood,2*s+.9,.18,.28,0,r+1.55,0);for(const f of[-s+.1,-1.67,1.67,s-.1])n.cyl(e.darkWood,.13,.15,r,8,f,.12+r/2,o-.15,{solid:!0});n.box(e.darkWood,2*s,.28,.28,0,r+.02,o-.15);for(const f of[-1.67,1.67])n.boxMin(e.darkWood,f-.08,.12,-o+.2,.16,1.45,4.2,{solid:!0}),n.box(e.darkWood,.2,.12,4.3,f,1.62,-o+.2+2.1);const c=Tt("#ffffff",{map:SM("DRAGON STABLE"),rough:.7,glow:.15});n.box(e.darkWood,3.5,1,.1,0,r+.75,o+.02),n.add(new Ee(3.3,.9),c,0,r+.75,o+.08);for(const f of[-1.5,1.5])n.cyl(e.iron,.02,.02,.5,4,f,r+.35,o+.02);const u=Tt("#ffe0a0",{emissive:"#ffb050",ei:1.2,rough:.2});for(const f of[-s+.1,s-.1]){const g=o+.22;n.box(e.iron,.04,.04,.26,f,2.5,o+.08),n.cyl(e.iron,.02,.1,.07,8,f,2.42,g),n.cyl(e.iron,.09,.09,.03,8,f,2.15,g);for(const[x,p]of[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]])n.box(e.iron,.015,.24,.015,f+x,2.28,g+p);n.cyl(u,.065,.065,.2,8,f,2.28,g)}const h=Tt("#5ab0e0",{rough:.15,metal:.2,emissive:"#2a6090",ei:.25});for(let f=0;f<3;f++){const g=-3.33+f*3.33;n.box(e.darkWood,1.7,.55,.6,g,.12+.275,-o+.55,{solid:!0}),n.box(h,1.5,.04,.45,g,.12+.5,-o+.55);for(let x=-3;x<=3;x++)n.box(e.darkWood,.05,.8,.05,g+x*.22,1.7,-o+.42,{rx:-.35});n.box(e.darkWood,1.6,.08,.5,g,1.32,-o+.42),n.sphere(e.hay,.62,g,1.62,-o+.42,{sy:.55}),n.sphere(e.hay,1.15,g+.2,.12,.3,{sy:.12,ws:12,hs:6})}for(const[f,g,x,p]of[[s+.75,.3,-1.6,0],[s+.75,.3,-.3,0],[s+.75,.9,-.95,.1],[-s-.75,.3,1.2,.2]])n.box(e.hay,1,.6,1.2,f,g,x,{ry:p}),n.box(Tt("#8a6a30",{rough:.9}),1.02,.04,1.22,f,g+.1,x,{ry:p});n.solidBox(s+.25,0,-2.25,s+1.25,1.2,.35),n.cyl(e.darkWood,.25,.2,.4,10,3.9,.32,2.3),n.cyl(h,.22,.22,.03,10,3.9,.5,2.3),n.cyl(e.darkWood,.03,.03,1.8,5,-1.95,1,o-.1,{rz:.25});for(const f of[-.08,0,.08])n.cyl(e.iron,.012,.012,.35,4,-2.18+f,1.95,o-.1,{rz:.25});const d=n.build("dragonStable");for(let f=0;f<3;f++){const g=new Re;g.name=`stableRest${f}`,g.position.set(-3.33+f*3.33,.12,.6),g.userData.restSlot=!0,d.add(g)}return ou(d,xn,i),xo("stable",{x:xn.x,y:i,z:xn.z},xn.ry,n.colliders),d}const Nc={core:2,outer:3.3,deck:9.4,steps:8};function OM(){const i=(Nc.core+Nc.outer)/2;return[{x:-i,z:i+.8},{x:-i,z:i},{x:i,z:i},{x:i,z:-i},{x:-i,z:-i},{x:-i,z:i},{x:0,z:i},{x:.6,z:.2}]}function zM(i){const t=Ha(),e=new Ji,{core:n,outer:s,deck:o,steps:r}=Nc,a=o/(r*4),l=2*n/r,c=Le(Tt("#c8c2b8",{map:ka("warm"),rough:.9}),.9);e.boxMin(c,-n,-.5,-n,2*n,o+.5,2*n,{solid:!0}),e.boxMin(t.stone,-n-.15,-.5,-n-.15,2*n+.3,.9,2*n+.3);for(const[p,m,v]of[[0,n+.01,0],[n+.01,0,Math.PI/2],[0,-n-.01,0],[-n-.01,0,Math.PI/2]])for(const b of[3.2,6.4])e.box(t.iron,.3,1.1,.04,p,b,m,{ry:v});const u=s-n;for(let p=1;p<=r;p++){e.boxMin(t.stone,-n+(p-1)*l,-.3,n,l,p*a+.3,u,{solid:!0}),e.boxMin(t.stone,n,-.3,n-p*l,u,(r+p)*a+.3,l,{solid:!0}),e.boxMin(t.stone,n-p*l,-.3,-s,l,(2*r+p)*a+.3,u,{solid:!0});const m=(3*r+p)*a;e.boxMin(t.planks,-s,m-.14,-n+(p-1)*l,u,.14,l,{solid:!0})}e.boxMin(t.stone,n,-.3,n,u,r*a+.3,u,{solid:!0}),e.boxMin(t.stone,n,-.3,-s,u,2*r*a+.3,u,{solid:!0}),e.boxMin(t.stone,-s,-.3,-s,u,3*r*a+.3,u,{solid:!0});for(const p of[-1.5,0,1.5])e.cyl(t.darkWood,.1,.12,8.4,6,-s+.15,4,p);e.box(t.darkWood,.12,.3,4.6,-s+.08,8.25,0,{rx:-Math.atan2(2.35,4)});const h=s+.2;e.boxMin(t.planks,-n,o-.15,n,n+h,.15,h-n,{solid:!0}),e.boxMin(t.planks,n,o-.15,-n,h-n,.15,2*n,{solid:!0}),e.boxMin(t.planks,-h,o-.15,-h,2*h,.15,h-n,{solid:!0}),e.boxMin(t.planks,-h,o-.15,n,h-n,.15,h-n,{solid:!0}),e.boxMin(t.planks,-n,o-.02,-n,2*n,.04,2*n);const d=o+1.1,f=(p,m,v,b,y,T)=>{const E=Math.hypot(v-p,b-m),A=Math.max(1,Math.round(E/.9));for(let M=0;M<=A;M++){const R=M/A,N=y+(T-y)*R;e.box(t.darkWood,.09,1.1,.09,p+(v-p)*R,N+.55,m+(b-m)*R)}const S=Math.atan2(v-p,b-m),w=Math.atan2(T-y,E);for(const M of[.55,1.08])e.box(t.darkWood,.08,.08,Math.hypot(E,T-y),(p+v)/2,(y+T)/2+M,(m+b)/2,{ry:S,rx:-w})},g=s+.1;f(-n,g,n,g,0,r*a),f(g,n,g,-n,r*a,2*r*a),f(n,-g,-n,-g,2*r*a,3*r*a),f(-g,-n,-g,n,3*r*a,o),f(-h+.05,h-.05,h-.05,h-.05,o,o),f(h-.05,h-.05,h-.05,-h+.05,o,o),f(h-.05,-h+.05,-h+.05,-h+.05,o,o),f(-h+.05,-h+.05,-h+.05,h-.05,o,o),f(-n-.05,-n,-n-.05,n-.15,o,o),e.solidBox(-n,0,s,s+.3,d+1.2,s+.3),e.solidBox(s,0,-s-.3,s+.3,d+1.2,s+.3),e.solidBox(-s-.3,0,-s-.3,s+.3,d+1.2,-s),e.solidBox(-s-.3,5.5,-s-.3,-s,d+1.2,n),e.solidBox(-s-.3,7.6,s,-n,d+1.2,s+.3),e.solidBox(-s-.3,7.6,n,-s,d+1.2,s+.3),e.solidBox(-n-.12,o,-n,-n+.02,d,n-.2);for(const[p,m]of[[-h+.1,-h+.1],[h-.1,-h+.1],[-h+.1,h-.1],[h-.1,h-.1]])e.cyl(t.darkWood,.12,.12,2.8,6,p,o+1.4,m);e.cone(t.roof,5.1,2.1,4,0,o+2.8+1.05,0,{ry:Math.PI/4}),e.cyl(t.iron,.05,.05,1.6,5,0,o+2.8+2.1+.6,0),e.add(new Ee(1.2,.7),Tt("#3a7fd4",{side:He,rough:.6}),.62,o+2.8+2.1+1.05,0);{const p=h-.75,m=-h+.75;for(let y=0;y<3;y++){const T=y/3*Math.PI*2+.3;e.cyl(t.darkWood,.022,.03,1.05,5,p+Math.cos(T)*.18,o+.5,m+Math.sin(T)*.18,{rx:Math.sin(T)*.2,rz:-Math.cos(T)*.2})}const v=Tt("#d0a048",{metal:.75,rough:.28}),b=-(Math.PI/2-.25);e.cyl(v,.055,.035,.62,10,p,o+1.1,m-.05,{rx:b}),e.cyl(t.iron,.065,.065,.05,10,p,o+1.18,m-.36,{rx:b}),e.cyl(t.iron,.028,.028,.1,8,p,o+1.02,m+.27,{rx:b})}e.box(t.darkWood,1.6,.08,.4,-.8,o+.45,-2.6),e.cyl(t.darkWood,.05,.04,.5,5,-n-.1,2,n+.4),e.cone(t.flame,.1,.3,6,-n-.1,2.4,n+.4);const x=e.build("watchtower");return ou(x,Hn,i),xo("watchtower",{x:Hn.x,y:i,z:Hn.z},Hn.ry,e.colliders),x}function kM(i,t,e){const n=t>.5?-1.6:0,s=i.rotation.y;i.rotation.y=s+(n-s)*Math.min(1,e*6)}const BM=230,HM=6.8;function GM(i,t,e){let n=null,s=1/0;for(const l of e){const c=Math.hypot(t.x-l.x,t.z-l.z);c<s&&(s=c,n=l)}const r=Math.hypot(t.x,t.z)<BM;if(i.userData.campOn!==r){i.userData.campOn=r;for(const l of i.children)l.name!=="castleLandmark"&&l.name!=="farTerrain"&&(l.visible=r)}const a=i.getObjectByName("homeCabin");if(a)if(Math.hypot(t.x-Ce.x,t.z-Ce.z)<HM)NM(a).visible=!0;else{const c=a.getObjectByName("cabin-interior");c&&(c.visible=!1)}return s<35?n:null}function VM(i){const t=i;return[i.type,t.color?.getHexString?.()??"",t.emissive?.getHexString?.()??"",t.emissiveIntensity??"",t.map?.uuid??"",t.normalMap?.uuid??"",t.roughness??"",t.metalness??"",i.transparent?`t${i.opacity}`:"o",i.side,i.depthWrite,t.vertexColors?"vc":"",t.flatShading?"flat":"",i.userData?.softFog??""].join("|")}function Jh(i,t,e="mergedStatic",n={}){i.updateMatrixWorld(!0);const s=new Ft().copy(i.matrixWorld).invert(),o=new Map,r=[];for(const l of[...i.children]){if(!t(l))continue;const c=u=>{if(n.skip?.(u))return;for(const m of u.children)c(m);const h=u;if(!h.isMesh||h.isInstancedMesh||Array.isArray(h.material)||!h.visible)return;const d=h.geometry;let f=d.index?d.toNonIndexed():d.clone();for(const m of Object.keys(f.attributes))m!=="position"&&m!=="normal"&&m!=="uv"&&m!=="color"&&f.deleteAttribute(m);f.attributes.normal||f.computeVertexNormals(),f.attributes.uv||f.setAttribute("uv",new we(new Float32Array(f.attributes.position.count*2),2));const g=!!f.attributes.color;f.applyMatrix4(new Ft().multiplyMatrices(s,h.matrixWorld));const x=VM(h.material)+(g?"|C":"|N")+(h.castShadow?"|cs":"")+(h.receiveShadow?"|rs":"");let p=o.get(x);p||o.set(x,p={mat:h.material,cast:h.castShadow,recv:h.receiveShadow,geos:[]}),p.geos.push(f),r.push(h)};c(l)}for(const l of r)l.parent?.remove(l);if(n.removeEmpty!==!1)for(const l of[...i.children]){if(!t(l))continue;let c=0;l.traverse(u=>{(u.isMesh||u.isLight||u.isPoints)&&c++}),c===0&&i.remove(l)}let a=0;for(const l of o.values()){const c=We(l.geos,!1);if(!c)continue;c.computeBoundingSphere();const u=new ht(c,l.mat);u.name=`${e}_${a++}`,u.castShadow=l.cast,u.receiveShadow=l.recv,u.userData.mergedStatic=!0,i.add(u)}return r.length-a}function WM(i){const t=i;return!(!t.isMeshStandardMaterial||t.map||t.normalMap||t.alphaMap||t.emissiveMap||i.transparent||i.alphaTest>0||t.vertexColors||t.emissive&&(t.emissive.r+t.emissive.g+t.emissive.b)*t.emissiveIntensity>.001)}const Kh=new Map;function XM(i,t,e,n){const s=`${i}|${t}|${e}|${n}`;let o=Kh.get(s);return o||Kh.set(s,o=new ee({color:"#ffffff",vertexColors:!0,roughness:i,metalness:t,flatShading:e,side:n})),o}function Uf(i,t,e="vcBaked"){i.updateMatrixWorld(!0);const n=new Ft().copy(i.matrixWorld).invert(),s=new Map,o=[],r=l=>{if(l!==i&&t(l))return;const c=l;if(c.isMesh&&!c.isInstancedMesh&&!Array.isArray(c.material)&&c.visible&&WM(c.material)){const u=c.material,h=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(const b of Object.keys(h.attributes))b!=="position"&&b!=="normal"&&h.deleteAttribute(b);h.attributes.normal||h.computeVertexNormals(),h.applyMatrix4(new Ft().multiplyMatrices(n,c.matrixWorld));const d=h.attributes.position.count,f=new Float32Array(d*3);for(let b=0;b<d;b++)f[b*3]=u.color.r,f[b*3+1]=u.color.g,f[b*3+2]=u.color.b;h.setAttribute("color",new we(f,3));const g=u.roughness>=.6?.85:.45,x=u.metalness>=.5?.7:0,p=u.side===Wn?Wn:He,m=`${g}|${x}|${u.flatShading}|${p}`;let v=s.get(m);v||s.set(m,v={mat:XM(g,x,u.flatShading,p),cast:!1,recv:!1,geos:[]}),v.cast||=c.castShadow,v.recv||=c.receiveShadow,v.geos.push(h),o.push(c)}for(const u of[...l.children])r(u)};if(r(i),o.length<2)return 0;for(const l of o)l.parent?.remove(l);let a=0;for(const l of s.values()){const c=We(l.geos,!1);if(!c)continue;c.computeBoundingSphere();const u=new ht(c,l.mat);u.name=`${e}_${a++}`,u.castShadow=l.cast,u.receiveShadow=l.recv,i.add(u)}return o.length-a}function Ff(i,t,e,n=.8){i.updateMatrixWorld(!0);const s=new Ft().copy(i.matrixWorld).invert(),o=new Map,r=new Map;i.traverse(c=>{const u=c;if(!u.isMesh||Array.isArray(u.material)||!u.visible)return;const h=u.material;if(!h.color)return;const d=u,f=[],g=new Ft().multiplyMatrices(s,u.matrixWorld);if(d.isInstancedMesh){const m=new Ft;for(let v=0;v<d.count;v++)d.getMatrixAt(v,m),f.push(g.clone().multiply(m))}else f.push(g);const x=h.color.clone().multiplyScalar(h.map?n:1);h.emissive&&h.emissiveIntensity&&x.add(h.emissive.clone().multiplyScalar(Math.min(1,h.emissiveIntensity)*.6));const p=`${u.material.transparent?"t"+u.material.opacity:"o"}|${u.material.side}`;r.has(p)||r.set(p,{side:u.material.side,transparent:u.material.transparent,opacity:u.material.opacity});for(const m of f){const v=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const S of Object.keys(v.attributes))S!=="position"&&S!=="normal"&&v.deleteAttribute(S);v.attributes.normal||v.computeVertexNormals();const b=!!u.geometry.attributes.color&&h.vertexColors;v.applyMatrix4(m);const y=v.attributes.position.count,T=new Float32Array(y*3),E=b?(u.geometry.index?u.geometry.toNonIndexed():u.geometry).attributes.color:null;for(let S=0;S<y;S++){const w=E?E.getX(S)*x.r:x.r,M=E?E.getY(S)*x.g:x.g,R=E?E.getZ(S)*x.b:x.b;T[S*3]=w,T[S*3+1]=M,T[S*3+2]=R}v.setAttribute("color",new we(T,3));const A=o.get(p)??[];A.push(v),o.set(p,A)}});const a=new Kt;a.name=t;let l=0;for(const[c,u]of o){const h=We(u,!1);if(!h)continue;h.computeBoundingSphere();const d=r.get(c),f=new ee({color:"#ffffff",vertexColors:!0,roughness:.85,metalness:0,side:He,transparent:d.transparent,opacity:d.opacity});e?.(f);const g=new ht(h,f);g.name=`${t}_${l++}`,a.add(g)}return a}function Qh(i){return i==="high"?{maxDrawCalls:150,maxVisibleTris:14e4,maxLoadedChunks:72,loadRadiusChunks:5,farRadiusChunks:8}:i==="medium"?{maxDrawCalls:110,maxVisibleTris:9e4,maxLoadedChunks:56,loadRadiusChunks:4,farRadiusChunks:7}:{maxDrawCalls:70,maxVisibleTris:5e4,maxLoadedChunks:28,loadRadiusChunks:2,farRadiusChunks:4}}function Yr(i,t){return`${i},${t}`}function qM(i){return i===0?16:i===1?8:4}const YM=new _t("#5f9a3c");function Of(i,t,e){const n=Math.hypot(i-$t.x,t-$t.z);if(n>100)return;const s=1-Zo.smoothstep(n,45,100),o=Math.sin(i*.21)*Math.cos(t*.17)*.08;e.lerp(YM,Math.min(1,s*.85+o))}function pa(i){switch(i){case"meadow":return new _t("#78c050");case"forest":return new _t("#2a6a38");case"lake":return new _t("#4a7a5a");case"rocky":return new _t("#8a8680");case"snow":return new _t("#f4f8ff");case"desert":return new _t("#e8d4a8");case"dragon_lands":return new _t("#7a3c24");default:return new _t("#6db84a")}}const er=38;function td(i,t,e){const n=new Kt;n.name=`chunk_${i}_${t}`;const s=qM(e),o=i*ie,r=t*ie,a=Math.hypot(o+ie/2,r+ie/2);if(a<er-4)return{group:n,tris:0,draws:0};const l=new Ee(ie,ie,s,s),c=l.attributes.position,u=new Float32Array(c.count*3),h=l.attributes.uv;let d=1/0;for(let E=0;E<c.count;E++){const A=c.getX(E),S=c.getY(E),w=o+ie/2+A,M=r+ie/2+S,R=se(w,M);c.setZ(E,R),R<d&&(d=R);const N=ln(w,M),U=pa(N.primary);N.secondary&&N.blend>.05&&U.lerp(pa(N.secondary),N.blend),Of(w,M,U);const F=.85+Math.min(.15,Math.max(0,R)*.03);if(u[E*3]=U.r*F,u[E*3+1]=U.g*F,u[E*3+2]=U.b*F,h){const Y=ki(i,t,zi);h.setXY(E,w*.12+Y,M*.12+Y*1.3)}}l.setAttribute("color",new we(u,3)),l.computeVertexNormals();const f=bn(),g=ln(o+16,r+16),x=g.primary;let p=null;const m=Math.hypot(o+16-$t.x,r+16-$t.z)<110;x==="meadow"||x==="forest"||x==="lake"||m?(p=Mf(128),p.wrapS=p.wrapT=ti,p.repeat.set(2,2)):x==="rocky"?(p=hr(128),p.wrapS=p.wrapT=ti,p.repeat.set(2,2)):x==="desert"&&(p=bf(128),p.wrapS=p.wrapT=ti,p.repeat.set(1.5,1.5));const v=new ee({map:p??void 0,vertexColors:!0,roughness:x==="snow"?.45:x==="desert"?.95:x==="dragon_lands"?.7:Xi.grass,metalness:x==="dragon_lands"?.2:0,color:"#ffffff"});e===0&&f?.grassNormal&&(x==="meadow"||x==="forest"||m)&&(v.normalMap=f.grassNormal,v.normalScale=new rt(js.grass*.6,js.grass*.6)),x==="snow"&&(v.emissive=new _t("#a0c0e0"),v.emissiveIntensity=.12),x==="dragon_lands"&&(v.emissive=new _t("#401810"),v.emissiveIntensity=.08,v.color=new _t("#9a5530"),v.metalness=.05),x==="desert"&&(v.color=new _t("#fff2d0"),v.map=null,v.emissive=new _t("#c8a060"),v.emissiveIntensity=.06);const b=new ht(l,v);b.rotation.x=-Math.PI/2,b.position.set(o+ie/2,0,r+ie/2),b.receiveShadow=e===0,b.castShadow=!1,n.add(b);let y=s*s*2,T=1;if(e===0&&(x==="lake"||g.secondary==="lake")&&d<-.05&&!ko(o+16,r+16,30)){const E=new ht(new Ee(ie,ie,1,1),new ee({color:"#3a8ac0",roughness:.12,metalness:.3,transparent:!0,opacity:.85,emissive:new _t("#1a4a70"),emissiveIntensity:.12}));E.rotation.x=-Math.PI/2,E.position.set(o+ie/2,-.05,r+ie/2),E.name="lakeWater",n.add(E),T++,y+=2}if(e===0&&a>er){const{pTris:E,pDraws:A}=$M(n,i,t,x);y+=E,T+=A}return{group:n,tris:y,draws:T}}function Fn(i,t,e){let n=se(i,t),s=n;for(let o=0;o<6;o++){const r=o/6*Math.PI*2+.3,a=se(i+Math.cos(r)*e,t+Math.sin(r)*e);a<n&&(n=a),a>s&&(s=a)}return{min:n,max:s}}function Dl(i,t,e,n){if(n<.12){const s=ln(i,t);if(s.primary==="lake"||s.secondary==="lake")return!0}for(let s=0;s<4;s++){const o=s/4*Math.PI*2;if(Cf(i+Math.cos(o)*e,t+Math.sin(o)*e)!==null)return!0}return n<-.04}const ed=new Map;function zf(i){const t=ed.get(i);if(t)return t;const e=i==="forest"?"#24572c":i==="snow"?"#2f5a3e":i==="rocky"?"#46703f":"#3b7a3a",n=i==="forest"?"#3f7d3a":i==="snow"?"#f4f8ff":i==="rocky"?"#6a8f55":"#5fa04c",s=[],o=(f,g)=>{const x=f.index?f.toNonIndexed():f,p=x.attributes.position,m=new Float32Array(p.count*3);for(let v=0;v<p.count;v++){const b=g(p.getY(v),v);m[v*3]=b.r,m[v*3+1]=b.g,m[v*3+2]=b.b}return x.setAttribute("color",new we(m,3)),x.deleteAttribute("uv"),x},r=new de(.11,.19,1.1,7);r.translate(0,.55,0);const a=new _t("#6a4428"),l=new _t("#4a2e1a");s.push(o(r,(f,g)=>(g%3===0?l:a).clone().lerp(l,1-f)));const c=[[1,1.35,.7],[.78,1.15,1.35],[.52,1,1.95]],u=new _t(e),h=new _t(n);c.forEach(([f,g,x],p)=>{const m=new Mn(f,g,8,1,!1);m.rotateY(p*.4),m.translate(0,x+g/2,0),s.push(o(m,b=>{const y=Math.max(0,Math.min(1,(b-x)/g));return i==="snow"?u.clone().lerp(h,y>.35?.85:.15):u.clone().multiplyScalar(.75+.25*y).lerp(h,y*.6)}));const v=new Gn(f*.98,8);v.rotateX(Math.PI/2),v.rotateY(p*.4),v.translate(0,x+.01,0),s.push(o(v,()=>u.clone().multiplyScalar(.45)))});const d=We(s,!1);return d.computeVertexNormals(),ed.set(i,d),d}function $M(i,t,e,n){const s=t*ie,o=e*ie,r=[],a=[],l=[],c=n==="forest"?48:n==="meadow"?10:n==="rocky"?16:n==="dragon_lands"?36:n==="desert"?10:n==="snow"?14:8;for(let f=0;f<c;f++){const g=ki(t*50+f,e*50+f,zi+20),x=ki(t*50+f,e*50+f,zi+21),p=s+g*ie,m=o+x*ie;if(Math.hypot(p,m)<er||ko(p,m))continue;const v=Fn(p,m,.9);if(Dl(p,m,1,v.min))continue;const b=v.min-.04;if(n==="rocky"||n==="snow"||n!=="desert"&&n!=="dragon_lands"&&n!=="lake"&&f%2===0){const y=.55+g*.9,T=p+2.6,E=m-1.9,A=Fn(T,E,.45*y);!ko(T,E)&&!Dl(T,E,.6*y,A.min)&&A.max-A.min<.9*y&&a.push({x:T,y:A.min-.18*y,z:E,sy:y,ry:g*6})}if(n==="dragon_lands"&&ln(p,m).primary==="dragon_lands"){const y=.5+g*.7;a.push({x:p,y:b-.16*y,z:m,sy:y,ry:g*6});const T=Fn(p+.8,m+.6,.4);l.push({x:p+.8,y:T.min-.05,z:m+.6,sy:.4+x*.45,ry:x*6})}if(!(v.max-v.min>1.4))if(n==="forest")b>-.2&&r.push({x:p,y:b,z:m,sy:1+x*.9,ry:x*6});else if(n==="meadow")b>-.2&&r.push({x:p,y:b,z:m,sy:.85+x*.7,ry:x*6});else if(n==="snow")b>1&&r.push({x:p,y:b,z:m,sy:.9+x*.5,ry:x*6});else if(n==="desert"){const y=Math.hypot(p,m);ln(p,m).primary==="desert"&&y<490&&l.push({x:p,y:b,z:m,sy:.85+x*.7,ry:x*6})}else n==="rocky"?f%3===0&&r.push({x:p,y:b,z:m,sy:.5+x*.4,ry:x*6}):n==="lake"&&b>-.1&&r.push({x:p,y:b,z:m,sy:.7+x*.4,ry:x*6})}if(n==="forest")for(let f=3;f<ie;f+=5)for(let g=3;g<ie;g+=5){const x=s+f,p=o+g;if(Math.hypot(x,p)<er||ko(x,p))continue;const m=Fn(x,p,.9);Dl(x,p,1,m.min)||m.max-m.min>1.4||r.push({x,y:m.min-.04,z:p,sy:1.15,ry:f*.1+g})}if(n==="dragon_lands")for(let f=4;f<ie;f+=7)for(let g=4;g<ie;g+=7){const x=s+f,p=o+g;if(ln(x,p).primary!=="dragon_lands"||Math.hypot(x,p)>Bn-8)continue;const m=Fn(x,p,.3);a.push({x,y:m.min-.1,z:p,sy:.45,ry:f+g});const v=Fn(x+1.1,p+.8,.45);l.push({x:x+1.1,y:v.min-.05,z:p+.8,sy:.45+ki(f,g,t*7+e)*.45,ry:g})}let u=0,h=0;const d=new Re;if(r.length){const g=zf(n==="forest"?"forest":n==="snow"?"snow":n==="rocky"?"rocky":n==="lake"?"lake":"meadow"),x=new ee({vertexColors:!0,roughness:.9,color:"#ffffff"}),p=new kn(g,x,r.length);p.name=`trees_${n}`;for(let m=0;m<r.length;m++){const v=r[m];d.position.set(v.x,v.y,v.z),d.rotation.set(0,v.ry,0),d.scale.set(v.sy*.95,v.sy,v.sy*.95),d.updateMatrix(),p.setMatrixAt(m,d.matrix)}if(p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!0,p.castShadow=!0,i.add(p),u++,h+=r.length*70,n==="forest"&&r.length){const m=[],v=new _t("#2d5a28"),b=new _t("#c04040"),y=(M,R,N)=>{const U=M.index?M.toNonIndexed():M.clone();for(const B of Object.keys(U.attributes))B!=="position"&&B!=="normal"&&U.deleteAttribute(B);U.applyMatrix4(R);const F=U.attributes.position.count,Y=new Float32Array(F*3);for(let B=0;B<F;B++)Y[B*3]=N.r,Y[B*3+1]=N.g,Y[B*3+2]=N.b;U.setAttribute("color",new we(Y,3)),m.push(U)},T=new Mn(.35,.7,5),E=Math.min(r.length,28);for(let M=0;M<E;M++){const R=r[M];d.position.set(R.x+.9,Fn(R.x+.9,R.z-.5,.3).min+.3,R.z-.5),d.scale.setScalar(.7+M%5*.1),d.rotation.set(0,M,0),d.updateMatrix(),y(T,d.matrix,v)}const A=new Bt(.18,5,4),S=Math.min(14,r.length);for(let M=0;M<S;M++){const R=r[M];d.position.set(R.x-.7,Fn(R.x-.7,R.z+.6,.15).min+.14,R.z+.6),d.scale.setScalar(1),d.rotation.set(0,0,0),d.updateMatrix(),y(A,d.matrix,b)}const w=We(m,!1);if(w){w.computeBoundingSphere();const M=new ht(w,new ee({color:"#ffffff",vertexColors:!0,roughness:.9}));M.name="undergrowth",i.add(M),u++,h+=E*10+S*20}}}if(a.length){const f=new Ca(.45,0),g=new ee({color:n==="desert"?"#d8c090":n==="snow"?"#d8e0e8":n==="dragon_lands"?"#4a444c":"#8a8884",map:hr(64),roughness:Xi.rock}),x=bn();x?.rockNormal&&(g.normalMap=x.rockNormal,g.normalScale=new rt(.5,.5));const p=new kn(f,g,a.length);p.name="rocks";for(let m=0;m<a.length;m++){const v=a[m];d.position.set(v.x,v.y+.35*v.sy,v.z),d.rotation.set(v.ry*.2,v.ry,v.ry*.1),d.scale.setScalar(v.sy),d.updateMatrix(),p.setMatrixAt(m,d.matrix)}p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!0,i.add(p),u++,h+=a.length*36}if(l.length){if(n==="desert"){const f=new ee({color:"#3a8a45",roughness:.85,flatShading:!0}),g=new de(.22,.28,2.4,6).translate(0,1.2,0),x=new de(.12,.14,.9,5).rotateZ(.55).translate(-.35,1.6,0),p=new de(.12,.14,.9,5).rotateZ(-.5).translate(.35,1.85,0),m=We([g,x,p].map(b=>b.toNonIndexed()),!1),v=new kn(m,f,l.length);v.name="cactus";for(let b=0;b<l.length;b++){const y=l[b];d.position.set(y.x,y.y,y.z),d.scale.set(y.sy,y.sy,y.sy),d.rotation.set(0,y.ry,0),d.updateMatrix(),v.setMatrixAt(b,d.matrix)}v.instanceMatrix.needsUpdate=!0,i.add(v),u+=1,h+=l.length*40}else if(n==="dragon_lands"){const f=new Ia(.5,0),g=new ee({color:"#d040ff",emissive:"#a010e0",emissiveIntensity:.7,roughness:.3,metalness:.25}),x=new kn(f,g,l.length);x.name="crystals";for(let y=0;y<l.length;y++){const T=l[y];d.position.set(T.x,T.y+.65*T.sy,T.z),d.scale.set(T.sy*1.1,T.sy*1.8,T.sy*1.1),d.rotation.set(.3,T.ry,.5),d.updateMatrix(),x.setMatrixAt(y,d.matrix)}x.instanceMatrix.needsUpdate=!0,i.add(x),u++,h+=l.length*8;const p=[],m=(y,T,E,A,S)=>{const w=new Ft().compose(new L(T,se(T,E)+S,E),new _n().setFromEuler(new en(0,A,0)),new L(1,1,1));y.applyMatrix4(w),p.push(y)};m(new Gn(2.2,10).rotateX(-Math.PI/2),s+10,o+12,0,.04);for(let y=0;y<5;y++)m(new Ge(2.8+y*.4,.06,.22),s+4+y*5.5,o+6+y%3*7,y*.7,.05);for(let y=0;y<4;y++)m(new Gn(.7,8).rotateX(-Math.PI/2),s+8+y*6,o+18+y%2*5,0,.05);const v=Math.min(6,l.length);for(let y=0;y<v;y++){const T=l[y],E=T.x-1.2,A=T.z+.8;m(new Gn(.55*(.8+y%3*.2),8).rotateX(-Math.PI/2),E,A,T.ry,.04)}const b=We(p.map(y=>y.toNonIndexed()),!1);if(b){const y=new ht(b,new ee({color:"#ff5a18",emissive:"#ff3000",emissiveIntensity:.85,roughness:.4}));y.name="lavaCracks",i.add(y),u++,h+=100}}}return{pTris:h,pDraws:u}}class kf{root=new Kt;chunks=new Map;queue=[];budgets;lastCx=NaN;lastCz=NaN;stats={loaded:0,draws:0,tris:0,queued:0};constructor(t){this.root.name="streamedWorld",this.budgets=Qh(t)}setTier(t){this.budgets=Qh(t),this.lastCx=NaN}hasChunkAt(t,e){return this.chunks.has(Yr(Math.floor(t/ie),Math.floor(e/ie)))}softClamp(t,e){const n=Math.hypot(t,e),s=Bn-2;if(n<=s)return{x:t,z:e};const o=s/n;return{x:t*o,z:e*o}}update(t,e,n,s=5){const o=Math.floor(t/ie),r=Math.floor(e/ie);(o!==this.lastCx||r!==this.lastCz||this.queue.length===0)&&(this.lastCx=o,this.lastCz=r,this.rebuildQueue(o,r));const a=performance.now();for(;this.queue.length&&performance.now()-a<s&&!(this.chunks.size>=this.budgets.maxLoadedChunks);){const h=this.queue.shift(),d=Yr(h.cx,h.cz),f=this.chunks.get(d);if(f&&f.lod<=h.lod)continue;f&&(this.root.remove(f.group),f.group.traverse(x=>{const p=x;p.isMesh&&p.geometry?.dispose()}),this.chunks.delete(d));const g=td(h.cx,h.cz,h.lod);g.group.traverse(x=>{x.frustumCulled=!0}),this.root.add(g.group),this.chunks.set(d,{key:d,cx:h.cx,cz:h.cz,lod:h.lod,group:g.group,tris:g.tris,draws:g.draws})}const l=this.budgets.farRadiusChunks+1;for(const[h,d]of[...this.chunks])Math.max(Math.abs(d.cx-o),Math.abs(d.cz-r))>l&&(this.root.remove(d.group),this.chunks.delete(h));if(n)for(const h of this.chunks.values()){const d=new L(h.cx*ie+16,0,h.cz*ie+16);d.y=se(d.x,d.z),h.group.visible=n.containsPoint(d)||Math.hypot(d.x-t,d.z-e)<ie*2.5}{const h=this.budgets.maxLoadedChunks>=72?80:this.budgets.maxLoadedChunks>=56?70:20,d=this.budgets.maxLoadedChunks>=72?120:this.budgets.maxLoadedChunks>=56?95:28;for(const f of this.chunks.values()){if(!f.group.visible)continue;const g=Math.max(0,Math.hypot(f.cx*ie+16-t,f.cz*ie+16-e)-16);for(const x of f.group.children){const p=x.name;p==="undergrowth"?x.visible=g<h:p==="rocks"||p==="crystals"||p==="cactus"||p==="lavaCracks"?x.visible=g<d:p.startsWith("trees_")&&(x.visible=g<(this.budgets.maxLoadedChunks>=56?200:24),x.castShadow=g<40)}}}let c=0,u=0;for(const h of this.chunks.values())h.group.visible&&(c+=h.draws,u+=h.tris);this.stats={loaded:this.chunks.size,draws:c,tris:u,queued:this.queue.length}}rebuildQueue(t,e){const n=new Map,s=this.budgets.farRadiusChunks;for(let o=-s;o<=s;o++)for(let r=-s;r<=s;r++){const a=Math.max(Math.abs(r),Math.abs(o));let l=2;a<=this.budgets.loadRadiusChunks-2?l=0:a<=this.budgets.loadRadiusChunks&&(l=1);const c=t+r,u=e+o,h=c*ie+16,d=u*ie+16;Math.hypot(h,d)>Bn+ie||Math.hypot(h,d)<er-8||n.set(Yr(c,u),l)}this.queue=[];for(const[o,r]of n){const[a,l]=o.split(",").map(Number),c=this.chunks.get(o);(!c||c.lod>r)&&this.queue.push({cx:a,cz:l,lod:r})}this.queue.sort((o,r)=>{const a=Math.max(Math.abs(o.cx-t),Math.abs(o.cz-e)),l=Math.max(Math.abs(r.cx-t),Math.abs(r.cz-e));return o.lod!==r.lod?o.lod-r.lod:a-l})}flushAround(t,e,n=2){const s=Math.floor(t/ie),o=Math.floor(e/ie);this.rebuildQueue(s,o);const r=[...this.chunks.values()].sort((a,l)=>{const c=Math.max(Math.abs(a.cx-s),Math.abs(a.cz-o));return Math.max(Math.abs(l.cx-s),Math.abs(l.cz-o))-c});for(let a=-n;a<=n;a++)for(let l=-n;l<=n;l++){const c=s+a,u=o+l,h=Yr(c,u),d=this.chunks.get(h);if(d&&d.lod===0)continue;for(;this.chunks.size>=this.budgets.maxLoadedChunks&&r.length;){const g=r.shift();Math.max(Math.abs(g.cx-s),Math.abs(g.cz-o))<=n||(this.root.remove(g.group),this.chunks.delete(g.key))}d&&(this.root.remove(d.group),this.chunks.delete(h));const f=td(c,u,0);this.root.add(f.group),this.chunks.set(h,{key:h,cx:c,cz:u,lod:0,group:f.group,tris:f.tris,draws:f.draws})}this.stats.loaded=this.chunks.size}dispose(){for(const t of this.chunks.values())this.root.remove(t.group);this.chunks.clear(),this.queue=[]}}function on(i,t=.6){return i.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
        float fogD = vFogDepth * ${t.toFixed(3)};
        #ifdef FOG_EXP2
          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogD * fogD );
        #else
          float fogFactor = smoothstep( fogNear, fogFar, fogD );
        #endif
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
      #endif`)},i.customProgramCacheKey=()=>"softfog"+t,i}function au(){return{x:$t.x+id.x,y:Ba()+.9,z:$t.z+id.z}}const Bf=24,qs=2.4,Yn=10,ve=Bf-qs,nd={z:-11},id={x:0,z:5};let ra=null;function jM(i){ra&&(ra.opacity=.46+Math.sin(i*3.4)*.07,ra.emissiveIntensity=.26+Math.sin(i*4.6)*.1)}function ZM(){const i=ka("grey"),t=wf(64);return{stone:on(Le(Tt("#e2ddd4",{map:i,rough:.92}),.5)),tower:on(Le(Tt("#d4cec4",{map:i,rough:.92}),.5)),roof:on(Le(Tt("#d8473c",{map:t,rough:.75}),.55)),wood:on(Le(Tt("#9a6a40",{map:qi("dark"),rough:.8}),.5)),iron:on(Tt("#3c3c44",{rough:.45,metal:.6})),floor:on(Le(Tt("#d8d0c4",{map:su(),rough:.9}),.33)),windowWarm:on(Tt("#ffd890",{emissive:"#ffb050",ei:.9,rough:.3})),windowDay:Tt("#d8ecff",{emissive:"#b8dcff",ei:.75,rough:.2}),banner:on(Tt("#ffffff",{map:wM(),rough:.8,side:He,glow:.08})),slit:on(Tt("#1e1c22",{rough:.9}))}}function sd(i,t,e,n){const s=i/2,o=new Ra;return o.moveTo(-s,t),o.lineTo(-s,e),o.lineTo(s,e),o.lineTo(s,t),o.absarc(0,t,s,0,Math.PI,!1),new cr(o,{depth:n,bevelEnabled:!1,curveSegments:10})}function od(i,t,e){const n=new Ra;return n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(0,t),n.closePath(),new cr(n,{depth:e,bevelEnabled:!1})}function Ni(i,t,e,n,s,o,r,a=2.6){const l=Math.hypot(s-e,o-n),c=Math.max(1,Math.floor(l/a)),u=Math.abs(s-e)>Math.abs(o-n);for(let h=0;h<=c;h++){const d=h/c,f=e+(s-e)*d,g=n+(o-n)*d;i.box(t,u?1.3:.9,1.3,u?.9:1.3,f,r+.65,g)}}function rd(i,t,e,n,s,o,r){i.cyl(t.tower,s,s*1.08,o+4,14,e,(o-4)/2,n),i.cyl(t.tower,s+.45,s,.9,14,e,o+.2,n);for(let a=0;a<10;a++){const l=a/10*Math.PI*2;i.box(t.tower,1,1.1,.8,e+Math.sin(l)*(s+.2),o+1.15,n+Math.cos(l)*(s+.2),{ry:l})}i.cone(t.roof,s+.9,r,14,e,o+.65+r/2,n);for(let a=0;a<4;a++){const l=a/4*Math.PI*2+Math.PI/4;for(const c of[o*.35,o*.7])i.box(t.slit,.35,1.6,.3,e+Math.sin(l)*(s+.02),c,n+Math.cos(l)*(s+.02),{ry:l})}i.cyl(t.iron,.07,.07,3.2,5,e,o+r+1.6,n),i.add(new Ee(2.2,1.1),t.banner,e+1.15,o+r+2.4,n),i.solidBox(e-s*.75,-4,n-s*.75,e+s*.75,o+1.7,n+s*.75)}function JM(i){const t=new Ji,e=Bf;t.boxMin(i.stone,-e,-4,-e,2*e,Yn+4,qs,{solid:!0}),t.boxMin(i.stone,-e,-4,-ve,qs,Yn+4,2*ve,{solid:!0}),t.boxMin(i.stone,ve,-4,-ve,qs,Yn+4,2*ve,{solid:!0}),t.boxMin(i.stone,-e,-4,ve,e-8.5,Yn+4,qs,{solid:!0}),t.boxMin(i.stone,8.5,-4,ve,e-8.5,Yn+4,qs,{solid:!0}),Ni(t,i.stone,-e+2,-e+.45,e-2,-e+.45,Yn),Ni(t,i.stone,-e+.45,-e+2,-e+.45,e-2,Yn),Ni(t,i.stone,e-.45,-e+2,e-.45,e-2,Yn),Ni(t,i.stone,-e+2,e-.45,-8.5,e-.45,Yn),Ni(t,i.stone,8.5,e-.45,e-2,e-.45,Yn);for(const[g,x,p,m]of[[-e-.8,-e-.8,2*e+1.6,1.6],[-e-.8,-e,1.6,2*e],[e-.8,-e,1.6,2*e],[-e-.8,e-.8,e-8.5+.8,1.6],[8.5,e-.8,e-8.5+.8,1.6]])t.boxMin(i.tower,g,-2,x,p,3,m);for(const[g,x]of[[-e,-e],[e,-e],[-e,e],[e,e]])rd(t,i,g,x,4.4,16,9);for(const g of[-1,1]){const x=g<0?-8.5:2.5;t.boxMin(i.tower,x,-4,ve-1.5,6,19,7.6,{solid:!0}),Ni(t,i.tower,x+.5,ve+5.65,x+5.5,ve+5.65,15,1.7),Ni(t,i.tower,x+.5,ve-1.05,x+5.5,ve-1.05,15,1.7),t.cone(i.roof,4.6,5.5,4,x+3,15+2.75+.6,ve+2.3,{ry:Math.PI/4});for(const p of[5,10])t.box(i.slit,.4,1.6,.3,x+3,p,ve+6.12);t.box(i.windowWarm,.9,1.3,.1,x+3,12.4,ve+6.13)}const n=ve-1.5,s=7.6;t.boxMin(i.tower,-2.5,7.4,n,5,7.6,s,{solid:!0}),t.add(sd(5,4.8,7.4,s),i.tower,0,0,n),Ni(t,i.tower,-2,ve+5.65,2,ve+5.65,15,1.4);const o=new bi(2.65,.32,6,14,Math.PI);t.add(o,i.stone,0,4.8,n+s+.05);for(let g=-4;g<=4;g++)t.box(i.iron,.12,2.2,.12,g*.55,7,n+s-.6),t.cone(i.iron,.09,.3,4,g*.55,5.75,n+s-.6,{rx:Math.PI});for(const g of[6.4,7.3])t.box(i.iron,4.8,.1,.1,0,g,n+s-.6);for(const g of[-1,1]){t.box(i.wood,.22,5.8,2.4,g*2.3,2.9,n+1.4);for(const x of[1,2.9,4.8])t.box(i.iron,.26,.16,2.3,g*2.3,x,n+1.4)}t.boxMin(i.floor,-ve,-.4,-ve,2*ve,.5,2*ve,{solid:!0}),t.boxMin(i.floor,-2.5,-.4,n,5,.5,s+.2,{solid:!0}),t.boxMin(i.floor,-3,-.4,ve+6.1,6,.48,$t.plateauR-ve-7,{solid:!0});const r=9.6,a=-20,l=-3,c=1.2,u=11;t.boxMin(i.stone,-r,-1,a,c,u+1,l-a,{solid:!0}),t.boxMin(i.stone,r-c,-1,a,c,u+1,l-a,{solid:!0}),t.boxMin(i.stone,-r+c,-1,a,2*(r-c),u+1,c,{solid:!0}),t.boxMin(i.stone,-r+c,-1,l-c,r-c-2.2,u+1,c,{solid:!0}),t.boxMin(i.stone,2.2,-1,l-c,r-c-2.2,u+1,c,{solid:!0}),t.boxMin(i.stone,-2.2,6.6,l-c,4.4,u-6.6,c,{solid:!0}),t.add(sd(4.4,4.2,6.6,c),i.stone,0,0,l-c),t.add(new bi(2.4,.25,6,12,Math.PI),i.tower,0,4.2,l+.05),t.add(od(2*r,6.2,c),i.stone,0,u,l-c),t.add(od(2*r,6.2,c),i.stone,0,u,a);const h=Math.atan2(6.2,r),d=Math.hypot(r,6.2)+1;for(const g of[-1,1])t.box(i.roof,d,.4,l-a+1.6,g*(r/2+.2),u+3.1+.25,(a+l)/2,{rz:-g*h});t.box(i.wood,.5,.5,l-a+1.8,0,u+6.35,(a+l)/2);for(const g of[-6.5,-10.5,-14.5,-18])for(const x of[-1,1])t.box(i.tower,.3,4,1.9,x*(r+.12),6,g),t.box(i.windowWarm,.1,3.2,1.2,x*(r+.3),6,g),t.box(i.windowDay,.06,3.2,1.2,x*(r-c-.04),6,g),t.cone(i.tower,.75,.7,4,x*(r+.28),8.3,g,{ry:Math.PI/4});rd(t,i,14.5,-14.5,4.6,27,10);for(const g of[9,15,21])t.box(i.windowWarm,.1,1.4,.8,14.5+4.65,g,-14.5,{ry:Math.PI/2});return{group:t.build("castleExterior",{castShadow:!1,receiveShadow:!1}),colliders:t.colliders}}function KM(i){const t=new Ji,e=Tt("#7ec8ef",{rough:.06,metal:.28,transparent:!0,opacity:.52,emissive:"#3aa0d4",ei:.32});ra=e;const n=Tt("#f0c040",{rough:.35,metal:.7,emissive:"#806010",ei:.25}),s=Tt("#b02838",{rough:.7,glow:.12}),o=new Xn({color:"#ff8a2a"}),r=new Xn({color:"#ffb050",transparent:!0,opacity:.22,depthWrite:!1,blending:Yo}),a=Le(Tt("#cfc6b8",{map:su(),rough:.85,glow:.1}),.4),l=Le(Tt("#e6dfd2",{map:ka("warm"),rough:.9,glow:.14}),.5),c=Le(Tt("#7a4a28",{map:qi("dark"),rough:.75,glow:.08}),.6),u=Tt("#ffffff",{map:Dc("#a82030","#f0c040"),rough:.9,glow:.12}),h=Tt("#3f8a3a",{rough:.9}),d=Le(Tt("#9a6436",{map:qi("light"),rough:.8}),.8);t.push(0,.1,5),t.cyl(i.tower,3.4,3.6,.9,10,0,.45,0,{solid:!0}),t.cyl(e,3.05,3.05,.14,20,0,.98,0),t.cyl(i.tower,.55,.8,2.4,10,0,1.6,0),t.cyl(i.tower,1.4,.55,.5,12,0,2.95,0),t.cyl(e,1.2,1.2,.08,16,0,3.17,0),t.cyl(i.tower,.25,.35,.9,8,0,3.6,0),t.sphere(n,.32,0,4.2,0);for(let x=0;x<6;x++){const p=x/6*Math.PI*2,m=[];for(let b=0;b<=8;b++){const y=b/8,T=.85+y*1.85,E=3.12-y*y*2.35;m.push(new L(Math.sin(p)*T,E,Math.cos(p)*T))}const v=new Aa(m);t.add(new eu(v,8,.055,5,!1),e,0,0,0)}t.pop();for(const x of[16,9,1])for(const p of[-1,1])t.cyl(i.iron,.09,.11,7.5,6,p*6,3.75,x,{solid:!0}),t.box(i.iron,2,.08,.08,p*6+p*.9,7.2,x),t.add(new Ee(1.6,3.4),i.banner,p*6+p*.9,5.4,x,{ry:Math.PI/2}),t.sphere(n,.14,p*6,7.6,x);for(const x of[-14,-4,6,14])for(const p of[-1,1])t.add(new Ee(2.6,5.4),i.banner,p*(ve-.04),6.2,x,{ry:-p*Math.PI/2});for(const x of[-1,1])t.add(new Ee(2.4,5),i.banner,x*5.5,8.5,ve-1.55,{ry:Math.PI});for(const x of[-1,1])t.add(new Ee(1.8,4.2),i.banner,x*5.6,6.8,-2.95);for(const[x,p]of[[-18,17],[-16.8,17.6],[-17.5,15.8],[18,-2],[17.2,-3.2]])t.cyl(d,.5,.45,1.1,10,x,.65,p,{solid:!0}),t.cyl(i.iron,.52,.52,.06,10,x,.95,p),t.cyl(i.iron,.47,.47,.06,10,x,.3,p);for(const[x,p,m]of[[18,16,1.2],[16.6,16.5,.9],[18.1,14.6,.8]])t.box(d,m,m,m,x,.1+m/2,p,{solid:!0});for(const[x,p]of[[-12,12],[12,12],[-14,-1],[14,2]])t.cyl(i.tower,1.1,1.2,.9,8,x,.55,p,{solid:!0}),t.cyl(c,.14,.18,1.6,6,x,1.6,p),t.sphere(h,1.2,x,2.9,p,{sy:.85}),t.sphere(h,.8,x+.5,3.5,p-.3);t.boxMin(a,-8.4,-.3,-18.8,16.8,.48,14.6,{solid:!0}),t.boxMin(l,-8.42,.15,-18.8,.05,10.8,14.6),t.boxMin(l,8.37,.15,-18.8,.05,10.8,14.6),t.boxMin(l,-8.4,.15,-18.82,16.8,10.8,.05);for(const x of[-6,-9.5,-13,-16.5])t.box(c,16.8,.6,.5,0,10.6,x);t.box(c,.5,.6,14.6,0,10.6,-11.5),t.add(new Ee(2.6,10.4),u,0,.19,-9.6,{rx:-Math.PI/2}),t.boxMin(c,-6,.1,-18.8,12,.55,3.3,{solid:!0}),t.boxMin(c,-3,.1,-15.5,6,.3,.7,{solid:!0}),t.add(new Ee(3,3),u,0,.66,-17,{rx:-Math.PI/2}),t.push(0,.65,-17.6),t.box(n,2.3,.4,1.7,0,.2,0,{solid:!0}),t.box(s,1.6,.35,1.25,0,.58,.05),t.box(s,1.7,3.4,.35,0,2.2,-.62),t.box(n,2.05,.2,.45,0,3.95,-.62);for(const x of[-1,1])t.box(n,.18,3.6,.45,x*.95,2.2,-.62),t.box(n,.25,.8,1.3,x*.92,.9,.05),t.sphere(n,.18,x*.95,4.2,-.62);t.cone(n,.35,.7,5,0,4.4,-.62),t.solidBox(-1.15,0,-.9,1.15,4.6,.9),t.pop(),t.add(new Ee(3.6,7.2),i.banner,0,6.4,-18.74);for(const x of[-1,1])t.add(new Ee(1.8,4.2),i.banner,x*8.33,6.6,-8.5,{ry:-x*Math.PI/2}),t.add(new Ee(1.8,4.2),i.banner,x*8.33,6.6,-12.5,{ry:-x*Math.PI/2});for(const x of[-6.8,-10.4,-14])for(const p of[-1,1]){const m=p*4.3;t.box(i.tower,1.4,.45,1.4,m,.4,x,{solid:!0}),t.cyl(l,.5,.56,9.8,12,m,5.4,x,{solid:!0}),t.box(i.tower,1.4,.5,1.4,m,10.3,x),t.box(i.iron,.12,.12,.5,m-p*.7,3.1,x,{ry:Math.PI/2}),t.cyl(c,.07,.05,.7,6,m-p*.85,3.4,x),t.cone(o,.13,.42,6,m-p*.85,3.95,x),t.sphere(r,.55,m-p*.85,3.95,x,{ws:8,hs:6})}for(const x of[-5,-16.6])for(const p of[-1,1]){const m=p*8.15;t.cyl(c,.07,.05,.7,6,m,3.4,x),t.cone(o,.13,.42,6,m,3.95,x),t.sphere(r,.55,m-p*.1,3.95,x,{ws:8,hs:6})}for(const x of[-1,1]){const p=x*6.75;t.box(c,1.3,.14,7.6,p,.98,-10.2);for(const m of[-6.8,-13.6])for(const v of[-.45,.45])t.box(c,.14,.85,.14,p+v,.55,m);t.solidBox(p-.65,.1,-14,p+.65,1.05,-6.4),t.box(c,.45,.1,7.2,p-x*1.05,.55,-10.2),t.solidBox(p-x*1.05-.22,.1,-13.8,p-x*1.05+.22,.6,-6.6);for(let m=0;m<5;m++){const v=-7.2-m*1.6;t.cyl(n,.22,.22,.03,10,p,1.07,v),t.cyl(n,.06,.04,.22,6,p+x*.35,1.16,v+.3),m%2===0&&t.sphere(d,.16,p,1.15,v,{sy:.6})}}const f=Tt("#f4ecd8",{glow:.3});for(const x of[-8.2,-13.2]){t.add(new bi(1.4,.07,6,18),i.iron,0,7.6,x,{rx:Math.PI/2}),t.cyl(i.iron,.04,.04,3,4,0,9.1,x);for(let p=0;p<8;p++){const m=p/8*Math.PI*2;t.cyl(f,.05,.05,.25,5,Math.sin(m)*1.4,7.78,x+Math.cos(m)*1.4),t.cone(o,.05,.16,5,Math.sin(m)*1.4,8,x+Math.cos(m)*1.4)}}const g=t.build("castleNear",{castShadow:!1,receiveShadow:!1});return g.traverse(x=>{const p=x;p.isMesh&&p.material===r&&(p.renderOrder=5)}),{group:g,colliders:t.colliders}}function QM(){const i=new Kt;i.name="castleLandmark";const t=Ba();i.position.set($t.x,t,$t.z);const e=ZM();i.userData.mats=e;const n=JM(e);i.add(n.group),xo("castle",{x:$t.x,y:t,z:$t.z},0,n.colliders);const s=e1(e,t);i.add(s),i.updateMatrixWorld(!0);const o=new Kt;o.add(n.group.clone(),s.clone());const r=Ff(o,"castleFar",a=>on(a));return r.visible=!1,i.add(r),i.userData.ext=n.group,i.userData.approach=s,i}const t1=250;function e1(i,t){const e=new Kt;e.name="castleApproach";const n=new Ji,s=2.6,o=[],r=[],a=[],l=38,c=104,u=2;let h=0;for(let y=l;y<=c;y+=u,h++){const T=Math.sin(y*.06)*1.6*Zo.smoothstep(y,44,70);for(const E of[-1,0,1]){const A=T+E*s,S=se($t.x+A,$t.z+y)-t+.07;o.push(A,S,y),r.push((E+1)*s*.33,y*.33)}if(h>0){const E=(h-1)*3,A=h*3;a.push(E,A,E+1,E+1,A,A+1,E+1,A+1,E+2,E+2,A+1,A+2)}}const d=new Se;d.setAttribute("position",new Vt(o,3)),d.setAttribute("uv",new Vt(r,2)),d.setIndex(a),d.computeVertexNormals();const f=on(Tt("#c8b89c",{map:su(),rough:.95})),g=new ht(d,f);g.receiveShadow=!0,g.name="castleRoad",e.add(g);const x=on(Tt("#ffe0a0",{emissive:"#ffb050",ei:1,rough:.2})),p=on(Tt("#4f8a34",{rough:.95}));for(let y=44;y<=100;y+=11){const T=Math.sin(y*.06)*1.6*Zo.smoothstep(y,44,70);for(const E of[-1,1]){const A=T+E*(s+.9),S=Fn($t.x+A,$t.z+y,.4).min-t;n.cyl(i.iron,.07,.1,3,6,A,S+1.5,y),n.box(i.iron,.5,.06,.06,A-E*.2,S+2.95,y),n.cyl(x,.12,.12,.32,8,A-E*.4,S+2.72,y),n.cyl(i.iron,.03,.16,.12,8,A-E*.4,S+2.94,y);const w=y+5,M=T+E*(s+1.4),R=Fn($t.x+M,$t.z+w,.9).min-t;n.sphere(p,.9,M,R+.35,w,{sy:.7,ws:10,hs:6})}}e.add(n.build("castleApproachParts"));const m=[];for(let y=0;y<40;y++){const T=y/40*Math.PI*2+Math.sin(y*7.3)*.06;if(Math.abs(Math.atan2(Math.sin(T),Math.cos(T))-Math.PI/2)<.32)continue;const E=45+y*37%17,A=Math.cos(T)*E,S=Math.sin(T)*E,w=Fn($t.x+A,$t.z+S,.9);if(w.max-w.min>1.4)continue;const M=1+y*13%7*.12;m.push(new Ft().compose(new L(A,w.min-t-.04,S),new _n().setFromEuler(new en(0,y*1.7,0)),new L(M*.95,M,M*.95)))}const v=on(new ee({vertexColors:!0,roughness:.9,color:"#ffffff"})),b=new kn(zf("forest"),v,m.length);return m.forEach((y,T)=>b.setMatrixAt(T,y)),b.instanceMatrix.needsUpdate=!0,b.computeBoundingSphere(),b.castShadow=!1,b.name="castlePines",e.add(b),e}function n1(i,t,e,n){const s=Math.hypot(t-$t.x,e-$t.z);let o=i.getObjectByName("castleNear");if(!o&&s<150){const l=KM(i.userData.mats);i.add(l.group),o=l.group,xo("castleNear",{x:i.position.x,y:i.position.y,z:i.position.z},0,l.colliders)}const r=s<110;o&&(o.visible=r);const a=s>t1;if(i.userData.farOn!==a){i.userData.farOn=a;const l=i.getObjectByName("castleFar");l&&(l.visible=a),i.userData.ext&&(i.userData.ext.visible=!a),i.userData.approach&&(i.userData.approach.visible=!a)}if(n){const c=Math.hypot(t-$t.x,e-($t.z+nd.z))<26;n.position.set($t.x,i.position.y+6.5,$t.z+nd.z),n.intensity=c?60:0,n.distance=28,n.decay=1.4}return r}function i1(i=16){const t=Bn,e=Math.ceil(2*t/i),n=[],s=[],o=[],r=new _t("#3f86b8"),a=i*.55;for(let d=0;d<=e;d++)for(let f=0;f<=e;f++){const g=-t+f*i,x=-t+d*i;let p=se(g,x);const m=p;for(const[E,A]of[[a,0],[-a,0],[0,a],[0,-a],[a,a],[-a,-a],[a,-a],[-a,a]])p=Math.min(p,se(g+E,x+A));const b=Math.hypot(g,x)<44?3:.9;p=Math.min(p,18),n.push(g,p-b,x);const y=ln(g,x),T=pa(y.primary);y.secondary&&y.blend>.05&&T.lerp(pa(y.secondary),y.blend),Of(g,x,T),(y.primary==="lake"||y.secondary==="lake")&&m<-.1&&T.copy(r),T.multiplyScalar(.74),s.push(T.r,T.g,T.b)}const l=e+1;for(let d=0;d<e;d++)for(let f=0;f<e;f++){const g=d*l+f,x=g+1,p=g+l,m=p+1;o.push(g,p,x,x,p,m)}const c=new Se;c.setAttribute("position",new Vt(n,3)),c.setAttribute("color",new Vt(s,3)),c.setIndex(o),c.computeVertexNormals(),c.computeBoundingSphere();const u=new ee({vertexColors:!0,roughness:.95,metalness:0,color:"#ffffff"}),h=new ht(c,u);return h.name="farTerrain",h.receiveShadow=!1,h.castShadow=!1,h.renderOrder=10,h.frustumCulled=!1,h}const $e={fences:[[-10.5,7,Math.PI/2],[-10.5,8.3,Math.PI/2],[-10.5,9.6,Math.PI/2],[-10.5,10.9,Math.PI/2],[-10.5,12.2,Math.PI/2],[-10.5,13.5,Math.PI/2]],crystal:[-8.5,12],dirt:[[-13,-4,2.2],[8,-20,3.5],[20,-4,2.4]],pond:[9.5,2.5],pines:[[-12,4],[-21,-1],[19,-16],[15,6]],broadleaf:[[-6,8],[5,9],[15.5,2]],bushes:[[-2,5],[3,4],[-3.6,4.7]],rocks:[[6,1],[-11,-5],[11,8]]};function he(i,t){return CM(i,t)}function s1(i,t,e,n,s){if(!n.length)return;const o=new kn(t,e,n.length);o.castShadow=s,o.receiveShadow=!0;const r=new Re;for(let a=0;a<n.length;a++){const l=n[a];r.position.set(l.x,l.y,l.z),r.rotation.set(0,l.ry??0,0),r.scale.set(l.sx??1,l.sy??1,l.sz??1),r.updateMatrix(),o.setMatrixAt(a,r.matrix)}o.instanceMatrix.needsUpdate=!0,i.add(o)}function o1(i,t){const e=i.getObjectByName("skyDome");e&&i.remove(e);const n=new Kt;n.name="terrain",i.fog=new Ta("#c5ddf2",t==="low"?.008:.0045),i.background=new _t("#a8d4f5"),i.add(vM());const s=bn(),o=Mf(128);o.repeat.set(22,22);const r=new ee({map:o,color:"#d0e8c0",roughness:Xi.grass,metalness:0,vertexColors:!0});s?.grassNormal&&(r.normalMap=s.grassNormal,r.normalScale=new rt(js.grass,js.grass));const a=new Ee(64,64,t==="low"?16:32,t==="low"?16:32),l=new Float32Array(a.attributes.position.count*3);for(let S=0;S<a.attributes.position.count;S++){const w=a.attributes.position.getX(S),M=-a.attributes.position.getY(S),R=se(w,M);a.attributes.position.setZ(S,R);const N=.9;l[S*3]=.55*N,l[S*3+1]=.78*N,l[S*3+2]=.48*N}a.setAttribute("color",new we(l,3)),a.computeVertexNormals();const c=new ht(a,r);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c.name="campGround",n.add(c);const u=bf(128);if(t!=="low")for(const[S,w,M]of $e.dirt){const R=new ht(new Gn(M,12),new ee({map:u,roughness:Xi.dirt,transparent:!0,opacity:.85,metalness:0}));R.rotation.x=-Math.PI/2,R.position.set(S,se(S,w)+.03,w),n.add(R)}const h=new ht(new Da(9.2,10,48),new ee({color:"#f0e080",side:He,transparent:!0,opacity:.75,roughness:.6,metalness:0}));h.rotation.x=-Math.PI/2,h.position.y=se(0,0)+.07,n.add(h);const d=(S,w,M)=>{let R=se(S,w);for(let N=0;N<8;N++){const U=N/8*Math.PI*2;R=Math.min(R,se(S+Math.cos(U)*M,w+Math.sin(U)*M))}return R},f=DM(d(Ce.x,Ce.z,3.5));n.add(f),n.add(FM(d(xn.x,xn.z,5))),n.add(zM(d(Hn.x,Hn.z,4.6)));const g=t==="low"?4:$e.fences.length;for(let S=0;S<g;S++){const[w,M,R]=$e.fences[S],N=xM();N.position.set(w,se(w,M),M),N.rotation.y=R,n.add(N)}const x=yM();x.position.set($e.crystal[0],se($e.crystal[0],$e.crystal[1]),$e.crystal[1]),n.add(x);{const S=[];for(let w=0;w<12;w++){const M=4+w*1.2,R=Math.sin(M*.12)*.6;S.push({x:R,y:se(R,M)+.05,z:M,ry:w*.4,sy:1})}s1(n,new de(.35,.4,.12,6),new ee({color:"#a8a8a4",map:hr(64),roughness:.9}),S,!1)}const p=MM();p.position.set($e.pond[0],se($e.pond[0],$e.pond[1]),$e.pond[1]),n.add(p);for(const[S,w]of $e.pines){const M=fM();M.position.set(S,se(S,w),w),n.add(M)}for(const[S,w]of $e.broadleaf){const M=pM();M.position.set(S,se(S,w),w),n.add(M)}for(const[S,w]of $e.bushes){const M=dM();M.position.set(S,se(S,w),w),n.add(M)}for(const[S,w,M]of[[-1,6,"#e06080"],[2,5.5,"#f0d050"],[.5,7,"#6090e0"]]){const R=gM(M);R.position.set(S,se(S,w),w),n.add(R)}for(const[S,w]of $e.rocks){const M=mM();M.position.set(S,se(S,w),w),n.add(M)}for(let S=0;S<(t==="low"?3:5);S++){const w=_M();w.position.set(-20+S*12,28+S%2*4,-30-S*5),n.add(w)}const m=new ht(new Gn(2.2,24),new ee({color:"#f0e080",transparent:!0,opacity:.4,side:He,roughness:.7,metalness:0}));m.rotation.x=-Math.PI/2,m.position.set(2.5,se(2.5,6.2)+.08,6.2),m.name="buildPad",n.add(m);const v=hM(64);v.repeat.set(4,10);const b=new ht(new Ee(2.2,18,1,6),(()=>{const S=new ee({map:v,roughness:Xi.path,color:"#e0d4b8",metalness:0});return s?.pathNormal&&(S.normalMap=s.pathNormal,S.normalScale=new rt(js.path,js.path)),S})());b.rotation.x=-Math.PI/2,b.position.set(.3,se(.3,10)+.06,10),n.add(b);const y=new ht(new de(.06,.06,3.2,6),new ee({color:"#d0a868",roughness:.7,metalness:0}));y.position.set(1.5,se(1.5,2)+1.6,2),n.add(y);const T=new ht(new Ee(1.3,.75),new ee({color:"#3a7fd4",side:He,roughness:.55,metalness:0}));T.position.set(2.15,se(2.15,2)+2.85,2),n.add(T);const E=new Set(["homeCabin","dragonStable","watchtower","pond","buildPad","campGround"]);Jh(n,S=>!E.has(S.name)&&!S.isInstancedMesh,"campProps");const A=new Set(["cabinDoor","chimneySmoke","cabin-interior","pond","buildPad","campGround","castleLandmark","farTerrain"]);Uf(n,S=>A.has(S.name)||S.isInstancedMesh===!0,"campVC");{const S=new Set(["homeCabin","dragonStable","watchtower"]),w=new Set(["cabinDoor","chimneySmoke","cabin-interior"]);Jh(n,M=>S.has(M.name),"bldMerged",{skip:M=>w.has(M.name),removeEmpty:!1})}if(t==="low"){const S=n.children.filter(R=>R.name.startsWith("campProps_")),w=new Kt;for(const R of S)w.add(R.clone());const M=Ff(w,"campPropsLow",void 0,.85);for(const R of S)n.remove(R);for(const R of[...M.children])R.receiveShadow=!0,n.add(R)}return n.add(QM()),n.add(i1(t==="low"?24:16)),n}function Hf(i,t){return o1(i,t)}class $r{constructor(t){this.shared=t}by=new Map;add(t,e,n,s=[0,0,0],o=[1,1,1]){const r=new Ft().compose(new L(...n),new _n().setFromEuler(new en(s[0],s[1],s[2])),new L(...o));this.addM(t,e,r)}addColored(t){let e=t.index?t.toNonIndexed():t.clone();for(const s of Object.keys(e.attributes))s!=="position"&&s!=="normal"&&s!=="uv"&&s!=="color"&&e.deleteAttribute(s);e.attributes.uv||e.setAttribute("uv",new Vt(new Float32Array(e.attributes.position.count*2),2));const n=this.by.get(this.shared.scaled)??[];n.push(e),this.by.set(this.shared.scaled,n)}addM(t,e,n){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))a!=="position"&&a!=="normal"&&a!=="uv"&&s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new Vt(new Float32Array(s.attributes.position.count*2),2)),s.attributes.normal||s.computeVertexNormals(),s.applyMatrix4(n),n.determinant()<0&&(s=Gf(s));let o=e;if(!this.shared.special.has(e)){const a=e,l=(a.color??new _t(1,1,1)).clone();a.map&&l.multiply(a.color).multiplyScalar(1.12);const c=s.attributes.position.count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u[h*3]=l.r,u[h*3+1]=l.g,u[h*3+2]=l.b;s.setAttribute("color",new Vt(u,3)),o=a.map?this.shared.scaled:this.shared.plain}const r=this.by.get(o)??[];r.push(s),this.by.set(o,r)}limb(t,e,n,s,o,r=8){const a=new L(...e),l=new L(...n),c=a.distanceTo(l),u=new de(o,s,c,r,1),h=new _n().setFromUnitVectors(new L(0,1,0),l.clone().sub(a).normalize()),d=new Ft().compose(a.clone().add(l).multiplyScalar(.5),h,new L(1,1,1));this.addM(u,t,d)}spike(t,e,n,s,o=6,r=1){const a=new L(...e),l=new L(...n),c=a.distanceTo(l),u=new Mn(s,c,o,1);u.scale(r,1,1);const h=new _n().setFromUnitVectors(new L(0,1,0),l.clone().sub(a).normalize()),d=new Ft().compose(a.clone().add(l).multiplyScalar(.5),h,new L(1,1,1));this.addM(u,t,d)}build(t,e){let n=0;for(const[s,o]of this.by){const r=We(o,!1);if(!r)continue;r.computeBoundingSphere();const a=new ht(r,s);a.name=`${e}_${n++}`,a.castShadow=!0,a.receiveShadow=!0,t.add(a)}}}function Gf(i){const t=i.attributes.position.array,e=i.attributes.normal?.array,n=i.attributes.uv?.array;for(let s=0;s<t.length/9;s++){for(let o=0;o<3;o++){const r=s*9+3+o,a=s*9+6+o;[t[r],t[a]]=[t[a],t[r]],e&&([e[r],e[a]]=[e[a],e[r]])}if(n){const o=s*6+2,r=s*6+4;[n[o],n[r]]=[n[r],n[o]],[n[o+1],n[r+1]]=[n[r+1],n[o+1]]}}return i}function ad(i,t,e,n,s,o=48,r=16){const a=new Aa(i.map(m=>new L(...m)),!1,"centripetal"),l=a.computeFrenetFrames(o,!1),c=[],u=[],h=[],d=[],f=s.clone().offsetHSL(0,.02,-.09),g=new L(0,1,0);for(let m=0;m<=o;m++){const v=m/o,b=v*(t.length-1),y=Math.min(t.length-2,Math.floor(b)),T=b-y,E=T*T*(3-2*T),A=t[y]+(t[y+1]-t[y])*E,S=e[y]+(e[y+1]-e[y])*E,w=a.getPointAt(v),M=a.getTangentAt(v),R=new L().crossVectors(M,g);R.lengthSq()<1e-4&&R.copy(l.binormals[m]),R.normalize();const N=new L().crossVectors(R,M).normalize();for(let U=0;U<=r;U++){const F=U/r*Math.PI*2,Y=Math.cos(F),B=Math.sin(F),K=w.clone().addScaledVector(R,Y*A).addScaledVector(N,B*A*S);c.push(K.x,K.y,K.z);const X=Zo.smoothstep(-B,.3,.6),st=Math.sin(v*o*.9)>0?s:f,q=n.clone().lerp(st,X);q.multiplyScalar(1-Zo.smoothstep(B,.75,1)*.12),u.push(q.r,q.g,q.b),h.push(U/r*2,v*6)}}const x=r+1;for(let m=0;m<o;m++)for(let v=0;v<r;v++){const b=m*x+v,y=b+x;d.push(b,b+1,y,b+1,y+1,y)}const p=new Se;return p.setAttribute("position",new Vt(c,3)),p.setAttribute("color",new Vt(u,3)),p.setAttribute("uv",new Vt(h,2)),p.setIndex(d),p.computeVertexNormals(),p}function r1(i,t){const e=[],n=[];let s=1/0,o=-1/0,r=1/0,a=-1/0;for(const h of i)s=Math.min(s,h[0]),o=Math.max(o,h[0]),r=Math.min(r,h[2]),a=Math.max(a,h[2]);const l=i[t],c=i.length;for(let h=1;h<c-1;h++){const d=i[(t+h)%c],f=i[(t+h+1)%c];for(const g of[l,d,f])e.push(g[0],g[1],g[2]),n.push((g[0]-s)/(o-s),(g[2]-r)/(a-r))}const u=new Se;return u.setAttribute("position",new Vt(e,3)),u.setAttribute("uv",new Vt(n,2)),u.computeVertexNormals(),u}function dn(i,t={}){return new ee({color:i,roughness:.7,metalness:.04,...t})}const a1=1.45;function l1(i){const t=Iv[i],e=new Kt;e.name=`dragon_${i}`,e.userData.palette=i,e.scale.setScalar(a1);const n=bn(),s=new _t(t.body),o=new _t(t.belly),r=new _t(t.wing),a=new ee({color:"#ffffff",vertexColors:!0,map:Ll("#ffffff",64),normalMap:n?.scalesNormal??null,normalScale:new rt(.5,.5),roughness:Xi.scales,metalness:.05}),l=dn(t.body,{map:Ll(t.body,64),roughness:.62}),c=dn(t.belly,{roughness:.72}),u=dn(r.clone().offsetHSL(0,.05,-.04),{roughness:.45}),h=dn("#efe2c4",{roughness:.38}),d=dn("#7a6a58",{roughness:.4}),f=dn("#3e3430",{roughness:.35}),g=dn("#fffbf0",{roughness:.2}),x=dn(r.clone().offsetHSL(.45,.4,.15),{roughness:.15,emissive:r.clone().offsetHSL(.45,.4,.1),emissiveIntensity:.25}),p=dn("#14141c",{roughness:.1}),m=dn("#ffffff",{emissive:"#ffffff",emissiveIntensity:.9,roughness:0}),v=dn("#5a2030",{roughness:.6}),b=dn("#fffaf0",{roughness:.3}),y=dn(s.clone().offsetHSL(0,0,-.05),{map:Ll(t.body,64),roughness:.6}),T=new ee({color:t.wing,map:n?.wing??null,side:He,transparent:!0,opacity:.9,alphaTest:n?.wing?.05:0,roughness:.5,metalness:0,emissive:t.wing,emissiveIntensity:.18}),E=new ee({color:"#ffffff",vertexColors:!0,roughness:.45,metalness:.05}),A={scaled:a,plain:E,special:new Set([T])},S=new Kt;S.name="dBody",e.add(S);const M=ad([[0,.62,-.62],[0,.72,-.34],[0,.8,-.02],[0,.86,.26],[0,1.06,.62],[0,1.18,1.02],[0,1.08,1.4]],[.24,.33,.36,.34,.2,.14,.12],[.95,1,1.05,1.1,1.05,1,1],s,o,40,18),R=new $r(A);R.addColored(M),R.add(new Bt(.25,16,12),l,[0,.62,-.62],[0,0,0],[1,.95,1]);for(const q of[-1,1])R.add(new Bt(.2,14,10),l,[q*.22,.58,-.5],[0,0,0],[.75,1.1,1.25]),R.add(new Bt(.14,12,10),l,[q*.24,.72,.24],[0,0,0],[.7,1.1,1]);const N=[[[0,1.2,1.3],.08],[[0,1.32,.96],.1],[[0,1.22,.58],.12],[[0,1.1,.26],.15],[[0,1.13,.06],.17],[[0,1.12,-.16],.17],[[0,1.06,-.38],.15],[[0,.92,-.58],.12]];for(const[q,nt]of N)R.spike(u,q,[q[0],q[1]+nt,q[2]-nt*.55],.05,4,.45);for(const q of[-1,1]){R.limb(l,[q*.27,.58,-.5],[q*.3,.3,-.36],.17,.11,12),R.add(new Bt(.11,10,8),l,[q*.3,.3,-.36]),R.limb(l,[q*.3,.3,-.36],[q*.3,.07,-.46],.1,.075,10),R.add(new Bt(.1,10,8),l,[q*.3,.07,-.39],[0,0,0],[1.05,.6,1.6]),R.limb(l,[q*.26,.72,.22],[q*.28,.38,.3],.12,.085,10),R.add(new Bt(.085,10,8),l,[q*.28,.38,.3]),R.limb(l,[q*.28,.38,.3],[q*.28,.06,.32],.08,.065,10),R.add(new Bt(.085,10,8),l,[q*.28,.06,.37],[0,0,0],[1.05,.6,1.5]);for(let nt=-1;nt<=1;nt++)R.spike(f,[q*.3+nt*.05,.05,-.27],[q*.3+nt*.06,.01,-.19],.022,5),R.spike(f,[q*.28+nt*.045,.05,.48],[q*.28+nt*.05,.01,.55],.02,5)}R.build(S,"dBodyParts");const U=new Kt;U.name="head",U.position.set(0,1.08,1.4),S.add(U);const F=new $r(A);F.add(new Bt(.19,18,14),l,[0,.08,.02],[0,0,0],[1.05,.92,1.12]),F.add(new de(.1,.15,.36,14),l,[0,.03,.26],[Math.PI/2-.12,0,0],[1,1,.72]),F.add(new Bt(.11,14,10),l,[0,.05,.44],[0,0,0],[.95,.7,.75]),F.add(new de(.08,.12,.32,12),c,[0,-.07,.24],[Math.PI/2+.05,0,0],[1,1,.42]),F.add(new Ge(.17,.012,.3),v,[0,-.035,.26]);for(const q of[-1,1]){F.add(new Bt(.022,8,6),v,[q*.045,.08,.53]);for(let G=0;G<3;G++)F.spike(b,[q*(.07-G*.004),-.025,.36-G*.07],[q*(.07-G*.004),-.07,.36-G*.07],.012,4);F.add(new Bt(.068,14,10),g,[q*.11,.12,.13],[0,0,0],[.8,1,.9]),F.add(new Bt(.045,12,8),x,[q*.145,.12,.165],[0,0,0],[.6,1,.8]),F.add(new Bt(.013,6,6),m,[q*.168,.145,.19]),F.add(new Bt(.06,10,6),l,[q*.1,.19,.12],[0,q*.3,q*-.35],[1.3,.45,.8]);let nt=[q*.09,.2,-.02];const wt=[[q*.03,.1,-.08],[q*.035,.07,-.11],[q*.03,.02,-.12],[q*.02,-.02,-.1]],zt=[.045,.036,.027,.018];wt.forEach((G,Q)=>{const ct=[nt[0]+G[0],nt[1]+G[1],nt[2]+G[2]];Q<3?F.limb(h,nt,ct,zt[Q],zt[Q+1],8):F.spike(d,nt,ct,zt[Q],8),Q<3&&F.add(new bi(zt[Q+1]*1.05,.006,4,10),d,ct,[Math.atan2(G[2],G[1])+Math.PI/2,0,0]),nt=ct}),F.spike(h,[q*.15,.13,-.04],[q*.22,.17,-.16],.025,6);for(let G=0;G<3;G++)F.spike(u,[q*.14,.02-G*.04,-.02],[q*(.24+G*.01),.04-G*.07,-.15+G*.01],.03,4,.4);F.spike(u,[q*.16,.18,-.06],[q*.3,.26,-.14],.05,4,.3)}F.build(U,"dHeadParts");{const q=[];for(const wt of[-1,1]){const zt=new Bt(.022,8,8);zt.scale(.55,1,.6),zt.translate(wt*.16,0,.185),q.push(zt)}const nt=new ht(We(q,!1),p);nt.position.y=.12,nt.scale.y=1.25,nt.name="pupils",U.add(nt)}for(const q of[-1,1]){const nt=new Kt;nt.name=q<0?"wingL":"wingR",nt.position.set(q*.22,1.02,.08);const wt=new Kt;wt.rotation.set(0,q*1.05,q*.32),wt.scale.set(q,1,1),nt.add(wt);const zt=new $r(A),G=[0,0,0],Q=[.52,.2,-.04],ct=[.98,.32,.04],it=[[1.62,.12,-.24],[1.5,-.04,-.62],[1.2,-.12,-.92],[.78,-.14,-1.02]],Ct=[.06,-.12,-.72];zt.limb(y,G,Q,.06,.045,8),zt.limb(y,Q,ct,.045,.035,8),zt.add(new Bt(.05,8,6),y,Q),zt.add(new Bt(.042,8,6),y,ct),zt.spike(f,ct,[ct[0]+.04,ct[1]+.1,ct[2]+.08],.022,5),it.forEach((qt,J)=>zt.limb(y,ct,qt,.028-J*.003,.008,6));const Dt=(qt,J,at,D)=>[(qt[0]+J[0])/2+(at[0]-(qt[0]+J[0])/2)*D,(qt[1]+J[1])/2+(at[1]-(qt[1]+J[1])/2)*D,(qt[2]+J[2])/2+(at[2]-(qt[2]+J[2])/2)*D],kt=[G,Q,ct,it[0],Dt(it[0],it[1],ct,.22),it[1],Dt(it[1],it[2],ct,.24),it[2],Dt(it[2],it[3],ct,.24),it[3],Dt(it[3],Ct,ct,.2),Ct];zt.add(r1(kt,2),T,[0,0,0]),zt.build(wt,"dWingParts"),S.add(nt)}const Y=new Kt;Y.name="tail",Y.position.set(0,.62,-.62),S.add(Y);const B=[[0,0,.05],[0,-.06,-.35],[.06,-.18,-.75],[.16,-.3,-1.12],[.22,-.38,-1.48],[.2,-.42,-1.8]],K=new $r(A);K.addColored(ad(B,[.24,.18,.12,.08,.05,.025],[.95,.95,.95,.95,.9,.8],s,o,36,12));const X=new Aa(B.map(q=>new L(...q)),!1,"centripetal");for(let q=0;q<7;q++){const nt=.06+q*.12,wt=X.getPointAt(nt),zt=.22*(1-nt)+.03,G=.12*(1-nt*.7);K.spike(u,[wt.x,wt.y+zt*.8,wt.z],[wt.x,wt.y+zt*.8+G,wt.z-G*.6],.04*(1-nt*.5),4,.45)}const st=X.getPointAt(1);for(const q of[-1,1])K.spike(u,[st.x,st.y,st.z+.05],[st.x+q*.17,st.y+.02,st.z-.12],.07,4,.25);K.spike(u,[st.x,st.y,st.z+.04],[st.x,st.y,st.z-.24],.09,4,.22),K.build(Y,"dTailParts");{e.updateMatrixWorld(!0);const q=new Ft().copy(e.matrixWorld).invert(),nt=new Map;S.traverse(G=>{const Q=G;if(!Q.isMesh||Array.isArray(Q.material))return;const ct=Q.geometry.index?Q.geometry.toNonIndexed():Q.geometry.clone(),it=new Ft().multiplyMatrices(q,Q.matrixWorld);ct.applyMatrix4(it);const Ct=it.determinant()<0?Gf(ct):ct,Dt=nt.get(Q.material)??[];Dt.push(Ct),nt.set(Q.material,Dt)});const wt=new Kt;wt.name="dLod",wt.visible=!1;let zt=0;for(const[G,Q]of nt){const ct=Object.keys(Q[0].attributes),it=Q.filter(kt=>Object.keys(kt.attributes).length===ct.length&&ct.every(qt=>!!kt.attributes[qt])),Ct=We(it,!1);if(!Ct)continue;Ct.computeBoundingSphere();const Dt=new ht(Ct,G);Dt.name=`dLod_${zt++}`,Dt.castShadow=!0,Dt.receiveShadow=!0,wt.add(Dt)}e.add(wt)}return e}function c1(i,t,e){const n=i.userData.animPhase??(i.userData.animPhase=Math.random()*10),s=t+n,o=e==="fly",r=e==="glide",a=o?.75:r?.08:e==="walk"?.12:.07,l=o?9:e==="walk"?5:1.6,c=o||r?.55:e==="walk"?.28:0;for(const[x,p]of[["wingL",-1],["wingR",1]]){const m=i.getObjectByName(x);if(!m)continue;const v=e==="idle"?Math.max(0,Math.sin(s*.7))**6*.45:0;m.rotation.z=p*(c+v-Math.sin(s*l)*a),m.rotation.y=p*(o||r?-.85:-v*.9)}const u=i.getObjectByName("tail");u&&(u.rotation.y=Math.sin(s*1.3)*(o?.3:.24),u.rotation.x=Math.sin(s*.9)*.06+(o||r?.25:0),u.rotation.z=Math.sin(s*1.3+.6)*.05);const h=i.getObjectByName("head");h&&(e==="walk"||e==="fly"||e==="glide"?(h.rotation.y=Math.sin(s*.35)*.05,h.rotation.x=-.16+Math.sin(s*1.1)*.03,h.rotation.z=Math.sin(s*.31)*.03):(h.rotation.y=Math.sin(s*.45)*.35+Math.sin(s*1.3)*.05,h.rotation.x=-.05+Math.sin(s*.8)*.07,h.rotation.z=Math.sin(s*.31)*.12));const d=i.getObjectByName("dBody");d&&(d.position.y=e==="idle"?Math.sin(s*2)*.012:0,d.scale.set(1+Math.sin(s*2)*.012,1,1));const f=Math.sin(s*.9)>.965?.12:1,g=i.getObjectByName("pupils");g&&(g.scale.y=1.25*f)}const ld=new Map;function fn(i,t){let e=ld.get(i);return e||(e=t(),ld.set(i,e)),e}function pn(i,t){return new ee({color:i,map:t?.map,roughness:t?.roughness??.75,metalness:.05})}function u1(){const i=new Kt;i.name="fieldMonster",i.scale.setScalar(1.15);const t=new ht(fn("mBody4",()=>new Bt(.48,16,12)),pn("#7b6aa8"));t.scale.set(1.05,1.25,.95),t.position.y=.78,t.name="mBody",i.add(t);const e=new ht(fn("mBelly4",()=>new Bt(.28,12,10)),pn("#c8b8e0"));e.scale.set(.9,1,.45),e.position.set(0,.7,.32),i.add(e);const n=new ht(fn("mHead4",()=>new Bt(.32,14,12)),pn("#8a78b8"));n.position.set(0,1.35,.08),i.add(n);for(const r of[-1,1]){const a=new ht(fn("mEar4",()=>new Mn(.1,.28,6)),pn("#e09060"));a.position.set(r*.22,1.58,0),a.rotation.z=r*.45,i.add(a)}for(const r of[-1,1]){const a=new ht(fn("mEye4",()=>new Bt(.1,10,8)),pn("#fff8f0"));a.position.set(r*.12,1.4,.26),i.add(a);const l=new ht(fn("mPup4",()=>new Bt(.045,8,6)),pn("#2a2038"));l.position.set(r*.12,1.4,.34),l.name="pupil",i.add(l);const c=new ht(fn("mHl4",()=>new Bt(.02,6,6)),pn("#ffffff"));c.position.set(r*.1,1.43,.37),i.add(c)}const s=new ht(fn("mSmile",()=>new bi(.1,.018,6,10,Math.PI)),pn("#4a3058"));s.position.set(0,1.22,.32),s.rotation.x=Math.PI,i.add(s);for(const r of[-1,1]){const a=new ht(fn("mArm4",()=>new ha(.07,.22,4,8)),pn("#7b6aa8"));a.position.set(r*.42,.85,.05),a.rotation.z=r*.6,a.name=r<0?"mArmL":"mArmR",i.add(a)}for(const r of[-1,1]){const a=new ht(fn("mLeg4",()=>new ha(.08,.18,4,8)),pn("#5a4a78"));a.position.set(r*.16,.28,.02),i.add(a);const l=new ht(fn("mFoot4",()=>new Bt(.11,8,6)),pn("#e09060"));l.scale.set(1.1,.55,1.3),l.position.set(r*.16,.08,.06),i.add(l)}const o=new ht(fn("mTail4",()=>new Bt(.1,8,6)),pn("#8a78b8"));o.position.set(0,.55,-.42),i.add(o);{const r=new Set(["mBody","mArmL","mArmR"]),a=[];for(const c of[...i.children]){const u=c;if(!u.isMesh||r.has(u.name))continue;u.updateMatrix();const h=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const x of Object.keys(h.attributes))x!=="position"&&x!=="normal"&&h.deleteAttribute(x);h.applyMatrix4(u.matrix);const d=u.material.color??new _t(1,1,1),f=h.attributes.position.count,g=new Float32Array(f*3);for(let x=0;x<f;x++)g[x*3]=d.r,g[x*3+1]=d.g,g[x*3+2]=d.b;h.setAttribute("color",new Vt(g,3)),a.push(h),i.remove(u)}const l=We(a,!1);if(l){l.computeBoundingSphere();const c=new ht(l,cd());c.name="mStatic",i.add(c);const u=[l.clone()];for(const d of["mBody","mArmL","mArmR"]){const f=i.getObjectByName(d);if(!f)continue;f.updateMatrix();const g=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();for(const v of Object.keys(g.attributes))v!=="position"&&v!=="normal"&&g.deleteAttribute(v);g.applyMatrix4(f.matrix);const x=f.material.color,p=g.attributes.position.count,m=new Float32Array(p*3);for(let v=0;v<p;v++)m[v*3]=x.r,m[v*3+1]=x.g,m[v*3+2]=x.b;g.setAttribute("color",new Vt(m,3)),u.push(g)}const h=We(u,!1);if(h){h.computeBoundingSphere();const d=new ht(h,cd());d.name="mLod",d.visible=!1,i.add(d)}}}return i.traverse(r=>{const a=r;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),i}let h1=null;function cd(){return h1??=new ee({color:"#ffffff",vertexColors:!0,roughness:.7,metalness:0})}function d1(i){return l1(i)}function ud(i,t,e){c1(i,t,e)}function f1(i,t,e){const n=i.getObjectByName("mBody");n&&(n.position.y=.72+Math.sin(t*2.4)*(e==="hurt"?.02:.04),e==="hurt"&&(n.rotation.z=Math.sin(t*20)*.08));const s=i.getObjectByName("mArmL"),o=i.getObjectByName("mArmR");e==="attack"?(s&&(s.rotation.x=-Math.sin(t*8)*.9),o&&(o.rotation.x=Math.sin(t*8)*.9)):(s&&(s.rotation.z=Math.sin(t*1.5)*.15),o&&(o.rotation.z=-Math.sin(t*1.5)*.15))}function Vf(i){const t=i==="wood"?Oa(64):hr(64),e=i==="wood"?"#8b5a2b":"#7a7f88",n=new ht(fn("block",()=>new Ge(1,1,1)),pn(e,{map:t,roughness:i==="stone"?.9:.7}));return n.castShadow=!0,n.receiveShadow=!0,n}function sn(i,t={}){return new ee({color:i,roughness:t.rough??.7,metalness:t.metal??.05,emissive:t.emissive??"#000000",emissiveIntensity:t.ei??0})}function Co(){const i=new Kt;return i.position.set(.35,-.38,-.55),i.rotation.set(.15,.35,-.25),i}function Ro(i,t="#f0c9a8",e="#3a7fd4"){const n=new ht(new de(.045,.055,.28,8),sn(t));n.rotation.x=Math.PI/2.2,n.position.set(0,.02,.16),i.add(n);const s=new ht(new de(.058,.06,.055,10),sn(e));s.rotation.x=Math.PI/2.2,s.position.set(0,.02,.28),i.add(s);const o=new ht(new Ge(.12,.08,.16),sn(t));o.position.set(.02,0,0),i.add(o)}function p1(i="#f0c9a8",t="#3a7fd4"){const e=new Kt;e.name="fpTools";const n=new Kt;n.name="sword";{const u=Co();Ro(u,i,t);const h=new ht(new de(.02,.022,.1,6),sn("#3a3028"));h.rotation.x=.4,h.position.set(.03,.02,-.12),u.add(h);const d=new ht(new Ge(.16,.028,.028),sn("#4a5058",{metal:.4}));d.position.set(.03,.06,-.16),d.rotation.x=.4,u.add(d);const f=new ht(new Ge(.035,.02,.55),sn("#9aa3ad",{rough:.35,metal:.45}));f.position.set(.03,.1,-.42),f.rotation.x=.35,u.add(f),n.add(u)}const s=new Kt;s.name="axe";{const u=Co();Ro(u,i,t);const h=new ht(new de(.018,.022,.55,6),sn("#6a3a1c"));h.rotation.x=.45,h.position.set(.03,.08,-.28),u.add(h);const d=new ht(new Ge(.18,.12,.05),sn("#8a9098",{metal:.55,rough:.35}));d.position.set(.08,.22,-.48),d.rotation.x=.45,u.add(d),s.add(u)}const o=new Kt;o.name="pickaxe";{const u=Co();Ro(u,i,t);const h=new ht(new de(.016,.02,.52,6),sn("#5a3820"));h.rotation.x=.45,h.position.set(.03,.08,-.26),u.add(h);const d=new ht(new Ge(.28,.05,.045),sn("#6a7078",{metal:.6,rough:.32}));d.position.set(.03,.22,-.46),d.rotation.x=.45,d.rotation.z=.15,u.add(d),o.add(u)}const r=new Kt;r.name="water_bucket";{const u=Co();Ro(u,i,t);const h=new ht(new de(.09,.07,.14,10),sn("#6a6e78",{metal:.35,rough:.45}));h.position.set(.04,-.08,-.12),u.add(h);const d=new ht(new bi(.07,.008,6,10,Math.PI),sn("#4a4e56",{metal:.5}));d.rotation.x=Math.PI,d.position.set(.04,0,-.12),u.add(d),r.add(u)}const a=r.clone();a.name="water_bucket_full";const l=new ht(new de(.08,.065,.03,10),sn("#3aa0d0",{rough:.2,metal:.15,emissive:"#1a5080",ei:.2}));l.position.set(.04,-.02,-.12),a.children[0]?.add(l);const c=new Kt;c.name="torch";{const u=Co();Ro(u,i,t);const h=new ht(new de(.018,.022,.38,6),sn("#6a4020"));h.rotation.x=.5,h.position.set(.03,.08,-.22),u.add(h);const d=new ht(new Mn(.045,.12,6),new Xn({color:"#ff8a2a"}));d.name="torchFlame",d.position.set(.03,.26,-.38),u.add(d),c.add(u)}e.add(n,s,o,r,a,c);for(const u of e.children)Uf(u,()=>!1,"fpToolVC");return Wf(e,"sword"),e}function Wf(i,t){const e=t==="water"?"water_bucket_full":t;let n=!1;for(const s of i.children){s.name===e||e==="water_bucket_full"&&s.name;const o=["sword","axe","pickaxe","water_bucket","water_bucket_full","torch"].includes(s.name);s.visible=o?s.name===e:!1,s.visible&&(n=!0)}if(!n){const s=i.getObjectByName("sword");s&&(s.visible=!0)}}class m1{bursts=[];root;budget;constructor(t,e=100){this.root=new Kt,this.root.name="fx",t.add(this.root),this.budget=e}setBudget(t){this.budget=t}spawn(t,e,n,s,o,r,a=.5){e=Math.min(e,Math.max(4,Math.floor(this.budget/4)));const l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e);for(let g=0;g<e;g++){l[g*3]=t.x,l[g*3+1]=t.y,l[g*3+2]=t.z;const x=Math.random()*Math.PI*2,p=s*(.4+Math.random());c[g*3]=Math.cos(x)*p,c[g*3+1]=a*p+Math.random()*p,c[g*3+2]=Math.sin(x)*p,u[g]=o*(.6+Math.random()*.4)}const h=new Se;h.setAttribute("position",new we(l,3));const d=new ca({color:n,size:r,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!0}),f=new Ec(h,d);if(this.root.add(f),this.bursts.push({points:f,vel:c,life:u,maxLife:o,alive:!0}),this.bursts.length>24){const g=this.bursts.shift();g&&this.disposeBurst(g)}}disposeBurst(t){this.root.remove(t.points),t.points.geometry.dispose(),t.points.material.dispose(),t.alive=!1}hitSparks(t){this.spawn(t,14,16765056,4,.45,.12,.8)}tamingHearts(t){this.spawn(t.clone().add(new L(0,.8,0)),10,16738984,1.2,.9,.18,1.4)}fireBreath(t,e){const n=t.clone().add(e.clone().multiplyScalar(.6));this.spawn(n,16,16736288,3.5,.5,.14,.2)}cone=null;coneLight=null;coneDir=new L;coneOn=!1;setFireCone(t,e,n){if(this.coneOn=t,n&&this.coneDir.copy(n).normalize(),!this.cone){const s=Math.min(72,Math.max(28,this.budget)),o=new Float32Array(s*3),r=new Float32Array(s*3),a=new Se;a.setAttribute("position",new we(o,3)),a.setAttribute("color",new we(r,3));const l=new ca({vertexColors:!0,size:.62,transparent:!0,opacity:.95,depthWrite:!1,sizeAttenuation:!0,blending:Yo});this.cone=new Ec(a,l),this.cone.name="fireCone",this.cone.frustumCulled=!1,this.root.add(this.cone),this.coneLight=new Ua(16748584,0,5.5,2),this.coneLight.name="fireConeLight",this.root.add(this.coneLight)}if(this.cone.visible=t,this.coneLight){const s=1.7+Math.sin(performance.now()*.02)*.5+Math.random()*.3;this.coneLight.intensity=t?s:0}t&&e&&this.placeCone(e,this.coneDir)}isFireConeOn(){return this.coneOn}placeCone(t,e){if(!this.cone)return;const n=this.cone.geometry.attributes.position,s=this.cone.geometry.attributes.color,o=n.array,r=s.array,a=n.count,l=7.2,c=Math.abs(e.y)<.9?new L(0,1,0):new L(1,0,0),u=new L().crossVectors(e,c).normalize(),h=new L().crossVectors(u,e).normalize();for(let d=0;d<a;d++){const f=Math.pow((d+.35)/a,.68)*l+Math.random()*.28,g=.05+f*.14,x=Math.random()*Math.PI*2,p=Math.random()*g;o[d*3]=t.x+e.x*f+u.x*Math.cos(x)*p+h.x*Math.sin(x)*p,o[d*3+1]=t.y+e.y*f+.04+u.y*Math.cos(x)*p+h.y*Math.sin(x)*p,o[d*3+2]=t.z+e.z*f+u.z*Math.cos(x)*p+h.z*Math.sin(x)*p;const m=Math.min(1,f/l);r[d*3]=1,r[d*3+1]=.95-m*.68,r[d*3+2]=.28-m*.24}n.needsUpdate=!0,s.needsUpdate=!0,this.coneLight&&this.coneLight.position.copy(t).addScaledVector(e,2.1)}footDust(t){this.spawn(t.clone().setY(t.y+.05),6,12890256,1.2,.35,.1,.3)}levelUp(t){this.spawn(t.clone().add(new L(0,1,0)),28,15784056,2.5,1.1,.16,2)}update(t){if(this.coneOn&&this.cone){const e=this.cone.material;e.opacity=.75+Math.sin(performance.now()/80)*.15}for(const e of this.bursts){if(!e.alive)continue;const n=e.points.geometry.attributes.position,s=n.array;let o=!1;for(let r=0;r<e.life.length;r++){if(e.life[r]-=t,e.life[r]<=0){s[r*3+1]=-999;continue}o=!0,s[r*3]+=e.vel[r*3]*t,s[r*3+1]+=e.vel[r*3+1]*t,s[r*3+2]+=e.vel[r*3+2]*t,e.vel[r*3+1]-=6*t;const a=e.points.material;a.opacity=Math.max(0,e.life[r]/e.maxLife)}n.needsUpdate=!0,o||this.disposeBurst(e)}this.bursts=this.bursts.filter(e=>e.alive)}}function Ga(i,t){return i==="auto"?t??"medium":i}function Va(i){return i==="low"?{tier:i,pixelRatioCap:1,shadows:!1,shadowMapSize:0,terrainSegments:40,propBudget:.4,particles:40,anisotropy:1}:i==="high"?{tier:i,pixelRatioCap:1.5,shadows:!0,shadowMapSize:1024,terrainSegments:72,propBudget:.85,particles:140,anisotropy:4}:{tier:"medium",pixelRatioCap:1.25,shadows:!0,shadowMapSize:512,terrainSegments:56,propBudget:.6,particles:90,anisotropy:2}}class g1{samples=[];max=90;slowStreak=0;suggested="medium";push(t){this.samples.push(t),this.samples.length>this.max&&this.samples.shift();const e=this.samples.reduce((n,s)=>n+s,0)/this.samples.length;e>22?this.slowStreak++:this.slowStreak=Math.max(0,this.slowStreak-1),this.slowStreak>45?this.suggested="low":e<14&&this.slowStreak===0?this.suggested="high":e<18&&(this.suggested="medium")}stats(){if(!this.samples.length)return{avgMs:0,p95Ms:0,n:0};const t=[...this.samples].sort((s,o)=>s-o),e=t.reduce((s,o)=>s+o,0)/t.length,n=t[Math.min(t.length-1,Math.floor(t.length*.95))];return{avgMs:e,p95Ms:n,n:t.length}}}function Wa(i,t,e){i.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixelRatioCap)),i.shadowMap.enabled=e.shadows,i.shadowMap.type=Ed,t.castShadow=e.shadows,e.shadows&&(t.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),t.shadow.camera.near=2,t.shadow.camera.far=90,t.shadow.camera.left=-40,t.shadow.camera.right=40,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,t.shadow.bias=-15e-5,t.shadow.normalBias=.04)}function Xf(i){let t=0,e=0;const n=new Set;return i.traverse(s=>{const o=s;if(!o.isMesh)return;e++;const r=o.geometry;r?.index?t+=r.index.count/3:r?.attributes?.position&&(t+=r.attributes.position.count/3);const a=Array.isArray(o.material)?o.material:[o.material];for(const l of a){const c=l;for(const u of["map","normalMap","roughnessMap","emissiveMap"]){const h=c[u];h&&n.add(h)}}}),{triangles:Math.round(t),meshes:e,textures:n.size}}const Nl={full:"./icons/hud/heart-full.svg",half:"./icons/hud/heart-half.svg",empty:"./icons/hud/heart-empty.svg"},qf={sword:"./icons/hud/hotbar-01-sword.svg",dragon_book:"./icons/hud/hotbar-02-book.svg",bread:"./icons/hud/hotbar-03-bread.svg",loop_staff:"./icons/hud/hotbar-04-staff.svg",drumstick:"./icons/hud/hotbar-05-drumstick.svg",tunic:"./icons/hud/hotbar-06-shirt.svg",round_charm:"./icons/hud/hotbar-07-object.svg",block_wood:"./icons/hud/hotbar-wood.svg",block_stone:"./icons/hud/hotbar-stone.svg",axe:"./icons/hud/hotbar-axe.svg",pickaxe:"./icons/hud/hotbar-pickaxe.svg",water_bucket:"./icons/hud/hotbar-bucket.svg",water_bucket_full:"./icons/hud/hotbar-bucket-full.svg",torch:"./icons/hud/hotbar-torch.svg",wood_log:"./icons/hud/hotbar-wood.svg",berry:"./icons/hud/hotbar-berry.svg",fruit:"./icons/hud/hotbar-fruit.svg",water:"./icons/hud/hotbar-bucket-full.svg",empty:""};function x1(i,t,e){i.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("img");s.width=44,s.height=44,s.alt="heart",s.className="heart-img";const o=t-n;o>=1?s.src=Nl.full:o>0?s.src=Nl.half:s.src=Nl.empty,i.appendChild(s)}}function y1(i){const t=i.querySelector('.heart-img:not([src*="empty"])');t&&(t.classList.add("punch"),setTimeout(()=>t.classList.remove("punch"),80))}function _1(i,t,e,n){i.innerHTML="";const s=document.createElement("div");s.className="inv-title",s.textContent="Inventory",i.appendChild(s);const o=document.createElement("div");o.className="hotbar-row",t.forEach((r,a)=>{const l=document.createElement("button");l.type="button",l.className="slot"+(a===e?" selected":""),l.title=r.label,l.setAttribute("aria-label",r.label);const c=qf[r.id]??"";l.innerHTML=`<span class="idx">${a+1}</span>${c?`<img class="icon-img" src="${c}" alt="" width="42" height="42" />`:""}<span class="qty">${r.count}</span><span class="slot-tip">${r.label}</span>`,l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),n?.(a)}),l.addEventListener("pointerdown",u=>u.stopPropagation()),o.appendChild(l)}),i.appendChild(o),Yf(t[e]?.label??"")}function Yf(i){const t=document.getElementById("selected-item");t&&(t.textContent=i?`Holding: ${i}`:"")}function Tn(i){const t=document.getElementById("context-prompt");if(t){if(!i){t.classList.remove("show"),t.textContent="";return}t.textContent=i,t.classList.add("show")}}function An(i){const t=document.getElementById("crosshair");t&&(t.classList.remove("on-target","can-use"),i==="target"&&t.classList.add("on-target"),i==="use"&&t.classList.add("can-use"))}function v1(i,t,e,n=!1){const s=document.getElementById("dmg-layer");if(!s)return;const o=document.createElement("div");o.className="dmg-floater"+(n?" heal":""),o.textContent=e,o.style.left=`${i}px`,o.style.top=`${t}px`,s.appendChild(o),setTimeout(()=>o.remove(),750)}function M1(i){const t=document.getElementById("level-fill"),e=document.getElementById("lev-cur"),n=document.getElementById("lev-next");t&&(t.style.width=`${Math.round(i.player.levelProgress*100)}%`),e&&(e.textContent=String(i.player.level)),n&&(n.textContent=String(i.player.level+1))}function uo(i){const t=document.getElementById("mode-pill");t&&(i==="safe_build"?(t.textContent="Safe Build",t.className="pill ready"):(t.textContent="Adventure",t.className="pill warn"))}function Fi(i,t){const e=document.getElementById("offline-pill");e&&(e.textContent=t,e.className=i?"pill ready":"pill dim")}function nr(i,t=!1){const e=document.getElementById("detector");e&&(e.textContent=`Tracker: ${i}`,e.className=t?"pill warn":"pill dim")}function jr(i){const t=document.getElementById("objective");t&&(t.textContent=i)}let hd=0;function Wt(i,t=2400){const e=document.getElementById("toast");e&&(e.textContent=i,e.classList.add("show"),window.clearTimeout(hd),hd=window.setTimeout(()=>e.classList.remove("show"),t))}function $f(i,t){if(i.innerHTML="",!t.length){const e=document.createElement("p");e.className="inv-empty",e.textContent="Your backpack is empty.",i.appendChild(e);return}for(const e of t){if(e.count<=0)continue;const n=document.createElement("div");n.className="inv-cell",n.title=e.label;const s=qf[e.id]??"";n.innerHTML=`${s?`<img class="icon-img" src="${s}" alt="" width="42" height="42" />`:""}<span class="qty">${e.count}</span><span class="slot-tip">${e.label}</span>`,i.appendChild(n)}}const b1="modulepreload",w1=function(i,t){return new URL(i,t).href},dd={},S1=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=w1(c,n),c in dd)return;dd[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=r.length-1;g>=0;g--){const x=r[g];if(x.href===c&&(!u||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":b1,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((g,x)=>{f.addEventListener("load",g),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};async function E1(i,t){if(i.length===0)return"empty";for(const e of i)if((t[e]??0)>0)return"ready";return"failed"}const T1="0.7.0",Xa=T1,A1="Dragon Adventures 0.7.0 — ride, pack, wildlife, fire breath, sleep & solid world",C1="da-simulate-update-hang";async function R1(i){await i.flushSave();const t=i.now??(()=>Date.now()),e=i.sleep??(r=>new Promise(a=>setTimeout(a,r))),n=i.timeoutMs??3e3;let s=!1;const o=i.onControllerChange(()=>{s=!0});try{if(!i.simulateHang&&(i.postSkipWaiting(),i.updateSW))try{await Promise.race([i.updateSW(!0),e(400)])}catch{}const r=t()+n;for(;!s&&t()<r;)await e(Math.min(100,r-t()));return i.reload(),{flushed:!0,gotControllerChange:s,reloaded:!0}}finally{o()}}function P1(i=globalThis.sessionStorage){try{return i?.getItem(C1)==="1"}catch{return!1}}const L1=/^\d+\.\d+\.\d+[a-z0-9.-]*$/i;function I1(i){let t;try{t=JSON.parse(i)}catch{return{ok:!1,reason:"json"}}if(!t||typeof t!="object"||Array.isArray(t))return{ok:!1,reason:"json"};const e=t.version;if(typeof e!="string"||!e.trim())return{ok:!1,reason:"missing"};const n=e.trim();return L1.test(n)?{ok:!0,version:n}:{ok:!1,reason:"odd"}}function D1(i,t){return t.ok?t.version!==i:!1}let jf=null,Uc=null,ir=null,Ul=!1;function N1(i){Uc=i}function lu(){const i=document.getElementById("title");return!!i&&!i.classList.contains("hidden")}function U1(){try{return new URL("sw.js",document.baseURI).href}catch{return""}}function cu(i=navigator.serviceWorker.controller){if(!i||!i.scriptURL)return!1;const t=U1();return!!t&&i.scriptURL===t}function ma(i,t){const e=document.getElementById("update-banner");if(!e)return;const n=document.getElementById("update-banner-msg");n&&(n.textContent=t??"Update ready — Save and restart to get the latest Dragon Adventures."),e.classList.toggle("hidden",!i)}async function Zf(){try{const i=await fetch(new URL("VERSION.json",document.baseURI).toString(),{cache:"no-store"});if(!i.ok)return console.debug("[version-check] non-200",i.status),"";const t=await i.text(),e=I1(t);return e.ok?e.version:(console.debug("[version-check] ignore",e.reason),"")}catch(i){return console.debug("[version-check] network",i),""}}async function uu(){if(!Ul){Ul=!0;try{const i=ir??await navigator.serviceWorker.getRegistration().catch(()=>null);await R1({flushSave:async()=>{Uc&&await Uc()},postSkipWaiting:()=>{i?.waiting&&i.waiting.postMessage({type:"SKIP_WAITING"})},updateSW:jf??void 0,onControllerChange:t=>{const e=()=>t();return navigator.serviceWorker.addEventListener("controllerchange",e),()=>navigator.serviceWorker.removeEventListener("controllerchange",e)},reload:()=>location.reload(),timeoutMs:3e3,simulateHang:P1()})}finally{Ul=!1}}}async function Fc(i){if(!cu()){console.debug("[sw] skip update UI — controller is not this build's sw.js",navigator.serviceWorker.controller?.scriptURL);return}const t=await Zf(),e=t?`v${t}`:"a newer build";if(lu()){ma(!0,`Update ready: ${e}. Applying…`),await uu();return}ma(!0,`Update available — tap to update (${e}).`)}function F1(){document.getElementById("btn-update")?.addEventListener("click",()=>{uu()}),document.getElementById("btn-update-later")?.addEventListener("click",()=>{ma(!1)})}async function Ho(){try{const i=ir??await navigator.serviceWorker.getRegistration();if(!i)return;ir=i,await i.update(),i.waiting&&await Fc()}catch{}}async function Zr(){try{const i=await Zf();if(!D1(Xa,i?{ok:!0,version:i}:{ok:!1,reason:"missing"}))return;if(!cu()){console.debug("[version-check] skip prompt — not own controller yet"),await Ho();return}ma(!0,`Update available — tap to update (v${i}).`),await Ho(),(ir??await navigator.serviceWorker.getRegistration())?.waiting&&lu()&&await uu()}catch(i){console.debug("[version-check] self-check swallowed",i)}}async function O1(){if(!("serviceWorker"in navigator)){Fi(!1,"Offline: SW unsupported");return}F1();const i=`v${Xa}`;for(const t of["title-version","pause-version"]){const e=document.getElementById(t);e&&(e.textContent=i)}try{const{registerSW:t}=await S1(async()=>{const{registerSW:e}=await import("./virtual_pwa-register-DReFd9g1.js");return{registerSW:e}},[],import.meta.url);jf=t({immediate:!0,onRegisteredSW(e,n){ir=n??null,fd(!!n?.active),Ho(),Zr(),n&&n.addEventListener("updatefound",()=>{const s=n.installing;s&&s.addEventListener("statechange",()=>{s.state==="installed"&&cu()&&Fc()})})},onNeedRefresh(){Fc()},onOfflineReady(){fd(!0)},onRegisterError(){Fi(!1,"Offline: cache failed")}})}catch{Fi(!1,"Dev mode (no SW cache)")}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(Ho(),Zr())}),window.addEventListener("focus",()=>{Ho(),Zr()}),window.setInterval(()=>{lu()&&Zr()},6e4)}async function fd(i){try{if(!("caches"in window)){Fi(!1,"Offline: no Cache API");return}const t=await caches.keys(),e={};for(const s of t)e[s]=(await(await caches.open(s)).keys()).length;const n=await E1(t,e);n==="ready"?Fi(!0,"Offline ready"):n==="empty"?Fi(!1,i?"Caching…":"Offline: empty cache"):Fi(!1,"Offline: cache failed")}catch{Fi(!1,"Offline: cache failed")}}function z1(i=Fa){return i.slice(0,5).map((e,n)=>{const s=e.label.replace(/\s*\(.*\)\s*$/,"").trim();return`<kbd>${n+1}</kbd> ${s}`}).join(" · ")}function Qs(i,t=Fa){const e=t.findIndex(n=>n.id===i);return e>=0?e+1:null}function k1(i,t=Fa){const e=[];for(let n=0;n<t.length;n++){const s=n+1,o=t[n].label.replace(/\s*\(.*\)\s*$/,"").trim();!new RegExp(`(?:^|[^0-9])${s}(?:</kbd>)?\\s*${o.split(" ")[0]}`,"i").test(i)&&s<=5&&(new RegExp(`${s}[^\\d]{0,24}${o.split(" ")[0]}`,"i").test(i)||e.push(`slot ${s} expected near "${o}"`))}return e}function aa(i){const t={x:-Math.sin(i),z:-Math.cos(i)},e={x:-t.z,z:t.x};return{forward:t,right:e}}function hu(i,t){return i.hotbar.find(e=>e.id===t)||i.inventory.find(e=>e.id===t)}function ga(i,t,e,n){const s=hu(i,t);if(s)return s.count=Math.min(99,s.count+e),s;const o={id:t,count:Math.min(99,Math.max(0,e)),label:n};return i.inventory.push(o),o}const Jf={bread:1,berry:1,fruit:1};function pd(i){return i in Jf}function B1(i){const t=(i%24+24)%24,e=t<5.5||t>=20.5,n=t>=6&&t<10,s=Math.max(0,Math.sin((t-6)/12*Math.PI)),o=.22+s*1.15,r=.18+s*.28,a=e?"#8aa0cc":t>17||t<7?"#ffb070":"#fff5e0",l=e?"#1a2848":n?"#c8e4ff":"#e8f2ff",c=e?"#1c2830":"#8aab70",u=e?.42:t>18||t<6.5?.18:0,h=u>0?`rgba(10, 16, 36, ${u.toFixed(2)})`:"transparent";return{sunIntensity:o,sunColor:a,hemiSky:l,hemiGround:c,ambient:r,veil:h,isNight:e,isMorning:n}}const H1=7;function Oe(i,t){const e=i.attributes.position.count,n=new Float32Array(e*3),s=new _t(t);for(let o=0;o<e;o++)n[o*3]=s.r,n[o*3+1]=s.g,n[o*3+2]=s.b;return i.setAttribute("color",new we(n,3)),i}function G1(){const i=[],e=new Bt(.28,8,6);e.scale(1.2,.92,1.45),e.translate(0,.32,0),i.push(Oe(e,12880450));const n=new Bt(.18,8,6);n.translate(0,.48,.28),i.push(Oe(n,12880450));for(const o of[-1,1]){const r=new Mn(.055,.28,5);r.translate(o*.08,.74,.24),i.push(Oe(r,12880450))}const s=new Bt(.1,6,5);return s.translate(0,.36,-.34),i.push(Oe(s,16249578)),du(i)}function V1(){const i=[],n=new Bt(.32,8,6);n.scale(1.05,.78,1.7),n.translate(0,.52,0),i.push(Oe(n,16738844));const s=new Bt(.16,8,6);s.scale(.95,.9,.7),s.translate(0,.46,.32),i.push(Oe(s,16774890));const o=new Bt(.2,8,6);o.scale(.92,.95,1.15),o.translate(0,.78,.46),i.push(Oe(o,16738844));const r=new Mn(.065,.2,5);r.rotateX(Math.PI/2),r.translate(0,.72,.68),i.push(Oe(r,16738844));for(const c of[-1,1]){const u=new Mn(.065,.18,5);u.translate(c*.1,1.02,.4),i.push(Oe(u,16738844))}for(const[c,u]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const h=new de(.042,.05,.34,5);h.translate(c*.15,.17,u*.22),i.push(Oe(h,16738844));const d=new Bt(.05,5,4);d.scale(1.05,.45,1.15),d.translate(c*.15,.035,u*.24),i.push(Oe(d,16738844))}const a=new Bt(.15,7,6);a.scale(.78,.78,2.7),a.rotateX(-.55),a.translate(0,.62,-.5),i.push(Oe(a,16738844));const l=new Bt(.1,6,5);return l.translate(0,.84,-.84),i.push(Oe(l,16774890)),du(i)}function W1(){const i=[],t=new Bt(.16,8,6);t.scale(1,.85,1.45),i.push(Oe(t,3842278));const e=new Bt(.1,6,5);e.scale(.9,.7,1.1),e.translate(0,-.04,.02),i.push(Oe(e,15883066));const n=new Bt(.09,6,5);n.translate(0,.08,.2),i.push(Oe(n,3842278));const s=new Mn(.03,.1,4);s.rotateX(Math.PI/2),s.translate(0,.06,.3),i.push(Oe(s,15778330));for(const o of[-1,1]){const r=new Ge(.28,.035,.14);r.translate(o*.18,.03,0),i.push(Oe(r,15778330))}return du(i)}function du(i){const t=We(i,!1);return i.forEach(e=>e.dispose()),t}const Vs=new Re;function ls(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}class X1{constructor(t="medium"){this.quality=t,this.root.name="wildlife";const e=t==="low"?5:8,n=t==="low"?3:4,s=t==="low"?6:10,o=[];for(let d=0;d<e;d++)o.push("rabbit");for(let d=0;d<n;d++)o.push("fox");for(let d=0;d<s;d++)o.push("bird");const r={rabbit:new ee({color:"#ffffff",vertexColors:!0,roughness:.85,flatShading:!0}),fox:new ee({color:"#ffffff",vertexColors:!0,roughness:.8,flatShading:!0}),bird:new ee({color:"#ffffff",vertexColors:!0,roughness:.7,flatShading:!0})},a={rabbit:G1(),fox:V1(),bird:W1()};this.meshes={rabbit:new kn(a.rabbit,r.rabbit,e),fox:new kn(a.fox,r.fox,n),bird:new kn(a.bird,r.bird,s)},this.meshes.rabbit.name="rabbits",this.meshes.fox.name="foxes",this.meshes.bird.name="birds";for(const d of Object.values(this.meshes))d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,this.root.add(d);const l={rabbit:[[14.5,9.5],[20,16.5]],fox:[[22,12.5]],bird:[[8.5,15],[16,18.5]]};let c=0,u=0,h=0;for(let d=0;d<o.length;d++){const f=o[d],g=f==="rabbit"?c:f==="fox"?u:h,x=l[f][g];let p,m;if(x)p=x[0],m=x[1];else{const y=ls(d,1)*Math.PI*2,T=f==="fox"?90:f==="bird"?40:32,E=f==="fox"?170:f==="bird"?160:95,A=T+ls(d,2)*(E-T),S=f==="rabbit"?.7:0;p=Math.cos(y+S)*A,m=Math.sin(y+S)*A+(f==="rabbit"?20:0)}const v=se(p,m),b={kind:f,x:p,y:v,z:m,yaw:ls(d,3)*Math.PI*2,phase:ls(d,4)*Math.PI*2,state:f==="bird"?ls(d,5)>.45?"fly":"perch":"idle",timer:1+ls(d,6)*3,tx:p,tz:m,perchY:v+3+ls(d,7)*4};f==="bird"&&b.state==="fly"&&(b.y=b.perchY+2),this.critters.push(b),f==="rabbit"?c++:f==="fox"?u++:h++}this.counts={rabbit:c,fox:u,bird:h},this.writeMatrices(0,0)}root=new Kt;critters=[];meshes;counts={rabbit:0,fox:0,bird:0};update(t,e,n){for(const o of this.critters){if(o.phase+=t,o.pinned){o.kind==="bird"?(o.state="perch",o.y=o.perchY):(o.state="idle",o.y=se(o.x,o.z));continue}o.timer-=t;const r=Math.hypot(o.x-e,o.z-n);if(r<3.2&&o.state!=="flee"){o.state="flee";const a=Math.atan2(o.z-n,o.x-e);o.tx=o.x+Math.cos(a)*14,o.tz=o.z+Math.sin(a)*14,o.timer=2.4}o.kind==="bird"?this.stepBird(o,t,r):this.stepGround(o,t)}this.writeMatrices(e,n)}stepGround(t,e){const n=t.kind==="rabbit",s=t.state==="flee"?n?7:6:n?2.2:1.6;if(t.state==="idle"){if(t.timer<=0){t.state="wander";const a=Math.random()*Math.PI*2;t.tx=t.x+Math.cos(a)*(4+Math.random()*6),t.tz=t.z+Math.sin(a)*(4+Math.random()*6),t.timer=2+Math.random()*3}}else{const a=t.tx-t.x,l=t.tz-t.z,c=Math.hypot(a,l);if(c>.15&&(t.x+=a/c*s*e,t.z+=l/c*s*e,t.yaw=Math.atan2(a,l)),(c<.4||t.timer<=0)&&(t.state=t.state==="flee"||Math.random()>.4?"idle":"wander",t.timer=t.state==="idle"?1+Math.random()*3:2+Math.random()*2,t.state==="wander")){const u=Math.random()*Math.PI*2;t.tx=t.x+Math.cos(u)*5,t.tz=t.z+Math.sin(u)*5}}const o=se(t.x,t.z),r=n&&t.state!=="idle"?Math.abs(Math.sin(t.phase*10))*.32:0;t.y=o+r}stepBird(t,e,n){if((t.state==="flee"||n<9&&t.state==="perch")&&(t.state="fly",t.timer=4),t.state==="perch"){t.timer<=0&&(t.state="fly",t.timer=5+Math.random()*4),t.y=t.perchY;return}const s=n<12;t.yaw+=e*(s?1.6:.7);const o=s?8:3.5;t.x+=Math.sin(t.yaw)*o*e,t.z+=Math.cos(t.yaw)*o*e;const r=t.perchY+2+Math.sin(t.phase*.8)*1.2;t.y+=(r-t.y)*Math.min(1,e*2),t.timer<=0&&t.state==="fly"&&(t.state="perch",t.perchY=se(t.x,t.z)+3.5+Math.random()*3,t.timer=3+Math.random()*5)}writeMatrices(t,e){const n={rabbit:0,fox:0,bird:0},s=72,o={rabbit:!1,fox:!1,bird:!1};for(const r of this.critters){const a=n[r.kind]++,l=Math.hypot(r.x-t,r.z-e)<s;l&&(o[r.kind]=!0),Vs.position.set(r.x,r.y,r.z),Vs.rotation.set(0,r.yaw,0),r.kind==="bird"&&r.state==="fly"&&(Vs.rotation.z=Math.sin(r.phase*14)*.35),Vs.scale.set(l?1:.001,l?1:.001,l?1:.001),Vs.updateMatrix(),this.meshes[r.kind].setMatrixAt(a,Vs.matrix)}for(const r of["rabbit","fox","bird"])this.meshes[r].instanceMatrix.needsUpdate=!0,this.meshes[r].count=this.counts[r],this.meshes[r].visible=o[r]}nearest(t,e,n){let s=null,o=1/0;for(const r of this.critters){if(r.kind!==t)continue;const a=Math.hypot(r.x-e,r.z-n);a<o&&(o=a,s=r)}return s}}const Po=new Re;function q1(){const i=[],t=new Bt(.22,8,6);t.scale(1.1,.8,1.1),t.translate(0,.2,0),i.push(t);for(const[e,n,s]of[[.12,.28,.08],[-.1,.3,-.06],[.02,.34,-.12],[.08,.22,-.14]]){const o=new Bt(.045,6,5);o.translate(e,n,s),i.push(o)}return We(i,!1)}function Y1(){const i=new Bt(.11,8,6);i.scale(1,.95,1),i.translate(0,.11,0);const t=new de(.012,.012,.08,5);return t.translate(0,.24,0),We([i,t],!1)}function $1(){const i=[];return $e.bushes.forEach(([e,n],s)=>{i.push({id:`camp-berry-${s}`,kind:"berry",x:e,z:n})}),[[14,18,"fruit"],[22,8,"berry"],[-18,16,"fruit"],[28,-8,"berry"],[-24,6,"berry"],[16,-28,"fruit"],[-12,24,"berry"],[36,14,"fruit"],[8,32,"berry"],[-30,-12,"fruit"],[42,-22,"berry"],[-8,36,"fruit"],[54,8,"berry"],[-40,22,"fruit"],[18,48,"berry"],[4,-36,"fruit"]].forEach(([e,n,s],o)=>i.push({id:`wild-${s}-${o}`,kind:s,x:e,z:n})),i}class j1{root=new Kt;items=[];berryMesh;fruitMesh;constructor(t=[]){this.root.name="pickups";const e=new Set(t),n=$1();for(const r of n){const a=se(r.x,r.z);this.items.push({...r,y:a,taken:e.has(r.id)})}const s=this.items.filter(r=>r.kind==="berry").length,o=this.items.filter(r=>r.kind==="fruit").length;this.berryMesh=new kn(q1(),new ee({color:"#3a7a38",roughness:.85,flatShading:!0}),Math.max(1,s)),this.fruitMesh=new kn(Y1(),new ee({color:"#d03030",roughness:.7,flatShading:!0}),Math.max(1,o)),this.berryMesh.name="berries",this.fruitMesh.name="fruits",this.berryMesh.castShadow=this.fruitMesh.castShadow=!1,this.root.add(this.berryMesh,this.fruitMesh),this.sync()}sync(){let t=0,e=0;for(const n of this.items){const s=n.kind==="berry"?this.berryMesh:this.fruitMesh,o=n.kind==="berry"?t++:e++;Po.position.set(n.x,n.taken?-20:n.y,n.z),Po.rotation.set(0,n.id.length*.7,0),Po.scale.setScalar(n.taken?.001:1),Po.updateMatrix(),s.setMatrixAt(o,Po.matrix)}this.berryMesh.instanceMatrix.needsUpdate=!0,this.fruitMesh.instanceMatrix.needsUpdate=!0,this.berryMesh.count=t,this.fruitMesh.count=e}nearest(t,e,n=2.2){let s=null,o=n;for(const r of this.items){if(r.taken)continue;const a=Math.hypot(r.x-t,r.z-e);a<o&&(o=a,s=r)}return s}take(t){const e=this.items.find(n=>n.id===t);return!e||e.taken?null:(e.taken=!0,this.sync(),e)}}function Z1(i,t,e,n,s){const o=new df(t,e.clone().normalize(),.1,n),r=[];if(i.traverse(l=>{const c=l;c.isInstancedMesh&&typeof c.name=="string"&&c.name.startsWith("trees_")&&r.push(c)}),!r.length)return null;const a=o.intersectObjects(r,!1);for(const l of a){if(l.instanceId==null)continue;const c=l.object,u=`${c.name}:${l.instanceId}`;if(s.has(u))continue;s.add(u),Kf(c,l.instanceId);const h=new L,d=new Ft;return c.getMatrixAt(l.instanceId,d),h.setFromMatrixPosition(d),{key:u,x:h.x,y:h.y,z:h.z}}return null}function Kf(i,t){const e=new Ft,n=new L,s=new _n,o=new L;i.getMatrixAt(t,e),e.decompose(n,s,o),o.x*=.55,o.z*=.55,o.y*=.12,e.compose(n,s,o),i.setMatrixAt(t,e),i.instanceMatrix.needsUpdate=!0}function fu(i,t){const e=new Set(t);e.size&&i.traverse(n=>{const s=n;if(!(!s.isInstancedMesh||!s.name.startsWith("trees_")))for(let o=0;o<s.count;o++)e.has(`${s.name}:${o}`)&&Kf(s,o)})}const gs={x:2.5,z:7.2};function J1(){const i=new Kt;i.name="campfirePit";const t=se(gs.x,gs.z);i.position.set(gs.x,t,gs.z);const e=[],n=new bi(.45,.08,6,10);n.rotateX(Math.PI/2),n.translate(0,.06,0),e.push(n);for(const r of[.2,1.3,2.4]){const a=new de(.05,.055,.55,6);a.rotateZ(Math.PI/2),a.rotateY(r),a.translate(0,.08,0),e.push(a)}const s=new ht(We(e,!1),new ee({color:"#5a4030",roughness:.92,flatShading:!0,emissive:"#000000",emissiveIntensity:0}));s.name="campfirePitMesh",i.add(s),e.forEach(r=>r.dispose());const o=new Ua(16744480,0,6,1.6);return o.name="campfireLight",o.position.y=.4,i.add(o),i}function K1(i,t){const e=i.getObjectByName("campfirePitMesh"),n=i.getObjectByName("campfireLight");if(e){const s=e.material;s.emissive.set("#ff6010"),s.emissiveIntensity=.55}n&&(n.intensity=1.4)}const Qf=1.65,Q1=2.4;function tp(i,t,e,n,s,o){const r=e-1.55;for(const a of n){if(a.kind!=="dragon"||a.id===s||Math.hypot(i-a.position.x,t-a.position.z)>=Qf)continue;const c=o(a.position.x,a.position.z);if(r<c+Q1&&e>c)return!0}return!1}function ep(i,t,e,n,s,o,r=1.55){const a=aa(e),l=[2.6,3.4,4.4,5.6],c=[{x:a.right.x,z:a.right.z},{x:-a.right.x,z:-a.right.z},{x:-a.forward.x,z:-a.forward.z},{x:a.forward.x*.4+a.right.x,z:a.forward.z*.4+a.right.z},{x:a.forward.x*.4-a.right.x,z:a.forward.z*.4-a.right.z}];for(const d of l)for(const f of c){const g=i+f.x*d,x=t+f.z*d,p=Qn(g,x,1/0);if(!Number.isFinite(p)||p<-1.2)continue;const m=p+r;if(!Lf(g,x,p)&&!tp(g,x,m,n,s,o)&&!(Math.hypot(g-i,x-t)<Qf+.35))return{x:g,y:m,z:x}}const u={x:i+a.right.x*6,z:t+a.right.z*6},h=o(u.x,u.z);return{x:u.x,y:(Number.isFinite(h)?h:0)+r,z:u.z}}const qa=document.getElementById("game"),tb=document.getElementById("no-webgl"),np=document.getElementById("title"),md=document.getElementById("pause"),fr=document.getElementById("howto");function eb(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}if(!eb())throw tb.classList.remove("hidden"),new Error("WebGL unavailable");let _=mf();pr(_);function pr(i){i.player.position={x:.6,y:1.55,z:12.2},i.player.yaw=0,i.player.pitch=-.22,i.companions[0].position={x:2.4,y:0,z:6.2},i.companions[0].tameness=0,i.companions[0].bonded=!1,i.companions[1]&&(i.companions[1].position={x:-18,y:0,z:14}),i.companions[2]&&(i.companions[2].position={x:22,y:0,z:-16}),i.companions[3]&&(i.companions[3].position={x:-14,y:0,z:-24})}const Yi=1.55;function xs(i){const t=Number.isFinite(i.player.position.y)?i.player.position.y-Yi+.2:-1/0,e=Qn(i.player.position.x,i.player.position.z,t),n=Number.isFinite(e)?e:0;if(i.player.position.y=n+Yi,!Number.isFinite(i.player.position.y)||i.player.position.y<n+.9||i.player.position.y<.5){pr(i);const s=he(i.player.position.x,i.player.position.z);i.player.position.y=(Number.isFinite(s)?s:0)+Yi}}let ni=!0,Si=!0,to=0,Cn=0,rn=!0,Go=0,gd=0,xi="off";const Te=new cM;let jn=null;const ip=-60*Math.PI/180,sp=25*Math.PI/180,mr=-.18,xd=.12;function bs(i){return Number.isFinite(i)?Math.max(ip,Math.min(sp,i)):mr}function yd(i){return Number.isFinite(i)?Math.max(-xd,Math.min(xd,i)):0}function eo(i){i.player.pitch=bs(mr)}function op(){_.player.pitch=bs(mr),ba(),to=performance.now()+250}const xa=new g1;let pe=Ga(_.settings.quality,"medium"),Je=Va(pe),ya=null,ge=null,mi=null,Vn=null,Vo=null,$i=!1,Fl=!1,pi=null,Wo=!1,rp=!1;const _a=1.65,va={y:2.62,z:-1.72};let Ui=0,ds=!1,Oi=!1;const je=new H_({canvas:qa,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});je.setSize(window.innerWidth,window.innerHeight);je.outputColorSpace=Be;je.toneMapping=Ad;je.toneMappingExposure=1.28;const Ot=new G_;Ot.background=new _t("#a8d4f5");Ot.fog=new Ta("#c5ddf2",.005);const At=new gn(70,window.innerWidth/window.innerHeight,.2,900),Oc=new Ev(15266559,9087856,1.15);Ot.add(Oc);const ii=new Cv(16774624,1.35);ii.position.set(32,48,20);ii.target.position.set(0,0,2);Ot.add(ii);Ot.add(ii.target);const ap=new Rv(11585752,.42);Ot.add(ap);const sr=new Ua(16751168,0,9,1.6);sr.name="cabinFireLight";Ot.add(sr);const Ya=new Ua(16756832,0,28,1.4);Ya.name="greatHallLight";Ot.add(Ya);Wa(je,ii,Je);ya=Hf(Ot,pe);Ot.add(ya);ge=new kf(pe);Ot.add(ge.root);const an=new m1(Ot,Je.particles);let _d=0,Ol=0;const Xo=p1();At.add(Xo);Ot.add(At);const vd=document.getElementById("title-hero-preview");vd&&(vd.innerHTML='<span class="hero-emoji">🐉</span>Feed a dragon · build a camp · fly when ready');const Ki=new Map,Bi=new Map,Jr=new Map,zc=[];function nb(){zc.length=0;for(const i of _.blocks)zc.push(new Ei(new L(i.x,i.y,i.z),new L(i.x+1,i.y+1,i.z+1)))}const Md={x:$t.x,z:$t.z};function ib(){const i=Ot.getObjectByName("castleExterior");if(!i)return{ok:!1,cx:0,cy:0,width:0,height:0,bottom:1,top:0,horizonY:.5};i.updateWorldMatrix(!0,!0);const t=new Ei().setFromObject(i),e=[new L(t.min.x,t.min.y,t.min.z),new L(t.min.x,t.min.y,t.max.z),new L(t.min.x,t.max.y,t.min.z),new L(t.min.x,t.max.y,t.max.z),new L(t.max.x,t.min.y,t.min.z),new L(t.max.x,t.min.y,t.max.z),new L(t.max.x,t.max.y,t.min.z),new L(t.max.x,t.max.y,t.max.z)];let n=1,s=0,o=1,r=0,a=!1;for(const u of e){const h=u.clone().project(At);if(h.z<-1||h.z>1)continue;const d=(h.x+1)/2,f=1-(h.y+1)/2;n=Math.min(n,d),s=Math.max(s,d),o=Math.min(o,f),r=Math.max(r,f),a=!0}const c=1-(new L(_.player.position.x-Math.sin(_.player.yaw)*400,_.player.position.y,_.player.position.z-Math.cos(_.player.yaw)*400).project(At).y+1)/2;return a?{ok:!0,cx:(n+s)/2,cy:(o+r)/2,width:Math.max(0,s-n),height:Math.max(0,r-o),bottom:r,top:o,horizonY:c}:{ok:!1,cx:0,cy:0,width:0,height:0,bottom:1,top:0,horizonY:c}}function sb(i=25){if(!ge)return 0;let t=0;const e=_.player.position.x,n=_.player.position.z,s=new Ft,o=new Ft,r=new L;return ge.root.updateWorldMatrix(!0,!0),ge.root.traverse(a=>{if(!a.name.startsWith("trees_"))return;const l=a;if(l.isInstancedMesh){l.updateWorldMatrix(!0,!1);for(let c=0;c<l.count;c++)l.getMatrixAt(c,s),o.multiplyMatrices(l.matrixWorld,s),r.setFromMatrixPosition(o),Math.hypot(r.x-e,r.z-n)<=i&&t++}}),t}function ob(i=8){if(!ge)return[];const t=_.player.position.x,e=_.player.position.z,n=new Ft,s=new Ft,o=new L,r=[];return ge.root.updateWorldMatrix(!0,!0),ge.root.traverse(a=>{if(!a.name.startsWith("trees_"))return;const l=a;if(l.isInstancedMesh){l.updateWorldMatrix(!0,!1);for(let c=0;c<l.count;c++){l.getMatrixAt(c,n),s.multiplyMatrices(l.matrixWorld,n),o.setFromMatrixPosition(s);const u=Math.hypot(o.x-t,o.z-e);r.push({dist:u,x:o.x,z:o.z,name:a.name})}}}),r.sort((a,l)=>a.dist-l.dist),r.slice(0,i)}function Kr(i,t,e){const n=e-Yi;if(Lf(i,t,n))return!0;for(const o of zc)if(i>o.min.x-.25&&i<o.max.x+.25&&t>o.min.z-.25&&t<o.max.z+.25&&e-1.55<o.max.y&&e>o.min.y)return!0;const s=_.player.mount!=="grounded"?_.player.mountedCompanionId:null;return!!tp(i,t,e,_.companions,s,(o,r)=>he(o,r))}function or(){_.monsters=Pn(_.monsters);for(const i of _.monsters){let t=Ki.get(i.id);t||(t=u1(),Ki.set(i.id,t),Ot.add(t)),t.visible=i.alive,t.position.set(i.position.x,he(i.position.x,i.position.z),i.position.z);let e=t.getObjectByName("blobShadow");e||(e=new ht(new Gn(.45,10),new Xn({color:"#000000",transparent:!0,opacity:.25,depthWrite:!1})),e.rotation.x=-Math.PI/2,e.name="blobShadow",t.add(e)),e.position.set(0,.03,0),e.visible=!Je.shadows,i.hostile&&i.alive&&t.lookAt(_.player.position.x,t.position.y,_.player.position.z)}}function lp(i){const t=_.player.yaw;i.visible=!0,i.rotation.y=t+Math.PI;const e=va.z,n=t+Math.PI,s=e*Math.sin(n),o=e*Math.cos(n),r=_.player.mount==="flying",a=_.player.position.x-s,l=_.player.position.z-o,c=Qn(a,l,_.player.position.y);i.position.set(a,r?_.player.position.y-va.y:c,l);const u=_.companions.find(h=>h.id===_.player.mountedCompanionId);u&&(u.position.x=a,u.position.z=l,u.position.y=i.position.y)}const Do=new Map,Ws={dragonDraw:110,dragonShadow:16,dragonLod:18,monsterDraw:75,monsterShadow:10,monsterLod:16};function Qi(){for(const i of _.companions){if(i.kind!=="dragon")continue;let t=Bi.get(i.id);t||(t=d1(i.palette),Bi.set(i.id,t),Ot.add(t)),_.player.mountedCompanionId===i.id&&_.player.mount!=="grounded"?lp(t):(t.visible=!0,t.position.set(i.position.x,he(i.position.x,i.position.z)+.02,i.position.z));let e=t.getObjectByName("blobShadow");e||(e=new ht(new Gn(.55,12),new Xn({color:"#000000",transparent:!0,opacity:.28,depthWrite:!1})),e.rotation.x=-Math.PI/2,e.name="blobShadow",t.add(e)),e.position.set(0,.02,0),e.visible=!Je.shadows}}function $a(){const i=new Set(_.blocks.map(t=>t.id));for(const[t,e]of Jr)i.has(t)||(Ot.remove(e),Jr.delete(t));for(const t of _.blocks){if(Jr.has(t.id))continue;const e=Vf(t.material);e.position.set(t.x+.5,t.y+.5,t.z+.5),Ot.add(e),Jr.set(t.id,e)}nb()}function Ie(){x1(document.getElementById("hearts"),_.player.hearts,_.player.maxHearts),_1(document.getElementById("hotbar"),_.player.hotbar,_.player.selectedHotbar,o=>{_.player.selectedHotbar=o,Te.ui(),Ie()}),Wf(Xo,_.player.hotbar[_.player.selectedHotbar]?.id??"sword");const i=document.getElementById("inv-grid");i&&$f(i,[..._.player.hotbar,..._.player.inventory].filter(o=>o.count>0)),M1(_),uo(_.player.mode);const t=_.player.monstersDefeated,e=_.companions.filter(o=>o.bonded).length,n=mu(_.blocks);_.flags.buildGuideComplete?_.player.mode==="safe_build"?jr(`Safe Build · Pets ${e}/3 · Press R Ready for battle · Defeat later (${t}/5)`):_.flags.firstObjectiveComplete?jr(`Stars ${_.player.stars} · Pets ${e}/3 · Explore & build`):jr(`Adventure · Defeat monsters (${t}/5) · Pets ${e}/3 · E mount · Space fly`):jr(`Build guide: place ${Math.min(n,3)}/3 blocks on the yellow pad (keys 4–5) · then press R when ready · Pets ${e}/3`);const s=_.player.hotbar[_.player.selectedHotbar];Yf(s?.label??"")}const ws=new lM(qa,()=>Si||ni||$i||Wo);function pu(i){Si=i,ni=i,i?(md.classList.remove("hidden"),ws.releaseLock()):(md.classList.add("hidden"),np.classList.add("hidden"),fr.classList.add("hidden"),document.getElementById("install-panel")?.classList.add("hidden"))}function rb(){if(jn&&(Ot.remove(jn),jn.geometry.dispose(),jn.material.dispose(),jn=null),xi==="off")return;const i=pe==="low"?200:400,t=new Float32Array(i*3);for(let s=0;s<i;s++)t[s*3]=(Math.random()-.5)*60,t[s*3+1]=Math.random()*30,t[s*3+2]=(Math.random()-.5)*60;const e=new Se;e.setAttribute("position",new we(t,3));const n=new ca({color:xi==="snow"?16777215:8956620,size:xi==="snow"?.12:.06,transparent:!0,opacity:.75,depthWrite:!1});jn=new Ec(e,n),Ot.add(jn)}async function ab(){const i=document.getElementById("build-meta");i&&(i.textContent=`${A1} · v${Xa}`);const t=await Xv();if(t.note){const c=document.getElementById("test-import-note");c&&(c.textContent=t.note,c.classList.remove("hidden")),Wt(t.note)}const e=await tM(),n=e?.state??null;if(n){_=qv(n,he),_.monsters=Pn(_.monsters),xs(_);const c=e?.incomingVersion??n.version;t.imported||Wt(c<wi?"Save upgraded — your items and progress are kept":"Save restored"),c<wi&&await Ms(_)}else pr(_),xs(_);await eM(),or(),Qi(),$a(),At.position.set(_.player.position.x,_.player.position.y,_.player.position.z),At.rotation.order="YXZ",At.rotation.y=_.player.yaw,At.rotation.x=_.player.pitch;const s=Ot.getObjectByName("skyDome");s&&s.position.copy(At.position),eo(_),_.player.pitch=bs(_.player.pitch),ba(),pe=Ga(_.settings.quality,xa.suggested),Je=Va(pe),Wa(je,ii,Je),an.setBudget(Je.particles);try{await vf(pe)}catch(c){console.warn("art textures failed; using procedural fallback",c)}bp(),_b(),Qi(),or();const o=Xf(Ot);window.__DA_PERF={tier:pe,setting:_.settings.quality,triangles:o.triangles,drawCallsApprox:o.meshes,textures:o.textures,note:"NOT a Chromebook measurement; headless/proxy stats only"};const r=document.getElementById("btn-quality");r&&(r.textContent=Mp(_.settings.quality)+" (live)"),gu(),Ie(),N1(async()=>{await Ms(_)});const a=document.getElementById("help-hotbar-slots");a&&(a.innerHTML=z1(_.player.hotbar));const l=k1(document.getElementById("howto")?.innerText??"",_.player.hotbar);l.length&&console.warn("help/hotbar mismatch",l),await O1()}function lb(i){let t=null,e=i;const n=_.player.position;for(const s of Pn(_.monsters)){if(!s.alive)continue;const o=ur(s.position,n);o<e&&(e=o,t=s)}return t}function qo(i){let t=null,e=i;for(const n of _.companions){if(n.kind!=="dragon")continue;const s=ur(n.position,_.player.position);s<e&&(e=s,t=n)}return t}function gr(){const i=new L;return At.getWorldDirection(i),i}function cp(i=3.5,t=.82){const e=gr(),n=At.getWorldPosition(new L);let s=null,o=i;for(const r of Pn(_.monsters))if(r.alive)for(const a of[.35,.85,1.25]){const l=new L(r.position.x,he(r.position.x,r.position.z)+a,r.position.z),c=l.clone().sub(n),u=c.length();if(u>i||u<.01)continue;const h=c.dot(e);if(h<0)continue;const f=n.clone().addScaledVector(e,Math.min(h,i)).distanceTo(l);!(c.normalize().dot(e)>=t)&&f>.9||u<o&&(o=u,s=r)}return s}function up(i,t=.45){const e=gr(),n=At.getWorldPosition(new L);let s=null,o=i;for(const r of _.companions){if(r.kind!=="dragon"||_.player.mountedCompanionId===r.id)continue;const a=he(r.position.x,r.position.z)+.55,l=new L(r.position.x,a,r.position.z).sub(n),c=l.length();c>i||(l.normalize(),!(l.dot(e)<t)&&c<o&&(o=c,s=r))}return s}function cb(i){const t=Ki.get(i);t&&t.traverse(e=>{const n=e;if(!n.isMesh)return;const s=n.material;if(!s?.color)return;const o=s.color.getHex();s.color.set("#ff6060"),setTimeout(()=>s.color.setHex(o),120)})}function ub(){if(Go>0)return!1;Go=.35,Te.swing();const i=cp(3.5,.75);if(!i)return Wt("Swing! Look at a nearby monster (glow means in reach)"),!1;const t=iM(Pn(_.monsters),i.id,1,_.player.mode,ni,Si);if(_.monsters=t.monsters,!t.hit)return Wt("Safe Build — finish the build guide, then press R"),!1;Te.hit(),cb(i.id);{const s=i.position.x-_.player.position.x,o=i.position.z-_.player.position.z,r=Math.hypot(s,o)||1;i.position.x+=s/r*.55,i.position.z+=o/r*.55;const a=_.monsters.find(l=>l.id===i.id);a&&(a.position={...i.position})}const e=he(i.position.x,i.position.z)+1.1;an.hitSparks(new L(i.position.x,e,i.position.z));const n=hb(i.position.x,e,i.position.z);if(n&&v1(n.x,n.y,"-1"),t.becameHostile&&(Wt("It will fight back now!"),nr("hostile retaliation!",!0)),t.defeated){const s=_.player.stars;_=Ov(_),Te.win(),Wt(`Monster defeated! (${_.player.monstersDefeated}/5)`),_.player.stars>s&&an.levelUp(new L(_.player.position.x,_.player.position.y,_.player.position.z))}return or(),Ie(),!0}function hb(i,t,e){const n=new L(i,t,e).project(At);return n.z>1?null:{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight}}const xe={x:2.5,z:6.2,r:2.6};function hp(){const i=gr(),t=At.getWorldPosition(new L);let e=_.player.position.x+i.x*2.8,n=_.player.position.z+i.z*2.8;for(let c=.6;c<=5.5;c+=.25){const u=t.x+i.x*c,h=t.y+i.y*c,d=t.z+i.z*c,f=he(u,d);if(h<=f+.35){e=u,n=d;break}}const s=e-xe.x,o=n-xe.z;if(Math.hypot(s,o)<xe.r+1.4){e=e+(xe.x-e)*(1-.55)*.15,n=n+(xe.z-n)*(1-.55)*.15;const u=e-xe.x,h=n-xe.z,d=Math.hypot(u,h);d>xe.r&&(e=xe.x+u/d*xe.r,n=xe.z+h/d*xe.r)}const r=Math.floor(e),a=Math.floor(n),l=Math.max(0,Math.floor(he(r+.5,a+.5)));return{x:r,y:l,z:a}}function dp(i,t,e){return`${i}|${t}|${e}`}function Ma(i,t){return Math.hypot(i+.5-xe.x,t+.5-xe.z)<=xe.r+.55}function mu(i){let t=0;for(const e of i)if(Ma(e.x,e.z))t++;else{let n=!1;for(const[s,o]of[[1,0],[-1,0],[0,1],[0,-1]])if(Ma(e.x+s,e.z+o)){n=!0;break}n&&t++}return t}function db(){const i=new Set;for(const t of _.blocks)i.add(dp(t.x,t.y,t.z));return i}function bd(i){const t=db();Math.floor(_.player.position.x),Math.floor(_.player.position.z);const e=[];for(let o=Math.floor(xe.z-xe.r)-1;o<=Math.ceil(xe.z+xe.r)+1;o++)for(let r=Math.floor(xe.x-xe.r)-1;r<=Math.ceil(xe.x+xe.r)+1;r++){if(!Ma(r,o))continue;const a=Math.max(0,Math.floor(he(r+.5,o+.5)));if(t.has(dp(r,a,o)))continue;const l=Math.hypot(r-i.x,o-i.z);e.push({x:r,z:o,dist:l})}if(e.sort((o,r)=>o.dist-r.dist),!e.length)return null;const n=e[0],s=Math.max(0,Math.floor(he(n.x+.5,n.z+.5)));return{x:n.x,y:s,z:n.z}}const Hi=Vf("wood");Hi.material=new ee({color:"#f0e080",transparent:!0,opacity:.45,depthWrite:!1,roughness:.8});Hi.visible=!1;Ot.add(Hi);function fb(){const i=_.player.hotbar[_.player.selectedHotbar];if(i.id!=="block_wood"&&i.id!=="block_stone"){Hi.visible=!1;return}const t=hp();Hi.visible=!0,Hi.material.color.set(i.id==="block_wood"?"#c4a06a":"#9aa0a8"),Hi.position.set(t.x+.5,t.y+.5,t.z+.5)}function rr(i){$i=i,document.getElementById("inv-overlay")?.classList.toggle("hidden",!i);const t=document.getElementById("inv-grid");t&&$f(t,[..._.player.hotbar,..._.player.inventory].filter(e=>e.count>0)),i?ws.releaseLock():!ni&&!Si&&ws.requestLock()}function gu(){const i=B1(_.player.timeOfDay??12);ii.intensity=i.sunIntensity,ii.color.set(i.sunColor),Oc.color.set(i.hemiSky),Oc.groundColor.set(i.hemiGround),ap.intensity=i.ambient;const t=document.getElementById("day-veil");t&&(t.style.background=i.veil)}function fp(){const i=_.player.hotbar[_.player.selectedHotbar];let t=i&&pd(i.id)&&i.count>0?i:void 0;if(!t)for(const s of["berry","fruit","bread"]){const o=hu(_.player,s);if(o&&o.count>0){t=o;break}}if(!t||t.count<=0||!pd(t.id))return!1;const e=_.player.hearts<ei,n=(_.player.hunger??_i)<_i;return!e&&!n?(Wt("You feel fine already"),!0):(t.count-=1,e&&(_.player.hearts=Hv(_.player.hearts,Jf[t.id]??1)),_.player.hunger=Math.min(_i,(_.player.hunger??_i)+1),Te.ui(),Wt(t.id==="bread"?"Ate bread — feeling better":`Ate ${t.label.split(" ")[0].toLowerCase()} — hearts and tummy happy`),Ie(),!0)}function pp(){if(!Vn)return!1;const i=Vn.nearest(_.player.position.x,_.player.position.z,2.3);if(!i)return!1;const t=Vn.take(i.id);return t?(_.pickedIds=[..._.pickedIds??[],t.id],t.kind==="berry"?ga(_.player,"berry",2,"Berries"):ga(_.player,"fruit",1,"Fruit"),Te.place(),Wt(t.kind==="berry"?"Picked berries":"Picked a juicy fruit"),Ie(),!0):!1}function mp(){const i=au();if(Math.hypot(_.player.position.x-i.x,_.player.position.z-i.z)>3.4)return!1;const t=_.player.hotbar[_.player.selectedHotbar],e=t?.id==="water_bucket"?t:hu(_.player,"water_bucket");return e&&e.id==="water_bucket"?(e.id="water_bucket_full",e.label="Bucket of water",Wt("Filled your bucket at the fountain"),Ie(),!0):(ga(_.player,"water",1,"Water"),Wt("Collected fresh fountain water"),Ie(),!0)}function gp(){if(Wo)return!1;const i=he(Ce.x,Ce.z),t=ru(i);if(Math.hypot(_.player.position.x-t.x,_.player.position.z-t.z)>2.6)return!1;Wo=!0;const e=document.getElementById("sleep-fade");return e?.classList.add("show"),window.setTimeout(()=>{_.player.timeOfDay=H1,_.player.hearts=ei,_.player.hunger=_i,gu(),Ms(_).then(()=>{e?.classList.remove("show"),Wo=!1,Wt("Good morning — you slept safely until sunrise."),Ie()})},850),!0}function xp(){if(!ge)return Wt("No tree in reach"),!1;const i=new Set(_.choppedTrees??[]);return Z1(ge.root,At.getWorldPosition(new L),gr(),4.8,i)?(_.choppedTrees=[...i],ga(_.player,"wood_log",2,"Wood log"),Te.place(),Wt("Chopped a tree — wood logs added to your pack"),Ie(),!0):(Wt("Look at a tree and swing your axe"),!1)}function yp(){const i=_.player.hotbar[_.player.selectedHotbar];if(i.id!=="drumstick")return i.id==="bread"&&Wt(`Bread heals you (press F when hurt). Use drumstick (${Qs("drumstick")}) to feed dragons.`),!1;if(i.count<=0)return Wt("No drumsticks left"),!1;const t=up(4.5)||qo(3.8);if(!t)return Wt("No dragon in range — walk closer and look at it"),!1;if(t.bonded)return Wt(`${t.name} is already your pet — press E to mount`),!1;const e=zv(_.companions,t.id,1);if(_.companions=e.companions,e.rejected==="max_companions")return Wt("You already have 3 companions"),!1;if(i.count-=1,Te.tame(),an.tamingHearts(new L(t.position.x,he(t.position.x,t.position.z)+.6,t.position.z)),e.bondedNow){const n=_.companions.filter(s=>s.bonded).length;Wt(`Tamed ${t.name}! Pets ${n}/3 — press E to mount, Space to fly`)}else{const n=_.companions.find(s=>s.id===t.id)?.tameness??0;Wt(`Fed ${t.name}… ${Math.round(n*100)}%`)}return Ie(),!0}function _p(){const i=_.player.hotbar[_.player.selectedHotbar];if(i.id!=="block_wood"&&i.id!=="block_stone")return!1;if(i.count<=0)return Wt(`Out of blocks — pick Wood (${Qs("block_wood")}) or Stone (${Qs("block_stone")})`),!1;let t=hp();const e=i.id==="block_wood"?"wood":"stone";let n=Rl(_.blocks,t,e,_.player.mode,ni);if(!n.ok&&n.reason==="occupied"){const r=bd(t);r&&(t=r,n=Rl(_.blocks,t,e,_.player.mode,ni))}if(!n.ok&&!_.flags.buildGuideComplete){const r=bd(t);r&&(t=r,n=Rl(_.blocks,t,e,_.player.mode,ni))}if(!n.ok)return Wt(n.reason==="occupied"?"That spot is taken — try next to it":n.reason==="full"?"Build limit reached":"Cannot place — unpause and look at the yellow pad"),!1;_.blocks=n.blocks,i.count-=1,Te.place();const s=mu(_.blocks),o=Ma(t.x,t.z);return _.flags.buildGuideComplete?Wt("Block placed"):(o||s>0?Wt(`Placed on pad! ${Math.min(s,3)}/3 — keep going`):Wt(`Block placed. Aim at the yellow pad for the build guide (${s}/3)`),s>=3&&(_.flags.buildGuideComplete=!0,Wt("Build guide done! Press R when you are Ready to Battle"))),$a(),Ie(),!0}function pb(){const i=gr(),t=At.getWorldPosition(new L);let e=null,n=4;for(const o of _.blocks){const r=o.x+.5,a=o.y+.5,l=o.z+.5,c=new L(r,a,l).sub(t),u=c.length();u>4||(c.normalize(),!(c.dot(i)<.55)&&u<n&&(n=u,e=o.id))}if(!e)return Wt("Look at a block you placed, then press X to remove"),!1;const s=_.blocks.find(o=>o.id===e);if(_.blocks=_.blocks.filter(o=>o.id!==e),s){const o=s.material==="wood"?"block_wood":"block_stone",r=_.player.hotbar.find(a=>a.id===o);r&&(r.count=Math.min(99,r.count+1))}return Te.place(),$a(),Ie(),Wt("Block removed"),!0}function mb(){const i=_.player.hotbar[_.player.selectedHotbar];return i.id==="drumstick"||i.id==="bread"?yp():i.id==="block_wood"||i.id==="block_stone"?_p():(Wt(`Select drumstick (${Qs("drumstick")}) to feed, or Wood/Stone (${Qs("block_wood")}/${Qs("block_stone")}) to build`),!1)}function gb(){if(ni||Si){Tn(null),An("default"),Hi.visible=!1;return}fb();const i=_.player.hotbar[_.player.selectedHotbar],t=cp(3.5,.75);for(const[n,s]of Ki){const o=t&&t.id===n;s.traverse(r=>{const a=r;if(!a.isMesh)return;const l=a.material;l?.emissive&&l.emissive.set(o?"#402010":"#000000"),l&&"emissiveIntensity"in l&&(l.emissiveIntensity=o?.35:0)})}if(t&&i.id==="sword"){An("target"),Tn(t.hostile?"Left-click: attack (hostile!)":"Left-click: attack (still peaceful until hit)");return}const e=up(4.2);if(e&&i.id==="drumstick"&&!e.bonded&&i.count>0){An("use"),Tn(`Right-click: feed ${e.name} (drumstick)`);return}if(e?.bonded&&_.player.mount==="grounded"){An("use"),Tn(`E: ride ${e.name} · Space: fly · land low · E: dismount`);return}if((i.id==="block_wood"||i.id==="block_stone")&&i.count>0){An("use"),Tn("Right-click: place block · X: remove looking-at block");return}if(i.id==="bread"&&_.player.hearts<_.player.maxHearts){An("use"),Tn("Press F: eat bread to heal");return}if(i.id==="axe"){An("use"),Tn("Left-click: chop a nearby tree");return}if(Vn?.nearest(_.player.position.x,_.player.position.z,2.3)){An("use"),Tn("Press F: pick fruit or berries");return}{const n=au();if(Math.hypot(_.player.position.x-n.x,_.player.position.z-n.z)<3.4){An("use"),Tn("Press F: fill your bucket (or take water)");return}}{const n=he(Ce.x,Ce.z),s=ru(n);if(Math.hypot(_.player.position.x-s.x,_.player.position.z-s.z)<2.6){An("use"),Tn("Press F: sleep until morning");return}}if(_.player.mount!=="grounded"){An("use"),Tn("Q: fire breath (lights torches) · E: dismount beside dragon");return}An("default"),Tn(null)}function xb(){const{nearbyIds:i}=_f(Pn(_.monsters),_.player.position,12);i.length?nr(`monster nearby (${i.length})`,!0):nr("clear")}function yb(i){const t=ws.sample();if(t.toggleBag){rr(!$i);return}if(t.pause){if($i){rr(!1);return}const y=document.getElementById("install-panel");if(y&&!y.classList.contains("hidden")){xu();return}const T=document.getElementById("howto");if(T&&!T.classList.contains("hidden")){T.classList.add("hidden");return}if(!ni&&!Si){pu(!0);return}}if(ni||Si||$i||Wo){const y=performance.now()/1e3;for(const[,T]of Bi)ud(T,y,"idle");an.update(i);return}if(t.slot!=null&&(_.player.selectedHotbar=t.slot,Ie()),t.readyBattle)if(!_.flags.buildGuideComplete&&_.blocks.length<3){const y=performance.now();if(y>Ol)Ol=y+4e3,Wt("Place 3 blocks on the yellow pad first — press R again within 4s to skip");else{Ol=0,_.flags.buildGuideComplete=!0;const T=Ic(_.player.mode,"adventure");_.player.mode=T.mode,T.flagsPatch&&(_.flags={..._.flags,...T.flagsPatch}),_.monsters=da(Pn(_.monsters)),uo(_.player.mode),eo(_),to=performance.now()+400,Wt("Skipped build guide — Adventure (monsters peaceful until you hit them)"),Te.ui(),Ie()}}else{const y=Ic(_.player.mode,"adventure");_.player.mode=y.mode,y.flagsPatch&&(_.flags={..._.flags,...y.flagsPatch}),_.monsters=da(Pn(_.monsters)),uo(_.player.mode),eo(_),to=performance.now()+400,Wt("Adventure — monsters stay peaceful until you hit them"),Te.ui(),Ie()}t.recenter&&op();const e=.0022;if(performance.now()>=to){const y=yd((t.lookDx+t.touchLookDx*40)*e),T=yd((t.lookDy+t.touchLookDy*40)*e);_.player.yaw-=y,_.player.pitch-=T}_.player.pitch=bs(_.player.pitch);const n=_.player.mount==="flying",s=_.player.mount==="mounted"||n,o=(t.sprint?9:5)*(n?1.35:1),r=aa(_.player.yaw),a=new L(r.forward.x,0,r.forward.z),l=new L(r.right.x,0,r.right.z),c=new L;if(t.forward&&c.add(a),t.back&&c.sub(a),t.left&&c.sub(l),t.right&&c.add(l),c.lengthSq()>0&&c.normalize().multiplyScalar(o*i),n){const y=he(_.player.position.x,_.player.position.z),T=_.player.position.y-y,E=T>12?1.55:T>6?1.25:1;if(t.jump)_.player.position.y+=6*i;else{const Y=_.player.pitch<-.2?1.2+-_.player.pitch*16:1.2;_.player.position.y-=Y*i}const A=_.player.position.x+c.x*E,S=_.player.position.z+c.z*E,w=ge?ge.softClamp(A,S):{x:A,z:S};_.player.position.x=w.x,_.player.position.z=w.z,_.player.position=Hh(_.player.position);const M=he(_.player.position.x,_.player.position.z),R=Qn(_.player.position.x,_.player.position.z,1/0),N=Math.max(M,Number.isFinite(R)?R:M),U=N+_a;_.player.position.y<U&&(_.player.position.y=U);const F=_.player.position.y-N;F<=_a+.08&&!t.jump?_.player.mount="mounted":_.player.mount=Bv(_.player.mount,F)}else{const y=_.player.position.x+c.x,T=_.player.position.z+c.z,E=ge?ge.softClamp(y,T):{x:y,z:T},A=_.player.position.y;Kr(_.player.position.x,_.player.position.z,A)||!Kr(E.x,E.z,A)?(_.player.position.x=E.x,_.player.position.z=E.z):Kr(E.x,_.player.position.z,A)?Kr(_.player.position.x,E.z,A)||(_.player.position.z=E.z):_.player.position.x=E.x,_.player.position=Hh(_.player.position);const w=s?va.y:Yi,M=Qn(_.player.position.x,_.player.position.z,_.player.position.y-w)+w;if(rn&&M<_.player.position.y-.35&&(rn=!1,Cn=0,ds=!0,Ui=0),rn){if(_.player.position.y=M,t.jump)if(s){_.player.mount=Lc(_.player.mount),Te.mount();{const F=aa(_.player.yaw);an.fireBreath(new L(_.player.position.x,_.player.position.y,_.player.position.z),new L(F.forward.x,.1,F.forward.z))}Wt("Flying! Hold Space to climb · E dismount anytime (soft land)")}else Cn=7.5,rn=!1,ds=!0,Ui=0}else if(Cn-=(Oi?6:22)*i,Oi&&(Cn=Math.max(Cn,-4.5)),Ui=Math.max(Ui,-Cn),_.player.position.y+=Cn*i,_.player.position.y<=M){const Y=ds&&Ui>10;_.player.position.y=M,Cn=0,rn=!0,Oi=!1,Y?(_.player.hearts=Math.max(1,Gh(_.player.hearts,1)),Te.hit(),Wt("Oof — soft landing. Hearts safe (never zero from falls)"),Ie()):ds&&Ui>3&&Te.ui(),ds=!1,Ui=0}const R=Cf(_.player.position.x,_.player.position.z),N=_.player.position.y<M-8||_.player.position.y<-15,U=R!==null&&_.player.position.y<R-.5&&!n;if(N||U){const F=Math.atan2(_.player.position.z,_.player.position.x),Y=Math.max(8,Math.hypot(_.player.position.x,_.player.position.z)-12),B=Math.cos(F)*Y,K=Math.sin(F)*Y,X=he(B,K)+Yi;_.player.position={x:B,y:X,z:K},Cn=0,rn=!0,Oi=!1,Wt("Rescued onto solid ground")}}if(t.toggleMount){if(_.player.mount==="grounded"){const y=qo(4.5);if(y?.bonded){const T=Pc(_.companions,y.id,_.player.mount);T.ok&&(_.player.mount=T.mount,_.player.mountedCompanionId=T.mountedCompanionId,Te.mount(),Wt(`Mounted ${y.name}`))}else Wt("Tame a dragon first — select Drumstick (2), look at it, right-click")}else{const y=_.player.position.y-he(_.player.position.x,_.player.position.z),T=kv(_.player.mount,y);if(T.ok){const E=_.player.mountedCompanionId,A=_.companions.find(w=>w.id===E),S=ep(A?.position.x??_.player.position.x,A?.position.z??_.player.position.z,_.player.yaw,_.companions,null,he);_.player.mount="grounded",_.player.mountedCompanionId=null,_.player.position.x=S.x,_.player.position.z=S.z,T.softLanding||(_.player.position.y=S.y),eo(_),_.player.pitch=bs(_.player.pitch),T.softLanding?(Oi=!0,rn=!1,ds=!0,Cn=-1.5,Wt("Gliding down — landing beside your dragon")):(rn=!0,Wt("Dismounted beside your dragon"))}}Qi()}if(t.attack){const y=_.player.hotbar[_.player.selectedHotbar]?.id;_.player.mount!=="grounded"||(y==="axe"?xp():ub())}if(t.place&&mb(),t.removeBlock&&pb(),t.interact&&(gp()||mp()||pp()||fp()||_.player.hotbar[_.player.selectedHotbar]?.id==="drumstick"&&yp()),_.player.mount!=="grounded"&&(t.fireBreath||t.attack)){const y=aa(_.player.yaw);let T=new L(y.forward.x,-.18,y.forward.z).normalize(),E=new L(_.player.position.x,_.player.position.y-.15,_.player.position.z).add(T.clone().multiplyScalar(.9));const S=(_.player.mountedCompanionId?Bi.get(_.player.mountedCompanionId):void 0)?.getObjectByName("head");S&&(E=S.localToWorld(new L(0,-.02,.58)),T=S.localToWorld(new L(0,.08,3.2)).sub(E.clone()).normalize()),an.setFireCone(!0,E,T),Fl||(Te.fire(),Fl=!0),Math.hypot(_.player.position.x-gs.x,_.player.position.z-gs.z)<12&&(rp=!0,Vo&&K1(Vo)),_.player.hotbar[_.player.selectedHotbar]?.id}else Fl=!1,an.setFireCone(!1);gb(),oM(Pn(_.monsters),_.player.position),xb();const h=rM(Pn(_.monsters),_.player.position,1.6,.35*i);if(h.damageToPlayer>0&&_.player.mode==="adventure"){const y=_.player.hearts;_.player.hearts=Gh(_.player.hearts,h.damageToPlayer),_.player.hearts<y&&(Te.hurt(),y1(document.getElementById("hearts")),Ie(),_.player.hearts<=0&&(_.player.hearts=ei,pr(_),xs(_),Wt("You rested at camp — hearts restored"),Ie()))}const d=_.player.mount!=="grounded";At.position.set(_.player.position.x,_.player.position.y+(n&&!d?.35:0),_.player.position.z),At.rotation.order="YXZ",At.rotation.y=_.player.yaw,At.rotation.x=_.player.pitch,pi&&(At.position.set(pi.x,pi.y,pi.z),At.lookAt(pi.tx,pi.ty,pi.tz));const f=d?.35:.2;Math.abs(At.near-f)>.001&&(At.near=f,At.updateProjectionMatrix()),Xo.visible=!d,Vn&&(Vn.root.visible=!d||pe!=="low");{const y=Ot.getObjectByName("skyDome");y&&y.position.copy(At.position)}Go>0?(Go-=i,Xo.rotation.x=-Math.sin((1-Go/.35)*Math.PI)*.9):Xo.rotation.x=Math.sin(performance.now()/500)*.03;const g=performance.now()/1e3,x=(y,T)=>{y.userData.castOn!==T&&(y.userData.castOn=T,y.traverse(E=>{const A=E;A.isMesh&&A.name!=="blobShadow"&&(A.castShadow=T&&Je.shadows)}))};for(const[y,T]of Bi){const E=_.player.mountedCompanionId===y&&_.player.mount!=="grounded";E&&lp(T);const A=E?0:Math.hypot(T.position.x-_.player.position.x,T.position.z-_.player.position.z),S=pe==="low"?30:Ws.dragonDraw,w=pe==="low"?0:Ws.dragonLod;T.visible=A<S,x(T,A<Ws.dragonShadow);const M=T.getObjectByName("blobShadow");M&&(M.visible=!Je.shadows&&!E&&A<8&&_.player.mount==="grounded");const R=A>w&&_.player.mountedCompanionId!==y;if(T.userData.lodFar!==R){T.userData.lodFar=R;const U=T.getObjectByName("dBody"),F=T.getObjectByName("dLod");U&&F&&(U.visible=!R,F.visible=R)}const N=_.companions.find(U=>U.id===y);if(N&&!E&&(Math.abs(T.position.x-N.position.x)>.001||Math.abs(T.position.z-N.position.z)>.001)){const U=he(N.position.x,N.position.z);T.position.set(N.position.x,Qn(N.position.x,N.position.z,U+.3)+.02,N.position.z)}}for(const[y,T]of Ki){const E=_.monsters.find(N=>N.id===y),A=Math.hypot(T.position.x-_.player.position.x,T.position.z-_.player.position.z),S=pe==="low"?26:Ws.monsterDraw,w=pe==="low"?0:Ws.monsterLod;T.visible=!!E?.alive&&A<S,x(T,A<Ws.monsterShadow);const M=T.getObjectByName("blobShadow");M&&(M.visible=!Je.shadows&&A<8&&_.player.mount==="grounded");const R=A>w&&!E?.hostile;if(T.userData.lodFar!==R){T.userData.lodFar=R;for(const N of T.children)N.name==="mLod"?N.visible=R:N.name!=="blobShadow"&&(N.visible=!R)}}for(const[y,T]of Bi){if(!T.visible)continue;const E=_.player.mountedCompanionId===y,A=E&&n?"fly":E&&s?"walk":n&&E?"glide":"idle";T.userData.lodFar||ud(T,g,A);const S=_.companions.find(M=>M.id===y),w=Do.get(y);w!==void 0&&!E?T.rotation.y=w+Math.sin(g*.4)*.06:S?.bonded&&!E&&(T.rotation.y=Math.sin(g*.7)*.2)}for(const[y,T]of Ki){if(!T.visible)continue;const A=_.monsters.find(S=>S.id===y)?.hostile?"attack":"idle";f1(T,g,A),T.position.y=he(T.position.x,T.position.z)}const p=Ot.getObjectByName("chimneySmoke");p&&p.children.forEach((y,T)=>{const E=(g*.25+T/y.parent.children.length)%1;y.position.y=4.6+E*1.8,y.position.x=-1.7+Math.sin(g*.6+T)*.15+E*.5,y.scale.setScalar(.8+E*1.6);const A=y.material;A&&"opacity"in A&&(A.transparent=!0,A.opacity=.38*(1-E),A.depthWrite=!1)});const m=Ot.getObjectByName("waterSurface");if(m){const y=m.material;y.opacity=.78+Math.sin(g*1.5)*.04}if(an.update(i),!n&&c.lengthSq()>0&&performance.now()-_d>280&&(_d=performance.now(),an.footDust(new L(_.player.position.x,he(_.player.position.x,_.player.position.z),_.player.position.z))),_.player.mountedCompanionId){const y=_.companions.find(T=>T.id===_.player.mountedCompanionId);y&&(y.position={x:_.player.position.x,y:0,z:_.player.position.z})}const v=ln(_.player.position.x,_.player.position.z);Ot.background=new _t(v.skyTint);const b=(pe==="low"?1.25:pe==="high"?.9:1)*v.fogDensity;Ot.fog&&Ot.fog.isFogExp2&&(Ot.fog.color.set(v.fogColor),Ot.fog.density=Math.min(b*.55,.005));{const y=Math.hypot(_.player.position.x,_.player.position.z),T=[...If,...Df];let E=T[0],A=1/0;for(const Y of T){const B=Math.hypot(_.player.position.x-Y.x,_.player.position.z-Y.z);B<A&&(A=B,E=Y)}const S=document.getElementById("nav-biome");if(S){const Y=A<80?` · ${E.label} ${Math.round(A)}m`:"";S.textContent=`${v.label} · ${Math.round(y)} m from home${Y}`}const w=Math.atan2(-_.player.position.x,-_.player.position.z),M=Math.atan2(E.x-_.player.position.x,E.z-_.player.position.z),R=A<60,N=(R?M:w)-_.player.yaw,U=document.getElementById("nav-compass");U&&(U.style.transform=`rotate(${N*180/Math.PI}deg)`,U.title=R?E.label:"Home"),y>40&&A>25?nr(`Home ${Math.round(y)}m`,!1):A<25&&nr(`${E.label}`,!1);const F=Ot.getObjectByName("terrain");if(F){GM(F,{x:_.player.position.x,z:_.player.position.z},T);const Y=F.getObjectByName("castleLandmark");Y&&n1(Y,_.player.position.x,_.player.position.z,Ya);{const K=UM(he(Ce.x,Ce.z)),X=Math.hypot(_.player.position.x-K.x,_.player.position.z-K.z);sr.position.copy(K),sr.intensity=X<12?9*(.92+Math.sin(performance.now()/90)*.04+Math.sin(performance.now()/37)*.04):0}const B=F.getObjectByName("cabinDoor");if(B){const K=new L;B.getWorldPosition(K);const X=Math.hypot(_.player.position.x-K.x,_.player.position.z-K.z);kM(B,X<3.2?1:0,i)}}}if(jn){const y=jn.geometry.attributes.position,T=y.array,E=xi==="snow"?4:12;for(let A=0;A<T.length;A+=3)T[A+1]-=E*i,T[A+1]<0&&(T[A+1]=28),T[A]+=_.player.position.x*0;jn.position.set(_.player.position.x,0,_.player.position.z),y.needsUpdate=!0}performance.now()-gd>8e3&&(gd=performance.now(),Ms(_))}window.addEventListener("resize",()=>{At.aspect=window.innerWidth/window.innerHeight,At.updateProjectionMatrix(),je.setSize(window.innerWidth,window.innerHeight)});qa.addEventListener("contextmenu",i=>i.preventDefault());function vp(){const i=document.getElementById("install-panel"),t=document.getElementById("install-offline-status");if(t){const e=document.getElementById("offline-pill")?.textContent||"unknown";t.textContent=`Offline status: ${e}. Bookmark this page after Offline ready. ZIP is a static backup — not a file:// app.`}fr.classList.add("hidden"),i?.classList.remove("hidden"),i?.querySelector("button")?.focus()}function xu(){document.getElementById("install-panel")?.classList.add("hidden")}document.getElementById("btn-install-info")?.addEventListener("click",vp);document.getElementById("btn-install-pause")?.addEventListener("click",vp);document.getElementById("btn-install-close")?.addEventListener("click",()=>xu());window.addEventListener("keydown",i=>{if(i.code!=="Escape")return;const t=document.getElementById("install-panel");t&&!t.classList.contains("hidden")&&(i.preventDefault(),xu())});function ba(){At.position.set(_.player.position.x,_.player.position.y,_.player.position.z),At.rotation.order="YXZ",At.rotation.y=_.player.yaw,At.rotation.x=_.player.pitch}document.getElementById("btn-start").onclick=async()=>{await Te.unlock(),np.classList.add("hidden"),!_.flags.readyToBattleAcknowledged&&_.blocks.length===0&&!_.companions.some(i=>i.bonded)&&(pr(_),xs(_),Qi(),or()),eo(_),_.player.pitch=bs(mr),ba(),to=performance.now()+900,ws.armPointerLockIgnore(),pu(!1),ws.requestLock(),_.flags.tutorialSeen=!0,_.flags.welcomeShownOnce?Wt("Welcome back — pad · pets · explore",1800):(Wt("Welcome! Build on the yellow pad, feed a dragon, then explore the cabin, stable, tower & castle.",4200),_.flags.welcomeShownOnce=!0),Ie(),window.setTimeout(()=>{Math.abs(_.player.pitch+.18)>.2&&(_.player.pitch=-.18,ba())},500)};document.getElementById("btn-howto").onclick=()=>{fr.classList.remove("hidden")};document.getElementById("btn-howto-close").onclick=()=>{fr.classList.add("hidden")};document.getElementById("btn-help").onclick=()=>{fr.classList.remove("hidden")};document.getElementById("btn-resume").onclick=()=>{pu(!1),ws.requestLock()};document.getElementById("btn-ready").onclick=()=>{_.player.mode="adventure",_.flags.readyToBattleAcknowledged=!0,_.monsters=da(Pn(_.monsters)),uo("adventure"),Wt("Ready! Monsters stay peaceful until you attack")};document.getElementById("btn-safe").onclick=()=>{_.player.mode="safe_build",uo("safe_build"),Wt("Safe Build — combat disabled")};document.getElementById("btn-bag")?.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),rr(!$i)});document.getElementById("btn-inv-close")?.addEventListener("click",()=>rr(!1));document.getElementById("btn-save").onclick=async()=>{const i=document.getElementById("save-msg");try{await Ms(_),Te.save(),i&&(i.textContent=`Saved locally · v${Xa}`)}catch(t){i&&(i.textContent=`Save failed: ${t instanceof Error?t.message:"error"}`)}};document.getElementById("btn-export").onclick=()=>{const i=new Blob([Kv(_)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download="dragon-adventures-save.json",t.click()};document.getElementById("import-file").addEventListener("change",async i=>{const t=i.target.files?.[0];if(!t)return;const e=await t.text(),s=Qv(e,_),o=document.getElementById("save-msg");if(!s.ok){o&&(o.textContent=s.error+" Previous save kept.");return}_=s.state,or(),Qi(),$a(),Ie(),await Ms(_),o&&(o.textContent="Import OK after validation.")});document.getElementById("btn-mute").onclick=i=>{Te.muted=!Te.muted,_.settings.muted=Te.muted,i.target.textContent=`Mute: ${Te.muted?"On":"Off"}`};function Mp(i){return`Quality: ${i[0].toUpperCase()}${i.slice(1)}`}function _b(){mi||(mi=new X1(pe),Ot.add(mi.root)),Vn||(Vn=new j1(_.pickedIds??[]),Ot.add(Vn.root)),Vo||(Vo=J1(),Ot.add(Vo)),ge&&fu(ge.root,_.choppedTrees??[])}function bp(){const i=Ot.getObjectByName("terrain");i&&Ot.remove(i);const t=Ot.getObjectByName("skyDome");t&&Ot.remove(t),ya=Hf(Ot,pe),Ot.add(ya),ge&&(Ot.remove(ge.root),ge.dispose()),ge=new kf(pe),Ot.add(ge.root),_.choppedTrees?.length&&fu(ge.root,_.choppedTrees)}function wp(i,t=!0){_.settings.quality=i;for(const n of[...Bi.values(),...Ki.values()])delete n.userData.castOn;pe=Ga(i,xa.suggested),Je=Va(pe),Wa(je,ii,Je),an.setBudget(Je.particles),(async()=>{try{await vf(pe)}catch{}bp(),Qi();const n=Xf(Ot);window.__DA_PERF={tier:pe,setting:i,triangles:n.triangles,drawCallsApprox:n.meshes,textures:n.textures,note:"NOT a Chromebook measurement; headless/proxy stats only"}})(),t&&Ms(_);const e=document.getElementById("btn-quality");e&&(e.textContent=Mp(i)+" (live)")}window.__DA_SET_QUALITY=i=>{wp(i,!0)};document.getElementById("btn-quality").onclick=()=>{const i=["low","medium","high","auto"],t=i.indexOf(_.settings.quality);wp(i[(t+1)%i.length])};document.getElementById("btn-weather").onclick=i=>{xi=xi==="off"?"rain":xi==="rain"?"snow":"off",rb(),i.target.textContent=`Weather: ${xi[0].toUpperCase()}${xi.slice(1)}`};document.getElementById("btn-appear").onclick=()=>{document.getElementById("appear-panel").classList.toggle("hidden")};for(const[i,t]of[["col-hair","hair"],["col-top","top"],["col-pants","trousers"],["col-shoes","shoes"]])document.getElementById(i)?.addEventListener("input",e=>{_.player.appearance[t]=e.target.value});function vb(){At.position.clone();const i=new L;At.getWorldDirection(i);const t=new lo,e=new Ft().multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse);t.setFromProjectionMatrix(e);let n=0;for(const[,a]of Bi)a.visible&&t.containsPoint(a.position)&&n++;let s=0;for(const[,a]of Ki)a.visible&&t.containsPoint(a.position)&&s++;const o=Ot.getObjectByName("homeCabin");let r=!1;if(o){const a=new L;if(o.getWorldPosition(a),r=t.containsPoint(a),!r){for(const[l,c,u]of[[2,1,2],[-2,1,2],[0,2,3],[0,1,-2],[0,3,0]])if(t.containsPoint(new L(a.x+l,a.y+c,a.z+u))){r=!0;break}}if(!r){const l=a.clone().sub(At.position),c=new L;At.getWorldDirection(c),l.length()<45&&l.normalize().dot(c)>.35&&(r=!0)}}window.__DA_SCENE_INFO={dragons:n,monsters:s,house:r,pitch:_.player.pitch,yaw:_.player.yaw,quality:_.settings.quality,resolvedTier:pe}}let zl=performance.now(),wd=0;function Sp(i){const t=Math.min(.05,(i-zl)/1e3),e=i-zl;if(zl=i,xa.push(e),_.settings.quality==="auto"&&i-wd>2500){wd=i;const a=Ga("auto",xa.suggested);a!==pe&&(pe=a,Je=Va(pe),Wa(je,ii,Je),an.setBudget(Je.particles))}if(yb(t),mi&&!Si&&mi.update(t,_.player.position.x,_.player.position.z),jM(performance.now()/1e3),_.player.timeOfDay=((_.player.timeOfDay??8)+t/240)%24,Math.floor(performance.now()/400)%2===0&&gu(),ge&&!Si){const a=new lo,l=new Ft().multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse);a.setFromProjectionMatrix(l),ge.update(_.player.position.x,_.player.position.z,a,pe==="low"?3:5),_.choppedTrees?.length&&fu(ge.root,_.choppedTrees);const c=he(_.player.position.x,_.player.position.z),u=Qn(_.player.position.x,_.player.position.z,1/0),h=Math.max(c,Number.isFinite(u)?u:c);if(_.player.mount==="flying")_.player.position.y<h+_a&&(_.player.position.y=h+_a);else if(rn){const d=_.player.mount!=="grounded"?va.y:Yi,f=Qn(_.player.position.x,_.player.position.z,_.player.position.y-d)+d;Math.abs(_.player.position.y-f)>.6&&_.player.position.y<f+2&&(_.player.position.y=f)}window.__DA_STREAM={...ge.stats,tier:pe,note:"NOT a Chromebook measurement"}}{const a=["stableRest0","stableRest1","stableRest2"],l=Ot.getObjectByName("terrain");if(l){let c=0;for(const u of _.companions){if(!u.bonded||_.player.mountedCompanionId===u.id){Do.delete(u.id);continue}const h=Math.hypot(u.position.x-xn.x,u.position.z-xn.z);if(h>=14&&Do.delete(u.id),h<14&&c<a.length){const d=l.getObjectByName(a[c++]);if(d){const f=new L;d.getWorldPosition(f);const g=1-Math.exp(-t*1.6);u.position.x+=(f.x-u.position.x)*g,u.position.z+=(f.z-u.position.z)*g,Math.hypot(f.x-u.position.x,f.z-u.position.z)<.6&&Do.set(u.id,xn.ry)}}}}}vb();const n=qa,s=qo(40),o=s?ur(s.position,_.player.position):999;let r=_.player.yaw;if(s){const a=s.position.x-_.player.position.x,l=s.position.z-_.player.position.z;r=Math.atan2(-a,-l)}n.__gameCamProbe={x:_.player.position.x,y:_.player.position.y,z:_.player.position.z,yaw:_.player.yaw,pitch:_.player.pitch,mount:_.player.mount,nearestDragonDist:o,faceYaw:r,pets:_.companions.filter(a=>a.bonded).length,sceneStats:()=>{const a={};for(const l of Ot.children){const c=(u,h)=>{if(!u.visible)return;const d=u;if(d.isMesh){const f=a[h]??={vis:0,cast:0};f.vis++,d.castShadow&&f.cast++}for(const f of u.children)c(f,h==="terrain"?`terrain/${f.name||"anon"}`:h)};if(l.name==="terrain")for(const u of l.children)c(u,`terrain/${u.name||"anon"}`);else l.name==="streamedWorld"?l.traverse(u=>{const h=u;if(h.isMesh&&u.visible&&u.parent?.visible){const d=a["stream/"+(u.name||"anon")]??={vis:0,cast:0};d.vis++,h.castShadow&&d.cast++}}):c(l,l.name||l.type)}return a},dragonPositions:()=>_.companions.filter(a=>a.kind==="dragon").sort((a,l)=>Number(l.bonded)-Number(a.bonded)).map(a=>({x:a.position.x,z:a.position.z,bonded:a.bonded,inStall:Do.has(a.id)})),blocks:_.blocks.length,buildGuideComplete:_.flags.buildGuideComplete,mode:_.player.mode,selectedId:_.player.hotbar[_.player.selectedHotbar]?.id??"empty",inventory:()=>[..._.player.hotbar,..._.player.inventory],bagOpen:()=>$i,hunger:()=>_.player.hunger,timeOfDay:()=>_.player.timeOfDay,choppedTrees:()=>[..._.choppedTrees??[]],pickedIds:()=>[..._.pickedIds??[]],fountain:()=>au(),bed:()=>ru(he(Ce.x,Ce.z)),wildlifeNear:a=>{const l=mi?.nearest(a,_.player.position.x,_.player.position.z);return l?{x:l.x,y:l.y,z:l.z,state:l.state}:null},wildlifeList:a=>(mi?.critters||[]).filter(l=>l.kind===a).map(l=>({x:l.x,y:l.y,z:l.z,state:l.state})),pinWildlife:(a,l,c)=>{if(!mi)return null;const u=l??_.player.position.x,h=c??_.player.position.z,d=mi.nearest(a,u,h);return d?(d.timer=40,d.pinned=!0,a==="bird"?(d.state="perch",d.perchY=4.8,d.y=4.8):d.state="idle",{x:d.x,y:d.y,z:d.z,state:d.state}):null},campfire:()=>({...gs,lit:rp}),fireConeOn:()=>an.isFireConeOn(),fireConeStats:()=>{const a=an.isFireConeOn(),l=Ot.getObjectByName("fireCone");if(!a||!l||!l.visible)return{on:!1,count:0,visible:0,inFrustum:!1};const c=l.geometry.attributes.position,u=c.count;At.updateMatrixWorld();const h=new Ft().multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),d=new lo().setFromProjectionMatrix(h);let f=0;const g=new L;for(let x=0;x<u;x++)g.fromBufferAttribute(c,x),d.containsPoint(g)&&f++;return{on:!0,count:u,visible:f,inFrustum:f>0}},mounted:()=>_.player.mount!=="grounded",mountState:()=>_.player.mount,lineOfSight:(a,l,c)=>{const u=At.position.clone(),d=new L(a,l,c).clone().sub(u),f=d.length();if(f<.2)return{dist:f,blocked:!1,hit:null};d.normalize();const x=new df(u,d,.15,Math.max(.2,f-.25)).intersectObjects(Ot.children,!0),p=new Set(["rabbits","foxes","birds","wildlife","fireCone","fx","fpArm","skyDome"]),m=x.find(v=>{let b=v.object;for(;b;){if(p.has(b.name))return!1;b=b.parent}return!0});return{dist:f,blocked:!!m,hit:m?{name:m.object.name,parent:m.object.parent?.name||"",d:m.distance}:null}},setPhotoCam:(a,l,c,u,h,d)=>{pi={x:a,y:l,z:c,tx:u,ty:h,tz:d}},clearPhotoCam:()=>{pi=null},openBag:()=>(rr(!0),$i),chopAhead:()=>xp(),pickAhead:()=>pp(),fillFountain:()=>mp(),sleepNow:()=>gp(),eatNow:()=>fp(),selectItem:a=>{const l=_.player.hotbar.findIndex(c=>c.id===a);return l<0?!1:(_.player.selectedHotbar=l,Ie(),!0)},biome:ln(_.player.position.x,_.player.position.z).primary,biomeLabel:ln(_.player.position.x,_.player.position.z).label,distHome:Math.hypot(_.player.position.x,_.player.position.z),stream:ge?.stats??null,castle:{x:Md.x,z:Md.z,plateauY:Ba()},landmarks:()=>[...If,...Df],towerPathWorld:()=>OM().map(a=>fa(Hn,a.x,a.z)),cabinPose:()=>({...Ce}),stablePose:()=>({...xn}),towerPose:()=>({...Hn}),localToWorld:(a,l,c)=>fa(a==="cabin"?Ce:a==="stable"?xn:Hn,l,c),groundAtFeet:(a,l,c)=>Qn(a,l,c),onGround:()=>rn,lights:()=>({cabin:sr.intensity,hall:Ya.intensity}),castleNearLoaded:()=>!!Ot.getObjectByName("castleNear")&&Ot.getObjectByName("castleNear").visible,cabinInteriorLoaded:()=>!!Ot.getObjectByName("cabin-interior")&&Ot.getObjectByName("cabin-interior").visible,castleScreenBBox:()=>ib(),treesNear:a=>sb(a??25),nearestTrees:()=>ob(12),setYaw:a=>{_.player.yaw=a,At.rotation.order="YXZ",At.rotation.y=a},setPitch:a=>{_.player.pitch=bs(a),At.rotation.order="YXZ",At.rotation.x=_.player.pitch},recenterLook:()=>op(),pitchLimits:()=>({min:ip,max:sp,def:mr}),faceNearestMonster:()=>{const a=lb(40);if(!a)return!1;const l=a.position.x-_.player.position.x,c=a.position.z-_.player.position.z;_.player.yaw=Math.atan2(-l,-c),_.player.pitch=-.15,At.rotation.order="YXZ",At.rotation.y=_.player.yaw,At.rotation.x=_.player.pitch;const u=Math.hypot(l,c);return u>2.8&&(_.player.position.x=a.position.x-l/u*2.2,_.player.position.z=a.position.z-c/u*2.2,xs(_),At.position.set(_.player.position.x,_.player.position.y,_.player.position.z)),!0},teleportTo:(a,l,c)=>{_.player.position.x=a,_.player.position.z=l;const u=(c===void 0?he(a,l):Qn(a,l,c))+Yi;return _.player.position.y=u,rn=!0,Cn=0,Oi=!1,At.position.set(a,u,l),ge?.flushAround(a,l,2),{x:a,y:u,z:l,biome:ln(a,l).primary,label:ln(a,l).label}},forceFallFrom:a=>{const l=he(_.player.position.x,_.player.position.z);return _.player.position.y=l+a,rn=!1,ds=!0,Oi=!1,Cn=0,Ui=0,At.position.y=_.player.position.y,!0},hearts:()=>_.player.hearts,forceUndergroundThenSnap:()=>(_.player.position.y=-20,xs(_),At.position.set(_.player.position.x,_.player.position.y,_.player.position.z),_.player.position.y),pressReady:()=>{const a=Ic(_.player.mode,"adventure");return _.player.mode=a.mode,a.flagsPatch&&(_.flags={..._.flags,...a.flagsPatch}),_.flags.buildGuideComplete=!0,_.monsters=da(Pn(_.monsters)),uo(_.player.mode),eo(_),to=performance.now()+400,_.player.mode},mountNearest:()=>{const a=qo(10);if(!a)return!1;a.bonded=!0;const l=Pc(_.companions,a.id,"grounded");return l.ok?(_.player.mount=l.mount,_.player.mountedCompanionId=l.mountedCompanionId,Qi(),!0):!1},startFlight:()=>(_.player.mount=Lc(_.player.mount),_.player.mount==="flying"),dismountNow:()=>{const a=_.player.mountedCompanionId,l=_.companions.find(u=>u.id===a),c=ep(l?.position.x??_.player.position.x,l?.position.z??_.player.position.z,_.player.yaw,_.companions,null,he);return _.player.position={x:c.x,y:c.y,z:c.z},_.player.mount="grounded",_.player.mountedCompanionId=null,rn=!0,Oi=!1,Qi(),At.position.set(c.x,c.y,c.z),{x:c.x,y:c.y,z:c.z,dragon:l?{x:l.position.x,z:l.position.z}:null}},setFlyHeight:a=>{if(_.player.mount==="grounded"){const l=qo(10);if(l){l.bonded=!0;const c=Pc(_.companions,l.id,"grounded");c.ok&&(_.player.mount=c.mount,_.player.mountedCompanionId=c.mountedCompanionId)}_.player.mount=Lc(_.player.mount==="grounded"?"mounted":_.player.mount)}return _.player.mount="flying",_.player.position.y=a,rn=!1,At.position.y=a,{y:_.player.position.y,mount:_.player.mount}},pickupsList:()=>Vn?Vn.items.filter(a=>!a.taken).map(a=>({id:a.id,kind:a.kind,x:a.x,z:a.z})):[],padProgress:()=>mu(_.blocks),placeBlockOnce:()=>_p(),teleportNearPad:()=>{_.player.position.x=xe.x,_.player.position.z=xe.z+1.2,xs(_),_.player.yaw=Math.atan2(-(xe.x-_.player.position.x),-(xe.z-_.player.position.z)),_.player.pitch=-.55,At.rotation.order="YXZ",At.rotation.y=_.player.yaw,At.rotation.x=_.player.pitch,At.position.set(_.player.position.x,_.player.position.y,_.player.position.z)}},je.render(Ot,At),window.__DA_RENDER_INFO={calls:je.info.render.calls,triangles:je.info.render.triangles,points:je.info.render.points,lines:je.info.render.lines,geometries:je.info.memory.geometries,textures:je.info.memory.textures},requestAnimationFrame(Sp)}ab().then(()=>requestAnimationFrame(Sp));export{S1 as _};
