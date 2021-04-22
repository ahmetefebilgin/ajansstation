var myObject = [{
        title: "Free",
        price: '$0',
        user: "10",
        storage: 2,
        support: "Email support",
        description: "Help center access",
        button: "Sign up for free"
    },
    {
        title: "Pro",
        price: '$15',
        user: "20",
        storage: 10,
        support: "Priority Email support",
        description: "Help center access",
        button: "Get started"
    },
    {
        title: "Enterprise",
        price: '$29',
        user: "30",
        storage: 15,
        support: "Phone and Email support",
        description: "Help center access",
        button: "Contact us"
    },
]


var contentPart = document.querySelector("#contentPart");

var count = myObject.length;

for (var i = 0; i < 3; i++) {

    var obj = myObject[i];
    ///  window.alert(obj.price)

    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = "<div id='card-title'><h3>" + obj.title + "</h3></div><h2><b>" + obj.price +
        "</b>/mo</h2><p>" + obj.user + " users included</p><p>" + obj.storage + " GB of storage</p><p>" + obj.support +
        "Email support</p><p>Help center access</p><a id='button' onclick='window.alert(" + obj.description + ")'> " + obj.button + "</a>";
    console.log(obj);

    contentPart.appendChild(card);
}