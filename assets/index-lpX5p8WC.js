(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="170",Tf=0,Wc=1,Af=2,kh=1,Bh=2,ii=3,Nn=0,Ke=1,Be=2,Ti=0,Us=1,Ho=2,Xc=3,qc=4,Cf=5,Ji=100,Rf=101,Pf=102,Lf=103,If=104,Df=200,Nf=201,Uf=202,Ff=203,hl=204,dl=205,Of=206,zf=207,kf=208,Bf=209,Hf=210,Gf=211,Vf=212,Wf=213,Xf=214,fl=0,pl=1,ml=2,Gs=3,gl=4,xl=5,_l=6,vl=7,Hh=0,qf=1,Yf=2,Ai=0,$f=1,jf=2,Zf=3,Jf=4,Kf=5,Qf=6,Gh=7,Vh=300,Vs=301,Ws=302,yl=303,Ml=304,Ko=306,Xn=1e3,ze=1001,bl=1002,dn=1003,tp=1004,Qr=1005,Gn=1006,Sa=1007,ts=1008,ui=1009,Wh=1010,Xh=1011,Ar=1012,cc=1013,is=1014,Vn=1015,Br=1016,uc=1017,hc=1018,Xs=1020,qh=35902,Yh=1021,$h=1022,Pn=1023,jh=1024,Zh=1025,Fs=1026,qs=1027,dc=1028,fc=1029,Jh=1030,pc=1031,mc=1033,No=33776,Uo=33777,Fo=33778,Oo=33779,Sl=35840,wl=35841,El=35842,Tl=35843,Al=36196,Cl=37492,Rl=37496,Pl=37808,Ll=37809,Il=37810,Dl=37811,Nl=37812,Ul=37813,Fl=37814,Ol=37815,zl=37816,kl=37817,Bl=37818,Hl=37819,Gl=37820,Vl=37821,zo=36492,Wl=36494,Xl=36495,Kh=36283,ql=36284,Yl=36285,$l=36286,ep=3200,np=3201,Qh=0,ip=1,si="",ke="srgb",Ks="srgb-linear",Qo="linear",he="srgb",ds=7680,Yc=519,sp=512,rp=513,op=514,td=515,ap=516,lp=517,cp=518,up=519,$c=35044,jc="300 es",oi=2e3,Go=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const _r=Math.PI/180,Cr=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function hp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dp(i,t,e){return i!==t?(e-i)/(t-i):0}function vr(i,t,e){return(1-e)*i+e*t}function fp(i,t,e,n){return vr(i,t,1-Math.exp(-e*n))}function pp(i,t=1){return t-Math.abs(gc(i,t*2)-t)}function mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _p(i,t){return i+Math.random()*(t-i)}function vp(i){return i*(.5-Math.random())}function yp(i){i!==void 0&&(Zc=i);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mp(i){return i*_r}function bp(i){return i*Cr}function Sp(i){return(i&i-1)===0&&i!==0}function wp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rr={DEG2RAD:_r,RAD2DEG:Cr,generateUUID:cs,clamp:Oe,euclideanModulo:gc,mapLinear:hp,inverseLerp:dp,lerp:vr,damp:fp,pingpong:pp,smoothstep:mp,smootherstep:gp,randInt:xp,randFloat:_p,randFloatSpread:vp,seededRandom:yp,degToRad:Mp,radToDeg:bp,isPowerOfTwo:Sp,ceilPowerOfTwo:wp,floorPowerOfTwo:Ep,setQuaternionFromProperEuler:Tp,normalize:je,denormalize:Rs};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],y=s[4],v=s[7],P=s[2],E=s[5],C=s[8];return r[0]=o*x+a*_+l*P,r[3]=o*m+a*y+l*E,r[6]=o*p+a*v+l*C,r[1]=c*x+u*_+h*P,r[4]=c*m+u*y+h*E,r[7]=c*p+u*v+h*C,r[2]=d*x+f*_+g*P,r[5]=d*m+f*y+g*E,r[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new jt;function ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ap(){const i=Pr("canvas");return i.style.display="block",i}const Jc={};function pr(i){i in Jc||(Jc[i]=!0,console.warn(i))}function Cp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Qo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],tu=[.3127,.329],eu=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Ks]:{primaries:Kc,whitePoint:tu,transfer:Qo,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Kc,whitePoint:tu,transfer:he,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let fs;class Lp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=Pr("canvas")),fs.width=t.width,fs.height=t.height;const n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ip=0;class nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ea(s[o].image)):r.push(Ea(s[o]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dp=0;class He extends Qs{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=ze,s=ze,r=Gn,o=ts,a=Pn,l=ui,c=He.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=cs(),this.name="",this.source=new nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xn:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xn:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Vh;He.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(f+1)/2,P=(p+1)/2,E=(u+d)/4,C=(h+x)/4,w=(g+m)/4;return y>v&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=C/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=w/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=C/r,s=w/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Np extends Qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Np{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class id extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Up extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,p*_);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}const v=a*_;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+x*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new I,iu=new Mn;class hi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),eo.subVectors(this.max,or),ps.subVectors(t.a,or),ms.subVectors(t.b,or),gs.subVectors(t.c,or),pi.subVectors(ms,ps),mi.subVectors(gs,ms),ki.subVectors(ps,gs);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-ki.z,ki.y,pi.z,0,-pi.x,mi.z,0,-mi.x,ki.z,0,-ki.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-ki.y,ki.x,0];return!Aa(e,ps,ms,gs,eo)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,ps,ms,gs,eo))?!1:(no.crossVectors(pi,mi),e=[no.x,no.y,no.z],Aa(e,ps,ms,gs,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,to=new hi,ps=new I,ms=new I,gs=new I,pi=new I,mi=new I,ki=new I,or=new I,eo=new I,no=new I,Bi=new I;function Aa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fp=new hi,ar=new I,Ca=new I;class tr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(Ca)),this.expandByPoint(ar.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new I,Ra=new I,io=new I,gi=new I,Pa=new I,so=new I,La=new I;class sd{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(Ra);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=gi.dot(this.direction),l=-gi.dot(io),c=gi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ra).addScaledVector(io,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Pa.subVectors(e,t),so.subVectors(n,t),La.crossVectors(Pa,so);let o=this.direction.dot(La),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,t);const l=a*this.direction.dot(so.crossVectors(gi,so));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(gi));if(c<0||l+c>o)return null;const u=-a*gi.dot(La);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,g,x,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),o=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,zp)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(n,an),xi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(n,an)),xi.normalize(),ro.crossVectors(an,xi),s[0]=xi.x,s[4]=ro.x,s[8]=an.x,s[1]=xi.y,s[5]=ro.y,s[9]=an.y,s[2]=xi.z,s[6]=ro.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],v=n[11],P=n[15],E=s[0],C=s[4],w=s[8],S=s[12],M=s[1],R=s[5],U=s[9],N=s[13],O=s[2],Y=s[6],H=s[10],et=s[14],q=s[3],st=s[7],X=s[11],nt=s[15];return r[0]=o*E+a*M+l*O+c*q,r[4]=o*C+a*R+l*Y+c*st,r[8]=o*w+a*U+l*H+c*X,r[12]=o*S+a*N+l*et+c*nt,r[1]=u*E+h*M+d*O+f*q,r[5]=u*C+h*R+d*Y+f*st,r[9]=u*w+h*U+d*H+f*X,r[13]=u*S+h*N+d*et+f*nt,r[2]=g*E+x*M+m*O+p*q,r[6]=g*C+x*R+m*Y+p*st,r[10]=g*w+x*U+m*H+p*X,r[14]=g*S+x*N+m*et+p*nt,r[3]=_*E+y*M+v*O+P*q,r[7]=_*C+y*R+v*Y+P*st,r[11]=_*w+y*U+v*H+P*X,r[15]=_*S+y*N+v*et+P*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,P=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,E=e*_+n*y+s*v+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=_*C,t[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*C,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=y*C,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=v*C,t[9]=(g*h*r-u*x*r-g*n*f+e*x*f+u*n*p-e*h*p)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*C,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*C,t[12]=P*C,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*m+e*h*m)*C,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,_=l*c,y=l*u,v=l*h,P=n.x,E=n.y,C=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+v)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+y)*C,s[9]=(m-_)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const c=1/r,u=1/o,h=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=oi){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===oi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Go)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=oi){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*c,f=(n+s)*u;let g,x;if(a===oi)g=(o+r)*h,x=-2*h;else if(a===Go)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xs=new I,En=new Ot,Op=new I(0,0,0),zp=new I(1,1,1),xi=new I,ro=new I,an=new I,su=new Ot,ru=new Mn;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kp=0;const ou=new I,_s=new Mn,Qn=new Ot,oo=new I,lr=new I,Bp=new I,Hp=new Mn,au=new I(1,0,0),lu=new I(0,1,0),cu=new I(0,0,1),uu={type:"added"},Gp={type:"removed"},vs={type:"childadded",child:null},Ia={type:"childremoved",child:null};class Re extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new I,e=new Qe,n=new Mn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new jt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(cu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(lr,oo,this.up):Qn.lookAt(oo,lr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(Qn),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gp),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new I(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new I,ti=new I,Da=new I,ei=new I,ys=new I,Ms=new I,hu=new I,Na=new I,Ua=new I,Fa=new I,Oa=new de,za=new de,ka=new de;class Rn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),ti.subVectors(n,e),Da.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(ti),l=Tn.dot(Da),c=ti.dot(ti),u=ti.dot(Da),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Oa.setScalar(0),za.setScalar(0),ka.setScalar(0),Oa.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Oa,r.x),o.addScaledVector(za,r.y),o.addScaledVector(ka,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),ti.subVectors(t,e),Tn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Tn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,n),Ms.subVectors(r,n),Na.subVectors(t,n);const l=ys.dot(Na),c=Ms.dot(Na);if(l<=0&&c<=0)return e.copy(n);Ua.subVectors(t,s);const u=ys.dot(Ua),h=Ms.dot(Ua);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ys,o);Fa.subVectors(t,r);const f=ys.dot(Fa),g=Ms.dot(Fa);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ms,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return hu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(hu,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=gc(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ba(o,r,t+1/3),this.g=Ba(o,r,t),this.b=Ba(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=od[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ie.fromWorkingColorSpace(We.copy(this),t),Math.round(Oe(We.r*255,0,255))*65536+Math.round(Oe(We.g*255,0,255))*256+Math.round(Oe(We.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ke){ie.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(ao);const n=vr(_i.h,ao.h,e),s=vr(_i.s,ao.s,e),r=vr(_i.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Mt;Mt.NAMES=od;let Vp=0;class er extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=cs(),this.name="",this.blending=Us,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=dl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yn extends er{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new I,lo=new at;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}}class ad extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ld extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wp=0;const xn=new Ot,Ha=new Re,bs=new I,ln=new hi,cr=new hi,Fe=new I;class Se extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?ld:ad)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(ln.min,cr.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,cr.max),ln.expandByPoint(Fe)):(ln.expandByPoint(cr.min),ln.expandByPoint(cr.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fe.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),Fe.add(bs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new I,l[w]=new I;const c=new I,u=new I,h=new I,d=new at,f=new at,g=new at,x=new I,m=new I;function p(w,S,M){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(x),a[S].add(x),a[M].add(x),l[w].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let w=0,S=_.length;w<S;++w){const M=_[w],R=M.start,U=M.count;for(let N=R,O=R+U;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new I,v=new I,P=new I,E=new I;function C(w){P.fromBufferAttribute(s,w),E.copy(P);const S=a[w];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),v.crossVectors(E,S);const R=v.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,R)}for(let w=0,S=_.length;w<S;++w){const M=_[w],R=M.start,U=M.count;for(let N=R,O=R+U;N<O;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Te(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new Ot,Hi=new sd,co=new tr,fu=new I,uo=new I,ho=new I,fo=new I,Ga=new I,po=new I,pu=new I,mo=new I;class mt extends Re{constructor(t=new Se,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ga.fromBufferAttribute(h,t),o?po.addScaledVector(Ga,u):po.addScaledVector(Ga.sub(e),u))}e.add(po)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(co.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(co,fu)===null||Hi.origin.distanceToSquared(fu)>(t.far-t.near)**2))&&(du.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,P=y;v<P;v+=3){const E=a.getX(v),C=a.getX(v+1),w=a.getX(v+2);s=go(this,p,t,n,c,u,h,E,C,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=go(this,o,t,n,c,u,h,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,P=y;v<P;v+=3){const E=v,C=v+1,w=v+2;s=go(this,p,t,n,c,u,h,E,C,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,y=m+1,v=m+2;s=go(this,o,t,n,c,u,h,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xp(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Nn,a),l===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,uo),i.getVertexPosition(l,ho),i.getVertexPosition(c,fo);const u=Xp(i,t,e,n,uo,ho,fo,pu);if(u){const h=new I;Rn.getBarycoord(pu,uo,ho,fo,h),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,l,c,h,new at)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,l,c,h,new at)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};Rn.getNormal(uo,ho,fo,d.normal),u.face=d,u.barycoord=h}return u}class sn extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function g(x,m,p,_,y,v,P,E,C,w,S){const M=v/C,R=P/w,U=v/2,N=P/2,O=E/2,Y=C+1,H=w+1;let et=0,q=0;const st=new I;for(let X=0;X<H;X++){const nt=X*R-N;for(let St=0;St<Y;St++){const Ut=St*M-U;st[x]=Ut*_,st[m]=nt*y,st[p]=O,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=E>0?1:-1,u.push(st.x,st.y,st.z),h.push(St/C),h.push(1-X/w),et+=1}}for(let X=0;X<w;X++)for(let nt=0;nt<C;nt++){const St=d+nt+Y*X,Ut=d+nt+Y*(X+1),G=d+(nt+1)+Y*(X+1),K=d+(nt+1)+Y*X;l.push(St,Ut,K),l.push(Ut,G,K),q+=6}a.addGroup(f,q,S),f+=q,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Ys(i[e]);for(const s in n)t[s]=n[s]}return t}function qp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Yp={clone:Ys,merge:Ze};var $p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends er{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ud extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new I,mu=new at,gu=new at;class un extends ud{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,ws=1;class Zp extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Ss,ws,t,e);s.layers=this.layers,this.add(s);const r=new un(Ss,ws,t,e);r.layers=this.layers,this.add(r);const o=new un(Ss,ws,t,e);o.layers=this.layers,this.add(o);const a=new un(Ss,ws,t,e);a.layers=this.layers,this.add(a);const l=new un(Ss,ws,t,e);l.layers=this.layers,this.add(l);const c=new un(Ss,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hd extends He{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jp extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new Li({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Ti});r.uniforms.tEquirect.value=e;const o=new mt(s,r),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=Gn),new Zp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Va=new I,Kp=new I,Qp=new jt;class Yi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Va.subVectors(n,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qp.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new tr,xo=new I;class Hr{constructor(t=new Yi,e=new Yi,n=new Yi,s=new Yi,r=new Yi,o=new Yi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+_).normalize(),n[3].setComponents(l-o,d-u,m-g,v-_).normalize(),n[4].setComponents(l-a,d-h,m-x,v-y).normalize(),e===oi)n[5].setComponents(l+a,d+h,m+x,v+y).normalize();else if(e===Go)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xo.x=s.normal.x>0?t.max.x:t.min.x,xo.y=s.normal.y>0?t.max.y:t.min.y,xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tm(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ve extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const _=p*d-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+c*p,v=_+c*(p+1),P=_+1+c*(p+1),E=_+1+c*p;f.push(y,v,E),f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.widthSegments,t.heightSegments)}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,Qm=`struct PhysicalMaterial {
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
}`,t0=`
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,x0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,w0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k0=`float getShadowMask() {
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
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,vg=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Cg=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:em,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:um,begin_vertex:hm,beginnormal_vertex:dm,bsdfs:fm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:vm,color_fragment:ym,color_pars_fragment:Mm,color_pars_vertex:bm,color_vertex:Sm,common:wm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Cm,emissivemap_fragment:Rm,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Im,envmap_fragment:Dm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Ym,envmap_vertex:Om,fog_vertex:zm,fog_pars_vertex:km,fog_fragment:Bm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Vm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:$m,lights_toon_pars_fragment:jm,lights_phong_fragment:Zm,lights_phong_pars_fragment:Jm,lights_physical_fragment:Km,lights_physical_pars_fragment:Qm,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:u0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:x0,normal_fragment_begin:_0,normal_fragment_maps:v0,normal_pars_fragment:y0,normal_pars_vertex:M0,normal_vertex:b0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:w0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:C0,packing:R0,premultiplied_alpha_fragment:P0,project_vertex:L0,dithering_fragment:I0,dithering_pars_fragment:D0,roughnessmap_fragment:N0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:O0,shadowmap_vertex:z0,shadowmask_pars_fragment:k0,skinbase_vertex:B0,skinning_pars_vertex:H0,skinning_vertex:G0,skinnormal_vertex:V0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:Y0,transmission_fragment:$0,transmission_pars_fragment:j0,uv_pars_fragment:Z0,uv_pars_vertex:J0,uv_vertex:K0,worldpos_vertex:Q0,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:ug,equirect_frag:hg,linedashed_vert:dg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:xg,meshmatcap_vert:_g,meshmatcap_frag:vg,meshnormal_vert:yg,meshnormal_frag:Mg,meshphong_vert:bg,meshphong_frag:Sg,meshphysical_vert:wg,meshphysical_frag:Eg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Cg,points_frag:Rg,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Ig,sprite_frag:Dg},dt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Bn={basic:{uniforms:Ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ze([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ze([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ze([dt.points,dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ze([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ze([dt.common,dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ze([dt.sprite,dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ze([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ze([dt.lights,dt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Bn.physical={uniforms:Ze([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const _o={r:0,b:0,g:0},Vi=new Qe,Ng=new Ot;function Ug(i,t,e,n,s,r,o){const a=new Mt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1;const v=g(_);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Ko)?(u===void 0&&(u=new mt(new sn(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ys(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vi.copy(y.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(Vi)),u.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new mt(new ve(2,2),new Li({name:"BackgroundMaterial",uniforms:Ys(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(_o,cd(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function Fg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,R,U,N,O){let Y=!1;const H=h(N,U,R);r!==H&&(r=H,c(r.object)),Y=f(M,N,U,O),Y&&g(M,N,U,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(M,R,U,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,U){const N=U.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let Y=O[R.id];Y===void 0&&(Y={},O[R.id]=Y);let H=Y[N];return H===void 0&&(H=d(l()),Y[N]=H),H}function d(M){const R=[],U=[],N=[];for(let O=0;O<e;O++)R[O]=0,U[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,R,U,N){const O=r.attributes,Y=R.attributes;let H=0;const et=U.getAttributes();for(const q in et)if(et[q].location>=0){const X=O[q];let nt=Y[q];if(nt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),X===void 0||X.attribute!==nt||nt&&X.data!==nt.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(M,R,U,N){const O={},Y=R.attributes;let H=0;const et=U.getAttributes();for(const q in et)if(et[q].location>=0){let X=Y[q];X===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));const nt={};nt.attribute=X,X&&X.data&&(nt.data=X.data),O[q]=nt,H++}r.attributes=O,r.attributesNum=H,r.index=N}function x(){const M=r.newAttributes;for(let R=0,U=M.length;R<U;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const U=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;U[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),O[M]!==R&&(i.vertexAttribDivisor(M,R),O[M]=R)}function _(){const M=r.newAttributes,R=r.enabledAttributes;for(let U=0,N=R.length;U<N;U++)R[U]!==M[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function y(M,R,U,N,O,Y,H){H===!0?i.vertexAttribIPointer(M,R,U,O,Y):i.vertexAttribPointer(M,R,U,N,O,Y)}function v(M,R,U,N){x();const O=N.attributes,Y=U.getAttributes(),H=R.defaultAttributeValues;for(const et in Y){const q=Y[et];if(q.location>=0){let st=O[et];if(st===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const X=st.normalized,nt=st.itemSize,St=t.get(st);if(St===void 0)continue;const Ut=St.buffer,G=St.type,K=St.bytesPerElement,ct=G===i.INT||G===i.UNSIGNED_INT||st.gpuType===cc;if(st.isInterleavedBufferAttribute){const it=st.data,At=it.stride,It=st.offset;if(it.isInstancedInterleavedBuffer){for(let Ft=0;Ft<q.locationSize;Ft++)p(q.location+Ft,it.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ft=0;Ft<q.locationSize;Ft++)m(q.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let Ft=0;Ft<q.locationSize;Ft++)y(q.location+Ft,nt/q.locationSize,G,X,At*K,(It+nt/q.locationSize*Ft)*K,ct)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<q.locationSize;it++)p(q.location+it,st.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<q.locationSize;it++)m(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let it=0;it<q.locationSize;it++)y(q.location+it,nt/q.locationSize,G,X,nt*K,nt/q.locationSize*it*K,ct)}}else if(H!==void 0){const X=H[et];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(q.location,X);break;case 3:i.vertexAttrib3fv(q.location,X);break;case 4:i.vertexAttrib4fv(q.location,X);break;default:i.vertexAttrib1fv(q.location,X)}}}}_()}function P(){w();for(const M in n){const R=n[M];for(const U in R){const N=R[U];for(const O in N)u(N[O].object),delete N[O];delete R[U]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const U in R){const N=R[U];for(const O in N)u(N[O].object),delete N[O];delete R[U]}delete n[M.id]}function C(M){for(const R in n){const U=n[R];if(U[M.id]===void 0)continue;const N=U[M.id];for(const O in N)u(N[O].object),delete N[O];delete U[M.id]}}function w(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Og(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ui&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!w)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function kg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,y=_*4;let v=p.clippingState||null;l.value=v,v=u(g,d,y,f);for(let P=0;P!==y;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Bg(i){let t=new WeakMap;function e(o,a){return a===yl?o.mapping=Vs:a===Ml&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Ml)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jp(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fd extends ud{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ls=4,xu=[.125,.215,.35,.446,.526,.582],Ki=20,Wa=new fd,_u=new Mt;let Xa=null,qa=0,Ya=0,$a=!1;const $i=(1+Math.sqrt(5))/2,Es=1/$i,vu=[new I(-$i,Es,0),new I($i,Es,0),new I(-Es,0,$i),new I(Es,0,$i),new I(0,$i,-Es),new I(0,$i,Es),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class yu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=$a,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Br,format:Pn,colorSpace:Ks,depthBuffer:!1},s=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Gg(r,t,e)}return s}_compileMaterial(t){const e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_u),u.toneMapping=Ai,u.autoClear=!1;const f=new Yn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new mt(new sn,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(_u),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;vo(s,_*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;vo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let _=0;for(let C=0;C<Ki;++C){const w=C/x,S=Math.exp(-w*w/2);p.push(S),C===0?_+=S:C<m&&(_+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],P=3*v*(s>y-Ls?s-y+Ls:0),E=4*(this._cubeSize-v);vo(e,P,E,3*v,2*v),l.setRenderTarget(e),l.render(h,Wa)}}function Hg(i){const t=[],e=[],n=[];let s=i;const r=i-Ls+1+xu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ls?l=xu[o-i+Ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,w=E>2?0:-1,S=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];_.set(S,x*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];v.set(M,p*g*E)}const P=new Se;P.setAttribute("position",new Te(_,x)),P.setAttribute("uv",new Te(y,m)),P.setAttribute("faceIndex",new Te(v,p)),t.push(P),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(i,t,e){const n=new ss(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gg(i,t,e){const n=new Float32Array(Ki),s=new I(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bu(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Su(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function Vg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yl||l===Ml,u=l===Vs||l===Ws;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new yu(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new yu(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Wg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){const P=_[y+0],E=_[y+1],C=_[y+2];d.push(P,E,E,C,C,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const P=y+0,E=y+1,C=y+2;d.push(P,E,E,C,C,P)}}else return;const m=new(ed(d)?ld:ad)(d,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,t,e){const n=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*P*4*h),C=new id(E,v,P,h);C.type=Vn,C.needsUpdate=!0;const w=y*4;for(let M=0;M<h;M++){const R=m[M],U=p[M],N=_[M],O=v*P*4*M;for(let Y=0;Y<R.count;Y++){const H=Y*w;f===!0&&(s.fromBufferAttribute(R,Y),E[O+H+0]=s.x,E[O+H+1]=s.y,E[O+H+2]=s.z,E[O+H+3]=0),g===!0&&(s.fromBufferAttribute(U,Y),E[O+H+4]=s.x,E[O+H+5]=s.y,E[O+H+6]=s.z,E[O+H+7]=0),x===!0&&(s.fromBufferAttribute(N,Y),E[O+H+8]=s.x,E[O+H+9]=s.y,E[O+H+10]=s.z,E[O+H+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new at(v,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function jg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class pd extends He{constructor(t,e,n,s,r,o,a,l,c,u=Fs){if(u!==Fs&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=is),n===void 0&&u===qs&&(n=Xs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const md=new He,wu=new pd(1,1),gd=new id,xd=new Up,_d=new hd,Eu=[],Tu=[],Au=new Float32Array(16),Cu=new Float32Array(9),Ru=new Float32Array(4);function nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function tx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),Ue(e,n)}}function ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Cu.set(n),i.uniformMatrix3fv(this.addr,!1,Cu),Ue(e,n)}}function nx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),Ue(e,n)}}function ix(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function ax(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function hx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=td,r=wu):r=md,e.setTexture2D(t||r,s)}function dx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xd,s)}function fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_d,s)}function px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function mx(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return Kg;case 35666:return Qg;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,t){i.uniform1fv(this.addr,t)}function xx(i,t){const e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function _x(i,t){const e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function vx(i,t){const e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function yx(i,t){const e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mx(i,t){const e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bx(i,t){const e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sx(i,t){i.uniform1iv(this.addr,t)}function wx(i,t){i.uniform2iv(this.addr,t)}function Ex(i,t){i.uniform3iv(this.addr,t)}function Tx(i,t){i.uniform4iv(this.addr,t)}function Ax(i,t){i.uniform1uiv(this.addr,t)}function Cx(i,t){i.uniform2uiv(this.addr,t)}function Rx(i,t){i.uniform3uiv(this.addr,t)}function Px(i,t){i.uniform4uiv(this.addr,t)}function Lx(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||md,r[o])}function Ix(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xd,r[o])}function Dx(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_d,r[o])}function Nx(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gd,r[o])}function Ux(i){switch(i){case 5126:return gx;case 35664:return xx;case 35665:return _x;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return Sx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Cx;case 36295:return Rx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}class Fx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mx(e.type)}}class Ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ux(e.type)}}class zx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Pu(i,t){i.seq.push(t),i.map[t.id]=t}function kx(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pu(e,c===void 0?new Fx(a,i,t):new Ox(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new zx(a),Pu(e,h)),e=h}}}class ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);kx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Lu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bx=37297;let Hx=0;function Gx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Iu=new jt;function Vx(i){ie._getMatrix(Iu,ie.workingColorSpace,i);const t=`mat3( ${Iu.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Qo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Gx(i.getShaderSource(t),o)}else return s}function Wx(i,t){const e=Vx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xx(i,t){let e;switch(t){case $f:e="Linear";break;case jf:e="Reinhard";break;case Zf:e="Cineon";break;case Jf:e="ACESFilmic";break;case Qf:e="AgX";break;case Gh:e="Neutral";break;case Kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yo=new I;function qx(){ie.getLuminanceCoefficients(yo);const i=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function $x(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mr(i){return i!==""}function Nu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(Zx,Kx)}const Jx=new Map;function Kx(i,t){let e=Jt[t];if(e===void 0){const n=Jx.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}const Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(i){return i.replace(Qx,t_)}function t_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ou(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function e_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function s_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case qf:t="ENVMAP_BLENDING_MIX";break;case Yf:t="ENVMAP_BLENDING_ADD";break}return t}function r_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=e_(e),c=n_(e),u=i_(e),h=s_(e),d=r_(e),f=Yx(e),g=$x(r),x=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?Xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Wx("linearToOutputTexel",e.outputColorSpace),qx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=jl(o),o=Nu(o,e),o=Uu(o,e),a=jl(a),a=Nu(a,e),a=Uu(a,e),o=Fu(o),a=Fu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+o,v=_+p+a,P=Lu(s,s.VERTEX_SHADER,y),E=Lu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,P),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(E).trim();let Y=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,E);else{const et=Du(s,P,"vertex"),q=Du(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+et+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||O==="")&&(H=!1);H&&(R.diagnostics={runnable:Y,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(E),w=new ko(s,x),S=jx(s,x)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Bx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}let a_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new c_(t),e.set(t,n)),n}}class c_{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}}function u_(i,t,e,n,s,r,o){const a=new rd,l=new l_,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,U,N){const O=U.fog,Y=N.geometry,H=S.isMeshStandardMaterial?U.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),q=et&&et.mapping===Ko?et.image.height:null,st=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const X=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=X!==void 0?X.length:0;let St=0;Y.morphAttributes.position!==void 0&&(St=1),Y.morphAttributes.normal!==void 0&&(St=2),Y.morphAttributes.color!==void 0&&(St=3);let Ut,G,K,ct;if(st){const ce=Bn[st];Ut=ce.vertexShader,G=ce.fragmentShader}else Ut=S.vertexShader,G=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),ct=l.getFragmentShaderID(S);const it=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,Ft=N.isBatchedMesh===!0,Vt=!!S.map,J=!!S.matcap,ot=!!et,D=!!S.aoMap,Dt=!!S.lightMap,rt=!!S.bumpMap,bt=!!S.normalMap,ht=!!S.displacementMap,Bt=!!S.emissiveMap,vt=!!S.metalnessMap,L=!!S.roughnessMap,T=S.anisotropy>0,B=S.clearcoat>0,j=S.dispersion>0,tt=S.iridescence>0,Z=S.sheen>0,Ct=S.transmission>0,ft=T&&!!S.anisotropyMap,yt=B&&!!S.clearcoatMap,Qt=B&&!!S.clearcoatNormalMap,lt=B&&!!S.clearcoatRoughnessMap,wt=tt&&!!S.iridescenceMap,Ht=tt&&!!S.iridescenceThicknessMap,Gt=Z&&!!S.sheenColorMap,Et=Z&&!!S.sheenRoughnessMap,ee=!!S.specularMap,Zt=!!S.specularColorMap,pe=!!S.specularIntensityMap,F=Ct&&!!S.transmissionMap,pt=Ct&&!!S.thicknessMap,$=!!S.gradientMap,Q=!!S.alphaMap,_t=S.alphaTest>0,gt=!!S.alphaHash,Yt=!!S.extensions;let we=Ai;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(we=i.toneMapping);const Ge={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Ut,fragmentShader:G,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ks,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:J,envMap:ot,envMapMode:ot&&et.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:Dt,bumpMap:rt,normalMap:bt,displacementMap:d&&ht,emissiveMap:Bt,normalMapObjectSpace:bt&&S.normalMapType===ip,normalMapTangentSpace:bt&&S.normalMapType===Qh,metalnessMap:vt,roughnessMap:L,anisotropy:T,anisotropyMap:ft,clearcoat:B,clearcoatMap:yt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:lt,dispersion:j,iridescence:tt,iridescenceMap:wt,iridescenceThicknessMap:Ht,sheen:Z,sheenColorMap:Gt,sheenRoughnessMap:Et,specularMap:ee,specularColorMap:Zt,specularIntensityMap:pe,transmission:Ct,transmissionMap:F,thicknessMap:pt,gradientMap:$,opaque:S.transparent===!1&&S.blending===Us&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:gt,combine:S.combine,mapUv:Vt&&x(S.map.channel),aoMapUv:D&&x(S.aoMap.channel),lightMapUv:Dt&&x(S.lightMap.channel),bumpMapUv:rt&&x(S.bumpMap.channel),normalMapUv:bt&&x(S.normalMap.channel),displacementMapUv:ht&&x(S.displacementMap.channel),emissiveMapUv:Bt&&x(S.emissiveMap.channel),metalnessMapUv:vt&&x(S.metalnessMap.channel),roughnessMapUv:L&&x(S.roughnessMap.channel),anisotropyMapUv:ft&&x(S.anisotropyMap.channel),clearcoatMapUv:yt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(S.sheenRoughnessMap.channel),specularMapUv:ee&&x(S.specularMap.channel),specularColorMapUv:Zt&&x(S.specularColorMap.channel),specularIntensityMapUv:pe&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:pt&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(bt||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(Vt||Q),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:St,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Be,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let R;if(M){const U=Bn[M];R=Yp.clone(U.uniforms)}else R=S.uniforms;return R}function P(S,M){let R;for(let U=0,N=u.length;U<N;U++){const O=u[U];if(O.cacheKey===M){R=O,++R.usedTimes;break}}return R===void 0&&(R=new o_(i,M,S,r),u.push(R)),R}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:w}}function h_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function d_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ku(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||d_),n.length>1&&n.sort(d||zu),s.length>1&&s.sort(d||zu)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function f_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ku,i.set(n,[o])):s>=r.length?(o=new ku,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function p_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Mt};break;case"SpotLight":e={position:new I,direction:new I,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function m_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let g_=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function __(i){const t=new p_,e=m_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new Ot,o=new Ot;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,P=0,E=0,C=0;c.sort(x_);for(let S=0,M=c.length;S<M;S++){const R=c[S],U=R.color,N=R.intensity,O=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*N,h+=U.g*N,d+=U.b*N;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],N);C++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const et=R.shadow,q=e.get(R);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,_++}n.directional[f]=H,f++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(U).multiplyScalar(N),H.distance=O,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;const et=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,et.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=et.matrix,R.castShadow){const q=e.get(R);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=Y,v++}x++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(U).multiplyScalar(N),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const et=R.shadow,q=e.get(R);q.shadowIntensity=et.intensity,q.shadowBias=et.bias,q.shadowNormalBias=et.normalBias,q.shadowRadius=et.radius,q.shadowMapSize=et.mapSize,q.shadowCameraNear=et.camera.near,q.shadowCameraFar=et.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(N),H.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==_||w.numPointShadows!==y||w.numSpotShadows!==v||w.numSpotMaps!==P||w.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,w.directionalLength=f,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=_,w.numPointShadows=y,w.numSpotShadows=v,w.numSpotMaps=P,w.numLightProbes=C,n.version=g_++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Bu(i){const t=new __(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function v_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bu(i),t.set(s,[a])):r>=o.length?(a=new Bu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class y_ extends er{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M_ extends er{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`;function w_(i,t,e){let n=new Hr;const s=new at,r=new at,o=new de,a=new y_({depthPacking:np}),l=new M_,c={},u=e.maxTextureSize,h={[Nn]:Ke,[Ke]:Nn,[Be]:Be},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:b_,fragmentShader:S_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(E,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ti),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==ii&&this.type===ii,O=p===ii&&this.type!==ii;for(let Y=0,H=E.length;Y<H;Y++){const et=E[Y],q=et.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const st=q.getFrameExtents();if(s.multiply(st),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,q.mapSize.y=r.y)),q.map===null||N===!0||O===!0){const nt=this.type!==ii?{minFilter:dn,magFilter:dn}:{};q.map!==null&&q.map.dispose(),q.map=new ss(s.x,s.y,nt),q.map.texture.name=et.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const X=q.getViewportCount();for(let nt=0;nt<X;nt++){const St=q.getViewport(nt);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),U.viewport(o),q.updateMatrices(et,nt),n=q.getFrustum(),v(C,w,q.camera,et,this.type)}q.isPointLightShadow!==!0&&this.type===ii&&_(q,w),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function _(E,C){const w=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ss(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,w,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,w,f,x,null)}function y(E,C,w,S){let M=null;const R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=w.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=M.uuid,N=C.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let Y=O[N];Y===void 0&&(Y=M.clone(),O[N]=Y,C.addEventListener("dispose",P)),M=Y}if(M.visible=C.visible,M.wireframe=C.wireframe,S===ii?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=w}return M}function v(E,C,w,S,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ii)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const N=t.update(E),O=E.material;if(Array.isArray(O)){const Y=N.groups;for(let H=0,et=Y.length;H<et;H++){const q=Y[H],st=O[q.materialIndex];if(st&&st.visible){const X=y(E,st,S,M);E.onBeforeShadow(i,E,C,w,N,X,q),i.renderBufferDirect(w,null,N,X,E,q),E.onAfterShadow(i,E,C,w,N,X,q)}}}else if(O.visible){const Y=y(E,O,S,M);E.onBeforeShadow(i,E,C,w,N,Y,null),i.renderBufferDirect(w,null,N,Y,E,null),E.onAfterShadow(i,E,C,w,N,Y,null)}}const U=E.children;for(let N=0,O=U.length;N<O;N++)v(U[N],C,w,S,M)}function P(E){E.target.removeEventListener("dispose",P);for(const w in c){const S=c[w],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const E_={[fl]:pl,[ml]:_l,[gl]:vl,[Gs]:xl,[pl]:fl,[_l]:ml,[vl]:gl,[xl]:Gs};function T_(i,t){function e(){let F=!1;const pt=new de;let $=null;const Q=new de(0,0,0,0);return{setMask:function(_t){$!==_t&&!F&&(i.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){F=_t},setClear:function(_t,gt,Yt,we,Ge){Ge===!0&&(_t*=we,gt*=we,Yt*=we),pt.set(_t,gt,Yt,we),Q.equals(pt)===!1&&(i.clearColor(_t,gt,Yt,we),Q.copy(pt))},reset:function(){F=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,$=null,Q=null,_t=null;return{setReversed:function(gt){if(pt!==gt){const Yt=t.get("EXT_clip_control");pt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const we=_t;_t=null,this.setClear(we)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?it(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(gt){$!==gt&&!F&&(i.depthMask(gt),$=gt)},setFunc:function(gt){if(pt&&(gt=E_[gt]),Q!==gt){switch(gt){case fl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){F=gt},setClear:function(gt){_t!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),_t=gt)},reset:function(){F=!1,$=null,Q=null,_t=null,pt=!1}}}function s(){let F=!1,pt=null,$=null,Q=null,_t=null,gt=null,Yt=null,we=null,Ge=null;return{setTest:function(ce){F||(ce?it(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(ce){pt!==ce&&!F&&(i.stencilMask(ce),pt=ce)},setFunc:function(ce,bn,jn){($!==ce||Q!==bn||_t!==jn)&&(i.stencilFunc(ce,bn,jn),$=ce,Q=bn,_t=jn)},setOp:function(ce,bn,jn){(gt!==ce||Yt!==bn||we!==jn)&&(i.stencilOp(ce,bn,jn),gt=ce,Yt=bn,we=jn)},setLocked:function(ce){F=ce},setClear:function(ce){Ge!==ce&&(i.clearStencil(ce),Ge=ce)},reset:function(){F=!1,pt=null,$=null,Q=null,_t=null,gt=null,Yt=null,we=null,Ge=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,P=null,E=null,C=new Mt(0,0,0),w=0,S=!1,M=null,R=null,U=null,N=null,O=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=et>=2);let st=null,X={};const nt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ut=new de().fromArray(nt),G=new de().fromArray(St);function K(F,pt,$,Q){const _t=new Uint8Array(4),gt=i.createTexture();i.bindTexture(F,gt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<$;Yt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return gt}const ct={};ct[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Gs),rt(!1),bt(Wc),it(i.CULL_FACE),D(Ti);function it(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function At(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function It(F,pt){return h[F]!==pt?(i.bindFramebuffer(F,pt),h[F]=pt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ft(F,pt){let $=f,Q=!1;if(F){$=d.get(pt),$===void 0&&($=[],d.set(pt,$));const _t=F.textures;if($.length!==_t.length||$[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Yt=_t.length;gt<Yt;gt++)$[gt]=i.COLOR_ATTACHMENT0+gt;$.length=_t.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function Vt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const J={[Ji]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};J[Lf]=i.MIN,J[If]=i.MAX;const ot={[Df]:i.ZERO,[Nf]:i.ONE,[Uf]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Hf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[Of]:i.DST_ALPHA,[Ff]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Gf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Wf]:i.CONSTANT_ALPHA,[Xf]:i.ONE_MINUS_CONSTANT_ALPHA};function D(F,pt,$,Q,_t,gt,Yt,we,Ge,ce){if(F===Ti){x===!0&&(At(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),F!==Cf){if(F!==m||ce!==S){if((p!==Ji||v!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,v=Ji),ce)switch(F){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,y=null,P=null,E=null,C.set(0,0,0),w=0,m=F,S=ce}return}_t=_t||pt,gt=gt||$,Yt=Yt||Q,(pt!==p||_t!==v)&&(i.blendEquationSeparate(J[pt],J[_t]),p=pt,v=_t),($!==_||Q!==y||gt!==P||Yt!==E)&&(i.blendFuncSeparate(ot[$],ot[Q],ot[gt],ot[Yt]),_=$,y=Q,P=gt,E=Yt),(we.equals(C)===!1||Ge!==w)&&(i.blendColor(we.r,we.g,we.b,Ge),C.copy(we),w=Ge),m=F,S=!1}function Dt(F,pt){F.side===Be?At(i.CULL_FACE):it(i.CULL_FACE);let $=F.side===Ke;pt&&($=!$),rt($),F.blending===Us&&F.transparent===!1?D(Ti):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function bt(F){F!==Tf?(it(i.CULL_FACE),F!==R&&(F===Wc?i.cullFace(i.BACK):F===Af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),R=F}function ht(F){F!==U&&(H&&i.lineWidth(F),U=F)}function Bt(F,pt,$){F?(it(i.POLYGON_OFFSET_FILL),(N!==pt||O!==$)&&(i.polygonOffset(pt,$),N=pt,O=$)):At(i.POLYGON_OFFSET_FILL)}function vt(F){F?it(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function L(F){F===void 0&&(F=i.TEXTURE0+Y-1),st!==F&&(i.activeTexture(F),st=F)}function T(F,pt,$){$===void 0&&(st===null?$=i.TEXTURE0+Y-1:$=st);let Q=X[$];Q===void 0&&(Q={type:void 0,texture:void 0},X[$]=Q),(Q.type!==F||Q.texture!==pt)&&(st!==$&&(i.activeTexture($),st=$),i.bindTexture(F,pt||ct[F]),Q.type=F,Q.texture=pt)}function B(){const F=X[st];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(F){Ut.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ut.copy(F))}function Et(F){G.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function ee(F,pt){let $=c.get(pt);$===void 0&&($=new WeakMap,c.set(pt,$));let Q=$.get(F);Q===void 0&&(Q=i.getUniformBlockIndex(pt,F.name),$.set(F,Q))}function Zt(F,pt){const Q=c.get(pt).get(F);l.get(pt)!==Q&&(i.uniformBlockBinding(pt,Q,F.__bindingPointIndex),l.set(pt,Q))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,X={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,P=null,E=null,C=new Mt(0,0,0),w=0,S=!1,M=null,R=null,U=null,N=null,O=null,Ut.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:At,bindFramebuffer:It,drawBuffers:Ft,useProgram:Vt,setBlending:D,setMaterial:Dt,setFlipSided:rt,setCullFace:bt,setLineWidth:ht,setPolygonOffset:Bt,setScissorTest:vt,activeTexture:L,bindTexture:T,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:wt,texImage3D:Ht,updateUBOMapping:ee,uniformBlockBinding:Zt,texStorage2D:Qt,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Gt,viewport:Et,reset:pe}}function Hu(i,t,e,n){const s=A_(n);switch(e){case Yh:return i*t;case jh:return i*t;case Zh:return i*t*2;case dc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case pc:return i*t*2/s.components*s.byteLength;case $h:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case mc:return i*t*4/s.components*s.byteLength;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:case Tl:return Math.max(i,16)*Math.max(t,8)/4;case Sl:case El:return Math.max(i,8)*Math.max(t,8)/2;case Al:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kh:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A_(i){switch(i){case ui:case Wh:return{byteLength:1,components:1};case Ar:case Xh:case Br:return{byteLength:2,components:1};case uc:case hc:return{byteLength:2,components:4};case is:case cc:case Vn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return f?new OffscreenCanvas(L,T):Pr("canvas")}function x(L,T,B){let j=1;const tt=vt(L);if((tt.width>B||tt.height>B)&&(j=B/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(j*tt.width),Ct=Math.floor(j*tt.height);h===void 0&&(h=g(Z,Ct));const ft=T?g(Z,Ct):h;return ft.width=Z,ft.height=Ct,ft.getContext("2d").drawImage(L,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Ct+")."),ft}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,T,B,j,tt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=T;if(T===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),T===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),T===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),T===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),T===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),T===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),T===i.RGBA){const Ct=tt?Qo:ie.getTransfer(j);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=Ct===he?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(L,T){let B;return L?T===null||T===is||T===Xs?B=i.DEPTH24_STENCIL8:T===Vn?B=i.DEPTH32F_STENCIL8:T===Ar&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===is||T===Xs?B=i.DEPTH_COMPONENT24:T===Vn?B=i.DEPTH_COMPONENT32F:T===Ar&&(B=i.DEPTH_COMPONENT16),B}function P(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==dn&&L.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){const T=L.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&u.delete(T)}function C(L){const T=L.target;T.removeEventListener("dispose",C),M(T)}function w(L){const T=n.get(L);if(T.__webglInit===void 0)return;const B=L.source,j=d.get(B);if(j){const tt=j[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(L),Object.keys(j).length===0&&d.delete(B)}n.remove(L)}function S(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const B=L.source,j=d.get(B);delete j[T.__cacheKey],o.memory.textures--}function M(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let tt=0;tt<T.__webglFramebuffer[j].length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[j][tt]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=L.textures;for(let j=0,tt=B.length;j<tt;j++){const Z=n.get(B[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(L)}let R=0;function U(){R=0}function N(){const L=R;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function O(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function Y(L,T){const B=n.get(L);if(L.isVideoTexture&&ht(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){const j=L.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,L,T);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function H(L,T){const B=n.get(L);if(L.version>0&&B.__version!==L.version){G(B,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function et(L,T){const B=n.get(L);if(L.version>0&&B.__version!==L.version){G(B,L,T);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function q(L,T){const B=n.get(L);if(L.version>0&&B.__version!==L.version){K(B,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}const st={[Xn]:i.REPEAT,[ze]:i.CLAMP_TO_EDGE,[bl]:i.MIRRORED_REPEAT},X={[dn]:i.NEAREST,[tp]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},nt={[sp]:i.NEVER,[up]:i.ALWAYS,[rp]:i.LESS,[td]:i.LEQUAL,[op]:i.EQUAL,[cp]:i.GEQUAL,[ap]:i.GREATER,[lp]:i.NOTEQUAL};function St(L,T){if(T.type===Vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===Sa||T.magFilter===Qr||T.magFilter===ts||T.minFilter===Gn||T.minFilter===Sa||T.minFilter===Qr||T.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,st[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,st[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,st[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,X[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,X[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dn||T.minFilter!==Qr&&T.minFilter!==ts||T.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ut(L,T){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",E));const j=T.source;let tt=d.get(j);tt===void 0&&(tt={},d.set(j,tt));const Z=O(T);if(Z!==L.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[Z].usedTimes++;const Ct=tt[L.__cacheKey];Ct!==void 0&&(tt[L.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(T)),L.__cacheKey=Z,L.__webglTexture=tt[Z].texture}return B}function G(L,T,B){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);const tt=Ut(L,T),Z=T.source;e.bindTexture(j,L.__webglTexture,i.TEXTURE0+B);const Ct=n.get(Z);if(Z.version!==Ct.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ft=ie.getPrimaries(ie.workingColorSpace),yt=T.colorSpace===si?null:ie.getPrimaries(T.colorSpace),Qt=T.colorSpace===si||ft===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let lt=x(T.image,!1,s.maxTextureSize);lt=Bt(T,lt);const wt=r.convert(T.format,T.colorSpace),Ht=r.convert(T.type);let Gt=y(T.internalFormat,wt,Ht,T.colorSpace,T.isVideoTexture);St(j,T);let Et;const ee=T.mipmaps,Zt=T.isVideoTexture!==!0,pe=Ct.__version===void 0||tt===!0,F=Z.dataReady,pt=P(T,lt);if(T.isDepthTexture)Gt=v(T.format===qs,T.type),pe&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Gt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,wt,Ht,null));else if(T.isDataTexture)if(ee.length>0){Zt&&pe&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,ee[0].width,ee[0].height);for(let $=0,Q=ee.length;$<Q;$++)Et=ee[$],Zt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,$,Gt,Et.width,Et.height,0,wt,Ht,Et.data);T.generateMipmaps=!1}else Zt?(pe&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,lt.width,lt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,wt,Ht,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,lt.width,lt.height,0,wt,Ht,lt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Gt,ee[0].width,ee[0].height,lt.depth);for(let $=0,Q=ee.length;$<Q;$++)if(Et=ee[$],T.format!==Pn)if(wt!==null)if(Zt){if(F)if(T.layerUpdates.size>0){const _t=Hu(Et.width,Et.height,T.format,T.type);for(const gt of T.layerUpdates){const Yt=Et.data.subarray(gt*_t/Et.data.BYTES_PER_ELEMENT,(gt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,gt,Et.width,Et.height,1,wt,Yt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,lt.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Gt,Et.width,Et.height,lt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,lt.depth,wt,Ht,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Gt,Et.width,Et.height,lt.depth,0,wt,Ht,Et.data)}else{Zt&&pe&&e.texStorage2D(i.TEXTURE_2D,pt,Gt,ee[0].width,ee[0].height);for(let $=0,Q=ee.length;$<Q;$++)Et=ee[$],T.format!==Pn?wt!==null?Zt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Gt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,$,Gt,Et.width,Et.height,0,wt,Ht,Et.data)}else if(T.isDataArrayTexture)if(Zt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Gt,lt.width,lt.height,lt.depth),F)if(T.layerUpdates.size>0){const $=Hu(lt.width,lt.height,T.format,T.type);for(const Q of T.layerUpdates){const _t=lt.data.subarray(Q*$/lt.data.BYTES_PER_ELEMENT,(Q+1)*$/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,lt.width,lt.height,1,wt,Ht,_t)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,wt,Ht,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,lt.width,lt.height,lt.depth,0,wt,Ht,lt.data);else if(T.isData3DTexture)Zt?(pe&&e.texStorage3D(i.TEXTURE_3D,pt,Gt,lt.width,lt.height,lt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,wt,Ht,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,lt.width,lt.height,lt.depth,0,wt,Ht,lt.data);else if(T.isFramebufferTexture){if(pe)if(Zt)e.texStorage2D(i.TEXTURE_2D,pt,Gt,lt.width,lt.height);else{let $=lt.width,Q=lt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Gt,$,Q,0,wt,Ht,null),$>>=1,Q>>=1}}else if(ee.length>0){if(Zt&&pe){const $=vt(ee[0]);e.texStorage2D(i.TEXTURE_2D,pt,Gt,$.width,$.height)}for(let $=0,Q=ee.length;$<Q;$++)Et=ee[$],Zt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,Ht,Et):e.texImage2D(i.TEXTURE_2D,$,Gt,wt,Ht,Et);T.generateMipmaps=!1}else if(Zt){if(pe){const $=vt(lt);e.texStorage2D(i.TEXTURE_2D,pt,Gt,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ht,lt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,wt,Ht,lt);m(T)&&p(j),Ct.__version=Z.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function K(L,T,B){if(T.image.length!==6)return;const j=Ut(L,T),tt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+B);const Z=n.get(tt);if(tt.version!==Z.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const Ct=ie.getPrimaries(ie.workingColorSpace),ft=T.colorSpace===si?null:ie.getPrimaries(T.colorSpace),yt=T.colorSpace===si||Ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,lt=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let Q=0;Q<6;Q++)!Qt&&!lt?wt[Q]=x(T.image[Q],!0,s.maxCubemapSize):wt[Q]=lt?T.image[Q].image:T.image[Q],wt[Q]=Bt(T,wt[Q]);const Ht=wt[0],Gt=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),ee=y(T.internalFormat,Gt,Et,T.colorSpace),Zt=T.isVideoTexture!==!0,pe=Z.__version===void 0||j===!0,F=tt.dataReady;let pt=P(T,Ht);St(i.TEXTURE_CUBE_MAP,T);let $;if(Qt){Zt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ee,Ht.width,Ht.height);for(let Q=0;Q<6;Q++){$=wt[Q].mipmaps;for(let _t=0;_t<$.length;_t++){const gt=$[_t];T.format!==Pn?Gt!==null?Zt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,gt.width,gt.height,Gt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,ee,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,gt.width,gt.height,Gt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,ee,gt.width,gt.height,0,Gt,Et,gt.data)}}}else{if($=T.mipmaps,Zt&&pe){$.length>0&&pt++;const Q=vt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ee,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(lt){Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt[Q].width,wt[Q].height,Gt,Et,wt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,wt[Q].width,wt[Q].height,0,Gt,Et,wt[Q].data);for(let _t=0;_t<$.length;_t++){const Yt=$[_t].image[Q].image;Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Yt.width,Yt.height,Gt,Et,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,ee,Yt.width,Yt.height,0,Gt,Et,Yt.data)}}else{Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Gt,Et,wt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ee,Gt,Et,wt[Q]);for(let _t=0;_t<$.length;_t++){const gt=$[_t];Zt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Gt,Et,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,ee,Gt,Et,gt.image[Q])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),Z.__version=tt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ct(L,T,B,j,tt,Z){const Ct=r.convert(B.format,B.colorSpace),ft=r.convert(B.type),yt=y(B.internalFormat,Ct,ft,B.colorSpace),Qt=n.get(T),lt=n.get(B);if(lt.__renderTarget=T,!Qt.__hasExternalTextures){const wt=Math.max(1,T.width>>Z),Ht=Math.max(1,T.height>>Z);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,yt,wt,Ht,T.depth,0,Ct,ft,null):e.texImage2D(tt,Z,yt,wt,Ht,0,Ct,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),bt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,tt,lt.__webglTexture,0,rt(T)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,tt,lt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(L,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const j=T.depthTexture,tt=j&&j.isDepthTexture?j.type:null,Z=v(T.stencilBuffer,tt),Ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=rt(T);bt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,L)}else{const j=T.textures;for(let tt=0;tt<j.length;tt++){const Z=j[tt],Ct=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),yt=y(Z.internalFormat,Ct,ft,Z.colorSpace),Qt=rt(T);B&&bt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,yt,T.width,T.height):bt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,yt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,yt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const tt=j.__webglTexture,Z=rt(T);if(T.depthTexture.format===Fs)bt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(T.depthTexture.format===qs)bt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function It(L){const T=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const j=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),T.__depthDisposeCallback=tt}T.__boundDepthTexture=j}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(T.__webglFramebuffer,L)}else if(B){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=i.createRenderbuffer(),it(T.__webglDepthbuffer[j],L,!1);else{const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),it(T.__webglDepthbuffer,L,!1);else{const j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(L,T,B){const j=n.get(L);T!==void 0&&ct(j.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&It(L)}function Vt(L){const T=L.texture,B=n.get(L),j=n.get(T);L.addEventListener("dispose",C);const tt=L.textures,Z=L.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[ft]=[];for(let yt=0;yt<T.mipmaps.length;yt++)B.__webglFramebuffer[ft][yt]=i.createFramebuffer()}else B.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)B.__webglFramebuffer[ft]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ft=0,yt=tt.length;ft<yt;ft++){const Qt=n.get(tt[ft]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&bt(L)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){const yt=tt[ft];B.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const Qt=r.convert(yt.format,yt.colorSpace),lt=r.convert(yt.type),wt=y(yt.internalFormat,Qt,lt,yt.colorSpace,L.isXRRenderTarget===!0),Ht=rt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,wt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),it(B.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),St(i.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)ct(B.__webglFramebuffer[ft][yt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else ct(B.__webglFramebuffer[ft],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,yt=tt.length;ft<yt;ft++){const Qt=tt[ft],lt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),St(i.TEXTURE_2D,Qt),ct(B.__webglFramebuffer,L,Qt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ft=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),St(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)ct(B.__webglFramebuffer[yt],L,T,i.COLOR_ATTACHMENT0,ft,yt);else ct(B.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,ft,0);m(T)&&p(ft),e.unbindTexture()}L.depthBuffer&&It(L)}function J(L){const T=L.textures;for(let B=0,j=T.length;B<j;B++){const tt=T[B];if(m(tt)){const Z=_(L),Ct=n.get(tt).__webglTexture;e.bindTexture(Z,Ct),p(Z),e.unbindTexture()}}}const ot=[],D=[];function Dt(L){if(L.samples>0){if(bt(L)===!1){const T=L.textures,B=L.width,j=L.height;let tt=i.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(L),ft=T.length>1;if(ft)for(let yt=0;yt<T.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let yt=0;yt<T.length;yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);const Qt=n.get(T[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,tt,i.NEAREST),l===!0&&(ot.length=0,D.length=0,ot.push(i.COLOR_ATTACHMENT0+yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ot.push(Z),D.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<T.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);const Qt=n.get(T[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function rt(L){return Math.min(s.maxSamples,L.samples)}function bt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ht(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Bt(L,T){const B=L.colorSpace,j=L.format,tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==Ks&&B!==si&&(ie.getTransfer(B)===he?(j!==Pn||tt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=et,this.setTextureCube=q,this.rebindTextures=Ft,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=bt}function R_(i,t){function e(n,s=si){let r;const o=ie.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Br)return i.HALF_FLOAT;if(n===Yh)return i.ALPHA;if(n===$h)return i.RGB;if(n===Pn)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===No||n===Uo||n===Fo||n===Oo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===wl||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Cl||n===Rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Cl)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===zl||n===kl||n===Bl||n===Hl||n===Gl||n===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Wl||n===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===ql||n===Yl||n===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class P_ extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Li({vertexShader:I_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends Qs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=new N_,m=e.getContextAttributes();let p=null,_=null;const y=[],v=[],P=new at;let E=null;const C=new un;C.viewport=new de;const w=new un;w.viewport=new de;const S=[C,w],M=new P_;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=y[G];return K===void 0&&(K=new Za,y[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=y[G];return K===void 0&&(K=new Za,y[G]=K),K.getGripSpace()},this.getHand=function(G){let K=y[G];return K===void 0&&(K=new Za,y[G]=K),K.getHandSpace()};function N(G){const K=v.indexOf(G.inputSource);if(K===-1)return;const ct=y[K];ct!==void 0&&(ct.update(G.inputSource,G.frame,c||o),ct.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Y);for(let G=0;G<y.length;G++){const K=v[G];K!==null&&(v[G]=null,y[G].disconnect(K))}R=null,U=null,x.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,_=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ss(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ct=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?qs:Fs,ct=m.stencil?Xs:is);const At={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new ss(d.textureWidth,d.textureHeight,{format:Pn,type:ui,depthTexture:new pd(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(G){for(let K=0;K<G.removed.length;K++){const ct=G.removed[K],it=v.indexOf(ct);it>=0&&(v[it]=null,y[it].disconnect(ct))}for(let K=0;K<G.added.length;K++){const ct=G.added[K];let it=v.indexOf(ct);if(it===-1){for(let It=0;It<y.length;It++)if(It>=v.length){v.push(ct),it=It;break}else if(v[It]===null){v[It]=ct,it=It;break}if(it===-1)break}const At=y[it];At&&At.connect(ct)}}const H=new I,et=new I;function q(G,K,ct){H.setFromMatrixPosition(K.matrixWorld),et.setFromMatrixPosition(ct.matrixWorld);const it=H.distanceTo(et),At=K.projectionMatrix.elements,It=ct.projectionMatrix.elements,Ft=At[14]/(At[10]-1),Vt=At[14]/(At[10]+1),J=(At[9]+1)/At[5],ot=(At[9]-1)/At[5],D=(At[8]-1)/At[0],Dt=(It[8]+1)/It[0],rt=Ft*D,bt=Ft*Dt,ht=it/(-D+Dt),Bt=ht*-D;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Bt),G.translateZ(ht),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),At[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const vt=Ft+ht,L=Vt+ht,T=rt-Bt,B=bt+(it-Bt),j=J*Vt/L*vt,tt=ot*Vt/L*vt;G.projectionMatrix.makePerspective(T,B,j,tt,vt,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function st(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let K=G.near,ct=G.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),M.near=w.near=C.near=K,M.far=w.far=C.far=ct,(R!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,U=M.far),C.layers.mask=G.layers.mask|2,w.layers.mask=G.layers.mask|4,M.layers.mask=C.layers.mask|w.layers.mask;const it=G.parent,At=M.cameras;st(M,it);for(let It=0;It<At.length;It++)st(At[It],it);At.length===2?q(M,C,w):M.projectionMatrix.copy(C.projectionMatrix),X(G,M,it)};function X(G,K,ct){ct===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(ct.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Cr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let nt=null;function St(G,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let it=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let It=0;It<ct.length;It++){const Ft=ct[It];let Vt=null;if(f!==null)Vt=f.getViewport(Ft);else{const ot=h.getViewSubImage(d,Ft);Vt=ot.viewport,It===0&&(t.setRenderTargetTextures(_,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(_))}let J=S[It];J===void 0&&(J=new un,J.layers.enable(It),J.viewport=new de,S[It]=J),J.matrix.fromArray(Ft.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ft.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),It===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(J)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const It=h.getDepthInformation(ct[0]);It&&It.isValid&&It.texture&&x.init(t,It,s.renderState)}}for(let ct=0;ct<y.length;ct++){const it=v[ct],At=y[ct];it!==null&&At!==void 0&&At.update(it,K,c||o)}nt&&nt(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ut=new dd;Ut.setAnimationLoop(St),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}}const Wi=new Qe,F_=new Ot;function O_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,Wi.copy(v),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const v=y.program;n.uniformBlockBinding(_,v)}function c(_,y){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(_,P);const E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function u(_){const y=h();_.__bindingPointIndex=y;const v=i.createBuffer(),P=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=s[_.id],v=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,C=v.length;E<C;E++){const w=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,M=w.length;S<M;S++){const R=w[S];if(f(R,E,S,P)===!0){const U=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let Y=0;Y<N.length;Y++){const H=N[Y],et=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+O,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,O),O+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,v,P){const E=_.value,C=y+"_"+v;if(P[C]===void 0)return typeof E=="number"||typeof E=="boolean"?P[C]=E:P[C]=E.clone(),!0;{const w=P[C];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return P[C]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(_){const y=_.uniforms;let v=0;const P=16;for(let C=0,w=y.length;C<w;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,R=S.length;M<R;M++){const U=S[M],N=Array.isArray(U.value)?U.value:[U.value];for(let O=0,Y=N.length;O<Y;O++){const H=N[O],et=x(H),q=v%P,st=q%et.boundary,X=q+st;v+=st,X!==0&&P-X<et.storage&&(v+=P-X),U.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=et.storage}}}const E=v%P;return E>0&&(v+=P-E),_.__size=v,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class k_{constructor(t={}){const{canvas:e=Ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Ai,this.toneMappingExposure=1;const v=this;let P=!1,E=0,C=0,w=null,S=-1,M=null;const R=new de,U=new de;let N=null;const O=new Mt(0);let Y=0,H=e.width,et=e.height,q=1,st=null,X=null;const nt=new de(0,0,H,et),St=new de(0,0,H,et);let Ut=!1;const G=new Hr;let K=!1,ct=!1;const it=new Ot,At=new Ot,It=new I,Ft=new de,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function ot(){return w===null?q:1}let D=n;function Dt(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){const z="webgl2";if(D=Dt(z,A),D===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let rt,bt,ht,Bt,vt,L,T,B,j,tt,Z,Ct,ft,yt,Qt,lt,wt,Ht,Gt,Et,ee,Zt,pe,F;function pt(){rt=new Wg(D),rt.init(),Zt=new R_(D,rt),bt=new zg(D,rt,t,Zt),ht=new T_(D,rt),bt.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),Bt=new Yg(D),vt=new h_,L=new C_(D,rt,ht,vt,bt,Zt,Bt),T=new Bg(v),B=new Vg(v),j=new tm(D),pe=new Fg(D,j),tt=new Xg(D,j,Bt,pe),Z=new jg(D,tt,j,Bt),Gt=new $g(D,bt,L),lt=new kg(vt),Ct=new u_(v,T,B,rt,bt,pe,lt),ft=new O_(v,vt),yt=new f_,Qt=new v_(rt),Ht=new Ug(v,T,B,ht,Z,f,l),wt=new w_(v,Z,bt),F=new z_(D,Bt,bt,ht),Et=new Og(D,rt,Bt),ee=new qg(D,rt,Bt),Bt.programs=Ct.programs,v.capabilities=bt,v.extensions=rt,v.properties=vt,v.renderLists=yt,v.shadowMap=wt,v.state=ht,v.info=Bt}pt();const $=new U_(v,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(H,et,!1))},this.getSize=function(A){return A.set(H,et)},this.setSize=function(A,z,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,et=z,e.width=Math.floor(A*q),e.height=Math.floor(z*q),V===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(H*q,et*q).floor()},this.setDrawingBufferSize=function(A,z,V){H=A,et=z,q=V,e.width=Math.floor(A*V),e.height=Math.floor(z*V),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(nt)},this.setViewport=function(A,z,V,W){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,z,V,W),ht.viewport(R.copy(nt).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(St)},this.setScissor=function(A,z,V,W){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,z,V,W),ht.scissor(U.copy(St).multiplyScalar(q).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){ht.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,z=!0,V=!0){let W=0;if(A){let k=!1;if(w!==null){const ut=w.texture.format;k=ut===mc||ut===pc||ut===fc}if(k){const ut=w.texture.type,xt=ut===ui||ut===is||ut===Ar||ut===Xs||ut===uc||ut===hc,Rt=Ht.getClearColor(),Pt=Ht.getClearAlpha(),Wt=Rt.r,$t=Rt.g,Lt=Rt.b;xt?(g[0]=Wt,g[1]=$t,g[2]=Lt,g[3]=Pt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Wt,x[1]=$t,x[2]=Lt,x[3]=Pt,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}z&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),Qt.dispose(),vt.dispose(),T.dispose(),B.dispose(),Z.dispose(),pe.dispose(),F.dispose(),Ct.dispose(),$.dispose(),$.removeEventListener("sessionstart",Fc),$.removeEventListener("sessionend",Oc),zi.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=Bt.autoReset,z=wt.enabled,V=wt.autoUpdate,W=wt.needsUpdate,k=wt.type;pt(),Bt.autoReset=A,wt.enabled=z,wt.autoUpdate=V,wt.needsUpdate=W,wt.type=k}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){const z=A.target;z.removeEventListener("dispose",Yt),we(z)}function we(A){Ge(A),vt.remove(A)}function Ge(A){const z=vt.get(A).programs;z!==void 0&&(z.forEach(function(V){Ct.releaseProgram(V)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,V,W,k,ut){z===null&&(z=Vt);const xt=k.isMesh&&k.matrixWorld.determinant()<0,Rt=Sf(A,z,V,W,k);ht.setMaterial(W,xt);let Pt=V.index,Wt=1;if(W.wireframe===!0){if(Pt=tt.getWireframeAttribute(V),Pt===void 0)return;Wt=2}const $t=V.drawRange,Lt=V.attributes.position;let re=$t.start*Wt,me=($t.start+$t.count)*Wt;ut!==null&&(re=Math.max(re,ut.start*Wt),me=Math.min(me,(ut.start+ut.count)*Wt)),Pt!==null?(re=Math.max(re,0),me=Math.min(me,Pt.count)):Lt!=null&&(re=Math.max(re,0),me=Math.min(me,Lt.count));const xe=me-re;if(xe<0||xe===1/0)return;pe.setup(k,W,Rt,V,Pt);let tn,ae=Et;if(Pt!==null&&(tn=j.get(Pt),ae=ee,ae.setIndex(tn)),k.isMesh)W.wireframe===!0?(ht.setLineWidth(W.wireframeLinewidth*ot()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(k.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),ht.setLineWidth(Nt*ot()),k.isLineSegments?ae.setMode(D.LINES):k.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else k.isPoints?ae.setMode(D.POINTS):k.isSprite&&ae.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,Zn=k._multiDrawCounts,le=k._multiDrawCount,Sn=Pt?j.get(Pt).bytesPerElement:1,hs=vt.get(W).currentProgram.getUniforms();for(let on=0;on<le;on++)hs.setValue(D,"_gl_DrawID",on),ae.render(Nt[on]/Sn,Zn[on])}else if(k.isInstancedMesh)ae.renderInstances(re,xe,k.count);else if(V.isInstancedBufferGeometry){const Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Zn=Math.min(V.instanceCount,Nt);ae.renderInstances(re,xe,Zn)}else ae.render(re,xe)};function ce(A,z,V){A.transparent===!0&&A.side===Be&&A.forceSinglePass===!1?(A.side=Ke,A.needsUpdate=!0,Kr(A,z,V),A.side=Nn,A.needsUpdate=!0,Kr(A,z,V),A.side=Be):Kr(A,z,V)}this.compile=function(A,z,V=null){V===null&&(V=A),p=Qt.get(V),p.init(z),y.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==V&&A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ut=k.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Rt=ut[xt];ce(Rt,V,k),W.add(Rt)}else ce(ut,V,k),W.add(ut)}),y.pop(),p=null,W},this.compileAsync=function(A,z,V=null){const W=this.compile(A,z,V);return new Promise(k=>{function ut(){if(W.forEach(function(xt){vt.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){k(A);return}setTimeout(ut,10)}rt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let bn=null;function jn(A){bn&&bn(A)}function Fc(){zi.stop()}function Oc(){zi.start()}const zi=new dd;zi.setAnimationLoop(jn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(A){bn=A,$.setAnimationLoop(A),A===null?zi.stop():zi.start()},$.addEventListener("sessionstart",Fc),$.addEventListener("sessionend",Oc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,w),p=Qt.get(A,y.length),p.init(z),y.push(p),At.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(At),ct=this.localClippingEnabled,K=lt.init(this.clippingPlanes,ct),m=yt.get(A,_.length),m.init(),_.push(m),$.enabled===!0&&$.isPresenting===!0){const ut=v.xr.getDepthSensingMesh();ut!==null&&ba(ut,z,-1/0,v.sortObjects)}ba(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,X),J=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,J&&Ht.addToRenderList(m,A),this.info.render.frame++,K===!0&&lt.beginShadows();const V=p.state.shadowsArray;wt.render(V,A,z),K===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ut=z.cameras;if(k.length>0)for(let xt=0,Rt=ut.length;xt<Rt;xt++){const Pt=ut[xt];kc(W,k,A,Pt)}J&&Ht.render(A);for(let xt=0,Rt=ut.length;xt<Rt;xt++){const Pt=ut[xt];zc(m,A,Pt,Pt.viewport)}}else k.length>0&&kc(W,k,A,z),J&&Ht.render(A),zc(m,A,z);w!==null&&(L.updateMultisampleRenderTarget(w),L.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,z),pe.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ba(A,z,V,W){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){W&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const xt=Z.update(A),Rt=A.material;Rt.visible&&m.push(A,xt,Rt,V,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){const xt=Z.update(A),Rt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ft.copy(xt.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Rt)){const Pt=xt.groups;for(let Wt=0,$t=Pt.length;Wt<$t;Wt++){const Lt=Pt[Wt],re=Rt[Lt.materialIndex];re&&re.visible&&m.push(A,xt,re,V,Ft.z,Lt)}}else Rt.visible&&m.push(A,xt,Rt,V,Ft.z,null)}}const ut=A.children;for(let xt=0,Rt=ut.length;xt<Rt;xt++)ba(ut[xt],z,V,W)}function zc(A,z,V,W){const k=A.opaque,ut=A.transmissive,xt=A.transparent;p.setupLightsView(V),K===!0&&lt.setGlobalState(v.clippingPlanes,V),W&&ht.viewport(R.copy(W)),k.length>0&&Jr(k,z,V),ut.length>0&&Jr(ut,z,V),xt.length>0&&Jr(xt,z,V),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function kc(A,z,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ss(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Br:ui,minFilter:ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ut=p.state.transmissionRenderTarget[W.id],xt=W.viewport||R;ut.setSize(xt.z,xt.w);const Rt=v.getRenderTarget();v.setRenderTarget(ut),v.getClearColor(O),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),J&&Ht.render(V);const Pt=v.toneMapping;v.toneMapping=Ai;const Wt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),K===!0&&lt.setGlobalState(v.clippingPlanes,W),Jr(A,V,W),L.updateMultisampleRenderTarget(ut),L.updateRenderTargetMipmap(ut),rt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Lt=0,re=z.length;Lt<re;Lt++){const me=z[Lt],xe=me.object,tn=me.geometry,ae=me.material,Nt=me.group;if(ae.side===Be&&xe.layers.test(W.layers)){const Zn=ae.side;ae.side=Ke,ae.needsUpdate=!0,Bc(xe,V,W,tn,ae,Nt),ae.side=Zn,ae.needsUpdate=!0,$t=!0}}$t===!0&&(L.updateMultisampleRenderTarget(ut),L.updateRenderTargetMipmap(ut))}v.setRenderTarget(Rt),v.setClearColor(O,Y),Wt!==void 0&&(W.viewport=Wt),v.toneMapping=Pt}function Jr(A,z,V){const W=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ut=A.length;k<ut;k++){const xt=A[k],Rt=xt.object,Pt=xt.geometry,Wt=W===null?xt.material:W,$t=xt.group;Rt.layers.test(V.layers)&&Bc(Rt,z,V,Pt,Wt,$t)}}function Bc(A,z,V,W,k,ut){A.onBeforeRender(v,z,V,W,k,ut),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(v,z,V,W,A,ut),k.transparent===!0&&k.side===Be&&k.forceSinglePass===!1?(k.side=Ke,k.needsUpdate=!0,v.renderBufferDirect(V,z,W,k,A,ut),k.side=Nn,k.needsUpdate=!0,v.renderBufferDirect(V,z,W,k,A,ut),k.side=Be):v.renderBufferDirect(V,z,W,k,A,ut),A.onAfterRender(v,z,V,W,k,ut)}function Kr(A,z,V){z.isScene!==!0&&(z=Vt);const W=vt.get(A),k=p.state.lights,ut=p.state.shadowsArray,xt=k.state.version,Rt=Ct.getParameters(A,k.state,ut,z,V),Pt=Ct.getProgramCacheKey(Rt);let Wt=W.programs;W.environment=A.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(A.isMeshStandardMaterial?B:T).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Yt),Wt=new Map,W.programs=Wt);let $t=Wt.get(Pt);if($t!==void 0){if(W.currentProgram===$t&&W.lightsStateVersion===xt)return Gc(A,Rt),$t}else Rt.uniforms=Ct.getUniforms(A),A.onBeforeCompile(Rt,v),$t=Ct.acquireProgram(Rt,Pt),Wt.set(Pt,$t),W.uniforms=Rt.uniforms;const Lt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Gc(A,Rt),W.needsLights=Ef(A),W.lightsStateVersion=xt,W.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=$t,W.uniformsList=null,$t}function Hc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=ko.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Gc(A,z){const V=vt.get(A);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function Sf(A,z,V,W,k){z.isScene!==!0&&(z=Vt),L.resetTextureUnits();const ut=z.fog,xt=W.isMeshStandardMaterial?z.environment:null,Rt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ks,Pt=(W.isMeshStandardMaterial?B:T).get(W.envMap||xt),Wt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$t=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!V.morphAttributes.position,re=!!V.morphAttributes.normal,me=!!V.morphAttributes.color;let xe=Ai;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xe=v.toneMapping);const tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=tn!==void 0?tn.length:0,Nt=vt.get(W),Zn=p.state.lights;if(K===!0&&(ct===!0||A!==M)){const gn=A===M&&W.id===S;lt.setState(W,A,gn)}let le=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Zn.state.version||Nt.outputColorSpace!==Rt||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==Pt||W.fog===!0&&Nt.fog!==ut||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==$t||Nt.morphTargets!==Lt||Nt.morphNormals!==re||Nt.morphColors!==me||Nt.toneMapping!==xe||Nt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Nt.__version=W.version);let Sn=Nt.currentProgram;le===!0&&(Sn=Kr(W,z,k));let hs=!1,on=!1,sr=!1;const _e=Sn.getUniforms(),Un=Nt.uniforms;if(ht.useProgram(Sn.program)&&(hs=!0,on=!0,sr=!0),W.id!==S&&(S=W.id,on=!0),hs||M!==A){ht.buffers.depth.getReversed()?(it.copy(A.projectionMatrix),Rp(it),Pp(it),_e.setValue(D,"projectionMatrix",it)):_e.setValue(D,"projectionMatrix",A.projectionMatrix),_e.setValue(D,"viewMatrix",A.matrixWorldInverse);const di=_e.map.cameraPosition;di!==void 0&&di.setValue(D,It.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,on=!0,sr=!0)}if(k.isSkinnedMesh){_e.setOptional(D,k,"bindMatrix"),_e.setOptional(D,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),_e.setValue(D,"boneTexture",gn.boneTexture,L))}k.isBatchedMesh&&(_e.setOptional(D,k,"batchingTexture"),_e.setValue(D,"batchingTexture",k._matricesTexture,L),_e.setOptional(D,k,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",k._indirectTexture,L),_e.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",k._colorsTexture,L));const rr=V.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Gt.update(k,V,Sn),(on||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,_e.setValue(D,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Un.envMap.value=Pt,Un.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(Un.envMapIntensity.value=z.environmentIntensity),on&&(_e.setValue(D,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&wf(Un,sr),ut&&W.fog===!0&&ft.refreshFogUniforms(Un,ut),ft.refreshMaterialUniforms(Un,W,q,et,p.state.transmissionRenderTarget[A.id]),ko.upload(D,Hc(Nt),Un,L)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ko.upload(D,Hc(Nt),Un,L),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(D,"center",k.center),_e.setValue(D,"modelViewMatrix",k.modelViewMatrix),_e.setValue(D,"normalMatrix",k.normalMatrix),_e.setValue(D,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gn=W.uniformsGroups;for(let di=0,fi=gn.length;di<fi;di++){const Vc=gn[di];F.update(Vc,Sn),F.bind(Vc,Sn)}}return Sn}function wf(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Ef(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,V){vt.get(A.texture).__webglTexture=z,vt.get(A.depthTexture).__webglTexture=V;const W=vt.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const V=vt.get(A);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,V=0){w=A,E=z,C=V;let W=!0,k=null,ut=!1,xt=!1;if(A){const Pt=vt.get(A);if(Pt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Pt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Pt.__hasExternalTextures)L.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Lt=A.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&vt.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(xt=!0);const $t=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[z])?k=$t[z][V]:k=$t[z],ut=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?k=vt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?k=$t[V]:k=$t,R.copy(A.viewport),U.copy(A.scissor),N=A.scissorTest}else R.copy(nt).multiplyScalar(q).floor(),U.copy(St).multiplyScalar(q).floor(),N=Ut;if(ht.bindFramebuffer(D.FRAMEBUFFER,k)&&W&&ht.drawBuffers(A,k),ht.viewport(R),ht.scissor(U),ht.setScissorTest(N),ut){const Pt=vt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,V)}else if(xt){const Pt=vt.get(A.texture),Wt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,V||0,Wt)}S=-1},this.readRenderTargetPixels=function(A,z,V,W,k,ut,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){ht.bindFramebuffer(D.FRAMEBUFFER,Rt);try{const Pt=A.texture,Wt=Pt.format,$t=Pt.type;if(!bt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-W&&V>=0&&V<=A.height-k&&D.readPixels(z,V,W,k,Zt.convert(Wt),Zt.convert($t),ut)}finally{const Pt=w!==null?vt.get(w).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,z,V,W,k,ut,xt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){const Pt=A.texture,Wt=Pt.format,$t=Pt.type;if(!bt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-W&&V>=0&&V<=A.height-k){ht.bindFramebuffer(D.FRAMEBUFFER,Rt);const Lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(z,V,W,k,Zt.convert(Wt),Zt.convert($t),0);const re=w!==null?vt.get(w).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,re);const me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cp(D,me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(Lt),D.deleteSync(me),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,V=0){A.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-V),k=Math.floor(A.image.width*W),ut=Math.floor(A.image.height*W),xt=z!==null?z.x:0,Rt=z!==null?z.y:0;L.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xt,Rt,k,ut),ht.unbindTexture()},this.copyTextureToTexture=function(A,z,V=null,W=null,k=0){A.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],z=arguments[2],k=arguments[3]||0,V=null);let ut,xt,Rt,Pt,Wt,$t,Lt,re,me;const xe=A.isCompressedTexture?A.mipmaps[k]:A.image;V!==null?(ut=V.max.x-V.min.x,xt=V.max.y-V.min.y,Rt=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Wt=V.min.y,$t=V.isBox3?V.min.z:0):(ut=xe.width,xt=xe.height,Rt=xe.depth||1,Pt=0,Wt=0,$t=0),W!==null?(Lt=W.x,re=W.y,me=W.z):(Lt=0,re=0,me=0);const tn=Zt.convert(z.format),ae=Zt.convert(z.type);let Nt;z.isData3DTexture?(L.setTexture3D(z,0),Nt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(L.setTexture2DArray(z,0),Nt=D.TEXTURE_2D_ARRAY):(L.setTexture2D(z,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Zn=D.getParameter(D.UNPACK_ROW_LENGTH),le=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Sn=D.getParameter(D.UNPACK_SKIP_PIXELS),hs=D.getParameter(D.UNPACK_SKIP_ROWS),on=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$t);const sr=A.isDataArrayTexture||A.isData3DTexture,_e=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Un=vt.get(A),rr=vt.get(z),gn=vt.get(Un.__renderTarget),di=vt.get(rr.__renderTarget);ht.bindFramebuffer(D.READ_FRAMEBUFFER,gn.__webglFramebuffer),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<Rt;fi++)sr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(A).__webglTexture,k,$t+fi),A.isDepthTexture?(_e&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(z).__webglTexture,k,me+fi),D.blitFramebuffer(Pt,Wt,ut,xt,Lt,re,ut,xt,D.DEPTH_BUFFER_BIT,D.NEAREST)):_e?D.copyTexSubImage3D(Nt,k,Lt,re,me+fi,Pt,Wt,ut,xt):D.copyTexSubImage2D(Nt,k,Lt,re,me+fi,Pt,Wt,ut,xt);ht.bindFramebuffer(D.READ_FRAMEBUFFER,null),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _e?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Nt,k,Lt,re,me,ut,xt,Rt,tn,ae,xe.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,k,Lt,re,me,ut,xt,Rt,tn,xe.data):D.texSubImage3D(Nt,k,Lt,re,me,ut,xt,Rt,tn,ae,xe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Lt,re,ut,xt,tn,ae,xe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Lt,re,xe.width,xe.height,tn,xe.data):D.texSubImage2D(D.TEXTURE_2D,k,Lt,re,ut,xt,tn,ae,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,hs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,on),k===0&&z.generateMipmaps&&D.generateMipmap(Nt),ht.unbindTexture()},this.copyTextureToTexture3D=function(A,z,V=null,W=null,k=0){return A.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,A=arguments[2],z=arguments[3],k=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,V,W,k)},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){E=0,C=0,w=null,ht.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class ea{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new ea(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class B_ extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class H_ extends He{constructor(t=null,e=1,n=1,s,r,o,a,l,c=dn,u=dn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gu extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ts=new Ot,Vu=new Ot,Mo=[],Wu=new hi,G_=new Ot,ur=new mt,hr=new tr;class Is extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Wu.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),hr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Vu.multiplyMatrices(n,Ts),ur.matrixWorld=Vu,ur.raycast(t,Mo);for(let o=0,a=Mo.length;o<a;o++){const l=Mo[o];l.instanceId=r,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new H_(new Float32Array(s*this.count),s,this.count,dc,Vn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _c extends er{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xu=new Ot,Zl=new sd,bo=new tr,So=new I;class vd extends Re{constructor(t=new Se,e=new _c){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;Xu.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(Xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);So.fromBufferAttribute(h,m),qu(So,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)So.fromBufferAttribute(h,g),qu(So,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qu(i,t,e,n,s,r,o){const a=Zl.distanceSqToPoint(i);if(a<e){const l=new I;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class vc extends He{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,l=new Ot;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yc extends $n{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class V_ extends yc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const wo=new I,Ja=new Mc,Ka=new Mc,Qa=new Mc;class bc extends $n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(wo.subVectors(s[0],s[1]).add(s[0]),c=wo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ja.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),Ka.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),Qa.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ka.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Qa.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ja.calc(l),Ka.calc(l),Qa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function W_(i,t){const e=1-i;return e*e*t}function X_(i,t){return 2*(1-i)*i*t}function q_(i,t){return i*i*t}function yr(i,t,e,n){return W_(i,t)+X_(i,e)+q_(i,n)}function Y_(i,t){const e=1-i;return e*e*e*t}function $_(i,t){const e=1-i;return 3*e*e*i*t}function j_(i,t){return 3*(1-i)*i*i*t}function Z_(i,t){return i*i*i*t}function Mr(i,t,e,n,s){return Y_(i,t)+$_(i,e)+j_(i,n)+Z_(i,s)}class yd extends $n{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class J_ extends $n{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mr(t,s.x,r.x,o.x,a.x),Mr(t,s.y,r.y,o.y,a.y),Mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Md extends $n{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends $n{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bd extends $n{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends $n{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sd extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Yu(a,l.x,c.x,u.x,h.x),Yu(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Jl=Object.freeze({__proto__:null,ArcCurve:V_,CatmullRomCurve3:bc,CubicBezierCurve:yd,CubicBezierCurve3:J_,EllipseCurve:yc,LineCurve:Md,LineCurve3:K_,QuadraticBezierCurve:bd,QuadraticBezierCurve3:Q_,SplineCurve:Sd});class tv extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Jl[s.type]().fromJSON(s))}return this}}class Kl extends tv{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Md(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new bd(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new yd(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new yc(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sc extends Se{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Oe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new I,d=new at,f=new I,g=new I,x=new I;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){const y=n+_*u*s,v=Math.sin(y),P=Math.cos(y);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*v,h.y=t[E].y,h.z=t[E].x*P,o.push(h.x,h.y,h.z),d.x=_/e,d.y=E/(t.length-1),a.push(d.x,d.y);const C=l[3*E+0]*v,w=l[3*E+1],S=l[3*E+0]*P;c.push(C,w,S)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const v=y+_*t.length,P=v,E=v+t.length,C=v+t.length+1,w=v+1;r.push(P,E,w),r.push(C,w,E)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sc(t.points,t.segments,t.phiStart,t.phiLength)}}class Vo extends Sc{constructor(t=1,e=1,n=4,s=8){const r=new Kl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Vo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Dn extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,u=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pe extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function _(){const v=new I,P=new I;let E=0;const C=(e-t)/n;for(let w=0;w<=r;w++){const S=[],M=w/r,R=M*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,O=N*l+a,Y=Math.sin(O),H=Math.cos(O);P.x=R*Y,P.y=-M*n+m,P.z=R*H,h.push(P.x,P.y,P.z),v.set(Y,C,H).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-M),S.push(g++)}x.push(S)}for(let w=0;w<s;w++)for(let S=0;S<r;S++){const M=x[S][w],R=x[S+1][w],U=x[S+1][w+1],N=x[S][w+1];(t>0||S!==0)&&(u.push(M,R,N),E+=3),(e>0||S!==r-1)&&(u.push(R,U,N),E+=3)}c.addGroup(p,E,0),p+=E}function y(v){const P=g,E=new at,C=new I;let w=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const O=U/s*l+a,Y=Math.cos(O),H=Math.sin(O);C.x=S*H,C.y=m*M,C.z=S*Y,h.push(C.x,C.y,C.z),d.push(0,M,0),E.x=Y*.5+.5,E.y=H*.5*M+.5,f.push(E.x,E.y),g++}for(let U=0;U<s;U++){const N=P+U,O=R+U;v===!0?u.push(O,O+1,N):u.push(O+1,O,N),w+=3}c.addGroup(p,w,v===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ui extends Pe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gr extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new I,v=new I,P=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],v),f(e[E+2],P),l(y,v,P,_)}function l(_,y,v,P){const E=P+1,C=[];for(let w=0;w<=E;w++){C[w]=[];const S=_.clone().lerp(v,w/E),M=y.clone().lerp(v,w/E),R=E-w;for(let U=0;U<=R;U++)U===0&&w===E?C[w][U]=S:C[w][U]=S.clone().lerp(M,U/R)}for(let w=0;w<E;w++)for(let S=0;S<2*(E-w)-1;S++){const M=Math.floor(S/2);S%2===0?(d(C[w][M+1]),d(C[w+1][M]),d(C[w][M])):(d(C[w][M+1]),d(C[w+1][M+1]),d(C[w+1][M]))}}function c(_){const y=new I;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const _=new I;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const v=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;o.push(v,1-P)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],v=o[_+2],P=o[_+4],E=Math.max(y,v,P),C=Math.min(y,v,P);E>.9&&C<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){const v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const _=new I,y=new I,v=new I,P=new I,E=new at,C=new at,w=new at;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),w.set(o[M+4],o[M+5]),P.copy(_).add(y).add(v).divideScalar(3);const R=m(P);x(E,M+0,_,R),x(C,M+2,y,R),x(w,M+4,v,R)}}function x(_,y,v,P){P<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.vertices,t.indices,t.radius,t.details)}}class na extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new na(t.radius,t.detail)}}class ia extends Kl{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Kl().fromJSON(s))}return this}}const ev={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=wd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=ov(i,t,r,e)),i.length>80*e){a=c=i[0],l=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Lr(r,o,e,a,l,f,0),o}};function wd(i,t,e,n,s){let r,o;if(s===xv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=$u(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=$u(r,i[r],i[r+1],o);return o&&sa(o,o.next)&&(Dr(o),o=o.next),o}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sa(e,e.next)||Me(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?iv(i,n,s,r):nv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Dr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sv(rs(i),t,e),Lr(i,t,e,n,s,r,2)):o===2&&rv(i,t,e,n,s,r):Lr(rs(i),t,e,n,s,r,1);break}}}function nv(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ds(s,a,r,l,o,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function iv(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Me(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Ql(f,g,t,e,n),_=Ql(x,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ds(a,u,l,h,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ds(a,u,l,h,c,d,v.x,v.y)&&Me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ds(a,u,l,h,c,d,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ds(a,u,l,h,c,d,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!sa(s,r)&&Ed(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function rv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pv(o,a)){let l=Td(o,a);o=rs(o,o.next),l=rs(l,l.next),Lr(o,t,e,n,s,r,0),Lr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ov(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=wd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(fv(c));for(s.sort(av),r=0;r<s.length;r++)e=lv(s[r],e);return e}function av(i,t){return i.x-t.x}function lv(i,t){const e=cv(i,t);if(!e)return t;const n=Td(e,i);return rs(n,n.next),rs(e,e.next)}function cv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ds(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ir(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&uv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function uv(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function hv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ql(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dv(s)}function dv(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ql(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ds(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function pv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mv(i,t)&&(Ir(i,t)&&Ir(t,i)&&gv(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||sa(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sa(i,t){return i.x===t.x&&i.y===t.y}function Ed(i,t,e,n){const s=To(Me(i,t,e)),r=To(Me(i,t,n)),o=To(Me(e,n,i)),a=To(Me(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function To(i){return i>0?1:i<0?-1:0}function mv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ed(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function gv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Td(i,t){const e=new tc(i.i,i.x,i.y),n=new tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $u(i,t,e,n){const s=new tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class br{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return br.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ju(t),Zu(n,t);let o=t.length;e.forEach(ju);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Zu(n,e[l]);const a=ev.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ju(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vr extends Se{constructor(t=new ia([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:_v;let y,v=!1,P,E,C,w;p&&(y=p.getSpacedPoints(u),v=!0,d=!1,P=p.computeFrenetFrames(u,!1),E=new I,C=new I,w=new I),d||(m=0,f=0,g=0,x=0);const S=a.extractPoints(c);let M=S.shape;const R=S.holes;if(!br.isClockWise(M)){M=M.reverse();for(let J=0,ot=R.length;J<ot;J++){const D=R[J];br.isClockWise(D)&&(R[J]=D.reverse())}}const N=br.triangulateShape(M,R),O=M;for(let J=0,ot=R.length;J<ot;J++){const D=R[J];M=M.concat(D)}function Y(J,ot,D){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ot,D)}const H=M.length,et=N.length;function q(J,ot,D){let Dt,rt,bt;const ht=J.x-ot.x,Bt=J.y-ot.y,vt=D.x-J.x,L=D.y-J.y,T=ht*ht+Bt*Bt,B=ht*L-Bt*vt;if(Math.abs(B)>Number.EPSILON){const j=Math.sqrt(T),tt=Math.sqrt(vt*vt+L*L),Z=ot.x-Bt/j,Ct=ot.y+ht/j,ft=D.x-L/tt,yt=D.y+vt/tt,Qt=((ft-Z)*L-(yt-Ct)*vt)/(ht*L-Bt*vt);Dt=Z+ht*Qt-J.x,rt=Ct+Bt*Qt-J.y;const lt=Dt*Dt+rt*rt;if(lt<=2)return new at(Dt,rt);bt=Math.sqrt(lt/2)}else{let j=!1;ht>Number.EPSILON?vt>Number.EPSILON&&(j=!0):ht<-Number.EPSILON?vt<-Number.EPSILON&&(j=!0):Math.sign(Bt)===Math.sign(L)&&(j=!0),j?(Dt=-Bt,rt=ht,bt=Math.sqrt(T)):(Dt=ht,rt=Bt,bt=Math.sqrt(T/2))}return new at(Dt/bt,rt/bt)}const st=[];for(let J=0,ot=O.length,D=ot-1,Dt=J+1;J<ot;J++,D++,Dt++)D===ot&&(D=0),Dt===ot&&(Dt=0),st[J]=q(O[J],O[D],O[Dt]);const X=[];let nt,St=st.concat();for(let J=0,ot=R.length;J<ot;J++){const D=R[J];nt=[];for(let Dt=0,rt=D.length,bt=rt-1,ht=Dt+1;Dt<rt;Dt++,bt++,ht++)bt===rt&&(bt=0),ht===rt&&(ht=0),nt[Dt]=q(D[Dt],D[bt],D[ht]);X.push(nt),St=St.concat(nt)}for(let J=0;J<m;J++){const ot=J/m,D=f*Math.cos(ot*Math.PI/2),Dt=g*Math.sin(ot*Math.PI/2)+x;for(let rt=0,bt=O.length;rt<bt;rt++){const ht=Y(O[rt],st[rt],Dt);it(ht.x,ht.y,-D)}for(let rt=0,bt=R.length;rt<bt;rt++){const ht=R[rt];nt=X[rt];for(let Bt=0,vt=ht.length;Bt<vt;Bt++){const L=Y(ht[Bt],nt[Bt],Dt);it(L.x,L.y,-D)}}}const Ut=g+x;for(let J=0;J<H;J++){const ot=d?Y(M[J],St[J],Ut):M[J];v?(C.copy(P.normals[0]).multiplyScalar(ot.x),E.copy(P.binormals[0]).multiplyScalar(ot.y),w.copy(y[0]).add(C).add(E),it(w.x,w.y,w.z)):it(ot.x,ot.y,0)}for(let J=1;J<=u;J++)for(let ot=0;ot<H;ot++){const D=d?Y(M[ot],St[ot],Ut):M[ot];v?(C.copy(P.normals[J]).multiplyScalar(D.x),E.copy(P.binormals[J]).multiplyScalar(D.y),w.copy(y[J]).add(C).add(E),it(w.x,w.y,w.z)):it(D.x,D.y,h/u*J)}for(let J=m-1;J>=0;J--){const ot=J/m,D=f*Math.cos(ot*Math.PI/2),Dt=g*Math.sin(ot*Math.PI/2)+x;for(let rt=0,bt=O.length;rt<bt;rt++){const ht=Y(O[rt],st[rt],Dt);it(ht.x,ht.y,h+D)}for(let rt=0,bt=R.length;rt<bt;rt++){const ht=R[rt];nt=X[rt];for(let Bt=0,vt=ht.length;Bt<vt;Bt++){const L=Y(ht[Bt],nt[Bt],Dt);v?it(L.x,L.y+y[u-1].y,y[u-1].x+D):it(L.x,L.y,h+D)}}}G(),K();function G(){const J=s.length/3;if(d){let ot=0,D=H*ot;for(let Dt=0;Dt<et;Dt++){const rt=N[Dt];At(rt[2]+D,rt[1]+D,rt[0]+D)}ot=u+m*2,D=H*ot;for(let Dt=0;Dt<et;Dt++){const rt=N[Dt];At(rt[0]+D,rt[1]+D,rt[2]+D)}}else{for(let ot=0;ot<et;ot++){const D=N[ot];At(D[2],D[1],D[0])}for(let ot=0;ot<et;ot++){const D=N[ot];At(D[0]+H*u,D[1]+H*u,D[2]+H*u)}}n.addGroup(J,s.length/3-J,0)}function K(){const J=s.length/3;let ot=0;ct(O,ot),ot+=O.length;for(let D=0,Dt=R.length;D<Dt;D++){const rt=R[D];ct(rt,ot),ot+=rt.length}n.addGroup(J,s.length/3-J,1)}function ct(J,ot){let D=J.length;for(;--D>=0;){const Dt=D;let rt=D-1;rt<0&&(rt=J.length-1);for(let bt=0,ht=u+m*2;bt<ht;bt++){const Bt=H*bt,vt=H*(bt+1),L=ot+Dt+Bt,T=ot+rt+Bt,B=ot+rt+vt,j=ot+Dt+vt;It(L,T,B,j)}}}function it(J,ot,D){l.push(J),l.push(ot),l.push(D)}function At(J,ot,D){Ft(J),Ft(ot),Ft(D);const Dt=s.length/3,rt=_.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);Vt(rt[0]),Vt(rt[1]),Vt(rt[2])}function It(J,ot,D,Dt){Ft(J),Ft(ot),Ft(Dt),Ft(ot),Ft(D),Ft(Dt);const rt=s.length/3,bt=_.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);Vt(bt[0]),Vt(bt[1]),Vt(bt[3]),Vt(bt[1]),Vt(bt[2]),Vt(bt[3])}function Ft(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Vt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jl[s.type]().fromJSON(s)),new Vr(n,t.options)}}const _v={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-h),new at(d,1-g),new at(x,1-p)]:[new at(a,1-l),new at(u,1-h),new at(f,1-g),new at(m,1-p)]}};function vv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ra extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ra(t.radius,t.detail)}}class oa extends Gr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oa(t.radius,t.detail)}}class aa extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,f=new I,g=new at;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const _=p+m,y=_,v=_+n+1,P=_+n+2,E=_+1;a.push(y,v,E),a.push(v,P,E)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ne extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const E=P/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+v,1-y),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=u[p][_+1],v=u[p][_],P=u[p+1][_],E=u[p+1][_+1];(p!==0||o>0)&&f.push(y,v,E),(p!==n-1||l<Math.PI)&&f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class os extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oe extends er{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ju={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Mv=new yv;class wc{constructor(t){this.manager=t!==void 0?t:Mv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}wc.DEFAULT_MATERIAL_NAME="__DEFAULT";class bv extends wc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ju.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Pr("img");function l(){u(),Ju.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Sv extends wc{constructor(t){super(t)}load(t,e,n,s){const r=new He,o=new bv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class la extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wv extends la{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const tl=new Ot,Ku=new I,Qu=new I;class Ad{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ku),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const th=new Ot,dr=new I,el=new I;class Ev extends Ad{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(dr),el.copy(n.position),el.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(el),n.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th)}}class Cd extends la{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ev}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Tv extends Ad{constructor(){super(new fd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Av extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Tv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cv extends la{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);const $s=2,Rd=3,li=7,fr=5,Ln=600,te=32,Si=42,ca=[{id:"sword",count:1,label:"Sword"},{id:"drumstick",count:6,label:"Drumstick (feed dragons)"},{id:"bread",count:5,label:"Bread (heal you)"},{id:"block_wood",count:24,label:"Wood block (build)"},{id:"block_stone",count:16,label:"Stone block (build)"},{id:"dragon_book",count:1,label:"Dragon Types"},{id:"round_charm",count:1,label:"Camp charm"}],Rv={ember:{body:"#e86a3a",belly:"#f0c070",wing:"#c04030",name:"Ember"},moss:{body:"#4a8a55",belly:"#c5d98a",wing:"#2f6a40",name:"Moss"},sky:{body:"#4a90c8",belly:"#d0e8f8",wing:"#2a5a9a",name:"Sky"},amethyst:{body:"#8a5cb8",belly:"#e0c8f0",wing:"#5a3080",name:"Amethyst"},sunshine:{body:"#f0c040",belly:"#fff0b0",wing:"#e09020",name:"Sunshine"},coral:{body:"#f08090",belly:"#ffe0e8",wing:"#d05070",name:"Coral"}},Pv={hair:"#f5d94a",top:"#3a7fd4",trousers:"#9b7bc8",shoes:"#4a2f6a",skin:"#f0c9a8"},ni=[{id:"meadow",inner:0,outer:80,label:"Meadow Home"},{id:"forest",inner:80,outer:200,label:"Whispering Forest"},{id:"lake",inner:200,outer:320,label:"Silver Lakes"},{id:"rocky",inner:320,outer:420,label:"Stone Highlands"},{id:"snow",inner:420,outer:500,label:"Frost Peaks"},{id:"dragon_lands",inner:500,outer:1e9,label:"Dragon Lands"}],eh=40;function nh(i,t){const e=Math.atan2(t,i);return Math.sin(e+Math.PI*.25)+(Math.sin(i*.01)+Math.cos(t*.01))*.15>0?{id:"desert",label:"Sunbaked Dunes"}:{id:"snow",label:"Frost Peaks"}}const Lv={meadow:{color:"#c5ddf2",density:.006,sky:"#a8d4f5"},forest:{color:"#a0b898",density:.008,sky:"#88b090"},lake:{color:"#a8c8e8",density:.006,sky:"#8eb8e0"},rocky:{color:"#c8c0b8",density:.007,sky:"#b0b8c0"},snow:{color:"#d8e8f8",density:.008,sky:"#c8d8f0"},desert:{color:"#e8d8b0",density:.006,sky:"#e0c888"},dragon_lands:{color:"#684848",density:.007,sky:"#6a5058"}};function nn(i,t){const e=Math.hypot(i,t),n=Math.sin(i*.037)*8+Math.cos(t*.029)*7+Math.sin((i+t)*.019)*5,s=Math.max(0,e+n);let r="meadow",o="Meadow Home",a=80;for(let d=0;d<ni.length;d++){const f=ni[d];if(s<f.outer||d===ni.length-1){r=f.id,o=f.label,a=f.outer,f.inner;break}}if(r==="snow"||s>=420&&s<500){const d=nh(i,t);r=d.id,o=d.label}let l=null,c=0;const u=a-s;if(u<eh&&a<1e8){c=1-u/eh,c=Math.max(0,Math.min(1,c)),ni.find(g=>g.inner>=a-.1)??ni[ni.length-1];const d=ni.findIndex(g=>g.outer===a),f=ni[Math.min(ni.length-1,d+1)];l=f.id==="snow"?nh(i,t).id:f.id}const h=Lv[r];return{primary:r,secondary:l,blend:c,label:o,fogColor:h.color,fogDensity:h.density,skyTint:h.sky}}function Ii(i,t,e){return Math.max(t,Math.min(e,i))}function Wr(i,t){const e=i.x-t.x,n=i.z-t.z;return Math.hypot(e,n)}function ih(i){const t=Ln-1,e=Math.hypot(i.x,i.z);let n=i.x,s=i.z;if(e>t){const r=t/e;n*=r,s*=r}return{x:n,y:Ii(i.y,-20,120),z:s}}function Iv(i,t,e){return t||e?!1:i==="adventure"}function Dv(i,t){return t?!1:i==="safe_build"||i==="adventure"}function Nv(i,t){const e=i.player.monstersDefeated+1,n=i.player.stars+1;let s=i.player.level,r=i.player.levelProgress;const o=e/fr;r=Ii(o%1===0&&o>0?1:o-Math.floor(o),0,1),e>0&&e%fr===0?!i.settings.useStarsForLevelUnlock||n>=i.settings.starsToUnlockNextLevel?(s+=1,r=0):r=.99:r=Ii(e%fr/fr,0,1);const a=i.flags.firstObjectiveComplete||e>=fr;return{...i,player:{...i.player,monstersDefeated:e,stars:n,level:s,levelProgress:r},flags:{...i.flags,firstObjectiveComplete:a}}}function Uv(i,t,e){const n=i.find(a=>a.id===t);if(!n)return{companions:i,bondedNow:!1,rejected:"missing"};if(n.bonded)return{companions:i,bondedNow:!1,rejected:"already_bonded"};if(i.filter(a=>a.bonded).length>=Rd)return{companions:i,bondedNow:!1,rejected:"max_companions"};let r=!1;return{companions:i.map(a=>{if(a.id!==t)return a;const l=Ii(a.tameness+e,0,1),c=l>=1;return c&&!a.bonded&&(r=!0),{...a,tameness:l,bonded:c}}),bondedNow:r,rejected:null}}function Fv(i,t,e){if(e!=="grounded")return{ok:!1,mount:e,mountedCompanionId:t,reason:"already_mounted"};const n=i.find(s=>s.id===t);return!n||!n.bonded||n.kind!=="dragon"?{ok:!1,mount:"grounded",mountedCompanionId:null,reason:"need_bonded_dragon"}:{ok:!0,mount:"mounted",mountedCompanionId:t}}function Ov(i,t,e=2.5){return i==="grounded"?{ok:!1,mount:i,reason:"not_mounted"}:t>e?{ok:!0,mount:"grounded",softLanding:!0}:{ok:!0,mount:"grounded",softLanding:!1}}function zv(i){return i==="mounted"||i==="flying"?"flying":i}function kv(i,t){return i!=="flying"?i:t<=1.2?"mounted":"flying"}function nl(i,t,e,n,s,r=200){if(!Dv(n,s))return{blocks:i,ok:!1,reason:"blocked"};if(i.length>=r)return{blocks:i,ok:!1,reason:"full"};const o=`${t.x}|${t.y}|${t.z}`;if(i.some(l=>`${l.x}|${l.y}|${l.z}`===o))return{blocks:i,ok:!1,reason:"occupied"};const a=`b_${i.length}_${t.x}_${t.y}_${t.z}`;return{blocks:[...i,{id:a,...t,material:e}],ok:!0}}function ec(i,t,e){return i===t?{mode:i}:{mode:"adventure",flagsPatch:{readyToBattleAcknowledged:!0}}}function sh(i,t){return Ii(i-t,0,li)}function Bv(i,t,e=li){return Ii(i+t,0,e)}const Hv="dragon-master-trilli",Gv=Hv,Vv=Gv,js="saves",Pd="primary";async function Wv(i){return{imported:!1,note:null}}function Ld(i=1){const t=[],e=[{r:22,kind:"field_monster",n:4},{r:120,kind:"forest_sprite",n:4},{r:250,kind:"river_skimmer",n:3},{r:360,kind:"stone_mite",n:3},{r:480,kind:"frost_puff",n:2},{r:500,kind:"sand_wisp",n:2},{r:580,kind:"ember_mite",n:3}];let n=0;for(const r of e)for(let o=0;o<r.n;o++){const a=o/r.n*Math.PI*2+r.r*.01;let l=r.kind;r.r>=440&&r.r<560&&(l=Math.cos(a)>0?"sand_wisp":"frost_puff"),t.push({id:`m_${n++}`,kind:l,position:{x:Math.cos(a)*r.r,y:0,z:Math.sin(a)*r.r},hp:3,maxHp:3,alive:!0,hostile:!1})}const s=[{id:"wild_ember",kind:"dragon",name:"Ember Dragon",palette:"ember",tameness:0,bonded:!1,position:{x:3.2,y:0,z:4.5}},{id:"wild_sky",kind:"dragon",name:"Sky Dragon",palette:"sky",tameness:0,bonded:!1,position:{x:-16,y:0,z:10}},{id:"wild_moss",kind:"dragon",name:"Moss Dragon",palette:"moss",tameness:0,bonded:!1,position:{x:6,y:0,z:-22}},{id:"wild_amethyst",kind:"dragon",name:"Amethyst Dragon",palette:"amethyst",tameness:0,bonded:!1,position:{x:-10,y:0,z:-18}}];return{version:$s,savedAt:new Date().toISOString(),player:{position:{x:0,y:1.6,z:3},yaw:0,pitch:0,hearts:li,maxHearts:li,level:1,levelProgress:0,stars:0,monstersDefeated:0,mode:"safe_build",mount:"grounded",mountedCompanionId:null,selectedHotbar:0,hotbar:ca.map(r=>({...r})),appearance:{...Pv},sprinting:!1},companions:s,monsters:t,blocks:[],flags:{firstObjectiveComplete:!1,tutorialSeen:!1,readyToBattleAcknowledged:!1,buildGuideComplete:!1,welcomeShownOnce:!1},settings:{muted:!1,quality:"medium",starsToUnlockNextLevel:20,useStarsForLevelUnlock:!1}}}function Xv(i,t){const e={...i,version:$s},n=t(e.player.position.x,e.player.position.z),s=1.55;(!Number.isFinite(e.player.position.y)||e.player.position.y<n+.5||e.player.position.y>n+80)&&(e.player={...e.player,position:{...e.player.position,y:n+s}});const r=Math.hypot(e.player.position.x,e.player.position.z);if(r>598){const o=598/r;e.player.position={x:e.player.position.x*o,y:e.player.position.y,z:e.player.position.z*o};const a=t(e.player.position.x,e.player.position.z);e.player.position.y=a+s}return e.companions=e.companions.map(o=>{const a=t(o.position.x,o.position.z);return{...o,position:{...o.position,y:a}}}),e.monsters=e.monsters.map(o=>{const a=t(o.position.x,o.position.z);return{...o,position:{...o.position,y:a}}}),e}function Hn(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Ci(i,t,e){const n=typeof i=="number"?i:Number(i);return!Number.isFinite(n)||n<t||n>e?null:n}function Ec(i,t=Ln+40){if(!Hn(i))return null;const e=Ci(i.x,-t,t),n=Ci(i.y,-5,120),s=Ci(i.z,-t,t);return e==null||n==null||s==null?null:{x:e,y:n,z:s}}function qv(i){if(!Array.isArray(i)||i.length!==7)return null;const t=[];for(const e of i){if(!Hn(e)||typeof e.id!="string"||typeof e.label!="string")return null;const n=Number(e.count);if(!Number.isFinite(n)||n<0||n>99)return null;t.push({id:e.id,count:n,label:e.label.slice(0,40)})}return t}function Yv(i){if(!Array.isArray(i)||i.length>12)return null;const t=[];let e=0;for(const n of i){if(!Hn(n)||typeof n.id!="string"||typeof n.name!="string"||n.kind!=="dragon"&&n.kind!=="animal")return null;const s=Number(n.tameness);if(!Number.isFinite(s)||s<0||s>1||typeof n.bonded!="boolean"||(n.bonded&&e++,e>Rd))return null;const r=Ec(n.position);if(!r)return null;t.push({...n,position:r,tameness:s})}return t}function $v(i){if(!Array.isArray(i)||i.length>80)return null;const t=[];for(const e of i){if(!Hn(e)||typeof e.id!="string")return null;const n=Number(e.hp),s=Number(e.maxHp);if(!Number.isFinite(n)||!Number.isFinite(s)||n<0||n>20||s<1||s>20)return null;const r=typeof e.hostile=="boolean"?e.hostile:!1,o=Ec(e.position);if(!o)return null;t.push({...e,hostile:r,position:o,hp:n,maxHp:s})}return t}function jv(i){if(!Array.isArray(i)||i.length>250)return null;const t=[];for(const e of i){if(!Hn(e)||typeof e.id!="string"||e.material!=="wood"&&e.material!=="stone")return null;const n=Ci(e.x,-Ln-40,Ln+40),s=Ci(e.y,-20,120),r=Ci(e.z,-Ln-40,Ln+40);if(n==null||s==null||r==null)return null;t.push({id:String(e.id).slice(0,64),x:n,y:s,z:r,material:e.material})}return t}function Id(i){if(!Hn(i))return null;const t=Number(i.version);if(!Number.isInteger(t)||t<1||t>$s||!Hn(i.player)||!Hn(i.flags)||!Hn(i.settings))return null;const e=qv(i.player.hotbar);if(!e)return null;const n=Yv(i.companions);if(!n)return null;const s=$v(i.monsters);if(!s)return null;const r=jv(i.blocks);if(!r)return null;const o=Number(i.player.hearts);if(!Number.isFinite(o)||o<0||o>li)return null;const a=Ec(i.player.position);if(!a)return null;const l=Ci(i.player.yaw,-100,100);if(l==null)return null;const c=-60*Math.PI/180,u=25*Math.PI/180;let h=Ci(i.player.pitch,-100,100);h==null||!Number.isFinite(h)?h=-.18:h=Math.max(c,Math.min(u,h));const d=Ld();try{return{...d,version:$s,savedAt:typeof i.savedAt=="string"?i.savedAt:new Date().toISOString(),player:{...d.player,...i.player,hearts:Ii(o,0,li),maxHearts:li,hotbar:e,position:a,yaw:l,pitch:h,appearance:{...d.player.appearance,...Hn(i.player.appearance)?i.player.appearance:{}}},companions:n,monsters:s,blocks:r,flags:{...d.flags,...i.flags},settings:{...d.settings,...i.settings,starsToUnlockNextLevel:Ii(Number(i.settings.starsToUnlockNextLevel)||20,1,100),useStarsForLevelUnlock:!!i.settings.useStarsForLevelUnlock}}}catch{return null}}function Zv(i){const t={...i,savedAt:new Date().toISOString(),version:$s};return JSON.stringify(t,null,2)}function Jv(i,t){try{if(i.length>5e5)return{ok:!1,error:"Save file too large.",previous:t};const e=JSON.parse(i),n=Id(e);return n?{ok:!0,state:n}:{ok:!1,error:"Save failed validation (schema or bounds).",previous:t}}catch{return{ok:!1,error:"Save JSON could not be parsed.",previous:t}}}function Dd(){return new Promise((i,t)=>{const e=indexedDB.open(Vv,1);e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(js)||n.createObjectStore(js)},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function Kv(){if(typeof indexedDB>"u")return null;const i=await Dd();return new Promise((t,e)=>{const s=i.transaction(js,"readonly").objectStore(js).get(Pd);s.onsuccess=()=>{const r=s.result;if(!r){t(null);return}t(Id(r))},s.onerror=()=>e(s.error)})}async function Xr(i){if(typeof indexedDB>"u")return;const t=await Dd(),e={...i,savedAt:new Date().toISOString(),version:$s};return new Promise((n,s)=>{const r=t.transaction(js,"readwrite");r.objectStore(js).put(e,Pd),r.oncomplete=()=>n(),r.onerror=()=>s(r.error)})}async function Qv(){try{if(navigator.storage&&navigator.storage.persist)return await navigator.storage.persist()}catch{}return!1}function ty(i){return{...i,hostile:!!i.hostile}}function yn(i){return i.map(ty)}function ey(i,t,e,n,s,r){if(!Iv(n,s,r))return{monsters:i,hit:!1,defeated:!1,becameHostile:!1};let o=!1,a=!1,l=!1;return{monsters:i.map(u=>{if(u.id!==t||!u.alive)return u;o=!0;const h=u.hostile,d=Math.max(0,u.hp-e);return d<=0&&(a=!0),h||(l=!0),{...u,hp:d,alive:d>0,hostile:!0}}),hit:o,defeated:a,becameHostile:l}}function ny(i){return i.alive&&i.hostile}function Nd(i,t,e){const n=[];for(const s of i)s.alive&&Wr(s.position,t)<=e&&n.push(s.id);return{nearbyIds:n,monsters:i.map(s=>({...s}))}}function iy(i,t,e=1.2){const n=Nd(i,t,e);return{touchingIds:n.nearbyIds,monsters:n.monsters}}function Wo(i){return i.map(t=>({...t}))}function sy(i,t,e,n){let s=0;const r=[];for(const o of i)ny(o)&&Wr(o.position,t)<=e&&(s+=n,r.push(o.id));return{damageToPlayer:s,attackerIds:r}}function ry(){return{forward:!1,back:!1,left:!1,right:!1,jump:!1,sprint:!1,attack:!1,interact:!1,place:!1,removeBlock:!1,toggleMount:!1,readyBattle:!1,pause:!1,recenter:!1,slot:null,lookDx:0,lookDy:0,touchLookDx:0,touchLookDy:0,touchMoveX:0,touchMoveY:0}}const rh=80;class oy{constructor(t,e){this.canvas=t,this.isMenuOpen=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),t.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("pointerlockchange",()=>{const n=document.pointerLockElement===t;n&&!this.pointerLocked&&(this.ignoreNextLook=!0,this.state.lookDx=0,this.state.lookDy=0),this.pointerLocked=n}),this.setupTouch()}state=ry();keys=new Set;lastW=0;pointerLocked=!1;wantsLock=!1;attackQueued=!1;placeQueued=!1;readyQueued=!1;interactQueued=!1;mountQueued=!1;recenterQueued=!1;touchJumpHeld=!1;ignoreNextLook=!1;armPointerLockIgnore(){this.ignoreNextLook=!0,this.state.lookDx=0,this.state.lookDy=0}requestLock(){this.wantsLock=!0,this.isMenuOpen()||this.canvas.requestPointerLock()}releaseLock(){this.wantsLock=!1,document.pointerLockElement&&document.exitPointerLock()}onKeyDown=t=>{if(t.code==="Escape"){this.state.pause=!0,this.releaseLock();return}if(!this.isMenuOpen()){if(this.keys.add(t.code),t.code==="KeyW"){const e=performance.now();e-this.lastW<280&&(this.state.sprint=!0),this.lastW=e}t.code>="Digit1"&&t.code<="Digit7"&&(this.state.slot=Number(t.code.replace("Digit",""))-1),t.code==="KeyE"&&(this.state.toggleMount=!0,this.mountQueued=!0),t.code==="KeyR"&&(this.state.readyBattle=!0,this.readyQueued=!0),t.code==="KeyF"&&(this.state.interact=!0,this.interactQueued=!0),t.code==="KeyX"&&(this.state.removeBlock=!0),(t.code==="KeyC"||t.code==="Home")&&(this.state.recenter=!0,this.recenterQueued=!0,t.preventDefault())}};onKeyUp=t=>{this.keys.delete(t.code),t.code==="KeyW"&&(this.state.sprint=!1)};onMouseDown=t=>{this.isMenuOpen()||(!this.pointerLocked&&t.button===0&&this.requestLock(),t.button===0&&(this.state.attack=!0,this.attackQueued=!0),t.button===2&&(this.state.place=!0,this.placeQueued=!0))};onMouseUp=t=>{t.button===0&&(this.state.attack=!1),t.button===2&&(this.state.place=!1)};onMouseMove=t=>{if(this.isMenuOpen()||!this.pointerLocked&&!this.wantsLock&&t.buttons!==1)return;if(this.ignoreNextLook){this.ignoreNextLook=!1;return}const e=t.movementX,n=t.movementY;Math.abs(e)>rh||Math.abs(n)>rh||(this.state.lookDx+=e,this.state.lookDy+=n)};setupTouch(){const t=document.getElementById("touch-move"),e=document.getElementById("touch-look"),n=document.getElementById("touch-jump"),s=document.getElementById("touch-action"),r=document.getElementById("touch-mount"),o=document.getElementById("touch-recenter");if(!t||!e)return;const a=(l,c)=>{let u=null,h=0,d=0;l.addEventListener("pointerdown",f=>{u=f.pointerId,h=f.clientX,d=f.clientY,l.setPointerCapture(u)}),l.addEventListener("pointermove",f=>{if(f.pointerId!==u)return;const g=(f.clientX-h)/40,x=(f.clientY-d)/40;c==="move"?(this.state.touchMoveX=Math.max(-1,Math.min(1,g)),this.state.touchMoveY=Math.max(-1,Math.min(1,x))):(this.state.touchLookDx=Math.max(-8,Math.min(8,g*4)),this.state.touchLookDy=Math.max(-8,Math.min(8,x*4)),h=f.clientX,d=f.clientY)}),l.addEventListener("pointerup",()=>{u=null,c==="move"?(this.state.touchMoveX=0,this.state.touchMoveY=0):(this.state.touchLookDx=0,this.state.touchLookDy=0)})};a(t,"move"),a(e,"look"),n?.addEventListener("pointerdown",()=>{this.touchJumpHeld=!0}),n?.addEventListener("pointerup",()=>{this.touchJumpHeld=!1}),n?.addEventListener("pointercancel",()=>{this.touchJumpHeld=!1}),s?.addEventListener("pointerdown",()=>{this.state.attack=!0}),s?.addEventListener("pointerup",()=>{this.state.attack=!1}),r?.addEventListener("pointerdown",()=>{this.state.toggleMount=!0}),o?.addEventListener("pointerdown",l=>{l.preventDefault(),this.state.recenter=!0,this.recenterQueued=!0})}sample(){this.isMenuOpen()||(this.state.forward=this.keys.has("KeyW")||this.state.touchMoveY<-.25,this.state.back=this.keys.has("KeyS")||this.state.touchMoveY>.25,this.state.left=this.keys.has("KeyA")||this.state.touchMoveX<-.25,this.state.right=this.keys.has("KeyD")||this.state.touchMoveX>.25,this.state.jump=this.keys.has("Space")||this.touchJumpHeld);const t={...this.state};return this.attackQueued&&(t.attack=!0),this.placeQueued&&(t.place=!0),this.readyQueued&&(t.readyBattle=!0),this.interactQueued&&(t.interact=!0),this.mountQueued&&(t.toggleMount=!0),this.recenterQueued&&(t.recenter=!0),this.attackQueued=!1,this.placeQueued=!1,this.readyQueued=!1,this.interactQueued=!1,this.mountQueued=!1,this.recenterQueued=!1,this.state.pause=!1,this.state.toggleMount=!1,this.state.readyBattle=!1,this.state.interact=!1,this.state.removeBlock=!1,this.state.attack=!1,this.state.place=!1,this.state.recenter=!1,this.state.slot=null,this.state.lookDx=0,this.state.lookDy=0,this.state.touchLookDx=0,this.state.touchLookDy=0,t}}class ay{ctx=null;muted=!1;unlocked=!1;async unlock(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&await this.ctx.resume(),this.unlocked=!0}beep(t,e,n,s=.08){if(this.muted||!this.unlocked||!this.ctx)return;const r=this.ctx.currentTime,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type=n,o.frequency.value=t,a.gain.setValueAtTime(s,r),a.gain.exponentialRampToValueAtTime(.001,r+e),o.connect(a),a.connect(this.ctx.destination),o.start(r),o.stop(r+e)}swing(){this.beep(180,.08,"square",.05)}hit(){this.beep(120,.12,"sawtooth",.07)}tame(){this.beep(520,.15,"sine",.06),this.beep(780,.2,"sine",.04)}mount(){this.beep(300,.1,"triangle",.05)}place(){this.beep(240,.06,"triangle",.04)}hurt(){this.beep(90,.2,"sawtooth",.08)}win(){this.beep(440,.12,"sine",.05),this.beep(660,.18,"sine",.05)}ui(){this.beep(600,.04,"sine",.03)}save(){this.beep(400,.08,"sine",.04),this.beep(500,.1,"sine",.03)}}const _n="./textures/v1/";let On=null,il=null;const ly=new Sv;function ji(i,t={}){return new Promise((e,n)=>{ly.load(i,s=>{s.colorSpace=t.srgb?ke:si,s.wrapS=s.wrapT=t.wrap??Xn,t.flipY===!1&&(s.flipY=!1),s.anisotropy=4,s.needsUpdate=!0,e(s)},void 0,()=>n(new Error("texture load failed: "+i)))})}async function As(i,t={}){try{return await ji(i,t)}catch{return null}}const Ns={grass:.55,path:.35},Ri={grass:.92,dirt:.95,path:.9,rock:.88,wood:.72,scales:.62,water:.22};function mn(){return On}async function Ud(i){const t=i==="low";if(On&&il===(t?"low":"full"))return On;if(On){for(const S of Object.values(On))if(S&&typeof S.dispose=="function"&&S.dispose(),Array.isArray(S))for(const M of S)M.dispose();On=null}const e=S=>ji(_n+S,{srgb:!0}),n=S=>ji(_n+S,{srgb:!1});if(t){const[S,M,R,U,N,O,Y,H,et,q,st,X,nt]=await Promise.all([e("grass_color.webp"),e("dirt_color.webp"),e("path_dirt_blend_color.webp"),e("rock_dirt_blend_color.webp"),e("log_bark_color.webp"),e("roof_shingles_color.webp"),e("dragon_scales_color.webp"),e("dragon_belly_color.webp"),ji(_n+"wing_membrane.webp",{srgb:!0,wrap:ze}),ji(_n+"log_endgrain_color.webp",{srgb:!0,wrap:ze}),As(_n+"cloud_01_256.webp",{srgb:!0,wrap:ze}),As(_n+"cloud_02_256.webp",{srgb:!0,wrap:ze}),As(_n+"cloud_03_256.webp",{srgb:!0,wrap:ze})]);return R.rotation=.17,R.center.set(.5,.5),U.offset.set(.13,.07),On={grass:S,dirt:M,path:R,rock:U,wood:N,endgrain:q,shingle:O,scales:Y,belly:H,wing:et,clouds:[st,X,nt].filter(Boolean)},il="low",On}const[s,r,o,a,l,c,u,h,d,f,g,x,m,p,_,y,v,P,E,C,w]=await Promise.all([e("grass_color.webp"),e("dirt_color.webp"),e("path_dirt_blend_color.webp"),e("rock_dirt_blend_color.webp"),n("grass_normal.webp"),n("dirt_normal.webp"),n("path_normal.webp"),n("rock_normal.webp"),e("log_bark_color.webp"),n("log_bark_normal.webp"),ji(_n+"log_endgrain_color.webp",{srgb:!0,wrap:ze}),e("roof_shingles_color.webp"),n("roof_shingles_normal.webp"),e("dragon_scales_color.webp"),n("dragon_scales_normal.webp"),e("dragon_belly_color.webp"),ji(_n+"wing_membrane.webp",{srgb:!0,wrap:ze}),n("water_ripple_normal.webp"),As(_n+"cloud_01_256.webp",{srgb:!0,wrap:ze}),As(_n+"cloud_02_256.webp",{srgb:!0,wrap:ze}),As(_n+"cloud_03_256.webp",{srgb:!0,wrap:ze})]);return o.rotation=.17,o.center.set(.5,.5),u&&(u.rotation=.17,u.center.set(.5,.5)),a.offset.set(.13,.07),h&&h.offset.set(.13,.07),On={grass:s,dirt:r,path:o,rock:a,grassNormal:l,dirtNormal:c,pathNormal:u,rockNormal:h,wood:d,woodNormal:f,endgrain:g,shingle:x,shingleNormal:m,scales:p,scalesNormal:_,belly:y,wing:v,waterNormal:P,clouds:[E,C,w].filter(Boolean)},il="full",On}const oh=new Map;function us(i,t,e,n){const s=oh.get(i);if(s)return s;const r=document.createElement("canvas");r.width=r.height=t;const o=r.getContext("2d");e(o,t);const a=new vc(r);return a.colorSpace=ke,a.wrapS=a.wrapT=Xn,a.anisotropy=4,a.needsUpdate=!0,oh.set(i,a),a}function Fd(i=128){const t=mn();return t?.grass?t.grass:us("grass",i,(e,n)=>{e.fillStyle="#4a8a3a",e.fillRect(0,0,n,n);for(let s=0;s<900;s++){const r=Math.random()*n,o=Math.random()*n;e.fillStyle=Math.random()>.5?"#5a9a48":"#3a7a30",e.fillRect(r,o,1+Math.random()*2,2+Math.random()*4)}})}function Od(i=128){const t=mn();return t?.dirt?t.dirt:us("dirt",i,(e,n)=>{e.fillStyle="#6a4a28",e.fillRect(0,0,n,n);for(let s=0;s<600;s++)e.fillStyle=Math.random()>.5?"#7a5a38":"#5a3a20",e.fillRect(Math.random()*n,Math.random()*n,2,2)})}function qr(i=128){const t=mn();return t?.rock?t.rock:us("rock",i,(e,n)=>{e.fillStyle="#6a6e72",e.fillRect(0,0,n,n);for(let s=0;s<200;s++){const r=Math.random()*n,o=Math.random()*n;e.fillStyle=`rgb(${90+Math.random()*40|0},${94+Math.random()*40|0},${98+Math.random()*40|0})`,e.beginPath(),e.ellipse(r,o,4+Math.random()*10,3+Math.random()*8,Math.random(),0,Math.PI*2),e.fill()}})}function cy(i=128){const t=mn();return t?.path?t.path:us("path",i,(e,n)=>{e.fillStyle="#c4b090",e.fillRect(0,0,n,n);for(let s=0;s<80;s++)e.fillStyle=Math.random()>.5?"#b0a080":"#d0c4a0",e.beginPath(),e.ellipse(Math.random()*n,Math.random()*n,6,4,Math.random(),0,Math.PI*2),e.fill()})}function ua(i=128){const t=mn();return t?.wood?t.wood:us("wood",i,(e,n)=>{e.fillStyle="#8b5a2b",e.fillRect(0,0,n,n);for(let s=0;s<n;s+=8)e.strokeStyle=`rgba(60,30,10,${.25+Math.random()*.35})`,e.lineWidth=1+Math.random(),e.beginPath(),e.moveTo(0,s+Math.random()*3),e.bezierCurveTo(n*.3,s+2,n*.7,s-2,n,s+Math.random()*3),e.stroke()})}function zd(i=64){const t=mn();return t?.shingle?t.shingle:us("shingle",i,(e,n)=>{e.fillStyle="#8b3a3a",e.fillRect(0,0,n,n);const s=8,r=6;for(let o=0;o<s;o++)for(let a=0;a<r;a++){const l=(a+o%2*.5)*(n/r),c=o*(n/s);e.fillStyle=o%2?"#a04840":"#7a3030",e.fillRect(l,c,n/r-1,n/s-1)}})}function sl(i,t=64){const e=mn();return e?.scales?e.scales:us("scales_"+i,t,(n,s)=>{n.fillStyle=i,n.fillRect(0,0,s,s);for(let r=0;r<s;r+=6)for(let o=0;o<s;o+=6){const a=o+(r%12===0?0:3);n.fillStyle="rgba(0,0,0,0.12)",n.beginPath(),n.ellipse(a,r,3,2.5,0,0,Math.PI*2),n.fill()}})}const ah=new Map;function Ye(i,t){let e=ah.get(i);return e||(e=t(),ah.set(i,e)),e}function fn(i,t){const e=new oe({color:i,map:t,roughness:Ri.wood,metalness:0}),n=mn();return n?.woodNormal&&t===n.wood&&(e.normalMap=n.woodNormal,e.normalScale=new at(.55,.55)),n?.shingleNormal&&t===n.shingle&&(e.normalMap=n.shingleNormal,e.normalScale=new at(.65,.65)),e}function ha(i){i.traverse(t=>{const e=t;e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})}function uy(){const i=new mt(Ye("bush2",()=>new ra(.42,1)),fn("#3f7a40"));return i.scale.set(1.25,.9,1.15),i.castShadow=!0,i}function hy(i=3.2){const t=new se;t.name="pine";const e=ua(64).clone();e.repeat.set(1,3),e.wrapS=e.wrapT=Xn;const n=new mt(Ye("pineT3",()=>new Pe(.11,.18,1.8,8)),fn("#5a3a24",e));n.position.y=.9,t.add(n);for(let s=0;s<4;s++){const r=new mt(Ye("pineC3",()=>new Ui(1.05-s*.18,1.2,8)),fn("#2f6a38"));r.position.y=1.7+s*.7,t.add(r)}return t.scale.setScalar(i/3.2),ha(t),t}function dy(i=2.8){const t=new se,e=new mt(Ye("broadT",()=>new Pe(.08,.12,1.2,6)),fn("#6a4a30",ua(64)));e.position.y=.6,t.add(e);for(const[n,s,r,o]of[[0,1.8,0,1],[.45,1.6,.2,.7],[-.4,1.65,-.15,.65],[.1,2.15,-.2,.55]]){const a=new mt(Ye("broadL",()=>new ra(.55,1)),fn("#4a9a48"));a.position.set(n,s,r),a.scale.setScalar(o),t.add(a)}return t.scale.setScalar(i/2.8),ha(t),t}function fy(i=1){const t=new mt(Ye("rock2",()=>new na(.55,0)),fn("#a8a8a4",qr(64)));return t.scale.set(i,i*.7,i*1.1),t.castShadow=!0,t.receiveShadow=!0,t}function py(i="#e86a3a"){const t=new se,e=new mt(Ye("stem2",()=>new Pe(.015,.02,.28,4)),fn("#3a6a30"));e.position.y=.14,t.add(e);const n=new mt(Ye("fhead",()=>new ne(.09,8,6)),fn(i));n.position.y=.3,t.add(n);const s=new mt(Ye("pcenter",()=>new ne(.04,6,4)),fn("#f0d878"));return s.position.y=.34,t.add(s),t}function my(){const i=new se,t=ua(64);for(const e of[-.5,.5]){const n=new mt(Ye("fpost2",()=>new Pe(.055,.065,1.15,6)),fn("#9a7050",t));n.position.set(e,.55,0),i.add(n)}for(const e of[.45,.75]){const n=new mt(Ye("frail2",()=>new sn(1.2,.07,.05)),fn("#9a7050",t));n.position.y=e,i.add(n)}return ha(i),i}function gy(){const i=new se,t=new mt(Ye("crystal2",()=>new oa(.5,0)),new oe({color:"#7ec8ff",roughness:.25,metalness:.3,emissive:"#204060",emissiveIntensity:.15}));t.position.y=.85,t.scale.set(.55,1.35,.55),i.add(t);const e=new mt(Ye("crystalBase2",()=>new Pe(.35,.4,.15,6)),fn("#4a7a9a"));return e.position.y=.08,i.add(e),ha(i),i}function xy(){const i=new se;i.name="cloud";const t=new Yn({color:"#ffffff",transparent:!0,opacity:.88,depthWrite:!1,fog:!0});for(const[e,n,s,r]of[[0,0,0,1.1],[.55,.08,.1,.85],[-.5,.05,-.08,.9],[.2,.18,-.2,.7],[-.25,.12,.22,.65],[.7,-.02,-.15,.55]]){const o=new mt(Ye("cloudPuff",()=>new ne(.85,12,10)),t);o.position.set(e,n,s),o.scale.set(r,r*.62,r*.85),i.add(o)}return i}function _y(){const t=new ne(850,24,12),e=new mt(t,new Yn({color:"#9ec8f0",side:Ke,fog:!1,depthWrite:!1,depthTest:!1}));return e.name="skyDome",e.frustumCulled=!1,e.renderOrder=-10,e}function vy(){const i=new se;i.name="pond";const t=new mt(Ye("pond",()=>new Dn(3.2,32)),(()=>{const n=new oe({color:"#3a8ab8",roughness:Ri.water,metalness:.35,transparent:!0,opacity:.82}),s=mn();return s?.waterNormal&&(n.normalMap=s.waterNormal,n.normalScale=new at(.4,.4),s.waterNormal.repeat.set(3,3)),n})());t.rotation.x=-Math.PI/2,t.position.y=.04,t.name="waterSurface",i.add(t);const e=new mt(Ye("pondRim",()=>new aa(3.15,3.55,32)),fn("#7a7060"));return e.rotation.x=-Math.PI/2,e.position.y=.05,i.add(e),i}function pn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Se;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=lh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const g=lh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function lh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Te(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const kd=new WeakMap;function Ae(i,t){return kd.set(i,t),i}class Di{entries=[];colliders=[];stack=[new Ot];push(t,e,n,s=0){const r=new Ot().compose(new I(t,e,n),new Mn().setFromEuler(new Qe(0,s,0)),new I(1,1,1));this.stack.push(this.top().clone().multiply(r))}pop(){this.stack.length>1&&this.stack.pop()}top(){return this.stack[this.stack.length-1]}add(t,e,n,s,r,o={}){const a=t.index?t.toNonIndexed():t.clone();a.attributes.uv||a.setAttribute("uv",new Te(new Float32Array(a.attributes.position.count*2),2)),a.attributes.normal||a.computeVertexNormals();for(const u of Object.keys(a.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&a.deleteAttribute(u);const l=new Ot().compose(new I(n,s,r),new Mn().setFromEuler(new Qe(o.rx??0,o.ry??0,o.rz??0,"YXZ")),new I(1,1,1)),c=this.top().clone().multiply(l);if(a.applyMatrix4(c),this.entries.push({geo:a,mat:e}),o.solid){a.computeBoundingBox();const u=a.boundingBox;this.colliders.push({minX:u.min.x,maxX:u.max.x,minY:u.min.y,maxY:u.max.y,minZ:u.min.z,maxZ:u.max.z})}}box(t,e,n,s,r,o,a,l={}){this.add(new sn(e,n,s),t,r,o,a,l)}boxMin(t,e,n,s,r,o,a,l={}){this.add(new sn(r,o,a),t,e+r/2,n+o/2,s+a/2,l)}cyl(t,e,n,s,r,o,a,l,c={}){this.add(new Pe(e,n,s,r),t,o,a,l,c)}cone(t,e,n,s,r,o,a,l={}){this.add(new Ui(e,n,s),t,r,o,a,l)}sphere(t,e,n,s,r,o={}){const a=new ne(e,o.ws??10,o.hs??8);o.sy&&a.scale(1,o.sy,1),this.add(a,t,n,s,r,o)}plane(t,e,n,s,r,o,a={}){this.add(new ve(e,n),t,s,r,o,a)}solidBox(t,e,n,s,r,o){const a=new I(t,e,n).applyMatrix4(this.top()),l=new I(s,r,o).applyMatrix4(this.top());this.colliders.push({minX:Math.min(a.x,l.x),maxX:Math.max(a.x,l.x),minY:Math.min(a.y,l.y),maxY:Math.max(a.y,l.y),minZ:Math.min(a.z,l.z),maxZ:Math.max(a.z,l.z)})}build(t,e={}){const n=new se;n.name=t;const s=new Map;for(const o of this.entries){const a=s.get(o.mat)??[];a.push(o.geo),s.set(o.mat,a)}let r=0;for(const[o,a]of s){const l=pn(a,!1);if(!l)continue;const c=kd.get(o);c&&yy(l,c),l.computeBoundingSphere();const u=new mt(l,o);u.name=`${t}_m${r++}`,u.castShadow=e.castShadow??!0,u.receiveShadow=e.receiveShadow??!0,n.add(u);for(const h of a)h.dispose()}return this.entries.length=0,n}}function yy(i,t){const e=i.attributes.position,n=i.attributes.normal,s=i.attributes.uv;for(let r=0;r<e.count;r++){const o=Math.abs(n.getX(r)),a=Math.abs(n.getY(r)),l=Math.abs(n.getZ(r)),c=e.getX(r),u=e.getY(r),h=e.getZ(r);a>=o&&a>=l?s.setXY(r,c*t,h*t):o>=l?s.setXY(r,h*t,u*t):s.setXY(r,c*t,u*t)}s.needsUpdate=!0}const ch=new Map;function Fi(i,t,e,n){const s=ch.get(i);if(s)return s;const r=document.createElement("canvas");r.width=t,r.height=e;const o=r.getContext("2d");n(o);const a=new vc(r);return a.colorSpace=ke,a.wrapS=a.wrapT=Xn,a.anisotropy=4,a.needsUpdate=!0,ch.set(i,a),a}function Yr(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function da(i="grey"){return Fi("stoneBlocks_"+i,256,256,t=>{const e=Yr(i==="grey"?11:23);t.fillStyle=i==="grey"?"#7d7a76":"#9a8a74",t.fillRect(0,0,256,256);const n=5,s=256/n;for(let r=0;r<n;r++){let o=r%2?-40:0;for(;o<256;){const a=60+e()*50,l=i==="grey"?118+e()*40:140+e()*35,c=i==="grey"?[l,l-3,l-6]:[l,l-14,l-30];t.fillStyle=`rgb(${c[0]|0},${c[1]|0},${c[2]|0})`,t.fillRect(o+3,r*s+3,a-6,s-6);for(let u=0;u<40;u++){const h=o+4+e()*(a-8),d=r*s+4+e()*(s-8);t.fillStyle=e()>.5?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.10)",t.fillRect(h,d,2+e()*3,2+e()*3)}t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(o+3,r*s+3,a-6,3),t.fillStyle="rgba(0,0,0,0.18)",t.fillRect(o+3,r*s+s-6,a-6,3),o+=a}}})}function Tc(){return Fi("flagstone",256,256,i=>{const t=Yr(77);i.fillStyle="#5e5b57",i.fillRect(0,0,256,256);const e=4,n=256/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const o=140+t()*45;i.fillStyle=`rgb(${o|0},${o-6|0},${o-14|0})`,i.fillRect(s*n+3,r*n+3,n-6,n-6);for(let a=0;a<30;a++)i.fillStyle=t()>.5?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.09)",i.fillRect(s*n+4+t()*(n-8),r*n+4+t()*(n-8),3,3)}})}function Pi(i="light"){return Fi("planks_"+i,256,256,t=>{const e=Yr(i==="light"?5:9),n=8,s=256/n;for(let r=0;r<n;r++){const o=i==="light"?150+e()*40:95+e()*30;t.fillStyle=`rgb(${o|0},${o*.68|0},${o*.42|0})`,t.fillRect(0,r*s,256,s);for(let l=0;l<6;l++){t.strokeStyle="rgba(40,20,8,0.22)",t.lineWidth=1,t.beginPath();const c=r*s+3+e()*(s-6);t.moveTo(0,c),t.bezierCurveTo(80,c+e()*4-2,170,c+e()*4-2,256,c),t.stroke()}t.fillStyle="rgba(30,15,5,0.55)",t.fillRect(0,r*s,256,2);const a=e()*256|0;t.fillRect(a,r*s,2,s),t.fillStyle="rgba(30,15,5,0.6)",t.beginPath(),t.arc(a+8,r*s+s/2,1.6,0,Math.PI*2),t.fill()}})}function uh(){return Fi("logs",128,128,i=>{const t=Yr(31),e=3,n=128/e;for(let s=0;s<e;s++){const r=i.createLinearGradient(0,s*n,0,s*n+n),o=150+t()*25;r.addColorStop(0,`rgb(${o*.55|0},${o*.36|0},${o*.2|0})`),r.addColorStop(.3,`rgb(${o|0},${o*.66|0},${o*.4|0})`),r.addColorStop(.7,`rgb(${o*.85|0},${o*.56|0},${o*.33|0})`),r.addColorStop(1,`rgb(${o*.42|0},${o*.27|0},${o*.15|0})`),i.fillStyle=r,i.fillRect(0,s*n,128,n);for(let a=0;a<5;a++){i.strokeStyle="rgba(50,25,10,0.25)",i.beginPath();const l=s*n+6+t()*(n-12);i.moveTo(0,l),i.lineTo(128,l+t()*2-1),i.stroke()}}})}function nc(i="#a03030",t="#e0b040"){return Fi("rug_"+i+t,128,256,e=>{e.fillStyle=t,e.fillRect(0,0,128,256),e.fillStyle=i,e.fillRect(10,10,108,236),e.strokeStyle=t,e.lineWidth=3,e.strokeRect(20,20,88,216),e.fillStyle=t;for(let n=40;n<230;n+=32)e.beginPath(),e.moveTo(64,n-10),e.lineTo(78,n),e.lineTo(64,n+10),e.lineTo(50,n),e.closePath(),e.fill()})}function My(i="#b02030",t="#f0c040"){return Fi("banner_"+i+t,128,256,e=>{e.fillStyle=i,e.fillRect(0,0,128,256),e.fillStyle=t,e.fillRect(0,0,128,10),e.fillRect(0,0,8,256),e.fillRect(120,0,8,256),e.clearRect(0,236,128,20),e.fillStyle=i,e.beginPath(),e.moveTo(0,236),e.lineTo(64,216),e.lineTo(128,236),e.lineTo(128,256),e.lineTo(96,236),e.lineTo(64,256),e.lineTo(32,236),e.lineTo(0,256),e.closePath(),e.fill(),e.fillStyle=t,e.beginPath(),e.moveTo(40,150),e.quadraticCurveTo(30,100,60,80),e.lineTo(52,60),e.lineTo(66,74),e.lineTo(70,56),e.lineTo(76,76),e.quadraticCurveTo(100,84,98,110),e.lineTo(86,112),e.quadraticCurveTo(78,140,88,160),e.lineTo(40,150),e.closePath(),e.fill(),e.fillStyle=i,e.beginPath(),e.arc(78,92,4,0,Math.PI*2),e.fill(),e.fillStyle=t,e.beginPath(),e.moveTo(44,46),e.lineTo(50,30),e.lineTo(58,42),e.lineTo(64,26),e.lineTo(70,42),e.lineTo(78,30),e.lineTo(84,46),e.closePath(),e.fill()})}function Bd(){return Fi("hay",128,128,i=>{const t=Yr(55);i.fillStyle="#c8a850",i.fillRect(0,0,128,128);for(let e=0;e<500;e++){const n=150+t()*90;i.strokeStyle=`rgba(${n|0},${n*.82|0},${n*.35|0},0.8)`,i.beginPath();const s=t()*128,r=t()*128,o=t()*Math.PI;i.moveTo(s,r),i.lineTo(s+Math.cos(o)*10,r+Math.sin(o)*4),i.stroke()}})}function by(i,t="#8a5a30",e="#fff0c0"){return Fi("sign_"+i,256,96,n=>{n.fillStyle=t,n.fillRect(0,0,256,96);for(let r=0;r<4;r++)n.fillStyle="rgba(40,20,8,0.35)",n.fillRect(0,r*24,256,2);n.strokeStyle="#3a2210",n.lineWidth=6,n.strokeRect(3,3,250,90),n.fillStyle=e;let s=34;for(n.font=`bold ${s}px sans-serif`;s>16&&n.measureText(i).width>220;)s-=2,n.font=`bold ${s}px sans-serif`;n.textAlign="center",n.textBaseline="middle",n.fillStyle="rgba(30,14,4,0.55)",n.fillText(i,130,52,220),n.fillStyle=e,n.fillText(i,128,50,220)})}function Tt(i,t={}){const e=new oe({color:i,map:t.map??null,roughness:t.rough??.85,metalness:t.metal??0,side:t.side??Nn,transparent:t.transparent??!1,opacity:t.opacity??1});return t.emissive?(e.emissive=new Mt(t.emissive),e.emissiveIntensity=t.ei??1):t.glow&&(e.emissive=new Mt(i),e.emissiveIntensity=t.glow,t.map&&(e.emissiveMap=t.map)),t.fog===!1&&(e.fog=!1),e}function wi(i,t,e){let n=(i|0)*374761393+(t|0)*668265263+e*982451653;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)/4294967295}function hh(i){return i*i*(3-2*i)}function Hd(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=hh(i-n),o=hh(t-s),a=wi(n,s,e),l=wi(n+1,s,e),c=wi(n,s+1,e),u=wi(n+1,s+1,e),h=a+(l-a)*r,d=c+(u-c)*r;return h+(d-h)*o}function Bo(i,t,e,n=4){let s=.5,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=Hd(i*r,t*r,e+l*101)*s,a+=s,s*=.5,r*=2;return o/a}function dh(i,t,e,n,s){switch(i){case"meadow":return n*.35+s*.15;case"forest":return .4+n*1.2+s*.6;case"lake":{const r=Math.max(0,1-Math.abs(Bo(t*.007,e*.007,Si+9,3)-.42)*3.2);return-1.6*r*r+n*.3}case"rocky":return 2.5+n*4.5+s*2+Math.max(0,n-.55)*8;case"snow":return 2.4+n*1.8+s*.9+Math.max(0,n-.7)*1.5;case"desert":return .4+n*.9+Math.sin(t*.045)*.55+Math.cos(e*.038)*.4;case"dragon_lands":return 2.2+n*3+s*1.8+Math.max(0,s-.65)*4;default:return n}}const qt={x:0,z:-400,plateauR:40,rampR:80};let Ao=null;function Sy(i,t){return Gd(i,t,!1)}function Ac(){if(Ao!==null)return Ao;let i=-1/0;for(let t=0;t<=qt.plateauR;t+=5){const e=Math.max(1,Math.round(t*Math.PI*2/5));for(let n=0;n<e;n++){const s=n/e*Math.PI*2;i=Math.max(i,Sy(qt.x+Math.cos(s)*t,qt.z+Math.sin(s)*t))}}return Ao=Math.max(4,i+2.5),Ao}function wy(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Ey(i,t,e){const n=Math.hypot(i-qt.x,t-qt.z);if(n>=qt.rampR)return e;const s=Ac();if(n<=qt.plateauR)return s;const r=wy((n-qt.plateauR)/(qt.rampR-qt.plateauR));return s+(e-s)*r}function Sr(i,t,e=0){return Math.hypot(i-qt.x,t-qt.z)<qt.rampR*.75+e}function ue(i,t){return Gd(i,t,!0)}function Gd(i,t,e){const n=Math.hypot(i,t),s=Math.max(0,n-(Ln-25))/25,r=s*s*8;if(n<42){const u=Math.sin(i*.4)*.02+Math.cos(t*.35)*.015,h=Math.max(0,(n-28)/14),d=Bo(i*.03,t*.03,Si,3);return u*(1-h)+d*.35*h}const o=nn(i,t),a=Bo(i*.02,t*.02,Si,5),l=Bo(i*.05,t*.05,Si+7,3);let c=dh(o.primary,i,t,a,l);if(o.secondary&&o.blend>.01){const u=dh(o.secondary,i,t,a,l);c=c*(1-o.blend)+u*o.blend}return c+=Hd(i*.004,t*.004,Si+3)*2.2,e&&(c=Ey(i,t,c)),c+r}function Ty(i,t){return ue(i,t)}function Vd(i,t){if(Sr(i,t,20))return null;const e=nn(i,t);return e.primary!=="lake"&&e.secondary!=="lake"?null:ue(i,t)<-.15?-.05:null}const Wd=.55,Ay=.32,Cy=1.75,wr=[];function ir(i,t,e,n){const s=wr.findIndex(a=>a.id===i);s>=0&&wr.splice(s,1);let r=0;for(const a of n)r=Math.max(r,Math.hypot(Math.max(Math.abs(a.minX),Math.abs(a.maxX)),Math.max(Math.abs(a.minZ),Math.abs(a.maxZ))));const o={id:i,x:t.x,y:t.y,z:t.z,rotY:e,cos:Math.cos(e),sin:Math.sin(e),radius:r+1,boxes:n};return wr.push(o),o}function Xd(i,t,e){const n=t-i.x,s=e-i.z;return{lx:n*i.cos-s*i.sin,lz:n*i.sin+s*i.cos}}function zs(i,t,e=1/0){let n=ue(i,t);for(const s of wr){const r=i-s.x,o=t-s.z;if(r*r+o*o>s.radius*s.radius)continue;const{lx:a,lz:l}=Xd(s,i,t);for(const c of s.boxes){if(a<c.minX||a>c.maxX||l<c.minZ||l>c.maxZ)continue;const u=s.y+c.maxY;u<=e+Wd&&u>n&&(n=u)}}return n}function Ry(i,t,e,n=Ay,s=Cy){for(const r of wr){const o=i-r.x,a=t-r.z;if(o*o+a*a>(r.radius+n)*(r.radius+n))continue;const{lx:l,lz:c}=Xd(r,i,t);for(const u of r.boxes){if(l<u.minX-n||l>u.maxX+n||c<u.minZ-n||c>u.maxZ+n)continue;const h=r.y+u.maxY,d=r.y+u.minY;if(h<=e+Wd||d>=e+s)continue;const f=Math.max(u.minX,Math.min(l,u.maxX)),g=Math.max(u.minZ,Math.min(c,u.maxZ));if((l-f)*(l-f)+(c-g)*(c-g)<n*n)return!0}}return!1}const qe={x:-4.2,z:-2,ry:.35},hn={x:9,z:-7,ry:-.4},In={x:-21,z:-13,ry:1.8},qd=[{id:"cabin",label:"Home cabin",x:qe.x,z:qe.z,interiorRadius:16},{id:"stable",label:"Dragon stable",x:hn.x,z:hn.z,interiorRadius:16},{id:"watchtower",label:"Watchtower",x:In.x,z:In.z,interiorRadius:12}],Yd=[{id:"castle_gate",label:"Castle gate",x:qt.x,z:qt.z+27.7,interiorRadius:150},{id:"great_hall",label:"Great hall",x:qt.x,z:qt.z-11,interiorRadius:150}];function ic(i,t,e){const n=Math.cos(i.ry),s=Math.sin(i.ry);return{x:i.x+t*n+e*s,z:i.z-t*s+e*n}}function Py(){const i=zd(64);return{logs:Ae(Tt("#e0b890",{map:uh(),rough:.85}),1),logsIn:Ae(Tt("#f0caa0",{map:uh(),rough:.85,glow:.1}),1),planks:Ae(Tt("#d8b088",{map:Pi("light"),rough:.8}),.6),planksIn:Ae(Tt("#e8c098",{map:Pi("light"),rough:.8,glow:.1}),.6),darkWood:Ae(Tt("#8a5a36",{map:Pi("dark"),rough:.75}),.8),stone:Ae(Tt("#d0ccc4",{map:da("grey"),rough:.9}),1),roof:Ae(Tt("#d04a3c",{map:i,rough:.75}),.9),iron:Tt("#3a3a40",{rough:.45,metal:.6}),glassOut:Tt("#a8d0e8",{rough:.1,metal:.3,emissive:"#5a90b8",ei:.35}),glassIn:Tt("#e0f0ff",{emissive:"#c8e4ff",ei:.85,rough:.2}),flame:new Yn({color:"#ff8a2a"}),hay:Ae(Tt("#e0c060",{map:Bd(),rough:.95}),1.2)}}let rl=null;function fa(){return rl||(rl=Py()),rl}function $d(i,t,e){const n=new ia;return n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(0,t),n.closePath(),new Vr(n,{depth:e,bevelEnabled:!1})}function Cc(i,t,e){i.position.set(t.x,e,t.z),i.rotation.y=t.ry}const zn={hx:3.2,hz:2.6,t:.3,floor:.42,wallTop:2.95};function Ly(i){const t=fa(),e=new Di,{hx:n,hz:s,t:r,wallTop:o}=zn;e.boxMin(t.stone,-n-.2,0-.4,-s-.2,2*n+.4,.75,2*s+.4,{solid:!0}),e.boxMin(t.planksIn,-n+r,.35,-s+r,2*(n-r),.07,2*(s-r),{solid:!0});const a=o-.35;e.boxMin(t.logs,-n,.35,-s,2*n,a,r,{solid:!0}),e.boxMin(t.logs,-n,.35,-s+r,r,a,2*(s-r),{solid:!0}),e.boxMin(t.logs,n-r,.35,-s+r,r,a,2*(s-r),{solid:!0}),e.boxMin(t.logs,-n,.35,s-r,n-.65,a,r,{solid:!0}),e.boxMin(t.logs,.65,.35,s-r,n-.65,a,r,{solid:!0}),e.boxMin(t.logs,-.65,2.5,s-r,1.3,o-2.5,r,{solid:!0}),e.boxMin(t.logsIn,-n+r,.42,-s+r,2*(n-r),a-.07,.02),e.boxMin(t.logsIn,-n+r,.42,-s+r,.02,a-.07,2*(s-r)),e.boxMin(t.logsIn,n-r-.02,.42,-s+r,.02,a-.07,2*(s-r));for(const _ of[-1,1])e.box(t.darkWood,.14,2.15,.4,_*.68,.42+1.07,s-r/2);e.box(t.darkWood,1.5,.16,.4,0,2.55,s-r/2);for(const[_,y]of[[-n,-s],[n,-s],[-n,s],[n,s]])e.cyl(t.darkWood,.2,.22,o-.2,8,_,.2+(o-.2)/2,y);e.boxMin(t.planksIn,-n+r,2.78,-s+r,2*(n-r),.08,2*(s-r));for(const _ of[-1.3,0,1.3])e.box(t.darkWood,2*(n-r),.16,.18,0,2.7,_);for(const _ of[-1,1])e.add($d(2*s,1.6,r),t.logs,_<0?-n:n-r,o,0,{ry:Math.PI/2});const l=Math.atan2(1.6,s),c=Math.hypot(s,1.6)+.55;for(const _ of[-1,1])e.box(t.roof,2*n+.9,.16,c,0,o+.8+.1,_*(s/2+.18),{rx:_*l});e.box(t.darkWood,2*n+1,.18,.3,0,o+1.62,0),e.boxMin(t.stone,-.6,0,-s-.65,1.2,5.3,.65,{solid:!0}),e.box(t.stone,1.45,.2,.9,0,5.35,-s-.33);const u=(_,y,v,P)=>{const E=P==="x"?Math.PI/2:0,C=P==="x"?Math.sign(_):1;for(const w of[-1,1]){const S=w*(r/2+.02),M=P==="x"?_+S*C:_,R=P==="z"?v+S:v;e.box(t.darkWood,1,.1,.1,M,y+.45,R,{ry:E}),e.box(t.darkWood,1,.1,.1,M,y-.45,R,{ry:E}),e.box(t.darkWood,.08,.9,.1,M,y,R,{ry:E});for(const U of[-.46,.46]){const N=P==="z"?M+U:M,O=P==="x"?R+U:R;e.box(t.darkWood,.1,.9,.1,N,y,O,{ry:0})}e.box(t.darkWood,.9,.06,.08,M,y,R,{ry:E}),e.box(w*C>0||P==="z"&&w>0?t.glassOut:t.glassIn,.84,.82,.02,P==="x"?_+w*(r/2+.005)*C:_,y,P==="z"?v+w*(r/2+.005):v,{ry:E})}};u(-n+r/2,1.65,.9,"x"),u(n-r/2,1.65,-.3,"x"),u(1.9,1.65,s-r/2,"z");const h=Tt("#e04060",{rough:.8}),d=Tt("#f0d040",{rough:.8});e.box(t.darkWood,1,.25,.3,1.9,1.05,s+.15);for(let _=0;_<5;_++)e.sphere(_%2?h:d,.09,1.5+_*.2,1.25,s+.15,{ws:6,hs:5});e.boxMin(t.planks,-1.8,0,s,3.6,.3,1.4,{solid:!0}),e.boxMin(t.planks,-.8,0,s+1.4,1.6,.15,.4,{solid:!0});for(const _ of[-1.7,1.7])e.cyl(t.darkWood,.08,.09,2.5,6,_,1.55,s+1.3);e.box(t.roof,3.9,.12,1.7,0,2.86,s+.75,{rx:.25});for(let _=0;_<9;_++){const y=Math.floor(_/3);e.cyl(t.darkWood,.16,.16,1.1,7,n+.45,.17+y*.3,-1.2+_%3*.34+y%2*.17,{rz:Math.PI/2,ry:Math.PI/2})}const f=e.build("homeCabin"),g=new se;g.name="cabinDoor",g.position.set(-.6,.42,s-.05);const x=new Di;x.box(t.darkWood,1.18,2.05,.08,.59,1.03,0);for(const _ of[.4,1,1.6])x.box(t.iron,1.1,.07,.1,.59,_,0);x.sphere(Tt("#e0c050",{metal:.7,rough:.3}),.05,1,1,.07),g.add(x.build("cabinDoorLeaf")),f.add(g);const m=new se;m.name="chimneySmoke",m.position.set(1.7,.95,-s-.33);const p=new oe({color:"#e8e8ec",transparent:!0,opacity:.55,roughness:1,depthWrite:!1});for(let _=0;_<4;_++){const y=new mt(new ne(.24,8,6),p.clone());y.position.set(-1.7,4.7+_*.35,0),m.add(y)}return f.add(m),f.userData.pose=qe,Cc(f,qe,i),ir("cabin",{x:qe.x,y:i,z:qe.z},qe.ry,e.colliders),f}function Iy(i){const t=i.getObjectByName("cabin-interior");if(t)return t;const e=fa(),n=new Di,s=zn.floor,r=Tt("#c03838",{map:nc("#c03838","#f4e8d0"),rough:.9,glow:.1}),o=Tt("#f4ecdc",{rough:.9,glow:.12}),a=Tt("#2a2420",{rough:1}),l=Tt("#ff6a20",{emissive:"#ff4a10",ei:1.6}),c=Tt("#ffffff",{map:nc("#2c5aa0","#f0c040"),rough:.95,glow:.12}),u=Tt("#e8c050",{metal:.7,rough:.3,emissive:"#604810",ei:.3}),h=new Yn({color:"#ffa040",transparent:!0,opacity:.25,depthWrite:!1,blending:Ho}),d=-2.6+zn.t;n.boxMin(e.stone,-.95,s,d,.42,1.25,.55,{solid:!0}),n.boxMin(e.stone,.53,s,d,.42,1.25,.55,{solid:!0}),n.boxMin(e.stone,-.95,s+1.25,d,1.9,.4,.6),n.boxMin(e.darkWood,-1.05,s+1.65,d,2.1,.1,.7),n.boxMin(e.stone,-.7,s+1.75,d,1.4,2.78-s-1.75,.38),n.boxMin(a,-.53,s,d,1.06,1.25,.06),n.boxMin(e.stone,-1.1,s,d+.55,2.2,.06,.5),n.solidBox(-1,s,d,1,s+1.6,d+.6);for(const[C,w]of[[-.15,.25],[.15,-.25]])n.cyl(e.darkWood,.08,.08,.8,7,C,s+.12,d+.3,{rz:Math.PI/2+w*.2,ry:w});n.cone(e.flame,.2,.55,7,0,s+.45,d+.3),n.cone(e.flame,.13,.4,6,-.2,s+.38,d+.32),n.cone(e.flame,.13,.38,6,.2,s+.37,d+.28),n.box(l,.7,.05,.3,0,s+.06,d+.3),n.sphere(h,.6,0,s+.45,d+.4,{ws:8,hs:6}),n.cyl(o,.04,.04,.22,6,-.75,s+1.86,d+.3),n.cone(e.flame,.035,.09,5,-.75,s+2.02,d+.3),n.cyl(Tt("#5a7aa0",{rough:.6}),.09,.07,.2,8,.6,s+1.85,d+.3);const f=-3.2+zn.t;n.boxMin(e.darkWood,f,s,d,1.15,.38,2.1,{solid:!0}),n.boxMin(o,f+.05,s+.38,d+.05,1.05,.16,2),n.boxMin(r,f+.02,s+.5,d+.65,1.11,.07,1.43),n.box(o,.75,.14,.4,f+.57,s+.63,d+.3),n.boxMin(e.darkWood,f,s,d,1.15,1.05,.08),n.boxMin(e.darkWood,f,s,d+2.05,1.15,.7,.08),n.add(new ve(2,1.4),c,.1,s+.012,-.15,{rx:-Math.PI/2});const g=1.75,x=.75;n.box(e.darkWood,1.25,.07,.85,g,s+.75,x);for(const[C,w]of[[-.55,-.35],[.55,-.35],[-.55,.35],[.55,.35]])n.box(e.darkWood,.07,.72,.07,g+C,s+.36,x+w);n.solidBox(g-.62,s,x-.42,g+.62,s+.8,x+.42);for(const C of[-1,1]){const w=x+C*.75;n.box(e.darkWood,.48,.06,.45,g,s+.46,w);for(const[S,M]of[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]])n.box(e.darkWood,.05,.45,.05,g+S,s+.22,w+M);n.box(e.darkWood,.48,.55,.05,g,s+.78,w+C*.2),n.solidBox(g-.25,s,w-.24,g+.25,s+1.05,w+.24)}n.cyl(Tt("#e8e0d0",{rough:.5}),.17,.12,.08,10,g-.2,s+.83,x),n.sphere(Tt("#e05030",{rough:.6}),.07,g-.24,s+.9,x-.03),n.sphere(Tt("#70c040",{rough:.6}),.065,g-.12,s+.9,x+.05),n.cyl(Tt("#9a6a40",{rough:.6}),.06,.05,.14,8,g+.3,s+.86,x+.15),n.cyl(o,.035,.035,.18,6,g+.35,s+.88,x-.2),n.cone(e.flame,.03,.08,5,g+.35,s+1.01,x-.2);const m=zn.hx-zn.t-.55,p=d+.4;n.box(e.darkWood,1,.5,.6,m,s+.25,p,{solid:!0}),n.cyl(e.darkWood,.3,.3,1,10,m,s+.5,p,{rz:Math.PI/2});for(const C of[-.35,.35])n.box(e.iron,.07,.82,.64,m+C,s+.42,p);n.box(u,.14,.16,.05,m,s+.5,p+.32);const _=zn.hx-zn.t-.14;n.box(e.darkWood,.26,.05,1.3,_,s+1.55,-1.5);const y=["#a03030","#3060a0","#40904a","#c09030","#7a3a90"];for(let C=0;C<5;C++)n.box(Tt(y[C],{rough:.7}),.2,.26+C%2*.05,.08,_,s+1.71,-2+C*.1);n.cyl(Tt("#c8a070",{rough:.5}),.07,.07,.18,8,_,s+1.67,-1.2),n.cyl(Tt("#80a0c0",{rough:.3}),.06,.06,.2,8,_,s+1.68,-1);{n.cyl(e.iron,.01,.01,.3,4,-.6,2.3+.3,-.9),n.cyl(e.iron,.02,.1,.07,8,-.6,2.3+.14,-.9),n.cyl(e.iron,.09,.09,.03,8,-.6,2.3-.12,-.9);for(const[M,R]of[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]])n.box(e.iron,.015,.24,.015,-.6+M,2.3,-.9+R);n.cyl(Tt("#ffe0a0",{emissive:"#ffb050",ei:1.1,rough:.2}),.065,.065,.2,8,-.6,2.3,-.9)}const v=new vc((()=>{const C=document.createElement("canvas");C.width=64,C.height=48;const w=C.getContext("2d");return w.fillStyle="#a8d4f5",w.fillRect(0,0,64,48),w.fillStyle="#5aa040",w.fillRect(0,34,64,14),w.fillStyle="#d03020",w.beginPath(),w.ellipse(30,26,12,7,0,0,Math.PI*2),w.fill(),w.beginPath(),w.moveTo(36,22),w.lineTo(52,8),w.lineTo(44,24),w.fill(),w.beginPath(),w.moveTo(24,22),w.lineTo(14,6),w.lineTo(30,20),w.fill(),w.beginPath(),w.arc(44,20,4,0,Math.PI*2),w.fill(),C})());v.colorSpace=ke,n.box(e.darkWood,.06,.62,.8,f+.04,1.85,d+1),n.add(new ve(.7,.52),Tt("#ffffff",{map:v,glow:.15}),f+.08,1.85,d+1,{ry:Math.PI/2});const P=n.build("cabin-interior",{castShadow:!1,receiveShadow:!0});P.traverse(C=>{const w=C;w.isMesh&&w.material===h&&(w.renderOrder=5)}),i.add(P);const E=i.userData.pose;return ir("cabinInterior",{x:E.x,y:i.position.y,z:E.z},E.ry,n.colliders),P}function Dy(i){const t=ic(qe,0,-2.6+zn.t+.9);return new I(t.x,i+zn.floor+1.1,t.z)}function Ny(i){const e={...fa(),darkWood:Ae(Tt("#b08058",{map:Pi("dark"),rough:.75,glow:.14}),.8),planks:Ae(Tt("#e0bc90",{map:Pi("light"),rough:.8,glow:.12}),.6),hay:Ae(Tt("#f0d070",{map:Bd(),rough:.95,glow:.18}),1.2)},n=new Di,s=5,r=3,o=2.9;n.boxMin(e.planks,-s,-.3,-r,2*s,.42,2*r,{solid:!0}),n.boxMin(e.darkWood,-s,.12,-r,2*s,o,.2,{solid:!0}),n.boxMin(e.darkWood,-s,.12,-r+.2,.2,o,2*r-.2,{solid:!0}),n.boxMin(e.darkWood,s-.2,.12,-r+.2,.2,o,2*r-.2,{solid:!0});for(const f of[-1,1])n.add($d(2*r,1.4,.2),e.darkWood,f<0?-s:s-.2,o+.12,0,{ry:Math.PI/2});const a=Math.atan2(1.4,r),l=Math.hypot(r,1.4)+.7;for(const f of[-1,1])n.box(e.roof,2*s+.8,.16,l,0,o+.12+.7+.1,f*(r/2+.22),{rx:f*a});n.box(e.darkWood,2*s+.9,.18,.28,0,o+1.55,0);for(const f of[-s+.1,-1.67,1.67,s-.1])n.cyl(e.darkWood,.13,.15,o,8,f,.12+o/2,r-.15,{solid:!0});n.box(e.darkWood,2*s,.28,.28,0,o+.02,r-.15);for(const f of[-1.67,1.67])n.boxMin(e.darkWood,f-.08,.12,-r+.2,.16,1.45,4.2,{solid:!0}),n.box(e.darkWood,.2,.12,4.3,f,1.62,-r+.2+2.1);const c=Tt("#ffffff",{map:by("DRAGON STABLE"),rough:.7,glow:.15});n.box(e.darkWood,3.5,1,.1,0,o+.75,r+.02),n.add(new ve(3.3,.9),c,0,o+.75,r+.08);for(const f of[-1.5,1.5])n.cyl(e.iron,.02,.02,.5,4,f,o+.35,r+.02);const u=Tt("#ffe0a0",{emissive:"#ffb050",ei:1.2,rough:.2});for(const f of[-s+.1,s-.1]){const g=r+.22;n.box(e.iron,.04,.04,.26,f,2.5,r+.08),n.cyl(e.iron,.02,.1,.07,8,f,2.42,g),n.cyl(e.iron,.09,.09,.03,8,f,2.15,g);for(const[x,m]of[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]])n.box(e.iron,.015,.24,.015,f+x,2.28,g+m);n.cyl(u,.065,.065,.2,8,f,2.28,g)}const h=Tt("#5ab0e0",{rough:.15,metal:.2,emissive:"#2a6090",ei:.25});for(let f=0;f<3;f++){const g=-3.33+f*3.33;n.box(e.darkWood,1.7,.55,.6,g,.12+.275,-r+.55,{solid:!0}),n.box(h,1.5,.04,.45,g,.12+.5,-r+.55);for(let x=-3;x<=3;x++)n.box(e.darkWood,.05,.8,.05,g+x*.22,1.7,-r+.42,{rx:-.35});n.box(e.darkWood,1.6,.08,.5,g,1.32,-r+.42),n.sphere(e.hay,.62,g,1.62,-r+.42,{sy:.55}),n.sphere(e.hay,1.15,g+.2,.12,.3,{sy:.12,ws:12,hs:6})}for(const[f,g,x,m]of[[s+.75,.3,-1.6,0],[s+.75,.3,-.3,0],[s+.75,.9,-.95,.1],[-s-.75,.3,1.2,.2]])n.box(e.hay,1,.6,1.2,f,g,x,{ry:m}),n.box(Tt("#8a6a30",{rough:.9}),1.02,.04,1.22,f,g+.1,x,{ry:m});n.solidBox(s+.25,0,-2.25,s+1.25,1.2,.35),n.cyl(e.darkWood,.25,.2,.4,10,3.9,.32,2.3),n.cyl(h,.22,.22,.03,10,3.9,.5,2.3),n.cyl(e.darkWood,.03,.03,1.8,5,-1.95,1,r-.1,{rz:.25});for(const f of[-.08,0,.08])n.cyl(e.iron,.012,.012,.35,4,-2.18+f,1.95,r-.1,{rz:.25});const d=n.build("dragonStable");for(let f=0;f<3;f++){const g=new Re;g.name=`stableRest${f}`,g.position.set(-3.33+f*3.33,.12,.6),g.userData.restSlot=!0,d.add(g)}return Cc(d,hn,i),ir("stable",{x:hn.x,y:i,z:hn.z},hn.ry,n.colliders),d}const sc={core:2,outer:3.3,deck:9.4,steps:8};function Uy(){const i=(sc.core+sc.outer)/2;return[{x:-i,z:i+.8},{x:-i,z:i},{x:i,z:i},{x:i,z:-i},{x:-i,z:-i},{x:-i,z:i},{x:0,z:i},{x:.6,z:.2}]}function Fy(i){const t=fa(),e=new Di,{core:n,outer:s,deck:r,steps:o}=sc,a=r/(o*4),l=2*n/o,c=Ae(Tt("#c8c2b8",{map:da("warm"),rough:.9}),.9);e.boxMin(c,-n,-.5,-n,2*n,r+.5,2*n,{solid:!0}),e.boxMin(t.stone,-n-.15,-.5,-n-.15,2*n+.3,.9,2*n+.3);for(const[m,p,_]of[[0,n+.01,0],[n+.01,0,Math.PI/2],[0,-n-.01,0],[-n-.01,0,Math.PI/2]])for(const y of[3.2,6.4])e.box(t.iron,.3,1.1,.04,m,y,p,{ry:_});const u=s-n;for(let m=1;m<=o;m++){e.boxMin(t.stone,-n+(m-1)*l,-.3,n,l,m*a+.3,u,{solid:!0}),e.boxMin(t.stone,n,-.3,n-m*l,u,(o+m)*a+.3,l,{solid:!0}),e.boxMin(t.stone,n-m*l,-.3,-s,l,(2*o+m)*a+.3,u,{solid:!0});const p=(3*o+m)*a;e.boxMin(t.planks,-s,p-.14,-n+(m-1)*l,u,.14,l,{solid:!0})}e.boxMin(t.stone,n,-.3,n,u,o*a+.3,u,{solid:!0}),e.boxMin(t.stone,n,-.3,-s,u,2*o*a+.3,u,{solid:!0}),e.boxMin(t.stone,-s,-.3,-s,u,3*o*a+.3,u,{solid:!0});for(const m of[-1.5,0,1.5])e.cyl(t.darkWood,.1,.12,8.4,6,-s+.15,4,m);e.box(t.darkWood,.12,.3,4.6,-s+.08,8.25,0,{rx:-Math.atan2(2.35,4)});const h=s+.2;e.boxMin(t.planks,-n,r-.15,n,n+h,.15,h-n,{solid:!0}),e.boxMin(t.planks,n,r-.15,-n,h-n,.15,2*n,{solid:!0}),e.boxMin(t.planks,-h,r-.15,-h,2*h,.15,h-n,{solid:!0}),e.boxMin(t.planks,-h,r-.15,n,h-n,.15,h-n,{solid:!0}),e.boxMin(t.planks,-n,r-.02,-n,2*n,.04,2*n);const d=r+1.1,f=(m,p,_,y,v,P)=>{const E=Math.hypot(_-m,y-p),C=Math.max(1,Math.round(E/.9));for(let M=0;M<=C;M++){const R=M/C,U=v+(P-v)*R;e.box(t.darkWood,.09,1.1,.09,m+(_-m)*R,U+.55,p+(y-p)*R)}const w=Math.atan2(_-m,y-p),S=Math.atan2(P-v,E);for(const M of[.55,1.08])e.box(t.darkWood,.08,.08,Math.hypot(E,P-v),(m+_)/2,(v+P)/2+M,(p+y)/2,{ry:w,rx:-S})},g=s+.1;f(-n,g,n,g,0,o*a),f(g,n,g,-n,o*a,2*o*a),f(n,-g,-n,-g,2*o*a,3*o*a),f(-g,-n,-g,n,3*o*a,r),f(-h+.05,h-.05,h-.05,h-.05,r,r),f(h-.05,h-.05,h-.05,-h+.05,r,r),f(h-.05,-h+.05,-h+.05,-h+.05,r,r),f(-h+.05,-h+.05,-h+.05,h-.05,r,r),f(-n-.05,-n,-n-.05,n-.15,r,r),e.solidBox(-n,0,s,s+.3,d+1.2,s+.3),e.solidBox(s,0,-s-.3,s+.3,d+1.2,s+.3),e.solidBox(-s-.3,0,-s-.3,s+.3,d+1.2,-s),e.solidBox(-s-.3,5.5,-s-.3,-s,d+1.2,n),e.solidBox(-s-.3,7.6,s,-n,d+1.2,s+.3),e.solidBox(-s-.3,7.6,n,-s,d+1.2,s+.3),e.solidBox(-n-.12,r,-n,-n+.02,d,n-.2);for(const[m,p]of[[-h+.1,-h+.1],[h-.1,-h+.1],[-h+.1,h-.1],[h-.1,h-.1]])e.cyl(t.darkWood,.12,.12,2.8,6,m,r+1.4,p);e.cone(t.roof,5.1,2.1,4,0,r+2.8+1.05,0,{ry:Math.PI/4}),e.cyl(t.iron,.05,.05,1.6,5,0,r+2.8+2.1+.6,0),e.add(new ve(1.2,.7),Tt("#3a7fd4",{side:Be,rough:.6}),.62,r+2.8+2.1+1.05,0);{const m=h-.75,p=-h+.75;for(let v=0;v<3;v++){const P=v/3*Math.PI*2+.3;e.cyl(t.darkWood,.022,.03,1.05,5,m+Math.cos(P)*.18,r+.5,p+Math.sin(P)*.18,{rx:Math.sin(P)*.2,rz:-Math.cos(P)*.2})}const _=Tt("#d0a048",{metal:.75,rough:.28}),y=-(Math.PI/2-.25);e.cyl(_,.055,.035,.62,10,m,r+1.1,p-.05,{rx:y}),e.cyl(t.iron,.065,.065,.05,10,m,r+1.18,p-.36,{rx:y}),e.cyl(t.iron,.028,.028,.1,8,m,r+1.02,p+.27,{rx:y})}e.box(t.darkWood,1.6,.08,.4,-.8,r+.45,-2.6),e.cyl(t.darkWood,.05,.04,.5,5,-n-.1,2,n+.4),e.cone(t.flame,.1,.3,6,-n-.1,2.4,n+.4);const x=e.build("watchtower");return Cc(x,In,i),ir("watchtower",{x:In.x,y:i,z:In.z},In.ry,e.colliders),x}function Oy(i,t,e){const n=t>.5?-1.6:0,s=i.rotation.y;i.rotation.y=s+(n-s)*Math.min(1,e*6)}const zy=230,ky=6.8;function By(i,t,e){let n=null,s=1/0;for(const l of e){const c=Math.hypot(t.x-l.x,t.z-l.z);c<s&&(s=c,n=l)}const o=Math.hypot(t.x,t.z)<zy;if(i.userData.campOn!==o){i.userData.campOn=o;for(const l of i.children)l.name!=="castleLandmark"&&l.name!=="farTerrain"&&(l.visible=o)}const a=i.getObjectByName("homeCabin");if(a)if(Math.hypot(t.x-qe.x,t.z-qe.z)<ky)Iy(a).visible=!0;else{const c=a.getObjectByName("cabin-interior");c&&(c.visible=!1)}return s<35?n:null}function Hy(i){const t=i;return[i.type,t.color?.getHexString?.()??"",t.emissive?.getHexString?.()??"",t.emissiveIntensity??"",t.map?.uuid??"",t.normalMap?.uuid??"",t.roughness??"",t.metalness??"",i.transparent?`t${i.opacity}`:"o",i.side,i.depthWrite,t.vertexColors?"vc":"",t.flatShading?"flat":"",i.userData?.softFog??""].join("|")}function fh(i,t,e="mergedStatic",n={}){i.updateMatrixWorld(!0);const s=new Ot().copy(i.matrixWorld).invert(),r=new Map,o=[];for(const l of[...i.children]){if(!t(l))continue;const c=u=>{if(n.skip?.(u))return;for(const p of u.children)c(p);const h=u;if(!h.isMesh||h.isInstancedMesh||Array.isArray(h.material)||!h.visible)return;const d=h.geometry;let f=d.index?d.toNonIndexed():d.clone();for(const p of Object.keys(f.attributes))p!=="position"&&p!=="normal"&&p!=="uv"&&p!=="color"&&f.deleteAttribute(p);f.attributes.normal||f.computeVertexNormals(),f.attributes.uv||f.setAttribute("uv",new Te(new Float32Array(f.attributes.position.count*2),2));const g=!!f.attributes.color;f.applyMatrix4(new Ot().multiplyMatrices(s,h.matrixWorld));const x=Hy(h.material)+(g?"|C":"|N")+(h.castShadow?"|cs":"")+(h.receiveShadow?"|rs":"");let m=r.get(x);m||r.set(x,m={mat:h.material,cast:h.castShadow,recv:h.receiveShadow,geos:[]}),m.geos.push(f),o.push(h)};c(l)}for(const l of o)l.parent?.remove(l);if(n.removeEmpty!==!1)for(const l of[...i.children]){if(!t(l))continue;let c=0;l.traverse(u=>{(u.isMesh||u.isLight||u.isPoints)&&c++}),c===0&&i.remove(l)}let a=0;for(const l of r.values()){const c=pn(l.geos,!1);if(!c)continue;c.computeBoundingSphere();const u=new mt(c,l.mat);u.name=`${e}_${a++}`,u.castShadow=l.cast,u.receiveShadow=l.recv,u.userData.mergedStatic=!0,i.add(u)}return o.length-a}function Gy(i){const t=i;return!(!t.isMeshStandardMaterial||t.map||t.normalMap||t.alphaMap||t.emissiveMap||i.transparent||i.alphaTest>0||t.vertexColors||t.emissive&&(t.emissive.r+t.emissive.g+t.emissive.b)*t.emissiveIntensity>.001)}const ph=new Map;function Vy(i,t,e,n){const s=`${i}|${t}|${e}|${n}`;let r=ph.get(s);return r||ph.set(s,r=new oe({color:"#ffffff",vertexColors:!0,roughness:i,metalness:t,flatShading:e,side:n})),r}function jd(i,t,e="vcBaked"){i.updateMatrixWorld(!0);const n=new Ot().copy(i.matrixWorld).invert(),s=new Map,r=[],o=l=>{if(l!==i&&t(l))return;const c=l;if(c.isMesh&&!c.isInstancedMesh&&!Array.isArray(c.material)&&c.visible&&Gy(c.material)){const u=c.material,h=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();for(const y of Object.keys(h.attributes))y!=="position"&&y!=="normal"&&h.deleteAttribute(y);h.attributes.normal||h.computeVertexNormals(),h.applyMatrix4(new Ot().multiplyMatrices(n,c.matrixWorld));const d=h.attributes.position.count,f=new Float32Array(d*3);for(let y=0;y<d;y++)f[y*3]=u.color.r,f[y*3+1]=u.color.g,f[y*3+2]=u.color.b;h.setAttribute("color",new Te(f,3));const g=u.roughness>=.6?.85:.45,x=u.metalness>=.5?.7:0,m=u.side===Nn?Nn:Be,p=`${g}|${x}|${u.flatShading}|${m}`;let _=s.get(p);_||s.set(p,_={mat:Vy(g,x,u.flatShading,m),cast:!1,recv:!1,geos:[]}),_.cast||=c.castShadow,_.recv||=c.receiveShadow,_.geos.push(h),r.push(c)}for(const u of[...l.children])o(u)};if(o(i),r.length<2)return 0;for(const l of r)l.parent?.remove(l);let a=0;for(const l of s.values()){const c=pn(l.geos,!1);if(!c)continue;c.computeBoundingSphere();const u=new mt(c,l.mat);u.name=`${e}_${a++}`,u.castShadow=l.cast,u.receiveShadow=l.recv,i.add(u)}return r.length-a}function Zd(i,t,e,n=.8){i.updateMatrixWorld(!0);const s=new Ot().copy(i.matrixWorld).invert(),r=new Map,o=new Map;i.traverse(c=>{const u=c;if(!u.isMesh||Array.isArray(u.material)||!u.visible)return;const h=u.material;if(!h.color)return;const d=u,f=[],g=new Ot().multiplyMatrices(s,u.matrixWorld);if(d.isInstancedMesh){const p=new Ot;for(let _=0;_<d.count;_++)d.getMatrixAt(_,p),f.push(g.clone().multiply(p))}else f.push(g);const x=h.color.clone().multiplyScalar(h.map?n:1);h.emissive&&h.emissiveIntensity&&x.add(h.emissive.clone().multiplyScalar(Math.min(1,h.emissiveIntensity)*.6));const m=`${u.material.transparent?"t"+u.material.opacity:"o"}|${u.material.side}`;o.has(m)||o.set(m,{side:u.material.side,transparent:u.material.transparent,opacity:u.material.opacity});for(const p of f){const _=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const w of Object.keys(_.attributes))w!=="position"&&w!=="normal"&&_.deleteAttribute(w);_.attributes.normal||_.computeVertexNormals();const y=!!u.geometry.attributes.color&&h.vertexColors;_.applyMatrix4(p);const v=_.attributes.position.count,P=new Float32Array(v*3),E=y?(u.geometry.index?u.geometry.toNonIndexed():u.geometry).attributes.color:null;for(let w=0;w<v;w++){const S=E?E.getX(w)*x.r:x.r,M=E?E.getY(w)*x.g:x.g,R=E?E.getZ(w)*x.b:x.b;P[w*3]=S,P[w*3+1]=M,P[w*3+2]=R}_.setAttribute("color",new Te(P,3));const C=r.get(m)??[];C.push(_),r.set(m,C)}});const a=new se;a.name=t;let l=0;for(const[c,u]of r){const h=pn(u,!1);if(!h)continue;h.computeBoundingSphere();const d=o.get(c),f=new oe({color:"#ffffff",vertexColors:!0,roughness:.85,metalness:0,side:Be,transparent:d.transparent,opacity:d.opacity});e?.(f);const g=new mt(h,f);g.name=`${t}_${l++}`,a.add(g)}return a}function mh(i){return i==="high"?{maxDrawCalls:150,maxVisibleTris:14e4,maxLoadedChunks:72,loadRadiusChunks:5,farRadiusChunks:8}:i==="medium"?{maxDrawCalls:110,maxVisibleTris:9e4,maxLoadedChunks:56,loadRadiusChunks:4,farRadiusChunks:7}:{maxDrawCalls:70,maxVisibleTris:5e4,maxLoadedChunks:40,loadRadiusChunks:3,farRadiusChunks:5}}function Co(i,t){return`${i},${t}`}function Wy(i){return i===0?16:i===1?8:4}const Xy=new Mt("#5f9a3c");function Jd(i,t,e){const n=Math.hypot(i-qt.x,t-qt.z);if(n>100)return;const s=1-Rr.smoothstep(n,45,100),r=Math.sin(i*.21)*Math.cos(t*.17)*.08;e.lerp(Xy,Math.min(1,s*.85+r))}function Xo(i){switch(i){case"meadow":return new Mt("#78c050");case"forest":return new Mt("#2a6a38");case"lake":return new Mt("#4a7a5a");case"rocky":return new Mt("#8a8680");case"snow":return new Mt("#f4f8ff");case"desert":return new Mt("#e8d4a8");case"dragon_lands":return new Mt("#7a3c24");default:return new Mt("#6db84a")}}const Nr=38;function gh(i,t,e){const n=new se;n.name=`chunk_${i}_${t}`;const s=Wy(e),r=i*te,o=t*te,a=Math.hypot(r+te/2,o+te/2);if(a<Nr-4)return{group:n,tris:0,draws:0};const l=new ve(te,te,s,s),c=l.attributes.position,u=new Float32Array(c.count*3),h=l.attributes.uv;let d=1/0;for(let E=0;E<c.count;E++){const C=c.getX(E),w=c.getY(E),S=r+te/2+C,M=o+te/2+w,R=ue(S,M);c.setZ(E,R),R<d&&(d=R);const U=nn(S,M),N=Xo(U.primary);U.secondary&&U.blend>.05&&N.lerp(Xo(U.secondary),U.blend),Jd(S,M,N);const O=.85+Math.min(.15,Math.max(0,R)*.03);if(u[E*3]=N.r*O,u[E*3+1]=N.g*O,u[E*3+2]=N.b*O,h){const Y=wi(i,t,Si);h.setXY(E,S*.12+Y,M*.12+Y*1.3)}}l.setAttribute("color",new Te(u,3)),l.computeVertexNormals();const f=mn(),g=nn(r+16,o+16),x=g.primary;let m=null;const p=Math.hypot(r+16-qt.x,o+16-qt.z)<110;x==="meadow"||x==="forest"||x==="lake"||p?(m=Fd(128),m.wrapS=m.wrapT=Xn,m.repeat.set(2,2)):x==="rocky"?(m=qr(128),m.wrapS=m.wrapT=Xn,m.repeat.set(2,2)):x==="desert"&&(m=Od(128),m.wrapS=m.wrapT=Xn,m.repeat.set(1.5,1.5));const _=new oe({map:m??void 0,vertexColors:!0,roughness:x==="snow"?.45:x==="desert"?.95:x==="dragon_lands"?.7:Ri.grass,metalness:x==="dragon_lands"?.2:0,color:"#ffffff"});e===0&&f?.grassNormal&&(x==="meadow"||x==="forest"||p)&&(_.normalMap=f.grassNormal,_.normalScale=new at(Ns.grass*.6,Ns.grass*.6)),x==="snow"&&(_.emissive=new Mt("#a0c0e0"),_.emissiveIntensity=.12),x==="dragon_lands"&&(_.emissive=new Mt("#401810"),_.emissiveIntensity=.08,_.color=new Mt("#9a5530"),_.metalness=.05),x==="desert"&&(_.color=new Mt("#fff2d0"),_.map=null,_.emissive=new Mt("#c8a060"),_.emissiveIntensity=.06);const y=new mt(l,_);y.rotation.x=-Math.PI/2,y.position.set(r+te/2,0,o+te/2),y.receiveShadow=e===0,y.castShadow=!1,n.add(y);let v=s*s*2,P=1;if(e===0&&(x==="lake"||g.secondary==="lake")&&d<-.05&&!Sr(r+16,o+16,30)){const E=new mt(new ve(te,te,1,1),new oe({color:"#3a8ac0",roughness:.12,metalness:.3,transparent:!0,opacity:.85,emissive:new Mt("#1a4a70"),emissiveIntensity:.12}));E.rotation.x=-Math.PI/2,E.position.set(r+te/2,-.05,o+te/2),E.name="lakeWater",n.add(E),P++,v+=2}if(e===0&&a>Nr){const{pTris:E,pDraws:C}=qy(n,i,t,x);v+=E,P+=C}return{group:n,tris:v,draws:P}}function An(i,t,e){let n=ue(i,t),s=n;for(let r=0;r<6;r++){const o=r/6*Math.PI*2+.3,a=ue(i+Math.cos(o)*e,t+Math.sin(o)*e);a<n&&(n=a),a>s&&(s=a)}return{min:n,max:s}}function ol(i,t,e,n){if(n<.12){const s=nn(i,t);if(s.primary==="lake"||s.secondary==="lake")return!0}for(let s=0;s<4;s++){const r=s/4*Math.PI*2;if(Vd(i+Math.cos(r)*e,t+Math.sin(r)*e)!==null)return!0}return n<-.04}const xh=new Map;function Kd(i){const t=xh.get(i);if(t)return t;const e=i==="forest"?"#24572c":i==="snow"?"#2f5a3e":i==="rocky"?"#46703f":"#3b7a3a",n=i==="forest"?"#3f7d3a":i==="snow"?"#f4f8ff":i==="rocky"?"#6a8f55":"#5fa04c",s=[],r=(f,g)=>{const x=f.index?f.toNonIndexed():f,m=x.attributes.position,p=new Float32Array(m.count*3);for(let _=0;_<m.count;_++){const y=g(m.getY(_),_);p[_*3]=y.r,p[_*3+1]=y.g,p[_*3+2]=y.b}return x.setAttribute("color",new Te(p,3)),x.deleteAttribute("uv"),x},o=new Pe(.11,.19,1.1,7);o.translate(0,.55,0);const a=new Mt("#6a4428"),l=new Mt("#4a2e1a");s.push(r(o,(f,g)=>(g%3===0?l:a).clone().lerp(l,1-f)));const c=[[1,1.35,.7],[.78,1.15,1.35],[.52,1,1.95]],u=new Mt(e),h=new Mt(n);c.forEach(([f,g,x],m)=>{const p=new Ui(f,g,8,1,!1);p.rotateY(m*.4),p.translate(0,x+g/2,0),s.push(r(p,y=>{const v=Math.max(0,Math.min(1,(y-x)/g));return i==="snow"?u.clone().lerp(h,v>.35?.85:.15):u.clone().multiplyScalar(.75+.25*v).lerp(h,v*.6)}));const _=new Dn(f*.98,8);_.rotateX(Math.PI/2),_.rotateY(m*.4),_.translate(0,x+.01,0),s.push(r(_,()=>u.clone().multiplyScalar(.45)))});const d=pn(s,!1);return d.computeVertexNormals(),xh.set(i,d),d}function qy(i,t,e,n){const s=t*te,r=e*te,o=[],a=[],l=[],c=n==="forest"?48:n==="meadow"?10:n==="rocky"?16:n==="dragon_lands"?36:n==="desert"?10:n==="snow"?14:8;for(let f=0;f<c;f++){const g=wi(t*50+f,e*50+f,Si+20),x=wi(t*50+f,e*50+f,Si+21),m=s+g*te,p=r+x*te;if(Math.hypot(m,p)<Nr||Sr(m,p))continue;const _=An(m,p,.9);if(ol(m,p,1,_.min))continue;const y=_.min-.04;if(n==="rocky"||n==="snow"||n!=="desert"&&n!=="dragon_lands"&&n!=="lake"&&f%2===0){const v=.55+g*.9,P=m+2.6,E=p-1.9,C=An(P,E,.45*v);!Sr(P,E)&&!ol(P,E,.6*v,C.min)&&C.max-C.min<.9*v&&a.push({x:P,y:C.min-.18*v,z:E,sy:v,ry:g*6})}if(n==="dragon_lands"&&nn(m,p).primary==="dragon_lands"){const v=.5+g*.7;a.push({x:m,y:y-.16*v,z:p,sy:v,ry:g*6});const P=An(m+.8,p+.6,.4);l.push({x:m+.8,y:P.min-.05,z:p+.6,sy:.4+x*.45,ry:x*6})}if(!(_.max-_.min>1.4))if(n==="forest")y>-.2&&o.push({x:m,y,z:p,sy:1+x*.9,ry:x*6});else if(n==="meadow")y>-.2&&o.push({x:m,y,z:p,sy:.85+x*.7,ry:x*6});else if(n==="snow")y>1&&o.push({x:m,y,z:p,sy:.9+x*.5,ry:x*6});else if(n==="desert"){const v=Math.hypot(m,p);nn(m,p).primary==="desert"&&v<490&&l.push({x:m,y,z:p,sy:.85+x*.7,ry:x*6})}else n==="rocky"?f%3===0&&o.push({x:m,y,z:p,sy:.5+x*.4,ry:x*6}):n==="lake"&&y>-.1&&o.push({x:m,y,z:p,sy:.7+x*.4,ry:x*6})}if(n==="forest")for(let f=3;f<te;f+=5)for(let g=3;g<te;g+=5){const x=s+f,m=r+g;if(Math.hypot(x,m)<Nr||Sr(x,m))continue;const p=An(x,m,.9);ol(x,m,1,p.min)||p.max-p.min>1.4||o.push({x,y:p.min-.04,z:m,sy:1.15,ry:f*.1+g})}if(n==="dragon_lands")for(let f=4;f<te;f+=7)for(let g=4;g<te;g+=7){const x=s+f,m=r+g;if(nn(x,m).primary!=="dragon_lands"||Math.hypot(x,m)>Ln-8)continue;const p=An(x,m,.3);a.push({x,y:p.min-.1,z:m,sy:.45,ry:f+g});const _=An(x+1.1,m+.8,.45);l.push({x:x+1.1,y:_.min-.05,z:m+.8,sy:.45+wi(f,g,t*7+e)*.45,ry:g})}let u=0,h=0;const d=new Re;if(o.length){const g=Kd(n==="forest"?"forest":n==="snow"?"snow":n==="rocky"?"rocky":n==="lake"?"lake":"meadow"),x=new oe({vertexColors:!0,roughness:.9,color:"#ffffff"}),m=new Is(g,x,o.length);m.name=`trees_${n}`;for(let p=0;p<o.length;p++){const _=o[p];d.position.set(_.x,_.y,_.z),d.rotation.set(0,_.ry,0),d.scale.set(_.sy*.95,_.sy,_.sy*.95),d.updateMatrix(),m.setMatrixAt(p,d.matrix)}if(m.instanceMatrix.needsUpdate=!0,m.frustumCulled=!0,m.castShadow=!0,i.add(m),u++,h+=o.length*70,n==="forest"&&o.length){const p=[],_=new Mt("#2d5a28"),y=new Mt("#c04040"),v=(M,R,U)=>{const N=M.index?M.toNonIndexed():M.clone();for(const H of Object.keys(N.attributes))H!=="position"&&H!=="normal"&&N.deleteAttribute(H);N.applyMatrix4(R);const O=N.attributes.position.count,Y=new Float32Array(O*3);for(let H=0;H<O;H++)Y[H*3]=U.r,Y[H*3+1]=U.g,Y[H*3+2]=U.b;N.setAttribute("color",new Te(Y,3)),p.push(N)},P=new Ui(.35,.7,5),E=Math.min(o.length,28);for(let M=0;M<E;M++){const R=o[M];d.position.set(R.x+.9,An(R.x+.9,R.z-.5,.3).min+.3,R.z-.5),d.scale.setScalar(.7+M%5*.1),d.rotation.set(0,M,0),d.updateMatrix(),v(P,d.matrix,_)}const C=new ne(.18,5,4),w=Math.min(14,o.length);for(let M=0;M<w;M++){const R=o[M];d.position.set(R.x-.7,An(R.x-.7,R.z+.6,.15).min+.14,R.z+.6),d.scale.setScalar(1),d.rotation.set(0,0,0),d.updateMatrix(),v(C,d.matrix,y)}const S=pn(p,!1);if(S){S.computeBoundingSphere();const M=new mt(S,new oe({color:"#ffffff",vertexColors:!0,roughness:.9}));M.name="undergrowth",i.add(M),u++,h+=E*10+w*20}}}if(a.length){const f=new na(.45,0),g=new oe({color:n==="desert"?"#d8c090":n==="snow"?"#d8e0e8":n==="dragon_lands"?"#4a444c":"#8a8884",map:qr(64),roughness:Ri.rock}),x=mn();x?.rockNormal&&(g.normalMap=x.rockNormal,g.normalScale=new at(.5,.5));const m=new Is(f,g,a.length);m.name="rocks";for(let p=0;p<a.length;p++){const _=a[p];d.position.set(_.x,_.y+.35*_.sy,_.z),d.rotation.set(_.ry*.2,_.ry,_.ry*.1),d.scale.setScalar(_.sy),d.updateMatrix(),m.setMatrixAt(p,d.matrix)}m.instanceMatrix.needsUpdate=!0,m.frustumCulled=!0,i.add(m),u++,h+=a.length*36}if(l.length){if(n==="desert"){const f=new oe({color:"#3a8a45",roughness:.85,flatShading:!0}),g=new Pe(.22,.28,2.4,6).translate(0,1.2,0),x=new Pe(.12,.14,.9,5).rotateZ(.55).translate(-.35,1.6,0),m=new Pe(.12,.14,.9,5).rotateZ(-.5).translate(.35,1.85,0),p=pn([g,x,m].map(y=>y.toNonIndexed()),!1),_=new Is(p,f,l.length);_.name="cactus";for(let y=0;y<l.length;y++){const v=l[y];d.position.set(v.x,v.y,v.z),d.scale.set(v.sy,v.sy,v.sy),d.rotation.set(0,v.ry,0),d.updateMatrix(),_.setMatrixAt(y,d.matrix)}_.instanceMatrix.needsUpdate=!0,i.add(_),u+=1,h+=l.length*40}else if(n==="dragon_lands"){const f=new oa(.5,0),g=new oe({color:"#d040ff",emissive:"#a010e0",emissiveIntensity:.7,roughness:.3,metalness:.25}),x=new Is(f,g,l.length);x.name="crystals";for(let v=0;v<l.length;v++){const P=l[v];d.position.set(P.x,P.y+.65*P.sy,P.z),d.scale.set(P.sy*1.1,P.sy*1.8,P.sy*1.1),d.rotation.set(.3,P.ry,.5),d.updateMatrix(),x.setMatrixAt(v,d.matrix)}x.instanceMatrix.needsUpdate=!0,i.add(x),u++,h+=l.length*8;const m=[],p=(v,P,E,C,w)=>{const S=new Ot().compose(new I(P,ue(P,E)+w,E),new Mn().setFromEuler(new Qe(0,C,0)),new I(1,1,1));v.applyMatrix4(S),m.push(v)};p(new Dn(2.2,10).rotateX(-Math.PI/2),s+10,r+12,0,.04);for(let v=0;v<5;v++)p(new sn(2.8+v*.4,.06,.22),s+4+v*5.5,r+6+v%3*7,v*.7,.05);for(let v=0;v<4;v++)p(new Dn(.7,8).rotateX(-Math.PI/2),s+8+v*6,r+18+v%2*5,0,.05);const _=Math.min(6,l.length);for(let v=0;v<_;v++){const P=l[v],E=P.x-1.2,C=P.z+.8;p(new Dn(.55*(.8+v%3*.2),8).rotateX(-Math.PI/2),E,C,P.ry,.04)}const y=pn(m.map(v=>v.toNonIndexed()),!1);if(y){const v=new mt(y,new oe({color:"#ff5a18",emissive:"#ff3000",emissiveIntensity:.85,roughness:.4}));v.name="lavaCracks",i.add(v),u++,h+=100}}}return{pTris:h,pDraws:u}}class Qd{root=new se;chunks=new Map;queue=[];budgets;lastCx=NaN;lastCz=NaN;stats={loaded:0,draws:0,tris:0,queued:0};constructor(t){this.root.name="streamedWorld",this.budgets=mh(t)}setTier(t){this.budgets=mh(t),this.lastCx=NaN}hasChunkAt(t,e){return this.chunks.has(Co(Math.floor(t/te),Math.floor(e/te)))}softClamp(t,e){const n=Math.hypot(t,e),s=Ln-2;if(n<=s)return{x:t,z:e};const r=s/n;return{x:t*r,z:e*r}}update(t,e,n,s=5){const r=Math.floor(t/te),o=Math.floor(e/te);(r!==this.lastCx||o!==this.lastCz||this.queue.length===0)&&(this.lastCx=r,this.lastCz=o,this.rebuildQueue(r,o));const a=performance.now();for(;this.queue.length&&performance.now()-a<s&&!(this.chunks.size>=this.budgets.maxLoadedChunks);){const h=this.queue.shift(),d=Co(h.cx,h.cz),f=this.chunks.get(d);if(f&&f.lod<=h.lod)continue;f&&(this.root.remove(f.group),f.group.traverse(x=>{const m=x;m.isMesh&&m.geometry?.dispose()}),this.chunks.delete(d));const g=gh(h.cx,h.cz,h.lod);g.group.traverse(x=>{x.frustumCulled=!0}),this.root.add(g.group),this.chunks.set(d,{key:d,cx:h.cx,cz:h.cz,lod:h.lod,group:g.group,tris:g.tris,draws:g.draws})}const l=this.budgets.farRadiusChunks+1;for(const[h,d]of[...this.chunks])Math.max(Math.abs(d.cx-r),Math.abs(d.cz-o))>l&&(this.root.remove(d.group),this.chunks.delete(h));if(n)for(const h of this.chunks.values()){const d=new I(h.cx*te+16,0,h.cz*te+16);d.y=ue(d.x,d.z),h.group.visible=n.containsPoint(d)||Math.hypot(d.x-t,d.z-e)<te*2.5}{const h=this.budgets.maxLoadedChunks>=72?80:this.budgets.maxLoadedChunks>=56?70:40,d=this.budgets.maxLoadedChunks>=72?120:this.budgets.maxLoadedChunks>=56?95:50;for(const f of this.chunks.values()){if(!f.group.visible)continue;const g=Math.max(0,Math.hypot(f.cx*te+16-t,f.cz*te+16-e)-16);for(const x of f.group.children){const m=x.name;m==="undergrowth"?x.visible=g<h:m==="rocks"||m==="crystals"||m==="cactus"||m==="lavaCracks"?x.visible=g<d:m.startsWith("trees_")&&(x.castShadow=g<40)}}}let c=0,u=0;for(const h of this.chunks.values())h.group.visible&&(c+=h.draws,u+=h.tris);this.stats={loaded:this.chunks.size,draws:c,tris:u,queued:this.queue.length}}rebuildQueue(t,e){const n=new Map,s=this.budgets.farRadiusChunks;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++){const a=Math.max(Math.abs(o),Math.abs(r));let l=2;a<=this.budgets.loadRadiusChunks-2?l=0:a<=this.budgets.loadRadiusChunks&&(l=1);const c=t+o,u=e+r,h=c*te+16,d=u*te+16;Math.hypot(h,d)>Ln+te||Math.hypot(h,d)<Nr-8||n.set(Co(c,u),l)}this.queue=[];for(const[r,o]of n){const[a,l]=r.split(",").map(Number),c=this.chunks.get(r);(!c||c.lod>o)&&this.queue.push({cx:a,cz:l,lod:o})}this.queue.sort((r,o)=>{const a=Math.max(Math.abs(r.cx-t),Math.abs(r.cz-e)),l=Math.max(Math.abs(o.cx-t),Math.abs(o.cz-e));return r.lod!==o.lod?r.lod-o.lod:a-l})}flushAround(t,e,n=2){const s=Math.floor(t/te),r=Math.floor(e/te);this.rebuildQueue(s,r);const o=[...this.chunks.values()].sort((a,l)=>{const c=Math.max(Math.abs(a.cx-s),Math.abs(a.cz-r));return Math.max(Math.abs(l.cx-s),Math.abs(l.cz-r))-c});for(let a=-n;a<=n;a++)for(let l=-n;l<=n;l++){const c=s+a,u=r+l,h=Co(c,u),d=this.chunks.get(h);if(d&&d.lod===0)continue;for(;this.chunks.size>=this.budgets.maxLoadedChunks&&o.length;){const g=o.shift();Math.max(Math.abs(g.cx-s),Math.abs(g.cz-r))<=n||(this.root.remove(g.group),this.chunks.delete(g.key))}d&&(this.root.remove(d.group),this.chunks.delete(h));const f=gh(c,u,0);this.root.add(f.group),this.chunks.set(h,{key:h,cx:c,cz:u,lod:0,group:f.group,tris:f.tris,draws:f.draws})}this.stats.loaded=this.chunks.size}dispose(){for(const t of this.chunks.values())this.root.remove(t.group);this.chunks.clear(),this.queue=[]}}function en(i,t=.6){return i.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
        float fogD = vFogDepth * ${t.toFixed(3)};
        #ifdef FOG_EXP2
          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogD * fogD );
        #else
          float fogFactor = smoothstep( fogNear, fogFar, fogD );
        #endif
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
      #endif`)},i.customProgramCacheKey=()=>"softfog"+t,i}const tf=24,Ps=2.4,Fn=10,ge=tf-Ps,_h={z:-11};function Yy(){const i=da("grey"),t=zd(64);return{stone:en(Ae(Tt("#e2ddd4",{map:i,rough:.92}),.5)),tower:en(Ae(Tt("#d4cec4",{map:i,rough:.92}),.5)),roof:en(Ae(Tt("#d8473c",{map:t,rough:.75}),.55)),wood:en(Ae(Tt("#9a6a40",{map:Pi("dark"),rough:.8}),.5)),iron:en(Tt("#3c3c44",{rough:.45,metal:.6})),floor:en(Ae(Tt("#d8d0c4",{map:Tc(),rough:.9}),.33)),windowWarm:en(Tt("#ffd890",{emissive:"#ffb050",ei:.9,rough:.3})),windowDay:Tt("#d8ecff",{emissive:"#b8dcff",ei:.75,rough:.2}),banner:en(Tt("#ffffff",{map:My(),rough:.8,side:Be,glow:.08})),slit:en(Tt("#1e1c22",{rough:.9}))}}function vh(i,t,e,n){const s=i/2,r=new ia;return r.moveTo(-s,t),r.lineTo(-s,e),r.lineTo(s,e),r.lineTo(s,t),r.absarc(0,t,s,0,Math.PI,!1),new Vr(r,{depth:n,bevelEnabled:!1,curveSegments:10})}function yh(i,t,e){const n=new ia;return n.moveTo(-i/2,0),n.lineTo(i/2,0),n.lineTo(0,t),n.closePath(),new Vr(n,{depth:e,bevelEnabled:!1})}function yi(i,t,e,n,s,r,o,a=2.6){const l=Math.hypot(s-e,r-n),c=Math.max(1,Math.floor(l/a)),u=Math.abs(s-e)>Math.abs(r-n);for(let h=0;h<=c;h++){const d=h/c,f=e+(s-e)*d,g=n+(r-n)*d;i.box(t,u?1.3:.9,1.3,u?.9:1.3,f,o+.65,g)}}function Mh(i,t,e,n,s,r,o){i.cyl(t.tower,s,s*1.08,r+4,14,e,(r-4)/2,n),i.cyl(t.tower,s+.45,s,.9,14,e,r+.2,n);for(let a=0;a<10;a++){const l=a/10*Math.PI*2;i.box(t.tower,1,1.1,.8,e+Math.sin(l)*(s+.2),r+1.15,n+Math.cos(l)*(s+.2),{ry:l})}i.cone(t.roof,s+.9,o,14,e,r+.65+o/2,n);for(let a=0;a<4;a++){const l=a/4*Math.PI*2+Math.PI/4;for(const c of[r*.35,r*.7])i.box(t.slit,.35,1.6,.3,e+Math.sin(l)*(s+.02),c,n+Math.cos(l)*(s+.02),{ry:l})}i.cyl(t.iron,.07,.07,3.2,5,e,r+o+1.6,n),i.add(new ve(2.2,1.1),t.banner,e+1.15,r+o+2.4,n),i.solidBox(e-s*.75,-4,n-s*.75,e+s*.75,r+1.7,n+s*.75)}function $y(i){const t=new Di,e=tf;t.boxMin(i.stone,-e,-4,-e,2*e,Fn+4,Ps,{solid:!0}),t.boxMin(i.stone,-e,-4,-ge,Ps,Fn+4,2*ge,{solid:!0}),t.boxMin(i.stone,ge,-4,-ge,Ps,Fn+4,2*ge,{solid:!0}),t.boxMin(i.stone,-e,-4,ge,e-8.5,Fn+4,Ps,{solid:!0}),t.boxMin(i.stone,8.5,-4,ge,e-8.5,Fn+4,Ps,{solid:!0}),yi(t,i.stone,-e+2,-e+.45,e-2,-e+.45,Fn),yi(t,i.stone,-e+.45,-e+2,-e+.45,e-2,Fn),yi(t,i.stone,e-.45,-e+2,e-.45,e-2,Fn),yi(t,i.stone,-e+2,e-.45,-8.5,e-.45,Fn),yi(t,i.stone,8.5,e-.45,e-2,e-.45,Fn);for(const[g,x,m,p]of[[-e-.8,-e-.8,2*e+1.6,1.6],[-e-.8,-e,1.6,2*e],[e-.8,-e,1.6,2*e],[-e-.8,e-.8,e-8.5+.8,1.6],[8.5,e-.8,e-8.5+.8,1.6]])t.boxMin(i.tower,g,-2,x,m,3,p);for(const[g,x]of[[-e,-e],[e,-e],[-e,e],[e,e]])Mh(t,i,g,x,4.4,16,9);for(const g of[-1,1]){const x=g<0?-8.5:2.5;t.boxMin(i.tower,x,-4,ge-1.5,6,19,7.6,{solid:!0}),yi(t,i.tower,x+.5,ge+5.65,x+5.5,ge+5.65,15,1.7),yi(t,i.tower,x+.5,ge-1.05,x+5.5,ge-1.05,15,1.7),t.cone(i.roof,4.6,5.5,4,x+3,15+2.75+.6,ge+2.3,{ry:Math.PI/4});for(const m of[5,10])t.box(i.slit,.4,1.6,.3,x+3,m,ge+6.12);t.box(i.windowWarm,.9,1.3,.1,x+3,12.4,ge+6.13)}const n=ge-1.5,s=7.6;t.boxMin(i.tower,-2.5,7.4,n,5,7.6,s,{solid:!0}),t.add(vh(5,4.8,7.4,s),i.tower,0,0,n),yi(t,i.tower,-2,ge+5.65,2,ge+5.65,15,1.4);const r=new os(2.65,.32,6,14,Math.PI);t.add(r,i.stone,0,4.8,n+s+.05);for(let g=-4;g<=4;g++)t.box(i.iron,.12,2.2,.12,g*.55,7,n+s-.6),t.cone(i.iron,.09,.3,4,g*.55,5.75,n+s-.6,{rx:Math.PI});for(const g of[6.4,7.3])t.box(i.iron,4.8,.1,.1,0,g,n+s-.6);for(const g of[-1,1]){t.box(i.wood,.22,5.8,2.4,g*2.3,2.9,n+1.4);for(const x of[1,2.9,4.8])t.box(i.iron,.26,.16,2.3,g*2.3,x,n+1.4)}t.boxMin(i.floor,-ge,-.4,-ge,2*ge,.5,2*ge,{solid:!0}),t.boxMin(i.floor,-2.5,-.4,n,5,.5,s+.2,{solid:!0}),t.boxMin(i.floor,-3,-.4,ge+6.1,6,.48,qt.plateauR-ge-7,{solid:!0});const o=9.6,a=-20,l=-3,c=1.2,u=11;t.boxMin(i.stone,-o,-1,a,c,u+1,l-a,{solid:!0}),t.boxMin(i.stone,o-c,-1,a,c,u+1,l-a,{solid:!0}),t.boxMin(i.stone,-o+c,-1,a,2*(o-c),u+1,c,{solid:!0}),t.boxMin(i.stone,-o+c,-1,l-c,o-c-2.2,u+1,c,{solid:!0}),t.boxMin(i.stone,2.2,-1,l-c,o-c-2.2,u+1,c,{solid:!0}),t.boxMin(i.stone,-2.2,6.6,l-c,4.4,u-6.6,c,{solid:!0}),t.add(vh(4.4,4.2,6.6,c),i.stone,0,0,l-c),t.add(new os(2.4,.25,6,12,Math.PI),i.tower,0,4.2,l+.05),t.add(yh(2*o,6.2,c),i.stone,0,u,l-c),t.add(yh(2*o,6.2,c),i.stone,0,u,a);const h=Math.atan2(6.2,o),d=Math.hypot(o,6.2)+1;for(const g of[-1,1])t.box(i.roof,d,.4,l-a+1.6,g*(o/2+.2),u+3.1+.25,(a+l)/2,{rz:-g*h});t.box(i.wood,.5,.5,l-a+1.8,0,u+6.35,(a+l)/2);for(const g of[-6.5,-10.5,-14.5,-18])for(const x of[-1,1])t.box(i.tower,.3,4,1.9,x*(o+.12),6,g),t.box(i.windowWarm,.1,3.2,1.2,x*(o+.3),6,g),t.box(i.windowDay,.06,3.2,1.2,x*(o-c-.04),6,g),t.cone(i.tower,.75,.7,4,x*(o+.28),8.3,g,{ry:Math.PI/4});Mh(t,i,14.5,-14.5,4.6,27,10);for(const g of[9,15,21])t.box(i.windowWarm,.1,1.4,.8,14.5+4.65,g,-14.5,{ry:Math.PI/2});return{group:t.build("castleExterior",{castShadow:!1,receiveShadow:!1}),colliders:t.colliders}}function jy(i){const t=new Di,e=Tt("#58b8e8",{rough:.15,metal:.2,transparent:!0,opacity:.85,emissive:"#2a6a9a",ei:.25}),n=Tt("#f0c040",{rough:.35,metal:.7,emissive:"#806010",ei:.25}),s=Tt("#b02838",{rough:.7,glow:.12}),r=new Yn({color:"#ff8a2a"}),o=new Yn({color:"#ffb050",transparent:!0,opacity:.22,depthWrite:!1,blending:Ho}),a=Ae(Tt("#cfc6b8",{map:Tc(),rough:.85,glow:.1}),.4),l=Ae(Tt("#e6dfd2",{map:da("warm"),rough:.9,glow:.14}),.5),c=Ae(Tt("#7a4a28",{map:Pi("dark"),rough:.75,glow:.08}),.6),u=Tt("#ffffff",{map:nc("#a82030","#f0c040"),rough:.9,glow:.12}),h=Tt("#3f8a3a",{rough:.9}),d=Ae(Tt("#9a6436",{map:Pi("light"),rough:.8}),.8);t.push(0,.1,5),t.cyl(i.tower,3.4,3.6,.9,10,0,.45,0,{solid:!0}),t.cyl(e,3.05,3.05,.1,20,0,.82,0),t.cyl(i.tower,.55,.8,2.4,10,0,1.6,0),t.cyl(i.tower,1.4,.55,.5,12,0,2.95,0),t.cyl(e,1.2,1.2,.08,16,0,3.17,0),t.cyl(i.tower,.25,.35,.9,8,0,3.6,0),t.sphere(n,.32,0,4.2,0);for(let x=0;x<6;x++){const m=x/6*Math.PI*2;t.cyl(e,.05,.09,2.3,5,Math.sin(m)*1.35,1.95,Math.cos(m)*1.35)}t.pop();for(const x of[16,9,1])for(const m of[-1,1])t.cyl(i.iron,.09,.11,7.5,6,m*6,3.75,x,{solid:!0}),t.box(i.iron,2,.08,.08,m*6+m*.9,7.2,x),t.add(new ve(1.6,3.4),i.banner,m*6+m*.9,5.4,x,{ry:Math.PI/2}),t.sphere(n,.14,m*6,7.6,x);for(const x of[-14,-4,6,14])for(const m of[-1,1])t.add(new ve(2.6,5.4),i.banner,m*(ge-.04),6.2,x,{ry:-m*Math.PI/2});for(const x of[-1,1])t.add(new ve(2.4,5),i.banner,x*5.5,8.5,ge-1.55,{ry:Math.PI});for(const x of[-1,1])t.add(new ve(1.8,4.2),i.banner,x*5.6,6.8,-2.95);for(const[x,m]of[[-18,17],[-16.8,17.6],[-17.5,15.8],[18,-2],[17.2,-3.2]])t.cyl(d,.5,.45,1.1,10,x,.65,m,{solid:!0}),t.cyl(i.iron,.52,.52,.06,10,x,.95,m),t.cyl(i.iron,.47,.47,.06,10,x,.3,m);for(const[x,m,p]of[[18,16,1.2],[16.6,16.5,.9],[18.1,14.6,.8]])t.box(d,p,p,p,x,.1+p/2,m,{solid:!0});for(const[x,m]of[[-12,12],[12,12],[-14,-1],[14,2]])t.cyl(i.tower,1.1,1.2,.9,8,x,.55,m,{solid:!0}),t.cyl(c,.14,.18,1.6,6,x,1.6,m),t.sphere(h,1.2,x,2.9,m,{sy:.85}),t.sphere(h,.8,x+.5,3.5,m-.3);t.boxMin(a,-8.4,-.3,-18.8,16.8,.48,14.6,{solid:!0}),t.boxMin(l,-8.42,.15,-18.8,.05,10.8,14.6),t.boxMin(l,8.37,.15,-18.8,.05,10.8,14.6),t.boxMin(l,-8.4,.15,-18.82,16.8,10.8,.05);for(const x of[-6,-9.5,-13,-16.5])t.box(c,16.8,.6,.5,0,10.6,x);t.box(c,.5,.6,14.6,0,10.6,-11.5),t.add(new ve(2.6,10.4),u,0,.19,-9.6,{rx:-Math.PI/2}),t.boxMin(c,-6,.1,-18.8,12,.55,3.3,{solid:!0}),t.boxMin(c,-3,.1,-15.5,6,.3,.7,{solid:!0}),t.add(new ve(3,3),u,0,.66,-17,{rx:-Math.PI/2}),t.push(0,.65,-17.6),t.box(n,2.3,.4,1.7,0,.2,0,{solid:!0}),t.box(s,1.6,.35,1.25,0,.58,.05),t.box(s,1.7,3.4,.35,0,2.2,-.62),t.box(n,2.05,.2,.45,0,3.95,-.62);for(const x of[-1,1])t.box(n,.18,3.6,.45,x*.95,2.2,-.62),t.box(n,.25,.8,1.3,x*.92,.9,.05),t.sphere(n,.18,x*.95,4.2,-.62);t.cone(n,.35,.7,5,0,4.4,-.62),t.solidBox(-1.15,0,-.9,1.15,4.6,.9),t.pop(),t.add(new ve(3.6,7.2),i.banner,0,6.4,-18.74);for(const x of[-1,1])t.add(new ve(1.8,4.2),i.banner,x*8.33,6.6,-8.5,{ry:-x*Math.PI/2}),t.add(new ve(1.8,4.2),i.banner,x*8.33,6.6,-12.5,{ry:-x*Math.PI/2});for(const x of[-6.8,-10.4,-14])for(const m of[-1,1]){const p=m*4.3;t.box(i.tower,1.4,.45,1.4,p,.4,x,{solid:!0}),t.cyl(l,.5,.56,9.8,12,p,5.4,x,{solid:!0}),t.box(i.tower,1.4,.5,1.4,p,10.3,x),t.box(i.iron,.12,.12,.5,p-m*.7,3.1,x,{ry:Math.PI/2}),t.cyl(c,.07,.05,.7,6,p-m*.85,3.4,x),t.cone(r,.13,.42,6,p-m*.85,3.95,x),t.sphere(o,.55,p-m*.85,3.95,x,{ws:8,hs:6})}for(const x of[-5,-16.6])for(const m of[-1,1]){const p=m*8.15;t.cyl(c,.07,.05,.7,6,p,3.4,x),t.cone(r,.13,.42,6,p,3.95,x),t.sphere(o,.55,p-m*.1,3.95,x,{ws:8,hs:6})}for(const x of[-1,1]){const m=x*6.75;t.box(c,1.3,.14,7.6,m,.98,-10.2);for(const p of[-6.8,-13.6])for(const _ of[-.45,.45])t.box(c,.14,.85,.14,m+_,.55,p);t.solidBox(m-.65,.1,-14,m+.65,1.05,-6.4),t.box(c,.45,.1,7.2,m-x*1.05,.55,-10.2),t.solidBox(m-x*1.05-.22,.1,-13.8,m-x*1.05+.22,.6,-6.6);for(let p=0;p<5;p++){const _=-7.2-p*1.6;t.cyl(n,.22,.22,.03,10,m,1.07,_),t.cyl(n,.06,.04,.22,6,m+x*.35,1.16,_+.3),p%2===0&&t.sphere(d,.16,m,1.15,_,{sy:.6})}}const f=Tt("#f4ecd8",{glow:.3});for(const x of[-8.2,-13.2]){t.add(new os(1.4,.07,6,18),i.iron,0,7.6,x,{rx:Math.PI/2}),t.cyl(i.iron,.04,.04,3,4,0,9.1,x);for(let m=0;m<8;m++){const p=m/8*Math.PI*2;t.cyl(f,.05,.05,.25,5,Math.sin(p)*1.4,7.78,x+Math.cos(p)*1.4),t.cone(r,.05,.16,5,Math.sin(p)*1.4,8,x+Math.cos(p)*1.4)}}const g=t.build("castleNear",{castShadow:!1,receiveShadow:!1});return g.traverse(x=>{const m=x;m.isMesh&&m.material===o&&(m.renderOrder=5)}),{group:g,colliders:t.colliders}}function Zy(){const i=new se;i.name="castleLandmark";const t=Ac();i.position.set(qt.x,t,qt.z);const e=Yy();i.userData.mats=e;const n=$y(e);i.add(n.group),ir("castle",{x:qt.x,y:t,z:qt.z},0,n.colliders);const s=Ky(e,t);i.add(s),i.updateMatrixWorld(!0);const r=new se;r.add(n.group.clone(),s.clone());const o=Zd(r,"castleFar",a=>en(a));return o.visible=!1,i.add(o),i.userData.ext=n.group,i.userData.approach=s,i}const Jy=250;function Ky(i,t){const e=new se;e.name="castleApproach";const n=new Di,s=2.6,r=[],o=[],a=[],l=38,c=104,u=2;let h=0;for(let v=l;v<=c;v+=u,h++){const P=Math.sin(v*.06)*1.6*Rr.smoothstep(v,44,70);for(const E of[-1,0,1]){const C=P+E*s,w=ue(qt.x+C,qt.z+v)-t+.07;r.push(C,w,v),o.push((E+1)*s*.33,v*.33)}if(h>0){const E=(h-1)*3,C=h*3;a.push(E,C,E+1,E+1,C,C+1,E+1,C+1,E+2,E+2,C+1,C+2)}}const d=new Se;d.setAttribute("position",new Xt(r,3)),d.setAttribute("uv",new Xt(o,2)),d.setIndex(a),d.computeVertexNormals();const f=en(Tt("#c8b89c",{map:Tc(),rough:.95})),g=new mt(d,f);g.receiveShadow=!0,g.name="castleRoad",e.add(g);const x=en(Tt("#ffe0a0",{emissive:"#ffb050",ei:1,rough:.2})),m=en(Tt("#4f8a34",{rough:.95}));for(let v=44;v<=100;v+=11){const P=Math.sin(v*.06)*1.6*Rr.smoothstep(v,44,70);for(const E of[-1,1]){const C=P+E*(s+.9),w=An(qt.x+C,qt.z+v,.4).min-t;n.cyl(i.iron,.07,.1,3,6,C,w+1.5,v),n.box(i.iron,.5,.06,.06,C-E*.2,w+2.95,v),n.cyl(x,.12,.12,.32,8,C-E*.4,w+2.72,v),n.cyl(i.iron,.03,.16,.12,8,C-E*.4,w+2.94,v);const S=v+5,M=P+E*(s+1.4),R=An(qt.x+M,qt.z+S,.9).min-t;n.sphere(m,.9,M,R+.35,S,{sy:.7,ws:10,hs:6})}}e.add(n.build("castleApproachParts"));const p=[];for(let v=0;v<40;v++){const P=v/40*Math.PI*2+Math.sin(v*7.3)*.06;if(Math.abs(Math.atan2(Math.sin(P),Math.cos(P))-Math.PI/2)<.32)continue;const E=45+v*37%17,C=Math.cos(P)*E,w=Math.sin(P)*E,S=An(qt.x+C,qt.z+w,.9);if(S.max-S.min>1.4)continue;const M=1+v*13%7*.12;p.push(new Ot().compose(new I(C,S.min-t-.04,w),new Mn().setFromEuler(new Qe(0,v*1.7,0)),new I(M*.95,M,M*.95)))}const _=en(new oe({vertexColors:!0,roughness:.9,color:"#ffffff"})),y=new Is(Kd("forest"),_,p.length);return p.forEach((v,P)=>y.setMatrixAt(P,v)),y.instanceMatrix.needsUpdate=!0,y.computeBoundingSphere(),y.castShadow=!1,y.name="castlePines",e.add(y),e}function Qy(i,t,e,n){const s=Math.hypot(t-qt.x,e-qt.z);let r=i.getObjectByName("castleNear");if(!r&&s<150){const l=jy(i.userData.mats);i.add(l.group),r=l.group,ir("castleNear",{x:i.position.x,y:i.position.y,z:i.position.z},0,l.colliders)}const o=s<110;r&&(r.visible=o);const a=s>Jy;if(i.userData.farOn!==a){i.userData.farOn=a;const l=i.getObjectByName("castleFar");l&&(l.visible=a),i.userData.ext&&(i.userData.ext.visible=!a),i.userData.approach&&(i.userData.approach.visible=!a)}if(n){const c=Math.hypot(t-qt.x,e-(qt.z+_h.z))<26;n.position.set(qt.x,i.position.y+6.5,qt.z+_h.z),n.intensity=c?60:0,n.distance=28,n.decay=1.4}return o}function tM(i=16){const t=Ln,e=Math.ceil(2*t/i),n=[],s=[],r=[],o=new Mt("#3f86b8"),a=i*.55;for(let d=0;d<=e;d++)for(let f=0;f<=e;f++){const g=-t+f*i,x=-t+d*i;let m=ue(g,x);const p=m;for(const[E,C]of[[a,0],[-a,0],[0,a],[0,-a],[a,a],[-a,-a],[a,-a],[-a,a]])m=Math.min(m,ue(g+E,x+C));const y=Math.hypot(g,x)<44?3:.9;m=Math.min(m,18),n.push(g,m-y,x);const v=nn(g,x),P=Xo(v.primary);v.secondary&&v.blend>.05&&P.lerp(Xo(v.secondary),v.blend),Jd(g,x,P),(v.primary==="lake"||v.secondary==="lake")&&p<-.1&&P.copy(o),P.multiplyScalar(.74),s.push(P.r,P.g,P.b)}const l=e+1;for(let d=0;d<e;d++)for(let f=0;f<e;f++){const g=d*l+f,x=g+1,m=g+l,p=m+1;r.push(g,m,x,x,m,p)}const c=new Se;c.setAttribute("position",new Xt(n,3)),c.setAttribute("color",new Xt(s,3)),c.setIndex(r),c.computeVertexNormals(),c.computeBoundingSphere();const u=new oe({vertexColors:!0,roughness:.95,metalness:0,color:"#ffffff"}),h=new mt(c,u);return h.name="farTerrain",h.receiveShadow=!1,h.castShadow=!1,h.renderOrder=10,h.frustumCulled=!1,h}const $e={fences:[[-10.5,7,Math.PI/2],[-10.5,8.3,Math.PI/2],[-10.5,9.6,Math.PI/2],[-10.5,10.9,Math.PI/2],[-10.5,12.2,Math.PI/2],[-10.5,13.5,Math.PI/2]],crystal:[-8.5,12],dirt:[[-13,-4,2.2],[8,-20,3.5],[20,-4,2.4]],pond:[9.5,2.5],pines:[[-12,4],[-21,-1],[19,-16],[15,6]],broadleaf:[[-6,8],[5,9],[15.5,2]],bushes:[[-2,5],[3,4],[-3.6,4.7]],rocks:[[6,1],[-11,-5],[11,8]]};function Ee(i,t){return Ty(i,t)}function eM(i,t,e,n,s){if(!n.length)return;const r=new Is(t,e,n.length);r.castShadow=s,r.receiveShadow=!0;const o=new Re;for(let a=0;a<n.length;a++){const l=n[a];o.position.set(l.x,l.y,l.z),o.rotation.set(0,l.ry??0,0),o.scale.set(l.sx??1,l.sy??1,l.sz??1),o.updateMatrix(),r.setMatrixAt(a,o.matrix)}r.instanceMatrix.needsUpdate=!0,i.add(r)}function nM(i,t){const e=i.getObjectByName("skyDome");e&&i.remove(e);const n=new se;n.name="terrain",i.fog=new ea("#c5ddf2",t==="low"?.008:.0045),i.background=new Mt("#a8d4f5"),i.add(_y());const s=mn(),r=Fd(128);r.repeat.set(22,22);const o=new oe({map:r,color:"#d0e8c0",roughness:Ri.grass,metalness:0,vertexColors:!0});s?.grassNormal&&(o.normalMap=s.grassNormal,o.normalScale=new at(Ns.grass,Ns.grass));const a=new ve(64,64,t==="low"?16:32,t==="low"?16:32),l=new Float32Array(a.attributes.position.count*3);for(let w=0;w<a.attributes.position.count;w++){const S=a.attributes.position.getX(w),M=-a.attributes.position.getY(w),R=ue(S,M);a.attributes.position.setZ(w,R);const U=.9;l[w*3]=.55*U,l[w*3+1]=.78*U,l[w*3+2]=.48*U}a.setAttribute("color",new Te(l,3)),a.computeVertexNormals();const c=new mt(a,o);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c.name="campGround",n.add(c);const u=Od(128);if(t!=="low")for(const[w,S,M]of $e.dirt){const R=new mt(new Dn(M,12),new oe({map:u,roughness:Ri.dirt,transparent:!0,opacity:.85,metalness:0}));R.rotation.x=-Math.PI/2,R.position.set(w,ue(w,S)+.03,S),n.add(R)}const h=new mt(new aa(9.2,10,48),new oe({color:"#f0e080",side:Be,transparent:!0,opacity:.75,roughness:.6,metalness:0}));h.rotation.x=-Math.PI/2,h.position.y=ue(0,0)+.07,n.add(h);const d=(w,S,M)=>{let R=ue(w,S);for(let U=0;U<8;U++){const N=U/8*Math.PI*2;R=Math.min(R,ue(w+Math.cos(N)*M,S+Math.sin(N)*M))}return R},f=Ly(d(qe.x,qe.z,3.5));n.add(f),n.add(Ny(d(hn.x,hn.z,5))),n.add(Fy(d(In.x,In.z,4.6)));const g=t==="low"?4:$e.fences.length;for(let w=0;w<g;w++){const[S,M,R]=$e.fences[w],U=my();U.position.set(S,ue(S,M),M),U.rotation.y=R,n.add(U)}const x=gy();x.position.set($e.crystal[0],ue($e.crystal[0],$e.crystal[1]),$e.crystal[1]),n.add(x);{const w=[];for(let S=0;S<12;S++){const M=4+S*1.2,R=Math.sin(M*.12)*.6;w.push({x:R,y:ue(R,M)+.05,z:M,ry:S*.4,sy:1})}eM(n,new Pe(.35,.4,.12,6),new oe({color:"#a8a8a4",map:qr(64),roughness:.9}),w,!1)}const m=vy();m.position.set($e.pond[0],ue($e.pond[0],$e.pond[1]),$e.pond[1]),n.add(m);for(const[w,S]of $e.pines){const M=hy();M.position.set(w,ue(w,S),S),n.add(M)}for(const[w,S]of $e.broadleaf){const M=dy();M.position.set(w,ue(w,S),S),n.add(M)}for(const[w,S]of $e.bushes){const M=uy();M.position.set(w,ue(w,S),S),n.add(M)}for(const[w,S,M]of[[-1,6,"#e06080"],[2,5.5,"#f0d050"],[.5,7,"#6090e0"]]){const R=py(M);R.position.set(w,ue(w,S),S),n.add(R)}for(const[w,S]of $e.rocks){const M=fy();M.position.set(w,ue(w,S),S),n.add(M)}for(let w=0;w<(t==="low"?3:5);w++){const S=xy();S.position.set(-20+w*12,28+w%2*4,-30-w*5),n.add(S)}const p=new mt(new Dn(2.2,24),new oe({color:"#f0e080",transparent:!0,opacity:.4,side:Be,roughness:.7,metalness:0}));p.rotation.x=-Math.PI/2,p.position.set(2.5,ue(2.5,6.2)+.08,6.2),p.name="buildPad",n.add(p);const _=cy(64);_.repeat.set(4,10);const y=new mt(new ve(2.2,18,1,6),(()=>{const w=new oe({map:_,roughness:Ri.path,color:"#e0d4b8",metalness:0});return s?.pathNormal&&(w.normalMap=s.pathNormal,w.normalScale=new at(Ns.path,Ns.path)),w})());y.rotation.x=-Math.PI/2,y.position.set(.3,ue(.3,10)+.06,10),n.add(y);const v=new mt(new Pe(.06,.06,3.2,6),new oe({color:"#d0a868",roughness:.7,metalness:0}));v.position.set(1.5,ue(1.5,2)+1.6,2),n.add(v);const P=new mt(new ve(1.3,.75),new oe({color:"#3a7fd4",side:Be,roughness:.55,metalness:0}));P.position.set(2.15,ue(2.15,2)+2.85,2),n.add(P);const E=new Set(["homeCabin","dragonStable","watchtower","pond","buildPad","campGround"]);fh(n,w=>!E.has(w.name)&&!w.isInstancedMesh,"campProps");const C=new Set(["cabinDoor","chimneySmoke","cabin-interior","pond","buildPad","campGround","castleLandmark","farTerrain"]);jd(n,w=>C.has(w.name)||w.isInstancedMesh===!0,"campVC");{const w=new Set(["homeCabin","dragonStable","watchtower"]),S=new Set(["cabinDoor","chimneySmoke","cabin-interior"]);fh(n,M=>w.has(M.name),"bldMerged",{skip:M=>S.has(M.name),removeEmpty:!1})}if(t==="low"){const w=n.children.filter(R=>R.name.startsWith("campProps_")),S=new se;for(const R of w)S.add(R.clone());const M=Zd(S,"campPropsLow",void 0,.85);for(const R of w)n.remove(R);for(const R of[...M.children])R.receiveShadow=!0,n.add(R)}return n.add(Zy()),n.add(tM(t==="low"?24:16)),n}function ef(i,t){return nM(i,t)}class Ro{constructor(t){this.shared=t}by=new Map;add(t,e,n,s=[0,0,0],r=[1,1,1]){const o=new Ot().compose(new I(...n),new Mn().setFromEuler(new Qe(s[0],s[1],s[2])),new I(...r));this.addM(t,e,o)}addColored(t){let e=t.index?t.toNonIndexed():t.clone();for(const s of Object.keys(e.attributes))s!=="position"&&s!=="normal"&&s!=="uv"&&s!=="color"&&e.deleteAttribute(s);e.attributes.uv||e.setAttribute("uv",new Xt(new Float32Array(e.attributes.position.count*2),2));const n=this.by.get(this.shared.scaled)??[];n.push(e),this.by.set(this.shared.scaled,n)}addM(t,e,n){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))a!=="position"&&a!=="normal"&&a!=="uv"&&s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new Xt(new Float32Array(s.attributes.position.count*2),2)),s.attributes.normal||s.computeVertexNormals(),s.applyMatrix4(n),n.determinant()<0&&(s=nf(s));let r=e;if(!this.shared.special.has(e)){const a=e,l=(a.color??new Mt(1,1,1)).clone();a.map&&l.multiply(a.color).multiplyScalar(1.12);const c=s.attributes.position.count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u[h*3]=l.r,u[h*3+1]=l.g,u[h*3+2]=l.b;s.setAttribute("color",new Xt(u,3)),r=a.map?this.shared.scaled:this.shared.plain}const o=this.by.get(r)??[];o.push(s),this.by.set(r,o)}limb(t,e,n,s,r,o=8){const a=new I(...e),l=new I(...n),c=a.distanceTo(l),u=new Pe(r,s,c,o,1),h=new Mn().setFromUnitVectors(new I(0,1,0),l.clone().sub(a).normalize()),d=new Ot().compose(a.clone().add(l).multiplyScalar(.5),h,new I(1,1,1));this.addM(u,t,d)}spike(t,e,n,s,r=6,o=1){const a=new I(...e),l=new I(...n),c=a.distanceTo(l),u=new Ui(s,c,r,1);u.scale(o,1,1);const h=new Mn().setFromUnitVectors(new I(0,1,0),l.clone().sub(a).normalize()),d=new Ot().compose(a.clone().add(l).multiplyScalar(.5),h,new I(1,1,1));this.addM(u,t,d)}build(t,e){let n=0;for(const[s,r]of this.by){const o=pn(r,!1);if(!o)continue;o.computeBoundingSphere();const a=new mt(o,s);a.name=`${e}_${n++}`,a.castShadow=!0,a.receiveShadow=!0,t.add(a)}}}function nf(i){const t=i.attributes.position.array,e=i.attributes.normal?.array,n=i.attributes.uv?.array;for(let s=0;s<t.length/9;s++){for(let r=0;r<3;r++){const o=s*9+3+r,a=s*9+6+r;[t[o],t[a]]=[t[a],t[o]],e&&([e[o],e[a]]=[e[a],e[o]])}if(n){const r=s*6+2,o=s*6+4;[n[r],n[o]]=[n[o],n[r]],[n[r+1],n[o+1]]=[n[o+1],n[r+1]]}}return i}function bh(i,t,e,n,s,r=48,o=16){const a=new bc(i.map(p=>new I(...p)),!1,"centripetal"),l=a.computeFrenetFrames(r,!1),c=[],u=[],h=[],d=[],f=s.clone().offsetHSL(0,.02,-.09),g=new I(0,1,0);for(let p=0;p<=r;p++){const _=p/r,y=_*(t.length-1),v=Math.min(t.length-2,Math.floor(y)),P=y-v,E=P*P*(3-2*P),C=t[v]+(t[v+1]-t[v])*E,w=e[v]+(e[v+1]-e[v])*E,S=a.getPointAt(_),M=a.getTangentAt(_),R=new I().crossVectors(M,g);R.lengthSq()<1e-4&&R.copy(l.binormals[p]),R.normalize();const U=new I().crossVectors(R,M).normalize();for(let N=0;N<=o;N++){const O=N/o*Math.PI*2,Y=Math.cos(O),H=Math.sin(O),et=S.clone().addScaledVector(R,Y*C).addScaledVector(U,H*C*w);c.push(et.x,et.y,et.z);const q=Rr.smoothstep(-H,.3,.6),st=Math.sin(_*r*.9)>0?s:f,X=n.clone().lerp(st,q);X.multiplyScalar(1-Rr.smoothstep(H,.75,1)*.12),u.push(X.r,X.g,X.b),h.push(N/o*2,_*6)}}const x=o+1;for(let p=0;p<r;p++)for(let _=0;_<o;_++){const y=p*x+_,v=y+x;d.push(y,y+1,v,y+1,v+1,v)}const m=new Se;return m.setAttribute("position",new Xt(c,3)),m.setAttribute("color",new Xt(u,3)),m.setAttribute("uv",new Xt(h,2)),m.setIndex(d),m.computeVertexNormals(),m}function iM(i,t){const e=[],n=[];let s=1/0,r=-1/0,o=1/0,a=-1/0;for(const h of i)s=Math.min(s,h[0]),r=Math.max(r,h[0]),o=Math.min(o,h[2]),a=Math.max(a,h[2]);const l=i[t],c=i.length;for(let h=1;h<c-1;h++){const d=i[(t+h)%c],f=i[(t+h+1)%c];for(const g of[l,d,f])e.push(g[0],g[1],g[2]),n.push((g[0]-s)/(r-s),(g[2]-o)/(a-o))}const u=new Se;return u.setAttribute("position",new Xt(e,3)),u.setAttribute("uv",new Xt(n,2)),u.computeVertexNormals(),u}function cn(i,t={}){return new oe({color:i,roughness:.7,metalness:.04,...t})}const sM=1.45;function rM(i){const t=Rv[i],e=new se;e.name=`dragon_${i}`,e.userData.palette=i,e.scale.setScalar(sM);const n=mn(),s=new Mt(t.body),r=new Mt(t.belly),o=new Mt(t.wing),a=new oe({color:"#ffffff",vertexColors:!0,map:sl("#ffffff",64),normalMap:n?.scalesNormal??null,normalScale:new at(.5,.5),roughness:Ri.scales,metalness:.05}),l=cn(t.body,{map:sl(t.body,64),roughness:.62}),c=cn(t.belly,{roughness:.72}),u=cn(o.clone().offsetHSL(0,.05,-.04),{roughness:.45}),h=cn("#efe2c4",{roughness:.38}),d=cn("#7a6a58",{roughness:.4}),f=cn("#3e3430",{roughness:.35}),g=cn("#fffbf0",{roughness:.2}),x=cn(o.clone().offsetHSL(.45,.4,.15),{roughness:.15,emissive:o.clone().offsetHSL(.45,.4,.1),emissiveIntensity:.25}),m=cn("#14141c",{roughness:.1}),p=cn("#ffffff",{emissive:"#ffffff",emissiveIntensity:.9,roughness:0}),_=cn("#5a2030",{roughness:.6}),y=cn("#fffaf0",{roughness:.3}),v=cn(s.clone().offsetHSL(0,0,-.05),{map:sl(t.body,64),roughness:.6}),P=new oe({color:t.wing,map:n?.wing??null,side:Be,transparent:!0,opacity:.9,alphaTest:n?.wing?.05:0,roughness:.5,metalness:0,emissive:t.wing,emissiveIntensity:.18}),E=new oe({color:"#ffffff",vertexColors:!0,roughness:.45,metalness:.05}),C={scaled:a,plain:E,special:new Set([P])},w=new se;w.name="dBody",e.add(w);const M=bh([[0,.62,-.62],[0,.72,-.34],[0,.8,-.02],[0,.86,.26],[0,1.06,.48],[0,1.34,.6],[0,1.58,.66]],[.24,.33,.36,.34,.2,.14,.12],[.95,1,1.05,1.1,1.05,1,1],s,r,40,18),R=new Ro(C);R.addColored(M),R.add(new ne(.25,16,12),l,[0,.62,-.62],[0,0,0],[1,.95,1]);for(const X of[-1,1])R.add(new ne(.2,14,10),l,[X*.22,.58,-.5],[0,0,0],[.75,1.1,1.25]),R.add(new ne(.14,12,10),l,[X*.24,.72,.24],[0,0,0],[.7,1.1,1]);const U=[[[0,1.66,.58],.1],[[0,1.46,.53],.11],[[0,1.25,.42],.13],[[0,1.1,.26],.15],[[0,1.13,.06],.17],[[0,1.12,-.16],.17],[[0,1.06,-.38],.15],[[0,.92,-.58],.12]];for(const[X,nt]of U)R.spike(u,X,[X[0],X[1]+nt,X[2]-nt*.55],.05,4,.45);for(const X of[-1,1]){R.limb(l,[X*.27,.58,-.5],[X*.3,.3,-.36],.17,.11,12),R.add(new ne(.11,10,8),l,[X*.3,.3,-.36]),R.limb(l,[X*.3,.3,-.36],[X*.3,.07,-.46],.1,.075,10),R.add(new ne(.1,10,8),l,[X*.3,.07,-.39],[0,0,0],[1.05,.6,1.6]),R.limb(l,[X*.26,.72,.22],[X*.28,.38,.3],.12,.085,10),R.add(new ne(.085,10,8),l,[X*.28,.38,.3]),R.limb(l,[X*.28,.38,.3],[X*.28,.06,.32],.08,.065,10),R.add(new ne(.085,10,8),l,[X*.28,.06,.37],[0,0,0],[1.05,.6,1.5]);for(let nt=-1;nt<=1;nt++)R.spike(f,[X*.3+nt*.05,.05,-.27],[X*.3+nt*.06,.01,-.19],.022,5),R.spike(f,[X*.28+nt*.045,.05,.48],[X*.28+nt*.05,.01,.55],.02,5)}R.build(w,"dBodyParts");const N=new se;N.name="head",N.position.set(0,1.58,.66),w.add(N);const O=new Ro(C);O.add(new ne(.19,18,14),l,[0,.08,.02],[0,0,0],[1.05,.92,1.12]),O.add(new Pe(.1,.15,.36,14),l,[0,.03,.26],[Math.PI/2-.12,0,0],[1,1,.72]),O.add(new ne(.11,14,10),l,[0,.05,.44],[0,0,0],[.95,.7,.75]),O.add(new Pe(.08,.12,.32,12),c,[0,-.07,.24],[Math.PI/2+.05,0,0],[1,1,.42]),O.add(new sn(.17,.012,.3),_,[0,-.035,.26]);for(const X of[-1,1]){O.add(new ne(.022,8,6),_,[X*.045,.08,.53]);for(let G=0;G<3;G++)O.spike(y,[X*(.07-G*.004),-.025,.36-G*.07],[X*(.07-G*.004),-.07,.36-G*.07],.012,4);O.add(new ne(.068,14,10),g,[X*.11,.12,.13],[0,0,0],[.8,1,.9]),O.add(new ne(.045,12,8),x,[X*.145,.12,.165],[0,0,0],[.6,1,.8]),O.add(new ne(.013,6,6),p,[X*.168,.145,.19]),O.add(new ne(.06,10,6),l,[X*.1,.19,.12],[0,X*.3,X*-.35],[1.3,.45,.8]);let nt=[X*.09,.2,-.02];const St=[[X*.03,.1,-.08],[X*.035,.07,-.11],[X*.03,.02,-.12],[X*.02,-.02,-.1]],Ut=[.045,.036,.027,.018];St.forEach((G,K)=>{const ct=[nt[0]+G[0],nt[1]+G[1],nt[2]+G[2]];K<3?O.limb(h,nt,ct,Ut[K],Ut[K+1],8):O.spike(d,nt,ct,Ut[K],8),K<3&&O.add(new os(Ut[K+1]*1.05,.006,4,10),d,ct,[Math.atan2(G[2],G[1])+Math.PI/2,0,0]),nt=ct}),O.spike(h,[X*.15,.13,-.04],[X*.22,.17,-.16],.025,6);for(let G=0;G<3;G++)O.spike(u,[X*.14,.02-G*.04,-.02],[X*(.24+G*.01),.04-G*.07,-.15+G*.01],.03,4,.4);O.spike(u,[X*.16,.18,-.06],[X*.3,.26,-.14],.05,4,.3)}O.build(N,"dHeadParts");{const X=[];for(const St of[-1,1]){const Ut=new ne(.022,8,8);Ut.scale(.55,1,.6),Ut.translate(St*.16,0,.185),X.push(Ut)}const nt=new mt(pn(X,!1),m);nt.position.y=.12,nt.scale.y=1.25,nt.name="pupils",N.add(nt)}for(const X of[-1,1]){const nt=new se;nt.name=X<0?"wingL":"wingR",nt.position.set(X*.22,1.02,.08);const St=new se;St.rotation.set(0,X*1.05,X*.32),St.scale.set(X,1,1),nt.add(St);const Ut=new Ro(C),G=[0,0,0],K=[.52,.2,-.04],ct=[.98,.32,.04],it=[[1.62,.12,-.24],[1.5,-.04,-.62],[1.2,-.12,-.92],[.78,-.14,-1.02]],At=[.06,-.12,-.72];Ut.limb(v,G,K,.06,.045,8),Ut.limb(v,K,ct,.045,.035,8),Ut.add(new ne(.05,8,6),v,K),Ut.add(new ne(.042,8,6),v,ct),Ut.spike(f,ct,[ct[0]+.04,ct[1]+.1,ct[2]+.08],.022,5),it.forEach((Vt,J)=>Ut.limb(v,ct,Vt,.028-J*.003,.008,6));const It=(Vt,J,ot,D)=>[(Vt[0]+J[0])/2+(ot[0]-(Vt[0]+J[0])/2)*D,(Vt[1]+J[1])/2+(ot[1]-(Vt[1]+J[1])/2)*D,(Vt[2]+J[2])/2+(ot[2]-(Vt[2]+J[2])/2)*D],Ft=[G,K,ct,it[0],It(it[0],it[1],ct,.22),it[1],It(it[1],it[2],ct,.24),it[2],It(it[2],it[3],ct,.24),it[3],It(it[3],At,ct,.2),At];Ut.add(iM(Ft,2),P,[0,0,0]),Ut.build(St,"dWingParts"),w.add(nt)}const Y=new se;Y.name="tail",Y.position.set(0,.62,-.62),w.add(Y);const H=[[0,0,.05],[0,-.06,-.35],[.06,-.18,-.75],[.16,-.3,-1.12],[.22,-.38,-1.48],[.2,-.42,-1.8]],et=new Ro(C);et.addColored(bh(H,[.24,.18,.12,.08,.05,.025],[.95,.95,.95,.95,.9,.8],s,r,36,12));const q=new bc(H.map(X=>new I(...X)),!1,"centripetal");for(let X=0;X<7;X++){const nt=.06+X*.12,St=q.getPointAt(nt),Ut=.22*(1-nt)+.03,G=.12*(1-nt*.7);et.spike(u,[St.x,St.y+Ut*.8,St.z],[St.x,St.y+Ut*.8+G,St.z-G*.6],.04*(1-nt*.5),4,.45)}const st=q.getPointAt(1);for(const X of[-1,1])et.spike(u,[st.x,st.y,st.z+.05],[st.x+X*.17,st.y+.02,st.z-.12],.07,4,.25);et.spike(u,[st.x,st.y,st.z+.04],[st.x,st.y,st.z-.24],.09,4,.22),et.build(Y,"dTailParts");{e.updateMatrixWorld(!0);const X=new Ot().copy(e.matrixWorld).invert(),nt=new Map;w.traverse(G=>{const K=G;if(!K.isMesh||Array.isArray(K.material))return;const ct=K.geometry.index?K.geometry.toNonIndexed():K.geometry.clone(),it=new Ot().multiplyMatrices(X,K.matrixWorld);ct.applyMatrix4(it);const At=it.determinant()<0?nf(ct):ct,It=nt.get(K.material)??[];It.push(At),nt.set(K.material,It)});const St=new se;St.name="dLod",St.visible=!1;let Ut=0;for(const[G,K]of nt){const ct=Object.keys(K[0].attributes),it=K.filter(Ft=>Object.keys(Ft.attributes).length===ct.length&&ct.every(Vt=>!!Ft.attributes[Vt])),At=pn(it,!1);if(!At)continue;At.computeBoundingSphere();const It=new mt(At,G);It.name=`dLod_${Ut++}`,It.castShadow=!0,It.receiveShadow=!0,St.add(It)}e.add(St)}return e}function oM(i,t,e){const n=i.userData.animPhase??(i.userData.animPhase=Math.random()*10),s=t+n,r=e==="fly",o=e==="glide",a=r?.75:o?.08:e==="walk"?.12:.07,l=r?9:e==="walk"?5:1.6,c=r||o?.55:0;for(const[x,m]of[["wingL",-1],["wingR",1]]){const p=i.getObjectByName(x);if(!p)continue;const _=e==="idle"?Math.max(0,Math.sin(s*.7))**6*.45:0;p.rotation.z=m*(c+_-Math.sin(s*l)*a),p.rotation.y=m*(r||o?-.85:-_*.9)}const u=i.getObjectByName("tail");u&&(u.rotation.y=Math.sin(s*1.3)*(r?.3:.24),u.rotation.x=Math.sin(s*.9)*.06+(r||o?.25:0),u.rotation.z=Math.sin(s*1.3+.6)*.05);const h=i.getObjectByName("head");h&&(h.rotation.y=Math.sin(s*.45)*.35+Math.sin(s*1.3)*.05,h.rotation.x=-.05+Math.sin(s*.8)*.07,h.rotation.z=Math.sin(s*.31)*.12);const d=i.getObjectByName("dBody");d&&(d.position.y=e==="idle"?Math.sin(s*2)*.012:0,d.scale.set(1+Math.sin(s*2)*.012,1,1));const f=Math.sin(s*.9)>.965?.12:1,g=i.getObjectByName("pupils");g&&(g.scale.y=1.25*f)}const Sh=new Map;function Ie(i,t){let e=Sh.get(i);return e||(e=t(),Sh.set(i,e)),e}function De(i,t){return new oe({color:i,map:t?.map,roughness:t?.roughness??.75,metalness:.05})}function aM(i="#f0c9a8",t="#3a7fd4"){const e=new se;e.name="fpSword";const n=new se;n.position.set(.35,-.38,-.55),n.rotation.set(.15,.35,-.25),e.add(n);const s=new mt(Ie("fpFore2",()=>new Pe(.045,.055,.28,8)),De(i));s.rotation.x=Math.PI/2.2,s.position.set(0,.02,.16),n.add(s);const r=new mt(Ie("fpCuffBand2",()=>new Pe(.058,.06,.055,10)),De(t));r.rotation.x=Math.PI/2.2,r.position.set(0,.02,.28),n.add(r);const o=new mt(Ie("fpHand2",()=>new sn(.12,.08,.16)),De(i));o.position.set(.02,0,0),n.add(o);const a=new mt(Ie("grip2",()=>new Pe(.02,.022,.1,6)),De("#3a3028"));a.rotation.x=.4,a.position.set(.03,.02,-.12),n.add(a);const l=new mt(Ie("guard2",()=>new sn(.16,.028,.028)),De("#4a5058"));l.position.set(.03,.06,-.16),l.rotation.x=.4,n.add(l);const c=new mt(Ie("blade2",()=>new sn(.035,.02,.55)),De("#9aa3ad",{roughness:.35}));return c.position.set(.03,.1,-.42),c.rotation.x=.35,n.add(c),jd(n,()=>!1,"fpVC"),e}function lM(){const i=new se;i.name="fieldMonster",i.scale.setScalar(1.15);const t=new mt(Ie("mBody4",()=>new ne(.48,16,12)),De("#7b6aa8"));t.scale.set(1.05,1.25,.95),t.position.y=.78,t.name="mBody",i.add(t);const e=new mt(Ie("mBelly4",()=>new ne(.28,12,10)),De("#c8b8e0"));e.scale.set(.9,1,.45),e.position.set(0,.7,.32),i.add(e);const n=new mt(Ie("mHead4",()=>new ne(.32,14,12)),De("#8a78b8"));n.position.set(0,1.35,.08),i.add(n);for(const o of[-1,1]){const a=new mt(Ie("mEar4",()=>new Ui(.1,.28,6)),De("#e09060"));a.position.set(o*.22,1.58,0),a.rotation.z=o*.45,i.add(a)}for(const o of[-1,1]){const a=new mt(Ie("mEye4",()=>new ne(.1,10,8)),De("#fff8f0"));a.position.set(o*.12,1.4,.26),i.add(a);const l=new mt(Ie("mPup4",()=>new ne(.045,8,6)),De("#2a2038"));l.position.set(o*.12,1.4,.34),l.name="pupil",i.add(l);const c=new mt(Ie("mHl4",()=>new ne(.02,6,6)),De("#ffffff"));c.position.set(o*.1,1.43,.37),i.add(c)}const s=new mt(Ie("mSmile",()=>new os(.1,.018,6,10,Math.PI)),De("#4a3058"));s.position.set(0,1.22,.32),s.rotation.x=Math.PI,i.add(s);for(const o of[-1,1]){const a=new mt(Ie("mArm4",()=>new Vo(.07,.22,4,8)),De("#7b6aa8"));a.position.set(o*.42,.85,.05),a.rotation.z=o*.6,a.name=o<0?"mArmL":"mArmR",i.add(a)}for(const o of[-1,1]){const a=new mt(Ie("mLeg4",()=>new Vo(.08,.18,4,8)),De("#5a4a78"));a.position.set(o*.16,.28,.02),i.add(a);const l=new mt(Ie("mFoot4",()=>new ne(.11,8,6)),De("#e09060"));l.scale.set(1.1,.55,1.3),l.position.set(o*.16,.08,.06),i.add(l)}const r=new mt(Ie("mTail4",()=>new ne(.1,8,6)),De("#8a78b8"));r.position.set(0,.55,-.42),i.add(r);{const o=new Set(["mBody","mArmL","mArmR"]),a=[];for(const c of[...i.children]){const u=c;if(!u.isMesh||o.has(u.name))continue;u.updateMatrix();const h=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const x of Object.keys(h.attributes))x!=="position"&&x!=="normal"&&h.deleteAttribute(x);h.applyMatrix4(u.matrix);const d=u.material.color??new Mt(1,1,1),f=h.attributes.position.count,g=new Float32Array(f*3);for(let x=0;x<f;x++)g[x*3]=d.r,g[x*3+1]=d.g,g[x*3+2]=d.b;h.setAttribute("color",new Xt(g,3)),a.push(h),i.remove(u)}const l=pn(a,!1);if(l){l.computeBoundingSphere();const c=new mt(l,wh());c.name="mStatic",i.add(c);const u=[l.clone()];for(const d of["mBody","mArmL","mArmR"]){const f=i.getObjectByName(d);if(!f)continue;f.updateMatrix();const g=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();for(const _ of Object.keys(g.attributes))_!=="position"&&_!=="normal"&&g.deleteAttribute(_);g.applyMatrix4(f.matrix);const x=f.material.color,m=g.attributes.position.count,p=new Float32Array(m*3);for(let _=0;_<m;_++)p[_*3]=x.r,p[_*3+1]=x.g,p[_*3+2]=x.b;g.setAttribute("color",new Xt(p,3)),u.push(g)}const h=pn(u,!1);if(h){h.computeBoundingSphere();const d=new mt(h,wh());d.name="mLod",d.visible=!1,i.add(d)}}}return i.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),i}let cM=null;function wh(){return cM??=new oe({color:"#ffffff",vertexColors:!0,roughness:.7,metalness:0})}function uM(i){return rM(i)}function Eh(i,t,e){oM(i,t,e)}function hM(i,t,e){const n=i.getObjectByName("mBody");n&&(n.position.y=.72+Math.sin(t*2.4)*(e==="hurt"?.02:.04),e==="hurt"&&(n.rotation.z=Math.sin(t*20)*.08));const s=i.getObjectByName("mArmL"),r=i.getObjectByName("mArmR");e==="attack"?(s&&(s.rotation.x=-Math.sin(t*8)*.9),r&&(r.rotation.x=Math.sin(t*8)*.9)):(s&&(s.rotation.z=Math.sin(t*1.5)*.15),r&&(r.rotation.z=-Math.sin(t*1.5)*.15))}function sf(i){const t=i==="wood"?ua(64):qr(64),e=i==="wood"?"#8b5a2b":"#7a7f88",n=new mt(Ie("block",()=>new sn(1,1,1)),De(e,{map:t,roughness:i==="stone"?.9:.7}));return n.castShadow=!0,n.receiveShadow=!0,n}class dM{bursts=[];root;budget;constructor(t,e=100){this.root=new se,this.root.name="fx",t.add(this.root),this.budget=e}setBudget(t){this.budget=t}spawn(t,e,n,s,r,o,a=.5){e=Math.min(e,Math.max(4,Math.floor(this.budget/4)));const l=new Float32Array(e*3),c=new Float32Array(e*3),u=new Float32Array(e);for(let g=0;g<e;g++){l[g*3]=t.x,l[g*3+1]=t.y,l[g*3+2]=t.z;const x=Math.random()*Math.PI*2,m=s*(.4+Math.random());c[g*3]=Math.cos(x)*m,c[g*3+1]=a*m+Math.random()*m,c[g*3+2]=Math.sin(x)*m,u[g]=r*(.6+Math.random()*.4)}const h=new Se;h.setAttribute("position",new Te(l,3));const d=new _c({color:n,size:o,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!0}),f=new vd(h,d);if(this.root.add(f),this.bursts.push({points:f,vel:c,life:u,maxLife:r,alive:!0}),this.bursts.length>24){const g=this.bursts.shift();g&&this.disposeBurst(g)}}disposeBurst(t){this.root.remove(t.points),t.points.geometry.dispose(),t.points.material.dispose(),t.alive=!1}hitSparks(t){this.spawn(t,14,16765056,4,.45,.12,.8)}tamingHearts(t){this.spawn(t.clone().add(new I(0,.8,0)),10,16738984,1.2,.9,.18,1.4)}fireBreath(t,e){const n=t.clone().add(e.clone().multiplyScalar(.6));this.spawn(n,16,16736288,3.5,.5,.14,.2)}footDust(t){this.spawn(t.clone().setY(t.y+.05),6,12890256,1.2,.35,.1,.3)}levelUp(t){this.spawn(t.clone().add(new I(0,1,0)),28,15784056,2.5,1.1,.16,2)}update(t){for(const e of this.bursts){if(!e.alive)continue;const n=e.points.geometry.attributes.position,s=n.array;let r=!1;for(let o=0;o<e.life.length;o++){if(e.life[o]-=t,e.life[o]<=0){s[o*3+1]=-999;continue}r=!0,s[o*3]+=e.vel[o*3]*t,s[o*3+1]+=e.vel[o*3+1]*t,s[o*3+2]+=e.vel[o*3+2]*t,e.vel[o*3+1]-=6*t;const a=e.points.material;a.opacity=Math.max(0,e.life[o]/e.maxLife)}n.needsUpdate=!0,r||this.disposeBurst(e)}this.bursts=this.bursts.filter(e=>e.alive)}}function pa(i,t){return i==="auto"?t??"medium":i}function ma(i){return i==="low"?{tier:i,pixelRatioCap:1,shadows:!1,shadowMapSize:0,terrainSegments:40,propBudget:.4,particles:40,anisotropy:1}:i==="high"?{tier:i,pixelRatioCap:1.5,shadows:!0,shadowMapSize:1024,terrainSegments:72,propBudget:.85,particles:140,anisotropy:4}:{tier:"medium",pixelRatioCap:1.25,shadows:!0,shadowMapSize:512,terrainSegments:56,propBudget:.6,particles:90,anisotropy:2}}class fM{samples=[];max=90;slowStreak=0;suggested="medium";push(t){this.samples.push(t),this.samples.length>this.max&&this.samples.shift();const e=this.samples.reduce((n,s)=>n+s,0)/this.samples.length;e>22?this.slowStreak++:this.slowStreak=Math.max(0,this.slowStreak-1),this.slowStreak>45?this.suggested="low":e<14&&this.slowStreak===0?this.suggested="high":e<18&&(this.suggested="medium")}stats(){if(!this.samples.length)return{avgMs:0,p95Ms:0,n:0};const t=[...this.samples].sort((s,r)=>s-r),e=t.reduce((s,r)=>s+r,0)/t.length,n=t[Math.min(t.length-1,Math.floor(t.length*.95))];return{avgMs:e,p95Ms:n,n:t.length}}}function ga(i,t,e){i.setPixelRatio(Math.min(window.devicePixelRatio||1,e.pixelRatioCap)),i.shadowMap.enabled=e.shadows,i.shadowMap.type=Bh,t.castShadow=e.shadows,e.shadows&&(t.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),t.shadow.camera.near=2,t.shadow.camera.far=90,t.shadow.camera.left=-40,t.shadow.camera.right=40,t.shadow.camera.top=40,t.shadow.camera.bottom=-40,t.shadow.bias=-15e-5,t.shadow.normalBias=.04)}function rf(i){let t=0,e=0;const n=new Set;return i.traverse(s=>{const r=s;if(!r.isMesh)return;e++;const o=r.geometry;o?.index?t+=o.index.count/3:o?.attributes?.position&&(t+=o.attributes.position.count/3);const a=Array.isArray(r.material)?r.material:[r.material];for(const l of a){const c=l;for(const u of["map","normalMap","roughnessMap","emissiveMap"]){const h=c[u];h&&n.add(h)}}}),{triangles:Math.round(t),meshes:e,textures:n.size}}const al={full:"./icons/hud/heart-full.svg",half:"./icons/hud/heart-half.svg",empty:"./icons/hud/heart-empty.svg"},pM={sword:"./icons/hud/hotbar-01-sword.svg",dragon_book:"./icons/hud/hotbar-02-book.svg",bread:"./icons/hud/hotbar-03-bread.svg",loop_staff:"./icons/hud/hotbar-04-staff.svg",drumstick:"./icons/hud/hotbar-05-drumstick.svg",tunic:"./icons/hud/hotbar-06-shirt.svg",round_charm:"./icons/hud/hotbar-07-object.svg",block_wood:"./icons/hud/hotbar-wood.svg",block_stone:"./icons/hud/hotbar-stone.svg",empty:""};function mM(i,t,e){i.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("img");s.width=44,s.height=44,s.alt="heart",s.className="heart-img";const r=t-n;r>=1?s.src=al.full:r>0?s.src=al.half:s.src=al.empty,i.appendChild(s)}}function gM(i){const t=i.querySelector('.heart-img:not([src*="empty"])');t&&(t.classList.add("punch"),setTimeout(()=>t.classList.remove("punch"),80))}function xM(i,t,e,n){i.innerHTML="";const s=document.createElement("div");s.className="inv-title",s.textContent="Inventory",i.appendChild(s);const r=document.createElement("div");r.className="hotbar-row",t.forEach((o,a)=>{const l=document.createElement("button");l.type="button",l.className="slot"+(a===e?" selected":""),l.title=o.label,l.setAttribute("aria-label",o.label);const c=pM[o.id]??"";l.innerHTML=`<span class="idx">${a+1}</span>${c?`<img class="icon-img" src="${c}" alt="" width="42" height="42" />`:""}<span class="qty">${o.count}</span><span class="slot-tip">${o.label}</span>`,l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),n?.(a)}),l.addEventListener("pointerdown",u=>u.stopPropagation()),r.appendChild(l)}),i.appendChild(r),of(t[e]?.label??"")}function of(i){const t=document.getElementById("selected-item");t&&(t.textContent=i?`Holding: ${i}`:"")}function Xi(i){const t=document.getElementById("context-prompt");if(t){if(!i){t.classList.remove("show"),t.textContent="";return}t.textContent=i,t.classList.add("show")}}function qi(i){const t=document.getElementById("crosshair");t&&(t.classList.remove("on-target","can-use"),i==="target"&&t.classList.add("on-target"),i==="use"&&t.classList.add("can-use"))}function _M(i,t,e,n=!1){const s=document.getElementById("dmg-layer");if(!s)return;const r=document.createElement("div");r.className="dmg-floater"+(n?" heal":""),r.textContent=e,r.style.left=`${i}px`,r.style.top=`${t}px`,s.appendChild(r),setTimeout(()=>r.remove(),750)}function vM(i){const t=document.getElementById("level-fill"),e=document.getElementById("lev-cur"),n=document.getElementById("lev-next");t&&(t.style.width=`${Math.round(i.player.levelProgress*100)}%`),e&&(e.textContent=String(i.player.level)),n&&(n.textContent=String(i.player.level+1))}function Zs(i){const t=document.getElementById("mode-pill");t&&(i==="safe_build"?(t.textContent="Safe Build",t.className="pill ready"):(t.textContent="Adventure",t.className="pill warn"))}function bi(i,t){const e=document.getElementById("offline-pill");e&&(e.textContent=t,e.className=i?"pill ready":"pill dim")}function Ur(i,t=!1){const e=document.getElementById("detector");e&&(e.textContent=`Tracker: ${i}`,e.className=t?"pill warn":"pill dim")}function Po(i){const t=document.getElementById("objective");t&&(t.textContent=i)}let Th=0;function Kt(i,t=2400){const e=document.getElementById("toast");e&&(e.textContent=i,e.classList.add("show"),window.clearTimeout(Th),Th=window.setTimeout(()=>e.classList.remove("show"),t))}const yM="modulepreload",MM=function(i,t){return new URL(i,t).href},Ah={},bM=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=MM(c,n),c in Ah)return;Ah[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const x=o[g];if(x.href===c&&(!u||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":yM,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((g,x)=>{f.addEventListener("load",g),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};async function SM(i,t){if(i.length===0)return"empty";for(const e of i)if((t[e]??0)>0)return"ready";return"failed"}const wM="0.6.0",xa=wM,EM="Dragon Adventures 0.6.0 rc2 — real castle & great hall, climbable watchtower, cozy cabin & stable",TM=/^\d+\.\d+\.\d+[a-z0-9.-]*$/i;function AM(i){let t;try{t=JSON.parse(i)}catch{return{ok:!1,reason:"json"}}if(!t||typeof t!="object"||Array.isArray(t))return{ok:!1,reason:"json"};const e=t.version;if(typeof e!="string"||!e.trim())return{ok:!1,reason:"missing"};const n=e.trim();return TM.test(n)?{ok:!0,version:n}:{ok:!1,reason:"odd"}}function CM(i,t){return t.ok?t.version!==i:!1}let rc=null,gr=null,Fr=null,ll=!1;function RM(i){gr=i}function Rc(){const i=document.getElementById("title");return!!i&&!i.classList.contains("hidden")}function PM(){try{return new URL("sw.js",document.baseURI).href}catch{return""}}function Pc(i=navigator.serviceWorker.controller){if(!i||!i.scriptURL)return!1;const t=PM();return!!t&&i.scriptURL===t}function qo(i,t){const e=document.getElementById("update-banner");if(!e)return;const n=document.getElementById("update-banner-msg");n&&(n.textContent=t??"Update ready — Save and restart to get the latest Dragon Adventures."),e.classList.toggle("hidden",!i)}async function af(){try{const i=await fetch(new URL("VERSION.json",document.baseURI).toString(),{cache:"no-store"});if(!i.ok)return console.debug("[version-check] non-200",i.status),"";const t=await i.text(),e=AM(t);return e.ok?e.version:(console.debug("[version-check] ignore",e.reason),"")}catch(i){return console.debug("[version-check] network",i),""}}async function Lc(){if(!ll){ll=!0;try{if(gr)try{await gr()}catch{}const i=async()=>{if(navigator.serviceWorker.removeEventListener("controllerchange",i),gr)try{await gr()}catch{}};navigator.serviceWorker.addEventListener("controllerchange",i);const t=Fr??await navigator.serviceWorker.getRegistration();if(t?.waiting&&t.waiting.postMessage({type:"SKIP_WAITING"}),rc)try{await Promise.race([rc(!0),new Promise(e=>setTimeout(e,2e3))])}catch{}else await new Promise(e=>setTimeout(e,500));location.reload()}finally{ll=!1}}}async function oc(i){if(!Pc()){console.debug("[sw] skip update UI — controller is not this build's sw.js",navigator.serviceWorker.controller?.scriptURL);return}const t=await af(),e=t?`v${t}`:"a newer build";if(Rc()){qo(!0,`Update ready: ${e}. Applying…`),await Lc();return}qo(!0,`Update available — tap to update (${e}).`)}function LM(){document.getElementById("btn-update")?.addEventListener("click",()=>{Lc()}),document.getElementById("btn-update-later")?.addEventListener("click",()=>{qo(!1)})}async function Er(){try{const i=Fr??await navigator.serviceWorker.getRegistration();if(!i)return;Fr=i,await i.update(),i.waiting&&await oc()}catch{}}async function Lo(){try{const i=await af();if(!CM(xa,i?{ok:!0,version:i}:{ok:!1,reason:"missing"}))return;if(!Pc()){console.debug("[version-check] skip prompt — not own controller yet"),await Er();return}qo(!0,`Update available — tap to update (v${i}).`),await Er(),(Fr??await navigator.serviceWorker.getRegistration())?.waiting&&Rc()&&await Lc()}catch(i){console.debug("[version-check] self-check swallowed",i)}}async function IM(){if(!("serviceWorker"in navigator)){bi(!1,"Offline: SW unsupported");return}LM();const i=`v${xa}`;for(const t of["title-version","pause-version"]){const e=document.getElementById(t);e&&(e.textContent=i)}try{const{registerSW:t}=await bM(async()=>{const{registerSW:e}=await import("./virtual_pwa-register-BbS-PwHP.js");return{registerSW:e}},[],import.meta.url);rc=t({immediate:!0,onRegisteredSW(e,n){Fr=n??null,Ch(!!n?.active),Er(),Lo(),n&&n.addEventListener("updatefound",()=>{const s=n.installing;s&&s.addEventListener("statechange",()=>{s.state==="installed"&&Pc()&&oc()})})},onNeedRefresh(){oc()},onOfflineReady(){Ch(!0)},onRegisterError(){bi(!1,"Offline: cache failed")}})}catch{bi(!1,"Dev mode (no SW cache)")}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(Er(),Lo())}),window.addEventListener("focus",()=>{Er(),Lo()}),window.setInterval(()=>{Rc()&&Lo()},6e4)}async function Ch(i){try{if(!("caches"in window)){bi(!1,"Offline: no Cache API");return}const t=await caches.keys(),e={};for(const s of t)e[s]=(await(await caches.open(s)).keys()).length;const n=await SM(t,e);n==="ready"?bi(!0,"Offline ready"):n==="empty"?bi(!1,i?"Caching…":"Offline: empty cache"):bi(!1,"Offline: cache failed")}catch{bi(!1,"Offline: cache failed")}}function DM(i=ca){return i.slice(0,5).map((e,n)=>{const s=e.label.replace(/\s*\(.*\)\s*$/,"").trim();return`<kbd>${n+1}</kbd> ${s}`}).join(" · ")}function ks(i,t=ca){const e=t.findIndex(n=>n.id===i);return e>=0?e+1:null}function NM(i,t=ca){const e=[];for(let n=0;n<t.length;n++){const s=n+1,r=t[n].label.replace(/\s*\(.*\)\s*$/,"").trim();!new RegExp(`(?:^|[^0-9])${s}(?:</kbd>)?\\s*${r.split(" ")[0]}`,"i").test(i)&&s<=5&&(new RegExp(`${s}[^\\d]{0,24}${r.split(" ")[0]}`,"i").test(i)||e.push(`slot ${s} expected near "${r}"`))}return e}function Rh(i){const t={x:-Math.sin(i),z:-Math.cos(i)},e={x:-t.z,z:t.x};return{forward:t,right:e}}const _a=document.getElementById("game"),UM=document.getElementById("no-webgl"),lf=document.getElementById("title"),Ph=document.getElementById("pause"),$r=document.getElementById("howto");function FM(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}if(!FM())throw UM.classList.remove("hidden"),new Error("WebGL unavailable");let b=Ld();jr(b);function jr(i){i.player.position={x:.6,y:1.55,z:12.2},i.player.yaw=0,i.player.pitch=-.22,i.companions[0].position={x:2.4,y:0,z:6.2},i.companions[0].tameness=0,i.companions[0].bonded=!1,i.companions[1]&&(i.companions[1].position={x:-18,y:0,z:14}),i.companions[2]&&(i.companions[2].position={x:22,y:0,z:-16}),i.companions[3]&&(i.companions[3].position={x:-14,y:0,z:-24})}const qn=1.55;function es(i){const t=Number.isFinite(i.player.position.y)?i.player.position.y-qn+.2:-1/0,e=zs(i.player.position.x,i.player.position.z,t),n=Number.isFinite(e)?e:0;if(i.player.position.y=n+qn,!Number.isFinite(i.player.position.y)||i.player.position.y<n+.9||i.player.position.y<.5){jr(i);const s=Ee(i.player.position.x,i.player.position.z);i.player.position.y=(Number.isFinite(s)?s:0)+qn}}let ci=!0,as=!0,Bs=0,vn=0,Cn=!0,Tr=0,Lh=0,ri="off";const Ce=new ay;let kn=null;const cf=-60*Math.PI/180,uf=25*Math.PI/180,Zr=-.18,Ih=.12;function ls(i){return Number.isFinite(i)?Math.max(cf,Math.min(uf,i)):Zr}function Dh(i){return Number.isFinite(i)?Math.max(-Ih,Math.min(Ih,i)):0}function Hs(i){i.player.pitch=ls(Zr)}function hf(){b.player.pitch=ls(Zr),Jo(),Bs=performance.now()+250}const Yo=new fM;let be=pa(b.settings.quality,"medium"),rn=ma(be),$o=null,ye=null,Mi=0,Zi=!1,Qi=!1;const Xe=new k_({canvas:_a,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});Xe.setSize(window.innerWidth,window.innerHeight);Xe.outputColorSpace=ke;Xe.toneMapping=Gh;Xe.toneMappingExposure=1.28;const kt=new B_;kt.background=new Mt("#a8d4f5");kt.fog=new ea("#c5ddf2",.005);const zt=new un(70,window.innerWidth/window.innerHeight,.2,900),OM=new wv(15266559,9087856,1.15);kt.add(OM);const Oi=new Av(16774624,1.35);Oi.position.set(32,48,20);Oi.target.position.set(0,0,2);kt.add(Oi);kt.add(Oi.target);const zM=new Cv(11585752,.42);kt.add(zM);const Or=new Cd(16751168,0,9,1.6);Or.name="cabinFireLight";kt.add(Or);const va=new Cd(16756832,0,28,1.4);va.name="greatHallLight";kt.add(va);ga(Xe,Oi,rn);$o=ef(kt,be);kt.add($o);ye=new Qd(be);kt.add(ye.root);const Wn=new dM(kt,rn.particles);let Nh=0,cl=0;const jo=aM();zt.add(jo);jo.position.set(.25,-.28,-.4);kt.add(zt);const Uh=document.getElementById("title-hero-preview");Uh&&(Uh.innerHTML='<span class="hero-emoji">🐉</span>Feed a dragon · build a camp · fly when ready');const Ni=new Map,ns=new Map,Io=new Map,ac=[];function kM(){ac.length=0;for(const i of b.blocks)ac.push(new hi(new I(i.x,i.y,i.z),new I(i.x+1,i.y+1,i.z+1)))}const Fh={x:qt.x,z:qt.z};function BM(){const i=kt.getObjectByName("castleExterior");if(!i)return{ok:!1,cx:0,cy:0,width:0,height:0,bottom:1,top:0,horizonY:.5};i.updateWorldMatrix(!0,!0);const t=new hi().setFromObject(i),e=[new I(t.min.x,t.min.y,t.min.z),new I(t.min.x,t.min.y,t.max.z),new I(t.min.x,t.max.y,t.min.z),new I(t.min.x,t.max.y,t.max.z),new I(t.max.x,t.min.y,t.min.z),new I(t.max.x,t.min.y,t.max.z),new I(t.max.x,t.max.y,t.min.z),new I(t.max.x,t.max.y,t.max.z)];let n=1,s=0,r=1,o=0,a=!1;for(const u of e){const h=u.clone().project(zt);if(h.z<-1||h.z>1)continue;const d=(h.x+1)/2,f=1-(h.y+1)/2;n=Math.min(n,d),s=Math.max(s,d),r=Math.min(r,f),o=Math.max(o,f),a=!0}const c=1-(new I(b.player.position.x-Math.sin(b.player.yaw)*400,b.player.position.y,b.player.position.z-Math.cos(b.player.yaw)*400).project(zt).y+1)/2;return a?{ok:!0,cx:(n+s)/2,cy:(r+o)/2,width:Math.max(0,s-n),height:Math.max(0,o-r),bottom:o,top:r,horizonY:c}:{ok:!1,cx:0,cy:0,width:0,height:0,bottom:1,top:0,horizonY:c}}function HM(i=25){if(!ye)return 0;let t=0;const e=b.player.position.x,n=b.player.position.z,s=new Ot,r=new Ot,o=new I;return ye.root.updateWorldMatrix(!0,!0),ye.root.traverse(a=>{if(!a.name.startsWith("trees_"))return;const l=a;if(l.isInstancedMesh){l.updateWorldMatrix(!0,!1);for(let c=0;c<l.count;c++)l.getMatrixAt(c,s),r.multiplyMatrices(l.matrixWorld,s),o.setFromMatrixPosition(r),Math.hypot(o.x-e,o.z-n)<=i&&t++}}),t}function GM(i=8){if(!ye)return[];const t=b.player.position.x,e=b.player.position.z,n=new Ot,s=new Ot,r=new I,o=[];return ye.root.updateWorldMatrix(!0,!0),ye.root.traverse(a=>{if(!a.name.startsWith("trees_"))return;const l=a;if(l.isInstancedMesh){l.updateWorldMatrix(!0,!1);for(let c=0;c<l.count;c++){l.getMatrixAt(c,n),s.multiplyMatrices(l.matrixWorld,n),r.setFromMatrixPosition(s);const u=Math.hypot(r.x-t,r.z-e);o.push({dist:u,x:r.x,z:r.z,name:a.name})}}}),o.sort((a,l)=>a.dist-l.dist),o.slice(0,i)}function Do(i,t,e){const n=e-qn;if(Ry(i,t,n))return!0;for(const s of ac)if(i>s.min.x-.25&&i<s.max.x+.25&&t>s.min.z-.25&&t<s.max.z+.25&&e-1.55<s.max.y&&e>s.min.y)return!0;return!1}function zr(){b.monsters=yn(b.monsters);for(const i of b.monsters){let t=Ni.get(i.id);t||(t=lM(),Ni.set(i.id,t),kt.add(t)),t.visible=i.alive,t.position.set(i.position.x,Ee(i.position.x,i.position.z),i.position.z);let e=t.getObjectByName("blobShadow");e||(e=new mt(new Dn(.45,10),new Yn({color:"#000000",transparent:!0,opacity:.25,depthWrite:!1})),e.rotation.x=-Math.PI/2,e.name="blobShadow",t.add(e)),e.position.set(0,.03,0),e.visible=!rn.shadows,i.hostile&&i.alive&&t.lookAt(b.player.position.x,t.position.y,b.player.position.z)}}const xr=new Map,Cs={dragonDraw:110,dragonShadow:16,dragonLod:18,monsterDraw:75,monsterShadow:10,monsterLod:16};function Js(){for(const i of b.companions){if(i.kind!=="dragon")continue;let t=ns.get(i.id);t||(t=uM(i.palette),ns.set(i.id,t),kt.add(t)),b.player.mountedCompanionId===i.id&&b.player.mount!=="grounded"?t.visible=!1:(t.visible=!0,t.position.set(i.position.x,Ee(i.position.x,i.position.z)+.02,i.position.z));let e=t.getObjectByName("blobShadow");e||(e=new mt(new Dn(.55,12),new Yn({color:"#000000",transparent:!0,opacity:.28,depthWrite:!1})),e.rotation.x=-Math.PI/2,e.name="blobShadow",t.add(e)),e.position.set(0,.02,0),e.visible=!rn.shadows}}function ya(){const i=new Set(b.blocks.map(t=>t.id));for(const[t,e]of Io)i.has(t)||(kt.remove(e),Io.delete(t));for(const t of b.blocks){if(Io.has(t.id))continue;const e=sf(t.material);e.position.set(t.x+.5,t.y+.5,t.z+.5),kt.add(e),Io.set(t.id,e)}kM()}function Je(){mM(document.getElementById("hearts"),b.player.hearts,b.player.maxHearts),xM(document.getElementById("hotbar"),b.player.hotbar,b.player.selectedHotbar,s=>{b.player.selectedHotbar=s,Ce.ui(),Je()}),vM(b),Zs(b.player.mode);const i=b.player.monstersDefeated,t=b.companions.filter(s=>s.bonded).length,e=Nc(b.blocks);b.flags.buildGuideComplete?b.player.mode==="safe_build"?Po(`Safe Build · Pets ${t}/3 · Press R Ready for battle · Defeat later (${i}/5)`):b.flags.firstObjectiveComplete?Po(`Stars ${b.player.stars} · Pets ${t}/3 · Explore & build`):Po(`Adventure · Defeat monsters (${i}/5) · Pets ${t}/3 · E mount · Space fly`):Po(`Build guide: place ${Math.min(e,3)}/3 blocks on the yellow pad (keys 4–5) · then press R when ready · Pets ${t}/3`);const n=b.player.hotbar[b.player.selectedHotbar];of(n?.label??"")}const kr=new oy(_a,()=>as||ci);function Ic(i){as=i,ci=i,i?(Ph.classList.remove("hidden"),kr.releaseLock()):(Ph.classList.add("hidden"),lf.classList.add("hidden"),$r.classList.add("hidden"),document.getElementById("install-panel")?.classList.add("hidden"))}function VM(){if(kn&&(kt.remove(kn),kn.geometry.dispose(),kn.material.dispose(),kn=null),ri==="off")return;const i=be==="low"?200:400,t=new Float32Array(i*3);for(let s=0;s<i;s++)t[s*3]=(Math.random()-.5)*60,t[s*3+1]=Math.random()*30,t[s*3+2]=(Math.random()-.5)*60;const e=new Se;e.setAttribute("position",new Te(t,3));const n=new _c({color:ri==="snow"?16777215:8956620,size:ri==="snow"?.12:.06,transparent:!0,opacity:.75,depthWrite:!1});kn=new vd(e,n),kt.add(kn)}async function WM(){const i=document.getElementById("build-meta");i&&(i.textContent=`${EM} · v${xa}`);const t=await Wv();if(t.note){const l=document.getElementById("test-import-note");l&&(l.textContent=t.note,l.classList.remove("hidden")),Kt(t.note)}const e=await Kv();e?(b=Xv(e,Ee),b.monsters=yn(b.monsters),es(b),t.imported||Kt(e.version<2?"Save upgraded for the bigger world":"Save restored")):(jr(b),es(b)),await Qv(),zr(),Js(),ya(),zt.position.set(b.player.position.x,b.player.position.y,b.player.position.z),zt.rotation.order="YXZ",zt.rotation.y=b.player.yaw,zt.rotation.x=b.player.pitch;const n=kt.getObjectByName("skyDome");n&&n.position.copy(zt.position),Hs(b),b.player.pitch=ls(b.player.pitch),Jo(),be=pa(b.settings.quality,Yo.suggested),rn=ma(be),ga(Xe,Oi,rn),Wn.setBudget(rn.particles);try{await Ud(be)}catch(l){console.warn("art textures failed; using procedural fallback",l)}yf(),Js(),zr();const s=rf(kt);window.__DA_PERF={tier:be,setting:b.settings.quality,triangles:s.triangles,drawCallsApprox:s.meshes,textures:s.textures,note:"NOT a Chromebook measurement; headless/proxy stats only"};const r=document.getElementById("btn-quality");r&&(r.textContent=vf(b.settings.quality)+" (live)"),Je(),RM(async()=>{await Xr(b)});const o=document.getElementById("help-hotbar-slots");o&&(o.innerHTML=DM(b.player.hotbar));const a=NM(document.getElementById("howto")?.innerText??"",b.player.hotbar);a.length&&console.warn("help/hotbar mismatch",a),await IM()}function XM(i){let t=null,e=i;const n=b.player.position;for(const s of yn(b.monsters)){if(!s.alive)continue;const r=Wr(s.position,n);r<e&&(e=r,t=s)}return t}function Dc(i){let t=null,e=i;for(const n of b.companions){if(n.kind!=="dragon")continue;const s=Wr(n.position,b.player.position);s<e&&(e=s,t=n)}return t}function Ma(){const i=new I;return zt.getWorldDirection(i),i}function df(i=3.5,t=.82){const e=Ma(),n=zt.getWorldPosition(new I);let s=null,r=i;for(const o of yn(b.monsters))if(o.alive)for(const a of[.35,.85,1.25]){const l=new I(o.position.x,Ee(o.position.x,o.position.z)+a,o.position.z),c=l.clone().sub(n),u=c.length();if(u>i||u<.01)continue;const h=c.dot(e);if(h<0)continue;const f=n.clone().addScaledVector(e,Math.min(h,i)).distanceTo(l);!(c.normalize().dot(e)>=t)&&f>.9||u<r&&(r=u,s=o)}return s}function ff(i,t=.45){const e=Ma(),n=zt.getWorldPosition(new I);let s=null,r=i;for(const o of b.companions){if(o.kind!=="dragon"||b.player.mountedCompanionId===o.id)continue;const a=Ee(o.position.x,o.position.z)+.55,l=new I(o.position.x,a,o.position.z).sub(n),c=l.length();c>i||(l.normalize(),!(l.dot(e)<t)&&c<r&&(r=c,s=o))}return s}function qM(i){const t=Ni.get(i);t&&t.traverse(e=>{const n=e;if(!n.isMesh)return;const s=n.material;if(!s?.color)return;const r=s.color.getHex();s.color.set("#ff6060"),setTimeout(()=>s.color.setHex(r),120)})}function YM(){if(Tr>0)return!1;Tr=.35,Ce.swing();const i=df(3.5,.75);if(!i)return Kt("Swing! Look at a nearby monster (glow means in reach)"),!1;const t=ey(yn(b.monsters),i.id,1,b.player.mode,ci,as);if(b.monsters=t.monsters,!t.hit)return Kt("Safe Build — finish the build guide, then press R"),!1;Ce.hit(),qM(i.id);{const s=i.position.x-b.player.position.x,r=i.position.z-b.player.position.z,o=Math.hypot(s,r)||1;i.position.x+=s/o*.55,i.position.z+=r/o*.55;const a=b.monsters.find(l=>l.id===i.id);a&&(a.position={...i.position})}const e=Ee(i.position.x,i.position.z)+1.1;Wn.hitSparks(new I(i.position.x,e,i.position.z));const n=$M(i.position.x,e,i.position.z);if(n&&_M(n.x,n.y,"-1"),t.becameHostile&&(Kt("It will fight back now!"),Ur("hostile retaliation!",!0)),t.defeated){const s=b.player.stars;b=Nv(b),Ce.win(),Kt(`Monster defeated! (${b.player.monstersDefeated}/5)`),b.player.stars>s&&Wn.levelUp(new I(b.player.position.x,b.player.position.y,b.player.position.z))}return zr(),Je(),!0}function $M(i,t,e){const n=new I(i,t,e).project(zt);return n.z>1?null:{x:(n.x*.5+.5)*window.innerWidth,y:(-n.y*.5+.5)*window.innerHeight}}const fe={x:2.5,z:6.2,r:2.6};function pf(){const i=Ma(),t=zt.getWorldPosition(new I);let e=b.player.position.x+i.x*2.8,n=b.player.position.z+i.z*2.8;for(let c=.6;c<=5.5;c+=.25){const u=t.x+i.x*c,h=t.y+i.y*c,d=t.z+i.z*c,f=Ee(u,d);if(h<=f+.35){e=u,n=d;break}}const s=e-fe.x,r=n-fe.z;if(Math.hypot(s,r)<fe.r+1.4){e=e+(fe.x-e)*(1-.55)*.15,n=n+(fe.z-n)*(1-.55)*.15;const u=e-fe.x,h=n-fe.z,d=Math.hypot(u,h);d>fe.r&&(e=fe.x+u/d*fe.r,n=fe.z+h/d*fe.r)}const o=Math.floor(e),a=Math.floor(n),l=Math.max(0,Math.floor(Ee(o+.5,a+.5)));return{x:o,y:l,z:a}}function mf(i,t,e){return`${i}|${t}|${e}`}function Zo(i,t){return Math.hypot(i+.5-fe.x,t+.5-fe.z)<=fe.r+.55}function Nc(i){let t=0;for(const e of i)if(Zo(e.x,e.z))t++;else{let n=!1;for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1]])if(Zo(e.x+s,e.z+r)){n=!0;break}n&&t++}return t}function jM(){const i=new Set;for(const t of b.blocks)i.add(mf(t.x,t.y,t.z));return i}function Oh(i){const t=jM();Math.floor(b.player.position.x),Math.floor(b.player.position.z);const e=[];for(let r=Math.floor(fe.z-fe.r)-1;r<=Math.ceil(fe.z+fe.r)+1;r++)for(let o=Math.floor(fe.x-fe.r)-1;o<=Math.ceil(fe.x+fe.r)+1;o++){if(!Zo(o,r))continue;const a=Math.max(0,Math.floor(Ee(o+.5,r+.5)));if(t.has(mf(o,a,r)))continue;const l=Math.hypot(o-i.x,r-i.z);e.push({x:o,z:r,dist:l})}if(e.sort((r,o)=>r.dist-o.dist),!e.length)return null;const n=e[0],s=Math.max(0,Math.floor(Ee(n.x+.5,n.z+.5)));return{x:n.x,y:s,z:n.z}}const Ei=sf("wood");Ei.material=new oe({color:"#f0e080",transparent:!0,opacity:.45,depthWrite:!1,roughness:.8});Ei.visible=!1;kt.add(Ei);function ZM(){const i=b.player.hotbar[b.player.selectedHotbar];if(i.id!=="block_wood"&&i.id!=="block_stone"){Ei.visible=!1;return}const t=pf();Ei.visible=!0,Ei.material.color.set(i.id==="block_wood"?"#c4a06a":"#9aa0a8"),Ei.position.set(t.x+.5,t.y+.5,t.z+.5)}function gf(){const i=b.player.hotbar[b.player.selectedHotbar];if(i.id!=="drumstick")return i.id==="bread"&&Kt(`Bread heals you (press F when hurt). Use drumstick (${ks("drumstick")}) to feed dragons.`),!1;if(i.count<=0)return Kt("No drumsticks left"),!1;const t=ff(4.5)||Dc(3.8);if(!t)return Kt("No dragon in range — walk closer and look at it"),!1;if(t.bonded)return Kt(`${t.name} is already your pet — press E to mount`),!1;const e=Uv(b.companions,t.id,1);if(b.companions=e.companions,e.rejected==="max_companions")return Kt("You already have 3 companions"),!1;if(i.count-=1,Ce.tame(),Wn.tamingHearts(new I(t.position.x,Ee(t.position.x,t.position.z)+.6,t.position.z)),e.bondedNow){const n=b.companions.filter(s=>s.bonded).length;Kt(`Tamed ${t.name}! Pets ${n}/3 — press E to mount, Space to fly`)}else{const n=b.companions.find(s=>s.id===t.id)?.tameness??0;Kt(`Fed ${t.name}… ${Math.round(n*100)}%`)}return Je(),!0}function xf(){const i=b.player.hotbar[b.player.selectedHotbar];if(i.id!=="block_wood"&&i.id!=="block_stone")return!1;if(i.count<=0)return Kt(`Out of blocks — pick Wood (${ks("block_wood")}) or Stone (${ks("block_stone")})`),!1;let t=pf();const e=i.id==="block_wood"?"wood":"stone";let n=nl(b.blocks,t,e,b.player.mode,ci);if(!n.ok&&n.reason==="occupied"){const o=Oh(t);o&&(t=o,n=nl(b.blocks,t,e,b.player.mode,ci))}if(!n.ok&&!b.flags.buildGuideComplete){const o=Oh(t);o&&(t=o,n=nl(b.blocks,t,e,b.player.mode,ci))}if(!n.ok)return Kt(n.reason==="occupied"?"That spot is taken — try next to it":n.reason==="full"?"Build limit reached":"Cannot place — unpause and look at the yellow pad"),!1;b.blocks=n.blocks,i.count-=1,Ce.place();const s=Nc(b.blocks),r=Zo(t.x,t.z);return b.flags.buildGuideComplete?Kt("Block placed"):(r||s>0?Kt(`Placed on pad! ${Math.min(s,3)}/3 — keep going`):Kt(`Block placed. Aim at the yellow pad for the build guide (${s}/3)`),s>=3&&(b.flags.buildGuideComplete=!0,Kt("Build guide done! Press R when you are Ready to Battle"))),ya(),Je(),!0}function JM(){const i=Ma(),t=zt.getWorldPosition(new I);let e=null,n=4;for(const r of b.blocks){const o=r.x+.5,a=r.y+.5,l=r.z+.5,c=new I(o,a,l).sub(t),u=c.length();u>4||(c.normalize(),!(c.dot(i)<.55)&&u<n&&(n=u,e=r.id))}if(!e)return Kt("Look at a block you placed, then press X to remove"),!1;const s=b.blocks.find(r=>r.id===e);if(b.blocks=b.blocks.filter(r=>r.id!==e),s){const r=s.material==="wood"?"block_wood":"block_stone",o=b.player.hotbar.find(a=>a.id===r);o&&(o.count=Math.min(99,o.count+1))}return Ce.place(),ya(),Je(),Kt("Block removed"),!0}function KM(){const i=b.player.hotbar[b.player.selectedHotbar];return i.id==="drumstick"||i.id==="bread"?gf():i.id==="block_wood"||i.id==="block_stone"?xf():(Kt(`Select drumstick (${ks("drumstick")}) to feed, or Wood/Stone (${ks("block_wood")}/${ks("block_stone")}) to build`),!1)}function QM(){if(ci||as){Xi(null),qi("default"),Ei.visible=!1;return}ZM();const i=b.player.hotbar[b.player.selectedHotbar],t=df(3.5,.75);for(const[n,s]of Ni){const r=t&&t.id===n;s.traverse(o=>{const a=o;if(!a.isMesh)return;const l=a.material;l?.emissive&&l.emissive.set(r?"#402010":"#000000"),l&&"emissiveIntensity"in l&&(l.emissiveIntensity=r?.35:0)})}if(t&&i.id==="sword"){qi("target"),Xi(t.hostile?"Left-click: attack (hostile!)":"Left-click: attack (still peaceful until hit)");return}const e=ff(4.2);if(e&&i.id==="drumstick"&&!e.bonded&&i.count>0){qi("use"),Xi(`Right-click: feed ${e.name} (drumstick)`);return}if(e?.bonded&&b.player.mount==="grounded"){qi("use"),Xi(`E: ride ${e.name} · Space: fly · land low · E: dismount`);return}if((i.id==="block_wood"||i.id==="block_stone")&&i.count>0){qi("use"),Xi("Right-click: place block · X: remove looking-at block");return}if(i.id==="bread"&&b.player.hearts<b.player.maxHearts){qi("use"),Xi("Press F: eat bread to heal");return}qi("default"),Xi(null)}function t1(){const{nearbyIds:i}=Nd(yn(b.monsters),b.player.position,12);i.length?Ur(`monster nearby (${i.length})`,!0):Ur("clear")}function e1(i){const t=kr.sample();if(t.pause){const p=document.getElementById("install-panel");if(p&&!p.classList.contains("hidden")){Uc();return}const _=document.getElementById("howto");if(_&&!_.classList.contains("hidden")){_.classList.add("hidden");return}if(!ci&&!as){Ic(!0);return}}if(ci||as){const p=performance.now()/1e3;for(const[,_]of ns)Eh(_,p,"idle");Wn.update(i);return}if(t.slot!=null&&(b.player.selectedHotbar=t.slot,Je()),t.readyBattle)if(!b.flags.buildGuideComplete&&b.blocks.length<3){const p=performance.now();if(p>cl)cl=p+4e3,Kt("Place 3 blocks on the yellow pad first — press R again within 4s to skip");else{cl=0,b.flags.buildGuideComplete=!0;const _=ec(b.player.mode,"adventure");b.player.mode=_.mode,_.flagsPatch&&(b.flags={...b.flags,..._.flagsPatch}),b.monsters=Wo(yn(b.monsters)),Zs(b.player.mode),Hs(b),Bs=performance.now()+400,Kt("Skipped build guide — Adventure (monsters peaceful until you hit them)"),Ce.ui(),Je()}}else{const p=ec(b.player.mode,"adventure");b.player.mode=p.mode,p.flagsPatch&&(b.flags={...b.flags,...p.flagsPatch}),b.monsters=Wo(yn(b.monsters)),Zs(b.player.mode),Hs(b),Bs=performance.now()+400,Kt("Adventure — monsters stay peaceful until you hit them"),Ce.ui(),Je()}t.recenter&&hf();const e=.0022;if(performance.now()>=Bs){const p=Dh((t.lookDx+t.touchLookDx*40)*e),_=Dh((t.lookDy+t.touchLookDy*40)*e);b.player.yaw-=p,b.player.pitch-=_}b.player.pitch=ls(b.player.pitch);const n=b.player.mount==="flying",s=b.player.mount==="mounted"||n,r=(t.sprint?9:5)*(n?1.35:1),o=Rh(b.player.yaw),a=new I(o.forward.x,0,o.forward.z),l=new I(o.right.x,0,o.right.z),c=new I;if(t.forward&&c.add(a),t.back&&c.sub(a),t.left&&c.sub(l),t.right&&c.add(l),c.lengthSq()>0&&c.normalize().multiplyScalar(r*i),n){const p=Ee(b.player.position.x,b.player.position.z),_=b.player.position.y-p,y=_>12?1.55:_>6?1.25:1;t.jump&&(b.player.position.y+=6*i),t.jump||(b.player.position.y-=1.2*i);const v=b.player.position.x+c.x*y,P=b.player.position.z+c.z*y,E=ye?ye.softClamp(v,P):{x:v,z:P};b.player.position.x=E.x,b.player.position.z=E.z,b.player.position=ih(b.player.position);const C=b.player.position.y-Ee(b.player.position.x,b.player.position.z);b.player.mount=kv(b.player.mount,C)}else{const p=b.player.position.x+c.x,_=b.player.position.z+c.z,y=ye?ye.softClamp(p,_):{x:p,z:_},v=b.player.position.y;Do(b.player.position.x,b.player.position.z,v)||!Do(y.x,y.z,v)?(b.player.position.x=y.x,b.player.position.z=y.z):Do(y.x,b.player.position.z,v)?Do(b.player.position.x,y.z,v)||(b.player.position.z=y.z):b.player.position.x=y.x,b.player.position=ih(b.player.position);const E=zs(b.player.position.x,b.player.position.z,b.player.position.y-qn)+qn;if(Cn&&E<b.player.position.y-.35&&(Cn=!1,vn=0,Zi=!0,Mi=0),Cn){if(b.player.position.y=E,t.jump)if(s){b.player.mount=zv(b.player.mount),Ce.mount();{const M=Rh(b.player.yaw);Wn.fireBreath(new I(b.player.position.x,b.player.position.y,b.player.position.z),new I(M.forward.x,.1,M.forward.z))}Kt("Flying! Hold Space to climb · E dismount anytime (soft land)")}else vn=7.5,Cn=!1,Zi=!0,Mi=0}else if(vn-=(Qi?6:22)*i,Qi&&(vn=Math.max(vn,-4.5)),Mi=Math.max(Mi,-vn),b.player.position.y+=vn*i,b.player.position.y<=E){const R=Zi&&Mi>10;b.player.position.y=E,vn=0,Cn=!0,Qi=!1,R?(b.player.hearts=Math.max(1,sh(b.player.hearts,1)),Ce.hit(),Kt("Oof — soft landing. Hearts safe (never zero from falls)"),Je()):Zi&&Mi>3&&Ce.ui(),Zi=!1,Mi=0}const C=Vd(b.player.position.x,b.player.position.z),w=b.player.position.y<E-8||b.player.position.y<-15,S=C!==null&&b.player.position.y<C-.5&&!n;if(w||S){const M=Math.atan2(b.player.position.z,b.player.position.x),R=Math.max(8,Math.hypot(b.player.position.x,b.player.position.z)-12),U=Math.cos(M)*R,N=Math.sin(M)*R,O=Ee(U,N)+qn;b.player.position={x:U,y:O,z:N},vn=0,Cn=!0,Qi=!1,Kt("Rescued onto solid ground")}}if(t.toggleMount){if(b.player.mount==="grounded"){const p=Dc(4.5);if(p?.bonded){const _=Fv(b.companions,p.id,b.player.mount);_.ok&&(b.player.mount=_.mount,b.player.mountedCompanionId=_.mountedCompanionId,Ce.mount(),Kt(`Mounted ${p.name}`))}else Kt("Tame a dragon first — select Drumstick (2), look at it, right-click")}else{const p=b.player.position.y-Ee(b.player.position.x,b.player.position.z),_=Ov(b.player.mount,p);_.ok&&(b.player.mount="grounded",b.player.mountedCompanionId=null,Hs(b),b.player.pitch=ls(b.player.pitch),_.softLanding?(Qi=!0,Cn=!1,Zi=!0,vn=-1.5,Kt("Gliding down — soft landing")):Kt("Dismounted"))}Js()}if(t.attack&&YM(),t.place&&KM(),t.removeBlock&&JM(),t.interact){const p=b.player.hotbar.find(_=>_.id==="bread"&&_.count>0);p&&b.player.hearts<li?(p.count-=1,b.player.hearts=Bv(b.player.hearts,1),Ce.ui(),Kt("Ate bread — heart restored"),Je()):b.player.hotbar[b.player.selectedHotbar]?.id==="drumstick"&&gf()}QM(),iy(yn(b.monsters),b.player.position),t1();const u=sy(yn(b.monsters),b.player.position,1.6,.35*i);if(u.damageToPlayer>0&&b.player.mode==="adventure"){const p=b.player.hearts;b.player.hearts=sh(b.player.hearts,u.damageToPlayer),b.player.hearts<p&&(Ce.hurt(),gM(document.getElementById("hearts")),Je(),b.player.hearts<=0&&(b.player.hearts=li,jr(b),es(b),Kt("You rested at camp — hearts restored"),Je()))}zt.position.set(b.player.position.x,b.player.position.y+(n?.35:0),b.player.position.z),zt.rotation.order="YXZ",zt.rotation.y=b.player.yaw,zt.rotation.x=b.player.pitch;{const p=kt.getObjectByName("skyDome");p&&p.position.copy(zt.position)}Tr>0?(Tr-=i,jo.rotation.x=-Math.sin((1-Tr/.35)*Math.PI)*.9):jo.rotation.x=Math.sin(performance.now()/500)*.03;const h=performance.now()/1e3,d=(p,_)=>{p.userData.castOn!==_&&(p.userData.castOn=_,p.traverse(y=>{const v=y;v.isMesh&&v.name!=="blobShadow"&&(v.castShadow=_&&rn.shadows)}))};for(const[p,_]of ns){const y=b.player.mountedCompanionId===p&&b.player.mount!=="grounded",v=Math.hypot(_.position.x-b.player.position.x,_.position.z-b.player.position.z);_.visible=!y&&v<(be==="low"?75:Cs.dragonDraw),d(_,v<Cs.dragonShadow);const P=v>Cs.dragonLod&&b.player.mountedCompanionId!==p;if(_.userData.lodFar!==P){_.userData.lodFar=P;const C=_.getObjectByName("dBody"),w=_.getObjectByName("dLod");C&&w&&(C.visible=!P,w.visible=P)}const E=b.companions.find(C=>C.id===p);if(E&&!y&&(Math.abs(_.position.x-E.position.x)>.001||Math.abs(_.position.z-E.position.z)>.001)){const C=Ee(E.position.x,E.position.z);_.position.set(E.position.x,zs(E.position.x,E.position.z,C+.3)+.02,E.position.z)}}for(const[p,_]of Ni){const y=b.monsters.find(E=>E.id===p),v=Math.hypot(_.position.x-b.player.position.x,_.position.z-b.player.position.z);_.visible=!!y?.alive&&v<Cs.monsterDraw,d(_,v<Cs.monsterShadow);const P=v>Cs.monsterLod&&!y?.hostile;if(_.userData.lodFar!==P){_.userData.lodFar=P;for(const E of _.children)E.name==="mLod"?E.visible=P:E.name!=="blobShadow"&&(E.visible=!P)}}for(const[p,_]of ns){if(!_.visible)continue;const y=b.player.mountedCompanionId===p,v=y&&n?"fly":y&&s?"walk":n&&y?"glide":"idle";_.userData.lodFar||Eh(_,h,v);const P=b.companions.find(C=>C.id===p),E=xr.get(p);E!==void 0&&!y?_.rotation.y=E+Math.sin(h*.4)*.06:P?.bonded&&!y&&(_.rotation.y=Math.sin(h*.7)*.2)}for(const[p,_]of Ni){if(!_.visible)continue;const v=b.monsters.find(P=>P.id===p)?.hostile?"attack":"idle";hM(_,h,v),_.position.y=Ee(_.position.x,_.position.z)}const f=kt.getObjectByName("chimneySmoke");f&&f.children.forEach((p,_)=>{const y=(h*.25+_/p.parent.children.length)%1;p.position.y=4.6+y*1.8,p.position.x=-1.7+Math.sin(h*.6+_)*.15+y*.5,p.scale.setScalar(.8+y*1.6);const v=p.material;v&&"opacity"in v&&(v.transparent=!0,v.opacity=.38*(1-y),v.depthWrite=!1)});const g=kt.getObjectByName("waterSurface");if(g){const p=g.material;p.opacity=.78+Math.sin(h*1.5)*.04}if(Wn.update(i),!n&&c.lengthSq()>0&&performance.now()-Nh>280&&(Nh=performance.now(),Wn.footDust(new I(b.player.position.x,Ee(b.player.position.x,b.player.position.z),b.player.position.z))),b.player.mountedCompanionId){const p=b.companions.find(_=>_.id===b.player.mountedCompanionId);p&&(p.position={x:b.player.position.x,y:0,z:b.player.position.z})}const x=nn(b.player.position.x,b.player.position.z);kt.background=new Mt(x.skyTint);const m=(be==="low"?1.25:be==="high"?.9:1)*x.fogDensity;kt.fog&&kt.fog.isFogExp2&&(kt.fog.color.set(x.fogColor),kt.fog.density=Math.min(m*.55,.005));{const p=Math.hypot(b.player.position.x,b.player.position.z),_=[...qd,...Yd];let y=_[0],v=1/0;for(const U of _){const N=Math.hypot(b.player.position.x-U.x,b.player.position.z-U.z);N<v&&(v=N,y=U)}const P=document.getElementById("nav-biome");if(P){const U=v<80?` · ${y.label} ${Math.round(v)}m`:"";P.textContent=`${x.label} · ${Math.round(p)} m from home${U}`}const E=Math.atan2(-b.player.position.x,-b.player.position.z),C=Math.atan2(y.x-b.player.position.x,y.z-b.player.position.z),w=v<60,S=(w?C:E)-b.player.yaw,M=document.getElementById("nav-compass");M&&(M.style.transform=`rotate(${S*180/Math.PI}deg)`,M.title=w?y.label:"Home"),p>40&&v>25?Ur(`Home ${Math.round(p)}m`,!1):v<25&&Ur(`${y.label}`,!1);const R=kt.getObjectByName("terrain");if(R){By(R,{x:b.player.position.x,z:b.player.position.z},_);const U=R.getObjectByName("castleLandmark");U&&Qy(U,b.player.position.x,b.player.position.z,va);{const O=Dy(Ee(qe.x,qe.z)),Y=Math.hypot(b.player.position.x-O.x,b.player.position.z-O.z);Or.position.copy(O),Or.intensity=Y<12?9*(.92+Math.sin(performance.now()/90)*.04+Math.sin(performance.now()/37)*.04):0}const N=R.getObjectByName("cabinDoor");if(N){const O=new I;N.getWorldPosition(O);const Y=Math.hypot(b.player.position.x-O.x,b.player.position.z-O.z);Oy(N,Y<3.2?1:0,i)}}}if(kn){const p=kn.geometry.attributes.position,_=p.array,y=ri==="snow"?4:12;for(let v=0;v<_.length;v+=3)_[v+1]-=y*i,_[v+1]<0&&(_[v+1]=28),_[v]+=b.player.position.x*0;kn.position.set(b.player.position.x,0,b.player.position.z),p.needsUpdate=!0}performance.now()-Lh>8e3&&(Lh=performance.now(),Xr(b))}window.addEventListener("resize",()=>{zt.aspect=window.innerWidth/window.innerHeight,zt.updateProjectionMatrix(),Xe.setSize(window.innerWidth,window.innerHeight)});_a.addEventListener("contextmenu",i=>i.preventDefault());function _f(){const i=document.getElementById("install-panel"),t=document.getElementById("install-offline-status");if(t){const e=document.getElementById("offline-pill")?.textContent||"unknown";t.textContent=`Offline status: ${e}. Bookmark this page after Offline ready. ZIP is a static backup — not a file:// app.`}$r.classList.add("hidden"),i?.classList.remove("hidden"),i?.querySelector("button")?.focus()}function Uc(){document.getElementById("install-panel")?.classList.add("hidden")}document.getElementById("btn-install-info")?.addEventListener("click",_f);document.getElementById("btn-install-pause")?.addEventListener("click",_f);document.getElementById("btn-install-close")?.addEventListener("click",()=>Uc());window.addEventListener("keydown",i=>{if(i.code!=="Escape")return;const t=document.getElementById("install-panel");t&&!t.classList.contains("hidden")&&(i.preventDefault(),Uc())});function Jo(){zt.position.set(b.player.position.x,b.player.position.y,b.player.position.z),zt.rotation.order="YXZ",zt.rotation.y=b.player.yaw,zt.rotation.x=b.player.pitch}document.getElementById("btn-start").onclick=async()=>{await Ce.unlock(),lf.classList.add("hidden"),!b.flags.readyToBattleAcknowledged&&b.blocks.length===0&&!b.companions.some(i=>i.bonded)&&(jr(b),es(b),Js(),zr()),Hs(b),b.player.pitch=ls(Zr),Jo(),Bs=performance.now()+900,kr.armPointerLockIgnore(),Ic(!1),kr.requestLock(),b.flags.tutorialSeen=!0,b.flags.welcomeShownOnce?Kt("Welcome back — pad · pets · explore",1800):(Kt("Welcome! Build on the yellow pad, feed a dragon, then explore the cabin, stable, tower & castle.",4200),b.flags.welcomeShownOnce=!0),Je(),window.setTimeout(()=>{Math.abs(b.player.pitch+.18)>.2&&(b.player.pitch=-.18,Jo())},500)};document.getElementById("btn-howto").onclick=()=>{$r.classList.remove("hidden")};document.getElementById("btn-howto-close").onclick=()=>{$r.classList.add("hidden")};document.getElementById("btn-help").onclick=()=>{$r.classList.remove("hidden")};document.getElementById("btn-resume").onclick=()=>{Ic(!1),kr.requestLock()};document.getElementById("btn-ready").onclick=()=>{b.player.mode="adventure",b.flags.readyToBattleAcknowledged=!0,b.monsters=Wo(yn(b.monsters)),Zs("adventure"),Kt("Ready! Monsters stay peaceful until you attack")};document.getElementById("btn-safe").onclick=()=>{b.player.mode="safe_build",Zs("safe_build"),Kt("Safe Build — combat disabled")};document.getElementById("btn-save").onclick=async()=>{const i=document.getElementById("save-msg");try{await Xr(b),Ce.save(),i&&(i.textContent=`Saved locally · v${xa}`)}catch(t){i&&(i.textContent=`Save failed: ${t instanceof Error?t.message:"error"}`)}};document.getElementById("btn-export").onclick=()=>{const i=new Blob([Zv(b)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download="dragon-adventures-save.json",t.click()};document.getElementById("import-file").addEventListener("change",async i=>{const t=i.target.files?.[0];if(!t)return;const e=await t.text(),s=Jv(e,b),r=document.getElementById("save-msg");if(!s.ok){r&&(r.textContent=s.error+" Previous save kept.");return}b=s.state,zr(),Js(),ya(),Je(),await Xr(b),r&&(r.textContent="Import OK after validation.")});document.getElementById("btn-mute").onclick=i=>{Ce.muted=!Ce.muted,b.settings.muted=Ce.muted,i.target.textContent=`Mute: ${Ce.muted?"On":"Off"}`};function vf(i){return`Quality: ${i[0].toUpperCase()}${i.slice(1)}`}function yf(){const i=kt.getObjectByName("terrain");i&&kt.remove(i);const t=kt.getObjectByName("skyDome");t&&kt.remove(t),$o=ef(kt,be),kt.add($o),ye&&(kt.remove(ye.root),ye.dispose()),ye=new Qd(be),kt.add(ye.root)}function Mf(i,t=!0){b.settings.quality=i;for(const n of[...ns.values(),...Ni.values()])delete n.userData.castOn;be=pa(i,Yo.suggested),rn=ma(be),ga(Xe,Oi,rn),Wn.setBudget(rn.particles),(async()=>{try{await Ud(be)}catch{}yf(),Js();const n=rf(kt);window.__DA_PERF={tier:be,setting:i,triangles:n.triangles,drawCallsApprox:n.meshes,textures:n.textures,note:"NOT a Chromebook measurement; headless/proxy stats only"}})(),t&&Xr(b);const e=document.getElementById("btn-quality");e&&(e.textContent=vf(i)+" (live)")}window.__DA_SET_QUALITY=i=>{Mf(i,!0)};document.getElementById("btn-quality").onclick=()=>{const i=["low","medium","high","auto"],t=i.indexOf(b.settings.quality);Mf(i[(t+1)%i.length])};document.getElementById("btn-weather").onclick=i=>{ri=ri==="off"?"rain":ri==="rain"?"snow":"off",VM(),i.target.textContent=`Weather: ${ri[0].toUpperCase()}${ri.slice(1)}`};document.getElementById("btn-appear").onclick=()=>{document.getElementById("appear-panel").classList.toggle("hidden")};for(const[i,t]of[["col-hair","hair"],["col-top","top"],["col-pants","trousers"],["col-shoes","shoes"]])document.getElementById(i)?.addEventListener("input",e=>{b.player.appearance[t]=e.target.value});function n1(){zt.position.clone();const i=new I;zt.getWorldDirection(i);const t=new Hr,e=new Ot().multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse);t.setFromProjectionMatrix(e);let n=0;for(const[,a]of ns)a.visible&&t.containsPoint(a.position)&&n++;let s=0;for(const[,a]of Ni)a.visible&&t.containsPoint(a.position)&&s++;const r=kt.getObjectByName("homeCabin");let o=!1;if(r){const a=new I;if(r.getWorldPosition(a),o=t.containsPoint(a),!o){for(const[l,c,u]of[[2,1,2],[-2,1,2],[0,2,3],[0,1,-2],[0,3,0]])if(t.containsPoint(new I(a.x+l,a.y+c,a.z+u))){o=!0;break}}if(!o){const l=a.clone().sub(zt.position),c=new I;zt.getWorldDirection(c),l.length()<45&&l.normalize().dot(c)>.35&&(o=!0)}}window.__DA_SCENE_INFO={dragons:n,monsters:s,house:o,pitch:b.player.pitch,yaw:b.player.yaw,quality:b.settings.quality,resolvedTier:be}}let ul=performance.now(),zh=0;function bf(i){const t=Math.min(.05,(i-ul)/1e3),e=i-ul;if(ul=i,Yo.push(e),b.settings.quality==="auto"&&i-zh>2500){zh=i;const a=pa("auto",Yo.suggested);a!==be&&(be=a,rn=ma(be),ga(Xe,Oi,rn),Wn.setBudget(rn.particles))}if(e1(t),ye&&!as){const a=new Hr,l=new Ot().multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse);if(a.setFromProjectionMatrix(l),ye.update(b.player.position.x,b.player.position.z,a,be==="low"?3:5),ye.stats.queued<3&&Cn&&b.player.mount==="grounded"){const c=zs(b.player.position.x,b.player.position.z,b.player.position.y-qn)+qn;Math.abs(b.player.position.y-c)>.6&&b.player.position.y<c+2&&(b.player.position.y=c)}window.__DA_STREAM={...ye.stats,tier:be,note:"NOT a Chromebook measurement"}}{const a=["stableRest0","stableRest1","stableRest2"],l=kt.getObjectByName("terrain");if(l){let c=0;for(const u of b.companions){if(!u.bonded||b.player.mountedCompanionId===u.id){xr.delete(u.id);continue}const h=Math.hypot(u.position.x-hn.x,u.position.z-hn.z);if(h>=14&&xr.delete(u.id),h<14&&c<a.length){const d=l.getObjectByName(a[c++]);if(d){const f=new I;d.getWorldPosition(f);const g=1-Math.exp(-t*1.6);u.position.x+=(f.x-u.position.x)*g,u.position.z+=(f.z-u.position.z)*g,Math.hypot(f.x-u.position.x,f.z-u.position.z)<.6&&xr.set(u.id,hn.ry)}}}}}n1();const n=_a,s=Dc(40),r=s?Wr(s.position,b.player.position):999;let o=b.player.yaw;if(s){const a=s.position.x-b.player.position.x,l=s.position.z-b.player.position.z;o=Math.atan2(-a,-l)}n.__gameCamProbe={x:b.player.position.x,y:b.player.position.y,z:b.player.position.z,yaw:b.player.yaw,pitch:b.player.pitch,mount:b.player.mount,nearestDragonDist:r,faceYaw:o,pets:b.companions.filter(a=>a.bonded).length,sceneStats:()=>{const a={};for(const l of kt.children){const c=(u,h)=>{if(!u.visible)return;const d=u;if(d.isMesh){const f=a[h]??={vis:0,cast:0};f.vis++,d.castShadow&&f.cast++}for(const f of u.children)c(f,h==="terrain"?`terrain/${f.name||"anon"}`:h)};if(l.name==="terrain")for(const u of l.children)c(u,`terrain/${u.name||"anon"}`);else l.name==="streamedWorld"?l.traverse(u=>{const h=u;if(h.isMesh&&u.visible&&u.parent?.visible){const d=a["stream/"+(u.name||"anon")]??={vis:0,cast:0};d.vis++,h.castShadow&&d.cast++}}):c(l,l.name||l.type)}return a},dragonPositions:()=>b.companions.filter(a=>a.kind==="dragon").sort((a,l)=>Number(l.bonded)-Number(a.bonded)).map(a=>({x:a.position.x,z:a.position.z,bonded:a.bonded,inStall:xr.has(a.id)})),blocks:b.blocks.length,buildGuideComplete:b.flags.buildGuideComplete,mode:b.player.mode,selectedId:b.player.hotbar[b.player.selectedHotbar]?.id??"empty",biome:nn(b.player.position.x,b.player.position.z).primary,biomeLabel:nn(b.player.position.x,b.player.position.z).label,distHome:Math.hypot(b.player.position.x,b.player.position.z),stream:ye?.stats??null,castle:{x:Fh.x,z:Fh.z,plateauY:Ac()},landmarks:()=>[...qd,...Yd],towerPathWorld:()=>Uy().map(a=>ic(In,a.x,a.z)),cabinPose:()=>({...qe}),stablePose:()=>({...hn}),towerPose:()=>({...In}),localToWorld:(a,l,c)=>ic(a==="cabin"?qe:a==="stable"?hn:In,l,c),groundAtFeet:(a,l,c)=>zs(a,l,c),onGround:()=>Cn,lights:()=>({cabin:Or.intensity,hall:va.intensity}),castleNearLoaded:()=>!!kt.getObjectByName("castleNear")&&kt.getObjectByName("castleNear").visible,cabinInteriorLoaded:()=>!!kt.getObjectByName("cabin-interior")&&kt.getObjectByName("cabin-interior").visible,castleScreenBBox:()=>BM(),treesNear:a=>HM(a??25),nearestTrees:()=>GM(12),setYaw:a=>{b.player.yaw=a,zt.rotation.order="YXZ",zt.rotation.y=a},setPitch:a=>{b.player.pitch=ls(a),zt.rotation.order="YXZ",zt.rotation.x=b.player.pitch},recenterLook:()=>hf(),pitchLimits:()=>({min:cf,max:uf,def:Zr}),faceNearestMonster:()=>{const a=XM(40);if(!a)return!1;const l=a.position.x-b.player.position.x,c=a.position.z-b.player.position.z;b.player.yaw=Math.atan2(-l,-c),b.player.pitch=-.15,zt.rotation.order="YXZ",zt.rotation.y=b.player.yaw,zt.rotation.x=b.player.pitch;const u=Math.hypot(l,c);return u>2.8&&(b.player.position.x=a.position.x-l/u*2.2,b.player.position.z=a.position.z-c/u*2.2,es(b),zt.position.set(b.player.position.x,b.player.position.y,b.player.position.z)),!0},teleportTo:(a,l,c)=>{b.player.position.x=a,b.player.position.z=l;const u=(c===void 0?Ee(a,l):zs(a,l,c))+qn;return b.player.position.y=u,Cn=!0,vn=0,Qi=!1,zt.position.set(a,u,l),ye?.flushAround(a,l,2),{x:a,y:u,z:l,biome:nn(a,l).primary,label:nn(a,l).label}},forceFallFrom:a=>{const l=Ee(b.player.position.x,b.player.position.z);return b.player.position.y=l+a,Cn=!1,Zi=!0,Qi=!1,vn=0,Mi=0,zt.position.y=b.player.position.y,!0},hearts:()=>b.player.hearts,forceUndergroundThenSnap:()=>(b.player.position.y=-20,es(b),zt.position.set(b.player.position.x,b.player.position.y,b.player.position.z),b.player.position.y),pressReady:()=>{const a=ec(b.player.mode,"adventure");return b.player.mode=a.mode,a.flagsPatch&&(b.flags={...b.flags,...a.flagsPatch}),b.flags.buildGuideComplete=!0,b.monsters=Wo(yn(b.monsters)),Zs(b.player.mode),Hs(b),Bs=performance.now()+400,b.player.mode},padProgress:()=>Nc(b.blocks),placeBlockOnce:()=>xf(),teleportNearPad:()=>{b.player.position.x=fe.x,b.player.position.z=fe.z+1.2,es(b),b.player.yaw=Math.atan2(-(fe.x-b.player.position.x),-(fe.z-b.player.position.z)),b.player.pitch=-.55,zt.rotation.order="YXZ",zt.rotation.y=b.player.yaw,zt.rotation.x=b.player.pitch,zt.position.set(b.player.position.x,b.player.position.y,b.player.position.z)}},Xe.render(kt,zt),window.__DA_RENDER_INFO={calls:Xe.info.render.calls,triangles:Xe.info.render.triangles,points:Xe.info.render.points,lines:Xe.info.render.lines,geometries:Xe.info.memory.geometries,textures:Xe.info.memory.textures},requestAnimationFrame(bf)}WM().then(()=>requestAnimationFrame(bf));export{bM as _};
