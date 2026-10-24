"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var d=v(function(w,o){
function j(e,r,a,n,i,I,T){var s,u,t;if(e<=0)return-1;for(s=n,u=T,t=0;t<e;t++){if(r[s]>i[u])return t;s+=a,u+=I}return-1}o.exports=j
});var c=v(function(z,x){
var q=require('@stdlib/strided-base-stride2offset/dist'),m=d();function l(e,r,a,n,i){return m(e,r,a,q(e,a),n,i,q(e,i))}x.exports=l
});var h=v(function(A,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),_=d();R(y,"ndarray",_);p.exports=y
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=h(),f,G=O(E(__dirname,"./native.js"));b(G)?f=g:f=G;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
