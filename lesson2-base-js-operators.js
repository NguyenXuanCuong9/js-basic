/* 6.
Cho biến productName = "Áo phông", quantity = 3, và price = 150000.
Viết chương trình để tạo ra một chuỗi thông báo có dạng:
"Bạn đã mua 3 Áo phông với tổng giá là 450000 VND".
In chuỗi thông báo này ra console. */
var productName = "Áo phông";
var quantity = 3;
var price = 150000;
console.log(
  "Bai 6:",
  "Bạn đã mua",
  quantity,
  "Áo phông với tổng giá là",
  quantity * price,
  "VND",
);

/* 7.
Viết đoạn code JavaScript sử dụng toán tử ++ và -- để thực hiện các bước sau:
Khởi tạo biến counter với giá trị ban đầu là 10.
Tăng giá trị của counter lên 1 bằng toán tử tiền tố và in ra giá trị mới của counter.
Giảm giá trị của counter đi 1 bằng toán tử hậu tố và in ra giá trị hiện tại của counter (giá trị trước khi giảm).
In ra giá trị cuối cùng của counter sau khi giảm. */
var counter = 10;
++counter;
console.log("Bai 7");
console.log("counter 1:", counter);
console.log("counter 2:", counter++);
console.log("counter 3:", counter);

/* 8.
Một cửa hàng đang có chương trình khuyến mãi giảm giá 10% cho tất cả sản phẩm.
Viết chương trình để tính giá cuối cùng của một sản phẩm sau khi đã giảm giá, biết giá gốc của sản phẩm là:
originalPrice = 250000
Kết quả hiển thị trên console phải đúng như sau:
Giá gốc: 250000
Giá sau giảm 10%: 225000 */
var originalPrice = 250000;
console.log("Bài 8.1: ");
console.log("Giá Gốc :", originalPrice);
console.log("Giá sau giảm 10% :", originalPrice * 0.9);

console.log("Bài 8.2");
var orgPrice;
var discount;
function caclSalePrice(org, dis) {
  var caclPrice = org * (1 - dis / 100);
  console.log("Giá gốc :", org);
  console.log("Giá sau giảm", dis, "%:", caclPrice);
}
caclSalePrice(250000, 10);

/* 9. Chương trình quản lý kho hàng

Bạn hãy khai báo một biến có tên là currentStock và khởi tạo nó với giá trị ban đầu là 150.
Biến này sẽ đại diện cho số lượng sản phẩm tồn kho hiện tại.
Trong ngày hôm nay, có hai sự kiện xảy ra:
Nhập kho: Kho nhận thêm 75 sản phẩm mới.
Hãy sử dụng toán tử gán kết hợp để cập nhật số lượng tồn kho (tăng thêm số sản phẩm nhập kho).
Xuất kho: Kho xuất đi 35 sản phẩm để giao cho khách.
Hãy sử dụng toán tử gán kết hợp để cập nhật số lượng tồn kho (giảm đi số sản phẩm xuất kho).
Sau khi thực hiện cả hai sự kiện nhập và xuất kho, hãy in ra số lượng sản phẩm tồn kho cuối cùng trong kho.
Kết quả hiển thị trên console phải đúng như sau:
Số lượng tồn kho cuối cùng: 190 */
console.log("Bai 9");
var currentStock = 150;
currentStock += 75;
currentStock -= 35;
console.log("Số lượng tồn kho cuối cùng :", currentStock);

/* 10. Tính giá sản phẩm sau tăng giá

Để bắt đầu tính toán, bạn cần khai báo một biến có tên là productPrice và khởi tạo nó với giá trị ban đầu là 280000.
Biến này sẽ đại diện cho giá gốc của sản phẩm.
Cửa hàng quyết định tăng giá sản phẩm này lên 15% để bù đắp chi phí.
Hãy sử dụng toán tử gán kết hợp để tính giá mới của sản phẩm.
Sau khi tính toán xong, hãy in ra giá mới của sản phẩm.
Kết quả hiển thị trên console phải đúng như sau:
Giá sản phẩm sau khi tăng 15%: 322000 */
var productPrice = 280000;
productPrice *= 1.15;
console.log("Bài 10: Giá sản phẩm sau khi tăng 15% :", productPrice);

/* 11. Tính điểm trung bình lớp học
Để bắt đầu tính toán điểm trung bình, bạn cần khai báo các biến sau và khởi tạo chúng với giá trị ban đầu:
averageScore = 7.5 (điểm trung bình ban đầu của lớp)
studentCount = 25 (tổng số học sinh ban đầu trong lớp)
Sau đó, bạn nhận thêm điểm của 5 học sinh mới.
Tổng điểm của 5 học sinh mới này là 38.
Hãy sử dụng toán tử gán kết hợp để cập nhật tổng điểm hiện tại của cả lớp (cộng thêm tổng điểm của học sinh mới).
Cuối cùng, hãy tính và in ra điểm trung bình mới của lớp.
Kết quả hiển thị trên console phải đúng như sau:
Điểm trung bình mới của lớp: 7.516666 */
var averageScore = 7.5; //điểm trung bình ban đầu của lớp
var studentCount = 25; //tổng số học sinh ban đầu trong lớp

var sumScore = averageScore * studentCount;
sumScore += 38;
studentCount += 5;
averageScore = sumScore / studentCount;
console.log("Bai 11: Điểm trung bình mới của lớp:", averageScore);

/* 12. Kiểm tra loại đồ uống
Một chương trình quản lý quán cà phê cần kiểm tra xem loại đồ uống khách hàng chọn có phải là "Cà phê" hay không.
Bạn hãy viết chương trình theo các yêu cầu sau:
Khai báo một biến có tên là drinkType và khởi tạo nó với giá trị là một chuỗi bất kỳ, ví dụ: "Trà sữa".
Biến này sẽ đại diện cho loại đồ uống mà khách hàng đã chọn.
Sử dụng toán tử so sánh chặt chẽ === để kiểm tra xem drinkType có chính xác bằng chuỗi "Cà phê" hay không.
In ra console kết quả của phép so sánh (giá trị boolean true hoặc false).
Sau đó, thay đổi giá trị của drinkType thành "Cà phê" và chạy lại code.
Quan sát sự thay đổi của kết quả.
Kết quả hiển thị trên console phải đúng như sau:
false // Khi drinkType = "Trà sữa"
true  // Khi drinkType = "Cà phê" */
console.log("Bài 12");
var drinkType = "Trà sữa";
console.log(drinkType === "Cà phê");
drinkType = "Cà phê";
console.log(drinkType === "Cà phê");

/* 13.

Một trang web bán hàng trực tuyến cần kiểm tra điều kiện để áp dụng chương trình khuyến mãi đặc biệt cho khách hàng.
Chương trình này áp dụng cho khách hàng nếu:
Tuổi của khách hàng lớn hơn hoặc bằng 18
Và
Số lượng sản phẩm khách hàng mua khác 0
Bạn hãy viết code JavaScript để:
Khai báo hai biến:
customerAge (tuổi khách hàng) và khởi tạo với giá trị số bất kỳ, ví dụ 18
productQuantity (số lượng sản phẩm mua) và khởi tạo với giá trị số bất kỳ, ví dụ 1
Sử dụng toán tử AND (&&) để kiểm tra đồng thời cả hai điều kiện trên.
In ra console kết quả của biểu thức điều kiện.
Thử thay đổi giá trị của customerAge và productQuantity để kiểm tra với các trường hợp khác nhau.
Kết quả hiển thị trên console phải đúng như sau:

false // Khi customerAge = 16, productQuantity = 1
false // Khi customerAge = 20, productQuantity = 0
true  // Khi customerAge = 18, productQuantity = 2
false // Khi customerAge = 15, productQuantity = 0 */

console.log("Bài 13");
var customerAge;
var productQuantity;
function isSale(customerAge, productQuantity) {
  if (customerAge >= 18 && productQuantity !== 0) {
    console.log(true);
  } else return console.log(false);
  /* var isSale = customerAge >= 18 && productQuantity !== 0 ? true : false;
  console.log(isSale); */
}
isSale(16, 1);
isSale(20, 0);
isSale(18, 2);
isSale(15, 0);
/* 14.
Cho biểu thức sau:
5 + 2 * 3
Theo độ ưu tiên thông thường, biểu thức này sẽ được tính là:
5 + 6 = 11
Hãy viết code JavaScript sử dụng dấu ngoặc đơn để thay đổi thứ tự tính toán sao cho phép cộng 2 + 3 được thực hiện trước, 
sau đó mới nhân kết quả với 5.
In ra kết quả mới.
Kết quả hiển thị trên console phải đúng như sau: 25 */
console.log("Bai 14: 5 * ( 2 + 3 ) =", 5 * (2 + 3));

/* 15. Kiểm tra tuổi và in thông báo bằng toán tử Ternary

Một trang web cá nhân cần thông báo cho khách hàng tùy thuộc vào độ tuổi của người dùng.
Bạn hãy viết code JavaScript để:
Khai báo một biến có tên là userAge và khởi tạo nó với giá trị tuổi bất kỳ, ví dụ 20.
Sử dụng toán tử ternary để kiểm tra xem userAge có lớn hơn hoặc bằng 18 hay không.
Nếu userAge >= 18, hãy gán chuỗi "Bạn đã đủ tuổi trưởng thành" cho biến message.
Ngược lại, nếu userAge < 18, hãy gán chuỗi "Bạn chưa đủ tuổi trưởng thành" cho biến message.
In ra console giá trị của biến message.
Sau đó, thay đổi giá trị của userAge thành một số nhỏ hơn 18 (ví dụ 16) và chạy lại code.
Quan sát sự thay đổi của kết quả.
Kết quả hiển thị trên console phải đúng như sau:
Bạn đã đủ tuổi trưởng thành   // Khi userAge = 20
Bạn chưa đủ tuổi trưởng thành // Khi userAge = 16 */
var userAge;
var message;
function checkAge(userAge) {
  message =
    userAge >= 18
      ? "Bạn đã đủ tuổi trưởng thành."
      : "Bạn chưa đủ tuổi trưởng thành.";
  console.log(message);
}
console.log("Bai 15");
checkAge(18);
checkAge(16);
checkAge(10);
checkAge(20);
checkAge(25);
