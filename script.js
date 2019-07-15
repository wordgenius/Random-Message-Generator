var cities = [
  "Seoul",
  "Jeju-si",
  "Incheon",
  "Daegu",
  "Guilin",
  "Shanghai",
  "Xi'an",
  "Beijing",
  "Tokyo",
  "Kyoto",
  "New York City",
  "Chongqing",
  "Hangzhou",
  "Qingdao",
  "Chengdu",
  "London",
  "Paris",
  "Chicago",
  "Los Angeles",
  "San Francisco",
  "Hong Kong",
  "Taipei"
]

var button = document.getElementById('takeoff');
button.addEventListener("click", function(){
   // alert("The button works");
   var number = randNum(cities);
   changeTxt(number);
  })

function randNum(array){
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random;
}

randNum (cities);

function changeTxt(someTxt){
  var newTxt = document.getElementById('placeholder'); //referencing it here. go here//
  newTxt.innerHTML = cities [someTxt];
}

var button2 = document.getElementById("stayhome");
button2.addEventListener("click", function(){
  document.getElementById("stayhome").disabled = true;
})

var goingto = document.getElementById('goto');

var stayinghome = document.getElementById('stayhome');
  stayinghome.addEventListener("click", function(){
    alert("don't you dare");
 })
