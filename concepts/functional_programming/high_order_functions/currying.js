const userLogs = (userName) => (message) => console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");
log("attempted to load 20 fake members");
