var ChatErrorEnum;
(function (ChatErrorEnum) {
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_UNKNOWN"] = 0] = "CHAT_ERROR_UNKNOWN";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_RECEIVER_NOT_FOUND"] = 1] = "CHAT_ERROR_RECEIVER_NOT_FOUND";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_INTERIOR_MONOLOGUE"] = 2] = "CHAT_ERROR_INTERIOR_MONOLOGUE";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_NO_GUILD"] = 3] = "CHAT_ERROR_NO_GUILD";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_NO_PARTY"] = 4] = "CHAT_ERROR_NO_PARTY";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_ALLIANCE"] = 5] = "CHAT_ERROR_ALLIANCE";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_INVALID_MAP"] = 6] = "CHAT_ERROR_INVALID_MAP";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_NO_PARTY_ARENA"] = 7] = "CHAT_ERROR_NO_PARTY_ARENA";
    ChatErrorEnum[ChatErrorEnum["CHAT_ERROR_NO_TEAM"] = 8] = "CHAT_ERROR_NO_TEAM";
})(ChatErrorEnum || (ChatErrorEnum = {}));
module.exports = ChatErrorEnum;
