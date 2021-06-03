var curr=" ";
var count="1";
document.getElementsByTagName("p").placeholder = "what you wanna like to calculate";

function clickednum(clicked_id){

    var num =document.getElementById(clicked_id).value;
    curr=curr.concat(num);
    document.getElementsByTagName("p").innerHTML="curr";

}
function clickedop(clicked_id){

    var operator =document.getElementById(clicked_id).value;
    var emptyop=" ";
    curr=curr.concat(emptyop.concat(operator));
    document.getElementsByTagName("p").innerHTML="curr";

}

function clickedequal(clicked_id){

    var ans= eval(curr);
    if (ans==err.message){

        document.getElementsByTagName("p").innerHTML="ans";
        return
    }
    document.getElementsByTagName("p").innerHTML="ans";
    curr=" ";
}   

function clickedac(clicked_id){

    curr=" ";
    document.getElementsByTagName("p").innerHTML="clear";

}

function clickedpm(clicked_id){

   if(count=="1"){

    var minus="-"
       curr=minus.concat(curr);
       document.getElementsByTagName("p").innerHTML="curr";
       count=count-1;

   }
   else{
       count=count+1;
   }

}

function clickeddot(clicked_id){

    var temp="."
    curr=temp.concat(curr)
    document.getElementsByTagName("p").innerHTML="curr";

}


