function daysUntilNext9th() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // Tạo đối tượng ngày mùng 9 và đặt thời gian về 00:00
    let next9th = new Date(currentYear, currentMonth, 9);
    next9th.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0); // Đặt thời gian hiện tại về 00:00

    // Nếu hôm nay đã qua mùng 9, chuyển đến mùng 9 của tháng sau
    if (now > next9th) {
        next9th = new Date(currentYear, currentMonth + 1, 9);
    }

    // Tính số ngày bằng cách lặp từ ngày hiện tại đến ngày mùng 9
    let daysCount = 0;
    while (now < next9th) {
        now.setDate(now.getDate() + 1); // Tăng ngày hiện tại lên 1
        daysCount++;
    }

    return daysCount;
}

// Example usage
const daysLeft = daysUntilNext9th();
console.log(`Số ngày đến ngày 9 gần nhất: ${daysLeft}`);
