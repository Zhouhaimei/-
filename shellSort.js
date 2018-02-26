var shellSort=function(arr){
var len = arr.length;
for(var gap=Math.floor(len/2);gap>0;gap=Math.floor(gap/2)){
for(var i=gap;i<len;i++){
for(var j=i-gap;gap>0&&arr[j]>arr[j+gap];j-=gap){
var temp=arr[j]
arr[j]=arr[j+gap]
arr[j+gap]=temp
}
}
}
return arr;
}
