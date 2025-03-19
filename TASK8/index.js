let weight = parseFloat(prompt("Nhập cân nặng (kg): "));
let height = parseFloat(prompt("Nhập chiều cao (m): "));

function calcBMI(weight, height) {
  let bmi = weight / height ** 2;
  console.log("Chỉ số BMI của bạn là: " + bmi.toFixed(2)); // Làm tròn 2 chữ số thập phân

  switch (true) {
    case bmi < 18.5:
      console.log("Thiếu cân");
      break;
    case bmi >= 18.5 && bmi < 23:
      console.log("Bình thường");
      break;
    case bmi >= 23 && bmi < 25:
      console.log("Thừa cân");
      break;
    default:
      console.log("Béo phì");
      break;
  }
  return bmi; // Trả về giá trị BMI
}

calcBMI(weight, height);