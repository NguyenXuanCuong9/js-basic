//======================================Câu Lệnh Điều Kiện

/* 2️⃣ TRUTHY & FALSY – RẤT QUAN TRỌNG ❗
2.1 Falsy là gì?

👉 Những giá trị khi đưa vào if sẽ được xem là false

❗ JS chỉ có 6 giá trị falsy:

false
0
""
null
undefined
NaN

2.2 Truthy là gì?

👉 Mọi giá trị khác falsy đều là truthy

Ví dụ:

"0"       // truthy
"false"   // truthy
[]        // truthy
{}        // truthy
1         // truthy
-1        // truthy */

/* 2.3 Ví dụ cực hay gặp (bẫy ❗)
let username = "";

if (username) {
  console.log("Có username");
} else {
  console.log("Chưa nhập username");
}


👉 Vì "" là falsy → in ra "Chưa nhập username"

2.4 Kiểm tra tồn tại (rất hay dùng)
if (user) {
  // user tồn tại (không null / undefined)
}

2.5 Kiểm tra số (bẫy thường gặp)
let count = 0;

if (count) {
  console.log("Có giá trị");
} else {
  console.log("Bằng 0 hoặc falsy");
}


👉 0 là falsy → dễ bug nếu không để ý */

//======================================🧠 TRIẾT LÝ CHUNG

/* Falsy = “không có giá trị hữu ích”
Truthy = “có giá trị”

JS không quan tâm kiểu, mà quan tâm ý nghĩa logic

🔴 VÌ SAO CÁC GIÁ TRỊ SAU LÀ FALSY?
1️⃣ false

👉 Rõ ràng: sai về logic */

if (false) {
  /* không chạy */
}

// 2️⃣ 0

// 👉 Trong toán học & lập trình:

// 0 = không có

// không số lượng, không điểm, không tiền

let count = 0;
if (count) {
  /* không chạy */
}

// ➡️ Phù hợp với tư duy con người

// 3️⃣ "" (chuỗi rỗng)

// 👉 Chuỗi không có ký tự nào

let name = "";
if (name) {
  /* không chạy */
}

// ➡️ “Chưa nhập dữ liệu”

// 4️⃣ null

// 👉 Cố tình gán là không có

let user = null;

// ➡️ “Biết là trống”

// 5️⃣ undefined

// 👉 Chưa được gán

let x;

// ➡️ “Không tồn tại”

// 6️⃣ NaN

// 👉 Kết quả không hợp lệ về mặt toán học

Number("abc"); // NaN

// ➡️ “Không có giá trị số để dùng”

/* 🟢 VÌ SAO NHỮNG THỨ KHÁC LẠI LÀ TRUTHY?
Ví dụ:
"0"        // truthy
"false"    // truthy
[]         // truthy
{}         // truthy

Vì sao?

👉 Dù “nhìn có vẻ rỗng”, nhưng:
Nó TỒN TẠI
Nó có kiểu
Nó có thể dùng

📌 JS hiểu:

“Có object / có chuỗi → có dữ liệu” */

// ⚠️ NHỮNG BẪY DO THIẾT KẾ NÀY
// ❌ Bẫy 1: 0 bị coi là falsy
let score = 0;

if (score) {
  // không chạy
}

// 👉 Nhưng 0 có thể là giá trị hợp lệ
// ✔️ Cách đúng:

if (score === 0) {
}
// ❌ Bẫy 2: chuỗi "false" vẫn là truthy
if ("false") {
  // chạy
}

// 👉 Vì nó là chuỗi có nội dung

//================================================3️⃣ switch – Xử lý nhiều trường hợp
/* 3.1 Khi nào nên dùng switch?

So sánh 1 biến

Với nhiều giá trị cố định

Thay cho nhiều else if */

/* 3.2 Cú pháp
switch (value) {
  case x:
    // code
    break;
  case y:
    // code
    break;
  default:
    // code
} */

// 3.3 Ví dụ thực tế
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

// 3.4 Vì sao cần break?

// ❗ Nếu quên break → fall-through

let x1 = 1;

switch (x1) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
}

/* 👉 Kết quả:

One
Two */

// 3.5 Gom nhiều case (rất hay dùng)
let role = "admin";

switch (role) {
  case "admin":
  case "manager":
    console.log("Full access");
    break;
  default:
    console.log("Limited access");
}

/* 4️⃣ IF vs SWITCH – Dùng cái nào?
Trường hợp	Nên dùng
Điều kiện phức tạp	if / else
So sánh 1 biến, nhiều giá trị	switch
So sánh khoảng (>=, <=)	if
So sánh bằng (===)	switch

📌 switch dùng so sánh chặt (===) */
