import moment from "moment";

// const year = 2023;
// const month = 8; // Tháng 10 (0-11)

function printAllDayInMonth(year, month) {
  // Tạo một đối tượng Moment đại diện cho ngày đầu tiên trong tháng
  const firstDayOfMonth = moment([year, month - 1]);

  // In ra tiêu đề cho lịch
  console.log(firstDayOfMonth.format("MMMM YYYY"));
  console.log("Sun Mon Tue Wed Thu Fri Sat");

  // Duyệt qua các ngày trong tháng
  for (let i = 0; i < firstDayOfMonth.daysInMonth(); i++) {
    const currentDay = firstDayOfMonth.clone().add(i, "days");

    // In ra ngày và đánh dấu ngày hiện tại
    if (i === 0) {
      process.stdout.write(" ".repeat(currentDay.day() * 4)); // Đặt khoảng trống cho các ngày trước ngày đầu tiên trong tuần
    }

    process.stdout.write(currentDay.date().toString().padStart(3, " "));

    if (currentDay.day() === 6) {
      console.log(); // Xuống dòng sau khi in xong ngày thứ 7 (Chủ Nhật)
    } else {
      process.stdout.write(" ");
    }
  }
}

printAllDayInMonth(2023, 8);
