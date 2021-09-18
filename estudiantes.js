let itemList = localStorage.getItem("objectItems");
if (itemList) {
  itemList = JSON.parse(itemList);
} else {
  itemList = [];
}

studentList();

function addItem() {
  let nameItem = document.getElementById("nameItem").value;
  let priceItem = document.getElementById("priceItem").value;
  let descItem = document.getElementById("descItem").value;

  if (nameItem && priceItem && descItem) {
    itemList.push({
      itemName: nameItem,
      itemPrice: priceItem,
      itemDesc: descItem,
    });

    localStorage.setItem("objectItems", JSON.stringify(itemList));
    studentList();
    saveStorage();
  }
}



function studentList() {
  let html = "";
  itemList.forEach((i, index) => {
    html += `<div class="row">
                <div class="col" > ${i.itemName}  </div>
                <div class="col" > ${i.itemPrice} </div>
                <div class="col" > ${i.itemDesc}  </div>
                <div class="col" > <button type="button" onclick="deleteItem(${index})" class="btn btn-danger" > X </button> </div> 
                </div>`;
  });
  document.getElementById("showItemList").innerHTML = html;

}

function deleteItem(index) {
  itemList.splice(index, 1);
  saveStorage();
  studentList();
}

function saveStorage () {
  localStorage.setItem('items', itemList)
}