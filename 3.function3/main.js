function alphabetSort(message){
var str=message;
 for(int i=0;i<str.length();i++){
     for(int j=str.length()-1;j>i;j--)
     {
         if(str[j]<=str[j-1]){
            temp=str[j];
            str[j]=str[j-1];
            str[j-1]=temp;
         }
     }
  }
  console.log(str);
}
alphabetSort('hello'); // should return 'ehllo'
