$(function() {
    $("#prodaja1").change(function() {
      if($("#laptop").is(":selected"))
      {
        $("#oglas0").css({"display":"none"});
        $("#oglas1").css({"display":"block"});
        $("#oglas1").css({"padding-top":"5%"});
        $("#oglas2").css({"display":"none"});
        $("#oglas3").css({"display":"none"});
        $("#oglas4").css({"display":"none"});
        $("#oglas5").css({"display":"block"});
        $("#oglas6").css({"display":"none"});
        $("#oglas7").css({"display":"none"});
       }
      else if($("#telefon").is(":selected"))
      {
        $("#oglas0").css({"display":"block"});
        $("#oglas0").css({"padding-top":"5%"});
        $("#oglas1").css({"display":"none"});
        $("#oglas2").css({"display":"none"});
        $("#oglas3").css({"display":"none"});
        $("#oglas4").css({"display":"none"});
        $("#oglas5").css({"display":"none"});
        $("#oglas6").css({"display":"none"});
        $("#oglas7").css({"display":"none"});
      }
      else if($("#auto").is(":selected"))
      {
        $("#oglas0").css({"display":"none"});
        $("#oglas2").css({"padding-top":"5%"});
        $("#oglas1").css({"display":"none"});
        $("#oglas2").css({"display":"block"});
        $("#oglas3").css({"display":"none"});
        $("#oglas4").css({"display":"none"});
        $("#oglas5").css({"display":"none"});
        $("#oglas6").css({"display":"none"});
        $("#oglas7").css({"display":"none"});
      }
      else if($("#kucni").is(":selected"))
      {
        $("#oglas0").css({"display":"none"});
        $("#oglas3").css({"padding-top":"5%"});
        $("#oglas1").css({"display":"none"});
        $("#oglas2").css({"display":"none"});
        $("#oglas3").css({"display":"block"});
        $("#oglas4").css({"display":"none"});
        $("#oglas5").css({"display":"none"});
        $("#oglas6").css({"display":"none"});
        $("#oglas7").css({"display":"none"});
      }
      else if($("#knjiga").is(":selected")){
        $("#oglas0").css({"display":"none"});
        $("#oglas7").css({"padding-top":"5%"});
        $("#oglas1").css({"display":"none"});
        $("#oglas2").css({"display":"none"});
        $("#oglas3").css({"display":"none"});
        $("#oglas4").css({"display":"none"});
        $("#oglas5").css({"display":"none"});
        $("#oglas6").css({"display":"none"});
        $("#oglas7").css({"display":"block"});
      }
      else if($("#namestaj").is(":selected")){
        $("#oglas0").css({"display":"none"});
        $("#oglas4").css({"padding-top":"5%"});
        $("#oglas1").css({"display":"none"});
        $("#oglas2").css({"display":"none"});
        $("#oglas3").css({"display":"none"});
        $("#oglas4").css({"display":"block"});
        $("#oglas5").css({"display":"none"});
        $("#oglas6").css({"display":"none"});
        $("#oglas7").css({"display":"none"});
      }
      else if($("#drugo").is(":selected")){
        $("#oglas0").css({"display":"block"});
        $("#oglas1").css({"display":"block"});
        $("#oglas2").css({"display":"block"});
        $("#oglas3").css({"display":"block"});
        $("#oglas4").css({"display":"block"});
        $("#oglas5").css({"display":"block"});
        $("#oglas6").css({"display":"block"});
        $("#oglas7").css({"display":"block"});
        $("#oglas0", "#oglas1", "oglas2", "#oglas3").css({"padding-top":"0%"});
      }
    })
    
  })

  
  function proveri111()
  {var uzorakporuka= /.{10,500}[\d]{3}[/][\d]{3}[-][\d]{2}[-][\d]{2}$/;
  var poruka = document.getElementById("mail").value;
  var porukica = document.getElementById('mail');
if(uzorakporuka.test(poruka))
{ $("#mail").css({"border-color":"green"});
  alert("The message is in a good format");
  document.getElementById("link").href="mailto:mahirtahirovic@hotmail.com?Subject=Really%20nice%20work%20Maki";
}
else{
  $("#mail").css({"border-color":"red"});
alert("Please enter your phone number at the end of the message in the format xxx/xxx-xx-xx eg 063/333-33-33");}
  }

  function proveri11()
  {var uzorakporuka= /.{10,500}[\d]{3}[/][\d]{3}[-][\d]{2}[-][\d]{2}$/;
  var poruka = document.getElementById("mail").value;
  var porukica = document.getElementById('mail');
if(uzorakporuka.test(poruka))
{ $("#mail").css({"border-color":"green"});
  alert("poruka je dobra");
  document.getElementById("link1").href="mailto:mahirtahirovic@hotmail.com?Subject=Svaka%20cast%20Maki";
}
else{
  $("#mail").css({"border-color":"red"});
alert("Molim vas unesite vas broj telefona na kraju poruke u formatu xxx/xxx-xx-xx npr 063/333-33-33");}
  }