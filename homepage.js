  var slike = ["slike/mejpg1.png", "slike/mejpg3.png", "slike/mejpg4.png", "slike/mejpg.png"];

  var i = 0;
  setInterval(function(){
    if (i === slike.length) {
      i = 0;
    }
    document.getElementById("mojejpg").src = slike[i];
    i++;
  }, 2000);

function topFunction() {
    document.documentElement.scrollTop = 0;
  }

let cena1 = document.getElementById('cena');
cena1.max = 6000;


function promeni1(obj)
        {
            var lbl = document.getElementById("rez");
            rez1.innerHTML =  obj.value + "€";
        }    
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


  $(function() {
    $("#cena").change(function() {
      if($("#laptop").is(":selected"))
    {
      if(cena1.value < 699){
      $("#oglas0").css({"display":"none"});
      $("#oglas1").css({"display":"none"});
      $("#oglas1").css({"padding-top":"5%"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"block"});
      }
    }
        if($("#laptop").is(":selected"))
    {
      if(cena1.value > 699){
      $("#oglas0").css({"display":"none"});
      $("#oglas1").css({"display":"block"});
      $("#oglas1").css({"padding-top":"5%"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"none"});
      }
    }
    if($("#laptop").is(":selected"))
    {
      if(cena1.value >= 1200){
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
    }
    if($("#telefon").is(":selected"))
    {
        if(cena1.value < 500)
        {
      $("#oglas0").css({"display":"none"});
      $("#oglas0").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"block"});
    }
    else {
      $("#oglas0").css({"display":"block"});
      $("#oglas0").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"none"});
    }
  }
    if($("#auto").is(":selected"))
    { if(cena1.value < 5000){
      $("#oglas0").css({"display":"none"});
      $("#oglas2").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"block"});
    }
    }
    if($("#auto").is(":selected"))
    { if(cena1.value > 5000){
      $("#oglas0").css({"display":"none"});
      $("#oglas2").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"block"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"none"});
    }
    }
    if($("#kucni").is(":selected"))
    { if(cena1.value < 50 ){
      $("#oglas0").css({"display":"none"});
      $("#oglas3").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"block"});
    }
    }
    if($("#kucni").is(":selected"))
    { if(cena1.value > 50 ){
      $("#oglas0").css({"display":"none"});
      $("#oglas3").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"block"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"none"});
    }
    }
    if($("#knjiga").is(":selected"))
    { if(cena1.value > 10 ){
      $("#oglas0").css({"display":"none"});
      $("#oglas7").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas7").css({"display":"block"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#nemaoglasa").css({"display":"none"});
    }
    else{
      $("#oglas0").css({"display":"none"});
      $("#oglas7").css({"padding-top":"5%"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#nemaoglasa").css({"display":"block"});
    }
    }
    else if($("#namestaj").is(":selected")){
      if(cena1.value > 30 ){
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
    else {
      $("#oglas0").css({"display":"none"});
      $("#oglas1").css({"display":"none"});
      $("#oglas2").css({"display":"none"});
      $("#oglas3").css({"display":"none"});
      $("#oglas4").css({"display":"none"});
      $("#oglas5").css({"display":"none"});
      $("#oglas6").css({"display":"none"});
      $("#oglas7").css({"display":"none"});
      $("#nemaoglasa").css({"display":"block"});
    }
  }
      })
    })

    