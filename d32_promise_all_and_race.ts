export { };
/**
 * DAY 32: PROMISE.ALL & PARALLEL EXECUTION
 * Mục tiêu: Chạy nhiều tác vụ cùng lúc để tiết kiệm thời gian.
 * Goal: Run multiple tasks concurrently to save time.
 */

// Tác vụ 1 mất 1 giây (Task 1 takes 1s)
const task1 = (): Promise<string> => {
    return new Promise(res => setTimeout(() => {
        console.log("  - Task 1 xong!");
        res("Kết quả 1");
    }, 1000));
}

// Tác vụ 2 mất 2 giây (Task 2 takes 2s)
const task2 = (): Promise<string> => {
    return new Promise(res => setTimeout(() => {
        console.log("  - Task 2 xong!");
        res("Kết quả 2");
    }, 2000));
}

// Tác vụ 3 mất 3 giây (Task 3 takes 3s)
const task3 = (): Promise<string> => {
    return new Promise(res => setTimeout(() => {
        console.log("  - Task 3 xong!");
        res("Kết quả 3");
    }, 3000));
}

/**
 * Sử dụng Promise.all để tối ưu hóa hiệu năng
 * Using Promise.all for performance optimization
 */
async function runAllTasks() {
    console.log("--- BẮT ĐẦU CHẠY SONG SONG (START PARALLEL RUN) ---");
    const startTime = Date.now();

    try {
        // Promise.all sẽ chạy cả 3 hàm cùng một lúc
        // Promise.all will trigger all 3 functions at the same time
        const results = await Promise.all([task1(), task2(), task3()]);

        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000; // Tính theo giây

        console.log("\n-------------------------------------------");
        console.log("Tất cả kết quả (All results):", results);
        console.log(`=> Tổng thời gian thực tế (Total duration): ${duration} giây`);
        console.log("Giải thích: Vì chạy song song nên thời gian chỉ tương đương với tác vụ dài nhất (~3s).");
        console.log("Explanation: Running in parallel means the time only equals the longest task (~3s).");

    } catch (error) {
        console.error("Một tác vụ thất bại kéo theo tất cả thất bại:", error);
    }
}

runAllTasks();
