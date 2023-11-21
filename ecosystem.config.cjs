module.exports = {
    apps: [{
        name: "webtorrent-checker",
        script: "npm",
        args: "run start",
        instances: "1",
        exec_mode: "cluster",
    }]
}
