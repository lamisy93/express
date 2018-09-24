/* jshint esversion : 6 */
// ./public/js/app.js

console.log("hello app JS front side");

// $(function(){
//     $("#slides").slidesjs({
//       width: 940,
//       height: 528
//     });
// });

// (function() {

//     const doAjax = function doAjax(url, method, callback, data) {
//         try {
//           const xhr = new XMLHttpRequest();
//           xhr.open(method, url);
//         //   xhr.setRequestHeader('Content-Type', 'application/json');
//           data = data ? JSON.stringify(data) : null;
//           if (method.toLowerCase() === "post") {
//               if (!data) throw new Error("bad call");
//           }
  
//           xhr.onload = evt => callback(evt.target.response || evt.srcElement.response);
//           xhr.send(data);
  
//       } catch(err) { console.error(err); }
  
//       };

//     var submit = function() {

//         const url = "http://localhost:8081/contact";
//         doAjax(url, "POST", res => {
//             console.log("RES CREATE");
//             console.log(JSON.parse(res));
//         }, {
//             nom: document.getElementById("nom").value,
//             prenom: document.getElementById("prenom").value,
//             email: document.getElementById("email").value,
//             objet: document.getElementById("objet").value,
//             message: document.getElementById("message").value
//         },
//         );

//         console.log("happy");
//     }

//   window.addEventListener("DOMContentLoaded", () => {

//     var soumettre = document.getElementById("submit");
//     soumettre.addEventListener('click', submit);

//     console.log([...document.querySelectorAll("*")]);
    
//     if (document.getElementById("formContact")) mailer.start();

//  });


// })();


const mailer = (function mailerFront() {
    "use strict";
    
    const doAjax = function doAjax(url, method, callback, data) {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            data = data ? JSON.stringify(data) : null;
            if (method.toLowerCase() === "post") {
                if (!data) throw new Error('bad call');
            }
            xhr.onload = evt => callback(evt.target.response || evt.srcElement.response);
            xhr.send(data);
        } catch (err) {
            console.log(err);
        }
    };

    const send = function sendMail(e) {
        e.preventDefault();
//        return console.log("ici tout va bien")
        const url = "http://localhost:8081/contact";
        doAjax(url, "POST", res => {
            window.alert("Message envoyé");
            console.log(JSON.parse(res));
        }, {
            nom: document.getElementById("nom").value,
            prenom: document.getElementById("prenom").value,
            email: document.getElementById("email").value,
            objet: document.getElementById("objet").value,
            message: document.getElementById("message").value
        });
        
    };

    const start = function start() {
        const btn = document.getElementById("submit");
        console.log(btn);
        if (btn) btn.onclick = send;
    };

    window.addEventListener("DOMContentLoaded", start);
}());