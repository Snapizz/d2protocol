var NicknameErrorEnum;
(function (NicknameErrorEnum) {
    NicknameErrorEnum[NicknameErrorEnum["ALREADY_USED"] = 1] = "ALREADY_USED";
    NicknameErrorEnum[NicknameErrorEnum["SAME_AS_LOGIN"] = 2] = "SAME_AS_LOGIN";
    NicknameErrorEnum[NicknameErrorEnum["TOO_SIMILAR_TO_LOGIN"] = 3] = "TOO_SIMILAR_TO_LOGIN";
    NicknameErrorEnum[NicknameErrorEnum["INVALID_NICK"] = 4] = "INVALID_NICK";
    NicknameErrorEnum[NicknameErrorEnum["UNKNOWN_NICK_ERROR"] = 99] = "UNKNOWN_NICK_ERROR";
})(NicknameErrorEnum || (NicknameErrorEnum = {}));
module.exports = NicknameErrorEnum;
