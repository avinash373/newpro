var onAppear = [];

document.addEventListener("DOMContentLoaded", function() {
  onAppear = [].map.call(document.querySelectorAll(".onAppear"), function(item ) {
    return item;
  });
}, false);

window.addEventListener("scroll", function() {
  onAppear.forEach(function(elem) {
    var vwTop = window.pageYOffset;
    var vwBottom = (window.pageYOffset + window.innerHeight);
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;
    
    if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop)) {
     elem.classList.add("visible");
    } else {
      elem.classList.remove("visible");
    }
  });
}, false);


$("#lf").click(function(){
    $('#darkModalForm').modal('hide');
    $('#elegantModal').modal('show');
  });
  $("#fl").click(function(){
    $('#elegantModal').modal('hide');
    $('#darkModalForm').modal('show');
  });
  function validate() {
    var username = document.getElementById("un").value;
    var password = document.getElementById("pa").value;
    
    if ((username == null || username == "RGUKT")&&(password == null || password == "123")) {
      
      window.location.href="main.html";
    }
    else
    {
      document.getElementById("un").style.borderColor="#FF0000";
      document.getElementById("pa").style.borderColor="#FF0000";
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
  function signup()
  {
   
    var e=document.getElementById("em").value;
    var ve=ValidateEmail(e);
    var p=document.getElementById("rr").value;
    var rp=document.getElementById("rd").value;
    var t=document.getElementById("t").value;
    var vt= phonenumber(t);
    var u=document.getElementById("un1").value;
    var c=document.getElementById("c1");
    var k=document.getElementById("key").value;
    window.value=k;
    alert(window.value);
    if( t && ve==1 && p && rp && vt==1 && c.checked==true && p==rp && k)
    {
        window.location.href="main.html";
    }
    else
    {
      document.getElementById("em").style.borderColor="#FF0000";
      document.getElementById("rr").style.borderColor="#FF0000";
      document.getElementById("t").style.borderColor="#FF0000";
      document.getElementById("rd").style.borderColor="#FF0000";
      document.getElementById("un1").style.borderColor="#FF0000";
      
    }
    return k;
  }
  function forg()
  {
    $('#modalSubscriptionForm').modal('show');
  }
  var k=document.getElementById("key").value;
  function verify()
  { 
    var pas=document.getElementById("k1").value;
    var ch="abc";

    if(ch==pas)
    {
      document.getElementById('rrr1').style.display="block";
      document.getElementById('rrr2').style.display="block";
    }  
    else
    {
      document.getElementById("k1").style.borderColor="#FF0000";
    }
    
  }
  function close1()
  {
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    if(n1 && n2)
    {
      $('#modalSubscriptionForm').modal('hide');
      $('#elegantModalForm').modal('hide');

    }
    else{
      document.getElementById("n1").style.borderColor="#FF0000";
      document.getElementById("n2").style.borderColor="#FF0000";
    }
   
  }