function promeni2(obj)
  {
      var lbl = document.getElementById("imeprz");
      var d = new Date();
      document.getElementById('nadimak').value =  obj.value + d.getFullYear();
  } 
  var password = document.getElementById("password")
, confirm_password = document.getElementById("confirm_password");

function validatePassword(){
if(password.value != confirm_password.value) {
confirm_password.setCustomValidity("Lozinke se ne poklapaju!");
$("#confirm_password").css({"border-color":"red"});
exit;
} else {
confirm_password.setCustomValidity('');
$("#confirm_password").css({"border-color":"green"});
exit;
}
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
function provera()
  {
    var imePrez1 = document.getElementById("imeprz");
      var mejl1 = document.getElementById("email");
      var imePrez = document.getElementById("imeprz").value;
      var mejl = document.getElementById("email").value;
      var uzorakIme = /^[A-Z]{1,}[_]{1}[A-Z ]{1,}$/;
      var uzorakmejl = /^[a-zA-Z]{1}.{1,}\w{1}@(hotmail|live|gmail|np.ac)(.com|.rs)$/;
      if(uzorakIme.test(imePrez))
       { $("#imeprz").css({"border-color":"green"});
         $("#nadimak").css({"border-color":"green"});
      imePrez1.setCustomValidity('');
         if(uzorakmejl.test(mejl))
         {
          mejl1.setCustomValidity(''); 
          $("#email").css({"border-color":"green"});
          exit;
         }              
         else
         {mejl1.setCustomValidity('E-mail adresa: mora da pocinje slovom, nakon toga mogu biti specijalni karakteri, cifre ili slova, ali pre znaka @ mora biti slovo ili cifra.Ostali deo je standardni kao za sve e-mail adrese');
         $("#email").css({"border-color":"red"});}
       }
      else
      {imePrez1.setCustomValidity('MORA BITI U FORMATU | IME_PREZIME | (Prezime moze da sadrzi razmak)');
      $("#imeprz").css({"border-color":"red"});}
  }
imePrez.onkeyup= provera;
mejl.onkeyup= provera;
imePrez.onkeyup=provera1;
mejl.onkeyup= provera1;
function provera1()
  {
    var imePrez1 = document.getElementById("imeprz");
      var mejl1 = document.getElementById("email");
      var imePrez = document.getElementById("imeprz").value;
      var mejl = document.getElementById("email").value;
      var uzorakIme = /^[A-Z]{1,}[_]{1}[A-Z ]{1,}$/;
      var uzorakmejl = /^[a-zA-Z]{1}.{1,}\w{1}@(hotmail|live|gmail|np.ac)(.com|.rs)$/; 
      var uzorakporuka= /.{10,500}[\d\d\d\/\d\d\d-\d\d-\d\d]$/;
      if(uzorakIme.test(imePrez))
       { 
      imePrez1.setCustomValidity('');
         if(uzorakmejl.test(mejl))
         {
          mejl1.setCustomValidity(''); 
          exit;
         }              
         else
         mejl1.setCustomValidity('E-mail address: must begin with a letter, followed by special characters, numbers or letters, but before the @ sign must be a letter or number. The rest is standard as for all e-mail addresses');
       }
      else
      imePrez1.setCustomValidity('This field mus be in format |NAME_SURNAME| (space between the surname is optional)');
  }
