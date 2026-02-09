/**
 * [VN] Từ khóa 'export' cho phép các thành phần này được sử dụng ở các file khác.
 * [EN] The 'export' keyword allows these components to be used in other files.
 */

/**
 * [VN] Định nghĩa cấu trúc (khuôn mẫu) cho đối tượng User.
 * [EN] Define the structure (blueprint) for the User object.
 */
export interface User {
    id: number;         // [VN] Mã định danh / [EN] User ID
    username: string;   // [VN] Tên tài khoản / [EN] Username
    email: string;      // [VN] Địa chỉ email / [EN] Email
    isActive: boolean;  // [VN] Trạng thái / [EN] Status
}

/**
 * [VN] Các hằng số cấu hình dùng chung.
 * [EN] Shared configuration constants.
 */
export const VERSION = "1.0.0";
export const APP_ID = "APP_001_TS_PLAYWRIGHT";