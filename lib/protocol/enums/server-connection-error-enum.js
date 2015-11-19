var ServerConnectionErrorEnum;
(function (ServerConnectionErrorEnum) {
    ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_DUE_TO_STATUS"] = 0] = "SERVER_CONNECTION_ERROR_DUE_TO_STATUS";
    ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_NO_REASON"] = 1] = "SERVER_CONNECTION_ERROR_NO_REASON";
    ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED"] = 2] = "SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED";
    ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED"] = 3] = "SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED";
    ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED"] = 4] = "SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED";
    ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY"] = 5] = "SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY";
    ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY"] = 6] = "SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY";
})(ServerConnectionErrorEnum || (ServerConnectionErrorEnum = {}));
module.exports = ServerConnectionErrorEnum;
