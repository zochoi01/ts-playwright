/**
 * [VN] Import (nhập) các thành phần cần thiết từ file utils.
 * [EN] Import necessary components from the utils file.
 */
import { User, VERSION, APP_ID } from './d33_es_modules_utils';

/**
 * [VN] Hàm dùng để hiển thị thông tin người dùng ra console.
 * [EN] Function to display user information to the console.
 * @param user - [VN] Đối tượng tuân thủ interface User / [EN] Object complying with User interface
 */
function displayUserInfo(user: User): void {
    console.log(`[${APP_ID} - Version ${VERSION}]`);
    console.log("-----------------------------------");
    console.log(`User ID   : ${user.id}`);
    console.log(`Username  : ${user.username}`);
    console.log(`Email     : ${user.email}`);
    console.log(`Status    : ${user.isActive ? 'Active' : 'Inactive'}`);
}

/**
 * [VN] Khởi tạo dữ liệu mẫu. TypeScript sẽ kiểm tra xem object này có đúng kiểu User không.
 * [EN] Initialize sample data. TypeScript will check if this object matches the User type.
 */
const sampleUser: User = {
    id: 101,
    username: "zochoi01",
    email: "zochoi@example.com",
    isActive: true
};

/**
 * [VN] Thực thi hàm hiển thị với dữ liệu mẫu đã tạo.
 * [EN] Execute the display function with the created sample data.
 */
displayUserInfo(sampleUser);