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