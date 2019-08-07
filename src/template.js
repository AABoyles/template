(function (root, factory){
  if(typeof define === 'function' && define.amd){
    define([], function(){ return (root.template = factory()) });
  } else if(typeof module === 'object' && module.exports){
    module.exports = factory();
  } else {
    root.template = factory();
  }
}(typeof self !== 'undefined' ? self : this, function(){
  //Insert your stuff here.
  return {};
}));
