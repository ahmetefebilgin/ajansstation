var myObject = [{
        title: "Free",
        price: '$0',
        user: "10",
        storage: "2",
        support: "Email support",
        description: "Help center access",
        button: "Sign up for free",
        button1text: "Sign up for free"
    },
    {
        title: "Pro",
        price: '$15',
        user: "20",
        storage: "10",
        support: "Priority Email support",
        description: "Help center access",
        button: "Get started",
        button2text: "Get started"
        
    },
    {
        title: "Enterprise",
        price: '$29',
        user: "30",
        storage: "15",
        support: "Phone and Email support",
        description: "Help center access",
        button: "Contact us",
        button3text: "Contact us"
        
    },
]


var contentPart = document.querySelector("#contentPart");

var count = myObject.length;

var butonlar = [];

for (var i = 0; i < count; i++) {

    var obj = myObject[i];
    ///  window.alert(obj.price)

    var card = document.createElement("div");
    card.className = "card";
    //card.id = "carrd";

    var cardTitle = document.createElement('div');
    cardTitle.setAttribute("id", "card-title")
    //cardTitle.id = "card-title";
    card.appendChild(cardTitle);

    var title = document.createElement("h3");
    title.innerHTML = obj.title;
    cardTitle.appendChild(title);


    var conTitle = document.createElement("div");
    conTitle.id = "con-title";
    card.appendChild(conTitle);

    var cont = document.createElement("h2");
    cont.innerHTML += obj.price + "/mo";
    card.appendChild(cont);

    var cont1 = document.createElement("p");
    cont1.innerHTML += obj.user + "user included";
    card.appendChild(cont1);

    var cont2 = document.createElement("p");
    cont2.innerHTML += obj.storage + "Gb of storage";
    card.appendChild(cont2);

    var cont3 = document.createElement("p");
    cont3.innerHTML += obj.support;
    card.appendChild(cont3);

    var cont4 = document.createElement("p");
    cont3.innerHTML += obj.description;
    card.appendChild(cont4);

    //description.id="desc";

    var btn = document.createElement("button");
    // btn.onclick = function(){
    //     alert(obj.button)
    // }

    btn.setAttribute("id", "bottonid");
    btn.classList.add("Bottons");
    btn.innerHTML += obj.button;
    card.appendChild(btn);
    var bottons = document.getElementsByClassName("Bottons");
    console.log(bottons);


    //for (var j of bottons) {

        //btn.onclick = function () {
          //  alert(obj.button);}
           // j.addEventListener("click",function () {
             //  alert(obj.button);})}
    /*document.getElementById("bottonid").addEventListener("click" , function(){
        alert(obj.button)
    });*/


    //conTitle.appendChild(botton1);
   
    /* for (var j of botton1) {
         j.addEventListener("click", function () {
             alert(obj.button);
         })
     }*/


    console.log(obj);

    contentPart.appendChild(card);
}
//3 defa contact us yazdı   
/* for(var j of bottons){
        btn.onclick=function(){
            alert(btn.innerHTML+=obj.button)
        }
    }*/

    

