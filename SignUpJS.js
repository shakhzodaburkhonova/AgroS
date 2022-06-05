var Arr=[];
function kiritish(){
    var fullname=document.getElementById("fname").value;
    var cname =document.getElementById("company").value;
    var uemail=document.getElementById("email").value;
    var  date =new Date().getDate() + "/" + (new Date().getMonth() +1) + "/" + new Date().getFullYear();
  
    if(fullname!=="" && uemail!=="" && uemail!==""){
        var info={
            fullname:fullname,
            cname,
            uemail:uemail,
            date:date
        }
        Arr.push(info);
        malumot();
        document.getElementById("fname").value=" ";
        document.getElementById("email").value=" ";
        document.getElementById("company").value=" ";
    }
    else{
        alert("Maydonlarni to'ldiring!");
    }
}


function malumot(){
    var tr=" ";
    var i=0;
    for(var td of Arr){
        i++;
        tr+="<tr>"+
        "<td>"+i+"</td>"+
        "<td>"+td.fullname+"</td>"+
        "<td>"+td.cname+"</td>"+
        "<td>"+td.uemail+"</td>"+
        "<td>"+td.date+"</td>"+
        "</tr>"
    }
    document.getElementById("tbody").innerHTML=tr;
}
