function addClass(obj,class_name){
    //判断是否包含添加的class防止重复添加
  
  if(!hasClass(obj,class_name)){
     /*
    += ：如果只想修改某些个样式，则可以通过+= 的方式添加类属性，空格是为了让类名拼成
    字符串的时候不连接在一起。
   */
    obj.className += " "+class_name;
  }
   
}

//判断元素是否包含某个Class
function hasClass(obj,class_name){
   // var reg=/\bcn\b/;
   // return reg.test(obj.className);
    
   var reg = new RegExp('\\b'+class_name+'\\b')
   return reg.test(obj.className)
}  

//删除元素指定的class
function removeClass(obj,class_name){
    if(hasClass(obj,class_name)){
        var reg=new  RegExp('\\b'+class_name+'\\b')
        obj.className = obj.className.replace(reg,'');
    }
}

/*
    切换class
        如果元素中有该class则添加
        如果元素中没有该class则删除
*/
function toggleClass(obj,class_name){
    if(hasClass(obj,class_name)){
        removeClass(obj,class_name)
    }else{
        addClass(obj,class_name)
    }
};
