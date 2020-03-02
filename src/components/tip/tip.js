import tip from "./index.js";
let globalTip;

function newTip(){
  globalTip=globalTip||tip.newInstance({});
  return globalTip;
}

function getTypeTip(type,options){
  let typeTip=newTip();
  typeTip.show({
    type:type,
    ...options
  })
}
export default{
  prompt(options){
    getTypeTip('prompt',options);
  },
  warning(options){
    getTypeTip('warning',options);
  },
}
