console.log('hi');

// Get the last <li> element ("Milk") of <ul> with id="myList2"
var itm = document.getElementById("user-item-el");

// Copy the <li> element and its child nodes
var cln = itm.cloneNode(true);

var list = document.getElementById("user-group-list-el");
// Append the cloned <li> element to <ul> with id="myList1"
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));
list.appendChild(itm.cloneNode(true));

var list2 = document.getElementById('chat-body-el').childNodes[9];

var cln2 = list2.cloneNode(true);


document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));
document.getElementById('chat-body-el').appendChild(list2.cloneNode(true));



