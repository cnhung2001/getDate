import moment from "moment";

// const year = 2023;
// const month = 8; // Tháng 10 (0-11)

function printAllDayInMonth(year, month) {
  // Tạo một đối tượng Moment cho ngày đầu tiên của tháng
  const firstDayOfMonth = moment({ year, month: month - 1, day: 1 });

  // Lấy số ngày trong tháng
  const daysInMonth = firstDayOfMonth.daysInMonth();

  // In ra tiêu đề của bảng
  console.log("Sun Mon Tue Wed Thu Fri Sat");

  // Bắt đầu từ ngày 1 của tháng
  let currentDay = 1;
  while (currentDay <= daysInMonth) {
    let weekRow = "";
    for (let i = 0; i < 7; i++) {
      if (currentDay <= daysInMonth) {
        const dayOfWeek = firstDayOfMonth.day();
        if (i === dayOfWeek) {
          weekRow += `${currentDay.toString().padStart(3)} `;
          currentDay++;
          firstDayOfMonth.add(1, "day");
        } else {
          weekRow += "    "; // Điền khoảng trắng cho các ô trống
        }
      }
    }
    console.log(weekRow);
  }
}

printAllDayInMonth(2023, 9);
