var CharacterCreationResultEnum;
(function (CharacterCreationResultEnum) {
    CharacterCreationResultEnum[CharacterCreationResultEnum["OK"] = 0] = "OK";
    CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NO_REASON"] = 1] = "ERR_NO_REASON";
    CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_INVALID_NAME"] = 2] = "ERR_INVALID_NAME";
    CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NAME_ALREADY_EXISTS"] = 3] = "ERR_NAME_ALREADY_EXISTS";
    CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_TOO_MANY_CHARACTERS"] = 4] = "ERR_TOO_MANY_CHARACTERS";
    CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NOT_ALLOWED"] = 5] = "ERR_NOT_ALLOWED";
    CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NEW_PLAYER_NOT_ALLOWED"] = 6] = "ERR_NEW_PLAYER_NOT_ALLOWED";
    CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_RESTRICED_ZONE"] = 7] = "ERR_RESTRICED_ZONE";
})(CharacterCreationResultEnum || (CharacterCreationResultEnum = {}));
module.exports = CharacterCreationResultEnum;
