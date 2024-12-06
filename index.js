$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('itembox').show('1000');
        }
        else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
        }
    })
    // add active class on selected item

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})

var swiper = new Swiper(".mySwiper", {


    
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    });


   (function(){
      emailjs.init({
        publicKey: "ISTHSIWdOBkXtGfqF",
      });
   })();

   function sendMail()
   {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value

    var details = {
        name:name,
        email:email,
        message:message,
    }
    var serviceid = 'service_ex8j8n5'
    var templateid = 'template_bxewj1e'

    emailjs.send(serviceid,templateid,details)
    // Toastify({

    //  text: "Your Message has been Send",

    //  duration: 10000

    //  }).showToast();
     Toastify({
        text: "Your Message has been Send",
        duration: 30000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(135deg,#73a5ff,#5477f5)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
   }





   var con = document.getElementById('content-Australia')
   var see = document.getElementById('button')


   function seeless(){

   if(con.style.display == 'block'){

        con.style.display = 'none'
        see.innerHTML = 'See more'
       
    }
    else{
      
        con.style.display = 'block'
        see.innerHTML = 'See less'
    }

   }

   function searchcountry()
   {
    var query = document.getElementById('searchinput').value
   if(query.toLowerCase() == 'australia')
   {
    window.location.href="Austrailia.html"
   }

   else if(query.toLowerCase() == 'newzealand')
   {
 window.location.href="Newzealand.html"
   }

   else if(query.toLowerCase() == 'europe')
   {
 window.location.href="europe.html"
   }

   else if(query.toLowerCase() == 'ireland')
   {
 window.location.href="ireland.html"
   }

   else
   {
    alert("Page Not Found")
   }
}


// Newzealand js


(function(){
    emailjs.init({
      publicKey: "ISTHSIWdOBkXtGfqF",
    });
 })();

 function sendMail()
 {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var message = document.getElementById('message').value

  var details = {
      name:name,
      email:email,
      message:message,
  }
  var serviceid = 'service_ex8j8n5'
  var templateid = 'template_bxewj1e'

  Toastify({
      text: "Your Message has been Send",
      duration: 30000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(135deg,#73a5ff,#5477f5)",
      },
      onClick: function(){} // Callback after click
  }).showToast();
 }


//  Ireland js


(function () {
    emailjs.init({
        publicKey: "ISTHSIWdOBkXtGfqF",
    });
})();

function sendMail() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value

    var details = {
        name: name,
        email: email,
        message: message,
    }
    var serviceid = 'service_ex8j8n5'
    var templateid = 'template_bxewj1e'

    emailjs.send(serviceid, templateid, details)
    Toastify({
        text: "Your Message has been Send",
        duration: 30000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(135deg,#73a5ff,#5477f5)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}




// Europe js




(function(){
    emailjs.init({
      publicKey: "ISTHSIWdOBkXtGfqF",
    });
 })();

 function sendMail()
 {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var message = document.getElementById('message').value

  var details = {
      name:name,
      email:email,
      message:message,
  }
  var serviceid = 'service_ex8j8n5'
  var templateid = 'template_bxewj1e'

  emailjs.send(serviceid,templateid,details)
  Toastify({
      text: "Your Message has been Send",
      duration: 30000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(135deg,#73a5ff,#5477f5)",
      },
      onClick: function(){} // Callback after click
  }).showToast();
 }





//  Australia js




(function(){
    emailjs.init({
      publicKey: "ISTHSIWdOBkXtGfqF",
    });
 })();

 function sendMail()
 {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var message = document.getElementById('message').value

  var details = {
      name:name,
      email:email,
      message:message,
  }
  var serviceid = 'service_ex8j8n5'
  var templateid = 'template_bxewj1e'

  emailjs.send(serviceid,templateid,details)
  Toastify({
      text: "Your Message has been Send",
      duration: 30000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(135deg,#73a5ff,#5477f5)",
      },
      onClick: function(){} // Callback after click
  }).showToast();
 }