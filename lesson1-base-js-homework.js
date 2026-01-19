// Bài Tập Cuối Chương
// 1. Khởi tạo biến course có giá trị là 'JavaScript' . Sau đó dùng console.log để log giá trị của biến course.
var x = "JavaScript";
console.log(x);
/* Chọn các cách khai báo biến hợp lệ trong JS =>>> BF
A. String name;
B. var name;
C. var typeof  20;
D. var 1isStudent = true;
E. var hello^World = 'Hello World';
F. var number1 = 20; */
// Cho đoạn code sau:
var fullName = "Nguyen Hung";
var name = fullName;
// Chọn đáp án đúng:  =>   D
/* A. Giá trị của name bằng giá trị của fullName.
B. Giá trị của name không bằng giá trị của fullName.
C. Giá trị của name là 'Nguyen Hung' .
D. Câu A và C đúng. */
/* 4 Sau khi khai báo biến bằng var , có thể gán lại giá trị mới cho biến đó không? =>  A
A. Có.
B. Không. */
/* 5. Chọn các câu trả lời đúng:  ==> ABE
A. greeting là tên biến hợp lệ.
B. $1_hello là tên biến hợp lệ.
C. 1$_hiWorld là tên biến hợp lệ.
D. var là tên biến hợp lệ.
E. $_%_! là tên biến không hợp lệ.
F. typeof là tên biến hợp lệ.
6.bChọn các tên biến theo chuẩn Camel Case: => AE
A. learnProgrammingOnline
B. learn_programming_online
C. JavaScriptCourse
D. Online
E. token */
// 7. Dùng console.log để log ra kiểu dữ liệu của các biến hoặc giá trị sau:
var age = 20;
console.log(typeof age);
console.log(typeof 20);
console.log(typeof "LetDiv");
var ___a = true;
console.log(typeof ___a);
null;
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);

/* 8. Viết chương trình thực hiện các yêu cầu sau:
Khai báo một array (mảng) danh sách học sinh của một lớp: 
Log ra giá trị của phần tử thứ ba.
Thay đổi giá trị của phần tử có chỉ số index 
3 thành Trung */
var student = ["Gioi", 19, "9A", "Nam"];
console.log(student[2]);
student[3] = "Trung";
/* 9. Cho đoạn code sau:
var numbers = [10, 12, 14, 16, 18, 20];
numbers[6] = 50;
['Lan', 'Hung', 'Tien', 'Cuong', 'Tuan'] .
10. Chọn câu trả lời đúng:  => C
A. Chương trình báo lỗi.
B. Thay đổi phần tử có giá trị 20 thành 50.
C. Thêm phần tử mới có giá trị 50 vào cuối mảng.
D. Thêm phần tử mới có giá trị 50 vào đầu mảng. */
/* 10. Chọn các cách khai báo array hợp lệ:  =>> ACD
A. var numbers = ['Hello', 'Nguyen Hung', 14, true, 18, 20];
B. var numbers = {'Hello', 'Nguyen Hung', 14, true, 18, 20};
C. var numbers = ['Hello', 1,2,3,4, 5,6,7,8, 18, 20];
D.  var numbers = [];*/
// 11. Cho mảng sau:
var characters = ["A", "B", "C", "D"];
/* Viết chương trình để thêm giá trị 
'E' vào cuối mảng (không dùng 
.push ). */
characters[4] = "E";
console.log("characters", characters);
// Khai báo một object có các property sau:
// name :
// 'Tran Van A'
// isStudent :
// true
// birthYear :
// 2002

var isObject = { name: "Tran Van A", isStudent: true, birthYear: 2002 };
console.log(isObject);
// Cho object sau:
var obj = {
  name: "Tran Van A",
  isStudent: true,
  birthYear: 2002,
};

obj.isStudent = false;
obj.friends = ["Lan", "Hung", "Tien", "Cuong", "Tuan"];
/* Viết chương trình thực hiện các yêu cầu:
Gán lại giá trị mới cho 
Thêm property 
isStudent là 
false .
friends là một array gồm 
'Lan', 'Hung', 'Tien', 'Cuong', 'Tuan'  */

// Cho object sau:
var student1 = {
  name: "Tran Van A",
  birthYear: 1990,
  job: "coder",
};

student1.country = { name: "Viet Nam", code: "vi" };
console.log(student1.country);
console.log(student1.country.name);

// 15.Cho array
var persons = [
  { name: "Nguyen Hung", birthYear: 1990, job: "Coder" },
  { name: "Huy Bao", birthYear: 1989, job: "IT Manager" },
  { name: "Thanh Duy", birthYear: 2000, job: "Worker" },
];

// Log giá trị của phần tử đầu tiên.
console.log(persons[0]);
console.log((persons[0].name = " Nguyen Van Hung"));
console.log((persons[0].isLeader = true));
console.log("name cuoi cung:", persons[2].name);
console.log("Length:", persons.length);
persons[3] = { name: "Nguyen Van Duy", birthYear: 2000, job: "Deve" };

// 16. Cho đoạn code sau:
var value = "1.5";
// Viết câu lệnh để chuyển value từ string sang number.
console.log("Type value: ", typeof Number(value));
