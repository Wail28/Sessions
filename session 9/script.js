let productName = document.getElementById("name");
let productPrice = document.getElementById("price");
let productCategory = document.getElementById("category");
let productDescription = document.getElementById("description");
let Sbtn = document.getElementById("Sbtn");
let Ubtn = document.getElementById("Ubtn")
let arrProduct = [];

if (localStorage.getItem("products") != null) {
  arrProduct = JSON.parse(localStorage.getItem("products"));
  loopData()
}

Sbtn.addEventListener("click", () => {
  let productData = {
    pname: productName.value,
    pprice: productPrice.value,
    pcat: productCategory.value,
    pdesc: productDescription.value,
  };
  arrProduct.push(productData);
  clearData();
  loopData();
  localStorage.setItem("products", JSON.stringify(arrProduct));
});

function loopData() {
  let tableData = "";
  idCounter = 0;
  for (let i = 0; i < arrProduct.length; i++) {
    tableData += `
        <tr>
        <td>${++idCounter}</td>
        <td>${arrProduct[i].pname}</td>
        <td>${arrProduct[i].pprice}</td>
        <td>${arrProduct[i].pcat}</td>
        <td>${arrProduct[i].pdesc}</td>
        <td><button id="Ubtn1" onclick="updateData(${i})">Update</button></td>
        <td><button id="Dbtn" onclick="deleteData(${i})">Delete</button></td>
        </tr>
        `;
  }
  document.getElementById("tableBody").innerHTML = tableData;
}

function clearData() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}
function deleteData(element){
     arrProduct.splice(element,1)
     loopData()
     localStorage.setItem("products",JSON.stringify(arrProduct))
}

function updateData(element){
    productName.value = arrProduct[element].pname
    productPrice.value =      arrProduct[element].pprice
    productCategory.value =         arrProduct[element].pcat
    productDescription.value =        arrProduct[element].pdesc
    Ubtn.style.display="block"
    Sbtn.style.display="none"
}
