"use strict";
/**
 * HÀM GIẢ LẬP TẢI DỮ LIỆU (SIMULATED FETCH FUNCTION)
 * Trả về một Promise sau 2 giây.
 */
const fetchDataFromServer = () => {
    return new Promise((resolve, reject) => {
        console.log("1. Bắt đầu kết nối Server... (Starting server connection...)");
        setTimeout(() => {
            const success = true; // Giả lập trạng thái thành công (Simulate success status)
            if (success) {
                resolve("2. Dữ liệu đã tải xong! (Data Loaded Successfully!)");
            }
            else {
                reject("Lỗi kết nối Server! (Server Connection Error!)");
            }
        }, 2000);
    });
};
/**
 * THỰC THI BẰNG ASYNC/AWAIT (EXECUTION WITH ASYNC/AWAIT)
 * 'async' đánh dấu hàm này xử lý bất đồng bộ.
 * 'await' dừng việc thực thi cho đến khi Promise hoàn thành.
 */
async function runTestProcess() {
    console.log("--- BẮT ĐẦU QUY TRÌNH KIỂM THỬ (START TEST PROCESS) ---");
    try {
        // Đợi kết quả từ Promise (Waiting for Promise result)
        // Dòng này giúp code dễ đọc như code chạy tuần tự
        const result = await fetchDataFromServer();
        // Chỉ chạy dòng này sau khi await ở trên xong (Runs only after await is finished)
        console.log("Kết quả nhận được (Result received):", result);
    }
    catch (error) {
        // Xử lý nếu Promise bị reject hoặc có lỗi xảy ra
        console.error("Đã xảy ra lỗi (Error occurred):", error);
    }
    finally {
        console.log("--- KẾT THÚC QUY TRÌNH (PROCESS FINISHED) ---");
    }
}
// Gọi hàm thực thi (Call execution function)
runTestProcess();
