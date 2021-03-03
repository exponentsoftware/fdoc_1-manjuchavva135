function reverseArray(int) {
    var arr = new Array;
    for(var i = int.length-1; i >= 0; i--) {
        arr.push(int[i]);
    }
    console.log(arr);
}

var a = ['A','B','C']
var b = reverseArray(a)