var ExchangeErrorEnum;
(function (ExchangeErrorEnum) {
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_IMPOSSIBLE"] = 1] = "REQUEST_IMPOSSIBLE";
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_CHARACTER_OCCUPIED"] = 2] = "REQUEST_CHARACTER_OCCUPIED";
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_CHARACTER_JOB_NOT_EQUIPED"] = 3] = "REQUEST_CHARACTER_JOB_NOT_EQUIPED";
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_CHARACTER_TOOL_TOO_FAR"] = 4] = "REQUEST_CHARACTER_TOOL_TOO_FAR";
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_CHARACTER_OVERLOADED"] = 5] = "REQUEST_CHARACTER_OVERLOADED";
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_CHARACTER_NOT_SUSCRIBER"] = 6] = "REQUEST_CHARACTER_NOT_SUSCRIBER";
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_CHARACTER_RESTRICTED"] = 7] = "REQUEST_CHARACTER_RESTRICTED";
    ExchangeErrorEnum[ExchangeErrorEnum["REQUEST_CHARACTER_GUEST"] = 8] = "REQUEST_CHARACTER_GUEST";
    ExchangeErrorEnum[ExchangeErrorEnum["SELL_ERROR"] = 63] = "SELL_ERROR";
    ExchangeErrorEnum[ExchangeErrorEnum["BUY_ERROR"] = 64] = "BUY_ERROR";
    ExchangeErrorEnum[ExchangeErrorEnum["MOUNT_PADDOCK_ERROR"] = 10] = "MOUNT_PADDOCK_ERROR";
    ExchangeErrorEnum[ExchangeErrorEnum["BID_SEARCH_ERROR"] = 11] = "BID_SEARCH_ERROR";
})(ExchangeErrorEnum || (ExchangeErrorEnum = {}));
module.exports = ExchangeErrorEnum;
