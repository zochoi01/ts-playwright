"use strict";
const wait = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve('Done!'), ms));
};
/**
 * Giả lập việc tải dữ liệu từ server (Simulates fetching data from a server)
 * Trả về "Data Loaded" sau 2 giây (Returns "Data Loaded" after 2 seconds)
 */
const fetchData = () => {
    return new Promise((resolve, reject) => {
        console.log("Đang kết nối tới server... (Connecting to server...)");
        // 3. Tác vụ bất đồng bộ (Asynchronous task)
        setTimeout(() => {
            resolve("Data Loaded"); // 4. Thành công: gọi resolve với giá trị
            // reject("Error"); // 5. Thất bại: gọi reject với lỗi
        }, 2000);
    });
};
// Thực thi (Execution)
async function main() {
    // 'await' có nghĩa là: "Dừng ở đây, đợi Promise này xong rồi mới chạy tiếp"
    // 'await' means: "Pause here, wait for this Promise to finish before moving on"
    const message = await fetchData();
    // Đợi 2 giây rồi mới in ra "Data Loaded"
    console.log("Kết quả:", message); // Output: Data Loaded
}
main();
