var PlayerStateEnum;
(function (PlayerStateEnum) {
    PlayerStateEnum[PlayerStateEnum["NOT_CONNECTED"] = 0] = "NOT_CONNECTED";
    PlayerStateEnum[PlayerStateEnum["GAME_TYPE_ROLEPLAY"] = 1] = "GAME_TYPE_ROLEPLAY";
    PlayerStateEnum[PlayerStateEnum["GAME_TYPE_FIGHT"] = 2] = "GAME_TYPE_FIGHT";
    PlayerStateEnum[PlayerStateEnum["UNKNOWN_STATE"] = 99] = "UNKNOWN_STATE";
})(PlayerStateEnum || (PlayerStateEnum = {}));
module.exports = PlayerStateEnum;
