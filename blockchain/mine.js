var mining_threads = 1

function checkWork() {
    if (eth.getBlock("pending").transactions.length > 0) {
        if (eth.mining) return;
        console.log("== Pending transactions! Mining...");
        miner.start(mining_threads);
        admin.sleep(30);
        miner.stop();
    }
}
while(1)
    checkWork();