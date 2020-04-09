function f1(){
    $('#collapseTwo').collapse({
        toggle: true
      });
}
function f2(){
    $('#collapseThree').collapse({
        toggle: true
      });
      $('#collapseFour').collapse({
        toggle: true
      });

    
}
function getOption() { 
   var selectElement = document.querySelector('#opt'); 
   var output =selectElement.options[selectElement.selectedIndex].value;
   var b= output;
 
   if(b==1)
   {
    document.getElementById("img1").src="car1.jpg";
    document.getElementById("name").innerHTML = "Benz";
    document.getElementById("rent").innerHTML = "25,000";
    document.getElementById("fuel").innerHTML = "petrol";
   }
   if(b==2)
   {
    document.getElementById("img1").src="car2.jpg";
    document.getElementById("name").innerHTML = "Fortuner";
    document.getElementById("rent").innerHTML = "20,000";
    document.getElementById("fuel").innerHTML = "Diesel";
   }
   if(b==3)
   {
    document.getElementById("img1").src="car5.jpeg";
    document.getElementById("name").innerHTML = "Ford";
    document.getElementById("rent").innerHTML = "18,000";
    document.getElementById("fuel").innerHTML = "Diesel";

   }
   if(b==4)
   {
    document.getElementById("img1").src="car6.png";
    document.getElementById("name").innerHTML = "Huyndai";
    document.getElementById("rent").innerHTML = "15,000";
    document.getElementById("fuel").innerHTML = "petrol";
   }
   if(b==5)
   {
    document.getElementById("img1").src="car3.jpg";
    document.getElementById("name").innerHTML = "Suzuki";
    document.getElementById("rent").innerHTML = "16,000";
    document.getElementById("fuel").innerHTML = "petrol";
   }
   if(b==6)
   {
    document.getElementById("img1").src="car4.jpg";
    document.getElementById("name").innerHTML = "Audi";
    document.getElementById("rent").innerHTML = "23,000";
    document.getElementById("fuel").innerHTML = "petrol";
   }
 
}
function valid1() {
  var sou=document.getElementById("sou").value;
  var des=document.getElementById("des").value;
  var sd=document.getElementById("sd").value;
  var fd=document.getElementById("fd").value;
  var st=document.getElementById("st").value;
  var txt = document.getElementById("txt").value;
  if (sou && des && sd && fd && st && txt) {
    f1();
    document.getElementById('w1').innerText="Success ! ";
    document.getElementById('w1').style.fontWeight="bolder";
    document.getElementById('w1').style.display="block";
  } else {
    document.getElementById('w1').style.display="block";
  
   
  }

}
function valid2()
{
  var selectElement = document.querySelector('#opt'); 
   var output =selectElement.options[selectElement.selectedIndex].value;
   var b= output;
   var c="nothing Choosen";
   var gender = document.querySelector('input[name = options]:checked').value;
   
   if(b && gender && b!=c)
   {
     f2();
     document.getElementById('w2').innerText="Success ! ";
    document.getElementById('w2').style.fontWeight="bolder";
    document.getElementById('w2').style.display="block";
   }else {
    document.getElementById('w2').style.display="block";
    
   
   }

}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em.value))
  {
    return 1;
  }
   
    return 0;
    
}
function phonenumber(inputxt)
{
  var phoneno = /^\d{10}$/;
  if((inputxt.match(phoneno))){
      return 1;
        }
      else
        {
        
        return 0;
        }
}

function valid3()
{ 
  var un=document.getElementById("un").value;
  var t1=document.getElementById("em").value;
  var em1=ValidateEmail(t1);

  var t2=document.getElementById("tn").value;
  var tn1=phonenumber(t2);
  var f1=document.getElementById("f1").files.length;

  var f2=document.getElementById("f2").files.length;
  var b=document.querySelector('input[name="opt"]:checked').value;
  
  if(un && em1==1 && tn1==1 && f1==1 && f2==1 && b)
  {
    document.getElementById('w3').innerText="Success ! ";
    document.getElementById('w3').style.fontWeight="bolder";
    document.getElementById('w3').style.display="block";
    return 1;
  }
  else
  {
    document.getElementById('w3').style.display="block";
    return 0;

  }
  
}
function preview()
{
  
  var re= valid3();
 
  if(re==1)
  { 
  
    var pun1=document.getElementById("un").value;
  
    document.getElementById('pun').innerHTML=pun1;
    var pei2=document.getElementById("em").value;

    document.getElementById('pei').innerHTML=pei2;
     var pmn3=document.getElementById("tn").value;
  
    document.getElementById('pmn').innerHTML=pmn3;
   
    var psp4=document.getElementById("sou").value;
    document.getElementById('psp').innerText=psp4;
    var pdp5=document.getElementById("des").value;
    document.getElementById('pdp').innerText=pdp5;
    var psd6=document.getElementById("sd").value;
    document.getElementById('psd').innerText=psd6;
    var ped7=document.getElementById("fd").value;
    document.getElementById('ped').innerText=ped7;
    var pst8=document.getElementById("st").value;
    document.getElementById('pst').innerText=pst8;
    var pa9=document.getElementById("txt").value;
    document.getElementById('pa').innerText=pa9;
    var selectElement = document.querySelector('#opt'); 
   var output =selectElement.options[selectElement.selectedIndex].value;
    var pc=output;
    var pd1=document.getElementById("f1").files.length;
    var pd2=document.getElementById("f2").files.length;
    var pf=document.querySelector('input[name = options]:checked').value;
    document.getElementById("pf").innerHTML=pf;
    if(pc==1)
    {
      document.getElementById('pc').innerText="Benz"; 
    }
    if(pc==2)
    {
      document.getElementById('pc').innerText="Fortuner";
    }
    if(pc==3)
    {
      document.getElementById('pc').innerText="Ford";
    }
    if(pc==4)
    {
      document.getElementById('pc').innerText="Huyandi";
    }
    if(pc==5)
    {
      document.getElementById('pc').innerText="Suzuki";
    }
    if(pc==6)
    {
      document.getElementById('pc').innerText="Audi";
    }

    var pd;
    if(pd1==1 && pd2==1)
      {
          pd="done";
      }
      else
      {
        pd="Yet to Submmit";
      }
      document.getElementById('pd').innerText=pd;
    var pp=document.querySelector('input[name="opt"]:checked').value;
    document.getElementById('pp').innerText=pp;
   
    $("#basicExampleModal").modal("show");
   

  }else
  {
    document.getElementById('w3').style.display="block";
  }
  

  
  

}
function cpre()
{
  $("#basicExampleModal").modal("handleUpdate");
}



