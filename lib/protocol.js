/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ByteArray = require('ts-bytearray');
var Protocol;
(function (Protocol) {
    var Metadata = (function () {
        function Metadata() {
        }
        Metadata.PROTOCOL_BUILD = 1666;
        Metadata.PROTOCOL_REQUIRED_BUILD = 1666;
        Metadata.PROTOCOL_DATE = 'Mon, 17 Aug 2015 15:51:44 +0200';
        Metadata.PROTOCOL_VISIBILITY = 'local';
        return Metadata;
    })();
    Protocol.Metadata = Metadata;
    (function (ProtocolConstantsEnum) {
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAP_CELL_COUNT"] = 560] = "MAP_CELL_COUNT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_LEVEL"] = 200] = "MAX_LEVEL";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_GUILD_LEVEL"] = 200] = "MAX_GUILD_LEVEL";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_MOUNT_LEVEL"] = 100] = "MAX_MOUNT_LEVEL";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_CHAT_LEN"] = 512] = "MAX_CHAT_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["USER_MAX_CHAT_LEN"] = 256] = "USER_MAX_CHAT_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_STAT_LEN"] = 512] = "MAX_STAT_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_STAT_BY_MSG"] = 20] = "MAX_STAT_BY_MSG";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_LOGIN_LEN"] = 3] = "MIN_LOGIN_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_LOGIN_LEN"] = 50] = "MAX_LOGIN_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_PLAYER_NAME_LEN"] = 2] = "MIN_PLAYER_NAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_PLAYER_NAME_LEN"] = 20] = "MAX_PLAYER_NAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_NICK_LEN"] = 2] = "MIN_NICK_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_NICK_LEN"] = 30] = "MAX_NICK_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_GUILDNAME_LEN"] = 3] = "MIN_GUILDNAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_GUILDNAME_LEN"] = 30] = "MAX_GUILDNAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_ALLIANCENAME_LEN"] = 3] = "MIN_ALLIANCENAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_ALLIANCENAME_LEN"] = 30] = "MAX_ALLIANCENAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_ALLIANCETAG_LEN"] = 3] = "MIN_ALLIANCETAG_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_ALLIANCETAG_LEN"] = 5] = "MAX_ALLIANCETAG_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_PARTY_NAME_LEN"] = 0] = "MIN_PARTY_NAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_PARTY_NAME_LEN"] = 25] = "MAX_PARTY_NAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_PLAYER_COLOR"] = 5] = "MAX_PLAYER_COLOR";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_ENTITY_COLOR"] = 10] = "MAX_ENTITY_COLOR";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_PLAYERS_PER_TEAM"] = 8] = "MAX_PLAYERS_PER_TEAM";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_MEMBERS_PER_PARTY"] = 8] = "MAX_MEMBERS_PER_PARTY";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_GUESTS_PER_PARTY"] = 7] = "MAX_GUESTS_PER_PARTY";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_MEMBERS_PER_ARENA_PARTY"] = 5] = "MAX_MEMBERS_PER_ARENA_PARTY";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_MONSTERS_IN_GROUP_ON_MAP"] = 16] = "MAX_MONSTERS_IN_GROUP_ON_MAP";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_CHAT_OBJECT_REF"] = 16] = "MAX_CHAT_OBJECT_REF";
        ProtocolConstantsEnum[ProtocolConstantsEnum["NOT_EQUIPED"] = 63] = "NOT_EQUIPED";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_EQUIPED"] = 255] = "MAX_EQUIPED";
        ProtocolConstantsEnum[ProtocolConstantsEnum["SLOTS_EQUIPABLE_BY_USER"] = 16] = "SLOTS_EQUIPABLE_BY_USER";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_CRAFT_SLOT"] = 9] = "MAX_CRAFT_SLOT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_JOB_LEVEL"] = 200] = "MAX_JOB_LEVEL";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_HONOR"] = 20000] = "MAX_HONOR";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_SHORTCUT"] = 99] = "MAX_SHORTCUT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_ARENA_RANK"] = 2300] = "MAX_ARENA_RANK";
        ProtocolConstantsEnum[ProtocolConstantsEnum["CHAR_MIN_LEVEL_ARENA"] = 50] = "CHAR_MIN_LEVEL_ARENA";
        ProtocolConstantsEnum[ProtocolConstantsEnum["CHAR_MIN_LEVEL_RIDE"] = 60] = "CHAR_MIN_LEVEL_RIDE";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_DUNGEON_REGISTER"] = 10] = "MAX_DUNGEON_REGISTER";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_RIDE_NAME_LEN"] = 0] = "MIN_RIDE_NAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_RIDE_NAME_LEN"] = 16] = "MAX_RIDE_NAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_EFFECTS_COUNT"] = 100] = "MAX_EFFECTS_COUNT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_LOCKABLE_CODE_LEN"] = 8] = "MAX_LOCKABLE_CODE_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_PRESET_ITEM_COUNT"] = 24] = "MAX_PRESET_ITEM_COUNT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MIN_OBJ_COUNT_BY_XFERT"] = 1] = "MIN_OBJ_COUNT_BY_XFERT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_OBJ_COUNT_BY_XFERT"] = 800] = "MAX_OBJ_COUNT_BY_XFERT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_OBJ_COUNT_BY_DECRAFT"] = 50] = "MAX_OBJ_COUNT_BY_DECRAFT";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_WAVE"] = 100] = "MAX_WAVE";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_OBJECT_EFFECT_STRING_LEN"] = 30] = "MAX_OBJECT_EFFECT_STRING_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_PLAYER_OR_ACCOUNT_NAME_LEN"] = 31] = "MAX_PLAYER_OR_ACCOUNT_NAME_LEN";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_MEMBERS_PER_GUILD"] = 240] = "MAX_MEMBERS_PER_GUILD";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_ADDITIONNAL_PER_CARAC"] = 100] = "MAX_ADDITIONNAL_PER_CARAC";
        ProtocolConstantsEnum[ProtocolConstantsEnum["MAX_RECONNECTION_ATTEMPTS"] = 5] = "MAX_RECONNECTION_ATTEMPTS";
    })(Protocol.ProtocolConstantsEnum || (Protocol.ProtocolConstantsEnum = {}));
    var ProtocolConstantsEnum = Protocol.ProtocolConstantsEnum;
    (function (AccessoryPreviewErrorEnum) {
        AccessoryPreviewErrorEnum[AccessoryPreviewErrorEnum["PREVIEW_ERROR"] = 0] = "PREVIEW_ERROR";
        AccessoryPreviewErrorEnum[AccessoryPreviewErrorEnum["PREVIEW_COOLDOWN"] = 1] = "PREVIEW_COOLDOWN";
        AccessoryPreviewErrorEnum[AccessoryPreviewErrorEnum["PREVIEW_BAD_ITEM"] = 2] = "PREVIEW_BAD_ITEM";
    })(Protocol.AccessoryPreviewErrorEnum || (Protocol.AccessoryPreviewErrorEnum = {}));
    var AccessoryPreviewErrorEnum = Protocol.AccessoryPreviewErrorEnum;
    (function (AggressableStatusEnum) {
        AggressableStatusEnum[AggressableStatusEnum["NON_AGGRESSABLE"] = 0] = "NON_AGGRESSABLE";
        AggressableStatusEnum[AggressableStatusEnum["PvP_ENABLED_AGGRESSABLE"] = 10] = "PvP_ENABLED_AGGRESSABLE";
        AggressableStatusEnum[AggressableStatusEnum["PvP_ENABLED_NON_AGGRESSABLE"] = 11] = "PvP_ENABLED_NON_AGGRESSABLE";
        AggressableStatusEnum[AggressableStatusEnum["AvA_ENABLED_AGGRESSABLE"] = 20] = "AvA_ENABLED_AGGRESSABLE";
        AggressableStatusEnum[AggressableStatusEnum["AvA_ENABLED_NON_AGGRESSABLE"] = 21] = "AvA_ENABLED_NON_AGGRESSABLE";
        AggressableStatusEnum[AggressableStatusEnum["AvA_DISQUALIFIED"] = 22] = "AvA_DISQUALIFIED";
        AggressableStatusEnum[AggressableStatusEnum["AvA_PREQUALIFIED_AGGRESSABLE"] = 23] = "AvA_PREQUALIFIED_AGGRESSABLE";
    })(Protocol.AggressableStatusEnum || (Protocol.AggressableStatusEnum = {}));
    var AggressableStatusEnum = Protocol.AggressableStatusEnum;
    (function (AlignmentSideEnum) {
        AlignmentSideEnum[AlignmentSideEnum["ALIGNMENT_UNKNOWN"] = -2] = "ALIGNMENT_UNKNOWN";
        AlignmentSideEnum[AlignmentSideEnum["ALIGNMENT_WITHOUT"] = -1] = "ALIGNMENT_WITHOUT";
        AlignmentSideEnum[AlignmentSideEnum["ALIGNMENT_NEUTRAL"] = 0] = "ALIGNMENT_NEUTRAL";
        AlignmentSideEnum[AlignmentSideEnum["ALIGNMENT_ANGEL"] = 1] = "ALIGNMENT_ANGEL";
        AlignmentSideEnum[AlignmentSideEnum["ALIGNMENT_EVIL"] = 2] = "ALIGNMENT_EVIL";
        AlignmentSideEnum[AlignmentSideEnum["ALIGNMENT_MERCENARY"] = 3] = "ALIGNMENT_MERCENARY";
    })(Protocol.AlignmentSideEnum || (Protocol.AlignmentSideEnum = {}));
    var AlignmentSideEnum = Protocol.AlignmentSideEnum;
    (function (AllianceRightsBitEnum) {
        AllianceRightsBitEnum[AllianceRightsBitEnum["ALLIANCE_RIGHT_NONE"] = 0] = "ALLIANCE_RIGHT_NONE";
        AllianceRightsBitEnum[AllianceRightsBitEnum["ALLIANCE_RIGHT_BOSS"] = 1] = "ALLIANCE_RIGHT_BOSS";
        AllianceRightsBitEnum[AllianceRightsBitEnum["ALLIANCE_RIGHT_MANAGE_PRISMS"] = 2] = "ALLIANCE_RIGHT_MANAGE_PRISMS";
        AllianceRightsBitEnum[AllianceRightsBitEnum["ALLIANCE_RIGHT_TALK_IN_CHAN"] = 4] = "ALLIANCE_RIGHT_TALK_IN_CHAN";
        AllianceRightsBitEnum[AllianceRightsBitEnum["ALLIANCE_RIGHT_RECRUIT_GUILDS"] = 8] = "ALLIANCE_RIGHT_RECRUIT_GUILDS";
        AllianceRightsBitEnum[AllianceRightsBitEnum["ALLIANCE_RIGHT_KICK_GUILDS"] = 16] = "ALLIANCE_RIGHT_KICK_GUILDS";
        AllianceRightsBitEnum[AllianceRightsBitEnum["ALLIANCE_RIGHT_MANAGE_RIGHTS"] = 32] = "ALLIANCE_RIGHT_MANAGE_RIGHTS";
    })(Protocol.AllianceRightsBitEnum || (Protocol.AllianceRightsBitEnum = {}));
    var AllianceRightsBitEnum = Protocol.AllianceRightsBitEnum;
    (function (BreedEnum) {
        BreedEnum[BreedEnum["UNDEFINED"] = 0] = "UNDEFINED";
        BreedEnum[BreedEnum["Feca"] = 1] = "Feca";
        BreedEnum[BreedEnum["Osamodas"] = 2] = "Osamodas";
        BreedEnum[BreedEnum["Enutrof"] = 3] = "Enutrof";
        BreedEnum[BreedEnum["Sram"] = 4] = "Sram";
        BreedEnum[BreedEnum["Xelor"] = 5] = "Xelor";
        BreedEnum[BreedEnum["Ecaflip"] = 6] = "Ecaflip";
        BreedEnum[BreedEnum["Eniripsa"] = 7] = "Eniripsa";
        BreedEnum[BreedEnum["Iop"] = 8] = "Iop";
        BreedEnum[BreedEnum["Cra"] = 9] = "Cra";
        BreedEnum[BreedEnum["Sadida"] = 10] = "Sadida";
        BreedEnum[BreedEnum["Sacrieur"] = 11] = "Sacrieur";
        BreedEnum[BreedEnum["Pandawa"] = 12] = "Pandawa";
        BreedEnum[BreedEnum["Roublard"] = 13] = "Roublard";
        BreedEnum[BreedEnum["Zobal"] = 14] = "Zobal";
        BreedEnum[BreedEnum["Steamer"] = 15] = "Steamer";
        BreedEnum[BreedEnum["Eliotrope"] = 16] = "Eliotrope";
        BreedEnum[BreedEnum["SUMMONED"] = -1] = "SUMMONED";
        BreedEnum[BreedEnum["MONSTER"] = -2] = "MONSTER";
        BreedEnum[BreedEnum["MONSTER_GROUP"] = -3] = "MONSTER_GROUP";
        BreedEnum[BreedEnum["NPC"] = -4] = "NPC";
        BreedEnum[BreedEnum["HUMAN_VENDOR"] = -5] = "HUMAN_VENDOR";
        BreedEnum[BreedEnum["TAX_COLLECTOR"] = -6] = "TAX_COLLECTOR";
        BreedEnum[BreedEnum["MUTANT"] = -7] = "MUTANT";
        BreedEnum[BreedEnum["MUTANT_IN_DUNGEON"] = -8] = "MUTANT_IN_DUNGEON";
        BreedEnum[BreedEnum["MOUNT_OUTSIDE"] = -9] = "MOUNT_OUTSIDE";
        BreedEnum[BreedEnum["PRISM"] = -10] = "PRISM";
        BreedEnum[BreedEnum["INCARNATION"] = -11] = "INCARNATION";
    })(Protocol.BreedEnum || (Protocol.BreedEnum = {}));
    var BreedEnum = Protocol.BreedEnum;
    (function (BuildTypeEnum) {
        BuildTypeEnum[BuildTypeEnum["RELEASE"] = 0] = "RELEASE";
        BuildTypeEnum[BuildTypeEnum["BETA"] = 1] = "BETA";
        BuildTypeEnum[BuildTypeEnum["ALPHA"] = 2] = "ALPHA";
        BuildTypeEnum[BuildTypeEnum["TESTING"] = 3] = "TESTING";
        BuildTypeEnum[BuildTypeEnum["INTERNAL"] = 4] = "INTERNAL";
        BuildTypeEnum[BuildTypeEnum["DEBUG"] = 5] = "DEBUG";
        BuildTypeEnum[BuildTypeEnum["EXPERIMENTAL"] = 6] = "EXPERIMENTAL";
    })(Protocol.BuildTypeEnum || (Protocol.BuildTypeEnum = {}));
    var BuildTypeEnum = Protocol.BuildTypeEnum;
    (function (CharacterCreationResultEnum) {
        CharacterCreationResultEnum[CharacterCreationResultEnum["OK"] = 0] = "OK";
        CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NO_REASON"] = 1] = "ERR_NO_REASON";
        CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_INVALID_NAME"] = 2] = "ERR_INVALID_NAME";
        CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NAME_ALREADY_EXISTS"] = 3] = "ERR_NAME_ALREADY_EXISTS";
        CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_TOO_MANY_CHARACTERS"] = 4] = "ERR_TOO_MANY_CHARACTERS";
        CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NOT_ALLOWED"] = 5] = "ERR_NOT_ALLOWED";
        CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_NEW_PLAYER_NOT_ALLOWED"] = 6] = "ERR_NEW_PLAYER_NOT_ALLOWED";
        CharacterCreationResultEnum[CharacterCreationResultEnum["ERR_RESTRICED_ZONE"] = 7] = "ERR_RESTRICED_ZONE";
    })(Protocol.CharacterCreationResultEnum || (Protocol.CharacterCreationResultEnum = {}));
    var CharacterCreationResultEnum = Protocol.CharacterCreationResultEnum;
    (function (CharacterDeletionErrorEnum) {
        CharacterDeletionErrorEnum[CharacterDeletionErrorEnum["DEL_ERR_NO_REASON"] = 1] = "DEL_ERR_NO_REASON";
        CharacterDeletionErrorEnum[CharacterDeletionErrorEnum["DEL_ERR_TOO_MANY_CHAR_DELETION"] = 2] = "DEL_ERR_TOO_MANY_CHAR_DELETION";
        CharacterDeletionErrorEnum[CharacterDeletionErrorEnum["DEL_ERR_BAD_SECRET_ANSWER"] = 3] = "DEL_ERR_BAD_SECRET_ANSWER";
        CharacterDeletionErrorEnum[CharacterDeletionErrorEnum["DEL_ERR_RESTRICED_ZONE"] = 4] = "DEL_ERR_RESTRICED_ZONE";
    })(Protocol.CharacterDeletionErrorEnum || (Protocol.CharacterDeletionErrorEnum = {}));
    var CharacterDeletionErrorEnum = Protocol.CharacterDeletionErrorEnum;
    (function (CharacterInventoryPositionEnum) {
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_HAT"] = 6] = "ACCESSORY_POSITION_HAT";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_CAPE"] = 7] = "ACCESSORY_POSITION_CAPE";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_BELT"] = 3] = "ACCESSORY_POSITION_BELT";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_BOOTS"] = 5] = "ACCESSORY_POSITION_BOOTS";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_AMULET"] = 0] = "ACCESSORY_POSITION_AMULET";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_SHIELD"] = 15] = "ACCESSORY_POSITION_SHIELD";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_WEAPON"] = 1] = "ACCESSORY_POSITION_WEAPON";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["ACCESSORY_POSITION_PETS"] = 8] = "ACCESSORY_POSITION_PETS";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_RING_LEFT"] = 2] = "INVENTORY_POSITION_RING_LEFT";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_RING_RIGHT"] = 4] = "INVENTORY_POSITION_RING_RIGHT";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_DOFUS_1"] = 9] = "INVENTORY_POSITION_DOFUS_1";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_DOFUS_2"] = 10] = "INVENTORY_POSITION_DOFUS_2";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_DOFUS_3"] = 11] = "INVENTORY_POSITION_DOFUS_3";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_DOFUS_4"] = 12] = "INVENTORY_POSITION_DOFUS_4";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_DOFUS_5"] = 13] = "INVENTORY_POSITION_DOFUS_5";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_DOFUS_6"] = 14] = "INVENTORY_POSITION_DOFUS_6";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_MOUNT"] = 16] = "INVENTORY_POSITION_MOUNT";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_MUTATION"] = 20] = "INVENTORY_POSITION_MUTATION";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_BOOST_FOOD"] = 21] = "INVENTORY_POSITION_BOOST_FOOD";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_FIRST_BONUS"] = 22] = "INVENTORY_POSITION_FIRST_BONUS";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_SECOND_BONUS"] = 23] = "INVENTORY_POSITION_SECOND_BONUS";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_FIRST_MALUS"] = 24] = "INVENTORY_POSITION_FIRST_MALUS";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_SECOND_MALUS"] = 25] = "INVENTORY_POSITION_SECOND_MALUS";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_ROLEPLAY_BUFFER"] = 26] = "INVENTORY_POSITION_ROLEPLAY_BUFFER";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_FOLLOWER"] = 27] = "INVENTORY_POSITION_FOLLOWER";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_COMPANION"] = 28] = "INVENTORY_POSITION_COMPANION";
        CharacterInventoryPositionEnum[CharacterInventoryPositionEnum["INVENTORY_POSITION_NOT_EQUIPED"] = 63] = "INVENTORY_POSITION_NOT_EQUIPED";
    })(Protocol.CharacterInventoryPositionEnum || (Protocol.CharacterInventoryPositionEnum = {}));
    var CharacterInventoryPositionEnum = Protocol.CharacterInventoryPositionEnum;
    (function (CharacterRemodelingEnum) {
        CharacterRemodelingEnum[CharacterRemodelingEnum["CHARACTER_REMODELING_NOT_APPLICABLE"] = 0] = "CHARACTER_REMODELING_NOT_APPLICABLE";
        CharacterRemodelingEnum[CharacterRemodelingEnum["CHARACTER_REMODELING_NAME"] = 1] = "CHARACTER_REMODELING_NAME";
        CharacterRemodelingEnum[CharacterRemodelingEnum["CHARACTER_REMODELING_COLORS"] = 2] = "CHARACTER_REMODELING_COLORS";
        CharacterRemodelingEnum[CharacterRemodelingEnum["CHARACTER_REMODELING_COSMETIC"] = 4] = "CHARACTER_REMODELING_COSMETIC";
        CharacterRemodelingEnum[CharacterRemodelingEnum["CHARACTER_REMODELING_BREED"] = 8] = "CHARACTER_REMODELING_BREED";
        CharacterRemodelingEnum[CharacterRemodelingEnum["CHARACTER_REMODELING_GENDER"] = 16] = "CHARACTER_REMODELING_GENDER";
    })(Protocol.CharacterRemodelingEnum || (Protocol.CharacterRemodelingEnum = {}));
    var CharacterRemodelingEnum = Protocol.CharacterRemodelingEnum;
    (function (CharacterSpellModificationTypeEnum) {
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["INVALID_MODIFICATION"] = 0] = "INVALID_MODIFICATION";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["RANGEABLE"] = 1] = "RANGEABLE";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["DAMAGE"] = 2] = "DAMAGE";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["BASE_DAMAGE"] = 3] = "BASE_DAMAGE";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["HEAL_BONUS"] = 4] = "HEAL_BONUS";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["AP_COST"] = 5] = "AP_COST";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["CAST_INTERVAL"] = 6] = "CAST_INTERVAL";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["CAST_INTERVAL_SET"] = 7] = "CAST_INTERVAL_SET";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["CRITICAL_HIT_BONUS"] = 8] = "CRITICAL_HIT_BONUS";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["CAST_LINE"] = 9] = "CAST_LINE";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["LOS"] = 10] = "LOS";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["MAX_CAST_PER_TURN"] = 11] = "MAX_CAST_PER_TURN";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["MAX_CAST_PER_TARGET"] = 12] = "MAX_CAST_PER_TARGET";
        CharacterSpellModificationTypeEnum[CharacterSpellModificationTypeEnum["RANGE"] = 13] = "RANGE";
    })(Protocol.CharacterSpellModificationTypeEnum || (Protocol.CharacterSpellModificationTypeEnum = {}));
    var CharacterSpellModificationTypeEnum = Protocol.CharacterSpellModificationTypeEnum;
    (function (ChatActivableChannelsEnum) {
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_GLOBAL"] = 0] = "CHANNEL_GLOBAL";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_TEAM"] = 1] = "CHANNEL_TEAM";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_GUILD"] = 2] = "CHANNEL_GUILD";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_ALLIANCE"] = 3] = "CHANNEL_ALLIANCE";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_PARTY"] = 4] = "CHANNEL_PARTY";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_SALES"] = 5] = "CHANNEL_SALES";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_SEEK"] = 6] = "CHANNEL_SEEK";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_NOOB"] = 7] = "CHANNEL_NOOB";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_ADMIN"] = 8] = "CHANNEL_ADMIN";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_ADS"] = 12] = "CHANNEL_ADS";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["CHANNEL_ARENA"] = 13] = "CHANNEL_ARENA";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["PSEUDO_CHANNEL_PRIVATE"] = 9] = "PSEUDO_CHANNEL_PRIVATE";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["PSEUDO_CHANNEL_INFO"] = 10] = "PSEUDO_CHANNEL_INFO";
        ChatActivableChannelsEnum[ChatActivableChannelsEnum["PSEUDO_CHANNEL_FIGHT_LOG"] = 11] = "PSEUDO_CHANNEL_FIGHT_LOG";
    })(Protocol.ChatActivableChannelsEnum || (Protocol.ChatActivableChannelsEnum = {}));
    var ChatActivableChannelsEnum = Protocol.ChatActivableChannelsEnum;
    (function (ChatChannelsMultiEnum) {
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_GLOBAL"] = 0] = "CHANNEL_GLOBAL";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_TEAM"] = 1] = "CHANNEL_TEAM";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_GUILD"] = 2] = "CHANNEL_GUILD";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_ALLIANCE"] = 3] = "CHANNEL_ALLIANCE";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_PARTY"] = 4] = "CHANNEL_PARTY";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_SALES"] = 5] = "CHANNEL_SALES";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_SEEK"] = 6] = "CHANNEL_SEEK";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_NOOB"] = 7] = "CHANNEL_NOOB";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_ADMIN"] = 8] = "CHANNEL_ADMIN";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_ADS"] = 12] = "CHANNEL_ADS";
        ChatChannelsMultiEnum[ChatChannelsMultiEnum["CHANNEL_ARENA"] = 13] = "CHANNEL_ARENA";
    })(Protocol.ChatChannelsMultiEnum || (Protocol.ChatChannelsMultiEnum = {}));
    var ChatChannelsMultiEnum = Protocol.ChatChannelsMultiEnum;
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
    })(Protocol.ChatErrorEnum || (Protocol.ChatErrorEnum = {}));
    var ChatErrorEnum = Protocol.ChatErrorEnum;
    (function (ClientInstallTypeEnum) {
        ClientInstallTypeEnum[ClientInstallTypeEnum["CLIENT_INSTALL_UNKNOWN"] = 0] = "CLIENT_INSTALL_UNKNOWN";
        ClientInstallTypeEnum[ClientInstallTypeEnum["CLIENT_BUNDLE"] = 1] = "CLIENT_BUNDLE";
        ClientInstallTypeEnum[ClientInstallTypeEnum["CLIENT_STREAMING"] = 2] = "CLIENT_STREAMING";
    })(Protocol.ClientInstallTypeEnum || (Protocol.ClientInstallTypeEnum = {}));
    var ClientInstallTypeEnum = Protocol.ClientInstallTypeEnum;
    (function (ClientTechnologyEnum) {
        ClientTechnologyEnum[ClientTechnologyEnum["CLIENT_TECHNOLOGY_UNKNOWN"] = 0] = "CLIENT_TECHNOLOGY_UNKNOWN";
        ClientTechnologyEnum[ClientTechnologyEnum["CLIENT_AIR"] = 1] = "CLIENT_AIR";
        ClientTechnologyEnum[ClientTechnologyEnum["CLIENT_FLASH"] = 2] = "CLIENT_FLASH";
    })(Protocol.ClientTechnologyEnum || (Protocol.ClientTechnologyEnum = {}));
    var ClientTechnologyEnum = Protocol.ClientTechnologyEnum;
    (function (CompassTypeEnum) {
        CompassTypeEnum[CompassTypeEnum["COMPASS_TYPE_SIMPLE"] = 0] = "COMPASS_TYPE_SIMPLE";
        CompassTypeEnum[CompassTypeEnum["COMPASS_TYPE_SPOUSE"] = 1] = "COMPASS_TYPE_SPOUSE";
        CompassTypeEnum[CompassTypeEnum["COMPASS_TYPE_PARTY"] = 2] = "COMPASS_TYPE_PARTY";
        CompassTypeEnum[CompassTypeEnum["COMPASS_TYPE_PVP_SEEK"] = 3] = "COMPASS_TYPE_PVP_SEEK";
        CompassTypeEnum[CompassTypeEnum["COMPASS_TYPE_QUEST"] = 4] = "COMPASS_TYPE_QUEST";
    })(Protocol.CompassTypeEnum || (Protocol.CompassTypeEnum = {}));
    var CompassTypeEnum = Protocol.CompassTypeEnum;
    (function (ConsoleMessageTypeEnum) {
        ConsoleMessageTypeEnum[ConsoleMessageTypeEnum["CONSOLE_TEXT_MESSAGE"] = 0] = "CONSOLE_TEXT_MESSAGE";
        ConsoleMessageTypeEnum[ConsoleMessageTypeEnum["CONSOLE_INFO_MESSAGE"] = 1] = "CONSOLE_INFO_MESSAGE";
        ConsoleMessageTypeEnum[ConsoleMessageTypeEnum["CONSOLE_ERR_MESSAGE"] = 2] = "CONSOLE_ERR_MESSAGE";
    })(Protocol.ConsoleMessageTypeEnum || (Protocol.ConsoleMessageTypeEnum = {}));
    var ConsoleMessageTypeEnum = Protocol.ConsoleMessageTypeEnum;
    (function (CraftResultEnum) {
        CraftResultEnum[CraftResultEnum["CRAFT_IMPOSSIBLE"] = 0] = "CRAFT_IMPOSSIBLE";
        CraftResultEnum[CraftResultEnum["CRAFT_FAILED"] = 1] = "CRAFT_FAILED";
        CraftResultEnum[CraftResultEnum["CRAFT_SUCCESS"] = 2] = "CRAFT_SUCCESS";
        CraftResultEnum[CraftResultEnum["CRAFT_NEUTRAL"] = 3] = "CRAFT_NEUTRAL";
    })(Protocol.CraftResultEnum || (Protocol.CraftResultEnum = {}));
    var CraftResultEnum = Protocol.CraftResultEnum;
    (function (DebugLevelEnum) {
        DebugLevelEnum[DebugLevelEnum["LEVEL_TRACE"] = 0] = "LEVEL_TRACE";
        DebugLevelEnum[DebugLevelEnum["LEVEL_DEBUG"] = 1] = "LEVEL_DEBUG";
        DebugLevelEnum[DebugLevelEnum["LEVEL_INFO"] = 2] = "LEVEL_INFO";
        DebugLevelEnum[DebugLevelEnum["LEVEL_WARN"] = 3] = "LEVEL_WARN";
        DebugLevelEnum[DebugLevelEnum["LEVEL_ERROR"] = 4] = "LEVEL_ERROR";
        DebugLevelEnum[DebugLevelEnum["LEVEL_FATAL"] = 5] = "LEVEL_FATAL";
    })(Protocol.DebugLevelEnum || (Protocol.DebugLevelEnum = {}));
    var DebugLevelEnum = Protocol.DebugLevelEnum;
    (function (DelayedActionTypeEnum) {
        DelayedActionTypeEnum[DelayedActionTypeEnum["DELAYED_ACTION_DISCONNECT"] = 0] = "DELAYED_ACTION_DISCONNECT";
        DelayedActionTypeEnum[DelayedActionTypeEnum["DELAYED_ACTION_OBJECT_USE"] = 1] = "DELAYED_ACTION_OBJECT_USE";
        DelayedActionTypeEnum[DelayedActionTypeEnum["DELAYED_ACTION_JOIN_CHARACTER"] = 2] = "DELAYED_ACTION_JOIN_CHARACTER";
        DelayedActionTypeEnum[DelayedActionTypeEnum["DELAYED_ACTION_AGGRESSION_IMMUNE"] = 3] = "DELAYED_ACTION_AGGRESSION_IMMUNE";
    })(Protocol.DelayedActionTypeEnum || (Protocol.DelayedActionTypeEnum = {}));
    var DelayedActionTypeEnum = Protocol.DelayedActionTypeEnum;
    (function (DialogTypeEnum) {
        DialogTypeEnum[DialogTypeEnum["DIALOG_BOOK"] = 0] = "DIALOG_BOOK";
        DialogTypeEnum[DialogTypeEnum["DIALOG_DIALOG"] = 1] = "DIALOG_DIALOG";
        DialogTypeEnum[DialogTypeEnum["DIALOG_LOCKABLE"] = 2] = "DIALOG_LOCKABLE";
        DialogTypeEnum[DialogTypeEnum["DIALOG_PURCHASABLE"] = 3] = "DIALOG_PURCHASABLE";
        DialogTypeEnum[DialogTypeEnum["DIALOG_GUILD_INVITATION"] = 4] = "DIALOG_GUILD_INVITATION";
        DialogTypeEnum[DialogTypeEnum["DIALOG_GUILD_CREATE"] = 5] = "DIALOG_GUILD_CREATE";
        DialogTypeEnum[DialogTypeEnum["DIALOG_GUILD_RENAME"] = 6] = "DIALOG_GUILD_RENAME";
        DialogTypeEnum[DialogTypeEnum["DIALOG_MARRIAGE"] = 7] = "DIALOG_MARRIAGE";
        DialogTypeEnum[DialogTypeEnum["DIALOG_DUNGEON_MEETING"] = 8] = "DIALOG_DUNGEON_MEETING";
        DialogTypeEnum[DialogTypeEnum["DIALOG_SPELL_FORGET"] = 9] = "DIALOG_SPELL_FORGET";
        DialogTypeEnum[DialogTypeEnum["DIALOG_TELEPORTER"] = 10] = "DIALOG_TELEPORTER";
        DialogTypeEnum[DialogTypeEnum["DIALOG_EXCHANGE"] = 11] = "DIALOG_EXCHANGE";
        DialogTypeEnum[DialogTypeEnum["DIALOG_ALLIANCE_INVITATION"] = 12] = "DIALOG_ALLIANCE_INVITATION";
        DialogTypeEnum[DialogTypeEnum["DIALOG_ALLIANCE_CREATE"] = 13] = "DIALOG_ALLIANCE_CREATE";
        DialogTypeEnum[DialogTypeEnum["DIALOG_ALLIANCE_RENAME"] = 14] = "DIALOG_ALLIANCE_RENAME";
    })(Protocol.DialogTypeEnum || (Protocol.DialogTypeEnum = {}));
    var DialogTypeEnum = Protocol.DialogTypeEnum;
    (function (DirectionsEnum) {
        DirectionsEnum[DirectionsEnum["DIRECTION_EAST"] = 0] = "DIRECTION_EAST";
        DirectionsEnum[DirectionsEnum["DIRECTION_SOUTH_EAST"] = 1] = "DIRECTION_SOUTH_EAST";
        DirectionsEnum[DirectionsEnum["DIRECTION_SOUTH"] = 2] = "DIRECTION_SOUTH";
        DirectionsEnum[DirectionsEnum["DIRECTION_SOUTH_WEST"] = 3] = "DIRECTION_SOUTH_WEST";
        DirectionsEnum[DirectionsEnum["DIRECTION_WEST"] = 4] = "DIRECTION_WEST";
        DirectionsEnum[DirectionsEnum["DIRECTION_NORTH_WEST"] = 5] = "DIRECTION_NORTH_WEST";
        DirectionsEnum[DirectionsEnum["DIRECTION_NORTH"] = 6] = "DIRECTION_NORTH";
        DirectionsEnum[DirectionsEnum["DIRECTION_NORTH_EAST"] = 7] = "DIRECTION_NORTH_EAST";
    })(Protocol.DirectionsEnum || (Protocol.DirectionsEnum = {}));
    var DirectionsEnum = Protocol.DirectionsEnum;
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
    })(Protocol.ExchangeErrorEnum || (Protocol.ExchangeErrorEnum = {}));
    var ExchangeErrorEnum = Protocol.ExchangeErrorEnum;
    (function (ExchangeReplayStopReasonEnum) {
        ExchangeReplayStopReasonEnum[ExchangeReplayStopReasonEnum["STOPPED_REASON_OK"] = 1] = "STOPPED_REASON_OK";
        ExchangeReplayStopReasonEnum[ExchangeReplayStopReasonEnum["STOPPED_REASON_USER"] = 2] = "STOPPED_REASON_USER";
        ExchangeReplayStopReasonEnum[ExchangeReplayStopReasonEnum["STOPPED_REASON_MISSING_RESSOURCE"] = 3] = "STOPPED_REASON_MISSING_RESSOURCE";
        ExchangeReplayStopReasonEnum[ExchangeReplayStopReasonEnum["STOPPED_REASON_IMPOSSIBLE_MODIFICATION"] = 4] = "STOPPED_REASON_IMPOSSIBLE_MODIFICATION";
    })(Protocol.ExchangeReplayStopReasonEnum || (Protocol.ExchangeReplayStopReasonEnum = {}));
    var ExchangeReplayStopReasonEnum = Protocol.ExchangeReplayStopReasonEnum;
    (function (ExchangeTypeEnum) {
        ExchangeTypeEnum[ExchangeTypeEnum["NPC_SHOP"] = 0] = "NPC_SHOP";
        ExchangeTypeEnum[ExchangeTypeEnum["PLAYER_TRADE"] = 1] = "PLAYER_TRADE";
        ExchangeTypeEnum[ExchangeTypeEnum["NPC_TRADE"] = 2] = "NPC_TRADE";
        ExchangeTypeEnum[ExchangeTypeEnum["CRAFT"] = 3] = "CRAFT";
        ExchangeTypeEnum[ExchangeTypeEnum["DISCONNECTED_VENDOR"] = 4] = "DISCONNECTED_VENDOR";
        ExchangeTypeEnum[ExchangeTypeEnum["STORAGE"] = 5] = "STORAGE";
        ExchangeTypeEnum[ExchangeTypeEnum["SHOP_STOCK"] = 6] = "SHOP_STOCK";
        ExchangeTypeEnum[ExchangeTypeEnum["TAXCOLLECTOR"] = 8] = "TAXCOLLECTOR";
        ExchangeTypeEnum[ExchangeTypeEnum["NPC_MODIFY_TRADE"] = 9] = "NPC_MODIFY_TRADE";
        ExchangeTypeEnum[ExchangeTypeEnum["BIDHOUSE_SELL"] = 10] = "BIDHOUSE_SELL";
        ExchangeTypeEnum[ExchangeTypeEnum["BIDHOUSE_BUY"] = 11] = "BIDHOUSE_BUY";
        ExchangeTypeEnum[ExchangeTypeEnum["MULTICRAFT_CRAFTER"] = 12] = "MULTICRAFT_CRAFTER";
        ExchangeTypeEnum[ExchangeTypeEnum["MULTICRAFT_CUSTOMER"] = 13] = "MULTICRAFT_CUSTOMER";
        ExchangeTypeEnum[ExchangeTypeEnum["JOB_INDEX"] = 14] = "JOB_INDEX";
        ExchangeTypeEnum[ExchangeTypeEnum["MOUNT"] = 15] = "MOUNT";
        ExchangeTypeEnum[ExchangeTypeEnum["MOUNT_STABLE"] = 16] = "MOUNT_STABLE";
        ExchangeTypeEnum[ExchangeTypeEnum["NPC_RESURECT_PET"] = 17] = "NPC_RESURECT_PET";
        ExchangeTypeEnum[ExchangeTypeEnum["NPC_TRADE_MOUNT"] = 18] = "NPC_TRADE_MOUNT";
        ExchangeTypeEnum[ExchangeTypeEnum["REALESTATE_HOUSE"] = 19] = "REALESTATE_HOUSE";
        ExchangeTypeEnum[ExchangeTypeEnum["REALESTATE_FARM"] = 20] = "REALESTATE_FARM";
        ExchangeTypeEnum[ExchangeTypeEnum["RUNES_TRADE"] = 21] = "RUNES_TRADE";
        ExchangeTypeEnum[ExchangeTypeEnum["RECYCLE_TRADE"] = 22] = "RECYCLE_TRADE";
    })(Protocol.ExchangeTypeEnum || (Protocol.ExchangeTypeEnum = {}));
    var ExchangeTypeEnum = Protocol.ExchangeTypeEnum;
    (function (FightDispellableEnum) {
        FightDispellableEnum[FightDispellableEnum["DISPELLABLE"] = 1] = "DISPELLABLE";
        FightDispellableEnum[FightDispellableEnum["DISPELLABLE_BY_DEATH"] = 2] = "DISPELLABLE_BY_DEATH";
        FightDispellableEnum[FightDispellableEnum["DISPELLABLE_BY_STRONG_DISPEL"] = 3] = "DISPELLABLE_BY_STRONG_DISPEL";
        FightDispellableEnum[FightDispellableEnum["REALLY_NOT_DISPELLABLE"] = 4] = "REALLY_NOT_DISPELLABLE";
    })(Protocol.FightDispellableEnum || (Protocol.FightDispellableEnum = {}));
    var FightDispellableEnum = Protocol.FightDispellableEnum;
    (function (FightOptionsEnum) {
        FightOptionsEnum[FightOptionsEnum["FIGHT_OPTION_SET_SECRET"] = 0] = "FIGHT_OPTION_SET_SECRET";
        FightOptionsEnum[FightOptionsEnum["FIGHT_OPTION_SET_TO_PARTY_ONLY"] = 1] = "FIGHT_OPTION_SET_TO_PARTY_ONLY";
        FightOptionsEnum[FightOptionsEnum["FIGHT_OPTION_SET_CLOSED"] = 2] = "FIGHT_OPTION_SET_CLOSED";
        FightOptionsEnum[FightOptionsEnum["FIGHT_OPTION_ASK_FOR_HELP"] = 3] = "FIGHT_OPTION_ASK_FOR_HELP";
    })(Protocol.FightOptionsEnum || (Protocol.FightOptionsEnum = {}));
    var FightOptionsEnum = Protocol.FightOptionsEnum;
    (function (FightOutcomeEnum) {
        FightOutcomeEnum[FightOutcomeEnum["RESULT_LOST"] = 0] = "RESULT_LOST";
        FightOutcomeEnum[FightOutcomeEnum["RESULT_DRAW"] = 1] = "RESULT_DRAW";
        FightOutcomeEnum[FightOutcomeEnum["RESULT_VICTORY"] = 2] = "RESULT_VICTORY";
        FightOutcomeEnum[FightOutcomeEnum["RESULT_TAX"] = 5] = "RESULT_TAX";
        FightOutcomeEnum[FightOutcomeEnum["RESULT_DEFENDER_GROUP"] = 6] = "RESULT_DEFENDER_GROUP";
    })(Protocol.FightOutcomeEnum || (Protocol.FightOutcomeEnum = {}));
    var FightOutcomeEnum = Protocol.FightOutcomeEnum;
    (function (FightSpellCastCriticalEnum) {
        FightSpellCastCriticalEnum[FightSpellCastCriticalEnum["NORMAL"] = 1] = "NORMAL";
        FightSpellCastCriticalEnum[FightSpellCastCriticalEnum["CRITICAL_HIT"] = 2] = "CRITICAL_HIT";
        FightSpellCastCriticalEnum[FightSpellCastCriticalEnum["CRITICAL_FAIL"] = 3] = "CRITICAL_FAIL";
    })(Protocol.FightSpellCastCriticalEnum || (Protocol.FightSpellCastCriticalEnum = {}));
    var FightSpellCastCriticalEnum = Protocol.FightSpellCastCriticalEnum;
    (function (FightTypeEnum) {
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_CHALLENGE"] = 0] = "FIGHT_TYPE_CHALLENGE";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_AGRESSION"] = 1] = "FIGHT_TYPE_AGRESSION";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_PvMA"] = 2] = "FIGHT_TYPE_PvMA";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_MXvM"] = 3] = "FIGHT_TYPE_MXvM";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_PvM"] = 4] = "FIGHT_TYPE_PvM";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_PvT"] = 5] = "FIGHT_TYPE_PvT";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_PvMU"] = 6] = "FIGHT_TYPE_PvMU";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_PVP_ARENA"] = 7] = "FIGHT_TYPE_PVP_ARENA";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_Koh"] = 8] = "FIGHT_TYPE_Koh";
        FightTypeEnum[FightTypeEnum["FIGHT_TYPE_PvPr"] = 9] = "FIGHT_TYPE_PvPr";
    })(Protocol.FightTypeEnum || (Protocol.FightTypeEnum = {}));
    var FightTypeEnum = Protocol.FightTypeEnum;
    (function (FighterRefusedReasonEnum) {
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["FIGHTER_REFUSED"] = -1] = "FIGHTER_REFUSED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["FIGHTER_ACCEPTED"] = 0] = "FIGHTER_ACCEPTED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["CHALLENGE_FULL"] = 1] = "CHALLENGE_FULL";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["TEAM_FULL"] = 2] = "TEAM_FULL";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["WRONG_ALIGNMENT"] = 3] = "WRONG_ALIGNMENT";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["WRONG_GUILD"] = 4] = "WRONG_GUILD";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["TOO_LATE"] = 5] = "TOO_LATE";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["MUTANT_REFUSED"] = 6] = "MUTANT_REFUSED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["WRONG_MAP"] = 7] = "WRONG_MAP";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["JUST_RESPAWNED"] = 8] = "JUST_RESPAWNED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["IM_OCCUPIED"] = 9] = "IM_OCCUPIED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["OPPONENT_OCCUPIED"] = 10] = "OPPONENT_OCCUPIED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["FIGHT_MYSELF"] = 11] = "FIGHT_MYSELF";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["INSUFFICIENT_RIGHTS"] = 12] = "INSUFFICIENT_RIGHTS";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["MEMBER_ACCOUNT_NEEDED"] = 13] = "MEMBER_ACCOUNT_NEEDED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["OPPONENT_NOT_MEMBER"] = 14] = "OPPONENT_NOT_MEMBER";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["TEAM_LIMITED_BY_MAINCHARACTER"] = 15] = "TEAM_LIMITED_BY_MAINCHARACTER";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["MULTIACCOUNT_NOT_ALLOWED"] = 16] = "MULTIACCOUNT_NOT_ALLOWED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["GHOST_REFUSED"] = 17] = "GHOST_REFUSED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["RESTRICTED_ACCOUNT"] = 19] = "RESTRICTED_ACCOUNT";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["WRONG_ALLIANCE"] = 20] = "WRONG_ALLIANCE";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["AVA_ZONE"] = 21] = "AVA_ZONE";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["COMPANION_REFUSED"] = 22] = "COMPANION_REFUSED";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["NOT_ENOUGH_ROOM"] = 23] = "NOT_ENOUGH_ROOM";
        FighterRefusedReasonEnum[FighterRefusedReasonEnum["GUEST_ACCOUNT"] = 24] = "GUEST_ACCOUNT";
    })(Protocol.FighterRefusedReasonEnum || (Protocol.FighterRefusedReasonEnum = {}));
    var FighterRefusedReasonEnum = Protocol.FighterRefusedReasonEnum;
    (function (GameActionFightInvisibilityStateEnum) {
        GameActionFightInvisibilityStateEnum[GameActionFightInvisibilityStateEnum["INVISIBLE"] = 1] = "INVISIBLE";
        GameActionFightInvisibilityStateEnum[GameActionFightInvisibilityStateEnum["DETECTED"] = 2] = "DETECTED";
        GameActionFightInvisibilityStateEnum[GameActionFightInvisibilityStateEnum["VISIBLE"] = 3] = "VISIBLE";
    })(Protocol.GameActionFightInvisibilityStateEnum || (Protocol.GameActionFightInvisibilityStateEnum = {}));
    var GameActionFightInvisibilityStateEnum = Protocol.GameActionFightInvisibilityStateEnum;
    (function (GameActionMarkCellsTypeEnum) {
        GameActionMarkCellsTypeEnum[GameActionMarkCellsTypeEnum["CELLS_CIRCLE"] = 0] = "CELLS_CIRCLE";
        GameActionMarkCellsTypeEnum[GameActionMarkCellsTypeEnum["CELLS_CROSS"] = 1] = "CELLS_CROSS";
        GameActionMarkCellsTypeEnum[GameActionMarkCellsTypeEnum["CELLS_SQUARE"] = 2] = "CELLS_SQUARE";
    })(Protocol.GameActionMarkCellsTypeEnum || (Protocol.GameActionMarkCellsTypeEnum = {}));
    var GameActionMarkCellsTypeEnum = Protocol.GameActionMarkCellsTypeEnum;
    (function (GameActionMarkTypeEnum) {
        GameActionMarkTypeEnum[GameActionMarkTypeEnum["GLYPH"] = 1] = "GLYPH";
        GameActionMarkTypeEnum[GameActionMarkTypeEnum["TRAP"] = 2] = "TRAP";
        GameActionMarkTypeEnum[GameActionMarkTypeEnum["WALL"] = 3] = "WALL";
        GameActionMarkTypeEnum[GameActionMarkTypeEnum["PORTAL"] = 4] = "PORTAL";
    })(Protocol.GameActionMarkTypeEnum || (Protocol.GameActionMarkTypeEnum = {}));
    var GameActionMarkTypeEnum = Protocol.GameActionMarkTypeEnum;
    (function (GameContextEnum) {
        GameContextEnum[GameContextEnum["ROLE_PLAY"] = 1] = "ROLE_PLAY";
        GameContextEnum[GameContextEnum["FIGHT"] = 2] = "FIGHT";
    })(Protocol.GameContextEnum || (Protocol.GameContextEnum = {}));
    var GameContextEnum = Protocol.GameContextEnum;
    (function (GameHierarchyEnum) {
        GameHierarchyEnum[GameHierarchyEnum["UNAVAILABLE"] = -1] = "UNAVAILABLE";
        GameHierarchyEnum[GameHierarchyEnum["PLAYER"] = 0] = "PLAYER";
        GameHierarchyEnum[GameHierarchyEnum["MODERATOR"] = 10] = "MODERATOR";
        GameHierarchyEnum[GameHierarchyEnum["GAMEMASTER_PADAWAN"] = 20] = "GAMEMASTER_PADAWAN";
        GameHierarchyEnum[GameHierarchyEnum["GAMEMASTER"] = 30] = "GAMEMASTER";
        GameHierarchyEnum[GameHierarchyEnum["ADMIN"] = 40] = "ADMIN";
    })(Protocol.GameHierarchyEnum || (Protocol.GameHierarchyEnum = {}));
    var GameHierarchyEnum = Protocol.GameHierarchyEnum;
    (function (GuestLimitationEnum) {
        GuestLimitationEnum[GuestLimitationEnum["LIMITED_TO_REGISTERED"] = 0] = "LIMITED_TO_REGISTERED";
        GuestLimitationEnum[GuestLimitationEnum["GUEST_LIMIT_ON_JOB_XP"] = 1] = "GUEST_LIMIT_ON_JOB_XP";
        GuestLimitationEnum[GuestLimitationEnum["GUEST_LIMIT_ON_JOB_USE"] = 2] = "GUEST_LIMIT_ON_JOB_USE";
        GuestLimitationEnum[GuestLimitationEnum["GUEST_LIMIT_ON_MAP"] = 3] = "GUEST_LIMIT_ON_MAP";
        GuestLimitationEnum[GuestLimitationEnum["GUEST_LIMIT_ON_ITEM"] = 4] = "GUEST_LIMIT_ON_ITEM";
        GuestLimitationEnum[GuestLimitationEnum["GUEST_LIMIT_ON_VENDOR"] = 5] = "GUEST_LIMIT_ON_VENDOR";
        GuestLimitationEnum[GuestLimitationEnum["GUEST_LIMIT_ON_CHAT"] = 6] = "GUEST_LIMIT_ON_CHAT";
        GuestLimitationEnum[GuestLimitationEnum["GUEST_LIMIT_ON_GUILD"] = 7] = "GUEST_LIMIT_ON_GUILD";
    })(Protocol.GuestLimitationEnum || (Protocol.GuestLimitationEnum = {}));
    var GuestLimitationEnum = Protocol.GuestLimitationEnum;
    (function (GuildInformationsTypeEnum) {
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_GENERAL"] = 1] = "INFO_GENERAL";
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_MEMBERS"] = 2] = "INFO_MEMBERS";
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_BOOSTS"] = 3] = "INFO_BOOSTS";
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_PADDOCKS"] = 4] = "INFO_PADDOCKS";
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_HOUSES"] = 5] = "INFO_HOUSES";
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_TAX_COLLECTOR_GUILD_ONLY"] = 6] = "INFO_TAX_COLLECTOR_GUILD_ONLY";
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_TAX_COLLECTOR_ALLIANCE"] = 7] = "INFO_TAX_COLLECTOR_ALLIANCE";
        GuildInformationsTypeEnum[GuildInformationsTypeEnum["INFO_TAX_COLLECTOR_LEAVE"] = 8] = "INFO_TAX_COLLECTOR_LEAVE";
    })(Protocol.GuildInformationsTypeEnum || (Protocol.GuildInformationsTypeEnum = {}));
    var GuildInformationsTypeEnum = Protocol.GuildInformationsTypeEnum;
    (function (GuildRightsBitEnum) {
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_NONE"] = 0] = "GUILD_RIGHT_NONE";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_BOSS"] = 1] = "GUILD_RIGHT_BOSS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_MANAGE_GUILD_BOOSTS"] = 2] = "GUILD_RIGHT_MANAGE_GUILD_BOOSTS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_MANAGE_RIGHTS"] = 4] = "GUILD_RIGHT_MANAGE_RIGHTS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_INVITE_NEW_MEMBERS"] = 8] = "GUILD_RIGHT_INVITE_NEW_MEMBERS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_BAN_MEMBERS"] = 16] = "GUILD_RIGHT_BAN_MEMBERS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_MANAGE_XP_CONTRIBUTION"] = 32] = "GUILD_RIGHT_MANAGE_XP_CONTRIBUTION";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_MANAGE_RANKS"] = 64] = "GUILD_RIGHT_MANAGE_RANKS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_HIRE_TAX_COLLECTOR"] = 128] = "GUILD_RIGHT_HIRE_TAX_COLLECTOR";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION"] = 256] = "GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_COLLECT"] = 512] = "GUILD_RIGHT_COLLECT";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_USE_PADDOCKS"] = 4096] = "GUILD_RIGHT_USE_PADDOCKS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_ORGANIZE_PADDOCKS"] = 8192] = "GUILD_RIGHT_ORGANIZE_PADDOCKS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_TAKE_OTHERS_MOUNTS_IN_PADDOCKS"] = 16384] = "GUILD_RIGHT_TAKE_OTHERS_MOUNTS_IN_PADDOCKS";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_DEFENSE_PRIORITY"] = 32768] = "GUILD_RIGHT_DEFENSE_PRIORITY";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR"] = 65536] = "GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_SET_ALLIANCE_PRISM"] = 131072] = "GUILD_RIGHT_SET_ALLIANCE_PRISM";
        GuildRightsBitEnum[GuildRightsBitEnum["GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN"] = 262144] = "GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN";
    })(Protocol.GuildRightsBitEnum || (Protocol.GuildRightsBitEnum = {}));
    var GuildRightsBitEnum = Protocol.GuildRightsBitEnum;
    (function (HardcoreOrEpicDeathStateEnum) {
        HardcoreOrEpicDeathStateEnum[HardcoreOrEpicDeathStateEnum["DEATH_STATE_ALIVE"] = 0] = "DEATH_STATE_ALIVE";
        HardcoreOrEpicDeathStateEnum[HardcoreOrEpicDeathStateEnum["DEATH_STATE_DEAD"] = 1] = "DEATH_STATE_DEAD";
        HardcoreOrEpicDeathStateEnum[HardcoreOrEpicDeathStateEnum["DEATH_STATE_WAITING_CONFIRMATION"] = 2] = "DEATH_STATE_WAITING_CONFIRMATION";
    })(Protocol.HardcoreOrEpicDeathStateEnum || (Protocol.HardcoreOrEpicDeathStateEnum = {}));
    var HardcoreOrEpicDeathStateEnum = Protocol.HardcoreOrEpicDeathStateEnum;
    (function (IdentificationFailureReasonEnum) {
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["BAD_VERSION"] = 1] = "BAD_VERSION";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["WRONG_CREDENTIALS"] = 2] = "WRONG_CREDENTIALS";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["BANNED"] = 3] = "BANNED";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["KICKED"] = 4] = "KICKED";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["IN_MAINTENANCE"] = 5] = "IN_MAINTENANCE";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["TOO_MANY_ON_IP"] = 6] = "TOO_MANY_ON_IP";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["TIME_OUT"] = 7] = "TIME_OUT";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["BAD_IPRANGE"] = 8] = "BAD_IPRANGE";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["CREDENTIALS_RESET"] = 9] = "CREDENTIALS_RESET";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["EMAIL_UNVALIDATED"] = 10] = "EMAIL_UNVALIDATED";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["OTP_TIMEOUT"] = 11] = "OTP_TIMEOUT";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["SERVICE_UNAVAILABLE"] = 53] = "SERVICE_UNAVAILABLE";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["EXTERNAL_ACCOUNT_LINK_REFUSED"] = 61] = "EXTERNAL_ACCOUNT_LINK_REFUSED";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["EXTERNAL_ACCOUNT_ALREADY_LINKED"] = 62] = "EXTERNAL_ACCOUNT_ALREADY_LINKED";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["UNKNOWN_AUTH_ERROR"] = 99] = "UNKNOWN_AUTH_ERROR";
        IdentificationFailureReasonEnum[IdentificationFailureReasonEnum["SPARE"] = 100] = "SPARE";
    })(Protocol.IdentificationFailureReasonEnum || (Protocol.IdentificationFailureReasonEnum = {}));
    var IdentificationFailureReasonEnum = Protocol.IdentificationFailureReasonEnum;
    (function (ListAddFailureEnum) {
        ListAddFailureEnum[ListAddFailureEnum["LIST_ADD_FAILURE_UNKNOWN"] = 0] = "LIST_ADD_FAILURE_UNKNOWN";
        ListAddFailureEnum[ListAddFailureEnum["LIST_ADD_FAILURE_OVER_QUOTA"] = 1] = "LIST_ADD_FAILURE_OVER_QUOTA";
        ListAddFailureEnum[ListAddFailureEnum["LIST_ADD_FAILURE_NOT_FOUND"] = 2] = "LIST_ADD_FAILURE_NOT_FOUND";
        ListAddFailureEnum[ListAddFailureEnum["LIST_ADD_FAILURE_EGOCENTRIC"] = 3] = "LIST_ADD_FAILURE_EGOCENTRIC";
        ListAddFailureEnum[ListAddFailureEnum["LIST_ADD_FAILURE_IS_DOUBLE"] = 4] = "LIST_ADD_FAILURE_IS_DOUBLE";
    })(Protocol.ListAddFailureEnum || (Protocol.ListAddFailureEnum = {}));
    var ListAddFailureEnum = Protocol.ListAddFailureEnum;
    (function (MapObstacleStateEnum) {
        MapObstacleStateEnum[MapObstacleStateEnum["OBSTACLE_OPENED"] = 1] = "OBSTACLE_OPENED";
        MapObstacleStateEnum[MapObstacleStateEnum["OBSTACLE_CLOSED"] = 2] = "OBSTACLE_CLOSED";
    })(Protocol.MapObstacleStateEnum || (Protocol.MapObstacleStateEnum = {}));
    var MapObstacleStateEnum = Protocol.MapObstacleStateEnum;
    (function (MountEquipedErrorEnum) {
        MountEquipedErrorEnum[MountEquipedErrorEnum["UNSET"] = 0] = "UNSET";
        MountEquipedErrorEnum[MountEquipedErrorEnum["SET"] = 1] = "SET";
        MountEquipedErrorEnum[MountEquipedErrorEnum["RIDING"] = 2] = "RIDING";
    })(Protocol.MountEquipedErrorEnum || (Protocol.MountEquipedErrorEnum = {}));
    var MountEquipedErrorEnum = Protocol.MountEquipedErrorEnum;
    (function (NicknameErrorEnum) {
        NicknameErrorEnum[NicknameErrorEnum["ALREADY_USED"] = 1] = "ALREADY_USED";
        NicknameErrorEnum[NicknameErrorEnum["SAME_AS_LOGIN"] = 2] = "SAME_AS_LOGIN";
        NicknameErrorEnum[NicknameErrorEnum["TOO_SIMILAR_TO_LOGIN"] = 3] = "TOO_SIMILAR_TO_LOGIN";
        NicknameErrorEnum[NicknameErrorEnum["INVALID_NICK"] = 4] = "INVALID_NICK";
        NicknameErrorEnum[NicknameErrorEnum["UNKNOWN_NICK_ERROR"] = 99] = "UNKNOWN_NICK_ERROR";
    })(Protocol.NicknameErrorEnum || (Protocol.NicknameErrorEnum = {}));
    var NicknameErrorEnum = Protocol.NicknameErrorEnum;
    (function (NicknameGeneratingFailureEnum) {
        NicknameGeneratingFailureEnum[NicknameGeneratingFailureEnum["NICKNAME_GENERATOR_RETRY_TOO_SHORT"] = 1] = "NICKNAME_GENERATOR_RETRY_TOO_SHORT";
        NicknameGeneratingFailureEnum[NicknameGeneratingFailureEnum["NICKNAME_GENERATOR_UNAVAILABLE"] = 2] = "NICKNAME_GENERATOR_UNAVAILABLE";
    })(Protocol.NicknameGeneratingFailureEnum || (Protocol.NicknameGeneratingFailureEnum = {}));
    var NicknameGeneratingFailureEnum = Protocol.NicknameGeneratingFailureEnum;
    (function (ObjectErrorEnum) {
        ObjectErrorEnum[ObjectErrorEnum["INVENTORY_FULL"] = 1] = "INVENTORY_FULL";
        ObjectErrorEnum[ObjectErrorEnum["CANNOT_EQUIP_TWICE"] = 2] = "CANNOT_EQUIP_TWICE";
        ObjectErrorEnum[ObjectErrorEnum["NOT_TRADABLE"] = 3] = "NOT_TRADABLE";
        ObjectErrorEnum[ObjectErrorEnum["CANNOT_DROP"] = 4] = "CANNOT_DROP";
        ObjectErrorEnum[ObjectErrorEnum["CANNOT_DROP_NO_PLACE"] = 5] = "CANNOT_DROP_NO_PLACE";
        ObjectErrorEnum[ObjectErrorEnum["CANNOT_DESTROY"] = 6] = "CANNOT_DESTROY";
        ObjectErrorEnum[ObjectErrorEnum["LEVEL_TOO_LOW"] = 7] = "LEVEL_TOO_LOW";
        ObjectErrorEnum[ObjectErrorEnum["LIVING_OBJECT_REFUSED_FOOD"] = 8] = "LIVING_OBJECT_REFUSED_FOOD";
        ObjectErrorEnum[ObjectErrorEnum["CANNOT_UNEQUIP"] = 9] = "CANNOT_UNEQUIP";
        ObjectErrorEnum[ObjectErrorEnum["CANNOT_EQUIP_HERE"] = 10] = "CANNOT_EQUIP_HERE";
        ObjectErrorEnum[ObjectErrorEnum["CRITERIONS"] = 11] = "CRITERIONS";
        ObjectErrorEnum[ObjectErrorEnum["SYMBIOTIC_OBJECT_ERROR"] = 12] = "SYMBIOTIC_OBJECT_ERROR";
    })(Protocol.ObjectErrorEnum || (Protocol.ObjectErrorEnum = {}));
    var ObjectErrorEnum = Protocol.ObjectErrorEnum;
    (function (PartStateEnum) {
        PartStateEnum[PartStateEnum["PART_NOT_INSTALLED"] = 0] = "PART_NOT_INSTALLED";
        PartStateEnum[PartStateEnum["PART_BEING_UPDATER"] = 1] = "PART_BEING_UPDATER";
        PartStateEnum[PartStateEnum["PART_UP_TO_DATE"] = 2] = "PART_UP_TO_DATE";
    })(Protocol.PartStateEnum || (Protocol.PartStateEnum = {}));
    var PartStateEnum = Protocol.PartStateEnum;
    (function (PartyJoinErrorEnum) {
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_UNKNOWN"] = 0] = "PARTY_JOIN_ERROR_UNKNOWN";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PLAYER_NOT_FOUND"] = 1] = "PARTY_JOIN_ERROR_PLAYER_NOT_FOUND";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PARTY_NOT_FOUND"] = 2] = "PARTY_JOIN_ERROR_PARTY_NOT_FOUND";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PARTY_FULL"] = 3] = "PARTY_JOIN_ERROR_PARTY_FULL";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PLAYER_BUSY"] = 4] = "PARTY_JOIN_ERROR_PLAYER_BUSY";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PLAYER_ALREADY_INVITED"] = 6] = "PARTY_JOIN_ERROR_PLAYER_ALREADY_INVITED";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PLAYER_TOO_SOLLICITED"] = 7] = "PARTY_JOIN_ERROR_PLAYER_TOO_SOLLICITED";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PLAYER_LOYAL"] = 8] = "PARTY_JOIN_ERROR_PLAYER_LOYAL";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_UNMODIFIABLE"] = 9] = "PARTY_JOIN_ERROR_UNMODIFIABLE";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_UNMET_CRITERION"] = 10] = "PARTY_JOIN_ERROR_UNMET_CRITERION";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_NOT_ENOUGH_ROOM"] = 11] = "PARTY_JOIN_ERROR_NOT_ENOUGH_ROOM";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_COMPOSITION_CHANGED"] = 12] = "PARTY_JOIN_ERROR_COMPOSITION_CHANGED";
        PartyJoinErrorEnum[PartyJoinErrorEnum["PARTY_JOIN_ERROR_PLAYER_IN_TUTORIAL"] = 13] = "PARTY_JOIN_ERROR_PLAYER_IN_TUTORIAL";
    })(Protocol.PartyJoinErrorEnum || (Protocol.PartyJoinErrorEnum = {}));
    var PartyJoinErrorEnum = Protocol.PartyJoinErrorEnum;
    (function (PartyNameErrorEnum) {
        PartyNameErrorEnum[PartyNameErrorEnum["PARTY_NAME_UNDEFINED_ERROR"] = 0] = "PARTY_NAME_UNDEFINED_ERROR";
        PartyNameErrorEnum[PartyNameErrorEnum["PARTY_NAME_INVALID"] = 1] = "PARTY_NAME_INVALID";
        PartyNameErrorEnum[PartyNameErrorEnum["PARTY_NAME_ALREADY_USED"] = 2] = "PARTY_NAME_ALREADY_USED";
        PartyNameErrorEnum[PartyNameErrorEnum["PARTY_NAME_UNALLOWED_RIGHTS"] = 3] = "PARTY_NAME_UNALLOWED_RIGHTS";
        PartyNameErrorEnum[PartyNameErrorEnum["PARTY_NAME_UNALLOWED_NOW"] = 4] = "PARTY_NAME_UNALLOWED_NOW";
    })(Protocol.PartyNameErrorEnum || (Protocol.PartyNameErrorEnum = {}));
    var PartyNameErrorEnum = Protocol.PartyNameErrorEnum;
    (function (PartyTypeEnum) {
        PartyTypeEnum[PartyTypeEnum["PARTY_TYPE_UNDEFINED"] = 0] = "PARTY_TYPE_UNDEFINED";
        PartyTypeEnum[PartyTypeEnum["PARTY_TYPE_CLASSICAL"] = 1] = "PARTY_TYPE_CLASSICAL";
        PartyTypeEnum[PartyTypeEnum["PARTY_TYPE_DUNGEON"] = 2] = "PARTY_TYPE_DUNGEON";
        PartyTypeEnum[PartyTypeEnum["PARTY_TYPE_ARENA"] = 3] = "PARTY_TYPE_ARENA";
    })(Protocol.PartyTypeEnum || (Protocol.PartyTypeEnum = {}));
    var PartyTypeEnum = Protocol.PartyTypeEnum;
    (function (PlayableBreedEnum) {
        PlayableBreedEnum[PlayableBreedEnum["UNDEFINED"] = 0] = "UNDEFINED";
        PlayableBreedEnum[PlayableBreedEnum["Feca"] = 1] = "Feca";
        PlayableBreedEnum[PlayableBreedEnum["Osamodas"] = 2] = "Osamodas";
        PlayableBreedEnum[PlayableBreedEnum["Enutrof"] = 3] = "Enutrof";
        PlayableBreedEnum[PlayableBreedEnum["Sram"] = 4] = "Sram";
        PlayableBreedEnum[PlayableBreedEnum["Xelor"] = 5] = "Xelor";
        PlayableBreedEnum[PlayableBreedEnum["Ecaflip"] = 6] = "Ecaflip";
        PlayableBreedEnum[PlayableBreedEnum["Eniripsa"] = 7] = "Eniripsa";
        PlayableBreedEnum[PlayableBreedEnum["Iop"] = 8] = "Iop";
        PlayableBreedEnum[PlayableBreedEnum["Cra"] = 9] = "Cra";
        PlayableBreedEnum[PlayableBreedEnum["Sadida"] = 10] = "Sadida";
        PlayableBreedEnum[PlayableBreedEnum["Sacrieur"] = 11] = "Sacrieur";
        PlayableBreedEnum[PlayableBreedEnum["Pandawa"] = 12] = "Pandawa";
        PlayableBreedEnum[PlayableBreedEnum["Roublard"] = 13] = "Roublard";
        PlayableBreedEnum[PlayableBreedEnum["Zobal"] = 14] = "Zobal";
        PlayableBreedEnum[PlayableBreedEnum["Steamer"] = 15] = "Steamer";
        PlayableBreedEnum[PlayableBreedEnum["Eliotrope"] = 16] = "Eliotrope";
    })(Protocol.PlayableBreedEnum || (Protocol.PlayableBreedEnum = {}));
    var PlayableBreedEnum = Protocol.PlayableBreedEnum;
    (function (PlayerLifeStatusEnum) {
        PlayerLifeStatusEnum[PlayerLifeStatusEnum["STATUS_ALIVE_AND_KICKING"] = 0] = "STATUS_ALIVE_AND_KICKING";
        PlayerLifeStatusEnum[PlayerLifeStatusEnum["STATUS_TOMBSTONE"] = 1] = "STATUS_TOMBSTONE";
        PlayerLifeStatusEnum[PlayerLifeStatusEnum["STATUS_PHANTOM"] = 2] = "STATUS_PHANTOM";
    })(Protocol.PlayerLifeStatusEnum || (Protocol.PlayerLifeStatusEnum = {}));
    var PlayerLifeStatusEnum = Protocol.PlayerLifeStatusEnum;
    (function (PlayerStateEnum) {
        PlayerStateEnum[PlayerStateEnum["NOT_CONNECTED"] = 0] = "NOT_CONNECTED";
        PlayerStateEnum[PlayerStateEnum["GAME_TYPE_ROLEPLAY"] = 1] = "GAME_TYPE_ROLEPLAY";
        PlayerStateEnum[PlayerStateEnum["GAME_TYPE_FIGHT"] = 2] = "GAME_TYPE_FIGHT";
        PlayerStateEnum[PlayerStateEnum["UNKNOWN_STATE"] = 99] = "UNKNOWN_STATE";
    })(Protocol.PlayerStateEnum || (Protocol.PlayerStateEnum = {}));
    var PlayerStateEnum = Protocol.PlayerStateEnum;
    (function (PlayerStatusEnum) {
        PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_OFFLINE"] = 0] = "PLAYER_STATUS_OFFLINE";
        PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_UNKNOWN"] = 1] = "PLAYER_STATUS_UNKNOWN";
        PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_AVAILABLE"] = 10] = "PLAYER_STATUS_AVAILABLE";
        PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_IDLE"] = 20] = "PLAYER_STATUS_IDLE";
        PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_AFK"] = 21] = "PLAYER_STATUS_AFK";
        PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_PRIVATE"] = 30] = "PLAYER_STATUS_PRIVATE";
        PlayerStatusEnum[PlayerStatusEnum["PLAYER_STATUS_SOLO"] = 40] = "PLAYER_STATUS_SOLO";
    })(Protocol.PlayerStatusEnum || (Protocol.PlayerStatusEnum = {}));
    var PlayerStatusEnum = Protocol.PlayerStatusEnum;
    (function (PresetDeleteResultEnum) {
        PresetDeleteResultEnum[PresetDeleteResultEnum["PRESET_DEL_OK"] = 1] = "PRESET_DEL_OK";
        PresetDeleteResultEnum[PresetDeleteResultEnum["PRESET_DEL_ERR_UNKNOWN"] = 2] = "PRESET_DEL_ERR_UNKNOWN";
        PresetDeleteResultEnum[PresetDeleteResultEnum["PRESET_DEL_ERR_BAD_PRESET_ID"] = 3] = "PRESET_DEL_ERR_BAD_PRESET_ID";
    })(Protocol.PresetDeleteResultEnum || (Protocol.PresetDeleteResultEnum = {}));
    var PresetDeleteResultEnum = Protocol.PresetDeleteResultEnum;
    (function (PresetSaveResultEnum) {
        PresetSaveResultEnum[PresetSaveResultEnum["PRESET_SAVE_OK"] = 1] = "PRESET_SAVE_OK";
        PresetSaveResultEnum[PresetSaveResultEnum["PRESET_SAVE_ERR_UNKNOWN"] = 2] = "PRESET_SAVE_ERR_UNKNOWN";
        PresetSaveResultEnum[PresetSaveResultEnum["PRESET_SAVE_ERR_TOO_MANY"] = 3] = "PRESET_SAVE_ERR_TOO_MANY";
    })(Protocol.PresetSaveResultEnum || (Protocol.PresetSaveResultEnum = {}));
    var PresetSaveResultEnum = Protocol.PresetSaveResultEnum;
    (function (PresetSaveUpdateErrorEnum) {
        PresetSaveUpdateErrorEnum[PresetSaveUpdateErrorEnum["PRESET_UPDATE_ERR_UNKNOWN"] = 1] = "PRESET_UPDATE_ERR_UNKNOWN";
        PresetSaveUpdateErrorEnum[PresetSaveUpdateErrorEnum["PRESET_UPDATE_ERR_BAD_PRESET_ID"] = 2] = "PRESET_UPDATE_ERR_BAD_PRESET_ID";
        PresetSaveUpdateErrorEnum[PresetSaveUpdateErrorEnum["PRESET_UPDATE_ERR_BAD_POSITION"] = 3] = "PRESET_UPDATE_ERR_BAD_POSITION";
        PresetSaveUpdateErrorEnum[PresetSaveUpdateErrorEnum["PRESET_UPDATE_ERR_BAD_OBJECT_ID"] = 4] = "PRESET_UPDATE_ERR_BAD_OBJECT_ID";
    })(Protocol.PresetSaveUpdateErrorEnum || (Protocol.PresetSaveUpdateErrorEnum = {}));
    var PresetSaveUpdateErrorEnum = Protocol.PresetSaveUpdateErrorEnum;
    (function (PresetUseResultEnum) {
        PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_OK"] = 1] = "PRESET_USE_OK";
        PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_OK_PARTIAL"] = 2] = "PRESET_USE_OK_PARTIAL";
        PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_UNKNOWN"] = 3] = "PRESET_USE_ERR_UNKNOWN";
        PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_CRITERION"] = 4] = "PRESET_USE_ERR_CRITERION";
        PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_BAD_PRESET_ID"] = 5] = "PRESET_USE_ERR_BAD_PRESET_ID";
        PresetUseResultEnum[PresetUseResultEnum["PRESET_USE_ERR_COOLDOWN"] = 6] = "PRESET_USE_ERR_COOLDOWN";
    })(Protocol.PresetUseResultEnum || (Protocol.PresetUseResultEnum = {}));
    var PresetUseResultEnum = Protocol.PresetUseResultEnum;
    (function (PrismListenEnum) {
        PrismListenEnum[PrismListenEnum["PRISM_LISTEN_NONE"] = 0] = "PRISM_LISTEN_NONE";
        PrismListenEnum[PrismListenEnum["PRISM_LISTEN_MINE"] = 1] = "PRISM_LISTEN_MINE";
        PrismListenEnum[PrismListenEnum["PRISM_LISTEN_ALL"] = 2] = "PRISM_LISTEN_ALL";
    })(Protocol.PrismListenEnum || (Protocol.PrismListenEnum = {}));
    var PrismListenEnum = Protocol.PrismListenEnum;
    (function (PrismSetSabotagedRefusedReasonEnum) {
        PrismSetSabotagedRefusedReasonEnum[PrismSetSabotagedRefusedReasonEnum["SABOTAGE_REFUSED"] = -1] = "SABOTAGE_REFUSED";
        PrismSetSabotagedRefusedReasonEnum[PrismSetSabotagedRefusedReasonEnum["SABOTAGE_INSUFFICIENT_RIGHTS"] = 0] = "SABOTAGE_INSUFFICIENT_RIGHTS";
        PrismSetSabotagedRefusedReasonEnum[PrismSetSabotagedRefusedReasonEnum["SABOTAGE_MEMBER_ACCOUNT_NEEDED"] = 1] = "SABOTAGE_MEMBER_ACCOUNT_NEEDED";
        PrismSetSabotagedRefusedReasonEnum[PrismSetSabotagedRefusedReasonEnum["SABOTAGE_RESTRICTED_ACCOUNT"] = 2] = "SABOTAGE_RESTRICTED_ACCOUNT";
        PrismSetSabotagedRefusedReasonEnum[PrismSetSabotagedRefusedReasonEnum["SABOTAGE_WRONG_ALLIANCE"] = 3] = "SABOTAGE_WRONG_ALLIANCE";
        PrismSetSabotagedRefusedReasonEnum[PrismSetSabotagedRefusedReasonEnum["SABOTAGE_NO_PRISM"] = 4] = "SABOTAGE_NO_PRISM";
        PrismSetSabotagedRefusedReasonEnum[PrismSetSabotagedRefusedReasonEnum["SABOTAGE_WRONG_STATE"] = 5] = "SABOTAGE_WRONG_STATE";
    })(Protocol.PrismSetSabotagedRefusedReasonEnum || (Protocol.PrismSetSabotagedRefusedReasonEnum = {}));
    var PrismSetSabotagedRefusedReasonEnum = Protocol.PrismSetSabotagedRefusedReasonEnum;
    (function (PrismStateEnum) {
        PrismStateEnum[PrismStateEnum["PRISM_STATE_INVULNERABLE"] = 0] = "PRISM_STATE_INVULNERABLE";
        PrismStateEnum[PrismStateEnum["PRISM_STATE_NORMAL"] = 1] = "PRISM_STATE_NORMAL";
        PrismStateEnum[PrismStateEnum["PRISM_STATE_ATTACKED"] = 2] = "PRISM_STATE_ATTACKED";
        PrismStateEnum[PrismStateEnum["PRISM_STATE_FIGHTING"] = 3] = "PRISM_STATE_FIGHTING";
        PrismStateEnum[PrismStateEnum["PRISM_STATE_WEAKENED"] = 4] = "PRISM_STATE_WEAKENED";
        PrismStateEnum[PrismStateEnum["PRISM_STATE_VULNERABLE"] = 5] = "PRISM_STATE_VULNERABLE";
        PrismStateEnum[PrismStateEnum["PRISM_STATE_DEFEATED"] = 6] = "PRISM_STATE_DEFEATED";
        PrismStateEnum[PrismStateEnum["PRISM_STATE_SABOTAGED"] = 7] = "PRISM_STATE_SABOTAGED";
    })(Protocol.PrismStateEnum || (Protocol.PrismStateEnum = {}));
    var PrismStateEnum = Protocol.PrismStateEnum;
    (function (PvpArenaStepEnum) {
        PvpArenaStepEnum[PvpArenaStepEnum["ARENA_STEP_REGISTRED"] = 0] = "ARENA_STEP_REGISTRED";
        PvpArenaStepEnum[PvpArenaStepEnum["ARENA_STEP_WAITING_FIGHT"] = 1] = "ARENA_STEP_WAITING_FIGHT";
        PvpArenaStepEnum[PvpArenaStepEnum["ARENA_STEP_STARTING_FIGHT"] = 2] = "ARENA_STEP_STARTING_FIGHT";
        PvpArenaStepEnum[PvpArenaStepEnum["ARENA_STEP_UNREGISTER"] = 3] = "ARENA_STEP_UNREGISTER";
    })(Protocol.PvpArenaStepEnum || (Protocol.PvpArenaStepEnum = {}));
    var PvpArenaStepEnum = Protocol.PvpArenaStepEnum;
    (function (PvpArenaTypeEnum) {
        PvpArenaTypeEnum[PvpArenaTypeEnum["ARENA_TYPE_3VS3"] = 3] = "ARENA_TYPE_3VS3";
        PvpArenaTypeEnum[PvpArenaTypeEnum["ARENA_TYPE_5VS5"] = 5] = "ARENA_TYPE_5VS5";
    })(Protocol.PvpArenaTypeEnum || (Protocol.PvpArenaTypeEnum = {}));
    var PvpArenaTypeEnum = Protocol.PvpArenaTypeEnum;
    (function (SequenceTypeEnum) {
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_SPELL"] = 1] = "SEQUENCE_SPELL";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_WEAPON"] = 2] = "SEQUENCE_WEAPON";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_GLYPH_TRAP"] = 3] = "SEQUENCE_GLYPH_TRAP";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_TRIGGERED"] = 4] = "SEQUENCE_TRIGGERED";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_MOVE"] = 5] = "SEQUENCE_MOVE";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_CHARACTER_DEATH"] = 6] = "SEQUENCE_CHARACTER_DEATH";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_TURN_START"] = 7] = "SEQUENCE_TURN_START";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_TURN_END"] = 8] = "SEQUENCE_TURN_END";
        SequenceTypeEnum[SequenceTypeEnum["SEQUENCE_FIGHT_START"] = 9] = "SEQUENCE_FIGHT_START";
    })(Protocol.SequenceTypeEnum || (Protocol.SequenceTypeEnum = {}));
    var SequenceTypeEnum = Protocol.SequenceTypeEnum;
    (function (ServerConnectionErrorEnum) {
        ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_DUE_TO_STATUS"] = 0] = "SERVER_CONNECTION_ERROR_DUE_TO_STATUS";
        ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_NO_REASON"] = 1] = "SERVER_CONNECTION_ERROR_NO_REASON";
        ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED"] = 2] = "SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED";
        ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED"] = 3] = "SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED";
        ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED"] = 4] = "SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED";
        ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY"] = 5] = "SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY";
        ServerConnectionErrorEnum[ServerConnectionErrorEnum["SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY"] = 6] = "SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY";
    })(Protocol.ServerConnectionErrorEnum || (Protocol.ServerConnectionErrorEnum = {}));
    var ServerConnectionErrorEnum = Protocol.ServerConnectionErrorEnum;
    (function (ServerStatusEnum) {
        ServerStatusEnum[ServerStatusEnum["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
        ServerStatusEnum[ServerStatusEnum["OFFLINE"] = 1] = "OFFLINE";
        ServerStatusEnum[ServerStatusEnum["STARTING"] = 2] = "STARTING";
        ServerStatusEnum[ServerStatusEnum["ONLINE"] = 3] = "ONLINE";
        ServerStatusEnum[ServerStatusEnum["NOJOIN"] = 4] = "NOJOIN";
        ServerStatusEnum[ServerStatusEnum["SAVING"] = 5] = "SAVING";
        ServerStatusEnum[ServerStatusEnum["STOPING"] = 6] = "STOPING";
        ServerStatusEnum[ServerStatusEnum["FULL"] = 7] = "FULL";
    })(Protocol.ServerStatusEnum || (Protocol.ServerStatusEnum = {}));
    var ServerStatusEnum = Protocol.ServerStatusEnum;
    (function (ShortcutBarEnum) {
        ShortcutBarEnum[ShortcutBarEnum["GENERAL_SHORTCUT_BAR"] = 0] = "GENERAL_SHORTCUT_BAR";
        ShortcutBarEnum[ShortcutBarEnum["SPELL_SHORTCUT_BAR"] = 1] = "SPELL_SHORTCUT_BAR";
    })(Protocol.ShortcutBarEnum || (Protocol.ShortcutBarEnum = {}));
    var ShortcutBarEnum = Protocol.ShortcutBarEnum;
    (function (SocialContactCategoryEnum) {
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_FRIEND"] = 0] = "SOCIAL_CONTACT_FRIEND";
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_SPOUSE"] = 1] = "SOCIAL_CONTACT_SPOUSE";
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_PARTY"] = 2] = "SOCIAL_CONTACT_PARTY";
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_GUILD"] = 3] = "SOCIAL_CONTACT_GUILD";
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_ALLIANCE"] = 4] = "SOCIAL_CONTACT_ALLIANCE";
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_CRAFTER"] = 5] = "SOCIAL_CONTACT_CRAFTER";
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_INTERLOCUTOR"] = 6] = "SOCIAL_CONTACT_INTERLOCUTOR";
        SocialContactCategoryEnum[SocialContactCategoryEnum["SOCIAL_CONTACT_FIGHT"] = 7] = "SOCIAL_CONTACT_FIGHT";
    })(Protocol.SocialContactCategoryEnum || (Protocol.SocialContactCategoryEnum = {}));
    var SocialContactCategoryEnum = Protocol.SocialContactCategoryEnum;
    (function (SocialGroupCreationResultEnum) {
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_OK"] = 1] = "SOCIAL_GROUP_CREATE_OK";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_NAME_INVALID"] = 2] = "SOCIAL_GROUP_CREATE_ERROR_NAME_INVALID";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_ALREADY_IN_GROUP"] = 3] = "SOCIAL_GROUP_CREATE_ERROR_ALREADY_IN_GROUP";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_NAME_ALREADY_EXISTS"] = 4] = "SOCIAL_GROUP_CREATE_ERROR_NAME_ALREADY_EXISTS";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_EMBLEM_ALREADY_EXISTS"] = 5] = "SOCIAL_GROUP_CREATE_ERROR_EMBLEM_ALREADY_EXISTS";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_LEAVE"] = 6] = "SOCIAL_GROUP_CREATE_ERROR_LEAVE";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_CANCEL"] = 7] = "SOCIAL_GROUP_CREATE_ERROR_CANCEL";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_REQUIREMENT_UNMET"] = 8] = "SOCIAL_GROUP_CREATE_ERROR_REQUIREMENT_UNMET";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_EMBLEM_INVALID"] = 9] = "SOCIAL_GROUP_CREATE_ERROR_EMBLEM_INVALID";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_TAG_INVALID"] = 10] = "SOCIAL_GROUP_CREATE_ERROR_TAG_INVALID";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_TAG_ALREADY_EXISTS"] = 11] = "SOCIAL_GROUP_CREATE_ERROR_TAG_ALREADY_EXISTS";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_NEEDS_SUBGROUP"] = 12] = "SOCIAL_GROUP_CREATE_ERROR_NEEDS_SUBGROUP";
        SocialGroupCreationResultEnum[SocialGroupCreationResultEnum["SOCIAL_GROUP_CREATE_ERROR_UNKNOWN"] = 99] = "SOCIAL_GROUP_CREATE_ERROR_UNKNOWN";
    })(Protocol.SocialGroupCreationResultEnum || (Protocol.SocialGroupCreationResultEnum = {}));
    var SocialGroupCreationResultEnum = Protocol.SocialGroupCreationResultEnum;
    (function (SocialGroupInvitationStateEnum) {
        SocialGroupInvitationStateEnum[SocialGroupInvitationStateEnum["SOCIAL_GROUP_INVITATION_FAILED"] = 0] = "SOCIAL_GROUP_INVITATION_FAILED";
        SocialGroupInvitationStateEnum[SocialGroupInvitationStateEnum["SOCIAL_GROUP_INVITATION_SENT"] = 1] = "SOCIAL_GROUP_INVITATION_SENT";
        SocialGroupInvitationStateEnum[SocialGroupInvitationStateEnum["SOCIAL_GROUP_INVITATION_CANCELED"] = 2] = "SOCIAL_GROUP_INVITATION_CANCELED";
        SocialGroupInvitationStateEnum[SocialGroupInvitationStateEnum["SOCIAL_GROUP_INVITATION_OK"] = 3] = "SOCIAL_GROUP_INVITATION_OK";
    })(Protocol.SocialGroupInvitationStateEnum || (Protocol.SocialGroupInvitationStateEnum = {}));
    var SocialGroupInvitationStateEnum = Protocol.SocialGroupInvitationStateEnum;
    (function (StatisticTypeEnum) {
        StatisticTypeEnum[StatisticTypeEnum["STEP0000_CHOSE_NICKNAME"] = 78] = "STEP0000_CHOSE_NICKNAME";
        StatisticTypeEnum[StatisticTypeEnum["STEP0100_CHOSE_SERVER"] = 79] = "STEP0100_CHOSE_SERVER";
        StatisticTypeEnum[StatisticTypeEnum["STEP0200_CREATE_FIRST_CHARACTER"] = 80] = "STEP0200_CREATE_FIRST_CHARACTER";
        StatisticTypeEnum[StatisticTypeEnum["STEP0300_LOADING_SCREEN"] = 81] = "STEP0300_LOADING_SCREEN";
        StatisticTypeEnum[StatisticTypeEnum["STEP0400_DOFUS_TRAILER"] = 82] = "STEP0400_DOFUS_TRAILER";
        StatisticTypeEnum[StatisticTypeEnum["STEP0500_ARRIVES_ON_TUTORIAL"] = 83] = "STEP0500_ARRIVES_ON_TUTORIAL";
        StatisticTypeEnum[StatisticTypeEnum["STEP0550_QUITS_TUTORIAL"] = 84] = "STEP0550_QUITS_TUTORIAL";
        StatisticTypeEnum[StatisticTypeEnum["STEP0600_TUTO1_MOVE_MAP"] = 85] = "STEP0600_TUTO1_MOVE_MAP";
        StatisticTypeEnum[StatisticTypeEnum["STEP0700_TUTO2_TALK_TO_YAKASI"] = 86] = "STEP0700_TUTO2_TALK_TO_YAKASI";
        StatisticTypeEnum[StatisticTypeEnum["STEP0800_TUTO3_EQUIP_RING"] = 87] = "STEP0800_TUTO3_EQUIP_RING";
        StatisticTypeEnum[StatisticTypeEnum["STEP0820_CLIC_BAG"] = 88] = "STEP0820_CLIC_BAG";
        StatisticTypeEnum[StatisticTypeEnum["STEP0840_CLIC_RING"] = 89] = "STEP0840_CLIC_RING";
        StatisticTypeEnum[StatisticTypeEnum["STEP0860_EQUIP_RING"] = 90] = "STEP0860_EQUIP_RING";
        StatisticTypeEnum[StatisticTypeEnum["STEP0860_EXIT_BAG"] = 91] = "STEP0860_EXIT_BAG";
        StatisticTypeEnum[StatisticTypeEnum["STEP0900_TUTO4_CHANGE_MAP"] = 92] = "STEP0900_TUTO4_CHANGE_MAP";
        StatisticTypeEnum[StatisticTypeEnum["STEP1000_TUTO5_START_FIRST_FIGHT"] = 93] = "STEP1000_TUTO5_START_FIRST_FIGHT";
        StatisticTypeEnum[StatisticTypeEnum["STEP1100_TUTO6_CHOSE_START_POSITION"] = 94] = "STEP1100_TUTO6_CHOSE_START_POSITION";
        StatisticTypeEnum[StatisticTypeEnum["STEP1130_CHOSE_POSITION"] = 95] = "STEP1130_CHOSE_POSITION";
        StatisticTypeEnum[StatisticTypeEnum["STEP1160_CLIC_READY"] = 96] = "STEP1160_CLIC_READY";
        StatisticTypeEnum[StatisticTypeEnum["STEP1200_TUTO7_MOVE_IN_FIGHT"] = 97] = "STEP1200_TUTO7_MOVE_IN_FIGHT";
        StatisticTypeEnum[StatisticTypeEnum["STEP1900_TUTO8_USE_SPELL"] = 98] = "STEP1900_TUTO8_USE_SPELL";
        StatisticTypeEnum[StatisticTypeEnum["STEP1930_CHOSE_SPELL"] = 99] = "STEP1930_CHOSE_SPELL";
        StatisticTypeEnum[StatisticTypeEnum["STEP1960_USE_SPELL"] = 100] = "STEP1960_USE_SPELL";
        StatisticTypeEnum[StatisticTypeEnum["STEP2000_TUTO9_END_TURN"] = 101] = "STEP2000_TUTO9_END_TURN";
        StatisticTypeEnum[StatisticTypeEnum["STEP2100_TUTO10_WIN_FIGHT"] = 102] = "STEP2100_TUTO10_WIN_FIGHT";
        StatisticTypeEnum[StatisticTypeEnum["STEP2050_TUTO10_LOSE_FIGHT"] = 103] = "STEP2050_TUTO10_LOSE_FIGHT";
        StatisticTypeEnum[StatisticTypeEnum["STEP2200_TUTO11_START_FIRST_QUEST"] = 104] = "STEP2200_TUTO11_START_FIRST_QUEST";
        StatisticTypeEnum[StatisticTypeEnum["STEP2220_CLIC_YAKASI"] = 105] = "STEP2220_CLIC_YAKASI";
        StatisticTypeEnum[StatisticTypeEnum["STEP2240_TALK_YAKASI"] = 106] = "STEP2240_TALK_YAKASI";
        StatisticTypeEnum[StatisticTypeEnum["STEP2260_ACCEPT_MISSION"] = 107] = "STEP2260_ACCEPT_MISSION";
        StatisticTypeEnum[StatisticTypeEnum["STEP2300_TUTO12_EQUIP_SET"] = 108] = "STEP2300_TUTO12_EQUIP_SET";
        StatisticTypeEnum[StatisticTypeEnum["STEP2350_EXIT_BAG"] = 109] = "STEP2350_EXIT_BAG";
        StatisticTypeEnum[StatisticTypeEnum["STEP2400_TUTO13_LETS_KILL_MONSTER"] = 110] = "STEP2400_TUTO13_LETS_KILL_MONSTER";
        StatisticTypeEnum[StatisticTypeEnum["STEP2430_GO_TO_NEXT_MAP"] = 111] = "STEP2430_GO_TO_NEXT_MAP";
        StatisticTypeEnum[StatisticTypeEnum["STEP2460_CLIC_MONSTER"] = 112] = "STEP2460_CLIC_MONSTER";
        StatisticTypeEnum[StatisticTypeEnum["STEP2500_TUTO14_END_SECOND_FIGHT"] = 113] = "STEP2500_TUTO14_END_SECOND_FIGHT";
        StatisticTypeEnum[StatisticTypeEnum["STEP2600_TUTO15_END_TUTO"] = 114] = "STEP2600_TUTO15_END_TUTO";
        StatisticTypeEnum[StatisticTypeEnum["STEP2620_CLIC_YAKASI"] = 115] = "STEP2620_CLIC_YAKASI";
        StatisticTypeEnum[StatisticTypeEnum["STEP2640_END_DIALOG"] = 116] = "STEP2640_END_DIALOG";
        StatisticTypeEnum[StatisticTypeEnum["CLICK_ON_BUTTON"] = 151] = "CLICK_ON_BUTTON";
        StatisticTypeEnum[StatisticTypeEnum["DISPLAY_MENU"] = 152] = "DISPLAY_MENU";
    })(Protocol.StatisticTypeEnum || (Protocol.StatisticTypeEnum = {}));
    var StatisticTypeEnum = Protocol.StatisticTypeEnum;
    (function (StatsUpgradeResultEnum) {
        StatsUpgradeResultEnum[StatsUpgradeResultEnum["NONE"] = -1] = "NONE";
        StatsUpgradeResultEnum[StatsUpgradeResultEnum["SUCCESS"] = 0] = "SUCCESS";
        StatsUpgradeResultEnum[StatsUpgradeResultEnum["RESTRICTED"] = 1] = "RESTRICTED";
        StatsUpgradeResultEnum[StatsUpgradeResultEnum["GUEST"] = 2] = "GUEST";
        StatsUpgradeResultEnum[StatsUpgradeResultEnum["IN_FIGHT"] = 3] = "IN_FIGHT";
        StatsUpgradeResultEnum[StatsUpgradeResultEnum["NOT_ENOUGH_POINT"] = 4] = "NOT_ENOUGH_POINT";
    })(Protocol.StatsUpgradeResultEnum || (Protocol.StatsUpgradeResultEnum = {}));
    var StatsUpgradeResultEnum = Protocol.StatsUpgradeResultEnum;
    (function (SubEntityBindingPointCategoryEnum) {
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_UNUSED"] = 0] = "HOOK_POINT_CATEGORY_UNUSED";
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_PET"] = 1] = "HOOK_POINT_CATEGORY_PET";
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_MOUNT_DRIVER"] = 2] = "HOOK_POINT_CATEGORY_MOUNT_DRIVER";
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_LIFTED_ENTITY"] = 3] = "HOOK_POINT_CATEGORY_LIFTED_ENTITY";
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_BASE_BACKGROUND"] = 4] = "HOOK_POINT_CATEGORY_BASE_BACKGROUND";
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_MERCHANT_BAG"] = 5] = "HOOK_POINT_CATEGORY_MERCHANT_BAG";
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_BASE_FOREGROUND"] = 6] = "HOOK_POINT_CATEGORY_BASE_FOREGROUND";
        SubEntityBindingPointCategoryEnum[SubEntityBindingPointCategoryEnum["HOOK_POINT_CATEGORY_PET_FOLLOWER"] = 7] = "HOOK_POINT_CATEGORY_PET_FOLLOWER";
    })(Protocol.SubEntityBindingPointCategoryEnum || (Protocol.SubEntityBindingPointCategoryEnum = {}));
    var SubEntityBindingPointCategoryEnum = Protocol.SubEntityBindingPointCategoryEnum;
    (function (SubscriptionRequiredEnum) {
        SubscriptionRequiredEnum[SubscriptionRequiredEnum["LIMITED_TO_SUBSCRIBER"] = 0] = "LIMITED_TO_SUBSCRIBER";
        SubscriptionRequiredEnum[SubscriptionRequiredEnum["LIMIT_ON_JOB_XP"] = 1] = "LIMIT_ON_JOB_XP";
        SubscriptionRequiredEnum[SubscriptionRequiredEnum["LIMIT_ON_JOB_USE"] = 2] = "LIMIT_ON_JOB_USE";
        SubscriptionRequiredEnum[SubscriptionRequiredEnum["LIMIT_ON_MAP"] = 3] = "LIMIT_ON_MAP";
        SubscriptionRequiredEnum[SubscriptionRequiredEnum["LIMIT_ON_ITEM"] = 4] = "LIMIT_ON_ITEM";
        SubscriptionRequiredEnum[SubscriptionRequiredEnum["LIMIT_ON_VENDOR"] = 5] = "LIMIT_ON_VENDOR";
    })(Protocol.SubscriptionRequiredEnum || (Protocol.SubscriptionRequiredEnum = {}));
    var SubscriptionRequiredEnum = Protocol.SubscriptionRequiredEnum;
    (function (TaxCollectorErrorReasonEnum) {
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_ERROR_UNKNOWN"] = 0] = "TAX_COLLECTOR_ERROR_UNKNOWN";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_NOT_FOUND"] = 1] = "TAX_COLLECTOR_NOT_FOUND";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_NOT_OWNED"] = 2] = "TAX_COLLECTOR_NOT_OWNED";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_NO_RIGHTS"] = 3] = "TAX_COLLECTOR_NO_RIGHTS";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_MAX_REACHED"] = 4] = "TAX_COLLECTOR_MAX_REACHED";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_ALREADY_ONE"] = 5] = "TAX_COLLECTOR_ALREADY_ONE";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_CANT_HIRE_YET"] = 6] = "TAX_COLLECTOR_CANT_HIRE_YET";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_CANT_HIRE_HERE"] = 7] = "TAX_COLLECTOR_CANT_HIRE_HERE";
        TaxCollectorErrorReasonEnum[TaxCollectorErrorReasonEnum["TAX_COLLECTOR_NOT_ENOUGH_KAMAS"] = 8] = "TAX_COLLECTOR_NOT_ENOUGH_KAMAS";
    })(Protocol.TaxCollectorErrorReasonEnum || (Protocol.TaxCollectorErrorReasonEnum = {}));
    var TaxCollectorErrorReasonEnum = Protocol.TaxCollectorErrorReasonEnum;
    (function (TaxCollectorStateEnum) {
        TaxCollectorStateEnum[TaxCollectorStateEnum["STATE_COLLECTING"] = 0] = "STATE_COLLECTING";
        TaxCollectorStateEnum[TaxCollectorStateEnum["STATE_WAITING_FOR_HELP"] = 1] = "STATE_WAITING_FOR_HELP";
        TaxCollectorStateEnum[TaxCollectorStateEnum["STATE_FIGHTING"] = 2] = "STATE_FIGHTING";
    })(Protocol.TaxCollectorStateEnum || (Protocol.TaxCollectorStateEnum = {}));
    var TaxCollectorStateEnum = Protocol.TaxCollectorStateEnum;
    (function (TeamEnum) {
        TeamEnum[TeamEnum["TEAM_CHALLENGER"] = 0] = "TEAM_CHALLENGER";
        TeamEnum[TeamEnum["TEAM_DEFENDER"] = 1] = "TEAM_DEFENDER";
        TeamEnum[TeamEnum["TEAM_SPECTATOR"] = 2] = "TEAM_SPECTATOR";
    })(Protocol.TeamEnum || (Protocol.TeamEnum = {}));
    var TeamEnum = Protocol.TeamEnum;
    (function (TeamTypeEnum) {
        TeamTypeEnum[TeamTypeEnum["TEAM_TYPE_PLAYER"] = 0] = "TEAM_TYPE_PLAYER";
        TeamTypeEnum[TeamTypeEnum["TEAM_TYPE_MONSTER"] = 1] = "TEAM_TYPE_MONSTER";
        TeamTypeEnum[TeamTypeEnum["TEAM_TYPE_MUTANT"] = 2] = "TEAM_TYPE_MUTANT";
        TeamTypeEnum[TeamTypeEnum["TEAM_TYPE_TAXCOLLECTOR"] = 3] = "TEAM_TYPE_TAXCOLLECTOR";
        TeamTypeEnum[TeamTypeEnum["TEAM_TYPE_BAD_PLAYER"] = 4] = "TEAM_TYPE_BAD_PLAYER";
        TeamTypeEnum[TeamTypeEnum["TEAM_TYPE_PRISM"] = 5] = "TEAM_TYPE_PRISM";
    })(Protocol.TeamTypeEnum || (Protocol.TeamTypeEnum = {}));
    var TeamTypeEnum = Protocol.TeamTypeEnum;
    (function (TeleporterTypeEnum) {
        TeleporterTypeEnum[TeleporterTypeEnum["TELEPORTER_ZAAP"] = 0] = "TELEPORTER_ZAAP";
        TeleporterTypeEnum[TeleporterTypeEnum["TELEPORTER_SUBWAY"] = 1] = "TELEPORTER_SUBWAY";
        TeleporterTypeEnum[TeleporterTypeEnum["TELEPORTER_PRISM"] = 2] = "TELEPORTER_PRISM";
    })(Protocol.TeleporterTypeEnum || (Protocol.TeleporterTypeEnum = {}));
    var TeleporterTypeEnum = Protocol.TeleporterTypeEnum;
    (function (TextInformationTypeEnum) {
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_INFORMATION_MESSAGE"] = 0] = "TEXT_INFORMATION_MESSAGE";
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_INFORMATION_ERROR"] = 1] = "TEXT_INFORMATION_ERROR";
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_INFORMATION_PVP"] = 2] = "TEXT_INFORMATION_PVP";
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_INFORMATION_FIGHT_LOG"] = 3] = "TEXT_INFORMATION_FIGHT_LOG";
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_INFORMATION_POPUP"] = 4] = "TEXT_INFORMATION_POPUP";
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_LIVING_OBJECT"] = 5] = "TEXT_LIVING_OBJECT";
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_ENTITY_TALK"] = 6] = "TEXT_ENTITY_TALK";
        TextInformationTypeEnum[TextInformationTypeEnum["TEXT_INFORMATION_FIGHT"] = 7] = "TEXT_INFORMATION_FIGHT";
    })(Protocol.TextInformationTypeEnum || (Protocol.TextInformationTypeEnum = {}));
    var TextInformationTypeEnum = Protocol.TextInformationTypeEnum;
    (function (TreasureHuntDigRequestEnum) {
        TreasureHuntDigRequestEnum[TreasureHuntDigRequestEnum["TREASURE_HUNT_DIG_ERROR_UNDEFINED"] = 0] = "TREASURE_HUNT_DIG_ERROR_UNDEFINED";
        TreasureHuntDigRequestEnum[TreasureHuntDigRequestEnum["TREASURE_HUNT_DIG_NEW_HINT"] = 1] = "TREASURE_HUNT_DIG_NEW_HINT";
        TreasureHuntDigRequestEnum[TreasureHuntDigRequestEnum["TREASURE_HUNT_DIG_FINISHED"] = 2] = "TREASURE_HUNT_DIG_FINISHED";
        TreasureHuntDigRequestEnum[TreasureHuntDigRequestEnum["TREASURE_HUNT_DIG_WRONG"] = 3] = "TREASURE_HUNT_DIG_WRONG";
        TreasureHuntDigRequestEnum[TreasureHuntDigRequestEnum["TREASURE_HUNT_DIG_LOST"] = 4] = "TREASURE_HUNT_DIG_LOST";
        TreasureHuntDigRequestEnum[TreasureHuntDigRequestEnum["TREASURE_HUNT_DIG_ERROR_IMPOSSIBLE"] = 5] = "TREASURE_HUNT_DIG_ERROR_IMPOSSIBLE";
        TreasureHuntDigRequestEnum[TreasureHuntDigRequestEnum["TREASURE_HUNT_DIG_WRONG_AND_YOU_KNOW_IT"] = 6] = "TREASURE_HUNT_DIG_WRONG_AND_YOU_KNOW_IT";
    })(Protocol.TreasureHuntDigRequestEnum || (Protocol.TreasureHuntDigRequestEnum = {}));
    var TreasureHuntDigRequestEnum = Protocol.TreasureHuntDigRequestEnum;
    (function (TreasureHuntFlagRequestEnum) {
        TreasureHuntFlagRequestEnum[TreasureHuntFlagRequestEnum["TREASURE_HUNT_FLAG_ERROR_UNDEFINED"] = 0] = "TREASURE_HUNT_FLAG_ERROR_UNDEFINED";
        TreasureHuntFlagRequestEnum[TreasureHuntFlagRequestEnum["TREASURE_HUNT_FLAG_OK"] = 1] = "TREASURE_HUNT_FLAG_OK";
        TreasureHuntFlagRequestEnum[TreasureHuntFlagRequestEnum["TREASURE_HUNT_FLAG_WRONG"] = 2] = "TREASURE_HUNT_FLAG_WRONG";
        TreasureHuntFlagRequestEnum[TreasureHuntFlagRequestEnum["TREASURE_HUNT_FLAG_TOO_MANY"] = 3] = "TREASURE_HUNT_FLAG_TOO_MANY";
        TreasureHuntFlagRequestEnum[TreasureHuntFlagRequestEnum["TREASURE_HUNT_FLAG_ERROR_IMPOSSIBLE"] = 4] = "TREASURE_HUNT_FLAG_ERROR_IMPOSSIBLE";
        TreasureHuntFlagRequestEnum[TreasureHuntFlagRequestEnum["TREASURE_HUNT_FLAG_WRONG_INDEX"] = 5] = "TREASURE_HUNT_FLAG_WRONG_INDEX";
        TreasureHuntFlagRequestEnum[TreasureHuntFlagRequestEnum["TREASURE_HUNT_FLAG_SAME_MAP"] = 6] = "TREASURE_HUNT_FLAG_SAME_MAP";
    })(Protocol.TreasureHuntFlagRequestEnum || (Protocol.TreasureHuntFlagRequestEnum = {}));
    var TreasureHuntFlagRequestEnum = Protocol.TreasureHuntFlagRequestEnum;
    (function (TreasureHuntFlagStateEnum) {
        TreasureHuntFlagStateEnum[TreasureHuntFlagStateEnum["TREASURE_HUNT_FLAG_STATE_UNKNOWN"] = 0] = "TREASURE_HUNT_FLAG_STATE_UNKNOWN";
        TreasureHuntFlagStateEnum[TreasureHuntFlagStateEnum["TREASURE_HUNT_FLAG_STATE_OK"] = 1] = "TREASURE_HUNT_FLAG_STATE_OK";
        TreasureHuntFlagStateEnum[TreasureHuntFlagStateEnum["TREASURE_HUNT_FLAG_STATE_WRONG"] = 2] = "TREASURE_HUNT_FLAG_STATE_WRONG";
    })(Protocol.TreasureHuntFlagStateEnum || (Protocol.TreasureHuntFlagStateEnum = {}));
    var TreasureHuntFlagStateEnum = Protocol.TreasureHuntFlagStateEnum;
    (function (TreasureHuntRequestEnum) {
        TreasureHuntRequestEnum[TreasureHuntRequestEnum["TREASURE_HUNT_ERROR_UNDEFINED"] = 0] = "TREASURE_HUNT_ERROR_UNDEFINED";
        TreasureHuntRequestEnum[TreasureHuntRequestEnum["TREASURE_HUNT_ERROR_NO_QUEST_FOUND"] = 2] = "TREASURE_HUNT_ERROR_NO_QUEST_FOUND";
        TreasureHuntRequestEnum[TreasureHuntRequestEnum["TREASURE_HUNT_ERROR_ALREADY_HAVE_QUEST"] = 3] = "TREASURE_HUNT_ERROR_ALREADY_HAVE_QUEST";
        TreasureHuntRequestEnum[TreasureHuntRequestEnum["TREASURE_HUNT_ERROR_NOT_AVAILABLE"] = 4] = "TREASURE_HUNT_ERROR_NOT_AVAILABLE";
        TreasureHuntRequestEnum[TreasureHuntRequestEnum["TREASURE_HUNT_OK"] = 1] = "TREASURE_HUNT_OK";
    })(Protocol.TreasureHuntRequestEnum || (Protocol.TreasureHuntRequestEnum = {}));
    var TreasureHuntRequestEnum = Protocol.TreasureHuntRequestEnum;
    (function (TreasureHuntTypeEnum) {
        TreasureHuntTypeEnum[TreasureHuntTypeEnum["TREASURE_HUNT_CLASSIC"] = 0] = "TREASURE_HUNT_CLASSIC";
        TreasureHuntTypeEnum[TreasureHuntTypeEnum["TREASURE_HUNT_PORTAL"] = 1] = "TREASURE_HUNT_PORTAL";
        TreasureHuntTypeEnum[TreasureHuntTypeEnum["TREASURE_HUNT_LEGENDARY"] = 2] = "TREASURE_HUNT_LEGENDARY";
    })(Protocol.TreasureHuntTypeEnum || (Protocol.TreasureHuntTypeEnum = {}));
    var TreasureHuntTypeEnum = Protocol.TreasureHuntTypeEnum;
    (function (UpdatableMountBoostEnum) {
        UpdatableMountBoostEnum[UpdatableMountBoostEnum["STAMINA"] = 3] = "STAMINA";
        UpdatableMountBoostEnum[UpdatableMountBoostEnum["MATURITY"] = 5] = "MATURITY";
        UpdatableMountBoostEnum[UpdatableMountBoostEnum["ENERGY"] = 1] = "ENERGY";
        UpdatableMountBoostEnum[UpdatableMountBoostEnum["SERENITY"] = 2] = "SERENITY";
        UpdatableMountBoostEnum[UpdatableMountBoostEnum["LOVE"] = 4] = "LOVE";
        UpdatableMountBoostEnum[UpdatableMountBoostEnum["TIREDNESS"] = 6] = "TIREDNESS";
        UpdatableMountBoostEnum[UpdatableMountBoostEnum["RIDEABLE"] = 7] = "RIDEABLE";
    })(Protocol.UpdatableMountBoostEnum || (Protocol.UpdatableMountBoostEnum = {}));
    var UpdatableMountBoostEnum = Protocol.UpdatableMountBoostEnum;
    var AdminCommandMessage = (function (_super) {
        __extends(AdminCommandMessage, _super);
        function AdminCommandMessage() {
            this.content = '';
            _super.call(this);
        }
        AdminCommandMessage.prototype.getMessageId = function () {
            return AdminCommandMessage.ID;
        };
        AdminCommandMessage.prototype.reset = function () {
            this.content = '';
        };
        AdminCommandMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        AdminCommandMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        AdminCommandMessage.prototype.serialize = function (param1) {
            this.serializeAs_AdminCommandMessage(param1);
        };
        AdminCommandMessage.prototype.serializeAs_AdminCommandMessage = function (param1) {
            param1.writeUTF(this.content);
        };
        AdminCommandMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_AdminCommandMessage(param1);
        };
        AdminCommandMessage.prototype.deserializeAs_AdminCommandMessage = function (param1) {
            this.content = param1.readUTF();
        };
        AdminCommandMessage.ID = 76;
        return AdminCommandMessage;
    })(NetworkMessage);
    Protocol.AdminCommandMessage = AdminCommandMessage;
    var AdminQuietCommandMessage = (function (_super) {
        __extends(AdminQuietCommandMessage, _super);
        function AdminQuietCommandMessage() {
            _super.call(this);
        }
        AdminQuietCommandMessage.prototype.getMessageId = function () {
            return AdminQuietCommandMessage.ID;
        };
        AdminQuietCommandMessage.prototype.reset = function () {
        };
        AdminQuietCommandMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        AdminQuietCommandMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        AdminQuietCommandMessage.prototype.serialize = function (param1) {
            this.serializeAs_AdminQuietCommandMessage(param1);
        };
        AdminQuietCommandMessage.prototype.serializeAs_AdminQuietCommandMessage = function (param1) {
            _super.prototype.serializeAs_AdminCommandMessage.call(this, param1);
        };
        AdminQuietCommandMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_AdminQuietCommandMessage(param1);
        };
        AdminQuietCommandMessage.prototype.deserializeAs_AdminQuietCommandMessage = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        AdminQuietCommandMessage.ID = 5662;
        return AdminQuietCommandMessage;
    })(AdminCommandMessage);
    Protocol.AdminQuietCommandMessage = AdminQuietCommandMessage;
    var ConsoleCommandsListMessage = (function (_super) {
        __extends(ConsoleCommandsListMessage, _super);
        function ConsoleCommandsListMessage() {
            this.aliases = [];
            this.args = [];
            this.descriptions = [];
            _super.call(this);
        }
        ConsoleCommandsListMessage.prototype.getMessageId = function () {
            return ConsoleCommandsListMessage.ID;
        };
        ConsoleCommandsListMessage.prototype.reset = function () {
            this.aliases = [];
            this.args = [];
            this.descriptions = [];
        };
        ConsoleCommandsListMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ConsoleCommandsListMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ConsoleCommandsListMessage.prototype.serialize = function (param1) {
            this.serializeAs_ConsoleCommandsListMessage(param1);
        };
        ConsoleCommandsListMessage.prototype.serializeAs_ConsoleCommandsListMessage = function (param1) {
            param1.writeShort(this.aliases.length);
            var _loc2_ = 0;
            while (_loc2_ < this.aliases.length) {
                param1.writeUTF(this.aliases[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.args.length);
            var _loc3_ = 0;
            while (_loc3_ < this.args.length) {
                param1.writeUTF(this.args[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.descriptions.length);
            var _loc4_ = 0;
            while (_loc4_ < this.descriptions.length) {
                param1.writeUTF(this.descriptions[_loc4_]);
                _loc4_++;
            }
        };
        ConsoleCommandsListMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_ConsoleCommandsListMessage(param1);
        };
        ConsoleCommandsListMessage.prototype.deserializeAs_ConsoleCommandsListMessage = function (param1) {
            var _loc8_ = null;
            var _loc9_ = null;
            var _loc10_ = null;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc8_ = param1.readUTF();
                this.aliases.push(_loc8_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc9_ = param1.readUTF();
                this.args.push(_loc9_);
                _loc5_++;
            }
            var _loc6_ = param1.readUnsignedShort();
            var _loc7_ = 0;
            while (_loc7_ < _loc6_) {
                _loc10_ = param1.readUTF();
                this.descriptions.push(_loc10_);
                _loc7_++;
            }
        };
        ConsoleCommandsListMessage.ID = 6127;
        return ConsoleCommandsListMessage;
    })(NetworkMessage);
    Protocol.ConsoleCommandsListMessage = ConsoleCommandsListMessage;
    var ConsoleMessage = (function (_super) {
        __extends(ConsoleMessage, _super);
        function ConsoleMessage() {
            this.type = 0;
            this.content = '';
            _super.call(this);
        }
        ConsoleMessage.prototype.getMessageId = function () {
            return ConsoleMessage.ID;
        };
        ConsoleMessage.prototype.reset = function () {
            this.type = 0;
            this.content = '';
        };
        ConsoleMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ConsoleMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ConsoleMessage.prototype.serialize = function (param1) {
            this.serializeAs_ConsoleMessage(param1);
        };
        ConsoleMessage.prototype.serializeAs_ConsoleMessage = function (param1) {
            param1.writeByte(this.type);
            param1.writeUTF(this.content);
        };
        ConsoleMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_ConsoleMessage(param1);
        };
        ConsoleMessage.prototype.deserializeAs_ConsoleMessage = function (param1) {
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of ConsoleMessage.type.');
            }
            this.content = param1.readUTF();
        };
        ConsoleMessage.ID = 75;
        return ConsoleMessage;
    })(NetworkMessage);
    Protocol.ConsoleMessage = ConsoleMessage;
    var NetworkDataContainerMessage = (function (_super) {
        __extends(NetworkDataContainerMessage, _super);
        function NetworkDataContainerMessage() {
            this.content = new ByteArray();
            _super.call(this);
        }
        NetworkDataContainerMessage.prototype.getMessageId = function () {
            return NetworkDataContainerMessage.ID;
        };
        NetworkDataContainerMessage.prototype.reset = function () {
            this.content = new ByteArray();
        };
        NetworkDataContainerMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        NetworkDataContainerMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        NetworkDataContainerMessage.prototype.serialize = function (param1) {
            this.serializeAs_NetworkDataContainerMessage(param1);
        };
        NetworkDataContainerMessage.prototype.serializeAs_NetworkDataContainerMessage = function (param1) {
            param1.writeBytes(this.content);
            throw new Error('Not implemented');
        };
        NetworkDataContainerMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_NetworkDataContainerMessage(param1);
        };
        NetworkDataContainerMessage.prototype.deserializeAs_NetworkDataContainerMessage = function (param1) {
            var _loc2_ = param1.readVarInt();
            var _loc3_ = new ByteArray();
            param1.readBytes(_loc3_, 0, _loc2_);
            _loc3_.uncompress();
            this.content = _loc3_;
        };
        NetworkDataContainerMessage.ID = 2;
        return NetworkDataContainerMessage;
    })(NetworkMessage);
    Protocol.NetworkDataContainerMessage = NetworkDataContainerMessage;
    var BasicPingMessage = (function (_super) {
        __extends(BasicPingMessage, _super);
        function BasicPingMessage() {
            this.quiet = false;
            _super.call(this);
        }
        BasicPingMessage.prototype.getMessageId = function () {
            return BasicPingMessage.ID;
        };
        BasicPingMessage.prototype.reset = function () {
            this.quiet = false;
        };
        BasicPingMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        BasicPingMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        BasicPingMessage.prototype.serialize = function (param1) {
            this.serializeAs_BasicPingMessage(param1);
        };
        BasicPingMessage.prototype.serializeAs_BasicPingMessage = function (param1) {
            param1.writeBoolean(this.quiet);
        };
        BasicPingMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_BasicPingMessage(param1);
        };
        BasicPingMessage.prototype.deserializeAs_BasicPingMessage = function (param1) {
            this.quiet = param1.readBoolean();
        };
        BasicPingMessage.ID = 182;
        return BasicPingMessage;
    })(NetworkMessage);
    Protocol.BasicPingMessage = BasicPingMessage;
    var BasicPongMessage = (function (_super) {
        __extends(BasicPongMessage, _super);
        function BasicPongMessage() {
            this.quiet = false;
            _super.call(this);
        }
        BasicPongMessage.prototype.getMessageId = function () {
            return BasicPongMessage.ID;
        };
        BasicPongMessage.prototype.reset = function () {
            this.quiet = false;
        };
        BasicPongMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        BasicPongMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        BasicPongMessage.prototype.serialize = function (param1) {
            this.serializeAs_BasicPongMessage(param1);
        };
        BasicPongMessage.prototype.serializeAs_BasicPongMessage = function (param1) {
            param1.writeBoolean(this.quiet);
        };
        BasicPongMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_BasicPongMessage(param1);
        };
        BasicPongMessage.prototype.deserializeAs_BasicPongMessage = function (param1) {
            this.quiet = param1.readBoolean();
        };
        BasicPongMessage.ID = 183;
        return BasicPongMessage;
    })(NetworkMessage);
    Protocol.BasicPongMessage = BasicPongMessage;
    var BasicStatMessage = (function (_super) {
        __extends(BasicStatMessage, _super);
        function BasicStatMessage() {
            this.statId = 0;
            _super.call(this);
        }
        BasicStatMessage.prototype.getMessageId = function () {
            return BasicStatMessage.ID;
        };
        BasicStatMessage.prototype.reset = function () {
            this.statId = 0;
        };
        BasicStatMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        BasicStatMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        BasicStatMessage.prototype.serialize = function (param1) {
            this.serializeAs_BasicStatMessage(param1);
        };
        BasicStatMessage.prototype.serializeAs_BasicStatMessage = function (param1) {
            param1.writeVarShort(this.statId);
        };
        BasicStatMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_BasicStatMessage(param1);
        };
        BasicStatMessage.prototype.deserializeAs_BasicStatMessage = function (param1) {
            this.statId = param1.readVarUhShort();
            if (this.statId < 0) {
                throw new Error('Forbidden value (' + this.statId + ') on element of BasicStatMessage.statId.');
            }
        };
        BasicStatMessage.ID = 6530;
        return BasicStatMessage;
    })(NetworkMessage);
    Protocol.BasicStatMessage = BasicStatMessage;
    var CredentialsAcknowledgementMessage = (function (_super) {
        __extends(CredentialsAcknowledgementMessage, _super);
        function CredentialsAcknowledgementMessage() {
            _super.call(this);
        }
        CredentialsAcknowledgementMessage.prototype.getMessageId = function () {
            return CredentialsAcknowledgementMessage.ID;
        };
        CredentialsAcknowledgementMessage.prototype.reset = function () {
        };
        CredentialsAcknowledgementMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        CredentialsAcknowledgementMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        CredentialsAcknowledgementMessage.prototype.serialize = function (param1) {
            this.serializeAs_CredentialsAcknowledgementMessage(param1);
        };
        CredentialsAcknowledgementMessage.prototype.serializeAs_CredentialsAcknowledgementMessage = function (param1) {
        };
        CredentialsAcknowledgementMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_CredentialsAcknowledgementMessage(param1);
        };
        CredentialsAcknowledgementMessage.prototype.deserializeAs_CredentialsAcknowledgementMessage = function (param1) {
        };
        CredentialsAcknowledgementMessage.ID = 6314;
        return CredentialsAcknowledgementMessage;
    })(NetworkMessage);
    Protocol.CredentialsAcknowledgementMessage = CredentialsAcknowledgementMessage;
    var HelloConnectMessage = (function (_super) {
        __extends(HelloConnectMessage, _super);
        function HelloConnectMessage() {
            this.salt = '';
            this.key = [];
            _super.call(this);
        }
        HelloConnectMessage.prototype.getMessageId = function () {
            return HelloConnectMessage.ID;
        };
        HelloConnectMessage.prototype.reset = function () {
            this.salt = '';
            this.key = [];
        };
        HelloConnectMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        HelloConnectMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        HelloConnectMessage.prototype.serialize = function (param1) {
            this.serializeAs_HelloConnectMessage(param1);
        };
        HelloConnectMessage.prototype.serializeAs_HelloConnectMessage = function (param1) {
            param1.writeUTF(this.salt);
            param1.writeVarInt(this.key.length);
            var _loc2_ = 0;
            while (_loc2_ < this.key.length) {
                param1.writeByte(this.key[_loc2_]);
                _loc2_++;
            }
        };
        HelloConnectMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_HelloConnectMessage(param1);
        };
        HelloConnectMessage.prototype.deserializeAs_HelloConnectMessage = function (param1) {
            var _loc4_ = 0;
            this.salt = param1.readUTF();
            var _loc2_ = param1.readVarInt();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.key.push(_loc4_);
                _loc3_++;
            }
        };
        HelloConnectMessage.ID = 3;
        return HelloConnectMessage;
    })(NetworkMessage);
    Protocol.HelloConnectMessage = HelloConnectMessage;
    var IdentificationAccountForceMessage = (function (_super) {
        __extends(IdentificationAccountForceMessage, _super);
        function IdentificationAccountForceMessage() {
            this.forcedAccountLogin = '';
            _super.call(this);
        }
        IdentificationAccountForceMessage.prototype.getMessageId = function () {
            return IdentificationAccountForceMessage.ID;
        };
        IdentificationAccountForceMessage.prototype.reset = function () {
            this.forcedAccountLogin = '';
        };
        IdentificationAccountForceMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        IdentificationAccountForceMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        IdentificationAccountForceMessage.prototype.serialize = function (param1) {
            this.serializeAs_IdentificationAccountForceMessage(param1);
        };
        IdentificationAccountForceMessage.prototype.serializeAs_IdentificationAccountForceMessage = function (param1) {
            _super.prototype.serializeAs_IdentificationMessage.call(this, param1);
            param1.writeUTF(this.forcedAccountLogin);
        };
        IdentificationAccountForceMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentificationAccountForceMessage(param1);
        };
        IdentificationAccountForceMessage.prototype.deserializeAs_IdentificationAccountForceMessage = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.forcedAccountLogin = param1.readUTF();
        };
        IdentificationAccountForceMessage.ID = 6119;
        return IdentificationAccountForceMessage;
    })(IdentificationMessage);
    Protocol.IdentificationAccountForceMessage = IdentificationAccountForceMessage;
    var IdentificationFailedBannedMessage = (function (_super) {
        __extends(IdentificationFailedBannedMessage, _super);
        function IdentificationFailedBannedMessage() {
            this.banEndDate = 0;
            _super.call(this);
        }
        IdentificationFailedBannedMessage.prototype.getMessageId = function () {
            return IdentificationFailedBannedMessage.ID;
        };
        IdentificationFailedBannedMessage.prototype.reset = function () {
            this.banEndDate = 0;
        };
        IdentificationFailedBannedMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        IdentificationFailedBannedMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        IdentificationFailedBannedMessage.prototype.serialize = function (param1) {
            this.serializeAs_IdentificationFailedBannedMessage(param1);
        };
        IdentificationFailedBannedMessage.prototype.serializeAs_IdentificationFailedBannedMessage = function (param1) {
            _super.prototype.serializeAs_IdentificationFailedMessage.call(this, param1);
            if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.banEndDate + ') on element banEndDate.');
            }
            param1.writeDouble(this.banEndDate);
        };
        IdentificationFailedBannedMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentificationFailedBannedMessage(param1);
        };
        IdentificationFailedBannedMessage.prototype.deserializeAs_IdentificationFailedBannedMessage = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.banEndDate = param1.readDouble();
            if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.banEndDate + ') on element of IdentificationFailedBannedMessage.banEndDate.');
            }
        };
        IdentificationFailedBannedMessage.ID = 6174;
        return IdentificationFailedBannedMessage;
    })(IdentificationFailedMessage);
    Protocol.IdentificationFailedBannedMessage = IdentificationFailedBannedMessage;
    var IdentificationFailedForBadVersionMessage = (function (_super) {
        __extends(IdentificationFailedForBadVersionMessage, _super);
        function IdentificationFailedForBadVersionMessage() {
            this.requiredVersion = new Version();
            _super.call(this);
        }
        IdentificationFailedForBadVersionMessage.prototype.getMessageId = function () {
            return IdentificationFailedForBadVersionMessage.ID;
        };
        IdentificationFailedForBadVersionMessage.prototype.reset = function () {
            this.requiredVersion = new Version();
        };
        IdentificationFailedForBadVersionMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        IdentificationFailedForBadVersionMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        IdentificationFailedForBadVersionMessage.prototype.serialize = function (param1) {
            this.serializeAs_IdentificationFailedForBadVersionMessage(param1);
        };
        IdentificationFailedForBadVersionMessage.prototype.serializeAs_IdentificationFailedForBadVersionMessage = function (param1) {
            _super.prototype.serializeAs_IdentificationFailedMessage.call(this, param1);
            this.requiredVersion.serializeAs_Version(param1);
        };
        IdentificationFailedForBadVersionMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentificationFailedForBadVersionMessage(param1);
        };
        IdentificationFailedForBadVersionMessage.prototype.deserializeAs_IdentificationFailedForBadVersionMessage = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.requiredVersion = new Version();
            this.requiredVersion.deserialize(param1);
        };
        IdentificationFailedForBadVersionMessage.ID = 21;
        return IdentificationFailedForBadVersionMessage;
    })(IdentificationFailedMessage);
    Protocol.IdentificationFailedForBadVersionMessage = IdentificationFailedForBadVersionMessage;
    var IdentificationFailedMessage = (function (_super) {
        __extends(IdentificationFailedMessage, _super);
        function IdentificationFailedMessage() {
            this.reason = 99;
            _super.call(this);
        }
        IdentificationFailedMessage.prototype.getMessageId = function () {
            return IdentificationFailedMessage.ID;
        };
        IdentificationFailedMessage.prototype.reset = function () {
            this.reason = 99;
        };
        IdentificationFailedMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        IdentificationFailedMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        IdentificationFailedMessage.prototype.serialize = function (param1) {
            this.serializeAs_IdentificationFailedMessage(param1);
        };
        IdentificationFailedMessage.prototype.serializeAs_IdentificationFailedMessage = function (param1) {
            param1.writeByte(this.reason);
        };
        IdentificationFailedMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentificationFailedMessage(param1);
        };
        IdentificationFailedMessage.prototype.deserializeAs_IdentificationFailedMessage = function (param1) {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of IdentificationFailedMessage.reason.');
            }
        };
        IdentificationFailedMessage.ID = 20;
        return IdentificationFailedMessage;
    })(NetworkMessage);
    Protocol.IdentificationFailedMessage = IdentificationFailedMessage;
    var IdentificationMessage = (function (_super) {
        __extends(IdentificationMessage, _super);
        function IdentificationMessage() {
            this.version = new VersionExtended();
            this.lang = '';
            this.credentials = [];
            this.serverId = 0;
            this.autoconnect = false;
            this.useCertificate = false;
            this.useLoginToken = false;
            this.sessionOptionalSalt = 0;
            this.failedAttempts = [];
            _super.call(this);
        }
        IdentificationMessage.prototype.getMessageId = function () {
            return IdentificationMessage.ID;
        };
        IdentificationMessage.prototype.reset = function () {
            this.version = new VersionExtended();
            this.lang = '';
            this.credentials = [];
            this.serverId = 0;
            this.autoconnect = false;
            this.useCertificate = false;
            this.useLoginToken = false;
            this.sessionOptionalSalt = 0;
            this.failedAttempts = [];
        };
        IdentificationMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        IdentificationMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        IdentificationMessage.prototype.serialize = function (param1) {
            this.serializeAs_IdentificationMessage(param1);
        };
        IdentificationMessage.prototype.serializeAs_IdentificationMessage = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.autoconnect);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.useCertificate);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.useLoginToken);
            param1.writeByte(_loc2_);
            this.version.serializeAs_VersionExtended(param1);
            param1.writeUTF(this.lang);
            param1.writeVarInt(this.credentials.length);
            var _loc3_ = 0;
            while (_loc3_ < this.credentials.length) {
                param1.writeByte(this.credentials[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.serverId);
            if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.sessionOptionalSalt + ') on element sessionOptionalSalt.');
            }
            param1.writeVarLong(this.sessionOptionalSalt);
            param1.writeShort(this.failedAttempts.length);
            var _loc4_ = 0;
            while (_loc4_ < this.failedAttempts.length) {
                if (this.failedAttempts[_loc4_] < 0) {
                    throw new Error('Forbidden value (' + this.failedAttempts[_loc4_] + ') on element 9 (starting at 1) of failedAttempts.');
                }
                param1.writeVarShort(this.failedAttempts[_loc4_]);
                _loc4_++;
            }
        };
        IdentificationMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentificationMessage(param1);
        };
        IdentificationMessage.prototype.deserializeAs_IdentificationMessage = function (param1) {
            var _loc7_ = 0;
            var _loc8_ = 0;
            var _loc2_ = param1.readByte();
            this.autoconnect = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.useCertificate = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.useLoginToken = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.version = new VersionExtended();
            this.version.deserialize(param1);
            this.lang = param1.readUTF();
            var _loc3_ = param1.readVarInt();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc7_ = param1.readByte();
                this.credentials.push(_loc7_);
                _loc4_++;
            }
            this.serverId = param1.readShort();
            this.sessionOptionalSalt = param1.readVarLong();
            if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.sessionOptionalSalt + ') on element of IdentificationMessage.sessionOptionalSalt.');
            }
            var _loc5_ = param1.readUnsignedShort();
            var _loc6_ = 0;
            while (_loc6_ < _loc5_) {
                _loc8_ = param1.readVarUhShort();
                if (_loc8_ < 0) {
                    throw new Error('Forbidden value (' + _loc8_ + ') on elements of failedAttempts.');
                }
                this.failedAttempts.push(_loc8_);
                _loc6_++;
            }
        };
        IdentificationMessage.ID = 4;
        return IdentificationMessage;
    })(NetworkMessage);
    Protocol.IdentificationMessage = IdentificationMessage;
    var IdentificationSuccessMessage = (function (_super) {
        __extends(IdentificationSuccessMessage, _super);
        function IdentificationSuccessMessage() {
            this.login = '';
            this.nickname = '';
            this.accountId = 0;
            this.communityId = 0;
            this.hasRights = false;
            this.secretQuestion = '';
            this.accountCreation = 0;
            this.subscriptionElapsedDuration = 0;
            this.subscriptionEndDate = 0;
            this.wasAlreadyConnected = false;
            _super.call(this);
        }
        IdentificationSuccessMessage.prototype.getMessageId = function () {
            return IdentificationSuccessMessage.ID;
        };
        IdentificationSuccessMessage.prototype.reset = function () {
            this.login = '';
            this.nickname = '';
            this.accountId = 0;
            this.communityId = 0;
            this.hasRights = false;
            this.secretQuestion = '';
            this.accountCreation = 0;
            this.subscriptionElapsedDuration = 0;
            this.subscriptionEndDate = 0;
            this.wasAlreadyConnected = false;
        };
        IdentificationSuccessMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        IdentificationSuccessMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        IdentificationSuccessMessage.prototype.serialize = function (param1) {
            this.serializeAs_IdentificationSuccessMessage(param1);
        };
        IdentificationSuccessMessage.prototype.serializeAs_IdentificationSuccessMessage = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.hasRights);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.wasAlreadyConnected);
            param1.writeByte(_loc2_);
            param1.writeUTF(this.login);
            param1.writeUTF(this.nickname);
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
            }
            param1.writeInt(this.accountId);
            if (this.communityId < 0) {
                throw new Error('Forbidden value (' + this.communityId + ') on element communityId.');
            }
            param1.writeByte(this.communityId);
            param1.writeUTF(this.secretQuestion);
            if (this.accountCreation < 0 || this.accountCreation > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.accountCreation + ') on element accountCreation.');
            }
            param1.writeDouble(this.accountCreation);
            if (this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.subscriptionElapsedDuration + ') on element subscriptionElapsedDuration.');
            }
            param1.writeDouble(this.subscriptionElapsedDuration);
            if (this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.subscriptionEndDate + ') on element subscriptionEndDate.');
            }
            param1.writeDouble(this.subscriptionEndDate);
        };
        IdentificationSuccessMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentificationSuccessMessage(param1);
        };
        IdentificationSuccessMessage.prototype.deserializeAs_IdentificationSuccessMessage = function (param1) {
            var _loc2_ = param1.readByte();
            this.hasRights = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.wasAlreadyConnected = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.login = param1.readUTF();
            this.nickname = param1.readUTF();
            this.accountId = param1.readInt();
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element of IdentificationSuccessMessage.accountId.');
            }
            this.communityId = param1.readByte();
            if (this.communityId < 0) {
                throw new Error('Forbidden value (' + this.communityId + ') on element of IdentificationSuccessMessage.communityId.');
            }
            this.secretQuestion = param1.readUTF();
            this.accountCreation = param1.readDouble();
            if (this.accountCreation < 0 || this.accountCreation > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.accountCreation + ') on element of IdentificationSuccessMessage.accountCreation.');
            }
            this.subscriptionElapsedDuration = param1.readDouble();
            if (this.subscriptionElapsedDuration < 0 || this.subscriptionElapsedDuration > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.subscriptionElapsedDuration + ') on element of IdentificationSuccessMessage.subscriptionElapsedDuration.');
            }
            this.subscriptionEndDate = param1.readDouble();
            if (this.subscriptionEndDate < 0 || this.subscriptionEndDate > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.subscriptionEndDate + ') on element of IdentificationSuccessMessage.subscriptionEndDate.');
            }
        };
        IdentificationSuccessMessage.ID = 22;
        return IdentificationSuccessMessage;
    })(NetworkMessage);
    Protocol.IdentificationSuccessMessage = IdentificationSuccessMessage;
    var IdentificationSuccessWithLoginTokenMessage = (function (_super) {
        __extends(IdentificationSuccessWithLoginTokenMessage, _super);
        function IdentificationSuccessWithLoginTokenMessage() {
            this.loginToken = '';
            _super.call(this);
        }
        IdentificationSuccessWithLoginTokenMessage.prototype.getMessageId = function () {
            return IdentificationSuccessWithLoginTokenMessage.ID;
        };
        IdentificationSuccessWithLoginTokenMessage.prototype.reset = function () {
            this.loginToken = '';
        };
        IdentificationSuccessWithLoginTokenMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        IdentificationSuccessWithLoginTokenMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        IdentificationSuccessWithLoginTokenMessage.prototype.serialize = function (param1) {
            this.serializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
        };
        IdentificationSuccessWithLoginTokenMessage.prototype.serializeAs_IdentificationSuccessWithLoginTokenMessage = function (param1) {
            _super.prototype.serializeAs_IdentificationSuccessMessage.call(this, param1);
            param1.writeUTF(this.loginToken);
        };
        IdentificationSuccessWithLoginTokenMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
        };
        IdentificationSuccessWithLoginTokenMessage.prototype.deserializeAs_IdentificationSuccessWithLoginTokenMessage = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.loginToken = param1.readUTF();
        };
        IdentificationSuccessWithLoginTokenMessage.ID = 6209;
        return IdentificationSuccessWithLoginTokenMessage;
    })(IdentificationSuccessMessage);
    Protocol.IdentificationSuccessWithLoginTokenMessage = IdentificationSuccessWithLoginTokenMessage;
    var SelectedServerDataExtendedMessage = (function (_super) {
        __extends(SelectedServerDataExtendedMessage, _super);
        function SelectedServerDataExtendedMessage() {
            this.serverIds = [];
            _super.call(this);
        }
        SelectedServerDataExtendedMessage.prototype.getMessageId = function () {
            return SelectedServerDataExtendedMessage.ID;
        };
        SelectedServerDataExtendedMessage.prototype.reset = function () {
            this.serverIds = [];
        };
        SelectedServerDataExtendedMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        SelectedServerDataExtendedMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        SelectedServerDataExtendedMessage.prototype.serialize = function (param1) {
            this.serializeAs_SelectedServerDataExtendedMessage(param1);
        };
        SelectedServerDataExtendedMessage.prototype.serializeAs_SelectedServerDataExtendedMessage = function (param1) {
            _super.prototype.serializeAs_SelectedServerDataMessage.call(this, param1);
            param1.writeShort(this.serverIds.length);
            var _loc2_ = 0;
            while (_loc2_ < this.serverIds.length) {
                if (this.serverIds[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.serverIds[_loc2_] + ') on element 1 (starting at 1) of serverIds.');
                }
                param1.writeVarShort(this.serverIds[_loc2_]);
                _loc2_++;
            }
        };
        SelectedServerDataExtendedMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_SelectedServerDataExtendedMessage(param1);
        };
        SelectedServerDataExtendedMessage.prototype.deserializeAs_SelectedServerDataExtendedMessage = function (param1) {
            var _loc4_ = 0;
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of serverIds.');
                }
                this.serverIds.push(_loc4_);
                _loc3_++;
            }
        };
        SelectedServerDataExtendedMessage.ID = 6469;
        return SelectedServerDataExtendedMessage;
    })(SelectedServerDataMessage);
    Protocol.SelectedServerDataExtendedMessage = SelectedServerDataExtendedMessage;
    var SelectedServerDataMessage = (function (_super) {
        __extends(SelectedServerDataMessage, _super);
        function SelectedServerDataMessage() {
            this.serverId = 0;
            this.address = '';
            this.port = 0;
            this.canCreateNewCharacter = false;
            this.ticket = [];
            _super.call(this);
        }
        SelectedServerDataMessage.prototype.getMessageId = function () {
            return SelectedServerDataMessage.ID;
        };
        SelectedServerDataMessage.prototype.reset = function () {
            this.serverId = 0;
            this.address = '';
            this.port = 0;
            this.canCreateNewCharacter = false;
            this.ticket = [];
        };
        SelectedServerDataMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        SelectedServerDataMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        SelectedServerDataMessage.prototype.serialize = function (param1) {
            this.serializeAs_SelectedServerDataMessage(param1);
        };
        SelectedServerDataMessage.prototype.serializeAs_SelectedServerDataMessage = function (param1) {
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
            }
            param1.writeVarShort(this.serverId);
            param1.writeUTF(this.address);
            if (this.port < 0 || this.port > 65535) {
                throw new Error('Forbidden value (' + this.port + ') on element port.');
            }
            param1.writeShort(this.port);
            param1.writeBoolean(this.canCreateNewCharacter);
            param1.writeVarInt(this.ticket.length);
            var _loc2_ = 0;
            while (_loc2_ < this.ticket.length) {
                param1.writeByte(this.ticket[_loc2_]);
                _loc2_++;
            }
        };
        SelectedServerDataMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_SelectedServerDataMessage(param1);
        };
        SelectedServerDataMessage.prototype.deserializeAs_SelectedServerDataMessage = function (param1) {
            var _loc4_ = 0;
            this.serverId = param1.readVarUhShort();
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element of SelectedServerDataMessage.serverId.');
            }
            this.address = param1.readUTF();
            this.port = param1.readUnsignedShort();
            if (this.port < 0 || this.port > 65535) {
                throw new Error('Forbidden value (' + this.port + ') on element of SelectedServerDataMessage.port.');
            }
            this.canCreateNewCharacter = param1.readBoolean();
            var _loc2_ = param1.readVarInt();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.ticket.push(_loc4_);
                _loc3_++;
            }
        };
        SelectedServerDataMessage.ID = 42;
        return SelectedServerDataMessage;
    })(NetworkMessage);
    Protocol.SelectedServerDataMessage = SelectedServerDataMessage;
    var SelectedServerRefusedMessage = (function (_super) {
        __extends(SelectedServerRefusedMessage, _super);
        function SelectedServerRefusedMessage() {
            this.serverId = 0;
            this.error = 1;
            this.serverStatus = 1;
            _super.call(this);
        }
        SelectedServerRefusedMessage.prototype.getMessageId = function () {
            return SelectedServerRefusedMessage.ID;
        };
        SelectedServerRefusedMessage.prototype.reset = function () {
            this.serverId = 0;
            this.error = 1;
            this.serverStatus = 1;
        };
        SelectedServerRefusedMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        SelectedServerRefusedMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        SelectedServerRefusedMessage.prototype.serialize = function (param1) {
            this.serializeAs_SelectedServerRefusedMessage(param1);
        };
        SelectedServerRefusedMessage.prototype.serializeAs_SelectedServerRefusedMessage = function (param1) {
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
            }
            param1.writeVarShort(this.serverId);
            param1.writeByte(this.error);
            param1.writeByte(this.serverStatus);
        };
        SelectedServerRefusedMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_SelectedServerRefusedMessage(param1);
        };
        SelectedServerRefusedMessage.prototype.deserializeAs_SelectedServerRefusedMessage = function (param1) {
            this.serverId = param1.readVarUhShort();
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element of SelectedServerRefusedMessage.serverId.');
            }
            this.error = param1.readByte();
            if (this.error < 0) {
                throw new Error('Forbidden value (' + this.error + ') on element of SelectedServerRefusedMessage.error.');
            }
            this.serverStatus = param1.readByte();
            if (this.serverStatus < 0) {
                throw new Error('Forbidden value (' + this.serverStatus + ') on element of SelectedServerRefusedMessage.serverStatus.');
            }
        };
        SelectedServerRefusedMessage.ID = 41;
        return SelectedServerRefusedMessage;
    })(NetworkMessage);
    Protocol.SelectedServerRefusedMessage = SelectedServerRefusedMessage;
    var ServerSelectionMessage = (function (_super) {
        __extends(ServerSelectionMessage, _super);
        function ServerSelectionMessage() {
            this.serverId = 0;
            _super.call(this);
        }
        ServerSelectionMessage.prototype.getMessageId = function () {
            return ServerSelectionMessage.ID;
        };
        ServerSelectionMessage.prototype.reset = function () {
            this.serverId = 0;
        };
        ServerSelectionMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ServerSelectionMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ServerSelectionMessage.prototype.serialize = function (param1) {
            this.serializeAs_ServerSelectionMessage(param1);
        };
        ServerSelectionMessage.prototype.serializeAs_ServerSelectionMessage = function (param1) {
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
            }
            param1.writeVarShort(this.serverId);
        };
        ServerSelectionMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_ServerSelectionMessage(param1);
        };
        ServerSelectionMessage.prototype.deserializeAs_ServerSelectionMessage = function (param1) {
            this.serverId = param1.readVarUhShort();
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element of ServerSelectionMessage.serverId.');
            }
        };
        ServerSelectionMessage.ID = 40;
        return ServerSelectionMessage;
    })(NetworkMessage);
    Protocol.ServerSelectionMessage = ServerSelectionMessage;
    var ServerStatusUpdateMessage = (function (_super) {
        __extends(ServerStatusUpdateMessage, _super);
        function ServerStatusUpdateMessage() {
            this.server = new GameServerInformations();
            _super.call(this);
        }
        ServerStatusUpdateMessage.prototype.getMessageId = function () {
            return ServerStatusUpdateMessage.ID;
        };
        ServerStatusUpdateMessage.prototype.reset = function () {
            this.server = new GameServerInformations();
        };
        ServerStatusUpdateMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ServerStatusUpdateMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ServerStatusUpdateMessage.prototype.serialize = function (param1) {
            this.serializeAs_ServerStatusUpdateMessage(param1);
        };
        ServerStatusUpdateMessage.prototype.serializeAs_ServerStatusUpdateMessage = function (param1) {
            this.server.serializeAs_GameServerInformations(param1);
        };
        ServerStatusUpdateMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_ServerStatusUpdateMessage(param1);
        };
        ServerStatusUpdateMessage.prototype.deserializeAs_ServerStatusUpdateMessage = function (param1) {
            this.server = new GameServerInformations();
            this.server.deserialize(param1);
        };
        ServerStatusUpdateMessage.ID = 50;
        return ServerStatusUpdateMessage;
    })(NetworkMessage);
    Protocol.ServerStatusUpdateMessage = ServerStatusUpdateMessage;
    var ServersListMessage = (function (_super) {
        __extends(ServersListMessage, _super);
        function ServersListMessage() {
            this.servers = [];
            this.alreadyConnectedToServerId = 0;
            this.canCreateNewCharacter = false;
            _super.call(this);
        }
        ServersListMessage.prototype.getMessageId = function () {
            return ServersListMessage.ID;
        };
        ServersListMessage.prototype.reset = function () {
            this.servers = [];
            this.alreadyConnectedToServerId = 0;
            this.canCreateNewCharacter = false;
        };
        ServersListMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ServersListMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ServersListMessage.prototype.serialize = function (param1) {
            this.serializeAs_ServersListMessage(param1);
        };
        ServersListMessage.prototype.serializeAs_ServersListMessage = function (param1) {
            param1.writeShort(this.servers.length);
            var _loc2_ = 0;
            while (_loc2_ < this.servers.length) {
                (this.servers[_loc2_]).serializeAs_GameServerInformations(param1);
                _loc2_++;
            }
            if (this.alreadyConnectedToServerId < 0) {
                throw new Error('Forbidden value (' + this.alreadyConnectedToServerId + ') on element alreadyConnectedToServerId.');
            }
            param1.writeVarShort(this.alreadyConnectedToServerId);
            param1.writeBoolean(this.canCreateNewCharacter);
        };
        ServersListMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_ServersListMessage(param1);
        };
        ServersListMessage.prototype.deserializeAs_ServersListMessage = function (param1) {
            var _loc4_ = null;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new GameServerInformations();
                _loc4_.deserialize(param1);
                this.servers.push(_loc4_);
                _loc3_++;
            }
            this.alreadyConnectedToServerId = param1.readVarUhShort();
            if (this.alreadyConnectedToServerId < 0) {
                throw new Error('Forbidden value (' + this.alreadyConnectedToServerId + ') on element of ServersListMessage.alreadyConnectedToServerId.');
            }
            this.canCreateNewCharacter = param1.readBoolean();
        };
        ServersListMessage.ID = 30;
        return ServersListMessage;
    })(NetworkMessage);
    Protocol.ServersListMessage = ServersListMessage;
    var AccountLinkRequiredMessage = (function (_super) {
        __extends(AccountLinkRequiredMessage, _super);
        function AccountLinkRequiredMessage() {
            _super.call(this);
        }
        AccountLinkRequiredMessage.prototype.getMessageId = function () {
            return AccountLinkRequiredMessage.ID;
        };
        AccountLinkRequiredMessage.prototype.reset = function () {
        };
        AccountLinkRequiredMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        AccountLinkRequiredMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        AccountLinkRequiredMessage.prototype.serialize = function (param1) {
            this.serializeAs_AccountLinkRequiredMessage(param1);
        };
        AccountLinkRequiredMessage.prototype.serializeAs_AccountLinkRequiredMessage = function (param1) {
        };
        AccountLinkRequiredMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_AccountLinkRequiredMessage(param1);
        };
        AccountLinkRequiredMessage.prototype.deserializeAs_AccountLinkRequiredMessage = function (param1) {
        };
        AccountLinkRequiredMessage.ID = 6607;
        return AccountLinkRequiredMessage;
    })(NetworkMessage);
    Protocol.AccountLinkRequiredMessage = AccountLinkRequiredMessage;
    var NicknameAcceptedMessage = (function (_super) {
        __extends(NicknameAcceptedMessage, _super);
        function NicknameAcceptedMessage() {
            _super.call(this);
        }
        NicknameAcceptedMessage.prototype.getMessageId = function () {
            return NicknameAcceptedMessage.ID;
        };
        NicknameAcceptedMessage.prototype.reset = function () {
        };
        NicknameAcceptedMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        NicknameAcceptedMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        NicknameAcceptedMessage.prototype.serialize = function (param1) {
            this.serializeAs_NicknameAcceptedMessage(param1);
        };
        NicknameAcceptedMessage.prototype.serializeAs_NicknameAcceptedMessage = function (param1) {
        };
        NicknameAcceptedMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_NicknameAcceptedMessage(param1);
        };
        NicknameAcceptedMessage.prototype.deserializeAs_NicknameAcceptedMessage = function (param1) {
        };
        NicknameAcceptedMessage.ID = 5641;
        return NicknameAcceptedMessage;
    })(NetworkMessage);
    Protocol.NicknameAcceptedMessage = NicknameAcceptedMessage;
    var NicknameChoiceRequestMessage = (function (_super) {
        __extends(NicknameChoiceRequestMessage, _super);
        function NicknameChoiceRequestMessage() {
            this.nickname = '';
            _super.call(this);
        }
        NicknameChoiceRequestMessage.prototype.getMessageId = function () {
            return NicknameChoiceRequestMessage.ID;
        };
        NicknameChoiceRequestMessage.prototype.reset = function () {
            this.nickname = '';
        };
        NicknameChoiceRequestMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        NicknameChoiceRequestMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        NicknameChoiceRequestMessage.prototype.serialize = function (param1) {
            this.serializeAs_NicknameChoiceRequestMessage(param1);
        };
        NicknameChoiceRequestMessage.prototype.serializeAs_NicknameChoiceRequestMessage = function (param1) {
            param1.writeUTF(this.nickname);
        };
        NicknameChoiceRequestMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_NicknameChoiceRequestMessage(param1);
        };
        NicknameChoiceRequestMessage.prototype.deserializeAs_NicknameChoiceRequestMessage = function (param1) {
            this.nickname = param1.readUTF();
        };
        NicknameChoiceRequestMessage.ID = 5639;
        return NicknameChoiceRequestMessage;
    })(NetworkMessage);
    Protocol.NicknameChoiceRequestMessage = NicknameChoiceRequestMessage;
    var NicknameRefusedMessage = (function (_super) {
        __extends(NicknameRefusedMessage, _super);
        function NicknameRefusedMessage() {
            this.reason = 99;
            _super.call(this);
        }
        NicknameRefusedMessage.prototype.getMessageId = function () {
            return NicknameRefusedMessage.ID;
        };
        NicknameRefusedMessage.prototype.reset = function () {
            this.reason = 99;
        };
        NicknameRefusedMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        NicknameRefusedMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        NicknameRefusedMessage.prototype.serialize = function (param1) {
            this.serializeAs_NicknameRefusedMessage(param1);
        };
        NicknameRefusedMessage.prototype.serializeAs_NicknameRefusedMessage = function (param1) {
            param1.writeByte(this.reason);
        };
        NicknameRefusedMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_NicknameRefusedMessage(param1);
        };
        NicknameRefusedMessage.prototype.deserializeAs_NicknameRefusedMessage = function (param1) {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of NicknameRefusedMessage.reason.');
            }
        };
        NicknameRefusedMessage.ID = 5638;
        return NicknameRefusedMessage;
    })(NetworkMessage);
    Protocol.NicknameRefusedMessage = NicknameRefusedMessage;
    var NicknameRegistrationMessage = (function (_super) {
        __extends(NicknameRegistrationMessage, _super);
        function NicknameRegistrationMessage() {
            _super.call(this);
        }
        NicknameRegistrationMessage.prototype.getMessageId = function () {
            return NicknameRegistrationMessage.ID;
        };
        NicknameRegistrationMessage.prototype.reset = function () {
        };
        NicknameRegistrationMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        NicknameRegistrationMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        NicknameRegistrationMessage.prototype.serialize = function (param1) {
            this.serializeAs_NicknameRegistrationMessage(param1);
        };
        NicknameRegistrationMessage.prototype.serializeAs_NicknameRegistrationMessage = function (param1) {
        };
        NicknameRegistrationMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_NicknameRegistrationMessage(param1);
        };
        NicknameRegistrationMessage.prototype.deserializeAs_NicknameRegistrationMessage = function (param1) {
        };
        NicknameRegistrationMessage.ID = 5640;
        return NicknameRegistrationMessage;
    })(NetworkMessage);
    Protocol.NicknameRegistrationMessage = NicknameRegistrationMessage;
    var AcquaintanceSearchErrorMessage = (function (_super) {
        __extends(AcquaintanceSearchErrorMessage, _super);
        function AcquaintanceSearchErrorMessage() {
            this.reason = 0;
            _super.call(this);
        }
        AcquaintanceSearchErrorMessage.prototype.getMessageId = function () {
            return AcquaintanceSearchErrorMessage.ID;
        };
        AcquaintanceSearchErrorMessage.prototype.reset = function () {
            this.reason = 0;
        };
        AcquaintanceSearchErrorMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        AcquaintanceSearchErrorMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        AcquaintanceSearchErrorMessage.prototype.serialize = function (param1) {
            this.serializeAs_AcquaintanceSearchErrorMessage(param1);
        };
        AcquaintanceSearchErrorMessage.prototype.serializeAs_AcquaintanceSearchErrorMessage = function (param1) {
            param1.writeByte(this.reason);
        };
        AcquaintanceSearchErrorMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_AcquaintanceSearchErrorMessage(param1);
        };
        AcquaintanceSearchErrorMessage.prototype.deserializeAs_AcquaintanceSearchErrorMessage = function (param1) {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of AcquaintanceSearchErrorMessage.reason.');
            }
        };
        AcquaintanceSearchErrorMessage.ID = 6143;
        return AcquaintanceSearchErrorMessage;
    })(NetworkMessage);
    Protocol.AcquaintanceSearchErrorMessage = AcquaintanceSearchErrorMessage;
    var AcquaintanceSearchMessage = (function (_super) {
        __extends(AcquaintanceSearchMessage, _super);
        function AcquaintanceSearchMessage() {
            this.nickname = '';
            _super.call(this);
        }
        AcquaintanceSearchMessage.prototype.getMessageId = function () {
            return AcquaintanceSearchMessage.ID;
        };
        AcquaintanceSearchMessage.prototype.reset = function () {
            this.nickname = '';
        };
        AcquaintanceSearchMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        AcquaintanceSearchMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        AcquaintanceSearchMessage.prototype.serialize = function (param1) {
            this.serializeAs_AcquaintanceSearchMessage(param1);
        };
        AcquaintanceSearchMessage.prototype.serializeAs_AcquaintanceSearchMessage = function (param1) {
            param1.writeUTF(this.nickname);
        };
        AcquaintanceSearchMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_AcquaintanceSearchMessage(param1);
        };
        AcquaintanceSearchMessage.prototype.deserializeAs_AcquaintanceSearchMessage = function (param1) {
            this.nickname = param1.readUTF();
        };
        AcquaintanceSearchMessage.ID = 6144;
        return AcquaintanceSearchMessage;
    })(NetworkMessage);
    Protocol.AcquaintanceSearchMessage = AcquaintanceSearchMessage;
    var AcquaintanceServerListMessage = (function (_super) {
        __extends(AcquaintanceServerListMessage, _super);
        function AcquaintanceServerListMessage() {
            this.servers = [];
            _super.call(this);
        }
        AcquaintanceServerListMessage.prototype.getMessageId = function () {
            return AcquaintanceServerListMessage.ID;
        };
        AcquaintanceServerListMessage.prototype.reset = function () {
            this.servers = [];
        };
        AcquaintanceServerListMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        AcquaintanceServerListMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        AcquaintanceServerListMessage.prototype.serialize = function (param1) {
            this.serializeAs_AcquaintanceServerListMessage(param1);
        };
        AcquaintanceServerListMessage.prototype.serializeAs_AcquaintanceServerListMessage = function (param1) {
            param1.writeShort(this.servers.length);
            var _loc2_ = 0;
            while (_loc2_ < this.servers.length) {
                if (this.servers[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.servers[_loc2_] + ') on element 1 (starting at 1) of servers.');
                }
                param1.writeVarShort(this.servers[_loc2_]);
                _loc2_++;
            }
        };
        AcquaintanceServerListMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_AcquaintanceServerListMessage(param1);
        };
        AcquaintanceServerListMessage.prototype.deserializeAs_AcquaintanceServerListMessage = function (param1) {
            var _loc4_ = 0;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of servers.');
                }
                this.servers.push(_loc4_);
                _loc3_++;
            }
        };
        AcquaintanceServerListMessage.ID = 6142;
        return AcquaintanceServerListMessage;
    })(NetworkMessage);
    Protocol.AcquaintanceServerListMessage = AcquaintanceServerListMessage;
    var DebugClearHighlightCellsMessage = (function (_super) {
        __extends(DebugClearHighlightCellsMessage, _super);
        function DebugClearHighlightCellsMessage() {
            _super.call(this);
        }
        DebugClearHighlightCellsMessage.prototype.getMessageId = function () {
            return DebugClearHighlightCellsMessage.ID;
        };
        DebugClearHighlightCellsMessage.prototype.reset = function () {
        };
        DebugClearHighlightCellsMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DebugClearHighlightCellsMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DebugClearHighlightCellsMessage.prototype.serialize = function (param1) {
            this.serializeAs_DebugClearHighlightCellsMessage(param1);
        };
        DebugClearHighlightCellsMessage.prototype.serializeAs_DebugClearHighlightCellsMessage = function (param1) {
        };
        DebugClearHighlightCellsMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DebugClearHighlightCellsMessage(param1);
        };
        DebugClearHighlightCellsMessage.prototype.deserializeAs_DebugClearHighlightCellsMessage = function (param1) {
        };
        DebugClearHighlightCellsMessage.ID = 2002;
        return DebugClearHighlightCellsMessage;
    })(NetworkMessage);
    Protocol.DebugClearHighlightCellsMessage = DebugClearHighlightCellsMessage;
    var DebugHighlightCellsMessage = (function (_super) {
        __extends(DebugHighlightCellsMessage, _super);
        function DebugHighlightCellsMessage() {
            this.color = 0;
            this.cells = [];
            _super.call(this);
        }
        DebugHighlightCellsMessage.prototype.getMessageId = function () {
            return DebugHighlightCellsMessage.ID;
        };
        DebugHighlightCellsMessage.prototype.reset = function () {
            this.color = 0;
            this.cells = [];
        };
        DebugHighlightCellsMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DebugHighlightCellsMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DebugHighlightCellsMessage.prototype.serialize = function (param1) {
            this.serializeAs_DebugHighlightCellsMessage(param1);
        };
        DebugHighlightCellsMessage.prototype.serializeAs_DebugHighlightCellsMessage = function (param1) {
            param1.writeInt(this.color);
            param1.writeShort(this.cells.length);
            var _loc2_ = 0;
            while (_loc2_ < this.cells.length) {
                if (this.cells[_loc2_] < 0 || this.cells[_loc2_] > 559) {
                    throw new Error('Forbidden value (' + this.cells[_loc2_] + ') on element 2 (starting at 1) of cells.');
                }
                param1.writeVarShort(this.cells[_loc2_]);
                _loc2_++;
            }
        };
        DebugHighlightCellsMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DebugHighlightCellsMessage(param1);
        };
        DebugHighlightCellsMessage.prototype.deserializeAs_DebugHighlightCellsMessage = function (param1) {
            var _loc4_ = 0;
            this.color = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0 || _loc4_ > 559) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of cells.');
                }
                this.cells.push(_loc4_);
                _loc3_++;
            }
        };
        DebugHighlightCellsMessage.ID = 2001;
        return DebugHighlightCellsMessage;
    })(NetworkMessage);
    Protocol.DebugHighlightCellsMessage = DebugHighlightCellsMessage;
    var DebugInClientMessage = (function (_super) {
        __extends(DebugInClientMessage, _super);
        function DebugInClientMessage() {
            this.level = 0;
            this.message = '';
            _super.call(this);
        }
        DebugInClientMessage.prototype.getMessageId = function () {
            return DebugInClientMessage.ID;
        };
        DebugInClientMessage.prototype.reset = function () {
            this.level = 0;
            this.message = '';
        };
        DebugInClientMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DebugInClientMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DebugInClientMessage.prototype.serialize = function (param1) {
            this.serializeAs_DebugInClientMessage(param1);
        };
        DebugInClientMessage.prototype.serializeAs_DebugInClientMessage = function (param1) {
            param1.writeByte(this.level);
            param1.writeUTF(this.message);
        };
        DebugInClientMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DebugInClientMessage(param1);
        };
        DebugInClientMessage.prototype.deserializeAs_DebugInClientMessage = function (param1) {
            this.level = param1.readByte();
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element of DebugInClientMessage.level.');
            }
            this.message = param1.readUTF();
        };
        DebugInClientMessage.ID = 6028;
        return DebugInClientMessage;
    })(NetworkMessage);
    Protocol.DebugInClientMessage = DebugInClientMessage;
    var ProtocolRequired = (function (_super) {
        __extends(ProtocolRequired, _super);
        function ProtocolRequired() {
            this.requiredVersion = 0;
            this.currentVersion = 0;
            _super.call(this);
        }
        ProtocolRequired.prototype.getMessageId = function () {
            return ProtocolRequired.ID;
        };
        ProtocolRequired.prototype.reset = function () {
            this.requiredVersion = 0;
            this.currentVersion = 0;
        };
        ProtocolRequired.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ProtocolRequired.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ProtocolRequired.prototype.serialize = function (param1) {
            this.serializeAs_ProtocolRequired(param1);
        };
        ProtocolRequired.prototype.serializeAs_ProtocolRequired = function (param1) {
            if (this.requiredVersion < 0) {
                throw new Error('Forbidden value (' + this.requiredVersion + ') on element requiredVersion.');
            }
            param1.writeInt(this.requiredVersion);
            if (this.currentVersion < 0) {
                throw new Error('Forbidden value (' + this.currentVersion + ') on element currentVersion.');
            }
            param1.writeInt(this.currentVersion);
        };
        ProtocolRequired.prototype.deserialize = function (param1) {
            this.deserializeAs_ProtocolRequired(param1);
        };
        ProtocolRequired.prototype.deserializeAs_ProtocolRequired = function (param1) {
            this.requiredVersion = param1.readInt();
            if (this.requiredVersion < 0) {
                throw new Error('Forbidden value (' + this.requiredVersion + ') on element of ProtocolRequired.requiredVersion.');
            }
            this.currentVersion = param1.readInt();
            if (this.currentVersion < 0) {
                throw new Error('Forbidden value (' + this.currentVersion + ') on element of ProtocolRequired.currentVersion.');
            }
        };
        ProtocolRequired.ID = 1;
        return ProtocolRequired;
    })(NetworkMessage);
    Protocol.ProtocolRequired = ProtocolRequired;
    var LoginQueueStatusMessage = (function (_super) {
        __extends(LoginQueueStatusMessage, _super);
        function LoginQueueStatusMessage() {
            this.position = 0;
            this.total = 0;
            _super.call(this);
        }
        LoginQueueStatusMessage.prototype.getMessageId = function () {
            return LoginQueueStatusMessage.ID;
        };
        LoginQueueStatusMessage.prototype.reset = function () {
            this.position = 0;
            this.total = 0;
        };
        LoginQueueStatusMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        LoginQueueStatusMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        LoginQueueStatusMessage.prototype.serialize = function (param1) {
            this.serializeAs_LoginQueueStatusMessage(param1);
        };
        LoginQueueStatusMessage.prototype.serializeAs_LoginQueueStatusMessage = function (param1) {
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element position.');
            }
            param1.writeShort(this.position);
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element total.');
            }
            param1.writeShort(this.total);
        };
        LoginQueueStatusMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_LoginQueueStatusMessage(param1);
        };
        LoginQueueStatusMessage.prototype.deserializeAs_LoginQueueStatusMessage = function (param1) {
            this.position = param1.readUnsignedShort();
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element of LoginQueueStatusMessage.position.');
            }
            this.total = param1.readUnsignedShort();
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element of LoginQueueStatusMessage.total.');
            }
        };
        LoginQueueStatusMessage.ID = 10;
        return LoginQueueStatusMessage;
    })(NetworkMessage);
    Protocol.LoginQueueStatusMessage = LoginQueueStatusMessage;
    var QueueStatusMessage = (function (_super) {
        __extends(QueueStatusMessage, _super);
        function QueueStatusMessage() {
            this.position = 0;
            this.total = 0;
            _super.call(this);
        }
        QueueStatusMessage.prototype.getMessageId = function () {
            return QueueStatusMessage.ID;
        };
        QueueStatusMessage.prototype.reset = function () {
            this.position = 0;
            this.total = 0;
        };
        QueueStatusMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        QueueStatusMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        QueueStatusMessage.prototype.serialize = function (param1) {
            this.serializeAs_QueueStatusMessage(param1);
        };
        QueueStatusMessage.prototype.serializeAs_QueueStatusMessage = function (param1) {
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element position.');
            }
            param1.writeShort(this.position);
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element total.');
            }
            param1.writeShort(this.total);
        };
        QueueStatusMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_QueueStatusMessage(param1);
        };
        QueueStatusMessage.prototype.deserializeAs_QueueStatusMessage = function (param1) {
            this.position = param1.readUnsignedShort();
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element of QueueStatusMessage.position.');
            }
            this.total = param1.readUnsignedShort();
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element of QueueStatusMessage.total.');
            }
        };
        QueueStatusMessage.ID = 6100;
        return QueueStatusMessage;
    })(NetworkMessage);
    Protocol.QueueStatusMessage = QueueStatusMessage;
    var TrustStatusMessage = (function (_super) {
        __extends(TrustStatusMessage, _super);
        function TrustStatusMessage() {
            this.trusted = false;
            this.certified = false;
            _super.call(this);
        }
        TrustStatusMessage.prototype.getMessageId = function () {
            return TrustStatusMessage.ID;
        };
        TrustStatusMessage.prototype.reset = function () {
            this.trusted = false;
            this.certified = false;
        };
        TrustStatusMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        TrustStatusMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        TrustStatusMessage.prototype.serialize = function (param1) {
            this.serializeAs_TrustStatusMessage(param1);
        };
        TrustStatusMessage.prototype.serializeAs_TrustStatusMessage = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.trusted);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.certified);
            param1.writeByte(_loc2_);
        };
        TrustStatusMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_TrustStatusMessage(param1);
        };
        TrustStatusMessage.prototype.deserializeAs_TrustStatusMessage = function (param1) {
            var _loc2_ = param1.readByte();
            this.trusted = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.certified = BooleanByteWrapper.getFlag(_loc2_, 1);
        };
        TrustStatusMessage.ID = 6267;
        return TrustStatusMessage;
    })(NetworkMessage);
    Protocol.TrustStatusMessage = TrustStatusMessage;
    var CheckFileMessage = (function (_super) {
        __extends(CheckFileMessage, _super);
        function CheckFileMessage() {
            this.filenameHash = '';
            this.type = 0;
            this.value = '';
            _super.call(this);
        }
        CheckFileMessage.prototype.getMessageId = function () {
            return CheckFileMessage.ID;
        };
        CheckFileMessage.prototype.reset = function () {
            this.filenameHash = '';
            this.type = 0;
            this.value = '';
        };
        CheckFileMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        CheckFileMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        CheckFileMessage.prototype.serialize = function (param1) {
            this.serializeAs_CheckFileMessage(param1);
        };
        CheckFileMessage.prototype.serializeAs_CheckFileMessage = function (param1) {
            param1.writeUTF(this.filenameHash);
            param1.writeByte(this.type);
            param1.writeUTF(this.value);
        };
        CheckFileMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_CheckFileMessage(param1);
        };
        CheckFileMessage.prototype.deserializeAs_CheckFileMessage = function (param1) {
            this.filenameHash = param1.readUTF();
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of CheckFileMessage.type.');
            }
            this.value = param1.readUTF();
        };
        CheckFileMessage.ID = 6156;
        return CheckFileMessage;
    })(NetworkMessage);
    Protocol.CheckFileMessage = CheckFileMessage;
    var CheckFileRequestMessage = (function (_super) {
        __extends(CheckFileRequestMessage, _super);
        function CheckFileRequestMessage() {
            this.filename = '';
            this.type = 0;
            _super.call(this);
        }
        CheckFileRequestMessage.prototype.getMessageId = function () {
            return CheckFileRequestMessage.ID;
        };
        CheckFileRequestMessage.prototype.reset = function () {
            this.filename = '';
            this.type = 0;
        };
        CheckFileRequestMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        CheckFileRequestMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        CheckFileRequestMessage.prototype.serialize = function (param1) {
            this.serializeAs_CheckFileRequestMessage(param1);
        };
        CheckFileRequestMessage.prototype.serializeAs_CheckFileRequestMessage = function (param1) {
            param1.writeUTF(this.filename);
            param1.writeByte(this.type);
        };
        CheckFileRequestMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_CheckFileRequestMessage(param1);
        };
        CheckFileRequestMessage.prototype.deserializeAs_CheckFileRequestMessage = function (param1) {
            this.filename = param1.readUTF();
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of CheckFileRequestMessage.type.');
            }
        };
        CheckFileRequestMessage.ID = 6154;
        return CheckFileRequestMessage;
    })(NetworkMessage);
    Protocol.CheckFileRequestMessage = CheckFileRequestMessage;
    var CheckIntegrityMessage = (function (_super) {
        __extends(CheckIntegrityMessage, _super);
        function CheckIntegrityMessage() {
            this.data = [];
            _super.call(this);
        }
        CheckIntegrityMessage.prototype.getMessageId = function () {
            return CheckIntegrityMessage.ID;
        };
        CheckIntegrityMessage.prototype.reset = function () {
            this.data = [];
        };
        CheckIntegrityMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        CheckIntegrityMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        CheckIntegrityMessage.prototype.serialize = function (param1) {
            this.serializeAs_CheckIntegrityMessage(param1);
        };
        CheckIntegrityMessage.prototype.serializeAs_CheckIntegrityMessage = function (param1) {
            param1.writeVarInt(this.data.length);
            var _loc2_ = 0;
            while (_loc2_ < this.data.length) {
                param1.writeByte(this.data[_loc2_]);
                _loc2_++;
            }
        };
        CheckIntegrityMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_CheckIntegrityMessage(param1);
        };
        CheckIntegrityMessage.prototype.deserializeAs_CheckIntegrityMessage = function (param1) {
            var _loc4_ = 0;
            var _loc2_ = param1.readVarInt();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.data.push(_loc4_);
                _loc3_++;
            }
        };
        CheckIntegrityMessage.ID = 6372;
        return CheckIntegrityMessage;
    })(NetworkMessage);
    Protocol.CheckIntegrityMessage = CheckIntegrityMessage;
    var ClientKeyMessage = (function (_super) {
        __extends(ClientKeyMessage, _super);
        function ClientKeyMessage() {
            this.key = '';
            _super.call(this);
        }
        ClientKeyMessage.prototype.getMessageId = function () {
            return ClientKeyMessage.ID;
        };
        ClientKeyMessage.prototype.reset = function () {
            this.key = '';
        };
        ClientKeyMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ClientKeyMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ClientKeyMessage.prototype.serialize = function (param1) {
            this.serializeAs_ClientKeyMessage(param1);
        };
        ClientKeyMessage.prototype.serializeAs_ClientKeyMessage = function (param1) {
            param1.writeUTF(this.key);
        };
        ClientKeyMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_ClientKeyMessage(param1);
        };
        ClientKeyMessage.prototype.deserializeAs_ClientKeyMessage = function (param1) {
            this.key = param1.readUTF();
        };
        ClientKeyMessage.ID = 5607;
        return ClientKeyMessage;
    })(NetworkMessage);
    Protocol.ClientKeyMessage = ClientKeyMessage;
    var RawDataMessage = (function (_super) {
        __extends(RawDataMessage, _super);
        function RawDataMessage() {
            this.content = new ByteArray();
            _super.call(this);
        }
        RawDataMessage.prototype.getMessageId = function () {
            return RawDataMessage.ID;
        };
        RawDataMessage.prototype.reset = function () {
            this.content = new ByteArray();
        };
        RawDataMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        RawDataMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        RawDataMessage.prototype.serialize = function (param1) {
            this.serializeAs_RawDataMessage(param1);
        };
        RawDataMessage.prototype.serializeAs_RawDataMessage = function (param1) {
            param1.writeVarInt(this.content.length);
            var _loc2_ = 0;
            while (_loc2_ < this.content.length) {
                param1.writeByte(this.content.getArray()[_loc2_]);
                _loc2_++;
            }
        };
        RawDataMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_RawDataMessage(param1);
        };
        RawDataMessage.prototype.deserializeAs_RawDataMessage = function (param1) {
            var _loc2_ = param1.readVarInt();
            param1.readBytes(this.content, 0, _loc2_);
        };
        RawDataMessage.ID = 6253;
        return RawDataMessage;
    })(NetworkMessage);
    Protocol.RawDataMessage = RawDataMessage;
    var SystemMessageDisplayMessage = (function (_super) {
        __extends(SystemMessageDisplayMessage, _super);
        function SystemMessageDisplayMessage() {
            this.hangUp = false;
            this.msgId = 0;
            this.parameters = [];
            _super.call(this);
        }
        SystemMessageDisplayMessage.prototype.getMessageId = function () {
            return SystemMessageDisplayMessage.ID;
        };
        SystemMessageDisplayMessage.prototype.reset = function () {
            this.hangUp = false;
            this.msgId = 0;
            this.parameters = [];
        };
        SystemMessageDisplayMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        SystemMessageDisplayMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        SystemMessageDisplayMessage.prototype.serialize = function (param1) {
            this.serializeAs_SystemMessageDisplayMessage(param1);
        };
        SystemMessageDisplayMessage.prototype.serializeAs_SystemMessageDisplayMessage = function (param1) {
            param1.writeBoolean(this.hangUp);
            if (this.msgId < 0) {
                throw new Error('Forbidden value (' + this.msgId + ') on element msgId.');
            }
            param1.writeVarShort(this.msgId);
            param1.writeShort(this.parameters.length);
            var _loc2_ = 0;
            while (_loc2_ < this.parameters.length) {
                param1.writeUTF(this.parameters[_loc2_]);
                _loc2_++;
            }
        };
        SystemMessageDisplayMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_SystemMessageDisplayMessage(param1);
        };
        SystemMessageDisplayMessage.prototype.deserializeAs_SystemMessageDisplayMessage = function (param1) {
            var _loc4_ = null;
            this.hangUp = param1.readBoolean();
            this.msgId = param1.readVarUhShort();
            if (this.msgId < 0) {
                throw new Error('Forbidden value (' + this.msgId + ') on element of SystemMessageDisplayMessage.msgId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUTF();
                this.parameters.push(_loc4_);
                _loc3_++;
            }
        };
        SystemMessageDisplayMessage.ID = 189;
        return SystemMessageDisplayMessage;
    })(NetworkMessage);
    Protocol.SystemMessageDisplayMessage = SystemMessageDisplayMessage;
    var DownloadCurrentSpeedMessage = (function (_super) {
        __extends(DownloadCurrentSpeedMessage, _super);
        function DownloadCurrentSpeedMessage() {
            this.downloadSpeed = 0;
            _super.call(this);
        }
        DownloadCurrentSpeedMessage.prototype.getMessageId = function () {
            return DownloadCurrentSpeedMessage.ID;
        };
        DownloadCurrentSpeedMessage.prototype.reset = function () {
            this.downloadSpeed = 0;
        };
        DownloadCurrentSpeedMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DownloadCurrentSpeedMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DownloadCurrentSpeedMessage.prototype.serialize = function (param1) {
            this.serializeAs_DownloadCurrentSpeedMessage(param1);
        };
        DownloadCurrentSpeedMessage.prototype.serializeAs_DownloadCurrentSpeedMessage = function (param1) {
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element downloadSpeed.');
            }
            param1.writeByte(this.downloadSpeed);
        };
        DownloadCurrentSpeedMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DownloadCurrentSpeedMessage(param1);
        };
        DownloadCurrentSpeedMessage.prototype.deserializeAs_DownloadCurrentSpeedMessage = function (param1) {
            this.downloadSpeed = param1.readByte();
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element of DownloadCurrentSpeedMessage.downloadSpeed.');
            }
        };
        DownloadCurrentSpeedMessage.ID = 1511;
        return DownloadCurrentSpeedMessage;
    })(NetworkMessage);
    Protocol.DownloadCurrentSpeedMessage = DownloadCurrentSpeedMessage;
    var DownloadErrorMessage = (function (_super) {
        __extends(DownloadErrorMessage, _super);
        function DownloadErrorMessage() {
            this.errorId = 0;
            this.message = '';
            this.helpUrl = '';
            _super.call(this);
        }
        DownloadErrorMessage.prototype.getMessageId = function () {
            return DownloadErrorMessage.ID;
        };
        DownloadErrorMessage.prototype.reset = function () {
            this.errorId = 0;
            this.message = '';
            this.helpUrl = '';
        };
        DownloadErrorMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DownloadErrorMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DownloadErrorMessage.prototype.serialize = function (param1) {
            this.serializeAs_DownloadErrorMessage(param1);
        };
        DownloadErrorMessage.prototype.serializeAs_DownloadErrorMessage = function (param1) {
            param1.writeByte(this.errorId);
            param1.writeUTF(this.message);
            param1.writeUTF(this.helpUrl);
        };
        DownloadErrorMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DownloadErrorMessage(param1);
        };
        DownloadErrorMessage.prototype.deserializeAs_DownloadErrorMessage = function (param1) {
            this.errorId = param1.readByte();
            if (this.errorId < 0) {
                throw new Error('Forbidden value (' + this.errorId + ') on element of DownloadErrorMessage.errorId.');
            }
            this.message = param1.readUTF();
            this.helpUrl = param1.readUTF();
        };
        DownloadErrorMessage.ID = 1513;
        return DownloadErrorMessage;
    })(NetworkMessage);
    Protocol.DownloadErrorMessage = DownloadErrorMessage;
    var DownloadGetCurrentSpeedRequestMessage = (function (_super) {
        __extends(DownloadGetCurrentSpeedRequestMessage, _super);
        function DownloadGetCurrentSpeedRequestMessage() {
            _super.call(this);
        }
        DownloadGetCurrentSpeedRequestMessage.prototype.getMessageId = function () {
            return DownloadGetCurrentSpeedRequestMessage.ID;
        };
        DownloadGetCurrentSpeedRequestMessage.prototype.reset = function () {
        };
        DownloadGetCurrentSpeedRequestMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DownloadGetCurrentSpeedRequestMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DownloadGetCurrentSpeedRequestMessage.prototype.serialize = function (param1) {
            this.serializeAs_DownloadGetCurrentSpeedRequestMessage(param1);
        };
        DownloadGetCurrentSpeedRequestMessage.prototype.serializeAs_DownloadGetCurrentSpeedRequestMessage = function (param1) {
        };
        DownloadGetCurrentSpeedRequestMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DownloadGetCurrentSpeedRequestMessage(param1);
        };
        DownloadGetCurrentSpeedRequestMessage.prototype.deserializeAs_DownloadGetCurrentSpeedRequestMessage = function (param1) {
        };
        DownloadGetCurrentSpeedRequestMessage.ID = 1510;
        return DownloadGetCurrentSpeedRequestMessage;
    })(NetworkMessage);
    Protocol.DownloadGetCurrentSpeedRequestMessage = DownloadGetCurrentSpeedRequestMessage;
    var DownloadPartMessage = (function (_super) {
        __extends(DownloadPartMessage, _super);
        function DownloadPartMessage() {
            this.id = '';
            _super.call(this);
        }
        DownloadPartMessage.prototype.getMessageId = function () {
            return DownloadPartMessage.ID;
        };
        DownloadPartMessage.prototype.reset = function () {
            this.id = '';
        };
        DownloadPartMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DownloadPartMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DownloadPartMessage.prototype.serialize = function (param1) {
            this.serializeAs_DownloadPartMessage(param1);
        };
        DownloadPartMessage.prototype.serializeAs_DownloadPartMessage = function (param1) {
            param1.writeUTF(this.id);
        };
        DownloadPartMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DownloadPartMessage(param1);
        };
        DownloadPartMessage.prototype.deserializeAs_DownloadPartMessage = function (param1) {
            this.id = param1.readUTF();
        };
        DownloadPartMessage.ID = 1503;
        return DownloadPartMessage;
    })(NetworkMessage);
    Protocol.DownloadPartMessage = DownloadPartMessage;
    var DownloadSetSpeedRequestMessage = (function (_super) {
        __extends(DownloadSetSpeedRequestMessage, _super);
        function DownloadSetSpeedRequestMessage() {
            this.downloadSpeed = 0;
            _super.call(this);
        }
        DownloadSetSpeedRequestMessage.prototype.getMessageId = function () {
            return DownloadSetSpeedRequestMessage.ID;
        };
        DownloadSetSpeedRequestMessage.prototype.reset = function () {
            this.downloadSpeed = 0;
        };
        DownloadSetSpeedRequestMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        DownloadSetSpeedRequestMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        DownloadSetSpeedRequestMessage.prototype.serialize = function (param1) {
            this.serializeAs_DownloadSetSpeedRequestMessage(param1);
        };
        DownloadSetSpeedRequestMessage.prototype.serializeAs_DownloadSetSpeedRequestMessage = function (param1) {
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element downloadSpeed.');
            }
            param1.writeByte(this.downloadSpeed);
        };
        DownloadSetSpeedRequestMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_DownloadSetSpeedRequestMessage(param1);
        };
        DownloadSetSpeedRequestMessage.prototype.deserializeAs_DownloadSetSpeedRequestMessage = function (param1) {
            this.downloadSpeed = param1.readByte();
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element of DownloadSetSpeedRequestMessage.downloadSpeed.');
            }
        };
        DownloadSetSpeedRequestMessage.ID = 1512;
        return DownloadSetSpeedRequestMessage;
    })(NetworkMessage);
    Protocol.DownloadSetSpeedRequestMessage = DownloadSetSpeedRequestMessage;
    var GetPartInfoMessage = (function (_super) {
        __extends(GetPartInfoMessage, _super);
        function GetPartInfoMessage() {
            this.id = '';
            _super.call(this);
        }
        GetPartInfoMessage.prototype.getMessageId = function () {
            return GetPartInfoMessage.ID;
        };
        GetPartInfoMessage.prototype.reset = function () {
            this.id = '';
        };
        GetPartInfoMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        GetPartInfoMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        GetPartInfoMessage.prototype.serialize = function (param1) {
            this.serializeAs_GetPartInfoMessage(param1);
        };
        GetPartInfoMessage.prototype.serializeAs_GetPartInfoMessage = function (param1) {
            param1.writeUTF(this.id);
        };
        GetPartInfoMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_GetPartInfoMessage(param1);
        };
        GetPartInfoMessage.prototype.deserializeAs_GetPartInfoMessage = function (param1) {
            this.id = param1.readUTF();
        };
        GetPartInfoMessage.ID = 1506;
        return GetPartInfoMessage;
    })(NetworkMessage);
    Protocol.GetPartInfoMessage = GetPartInfoMessage;
    var GetPartsListMessage = (function (_super) {
        __extends(GetPartsListMessage, _super);
        function GetPartsListMessage() {
            _super.call(this);
        }
        GetPartsListMessage.prototype.getMessageId = function () {
            return GetPartsListMessage.ID;
        };
        GetPartsListMessage.prototype.reset = function () {
        };
        GetPartsListMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        GetPartsListMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        GetPartsListMessage.prototype.serialize = function (param1) {
            this.serializeAs_GetPartsListMessage(param1);
        };
        GetPartsListMessage.prototype.serializeAs_GetPartsListMessage = function (param1) {
        };
        GetPartsListMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_GetPartsListMessage(param1);
        };
        GetPartsListMessage.prototype.deserializeAs_GetPartsListMessage = function (param1) {
        };
        GetPartsListMessage.ID = 1501;
        return GetPartsListMessage;
    })(NetworkMessage);
    Protocol.GetPartsListMessage = GetPartsListMessage;
    var PartInfoMessage = (function (_super) {
        __extends(PartInfoMessage, _super);
        function PartInfoMessage() {
            this.part = new ContentPart();
            this.installationPercent = 0;
            _super.call(this);
        }
        PartInfoMessage.prototype.getMessageId = function () {
            return PartInfoMessage.ID;
        };
        PartInfoMessage.prototype.reset = function () {
            this.part = new ContentPart();
            this.installationPercent = 0;
        };
        PartInfoMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        PartInfoMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        PartInfoMessage.prototype.serialize = function (param1) {
            this.serializeAs_PartInfoMessage(param1);
        };
        PartInfoMessage.prototype.serializeAs_PartInfoMessage = function (param1) {
            this.part.serializeAs_ContentPart(param1);
            param1.writeFloat(this.installationPercent);
        };
        PartInfoMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_PartInfoMessage(param1);
        };
        PartInfoMessage.prototype.deserializeAs_PartInfoMessage = function (param1) {
            this.part = new ContentPart();
            this.part.deserialize(param1);
            this.installationPercent = param1.readFloat();
        };
        PartInfoMessage.ID = 1508;
        return PartInfoMessage;
    })(NetworkMessage);
    Protocol.PartInfoMessage = PartInfoMessage;
    var PartsListMessage = (function (_super) {
        __extends(PartsListMessage, _super);
        function PartsListMessage() {
            this.parts = [];
            _super.call(this);
        }
        PartsListMessage.prototype.getMessageId = function () {
            return PartsListMessage.ID;
        };
        PartsListMessage.prototype.reset = function () {
            this.parts = [];
        };
        PartsListMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        PartsListMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        PartsListMessage.prototype.serialize = function (param1) {
            this.serializeAs_PartsListMessage(param1);
        };
        PartsListMessage.prototype.serializeAs_PartsListMessage = function (param1) {
            param1.writeShort(this.parts.length);
            var _loc2_ = 0;
            while (_loc2_ < this.parts.length) {
                (this.parts[_loc2_]).serializeAs_ContentPart(param1);
                _loc2_++;
            }
        };
        PartsListMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_PartsListMessage(param1);
        };
        PartsListMessage.prototype.deserializeAs_PartsListMessage = function (param1) {
            var _loc4_ = null;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new ContentPart();
                _loc4_.deserialize(param1);
                this.parts.push(_loc4_);
                _loc3_++;
            }
        };
        PartsListMessage.ID = 1502;
        return PartsListMessage;
    })(NetworkMessage);
    Protocol.PartsListMessage = PartsListMessage;
    var MailStatusMessage = (function (_super) {
        __extends(MailStatusMessage, _super);
        function MailStatusMessage() {
            this.unread = 0;
            this.total = 0;
            _super.call(this);
        }
        MailStatusMessage.prototype.getMessageId = function () {
            return MailStatusMessage.ID;
        };
        MailStatusMessage.prototype.reset = function () {
            this.unread = 0;
            this.total = 0;
        };
        MailStatusMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        MailStatusMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        MailStatusMessage.prototype.serialize = function (param1) {
            this.serializeAs_MailStatusMessage(param1);
        };
        MailStatusMessage.prototype.serializeAs_MailStatusMessage = function (param1) {
            if (this.unread < 0) {
                throw new Error('Forbidden value (' + this.unread + ') on element unread.');
            }
            param1.writeVarShort(this.unread);
            if (this.total < 0) {
                throw new Error('Forbidden value (' + this.total + ') on element total.');
            }
            param1.writeVarShort(this.total);
        };
        MailStatusMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_MailStatusMessage(param1);
        };
        MailStatusMessage.prototype.deserializeAs_MailStatusMessage = function (param1) {
            this.unread = param1.readVarUhShort();
            if (this.unread < 0) {
                throw new Error('Forbidden value (' + this.unread + ') on element of MailStatusMessage.unread.');
            }
            this.total = param1.readVarUhShort();
            if (this.total < 0) {
                throw new Error('Forbidden value (' + this.total + ') on element of MailStatusMessage.total.');
            }
        };
        MailStatusMessage.ID = 6275;
        return MailStatusMessage;
    })(NetworkMessage);
    Protocol.MailStatusMessage = MailStatusMessage;
    var NewMailMessage = (function (_super) {
        __extends(NewMailMessage, _super);
        function NewMailMessage() {
            this.sendersAccountId = [];
            _super.call(this);
        }
        NewMailMessage.prototype.getMessageId = function () {
            return NewMailMessage.ID;
        };
        NewMailMessage.prototype.reset = function () {
            this.sendersAccountId = [];
        };
        NewMailMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        NewMailMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        NewMailMessage.prototype.serialize = function (param1) {
            this.serializeAs_NewMailMessage(param1);
        };
        NewMailMessage.prototype.serializeAs_NewMailMessage = function (param1) {
            _super.prototype.serializeAs_MailStatusMessage.call(this, param1);
            param1.writeShort(this.sendersAccountId.length);
            var _loc2_ = 0;
            while (_loc2_ < this.sendersAccountId.length) {
                if (this.sendersAccountId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.sendersAccountId[_loc2_] + ') on element 1 (starting at 1) of sendersAccountId.');
                }
                param1.writeInt(this.sendersAccountId[_loc2_]);
                _loc2_++;
            }
        };
        NewMailMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_NewMailMessage(param1);
        };
        NewMailMessage.prototype.deserializeAs_NewMailMessage = function (param1) {
            var _loc4_ = 0;
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of sendersAccountId.');
                }
                this.sendersAccountId.push(_loc4_);
                _loc3_++;
            }
        };
        NewMailMessage.ID = 6292;
        return NewMailMessage;
    })(MailStatusMessage);
    Protocol.NewMailMessage = NewMailMessage;
    var KrosmasterAuthTokenErrorMessage = (function (_super) {
        __extends(KrosmasterAuthTokenErrorMessage, _super);
        function KrosmasterAuthTokenErrorMessage() {
            this.reason = 0;
            _super.call(this);
        }
        KrosmasterAuthTokenErrorMessage.prototype.getMessageId = function () {
            return KrosmasterAuthTokenErrorMessage.ID;
        };
        KrosmasterAuthTokenErrorMessage.prototype.reset = function () {
            this.reason = 0;
        };
        KrosmasterAuthTokenErrorMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterAuthTokenErrorMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterAuthTokenErrorMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterAuthTokenErrorMessage(param1);
        };
        KrosmasterAuthTokenErrorMessage.prototype.serializeAs_KrosmasterAuthTokenErrorMessage = function (param1) {
            param1.writeByte(this.reason);
        };
        KrosmasterAuthTokenErrorMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterAuthTokenErrorMessage(param1);
        };
        KrosmasterAuthTokenErrorMessage.prototype.deserializeAs_KrosmasterAuthTokenErrorMessage = function (param1) {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of KrosmasterAuthTokenErrorMessage.reason.');
            }
        };
        KrosmasterAuthTokenErrorMessage.ID = 6345;
        return KrosmasterAuthTokenErrorMessage;
    })(NetworkMessage);
    Protocol.KrosmasterAuthTokenErrorMessage = KrosmasterAuthTokenErrorMessage;
    var KrosmasterAuthTokenMessage = (function (_super) {
        __extends(KrosmasterAuthTokenMessage, _super);
        function KrosmasterAuthTokenMessage() {
            this.token = '';
            _super.call(this);
        }
        KrosmasterAuthTokenMessage.prototype.getMessageId = function () {
            return KrosmasterAuthTokenMessage.ID;
        };
        KrosmasterAuthTokenMessage.prototype.reset = function () {
            this.token = '';
        };
        KrosmasterAuthTokenMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterAuthTokenMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterAuthTokenMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterAuthTokenMessage(param1);
        };
        KrosmasterAuthTokenMessage.prototype.serializeAs_KrosmasterAuthTokenMessage = function (param1) {
            param1.writeUTF(this.token);
        };
        KrosmasterAuthTokenMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterAuthTokenMessage(param1);
        };
        KrosmasterAuthTokenMessage.prototype.deserializeAs_KrosmasterAuthTokenMessage = function (param1) {
            this.token = param1.readUTF();
        };
        KrosmasterAuthTokenMessage.ID = 6351;
        return KrosmasterAuthTokenMessage;
    })(NetworkMessage);
    Protocol.KrosmasterAuthTokenMessage = KrosmasterAuthTokenMessage;
    var KrosmasterAuthTokenRequestMessage = (function (_super) {
        __extends(KrosmasterAuthTokenRequestMessage, _super);
        function KrosmasterAuthTokenRequestMessage() {
            _super.call(this);
        }
        KrosmasterAuthTokenRequestMessage.prototype.getMessageId = function () {
            return KrosmasterAuthTokenRequestMessage.ID;
        };
        KrosmasterAuthTokenRequestMessage.prototype.reset = function () {
        };
        KrosmasterAuthTokenRequestMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterAuthTokenRequestMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterAuthTokenRequestMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterAuthTokenRequestMessage(param1);
        };
        KrosmasterAuthTokenRequestMessage.prototype.serializeAs_KrosmasterAuthTokenRequestMessage = function (param1) {
        };
        KrosmasterAuthTokenRequestMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterAuthTokenRequestMessage(param1);
        };
        KrosmasterAuthTokenRequestMessage.prototype.deserializeAs_KrosmasterAuthTokenRequestMessage = function (param1) {
        };
        KrosmasterAuthTokenRequestMessage.ID = 6346;
        return KrosmasterAuthTokenRequestMessage;
    })(NetworkMessage);
    Protocol.KrosmasterAuthTokenRequestMessage = KrosmasterAuthTokenRequestMessage;
    var KrosmasterInventoryErrorMessage = (function (_super) {
        __extends(KrosmasterInventoryErrorMessage, _super);
        function KrosmasterInventoryErrorMessage() {
            this.reason = 0;
            _super.call(this);
        }
        KrosmasterInventoryErrorMessage.prototype.getMessageId = function () {
            return KrosmasterInventoryErrorMessage.ID;
        };
        KrosmasterInventoryErrorMessage.prototype.reset = function () {
            this.reason = 0;
        };
        KrosmasterInventoryErrorMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterInventoryErrorMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterInventoryErrorMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterInventoryErrorMessage(param1);
        };
        KrosmasterInventoryErrorMessage.prototype.serializeAs_KrosmasterInventoryErrorMessage = function (param1) {
            param1.writeByte(this.reason);
        };
        KrosmasterInventoryErrorMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterInventoryErrorMessage(param1);
        };
        KrosmasterInventoryErrorMessage.prototype.deserializeAs_KrosmasterInventoryErrorMessage = function (param1) {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of KrosmasterInventoryErrorMessage.reason.');
            }
        };
        KrosmasterInventoryErrorMessage.ID = 6343;
        return KrosmasterInventoryErrorMessage;
    })(NetworkMessage);
    Protocol.KrosmasterInventoryErrorMessage = KrosmasterInventoryErrorMessage;
    var KrosmasterInventoryMessage = (function (_super) {
        __extends(KrosmasterInventoryMessage, _super);
        function KrosmasterInventoryMessage() {
            this.figures = [];
            _super.call(this);
        }
        KrosmasterInventoryMessage.prototype.getMessageId = function () {
            return KrosmasterInventoryMessage.ID;
        };
        KrosmasterInventoryMessage.prototype.reset = function () {
            this.figures = [];
        };
        KrosmasterInventoryMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterInventoryMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterInventoryMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterInventoryMessage(param1);
        };
        KrosmasterInventoryMessage.prototype.serializeAs_KrosmasterInventoryMessage = function (param1) {
            param1.writeShort(this.figures.length);
            var _loc2_ = 0;
            while (_loc2_ < this.figures.length) {
                (this.figures[_loc2_]).serializeAs_KrosmasterFigure(param1);
                _loc2_++;
            }
        };
        KrosmasterInventoryMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterInventoryMessage(param1);
        };
        KrosmasterInventoryMessage.prototype.deserializeAs_KrosmasterInventoryMessage = function (param1) {
            var _loc4_ = null;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new KrosmasterFigure();
                _loc4_.deserialize(param1);
                this.figures.push(_loc4_);
                _loc3_++;
            }
        };
        KrosmasterInventoryMessage.ID = 6350;
        return KrosmasterInventoryMessage;
    })(NetworkMessage);
    Protocol.KrosmasterInventoryMessage = KrosmasterInventoryMessage;
    var KrosmasterInventoryRequestMessage = (function (_super) {
        __extends(KrosmasterInventoryRequestMessage, _super);
        function KrosmasterInventoryRequestMessage() {
            _super.call(this);
        }
        KrosmasterInventoryRequestMessage.prototype.getMessageId = function () {
            return KrosmasterInventoryRequestMessage.ID;
        };
        KrosmasterInventoryRequestMessage.prototype.reset = function () {
        };
        KrosmasterInventoryRequestMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterInventoryRequestMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterInventoryRequestMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterInventoryRequestMessage(param1);
        };
        KrosmasterInventoryRequestMessage.prototype.serializeAs_KrosmasterInventoryRequestMessage = function (param1) {
        };
        KrosmasterInventoryRequestMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterInventoryRequestMessage(param1);
        };
        KrosmasterInventoryRequestMessage.prototype.deserializeAs_KrosmasterInventoryRequestMessage = function (param1) {
        };
        KrosmasterInventoryRequestMessage.ID = 6344;
        return KrosmasterInventoryRequestMessage;
    })(NetworkMessage);
    Protocol.KrosmasterInventoryRequestMessage = KrosmasterInventoryRequestMessage;
    var KrosmasterPlayingStatusMessage = (function (_super) {
        __extends(KrosmasterPlayingStatusMessage, _super);
        function KrosmasterPlayingStatusMessage() {
            this.playing = false;
            _super.call(this);
        }
        KrosmasterPlayingStatusMessage.prototype.getMessageId = function () {
            return KrosmasterPlayingStatusMessage.ID;
        };
        KrosmasterPlayingStatusMessage.prototype.reset = function () {
            this.playing = false;
        };
        KrosmasterPlayingStatusMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterPlayingStatusMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterPlayingStatusMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterPlayingStatusMessage(param1);
        };
        KrosmasterPlayingStatusMessage.prototype.serializeAs_KrosmasterPlayingStatusMessage = function (param1) {
            param1.writeBoolean(this.playing);
        };
        KrosmasterPlayingStatusMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterPlayingStatusMessage(param1);
        };
        KrosmasterPlayingStatusMessage.prototype.deserializeAs_KrosmasterPlayingStatusMessage = function (param1) {
            this.playing = param1.readBoolean();
        };
        KrosmasterPlayingStatusMessage.ID = 6347;
        return KrosmasterPlayingStatusMessage;
    })(NetworkMessage);
    Protocol.KrosmasterPlayingStatusMessage = KrosmasterPlayingStatusMessage;
    var KrosmasterTransferMessage = (function (_super) {
        __extends(KrosmasterTransferMessage, _super);
        function KrosmasterTransferMessage() {
            this.uid = '';
            this.failure = 0;
            _super.call(this);
        }
        KrosmasterTransferMessage.prototype.getMessageId = function () {
            return KrosmasterTransferMessage.ID;
        };
        KrosmasterTransferMessage.prototype.reset = function () {
            this.uid = '';
            this.failure = 0;
        };
        KrosmasterTransferMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterTransferMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterTransferMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterTransferMessage(param1);
        };
        KrosmasterTransferMessage.prototype.serializeAs_KrosmasterTransferMessage = function (param1) {
            param1.writeUTF(this.uid);
            param1.writeByte(this.failure);
        };
        KrosmasterTransferMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterTransferMessage(param1);
        };
        KrosmasterTransferMessage.prototype.deserializeAs_KrosmasterTransferMessage = function (param1) {
            this.uid = param1.readUTF();
            this.failure = param1.readByte();
            if (this.failure < 0) {
                throw new Error('Forbidden value (' + this.failure + ') on element of KrosmasterTransferMessage.failure.');
            }
        };
        KrosmasterTransferMessage.ID = 6348;
        return KrosmasterTransferMessage;
    })(NetworkMessage);
    Protocol.KrosmasterTransferMessage = KrosmasterTransferMessage;
    var KrosmasterTransferRequestMessage = (function (_super) {
        __extends(KrosmasterTransferRequestMessage, _super);
        function KrosmasterTransferRequestMessage() {
            this.uid = '';
            _super.call(this);
        }
        KrosmasterTransferRequestMessage.prototype.getMessageId = function () {
            return KrosmasterTransferRequestMessage.ID;
        };
        KrosmasterTransferRequestMessage.prototype.reset = function () {
            this.uid = '';
        };
        KrosmasterTransferRequestMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        KrosmasterTransferRequestMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        KrosmasterTransferRequestMessage.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterTransferRequestMessage(param1);
        };
        KrosmasterTransferRequestMessage.prototype.serializeAs_KrosmasterTransferRequestMessage = function (param1) {
            param1.writeUTF(this.uid);
        };
        KrosmasterTransferRequestMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterTransferRequestMessage(param1);
        };
        KrosmasterTransferRequestMessage.prototype.deserializeAs_KrosmasterTransferRequestMessage = function (param1) {
            this.uid = param1.readUTF();
        };
        KrosmasterTransferRequestMessage.ID = 6349;
        return KrosmasterTransferRequestMessage;
    })(NetworkMessage);
    Protocol.KrosmasterTransferRequestMessage = KrosmasterTransferRequestMessage;
    var ClientYouAreDrunkMessage = (function (_super) {
        __extends(ClientYouAreDrunkMessage, _super);
        function ClientYouAreDrunkMessage() {
            _super.call(this);
        }
        ClientYouAreDrunkMessage.prototype.getMessageId = function () {
            return ClientYouAreDrunkMessage.ID;
        };
        ClientYouAreDrunkMessage.prototype.reset = function () {
        };
        ClientYouAreDrunkMessage.prototype.pack = function (param1) {
            var loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        };
        ClientYouAreDrunkMessage.prototype.unpack = function (param1, param2) {
            this.deserialize(param1);
        };
        ClientYouAreDrunkMessage.prototype.serialize = function (param1) {
            this.serializeAs_ClientYouAreDrunkMessage(param1);
        };
        ClientYouAreDrunkMessage.prototype.serializeAs_ClientYouAreDrunkMessage = function (param1) {
            _super.prototype.serializeAs_DebugInClientMessage.call(this, param1);
        };
        ClientYouAreDrunkMessage.prototype.deserialize = function (param1) {
            this.deserializeAs_ClientYouAreDrunkMessage(param1);
        };
        ClientYouAreDrunkMessage.prototype.deserializeAs_ClientYouAreDrunkMessage = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        ClientYouAreDrunkMessage.ID = 6594;
        return ClientYouAreDrunkMessage;
    })(DebugInClientMessage);
    Protocol.ClientYouAreDrunkMessage = ClientYouAreDrunkMessage;
    var StatisticData = (function () {
        function StatisticData() {
            this.actionId = 0;
        }
        StatisticData.prototype.getTypeId = function () {
            return StatisticData.ID;
        };
        StatisticData.prototype.reset = function () {
            this.actionId = 0;
        };
        StatisticData.prototype.serialize = function (param1) {
            this.serializeAs_StatisticData(param1);
        };
        StatisticData.prototype.serializeAs_StatisticData = function (param1) {
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
            }
            param1.writeVarShort(this.actionId);
        };
        StatisticData.prototype.deserialize = function (param1) {
            this.deserializeAs_StatisticData(param1);
        };
        StatisticData.prototype.deserializeAs_StatisticData = function (param1) {
            this.actionId = param1.readVarUhShort();
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element of StatisticData.actionId.');
            }
        };
        StatisticData.ID = 484;
        return StatisticData;
    })();
    Protocol.StatisticData = StatisticData;
    var StatisticDataBoolean = (function (_super) {
        __extends(StatisticDataBoolean, _super);
        function StatisticDataBoolean() {
            this.value = false;
            _super.call(this);
        }
        StatisticDataBoolean.prototype.getTypeId = function () {
            return StatisticDataBoolean.ID;
        };
        StatisticDataBoolean.prototype.reset = function () {
            this.value = false;
        };
        StatisticDataBoolean.prototype.serialize = function (param1) {
            this.serializeAs_StatisticDataBoolean(param1);
        };
        StatisticDataBoolean.prototype.serializeAs_StatisticDataBoolean = function (param1) {
            _super.prototype.serializeAs_StatisticData.call(this, param1);
            param1.writeBoolean(this.value);
        };
        StatisticDataBoolean.prototype.deserialize = function (param1) {
            this.deserializeAs_StatisticDataBoolean(param1);
        };
        StatisticDataBoolean.prototype.deserializeAs_StatisticDataBoolean = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readBoolean();
        };
        StatisticDataBoolean.ID = 482;
        return StatisticDataBoolean;
    })(StatisticData);
    Protocol.StatisticDataBoolean = StatisticDataBoolean;
    var StatisticDataByte = (function (_super) {
        __extends(StatisticDataByte, _super);
        function StatisticDataByte() {
            this.value = 0;
            _super.call(this);
        }
        StatisticDataByte.prototype.getTypeId = function () {
            return StatisticDataByte.ID;
        };
        StatisticDataByte.prototype.reset = function () {
            this.value = 0;
        };
        StatisticDataByte.prototype.serialize = function (param1) {
            this.serializeAs_StatisticDataByte(param1);
        };
        StatisticDataByte.prototype.serializeAs_StatisticDataByte = function (param1) {
            _super.prototype.serializeAs_StatisticData.call(this, param1);
            param1.writeByte(this.value);
        };
        StatisticDataByte.prototype.deserialize = function (param1) {
            this.deserializeAs_StatisticDataByte(param1);
        };
        StatisticDataByte.prototype.deserializeAs_StatisticDataByte = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readByte();
        };
        StatisticDataByte.ID = 486;
        return StatisticDataByte;
    })(StatisticData);
    Protocol.StatisticDataByte = StatisticDataByte;
    var StatisticDataInt = (function (_super) {
        __extends(StatisticDataInt, _super);
        function StatisticDataInt() {
            this.value = 0;
            _super.call(this);
        }
        StatisticDataInt.prototype.getTypeId = function () {
            return StatisticDataInt.ID;
        };
        StatisticDataInt.prototype.reset = function () {
            this.value = 0;
        };
        StatisticDataInt.prototype.serialize = function (param1) {
            this.serializeAs_StatisticDataInt(param1);
        };
        StatisticDataInt.prototype.serializeAs_StatisticDataInt = function (param1) {
            _super.prototype.serializeAs_StatisticData.call(this, param1);
            param1.writeInt(this.value);
        };
        StatisticDataInt.prototype.deserialize = function (param1) {
            this.deserializeAs_StatisticDataInt(param1);
        };
        StatisticDataInt.prototype.deserializeAs_StatisticDataInt = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readInt();
        };
        StatisticDataInt.ID = 485;
        return StatisticDataInt;
    })(StatisticData);
    Protocol.StatisticDataInt = StatisticDataInt;
    var StatisticDataShort = (function (_super) {
        __extends(StatisticDataShort, _super);
        function StatisticDataShort() {
            this.value = 0;
            _super.call(this);
        }
        StatisticDataShort.prototype.getTypeId = function () {
            return StatisticDataShort.ID;
        };
        StatisticDataShort.prototype.reset = function () {
            this.value = 0;
        };
        StatisticDataShort.prototype.serialize = function (param1) {
            this.serializeAs_StatisticDataShort(param1);
        };
        StatisticDataShort.prototype.serializeAs_StatisticDataShort = function (param1) {
            _super.prototype.serializeAs_StatisticData.call(this, param1);
            param1.writeShort(this.value);
        };
        StatisticDataShort.prototype.deserialize = function (param1) {
            this.deserializeAs_StatisticDataShort(param1);
        };
        StatisticDataShort.prototype.deserializeAs_StatisticDataShort = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readShort();
        };
        StatisticDataShort.ID = 488;
        return StatisticDataShort;
    })(StatisticData);
    Protocol.StatisticDataShort = StatisticDataShort;
    var StatisticDataString = (function (_super) {
        __extends(StatisticDataString, _super);
        function StatisticDataString() {
            this.value = '';
            _super.call(this);
        }
        StatisticDataString.prototype.getTypeId = function () {
            return StatisticDataString.ID;
        };
        StatisticDataString.prototype.reset = function () {
            this.value = '';
        };
        StatisticDataString.prototype.serialize = function (param1) {
            this.serializeAs_StatisticDataString(param1);
        };
        StatisticDataString.prototype.serializeAs_StatisticDataString = function (param1) {
            _super.prototype.serializeAs_StatisticData.call(this, param1);
            param1.writeUTF(this.value);
        };
        StatisticDataString.prototype.deserialize = function (param1) {
            this.deserializeAs_StatisticDataString(param1);
        };
        StatisticDataString.prototype.deserializeAs_StatisticDataString = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readUTF();
        };
        StatisticDataString.ID = 487;
        return StatisticDataString;
    })(StatisticData);
    Protocol.StatisticDataString = StatisticDataString;
    var GameServerInformations = (function () {
        function GameServerInformations() {
            this.id = 0;
            this.type = -1;
            this.status = 1;
            this.completion = 0;
            this.isSelectable = false;
            this.charactersCount = 0;
            this.charactersSlots = 0;
            this.date = 0;
        }
        GameServerInformations.prototype.getTypeId = function () {
            return GameServerInformations.ID;
        };
        GameServerInformations.prototype.reset = function () {
            this.id = 0;
            this.type = -1;
            this.status = 1;
            this.completion = 0;
            this.isSelectable = false;
            this.charactersCount = 0;
            this.charactersSlots = 0;
            this.date = 0;
        };
        GameServerInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameServerInformations(param1);
        };
        GameServerInformations.prototype.serializeAs_GameServerInformations = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);
            param1.writeByte(this.type);
            param1.writeByte(this.status);
            param1.writeByte(this.completion);
            param1.writeBoolean(this.isSelectable);
            if (this.charactersCount < 0) {
                throw new Error('Forbidden value (' + this.charactersCount + ') on element charactersCount.');
            }
            param1.writeByte(this.charactersCount);
            if (this.charactersSlots < 0) {
                throw new Error('Forbidden value (' + this.charactersSlots + ') on element charactersSlots.');
            }
            param1.writeByte(this.charactersSlots);
            if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.date + ') on element date.');
            }
            param1.writeDouble(this.date);
        };
        GameServerInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameServerInformations(param1);
        };
        GameServerInformations.prototype.deserializeAs_GameServerInformations = function (param1) {
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of GameServerInformations.id.');
            }
            this.type = param1.readByte();
            this.status = param1.readByte();
            if (this.status < 0) {
                throw new Error('Forbidden value (' + this.status + ') on element of GameServerInformations.status.');
            }
            this.completion = param1.readByte();
            if (this.completion < 0) {
                throw new Error('Forbidden value (' + this.completion + ') on element of GameServerInformations.completion.');
            }
            this.isSelectable = param1.readBoolean();
            this.charactersCount = param1.readByte();
            if (this.charactersCount < 0) {
                throw new Error('Forbidden value (' + this.charactersCount + ') on element of GameServerInformations.charactersCount.');
            }
            this.charactersSlots = param1.readByte();
            if (this.charactersSlots < 0) {
                throw new Error('Forbidden value (' + this.charactersSlots + ') on element of GameServerInformations.charactersSlots.');
            }
            this.date = param1.readDouble();
            if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.date + ') on element of GameServerInformations.date.');
            }
        };
        GameServerInformations.ID = 25;
        return GameServerInformations;
    })();
    Protocol.GameServerInformations = GameServerInformations;
    var Achievement = (function () {
        function Achievement() {
            this.id = 0;
            this.finishedObjective = [];
            this.startedObjectives = [];
        }
        Achievement.prototype.getTypeId = function () {
            return Achievement.ID;
        };
        Achievement.prototype.reset = function () {
            this.id = 0;
            this.finishedObjective = [];
            this.startedObjectives = [];
        };
        Achievement.prototype.serialize = function (param1) {
            this.serializeAs_Achievement(param1);
        };
        Achievement.prototype.serializeAs_Achievement = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);
            param1.writeShort(this.finishedObjective.length);
            var _loc2_ = 0;
            while (_loc2_ < this.finishedObjective.length) {
                (this.finishedObjective[_loc2_]).serializeAs_AchievementObjective(param1);
                _loc2_++;
            }
            param1.writeShort(this.startedObjectives.length);
            var _loc3_ = 0;
            while (_loc3_ < this.startedObjectives.length) {
                (this.startedObjectives[_loc3_]).serializeAs_AchievementStartedObjective(param1);
                _loc3_++;
            }
        };
        Achievement.prototype.deserialize = function (param1) {
            this.deserializeAs_Achievement(param1);
        };
        Achievement.prototype.deserializeAs_Achievement = function (param1) {
            var _loc6_ = null;
            var _loc7_ = null;
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of Achievement.id.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = new AchievementObjective();
                _loc6_.deserialize(param1);
                this.finishedObjective.push(_loc6_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = new AchievementStartedObjective();
                _loc7_.deserialize(param1);
                this.startedObjectives.push(_loc7_);
                _loc5_++;
            }
        };
        Achievement.ID = 363;
        return Achievement;
    })();
    Protocol.Achievement = Achievement;
    var AchievementObjective = (function () {
        function AchievementObjective() {
            this.id = 0;
            this.maxValue = 0;
        }
        AchievementObjective.prototype.getTypeId = function () {
            return AchievementObjective.ID;
        };
        AchievementObjective.prototype.reset = function () {
            this.id = 0;
            this.maxValue = 0;
        };
        AchievementObjective.prototype.serialize = function (param1) {
            this.serializeAs_AchievementObjective(param1);
        };
        AchievementObjective.prototype.serializeAs_AchievementObjective = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarInt(this.id);
            if (this.maxValue < 0) {
                throw new Error('Forbidden value (' + this.maxValue + ') on element maxValue.');
            }
            param1.writeVarShort(this.maxValue);
        };
        AchievementObjective.prototype.deserialize = function (param1) {
            this.deserializeAs_AchievementObjective(param1);
        };
        AchievementObjective.prototype.deserializeAs_AchievementObjective = function (param1) {
            this.id = param1.readVarUhInt();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of AchievementObjective.id.');
            }
            this.maxValue = param1.readVarUhShort();
            if (this.maxValue < 0) {
                throw new Error('Forbidden value (' + this.maxValue + ') on element of AchievementObjective.maxValue.');
            }
        };
        AchievementObjective.ID = 404;
        return AchievementObjective;
    })();
    Protocol.AchievementObjective = AchievementObjective;
    var AchievementRewardable = (function () {
        function AchievementRewardable() {
            this.id = 0;
            this.finishedlevel = 0;
        }
        AchievementRewardable.prototype.getTypeId = function () {
            return AchievementRewardable.ID;
        };
        AchievementRewardable.prototype.reset = function () {
            this.id = 0;
            this.finishedlevel = 0;
        };
        AchievementRewardable.prototype.serialize = function (param1) {
            this.serializeAs_AchievementRewardable(param1);
        };
        AchievementRewardable.prototype.serializeAs_AchievementRewardable = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);
            if (this.finishedlevel < 0 || this.finishedlevel > 200) {
                throw new Error('Forbidden value (' + this.finishedlevel + ') on element finishedlevel.');
            }
            param1.writeByte(this.finishedlevel);
        };
        AchievementRewardable.prototype.deserialize = function (param1) {
            this.deserializeAs_AchievementRewardable(param1);
        };
        AchievementRewardable.prototype.deserializeAs_AchievementRewardable = function (param1) {
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of AchievementRewardable.id.');
            }
            this.finishedlevel = param1.readUnsignedByte();
            if (this.finishedlevel < 0 || this.finishedlevel > 200) {
                throw new Error('Forbidden value (' + this.finishedlevel + ') on element of AchievementRewardable.finishedlevel.');
            }
        };
        AchievementRewardable.ID = 412;
        return AchievementRewardable;
    })();
    Protocol.AchievementRewardable = AchievementRewardable;
    var AchievementStartedObjective = (function (_super) {
        __extends(AchievementStartedObjective, _super);
        function AchievementStartedObjective() {
            this.value = 0;
            _super.call(this);
        }
        AchievementStartedObjective.prototype.getTypeId = function () {
            return AchievementStartedObjective.ID;
        };
        AchievementStartedObjective.prototype.reset = function () {
            this.value = 0;
        };
        AchievementStartedObjective.prototype.serialize = function (param1) {
            this.serializeAs_AchievementStartedObjective(param1);
        };
        AchievementStartedObjective.prototype.serializeAs_AchievementStartedObjective = function (param1) {
            _super.prototype.serializeAs_AchievementObjective.call(this, param1);
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element value.');
            }
            param1.writeVarShort(this.value);
        };
        AchievementStartedObjective.prototype.deserialize = function (param1) {
            this.deserializeAs_AchievementStartedObjective(param1);
        };
        AchievementStartedObjective.prototype.deserializeAs_AchievementStartedObjective = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readVarUhShort();
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element of AchievementStartedObjective.value.');
            }
        };
        AchievementStartedObjective.ID = 402;
        return AchievementStartedObjective;
    })(AchievementObjective);
    Protocol.AchievementStartedObjective = AchievementStartedObjective;
    var FightDispellableEffectExtendedInformations = (function () {
        function FightDispellableEffectExtendedInformations() {
            this.actionId = 0;
            this.sourceId = 0;
            this.effect = new AbstractFightDispellableEffect();
        }
        FightDispellableEffectExtendedInformations.prototype.getTypeId = function () {
            return FightDispellableEffectExtendedInformations.ID;
        };
        FightDispellableEffectExtendedInformations.prototype.reset = function () {
            this.actionId = 0;
            this.sourceId = 0;
            this.effect = new AbstractFightDispellableEffect();
        };
        FightDispellableEffectExtendedInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightDispellableEffectExtendedInformations(param1);
        };
        FightDispellableEffectExtendedInformations.prototype.serializeAs_FightDispellableEffectExtendedInformations = function (param1) {
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
            }
            param1.writeVarShort(this.actionId);
            param1.writeInt(this.sourceId);
            param1.writeShort(this.effect.getTypeId());
            this.effect.serialize(param1);
        };
        FightDispellableEffectExtendedInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightDispellableEffectExtendedInformations(param1);
        };
        FightDispellableEffectExtendedInformations.prototype.deserializeAs_FightDispellableEffectExtendedInformations = function (param1) {
            this.actionId = param1.readVarUhShort();
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element of FightDispellableEffectExtendedInformations.actionId.');
            }
            this.sourceId = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
            this.effect.deserialize(param1);
        };
        FightDispellableEffectExtendedInformations.ID = 208;
        return FightDispellableEffectExtendedInformations;
    })();
    Protocol.FightDispellableEffectExtendedInformations = FightDispellableEffectExtendedInformations;
    var AbstractFightDispellableEffect = (function () {
        function AbstractFightDispellableEffect() {
            this.uid = 0;
            this.targetId = 0;
            this.turnDuration = 0;
            this.dispelable = 1;
            this.spellId = 0;
            this.effectId = 0;
            this.parentBoostUid = 0;
        }
        AbstractFightDispellableEffect.prototype.getTypeId = function () {
            return AbstractFightDispellableEffect.ID;
        };
        AbstractFightDispellableEffect.prototype.reset = function () {
            this.uid = 0;
            this.targetId = 0;
            this.turnDuration = 0;
            this.dispelable = 1;
            this.spellId = 0;
            this.effectId = 0;
            this.parentBoostUid = 0;
        };
        AbstractFightDispellableEffect.prototype.serialize = function (param1) {
            this.serializeAs_AbstractFightDispellableEffect(param1);
        };
        AbstractFightDispellableEffect.prototype.serializeAs_AbstractFightDispellableEffect = function (param1) {
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element uid.');
            }
            param1.writeVarInt(this.uid);
            param1.writeInt(this.targetId);
            param1.writeShort(this.turnDuration);
            param1.writeByte(this.dispelable);
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
            }
            param1.writeVarShort(this.spellId);
            if (this.effectId < 0) {
                throw new Error('Forbidden value (' + this.effectId + ') on element effectId.');
            }
            param1.writeVarInt(this.effectId);
            if (this.parentBoostUid < 0) {
                throw new Error('Forbidden value (' + this.parentBoostUid + ') on element parentBoostUid.');
            }
            param1.writeVarInt(this.parentBoostUid);
        };
        AbstractFightDispellableEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_AbstractFightDispellableEffect(param1);
        };
        AbstractFightDispellableEffect.prototype.deserializeAs_AbstractFightDispellableEffect = function (param1) {
            this.uid = param1.readVarUhInt();
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element of AbstractFightDispellableEffect.uid.');
            }
            this.targetId = param1.readInt();
            this.turnDuration = param1.readShort();
            this.dispelable = param1.readByte();
            if (this.dispelable < 0) {
                throw new Error('Forbidden value (' + this.dispelable + ') on element of AbstractFightDispellableEffect.dispelable.');
            }
            this.spellId = param1.readVarUhShort();
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element of AbstractFightDispellableEffect.spellId.');
            }
            this.effectId = param1.readVarUhInt();
            if (this.effectId < 0) {
                throw new Error('Forbidden value (' + this.effectId + ') on element of AbstractFightDispellableEffect.effectId.');
            }
            this.parentBoostUid = param1.readVarUhInt();
            if (this.parentBoostUid < 0) {
                throw new Error('Forbidden value (' + this.parentBoostUid + ') on element of AbstractFightDispellableEffect.parentBoostUid.');
            }
        };
        AbstractFightDispellableEffect.ID = 206;
        return AbstractFightDispellableEffect;
    })();
    Protocol.AbstractFightDispellableEffect = AbstractFightDispellableEffect;
    var FightTemporaryBoostEffect = (function (_super) {
        __extends(FightTemporaryBoostEffect, _super);
        function FightTemporaryBoostEffect() {
            this.delta = 0;
            _super.call(this);
        }
        FightTemporaryBoostEffect.prototype.getTypeId = function () {
            return FightTemporaryBoostEffect.ID;
        };
        FightTemporaryBoostEffect.prototype.reset = function () {
            this.delta = 0;
        };
        FightTemporaryBoostEffect.prototype.serialize = function (param1) {
            this.serializeAs_FightTemporaryBoostEffect(param1);
        };
        FightTemporaryBoostEffect.prototype.serializeAs_FightTemporaryBoostEffect = function (param1) {
            _super.prototype.serializeAs_AbstractFightDispellableEffect.call(this, param1);
            param1.writeShort(this.delta);
        };
        FightTemporaryBoostEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTemporaryBoostEffect(param1);
        };
        FightTemporaryBoostEffect.prototype.deserializeAs_FightTemporaryBoostEffect = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.delta = param1.readShort();
        };
        FightTemporaryBoostEffect.ID = 209;
        return FightTemporaryBoostEffect;
    })(AbstractFightDispellableEffect);
    Protocol.FightTemporaryBoostEffect = FightTemporaryBoostEffect;
    var FightTemporaryBoostStateEffect = (function (_super) {
        __extends(FightTemporaryBoostStateEffect, _super);
        function FightTemporaryBoostStateEffect() {
            this.stateId = 0;
            _super.call(this);
        }
        FightTemporaryBoostStateEffect.prototype.getTypeId = function () {
            return FightTemporaryBoostStateEffect.ID;
        };
        FightTemporaryBoostStateEffect.prototype.reset = function () {
            this.stateId = 0;
        };
        FightTemporaryBoostStateEffect.prototype.serialize = function (param1) {
            this.serializeAs_FightTemporaryBoostStateEffect(param1);
        };
        FightTemporaryBoostStateEffect.prototype.serializeAs_FightTemporaryBoostStateEffect = function (param1) {
            _super.prototype.serializeAs_FightTemporaryBoostEffect.call(this, param1);
            param1.writeShort(this.stateId);
        };
        FightTemporaryBoostStateEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTemporaryBoostStateEffect(param1);
        };
        FightTemporaryBoostStateEffect.prototype.deserializeAs_FightTemporaryBoostStateEffect = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.stateId = param1.readShort();
        };
        FightTemporaryBoostStateEffect.ID = 214;
        return FightTemporaryBoostStateEffect;
    })(FightTemporaryBoostEffect);
    Protocol.FightTemporaryBoostStateEffect = FightTemporaryBoostStateEffect;
    var FightTemporaryBoostWeaponDamagesEffect = (function (_super) {
        __extends(FightTemporaryBoostWeaponDamagesEffect, _super);
        function FightTemporaryBoostWeaponDamagesEffect() {
            this.weaponTypeId = 0;
            _super.call(this);
        }
        FightTemporaryBoostWeaponDamagesEffect.prototype.getTypeId = function () {
            return FightTemporaryBoostWeaponDamagesEffect.ID;
        };
        FightTemporaryBoostWeaponDamagesEffect.prototype.reset = function () {
            this.weaponTypeId = 0;
        };
        FightTemporaryBoostWeaponDamagesEffect.prototype.serialize = function (param1) {
            this.serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
        };
        FightTemporaryBoostWeaponDamagesEffect.prototype.serializeAs_FightTemporaryBoostWeaponDamagesEffect = function (param1) {
            _super.prototype.serializeAs_FightTemporaryBoostEffect.call(this, param1);
            param1.writeShort(this.weaponTypeId);
        };
        FightTemporaryBoostWeaponDamagesEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
        };
        FightTemporaryBoostWeaponDamagesEffect.prototype.deserializeAs_FightTemporaryBoostWeaponDamagesEffect = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.weaponTypeId = param1.readShort();
        };
        FightTemporaryBoostWeaponDamagesEffect.ID = 211;
        return FightTemporaryBoostWeaponDamagesEffect;
    })(FightTemporaryBoostEffect);
    Protocol.FightTemporaryBoostWeaponDamagesEffect = FightTemporaryBoostWeaponDamagesEffect;
    var FightTemporarySpellBoostEffect = (function (_super) {
        __extends(FightTemporarySpellBoostEffect, _super);
        function FightTemporarySpellBoostEffect() {
            this.boostedSpellId = 0;
            _super.call(this);
        }
        FightTemporarySpellBoostEffect.prototype.getTypeId = function () {
            return FightTemporarySpellBoostEffect.ID;
        };
        FightTemporarySpellBoostEffect.prototype.reset = function () {
            this.boostedSpellId = 0;
        };
        FightTemporarySpellBoostEffect.prototype.serialize = function (param1) {
            this.serializeAs_FightTemporarySpellBoostEffect(param1);
        };
        FightTemporarySpellBoostEffect.prototype.serializeAs_FightTemporarySpellBoostEffect = function (param1) {
            _super.prototype.serializeAs_FightTemporaryBoostEffect.call(this, param1);
            if (this.boostedSpellId < 0) {
                throw new Error('Forbidden value (' + this.boostedSpellId + ') on element boostedSpellId.');
            }
            param1.writeVarShort(this.boostedSpellId);
        };
        FightTemporarySpellBoostEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTemporarySpellBoostEffect(param1);
        };
        FightTemporarySpellBoostEffect.prototype.deserializeAs_FightTemporarySpellBoostEffect = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.boostedSpellId = param1.readVarUhShort();
            if (this.boostedSpellId < 0) {
                throw new Error('Forbidden value (' + this.boostedSpellId + ') on element of FightTemporarySpellBoostEffect.boostedSpellId.');
            }
        };
        FightTemporarySpellBoostEffect.ID = 207;
        return FightTemporarySpellBoostEffect;
    })(FightTemporaryBoostEffect);
    Protocol.FightTemporarySpellBoostEffect = FightTemporarySpellBoostEffect;
    var FightTemporarySpellImmunityEffect = (function (_super) {
        __extends(FightTemporarySpellImmunityEffect, _super);
        function FightTemporarySpellImmunityEffect() {
            this.immuneSpellId = 0;
            _super.call(this);
        }
        FightTemporarySpellImmunityEffect.prototype.getTypeId = function () {
            return FightTemporarySpellImmunityEffect.ID;
        };
        FightTemporarySpellImmunityEffect.prototype.reset = function () {
            this.immuneSpellId = 0;
        };
        FightTemporarySpellImmunityEffect.prototype.serialize = function (param1) {
            this.serializeAs_FightTemporarySpellImmunityEffect(param1);
        };
        FightTemporarySpellImmunityEffect.prototype.serializeAs_FightTemporarySpellImmunityEffect = function (param1) {
            _super.prototype.serializeAs_AbstractFightDispellableEffect.call(this, param1);
            param1.writeInt(this.immuneSpellId);
        };
        FightTemporarySpellImmunityEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTemporarySpellImmunityEffect(param1);
        };
        FightTemporarySpellImmunityEffect.prototype.deserializeAs_FightTemporarySpellImmunityEffect = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.immuneSpellId = param1.readInt();
        };
        FightTemporarySpellImmunityEffect.ID = 366;
        return FightTemporarySpellImmunityEffect;
    })(AbstractFightDispellableEffect);
    Protocol.FightTemporarySpellImmunityEffect = FightTemporarySpellImmunityEffect;
    var FightTriggeredEffect = (function (_super) {
        __extends(FightTriggeredEffect, _super);
        function FightTriggeredEffect() {
            this.param1 = 0;
            this.param2 = 0;
            this.param3 = 0;
            this.delay = 0;
            _super.call(this);
        }
        FightTriggeredEffect.prototype.getTypeId = function () {
            return FightTriggeredEffect.ID;
        };
        FightTriggeredEffect.prototype.reset = function () {
            this.param1 = 0;
            this.param2 = 0;
            this.param3 = 0;
            this.delay = 0;
        };
        FightTriggeredEffect.prototype.serialize = function (param1) {
            this.serializeAs_FightTriggeredEffect(param1);
        };
        FightTriggeredEffect.prototype.serializeAs_FightTriggeredEffect = function (param1) {
            _super.prototype.serializeAs_AbstractFightDispellableEffect.call(this, param1);
            param1.writeInt(this.param1);
            param1.writeInt(this.param2);
            param1.writeInt(this.param3);
            param1.writeShort(this.delay);
        };
        FightTriggeredEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTriggeredEffect(param1);
        };
        FightTriggeredEffect.prototype.deserializeAs_FightTriggeredEffect = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.param1 = param1.readInt();
            this.param2 = param1.readInt();
            this.param3 = param1.readInt();
            this.delay = param1.readShort();
        };
        FightTriggeredEffect.ID = 210;
        return FightTriggeredEffect;
    })(AbstractFightDispellableEffect);
    Protocol.FightTriggeredEffect = FightTriggeredEffect;
    var GameActionMark = (function () {
        function GameActionMark() {
            this.markAuthorId = 0;
            this.markTeamId = 2;
            this.markSpellId = 0;
            this.markSpellLevel = 0;
            this.markId = 0;
            this.markType = 0;
            this.markimpactCell = 0;
            this.cells = [];
            this.active = false;
        }
        GameActionMark.prototype.getTypeId = function () {
            return GameActionMark.ID;
        };
        GameActionMark.prototype.reset = function () {
            this.markAuthorId = 0;
            this.markTeamId = 2;
            this.markSpellId = 0;
            this.markSpellLevel = 0;
            this.markId = 0;
            this.markType = 0;
            this.markimpactCell = 0;
            this.cells = [];
            this.active = false;
        };
        GameActionMark.prototype.serialize = function (param1) {
            this.serializeAs_GameActionMark(param1);
        };
        GameActionMark.prototype.serializeAs_GameActionMark = function (param1) {
            param1.writeInt(this.markAuthorId);
            param1.writeByte(this.markTeamId);
            if (this.markSpellId < 0) {
                throw new Error('Forbidden value (' + this.markSpellId + ') on element markSpellId.');
            }
            param1.writeInt(this.markSpellId);
            if (this.markSpellLevel < 1 || this.markSpellLevel > 6) {
                throw new Error('Forbidden value (' + this.markSpellLevel + ') on element markSpellLevel.');
            }
            param1.writeByte(this.markSpellLevel);
            param1.writeShort(this.markId);
            param1.writeByte(this.markType);
            if (this.markimpactCell < -1 || this.markimpactCell > 559) {
                throw new Error('Forbidden value (' + this.markimpactCell + ') on element markimpactCell.');
            }
            param1.writeShort(this.markimpactCell);
            param1.writeShort(this.cells.length);
            var _loc2_ = 0;
            while (_loc2_ < this.cells.length) {
                (this.cells[_loc2_]).serializeAs_GameActionMarkedCell(param1);
                _loc2_++;
            }
            param1.writeBoolean(this.active);
        };
        GameActionMark.prototype.deserialize = function (param1) {
            this.deserializeAs_GameActionMark(param1);
        };
        GameActionMark.prototype.deserializeAs_GameActionMark = function (param1) {
            var _loc4_ = null;
            this.markAuthorId = param1.readInt();
            this.markTeamId = param1.readByte();
            if (this.markTeamId < 0) {
                throw new Error('Forbidden value (' + this.markTeamId + ') on element of GameActionMark.markTeamId.');
            }
            this.markSpellId = param1.readInt();
            if (this.markSpellId < 0) {
                throw new Error('Forbidden value (' + this.markSpellId + ') on element of GameActionMark.markSpellId.');
            }
            this.markSpellLevel = param1.readByte();
            if (this.markSpellLevel < 1 || this.markSpellLevel > 6) {
                throw new Error('Forbidden value (' + this.markSpellLevel + ') on element of GameActionMark.markSpellLevel.');
            }
            this.markId = param1.readShort();
            this.markType = param1.readByte();
            this.markimpactCell = param1.readShort();
            if (this.markimpactCell < -1 || this.markimpactCell > 559) {
                throw new Error('Forbidden value (' + this.markimpactCell + ') on element of GameActionMark.markimpactCell.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new GameActionMarkedCell();
                _loc4_.deserialize(param1);
                this.cells.push(_loc4_);
                _loc3_++;
            }
            this.active = param1.readBoolean();
        };
        GameActionMark.ID = 351;
        return GameActionMark;
    })();
    Protocol.GameActionMark = GameActionMark;
    var GameActionMarkedCell = (function () {
        function GameActionMarkedCell() {
            this.cellId = 0;
            this.zoneSize = 0;
            this.cellColor = 0;
            this.cellsType = 0;
        }
        GameActionMarkedCell.prototype.getTypeId = function () {
            return GameActionMarkedCell.ID;
        };
        GameActionMarkedCell.prototype.reset = function () {
            this.cellId = 0;
            this.zoneSize = 0;
            this.cellColor = 0;
            this.cellsType = 0;
        };
        GameActionMarkedCell.prototype.serialize = function (param1) {
            this.serializeAs_GameActionMarkedCell(param1);
        };
        GameActionMarkedCell.prototype.serializeAs_GameActionMarkedCell = function (param1) {
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
            }
            param1.writeVarShort(this.cellId);
            param1.writeByte(this.zoneSize);
            param1.writeInt(this.cellColor);
            param1.writeByte(this.cellsType);
        };
        GameActionMarkedCell.prototype.deserialize = function (param1) {
            this.deserializeAs_GameActionMarkedCell(param1);
        };
        GameActionMarkedCell.prototype.deserializeAs_GameActionMarkedCell = function (param1) {
            this.cellId = param1.readVarUhShort();
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element of GameActionMarkedCell.cellId.');
            }
            this.zoneSize = param1.readByte();
            this.cellColor = param1.readInt();
            this.cellsType = param1.readByte();
        };
        GameActionMarkedCell.ID = 85;
        return GameActionMarkedCell;
    })();
    Protocol.GameActionMarkedCell = GameActionMarkedCell;
    var ServerSessionConstant = (function () {
        function ServerSessionConstant() {
            this.id = 0;
        }
        ServerSessionConstant.prototype.getTypeId = function () {
            return ServerSessionConstant.ID;
        };
        ServerSessionConstant.prototype.reset = function () {
            this.id = 0;
        };
        ServerSessionConstant.prototype.serialize = function (param1) {
            this.serializeAs_ServerSessionConstant(param1);
        };
        ServerSessionConstant.prototype.serializeAs_ServerSessionConstant = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);
        };
        ServerSessionConstant.prototype.deserialize = function (param1) {
            this.deserializeAs_ServerSessionConstant(param1);
        };
        ServerSessionConstant.prototype.deserializeAs_ServerSessionConstant = function (param1) {
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of ServerSessionConstant.id.');
            }
        };
        ServerSessionConstant.ID = 430;
        return ServerSessionConstant;
    })();
    Protocol.ServerSessionConstant = ServerSessionConstant;
    var ServerSessionConstantInteger = (function (_super) {
        __extends(ServerSessionConstantInteger, _super);
        function ServerSessionConstantInteger() {
            this.value = 0;
            _super.call(this);
        }
        ServerSessionConstantInteger.prototype.getTypeId = function () {
            return ServerSessionConstantInteger.ID;
        };
        ServerSessionConstantInteger.prototype.reset = function () {
            this.value = 0;
        };
        ServerSessionConstantInteger.prototype.serialize = function (param1) {
            this.serializeAs_ServerSessionConstantInteger(param1);
        };
        ServerSessionConstantInteger.prototype.serializeAs_ServerSessionConstantInteger = function (param1) {
            _super.prototype.serializeAs_ServerSessionConstant.call(this, param1);
            param1.writeInt(this.value);
        };
        ServerSessionConstantInteger.prototype.deserialize = function (param1) {
            this.deserializeAs_ServerSessionConstantInteger(param1);
        };
        ServerSessionConstantInteger.prototype.deserializeAs_ServerSessionConstantInteger = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readInt();
        };
        ServerSessionConstantInteger.ID = 433;
        return ServerSessionConstantInteger;
    })(ServerSessionConstant);
    Protocol.ServerSessionConstantInteger = ServerSessionConstantInteger;
    var ServerSessionConstantLong = (function (_super) {
        __extends(ServerSessionConstantLong, _super);
        function ServerSessionConstantLong() {
            this.value = 0;
            _super.call(this);
        }
        ServerSessionConstantLong.prototype.getTypeId = function () {
            return ServerSessionConstantLong.ID;
        };
        ServerSessionConstantLong.prototype.reset = function () {
            this.value = 0;
        };
        ServerSessionConstantLong.prototype.serialize = function (param1) {
            this.serializeAs_ServerSessionConstantLong(param1);
        };
        ServerSessionConstantLong.prototype.serializeAs_ServerSessionConstantLong = function (param1) {
            _super.prototype.serializeAs_ServerSessionConstant.call(this, param1);
            if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.value + ') on element value.');
            }
            param1.writeDouble(this.value);
        };
        ServerSessionConstantLong.prototype.deserialize = function (param1) {
            this.deserializeAs_ServerSessionConstantLong(param1);
        };
        ServerSessionConstantLong.prototype.deserializeAs_ServerSessionConstantLong = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readDouble();
            if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.value + ') on element of ServerSessionConstantLong.value.');
            }
        };
        ServerSessionConstantLong.ID = 429;
        return ServerSessionConstantLong;
    })(ServerSessionConstant);
    Protocol.ServerSessionConstantLong = ServerSessionConstantLong;
    var ServerSessionConstantString = (function (_super) {
        __extends(ServerSessionConstantString, _super);
        function ServerSessionConstantString() {
            this.value = '';
            _super.call(this);
        }
        ServerSessionConstantString.prototype.getTypeId = function () {
            return ServerSessionConstantString.ID;
        };
        ServerSessionConstantString.prototype.reset = function () {
            this.value = '';
        };
        ServerSessionConstantString.prototype.serialize = function (param1) {
            this.serializeAs_ServerSessionConstantString(param1);
        };
        ServerSessionConstantString.prototype.serializeAs_ServerSessionConstantString = function (param1) {
            _super.prototype.serializeAs_ServerSessionConstant.call(this, param1);
            param1.writeUTF(this.value);
        };
        ServerSessionConstantString.prototype.deserialize = function (param1) {
            this.deserializeAs_ServerSessionConstantString(param1);
        };
        ServerSessionConstantString.prototype.deserializeAs_ServerSessionConstantString = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readUTF();
        };
        ServerSessionConstantString.ID = 436;
        return ServerSessionConstantString;
    })(ServerSessionConstant);
    Protocol.ServerSessionConstantString = ServerSessionConstantString;
    var AbstractCharacterInformation = (function () {
        function AbstractCharacterInformation() {
            this.id = 0;
        }
        AbstractCharacterInformation.prototype.getTypeId = function () {
            return AbstractCharacterInformation.ID;
        };
        AbstractCharacterInformation.prototype.reset = function () {
            this.id = 0;
        };
        AbstractCharacterInformation.prototype.serialize = function (param1) {
            this.serializeAs_AbstractCharacterInformation(param1);
        };
        AbstractCharacterInformation.prototype.serializeAs_AbstractCharacterInformation = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarInt(this.id);
        };
        AbstractCharacterInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_AbstractCharacterInformation(param1);
        };
        AbstractCharacterInformation.prototype.deserializeAs_AbstractCharacterInformation = function (param1) {
            this.id = param1.readVarUhInt();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of AbstractCharacterInformation.id.');
            }
        };
        AbstractCharacterInformation.ID = 400;
        return AbstractCharacterInformation;
    })();
    Protocol.AbstractCharacterInformation = AbstractCharacterInformation;
    var CharacterMinimalAllianceInformations = (function (_super) {
        __extends(CharacterMinimalAllianceInformations, _super);
        function CharacterMinimalAllianceInformations() {
            this.alliance = new BasicAllianceInformations();
            _super.call(this);
        }
        CharacterMinimalAllianceInformations.prototype.getTypeId = function () {
            return CharacterMinimalAllianceInformations.ID;
        };
        CharacterMinimalAllianceInformations.prototype.reset = function () {
            this.alliance = new BasicAllianceInformations();
        };
        CharacterMinimalAllianceInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterMinimalAllianceInformations(param1);
        };
        CharacterMinimalAllianceInformations.prototype.serializeAs_CharacterMinimalAllianceInformations = function (param1) {
            _super.prototype.serializeAs_CharacterMinimalGuildInformations.call(this, param1);
            this.alliance.serializeAs_BasicAllianceInformations(param1);
        };
        CharacterMinimalAllianceInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterMinimalAllianceInformations(param1);
        };
        CharacterMinimalAllianceInformations.prototype.deserializeAs_CharacterMinimalAllianceInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.alliance = new BasicAllianceInformations();
            this.alliance.deserialize(param1);
        };
        CharacterMinimalAllianceInformations.ID = 444;
        return CharacterMinimalAllianceInformations;
    })(CharacterMinimalGuildInformations);
    Protocol.CharacterMinimalAllianceInformations = CharacterMinimalAllianceInformations;
    var CharacterMinimalGuildInformations = (function (_super) {
        __extends(CharacterMinimalGuildInformations, _super);
        function CharacterMinimalGuildInformations() {
            this.guild = new BasicGuildInformations();
            _super.call(this);
        }
        CharacterMinimalGuildInformations.prototype.getTypeId = function () {
            return CharacterMinimalGuildInformations.ID;
        };
        CharacterMinimalGuildInformations.prototype.reset = function () {
            this.guild = new BasicGuildInformations();
        };
        CharacterMinimalGuildInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterMinimalGuildInformations(param1);
        };
        CharacterMinimalGuildInformations.prototype.serializeAs_CharacterMinimalGuildInformations = function (param1) {
            _super.prototype.serializeAs_CharacterMinimalPlusLookInformations.call(this, param1);
            this.guild.serializeAs_BasicGuildInformations(param1);
        };
        CharacterMinimalGuildInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterMinimalGuildInformations(param1);
        };
        CharacterMinimalGuildInformations.prototype.deserializeAs_CharacterMinimalGuildInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guild = new BasicGuildInformations();
            this.guild.deserialize(param1);
        };
        CharacterMinimalGuildInformations.ID = 445;
        return CharacterMinimalGuildInformations;
    })(CharacterMinimalPlusLookInformations);
    Protocol.CharacterMinimalGuildInformations = CharacterMinimalGuildInformations;
    var CharacterMinimalInformations = (function (_super) {
        __extends(CharacterMinimalInformations, _super);
        function CharacterMinimalInformations() {
            this.level = 0;
            this.name = '';
            _super.call(this);
        }
        CharacterMinimalInformations.prototype.getTypeId = function () {
            return CharacterMinimalInformations.ID;
        };
        CharacterMinimalInformations.prototype.reset = function () {
            this.level = 0;
            this.name = '';
        };
        CharacterMinimalInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterMinimalInformations(param1);
        };
        CharacterMinimalInformations.prototype.serializeAs_CharacterMinimalInformations = function (param1) {
            _super.prototype.serializeAs_AbstractCharacterInformation.call(this, param1);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeUTF(this.name);
        };
        CharacterMinimalInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterMinimalInformations(param1);
        };
        CharacterMinimalInformations.prototype.deserializeAs_CharacterMinimalInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of CharacterMinimalInformations.level.');
            }
            this.name = param1.readUTF();
        };
        CharacterMinimalInformations.ID = 110;
        return CharacterMinimalInformations;
    })(AbstractCharacterInformation);
    Protocol.CharacterMinimalInformations = CharacterMinimalInformations;
    var CharacterMinimalPlusLookAndGradeInformations = (function (_super) {
        __extends(CharacterMinimalPlusLookAndGradeInformations, _super);
        function CharacterMinimalPlusLookAndGradeInformations() {
            this.grade = 0;
            _super.call(this);
        }
        CharacterMinimalPlusLookAndGradeInformations.prototype.getTypeId = function () {
            return CharacterMinimalPlusLookAndGradeInformations.ID;
        };
        CharacterMinimalPlusLookAndGradeInformations.prototype.reset = function () {
            this.grade = 0;
        };
        CharacterMinimalPlusLookAndGradeInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
        };
        CharacterMinimalPlusLookAndGradeInformations.prototype.serializeAs_CharacterMinimalPlusLookAndGradeInformations = function (param1) {
            _super.prototype.serializeAs_CharacterMinimalPlusLookInformations.call(this, param1);
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element grade.');
            }
            param1.writeVarInt(this.grade);
        };
        CharacterMinimalPlusLookAndGradeInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
        };
        CharacterMinimalPlusLookAndGradeInformations.prototype.deserializeAs_CharacterMinimalPlusLookAndGradeInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.grade = param1.readVarUhInt();
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element of CharacterMinimalPlusLookAndGradeInformations.grade.');
            }
        };
        CharacterMinimalPlusLookAndGradeInformations.ID = 193;
        return CharacterMinimalPlusLookAndGradeInformations;
    })(CharacterMinimalPlusLookInformations);
    Protocol.CharacterMinimalPlusLookAndGradeInformations = CharacterMinimalPlusLookAndGradeInformations;
    var CharacterMinimalPlusLookInformations = (function (_super) {
        __extends(CharacterMinimalPlusLookInformations, _super);
        function CharacterMinimalPlusLookInformations() {
            this.entityLook = new EntityLook();
            _super.call(this);
        }
        CharacterMinimalPlusLookInformations.prototype.getTypeId = function () {
            return CharacterMinimalPlusLookInformations.ID;
        };
        CharacterMinimalPlusLookInformations.prototype.reset = function () {
            this.entityLook = new EntityLook();
        };
        CharacterMinimalPlusLookInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterMinimalPlusLookInformations(param1);
        };
        CharacterMinimalPlusLookInformations.prototype.serializeAs_CharacterMinimalPlusLookInformations = function (param1) {
            _super.prototype.serializeAs_CharacterMinimalInformations.call(this, param1);
            this.entityLook.serializeAs_EntityLook(param1);
        };
        CharacterMinimalPlusLookInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterMinimalPlusLookInformations(param1);
        };
        CharacterMinimalPlusLookInformations.prototype.deserializeAs_CharacterMinimalPlusLookInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.entityLook = new EntityLook();
            this.entityLook.deserialize(param1);
        };
        CharacterMinimalPlusLookInformations.ID = 163;
        return CharacterMinimalPlusLookInformations;
    })(CharacterMinimalInformations);
    Protocol.CharacterMinimalPlusLookInformations = CharacterMinimalPlusLookInformations;
    var ActorAlignmentInformations = (function () {
        function ActorAlignmentInformations() {
            this.alignmentSide = 0;
            this.alignmentValue = 0;
            this.alignmentGrade = 0;
            this.characterPower = 0;
        }
        ActorAlignmentInformations.prototype.getTypeId = function () {
            return ActorAlignmentInformations.ID;
        };
        ActorAlignmentInformations.prototype.reset = function () {
            this.alignmentSide = 0;
            this.alignmentValue = 0;
            this.alignmentGrade = 0;
            this.characterPower = 0;
        };
        ActorAlignmentInformations.prototype.serialize = function (param1) {
            this.serializeAs_ActorAlignmentInformations(param1);
        };
        ActorAlignmentInformations.prototype.serializeAs_ActorAlignmentInformations = function (param1) {
            param1.writeByte(this.alignmentSide);
            if (this.alignmentValue < 0) {
                throw new Error('Forbidden value (' + this.alignmentValue + ') on element alignmentValue.');
            }
            param1.writeByte(this.alignmentValue);
            if (this.alignmentGrade < 0) {
                throw new Error('Forbidden value (' + this.alignmentGrade + ') on element alignmentGrade.');
            }
            param1.writeByte(this.alignmentGrade);
            if (this.characterPower < 0) {
                throw new Error('Forbidden value (' + this.characterPower + ') on element characterPower.');
            }
            param1.writeVarInt(this.characterPower);
        };
        ActorAlignmentInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_ActorAlignmentInformations(param1);
        };
        ActorAlignmentInformations.prototype.deserializeAs_ActorAlignmentInformations = function (param1) {
            this.alignmentSide = param1.readByte();
            this.alignmentValue = param1.readByte();
            if (this.alignmentValue < 0) {
                throw new Error('Forbidden value (' + this.alignmentValue + ') on element of ActorAlignmentInformations.alignmentValue.');
            }
            this.alignmentGrade = param1.readByte();
            if (this.alignmentGrade < 0) {
                throw new Error('Forbidden value (' + this.alignmentGrade + ') on element of ActorAlignmentInformations.alignmentGrade.');
            }
            this.characterPower = param1.readVarUhInt();
            if (this.characterPower < 0) {
                throw new Error('Forbidden value (' + this.characterPower + ') on element of ActorAlignmentInformations.characterPower.');
            }
        };
        ActorAlignmentInformations.ID = 201;
        return ActorAlignmentInformations;
    })();
    Protocol.ActorAlignmentInformations = ActorAlignmentInformations;
    var ActorExtendedAlignmentInformations = (function (_super) {
        __extends(ActorExtendedAlignmentInformations, _super);
        function ActorExtendedAlignmentInformations() {
            this.honor = 0;
            this.honorGradeFloor = 0;
            this.honorNextGradeFloor = 0;
            this.aggressable = 0;
            _super.call(this);
        }
        ActorExtendedAlignmentInformations.prototype.getTypeId = function () {
            return ActorExtendedAlignmentInformations.ID;
        };
        ActorExtendedAlignmentInformations.prototype.reset = function () {
            this.honor = 0;
            this.honorGradeFloor = 0;
            this.honorNextGradeFloor = 0;
            this.aggressable = 0;
        };
        ActorExtendedAlignmentInformations.prototype.serialize = function (param1) {
            this.serializeAs_ActorExtendedAlignmentInformations(param1);
        };
        ActorExtendedAlignmentInformations.prototype.serializeAs_ActorExtendedAlignmentInformations = function (param1) {
            _super.prototype.serializeAs_ActorAlignmentInformations.call(this, param1);
            if (this.honor < 0 || this.honor > 20000) {
                throw new Error('Forbidden value (' + this.honor + ') on element honor.');
            }
            param1.writeVarShort(this.honor);
            if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
                throw new Error('Forbidden value (' + this.honorGradeFloor + ') on element honorGradeFloor.');
            }
            param1.writeVarShort(this.honorGradeFloor);
            if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
                throw new Error('Forbidden value (' + this.honorNextGradeFloor + ') on element honorNextGradeFloor.');
            }
            param1.writeVarShort(this.honorNextGradeFloor);
            param1.writeByte(this.aggressable);
        };
        ActorExtendedAlignmentInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_ActorExtendedAlignmentInformations(param1);
        };
        ActorExtendedAlignmentInformations.prototype.deserializeAs_ActorExtendedAlignmentInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.honor = param1.readVarUhShort();
            if (this.honor < 0 || this.honor > 20000) {
                throw new Error('Forbidden value (' + this.honor + ') on element of ActorExtendedAlignmentInformations.honor.');
            }
            this.honorGradeFloor = param1.readVarUhShort();
            if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
                throw new Error('Forbidden value (' + this.honorGradeFloor + ') on element of ActorExtendedAlignmentInformations.honorGradeFloor.');
            }
            this.honorNextGradeFloor = param1.readVarUhShort();
            if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
                throw new Error('Forbidden value (' + this.honorNextGradeFloor + ') on element of ActorExtendedAlignmentInformations.honorNextGradeFloor.');
            }
            this.aggressable = param1.readByte();
            if (this.aggressable < 0) {
                throw new Error('Forbidden value (' + this.aggressable + ') on element of ActorExtendedAlignmentInformations.aggressable.');
            }
        };
        ActorExtendedAlignmentInformations.ID = 202;
        return ActorExtendedAlignmentInformations;
    })(ActorAlignmentInformations);
    Protocol.ActorExtendedAlignmentInformations = ActorExtendedAlignmentInformations;
    var CharacterBaseCharacteristic = (function () {
        function CharacterBaseCharacteristic() {
            this.base = 0;
            this.additionnal = 0;
            this.objectsAndMountBonus = 0;
            this.alignGiftBonus = 0;
            this.contextModif = 0;
        }
        CharacterBaseCharacteristic.prototype.getTypeId = function () {
            return CharacterBaseCharacteristic.ID;
        };
        CharacterBaseCharacteristic.prototype.reset = function () {
            this.base = 0;
            this.additionnal = 0;
            this.objectsAndMountBonus = 0;
            this.alignGiftBonus = 0;
            this.contextModif = 0;
        };
        CharacterBaseCharacteristic.prototype.serialize = function (param1) {
            this.serializeAs_CharacterBaseCharacteristic(param1);
        };
        CharacterBaseCharacteristic.prototype.serializeAs_CharacterBaseCharacteristic = function (param1) {
            param1.writeVarShort(this.base);
            param1.writeVarShort(this.additionnal);
            param1.writeVarShort(this.objectsAndMountBonus);
            param1.writeVarShort(this.alignGiftBonus);
            param1.writeVarShort(this.contextModif);
        };
        CharacterBaseCharacteristic.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterBaseCharacteristic(param1);
        };
        CharacterBaseCharacteristic.prototype.deserializeAs_CharacterBaseCharacteristic = function (param1) {
            this.base = param1.readVarShort();
            this.additionnal = param1.readVarShort();
            this.objectsAndMountBonus = param1.readVarShort();
            this.alignGiftBonus = param1.readVarShort();
            this.contextModif = param1.readVarShort();
        };
        CharacterBaseCharacteristic.ID = 4;
        return CharacterBaseCharacteristic;
    })();
    Protocol.CharacterBaseCharacteristic = CharacterBaseCharacteristic;
    var CharacterCharacteristicsInformations = (function () {
        function CharacterCharacteristicsInformations() {
            this.experience = 0;
            this.experienceLevelFloor = 0;
            this.experienceNextLevelFloor = 0;
            this.kamas = 0;
            this.statsPoints = 0;
            this.additionnalPoints = 0;
            this.spellsPoints = 0;
            this.alignmentInfos = new ActorExtendedAlignmentInformations();
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.energyPoints = 0;
            this.maxEnergyPoints = 0;
            this.actionPointsCurrent = 0;
            this.movementPointsCurrent = 0;
            this.initiative = new CharacterBaseCharacteristic();
            this.prospecting = new CharacterBaseCharacteristic();
            this.actionPoints = new CharacterBaseCharacteristic();
            this.movementPoints = new CharacterBaseCharacteristic();
            this.strength = new CharacterBaseCharacteristic();
            this.vitality = new CharacterBaseCharacteristic();
            this.wisdom = new CharacterBaseCharacteristic();
            this.chance = new CharacterBaseCharacteristic();
            this.agility = new CharacterBaseCharacteristic();
            this.intelligence = new CharacterBaseCharacteristic();
            this.range = new CharacterBaseCharacteristic();
            this.summonableCreaturesBoost = new CharacterBaseCharacteristic();
            this.reflect = new CharacterBaseCharacteristic();
            this.criticalHit = new CharacterBaseCharacteristic();
            this.criticalHitWeapon = 0;
            this.criticalMiss = new CharacterBaseCharacteristic();
            this.healBonus = new CharacterBaseCharacteristic();
            this.allDamagesBonus = new CharacterBaseCharacteristic();
            this.weaponDamagesBonusPercent = new CharacterBaseCharacteristic();
            this.damagesBonusPercent = new CharacterBaseCharacteristic();
            this.trapBonus = new CharacterBaseCharacteristic();
            this.trapBonusPercent = new CharacterBaseCharacteristic();
            this.glyphBonusPercent = new CharacterBaseCharacteristic();
            this.permanentDamagePercent = new CharacterBaseCharacteristic();
            this.tackleBlock = new CharacterBaseCharacteristic();
            this.tackleEvade = new CharacterBaseCharacteristic();
            this.PAAttack = new CharacterBaseCharacteristic();
            this.PMAttack = new CharacterBaseCharacteristic();
            this.pushDamageBonus = new CharacterBaseCharacteristic();
            this.criticalDamageBonus = new CharacterBaseCharacteristic();
            this.neutralDamageBonus = new CharacterBaseCharacteristic();
            this.earthDamageBonus = new CharacterBaseCharacteristic();
            this.waterDamageBonus = new CharacterBaseCharacteristic();
            this.airDamageBonus = new CharacterBaseCharacteristic();
            this.fireDamageBonus = new CharacterBaseCharacteristic();
            this.dodgePALostProbability = new CharacterBaseCharacteristic();
            this.dodgePMLostProbability = new CharacterBaseCharacteristic();
            this.neutralElementResistPercent = new CharacterBaseCharacteristic();
            this.earthElementResistPercent = new CharacterBaseCharacteristic();
            this.waterElementResistPercent = new CharacterBaseCharacteristic();
            this.airElementResistPercent = new CharacterBaseCharacteristic();
            this.fireElementResistPercent = new CharacterBaseCharacteristic();
            this.neutralElementReduction = new CharacterBaseCharacteristic();
            this.earthElementReduction = new CharacterBaseCharacteristic();
            this.waterElementReduction = new CharacterBaseCharacteristic();
            this.airElementReduction = new CharacterBaseCharacteristic();
            this.fireElementReduction = new CharacterBaseCharacteristic();
            this.pushDamageReduction = new CharacterBaseCharacteristic();
            this.criticalDamageReduction = new CharacterBaseCharacteristic();
            this.pvpNeutralElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpEarthElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpWaterElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpAirElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpFireElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpNeutralElementReduction = new CharacterBaseCharacteristic();
            this.pvpEarthElementReduction = new CharacterBaseCharacteristic();
            this.pvpWaterElementReduction = new CharacterBaseCharacteristic();
            this.pvpAirElementReduction = new CharacterBaseCharacteristic();
            this.pvpFireElementReduction = new CharacterBaseCharacteristic();
            this.spellModifications = [];
            this.probationTime = 0;
        }
        CharacterCharacteristicsInformations.prototype.getTypeId = function () {
            return CharacterCharacteristicsInformations.ID;
        };
        CharacterCharacteristicsInformations.prototype.reset = function () {
            this.experience = 0;
            this.experienceLevelFloor = 0;
            this.experienceNextLevelFloor = 0;
            this.kamas = 0;
            this.statsPoints = 0;
            this.additionnalPoints = 0;
            this.spellsPoints = 0;
            this.alignmentInfos = new ActorExtendedAlignmentInformations();
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.energyPoints = 0;
            this.maxEnergyPoints = 0;
            this.actionPointsCurrent = 0;
            this.movementPointsCurrent = 0;
            this.initiative = new CharacterBaseCharacteristic();
            this.prospecting = new CharacterBaseCharacteristic();
            this.actionPoints = new CharacterBaseCharacteristic();
            this.movementPoints = new CharacterBaseCharacteristic();
            this.strength = new CharacterBaseCharacteristic();
            this.vitality = new CharacterBaseCharacteristic();
            this.wisdom = new CharacterBaseCharacteristic();
            this.chance = new CharacterBaseCharacteristic();
            this.agility = new CharacterBaseCharacteristic();
            this.intelligence = new CharacterBaseCharacteristic();
            this.range = new CharacterBaseCharacteristic();
            this.summonableCreaturesBoost = new CharacterBaseCharacteristic();
            this.reflect = new CharacterBaseCharacteristic();
            this.criticalHit = new CharacterBaseCharacteristic();
            this.criticalHitWeapon = 0;
            this.criticalMiss = new CharacterBaseCharacteristic();
            this.healBonus = new CharacterBaseCharacteristic();
            this.allDamagesBonus = new CharacterBaseCharacteristic();
            this.weaponDamagesBonusPercent = new CharacterBaseCharacteristic();
            this.damagesBonusPercent = new CharacterBaseCharacteristic();
            this.trapBonus = new CharacterBaseCharacteristic();
            this.trapBonusPercent = new CharacterBaseCharacteristic();
            this.glyphBonusPercent = new CharacterBaseCharacteristic();
            this.permanentDamagePercent = new CharacterBaseCharacteristic();
            this.tackleBlock = new CharacterBaseCharacteristic();
            this.tackleEvade = new CharacterBaseCharacteristic();
            this.PAAttack = new CharacterBaseCharacteristic();
            this.PMAttack = new CharacterBaseCharacteristic();
            this.pushDamageBonus = new CharacterBaseCharacteristic();
            this.criticalDamageBonus = new CharacterBaseCharacteristic();
            this.neutralDamageBonus = new CharacterBaseCharacteristic();
            this.earthDamageBonus = new CharacterBaseCharacteristic();
            this.waterDamageBonus = new CharacterBaseCharacteristic();
            this.airDamageBonus = new CharacterBaseCharacteristic();
            this.fireDamageBonus = new CharacterBaseCharacteristic();
            this.dodgePALostProbability = new CharacterBaseCharacteristic();
            this.dodgePMLostProbability = new CharacterBaseCharacteristic();
            this.neutralElementResistPercent = new CharacterBaseCharacteristic();
            this.earthElementResistPercent = new CharacterBaseCharacteristic();
            this.waterElementResistPercent = new CharacterBaseCharacteristic();
            this.airElementResistPercent = new CharacterBaseCharacteristic();
            this.fireElementResistPercent = new CharacterBaseCharacteristic();
            this.neutralElementReduction = new CharacterBaseCharacteristic();
            this.earthElementReduction = new CharacterBaseCharacteristic();
            this.waterElementReduction = new CharacterBaseCharacteristic();
            this.airElementReduction = new CharacterBaseCharacteristic();
            this.fireElementReduction = new CharacterBaseCharacteristic();
            this.pushDamageReduction = new CharacterBaseCharacteristic();
            this.criticalDamageReduction = new CharacterBaseCharacteristic();
            this.pvpNeutralElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpEarthElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpWaterElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpAirElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpFireElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpNeutralElementReduction = new CharacterBaseCharacteristic();
            this.pvpEarthElementReduction = new CharacterBaseCharacteristic();
            this.pvpWaterElementReduction = new CharacterBaseCharacteristic();
            this.pvpAirElementReduction = new CharacterBaseCharacteristic();
            this.pvpFireElementReduction = new CharacterBaseCharacteristic();
            this.spellModifications = [];
            this.probationTime = 0;
        };
        CharacterCharacteristicsInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterCharacteristicsInformations(param1);
        };
        CharacterCharacteristicsInformations.prototype.serializeAs_CharacterCharacteristicsInformations = function (param1) {
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element experience.');
            }
            param1.writeVarLong(this.experience);
            if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceLevelFloor + ') on element experienceLevelFloor.');
            }
            param1.writeVarLong(this.experienceLevelFloor);
            if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceNextLevelFloor + ') on element experienceNextLevelFloor.');
            }
            param1.writeVarLong(this.experienceNextLevelFloor);
            if (this.kamas < 0) {
                throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
            }
            param1.writeInt(this.kamas);
            if (this.statsPoints < 0) {
                throw new Error('Forbidden value (' + this.statsPoints + ') on element statsPoints.');
            }
            param1.writeVarShort(this.statsPoints);
            if (this.additionnalPoints < 0) {
                throw new Error('Forbidden value (' + this.additionnalPoints + ') on element additionnalPoints.');
            }
            param1.writeVarShort(this.additionnalPoints);
            if (this.spellsPoints < 0) {
                throw new Error('Forbidden value (' + this.spellsPoints + ') on element spellsPoints.');
            }
            param1.writeVarShort(this.spellsPoints);
            this.alignmentInfos.serializeAs_ActorExtendedAlignmentInformations(param1);
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
            }
            param1.writeVarInt(this.lifePoints);
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
            }
            param1.writeVarInt(this.maxLifePoints);
            if (this.energyPoints < 0) {
                throw new Error('Forbidden value (' + this.energyPoints + ') on element energyPoints.');
            }
            param1.writeVarShort(this.energyPoints);
            if (this.maxEnergyPoints < 0) {
                throw new Error('Forbidden value (' + this.maxEnergyPoints + ') on element maxEnergyPoints.');
            }
            param1.writeVarShort(this.maxEnergyPoints);
            param1.writeVarShort(this.actionPointsCurrent);
            param1.writeVarShort(this.movementPointsCurrent);
            this.initiative.serializeAs_CharacterBaseCharacteristic(param1);
            this.prospecting.serializeAs_CharacterBaseCharacteristic(param1);
            this.actionPoints.serializeAs_CharacterBaseCharacteristic(param1);
            this.movementPoints.serializeAs_CharacterBaseCharacteristic(param1);
            this.strength.serializeAs_CharacterBaseCharacteristic(param1);
            this.vitality.serializeAs_CharacterBaseCharacteristic(param1);
            this.wisdom.serializeAs_CharacterBaseCharacteristic(param1);
            this.chance.serializeAs_CharacterBaseCharacteristic(param1);
            this.agility.serializeAs_CharacterBaseCharacteristic(param1);
            this.intelligence.serializeAs_CharacterBaseCharacteristic(param1);
            this.range.serializeAs_CharacterBaseCharacteristic(param1);
            this.summonableCreaturesBoost.serializeAs_CharacterBaseCharacteristic(param1);
            this.reflect.serializeAs_CharacterBaseCharacteristic(param1);
            this.criticalHit.serializeAs_CharacterBaseCharacteristic(param1);
            if (this.criticalHitWeapon < 0) {
                throw new Error('Forbidden value (' + this.criticalHitWeapon + ') on element criticalHitWeapon.');
            }
            param1.writeVarShort(this.criticalHitWeapon);
            this.criticalMiss.serializeAs_CharacterBaseCharacteristic(param1);
            this.healBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.allDamagesBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.weaponDamagesBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.damagesBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.trapBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.trapBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.glyphBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.permanentDamagePercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.tackleBlock.serializeAs_CharacterBaseCharacteristic(param1);
            this.tackleEvade.serializeAs_CharacterBaseCharacteristic(param1);
            this.PAAttack.serializeAs_CharacterBaseCharacteristic(param1);
            this.PMAttack.serializeAs_CharacterBaseCharacteristic(param1);
            this.pushDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.criticalDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.neutralDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.earthDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.waterDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.airDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.fireDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
            this.dodgePALostProbability.serializeAs_CharacterBaseCharacteristic(param1);
            this.dodgePMLostProbability.serializeAs_CharacterBaseCharacteristic(param1);
            this.neutralElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.earthElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.waterElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.airElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.fireElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.neutralElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.earthElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.waterElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.airElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.fireElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.pushDamageReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.criticalDamageReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpNeutralElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpEarthElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpWaterElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpAirElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpFireElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpNeutralElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpEarthElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpWaterElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpAirElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            this.pvpFireElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
            param1.writeShort(this.spellModifications.length);
            var _loc2_ = 0;
            while (_loc2_ < this.spellModifications.length) {
                (this.spellModifications[_loc2_]).serializeAs_CharacterSpellModification(param1);
                _loc2_++;
            }
            if (this.probationTime < 0) {
                throw new Error('Forbidden value (' + this.probationTime + ') on element probationTime.');
            }
            param1.writeInt(this.probationTime);
        };
        CharacterCharacteristicsInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterCharacteristicsInformations(param1);
        };
        CharacterCharacteristicsInformations.prototype.deserializeAs_CharacterCharacteristicsInformations = function (param1) {
            var _loc4_ = null;
            this.experience = param1.readVarUhLong();
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element of CharacterCharacteristicsInformations.experience.');
            }
            this.experienceLevelFloor = param1.readVarUhLong();
            if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceLevelFloor + ') on element of CharacterCharacteristicsInformations.experienceLevelFloor.');
            }
            this.experienceNextLevelFloor = param1.readVarUhLong();
            if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceNextLevelFloor + ') on element of CharacterCharacteristicsInformations.experienceNextLevelFloor.');
            }
            this.kamas = param1.readInt();
            if (this.kamas < 0) {
                throw new Error('Forbidden value (' + this.kamas + ') on element of CharacterCharacteristicsInformations.kamas.');
            }
            this.statsPoints = param1.readVarUhShort();
            if (this.statsPoints < 0) {
                throw new Error('Forbidden value (' + this.statsPoints + ') on element of CharacterCharacteristicsInformations.statsPoints.');
            }
            this.additionnalPoints = param1.readVarUhShort();
            if (this.additionnalPoints < 0) {
                throw new Error('Forbidden value (' + this.additionnalPoints + ') on element of CharacterCharacteristicsInformations.additionnalPoints.');
            }
            this.spellsPoints = param1.readVarUhShort();
            if (this.spellsPoints < 0) {
                throw new Error('Forbidden value (' + this.spellsPoints + ') on element of CharacterCharacteristicsInformations.spellsPoints.');
            }
            this.alignmentInfos = new ActorExtendedAlignmentInformations();
            this.alignmentInfos.deserialize(param1);
            this.lifePoints = param1.readVarUhInt();
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element of CharacterCharacteristicsInformations.lifePoints.');
            }
            this.maxLifePoints = param1.readVarUhInt();
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of CharacterCharacteristicsInformations.maxLifePoints.');
            }
            this.energyPoints = param1.readVarUhShort();
            if (this.energyPoints < 0) {
                throw new Error('Forbidden value (' + this.energyPoints + ') on element of CharacterCharacteristicsInformations.energyPoints.');
            }
            this.maxEnergyPoints = param1.readVarUhShort();
            if (this.maxEnergyPoints < 0) {
                throw new Error('Forbidden value (' + this.maxEnergyPoints + ') on element of CharacterCharacteristicsInformations.maxEnergyPoints.');
            }
            this.actionPointsCurrent = param1.readVarShort();
            this.movementPointsCurrent = param1.readVarShort();
            this.initiative = new CharacterBaseCharacteristic();
            this.initiative.deserialize(param1);
            this.prospecting = new CharacterBaseCharacteristic();
            this.prospecting.deserialize(param1);
            this.actionPoints = new CharacterBaseCharacteristic();
            this.actionPoints.deserialize(param1);
            this.movementPoints = new CharacterBaseCharacteristic();
            this.movementPoints.deserialize(param1);
            this.strength = new CharacterBaseCharacteristic();
            this.strength.deserialize(param1);
            this.vitality = new CharacterBaseCharacteristic();
            this.vitality.deserialize(param1);
            this.wisdom = new CharacterBaseCharacteristic();
            this.wisdom.deserialize(param1);
            this.chance = new CharacterBaseCharacteristic();
            this.chance.deserialize(param1);
            this.agility = new CharacterBaseCharacteristic();
            this.agility.deserialize(param1);
            this.intelligence = new CharacterBaseCharacteristic();
            this.intelligence.deserialize(param1);
            this.range = new CharacterBaseCharacteristic();
            this.range.deserialize(param1);
            this.summonableCreaturesBoost = new CharacterBaseCharacteristic();
            this.summonableCreaturesBoost.deserialize(param1);
            this.reflect = new CharacterBaseCharacteristic();
            this.reflect.deserialize(param1);
            this.criticalHit = new CharacterBaseCharacteristic();
            this.criticalHit.deserialize(param1);
            this.criticalHitWeapon = param1.readVarUhShort();
            if (this.criticalHitWeapon < 0) {
                throw new Error('Forbidden value (' + this.criticalHitWeapon + ') on element of CharacterCharacteristicsInformations.criticalHitWeapon.');
            }
            this.criticalMiss = new CharacterBaseCharacteristic();
            this.criticalMiss.deserialize(param1);
            this.healBonus = new CharacterBaseCharacteristic();
            this.healBonus.deserialize(param1);
            this.allDamagesBonus = new CharacterBaseCharacteristic();
            this.allDamagesBonus.deserialize(param1);
            this.weaponDamagesBonusPercent = new CharacterBaseCharacteristic();
            this.weaponDamagesBonusPercent.deserialize(param1);
            this.damagesBonusPercent = new CharacterBaseCharacteristic();
            this.damagesBonusPercent.deserialize(param1);
            this.trapBonus = new CharacterBaseCharacteristic();
            this.trapBonus.deserialize(param1);
            this.trapBonusPercent = new CharacterBaseCharacteristic();
            this.trapBonusPercent.deserialize(param1);
            this.glyphBonusPercent = new CharacterBaseCharacteristic();
            this.glyphBonusPercent.deserialize(param1);
            this.permanentDamagePercent = new CharacterBaseCharacteristic();
            this.permanentDamagePercent.deserialize(param1);
            this.tackleBlock = new CharacterBaseCharacteristic();
            this.tackleBlock.deserialize(param1);
            this.tackleEvade = new CharacterBaseCharacteristic();
            this.tackleEvade.deserialize(param1);
            this.PAAttack = new CharacterBaseCharacteristic();
            this.PAAttack.deserialize(param1);
            this.PMAttack = new CharacterBaseCharacteristic();
            this.PMAttack.deserialize(param1);
            this.pushDamageBonus = new CharacterBaseCharacteristic();
            this.pushDamageBonus.deserialize(param1);
            this.criticalDamageBonus = new CharacterBaseCharacteristic();
            this.criticalDamageBonus.deserialize(param1);
            this.neutralDamageBonus = new CharacterBaseCharacteristic();
            this.neutralDamageBonus.deserialize(param1);
            this.earthDamageBonus = new CharacterBaseCharacteristic();
            this.earthDamageBonus.deserialize(param1);
            this.waterDamageBonus = new CharacterBaseCharacteristic();
            this.waterDamageBonus.deserialize(param1);
            this.airDamageBonus = new CharacterBaseCharacteristic();
            this.airDamageBonus.deserialize(param1);
            this.fireDamageBonus = new CharacterBaseCharacteristic();
            this.fireDamageBonus.deserialize(param1);
            this.dodgePALostProbability = new CharacterBaseCharacteristic();
            this.dodgePALostProbability.deserialize(param1);
            this.dodgePMLostProbability = new CharacterBaseCharacteristic();
            this.dodgePMLostProbability.deserialize(param1);
            this.neutralElementResistPercent = new CharacterBaseCharacteristic();
            this.neutralElementResistPercent.deserialize(param1);
            this.earthElementResistPercent = new CharacterBaseCharacteristic();
            this.earthElementResistPercent.deserialize(param1);
            this.waterElementResistPercent = new CharacterBaseCharacteristic();
            this.waterElementResistPercent.deserialize(param1);
            this.airElementResistPercent = new CharacterBaseCharacteristic();
            this.airElementResistPercent.deserialize(param1);
            this.fireElementResistPercent = new CharacterBaseCharacteristic();
            this.fireElementResistPercent.deserialize(param1);
            this.neutralElementReduction = new CharacterBaseCharacteristic();
            this.neutralElementReduction.deserialize(param1);
            this.earthElementReduction = new CharacterBaseCharacteristic();
            this.earthElementReduction.deserialize(param1);
            this.waterElementReduction = new CharacterBaseCharacteristic();
            this.waterElementReduction.deserialize(param1);
            this.airElementReduction = new CharacterBaseCharacteristic();
            this.airElementReduction.deserialize(param1);
            this.fireElementReduction = new CharacterBaseCharacteristic();
            this.fireElementReduction.deserialize(param1);
            this.pushDamageReduction = new CharacterBaseCharacteristic();
            this.pushDamageReduction.deserialize(param1);
            this.criticalDamageReduction = new CharacterBaseCharacteristic();
            this.criticalDamageReduction.deserialize(param1);
            this.pvpNeutralElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpNeutralElementResistPercent.deserialize(param1);
            this.pvpEarthElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpEarthElementResistPercent.deserialize(param1);
            this.pvpWaterElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpWaterElementResistPercent.deserialize(param1);
            this.pvpAirElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpAirElementResistPercent.deserialize(param1);
            this.pvpFireElementResistPercent = new CharacterBaseCharacteristic();
            this.pvpFireElementResistPercent.deserialize(param1);
            this.pvpNeutralElementReduction = new CharacterBaseCharacteristic();
            this.pvpNeutralElementReduction.deserialize(param1);
            this.pvpEarthElementReduction = new CharacterBaseCharacteristic();
            this.pvpEarthElementReduction.deserialize(param1);
            this.pvpWaterElementReduction = new CharacterBaseCharacteristic();
            this.pvpWaterElementReduction.deserialize(param1);
            this.pvpAirElementReduction = new CharacterBaseCharacteristic();
            this.pvpAirElementReduction.deserialize(param1);
            this.pvpFireElementReduction = new CharacterBaseCharacteristic();
            this.pvpFireElementReduction.deserialize(param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new CharacterSpellModification();
                _loc4_.deserialize(param1);
                this.spellModifications.push(_loc4_);
                _loc3_++;
            }
            this.probationTime = param1.readInt();
            if (this.probationTime < 0) {
                throw new Error('Forbidden value (' + this.probationTime + ') on element of CharacterCharacteristicsInformations.probationTime.');
            }
        };
        CharacterCharacteristicsInformations.ID = 8;
        return CharacterCharacteristicsInformations;
    })();
    Protocol.CharacterCharacteristicsInformations = CharacterCharacteristicsInformations;
    var CharacterSpellModification = (function () {
        function CharacterSpellModification() {
            this.modificationType = 0;
            this.spellId = 0;
            this.value = new CharacterBaseCharacteristic();
        }
        CharacterSpellModification.prototype.getTypeId = function () {
            return CharacterSpellModification.ID;
        };
        CharacterSpellModification.prototype.reset = function () {
            this.modificationType = 0;
            this.spellId = 0;
            this.value = new CharacterBaseCharacteristic();
        };
        CharacterSpellModification.prototype.serialize = function (param1) {
            this.serializeAs_CharacterSpellModification(param1);
        };
        CharacterSpellModification.prototype.serializeAs_CharacterSpellModification = function (param1) {
            param1.writeByte(this.modificationType);
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
            }
            param1.writeVarShort(this.spellId);
            this.value.serializeAs_CharacterBaseCharacteristic(param1);
        };
        CharacterSpellModification.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterSpellModification(param1);
        };
        CharacterSpellModification.prototype.deserializeAs_CharacterSpellModification = function (param1) {
            this.modificationType = param1.readByte();
            if (this.modificationType < 0) {
                throw new Error('Forbidden value (' + this.modificationType + ') on element of CharacterSpellModification.modificationType.');
            }
            this.spellId = param1.readVarUhShort();
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element of CharacterSpellModification.spellId.');
            }
            this.value = new CharacterBaseCharacteristic();
            this.value.deserialize(param1);
        };
        CharacterSpellModification.ID = 215;
        return CharacterSpellModification;
    })();
    Protocol.CharacterSpellModification = CharacterSpellModification;
    var AbstractCharacterToRefurbishInformation = (function (_super) {
        __extends(AbstractCharacterToRefurbishInformation, _super);
        function AbstractCharacterToRefurbishInformation() {
            this.colors = [];
            this.cosmeticId = 0;
            _super.call(this);
        }
        AbstractCharacterToRefurbishInformation.prototype.getTypeId = function () {
            return AbstractCharacterToRefurbishInformation.ID;
        };
        AbstractCharacterToRefurbishInformation.prototype.reset = function () {
            this.colors = [];
            this.cosmeticId = 0;
        };
        AbstractCharacterToRefurbishInformation.prototype.serialize = function (param1) {
            this.serializeAs_AbstractCharacterToRefurbishInformation(param1);
        };
        AbstractCharacterToRefurbishInformation.prototype.serializeAs_AbstractCharacterToRefurbishInformation = function (param1) {
            _super.prototype.serializeAs_AbstractCharacterInformation.call(this, param1);
            param1.writeShort(this.colors.length);
            var _loc2_ = 0;
            while (_loc2_ < this.colors.length) {
                param1.writeInt(this.colors[_loc2_]);
                _loc2_++;
            }
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
            }
            param1.writeVarInt(this.cosmeticId);
        };
        AbstractCharacterToRefurbishInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_AbstractCharacterToRefurbishInformation(param1);
        };
        AbstractCharacterToRefurbishInformation.prototype.deserializeAs_AbstractCharacterToRefurbishInformation = function (param1) {
            var _loc4_ = 0;
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.colors.push(_loc4_);
                _loc3_++;
            }
            this.cosmeticId = param1.readVarUhInt();
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element of AbstractCharacterToRefurbishInformation.cosmeticId.');
            }
        };
        AbstractCharacterToRefurbishInformation.ID = 475;
        return AbstractCharacterToRefurbishInformation;
    })(AbstractCharacterInformation);
    Protocol.AbstractCharacterToRefurbishInformation = AbstractCharacterToRefurbishInformation;
    var CharacterBaseInformations = (function (_super) {
        __extends(CharacterBaseInformations, _super);
        function CharacterBaseInformations() {
            this.breed = 0;
            this.sex = false;
            _super.call(this);
        }
        CharacterBaseInformations.prototype.getTypeId = function () {
            return CharacterBaseInformations.ID;
        };
        CharacterBaseInformations.prototype.reset = function () {
            this.breed = 0;
            this.sex = false;
        };
        CharacterBaseInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterBaseInformations(param1);
        };
        CharacterBaseInformations.prototype.serializeAs_CharacterBaseInformations = function (param1) {
            _super.prototype.serializeAs_CharacterMinimalPlusLookInformations.call(this, param1);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
        };
        CharacterBaseInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterBaseInformations(param1);
        };
        CharacterBaseInformations.prototype.deserializeAs_CharacterBaseInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
        };
        CharacterBaseInformations.ID = 45;
        return CharacterBaseInformations;
    })(CharacterMinimalPlusLookInformations);
    Protocol.CharacterBaseInformations = CharacterBaseInformations;
    var CharacterHardcoreOrEpicInformations = (function (_super) {
        __extends(CharacterHardcoreOrEpicInformations, _super);
        function CharacterHardcoreOrEpicInformations() {
            this.deathState = 0;
            this.deathCount = 0;
            this.deathMaxLevel = 0;
            _super.call(this);
        }
        CharacterHardcoreOrEpicInformations.prototype.getTypeId = function () {
            return CharacterHardcoreOrEpicInformations.ID;
        };
        CharacterHardcoreOrEpicInformations.prototype.reset = function () {
            this.deathState = 0;
            this.deathCount = 0;
            this.deathMaxLevel = 0;
        };
        CharacterHardcoreOrEpicInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterHardcoreOrEpicInformations(param1);
        };
        CharacterHardcoreOrEpicInformations.prototype.serializeAs_CharacterHardcoreOrEpicInformations = function (param1) {
            _super.prototype.serializeAs_CharacterBaseInformations.call(this, param1);
            param1.writeByte(this.deathState);
            if (this.deathCount < 0) {
                throw new Error('Forbidden value (' + this.deathCount + ') on element deathCount.');
            }
            param1.writeVarShort(this.deathCount);
            if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
                throw new Error('Forbidden value (' + this.deathMaxLevel + ') on element deathMaxLevel.');
            }
            param1.writeByte(this.deathMaxLevel);
        };
        CharacterHardcoreOrEpicInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterHardcoreOrEpicInformations(param1);
        };
        CharacterHardcoreOrEpicInformations.prototype.deserializeAs_CharacterHardcoreOrEpicInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.deathState = param1.readByte();
            if (this.deathState < 0) {
                throw new Error('Forbidden value (' + this.deathState + ') on element of CharacterHardcoreOrEpicInformations.deathState.');
            }
            this.deathCount = param1.readVarUhShort();
            if (this.deathCount < 0) {
                throw new Error('Forbidden value (' + this.deathCount + ') on element of CharacterHardcoreOrEpicInformations.deathCount.');
            }
            this.deathMaxLevel = param1.readUnsignedByte();
            if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
                throw new Error('Forbidden value (' + this.deathMaxLevel + ') on element of CharacterHardcoreOrEpicInformations.deathMaxLevel.');
            }
        };
        CharacterHardcoreOrEpicInformations.ID = 474;
        return CharacterHardcoreOrEpicInformations;
    })(CharacterBaseInformations);
    Protocol.CharacterHardcoreOrEpicInformations = CharacterHardcoreOrEpicInformations;
    var CharacterRemodelingInformation = (function (_super) {
        __extends(CharacterRemodelingInformation, _super);
        function CharacterRemodelingInformation() {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
            _super.call(this);
        }
        CharacterRemodelingInformation.prototype.getTypeId = function () {
            return CharacterRemodelingInformation.ID;
        };
        CharacterRemodelingInformation.prototype.reset = function () {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
        };
        CharacterRemodelingInformation.prototype.serialize = function (param1) {
            this.serializeAs_CharacterRemodelingInformation(param1);
        };
        CharacterRemodelingInformation.prototype.serializeAs_CharacterRemodelingInformation = function (param1) {
            _super.prototype.serializeAs_AbstractCharacterInformation.call(this, param1);
            param1.writeUTF(this.name);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
            }
            param1.writeVarShort(this.cosmeticId);
            param1.writeShort(this.colors.length);
            var _loc2_ = 0;
            while (_loc2_ < this.colors.length) {
                param1.writeInt(this.colors[_loc2_]);
                _loc2_++;
            }
        };
        CharacterRemodelingInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterRemodelingInformation(param1);
        };
        CharacterRemodelingInformation.prototype.deserializeAs_CharacterRemodelingInformation = function (param1) {
            var _loc4_ = 0;
            _super.prototype.deserialize.call(this, param1);
            this.name = param1.readUTF();
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
            this.cosmeticId = param1.readVarUhShort();
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element of CharacterRemodelingInformation.cosmeticId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.colors.push(_loc4_);
                _loc3_++;
            }
        };
        CharacterRemodelingInformation.ID = 479;
        return CharacterRemodelingInformation;
    })(AbstractCharacterInformation);
    Protocol.CharacterRemodelingInformation = CharacterRemodelingInformation;
    var CharacterToRecolorInformation = (function (_super) {
        __extends(CharacterToRecolorInformation, _super);
        function CharacterToRecolorInformation() {
            _super.call(this);
        }
        CharacterToRecolorInformation.prototype.getTypeId = function () {
            return CharacterToRecolorInformation.ID;
        };
        CharacterToRecolorInformation.prototype.reset = function () {
        };
        CharacterToRecolorInformation.prototype.serialize = function (param1) {
            this.serializeAs_CharacterToRecolorInformation(param1);
        };
        CharacterToRecolorInformation.prototype.serializeAs_CharacterToRecolorInformation = function (param1) {
            _super.prototype.serializeAs_AbstractCharacterToRefurbishInformation.call(this, param1);
        };
        CharacterToRecolorInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterToRecolorInformation(param1);
        };
        CharacterToRecolorInformation.prototype.deserializeAs_CharacterToRecolorInformation = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        CharacterToRecolorInformation.ID = 212;
        return CharacterToRecolorInformation;
    })(AbstractCharacterToRefurbishInformation);
    Protocol.CharacterToRecolorInformation = CharacterToRecolorInformation;
    var CharacterToRelookInformation = (function (_super) {
        __extends(CharacterToRelookInformation, _super);
        function CharacterToRelookInformation() {
            _super.call(this);
        }
        CharacterToRelookInformation.prototype.getTypeId = function () {
            return CharacterToRelookInformation.ID;
        };
        CharacterToRelookInformation.prototype.reset = function () {
        };
        CharacterToRelookInformation.prototype.serialize = function (param1) {
            this.serializeAs_CharacterToRelookInformation(param1);
        };
        CharacterToRelookInformation.prototype.serializeAs_CharacterToRelookInformation = function (param1) {
            _super.prototype.serializeAs_AbstractCharacterToRefurbishInformation.call(this, param1);
        };
        CharacterToRelookInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterToRelookInformation(param1);
        };
        CharacterToRelookInformation.prototype.deserializeAs_CharacterToRelookInformation = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        CharacterToRelookInformation.ID = 399;
        return CharacterToRelookInformation;
    })(AbstractCharacterToRefurbishInformation);
    Protocol.CharacterToRelookInformation = CharacterToRelookInformation;
    var CharacterToRemodelInformations = (function (_super) {
        __extends(CharacterToRemodelInformations, _super);
        function CharacterToRemodelInformations() {
            this.possibleChangeMask = 0;
            this.mandatoryChangeMask = 0;
            _super.call(this);
        }
        CharacterToRemodelInformations.prototype.getTypeId = function () {
            return CharacterToRemodelInformations.ID;
        };
        CharacterToRemodelInformations.prototype.reset = function () {
            this.possibleChangeMask = 0;
            this.mandatoryChangeMask = 0;
        };
        CharacterToRemodelInformations.prototype.serialize = function (param1) {
            this.serializeAs_CharacterToRemodelInformations(param1);
        };
        CharacterToRemodelInformations.prototype.serializeAs_CharacterToRemodelInformations = function (param1) {
            _super.prototype.serializeAs_CharacterRemodelingInformation.call(this, param1);
            if (this.possibleChangeMask < 0) {
                throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element possibleChangeMask.');
            }
            param1.writeByte(this.possibleChangeMask);
            if (this.mandatoryChangeMask < 0) {
                throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element mandatoryChangeMask.');
            }
            param1.writeByte(this.mandatoryChangeMask);
        };
        CharacterToRemodelInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_CharacterToRemodelInformations(param1);
        };
        CharacterToRemodelInformations.prototype.deserializeAs_CharacterToRemodelInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.possibleChangeMask = param1.readByte();
            if (this.possibleChangeMask < 0) {
                throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element of CharacterToRemodelInformations.possibleChangeMask.');
            }
            this.mandatoryChangeMask = param1.readByte();
            if (this.mandatoryChangeMask < 0) {
                throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element of CharacterToRemodelInformations.mandatoryChangeMask.');
            }
        };
        CharacterToRemodelInformations.ID = 477;
        return CharacterToRemodelInformations;
    })(CharacterRemodelingInformation);
    Protocol.CharacterToRemodelInformations = CharacterToRemodelInformations;
    var RemodelingInformation = (function () {
        function RemodelingInformation() {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
        }
        RemodelingInformation.prototype.getTypeId = function () {
            return RemodelingInformation.ID;
        };
        RemodelingInformation.prototype.reset = function () {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
        };
        RemodelingInformation.prototype.serialize = function (param1) {
            this.serializeAs_RemodelingInformation(param1);
        };
        RemodelingInformation.prototype.serializeAs_RemodelingInformation = function (param1) {
            param1.writeUTF(this.name);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
            }
            param1.writeVarShort(this.cosmeticId);
            param1.writeShort(this.colors.length);
            var _loc2_ = 0;
            while (_loc2_ < this.colors.length) {
                param1.writeInt(this.colors[_loc2_]);
                _loc2_++;
            }
        };
        RemodelingInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_RemodelingInformation(param1);
        };
        RemodelingInformation.prototype.deserializeAs_RemodelingInformation = function (param1) {
            var _loc4_ = 0;
            this.name = param1.readUTF();
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
            this.cosmeticId = param1.readVarUhShort();
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element of RemodelingInformation.cosmeticId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.colors.push(_loc4_);
                _loc3_++;
            }
        };
        RemodelingInformation.ID = 480;
        return RemodelingInformation;
    })();
    Protocol.RemodelingInformation = RemodelingInformation;
    var ActorRestrictionsInformations = (function () {
        function ActorRestrictionsInformations() {
            this.cantBeAggressed = false;
            this.cantBeChallenged = false;
            this.cantTrade = false;
            this.cantBeAttackedByMutant = false;
            this.cantRun = false;
            this.forceSlowWalk = false;
            this.cantMinimize = false;
            this.cantMove = false;
            this.cantAggress = false;
            this.cantChallenge = false;
            this.cantExchange = false;
            this.cantAttack = false;
            this.cantChat = false;
            this.cantBeMerchant = false;
            this.cantUseObject = false;
            this.cantUseTaxCollector = false;
            this.cantUseInteractive = false;
            this.cantSpeakToNPC = false;
            this.cantChangeZone = false;
            this.cantAttackMonster = false;
            this.cantWalk8Directions = false;
        }
        ActorRestrictionsInformations.prototype.getTypeId = function () {
            return ActorRestrictionsInformations.ID;
        };
        ActorRestrictionsInformations.prototype.reset = function () {
            this.cantBeAggressed = false;
            this.cantBeChallenged = false;
            this.cantTrade = false;
            this.cantBeAttackedByMutant = false;
            this.cantRun = false;
            this.forceSlowWalk = false;
            this.cantMinimize = false;
            this.cantMove = false;
            this.cantAggress = false;
            this.cantChallenge = false;
            this.cantExchange = false;
            this.cantAttack = false;
            this.cantChat = false;
            this.cantBeMerchant = false;
            this.cantUseObject = false;
            this.cantUseTaxCollector = false;
            this.cantUseInteractive = false;
            this.cantSpeakToNPC = false;
            this.cantChangeZone = false;
            this.cantAttackMonster = false;
            this.cantWalk8Directions = false;
        };
        ActorRestrictionsInformations.prototype.serialize = function (param1) {
            this.serializeAs_ActorRestrictionsInformations(param1);
        };
        ActorRestrictionsInformations.prototype.serializeAs_ActorRestrictionsInformations = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.cantBeAggressed);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.cantBeChallenged);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.cantTrade);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.cantBeAttackedByMutant);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.cantRun);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 5, this.forceSlowWalk);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 6, this.cantMinimize);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 7, this.cantMove);
            param1.writeByte(_loc2_);
            var _loc3_ = 0;
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 0, this.cantAggress);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 1, this.cantChallenge);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 2, this.cantExchange);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 3, this.cantAttack);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 4, this.cantChat);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 5, this.cantBeMerchant);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 6, this.cantUseObject);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 7, this.cantUseTaxCollector);
            param1.writeByte(_loc3_);
            var _loc4_ = 0;
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 0, this.cantUseInteractive);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 1, this.cantSpeakToNPC);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 2, this.cantChangeZone);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 3, this.cantAttackMonster);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 4, this.cantWalk8Directions);
            param1.writeByte(_loc4_);
        };
        ActorRestrictionsInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_ActorRestrictionsInformations(param1);
        };
        ActorRestrictionsInformations.prototype.deserializeAs_ActorRestrictionsInformations = function (param1) {
            var _loc2_ = param1.readByte();
            this.cantBeAggressed = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.cantBeChallenged = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.cantTrade = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.cantBeAttackedByMutant = BooleanByteWrapper.getFlag(_loc2_, 3);
            this.cantRun = BooleanByteWrapper.getFlag(_loc2_, 4);
            this.forceSlowWalk = BooleanByteWrapper.getFlag(_loc2_, 5);
            this.cantMinimize = BooleanByteWrapper.getFlag(_loc2_, 6);
            this.cantMove = BooleanByteWrapper.getFlag(_loc2_, 7);
            var _loc3_ = param1.readByte();
            this.cantAggress = BooleanByteWrapper.getFlag(_loc3_, 0);
            this.cantChallenge = BooleanByteWrapper.getFlag(_loc3_, 1);
            this.cantExchange = BooleanByteWrapper.getFlag(_loc3_, 2);
            this.cantAttack = BooleanByteWrapper.getFlag(_loc3_, 3);
            this.cantChat = BooleanByteWrapper.getFlag(_loc3_, 4);
            this.cantBeMerchant = BooleanByteWrapper.getFlag(_loc3_, 5);
            this.cantUseObject = BooleanByteWrapper.getFlag(_loc3_, 6);
            this.cantUseTaxCollector = BooleanByteWrapper.getFlag(_loc3_, 7);
            var _loc4_ = param1.readByte();
            this.cantUseInteractive = BooleanByteWrapper.getFlag(_loc4_, 0);
            this.cantSpeakToNPC = BooleanByteWrapper.getFlag(_loc4_, 1);
            this.cantChangeZone = BooleanByteWrapper.getFlag(_loc4_, 2);
            this.cantAttackMonster = BooleanByteWrapper.getFlag(_loc4_, 3);
            this.cantWalk8Directions = BooleanByteWrapper.getFlag(_loc4_, 4);
        };
        ActorRestrictionsInformations.ID = 204;
        return ActorRestrictionsInformations;
    })();
    Protocol.ActorRestrictionsInformations = ActorRestrictionsInformations;
    var PlayerStatus = (function () {
        function PlayerStatus() {
            this.statusId = 1;
        }
        PlayerStatus.prototype.getTypeId = function () {
            return PlayerStatus.ID;
        };
        PlayerStatus.prototype.reset = function () {
            this.statusId = 1;
        };
        PlayerStatus.prototype.serialize = function (param1) {
            this.serializeAs_PlayerStatus(param1);
        };
        PlayerStatus.prototype.serializeAs_PlayerStatus = function (param1) {
            param1.writeByte(this.statusId);
        };
        PlayerStatus.prototype.deserialize = function (param1) {
            this.deserializeAs_PlayerStatus(param1);
        };
        PlayerStatus.prototype.deserializeAs_PlayerStatus = function (param1) {
            this.statusId = param1.readByte();
            if (this.statusId < 0) {
                throw new Error('Forbidden value (' + this.statusId + ') on element of PlayerStatus.statusId.');
            }
        };
        PlayerStatus.ID = 415;
        return PlayerStatus;
    })();
    Protocol.PlayerStatus = PlayerStatus;
    var PlayerStatusExtended = (function (_super) {
        __extends(PlayerStatusExtended, _super);
        function PlayerStatusExtended() {
            this.message = '';
            _super.call(this);
        }
        PlayerStatusExtended.prototype.getTypeId = function () {
            return PlayerStatusExtended.ID;
        };
        PlayerStatusExtended.prototype.reset = function () {
            this.message = '';
        };
        PlayerStatusExtended.prototype.serialize = function (param1) {
            this.serializeAs_PlayerStatusExtended(param1);
        };
        PlayerStatusExtended.prototype.serializeAs_PlayerStatusExtended = function (param1) {
            _super.prototype.serializeAs_PlayerStatus.call(this, param1);
            param1.writeUTF(this.message);
        };
        PlayerStatusExtended.prototype.deserialize = function (param1) {
            this.deserializeAs_PlayerStatusExtended(param1);
        };
        PlayerStatusExtended.prototype.deserializeAs_PlayerStatusExtended = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.message = param1.readUTF();
        };
        PlayerStatusExtended.ID = 414;
        return PlayerStatusExtended;
    })(PlayerStatus);
    Protocol.PlayerStatusExtended = PlayerStatusExtended;
    var ActorOrientation = (function () {
        function ActorOrientation() {
            this.id = 0;
            this.direction = 1;
        }
        ActorOrientation.prototype.getTypeId = function () {
            return ActorOrientation.ID;
        };
        ActorOrientation.prototype.reset = function () {
            this.id = 0;
            this.direction = 1;
        };
        ActorOrientation.prototype.serialize = function (param1) {
            this.serializeAs_ActorOrientation(param1);
        };
        ActorOrientation.prototype.serializeAs_ActorOrientation = function (param1) {
            param1.writeInt(this.id);
            param1.writeByte(this.direction);
        };
        ActorOrientation.prototype.deserialize = function (param1) {
            this.deserializeAs_ActorOrientation(param1);
        };
        ActorOrientation.prototype.deserializeAs_ActorOrientation = function (param1) {
            this.id = param1.readInt();
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of ActorOrientation.direction.');
            }
        };
        ActorOrientation.ID = 353;
        return ActorOrientation;
    })();
    Protocol.ActorOrientation = ActorOrientation;
    var EntityDispositionInformations = (function () {
        function EntityDispositionInformations() {
            this.cellId = 0;
            this.direction = 1;
        }
        EntityDispositionInformations.prototype.getTypeId = function () {
            return EntityDispositionInformations.ID;
        };
        EntityDispositionInformations.prototype.reset = function () {
            this.cellId = 0;
            this.direction = 1;
        };
        EntityDispositionInformations.prototype.serialize = function (param1) {
            this.serializeAs_EntityDispositionInformations(param1);
        };
        EntityDispositionInformations.prototype.serializeAs_EntityDispositionInformations = function (param1) {
            if (this.cellId < -1 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
            }
            param1.writeShort(this.cellId);
            param1.writeByte(this.direction);
        };
        EntityDispositionInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_EntityDispositionInformations(param1);
        };
        EntityDispositionInformations.prototype.deserializeAs_EntityDispositionInformations = function (param1) {
            this.cellId = param1.readShort();
            if (this.cellId < -1 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element of EntityDispositionInformations.cellId.');
            }
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of EntityDispositionInformations.direction.');
            }
        };
        EntityDispositionInformations.ID = 60;
        return EntityDispositionInformations;
    })();
    Protocol.EntityDispositionInformations = EntityDispositionInformations;
    var EntityMovementInformations = (function () {
        function EntityMovementInformations() {
            this.id = 0;
            this.steps = [];
        }
        EntityMovementInformations.prototype.getTypeId = function () {
            return EntityMovementInformations.ID;
        };
        EntityMovementInformations.prototype.reset = function () {
            this.id = 0;
            this.steps = [];
        };
        EntityMovementInformations.prototype.serialize = function (param1) {
            this.serializeAs_EntityMovementInformations(param1);
        };
        EntityMovementInformations.prototype.serializeAs_EntityMovementInformations = function (param1) {
            param1.writeInt(this.id);
            param1.writeShort(this.steps.length);
            var _loc2_ = 0;
            while (_loc2_ < this.steps.length) {
                param1.writeByte(this.steps[_loc2_]);
                _loc2_++;
            }
        };
        EntityMovementInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_EntityMovementInformations(param1);
        };
        EntityMovementInformations.prototype.deserializeAs_EntityMovementInformations = function (param1) {
            var _loc4_ = 0;
            this.id = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.steps.push(_loc4_);
                _loc3_++;
            }
        };
        EntityMovementInformations.ID = 63;
        return EntityMovementInformations;
    })();
    Protocol.EntityMovementInformations = EntityMovementInformations;
    var FightEntityDispositionInformations = (function (_super) {
        __extends(FightEntityDispositionInformations, _super);
        function FightEntityDispositionInformations() {
            this.carryingCharacterId = 0;
            _super.call(this);
        }
        FightEntityDispositionInformations.prototype.getTypeId = function () {
            return FightEntityDispositionInformations.ID;
        };
        FightEntityDispositionInformations.prototype.reset = function () {
            this.carryingCharacterId = 0;
        };
        FightEntityDispositionInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightEntityDispositionInformations(param1);
        };
        FightEntityDispositionInformations.prototype.serializeAs_FightEntityDispositionInformations = function (param1) {
            _super.prototype.serializeAs_EntityDispositionInformations.call(this, param1);
            param1.writeInt(this.carryingCharacterId);
        };
        FightEntityDispositionInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightEntityDispositionInformations(param1);
        };
        FightEntityDispositionInformations.prototype.deserializeAs_FightEntityDispositionInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.carryingCharacterId = param1.readInt();
        };
        FightEntityDispositionInformations.ID = 217;
        return FightEntityDispositionInformations;
    })(EntityDispositionInformations);
    Protocol.FightEntityDispositionInformations = FightEntityDispositionInformations;
    var GameContextActorInformations = (function () {
        function GameContextActorInformations() {
            this.contextualId = 0;
            this.look = new EntityLook();
            this.disposition = new EntityDispositionInformations();
        }
        GameContextActorInformations.prototype.getTypeId = function () {
            return GameContextActorInformations.ID;
        };
        GameContextActorInformations.prototype.reset = function () {
            this.contextualId = 0;
            this.look = new EntityLook();
            this.disposition = new EntityDispositionInformations();
        };
        GameContextActorInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameContextActorInformations(param1);
        };
        GameContextActorInformations.prototype.serializeAs_GameContextActorInformations = function (param1) {
            param1.writeInt(this.contextualId);
            this.look.serializeAs_EntityLook(param1);
            param1.writeShort(this.disposition.getTypeId());
            this.disposition.serialize(param1);
        };
        GameContextActorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameContextActorInformations(param1);
        };
        GameContextActorInformations.prototype.deserializeAs_GameContextActorInformations = function (param1) {
            this.contextualId = param1.readInt();
            this.look = new EntityLook();
            this.look.deserialize(param1);
            var _loc2_ = param1.readUnsignedShort();
            this.disposition = ProtocolTypeManager.getInstance(EntityDispositionInformations, _loc2_);
            this.disposition.deserialize(param1);
        };
        GameContextActorInformations.ID = 150;
        return GameContextActorInformations;
    })();
    Protocol.GameContextActorInformations = GameContextActorInformations;
    var GameRolePlayTaxCollectorInformations = (function (_super) {
        __extends(GameRolePlayTaxCollectorInformations, _super);
        function GameRolePlayTaxCollectorInformations() {
            this.identification = new TaxCollectorStaticInformations();
            this.guildLevel = 0;
            this.taxCollectorAttack = 0;
            _super.call(this);
        }
        GameRolePlayTaxCollectorInformations.prototype.getTypeId = function () {
            return GameRolePlayTaxCollectorInformations.ID;
        };
        GameRolePlayTaxCollectorInformations.prototype.reset = function () {
            this.identification = new TaxCollectorStaticInformations();
            this.guildLevel = 0;
            this.taxCollectorAttack = 0;
        };
        GameRolePlayTaxCollectorInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayTaxCollectorInformations(param1);
        };
        GameRolePlayTaxCollectorInformations.prototype.serializeAs_GameRolePlayTaxCollectorInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
            param1.writeShort(this.identification.getTypeId());
            this.identification.serialize(param1);
            if (this.guildLevel < 0 || this.guildLevel > 255) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
            }
            param1.writeByte(this.guildLevel);
            param1.writeInt(this.taxCollectorAttack);
        };
        GameRolePlayTaxCollectorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayTaxCollectorInformations(param1);
        };
        GameRolePlayTaxCollectorInformations.prototype.deserializeAs_GameRolePlayTaxCollectorInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            this.identification = ProtocolTypeManager.getInstance(TaxCollectorStaticInformations, _loc2_);
            this.identification.deserialize(param1);
            this.guildLevel = param1.readUnsignedByte();
            if (this.guildLevel < 0 || this.guildLevel > 255) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element of GameRolePlayTaxCollectorInformations.guildLevel.');
            }
            this.taxCollectorAttack = param1.readInt();
        };
        GameRolePlayTaxCollectorInformations.ID = 148;
        return GameRolePlayTaxCollectorInformations;
    })(GameRolePlayActorInformations);
    Protocol.GameRolePlayTaxCollectorInformations = GameRolePlayTaxCollectorInformations;
    var IdentifiedEntityDispositionInformations = (function (_super) {
        __extends(IdentifiedEntityDispositionInformations, _super);
        function IdentifiedEntityDispositionInformations() {
            this.id = 0;
            _super.call(this);
        }
        IdentifiedEntityDispositionInformations.prototype.getTypeId = function () {
            return IdentifiedEntityDispositionInformations.ID;
        };
        IdentifiedEntityDispositionInformations.prototype.reset = function () {
            this.id = 0;
        };
        IdentifiedEntityDispositionInformations.prototype.serialize = function (param1) {
            this.serializeAs_IdentifiedEntityDispositionInformations(param1);
        };
        IdentifiedEntityDispositionInformations.prototype.serializeAs_IdentifiedEntityDispositionInformations = function (param1) {
            _super.prototype.serializeAs_EntityDispositionInformations.call(this, param1);
            param1.writeInt(this.id);
        };
        IdentifiedEntityDispositionInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_IdentifiedEntityDispositionInformations(param1);
        };
        IdentifiedEntityDispositionInformations.prototype.deserializeAs_IdentifiedEntityDispositionInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.id = param1.readInt();
        };
        IdentifiedEntityDispositionInformations.ID = 107;
        return IdentifiedEntityDispositionInformations;
    })(EntityDispositionInformations);
    Protocol.IdentifiedEntityDispositionInformations = IdentifiedEntityDispositionInformations;
    var MapCoordinates = (function () {
        function MapCoordinates() {
            this.worldX = 0;
            this.worldY = 0;
        }
        MapCoordinates.prototype.getTypeId = function () {
            return MapCoordinates.ID;
        };
        MapCoordinates.prototype.reset = function () {
            this.worldX = 0;
            this.worldY = 0;
        };
        MapCoordinates.prototype.serialize = function (param1) {
            this.serializeAs_MapCoordinates(param1);
        };
        MapCoordinates.prototype.serializeAs_MapCoordinates = function (param1) {
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
        };
        MapCoordinates.prototype.deserialize = function (param1) {
            this.deserializeAs_MapCoordinates(param1);
        };
        MapCoordinates.prototype.deserializeAs_MapCoordinates = function (param1) {
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of MapCoordinates.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of MapCoordinates.worldY.');
            }
        };
        MapCoordinates.ID = 174;
        return MapCoordinates;
    })();
    Protocol.MapCoordinates = MapCoordinates;
    var MapCoordinatesAndId = (function (_super) {
        __extends(MapCoordinatesAndId, _super);
        function MapCoordinatesAndId() {
            this.mapId = 0;
            _super.call(this);
        }
        MapCoordinatesAndId.prototype.getTypeId = function () {
            return MapCoordinatesAndId.ID;
        };
        MapCoordinatesAndId.prototype.reset = function () {
            this.mapId = 0;
        };
        MapCoordinatesAndId.prototype.serialize = function (param1) {
            this.serializeAs_MapCoordinatesAndId(param1);
        };
        MapCoordinatesAndId.prototype.serializeAs_MapCoordinatesAndId = function (param1) {
            _super.prototype.serializeAs_MapCoordinates.call(this, param1);
            param1.writeInt(this.mapId);
        };
        MapCoordinatesAndId.prototype.deserialize = function (param1) {
            this.deserializeAs_MapCoordinatesAndId(param1);
        };
        MapCoordinatesAndId.prototype.deserializeAs_MapCoordinatesAndId = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.mapId = param1.readInt();
        };
        MapCoordinatesAndId.ID = 392;
        return MapCoordinatesAndId;
    })(MapCoordinates);
    Protocol.MapCoordinatesAndId = MapCoordinatesAndId;
    var MapCoordinatesExtended = (function (_super) {
        __extends(MapCoordinatesExtended, _super);
        function MapCoordinatesExtended() {
            this.subAreaId = 0;
            _super.call(this);
        }
        MapCoordinatesExtended.prototype.getTypeId = function () {
            return MapCoordinatesExtended.ID;
        };
        MapCoordinatesExtended.prototype.reset = function () {
            this.subAreaId = 0;
        };
        MapCoordinatesExtended.prototype.serialize = function (param1) {
            this.serializeAs_MapCoordinatesExtended(param1);
        };
        MapCoordinatesExtended.prototype.serializeAs_MapCoordinatesExtended = function (param1) {
            _super.prototype.serializeAs_MapCoordinatesAndId.call(this, param1);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
        };
        MapCoordinatesExtended.prototype.deserialize = function (param1) {
            this.deserializeAs_MapCoordinatesExtended(param1);
        };
        MapCoordinatesExtended.prototype.deserializeAs_MapCoordinatesExtended = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of MapCoordinatesExtended.subAreaId.');
            }
        };
        MapCoordinatesExtended.ID = 176;
        return MapCoordinatesExtended;
    })(MapCoordinatesAndId);
    Protocol.MapCoordinatesExtended = MapCoordinatesExtended;
    var TaxCollectorStaticExtendedInformations = (function (_super) {
        __extends(TaxCollectorStaticExtendedInformations, _super);
        function TaxCollectorStaticExtendedInformations() {
            this.allianceIdentity = new AllianceInformations();
            _super.call(this);
        }
        TaxCollectorStaticExtendedInformations.prototype.getTypeId = function () {
            return TaxCollectorStaticExtendedInformations.ID;
        };
        TaxCollectorStaticExtendedInformations.prototype.reset = function () {
            this.allianceIdentity = new AllianceInformations();
        };
        TaxCollectorStaticExtendedInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorStaticExtendedInformations(param1);
        };
        TaxCollectorStaticExtendedInformations.prototype.serializeAs_TaxCollectorStaticExtendedInformations = function (param1) {
            _super.prototype.serializeAs_TaxCollectorStaticInformations.call(this, param1);
            this.allianceIdentity.serializeAs_AllianceInformations(param1);
        };
        TaxCollectorStaticExtendedInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorStaticExtendedInformations(param1);
        };
        TaxCollectorStaticExtendedInformations.prototype.deserializeAs_TaxCollectorStaticExtendedInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceIdentity = new AllianceInformations();
            this.allianceIdentity.deserialize(param1);
        };
        TaxCollectorStaticExtendedInformations.ID = 440;
        return TaxCollectorStaticExtendedInformations;
    })(TaxCollectorStaticInformations);
    Protocol.TaxCollectorStaticExtendedInformations = TaxCollectorStaticExtendedInformations;
    var TaxCollectorStaticInformations = (function () {
        function TaxCollectorStaticInformations() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.guildIdentity = new GuildInformations();
        }
        TaxCollectorStaticInformations.prototype.getTypeId = function () {
            return TaxCollectorStaticInformations.ID;
        };
        TaxCollectorStaticInformations.prototype.reset = function () {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.guildIdentity = new GuildInformations();
        };
        TaxCollectorStaticInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorStaticInformations(param1);
        };
        TaxCollectorStaticInformations.prototype.serializeAs_TaxCollectorStaticInformations = function (param1) {
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
            }
            param1.writeVarShort(this.firstNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);
            this.guildIdentity.serializeAs_GuildInformations(param1);
        };
        TaxCollectorStaticInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorStaticInformations(param1);
        };
        TaxCollectorStaticInformations.prototype.deserializeAs_TaxCollectorStaticInformations = function (param1) {
            this.firstNameId = param1.readVarUhShort();
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element of TaxCollectorStaticInformations.firstNameId.');
            }
            this.lastNameId = param1.readVarUhShort();
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorStaticInformations.lastNameId.');
            }
            this.guildIdentity = new GuildInformations();
            this.guildIdentity.deserialize(param1);
        };
        TaxCollectorStaticInformations.ID = 147;
        return TaxCollectorStaticInformations;
    })();
    Protocol.TaxCollectorStaticInformations = TaxCollectorStaticInformations;
    var AbstractFightTeamInformations = (function () {
        function AbstractFightTeamInformations() {
            this.teamId = 2;
            this.leaderId = 0;
            this.teamSide = 0;
            this.teamTypeId = 0;
            this.nbWaves = 0;
        }
        AbstractFightTeamInformations.prototype.getTypeId = function () {
            return AbstractFightTeamInformations.ID;
        };
        AbstractFightTeamInformations.prototype.reset = function () {
            this.teamId = 2;
            this.leaderId = 0;
            this.teamSide = 0;
            this.teamTypeId = 0;
            this.nbWaves = 0;
        };
        AbstractFightTeamInformations.prototype.serialize = function (param1) {
            this.serializeAs_AbstractFightTeamInformations(param1);
        };
        AbstractFightTeamInformations.prototype.serializeAs_AbstractFightTeamInformations = function (param1) {
            param1.writeByte(this.teamId);
            param1.writeInt(this.leaderId);
            param1.writeByte(this.teamSide);
            param1.writeByte(this.teamTypeId);
            if (this.nbWaves < 0) {
                throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
            }
            param1.writeByte(this.nbWaves);
        };
        AbstractFightTeamInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AbstractFightTeamInformations(param1);
        };
        AbstractFightTeamInformations.prototype.deserializeAs_AbstractFightTeamInformations = function (param1) {
            this.teamId = param1.readByte();
            if (this.teamId < 0) {
                throw new Error('Forbidden value (' + this.teamId + ') on element of AbstractFightTeamInformations.teamId.');
            }
            this.leaderId = param1.readInt();
            this.teamSide = param1.readByte();
            this.teamTypeId = param1.readByte();
            if (this.teamTypeId < 0) {
                throw new Error('Forbidden value (' + this.teamTypeId + ') on element of AbstractFightTeamInformations.teamTypeId.');
            }
            this.nbWaves = param1.readByte();
            if (this.nbWaves < 0) {
                throw new Error('Forbidden value (' + this.nbWaves + ') on element of AbstractFightTeamInformations.nbWaves.');
            }
        };
        AbstractFightTeamInformations.ID = 116;
        return AbstractFightTeamInformations;
    })();
    Protocol.AbstractFightTeamInformations = AbstractFightTeamInformations;
    var FightAllianceTeamInformations = (function (_super) {
        __extends(FightAllianceTeamInformations, _super);
        function FightAllianceTeamInformations() {
            this.relation = 0;
            _super.call(this);
        }
        FightAllianceTeamInformations.prototype.getTypeId = function () {
            return FightAllianceTeamInformations.ID;
        };
        FightAllianceTeamInformations.prototype.reset = function () {
            this.relation = 0;
        };
        FightAllianceTeamInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightAllianceTeamInformations(param1);
        };
        FightAllianceTeamInformations.prototype.serializeAs_FightAllianceTeamInformations = function (param1) {
            _super.prototype.serializeAs_FightTeamInformations.call(this, param1);
            param1.writeByte(this.relation);
        };
        FightAllianceTeamInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightAllianceTeamInformations(param1);
        };
        FightAllianceTeamInformations.prototype.deserializeAs_FightAllianceTeamInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.relation = param1.readByte();
            if (this.relation < 0) {
                throw new Error('Forbidden value (' + this.relation + ') on element of FightAllianceTeamInformations.relation.');
            }
        };
        FightAllianceTeamInformations.ID = 439;
        return FightAllianceTeamInformations;
    })(FightTeamInformations);
    Protocol.FightAllianceTeamInformations = FightAllianceTeamInformations;
    var FightCommonInformations = (function () {
        function FightCommonInformations() {
            this.fightId = 0;
            this.fightType = 0;
            this.fightTeams = [];
            this.fightTeamsPositions = [];
            this.fightTeamsOptions = [];
        }
        FightCommonInformations.prototype.getTypeId = function () {
            return FightCommonInformations.ID;
        };
        FightCommonInformations.prototype.reset = function () {
            this.fightId = 0;
            this.fightType = 0;
            this.fightTeams = [];
            this.fightTeamsPositions = [];
            this.fightTeamsOptions = [];
        };
        FightCommonInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightCommonInformations(param1);
        };
        FightCommonInformations.prototype.serializeAs_FightCommonInformations = function (param1) {
            param1.writeInt(this.fightId);
            param1.writeByte(this.fightType);
            param1.writeShort(this.fightTeams.length);
            var _loc2_ = 0;
            while (_loc2_ < this.fightTeams.length) {
                param1.writeShort((this.fightTeams[_loc2_]).getTypeId());
                (this.fightTeams[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.fightTeamsPositions.length);
            var _loc3_ = 0;
            while (_loc3_ < this.fightTeamsPositions.length) {
                if (this.fightTeamsPositions[_loc3_] < 0 || this.fightTeamsPositions[_loc3_] > 559) {
                    throw new Error('Forbidden value (' + this.fightTeamsPositions[_loc3_] + ') on element 4 (starting at 1) of fightTeamsPositions.');
                }
                param1.writeVarShort(this.fightTeamsPositions[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.fightTeamsOptions.length);
            var _loc4_ = 0;
            while (_loc4_ < this.fightTeamsOptions.length) {
                (this.fightTeamsOptions[_loc4_]).serializeAs_FightOptionsInformations(param1);
                _loc4_++;
            }
        };
        FightCommonInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightCommonInformations(param1);
        };
        FightCommonInformations.prototype.deserializeAs_FightCommonInformations = function (param1) {
            var _loc8_ = 0;
            var _loc9_ = null;
            var _loc10_ = 0;
            var _loc11_ = null;
            this.fightId = param1.readInt();
            this.fightType = param1.readByte();
            if (this.fightType < 0) {
                throw new Error('Forbidden value (' + this.fightType + ') on element of FightCommonInformations.fightType.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = ProtocolTypeManager.getInstance(FightTeamInformations, _loc8_);
                _loc9_.deserialize(param1);
                this.fightTeams.push(_loc9_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc10_ = param1.readVarUhShort();
                if (_loc10_ < 0 || _loc10_ > 559) {
                    throw new Error('Forbidden value (' + _loc10_ + ') on elements of fightTeamsPositions.');
                }
                this.fightTeamsPositions.push(_loc10_);
                _loc5_++;
            }
            var _loc6_ = param1.readUnsignedShort();
            var _loc7_ = 0;
            while (_loc7_ < _loc6_) {
                _loc11_ = new FightOptionsInformations();
                _loc11_.deserialize(param1);
                this.fightTeamsOptions.push(_loc11_);
                _loc7_++;
            }
        };
        FightCommonInformations.ID = 43;
        return FightCommonInformations;
    })();
    Protocol.FightCommonInformations = FightCommonInformations;
    var FightExternalInformations = (function () {
        function FightExternalInformations() {
            this.fightId = 0;
            this.fightType = 0;
            this.fightStart = 0;
            this.fightSpectatorLocked = false;
            this.fightTeams = [];
            this.fightTeamsOptions = [];
        }
        FightExternalInformations.prototype.getTypeId = function () {
            return FightExternalInformations.ID;
        };
        FightExternalInformations.prototype.reset = function () {
            this.fightId = 0;
            this.fightType = 0;
            this.fightStart = 0;
            this.fightSpectatorLocked = false;
            this.fightTeams = [];
            this.fightTeamsOptions = [];
        };
        FightExternalInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightExternalInformations(param1);
        };
        FightExternalInformations.prototype.serializeAs_FightExternalInformations = function (param1) {
            param1.writeInt(this.fightId);
            param1.writeByte(this.fightType);
            if (this.fightStart < 0) {
                throw new Error('Forbidden value (' + this.fightStart + ') on element fightStart.');
            }
            param1.writeInt(this.fightStart);
            param1.writeBoolean(this.fightSpectatorLocked);
            var _loc2_ = 0;
            while (_loc2_ < 2) {
                this.fightTeams[_loc2_].serializeAs_FightTeamLightInformations(param1);
                _loc2_++;
            }
            var _loc3_ = 0;
            while (_loc3_ < 2) {
                this.fightTeamsOptions[_loc3_].serializeAs_FightOptionsInformations(param1);
                _loc3_++;
            }
        };
        FightExternalInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightExternalInformations(param1);
        };
        FightExternalInformations.prototype.deserializeAs_FightExternalInformations = function (param1) {
            this.fightId = param1.readInt();
            this.fightType = param1.readByte();
            if (this.fightType < 0) {
                throw new Error('Forbidden value (' + this.fightType + ') on element of FightExternalInformations.fightType.');
            }
            this.fightStart = param1.readInt();
            if (this.fightStart < 0) {
                throw new Error('Forbidden value (' + this.fightStart + ') on element of FightExternalInformations.fightStart.');
            }
            this.fightSpectatorLocked = param1.readBoolean();
            var _loc2_ = 0;
            while (_loc2_ < 2) {
                this.fightTeams[_loc2_] = new FightTeamLightInformations();
                this.fightTeams[_loc2_].deserialize(param1);
                _loc2_++;
            }
            var _loc3_ = 0;
            while (_loc3_ < 2) {
                this.fightTeamsOptions[_loc3_] = new FightOptionsInformations();
                this.fightTeamsOptions[_loc3_].deserialize(param1);
                _loc3_++;
            }
        };
        FightExternalInformations.ID = 117;
        return FightExternalInformations;
    })();
    Protocol.FightExternalInformations = FightExternalInformations;
    var FightLoot = (function () {
        function FightLoot() {
            this.objects = [];
            this.kamas = 0;
        }
        FightLoot.prototype.getTypeId = function () {
            return FightLoot.ID;
        };
        FightLoot.prototype.reset = function () {
            this.objects = [];
            this.kamas = 0;
        };
        FightLoot.prototype.serialize = function (param1) {
            this.serializeAs_FightLoot(param1);
        };
        FightLoot.prototype.serializeAs_FightLoot = function (param1) {
            param1.writeShort(this.objects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.objects.length) {
                if (this.objects[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.objects[_loc2_] + ') on element 1 (starting at 1) of objects.');
                }
                param1.writeVarShort(this.objects[_loc2_]);
                _loc2_++;
            }
            if (this.kamas < 0) {
                throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
            }
            param1.writeVarInt(this.kamas);
        };
        FightLoot.prototype.deserialize = function (param1) {
            this.deserializeAs_FightLoot(param1);
        };
        FightLoot.prototype.deserializeAs_FightLoot = function (param1) {
            var _loc4_ = 0;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of objects.');
                }
                this.objects.push(_loc4_);
                _loc3_++;
            }
            this.kamas = param1.readVarUhInt();
            if (this.kamas < 0) {
                throw new Error('Forbidden value (' + this.kamas + ') on element of FightLoot.kamas.');
            }
        };
        FightLoot.ID = 41;
        return FightLoot;
    })();
    Protocol.FightLoot = FightLoot;
    var FightOptionsInformations = (function () {
        function FightOptionsInformations() {
            this.isSecret = false;
            this.isRestrictedToPartyOnly = false;
            this.isClosed = false;
            this.isAskingForHelp = false;
        }
        FightOptionsInformations.prototype.getTypeId = function () {
            return FightOptionsInformations.ID;
        };
        FightOptionsInformations.prototype.reset = function () {
            this.isSecret = false;
            this.isRestrictedToPartyOnly = false;
            this.isClosed = false;
            this.isAskingForHelp = false;
        };
        FightOptionsInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightOptionsInformations(param1);
        };
        FightOptionsInformations.prototype.serializeAs_FightOptionsInformations = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isSecret);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isRestrictedToPartyOnly);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isClosed);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.isAskingForHelp);
            param1.writeByte(_loc2_);
        };
        FightOptionsInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightOptionsInformations(param1);
        };
        FightOptionsInformations.prototype.deserializeAs_FightOptionsInformations = function (param1) {
            var _loc2_ = param1.readByte();
            this.isSecret = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.isClosed = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.isAskingForHelp = BooleanByteWrapper.getFlag(_loc2_, 3);
        };
        FightOptionsInformations.ID = 20;
        return FightOptionsInformations;
    })();
    Protocol.FightOptionsInformations = FightOptionsInformations;
    var FightResultAdditionalData = (function () {
        function FightResultAdditionalData() {
        }
        FightResultAdditionalData.prototype.getTypeId = function () {
            return FightResultAdditionalData.ID;
        };
        FightResultAdditionalData.prototype.reset = function () {
        };
        FightResultAdditionalData.prototype.serialize = function (param1) {
            this.serializeAs_FightResultAdditionalData(param1);
        };
        FightResultAdditionalData.prototype.serializeAs_FightResultAdditionalData = function (param1) {
        };
        FightResultAdditionalData.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultAdditionalData(param1);
        };
        FightResultAdditionalData.prototype.deserializeAs_FightResultAdditionalData = function (param1) {
        };
        FightResultAdditionalData.ID = 191;
        return FightResultAdditionalData;
    })();
    Protocol.FightResultAdditionalData = FightResultAdditionalData;
    var FightResultExperienceData = (function (_super) {
        __extends(FightResultExperienceData, _super);
        function FightResultExperienceData() {
            this.experience = 0;
            this.showExperience = false;
            this.experienceLevelFloor = 0;
            this.showExperienceLevelFloor = false;
            this.experienceNextLevelFloor = 0;
            this.showExperienceNextLevelFloor = false;
            this.experienceFightDelta = 0;
            this.showExperienceFightDelta = false;
            this.experienceForGuild = 0;
            this.showExperienceForGuild = false;
            this.experienceForMount = 0;
            this.showExperienceForMount = false;
            this.isIncarnationExperience = false;
            this.rerollExperienceMul = 0;
            _super.call(this);
        }
        FightResultExperienceData.prototype.getTypeId = function () {
            return FightResultExperienceData.ID;
        };
        FightResultExperienceData.prototype.reset = function () {
            this.experience = 0;
            this.showExperience = false;
            this.experienceLevelFloor = 0;
            this.showExperienceLevelFloor = false;
            this.experienceNextLevelFloor = 0;
            this.showExperienceNextLevelFloor = false;
            this.experienceFightDelta = 0;
            this.showExperienceFightDelta = false;
            this.experienceForGuild = 0;
            this.showExperienceForGuild = false;
            this.experienceForMount = 0;
            this.showExperienceForMount = false;
            this.isIncarnationExperience = false;
            this.rerollExperienceMul = 0;
        };
        FightResultExperienceData.prototype.serialize = function (param1) {
            this.serializeAs_FightResultExperienceData(param1);
        };
        FightResultExperienceData.prototype.serializeAs_FightResultExperienceData = function (param1) {
            _super.prototype.serializeAs_FightResultAdditionalData.call(this, param1);
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.showExperience);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.showExperienceLevelFloor);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.showExperienceNextLevelFloor);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.showExperienceFightDelta);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.showExperienceForGuild);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 5, this.showExperienceForMount);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 6, this.isIncarnationExperience);
            param1.writeByte(_loc2_);
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element experience.');
            }
            param1.writeVarLong(this.experience);
            if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceLevelFloor + ') on element experienceLevelFloor.');
            }
            param1.writeVarLong(this.experienceLevelFloor);
            if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceNextLevelFloor + ') on element experienceNextLevelFloor.');
            }
            param1.writeDouble(this.experienceNextLevelFloor);
            param1.writeVarInt(this.experienceFightDelta);
            if (this.experienceForGuild < 0) {
                throw new Error('Forbidden value (' + this.experienceForGuild + ') on element experienceForGuild.');
            }
            param1.writeVarInt(this.experienceForGuild);
            if (this.experienceForMount < 0) {
                throw new Error('Forbidden value (' + this.experienceForMount + ') on element experienceForMount.');
            }
            param1.writeVarInt(this.experienceForMount);
            if (this.rerollExperienceMul < 0) {
                throw new Error('Forbidden value (' + this.rerollExperienceMul + ') on element rerollExperienceMul.');
            }
            param1.writeByte(this.rerollExperienceMul);
        };
        FightResultExperienceData.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultExperienceData(param1);
        };
        FightResultExperienceData.prototype.deserializeAs_FightResultExperienceData = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readByte();
            this.showExperience = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.showExperienceLevelFloor = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.showExperienceNextLevelFloor = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.showExperienceFightDelta = BooleanByteWrapper.getFlag(_loc2_, 3);
            this.showExperienceForGuild = BooleanByteWrapper.getFlag(_loc2_, 4);
            this.showExperienceForMount = BooleanByteWrapper.getFlag(_loc2_, 5);
            this.isIncarnationExperience = BooleanByteWrapper.getFlag(_loc2_, 6);
            this.experience = param1.readVarUhLong();
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element of FightResultExperienceData.experience.');
            }
            this.experienceLevelFloor = param1.readVarUhLong();
            if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceLevelFloor + ') on element of FightResultExperienceData.experienceLevelFloor.');
            }
            this.experienceNextLevelFloor = param1.readDouble();
            if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceNextLevelFloor + ') on element of FightResultExperienceData.experienceNextLevelFloor.');
            }
            this.experienceFightDelta = param1.readVarInt();
            this.experienceForGuild = param1.readVarUhInt();
            if (this.experienceForGuild < 0) {
                throw new Error('Forbidden value (' + this.experienceForGuild + ') on element of FightResultExperienceData.experienceForGuild.');
            }
            this.experienceForMount = param1.readVarUhInt();
            if (this.experienceForMount < 0) {
                throw new Error('Forbidden value (' + this.experienceForMount + ') on element of FightResultExperienceData.experienceForMount.');
            }
            this.rerollExperienceMul = param1.readByte();
            if (this.rerollExperienceMul < 0) {
                throw new Error('Forbidden value (' + this.rerollExperienceMul + ') on element of FightResultExperienceData.rerollExperienceMul.');
            }
        };
        FightResultExperienceData.ID = 192;
        return FightResultExperienceData;
    })(FightResultAdditionalData);
    Protocol.FightResultExperienceData = FightResultExperienceData;
    var FightResultFighterListEntry = (function (_super) {
        __extends(FightResultFighterListEntry, _super);
        function FightResultFighterListEntry() {
            this.id = 0;
            this.alive = false;
            _super.call(this);
        }
        FightResultFighterListEntry.prototype.getTypeId = function () {
            return FightResultFighterListEntry.ID;
        };
        FightResultFighterListEntry.prototype.reset = function () {
            this.id = 0;
            this.alive = false;
        };
        FightResultFighterListEntry.prototype.serialize = function (param1) {
            this.serializeAs_FightResultFighterListEntry(param1);
        };
        FightResultFighterListEntry.prototype.serializeAs_FightResultFighterListEntry = function (param1) {
            _super.prototype.serializeAs_FightResultListEntry.call(this, param1);
            param1.writeInt(this.id);
            param1.writeBoolean(this.alive);
        };
        FightResultFighterListEntry.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultFighterListEntry(param1);
        };
        FightResultFighterListEntry.prototype.deserializeAs_FightResultFighterListEntry = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.id = param1.readInt();
            this.alive = param1.readBoolean();
        };
        FightResultFighterListEntry.ID = 189;
        return FightResultFighterListEntry;
    })(FightResultListEntry);
    Protocol.FightResultFighterListEntry = FightResultFighterListEntry;
    var FightResultListEntry = (function () {
        function FightResultListEntry() {
            this.outcome = 0;
            this.wave = 0;
            this.rewards = new FightLoot();
        }
        FightResultListEntry.prototype.getTypeId = function () {
            return FightResultListEntry.ID;
        };
        FightResultListEntry.prototype.reset = function () {
            this.outcome = 0;
            this.wave = 0;
            this.rewards = new FightLoot();
        };
        FightResultListEntry.prototype.serialize = function (param1) {
            this.serializeAs_FightResultListEntry(param1);
        };
        FightResultListEntry.prototype.serializeAs_FightResultListEntry = function (param1) {
            param1.writeVarShort(this.outcome);
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element wave.');
            }
            param1.writeByte(this.wave);
            this.rewards.serializeAs_FightLoot(param1);
        };
        FightResultListEntry.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultListEntry(param1);
        };
        FightResultListEntry.prototype.deserializeAs_FightResultListEntry = function (param1) {
            this.outcome = param1.readVarUhShort();
            if (this.outcome < 0) {
                throw new Error('Forbidden value (' + this.outcome + ') on element of FightResultListEntry.outcome.');
            }
            this.wave = param1.readByte();
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element of FightResultListEntry.wave.');
            }
            this.rewards = new FightLoot();
            this.rewards.deserialize(param1);
        };
        FightResultListEntry.ID = 16;
        return FightResultListEntry;
    })();
    Protocol.FightResultListEntry = FightResultListEntry;
    var FightResultMutantListEntry = (function (_super) {
        __extends(FightResultMutantListEntry, _super);
        function FightResultMutantListEntry() {
            this.level = 0;
            _super.call(this);
        }
        FightResultMutantListEntry.prototype.getTypeId = function () {
            return FightResultMutantListEntry.ID;
        };
        FightResultMutantListEntry.prototype.reset = function () {
            this.level = 0;
        };
        FightResultMutantListEntry.prototype.serialize = function (param1) {
            this.serializeAs_FightResultMutantListEntry(param1);
        };
        FightResultMutantListEntry.prototype.serializeAs_FightResultMutantListEntry = function (param1) {
            _super.prototype.serializeAs_FightResultFighterListEntry.call(this, param1);
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeVarShort(this.level);
        };
        FightResultMutantListEntry.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultMutantListEntry(param1);
        };
        FightResultMutantListEntry.prototype.deserializeAs_FightResultMutantListEntry = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.level = param1.readVarUhShort();
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightResultMutantListEntry.level.');
            }
        };
        FightResultMutantListEntry.ID = 216;
        return FightResultMutantListEntry;
    })(FightResultFighterListEntry);
    Protocol.FightResultMutantListEntry = FightResultMutantListEntry;
    var FightResultPlayerListEntry = (function (_super) {
        __extends(FightResultPlayerListEntry, _super);
        function FightResultPlayerListEntry() {
            this.level = 0;
            this.additional = [];
            _super.call(this);
        }
        FightResultPlayerListEntry.prototype.getTypeId = function () {
            return FightResultPlayerListEntry.ID;
        };
        FightResultPlayerListEntry.prototype.reset = function () {
            this.level = 0;
            this.additional = [];
        };
        FightResultPlayerListEntry.prototype.serialize = function (param1) {
            this.serializeAs_FightResultPlayerListEntry(param1);
        };
        FightResultPlayerListEntry.prototype.serializeAs_FightResultPlayerListEntry = function (param1) {
            _super.prototype.serializeAs_FightResultFighterListEntry.call(this, param1);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeShort(this.additional.length);
            var _loc2_ = 0;
            while (_loc2_ < this.additional.length) {
                param1.writeShort((this.additional[_loc2_]).getTypeId());
                (this.additional[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        FightResultPlayerListEntry.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultPlayerListEntry(param1);
        };
        FightResultPlayerListEntry.prototype.deserializeAs_FightResultPlayerListEntry = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightResultPlayerListEntry.level.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(FightResultAdditionalData, _loc4_);
                _loc5_.deserialize(param1);
                this.additional.push(_loc5_);
                _loc3_++;
            }
        };
        FightResultPlayerListEntry.ID = 24;
        return FightResultPlayerListEntry;
    })(FightResultFighterListEntry);
    Protocol.FightResultPlayerListEntry = FightResultPlayerListEntry;
    var FightResultPvpData = (function (_super) {
        __extends(FightResultPvpData, _super);
        function FightResultPvpData() {
            this.grade = 0;
            this.minHonorForGrade = 0;
            this.maxHonorForGrade = 0;
            this.honor = 0;
            this.honorDelta = 0;
            _super.call(this);
        }
        FightResultPvpData.prototype.getTypeId = function () {
            return FightResultPvpData.ID;
        };
        FightResultPvpData.prototype.reset = function () {
            this.grade = 0;
            this.minHonorForGrade = 0;
            this.maxHonorForGrade = 0;
            this.honor = 0;
            this.honorDelta = 0;
        };
        FightResultPvpData.prototype.serialize = function (param1) {
            this.serializeAs_FightResultPvpData(param1);
        };
        FightResultPvpData.prototype.serializeAs_FightResultPvpData = function (param1) {
            _super.prototype.serializeAs_FightResultAdditionalData.call(this, param1);
            if (this.grade < 0 || this.grade > 255) {
                throw new Error('Forbidden value (' + this.grade + ') on element grade.');
            }
            param1.writeByte(this.grade);
            if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
                throw new Error('Forbidden value (' + this.minHonorForGrade + ') on element minHonorForGrade.');
            }
            param1.writeVarShort(this.minHonorForGrade);
            if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
                throw new Error('Forbidden value (' + this.maxHonorForGrade + ') on element maxHonorForGrade.');
            }
            param1.writeVarShort(this.maxHonorForGrade);
            if (this.honor < 0 || this.honor > 20000) {
                throw new Error('Forbidden value (' + this.honor + ') on element honor.');
            }
            param1.writeVarShort(this.honor);
            param1.writeVarShort(this.honorDelta);
        };
        FightResultPvpData.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultPvpData(param1);
        };
        FightResultPvpData.prototype.deserializeAs_FightResultPvpData = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.grade = param1.readUnsignedByte();
            if (this.grade < 0 || this.grade > 255) {
                throw new Error('Forbidden value (' + this.grade + ') on element of FightResultPvpData.grade.');
            }
            this.minHonorForGrade = param1.readVarUhShort();
            if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
                throw new Error('Forbidden value (' + this.minHonorForGrade + ') on element of FightResultPvpData.minHonorForGrade.');
            }
            this.maxHonorForGrade = param1.readVarUhShort();
            if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
                throw new Error('Forbidden value (' + this.maxHonorForGrade + ') on element of FightResultPvpData.maxHonorForGrade.');
            }
            this.honor = param1.readVarUhShort();
            if (this.honor < 0 || this.honor > 20000) {
                throw new Error('Forbidden value (' + this.honor + ') on element of FightResultPvpData.honor.');
            }
            this.honorDelta = param1.readVarShort();
        };
        FightResultPvpData.ID = 190;
        return FightResultPvpData;
    })(FightResultAdditionalData);
    Protocol.FightResultPvpData = FightResultPvpData;
    var FightResultTaxCollectorListEntry = (function (_super) {
        __extends(FightResultTaxCollectorListEntry, _super);
        function FightResultTaxCollectorListEntry() {
            this.level = 0;
            this.guildInfo = new BasicGuildInformations();
            this.experienceForGuild = 0;
            _super.call(this);
        }
        FightResultTaxCollectorListEntry.prototype.getTypeId = function () {
            return FightResultTaxCollectorListEntry.ID;
        };
        FightResultTaxCollectorListEntry.prototype.reset = function () {
            this.level = 0;
            this.guildInfo = new BasicGuildInformations();
            this.experienceForGuild = 0;
        };
        FightResultTaxCollectorListEntry.prototype.serialize = function (param1) {
            this.serializeAs_FightResultTaxCollectorListEntry(param1);
        };
        FightResultTaxCollectorListEntry.prototype.serializeAs_FightResultTaxCollectorListEntry = function (param1) {
            _super.prototype.serializeAs_FightResultFighterListEntry.call(this, param1);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            this.guildInfo.serializeAs_BasicGuildInformations(param1);
            param1.writeInt(this.experienceForGuild);
        };
        FightResultTaxCollectorListEntry.prototype.deserialize = function (param1) {
            this.deserializeAs_FightResultTaxCollectorListEntry(param1);
        };
        FightResultTaxCollectorListEntry.prototype.deserializeAs_FightResultTaxCollectorListEntry = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightResultTaxCollectorListEntry.level.');
            }
            this.guildInfo = new BasicGuildInformations();
            this.guildInfo.deserialize(param1);
            this.experienceForGuild = param1.readInt();
        };
        FightResultTaxCollectorListEntry.ID = 84;
        return FightResultTaxCollectorListEntry;
    })(FightResultFighterListEntry);
    Protocol.FightResultTaxCollectorListEntry = FightResultTaxCollectorListEntry;
    var FightTeamInformations = (function (_super) {
        __extends(FightTeamInformations, _super);
        function FightTeamInformations() {
            this.teamMembers = [];
            _super.call(this);
        }
        FightTeamInformations.prototype.getTypeId = function () {
            return FightTeamInformations.ID;
        };
        FightTeamInformations.prototype.reset = function () {
            this.teamMembers = [];
        };
        FightTeamInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamInformations(param1);
        };
        FightTeamInformations.prototype.serializeAs_FightTeamInformations = function (param1) {
            _super.prototype.serializeAs_AbstractFightTeamInformations.call(this, param1);
            param1.writeShort(this.teamMembers.length);
            var _loc2_ = 0;
            while (_loc2_ < this.teamMembers.length) {
                param1.writeShort((this.teamMembers[_loc2_]).getTypeId());
                (this.teamMembers[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        FightTeamInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamInformations(param1);
        };
        FightTeamInformations.prototype.deserializeAs_FightTeamInformations = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(FightTeamMemberInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.teamMembers.push(_loc5_);
                _loc3_++;
            }
        };
        FightTeamInformations.ID = 33;
        return FightTeamInformations;
    })(AbstractFightTeamInformations);
    Protocol.FightTeamInformations = FightTeamInformations;
    var FightTeamLightInformations = (function (_super) {
        __extends(FightTeamLightInformations, _super);
        function FightTeamLightInformations() {
            this.teamMembersCount = 0;
            this.meanLevel = 0;
            this.hasFriend = false;
            this.hasGuildMember = false;
            this.hasAllianceMember = false;
            this.hasGroupMember = false;
            this.hasMyTaxCollector = false;
            _super.call(this);
        }
        FightTeamLightInformations.prototype.getTypeId = function () {
            return FightTeamLightInformations.ID;
        };
        FightTeamLightInformations.prototype.reset = function () {
            this.teamMembersCount = 0;
            this.meanLevel = 0;
            this.hasFriend = false;
            this.hasGuildMember = false;
            this.hasAllianceMember = false;
            this.hasGroupMember = false;
            this.hasMyTaxCollector = false;
        };
        FightTeamLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamLightInformations(param1);
        };
        FightTeamLightInformations.prototype.serializeAs_FightTeamLightInformations = function (param1) {
            _super.prototype.serializeAs_AbstractFightTeamInformations.call(this, param1);
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.hasFriend);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasGuildMember);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAllianceMember);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.hasGroupMember);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.hasMyTaxCollector);
            param1.writeByte(_loc2_);
            if (this.teamMembersCount < 0) {
                throw new Error('Forbidden value (' + this.teamMembersCount + ') on element teamMembersCount.');
            }
            param1.writeByte(this.teamMembersCount);
            if (this.meanLevel < 0) {
                throw new Error('Forbidden value (' + this.meanLevel + ') on element meanLevel.');
            }
            param1.writeVarInt(this.meanLevel);
        };
        FightTeamLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamLightInformations(param1);
        };
        FightTeamLightInformations.prototype.deserializeAs_FightTeamLightInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readByte();
            this.hasFriend = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.hasGuildMember = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.hasAllianceMember = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.hasGroupMember = BooleanByteWrapper.getFlag(_loc2_, 3);
            this.hasMyTaxCollector = BooleanByteWrapper.getFlag(_loc2_, 4);
            this.teamMembersCount = param1.readByte();
            if (this.teamMembersCount < 0) {
                throw new Error('Forbidden value (' + this.teamMembersCount + ') on element of FightTeamLightInformations.teamMembersCount.');
            }
            this.meanLevel = param1.readVarUhInt();
            if (this.meanLevel < 0) {
                throw new Error('Forbidden value (' + this.meanLevel + ') on element of FightTeamLightInformations.meanLevel.');
            }
        };
        FightTeamLightInformations.ID = 115;
        return FightTeamLightInformations;
    })(AbstractFightTeamInformations);
    Protocol.FightTeamLightInformations = FightTeamLightInformations;
    var FightTeamMemberCharacterInformations = (function (_super) {
        __extends(FightTeamMemberCharacterInformations, _super);
        function FightTeamMemberCharacterInformations() {
            this.name = '';
            this.level = 0;
            _super.call(this);
        }
        FightTeamMemberCharacterInformations.prototype.getTypeId = function () {
            return FightTeamMemberCharacterInformations.ID;
        };
        FightTeamMemberCharacterInformations.prototype.reset = function () {
            this.name = '';
            this.level = 0;
        };
        FightTeamMemberCharacterInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamMemberCharacterInformations(param1);
        };
        FightTeamMemberCharacterInformations.prototype.serializeAs_FightTeamMemberCharacterInformations = function (param1) {
            _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
            param1.writeUTF(this.name);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
        };
        FightTeamMemberCharacterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamMemberCharacterInformations(param1);
        };
        FightTeamMemberCharacterInformations.prototype.deserializeAs_FightTeamMemberCharacterInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.name = param1.readUTF();
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCharacterInformations.level.');
            }
        };
        FightTeamMemberCharacterInformations.ID = 13;
        return FightTeamMemberCharacterInformations;
    })(FightTeamMemberInformations);
    Protocol.FightTeamMemberCharacterInformations = FightTeamMemberCharacterInformations;
    var FightTeamMemberCompanionInformations = (function (_super) {
        __extends(FightTeamMemberCompanionInformations, _super);
        function FightTeamMemberCompanionInformations() {
            this.companionId = 0;
            this.level = 0;
            this.masterId = 0;
            _super.call(this);
        }
        FightTeamMemberCompanionInformations.prototype.getTypeId = function () {
            return FightTeamMemberCompanionInformations.ID;
        };
        FightTeamMemberCompanionInformations.prototype.reset = function () {
            this.companionId = 0;
            this.level = 0;
            this.masterId = 0;
        };
        FightTeamMemberCompanionInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamMemberCompanionInformations(param1);
        };
        FightTeamMemberCompanionInformations.prototype.serializeAs_FightTeamMemberCompanionInformations = function (param1) {
            _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
            }
            param1.writeByte(this.companionId);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeInt(this.masterId);
        };
        FightTeamMemberCompanionInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamMemberCompanionInformations(param1);
        };
        FightTeamMemberCompanionInformations.prototype.deserializeAs_FightTeamMemberCompanionInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.companionId = param1.readByte();
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element of FightTeamMemberCompanionInformations.companionId.');
            }
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCompanionInformations.level.');
            }
            this.masterId = param1.readInt();
        };
        FightTeamMemberCompanionInformations.ID = 451;
        return FightTeamMemberCompanionInformations;
    })(FightTeamMemberInformations);
    Protocol.FightTeamMemberCompanionInformations = FightTeamMemberCompanionInformations;
    var FightTeamMemberInformations = (function () {
        function FightTeamMemberInformations() {
            this.id = 0;
        }
        FightTeamMemberInformations.prototype.getTypeId = function () {
            return FightTeamMemberInformations.ID;
        };
        FightTeamMemberInformations.prototype.reset = function () {
            this.id = 0;
        };
        FightTeamMemberInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamMemberInformations(param1);
        };
        FightTeamMemberInformations.prototype.serializeAs_FightTeamMemberInformations = function (param1) {
            param1.writeInt(this.id);
        };
        FightTeamMemberInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamMemberInformations(param1);
        };
        FightTeamMemberInformations.prototype.deserializeAs_FightTeamMemberInformations = function (param1) {
            this.id = param1.readInt();
        };
        FightTeamMemberInformations.ID = 44;
        return FightTeamMemberInformations;
    })();
    Protocol.FightTeamMemberInformations = FightTeamMemberInformations;
    var FightTeamMemberMonsterInformations = (function (_super) {
        __extends(FightTeamMemberMonsterInformations, _super);
        function FightTeamMemberMonsterInformations() {
            this.monsterId = 0;
            this.grade = 0;
            _super.call(this);
        }
        FightTeamMemberMonsterInformations.prototype.getTypeId = function () {
            return FightTeamMemberMonsterInformations.ID;
        };
        FightTeamMemberMonsterInformations.prototype.reset = function () {
            this.monsterId = 0;
            this.grade = 0;
        };
        FightTeamMemberMonsterInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamMemberMonsterInformations(param1);
        };
        FightTeamMemberMonsterInformations.prototype.serializeAs_FightTeamMemberMonsterInformations = function (param1) {
            _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
            param1.writeInt(this.monsterId);
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element grade.');
            }
            param1.writeByte(this.grade);
        };
        FightTeamMemberMonsterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamMemberMonsterInformations(param1);
        };
        FightTeamMemberMonsterInformations.prototype.deserializeAs_FightTeamMemberMonsterInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.monsterId = param1.readInt();
            this.grade = param1.readByte();
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element of FightTeamMemberMonsterInformations.grade.');
            }
        };
        FightTeamMemberMonsterInformations.ID = 6;
        return FightTeamMemberMonsterInformations;
    })(FightTeamMemberInformations);
    Protocol.FightTeamMemberMonsterInformations = FightTeamMemberMonsterInformations;
    var FightTeamMemberTaxCollectorInformations = (function (_super) {
        __extends(FightTeamMemberTaxCollectorInformations, _super);
        function FightTeamMemberTaxCollectorInformations() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
            this.guildId = 0;
            this.uid = 0;
            _super.call(this);
        }
        FightTeamMemberTaxCollectorInformations.prototype.getTypeId = function () {
            return FightTeamMemberTaxCollectorInformations.ID;
        };
        FightTeamMemberTaxCollectorInformations.prototype.reset = function () {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
            this.guildId = 0;
            this.uid = 0;
        };
        FightTeamMemberTaxCollectorInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamMemberTaxCollectorInformations(param1);
        };
        FightTeamMemberTaxCollectorInformations.prototype.serializeAs_FightTeamMemberTaxCollectorInformations = function (param1) {
            _super.prototype.serializeAs_FightTeamMemberInformations.call(this, param1);
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
            }
            param1.writeVarShort(this.firstNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
            }
            param1.writeVarInt(this.guildId);
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element uid.');
            }
            param1.writeVarInt(this.uid);
        };
        FightTeamMemberTaxCollectorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamMemberTaxCollectorInformations(param1);
        };
        FightTeamMemberTaxCollectorInformations.prototype.deserializeAs_FightTeamMemberTaxCollectorInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.firstNameId = param1.readVarUhShort();
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element of FightTeamMemberTaxCollectorInformations.firstNameId.');
            }
            this.lastNameId = param1.readVarUhShort();
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element of FightTeamMemberTaxCollectorInformations.lastNameId.');
            }
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberTaxCollectorInformations.level.');
            }
            this.guildId = param1.readVarUhInt();
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element of FightTeamMemberTaxCollectorInformations.guildId.');
            }
            this.uid = param1.readVarUhInt();
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element of FightTeamMemberTaxCollectorInformations.uid.');
            }
        };
        FightTeamMemberTaxCollectorInformations.ID = 177;
        return FightTeamMemberTaxCollectorInformations;
    })(FightTeamMemberInformations);
    Protocol.FightTeamMemberTaxCollectorInformations = FightTeamMemberTaxCollectorInformations;
    var FightTeamMemberWithAllianceCharacterInformations = (function (_super) {
        __extends(FightTeamMemberWithAllianceCharacterInformations, _super);
        function FightTeamMemberWithAllianceCharacterInformations() {
            this.allianceInfos = new BasicAllianceInformations();
            _super.call(this);
        }
        FightTeamMemberWithAllianceCharacterInformations.prototype.getTypeId = function () {
            return FightTeamMemberWithAllianceCharacterInformations.ID;
        };
        FightTeamMemberWithAllianceCharacterInformations.prototype.reset = function () {
            this.allianceInfos = new BasicAllianceInformations();
        };
        FightTeamMemberWithAllianceCharacterInformations.prototype.serialize = function (param1) {
            this.serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
        };
        FightTeamMemberWithAllianceCharacterInformations.prototype.serializeAs_FightTeamMemberWithAllianceCharacterInformations = function (param1) {
            _super.prototype.serializeAs_FightTeamMemberCharacterInformations.call(this, param1);
            this.allianceInfos.serializeAs_BasicAllianceInformations(param1);
        };
        FightTeamMemberWithAllianceCharacterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
        };
        FightTeamMemberWithAllianceCharacterInformations.prototype.deserializeAs_FightTeamMemberWithAllianceCharacterInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceInfos = new BasicAllianceInformations();
            this.allianceInfos.deserialize(param1);
        };
        FightTeamMemberWithAllianceCharacterInformations.ID = 426;
        return FightTeamMemberWithAllianceCharacterInformations;
    })(FightTeamMemberCharacterInformations);
    Protocol.FightTeamMemberWithAllianceCharacterInformations = FightTeamMemberWithAllianceCharacterInformations;
    var GameFightAIInformations = (function (_super) {
        __extends(GameFightAIInformations, _super);
        function GameFightAIInformations() {
            _super.call(this);
        }
        GameFightAIInformations.prototype.getTypeId = function () {
            return GameFightAIInformations.ID;
        };
        GameFightAIInformations.prototype.reset = function () {
        };
        GameFightAIInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightAIInformations(param1);
        };
        GameFightAIInformations.prototype.serializeAs_GameFightAIInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterInformations.call(this, param1);
        };
        GameFightAIInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightAIInformations(param1);
        };
        GameFightAIInformations.prototype.deserializeAs_GameFightAIInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        GameFightAIInformations.ID = 151;
        return GameFightAIInformations;
    })(GameFightFighterInformations);
    Protocol.GameFightAIInformations = GameFightAIInformations;
    var GameFightCharacterInformations = (function (_super) {
        __extends(GameFightCharacterInformations, _super);
        function GameFightCharacterInformations() {
            this.level = 0;
            this.alignmentInfos = new ActorAlignmentInformations();
            this.breed = 0;
            this.sex = false;
            _super.call(this);
        }
        GameFightCharacterInformations.prototype.getTypeId = function () {
            return GameFightCharacterInformations.ID;
        };
        GameFightCharacterInformations.prototype.reset = function () {
            this.level = 0;
            this.alignmentInfos = new ActorAlignmentInformations();
            this.breed = 0;
            this.sex = false;
        };
        GameFightCharacterInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightCharacterInformations(param1);
        };
        GameFightCharacterInformations.prototype.serializeAs_GameFightCharacterInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterNamedInformations.call(this, param1);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
        };
        GameFightCharacterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightCharacterInformations(param1);
        };
        GameFightCharacterInformations.prototype.deserializeAs_GameFightCharacterInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameFightCharacterInformations.level.');
            }
            this.alignmentInfos = new ActorAlignmentInformations();
            this.alignmentInfos.deserialize(param1);
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
        };
        GameFightCharacterInformations.ID = 46;
        return GameFightCharacterInformations;
    })(GameFightFighterNamedInformations);
    Protocol.GameFightCharacterInformations = GameFightCharacterInformations;
    var GameFightCompanionInformations = (function (_super) {
        __extends(GameFightCompanionInformations, _super);
        function GameFightCompanionInformations() {
            this.companionGenericId = 0;
            this.level = 0;
            this.masterId = 0;
            _super.call(this);
        }
        GameFightCompanionInformations.prototype.getTypeId = function () {
            return GameFightCompanionInformations.ID;
        };
        GameFightCompanionInformations.prototype.reset = function () {
            this.companionGenericId = 0;
            this.level = 0;
            this.masterId = 0;
        };
        GameFightCompanionInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightCompanionInformations(param1);
        };
        GameFightCompanionInformations.prototype.serializeAs_GameFightCompanionInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterInformations.call(this, param1);
            if (this.companionGenericId < 0) {
                throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
            }
            param1.writeByte(this.companionGenericId);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeInt(this.masterId);
        };
        GameFightCompanionInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightCompanionInformations(param1);
        };
        GameFightCompanionInformations.prototype.deserializeAs_GameFightCompanionInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.companionGenericId = param1.readByte();
            if (this.companionGenericId < 0) {
                throw new Error('Forbidden value (' + this.companionGenericId + ') on element of GameFightCompanionInformations.companionGenericId.');
            }
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameFightCompanionInformations.level.');
            }
            this.masterId = param1.readInt();
        };
        GameFightCompanionInformations.ID = 450;
        return GameFightCompanionInformations;
    })(GameFightFighterInformations);
    Protocol.GameFightCompanionInformations = GameFightCompanionInformations;
    var GameFightFighterCompanionLightInformations = (function (_super) {
        __extends(GameFightFighterCompanionLightInformations, _super);
        function GameFightFighterCompanionLightInformations() {
            this.companionId = 0;
            this.masterId = 0;
            _super.call(this);
        }
        GameFightFighterCompanionLightInformations.prototype.getTypeId = function () {
            return GameFightFighterCompanionLightInformations.ID;
        };
        GameFightFighterCompanionLightInformations.prototype.reset = function () {
            this.companionId = 0;
            this.masterId = 0;
        };
        GameFightFighterCompanionLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightFighterCompanionLightInformations(param1);
        };
        GameFightFighterCompanionLightInformations.prototype.serializeAs_GameFightFighterCompanionLightInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
            }
            param1.writeByte(this.companionId);
            param1.writeInt(this.masterId);
        };
        GameFightFighterCompanionLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightFighterCompanionLightInformations(param1);
        };
        GameFightFighterCompanionLightInformations.prototype.deserializeAs_GameFightFighterCompanionLightInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.companionId = param1.readByte();
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element of GameFightFighterCompanionLightInformations.companionId.');
            }
            this.masterId = param1.readInt();
        };
        GameFightFighterCompanionLightInformations.ID = 454;
        return GameFightFighterCompanionLightInformations;
    })(GameFightFighterLightInformations);
    Protocol.GameFightFighterCompanionLightInformations = GameFightFighterCompanionLightInformations;
    var GameFightFighterInformations = (function (_super) {
        __extends(GameFightFighterInformations, _super);
        function GameFightFighterInformations() {
            this.teamId = 2;
            this.wave = 0;
            this.alive = false;
            this.stats = new GameFightMinimalStats();
            this.previousPositions = [];
            _super.call(this);
        }
        GameFightFighterInformations.prototype.getTypeId = function () {
            return GameFightFighterInformations.ID;
        };
        GameFightFighterInformations.prototype.reset = function () {
            this.teamId = 2;
            this.wave = 0;
            this.alive = false;
            this.stats = new GameFightMinimalStats();
            this.previousPositions = [];
        };
        GameFightFighterInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightFighterInformations(param1);
        };
        GameFightFighterInformations.prototype.serializeAs_GameFightFighterInformations = function (param1) {
            _super.prototype.serializeAs_GameContextActorInformations.call(this, param1);
            param1.writeByte(this.teamId);
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element wave.');
            }
            param1.writeByte(this.wave);
            param1.writeBoolean(this.alive);
            param1.writeShort(this.stats.getTypeId());
            this.stats.serialize(param1);
            param1.writeShort(this.previousPositions.length);
            var _loc2_ = 0;
            while (_loc2_ < this.previousPositions.length) {
                if (this.previousPositions[_loc2_] < 0 || this.previousPositions[_loc2_] > 559) {
                    throw new Error('Forbidden value (' + this.previousPositions[_loc2_] + ') on element 5 (starting at 1) of previousPositions.');
                }
                param1.writeVarShort(this.previousPositions[_loc2_]);
                _loc2_++;
            }
        };
        GameFightFighterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightFighterInformations(param1);
        };
        GameFightFighterInformations.prototype.deserializeAs_GameFightFighterInformations = function (param1) {
            var _loc5_ = 0;
            _super.prototype.deserialize.call(this, param1);
            this.teamId = param1.readByte();
            if (this.teamId < 0) {
                throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightFighterInformations.teamId.');
            }
            this.wave = param1.readByte();
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element of GameFightFighterInformations.wave.');
            }
            this.alive = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            this.stats = ProtocolTypeManager.getInstance(GameFightMinimalStats, _loc2_);
            this.stats.deserialize(param1);
            var _loc3_ = param1.readUnsignedShort();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = param1.readVarUhShort();
                if (_loc5_ < 0 || _loc5_ > 559) {
                    throw new Error('Forbidden value (' + _loc5_ + ') on elements of previousPositions.');
                }
                this.previousPositions.push(_loc5_);
                _loc4_++;
            }
        };
        GameFightFighterInformations.ID = 143;
        return GameFightFighterInformations;
    })(GameContextActorInformations);
    Protocol.GameFightFighterInformations = GameFightFighterInformations;
    var GameFightFighterLightInformations = (function () {
        function GameFightFighterLightInformations() {
            this.id = 0;
            this.wave = 0;
            this.level = 0;
            this.breed = 0;
            this.sex = false;
            this.alive = false;
        }
        GameFightFighterLightInformations.prototype.getTypeId = function () {
            return GameFightFighterLightInformations.ID;
        };
        GameFightFighterLightInformations.prototype.reset = function () {
            this.id = 0;
            this.wave = 0;
            this.level = 0;
            this.breed = 0;
            this.sex = false;
            this.alive = false;
        };
        GameFightFighterLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightFighterLightInformations(param1);
        };
        GameFightFighterLightInformations.prototype.serializeAs_GameFightFighterLightInformations = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.sex);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.alive);
            param1.writeByte(_loc2_);
            param1.writeInt(this.id);
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element wave.');
            }
            param1.writeByte(this.wave);
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeVarShort(this.level);
            param1.writeByte(this.breed);
        };
        GameFightFighterLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightFighterLightInformations(param1);
        };
        GameFightFighterLightInformations.prototype.deserializeAs_GameFightFighterLightInformations = function (param1) {
            var _loc2_ = param1.readByte();
            this.sex = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.alive = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.id = param1.readInt();
            this.wave = param1.readByte();
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element of GameFightFighterLightInformations.wave.');
            }
            this.level = param1.readVarUhShort();
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameFightFighterLightInformations.level.');
            }
            this.breed = param1.readByte();
        };
        GameFightFighterLightInformations.ID = 413;
        return GameFightFighterLightInformations;
    })();
    Protocol.GameFightFighterLightInformations = GameFightFighterLightInformations;
    var GameFightFighterMonsterLightInformations = (function (_super) {
        __extends(GameFightFighterMonsterLightInformations, _super);
        function GameFightFighterMonsterLightInformations() {
            this.creatureGenericId = 0;
            _super.call(this);
        }
        GameFightFighterMonsterLightInformations.prototype.getTypeId = function () {
            return GameFightFighterMonsterLightInformations.ID;
        };
        GameFightFighterMonsterLightInformations.prototype.reset = function () {
            this.creatureGenericId = 0;
        };
        GameFightFighterMonsterLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightFighterMonsterLightInformations(param1);
        };
        GameFightFighterMonsterLightInformations.prototype.serializeAs_GameFightFighterMonsterLightInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
            }
            param1.writeVarShort(this.creatureGenericId);
        };
        GameFightFighterMonsterLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightFighterMonsterLightInformations(param1);
        };
        GameFightFighterMonsterLightInformations.prototype.deserializeAs_GameFightFighterMonsterLightInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.creatureGenericId = param1.readVarUhShort();
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightFighterMonsterLightInformations.creatureGenericId.');
            }
        };
        GameFightFighterMonsterLightInformations.ID = 455;
        return GameFightFighterMonsterLightInformations;
    })(GameFightFighterLightInformations);
    Protocol.GameFightFighterMonsterLightInformations = GameFightFighterMonsterLightInformations;
    var GameFightFighterNamedInformations = (function (_super) {
        __extends(GameFightFighterNamedInformations, _super);
        function GameFightFighterNamedInformations() {
            this.name = '';
            this.status = new PlayerStatus();
            _super.call(this);
        }
        GameFightFighterNamedInformations.prototype.getTypeId = function () {
            return GameFightFighterNamedInformations.ID;
        };
        GameFightFighterNamedInformations.prototype.reset = function () {
            this.name = '';
            this.status = new PlayerStatus();
        };
        GameFightFighterNamedInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightFighterNamedInformations(param1);
        };
        GameFightFighterNamedInformations.prototype.serializeAs_GameFightFighterNamedInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterInformations.call(this, param1);
            param1.writeUTF(this.name);
            this.status.serializeAs_PlayerStatus(param1);
        };
        GameFightFighterNamedInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightFighterNamedInformations(param1);
        };
        GameFightFighterNamedInformations.prototype.deserializeAs_GameFightFighterNamedInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.name = param1.readUTF();
            this.status = new PlayerStatus();
            this.status.deserialize(param1);
        };
        GameFightFighterNamedInformations.ID = 158;
        return GameFightFighterNamedInformations;
    })(GameFightFighterInformations);
    Protocol.GameFightFighterNamedInformations = GameFightFighterNamedInformations;
    var GameFightFighterNamedLightInformations = (function (_super) {
        __extends(GameFightFighterNamedLightInformations, _super);
        function GameFightFighterNamedLightInformations() {
            this.name = '';
            _super.call(this);
        }
        GameFightFighterNamedLightInformations.prototype.getTypeId = function () {
            return GameFightFighterNamedLightInformations.ID;
        };
        GameFightFighterNamedLightInformations.prototype.reset = function () {
            this.name = '';
        };
        GameFightFighterNamedLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightFighterNamedLightInformations(param1);
        };
        GameFightFighterNamedLightInformations.prototype.serializeAs_GameFightFighterNamedLightInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
            param1.writeUTF(this.name);
        };
        GameFightFighterNamedLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightFighterNamedLightInformations(param1);
        };
        GameFightFighterNamedLightInformations.prototype.deserializeAs_GameFightFighterNamedLightInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.name = param1.readUTF();
        };
        GameFightFighterNamedLightInformations.ID = 456;
        return GameFightFighterNamedLightInformations;
    })(GameFightFighterLightInformations);
    Protocol.GameFightFighterNamedLightInformations = GameFightFighterNamedLightInformations;
    var GameFightFighterTaxCollectorLightInformations = (function (_super) {
        __extends(GameFightFighterTaxCollectorLightInformations, _super);
        function GameFightFighterTaxCollectorLightInformations() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            _super.call(this);
        }
        GameFightFighterTaxCollectorLightInformations.prototype.getTypeId = function () {
            return GameFightFighterTaxCollectorLightInformations.ID;
        };
        GameFightFighterTaxCollectorLightInformations.prototype.reset = function () {
            this.firstNameId = 0;
            this.lastNameId = 0;
        };
        GameFightFighterTaxCollectorLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightFighterTaxCollectorLightInformations(param1);
        };
        GameFightFighterTaxCollectorLightInformations.prototype.serializeAs_GameFightFighterTaxCollectorLightInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
            }
            param1.writeVarShort(this.firstNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);
        };
        GameFightFighterTaxCollectorLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightFighterTaxCollectorLightInformations(param1);
        };
        GameFightFighterTaxCollectorLightInformations.prototype.deserializeAs_GameFightFighterTaxCollectorLightInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.firstNameId = param1.readVarUhShort();
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element of GameFightFighterTaxCollectorLightInformations.firstNameId.');
            }
            this.lastNameId = param1.readVarUhShort();
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element of GameFightFighterTaxCollectorLightInformations.lastNameId.');
            }
        };
        GameFightFighterTaxCollectorLightInformations.ID = 457;
        return GameFightFighterTaxCollectorLightInformations;
    })(GameFightFighterLightInformations);
    Protocol.GameFightFighterTaxCollectorLightInformations = GameFightFighterTaxCollectorLightInformations;
    var GameFightMinimalStats = (function () {
        function GameFightMinimalStats() {
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.baseMaxLifePoints = 0;
            this.permanentDamagePercent = 0;
            this.shieldPoints = 0;
            this.actionPoints = 0;
            this.maxActionPoints = 0;
            this.movementPoints = 0;
            this.maxMovementPoints = 0;
            this.summoner = 0;
            this.summoned = false;
            this.neutralElementResistPercent = 0;
            this.earthElementResistPercent = 0;
            this.waterElementResistPercent = 0;
            this.airElementResistPercent = 0;
            this.fireElementResistPercent = 0;
            this.neutralElementReduction = 0;
            this.earthElementReduction = 0;
            this.waterElementReduction = 0;
            this.airElementReduction = 0;
            this.fireElementReduction = 0;
            this.criticalDamageFixedResist = 0;
            this.pushDamageFixedResist = 0;
            this.pvpNeutralElementResistPercent = 0;
            this.pvpEarthElementResistPercent = 0;
            this.pvpWaterElementResistPercent = 0;
            this.pvpAirElementResistPercent = 0;
            this.pvpFireElementResistPercent = 0;
            this.pvpNeutralElementReduction = 0;
            this.pvpEarthElementReduction = 0;
            this.pvpWaterElementReduction = 0;
            this.pvpAirElementReduction = 0;
            this.pvpFireElementReduction = 0;
            this.dodgePALostProbability = 0;
            this.dodgePMLostProbability = 0;
            this.tackleBlock = 0;
            this.tackleEvade = 0;
            this.invisibilityState = 0;
        }
        GameFightMinimalStats.prototype.getTypeId = function () {
            return GameFightMinimalStats.ID;
        };
        GameFightMinimalStats.prototype.reset = function () {
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.baseMaxLifePoints = 0;
            this.permanentDamagePercent = 0;
            this.shieldPoints = 0;
            this.actionPoints = 0;
            this.maxActionPoints = 0;
            this.movementPoints = 0;
            this.maxMovementPoints = 0;
            this.summoner = 0;
            this.summoned = false;
            this.neutralElementResistPercent = 0;
            this.earthElementResistPercent = 0;
            this.waterElementResistPercent = 0;
            this.airElementResistPercent = 0;
            this.fireElementResistPercent = 0;
            this.neutralElementReduction = 0;
            this.earthElementReduction = 0;
            this.waterElementReduction = 0;
            this.airElementReduction = 0;
            this.fireElementReduction = 0;
            this.criticalDamageFixedResist = 0;
            this.pushDamageFixedResist = 0;
            this.pvpNeutralElementResistPercent = 0;
            this.pvpEarthElementResistPercent = 0;
            this.pvpWaterElementResistPercent = 0;
            this.pvpAirElementResistPercent = 0;
            this.pvpFireElementResistPercent = 0;
            this.pvpNeutralElementReduction = 0;
            this.pvpEarthElementReduction = 0;
            this.pvpWaterElementReduction = 0;
            this.pvpAirElementReduction = 0;
            this.pvpFireElementReduction = 0;
            this.dodgePALostProbability = 0;
            this.dodgePMLostProbability = 0;
            this.tackleBlock = 0;
            this.tackleEvade = 0;
            this.invisibilityState = 0;
        };
        GameFightMinimalStats.prototype.serialize = function (param1) {
            this.serializeAs_GameFightMinimalStats(param1);
        };
        GameFightMinimalStats.prototype.serializeAs_GameFightMinimalStats = function (param1) {
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
            }
            param1.writeVarInt(this.lifePoints);
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
            }
            param1.writeVarInt(this.maxLifePoints);
            if (this.baseMaxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.baseMaxLifePoints + ') on element baseMaxLifePoints.');
            }
            param1.writeVarInt(this.baseMaxLifePoints);
            if (this.permanentDamagePercent < 0) {
                throw new Error('Forbidden value (' + this.permanentDamagePercent + ') on element permanentDamagePercent.');
            }
            param1.writeVarInt(this.permanentDamagePercent);
            if (this.shieldPoints < 0) {
                throw new Error('Forbidden value (' + this.shieldPoints + ') on element shieldPoints.');
            }
            param1.writeVarInt(this.shieldPoints);
            param1.writeVarShort(this.actionPoints);
            param1.writeVarShort(this.maxActionPoints);
            param1.writeVarShort(this.movementPoints);
            param1.writeVarShort(this.maxMovementPoints);
            param1.writeInt(this.summoner);
            param1.writeBoolean(this.summoned);
            param1.writeVarShort(this.neutralElementResistPercent);
            param1.writeVarShort(this.earthElementResistPercent);
            param1.writeVarShort(this.waterElementResistPercent);
            param1.writeVarShort(this.airElementResistPercent);
            param1.writeVarShort(this.fireElementResistPercent);
            param1.writeVarShort(this.neutralElementReduction);
            param1.writeVarShort(this.earthElementReduction);
            param1.writeVarShort(this.waterElementReduction);
            param1.writeVarShort(this.airElementReduction);
            param1.writeVarShort(this.fireElementReduction);
            param1.writeVarShort(this.criticalDamageFixedResist);
            param1.writeVarShort(this.pushDamageFixedResist);
            param1.writeVarShort(this.pvpNeutralElementResistPercent);
            param1.writeVarShort(this.pvpEarthElementResistPercent);
            param1.writeVarShort(this.pvpWaterElementResistPercent);
            param1.writeVarShort(this.pvpAirElementResistPercent);
            param1.writeVarShort(this.pvpFireElementResistPercent);
            param1.writeVarShort(this.pvpNeutralElementReduction);
            param1.writeVarShort(this.pvpEarthElementReduction);
            param1.writeVarShort(this.pvpWaterElementReduction);
            param1.writeVarShort(this.pvpAirElementReduction);
            param1.writeVarShort(this.pvpFireElementReduction);
            if (this.dodgePALostProbability < 0) {
                throw new Error('Forbidden value (' + this.dodgePALostProbability + ') on element dodgePALostProbability.');
            }
            param1.writeVarShort(this.dodgePALostProbability);
            if (this.dodgePMLostProbability < 0) {
                throw new Error('Forbidden value (' + this.dodgePMLostProbability + ') on element dodgePMLostProbability.');
            }
            param1.writeVarShort(this.dodgePMLostProbability);
            param1.writeVarShort(this.tackleBlock);
            param1.writeVarShort(this.tackleEvade);
            param1.writeByte(this.invisibilityState);
        };
        GameFightMinimalStats.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightMinimalStats(param1);
        };
        GameFightMinimalStats.prototype.deserializeAs_GameFightMinimalStats = function (param1) {
            this.lifePoints = param1.readVarUhInt();
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element of GameFightMinimalStats.lifePoints.');
            }
            this.maxLifePoints = param1.readVarUhInt();
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of GameFightMinimalStats.maxLifePoints.');
            }
            this.baseMaxLifePoints = param1.readVarUhInt();
            if (this.baseMaxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.baseMaxLifePoints + ') on element of GameFightMinimalStats.baseMaxLifePoints.');
            }
            this.permanentDamagePercent = param1.readVarUhInt();
            if (this.permanentDamagePercent < 0) {
                throw new Error('Forbidden value (' + this.permanentDamagePercent + ') on element of GameFightMinimalStats.permanentDamagePercent.');
            }
            this.shieldPoints = param1.readVarUhInt();
            if (this.shieldPoints < 0) {
                throw new Error('Forbidden value (' + this.shieldPoints + ') on element of GameFightMinimalStats.shieldPoints.');
            }
            this.actionPoints = param1.readVarShort();
            this.maxActionPoints = param1.readVarShort();
            this.movementPoints = param1.readVarShort();
            this.maxMovementPoints = param1.readVarShort();
            this.summoner = param1.readInt();
            this.summoned = param1.readBoolean();
            this.neutralElementResistPercent = param1.readVarShort();
            this.earthElementResistPercent = param1.readVarShort();
            this.waterElementResistPercent = param1.readVarShort();
            this.airElementResistPercent = param1.readVarShort();
            this.fireElementResistPercent = param1.readVarShort();
            this.neutralElementReduction = param1.readVarShort();
            this.earthElementReduction = param1.readVarShort();
            this.waterElementReduction = param1.readVarShort();
            this.airElementReduction = param1.readVarShort();
            this.fireElementReduction = param1.readVarShort();
            this.criticalDamageFixedResist = param1.readVarShort();
            this.pushDamageFixedResist = param1.readVarShort();
            this.pvpNeutralElementResistPercent = param1.readVarShort();
            this.pvpEarthElementResistPercent = param1.readVarShort();
            this.pvpWaterElementResistPercent = param1.readVarShort();
            this.pvpAirElementResistPercent = param1.readVarShort();
            this.pvpFireElementResistPercent = param1.readVarShort();
            this.pvpNeutralElementReduction = param1.readVarShort();
            this.pvpEarthElementReduction = param1.readVarShort();
            this.pvpWaterElementReduction = param1.readVarShort();
            this.pvpAirElementReduction = param1.readVarShort();
            this.pvpFireElementReduction = param1.readVarShort();
            this.dodgePALostProbability = param1.readVarUhShort();
            if (this.dodgePALostProbability < 0) {
                throw new Error('Forbidden value (' + this.dodgePALostProbability + ') on element of GameFightMinimalStats.dodgePALostProbability.');
            }
            this.dodgePMLostProbability = param1.readVarUhShort();
            if (this.dodgePMLostProbability < 0) {
                throw new Error('Forbidden value (' + this.dodgePMLostProbability + ') on element of GameFightMinimalStats.dodgePMLostProbability.');
            }
            this.tackleBlock = param1.readVarShort();
            this.tackleEvade = param1.readVarShort();
            this.invisibilityState = param1.readByte();
            if (this.invisibilityState < 0) {
                throw new Error('Forbidden value (' + this.invisibilityState + ') on element of GameFightMinimalStats.invisibilityState.');
            }
        };
        GameFightMinimalStats.ID = 31;
        return GameFightMinimalStats;
    })();
    Protocol.GameFightMinimalStats = GameFightMinimalStats;
    var GameFightMinimalStatsPreparation = (function (_super) {
        __extends(GameFightMinimalStatsPreparation, _super);
        function GameFightMinimalStatsPreparation() {
            this.initiative = 0;
            _super.call(this);
        }
        GameFightMinimalStatsPreparation.prototype.getTypeId = function () {
            return GameFightMinimalStatsPreparation.ID;
        };
        GameFightMinimalStatsPreparation.prototype.reset = function () {
            this.initiative = 0;
        };
        GameFightMinimalStatsPreparation.prototype.serialize = function (param1) {
            this.serializeAs_GameFightMinimalStatsPreparation(param1);
        };
        GameFightMinimalStatsPreparation.prototype.serializeAs_GameFightMinimalStatsPreparation = function (param1) {
            _super.prototype.serializeAs_GameFightMinimalStats.call(this, param1);
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
            }
            param1.writeVarInt(this.initiative);
        };
        GameFightMinimalStatsPreparation.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightMinimalStatsPreparation(param1);
        };
        GameFightMinimalStatsPreparation.prototype.deserializeAs_GameFightMinimalStatsPreparation = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.initiative = param1.readVarUhInt();
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element of GameFightMinimalStatsPreparation.initiative.');
            }
        };
        GameFightMinimalStatsPreparation.ID = 360;
        return GameFightMinimalStatsPreparation;
    })(GameFightMinimalStats);
    Protocol.GameFightMinimalStatsPreparation = GameFightMinimalStatsPreparation;
    var GameFightMonsterInformations = (function (_super) {
        __extends(GameFightMonsterInformations, _super);
        function GameFightMonsterInformations() {
            this.creatureGenericId = 0;
            this.creatureGrade = 0;
            _super.call(this);
        }
        GameFightMonsterInformations.prototype.getTypeId = function () {
            return GameFightMonsterInformations.ID;
        };
        GameFightMonsterInformations.prototype.reset = function () {
            this.creatureGenericId = 0;
            this.creatureGrade = 0;
        };
        GameFightMonsterInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightMonsterInformations(param1);
        };
        GameFightMonsterInformations.prototype.serializeAs_GameFightMonsterInformations = function (param1) {
            _super.prototype.serializeAs_GameFightAIInformations.call(this, param1);
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
            }
            param1.writeVarShort(this.creatureGenericId);
            if (this.creatureGrade < 0) {
                throw new Error('Forbidden value (' + this.creatureGrade + ') on element creatureGrade.');
            }
            param1.writeByte(this.creatureGrade);
        };
        GameFightMonsterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightMonsterInformations(param1);
        };
        GameFightMonsterInformations.prototype.deserializeAs_GameFightMonsterInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.creatureGenericId = param1.readVarUhShort();
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightMonsterInformations.creatureGenericId.');
            }
            this.creatureGrade = param1.readByte();
            if (this.creatureGrade < 0) {
                throw new Error('Forbidden value (' + this.creatureGrade + ') on element of GameFightMonsterInformations.creatureGrade.');
            }
        };
        GameFightMonsterInformations.ID = 29;
        return GameFightMonsterInformations;
    })(GameFightAIInformations);
    Protocol.GameFightMonsterInformations = GameFightMonsterInformations;
    var GameFightMonsterWithAlignmentInformations = (function (_super) {
        __extends(GameFightMonsterWithAlignmentInformations, _super);
        function GameFightMonsterWithAlignmentInformations() {
            this.alignmentInfos = new ActorAlignmentInformations();
            _super.call(this);
        }
        GameFightMonsterWithAlignmentInformations.prototype.getTypeId = function () {
            return GameFightMonsterWithAlignmentInformations.ID;
        };
        GameFightMonsterWithAlignmentInformations.prototype.reset = function () {
            this.alignmentInfos = new ActorAlignmentInformations();
        };
        GameFightMonsterWithAlignmentInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightMonsterWithAlignmentInformations(param1);
        };
        GameFightMonsterWithAlignmentInformations.prototype.serializeAs_GameFightMonsterWithAlignmentInformations = function (param1) {
            _super.prototype.serializeAs_GameFightMonsterInformations.call(this, param1);
            this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
        };
        GameFightMonsterWithAlignmentInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightMonsterWithAlignmentInformations(param1);
        };
        GameFightMonsterWithAlignmentInformations.prototype.deserializeAs_GameFightMonsterWithAlignmentInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.alignmentInfos = new ActorAlignmentInformations();
            this.alignmentInfos.deserialize(param1);
        };
        GameFightMonsterWithAlignmentInformations.ID = 203;
        return GameFightMonsterWithAlignmentInformations;
    })(GameFightMonsterInformations);
    Protocol.GameFightMonsterWithAlignmentInformations = GameFightMonsterWithAlignmentInformations;
    var GameFightMutantInformations = (function (_super) {
        __extends(GameFightMutantInformations, _super);
        function GameFightMutantInformations() {
            this.powerLevel = 0;
            _super.call(this);
        }
        GameFightMutantInformations.prototype.getTypeId = function () {
            return GameFightMutantInformations.ID;
        };
        GameFightMutantInformations.prototype.reset = function () {
            this.powerLevel = 0;
        };
        GameFightMutantInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightMutantInformations(param1);
        };
        GameFightMutantInformations.prototype.serializeAs_GameFightMutantInformations = function (param1) {
            _super.prototype.serializeAs_GameFightFighterNamedInformations.call(this, param1);
            if (this.powerLevel < 0) {
                throw new Error('Forbidden value (' + this.powerLevel + ') on element powerLevel.');
            }
            param1.writeByte(this.powerLevel);
        };
        GameFightMutantInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightMutantInformations(param1);
        };
        GameFightMutantInformations.prototype.deserializeAs_GameFightMutantInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.powerLevel = param1.readByte();
            if (this.powerLevel < 0) {
                throw new Error('Forbidden value (' + this.powerLevel + ') on element of GameFightMutantInformations.powerLevel.');
            }
        };
        GameFightMutantInformations.ID = 50;
        return GameFightMutantInformations;
    })(GameFightFighterNamedInformations);
    Protocol.GameFightMutantInformations = GameFightMutantInformations;
    var GameFightResumeSlaveInfo = (function () {
        function GameFightResumeSlaveInfo() {
            this.slaveId = 0;
            this.spellCooldowns = [];
            this.summonCount = 0;
            this.bombCount = 0;
        }
        GameFightResumeSlaveInfo.prototype.getTypeId = function () {
            return GameFightResumeSlaveInfo.ID;
        };
        GameFightResumeSlaveInfo.prototype.reset = function () {
            this.slaveId = 0;
            this.spellCooldowns = [];
            this.summonCount = 0;
            this.bombCount = 0;
        };
        GameFightResumeSlaveInfo.prototype.serialize = function (param1) {
            this.serializeAs_GameFightResumeSlaveInfo(param1);
        };
        GameFightResumeSlaveInfo.prototype.serializeAs_GameFightResumeSlaveInfo = function (param1) {
            param1.writeInt(this.slaveId);
            param1.writeShort(this.spellCooldowns.length);
            var _loc2_ = 0;
            while (_loc2_ < this.spellCooldowns.length) {
                (this.spellCooldowns[_loc2_]).serializeAs_GameFightSpellCooldown(param1);
                _loc2_++;
            }
            if (this.summonCount < 0) {
                throw new Error('Forbidden value (' + this.summonCount + ') on element summonCount.');
            }
            param1.writeByte(this.summonCount);
            if (this.bombCount < 0) {
                throw new Error('Forbidden value (' + this.bombCount + ') on element bombCount.');
            }
            param1.writeByte(this.bombCount);
        };
        GameFightResumeSlaveInfo.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightResumeSlaveInfo(param1);
        };
        GameFightResumeSlaveInfo.prototype.deserializeAs_GameFightResumeSlaveInfo = function (param1) {
            var _loc4_ = null;
            this.slaveId = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new GameFightSpellCooldown();
                _loc4_.deserialize(param1);
                this.spellCooldowns.push(_loc4_);
                _loc3_++;
            }
            this.summonCount = param1.readByte();
            if (this.summonCount < 0) {
                throw new Error('Forbidden value (' + this.summonCount + ') on element of GameFightResumeSlaveInfo.summonCount.');
            }
            this.bombCount = param1.readByte();
            if (this.bombCount < 0) {
                throw new Error('Forbidden value (' + this.bombCount + ') on element of GameFightResumeSlaveInfo.bombCount.');
            }
        };
        GameFightResumeSlaveInfo.ID = 364;
        return GameFightResumeSlaveInfo;
    })();
    Protocol.GameFightResumeSlaveInfo = GameFightResumeSlaveInfo;
    var GameFightSpellCooldown = (function () {
        function GameFightSpellCooldown() {
            this.spellId = 0;
            this.cooldown = 0;
        }
        GameFightSpellCooldown.prototype.getTypeId = function () {
            return GameFightSpellCooldown.ID;
        };
        GameFightSpellCooldown.prototype.reset = function () {
            this.spellId = 0;
            this.cooldown = 0;
        };
        GameFightSpellCooldown.prototype.serialize = function (param1) {
            this.serializeAs_GameFightSpellCooldown(param1);
        };
        GameFightSpellCooldown.prototype.serializeAs_GameFightSpellCooldown = function (param1) {
            param1.writeInt(this.spellId);
            if (this.cooldown < 0) {
                throw new Error('Forbidden value (' + this.cooldown + ') on element cooldown.');
            }
            param1.writeByte(this.cooldown);
        };
        GameFightSpellCooldown.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightSpellCooldown(param1);
        };
        GameFightSpellCooldown.prototype.deserializeAs_GameFightSpellCooldown = function (param1) {
            this.spellId = param1.readInt();
            this.cooldown = param1.readByte();
            if (this.cooldown < 0) {
                throw new Error('Forbidden value (' + this.cooldown + ') on element of GameFightSpellCooldown.cooldown.');
            }
        };
        GameFightSpellCooldown.ID = 205;
        return GameFightSpellCooldown;
    })();
    Protocol.GameFightSpellCooldown = GameFightSpellCooldown;
    var GameFightTaxCollectorInformations = (function (_super) {
        __extends(GameFightTaxCollectorInformations, _super);
        function GameFightTaxCollectorInformations() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
            _super.call(this);
        }
        GameFightTaxCollectorInformations.prototype.getTypeId = function () {
            return GameFightTaxCollectorInformations.ID;
        };
        GameFightTaxCollectorInformations.prototype.reset = function () {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
        };
        GameFightTaxCollectorInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameFightTaxCollectorInformations(param1);
        };
        GameFightTaxCollectorInformations.prototype.serializeAs_GameFightTaxCollectorInformations = function (param1) {
            _super.prototype.serializeAs_GameFightAIInformations.call(this, param1);
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
            }
            param1.writeVarShort(this.firstNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
        };
        GameFightTaxCollectorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameFightTaxCollectorInformations(param1);
        };
        GameFightTaxCollectorInformations.prototype.deserializeAs_GameFightTaxCollectorInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.firstNameId = param1.readVarUhShort();
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element of GameFightTaxCollectorInformations.firstNameId.');
            }
            this.lastNameId = param1.readVarUhShort();
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element of GameFightTaxCollectorInformations.lastNameId.');
            }
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameFightTaxCollectorInformations.level.');
            }
        };
        GameFightTaxCollectorInformations.ID = 48;
        return GameFightTaxCollectorInformations;
    })(GameFightAIInformations);
    Protocol.GameFightTaxCollectorInformations = GameFightTaxCollectorInformations;
    var AllianceInformations = (function (_super) {
        __extends(AllianceInformations, _super);
        function AllianceInformations() {
            this.allianceEmblem = new GuildEmblem();
            _super.call(this);
        }
        AllianceInformations.prototype.getTypeId = function () {
            return AllianceInformations.ID;
        };
        AllianceInformations.prototype.reset = function () {
            this.allianceEmblem = new GuildEmblem();
        };
        AllianceInformations.prototype.serialize = function (param1) {
            this.serializeAs_AllianceInformations(param1);
        };
        AllianceInformations.prototype.serializeAs_AllianceInformations = function (param1) {
            _super.prototype.serializeAs_BasicNamedAllianceInformations.call(this, param1);
            this.allianceEmblem.serializeAs_GuildEmblem(param1);
        };
        AllianceInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AllianceInformations(param1);
        };
        AllianceInformations.prototype.deserializeAs_AllianceInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceEmblem = new GuildEmblem();
            this.allianceEmblem.deserialize(param1);
        };
        AllianceInformations.ID = 417;
        return AllianceInformations;
    })(BasicNamedAllianceInformations);
    Protocol.AllianceInformations = AllianceInformations;
    var AlternativeMonstersInGroupLightInformations = (function () {
        function AlternativeMonstersInGroupLightInformations() {
            this.playerCount = 0;
            this.monsters = [];
        }
        AlternativeMonstersInGroupLightInformations.prototype.getTypeId = function () {
            return AlternativeMonstersInGroupLightInformations.ID;
        };
        AlternativeMonstersInGroupLightInformations.prototype.reset = function () {
            this.playerCount = 0;
            this.monsters = [];
        };
        AlternativeMonstersInGroupLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_AlternativeMonstersInGroupLightInformations(param1);
        };
        AlternativeMonstersInGroupLightInformations.prototype.serializeAs_AlternativeMonstersInGroupLightInformations = function (param1) {
            param1.writeInt(this.playerCount);
            param1.writeShort(this.monsters.length);
            var _loc2_ = 0;
            while (_loc2_ < this.monsters.length) {
                (this.monsters[_loc2_]).serializeAs_MonsterInGroupLightInformations(param1);
                _loc2_++;
            }
        };
        AlternativeMonstersInGroupLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AlternativeMonstersInGroupLightInformations(param1);
        };
        AlternativeMonstersInGroupLightInformations.prototype.deserializeAs_AlternativeMonstersInGroupLightInformations = function (param1) {
            var _loc4_ = null;
            this.playerCount = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MonsterInGroupLightInformations();
                _loc4_.deserialize(param1);
                this.monsters.push(_loc4_);
                _loc3_++;
            }
        };
        AlternativeMonstersInGroupLightInformations.ID = 394;
        return AlternativeMonstersInGroupLightInformations;
    })();
    Protocol.AlternativeMonstersInGroupLightInformations = AlternativeMonstersInGroupLightInformations;
    var AtlasPointsInformations = (function () {
        function AtlasPointsInformations() {
            this.type = 0;
            this.coords = [];
        }
        AtlasPointsInformations.prototype.getTypeId = function () {
            return AtlasPointsInformations.ID;
        };
        AtlasPointsInformations.prototype.reset = function () {
            this.type = 0;
            this.coords = [];
        };
        AtlasPointsInformations.prototype.serialize = function (param1) {
            this.serializeAs_AtlasPointsInformations(param1);
        };
        AtlasPointsInformations.prototype.serializeAs_AtlasPointsInformations = function (param1) {
            param1.writeByte(this.type);
            param1.writeShort(this.coords.length);
            var _loc2_ = 0;
            while (_loc2_ < this.coords.length) {
                (this.coords[_loc2_]).serializeAs_MapCoordinatesExtended(param1);
                _loc2_++;
            }
        };
        AtlasPointsInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AtlasPointsInformations(param1);
        };
        AtlasPointsInformations.prototype.deserializeAs_AtlasPointsInformations = function (param1) {
            var _loc4_ = null;
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of AtlasPointsInformations.type.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MapCoordinatesExtended();
                _loc4_.deserialize(param1);
                this.coords.push(_loc4_);
                _loc3_++;
            }
        };
        AtlasPointsInformations.ID = 175;
        return AtlasPointsInformations;
    })();
    Protocol.AtlasPointsInformations = AtlasPointsInformations;
    var BasicAllianceInformations = (function (_super) {
        __extends(BasicAllianceInformations, _super);
        function BasicAllianceInformations() {
            this.allianceId = 0;
            this.allianceTag = '';
            _super.call(this);
        }
        BasicAllianceInformations.prototype.getTypeId = function () {
            return BasicAllianceInformations.ID;
        };
        BasicAllianceInformations.prototype.reset = function () {
            this.allianceId = 0;
            this.allianceTag = '';
        };
        BasicAllianceInformations.prototype.serialize = function (param1) {
            this.serializeAs_BasicAllianceInformations(param1);
        };
        BasicAllianceInformations.prototype.serializeAs_BasicAllianceInformations = function (param1) {
            _super.prototype.serializeAs_AbstractSocialGroupInfos.call(this, param1);
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
            }
            param1.writeVarInt(this.allianceId);
            param1.writeUTF(this.allianceTag);
        };
        BasicAllianceInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_BasicAllianceInformations(param1);
        };
        BasicAllianceInformations.prototype.deserializeAs_BasicAllianceInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceId = param1.readVarUhInt();
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element of BasicAllianceInformations.allianceId.');
            }
            this.allianceTag = param1.readUTF();
        };
        BasicAllianceInformations.ID = 419;
        return BasicAllianceInformations;
    })(AbstractSocialGroupInfos);
    Protocol.BasicAllianceInformations = BasicAllianceInformations;
    var BasicGuildInformations = (function (_super) {
        __extends(BasicGuildInformations, _super);
        function BasicGuildInformations() {
            this.guildId = 0;
            this.guildName = '';
            _super.call(this);
        }
        BasicGuildInformations.prototype.getTypeId = function () {
            return BasicGuildInformations.ID;
        };
        BasicGuildInformations.prototype.reset = function () {
            this.guildId = 0;
            this.guildName = '';
        };
        BasicGuildInformations.prototype.serialize = function (param1) {
            this.serializeAs_BasicGuildInformations(param1);
        };
        BasicGuildInformations.prototype.serializeAs_BasicGuildInformations = function (param1) {
            _super.prototype.serializeAs_AbstractSocialGroupInfos.call(this, param1);
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
            }
            param1.writeVarInt(this.guildId);
            param1.writeUTF(this.guildName);
        };
        BasicGuildInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_BasicGuildInformations(param1);
        };
        BasicGuildInformations.prototype.deserializeAs_BasicGuildInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guildId = param1.readVarUhInt();
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element of BasicGuildInformations.guildId.');
            }
            this.guildName = param1.readUTF();
        };
        BasicGuildInformations.ID = 365;
        return BasicGuildInformations;
    })(AbstractSocialGroupInfos);
    Protocol.BasicGuildInformations = BasicGuildInformations;
    var BasicNamedAllianceInformations = (function (_super) {
        __extends(BasicNamedAllianceInformations, _super);
        function BasicNamedAllianceInformations() {
            this.allianceName = '';
            _super.call(this);
        }
        BasicNamedAllianceInformations.prototype.getTypeId = function () {
            return BasicNamedAllianceInformations.ID;
        };
        BasicNamedAllianceInformations.prototype.reset = function () {
            this.allianceName = '';
        };
        BasicNamedAllianceInformations.prototype.serialize = function (param1) {
            this.serializeAs_BasicNamedAllianceInformations(param1);
        };
        BasicNamedAllianceInformations.prototype.serializeAs_BasicNamedAllianceInformations = function (param1) {
            _super.prototype.serializeAs_BasicAllianceInformations.call(this, param1);
            param1.writeUTF(this.allianceName);
        };
        BasicNamedAllianceInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_BasicNamedAllianceInformations(param1);
        };
        BasicNamedAllianceInformations.prototype.deserializeAs_BasicNamedAllianceInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceName = param1.readUTF();
        };
        BasicNamedAllianceInformations.ID = 418;
        return BasicNamedAllianceInformations;
    })(BasicAllianceInformations);
    Protocol.BasicNamedAllianceInformations = BasicNamedAllianceInformations;
    var GameRolePlayActorInformations = (function (_super) {
        __extends(GameRolePlayActorInformations, _super);
        function GameRolePlayActorInformations() {
            _super.call(this);
        }
        GameRolePlayActorInformations.prototype.getTypeId = function () {
            return GameRolePlayActorInformations.ID;
        };
        GameRolePlayActorInformations.prototype.reset = function () {
        };
        GameRolePlayActorInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayActorInformations(param1);
        };
        GameRolePlayActorInformations.prototype.serializeAs_GameRolePlayActorInformations = function (param1) {
            _super.prototype.serializeAs_GameContextActorInformations.call(this, param1);
        };
        GameRolePlayActorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayActorInformations(param1);
        };
        GameRolePlayActorInformations.prototype.deserializeAs_GameRolePlayActorInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        GameRolePlayActorInformations.ID = 141;
        return GameRolePlayActorInformations;
    })(GameContextActorInformations);
    Protocol.GameRolePlayActorInformations = GameRolePlayActorInformations;
    var GameRolePlayCharacterInformations = (function (_super) {
        __extends(GameRolePlayCharacterInformations, _super);
        function GameRolePlayCharacterInformations() {
            this.alignmentInfos = new ActorAlignmentInformations();
            _super.call(this);
        }
        GameRolePlayCharacterInformations.prototype.getTypeId = function () {
            return GameRolePlayCharacterInformations.ID;
        };
        GameRolePlayCharacterInformations.prototype.reset = function () {
            this.alignmentInfos = new ActorAlignmentInformations();
        };
        GameRolePlayCharacterInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayCharacterInformations(param1);
        };
        GameRolePlayCharacterInformations.prototype.serializeAs_GameRolePlayCharacterInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayHumanoidInformations.call(this, param1);
            this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
        };
        GameRolePlayCharacterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayCharacterInformations(param1);
        };
        GameRolePlayCharacterInformations.prototype.deserializeAs_GameRolePlayCharacterInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.alignmentInfos = new ActorAlignmentInformations();
            this.alignmentInfos.deserialize(param1);
        };
        GameRolePlayCharacterInformations.ID = 36;
        return GameRolePlayCharacterInformations;
    })(GameRolePlayHumanoidInformations);
    Protocol.GameRolePlayCharacterInformations = GameRolePlayCharacterInformations;
    var GameRolePlayGroupMonsterInformations = (function (_super) {
        __extends(GameRolePlayGroupMonsterInformations, _super);
        function GameRolePlayGroupMonsterInformations() {
            this.staticInfos = new GroupMonsterStaticInformations();
            this.creationTime = 0;
            this.ageBonusRate = 0;
            this.lootShare = 0;
            this.alignmentSide = 0;
            this.keyRingBonus = false;
            this.hasHardcoreDrop = false;
            this.hasAVARewardToken = false;
            _super.call(this);
        }
        GameRolePlayGroupMonsterInformations.prototype.getTypeId = function () {
            return GameRolePlayGroupMonsterInformations.ID;
        };
        GameRolePlayGroupMonsterInformations.prototype.reset = function () {
            this.staticInfos = new GroupMonsterStaticInformations();
            this.creationTime = 0;
            this.ageBonusRate = 0;
            this.lootShare = 0;
            this.alignmentSide = 0;
            this.keyRingBonus = false;
            this.hasHardcoreDrop = false;
            this.hasAVARewardToken = false;
        };
        GameRolePlayGroupMonsterInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayGroupMonsterInformations(param1);
        };
        GameRolePlayGroupMonsterInformations.prototype.serializeAs_GameRolePlayGroupMonsterInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.keyRingBonus);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.hasHardcoreDrop);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.hasAVARewardToken);
            param1.writeByte(_loc2_);
            param1.writeShort(this.staticInfos.getTypeId());
            this.staticInfos.serialize(param1);
            if (this.creationTime < 0 || this.creationTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.creationTime + ') on element creationTime.');
            }
            param1.writeDouble(this.creationTime);
            if (this.ageBonusRate < 0) {
                throw new Error('Forbidden value (' + this.ageBonusRate + ') on element ageBonusRate.');
            }
            param1.writeInt(this.ageBonusRate);
            if (this.lootShare < -1 || this.lootShare > 8) {
                throw new Error('Forbidden value (' + this.lootShare + ') on element lootShare.');
            }
            param1.writeByte(this.lootShare);
            param1.writeByte(this.alignmentSide);
        };
        GameRolePlayGroupMonsterInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayGroupMonsterInformations(param1);
        };
        GameRolePlayGroupMonsterInformations.prototype.deserializeAs_GameRolePlayGroupMonsterInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readByte();
            this.keyRingBonus = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.hasHardcoreDrop = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.hasAVARewardToken = BooleanByteWrapper.getFlag(_loc2_, 2);
            var _loc3_ = param1.readUnsignedShort();
            this.staticInfos = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc3_);
            this.staticInfos.deserialize(param1);
            this.creationTime = param1.readDouble();
            if (this.creationTime < 0 || this.creationTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.creationTime + ') on element of GameRolePlayGroupMonsterInformations.creationTime.');
            }
            this.ageBonusRate = param1.readInt();
            if (this.ageBonusRate < 0) {
                throw new Error('Forbidden value (' + this.ageBonusRate + ') on element of GameRolePlayGroupMonsterInformations.ageBonusRate.');
            }
            this.lootShare = param1.readByte();
            if (this.lootShare < -1 || this.lootShare > 8) {
                throw new Error('Forbidden value (' + this.lootShare + ') on element of GameRolePlayGroupMonsterInformations.lootShare.');
            }
            this.alignmentSide = param1.readByte();
        };
        GameRolePlayGroupMonsterInformations.ID = 160;
        return GameRolePlayGroupMonsterInformations;
    })(GameRolePlayActorInformations);
    Protocol.GameRolePlayGroupMonsterInformations = GameRolePlayGroupMonsterInformations;
    var GameRolePlayGroupMonsterWaveInformations = (function (_super) {
        __extends(GameRolePlayGroupMonsterWaveInformations, _super);
        function GameRolePlayGroupMonsterWaveInformations() {
            this.nbWaves = 0;
            this.alternatives = [];
            _super.call(this);
        }
        GameRolePlayGroupMonsterWaveInformations.prototype.getTypeId = function () {
            return GameRolePlayGroupMonsterWaveInformations.ID;
        };
        GameRolePlayGroupMonsterWaveInformations.prototype.reset = function () {
            this.nbWaves = 0;
            this.alternatives = [];
        };
        GameRolePlayGroupMonsterWaveInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
        };
        GameRolePlayGroupMonsterWaveInformations.prototype.serializeAs_GameRolePlayGroupMonsterWaveInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayGroupMonsterInformations.call(this, param1);
            if (this.nbWaves < 0) {
                throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
            }
            param1.writeByte(this.nbWaves);
            param1.writeShort(this.alternatives.length);
            var _loc2_ = 0;
            while (_loc2_ < this.alternatives.length) {
                param1.writeShort((this.alternatives[_loc2_]).getTypeId());
                (this.alternatives[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        GameRolePlayGroupMonsterWaveInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
        };
        GameRolePlayGroupMonsterWaveInformations.prototype.deserializeAs_GameRolePlayGroupMonsterWaveInformations = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.nbWaves = param1.readByte();
            if (this.nbWaves < 0) {
                throw new Error('Forbidden value (' + this.nbWaves + ') on element of GameRolePlayGroupMonsterWaveInformations.nbWaves.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.alternatives.push(_loc5_);
                _loc3_++;
            }
        };
        GameRolePlayGroupMonsterWaveInformations.ID = 464;
        return GameRolePlayGroupMonsterWaveInformations;
    })(GameRolePlayGroupMonsterInformations);
    Protocol.GameRolePlayGroupMonsterWaveInformations = GameRolePlayGroupMonsterWaveInformations;
    var GameRolePlayHumanoidInformations = (function (_super) {
        __extends(GameRolePlayHumanoidInformations, _super);
        function GameRolePlayHumanoidInformations() {
            this.humanoidInfo = new HumanInformations();
            this.accountId = 0;
            _super.call(this);
        }
        GameRolePlayHumanoidInformations.prototype.getTypeId = function () {
            return GameRolePlayHumanoidInformations.ID;
        };
        GameRolePlayHumanoidInformations.prototype.reset = function () {
            this.humanoidInfo = new HumanInformations();
            this.accountId = 0;
        };
        GameRolePlayHumanoidInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayHumanoidInformations(param1);
        };
        GameRolePlayHumanoidInformations.prototype.serializeAs_GameRolePlayHumanoidInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayNamedActorInformations.call(this, param1);
            param1.writeShort(this.humanoidInfo.getTypeId());
            this.humanoidInfo.serialize(param1);
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
            }
            param1.writeInt(this.accountId);
        };
        GameRolePlayHumanoidInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayHumanoidInformations(param1);
        };
        GameRolePlayHumanoidInformations.prototype.deserializeAs_GameRolePlayHumanoidInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            this.humanoidInfo = ProtocolTypeManager.getInstance(HumanInformations, _loc2_);
            this.humanoidInfo.deserialize(param1);
            this.accountId = param1.readInt();
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element of GameRolePlayHumanoidInformations.accountId.');
            }
        };
        GameRolePlayHumanoidInformations.ID = 159;
        return GameRolePlayHumanoidInformations;
    })(GameRolePlayNamedActorInformations);
    Protocol.GameRolePlayHumanoidInformations = GameRolePlayHumanoidInformations;
    var GameRolePlayMerchantInformations = (function (_super) {
        __extends(GameRolePlayMerchantInformations, _super);
        function GameRolePlayMerchantInformations() {
            this.sellType = 0;
            this.options = [];
            _super.call(this);
        }
        GameRolePlayMerchantInformations.prototype.getTypeId = function () {
            return GameRolePlayMerchantInformations.ID;
        };
        GameRolePlayMerchantInformations.prototype.reset = function () {
            this.sellType = 0;
            this.options = [];
        };
        GameRolePlayMerchantInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayMerchantInformations(param1);
        };
        GameRolePlayMerchantInformations.prototype.serializeAs_GameRolePlayMerchantInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayNamedActorInformations.call(this, param1);
            if (this.sellType < 0) {
                throw new Error('Forbidden value (' + this.sellType + ') on element sellType.');
            }
            param1.writeByte(this.sellType);
            param1.writeShort(this.options.length);
            var _loc2_ = 0;
            while (_loc2_ < this.options.length) {
                param1.writeShort((this.options[_loc2_]).getTypeId());
                (this.options[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        GameRolePlayMerchantInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayMerchantInformations(param1);
        };
        GameRolePlayMerchantInformations.prototype.deserializeAs_GameRolePlayMerchantInformations = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.sellType = param1.readByte();
            if (this.sellType < 0) {
                throw new Error('Forbidden value (' + this.sellType + ') on element of GameRolePlayMerchantInformations.sellType.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(HumanOption, _loc4_);
                _loc5_.deserialize(param1);
                this.options.push(_loc5_);
                _loc3_++;
            }
        };
        GameRolePlayMerchantInformations.ID = 129;
        return GameRolePlayMerchantInformations;
    })(GameRolePlayNamedActorInformations);
    Protocol.GameRolePlayMerchantInformations = GameRolePlayMerchantInformations;
    var GameRolePlayMountInformations = (function (_super) {
        __extends(GameRolePlayMountInformations, _super);
        function GameRolePlayMountInformations() {
            this.ownerName = '';
            this.level = 0;
            _super.call(this);
        }
        GameRolePlayMountInformations.prototype.getTypeId = function () {
            return GameRolePlayMountInformations.ID;
        };
        GameRolePlayMountInformations.prototype.reset = function () {
            this.ownerName = '';
            this.level = 0;
        };
        GameRolePlayMountInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayMountInformations(param1);
        };
        GameRolePlayMountInformations.prototype.serializeAs_GameRolePlayMountInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayNamedActorInformations.call(this, param1);
            param1.writeUTF(this.ownerName);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
        };
        GameRolePlayMountInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayMountInformations(param1);
        };
        GameRolePlayMountInformations.prototype.deserializeAs_GameRolePlayMountInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.ownerName = param1.readUTF();
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameRolePlayMountInformations.level.');
            }
        };
        GameRolePlayMountInformations.ID = 180;
        return GameRolePlayMountInformations;
    })(GameRolePlayNamedActorInformations);
    Protocol.GameRolePlayMountInformations = GameRolePlayMountInformations;
    var GameRolePlayMutantInformations = (function (_super) {
        __extends(GameRolePlayMutantInformations, _super);
        function GameRolePlayMutantInformations() {
            this.monsterId = 0;
            this.powerLevel = 0;
            _super.call(this);
        }
        GameRolePlayMutantInformations.prototype.getTypeId = function () {
            return GameRolePlayMutantInformations.ID;
        };
        GameRolePlayMutantInformations.prototype.reset = function () {
            this.monsterId = 0;
            this.powerLevel = 0;
        };
        GameRolePlayMutantInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayMutantInformations(param1);
        };
        GameRolePlayMutantInformations.prototype.serializeAs_GameRolePlayMutantInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayHumanoidInformations.call(this, param1);
            if (this.monsterId < 0) {
                throw new Error('Forbidden value (' + this.monsterId + ') on element monsterId.');
            }
            param1.writeVarShort(this.monsterId);
            param1.writeByte(this.powerLevel);
        };
        GameRolePlayMutantInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayMutantInformations(param1);
        };
        GameRolePlayMutantInformations.prototype.deserializeAs_GameRolePlayMutantInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.monsterId = param1.readVarUhShort();
            if (this.monsterId < 0) {
                throw new Error('Forbidden value (' + this.monsterId + ') on element of GameRolePlayMutantInformations.monsterId.');
            }
            this.powerLevel = param1.readByte();
        };
        GameRolePlayMutantInformations.ID = 3;
        return GameRolePlayMutantInformations;
    })(GameRolePlayHumanoidInformations);
    Protocol.GameRolePlayMutantInformations = GameRolePlayMutantInformations;
    var GameRolePlayNamedActorInformations = (function (_super) {
        __extends(GameRolePlayNamedActorInformations, _super);
        function GameRolePlayNamedActorInformations() {
            this.name = '';
            _super.call(this);
        }
        GameRolePlayNamedActorInformations.prototype.getTypeId = function () {
            return GameRolePlayNamedActorInformations.ID;
        };
        GameRolePlayNamedActorInformations.prototype.reset = function () {
            this.name = '';
        };
        GameRolePlayNamedActorInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayNamedActorInformations(param1);
        };
        GameRolePlayNamedActorInformations.prototype.serializeAs_GameRolePlayNamedActorInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
            param1.writeUTF(this.name);
        };
        GameRolePlayNamedActorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayNamedActorInformations(param1);
        };
        GameRolePlayNamedActorInformations.prototype.deserializeAs_GameRolePlayNamedActorInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.name = param1.readUTF();
        };
        GameRolePlayNamedActorInformations.ID = 154;
        return GameRolePlayNamedActorInformations;
    })(GameRolePlayActorInformations);
    Protocol.GameRolePlayNamedActorInformations = GameRolePlayNamedActorInformations;
    var GameRolePlayNpcInformations = (function (_super) {
        __extends(GameRolePlayNpcInformations, _super);
        function GameRolePlayNpcInformations() {
            this.npcId = 0;
            this.sex = false;
            this.specialArtworkId = 0;
            _super.call(this);
        }
        GameRolePlayNpcInformations.prototype.getTypeId = function () {
            return GameRolePlayNpcInformations.ID;
        };
        GameRolePlayNpcInformations.prototype.reset = function () {
            this.npcId = 0;
            this.sex = false;
            this.specialArtworkId = 0;
        };
        GameRolePlayNpcInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayNpcInformations(param1);
        };
        GameRolePlayNpcInformations.prototype.serializeAs_GameRolePlayNpcInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
            }
            param1.writeVarShort(this.npcId);
            param1.writeBoolean(this.sex);
            if (this.specialArtworkId < 0) {
                throw new Error('Forbidden value (' + this.specialArtworkId + ') on element specialArtworkId.');
            }
            param1.writeVarShort(this.specialArtworkId);
        };
        GameRolePlayNpcInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayNpcInformations(param1);
        };
        GameRolePlayNpcInformations.prototype.deserializeAs_GameRolePlayNpcInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.npcId = param1.readVarUhShort();
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayNpcInformations.npcId.');
            }
            this.sex = param1.readBoolean();
            this.specialArtworkId = param1.readVarUhShort();
            if (this.specialArtworkId < 0) {
                throw new Error('Forbidden value (' + this.specialArtworkId + ') on element of GameRolePlayNpcInformations.specialArtworkId.');
            }
        };
        GameRolePlayNpcInformations.ID = 156;
        return GameRolePlayNpcInformations;
    })(GameRolePlayActorInformations);
    Protocol.GameRolePlayNpcInformations = GameRolePlayNpcInformations;
    var GameRolePlayNpcWithQuestInformations = (function (_super) {
        __extends(GameRolePlayNpcWithQuestInformations, _super);
        function GameRolePlayNpcWithQuestInformations() {
            this.questFlag = new GameRolePlayNpcQuestFlag();
            _super.call(this);
        }
        GameRolePlayNpcWithQuestInformations.prototype.getTypeId = function () {
            return GameRolePlayNpcWithQuestInformations.ID;
        };
        GameRolePlayNpcWithQuestInformations.prototype.reset = function () {
            this.questFlag = new GameRolePlayNpcQuestFlag();
        };
        GameRolePlayNpcWithQuestInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayNpcWithQuestInformations(param1);
        };
        GameRolePlayNpcWithQuestInformations.prototype.serializeAs_GameRolePlayNpcWithQuestInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayNpcInformations.call(this, param1);
            this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(param1);
        };
        GameRolePlayNpcWithQuestInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayNpcWithQuestInformations(param1);
        };
        GameRolePlayNpcWithQuestInformations.prototype.deserializeAs_GameRolePlayNpcWithQuestInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.questFlag = new GameRolePlayNpcQuestFlag();
            this.questFlag.deserialize(param1);
        };
        GameRolePlayNpcWithQuestInformations.ID = 383;
        return GameRolePlayNpcWithQuestInformations;
    })(GameRolePlayNpcInformations);
    Protocol.GameRolePlayNpcWithQuestInformations = GameRolePlayNpcWithQuestInformations;
    var GameRolePlayPortalInformations = (function (_super) {
        __extends(GameRolePlayPortalInformations, _super);
        function GameRolePlayPortalInformations() {
            this.portal = new PortalInformation();
            _super.call(this);
        }
        GameRolePlayPortalInformations.prototype.getTypeId = function () {
            return GameRolePlayPortalInformations.ID;
        };
        GameRolePlayPortalInformations.prototype.reset = function () {
            this.portal = new PortalInformation();
        };
        GameRolePlayPortalInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayPortalInformations(param1);
        };
        GameRolePlayPortalInformations.prototype.serializeAs_GameRolePlayPortalInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
            param1.writeShort(this.portal.getTypeId());
            this.portal.serialize(param1);
        };
        GameRolePlayPortalInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayPortalInformations(param1);
        };
        GameRolePlayPortalInformations.prototype.deserializeAs_GameRolePlayPortalInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            this.portal = ProtocolTypeManager.getInstance(PortalInformation, _loc2_);
            this.portal.deserialize(param1);
        };
        GameRolePlayPortalInformations.ID = 467;
        return GameRolePlayPortalInformations;
    })(GameRolePlayActorInformations);
    Protocol.GameRolePlayPortalInformations = GameRolePlayPortalInformations;
    var GameRolePlayPrismInformations = (function (_super) {
        __extends(GameRolePlayPrismInformations, _super);
        function GameRolePlayPrismInformations() {
            this.prism = new PrismInformation();
            _super.call(this);
        }
        GameRolePlayPrismInformations.prototype.getTypeId = function () {
            return GameRolePlayPrismInformations.ID;
        };
        GameRolePlayPrismInformations.prototype.reset = function () {
            this.prism = new PrismInformation();
        };
        GameRolePlayPrismInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayPrismInformations(param1);
        };
        GameRolePlayPrismInformations.prototype.serializeAs_GameRolePlayPrismInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
            param1.writeShort(this.prism.getTypeId());
            this.prism.serialize(param1);
        };
        GameRolePlayPrismInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayPrismInformations(param1);
        };
        GameRolePlayPrismInformations.prototype.deserializeAs_GameRolePlayPrismInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            this.prism = ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
            this.prism.deserialize(param1);
        };
        GameRolePlayPrismInformations.ID = 161;
        return GameRolePlayPrismInformations;
    })(GameRolePlayActorInformations);
    Protocol.GameRolePlayPrismInformations = GameRolePlayPrismInformations;
    var GameRolePlayTreasureHintInformations = (function (_super) {
        __extends(GameRolePlayTreasureHintInformations, _super);
        function GameRolePlayTreasureHintInformations() {
            this.npcId = 0;
            _super.call(this);
        }
        GameRolePlayTreasureHintInformations.prototype.getTypeId = function () {
            return GameRolePlayTreasureHintInformations.ID;
        };
        GameRolePlayTreasureHintInformations.prototype.reset = function () {
            this.npcId = 0;
        };
        GameRolePlayTreasureHintInformations.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayTreasureHintInformations(param1);
        };
        GameRolePlayTreasureHintInformations.prototype.serializeAs_GameRolePlayTreasureHintInformations = function (param1) {
            _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
            }
            param1.writeVarShort(this.npcId);
        };
        GameRolePlayTreasureHintInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayTreasureHintInformations(param1);
        };
        GameRolePlayTreasureHintInformations.prototype.deserializeAs_GameRolePlayTreasureHintInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.npcId = param1.readVarUhShort();
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayTreasureHintInformations.npcId.');
            }
        };
        GameRolePlayTreasureHintInformations.ID = 471;
        return GameRolePlayTreasureHintInformations;
    })(GameRolePlayActorInformations);
    Protocol.GameRolePlayTreasureHintInformations = GameRolePlayTreasureHintInformations;
    var GroupMonsterStaticInformations = (function () {
        function GroupMonsterStaticInformations() {
            this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
            this.underlings = [];
        }
        GroupMonsterStaticInformations.prototype.getTypeId = function () {
            return GroupMonsterStaticInformations.ID;
        };
        GroupMonsterStaticInformations.prototype.reset = function () {
            this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
            this.underlings = [];
        };
        GroupMonsterStaticInformations.prototype.serialize = function (param1) {
            this.serializeAs_GroupMonsterStaticInformations(param1);
        };
        GroupMonsterStaticInformations.prototype.serializeAs_GroupMonsterStaticInformations = function (param1) {
            this.mainCreatureLightInfos.serializeAs_MonsterInGroupLightInformations(param1);
            param1.writeShort(this.underlings.length);
            var _loc2_ = 0;
            while (_loc2_ < this.underlings.length) {
                (this.underlings[_loc2_]).serializeAs_MonsterInGroupInformations(param1);
                _loc2_++;
            }
        };
        GroupMonsterStaticInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GroupMonsterStaticInformations(param1);
        };
        GroupMonsterStaticInformations.prototype.deserializeAs_GroupMonsterStaticInformations = function (param1) {
            var _loc4_ = null;
            this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
            this.mainCreatureLightInfos.deserialize(param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MonsterInGroupInformations();
                _loc4_.deserialize(param1);
                this.underlings.push(_loc4_);
                _loc3_++;
            }
        };
        GroupMonsterStaticInformations.ID = 140;
        return GroupMonsterStaticInformations;
    })();
    Protocol.GroupMonsterStaticInformations = GroupMonsterStaticInformations;
    var GroupMonsterStaticInformationsWithAlternatives = (function (_super) {
        __extends(GroupMonsterStaticInformationsWithAlternatives, _super);
        function GroupMonsterStaticInformationsWithAlternatives() {
            this.alternatives = [];
            _super.call(this);
        }
        GroupMonsterStaticInformationsWithAlternatives.prototype.getTypeId = function () {
            return GroupMonsterStaticInformationsWithAlternatives.ID;
        };
        GroupMonsterStaticInformationsWithAlternatives.prototype.reset = function () {
            this.alternatives = [];
        };
        GroupMonsterStaticInformationsWithAlternatives.prototype.serialize = function (param1) {
            this.serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
        };
        GroupMonsterStaticInformationsWithAlternatives.prototype.serializeAs_GroupMonsterStaticInformationsWithAlternatives = function (param1) {
            _super.prototype.serializeAs_GroupMonsterStaticInformations.call(this, param1);
            param1.writeShort(this.alternatives.length);
            var _loc2_ = 0;
            while (_loc2_ < this.alternatives.length) {
                (this.alternatives[_loc2_]).serializeAs_AlternativeMonstersInGroupLightInformations(param1);
                _loc2_++;
            }
        };
        GroupMonsterStaticInformationsWithAlternatives.prototype.deserialize = function (param1) {
            this.deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
        };
        GroupMonsterStaticInformationsWithAlternatives.prototype.deserializeAs_GroupMonsterStaticInformationsWithAlternatives = function (param1) {
            var _loc4_ = null;
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new AlternativeMonstersInGroupLightInformations();
                _loc4_.deserialize(param1);
                this.alternatives.push(_loc4_);
                _loc3_++;
            }
        };
        GroupMonsterStaticInformationsWithAlternatives.ID = 396;
        return GroupMonsterStaticInformationsWithAlternatives;
    })(GroupMonsterStaticInformations);
    Protocol.GroupMonsterStaticInformationsWithAlternatives = GroupMonsterStaticInformationsWithAlternatives;
    var GuildInAllianceInformations = (function (_super) {
        __extends(GuildInAllianceInformations, _super);
        function GuildInAllianceInformations() {
            this.guildLevel = 0;
            this.nbMembers = 0;
            this.enabled = false;
            _super.call(this);
        }
        GuildInAllianceInformations.prototype.getTypeId = function () {
            return GuildInAllianceInformations.ID;
        };
        GuildInAllianceInformations.prototype.reset = function () {
            this.guildLevel = 0;
            this.nbMembers = 0;
            this.enabled = false;
        };
        GuildInAllianceInformations.prototype.serialize = function (param1) {
            this.serializeAs_GuildInAllianceInformations(param1);
        };
        GuildInAllianceInformations.prototype.serializeAs_GuildInAllianceInformations = function (param1) {
            _super.prototype.serializeAs_GuildInformations.call(this, param1);
            if (this.guildLevel < 1 || this.guildLevel > 200) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
            }
            param1.writeByte(this.guildLevel);
            if (this.nbMembers < 1 || this.nbMembers > 240) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
            }
            param1.writeByte(this.nbMembers);
            param1.writeBoolean(this.enabled);
        };
        GuildInAllianceInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildInAllianceInformations(param1);
        };
        GuildInAllianceInformations.prototype.deserializeAs_GuildInAllianceInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guildLevel = param1.readUnsignedByte();
            if (this.guildLevel < 1 || this.guildLevel > 200) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildInAllianceInformations.guildLevel.');
            }
            this.nbMembers = param1.readUnsignedByte();
            if (this.nbMembers < 1 || this.nbMembers > 240) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildInAllianceInformations.nbMembers.');
            }
            this.enabled = param1.readBoolean();
        };
        GuildInAllianceInformations.ID = 420;
        return GuildInAllianceInformations;
    })(GuildInformations);
    Protocol.GuildInAllianceInformations = GuildInAllianceInformations;
    var GuildInformations = (function (_super) {
        __extends(GuildInformations, _super);
        function GuildInformations() {
            this.guildEmblem = new GuildEmblem();
            _super.call(this);
        }
        GuildInformations.prototype.getTypeId = function () {
            return GuildInformations.ID;
        };
        GuildInformations.prototype.reset = function () {
            this.guildEmblem = new GuildEmblem();
        };
        GuildInformations.prototype.serialize = function (param1) {
            this.serializeAs_GuildInformations(param1);
        };
        GuildInformations.prototype.serializeAs_GuildInformations = function (param1) {
            _super.prototype.serializeAs_BasicGuildInformations.call(this, param1);
            this.guildEmblem.serializeAs_GuildEmblem(param1);
        };
        GuildInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildInformations(param1);
        };
        GuildInformations.prototype.deserializeAs_GuildInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guildEmblem = new GuildEmblem();
            this.guildEmblem.deserialize(param1);
        };
        GuildInformations.ID = 127;
        return GuildInformations;
    })(BasicGuildInformations);
    Protocol.GuildInformations = GuildInformations;
    var HumanInformations = (function () {
        function HumanInformations() {
            this.restrictions = new ActorRestrictionsInformations();
            this.sex = false;
            this.options = [];
        }
        HumanInformations.prototype.getTypeId = function () {
            return HumanInformations.ID;
        };
        HumanInformations.prototype.reset = function () {
            this.restrictions = new ActorRestrictionsInformations();
            this.sex = false;
            this.options = [];
        };
        HumanInformations.prototype.serialize = function (param1) {
            this.serializeAs_HumanInformations(param1);
        };
        HumanInformations.prototype.serializeAs_HumanInformations = function (param1) {
            this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
            param1.writeBoolean(this.sex);
            param1.writeShort(this.options.length);
            var _loc2_ = 0;
            while (_loc2_ < this.options.length) {
                param1.writeShort((this.options[_loc2_]).getTypeId());
                (this.options[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        HumanInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanInformations(param1);
        };
        HumanInformations.prototype.deserializeAs_HumanInformations = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            this.restrictions = new ActorRestrictionsInformations();
            this.restrictions.deserialize(param1);
            this.sex = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(HumanOption, _loc4_);
                _loc5_.deserialize(param1);
                this.options.push(_loc5_);
                _loc3_++;
            }
        };
        HumanInformations.ID = 157;
        return HumanInformations;
    })();
    Protocol.HumanInformations = HumanInformations;
    var HumanOption = (function () {
        function HumanOption() {
        }
        HumanOption.prototype.getTypeId = function () {
            return HumanOption.ID;
        };
        HumanOption.prototype.reset = function () {
        };
        HumanOption.prototype.serialize = function (param1) {
            this.serializeAs_HumanOption(param1);
        };
        HumanOption.prototype.serializeAs_HumanOption = function (param1) {
        };
        HumanOption.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOption(param1);
        };
        HumanOption.prototype.deserializeAs_HumanOption = function (param1) {
        };
        HumanOption.ID = 406;
        return HumanOption;
    })();
    Protocol.HumanOption = HumanOption;
    var HumanOptionAlliance = (function (_super) {
        __extends(HumanOptionAlliance, _super);
        function HumanOptionAlliance() {
            this.allianceInformations = new AllianceInformations();
            this.aggressable = 0;
            _super.call(this);
        }
        HumanOptionAlliance.prototype.getTypeId = function () {
            return HumanOptionAlliance.ID;
        };
        HumanOptionAlliance.prototype.reset = function () {
            this.allianceInformations = new AllianceInformations();
            this.aggressable = 0;
        };
        HumanOptionAlliance.prototype.serialize = function (param1) {
            this.serializeAs_HumanOptionAlliance(param1);
        };
        HumanOptionAlliance.prototype.serializeAs_HumanOptionAlliance = function (param1) {
            _super.prototype.serializeAs_HumanOption.call(this, param1);
            this.allianceInformations.serializeAs_AllianceInformations(param1);
            param1.writeByte(this.aggressable);
        };
        HumanOptionAlliance.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOptionAlliance(param1);
        };
        HumanOptionAlliance.prototype.deserializeAs_HumanOptionAlliance = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceInformations = new AllianceInformations();
            this.allianceInformations.deserialize(param1);
            this.aggressable = param1.readByte();
            if (this.aggressable < 0) {
                throw new Error('Forbidden value (' + this.aggressable + ') on element of HumanOptionAlliance.aggressable.');
            }
        };
        HumanOptionAlliance.ID = 425;
        return HumanOptionAlliance;
    })(HumanOption);
    Protocol.HumanOptionAlliance = HumanOptionAlliance;
    var HumanOptionEmote = (function (_super) {
        __extends(HumanOptionEmote, _super);
        function HumanOptionEmote() {
            this.emoteId = 0;
            this.emoteStartTime = 0;
            _super.call(this);
        }
        HumanOptionEmote.prototype.getTypeId = function () {
            return HumanOptionEmote.ID;
        };
        HumanOptionEmote.prototype.reset = function () {
            this.emoteId = 0;
            this.emoteStartTime = 0;
        };
        HumanOptionEmote.prototype.serialize = function (param1) {
            this.serializeAs_HumanOptionEmote(param1);
        };
        HumanOptionEmote.prototype.serializeAs_HumanOptionEmote = function (param1) {
            _super.prototype.serializeAs_HumanOption.call(this, param1);
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
            }
            param1.writeByte(this.emoteId);
            if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.emoteStartTime + ') on element emoteStartTime.');
            }
            param1.writeDouble(this.emoteStartTime);
        };
        HumanOptionEmote.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOptionEmote(param1);
        };
        HumanOptionEmote.prototype.deserializeAs_HumanOptionEmote = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.emoteId = param1.readUnsignedByte();
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element of HumanOptionEmote.emoteId.');
            }
            this.emoteStartTime = param1.readDouble();
            if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.emoteStartTime + ') on element of HumanOptionEmote.emoteStartTime.');
            }
        };
        HumanOptionEmote.ID = 407;
        return HumanOptionEmote;
    })(HumanOption);
    Protocol.HumanOptionEmote = HumanOptionEmote;
    var HumanOptionFollowers = (function (_super) {
        __extends(HumanOptionFollowers, _super);
        function HumanOptionFollowers() {
            this.followingCharactersLook = [];
            _super.call(this);
        }
        HumanOptionFollowers.prototype.getTypeId = function () {
            return HumanOptionFollowers.ID;
        };
        HumanOptionFollowers.prototype.reset = function () {
            this.followingCharactersLook = [];
        };
        HumanOptionFollowers.prototype.serialize = function (param1) {
            this.serializeAs_HumanOptionFollowers(param1);
        };
        HumanOptionFollowers.prototype.serializeAs_HumanOptionFollowers = function (param1) {
            _super.prototype.serializeAs_HumanOption.call(this, param1);
            param1.writeShort(this.followingCharactersLook.length);
            var _loc2_ = 0;
            while (_loc2_ < this.followingCharactersLook.length) {
                (this.followingCharactersLook[_loc2_]).serializeAs_IndexedEntityLook(param1);
                _loc2_++;
            }
        };
        HumanOptionFollowers.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOptionFollowers(param1);
        };
        HumanOptionFollowers.prototype.deserializeAs_HumanOptionFollowers = function (param1) {
            var _loc4_ = null;
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new IndexedEntityLook();
                _loc4_.deserialize(param1);
                this.followingCharactersLook.push(_loc4_);
                _loc3_++;
            }
        };
        HumanOptionFollowers.ID = 410;
        return HumanOptionFollowers;
    })(HumanOption);
    Protocol.HumanOptionFollowers = HumanOptionFollowers;
    var HumanOptionGuild = (function (_super) {
        __extends(HumanOptionGuild, _super);
        function HumanOptionGuild() {
            this.guildInformations = new GuildInformations();
            _super.call(this);
        }
        HumanOptionGuild.prototype.getTypeId = function () {
            return HumanOptionGuild.ID;
        };
        HumanOptionGuild.prototype.reset = function () {
            this.guildInformations = new GuildInformations();
        };
        HumanOptionGuild.prototype.serialize = function (param1) {
            this.serializeAs_HumanOptionGuild(param1);
        };
        HumanOptionGuild.prototype.serializeAs_HumanOptionGuild = function (param1) {
            _super.prototype.serializeAs_HumanOption.call(this, param1);
            this.guildInformations.serializeAs_GuildInformations(param1);
        };
        HumanOptionGuild.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOptionGuild(param1);
        };
        HumanOptionGuild.prototype.deserializeAs_HumanOptionGuild = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guildInformations = new GuildInformations();
            this.guildInformations.deserialize(param1);
        };
        HumanOptionGuild.ID = 409;
        return HumanOptionGuild;
    })(HumanOption);
    Protocol.HumanOptionGuild = HumanOptionGuild;
    var HumanOptionObjectUse = (function (_super) {
        __extends(HumanOptionObjectUse, _super);
        function HumanOptionObjectUse() {
            this.delayTypeId = 0;
            this.delayEndTime = 0;
            this.objectGID = 0;
            _super.call(this);
        }
        HumanOptionObjectUse.prototype.getTypeId = function () {
            return HumanOptionObjectUse.ID;
        };
        HumanOptionObjectUse.prototype.reset = function () {
            this.delayTypeId = 0;
            this.delayEndTime = 0;
            this.objectGID = 0;
        };
        HumanOptionObjectUse.prototype.serialize = function (param1) {
            this.serializeAs_HumanOptionObjectUse(param1);
        };
        HumanOptionObjectUse.prototype.serializeAs_HumanOptionObjectUse = function (param1) {
            _super.prototype.serializeAs_HumanOption.call(this, param1);
            param1.writeByte(this.delayTypeId);
            if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.delayEndTime + ') on element delayEndTime.');
            }
            param1.writeDouble(this.delayEndTime);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
        };
        HumanOptionObjectUse.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOptionObjectUse(param1);
        };
        HumanOptionObjectUse.prototype.deserializeAs_HumanOptionObjectUse = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.delayTypeId = param1.readByte();
            if (this.delayTypeId < 0) {
                throw new Error('Forbidden value (' + this.delayTypeId + ') on element of HumanOptionObjectUse.delayTypeId.');
            }
            this.delayEndTime = param1.readDouble();
            if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.delayEndTime + ') on element of HumanOptionObjectUse.delayEndTime.');
            }
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of HumanOptionObjectUse.objectGID.');
            }
        };
        HumanOptionObjectUse.ID = 449;
        return HumanOptionObjectUse;
    })(HumanOption);
    Protocol.HumanOptionObjectUse = HumanOptionObjectUse;
    var HumanOptionOrnament = (function (_super) {
        __extends(HumanOptionOrnament, _super);
        function HumanOptionOrnament() {
            this.ornamentId = 0;
            _super.call(this);
        }
        HumanOptionOrnament.prototype.getTypeId = function () {
            return HumanOptionOrnament.ID;
        };
        HumanOptionOrnament.prototype.reset = function () {
            this.ornamentId = 0;
        };
        HumanOptionOrnament.prototype.serialize = function (param1) {
            this.serializeAs_HumanOptionOrnament(param1);
        };
        HumanOptionOrnament.prototype.serializeAs_HumanOptionOrnament = function (param1) {
            _super.prototype.serializeAs_HumanOption.call(this, param1);
            if (this.ornamentId < 0) {
                throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
            }
            param1.writeVarShort(this.ornamentId);
        };
        HumanOptionOrnament.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOptionOrnament(param1);
        };
        HumanOptionOrnament.prototype.deserializeAs_HumanOptionOrnament = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.ornamentId = param1.readVarUhShort();
            if (this.ornamentId < 0) {
                throw new Error('Forbidden value (' + this.ornamentId + ') on element of HumanOptionOrnament.ornamentId.');
            }
        };
        HumanOptionOrnament.ID = 411;
        return HumanOptionOrnament;
    })(HumanOption);
    Protocol.HumanOptionOrnament = HumanOptionOrnament;
    var HumanOptionTitle = (function (_super) {
        __extends(HumanOptionTitle, _super);
        function HumanOptionTitle() {
            this.titleId = 0;
            this.titleParam = '';
            _super.call(this);
        }
        HumanOptionTitle.prototype.getTypeId = function () {
            return HumanOptionTitle.ID;
        };
        HumanOptionTitle.prototype.reset = function () {
            this.titleId = 0;
            this.titleParam = '';
        };
        HumanOptionTitle.prototype.serialize = function (param1) {
            this.serializeAs_HumanOptionTitle(param1);
        };
        HumanOptionTitle.prototype.serializeAs_HumanOptionTitle = function (param1) {
            _super.prototype.serializeAs_HumanOption.call(this, param1);
            if (this.titleId < 0) {
                throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
            }
            param1.writeVarShort(this.titleId);
            param1.writeUTF(this.titleParam);
        };
        HumanOptionTitle.prototype.deserialize = function (param1) {
            this.deserializeAs_HumanOptionTitle(param1);
        };
        HumanOptionTitle.prototype.deserializeAs_HumanOptionTitle = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.titleId = param1.readVarUhShort();
            if (this.titleId < 0) {
                throw new Error('Forbidden value (' + this.titleId + ') on element of HumanOptionTitle.titleId.');
            }
            this.titleParam = param1.readUTF();
        };
        HumanOptionTitle.ID = 408;
        return HumanOptionTitle;
    })(HumanOption);
    Protocol.HumanOptionTitle = HumanOptionTitle;
    var MonsterInGroupInformations = (function (_super) {
        __extends(MonsterInGroupInformations, _super);
        function MonsterInGroupInformations() {
            this.look = new EntityLook();
            _super.call(this);
        }
        MonsterInGroupInformations.prototype.getTypeId = function () {
            return MonsterInGroupInformations.ID;
        };
        MonsterInGroupInformations.prototype.reset = function () {
            this.look = new EntityLook();
        };
        MonsterInGroupInformations.prototype.serialize = function (param1) {
            this.serializeAs_MonsterInGroupInformations(param1);
        };
        MonsterInGroupInformations.prototype.serializeAs_MonsterInGroupInformations = function (param1) {
            _super.prototype.serializeAs_MonsterInGroupLightInformations.call(this, param1);
            this.look.serializeAs_EntityLook(param1);
        };
        MonsterInGroupInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_MonsterInGroupInformations(param1);
        };
        MonsterInGroupInformations.prototype.deserializeAs_MonsterInGroupInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.look = new EntityLook();
            this.look.deserialize(param1);
        };
        MonsterInGroupInformations.ID = 144;
        return MonsterInGroupInformations;
    })(MonsterInGroupLightInformations);
    Protocol.MonsterInGroupInformations = MonsterInGroupInformations;
    var MonsterInGroupLightInformations = (function () {
        function MonsterInGroupLightInformations() {
            this.creatureGenericId = 0;
            this.grade = 0;
        }
        MonsterInGroupLightInformations.prototype.getTypeId = function () {
            return MonsterInGroupLightInformations.ID;
        };
        MonsterInGroupLightInformations.prototype.reset = function () {
            this.creatureGenericId = 0;
            this.grade = 0;
        };
        MonsterInGroupLightInformations.prototype.serialize = function (param1) {
            this.serializeAs_MonsterInGroupLightInformations(param1);
        };
        MonsterInGroupLightInformations.prototype.serializeAs_MonsterInGroupLightInformations = function (param1) {
            param1.writeInt(this.creatureGenericId);
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element grade.');
            }
            param1.writeByte(this.grade);
        };
        MonsterInGroupLightInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_MonsterInGroupLightInformations(param1);
        };
        MonsterInGroupLightInformations.prototype.deserializeAs_MonsterInGroupLightInformations = function (param1) {
            this.creatureGenericId = param1.readInt();
            this.grade = param1.readByte();
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element of MonsterInGroupLightInformations.grade.');
            }
        };
        MonsterInGroupLightInformations.ID = 395;
        return MonsterInGroupLightInformations;
    })();
    Protocol.MonsterInGroupLightInformations = MonsterInGroupLightInformations;
    var ObjectItemInRolePlay = (function () {
        function ObjectItemInRolePlay() {
            this.cellId = 0;
            this.objectGID = 0;
        }
        ObjectItemInRolePlay.prototype.getTypeId = function () {
            return ObjectItemInRolePlay.ID;
        };
        ObjectItemInRolePlay.prototype.reset = function () {
            this.cellId = 0;
            this.objectGID = 0;
        };
        ObjectItemInRolePlay.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemInRolePlay(param1);
        };
        ObjectItemInRolePlay.prototype.serializeAs_ObjectItemInRolePlay = function (param1) {
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
            }
            param1.writeVarShort(this.cellId);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
        };
        ObjectItemInRolePlay.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemInRolePlay(param1);
        };
        ObjectItemInRolePlay.prototype.deserializeAs_ObjectItemInRolePlay = function (param1) {
            this.cellId = param1.readVarUhShort();
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element of ObjectItemInRolePlay.cellId.');
            }
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemInRolePlay.objectGID.');
            }
        };
        ObjectItemInRolePlay.ID = 198;
        return ObjectItemInRolePlay;
    })();
    Protocol.ObjectItemInRolePlay = ObjectItemInRolePlay;
    var DecraftedItemStackInfo = (function () {
        function DecraftedItemStackInfo() {
            this.objectUID = 0;
            this.bonusMin = 0;
            this.bonusMax = 0;
            this.runesId = [];
            this.runesQty = [];
        }
        DecraftedItemStackInfo.prototype.getTypeId = function () {
            return DecraftedItemStackInfo.ID;
        };
        DecraftedItemStackInfo.prototype.reset = function () {
            this.objectUID = 0;
            this.bonusMin = 0;
            this.bonusMax = 0;
            this.runesId = [];
            this.runesQty = [];
        };
        DecraftedItemStackInfo.prototype.serialize = function (param1) {
            this.serializeAs_DecraftedItemStackInfo(param1);
        };
        DecraftedItemStackInfo.prototype.serializeAs_DecraftedItemStackInfo = function (param1) {
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            param1.writeFloat(this.bonusMin);
            param1.writeFloat(this.bonusMax);
            param1.writeShort(this.runesId.length);
            var _loc2_ = 0;
            while (_loc2_ < this.runesId.length) {
                if (this.runesId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.runesId[_loc2_] + ') on element 4 (starting at 1) of runesId.');
                }
                param1.writeVarShort(this.runesId[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.runesQty.length);
            var _loc3_ = 0;
            while (_loc3_ < this.runesQty.length) {
                if (this.runesQty[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.runesQty[_loc3_] + ') on element 5 (starting at 1) of runesQty.');
                }
                param1.writeVarInt(this.runesQty[_loc3_]);
                _loc3_++;
            }
        };
        DecraftedItemStackInfo.prototype.deserialize = function (param1) {
            this.deserializeAs_DecraftedItemStackInfo(param1);
        };
        DecraftedItemStackInfo.prototype.deserializeAs_DecraftedItemStackInfo = function (param1) {
            var _loc6_ = 0;
            var _loc7_ = 0;
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of DecraftedItemStackInfo.objectUID.');
            }
            this.bonusMin = param1.readFloat();
            this.bonusMax = param1.readFloat();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readVarUhShort();
                if (_loc6_ < 0) {
                    throw new Error('Forbidden value (' + _loc6_ + ') on elements of runesId.');
                }
                this.runesId.push(_loc6_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = param1.readVarUhInt();
                if (_loc7_ < 0) {
                    throw new Error('Forbidden value (' + _loc7_ + ') on elements of runesQty.');
                }
                this.runesQty.push(_loc7_);
                _loc5_++;
            }
        };
        DecraftedItemStackInfo.ID = 481;
        return DecraftedItemStackInfo;
    })();
    Protocol.DecraftedItemStackInfo = DecraftedItemStackInfo;
    var JobCrafterDirectoryEntryJobInfo = (function () {
        function JobCrafterDirectoryEntryJobInfo() {
            this.jobId = 0;
            this.jobLevel = 0;
            this.free = false;
            this.minLevel = 0;
        }
        JobCrafterDirectoryEntryJobInfo.prototype.getTypeId = function () {
            return JobCrafterDirectoryEntryJobInfo.ID;
        };
        JobCrafterDirectoryEntryJobInfo.prototype.reset = function () {
            this.jobId = 0;
            this.jobLevel = 0;
            this.free = false;
            this.minLevel = 0;
        };
        JobCrafterDirectoryEntryJobInfo.prototype.serialize = function (param1) {
            this.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
        };
        JobCrafterDirectoryEntryJobInfo.prototype.serializeAs_JobCrafterDirectoryEntryJobInfo = function (param1) {
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
            }
            param1.writeByte(this.jobId);
            if (this.jobLevel < 1 || this.jobLevel > 200) {
                throw new Error('Forbidden value (' + this.jobLevel + ') on element jobLevel.');
            }
            param1.writeByte(this.jobLevel);
            param1.writeBoolean(this.free);
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error('Forbidden value (' + this.minLevel + ') on element minLevel.');
            }
            param1.writeByte(this.minLevel);
        };
        JobCrafterDirectoryEntryJobInfo.prototype.deserialize = function (param1) {
            this.deserializeAs_JobCrafterDirectoryEntryJobInfo(param1);
        };
        JobCrafterDirectoryEntryJobInfo.prototype.deserializeAs_JobCrafterDirectoryEntryJobInfo = function (param1) {
            this.jobId = param1.readByte();
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectoryEntryJobInfo.jobId.');
            }
            this.jobLevel = param1.readUnsignedByte();
            if (this.jobLevel < 1 || this.jobLevel > 200) {
                throw new Error('Forbidden value (' + this.jobLevel + ') on element of JobCrafterDirectoryEntryJobInfo.jobLevel.');
            }
            this.free = param1.readBoolean();
            this.minLevel = param1.readUnsignedByte();
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error('Forbidden value (' + this.minLevel + ') on element of JobCrafterDirectoryEntryJobInfo.minLevel.');
            }
        };
        JobCrafterDirectoryEntryJobInfo.ID = 195;
        return JobCrafterDirectoryEntryJobInfo;
    })();
    Protocol.JobCrafterDirectoryEntryJobInfo = JobCrafterDirectoryEntryJobInfo;
    var JobCrafterDirectoryEntryPlayerInfo = (function () {
        function JobCrafterDirectoryEntryPlayerInfo() {
            this.playerId = 0;
            this.playerName = '';
            this.alignmentSide = 0;
            this.breed = 0;
            this.sex = false;
            this.isInWorkshop = false;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.status = new PlayerStatus();
        }
        JobCrafterDirectoryEntryPlayerInfo.prototype.getTypeId = function () {
            return JobCrafterDirectoryEntryPlayerInfo.ID;
        };
        JobCrafterDirectoryEntryPlayerInfo.prototype.reset = function () {
            this.playerId = 0;
            this.playerName = '';
            this.alignmentSide = 0;
            this.breed = 0;
            this.sex = false;
            this.isInWorkshop = false;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.status = new PlayerStatus();
        };
        JobCrafterDirectoryEntryPlayerInfo.prototype.serialize = function (param1) {
            this.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        };
        JobCrafterDirectoryEntryPlayerInfo.prototype.serializeAs_JobCrafterDirectoryEntryPlayerInfo = function (param1) {
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
            }
            param1.writeVarInt(this.playerId);
            param1.writeUTF(this.playerName);
            param1.writeByte(this.alignmentSide);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            param1.writeBoolean(this.isInWorkshop);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeShort(this.status.getTypeId());
            this.status.serialize(param1);
        };
        JobCrafterDirectoryEntryPlayerInfo.prototype.deserialize = function (param1) {
            this.deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        };
        JobCrafterDirectoryEntryPlayerInfo.prototype.deserializeAs_JobCrafterDirectoryEntryPlayerInfo = function (param1) {
            this.playerId = param1.readVarUhInt();
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element of JobCrafterDirectoryEntryPlayerInfo.playerId.');
            }
            this.playerName = param1.readUTF();
            this.alignmentSide = param1.readByte();
            this.breed = param1.readByte();
            if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
                throw new Error('Forbidden value (' + this.breed + ') on element of JobCrafterDirectoryEntryPlayerInfo.breed.');
            }
            this.sex = param1.readBoolean();
            this.isInWorkshop = param1.readBoolean();
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of JobCrafterDirectoryEntryPlayerInfo.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of JobCrafterDirectoryEntryPlayerInfo.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of JobCrafterDirectoryEntryPlayerInfo.subAreaId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
        };
        JobCrafterDirectoryEntryPlayerInfo.ID = 194;
        return JobCrafterDirectoryEntryPlayerInfo;
    })();
    Protocol.JobCrafterDirectoryEntryPlayerInfo = JobCrafterDirectoryEntryPlayerInfo;
    var JobCrafterDirectoryListEntry = (function () {
        function JobCrafterDirectoryListEntry() {
            this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
            this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
        }
        JobCrafterDirectoryListEntry.prototype.getTypeId = function () {
            return JobCrafterDirectoryListEntry.ID;
        };
        JobCrafterDirectoryListEntry.prototype.reset = function () {
            this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
            this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
        };
        JobCrafterDirectoryListEntry.prototype.serialize = function (param1) {
            this.serializeAs_JobCrafterDirectoryListEntry(param1);
        };
        JobCrafterDirectoryListEntry.prototype.serializeAs_JobCrafterDirectoryListEntry = function (param1) {
            this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
            this.jobInfo.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
        };
        JobCrafterDirectoryListEntry.prototype.deserialize = function (param1) {
            this.deserializeAs_JobCrafterDirectoryListEntry(param1);
        };
        JobCrafterDirectoryListEntry.prototype.deserializeAs_JobCrafterDirectoryListEntry = function (param1) {
            this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
            this.playerInfo.deserialize(param1);
            this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
            this.jobInfo.deserialize(param1);
        };
        JobCrafterDirectoryListEntry.ID = 196;
        return JobCrafterDirectoryListEntry;
    })();
    Protocol.JobCrafterDirectoryListEntry = JobCrafterDirectoryListEntry;
    var JobCrafterDirectorySettings = (function () {
        function JobCrafterDirectorySettings() {
            this.jobId = 0;
            this.minLevel = 0;
            this.free = false;
        }
        JobCrafterDirectorySettings.prototype.getTypeId = function () {
            return JobCrafterDirectorySettings.ID;
        };
        JobCrafterDirectorySettings.prototype.reset = function () {
            this.jobId = 0;
            this.minLevel = 0;
            this.free = false;
        };
        JobCrafterDirectorySettings.prototype.serialize = function (param1) {
            this.serializeAs_JobCrafterDirectorySettings(param1);
        };
        JobCrafterDirectorySettings.prototype.serializeAs_JobCrafterDirectorySettings = function (param1) {
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
            }
            param1.writeByte(this.jobId);
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error('Forbidden value (' + this.minLevel + ') on element minLevel.');
            }
            param1.writeByte(this.minLevel);
            param1.writeBoolean(this.free);
        };
        JobCrafterDirectorySettings.prototype.deserialize = function (param1) {
            this.deserializeAs_JobCrafterDirectorySettings(param1);
        };
        JobCrafterDirectorySettings.prototype.deserializeAs_JobCrafterDirectorySettings = function (param1) {
            this.jobId = param1.readByte();
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectorySettings.jobId.');
            }
            this.minLevel = param1.readUnsignedByte();
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error('Forbidden value (' + this.minLevel + ') on element of JobCrafterDirectorySettings.minLevel.');
            }
            this.free = param1.readBoolean();
        };
        JobCrafterDirectorySettings.ID = 97;
        return JobCrafterDirectorySettings;
    })();
    Protocol.JobCrafterDirectorySettings = JobCrafterDirectorySettings;
    var JobDescription = (function () {
        function JobDescription() {
            this.jobId = 0;
            this.skills = [];
        }
        JobDescription.prototype.getTypeId = function () {
            return JobDescription.ID;
        };
        JobDescription.prototype.reset = function () {
            this.jobId = 0;
            this.skills = [];
        };
        JobDescription.prototype.serialize = function (param1) {
            this.serializeAs_JobDescription(param1);
        };
        JobDescription.prototype.serializeAs_JobDescription = function (param1) {
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
            }
            param1.writeByte(this.jobId);
            param1.writeShort(this.skills.length);
            var _loc2_ = 0;
            while (_loc2_ < this.skills.length) {
                param1.writeShort((this.skills[_loc2_]).getTypeId());
                (this.skills[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        JobDescription.prototype.deserialize = function (param1) {
            this.deserializeAs_JobDescription(param1);
        };
        JobDescription.prototype.deserializeAs_JobDescription = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            this.jobId = param1.readByte();
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element of JobDescription.jobId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(SkillActionDescription, _loc4_);
                _loc5_.deserialize(param1);
                this.skills.push(_loc5_);
                _loc3_++;
            }
        };
        JobDescription.ID = 101;
        return JobDescription;
    })();
    Protocol.JobDescription = JobDescription;
    var JobExperience = (function () {
        function JobExperience() {
            this.jobId = 0;
            this.jobLevel = 0;
            this.jobXP = 0;
            this.jobXpLevelFloor = 0;
            this.jobXpNextLevelFloor = 0;
        }
        JobExperience.prototype.getTypeId = function () {
            return JobExperience.ID;
        };
        JobExperience.prototype.reset = function () {
            this.jobId = 0;
            this.jobLevel = 0;
            this.jobXP = 0;
            this.jobXpLevelFloor = 0;
            this.jobXpNextLevelFloor = 0;
        };
        JobExperience.prototype.serialize = function (param1) {
            this.serializeAs_JobExperience(param1);
        };
        JobExperience.prototype.serializeAs_JobExperience = function (param1) {
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
            }
            param1.writeByte(this.jobId);
            if (this.jobLevel < 0 || this.jobLevel > 255) {
                throw new Error('Forbidden value (' + this.jobLevel + ') on element jobLevel.');
            }
            param1.writeByte(this.jobLevel);
            if (this.jobXP < 0 || this.jobXP > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.jobXP + ') on element jobXP.');
            }
            param1.writeVarLong(this.jobXP);
            if (this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.jobXpLevelFloor + ') on element jobXpLevelFloor.');
            }
            param1.writeVarLong(this.jobXpLevelFloor);
            if (this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.jobXpNextLevelFloor + ') on element jobXpNextLevelFloor.');
            }
            param1.writeVarLong(this.jobXpNextLevelFloor);
        };
        JobExperience.prototype.deserialize = function (param1) {
            this.deserializeAs_JobExperience(param1);
        };
        JobExperience.prototype.deserializeAs_JobExperience = function (param1) {
            this.jobId = param1.readByte();
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element of JobExperience.jobId.');
            }
            this.jobLevel = param1.readUnsignedByte();
            if (this.jobLevel < 0 || this.jobLevel > 255) {
                throw new Error('Forbidden value (' + this.jobLevel + ') on element of JobExperience.jobLevel.');
            }
            this.jobXP = param1.readVarUhLong();
            if (this.jobXP < 0 || this.jobXP > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.jobXP + ') on element of JobExperience.jobXP.');
            }
            this.jobXpLevelFloor = param1.readVarUhLong();
            if (this.jobXpLevelFloor < 0 || this.jobXpLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.jobXpLevelFloor + ') on element of JobExperience.jobXpLevelFloor.');
            }
            this.jobXpNextLevelFloor = param1.readVarUhLong();
            if (this.jobXpNextLevelFloor < 0 || this.jobXpNextLevelFloor > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.jobXpNextLevelFloor + ') on element of JobExperience.jobXpNextLevelFloor.');
            }
        };
        JobExperience.ID = 98;
        return JobExperience;
    })();
    Protocol.JobExperience = JobExperience;
    var DungeonPartyFinderPlayer = (function () {
        function DungeonPartyFinderPlayer() {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
            this.level = 0;
        }
        DungeonPartyFinderPlayer.prototype.getTypeId = function () {
            return DungeonPartyFinderPlayer.ID;
        };
        DungeonPartyFinderPlayer.prototype.reset = function () {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
            this.level = 0;
        };
        DungeonPartyFinderPlayer.prototype.serialize = function (param1) {
            this.serializeAs_DungeonPartyFinderPlayer(param1);
        };
        DungeonPartyFinderPlayer.prototype.serializeAs_DungeonPartyFinderPlayer = function (param1) {
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
            }
            param1.writeVarInt(this.playerId);
            param1.writeUTF(this.playerName);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
        };
        DungeonPartyFinderPlayer.prototype.deserialize = function (param1) {
            this.deserializeAs_DungeonPartyFinderPlayer(param1);
        };
        DungeonPartyFinderPlayer.prototype.deserializeAs_DungeonPartyFinderPlayer = function (param1) {
            this.playerId = param1.readVarUhInt();
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element of DungeonPartyFinderPlayer.playerId.');
            }
            this.playerName = param1.readUTF();
            this.breed = param1.readByte();
            if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
                throw new Error('Forbidden value (' + this.breed + ') on element of DungeonPartyFinderPlayer.breed.');
            }
            this.sex = param1.readBoolean();
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of DungeonPartyFinderPlayer.level.');
            }
        };
        DungeonPartyFinderPlayer.ID = 373;
        return DungeonPartyFinderPlayer;
    })();
    Protocol.DungeonPartyFinderPlayer = DungeonPartyFinderPlayer;
    var NamedPartyTeam = (function () {
        function NamedPartyTeam() {
            this.teamId = 2;
            this.partyName = '';
        }
        NamedPartyTeam.prototype.getTypeId = function () {
            return NamedPartyTeam.ID;
        };
        NamedPartyTeam.prototype.reset = function () {
            this.teamId = 2;
            this.partyName = '';
        };
        NamedPartyTeam.prototype.serialize = function (param1) {
            this.serializeAs_NamedPartyTeam(param1);
        };
        NamedPartyTeam.prototype.serializeAs_NamedPartyTeam = function (param1) {
            param1.writeByte(this.teamId);
            param1.writeUTF(this.partyName);
        };
        NamedPartyTeam.prototype.deserialize = function (param1) {
            this.deserializeAs_NamedPartyTeam(param1);
        };
        NamedPartyTeam.prototype.deserializeAs_NamedPartyTeam = function (param1) {
            this.teamId = param1.readByte();
            if (this.teamId < 0) {
                throw new Error('Forbidden value (' + this.teamId + ') on element of NamedPartyTeam.teamId.');
            }
            this.partyName = param1.readUTF();
        };
        NamedPartyTeam.ID = 469;
        return NamedPartyTeam;
    })();
    Protocol.NamedPartyTeam = NamedPartyTeam;
    var NamedPartyTeamWithOutcome = (function () {
        function NamedPartyTeamWithOutcome() {
            this.team = new NamedPartyTeam();
            this.outcome = 0;
        }
        NamedPartyTeamWithOutcome.prototype.getTypeId = function () {
            return NamedPartyTeamWithOutcome.ID;
        };
        NamedPartyTeamWithOutcome.prototype.reset = function () {
            this.team = new NamedPartyTeam();
            this.outcome = 0;
        };
        NamedPartyTeamWithOutcome.prototype.serialize = function (param1) {
            this.serializeAs_NamedPartyTeamWithOutcome(param1);
        };
        NamedPartyTeamWithOutcome.prototype.serializeAs_NamedPartyTeamWithOutcome = function (param1) {
            this.team.serializeAs_NamedPartyTeam(param1);
            param1.writeVarShort(this.outcome);
        };
        NamedPartyTeamWithOutcome.prototype.deserialize = function (param1) {
            this.deserializeAs_NamedPartyTeamWithOutcome(param1);
        };
        NamedPartyTeamWithOutcome.prototype.deserializeAs_NamedPartyTeamWithOutcome = function (param1) {
            this.team = new NamedPartyTeam();
            this.team.deserialize(param1);
            this.outcome = param1.readVarUhShort();
            if (this.outcome < 0) {
                throw new Error('Forbidden value (' + this.outcome + ') on element of NamedPartyTeamWithOutcome.outcome.');
            }
        };
        NamedPartyTeamWithOutcome.ID = 470;
        return NamedPartyTeamWithOutcome;
    })();
    Protocol.NamedPartyTeamWithOutcome = NamedPartyTeamWithOutcome;
    var PartyGuestInformations = (function () {
        function PartyGuestInformations() {
            this.guestId = 0;
            this.hostId = 0;
            this.name = '';
            this.guestLook = new EntityLook();
            this.breed = 0;
            this.sex = false;
            this.status = new PlayerStatus();
            this.companions = [];
        }
        PartyGuestInformations.prototype.getTypeId = function () {
            return PartyGuestInformations.ID;
        };
        PartyGuestInformations.prototype.reset = function () {
            this.guestId = 0;
            this.hostId = 0;
            this.name = '';
            this.guestLook = new EntityLook();
            this.breed = 0;
            this.sex = false;
            this.status = new PlayerStatus();
            this.companions = [];
        };
        PartyGuestInformations.prototype.serialize = function (param1) {
            this.serializeAs_PartyGuestInformations(param1);
        };
        PartyGuestInformations.prototype.serializeAs_PartyGuestInformations = function (param1) {
            if (this.guestId < 0) {
                throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
            }
            param1.writeInt(this.guestId);
            if (this.hostId < 0) {
                throw new Error('Forbidden value (' + this.hostId + ') on element hostId.');
            }
            param1.writeInt(this.hostId);
            param1.writeUTF(this.name);
            this.guestLook.serializeAs_EntityLook(param1);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            param1.writeShort(this.status.getTypeId());
            this.status.serialize(param1);
            param1.writeShort(this.companions.length);
            var _loc2_ = 0;
            while (_loc2_ < this.companions.length) {
                (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
                _loc2_++;
            }
        };
        PartyGuestInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyGuestInformations(param1);
        };
        PartyGuestInformations.prototype.deserializeAs_PartyGuestInformations = function (param1) {
            var _loc5_ = null;
            this.guestId = param1.readInt();
            if (this.guestId < 0) {
                throw new Error('Forbidden value (' + this.guestId + ') on element of PartyGuestInformations.guestId.');
            }
            this.hostId = param1.readInt();
            if (this.hostId < 0) {
                throw new Error('Forbidden value (' + this.hostId + ') on element of PartyGuestInformations.hostId.');
            }
            this.name = param1.readUTF();
            this.guestLook = new EntityLook();
            this.guestLook.deserialize(param1);
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
            var _loc3_ = param1.readUnsignedShort();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = new PartyCompanionBaseInformations();
                _loc5_.deserialize(param1);
                this.companions.push(_loc5_);
                _loc4_++;
            }
        };
        PartyGuestInformations.ID = 374;
        return PartyGuestInformations;
    })();
    Protocol.PartyGuestInformations = PartyGuestInformations;
    var PartyInvitationMemberInformations = (function (_super) {
        __extends(PartyInvitationMemberInformations, _super);
        function PartyInvitationMemberInformations() {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.companions = [];
            _super.call(this);
        }
        PartyInvitationMemberInformations.prototype.getTypeId = function () {
            return PartyInvitationMemberInformations.ID;
        };
        PartyInvitationMemberInformations.prototype.reset = function () {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.companions = [];
        };
        PartyInvitationMemberInformations.prototype.serialize = function (param1) {
            this.serializeAs_PartyInvitationMemberInformations(param1);
        };
        PartyInvitationMemberInformations.prototype.serializeAs_PartyInvitationMemberInformations = function (param1) {
            _super.prototype.serializeAs_CharacterBaseInformations.call(this, param1);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeShort(this.companions.length);
            var _loc2_ = 0;
            while (_loc2_ < this.companions.length) {
                (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
                _loc2_++;
            }
        };
        PartyInvitationMemberInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyInvitationMemberInformations(param1);
        };
        PartyInvitationMemberInformations.prototype.deserializeAs_PartyInvitationMemberInformations = function (param1) {
            var _loc4_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of PartyInvitationMemberInformations.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of PartyInvitationMemberInformations.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyInvitationMemberInformations.subAreaId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new PartyCompanionBaseInformations();
                _loc4_.deserialize(param1);
                this.companions.push(_loc4_);
                _loc3_++;
            }
        };
        PartyInvitationMemberInformations.ID = 376;
        return PartyInvitationMemberInformations;
    })(CharacterBaseInformations);
    Protocol.PartyInvitationMemberInformations = PartyInvitationMemberInformations;
    var PartyMemberArenaInformations = (function (_super) {
        __extends(PartyMemberArenaInformations, _super);
        function PartyMemberArenaInformations() {
            this.rank = 0;
            _super.call(this);
        }
        PartyMemberArenaInformations.prototype.getTypeId = function () {
            return PartyMemberArenaInformations.ID;
        };
        PartyMemberArenaInformations.prototype.reset = function () {
            this.rank = 0;
        };
        PartyMemberArenaInformations.prototype.serialize = function (param1) {
            this.serializeAs_PartyMemberArenaInformations(param1);
        };
        PartyMemberArenaInformations.prototype.serializeAs_PartyMemberArenaInformations = function (param1) {
            _super.prototype.serializeAs_PartyMemberInformations.call(this, param1);
            if (this.rank < 0 || this.rank > 2300) {
                throw new Error('Forbidden value (' + this.rank + ') on element rank.');
            }
            param1.writeVarShort(this.rank);
        };
        PartyMemberArenaInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyMemberArenaInformations(param1);
        };
        PartyMemberArenaInformations.prototype.deserializeAs_PartyMemberArenaInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.rank = param1.readVarUhShort();
            if (this.rank < 0 || this.rank > 2300) {
                throw new Error('Forbidden value (' + this.rank + ') on element of PartyMemberArenaInformations.rank.');
            }
        };
        PartyMemberArenaInformations.ID = 391;
        return PartyMemberArenaInformations;
    })(PartyMemberInformations);
    Protocol.PartyMemberArenaInformations = PartyMemberArenaInformations;
    var PartyMemberGeoPosition = (function () {
        function PartyMemberGeoPosition() {
            this.memberId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }
        PartyMemberGeoPosition.prototype.getTypeId = function () {
            return PartyMemberGeoPosition.ID;
        };
        PartyMemberGeoPosition.prototype.reset = function () {
            this.memberId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        };
        PartyMemberGeoPosition.prototype.serialize = function (param1) {
            this.serializeAs_PartyMemberGeoPosition(param1);
        };
        PartyMemberGeoPosition.prototype.serializeAs_PartyMemberGeoPosition = function (param1) {
            if (this.memberId < 0) {
                throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
            }
            param1.writeInt(this.memberId);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
        };
        PartyMemberGeoPosition.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyMemberGeoPosition(param1);
        };
        PartyMemberGeoPosition.prototype.deserializeAs_PartyMemberGeoPosition = function (param1) {
            this.memberId = param1.readInt();
            if (this.memberId < 0) {
                throw new Error('Forbidden value (' + this.memberId + ') on element of PartyMemberGeoPosition.memberId.');
            }
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of PartyMemberGeoPosition.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of PartyMemberGeoPosition.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyMemberGeoPosition.subAreaId.');
            }
        };
        PartyMemberGeoPosition.ID = 378;
        return PartyMemberGeoPosition;
    })();
    Protocol.PartyMemberGeoPosition = PartyMemberGeoPosition;
    var PartyMemberInformations = (function (_super) {
        __extends(PartyMemberInformations, _super);
        function PartyMemberInformations() {
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.prospecting = 0;
            this.regenRate = 0;
            this.initiative = 0;
            this.alignmentSide = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.status = new PlayerStatus();
            this.companions = [];
            _super.call(this);
        }
        PartyMemberInformations.prototype.getTypeId = function () {
            return PartyMemberInformations.ID;
        };
        PartyMemberInformations.prototype.reset = function () {
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.prospecting = 0;
            this.regenRate = 0;
            this.initiative = 0;
            this.alignmentSide = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.status = new PlayerStatus();
            this.companions = [];
        };
        PartyMemberInformations.prototype.serialize = function (param1) {
            this.serializeAs_PartyMemberInformations(param1);
        };
        PartyMemberInformations.prototype.serializeAs_PartyMemberInformations = function (param1) {
            _super.prototype.serializeAs_CharacterBaseInformations.call(this, param1);
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
            }
            param1.writeVarInt(this.lifePoints);
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
            }
            param1.writeVarInt(this.maxLifePoints);
            if (this.prospecting < 0) {
                throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
            }
            param1.writeVarShort(this.prospecting);
            if (this.regenRate < 0 || this.regenRate > 255) {
                throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
            }
            param1.writeByte(this.regenRate);
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
            }
            param1.writeVarShort(this.initiative);
            param1.writeByte(this.alignmentSide);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeShort(this.status.getTypeId());
            this.status.serialize(param1);
            param1.writeShort(this.companions.length);
            var _loc2_ = 0;
            while (_loc2_ < this.companions.length) {
                (this.companions[_loc2_]).serializeAs_PartyCompanionMemberInformations(param1);
                _loc2_++;
            }
        };
        PartyMemberInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyMemberInformations(param1);
        };
        PartyMemberInformations.prototype.deserializeAs_PartyMemberInformations = function (param1) {
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.lifePoints = param1.readVarUhInt();
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element of PartyMemberInformations.lifePoints.');
            }
            this.maxLifePoints = param1.readVarUhInt();
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of PartyMemberInformations.maxLifePoints.');
            }
            this.prospecting = param1.readVarUhShort();
            if (this.prospecting < 0) {
                throw new Error('Forbidden value (' + this.prospecting + ') on element of PartyMemberInformations.prospecting.');
            }
            this.regenRate = param1.readUnsignedByte();
            if (this.regenRate < 0 || this.regenRate > 255) {
                throw new Error('Forbidden value (' + this.regenRate + ') on element of PartyMemberInformations.regenRate.');
            }
            this.initiative = param1.readVarUhShort();
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element of PartyMemberInformations.initiative.');
            }
            this.alignmentSide = param1.readByte();
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of PartyMemberInformations.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of PartyMemberInformations.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyMemberInformations.subAreaId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
            var _loc3_ = param1.readUnsignedShort();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = new PartyCompanionMemberInformations();
                _loc5_.deserialize(param1);
                this.companions.push(_loc5_);
                _loc4_++;
            }
        };
        PartyMemberInformations.ID = 90;
        return PartyMemberInformations;
    })(CharacterBaseInformations);
    Protocol.PartyMemberInformations = PartyMemberInformations;
    var PartyCompanionBaseInformations = (function () {
        function PartyCompanionBaseInformations() {
            this.indexId = 0;
            this.companionGenericId = 0;
            this.entityLook = new EntityLook();
        }
        PartyCompanionBaseInformations.prototype.getTypeId = function () {
            return PartyCompanionBaseInformations.ID;
        };
        PartyCompanionBaseInformations.prototype.reset = function () {
            this.indexId = 0;
            this.companionGenericId = 0;
            this.entityLook = new EntityLook();
        };
        PartyCompanionBaseInformations.prototype.serialize = function (param1) {
            this.serializeAs_PartyCompanionBaseInformations(param1);
        };
        PartyCompanionBaseInformations.prototype.serializeAs_PartyCompanionBaseInformations = function (param1) {
            if (this.indexId < 0) {
                throw new Error('Forbidden value (' + this.indexId + ') on element indexId.');
            }
            param1.writeByte(this.indexId);
            if (this.companionGenericId < 0) {
                throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
            }
            param1.writeByte(this.companionGenericId);
            this.entityLook.serializeAs_EntityLook(param1);
        };
        PartyCompanionBaseInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyCompanionBaseInformations(param1);
        };
        PartyCompanionBaseInformations.prototype.deserializeAs_PartyCompanionBaseInformations = function (param1) {
            this.indexId = param1.readByte();
            if (this.indexId < 0) {
                throw new Error('Forbidden value (' + this.indexId + ') on element of PartyCompanionBaseInformations.indexId.');
            }
            this.companionGenericId = param1.readByte();
            if (this.companionGenericId < 0) {
                throw new Error('Forbidden value (' + this.companionGenericId + ') on element of PartyCompanionBaseInformations.companionGenericId.');
            }
            this.entityLook = new EntityLook();
            this.entityLook.deserialize(param1);
        };
        PartyCompanionBaseInformations.ID = 453;
        return PartyCompanionBaseInformations;
    })();
    Protocol.PartyCompanionBaseInformations = PartyCompanionBaseInformations;
    var PartyCompanionMemberInformations = (function (_super) {
        __extends(PartyCompanionMemberInformations, _super);
        function PartyCompanionMemberInformations() {
            this.initiative = 0;
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.prospecting = 0;
            this.regenRate = 0;
            _super.call(this);
        }
        PartyCompanionMemberInformations.prototype.getTypeId = function () {
            return PartyCompanionMemberInformations.ID;
        };
        PartyCompanionMemberInformations.prototype.reset = function () {
            this.initiative = 0;
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.prospecting = 0;
            this.regenRate = 0;
        };
        PartyCompanionMemberInformations.prototype.serialize = function (param1) {
            this.serializeAs_PartyCompanionMemberInformations(param1);
        };
        PartyCompanionMemberInformations.prototype.serializeAs_PartyCompanionMemberInformations = function (param1) {
            _super.prototype.serializeAs_PartyCompanionBaseInformations.call(this, param1);
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
            }
            param1.writeVarShort(this.initiative);
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
            }
            param1.writeVarInt(this.lifePoints);
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
            }
            param1.writeVarInt(this.maxLifePoints);
            if (this.prospecting < 0) {
                throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
            }
            param1.writeVarShort(this.prospecting);
            if (this.regenRate < 0 || this.regenRate > 255) {
                throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
            }
            param1.writeByte(this.regenRate);
        };
        PartyCompanionMemberInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyCompanionMemberInformations(param1);
        };
        PartyCompanionMemberInformations.prototype.deserializeAs_PartyCompanionMemberInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.initiative = param1.readVarUhShort();
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element of PartyCompanionMemberInformations.initiative.');
            }
            this.lifePoints = param1.readVarUhInt();
            if (this.lifePoints < 0) {
                throw new Error('Forbidden value (' + this.lifePoints + ') on element of PartyCompanionMemberInformations.lifePoints.');
            }
            this.maxLifePoints = param1.readVarUhInt();
            if (this.maxLifePoints < 0) {
                throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of PartyCompanionMemberInformations.maxLifePoints.');
            }
            this.prospecting = param1.readVarUhShort();
            if (this.prospecting < 0) {
                throw new Error('Forbidden value (' + this.prospecting + ') on element of PartyCompanionMemberInformations.prospecting.');
            }
            this.regenRate = param1.readUnsignedByte();
            if (this.regenRate < 0 || this.regenRate > 255) {
                throw new Error('Forbidden value (' + this.regenRate + ') on element of PartyCompanionMemberInformations.regenRate.');
            }
        };
        PartyCompanionMemberInformations.ID = 452;
        return PartyCompanionMemberInformations;
    })(PartyCompanionBaseInformations);
    Protocol.PartyCompanionMemberInformations = PartyCompanionMemberInformations;
    var GameRolePlayNpcQuestFlag = (function () {
        function GameRolePlayNpcQuestFlag() {
            this.questsToValidId = [];
            this.questsToStartId = [];
        }
        GameRolePlayNpcQuestFlag.prototype.getTypeId = function () {
            return GameRolePlayNpcQuestFlag.ID;
        };
        GameRolePlayNpcQuestFlag.prototype.reset = function () {
            this.questsToValidId = [];
            this.questsToStartId = [];
        };
        GameRolePlayNpcQuestFlag.prototype.serialize = function (param1) {
            this.serializeAs_GameRolePlayNpcQuestFlag(param1);
        };
        GameRolePlayNpcQuestFlag.prototype.serializeAs_GameRolePlayNpcQuestFlag = function (param1) {
            param1.writeShort(this.questsToValidId.length);
            var _loc2_ = 0;
            while (_loc2_ < this.questsToValidId.length) {
                if (this.questsToValidId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.questsToValidId[_loc2_] + ') on element 1 (starting at 1) of questsToValidId.');
                }
                param1.writeVarShort(this.questsToValidId[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.questsToStartId.length);
            var _loc3_ = 0;
            while (_loc3_ < this.questsToStartId.length) {
                if (this.questsToStartId[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.questsToStartId[_loc3_] + ') on element 2 (starting at 1) of questsToStartId.');
                }
                param1.writeVarShort(this.questsToStartId[_loc3_]);
                _loc3_++;
            }
        };
        GameRolePlayNpcQuestFlag.prototype.deserialize = function (param1) {
            this.deserializeAs_GameRolePlayNpcQuestFlag(param1);
        };
        GameRolePlayNpcQuestFlag.prototype.deserializeAs_GameRolePlayNpcQuestFlag = function (param1) {
            var _loc6_ = 0;
            var _loc7_ = 0;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readVarUhShort();
                if (_loc6_ < 0) {
                    throw new Error('Forbidden value (' + _loc6_ + ') on elements of questsToValidId.');
                }
                this.questsToValidId.push(_loc6_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = param1.readVarUhShort();
                if (_loc7_ < 0) {
                    throw new Error('Forbidden value (' + _loc7_ + ') on elements of questsToStartId.');
                }
                this.questsToStartId.push(_loc7_);
                _loc5_++;
            }
        };
        GameRolePlayNpcQuestFlag.ID = 384;
        return GameRolePlayNpcQuestFlag;
    })();
    Protocol.GameRolePlayNpcQuestFlag = GameRolePlayNpcQuestFlag;
    var QuestActiveDetailedInformations = (function (_super) {
        __extends(QuestActiveDetailedInformations, _super);
        function QuestActiveDetailedInformations() {
            this.stepId = 0;
            this.objectives = [];
            _super.call(this);
        }
        QuestActiveDetailedInformations.prototype.getTypeId = function () {
            return QuestActiveDetailedInformations.ID;
        };
        QuestActiveDetailedInformations.prototype.reset = function () {
            this.stepId = 0;
            this.objectives = [];
        };
        QuestActiveDetailedInformations.prototype.serialize = function (param1) {
            this.serializeAs_QuestActiveDetailedInformations(param1);
        };
        QuestActiveDetailedInformations.prototype.serializeAs_QuestActiveDetailedInformations = function (param1) {
            _super.prototype.serializeAs_QuestActiveInformations.call(this, param1);
            if (this.stepId < 0) {
                throw new Error('Forbidden value (' + this.stepId + ') on element stepId.');
            }
            param1.writeVarShort(this.stepId);
            param1.writeShort(this.objectives.length);
            var _loc2_ = 0;
            while (_loc2_ < this.objectives.length) {
                param1.writeShort((this.objectives[_loc2_]).getTypeId());
                (this.objectives[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        QuestActiveDetailedInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_QuestActiveDetailedInformations(param1);
        };
        QuestActiveDetailedInformations.prototype.deserializeAs_QuestActiveDetailedInformations = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.stepId = param1.readVarUhShort();
            if (this.stepId < 0) {
                throw new Error('Forbidden value (' + this.stepId + ') on element of QuestActiveDetailedInformations.stepId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(QuestObjectiveInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.objectives.push(_loc5_);
                _loc3_++;
            }
        };
        QuestActiveDetailedInformations.ID = 382;
        return QuestActiveDetailedInformations;
    })(QuestActiveInformations);
    Protocol.QuestActiveDetailedInformations = QuestActiveDetailedInformations;
    var QuestActiveInformations = (function () {
        function QuestActiveInformations() {
            this.questId = 0;
        }
        QuestActiveInformations.prototype.getTypeId = function () {
            return QuestActiveInformations.ID;
        };
        QuestActiveInformations.prototype.reset = function () {
            this.questId = 0;
        };
        QuestActiveInformations.prototype.serialize = function (param1) {
            this.serializeAs_QuestActiveInformations(param1);
        };
        QuestActiveInformations.prototype.serializeAs_QuestActiveInformations = function (param1) {
            if (this.questId < 0) {
                throw new Error('Forbidden value (' + this.questId + ') on element questId.');
            }
            param1.writeVarShort(this.questId);
        };
        QuestActiveInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_QuestActiveInformations(param1);
        };
        QuestActiveInformations.prototype.deserializeAs_QuestActiveInformations = function (param1) {
            this.questId = param1.readVarUhShort();
            if (this.questId < 0) {
                throw new Error('Forbidden value (' + this.questId + ') on element of QuestActiveInformations.questId.');
            }
        };
        QuestActiveInformations.ID = 381;
        return QuestActiveInformations;
    })();
    Protocol.QuestActiveInformations = QuestActiveInformations;
    var QuestObjectiveInformations = (function () {
        function QuestObjectiveInformations() {
            this.objectiveId = 0;
            this.objectiveStatus = false;
            this.dialogParams = [];
        }
        QuestObjectiveInformations.prototype.getTypeId = function () {
            return QuestObjectiveInformations.ID;
        };
        QuestObjectiveInformations.prototype.reset = function () {
            this.objectiveId = 0;
            this.objectiveStatus = false;
            this.dialogParams = [];
        };
        QuestObjectiveInformations.prototype.serialize = function (param1) {
            this.serializeAs_QuestObjectiveInformations(param1);
        };
        QuestObjectiveInformations.prototype.serializeAs_QuestObjectiveInformations = function (param1) {
            if (this.objectiveId < 0) {
                throw new Error('Forbidden value (' + this.objectiveId + ') on element objectiveId.');
            }
            param1.writeVarShort(this.objectiveId);
            param1.writeBoolean(this.objectiveStatus);
            param1.writeShort(this.dialogParams.length);
            var _loc2_ = 0;
            while (_loc2_ < this.dialogParams.length) {
                param1.writeUTF(this.dialogParams[_loc2_]);
                _loc2_++;
            }
        };
        QuestObjectiveInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_QuestObjectiveInformations(param1);
        };
        QuestObjectiveInformations.prototype.deserializeAs_QuestObjectiveInformations = function (param1) {
            var _loc4_ = null;
            this.objectiveId = param1.readVarUhShort();
            if (this.objectiveId < 0) {
                throw new Error('Forbidden value (' + this.objectiveId + ') on element of QuestObjectiveInformations.objectiveId.');
            }
            this.objectiveStatus = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUTF();
                this.dialogParams.push(_loc4_);
                _loc3_++;
            }
        };
        QuestObjectiveInformations.ID = 385;
        return QuestObjectiveInformations;
    })();
    Protocol.QuestObjectiveInformations = QuestObjectiveInformations;
    var QuestObjectiveInformationsWithCompletion = (function (_super) {
        __extends(QuestObjectiveInformationsWithCompletion, _super);
        function QuestObjectiveInformationsWithCompletion() {
            this.curCompletion = 0;
            this.maxCompletion = 0;
            _super.call(this);
        }
        QuestObjectiveInformationsWithCompletion.prototype.getTypeId = function () {
            return QuestObjectiveInformationsWithCompletion.ID;
        };
        QuestObjectiveInformationsWithCompletion.prototype.reset = function () {
            this.curCompletion = 0;
            this.maxCompletion = 0;
        };
        QuestObjectiveInformationsWithCompletion.prototype.serialize = function (param1) {
            this.serializeAs_QuestObjectiveInformationsWithCompletion(param1);
        };
        QuestObjectiveInformationsWithCompletion.prototype.serializeAs_QuestObjectiveInformationsWithCompletion = function (param1) {
            _super.prototype.serializeAs_QuestObjectiveInformations.call(this, param1);
            if (this.curCompletion < 0) {
                throw new Error('Forbidden value (' + this.curCompletion + ') on element curCompletion.');
            }
            param1.writeVarShort(this.curCompletion);
            if (this.maxCompletion < 0) {
                throw new Error('Forbidden value (' + this.maxCompletion + ') on element maxCompletion.');
            }
            param1.writeVarShort(this.maxCompletion);
        };
        QuestObjectiveInformationsWithCompletion.prototype.deserialize = function (param1) {
            this.deserializeAs_QuestObjectiveInformationsWithCompletion(param1);
        };
        QuestObjectiveInformationsWithCompletion.prototype.deserializeAs_QuestObjectiveInformationsWithCompletion = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.curCompletion = param1.readVarUhShort();
            if (this.curCompletion < 0) {
                throw new Error('Forbidden value (' + this.curCompletion + ') on element of QuestObjectiveInformationsWithCompletion.curCompletion.');
            }
            this.maxCompletion = param1.readVarUhShort();
            if (this.maxCompletion < 0) {
                throw new Error('Forbidden value (' + this.maxCompletion + ') on element of QuestObjectiveInformationsWithCompletion.maxCompletion.');
            }
        };
        QuestObjectiveInformationsWithCompletion.ID = 386;
        return QuestObjectiveInformationsWithCompletion;
    })(QuestObjectiveInformations);
    Protocol.QuestObjectiveInformationsWithCompletion = QuestObjectiveInformationsWithCompletion;
    var PortalInformation = (function () {
        function PortalInformation() {
            this.portalId = 0;
            this.areaId = 0;
        }
        PortalInformation.prototype.getTypeId = function () {
            return PortalInformation.ID;
        };
        PortalInformation.prototype.reset = function () {
            this.portalId = 0;
            this.areaId = 0;
        };
        PortalInformation.prototype.serialize = function (param1) {
            this.serializeAs_PortalInformation(param1);
        };
        PortalInformation.prototype.serializeAs_PortalInformation = function (param1) {
            if (this.portalId < 0) {
                throw new Error('Forbidden value (' + this.portalId + ') on element portalId.');
            }
            param1.writeVarShort(this.portalId);
            param1.writeShort(this.areaId);
        };
        PortalInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_PortalInformation(param1);
        };
        PortalInformation.prototype.deserializeAs_PortalInformation = function (param1) {
            this.portalId = param1.readVarUhShort();
            if (this.portalId < 0) {
                throw new Error('Forbidden value (' + this.portalId + ') on element of PortalInformation.portalId.');
            }
            this.areaId = param1.readShort();
        };
        PortalInformation.ID = 466;
        return PortalInformation;
    })();
    Protocol.PortalInformation = PortalInformation;
    var TreasureHuntFlag = (function () {
        function TreasureHuntFlag() {
            this.mapId = 0;
            this.state = 0;
        }
        TreasureHuntFlag.prototype.getTypeId = function () {
            return TreasureHuntFlag.ID;
        };
        TreasureHuntFlag.prototype.reset = function () {
            this.mapId = 0;
            this.state = 0;
        };
        TreasureHuntFlag.prototype.serialize = function (param1) {
            this.serializeAs_TreasureHuntFlag(param1);
        };
        TreasureHuntFlag.prototype.serializeAs_TreasureHuntFlag = function (param1) {
            param1.writeInt(this.mapId);
            param1.writeByte(this.state);
        };
        TreasureHuntFlag.prototype.deserialize = function (param1) {
            this.deserializeAs_TreasureHuntFlag(param1);
        };
        TreasureHuntFlag.prototype.deserializeAs_TreasureHuntFlag = function (param1) {
            this.mapId = param1.readInt();
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of TreasureHuntFlag.state.');
            }
        };
        TreasureHuntFlag.ID = 473;
        return TreasureHuntFlag;
    })();
    Protocol.TreasureHuntFlag = TreasureHuntFlag;
    var TreasureHuntStep = (function () {
        function TreasureHuntStep() {
        }
        TreasureHuntStep.prototype.getTypeId = function () {
            return TreasureHuntStep.ID;
        };
        TreasureHuntStep.prototype.reset = function () {
        };
        TreasureHuntStep.prototype.serialize = function (param1) {
            this.serializeAs_TreasureHuntStep(param1);
        };
        TreasureHuntStep.prototype.serializeAs_TreasureHuntStep = function (param1) {
        };
        TreasureHuntStep.prototype.deserialize = function (param1) {
            this.deserializeAs_TreasureHuntStep(param1);
        };
        TreasureHuntStep.prototype.deserializeAs_TreasureHuntStep = function (param1) {
        };
        TreasureHuntStep.ID = 463;
        return TreasureHuntStep;
    })();
    Protocol.TreasureHuntStep = TreasureHuntStep;
    var TreasureHuntStepDig = (function (_super) {
        __extends(TreasureHuntStepDig, _super);
        function TreasureHuntStepDig() {
            _super.call(this);
        }
        TreasureHuntStepDig.prototype.getTypeId = function () {
            return TreasureHuntStepDig.ID;
        };
        TreasureHuntStepDig.prototype.reset = function () {
        };
        TreasureHuntStepDig.prototype.serialize = function (param1) {
            this.serializeAs_TreasureHuntStepDig(param1);
        };
        TreasureHuntStepDig.prototype.serializeAs_TreasureHuntStepDig = function (param1) {
        };
        TreasureHuntStepDig.prototype.deserialize = function (param1) {
            this.deserializeAs_TreasureHuntStepDig(param1);
        };
        TreasureHuntStepDig.prototype.deserializeAs_TreasureHuntStepDig = function (param1) {
        };
        TreasureHuntStepDig.ID = 465;
        return TreasureHuntStepDig;
    })(TreasureHuntStep);
    Protocol.TreasureHuntStepDig = TreasureHuntStepDig;
    var TreasureHuntStepFight = (function (_super) {
        __extends(TreasureHuntStepFight, _super);
        function TreasureHuntStepFight() {
            _super.call(this);
        }
        TreasureHuntStepFight.prototype.getTypeId = function () {
            return TreasureHuntStepFight.ID;
        };
        TreasureHuntStepFight.prototype.reset = function () {
        };
        TreasureHuntStepFight.prototype.serialize = function (param1) {
            this.serializeAs_TreasureHuntStepFight(param1);
        };
        TreasureHuntStepFight.prototype.serializeAs_TreasureHuntStepFight = function (param1) {
        };
        TreasureHuntStepFight.prototype.deserialize = function (param1) {
            this.deserializeAs_TreasureHuntStepFight(param1);
        };
        TreasureHuntStepFight.prototype.deserializeAs_TreasureHuntStepFight = function (param1) {
        };
        TreasureHuntStepFight.ID = 462;
        return TreasureHuntStepFight;
    })(TreasureHuntStep);
    Protocol.TreasureHuntStepFight = TreasureHuntStepFight;
    var TreasureHuntStepFollowDirection = (function (_super) {
        __extends(TreasureHuntStepFollowDirection, _super);
        function TreasureHuntStepFollowDirection() {
            this.direction = 1;
            this.mapCount = 0;
            _super.call(this);
        }
        TreasureHuntStepFollowDirection.prototype.getTypeId = function () {
            return TreasureHuntStepFollowDirection.ID;
        };
        TreasureHuntStepFollowDirection.prototype.reset = function () {
            this.direction = 1;
            this.mapCount = 0;
        };
        TreasureHuntStepFollowDirection.prototype.serialize = function (param1) {
            this.serializeAs_TreasureHuntStepFollowDirection(param1);
        };
        TreasureHuntStepFollowDirection.prototype.serializeAs_TreasureHuntStepFollowDirection = function (param1) {
            _super.prototype.serializeAs_TreasureHuntStep.call(this, param1);
            param1.writeByte(this.direction);
            if (this.mapCount < 0) {
                throw new Error('Forbidden value (' + this.mapCount + ') on element mapCount.');
            }
            param1.writeVarShort(this.mapCount);
        };
        TreasureHuntStepFollowDirection.prototype.deserialize = function (param1) {
            this.deserializeAs_TreasureHuntStepFollowDirection(param1);
        };
        TreasureHuntStepFollowDirection.prototype.deserializeAs_TreasureHuntStepFollowDirection = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirection.direction.');
            }
            this.mapCount = param1.readVarUhShort();
            if (this.mapCount < 0) {
                throw new Error('Forbidden value (' + this.mapCount + ') on element of TreasureHuntStepFollowDirection.mapCount.');
            }
        };
        TreasureHuntStepFollowDirection.ID = 468;
        return TreasureHuntStepFollowDirection;
    })(TreasureHuntStep);
    Protocol.TreasureHuntStepFollowDirection = TreasureHuntStepFollowDirection;
    var TreasureHuntStepFollowDirectionToHint = (function (_super) {
        __extends(TreasureHuntStepFollowDirectionToHint, _super);
        function TreasureHuntStepFollowDirectionToHint() {
            this.direction = 1;
            this.npcId = 0;
            _super.call(this);
        }
        TreasureHuntStepFollowDirectionToHint.prototype.getTypeId = function () {
            return TreasureHuntStepFollowDirectionToHint.ID;
        };
        TreasureHuntStepFollowDirectionToHint.prototype.reset = function () {
            this.direction = 1;
            this.npcId = 0;
        };
        TreasureHuntStepFollowDirectionToHint.prototype.serialize = function (param1) {
            this.serializeAs_TreasureHuntStepFollowDirectionToHint(param1);
        };
        TreasureHuntStepFollowDirectionToHint.prototype.serializeAs_TreasureHuntStepFollowDirectionToHint = function (param1) {
            _super.prototype.serializeAs_TreasureHuntStep.call(this, param1);
            param1.writeByte(this.direction);
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
            }
            param1.writeVarShort(this.npcId);
        };
        TreasureHuntStepFollowDirectionToHint.prototype.deserialize = function (param1) {
            this.deserializeAs_TreasureHuntStepFollowDirectionToHint(param1);
        };
        TreasureHuntStepFollowDirectionToHint.prototype.deserializeAs_TreasureHuntStepFollowDirectionToHint = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToHint.direction.');
            }
            this.npcId = param1.readVarUhShort();
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element of TreasureHuntStepFollowDirectionToHint.npcId.');
            }
        };
        TreasureHuntStepFollowDirectionToHint.ID = 472;
        return TreasureHuntStepFollowDirectionToHint;
    })(TreasureHuntStep);
    Protocol.TreasureHuntStepFollowDirectionToHint = TreasureHuntStepFollowDirectionToHint;
    var TreasureHuntStepFollowDirectionToPOI = (function (_super) {
        __extends(TreasureHuntStepFollowDirectionToPOI, _super);
        function TreasureHuntStepFollowDirectionToPOI() {
            this.direction = 1;
            this.poiLabelId = 0;
            _super.call(this);
        }
        TreasureHuntStepFollowDirectionToPOI.prototype.getTypeId = function () {
            return TreasureHuntStepFollowDirectionToPOI.ID;
        };
        TreasureHuntStepFollowDirectionToPOI.prototype.reset = function () {
            this.direction = 1;
            this.poiLabelId = 0;
        };
        TreasureHuntStepFollowDirectionToPOI.prototype.serialize = function (param1) {
            this.serializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
        };
        TreasureHuntStepFollowDirectionToPOI.prototype.serializeAs_TreasureHuntStepFollowDirectionToPOI = function (param1) {
            _super.prototype.serializeAs_TreasureHuntStep.call(this, param1);
            param1.writeByte(this.direction);
            if (this.poiLabelId < 0) {
                throw new Error('Forbidden value (' + this.poiLabelId + ') on element poiLabelId.');
            }
            param1.writeVarShort(this.poiLabelId);
        };
        TreasureHuntStepFollowDirectionToPOI.prototype.deserialize = function (param1) {
            this.deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
        };
        TreasureHuntStepFollowDirectionToPOI.prototype.deserializeAs_TreasureHuntStepFollowDirectionToPOI = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToPOI.direction.');
            }
            this.poiLabelId = param1.readVarUhShort();
            if (this.poiLabelId < 0) {
                throw new Error('Forbidden value (' + this.poiLabelId + ') on element of TreasureHuntStepFollowDirectionToPOI.poiLabelId.');
            }
        };
        TreasureHuntStepFollowDirectionToPOI.ID = 461;
        return TreasureHuntStepFollowDirectionToPOI;
    })(TreasureHuntStep);
    Protocol.TreasureHuntStepFollowDirectionToPOI = TreasureHuntStepFollowDirectionToPOI;
    var BidExchangerObjectInfo = (function () {
        function BidExchangerObjectInfo() {
            this.objectUID = 0;
            this.effects = [];
            this.prices = [];
        }
        BidExchangerObjectInfo.prototype.getTypeId = function () {
            return BidExchangerObjectInfo.ID;
        };
        BidExchangerObjectInfo.prototype.reset = function () {
            this.objectUID = 0;
            this.effects = [];
            this.prices = [];
        };
        BidExchangerObjectInfo.prototype.serialize = function (param1) {
            this.serializeAs_BidExchangerObjectInfo(param1);
        };
        BidExchangerObjectInfo.prototype.serializeAs_BidExchangerObjectInfo = function (param1) {
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            param1.writeShort(this.effects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.prices.length);
            var _loc3_ = 0;
            while (_loc3_ < this.prices.length) {
                if (this.prices[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.prices[_loc3_] + ') on element 3 (starting at 1) of prices.');
                }
                param1.writeInt(this.prices[_loc3_]);
                _loc3_++;
            }
        };
        BidExchangerObjectInfo.prototype.deserialize = function (param1) {
            this.deserializeAs_BidExchangerObjectInfo(param1);
        };
        BidExchangerObjectInfo.prototype.deserializeAs_BidExchangerObjectInfo = function (param1) {
            var _loc6_ = 0;
            var _loc7_ = null;
            var _loc8_ = 0;
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of BidExchangerObjectInfo.objectUID.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc6_);
                _loc7_.deserialize(param1);
                this.effects.push(_loc7_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readInt();
                if (_loc8_ < 0) {
                    throw new Error('Forbidden value (' + _loc8_ + ') on elements of prices.');
                }
                this.prices.push(_loc8_);
                _loc5_++;
            }
        };
        BidExchangerObjectInfo.ID = 122;
        return BidExchangerObjectInfo;
    })();
    Protocol.BidExchangerObjectInfo = BidExchangerObjectInfo;
    var GoldItem = (function (_super) {
        __extends(GoldItem, _super);
        function GoldItem() {
            this.sum = 0;
            _super.call(this);
        }
        GoldItem.prototype.getTypeId = function () {
            return GoldItem.ID;
        };
        GoldItem.prototype.reset = function () {
            this.sum = 0;
        };
        GoldItem.prototype.serialize = function (param1) {
            this.serializeAs_GoldItem(param1);
        };
        GoldItem.prototype.serializeAs_GoldItem = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.sum < 0) {
                throw new Error('Forbidden value (' + this.sum + ') on element sum.');
            }
            param1.writeVarInt(this.sum);
        };
        GoldItem.prototype.deserialize = function (param1) {
            this.deserializeAs_GoldItem(param1);
        };
        GoldItem.prototype.deserializeAs_GoldItem = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.sum = param1.readVarUhInt();
            if (this.sum < 0) {
                throw new Error('Forbidden value (' + this.sum + ') on element of GoldItem.sum.');
            }
        };
        GoldItem.ID = 123;
        return GoldItem;
    })(Item);
    Protocol.GoldItem = GoldItem;
    var Item = (function () {
        function Item() {
        }
        Item.prototype.getTypeId = function () {
            return Item.ID;
        };
        Item.prototype.reset = function () {
        };
        Item.prototype.serialize = function (param1) {
            this.serializeAs_Item(param1);
        };
        Item.prototype.serializeAs_Item = function (param1) {
        };
        Item.prototype.deserialize = function (param1) {
            this.deserializeAs_Item(param1);
        };
        Item.prototype.deserializeAs_Item = function (param1) {
        };
        Item.ID = 7;
        return Item;
    })();
    Protocol.Item = Item;
    var ObjectItem = (function (_super) {
        __extends(ObjectItem, _super);
        function ObjectItem() {
            this.position = 63;
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            _super.call(this);
        }
        ObjectItem.prototype.getTypeId = function () {
            return ObjectItem.ID;
        };
        ObjectItem.prototype.reset = function () {
            this.position = 63;
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
        };
        ObjectItem.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItem(param1);
        };
        ObjectItem.prototype.serializeAs_ObjectItem = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            param1.writeByte(this.position);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);
        };
        ObjectItem.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItem(param1);
        };
        ObjectItem.prototype.deserializeAs_ObjectItem = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.position = param1.readUnsignedByte();
            if (this.position < 0 || this.position > 255) {
                throw new Error('Forbidden value (' + this.position + ') on element of ObjectItem.position.');
            }
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItem.objectGID.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
                _loc5_.deserialize(param1);
                this.effects.push(_loc5_);
                _loc3_++;
            }
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItem.objectUID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItem.quantity.');
            }
        };
        ObjectItem.ID = 37;
        return ObjectItem;
    })(Item);
    Protocol.ObjectItem = ObjectItem;
    var ObjectItemGenericQuantity = (function (_super) {
        __extends(ObjectItemGenericQuantity, _super);
        function ObjectItemGenericQuantity() {
            this.objectGID = 0;
            this.quantity = 0;
            _super.call(this);
        }
        ObjectItemGenericQuantity.prototype.getTypeId = function () {
            return ObjectItemGenericQuantity.ID;
        };
        ObjectItemGenericQuantity.prototype.reset = function () {
            this.objectGID = 0;
            this.quantity = 0;
        };
        ObjectItemGenericQuantity.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemGenericQuantity(param1);
        };
        ObjectItemGenericQuantity.prototype.serializeAs_ObjectItemGenericQuantity = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);
        };
        ObjectItemGenericQuantity.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemGenericQuantity(param1);
        };
        ObjectItemGenericQuantity.prototype.deserializeAs_ObjectItemGenericQuantity = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemGenericQuantity.objectGID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemGenericQuantity.quantity.');
            }
        };
        ObjectItemGenericQuantity.ID = 483;
        return ObjectItemGenericQuantity;
    })(Item);
    Protocol.ObjectItemGenericQuantity = ObjectItemGenericQuantity;
    var ObjectItemInformationWithQuantity = (function (_super) {
        __extends(ObjectItemInformationWithQuantity, _super);
        function ObjectItemInformationWithQuantity() {
            this.quantity = 0;
            _super.call(this);
        }
        ObjectItemInformationWithQuantity.prototype.getTypeId = function () {
            return ObjectItemInformationWithQuantity.ID;
        };
        ObjectItemInformationWithQuantity.prototype.reset = function () {
            this.quantity = 0;
        };
        ObjectItemInformationWithQuantity.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemInformationWithQuantity(param1);
        };
        ObjectItemInformationWithQuantity.prototype.serializeAs_ObjectItemInformationWithQuantity = function (param1) {
            _super.prototype.serializeAs_ObjectItemMinimalInformation.call(this, param1);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);
        };
        ObjectItemInformationWithQuantity.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemInformationWithQuantity(param1);
        };
        ObjectItemInformationWithQuantity.prototype.deserializeAs_ObjectItemInformationWithQuantity = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemInformationWithQuantity.quantity.');
            }
        };
        ObjectItemInformationWithQuantity.ID = 387;
        return ObjectItemInformationWithQuantity;
    })(ObjectItemMinimalInformation);
    Protocol.ObjectItemInformationWithQuantity = ObjectItemInformationWithQuantity;
    var ObjectItemMinimalInformation = (function (_super) {
        __extends(ObjectItemMinimalInformation, _super);
        function ObjectItemMinimalInformation() {
            this.objectGID = 0;
            this.effects = [];
            _super.call(this);
        }
        ObjectItemMinimalInformation.prototype.getTypeId = function () {
            return ObjectItemMinimalInformation.ID;
        };
        ObjectItemMinimalInformation.prototype.reset = function () {
            this.objectGID = 0;
            this.effects = [];
        };
        ObjectItemMinimalInformation.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemMinimalInformation(param1);
        };
        ObjectItemMinimalInformation.prototype.serializeAs_ObjectItemMinimalInformation = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        ObjectItemMinimalInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemMinimalInformation(param1);
        };
        ObjectItemMinimalInformation.prototype.deserializeAs_ObjectItemMinimalInformation = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemMinimalInformation.objectGID.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
                _loc5_.deserialize(param1);
                this.effects.push(_loc5_);
                _loc3_++;
            }
        };
        ObjectItemMinimalInformation.ID = 124;
        return ObjectItemMinimalInformation;
    })(Item);
    Protocol.ObjectItemMinimalInformation = ObjectItemMinimalInformation;
    var ObjectItemNotInContainer = (function (_super) {
        __extends(ObjectItemNotInContainer, _super);
        function ObjectItemNotInContainer() {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            _super.call(this);
        }
        ObjectItemNotInContainer.prototype.getTypeId = function () {
            return ObjectItemNotInContainer.ID;
        };
        ObjectItemNotInContainer.prototype.reset = function () {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
        };
        ObjectItemNotInContainer.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemNotInContainer(param1);
        };
        ObjectItemNotInContainer.prototype.serializeAs_ObjectItemNotInContainer = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);
        };
        ObjectItemNotInContainer.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemNotInContainer(param1);
        };
        ObjectItemNotInContainer.prototype.deserializeAs_ObjectItemNotInContainer = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemNotInContainer.objectGID.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
                _loc5_.deserialize(param1);
                this.effects.push(_loc5_);
                _loc3_++;
            }
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemNotInContainer.objectUID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemNotInContainer.quantity.');
            }
        };
        ObjectItemNotInContainer.ID = 134;
        return ObjectItemNotInContainer;
    })(Item);
    Protocol.ObjectItemNotInContainer = ObjectItemNotInContainer;
    var ObjectItemQuantity = (function (_super) {
        __extends(ObjectItemQuantity, _super);
        function ObjectItemQuantity() {
            this.objectUID = 0;
            this.quantity = 0;
            _super.call(this);
        }
        ObjectItemQuantity.prototype.getTypeId = function () {
            return ObjectItemQuantity.ID;
        };
        ObjectItemQuantity.prototype.reset = function () {
            this.objectUID = 0;
            this.quantity = 0;
        };
        ObjectItemQuantity.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemQuantity(param1);
        };
        ObjectItemQuantity.prototype.serializeAs_ObjectItemQuantity = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);
        };
        ObjectItemQuantity.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemQuantity(param1);
        };
        ObjectItemQuantity.prototype.deserializeAs_ObjectItemQuantity = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemQuantity.objectUID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemQuantity.quantity.');
            }
        };
        ObjectItemQuantity.ID = 119;
        return ObjectItemQuantity;
    })(Item);
    Protocol.ObjectItemQuantity = ObjectItemQuantity;
    var ObjectItemToSell = (function (_super) {
        __extends(ObjectItemToSell, _super);
        function ObjectItemToSell() {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
            _super.call(this);
        }
        ObjectItemToSell.prototype.getTypeId = function () {
            return ObjectItemToSell.ID;
        };
        ObjectItemToSell.prototype.reset = function () {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
        };
        ObjectItemToSell.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemToSell(param1);
        };
        ObjectItemToSell.prototype.serializeAs_ObjectItemToSell = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
            }
            param1.writeVarInt(this.objectPrice);
        };
        ObjectItemToSell.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemToSell(param1);
        };
        ObjectItemToSell.prototype.deserializeAs_ObjectItemToSell = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemToSell.objectGID.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
                _loc5_.deserialize(param1);
                this.effects.push(_loc5_);
                _loc3_++;
            }
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemToSell.objectUID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemToSell.quantity.');
            }
            this.objectPrice = param1.readVarUhInt();
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSell.objectPrice.');
            }
        };
        ObjectItemToSell.ID = 120;
        return ObjectItemToSell;
    })(Item);
    Protocol.ObjectItemToSell = ObjectItemToSell;
    var ObjectItemToSellInBid = (function (_super) {
        __extends(ObjectItemToSellInBid, _super);
        function ObjectItemToSellInBid() {
            this.unsoldDelay = 0;
            _super.call(this);
        }
        ObjectItemToSellInBid.prototype.getTypeId = function () {
            return ObjectItemToSellInBid.ID;
        };
        ObjectItemToSellInBid.prototype.reset = function () {
            this.unsoldDelay = 0;
        };
        ObjectItemToSellInBid.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemToSellInBid(param1);
        };
        ObjectItemToSellInBid.prototype.serializeAs_ObjectItemToSellInBid = function (param1) {
            _super.prototype.serializeAs_ObjectItemToSell.call(this, param1);
            if (this.unsoldDelay < 0) {
                throw new Error('Forbidden value (' + this.unsoldDelay + ') on element unsoldDelay.');
            }
            param1.writeInt(this.unsoldDelay);
        };
        ObjectItemToSellInBid.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemToSellInBid(param1);
        };
        ObjectItemToSellInBid.prototype.deserializeAs_ObjectItemToSellInBid = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.unsoldDelay = param1.readInt();
            if (this.unsoldDelay < 0) {
                throw new Error('Forbidden value (' + this.unsoldDelay + ') on element of ObjectItemToSellInBid.unsoldDelay.');
            }
        };
        ObjectItemToSellInBid.ID = 164;
        return ObjectItemToSellInBid;
    })(ObjectItemToSell);
    Protocol.ObjectItemToSellInBid = ObjectItemToSellInBid;
    var ObjectItemToSellInHumanVendorShop = (function (_super) {
        __extends(ObjectItemToSellInHumanVendorShop, _super);
        function ObjectItemToSellInHumanVendorShop() {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
            this.publicPrice = 0;
            _super.call(this);
        }
        ObjectItemToSellInHumanVendorShop.prototype.getTypeId = function () {
            return ObjectItemToSellInHumanVendorShop.ID;
        };
        ObjectItemToSellInHumanVendorShop.prototype.reset = function () {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
            this.publicPrice = 0;
        };
        ObjectItemToSellInHumanVendorShop.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemToSellInHumanVendorShop(param1);
        };
        ObjectItemToSellInHumanVendorShop.prototype.serializeAs_ObjectItemToSellInHumanVendorShop = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
            }
            param1.writeVarInt(this.objectPrice);
            if (this.publicPrice < 0) {
                throw new Error('Forbidden value (' + this.publicPrice + ') on element publicPrice.');
            }
            param1.writeVarInt(this.publicPrice);
        };
        ObjectItemToSellInHumanVendorShop.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemToSellInHumanVendorShop(param1);
        };
        ObjectItemToSellInHumanVendorShop.prototype.deserializeAs_ObjectItemToSellInHumanVendorShop = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemToSellInHumanVendorShop.objectGID.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
                _loc5_.deserialize(param1);
                this.effects.push(_loc5_);
                _loc3_++;
            }
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemToSellInHumanVendorShop.objectUID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemToSellInHumanVendorShop.quantity.');
            }
            this.objectPrice = param1.readVarUhInt();
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSellInHumanVendorShop.objectPrice.');
            }
            this.publicPrice = param1.readVarUhInt();
            if (this.publicPrice < 0) {
                throw new Error('Forbidden value (' + this.publicPrice + ') on element of ObjectItemToSellInHumanVendorShop.publicPrice.');
            }
        };
        ObjectItemToSellInHumanVendorShop.ID = 359;
        return ObjectItemToSellInHumanVendorShop;
    })(Item);
    Protocol.ObjectItemToSellInHumanVendorShop = ObjectItemToSellInHumanVendorShop;
    var ObjectItemToSellInNpcShop = (function (_super) {
        __extends(ObjectItemToSellInNpcShop, _super);
        function ObjectItemToSellInNpcShop() {
            this.objectPrice = 0;
            this.buyCriterion = '';
            _super.call(this);
        }
        ObjectItemToSellInNpcShop.prototype.getTypeId = function () {
            return ObjectItemToSellInNpcShop.ID;
        };
        ObjectItemToSellInNpcShop.prototype.reset = function () {
            this.objectPrice = 0;
            this.buyCriterion = '';
        };
        ObjectItemToSellInNpcShop.prototype.serialize = function (param1) {
            this.serializeAs_ObjectItemToSellInNpcShop(param1);
        };
        ObjectItemToSellInNpcShop.prototype.serializeAs_ObjectItemToSellInNpcShop = function (param1) {
            _super.prototype.serializeAs_ObjectItemMinimalInformation.call(this, param1);
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
            }
            param1.writeVarInt(this.objectPrice);
            param1.writeUTF(this.buyCriterion);
        };
        ObjectItemToSellInNpcShop.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectItemToSellInNpcShop(param1);
        };
        ObjectItemToSellInNpcShop.prototype.deserializeAs_ObjectItemToSellInNpcShop = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.objectPrice = param1.readVarUhInt();
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSellInNpcShop.objectPrice.');
            }
            this.buyCriterion = param1.readUTF();
        };
        ObjectItemToSellInNpcShop.ID = 352;
        return ObjectItemToSellInNpcShop;
    })(ObjectItemMinimalInformation);
    Protocol.ObjectItemToSellInNpcShop = ObjectItemToSellInNpcShop;
    var SellerBuyerDescriptor = (function () {
        function SellerBuyerDescriptor() {
            this.quantities = [];
            this.types = [];
            this.taxPercentage = 0;
            this.taxModificationPercentage = 0;
            this.maxItemLevel = 0;
            this.maxItemPerAccount = 0;
            this.npcContextualId = 0;
            this.unsoldDelay = 0;
        }
        SellerBuyerDescriptor.prototype.getTypeId = function () {
            return SellerBuyerDescriptor.ID;
        };
        SellerBuyerDescriptor.prototype.reset = function () {
            this.quantities = [];
            this.types = [];
            this.taxPercentage = 0;
            this.taxModificationPercentage = 0;
            this.maxItemLevel = 0;
            this.maxItemPerAccount = 0;
            this.npcContextualId = 0;
            this.unsoldDelay = 0;
        };
        SellerBuyerDescriptor.prototype.serialize = function (param1) {
            this.serializeAs_SellerBuyerDescriptor(param1);
        };
        SellerBuyerDescriptor.prototype.serializeAs_SellerBuyerDescriptor = function (param1) {
            param1.writeShort(this.quantities.length);
            var _loc2_ = 0;
            while (_loc2_ < this.quantities.length) {
                if (this.quantities[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.quantities[_loc2_] + ') on element 1 (starting at 1) of quantities.');
                }
                param1.writeVarInt(this.quantities[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.types.length);
            var _loc3_ = 0;
            while (_loc3_ < this.types.length) {
                if (this.types[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.types[_loc3_] + ') on element 2 (starting at 1) of types.');
                }
                param1.writeVarInt(this.types[_loc3_]);
                _loc3_++;
            }
            param1.writeFloat(this.taxPercentage);
            param1.writeFloat(this.taxModificationPercentage);
            if (this.maxItemLevel < 0 || this.maxItemLevel > 255) {
                throw new Error('Forbidden value (' + this.maxItemLevel + ') on element maxItemLevel.');
            }
            param1.writeByte(this.maxItemLevel);
            if (this.maxItemPerAccount < 0) {
                throw new Error('Forbidden value (' + this.maxItemPerAccount + ') on element maxItemPerAccount.');
            }
            param1.writeVarInt(this.maxItemPerAccount);
            param1.writeInt(this.npcContextualId);
            if (this.unsoldDelay < 0) {
                throw new Error('Forbidden value (' + this.unsoldDelay + ') on element unsoldDelay.');
            }
            param1.writeVarShort(this.unsoldDelay);
        };
        SellerBuyerDescriptor.prototype.deserialize = function (param1) {
            this.deserializeAs_SellerBuyerDescriptor(param1);
        };
        SellerBuyerDescriptor.prototype.deserializeAs_SellerBuyerDescriptor = function (param1) {
            var _loc6_ = 0;
            var _loc7_ = 0;
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readVarUhInt();
                if (_loc6_ < 0) {
                    throw new Error('Forbidden value (' + _loc6_ + ') on elements of quantities.');
                }
                this.quantities.push(_loc6_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = param1.readVarUhInt();
                if (_loc7_ < 0) {
                    throw new Error('Forbidden value (' + _loc7_ + ') on elements of types.');
                }
                this.types.push(_loc7_);
                _loc5_++;
            }
            this.taxPercentage = param1.readFloat();
            this.taxModificationPercentage = param1.readFloat();
            this.maxItemLevel = param1.readUnsignedByte();
            if (this.maxItemLevel < 0 || this.maxItemLevel > 255) {
                throw new Error('Forbidden value (' + this.maxItemLevel + ') on element of SellerBuyerDescriptor.maxItemLevel.');
            }
            this.maxItemPerAccount = param1.readVarUhInt();
            if (this.maxItemPerAccount < 0) {
                throw new Error('Forbidden value (' + this.maxItemPerAccount + ') on element of SellerBuyerDescriptor.maxItemPerAccount.');
            }
            this.npcContextualId = param1.readInt();
            this.unsoldDelay = param1.readVarUhShort();
            if (this.unsoldDelay < 0) {
                throw new Error('Forbidden value (' + this.unsoldDelay + ') on element of SellerBuyerDescriptor.unsoldDelay.');
            }
        };
        SellerBuyerDescriptor.ID = 121;
        return SellerBuyerDescriptor;
    })();
    Protocol.SellerBuyerDescriptor = SellerBuyerDescriptor;
    var SpellItem = (function (_super) {
        __extends(SpellItem, _super);
        function SpellItem() {
            this.position = 0;
            this.spellId = 0;
            this.spellLevel = 0;
            _super.call(this);
        }
        SpellItem.prototype.getTypeId = function () {
            return SpellItem.ID;
        };
        SpellItem.prototype.reset = function () {
            this.position = 0;
            this.spellId = 0;
            this.spellLevel = 0;
        };
        SpellItem.prototype.serialize = function (param1) {
            this.serializeAs_SpellItem(param1);
        };
        SpellItem.prototype.serializeAs_SpellItem = function (param1) {
            _super.prototype.serializeAs_Item.call(this, param1);
            if (this.position < 63 || this.position > 255) {
                throw new Error('Forbidden value (' + this.position + ') on element position.');
            }
            param1.writeByte(this.position);
            param1.writeInt(this.spellId);
            if (this.spellLevel < 1 || this.spellLevel > 6) {
                throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
            }
            param1.writeByte(this.spellLevel);
        };
        SpellItem.prototype.deserialize = function (param1) {
            this.deserializeAs_SpellItem(param1);
        };
        SpellItem.prototype.deserializeAs_SpellItem = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.position = param1.readUnsignedByte();
            if (this.position < 63 || this.position > 255) {
                throw new Error('Forbidden value (' + this.position + ') on element of SpellItem.position.');
            }
            this.spellId = param1.readInt();
            this.spellLevel = param1.readByte();
            if (this.spellLevel < 1 || this.spellLevel > 6) {
                throw new Error('Forbidden value (' + this.spellLevel + ') on element of SpellItem.spellLevel.');
            }
        };
        SpellItem.ID = 49;
        return SpellItem;
    })(Item);
    Protocol.SpellItem = SpellItem;
    var ObjectEffect = (function () {
        function ObjectEffect() {
            this.actionId = 0;
        }
        ObjectEffect.prototype.getTypeId = function () {
            return ObjectEffect.ID;
        };
        ObjectEffect.prototype.reset = function () {
            this.actionId = 0;
        };
        ObjectEffect.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffect(param1);
        };
        ObjectEffect.prototype.serializeAs_ObjectEffect = function (param1) {
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
            }
            param1.writeVarShort(this.actionId);
        };
        ObjectEffect.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffect(param1);
        };
        ObjectEffect.prototype.deserializeAs_ObjectEffect = function (param1) {
            this.actionId = param1.readVarUhShort();
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element of ObjectEffect.actionId.');
            }
        };
        ObjectEffect.ID = 76;
        return ObjectEffect;
    })();
    Protocol.ObjectEffect = ObjectEffect;
    var ObjectEffectCreature = (function (_super) {
        __extends(ObjectEffectCreature, _super);
        function ObjectEffectCreature() {
            this.monsterFamilyId = 0;
            _super.call(this);
        }
        ObjectEffectCreature.prototype.getTypeId = function () {
            return ObjectEffectCreature.ID;
        };
        ObjectEffectCreature.prototype.reset = function () {
            this.monsterFamilyId = 0;
        };
        ObjectEffectCreature.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectCreature(param1);
        };
        ObjectEffectCreature.prototype.serializeAs_ObjectEffectCreature = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            if (this.monsterFamilyId < 0) {
                throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element monsterFamilyId.');
            }
            param1.writeVarShort(this.monsterFamilyId);
        };
        ObjectEffectCreature.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectCreature(param1);
        };
        ObjectEffectCreature.prototype.deserializeAs_ObjectEffectCreature = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.monsterFamilyId = param1.readVarUhShort();
            if (this.monsterFamilyId < 0) {
                throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element of ObjectEffectCreature.monsterFamilyId.');
            }
        };
        ObjectEffectCreature.ID = 71;
        return ObjectEffectCreature;
    })(ObjectEffect);
    Protocol.ObjectEffectCreature = ObjectEffectCreature;
    var ObjectEffectDate = (function (_super) {
        __extends(ObjectEffectDate, _super);
        function ObjectEffectDate() {
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            _super.call(this);
        }
        ObjectEffectDate.prototype.getTypeId = function () {
            return ObjectEffectDate.ID;
        };
        ObjectEffectDate.prototype.reset = function () {
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
        };
        ObjectEffectDate.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectDate(param1);
        };
        ObjectEffectDate.prototype.serializeAs_ObjectEffectDate = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            if (this.year < 0) {
                throw new Error('Forbidden value (' + this.year + ') on element year.');
            }
            param1.writeVarShort(this.year);
            if (this.month < 0) {
                throw new Error('Forbidden value (' + this.month + ') on element month.');
            }
            param1.writeByte(this.month);
            if (this.day < 0) {
                throw new Error('Forbidden value (' + this.day + ') on element day.');
            }
            param1.writeByte(this.day);
            if (this.hour < 0) {
                throw new Error('Forbidden value (' + this.hour + ') on element hour.');
            }
            param1.writeByte(this.hour);
            if (this.minute < 0) {
                throw new Error('Forbidden value (' + this.minute + ') on element minute.');
            }
            param1.writeByte(this.minute);
        };
        ObjectEffectDate.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectDate(param1);
        };
        ObjectEffectDate.prototype.deserializeAs_ObjectEffectDate = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.year = param1.readVarUhShort();
            if (this.year < 0) {
                throw new Error('Forbidden value (' + this.year + ') on element of ObjectEffectDate.year.');
            }
            this.month = param1.readByte();
            if (this.month < 0) {
                throw new Error('Forbidden value (' + this.month + ') on element of ObjectEffectDate.month.');
            }
            this.day = param1.readByte();
            if (this.day < 0) {
                throw new Error('Forbidden value (' + this.day + ') on element of ObjectEffectDate.day.');
            }
            this.hour = param1.readByte();
            if (this.hour < 0) {
                throw new Error('Forbidden value (' + this.hour + ') on element of ObjectEffectDate.hour.');
            }
            this.minute = param1.readByte();
            if (this.minute < 0) {
                throw new Error('Forbidden value (' + this.minute + ') on element of ObjectEffectDate.minute.');
            }
        };
        ObjectEffectDate.ID = 72;
        return ObjectEffectDate;
    })(ObjectEffect);
    Protocol.ObjectEffectDate = ObjectEffectDate;
    var ObjectEffectDice = (function (_super) {
        __extends(ObjectEffectDice, _super);
        function ObjectEffectDice() {
            this.diceNum = 0;
            this.diceSide = 0;
            this.diceConst = 0;
            _super.call(this);
        }
        ObjectEffectDice.prototype.getTypeId = function () {
            return ObjectEffectDice.ID;
        };
        ObjectEffectDice.prototype.reset = function () {
            this.diceNum = 0;
            this.diceSide = 0;
            this.diceConst = 0;
        };
        ObjectEffectDice.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectDice(param1);
        };
        ObjectEffectDice.prototype.serializeAs_ObjectEffectDice = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            if (this.diceNum < 0) {
                throw new Error('Forbidden value (' + this.diceNum + ') on element diceNum.');
            }
            param1.writeVarShort(this.diceNum);
            if (this.diceSide < 0) {
                throw new Error('Forbidden value (' + this.diceSide + ') on element diceSide.');
            }
            param1.writeVarShort(this.diceSide);
            if (this.diceConst < 0) {
                throw new Error('Forbidden value (' + this.diceConst + ') on element diceConst.');
            }
            param1.writeVarShort(this.diceConst);
        };
        ObjectEffectDice.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectDice(param1);
        };
        ObjectEffectDice.prototype.deserializeAs_ObjectEffectDice = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.diceNum = param1.readVarUhShort();
            if (this.diceNum < 0) {
                throw new Error('Forbidden value (' + this.diceNum + ') on element of ObjectEffectDice.diceNum.');
            }
            this.diceSide = param1.readVarUhShort();
            if (this.diceSide < 0) {
                throw new Error('Forbidden value (' + this.diceSide + ') on element of ObjectEffectDice.diceSide.');
            }
            this.diceConst = param1.readVarUhShort();
            if (this.diceConst < 0) {
                throw new Error('Forbidden value (' + this.diceConst + ') on element of ObjectEffectDice.diceConst.');
            }
        };
        ObjectEffectDice.ID = 73;
        return ObjectEffectDice;
    })(ObjectEffect);
    Protocol.ObjectEffectDice = ObjectEffectDice;
    var ObjectEffectDuration = (function (_super) {
        __extends(ObjectEffectDuration, _super);
        function ObjectEffectDuration() {
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            _super.call(this);
        }
        ObjectEffectDuration.prototype.getTypeId = function () {
            return ObjectEffectDuration.ID;
        };
        ObjectEffectDuration.prototype.reset = function () {
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
        };
        ObjectEffectDuration.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectDuration(param1);
        };
        ObjectEffectDuration.prototype.serializeAs_ObjectEffectDuration = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            if (this.days < 0) {
                throw new Error('Forbidden value (' + this.days + ') on element days.');
            }
            param1.writeVarShort(this.days);
            if (this.hours < 0) {
                throw new Error('Forbidden value (' + this.hours + ') on element hours.');
            }
            param1.writeByte(this.hours);
            if (this.minutes < 0) {
                throw new Error('Forbidden value (' + this.minutes + ') on element minutes.');
            }
            param1.writeByte(this.minutes);
        };
        ObjectEffectDuration.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectDuration(param1);
        };
        ObjectEffectDuration.prototype.deserializeAs_ObjectEffectDuration = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.days = param1.readVarUhShort();
            if (this.days < 0) {
                throw new Error('Forbidden value (' + this.days + ') on element of ObjectEffectDuration.days.');
            }
            this.hours = param1.readByte();
            if (this.hours < 0) {
                throw new Error('Forbidden value (' + this.hours + ') on element of ObjectEffectDuration.hours.');
            }
            this.minutes = param1.readByte();
            if (this.minutes < 0) {
                throw new Error('Forbidden value (' + this.minutes + ') on element of ObjectEffectDuration.minutes.');
            }
        };
        ObjectEffectDuration.ID = 75;
        return ObjectEffectDuration;
    })(ObjectEffect);
    Protocol.ObjectEffectDuration = ObjectEffectDuration;
    var ObjectEffectInteger = (function (_super) {
        __extends(ObjectEffectInteger, _super);
        function ObjectEffectInteger() {
            this.value = 0;
            _super.call(this);
        }
        ObjectEffectInteger.prototype.getTypeId = function () {
            return ObjectEffectInteger.ID;
        };
        ObjectEffectInteger.prototype.reset = function () {
            this.value = 0;
        };
        ObjectEffectInteger.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectInteger(param1);
        };
        ObjectEffectInteger.prototype.serializeAs_ObjectEffectInteger = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element value.');
            }
            param1.writeVarShort(this.value);
        };
        ObjectEffectInteger.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectInteger(param1);
        };
        ObjectEffectInteger.prototype.deserializeAs_ObjectEffectInteger = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readVarUhShort();
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element of ObjectEffectInteger.value.');
            }
        };
        ObjectEffectInteger.ID = 70;
        return ObjectEffectInteger;
    })(ObjectEffect);
    Protocol.ObjectEffectInteger = ObjectEffectInteger;
    var ObjectEffectLadder = (function (_super) {
        __extends(ObjectEffectLadder, _super);
        function ObjectEffectLadder() {
            this.monsterCount = 0;
            _super.call(this);
        }
        ObjectEffectLadder.prototype.getTypeId = function () {
            return ObjectEffectLadder.ID;
        };
        ObjectEffectLadder.prototype.reset = function () {
            this.monsterCount = 0;
        };
        ObjectEffectLadder.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectLadder(param1);
        };
        ObjectEffectLadder.prototype.serializeAs_ObjectEffectLadder = function (param1) {
            _super.prototype.serializeAs_ObjectEffectCreature.call(this, param1);
            if (this.monsterCount < 0) {
                throw new Error('Forbidden value (' + this.monsterCount + ') on element monsterCount.');
            }
            param1.writeVarInt(this.monsterCount);
        };
        ObjectEffectLadder.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectLadder(param1);
        };
        ObjectEffectLadder.prototype.deserializeAs_ObjectEffectLadder = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.monsterCount = param1.readVarUhInt();
            if (this.monsterCount < 0) {
                throw new Error('Forbidden value (' + this.monsterCount + ') on element of ObjectEffectLadder.monsterCount.');
            }
        };
        ObjectEffectLadder.ID = 81;
        return ObjectEffectLadder;
    })(ObjectEffectCreature);
    Protocol.ObjectEffectLadder = ObjectEffectLadder;
    var ObjectEffectMinMax = (function (_super) {
        __extends(ObjectEffectMinMax, _super);
        function ObjectEffectMinMax() {
            this.min = 0;
            this.max = 0;
            _super.call(this);
        }
        ObjectEffectMinMax.prototype.getTypeId = function () {
            return ObjectEffectMinMax.ID;
        };
        ObjectEffectMinMax.prototype.reset = function () {
            this.min = 0;
            this.max = 0;
        };
        ObjectEffectMinMax.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectMinMax(param1);
        };
        ObjectEffectMinMax.prototype.serializeAs_ObjectEffectMinMax = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element min.');
            }
            param1.writeVarInt(this.min);
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element max.');
            }
            param1.writeVarInt(this.max);
        };
        ObjectEffectMinMax.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectMinMax(param1);
        };
        ObjectEffectMinMax.prototype.deserializeAs_ObjectEffectMinMax = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.min = param1.readVarUhInt();
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element of ObjectEffectMinMax.min.');
            }
            this.max = param1.readVarUhInt();
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element of ObjectEffectMinMax.max.');
            }
        };
        ObjectEffectMinMax.ID = 82;
        return ObjectEffectMinMax;
    })(ObjectEffect);
    Protocol.ObjectEffectMinMax = ObjectEffectMinMax;
    var ObjectEffectMount = (function (_super) {
        __extends(ObjectEffectMount, _super);
        function ObjectEffectMount() {
            this.mountId = 0;
            this.date = 0;
            this.modelId = 0;
            _super.call(this);
        }
        ObjectEffectMount.prototype.getTypeId = function () {
            return ObjectEffectMount.ID;
        };
        ObjectEffectMount.prototype.reset = function () {
            this.mountId = 0;
            this.date = 0;
            this.modelId = 0;
        };
        ObjectEffectMount.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectMount(param1);
        };
        ObjectEffectMount.prototype.serializeAs_ObjectEffectMount = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            if (this.mountId < 0) {
                throw new Error('Forbidden value (' + this.mountId + ') on element mountId.');
            }
            param1.writeInt(this.mountId);
            if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.date + ') on element date.');
            }
            param1.writeDouble(this.date);
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeVarShort(this.modelId);
        };
        ObjectEffectMount.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectMount(param1);
        };
        ObjectEffectMount.prototype.deserializeAs_ObjectEffectMount = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.mountId = param1.readInt();
            if (this.mountId < 0) {
                throw new Error('Forbidden value (' + this.mountId + ') on element of ObjectEffectMount.mountId.');
            }
            this.date = param1.readDouble();
            if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.date + ') on element of ObjectEffectMount.date.');
            }
            this.modelId = param1.readVarUhShort();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of ObjectEffectMount.modelId.');
            }
        };
        ObjectEffectMount.ID = 179;
        return ObjectEffectMount;
    })(ObjectEffect);
    Protocol.ObjectEffectMount = ObjectEffectMount;
    var ObjectEffectString = (function (_super) {
        __extends(ObjectEffectString, _super);
        function ObjectEffectString() {
            this.value = '';
            _super.call(this);
        }
        ObjectEffectString.prototype.getTypeId = function () {
            return ObjectEffectString.ID;
        };
        ObjectEffectString.prototype.reset = function () {
            this.value = '';
        };
        ObjectEffectString.prototype.serialize = function (param1) {
            this.serializeAs_ObjectEffectString(param1);
        };
        ObjectEffectString.prototype.serializeAs_ObjectEffectString = function (param1) {
            _super.prototype.serializeAs_ObjectEffect.call(this, param1);
            param1.writeUTF(this.value);
        };
        ObjectEffectString.prototype.deserialize = function (param1) {
            this.deserializeAs_ObjectEffectString(param1);
        };
        ObjectEffectString.prototype.deserializeAs_ObjectEffectString = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readUTF();
        };
        ObjectEffectString.ID = 74;
        return ObjectEffectString;
    })(ObjectEffect);
    Protocol.ObjectEffectString = ObjectEffectString;
    var ProtectedEntityWaitingForHelpInfo = (function () {
        function ProtectedEntityWaitingForHelpInfo() {
            this.timeLeftBeforeFight = 0;
            this.waitTimeForPlacement = 0;
            this.nbPositionForDefensors = 0;
        }
        ProtectedEntityWaitingForHelpInfo.prototype.getTypeId = function () {
            return ProtectedEntityWaitingForHelpInfo.ID;
        };
        ProtectedEntityWaitingForHelpInfo.prototype.reset = function () {
            this.timeLeftBeforeFight = 0;
            this.waitTimeForPlacement = 0;
            this.nbPositionForDefensors = 0;
        };
        ProtectedEntityWaitingForHelpInfo.prototype.serialize = function (param1) {
            this.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
        };
        ProtectedEntityWaitingForHelpInfo.prototype.serializeAs_ProtectedEntityWaitingForHelpInfo = function (param1) {
            param1.writeInt(this.timeLeftBeforeFight);
            param1.writeInt(this.waitTimeForPlacement);
            if (this.nbPositionForDefensors < 0) {
                throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element nbPositionForDefensors.');
            }
            param1.writeByte(this.nbPositionForDefensors);
        };
        ProtectedEntityWaitingForHelpInfo.prototype.deserialize = function (param1) {
            this.deserializeAs_ProtectedEntityWaitingForHelpInfo(param1);
        };
        ProtectedEntityWaitingForHelpInfo.prototype.deserializeAs_ProtectedEntityWaitingForHelpInfo = function (param1) {
            this.timeLeftBeforeFight = param1.readInt();
            this.waitTimeForPlacement = param1.readInt();
            this.nbPositionForDefensors = param1.readByte();
            if (this.nbPositionForDefensors < 0) {
                throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element of ProtectedEntityWaitingForHelpInfo.nbPositionForDefensors.');
            }
        };
        ProtectedEntityWaitingForHelpInfo.ID = 186;
        return ProtectedEntityWaitingForHelpInfo;
    })();
    Protocol.ProtectedEntityWaitingForHelpInfo = ProtectedEntityWaitingForHelpInfo;
    var AbstractContactInformations = (function () {
        function AbstractContactInformations() {
            this.accountId = 0;
            this.accountName = '';
        }
        AbstractContactInformations.prototype.getTypeId = function () {
            return AbstractContactInformations.ID;
        };
        AbstractContactInformations.prototype.reset = function () {
            this.accountId = 0;
            this.accountName = '';
        };
        AbstractContactInformations.prototype.serialize = function (param1) {
            this.serializeAs_AbstractContactInformations(param1);
        };
        AbstractContactInformations.prototype.serializeAs_AbstractContactInformations = function (param1) {
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
            }
            param1.writeInt(this.accountId);
            param1.writeUTF(this.accountName);
        };
        AbstractContactInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AbstractContactInformations(param1);
        };
        AbstractContactInformations.prototype.deserializeAs_AbstractContactInformations = function (param1) {
            this.accountId = param1.readInt();
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element of AbstractContactInformations.accountId.');
            }
            this.accountName = param1.readUTF();
        };
        AbstractContactInformations.ID = 380;
        return AbstractContactInformations;
    })();
    Protocol.AbstractContactInformations = AbstractContactInformations;
    var FriendInformations = (function (_super) {
        __extends(FriendInformations, _super);
        function FriendInformations() {
            this.playerState = 99;
            this.lastConnection = 0;
            this.achievementPoints = 0;
            _super.call(this);
        }
        FriendInformations.prototype.getTypeId = function () {
            return FriendInformations.ID;
        };
        FriendInformations.prototype.reset = function () {
            this.playerState = 99;
            this.lastConnection = 0;
            this.achievementPoints = 0;
        };
        FriendInformations.prototype.serialize = function (param1) {
            this.serializeAs_FriendInformations(param1);
        };
        FriendInformations.prototype.serializeAs_FriendInformations = function (param1) {
            _super.prototype.serializeAs_AbstractContactInformations.call(this, param1);
            param1.writeByte(this.playerState);
            if (this.lastConnection < 0) {
                throw new Error('Forbidden value (' + this.lastConnection + ') on element lastConnection.');
            }
            param1.writeVarShort(this.lastConnection);
            param1.writeInt(this.achievementPoints);
        };
        FriendInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FriendInformations(param1);
        };
        FriendInformations.prototype.deserializeAs_FriendInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.playerState = param1.readByte();
            if (this.playerState < 0) {
                throw new Error('Forbidden value (' + this.playerState + ') on element of FriendInformations.playerState.');
            }
            this.lastConnection = param1.readVarUhShort();
            if (this.lastConnection < 0) {
                throw new Error('Forbidden value (' + this.lastConnection + ') on element of FriendInformations.lastConnection.');
            }
            this.achievementPoints = param1.readInt();
        };
        FriendInformations.ID = 78;
        return FriendInformations;
    })(AbstractContactInformations);
    Protocol.FriendInformations = FriendInformations;
    var FriendOnlineInformations = (function (_super) {
        __extends(FriendOnlineInformations, _super);
        function FriendOnlineInformations() {
            this.playerId = 0;
            this.playerName = '';
            this.level = 0;
            this.alignmentSide = 0;
            this.breed = 0;
            this.sex = false;
            this.guildInfo = new BasicGuildInformations();
            this.moodSmileyId = 0;
            this.status = new PlayerStatus();
            _super.call(this);
        }
        FriendOnlineInformations.prototype.getTypeId = function () {
            return FriendOnlineInformations.ID;
        };
        FriendOnlineInformations.prototype.reset = function () {
            this.playerId = 0;
            this.playerName = '';
            this.level = 0;
            this.alignmentSide = 0;
            this.breed = 0;
            this.sex = false;
            this.guildInfo = new BasicGuildInformations();
            this.moodSmileyId = 0;
            this.status = new PlayerStatus();
        };
        FriendOnlineInformations.prototype.serialize = function (param1) {
            this.serializeAs_FriendOnlineInformations(param1);
        };
        FriendOnlineInformations.prototype.serializeAs_FriendOnlineInformations = function (param1) {
            _super.prototype.serializeAs_FriendInformations.call(this, param1);
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
            }
            param1.writeVarInt(this.playerId);
            param1.writeUTF(this.playerName);
            if (this.level < 0 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeByte(this.alignmentSide);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            this.guildInfo.serializeAs_BasicGuildInformations(param1);
            if (this.moodSmileyId < 0) {
                throw new Error('Forbidden value (' + this.moodSmileyId + ') on element moodSmileyId.');
            }
            param1.writeVarShort(this.moodSmileyId);
            param1.writeShort(this.status.getTypeId());
            this.status.serialize(param1);
        };
        FriendOnlineInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FriendOnlineInformations(param1);
        };
        FriendOnlineInformations.prototype.deserializeAs_FriendOnlineInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.playerId = param1.readVarUhInt();
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element of FriendOnlineInformations.playerId.');
            }
            this.playerName = param1.readUTF();
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FriendOnlineInformations.level.');
            }
            this.alignmentSide = param1.readByte();
            this.breed = param1.readByte();
            if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
                throw new Error('Forbidden value (' + this.breed + ') on element of FriendOnlineInformations.breed.');
            }
            this.sex = param1.readBoolean();
            this.guildInfo = new BasicGuildInformations();
            this.guildInfo.deserialize(param1);
            this.moodSmileyId = param1.readVarUhShort();
            if (this.moodSmileyId < 0) {
                throw new Error('Forbidden value (' + this.moodSmileyId + ') on element of FriendOnlineInformations.moodSmileyId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
        };
        FriendOnlineInformations.ID = 92;
        return FriendOnlineInformations;
    })(FriendInformations);
    Protocol.FriendOnlineInformations = FriendOnlineInformations;
    var FriendSpouseInformations = (function () {
        function FriendSpouseInformations() {
            this.spouseAccountId = 0;
            this.spouseId = 0;
            this.spouseName = '';
            this.spouseLevel = 0;
            this.breed = 0;
            this.sex = 0;
            this.spouseEntityLook = new EntityLook();
            this.guildInfo = new BasicGuildInformations();
            this.alignmentSide = 0;
        }
        FriendSpouseInformations.prototype.getTypeId = function () {
            return FriendSpouseInformations.ID;
        };
        FriendSpouseInformations.prototype.reset = function () {
            this.spouseAccountId = 0;
            this.spouseId = 0;
            this.spouseName = '';
            this.spouseLevel = 0;
            this.breed = 0;
            this.sex = 0;
            this.spouseEntityLook = new EntityLook();
            this.guildInfo = new BasicGuildInformations();
            this.alignmentSide = 0;
        };
        FriendSpouseInformations.prototype.serialize = function (param1) {
            this.serializeAs_FriendSpouseInformations(param1);
        };
        FriendSpouseInformations.prototype.serializeAs_FriendSpouseInformations = function (param1) {
            if (this.spouseAccountId < 0) {
                throw new Error('Forbidden value (' + this.spouseAccountId + ') on element spouseAccountId.');
            }
            param1.writeInt(this.spouseAccountId);
            if (this.spouseId < 0) {
                throw new Error('Forbidden value (' + this.spouseId + ') on element spouseId.');
            }
            param1.writeVarInt(this.spouseId);
            param1.writeUTF(this.spouseName);
            if (this.spouseLevel < 1 || this.spouseLevel > 200) {
                throw new Error('Forbidden value (' + this.spouseLevel + ') on element spouseLevel.');
            }
            param1.writeByte(this.spouseLevel);
            param1.writeByte(this.breed);
            param1.writeByte(this.sex);
            this.spouseEntityLook.serializeAs_EntityLook(param1);
            this.guildInfo.serializeAs_BasicGuildInformations(param1);
            param1.writeByte(this.alignmentSide);
        };
        FriendSpouseInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FriendSpouseInformations(param1);
        };
        FriendSpouseInformations.prototype.deserializeAs_FriendSpouseInformations = function (param1) {
            this.spouseAccountId = param1.readInt();
            if (this.spouseAccountId < 0) {
                throw new Error('Forbidden value (' + this.spouseAccountId + ') on element of FriendSpouseInformations.spouseAccountId.');
            }
            this.spouseId = param1.readVarUhInt();
            if (this.spouseId < 0) {
                throw new Error('Forbidden value (' + this.spouseId + ') on element of FriendSpouseInformations.spouseId.');
            }
            this.spouseName = param1.readUTF();
            this.spouseLevel = param1.readUnsignedByte();
            if (this.spouseLevel < 1 || this.spouseLevel > 200) {
                throw new Error('Forbidden value (' + this.spouseLevel + ') on element of FriendSpouseInformations.spouseLevel.');
            }
            this.breed = param1.readByte();
            this.sex = param1.readByte();
            this.spouseEntityLook = new EntityLook();
            this.spouseEntityLook.deserialize(param1);
            this.guildInfo = new BasicGuildInformations();
            this.guildInfo.deserialize(param1);
            this.alignmentSide = param1.readByte();
        };
        FriendSpouseInformations.ID = 77;
        return FriendSpouseInformations;
    })();
    Protocol.FriendSpouseInformations = FriendSpouseInformations;
    var FriendSpouseOnlineInformations = (function (_super) {
        __extends(FriendSpouseOnlineInformations, _super);
        function FriendSpouseOnlineInformations() {
            this.mapId = 0;
            this.subAreaId = 0;
            this.inFight = false;
            this.followSpouse = false;
            _super.call(this);
        }
        FriendSpouseOnlineInformations.prototype.getTypeId = function () {
            return FriendSpouseOnlineInformations.ID;
        };
        FriendSpouseOnlineInformations.prototype.reset = function () {
            this.mapId = 0;
            this.subAreaId = 0;
            this.inFight = false;
            this.followSpouse = false;
        };
        FriendSpouseOnlineInformations.prototype.serialize = function (param1) {
            this.serializeAs_FriendSpouseOnlineInformations(param1);
        };
        FriendSpouseOnlineInformations.prototype.serializeAs_FriendSpouseOnlineInformations = function (param1) {
            _super.prototype.serializeAs_FriendSpouseInformations.call(this, param1);
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.inFight);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.followSpouse);
            param1.writeByte(_loc2_);
            if (this.mapId < 0) {
                throw new Error('Forbidden value (' + this.mapId + ') on element mapId.');
            }
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
        };
        FriendSpouseOnlineInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_FriendSpouseOnlineInformations(param1);
        };
        FriendSpouseOnlineInformations.prototype.deserializeAs_FriendSpouseOnlineInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readByte();
            this.inFight = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.followSpouse = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.mapId = param1.readInt();
            if (this.mapId < 0) {
                throw new Error('Forbidden value (' + this.mapId + ') on element of FriendSpouseOnlineInformations.mapId.');
            }
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of FriendSpouseOnlineInformations.subAreaId.');
            }
        };
        FriendSpouseOnlineInformations.ID = 93;
        return FriendSpouseOnlineInformations;
    })(FriendSpouseInformations);
    Protocol.FriendSpouseOnlineInformations = FriendSpouseOnlineInformations;
    var IgnoredInformations = (function (_super) {
        __extends(IgnoredInformations, _super);
        function IgnoredInformations() {
            _super.call(this);
        }
        IgnoredInformations.prototype.getTypeId = function () {
            return IgnoredInformations.ID;
        };
        IgnoredInformations.prototype.reset = function () {
        };
        IgnoredInformations.prototype.serialize = function (param1) {
            this.serializeAs_IgnoredInformations(param1);
        };
        IgnoredInformations.prototype.serializeAs_IgnoredInformations = function (param1) {
            _super.prototype.serializeAs_AbstractContactInformations.call(this, param1);
        };
        IgnoredInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_IgnoredInformations(param1);
        };
        IgnoredInformations.prototype.deserializeAs_IgnoredInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        IgnoredInformations.ID = 106;
        return IgnoredInformations;
    })(AbstractContactInformations);
    Protocol.IgnoredInformations = IgnoredInformations;
    var IgnoredOnlineInformations = (function (_super) {
        __extends(IgnoredOnlineInformations, _super);
        function IgnoredOnlineInformations() {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
            _super.call(this);
        }
        IgnoredOnlineInformations.prototype.getTypeId = function () {
            return IgnoredOnlineInformations.ID;
        };
        IgnoredOnlineInformations.prototype.reset = function () {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
        };
        IgnoredOnlineInformations.prototype.serialize = function (param1) {
            this.serializeAs_IgnoredOnlineInformations(param1);
        };
        IgnoredOnlineInformations.prototype.serializeAs_IgnoredOnlineInformations = function (param1) {
            _super.prototype.serializeAs_IgnoredInformations.call(this, param1);
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
            }
            param1.writeVarInt(this.playerId);
            param1.writeUTF(this.playerName);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
        };
        IgnoredOnlineInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_IgnoredOnlineInformations(param1);
        };
        IgnoredOnlineInformations.prototype.deserializeAs_IgnoredOnlineInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.playerId = param1.readVarUhInt();
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element of IgnoredOnlineInformations.playerId.');
            }
            this.playerName = param1.readUTF();
            this.breed = param1.readByte();
            if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
                throw new Error('Forbidden value (' + this.breed + ') on element of IgnoredOnlineInformations.breed.');
            }
            this.sex = param1.readBoolean();
        };
        IgnoredOnlineInformations.ID = 105;
        return IgnoredOnlineInformations;
    })(IgnoredInformations);
    Protocol.IgnoredOnlineInformations = IgnoredOnlineInformations;
    var GuildEmblem = (function () {
        function GuildEmblem() {
            this.symbolShape = 0;
            this.symbolColor = 0;
            this.backgroundShape = 0;
            this.backgroundColor = 0;
        }
        GuildEmblem.prototype.getTypeId = function () {
            return GuildEmblem.ID;
        };
        GuildEmblem.prototype.reset = function () {
            this.symbolShape = 0;
            this.symbolColor = 0;
            this.backgroundShape = 0;
            this.backgroundColor = 0;
        };
        GuildEmblem.prototype.serialize = function (param1) {
            this.serializeAs_GuildEmblem(param1);
        };
        GuildEmblem.prototype.serializeAs_GuildEmblem = function (param1) {
            if (this.symbolShape < 0) {
                throw new Error('Forbidden value (' + this.symbolShape + ') on element symbolShape.');
            }
            param1.writeVarShort(this.symbolShape);
            param1.writeInt(this.symbolColor);
            if (this.backgroundShape < 0) {
                throw new Error('Forbidden value (' + this.backgroundShape + ') on element backgroundShape.');
            }
            param1.writeByte(this.backgroundShape);
            param1.writeInt(this.backgroundColor);
        };
        GuildEmblem.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildEmblem(param1);
        };
        GuildEmblem.prototype.deserializeAs_GuildEmblem = function (param1) {
            this.symbolShape = param1.readVarUhShort();
            if (this.symbolShape < 0) {
                throw new Error('Forbidden value (' + this.symbolShape + ') on element of GuildEmblem.symbolShape.');
            }
            this.symbolColor = param1.readInt();
            this.backgroundShape = param1.readByte();
            if (this.backgroundShape < 0) {
                throw new Error('Forbidden value (' + this.backgroundShape + ') on element of GuildEmblem.backgroundShape.');
            }
            this.backgroundColor = param1.readInt();
        };
        GuildEmblem.ID = 87;
        return GuildEmblem;
    })();
    Protocol.GuildEmblem = GuildEmblem;
    var GuildMember = (function (_super) {
        __extends(GuildMember, _super);
        function GuildMember() {
            this.breed = 0;
            this.sex = false;
            this.rank = 0;
            this.givenExperience = 0;
            this.experienceGivenPercent = 0;
            this.rights = 0;
            this.connected = 99;
            this.alignmentSide = 0;
            this.hoursSinceLastConnection = 0;
            this.moodSmileyId = 0;
            this.accountId = 0;
            this.achievementPoints = 0;
            this.status = new PlayerStatus();
            _super.call(this);
        }
        GuildMember.prototype.getTypeId = function () {
            return GuildMember.ID;
        };
        GuildMember.prototype.reset = function () {
            this.breed = 0;
            this.sex = false;
            this.rank = 0;
            this.givenExperience = 0;
            this.experienceGivenPercent = 0;
            this.rights = 0;
            this.connected = 99;
            this.alignmentSide = 0;
            this.hoursSinceLastConnection = 0;
            this.moodSmileyId = 0;
            this.accountId = 0;
            this.achievementPoints = 0;
            this.status = new PlayerStatus();
        };
        GuildMember.prototype.serialize = function (param1) {
            this.serializeAs_GuildMember(param1);
        };
        GuildMember.prototype.serializeAs_GuildMember = function (param1) {
            _super.prototype.serializeAs_CharacterMinimalInformations.call(this, param1);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            if (this.rank < 0) {
                throw new Error('Forbidden value (' + this.rank + ') on element rank.');
            }
            param1.writeVarShort(this.rank);
            if (this.givenExperience < 0 || this.givenExperience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.givenExperience + ') on element givenExperience.');
            }
            param1.writeVarLong(this.givenExperience);
            if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
                throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element experienceGivenPercent.');
            }
            param1.writeByte(this.experienceGivenPercent);
            if (this.rights < 0) {
                throw new Error('Forbidden value (' + this.rights + ') on element rights.');
            }
            param1.writeVarInt(this.rights);
            param1.writeByte(this.connected);
            param1.writeByte(this.alignmentSide);
            if (this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535) {
                throw new Error('Forbidden value (' + this.hoursSinceLastConnection + ') on element hoursSinceLastConnection.');
            }
            param1.writeShort(this.hoursSinceLastConnection);
            if (this.moodSmileyId < 0) {
                throw new Error('Forbidden value (' + this.moodSmileyId + ') on element moodSmileyId.');
            }
            param1.writeVarShort(this.moodSmileyId);
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
            }
            param1.writeInt(this.accountId);
            param1.writeInt(this.achievementPoints);
            param1.writeShort(this.status.getTypeId());
            this.status.serialize(param1);
        };
        GuildMember.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildMember(param1);
        };
        GuildMember.prototype.deserializeAs_GuildMember = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
            this.rank = param1.readVarUhShort();
            if (this.rank < 0) {
                throw new Error('Forbidden value (' + this.rank + ') on element of GuildMember.rank.');
            }
            this.givenExperience = param1.readVarUhLong();
            if (this.givenExperience < 0 || this.givenExperience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.givenExperience + ') on element of GuildMember.givenExperience.');
            }
            this.experienceGivenPercent = param1.readByte();
            if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
                throw new Error('Forbidden value (' + this.experienceGivenPercent + ') on element of GuildMember.experienceGivenPercent.');
            }
            this.rights = param1.readVarUhInt();
            if (this.rights < 0) {
                throw new Error('Forbidden value (' + this.rights + ') on element of GuildMember.rights.');
            }
            this.connected = param1.readByte();
            if (this.connected < 0) {
                throw new Error('Forbidden value (' + this.connected + ') on element of GuildMember.connected.');
            }
            this.alignmentSide = param1.readByte();
            this.hoursSinceLastConnection = param1.readUnsignedShort();
            if (this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535) {
                throw new Error('Forbidden value (' + this.hoursSinceLastConnection + ') on element of GuildMember.hoursSinceLastConnection.');
            }
            this.moodSmileyId = param1.readVarUhShort();
            if (this.moodSmileyId < 0) {
                throw new Error('Forbidden value (' + this.moodSmileyId + ') on element of GuildMember.moodSmileyId.');
            }
            this.accountId = param1.readInt();
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element of GuildMember.accountId.');
            }
            this.achievementPoints = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
        };
        GuildMember.ID = 88;
        return GuildMember;
    })(CharacterMinimalInformations);
    Protocol.GuildMember = GuildMember;
    var AdditionalTaxCollectorInformations = (function () {
        function AdditionalTaxCollectorInformations() {
            this.collectorCallerName = '';
            this.date = 0;
        }
        AdditionalTaxCollectorInformations.prototype.getTypeId = function () {
            return AdditionalTaxCollectorInformations.ID;
        };
        AdditionalTaxCollectorInformations.prototype.reset = function () {
            this.collectorCallerName = '';
            this.date = 0;
        };
        AdditionalTaxCollectorInformations.prototype.serialize = function (param1) {
            this.serializeAs_AdditionalTaxCollectorInformations(param1);
        };
        AdditionalTaxCollectorInformations.prototype.serializeAs_AdditionalTaxCollectorInformations = function (param1) {
            param1.writeUTF(this.collectorCallerName);
            if (this.date < 0) {
                throw new Error('Forbidden value (' + this.date + ') on element date.');
            }
            param1.writeInt(this.date);
        };
        AdditionalTaxCollectorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AdditionalTaxCollectorInformations(param1);
        };
        AdditionalTaxCollectorInformations.prototype.deserializeAs_AdditionalTaxCollectorInformations = function (param1) {
            this.collectorCallerName = param1.readUTF();
            this.date = param1.readInt();
            if (this.date < 0) {
                throw new Error('Forbidden value (' + this.date + ') on element of AdditionalTaxCollectorInformations.date.');
            }
        };
        AdditionalTaxCollectorInformations.ID = 165;
        return AdditionalTaxCollectorInformations;
    })();
    Protocol.AdditionalTaxCollectorInformations = AdditionalTaxCollectorInformations;
    var TaxCollectorBasicInformations = (function () {
        function TaxCollectorBasicInformations() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }
        TaxCollectorBasicInformations.prototype.getTypeId = function () {
            return TaxCollectorBasicInformations.ID;
        };
        TaxCollectorBasicInformations.prototype.reset = function () {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        };
        TaxCollectorBasicInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorBasicInformations(param1);
        };
        TaxCollectorBasicInformations.prototype.serializeAs_TaxCollectorBasicInformations = function (param1) {
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
            }
            param1.writeVarShort(this.firstNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
        };
        TaxCollectorBasicInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorBasicInformations(param1);
        };
        TaxCollectorBasicInformations.prototype.deserializeAs_TaxCollectorBasicInformations = function (param1) {
            this.firstNameId = param1.readVarUhShort();
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element of TaxCollectorBasicInformations.firstNameId.');
            }
            this.lastNameId = param1.readVarUhShort();
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorBasicInformations.lastNameId.');
            }
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of TaxCollectorBasicInformations.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of TaxCollectorBasicInformations.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of TaxCollectorBasicInformations.subAreaId.');
            }
        };
        TaxCollectorBasicInformations.ID = 96;
        return TaxCollectorBasicInformations;
    })();
    Protocol.TaxCollectorBasicInformations = TaxCollectorBasicInformations;
    var TaxCollectorComplementaryInformations = (function () {
        function TaxCollectorComplementaryInformations() {
        }
        TaxCollectorComplementaryInformations.prototype.getTypeId = function () {
            return TaxCollectorComplementaryInformations.ID;
        };
        TaxCollectorComplementaryInformations.prototype.reset = function () {
        };
        TaxCollectorComplementaryInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorComplementaryInformations(param1);
        };
        TaxCollectorComplementaryInformations.prototype.serializeAs_TaxCollectorComplementaryInformations = function (param1) {
        };
        TaxCollectorComplementaryInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorComplementaryInformations(param1);
        };
        TaxCollectorComplementaryInformations.prototype.deserializeAs_TaxCollectorComplementaryInformations = function (param1) {
        };
        TaxCollectorComplementaryInformations.ID = 448;
        return TaxCollectorComplementaryInformations;
    })();
    Protocol.TaxCollectorComplementaryInformations = TaxCollectorComplementaryInformations;
    var TaxCollectorFightersInformation = (function () {
        function TaxCollectorFightersInformation() {
            this.collectorId = 0;
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        }
        TaxCollectorFightersInformation.prototype.getTypeId = function () {
            return TaxCollectorFightersInformation.ID;
        };
        TaxCollectorFightersInformation.prototype.reset = function () {
            this.collectorId = 0;
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        };
        TaxCollectorFightersInformation.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorFightersInformation(param1);
        };
        TaxCollectorFightersInformation.prototype.serializeAs_TaxCollectorFightersInformation = function (param1) {
            param1.writeInt(this.collectorId);
            param1.writeShort(this.allyCharactersInformations.length);
            var _loc2_ = 0;
            while (_loc2_ < this.allyCharactersInformations.length) {
                param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
                (this.allyCharactersInformations[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.enemyCharactersInformations.length);
            var _loc3_ = 0;
            while (_loc3_ < this.enemyCharactersInformations.length) {
                param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
                (this.enemyCharactersInformations[_loc3_]).serialize(param1);
                _loc3_++;
            }
        };
        TaxCollectorFightersInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorFightersInformation(param1);
        };
        TaxCollectorFightersInformation.prototype.deserializeAs_TaxCollectorFightersInformation = function (param1) {
            var _loc6_ = 0;
            var _loc7_ = null;
            var _loc8_ = 0;
            var _loc9_ = null;
            this.collectorId = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
                _loc7_.deserialize(param1);
                this.allyCharactersInformations.push(_loc7_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
                _loc9_.deserialize(param1);
                this.enemyCharactersInformations.push(_loc9_);
                _loc5_++;
            }
        };
        TaxCollectorFightersInformation.ID = 169;
        return TaxCollectorFightersInformation;
    })();
    Protocol.TaxCollectorFightersInformation = TaxCollectorFightersInformation;
    var TaxCollectorGuildInformations = (function (_super) {
        __extends(TaxCollectorGuildInformations, _super);
        function TaxCollectorGuildInformations() {
            this.guild = new BasicGuildInformations();
            _super.call(this);
        }
        TaxCollectorGuildInformations.prototype.getTypeId = function () {
            return TaxCollectorGuildInformations.ID;
        };
        TaxCollectorGuildInformations.prototype.reset = function () {
            this.guild = new BasicGuildInformations();
        };
        TaxCollectorGuildInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorGuildInformations(param1);
        };
        TaxCollectorGuildInformations.prototype.serializeAs_TaxCollectorGuildInformations = function (param1) {
            _super.prototype.serializeAs_TaxCollectorComplementaryInformations.call(this, param1);
            this.guild.serializeAs_BasicGuildInformations(param1);
        };
        TaxCollectorGuildInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorGuildInformations(param1);
        };
        TaxCollectorGuildInformations.prototype.deserializeAs_TaxCollectorGuildInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guild = new BasicGuildInformations();
            this.guild.deserialize(param1);
        };
        TaxCollectorGuildInformations.ID = 446;
        return TaxCollectorGuildInformations;
    })(TaxCollectorComplementaryInformations);
    Protocol.TaxCollectorGuildInformations = TaxCollectorGuildInformations;
    var TaxCollectorInformations = (function () {
        function TaxCollectorInformations() {
            this.uniqueId = 0;
            this.firtNameId = 0;
            this.lastNameId = 0;
            this.additionalInfos = new AdditionalTaxCollectorInformations();
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.state = 0;
            this.look = new EntityLook();
            this.complements = [];
        }
        TaxCollectorInformations.prototype.getTypeId = function () {
            return TaxCollectorInformations.ID;
        };
        TaxCollectorInformations.prototype.reset = function () {
            this.uniqueId = 0;
            this.firtNameId = 0;
            this.lastNameId = 0;
            this.additionalInfos = new AdditionalTaxCollectorInformations();
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.state = 0;
            this.look = new EntityLook();
            this.complements = [];
        };
        TaxCollectorInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorInformations(param1);
        };
        TaxCollectorInformations.prototype.serializeAs_TaxCollectorInformations = function (param1) {
            param1.writeInt(this.uniqueId);
            if (this.firtNameId < 0) {
                throw new Error('Forbidden value (' + this.firtNameId + ') on element firtNameId.');
            }
            param1.writeVarShort(this.firtNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);
            this.additionalInfos.serializeAs_AdditionalTaxCollectorInformations(param1);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeByte(this.state);
            this.look.serializeAs_EntityLook(param1);
            param1.writeShort(this.complements.length);
            var _loc2_ = 0;
            while (_loc2_ < this.complements.length) {
                param1.writeShort((this.complements[_loc2_]).getTypeId());
                (this.complements[_loc2_]).serialize(param1);
                _loc2_++;
            }
        };
        TaxCollectorInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorInformations(param1);
        };
        TaxCollectorInformations.prototype.deserializeAs_TaxCollectorInformations = function (param1) {
            var _loc4_ = 0;
            var _loc5_ = null;
            this.uniqueId = param1.readInt();
            this.firtNameId = param1.readVarUhShort();
            if (this.firtNameId < 0) {
                throw new Error('Forbidden value (' + this.firtNameId + ') on element of TaxCollectorInformations.firtNameId.');
            }
            this.lastNameId = param1.readVarUhShort();
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorInformations.lastNameId.');
            }
            this.additionalInfos = new AdditionalTaxCollectorInformations();
            this.additionalInfos.deserialize(param1);
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of TaxCollectorInformations.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of TaxCollectorInformations.worldY.');
            }
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of TaxCollectorInformations.subAreaId.');
            }
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of TaxCollectorInformations.state.');
            }
            this.look = new EntityLook();
            this.look.deserialize(param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = ProtocolTypeManager.getInstance(TaxCollectorComplementaryInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.complements.push(_loc5_);
                _loc3_++;
            }
        };
        TaxCollectorInformations.ID = 167;
        return TaxCollectorInformations;
    })();
    Protocol.TaxCollectorInformations = TaxCollectorInformations;
    var TaxCollectorLootInformations = (function (_super) {
        __extends(TaxCollectorLootInformations, _super);
        function TaxCollectorLootInformations() {
            this.kamas = 0;
            this.experience = 0;
            this.pods = 0;
            this.itemsValue = 0;
            _super.call(this);
        }
        TaxCollectorLootInformations.prototype.getTypeId = function () {
            return TaxCollectorLootInformations.ID;
        };
        TaxCollectorLootInformations.prototype.reset = function () {
            this.kamas = 0;
            this.experience = 0;
            this.pods = 0;
            this.itemsValue = 0;
        };
        TaxCollectorLootInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorLootInformations(param1);
        };
        TaxCollectorLootInformations.prototype.serializeAs_TaxCollectorLootInformations = function (param1) {
            _super.prototype.serializeAs_TaxCollectorComplementaryInformations.call(this, param1);
            if (this.kamas < 0) {
                throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
            }
            param1.writeVarInt(this.kamas);
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element experience.');
            }
            param1.writeVarLong(this.experience);
            if (this.pods < 0) {
                throw new Error('Forbidden value (' + this.pods + ') on element pods.');
            }
            param1.writeVarInt(this.pods);
            if (this.itemsValue < 0) {
                throw new Error('Forbidden value (' + this.itemsValue + ') on element itemsValue.');
            }
            param1.writeVarInt(this.itemsValue);
        };
        TaxCollectorLootInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorLootInformations(param1);
        };
        TaxCollectorLootInformations.prototype.deserializeAs_TaxCollectorLootInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.kamas = param1.readVarUhInt();
            if (this.kamas < 0) {
                throw new Error('Forbidden value (' + this.kamas + ') on element of TaxCollectorLootInformations.kamas.');
            }
            this.experience = param1.readVarUhLong();
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element of TaxCollectorLootInformations.experience.');
            }
            this.pods = param1.readVarUhInt();
            if (this.pods < 0) {
                throw new Error('Forbidden value (' + this.pods + ') on element of TaxCollectorLootInformations.pods.');
            }
            this.itemsValue = param1.readVarUhInt();
            if (this.itemsValue < 0) {
                throw new Error('Forbidden value (' + this.itemsValue + ') on element of TaxCollectorLootInformations.itemsValue.');
            }
        };
        TaxCollectorLootInformations.ID = 372;
        return TaxCollectorLootInformations;
    })(TaxCollectorComplementaryInformations);
    Protocol.TaxCollectorLootInformations = TaxCollectorLootInformations;
    var TaxCollectorWaitingForHelpInformations = (function (_super) {
        __extends(TaxCollectorWaitingForHelpInformations, _super);
        function TaxCollectorWaitingForHelpInformations() {
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            _super.call(this);
        }
        TaxCollectorWaitingForHelpInformations.prototype.getTypeId = function () {
            return TaxCollectorWaitingForHelpInformations.ID;
        };
        TaxCollectorWaitingForHelpInformations.prototype.reset = function () {
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        };
        TaxCollectorWaitingForHelpInformations.prototype.serialize = function (param1) {
            this.serializeAs_TaxCollectorWaitingForHelpInformations(param1);
        };
        TaxCollectorWaitingForHelpInformations.prototype.serializeAs_TaxCollectorWaitingForHelpInformations = function (param1) {
            _super.prototype.serializeAs_TaxCollectorComplementaryInformations.call(this, param1);
            this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
        };
        TaxCollectorWaitingForHelpInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_TaxCollectorWaitingForHelpInformations(param1);
        };
        TaxCollectorWaitingForHelpInformations.prototype.deserializeAs_TaxCollectorWaitingForHelpInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.waitingForHelpInfo.deserialize(param1);
        };
        TaxCollectorWaitingForHelpInformations.ID = 447;
        return TaxCollectorWaitingForHelpInformations;
    })(TaxCollectorComplementaryInformations);
    Protocol.TaxCollectorWaitingForHelpInformations = TaxCollectorWaitingForHelpInformations;
    var AccountHouseInformations = (function () {
        function AccountHouseInformations() {
            this.houseId = 0;
            this.modelId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }
        AccountHouseInformations.prototype.getTypeId = function () {
            return AccountHouseInformations.ID;
        };
        AccountHouseInformations.prototype.reset = function () {
            this.houseId = 0;
            this.modelId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        };
        AccountHouseInformations.prototype.serialize = function (param1) {
            this.serializeAs_AccountHouseInformations(param1);
        };
        AccountHouseInformations.prototype.serializeAs_AccountHouseInformations = function (param1) {
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
            }
            param1.writeVarInt(this.houseId);
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeVarShort(this.modelId);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
        };
        AccountHouseInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AccountHouseInformations(param1);
        };
        AccountHouseInformations.prototype.deserializeAs_AccountHouseInformations = function (param1) {
            this.houseId = param1.readVarUhInt();
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element of AccountHouseInformations.houseId.');
            }
            this.modelId = param1.readVarUhShort();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of AccountHouseInformations.modelId.');
            }
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of AccountHouseInformations.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of AccountHouseInformations.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of AccountHouseInformations.subAreaId.');
            }
        };
        AccountHouseInformations.ID = 390;
        return AccountHouseInformations;
    })();
    Protocol.AccountHouseInformations = AccountHouseInformations;
    var HouseInformations = (function () {
        function HouseInformations() {
            this.houseId = 0;
            this.doorsOnMap = [];
            this.ownerName = '';
            this.isOnSale = false;
            this.isSaleLocked = false;
            this.modelId = 0;
        }
        HouseInformations.prototype.getTypeId = function () {
            return HouseInformations.ID;
        };
        HouseInformations.prototype.reset = function () {
            this.houseId = 0;
            this.doorsOnMap = [];
            this.ownerName = '';
            this.isOnSale = false;
            this.isSaleLocked = false;
            this.modelId = 0;
        };
        HouseInformations.prototype.serialize = function (param1) {
            this.serializeAs_HouseInformations(param1);
        };
        HouseInformations.prototype.serializeAs_HouseInformations = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isOnSale);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isSaleLocked);
            param1.writeByte(_loc2_);
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
            }
            param1.writeVarInt(this.houseId);
            param1.writeShort(this.doorsOnMap.length);
            var _loc3_ = 0;
            while (_loc3_ < this.doorsOnMap.length) {
                if (this.doorsOnMap[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.doorsOnMap[_loc3_] + ') on element 2 (starting at 1) of doorsOnMap.');
                }
                param1.writeInt(this.doorsOnMap[_loc3_]);
                _loc3_++;
            }
            param1.writeUTF(this.ownerName);
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeVarShort(this.modelId);
        };
        HouseInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_HouseInformations(param1);
        };
        HouseInformations.prototype.deserializeAs_HouseInformations = function (param1) {
            var _loc5_ = 0;
            var _loc2_ = param1.readByte();
            this.isOnSale = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.isSaleLocked = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.houseId = param1.readVarUhInt();
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformations.houseId.');
            }
            var _loc3_ = param1.readUnsignedShort();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = param1.readInt();
                if (_loc5_ < 0) {
                    throw new Error('Forbidden value (' + _loc5_ + ') on elements of doorsOnMap.');
                }
                this.doorsOnMap.push(_loc5_);
                _loc4_++;
            }
            this.ownerName = param1.readUTF();
            this.modelId = param1.readVarUhShort();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformations.modelId.');
            }
        };
        HouseInformations.ID = 111;
        return HouseInformations;
    })();
    Protocol.HouseInformations = HouseInformations;
    var HouseInformationsExtended = (function (_super) {
        __extends(HouseInformationsExtended, _super);
        function HouseInformationsExtended() {
            this.guildInfo = new GuildInformations();
            _super.call(this);
        }
        HouseInformationsExtended.prototype.getTypeId = function () {
            return HouseInformationsExtended.ID;
        };
        HouseInformationsExtended.prototype.reset = function () {
            this.guildInfo = new GuildInformations();
        };
        HouseInformationsExtended.prototype.serialize = function (param1) {
            this.serializeAs_HouseInformationsExtended(param1);
        };
        HouseInformationsExtended.prototype.serializeAs_HouseInformationsExtended = function (param1) {
            _super.prototype.serializeAs_HouseInformations.call(this, param1);
            this.guildInfo.serializeAs_GuildInformations(param1);
        };
        HouseInformationsExtended.prototype.deserialize = function (param1) {
            this.deserializeAs_HouseInformationsExtended(param1);
        };
        HouseInformationsExtended.prototype.deserializeAs_HouseInformationsExtended = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guildInfo = new GuildInformations();
            this.guildInfo.deserialize(param1);
        };
        HouseInformationsExtended.ID = 112;
        return HouseInformationsExtended;
    })(HouseInformations);
    Protocol.HouseInformationsExtended = HouseInformationsExtended;
    var HouseInformationsForGuild = (function () {
        function HouseInformationsForGuild() {
            this.houseId = 0;
            this.modelId = 0;
            this.ownerName = '';
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.skillListIds = [];
            this.guildshareParams = 0;
        }
        HouseInformationsForGuild.prototype.getTypeId = function () {
            return HouseInformationsForGuild.ID;
        };
        HouseInformationsForGuild.prototype.reset = function () {
            this.houseId = 0;
            this.modelId = 0;
            this.ownerName = '';
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.skillListIds = [];
            this.guildshareParams = 0;
        };
        HouseInformationsForGuild.prototype.serialize = function (param1) {
            this.serializeAs_HouseInformationsForGuild(param1);
        };
        HouseInformationsForGuild.prototype.serializeAs_HouseInformationsForGuild = function (param1) {
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
            }
            param1.writeVarInt(this.houseId);
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeVarInt(this.modelId);
            param1.writeUTF(this.ownerName);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeShort(this.skillListIds.length);
            var _loc2_ = 0;
            while (_loc2_ < this.skillListIds.length) {
                param1.writeInt(this.skillListIds[_loc2_]);
                _loc2_++;
            }
            if (this.guildshareParams < 0) {
                throw new Error('Forbidden value (' + this.guildshareParams + ') on element guildshareParams.');
            }
            param1.writeVarInt(this.guildshareParams);
        };
        HouseInformationsForGuild.prototype.deserialize = function (param1) {
            this.deserializeAs_HouseInformationsForGuild(param1);
        };
        HouseInformationsForGuild.prototype.deserializeAs_HouseInformationsForGuild = function (param1) {
            var _loc4_ = 0;
            this.houseId = param1.readVarUhInt();
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformationsForGuild.houseId.');
            }
            this.modelId = param1.readVarUhInt();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformationsForGuild.modelId.');
            }
            this.ownerName = param1.readUTF();
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of HouseInformationsForGuild.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of HouseInformationsForGuild.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of HouseInformationsForGuild.subAreaId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.skillListIds.push(_loc4_);
                _loc3_++;
            }
            this.guildshareParams = param1.readVarUhInt();
            if (this.guildshareParams < 0) {
                throw new Error('Forbidden value (' + this.guildshareParams + ') on element of HouseInformationsForGuild.guildshareParams.');
            }
        };
        HouseInformationsForGuild.ID = 170;
        return HouseInformationsForGuild;
    })();
    Protocol.HouseInformationsForGuild = HouseInformationsForGuild;
    var HouseInformationsForSell = (function () {
        function HouseInformationsForSell() {
            this.modelId = 0;
            this.ownerName = '';
            this.ownerConnected = false;
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.nbRoom = 0;
            this.nbChest = 0;
            this.skillListIds = [];
            this.isLocked = false;
            this.price = 0;
        }
        HouseInformationsForSell.prototype.getTypeId = function () {
            return HouseInformationsForSell.ID;
        };
        HouseInformationsForSell.prototype.reset = function () {
            this.modelId = 0;
            this.ownerName = '';
            this.ownerConnected = false;
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.nbRoom = 0;
            this.nbChest = 0;
            this.skillListIds = [];
            this.isLocked = false;
            this.price = 0;
        };
        HouseInformationsForSell.prototype.serialize = function (param1) {
            this.serializeAs_HouseInformationsForSell(param1);
        };
        HouseInformationsForSell.prototype.serializeAs_HouseInformationsForSell = function (param1) {
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeVarInt(this.modelId);
            param1.writeUTF(this.ownerName);
            param1.writeBoolean(this.ownerConnected);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeByte(this.nbRoom);
            param1.writeByte(this.nbChest);
            param1.writeShort(this.skillListIds.length);
            var _loc2_ = 0;
            while (_loc2_ < this.skillListIds.length) {
                param1.writeInt(this.skillListIds[_loc2_]);
                _loc2_++;
            }
            param1.writeBoolean(this.isLocked);
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element price.');
            }
            param1.writeVarInt(this.price);
        };
        HouseInformationsForSell.prototype.deserialize = function (param1) {
            this.deserializeAs_HouseInformationsForSell(param1);
        };
        HouseInformationsForSell.prototype.deserializeAs_HouseInformationsForSell = function (param1) {
            var _loc4_ = 0;
            this.modelId = param1.readVarUhInt();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformationsForSell.modelId.');
            }
            this.ownerName = param1.readUTF();
            this.ownerConnected = param1.readBoolean();
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of HouseInformationsForSell.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of HouseInformationsForSell.worldY.');
            }
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of HouseInformationsForSell.subAreaId.');
            }
            this.nbRoom = param1.readByte();
            this.nbChest = param1.readByte();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.skillListIds.push(_loc4_);
                _loc3_++;
            }
            this.isLocked = param1.readBoolean();
            this.price = param1.readVarUhInt();
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element of HouseInformationsForSell.price.');
            }
        };
        HouseInformationsForSell.ID = 221;
        return HouseInformationsForSell;
    })();
    Protocol.HouseInformationsForSell = HouseInformationsForSell;
    var HouseInformationsInside = (function () {
        function HouseInformationsInside() {
            this.houseId = 0;
            this.modelId = 0;
            this.ownerId = 0;
            this.ownerName = '';
            this.worldX = 0;
            this.worldY = 0;
            this.price = 0;
            this.isLocked = false;
        }
        HouseInformationsInside.prototype.getTypeId = function () {
            return HouseInformationsInside.ID;
        };
        HouseInformationsInside.prototype.reset = function () {
            this.houseId = 0;
            this.modelId = 0;
            this.ownerId = 0;
            this.ownerName = '';
            this.worldX = 0;
            this.worldY = 0;
            this.price = 0;
            this.isLocked = false;
        };
        HouseInformationsInside.prototype.serialize = function (param1) {
            this.serializeAs_HouseInformationsInside(param1);
        };
        HouseInformationsInside.prototype.serializeAs_HouseInformationsInside = function (param1) {
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
            }
            param1.writeVarInt(this.houseId);
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeVarShort(this.modelId);
            param1.writeInt(this.ownerId);
            param1.writeUTF(this.ownerName);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element price.');
            }
            param1.writeInt(this.price);
            param1.writeBoolean(this.isLocked);
        };
        HouseInformationsInside.prototype.deserialize = function (param1) {
            this.deserializeAs_HouseInformationsInside(param1);
        };
        HouseInformationsInside.prototype.deserializeAs_HouseInformationsInside = function (param1) {
            this.houseId = param1.readVarUhInt();
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformationsInside.houseId.');
            }
            this.modelId = param1.readVarUhShort();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of HouseInformationsInside.modelId.');
            }
            this.ownerId = param1.readInt();
            this.ownerName = param1.readUTF();
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of HouseInformationsInside.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of HouseInformationsInside.worldY.');
            }
            this.price = param1.readInt();
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element of HouseInformationsInside.price.');
            }
            this.isLocked = param1.readBoolean();
        };
        HouseInformationsInside.ID = 218;
        return HouseInformationsInside;
    })();
    Protocol.HouseInformationsInside = HouseInformationsInside;
    var Idol = (function () {
        function Idol() {
            this.id = 0;
            this.xpBonusPercent = 0;
            this.dropBonusPercent = 0;
        }
        Idol.prototype.getTypeId = function () {
            return Idol.ID;
        };
        Idol.prototype.reset = function () {
            this.id = 0;
            this.xpBonusPercent = 0;
            this.dropBonusPercent = 0;
        };
        Idol.prototype.serialize = function (param1) {
            this.serializeAs_Idol(param1);
        };
        Idol.prototype.serializeAs_Idol = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);
            if (this.xpBonusPercent < 0) {
                throw new Error('Forbidden value (' + this.xpBonusPercent + ') on element xpBonusPercent.');
            }
            param1.writeVarShort(this.xpBonusPercent);
            if (this.dropBonusPercent < 0) {
                throw new Error('Forbidden value (' + this.dropBonusPercent + ') on element dropBonusPercent.');
            }
            param1.writeVarShort(this.dropBonusPercent);
        };
        Idol.prototype.deserialize = function (param1) {
            this.deserializeAs_Idol(param1);
        };
        Idol.prototype.deserializeAs_Idol = function (param1) {
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of Idol.id.');
            }
            this.xpBonusPercent = param1.readVarUhShort();
            if (this.xpBonusPercent < 0) {
                throw new Error('Forbidden value (' + this.xpBonusPercent + ') on element of Idol.xpBonusPercent.');
            }
            this.dropBonusPercent = param1.readVarUhShort();
            if (this.dropBonusPercent < 0) {
                throw new Error('Forbidden value (' + this.dropBonusPercent + ') on element of Idol.dropBonusPercent.');
            }
        };
        Idol.ID = 489;
        return Idol;
    })();
    Protocol.Idol = Idol;
    var PartyIdol = (function (_super) {
        __extends(PartyIdol, _super);
        function PartyIdol() {
            this.ownersIds = [];
            _super.call(this);
        }
        PartyIdol.prototype.getTypeId = function () {
            return PartyIdol.ID;
        };
        PartyIdol.prototype.reset = function () {
            this.ownersIds = [];
        };
        PartyIdol.prototype.serialize = function (param1) {
            this.serializeAs_PartyIdol(param1);
        };
        PartyIdol.prototype.serializeAs_PartyIdol = function (param1) {
            _super.prototype.serializeAs_Idol.call(this, param1);
            param1.writeShort(this.ownersIds.length);
            var _loc2_ = 0;
            while (_loc2_ < this.ownersIds.length) {
                param1.writeInt(this.ownersIds[_loc2_]);
                _loc2_++;
            }
        };
        PartyIdol.prototype.deserialize = function (param1) {
            this.deserializeAs_PartyIdol(param1);
        };
        PartyIdol.prototype.deserializeAs_PartyIdol = function (param1) {
            var _loc4_ = 0;
            _super.prototype.deserialize.call(this, param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.ownersIds.push(_loc4_);
                _loc3_++;
            }
        };
        PartyIdol.ID = 490;
        return PartyIdol;
    })(Idol);
    Protocol.PartyIdol = PartyIdol;
    var InteractiveElement = (function () {
        function InteractiveElement() {
            this.elementId = 0;
            this.elementTypeId = 0;
            this.enabledSkills = [];
            this.disabledSkills = [];
        }
        InteractiveElement.prototype.getTypeId = function () {
            return InteractiveElement.ID;
        };
        InteractiveElement.prototype.reset = function () {
            this.elementId = 0;
            this.elementTypeId = 0;
            this.enabledSkills = [];
            this.disabledSkills = [];
        };
        InteractiveElement.prototype.serialize = function (param1) {
            this.serializeAs_InteractiveElement(param1);
        };
        InteractiveElement.prototype.serializeAs_InteractiveElement = function (param1) {
            if (this.elementId < 0) {
                throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
            }
            param1.writeInt(this.elementId);
            param1.writeInt(this.elementTypeId);
            param1.writeShort(this.enabledSkills.length);
            var _loc2_ = 0;
            while (_loc2_ < this.enabledSkills.length) {
                param1.writeShort((this.enabledSkills[_loc2_]).getTypeId());
                (this.enabledSkills[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.disabledSkills.length);
            var _loc3_ = 0;
            while (_loc3_ < this.disabledSkills.length) {
                param1.writeShort((this.disabledSkills[_loc3_]).getTypeId());
                (this.disabledSkills[_loc3_]).serialize(param1);
                _loc3_++;
            }
        };
        InteractiveElement.prototype.deserialize = function (param1) {
            this.deserializeAs_InteractiveElement(param1);
        };
        InteractiveElement.prototype.deserializeAs_InteractiveElement = function (param1) {
            var _loc6_ = 0;
            var _loc7_ = null;
            var _loc8_ = 0;
            var _loc9_ = null;
            this.elementId = param1.readInt();
            if (this.elementId < 0) {
                throw new Error('Forbidden value (' + this.elementId + ') on element of InteractiveElement.elementId.');
            }
            this.elementTypeId = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc6_);
                _loc7_.deserialize(param1);
                this.enabledSkills.push(_loc7_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc8_);
                _loc9_.deserialize(param1);
                this.disabledSkills.push(_loc9_);
                _loc5_++;
            }
        };
        InteractiveElement.ID = 80;
        return InteractiveElement;
    })();
    Protocol.InteractiveElement = InteractiveElement;
    var InteractiveElementNamedSkill = (function (_super) {
        __extends(InteractiveElementNamedSkill, _super);
        function InteractiveElementNamedSkill() {
            this.nameId = 0;
            _super.call(this);
        }
        InteractiveElementNamedSkill.prototype.getTypeId = function () {
            return InteractiveElementNamedSkill.ID;
        };
        InteractiveElementNamedSkill.prototype.reset = function () {
            this.nameId = 0;
        };
        InteractiveElementNamedSkill.prototype.serialize = function (param1) {
            this.serializeAs_InteractiveElementNamedSkill(param1);
        };
        InteractiveElementNamedSkill.prototype.serializeAs_InteractiveElementNamedSkill = function (param1) {
            _super.prototype.serializeAs_InteractiveElementSkill.call(this, param1);
            if (this.nameId < 0) {
                throw new Error('Forbidden value (' + this.nameId + ') on element nameId.');
            }
            param1.writeVarInt(this.nameId);
        };
        InteractiveElementNamedSkill.prototype.deserialize = function (param1) {
            this.deserializeAs_InteractiveElementNamedSkill(param1);
        };
        InteractiveElementNamedSkill.prototype.deserializeAs_InteractiveElementNamedSkill = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.nameId = param1.readVarUhInt();
            if (this.nameId < 0) {
                throw new Error('Forbidden value (' + this.nameId + ') on element of InteractiveElementNamedSkill.nameId.');
            }
        };
        InteractiveElementNamedSkill.ID = 220;
        return InteractiveElementNamedSkill;
    })(InteractiveElementSkill);
    Protocol.InteractiveElementNamedSkill = InteractiveElementNamedSkill;
    var InteractiveElementSkill = (function () {
        function InteractiveElementSkill() {
            this.skillId = 0;
            this.skillInstanceUid = 0;
        }
        InteractiveElementSkill.prototype.getTypeId = function () {
            return InteractiveElementSkill.ID;
        };
        InteractiveElementSkill.prototype.reset = function () {
            this.skillId = 0;
            this.skillInstanceUid = 0;
        };
        InteractiveElementSkill.prototype.serialize = function (param1) {
            this.serializeAs_InteractiveElementSkill(param1);
        };
        InteractiveElementSkill.prototype.serializeAs_InteractiveElementSkill = function (param1) {
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
            }
            param1.writeVarInt(this.skillId);
            if (this.skillInstanceUid < 0) {
                throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element skillInstanceUid.');
            }
            param1.writeInt(this.skillInstanceUid);
        };
        InteractiveElementSkill.prototype.deserialize = function (param1) {
            this.deserializeAs_InteractiveElementSkill(param1);
        };
        InteractiveElementSkill.prototype.deserializeAs_InteractiveElementSkill = function (param1) {
            this.skillId = param1.readVarUhInt();
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveElementSkill.skillId.');
            }
            this.skillInstanceUid = param1.readInt();
            if (this.skillInstanceUid < 0) {
                throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element of InteractiveElementSkill.skillInstanceUid.');
            }
        };
        InteractiveElementSkill.ID = 219;
        return InteractiveElementSkill;
    })();
    Protocol.InteractiveElementSkill = InteractiveElementSkill;
    var InteractiveElementWithAgeBonus = (function (_super) {
        __extends(InteractiveElementWithAgeBonus, _super);
        function InteractiveElementWithAgeBonus() {
            this.ageBonus = 0;
            _super.call(this);
        }
        InteractiveElementWithAgeBonus.prototype.getTypeId = function () {
            return InteractiveElementWithAgeBonus.ID;
        };
        InteractiveElementWithAgeBonus.prototype.reset = function () {
            this.ageBonus = 0;
        };
        InteractiveElementWithAgeBonus.prototype.serialize = function (param1) {
            this.serializeAs_InteractiveElementWithAgeBonus(param1);
        };
        InteractiveElementWithAgeBonus.prototype.serializeAs_InteractiveElementWithAgeBonus = function (param1) {
            _super.prototype.serializeAs_InteractiveElement.call(this, param1);
            if (this.ageBonus < -1 || this.ageBonus > 1000) {
                throw new Error('Forbidden value (' + this.ageBonus + ') on element ageBonus.');
            }
            param1.writeShort(this.ageBonus);
        };
        InteractiveElementWithAgeBonus.prototype.deserialize = function (param1) {
            this.deserializeAs_InteractiveElementWithAgeBonus(param1);
        };
        InteractiveElementWithAgeBonus.prototype.deserializeAs_InteractiveElementWithAgeBonus = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.ageBonus = param1.readShort();
            if (this.ageBonus < -1 || this.ageBonus > 1000) {
                throw new Error('Forbidden value (' + this.ageBonus + ') on element of InteractiveElementWithAgeBonus.ageBonus.');
            }
        };
        InteractiveElementWithAgeBonus.ID = 398;
        return InteractiveElementWithAgeBonus;
    })(InteractiveElement);
    Protocol.InteractiveElementWithAgeBonus = InteractiveElementWithAgeBonus;
    var MapObstacle = (function () {
        function MapObstacle() {
            this.obstacleCellId = 0;
            this.state = 0;
        }
        MapObstacle.prototype.getTypeId = function () {
            return MapObstacle.ID;
        };
        MapObstacle.prototype.reset = function () {
            this.obstacleCellId = 0;
            this.state = 0;
        };
        MapObstacle.prototype.serialize = function (param1) {
            this.serializeAs_MapObstacle(param1);
        };
        MapObstacle.prototype.serializeAs_MapObstacle = function (param1) {
            if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
                throw new Error('Forbidden value (' + this.obstacleCellId + ') on element obstacleCellId.');
            }
            param1.writeVarShort(this.obstacleCellId);
            param1.writeByte(this.state);
        };
        MapObstacle.prototype.deserialize = function (param1) {
            this.deserializeAs_MapObstacle(param1);
        };
        MapObstacle.prototype.deserializeAs_MapObstacle = function (param1) {
            this.obstacleCellId = param1.readVarUhShort();
            if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
                throw new Error('Forbidden value (' + this.obstacleCellId + ') on element of MapObstacle.obstacleCellId.');
            }
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of MapObstacle.state.');
            }
        };
        MapObstacle.ID = 200;
        return MapObstacle;
    })();
    Protocol.MapObstacle = MapObstacle;
    var StatedElement = (function () {
        function StatedElement() {
            this.elementId = 0;
            this.elementCellId = 0;
            this.elementState = 0;
        }
        StatedElement.prototype.getTypeId = function () {
            return StatedElement.ID;
        };
        StatedElement.prototype.reset = function () {
            this.elementId = 0;
            this.elementCellId = 0;
            this.elementState = 0;
        };
        StatedElement.prototype.serialize = function (param1) {
            this.serializeAs_StatedElement(param1);
        };
        StatedElement.prototype.serializeAs_StatedElement = function (param1) {
            if (this.elementId < 0) {
                throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
            }
            param1.writeInt(this.elementId);
            if (this.elementCellId < 0 || this.elementCellId > 559) {
                throw new Error('Forbidden value (' + this.elementCellId + ') on element elementCellId.');
            }
            param1.writeVarShort(this.elementCellId);
            if (this.elementState < 0) {
                throw new Error('Forbidden value (' + this.elementState + ') on element elementState.');
            }
            param1.writeVarInt(this.elementState);
        };
        StatedElement.prototype.deserialize = function (param1) {
            this.deserializeAs_StatedElement(param1);
        };
        StatedElement.prototype.deserializeAs_StatedElement = function (param1) {
            this.elementId = param1.readInt();
            if (this.elementId < 0) {
                throw new Error('Forbidden value (' + this.elementId + ') on element of StatedElement.elementId.');
            }
            this.elementCellId = param1.readVarUhShort();
            if (this.elementCellId < 0 || this.elementCellId > 559) {
                throw new Error('Forbidden value (' + this.elementCellId + ') on element of StatedElement.elementCellId.');
            }
            this.elementState = param1.readVarUhInt();
            if (this.elementState < 0) {
                throw new Error('Forbidden value (' + this.elementState + ') on element of StatedElement.elementState.');
            }
        };
        StatedElement.ID = 108;
        return StatedElement;
    })();
    Protocol.StatedElement = StatedElement;
    var SkillActionDescription = (function () {
        function SkillActionDescription() {
            this.skillId = 0;
        }
        SkillActionDescription.prototype.getTypeId = function () {
            return SkillActionDescription.ID;
        };
        SkillActionDescription.prototype.reset = function () {
            this.skillId = 0;
        };
        SkillActionDescription.prototype.serialize = function (param1) {
            this.serializeAs_SkillActionDescription(param1);
        };
        SkillActionDescription.prototype.serializeAs_SkillActionDescription = function (param1) {
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
            }
            param1.writeVarShort(this.skillId);
        };
        SkillActionDescription.prototype.deserialize = function (param1) {
            this.deserializeAs_SkillActionDescription(param1);
        };
        SkillActionDescription.prototype.deserializeAs_SkillActionDescription = function (param1) {
            this.skillId = param1.readVarUhShort();
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element of SkillActionDescription.skillId.');
            }
        };
        SkillActionDescription.ID = 102;
        return SkillActionDescription;
    })();
    Protocol.SkillActionDescription = SkillActionDescription;
    var SkillActionDescriptionCollect = (function (_super) {
        __extends(SkillActionDescriptionCollect, _super);
        function SkillActionDescriptionCollect() {
            this.min = 0;
            this.max = 0;
            _super.call(this);
        }
        SkillActionDescriptionCollect.prototype.getTypeId = function () {
            return SkillActionDescriptionCollect.ID;
        };
        SkillActionDescriptionCollect.prototype.reset = function () {
            this.min = 0;
            this.max = 0;
        };
        SkillActionDescriptionCollect.prototype.serialize = function (param1) {
            this.serializeAs_SkillActionDescriptionCollect(param1);
        };
        SkillActionDescriptionCollect.prototype.serializeAs_SkillActionDescriptionCollect = function (param1) {
            _super.prototype.serializeAs_SkillActionDescriptionTimed.call(this, param1);
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element min.');
            }
            param1.writeVarShort(this.min);
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element max.');
            }
            param1.writeVarShort(this.max);
        };
        SkillActionDescriptionCollect.prototype.deserialize = function (param1) {
            this.deserializeAs_SkillActionDescriptionCollect(param1);
        };
        SkillActionDescriptionCollect.prototype.deserializeAs_SkillActionDescriptionCollect = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.min = param1.readVarUhShort();
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element of SkillActionDescriptionCollect.min.');
            }
            this.max = param1.readVarUhShort();
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element of SkillActionDescriptionCollect.max.');
            }
        };
        SkillActionDescriptionCollect.ID = 99;
        return SkillActionDescriptionCollect;
    })(SkillActionDescriptionTimed);
    Protocol.SkillActionDescriptionCollect = SkillActionDescriptionCollect;
    var SkillActionDescriptionCraft = (function (_super) {
        __extends(SkillActionDescriptionCraft, _super);
        function SkillActionDescriptionCraft() {
            this.probability = 0;
            _super.call(this);
        }
        SkillActionDescriptionCraft.prototype.getTypeId = function () {
            return SkillActionDescriptionCraft.ID;
        };
        SkillActionDescriptionCraft.prototype.reset = function () {
            this.probability = 0;
        };
        SkillActionDescriptionCraft.prototype.serialize = function (param1) {
            this.serializeAs_SkillActionDescriptionCraft(param1);
        };
        SkillActionDescriptionCraft.prototype.serializeAs_SkillActionDescriptionCraft = function (param1) {
            _super.prototype.serializeAs_SkillActionDescription.call(this, param1);
            if (this.probability < 0) {
                throw new Error('Forbidden value (' + this.probability + ') on element probability.');
            }
            param1.writeByte(this.probability);
        };
        SkillActionDescriptionCraft.prototype.deserialize = function (param1) {
            this.deserializeAs_SkillActionDescriptionCraft(param1);
        };
        SkillActionDescriptionCraft.prototype.deserializeAs_SkillActionDescriptionCraft = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.probability = param1.readByte();
            if (this.probability < 0) {
                throw new Error('Forbidden value (' + this.probability + ') on element of SkillActionDescriptionCraft.probability.');
            }
        };
        SkillActionDescriptionCraft.ID = 100;
        return SkillActionDescriptionCraft;
    })(SkillActionDescription);
    Protocol.SkillActionDescriptionCraft = SkillActionDescriptionCraft;
    var SkillActionDescriptionTimed = (function (_super) {
        __extends(SkillActionDescriptionTimed, _super);
        function SkillActionDescriptionTimed() {
            this.time = 0;
            _super.call(this);
        }
        SkillActionDescriptionTimed.prototype.getTypeId = function () {
            return SkillActionDescriptionTimed.ID;
        };
        SkillActionDescriptionTimed.prototype.reset = function () {
            this.time = 0;
        };
        SkillActionDescriptionTimed.prototype.serialize = function (param1) {
            this.serializeAs_SkillActionDescriptionTimed(param1);
        };
        SkillActionDescriptionTimed.prototype.serializeAs_SkillActionDescriptionTimed = function (param1) {
            _super.prototype.serializeAs_SkillActionDescription.call(this, param1);
            if (this.time < 0 || this.time > 255) {
                throw new Error('Forbidden value (' + this.time + ') on element time.');
            }
            param1.writeByte(this.time);
        };
        SkillActionDescriptionTimed.prototype.deserialize = function (param1) {
            this.deserializeAs_SkillActionDescriptionTimed(param1);
        };
        SkillActionDescriptionTimed.prototype.deserializeAs_SkillActionDescriptionTimed = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.time = param1.readUnsignedByte();
            if (this.time < 0 || this.time > 255) {
                throw new Error('Forbidden value (' + this.time + ') on element of SkillActionDescriptionTimed.time.');
            }
        };
        SkillActionDescriptionTimed.ID = 103;
        return SkillActionDescriptionTimed;
    })(SkillActionDescription);
    Protocol.SkillActionDescriptionTimed = SkillActionDescriptionTimed;
    var IdolsPreset = (function () {
        function IdolsPreset() {
            this.presetId = 0;
            this.symbolId = 0;
            this.idolId = [];
        }
        IdolsPreset.prototype.getTypeId = function () {
            return IdolsPreset.ID;
        };
        IdolsPreset.prototype.reset = function () {
            this.presetId = 0;
            this.symbolId = 0;
            this.idolId = [];
        };
        IdolsPreset.prototype.serialize = function (param1) {
            this.serializeAs_IdolsPreset(param1);
        };
        IdolsPreset.prototype.serializeAs_IdolsPreset = function (param1) {
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
            }
            param1.writeByte(this.presetId);
            if (this.symbolId < 0) {
                throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
            }
            param1.writeByte(this.symbolId);
            param1.writeShort(this.idolId.length);
            var _loc2_ = 0;
            while (_loc2_ < this.idolId.length) {
                if (this.idolId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.idolId[_loc2_] + ') on element 3 (starting at 1) of idolId.');
                }
                param1.writeVarShort(this.idolId[_loc2_]);
                _loc2_++;
            }
        };
        IdolsPreset.prototype.deserialize = function (param1) {
            this.deserializeAs_IdolsPreset(param1);
        };
        IdolsPreset.prototype.deserializeAs_IdolsPreset = function (param1) {
            var _loc4_ = 0;
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPreset.presetId.');
            }
            this.symbolId = param1.readByte();
            if (this.symbolId < 0) {
                throw new Error('Forbidden value (' + this.symbolId + ') on element of IdolsPreset.symbolId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of idolId.');
                }
                this.idolId.push(_loc4_);
                _loc3_++;
            }
        };
        IdolsPreset.ID = 491;
        return IdolsPreset;
    })();
    Protocol.IdolsPreset = IdolsPreset;
    var Preset = (function () {
        function Preset() {
            this.presetId = 0;
            this.symbolId = 0;
            this.mount = false;
            this.objects = [];
        }
        Preset.prototype.getTypeId = function () {
            return Preset.ID;
        };
        Preset.prototype.reset = function () {
            this.presetId = 0;
            this.symbolId = 0;
            this.mount = false;
            this.objects = [];
        };
        Preset.prototype.serialize = function (param1) {
            this.serializeAs_Preset(param1);
        };
        Preset.prototype.serializeAs_Preset = function (param1) {
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
            }
            param1.writeByte(this.presetId);
            if (this.symbolId < 0) {
                throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
            }
            param1.writeByte(this.symbolId);
            param1.writeBoolean(this.mount);
            param1.writeShort(this.objects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.objects.length) {
                (this.objects[_loc2_]).serializeAs_PresetItem(param1);
                _loc2_++;
            }
        };
        Preset.prototype.deserialize = function (param1) {
            this.deserializeAs_Preset(param1);
        };
        Preset.prototype.deserializeAs_Preset = function (param1) {
            var _loc4_ = null;
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of Preset.presetId.');
            }
            this.symbolId = param1.readByte();
            if (this.symbolId < 0) {
                throw new Error('Forbidden value (' + this.symbolId + ') on element of Preset.symbolId.');
            }
            this.mount = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new PresetItem();
                _loc4_.deserialize(param1);
                this.objects.push(_loc4_);
                _loc3_++;
            }
        };
        Preset.ID = 355;
        return Preset;
    })();
    Protocol.Preset = Preset;
    var PresetItem = (function () {
        function PresetItem() {
            this.position = 63;
            this.objGid = 0;
            this.objUid = 0;
        }
        PresetItem.prototype.getTypeId = function () {
            return PresetItem.ID;
        };
        PresetItem.prototype.reset = function () {
            this.position = 63;
            this.objGid = 0;
            this.objUid = 0;
        };
        PresetItem.prototype.serialize = function (param1) {
            this.serializeAs_PresetItem(param1);
        };
        PresetItem.prototype.serializeAs_PresetItem = function (param1) {
            param1.writeByte(this.position);
            if (this.objGid < 0) {
                throw new Error('Forbidden value (' + this.objGid + ') on element objGid.');
            }
            param1.writeVarShort(this.objGid);
            if (this.objUid < 0) {
                throw new Error('Forbidden value (' + this.objUid + ') on element objUid.');
            }
            param1.writeVarInt(this.objUid);
        };
        PresetItem.prototype.deserialize = function (param1) {
            this.deserializeAs_PresetItem(param1);
        };
        PresetItem.prototype.deserializeAs_PresetItem = function (param1) {
            this.position = param1.readUnsignedByte();
            if (this.position < 0 || this.position > 255) {
                throw new Error('Forbidden value (' + this.position + ') on element of PresetItem.position.');
            }
            this.objGid = param1.readVarUhShort();
            if (this.objGid < 0) {
                throw new Error('Forbidden value (' + this.objGid + ') on element of PresetItem.objGid.');
            }
            this.objUid = param1.readVarUhInt();
            if (this.objUid < 0) {
                throw new Error('Forbidden value (' + this.objUid + ') on element of PresetItem.objUid.');
            }
        };
        PresetItem.ID = 354;
        return PresetItem;
    })();
    Protocol.PresetItem = PresetItem;
    var EntityLook = (function () {
        function EntityLook() {
            this.bonesId = 0;
            this.skins = [];
            this.indexedColors = [];
            this.scales = [];
            this.subentities = [];
        }
        EntityLook.prototype.getTypeId = function () {
            return EntityLook.ID;
        };
        EntityLook.prototype.reset = function () {
            this.bonesId = 0;
            this.skins = [];
            this.indexedColors = [];
            this.scales = [];
            this.subentities = [];
        };
        EntityLook.prototype.serialize = function (param1) {
            this.serializeAs_EntityLook(param1);
        };
        EntityLook.prototype.serializeAs_EntityLook = function (param1) {
            if (this.bonesId < 0) {
                throw new Error('Forbidden value (' + this.bonesId + ') on element bonesId.');
            }
            param1.writeVarShort(this.bonesId);
            param1.writeShort(this.skins.length);
            var _loc2_ = 0;
            while (_loc2_ < this.skins.length) {
                if (this.skins[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.skins[_loc2_] + ') on element 2 (starting at 1) of skins.');
                }
                param1.writeVarShort(this.skins[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.indexedColors.length);
            var _loc3_ = 0;
            while (_loc3_ < this.indexedColors.length) {
                param1.writeInt(this.indexedColors[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.scales.length);
            var _loc4_ = 0;
            while (_loc4_ < this.scales.length) {
                param1.writeVarShort(this.scales[_loc4_]);
                _loc4_++;
            }
            param1.writeShort(this.subentities.length);
            var _loc5_ = 0;
            while (_loc5_ < this.subentities.length) {
                (this.subentities[_loc5_]).serializeAs_SubEntity(param1);
                _loc5_++;
            }
        };
        EntityLook.prototype.deserialize = function (param1) {
            this.deserializeAs_EntityLook(param1);
        };
        EntityLook.prototype.deserializeAs_EntityLook = function (param1) {
            var _loc10_ = 0;
            var _loc11_ = 0;
            var _loc12_ = 0;
            var _loc13_ = null;
            this.bonesId = param1.readVarUhShort();
            if (this.bonesId < 0) {
                throw new Error('Forbidden value (' + this.bonesId + ') on element of EntityLook.bonesId.');
            }
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc10_ = param1.readVarUhShort();
                if (_loc10_ < 0) {
                    throw new Error('Forbidden value (' + _loc10_ + ') on elements of skins.');
                }
                this.skins.push(_loc10_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc11_ = param1.readInt();
                this.indexedColors.push(_loc11_);
                _loc5_++;
            }
            var _loc6_ = param1.readUnsignedShort();
            var _loc7_ = 0;
            while (_loc7_ < _loc6_) {
                _loc12_ = param1.readVarShort();
                this.scales.push(_loc12_);
                _loc7_++;
            }
            var _loc8_ = param1.readUnsignedShort();
            var _loc9_ = 0;
            while (_loc9_ < _loc8_) {
                _loc13_ = new SubEntity();
                _loc13_.deserialize(param1);
                this.subentities.push(_loc13_);
                _loc9_++;
            }
        };
        EntityLook.ID = 55;
        return EntityLook;
    })();
    Protocol.EntityLook = EntityLook;
    var IndexedEntityLook = (function () {
        function IndexedEntityLook() {
            this.look = new EntityLook();
            this.index = 0;
        }
        IndexedEntityLook.prototype.getTypeId = function () {
            return IndexedEntityLook.ID;
        };
        IndexedEntityLook.prototype.reset = function () {
            this.look = new EntityLook();
            this.index = 0;
        };
        IndexedEntityLook.prototype.serialize = function (param1) {
            this.serializeAs_IndexedEntityLook(param1);
        };
        IndexedEntityLook.prototype.serializeAs_IndexedEntityLook = function (param1) {
            this.look.serializeAs_EntityLook(param1);
            if (this.index < 0) {
                throw new Error('Forbidden value (' + this.index + ') on element index.');
            }
            param1.writeByte(this.index);
        };
        IndexedEntityLook.prototype.deserialize = function (param1) {
            this.deserializeAs_IndexedEntityLook(param1);
        };
        IndexedEntityLook.prototype.deserializeAs_IndexedEntityLook = function (param1) {
            this.look = new EntityLook();
            this.look.deserialize(param1);
            this.index = param1.readByte();
            if (this.index < 0) {
                throw new Error('Forbidden value (' + this.index + ') on element of IndexedEntityLook.index.');
            }
        };
        IndexedEntityLook.ID = 405;
        return IndexedEntityLook;
    })();
    Protocol.IndexedEntityLook = IndexedEntityLook;
    var SubEntity = (function () {
        function SubEntity() {
            this.bindingPointCategory = 0;
            this.bindingPointIndex = 0;
            this.subEntityLook = new EntityLook();
        }
        SubEntity.prototype.getTypeId = function () {
            return SubEntity.ID;
        };
        SubEntity.prototype.reset = function () {
            this.bindingPointCategory = 0;
            this.bindingPointIndex = 0;
            this.subEntityLook = new EntityLook();
        };
        SubEntity.prototype.serialize = function (param1) {
            this.serializeAs_SubEntity(param1);
        };
        SubEntity.prototype.serializeAs_SubEntity = function (param1) {
            param1.writeByte(this.bindingPointCategory);
            if (this.bindingPointIndex < 0) {
                throw new Error('Forbidden value (' + this.bindingPointIndex + ') on element bindingPointIndex.');
            }
            param1.writeByte(this.bindingPointIndex);
            this.subEntityLook.serializeAs_EntityLook(param1);
        };
        SubEntity.prototype.deserialize = function (param1) {
            this.deserializeAs_SubEntity(param1);
        };
        SubEntity.prototype.deserializeAs_SubEntity = function (param1) {
            this.bindingPointCategory = param1.readByte();
            if (this.bindingPointCategory < 0) {
                throw new Error('Forbidden value (' + this.bindingPointCategory + ') on element of SubEntity.bindingPointCategory.');
            }
            this.bindingPointIndex = param1.readByte();
            if (this.bindingPointIndex < 0) {
                throw new Error('Forbidden value (' + this.bindingPointIndex + ') on element of SubEntity.bindingPointIndex.');
            }
            this.subEntityLook = new EntityLook();
            this.subEntityLook.deserialize(param1);
        };
        SubEntity.ID = 54;
        return SubEntity;
    })();
    Protocol.SubEntity = SubEntity;
    var ItemDurability = (function () {
        function ItemDurability() {
            this.durability = 0;
            this.durabilityMax = 0;
        }
        ItemDurability.prototype.getTypeId = function () {
            return ItemDurability.ID;
        };
        ItemDurability.prototype.reset = function () {
            this.durability = 0;
            this.durabilityMax = 0;
        };
        ItemDurability.prototype.serialize = function (param1) {
            this.serializeAs_ItemDurability(param1);
        };
        ItemDurability.prototype.serializeAs_ItemDurability = function (param1) {
            param1.writeShort(this.durability);
            param1.writeShort(this.durabilityMax);
        };
        ItemDurability.prototype.deserialize = function (param1) {
            this.deserializeAs_ItemDurability(param1);
        };
        ItemDurability.prototype.deserializeAs_ItemDurability = function (param1) {
            this.durability = param1.readShort();
            this.durabilityMax = param1.readShort();
        };
        ItemDurability.ID = 168;
        return ItemDurability;
    })();
    Protocol.ItemDurability = ItemDurability;
    var MountClientData = (function () {
        function MountClientData() {
            this.id = 0;
            this.model = 0;
            this.ancestor = [];
            this.behaviors = [];
            this.name = '';
            this.sex = false;
            this.ownerId = 0;
            this.experience = 0;
            this.experienceForLevel = 0;
            this.experienceForNextLevel = 0;
            this.level = 0;
            this.isRideable = false;
            this.maxPods = 0;
            this.isWild = false;
            this.stamina = 0;
            this.staminaMax = 0;
            this.maturity = 0;
            this.maturityForAdult = 0;
            this.energy = 0;
            this.energyMax = 0;
            this.serenity = 0;
            this.aggressivityMax = 0;
            this.serenityMax = 0;
            this.love = 0;
            this.loveMax = 0;
            this.fecondationTime = 0;
            this.isFecondationReady = false;
            this.boostLimiter = 0;
            this.boostMax = 0;
            this.reproductionCount = 0;
            this.reproductionCountMax = 0;
            this.effectList = [];
        }
        MountClientData.prototype.getTypeId = function () {
            return MountClientData.ID;
        };
        MountClientData.prototype.reset = function () {
            this.id = 0;
            this.model = 0;
            this.ancestor = [];
            this.behaviors = [];
            this.name = '';
            this.sex = false;
            this.ownerId = 0;
            this.experience = 0;
            this.experienceForLevel = 0;
            this.experienceForNextLevel = 0;
            this.level = 0;
            this.isRideable = false;
            this.maxPods = 0;
            this.isWild = false;
            this.stamina = 0;
            this.staminaMax = 0;
            this.maturity = 0;
            this.maturityForAdult = 0;
            this.energy = 0;
            this.energyMax = 0;
            this.serenity = 0;
            this.aggressivityMax = 0;
            this.serenityMax = 0;
            this.love = 0;
            this.loveMax = 0;
            this.fecondationTime = 0;
            this.isFecondationReady = false;
            this.boostLimiter = 0;
            this.boostMax = 0;
            this.reproductionCount = 0;
            this.reproductionCountMax = 0;
            this.effectList = [];
        };
        MountClientData.prototype.serialize = function (param1) {
            this.serializeAs_MountClientData(param1);
        };
        MountClientData.prototype.serializeAs_MountClientData = function (param1) {
            var _loc2_ = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.sex);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isRideable);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isWild);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.isFecondationReady);
            param1.writeByte(_loc2_);
            if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeDouble(this.id);
            if (this.model < 0) {
                throw new Error('Forbidden value (' + this.model + ') on element model.');
            }
            param1.writeVarInt(this.model);
            param1.writeShort(this.ancestor.length);
            var _loc3_ = 0;
            while (_loc3_ < this.ancestor.length) {
                if (this.ancestor[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.ancestor[_loc3_] + ') on element 3 (starting at 1) of ancestor.');
                }
                param1.writeInt(this.ancestor[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.behaviors.length);
            var _loc4_ = 0;
            while (_loc4_ < this.behaviors.length) {
                if (this.behaviors[_loc4_] < 0) {
                    throw new Error('Forbidden value (' + this.behaviors[_loc4_] + ') on element 4 (starting at 1) of behaviors.');
                }
                param1.writeInt(this.behaviors[_loc4_]);
                _loc4_++;
            }
            param1.writeUTF(this.name);
            if (this.ownerId < 0) {
                throw new Error('Forbidden value (' + this.ownerId + ') on element ownerId.');
            }
            param1.writeInt(this.ownerId);
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element experience.');
            }
            param1.writeVarLong(this.experience);
            if (this.experienceForLevel < 0 || this.experienceForLevel > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceForLevel + ') on element experienceForLevel.');
            }
            param1.writeVarLong(this.experienceForLevel);
            if (this.experienceForNextLevel < -9.007199254740992E15 || this.experienceForNextLevel > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceForNextLevel + ') on element experienceForNextLevel.');
            }
            param1.writeDouble(this.experienceForNextLevel);
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            if (this.maxPods < 0) {
                throw new Error('Forbidden value (' + this.maxPods + ') on element maxPods.');
            }
            param1.writeVarInt(this.maxPods);
            if (this.stamina < 0) {
                throw new Error('Forbidden value (' + this.stamina + ') on element stamina.');
            }
            param1.writeVarInt(this.stamina);
            if (this.staminaMax < 0) {
                throw new Error('Forbidden value (' + this.staminaMax + ') on element staminaMax.');
            }
            param1.writeVarInt(this.staminaMax);
            if (this.maturity < 0) {
                throw new Error('Forbidden value (' + this.maturity + ') on element maturity.');
            }
            param1.writeVarInt(this.maturity);
            if (this.maturityForAdult < 0) {
                throw new Error('Forbidden value (' + this.maturityForAdult + ') on element maturityForAdult.');
            }
            param1.writeVarInt(this.maturityForAdult);
            if (this.energy < 0) {
                throw new Error('Forbidden value (' + this.energy + ') on element energy.');
            }
            param1.writeVarInt(this.energy);
            if (this.energyMax < 0) {
                throw new Error('Forbidden value (' + this.energyMax + ') on element energyMax.');
            }
            param1.writeVarInt(this.energyMax);
            param1.writeInt(this.serenity);
            param1.writeInt(this.aggressivityMax);
            if (this.serenityMax < 0) {
                throw new Error('Forbidden value (' + this.serenityMax + ') on element serenityMax.');
            }
            param1.writeVarInt(this.serenityMax);
            if (this.love < 0) {
                throw new Error('Forbidden value (' + this.love + ') on element love.');
            }
            param1.writeVarInt(this.love);
            if (this.loveMax < 0) {
                throw new Error('Forbidden value (' + this.loveMax + ') on element loveMax.');
            }
            param1.writeVarInt(this.loveMax);
            param1.writeInt(this.fecondationTime);
            if (this.boostLimiter < 0) {
                throw new Error('Forbidden value (' + this.boostLimiter + ') on element boostLimiter.');
            }
            param1.writeInt(this.boostLimiter);
            if (this.boostMax < -9.007199254740992E15 || this.boostMax > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.boostMax + ') on element boostMax.');
            }
            param1.writeDouble(this.boostMax);
            param1.writeInt(this.reproductionCount);
            if (this.reproductionCountMax < 0) {
                throw new Error('Forbidden value (' + this.reproductionCountMax + ') on element reproductionCountMax.');
            }
            param1.writeVarInt(this.reproductionCountMax);
            param1.writeShort(this.effectList.length);
            var _loc5_ = 0;
            while (_loc5_ < this.effectList.length) {
                (this.effectList[_loc5_]).serializeAs_ObjectEffectInteger(param1);
                _loc5_++;
            }
        };
        MountClientData.prototype.deserialize = function (param1) {
            this.deserializeAs_MountClientData(param1);
        };
        MountClientData.prototype.deserializeAs_MountClientData = function (param1) {
            var _loc9_ = 0;
            var _loc10_ = 0;
            var _loc11_ = null;
            var _loc2_ = param1.readByte();
            this.sex = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.isRideable = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.isWild = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.isFecondationReady = BooleanByteWrapper.getFlag(_loc2_, 3);
            this.id = param1.readDouble();
            if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.id + ') on element of MountClientData.id.');
            }
            this.model = param1.readVarUhInt();
            if (this.model < 0) {
                throw new Error('Forbidden value (' + this.model + ') on element of MountClientData.model.');
            }
            var _loc3_ = param1.readUnsignedShort();
            var _loc4_ = 0;
            while (_loc4_ < _loc3_) {
                _loc9_ = param1.readInt();
                if (_loc9_ < 0) {
                    throw new Error('Forbidden value (' + _loc9_ + ') on elements of ancestor.');
                }
                this.ancestor.push(_loc9_);
                _loc4_++;
            }
            var _loc5_ = param1.readUnsignedShort();
            var _loc6_ = 0;
            while (_loc6_ < _loc5_) {
                _loc10_ = param1.readInt();
                if (_loc10_ < 0) {
                    throw new Error('Forbidden value (' + _loc10_ + ') on elements of behaviors.');
                }
                this.behaviors.push(_loc10_);
                _loc6_++;
            }
            this.name = param1.readUTF();
            this.ownerId = param1.readInt();
            if (this.ownerId < 0) {
                throw new Error('Forbidden value (' + this.ownerId + ') on element of MountClientData.ownerId.');
            }
            this.experience = param1.readVarUhLong();
            if (this.experience < 0 || this.experience > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experience + ') on element of MountClientData.experience.');
            }
            this.experienceForLevel = param1.readVarUhLong();
            if (this.experienceForLevel < 0 || this.experienceForLevel > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceForLevel + ') on element of MountClientData.experienceForLevel.');
            }
            this.experienceForNextLevel = param1.readDouble();
            if (this.experienceForNextLevel < -9.007199254740992E15 || this.experienceForNextLevel > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.experienceForNextLevel + ') on element of MountClientData.experienceForNextLevel.');
            }
            this.level = param1.readByte();
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element of MountClientData.level.');
            }
            this.maxPods = param1.readVarUhInt();
            if (this.maxPods < 0) {
                throw new Error('Forbidden value (' + this.maxPods + ') on element of MountClientData.maxPods.');
            }
            this.stamina = param1.readVarUhInt();
            if (this.stamina < 0) {
                throw new Error('Forbidden value (' + this.stamina + ') on element of MountClientData.stamina.');
            }
            this.staminaMax = param1.readVarUhInt();
            if (this.staminaMax < 0) {
                throw new Error('Forbidden value (' + this.staminaMax + ') on element of MountClientData.staminaMax.');
            }
            this.maturity = param1.readVarUhInt();
            if (this.maturity < 0) {
                throw new Error('Forbidden value (' + this.maturity + ') on element of MountClientData.maturity.');
            }
            this.maturityForAdult = param1.readVarUhInt();
            if (this.maturityForAdult < 0) {
                throw new Error('Forbidden value (' + this.maturityForAdult + ') on element of MountClientData.maturityForAdult.');
            }
            this.energy = param1.readVarUhInt();
            if (this.energy < 0) {
                throw new Error('Forbidden value (' + this.energy + ') on element of MountClientData.energy.');
            }
            this.energyMax = param1.readVarUhInt();
            if (this.energyMax < 0) {
                throw new Error('Forbidden value (' + this.energyMax + ') on element of MountClientData.energyMax.');
            }
            this.serenity = param1.readInt();
            this.aggressivityMax = param1.readInt();
            this.serenityMax = param1.readVarUhInt();
            if (this.serenityMax < 0) {
                throw new Error('Forbidden value (' + this.serenityMax + ') on element of MountClientData.serenityMax.');
            }
            this.love = param1.readVarUhInt();
            if (this.love < 0) {
                throw new Error('Forbidden value (' + this.love + ') on element of MountClientData.love.');
            }
            this.loveMax = param1.readVarUhInt();
            if (this.loveMax < 0) {
                throw new Error('Forbidden value (' + this.loveMax + ') on element of MountClientData.loveMax.');
            }
            this.fecondationTime = param1.readInt();
            this.boostLimiter = param1.readInt();
            if (this.boostLimiter < 0) {
                throw new Error('Forbidden value (' + this.boostLimiter + ') on element of MountClientData.boostLimiter.');
            }
            this.boostMax = param1.readDouble();
            if (this.boostMax < -9.007199254740992E15 || this.boostMax > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.boostMax + ') on element of MountClientData.boostMax.');
            }
            this.reproductionCount = param1.readInt();
            this.reproductionCountMax = param1.readVarUhInt();
            if (this.reproductionCountMax < 0) {
                throw new Error('Forbidden value (' + this.reproductionCountMax + ') on element of MountClientData.reproductionCountMax.');
            }
            var _loc7_ = param1.readUnsignedShort();
            var _loc8_ = 0;
            while (_loc8_ < _loc7_) {
                _loc11_ = new ObjectEffectInteger();
                _loc11_.deserialize(param1);
                this.effectList.push(_loc11_);
                _loc8_++;
            }
        };
        MountClientData.ID = 178;
        return MountClientData;
    })();
    Protocol.MountClientData = MountClientData;
    var UpdateMountBoost = (function () {
        function UpdateMountBoost() {
            this.type = 0;
        }
        UpdateMountBoost.prototype.getTypeId = function () {
            return UpdateMountBoost.ID;
        };
        UpdateMountBoost.prototype.reset = function () {
            this.type = 0;
        };
        UpdateMountBoost.prototype.serialize = function (param1) {
            this.serializeAs_UpdateMountBoost(param1);
        };
        UpdateMountBoost.prototype.serializeAs_UpdateMountBoost = function (param1) {
            param1.writeByte(this.type);
        };
        UpdateMountBoost.prototype.deserialize = function (param1) {
            this.deserializeAs_UpdateMountBoost(param1);
        };
        UpdateMountBoost.prototype.deserializeAs_UpdateMountBoost = function (param1) {
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of UpdateMountBoost.type.');
            }
        };
        UpdateMountBoost.ID = 356;
        return UpdateMountBoost;
    })();
    Protocol.UpdateMountBoost = UpdateMountBoost;
    var UpdateMountIntBoost = (function (_super) {
        __extends(UpdateMountIntBoost, _super);
        function UpdateMountIntBoost() {
            this.value = 0;
            _super.call(this);
        }
        UpdateMountIntBoost.prototype.getTypeId = function () {
            return UpdateMountIntBoost.ID;
        };
        UpdateMountIntBoost.prototype.reset = function () {
            this.value = 0;
        };
        UpdateMountIntBoost.prototype.serialize = function (param1) {
            this.serializeAs_UpdateMountIntBoost(param1);
        };
        UpdateMountIntBoost.prototype.serializeAs_UpdateMountIntBoost = function (param1) {
            _super.prototype.serializeAs_UpdateMountBoost.call(this, param1);
            param1.writeInt(this.value);
        };
        UpdateMountIntBoost.prototype.deserialize = function (param1) {
            this.deserializeAs_UpdateMountIntBoost(param1);
        };
        UpdateMountIntBoost.prototype.deserializeAs_UpdateMountIntBoost = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.value = param1.readInt();
        };
        UpdateMountIntBoost.ID = 357;
        return UpdateMountIntBoost;
    })(UpdateMountBoost);
    Protocol.UpdateMountIntBoost = UpdateMountIntBoost;
    var MountInformationsForPaddock = (function () {
        function MountInformationsForPaddock() {
            this.modelId = 0;
            this.name = '';
            this.ownerName = '';
        }
        MountInformationsForPaddock.prototype.getTypeId = function () {
            return MountInformationsForPaddock.ID;
        };
        MountInformationsForPaddock.prototype.reset = function () {
            this.modelId = 0;
            this.name = '';
            this.ownerName = '';
        };
        MountInformationsForPaddock.prototype.serialize = function (param1) {
            this.serializeAs_MountInformationsForPaddock(param1);
        };
        MountInformationsForPaddock.prototype.serializeAs_MountInformationsForPaddock = function (param1) {
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeByte(this.modelId);
            param1.writeUTF(this.name);
            param1.writeUTF(this.ownerName);
        };
        MountInformationsForPaddock.prototype.deserialize = function (param1) {
            this.deserializeAs_MountInformationsForPaddock(param1);
        };
        MountInformationsForPaddock.prototype.deserializeAs_MountInformationsForPaddock = function (param1) {
            this.modelId = param1.readByte();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of MountInformationsForPaddock.modelId.');
            }
            this.name = param1.readUTF();
            this.ownerName = param1.readUTF();
        };
        MountInformationsForPaddock.ID = 184;
        return MountInformationsForPaddock;
    })();
    Protocol.MountInformationsForPaddock = MountInformationsForPaddock;
    var PaddockAbandonnedInformations = (function (_super) {
        __extends(PaddockAbandonnedInformations, _super);
        function PaddockAbandonnedInformations() {
            this.guildId = 0;
            _super.call(this);
        }
        PaddockAbandonnedInformations.prototype.getTypeId = function () {
            return PaddockAbandonnedInformations.ID;
        };
        PaddockAbandonnedInformations.prototype.reset = function () {
            this.guildId = 0;
        };
        PaddockAbandonnedInformations.prototype.serialize = function (param1) {
            this.serializeAs_PaddockAbandonnedInformations(param1);
        };
        PaddockAbandonnedInformations.prototype.serializeAs_PaddockAbandonnedInformations = function (param1) {
            _super.prototype.serializeAs_PaddockBuyableInformations.call(this, param1);
            param1.writeInt(this.guildId);
        };
        PaddockAbandonnedInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PaddockAbandonnedInformations(param1);
        };
        PaddockAbandonnedInformations.prototype.deserializeAs_PaddockAbandonnedInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guildId = param1.readInt();
        };
        PaddockAbandonnedInformations.ID = 133;
        return PaddockAbandonnedInformations;
    })(PaddockBuyableInformations);
    Protocol.PaddockAbandonnedInformations = PaddockAbandonnedInformations;
    var PaddockBuyableInformations = (function (_super) {
        __extends(PaddockBuyableInformations, _super);
        function PaddockBuyableInformations() {
            this.price = 0;
            this.locked = false;
            _super.call(this);
        }
        PaddockBuyableInformations.prototype.getTypeId = function () {
            return PaddockBuyableInformations.ID;
        };
        PaddockBuyableInformations.prototype.reset = function () {
            this.price = 0;
            this.locked = false;
        };
        PaddockBuyableInformations.prototype.serialize = function (param1) {
            this.serializeAs_PaddockBuyableInformations(param1);
        };
        PaddockBuyableInformations.prototype.serializeAs_PaddockBuyableInformations = function (param1) {
            _super.prototype.serializeAs_PaddockInformations.call(this, param1);
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element price.');
            }
            param1.writeVarInt(this.price);
            param1.writeBoolean(this.locked);
        };
        PaddockBuyableInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PaddockBuyableInformations(param1);
        };
        PaddockBuyableInformations.prototype.deserializeAs_PaddockBuyableInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.price = param1.readVarUhInt();
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element of PaddockBuyableInformations.price.');
            }
            this.locked = param1.readBoolean();
        };
        PaddockBuyableInformations.ID = 130;
        return PaddockBuyableInformations;
    })(PaddockInformations);
    Protocol.PaddockBuyableInformations = PaddockBuyableInformations;
    var PaddockContentInformations = (function (_super) {
        __extends(PaddockContentInformations, _super);
        function PaddockContentInformations() {
            this.paddockId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.abandonned = false;
            this.mountsInformations = [];
            _super.call(this);
        }
        PaddockContentInformations.prototype.getTypeId = function () {
            return PaddockContentInformations.ID;
        };
        PaddockContentInformations.prototype.reset = function () {
            this.paddockId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.abandonned = false;
            this.mountsInformations = [];
        };
        PaddockContentInformations.prototype.serialize = function (param1) {
            this.serializeAs_PaddockContentInformations(param1);
        };
        PaddockContentInformations.prototype.serializeAs_PaddockContentInformations = function (param1) {
            _super.prototype.serializeAs_PaddockInformations.call(this, param1);
            param1.writeInt(this.paddockId);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeBoolean(this.abandonned);
            param1.writeShort(this.mountsInformations.length);
            var _loc2_ = 0;
            while (_loc2_ < this.mountsInformations.length) {
                (this.mountsInformations[_loc2_]).serializeAs_MountInformationsForPaddock(param1);
                _loc2_++;
            }
        };
        PaddockContentInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PaddockContentInformations(param1);
        };
        PaddockContentInformations.prototype.deserializeAs_PaddockContentInformations = function (param1) {
            var _loc4_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.paddockId = param1.readInt();
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of PaddockContentInformations.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of PaddockContentInformations.worldY.');
            }
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PaddockContentInformations.subAreaId.');
            }
            this.abandonned = param1.readBoolean();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MountInformationsForPaddock();
                _loc4_.deserialize(param1);
                this.mountsInformations.push(_loc4_);
                _loc3_++;
            }
        };
        PaddockContentInformations.ID = 183;
        return PaddockContentInformations;
    })(PaddockInformations);
    Protocol.PaddockContentInformations = PaddockContentInformations;
    var PaddockInformations = (function () {
        function PaddockInformations() {
            this.maxOutdoorMount = 0;
            this.maxItems = 0;
        }
        PaddockInformations.prototype.getTypeId = function () {
            return PaddockInformations.ID;
        };
        PaddockInformations.prototype.reset = function () {
            this.maxOutdoorMount = 0;
            this.maxItems = 0;
        };
        PaddockInformations.prototype.serialize = function (param1) {
            this.serializeAs_PaddockInformations(param1);
        };
        PaddockInformations.prototype.serializeAs_PaddockInformations = function (param1) {
            if (this.maxOutdoorMount < 0) {
                throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element maxOutdoorMount.');
            }
            param1.writeVarShort(this.maxOutdoorMount);
            if (this.maxItems < 0) {
                throw new Error('Forbidden value (' + this.maxItems + ') on element maxItems.');
            }
            param1.writeVarShort(this.maxItems);
        };
        PaddockInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PaddockInformations(param1);
        };
        PaddockInformations.prototype.deserializeAs_PaddockInformations = function (param1) {
            this.maxOutdoorMount = param1.readVarUhShort();
            if (this.maxOutdoorMount < 0) {
                throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element of PaddockInformations.maxOutdoorMount.');
            }
            this.maxItems = param1.readVarUhShort();
            if (this.maxItems < 0) {
                throw new Error('Forbidden value (' + this.maxItems + ') on element of PaddockInformations.maxItems.');
            }
        };
        PaddockInformations.ID = 132;
        return PaddockInformations;
    })();
    Protocol.PaddockInformations = PaddockInformations;
    var PaddockInformationsForSell = (function () {
        function PaddockInformationsForSell() {
            this.guildOwner = '';
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.nbMount = 0;
            this.nbObject = 0;
            this.price = 0;
        }
        PaddockInformationsForSell.prototype.getTypeId = function () {
            return PaddockInformationsForSell.ID;
        };
        PaddockInformationsForSell.prototype.reset = function () {
            this.guildOwner = '';
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.nbMount = 0;
            this.nbObject = 0;
            this.price = 0;
        };
        PaddockInformationsForSell.prototype.serialize = function (param1) {
            this.serializeAs_PaddockInformationsForSell(param1);
        };
        PaddockInformationsForSell.prototype.serializeAs_PaddockInformationsForSell = function (param1) {
            param1.writeUTF(this.guildOwner);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            param1.writeByte(this.nbMount);
            param1.writeByte(this.nbObject);
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element price.');
            }
            param1.writeVarInt(this.price);
        };
        PaddockInformationsForSell.prototype.deserialize = function (param1) {
            this.deserializeAs_PaddockInformationsForSell(param1);
        };
        PaddockInformationsForSell.prototype.deserializeAs_PaddockInformationsForSell = function (param1) {
            this.guildOwner = param1.readUTF();
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of PaddockInformationsForSell.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of PaddockInformationsForSell.worldY.');
            }
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PaddockInformationsForSell.subAreaId.');
            }
            this.nbMount = param1.readByte();
            this.nbObject = param1.readByte();
            this.price = param1.readVarUhInt();
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element of PaddockInformationsForSell.price.');
            }
        };
        PaddockInformationsForSell.ID = 222;
        return PaddockInformationsForSell;
    })();
    Protocol.PaddockInformationsForSell = PaddockInformationsForSell;
    var PaddockItem = (function (_super) {
        __extends(PaddockItem, _super);
        function PaddockItem() {
            this.durability = new ItemDurability();
            _super.call(this);
        }
        PaddockItem.prototype.getTypeId = function () {
            return PaddockItem.ID;
        };
        PaddockItem.prototype.reset = function () {
            this.durability = new ItemDurability();
        };
        PaddockItem.prototype.serialize = function (param1) {
            this.serializeAs_PaddockItem(param1);
        };
        PaddockItem.prototype.serializeAs_PaddockItem = function (param1) {
            _super.prototype.serializeAs_ObjectItemInRolePlay.call(this, param1);
            this.durability.serializeAs_ItemDurability(param1);
        };
        PaddockItem.prototype.deserialize = function (param1) {
            this.deserializeAs_PaddockItem(param1);
        };
        PaddockItem.prototype.deserializeAs_PaddockItem = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.durability = new ItemDurability();
            this.durability.deserialize(param1);
        };
        PaddockItem.ID = 185;
        return PaddockItem;
    })(ObjectItemInRolePlay);
    Protocol.PaddockItem = PaddockItem;
    var PaddockPrivateInformations = (function (_super) {
        __extends(PaddockPrivateInformations, _super);
        function PaddockPrivateInformations() {
            this.guildInfo = new GuildInformations();
            _super.call(this);
        }
        PaddockPrivateInformations.prototype.getTypeId = function () {
            return PaddockPrivateInformations.ID;
        };
        PaddockPrivateInformations.prototype.reset = function () {
            this.guildInfo = new GuildInformations();
        };
        PaddockPrivateInformations.prototype.serialize = function (param1) {
            this.serializeAs_PaddockPrivateInformations(param1);
        };
        PaddockPrivateInformations.prototype.serializeAs_PaddockPrivateInformations = function (param1) {
            _super.prototype.serializeAs_PaddockAbandonnedInformations.call(this, param1);
            this.guildInfo.serializeAs_GuildInformations(param1);
        };
        PaddockPrivateInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_PaddockPrivateInformations(param1);
        };
        PaddockPrivateInformations.prototype.deserializeAs_PaddockPrivateInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.guildInfo = new GuildInformations();
            this.guildInfo.deserialize(param1);
        };
        PaddockPrivateInformations.ID = 131;
        return PaddockPrivateInformations;
    })(PaddockAbandonnedInformations);
    Protocol.PaddockPrivateInformations = PaddockPrivateInformations;
    var AllianceInsiderPrismInformation = (function (_super) {
        __extends(AllianceInsiderPrismInformation, _super);
        function AllianceInsiderPrismInformation() {
            this.lastTimeSlotModificationDate = 0;
            this.lastTimeSlotModificationAuthorGuildId = 0;
            this.lastTimeSlotModificationAuthorId = 0;
            this.lastTimeSlotModificationAuthorName = '';
            this.modulesObjects = [];
            _super.call(this);
        }
        AllianceInsiderPrismInformation.prototype.getTypeId = function () {
            return AllianceInsiderPrismInformation.ID;
        };
        AllianceInsiderPrismInformation.prototype.reset = function () {
            this.lastTimeSlotModificationDate = 0;
            this.lastTimeSlotModificationAuthorGuildId = 0;
            this.lastTimeSlotModificationAuthorId = 0;
            this.lastTimeSlotModificationAuthorName = '';
            this.modulesObjects = [];
        };
        AllianceInsiderPrismInformation.prototype.serialize = function (param1) {
            this.serializeAs_AllianceInsiderPrismInformation(param1);
        };
        AllianceInsiderPrismInformation.prototype.serializeAs_AllianceInsiderPrismInformation = function (param1) {
            _super.prototype.serializeAs_PrismInformation.call(this, param1);
            if (this.lastTimeSlotModificationDate < 0) {
                throw new Error('Forbidden value (' + this.lastTimeSlotModificationDate + ') on element lastTimeSlotModificationDate.');
            }
            param1.writeInt(this.lastTimeSlotModificationDate);
            if (this.lastTimeSlotModificationAuthorGuildId < 0) {
                throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorGuildId + ') on element lastTimeSlotModificationAuthorGuildId.');
            }
            param1.writeVarInt(this.lastTimeSlotModificationAuthorGuildId);
            if (this.lastTimeSlotModificationAuthorId < 0) {
                throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorId + ') on element lastTimeSlotModificationAuthorId.');
            }
            param1.writeVarInt(this.lastTimeSlotModificationAuthorId);
            param1.writeUTF(this.lastTimeSlotModificationAuthorName);
            param1.writeShort(this.modulesObjects.length);
            var _loc2_ = 0;
            while (_loc2_ < this.modulesObjects.length) {
                (this.modulesObjects[_loc2_]).serializeAs_ObjectItem(param1);
                _loc2_++;
            }
        };
        AllianceInsiderPrismInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_AllianceInsiderPrismInformation(param1);
        };
        AllianceInsiderPrismInformation.prototype.deserializeAs_AllianceInsiderPrismInformation = function (param1) {
            var _loc4_ = null;
            _super.prototype.deserialize.call(this, param1);
            this.lastTimeSlotModificationDate = param1.readInt();
            if (this.lastTimeSlotModificationDate < 0) {
                throw new Error('Forbidden value (' + this.lastTimeSlotModificationDate + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationDate.');
            }
            this.lastTimeSlotModificationAuthorGuildId = param1.readVarUhInt();
            if (this.lastTimeSlotModificationAuthorGuildId < 0) {
                throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorGuildId + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorGuildId.');
            }
            this.lastTimeSlotModificationAuthorId = param1.readVarUhInt();
            if (this.lastTimeSlotModificationAuthorId < 0) {
                throw new Error('Forbidden value (' + this.lastTimeSlotModificationAuthorId + ') on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorId.');
            }
            this.lastTimeSlotModificationAuthorName = param1.readUTF();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new ObjectItem();
                _loc4_.deserialize(param1);
                this.modulesObjects.push(_loc4_);
                _loc3_++;
            }
        };
        AllianceInsiderPrismInformation.ID = 431;
        return AllianceInsiderPrismInformation;
    })(PrismInformation);
    Protocol.AllianceInsiderPrismInformation = AllianceInsiderPrismInformation;
    var AlliancePrismInformation = (function (_super) {
        __extends(AlliancePrismInformation, _super);
        function AlliancePrismInformation() {
            this.alliance = new AllianceInformations();
            _super.call(this);
        }
        AlliancePrismInformation.prototype.getTypeId = function () {
            return AlliancePrismInformation.ID;
        };
        AlliancePrismInformation.prototype.reset = function () {
            this.alliance = new AllianceInformations();
        };
        AlliancePrismInformation.prototype.serialize = function (param1) {
            this.serializeAs_AlliancePrismInformation(param1);
        };
        AlliancePrismInformation.prototype.serializeAs_AlliancePrismInformation = function (param1) {
            _super.prototype.serializeAs_PrismInformation.call(this, param1);
            this.alliance.serializeAs_AllianceInformations(param1);
        };
        AlliancePrismInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_AlliancePrismInformation(param1);
        };
        AlliancePrismInformation.prototype.deserializeAs_AlliancePrismInformation = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.alliance = new AllianceInformations();
            this.alliance.deserialize(param1);
        };
        AlliancePrismInformation.ID = 427;
        return AlliancePrismInformation;
    })(PrismInformation);
    Protocol.AlliancePrismInformation = AlliancePrismInformation;
    var PrismFightersInformation = (function () {
        function PrismFightersInformation() {
            this.subAreaId = 0;
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        }
        PrismFightersInformation.prototype.getTypeId = function () {
            return PrismFightersInformation.ID;
        };
        PrismFightersInformation.prototype.reset = function () {
            this.subAreaId = 0;
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        };
        PrismFightersInformation.prototype.serialize = function (param1) {
            this.serializeAs_PrismFightersInformation(param1);
        };
        PrismFightersInformation.prototype.serializeAs_PrismFightersInformation = function (param1) {
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
            param1.writeShort(this.allyCharactersInformations.length);
            var _loc2_ = 0;
            while (_loc2_ < this.allyCharactersInformations.length) {
                param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
                (this.allyCharactersInformations[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.enemyCharactersInformations.length);
            var _loc3_ = 0;
            while (_loc3_ < this.enemyCharactersInformations.length) {
                param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
                (this.enemyCharactersInformations[_loc3_]).serialize(param1);
                _loc3_++;
            }
        };
        PrismFightersInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_PrismFightersInformation(param1);
        };
        PrismFightersInformation.prototype.deserializeAs_PrismFightersInformation = function (param1) {
            var _loc6_ = 0;
            var _loc7_ = null;
            var _loc8_ = 0;
            var _loc9_ = null;
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightersInformation.subAreaId.');
            }
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.waitingForHelpInfo.deserialize(param1);
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
                _loc7_.deserialize(param1);
                this.allyCharactersInformations.push(_loc7_);
                _loc3_++;
            }
            var _loc4_ = param1.readUnsignedShort();
            var _loc5_ = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
                _loc9_.deserialize(param1);
                this.enemyCharactersInformations.push(_loc9_);
                _loc5_++;
            }
        };
        PrismFightersInformation.ID = 443;
        return PrismFightersInformation;
    })();
    Protocol.PrismFightersInformation = PrismFightersInformation;
    var PrismGeolocalizedInformation = (function (_super) {
        __extends(PrismGeolocalizedInformation, _super);
        function PrismGeolocalizedInformation() {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.prism = new PrismInformation();
            _super.call(this);
        }
        PrismGeolocalizedInformation.prototype.getTypeId = function () {
            return PrismGeolocalizedInformation.ID;
        };
        PrismGeolocalizedInformation.prototype.reset = function () {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.prism = new PrismInformation();
        };
        PrismGeolocalizedInformation.prototype.serialize = function (param1) {
            this.serializeAs_PrismGeolocalizedInformation(param1);
        };
        PrismGeolocalizedInformation.prototype.serializeAs_PrismGeolocalizedInformation = function (param1) {
            _super.prototype.serializeAs_PrismSubareaEmptyInfo.call(this, param1);
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);
            param1.writeInt(this.mapId);
            param1.writeShort(this.prism.getTypeId());
            this.prism.serialize(param1);
        };
        PrismGeolocalizedInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_PrismGeolocalizedInformation(param1);
        };
        PrismGeolocalizedInformation.prototype.deserializeAs_PrismGeolocalizedInformation = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of PrismGeolocalizedInformation.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of PrismGeolocalizedInformation.worldY.');
            }
            this.mapId = param1.readInt();
            var _loc2_ = param1.readUnsignedShort();
            this.prism = ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
            this.prism.deserialize(param1);
        };
        PrismGeolocalizedInformation.ID = 434;
        return PrismGeolocalizedInformation;
    })(PrismSubareaEmptyInfo);
    Protocol.PrismGeolocalizedInformation = PrismGeolocalizedInformation;
    var PrismInformation = (function () {
        function PrismInformation() {
            this.typeId = 0;
            this.state = 1;
            this.nextVulnerabilityDate = 0;
            this.placementDate = 0;
            this.rewardTokenCount = 0;
        }
        PrismInformation.prototype.getTypeId = function () {
            return PrismInformation.ID;
        };
        PrismInformation.prototype.reset = function () {
            this.typeId = 0;
            this.state = 1;
            this.nextVulnerabilityDate = 0;
            this.placementDate = 0;
            this.rewardTokenCount = 0;
        };
        PrismInformation.prototype.serialize = function (param1) {
            this.serializeAs_PrismInformation(param1);
        };
        PrismInformation.prototype.serializeAs_PrismInformation = function (param1) {
            if (this.typeId < 0) {
                throw new Error('Forbidden value (' + this.typeId + ') on element typeId.');
            }
            param1.writeByte(this.typeId);
            param1.writeByte(this.state);
            if (this.nextVulnerabilityDate < 0) {
                throw new Error('Forbidden value (' + this.nextVulnerabilityDate + ') on element nextVulnerabilityDate.');
            }
            param1.writeInt(this.nextVulnerabilityDate);
            if (this.placementDate < 0) {
                throw new Error('Forbidden value (' + this.placementDate + ') on element placementDate.');
            }
            param1.writeInt(this.placementDate);
            if (this.rewardTokenCount < 0) {
                throw new Error('Forbidden value (' + this.rewardTokenCount + ') on element rewardTokenCount.');
            }
            param1.writeVarInt(this.rewardTokenCount);
        };
        PrismInformation.prototype.deserialize = function (param1) {
            this.deserializeAs_PrismInformation(param1);
        };
        PrismInformation.prototype.deserializeAs_PrismInformation = function (param1) {
            this.typeId = param1.readByte();
            if (this.typeId < 0) {
                throw new Error('Forbidden value (' + this.typeId + ') on element of PrismInformation.typeId.');
            }
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of PrismInformation.state.');
            }
            this.nextVulnerabilityDate = param1.readInt();
            if (this.nextVulnerabilityDate < 0) {
                throw new Error('Forbidden value (' + this.nextVulnerabilityDate + ') on element of PrismInformation.nextVulnerabilityDate.');
            }
            this.placementDate = param1.readInt();
            if (this.placementDate < 0) {
                throw new Error('Forbidden value (' + this.placementDate + ') on element of PrismInformation.placementDate.');
            }
            this.rewardTokenCount = param1.readVarUhInt();
            if (this.rewardTokenCount < 0) {
                throw new Error('Forbidden value (' + this.rewardTokenCount + ') on element of PrismInformation.rewardTokenCount.');
            }
        };
        PrismInformation.ID = 428;
        return PrismInformation;
    })();
    Protocol.PrismInformation = PrismInformation;
    var PrismSubareaEmptyInfo = (function () {
        function PrismSubareaEmptyInfo() {
            this.subAreaId = 0;
            this.allianceId = 0;
        }
        PrismSubareaEmptyInfo.prototype.getTypeId = function () {
            return PrismSubareaEmptyInfo.ID;
        };
        PrismSubareaEmptyInfo.prototype.reset = function () {
            this.subAreaId = 0;
            this.allianceId = 0;
        };
        PrismSubareaEmptyInfo.prototype.serialize = function (param1) {
            this.serializeAs_PrismSubareaEmptyInfo(param1);
        };
        PrismSubareaEmptyInfo.prototype.serializeAs_PrismSubareaEmptyInfo = function (param1) {
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
            }
            param1.writeVarInt(this.allianceId);
        };
        PrismSubareaEmptyInfo.prototype.deserialize = function (param1) {
            this.deserializeAs_PrismSubareaEmptyInfo(param1);
        };
        PrismSubareaEmptyInfo.prototype.deserializeAs_PrismSubareaEmptyInfo = function (param1) {
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSubareaEmptyInfo.subAreaId.');
            }
            this.allianceId = param1.readVarUhInt();
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element of PrismSubareaEmptyInfo.allianceId.');
            }
        };
        PrismSubareaEmptyInfo.ID = 438;
        return PrismSubareaEmptyInfo;
    })();
    Protocol.PrismSubareaEmptyInfo = PrismSubareaEmptyInfo;
    var Shortcut = (function () {
        function Shortcut() {
            this.slot = 0;
        }
        Shortcut.prototype.getTypeId = function () {
            return Shortcut.ID;
        };
        Shortcut.prototype.reset = function () {
            this.slot = 0;
        };
        Shortcut.prototype.serialize = function (param1) {
            this.serializeAs_Shortcut(param1);
        };
        Shortcut.prototype.serializeAs_Shortcut = function (param1) {
            if (this.slot < 0 || this.slot > 99) {
                throw new Error('Forbidden value (' + this.slot + ') on element slot.');
            }
            param1.writeByte(this.slot);
        };
        Shortcut.prototype.deserialize = function (param1) {
            this.deserializeAs_Shortcut(param1);
        };
        Shortcut.prototype.deserializeAs_Shortcut = function (param1) {
            this.slot = param1.readByte();
            if (this.slot < 0 || this.slot > 99) {
                throw new Error('Forbidden value (' + this.slot + ') on element of Shortcut.slot.');
            }
        };
        Shortcut.ID = 369;
        return Shortcut;
    })();
    Protocol.Shortcut = Shortcut;
    var ShortcutEmote = (function (_super) {
        __extends(ShortcutEmote, _super);
        function ShortcutEmote() {
            this.emoteId = 0;
            _super.call(this);
        }
        ShortcutEmote.prototype.getTypeId = function () {
            return ShortcutEmote.ID;
        };
        ShortcutEmote.prototype.reset = function () {
            this.emoteId = 0;
        };
        ShortcutEmote.prototype.serialize = function (param1) {
            this.serializeAs_ShortcutEmote(param1);
        };
        ShortcutEmote.prototype.serializeAs_ShortcutEmote = function (param1) {
            _super.prototype.serializeAs_Shortcut.call(this, param1);
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
            }
            param1.writeByte(this.emoteId);
        };
        ShortcutEmote.prototype.deserialize = function (param1) {
            this.deserializeAs_ShortcutEmote(param1);
        };
        ShortcutEmote.prototype.deserializeAs_ShortcutEmote = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.emoteId = param1.readUnsignedByte();
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element of ShortcutEmote.emoteId.');
            }
        };
        ShortcutEmote.ID = 389;
        return ShortcutEmote;
    })(Shortcut);
    Protocol.ShortcutEmote = ShortcutEmote;
    var ShortcutObject = (function (_super) {
        __extends(ShortcutObject, _super);
        function ShortcutObject() {
            _super.call(this);
        }
        ShortcutObject.prototype.getTypeId = function () {
            return ShortcutObject.ID;
        };
        ShortcutObject.prototype.reset = function () {
        };
        ShortcutObject.prototype.serialize = function (param1) {
            this.serializeAs_ShortcutObject(param1);
        };
        ShortcutObject.prototype.serializeAs_ShortcutObject = function (param1) {
            _super.prototype.serializeAs_Shortcut.call(this, param1);
        };
        ShortcutObject.prototype.deserialize = function (param1) {
            this.deserializeAs_ShortcutObject(param1);
        };
        ShortcutObject.prototype.deserializeAs_ShortcutObject = function (param1) {
            _super.prototype.deserialize.call(this, param1);
        };
        ShortcutObject.ID = 367;
        return ShortcutObject;
    })(Shortcut);
    Protocol.ShortcutObject = ShortcutObject;
    var ShortcutObjectIdolsPreset = (function (_super) {
        __extends(ShortcutObjectIdolsPreset, _super);
        function ShortcutObjectIdolsPreset() {
            this.presetId = 0;
            _super.call(this);
        }
        ShortcutObjectIdolsPreset.prototype.getTypeId = function () {
            return ShortcutObjectIdolsPreset.ID;
        };
        ShortcutObjectIdolsPreset.prototype.reset = function () {
            this.presetId = 0;
        };
        ShortcutObjectIdolsPreset.prototype.serialize = function (param1) {
            this.serializeAs_ShortcutObjectIdolsPreset(param1);
        };
        ShortcutObjectIdolsPreset.prototype.serializeAs_ShortcutObjectIdolsPreset = function (param1) {
            _super.prototype.serializeAs_ShortcutObject.call(this, param1);
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
            }
            param1.writeByte(this.presetId);
        };
        ShortcutObjectIdolsPreset.prototype.deserialize = function (param1) {
            this.deserializeAs_ShortcutObjectIdolsPreset(param1);
        };
        ShortcutObjectIdolsPreset.prototype.deserializeAs_ShortcutObjectIdolsPreset = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of ShortcutObjectIdolsPreset.presetId.');
            }
        };
        ShortcutObjectIdolsPreset.ID = 492;
        return ShortcutObjectIdolsPreset;
    })(ShortcutObject);
    Protocol.ShortcutObjectIdolsPreset = ShortcutObjectIdolsPreset;
    var ShortcutObjectItem = (function (_super) {
        __extends(ShortcutObjectItem, _super);
        function ShortcutObjectItem() {
            this.itemUID = 0;
            this.itemGID = 0;
            _super.call(this);
        }
        ShortcutObjectItem.prototype.getTypeId = function () {
            return ShortcutObjectItem.ID;
        };
        ShortcutObjectItem.prototype.reset = function () {
            this.itemUID = 0;
            this.itemGID = 0;
        };
        ShortcutObjectItem.prototype.serialize = function (param1) {
            this.serializeAs_ShortcutObjectItem(param1);
        };
        ShortcutObjectItem.prototype.serializeAs_ShortcutObjectItem = function (param1) {
            _super.prototype.serializeAs_ShortcutObject.call(this, param1);
            param1.writeInt(this.itemUID);
            param1.writeInt(this.itemGID);
        };
        ShortcutObjectItem.prototype.deserialize = function (param1) {
            this.deserializeAs_ShortcutObjectItem(param1);
        };
        ShortcutObjectItem.prototype.deserializeAs_ShortcutObjectItem = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.itemUID = param1.readInt();
            this.itemGID = param1.readInt();
        };
        ShortcutObjectItem.ID = 371;
        return ShortcutObjectItem;
    })(ShortcutObject);
    Protocol.ShortcutObjectItem = ShortcutObjectItem;
    var ShortcutObjectPreset = (function (_super) {
        __extends(ShortcutObjectPreset, _super);
        function ShortcutObjectPreset() {
            this.presetId = 0;
            _super.call(this);
        }
        ShortcutObjectPreset.prototype.getTypeId = function () {
            return ShortcutObjectPreset.ID;
        };
        ShortcutObjectPreset.prototype.reset = function () {
            this.presetId = 0;
        };
        ShortcutObjectPreset.prototype.serialize = function (param1) {
            this.serializeAs_ShortcutObjectPreset(param1);
        };
        ShortcutObjectPreset.prototype.serializeAs_ShortcutObjectPreset = function (param1) {
            _super.prototype.serializeAs_ShortcutObject.call(this, param1);
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
            }
            param1.writeByte(this.presetId);
        };
        ShortcutObjectPreset.prototype.deserialize = function (param1) {
            this.deserializeAs_ShortcutObjectPreset(param1);
        };
        ShortcutObjectPreset.prototype.deserializeAs_ShortcutObjectPreset = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of ShortcutObjectPreset.presetId.');
            }
        };
        ShortcutObjectPreset.ID = 370;
        return ShortcutObjectPreset;
    })(ShortcutObject);
    Protocol.ShortcutObjectPreset = ShortcutObjectPreset;
    var ShortcutSmiley = (function (_super) {
        __extends(ShortcutSmiley, _super);
        function ShortcutSmiley() {
            this.smileyId = 0;
            _super.call(this);
        }
        ShortcutSmiley.prototype.getTypeId = function () {
            return ShortcutSmiley.ID;
        };
        ShortcutSmiley.prototype.reset = function () {
            this.smileyId = 0;
        };
        ShortcutSmiley.prototype.serialize = function (param1) {
            this.serializeAs_ShortcutSmiley(param1);
        };
        ShortcutSmiley.prototype.serializeAs_ShortcutSmiley = function (param1) {
            _super.prototype.serializeAs_Shortcut.call(this, param1);
            if (this.smileyId < 0) {
                throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
            }
            param1.writeVarShort(this.smileyId);
        };
        ShortcutSmiley.prototype.deserialize = function (param1) {
            this.deserializeAs_ShortcutSmiley(param1);
        };
        ShortcutSmiley.prototype.deserializeAs_ShortcutSmiley = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.smileyId = param1.readVarUhShort();
            if (this.smileyId < 0) {
                throw new Error('Forbidden value (' + this.smileyId + ') on element of ShortcutSmiley.smileyId.');
            }
        };
        ShortcutSmiley.ID = 388;
        return ShortcutSmiley;
    })(Shortcut);
    Protocol.ShortcutSmiley = ShortcutSmiley;
    var ShortcutSpell = (function (_super) {
        __extends(ShortcutSpell, _super);
        function ShortcutSpell() {
            this.spellId = 0;
            _super.call(this);
        }
        ShortcutSpell.prototype.getTypeId = function () {
            return ShortcutSpell.ID;
        };
        ShortcutSpell.prototype.reset = function () {
            this.spellId = 0;
        };
        ShortcutSpell.prototype.serialize = function (param1) {
            this.serializeAs_ShortcutSpell(param1);
        };
        ShortcutSpell.prototype.serializeAs_ShortcutSpell = function (param1) {
            _super.prototype.serializeAs_Shortcut.call(this, param1);
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
            }
            param1.writeVarShort(this.spellId);
        };
        ShortcutSpell.prototype.deserialize = function (param1) {
            this.deserializeAs_ShortcutSpell(param1);
        };
        ShortcutSpell.prototype.deserializeAs_ShortcutSpell = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.spellId = param1.readVarUhShort();
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element of ShortcutSpell.spellId.');
            }
        };
        ShortcutSpell.ID = 368;
        return ShortcutSpell;
    })(Shortcut);
    Protocol.ShortcutSpell = ShortcutSpell;
    var AbstractSocialGroupInfos = (function () {
        function AbstractSocialGroupInfos() {
        }
        AbstractSocialGroupInfos.prototype.getTypeId = function () {
            return AbstractSocialGroupInfos.ID;
        };
        AbstractSocialGroupInfos.prototype.reset = function () {
        };
        AbstractSocialGroupInfos.prototype.serialize = function (param1) {
            this.serializeAs_AbstractSocialGroupInfos(param1);
        };
        AbstractSocialGroupInfos.prototype.serializeAs_AbstractSocialGroupInfos = function (param1) {
        };
        AbstractSocialGroupInfos.prototype.deserialize = function (param1) {
            this.deserializeAs_AbstractSocialGroupInfos(param1);
        };
        AbstractSocialGroupInfos.prototype.deserializeAs_AbstractSocialGroupInfos = function (param1) {
        };
        AbstractSocialGroupInfos.ID = 416;
        return AbstractSocialGroupInfos;
    })();
    Protocol.AbstractSocialGroupInfos = AbstractSocialGroupInfos;
    var AllianceFactSheetInformations = (function (_super) {
        __extends(AllianceFactSheetInformations, _super);
        function AllianceFactSheetInformations() {
            this.creationDate = 0;
            _super.call(this);
        }
        AllianceFactSheetInformations.prototype.getTypeId = function () {
            return AllianceFactSheetInformations.ID;
        };
        AllianceFactSheetInformations.prototype.reset = function () {
            this.creationDate = 0;
        };
        AllianceFactSheetInformations.prototype.serialize = function (param1) {
            this.serializeAs_AllianceFactSheetInformations(param1);
        };
        AllianceFactSheetInformations.prototype.serializeAs_AllianceFactSheetInformations = function (param1) {
            _super.prototype.serializeAs_AllianceInformations.call(this, param1);
            if (this.creationDate < 0) {
                throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
            }
            param1.writeInt(this.creationDate);
        };
        AllianceFactSheetInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AllianceFactSheetInformations(param1);
        };
        AllianceFactSheetInformations.prototype.deserializeAs_AllianceFactSheetInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.creationDate = param1.readInt();
            if (this.creationDate < 0) {
                throw new Error('Forbidden value (' + this.creationDate + ') on element of AllianceFactSheetInformations.creationDate.');
            }
        };
        AllianceFactSheetInformations.ID = 421;
        return AllianceFactSheetInformations;
    })(AllianceInformations);
    Protocol.AllianceFactSheetInformations = AllianceFactSheetInformations;
    var AllianceVersatileInformations = (function () {
        function AllianceVersatileInformations() {
            this.allianceId = 0;
            this.nbGuilds = 0;
            this.nbMembers = 0;
            this.nbSubarea = 0;
        }
        AllianceVersatileInformations.prototype.getTypeId = function () {
            return AllianceVersatileInformations.ID;
        };
        AllianceVersatileInformations.prototype.reset = function () {
            this.allianceId = 0;
            this.nbGuilds = 0;
            this.nbMembers = 0;
            this.nbSubarea = 0;
        };
        AllianceVersatileInformations.prototype.serialize = function (param1) {
            this.serializeAs_AllianceVersatileInformations(param1);
        };
        AllianceVersatileInformations.prototype.serializeAs_AllianceVersatileInformations = function (param1) {
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
            }
            param1.writeVarInt(this.allianceId);
            if (this.nbGuilds < 0) {
                throw new Error('Forbidden value (' + this.nbGuilds + ') on element nbGuilds.');
            }
            param1.writeVarShort(this.nbGuilds);
            if (this.nbMembers < 0) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
            }
            param1.writeVarShort(this.nbMembers);
            if (this.nbSubarea < 0) {
                throw new Error('Forbidden value (' + this.nbSubarea + ') on element nbSubarea.');
            }
            param1.writeVarShort(this.nbSubarea);
        };
        AllianceVersatileInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AllianceVersatileInformations(param1);
        };
        AllianceVersatileInformations.prototype.deserializeAs_AllianceVersatileInformations = function (param1) {
            this.allianceId = param1.readVarUhInt();
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element of AllianceVersatileInformations.allianceId.');
            }
            this.nbGuilds = param1.readVarUhShort();
            if (this.nbGuilds < 0) {
                throw new Error('Forbidden value (' + this.nbGuilds + ') on element of AllianceVersatileInformations.nbGuilds.');
            }
            this.nbMembers = param1.readVarUhShort();
            if (this.nbMembers < 0) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element of AllianceVersatileInformations.nbMembers.');
            }
            this.nbSubarea = param1.readVarUhShort();
            if (this.nbSubarea < 0) {
                throw new Error('Forbidden value (' + this.nbSubarea + ') on element of AllianceVersatileInformations.nbSubarea.');
            }
        };
        AllianceVersatileInformations.ID = 432;
        return AllianceVersatileInformations;
    })();
    Protocol.AllianceVersatileInformations = AllianceVersatileInformations;
    var AlliancedGuildFactSheetInformations = (function (_super) {
        __extends(AlliancedGuildFactSheetInformations, _super);
        function AlliancedGuildFactSheetInformations() {
            this.allianceInfos = new BasicNamedAllianceInformations();
            _super.call(this);
        }
        AlliancedGuildFactSheetInformations.prototype.getTypeId = function () {
            return AlliancedGuildFactSheetInformations.ID;
        };
        AlliancedGuildFactSheetInformations.prototype.reset = function () {
            this.allianceInfos = new BasicNamedAllianceInformations();
        };
        AlliancedGuildFactSheetInformations.prototype.serialize = function (param1) {
            this.serializeAs_AlliancedGuildFactSheetInformations(param1);
        };
        AlliancedGuildFactSheetInformations.prototype.serializeAs_AlliancedGuildFactSheetInformations = function (param1) {
            _super.prototype.serializeAs_GuildInformations.call(this, param1);
            this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);
        };
        AlliancedGuildFactSheetInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_AlliancedGuildFactSheetInformations(param1);
        };
        AlliancedGuildFactSheetInformations.prototype.deserializeAs_AlliancedGuildFactSheetInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceInfos = new BasicNamedAllianceInformations();
            this.allianceInfos.deserialize(param1);
        };
        AlliancedGuildFactSheetInformations.ID = 422;
        return AlliancedGuildFactSheetInformations;
    })(GuildInformations);
    Protocol.AlliancedGuildFactSheetInformations = AlliancedGuildFactSheetInformations;
    var GuildFactSheetInformations = (function (_super) {
        __extends(GuildFactSheetInformations, _super);
        function GuildFactSheetInformations() {
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
            _super.call(this);
        }
        GuildFactSheetInformations.prototype.getTypeId = function () {
            return GuildFactSheetInformations.ID;
        };
        GuildFactSheetInformations.prototype.reset = function () {
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
        };
        GuildFactSheetInformations.prototype.serialize = function (param1) {
            this.serializeAs_GuildFactSheetInformations(param1);
        };
        GuildFactSheetInformations.prototype.serializeAs_GuildFactSheetInformations = function (param1) {
            _super.prototype.serializeAs_GuildInformations.call(this, param1);
            if (this.leaderId < 0) {
                throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
            }
            param1.writeVarInt(this.leaderId);
            if (this.guildLevel < 0 || this.guildLevel > 255) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
            }
            param1.writeByte(this.guildLevel);
            if (this.nbMembers < 0) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
            }
            param1.writeVarShort(this.nbMembers);
        };
        GuildFactSheetInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildFactSheetInformations(param1);
        };
        GuildFactSheetInformations.prototype.deserializeAs_GuildFactSheetInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.leaderId = param1.readVarUhInt();
            if (this.leaderId < 0) {
                throw new Error('Forbidden value (' + this.leaderId + ') on element of GuildFactSheetInformations.leaderId.');
            }
            this.guildLevel = param1.readUnsignedByte();
            if (this.guildLevel < 0 || this.guildLevel > 255) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildFactSheetInformations.guildLevel.');
            }
            this.nbMembers = param1.readVarUhShort();
            if (this.nbMembers < 0) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildFactSheetInformations.nbMembers.');
            }
        };
        GuildFactSheetInformations.ID = 424;
        return GuildFactSheetInformations;
    })(GuildInformations);
    Protocol.GuildFactSheetInformations = GuildFactSheetInformations;
    var GuildInAllianceVersatileInformations = (function (_super) {
        __extends(GuildInAllianceVersatileInformations, _super);
        function GuildInAllianceVersatileInformations() {
            this.allianceId = 0;
            _super.call(this);
        }
        GuildInAllianceVersatileInformations.prototype.getTypeId = function () {
            return GuildInAllianceVersatileInformations.ID;
        };
        GuildInAllianceVersatileInformations.prototype.reset = function () {
            this.allianceId = 0;
        };
        GuildInAllianceVersatileInformations.prototype.serialize = function (param1) {
            this.serializeAs_GuildInAllianceVersatileInformations(param1);
        };
        GuildInAllianceVersatileInformations.prototype.serializeAs_GuildInAllianceVersatileInformations = function (param1) {
            _super.prototype.serializeAs_GuildVersatileInformations.call(this, param1);
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
            }
            param1.writeVarInt(this.allianceId);
        };
        GuildInAllianceVersatileInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildInAllianceVersatileInformations(param1);
        };
        GuildInAllianceVersatileInformations.prototype.deserializeAs_GuildInAllianceVersatileInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.allianceId = param1.readVarUhInt();
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element of GuildInAllianceVersatileInformations.allianceId.');
            }
        };
        GuildInAllianceVersatileInformations.ID = 437;
        return GuildInAllianceVersatileInformations;
    })(GuildVersatileInformations);
    Protocol.GuildInAllianceVersatileInformations = GuildInAllianceVersatileInformations;
    var GuildInsiderFactSheetInformations = (function (_super) {
        __extends(GuildInsiderFactSheetInformations, _super);
        function GuildInsiderFactSheetInformations() {
            this.leaderName = '';
            this.nbConnectedMembers = 0;
            this.nbTaxCollectors = 0;
            this.lastActivity = 0;
            this.enabled = false;
            _super.call(this);
        }
        GuildInsiderFactSheetInformations.prototype.getTypeId = function () {
            return GuildInsiderFactSheetInformations.ID;
        };
        GuildInsiderFactSheetInformations.prototype.reset = function () {
            this.leaderName = '';
            this.nbConnectedMembers = 0;
            this.nbTaxCollectors = 0;
            this.lastActivity = 0;
            this.enabled = false;
        };
        GuildInsiderFactSheetInformations.prototype.serialize = function (param1) {
            this.serializeAs_GuildInsiderFactSheetInformations(param1);
        };
        GuildInsiderFactSheetInformations.prototype.serializeAs_GuildInsiderFactSheetInformations = function (param1) {
            _super.prototype.serializeAs_GuildFactSheetInformations.call(this, param1);
            param1.writeUTF(this.leaderName);
            if (this.nbConnectedMembers < 0) {
                throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element nbConnectedMembers.');
            }
            param1.writeVarShort(this.nbConnectedMembers);
            if (this.nbTaxCollectors < 0) {
                throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element nbTaxCollectors.');
            }
            param1.writeByte(this.nbTaxCollectors);
            if (this.lastActivity < 0) {
                throw new Error('Forbidden value (' + this.lastActivity + ') on element lastActivity.');
            }
            param1.writeInt(this.lastActivity);
            param1.writeBoolean(this.enabled);
        };
        GuildInsiderFactSheetInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildInsiderFactSheetInformations(param1);
        };
        GuildInsiderFactSheetInformations.prototype.deserializeAs_GuildInsiderFactSheetInformations = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.leaderName = param1.readUTF();
            this.nbConnectedMembers = param1.readVarUhShort();
            if (this.nbConnectedMembers < 0) {
                throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element of GuildInsiderFactSheetInformations.nbConnectedMembers.');
            }
            this.nbTaxCollectors = param1.readByte();
            if (this.nbTaxCollectors < 0) {
                throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element of GuildInsiderFactSheetInformations.nbTaxCollectors.');
            }
            this.lastActivity = param1.readInt();
            if (this.lastActivity < 0) {
                throw new Error('Forbidden value (' + this.lastActivity + ') on element of GuildInsiderFactSheetInformations.lastActivity.');
            }
            this.enabled = param1.readBoolean();
        };
        GuildInsiderFactSheetInformations.ID = 423;
        return GuildInsiderFactSheetInformations;
    })(GuildFactSheetInformations);
    Protocol.GuildInsiderFactSheetInformations = GuildInsiderFactSheetInformations;
    var GuildVersatileInformations = (function () {
        function GuildVersatileInformations() {
            this.guildId = 0;
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
        }
        GuildVersatileInformations.prototype.getTypeId = function () {
            return GuildVersatileInformations.ID;
        };
        GuildVersatileInformations.prototype.reset = function () {
            this.guildId = 0;
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
        };
        GuildVersatileInformations.prototype.serialize = function (param1) {
            this.serializeAs_GuildVersatileInformations(param1);
        };
        GuildVersatileInformations.prototype.serializeAs_GuildVersatileInformations = function (param1) {
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
            }
            param1.writeVarInt(this.guildId);
            if (this.leaderId < 0) {
                throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
            }
            param1.writeVarInt(this.leaderId);
            if (this.guildLevel < 1 || this.guildLevel > 200) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
            }
            param1.writeByte(this.guildLevel);
            if (this.nbMembers < 1 || this.nbMembers > 240) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
            }
            param1.writeByte(this.nbMembers);
        };
        GuildVersatileInformations.prototype.deserialize = function (param1) {
            this.deserializeAs_GuildVersatileInformations(param1);
        };
        GuildVersatileInformations.prototype.deserializeAs_GuildVersatileInformations = function (param1) {
            this.guildId = param1.readVarUhInt();
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element of GuildVersatileInformations.guildId.');
            }
            this.leaderId = param1.readVarUhInt();
            if (this.leaderId < 0) {
                throw new Error('Forbidden value (' + this.leaderId + ') on element of GuildVersatileInformations.leaderId.');
            }
            this.guildLevel = param1.readUnsignedByte();
            if (this.guildLevel < 1 || this.guildLevel > 200) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildVersatileInformations.guildLevel.');
            }
            this.nbMembers = param1.readUnsignedByte();
            if (this.nbMembers < 1 || this.nbMembers > 240) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildVersatileInformations.nbMembers.');
            }
        };
        GuildVersatileInformations.ID = 435;
        return GuildVersatileInformations;
    })();
    Protocol.GuildVersatileInformations = GuildVersatileInformations;
    var StartupActionAddObject = (function () {
        function StartupActionAddObject() {
            this.uid = 0;
            this.title = '';
            this.text = '';
            this.descUrl = '';
            this.pictureUrl = '';
            this.items = [];
        }
        StartupActionAddObject.prototype.getTypeId = function () {
            return StartupActionAddObject.ID;
        };
        StartupActionAddObject.prototype.reset = function () {
            this.uid = 0;
            this.title = '';
            this.text = '';
            this.descUrl = '';
            this.pictureUrl = '';
            this.items = [];
        };
        StartupActionAddObject.prototype.serialize = function (param1) {
            this.serializeAs_StartupActionAddObject(param1);
        };
        StartupActionAddObject.prototype.serializeAs_StartupActionAddObject = function (param1) {
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element uid.');
            }
            param1.writeInt(this.uid);
            param1.writeUTF(this.title);
            param1.writeUTF(this.text);
            param1.writeUTF(this.descUrl);
            param1.writeUTF(this.pictureUrl);
            param1.writeShort(this.items.length);
            var _loc2_ = 0;
            while (_loc2_ < this.items.length) {
                (this.items[_loc2_]).serializeAs_ObjectItemInformationWithQuantity(param1);
                _loc2_++;
            }
        };
        StartupActionAddObject.prototype.deserialize = function (param1) {
            this.deserializeAs_StartupActionAddObject(param1);
        };
        StartupActionAddObject.prototype.deserializeAs_StartupActionAddObject = function (param1) {
            var _loc4_ = null;
            this.uid = param1.readInt();
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element of StartupActionAddObject.uid.');
            }
            this.title = param1.readUTF();
            this.text = param1.readUTF();
            this.descUrl = param1.readUTF();
            this.pictureUrl = param1.readUTF();
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new ObjectItemInformationWithQuantity();
                _loc4_.deserialize(param1);
                this.items.push(_loc4_);
                _loc3_++;
            }
        };
        StartupActionAddObject.ID = 52;
        return StartupActionAddObject;
    })();
    Protocol.StartupActionAddObject = StartupActionAddObject;
    var TrustCertificate = (function () {
        function TrustCertificate() {
            this.id = 0;
            this.hash = '';
        }
        TrustCertificate.prototype.getTypeId = function () {
            return TrustCertificate.ID;
        };
        TrustCertificate.prototype.reset = function () {
            this.id = 0;
            this.hash = '';
        };
        TrustCertificate.prototype.serialize = function (param1) {
            this.serializeAs_TrustCertificate(param1);
        };
        TrustCertificate.prototype.serializeAs_TrustCertificate = function (param1) {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeInt(this.id);
            param1.writeUTF(this.hash);
        };
        TrustCertificate.prototype.deserialize = function (param1) {
            this.deserializeAs_TrustCertificate(param1);
        };
        TrustCertificate.prototype.deserializeAs_TrustCertificate = function (param1) {
            this.id = param1.readInt();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of TrustCertificate.id.');
            }
            this.hash = param1.readUTF();
        };
        TrustCertificate.ID = 377;
        return TrustCertificate;
    })();
    Protocol.TrustCertificate = TrustCertificate;
    var ContentPart = (function () {
        function ContentPart() {
            this.id = '';
            this.state = 0;
        }
        ContentPart.prototype.getTypeId = function () {
            return ContentPart.ID;
        };
        ContentPart.prototype.reset = function () {
            this.id = '';
            this.state = 0;
        };
        ContentPart.prototype.serialize = function (param1) {
            this.serializeAs_ContentPart(param1);
        };
        ContentPart.prototype.serializeAs_ContentPart = function (param1) {
            param1.writeUTF(this.id);
            param1.writeByte(this.state);
        };
        ContentPart.prototype.deserialize = function (param1) {
            this.deserializeAs_ContentPart(param1);
        };
        ContentPart.prototype.deserializeAs_ContentPart = function (param1) {
            this.id = param1.readUTF();
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of ContentPart.state.');
            }
        };
        ContentPart.ID = 350;
        return ContentPart;
    })();
    Protocol.ContentPart = ContentPart;
    var Version = (function () {
        function Version() {
            this.major = 0;
            this.minor = 0;
            this.release = 0;
            this.revision = 0;
            this.patch = 0;
            this.buildType = 0;
        }
        Version.prototype.getTypeId = function () {
            return Version.ID;
        };
        Version.prototype.reset = function () {
            this.major = 0;
            this.minor = 0;
            this.release = 0;
            this.revision = 0;
            this.patch = 0;
            this.buildType = 0;
        };
        Version.prototype.serialize = function (param1) {
            this.serializeAs_Version(param1);
        };
        Version.prototype.serializeAs_Version = function (param1) {
            if (this.major < 0) {
                throw new Error('Forbidden value (' + this.major + ') on element major.');
            }
            param1.writeByte(this.major);
            if (this.minor < 0) {
                throw new Error('Forbidden value (' + this.minor + ') on element minor.');
            }
            param1.writeByte(this.minor);
            if (this.release < 0) {
                throw new Error('Forbidden value (' + this.release + ') on element release.');
            }
            param1.writeByte(this.release);
            if (this.revision < 0) {
                throw new Error('Forbidden value (' + this.revision + ') on element revision.');
            }
            param1.writeInt(this.revision);
            if (this.patch < 0) {
                throw new Error('Forbidden value (' + this.patch + ') on element patch.');
            }
            param1.writeByte(this.patch);
            param1.writeByte(this.buildType);
        };
        Version.prototype.deserialize = function (param1) {
            this.deserializeAs_Version(param1);
        };
        Version.prototype.deserializeAs_Version = function (param1) {
            this.major = param1.readByte();
            if (this.major < 0) {
                throw new Error('Forbidden value (' + this.major + ') on element of Version.major.');
            }
            this.minor = param1.readByte();
            if (this.minor < 0) {
                throw new Error('Forbidden value (' + this.minor + ') on element of Version.minor.');
            }
            this.release = param1.readByte();
            if (this.release < 0) {
                throw new Error('Forbidden value (' + this.release + ') on element of Version.release.');
            }
            this.revision = param1.readInt();
            if (this.revision < 0) {
                throw new Error('Forbidden value (' + this.revision + ') on element of Version.revision.');
            }
            this.patch = param1.readByte();
            if (this.patch < 0) {
                throw new Error('Forbidden value (' + this.patch + ') on element of Version.patch.');
            }
            this.buildType = param1.readByte();
            if (this.buildType < 0) {
                throw new Error('Forbidden value (' + this.buildType + ') on element of Version.buildType.');
            }
        };
        Version.ID = 11;
        return Version;
    })();
    Protocol.Version = Version;
    var VersionExtended = (function (_super) {
        __extends(VersionExtended, _super);
        function VersionExtended() {
            this.install = 0;
            this.technology = 0;
            _super.call(this);
        }
        VersionExtended.prototype.getTypeId = function () {
            return VersionExtended.ID;
        };
        VersionExtended.prototype.reset = function () {
            this.install = 0;
            this.technology = 0;
        };
        VersionExtended.prototype.serialize = function (param1) {
            this.serializeAs_VersionExtended(param1);
        };
        VersionExtended.prototype.serializeAs_VersionExtended = function (param1) {
            _super.prototype.serializeAs_Version.call(this, param1);
            param1.writeByte(this.install);
            param1.writeByte(this.technology);
        };
        VersionExtended.prototype.deserialize = function (param1) {
            this.deserializeAs_VersionExtended(param1);
        };
        VersionExtended.prototype.deserializeAs_VersionExtended = function (param1) {
            _super.prototype.deserialize.call(this, param1);
            this.install = param1.readByte();
            if (this.install < 0) {
                throw new Error('Forbidden value (' + this.install + ') on element of VersionExtended.install.');
            }
            this.technology = param1.readByte();
            if (this.technology < 0) {
                throw new Error('Forbidden value (' + this.technology + ') on element of VersionExtended.technology.');
            }
        };
        VersionExtended.ID = 393;
        return VersionExtended;
    })(Version);
    Protocol.VersionExtended = VersionExtended;
    var KrosmasterFigure = (function () {
        function KrosmasterFigure() {
            this.uid = '';
            this.figure = 0;
            this.pedestal = 0;
            this.bound = false;
        }
        KrosmasterFigure.prototype.getTypeId = function () {
            return KrosmasterFigure.ID;
        };
        KrosmasterFigure.prototype.reset = function () {
            this.uid = '';
            this.figure = 0;
            this.pedestal = 0;
            this.bound = false;
        };
        KrosmasterFigure.prototype.serialize = function (param1) {
            this.serializeAs_KrosmasterFigure(param1);
        };
        KrosmasterFigure.prototype.serializeAs_KrosmasterFigure = function (param1) {
            param1.writeUTF(this.uid);
            if (this.figure < 0) {
                throw new Error('Forbidden value (' + this.figure + ') on element figure.');
            }
            param1.writeVarShort(this.figure);
            if (this.pedestal < 0) {
                throw new Error('Forbidden value (' + this.pedestal + ') on element pedestal.');
            }
            param1.writeVarShort(this.pedestal);
            param1.writeBoolean(this.bound);
        };
        KrosmasterFigure.prototype.deserialize = function (param1) {
            this.deserializeAs_KrosmasterFigure(param1);
        };
        KrosmasterFigure.prototype.deserializeAs_KrosmasterFigure = function (param1) {
            this.uid = param1.readUTF();
            this.figure = param1.readVarUhShort();
            if (this.figure < 0) {
                throw new Error('Forbidden value (' + this.figure + ') on element of KrosmasterFigure.figure.');
            }
            this.pedestal = param1.readVarUhShort();
            if (this.pedestal < 0) {
                throw new Error('Forbidden value (' + this.pedestal + ') on element of KrosmasterFigure.pedestal.');
            }
            this.bound = param1.readBoolean();
        };
        KrosmasterFigure.ID = 397;
        return KrosmasterFigure;
    })();
    Protocol.KrosmasterFigure = KrosmasterFigure;
    var MessageReceiver = (function () {
        function MessageReceiver() {
            MessageReceiver._list = {};
            MessageReceiver._list[AdminCommandMessage.ID] = function () { return new AdminCommandMessage(); };
            MessageReceiver._list[AdminQuietCommandMessage.ID] = function () { return new AdminQuietCommandMessage(); };
            MessageReceiver._list[ConsoleCommandsListMessage.ID] = function () { return new ConsoleCommandsListMessage(); };
            MessageReceiver._list[ConsoleMessage.ID] = function () { return new ConsoleMessage(); };
            MessageReceiver._list[NetworkDataContainerMessage.ID] = function () { return new NetworkDataContainerMessage(); };
            MessageReceiver._list[BasicPingMessage.ID] = function () { return new BasicPingMessage(); };
            MessageReceiver._list[BasicPongMessage.ID] = function () { return new BasicPongMessage(); };
            MessageReceiver._list[BasicStatMessage.ID] = function () { return new BasicStatMessage(); };
            MessageReceiver._list[CredentialsAcknowledgementMessage.ID] = function () { return new CredentialsAcknowledgementMessage(); };
            MessageReceiver._list[HelloConnectMessage.ID] = function () { return new HelloConnectMessage(); };
            MessageReceiver._list[IdentificationAccountForceMessage.ID] = function () { return new IdentificationAccountForceMessage(); };
            MessageReceiver._list[IdentificationFailedBannedMessage.ID] = function () { return new IdentificationFailedBannedMessage(); };
            MessageReceiver._list[IdentificationFailedForBadVersionMessage.ID] = function () { return new IdentificationFailedForBadVersionMessage(); };
            MessageReceiver._list[IdentificationFailedMessage.ID] = function () { return new IdentificationFailedMessage(); };
            MessageReceiver._list[IdentificationMessage.ID] = function () { return new IdentificationMessage(); };
            MessageReceiver._list[IdentificationSuccessMessage.ID] = function () { return new IdentificationSuccessMessage(); };
            MessageReceiver._list[IdentificationSuccessWithLoginTokenMessage.ID] = function () { return new IdentificationSuccessWithLoginTokenMessage(); };
            MessageReceiver._list[SelectedServerDataExtendedMessage.ID] = function () { return new SelectedServerDataExtendedMessage(); };
            MessageReceiver._list[SelectedServerDataMessage.ID] = function () { return new SelectedServerDataMessage(); };
            MessageReceiver._list[SelectedServerRefusedMessage.ID] = function () { return new SelectedServerRefusedMessage(); };
            MessageReceiver._list[ServerSelectionMessage.ID] = function () { return new ServerSelectionMessage(); };
            MessageReceiver._list[ServerStatusUpdateMessage.ID] = function () { return new ServerStatusUpdateMessage(); };
            MessageReceiver._list[ServersListMessage.ID] = function () { return new ServersListMessage(); };
            MessageReceiver._list[AccountLinkRequiredMessage.ID] = function () { return new AccountLinkRequiredMessage(); };
            MessageReceiver._list[NicknameAcceptedMessage.ID] = function () { return new NicknameAcceptedMessage(); };
            MessageReceiver._list[NicknameChoiceRequestMessage.ID] = function () { return new NicknameChoiceRequestMessage(); };
            MessageReceiver._list[NicknameRefusedMessage.ID] = function () { return new NicknameRefusedMessage(); };
            MessageReceiver._list[NicknameRegistrationMessage.ID] = function () { return new NicknameRegistrationMessage(); };
            MessageReceiver._list[AcquaintanceSearchErrorMessage.ID] = function () { return new AcquaintanceSearchErrorMessage(); };
            MessageReceiver._list[AcquaintanceSearchMessage.ID] = function () { return new AcquaintanceSearchMessage(); };
            MessageReceiver._list[AcquaintanceServerListMessage.ID] = function () { return new AcquaintanceServerListMessage(); };
            MessageReceiver._list[DebugClearHighlightCellsMessage.ID] = function () { return new DebugClearHighlightCellsMessage(); };
            MessageReceiver._list[DebugHighlightCellsMessage.ID] = function () { return new DebugHighlightCellsMessage(); };
            MessageReceiver._list[DebugInClientMessage.ID] = function () { return new DebugInClientMessage(); };
            MessageReceiver._list[ProtocolRequired.ID] = function () { return new ProtocolRequired(); };
            MessageReceiver._list[LoginQueueStatusMessage.ID] = function () { return new LoginQueueStatusMessage(); };
            MessageReceiver._list[QueueStatusMessage.ID] = function () { return new QueueStatusMessage(); };
            MessageReceiver._list[TrustStatusMessage.ID] = function () { return new TrustStatusMessage(); };
            MessageReceiver._list[CheckFileMessage.ID] = function () { return new CheckFileMessage(); };
            MessageReceiver._list[CheckFileRequestMessage.ID] = function () { return new CheckFileRequestMessage(); };
            MessageReceiver._list[CheckIntegrityMessage.ID] = function () { return new CheckIntegrityMessage(); };
            MessageReceiver._list[ClientKeyMessage.ID] = function () { return new ClientKeyMessage(); };
            MessageReceiver._list[RawDataMessage.ID] = function () { return new RawDataMessage(); };
            MessageReceiver._list[SystemMessageDisplayMessage.ID] = function () { return new SystemMessageDisplayMessage(); };
            MessageReceiver._list[DownloadCurrentSpeedMessage.ID] = function () { return new DownloadCurrentSpeedMessage(); };
            MessageReceiver._list[DownloadErrorMessage.ID] = function () { return new DownloadErrorMessage(); };
            MessageReceiver._list[DownloadGetCurrentSpeedRequestMessage.ID] = function () { return new DownloadGetCurrentSpeedRequestMessage(); };
            MessageReceiver._list[DownloadPartMessage.ID] = function () { return new DownloadPartMessage(); };
            MessageReceiver._list[DownloadSetSpeedRequestMessage.ID] = function () { return new DownloadSetSpeedRequestMessage(); };
            MessageReceiver._list[GetPartInfoMessage.ID] = function () { return new GetPartInfoMessage(); };
            MessageReceiver._list[GetPartsListMessage.ID] = function () { return new GetPartsListMessage(); };
            MessageReceiver._list[PartInfoMessage.ID] = function () { return new PartInfoMessage(); };
            MessageReceiver._list[PartsListMessage.ID] = function () { return new PartsListMessage(); };
            MessageReceiver._list[MailStatusMessage.ID] = function () { return new MailStatusMessage(); };
            MessageReceiver._list[NewMailMessage.ID] = function () { return new NewMailMessage(); };
            MessageReceiver._list[KrosmasterAuthTokenErrorMessage.ID] = function () { return new KrosmasterAuthTokenErrorMessage(); };
            MessageReceiver._list[KrosmasterAuthTokenMessage.ID] = function () { return new KrosmasterAuthTokenMessage(); };
            MessageReceiver._list[KrosmasterAuthTokenRequestMessage.ID] = function () { return new KrosmasterAuthTokenRequestMessage(); };
            MessageReceiver._list[KrosmasterInventoryErrorMessage.ID] = function () { return new KrosmasterInventoryErrorMessage(); };
            MessageReceiver._list[KrosmasterInventoryMessage.ID] = function () { return new KrosmasterInventoryMessage(); };
            MessageReceiver._list[KrosmasterInventoryRequestMessage.ID] = function () { return new KrosmasterInventoryRequestMessage(); };
            MessageReceiver._list[KrosmasterPlayingStatusMessage.ID] = function () { return new KrosmasterPlayingStatusMessage(); };
            MessageReceiver._list[KrosmasterTransferMessage.ID] = function () { return new KrosmasterTransferMessage(); };
            MessageReceiver._list[KrosmasterTransferRequestMessage.ID] = function () { return new KrosmasterTransferRequestMessage(); };
            MessageReceiver._list[ClientYouAreDrunkMessage.ID] = function () { return new ClientYouAreDrunkMessage(); };
        }
        MessageReceiver.parse = function (param1, param2, param3) {
            var _loc4_ = MessageReceiver._list[param2];
            if (!_loc4_) {
                console.log('Unknown packet received (ID ' + param2 + ', length ' + param3 + ')');
                return null;
            }
            var _loc5_ = _loc4_();
            _loc5_.unpack(param1, param3);
            return _loc5_;
        };
        return MessageReceiver;
    })();
    Protocol.MessageReceiver = MessageReceiver;
    var ProtocolTypeManager = (function () {
        function ProtocolTypeManager() {
            ProtocolTypeManager._list = {};
            ProtocolTypeManager._list[StatisticData.ID] = function () { return new StatisticData(); };
            ProtocolTypeManager._list[StatisticDataBoolean.ID] = function () { return new StatisticDataBoolean(); };
            ProtocolTypeManager._list[StatisticDataByte.ID] = function () { return new StatisticDataByte(); };
            ProtocolTypeManager._list[StatisticDataInt.ID] = function () { return new StatisticDataInt(); };
            ProtocolTypeManager._list[StatisticDataShort.ID] = function () { return new StatisticDataShort(); };
            ProtocolTypeManager._list[StatisticDataString.ID] = function () { return new StatisticDataString(); };
            ProtocolTypeManager._list[GameServerInformations.ID] = function () { return new GameServerInformations(); };
            ProtocolTypeManager._list[Achievement.ID] = function () { return new Achievement(); };
            ProtocolTypeManager._list[AchievementObjective.ID] = function () { return new AchievementObjective(); };
            ProtocolTypeManager._list[AchievementRewardable.ID] = function () { return new AchievementRewardable(); };
            ProtocolTypeManager._list[AchievementStartedObjective.ID] = function () { return new AchievementStartedObjective(); };
            ProtocolTypeManager._list[FightDispellableEffectExtendedInformations.ID] = function () { return new FightDispellableEffectExtendedInformations(); };
            ProtocolTypeManager._list[AbstractFightDispellableEffect.ID] = function () { return new AbstractFightDispellableEffect(); };
            ProtocolTypeManager._list[FightTemporaryBoostEffect.ID] = function () { return new FightTemporaryBoostEffect(); };
            ProtocolTypeManager._list[FightTemporaryBoostStateEffect.ID] = function () { return new FightTemporaryBoostStateEffect(); };
            ProtocolTypeManager._list[FightTemporaryBoostWeaponDamagesEffect.ID] = function () { return new FightTemporaryBoostWeaponDamagesEffect(); };
            ProtocolTypeManager._list[FightTemporarySpellBoostEffect.ID] = function () { return new FightTemporarySpellBoostEffect(); };
            ProtocolTypeManager._list[FightTemporarySpellImmunityEffect.ID] = function () { return new FightTemporarySpellImmunityEffect(); };
            ProtocolTypeManager._list[FightTriggeredEffect.ID] = function () { return new FightTriggeredEffect(); };
            ProtocolTypeManager._list[GameActionMark.ID] = function () { return new GameActionMark(); };
            ProtocolTypeManager._list[GameActionMarkedCell.ID] = function () { return new GameActionMarkedCell(); };
            ProtocolTypeManager._list[ServerSessionConstant.ID] = function () { return new ServerSessionConstant(); };
            ProtocolTypeManager._list[ServerSessionConstantInteger.ID] = function () { return new ServerSessionConstantInteger(); };
            ProtocolTypeManager._list[ServerSessionConstantLong.ID] = function () { return new ServerSessionConstantLong(); };
            ProtocolTypeManager._list[ServerSessionConstantString.ID] = function () { return new ServerSessionConstantString(); };
            ProtocolTypeManager._list[AbstractCharacterInformation.ID] = function () { return new AbstractCharacterInformation(); };
            ProtocolTypeManager._list[CharacterMinimalAllianceInformations.ID] = function () { return new CharacterMinimalAllianceInformations(); };
            ProtocolTypeManager._list[CharacterMinimalGuildInformations.ID] = function () { return new CharacterMinimalGuildInformations(); };
            ProtocolTypeManager._list[CharacterMinimalInformations.ID] = function () { return new CharacterMinimalInformations(); };
            ProtocolTypeManager._list[CharacterMinimalPlusLookAndGradeInformations.ID] = function () { return new CharacterMinimalPlusLookAndGradeInformations(); };
            ProtocolTypeManager._list[CharacterMinimalPlusLookInformations.ID] = function () { return new CharacterMinimalPlusLookInformations(); };
            ProtocolTypeManager._list[ActorAlignmentInformations.ID] = function () { return new ActorAlignmentInformations(); };
            ProtocolTypeManager._list[ActorExtendedAlignmentInformations.ID] = function () { return new ActorExtendedAlignmentInformations(); };
            ProtocolTypeManager._list[CharacterBaseCharacteristic.ID] = function () { return new CharacterBaseCharacteristic(); };
            ProtocolTypeManager._list[CharacterCharacteristicsInformations.ID] = function () { return new CharacterCharacteristicsInformations(); };
            ProtocolTypeManager._list[CharacterSpellModification.ID] = function () { return new CharacterSpellModification(); };
            ProtocolTypeManager._list[AbstractCharacterToRefurbishInformation.ID] = function () { return new AbstractCharacterToRefurbishInformation(); };
            ProtocolTypeManager._list[CharacterBaseInformations.ID] = function () { return new CharacterBaseInformations(); };
            ProtocolTypeManager._list[CharacterHardcoreOrEpicInformations.ID] = function () { return new CharacterHardcoreOrEpicInformations(); };
            ProtocolTypeManager._list[CharacterRemodelingInformation.ID] = function () { return new CharacterRemodelingInformation(); };
            ProtocolTypeManager._list[CharacterToRecolorInformation.ID] = function () { return new CharacterToRecolorInformation(); };
            ProtocolTypeManager._list[CharacterToRelookInformation.ID] = function () { return new CharacterToRelookInformation(); };
            ProtocolTypeManager._list[CharacterToRemodelInformations.ID] = function () { return new CharacterToRemodelInformations(); };
            ProtocolTypeManager._list[RemodelingInformation.ID] = function () { return new RemodelingInformation(); };
            ProtocolTypeManager._list[ActorRestrictionsInformations.ID] = function () { return new ActorRestrictionsInformations(); };
            ProtocolTypeManager._list[PlayerStatus.ID] = function () { return new PlayerStatus(); };
            ProtocolTypeManager._list[PlayerStatusExtended.ID] = function () { return new PlayerStatusExtended(); };
            ProtocolTypeManager._list[ActorOrientation.ID] = function () { return new ActorOrientation(); };
            ProtocolTypeManager._list[EntityDispositionInformations.ID] = function () { return new EntityDispositionInformations(); };
            ProtocolTypeManager._list[EntityMovementInformations.ID] = function () { return new EntityMovementInformations(); };
            ProtocolTypeManager._list[FightEntityDispositionInformations.ID] = function () { return new FightEntityDispositionInformations(); };
            ProtocolTypeManager._list[GameContextActorInformations.ID] = function () { return new GameContextActorInformations(); };
            ProtocolTypeManager._list[GameRolePlayTaxCollectorInformations.ID] = function () { return new GameRolePlayTaxCollectorInformations(); };
            ProtocolTypeManager._list[IdentifiedEntityDispositionInformations.ID] = function () { return new IdentifiedEntityDispositionInformations(); };
            ProtocolTypeManager._list[MapCoordinates.ID] = function () { return new MapCoordinates(); };
            ProtocolTypeManager._list[MapCoordinatesAndId.ID] = function () { return new MapCoordinatesAndId(); };
            ProtocolTypeManager._list[MapCoordinatesExtended.ID] = function () { return new MapCoordinatesExtended(); };
            ProtocolTypeManager._list[TaxCollectorStaticExtendedInformations.ID] = function () { return new TaxCollectorStaticExtendedInformations(); };
            ProtocolTypeManager._list[TaxCollectorStaticInformations.ID] = function () { return new TaxCollectorStaticInformations(); };
            ProtocolTypeManager._list[AbstractFightTeamInformations.ID] = function () { return new AbstractFightTeamInformations(); };
            ProtocolTypeManager._list[FightAllianceTeamInformations.ID] = function () { return new FightAllianceTeamInformations(); };
            ProtocolTypeManager._list[FightCommonInformations.ID] = function () { return new FightCommonInformations(); };
            ProtocolTypeManager._list[FightExternalInformations.ID] = function () { return new FightExternalInformations(); };
            ProtocolTypeManager._list[FightLoot.ID] = function () { return new FightLoot(); };
            ProtocolTypeManager._list[FightOptionsInformations.ID] = function () { return new FightOptionsInformations(); };
            ProtocolTypeManager._list[FightResultAdditionalData.ID] = function () { return new FightResultAdditionalData(); };
            ProtocolTypeManager._list[FightResultExperienceData.ID] = function () { return new FightResultExperienceData(); };
            ProtocolTypeManager._list[FightResultFighterListEntry.ID] = function () { return new FightResultFighterListEntry(); };
            ProtocolTypeManager._list[FightResultListEntry.ID] = function () { return new FightResultListEntry(); };
            ProtocolTypeManager._list[FightResultMutantListEntry.ID] = function () { return new FightResultMutantListEntry(); };
            ProtocolTypeManager._list[FightResultPlayerListEntry.ID] = function () { return new FightResultPlayerListEntry(); };
            ProtocolTypeManager._list[FightResultPvpData.ID] = function () { return new FightResultPvpData(); };
            ProtocolTypeManager._list[FightResultTaxCollectorListEntry.ID] = function () { return new FightResultTaxCollectorListEntry(); };
            ProtocolTypeManager._list[FightTeamInformations.ID] = function () { return new FightTeamInformations(); };
            ProtocolTypeManager._list[FightTeamLightInformations.ID] = function () { return new FightTeamLightInformations(); };
            ProtocolTypeManager._list[FightTeamMemberCharacterInformations.ID] = function () { return new FightTeamMemberCharacterInformations(); };
            ProtocolTypeManager._list[FightTeamMemberCompanionInformations.ID] = function () { return new FightTeamMemberCompanionInformations(); };
            ProtocolTypeManager._list[FightTeamMemberInformations.ID] = function () { return new FightTeamMemberInformations(); };
            ProtocolTypeManager._list[FightTeamMemberMonsterInformations.ID] = function () { return new FightTeamMemberMonsterInformations(); };
            ProtocolTypeManager._list[FightTeamMemberTaxCollectorInformations.ID] = function () { return new FightTeamMemberTaxCollectorInformations(); };
            ProtocolTypeManager._list[FightTeamMemberWithAllianceCharacterInformations.ID] = function () { return new FightTeamMemberWithAllianceCharacterInformations(); };
            ProtocolTypeManager._list[GameFightAIInformations.ID] = function () { return new GameFightAIInformations(); };
            ProtocolTypeManager._list[GameFightCharacterInformations.ID] = function () { return new GameFightCharacterInformations(); };
            ProtocolTypeManager._list[GameFightCompanionInformations.ID] = function () { return new GameFightCompanionInformations(); };
            ProtocolTypeManager._list[GameFightFighterCompanionLightInformations.ID] = function () { return new GameFightFighterCompanionLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterInformations.ID] = function () { return new GameFightFighterInformations(); };
            ProtocolTypeManager._list[GameFightFighterLightInformations.ID] = function () { return new GameFightFighterLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterMonsterLightInformations.ID] = function () { return new GameFightFighterMonsterLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterNamedInformations.ID] = function () { return new GameFightFighterNamedInformations(); };
            ProtocolTypeManager._list[GameFightFighterNamedLightInformations.ID] = function () { return new GameFightFighterNamedLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterTaxCollectorLightInformations.ID] = function () { return new GameFightFighterTaxCollectorLightInformations(); };
            ProtocolTypeManager._list[GameFightMinimalStats.ID] = function () { return new GameFightMinimalStats(); };
            ProtocolTypeManager._list[GameFightMinimalStatsPreparation.ID] = function () { return new GameFightMinimalStatsPreparation(); };
            ProtocolTypeManager._list[GameFightMonsterInformations.ID] = function () { return new GameFightMonsterInformations(); };
            ProtocolTypeManager._list[GameFightMonsterWithAlignmentInformations.ID] = function () { return new GameFightMonsterWithAlignmentInformations(); };
            ProtocolTypeManager._list[GameFightMutantInformations.ID] = function () { return new GameFightMutantInformations(); };
            ProtocolTypeManager._list[GameFightResumeSlaveInfo.ID] = function () { return new GameFightResumeSlaveInfo(); };
            ProtocolTypeManager._list[GameFightSpellCooldown.ID] = function () { return new GameFightSpellCooldown(); };
            ProtocolTypeManager._list[GameFightTaxCollectorInformations.ID] = function () { return new GameFightTaxCollectorInformations(); };
            ProtocolTypeManager._list[AllianceInformations.ID] = function () { return new AllianceInformations(); };
            ProtocolTypeManager._list[AlternativeMonstersInGroupLightInformations.ID] = function () { return new AlternativeMonstersInGroupLightInformations(); };
            ProtocolTypeManager._list[AtlasPointsInformations.ID] = function () { return new AtlasPointsInformations(); };
            ProtocolTypeManager._list[BasicAllianceInformations.ID] = function () { return new BasicAllianceInformations(); };
            ProtocolTypeManager._list[BasicGuildInformations.ID] = function () { return new BasicGuildInformations(); };
            ProtocolTypeManager._list[BasicNamedAllianceInformations.ID] = function () { return new BasicNamedAllianceInformations(); };
            ProtocolTypeManager._list[GameRolePlayActorInformations.ID] = function () { return new GameRolePlayActorInformations(); };
            ProtocolTypeManager._list[GameRolePlayCharacterInformations.ID] = function () { return new GameRolePlayCharacterInformations(); };
            ProtocolTypeManager._list[GameRolePlayGroupMonsterInformations.ID] = function () { return new GameRolePlayGroupMonsterInformations(); };
            ProtocolTypeManager._list[GameRolePlayGroupMonsterWaveInformations.ID] = function () { return new GameRolePlayGroupMonsterWaveInformations(); };
            ProtocolTypeManager._list[GameRolePlayHumanoidInformations.ID] = function () { return new GameRolePlayHumanoidInformations(); };
            ProtocolTypeManager._list[GameRolePlayMerchantInformations.ID] = function () { return new GameRolePlayMerchantInformations(); };
            ProtocolTypeManager._list[GameRolePlayMountInformations.ID] = function () { return new GameRolePlayMountInformations(); };
            ProtocolTypeManager._list[GameRolePlayMutantInformations.ID] = function () { return new GameRolePlayMutantInformations(); };
            ProtocolTypeManager._list[GameRolePlayNamedActorInformations.ID] = function () { return new GameRolePlayNamedActorInformations(); };
            ProtocolTypeManager._list[GameRolePlayNpcInformations.ID] = function () { return new GameRolePlayNpcInformations(); };
            ProtocolTypeManager._list[GameRolePlayNpcWithQuestInformations.ID] = function () { return new GameRolePlayNpcWithQuestInformations(); };
            ProtocolTypeManager._list[GameRolePlayPortalInformations.ID] = function () { return new GameRolePlayPortalInformations(); };
            ProtocolTypeManager._list[GameRolePlayPrismInformations.ID] = function () { return new GameRolePlayPrismInformations(); };
            ProtocolTypeManager._list[GameRolePlayTreasureHintInformations.ID] = function () { return new GameRolePlayTreasureHintInformations(); };
            ProtocolTypeManager._list[GroupMonsterStaticInformations.ID] = function () { return new GroupMonsterStaticInformations(); };
            ProtocolTypeManager._list[GroupMonsterStaticInformationsWithAlternatives.ID] = function () { return new GroupMonsterStaticInformationsWithAlternatives(); };
            ProtocolTypeManager._list[GuildInAllianceInformations.ID] = function () { return new GuildInAllianceInformations(); };
            ProtocolTypeManager._list[GuildInformations.ID] = function () { return new GuildInformations(); };
            ProtocolTypeManager._list[HumanInformations.ID] = function () { return new HumanInformations(); };
            ProtocolTypeManager._list[HumanOption.ID] = function () { return new HumanOption(); };
            ProtocolTypeManager._list[HumanOptionAlliance.ID] = function () { return new HumanOptionAlliance(); };
            ProtocolTypeManager._list[HumanOptionEmote.ID] = function () { return new HumanOptionEmote(); };
            ProtocolTypeManager._list[HumanOptionFollowers.ID] = function () { return new HumanOptionFollowers(); };
            ProtocolTypeManager._list[HumanOptionGuild.ID] = function () { return new HumanOptionGuild(); };
            ProtocolTypeManager._list[HumanOptionObjectUse.ID] = function () { return new HumanOptionObjectUse(); };
            ProtocolTypeManager._list[HumanOptionOrnament.ID] = function () { return new HumanOptionOrnament(); };
            ProtocolTypeManager._list[HumanOptionTitle.ID] = function () { return new HumanOptionTitle(); };
            ProtocolTypeManager._list[MonsterInGroupInformations.ID] = function () { return new MonsterInGroupInformations(); };
            ProtocolTypeManager._list[MonsterInGroupLightInformations.ID] = function () { return new MonsterInGroupLightInformations(); };
            ProtocolTypeManager._list[ObjectItemInRolePlay.ID] = function () { return new ObjectItemInRolePlay(); };
            ProtocolTypeManager._list[DecraftedItemStackInfo.ID] = function () { return new DecraftedItemStackInfo(); };
            ProtocolTypeManager._list[JobCrafterDirectoryEntryJobInfo.ID] = function () { return new JobCrafterDirectoryEntryJobInfo(); };
            ProtocolTypeManager._list[JobCrafterDirectoryEntryPlayerInfo.ID] = function () { return new JobCrafterDirectoryEntryPlayerInfo(); };
            ProtocolTypeManager._list[JobCrafterDirectoryListEntry.ID] = function () { return new JobCrafterDirectoryListEntry(); };
            ProtocolTypeManager._list[JobCrafterDirectorySettings.ID] = function () { return new JobCrafterDirectorySettings(); };
            ProtocolTypeManager._list[JobDescription.ID] = function () { return new JobDescription(); };
            ProtocolTypeManager._list[JobExperience.ID] = function () { return new JobExperience(); };
            ProtocolTypeManager._list[DungeonPartyFinderPlayer.ID] = function () { return new DungeonPartyFinderPlayer(); };
            ProtocolTypeManager._list[NamedPartyTeam.ID] = function () { return new NamedPartyTeam(); };
            ProtocolTypeManager._list[NamedPartyTeamWithOutcome.ID] = function () { return new NamedPartyTeamWithOutcome(); };
            ProtocolTypeManager._list[PartyGuestInformations.ID] = function () { return new PartyGuestInformations(); };
            ProtocolTypeManager._list[PartyInvitationMemberInformations.ID] = function () { return new PartyInvitationMemberInformations(); };
            ProtocolTypeManager._list[PartyMemberArenaInformations.ID] = function () { return new PartyMemberArenaInformations(); };
            ProtocolTypeManager._list[PartyMemberGeoPosition.ID] = function () { return new PartyMemberGeoPosition(); };
            ProtocolTypeManager._list[PartyMemberInformations.ID] = function () { return new PartyMemberInformations(); };
            ProtocolTypeManager._list[PartyCompanionBaseInformations.ID] = function () { return new PartyCompanionBaseInformations(); };
            ProtocolTypeManager._list[PartyCompanionMemberInformations.ID] = function () { return new PartyCompanionMemberInformations(); };
            ProtocolTypeManager._list[GameRolePlayNpcQuestFlag.ID] = function () { return new GameRolePlayNpcQuestFlag(); };
            ProtocolTypeManager._list[QuestActiveDetailedInformations.ID] = function () { return new QuestActiveDetailedInformations(); };
            ProtocolTypeManager._list[QuestActiveInformations.ID] = function () { return new QuestActiveInformations(); };
            ProtocolTypeManager._list[QuestObjectiveInformations.ID] = function () { return new QuestObjectiveInformations(); };
            ProtocolTypeManager._list[QuestObjectiveInformationsWithCompletion.ID] = function () { return new QuestObjectiveInformationsWithCompletion(); };
            ProtocolTypeManager._list[PortalInformation.ID] = function () { return new PortalInformation(); };
            ProtocolTypeManager._list[TreasureHuntFlag.ID] = function () { return new TreasureHuntFlag(); };
            ProtocolTypeManager._list[TreasureHuntStep.ID] = function () { return new TreasureHuntStep(); };
            ProtocolTypeManager._list[TreasureHuntStepDig.ID] = function () { return new TreasureHuntStepDig(); };
            ProtocolTypeManager._list[TreasureHuntStepFight.ID] = function () { return new TreasureHuntStepFight(); };
            ProtocolTypeManager._list[TreasureHuntStepFollowDirection.ID] = function () { return new TreasureHuntStepFollowDirection(); };
            ProtocolTypeManager._list[TreasureHuntStepFollowDirectionToHint.ID] = function () { return new TreasureHuntStepFollowDirectionToHint(); };
            ProtocolTypeManager._list[TreasureHuntStepFollowDirectionToPOI.ID] = function () { return new TreasureHuntStepFollowDirectionToPOI(); };
            ProtocolTypeManager._list[BidExchangerObjectInfo.ID] = function () { return new BidExchangerObjectInfo(); };
            ProtocolTypeManager._list[GoldItem.ID] = function () { return new GoldItem(); };
            ProtocolTypeManager._list[Item.ID] = function () { return new Item(); };
            ProtocolTypeManager._list[ObjectItem.ID] = function () { return new ObjectItem(); };
            ProtocolTypeManager._list[ObjectItemGenericQuantity.ID] = function () { return new ObjectItemGenericQuantity(); };
            ProtocolTypeManager._list[ObjectItemInformationWithQuantity.ID] = function () { return new ObjectItemInformationWithQuantity(); };
            ProtocolTypeManager._list[ObjectItemMinimalInformation.ID] = function () { return new ObjectItemMinimalInformation(); };
            ProtocolTypeManager._list[ObjectItemNotInContainer.ID] = function () { return new ObjectItemNotInContainer(); };
            ProtocolTypeManager._list[ObjectItemQuantity.ID] = function () { return new ObjectItemQuantity(); };
            ProtocolTypeManager._list[ObjectItemToSell.ID] = function () { return new ObjectItemToSell(); };
            ProtocolTypeManager._list[ObjectItemToSellInBid.ID] = function () { return new ObjectItemToSellInBid(); };
            ProtocolTypeManager._list[ObjectItemToSellInHumanVendorShop.ID] = function () { return new ObjectItemToSellInHumanVendorShop(); };
            ProtocolTypeManager._list[ObjectItemToSellInNpcShop.ID] = function () { return new ObjectItemToSellInNpcShop(); };
            ProtocolTypeManager._list[SellerBuyerDescriptor.ID] = function () { return new SellerBuyerDescriptor(); };
            ProtocolTypeManager._list[SpellItem.ID] = function () { return new SpellItem(); };
            ProtocolTypeManager._list[ObjectEffect.ID] = function () { return new ObjectEffect(); };
            ProtocolTypeManager._list[ObjectEffectCreature.ID] = function () { return new ObjectEffectCreature(); };
            ProtocolTypeManager._list[ObjectEffectDate.ID] = function () { return new ObjectEffectDate(); };
            ProtocolTypeManager._list[ObjectEffectDice.ID] = function () { return new ObjectEffectDice(); };
            ProtocolTypeManager._list[ObjectEffectDuration.ID] = function () { return new ObjectEffectDuration(); };
            ProtocolTypeManager._list[ObjectEffectInteger.ID] = function () { return new ObjectEffectInteger(); };
            ProtocolTypeManager._list[ObjectEffectLadder.ID] = function () { return new ObjectEffectLadder(); };
            ProtocolTypeManager._list[ObjectEffectMinMax.ID] = function () { return new ObjectEffectMinMax(); };
            ProtocolTypeManager._list[ObjectEffectMount.ID] = function () { return new ObjectEffectMount(); };
            ProtocolTypeManager._list[ObjectEffectString.ID] = function () { return new ObjectEffectString(); };
            ProtocolTypeManager._list[ProtectedEntityWaitingForHelpInfo.ID] = function () { return new ProtectedEntityWaitingForHelpInfo(); };
            ProtocolTypeManager._list[AbstractContactInformations.ID] = function () { return new AbstractContactInformations(); };
            ProtocolTypeManager._list[FriendInformations.ID] = function () { return new FriendInformations(); };
            ProtocolTypeManager._list[FriendOnlineInformations.ID] = function () { return new FriendOnlineInformations(); };
            ProtocolTypeManager._list[FriendSpouseInformations.ID] = function () { return new FriendSpouseInformations(); };
            ProtocolTypeManager._list[FriendSpouseOnlineInformations.ID] = function () { return new FriendSpouseOnlineInformations(); };
            ProtocolTypeManager._list[IgnoredInformations.ID] = function () { return new IgnoredInformations(); };
            ProtocolTypeManager._list[IgnoredOnlineInformations.ID] = function () { return new IgnoredOnlineInformations(); };
            ProtocolTypeManager._list[GuildEmblem.ID] = function () { return new GuildEmblem(); };
            ProtocolTypeManager._list[GuildMember.ID] = function () { return new GuildMember(); };
            ProtocolTypeManager._list[AdditionalTaxCollectorInformations.ID] = function () { return new AdditionalTaxCollectorInformations(); };
            ProtocolTypeManager._list[TaxCollectorBasicInformations.ID] = function () { return new TaxCollectorBasicInformations(); };
            ProtocolTypeManager._list[TaxCollectorComplementaryInformations.ID] = function () { return new TaxCollectorComplementaryInformations(); };
            ProtocolTypeManager._list[TaxCollectorFightersInformation.ID] = function () { return new TaxCollectorFightersInformation(); };
            ProtocolTypeManager._list[TaxCollectorGuildInformations.ID] = function () { return new TaxCollectorGuildInformations(); };
            ProtocolTypeManager._list[TaxCollectorInformations.ID] = function () { return new TaxCollectorInformations(); };
            ProtocolTypeManager._list[TaxCollectorLootInformations.ID] = function () { return new TaxCollectorLootInformations(); };
            ProtocolTypeManager._list[TaxCollectorWaitingForHelpInformations.ID] = function () { return new TaxCollectorWaitingForHelpInformations(); };
            ProtocolTypeManager._list[AccountHouseInformations.ID] = function () { return new AccountHouseInformations(); };
            ProtocolTypeManager._list[HouseInformations.ID] = function () { return new HouseInformations(); };
            ProtocolTypeManager._list[HouseInformationsExtended.ID] = function () { return new HouseInformationsExtended(); };
            ProtocolTypeManager._list[HouseInformationsForGuild.ID] = function () { return new HouseInformationsForGuild(); };
            ProtocolTypeManager._list[HouseInformationsForSell.ID] = function () { return new HouseInformationsForSell(); };
            ProtocolTypeManager._list[HouseInformationsInside.ID] = function () { return new HouseInformationsInside(); };
            ProtocolTypeManager._list[Idol.ID] = function () { return new Idol(); };
            ProtocolTypeManager._list[PartyIdol.ID] = function () { return new PartyIdol(); };
            ProtocolTypeManager._list[InteractiveElement.ID] = function () { return new InteractiveElement(); };
            ProtocolTypeManager._list[InteractiveElementNamedSkill.ID] = function () { return new InteractiveElementNamedSkill(); };
            ProtocolTypeManager._list[InteractiveElementSkill.ID] = function () { return new InteractiveElementSkill(); };
            ProtocolTypeManager._list[InteractiveElementWithAgeBonus.ID] = function () { return new InteractiveElementWithAgeBonus(); };
            ProtocolTypeManager._list[MapObstacle.ID] = function () { return new MapObstacle(); };
            ProtocolTypeManager._list[StatedElement.ID] = function () { return new StatedElement(); };
            ProtocolTypeManager._list[SkillActionDescription.ID] = function () { return new SkillActionDescription(); };
            ProtocolTypeManager._list[SkillActionDescriptionCollect.ID] = function () { return new SkillActionDescriptionCollect(); };
            ProtocolTypeManager._list[SkillActionDescriptionCraft.ID] = function () { return new SkillActionDescriptionCraft(); };
            ProtocolTypeManager._list[SkillActionDescriptionTimed.ID] = function () { return new SkillActionDescriptionTimed(); };
            ProtocolTypeManager._list[IdolsPreset.ID] = function () { return new IdolsPreset(); };
            ProtocolTypeManager._list[Preset.ID] = function () { return new Preset(); };
            ProtocolTypeManager._list[PresetItem.ID] = function () { return new PresetItem(); };
            ProtocolTypeManager._list[EntityLook.ID] = function () { return new EntityLook(); };
            ProtocolTypeManager._list[IndexedEntityLook.ID] = function () { return new IndexedEntityLook(); };
            ProtocolTypeManager._list[SubEntity.ID] = function () { return new SubEntity(); };
            ProtocolTypeManager._list[ItemDurability.ID] = function () { return new ItemDurability(); };
            ProtocolTypeManager._list[MountClientData.ID] = function () { return new MountClientData(); };
            ProtocolTypeManager._list[UpdateMountBoost.ID] = function () { return new UpdateMountBoost(); };
            ProtocolTypeManager._list[UpdateMountIntBoost.ID] = function () { return new UpdateMountIntBoost(); };
            ProtocolTypeManager._list[MountInformationsForPaddock.ID] = function () { return new MountInformationsForPaddock(); };
            ProtocolTypeManager._list[PaddockAbandonnedInformations.ID] = function () { return new PaddockAbandonnedInformations(); };
            ProtocolTypeManager._list[PaddockBuyableInformations.ID] = function () { return new PaddockBuyableInformations(); };
            ProtocolTypeManager._list[PaddockContentInformations.ID] = function () { return new PaddockContentInformations(); };
            ProtocolTypeManager._list[PaddockInformations.ID] = function () { return new PaddockInformations(); };
            ProtocolTypeManager._list[PaddockInformationsForSell.ID] = function () { return new PaddockInformationsForSell(); };
            ProtocolTypeManager._list[PaddockItem.ID] = function () { return new PaddockItem(); };
            ProtocolTypeManager._list[PaddockPrivateInformations.ID] = function () { return new PaddockPrivateInformations(); };
            ProtocolTypeManager._list[AllianceInsiderPrismInformation.ID] = function () { return new AllianceInsiderPrismInformation(); };
            ProtocolTypeManager._list[AlliancePrismInformation.ID] = function () { return new AlliancePrismInformation(); };
            ProtocolTypeManager._list[PrismFightersInformation.ID] = function () { return new PrismFightersInformation(); };
            ProtocolTypeManager._list[PrismGeolocalizedInformation.ID] = function () { return new PrismGeolocalizedInformation(); };
            ProtocolTypeManager._list[PrismInformation.ID] = function () { return new PrismInformation(); };
            ProtocolTypeManager._list[PrismSubareaEmptyInfo.ID] = function () { return new PrismSubareaEmptyInfo(); };
            ProtocolTypeManager._list[Shortcut.ID] = function () { return new Shortcut(); };
            ProtocolTypeManager._list[ShortcutEmote.ID] = function () { return new ShortcutEmote(); };
            ProtocolTypeManager._list[ShortcutObject.ID] = function () { return new ShortcutObject(); };
            ProtocolTypeManager._list[ShortcutObjectIdolsPreset.ID] = function () { return new ShortcutObjectIdolsPreset(); };
            ProtocolTypeManager._list[ShortcutObjectItem.ID] = function () { return new ShortcutObjectItem(); };
            ProtocolTypeManager._list[ShortcutObjectPreset.ID] = function () { return new ShortcutObjectPreset(); };
            ProtocolTypeManager._list[ShortcutSmiley.ID] = function () { return new ShortcutSmiley(); };
            ProtocolTypeManager._list[ShortcutSpell.ID] = function () { return new ShortcutSpell(); };
            ProtocolTypeManager._list[AbstractSocialGroupInfos.ID] = function () { return new AbstractSocialGroupInfos(); };
            ProtocolTypeManager._list[AllianceFactSheetInformations.ID] = function () { return new AllianceFactSheetInformations(); };
            ProtocolTypeManager._list[AllianceVersatileInformations.ID] = function () { return new AllianceVersatileInformations(); };
            ProtocolTypeManager._list[AlliancedGuildFactSheetInformations.ID] = function () { return new AlliancedGuildFactSheetInformations(); };
            ProtocolTypeManager._list[GuildFactSheetInformations.ID] = function () { return new GuildFactSheetInformations(); };
            ProtocolTypeManager._list[GuildInAllianceVersatileInformations.ID] = function () { return new GuildInAllianceVersatileInformations(); };
            ProtocolTypeManager._list[GuildInsiderFactSheetInformations.ID] = function () { return new GuildInsiderFactSheetInformations(); };
            ProtocolTypeManager._list[GuildVersatileInformations.ID] = function () { return new GuildVersatileInformations(); };
            ProtocolTypeManager._list[StartupActionAddObject.ID] = function () { return new StartupActionAddObject(); };
            ProtocolTypeManager._list[TrustCertificate.ID] = function () { return new TrustCertificate(); };
            ProtocolTypeManager._list[ContentPart.ID] = function () { return new ContentPart(); };
            ProtocolTypeManager._list[Version.ID] = function () { return new Version(); };
            ProtocolTypeManager._list[VersionExtended.ID] = function () { return new VersionExtended(); };
            ProtocolTypeManager._list[KrosmasterFigure.ID] = function () { return new KrosmasterFigure(); };
        }
        ProtocolTypeManager.getInstance = function (networkType, param2) {
            var _loc3_ = ProtocolTypeManager._list[param2];
            if (!_loc3_) {
                throw new Error('Type with id ' + param2 + ' is unknown.');
            }
            return _loc3_();
        };
        return ProtocolTypeManager;
    })();
    Protocol.ProtocolTypeManager = ProtocolTypeManager;
    var Binary64 = (function () {
        function Binary64(low, high) {
            if (low === void 0) { low = 0; }
            if (high === void 0) { high = 0; }
            this.high = high;
            this.low = low;
        }
        Binary64.prototype.div = function (n) {
            var modHigh = 0;
            modHigh = (this.high % n);
            var mod = (((this.low % n) + (modHigh * 6)) % n);
            this.high = (this.high / n);
            var newLow = (((modHigh * 4294967296) + this.low) / n);
            this.high = (this.high + Number((newLow / 4294967296)));
            this.low = newLow;
            return mod;
        };
        ;
        Binary64.prototype.mul = function (n) {
            var newLow = (Number(this.low) * n);
            this.high = (this.high * n);
            this.high = (this.high + Number((newLow / 4294967296)));
            this.low = (this.low * n);
        };
        ;
        Binary64.prototype.add = function (n) {
            var newLow = (Number(this.low) + n);
            this.high = (this.high + Number((newLow / 4294967296)));
            this.low = newLow;
        };
        ;
        Binary64.prototype.bitwiseNot = function (n) {
            this.low = ~(this.low);
            this.high = ~(this.high);
        };
        ;
        return Binary64;
    })();
    Protocol.Binary64 = Binary64;
    var BooleanByteWrapper = (function () {
        function BooleanByteWrapper() {
        }
        BooleanByteWrapper.setFlag = function (param1, param2, param3) {
            switch (param2) {
                case 0:
                    if (param3) {
                        param1 = param1 | 1;
                    }
                    else {
                        param1 = param1 & 255 - 1;
                    }
                    break;
                case 1:
                    if (param3) {
                        param1 = param1 | 2;
                    }
                    else {
                        param1 = param1 & 255 - 2;
                    }
                    break;
                case 2:
                    if (param3) {
                        param1 = param1 | 4;
                    }
                    else {
                        param1 = param1 & 255 - 4;
                    }
                    break;
                case 3:
                    if (param3) {
                        param1 = param1 | 8;
                    }
                    else {
                        param1 = param1 & 255 - 8;
                    }
                    break;
                case 4:
                    if (param3) {
                        param1 = param1 | 16;
                    }
                    else {
                        param1 = param1 & 255 - 16;
                    }
                    break;
                case 5:
                    if (param3) {
                        param1 = param1 | 32;
                    }
                    else {
                        param1 = param1 & 255 - 32;
                    }
                    break;
                case 6:
                    if (param3) {
                        param1 = param1 | 64;
                    }
                    else {
                        param1 = param1 & 255 - 64;
                    }
                    break;
                case 7:
                    if (param3) {
                        param1 = param1 | 128;
                    }
                    else {
                        param1 = param1 & 255 - 128;
                    }
                    break;
                default:
                    throw new Error('Bytebox overflow.');
            }
            return param1;
        };
        BooleanByteWrapper.getFlag = function (param1, param2) {
            switch (param2) {
                case 0:
                    return !((param1 & 1) === 0);
                case 1:
                    return !((param1 & 2) === 0);
                case 2:
                    return !((param1 & 4) === 0);
                case 3:
                    return !((param1 & 8) === 0);
                case 4:
                    return !((param1 & 16) === 0);
                case 5:
                    return !((param1 & 32) === 0);
                case 6:
                    return !((param1 & 64) === 0);
                case 7:
                    return !((param1 & 128) === 0);
                default:
                    throw new Error('Bytebox overflow.');
            }
        };
        return BooleanByteWrapper;
    })();
    Protocol.BooleanByteWrapper = BooleanByteWrapper;
    var CustomDataWrapper = (function () {
        function CustomDataWrapper(data) {
            this._data = data;
        }
        Object.defineProperty(CustomDataWrapper.prototype, "position", {
            get: function () {
                return this._data.position;
            },
            set: function (param1) {
                this._data.position = param1;
            },
            enumerable: true,
            configurable: true
        });
        CustomDataWrapper.prototype.readVarInt = function () {
            var _loc4_ = 0;
            var _loc1_ = 0;
            var _loc2_ = 0;
            var _loc3_ = false;
            while (_loc2_ < CustomDataWrapper.INT_SIZE) {
                _loc4_ = this._data.readByte();
                _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                if (_loc2_ > 0) {
                    _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                }
                else {
                    _loc1_ = _loc1_ + (_loc4_ & CustomDataWrapper.MASK_01111111);
                }
                _loc2_ = _loc2_ + CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (!_loc3_) {
                    return _loc1_;
                }
            }
            throw new Error('Too much data');
        };
        CustomDataWrapper.prototype.readVarUhInt = function () {
            return this.readVarInt();
        };
        CustomDataWrapper.prototype.readVarShort = function () {
            var _loc4_ = 0;
            var _loc1_ = 0;
            var _loc2_ = 0;
            var _loc3_ = false;
            while (_loc2_ < CustomDataWrapper.SHORT_SIZE) {
                _loc4_ = this._data.readByte();
                _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                if (_loc2_ > 0) {
                    _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                }
                else {
                    _loc1_ = _loc1_ + (_loc4_ & CustomDataWrapper.MASK_01111111);
                }
                _loc2_ = _loc2_ + CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (!_loc3_) {
                    if (_loc1_ > CustomDataWrapper.SHORT_MAX_VALUE) {
                        _loc1_ = _loc1_ - CustomDataWrapper.UNSIGNED_SHORT_MAX_VALUE;
                    }
                    return _loc1_;
                }
            }
            throw new Error('Too much data');
        };
        CustomDataWrapper.prototype.readVarUhShort = function () {
            return this.readVarShort();
        };
        CustomDataWrapper.prototype.readVarLong = function () {
            return this.readInt64(this._data).value();
        };
        CustomDataWrapper.prototype.readVarUhLong = function () {
            return this.readUInt64(this._data).value();
        };
        CustomDataWrapper.prototype.readBytes = function (param1, param2, param3) {
            if (param2 === void 0) { param2 = 0; }
            if (param3 === void 0) { param3 = 0; }
            this._data.readBytes(param1, param2, param3);
        };
        CustomDataWrapper.prototype.readBoolean = function () {
            return this._data.readBoolean();
        };
        CustomDataWrapper.prototype.readByte = function () {
            return this._data.readByte();
        };
        CustomDataWrapper.prototype.readUnsignedByte = function () {
            return this._data.readUnsignedByte();
        };
        CustomDataWrapper.prototype.readShort = function () {
            return this._data.readShort();
        };
        CustomDataWrapper.prototype.readUnsignedShort = function () {
            return this._data.readUnsignedShort();
        };
        CustomDataWrapper.prototype.readInt = function () {
            return this._data.readInt();
        };
        CustomDataWrapper.prototype.readUnsignedInt = function () {
            return this._data.readUnsignedInt();
        };
        CustomDataWrapper.prototype.readFloat = function () {
            return this._data.readFloat();
        };
        CustomDataWrapper.prototype.readDouble = function () {
            return this._data.readDouble();
        };
        CustomDataWrapper.prototype.readMultiByte = function (param1, param2) {
            return this._data.readMultiByte(param1, param2);
        };
        CustomDataWrapper.prototype.readUTF = function () {
            return this._data.readUTF();
        };
        CustomDataWrapper.prototype.readUTFBytes = function (param1) {
            return this._data.readUTFBytes(param1);
        };
        Object.defineProperty(CustomDataWrapper.prototype, "bytesAvailable", {
            get: function () {
                return this._data.bytesAvailable;
            },
            enumerable: true,
            configurable: true
        });
        CustomDataWrapper.prototype.readObject = function () {
            return null;
        };
        Object.defineProperty(CustomDataWrapper.prototype, "endian", {
            get: function () {
                return this._data.endian;
            },
            set: function (param1) {
                this._data.endian = param1;
            },
            enumerable: true,
            configurable: true
        });
        CustomDataWrapper.prototype.writeVarInt = function (param1) {
            var _loc5_ = 0;
            var _loc2_ = new ByteArray();
            if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                _loc2_.writeByte(param1);
                this._data.writeBytes(_loc2_);
                return;
            }
            var _loc3_ = param1;
            var _loc4_ = new ByteArray();
            while (_loc3_ !== 0) {
                _loc4_.writeByte(_loc3_ & CustomDataWrapper.MASK_01111111);
                _loc4_.position = _loc4_.length - 1;
                _loc5_ = _loc4_.readByte();
                _loc3_ = _loc3_ >>> CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (_loc3_ > 0) {
                    _loc5_ = _loc5_ | CustomDataWrapper.MASK_10000000;
                }
                _loc2_.writeByte(_loc5_);
            }
            this._data.writeBytes(_loc2_);
        };
        CustomDataWrapper.prototype.writeVarShort = function (param1) {
            var _loc5_ = 0;
            if (param1 > CustomDataWrapper.SHORT_MAX_VALUE || param1 < CustomDataWrapper.SHORT_MIN_VALUE) {
                throw new Error('Forbidden value');
            }
            var _loc2_ = new ByteArray();
            if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                _loc2_.writeByte(param1);
                this._data.writeBytes(_loc2_);
                return;
            }
            var _loc3_ = param1 & 65535;
            var _loc4_ = new ByteArray();
            while (_loc3_ !== 0) {
                _loc4_.writeByte(_loc3_ & CustomDataWrapper.MASK_01111111);
                _loc4_.position = _loc4_.length - 1;
                _loc5_ = _loc4_.readByte();
                _loc3_ = _loc3_ >>> CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (_loc3_ > 0) {
                    _loc5_ = _loc5_ | CustomDataWrapper.MASK_10000000;
                }
                _loc2_.writeByte(_loc5_);
            }
            this._data.writeBytes(_loc2_);
        };
        CustomDataWrapper.prototype.writeVarLong = function (param1) {
            var _loc3_ = 0;
            var _loc2_ = new ByteArray.Int64(param1, 0);
            if (_loc2_.high === 0) {
                this.writeint32(this._data, _loc2_.low);
            }
            else {
                _loc3_ = 0;
                while (_loc3_ < 4) {
                    this._data.writeByte(_loc2_.low & 127 | 128);
                    _loc2_.low = _loc2_.low >>> 7;
                    _loc3_++;
                }
                if ((_loc2_.high & 268435455 << 3) === 0) {
                    this._data.writeByte(_loc2_.high << 4 | _loc2_.low);
                }
                else {
                    this._data.writeByte((_loc2_.high << 4 | _loc2_.low) & 127 | 128);
                    this.writeint32(this._data, _loc2_.high >>> 3);
                }
            }
        };
        CustomDataWrapper.prototype.writeBytes = function (param1, param2, param3) {
            if (param2 === void 0) { param2 = 0; }
            if (param3 === void 0) { param3 = 0; }
            this._data.writeBytes(param1, param2, param3);
        };
        CustomDataWrapper.prototype.writeBoolean = function (param1) {
            this._data.writeBoolean(param1);
        };
        CustomDataWrapper.prototype.writeByte = function (param1) {
            this._data.writeByte(param1);
        };
        CustomDataWrapper.prototype.writeShort = function (param1) {
            this._data.writeShort(param1);
        };
        CustomDataWrapper.prototype.writeInt = function (param1) {
            this._data.writeInt(param1);
        };
        CustomDataWrapper.prototype.writeUnsignedInt = function (param1) {
            this._data.writeUnsignedInt(param1);
        };
        CustomDataWrapper.prototype.writeFloat = function (param1) {
            this._data.writeFloat(param1);
        };
        CustomDataWrapper.prototype.writeDouble = function (param1) {
            this._data.writeDouble(param1);
        };
        CustomDataWrapper.prototype.writeMultiByte = function (param1, param2) {
            this._data.writeMultiByte(param1, param2);
        };
        CustomDataWrapper.prototype.writeUTF = function (param1) {
            this._data.writeUTF(param1);
        };
        CustomDataWrapper.prototype.writeUTFBytes = function (param1) {
            this._data.writeUTFBytes(param1);
        };
        CustomDataWrapper.prototype.writeObject = function (param1) {
        };
        CustomDataWrapper.prototype.readInt64 = function (param1) {
            var _loc3_ = 0;
            var _loc2_ = new ByteArray.Int64(0, 0);
            var _loc4_ = 0;
            while (true) {
                _loc3_ = param1.readUnsignedByte();
                if (_loc4_ === 28) {
                    break;
                }
                if (_loc3_ >= 128) {
                    _loc2_.low = _loc2_.low | (_loc3_ & 127) << _loc4_;
                    _loc4_ = _loc4_ + 7;
                    continue;
                }
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                return _loc2_;
            }
            if (_loc3_ >= 128) {
                _loc3_ = _loc3_ & 127;
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                _loc2_.high = _loc3_ >>> 4;
                _loc4_ = 3;
                while (true) {
                    _loc3_ = param1.readUnsignedByte();
                    if (_loc4_ < 32) {
                        if (_loc3_ >= 128) {
                            _loc2_.high = _loc2_.high | (_loc3_ & 127) << _loc4_;
                        }
                        else {
                            break;
                        }
                    }
                    _loc4_ = _loc4_ + 7;
                }
                _loc2_.high = _loc2_.high | _loc3_ << _loc4_;
                return _loc2_;
            }
            _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
            _loc2_.high = _loc3_ >>> 4;
            return _loc2_;
        };
        CustomDataWrapper.prototype.readUInt64 = function (param1) {
            var _loc3_ = 0;
            var _loc2_ = new ByteArray.UInt64();
            var _loc4_ = 0;
            while (true) {
                _loc3_ = param1.readUnsignedByte();
                if (_loc4_ === 28) {
                    break;
                }
                if (_loc3_ >= 128) {
                    _loc2_.low = _loc2_.low | (_loc3_ & 127) << _loc4_;
                    _loc4_ = _loc4_ + 7;
                    continue;
                }
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                return _loc2_;
            }
            if (_loc3_ >= 128) {
                _loc3_ = _loc3_ & 127;
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                _loc2_.high = _loc3_ >>> 4;
                _loc4_ = 3;
                while (true) {
                    _loc3_ = param1.readUnsignedByte();
                    if (_loc4_ < 32) {
                        if (_loc3_ >= 128) {
                            _loc2_.high = _loc2_.high | (_loc3_ & 127) << _loc4_;
                        }
                        else {
                            break;
                        }
                    }
                    _loc4_ = _loc4_ + 7;
                }
                _loc2_.high = _loc2_.high | _loc3_ << _loc4_;
                return _loc2_;
            }
            _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
            _loc2_.high = _loc3_ >>> 4;
            return _loc2_;
        };
        CustomDataWrapper.prototype.writeint32 = function (param1, param2) {
            while (param2 >= 128) {
                param1.writeByte(param2 & 127 | 128);
                param2 = param2 >>> 7;
            }
            param1.writeByte(param2);
        };
        CustomDataWrapper.INT_SIZE = 32;
        CustomDataWrapper.SHORT_SIZE = 16;
        CustomDataWrapper.SHORT_MIN_VALUE = -32768;
        CustomDataWrapper.SHORT_MAX_VALUE = 32767;
        CustomDataWrapper.UNSIGNED_SHORT_MAX_VALUE = 65536;
        CustomDataWrapper.CHUNCK_BIT_SIZE = 7;
        CustomDataWrapper.MAX_ENCODING_LENGTH = Math.ceil(CustomDataWrapper.INT_SIZE / CustomDataWrapper.CHUNCK_BIT_SIZE);
        CustomDataWrapper.MASK_10000000 = 128;
        CustomDataWrapper.MASK_01111111 = 127;
        return CustomDataWrapper;
    })();
    Protocol.CustomDataWrapper = CustomDataWrapper;
    var NetworkMessage = (function () {
        function NetworkMessage() {
        }
        NetworkMessage.writePacket = function (param1, param2, param3) {
            var _loc5_ = 0;
            var _loc6_ = 0;
            var _loc4_ = this.computeTypeLen(param3.buffer.byteLength);
            param1.writeShort(this.subComputeStaticHeader(param2, _loc4_));
            switch (_loc4_) {
                case 0:
                    return;
                case 1:
                    param1.writeByte(param3.buffer.byteLength);
                    break;
                case 2:
                    param1.writeShort(param3.buffer.byteLength);
                    break;
                case 3:
                    _loc5_ = param3.buffer.byteLength >> 16 & 255;
                    _loc6_ = param3.buffer.byteLength & 65535;
                    param1.writeByte(_loc5_);
                    param1.writeShort(_loc6_);
                    break;
            }
            param1.writeBytes(param3, 0, param3.buffer.byteLength);
        };
        NetworkMessage.computeTypeLen = function (param1) {
            if (param1 > 65535) {
                return 3;
            }
            if (param1 > 255) {
                return 2;
            }
            if (param1 > 0) {
                return 1;
            }
            return 0;
        };
        NetworkMessage.subComputeStaticHeader = function (param1, param2) {
            return param1 << NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID | param2;
        };
        NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID = 2;
        return NetworkMessage;
    })();
    Protocol.NetworkMessage = NetworkMessage;
})(Protocol || (Protocol = {}));
module.exports = Protocol;
