function formatTimeDuration(hours, minutes, seconds){
    // Ensure two-digit format (e.g., 01:05:09 instead of 1:5:9)
    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
};

module.exports =  formatTimeDuration;