$(function(){
	/*填充li背景色,先定义一个数组存储颜色*/
	var colors = ["red","blue","pink","orange","purple"]
	/*下面我们利用循环依次将颜色填充到对应的li*/
	/*先获取到所有的li*/
// 	console.log($("li"));
    var list = $("li");
    /*获取到所有的li之后我们利用for循环将颜色依次填充*/
   for (var i=0;i<colors.length;i++) {
// 	console.log(list[i]);
    $(list[i]).css("background-color",colors[i]);
   }
//  console.log(list);
  /*为每个li添加一个点击事件*/
 $("li").click(function(){
//   	console.log($(this));
//      console.log(this);
        $("li").text("");//在添加对勾之前需要将所有的li的√去掉
        $(this).text("√");
        bgcolor = $(this).css("background-color");
//      console.log(bgcolor);
        $("div").css("background-color",bgcolor);
 })
	
	
	
	
	
	
	
})
