 catego = [
    {'name': "All Categories"},
    {'name': "Televisions"},
    {'name': "Headphones"},
    {'name': "Computers"},
    {'name': "Appliances"},
    {'name': "Mobilies"},
    {'name': "Tv & Video"},
    {'name': "iPad & Tablets"},
    {'name': "Cameras & Camcorders"},
    {'name': "Home Audio & Theater"},
 ]
 //var myJSON =JSON.stringify(catego);

 electro = [
     {"name": "All Mobile Phones"},
     {"name": "All Mobile Accessories"},
     {"name": "Cases and Covers"},
     {"name": "Screen Protectors"},
     {"name": "Power Banks"},
     {"name": "All Certified Refurbished"},
     {"name": "Tablets"},
     {"name": "Wearable Devices"},
     {"name": "Smart Home"},
     {"name": "Laptops"},
     {"name": "Drives and Storage"},
     {"name": "Printers and Ink"},
     {"name": "Networking Devices"},
     {"name": "Computer Accessories"},
     {"name": "Game Zone"},
     {"name": "Software"},
 ]


 //var myJSON2 = JSON.stringify(electro);
 //console.log(electro["tol2"]);
 products = [{
         'photo': "galaxy.jpg",
         'name': "Samgung Galaxy J7",
         'value': "$200.00",
         'xxvalue': "$280.00",
         'button': "ADD TO CART",
     }, {
         'photo': "oppo.png",
         'name': "OPPO A37f",
         'value': "$230.00",
         'xxvalue': "$250.00",
         'button': "ADD TO CART",
     },
     {
         'photo': "iphone.jfif",
         'name': "Apple iPhone X",
         'value': "$280.00",
         'xxvalue': "$300.00",
         'button': "ADD TO CART",
     }, {
         'photo': "sony.png",
         'name': "Sony 80 cm (32 inches)",
         'value': "$320.00",
         'xxvalue': "$340.00",
         'button': "ADD TO CART",
     }, {
         'photo': "artis.jpg",
         'name': "Artis Speaker",
         'value': "$349.00",
         'xxvalue': "$399.00",
         'button': "ADD TO CART",
     }, {
         'photo': "philips.jpg",
         'name': "Philips Speakers",
         'value': "$249.00",
         'xxvalue': "$300.00",
         'button': "ADD TO CART",
     }, {
         'photo': "dolap.png",
         'name': "Whirpool 245",
         'value': "$230.00",
         'xxvalue': "$280.00",
         'button': "ADD TO CART",
     }, {
         'photo': "makine.jpg",
         'name': "BPL Washing Machine",
         'value': "$180.00",
         'xxvalue': "$200.00",
         'button': "ADD TO CART",
     }, {
         'photo': "tost.jpg",
         'name': "Microwave Oven",
         'value': "$199.00",
         'xxvalue': "$299.00",
         'button': "ADD TO CART",
     },
 ]
 //console.log(products[0]['name']);
 
 
//console.log(catego);
var categori=document.getElementById("categori");

  for (var k of catego){
      var liste=document.createElement("ul");

      liste.setAttribute("id","idListe");
      liste.innerHTML +=k['name'];

      categori.appendChild(liste);
  }

  var elec=document.getElementById("electronics");
  for(var j of electro){
      var elecListe=document.createElement("ul");
      elecListe.setAttribute("id","idElecListe");
      elecListe.innerHTML +=j["name"];
      elec.appendChild(elecListe);
  }


 
 var contentPart = document.getElementById('contentPart');
 for (var item of products) {
     //console.log(item['name']);

     var card = document.createElement('div');
     
     var imgbolumu=document.createElement('div')
     var img = document.createElement('img');
     img.setAttribute('src', item['photo']);
     img.setAttribute("width", 200);
     imgbolumu.appendChild(img);
     card.appendChild(imgbolumu);

     card.innerHTML += item['name'];
     card.setAttribute("id", "card");

    //PricePart bölümü eski ve yeni value değerini tutacak.
     var pricepart = document.createElement('ul');
     card.appendChild(pricepart);
     /*pricepart.innerHTML+=item['value'];
     pricepart.innerHTML+=item['xxvalue'];*/

     var deger = document.createElement('li');
     //deger.innerHTML+=item['value'];
     deger.setAttribute("id", "idDeger");
     var yazi = document.createElement('p');
     yazi.innerHTML += item['value'];
     deger.appendChild(yazi);
     pricepart.appendChild(deger);



     var eskiDeger = document.createElement('li');
     //eskiDeger.innerHTML += item['xxvalue'];
     eskiDeger.setAttribute("id", "idEskiDeger");
     var eskiyazi = document.createElement('p');
     eskiyazi.innerHTML += item['xxvalue'];
     eskiDeger.appendChild(eskiyazi)
     pricepart.appendChild(eskiDeger);


     var buttonbolum = document.createElement('div');
     buttonbolum.setAttribute("id","idButtonBolum");
     var button = document.createElement("button");
     button.setAttribute("id", "idButton");
     button.innerHTML += item['button'];
     buttonbolum.appendChild(button);
     card.appendChild(buttonbolum);






     contentPart.appendChild(card);
 }