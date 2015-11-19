var ServerStatusEnum;
(function (ServerStatusEnum) {
    ServerStatusEnum[ServerStatusEnum["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
    ServerStatusEnum[ServerStatusEnum["OFFLINE"] = 1] = "OFFLINE";
    ServerStatusEnum[ServerStatusEnum["STARTING"] = 2] = "STARTING";
    ServerStatusEnum[ServerStatusEnum["ONLINE"] = 3] = "ONLINE";
    ServerStatusEnum[ServerStatusEnum["NOJOIN"] = 4] = "NOJOIN";
    ServerStatusEnum[ServerStatusEnum["SAVING"] = 5] = "SAVING";
    ServerStatusEnum[ServerStatusEnum["STOPING"] = 6] = "STOPING";
    ServerStatusEnum[ServerStatusEnum["FULL"] = 7] = "FULL";
})(ServerStatusEnum || (ServerStatusEnum = {}));
module.exports = ServerStatusEnum;
