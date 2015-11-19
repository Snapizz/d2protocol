var AggressableStatusEnum;
(function (AggressableStatusEnum) {
    AggressableStatusEnum[AggressableStatusEnum["NON_AGGRESSABLE"] = 0] = "NON_AGGRESSABLE";
    AggressableStatusEnum[AggressableStatusEnum["PvP_ENABLED_AGGRESSABLE"] = 10] = "PvP_ENABLED_AGGRESSABLE";
    AggressableStatusEnum[AggressableStatusEnum["PvP_ENABLED_NON_AGGRESSABLE"] = 11] = "PvP_ENABLED_NON_AGGRESSABLE";
    AggressableStatusEnum[AggressableStatusEnum["AvA_ENABLED_AGGRESSABLE"] = 20] = "AvA_ENABLED_AGGRESSABLE";
    AggressableStatusEnum[AggressableStatusEnum["AvA_ENABLED_NON_AGGRESSABLE"] = 21] = "AvA_ENABLED_NON_AGGRESSABLE";
    AggressableStatusEnum[AggressableStatusEnum["AvA_DISQUALIFIED"] = 22] = "AvA_DISQUALIFIED";
    AggressableStatusEnum[AggressableStatusEnum["AvA_PREQUALIFIED_AGGRESSABLE"] = 23] = "AvA_PREQUALIFIED_AGGRESSABLE";
})(AggressableStatusEnum || (AggressableStatusEnum = {}));
module.exports = AggressableStatusEnum;
