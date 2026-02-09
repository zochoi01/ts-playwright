/**
 * [VN] Thực hành tổng hợp Tuần 5: Giả lập Flow Automation
 * [EN] Week 5 Comprehensive Practice: Automation Flow Simulation
 */

// 1. Hàm openBrowser: Trả về Promise sau 1s
function openBrowser(url: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[Step 1] Open browser: ${url}`);
            resolve(url);
        }, 1000);
    });
}

// 2. Hàm login: Trả về Promise sau 1.5s
function login(user: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[Step 2] Login with user: ${user}`);
            resolve(user);
        }, 1500);
    });
}

// 3. Hàm checkDashboard: Trả về Promise sau 0.5s
function checkDashboard(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[Step 3] Check dashboard`);
            resolve("Dashboard Load Success");
        }, 500);
    });
}

/**
 * [VN] Hàm chính thực hiện quy trình Test.
 * [EN] Main function to execute the Test flow.
 */
async function runTestSimulation() {
    console.log("--- Starting Test Simulation ---");

    // [VN] Sử dụng try...catch để xử lý lỗi nếu có bất kỳ bước nào thất bại.
    // [EN] Use try...catch to handle errors if any step fails.
    try {
        await openBrowser("https://google.com");
        await login("admin_user");
        const status = await checkDashboard();

        console.log(`>>> Result: ${status}`);
        console.log("--- Test Simulation Completed Successfully ---");
    } catch (error) {
        // [VN] Nếu một bước bị lỗi (reject), code sẽ nhảy vào đây.
        // [EN] If a step fails (rejects), the code will jump here.
        console.error("!!! Test Simulation Failed:", error);
    } finally {
        // [VN] Khối này luôn chạy dù thành công hay thất bại (ví dụ: để đóng trình duyệt).
        // [EN] This block always runs whether success or failure (e.g., to close the browser).
        console.log("Cleaning up resources (Closing browser...)");
    }
}

// Thực thi quy trình
runTestSimulation();