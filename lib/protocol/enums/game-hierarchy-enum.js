var GameHierarchyEnum;
(function (GameHierarchyEnum) {
    GameHierarchyEnum[GameHierarchyEnum["UNAVAILABLE"] = -1] = "UNAVAILABLE";
    GameHierarchyEnum[GameHierarchyEnum["PLAYER"] = 0] = "PLAYER";
    GameHierarchyEnum[GameHierarchyEnum["MODERATOR"] = 10] = "MODERATOR";
    GameHierarchyEnum[GameHierarchyEnum["GAMEMASTER_PADAWAN"] = 20] = "GAMEMASTER_PADAWAN";
    GameHierarchyEnum[GameHierarchyEnum["GAMEMASTER"] = 30] = "GAMEMASTER";
    GameHierarchyEnum[GameHierarchyEnum["ADMIN"] = 40] = "ADMIN";
})(GameHierarchyEnum || (GameHierarchyEnum = {}));
module.exports = GameHierarchyEnum;
