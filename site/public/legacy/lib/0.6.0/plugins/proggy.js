var proggyPlugin=(()=>{var u=Object.defineProperty;var g=(r,o)=>u(r,"name",{value:o,configurable:!0});var f=(r,o)=>()=>(r&&(o=r(r=0)),o),x=(r,o)=>()=>(o||r((o={exports:{}}).exports,o),o.exports);var d,m=f(()=>{d="data:image/png;base64,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"});var D=x((i,t)=>{m();t.exports=r=>{function o(){return r.loadFont("proggy",d,7,13)}return g(o,"loadProggy"),{loadProggy:o}}});return D();})();
//# sourceMappingURL=proggy.js.map
