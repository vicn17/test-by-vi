//*Tạo cấu trúc các biến phân trang
let thisPage = 1;
let limitProduct = 9;
let listCard = document.querySelectorAll(".card-item");

function loadItem() {
  //* Logic phân trang theo giới hạn sản phẩm show ra (limitProduct)
  let beginGetPage = limitProduct * (thisPage - 1);
  let endGetPage = limitProduct * thisPage - 1;

  //* Lọc các item product để kiểm tra theo logic ở trên
  listCard.forEach((item, key) => {
    if (key >= beginGetPage && key <= endGetPage) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
loadItem();

//*Kiểm tra tổng số trang
function listPage() {
  let tatolPage = Math.ceil(listCard.length / limitProduct);
  for (let index = 1; index <= tatolPage; index++) {
    let newPage = document.createElement("a");
    newPage.innerText = index;
    if (index == thisPage) {
      newPage.classList.add("active");
    }
    document.querySelector("#listPage").appendChild(newPage);
    newPage.setAttribute("onclick", "changePage(" + index + ")");
    newPage.setAttribute("href", "#first-title-home");
  }
}

//* Đổi trang
function changePage(index) {
  thisPage = index;
  document.querySelector("#listPage").innerHTML = "";
  loadItem();
}
