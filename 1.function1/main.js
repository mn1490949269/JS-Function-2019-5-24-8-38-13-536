function reverseString(message){
  var arr[];
　var str1="";//这里创建一个空字符串用来拼接后面的字符；
  if(message.length>0){//判断传入的参数是否为空；
　　　for(var i=message.length-1;i>=0;i--){
　　　　　str1+=message.charAt(i);//
　　　}
　　　document.write(str1);//输出这个字符串　　　　
}
reverseString('hello'); // should return 'olleh'
