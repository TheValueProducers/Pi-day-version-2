// Define target date in UTC (March 14, 2025, 00:00:00 UTC)
const targetDateUTC = new Date(Date.UTC(2025, 2, 14, 0, 0, 0)); // March is 2 (zero-based index)

const currentTimeGMT7 = new Date().getTime();
console.log(currentTimeGMT7);

console.log("Target Date in UTC:", targetDateUTC.toLocaleString("en-US", { timeZone: "Asia/Bangkok" })); // Should log in UTC

// Assume the current time in Tokyo
let tokyoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
console.log("Current Time in Tokyo: " + tokyoTime);
 
// Convert Tokyo time to London time
let londonTime = new Date(tokyoTime).toLocaleString("en-US", { timeZone: "Europe/London" });
console.log("Corresponding Time in London: " + londonTime);
