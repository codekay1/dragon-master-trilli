(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vu="170",H0=0,hd=1,G0=2,Ah=1,Ch=2,Ei=3,Qn=0,un=1,Ye=2,to=0,ps=1,hr=2,pd=3,md=4,V0=5,So=100,W0=101,X0=102,$0=103,Y0=104,q0=200,j0=201,Z0=202,K0=203,_c=204,vc=205,J0=206,Q0=207,tm=208,em=209,nm=210,im=211,om=212,sm=213,rm=214,Mc=0,bc=1,wc=2,Ms=3,Sc=4,Ec=5,Tc=6,Ac=7,Rh=0,am=1,lm=2,eo=0,cm=1,um=2,dm=3,fm=4,hm=5,pm=6,Ph=7,Ih=300,bs=301,ws=302,Cc=303,Rc=304,Ja=306,ui=1e3,$e=1001,Pc=1002,Sn=1003,mm=1004,Br=1005,ri=1006,Cl=1007,To=1008,zi=1009,Lh=1010,Dh=1011,pr=1012,Mu=1013,Io=1014,ai=1015,Cr=1016,bu=1017,wu=1018,Ss=1020,Nh=35902,Uh=1021,zh=1022,qn=1023,kh=1024,Fh=1025,ms=1026,Es=1027,Su=1028,Eu=1029,Oh=1030,Tu=1031,Au=1033,Ma=33776,ba=33777,wa=33778,Sa=33779,Ic=35840,Lc=35841,Dc=35842,Nc=35843,Uc=36196,zc=37492,kc=37496,Fc=37808,Oc=37809,Bc=37810,Hc=37811,Gc=37812,Vc=37813,Wc=37814,Xc=37815,$c=37816,Yc=37817,qc=37818,jc=37819,Zc=37820,Kc=37821,Ea=36492,Jc=36494,Qc=36495,Bh=36283,tu=36284,eu=36285,nu=36286,gm=3200,xm=3201,Hh=0,ym=1,Ci="",ke="srgb",Ls="srgb-linear",Qa="linear",ge="srgb",Vo=7680,gd=519,_m=512,vm=513,Mm=514,Gh=515,bm=516,wm=517,Sm=518,Em=519,xd=35044,yd="300 es",Ii=2e3,Na=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _d=1234567;const er=Math.PI/180,mr=180/Math.PI;function Fo(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Ve(n,t,e){return Math.max(t,Math.min(e,n))}function Cu(n,t){return(n%t+t)%t}function Tm(n,t,e,i,o){return i+(n-t)*(o-i)/(e-t)}function Am(n,t,e){return n!==t?(e-n)/(t-n):0}function nr(n,t,e){return(1-e)*n+e*t}function Cm(n,t,e,i){return nr(n,t,1-Math.exp(-e*i))}function Rm(n,t=1){return t-Math.abs(Cu(n,t*2)-t)}function Pm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Im(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Lm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Dm(n,t){return n+Math.random()*(t-n)}function Nm(n){return n*(.5-Math.random())}function Um(n){n!==void 0&&(_d=n);let t=_d+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zm(n){return n*er}function km(n){return n*mr}function Fm(n){return(n&n-1)===0&&n!==0}function Om(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hm(n,t,e,i,o){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+i)/2),u=r((t+i)/2),d=s((t-i)/2),f=r((t-i)/2),h=s((i-t)/2),g=r((i-t)/2);switch(o){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function as(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gr={DEG2RAD:er,RAD2DEG:mr,generateUUID:Fo,clamp:Ve,euclideanModulo:Cu,mapLinear:Tm,inverseLerp:Am,lerp:nr,damp:Cm,pingpong:Rm,smoothstep:Pm,smootherstep:Im,randInt:Lm,randFloat:Dm,randFloatSpread:Nm,seededRandom:Um,degToRad:zm,radToDeg:km,isPowerOfTwo:Fm,ceilPowerOfTwo:Om,floorPowerOfTwo:Bm,setQuaternionFromProperEuler:Hm,normalize:sn,denormalize:as};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*o+t.x,this.y=s*o+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,o,s,r,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,l,c)}set(t,e,i,o,s,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=o,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=o[0],p=o[3],m=o[6],v=o[1],b=o[4],_=o[7],T=o[2],E=o[5],A=o[8];return s[0]=r*y+a*v+l*T,s[3]=r*p+a*b+l*E,s[6]=r*m+a*_+l*A,s[1]=c*y+u*v+d*T,s[4]=c*p+u*b+d*E,s[7]=c*m+u*_+d*A,s[2]=f*y+h*v+g*T,s[5]=f*p+h*b+g*E,s[8]=f*m+h*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-i*s*u+i*a*l+o*s*c-o*r*l}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*r-a*c,f=a*l-u*s,h=c*s-r*l,g=e*d+i*f+o*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(o*c-u*i)*y,t[2]=(a*i-o*r)*y,t[3]=f*y,t[4]=(u*e-o*l)*y,t[5]=(o*s-a*e)*y,t[6]=h*y,t[7]=(i*l-c*e)*y,t[8]=(r*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-o*c,o*l,-o*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Rl.makeScale(t,e)),this}rotate(t){return this.premultiply(Rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new Qt;function Vh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gm(){const n=xr("canvas");return n.style.display="block",n}const vd={};function Qs(n){n in vd||(vd[n]=!0,console.warn(n))}function Vm(n,t,e){return new Promise(function(i,o){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Wm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=Di(n.r),n.g=Di(n.g),n.b=Di(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=gs(n.r),n.g=gs(n.g),n.b=gs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ci?Qa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Md=[.64,.33,.3,.6,.15,.06],bd=[.2126,.7152,.0722],wd=[.3127,.329],Sd=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ed=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Ls]:{primaries:Md,whitePoint:wd,transfer:Qa,toXYZ:Sd,fromXYZ:Ed,luminanceCoefficients:bd,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Md,whitePoint:wd,transfer:ge,toXYZ:Sd,fromXYZ:Ed,luminanceCoefficients:bd,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let Wo;class $m{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wo===void 0&&(Wo=xr("canvas")),Wo.width=t.width,Wo.height=t.height;const i=Wo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Wo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=Di(s[r]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ym=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(Pl(o[r].image)):s.push(Pl(o[r]))}else s=Pl(o);i.url=s}return e||(t.images[this.uuid]=i),i}}function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$m.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;class qe extends Ds{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=$e,o=$e,s=ri,r=To,a=qn,l=zi,c=qe.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Fo(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Ih;qe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,o=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*o+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*o+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*o+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*o+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,s;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,_=(h+1)/2,T=(m+1)/2,E=(u+f)/4,A=(d+y)/4,S=(g+p)/4;return b>_&&b>T?b<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(b),o=E/i,s=A/i):_>T?_<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(_),i=E/o,s=S/o):T<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(T),i=A/s,o=S/s),this.set(i,o,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jm extends Ds{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const o={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qe(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,o=t.textures.length;i<o;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends jm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Xh extends qe{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zm extends qe{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,s,r,a){let l=i[o+0],c=i[o+1],u=i[o+2],d=i[o+3];const f=s[r+0],h=s[r+1],g=s[r+2],y=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==f||c!==h||u!==g){let p=1-a;const m=l*f+c*h+u*g+d*y,v=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const T=Math.sqrt(b),E=Math.atan2(T,m*v);p=Math.sin(p*E)/T,a=Math.sin(a*E)/T}const _=a*v;if(l=l*p+f*_,c=c*p+h*_,u=u*p+g*_,d=d*p+y*_,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,o,s,r){const a=i[o],l=i[o+1],c=i[o+2],u=i[o+3],d=s[r],f=s[r+1],h=s[r+2],g=s[r+3];return t[e]=a*g+u*d+l*h-c*f,t[e+1]=l*g+u*f+c*d-a*h,t[e+2]=c*g+u*h+a*f-l*d,t[e+3]=u*g-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(o/2),d=a(s/2),f=l(i/2),h=l(o/2),g=l(s/2);switch(r){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(r-o)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(o+r)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(o+r)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(r-o)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+r*a+o*c-s*l,this._y=o*u+r*l+s*a-i*c,this._z=s*u+r*c+i*l-o*a,this._w=r*u-i*a-o*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,s=this._z,r=this._w;let a=r*t._w+i*t._x+o*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=o,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*r+e*this._w,this._x=h*i+e*this._x,this._y=h*o+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=o*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Td.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*o,this.y=s[1]*e+s[4]*i+s[7]*o,this.z=s[2]*e+s[5]*i+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*o+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*o+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*o+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*o-a*i),u=2*(a*e-s*o),d=2*(s*i-r*e);return this.x=e+l*c+r*d-a*u,this.y=i+l*u+a*c-s*d,this.z=o+l*d+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*o,this.y=s[1]*e+s[5]*i+s[9]*o,this.z=s[2]*e+s[6]*i+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=o*l-s*a,this.y=s*r-i*l,this.z=i*a-o*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Il=new I,Td=new dn;class Un{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Gn):Gn.fromBufferAttribute(s,r),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Gr.subVectors(this.max,Gs),Xo.subVectors(t.a,Gs),$o.subVectors(t.b,Gs),Yo.subVectors(t.c,Gs),Hi.subVectors($o,Xo),Gi.subVectors(Yo,$o),ho.subVectors(Xo,Yo);let e=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-ho.z,ho.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,ho.z,0,-ho.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-ho.y,ho.x,0];return!Ll(e,Xo,$o,Yo,Gr)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,Xo,$o,Yo,Gr))?!1:(Vr.crossVectors(Hi,Gi),e=[Vr.x,Vr.y,Vr.z],Ll(e,Xo,$o,Yo,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _i=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Hr=new Un,Xo=new I,$o=new I,Yo=new I,Hi=new I,Gi=new I,ho=new I,Gs=new I,Gr=new I,Vr=new I,po=new I;function Ll(n,t,e,i,o){for(let s=0,r=n.length-3;s<=r;s+=3){po.fromArray(n,s);const a=o.x*Math.abs(po.x)+o.y*Math.abs(po.y)+o.z*Math.abs(po.z),l=t.dot(po),c=e.dot(po),u=i.dot(po);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Km=new Un,Vs=new I,Dl=new I;class Ns{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Km.setFromPoints(t).getCenter(i);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(Vs,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Dl)),this.expandByPoint(Vs.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new I,Nl=new I,Wr=new I,Vi=new I,Ul=new I,Xr=new I,zl=new I;class Ru{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){Nl.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(Nl);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Wr),a=Vi.dot(this.direction),l=-Vi.dot(Wr),c=Vi.lengthSq(),u=Math.abs(1-r*r);let d,f,h,g;if(u>0)if(d=r*l-a,f=r*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,h=d*(d+r*f+2*a)+f*(r*d+f+2*l)+c}else f=s,d=Math.max(0,-(r*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(r*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(r*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=r>0?-s:s,d=Math.max(0,-(r*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),o&&o.copy(Nl).addScaledVector(Wr,f),h}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const i=vi.dot(this.direction),o=vi.dot(vi)-i*i,s=t.radius*t.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,o=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,o=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||s>o||((s>i||isNaN(i))&&(i=s),(r<o||isNaN(o))&&(o=r),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>o)||((a>i||i!==i)&&(i=a),(l<o||o!==o)&&(o=l),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,i,o,s){Ul.subVectors(e,t),Xr.subVectors(i,t),zl.crossVectors(Ul,Xr);let r=this.direction.dot(zl),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Vi.subVectors(this.origin,t);const l=a*this.direction.dot(Xr.crossVectors(Vi,Xr));if(l<0)return null;const c=a*this.direction.dot(Ul.cross(Vi));if(c<0||l+c>r)return null;const u=-a*Vi.dot(zl);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(t,e,i,o,s,r,a,l,c,u,d,f,h,g,y,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,l,c,u,d,f,h,g,y,p)}set(t,e,i,o,s,r,a,l,c,u,d,f,h,g,y,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=o,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/qo.setFromMatrixColumn(t,0).length(),s=1/qo.setFromMatrixColumn(t,1).length(),r=1/qo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,s=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(o),c=Math.sin(o),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=r*u,h=r*d,g=a*u,y=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+h*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*u,h=l*d,g=c*u,y=c*d;e[0]=f+y*a,e[4]=g*a-h,e[8]=r*c,e[1]=r*d,e[5]=r*u,e[9]=-a,e[2]=h*a-g,e[6]=y+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*u,h=l*d,g=c*u,y=c*d;e[0]=f-y*a,e[4]=-r*d,e[8]=g+h*a,e[1]=h+g*a,e[5]=r*u,e[9]=y-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*u,h=r*d,g=a*u,y=a*d;e[0]=l*u,e[4]=g*c-h,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,h=r*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-f*d,e[8]=g*d+h,e[1]=d,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+g,e[10]=f-y*d}else if(t.order==="XZY"){const f=r*l,h=r*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+y,e[5]=r*u,e[9]=h*d-g,e[2]=g*d-h,e[6]=a*u,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jm,t,Qm)}lookAt(t,e,i){const o=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Wi.crossVectors(i,yn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Wi.crossVectors(i,yn)),Wi.normalize(),$r.crossVectors(yn,Wi),o[0]=Wi.x,o[4]=$r.x,o[8]=yn.x,o[1]=Wi.y,o[5]=$r.y,o[9]=yn.y,o[2]=Wi.z,o[6]=$r.z,o[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],p=i[10],m=i[14],v=i[3],b=i[7],_=i[11],T=i[15],E=o[0],A=o[4],S=o[8],w=o[12],M=o[1],R=o[5],N=o[9],U=o[13],z=o[2],Y=o[6],B=o[10],tt=o[14],G=o[3],rt=o[7],$=o[11],it=o[15];return s[0]=r*E+a*M+l*z+c*G,s[4]=r*A+a*R+l*Y+c*rt,s[8]=r*S+a*N+l*B+c*$,s[12]=r*w+a*U+l*tt+c*it,s[1]=u*E+d*M+f*z+h*G,s[5]=u*A+d*R+f*Y+h*rt,s[9]=u*S+d*N+f*B+h*$,s[13]=u*w+d*U+f*tt+h*it,s[2]=g*E+y*M+p*z+m*G,s[6]=g*A+y*R+p*Y+m*rt,s[10]=g*S+y*N+p*B+m*$,s[14]=g*w+y*U+p*tt+m*it,s[3]=v*E+b*M+_*z+T*G,s[7]=v*A+b*R+_*Y+T*rt,s[11]=v*S+b*N+_*B+T*$,s[15]=v*w+b*U+_*tt+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],g=t[3],y=t[7],p=t[11],m=t[15];return g*(+s*l*d-o*c*d-s*a*f+i*c*f+o*a*h-i*l*h)+y*(+e*l*h-e*c*f+s*r*f-o*r*h+o*c*u-s*l*u)+p*(+e*c*d-e*a*h-s*r*d+i*r*h+s*a*u-i*c*u)+m*(-o*a*u-e*l*d+e*a*f+o*r*d-i*r*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],g=t[12],y=t[13],p=t[14],m=t[15],v=d*p*c-y*f*c+y*l*h-a*p*h-d*l*m+a*f*m,b=g*f*c-u*p*c-g*l*h+r*p*h+u*l*m-r*f*m,_=u*y*c-g*d*c+g*a*h-r*y*h-u*a*m+r*d*m,T=g*d*l-u*y*l-g*a*f+r*y*f+u*a*p-r*d*p,E=e*v+i*b+o*_+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(y*f*s-d*p*s-y*o*h+i*p*h+d*o*m-i*f*m)*A,t[2]=(a*p*s-y*l*s+y*o*c-i*p*c-a*o*m+i*l*m)*A,t[3]=(d*l*s-a*f*s-d*o*c+i*f*c+a*o*h-i*l*h)*A,t[4]=b*A,t[5]=(u*p*s-g*f*s+g*o*h-e*p*h-u*o*m+e*f*m)*A,t[6]=(g*l*s-r*p*s-g*o*c+e*p*c+r*o*m-e*l*m)*A,t[7]=(r*f*s-u*l*s+u*o*c-e*f*c-r*o*h+e*l*h)*A,t[8]=_*A,t[9]=(g*d*s-u*y*s-g*i*h+e*y*h+u*i*m-e*d*m)*A,t[10]=(r*y*s-g*a*s+g*i*c-e*y*c-r*i*m+e*a*m)*A,t[11]=(u*a*s-r*d*s-u*i*c+e*d*c+r*i*h-e*a*h)*A,t[12]=T*A,t[13]=(u*y*o-g*d*o+g*i*f-e*y*f-u*i*p+e*d*p)*A,t[14]=(g*a*o-r*y*o-g*i*l+e*y*l+r*i*p-e*a*p)*A,t[15]=(r*d*o-u*a*o+u*i*l-e*d*l-r*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,o=t.y,s=t.z;return e[0]*=i,e[4]*=o,e[8]*=s,e[1]*=i,e[5]*=o,e[9]*=s,e[2]*=i,e[6]*=o,e[10]*=s,e[3]*=i,e[7]*=o,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),s=1-i,r=t.x,a=t.y,l=t.z,c=s*r,u=s*a;return this.set(c*r+i,c*a-o*l,c*l+o*a,0,c*a+o*l,u*a+i,u*l-o*r,0,c*l-o*a,u*l+o*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,s,r){return this.set(1,i,s,0,t,1,r,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,u=r+r,d=a+a,f=s*c,h=s*u,g=s*d,y=r*u,p=r*d,m=a*d,v=l*c,b=l*u,_=l*d,T=i.x,E=i.y,A=i.z;return o[0]=(1-(y+m))*T,o[1]=(h+_)*T,o[2]=(g-b)*T,o[3]=0,o[4]=(h-_)*E,o[5]=(1-(f+m))*E,o[6]=(p+v)*E,o[7]=0,o[8]=(g+b)*A,o[9]=(p-v)*A,o[10]=(1-(f+y))*A,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let s=qo.set(o[0],o[1],o[2]).length();const r=qo.set(o[4],o[5],o[6]).length(),a=qo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],Vn.copy(this);const c=1/s,u=1/r,d=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,e.setFromRotationMatrix(Vn),i.x=s,i.y=r,i.z=a,this}makePerspective(t,e,i,o,s,r,a=Ii){const l=this.elements,c=2*s/(e-t),u=2*s/(i-o),d=(e+t)/(e-t),f=(i+o)/(i-o);let h,g;if(a===Ii)h=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Na)h=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,o,s,r,a=Ii){const l=this.elements,c=1/(e-t),u=1/(i-o),d=1/(r-s),f=(e+t)*c,h=(i+o)*u;let g,y;if(a===Ii)g=(r+s)*d,y=-2*d;else if(a===Na)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const qo=new I,Vn=new Rt,Jm=new I(0,0,0),Qm=new I(1,1,1),Wi=new I,$r=new I,yn=new I,Ad=new Rt,Cd=new dn;class on{constructor(t=0,e=0,i=0,o=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,s=o[0],r=o[4],a=o[8],l=o[1],c=o[5],u=o[9],d=o[2],f=o[6],h=o[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ad,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tg=0;const Rd=new I,jo=new dn,Mi=new Rt,Yr=new I,Ws=new I,eg=new I,ng=new dn,Pd=new I(1,0,0),Id=new I(0,1,0),Ld=new I(0,0,1),Dd={type:"added"},ig={type:"removed"},Zo={type:"childadded",child:null},kl={type:"childremoved",child:null};class De extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new I,e=new on,i=new dn,o=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Qt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jo.setFromAxisAngle(t,e),this.quaternion.multiply(jo),this}rotateOnWorldAxis(t,e){return jo.setFromAxisAngle(t,e),this.quaternion.premultiply(jo),this}rotateX(t){return this.rotateOnAxis(Pd,t)}rotateY(t){return this.rotateOnAxis(Id,t)}rotateZ(t){return this.rotateOnAxis(Ld,t)}translateOnAxis(t,e){return Rd.copy(t).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pd,t)}translateY(t){return this.translateOnAxis(Id,t)}translateZ(t){return this.translateOnAxis(Ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yr.copy(t):Yr.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ws,Yr,this.up):Mi.lookAt(Yr,Ws,this.up),this.quaternion.setFromRotationMatrix(Mi),o&&(Mi.extractRotation(o.matrixWorld),jo.setFromRotationMatrix(Mi),this.quaternion.premultiply(jo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dd),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ig),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dd),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));o.material=a}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];o.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),f=r(t.skeletons),h=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=o,i;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}De.DEFAULT_UP=new I(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new I,bi=new I,Fl=new I,wi=new I,Ko=new I,Jo=new I,Nd=new I,Ol=new I,Bl=new I,Hl=new I,Gl=new _e,Vl=new _e,Wl=new _e;class Yn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),Wn.subVectors(t,e),o.cross(Wn);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,e,i,o,s){Wn.subVectors(o,e),bi.subVectors(i,e),Fl.subVectors(t,e);const r=Wn.dot(Wn),a=Wn.dot(bi),l=Wn.dot(Fl),c=bi.dot(bi),u=bi.dot(Fl),d=r*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(r*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,i,o,s,r,a,l){return this.getBarycoord(t,e,i,o,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(r,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,i,o,s,r){return Gl.setScalar(0),Vl.setScalar(0),Wl.setScalar(0),Gl.fromBufferAttribute(t,e),Vl.fromBufferAttribute(t,i),Wl.fromBufferAttribute(t,o),r.setScalar(0),r.addScaledVector(Gl,s.x),r.addScaledVector(Vl,s.y),r.addScaledVector(Wl,s.z),r}static isFrontFacing(t,e,i,o){return Wn.subVectors(i,e),bi.subVectors(t,e),Wn.cross(bi).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Wn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,o,s){return Yn.getInterpolation(t,this.a,this.b,this.c,e,i,o,s)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,s=this.c;let r,a;Ko.subVectors(o,i),Jo.subVectors(s,i),Ol.subVectors(t,i);const l=Ko.dot(Ol),c=Jo.dot(Ol);if(l<=0&&c<=0)return e.copy(i);Bl.subVectors(t,o);const u=Ko.dot(Bl),d=Jo.dot(Bl);if(u>=0&&d<=u)return e.copy(o);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(i).addScaledVector(Ko,r);Hl.subVectors(t,s);const h=Ko.dot(Hl),g=Jo.dot(Hl);if(g>=0&&h<=g)return e.copy(s);const y=h*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Jo,a);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Nd.subVectors(s,o),a=(d-u)/(d-u+(h-g)),e.copy(o).addScaledVector(Nd,a);const m=1/(p+y+f);return r=y*m,a=f*m,e.copy(i).addScaledVector(Ko,r).addScaledVector(Jo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Xl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=le.workingColorSpace){if(t=Cu(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Xl(r,s,t+1/3),this.g=Xl(r,s,t),this.b=Xl(r,s,t-1/3)}return le.toWorkingColorSpace(this,o),this}setStyle(t,e=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const i=$h[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return le.fromWorkingColorSpace(Je.copy(this),t),Math.round(Ve(Je.r*255,0,255))*65536+Math.round(Ve(Je.g*255,0,255))*256+Math.round(Ve(Je.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Je.copy(this),e);const i=Je.r,o=Je.g,s=Je.b,r=Math.max(i,o,s),a=Math.min(i,o,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=u<=.5?d/(r+a):d/(2-r-a),r){case i:l=(o-s)/d+(o<s?6:0);break;case o:l=(s-i)/d+2;break;case s:l=(i-o)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=ke){le.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,i=Je.g,o=Je.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(qr);const i=nr(Xi.h,qr.h,e),o=nr(Xi.s,qr.s,e),s=nr(Xi.l,qr.l,e);return this.setHSL(i,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*o,this.g=s[1]*e+s[4]*i+s[7]*o,this.b=s[2]*e+s[5]*i+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new vt;vt.NAMES=$h;let og=0;class Us extends Ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Fo(),this.name="",this.blending=ps,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=So,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==vc&&(i.blendDst=this.blendDst),this.blendEquation!==So&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=o(t.textures),r=o(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class An extends Us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new I,jr=new lt;class Te{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xd,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=as(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=as(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=as(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=as(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=as(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),o=sn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),o=sn(o,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xd&&(t.usage=this.usage),t}}class Yh extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qh extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $t extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}}let sg=0;const Pn=new Rt,$l=new De,Qo=new I,_n=new Un,Xs=new Un,Be=new I;class Pe extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?qh:Yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return $l.lookAt(t),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let o=0,s=t.length;o<s;o++){const r=t[o];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new $t(i,3))}else{for(let i=0,o=e.count;i<o;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const s=e[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(_n.min,Xs.min),_n.expandByPoint(Be),Be.addVectors(_n.max,Xs.max),_n.expandByPoint(Be)):(_n.expandByPoint(Xs.min),_n.expandByPoint(Xs.max))}_n.getCenter(i);let o=0;for(let s=0,r=t.count;s<r;s++)Be.fromBufferAttribute(t,s),o=Math.max(o,i.distanceToSquared(Be));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Be.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(t,c),Be.add(Qo)),o=Math.max(o,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,o=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new I,l[S]=new I;const c=new I,u=new I,d=new I,f=new lt,h=new lt,g=new lt,y=new I,p=new I;function m(S,w,M){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,S),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(R),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[S].add(y),a[w].add(y),a[M].add(y),l[S].add(p),l[w].add(p),l[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,w=v.length;S<w;++S){const M=v[S],R=M.start,N=M.count;for(let U=R,z=R+N;U<z;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new I,_=new I,T=new I,E=new I;function A(S){T.fromBufferAttribute(o,S),E.copy(T);const w=a[S];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(E,w);const R=_.dot(l[S])<0?-1:1;r.setXYZW(S,b.x,b.y,b.z,R)}for(let S=0,w=v.length;S<w;++S){const M=v[S],R=M.start,N=M.count;for(let U=R,z=R+N;U<z;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const o=new I,s=new I,r=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let f=0,h=t.count;f<h;f+=3){const g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);o.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,p),u.subVectors(r,s),d.subVectors(o,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)o.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),u.subVectors(r,s),d.subVectors(o,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Te(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,o=this.attributes;for(const a in o){const l=o[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const o={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(o[l]=u,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const c in o){const u=o[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ud=new Rt,mo=new Ru,Zr=new Ns,zd=new I,Kr=new I,Jr=new I,Qr=new I,Yl=new I,ta=new I,kd=new I,ea=new I;class j extends De{constructor(t=new Pe,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const a=this.morphTargetInfluences;if(s&&a){ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Yl.fromBufferAttribute(d,t),r?ta.addScaledVector(Yl,u):ta.addScaledVector(Yl.sub(e),u))}e.add(ta)}return e}raycast(t,e){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),mo.copy(t.ray).recast(t.near),!(Zr.containsPoint(mo.origin)===!1&&(mo.intersectSphere(Zr,zd)===null||mo.origin.distanceToSquared(zd)>(t.far-t.near)**2))&&(Ud.copy(s).invert(),mo.copy(t.ray).applyMatrix4(Ud),!(i.boundingBox!==null&&mo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mo)))}_computeIntersections(t,e,i){let o;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,y=f.length;g<y;g++){const p=f[g],m=r[p.materialIndex],v=Math.max(p.start,h.start),b=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let _=v,T=b;_<T;_+=3){const E=a.getX(_),A=a.getX(_+1),S=a.getX(_+2);o=na(this,m,t,i,c,u,d,E,A,S),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let p=g,m=y;p<m;p+=3){const v=a.getX(p),b=a.getX(p+1),_=a.getX(p+2);o=na(this,r,t,i,c,u,d,v,b,_),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=f.length;g<y;g++){const p=f[g],m=r[p.materialIndex],v=Math.max(p.start,h.start),b=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let _=v,T=b;_<T;_+=3){const E=_,A=_+1,S=_+2;o=na(this,m,t,i,c,u,d,E,A,S),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const g=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let p=g,m=y;p<m;p+=3){const v=p,b=p+1,_=p+2;o=na(this,r,t,i,c,u,d,v,b,_),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function rg(n,t,e,i,o,s,r,a){let l;if(t.side===un?l=i.intersectTriangle(r,s,o,!0,a):l=i.intersectTriangle(o,s,r,t.side===Qn,a),l===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:n}}function na(n,t,e,i,o,s,r,a,l,c){n.getVertexPosition(a,Kr),n.getVertexPosition(l,Jr),n.getVertexPosition(c,Qr);const u=rg(n,t,e,i,Kr,Jr,Qr,kd);if(u){const d=new I;Yn.getBarycoord(kd,Kr,Jr,Qr,d),o&&(u.uv=Yn.getInterpolatedAttribute(o,a,l,c,d,new lt)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,a,l,c,d,new lt)),r&&(u.normal=Yn.getInterpolatedAttribute(r,a,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Yn.getNormal(Kr,Jr,Qr,f.normal),u.face=f,u.barycoord=d}return u}class ne extends Pe{constructor(t=1,e=1,i=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,e,t,r,s,0),g("z","y","x",1,-1,i,e,-t,r,s,1),g("x","z","y",1,1,t,i,e,o,r,2),g("x","z","y",1,-1,t,i,-e,o,r,3),g("x","y","z",1,-1,t,e,i,o,s,4),g("x","y","z",-1,-1,t,e,-i,o,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function g(y,p,m,v,b,_,T,E,A,S,w){const M=_/A,R=T/S,N=_/2,U=T/2,z=E/2,Y=A+1,B=S+1;let tt=0,G=0;const rt=new I;for(let $=0;$<B;$++){const it=$*R-U;for(let St=0;St<Y;St++){const Bt=St*M-N;rt[y]=Bt*v,rt[p]=it*b,rt[m]=z,c.push(rt.x,rt.y,rt.z),rt[y]=0,rt[p]=0,rt[m]=E>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(St/A),d.push(1-$/S),tt+=1}}for(let $=0;$<S;$++)for(let it=0;it<A;it++){const St=f+it+Y*$,Bt=f+it+Y*($+1),V=f+(it+1)+Y*($+1),Q=f+(it+1)+Y*$;l.push(St,Bt,Q),l.push(Bt,V,Q),G+=6}a.addGroup(h,G,w),h+=G,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const o=n[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function rn(n){const t={};for(let e=0;e<n.length;e++){const i=Ts(n[e]);for(const o in i)t[o]=i[o]}return t}function ag(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const lg={clone:Ts,merge:rn};var cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ro extends Us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?e.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[o]={type:"m4",value:r.toArray()}:e.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Zh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new I,Fd=new lt,Od=new lt;class bn extends Zh{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Fd,Od),e.subVectors(Od,Fd)}setViewOffset(t,e,i,o,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*o/l,e-=r.offsetY*i/c,o*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class dg extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new bn(ts,es,t,e);o.layers=this.layers,this.add(o);const s=new bn(ts,es,t,e);s.layers=this.layers,this.add(s);const r=new bn(ts,es,t,e);r.layers=this.layers,this.add(r);const a=new bn(ts,es,t,e);a.layers=this.layers,this.add(a);const l=new bn(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new bn(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,s),t.setRenderTarget(i,1,o),t.render(e,r),t.setRenderTarget(i,2,o),t.render(e,a),t.setRenderTarget(i,3,o),t.render(e,l),t.setRenderTarget(i,4,o),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,o),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kh extends qe{constructor(t,e,i,o,s,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,i,o,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fg extends Lo{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new Kh(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ne(5,5,5),s=new ro({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:to});s.uniforms.tEquirect.value=e;const r=new j(o,s),a=e.minFilter;return e.minFilter===To&&(e.minFilter=ri),new dg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,o){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,o);t.setRenderTarget(s)}}const ql=new I,hg=new I,pg=new Qt;class vo{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=ql.subVectors(i,e).cross(hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ql),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pg.getNormalMatrix(t),o=this.coplanarPoint(ql).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const go=new Ns,ia=new I;class As{constructor(t=new vo,e=new vo,i=new vo,o=new vo,s=new vo,r=new vo){this.planes=[t,e,i,o,s,r]}set(t,e,i,o,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii){const i=this.planes,o=t.elements,s=o[0],r=o[1],a=o[2],l=o[3],c=o[4],u=o[5],d=o[6],f=o[7],h=o[8],g=o[9],y=o[10],p=o[11],m=o[12],v=o[13],b=o[14],_=o[15];if(i[0].setComponents(l-s,f-c,p-h,_-m).normalize(),i[1].setComponents(l+s,f+c,p+h,_+m).normalize(),i[2].setComponents(l+r,f+u,p+g,_+v).normalize(),i[3].setComponents(l-r,f-u,p-g,_-v).normalize(),i[4].setComponents(l-a,f-d,p-y,_-b).normalize(),e===Ii)i[5].setComponents(l+a,f+d,p+y,_+b).normalize();else if(e===Na)i[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),go.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),go.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(go)}intersectsSprite(t){return go.center.set(0,0,0),go.radius=.7071067811865476,go.applyMatrix4(t.matrixWorld),this.intersectsSphere(go)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(ia.x=o.normal.x>0?t.max.x:t.min.x,ia.y=o.normal.y>0?t.max.y:t.min.y,ia.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let n=null,t=!1,e=null,i=null;function o(s,r){e(s,r),i=n.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(o),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function mg(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const y=d[h];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:o,remove:s,update:r}}class Ee extends Pe{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const s=t/2,r=e/2,a=Math.floor(i),l=Math.floor(o),c=a+1,u=l+1,d=t/a,f=e/l,h=[],g=[],y=[],p=[];for(let m=0;m<u;m++){const v=m*f-r;for(let b=0;b<c;b++){const _=b*d-s;g.push(_,-v,0),y.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const b=v+c*m,_=v+c*(m+1),T=v+1+c*(m+1),E=v+1+c*m;h.push(b,_,E),h.push(_,T,E)}this.setIndex(h),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
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
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rg=`#ifdef USE_IRIDESCENCE
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
#endif`,Pg=`#ifdef USE_BUMPMAP
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
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
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
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
#endif`,px=`struct PhysicalMaterial {
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
}`,mx=`
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ty=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
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
}`,by=`#if DEPTH_PACKING == 3200
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
}`,wy=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`uniform float scale;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Py=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,zy=`#define NORMAL
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
}`,ky=`#define PHONG
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,By=`#define STANDARD
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
}`,Hy=`#define TOON
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
}`,Gy=`#define TOON
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
}`,Vy=`uniform float size;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,$y=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:gg,alphahash_pars_fragment:xg,alphamap_fragment:yg,alphamap_pars_fragment:_g,alphatest_fragment:vg,alphatest_pars_fragment:Mg,aomap_fragment:bg,aomap_pars_fragment:wg,batching_pars_vertex:Sg,batching_vertex:Eg,begin_vertex:Tg,beginnormal_vertex:Ag,bsdfs:Cg,iridescence_fragment:Rg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Ng,color_fragment:Ug,color_pars_fragment:zg,color_pars_vertex:kg,color_vertex:Fg,common:Og,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Vg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:$g,colorspace_pars_fragment:Yg,envmap_fragment:qg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Zg,envmap_pars_vertex:Kg,envmap_physical_pars_fragment:lx,envmap_vertex:Jg,fog_vertex:Qg,fog_pars_vertex:tx,fog_fragment:ex,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:ox,lights_lambert_fragment:sx,lights_lambert_pars_fragment:rx,lights_pars_begin:ax,lights_toon_fragment:cx,lights_toon_pars_fragment:ux,lights_phong_fragment:dx,lights_phong_pars_fragment:fx,lights_physical_fragment:hx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:Mx,map_fragment:bx,map_pars_fragment:wx,map_particle_fragment:Sx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:Ax,morphinstance_vertex:Cx,morphcolor_vertex:Rx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Lx,normal_fragment_begin:Dx,normal_fragment_maps:Nx,normal_pars_fragment:Ux,normal_pars_vertex:zx,normal_vertex:kx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:Hx,iridescence_pars_fragment:Gx,opaque_fragment:Vx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:$x,dithering_fragment:Yx,dithering_pars_fragment:qx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Zx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:Jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:ty,skinbase_vertex:ey,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:oy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:ay,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:uy,uv_pars_fragment:dy,uv_pars_vertex:fy,uv_vertex:hy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:xy,backgroundCube_frag:yy,cube_vert:_y,cube_frag:vy,depth_vert:My,depth_frag:by,distanceRGBA_vert:wy,distanceRGBA_frag:Sy,equirect_vert:Ey,equirect_frag:Ty,linedashed_vert:Ay,linedashed_frag:Cy,meshbasic_vert:Ry,meshbasic_frag:Py,meshlambert_vert:Iy,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Ny,meshnormal_vert:Uy,meshnormal_frag:zy,meshphong_vert:ky,meshphong_frag:Fy,meshphysical_vert:Oy,meshphysical_frag:By,meshtoon_vert:Hy,meshtoon_frag:Gy,points_vert:Vy,points_frag:Wy,shadow_vert:Xy,shadow_frag:$y,sprite_vert:Yy,sprite_frag:qy},pt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},si={basic:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:rn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:rn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new vt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:rn([pt.points,pt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:rn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:rn([pt.common,pt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:rn([pt.sprite,pt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:rn([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:rn([pt.lights,pt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const oa={r:0,b:0,g:0},xo=new on,jy=new Rt;function Zy(n,t,e,i,o,s,r){const a=new vt(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b}function y(v){let b=!1;const _=g(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(v,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===Ja)?(u===void 0&&(u=new j(new ne(1,1,1),new ro({name:"BackgroundCubeMaterial",uniforms:Ts(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(u)),xo.copy(b.backgroundRotation),xo.x*=-1,xo.y*=-1,xo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(xo)),u.material.toneMapped=le.getTransfer(_.colorSpace)!==ge,(d!==_||f!==_.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new j(new Ee(2,2),new ro({name:"BackgroundMaterial",uniforms:Ts(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=le.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(oa,jh(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,b,r)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:y,addToRenderList:p}}function Ky(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=f(null);let s=o,r=!1;function a(M,R,N,U,z){let Y=!1;const B=d(U,N,R);s!==B&&(s=B,c(s.object)),Y=h(M,U,N,z),Y&&g(M,U,N,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,_(M,R,N,U),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,R,N){const U=N.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let Y=z[R.id];Y===void 0&&(Y={},z[R.id]=Y);let B=Y[U];return B===void 0&&(B=f(l()),Y[U]=B),B}function f(M){const R=[],N=[],U=[];for(let z=0;z<e;z++)R[z]=0,N[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function h(M,R,N,U){const z=s.attributes,Y=R.attributes;let B=0;const tt=N.getAttributes();for(const G in tt)if(tt[G].location>=0){const $=z[G];let it=Y[G];if(it===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),$===void 0||$.attribute!==it||it&&$.data!==it.data)return!0;B++}return s.attributesNum!==B||s.index!==U}function g(M,R,N,U){const z={},Y=R.attributes;let B=0;const tt=N.getAttributes();for(const G in tt)if(tt[G].location>=0){let $=Y[G];$===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const it={};it.attribute=$,$&&$.data&&(it.data=$.data),z[G]=it,B++}s.attributes=z,s.attributesNum=B,s.index=U}function y(){const M=s.newAttributes;for(let R=0,N=M.length;R<N;R++)M[R]=0}function p(M){m(M,0)}function m(M,R){const N=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;N[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),z[M]!==R&&(n.vertexAttribDivisor(M,R),z[M]=R)}function v(){const M=s.newAttributes,R=s.enabledAttributes;for(let N=0,U=R.length;N<U;N++)R[N]!==M[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function b(M,R,N,U,z,Y,B){B===!0?n.vertexAttribIPointer(M,R,N,z,Y):n.vertexAttribPointer(M,R,N,U,z,Y)}function _(M,R,N,U){y();const z=U.attributes,Y=N.getAttributes(),B=R.defaultAttributeValues;for(const tt in Y){const G=Y[tt];if(G.location>=0){let rt=z[tt];if(rt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const $=rt.normalized,it=rt.itemSize,St=t.get(rt);if(St===void 0)continue;const Bt=St.buffer,V=St.type,Q=St.bytesPerElement,dt=V===n.INT||V===n.UNSIGNED_INT||rt.gpuType===Mu;if(rt.isInterleavedBufferAttribute){const ot=rt.data,Ct=ot.stride,zt=rt.offset;if(ot.isInstancedInterleavedBuffer){for(let Ht=0;Ht<G.locationSize;Ht++)m(G.location+Ht,ot.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)p(G.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let Ht=0;Ht<G.locationSize;Ht++)b(G.location+Ht,it/G.locationSize,V,$,Ct*Q,(zt+it/G.locationSize*Ht)*Q,dt)}else{if(rt.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)m(G.location+ot,rt.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ot=0;ot<G.locationSize;ot++)p(G.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let ot=0;ot<G.locationSize;ot++)b(G.location+ot,it/G.locationSize,V,$,it*Q,it/G.locationSize*ot*Q,dt)}}else if(B!==void 0){const $=B[tt];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(G.location,$);break;case 3:n.vertexAttrib3fv(G.location,$);break;case 4:n.vertexAttrib4fv(G.location,$);break;default:n.vertexAttrib1fv(G.location,$)}}}}v()}function T(){S();for(const M in i){const R=i[M];for(const N in R){const U=R[N];for(const z in U)u(U[z].object),delete U[z];delete R[N]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const N in R){const U=R[N];for(const z in U)u(U[z].object),delete U[z];delete R[N]}delete i[M.id]}function A(M){for(const R in i){const N=i[R];if(N[M.id]===void 0)continue;const U=N[M.id];for(const z in U)u(U[z].object),delete U[z];delete N[M.id]}}function S(){w(),r=!0,s!==o&&(s=o,c(s.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:S,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function Jy(n,t,e){let i;function o(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function r(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];e.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)r(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];e.update(g,i,1)}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qy(n,t,e,i){let o;function s(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");o=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(A){return!(A!==qn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const S=A===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ai&&!S)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function t_(n){const t=this;let e=null,i=0,o=!1,s=!1;const r=new vo,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||o;return o=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!o||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,b=v*4;let _=m.clippingState||null;l.value=_,_=u(g,f,b,h);for(let T=0;T!==b;++T)_[T]=e[T];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const m=h+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,_=h;b!==y;++b,_+=4)r.copy(d[b]).applyMatrix4(v,a),r.normal.toArray(p,_),p[_+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function e_(n){let t=new WeakMap;function e(r,a){return a===Cc?r.mapping=bs:a===Rc&&(r.mapping=ws),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Cc||a===Rc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new fg(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",o),e(c.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Qh extends Zh{constructor(t=-1,e=1,i=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-t,r=i+t,a=o+e,l=o-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,Bd=[.125,.215,.35,.446,.526,.582],Eo=20,jl=new Qh,Hd=new vt;let Zl=null,Kl=0,Jl=0,Ql=!1;const Mo=(1+Math.sqrt(5))/2,ns=1/Mo,Gd=[new I(-Mo,ns,0),new I(Mo,ns,0),new I(-ns,0,Mo),new I(ns,0,Mo),new I(0,Mo,-ns),new I(0,Mo,ns),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Vd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,o,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,Kl,Jl),this._renderer.xr.enabled=Ql,t.scissorTest=!1,sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Cr,format:qn,colorSpace:Ls,depthBuffer:!1},o=Wd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(s)),this._blurMaterial=i_(s,t,e)}return o}_compileMaterial(t){const e=new j(this._lodPlanes[0],t);this._renderer.compile(e,jl)}_sceneToCubeUV(t,e,i,o){const a=new bn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Hd),u.toneMapping=eo,u.autoClear=!1;const h=new An({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new j(new ne,h);let y=!1;const p=t.background;p?p.isColor&&(h.color.copy(p),t.background=null,y=!0):(h.color.copy(Hd),y=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const b=this._cubeSize;sa(o,v*b,m>2?b:0,b,b),u.setRenderTarget(o),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===bs||t.mapping===ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new j(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;sa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,jl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gd[(o-s-1)%Gd.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,o,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,o,"latitudinal",s),this._halfBlur(r,t,i,i,o,"longitudinal",s)}_halfBlur(t,e,i,o,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new j(this._lodPlanes[o],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Eo-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):Eo;p>Eo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Eo}`);const m=[];let v=0;for(let A=0;A<Eo;++A){const S=A/y,w=Math.exp(-S*S/2);m.push(w),A===0?v+=w:A<p&&(v+=2*w)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const _=this._sizeLods[o],T=3*_*(o>b-us?o-b+us:0),E=4*(this._cubeSize-_);sa(e,T,E,3*_,2*_),l.setRenderTarget(e),l.render(d,jl)}}function n_(n){const t=[],e=[],i=[];let o=n;const s=n-us+1+Bd.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);e.push(a);let l=1/a;r>n-us?l=Bd[r-n+us-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,p=2,m=1,v=new Float32Array(y*g*h),b=new Float32Array(p*g*h),_=new Float32Array(m*g*h);for(let E=0;E<h;E++){const A=E%3*2/3-1,S=E>2?0:-1,w=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];v.set(w,y*g*E),b.set(f,p*g*E);const M=[E,E,E,E,E,E];_.set(M,m*g*E)}const T=new Pe;T.setAttribute("position",new Te(v,y)),T.setAttribute("uv",new Te(b,p)),T.setAttribute("faceIndex",new Te(_,m)),t.push(T),o>us&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wd(n,t,e){const i=new Lo(n,t,e);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,t,e,i,o){n.viewport.set(t,e,i,o),n.scissor.set(t,e,i,o)}function i_(n,t,e){const i=new Float32Array(Eo),o=new I(0,1,0);return new ro({name:"SphericalGaussianBlur",defines:{n:Eo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:to,depthTest:!1,depthWrite:!1})}function Xd(){return new ro({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:to,depthTest:!1,depthWrite:!1})}function $d(){return new ro({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:to,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function o_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cc||l===Rc,u=l===bs||l===ws;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Vd(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&o(h)?(e===null&&(e=new Vd(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function o(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function s_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const o=e(i);return o===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function r_(n,t,e,i){const o={},s=new WeakMap;function r(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let p=0,m=y.length;p<m;p++)t.remove(y[p])}f.removeEventListener("dispose",r),delete o[f.id];const h=s.get(f);h&&(t.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return o[f.id]===!0||(f.addEventListener("dispose",r),o[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const y=h[g];for(let p=0,m=y.length;p<m;p++)t.update(y[p],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,g=d.attributes.position;let y=0;if(h!==null){const v=h.array;y=h.version;for(let b=0,_=v.length;b<_;b+=3){const T=v[b+0],E=v[b+1],A=v[b+2];f.push(T,E,E,A,A,T)}}else if(g!==void 0){const v=g.array;y=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){const T=b+0,E=b+1,A=b+2;f.push(T,E,E,A,A,T)}}else return;const p=new(Vh(f)?qh:Yh)(f,1);p.version=y;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function a_(n,t,e){let i;function o(f){i=f}let s,r;function a(f){s=f.type,r=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*r),e.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*r,g),e.update(h,i,g))}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];e.update(p,i,1)}function d(f,h,g,y){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/r,h[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let m=0;for(let v=0;v<g;v++)m+=h[v]*y[v];e.update(m,i,1)}}this.setMode=o,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function l_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function c_(n,t,e){const i=new WeakMap,o=new _e;function s(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;h===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let _=a.attributes.position.count*b,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*T*4*d),A=new Xh(E,_,T,d);A.type=ai,A.needsUpdate=!0;const S=b*4;for(let M=0;M<d;M++){const R=p[M],N=m[M],U=v[M],z=_*T*4*M;for(let Y=0;Y<R.count;Y++){const B=Y*S;h===!0&&(o.fromBufferAttribute(R,Y),E[z+B+0]=o.x,E[z+B+1]=o.y,E[z+B+2]=o.z,E[z+B+3]=0),g===!0&&(o.fromBufferAttribute(N,Y),E[z+B+4]=o.x,E[z+B+5]=o.y,E[z+B+6]=o.z,E[z+B+7]=0),y===!0&&(o.fromBufferAttribute(U,Y),E[z+B+8]=o.x,E[z+B+9]=o.y,E[z+B+10]=o.z,E[z+B+11]=U.itemSize===4?o.w:1)}}f={count:d,texture:A,size:new lt(_,T)},i.set(a,f),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let h=0;for(let y=0;y<c.length;y++)h+=c[y];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function u_(n,t,e,i){let o=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(o.get(d)!==c&&(t.update(d),o.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),o.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==c&&(f.update(),o.set(f,c))}return d}function r(){o=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class tp extends qe{constructor(t,e,i,o,s,r,a,l,c,u=ms){if(u!==ms&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ms&&(i=Io),i===void 0&&u===Es&&(i=Ss),super(null,o,s,r,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ep=new qe,Yd=new tp(1,1),np=new Xh,ip=new Zm,op=new Kh,qd=[],jd=[],Zd=new Float32Array(16),Kd=new Float32Array(9),Jd=new Float32Array(4);function zs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const o=t*e;let s=qd[o];if(s===void 0&&(s=new Float32Array(o),qd[o]=s),t!==0){i.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(s,a)}return s}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function tl(n,t){let e=jd[t];e===void 0&&(e=new Int32Array(t),jd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function d_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function f_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function h_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function p_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function m_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),Oe(e,i)}}function g_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Kd.set(i),n.uniformMatrix3fv(this.addr,!1,Kd),Oe(e,i)}}function x_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,i))return;Zd.set(i),n.uniformMatrix4fv(this.addr,!1,Zd),Oe(e,i)}}function y_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function __(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function v_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function M_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function b_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function w_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function S_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function E_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function T_(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(Yd.compareFunction=Gh,s=Yd):s=ep,e.setTexture2D(t||s,o)}function A_(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||ip,o)}function C_(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||op,o)}function R_(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||np,o)}function P_(n){switch(n){case 5126:return d_;case 35664:return f_;case 35665:return h_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return w_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(n,t){n.uniform1fv(this.addr,t)}function L_(n,t){const e=zs(t,this.size,2);n.uniform2fv(this.addr,e)}function D_(n,t){const e=zs(t,this.size,3);n.uniform3fv(this.addr,e)}function N_(n,t){const e=zs(t,this.size,4);n.uniform4fv(this.addr,e)}function U_(n,t){const e=zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function z_(n,t){const e=zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function k_(n,t){const e=zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function F_(n,t){n.uniform1iv(this.addr,t)}function O_(n,t){n.uniform2iv(this.addr,t)}function B_(n,t){n.uniform3iv(this.addr,t)}function H_(n,t){n.uniform4iv(this.addr,t)}function G_(n,t){n.uniform1uiv(this.addr,t)}function V_(n,t){n.uniform2uiv(this.addr,t)}function W_(n,t){n.uniform3uiv(this.addr,t)}function X_(n,t){n.uniform4uiv(this.addr,t)}function $_(n,t,e){const i=this.cache,o=t.length,s=tl(e,o);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let r=0;r!==o;++r)e.setTexture2D(t[r]||ep,s[r])}function Y_(n,t,e){const i=this.cache,o=t.length,s=tl(e,o);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let r=0;r!==o;++r)e.setTexture3D(t[r]||ip,s[r])}function q_(n,t,e){const i=this.cache,o=t.length,s=tl(e,o);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let r=0;r!==o;++r)e.setTextureCube(t[r]||op,s[r])}function j_(n,t,e){const i=this.cache,o=t.length,s=tl(e,o);Fe(i,s)||(n.uniform1iv(this.addr,s),Oe(i,s));for(let r=0;r!==o;++r)e.setTexture2DArray(t[r]||np,s[r])}function Z_(n){switch(n){case 5126:return I_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return U_;case 35675:return z_;case 35676:return k_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return V_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return j_}}class K_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=P_(e.type)}}class J_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z_(e.type)}}class Q_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(t,e[a.id],i)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function Qd(n,t){n.seq.push(t),n.map[t.id]=t}function tv(n,t,e){const i=n.name,o=i.length;for(tc.lastIndex=0;;){const s=tc.exec(i),r=tc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===o){Qd(e,c===void 0?new K_(a,n,t):new J_(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Q_(a),Qd(e,d)),e=d}}}class Ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(e,o),r=t.getUniformLocation(e,s.name);tv(s,r,this)}}setValue(t,e,i,o){const s=this.map[e];s!==void 0&&s.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,s=t.length;o!==s;++o){const r=t[o];r.id in e&&i.push(r)}return i}}function tf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ev=37297;let nv=0;function iv(n,t){const e=n.split(`
`),i=[],o=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=o;r<s;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const ef=new Qt;function ov(n){le._getMatrix(ef,le.workingColorSpace,n);const t=`mat3( ${ef.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case Qa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),o=n.getShaderInfoLog(t).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+iv(n.getShaderSource(t),r)}else return o}function sv(n,t){const e=ov(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rv(n,t){let e;switch(t){case cm:e="Linear";break;case um:e="Reinhard";break;case dm:e="Cineon";break;case fm:e="ACESFilmic";break;case pm:e="AgX";break;case Ph:e="Neutral";break;case hm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ra=new I;function av(){le.getLuminanceCoefficients(ra);const n=ra.x.toFixed(4),t=ra.y.toFixed(4),e=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function cv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(t,o),r=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function tr(n){return n!==""}function of(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(n){return n.replace(dv,hv)}const fv=new Map;function hv(n,t){let e=ee[t];if(e===void 0){const i=fv.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return iu(e)}const pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(n){return n.replace(pv,mv)}function mv(n,t,e,i){let o="";for(let s=parseInt(t);s<parseInt(e);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function af(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function xv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case ws:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function _v(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case am:t="ENVMAP_BLENDING_MIX";break;case lm:t="ENVMAP_BLENDING_ADD";break}return t}function vv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Mv(n,t,e,i){const o=n.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=gv(e),c=xv(e),u=yv(e),d=_v(e),f=vv(e),h=lv(e),g=cv(s),y=o.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(tr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(tr).join(`
`),m.length>0&&(m+=`
`)):(p=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),m=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==eo?"#define TONE_MAPPING":"",e.toneMapping!==eo?ee.tonemapping_pars_fragment:"",e.toneMapping!==eo?rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,sv("linearToOutputTexel",e.outputColorSpace),av(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),r=iu(r),r=of(r,e),r=sf(r,e),a=iu(a),a=of(a,e),a=sf(a,e),r=rf(r),a=rf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+p+r,_=v+m+a,T=tf(o,o.VERTEX_SHADER,b),E=tf(o,o.FRAGMENT_SHADER,_);o.attachShader(y,T),o.attachShader(y,E),e.index0AttributeName!==void 0?o.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(y,0,"position"),o.linkProgram(y);function A(R){if(n.debug.checkShaderErrors){const N=o.getProgramInfoLog(y).trim(),U=o.getShaderInfoLog(T).trim(),z=o.getShaderInfoLog(E).trim();let Y=!0,B=!0;if(o.getProgramParameter(y,o.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,y,T,E);else{const tt=nf(o,T,"vertex"),G=nf(o,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(y,o.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+tt+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||z==="")&&(B=!1);B&&(R.diagnostics={runnable:Y,programLog:N,vertexShader:{log:U,prefix:p},fragmentShader:{log:z,prefix:m}})}o.deleteShader(T),o.deleteShader(E),S=new Ta(o,y),w=uv(o,y)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(y,ev)),M},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}let bv=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Sv(t),e.set(t,i)),i}}class Sv{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}}function Ev(n,t,e,i,o,s,r){const a=new Pu,l=new wv,c=new Set,u=[],d=o.logarithmicDepthBuffer,f=o.vertexTextures;let h=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,M,R,N,U){const z=N.fog,Y=U.geometry,B=w.isMeshStandardMaterial?N.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),G=tt&&tt.mapping===Ja?tt.image.height:null,rt=g[w.type];w.precision!==null&&(h=o.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const $=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,it=$!==void 0?$.length:0;let St=0;Y.morphAttributes.position!==void 0&&(St=1),Y.morphAttributes.normal!==void 0&&(St=2),Y.morphAttributes.color!==void 0&&(St=3);let Bt,V,Q,dt;if(rt){const pe=si[rt];Bt=pe.vertexShader,V=pe.fragmentShader}else Bt=w.vertexShader,V=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),dt=l.getFragmentShaderID(w);const ot=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),zt=U.isInstancedMesh===!0,Ht=U.isBatchedMesh===!0,qt=!!w.map,J=!!w.matcap,ct=!!tt,D=!!w.aoMap,kt=!!w.lightMap,at=!!w.bumpMap,wt=!!w.normalMap,ht=!!w.displacementMap,Gt=!!w.emissiveMap,Mt=!!w.metalnessMap,L=!!w.roughnessMap,C=w.anisotropy>0,H=w.clearcoat>0,Z=w.dispersion>0,nt=w.iridescence>0,K=w.sheen>0,Pt=w.transmission>0,mt=C&&!!w.anisotropyMap,bt=H&&!!w.clearcoatMap,ie=H&&!!w.clearcoatNormalMap,ut=H&&!!w.clearcoatRoughnessMap,Et=nt&&!!w.iridescenceMap,Vt=nt&&!!w.iridescenceThicknessMap,Yt=K&&!!w.sheenColorMap,Tt=K&&!!w.sheenRoughnessMap,ae=!!w.specularMap,te=!!w.specularColorMap,be=!!w.specularIntensityMap,k=Pt&&!!w.transmissionMap,gt=Pt&&!!w.thicknessMap,q=!!w.gradientMap,et=!!w.alphaMap,_t=w.alphaTest>0,xt=!!w.alphaHash,Kt=!!w.extensions;let Ne=eo;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const Ze={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:Bt,fragmentShader:V,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Ht,batchingColor:Ht&&U._colorsTexture!==null,instancing:zt,instancingColor:zt&&U.instanceColor!==null,instancingMorph:zt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ls,alphaToCoverage:!!w.alphaToCoverage,map:qt,matcap:J,envMap:ct,envMapMode:ct&&tt.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:kt,bumpMap:at,normalMap:wt,displacementMap:f&&ht,emissiveMap:Gt,normalMapObjectSpace:wt&&w.normalMapType===ym,normalMapTangentSpace:wt&&w.normalMapType===Hh,metalnessMap:Mt,roughnessMap:L,anisotropy:C,anisotropyMap:mt,clearcoat:H,clearcoatMap:bt,clearcoatNormalMap:ie,clearcoatRoughnessMap:ut,dispersion:Z,iridescence:nt,iridescenceMap:Et,iridescenceThicknessMap:Vt,sheen:K,sheenColorMap:Yt,sheenRoughnessMap:Tt,specularMap:ae,specularColorMap:te,specularIntensityMap:be,transmission:Pt,transmissionMap:k,thicknessMap:gt,gradientMap:q,opaque:w.transparent===!1&&w.blending===ps&&w.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:xt,combine:w.combine,mapUv:qt&&y(w.map.channel),aoMapUv:D&&y(w.aoMap.channel),lightMapUv:kt&&y(w.lightMap.channel),bumpMapUv:at&&y(w.bumpMap.channel),normalMapUv:wt&&y(w.normalMap.channel),displacementMapUv:ht&&y(w.displacementMap.channel),emissiveMapUv:Gt&&y(w.emissiveMap.channel),metalnessMapUv:Mt&&y(w.metalnessMap.channel),roughnessMapUv:L&&y(w.roughnessMap.channel),anisotropyMapUv:mt&&y(w.anisotropyMap.channel),clearcoatMapUv:bt&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&y(w.sheenRoughnessMap.channel),specularMapUv:ae&&y(w.specularMap.channel),specularColorMapUv:te&&y(w.specularColorMap.channel),specularIntensityMapUv:be&&y(w.specularIntensityMap.channel),transmissionMapUv:k&&y(w.transmissionMap.channel),thicknessMapUv:gt&&y(w.thicknessMap.channel),alphaMapUv:et&&y(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(wt||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(qt||et),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:St,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:qt&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===ge,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===ge,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ye,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Kt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&w.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function m(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(v(M,w),b(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const M=g[w.type];let R;if(M){const N=si[M];R=lg.clone(N.uniforms)}else R=w.uniforms;return R}function T(w,M){let R;for(let N=0,U=u.length;N<U;N++){const z=u[N];if(z.cacheKey===M){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Mv(n,M,w,s),u.push(R)),R}function E(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function S(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:S}}function Tv(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function o(r,a,l){n.get(r)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:o,dispose:s}}function Av(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function lf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cf(){const n=[];let t=0;const e=[],i=[],o=[];function s(){t=0,e.length=0,i.length=0,o.length=0}function r(d,f,h,g,y,p){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=y,m.group=p),t++,m}function a(d,f,h,g,y,p){const m=r(d,f,h,g,y,p);h.transmission>0?i.push(m):h.transparent===!0?o.push(m):e.push(m)}function l(d,f,h,g,y,p){const m=r(d,f,h,g,y,p);h.transmission>0?i.unshift(m):h.transparent===!0?o.unshift(m):e.unshift(m)}function c(d,f){e.length>1&&e.sort(d||Av),i.length>1&&i.sort(f||lf),o.length>1&&o.sort(f||lf)}function u(){for(let d=t,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:o,init:s,push:a,unshift:l,finish:u,sort:c}}function Cv(){let n=new WeakMap;function t(i,o){const s=n.get(i);let r;return s===void 0?(r=new cf,n.set(i,[r])):o>=s.length?(r=new cf,s.push(r)):r=s[o],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Rv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new vt};break;case"SpotLight":e={position:new I,direction:new I,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Pv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Iv=0;function Lv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Dv(n){const t=new Rv,e=Pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const o=new I,s=new Rt,r=new Rt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,g=0,y=0,p=0,m=0,v=0,b=0,_=0,T=0,E=0,A=0;c.sort(Lv);for(let w=0,M=c.length;w<M;w++){const R=c[w],N=R.color,U=R.intensity,z=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*U,d+=N.g*U,f+=N.b*U;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],U);A++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=R.shadow.matrix,v++}i.directional[h]=B,h++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(N).multiplyScalar(U),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[y]=B;const tt=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,tt.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[y]=tt.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=Y,_++}y++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(N).multiplyScalar(U),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=B,p++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(U),B.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[m]=B,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==g||S.spotLength!==y||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==v||S.numPointShadows!==b||S.numSpotShadows!==_||S.numSpotMaps!==T||S.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,S.directionalLength=h,S.pointLength=g,S.spotLength=y,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=v,S.numPointShadows=b,S.numSpotShadows=_,S.numSpotMaps=T,S.numLightProbes=A,i.version=Iv++)}function l(c,u){let d=0,f=0,h=0,g=0,y=0;const p=u.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const b=c[m];if(b.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(o),_.direction.transformDirection(p),d++}else if(b.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(o),_.direction.transformDirection(p),h++}else if(b.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),r.identity(),s.copy(b.matrixWorld),s.premultiply(p),r.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const _=i.hemi[y];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function uf(n){const t=new Dv(n),e=[],i=[];function o(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function r(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Nv(n){let t=new WeakMap;function e(o,s=0){const r=t.get(o);let a;return r===void 0?(a=new uf(n),t.set(o,[a])):s>=r.length?(a=new uf(n),r.push(a)):a=r[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Uv extends Us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zv extends Us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function Ov(n,t,e){let i=new As;const o=new lt,s=new lt,r=new _e,a=new Uv({depthPacking:xm}),l=new zv,c={},u=e.maxTextureSize,d={[Qn]:un,[un]:Qn,[Ye]:Ye},f=new ro({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:kv,fragmentShader:Fv}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new j(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let m=this.type;this.render=function(E,A,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(to),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==Ei&&this.type===Ei,z=m===Ei&&this.type!==Ei;for(let Y=0,B=E.length;Y<B;Y++){const tt=E[Y],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const rt=G.getFrameExtents();if(o.multiply(rt),s.copy(G.mapSize),(o.x>u||o.y>u)&&(o.x>u&&(s.x=Math.floor(u/rt.x),o.x=s.x*rt.x,G.mapSize.x=s.x),o.y>u&&(s.y=Math.floor(u/rt.y),o.y=s.y*rt.y,G.mapSize.y=s.y)),G.map===null||U===!0||z===!0){const it=this.type!==Ei?{minFilter:Sn,magFilter:Sn}:{};G.map!==null&&G.map.dispose(),G.map=new Lo(o.x,o.y,it),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const $=G.getViewportCount();for(let it=0;it<$;it++){const St=G.getViewport(it);r.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),N.viewport(r),G.updateMatrices(tt,it),i=G.getFrustum(),_(A,S,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Ei&&v(G,S),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(w,M,R)};function v(E,A){const S=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Lo(o.x,o.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,S,f,y,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,S,h,y,null)}function b(E,A,S,w){let M=null;const R=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=S.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,U=A.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let Y=z[U];Y===void 0&&(Y=M.clone(),z[U]=Y,A.addEventListener("dispose",T)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Ei?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=S}return M}function _(E,A,S,w,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ei)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const U=t.update(E),z=E.material;if(Array.isArray(z)){const Y=U.groups;for(let B=0,tt=Y.length;B<tt;B++){const G=Y[B],rt=z[G.materialIndex];if(rt&&rt.visible){const $=b(E,rt,w,M);E.onBeforeShadow(n,E,A,S,U,$,G),n.renderBufferDirect(S,null,U,$,E,G),E.onAfterShadow(n,E,A,S,U,$,G)}}}else if(z.visible){const Y=b(E,z,w,M);E.onBeforeShadow(n,E,A,S,U,Y,null),n.renderBufferDirect(S,null,U,Y,E,null),E.onAfterShadow(n,E,A,S,U,Y,null)}}const N=E.children;for(let U=0,z=N.length;U<z;U++)_(N[U],A,S,w,M)}function T(E){E.target.removeEventListener("dispose",T);for(const S in c){const w=c[S],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Bv={[Mc]:bc,[wc]:Tc,[Sc]:Ac,[Ms]:Ec,[bc]:Mc,[Tc]:wc,[Ac]:Sc,[Ec]:Ms};function Hv(n,t){function e(){let k=!1;const gt=new _e;let q=null;const et=new _e(0,0,0,0);return{setMask:function(_t){q!==_t&&!k&&(n.colorMask(_t,_t,_t,_t),q=_t)},setLocked:function(_t){k=_t},setClear:function(_t,xt,Kt,Ne,Ze){Ze===!0&&(_t*=Ne,xt*=Ne,Kt*=Ne),gt.set(_t,xt,Kt,Ne),et.equals(gt)===!1&&(n.clearColor(_t,xt,Kt,Ne),et.copy(gt))},reset:function(){k=!1,q=null,et.set(-1,0,0,0)}}}function i(){let k=!1,gt=!1,q=null,et=null,_t=null;return{setReversed:function(xt){if(gt!==xt){const Kt=t.get("EXT_clip_control");gt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const Ne=_t;_t=null,this.setClear(Ne)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?ot(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(xt){q!==xt&&!k&&(n.depthMask(xt),q=xt)},setFunc:function(xt){if(gt&&(xt=Bv[xt]),et!==xt){switch(xt){case Mc:n.depthFunc(n.NEVER);break;case bc:n.depthFunc(n.ALWAYS);break;case wc:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Sc:n.depthFunc(n.EQUAL);break;case Ec:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=xt}},setLocked:function(xt){k=xt},setClear:function(xt){_t!==xt&&(gt&&(xt=1-xt),n.clearDepth(xt),_t=xt)},reset:function(){k=!1,q=null,et=null,_t=null,gt=!1}}}function o(){let k=!1,gt=null,q=null,et=null,_t=null,xt=null,Kt=null,Ne=null,Ze=null;return{setTest:function(pe){k||(pe?ot(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(pe){gt!==pe&&!k&&(n.stencilMask(pe),gt=pe)},setFunc:function(pe,Bn,xi){(q!==pe||et!==Bn||_t!==xi)&&(n.stencilFunc(pe,Bn,xi),q=pe,et=Bn,_t=xi)},setOp:function(pe,Bn,xi){(xt!==pe||Kt!==Bn||Ne!==xi)&&(n.stencilOp(pe,Bn,xi),xt=pe,Kt=Bn,Ne=xi)},setLocked:function(pe){k=pe},setClear:function(pe){Ze!==pe&&(n.clearStencil(pe),Ze=pe)},reset:function(){k=!1,gt=null,q=null,et=null,_t=null,xt=null,Kt=null,Ne=null,Ze=null}}}const s=new e,r=new i,a=new o,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,y=!1,p=null,m=null,v=null,b=null,_=null,T=null,E=null,A=new vt(0,0,0),S=0,w=!1,M=null,R=null,N=null,U=null,z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,tt=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=tt>=2);let rt=null,$={};const it=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Bt=new _e().fromArray(it),V=new _e().fromArray(St);function Q(k,gt,q,et){const _t=new Uint8Array(4),xt=n.createTexture();n.bindTexture(k,xt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<q;Kt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(gt+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return xt}const dt={};dt[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),r.setFunc(Ms),at(!1),wt(hd),ot(n.CULL_FACE),D(to);function ot(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Ct(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function zt(k,gt){return d[k]!==gt?(n.bindFramebuffer(k,gt),d[k]=gt,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=gt),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ht(k,gt){let q=h,et=!1;if(k){q=f.get(gt),q===void 0&&(q=[],f.set(gt,q));const _t=k.textures;if(q.length!==_t.length||q[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Kt=_t.length;xt<Kt;xt++)q[xt]=n.COLOR_ATTACHMENT0+xt;q.length=_t.length,et=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,et=!0);et&&n.drawBuffers(q)}function qt(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const J={[So]:n.FUNC_ADD,[W0]:n.FUNC_SUBTRACT,[X0]:n.FUNC_REVERSE_SUBTRACT};J[$0]=n.MIN,J[Y0]=n.MAX;const ct={[q0]:n.ZERO,[j0]:n.ONE,[Z0]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[nm]:n.SRC_ALPHA_SATURATE,[tm]:n.DST_COLOR,[J0]:n.DST_ALPHA,[K0]:n.ONE_MINUS_SRC_COLOR,[vc]:n.ONE_MINUS_SRC_ALPHA,[em]:n.ONE_MINUS_DST_COLOR,[Q0]:n.ONE_MINUS_DST_ALPHA,[im]:n.CONSTANT_COLOR,[om]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[rm]:n.ONE_MINUS_CONSTANT_ALPHA};function D(k,gt,q,et,_t,xt,Kt,Ne,Ze,pe){if(k===to){y===!0&&(Ct(n.BLEND),y=!1);return}if(y===!1&&(ot(n.BLEND),y=!0),k!==V0){if(k!==p||pe!==w){if((m!==So||_!==So)&&(n.blendEquation(n.FUNC_ADD),m=So,_=So),pe)switch(k){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hr:n.blendFunc(n.ONE,n.ONE);break;case pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case md:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case md:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,b=null,T=null,E=null,A.set(0,0,0),S=0,p=k,w=pe}return}_t=_t||gt,xt=xt||q,Kt=Kt||et,(gt!==m||_t!==_)&&(n.blendEquationSeparate(J[gt],J[_t]),m=gt,_=_t),(q!==v||et!==b||xt!==T||Kt!==E)&&(n.blendFuncSeparate(ct[q],ct[et],ct[xt],ct[Kt]),v=q,b=et,T=xt,E=Kt),(Ne.equals(A)===!1||Ze!==S)&&(n.blendColor(Ne.r,Ne.g,Ne.b,Ze),A.copy(Ne),S=Ze),p=k,w=!1}function kt(k,gt){k.side===Ye?Ct(n.CULL_FACE):ot(n.CULL_FACE);let q=k.side===un;gt&&(q=!q),at(q),k.blending===ps&&k.transparent===!1?D(to):D(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const et=k.stencilWrite;a.setTest(et),et&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){M!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),M=k)}function wt(k){k!==H0?(ot(n.CULL_FACE),k!==R&&(k===hd?n.cullFace(n.BACK):k===G0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),R=k}function ht(k){k!==N&&(B&&n.lineWidth(k),N=k)}function Gt(k,gt,q){k?(ot(n.POLYGON_OFFSET_FILL),(U!==gt||z!==q)&&(n.polygonOffset(gt,q),U=gt,z=q)):Ct(n.POLYGON_OFFSET_FILL)}function Mt(k){k?ot(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function L(k){k===void 0&&(k=n.TEXTURE0+Y-1),rt!==k&&(n.activeTexture(k),rt=k)}function C(k,gt,q){q===void 0&&(rt===null?q=n.TEXTURE0+Y-1:q=rt);let et=$[q];et===void 0&&(et={type:void 0,texture:void 0},$[q]=et),(et.type!==k||et.texture!==gt)&&(rt!==q&&(n.activeTexture(q),rt=q),n.bindTexture(k,gt||dt[k]),et.type=k,et.texture=gt)}function H(){const k=$[rt];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(k){Bt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Bt.copy(k))}function Tt(k){V.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),V.copy(k))}function ae(k,gt){let q=c.get(gt);q===void 0&&(q=new WeakMap,c.set(gt,q));let et=q.get(k);et===void 0&&(et=n.getUniformBlockIndex(gt,k.name),q.set(k,et))}function te(k,gt){const et=c.get(gt).get(k);l.get(gt)!==et&&(n.uniformBlockBinding(gt,et,k.__bindingPointIndex),l.set(gt,et))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},rt=null,$={},d={},f=new WeakMap,h=[],g=null,y=!1,p=null,m=null,v=null,b=null,_=null,T=null,E=null,A=new vt(0,0,0),S=0,w=!1,M=null,R=null,N=null,U=null,z=null,Bt.set(0,0,n.canvas.width,n.canvas.height),V.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ot,disable:Ct,bindFramebuffer:zt,drawBuffers:Ht,useProgram:qt,setBlending:D,setMaterial:kt,setFlipSided:at,setCullFace:wt,setLineWidth:ht,setPolygonOffset:Gt,setScissorTest:Mt,activeTexture:L,bindTexture:C,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:nt,texImage2D:Et,texImage3D:Vt,updateUBOMapping:ae,uniformBlockBinding:te,texStorage2D:ie,texStorage3D:ut,texSubImage2D:K,texSubImage3D:Pt,compressedTexSubImage2D:mt,compressedTexSubImage3D:bt,scissor:Yt,viewport:Tt,reset:be}}function df(n,t,e,i){const o=Gv(i);switch(e){case Uh:return n*t;case kh:return n*t;case Fh:return n*t*2;case Su:return n*t/o.components*o.byteLength;case Eu:return n*t/o.components*o.byteLength;case Oh:return n*t*2/o.components*o.byteLength;case Tu:return n*t*2/o.components*o.byteLength;case zh:return n*t*3/o.components*o.byteLength;case qn:return n*t*4/o.components*o.byteLength;case Au:return n*t*4/o.components*o.byteLength;case Ma:case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wa:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lc:case Nc:return Math.max(n,16)*Math.max(t,8)/4;case Ic:case Dc:return Math.max(n,8)*Math.max(t,8)/2;case Uc:case zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case qc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Jc:case Qc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bh:case tu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case eu:case nu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gv(n){switch(n){case zi:case Lh:return{byteLength:1,components:1};case pr:case Dh:case Cr:return{byteLength:2,components:1};case bu:case wu:return{byteLength:2,components:4};case Io:case Mu:case ai:return{byteLength:4,components:1};case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Vv(n,t,e,i,o,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return h?new OffscreenCanvas(L,C):xr("canvas")}function y(L,C,H){let Z=1;const nt=Mt(L);if((nt.width>H||nt.height>H)&&(Z=H/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const K=Math.floor(Z*nt.width),Pt=Math.floor(Z*nt.height);d===void 0&&(d=g(K,Pt));const mt=C?g(K,Pt):d;return mt.width=K,mt.height=Pt,mt.getContext("2d").drawImage(L,0,0,K,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+Pt+")."),mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,C,H,Z,nt=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=C;if(C===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),C===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),C===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),C===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),C===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),C===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),C===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),C===n.RGBA){const Pt=nt?Qa:le.getTransfer(Z);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=Pt===ge?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(L,C){let H;return L?C===null||C===Io||C===Ss?H=n.DEPTH24_STENCIL8:C===ai?H=n.DEPTH32F_STENCIL8:C===pr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Io||C===Ss?H=n.DEPTH_COMPONENT24:C===ai?H=n.DEPTH_COMPONENT32F:C===pr&&(H=n.DEPTH_COMPONENT16),H}function T(L,C){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==ri?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function E(L){const C=L.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&u.delete(C)}function A(L){const C=L.target;C.removeEventListener("dispose",A),M(C)}function S(L){const C=i.get(L);if(C.__webglInit===void 0)return;const H=L.source,Z=f.get(H);if(Z){const nt=Z[C.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(L),Object.keys(Z).length===0&&f.delete(H)}i.remove(L)}function w(L){const C=i.get(L);n.deleteTexture(C.__webglTexture);const H=L.source,Z=f.get(H);delete Z[C.__cacheKey],r.memory.textures--}function M(L){const C=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(C.__webglFramebuffer[Z]))for(let nt=0;nt<C.__webglFramebuffer[Z].length;nt++)n.deleteFramebuffer(C.__webglFramebuffer[Z][nt]);else n.deleteFramebuffer(C.__webglFramebuffer[Z]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[Z])}else{if(Array.isArray(C.__webglFramebuffer))for(let Z=0;Z<C.__webglFramebuffer.length;Z++)n.deleteFramebuffer(C.__webglFramebuffer[Z]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Z=0;Z<C.__webglColorRenderbuffer.length;Z++)C.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[Z]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const H=L.textures;for(let Z=0,nt=H.length;Z<nt;Z++){const K=i.get(H[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(H[Z])}i.remove(L)}let R=0;function N(){R=0}function U(){const L=R;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),R+=1,L}function z(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function Y(L,C){const H=i.get(L);if(L.isVideoTexture&&ht(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(H,L,C);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+C)}function B(L,C){const H=i.get(L);if(L.version>0&&H.__version!==L.version){V(H,L,C);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+C)}function tt(L,C){const H=i.get(L);if(L.version>0&&H.__version!==L.version){V(H,L,C);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+C)}function G(L,C){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Q(H,L,C);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+C)}const rt={[ui]:n.REPEAT,[$e]:n.CLAMP_TO_EDGE,[Pc]:n.MIRRORED_REPEAT},$={[Sn]:n.NEAREST,[mm]:n.NEAREST_MIPMAP_NEAREST,[Br]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[To]:n.LINEAR_MIPMAP_LINEAR},it={[_m]:n.NEVER,[Em]:n.ALWAYS,[vm]:n.LESS,[Gh]:n.LEQUAL,[Mm]:n.EQUAL,[Sm]:n.GEQUAL,[bm]:n.GREATER,[wm]:n.NOTEQUAL};function St(L,C){if(C.type===ai&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ri||C.magFilter===Cl||C.magFilter===Br||C.magFilter===To||C.minFilter===ri||C.minFilter===Cl||C.minFilter===Br||C.minFilter===To)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,rt[C.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,rt[C.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,rt[C.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,$[C.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,$[C.minFilter]),C.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,it[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Sn||C.minFilter!==Br&&C.minFilter!==To||C.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Bt(L,C){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));const Z=C.source;let nt=f.get(Z);nt===void 0&&(nt={},f.set(Z,nt));const K=z(C);if(K!==L.__cacheKey){nt[K]===void 0&&(nt[K]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,H=!0),nt[K].usedTimes++;const Pt=nt[L.__cacheKey];Pt!==void 0&&(nt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(C)),L.__cacheKey=K,L.__webglTexture=nt[K].texture}return H}function V(L,C,H){let Z=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Z=n.TEXTURE_3D);const nt=Bt(L,C),K=C.source;e.bindTexture(Z,L.__webglTexture,n.TEXTURE0+H);const Pt=i.get(K);if(K.version!==Pt.__version||nt===!0){e.activeTexture(n.TEXTURE0+H);const mt=le.getPrimaries(le.workingColorSpace),bt=C.colorSpace===Ci?null:le.getPrimaries(C.colorSpace),ie=C.colorSpace===Ci||mt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ut=y(C.image,!1,o.maxTextureSize);ut=Gt(C,ut);const Et=s.convert(C.format,C.colorSpace),Vt=s.convert(C.type);let Yt=b(C.internalFormat,Et,Vt,C.colorSpace,C.isVideoTexture);St(Z,C);let Tt;const ae=C.mipmaps,te=C.isVideoTexture!==!0,be=Pt.__version===void 0||nt===!0,k=K.dataReady,gt=T(C,ut);if(C.isDepthTexture)Yt=_(C.format===Es,C.type),be&&(te?e.texStorage2D(n.TEXTURE_2D,1,Yt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Et,Vt,null));else if(C.isDataTexture)if(ae.length>0){te&&be&&e.texStorage2D(n.TEXTURE_2D,gt,Yt,ae[0].width,ae[0].height);for(let q=0,et=ae.length;q<et;q++)Tt=ae[q],te?k&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(n.TEXTURE_2D,q,Yt,Tt.width,Tt.height,0,Et,Vt,Tt.data);C.generateMipmaps=!1}else te?(be&&e.texStorage2D(n.TEXTURE_2D,gt,Yt,ut.width,ut.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,Et,Vt,ut.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Et,Vt,ut.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){te&&be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Yt,ae[0].width,ae[0].height,ut.depth);for(let q=0,et=ae.length;q<et;q++)if(Tt=ae[q],C.format!==qn)if(Et!==null)if(te){if(k)if(C.layerUpdates.size>0){const _t=df(Tt.width,Tt.height,C.format,C.type);for(const xt of C.layerUpdates){const Kt=Tt.data.subarray(xt*_t/Tt.data.BYTES_PER_ELEMENT,(xt+1)*_t/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,xt,Tt.width,Tt.height,1,Et,Kt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,ut.depth,Et,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Yt,Tt.width,Tt.height,ut.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,ut.depth,Et,Vt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Yt,Tt.width,Tt.height,ut.depth,0,Et,Vt,Tt.data)}else{te&&be&&e.texStorage2D(n.TEXTURE_2D,gt,Yt,ae[0].width,ae[0].height);for(let q=0,et=ae.length;q<et;q++)Tt=ae[q],C.format!==qn?Et!==null?te?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Yt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?k&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(n.TEXTURE_2D,q,Yt,Tt.width,Tt.height,0,Et,Vt,Tt.data)}else if(C.isDataArrayTexture)if(te){if(be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Yt,ut.width,ut.height,ut.depth),k)if(C.layerUpdates.size>0){const q=df(ut.width,ut.height,C.format,C.type);for(const et of C.layerUpdates){const _t=ut.data.subarray(et*q/ut.data.BYTES_PER_ELEMENT,(et+1)*q/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,ut.width,ut.height,1,Et,Vt,_t)}C.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,Vt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,ut.width,ut.height,ut.depth,0,Et,Vt,ut.data);else if(C.isData3DTexture)te?(be&&e.texStorage3D(n.TEXTURE_3D,gt,Yt,ut.width,ut.height,ut.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,Vt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,ut.width,ut.height,ut.depth,0,Et,Vt,ut.data);else if(C.isFramebufferTexture){if(be)if(te)e.texStorage2D(n.TEXTURE_2D,gt,Yt,ut.width,ut.height);else{let q=ut.width,et=ut.height;for(let _t=0;_t<gt;_t++)e.texImage2D(n.TEXTURE_2D,_t,Yt,q,et,0,Et,Vt,null),q>>=1,et>>=1}}else if(ae.length>0){if(te&&be){const q=Mt(ae[0]);e.texStorage2D(n.TEXTURE_2D,gt,Yt,q.width,q.height)}for(let q=0,et=ae.length;q<et;q++)Tt=ae[q],te?k&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Et,Vt,Tt):e.texImage2D(n.TEXTURE_2D,q,Yt,Et,Vt,Tt);C.generateMipmaps=!1}else if(te){if(be){const q=Mt(ut);e.texStorage2D(n.TEXTURE_2D,gt,Yt,q.width,q.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Vt,ut)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Et,Vt,ut);p(C)&&m(Z),Pt.__version=K.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Q(L,C,H){if(C.image.length!==6)return;const Z=Bt(L,C),nt=C.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+H);const K=i.get(nt);if(nt.version!==K.__version||Z===!0){e.activeTexture(n.TEXTURE0+H);const Pt=le.getPrimaries(le.workingColorSpace),mt=C.colorSpace===Ci?null:le.getPrimaries(C.colorSpace),bt=C.colorSpace===Ci||Pt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ie=C.isCompressedTexture||C.image[0].isCompressedTexture,ut=C.image[0]&&C.image[0].isDataTexture,Et=[];for(let et=0;et<6;et++)!ie&&!ut?Et[et]=y(C.image[et],!0,o.maxCubemapSize):Et[et]=ut?C.image[et].image:C.image[et],Et[et]=Gt(C,Et[et]);const Vt=Et[0],Yt=s.convert(C.format,C.colorSpace),Tt=s.convert(C.type),ae=b(C.internalFormat,Yt,Tt,C.colorSpace),te=C.isVideoTexture!==!0,be=K.__version===void 0||Z===!0,k=nt.dataReady;let gt=T(C,Vt);St(n.TEXTURE_CUBE_MAP,C);let q;if(ie){te&&be&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,ae,Vt.width,Vt.height);for(let et=0;et<6;et++){q=Et[et].mipmaps;for(let _t=0;_t<q.length;_t++){const xt=q[_t];C.format!==qn?Yt!==null?te?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,xt.width,xt.height,Yt,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,ae,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,xt.width,xt.height,Yt,Tt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,ae,xt.width,xt.height,0,Yt,Tt,xt.data)}}}else{if(q=C.mipmaps,te&&be){q.length>0&&gt++;const et=Mt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,ae,et.width,et.height)}for(let et=0;et<6;et++)if(ut){te?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et[et].width,Et[et].height,Yt,Tt,Et[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ae,Et[et].width,Et[et].height,0,Yt,Tt,Et[et].data);for(let _t=0;_t<q.length;_t++){const Kt=q[_t].image[et].image;te?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Kt.width,Kt.height,Yt,Tt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,ae,Kt.width,Kt.height,0,Yt,Tt,Kt.data)}}else{te?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Yt,Tt,Et[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ae,Yt,Tt,Et[et]);for(let _t=0;_t<q.length;_t++){const xt=q[_t];te?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Yt,Tt,xt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,ae,Yt,Tt,xt.image[et])}}}p(C)&&m(n.TEXTURE_CUBE_MAP),K.__version=nt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function dt(L,C,H,Z,nt,K){const Pt=s.convert(H.format,H.colorSpace),mt=s.convert(H.type),bt=b(H.internalFormat,Pt,mt,H.colorSpace),ie=i.get(C),ut=i.get(H);if(ut.__renderTarget=C,!ie.__hasExternalTextures){const Et=Math.max(1,C.width>>K),Vt=Math.max(1,C.height>>K);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,bt,Et,Vt,C.depth,0,Pt,mt,null):e.texImage2D(nt,K,bt,Et,Vt,0,Pt,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),wt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,nt,ut.__webglTexture,0,at(C)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,nt,ut.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(L,C,H){if(n.bindRenderbuffer(n.RENDERBUFFER,L),C.depthBuffer){const Z=C.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,K=_(C.stencilBuffer,nt),Pt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=at(C);wt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,K,C.width,C.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,K,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,K,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,L)}else{const Z=C.textures;for(let nt=0;nt<Z.length;nt++){const K=Z[nt],Pt=s.convert(K.format,K.colorSpace),mt=s.convert(K.type),bt=b(K.internalFormat,Pt,mt,K.colorSpace),ie=at(C);H&&wt(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,bt,C.width,C.height):wt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,bt,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,bt,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(C.depthTexture);Z.__renderTarget=C,(!Z.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const nt=Z.__webglTexture,K=at(C);if(C.depthTexture.format===ms)wt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(C.depthTexture.format===Es)wt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function zt(L){const C=i.get(L),H=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Z){const nt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),C.__depthDisposeCallback=nt}C.__boundDepthTexture=Z}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ct(C.__webglFramebuffer,L)}else if(H){C.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[Z]),C.__webglDepthbuffer[Z]===void 0)C.__webglDepthbuffer[Z]=n.createRenderbuffer(),ot(C.__webglDepthbuffer[Z],L,!1);else{const nt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=C.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),ot(C.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(L,C,H){const Z=i.get(L);C!==void 0&&dt(Z.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&zt(L)}function qt(L){const C=L.texture,H=i.get(L),Z=i.get(C);L.addEventListener("dispose",A);const nt=L.textures,K=L.isWebGLCubeRenderTarget===!0,Pt=nt.length>1;if(Pt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=C.version,r.memory.textures++),K){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let bt=0;bt<C.mipmaps.length;bt++)H.__webglFramebuffer[mt][bt]=n.createFramebuffer()}else H.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<C.mipmaps.length;mt++)H.__webglFramebuffer[mt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let mt=0,bt=nt.length;mt<bt;mt++){const ie=i.get(nt[mt]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),r.memory.textures++)}if(L.samples>0&&wt(L)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<nt.length;mt++){const bt=nt[mt];H.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);const ie=s.convert(bt.format,bt.colorSpace),ut=s.convert(bt.type),Et=b(bt.internalFormat,ie,ut,bt.colorSpace,L.isXRRenderTarget===!0),Vt=at(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Et,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),St(n.TEXTURE_CUBE_MAP,C);for(let mt=0;mt<6;mt++)if(C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)dt(H.__webglFramebuffer[mt][bt],L,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,bt);else dt(H.__webglFramebuffer[mt],L,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);p(C)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let mt=0,bt=nt.length;mt<bt;mt++){const ie=nt[mt],ut=i.get(ie);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),St(n.TEXTURE_2D,ie),dt(H.__webglFramebuffer,L,ie,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),p(ie)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(mt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,Z.__webglTexture),St(mt,C),C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)dt(H.__webglFramebuffer[bt],L,C,n.COLOR_ATTACHMENT0,mt,bt);else dt(H.__webglFramebuffer,L,C,n.COLOR_ATTACHMENT0,mt,0);p(C)&&m(mt),e.unbindTexture()}L.depthBuffer&&zt(L)}function J(L){const C=L.textures;for(let H=0,Z=C.length;H<Z;H++){const nt=C[H];if(p(nt)){const K=v(L),Pt=i.get(nt).__webglTexture;e.bindTexture(K,Pt),m(K),e.unbindTexture()}}}const ct=[],D=[];function kt(L){if(L.samples>0){if(wt(L)===!1){const C=L.textures,H=L.width,Z=L.height;let nt=n.COLOR_BUFFER_BIT;const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(L),mt=C.length>1;if(mt)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[bt]);const ie=i.get(C[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,nt,n.NEAREST),l===!0&&(ct.length=0,D.length=0,ct.push(n.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(K),D.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[bt]);const ie=i.get(C[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,ie,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function at(L){return Math.min(o.maxSamples,L.samples)}function wt(L){const C=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ht(L){const C=r.render.frame;u.get(L)!==C&&(u.set(L,C),L.update())}function Gt(L,C){const H=L.colorSpace,Z=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Ls&&H!==Ci&&(le.getTransfer(H)===ge?(Z!==qn||nt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),C}function Mt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Ht,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=wt}function Wv(n,t){function e(i,o=Ci){let s;const r=le.getTransfer(o);if(i===zi)return n.UNSIGNED_BYTE;if(i===bu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return n.BYTE;if(i===Dh)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===Mu)return n.INT;if(i===Io)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Cr)return n.HALF_FLOAT;if(i===Uh)return n.ALPHA;if(i===zh)return n.RGB;if(i===qn)return n.RGBA;if(i===kh)return n.LUMINANCE;if(i===Fh)return n.LUMINANCE_ALPHA;if(i===ms)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===Su)return n.RED;if(i===Eu)return n.RED_INTEGER;if(i===Oh)return n.RG;if(i===Tu)return n.RG_INTEGER;if(i===Au)return n.RGBA_INTEGER;if(i===Ma||i===ba||i===wa||i===Sa)if(r===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Lc||i===Dc||i===Nc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uc||i===zc||i===kc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uc||i===zc)return r===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fc||i===Oc||i===Bc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===$c||i===Yc||i===qc||i===jc||i===Zc||i===Kc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$c)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return r===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Jc||i===Qc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ea)return r===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bh||i===tu||i===eu||i===nu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===eu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Xv extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $v={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const y of t.hand.values()){const p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($v)))}return a!==null&&(a.visible=o!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`;class jv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const o=new qe,s=t.properties.get(o);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ro({vertexShader:Yv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new Ee(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zv extends Ds{constructor(t,e){super();const i=this;let o=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const y=new jv,p=e.getContextAttributes();let m=null,v=null;const b=[],_=[],T=new lt;let E=null;const A=new bn;A.viewport=new _e;const S=new bn;S.viewport=new _e;const w=[A,S],M=new Xv;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=b[V];return Q===void 0&&(Q=new ec,b[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=b[V];return Q===void 0&&(Q=new ec,b[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=b[V];return Q===void 0&&(Q=new ec,b[V]=Q),Q.getHandSpace()};function U(V){const Q=_.indexOf(V.inputSource);if(Q===-1)return;const dt=b[Q];dt!==void 0&&(dt.update(V.inputSource,V.frame,c||r),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){o.removeEventListener("select",U),o.removeEventListener("selectstart",U),o.removeEventListener("selectend",U),o.removeEventListener("squeeze",U),o.removeEventListener("squeezestart",U),o.removeEventListener("squeezeend",U),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",Y);for(let V=0;V<b.length;V++){const Q=_[V];Q!==null&&(_[V]=null,b[V].disconnect(Q))}R=null,N=null,y.reset(),t.setRenderTarget(m),h=null,f=null,d=null,o=null,v=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(V){if(o=V,o!==null){if(m=t.getRenderTarget(),o.addEventListener("select",U),o.addEventListener("selectstart",U),o.addEventListener("selectend",U),o.addEventListener("squeeze",U),o.addEventListener("squeezestart",U),o.addEventListener("squeezeend",U),o.addEventListener("end",z),o.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),o.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(o,e,Q),o.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Lo(h.framebufferWidth,h.framebufferHeight,{format:qn,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,dt=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Es:ms,dt=p.stencil?Ss:Io);const Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};d=new XRWebGLBinding(o,e),f=d.createProjectionLayer(Ct),o.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Lo(f.textureWidth,f.textureHeight,{format:qn,type:zi,depthTexture:new tp(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await o.requestReferenceSpace(a),Bt.setContext(o),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(V){for(let Q=0;Q<V.removed.length;Q++){const dt=V.removed[Q],ot=_.indexOf(dt);ot>=0&&(_[ot]=null,b[ot].disconnect(dt))}for(let Q=0;Q<V.added.length;Q++){const dt=V.added[Q];let ot=_.indexOf(dt);if(ot===-1){for(let zt=0;zt<b.length;zt++)if(zt>=_.length){_.push(dt),ot=zt;break}else if(_[zt]===null){_[zt]=dt,ot=zt;break}if(ot===-1)break}const Ct=b[ot];Ct&&Ct.connect(dt)}}const B=new I,tt=new I;function G(V,Q,dt){B.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(dt.matrixWorld);const ot=B.distanceTo(tt),Ct=Q.projectionMatrix.elements,zt=dt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),qt=Ct[14]/(Ct[10]+1),J=(Ct[9]+1)/Ct[5],ct=(Ct[9]-1)/Ct[5],D=(Ct[8]-1)/Ct[0],kt=(zt[8]+1)/zt[0],at=Ht*D,wt=Ht*kt,ht=ot/(-D+kt),Gt=ht*-D;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Gt),V.translateZ(ht),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ct[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Mt=Ht+ht,L=qt+ht,C=at-Gt,H=wt+(ot-Gt),Z=J*qt/L*Mt,nt=ct*qt/L*Mt;V.projectionMatrix.makePerspective(C,H,Z,nt,Mt,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function rt(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(o===null)return;let Q=V.near,dt=V.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(dt=y.depthFar)),M.near=S.near=A.near=Q,M.far=S.far=A.far=dt,(R!==M.near||N!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,N=M.far),A.layers.mask=V.layers.mask|2,S.layers.mask=V.layers.mask|4,M.layers.mask=A.layers.mask|S.layers.mask;const ot=V.parent,Ct=M.cameras;rt(M,ot);for(let zt=0;zt<Ct.length;zt++)rt(Ct[zt],ot);Ct.length===2?G(M,A,S):M.projectionMatrix.copy(A.projectionMatrix),$(V,M,ot)};function $(V,Q,dt){dt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=mr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let it=null;function St(V,Q){if(u=Q.getViewerPose(c||r),g=Q,u!==null){const dt=u.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let ot=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let zt=0;zt<dt.length;zt++){const Ht=dt[zt];let qt=null;if(h!==null)qt=h.getViewport(Ht);else{const ct=d.getViewSubImage(f,Ht);qt=ct.viewport,zt===0&&(t.setRenderTargetTextures(v,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(v))}let J=w[zt];J===void 0&&(J=new bn,J.layers.enable(zt),J.viewport=new _e,w[zt]=J),J.matrix.fromArray(Ht.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ht.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(qt.x,qt.y,qt.width,qt.height),zt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(J)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const zt=d.getDepthInformation(dt[0]);zt&&zt.isValid&&zt.texture&&y.init(t,zt,o.renderState)}}for(let dt=0;dt<b.length;dt++){const ot=_[dt],Ct=b[dt];ot!==null&&Ct!==void 0&&Ct.update(ot,Q,c||r)}it&&it(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Bt=new Jh;Bt.setAnimationLoop(St),this.setAnimationLoop=function(V){it=V},this.dispose=function(){}}}const yo=new on,Kv=new Rt;function Jv(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,jh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function o(p,m,v,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,_)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),b=v.envMap,_=v.envMapRotation;b&&(p.envMap.value=b,yo.copy(_),yo.x*=-1,yo.y*=-1,yo.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(yo.y*=-1,yo.z*=-1),p.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(yo)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Qv(n,t,e,i){let o={},s={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const _=b.program;i.uniformBlockBinding(v,_)}function c(v,b){let _=o[v.id];_===void 0&&(g(v),_=u(v),o[v.id]=_,v.addEventListener("dispose",p));const T=b.program;i.updateUBOMapping(v,T);const E=t.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function u(v){const b=d();v.__bindingPointIndex=b;const _=n.createBuffer(),T=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=o[v.id],_=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,A=_.length;E<A;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,M=S.length;w<M;w++){const R=S[w];if(h(R,E,w,T)===!0){const N=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let Y=0;Y<U.length;Y++){const B=U[Y],tt=y(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+z,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,z),z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,b,_,T){const E=v.value,A=b+"_"+_;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const S=T[A];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return T[A]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function g(v){const b=v.uniforms;let _=0;const T=16;for(let A=0,S=b.length;A<S;A++){const w=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,R=w.length;M<R;M++){const N=w[M],U=Array.isArray(N.value)?N.value:[N.value];for(let z=0,Y=U.length;z<Y;z++){const B=U[z],tt=y(B),G=_%T,rt=G%tt.boundary,$=G+rt;_+=rt,$!==0&&T-$<tt.storage&&(_+=T-$),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=tt.storage}}}const E=_%T;return E>0&&(_+=T-E),v.__size=_,v.__cache={},this}function y(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){const b=v.target;b.removeEventListener("dispose",p);const _=r.indexOf(b.__bindingPointIndex);r.splice(_,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete s[b.id]}function m(){for(const v in o)n.deleteBuffer(o[v]);r=[],o={},s={}}return{bind:l,update:c,dispose:m}}class t1{constructor(t={}){const{canvas:e=Gm(),context:i=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=r;const g=new Uint32Array(4),y=new Int32Array(4);let p=null,m=null;const v=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=eo,this.toneMappingExposure=1;const _=this;let T=!1,E=0,A=0,S=null,w=-1,M=null;const R=new _e,N=new _e;let U=null;const z=new vt(0);let Y=0,B=e.width,tt=e.height,G=1,rt=null,$=null;const it=new _e(0,0,B,tt),St=new _e(0,0,B,tt);let Bt=!1;const V=new As;let Q=!1,dt=!1;const ot=new Rt,Ct=new Rt,zt=new I,Ht=new _e,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ct(){return S===null?G:1}let D=i;function kt(P,F){return e.getContext(P,F)}try{const P={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vu}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",xt,!1),D===null){const F="webgl2";if(D=kt(F,P),D===null)throw kt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let at,wt,ht,Gt,Mt,L,C,H,Z,nt,K,Pt,mt,bt,ie,ut,Et,Vt,Yt,Tt,ae,te,be,k;function gt(){at=new s_(D),at.init(),te=new Wv(D,at),wt=new Qy(D,at,t,te),ht=new Hv(D,at),wt.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Gt=new l_(D),Mt=new Tv,L=new Vv(D,at,ht,Mt,wt,te,Gt),C=new e_(_),H=new o_(_),Z=new mg(D),be=new Ky(D,Z),nt=new r_(D,Z,Gt,be),K=new u_(D,nt,Z,Gt),Yt=new c_(D,wt,L),ut=new t_(Mt),Pt=new Ev(_,C,H,at,wt,be,ut),mt=new Jv(_,Mt),bt=new Cv,ie=new Nv(at),Vt=new Zy(_,C,H,ht,K,h,l),Et=new Ov(_,K,wt),k=new Qv(D,Gt,wt,ht),Tt=new Jy(D,at,Gt),ae=new a_(D,at,Gt),Gt.programs=Pt.programs,_.capabilities=wt,_.extensions=at,_.properties=Mt,_.renderLists=bt,_.shadowMap=Et,_.state=ht,_.info=Gt}gt();const q=new Zv(_,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=at.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=at.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(B,tt,!1))},this.getSize=function(P){return P.set(B,tt)},this.setSize=function(P,F,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,tt=F,e.width=Math.floor(P*G),e.height=Math.floor(F*G),W===!0&&(e.style.width=P+"px",e.style.height=F+"px"),this.setViewport(0,0,P,F)},this.getDrawingBufferSize=function(P){return P.set(B*G,tt*G).floor()},this.setDrawingBufferSize=function(P,F,W){B=P,tt=F,G=W,e.width=Math.floor(P*W),e.height=Math.floor(F*W),this.setViewport(0,0,P,F)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(it)},this.setViewport=function(P,F,W,X){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,F,W,X),ht.viewport(R.copy(it).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(St)},this.setScissor=function(P,F,W,X){P.isVector4?St.set(P.x,P.y,P.z,P.w):St.set(P,F,W,X),ht.scissor(N.copy(St).multiplyScalar(G).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(P){ht.setScissorTest(Bt=P)},this.setOpaqueSort=function(P){rt=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(P=!0,F=!0,W=!0){let X=0;if(P){let O=!1;if(S!==null){const ft=S.texture.format;O=ft===Au||ft===Tu||ft===Eu}if(O){const ft=S.texture.type,yt=ft===zi||ft===Io||ft===pr||ft===Ss||ft===bu||ft===wu,Lt=Vt.getClearColor(),Dt=Vt.getClearAlpha(),jt=Lt.r,Jt=Lt.g,Nt=Lt.b;yt?(g[0]=jt,g[1]=Jt,g[2]=Nt,g[3]=Dt,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=jt,y[1]=Jt,y[2]=Nt,y[3]=Dt,D.clearBufferiv(D.COLOR,0,y))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),bt.dispose(),ie.dispose(),Mt.dispose(),C.dispose(),H.dispose(),K.dispose(),be.dispose(),k.dispose(),Pt.dispose(),q.dispose(),q.removeEventListener("sessionstart",sd),q.removeEventListener("sessionend",rd),fo.stop()};function et(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Gt.autoReset,F=Et.enabled,W=Et.autoUpdate,X=Et.needsUpdate,O=Et.type;gt(),Gt.autoReset=P,Et.enabled=F,Et.autoUpdate=W,Et.needsUpdate=X,Et.type=O}function xt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Kt(P){const F=P.target;F.removeEventListener("dispose",Kt),Ne(F)}function Ne(P){Ze(P),Mt.remove(P)}function Ze(P){const F=Mt.get(P).programs;F!==void 0&&(F.forEach(function(W){Pt.releaseProgram(W)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,F,W,X,O,ft){F===null&&(F=qt);const yt=O.isMesh&&O.matrixWorld.determinant()<0,Lt=F0(P,F,W,X,O);ht.setMaterial(X,yt);let Dt=W.index,jt=1;if(X.wireframe===!0){if(Dt=nt.getWireframeAttribute(W),Dt===void 0)return;jt=2}const Jt=W.drawRange,Nt=W.attributes.position;let ce=Jt.start*jt,we=(Jt.start+Jt.count)*jt;ft!==null&&(ce=Math.max(ce,ft.start*jt),we=Math.min(we,(ft.start+ft.count)*jt)),Dt!==null?(ce=Math.max(ce,0),we=Math.min(we,Dt.count)):Nt!=null&&(ce=Math.max(ce,0),we=Math.min(we,Nt.count));const Ae=we-ce;if(Ae<0||Ae===1/0)return;be.setup(O,X,Lt,W,Dt);let fn,fe=Tt;if(Dt!==null&&(fn=Z.get(Dt),fe=ae,fe.setIndex(fn)),O.isMesh)X.wireframe===!0?(ht.setLineWidth(X.wireframeLinewidth*ct()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(O.isLine){let Ft=X.linewidth;Ft===void 0&&(Ft=1),ht.setLineWidth(Ft*ct()),O.isLineSegments?fe.setMode(D.LINES):O.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else O.isPoints?fe.setMode(D.POINTS):O.isSprite&&fe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ft=O._multiDrawStarts,yi=O._multiDrawCounts,he=O._multiDrawCount,Hn=Dt?Z.get(Dt).bytesPerElement:1,Go=Mt.get(X).currentProgram.getUniforms();for(let xn=0;xn<he;xn++)Go.setValue(D,"_gl_DrawID",xn),fe.render(Ft[xn]/Hn,yi[xn])}else if(O.isInstancedMesh)fe.renderInstances(ce,Ae,O.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yi=Math.min(W.instanceCount,Ft);fe.renderInstances(ce,Ae,yi)}else fe.render(ce,Ae)};function pe(P,F,W){P.transparent===!0&&P.side===Ye&&P.forceSinglePass===!1?(P.side=un,P.needsUpdate=!0,Or(P,F,W),P.side=Qn,P.needsUpdate=!0,Or(P,F,W),P.side=Ye):Or(P,F,W)}this.compile=function(P,F,W=null){W===null&&(W=P),m=ie.get(W),m.init(F),b.push(m),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),P!==W&&P.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const X=new Set;return P.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ft=O.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const Lt=ft[yt];pe(Lt,W,O),X.add(Lt)}else pe(ft,W,O),X.add(ft)}),b.pop(),m=null,X},this.compileAsync=function(P,F,W=null){const X=this.compile(P,F,W);return new Promise(O=>{function ft(){if(X.forEach(function(yt){Mt.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){O(P);return}setTimeout(ft,10)}at.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Bn=null;function xi(P){Bn&&Bn(P)}function sd(){fo.stop()}function rd(){fo.start()}const fo=new Jh;fo.setAnimationLoop(xi),typeof self<"u"&&fo.setContext(self),this.setAnimationLoop=function(P){Bn=P,q.setAnimationLoop(P),P===null?fo.stop():fo.start()},q.addEventListener("sessionstart",sd),q.addEventListener("sessionend",rd),this.render=function(P,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,F,S),m=ie.get(P,b.length),m.init(F),b.push(m),Ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(Ct),dt=this.localClippingEnabled,Q=ut.init(this.clippingPlanes,dt),p=bt.get(P,v.length),p.init(),v.push(p),q.enabled===!0&&q.isPresenting===!0){const ft=_.xr.getDepthSensingMesh();ft!==null&&Al(ft,F,-1/0,_.sortObjects)}Al(P,F,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(rt,$),J=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,J&&Vt.addToRenderList(p,P),this.info.render.frame++,Q===!0&&ut.beginShadows();const W=m.state.shadowsArray;Et.render(W,P,F),Q===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,O=p.transmissive;if(m.setupLights(),F.isArrayCamera){const ft=F.cameras;if(O.length>0)for(let yt=0,Lt=ft.length;yt<Lt;yt++){const Dt=ft[yt];ld(X,O,P,Dt)}J&&Vt.render(P);for(let yt=0,Lt=ft.length;yt<Lt;yt++){const Dt=ft[yt];ad(p,P,Dt,Dt.viewport)}}else O.length>0&&ld(X,O,P,F),J&&Vt.render(P),ad(p,P,F);S!==null&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(_,P,F),be.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(m=b[b.length-1],Q===!0&&ut.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Al(P,F,W,X){if(P.visible===!1)return;if(P.layers.test(F.layers)){if(P.isGroup)W=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(F);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||V.intersectsSprite(P)){X&&Ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ct);const yt=K.update(P),Lt=P.material;Lt.visible&&p.push(P,yt,Lt,W,Ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||V.intersectsObject(P))){const yt=K.update(P),Lt=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ht.copy(P.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ht.copy(yt.boundingSphere.center)),Ht.applyMatrix4(P.matrixWorld).applyMatrix4(Ct)),Array.isArray(Lt)){const Dt=yt.groups;for(let jt=0,Jt=Dt.length;jt<Jt;jt++){const Nt=Dt[jt],ce=Lt[Nt.materialIndex];ce&&ce.visible&&p.push(P,yt,ce,W,Ht.z,Nt)}}else Lt.visible&&p.push(P,yt,Lt,W,Ht.z,null)}}const ft=P.children;for(let yt=0,Lt=ft.length;yt<Lt;yt++)Al(ft[yt],F,W,X)}function ad(P,F,W,X){const O=P.opaque,ft=P.transmissive,yt=P.transparent;m.setupLightsView(W),Q===!0&&ut.setGlobalState(_.clippingPlanes,W),X&&ht.viewport(R.copy(X)),O.length>0&&Fr(O,F,W),ft.length>0&&Fr(ft,F,W),yt.length>0&&Fr(yt,F,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function ld(P,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Lo(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Cr:zi,minFilter:To,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const ft=m.state.transmissionRenderTarget[X.id],yt=X.viewport||R;ft.setSize(yt.z,yt.w);const Lt=_.getRenderTarget();_.setRenderTarget(ft),_.getClearColor(z),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),J&&Vt.render(W);const Dt=_.toneMapping;_.toneMapping=eo;const jt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Q===!0&&ut.setGlobalState(_.clippingPlanes,X),Fr(P,W,X),L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft),at.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Nt=0,ce=F.length;Nt<ce;Nt++){const we=F[Nt],Ae=we.object,fn=we.geometry,fe=we.material,Ft=we.group;if(fe.side===Ye&&Ae.layers.test(X.layers)){const yi=fe.side;fe.side=un,fe.needsUpdate=!0,cd(Ae,W,X,fn,fe,Ft),fe.side=yi,fe.needsUpdate=!0,Jt=!0}}Jt===!0&&(L.updateMultisampleRenderTarget(ft),L.updateRenderTargetMipmap(ft))}_.setRenderTarget(Lt),_.setClearColor(z,Y),jt!==void 0&&(X.viewport=jt),_.toneMapping=Dt}function Fr(P,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ft=P.length;O<ft;O++){const yt=P[O],Lt=yt.object,Dt=yt.geometry,jt=X===null?yt.material:X,Jt=yt.group;Lt.layers.test(W.layers)&&cd(Lt,F,W,Dt,jt,Jt)}}function cd(P,F,W,X,O,ft){P.onBeforeRender(_,F,W,X,O,ft),P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),O.onBeforeRender(_,F,W,X,P,ft),O.transparent===!0&&O.side===Ye&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,_.renderBufferDirect(W,F,X,O,P,ft),O.side=Qn,O.needsUpdate=!0,_.renderBufferDirect(W,F,X,O,P,ft),O.side=Ye):_.renderBufferDirect(W,F,X,O,P,ft),P.onAfterRender(_,F,W,X,O,ft)}function Or(P,F,W){F.isScene!==!0&&(F=qt);const X=Mt.get(P),O=m.state.lights,ft=m.state.shadowsArray,yt=O.state.version,Lt=Pt.getParameters(P,O.state,ft,F,W),Dt=Pt.getProgramCacheKey(Lt);let jt=X.programs;X.environment=P.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(P.isMeshStandardMaterial?H:C).get(P.envMap||X.environment),X.envMapRotation=X.environment!==null&&P.envMap===null?F.environmentRotation:P.envMapRotation,jt===void 0&&(P.addEventListener("dispose",Kt),jt=new Map,X.programs=jt);let Jt=jt.get(Dt);if(Jt!==void 0){if(X.currentProgram===Jt&&X.lightsStateVersion===yt)return dd(P,Lt),Jt}else Lt.uniforms=Pt.getUniforms(P),P.onBeforeCompile(Lt,_),Jt=Pt.acquireProgram(Lt,Dt),jt.set(Dt,Jt),X.uniforms=Lt.uniforms;const Nt=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),dd(P,Lt),X.needsLights=B0(P),X.lightsStateVersion=yt,X.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Jt,X.uniformsList=null,Jt}function ud(P){if(P.uniformsList===null){const F=P.currentProgram.getUniforms();P.uniformsList=Ta.seqWithValue(F.seq,P.uniforms)}return P.uniformsList}function dd(P,F){const W=Mt.get(P);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function F0(P,F,W,X,O){F.isScene!==!0&&(F=qt),L.resetTextureUnits();const ft=F.fog,yt=X.isMeshStandardMaterial?F.environment:null,Lt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ls,Dt=(X.isMeshStandardMaterial?H:C).get(X.envMap||yt),jt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Jt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!W.morphAttributes.position,ce=!!W.morphAttributes.normal,we=!!W.morphAttributes.color;let Ae=eo;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ae=_.toneMapping);const fn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=fn!==void 0?fn.length:0,Ft=Mt.get(X),yi=m.state.lights;if(Q===!0&&(dt===!0||P!==M)){const Rn=P===M&&X.id===w;ut.setState(X,P,Rn)}let he=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==yi.state.version||Ft.outputColorSpace!==Lt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==Dt||X.fog===!0&&Ft.fog!==ft||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ut.numPlanes||Ft.numIntersection!==ut.numIntersection)||Ft.vertexAlphas!==jt||Ft.vertexTangents!==Jt||Ft.morphTargets!==Nt||Ft.morphNormals!==ce||Ft.morphColors!==we||Ft.toneMapping!==Ae||Ft.morphTargetsCount!==fe)&&(he=!0):(he=!0,Ft.__version=X.version);let Hn=Ft.currentProgram;he===!0&&(Hn=Or(X,F,O));let Go=!1,xn=!1,Bs=!1;const Ce=Hn.getUniforms(),ei=Ft.uniforms;if(ht.useProgram(Hn.program)&&(Go=!0,xn=!0,Bs=!0),X.id!==w&&(w=X.id,xn=!0),Go||M!==P){ht.buffers.depth.getReversed()?(ot.copy(P.projectionMatrix),Wm(ot),Xm(ot),Ce.setValue(D,"projectionMatrix",ot)):Ce.setValue(D,"projectionMatrix",P.projectionMatrix),Ce.setValue(D,"viewMatrix",P.matrixWorldInverse);const Oi=Ce.map.cameraPosition;Oi!==void 0&&Oi.setValue(D,zt.setFromMatrixPosition(P.matrixWorld)),wt.logarithmicDepthBuffer&&Ce.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,xn=!0,Bs=!0)}if(O.isSkinnedMesh){Ce.setOptional(D,O,"bindMatrix"),Ce.setOptional(D,O,"bindMatrixInverse");const Rn=O.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ce.setValue(D,"boneTexture",Rn.boneTexture,L))}O.isBatchedMesh&&(Ce.setOptional(D,O,"batchingTexture"),Ce.setValue(D,"batchingTexture",O._matricesTexture,L),Ce.setOptional(D,O,"batchingIdTexture"),Ce.setValue(D,"batchingIdTexture",O._indirectTexture,L),Ce.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Ce.setValue(D,"batchingColorTexture",O._colorsTexture,L));const Hs=W.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Yt.update(O,W,Hn),(xn||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,Ce.setValue(D,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ei.envMap.value=Dt,ei.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(ei.envMapIntensity.value=F.environmentIntensity),xn&&(Ce.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&O0(ei,Bs),ft&&X.fog===!0&&mt.refreshFogUniforms(ei,ft),mt.refreshMaterialUniforms(ei,X,G,tt,m.state.transmissionRenderTarget[P.id]),Ta.upload(D,ud(Ft),ei,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ta.upload(D,ud(Ft),ei,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(D,"center",O.center),Ce.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ce.setValue(D,"normalMatrix",O.normalMatrix),Ce.setValue(D,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Rn=X.uniformsGroups;for(let Oi=0,Bi=Rn.length;Oi<Bi;Oi++){const fd=Rn[Oi];k.update(fd,Hn),k.bind(fd,Hn)}}return Hn}function O0(P,F){P.ambientLightColor.needsUpdate=F,P.lightProbe.needsUpdate=F,P.directionalLights.needsUpdate=F,P.directionalLightShadows.needsUpdate=F,P.pointLights.needsUpdate=F,P.pointLightShadows.needsUpdate=F,P.spotLights.needsUpdate=F,P.spotLightShadows.needsUpdate=F,P.rectAreaLights.needsUpdate=F,P.hemisphereLights.needsUpdate=F}function B0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,F,W){Mt.get(P.texture).__webglTexture=F,Mt.get(P.depthTexture).__webglTexture=W;const X=Mt.get(P);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,F){const W=Mt.get(P);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(P,F=0,W=0){S=P,E=F,A=W;let X=!0,O=null,ft=!1,yt=!1;if(P){const Dt=Mt.get(P);if(Dt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Dt.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Dt.__hasExternalTextures)L.rebindTextures(P,Mt.get(P.texture).__webglTexture,Mt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Nt=P.depthTexture;if(Dt.__boundDepthTexture!==Nt){if(Nt!==null&&Mt.has(Nt)&&(P.width!==Nt.image.width||P.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const jt=P.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(yt=!0);const Jt=Mt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Jt[F])?O=Jt[F][W]:O=Jt[F],ft=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?O=Mt.get(P).__webglMultisampledFramebuffer:Array.isArray(Jt)?O=Jt[W]:O=Jt,R.copy(P.viewport),N.copy(P.scissor),U=P.scissorTest}else R.copy(it).multiplyScalar(G).floor(),N.copy(St).multiplyScalar(G).floor(),U=Bt;if(ht.bindFramebuffer(D.FRAMEBUFFER,O)&&X&&ht.drawBuffers(P,O),ht.viewport(R),ht.scissor(N),ht.setScissorTest(U),ft){const Dt=Mt.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Dt.__webglTexture,W)}else if(yt){const Dt=Mt.get(P.texture),jt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,W||0,jt)}w=-1},this.readRenderTargetPixels=function(P,F,W,X,O,ft,yt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Mt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&yt!==void 0&&(Lt=Lt[yt]),Lt){ht.bindFramebuffer(D.FRAMEBUFFER,Lt);try{const Dt=P.texture,jt=Dt.format,Jt=Dt.type;if(!wt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=P.width-X&&W>=0&&W<=P.height-O&&D.readPixels(F,W,X,O,te.convert(jt),te.convert(Jt),ft)}finally{const Dt=S!==null?Mt.get(S).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(P,F,W,X,O,ft,yt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Mt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&yt!==void 0&&(Lt=Lt[yt]),Lt){const Dt=P.texture,jt=Dt.format,Jt=Dt.type;if(!wt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=P.width-X&&W>=0&&W<=P.height-O){ht.bindFramebuffer(D.FRAMEBUFFER,Lt);const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(F,W,X,O,te.convert(jt),te.convert(Jt),0);const ce=S!==null?Mt.get(S).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,ce);const we=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Vm(D,we,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.deleteBuffer(Nt),D.deleteSync(we),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,F=null,W=0){P.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,P=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(P.image.width*X),ft=Math.floor(P.image.height*X),yt=F!==null?F.x:0,Lt=F!==null?F.y:0;L.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,yt,Lt,O,ft),ht.unbindTexture()},this.copyTextureToTexture=function(P,F,W=null,X=null,O=0){P.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1],F=arguments[2],O=arguments[3]||0,W=null);let ft,yt,Lt,Dt,jt,Jt,Nt,ce,we;const Ae=P.isCompressedTexture?P.mipmaps[O]:P.image;W!==null?(ft=W.max.x-W.min.x,yt=W.max.y-W.min.y,Lt=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,jt=W.min.y,Jt=W.isBox3?W.min.z:0):(ft=Ae.width,yt=Ae.height,Lt=Ae.depth||1,Dt=0,jt=0,Jt=0),X!==null?(Nt=X.x,ce=X.y,we=X.z):(Nt=0,ce=0,we=0);const fn=te.convert(F.format),fe=te.convert(F.type);let Ft;F.isData3DTexture?(L.setTexture3D(F,0),Ft=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(L.setTexture2DArray(F,0),Ft=D.TEXTURE_2D_ARRAY):(L.setTexture2D(F,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const yi=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Go=D.getParameter(D.UNPACK_SKIP_ROWS),xn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Jt);const Bs=P.isDataArrayTexture||P.isData3DTexture,Ce=F.isDataArrayTexture||F.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const ei=Mt.get(P),Hs=Mt.get(F),Rn=Mt.get(ei.__renderTarget),Oi=Mt.get(Hs.__renderTarget);ht.bindFramebuffer(D.READ_FRAMEBUFFER,Rn.__webglFramebuffer),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Bi=0;Bi<Lt;Bi++)Bs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,O,Jt+Bi),P.isDepthTexture?(Ce&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(F).__webglTexture,O,we+Bi),D.blitFramebuffer(Dt,jt,ft,yt,Nt,ce,ft,yt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ce?D.copyTexSubImage3D(Ft,O,Nt,ce,we+Bi,Dt,jt,ft,yt):D.copyTexSubImage2D(Ft,O,Nt,ce,we+Bi,Dt,jt,ft,yt);ht.bindFramebuffer(D.READ_FRAMEBUFFER,null),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ce?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Ft,O,Nt,ce,we,ft,yt,Lt,fn,fe,Ae.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,O,Nt,ce,we,ft,yt,Lt,fn,Ae.data):D.texSubImage3D(Ft,O,Nt,ce,we,ft,yt,Lt,fn,fe,Ae):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Nt,ce,ft,yt,fn,fe,Ae.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Nt,ce,Ae.width,Ae.height,fn,Ae.data):D.texSubImage2D(D.TEXTURE_2D,O,Nt,ce,ft,yt,fn,fe,Ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,yi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Go),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),O===0&&F.generateMipmaps&&D.generateMipmap(Ft),ht.unbindTexture()},this.copyTextureToTexture3D=function(P,F,W=null,X=null,O=0){return P.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,P=arguments[2],F=arguments[3],O=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,F,W,X,O)},this.initRenderTarget=function(P){Mt.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),ht.unbindTexture()},this.resetState=function(){E=0,A=0,S=null,ht.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class el{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new el(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class e1 extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class n1 extends qe{constructor(t=null,e=1,i=1,o,s,r,a,l,c=Sn,u=Sn,d,f){super(null,r,a,l,c,u,o,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ff extends Te{constructor(t,e,i,o=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new Rt,hf=new Rt,aa=[],pf=new Un,i1=new Rt,$s=new j,Ys=new Ns;class jn extends j{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ff(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,i1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,is),pf.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(pf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,is),Ys.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,o=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let a=0;a<i.length;a++)i[a]=o[r+a]}raycast(t,e){const i=this.matrixWorld,o=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),t.ray.intersectsSphere(Ys)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,is),hf.multiplyMatrices(i,is),$s.matrixWorld=hf,$s.raycast(t,aa);for(let r=0,a=aa.length;r<a;r++){const l=aa[r];l.instanceId=s,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ff(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new n1(new Float32Array(o*this.count),o,this.count,Su,ai));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=o*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ua extends Us{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mf=new Rt,ou=new Ru,la=new Ns,ca=new I;class su extends De{constructor(t=new Pe,e=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(o),la.radius+=s,t.ray.intersectsSphere(la)===!1)return;mf.copy(o).invert(),ou.copy(t.ray).applyMatrix4(mf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),h=Math.min(c.count,r.start+r.count);for(let g=f,y=h;g<y;g++){const p=c.getX(g);ca.fromBufferAttribute(d,p),gf(ca,p,l,o,t,e,this)}}else{const f=Math.max(0,r.start),h=Math.min(d.count,r.start+r.count);for(let g=f,y=h;g<y;g++)ca.fromBufferAttribute(d,g),gf(ca,g,l,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gf(n,t,e,i,o,s,r){const a=ou.distanceSqToPoint(n);if(a<e){const l=new I;ou.closestPointToPoint(n,l),l.applyMatrix4(i);const c=o.ray.origin.distanceTo(l);if(c<o.near||c>o.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ks extends qe{constructor(t,e,i,o,s,r,a,l,c){super(t,e,i,o,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,o=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(o),e.push(s),o=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let o=0;const s=i.length;let r;e?r=e:r=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(o=Math.floor(a+(l-a)/2),c=i[o]-r,c<0)a=o+1;else if(c>0)l=o-1;else{l=o;break}if(o=l,i[o]===r)return o/(s-1);const u=i[o],f=i[o+1]-u,h=(r-u)/f;return(o+h)/(s-1)}getTangent(t,e){let o=t-1e-4,s=t+1e-4;o<0&&(o=0),s>1&&(s=1);const r=this.getPoint(o),a=this.getPoint(s),l=e||(r.isVector2?new lt:new I);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,o=[],s=[],r=[],a=new I,l=new Rt;for(let h=0;h<=t;h++){const g=h/t;o[h]=this.getTangentAt(g,new I)}s[0]=new I,r[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(o[0].x),d=Math.abs(o[0].y),f=Math.abs(o[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(o[0],i).normalize(),s[0].crossVectors(o[0],a),r[0].crossVectors(o[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(o[h-1],o[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ve(o[h-1].dot(o[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}r[h].crossVectors(o[h],s[h])}if(e===!0){let h=Math.acos(Ve(s[0].dot(s[t]),-1,1));h/=t,o[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(o[g],h*g)),r[g].crossVectors(o[g],s[g])}return{tangents:o,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lu extends gi{constructor(t=0,e=0,i=1,o=1,s=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=o,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const i=e,o=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=o;for(;s>o;)s-=o;s<Number.EPSILON&&(r?s=0:s=o),this.aClockwise===!0&&!r&&(s===o?s=-o:s=s-o);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class o1 extends Lu{constructor(t,e,i,o,s,r){super(t,e,i,i,o,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Du(){let n=0,t=0,e=0,i=0;function o(s,r,a,l){n=s,t=a,e=-3*s+3*r-2*a-l,i=2*s-2*r+a+l}return{initCatmullRom:function(s,r,a,l,c){o(r,a,c*(a-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,a,l,c,u,d){let f=(r-s)/c-(a-s)/(c+u)+(a-r)/u,h=(a-r)/u-(l-r)/(u+d)+(l-a)/d;f*=u,h*=u,o(r,a,f,h)},calc:function(s){const r=s*s,a=r*s;return n+t*s+e*r+i*a}}}const ua=new I,nc=new Du,ic=new Du,oc=new Du;class nl extends gi{constructor(t=[],e=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=o}getPoint(t,e=new I){const i=e,o=this.points,s=o.length,r=(s-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=o[(a-1)%s]:(ua.subVectors(o[0],o[1]).add(o[0]),c=ua);const d=o[a%s],f=o[(a+1)%s];if(this.closed||a+2<s?u=o[(a+2)%s]:(ua.subVectors(o[s-1],o[s-2]).add(o[s-1]),u=ua),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),h),y=Math.pow(d.distanceToSquared(f),h),p=Math.pow(f.distanceToSquared(u),h);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),nc.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,y,p),ic.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,y,p),oc.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),ic.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),oc.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(nc.calc(l),ic.calc(l),oc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new I().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xf(n,t,e,i,o){const s=(i-t)*.5,r=(o-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+r)*l+(-3*e+3*i-2*s-r)*a+s*n+e}function s1(n,t){const e=1-n;return e*e*t}function r1(n,t){return 2*(1-n)*n*t}function a1(n,t){return n*n*t}function ir(n,t,e,i){return s1(n,t)+r1(n,e)+a1(n,i)}function l1(n,t){const e=1-n;return e*e*e*t}function c1(n,t){const e=1-n;return 3*e*e*n*t}function u1(n,t){return 3*(1-n)*n*n*t}function d1(n,t){return n*n*n*t}function or(n,t,e,i,o){return l1(n,t)+c1(n,e)+u1(n,i)+d1(n,o)}class sp extends gi{constructor(t=new lt,e=new lt,i=new lt,o=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new lt){const i=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(or(t,o.x,s.x,r.x,a.x),or(t,o.y,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class f1 extends gi{constructor(t=new I,e=new I,i=new I,o=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=o}getPoint(t,e=new I){const i=e,o=this.v0,s=this.v1,r=this.v2,a=this.v3;return i.set(or(t,o.x,s.x,r.x,a.x),or(t,o.y,s.y,r.y,a.y),or(t,o.z,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rp extends gi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h1 extends gi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ap extends gi{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){const i=e,o=this.v0,s=this.v1,r=this.v2;return i.set(ir(t,o.x,s.x,r.x),ir(t,o.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lp extends gi{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,o=this.v0,s=this.v1,r=this.v2;return i.set(ir(t,o.x,s.x,r.x),ir(t,o.y,s.y,r.y),ir(t,o.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cp extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const i=e,o=this.points,s=(o.length-1)*t,r=Math.floor(s),a=s-r,l=o[r===0?r:r-1],c=o[r],u=o[r>o.length-2?o.length-1:r+1],d=o[r>o.length-3?o.length-1:r+2];return i.set(xf(a,l.x,c.x,u.x,d.x),xf(a,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const o=this.points[e];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const o=t.points[e];this.points.push(new lt().fromArray(o))}return this}}var za=Object.freeze({__proto__:null,ArcCurve:o1,CatmullRomCurve3:nl,CubicBezierCurve:sp,CubicBezierCurve3:f1,EllipseCurve:Lu,LineCurve:rp,LineCurve3:h1,QuadraticBezierCurve:ap,QuadraticBezierCurve3:lp,SplineCurve:cp});class p1 extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),o=this.getCurveLengths();let s=0;for(;s<o.length;){if(o[s]>=i){const r=o[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,o=this.curves.length;i<o;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let o=0,s=this.curves;o<s.length;o++){const r=s[o],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const o=this.curves[e];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const o=t.curves[e];this.curves.push(new za[o.type]().fromJSON(o))}return this}}class ru extends p1{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new rp(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,o){const s=new ap(this.currentPoint.clone(),new lt(t,e),new lt(i,o));return this.curves.push(s),this.currentPoint.set(i,o),this}bezierCurveTo(t,e,i,o,s,r){const a=new sp(this.currentPoint.clone(),new lt(t,e),new lt(i,o),new lt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new cp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,o,s,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,o,s,r),this}absarc(t,e,i,o,s,r){return this.absellipse(t,e,i,i,o,s,r),this}ellipse(t,e,i,o,s,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,o,s,r,a,l),this}absellipse(t,e,i,o,s,r,a,l){const c=new Lu(t,e,i,o,s,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Nu extends Pe{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:o},e=Math.floor(e),o=Ve(o,0,Math.PI*2);const s=[],r=[],a=[],l=[],c=[],u=1/e,d=new I,f=new lt,h=new I,g=new I,y=new I;let p=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-p,h.z=m*0,y.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-p,h.z=m*0,g.copy(h),h.x+=y.x,h.y+=y.y,h.z+=y.z,h.normalize(),l.push(h.x,h.y,h.z),y.copy(g)}for(let v=0;v<=e;v++){const b=i+v*u*o,_=Math.sin(b),T=Math.cos(b);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*T,r.push(d.x,d.y,d.z),f.x=v/e,f.y=E/(t.length-1),a.push(f.x,f.y);const A=l[3*E+0]*_,S=l[3*E+1],w=l[3*E+0]*T;c.push(A,S,w)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){const _=b+v*t.length,T=_,E=_+t.length,A=_+t.length+1,S=_+1;s.push(T,E,S),s.push(A,S,E)}this.setIndex(s),this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nu(t.points,t.segments,t.phiStart,t.phiLength)}}class Do extends Nu{constructor(t=1,e=1,i=4,o=8){const s=new ru;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),o),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:o}}static fromJSON(t){return new Do(t.radius,t.length,t.capSegments,t.radialSegments)}}class Kn extends Pe{constructor(t=1,e=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:o},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new I,u=new lt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const h=i+d/e*o;c.x=t*Math.cos(h),c.y=t*Math.sin(h),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[f]/t+1)/2,u.y=(r[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends Pe{constructor(t=1,e=1,i=1,o=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;o=Math.floor(o),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const y=[],p=i/2;let m=0;v(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(h,2));function v(){const _=new I,T=new I;let E=0;const A=(e-t)/i;for(let S=0;S<=s;S++){const w=[],M=S/s,R=M*(e-t)+t;for(let N=0;N<=o;N++){const U=N/o,z=U*l+a,Y=Math.sin(z),B=Math.cos(z);T.x=R*Y,T.y=-M*i+p,T.z=R*B,d.push(T.x,T.y,T.z),_.set(Y,A,B).normalize(),f.push(_.x,_.y,_.z),h.push(U,1-M),w.push(g++)}y.push(w)}for(let S=0;S<o;S++)for(let w=0;w<s;w++){const M=y[w][S],R=y[w+1][S],N=y[w+1][S+1],U=y[w][S+1];(t>0||w!==0)&&(u.push(M,R,U),E+=3),(e>0||w!==s-1)&&(u.push(R,N,U),E+=3)}c.addGroup(m,E,0),m+=E}function b(_){const T=g,E=new lt,A=new I;let S=0;const w=_===!0?t:e,M=_===!0?1:-1;for(let N=1;N<=o;N++)d.push(0,p*M,0),f.push(0,M,0),h.push(.5,.5),g++;const R=g;for(let N=0;N<=o;N++){const z=N/o*l+a,Y=Math.cos(z),B=Math.sin(z);A.x=w*B,A.y=p*M,A.z=w*Y,d.push(A.x,A.y,A.z),f.push(0,M,0),E.x=Y*.5+.5,E.y=B*.5*M+.5,h.push(E.x,E.y),g++}for(let N=0;N<o;N++){const U=T+N,z=R+N;_===!0?u.push(z,z+1,U):u.push(z+1,z,U),S+=3}c.addGroup(m,S,_===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class We extends ue{constructor(t=1,e=1,i=32,o=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,i,o,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new We(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rr extends Pe{constructor(t=[],e=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:o};const s=[],r=[];a(o),c(i),u(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(r,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const b=new I,_=new I,T=new I;for(let E=0;E<e.length;E+=3)h(e[E+0],b),h(e[E+1],_),h(e[E+2],T),l(b,_,T,v)}function l(v,b,_,T){const E=T+1,A=[];for(let S=0;S<=E;S++){A[S]=[];const w=v.clone().lerp(_,S/E),M=b.clone().lerp(_,S/E),R=E-S;for(let N=0;N<=R;N++)N===0&&S===E?A[S][N]=w:A[S][N]=w.clone().lerp(M,N/R)}for(let S=0;S<E;S++)for(let w=0;w<2*(E-S)-1;w++){const M=Math.floor(w/2);w%2===0?(f(A[S][M+1]),f(A[S+1][M]),f(A[S][M])):(f(A[S][M+1]),f(A[S+1][M+1]),f(A[S+1][M]))}}function c(v){const b=new I;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(v),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function u(){const v=new I;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];const _=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;r.push(_,1-T)}g(),d()}function d(){for(let v=0;v<r.length;v+=6){const b=r[v+0],_=r[v+2],T=r[v+4],E=Math.max(b,_,T),A=Math.min(b,_,T);E>.9&&A<.1&&(b<.2&&(r[v+0]+=1),_<.2&&(r[v+2]+=1),T<.2&&(r[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function h(v,b){const _=v*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){const v=new I,b=new I,_=new I,T=new I,E=new lt,A=new lt,S=new lt;for(let w=0,M=0;w<s.length;w+=9,M+=6){v.set(s[w+0],s[w+1],s[w+2]),b.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),E.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),S.set(r[M+4],r[M+5]),T.copy(v).add(b).add(_).divideScalar(3);const R=p(T);y(E,M+0,v,R),y(A,M+2,b,R),y(S,M+4,_,R)}}function y(v,b,_,T){T<0&&v.x===1&&(r[b]=v.x-1),_.x===0&&_.z===0&&(r[b]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.vertices,t.indices,t.radius,t.details)}}class il extends Rr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,o=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-i,0,-o,i,0,o,-i,0,o,i,-o,-i,0,-o,i,0,o,-i,0,o,i,0,-i,0,-o,i,0,-o,-i,0,o,i,0,o],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class ol extends ru{constructor(t){super(t),this.uuid=Fo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,o=this.holes.length;i<o;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const o=t.holes[e];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const o=this.holes[e];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const o=t.holes[e];this.holes.push(new ru().fromJSON(o))}return this}}const m1={triangulate:function(n,t,e=2){const i=t&&t.length,o=i?t[0]*e:n.length;let s=up(n,0,o,e,!0);const r=[];if(!s||s.next===s.prev)return r;let a,l,c,u,d,f,h;if(i&&(s=v1(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let g=e;g<o;g+=e)d=n[g],f=n[g+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return yr(s,r,e,a,l,h,0),r}};function up(n,t,e,i,o){let s,r;if(o===I1(n,t,e,i)>0)for(s=t;s<e;s+=i)r=yf(s,n[s],n[s+1],r);else for(s=e-i;s>=t;s-=i)r=yf(s,n[s],n[s+1],r);return r&&sl(r,r.next)&&(vr(r),r=r.next),r}function No(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(sl(e,e.next)||Ie(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function yr(n,t,e,i,o,s,r){if(!n)return;!r&&s&&E1(n,i,o,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?x1(n,i,o,s):g1(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),vr(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=y1(No(n),t,e),yr(n,t,e,i,o,s,2)):r===2&&_1(n,t,e,i,o,s):yr(No(n),t,e,i,o,s,1);break}}}function g1(n){const t=n.prev,e=n,i=n.next;if(Ie(t,e,i)>=0)return!1;const o=t.x,s=e.x,r=i.x,a=t.y,l=e.y,c=i.y,u=o<s?o<r?o:r:s<r?s:r,d=a<l?a<c?a:c:l<c?l:c,f=o>s?o>r?o:r:s>r?s:r,h=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=h&&ds(o,a,s,l,r,c,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x1(n,t,e,i){const o=n.prev,s=n,r=n.next;if(Ie(o,s,r)>=0)return!1;const a=o.x,l=s.x,c=r.x,u=o.y,d=s.y,f=r.y,h=a<l?a<c?a:c:l<c?l:c,g=u<d?u<f?u:f:d<f?d:f,y=a>l?a>c?a:c:l>c?l:c,p=u>d?u>f?u:f:d>f?d:f,m=au(h,g,t,e,i),v=au(y,p,t,e,i);let b=n.prevZ,_=n.nextZ;for(;b&&b.z>=m&&_&&_.z<=v;){if(b.x>=h&&b.x<=y&&b.y>=g&&b.y<=p&&b!==o&&b!==r&&ds(a,u,l,d,c,f,b.x,b.y)&&Ie(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=h&&_.x<=y&&_.y>=g&&_.y<=p&&_!==o&&_!==r&&ds(a,u,l,d,c,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=h&&b.x<=y&&b.y>=g&&b.y<=p&&b!==o&&b!==r&&ds(a,u,l,d,c,f,b.x,b.y)&&Ie(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=v;){if(_.x>=h&&_.x<=y&&_.y>=g&&_.y<=p&&_!==o&&_!==r&&ds(a,u,l,d,c,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function y1(n,t,e){let i=n;do{const o=i.prev,s=i.next.next;!sl(o,s)&&dp(o,i,i.next,s)&&_r(o,s)&&_r(s,o)&&(t.push(o.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),vr(i),vr(i.next),i=n=s),i=i.next}while(i!==n);return No(i)}function _1(n,t,e,i,o,s){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&C1(r,a)){let l=fp(r,a);r=No(r,r.next),l=No(l,l.next),yr(r,t,e,i,o,s,0),yr(l,t,e,i,o,s,0);return}a=a.next}r=r.next}while(r!==n)}function v1(n,t,e,i){const o=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;s++)a=t[s]*i,l=s<r-1?t[s+1]*i:n.length,c=up(n,a,l,i,!1),c===c.next&&(c.steiner=!0),o.push(A1(c));for(o.sort(M1),s=0;s<o.length;s++)e=b1(o[s],e);return e}function M1(n,t){return n.x-t.x}function b1(n,t){const e=w1(n,t);if(!e)return t;const i=fp(e,n);return No(i,i.next),No(e,e.next)}function w1(n,t){let e=t,i=-1/0,o;const s=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,o=e.x<e.next.x?e:e.next,f===s))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0,d;e=o;do s>=e.x&&e.x>=l&&s!==e.x&&ds(r<c?s:i,r,l,c,r<c?i:s,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(s-e.x),_r(e,n)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&S1(o,e)))&&(o=e,u=d)),e=e.next;while(e!==a);return o}function S1(n,t){return Ie(n.prev,n,t.prev)<0&&Ie(t.next,n,n.next)<0}function E1(n,t,e,i){let o=n;do o.z===0&&(o.z=au(o.x,o.y,t,e,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==n);o.prevZ.nextZ=null,o.prevZ=null,T1(o)}function T1(n){let t,e,i,o,s,r,a,l,c=1;do{for(e=n,n=null,s=null,r=0;e;){for(r++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(o=e,e=e.nextZ,a--):(o=i,i=i.nextZ,l--),s?s.nextZ=o:n=o,o.prevZ=s,s=o;e=i}s.nextZ=null,c*=2}while(r>1);return n}function au(n,t,e,i,o){return n=(n-e)*o|0,t=(t-i)*o|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function A1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ds(n,t,e,i,o,s,r,a){return(o-r)*(t-a)>=(n-r)*(s-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(o-r)*(i-a)}function C1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!R1(n,t)&&(_r(n,t)&&_r(t,n)&&P1(n,t)&&(Ie(n.prev,n,t.prev)||Ie(n,t.prev,t))||sl(n,t)&&Ie(n.prev,n,n.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function sl(n,t){return n.x===t.x&&n.y===t.y}function dp(n,t,e,i){const o=fa(Ie(n,t,e)),s=fa(Ie(n,t,i)),r=fa(Ie(e,i,n)),a=fa(Ie(e,i,t));return!!(o!==s&&r!==a||o===0&&da(n,e,t)||s===0&&da(n,i,t)||r===0&&da(e,n,i)||a===0&&da(e,t,i))}function da(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function fa(n){return n>0?1:n<0?-1:0}function R1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&dp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _r(n,t){return Ie(n.prev,n,n.next)<0?Ie(n,t,n.next)>=0&&Ie(n,n.prev,t)>=0:Ie(n,t,n.prev)<0||Ie(n,n.next,t)<0}function P1(n,t){let e=n,i=!1;const o=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&o<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function fp(n,t){const e=new lu(n.i,n.x,n.y),i=new lu(t.i,t.x,t.y),o=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=o,o.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function yf(n,t,e,i){const o=new lu(n,t,e);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lu(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I1(n,t,e,i){let o=0;for(let s=t,r=e-i;s<e;s+=i)o+=(n[r]-n[s])*(n[s+1]+n[r+1]),r=s;return o}class sr{static area(t){const e=t.length;let i=0;for(let o=e-1,s=0;s<e;o=s++)i+=t[o].x*t[s].y-t[s].x*t[o].y;return i*.5}static isClockWise(t){return sr.area(t)<0}static triangulateShape(t,e){const i=[],o=[],s=[];_f(t),vf(i,t);let r=t.length;e.forEach(_f);for(let l=0;l<e.length;l++)o.push(r),r+=e[l].length,vf(i,e[l]);const a=m1.triangulate(i,o);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function _f(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Pr extends Pe{constructor(t=new ol([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,o=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:h-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:L1;let b,_=!1,T,E,A,S;m&&(b=m.getSpacedPoints(u),_=!0,f=!1,T=m.computeFrenetFrames(u,!1),E=new I,A=new I,S=new I),f||(p=0,h=0,g=0,y=0);const w=a.extractPoints(c);let M=w.shape;const R=w.holes;if(!sr.isClockWise(M)){M=M.reverse();for(let J=0,ct=R.length;J<ct;J++){const D=R[J];sr.isClockWise(D)&&(R[J]=D.reverse())}}const U=sr.triangulateShape(M,R),z=M;for(let J=0,ct=R.length;J<ct;J++){const D=R[J];M=M.concat(D)}function Y(J,ct,D){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ct,D)}const B=M.length,tt=U.length;function G(J,ct,D){let kt,at,wt;const ht=J.x-ct.x,Gt=J.y-ct.y,Mt=D.x-J.x,L=D.y-J.y,C=ht*ht+Gt*Gt,H=ht*L-Gt*Mt;if(Math.abs(H)>Number.EPSILON){const Z=Math.sqrt(C),nt=Math.sqrt(Mt*Mt+L*L),K=ct.x-Gt/Z,Pt=ct.y+ht/Z,mt=D.x-L/nt,bt=D.y+Mt/nt,ie=((mt-K)*L-(bt-Pt)*Mt)/(ht*L-Gt*Mt);kt=K+ht*ie-J.x,at=Pt+Gt*ie-J.y;const ut=kt*kt+at*at;if(ut<=2)return new lt(kt,at);wt=Math.sqrt(ut/2)}else{let Z=!1;ht>Number.EPSILON?Mt>Number.EPSILON&&(Z=!0):ht<-Number.EPSILON?Mt<-Number.EPSILON&&(Z=!0):Math.sign(Gt)===Math.sign(L)&&(Z=!0),Z?(kt=-Gt,at=ht,wt=Math.sqrt(C)):(kt=ht,at=Gt,wt=Math.sqrt(C/2))}return new lt(kt/wt,at/wt)}const rt=[];for(let J=0,ct=z.length,D=ct-1,kt=J+1;J<ct;J++,D++,kt++)D===ct&&(D=0),kt===ct&&(kt=0),rt[J]=G(z[J],z[D],z[kt]);const $=[];let it,St=rt.concat();for(let J=0,ct=R.length;J<ct;J++){const D=R[J];it=[];for(let kt=0,at=D.length,wt=at-1,ht=kt+1;kt<at;kt++,wt++,ht++)wt===at&&(wt=0),ht===at&&(ht=0),it[kt]=G(D[kt],D[wt],D[ht]);$.push(it),St=St.concat(it)}for(let J=0;J<p;J++){const ct=J/p,D=h*Math.cos(ct*Math.PI/2),kt=g*Math.sin(ct*Math.PI/2)+y;for(let at=0,wt=z.length;at<wt;at++){const ht=Y(z[at],rt[at],kt);ot(ht.x,ht.y,-D)}for(let at=0,wt=R.length;at<wt;at++){const ht=R[at];it=$[at];for(let Gt=0,Mt=ht.length;Gt<Mt;Gt++){const L=Y(ht[Gt],it[Gt],kt);ot(L.x,L.y,-D)}}}const Bt=g+y;for(let J=0;J<B;J++){const ct=f?Y(M[J],St[J],Bt):M[J];_?(A.copy(T.normals[0]).multiplyScalar(ct.x),E.copy(T.binormals[0]).multiplyScalar(ct.y),S.copy(b[0]).add(A).add(E),ot(S.x,S.y,S.z)):ot(ct.x,ct.y,0)}for(let J=1;J<=u;J++)for(let ct=0;ct<B;ct++){const D=f?Y(M[ct],St[ct],Bt):M[ct];_?(A.copy(T.normals[J]).multiplyScalar(D.x),E.copy(T.binormals[J]).multiplyScalar(D.y),S.copy(b[J]).add(A).add(E),ot(S.x,S.y,S.z)):ot(D.x,D.y,d/u*J)}for(let J=p-1;J>=0;J--){const ct=J/p,D=h*Math.cos(ct*Math.PI/2),kt=g*Math.sin(ct*Math.PI/2)+y;for(let at=0,wt=z.length;at<wt;at++){const ht=Y(z[at],rt[at],kt);ot(ht.x,ht.y,d+D)}for(let at=0,wt=R.length;at<wt;at++){const ht=R[at];it=$[at];for(let Gt=0,Mt=ht.length;Gt<Mt;Gt++){const L=Y(ht[Gt],it[Gt],kt);_?ot(L.x,L.y+b[u-1].y,b[u-1].x+D):ot(L.x,L.y,d+D)}}}V(),Q();function V(){const J=o.length/3;if(f){let ct=0,D=B*ct;for(let kt=0;kt<tt;kt++){const at=U[kt];Ct(at[2]+D,at[1]+D,at[0]+D)}ct=u+p*2,D=B*ct;for(let kt=0;kt<tt;kt++){const at=U[kt];Ct(at[0]+D,at[1]+D,at[2]+D)}}else{for(let ct=0;ct<tt;ct++){const D=U[ct];Ct(D[2],D[1],D[0])}for(let ct=0;ct<tt;ct++){const D=U[ct];Ct(D[0]+B*u,D[1]+B*u,D[2]+B*u)}}i.addGroup(J,o.length/3-J,0)}function Q(){const J=o.length/3;let ct=0;dt(z,ct),ct+=z.length;for(let D=0,kt=R.length;D<kt;D++){const at=R[D];dt(at,ct),ct+=at.length}i.addGroup(J,o.length/3-J,1)}function dt(J,ct){let D=J.length;for(;--D>=0;){const kt=D;let at=D-1;at<0&&(at=J.length-1);for(let wt=0,ht=u+p*2;wt<ht;wt++){const Gt=B*wt,Mt=B*(wt+1),L=ct+kt+Gt,C=ct+at+Gt,H=ct+at+Mt,Z=ct+kt+Mt;zt(L,C,H,Z)}}}function ot(J,ct,D){l.push(J),l.push(ct),l.push(D)}function Ct(J,ct,D){Ht(J),Ht(ct),Ht(D);const kt=o.length/3,at=v.generateTopUV(i,o,kt-3,kt-2,kt-1);qt(at[0]),qt(at[1]),qt(at[2])}function zt(J,ct,D,kt){Ht(J),Ht(ct),Ht(kt),Ht(ct),Ht(D),Ht(kt);const at=o.length/3,wt=v.generateSideWallUV(i,o,at-6,at-3,at-2,at-1);qt(wt[0]),qt(wt[1]),qt(wt[3]),qt(wt[1]),qt(wt[2]),qt(wt[3])}function Ht(J){o.push(l[J*3+0]),o.push(l[J*3+1]),o.push(l[J*3+2])}function qt(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return D1(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new za[o.type]().fromJSON(o)),new Pr(i,t.options)}}const L1={generateTopUV:function(n,t,e,i,o){const s=t[e*3],r=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[o*3],u=t[o*3+1];return[new lt(s,r),new lt(a,l),new lt(c,u)]},generateSideWallUV:function(n,t,e,i,o,s){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],f=t[o*3],h=t[o*3+1],g=t[o*3+2],y=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new lt(r,1-l),new lt(c,1-d),new lt(f,1-g),new lt(y,1-m)]:[new lt(a,1-l),new lt(u,1-d),new lt(h,1-g),new lt(p,1-m)]}};function D1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,o=n.length;i<o;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class rl extends Rr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,o=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rl(t.radius,t.detail)}}class al extends Rr{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new al(t.radius,t.detail)}}class ll extends Pe{constructor(t=.5,e=1,i=32,o=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:o,thetaStart:s,thetaLength:r},i=Math.max(3,i),o=Math.max(1,o);const a=[],l=[],c=[],u=[];let d=t;const f=(e-t)/o,h=new I,g=new lt;for(let y=0;y<=o;y++){for(let p=0;p<=i;p++){const m=s+p/i*r;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/e+1)/2,g.y=(h.y/e+1)/2,u.push(g.x,g.y)}d+=f}for(let y=0;y<o;y++){const p=y*(i+1);for(let m=0;m<i;m++){const v=m+p,b=v,_=v+i+1,T=v+i+2,E=v+1;a.push(b,_,E),a.push(_,T,E)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ot extends Pe{constructor(t=1,e=32,i=16,o=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const u=[],d=new I,f=new I,h=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){const v=[],b=m/i;let _=0;m===0&&r===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const E=T/e;d.x=-t*Math.cos(o+E*s)*Math.sin(r+b*a),d.y=t*Math.cos(r+b*a),d.z=t*Math.sin(o+E*s)*Math.sin(r+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(E+_,1-b),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const b=u[m][v+1],_=u[m][v],T=u[m+1][v],E=u[m+1][v+1];(m!==0||r>0)&&h.push(b,_,E),(m!==i-1||l<Math.PI)&&h.push(_,T,E)}this.setIndex(h),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ki extends Pe{constructor(t=1,e=.4,i=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:o,arc:s},i=Math.floor(i),o=Math.floor(o);const r=[],a=[],l=[],c=[],u=new I,d=new I,f=new I;for(let h=0;h<=i;h++)for(let g=0;g<=o;g++){const y=g/o*s,p=h/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(y),d.y=(t+e*Math.cos(p))*Math.sin(y),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/o),c.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=o;g++){const y=(o+1)*h+g-1,p=(o+1)*(h-1)+g-1,m=(o+1)*(h-1)+g,v=(o+1)*h+g;r.push(y,p,v),r.push(p,m,v)}this.setIndex(r),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Uu extends Pe{constructor(t=new lp(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,o=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:o,closed:s};const r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new I,l=new I,c=new lt;let u=new I;const d=[],f=[],h=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(h,2));function y(){for(let b=0;b<e;b++)p(b);p(s===!1?e:0),v(),m()}function p(b){u=t.getPointAt(b/e,u);const _=r.normals[b],T=r.binormals[b];for(let E=0;E<=o;E++){const A=E/o*Math.PI*2,S=Math.sin(A),w=-Math.cos(A);l.x=w*_.x+S*T.x,l.y=w*_.y+S*T.y,l.z=w*_.z+S*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=e;b++)for(let _=1;_<=o;_++){const T=(o+1)*(b-1)+(_-1),E=(o+1)*b+(_-1),A=(o+1)*b+_,S=(o+1)*(b-1)+_;g.push(T,E,S),g.push(E,A,S)}}function v(){for(let b=0;b<=e;b++)for(let _=0;_<=o;_++)c.x=b/e,c.y=_/o,h.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Uu(new za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Wt extends Us{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Mf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class N1{constructor(t,e,i){const o=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&o.onStart!==void 0&&o.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,o.onProgress!==void 0&&o.onProgress(u,r,a),r===a&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(u){o.onError!==void 0&&o.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const U1=new N1;class zu{constructor(t){this.manager=t!==void 0?t:U1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(o,s){i.load(t,o,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zu.DEFAULT_MATERIAL_NAME="__DEFAULT";class z1 extends zu{constructor(t){super(t)}load(t,e,i,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Mf.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=xr("img");function l(){u(),Mf.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){u(),o&&o(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class k1 extends zu{constructor(t){super(t)}load(t,e,i,o){const s=new qe,r=new z1(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,o),s}}class cl extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class F1 extends cl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sc=new Rt,bf=new I,wf=new I;class hp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(bf),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sf=new Rt,qs=new I,rc=new I;class O1 extends hp{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),i.position.copy(qs),rc.copy(i.position),rc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(rc),i.updateMatrixWorld(),o.makeTranslation(-qs.x,-qs.y,-qs.z),Sf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf)}}class ul extends cl{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class B1 extends hp{constructor(){super(new Qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H1 extends cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new B1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class G1 extends cl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ef=new Rt;class ku{constructor(t,e,i=0,o=1/0){this.ray=new Ru(t,e),this.near=i,this.far=o,this.camera=null,this.layers=new Pu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(t,e=!0,i=[]){return cu(t,this,i,e),i.sort(Tf),i}intersectObjects(t,e=!0,i=[]){for(let o=0,s=t.length;o<s;o++)cu(t[o],this,i,e);return i.sort(Tf),i}}function Tf(n,t){return n.distance-t.distance}function cu(n,t,e,i){let o=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(o=!1),o===!0&&i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)cu(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vu);const hi=4,pp=3,di=7,js=5,mn=1250,se=32,Ki=42,dl=[{id:"sword",count:1,label:"Sword"},{id:"drumstick",count:6,label:"Drumstick (feed dragons)"},{id:"bread",count:5,label:"Bread (heal you)"},{id:"block_wood",count:24,label:"Wood block (build)"},{id:"block_stone",count:16,label:"Stone block (build)"},{id:"axe",count:1,label:"Axe (chop trees)"},{id:"pickaxe",count:1,label:"Pickaxe (mine stone)"},{id:"water_bucket",count:1,label:"Bucket"},{id:"torch",count:4,label:"Torch"}],V1=[{id:"dragon_book",count:1,label:"Dragon Types"},{id:"round_charm",count:1,label:"Camp charm"}],W1=[{id:"axe",count:1,label:"Axe (chop trees)"},{id:"pickaxe",count:1,label:"Pickaxe (mine stone)"},{id:"water_bucket",count:1,label:"Bucket"},{id:"torch",count:4,label:"Torch"}],Li=7,X1={ember:{body:"#e86a3a",belly:"#f0c070",wing:"#c04030",name:"Ember"},moss:{body:"#4a8a55",belly:"#c5d98a",wing:"#2f6a40",name:"Moss"},sky:{body:"#4a90c8",belly:"#d0e8f8",wing:"#2a5a9a",name:"Sky"},amethyst:{body:"#8a5cb8",belly:"#e0c8f0",wing:"#5a3080",name:"Amethyst"},sunshine:{body:"#f0c040",belly:"#fff0b0",wing:"#e09020",name:"Sunshine"},coral:{body:"#f08090",belly:"#ffe0e8",wing:"#d05070",name:"Coral"}},$1={hair:"#f5d94a",top:"#3a7fd4",trousers:"#9b7bc8",shoes:"#4a2f6a",skin:"#f0c9a8"},Si=[{id:"meadow",inner:0,outer:80,label:"Meadow Home"},{id:"forest",inner:80,outer:200,label:"Whispering Forest"},{id:"lake",inner:200,outer:320,label:"Silver Lakes"},{id:"rocky",inner:320,outer:420,label:"Stone Highlands"},{id:"snow",inner:420,outer:500,label:"Frost Peaks"},{id:"dragon_lands",inner:500,outer:640,label:"Dragon Lands"},{id:"meadow",inner:640,outer:1e9,label:"Open Wilds"}],Af=40;function Cf(n,t){const e=Math.atan2(t,n);return Math.sin(e+Math.PI*.25)+(Math.sin(n*.01)+Math.cos(t*.01))*.15>0?{id:"desert",label:"Sunbaked Dunes"}:{id:"snow",label:"Frost Peaks"}}const Rf={meadow:{color:"#c5ddf2",density:.006,sky:"#a8d4f5"},forest:{color:"#a0b898",density:.008,sky:"#88b090"},lake:{color:"#a8c8e8",density:.006,sky:"#8eb8e0"},rocky:{color:"#c8c0b8",density:.007,sky:"#b0b8c0"},snow:{color:"#d8e8f8",density:.008,sky:"#c8d8f0"},desert:{color:"#e8d8b0",density:.006,sky:"#e0c888"},dragon_lands:{color:"#684848",density:.007,sky:"#6a5058"}};function gn(n,t){const e=Math.hypot(n,t),i=Math.sin(n*.037)*8+Math.cos(t*.029)*7+Math.sin((n+t)*.019)*5,o=Math.max(0,e+i);let s="meadow",r="Meadow Home",a=80;for(let g=0;g<Si.length;g++){const y=Si[g];if(o<y.outer||g===Si.length-1){s=y.id,r=y.label,a=y.outer,y.inner;break}}if(s==="snow"||o>=420&&o<500){const g=Cf(n,t);s=g.id,r=g.label}let l=null,c=0;const u=a-o;if(u<Af&&a<1e8){c=1-u/Af,c=Math.max(0,Math.min(1,c)),Si.find(p=>p.inner>=a-.1)??Si[Si.length-1];const g=Si.findIndex(p=>p.outer===a),y=Si[Math.min(Si.length-1,g+1)];l=y.id==="snow"?Cf(n,t).id:y.id}const d=Rf[s];Math.hypot(n-820,t-60)<90?(r="Market Town",s="meadow",l=null,c=0):r==="Meadow Home"&&e>640&&(r="Open Wilds");const h=Rf[s]??d;return{primary:s,secondary:l,blend:c,label:r,fogColor:h.color,fogDensity:h.density,skyTint:h.sky}}function ao(n,t,e){return Math.max(t,Math.min(e,n))}function Fs(n,t){const e=n.x-t.x,i=n.z-t.z;return Math.hypot(e,i)}function Pf(n){const t=mn-1,e=Math.hypot(n.x,n.z);let i=n.x,o=n.z;if(e>t){const s=t/e;i*=s,o*=s}return{x:i,y:ao(n.y,-20,120),z:o}}function Y1(n,t,e){return t||e?!1:n==="adventure"}function mp(n,t){return t?!1:n==="safe_build"||n==="adventure"}function q1(n,t){const e=n.player.monstersDefeated+1,i=n.player.stars+1;let o=n.player.level,s=n.player.levelProgress;const r=e/js;s=ao(r%1===0&&r>0?1:r-Math.floor(r),0,1),e>0&&e%js===0?!n.settings.useStarsForLevelUnlock||i>=n.settings.starsToUnlockNextLevel?(o+=1,s=0):s=.99:s=ao(e%js/js,0,1);const a=n.flags.firstObjectiveComplete||e>=js;return{...n,player:{...n.player,monstersDefeated:e,stars:i,level:o,levelProgress:s},flags:{...n.flags,firstObjectiveComplete:a}}}function j1(n,t,e){const i=n.find(a=>a.id===t);if(!i)return{companions:n,bondedNow:!1,rejected:"missing"};if(i.bonded)return{companions:n,bondedNow:!1,rejected:"already_bonded"};if(n.filter(a=>a.bonded).length>=pp)return{companions:n,bondedNow:!1,rejected:"max_companions"};let s=!1;return{companions:n.map(a=>{if(a.id!==t)return a;const l=ao(a.tameness+e,0,1),c=l>=1;return c&&!a.bonded&&(s=!0),{...a,tameness:l,bonded:c}}),bondedNow:s,rejected:null}}function uu(n,t,e){if(e!=="grounded")return{ok:!1,mount:e,mountedCompanionId:t,reason:"already_mounted"};const i=n.find(o=>o.id===t);return!i||!i.bonded||i.kind!=="dragon"?{ok:!1,mount:"grounded",mountedCompanionId:null,reason:"need_bonded_dragon"}:{ok:!0,mount:"mounted",mountedCompanionId:t}}function Z1(n,t,e=2.5){return n==="grounded"?{ok:!1,mount:n,reason:"not_mounted"}:t>e?{ok:!0,mount:"grounded",softLanding:!0}:{ok:!0,mount:"grounded",softLanding:!1}}function du(n){return n==="mounted"||n==="flying"?"flying":n}function K1(n,t){return n!=="flying"?n:t<=1.2?"mounted":"flying"}function ac(n,t,e,i,o,s=200){if(!mp(i,o))return{blocks:n,ok:!1,reason:"blocked"};if(n.length>=s)return{blocks:n,ok:!1,reason:"full"};const r=`${t.x}|${t.y}|${t.z}`;if(n.some(l=>`${l.x}|${l.y}|${l.z}`===r))return{blocks:n,ok:!1,reason:"occupied"};const a=`b_${n.length}_${t.x}_${t.y}_${t.z}`;return{blocks:[...n,{id:a,...t,material:e}],ok:!0}}function fu(n,t,e){return n===t?{mode:n}:{mode:"adventure",flagsPatch:{readyToBattleAcknowledged:!0}}}function If(n,t){return ao(n-t,0,di)}function J1(n,t,e=di){return ao(n+t,0,e)}const Q1="dragon-master-trilli",tM=Q1,eM=tM,Cs="saves",gp="primary";async function nM(n){return{imported:!1,note:null}}function xp(n=1){const t=[],e=[{r:22,kind:"field_monster",n:4},{r:120,kind:"forest_sprite",n:4},{r:250,kind:"river_skimmer",n:3},{r:360,kind:"stone_mite",n:3},{r:480,kind:"frost_puff",n:2},{r:500,kind:"sand_wisp",n:2},{r:580,kind:"ember_mite",n:3},{r:760,kind:"field_monster",n:3}];let i=0;for(const s of e)for(let r=0;r<s.n;r++){const a=r/s.n*Math.PI*2+s.r*.01;let l=s.kind;s.r>=440&&s.r<560&&(l=Math.cos(a)>0?"sand_wisp":"frost_puff"),t.push({id:`m_${i++}`,kind:l,position:{x:Math.cos(a)*s.r,y:0,z:Math.sin(a)*s.r},hp:3,maxHp:3,alive:!0,hostile:!1})}const o=[{id:"wild_ember",kind:"dragon",name:"Ember Dragon",palette:"ember",tameness:0,bonded:!1,position:{x:3.2,y:0,z:4.5}},{id:"wild_sky",kind:"dragon",name:"Sky Dragon",palette:"sky",tameness:0,bonded:!1,position:{x:-16,y:0,z:10}},{id:"wild_moss",kind:"dragon",name:"Moss Dragon",palette:"moss",tameness:0,bonded:!1,position:{x:6,y:0,z:-22}},{id:"wild_amethyst",kind:"dragon",name:"Amethyst Dragon",palette:"amethyst",tameness:0,bonded:!1,position:{x:-10,y:0,z:-18}}];return{version:hi,savedAt:new Date().toISOString(),player:{position:{x:0,y:1.6,z:3},yaw:0,pitch:0,hearts:di,maxHearts:di,level:1,levelProgress:0,stars:0,monstersDefeated:0,mode:"safe_build",mount:"grounded",mountedCompanionId:null,selectedHotbar:0,hotbar:dl.map(s=>({...s})),inventory:V1.map(s=>({...s})),hunger:Li,timeOfDay:8,appearance:{...$1},sprinting:!1,coins:0},companions:o,monsters:t,blocks:[],choppedTrees:[],choppedAt:{},pickedIds:[],minedRocks:[],minedAt:{},flags:{firstObjectiveComplete:!1,tutorialSeen:!1,readyToBattleAcknowledged:!1,buildGuideComplete:!1,welcomeShownOnce:!1},settings:{muted:!1,quality:"medium",starsToUnlockNextLevel:20,useStarsForLevelUnlock:!1}}}function iM(n){const t={...n.player},e=t.hotbar.map(s=>({...s})),i=Array.isArray(t.inventory)?t.inventory.map(s=>({...s})):[],o=new Set([...e,...i].map(s=>s.id));for(const s of W1)o.has(s.id)||s.id==="water_bucket"&&o.has("water_bucket_full")||(e.length<12?e.push({...s}):i.push({...s}));return t.hotbar=e,t.inventory=i,Number.isFinite(t.hunger)||(t.hunger=Li),t.hunger=Math.max(0,Math.min(Li,t.hunger)),Number.isFinite(t.timeOfDay)||(t.timeOfDay=8),t.timeOfDay=(t.timeOfDay%24+24)%24,{...n,version:hi,player:t,choppedTrees:Array.isArray(n.choppedTrees)?[...n.choppedTrees]:[],pickedIds:Array.isArray(n.pickedIds)?[...n.pickedIds]:[]}}function ka(n){const t={};if(!n||typeof n!="object"||Array.isArray(n))return t;for(const[e,i]of Object.entries(n)){const o=Number(i);typeof e=="string"&&Number.isFinite(o)&&(t[e.slice(0,80)]=o)}return t}function yp(n){const t=iM(n),e={...t.player},i=Number(e.coins);e.coins=Number.isFinite(i)?Math.max(0,Math.min(9999,Math.floor(i))):0;const o=Array.isArray(t.choppedTrees)?[...t.choppedTrees]:[],s=ka(t.choppedAt),r=Date.now();for(const u of o)s[u]==null&&(s[u]=r);const a=Array.isArray(t.minedRocks)?[...t.minedRocks]:[],l=ka(t.minedAt);for(const u of a)l[u]==null&&(l[u]=r);const c=t.blocks.map(u=>({...u,piece:u.piece??"block",facing:Number.isFinite(Number(u.facing))?(Number(u.facing)%4+4)%4:0}));return{...t,version:hi,player:e,blocks:c,choppedTrees:o,choppedAt:s,minedRocks:a,minedAt:l}}function oM(n,t){const e=yp({...n,version:hi}),i=t(e.player.position.x,e.player.position.z),o=1.55;(!Number.isFinite(e.player.position.y)||e.player.position.y<i+.5||e.player.position.y>i+80)&&(e.player={...e.player,position:{...e.player.position,y:i+o}});const s=Math.hypot(e.player.position.x,e.player.position.z);if(s>mn-2){const r=(mn-2)/s;e.player.position={x:e.player.position.x*r,y:e.player.position.y,z:e.player.position.z*r};const a=t(e.player.position.x,e.player.position.z);e.player.position.y=a+o}return e.companions=e.companions.map(r=>{const a=t(r.position.x,r.position.z);return{...r,position:{...r.position,y:a}}}),e.monsters=e.monsters.map(r=>{const a=t(r.position.x,r.position.z);return{...r,position:{...r.position,y:a}}}),e}function Dn(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function no(n,t,e){const i=typeof n=="number"?n:Number(n);return!Number.isFinite(i)||i<t||i>e?null:i}function Fu(n,t=mn+40){if(!Dn(n))return null;const e=no(n.x,-t,t),i=no(n.y,-5,120),o=no(n.z,-t,t);return e==null||i==null||o==null?null:{x:e,y:i,z:o}}function sM(n){if(n===void 0||!Array.isArray(n)||n.length>40)return null;const t=[];for(const e of n){if(!Dn(e)||typeof e.id!="string"||typeof e.label!="string")return null;const i=Number(e.count);if(!Number.isFinite(i)||i<0||i>99)return null;t.push({id:e.id,count:i,label:e.label.slice(0,40)})}return t}function rM(n){if(!Array.isArray(n)||n.length<1||n.length>16)return null;const t=[];for(const e of n){if(!Dn(e)||typeof e.id!="string"||typeof e.label!="string")return null;const i=Number(e.count);if(!Number.isFinite(i)||i<0||i>99)return null;t.push({id:e.id,count:i,label:e.label.slice(0,40)})}return t}function aM(n){if(!Array.isArray(n)||n.length>12)return null;const t=[];let e=0;for(const i of n){if(!Dn(i)||typeof i.id!="string"||typeof i.name!="string"||i.kind!=="dragon"&&i.kind!=="animal")return null;const o=Number(i.tameness);if(!Number.isFinite(o)||o<0||o>1||typeof i.bonded!="boolean"||(i.bonded&&e++,e>pp))return null;const s=Fu(i.position);if(!s)return null;t.push({...i,position:s,tameness:o})}return t}function lM(n){if(!Array.isArray(n)||n.length>80)return null;const t=[];for(const e of n){if(!Dn(e)||typeof e.id!="string")return null;const i=Number(e.hp),o=Number(e.maxHp);if(!Number.isFinite(i)||!Number.isFinite(o)||i<0||i>20||o<1||o>20)return null;const s=typeof e.hostile=="boolean"?e.hostile:!1,r=Fu(e.position);if(!r)return null;t.push({...e,hostile:s,position:r,hp:i,maxHp:o})}return t}function cM(n){if(!Array.isArray(n)||n.length>250)return null;const t=[];for(const e of n){if(!Dn(e)||typeof e.id!="string"||e.material!=="wood"&&e.material!=="stone")return null;const i=no(e.x,-mn-40,mn+40),o=no(e.y,-20,120),s=no(e.z,-mn-40,mn+40);if(i==null||o==null||s==null)return null;const r=typeof e.piece=="string"?e.piece:"block",a=["block","floor","wall","roof","door","window"].includes(r)?r:"block",l=Number(e.facing),c=Number.isFinite(l)?(l%4+4)%4:0;t.push({id:String(e.id).slice(0,64),x:i,y:o,z:s,material:e.material,piece:a,facing:c})}return t}function _p(n){if(!Dn(n))return null;const t=Number(n.version);if(!Number.isInteger(t)||t<1||t>hi||!Dn(n.player)||!Dn(n.flags)||!Dn(n.settings))return null;const e=rM(n.player.hotbar);if(!e)return null;const i=aM(n.companions);if(!i)return null;const o=lM(n.monsters);if(!o)return null;const s=cM(n.blocks);if(!s)return null;const r=Number(n.player.hearts);if(!Number.isFinite(r)||r<0||r>di)return null;const a=Fu(n.player.position);if(!a)return null;const l=no(n.player.yaw,-100,100);if(l==null)return null;const c=-60*Math.PI/180,u=25*Math.PI/180;let d=no(n.player.pitch,-100,100);d==null||!Number.isFinite(d)?d=-.18:d=Math.max(c,Math.min(u,d));const f=xp();try{const h={...f,version:hi,savedAt:typeof n.savedAt=="string"?n.savedAt:new Date().toISOString(),player:{...f.player,...n.player,hearts:ao(r,0,di),maxHearts:di,hotbar:e,position:a,yaw:l,pitch:d,appearance:{...f.player.appearance,...Dn(n.player.appearance)?n.player.appearance:{}},inventory:sM(n.player.inventory)??[],hunger:Number.isFinite(Number(n.player.hunger))?Math.max(0,Math.min(Li,Number(n.player.hunger))):f.player.hunger,timeOfDay:Number.isFinite(Number(n.player.timeOfDay))?(Number(n.player.timeOfDay)%24+24)%24:f.player.timeOfDay,coins:Number.isFinite(Number(n.player.coins))?Math.max(0,Math.min(9999,Math.floor(Number(n.player.coins)))):0},companions:i,monsters:o,blocks:s,choppedTrees:Array.isArray(n.choppedTrees)?n.choppedTrees.filter(g=>typeof g=="string").slice(0,400):[],choppedAt:ka(n.choppedAt),pickedIds:Array.isArray(n.pickedIds)?n.pickedIds.filter(g=>typeof g=="string").slice(0,400):[],minedRocks:Array.isArray(n.minedRocks)?n.minedRocks.filter(g=>typeof g=="string").slice(0,400):[],minedAt:ka(n.minedAt),flags:{...f.flags,...n.flags},settings:{...f.settings,...n.settings,starsToUnlockNextLevel:ao(Number(n.settings.starsToUnlockNextLevel)||20,1,100),useStarsForLevelUnlock:!!n.settings.useStarsForLevelUnlock}};return yp(h)}catch{return null}}function uM(n){const t={...n,savedAt:new Date().toISOString(),version:hi};return JSON.stringify(t,null,2)}function dM(n,t){try{if(n.length>5e5)return{ok:!1,error:"Save file too large.",previous:t};const e=JSON.parse(n),i=_p(e);return i?{ok:!0,state:i}:{ok:!1,error:"Save failed validation (schema or bounds).",previous:t}}catch{return{ok:!1,error:"Save JSON could not be parsed.",previous:t}}}function vp(){return new Promise((n,t)=>{const e=indexedDB.open(eM,1);e.onupgradeneeded=()=>{const i=e.result;i.objectStoreNames.contains(Cs)||i.createObjectStore(Cs)},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function fM(){if(typeof indexedDB>"u")return null;const n=await vp();return new Promise((t,e)=>{const o=n.transaction(Cs,"readonly").objectStore(Cs).get(gp);o.onsuccess=()=>{const s=o.result;if(!s){t(null);return}const r=Dn(s)&&Number.isInteger(Number(s.version))?Number(s.version):0,a=_p(s);if(!a){t(null);return}t({state:a,incomingVersion:r})},o.onerror=()=>e(o.error)})}async function Uo(n){if(typeof indexedDB>"u")return;const t=await vp(),e={...n,savedAt:new Date().toISOString(),version:hi};return new Promise((i,o)=>{const s=t.transaction(Cs,"readwrite");s.objectStore(Cs).put(e,gp),s.oncomplete=()=>i(),s.onerror=()=>o(s.error)})}async function hM(){try{if(navigator.storage&&navigator.storage.persist)return await navigator.storage.persist()}catch{}return!1}function pM(n){return{...n,hostile:!!n.hostile}}function zn(n){return n.map(pM)}function mM(n,t,e,i,o,s){if(!Y1(i,o,s))return{monsters:n,hit:!1,defeated:!1,becameHostile:!1};let r=!1,a=!1,l=!1;return{monsters:n.map(u=>{if(u.id!==t||!u.alive)return u;r=!0;const d=u.hostile,f=Math.max(0,u.hp-e);return f<=0&&(a=!0),d||(l=!0),{...u,hp:f,alive:f>0,hostile:!0}}),hit:r,defeated:a,becameHostile:l}}function gM(n){return n.alive&&n.hostile}function Mp(n,t,e){const i=[];for(const o of n)o.alive&&Fs(o.position,t)<=e&&i.push(o.id);return{nearbyIds:i,monsters:n.map(o=>({...o}))}}function xM(n,t,e=1.2){const i=Mp(n,t,e);return{touchingIds:i.nearbyIds,monsters:i.monsters}}function Fa(n){return n.map(t=>({...t}))}function yM(n,t,e,i){let o=0;const s=[];for(const r of n)gM(r)&&Fs(r.position,t)<=e&&(o+=i,s.push(r.id));return{damageToPlayer:o,attackerIds:s}}const lc=600;function _M(n,t,e,i){return n||t||i<e}function vM(){return{forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,attack:!1,interact:!1,place:!1,removeBlock:!1,toggleMount:!1,readyBattle:!1,pause:!1,recenter:!1,slot:null,fireBreath:!1,toggleBag:!1,lookDx:0,lookDy:0,touchLookDx:0,touchLookDy:0,touchMoveX:0,touchMoveY:0}}const Lf=80;class MM{constructor(t,e){this.canvas=t,this.isMenuOpen=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),t.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===t;i&&!this.pointerLocked&&(this.ignoreNextLook=!0,this.state.lookDx=0,this.state.lookDy=0),this.pointerLocked=i}),this.setupTouch()}state=vM();keys=new Set;lastW=0;pointerLocked=!1;wantsLock=!1;attackQueued=!1;placeQueued=!1;readyQueued=!1;interactQueued=!1;mountQueued=!1;recenterQueued=!1;bagQueued=!1;fireQueued=!1;fireHeld=!1;fireBurstUntil=0;touchJumpHeld=!1;ignoreNextLook=!1;armPointerLockIgnore(){this.ignoreNextLook=!0,this.state.lookDx=0,this.state.lookDy=0}requestLock(){this.wantsLock=!0,this.isMenuOpen()||this.canvas.requestPointerLock()}releaseLock(){this.wantsLock=!1,document.pointerLockElement&&document.exitPointerLock()}onKeyDown=t=>{if(t.code==="Escape"){this.state.pause=!0,this.releaseLock();return}if(t.code==="KeyI"||t.code==="KeyB"){this.state.toggleBag=!0,this.bagQueued=!0;return}if(!this.isMenuOpen()){if(this.keys.add(t.code),t.code==="KeyW"){const e=performance.now();e-this.lastW<280&&(this.state.sprint=!0),this.lastW=e}t.code>="Digit1"&&t.code<="Digit9"&&(this.state.slot=Number(t.code.replace("Digit",""))-1),t.code==="KeyE"&&(this.state.toggleMount=!0,this.mountQueued=!0),t.code==="KeyR"&&(this.state.readyBattle=!0,this.readyQueued=!0),t.code==="KeyF"&&(this.state.interact=!0,this.interactQueued=!0),t.code==="KeyQ"&&(t.repeat&&!this.fireHeld||(this.fireHeld=!0,this.state.fireBreath=!0,t.repeat||(this.fireQueued=!0,this.fireBurstUntil=performance.now()+lc))),t.code==="KeyX"&&(this.state.removeBlock=!0),(t.code==="KeyC"||t.code==="Home")&&(this.state.recenter=!0,this.recenterQueued=!0,t.preventDefault())}};onKeyUp=t=>{this.keys.delete(t.code),t.code==="KeyW"&&(this.state.sprint=!1),t.code==="KeyQ"&&(this.fireHeld=!1,this.state.fireBreath=!1)};onMouseDown=t=>{this.isMenuOpen()||(!this.pointerLocked&&t.button===0&&this.requestLock(),t.button===0&&(this.state.attack=!0,this.attackQueued=!0),t.button===2&&(this.state.place=!0,this.placeQueued=!0))};onMouseUp=t=>{t.button===0&&(this.state.attack=!1),t.button===2&&(this.state.place=!1)};onMouseMove=t=>{if(this.isMenuOpen()||!this.pointerLocked&&!this.wantsLock&&t.buttons!==1)return;if(this.ignoreNextLook){this.ignoreNextLook=!1;return}const e=t.movementX,i=t.movementY;Math.abs(e)>Lf||Math.abs(i)>Lf||(this.state.lookDx+=e,this.state.lookDy+=i)};setupTouch(){const t=document.getElementById("touch-move"),e=document.getElementById("touch-look"),i=document.getElementById("touch-jump"),o=document.getElementById("touch-action"),s=document.getElementById("touch-mount"),r=document.getElementById("touch-recenter"),a=document.getElementById("touch-fire");if(!t||!e)return;const l=(c,u)=>{let d=null,f=0,h=0;c.addEventListener("pointerdown",g=>{d=g.pointerId,f=g.clientX,h=g.clientY,c.setPointerCapture(d)}),c.addEventListener("pointermove",g=>{if(g.pointerId!==d)return;const y=(g.clientX-f)/40,p=(g.clientY-h)/40;u==="move"?(this.state.touchMoveX=Math.max(-1,Math.min(1,y)),this.state.touchMoveY=Math.max(-1,Math.min(1,p))):(this.state.touchLookDx=Math.max(-8,Math.min(8,y*4)),this.state.touchLookDy=Math.max(-8,Math.min(8,p*4)),f=g.clientX,h=g.clientY)}),c.addEventListener("pointerup",()=>{d=null,u==="move"?(this.state.touchMoveX=0,this.state.touchMoveY=0):(this.state.touchLookDx=0,this.state.touchLookDy=0)})};l(t,"move"),l(e,"look"),i?.addEventListener("pointerdown",()=>{this.touchJumpHeld=!0}),i?.addEventListener("pointerup",()=>{this.touchJumpHeld=!1}),i?.addEventListener("pointercancel",()=>{this.touchJumpHeld=!1}),o?.addEventListener("pointerdown",()=>{this.state.attack=!0}),o?.addEventListener("pointerup",()=>{this.state.attack=!1}),s?.addEventListener("pointerdown",()=>{this.state.toggleMount=!0,this.mountQueued=!0}),r?.addEventListener("pointerdown",c=>{c.preventDefault(),this.state.recenter=!0,this.recenterQueued=!0}),a?.addEventListener("pointerdown",()=>{this.fireHeld=!0,this.state.fireBreath=!0,this.fireQueued=!0,this.fireBurstUntil=performance.now()+lc}),a?.addEventListener("pointerup",()=>{this.fireHeld=!1,this.state.fireBreath=!1}),a?.addEventListener("pointercancel",()=>{this.fireHeld=!1,this.state.fireBreath=!1})}sample(){this.isMenuOpen()||(this.state.forward=this.keys.has("KeyW")||this.state.touchMoveY<-.25,this.state.back=this.keys.has("KeyS")||this.state.touchMoveY>.25,this.state.left=this.keys.has("KeyA")||this.state.touchMoveX<-.25,this.state.right=this.keys.has("KeyD")||this.state.touchMoveX>.25,this.state.jump=this.keys.has("Space")||this.touchJumpHeld);const t={...this.state};this.attackQueued&&(t.attack=!0),this.placeQueued&&(t.place=!0),this.readyQueued&&(t.readyBattle=!0),this.interactQueued&&(t.interact=!0),this.mountQueued&&(t.toggleMount=!0),this.recenterQueued&&(t.recenter=!0),this.bagQueued&&(t.toggleBag=!0);const e=performance.now(),i=this.fireHeld||this.state.fireBreath;return this.fireQueued&&(this.fireBurstUntil=e+lc),t.fireBreath=_M(i,this.fireQueued,this.fireBurstUntil,e),this.attackQueued=!1,this.placeQueued=!1,this.readyQueued=!1,this.interactQueued=!1,this.mountQueued=!1,this.recenterQueued=!1,this.bagQueued=!1,this.fireQueued=!1,this.state.pause=!1,this.state.toggleMount=!1,this.state.readyBattle=!1,this.state.interact=!1,this.state.removeBlock=!1,this.state.attack=!1,this.state.place=!1,this.state.recenter=!1,this.state.toggleBag=!1,this.state.slot=null,this.state.lookDx=0,this.state.lookDy=0,this.state.touchLookDx=0,this.state.touchLookDy=0,t}restoreUnhandled(t){t.toggleMount&&(this.mountQueued=!0),t.interact&&(this.interactQueued=!0),t.attack&&(this.attackQueued=!0),t.place&&(this.placeQueued=!0),t.readyBattle&&(this.readyQueued=!0)}}class bM{ctx=null;muted=!1;unlocked=!1;async unlock(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&await this.ctx.resume(),this.unlocked=!0}beep(t,e,i,o=.08){if(this.muted||!this.unlocked||!this.ctx)return;const s=this.ctx.currentTime,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type=i,r.frequency.value=t,a.gain.setValueAtTime(o,s),a.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(a),a.connect(this.ctx.destination),r.start(s),r.stop(s+e)}swing(){this.beep(180,.08,"square",.05)}hit(){this.beep(120,.12,"sawtooth",.07)}tame(){this.beep(520,.15,"sine",.06),this.beep(780,.2,"sine",.04)}mount(){this.beep(300,.1,"triangle",.05)}place(){this.beep(240,.06,"triangle",.04)}hurt(){this.beep(90,.2,"sawtooth",.08)}win(){this.beep(440,.12,"sine",.05),this.beep(660,.18,"sine",.05)}ui(){this.beep(600,.04,"sine",.03)}save(){this.beep(400,.08,"sine",.04),this.beep(500,.1,"sine",.03)}fire(){if(this.muted||!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.32),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),o=i.getChannelData(0);for(let l=0;l<e;l++)o[l]=(Math.random()*2-1)*(1-l/e);const s=this.ctx.createBufferSource();s.buffer=i;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=640;const a=this.ctx.createGain();a.gain.setValueAtTime(.11,t),a.gain.exponentialRampToValueAtTime(.001,t+.32),s.connect(r),r.connect(a),a.connect(this.ctx.destination),s.start(t),this.beep(88,.26,"sawtooth",.035)}}const In="./textures/v1/";let ii=null,cc=null;const wM=new k1;function bo(n,t={}){return new Promise((e,i)=>{wM.load(n,o=>{o.colorSpace=t.srgb?ke:Ci,o.wrapS=o.wrapT=t.wrap??ui,t.flipY===!1&&(o.flipY=!1),o.anisotropy=4,o.needsUpdate=!0,e(o)},void 0,()=>i(new Error("texture load failed: "+n)))})}async function os(n,t={}){try{return await bo(n,t)}catch{return null}}const fs={grass:.55,path:.35},io={grass:.92,dirt:.95,path:.9,rock:.88,wood:.72,scales:.62,water:.22};function Cn(){return ii}async function bp(n){const t=n==="low";if(ii&&cc===(t?"low":"full"))return ii;if(ii){for(const w of Object.values(ii))if(w&&typeof w.dispose=="function"&&w.dispose(),Array.isArray(w))for(const M of w)M.dispose();ii=null}const e=w=>bo(In+w,{srgb:!0}),i=w=>bo(In+w,{srgb:!1});if(t){const[w,M,R,N,U,z,Y,B,tt,G,rt,$,it]=await Promise.all([e("grass_color.webp"),e("dirt_color.webp"),e("path_dirt_blend_color.webp"),e("rock_dirt_blend_color.webp"),e("log_bark_color.webp"),e("roof_shingles_color.webp"),e("dragon_scales_color.webp"),e("dragon_belly_color.webp"),bo(In+"wing_membrane.webp",{srgb:!0,wrap:$e}),bo(In+"log_endgrain_color.webp",{srgb:!0,wrap:$e}),os(In+"cloud_01_256.webp",{srgb:!0,wrap:$e}),os(In+"cloud_02_256.webp",{srgb:!0,wrap:$e}),os(In+"cloud_03_256.webp",{srgb:!0,wrap:$e})]);return R.rotation=.17,R.center.set(.5,.5),N.offset.set(.13,.07),ii={grass:w,dirt:M,path:R,rock:N,wood:U,endgrain:G,shingle:z,scales:Y,belly:B,wing:tt,clouds:[rt,$,it].filter(Boolean)},cc="low",ii}const[o,s,r,a,l,c,u,d,f,h,g,y,p,m,v,b,_,T,E,A,S]=await Promise.all([e("grass_color.webp"),e("dirt_color.webp"),e("path_dirt_blend_color.webp"),e("rock_dirt_blend_color.webp"),i("grass_normal.webp"),i("dirt_normal.webp"),i("path_normal.webp"),i("rock_normal.webp"),e("log_bark_color.webp"),i("log_bark_normal.webp"),bo(In+"log_endgrain_color.webp",{srgb:!0,wrap:$e}),e("roof_shingles_color.webp"),i("roof_shingles_normal.webp"),e("dragon_scales_color.webp"),i("dragon_scales_normal.webp"),e("dragon_belly_color.webp"),bo(In+"wing_membrane.webp",{srgb:!0,wrap:$e}),i("water_ripple_normal.webp"),os(In+"cloud_01_256.webp",{srgb:!0,wrap:$e}),os(In+"cloud_02_256.webp",{srgb:!0,wrap:$e}),os(In+"cloud_03_256.webp",{srgb:!0,wrap:$e})]);return r.rotation=.17,r.center.set(.5,.5),u&&(u.rotation=.17,u.center.set(.5,.5)),a.offset.set(.13,.07),d&&d.offset.set(.13,.07),ii={grass:o,dirt:s,path:r,rock:a,grassNormal:l,dirtNormal:c,pathNormal:u,rockNormal:d,wood:f,woodNormal:h,endgrain:g,shingle:y,shingleNormal:p,scales:m,scalesNormal:v,belly:b,wing:_,waterNormal:T,clouds:[E,A,S].filter(Boolean)},cc="full",ii}const Df=new Map;function Oo(n,t,e,i){const o=Df.get(n);if(o)return o;const s=document.createElement("canvas");s.width=s.height=t;const r=s.getContext("2d");e(r,t);const a=new ks(s);return a.colorSpace=ke,a.wrapS=a.wrapT=ui,a.anisotropy=4,a.needsUpdate=!0,Df.set(n,a),a}function wp(n=128){const t=Cn();return t?.grass?t.grass:Oo("grass",n,(e,i)=>{e.fillStyle="#4a8a3a",e.fillRect(0,0,i,i);for(let o=0;o<900;o++){const s=Math.random()*i,r=Math.random()*i;e.fillStyle=Math.random()>.5?"#5a9a48":"#3a7a30",e.fillRect(s,r,1+Math.random()*2,2+Math.random()*4)}})}function Sp(n=128){const t=Cn();return t?.dirt?t.dirt:Oo("dirt",n,(e,i)=>{e.fillStyle="#6a4a28",e.fillRect(0,0,i,i);for(let o=0;o<600;o++)e.fillStyle=Math.random()>.5?"#7a5a38":"#5a3a20",e.fillRect(Math.random()*i,Math.random()*i,2,2)})}function Ir(n=128){const t=Cn();return t?.rock?t.rock:Oo("rock",n,(e,i)=>{e.fillStyle="#6a6e72",e.fillRect(0,0,i,i);for(let o=0;o<200;o++){const s=Math.random()*i,r=Math.random()*i;e.fillStyle=`rgb(${90+Math.random()*40|0},${94+Math.random()*40|0},${98+Math.random()*40|0})`,e.beginPath(),e.ellipse(s,r,4+Math.random()*10,3+Math.random()*8,Math.random(),0,Math.PI*2),e.fill()}})}function SM(n=128){const t=Cn();return t?.path?t.path:Oo("path",n,(e,i)=>{e.fillStyle="#c4b090",e.fillRect(0,0,i,i);for(let o=0;o<80;o++)e.fillStyle=Math.random()>.5?"#b0a080":"#d0c4a0",e.beginPath(),e.ellipse(Math.random()*i,Math.random()*i,6,4,Math.random(),0,Math.PI*2),e.fill()})}function fl(n=128){const t=Cn();return t?.wood?t.wood:Oo("wood",n,(e,i)=>{e.fillStyle="#8b5a2b",e.fillRect(0,0,i,i);for(let o=0;o<i;o+=8)e.strokeStyle=`rgba(60,30,10,${.25+Math.random()*.35})`,e.lineWidth=1+Math.random(),e.beginPath(),e.moveTo(0,o+Math.random()*3),e.bezierCurveTo(i*.3,o+2,i*.7,o-2,i,o+Math.random()*3),e.stroke()})}function Ao(n=64){const t=Cn();return t?.shingle?t.shingle:Oo("shingle",n,(e,i)=>{e.fillStyle="#8b3a3a",e.fillRect(0,0,i,i);const o=8,s=6;for(let r=0;r<o;r++)for(let a=0;a<s;a++){const l=(a+r%2*.5)*(i/s),c=r*(i/o);e.fillStyle=r%2?"#a04840":"#7a3030",e.fillRect(l,c,i/s-1,i/o-1)}})}function uc(n,t=64){const e=Cn();return e?.scales?e.scales:Oo("scales_"+n,t,(i,o)=>{i.fillStyle=n,i.fillRect(0,0,o,o);for(let s=0;s<o;s+=6)for(let r=0;r<o;r+=6){const a=r+(s%12===0?0:3);i.fillStyle="rgba(0,0,0,0.12)",i.beginPath(),i.ellipse(a,s,3,2.5,0,0,Math.PI*2),i.fill()}})}const Nf=new Map;function en(n,t){let e=Nf.get(n);return e||(e=t(),Nf.set(n,e)),e}function En(n,t){const e=new Wt({color:n,map:t,roughness:io.wood,metalness:0}),i=Cn();return i?.woodNormal&&t===i.wood&&(e.normalMap=i.woodNormal,e.normalScale=new lt(.55,.55)),i?.shingleNormal&&t===i.shingle&&(e.normalMap=i.shingleNormal,e.normalScale=new lt(.65,.65)),e}function hl(n){n.traverse(t=>{const e=t;e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})}function EM(){const n=new j(en("bush2",()=>new rl(.42,1)),En("#3f7a40"));return n.scale.set(1.25,.9,1.15),n.castShadow=!0,n}function TM(n=3.2){const t=new Xt;t.name="pine";const e=fl(64).clone();e.repeat.set(1,3),e.wrapS=e.wrapT=ui;const i=new j(en("pineT3",()=>new ue(.11,.18,1.8,8)),En("#5a3a24",e));i.position.y=.9,t.add(i);for(let o=0;o<4;o++){const s=new j(en("pineC3",()=>new We(1.05-o*.18,1.2,8)),En("#2f6a38"));s.position.y=1.7+o*.7,t.add(s)}return t.scale.setScalar(n/3.2),hl(t),t}function AM(n=2.8){const t=new Xt,e=new j(en("broadT",()=>new ue(.08,.12,1.2,6)),En("#6a4a30",fl(64)));e.position.y=.6,t.add(e);for(const[i,o,s,r]of[[0,1.8,0,1],[.45,1.6,.2,.7],[-.4,1.65,-.15,.65],[.1,2.15,-.2,.55]]){const a=new j(en("broadL",()=>new rl(.55,1)),En("#4a9a48"));a.position.set(i,o,s),a.scale.setScalar(r),t.add(a)}return t.scale.setScalar(n/2.8),hl(t),t}function CM(n=1){const t=new j(en("rock2",()=>new il(.55,0)),En("#a8a8a4",Ir(64)));return t.scale.set(n,n*.7,n*1.1),t.castShadow=!0,t.receiveShadow=!0,t}function RM(n="#e86a3a"){const t=new Xt,e=new j(en("stem2",()=>new ue(.015,.02,.28,4)),En("#3a6a30"));e.position.y=.14,t.add(e);const i=new j(en("fhead",()=>new Ot(.09,8,6)),En(n));i.position.y=.3,t.add(i);const o=new j(en("pcenter",()=>new Ot(.04,6,4)),En("#f0d878"));return o.position.y=.34,t.add(o),t}function PM(){const n=new Xt,t=fl(64);for(const e of[-.5,.5]){const i=new j(en("fpost2",()=>new ue(.055,.065,1.15,6)),En("#9a7050",t));i.position.set(e,.55,0),n.add(i)}for(const e of[.45,.75]){const i=new j(en("frail2",()=>new ne(1.2,.07,.05)),En("#9a7050",t));i.position.y=e,n.add(i)}return hl(n),n}function IM(){const n=new Xt,t=new j(en("crystal2",()=>new al(.5,0)),new Wt({color:"#7ec8ff",roughness:.25,metalness:.3,emissive:"#204060",emissiveIntensity:.15}));t.position.y=.85,t.scale.set(.55,1.35,.55),n.add(t);const e=new j(en("crystalBase2",()=>new ue(.35,.4,.15,6)),En("#4a7a9a"));return e.position.y=.08,n.add(e),hl(n),n}function LM(){const n=new Xt;n.name="cloud";const t=new An({color:"#ffffff",transparent:!0,opacity:.88,depthWrite:!1,fog:!0});for(const[e,i,o,s]of[[0,0,0,1.1],[.55,.08,.1,.85],[-.5,.05,-.08,.9],[.2,.18,-.2,.7],[-.25,.12,.22,.65],[.7,-.02,-.15,.55]]){const r=new j(en("cloudPuff",()=>new Ot(.85,12,10)),t);r.position.set(e,i,o),r.scale.set(s,s*.62,s*.85),n.add(r)}return n}function DM(){const t=new Ot(850,24,12),e=new j(t,new An({color:"#9ec8f0",side:un,fog:!1,depthWrite:!1,depthTest:!1}));return e.name="skyDome",e.frustumCulled=!1,e.renderOrder=-10,e}function NM(){const n=new Xt;n.name="pond";const t=new j(en("pond",()=>new Kn(3.2,32)),(()=>{const i=new Wt({color:"#3a8ab8",roughness:io.water,metalness:.35,transparent:!0,opacity:.82}),o=Cn();return o?.waterNormal&&(i.normalMap=o.waterNormal,i.normalScale=new lt(.4,.4),o.waterNormal.repeat.set(3,3)),i})());t.rotation.x=-Math.PI/2,t.position.y=.04,t.name="waterSurface",n.add(t);const e=new j(en("pondRim",()=>new ll(3.15,3.55,32)),En("#7a7060"));return e.rotation.x=-Math.PI/2,e.position.y=.05,n.add(e),n}function je(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),o=new Set(Object.keys(n[0].morphAttributes)),s={},r={},a=n[0].morphTargetsRelative,l=new Pe;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!o.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.morphAttributes[h])}if(t){let h;if(e)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(e){let u=0;const d=[];for(let f=0;f<n.length;++f){const h=n[f].index;for(let g=0;g<h.count;++g)d.push(h.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(const u in s){const d=Uf(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in r){const d=r[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let y=0;y<r[u].length;++y)h.push(r[u][y][f]);const g=Uf(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Uf(n){let t,e,i,o=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=u.gpuType),o!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const r=new t(s),a=new Te(r,e,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let f=0,h=u.count;f<h;f++)for(let g=0;g<e;g++){const y=u.getComponent(f,g);a.setComponent(f+d,g,y)}}else r.set(u.array,l);l+=u.count*e}return o!==void 0&&(a.gpuType=o),a}const Ep=new WeakMap;function de(n,t){return Ep.set(n,t),n}class pi{entries=[];colliders=[];stack=[new Rt];push(t,e,i,o=0){const s=new Rt().compose(new I(t,e,i),new dn().setFromEuler(new on(0,o,0)),new I(1,1,1));this.stack.push(this.top().clone().multiply(s))}pop(){this.stack.length>1&&this.stack.pop()}top(){return this.stack[this.stack.length-1]}add(t,e,i,o,s,r={}){const a=t.index?t.toNonIndexed():t.clone();a.attributes.uv||a.setAttribute("uv",new Te(new Float32Array(a.attributes.position.count*2),2)),a.attributes.normal||a.computeVertexNormals();for(const u of Object.keys(a.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&a.deleteAttribute(u);const l=new Rt().compose(new I(i,o,s),new dn().setFromEuler(new on(r.rx??0,r.ry??0,r.rz??0,"YXZ")),new I(1,1,1)),c=this.top().clone().multiply(l);if(a.applyMatrix4(c),this.entries.push({geo:a,mat:e}),r.solid){a.computeBoundingBox();const u=a.boundingBox;this.colliders.push({minX:u.min.x,maxX:u.max.x,minY:u.min.y,maxY:u.max.y,minZ:u.min.z,maxZ:u.max.z})}}box(t,e,i,o,s,r,a,l={}){this.add(new ne(e,i,o),t,s,r,a,l)}boxMin(t,e,i,o,s,r,a,l={}){this.add(new ne(s,r,a),t,e+s/2,i+r/2,o+a/2,l)}cyl(t,e,i,o,s,r,a,l,c={}){this.add(new ue(e,i,o,s),t,r,a,l,c)}cone(t,e,i,o,s,r,a,l={}){this.add(new We(e,i,o),t,s,r,a,l)}sphere(t,e,i,o,s,r={}){const a=new Ot(e,r.ws??10,r.hs??8);r.sy&&a.scale(1,r.sy,1),this.add(a,t,i,o,s,r)}plane(t,e,i,o,s,r,a={}){this.add(new Ee(e,i),t,o,s,r,a)}solidBox(t,e,i,o,s,r){const a=new I(t,e,i).applyMatrix4(this.top()),l=new I(o,s,r).applyMatrix4(this.top());this.colliders.push({minX:Math.min(a.x,l.x),maxX:Math.max(a.x,l.x),minY:Math.min(a.y,l.y),maxY:Math.max(a.y,l.y),minZ:Math.min(a.z,l.z),maxZ:Math.max(a.z,l.z)})}build(t,e={}){const i=new Xt;i.name=t;const o=new Map;for(const r of this.entries){const a=o.get(r.mat)??[];a.push(r.geo),o.set(r.mat,a)}let s=0;for(const[r,a]of o){const l=je(a,!1);if(!l)continue;const c=Ep.get(r);c&&UM(l,c),l.computeBoundingSphere();const u=new j(l,r);u.name=`${t}_m${s++}`,u.castShadow=e.castShadow??!0,u.receiveShadow=e.receiveShadow??!0,i.add(u);for(const d of a)d.dispose()}return this.entries.length=0,i}}function UM(n,t){const e=n.attributes.position,i=n.attributes.normal,o=n.attributes.uv;for(let s=0;s<e.count;s++){const r=Math.abs(i.getX(s)),a=Math.abs(i.getY(s)),l=Math.abs(i.getZ(s)),c=e.getX(s),u=e.getY(s),d=e.getZ(s);a>=r&&a>=l?o.setXY(s,c*t,d*t):r>=l?o.setXY(s,d*t,u*t):o.setXY(s,c*t,u*t)}o.needsUpdate=!0}const zf=new Map;function uo(n,t,e,i){const o=zf.get(n);if(o)return o;const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");i(r);const a=new ks(s);return a.colorSpace=ke,a.wrapS=a.wrapT=ui,a.anisotropy=4,a.needsUpdate=!0,zf.set(n,a),a}function Lr(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Dr(n="grey"){return uo("stoneBlocks_"+n,256,256,t=>{const e=Lr(n==="grey"?11:23);t.fillStyle=n==="grey"?"#7d7a76":"#9a8a74",t.fillRect(0,0,256,256);const i=5,o=256/i;for(let s=0;s<i;s++){let r=s%2?-40:0;for(;r<256;){const a=60+e()*50,l=n==="grey"?118+e()*40:140+e()*35,c=n==="grey"?[l,l-3,l-6]:[l,l-14,l-30];t.fillStyle=`rgb(${c[0]|0},${c[1]|0},${c[2]|0})`,t.fillRect(r+3,s*o+3,a-6,o-6);for(let u=0;u<40;u++){const d=r+4+e()*(a-8),f=s*o+4+e()*(o-8);t.fillStyle=e()>.5?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.10)",t.fillRect(d,f,2+e()*3,2+e()*3)}t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(r+3,s*o+3,a-6,3),t.fillStyle="rgba(0,0,0,0.18)",t.fillRect(r+3,s*o+o-6,a-6,3),r+=a}}})}function pl(){return uo("flagstone",256,256,n=>{const t=Lr(77);n.fillStyle="#5e5b57",n.fillRect(0,0,256,256);const e=4,i=256/e;for(let o=0;o<e;o++)for(let s=0;s<e;s++){const r=140+t()*45;n.fillStyle=`rgb(${r|0},${r-6|0},${r-14|0})`,n.fillRect(o*i+3,s*i+3,i-6,i-6);for(let a=0;a<30;a++)n.fillStyle=t()>.5?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.09)",n.fillRect(o*i+4+t()*(i-8),s*i+4+t()*(i-8),3,3)}})}function kn(n="light"){return uo("planks_"+n,256,256,t=>{const e=Lr(n==="light"?5:9),i=8,o=256/i;for(let s=0;s<i;s++){const r=n==="light"?150+e()*40:95+e()*30;t.fillStyle=`rgb(${r|0},${r*.68|0},${r*.42|0})`,t.fillRect(0,s*o,256,o);for(let l=0;l<6;l++){t.strokeStyle="rgba(40,20,8,0.22)",t.lineWidth=1,t.beginPath();const c=s*o+3+e()*(o-6);t.moveTo(0,c),t.bezierCurveTo(80,c+e()*4-2,170,c+e()*4-2,256,c),t.stroke()}t.fillStyle="rgba(30,15,5,0.55)",t.fillRect(0,s*o,256,2);const a=e()*256|0;t.fillRect(a,s*o,2,o),t.fillStyle="rgba(30,15,5,0.6)",t.beginPath(),t.arc(a+8,s*o+o/2,1.6,0,Math.PI*2),t.fill()}})}function Oa(){return uo("logs",128,128,n=>{const t=Lr(31),e=3,i=128/e;for(let o=0;o<e;o++){const s=n.createLinearGradient(0,o*i,0,o*i+i),r=150+t()*25;s.addColorStop(0,`rgb(${r*.55|0},${r*.36|0},${r*.2|0})`),s.addColorStop(.3,`rgb(${r|0},${r*.66|0},${r*.4|0})`),s.addColorStop(.7,`rgb(${r*.85|0},${r*.56|0},${r*.33|0})`),s.addColorStop(1,`rgb(${r*.42|0},${r*.27|0},${r*.15|0})`),n.fillStyle=s,n.fillRect(0,o*i,128,i);for(let a=0;a<5;a++){n.strokeStyle="rgba(50,25,10,0.25)",n.beginPath();const l=o*i+6+t()*(i-12);n.moveTo(0,l),n.lineTo(128,l+t()*2-1),n.stroke()}}})}function hu(n="#a03030",t="#e0b040"){return uo("rug_"+n+t,128,256,e=>{e.fillStyle=t,e.fillRect(0,0,128,256),e.fillStyle=n,e.fillRect(10,10,108,236),e.strokeStyle=t,e.lineWidth=3,e.strokeRect(20,20,88,216),e.fillStyle=t;for(let i=40;i<230;i+=32)e.beginPath(),e.moveTo(64,i-10),e.lineTo(78,i),e.lineTo(64,i+10),e.lineTo(50,i),e.closePath(),e.fill()})}function zM(n="#b02030",t="#f0c040"){return uo("banner_"+n+t,128,256,e=>{e.fillStyle=n,e.fillRect(0,0,128,256),e.fillStyle=t,e.fillRect(0,0,128,10),e.fillRect(0,0,8,256),e.fillRect(120,0,8,256),e.clearRect(0,236,128,20),e.fillStyle=n,e.beginPath(),e.moveTo(0,236),e.lineTo(64,216),e.lineTo(128,236),e.lineTo(128,256),e.lineTo(96,236),e.lineTo(64,256),e.lineTo(32,236),e.lineTo(0,256),e.closePath(),e.fill(),e.fillStyle=t,e.beginPath(),e.moveTo(40,150),e.quadraticCurveTo(30,100,60,80),e.lineTo(52,60),e.lineTo(66,74),e.lineTo(70,56),e.lineTo(76,76),e.quadraticCurveTo(100,84,98,110),e.lineTo(86,112),e.quadraticCurveTo(78,140,88,160),e.lineTo(40,150),e.closePath(),e.fill(),e.fillStyle=n,e.beginPath(),e.arc(78,92,4,0,Math.PI*2),e.fill(),e.fillStyle=t,e.beginPath(),e.moveTo(44,46),e.lineTo(50,30),e.lineTo(58,42),e.lineTo(64,26),e.lineTo(70,42),e.lineTo(78,30),e.lineTo(84,46),e.closePath(),e.fill()})}function Ou(){return uo("hay",128,128,n=>{const t=Lr(55);n.fillStyle="#c8a850",n.fillRect(0,0,128,128);for(let e=0;e<500;e++){const i=150+t()*90;n.strokeStyle=`rgba(${i|0},${i*.82|0},${i*.35|0},0.8)`,n.beginPath();const o=t()*128,s=t()*128,r=t()*Math.PI;n.moveTo(o,s),n.lineTo(o+Math.cos(r)*10,s+Math.sin(r)*4),n.stroke()}})}function kM(n,t="#8a5a30",e="#fff0c0"){return uo("sign_"+n,256,96,i=>{i.fillStyle=t,i.fillRect(0,0,256,96);for(let s=0;s<4;s++)i.fillStyle="rgba(40,20,8,0.35)",i.fillRect(0,s*24,256,2);i.strokeStyle="#3a2210",i.lineWidth=6,i.strokeRect(3,3,250,90),i.fillStyle=e;let o=34;for(i.font=`bold ${o}px sans-serif`;o>16&&i.measureText(n).width>220;)o-=2,i.font=`bold ${o}px sans-serif`;i.textAlign="center",i.textBaseline="middle",i.fillStyle="rgba(30,14,4,0.55)",i.fillText(n,130,52,220),i.fillStyle=e,i.fillText(n,128,50,220)})}function st(n,t={}){const e=new Wt({color:n,map:t.map??null,roughness:t.rough??.85,metalness:t.metal??0,side:t.side??Qn,transparent:t.transparent??!1,opacity:t.opacity??1});return t.emissive?(e.emissive=new vt(t.emissive),e.emissiveIntensity=t.ei??1):t.glow&&(e.emissive=new vt(n),e.emissiveIntensity=t.glow,t.map&&(e.emissiveMap=t.map)),t.fog===!1&&(e.fog=!1),e}function Ji(n,t,e){let i=(n|0)*374761393+(t|0)*668265263+e*982451653;return i=(i^i>>>13)*1274126177,i=i^i>>>16,(i>>>0)/4294967295}function kf(n){return n*n*(3-2*n)}function Tp(n,t,e){const i=Math.floor(n),o=Math.floor(t),s=kf(n-i),r=kf(t-o),a=Ji(i,o,e),l=Ji(i+1,o,e),c=Ji(i,o+1,e),u=Ji(i+1,o+1,e),d=a+(l-a)*s,f=c+(u-c)*s;return d+(f-d)*r}function Aa(n,t,e,i=4){let o=.5,s=1,r=0,a=0;for(let l=0;l<i;l++)r+=Tp(n*s,t*s,e+l*101)*o,a+=o,o*=.5,s*=2;return r/a}function Ff(n,t,e,i,o){switch(n){case"meadow":return i*.35+o*.15;case"forest":return .4+i*1.2+o*.6;case"lake":{const s=Math.max(0,1-Math.abs(Aa(t*.007,e*.007,Ki+9,3)-.42)*3.2);return-1.6*s*s+i*.3}case"rocky":return 2.5+i*4.5+o*2+Math.max(0,i-.55)*8;case"snow":return 2.4+i*1.8+o*.9+Math.max(0,i-.7)*1.5;case"desert":return .4+i*.9+Math.sin(t*.045)*.55+Math.cos(e*.038)*.4;case"dragon_lands":return 2.2+i*3+o*1.8+Math.max(0,o-.65)*4;default:return i}}const Zt={x:0,z:-400,plateauR:40,rampR:80},Re={x:820,z:60,plateauR:36,rampR:68};let ha=null;function Ap(n,t){return Rp(n,t,!1)}function ml(){if(ha!==null)return ha;let n=-1/0;for(let t=0;t<=Zt.plateauR;t+=5){const e=Math.max(1,Math.round(t*Math.PI*2/5));for(let i=0;i<e;i++){const o=i/e*Math.PI*2;n=Math.max(n,Ap(Zt.x+Math.cos(o)*t,Zt.z+Math.sin(o)*t))}}return ha=Math.max(4,n+2.5),ha}function Cp(n){const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t)}function FM(n,t,e){const i=Math.hypot(n-Zt.x,t-Zt.z);if(i>=Zt.rampR)return e;const o=ml();if(i<=Zt.plateauR)return o;const s=Cp((i-Zt.plateauR)/(Zt.rampR-Zt.plateauR));return o+(e-o)*s}function OM(n,t,e=0){return Math.hypot(n-Zt.x,t-Zt.z)<Zt.rampR*.75+e}let pa=null;function gl(){if(pa!==null)return pa;let n=-1/0;for(let t=0;t<=Re.plateauR;t+=5){const e=Math.max(1,Math.round(t*Math.PI*2/5));for(let i=0;i<e;i++){const o=i/e*Math.PI*2;n=Math.max(n,Ap(Re.x+Math.cos(o)*t,Re.z+Math.sin(o)*t))}}return pa=Math.max(2.5,n+1.2),pa}function BM(n,t,e){const i=Math.hypot(n-Re.x,t-Re.z);if(i>=Re.rampR)return e;const o=gl();if(i<=Re.plateauR)return o;const s=Cp((i-Re.plateauR)/(Re.rampR-Re.plateauR));return o+(e-o)*s}function HM(n,t,e=0){return Math.hypot(n-Re.x,t-Re.z)<Re.rampR*.78+e}function rr(n,t,e=0){return OM(n,t,e)||HM(n,t,e)}function oe(n,t){return Rp(n,t,!0)}function Rp(n,t,e){const i=Math.hypot(n,t),o=Math.max(0,i-(mn-25))/25,s=o*o*8;if(i<42){const u=Math.sin(n*.4)*.02+Math.cos(t*.35)*.015,d=Math.max(0,(i-28)/14),f=Aa(n*.03,t*.03,Ki,3);return u*(1-d)+f*.35*d}const r=gn(n,t),a=Aa(n*.02,t*.02,Ki,5),l=Aa(n*.05,t*.05,Ki+7,3);let c=Ff(r.primary,n,t,a,l);if(r.secondary&&r.blend>.01){const u=Ff(r.secondary,n,t,a,l);c=c*(1-r.blend)+u*r.blend}return c+=Tp(n*.004,t*.004,Ki+3)*2.2,e&&(c=FM(n,t,c),c=BM(n,t,c)),c+s}function GM(n,t){return oe(n,t)}function Pp(n,t){if(rr(n,t,20))return null;const e=gn(n,t);return e.primary!=="lake"&&e.secondary!=="lake"?null:oe(n,t)<-.15?-.05:null}const Ip=.55,VM=.32,WM=1.75,ar=[];function Bo(n,t,e,i){const o=ar.findIndex(a=>a.id===n);o>=0&&ar.splice(o,1);let s=0;for(const a of i)s=Math.max(s,Math.hypot(Math.max(Math.abs(a.minX),Math.abs(a.maxX)),Math.max(Math.abs(a.minZ),Math.abs(a.maxZ))));const r={id:n,x:t.x,y:t.y,z:t.z,rotY:e,cos:Math.cos(e),sin:Math.sin(e),radius:s+1,boxes:i};return ar.push(r),r}function Lp(n,t,e){const i=t-n.x,o=e-n.z;return{lx:i*n.cos-o*n.sin,lz:i*n.sin+o*n.cos}}function li(n,t,e=1/0){let i=oe(n,t);for(const o of ar){const s=n-o.x,r=t-o.z;if(s*s+r*r>o.radius*o.radius)continue;const{lx:a,lz:l}=Lp(o,n,t);for(const c of o.boxes){if(a<c.minX||a>c.maxX||l<c.minZ||l>c.maxZ)continue;const u=o.y+c.maxY;u<=e+Ip&&u>i&&(i=u)}}return i}function Dp(n,t,e,i=VM,o=WM){for(const s of ar){const r=n-s.x,a=t-s.z;if(r*r+a*a>(s.radius+i)*(s.radius+i))continue;const{lx:l,lz:c}=Lp(s,n,t);for(const u of s.boxes){if(l<u.minX-i||l>u.maxX+i||c<u.minZ-i||c>u.maxZ+i)continue;const d=s.y+u.maxY,f=s.y+u.minY;if(d<=e+Ip||f>=e+o)continue;const h=Math.max(u.minX,Math.min(l,u.maxX)),g=Math.max(u.minZ,Math.min(c,u.maxZ));if((l-h)*(l-h)+(c-g)*(c-g)<i*i)return!0}}return!1}const Le={x:-4.2,z:-2,ry:.35},wn={x:9,z:-7,ry:-.4},Zn={x:-21,z:-13,ry:1.8},Np=[{id:"cabin",label:"Home cabin",x:Le.x,z:Le.z,interiorRadius:16},{id:"stable",label:"Dragon stable",x:wn.x,z:wn.z,interiorRadius:16},{id:"watchtower",label:"Watchtower",x:Zn.x,z:Zn.z,interiorRadius:12}],Up=[{id:"castle_gate",label:"Castle gate",x:Zt.x,z:Zt.z+27.7,interiorRadius:150},{id:"great_hall",label:"Great hall",x:Zt.x,z:Zt.z-11,interiorRadius:150}],zp=[{id:"market_town",label:"Market Town",x:Re.x,z:Re.z,interiorRadius:160}];function Ba(n,t,e){const i=Math.cos(n.ry),o=Math.sin(n.ry);return{x:n.x+t*i+e*o,z:n.z-t*o+e*i}}function XM(){const n=Ao(64);return{logs:de(st("#e0b890",{map:Oa(),rough:.85}),1),logsIn:de(st("#f0caa0",{map:Oa(),rough:.85,glow:.1}),1),planks:de(st("#d8b088",{map:kn("light"),rough:.8}),.6),planksIn:de(st("#e8c098",{map:kn("light"),rough:.8,glow:.1}),.6),darkWood:de(st("#8a5a36",{map:kn("dark"),rough:.75}),.8),stone:de(st("#d0ccc4",{map:Dr("grey"),rough:.9}),1),roof:de(st("#d04a3c",{map:n,rough:.75}),.9),iron:st("#3a3a40",{rough:.45,metal:.6}),glassOut:st("#a8d0e8",{rough:.1,metal:.3,emissive:"#5a90b8",ei:.35}),glassIn:st("#e0f0ff",{emissive:"#c8e4ff",ei:.85,rough:.2}),flame:new An({color:"#ff8a2a"}),hay:de(st("#e0c060",{map:Ou(),rough:.95}),1.2)}}let dc=null;function xl(){return dc||(dc=XM()),dc}function kp(n,t,e){const i=new ol;return i.moveTo(-n/2,0),i.lineTo(n/2,0),i.lineTo(0,t),i.closePath(),new Pr(i,{depth:e,bevelEnabled:!1})}function Bu(n,t,e){n.position.set(t.x,e,t.z),n.rotation.y=t.ry}const $M={hx:3.2,hz:2.6,t:.3,floor:.42,wallTop:2.95},Mn=$M;function YM(n){const t=xl(),e=new pi,{hx:i,hz:o,t:s,wallTop:r}=Mn;e.boxMin(t.stone,-i-.2,0-.4,-o-.2,2*i+.4,.75,2*o+.4,{solid:!0}),e.boxMin(t.planksIn,-i+s,.35,-o+s,2*(i-s),.07,2*(o-s),{solid:!0});const a=r-.35;e.boxMin(t.logs,-i,.35,-o,2*i,a,s,{solid:!0}),e.boxMin(t.logs,-i,.35,-o+s,s,a,2*(o-s),{solid:!0}),e.boxMin(t.logs,i-s,.35,-o+s,s,a,2*(o-s),{solid:!0}),e.boxMin(t.logs,-i,.35,o-s,i-.65,a,s,{solid:!0}),e.boxMin(t.logs,.65,.35,o-s,i-.65,a,s,{solid:!0}),e.boxMin(t.logs,-.65,2.5,o-s,1.3,r-2.5,s,{solid:!0}),e.boxMin(t.logsIn,-i+s,.42,-o+s,2*(i-s),a-.07,.02),e.boxMin(t.logsIn,-i+s,.42,-o+s,.02,a-.07,2*(o-s)),e.boxMin(t.logsIn,i-s-.02,.42,-o+s,.02,a-.07,2*(o-s));for(const v of[-1,1])e.box(t.darkWood,.14,2.15,.4,v*.68,.42+1.07,o-s/2);e.box(t.darkWood,1.5,.16,.4,0,2.55,o-s/2);for(const[v,b]of[[-i,-o],[i,-o],[-i,o],[i,o]])e.cyl(t.darkWood,.2,.22,r-.2,8,v,.2+(r-.2)/2,b);e.boxMin(t.planksIn,-i+s,2.78,-o+s,2*(i-s),.08,2*(o-s));for(const v of[-1.3,0,1.3])e.box(t.darkWood,2*(i-s),.16,.18,0,2.7,v);for(const v of[-1,1])e.add(kp(2*o,1.6,s),t.logs,v<0?-i:i-s,r,0,{ry:Math.PI/2});const l=Math.atan2(1.6,o),c=Math.hypot(o,1.6)+.55;for(const v of[-1,1])e.box(t.roof,2*i+.9,.16,c,0,r+.8+.1,v*(o/2+.18),{rx:v*l});e.box(t.darkWood,2*i+1,.18,.3,0,r+1.62,0),e.boxMin(t.stone,-.6,0,-o-.65,1.2,5.3,.65,{solid:!0}),e.box(t.stone,1.45,.2,.9,0,5.35,-o-.33);const u=(v,b,_,T)=>{const E=T==="x"?Math.PI/2:0,A=T==="x"?Math.sign(v):1;for(const S of[-1,1]){const w=S*(s/2+.02),M=T==="x"?v+w*A:v,R=T==="z"?_+w:_;e.box(t.darkWood,1,.1,.1,M,b+.45,R,{ry:E}),e.box(t.darkWood,1,.1,.1,M,b-.45,R,{ry:E}),e.box(t.darkWood,.08,.9,.1,M,b,R,{ry:E});for(const N of[-.46,.46]){const U=T==="z"?M+N:M,z=T==="x"?R+N:R;e.box(t.darkWood,.1,.9,.1,U,b,z,{ry:0})}e.box(t.darkWood,.9,.06,.08,M,b,R,{ry:E}),e.box(S*A>0||T==="z"&&S>0?t.glassOut:t.glassIn,.84,.82,.02,T==="x"?v+S*(s/2+.005)*A:v,b,T==="z"?_+S*(s/2+.005):_,{ry:E})}};u(-i+s/2,1.65,.9,"x"),u(i-s/2,1.65,-.3,"x"),u(1.9,1.65,o-s/2,"z");const d=st("#e04060",{rough:.8}),f=st("#f0d040",{rough:.8});e.box(t.darkWood,1,.25,.3,1.9,1.05,o+.15);for(let v=0;v<5;v++)e.sphere(v%2?d:f,.09,1.5+v*.2,1.25,o+.15,{ws:6,hs:5});e.boxMin(t.planks,-1.8,0,o,3.6,.3,1.4,{solid:!0}),e.boxMin(t.planks,-.8,0,o+1.4,1.6,.15,.4,{solid:!0});for(const v of[-1.7,1.7])e.cyl(t.darkWood,.08,.09,2.5,6,v,1.55,o+1.3);e.box(t.roof,3.9,.12,1.7,0,2.86,o+.75,{rx:.25});for(let v=0;v<9;v++){const b=Math.floor(v/3);e.cyl(t.darkWood,.16,.16,1.1,7,i+.45,.17+b*.3,-1.2+v%3*.34+b%2*.17,{rz:Math.PI/2,ry:Math.PI/2})}const h=e.build("homeCabin"),g=new Xt;g.name="cabinDoor",g.position.set(-.6,.42,o-.05);const y=new pi;y.box(t.darkWood,1.18,2.05,.08,.59,1.03,0);for(const v of[.4,1,1.6])y.box(t.iron,1.1,.07,.1,.59,v,0);y.sphere(st("#e0c050",{metal:.7,rough:.3}),.05,1,1,.07),g.add(y.build("cabinDoorLeaf")),h.add(g);const p=new Xt;p.name="chimneySmoke",p.position.set(1.7,.95,-o-.33);const m=new Wt({color:"#e8e8ec",transparent:!0,opacity:.55,roughness:1,depthWrite:!1});for(let v=0;v<4;v++){const b=new j(new Ot(.24,8,6),m.clone());b.position.set(-1.7,4.7+v*.35,0),p.add(b)}return h.add(p),h.userData.pose=Le,Bu(h,Le,n),Bo("cabin",{x:Le.x,y:n,z:Le.z},Le.ry,e.colliders),h}function qM(n){const t=n.getObjectByName("cabin-interior");if(t)return t;const e=xl(),i=new pi,o=Mn.floor,s=st("#c03838",{map:hu("#c03838","#f4e8d0"),rough:.9,glow:.1}),r=st("#f4ecdc",{rough:.9,glow:.12}),a=st("#2a2420",{rough:1}),l=st("#ff6a20",{emissive:"#ff4a10",ei:1.6}),c=st("#ffffff",{map:hu("#2c5aa0","#f0c040"),rough:.95,glow:.12}),u=st("#e8c050",{metal:.7,rough:.3,emissive:"#604810",ei:.3}),d=new An({color:"#ffa040",transparent:!0,opacity:.25,depthWrite:!1,blending:hr}),f=-2.6+Mn.t;i.boxMin(e.stone,-.95,o,f,.42,1.25,.55,{solid:!0}),i.boxMin(e.stone,.53,o,f,.42,1.25,.55,{solid:!0}),i.boxMin(e.stone,-.95,o+1.25,f,1.9,.4,.6),i.boxMin(e.darkWood,-1.05,o+1.65,f,2.1,.1,.7),i.boxMin(e.stone,-.7,o+1.75,f,1.4,2.78-o-1.75,.38),i.boxMin(a,-.53,o,f,1.06,1.25,.06),i.boxMin(e.stone,-1.1,o,f+.55,2.2,.06,.5),i.solidBox(-1,o,f,1,o+1.6,f+.6);for(const[A,S]of[[-.15,.25],[.15,-.25]])i.cyl(e.darkWood,.08,.08,.8,7,A,o+.12,f+.3,{rz:Math.PI/2+S*.2,ry:S});i.cone(e.flame,.2,.55,7,0,o+.45,f+.3),i.cone(e.flame,.13,.4,6,-.2,o+.38,f+.32),i.cone(e.flame,.13,.38,6,.2,o+.37,f+.28),i.box(l,.7,.05,.3,0,o+.06,f+.3),i.sphere(d,.6,0,o+.45,f+.4,{ws:8,hs:6}),i.cyl(r,.04,.04,.22,6,-.75,o+1.86,f+.3),i.cone(e.flame,.035,.09,5,-.75,o+2.02,f+.3),i.cyl(st("#5a7aa0",{rough:.6}),.09,.07,.2,8,.6,o+1.85,f+.3);const h=-3.2+Mn.t;i.boxMin(e.darkWood,h,o,f,1.15,.38,2.1,{solid:!0}),i.boxMin(r,h+.05,o+.38,f+.05,1.05,.16,2),i.boxMin(s,h+.02,o+.5,f+.65,1.11,.07,1.43),i.box(r,.75,.14,.4,h+.57,o+.63,f+.3),i.boxMin(e.darkWood,h,o,f,1.15,1.05,.08),i.boxMin(e.darkWood,h,o,f+2.05,1.15,.7,.08),i.add(new Ee(2,1.4),c,.1,o+.012,-.15,{rx:-Math.PI/2});const g=1.75,y=.75;i.box(e.darkWood,1.25,.07,.85,g,o+.75,y);for(const[A,S]of[[-.55,-.35],[.55,-.35],[-.55,.35],[.55,.35]])i.box(e.darkWood,.07,.72,.07,g+A,o+.36,y+S);i.solidBox(g-.62,o,y-.42,g+.62,o+.8,y+.42);for(const A of[-1,1]){const S=y+A*.75;i.box(e.darkWood,.48,.06,.45,g,o+.46,S);for(const[w,M]of[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]])i.box(e.darkWood,.05,.45,.05,g+w,o+.22,S+M);i.box(e.darkWood,.48,.55,.05,g,o+.78,S+A*.2),i.solidBox(g-.25,o,S-.24,g+.25,o+1.05,S+.24)}i.cyl(st("#e8e0d0",{rough:.5}),.17,.12,.08,10,g-.2,o+.83,y),i.sphere(st("#e05030",{rough:.6}),.07,g-.24,o+.9,y-.03),i.sphere(st("#70c040",{rough:.6}),.065,g-.12,o+.9,y+.05),i.cyl(st("#9a6a40",{rough:.6}),.06,.05,.14,8,g+.3,o+.86,y+.15),i.cyl(r,.035,.035,.18,6,g+.35,o+.88,y-.2),i.cone(e.flame,.03,.08,5,g+.35,o+1.01,y-.2);const p=Mn.hx-Mn.t-.55,m=f+.4;i.box(e.darkWood,1,.5,.6,p,o+.25,m,{solid:!0}),i.cyl(e.darkWood,.3,.3,1,10,p,o+.5,m,{rz:Math.PI/2});for(const A of[-.35,.35])i.box(e.iron,.07,.82,.64,p+A,o+.42,m);i.box(u,.14,.16,.05,p,o+.5,m+.32);const v=Mn.hx-Mn.t-.14;i.box(e.darkWood,.26,.05,1.3,v,o+1.55,-1.5);const b=["#a03030","#3060a0","#40904a","#c09030","#7a3a90"];for(let A=0;A<5;A++)i.box(st(b[A],{rough:.7}),.2,.26+A%2*.05,.08,v,o+1.71,-2+A*.1);i.cyl(st("#c8a070",{rough:.5}),.07,.07,.18,8,v,o+1.67,-1.2),i.cyl(st("#80a0c0",{rough:.3}),.06,.06,.2,8,v,o+1.68,-1);{i.cyl(e.iron,.01,.01,.3,4,-.6,2.3+.3,-.9),i.cyl(e.iron,.02,.1,.07,8,-.6,2.3+.14,-.9),i.cyl(e.iron,.09,.09,.03,8,-.6,2.3-.12,-.9);for(const[M,R]of[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]])i.box(e.iron,.015,.24,.015,-.6+M,2.3,-.9+R);i.cyl(st("#ffe0a0",{emissive:"#ffb050",ei:1.1,rough:.2}),.065,.065,.2,8,-.6,2.3,-.9)}const _=new ks((()=>{const A=document.createElement("canvas");A.width=64,A.height=48;const S=A.getContext("2d");return S.fillStyle="#a8d4f5",S.fillRect(0,0,64,48),S.fillStyle="#5aa040",S.fillRect(0,34,64,14),S.fillStyle="#d03020",S.beginPath(),S.ellipse(30,26,12,7,0,0,Math.PI*2),S.fill(),S.beginPath(),S.moveTo(36,22),S.lineTo(52,8),S.lineTo(44,24),S.fill(),S.beginPath(),S.moveTo(24,22),S.lineTo(14,6),S.lineTo(30,20),S.fill(),S.beginPath(),S.arc(44,20,4,0,Math.PI*2),S.fill(),A})());_.colorSpace=ke,i.box(e.darkWood,.06,.62,.8,h+.04,1.85,f+1),i.add(new Ee(.7,.52),st("#ffffff",{map:_,glow:.15}),h+.08,1.85,f+1,{ry:Math.PI/2});const T=i.build("cabin-interior",{castShadow:!1,receiveShadow:!0});T.traverse(A=>{const S=A;S.isMesh&&S.material===d&&(S.renderOrder=5)}),n.add(T);const E=n.userData.pose;return Bo("cabinInterior",{x:E.x,y:n.position.y,z:E.z},E.ry,i.colliders),T}function Hu(n){const t=-3.2+Mn.t+.57,e=-2.6+Mn.t+1.05,i=Ba(Le,t,e);return new I(i.x,n+Mn.floor+.55,i.z)}function jM(n){const t=Ba(Le,0,-2.6+Mn.t+.9);return new I(t.x,n+Mn.floor+1.1,t.z)}function ZM(n){const e={...xl(),darkWood:de(st("#b08058",{map:kn("dark"),rough:.75,glow:.14}),.8),planks:de(st("#e0bc90",{map:kn("light"),rough:.8,glow:.12}),.6),hay:de(st("#f0d070",{map:Ou(),rough:.95,glow:.18}),1.2)},i=new pi,o=5,s=3,r=2.9;i.boxMin(e.planks,-o,-.3,-s,2*o,.42,2*s,{solid:!0}),i.boxMin(e.darkWood,-o,.12,-s,2*o,r,.2,{solid:!0}),i.boxMin(e.darkWood,-o,.12,-s+.2,.2,r,2*s-.2,{solid:!0}),i.boxMin(e.darkWood,o-.2,.12,-s+.2,.2,r,2*s-.2,{solid:!0});for(const h of[-1,1])i.add(kp(2*s,1.4,.2),e.darkWood,h<0?-o:o-.2,r+.12,0,{ry:Math.PI/2});const a=Math.atan2(1.4,s),l=Math.hypot(s,1.4)+.7;for(const h of[-1,1])i.box(e.roof,2*o+.8,.16,l,0,r+.12+.7+.1,h*(s/2+.22),{rx:h*a});i.box(e.darkWood,2*o+.9,.18,.28,0,r+1.55,0);for(const h of[-o+.1,-1.67,1.67,o-.1])i.cyl(e.darkWood,.13,.15,r,8,h,.12+r/2,s-.15,{solid:!0});i.box(e.darkWood,2*o,.28,.28,0,r+.02,s-.15);for(const h of[-1.67,1.67])i.boxMin(e.darkWood,h-.08,.12,-s+.2,.16,1.45,4.2,{solid:!0}),i.box(e.darkWood,.2,.12,4.3,h,1.62,-s+.2+2.1);const c=st("#ffffff",{map:kM("DRAGON STABLE"),rough:.7,glow:.15});i.box(e.darkWood,3.5,1,.1,0,r+.75,s+.02),i.add(new Ee(3.3,.9),c,0,r+.75,s+.08);for(const h of[-1.5,1.5])i.cyl(e.iron,.02,.02,.5,4,h,r+.35,s+.02);const u=st("#ffe0a0",{emissive:"#ffb050",ei:1.2,rough:.2});for(const h of[-o+.1,o-.1]){const g=s+.22;i.box(e.iron,.04,.04,.26,h,2.5,s+.08),i.cyl(e.iron,.02,.1,.07,8,h,2.42,g),i.cyl(e.iron,.09,.09,.03,8,h,2.15,g);for(const[y,p]of[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]])i.box(e.iron,.015,.24,.015,h+y,2.28,g+p);i.cyl(u,.065,.065,.2,8,h,2.28,g)}const d=st("#5ab0e0",{rough:.15,metal:.2,emissive:"#2a6090",ei:.25});for(let h=0;h<3;h++){const g=-3.33+h*3.33;i.box(e.darkWood,1.7,.55,.6,g,.12+.275,-s+.55,{solid:!0}),i.box(d,1.5,.04,.45,g,.12+.5,-s+.55);for(let y=-3;y<=3;y++)i.box(e.darkWood,.05,.8,.05,g+y*.22,1.7,-s+.42,{rx:-.35});i.box(e.darkWood,1.6,.08,.5,g,1.32,-s+.42),i.sphere(e.hay,.62,g,1.62,-s+.42,{sy:.55}),i.sphere(e.hay,1.15,g+.2,.12,.3,{sy:.12,ws:12,hs:6})}for(const[h,g,y,p]of[[o+.75,.3,-1.6,0],[o+.75,.3,-.3,0],[o+.75,.9,-.95,.1],[-o-.75,.3,1.2,.2]])i.box(e.hay,1,.6,1.2,h,g,y,{ry:p}),i.box(st("#8a6a30",{rough:.9}),1.02,.04,1.22,h,g+.1,y,{ry:p});i.solidBox(o+.25,0,-2.25,o+1.25,1.2,.35),i.cyl(e.darkWood,.25,.2,.4,10,3.9,.32,2.3),i.cyl(d,.22,.22,.03,10,3.9,.5,2.3),i.cyl(e.darkWood,.03,.03,1.8,5,-1.95,1,s-.1,{rz:.25});for(const h of[-.08,0,.08])i.cyl(e.iron,.012,.012,.35,4,-2.18+h,1.95,s-.1,{rz:.25});const f=i.build("dragonStable");for(let h=0;h<3;h++){const g=new De;g.name=`stableRest${h}`,g.position.set(-3.33+h*3.33,.12,.6),g.userData.restSlot=!0,f.add(g)}return Bu(f,wn,n),Bo("stable",{x:wn.x,y:n,z:wn.z},wn.ry,i.colliders),f}const pu={core:2,outer:3.3,deck:9.4,steps:8};function KM(){const n=(pu.core+pu.outer)/2;return[{x:-n,z:n+.8},{x:-n,z:n},{x:n,z:n},{x:n,z:-n},{x:-n,z:-n},{x:-n,z:n},{x:0,z:n},{x:.6,z:.2}]}function JM(n){const t=xl(),e=new pi,{core:i,outer:o,deck:s,steps:r}=pu,a=s/(r*4),l=2*i/r,c=de(st("#c8c2b8",{map:Dr("warm"),rough:.9}),.9);e.boxMin(c,-i,-.5,-i,2*i,s+.5,2*i,{solid:!0}),e.boxMin(t.stone,-i-.15,-.5,-i-.15,2*i+.3,.9,2*i+.3);for(const[p,m,v]of[[0,i+.01,0],[i+.01,0,Math.PI/2],[0,-i-.01,0],[-i-.01,0,Math.PI/2]])for(const b of[3.2,6.4])e.box(t.iron,.3,1.1,.04,p,b,m,{ry:v});const u=o-i;for(let p=1;p<=r;p++){e.boxMin(t.stone,-i+(p-1)*l,-.3,i,l,p*a+.3,u,{solid:!0}),e.boxMin(t.stone,i,-.3,i-p*l,u,(r+p)*a+.3,l,{solid:!0}),e.boxMin(t.stone,i-p*l,-.3,-o,l,(2*r+p)*a+.3,u,{solid:!0});const m=(3*r+p)*a;e.boxMin(t.planks,-o,m-.14,-i+(p-1)*l,u,.14,l,{solid:!0})}e.boxMin(t.stone,i,-.3,i,u,r*a+.3,u,{solid:!0}),e.boxMin(t.stone,i,-.3,-o,u,2*r*a+.3,u,{solid:!0}),e.boxMin(t.stone,-o,-.3,-o,u,3*r*a+.3,u,{solid:!0});for(const p of[-1.5,0,1.5])e.cyl(t.darkWood,.1,.12,8.4,6,-o+.15,4,p);e.box(t.darkWood,.12,.3,4.6,-o+.08,8.25,0,{rx:-Math.atan2(2.35,4)});const d=o+.2;e.boxMin(t.planks,-i,s-.15,i,i+d,.15,d-i,{solid:!0}),e.boxMin(t.planks,i,s-.15,-i,d-i,.15,2*i,{solid:!0}),e.boxMin(t.planks,-d,s-.15,-d,2*d,.15,d-i,{solid:!0}),e.boxMin(t.planks,-d,s-.15,i,d-i,.15,d-i,{solid:!0}),e.boxMin(t.planks,-i,s-.02,-i,2*i,.04,2*i);const f=s+1.1,h=(p,m,v,b,_,T)=>{const E=Math.hypot(v-p,b-m),A=Math.max(1,Math.round(E/.9));for(let M=0;M<=A;M++){const R=M/A,N=_+(T-_)*R;e.box(t.darkWood,.09,1.1,.09,p+(v-p)*R,N+.55,m+(b-m)*R)}const S=Math.atan2(v-p,b-m),w=Math.atan2(T-_,E);for(const M of[.55,1.08])e.box(t.darkWood,.08,.08,Math.hypot(E,T-_),(p+v)/2,(_+T)/2+M,(m+b)/2,{ry:S,rx:-w})},g=o+.1;h(-i,g,i,g,0,r*a),h(g,i,g,-i,r*a,2*r*a),h(i,-g,-i,-g,2*r*a,3*r*a),h(-g,-i,-g,i,3*r*a,s),h(-d+.05,d-.05,d-.05,d-.05,s,s),h(d-.05,d-.05,d-.05,-d+.05,s,s),h(d-.05,-d+.05,-d+.05,-d+.05,s,s),h(-d+.05,-d+.05,-d+.05,d-.05,s,s),h(-i-.05,-i,-i-.05,i-.15,s,s),e.solidBox(-i,0,o,o+.3,f+1.2,o+.3),e.solidBox(o,0,-o-.3,o+.3,f+1.2,o+.3),e.solidBox(-o-.3,0,-o-.3,o+.3,f+1.2,-o),e.solidBox(-o-.3,5.5,-o-.3,-o,f+1.2,i),e.solidBox(-o-.3,7.6,o,-i,f+1.2,o+.3),e.solidBox(-o-.3,7.6,i,-o,f+1.2,o+.3),e.solidBox(-i-.12,s,-i,-i+.02,f,i-.2);for(const[p,m]of[[-d+.1,-d+.1],[d-.1,-d+.1],[-d+.1,d-.1],[d-.1,d-.1]])e.cyl(t.darkWood,.12,.12,2.8,6,p,s+1.4,m);e.cone(t.roof,5.1,2.1,4,0,s+2.8+1.05,0,{ry:Math.PI/4}),e.cyl(t.iron,.05,.05,1.6,5,0,s+2.8+2.1+.6,0),e.add(new Ee(1.2,.7),st("#3a7fd4",{side:Ye,rough:.6}),.62,s+2.8+2.1+1.05,0);{const p=d-.75,m=-d+.75;for(let _=0;_<3;_++){const T=_/3*Math.PI*2+.3;e.cyl(t.darkWood,.022,.03,1.05,5,p+Math.cos(T)*.18,s+.5,m+Math.sin(T)*.18,{rx:Math.sin(T)*.2,rz:-Math.cos(T)*.2})}const v=st("#d0a048",{metal:.75,rough:.28}),b=-(Math.PI/2-.25);e.cyl(v,.055,.035,.62,10,p,s+1.1,m-.05,{rx:b}),e.cyl(t.iron,.065,.065,.05,10,p,s+1.18,m-.36,{rx:b}),e.cyl(t.iron,.028,.028,.1,8,p,s+1.02,m+.27,{rx:b})}e.box(t.darkWood,1.6,.08,.4,-.8,s+.45,-2.6),e.cyl(t.darkWood,.05,.04,.5,5,-i-.1,2,i+.4),e.cone(t.flame,.1,.3,6,-i-.1,2.4,i+.4);const y=e.build("watchtower");return Bu(y,Zn,n),Bo("watchtower",{x:Zn.x,y:n,z:Zn.z},Zn.ry,e.colliders),y}function QM(n,t,e){const i=t>.5?-1.6:0,o=n.rotation.y;n.rotation.y=o+(i-o)*Math.min(1,e*6)}const tb=230,eb=6.8;function nb(n,t,e){let i=null,o=1/0;for(const l of e){const c=Math.hypot(t.x-l.x,t.z-l.z);c<o&&(o=c,i=l)}const r=Math.hypot(t.x,t.z)<tb;if(n.userData.campOn!==r){n.userData.campOn=r;for(const l of n.children)l.name!=="castleLandmark"&&l.name!=="townLandmark"&&l.name!=="farTerrain"&&(l.visible=r)}const a=n.getObjectByName("homeCabin");if(a)if(Math.hypot(t.x-Le.x,t.z-Le.z)<eb)qM(a).visible=!0;else{const c=a.getObjectByName("cabin-interior");c&&(c.visible=!1)}return o<35?i:null}function ib(n){const t=n;return[n.type,t.color?.getHexString?.()??"",t.emissive?.getHexString?.()??"",t.emissiveIntensity??"",t.map?.uuid??"",t.normalMap?.uuid??"",t.roughness??"",t.metalness??"",n.transparent?`t${n.opacity}`:"o",n.side,n.depthWrite,t.vertexColors?"vc":"",t.flatShading?"flat":"",n.userData?.softFog??""].join("|")}function Of(n,t,e="mergedStatic",i={}){n.updateMatrixWorld(!0);const o=new Rt().copy(n.matrixWorld).invert(),s=new Map,r=[];for(const l of[...n.children]){if(!t(l))continue;const c=u=>{if(i.skip?.(u))return;for(const m of u.children)c(m);const d=u;if(!d.isMesh||d.isInstancedMesh||Array.isArray(d.material)||!d.visible)return;const f=d.geometry;let h=f.index?f.toNonIndexed():f.clone();for(const m of Object.keys(h.attributes))m!=="position"&&m!=="normal"&&m!=="uv"&&m!=="color"&&h.deleteAttribute(m);h.attributes.normal||h.computeVertexNormals(),h.attributes.uv||h.setAttribute("uv",new Te(new Float32Array(h.attributes.position.count*2),2));const g=!!h.attributes.color;h.applyMatrix4(new Rt().multiplyMatrices(o,d.matrixWorld));const y=ib(d.material)+(g?"|C":"|N")+(d.castShadow?"|cs":"")+(d.receiveShadow?"|rs":"");let p=s.get(y);p||s.set(y,p={mat:d.material,cast:d.castShadow,recv:d.receiveShadow,geos:[]}),p.geos.push(h),r.push(d)};c(l)}for(const l of r)l.parent?.remove(l);if(i.removeEmpty!==!1)for(const l of[...n.children]){if(!t(l))continue;let c=0;l.traverse(u=>{(u.isMesh||u.isLight||u.isPoints)&&c++}),c===0&&n.remove(l)}let a=0;for(const l of s.values()){const c=je(l.geos,!1);if(!c)continue;c.computeBoundingSphere();const u=new j(c,l.mat);u.name=`${e}_${a++}`,u.castShadow=l.cast,u.receiveShadow=l.recv,u.userData.mergedStatic=!0,n.add(u)}return r.length-a}function ob(n){const t=n;return!(!t.isMeshStandardMaterial||t.map||t.normalMap||t.alphaMap||t.emissiveMap||n.transparent||n.alphaTest>0||t.vertexColors||t.emissive&&(t.emissive.r+t.emissive.g+t.emissive.b)*t.emissiveIntensity>.001)}const Bf=new Map;function sb(n,t,e,i){const o=`${n}|${t}|${e}|${i}`;let s=Bf.get(o);return s||Bf.set(o,s=new Wt({color:"#ffffff",vertexColors:!0,roughness:n,metalness:t,flatShading:e,side:i})),s}function Fp(n,t,e="vcBaked"){n.updateMatrixWorld(!0);const i=new Rt().copy(n.matrixWorld).invert(),o=new Map,s=[],r=l=>{if(l!==n&&t(l))return;const c=l;if(c.isMesh&&!c.isInstancedMesh&&!Array.isArray(c.material)&&c.visible&&ob(c.material)){const u=c.material,d=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(const b of Object.keys(d.attributes))b!=="position"&&b!=="normal"&&d.deleteAttribute(b);d.attributes.normal||d.computeVertexNormals(),d.applyMatrix4(new Rt().multiplyMatrices(i,c.matrixWorld));const f=d.attributes.position.count,h=new Float32Array(f*3);for(let b=0;b<f;b++)h[b*3]=u.color.r,h[b*3+1]=u.color.g,h[b*3+2]=u.color.b;d.setAttribute("color",new Te(h,3));const g=u.roughness>=.6?.85:.45,y=u.metalness>=.5?.7:0,p=u.side===Qn?Qn:Ye,m=`${g}|${y}|${u.flatShading}|${p}`;let v=o.get(m);v||o.set(m,v={mat:sb(g,y,u.flatShading,p),cast:!1,recv:!1,geos:[]}),v.cast||=c.castShadow,v.recv||=c.receiveShadow,v.geos.push(d),s.push(c)}for(const u of[...l.children])r(u)};if(r(n),s.length<2)return 0;for(const l of s)l.parent?.remove(l);let a=0;for(const l of o.values()){const c=je(l.geos,!1);if(!c)continue;c.computeBoundingSphere();const u=new j(c,l.mat);u.name=`${e}_${a++}`,u.castShadow=l.cast,u.receiveShadow=l.recv,n.add(u)}return s.length-a}function Gu(n,t,e,i=.8){n.updateMatrixWorld(!0);const o=new Rt().copy(n.matrixWorld).invert(),s=new Map,r=new Map;n.traverse(c=>{const u=c;if(!u.isMesh||Array.isArray(u.material)||!u.visible)return;const d=u.material;if(!d.color)return;const f=u,h=[],g=new Rt().multiplyMatrices(o,u.matrixWorld);if(f.isInstancedMesh){const m=new Rt;for(let v=0;v<f.count;v++)f.getMatrixAt(v,m),h.push(g.clone().multiply(m))}else h.push(g);const y=d.color.clone().multiplyScalar(d.map?i:1);d.emissive&&d.emissiveIntensity&&y.add(d.emissive.clone().multiplyScalar(Math.min(1,d.emissiveIntensity)*.6));const p=`${u.material.transparent?"t"+u.material.opacity:"o"}|${u.material.side}`;r.has(p)||r.set(p,{side:u.material.side,transparent:u.material.transparent,opacity:u.material.opacity});for(const m of h){const v=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const S of Object.keys(v.attributes))S!=="position"&&S!=="normal"&&v.deleteAttribute(S);v.attributes.normal||v.computeVertexNormals();const b=!!u.geometry.attributes.color&&d.vertexColors;v.applyMatrix4(m);const _=v.attributes.position.count,T=new Float32Array(_*3),E=b?(u.geometry.index?u.geometry.toNonIndexed():u.geometry).attributes.color:null;for(let S=0;S<_;S++){const w=E?E.getX(S)*y.r:y.r,M=E?E.getY(S)*y.g:y.g,R=E?E.getZ(S)*y.b:y.b;T[S*3]=w,T[S*3+1]=M,T[S*3+2]=R}v.setAttribute("color",new Te(T,3));const A=s.get(p)??[];A.push(v),s.set(p,A)}});const a=new Xt;a.name=t;let l=0;for(const[c,u]of s){const d=je(u,!1);if(!d)continue;d.computeBoundingSphere();const f=r.get(c),h=new Wt({color:"#ffffff",vertexColors:!0,roughness:.85,metalness:0,side:Ye,transparent:f.transparent,opacity:f.opacity});e?.(h);const g=new j(d,h);g.name=`${t}_${l++}`,a.add(g)}return a}function Hf(n){return n==="high"?{maxDrawCalls:150,maxVisibleTris:14e4,maxLoadedChunks:72,loadRadiusChunks:5,farRadiusChunks:8}:n==="medium"?{maxDrawCalls:110,maxVisibleTris:9e4,maxLoadedChunks:56,loadRadiusChunks:4,farRadiusChunks:7}:{maxDrawCalls:70,maxVisibleTris:5e4,maxLoadedChunks:28,loadRadiusChunks:2,farRadiusChunks:4}}function ma(n,t){return`${n},${t}`}function rb(n){return n===0?16:n===1?8:4}const ab=new vt("#5f9a3c");function Op(n,t,e){const i=Math.hypot(n-Zt.x,t-Zt.z);if(i>100)return;const o=1-gr.smoothstep(i,45,100),s=Math.sin(n*.21)*Math.cos(t*.17)*.08;e.lerp(ab,Math.min(1,o*.85+s))}function Ha(n){switch(n){case"meadow":return new vt("#78c050");case"forest":return new vt("#2a6a38");case"lake":return new vt("#4a7a5a");case"rocky":return new vt("#8a8680");case"snow":return new vt("#f4f8ff");case"desert":return new vt("#e8d4a8");case"dragon_lands":return new vt("#7a3c24");default:return new vt("#6db84a")}}const Mr=38;function Gf(n,t,e){const i=new Xt;i.name=`chunk_${n}_${t}`;const o=rb(e),s=n*se,r=t*se,a=Math.hypot(s+se/2,r+se/2);if(a<Mr-4)return{group:i,tris:0,draws:0};const l=new Ee(se,se,o,o),c=l.attributes.position,u=new Float32Array(c.count*3),d=l.attributes.uv;let f=1/0;for(let E=0;E<c.count;E++){const A=c.getX(E),S=c.getY(E),w=s+se/2+A,M=r+se/2+S,R=oe(w,M);c.setZ(E,R),R<f&&(f=R);const N=gn(w,M),U=Ha(N.primary);N.secondary&&N.blend>.05&&U.lerp(Ha(N.secondary),N.blend),Op(w,M,U);const z=.85+Math.min(.15,Math.max(0,R)*.03);if(u[E*3]=U.r*z,u[E*3+1]=U.g*z,u[E*3+2]=U.b*z,d){const Y=Ji(n,t,Ki);d.setXY(E,w*.12+Y,M*.12+Y*1.3)}}l.setAttribute("color",new Te(u,3)),l.computeVertexNormals();const h=Cn(),g=gn(s+16,r+16),y=g.primary;let p=null;const m=Math.hypot(s+16-Zt.x,r+16-Zt.z)<110;y==="meadow"||y==="forest"||y==="lake"||m?(p=wp(128),p.wrapS=p.wrapT=ui,p.repeat.set(2,2)):y==="rocky"?(p=Ir(128),p.wrapS=p.wrapT=ui,p.repeat.set(2,2)):y==="desert"&&(p=Sp(128),p.wrapS=p.wrapT=ui,p.repeat.set(1.5,1.5));const v=new Wt({map:p??void 0,vertexColors:!0,roughness:y==="snow"?.45:y==="desert"?.95:y==="dragon_lands"?.7:io.grass,metalness:y==="dragon_lands"?.2:0,color:"#ffffff"});e===0&&h?.grassNormal&&(y==="meadow"||y==="forest"||m)&&(v.normalMap=h.grassNormal,v.normalScale=new lt(fs.grass*.6,fs.grass*.6)),y==="snow"&&(v.emissive=new vt("#a0c0e0"),v.emissiveIntensity=.12),y==="dragon_lands"&&(v.emissive=new vt("#401810"),v.emissiveIntensity=.08,v.color=new vt("#9a5530"),v.metalness=.05),y==="desert"&&(v.color=new vt("#fff2d0"),v.map=null,v.emissive=new vt("#c8a060"),v.emissiveIntensity=.06);const b=new j(l,v);b.rotation.x=-Math.PI/2,b.position.set(s+se/2,0,r+se/2),b.receiveShadow=e===0,b.castShadow=!1,i.add(b);let _=o*o*2,T=1;if(e===0&&(y==="lake"||g.secondary==="lake")&&f<-.05&&!rr(s+16,r+16,30)){const E=new j(new Ee(se,se,1,1),new Wt({color:"#3a8ac0",roughness:.12,metalness:.3,transparent:!0,opacity:.85,emissive:new vt("#1a4a70"),emissiveIntensity:.12}));E.rotation.x=-Math.PI/2,E.position.set(s+se/2,-.05,r+se/2),E.name="lakeWater",i.add(E),T++,_+=2}if(e===0&&a>Mr){const{pTris:E,pDraws:A}=lb(i,n,t,y);_+=E,T+=A}return{group:i,tris:_,draws:T}}function $n(n,t,e){let i=oe(n,t),o=i;for(let s=0;s<6;s++){const r=s/6*Math.PI*2+.3,a=oe(n+Math.cos(r)*e,t+Math.sin(r)*e);a<i&&(i=a),a>o&&(o=a)}return{min:i,max:o}}function fc(n,t,e,i){if(i<.12){const o=gn(n,t);if(o.primary==="lake"||o.secondary==="lake")return!0}for(let o=0;o<4;o++){const s=o/4*Math.PI*2;if(Pp(n+Math.cos(s)*e,t+Math.sin(s)*e)!==null)return!0}return i<-.04}const Vf=new Map;function Bp(n){const t=Vf.get(n);if(t)return t;const e=n==="forest"?"#24572c":n==="snow"?"#2f5a3e":n==="rocky"?"#46703f":"#3b7a3a",i=n==="forest"?"#3f7d3a":n==="snow"?"#f4f8ff":n==="rocky"?"#6a8f55":"#5fa04c",o=[],s=(h,g)=>{const y=h.index?h.toNonIndexed():h,p=y.attributes.position,m=new Float32Array(p.count*3);for(let v=0;v<p.count;v++){const b=g(p.getY(v),v);m[v*3]=b.r,m[v*3+1]=b.g,m[v*3+2]=b.b}return y.setAttribute("color",new Te(m,3)),y.deleteAttribute("uv"),y},r=new ue(.11,.19,1.1,7);r.translate(0,.55,0);const a=new vt("#6a4428"),l=new vt("#4a2e1a");o.push(s(r,(h,g)=>(g%3===0?l:a).clone().lerp(l,1-h)));const c=[[1,1.35,.7],[.78,1.15,1.35],[.52,1,1.95]],u=new vt(e),d=new vt(i);c.forEach(([h,g,y],p)=>{const m=new We(h,g,8,1,!1);m.rotateY(p*.4),m.translate(0,y+g/2,0),o.push(s(m,b=>{const _=Math.max(0,Math.min(1,(b-y)/g));return n==="snow"?u.clone().lerp(d,_>.35?.85:.15):u.clone().multiplyScalar(.75+.25*_).lerp(d,_*.6)}));const v=new Kn(h*.98,8);v.rotateX(Math.PI/2),v.rotateY(p*.4),v.translate(0,y+.01,0),o.push(s(v,()=>u.clone().multiplyScalar(.45)))});const f=je(o,!1);return f.computeVertexNormals(),Vf.set(n,f),f}function lb(n,t,e,i){const o=t*se,s=e*se,r=[],a=[],l=[],c=i==="forest"?48:i==="meadow"?10:i==="rocky"?16:i==="dragon_lands"?36:i==="desert"?10:i==="snow"?14:8;for(let h=0;h<c;h++){const g=Ji(t*50+h,e*50+h,Ki+20),y=Ji(t*50+h,e*50+h,Ki+21),p=o+g*se,m=s+y*se;if(Math.hypot(p,m)<Mr||rr(p,m))continue;const v=$n(p,m,.9);if(fc(p,m,1,v.min))continue;const b=v.min-.04;if(i==="rocky"||i==="snow"||i!=="desert"&&i!=="dragon_lands"&&i!=="lake"&&h%2===0){const _=.55+g*.9,T=p+2.6,E=m-1.9,A=$n(T,E,.45*_);!rr(T,E)&&!fc(T,E,.6*_,A.min)&&A.max-A.min<.9*_&&a.push({x:T,y:A.min-.18*_,z:E,sy:_,ry:g*6})}if(i==="dragon_lands"&&gn(p,m).primary==="dragon_lands"){const _=.5+g*.7;a.push({x:p,y:b-.16*_,z:m,sy:_,ry:g*6});const T=$n(p+.8,m+.6,.4);l.push({x:p+.8,y:T.min-.05,z:m+.6,sy:.4+y*.45,ry:y*6})}if(!(v.max-v.min>1.4))if(i==="forest")b>-.2&&r.push({x:p,y:b,z:m,sy:1+y*.9,ry:y*6});else if(i==="meadow")b>-.2&&r.push({x:p,y:b,z:m,sy:.85+y*.7,ry:y*6});else if(i==="snow")b>1&&r.push({x:p,y:b,z:m,sy:.9+y*.5,ry:y*6});else if(i==="desert"){const _=Math.hypot(p,m);gn(p,m).primary==="desert"&&_<490&&l.push({x:p,y:b,z:m,sy:.85+y*.7,ry:y*6})}else i==="rocky"?h%3===0&&r.push({x:p,y:b,z:m,sy:.5+y*.4,ry:y*6}):i==="lake"&&b>-.1&&r.push({x:p,y:b,z:m,sy:.7+y*.4,ry:y*6})}if(i==="forest")for(let h=3;h<se;h+=5)for(let g=3;g<se;g+=5){const y=o+h,p=s+g;if(Math.hypot(y,p)<Mr||rr(y,p))continue;const m=$n(y,p,.9);fc(y,p,1,m.min)||m.max-m.min>1.4||r.push({x:y,y:m.min-.04,z:p,sy:1.15,ry:h*.1+g})}if(i==="dragon_lands")for(let h=4;h<se;h+=7)for(let g=4;g<se;g+=7){const y=o+h,p=s+g;if(gn(y,p).primary!=="dragon_lands"||Math.hypot(y,p)>mn-8)continue;const m=$n(y,p,.3);a.push({x:y,y:m.min-.1,z:p,sy:.45,ry:h+g});const v=$n(y+1.1,p+.8,.45);l.push({x:y+1.1,y:v.min-.05,z:p+.8,sy:.45+Ji(h,g,t*7+e)*.45,ry:g})}let u=0,d=0;const f=new De;if(r.length){const g=Bp(i==="forest"?"forest":i==="snow"?"snow":i==="rocky"?"rocky":i==="lake"?"lake":"meadow"),y=new Wt({vertexColors:!0,roughness:.9,color:"#ffffff"}),p=new jn(g,y,r.length);p.name=`trees_${i}`;for(let m=0;m<r.length;m++){const v=r[m];f.position.set(v.x,v.y,v.z),f.rotation.set(0,v.ry,0),f.scale.set(v.sy*.95,v.sy,v.sy*.95),f.updateMatrix(),p.setMatrixAt(m,f.matrix)}if(p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!0,p.castShadow=!0,n.add(p),u++,d+=r.length*70,i==="forest"&&r.length){const m=[],v=new vt("#2d5a28"),b=new vt("#c04040"),_=(M,R,N)=>{const U=M.index?M.toNonIndexed():M.clone();for(const B of Object.keys(U.attributes))B!=="position"&&B!=="normal"&&U.deleteAttribute(B);U.applyMatrix4(R);const z=U.attributes.position.count,Y=new Float32Array(z*3);for(let B=0;B<z;B++)Y[B*3]=N.r,Y[B*3+1]=N.g,Y[B*3+2]=N.b;U.setAttribute("color",new Te(Y,3)),m.push(U)},T=new We(.35,.7,5),E=Math.min(r.length,28);for(let M=0;M<E;M++){const R=r[M];f.position.set(R.x+.9,$n(R.x+.9,R.z-.5,.3).min+.3,R.z-.5),f.scale.setScalar(.7+M%5*.1),f.rotation.set(0,M,0),f.updateMatrix(),_(T,f.matrix,v)}const A=new Ot(.18,5,4),S=Math.min(14,r.length);for(let M=0;M<S;M++){const R=r[M];f.position.set(R.x-.7,$n(R.x-.7,R.z+.6,.15).min+.14,R.z+.6),f.scale.setScalar(1),f.rotation.set(0,0,0),f.updateMatrix(),_(A,f.matrix,b)}const w=je(m,!1);if(w){w.computeBoundingSphere();const M=new j(w,new Wt({color:"#ffffff",vertexColors:!0,roughness:.9}));M.name="undergrowth",n.add(M),u++,d+=E*10+S*20}}}if(a.length){const h=new il(.45,0),g=new Wt({color:i==="desert"?"#d8c090":i==="snow"?"#d8e0e8":i==="dragon_lands"?"#4a444c":"#8a8884",map:Ir(64),roughness:io.rock}),y=Cn();y?.rockNormal&&(g.normalMap=y.rockNormal,g.normalScale=new lt(.5,.5));const p=new jn(h,g,a.length);p.name="rocks";for(let m=0;m<a.length;m++){const v=a[m];f.position.set(v.x,v.y+.35*v.sy,v.z),f.rotation.set(v.ry*.2,v.ry,v.ry*.1),f.scale.setScalar(v.sy),f.updateMatrix(),p.setMatrixAt(m,f.matrix)}p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!0,n.add(p),u++,d+=a.length*36}if(l.length){if(i==="desert"){const h=new Wt({color:"#3a8a45",roughness:.85,flatShading:!0}),g=new ue(.22,.28,2.4,6).translate(0,1.2,0),y=new ue(.12,.14,.9,5).rotateZ(.55).translate(-.35,1.6,0),p=new ue(.12,.14,.9,5).rotateZ(-.5).translate(.35,1.85,0),m=je([g,y,p].map(b=>b.toNonIndexed()),!1),v=new jn(m,h,l.length);v.name="cactus";for(let b=0;b<l.length;b++){const _=l[b];f.position.set(_.x,_.y,_.z),f.scale.set(_.sy,_.sy,_.sy),f.rotation.set(0,_.ry,0),f.updateMatrix(),v.setMatrixAt(b,f.matrix)}v.instanceMatrix.needsUpdate=!0,n.add(v),u+=1,d+=l.length*40}else if(i==="dragon_lands"){const h=new al(.5,0),g=new Wt({color:"#d040ff",emissive:"#a010e0",emissiveIntensity:.7,roughness:.3,metalness:.25}),y=new jn(h,g,l.length);y.name="crystals";for(let _=0;_<l.length;_++){const T=l[_];f.position.set(T.x,T.y+.65*T.sy,T.z),f.scale.set(T.sy*1.1,T.sy*1.8,T.sy*1.1),f.rotation.set(.3,T.ry,.5),f.updateMatrix(),y.setMatrixAt(_,f.matrix)}y.instanceMatrix.needsUpdate=!0,n.add(y),u++,d+=l.length*8;const p=[],m=(_,T,E,A,S)=>{const w=new Rt().compose(new I(T,oe(T,E)+S,E),new dn().setFromEuler(new on(0,A,0)),new I(1,1,1));_.applyMatrix4(w),p.push(_)};m(new Kn(2.2,10).rotateX(-Math.PI/2),o+10,s+12,0,.04);for(let _=0;_<5;_++)m(new ne(2.8+_*.4,.06,.22),o+4+_*5.5,s+6+_%3*7,_*.7,.05);for(let _=0;_<4;_++)m(new Kn(.7,8).rotateX(-Math.PI/2),o+8+_*6,s+18+_%2*5,0,.05);const v=Math.min(6,l.length);for(let _=0;_<v;_++){const T=l[_],E=T.x-1.2,A=T.z+.8;m(new Kn(.55*(.8+_%3*.2),8).rotateX(-Math.PI/2),E,A,T.ry,.04)}const b=je(p.map(_=>_.toNonIndexed()),!1);if(b){const _=new j(b,new Wt({color:"#ff5a18",emissive:"#ff3000",emissiveIntensity:.85,roughness:.4}));_.name="lavaCracks",n.add(_),u++,d+=100}}}return{pTris:d,pDraws:u}}class Hp{root=new Xt;chunks=new Map;queue=[];budgets;lastCx=NaN;lastCz=NaN;stats={loaded:0,draws:0,tris:0,queued:0};constructor(t){this.root.name="streamedWorld",this.budgets=Hf(t)}setTier(t){this.budgets=Hf(t),this.lastCx=NaN}hasChunkAt(t,e){return this.chunks.has(ma(Math.floor(t/se),Math.floor(e/se)))}softClamp(t,e){const i=Math.hypot(t,e),o=mn-2;if(i<=o)return{x:t,z:e};const s=o/i;return{x:t*s,z:e*s}}update(t,e,i,o=5){const s=Math.floor(t/se),r=Math.floor(e/se);(s!==this.lastCx||r!==this.lastCz||this.queue.length===0)&&(this.lastCx=s,this.lastCz=r,this.rebuildQueue(s,r));const a=performance.now();for(;this.queue.length&&performance.now()-a<o&&!(this.chunks.size>=this.budgets.maxLoadedChunks);){const d=this.queue.shift(),f=ma(d.cx,d.cz),h=this.chunks.get(f);if(h&&h.lod<=d.lod)continue;h&&(this.root.remove(h.group),h.group.traverse(y=>{const p=y;p.isMesh&&p.geometry?.dispose()}),this.chunks.delete(f));const g=Gf(d.cx,d.cz,d.lod);g.group.traverse(y=>{y.frustumCulled=!0}),this.root.add(g.group),this.chunks.set(f,{key:f,cx:d.cx,cz:d.cz,lod:d.lod,group:g.group,tris:g.tris,draws:g.draws})}const l=this.budgets.farRadiusChunks+1;for(const[d,f]of[...this.chunks])Math.max(Math.abs(f.cx-s),Math.abs(f.cz-r))>l&&(this.root.remove(f.group),this.chunks.delete(d));if(i)for(const d of this.chunks.values()){const f=new I(d.cx*se+16,0,d.cz*se+16);f.y=oe(f.x,f.z),d.group.visible=i.containsPoint(f)||Math.hypot(f.x-t,f.z-e)<se*2.5}{const d=this.budgets.maxLoadedChunks>=72?80:this.budgets.maxLoadedChunks>=56?70:20,f=this.budgets.maxLoadedChunks>=72?120:this.budgets.maxLoadedChunks>=56?95:28;for(const h of this.chunks.values()){if(!h.group.visible)continue;const g=Math.max(0,Math.hypot(h.cx*se+16-t,h.cz*se+16-e)-16);for(const y of h.group.children){const p=y.name;p==="undergrowth"?y.visible=g<d:p==="rocks"||p==="crystals"||p==="cactus"||p==="lavaCracks"?y.visible=g<f:p.startsWith("trees_")&&(y.visible=g<(this.budgets.maxLoadedChunks>=56?200:24),y.castShadow=g<40)}}}let c=0,u=0;for(const d of this.chunks.values())d.group.visible&&(c+=d.draws,u+=d.tris);this.stats={loaded:this.chunks.size,draws:c,tris:u,queued:this.queue.length}}rebuildQueue(t,e){const i=new Map,o=this.budgets.farRadiusChunks;for(let s=-o;s<=o;s++)for(let r=-o;r<=o;r++){const a=Math.max(Math.abs(r),Math.abs(s));let l=2;a<=this.budgets.loadRadiusChunks-2?l=0:a<=this.budgets.loadRadiusChunks&&(l=1);const c=t+r,u=e+s,d=c*se+16,f=u*se+16;Math.hypot(d,f)>mn+se||Math.hypot(d,f)<Mr-8||i.set(ma(c,u),l)}this.queue=[];for(const[s,r]of i){const[a,l]=s.split(",").map(Number),c=this.chunks.get(s);(!c||c.lod>r)&&this.queue.push({cx:a,cz:l,lod:r})}this.queue.sort((s,r)=>{const a=Math.max(Math.abs(s.cx-t),Math.abs(s.cz-e)),l=Math.max(Math.abs(r.cx-t),Math.abs(r.cz-e));return s.lod!==r.lod?s.lod-r.lod:a-l})}flushAround(t,e,i=2){const o=Math.floor(t/se),s=Math.floor(e/se);this.rebuildQueue(o,s);const r=[...this.chunks.values()].sort((a,l)=>{const c=Math.max(Math.abs(a.cx-o),Math.abs(a.cz-s));return Math.max(Math.abs(l.cx-o),Math.abs(l.cz-s))-c});for(let a=-i;a<=i;a++)for(let l=-i;l<=i;l++){const c=o+a,u=s+l,d=ma(c,u),f=this.chunks.get(d);if(f&&f.lod===0)continue;for(;this.chunks.size>=this.budgets.maxLoadedChunks&&r.length;){const g=r.shift();Math.max(Math.abs(g.cx-o),Math.abs(g.cz-s))<=i||(this.root.remove(g.group),this.chunks.delete(g.key))}f&&(this.root.remove(f.group),this.chunks.delete(d));const h=Gf(c,u,0);this.root.add(h.group),this.chunks.set(d,{key:d,cx:c,cz:u,lod:0,group:h.group,tris:h.tris,draws:h.draws})}this.stats.loaded=this.chunks.size}dispose(){for(const t of this.chunks.values())this.root.remove(t.group);this.chunks.clear(),this.queue=[]}}function an(n,t=.6){return n.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
        float fogD = vFogDepth * ${t.toFixed(3)};
        #ifdef FOG_EXP2
          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogD * fogD );
        #else
          float fogFactor = smoothstep( fogNear, fogFar, fogD );
        #endif
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
      #endif`)},n.customProgramCacheKey=()=>"softfog"+t,n}function Vu(){return{x:Zt.x+Xf.x,y:ml()+.9,z:Zt.z+Xf.z}}const Gp=24,ls=2.4,ni=10,Se=Gp-ls,Wf={z:-11},Xf={x:0,z:5};let Ca=null;function cb(n){Ca&&(Ca.opacity=.46+Math.sin(n*3.4)*.07,Ca.emissiveIntensity=.26+Math.sin(n*4.6)*.1)}function ub(){const n=Dr("grey"),t=Ao(64);return{stone:an(de(st("#e2ddd4",{map:n,rough:.92}),.5)),tower:an(de(st("#d4cec4",{map:n,rough:.92}),.5)),roof:an(de(st("#d8473c",{map:t,rough:.75}),.55)),wood:an(de(st("#9a6a40",{map:kn("dark"),rough:.8}),.5)),iron:an(st("#3c3c44",{rough:.45,metal:.6})),floor:an(de(st("#d8d0c4",{map:pl(),rough:.9}),.33)),windowWarm:an(st("#ffd890",{emissive:"#ffb050",ei:.9,rough:.3})),windowDay:st("#d8ecff",{emissive:"#b8dcff",ei:.75,rough:.2}),banner:an(st("#ffffff",{map:zM(),rough:.8,side:Ye,glow:.08})),slit:an(st("#1e1c22",{rough:.9}))}}function $f(n,t,e,i){const o=n/2,s=new ol;return s.moveTo(-o,t),s.lineTo(-o,e),s.lineTo(o,e),s.lineTo(o,t),s.absarc(0,t,o,0,Math.PI,!1),new Pr(s,{depth:i,bevelEnabled:!1,curveSegments:10})}function Yf(n,t,e){const i=new ol;return i.moveTo(-n/2,0),i.lineTo(n/2,0),i.lineTo(0,t),i.closePath(),new Pr(i,{depth:e,bevelEnabled:!1})}function Yi(n,t,e,i,o,s,r,a=2.6){const l=Math.hypot(o-e,s-i),c=Math.max(1,Math.floor(l/a)),u=Math.abs(o-e)>Math.abs(s-i);for(let d=0;d<=c;d++){const f=d/c,h=e+(o-e)*f,g=i+(s-i)*f;n.box(t,u?1.3:.9,1.3,u?.9:1.3,h,r+.65,g)}}function qf(n,t,e,i,o,s,r){n.cyl(t.tower,o,o*1.08,s+4,14,e,(s-4)/2,i),n.cyl(t.tower,o+.45,o,.9,14,e,s+.2,i);for(let a=0;a<10;a++){const l=a/10*Math.PI*2;n.box(t.tower,1,1.1,.8,e+Math.sin(l)*(o+.2),s+1.15,i+Math.cos(l)*(o+.2),{ry:l})}n.cone(t.roof,o+.9,r,14,e,s+.65+r/2,i);for(let a=0;a<4;a++){const l=a/4*Math.PI*2+Math.PI/4;for(const c of[s*.35,s*.7])n.box(t.slit,.35,1.6,.3,e+Math.sin(l)*(o+.02),c,i+Math.cos(l)*(o+.02),{ry:l})}n.cyl(t.iron,.07,.07,3.2,5,e,s+r+1.6,i),n.add(new Ee(2.2,1.1),t.banner,e+1.15,s+r+2.4,i),n.solidBox(e-o*.75,-4,i-o*.75,e+o*.75,s+1.7,i+o*.75)}function db(n){const t=new pi,e=Gp;t.boxMin(n.stone,-e,-4,-e,2*e,ni+4,ls,{solid:!0}),t.boxMin(n.stone,-e,-4,-Se,ls,ni+4,2*Se,{solid:!0}),t.boxMin(n.stone,Se,-4,-Se,ls,ni+4,2*Se,{solid:!0}),t.boxMin(n.stone,-e,-4,Se,e-8.5,ni+4,ls,{solid:!0}),t.boxMin(n.stone,8.5,-4,Se,e-8.5,ni+4,ls,{solid:!0}),Yi(t,n.stone,-e+2,-e+.45,e-2,-e+.45,ni),Yi(t,n.stone,-e+.45,-e+2,-e+.45,e-2,ni),Yi(t,n.stone,e-.45,-e+2,e-.45,e-2,ni),Yi(t,n.stone,-e+2,e-.45,-8.5,e-.45,ni),Yi(t,n.stone,8.5,e-.45,e-2,e-.45,ni);for(const[g,y,p,m]of[[-e-.8,-e-.8,2*e+1.6,1.6],[-e-.8,-e,1.6,2*e],[e-.8,-e,1.6,2*e],[-e-.8,e-.8,e-8.5+.8,1.6],[8.5,e-.8,e-8.5+.8,1.6]])t.boxMin(n.tower,g,-2,y,p,3,m);for(const[g,y]of[[-e,-e],[e,-e],[-e,e],[e,e]])qf(t,n,g,y,4.4,16,9);for(const g of[-1,1]){const y=g<0?-8.5:2.5;t.boxMin(n.tower,y,-4,Se-1.5,6,19,7.6,{solid:!0}),Yi(t,n.tower,y+.5,Se+5.65,y+5.5,Se+5.65,15,1.7),Yi(t,n.tower,y+.5,Se-1.05,y+5.5,Se-1.05,15,1.7),t.cone(n.roof,4.6,5.5,4,y+3,15+2.75+.6,Se+2.3,{ry:Math.PI/4});for(const p of[5,10])t.box(n.slit,.4,1.6,.3,y+3,p,Se+6.12);t.box(n.windowWarm,.9,1.3,.1,y+3,12.4,Se+6.13)}const i=Se-1.5,o=7.6;t.boxMin(n.tower,-2.5,7.4,i,5,7.6,o,{solid:!0}),t.add($f(5,4.8,7.4,o),n.tower,0,0,i),Yi(t,n.tower,-2,Se+5.65,2,Se+5.65,15,1.4);const s=new ki(2.65,.32,6,14,Math.PI);t.add(s,n.stone,0,4.8,i+o+.05);for(let g=-4;g<=4;g++)t.box(n.iron,.12,2.2,.12,g*.55,7,i+o-.6),t.cone(n.iron,.09,.3,4,g*.55,5.75,i+o-.6,{rx:Math.PI});for(const g of[6.4,7.3])t.box(n.iron,4.8,.1,.1,0,g,i+o-.6);for(const g of[-1,1]){t.box(n.wood,.22,5.8,2.4,g*2.3,2.9,i+1.4);for(const y of[1,2.9,4.8])t.box(n.iron,.26,.16,2.3,g*2.3,y,i+1.4)}t.boxMin(n.floor,-Se,-.4,-Se,2*Se,.5,2*Se,{solid:!0}),t.boxMin(n.floor,-2.5,-.4,i,5,.5,o+.2,{solid:!0}),t.boxMin(n.floor,-3,-.4,Se+6.1,6,.48,Zt.plateauR-Se-7,{solid:!0});const r=9.6,a=-20,l=-3,c=1.2,u=11;t.boxMin(n.stone,-r,-1,a,c,u+1,l-a,{solid:!0}),t.boxMin(n.stone,r-c,-1,a,c,u+1,l-a,{solid:!0}),t.boxMin(n.stone,-r+c,-1,a,2*(r-c),u+1,c,{solid:!0}),t.boxMin(n.stone,-r+c,-1,l-c,r-c-2.2,u+1,c,{solid:!0}),t.boxMin(n.stone,2.2,-1,l-c,r-c-2.2,u+1,c,{solid:!0}),t.boxMin(n.stone,-2.2,6.6,l-c,4.4,u-6.6,c,{solid:!0}),t.add($f(4.4,4.2,6.6,c),n.stone,0,0,l-c),t.add(new ki(2.4,.25,6,12,Math.PI),n.tower,0,4.2,l+.05),t.add(Yf(2*r,6.2,c),n.stone,0,u,l-c),t.add(Yf(2*r,6.2,c),n.stone,0,u,a);const d=Math.atan2(6.2,r),f=Math.hypot(r,6.2)+1;for(const g of[-1,1])t.box(n.roof,f,.4,l-a+1.6,g*(r/2+.2),u+3.1+.25,(a+l)/2,{rz:-g*d});t.box(n.wood,.5,.5,l-a+1.8,0,u+6.35,(a+l)/2);for(const g of[-6.5,-10.5,-14.5,-18])for(const y of[-1,1])t.box(n.tower,.3,4,1.9,y*(r+.12),6,g),t.box(n.windowWarm,.1,3.2,1.2,y*(r+.3),6,g),t.box(n.windowDay,.06,3.2,1.2,y*(r-c-.04),6,g),t.cone(n.tower,.75,.7,4,y*(r+.28),8.3,g,{ry:Math.PI/4});qf(t,n,14.5,-14.5,4.6,27,10);for(const g of[9,15,21])t.box(n.windowWarm,.1,1.4,.8,14.5+4.65,g,-14.5,{ry:Math.PI/2});return{group:t.build("castleExterior",{castShadow:!1,receiveShadow:!1}),colliders:t.colliders}}function fb(n){const t=new pi,e=st("#7ec8ef",{rough:.06,metal:.28,transparent:!0,opacity:.52,emissive:"#3aa0d4",ei:.32});Ca=e;const i=st("#f0c040",{rough:.35,metal:.7,emissive:"#806010",ei:.25}),o=st("#b02838",{rough:.7,glow:.12}),s=new An({color:"#ff8a2a"}),r=new An({color:"#ffb050",transparent:!0,opacity:.22,depthWrite:!1,blending:hr}),a=de(st("#cfc6b8",{map:pl(),rough:.85,glow:.1}),.4),l=de(st("#e6dfd2",{map:Dr("warm"),rough:.9,glow:.14}),.5),c=de(st("#7a4a28",{map:kn("dark"),rough:.75,glow:.08}),.6),u=st("#ffffff",{map:hu("#a82030","#f0c040"),rough:.9,glow:.12}),d=st("#3f8a3a",{rough:.9}),f=de(st("#9a6436",{map:kn("light"),rough:.8}),.8);t.push(0,.1,5),t.cyl(n.tower,3.4,3.6,.9,10,0,.45,0,{solid:!0}),t.cyl(e,3.05,3.05,.14,20,0,.98,0),t.cyl(n.tower,.55,.8,2.4,10,0,1.6,0),t.cyl(n.tower,1.4,.55,.5,12,0,2.95,0),t.cyl(e,1.2,1.2,.08,16,0,3.17,0),t.cyl(n.tower,.25,.35,.9,8,0,3.6,0),t.sphere(i,.32,0,4.2,0);for(let y=0;y<6;y++){const p=y/6*Math.PI*2,m=[];for(let b=0;b<=8;b++){const _=b/8,T=.85+_*1.85,E=3.12-_*_*2.35;m.push(new I(Math.sin(p)*T,E,Math.cos(p)*T))}const v=new nl(m);t.add(new Uu(v,8,.055,5,!1),e,0,0,0)}t.pop();for(const y of[16,9,1])for(const p of[-1,1])t.cyl(n.iron,.09,.11,7.5,6,p*6,3.75,y,{solid:!0}),t.box(n.iron,2,.08,.08,p*6+p*.9,7.2,y),t.add(new Ee(1.6,3.4),n.banner,p*6+p*.9,5.4,y,{ry:Math.PI/2}),t.sphere(i,.14,p*6,7.6,y);for(const y of[-14,-4,6,14])for(const p of[-1,1])t.add(new Ee(2.6,5.4),n.banner,p*(Se-.04),6.2,y,{ry:-p*Math.PI/2});for(const y of[-1,1])t.add(new Ee(2.4,5),n.banner,y*5.5,8.5,Se-1.55,{ry:Math.PI});for(const y of[-1,1])t.add(new Ee(1.8,4.2),n.banner,y*5.6,6.8,-2.95);for(const[y,p]of[[-18,17],[-16.8,17.6],[-17.5,15.8],[18,-2],[17.2,-3.2]])t.cyl(f,.5,.45,1.1,10,y,.65,p,{solid:!0}),t.cyl(n.iron,.52,.52,.06,10,y,.95,p),t.cyl(n.iron,.47,.47,.06,10,y,.3,p);for(const[y,p,m]of[[18,16,1.2],[16.6,16.5,.9],[18.1,14.6,.8]])t.box(f,m,m,m,y,.1+m/2,p,{solid:!0});for(const[y,p]of[[-12,12],[12,12],[-14,-1],[14,2]])t.cyl(n.tower,1.1,1.2,.9,8,y,.55,p,{solid:!0}),t.cyl(c,.14,.18,1.6,6,y,1.6,p),t.sphere(d,1.2,y,2.9,p,{sy:.85}),t.sphere(d,.8,y+.5,3.5,p-.3);t.boxMin(a,-8.4,-.3,-18.8,16.8,.48,14.6,{solid:!0}),t.boxMin(l,-8.42,.15,-18.8,.05,10.8,14.6),t.boxMin(l,8.37,.15,-18.8,.05,10.8,14.6),t.boxMin(l,-8.4,.15,-18.82,16.8,10.8,.05);for(const y of[-6,-9.5,-13,-16.5])t.box(c,16.8,.6,.5,0,10.6,y);t.box(c,.5,.6,14.6,0,10.6,-11.5),t.add(new Ee(2.6,10.4),u,0,.19,-9.6,{rx:-Math.PI/2}),t.boxMin(c,-6,.1,-18.8,12,.55,3.3,{solid:!0}),t.boxMin(c,-3,.1,-15.5,6,.3,.7,{solid:!0}),t.add(new Ee(3,3),u,0,.66,-17,{rx:-Math.PI/2}),t.push(0,.65,-17.6),t.box(i,2.3,.4,1.7,0,.2,0,{solid:!0}),t.box(o,1.6,.35,1.25,0,.58,.05),t.box(o,1.7,3.4,.35,0,2.2,-.62),t.box(i,2.05,.2,.45,0,3.95,-.62);for(const y of[-1,1])t.box(i,.18,3.6,.45,y*.95,2.2,-.62),t.box(i,.25,.8,1.3,y*.92,.9,.05),t.sphere(i,.18,y*.95,4.2,-.62);t.cone(i,.35,.7,5,0,4.4,-.62),t.solidBox(-1.15,0,-.9,1.15,4.6,.9),t.pop(),t.add(new Ee(3.6,7.2),n.banner,0,6.4,-18.74);for(const y of[-1,1])t.add(new Ee(1.8,4.2),n.banner,y*8.33,6.6,-8.5,{ry:-y*Math.PI/2}),t.add(new Ee(1.8,4.2),n.banner,y*8.33,6.6,-12.5,{ry:-y*Math.PI/2});for(const y of[-6.8,-10.4,-14])for(const p of[-1,1]){const m=p*4.3;t.box(n.tower,1.4,.45,1.4,m,.4,y,{solid:!0}),t.cyl(l,.5,.56,9.8,12,m,5.4,y,{solid:!0}),t.box(n.tower,1.4,.5,1.4,m,10.3,y),t.box(n.iron,.12,.12,.5,m-p*.7,3.1,y,{ry:Math.PI/2}),t.cyl(c,.07,.05,.7,6,m-p*.85,3.4,y),t.cone(s,.13,.42,6,m-p*.85,3.95,y),t.sphere(r,.55,m-p*.85,3.95,y,{ws:8,hs:6})}for(const y of[-5,-16.6])for(const p of[-1,1]){const m=p*8.15;t.cyl(c,.07,.05,.7,6,m,3.4,y),t.cone(s,.13,.42,6,m,3.95,y),t.sphere(r,.55,m-p*.1,3.95,y,{ws:8,hs:6})}for(const y of[-1,1]){const p=y*6.75;t.box(c,1.3,.14,7.6,p,.98,-10.2);for(const m of[-6.8,-13.6])for(const v of[-.45,.45])t.box(c,.14,.85,.14,p+v,.55,m);t.solidBox(p-.65,.1,-14,p+.65,1.05,-6.4),t.box(c,.45,.1,7.2,p-y*1.05,.55,-10.2),t.solidBox(p-y*1.05-.22,.1,-13.8,p-y*1.05+.22,.6,-6.6);for(let m=0;m<5;m++){const v=-7.2-m*1.6;t.cyl(i,.22,.22,.03,10,p,1.07,v),t.cyl(i,.06,.04,.22,6,p+y*.35,1.16,v+.3),m%2===0&&t.sphere(f,.16,p,1.15,v,{sy:.6})}}const h=st("#f4ecd8",{glow:.3});for(const y of[-8.2,-13.2]){t.add(new ki(1.4,.07,6,18),n.iron,0,7.6,y,{rx:Math.PI/2}),t.cyl(n.iron,.04,.04,3,4,0,9.1,y);for(let p=0;p<8;p++){const m=p/8*Math.PI*2;t.cyl(h,.05,.05,.25,5,Math.sin(m)*1.4,7.78,y+Math.cos(m)*1.4),t.cone(s,.05,.16,5,Math.sin(m)*1.4,8,y+Math.cos(m)*1.4)}}const g=t.build("castleNear",{castShadow:!1,receiveShadow:!1});return g.traverse(y=>{const p=y;p.isMesh&&p.material===r&&(p.renderOrder=5)}),{group:g,colliders:t.colliders}}function hb(){const n=new Xt;n.name="castleLandmark";const t=ml();n.position.set(Zt.x,t,Zt.z);const e=ub();n.userData.mats=e;const i=db(e);n.add(i.group),Bo("castle",{x:Zt.x,y:t,z:Zt.z},0,i.colliders);const o=mb(e,t);n.add(o),n.updateMatrixWorld(!0);const s=new Xt;s.add(i.group.clone(),o.clone());const r=Gu(s,"castleFar",a=>an(a));return r.visible=!1,n.add(r),n.userData.ext=i.group,n.userData.approach=o,n}const pb=250;function mb(n,t){const e=new Xt;e.name="castleApproach";const i=new pi,o=2.6,s=[],r=[],a=[],l=38,c=104,u=2;let d=0;for(let _=l;_<=c;_+=u,d++){const T=Math.sin(_*.06)*1.6*gr.smoothstep(_,44,70);for(const E of[-1,0,1]){const A=T+E*o,S=oe(Zt.x+A,Zt.z+_)-t+.07;s.push(A,S,_),r.push((E+1)*o*.33,_*.33)}if(d>0){const E=(d-1)*3,A=d*3;a.push(E,A,E+1,E+1,A,A+1,E+1,A+1,E+2,E+2,A+1,A+2)}}const f=new Pe;f.setAttribute("position",new $t(s,3)),f.setAttribute("uv",new $t(r,2)),f.setIndex(a),f.computeVertexNormals();const h=an(st("#c8b89c",{map:pl(),rough:.95})),g=new j(f,h);g.receiveShadow=!0,g.name="castleRoad",e.add(g);const y=an(st("#ffe0a0",{emissive:"#ffb050",ei:1,rough:.2})),p=an(st("#4f8a34",{rough:.95}));for(let _=44;_<=100;_+=11){const T=Math.sin(_*.06)*1.6*gr.smoothstep(_,44,70);for(const E of[-1,1]){const A=T+E*(o+.9),S=$n(Zt.x+A,Zt.z+_,.4).min-t;i.cyl(n.iron,.07,.1,3,6,A,S+1.5,_),i.box(n.iron,.5,.06,.06,A-E*.2,S+2.95,_),i.cyl(y,.12,.12,.32,8,A-E*.4,S+2.72,_),i.cyl(n.iron,.03,.16,.12,8,A-E*.4,S+2.94,_);const w=_+5,M=T+E*(o+1.4),R=$n(Zt.x+M,Zt.z+w,.9).min-t;i.sphere(p,.9,M,R+.35,w,{sy:.7,ws:10,hs:6})}}e.add(i.build("castleApproachParts"));const m=[];for(let _=0;_<40;_++){const T=_/40*Math.PI*2+Math.sin(_*7.3)*.06;if(Math.abs(Math.atan2(Math.sin(T),Math.cos(T))-Math.PI/2)<.32)continue;const E=45+_*37%17,A=Math.cos(T)*E,S=Math.sin(T)*E,w=$n(Zt.x+A,Zt.z+S,.9);if(w.max-w.min>1.4)continue;const M=1+_*13%7*.12;m.push(new Rt().compose(new I(A,w.min-t-.04,S),new dn().setFromEuler(new on(0,_*1.7,0)),new I(M*.95,M,M*.95)))}const v=an(new Wt({vertexColors:!0,roughness:.9,color:"#ffffff"})),b=new jn(Bp("forest"),v,m.length);return m.forEach((_,T)=>b.setMatrixAt(T,_)),b.instanceMatrix.needsUpdate=!0,b.computeBoundingSphere(),b.castShadow=!1,b.name="castlePines",e.add(b),e}function gb(n,t,e,i){const o=Math.hypot(t-Zt.x,e-Zt.z);let s=n.getObjectByName("castleNear");if(!s&&o<150){const l=fb(n.userData.mats);n.add(l.group),s=l.group,Bo("castleNear",{x:n.position.x,y:n.position.y,z:n.position.z},0,l.colliders)}const r=o<110;s&&(s.visible=r);const a=o>pb;if(n.userData.farOn!==a){n.userData.farOn=a;const l=n.getObjectByName("castleFar");l&&(l.visible=a),n.userData.ext&&(n.userData.ext.visible=!a),n.userData.approach&&(n.userData.approach.visible=!a)}if(i){const c=Math.hypot(t-Zt.x,e-(Zt.z+Wf.z))<26;i.position.set(Zt.x,n.position.y+6.5,Zt.z+Wf.z),i.intensity=c?60:0,i.distance=28,i.decay=1.4}return r}const jf=160,xb=900,Fn={hardware:{x:8,z:-14,roof:"#e07830",awning:"#f0c040"},food:{x:8,z:0,roof:"#e04848",awning:"#f07070"},weapons:{x:8,z:14,roof:"#40c8d4",awning:"#70e0e8"}},yb={hardware:"Hardware",food:"Food Store",weapons:"Weapons"};function Wu(n,t,e,i="#fff4cc",o="#3a2410"){const s=document.createElement("canvas");s.width=512,s.height=192;const r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,512,192),r.strokeStyle=o,r.lineWidth=10,r.strokeRect(8,8,496,176),r.fillStyle=o,r.textAlign="center",r.textBaseline="middle",r.font="bold 64px system-ui, sans-serif",r.fillText(n,256,96);const a=new ks(s);a.colorSpace=ke,a.needsUpdate=!0;const l=new j(new Ee(t,e),new An({map:a,toneMapped:!1}));return l.name=`label_${n.slice(0,24)}`,l}function _b(n){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#fff6d8",e.fillRect(0,0,256,256),e.strokeStyle="#3a2410",e.lineWidth=12,e.strokeRect(8,8,240,240),e.fillStyle="#3a2410",e.strokeStyle="#3a2410",e.lineWidth=16,e.lineCap="round",n==="hardware"?(e.beginPath(),e.moveTo(80,190),e.lineTo(150,80),e.stroke(),e.fillRect(130,55,70,28),e.fillRect(175,40,22,58)):n==="food"?(e.beginPath(),e.ellipse(128,150,70,42,0,0,Math.PI*2),e.fill(),e.fillStyle="#c06030",e.beginPath(),e.ellipse(128,128,62,28,0,Math.PI,0),e.fill()):(e.beginPath(),e.moveTo(128,40),e.lineTo(128,175),e.stroke(),e.beginPath(),e.moveTo(88,80),e.lineTo(168,80),e.stroke(),e.beginPath(),e.arc(128,195,16,0,Math.PI*2),e.fill());const i=new ks(t);return i.colorSpace=ke,i.needsUpdate=!0,i}function vb(n,t){const e=Fn[t],i=new j(new Ee(1.15,1.15),new An({map:_b(t),toneMapped:!1}));i.position.set(e.x-4.55,3.15,e.z+1.55),i.rotation.y=-Math.PI/2,i.name=`icon_${t}`,n.add(i);const o=Wu(yb[t],2.15,.62);o.position.set(e.x-4.5,3.95,e.z),o.rotation.y=-Math.PI/2,o.name=`sign_${t}`,n.add(o)}function Mb(n,t){return{x:Re.x+n,y:gl(),z:Re.z+t}}function Ra(n){const t=Fn[n];return Mb(t.x-4.2,t.z)}function bb(){return{cobble:de(st("#d8c8a8",{map:pl(),rough:.9,glow:.05}),.33),stone:de(st("#c8b8a0",{map:Dr("warm"),rough:.88,glow:.06}),.45),logs:de(st("#f0d0a0",{map:Oa(),rough:.86,glow:.07}),.9),planks:de(st("#e8c890",{map:kn("light"),rough:.84,glow:.06}),.5),dark:de(st("#6a4a28",{map:kn("dark"),rough:.82,glow:.05}),.5),hay:de(st("#e8d070",{map:Ou(),rough:.88,glow:.08}),1),roofHw:de(st("#e07830",{map:Ao(64),rough:.8,glow:.12}),.45),roofFd:de(st("#e04848",{map:Ao(64),rough:.8,glow:.12}),.45),roofWp:de(st("#40c8d4",{map:Ao(64),rough:.8,glow:.14}),.45),roofHome:de(st("#d06038",{map:Ao(64),rough:.8,glow:.1}),.45),awnHw:st("#f0c040",{rough:.75,glow:.1}),awnFd:st("#f07070",{rough:.75,glow:.1}),awnWp:st("#70e0e8",{rough:.75,glow:.12}),awnBlue:st("#6aa0e0",{rough:.75,glow:.1}),foliage:st("#3a8a38",{rough:.88,glow:.08}),foliage2:st("#5aaa40",{rough:.88,glow:.08}),water:st("#60c8e8",{rough:.18,metal:0,glow:.22,transparent:!0,opacity:.82}),lantern:st("#ffc060",{rough:.4,emissive:"#ff9020",ei:1.15,glow:.4}),flowerR:st("#e04060",{rough:.7,glow:.15}),flowerY:st("#f0d040",{rough:.7,glow:.15}),steel:st("#d0d8e0",{rough:.35,metal:.05,glow:.12})}}function wb(n,t,e,i,o=1){n.cyl(t.dark,.16*o,.22*o,1.5*o,6,e,.75*o,i),n.cone(t.foliage,1.35*o,2.3*o,7,e,2.4*o,i),n.cone(t.foliage2,.95*o,1.5*o,7,e,3.35*o,i)}function Sb(n,t,e,i,o,s=0){n.push(e,i,o,s),n.box(t.dark,1.15,.28,.38,0,.14,0);for(let r=0;r<5;r++)n.sphere(r%2?t.flowerR:t.flowerY,.09,-.4+r*.2,.34,0,{ws:6,hs:5});n.pop()}function hc(n,t,e,i,o,s=0){n.push(e,0,i,s),n.box(t.planks,2.5,.12,1.7,0,.92,0);for(const r of[-1.1,1.1])for(const a of[-.7,.7])n.cyl(t.dark,.06,.07,2.15,6,r,1.08,a);n.box(o,2.7,.08,1.9,0,2.2,0),n.pop()}function Eb(n,t,e){const i=Fn[e],o=e==="food"?t.roofFd:e==="weapons"?t.roofWp:t.roofHw,s=e==="food"?t.awnFd:e==="weapons"?t.awnWp:t.awnHw;n.push(i.x,0,i.z,0),n.box(t.stone,8.6,.42,7.6,0,.21,0,{solid:!0}),n.box(t.logs,8.4,3.15,.32,0,1.95,3.55,{solid:!0}),n.box(t.logs,8.4,3.15,.32,0,1.95,-3.55,{solid:!0}),n.box(t.logs,.32,3.15,7.4,4.05,1.95,0,{solid:!0}),n.box(t.logs,.32,3.15,2.45,-4.05,1.95,-2.35,{solid:!0}),n.box(t.logs,.32,3.15,2.45,-4.05,1.95,2.35,{solid:!0}),n.box(t.logs,.32,1,2.2,-4.05,3.05,0,{solid:!0}),n.box(t.planks,7.8,.08,6.8,0,.46,0);for(const a of[-1,1])n.box(t.dark,.16,2.15,.36,-4.12,1.45,a*1.05);n.box(t.dark,2.3,.18,.36,-4.12,2.55,0);const r=.38;n.box(o,9.4,.22,5.1,0,4.35,-2.15,{rx:r}),n.box(o,9.4,.22,5.1,0,4.35,2.15,{rx:-r}),n.box(t.dark,9.6,.18,.3,0,5.25,0),n.box(t.stone,.85,1.8,.85,2.4,5.2,-2.4,{solid:!0}),n.box(t.stone,1.05,.16,1.05,2.4,6.15,-2.4),n.box(s,1.8,.08,6.4,-5.05,2.55,0,{rz:.18});for(const a of[-2.6,2.6])n.cyl(t.dark,.06,.07,2.3,6,-4.85,1.15,a);for(const a of[-1.7,1.7])n.box(t.dark,.07,.45,.07,-4.35,2.75,a),n.box(t.lantern,.2,.24,.2,-4.35,2.45,a);for(const a of[-3.55,3.55])n.cyl(t.dark,.16,.18,3.4,8,-4.05,1.9,a),n.cyl(t.dark,.16,.18,3.4,8,4.05,1.9,a);n.pop()}function Tb(n,t,e){const i=Fn[e],o=i.x-5.6;if(e==="hardware")n.box(t.dark,.85,.7,.7,o,.45,i.z-1.6),n.box(t.planks,.7,.55,.55,o+.15,.95,i.z-1.55),n.cyl(t.dark,.38,.42,.7,10,o,.4,i.z+1.5),n.cyl(t.dark,.34,.38,.55,10,o+.55,.32,i.z+2.05);else if(e==="food")n.box(t.dark,.9,.35,.7,o,.28,i.z-1.3),n.sphere(t.awnFd,.16,o-.15,.58,i.z-1.45,{ws:8,hs:6}),n.sphere(t.awnHw,.14,o+.18,.55,i.z-1.15,{ws:8,hs:6}),n.sphere(t.awnFd,.13,o+.05,.7,i.z-1.25,{ws:8,hs:6}),n.box(t.planks,.7,.45,.55,o,.32,i.z+1.5),n.box(t.awnFd,.4,.12,.35,o,.62,i.z+1.5);else{n.box(t.dark,.12,1.35,1.5,o,.78,i.z+1.4);for(const s of[-.45,.45])n.box(t.steel,.08,.95,.08,o,1.05,i.z+1.4+s,{rz:.15}),n.box(t.dark,.28,.08,.08,o,.7,i.z+1.4+s);n.cyl(t.dark,.32,.36,.6,10,o,.35,i.z-1.5)}}function Zf(n,t,e,i,o){n.push(e,0,i,o),n.box(t.stone,5.4,.4,4.6,0,.2,0,{solid:!0}),n.box(t.logs,5.2,2.5,4.4,0,1.55,0,{solid:!0}),n.box(t.roofHome,6.2,.22,3.2,0,3.35,-1.15,{rx:.4}),n.box(t.roofHome,6.2,.22,3.2,0,3.35,1.15,{rx:-.4}),n.box(t.dark,6.4,.16,.26,0,4.05,0),n.box(t.dark,.85,1.55,.1,0,1.15,2.25),n.box(t.stone,.7,1.5,.7,1.6,4.2,-1.5,{solid:!0}),n.pop()}function Ab(n,t){const e=Fn[t],i=new Xt;i.name=`npc_${t}`;const o=t==="food"?"#e07070":t==="weapons"?"#40a8b8":"#e09040",s=new j(new Do(.24,.62,4,8),new Wt({color:o,roughness:.72,metalness:0,emissive:new vt(o),emissiveIntensity:.08}));s.position.y=.92;const r=new j(new Ot(.2,10,8),new Wt({color:"#f0c9a8",roughness:.7,metalness:0}));r.position.y=1.52;const a=t==="food"?"#f5d94a":t==="weapons"?"#3a2a20":"#c07030",l=new j(new Ot(.21,8,6),new Wt({color:a,roughness:.8,metalness:0}));l.position.set(0,1.64,-.02),l.scale.set(1.15,.85,1.2),i.add(s,r,l),i.scale.setScalar(1.18),i.rotation.y=Math.PI/2,i.position.set(e.x-4.2,0,e.z),i.userData.shopId=t,n.add(i)}function Cb(){const n=new pi,t=bb();n.cyl(t.cobble,17.5,17.5,.16,28,0,.08,0,{solid:!0}),n.box(t.planks,22,.1,4.4,-16,.07,0),n.cyl(t.stone,1.7,1.85,.62,16,0,.38,0,{solid:!0}),n.cyl(t.stone,1.45,1.45,.14,14,0,.72,0),n.cyl(t.water,1.32,1.32,.1,14,0,.68,0),n.cyl(t.stone,.24,.3,1.15,8,0,1.15,0),n.sphere(t.water,.2,0,1.82,0,{ws:8,hs:6}),n.box(t.stone,.95,4.4,.95,-20,2.2,-4.4,{solid:!0}),n.box(t.stone,.95,4.4,.95,-20,2.2,4.4,{solid:!0}),n.box(t.dark,1.15,.55,10,-20,4.55,0),n.box(t.stone,1.05,.55,1.05,-20,4.85,-4.4),n.box(t.stone,1.05,.55,1.05,-20,4.85,4.4);for(const o of Object.keys(Fn))Eb(n,t,o),Tb(n,t,o),Sb(n,t,Fn[o].x-5.5,0,Fn[o].z-2.6,Math.PI/2);hc(n,t,-6,-8,t.awnHw,.2),hc(n,t,-6,8,t.awnFd,-.15),hc(n,t,2,-20,t.awnBlue,1.2),Zf(n,t,-6,24,Math.PI),Zf(n,t,-6,-24,0);for(let o=-14;o<=14;o+=3.2)n.cyl(t.dark,.07,.08,1.15,6,o,.58,18.6),n.cyl(t.dark,.07,.08,1.15,6,o,.58,-18.6);n.box(t.dark,29,.08,.08,0,.85,18.6),n.box(t.dark,29,.08,.08,0,.55,18.6),n.box(t.dark,29,.08,.08,0,.85,-18.6),n.box(t.dark,29,.08,.08,0,.55,-18.6);for(const[o,s,r]of[[-24,-16,1.05],[-24,16,1.15],[20,-26,1],[20,26,1.1],[24,4,.95],[-26,2,1.2],[12,28,.9],[12,-28,.95],[-18,22,.85],[-18,-22,.9]])wb(n,t,o,s,r);n.box(t.planks,2.3,.16,1.25,-11,.72,-5.4),n.box(t.dark,2.1,.45,.1,-11,.98,-6),n.box(t.dark,2.1,.45,.1,-11,.98,-4.8),n.cyl(t.dark,.34,.34,.16,10,-11.8,.34,-5.4,{rz:Math.PI/2}),n.cyl(t.dark,.34,.34,.16,10,-10.2,.34,-5.4,{rz:Math.PI/2}),n.box(t.hay,1.4,.7,.9,-11,1.2,-5.4),n.box(t.hay,1.1,.55,.8,4.5,.35,-10.5),n.box(t.hay,.9,.45,.7,5.3,.3,-9.7);const e=[t.awnHw,t.awnFd,t.awnWp,t.awnBlue];for(let o=0;o<9;o++){const s=o/8;n.box(e[o%4],.28,.35,.06,-18+s*22,3.55-Math.sin(s*Math.PI)*.25,-3.4+s*.2),n.box(e[(o+2)%4],.28,.35,.06,-18+s*22,3.55-Math.sin(s*Math.PI)*.25,3.4-s*.2)}const i=n.build("townNear",{castShadow:!1,receiveShadow:!0});return Bo("town",{x:Re.x,y:gl(),z:Re.z},0,n.colliders),i}function Rb(){const n=new Xt;n.name="townFar";const t=new pi,e={hardware:"#e07830",food:"#e04848",weapons:"#40c8d4"};for(const i of Object.keys(Fn)){const o=Fn[i];t.box(st("#f0d0a0",{glow:.08}),8.2,3.4,7.2,o.x,1.8,o.z),t.box(st(e[i],{glow:.14}),9.2,1.5,8,o.x,4.3,o.z)}return t.cyl(st("#d8c8a8",{glow:.05}),17,17,.2,12,0,.1,0),t.box(st("#c8b8a0",{glow:.06}),1.2,4.4,9.5,-20,2.2,0),t.box(st("#d06038",{glow:.1}),5.4,3.4,4.6,-6,1.7,24),t.box(st("#d06038",{glow:.1}),5.4,3.4,4.6,-6,1.7,-24),n.add(Gu(t.build("townFarSrc"),"townFarBake",i=>{an(i,.2)})),n}function Pb(){const n=new Xt;n.name="townLandmark",n.position.set(Re.x,gl(),Re.z);const t=Cb();t.name="townNear";for(const i of Object.keys(Fn))Ab(t,i),vb(t,i);const e=Wu("Market Town",4.4,1.15,"#fff0c0","#5a2810");return e.position.set(-19.35,4.55,0),e.rotation.y=-Math.PI/2,e.name="townWelcome",t.add(e),n.add(t),n.add(Rb()),n}function Ib(n,t,e){const i=Math.hypot(t-Re.x,e-Re.z),o=n.getObjectByName("townNear"),s=n.getObjectByName("townFar");o&&(o.visible=i<jf),s&&(s.visible=i>=jf-10&&i<xb)}function Ga(n,t,e=3.2){let i=null,o=e;for(const s of Object.keys(Fn)){const r=Ra(s),a=Math.hypot(n-r.x,t-r.z);a<o&&(o=a,i=s)}return i}function Lb(){const n=new Xt;n.name="campTownSign";const t=new j(new ue(.08,.1,2.4,6),new Wt({color:"#6a4a28"}));t.position.y=1.2;const e=new j(new ne(1.8,.7,.08),new Wt({color:"#f0e0a8"}));e.position.set(.55,2.05,0);const i=Wu("Market Town →",1.75,.62);return i.position.set(.55,2.05,.05),n.add(t,e,i),n.position.set(14.5,0,8.5),n.rotation.y=-Math.PI/2,n}function Db(n=16){const t=mn,e=Math.ceil(2*t/n),i=[],o=[],s=[],r=new vt("#3f86b8"),a=n*.55;for(let f=0;f<=e;f++)for(let h=0;h<=e;h++){const g=-t+h*n,y=-t+f*n;let p=oe(g,y);const m=p;for(const[E,A]of[[a,0],[-a,0],[0,a],[0,-a],[a,a],[-a,-a],[a,-a],[-a,a]])p=Math.min(p,oe(g+E,y+A));const b=Math.hypot(g,y)<44?3:.9;p=Math.min(p,18),i.push(g,p-b,y);const _=gn(g,y),T=Ha(_.primary);_.secondary&&_.blend>.05&&T.lerp(Ha(_.secondary),_.blend),Op(g,y,T),(_.primary==="lake"||_.secondary==="lake")&&m<-.1&&T.copy(r),T.multiplyScalar(.74),o.push(T.r,T.g,T.b)}const l=e+1;for(let f=0;f<e;f++)for(let h=0;h<e;h++){const g=f*l+h,y=g+1,p=g+l,m=p+1;s.push(g,p,y,y,p,m)}const c=new Pe;c.setAttribute("position",new $t(i,3)),c.setAttribute("color",new $t(o,3)),c.setIndex(s),c.computeVertexNormals(),c.computeBoundingSphere();const u=new Wt({vertexColors:!0,roughness:.95,metalness:0,color:"#ffffff"}),d=new j(c,u);return d.name="farTerrain",d.receiveShadow=!1,d.castShadow=!1,d.renderOrder=10,d.frustumCulled=!1,d}const Qe={fences:[[-10.5,7,Math.PI/2],[-10.5,8.3,Math.PI/2],[-10.5,9.6,Math.PI/2],[-10.5,10.9,Math.PI/2],[-10.5,12.2,Math.PI/2],[-10.5,13.5,Math.PI/2]],crystal:[-8.5,12],dirt:[[-13,-4,2.2],[8,-20,3.5],[20,-4,2.4]],pond:[9.5,2.5],pines:[[-12,4],[-21,-1],[19,-16],[15,6]],broadleaf:[[-6,8],[5,9],[15.5,2]],bushes:[[-2,5],[3,4],[-3.6,4.7]],rocks:[[6,1],[-11,-5],[11,8]]};function me(n,t){return GM(n,t)}function Nb(n,t,e,i,o){if(!i.length)return;const s=new jn(t,e,i.length);s.castShadow=o,s.receiveShadow=!0;const r=new De;for(let a=0;a<i.length;a++){const l=i[a];r.position.set(l.x,l.y,l.z),r.rotation.set(0,l.ry??0,0),r.scale.set(l.sx??1,l.sy??1,l.sz??1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}s.instanceMatrix.needsUpdate=!0,n.add(s)}function Ub(n,t){const e=n.getObjectByName("skyDome");e&&n.remove(e);const i=new Xt;i.name="terrain",n.fog=new el("#c5ddf2",t==="low"?.008:.0045),n.background=new vt("#a8d4f5"),n.add(DM());const o=Cn(),s=wp(128);s.repeat.set(22,22);const r=new Wt({map:s,color:"#d0e8c0",roughness:io.grass,metalness:0,vertexColors:!0});o?.grassNormal&&(r.normalMap=o.grassNormal,r.normalScale=new lt(fs.grass,fs.grass));const a=new Ee(64,64,t==="low"?16:32,t==="low"?16:32),l=new Float32Array(a.attributes.position.count*3);for(let S=0;S<a.attributes.position.count;S++){const w=a.attributes.position.getX(S),M=-a.attributes.position.getY(S),R=oe(w,M);a.attributes.position.setZ(S,R);const N=.9;l[S*3]=.55*N,l[S*3+1]=.78*N,l[S*3+2]=.48*N}a.setAttribute("color",new Te(l,3)),a.computeVertexNormals();const c=new j(a,r);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c.name="campGround",i.add(c);const u=Sp(128);if(t!=="low")for(const[S,w,M]of Qe.dirt){const R=new j(new Kn(M,12),new Wt({map:u,roughness:io.dirt,transparent:!0,opacity:.85,metalness:0}));R.rotation.x=-Math.PI/2,R.position.set(S,oe(S,w)+.03,w),i.add(R)}const d=new j(new ll(9.2,10,48),new Wt({color:"#f0e080",side:Ye,transparent:!0,opacity:.75,roughness:.6,metalness:0}));d.rotation.x=-Math.PI/2,d.position.y=oe(0,0)+.07,i.add(d);const f=(S,w,M)=>{let R=oe(S,w);for(let N=0;N<8;N++){const U=N/8*Math.PI*2;R=Math.min(R,oe(S+Math.cos(U)*M,w+Math.sin(U)*M))}return R},h=YM(f(Le.x,Le.z,3.5));i.add(h),i.add(ZM(f(wn.x,wn.z,5))),i.add(JM(f(Zn.x,Zn.z,4.6)));const g=t==="low"?4:Qe.fences.length;for(let S=0;S<g;S++){const[w,M,R]=Qe.fences[S],N=PM();N.position.set(w,oe(w,M),M),N.rotation.y=R,i.add(N)}const y=IM();y.position.set(Qe.crystal[0],oe(Qe.crystal[0],Qe.crystal[1]),Qe.crystal[1]),i.add(y);{const S=[];for(let w=0;w<12;w++){const M=4+w*1.2,R=Math.sin(M*.12)*.6;S.push({x:R,y:oe(R,M)+.05,z:M,ry:w*.4,sy:1})}Nb(i,new ue(.35,.4,.12,6),new Wt({color:"#a8a8a4",map:Ir(64),roughness:.9}),S,!1)}const p=NM();p.position.set(Qe.pond[0],oe(Qe.pond[0],Qe.pond[1]),Qe.pond[1]),i.add(p);for(const[S,w]of Qe.pines){const M=TM();M.position.set(S,oe(S,w),w),i.add(M)}for(const[S,w]of Qe.broadleaf){const M=AM();M.position.set(S,oe(S,w),w),i.add(M)}for(const[S,w]of Qe.bushes){const M=EM();M.position.set(S,oe(S,w),w),i.add(M)}for(const[S,w,M]of[[-1,6,"#e06080"],[2,5.5,"#f0d050"],[.5,7,"#6090e0"]]){const R=RM(M);R.position.set(S,oe(S,w),w),i.add(R)}for(const[S,w]of Qe.rocks){const M=CM();M.position.set(S,oe(S,w),w),i.add(M)}for(let S=0;S<(t==="low"?3:5);S++){const w=LM();w.position.set(-20+S*12,28+S%2*4,-30-S*5),i.add(w)}const m=new j(new Kn(2.2,24),new Wt({color:"#f0e080",transparent:!0,opacity:.4,side:Ye,roughness:.7,metalness:0}));m.rotation.x=-Math.PI/2,m.position.set(2.5,oe(2.5,6.2)+.08,6.2),m.name="buildPad",i.add(m);const v=SM(64);v.repeat.set(4,10);const b=new j(new Ee(2.2,18,1,6),(()=>{const S=new Wt({map:v,roughness:io.path,color:"#e0d4b8",metalness:0});return o?.pathNormal&&(S.normalMap=o.pathNormal,S.normalScale=new lt(fs.path,fs.path)),S})());b.rotation.x=-Math.PI/2,b.position.set(.3,oe(.3,10)+.06,10),i.add(b);const _=new j(new ue(.06,.06,3.2,6),new Wt({color:"#d0a868",roughness:.7,metalness:0}));_.position.set(1.5,oe(1.5,2)+1.6,2),i.add(_);const T=new j(new Ee(1.3,.75),new Wt({color:"#3a7fd4",side:Ye,roughness:.55,metalness:0}));T.position.set(2.15,oe(2.15,2)+2.85,2),i.add(T);const E=new Set(["homeCabin","dragonStable","watchtower","pond","buildPad","campGround"]);Of(i,S=>!E.has(S.name)&&!S.isInstancedMesh,"campProps");const A=new Set(["cabinDoor","chimneySmoke","cabin-interior","pond","buildPad","campGround","castleLandmark","townLandmark","campTownSign","farTerrain"]);Fp(i,S=>A.has(S.name)||S.isInstancedMesh===!0,"campVC");{const S=new Set(["homeCabin","dragonStable","watchtower"]),w=new Set(["cabinDoor","chimneySmoke","cabin-interior"]);Of(i,M=>S.has(M.name),"bldMerged",{skip:M=>w.has(M.name),removeEmpty:!1})}if(t==="low"){const S=i.children.filter(R=>R.name.startsWith("campProps_")),w=new Xt;for(const R of S)w.add(R.clone());const M=Gu(w,"campPropsLow",void 0,.85);for(const R of S)i.remove(R);for(const R of[...M.children])R.receiveShadow=!0,i.add(R)}return i.add(hb()),i.add(Pb()),i.add(Lb()),i.add(Db(t==="low"?24:16)),i}function Vp(n,t){return Ub(n,t)}class ga{constructor(t){this.shared=t}by=new Map;add(t,e,i,o=[0,0,0],s=[1,1,1]){const r=new Rt().compose(new I(...i),new dn().setFromEuler(new on(o[0],o[1],o[2])),new I(...s));this.addM(t,e,r)}addColored(t){let e=t.index?t.toNonIndexed():t.clone();for(const o of Object.keys(e.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&o!=="color"&&e.deleteAttribute(o);e.attributes.uv||e.setAttribute("uv",new $t(new Float32Array(e.attributes.position.count*2),2));const i=this.by.get(this.shared.scaled)??[];i.push(e),this.by.set(this.shared.scaled,i)}addM(t,e,i){let o=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(o.attributes))a!=="position"&&a!=="normal"&&a!=="uv"&&o.deleteAttribute(a);o.attributes.uv||o.setAttribute("uv",new $t(new Float32Array(o.attributes.position.count*2),2)),o.attributes.normal||o.computeVertexNormals(),o.applyMatrix4(i),i.determinant()<0&&(o=Wp(o));let s=e;if(!this.shared.special.has(e)){const a=e,l=(a.color??new vt(1,1,1)).clone();a.map&&l.multiply(a.color).multiplyScalar(1.12);const c=o.attributes.position.count,u=new Float32Array(c*3);for(let d=0;d<c;d++)u[d*3]=l.r,u[d*3+1]=l.g,u[d*3+2]=l.b;o.setAttribute("color",new $t(u,3)),s=a.map?this.shared.scaled:this.shared.plain}const r=this.by.get(s)??[];r.push(o),this.by.set(s,r)}limb(t,e,i,o,s,r=8){const a=new I(...e),l=new I(...i),c=a.distanceTo(l),u=new ue(s,o,c,r,1),d=new dn().setFromUnitVectors(new I(0,1,0),l.clone().sub(a).normalize()),f=new Rt().compose(a.clone().add(l).multiplyScalar(.5),d,new I(1,1,1));this.addM(u,t,f)}spike(t,e,i,o,s=6,r=1){const a=new I(...e),l=new I(...i),c=a.distanceTo(l),u=new We(o,c,s,1);u.scale(r,1,1);const d=new dn().setFromUnitVectors(new I(0,1,0),l.clone().sub(a).normalize()),f=new Rt().compose(a.clone().add(l).multiplyScalar(.5),d,new I(1,1,1));this.addM(u,t,f)}build(t,e){let i=0;for(const[o,s]of this.by){const r=je(s,!1);if(!r)continue;r.computeBoundingSphere();const a=new j(r,o);a.name=`${e}_${i++}`,a.castShadow=!0,a.receiveShadow=!0,t.add(a)}}}function Wp(n){const t=n.attributes.position.array,e=n.attributes.normal?.array,i=n.attributes.uv?.array;for(let o=0;o<t.length/9;o++){for(let s=0;s<3;s++){const r=o*9+3+s,a=o*9+6+s;[t[r],t[a]]=[t[a],t[r]],e&&([e[r],e[a]]=[e[a],e[r]])}if(i){const s=o*6+2,r=o*6+4;[i[s],i[r]]=[i[r],i[s]],[i[s+1],i[r+1]]=[i[r+1],i[s+1]]}}return n}function Kf(n,t,e,i,o,s=48,r=16){const a=new nl(n.map(m=>new I(...m)),!1,"centripetal"),l=a.computeFrenetFrames(s,!1),c=[],u=[],d=[],f=[],h=o.clone().offsetHSL(0,.02,-.09),g=new I(0,1,0);for(let m=0;m<=s;m++){const v=m/s,b=v*(t.length-1),_=Math.min(t.length-2,Math.floor(b)),T=b-_,E=T*T*(3-2*T),A=t[_]+(t[_+1]-t[_])*E,S=e[_]+(e[_+1]-e[_])*E,w=a.getPointAt(v),M=a.getTangentAt(v),R=new I().crossVectors(M,g);R.lengthSq()<1e-4&&R.copy(l.binormals[m]),R.normalize();const N=new I().crossVectors(R,M).normalize();for(let U=0;U<=r;U++){const z=U/r*Math.PI*2,Y=Math.cos(z),B=Math.sin(z),tt=w.clone().addScaledVector(R,Y*A).addScaledVector(N,B*A*S);c.push(tt.x,tt.y,tt.z);const G=gr.smoothstep(-B,.3,.6),rt=Math.sin(v*s*.9)>0?o:h,$=i.clone().lerp(rt,G);$.multiplyScalar(1-gr.smoothstep(B,.75,1)*.12),u.push($.r,$.g,$.b),d.push(U/r*2,v*6)}}const y=r+1;for(let m=0;m<s;m++)for(let v=0;v<r;v++){const b=m*y+v,_=b+y;f.push(b,b+1,_,b+1,_+1,_)}const p=new Pe;return p.setAttribute("position",new $t(c,3)),p.setAttribute("color",new $t(u,3)),p.setAttribute("uv",new $t(d,2)),p.setIndex(f),p.computeVertexNormals(),p}function zb(n,t){const e=[],i=[];let o=1/0,s=-1/0,r=1/0,a=-1/0;for(const d of n)o=Math.min(o,d[0]),s=Math.max(s,d[0]),r=Math.min(r,d[2]),a=Math.max(a,d[2]);const l=n[t],c=n.length;for(let d=1;d<c-1;d++){const f=n[(t+d)%c],h=n[(t+d+1)%c];for(const g of[l,f,h])e.push(g[0],g[1],g[2]),i.push((g[0]-o)/(s-o),(g[2]-r)/(a-r))}const u=new Pe;return u.setAttribute("position",new $t(e,3)),u.setAttribute("uv",new $t(i,2)),u.computeVertexNormals(),u}function vn(n,t={}){return new Wt({color:n,roughness:.7,metalness:.04,...t})}const kb=1.45;function Fb(n){const t=X1[n],e=new Xt;e.name=`dragon_${n}`,e.userData.palette=n,e.scale.setScalar(kb);const i=Cn(),o=new vt(t.body),s=new vt(t.belly),r=new vt(t.wing),a=new Wt({color:"#ffffff",vertexColors:!0,map:uc("#ffffff",64),normalMap:i?.scalesNormal??null,normalScale:new lt(.5,.5),roughness:io.scales,metalness:.05}),l=vn(t.body,{map:uc(t.body,64),roughness:.62}),c=vn(t.belly,{roughness:.72}),u=vn(r.clone().offsetHSL(0,.05,-.04),{roughness:.45}),d=vn("#efe2c4",{roughness:.38}),f=vn("#7a6a58",{roughness:.4}),h=vn("#3e3430",{roughness:.35}),g=vn("#fffbf0",{roughness:.2}),y=vn(r.clone().offsetHSL(.45,.4,.15),{roughness:.15,emissive:r.clone().offsetHSL(.45,.4,.1),emissiveIntensity:.25}),p=vn("#14141c",{roughness:.1}),m=vn("#ffffff",{emissive:"#ffffff",emissiveIntensity:.9,roughness:0}),v=vn("#5a2030",{roughness:.6}),b=vn("#fffaf0",{roughness:.3}),_=vn(o.clone().offsetHSL(0,0,-.05),{map:uc(t.body,64),roughness:.6}),T=new Wt({color:t.wing,map:i?.wing??null,side:Ye,transparent:!0,opacity:.9,alphaTest:i?.wing?.05:0,roughness:.5,metalness:0,emissive:t.wing,emissiveIntensity:.18}),E=new Wt({color:"#ffffff",vertexColors:!0,roughness:.45,metalness:.05}),A={scaled:a,plain:E,special:new Set([T])},S=new Xt;S.name="dBody",e.add(S);const M=Kf([[0,.62,-.62],[0,.72,-.34],[0,.8,-.02],[0,.86,.26],[0,1.06,.62],[0,1.18,1.02],[0,1.08,1.4]],[.24,.33,.36,.34,.2,.14,.12],[.95,1,1.05,1.1,1.05,1,1],o,s,40,18),R=new ga(A);R.addColored(M),R.add(new Ot(.25,16,12),l,[0,.62,-.62],[0,0,0],[1,.95,1]);for(const $ of[-1,1])R.add(new Ot(.2,14,10),l,[$*.22,.58,-.5],[0,0,0],[.75,1.1,1.25]),R.add(new Ot(.14,12,10),l,[$*.24,.72,.24],[0,0,0],[.7,1.1,1]);const N=[[[0,1.2,1.3],.08],[[0,1.32,.96],.1],[[0,1.22,.58],.12],[[0,1.1,.26],.15],[[0,1.13,.06],.17],[[0,1.12,-.16],.17],[[0,1.06,-.38],.15],[[0,.92,-.58],.12]];for(const[$,it]of N)R.spike(u,$,[$[0],$[1]+it,$[2]-it*.55],.05,4,.45);for(const $ of[-1,1]){R.limb(l,[$*.27,.58,-.5],[$*.3,.3,-.36],.17,.11,12),R.add(new Ot(.11,10,8),l,[$*.3,.3,-.36]),R.limb(l,[$*.3,.3,-.36],[$*.3,.07,-.46],.1,.075,10),R.add(new Ot(.1,10,8),l,[$*.3,.07,-.39],[0,0,0],[1.05,.6,1.6]),R.limb(l,[$*.26,.72,.22],[$*.28,.38,.3],.12,.085,10),R.add(new Ot(.085,10,8),l,[$*.28,.38,.3]),R.limb(l,[$*.28,.38,.3],[$*.28,.06,.32],.08,.065,10),R.add(new Ot(.085,10,8),l,[$*.28,.06,.37],[0,0,0],[1.05,.6,1.5]);for(let it=-1;it<=1;it++)R.spike(h,[$*.3+it*.05,.05,-.27],[$*.3+it*.06,.01,-.19],.022,5),R.spike(h,[$*.28+it*.045,.05,.48],[$*.28+it*.05,.01,.55],.02,5)}R.build(S,"dBodyParts");const U=new Xt;U.name="head",U.position.set(0,1.08,1.4),S.add(U);const z=new ga(A);z.add(new Ot(.19,18,14),l,[0,.08,.02],[0,0,0],[1.05,.92,1.12]),z.add(new ue(.1,.15,.36,14),l,[0,.03,.26],[Math.PI/2-.12,0,0],[1,1,.72]),z.add(new Ot(.11,14,10),l,[0,.05,.44],[0,0,0],[.95,.7,.75]),z.add(new ue(.08,.12,.32,12),c,[0,-.07,.24],[Math.PI/2+.05,0,0],[1,1,.42]),z.add(new ne(.17,.012,.3),v,[0,-.035,.26]);for(const $ of[-1,1]){z.add(new Ot(.022,8,6),v,[$*.045,.08,.53]);for(let V=0;V<3;V++)z.spike(b,[$*(.07-V*.004),-.025,.36-V*.07],[$*(.07-V*.004),-.07,.36-V*.07],.012,4);z.add(new Ot(.068,14,10),g,[$*.11,.12,.13],[0,0,0],[.8,1,.9]),z.add(new Ot(.045,12,8),y,[$*.145,.12,.165],[0,0,0],[.6,1,.8]),z.add(new Ot(.013,6,6),m,[$*.168,.145,.19]),z.add(new Ot(.06,10,6),l,[$*.1,.19,.12],[0,$*.3,$*-.35],[1.3,.45,.8]);let it=[$*.09,.2,-.02];const St=[[$*.03,.1,-.08],[$*.035,.07,-.11],[$*.03,.02,-.12],[$*.02,-.02,-.1]],Bt=[.045,.036,.027,.018];St.forEach((V,Q)=>{const dt=[it[0]+V[0],it[1]+V[1],it[2]+V[2]];Q<3?z.limb(d,it,dt,Bt[Q],Bt[Q+1],8):z.spike(f,it,dt,Bt[Q],8),Q<3&&z.add(new ki(Bt[Q+1]*1.05,.006,4,10),f,dt,[Math.atan2(V[2],V[1])+Math.PI/2,0,0]),it=dt}),z.spike(d,[$*.15,.13,-.04],[$*.22,.17,-.16],.025,6);for(let V=0;V<3;V++)z.spike(u,[$*.14,.02-V*.04,-.02],[$*(.24+V*.01),.04-V*.07,-.15+V*.01],.03,4,.4);z.spike(u,[$*.16,.18,-.06],[$*.3,.26,-.14],.05,4,.3)}z.build(U,"dHeadParts");{const $=[];for(const St of[-1,1]){const Bt=new Ot(.022,8,8);Bt.scale(.55,1,.6),Bt.translate(St*.16,0,.185),$.push(Bt)}const it=new j(je($,!1),p);it.position.y=.12,it.scale.y=1.25,it.name="pupils",U.add(it)}for(const $ of[-1,1]){const it=new Xt;it.name=$<0?"wingL":"wingR",it.position.set($*.22,1.02,.08);const St=new Xt;St.rotation.set(0,$*1.05,$*.32),St.scale.set($,1,1),it.add(St);const Bt=new ga(A),V=[0,0,0],Q=[.52,.2,-.04],dt=[.98,.32,.04],ot=[[1.62,.12,-.24],[1.5,-.04,-.62],[1.2,-.12,-.92],[.78,-.14,-1.02]],Ct=[.06,-.12,-.72];Bt.limb(_,V,Q,.06,.045,8),Bt.limb(_,Q,dt,.045,.035,8),Bt.add(new Ot(.05,8,6),_,Q),Bt.add(new Ot(.042,8,6),_,dt),Bt.spike(h,dt,[dt[0]+.04,dt[1]+.1,dt[2]+.08],.022,5),ot.forEach((qt,J)=>Bt.limb(_,dt,qt,.028-J*.003,.008,6));const zt=(qt,J,ct,D)=>[(qt[0]+J[0])/2+(ct[0]-(qt[0]+J[0])/2)*D,(qt[1]+J[1])/2+(ct[1]-(qt[1]+J[1])/2)*D,(qt[2]+J[2])/2+(ct[2]-(qt[2]+J[2])/2)*D],Ht=[V,Q,dt,ot[0],zt(ot[0],ot[1],dt,.22),ot[1],zt(ot[1],ot[2],dt,.24),ot[2],zt(ot[2],ot[3],dt,.24),ot[3],zt(ot[3],Ct,dt,.2),Ct];Bt.add(zb(Ht,2),T,[0,0,0]),Bt.build(St,"dWingParts"),S.add(it)}const Y=new Xt;Y.name="tail",Y.position.set(0,.62,-.62),S.add(Y);const B=[[0,0,.05],[0,-.06,-.35],[.06,-.18,-.75],[.16,-.3,-1.12],[.22,-.38,-1.48],[.2,-.42,-1.8]],tt=new ga(A);tt.addColored(Kf(B,[.24,.18,.12,.08,.05,.025],[.95,.95,.95,.95,.9,.8],o,s,36,12));const G=new nl(B.map($=>new I(...$)),!1,"centripetal");for(let $=0;$<7;$++){const it=.06+$*.12,St=G.getPointAt(it),Bt=.22*(1-it)+.03,V=.12*(1-it*.7);tt.spike(u,[St.x,St.y+Bt*.8,St.z],[St.x,St.y+Bt*.8+V,St.z-V*.6],.04*(1-it*.5),4,.45)}const rt=G.getPointAt(1);for(const $ of[-1,1])tt.spike(u,[rt.x,rt.y,rt.z+.05],[rt.x+$*.17,rt.y+.02,rt.z-.12],.07,4,.25);tt.spike(u,[rt.x,rt.y,rt.z+.04],[rt.x,rt.y,rt.z-.24],.09,4,.22),tt.build(Y,"dTailParts");{e.updateMatrixWorld(!0);const $=new Rt().copy(e.matrixWorld).invert(),it=new Map;S.traverse(V=>{const Q=V;if(!Q.isMesh||Array.isArray(Q.material))return;const dt=Q.geometry.index?Q.geometry.toNonIndexed():Q.geometry.clone(),ot=new Rt().multiplyMatrices($,Q.matrixWorld);dt.applyMatrix4(ot);const Ct=ot.determinant()<0?Wp(dt):dt,zt=it.get(Q.material)??[];zt.push(Ct),it.set(Q.material,zt)});const St=new Xt;St.name="dLod",St.visible=!1;let Bt=0;for(const[V,Q]of it){const dt=Object.keys(Q[0].attributes),ot=Q.filter(Ht=>Object.keys(Ht.attributes).length===dt.length&&dt.every(qt=>!!Ht.attributes[qt])),Ct=je(ot,!1);if(!Ct)continue;Ct.computeBoundingSphere();const zt=new j(Ct,V);zt.name=`dLod_${Bt++}`,zt.castShadow=!0,zt.receiveShadow=!0,St.add(zt)}e.add(St)}return e}function Ob(n,t,e){const i=n.userData.animPhase??(n.userData.animPhase=Math.random()*10),o=t+i,s=e==="fly",r=e==="glide",a=s?.75:r?.08:e==="walk"?.12:.07,l=s?9:e==="walk"?5:1.6,c=s||r?.55:e==="walk"?.28:0;for(const[y,p]of[["wingL",-1],["wingR",1]]){const m=n.getObjectByName(y);if(!m)continue;const v=e==="idle"?Math.max(0,Math.sin(o*.7))**6*.45:0;m.rotation.z=p*(c+v-Math.sin(o*l)*a),m.rotation.y=p*(s||r?-.85:-v*.9)}const u=n.getObjectByName("tail");u&&(u.rotation.y=Math.sin(o*1.3)*(s?.3:.24),u.rotation.x=Math.sin(o*.9)*.06+(s||r?.25:0),u.rotation.z=Math.sin(o*1.3+.6)*.05);const d=n.getObjectByName("head");d&&(e==="walk"||e==="fly"||e==="glide"?(d.rotation.y=Math.sin(o*.35)*.05,d.rotation.x=-.16+Math.sin(o*1.1)*.03,d.rotation.z=Math.sin(o*.31)*.03):(d.rotation.y=Math.sin(o*.45)*.35+Math.sin(o*1.3)*.05,d.rotation.x=-.05+Math.sin(o*.8)*.07,d.rotation.z=Math.sin(o*.31)*.12));const f=n.getObjectByName("dBody");f&&(f.position.y=e==="idle"?Math.sin(o*2)*.012:0,f.scale.set(1+Math.sin(o*2)*.012,1,1));const h=Math.sin(o*.9)>.965?.12:1,g=n.getObjectByName("pupils");g&&(g.scale.y=1.25*h)}function Ue(n){return new Wt({color:n,roughness:.78,metalness:0})}const Jf={field_monster:{body:"#7a5a32",belly:"#e8d2a0",head:"#8a6840",accent:"#d09050",fur:"#5a3e20",eye:"#fff8f0"},stone_mite:{body:"#7a7e88",belly:"#c8ccd4",head:"#6a7078",accent:"#b0b8c0",fur:"#4a5058",eye:"#e8f0ff"},forest_sprite:{body:"#3e8a48",belly:"#c8e878",head:"#4a9a52",accent:"#f0d060",fur:"#2a6a34",eye:"#fffde8"},frost_puff:{body:"#d8ecf8",belly:"#ffffff",head:"#c8e0f4",accent:"#7ec8f0",fur:"#f4fbff",eye:"#1a3048"},river_skimmer:{body:"#3a8aaa",belly:"#b8ecf0",head:"#2e7a9a",accent:"#f0c040",fur:"#246878",eye:"#fff8f0"},sand_wisp:{body:"#e0b868",belly:"#fff0c8",head:"#d0a050",accent:"#f8e090",fur:"#c49848",eye:"#4a3020"},ember_mite:{body:"#8a3030",belly:"#f0a050",head:"#a03830",accent:"#ff8020",fur:"#5a1818",eye:"#fff4d0"}};function Bb(n,t,e,i=1){const o=e==="spiky"?32:e==="shaggy"?46:e==="fluff"?28:e==="leaf"?14:12;for(let s=0;s<o;s++){const r=(s*47+i*13)%100/100,a=(s*23+i*7)%100/100,l=r*Math.PI*2,c=.28+a*1.85,u=e==="shaggy"?.62:e==="spiky"?.6:e==="fluff"?.64:.46,d=Math.cos(l)*Math.sin(c)*u,f=.78+Math.cos(c)*u*.9,h=Math.sin(l)*Math.sin(c)*u*.92;let g;if(e==="spiky")g=new j(new We(.055,.38,5),Ue(s%4===0?t.accent:t.fur)),g.position.set(d,f,h),g.lookAt(0,.78,0),g.rotateX(Math.PI);else if(e==="leaf")g=new j(new Ot(.08,6,5),Ue(s%2?t.fur:t.accent)),g.scale.set(.7,.35,1.1),g.position.set(d*.75,f,h*.75);else if(e==="wispy")g=new j(new We(.07,.2,5),Ue(t.fur)),g.position.set(d*.75,f+.05,h*.75),g.rotation.x=Math.PI;else if(e==="ember")g=new j(new We(.04,.16,5),Ue(s%3===0?t.accent:t.fur)),g.position.set(d*.75,f,h*.75),g.lookAt(0,.78,0);else if(e==="fluff")g=new j(new Ot(.11,7,6),Ue(s%3===0?t.accent:t.fur)),g.scale.set(1.15,1.05,1.15),g.position.set(d,f+.04,h);else{const y=.18+s%5*.03;g=new j(new Do(.045,y,3,6),Ue(s%3===0?t.accent:t.fur)),g.position.set(d,f,h),g.lookAt(0,.78,0),g.rotateX(Math.PI/2)}g.name="tuft",n.add(g)}if(e==="shaggy")for(let s=0;s<10;s++){const r=s/10*Math.PI*2,a=new j(new Do(.055,.28,3,6),Ue(s%2?t.fur:t.accent));a.position.set(Math.cos(r)*.42,1.18,Math.sin(r)*.36),a.lookAt(0,.85,0),a.rotateX(Math.PI/2),a.name="tuft",n.add(a)}}function Hb(n){const t=new Set(["mBody","mArmL","mArmR"]),e=[];for(const a of[...n.children]){const l=a;if(!l.isMesh||t.has(l.name))continue;l.updateMatrix();const c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(const h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);c.applyMatrix4(l.matrix);const u=l.material.color??new vt(1,1,1),d=c.attributes.position.count,f=new Float32Array(d*3);for(let h=0;h<d;h++)f[h*3]=u.r,f[h*3+1]=u.g,f[h*3+2]=u.b;c.setAttribute("color",new $t(f,3)),e.push(c),n.remove(l)}if(!e.length)return;const i=je(e,!1);if(!i)return;i.computeBoundingSphere();const o=new j(i,Qf());o.name="mStatic",n.add(o);const s=[i.clone()];for(const a of["mBody","mArmL","mArmR"]){const l=n.getObjectByName(a);if(!l)continue;l.updateMatrix();const c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(const h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);c.applyMatrix4(l.matrix);const u=l.material.color,d=c.attributes.position.count,f=new Float32Array(d*3);for(let h=0;h<d;h++)f[h*3]=u.r,f[h*3+1]=u.g,f[h*3+2]=u.b;c.setAttribute("color",new $t(f,3)),s.push(c)}const r=je(s,!1);if(r){r.computeBoundingSphere();const a=new j(r,Qf());a.name="mLod",a.visible=!1,n.add(a)}}let Gb=null;function Qf(){return Gb??=new Wt({color:"#ffffff",vertexColors:!0,roughness:.7,metalness:0})}function Vb(n){return n==="field_monster"?"shaggy":n==="stone_mite"?"spiky":n==="frost_puff"?"fluff":n==="forest_sprite"?"leaf":n==="sand_wisp"||n==="river_skimmer"?"wispy":"ember"}function Wb(n="field_monster"){const t=Jf[n]??Jf.field_monster,e=new Xt;e.name=n,e.userData.kind=n,e.scale.setScalar(n==="frost_puff"?1.25:n==="stone_mite"?1.2:1.15);const i=new j(new Ot(.48,16,12),Ue(t.body));i.scale.set(n==="river_skimmer"?1.25:1.05,n==="river_skimmer"?.7:1.25,n==="stone_mite"?1.1:.95),i.position.y=n==="river_skimmer"?.55:.78,i.name="mBody",e.add(i);const o=new j(new Ot(.28,12,10),Ue(t.belly));o.scale.set(.9,1,.45),o.position.set(0,i.position.y-.08,.32),e.add(o);const s=new j(new Ot(n==="frost_puff"?.38:.32,14,12),Ue(t.head));if(s.position.set(0,n==="river_skimmer"?.95:1.35,.08),e.add(s),n==="stone_mite")for(const c of[-1,1]){const u=new j(new We(.08,.32,6),Ue(t.accent));u.position.set(c*.16,1.68,.02),u.rotation.z=c*.25,e.add(u)}else if(n==="forest_sprite"){const c=new j(new We(.12,.28,6),Ue(t.fur));c.position.set(0,1.68,0),e.add(c)}else for(const c of[-1,1]){const u=new j(new We(.1,.28,6),Ue(t.accent));u.position.set(c*.22,s.position.y+.23,0),u.rotation.z=c*.45,e.add(u)}const r=s.position.y+.05;for(const c of[-1,1]){const u=new j(new Ot(.1,10,8),Ue(n==="frost_puff"?"#e8f4ff":t.eye));u.position.set(c*.12,r,.26),e.add(u);const d=new j(new Ot(.045,8,6),Ue("#2a2038"));d.position.set(c*.12,r,.34),d.name="pupil",e.add(d);const f=new j(new Ot(.02,6,6),Ue("#ffffff"));f.position.set(c*.1,r+.03,.37),e.add(f)}const a=new j(new ki(.1,.018,6,10,Math.PI),Ue("#4a3058"));a.position.set(0,s.position.y-.13,.32),a.rotation.x=Math.PI,e.add(a);for(const c of[-1,1]){const u=new j(new Do(.07,.22,4,8),Ue(t.body));u.position.set(c*.42,i.position.y+.07,.05),u.rotation.z=c*.6,u.name=c<0?"mArmL":"mArmR",e.add(u);const d=new j(new Do(.08,.18,4,8),Ue(t.fur));d.position.set(c*.16,.28,.02),e.add(d);const f=new j(new Ot(.11,8,6),Ue(t.accent));f.scale.set(1.1,.55,1.3),f.position.set(c*.16,.08,.06),e.add(f)}const l=new j(new Ot(.1,8,6),Ue(t.head));return l.position.set(0,.55,-.42),e.add(l),Bb(e,t,Vb(n),n.length),Hb(e),e.traverse(c=>{const u=c;u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),e}const th=new Map;function Xb(n,t){let e=th.get(n);return e||(e=t(),th.set(n,e)),e}function $b(n,t){return new Wt({color:n,map:t?.map,roughness:t?.roughness??.75,metalness:.05})}function Yb(n){return Fb(n)}function eh(n,t,e){Ob(n,t,e)}function qb(n,t,e){const i=n.getObjectByName("mBody");i&&(i.position.y=.72+Math.sin(t*2.4)*(e==="hurt"?.02:.04),e==="hurt"&&(i.rotation.z=Math.sin(t*20)*.08));const o=n.getObjectByName("mArmL"),s=n.getObjectByName("mArmR");e==="attack"?(o&&(o.rotation.x=-Math.sin(t*8)*.9),s&&(s.rotation.x=Math.sin(t*8)*.9)):(o&&(o.rotation.z=Math.sin(t*1.5)*.15),s&&(s.rotation.z=-Math.sin(t*1.5)*.15))}function Xp(n){const t=n==="wood"?fl(64):Ir(64),e=n==="wood"?"#8b5a2b":"#7a7f88",i=new j(Xb("block",()=>new ne(1,1,1)),$b(e,{map:t,roughness:n==="stone"?.9:.7}));return i.castShadow=!0,i.receiveShadow=!0,i}const jb="#d8b07a",Zb="#b0b4bc",Kb="#b8e4f8";function nh(){return st(jb,{map:kn("light"),rough:.84,metal:0,glow:.06})}function Jb(){return st("#e6c090",{map:Oa(),rough:.86,metal:0,glow:.05})}function ih(){return st(Zb,{rough:.88,metal:0,glow:.04})}function Qb(n){return st(n?"#8a9098":"#c05040",{map:Ao(64),rough:.82,metal:0,glow:.08})}function tw(){return st("#8a4a28",{map:kn("dark"),rough:.8,metal:0,glow:.05})}function ew(){return st(Kb,{rough:.12,metal:0,transparent:!0,opacity:.45,glow:.12})}function $p(n,t="wood"){const e=new Xt;e.name=`house_${n}`;const i=t==="stone"?ih():Jb(),o=t==="stone"?ih():nh();if(n==="floor"||n==="block"){const s=n==="floor"?.14:1,r=n==="floor"?.07:.5,a=new j(new ne(1,s,1),n==="floor"?nh():i);a.position.set(0,r,0),e.add(a)}else if(n==="wall"){const s=new j(new ne(1,1.28,.16),i);s.position.set(0,.64,0),e.add(s);for(const r of[-1,1]){const a=new j(new ue(.085,.085,1.28,8),o);a.position.set(r*.46,.64,0),e.add(a)}}else if(n==="roof"){const s=Qb(t==="stone"),r=.42,a=new j(new ne(1.16,.12,.78),s);a.position.set(0,.26,-.28),a.rotation.x=r;const l=new j(new ne(1.16,.12,.78),s);l.position.set(0,.26,.28),l.rotation.x=-r;const c=new j(new ne(1.2,.1,.14),o);c.position.set(0,.5,0),e.add(a,l,c)}else if(n==="door"){const s=new j(new ne(.16,1.28,.16),o);s.position.set(-.42,.64,0);const r=new j(new ne(.16,1.28,.16),o);r.position.set(.42,.64,0);const a=new j(new ne(1,.16,.18),o);a.position.set(0,1.22,0);const l=new j(new ne(.68,1.08,.08),tw());l.position.set(0,.56,0);const c=new j(new Ot(.045,8,6),st("#e8c040",{rough:.35,metal:.15,glow:.2}));c.position.set(.24,.58,.06);const u=new j(new ne(.08,.12,.02),st("#c8a050",{rough:.4,metal:.1,glow:.1}));u.position.set(.24,.58,.045),e.add(s,r,a,l,u,c)}else if(n==="window"){const s=new j(new ne(.16,1.28,.16),i);s.position.set(-.42,.64,0);const r=new j(new ne(.16,1.28,.16),i);r.position.set(.42,.64,0);const a=new j(new ne(.68,.38,.16),i);a.position.set(0,.19,0);const l=new j(new ne(.68,.2,.16),i);l.position.set(0,1.18,0);const c=new j(new ne(.62,.58,.05),ew());c.position.set(0,.72,0);const u=new j(new ne(.78,.08,.22),o);u.position.set(0,.4,.03);const d=new j(new ne(.78,.08,.2),o);d.position.set(0,1.04,0);const f=new j(new ne(.62,.05,.06),o);f.position.set(0,.72,.03);const h=new j(new ne(.05,.58,.06),o);h.position.set(0,.72,.03),e.add(s,r,a,l,u,d,c,f,h)}return e.traverse(s=>{const r=s;r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e}function Yp(n){const t=$p(n,"wood");return t.traverse(e=>{const i=e;i.isMesh&&(i.material=new Wt({color:"#f0e080",transparent:!0,opacity:.42,depthWrite:!1,roughness:.8,metalness:0}),i.castShadow=!1)}),t}function hn(n,t={}){return new Wt({color:n,roughness:t.rough??.7,metalness:t.metal??.05,emissive:t.emissive??"#000000",emissiveIntensity:t.ei??0})}function Zs(){const n=new Xt;return n.position.set(.35,-.38,-.55),n.rotation.set(.15,.35,-.25),n}function Ks(n,t="#f0c9a8",e="#3a7fd4"){const i=new j(new ue(.045,.055,.28,8),hn(t));i.rotation.x=Math.PI/2.2,i.position.set(0,.02,.16),n.add(i);const o=new j(new ue(.058,.06,.055,10),hn(e));o.rotation.x=Math.PI/2.2,o.position.set(0,.02,.28),n.add(o);const s=new j(new ne(.12,.08,.16),hn(t));s.position.set(.02,0,0),n.add(s)}function nw(n="#f0c9a8",t="#3a7fd4"){const e=new Xt;e.name="fpTools";const i=new Xt;i.name="sword";{const u=Zs();Ks(u,n,t);const d=new j(new ue(.02,.022,.1,6),hn("#3a3028"));d.rotation.x=.4,d.position.set(.03,.02,-.12),u.add(d);const f=new j(new ne(.16,.028,.028),hn("#4a5058",{metal:.4}));f.position.set(.03,.06,-.16),f.rotation.x=.4,u.add(f);const h=new j(new ne(.035,.02,.55),hn("#9aa3ad",{rough:.35,metal:.45}));h.position.set(.03,.1,-.42),h.rotation.x=.35,u.add(h),i.add(u)}const o=new Xt;o.name="axe";{const u=Zs();Ks(u,n,t);const d=new j(new ue(.018,.022,.55,6),hn("#6a3a1c"));d.rotation.x=.45,d.position.set(.03,.08,-.28),u.add(d);const f=new j(new ne(.18,.12,.05),hn("#8a9098",{metal:.55,rough:.35}));f.position.set(.08,.22,-.48),f.rotation.x=.45,u.add(f),o.add(u)}const s=new Xt;s.name="pickaxe";{const u=Zs();Ks(u,n,t);const d=new j(new ue(.016,.02,.52,6),hn("#5a3820"));d.rotation.x=.45,d.position.set(.03,.08,-.26),u.add(d);const f=new j(new ne(.28,.05,.045),hn("#6a7078",{metal:.6,rough:.32}));f.position.set(.03,.22,-.46),f.rotation.x=.45,f.rotation.z=.15,u.add(f),s.add(u)}const r=new Xt;r.name="water_bucket";{const u=Zs();Ks(u,n,t);const d=new j(new ue(.09,.07,.14,10),hn("#6a6e78",{metal:.35,rough:.45}));d.position.set(.04,-.08,-.12),u.add(d);const f=new j(new ki(.07,.008,6,10,Math.PI),hn("#4a4e56",{metal:.5}));f.rotation.x=Math.PI,f.position.set(.04,0,-.12),u.add(f),r.add(u)}const a=r.clone();a.name="water_bucket_full";const l=new j(new ue(.08,.065,.03,10),hn("#3aa0d0",{rough:.2,metal:.15,emissive:"#1a5080",ei:.2}));l.position.set(.04,-.02,-.12),a.children[0]?.add(l);const c=new Xt;c.name="torch";{const u=Zs();Ks(u,n,t);const d=new j(new ue(.018,.022,.38,6),hn("#6a4020"));d.rotation.x=.5,d.position.set(.03,.08,-.22),u.add(d);const f=new j(new We(.045,.12,6),new An({color:"#ff8a2a"}));f.name="torchFlame",f.position.set(.03,.26,-.38),u.add(f),c.add(u)}e.add(i,o,s,r,a,c);for(const u of e.children)Fp(u,()=>!1,"fpToolVC");return qp(e,"sword"),e}function qp(n,t){const e=t==="water"?"water_bucket_full":t;let i=!1;for(const o of n.children){o.name===e||e==="water_bucket_full"&&o.name;const s=["sword","axe","pickaxe","water_bucket","water_bucket_full","torch"].includes(o.name);o.visible=s?o.name===e:!1,o.visible&&(i=!0)}if(!i){const o=n.getObjectByName("sword");o&&(o.visible=!0)}}function iw(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,230,160,0.95)"),i.addColorStop(.7,"rgba(255,140,40,0.45)"),i.addColorStop(1,"rgba(255,80,0,0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const o=new ks(t);return o.needsUpdate=!0,o}const ow=iw();class sw{bursts=[];root;budget;constructor(t,e=100){this.root=new Xt,this.root.name="fx",t.add(this.root),this.budget=e}setBudget(t){this.budget=t}spawn(t,e,i,o,s,r,a=.5){e=Math.min(e,Math.max(4,Math.floor(this.budget/4)));const l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e);for(let g=0;g<e;g++){l[g*3]=t.x,l[g*3+1]=t.y,l[g*3+2]=t.z;const y=Math.random()*Math.PI*2,p=o*(.4+Math.random());c[g*3]=Math.cos(y)*p,c[g*3+1]=a*p+Math.random()*p,c[g*3+2]=Math.sin(y)*p,u[g]=s*(.6+Math.random()*.4)}const d=new Pe;d.setAttribute("position",new Te(l,3));const f=new Ua({color:i,size:r,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!0}),h=new su(d,f);if(this.root.add(h),this.bursts.push({points:h,vel:c,life:u,maxLife:s,alive:!0}),this.bursts.length>24){const g=this.bursts.shift();g&&this.disposeBurst(g)}}disposeBurst(t){this.root.remove(t.points),t.points.geometry.dispose(),t.points.material.dispose(),t.alive=!1}hitSparks(t){this.spawn(t,14,16765056,4,.45,.12,.8)}tamingHearts(t){this.spawn(t.clone().add(new I(0,.8,0)),10,16738984,1.2,.9,.18,1.4)}fireBreath(t,e){const i=t.clone().add(e.clone().multiplyScalar(.6));this.spawn(i,16,16736288,3.5,.5,.14,.2)}cone=null;coneLight=null;coneDir=new I;coneOn=!1;setFireCone(t,e,i){if(this.coneOn=t,i&&this.coneDir.copy(i).normalize(),!this.cone){const o=Math.min(72,Math.max(28,this.budget)),s=new Float32Array(o*3),r=new Float32Array(o*3),a=new Pe;a.setAttribute("position",new Te(s,3)),a.setAttribute("color",new Te(r,3));const l=new Float32Array(o);for(let u=0;u<o;u++)l[u]=1;a.setAttribute("sizeScale",new Te(l,1));const c=new Ua({vertexColors:!0,size:.85,map:ow,transparent:!0,opacity:.95,depthWrite:!1,sizeAttenuation:!0,blending:hr,alphaTest:.02});c.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("void main() {",`attribute float sizeScale;
void main() {`).replace("gl_PointSize = size;","gl_PointSize = size * sizeScale;")},this.cone=new su(a,c),this.cone.name="fireCone",this.cone.frustumCulled=!1,this.root.add(this.cone),this.coneLight=new ul(16748584,0,5.5,2),this.coneLight.name="fireConeLight",this.root.add(this.coneLight)}if(this.cone.visible=t,this.coneLight){const o=1.7+Math.sin(performance.now()*.02)*.5+Math.random()*.3;this.coneLight.intensity=t?o:0}t&&e&&this.placeCone(e,this.coneDir)}isFireConeOn(){return this.coneOn}placeCone(t,e){if(!this.cone)return;const i=this.cone.geometry.attributes.position,o=this.cone.geometry.attributes.color,s=this.cone.geometry.attributes.sizeScale,r=i.array,a=o.array,l=i.count,c=7.2,u=Math.abs(e.y)<.9?new I(0,1,0):new I(1,0,0),d=new I().crossVectors(e,u).normalize(),f=new I().crossVectors(d,e).normalize();for(let h=0;h<l;h++){const g=Math.pow((h+.35)/l,.68)*c+Math.random()*.28,y=.05+g*.14,p=Math.random()*Math.PI*2,m=Math.random()*y;r[h*3]=t.x+e.x*g+d.x*Math.cos(p)*m+f.x*Math.sin(p)*m,r[h*3+1]=t.y+e.y*g+.04+d.y*Math.cos(p)*m+f.y*Math.sin(p)*m,r[h*3+2]=t.z+e.z*g+d.z*Math.cos(p)*m+f.z*Math.sin(p)*m;const v=Math.min(1,g/c);a[h*3]=1,a[h*3+1]=.95-v*.68,a[h*3+2]=.28-v*.24,s&&s.setX(h,1.35-v*.95)}i.needsUpdate=!0,o.needsUpdate=!0,s&&(s.needsUpdate=!0),this.coneLight&&this.coneLight.position.copy(t).addScaledVector(e,2.1)}footDust(t){this.spawn(t.clone().setY(t.y+.05),6,12890256,1.2,.35,.1,.3)}levelUp(t){this.spawn(t.clone().add(new I(0,1,0)),28,15784056,2.5,1.1,.16,2)}update(t){if(this.coneOn&&this.cone){const e=this.cone.material;e.opacity=.75+Math.sin(performance.now()/80)*.15}for(const e of this.bursts){if(!e.alive)continue;const i=e.points.geometry.attributes.position,o=i.array;let s=!1;for(let r=0;r<e.life.length;r++){if(e.life[r]-=t,e.life[r]<=0){o[r*3+1]=-999;continue}s=!0,o[r*3]+=e.vel[r*3]*t,o[r*3+1]+=e.vel[r*3+1]*t,o[r*3+2]+=e.vel[r*3+2]*t,e.vel[r*3+1]-=6*t;const a=e.points.material;a.opacity=Math.max(0,e.life[r]/e.maxLife)}i.needsUpdate=!0,s||this.disposeBurst(e)}this.bursts=this.bursts.filter(e=>e.alive)}}function yl(n,t){return n==="auto"?t??"medium":n}function _l(n){return n==="low"?{tier:n,pixelRatioCap:1,shadows:!1,shadowMapSize:0,terrainSegments:40,propBudget:.4,particles:40,anisotropy:1}:n==="high"?{tier:n,pixelRatioCap:1.5,shadows:!0,shadowMapSize:1024,terrainSegments:72,propBudget:.85,particles:140,anisotropy:4}:{tier:"medium",pixelRatioCap:1.25,shadows:!0,shadowMapSize:512,terrainSegments:56,propBudget:.6,particles:90,anisotropy:2}}class rw{samples=[];max=90;slowStreak=0;suggested="medium";push(t){this.samples.push(t),this.samples.length>this.max&&this.samples.shift();const e=this.samples.reduce((i,o)=>i+o,0)/this.samples.length;e>22?this.slowStreak++:this.slowStreak=Math.max(0,this.slowStreak-1),this.slowStreak>45?this.suggested="low":e<14&&this.slowStreak===0?this.suggested="high":e<18&&(this.suggested="medium")}stats(){if(!this.samples.length)return{avgMs:0,p95Ms:0,n:0};const t=[...this.samples].sort((o,s)=>o-s),e=t.reduce((o,s)=>o+s,0)/t.length,i=t[Math.min(t.length-1,Math.floor(t.length*.95))];return{avgMs:e,p95Ms:i,n:t.length}}}function vl(n,t,e){n.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixelRatioCap)),n.shadowMap.enabled=e.shadows,n.shadowMap.type=Ch,t.castShadow=e.shadows,e.shadows&&(t.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),t.shadow.camera.near=2,t.shadow.camera.far=90,t.shadow.camera.left=-40,t.shadow.camera.right=40,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,t.shadow.bias=-15e-5,t.shadow.normalBias=.04)}function jp(n){let t=0,e=0;const i=new Set;return n.traverse(o=>{const s=o;if(!s.isMesh)return;e++;const r=s.geometry;r?.index?t+=r.index.count/3:r?.attributes?.position&&(t+=r.attributes.position.count/3);const a=Array.isArray(s.material)?s.material:[s.material];for(const l of a){const c=l;for(const u of["map","normalMap","roughnessMap","emissiveMap"]){const d=c[u];d&&i.add(d)}}}),{triangles:Math.round(t),meshes:e,textures:i.size}}const pc={full:"./icons/hud/heart-full.svg",half:"./icons/hud/heart-half.svg",empty:"./icons/hud/heart-empty.svg"},Zp={sword:"./icons/hud/hotbar-01-sword.svg",dragon_book:"./icons/hud/hotbar-02-book.svg",bread:"./icons/hud/hotbar-03-bread.svg",loop_staff:"./icons/hud/hotbar-04-staff.svg",drumstick:"./icons/hud/hotbar-05-drumstick.svg",tunic:"./icons/hud/hotbar-06-shirt.svg",round_charm:"./icons/hud/hotbar-07-object.svg",block_wood:"./icons/hud/hotbar-wood.svg",block_stone:"./icons/hud/hotbar-stone.svg",axe:"./icons/hud/hotbar-axe.svg",pickaxe:"./icons/hud/hotbar-pickaxe.svg",water_bucket:"./icons/hud/hotbar-bucket.svg",water_bucket_full:"./icons/hud/hotbar-bucket-full.svg",torch:"./icons/hud/hotbar-torch.svg",wood_log:"./icons/hud/hotbar-wood.svg",berry:"./icons/hud/hotbar-berry.svg",fruit:"./icons/hud/hotbar-fruit.svg",water:"./icons/hud/hotbar-bucket-full.svg",cheese:"./icons/hud/hotbar-bread.svg",iron_sword:"./icons/hud/hotbar-01-sword.svg",shield:"./icons/hud/hotbar-07-object.svg",empty:""};function aw(n,t,e){n.innerHTML="";for(let i=0;i<e;i++){const o=document.createElement("img");o.width=44,o.height=44,o.alt="heart",o.className="heart-img";const s=t-i;s>=1?o.src=pc.full:s>0?o.src=pc.half:o.src=pc.empty,n.appendChild(o)}}function lw(n){const t=n.querySelector('.heart-img:not([src*="empty"])');t&&(t.classList.add("punch"),setTimeout(()=>t.classList.remove("punch"),80))}function cw(n,t,e,i){n.innerHTML="";const o=document.createElement("div");o.className="inv-title",o.textContent="Inventory",n.appendChild(o);const s=document.createElement("div");s.className="hotbar-row",t.forEach((r,a)=>{const l=document.createElement("button");l.type="button",l.className="slot"+(a===e?" selected":""),l.title=r.label,l.setAttribute("aria-label",r.label);const c=Zp[r.id]??"";l.innerHTML=`<span class="idx">${a+1}</span>${c?`<img class="icon-img" src="${c}" alt="" width="42" height="42" />`:""}<span class="qty">${r.count}</span><span class="slot-tip">${r.label}</span>`,l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),i?.(a)}),l.addEventListener("pointerdown",u=>u.stopPropagation()),s.appendChild(l)}),n.appendChild(s),Kp(t[e]?.label??"")}function Kp(n){const t=document.getElementById("selected-item");t&&(t.textContent=n?`Holding: ${n}`:"")}function He(n){const t=document.getElementById("context-prompt");if(t){if(!n){t.classList.remove("show"),t.textContent="";return}t.textContent=n,t.classList.add("show")}}function Xe(n){const t=document.getElementById("crosshair");t&&(t.classList.remove("on-target","can-use"),n==="target"&&t.classList.add("on-target"),n==="use"&&t.classList.add("can-use"))}function uw(n,t,e,i=!1){const o=document.getElementById("dmg-layer");if(!o)return;const s=document.createElement("div");s.className="dmg-floater"+(i?" heal":""),s.textContent=e,s.style.left=`${n}px`,s.style.top=`${t}px`,o.appendChild(s),setTimeout(()=>s.remove(),750)}function dw(n){const t=document.getElementById("level-fill"),e=document.getElementById("lev-cur"),i=document.getElementById("lev-next");t&&(t.style.width=`${Math.round(n.player.levelProgress*100)}%`),e&&(e.textContent=String(n.player.level)),i&&(i.textContent=String(n.player.level+1))}function Rs(n){const t=document.getElementById("mode-pill");t&&(n==="safe_build"?(t.textContent="Safe Build",t.className="pill ready"):(t.textContent="Adventure",t.className="pill warn"))}function ji(n,t){const e=document.getElementById("offline-pill");e&&(e.textContent=t,e.className=n?"pill ready":"pill dim")}function br(n,t=!1){const e=document.getElementById("detector");e&&(e.textContent=`Tracker: ${n}`,e.className=t?"pill warn":"pill dim")}function xa(n){const t=document.getElementById("objective");t&&(t.textContent=n)}let oh=0;function It(n,t=2400){const e=document.getElementById("toast");e&&(e.textContent=n,e.classList.add("show"),window.clearTimeout(oh),oh=window.setTimeout(()=>e.classList.remove("show"),t))}function Jp(n,t){if(n.innerHTML="",!t.length){const e=document.createElement("p");e.className="inv-empty",e.textContent="Your backpack is empty.",n.appendChild(e);return}for(const e of t){if(e.count<=0)continue;const i=document.createElement("div");i.className="inv-cell",i.title=e.label;const o=Zp[e.id]??"";i.innerHTML=`${o?`<img class="icon-img" src="${o}" alt="" width="42" height="42" />`:""}<span class="qty">${e.count}</span><span class="slot-tip">${e.label}</span>`,n.appendChild(i)}}function fw(n){const t=document.getElementById("coin-pill");t&&(t.textContent=`Coins ${Math.max(0,Math.floor(n||0))}`)}const hw="modulepreload",pw=function(n,t){return new URL(n,t).href},sh={},mw=function(t,e,i){let o=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(e.map(c=>{if(c=pw(c,i),c in sh)return;sh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!i)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===c&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":hw,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((g,y)=>{h.addEventListener("load",g),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};async function gw(n,t){if(n.length===0)return"empty";for(const e of n)if((t[e]??0)>0)return"ready";return"failed"}const xw="0.8.1",Ml=xw,yw="Dragon Adventures 0.8.1 — reliable taps for fire, feeding, and mounting",_w="da-simulate-update-hang";async function vw(n){await n.flushSave();const t=n.now??(()=>Date.now()),e=n.sleep??(r=>new Promise(a=>setTimeout(a,r))),i=n.timeoutMs??3e3;let o=!1;const s=n.onControllerChange(()=>{o=!0});try{if(!n.simulateHang&&(n.postSkipWaiting(),n.updateSW))try{await Promise.race([n.updateSW(!0),e(400)])}catch{}if(n.waitUntilCanReload)try{await n.waitUntilCanReload()}catch{}const r=t()+i;for(;!o&&t()<r;)await e(Math.min(100,r-t()));return n.reload(),{flushed:!0,gotControllerChange:o,reloaded:!0}}finally{s()}}function Mw(n=globalThis.sessionStorage){try{return n?.getItem(_w)==="1"}catch{return!1}}const bw=/^\d+\.\d+\.\d+[a-z0-9.-]*$/i;function ww(n){let t;try{t=JSON.parse(n)}catch{return{ok:!1,reason:"json"}}if(!t||typeof t!="object"||Array.isArray(t))return{ok:!1,reason:"json"};const e=t.version;if(typeof e!="string"||!e.trim())return{ok:!1,reason:"missing"};const i=e.trim();return bw.test(i)?{ok:!0,version:i}:{ok:!1,reason:"odd"}}function Sw(n,t){return t.ok?t.version!==n:!1}let Qp=null,mu=null,zo=null,Pa=!1,mc=0;const Ew=typeof navigator<"u"&&"serviceWorker"in navigator&&!!navigator.serviceWorker.controller;function Tw(){mc||(mc=window.setTimeout(()=>{mc=0;const n=document.getElementById("update-banner");n&&!n.classList.contains("hidden")&&!Pa&&bl()},1e4))}function Aw(n){zo=n;const t=()=>{$u()&&Yu()},e=i=>{i&&(i.addEventListener("statechange",()=>{i.state==="installed"&&t()}),i.state==="installed"&&t())};e(n.installing),e(n.waiting),n.addEventListener("updatefound",()=>e(n.installing))}async function Cw(n=15e3){const t=Date.now()+n;for(;Date.now()<t;){const e=zo??await navigator.serviceWorker.getRegistration().catch(()=>null);if(e?.waiting){try{e.waiting.postMessage({type:"SKIP_WAITING"})}catch{}return!0}if(e?.installing){await new Promise(i=>setTimeout(i,200));continue}return!0}return!0}function Rw(n){mu=n}function Xu(){const n=document.getElementById("title");return!!n&&!n.classList.contains("hidden")}function Pw(){try{return new URL("sw.js",document.baseURI).href}catch{return""}}function $u(n=navigator.serviceWorker.controller){if(!n||!n.scriptURL)return!1;const t=Pw();return!!t&&n.scriptURL===t}function Va(n,t){const e=document.getElementById("update-banner");if(!e)return;const i=document.getElementById("update-banner-msg");i&&(i.textContent=t??"Update ready — Save and restart to get the latest Dragon Adventures."),e.classList.toggle("hidden",!n),n&&Tw()}async function t0(){try{const n=await fetch(new URL("VERSION.json",document.baseURI).toString(),{cache:"no-store"});if(!n.ok)return console.debug("[version-check] non-200",n.status),"";const t=await n.text(),e=ww(t);return e.ok?e.version:(console.debug("[version-check] ignore",e.reason),"")}catch(n){return console.debug("[version-check] network",n),""}}async function bl(){if(!Pa){Pa=!0;try{const n=zo??await navigator.serviceWorker.getRegistration().catch(()=>null);await vw({flushSave:async()=>{mu&&await mu()},postSkipWaiting:()=>{n?.waiting&&n.waiting.postMessage({type:"SKIP_WAITING"})},updateSW:Qp??void 0,onControllerChange:t=>{const e=()=>t();return navigator.serviceWorker.addEventListener("controllerchange",e),()=>navigator.serviceWorker.removeEventListener("controllerchange",e)},reload:()=>location.reload(),timeoutMs:3e3,simulateHang:Mw(),waitUntilCanReload:()=>Cw(15e3)})}finally{Pa=!1}}}async function Yu(n){if(!$u()){console.debug("[sw] skip update UI — controller is not this build's sw.js",navigator.serviceWorker.controller?.scriptURL);return}if(!Ew){console.debug("[sw] skip update UI — first install (no controller when this page loaded)");return}const t=await t0(),e=t?`v${t}`:"a newer build";if(Xu()){Va(!0,`Update ready: ${e}. Applying…`),await bl();return}Va(!0,`Update available — tap to update (${e}).`)}function Iw(){document.getElementById("btn-update")?.addEventListener("click",()=>{bl()}),document.getElementById("btn-update-later")?.addEventListener("click",()=>{Va(!1)})}async function lr(){try{const n=zo??await navigator.serviceWorker.getRegistration();if(!n)return;zo=n,await n.update(),n.waiting&&await Yu()}catch{}}async function ya(){try{const n=await t0();if(!Sw(Ml,n?{ok:!0,version:n}:{ok:!1,reason:"missing"}))return;if(!$u()){console.debug("[version-check] skip prompt — not own controller yet"),await lr();return}Va(!0,`Update available — tap to update (v${n}).`),await lr(),(zo??await navigator.serviceWorker.getRegistration())?.waiting&&Xu()&&await bl()}catch(n){console.debug("[version-check] self-check swallowed",n)}}async function Lw(){if(!("serviceWorker"in navigator)){ji(!1,"Offline: SW unsupported");return}Iw();const n=`v${Ml}`;for(const t of["title-version","pause-version"]){const e=document.getElementById(t);e&&(e.textContent=n)}try{const{registerSW:t}=await mw(async()=>{const{registerSW:e}=await import("./virtual_pwa-register-CYsC6l3d.js");return{registerSW:e}},[],import.meta.url);Qp=t({immediate:!0,onRegisteredSW(e,i){i?Aw(i):zo=null,rh(!!i?.active),lr(),ya()},onNeedRefresh(){Yu()},onOfflineReady(){rh(!0)},onRegisterError(){ji(!1,"Offline: cache failed")}})}catch{ji(!1,"Dev mode (no SW cache)")}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(lr(),ya())}),window.addEventListener("focus",()=>{lr(),ya()}),window.setInterval(()=>{Xu()&&ya()},6e4)}async function rh(n){try{if(!("caches"in window)){ji(!1,"Offline: no Cache API");return}const t=await caches.keys(),e={};for(const o of t)e[o]=(await(await caches.open(o)).keys()).length;const i=await gw(t,e);i==="ready"?ji(!0,"Offline ready"):i==="empty"?ji(!1,n?"Caching…":"Offline: empty cache"):ji(!1,"Offline: cache failed")}catch{ji(!1,"Offline: cache failed")}}function Dw(n=dl){return n.slice(0,5).map((e,i)=>{const o=e.label.replace(/\s*\(.*\)\s*$/,"").trim();return`<kbd>${i+1}</kbd> ${o}`}).join(" · ")}function Wa(n,t=dl){const e=t.findIndex(i=>i.id===n);return e>=0?e+1:null}function Nw(n,t=dl){const e=[];for(let i=0;i<t.length;i++){const o=i+1,s=t[i].label.replace(/\s*\(.*\)\s*$/,"").trim();!new RegExp(`(?:^|[^0-9])${o}(?:</kbd>)?\\s*${s.split(" ")[0]}`,"i").test(n)&&o<=5&&(new RegExp(`${o}[^\\d]{0,24}${s.split(" ")[0]}`,"i").test(n)||e.push(`slot ${o} expected near "${s}"`))}return e}function Ia(n){const t={x:-Math.sin(n),z:-Math.cos(n)},e={x:-t.z,z:t.x};return{forward:t,right:e}}function Ni(n,t){return n.hotbar.find(e=>e.id===t)||n.inventory.find(e=>e.id===t)}function Ui(n,t,e,i){const o=Ni(n,t);if(o)return o.count=Math.min(99,o.count+e),o;const s={id:t,count:Math.min(99,Math.max(0,e)),label:i};return n.inventory.push(s),s}const e0={bread:1,berry:1,fruit:1,cheese:2};function ah(n){return n in e0}function Uw(n){const t=(n%24+24)%24,e=t<5.5||t>=20.5,i=t>=6&&t<10,o=Math.max(0,Math.sin((t-6)/12*Math.PI)),s=.22+o*1.15,r=.18+o*.28,a=e?"#8aa0cc":t>17||t<7?"#ffb070":"#fff5e0",l=e?"#1a2848":i?"#c8e4ff":"#e8f2ff",c=e?"#1c2830":"#8aab70",u=e?.42:t>18||t<6.5?.18:0,d=u>0?`rgba(10, 16, 36, ${u.toFixed(2)})`:"transparent";return{sunIntensity:s,sunColor:a,hemiSky:l,hemiGround:c,ambient:r,veil:d,isNight:e,isMorning:i}}const zw=7;function Ge(n,t){const e=n.attributes.position.count,i=new Float32Array(e*3),o=new vt(t);for(let s=0;s<e;s++)i[s*3]=o.r,i[s*3+1]=o.g,i[s*3+2]=o.b;return n.setAttribute("color",new Te(i,3)),n}function kw(){const n=[],e=new Ot(.28,8,6);e.scale(1.2,.92,1.45),e.translate(0,.32,0),n.push(Ge(e,12880450));const i=new Ot(.18,8,6);i.translate(0,.48,.28),n.push(Ge(i,12880450));for(const s of[-1,1]){const r=new We(.055,.28,5);r.translate(s*.08,.74,.24),n.push(Ge(r,12880450))}const o=new Ot(.1,6,5);return o.translate(0,.36,-.34),n.push(Ge(o,16249578)),qu(n)}function Fw(){const n=[],i=new Ot(.32,8,6);i.scale(1.05,.78,1.7),i.translate(0,.52,0),n.push(Ge(i,16738844));const o=new Ot(.16,8,6);o.scale(.95,.9,.7),o.translate(0,.46,.32),n.push(Ge(o,16774890));const s=new Ot(.2,8,6);s.scale(.92,.95,1.15),s.translate(0,.78,.46),n.push(Ge(s,16738844));const r=new We(.065,.2,5);r.rotateX(Math.PI/2),r.translate(0,.72,.68),n.push(Ge(r,16738844));for(const c of[-1,1]){const u=new We(.065,.18,5);u.translate(c*.1,1.02,.4),n.push(Ge(u,16738844))}for(const[c,u]of[[-1,1],[1,1],[-1,-1],[1,-1]]){const d=new ue(.042,.05,.34,5);d.translate(c*.15,.17,u*.22),n.push(Ge(d,16738844));const f=new Ot(.05,5,4);f.scale(1.05,.45,1.15),f.translate(c*.15,.035,u*.24),n.push(Ge(f,16738844))}const a=new Ot(.15,7,6);a.scale(.78,.78,2.7),a.rotateX(-.55),a.translate(0,.62,-.5),n.push(Ge(a,16738844));const l=new Ot(.1,6,5);return l.translate(0,.84,-.84),n.push(Ge(l,16774890)),qu(n)}function Ow(){const n=[],t=new Ot(.16,8,6);t.scale(1,.85,1.45),n.push(Ge(t,3842278));const e=new Ot(.1,6,5);e.scale(.9,.7,1.1),e.translate(0,-.04,.02),n.push(Ge(e,15883066));const i=new Ot(.09,6,5);i.translate(0,.08,.2),n.push(Ge(i,3842278));const o=new We(.03,.1,4);o.rotateX(Math.PI/2),o.translate(0,.06,.3),n.push(Ge(o,15778330));for(const s of[-1,1]){const r=new ne(.28,.035,.14);r.translate(s*.18,.03,0),n.push(Ge(r,15778330))}return qu(n)}function qu(n){const t=je(n,!1);return n.forEach(e=>e.dispose()),t}const ss=new De;function _o(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}class Bw{constructor(t="medium"){this.quality=t,this.root.name="wildlife";const e=t==="low"?5:8,i=t==="low"?3:4,o=t==="low"?6:10,s=[];for(let f=0;f<e;f++)s.push("rabbit");for(let f=0;f<i;f++)s.push("fox");for(let f=0;f<o;f++)s.push("bird");const r={rabbit:new Wt({color:"#ffffff",vertexColors:!0,roughness:.85,flatShading:!0}),fox:new Wt({color:"#ffffff",vertexColors:!0,roughness:.8,flatShading:!0}),bird:new Wt({color:"#ffffff",vertexColors:!0,roughness:.7,flatShading:!0})},a={rabbit:kw(),fox:Fw(),bird:Ow()};this.meshes={rabbit:new jn(a.rabbit,r.rabbit,e),fox:new jn(a.fox,r.fox,i),bird:new jn(a.bird,r.bird,o)},this.meshes.rabbit.name="rabbits",this.meshes.fox.name="foxes",this.meshes.bird.name="birds";for(const f of Object.values(this.meshes))f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,this.root.add(f);const l={rabbit:[[14.5,9.5],[20,16.5]],fox:[[22,12.5]],bird:[[8.5,15],[16,18.5]]};let c=0,u=0,d=0;for(let f=0;f<s.length;f++){const h=s[f],g=h==="rabbit"?c:h==="fox"?u:d,y=l[h][g];let p,m;if(y)p=y[0],m=y[1];else{const _=_o(f,1)*Math.PI*2,T=h==="fox"?90:h==="bird"?40:32,E=h==="fox"?170:h==="bird"?160:95,A=T+_o(f,2)*(E-T),S=h==="rabbit"?.7:0;p=Math.cos(_+S)*A,m=Math.sin(_+S)*A+(h==="rabbit"?20:0)}const v=oe(p,m),b={kind:h,x:p,y:v,z:m,yaw:_o(f,3)*Math.PI*2,phase:_o(f,4)*Math.PI*2,state:h==="bird"?_o(f,5)>.45?"fly":"perch":"idle",timer:1+_o(f,6)*3,tx:p,tz:m,perchY:v+3+_o(f,7)*4};h==="bird"&&b.state==="fly"&&(b.y=b.perchY+2),this.critters.push(b),h==="rabbit"?c++:h==="fox"?u++:d++}this.counts={rabbit:c,fox:u,bird:d},this.writeMatrices(0,0)}root=new Xt;critters=[];meshes;counts={rabbit:0,fox:0,bird:0};update(t,e,i){for(const s of this.critters){if(s.phase+=t,s.pinned){s.kind==="bird"?(s.state="perch",s.y=s.perchY):(s.state="idle",s.y=oe(s.x,s.z));continue}s.timer-=t;const r=Math.hypot(s.x-e,s.z-i);if(r<3.2&&s.state!=="flee"){s.state="flee";const a=Math.atan2(s.z-i,s.x-e);s.tx=s.x+Math.cos(a)*14,s.tz=s.z+Math.sin(a)*14,s.timer=2.4}s.kind==="bird"?this.stepBird(s,t,r):this.stepGround(s,t)}this.writeMatrices(e,i)}stepGround(t,e){const i=t.kind==="rabbit",o=t.state==="flee"?i?7:6:i?2.2:1.6;if(t.state==="idle"){if(t.timer<=0){t.state="wander";const a=Math.random()*Math.PI*2;t.tx=t.x+Math.cos(a)*(4+Math.random()*6),t.tz=t.z+Math.sin(a)*(4+Math.random()*6),t.timer=2+Math.random()*3}}else{const a=t.tx-t.x,l=t.tz-t.z,c=Math.hypot(a,l);if(c>.15&&(t.x+=a/c*o*e,t.z+=l/c*o*e,t.yaw=Math.atan2(a,l)),(c<.4||t.timer<=0)&&(t.state=t.state==="flee"||Math.random()>.4?"idle":"wander",t.timer=t.state==="idle"?1+Math.random()*3:2+Math.random()*2,t.state==="wander")){const u=Math.random()*Math.PI*2;t.tx=t.x+Math.cos(u)*5,t.tz=t.z+Math.sin(u)*5}}const s=oe(t.x,t.z),r=i&&t.state!=="idle"?Math.abs(Math.sin(t.phase*10))*.32:0;t.y=s+r}stepBird(t,e,i){if((t.state==="flee"||i<9&&t.state==="perch")&&(t.state="fly",t.timer=4),t.state==="perch"){t.timer<=0&&(t.state="fly",t.timer=5+Math.random()*4),t.y=t.perchY;return}const o=i<12;t.yaw+=e*(o?1.6:.7);const s=o?8:3.5;t.x+=Math.sin(t.yaw)*s*e,t.z+=Math.cos(t.yaw)*s*e;const r=t.perchY+2+Math.sin(t.phase*.8)*1.2;t.y+=(r-t.y)*Math.min(1,e*2),t.timer<=0&&t.state==="fly"&&(t.state="perch",t.perchY=oe(t.x,t.z)+3.5+Math.random()*3,t.timer=3+Math.random()*5)}writeMatrices(t,e){const i={rabbit:0,fox:0,bird:0},o=72,s={rabbit:!1,fox:!1,bird:!1};for(const r of this.critters){const a=i[r.kind]++,l=Math.hypot(r.x-t,r.z-e)<o;l&&(s[r.kind]=!0),ss.position.set(r.x,r.y,r.z),ss.rotation.set(0,r.yaw,0),r.kind==="bird"&&r.state==="fly"&&(ss.rotation.z=Math.sin(r.phase*14)*.35),ss.scale.set(l?1:.001,l?1:.001,l?1:.001),ss.updateMatrix(),this.meshes[r.kind].setMatrixAt(a,ss.matrix)}for(const r of["rabbit","fox","bird"])this.meshes[r].instanceMatrix.needsUpdate=!0,this.meshes[r].count=this.counts[r],this.meshes[r].visible=s[r]}nearest(t,e,i){let o=null,s=1/0;for(const r of this.critters){if(r.kind!==t)continue;const a=Math.hypot(r.x-e,r.z-i);a<s&&(s=a,o=r)}return o}}const Js=new De;function Hw(){const n=[],t=new Ot(.22,8,6);t.scale(1.1,.8,1.1),t.translate(0,.2,0),n.push(t);for(const[e,i,o]of[[.12,.28,.08],[-.1,.3,-.06],[.02,.34,-.12],[.08,.22,-.14]]){const s=new Ot(.045,6,5);s.translate(e,i,o),n.push(s)}return je(n,!1)}function Gw(){const n=new Ot(.11,8,6);n.scale(1,.95,1),n.translate(0,.11,0);const t=new ue(.012,.012,.08,5);return t.translate(0,.24,0),je([n,t],!1)}function Vw(){const n=[];return Qe.bushes.forEach(([e,i],o)=>{n.push({id:`camp-berry-${o}`,kind:"berry",x:e,z:i})}),[[14,18,"fruit"],[22,8,"berry"],[-18,16,"fruit"],[28,-8,"berry"],[-24,6,"berry"],[16,-28,"fruit"],[-12,24,"berry"],[36,14,"fruit"],[8,32,"berry"],[-30,-12,"fruit"],[42,-22,"berry"],[-8,36,"fruit"],[54,8,"berry"],[-40,22,"fruit"],[18,48,"berry"],[4,-36,"fruit"]].forEach(([e,i,o],s)=>n.push({id:`wild-${o}-${s}`,kind:o,x:e,z:i})),n}class Ww{root=new Xt;items=[];berryMesh;fruitMesh;constructor(t=[]){this.root.name="pickups";const e=new Set(t),i=Vw();for(const r of i){const a=oe(r.x,r.z);this.items.push({...r,y:a,taken:e.has(r.id)})}const o=this.items.filter(r=>r.kind==="berry").length,s=this.items.filter(r=>r.kind==="fruit").length;this.berryMesh=new jn(Hw(),new Wt({color:"#3a7a38",roughness:.85,flatShading:!0}),Math.max(1,o)),this.fruitMesh=new jn(Gw(),new Wt({color:"#d03030",roughness:.7,flatShading:!0}),Math.max(1,s)),this.berryMesh.name="berries",this.fruitMesh.name="fruits",this.berryMesh.castShadow=this.fruitMesh.castShadow=!1,this.root.add(this.berryMesh,this.fruitMesh),this.sync()}sync(){let t=0,e=0;for(const i of this.items){const o=i.kind==="berry"?this.berryMesh:this.fruitMesh,s=i.kind==="berry"?t++:e++;Js.position.set(i.x,i.taken?-20:i.y,i.z),Js.rotation.set(0,i.id.length*.7,0),Js.scale.setScalar(i.taken?.001:1),Js.updateMatrix(),o.setMatrixAt(s,Js.matrix)}this.berryMesh.instanceMatrix.needsUpdate=!0,this.fruitMesh.instanceMatrix.needsUpdate=!0,this.berryMesh.count=t,this.fruitMesh.count=e}nearest(t,e,i=2.2){let o=null,s=i;for(const r of this.items){if(r.taken)continue;const a=Math.hypot(r.x-t,r.z-e);a<s&&(s=a,o=r)}return o}take(t){const e=this.items.find(i=>i.id===t);return!e||e.taken?null:(e.taken=!0,this.sync(),e)}}function Xw(n,t,e,i,o){const s=new ku(t,e.clone().normalize(),.1,i),r=[];if(n.traverse(l=>{const c=l;c.isInstancedMesh&&typeof c.name=="string"&&c.name.startsWith("trees_")&&r.push(c)}),!r.length)return null;const a=s.intersectObjects(r,!1);for(const l of a){if(l.instanceId==null)continue;const c=l.object,u=`${c.name}:${l.instanceId}`;if(o.has(u))continue;o.add(u);const d=new I,f=new Rt;return c.getMatrixAt(l.instanceId,f),d.setFromMatrixPosition(f),{key:u,x:d.x,y:d.y,z:d.z,mesh:c,instanceId:l.instanceId}}return null}function n0(n,t){const e=new Rt,i=new I,o=new dn,s=new I;n.getMatrixAt(t,e),e.decompose(i,o,s),s.x*=.55,s.z*=.55,s.y*=.12,e.compose(i,o,s),n.setMatrixAt(t,e),n.instanceMatrix.needsUpdate=!0}function $w(n,t){const e=new Set(t);e.size&&n.traverse(i=>{const o=i;if(!(!o.isInstancedMesh||!o.name.startsWith("trees_")))for(let s=0;s<o.count;s++)e.has(`${o.name}:${s}`)&&n0(o,s)})}const Yw=9e4,qw=9e4,lh=3,ch=2,La=[],ci=new Rt,Ps=new I,Is=new dn,Nn=new I,uh=new on;function jw(n,t,e,i,o){const s=new Rt;n.getMatrixAt(t,s),La.push({key:e,mesh:n,instanceId:t,t0:performance.now(),duration:700,base:s,dirX:i,dirZ:o})}function Zw(n=performance.now()){const t=[];for(let e=La.length-1;e>=0;e--){const i=La[e],o=Math.min(1,(n-i.t0)/i.duration);i.base.decompose(Ps,Is,Nn);const s=o*(Math.PI/2)*.95;uh.set(i.dirZ*s,0,-i.dirX*s);const r=new dn().setFromEuler(uh).multiply(Is);ci.compose(Ps,r,Nn),i.mesh.setMatrixAt(i.instanceId,ci),i.mesh.instanceMatrix.needsUpdate=!0,o>=1&&(n0(i.mesh,i.instanceId),t.push(i.key),La.splice(e,1))}return t}function Kw(n,t,e={x:1/.55,y:1/.12,z:1/.55}){n.getMatrixAt(t,ci),ci.decompose(Ps,Is,Nn),Nn.x*=e.x,Nn.y*=e.y,Nn.z*=e.z,ci.compose(Ps,Is,Nn),n.setMatrixAt(t,ci),n.instanceMatrix.needsUpdate=!0}function Jw(n,t,e,i,o){const s=new ku(t,e.clone().normalize(),.1,i),r=[];if(n.traverse(l=>{const c=l;c.isInstancedMesh&&c.name==="rocks"&&r.push(c)}),!r.length)return null;const a=s.intersectObjects(r,!1);for(const l of a){if(l.instanceId==null)continue;const c=l.object,u=`${c.name}:${l.instanceId}`;if(o.has(u))continue;o.add(u),i0(c,l.instanceId);const d=new I,f=new Rt;return c.getMatrixAt(l.instanceId,f),d.setFromMatrixPosition(f),{key:u,x:d.x,y:d.y,z:d.z}}return null}function i0(n,t){n.getMatrixAt(t,ci),ci.decompose(Ps,Is,Nn),Nn.x*=.45,Nn.z*=.45,Nn.y*=.1,ci.compose(Ps,Is,Nn),n.setMatrixAt(t,ci),n.instanceMatrix.needsUpdate=!0}function Qw(n,t){const e=new Set(t);e.size&&n.traverse(i=>{const o=i;if(!(!o.isInstancedMesh||o.name!=="rocks"))for(let s=0;s<o.count;s++)e.has(`${o.name}:${s}`)&&i0(o,s)})}function dh(n,t,e,i){const o=new Set(t);o.size&&n.traverse(s=>{const r=s;if(!(!r.isInstancedMesh||!e(r.name)))for(let a=0;a<r.count;a++)o.has(`${r.name}:${a}`)&&Kw(r,a,i)})}function fh(n,t,e,i){const o=[],s={},r=[];for(const a of n){const l=t[a]??e;e-l>=i?r.push(a):(o.push(a),s[a]=l)}return{remain:o,remainAt:s,restored:r}}class tS{root=new Xt;items=[];n=0;constructor(){this.root.name="coinDrops"}spawn(t,e,i=2){const o=[];for(let s=0;s<i;s++){const r=s/Math.max(1,i)*Math.PI*2+Math.random()*.4,a=.35+s*.25,l=t+Math.cos(r)*a,c=e+Math.sin(r)*a,u=oe(l,c)+.28,d=new j(new ue(.16,.16,.05,16),new Wt({color:"#f0c040",emissive:"#a07010",emissiveIntensity:.35,metalness:.6,roughness:.35}));d.position.set(l,u,c),d.rotation.x=Math.PI/2,d.name="coin",this.root.add(d);const f={id:`coin_${this.n++}`,x:l,y:u,z:c,taken:!1,mesh:d};this.items.push(f),o.push(f)}return o}nearest(t,e,i){let o=null,s=i;for(const r of this.items){if(r.taken)continue;const a=Math.hypot(r.x-t,r.z-e);a<s&&(s=a,o=r)}return o}take(t){const e=this.items.find(i=>i.id===t);return!e||e.taken?null:(e.taken=!0,e.mesh.visible=!1,e)}update(t){for(const e of this.items)e.taken||(e.mesh.rotation.z=t*2.4,e.mesh.position.y=e.y+Math.sin(t*3+e.x)*.06)}}const hh=2,Xa={hardware:{id:"hardware",title:"Hardware Store",keeper:"Pip the Tinker",greeting:"Need tools or building bits?",items:[{id:"axe",label:"Axe",price:6},{id:"pickaxe",label:"Pickaxe",price:6},{id:"torch",label:"Torch",price:2},{id:"block_wood",label:"Wood block",price:1},{id:"block_stone",label:"Stone block",price:2},{id:"water_bucket",label:"Bucket",price:4}]},food:{id:"food",title:"Food Store",keeper:"Nana Crumb",greeting:"Fresh snacks for adventurers!",items:[{id:"bread",label:"Bread",price:2},{id:"cheese",label:"Cheese",price:3},{id:"drumstick",label:"Drumstick",price:3}]},weapons:{id:"weapons",title:"Weapon Store",keeper:"Sir Cobble",greeting:"A sturdier sword and a trusty shield.",items:[{id:"iron_sword",label:"Iron sword",price:12},{id:"shield",label:"Wooden shield",price:10}]}};function eS(n,t){const e=Math.max(0,Math.floor(t));return n.coins=Math.min(9999,Math.max(0,(n.coins??0)+e)),n.coins}function o0(n,t,e){const i=Xa[t];if(!i)return{ok:!1,reason:"no_shop",coins:n.coins??0};const o=i.items.find(r=>r.id===e);if(!o)return{ok:!1,reason:"missing",coins:n.coins??0};const s=n.coins??0;return s<o.price?{ok:!1,reason:"poor",coins:s}:(n.coins=s-o.price,Ui(n,o.id,1,o.label),{ok:!0,coins:n.coins,label:o.label})}function nS(n){return n==="iron_sword"?2:1}function iS(n){return n==="shield"}const ju={block:{wood:1,stone:0},floor:{wood:1,stone:0},wall:{wood:2,stone:0},roof:{wood:2,stone:0},door:{wood:2,stone:0},window:{wood:1,stone:1}};function xs(n){return{block:"Block",floor:"Floor",wall:"Wall",roof:"Roof",door:"Door",window:"Window"}[n]}function ph(n,t,e){if(e<=0)return!0;let i=0;for(const s of t)i+=Ni(n,s)?.count??0;if(i<e)return!1;let o=e;for(const s of t){const r=Ni(n,s);if(!r||r.count<=0)continue;const a=Math.min(r.count,o);if(r.count-=a,o-=a,o<=0)return!0}return o<=0}function s0(n,t){const e=ju[t],i=(Ni(n,"wood_log")?.count??0)+(Ni(n,"block_wood")?.count??0),o=Ni(n,"block_stone")?.count??0;return i>=e.wood&&o>=e.stone}function oS(n,t){if(!s0(n,t))return!1;const e=ju[t];return!(!ph(n,["wood_log","block_wood"],e.wood)||!ph(n,["block_stone"],e.stone))}function r0(n,t,e="wood"){const i=ju[t]??{wood:1,stone:0};if(t==="block"){Ui(n,e==="stone"?"block_stone":"block_wood",1,e==="stone"?"Stone block (build)":"Wood block (build)");return}i.wood&&Ui(n,"wood_log",i.wood,"Wood log"),i.stone&&Ui(n,"block_stone",i.stone,"Stone block (build)")}const sS=.16,Da=1.28;function wr(n){return n==="wall"||n==="door"||n==="window"}function wl(n){return(n%4+4)%4}function mh(n){const t=n.piece??"block";return t==="floor"?`floor:${n.x}|${n.y}|${n.z}`:t==="roof"?`roof:${n.x}|${n.y}|${n.z}`:wr(t)?`edge:${n.x}|${n.y}|${n.z}|${wl(n.facing??0)}`:`block:${n.x}|${n.y}|${n.z}`}function rS(n){const t=wl(n),e=.5-sS/2;return t===0?{dx:0,dz:e,ry:0}:t===1?{dx:-e,dz:0,ry:Math.PI/2}:t===2?{dx:0,dz:-e,ry:0}:{dx:e,dz:0,ry:Math.PI/2}}function Sl(n){const t=n.piece??"block";if(t==="roof")return{x:n.x+.5,y:n.y+Da,z:n.z+.5,ry:wl(n.facing??0)*Math.PI/2};if(wr(t)){const e=rS(n.facing??0);return{x:n.x+.5+e.dx,y:n.y,z:n.z+.5+e.dz,ry:e.ry}}return{x:n.x+.5,y:n.y,z:n.z+.5,ry:0}}function a0(n,t,e,i,o,s,r,a=200){if(!mp(s,r))return{blocks:n,ok:!1,reason:"blocked"};if(n.length>=a)return{blocks:n,ok:!1,reason:"full"};const l=wl(o),c={x:t.x,y:t.y,z:t.z,piece:e,facing:l},u=mh(c),d=n.find(h=>mh(h)===u);if(d){if(!(wr(e)&&wr(d.piece)&&d.piece!==e))return{blocks:n,ok:!1,reason:"occupied",replaced:d};const g={id:`b_${e}_${t.x}_${t.y}_${t.z}_${l}_${n.length}`,x:t.x,y:t.y,z:t.z,material:i,piece:e,facing:l};return{blocks:[...n.filter(y=>y.id!==d.id),g],ok:!0,placed:g,replaced:d}}const f={id:`b_${e}_${t.x}_${t.y}_${t.z}_${l}_${n.length}`,x:t.x,y:t.y,z:t.z,material:i,piece:e,facing:l};return{blocks:[...n,f],ok:!0,placed:f}}const aS=12,lS=10,cS=10,gh=12,uS=3.2;function dS(n,t=uS){return{x:n.x-Math.sin(n.yaw)*t,z:n.z-Math.cos(n.yaw)*t}}const Co={x:2.5,z:7.2};function fS(){const n=new Xt;n.name="campfirePit";const t=oe(Co.x,Co.z);n.position.set(Co.x,t,Co.z);const e=[],i=new ki(.45,.08,6,10);i.rotateX(Math.PI/2),i.translate(0,.06,0),e.push(i);for(const r of[.2,1.3,2.4]){const a=new ue(.05,.055,.55,6);a.rotateZ(Math.PI/2),a.rotateY(r),a.translate(0,.08,0),e.push(a)}const o=new j(je(e,!1),new Wt({color:"#5a4030",roughness:.92,flatShading:!0,emissive:"#000000",emissiveIntensity:0}));o.name="campfirePitMesh",n.add(o),e.forEach(r=>r.dispose());const s=new ul(16744480,0,6,1.6);return s.name="campfireLight",s.position.y=.4,n.add(s),n}function hS(n,t){const e=n.getObjectByName("campfirePitMesh"),i=n.getObjectByName("campfireLight");if(e){const o=e.material;o.emissive.set("#ff6010"),o.emissiveIntensity=.55}i&&(i.intensity=1.4)}const l0=1.65,pS=2.4;function c0(n,t,e,i,o,s){const r=e-1.55;for(const a of i){if(a.kind!=="dragon"||a.id===o||Math.hypot(n-a.position.x,t-a.position.z)>=l0)continue;const c=s(a.position.x,a.position.z);if(r<c+pS&&e>c)return!0}return!1}function u0(n,t,e,i,o,s,r=1.55){const a=Ia(e),l=[2.6,3.4,4.4,5.6],c=[{x:a.right.x,z:a.right.z},{x:-a.right.x,z:-a.right.z},{x:-a.forward.x,z:-a.forward.z},{x:a.forward.x*.4+a.right.x,z:a.forward.z*.4+a.right.z},{x:a.forward.x*.4-a.right.x,z:a.forward.z*.4-a.right.z}];for(const f of l)for(const h of c){const g=n+h.x*f,y=t+h.z*f,p=li(g,y,1/0);if(!Number.isFinite(p)||p<-1.2)continue;const m=p+r;if(!Dp(g,y,p)&&!c0(g,y,m,i,o,s)&&!(Math.hypot(g-n,y-t)<l0+.35))return{x:g,y:m,z:y}}const u={x:n+a.right.x*6,z:t+a.right.z*6},d=s(u.x,u.z);return{x:u.x,y:(Number.isFinite(d)?d:0)+r,z:u.z}}const El=document.getElementById("game"),mS=document.getElementById("no-webgl"),d0=document.getElementById("title"),xh=document.getElementById("pause"),Nr=document.getElementById("howto");function gS(){try{const n=document.createElement("canvas");return!!(n.getContext("webgl2")||n.getContext("webgl"))}catch{return!1}}if(!gS())throw mS.classList.remove("hidden"),new Error("WebGL unavailable");let x=xp();Ur(x);function Ur(n){n.player.position={x:.6,y:1.55,z:12.2},n.player.yaw=0,n.player.pitch=-.22,n.companions[0].position={x:2.4,y:0,z:6.2},n.companions[0].tameness=0,n.companions[0].bonded=!1,n.companions[1]&&(n.companions[1].position={x:-18,y:0,z:14}),n.companions[2]&&(n.companions[2].position={x:22,y:0,z:-16}),n.companions[3]&&(n.companions[3].position={x:-14,y:0,z:-24})}const oo=1.55;function Ro(n){const t=Number.isFinite(n.player.position.y)?n.player.position.y-oo+.2:-1/0,e=li(n.player.position.x,n.player.position.z,t),i=Number.isFinite(e)?e:0;if(n.player.position.y=i+oo,!Number.isFinite(n.player.position.y)||n.player.position.y<i+.9||n.player.position.y<.5){Ur(n);const o=me(n.player.position.x,n.player.position.z);n.player.position.y=(Number.isFinite(o)?o:0)+oo}}let Tn=!0,ti=!0,ys=0,Ln=0,pn=!0,cr=0,yh=0,Ri="off";const xe=new bM;let oi=null;const f0=-60*Math.PI/180,h0=25*Math.PI/180,zr=-.18,_h=.12;function ko(n){return Number.isFinite(n)?Math.max(f0,Math.min(h0,n)):zr}function vh(n){return Number.isFinite(n)?Math.max(-_h,Math.min(_h,n)):0}function _s(n){n.player.pitch=ko(zr)}function p0(){x.player.pitch=ko(zr),Ka(),ys=performance.now()+250}const $a=new rw;let ye=yl(x.settings.quality,"medium"),nn=_l(ye),Ya=null,re=null,Ai=null,Jn=null,Fi=new tS,ur=null,fi=!1,Po=!1,gu=null,Ho=!1,ln=null,Mh=0,gc=!1,Ti=null,dr=!1,m0=!1;const qa=1.65,ja={y:2.62,z:-1.72};let qi=0,wo=!1,Zi=!1;const tn=new t1({canvas:El,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});tn.setSize(window.innerWidth,window.innerHeight);tn.outputColorSpace=ke;tn.toneMapping=Ph;tn.toneMappingExposure=1.28;const Ut=new e1;Ut.background=new vt("#a8d4f5");Ut.fog=new el("#c5ddf2",.005);const At=new bn(70,window.innerWidth/window.innerHeight,.2,900),xu=new F1(15266559,9087856,1.15);Ut.add(xu);const mi=new H1(16774624,1.35);mi.position.set(32,48,20);mi.target.position.set(0,0,2);Ut.add(mi);Ut.add(mi.target);const g0=new G1(11585752,.42);Ut.add(g0);const Sr=new ul(16751168,0,9,1.6);Sr.name="cabinFireLight";Ut.add(Sr);const Tl=new ul(16756832,0,28,1.4);Tl.name="greatHallLight";Ut.add(Tl);vl(tn,mi,nn);Ya=Vp(Ut,ye);Ut.add(Ya);re=new Hp(ye);Ut.add(re.root);const cn=new sw(Ut,nn.particles);let bh=0,xc=0;const fr=nw();At.add(fr);Ut.add(At);const wh=document.getElementById("title-hero-preview");wh&&(wh.innerHTML='<span class="hero-emoji">🐉</span>Feed a dragon · build a camp · fly when ready');const lo=new Map,Qi=new Map,_a=new Map,cs=[];function xS(){cs.length=0;for(const n of x.blocks){if(n.piece==="floor"){cs.push(new Un(new I(n.x,n.y,n.z),new I(n.x+1,n.y+.16,n.z+1)));continue}if(n.piece==="door"||n.piece==="roof")continue;if(wr(n.piece)){const e=Sl(n);Math.abs(e.ry)<.1||Math.abs(e.ry-Math.PI)<.1?cs.push(new Un(new I(e.x-.5,n.y,e.z-.09),new I(e.x+.5,n.y+Da,e.z+.09))):cs.push(new Un(new I(e.x-.09,n.y,e.z-.5),new I(e.x+.09,n.y+Da,e.z+.5)));continue}const t=n.piece&&n.piece!=="block"?Da:1;cs.push(new Un(new I(n.x,n.y,n.z),new I(n.x+1,n.y+t,n.z+1)))}}const Sh={x:Zt.x,z:Zt.z};function yS(){const n=Ut.getObjectByName("castleExterior");if(!n)return{ok:!1,cx:0,cy:0,width:0,height:0,bottom:1,top:0,horizonY:.5};n.updateWorldMatrix(!0,!0);const t=new Un().setFromObject(n),e=[new I(t.min.x,t.min.y,t.min.z),new I(t.min.x,t.min.y,t.max.z),new I(t.min.x,t.max.y,t.min.z),new I(t.min.x,t.max.y,t.max.z),new I(t.max.x,t.min.y,t.min.z),new I(t.max.x,t.min.y,t.max.z),new I(t.max.x,t.max.y,t.min.z),new I(t.max.x,t.max.y,t.max.z)];let i=1,o=0,s=1,r=0,a=!1;for(const u of e){const d=u.clone().project(At);if(d.z<-1||d.z>1)continue;const f=(d.x+1)/2,h=1-(d.y+1)/2;i=Math.min(i,f),o=Math.max(o,f),s=Math.min(s,h),r=Math.max(r,h),a=!0}const c=1-(new I(x.player.position.x-Math.sin(x.player.yaw)*400,x.player.position.y,x.player.position.z-Math.cos(x.player.yaw)*400).project(At).y+1)/2;return a?{ok:!0,cx:(i+o)/2,cy:(s+r)/2,width:Math.max(0,o-i),height:Math.max(0,r-s),bottom:r,top:s,horizonY:c}:{ok:!1,cx:0,cy:0,width:0,height:0,bottom:1,top:0,horizonY:c}}function _S(n=25){if(!re)return 0;let t=0;const e=x.player.position.x,i=x.player.position.z,o=new Rt,s=new Rt,r=new I;return re.root.updateWorldMatrix(!0,!0),re.root.traverse(a=>{if(!a.name.startsWith("trees_"))return;const l=a;if(l.isInstancedMesh){l.updateWorldMatrix(!0,!1);for(let c=0;c<l.count;c++)l.getMatrixAt(c,o),s.multiplyMatrices(l.matrixWorld,o),r.setFromMatrixPosition(s),Math.hypot(r.x-e,r.z-i)<=n&&t++}}),t}function vS(n=8){if(!re)return[];const t=x.player.position.x,e=x.player.position.z,i=new Rt,o=new Rt,s=new I,r=[];return re.root.updateWorldMatrix(!0,!0),re.root.traverse(a=>{if(!a.name.startsWith("trees_"))return;const l=a;if(l.isInstancedMesh){l.updateWorldMatrix(!0,!1);for(let c=0;c<l.count;c++){l.getMatrixAt(c,i),o.multiplyMatrices(l.matrixWorld,i),s.setFromMatrixPosition(o);const u=Math.hypot(s.x-t,s.z-e);r.push({dist:u,x:s.x,z:s.z,name:a.name})}}}),r.sort((a,l)=>a.dist-l.dist),r.slice(0,n)}function MS(n=8){if(!re)return[];const t=x.player.position.x,e=x.player.position.z,i=new Rt,o=new Rt,s=new I,r=[];return re.root.updateWorldMatrix(!0,!0),re.root.traverse(a=>{if(a.name!=="rocks")return;const l=a;if(l.isInstancedMesh){l.updateWorldMatrix(!0,!1);for(let c=0;c<l.count;c++){l.getMatrixAt(c,i),o.multiplyMatrices(l.matrixWorld,i),s.setFromMatrixPosition(o);const u=Math.hypot(s.x-t,s.z-e);r.push({dist:u,x:s.x,z:s.z,name:a.name})}}}),r.sort((a,l)=>a.dist-l.dist),r.slice(0,n)}function va(n,t,e){const i=e-oo;if(Dp(n,t,i))return!0;for(const s of cs)if(n>s.min.x-.25&&n<s.max.x+.25&&t>s.min.z-.25&&t<s.max.z+.25&&e-1.55<s.max.y&&e>s.min.y)return!0;const o=x.player.mount!=="grounded"?x.player.mountedCompanionId:null;return!!c0(n,t,e,x.companions,o,(s,r)=>me(s,r))}function Er(){x.monsters=zn(x.monsters);for(const n of x.monsters){let t=lo.get(n.id);t||(t=Wb(n.kind),lo.set(n.id,t),Ut.add(t)),t.visible=n.alive,t.position.set(n.position.x,me(n.position.x,n.position.z),n.position.z);let e=t.getObjectByName("blobShadow");e||(e=new j(new Kn(.45,10),new An({color:"#000000",transparent:!0,opacity:.25,depthWrite:!1})),e.rotation.x=-Math.PI/2,e.name="blobShadow",t.add(e)),e.position.set(0,.03,0),e.visible=!nn.shadows,n.hostile&&n.alive&&t.lookAt(x.player.position.x,t.position.y,x.player.position.z)}}function x0(n){const t=x.player.yaw;n.visible=!0,n.rotation.y=t+Math.PI;const e=ja.z,i=t+Math.PI,o=e*Math.sin(i),s=e*Math.cos(i),r=x.player.mount==="flying",a=x.player.position.x-o,l=x.player.position.z-s,c=li(a,l,x.player.position.y);n.position.set(a,r?x.player.position.y-ja.y:c,l);const u=x.companions.find(d=>d.id===x.player.mountedCompanionId);u&&(u.position.x=a,u.position.z=l,u.position.y=n.position.y)}const hs=new Map,rs={dragonDraw:110,dragonShadow:16,dragonLod:18,monsterDraw:75,monsterShadow:10,monsterLod:16};function co(){for(const n of x.companions){if(n.kind!=="dragon")continue;let t=Qi.get(n.id);t||(t=Yb(n.palette),Qi.set(n.id,t),Ut.add(t)),x.player.mountedCompanionId===n.id&&x.player.mount!=="grounded"?x0(t):(t.visible=!0,t.position.set(n.position.x,me(n.position.x,n.position.z)+.02,n.position.z));let e=t.getObjectByName("blobShadow");e||(e=new j(new Kn(.55,12),new An({color:"#000000",transparent:!0,opacity:.28,depthWrite:!1})),e.rotation.x=-Math.PI/2,e.name="blobShadow",t.add(e)),e.position.set(0,.02,0),e.visible=!nn.shadows}}function Os(){const n=new Set(x.blocks.map(t=>t.id));for(const[t,e]of _a)n.has(t)||(Ut.remove(e),_a.delete(t));for(const t of x.blocks){if(_a.has(t.id))continue;const e=t.piece&&t.piece!=="block"?t.piece:null,i=e?$p(e,t.material):Xp(t.material);if(e){const o=Sl(t);i.position.set(o.x,o.y,o.z),i.rotation.y=o.ry}else i.position.set(t.x+.5,t.y+.5,t.z+.5);Ut.add(i),_a.set(t.id,i)}xS()}function ve(){aw(document.getElementById("hearts"),x.player.hearts,x.player.maxHearts),cw(document.getElementById("hotbar"),x.player.hotbar,x.player.selectedHotbar,s=>{x.player.selectedHotbar=s,xe.ui(),ve()}),qp(fr,x.player.hotbar[x.player.selectedHotbar]?.id??"sword");const n=document.getElementById("inv-grid");n&&Jp(n,[...x.player.hotbar,...x.player.inventory].filter(s=>s.count>0)),dw(x),fw(x.player.coins??0),Rs(x.player.mode);const t=x.player.monstersDefeated,e=x.companions.filter(s=>s.bonded).length,i=Qu(x.blocks);x.flags.buildGuideComplete?x.player.mode==="safe_build"?xa(`Safe Build · Pets ${e}/3 · Press R Ready for battle · Defeat later (${t}/5)`):x.flags.firstObjectiveComplete?xa(`Stars ${x.player.stars} · Pets ${e}/3 · Explore & build`):xa(`Adventure · Defeat monsters (${t}/5) · Pets ${e}/3 · E ride (calls them if far) · Space fly`):xa(`Build guide: place ${Math.min(i,3)}/3 blocks on the yellow pad (keys 4–5) · then press R when ready · Pets ${e}/3`);const o=x.player.hotbar[x.player.selectedHotbar];Kp(o?.label??"")}const On=new MM(El,()=>ti||Tn||fi||Po||Ho||dr);function Zu(n){ti=n,Tn=n,n?(xh.classList.remove("hidden"),On.releaseLock()):(xh.classList.add("hidden"),d0.classList.add("hidden"),Nr.classList.add("hidden"),document.getElementById("install-panel")?.classList.add("hidden"))}function bS(){if(oi&&(Ut.remove(oi),oi.geometry.dispose(),oi.material.dispose(),oi=null),Ri==="off")return;const n=ye==="low"?200:400,t=new Float32Array(n*3);for(let o=0;o<n;o++)t[o*3]=(Math.random()-.5)*60,t[o*3+1]=Math.random()*30,t[o*3+2]=(Math.random()-.5)*60;const e=new Pe;e.setAttribute("position",new Te(t,3));const i=new Ua({color:Ri==="snow"?16777215:8956620,size:Ri==="snow"?.12:.06,transparent:!0,opacity:.75,depthWrite:!1});oi=new su(e,i),Ut.add(oi)}async function wS(){const n=document.getElementById("build-meta");n&&(n.textContent=`${yw} · v${Ml}`);const t=await nM();if(t.note){const c=document.getElementById("test-import-note");c&&(c.textContent=t.note,c.classList.remove("hidden")),It(t.note)}const e=await fM(),i=e?.state??null;if(i){x=oM(i,me),x.monsters=zn(x.monsters),Ro(x);const c=e?.incomingVersion??i.version;t.imported||It(c<hi?"Save upgraded — your items and progress are kept":"Save restored"),c<hi&&await Uo(x)}else Ur(x),Ro(x);await hM(),Er(),co(),Os(),At.position.set(x.player.position.x,x.player.position.y,x.player.position.z),At.rotation.order="YXZ",At.rotation.y=x.player.yaw,At.rotation.x=x.player.pitch;const o=Ut.getObjectByName("skyDome");o&&o.position.copy(At.position),_s(x),x.player.pitch=ko(x.player.pitch),Ka(),ye=yl(x.settings.quality,$a.suggested),nn=_l(ye),vl(tn,mi,nn),cn.setBudget(nn.particles);try{await bp(ye)}catch(c){console.warn("art textures failed; using procedural fallback",c)}U0(),zS(),co(),Er();const s=jp(Ut);window.__DA_PERF={tier:ye,setting:x.settings.quality,triangles:s.triangles,drawCallsApprox:s.meshes,textures:s.textures,note:"NOT a Chromebook measurement; headless/proxy stats only"};const r=document.getElementById("btn-quality");r&&(r.textContent=N0(x.settings.quality)+" (live)"),ed(),ve(),Rw(async()=>{await Uo(x)});const a=document.getElementById("help-hotbar-slots");a&&(a.innerHTML=Dw(x.player.hotbar));const l=Nw(document.getElementById("howto")?.innerText??"",x.player.hotbar);l.length&&console.warn("help/hotbar mismatch",l),await Lw()}function SS(n){let t=null,e=n;const i=x.player.position;for(const o of zn(x.monsters)){if(!o.alive)continue;const s=Fs(o.position,i);s<e&&(e=s,t=o)}return t}function vs(n){let t=null,e=n;for(const i of x.companions){if(i.kind!=="dragon")continue;const o=Fs(i.position,x.player.position);o<e&&(e=o,t=i)}return t}function Ku(){let n=null,t=1/0;for(const e of x.companions){if(e.kind!=="dragon"||!e.bonded||e.id===x.player.mountedCompanionId)continue;const i=Fs(e.position,x.player.position);i<t&&(t=i,n=e)}return n}function y0(){const n=Ku();if(!n)return null;const t=dS({x:x.player.position.x,z:x.player.position.z,yaw:x.player.yaw});return n.position.x=t.x,n.position.z=t.z,hs.delete(n.id),n}function so(){const n=new I;return At.getWorldDirection(n),n}function _0(n=3.5,t=.82){const e=so(),i=At.getWorldPosition(new I);let o=null,s=n;for(const r of zn(x.monsters))if(r.alive)for(const a of[.35,.85,1.25]){const l=new I(r.position.x,me(r.position.x,r.position.z)+a,r.position.z),c=l.clone().sub(i),u=c.length();if(u>n||u<.01)continue;const d=c.dot(e);if(d<0)continue;const h=i.clone().addScaledVector(e,Math.min(d,n)).distanceTo(l);!(c.normalize().dot(e)>=t)&&h>.9||u<s&&(s=u,o=r)}return o}function v0(n,t=.45){const e=so(),i=At.getWorldPosition(new I);let o=null,s=n;for(const r of x.companions){if(r.kind!=="dragon"||x.player.mountedCompanionId===r.id)continue;const a=me(r.position.x,r.position.z)+.55,l=new I(r.position.x,a,r.position.z).sub(i),c=l.length();c>n||(l.normalize(),!(l.dot(e)<t)&&c<s&&(s=c,o=r))}return o}function ES(n){const t=lo.get(n);t&&t.traverse(e=>{const i=e;if(!i.isMesh)return;const o=i.material;if(!o?.color)return;const s=o.color.getHex();o.color.set("#ff6060"),setTimeout(()=>o.color.setHex(s),120)})}function TS(){if(cr>0)return!1;cr=.35,xe.swing();const n=_0(3.5,.75);if(!n)return It("Swing! Look at a nearby monster (glow means in reach)"),!1;const t=nS(x.player.hotbar[x.player.selectedHotbar]?.id??"sword"),e=mM(zn(x.monsters),n.id,t,x.player.mode,Tn,ti);if(x.monsters=e.monsters,!e.hit)return It("Safe Build — finish the build guide, then press R"),!1;xe.hit(),ES(n.id);{const s=n.position.x-x.player.position.x,r=n.position.z-x.player.position.z,a=Math.hypot(s,r)||1;n.position.x+=s/a*.55,n.position.z+=r/a*.55;const l=x.monsters.find(c=>c.id===n.id);l&&(l.position={...n.position})}const i=me(n.position.x,n.position.z)+1.1;cn.hitSparks(new I(n.position.x,i,n.position.z));const o=AS(n.position.x,i,n.position.z);if(o&&uw(o.x,o.y,`-${t}`),e.becameHostile&&(It("It will fight back now!"),br("hostile retaliation!",!0)),e.defeated){const s=x.player.stars;x=q1(x),xe.win(),Fi.spawn(n.position.x,n.position.z,hh),It(`Monster defeated! It dropped ${hh} coins (${x.player.monstersDefeated}/5)`),x.player.stars>s&&cn.levelUp(new I(x.player.position.x,x.player.position.y,x.player.position.z))}return Er(),ve(),!0}function AS(n,t,e){const i=new I(n,t,e).project(At);return i.z>1?null:{x:(i.x*.5+.5)*window.innerWidth,y:(-i.y*.5+.5)*window.innerHeight}}const Me={x:2.5,z:6.2,r:2.6};function Ju(){const n=so(),t=At.getWorldPosition(new I);let e=x.player.position.x+n.x*2.8,i=x.player.position.z+n.z*2.8;for(let c=.6;c<=5.5;c+=.25){const u=t.x+n.x*c,d=t.y+n.y*c,f=t.z+n.z*c,h=me(u,f);if(d<=h+.35){e=u,i=f;break}}const o=e-Me.x,s=i-Me.z;if(Math.hypot(o,s)<Me.r+1.4){e=e+(Me.x-e)*(1-.55)*.15,i=i+(Me.z-i)*(1-.55)*.15;const u=e-Me.x,d=i-Me.z,f=Math.hypot(u,d);f>Me.r&&(e=Me.x+u/f*Me.r,i=Me.z+d/f*Me.r)}const r=Math.floor(e),a=Math.floor(i),l=Math.max(0,Math.floor(me(r+.5,a+.5)));return{x:r,y:l,z:a}}function M0(n,t,e){return`${n}|${t}|${e}`}function Za(n,t){return Math.hypot(n+.5-Me.x,t+.5-Me.z)<=Me.r+.55}function Qu(n){let t=0;for(const e of n)if(Za(e.x,e.z))t++;else{let i=!1;for(const[o,s]of[[1,0],[-1,0],[0,1],[0,-1]])if(Za(e.x+o,e.z+s)){i=!0;break}i&&t++}return t}function CS(){const n=new Set;for(const t of x.blocks)n.add(M0(t.x,t.y,t.z));return n}function Eh(n){const t=CS();Math.floor(x.player.position.x),Math.floor(x.player.position.z);const e=[];for(let s=Math.floor(Me.z-Me.r)-1;s<=Math.ceil(Me.z+Me.r)+1;s++)for(let r=Math.floor(Me.x-Me.r)-1;r<=Math.ceil(Me.x+Me.r)+1;r++){if(!Za(r,s))continue;const a=Math.max(0,Math.floor(me(r+.5,s+.5)));if(t.has(M0(r,a,s)))continue;const l=Math.hypot(r-n.x,s-n.z);e.push({x:r,z:s,dist:l})}if(e.sort((s,r)=>s.dist-r.dist),!e.length)return null;const i=e[0],o=Math.max(0,Math.floor(me(i.x+.5,i.z+.5)));return{x:i.x,y:o,z:i.z}}const Pi=Xp("wood");Pi.material=new Wt({color:"#f0e080",transparent:!0,opacity:.45,depthWrite:!1,roughness:.8});Pi.visible=!1;Ut.add(Pi);let Xn=Yp("wall");Xn.visible=!1;Ut.add(Xn);function b0(n){return(Math.round(-n/(Math.PI/2))%4+4)%4}function RS(){const n=x.player.hotbar[x.player.selectedHotbar],t=Ju(),e=ln;if(e){Pi.visible=!1,Xn.userData.piece!==e&&(Ut.remove(Xn),Xn=Yp(e),Ut.add(Xn),Xn.userData.piece=e),Xn.visible=!0;const i=Sl({x:t.x,y:t.y,z:t.z,piece:e,facing:b0(x.player.yaw)});Xn.position.set(i.x,i.y,i.z),Xn.rotation.y=i.ry;return}if(Xn.visible=!1,n.id!=="block_wood"&&n.id!=="block_stone"){Pi.visible=!1;return}Pi.visible=!0,Pi.material.color.set(n.id==="block_wood"?"#c4a06a":"#9aa0a8"),Pi.position.set(t.x+.5,t.y+.5,t.z+.5)}function Tr(n){fi=n,document.getElementById("inv-overlay")?.classList.toggle("hidden",!n);const t=document.getElementById("inv-grid");t&&Jp(t,[...x.player.hotbar,...x.player.inventory].filter(e=>e.count>0)),n?On.releaseLock():!Tn&&!ti&&!Po&&!Ho&&On.requestLock()}function td(){if(!gu)return;const n=Xa[gu],t=document.getElementById("shop-title"),e=document.getElementById("shop-keeper"),i=document.getElementById("shop-coins"),o=document.getElementById("shop-list");if(t&&(t.textContent=n.title),e&&(e.textContent=`${n.keeper}: “${n.greeting}”`),i&&(i.textContent=`You have ${x.player.coins??0} coins`),!!o){o.innerHTML="";for(const s of n.items){const r=document.createElement("button");r.type="button",r.dataset.item=s.id,r.innerHTML=`<span>${s.label}</span><span>${s.price} coins</span>`,r.addEventListener("click",()=>{const a=o0(x.player,n.id,s.id);a.ok?(xe.ui(),It(`Bought ${a.label} — ${a.coins} coins left`),ve(),td()):It(a.reason==="poor"?"Not enough coins":"Cannot buy that")}),o.appendChild(r)}}}function Ar(n){gu=n,Po=!!n,document.getElementById("shop-overlay")?.classList.toggle("hidden",!Po),Po?(td(),On.releaseLock()):!Tn&&!ti&&!fi&&!Ho&&On.requestLock()}function kr(n){Ho=n,document.getElementById("build-overlay")?.classList.toggle("hidden",!n);const t=document.getElementById("build-selected");t&&(t.textContent=ln?`Selected: ${xs(ln)}`:"Selected: none — pick a piece"),document.querySelectorAll("#build-list button").forEach(e=>{e.classList.toggle("active",e.dataset.piece===ln)}),n?On.releaseLock():!Tn&&!ti&&!fi&&!Po&&On.requestLock()}function ed(){const n=Uw(x.player.timeOfDay??12);mi.intensity=n.sunIntensity,mi.color.set(n.sunColor),xu.color.set(n.hemiSky),xu.groundColor.set(n.hemiGround),g0.intensity=n.ambient;const t=document.getElementById("day-veil");t&&(t.style.background=n.veil)}function w0(){const n=x.player.hotbar[x.player.selectedHotbar];let t=n&&ah(n.id)&&n.count>0?n:void 0;if(!t)for(const o of["berry","fruit","bread","cheese"]){const s=Ni(x.player,o);if(s&&s.count>0){t=s;break}}if(!t||t.count<=0||!ah(t.id))return!1;const e=x.player.hearts<di,i=(x.player.hunger??Li)<Li;return!e&&!i?(It("You feel fine already"),!0):(t.count-=1,e&&(x.player.hearts=J1(x.player.hearts,e0[t.id]??1)),x.player.hunger=Math.min(Li,(x.player.hunger??Li)+1),xe.ui(),It(t.id==="bread"?"Ate bread — feeling better":`Ate ${t.label.split(" ")[0].toLowerCase()} — hearts and tummy happy`),ve(),!0)}function S0(){if(!Jn)return!1;const n=Jn.nearest(x.player.position.x,x.player.position.z,2.3);if(!n)return!1;const t=Jn.take(n.id);return t?(x.pickedIds=[...x.pickedIds??[],t.id],t.kind==="berry"?Ui(x.player,"berry",2,"Berries"):Ui(x.player,"fruit",1,"Fruit"),xe.place(),It(t.kind==="berry"?"Picked berries":"Picked a juicy fruit"),ve(),!0):!1}function E0(){const n=Vu();if(Math.hypot(x.player.position.x-n.x,x.player.position.z-n.z)>3.4)return!1;const t=x.player.hotbar[x.player.selectedHotbar],e=t?.id==="water_bucket"?t:Ni(x.player,"water_bucket");return e&&e.id==="water_bucket"?(e.id="water_bucket_full",e.label="Bucket of water",It("Filled your bucket at the fountain"),ve(),!0):(Ui(x.player,"water",1,"Water"),It("Collected fresh fountain water"),ve(),!0)}function T0(){if(dr)return!1;const n=me(Le.x,Le.z),t=Hu(n);if(Math.hypot(x.player.position.x-t.x,x.player.position.z-t.z)>2.6)return!1;dr=!0;const e=document.getElementById("sleep-fade");return e?.classList.add("show"),window.setTimeout(()=>{x.player.timeOfDay=zw,x.player.hearts=di,x.player.hunger=Li,ed(),Uo(x).then(()=>{e?.classList.remove("show"),dr=!1,It("Good morning — you slept safely until sunrise."),ve()})},850),!0}function A0(){if(!re)return It("No tree in reach"),!1;const n=new Set(x.choppedTrees??[]),t=Xw(re.root,At.getWorldPosition(new I),so(),4.8,n);return t?(x.choppedTrees=[...n],x.choppedAt={...x.choppedAt??{},[t.key]:Date.now()},jw(t.mesh,t.instanceId,t.key,so().x,so().z),Ui(x.player,"wood_log",lh,"Wood log"),xe.place(),It(`Chopped a tree — it falls! +${lh} wood logs`),ve(),!0):(It("Look at a tree and swing your axe"),!1)}function C0(){if(!re)return It("No rock in reach"),!1;const n=new Set(x.minedRocks??[]),t=Jw(re.root,At.getWorldPosition(new I),so(),4.8,n);return t?(x.minedRocks=[...n],x.minedAt={...x.minedAt??{},[t.key]:Date.now()},Ui(x.player,"block_stone",ch,"Stone block (build)"),xe.place(),It(`Mined stone — +${ch} stone`),ve(),!0):(It("Look at a rock and swing your pickaxe"),!1)}function yu(){const n=Fi.nearest(x.player.position.x,x.player.position.z,2.1);return n?(Fi.take(n.id),eS(x.player,1),xe.place(),It(`Picked up a coin (${x.player.coins})`),ve(),!0):!1}function PS(){const n=Ga(x.player.position.x,x.player.position.z,3.4);return n?(Ar(n),!0):!1}function nd(){return v0(lS)||vs(cS)}function R0(){const n=x.player.hotbar[x.player.selectedHotbar];if(n?.id==="drumstick"&&n.count>0)return n;const t=Ni(x.player,"drumstick");return t&&t.count>0?t:void 0}function _u(){const n=nd();if(!n)return It("No dragon in range — walk closer and look at it"),!1;if(n.bonded)return It(`${n.name} is already your pet — press E to mount`),!1;const t=R0();if(!t||t.count<=0)return It(`Need a drumstick (${Wa("drumstick")}) to feed ${n.name}`),!1;const e=j1(x.companions,n.id,1);if(x.companions=e.companions,e.rejected==="max_companions")return It("You already have 3 companions"),!1;if(t.count-=1,xe.tame(),cn.tamingHearts(new I(n.position.x,me(n.position.x,n.position.z)+.6,n.position.z)),e.bondedNow){const i=x.companions.filter(o=>o.bonded).length;It(`Tamed ${n.name}! Pets ${i}/3 — press E to mount, Space to fly`)}else{const i=x.companions.find(o=>o.id===n.id)?.tameness??0;It(`Fed ${n.name}… ${Math.round(i*100)}%`)}return ve(),!0}function P0(){const n=x.player.hotbar[x.player.selectedHotbar];if(n.id!=="block_wood"&&n.id!=="block_stone")return!1;if(n.count<=0)return It(`Out of blocks — pick Wood (${Wa("block_wood")}) or Stone (${Wa("block_stone")})`),!1;let t=Ju();const e=n.id==="block_wood"?"wood":"stone";let i=ac(x.blocks,t,e,x.player.mode,Tn);if(!i.ok&&i.reason==="occupied"){const r=Eh(t);r&&(t=r,i=ac(x.blocks,t,e,x.player.mode,Tn))}if(!i.ok&&!x.flags.buildGuideComplete){const r=Eh(t);r&&(t=r,i=ac(x.blocks,t,e,x.player.mode,Tn))}if(!i.ok)return It(i.reason==="occupied"?"That spot is taken — try next to it":i.reason==="full"?"Build limit reached":"Cannot place — unpause and look at the yellow pad"),!1;x.blocks=i.blocks,n.count-=1,xe.place();const o=Qu(x.blocks),s=Za(t.x,t.z);return x.flags.buildGuideComplete?It("Block placed"):(s||o>0?It(`Placed on pad! ${Math.min(o,3)}/3 — keep going`):It(`Block placed. Aim at the yellow pad for the build guide (${o}/3)`),o>=3&&(x.flags.buildGuideComplete=!0,It("Build guide done! Press R when you are Ready to Battle"))),Os(),ve(),!0}function I0(){const n=so(),t=At.getWorldPosition(new I);let e=null,i=4;for(const s of x.blocks){const r=Sl(s),a=r.x,l=r.y+.55,c=r.z,u=new I(a,l,c).sub(t),d=u.length();d>4||(u.normalize(),!(u.dot(n)<.55)&&d<i&&(i=d,e=s.id))}if(!e)return It("Look at a block you placed, then press X to remove"),!1;const o=x.blocks.find(s=>s.id===e);return x.blocks=x.blocks.filter(s=>s.id!==e),o&&r0(x.player,o.piece??"block",o.material),xe.place(),Os(),ve(),It("Block removed"),!0}function L0(){if(!ln)return!1;if(!s0(x.player,ln))return It("Need more wood or stone for that piece"),!1;const n=Ju(),t=b0(x.player.yaw),e=a0(x.blocks,n,ln,"wood",t,x.player.mode,Tn);return e.ok?oS(x.player,ln)?(e.replaced&&r0(x.player,e.replaced.piece??"wall",e.replaced.material),x.blocks=e.blocks,xe.place(),It(e.replaced?`Replaced a ${xs(e.replaced.piece??"wall").toLowerCase()} with a ${xs(ln).toLowerCase()}`:`Placed a ${xs(ln).toLowerCase()}`),Os(),ve(),!0):(It("Need more wood or stone for that piece"),!1):(It(e.reason==="occupied"?"That spot is taken":e.reason==="full"?"Build limit reached":"Cannot place now"),!1)}function IS(){const n=x.player.hotbar[x.player.selectedHotbar];if(ln)return L0();const t=nd();return t&&!t.bonded||n.id==="drumstick"||n.id==="bread"?_u():n.id==="block_wood"||n.id==="block_stone"?P0():(It("Select Wood/Stone to build, or press H for house pieces"),!1)}function LS(){if(Tn||ti){He(null),Xe("default"),Pi.visible=!1;return}RS();const n=x.player.hotbar[x.player.selectedHotbar],t=_0(3.5,.75);for(const[i,o]of lo){const s=t&&t.id===i;o.traverse(r=>{const a=r;if(!a.isMesh)return;const l=a.material;l?.emissive&&l.emissive.set(s?"#402010":"#000000"),l&&"emissiveIntensity"in l&&(l.emissiveIntensity=s?.35:0)})}if(t&&n.id==="sword"){Xe("target"),He(t.hostile?"Left-click: attack (hostile!)":"Left-click: attack (still peaceful until hit)");return}const e=v0(gh)||vs(gh);if(e&&!e.bonded){Xe("use"),R0()?He(`Right-click or F: feed ${e.name} — then E to ride`):He(`Need a drumstick (${Wa("drumstick")}) to feed ${e.name}`);return}if(e?.bonded&&x.player.mount==="grounded"){Xe("use"),He(`Press E to ride ${e.name}`);return}{const i=Ku();if(i&&x.player.mount==="grounded"){Xe("use"),He(`Press E to call and ride ${i.name}`);return}}if((n.id==="block_wood"||n.id==="block_stone")&&n.count>0){Xe("use"),He("Right-click: place block · X: remove looking-at block");return}if(n.id==="bread"&&x.player.hearts<x.player.maxHearts){Xe("use"),He("Press F: eat bread to heal");return}if(n.id==="axe"){Xe("use"),He("Left-click: chop a nearby tree (it falls, then grows back)");return}if(n.id==="pickaxe"){Xe("use"),He("Left-click: mine a nearby rock for stone");return}if(ln){Xe("use"),He(`Right-click: place ${xs(ln).toLowerCase()} · X: remove · H: build menu`);return}{const i=Ga(x.player.position.x,x.player.position.z,3.4);if(i){Xe("use"),He(`Press F: talk to ${Xa[i].keeper} (${Xa[i].title})`);return}}if(Fi.nearest(x.player.position.x,x.player.position.z,2.1)){Xe("use"),He("Press F: pick up a coin");return}if(Jn?.nearest(x.player.position.x,x.player.position.z,2.3)){Xe("use"),He("Press F: pick fruit or berries");return}{const i=Vu();if(Math.hypot(x.player.position.x-i.x,x.player.position.z-i.z)<3.4){Xe("use"),He("Press F: fill your bucket (or take water)");return}}{const i=me(Le.x,Le.z),o=Hu(i);if(Math.hypot(x.player.position.x-o.x,x.player.position.z-o.z)<2.6){Xe("use"),He("Press F: sleep until morning");return}}if(x.player.mount!=="grounded"){Xe("use"),He("Q: fire breath (lights torches) · E: dismount beside dragon");return}Xe("default"),He(null)}function DS(){const{nearbyIds:n}=Mp(zn(x.monsters),x.player.position,12);n.length?br(`monster nearby (${n.length})`,!0):br("clear")}function NS(n){const t=On.sample();if(t.toggleBag){Tr(!fi);return}if(t.pause){if(fi){Tr(!1);return}if(Po){Ar(null);return}if(Ho){kr(!1);return}const _=document.getElementById("install-panel");if(_&&!_.classList.contains("hidden")){id();return}const T=document.getElementById("howto");if(T&&!T.classList.contains("hidden")){T.classList.add("hidden");return}if(!Tn&&!ti){Zu(!0);return}}if(Tn||ti||fi||dr){On.restoreUnhandled(t);const _=performance.now()/1e3;for(const[,T]of Qi)eh(T,_,"idle");cn.update(n);return}if(t.slot!=null&&(x.player.selectedHotbar=t.slot,ve()),t.readyBattle)if(!x.flags.buildGuideComplete&&x.blocks.length<3){const _=performance.now();if(_>xc)xc=_+4e3,It("Place 3 blocks on the yellow pad first — press R again within 4s to skip");else{xc=0,x.flags.buildGuideComplete=!0;const T=fu(x.player.mode,"adventure");x.player.mode=T.mode,T.flagsPatch&&(x.flags={...x.flags,...T.flagsPatch}),x.monsters=Fa(zn(x.monsters)),Rs(x.player.mode),_s(x),ys=performance.now()+400,It("Skipped build guide — Adventure (monsters peaceful until you hit them)"),xe.ui(),ve()}}else{const _=fu(x.player.mode,"adventure");x.player.mode=_.mode,_.flagsPatch&&(x.flags={...x.flags,..._.flagsPatch}),x.monsters=Fa(zn(x.monsters)),Rs(x.player.mode),_s(x),ys=performance.now()+400,It("Adventure — monsters stay peaceful until you hit them"),xe.ui(),ve()}t.recenter&&p0();const e=.0022;if(performance.now()>=ys){const _=vh((t.lookDx+t.touchLookDx*40)*e),T=vh((t.lookDy+t.touchLookDy*40)*e);x.player.yaw-=_,x.player.pitch-=T}x.player.pitch=ko(x.player.pitch);const i=x.player.mount==="flying",o=x.player.mount==="mounted"||i,s=(t.sprint?9:5)*(i?1.35:1),r=Ia(x.player.yaw),a=new I(r.forward.x,0,r.forward.z),l=new I(r.right.x,0,r.right.z),c=new I;if(t.forward&&c.add(a),t.back&&c.sub(a),t.left&&c.sub(l),t.right&&c.add(l),c.lengthSq()>0&&c.normalize().multiplyScalar(s*n),i){const _=me(x.player.position.x,x.player.position.z),T=x.player.position.y-_,E=T>12?1.55:T>6?1.25:1;if(t.jump)x.player.position.y+=6*n;else{const Y=x.player.pitch<-.2?1.2+-x.player.pitch*16:1.2;x.player.position.y-=Y*n}const A=x.player.position.x+c.x*E,S=x.player.position.z+c.z*E,w=re?re.softClamp(A,S):{x:A,z:S};x.player.position.x=w.x,x.player.position.z=w.z,x.player.position=Pf(x.player.position);const M=me(x.player.position.x,x.player.position.z),R=li(x.player.position.x,x.player.position.z,1/0),N=Math.max(M,Number.isFinite(R)?R:M),U=N+qa;x.player.position.y<U&&(x.player.position.y=U);const z=x.player.position.y-N;z<=qa+.08&&!t.jump?x.player.mount="mounted":x.player.mount=K1(x.player.mount,z)}else{const _=x.player.position.x+c.x,T=x.player.position.z+c.z,E=re?re.softClamp(_,T):{x:_,z:T},A=x.player.position.y;va(x.player.position.x,x.player.position.z,A)||!va(E.x,E.z,A)?(x.player.position.x=E.x,x.player.position.z=E.z):va(E.x,x.player.position.z,A)?va(x.player.position.x,E.z,A)||(x.player.position.z=E.z):x.player.position.x=E.x,x.player.position=Pf(x.player.position);const w=o?ja.y:oo,M=li(x.player.position.x,x.player.position.z,x.player.position.y-w)+w;if(pn&&M<x.player.position.y-.35&&(pn=!1,Ln=0,wo=!0,qi=0),pn){if(x.player.position.y=M,t.jump)if(o){x.player.mount=du(x.player.mount),xe.mount();{const z=Ia(x.player.yaw);cn.fireBreath(new I(x.player.position.x,x.player.position.y,x.player.position.z),new I(z.forward.x,.1,z.forward.z))}It("Flying! Hold Space to climb · E dismount anytime (soft land)")}else Ln=7.5,pn=!1,wo=!0,qi=0}else if(Ln-=(Zi?6:22)*n,Zi&&(Ln=Math.max(Ln,-4.5)),qi=Math.max(qi,-Ln),x.player.position.y+=Ln*n,x.player.position.y<=M){const Y=wo&&qi>10;x.player.position.y=M,Ln=0,pn=!0,Zi=!1,Y?(x.player.hearts=Math.max(1,If(x.player.hearts,1)),xe.hit(),It("Oof — soft landing. Hearts safe (never zero from falls)"),ve()):wo&&qi>3&&xe.ui(),wo=!1,qi=0}const R=Pp(x.player.position.x,x.player.position.z),N=x.player.position.y<M-8||x.player.position.y<-15,U=R!==null&&x.player.position.y<R-.5&&!i;if(N||U){const z=Math.atan2(x.player.position.z,x.player.position.x),Y=Math.max(8,Math.hypot(x.player.position.x,x.player.position.z)-12),B=Math.cos(z)*Y,tt=Math.sin(z)*Y,G=me(B,tt)+oo;x.player.position={x:B,y:G,z:tt},Ln=0,pn=!0,Zi=!1,It("Rescued onto solid ground")}}if(t.toggleMount){if(x.player.mount==="grounded"){let _=vs(aS);if(_?.bonded||Ku()&&(_=y0(),_&&It(`You called ${_.name}!`)),_?.bonded){const T=uu(x.companions,_.id,x.player.mount);T.ok&&(x.player.mount=T.mount,x.player.mountedCompanionId=T.mountedCompanionId,xe.mount(),It(`Mounted ${_.name}`))}else It(_?`Feed ${_.name} a drumstick first (press 2, then right-click or F)`:"No dragon nearby — walk closer")}else{const _=x.player.position.y-me(x.player.position.x,x.player.position.z),T=Z1(x.player.mount,_);if(T.ok){const E=x.player.mountedCompanionId,A=x.companions.find(w=>w.id===E),S=u0(A?.position.x??x.player.position.x,A?.position.z??x.player.position.z,x.player.yaw,x.companions,null,me);x.player.mount="grounded",x.player.mountedCompanionId=null,x.player.position.x=S.x,x.player.position.z=S.z,T.softLanding||(x.player.position.y=S.y),_s(x),x.player.pitch=ko(x.player.pitch),T.softLanding?(Zi=!0,pn=!1,wo=!0,Ln=-1.5,It("Gliding down — landing beside your dragon")):(pn=!0,It("Dismounted beside your dragon"))}}co()}if(t.attack){const _=x.player.hotbar[x.player.selectedHotbar]?.id;x.player.mount!=="grounded"||(_==="axe"?A0():_==="pickaxe"?C0():TS())}if(t.place&&IS(),t.removeBlock&&I0(),t.interact){const _=nd();_&&!_.bonded?_u():PS()||yu()||T0()||E0()||S0()||w0()}if(x.player.mount!=="grounded"&&(t.fireBreath||t.attack)){const _=Ia(x.player.yaw);let T=new I(_.forward.x,-.18,_.forward.z).normalize(),E=new I(x.player.position.x,x.player.position.y-.15,x.player.position.z).add(T.clone().multiplyScalar(.9));const S=(x.player.mountedCompanionId?Qi.get(x.player.mountedCompanionId):void 0)?.getObjectByName("head");S&&(E=S.localToWorld(new I(0,-.02,.58)),T=S.localToWorld(new I(0,.08,3.2)).sub(E.clone()).normalize()),cn.setFireCone(!0,E,T),gc||(xe.fire(),gc=!0),Math.hypot(x.player.position.x-Co.x,x.player.position.z-Co.z)<12&&(m0=!0,ur&&hS(ur)),x.player.hotbar[x.player.selectedHotbar]?.id}else gc=!1,cn.setFireCone(!1);Zw(),Fi.update(performance.now()/1e3),Fi.nearest(x.player.position.x,x.player.position.z,1.5)&&yu(),US(Date.now()),LS(),xM(zn(x.monsters),x.player.position),DS();const d=yM(zn(x.monsters),x.player.position,1.6,.35*n);if(d.damageToPlayer>0&&x.player.mode==="adventure")if(iS(x.player.hotbar[x.player.selectedHotbar]?.id??""))It("Your shield blocked the hit!");else{const _=x.player.hearts;x.player.hearts=If(x.player.hearts,d.damageToPlayer),x.player.hearts<_&&(xe.hurt(),lw(document.getElementById("hearts")),ve(),x.player.hearts<=0&&(x.player.hearts=di,Ur(x),Ro(x),It("You rested at camp — hearts restored"),ve()))}const f=x.player.mount!=="grounded";At.position.set(x.player.position.x,x.player.position.y+(i&&!f?.35:0),x.player.position.z),At.rotation.order="YXZ",At.rotation.y=x.player.yaw,At.rotation.x=x.player.pitch,Ti&&(At.position.set(Ti.x,Ti.y,Ti.z),At.lookAt(Ti.tx,Ti.ty,Ti.tz));const h=f?.35:.2;Math.abs(At.near-h)>.001&&(At.near=h,At.updateProjectionMatrix()),fr.visible=!f,Jn&&(Jn.root.visible=!f||ye!=="low");{const _=Ut.getObjectByName("skyDome");_&&_.position.copy(At.position)}cr>0?(cr-=n,fr.rotation.x=-Math.sin((1-cr/.35)*Math.PI)*.9):fr.rotation.x=Math.sin(performance.now()/500)*.03;const g=performance.now()/1e3,y=(_,T)=>{_.userData.castOn!==T&&(_.userData.castOn=T,_.traverse(E=>{const A=E;A.isMesh&&A.name!=="blobShadow"&&(A.castShadow=T&&nn.shadows)}))};for(const[_,T]of Qi){const E=x.player.mountedCompanionId===_&&x.player.mount!=="grounded";E&&x0(T);const A=E?0:Math.hypot(T.position.x-x.player.position.x,T.position.z-x.player.position.z),S=ye==="low"?30:rs.dragonDraw,w=ye==="low"?0:rs.dragonLod;T.visible=A<S,y(T,A<rs.dragonShadow);const M=T.getObjectByName("blobShadow");M&&(M.visible=!nn.shadows&&!E&&A<8&&x.player.mount==="grounded");const R=A>w&&x.player.mountedCompanionId!==_;if(T.userData.lodFar!==R){T.userData.lodFar=R;const U=T.getObjectByName("dBody"),z=T.getObjectByName("dLod");U&&z&&(U.visible=!R,z.visible=R)}const N=x.companions.find(U=>U.id===_);if(N&&!E&&(Math.abs(T.position.x-N.position.x)>.001||Math.abs(T.position.z-N.position.z)>.001)){const U=me(N.position.x,N.position.z);T.position.set(N.position.x,li(N.position.x,N.position.z,U+.3)+.02,N.position.z)}}for(const[_,T]of lo){const E=x.monsters.find(N=>N.id===_),A=Math.hypot(T.position.x-x.player.position.x,T.position.z-x.player.position.z),S=ye==="low"?26:rs.monsterDraw,w=ye==="low"?0:rs.monsterLod;T.visible=!!E?.alive&&A<S,y(T,A<rs.monsterShadow);const M=T.getObjectByName("blobShadow");M&&(M.visible=!nn.shadows&&A<8&&x.player.mount==="grounded");const R=A>w&&!E?.hostile;if(T.userData.lodFar!==R){T.userData.lodFar=R;for(const N of T.children)N.name==="mLod"?N.visible=R:N.name!=="blobShadow"&&(N.visible=!R)}}for(const[_,T]of Qi){if(!T.visible)continue;const E=x.player.mountedCompanionId===_,A=E&&i?"fly":E&&o?"walk":i&&E?"glide":"idle";T.userData.lodFar||eh(T,g,A);const S=x.companions.find(M=>M.id===_),w=hs.get(_);w!==void 0&&!E?T.rotation.y=w+Math.sin(g*.4)*.06:S?.bonded&&!E&&(T.rotation.y=Math.sin(g*.7)*.2)}for(const[_,T]of lo){if(!T.visible)continue;const A=x.monsters.find(S=>S.id===_)?.hostile?"attack":"idle";qb(T,g,A),T.position.y=me(T.position.x,T.position.z)}const p=Ut.getObjectByName("chimneySmoke");p&&p.children.forEach((_,T)=>{const E=(g*.25+T/_.parent.children.length)%1;_.position.y=4.6+E*1.8,_.position.x=-1.7+Math.sin(g*.6+T)*.15+E*.5,_.scale.setScalar(.8+E*1.6);const A=_.material;A&&"opacity"in A&&(A.transparent=!0,A.opacity=.38*(1-E),A.depthWrite=!1)});const m=Ut.getObjectByName("waterSurface");if(m){const _=m.material;_.opacity=.78+Math.sin(g*1.5)*.04}if(cn.update(n),!i&&c.lengthSq()>0&&performance.now()-bh>280&&(bh=performance.now(),cn.footDust(new I(x.player.position.x,me(x.player.position.x,x.player.position.z),x.player.position.z))),x.player.mountedCompanionId){const _=x.companions.find(T=>T.id===x.player.mountedCompanionId);_&&(_.position={x:x.player.position.x,y:0,z:x.player.position.z})}const v=gn(x.player.position.x,x.player.position.z);Ut.background=new vt(v.skyTint);const b=(ye==="low"?1.25:ye==="high"?.9:1)*v.fogDensity;Ut.fog&&Ut.fog.isFogExp2&&(Ut.fog.color.set(v.fogColor),Ut.fog.density=Math.min(b*.55,.005));{const _=Math.hypot(x.player.position.x,x.player.position.z),T=[...Np,...Up,...zp];let E=T[0],A=1/0;for(const Y of T){const B=Math.hypot(x.player.position.x-Y.x,x.player.position.z-Y.z);B<A&&(A=B,E=Y)}const S=document.getElementById("nav-biome");if(S){const Y=A<80?` · ${E.label} ${Math.round(A)}m`:"";S.textContent=`${v.label} · ${Math.round(_)} m from home${Y}`}const w=Math.atan2(-x.player.position.x,-x.player.position.z),M=Math.atan2(E.x-x.player.position.x,E.z-x.player.position.z),R=A<60,N=(R?M:w)-x.player.yaw,U=document.getElementById("nav-compass");U&&(U.style.transform=`rotate(${N*180/Math.PI}deg)`,U.title=R?E.label:"Home"),_>40&&A>25?br(`Home ${Math.round(_)}m`,!1):A<25&&br(`${E.label}`,!1);const z=Ut.getObjectByName("terrain");if(z){nb(z,{x:x.player.position.x,z:x.player.position.z},T);const Y=z.getObjectByName("castleLandmark");Y&&gb(Y,x.player.position.x,x.player.position.z,Tl);const B=z.getObjectByName("townLandmark");B&&Ib(B,x.player.position.x,x.player.position.z);{const G=jM(me(Le.x,Le.z)),rt=Math.hypot(x.player.position.x-G.x,x.player.position.z-G.z);Sr.position.copy(G),Sr.intensity=rt<12?9*(.92+Math.sin(performance.now()/90)*.04+Math.sin(performance.now()/37)*.04):0}const tt=z.getObjectByName("cabinDoor");if(tt){const G=new I;tt.getWorldPosition(G);const rt=Math.hypot(x.player.position.x-G.x,x.player.position.z-G.z);QM(tt,rt<3.2?1:0,n)}}}if(oi){const _=oi.geometry.attributes.position,T=_.array,E=Ri==="snow"?4:12;for(let A=0;A<T.length;A+=3)T[A+1]-=E*n,T[A+1]<0&&(T[A+1]=28),T[A]+=x.player.position.x*0;oi.position.set(x.player.position.x,0,x.player.position.z),_.needsUpdate=!0}performance.now()-yh>8e3&&(yh=performance.now(),Uo(x))}window.addEventListener("resize",()=>{At.aspect=window.innerWidth/window.innerHeight,At.updateProjectionMatrix(),tn.setSize(window.innerWidth,window.innerHeight)});El.addEventListener("contextmenu",n=>n.preventDefault());function D0(){const n=document.getElementById("install-panel"),t=document.getElementById("install-offline-status");if(t){const e=document.getElementById("offline-pill")?.textContent||"unknown";t.textContent=`Offline status: ${e}. Bookmark this page after Offline ready. ZIP is a static backup — not a file:// app.`}Nr.classList.add("hidden"),n?.classList.remove("hidden"),n?.querySelector("button")?.focus()}function id(){document.getElementById("install-panel")?.classList.add("hidden")}document.getElementById("btn-install-info")?.addEventListener("click",D0);document.getElementById("btn-install-pause")?.addEventListener("click",D0);document.getElementById("btn-install-close")?.addEventListener("click",()=>id());window.addEventListener("keydown",n=>{if(n.code!=="Escape")return;const t=document.getElementById("install-panel");t&&!t.classList.contains("hidden")&&(n.preventDefault(),id())});function Ka(){At.position.set(x.player.position.x,x.player.position.y,x.player.position.z),At.rotation.order="YXZ",At.rotation.y=x.player.yaw,At.rotation.x=x.player.pitch}document.getElementById("btn-start").onclick=async()=>{await xe.unlock(),d0.classList.add("hidden"),!x.flags.readyToBattleAcknowledged&&x.blocks.length===0&&!x.companions.some(n=>n.bonded)&&(Ur(x),Ro(x),co(),Er()),_s(x),x.player.pitch=ko(zr),Ka(),ys=performance.now()+900,On.armPointerLockIgnore(),Zu(!1),On.requestLock(),x.flags.tutorialSeen=!0,x.flags.welcomeShownOnce?It("Welcome back — pad · pets · explore",1800):(It("Welcome! Build on the yellow pad, feed a dragon, then explore the cabin, stable, tower & castle.",4200),x.flags.welcomeShownOnce=!0),ve(),window.setTimeout(()=>{Math.abs(x.player.pitch+.18)>.2&&(x.player.pitch=-.18,Ka())},500)};document.getElementById("btn-howto").onclick=()=>{Nr.classList.remove("hidden")};document.getElementById("btn-howto-close").onclick=()=>{Nr.classList.add("hidden")};document.getElementById("btn-help").onclick=()=>{Nr.classList.remove("hidden")};document.getElementById("btn-resume").onclick=()=>{Zu(!1),On.requestLock()};document.getElementById("btn-ready").onclick=()=>{x.player.mode="adventure",x.flags.readyToBattleAcknowledged=!0,x.monsters=Fa(zn(x.monsters)),Rs("adventure"),It("Ready! Monsters stay peaceful until you attack")};document.getElementById("btn-safe").onclick=()=>{x.player.mode="safe_build",Rs("safe_build"),It("Safe Build — combat disabled")};document.getElementById("btn-bag")?.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),Tr(!fi)});document.getElementById("btn-inv-close")?.addEventListener("click",()=>Tr(!1));document.getElementById("btn-build")?.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),kr(!Ho)});document.getElementById("btn-build-close")?.addEventListener("click",()=>kr(!1));document.getElementById("btn-shop-close")?.addEventListener("click",()=>Ar(null));document.querySelectorAll("#build-list button").forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.piece;t&&(ln=t,kr(!0),It(`Building ${xs(t).toLowerCase()} — right-click to place`))})});window.addEventListener("keydown",n=>{if(n.code==="KeyH"&&!n.repeat&&!n.ctrlKey&&!n.metaKey&&!n.altKey){const t=n.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;n.preventDefault(),kr(!Ho)}});document.getElementById("btn-save").onclick=async()=>{const n=document.getElementById("save-msg");try{await Uo(x),xe.save(),n&&(n.textContent=`Saved locally · v${Ml}`)}catch(t){n&&(n.textContent=`Save failed: ${t instanceof Error?t.message:"error"}`)}};document.getElementById("btn-export").onclick=()=>{const n=new Blob([uM(x)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(n),t.download="dragon-adventures-save.json",t.click()};document.getElementById("import-file").addEventListener("change",async n=>{const t=n.target.files?.[0];if(!t)return;const e=await t.text(),o=dM(e,x),s=document.getElementById("save-msg");if(!o.ok){s&&(s.textContent=o.error+" Previous save kept.");return}x=o.state,Er(),co(),Os(),ve(),await Uo(x),s&&(s.textContent="Import OK after validation.")});document.getElementById("btn-mute").onclick=n=>{xe.muted=!xe.muted,x.settings.muted=xe.muted,n.target.textContent=`Mute: ${xe.muted?"On":"Off"}`};function N0(n){return`Quality: ${n[0].toUpperCase()}${n.slice(1)}`}function od(){re&&(x.choppedTrees?.length&&$w(re.root,x.choppedTrees),x.minedRocks?.length&&Qw(re.root,x.minedRocks))}function US(n){if(!re||n-Mh<1500)return;Mh=n;const t=fh(x.choppedTrees??[],x.choppedAt??{},n,Yw);t.restored.length&&(dh(re.root,t.restored,i=>i.startsWith("trees_"),{x:1/.55,y:1/.12,z:1/.55}),x.choppedTrees=t.remain,x.choppedAt=t.remainAt);const e=fh(x.minedRocks??[],x.minedAt??{},n,qw);e.restored.length&&(dh(re.root,e.restored,i=>i==="rocks",{x:1/.45,y:1/.1,z:1/.45}),x.minedRocks=e.remain,x.minedAt=e.remainAt)}function zS(){Ai||(Ai=new Bw(ye),Ut.add(Ai.root)),Jn||(Jn=new Ww(x.pickedIds??[]),Ut.add(Jn.root),Ut.add(Fi.root)),ur||(ur=fS(),Ut.add(ur)),od()}function U0(){const n=Ut.getObjectByName("terrain");n&&Ut.remove(n);const t=Ut.getObjectByName("skyDome");t&&Ut.remove(t),Ya=Vp(Ut,ye),Ut.add(Ya),re&&(Ut.remove(re.root),re.dispose()),re=new Hp(ye),Ut.add(re.root),od()}function z0(n,t=!0){x.settings.quality=n;for(const i of[...Qi.values(),...lo.values()])delete i.userData.castOn;ye=yl(n,$a.suggested),nn=_l(ye),vl(tn,mi,nn),cn.setBudget(nn.particles),(async()=>{try{await bp(ye)}catch{}U0(),co();const i=jp(Ut);window.__DA_PERF={tier:ye,setting:n,triangles:i.triangles,drawCallsApprox:i.meshes,textures:i.textures,note:"NOT a Chromebook measurement; headless/proxy stats only"}})(),t&&Uo(x);const e=document.getElementById("btn-quality");e&&(e.textContent=N0(n)+" (live)")}window.__DA_SET_QUALITY=n=>{z0(n,!0)};document.getElementById("btn-quality").onclick=()=>{const n=["low","medium","high","auto"],t=n.indexOf(x.settings.quality);z0(n[(t+1)%n.length])};document.getElementById("btn-weather").onclick=n=>{Ri=Ri==="off"?"rain":Ri==="rain"?"snow":"off",bS(),n.target.textContent=`Weather: ${Ri[0].toUpperCase()}${Ri.slice(1)}`};document.getElementById("btn-appear").onclick=()=>{document.getElementById("appear-panel").classList.toggle("hidden")};for(const[n,t]of[["col-hair","hair"],["col-top","top"],["col-pants","trousers"],["col-shoes","shoes"]])document.getElementById(n)?.addEventListener("input",e=>{x.player.appearance[t]=e.target.value});function kS(){At.position.clone();const n=new I;At.getWorldDirection(n);const t=new As,e=new Rt().multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse);t.setFromProjectionMatrix(e);let i=0;for(const[,a]of Qi)a.visible&&t.containsPoint(a.position)&&i++;let o=0;for(const[,a]of lo)a.visible&&t.containsPoint(a.position)&&o++;const s=Ut.getObjectByName("homeCabin");let r=!1;if(s){const a=new I;if(s.getWorldPosition(a),r=t.containsPoint(a),!r){for(const[l,c,u]of[[2,1,2],[-2,1,2],[0,2,3],[0,1,-2],[0,3,0]])if(t.containsPoint(new I(a.x+l,a.y+c,a.z+u))){r=!0;break}}if(!r){const l=a.clone().sub(At.position),c=new I;At.getWorldDirection(c),l.length()<45&&l.normalize().dot(c)>.35&&(r=!0)}}window.__DA_SCENE_INFO={dragons:i,monsters:o,house:r,pitch:x.player.pitch,yaw:x.player.yaw,quality:x.settings.quality,resolvedTier:ye}}let yc=performance.now(),Th=0;function k0(n){const t=Math.min(.05,(n-yc)/1e3),e=n-yc;if(yc=n,$a.push(e),x.settings.quality==="auto"&&n-Th>2500){Th=n;const a=yl("auto",$a.suggested);a!==ye&&(ye=a,nn=_l(ye),vl(tn,mi,nn),cn.setBudget(nn.particles))}if(NS(t),Ai&&!ti&&Ai.update(t,x.player.position.x,x.player.position.z),cb(performance.now()/1e3),x.player.timeOfDay=((x.player.timeOfDay??8)+t/240)%24,Math.floor(performance.now()/400)%2===0&&ed(),re&&!ti){const a=new As,l=new Rt().multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse);a.setFromProjectionMatrix(l),re.update(x.player.position.x,x.player.position.z,a,ye==="low"?3:5),od();const c=me(x.player.position.x,x.player.position.z),u=li(x.player.position.x,x.player.position.z,1/0),d=Math.max(c,Number.isFinite(u)?u:c);if(x.player.mount==="flying")x.player.position.y<d+qa&&(x.player.position.y=d+qa);else if(pn){const f=x.player.mount!=="grounded"?ja.y:oo,h=li(x.player.position.x,x.player.position.z,x.player.position.y-f)+f;Math.abs(x.player.position.y-h)>.6&&x.player.position.y<h+2&&(x.player.position.y=h)}window.__DA_STREAM={...re.stats,tier:ye,note:"NOT a Chromebook measurement"}}{const a=["stableRest0","stableRest1","stableRest2"],l=Ut.getObjectByName("terrain");if(l){let c=0;for(const u of x.companions){if(!u.bonded||x.player.mountedCompanionId===u.id){hs.delete(u.id);continue}const d=Math.hypot(u.position.x-wn.x,u.position.z-wn.z);if(d>=14&&hs.delete(u.id),d<14&&c<a.length){const f=l.getObjectByName(a[c++]);if(f){const h=new I;f.getWorldPosition(h);const g=1-Math.exp(-t*1.6);u.position.x+=(h.x-u.position.x)*g,u.position.z+=(h.z-u.position.z)*g,Math.hypot(h.x-u.position.x,h.z-u.position.z)<.6&&hs.set(u.id,wn.ry)}}}}}kS();const i=El,o=vs(40),s=o?Fs(o.position,x.player.position):999;let r=x.player.yaw;if(o){const a=o.position.x-x.player.position.x,l=o.position.z-x.player.position.z;r=Math.atan2(-a,-l)}i.__gameCamProbe={x:x.player.position.x,y:x.player.position.y,z:x.player.position.z,yaw:x.player.yaw,pitch:x.player.pitch,mount:x.player.mount,nearestDragonDist:s,faceYaw:r,pets:x.companions.filter(a=>a.bonded).length,sceneStats:()=>{const a={};for(const l of Ut.children){const c=(u,d)=>{if(!u.visible)return;const f=u;if(f.isMesh){const h=a[d]??={vis:0,cast:0};h.vis++,f.castShadow&&h.cast++}for(const h of u.children)c(h,d==="terrain"?`terrain/${h.name||"anon"}`:d)};if(l.name==="terrain")for(const u of l.children)c(u,`terrain/${u.name||"anon"}`);else l.name==="streamedWorld"?l.traverse(u=>{const d=u;if(d.isMesh&&u.visible&&u.parent?.visible){const f=a["stream/"+(u.name||"anon")]??={vis:0,cast:0};f.vis++,d.castShadow&&f.cast++}}):c(l,l.name||l.type)}return a},dragonPositions:()=>x.companions.filter(a=>a.kind==="dragon").sort((a,l)=>Number(l.bonded)-Number(a.bonded)).map(a=>({x:a.position.x,z:a.position.z,bonded:a.bonded,inStall:hs.has(a.id)})),blocks:x.blocks.length,buildGuideComplete:x.flags.buildGuideComplete,mode:x.player.mode,selectedId:x.player.hotbar[x.player.selectedHotbar]?.id??"empty",inventory:()=>[...x.player.hotbar,...x.player.inventory],bagOpen:()=>fi,hunger:()=>x.player.hunger,timeOfDay:()=>x.player.timeOfDay,choppedTrees:()=>[...x.choppedTrees??[]],minedRocks:()=>[...x.minedRocks??[]],coins:()=>x.player.coins??0,spawnMountInfo:()=>{const a=x.companions.find(c=>c.id==="wild_ember")??x.companions.find(c=>c.kind==="dragon"),l=a?Math.hypot(a.position.x-x.player.position.x,a.position.z-x.player.position.z):null;return{px:x.player.position.x,pz:x.player.position.z,dx:a?.position.x??null,dz:a?.position.z??null,dist:l,bonded:!!a?.bonded,mounted:x.player.mount!=="grounded",mountId:x.player.mountedCompanionId,name:a?.name??null}},callDragon:()=>{const a=y0();return a?{ok:!0,id:a.id,x:a.position.x,z:a.position.z}:{ok:!1}},monstersAlive:()=>x.monsters.filter(a=>a.alive).map(a=>({id:a.id,kind:a.kind,x:a.position.x,z:a.position.z})),seedDemoHouse:a=>{const u=(d,f,h,g,y=0)=>{const p=a0(x.blocks,{x:f,y:h,z:g},d,"wood",y,x.player.mode,!1);p.ok&&(x.blocks=p.blocks)};x.blocks=x.blocks.filter(d=>d.x<17||d.x>21||d.z<15||d.z>19);for(let d=0;d<3;d++)for(let f=0;f<3;f++)u("floor",18+d,0,16+f);if(u("wall",18,0,16,2),u("wall",19,0,16,2),u("wall",20,0,16,2),a==="finished"){u("wall",18,0,18,0),u("door",19,0,18,0),u("wall",20,0,18,0),u("window",19,0,16,2),u("wall",18,0,16,1),u("window",18,0,17,1),u("wall",18,0,18,1),u("wall",20,0,16,3),u("wall",20,0,17,3),u("wall",20,0,18,3);for(let d=0;d<3;d++)for(let f=0;f<3;f++)u("roof",18+d,0,16+f,0)}return Os(),ve(),x.blocks.filter(d=>d.x>=18&&d.x<=20&&d.z>=16&&d.z<=18).length},setCoins:a=>(x.player.coins=Math.max(0,Math.floor(a)),ve(),x.player.coins),coinDrops:()=>Fi.items.filter(a=>!a.taken).map(a=>({id:a.id,x:a.x,z:a.z})),spawnCoins:(a,l,c=2)=>Fi.spawn(a,l,c).map(u=>u.id),pickNearestCoin:()=>yu(),shopHere:()=>Ga(x.player.position.x,x.player.position.z,6),openShop:a=>{const l=a??Ga(x.player.position.x,x.player.position.z,8);return l?(Ar(l),!0):!1},buyItem:(a,l)=>{const c=o0(x.player,a,l);return c.ok&&ve(),td(),c},closeShop:()=>Ar(null),selectHousePiece:a=>(ln=a,a),placeHouseOnce:()=>L0(),removeHouseOnce:()=>I0(),worldHalf:()=>mn,housePieces:()=>x.blocks.filter(a=>a.piece&&a.piece!=="block"),town:()=>({x:Re.x,z:Re.z,shops:{hardware:Ra("hardware"),food:Ra("food"),weapons:Ra("weapons")}}),mineAhead:()=>C0(),lastFireSoft:()=>!!cn,pickedIds:()=>[...x.pickedIds??[]],fountain:()=>Vu(),bed:()=>Hu(me(Le.x,Le.z)),wildlifeNear:a=>{const l=Ai?.nearest(a,x.player.position.x,x.player.position.z);return l?{x:l.x,y:l.y,z:l.z,state:l.state}:null},wildlifeList:a=>(Ai?.critters||[]).filter(l=>l.kind===a).map(l=>({x:l.x,y:l.y,z:l.z,state:l.state})),pinWildlife:(a,l,c)=>{if(!Ai)return null;const u=l??x.player.position.x,d=c??x.player.position.z,f=Ai.nearest(a,u,d);return f?(f.timer=40,f.pinned=!0,a==="bird"?(f.state="perch",f.perchY=4.8,f.y=4.8):f.state="idle",{x:f.x,y:f.y,z:f.z,state:f.state}):null},campfire:()=>({...Co,lit:m0}),fireConeOn:()=>cn.isFireConeOn(),fireConeStats:()=>{const a=cn.isFireConeOn(),l=Ut.getObjectByName("fireCone");if(!a||!l||!l.visible)return{on:!1,count:0,visible:0,inFrustum:!1};const c=l.geometry.attributes.position,u=c.count;At.updateMatrixWorld();const d=new Rt().multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),f=new As().setFromProjectionMatrix(d);let h=0;const g=new I;for(let y=0;y<u;y++)g.fromBufferAttribute(c,y),f.containsPoint(g)&&h++;return{on:!0,count:u,visible:h,inFrustum:h>0}},mounted:()=>x.player.mount!=="grounded",mountState:()=>x.player.mount,lineOfSight:(a,l,c)=>{const u=At.position.clone(),f=new I(a,l,c).clone().sub(u),h=f.length();if(h<.2)return{dist:h,blocked:!1,hit:null};f.normalize();const y=new ku(u,f,.15,Math.max(.2,h-.25)).intersectObjects(Ut.children,!0),p=new Set(["rabbits","foxes","birds","wildlife","fireCone","fx","fpArm","skyDome"]),m=y.find(v=>{let b=v.object;for(;b;){if(p.has(b.name))return!1;b=b.parent}return!0});return{dist:h,blocked:!!m,hit:m?{name:m.object.name,parent:m.object.parent?.name||"",d:m.distance}:null}},setPhotoCam:(a,l,c,u,d,f)=>{Ti={x:a,y:l,z:c,tx:u,ty:d,tz:f}},clearPhotoCam:()=>{Ti=null},openBag:()=>(Tr(!0),fi),chopAhead:()=>A0(),pickAhead:()=>S0(),fillFountain:()=>E0(),sleepNow:()=>T0(),eatNow:()=>w0(),selectItem:a=>{const l=x.player.hotbar.findIndex(c=>c.id===a);return l<0?!1:(x.player.selectedHotbar=l,ve(),!0)},biome:gn(x.player.position.x,x.player.position.z).primary,biomeLabel:gn(x.player.position.x,x.player.position.z).label,distHome:Math.hypot(x.player.position.x,x.player.position.z),stream:re?.stats??null,castle:{x:Sh.x,z:Sh.z,plateauY:ml()},landmarks:()=>[...Np,...Up,...zp],towerPathWorld:()=>KM().map(a=>Ba(Zn,a.x,a.z)),cabinPose:()=>({...Le}),stablePose:()=>({...wn}),towerPose:()=>({...Zn}),localToWorld:(a,l,c)=>Ba(a==="cabin"?Le:a==="stable"?wn:Zn,l,c),groundAtFeet:(a,l,c)=>li(a,l,c),onGround:()=>pn,lights:()=>({cabin:Sr.intensity,hall:Tl.intensity}),castleNearLoaded:()=>!!Ut.getObjectByName("castleNear")&&Ut.getObjectByName("castleNear").visible,cabinInteriorLoaded:()=>!!Ut.getObjectByName("cabin-interior")&&Ut.getObjectByName("cabin-interior").visible,castleScreenBBox:()=>yS(),treesNear:a=>_S(a??25),nearestTrees:()=>vS(12),nearestRocks:()=>MS(12),setYaw:a=>{x.player.yaw=a,At.rotation.order="YXZ",At.rotation.y=a},setPitch:a=>{x.player.pitch=ko(a),At.rotation.order="YXZ",At.rotation.x=x.player.pitch},recenterLook:()=>p0(),pitchLimits:()=>({min:f0,max:h0,def:zr}),faceNearestMonster:()=>{const a=SS(40);if(!a)return!1;const l=a.position.x-x.player.position.x,c=a.position.z-x.player.position.z;x.player.yaw=Math.atan2(-l,-c),x.player.pitch=-.15,At.rotation.order="YXZ",At.rotation.y=x.player.yaw,At.rotation.x=x.player.pitch;const u=Math.hypot(l,c);return u>2.8&&(x.player.position.x=a.position.x-l/u*2.2,x.player.position.z=a.position.z-c/u*2.2,Ro(x),At.position.set(x.player.position.x,x.player.position.y,x.player.position.z)),!0},teleportTo:(a,l,c)=>{x.player.position.x=a,x.player.position.z=l;const u=(c===void 0?me(a,l):li(a,l,c))+oo;return x.player.position.y=u,pn=!0,Ln=0,Zi=!1,At.position.set(a,u,l),re?.flushAround(a,l,2),{x:a,y:u,z:l,biome:gn(a,l).primary,label:gn(a,l).label}},forceFallFrom:a=>{const l=me(x.player.position.x,x.player.position.z);return x.player.position.y=l+a,pn=!1,wo=!0,Zi=!1,Ln=0,qi=0,At.position.y=x.player.position.y,!0},hearts:()=>x.player.hearts,forceUndergroundThenSnap:()=>(x.player.position.y=-20,Ro(x),At.position.set(x.player.position.x,x.player.position.y,x.player.position.z),x.player.position.y),pressReady:()=>{const a=fu(x.player.mode,"adventure");return x.player.mode=a.mode,a.flagsPatch&&(x.flags={...x.flags,...a.flagsPatch}),x.flags.buildGuideComplete=!0,x.monsters=Fa(zn(x.monsters)),Rs(x.player.mode),_s(x),ys=performance.now()+400,x.player.mode},mountNearest:()=>{const a=vs(10);if(!a)return!1;a.bonded=!0;const l=uu(x.companions,a.id,"grounded");return l.ok?(x.player.mount=l.mount,x.player.mountedCompanionId=l.mountedCompanionId,co(),!0):!1},startFlight:()=>(x.player.mount=du(x.player.mount),x.player.mount==="flying"),dismountNow:()=>{const a=x.player.mountedCompanionId,l=x.companions.find(u=>u.id===a),c=u0(l?.position.x??x.player.position.x,l?.position.z??x.player.position.z,x.player.yaw,x.companions,null,me);return x.player.position={x:c.x,y:c.y,z:c.z},x.player.mount="grounded",x.player.mountedCompanionId=null,pn=!0,Zi=!1,co(),At.position.set(c.x,c.y,c.z),{x:c.x,y:c.y,z:c.z,dragon:l?{x:l.position.x,z:l.position.z}:null}},setFlyHeight:a=>{if(x.player.mount==="grounded"){const l=vs(10);if(l){l.bonded=!0;const c=uu(x.companions,l.id,"grounded");c.ok&&(x.player.mount=c.mount,x.player.mountedCompanionId=c.mountedCompanionId)}x.player.mount=du(x.player.mount==="grounded"?"mounted":x.player.mount)}return x.player.mount="flying",x.player.position.y=a,pn=!1,At.position.y=a,{y:x.player.position.y,mount:x.player.mount}},pickupsList:()=>Jn?Jn.items.filter(a=>!a.taken).map(a=>({id:a.id,kind:a.kind,x:a.x,z:a.z})):[],padProgress:()=>Qu(x.blocks),placeBlockOnce:()=>P0(),teleportNearPad:()=>{x.player.position.x=Me.x,x.player.position.z=Me.z+1.2,Ro(x),x.player.yaw=Math.atan2(-(Me.x-x.player.position.x),-(Me.z-x.player.position.z)),x.player.pitch=-.55,At.rotation.order="YXZ",At.rotation.y=x.player.yaw,At.rotation.x=x.player.pitch,At.position.set(x.player.position.x,x.player.position.y,x.player.position.z)}},tn.render(Ut,At),window.__DA_RENDER_INFO={calls:tn.info.render.calls,triangles:tn.info.render.triangles,points:tn.info.render.points,lines:tn.info.render.lines,geometries:tn.info.memory.geometries,textures:tn.info.memory.textures},requestAnimationFrame(k0)}wS().then(()=>requestAnimationFrame(k0));export{mw as _};
