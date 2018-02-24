var quickSort=function(arr){
if(arr.length<=1){return arr;}
var pivotIndex=Math.floor(arr.length/2);//基准位置，理论上是任意选取
var pivot=arr.splice(pivotIndex,1)[0];//基准数
var left=[];
var right=[];
for (var i=0;i<arr.length;i++){
if(arr[i]<pivot){
left.push(arr[i])
}else{
right.push(arr[i])
}
}
return quickSort(left).concat([pivot],quickSort(right))
}
