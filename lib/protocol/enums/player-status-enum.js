var PlayerStatusEnum;
(function (PlayerStatusEnum) {
    PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_OFFLINE"] = 0] = "PLAYER_STATUS_OFFLINE";
    PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_UNKNOWN"] = 1] = "PLAYER_STATUS_UNKNOWN";
    PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_AVAILABLE"] = 10] = "PLAYER_STATUS_AVAILABLE";
    PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_IDLE"] = 20] = "PLAYER_STATUS_IDLE";
    PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_AFK"] = 21] = "PLAYER_STATUS_AFK";
    PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_PRIVATE"] = 30] = "PLAYER_STATUS_PRIVATE";
    PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_SOLO"] = 40] = "PLAYER_STATUS_SOLO";
})(PlayerStatusEnum || (PlayerStatusEnum = {}));
module.exports = PlayerStatusEnum;
