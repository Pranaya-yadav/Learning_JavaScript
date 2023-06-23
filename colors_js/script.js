

var index = 0;

function changeColor(){
    var color = ["red","orange","yellow","green","blue","violet","pink"];

    document.getElementsByTagName("body")[0].style.background = color[index++];

    if(index > colors.length-1){
        index=0;
    }
    

}