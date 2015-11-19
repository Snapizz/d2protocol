var PresetUseResultEnum;
(function (PresetUseResultEnum) {
    PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_OK"] = 1] = "PRESET_USE_OK";
    PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_OK_PARTIAL"] = 2] = "PRESET_USE_OK_PARTIAL";
    PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_UNKNOWN"] = 3] = "PRESET_USE_ERR_UNKNOWN";
    PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_CRITERION"] = 4] = "PRESET_USE_ERR_CRITERION";
    PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_BAD_PRESET_ID"] = 5] = "PRESET_USE_ERR_BAD_PRESET_ID";
    PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_COOLDOWN"] = 6] = "PRESET_USE_ERR_COOLDOWN";
})(PresetUseResultEnum || (PresetUseResultEnum = {}));
module.exports = PresetUseResultEnum;
