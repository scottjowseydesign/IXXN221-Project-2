
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

function autoFill(){
  let check = document.getElementById('check');
  let tick = document.getElementById('tick');

  //checkout information page
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let first = document.getElementById('first');
  let last = document.getElementById('last');
  let company = document.getElementById('company');
  let address = document.getElementById('address');
  let apartment = document.getElementById('apartment');
  let city = document.getElementById('city');
  let post = document.getElementById('post');
  let region = document.getElementById('region');
  let country = document.getElementById('country');

  if (check.checked == true){
    email.value = "scottjowseydesign@gmail.com"
    phone.value = "027 867 7032"
    first.value = "Scott"
    last.value = "Jowsey"
    company.value = "Company (Optional)"
    address.value = "151 Cuba Street"
    apartment.value = "Apartment, suite, etc. (Optional)"
    city.value = "Wellington"
    post.value = "6011"
    region.value = "Wellington"
    country.value = "New Zealand"
  } else {
    email.value = "Email Address"
    phone.value = "Phone Number"
    first.value = "First Name"
    last.value = "Last Name"
    company.value = "Company (Optional)"
    address.value = "Address"
    apartment.value = "Apartment, suite, etc. (Optional)"
    city.value = "City"
    post.value = "Postal Code"
    region.value = "Region"
    country.value = "Country"
  }}

function openNav() {
  document.getElementById("sidebar").style.width = "30%";
  document.getElementById("leftbar").style.width = "100%";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("leftbar").style.width = "0";
}
