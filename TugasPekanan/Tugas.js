function test1(){   
const prompt = require('prompt-sync')({sigint: true});

const nilai = prompt('Enter a first number: ');

    if(nilai %2 != 0 ){
        console.log("Tidak bisa input bilangan ganjil");
    } else if(nilai <= 0){
        console.log("Tidak bisa input bilangan negatif");
    } else {
        console.log(Number(nilai) * Number(nilai));
    }
}

function test2(){
let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  }
  const productCodeToCheck = "FBR00040101";
  const productDataKeys = Object.keys(productBin.data);
  let totalQuantity = 0;
  productDataKeys.forEach(key => {
    const data = productBin.data[key];
    
    // Memeriksa apakah productCode cocok
    if (data.productCode === productCodeToCheck) {
      totalQuantity += data.quantity;
    }
});
console.log(`Total quantity for productCode ${productCodeToCheck}: ${totalQuantity}`);

}



