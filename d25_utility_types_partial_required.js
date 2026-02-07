"use strict";
/**
 * HỌC VỀ UTILITY TYPES: PARTIAL & REQUIRED
 * (LEARNING UTILITY TYPES: PARTIAL & REQUIRED)
 *
 * Utility Types là các công cụ giúp biến đổi một Interface có sẵn
 * thành một kiểu mới mà không cần viết lại mã nguồn.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Giả sử ta có một hàm để cập nhật hồ sơ người dùng.
// Khi cập nhật, người dùng có thể CHỈ muốn đổi 'firstName' hoặc CHỈ đổi 'email'.
// Nếu dùng 'UserProfile', TS sẽ bắt nhập ĐẦY ĐỦ các trường.
// Sử dụng 'Partial<UserProfile>' cho phép chúng ta chỉ truyền những trường cần thiết.
function updateProfile(id, newInfo) {
    console.log(`--- Cập nhật User ID: ${id} ---`);
    console.log("Dữ liệu thay đổi:", newInfo);
    // Logic: Tìm user theo id và đè dữ liệu mới vào...
}
// Cách dùng (Usage):
updateProfile(101, { firstName: "Anh" }); // OK: Chỉ đổi tên
updateProfile(102, { email: "anh@gmail.com", age: 25 }); // OK: Đổi email và tuổi
updateProfile(103, {});
// Khi khai báo Interface, ta để dấu '?' vì không phải lúc nào cũng cần điền ngay.
// Nhưng khi hàm 'connect' chạy, nó cần ĐẦY ĐỦ thông số để hoạt động thành công.
function connectToStorage(config) {
    console.log(`--- Đang kết nối tới ${config.region}... ---`);
    console.log(`Bucket: ${config.bucketName}, Public: ${config.isPublic}`);
}
// THÀNH CÔNG: Truyền đủ các trường
connectToStorage({
    region: "Asia-East-1",
    bucketName: "my-photos",
    isPublic: true
});
/**
 * THẤT BẠI: Nếu bạn bỏ comment code dưới đây, TypeScript sẽ báo lỗi ngay lập tức
 * vì 'Required' ép bạn phải điền 'isPublic'.
 */
/*
connectToStorage({
    region: "US-West",
    bucketName: "backup-data"
});
*/
// =================================================================
// TÓM TẮT DỄ HIỂU (EASY SUMMARY)
// =================================================================
// - Partial<User>: "Cho tôi một phần của User cũng được (hoặc không có gì)."
// - Required<Config>: "Phải đưa tôi ĐỦ TOÀN BỘ Config, không được thiếu cái nào."
