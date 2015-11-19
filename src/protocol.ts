/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import ByteArray = require('ts-bytearray');

module Protocol {
    export class Metadata {
        static PROTOCOL_BUILD = 1666;
        static PROTOCOL_REQUIRED_BUILD = 1666;
        static PROTOCOL_DATE = 'Mon, 17 Aug 2015 15:51:44 +0200';
        static PROTOCOL_VISIBILITY = 'local';
    }
    export enum ProtocolConstantsEnum {
        MAP_CELL_COUNT = 560,
        MAX_LEVEL = 200,
        MAX_GUILD_LEVEL = 200,
        MAX_MOUNT_LEVEL = 100,
        MAX_CHAT_LEN = 512,
        USER_MAX_CHAT_LEN = 256,
        MAX_STAT_LEN = 512,
        MAX_STAT_BY_MSG = 20,
        MIN_LOGIN_LEN = 3,
        MAX_LOGIN_LEN = 50,
        MIN_PLAYER_NAME_LEN = 2,
        MAX_PLAYER_NAME_LEN = 20,
        MIN_NICK_LEN = 2,
        MAX_NICK_LEN = 30,
        MIN_GUILDNAME_LEN = 3,
        MAX_GUILDNAME_LEN = 30,
        MIN_ALLIANCENAME_LEN = 3,
        MAX_ALLIANCENAME_LEN = 30,
        MIN_ALLIANCETAG_LEN = 3,
        MAX_ALLIANCETAG_LEN = 5,
        MIN_PARTY_NAME_LEN = 0,
        MAX_PARTY_NAME_LEN = 25,
        MAX_PLAYER_COLOR = 5,
        MAX_ENTITY_COLOR = 10,
        MAX_PLAYERS_PER_TEAM = 8,
        MAX_MEMBERS_PER_PARTY = 8,
        MAX_GUESTS_PER_PARTY = 7,
        MAX_MEMBERS_PER_ARENA_PARTY = 5,
        MAX_MONSTERS_IN_GROUP_ON_MAP = 16,
        MAX_CHAT_OBJECT_REF = 16,
        NOT_EQUIPED = 63,
        MAX_EQUIPED = 255,
        SLOTS_EQUIPABLE_BY_USER = 16,
        MAX_CRAFT_SLOT = 9,
        MAX_JOB_LEVEL = 200,
        MAX_HONOR = 20000,
        MAX_SHORTCUT = 99,
        MAX_ARENA_RANK = 2300,
        CHAR_MIN_LEVEL_ARENA = 50,
        CHAR_MIN_LEVEL_RIDE = 60,
        MAX_DUNGEON_REGISTER = 10,
        MIN_RIDE_NAME_LEN = 0,
        MAX_RIDE_NAME_LEN = 16,
        MAX_EFFECTS_COUNT = 100,
        MAX_LOCKABLE_CODE_LEN = 8,
        MAX_PRESET_ITEM_COUNT = 24,
        MIN_OBJ_COUNT_BY_XFERT = 1,
        MAX_OBJ_COUNT_BY_XFERT = 800,
        MAX_OBJ_COUNT_BY_DECRAFT = 50,
        MAX_WAVE = 100,
        MAX_OBJECT_EFFECT_STRING_LEN = 30,
        MAX_PLAYER_OR_ACCOUNT_NAME_LEN = 31,
        MAX_MEMBERS_PER_GUILD = 240,
        MAX_ADDITIONNAL_PER_CARAC = 100,
        MAX_RECONNECTION_ATTEMPTS = 5
    }

    export enum AccessoryPreviewErrorEnum {
        PREVIEW_ERROR = 0,
        PREVIEW_COOLDOWN = 1,
        PREVIEW_BAD_ITEM = 2
    }
    export enum AggressableStatusEnum {
        NON_AGGRESSABLE = 0,
        PvP_ENABLED_AGGRESSABLE = 10,
        PvP_ENABLED_NON_AGGRESSABLE = 11,
        AvA_ENABLED_AGGRESSABLE = 20,
        AvA_ENABLED_NON_AGGRESSABLE = 21,
        AvA_DISQUALIFIED = 22,
        AvA_PREQUALIFIED_AGGRESSABLE = 23
    }
    export enum AlignmentSideEnum {
        ALIGNMENT_UNKNOWN = -2,
        ALIGNMENT_WITHOUT = -1,
        ALIGNMENT_NEUTRAL = 0,
        ALIGNMENT_ANGEL = 1,
        ALIGNMENT_EVIL = 2,
        ALIGNMENT_MERCENARY = 3
    }
    export enum AllianceRightsBitEnum {
        ALLIANCE_RIGHT_NONE = 0,
        ALLIANCE_RIGHT_BOSS = 1,
        ALLIANCE_RIGHT_MANAGE_PRISMS = 2,
        ALLIANCE_RIGHT_TALK_IN_CHAN = 4,
        ALLIANCE_RIGHT_RECRUIT_GUILDS = 8,
        ALLIANCE_RIGHT_KICK_GUILDS = 16,
        ALLIANCE_RIGHT_MANAGE_RIGHTS = 32
    }
    export enum BreedEnum {
        UNDEFINED = 0,
        Feca = 1,
        Osamodas = 2,
        Enutrof = 3,
        Sram = 4,
        Xelor = 5,
        Ecaflip = 6,
        Eniripsa = 7,
        Iop = 8,
        Cra = 9,
        Sadida = 10,
        Sacrieur = 11,
        Pandawa = 12,
        Roublard = 13,
        Zobal = 14,
        Steamer = 15,
        Eliotrope = 16,
        SUMMONED = -1,
        MONSTER = -2,
        MONSTER_GROUP = -3,
        NPC = -4,
        HUMAN_VENDOR = -5,
        TAX_COLLECTOR = -6,
        MUTANT = -7,
        MUTANT_IN_DUNGEON = -8,
        MOUNT_OUTSIDE = -9,
        PRISM = -10,
        INCARNATION = -11
    }
    export enum BuildTypeEnum {
        RELEASE = 0,
        BETA = 1,
        ALPHA = 2,
        TESTING = 3,
        INTERNAL = 4,
        DEBUG = 5,
        EXPERIMENTAL = 6
    }
    export enum CharacterCreationResultEnum {
        OK = 0,
        ERR_NO_REASON = 1,
        ERR_INVALID_NAME = 2,
        ERR_NAME_ALREADY_EXISTS = 3,
        ERR_TOO_MANY_CHARACTERS = 4,
        ERR_NOT_ALLOWED = 5,
        ERR_NEW_PLAYER_NOT_ALLOWED = 6,
        ERR_RESTRICED_ZONE = 7
    }
    export enum CharacterDeletionErrorEnum {
        DEL_ERR_NO_REASON = 1,
        DEL_ERR_TOO_MANY_CHAR_DELETION = 2,
        DEL_ERR_BAD_SECRET_ANSWER = 3,
        DEL_ERR_RESTRICED_ZONE = 4
    }
    export enum CharacterInventoryPositionEnum {
        ACCESSORY_POSITION_HAT = 6,
        ACCESSORY_POSITION_CAPE = 7,
        ACCESSORY_POSITION_BELT = 3,
        ACCESSORY_POSITION_BOOTS = 5,
        ACCESSORY_POSITION_AMULET = 0,
        ACCESSORY_POSITION_SHIELD = 15,
        ACCESSORY_POSITION_WEAPON = 1,
        ACCESSORY_POSITION_PETS = 8,
        INVENTORY_POSITION_RING_LEFT = 2,
        INVENTORY_POSITION_RING_RIGHT = 4,
        INVENTORY_POSITION_DOFUS_1 = 9,
        INVENTORY_POSITION_DOFUS_2 = 10,
        INVENTORY_POSITION_DOFUS_3 = 11,
        INVENTORY_POSITION_DOFUS_4 = 12,
        INVENTORY_POSITION_DOFUS_5 = 13,
        INVENTORY_POSITION_DOFUS_6 = 14,
        INVENTORY_POSITION_MOUNT = 16,
        INVENTORY_POSITION_MUTATION = 20,
        INVENTORY_POSITION_BOOST_FOOD = 21,
        INVENTORY_POSITION_FIRST_BONUS = 22,
        INVENTORY_POSITION_SECOND_BONUS = 23,
        INVENTORY_POSITION_FIRST_MALUS = 24,
        INVENTORY_POSITION_SECOND_MALUS = 25,
        INVENTORY_POSITION_ROLEPLAY_BUFFER = 26,
        INVENTORY_POSITION_FOLLOWER = 27,
        INVENTORY_POSITION_COMPANION = 28,
        INVENTORY_POSITION_NOT_EQUIPED = 63
    }
    export enum CharacterRemodelingEnum {
        CHARACTER_REMODELING_NOT_APPLICABLE = 0,
        CHARACTER_REMODELING_NAME = 1,
        CHARACTER_REMODELING_COLORS = 2,
        CHARACTER_REMODELING_COSMETIC = 4,
        CHARACTER_REMODELING_BREED = 8,
        CHARACTER_REMODELING_GENDER = 16
    }
    export enum CharacterSpellModificationTypeEnum {
        INVALID_MODIFICATION = 0,
        RANGEABLE = 1,
        DAMAGE = 2,
        BASE_DAMAGE = 3,
        HEAL_BONUS = 4,
        AP_COST = 5,
        CAST_INTERVAL = 6,
        CAST_INTERVAL_SET = 7,
        CRITICAL_HIT_BONUS = 8,
        CAST_LINE = 9,
        LOS = 10,
        MAX_CAST_PER_TURN = 11,
        MAX_CAST_PER_TARGET = 12,
        RANGE = 13
    }
    export enum ChatActivableChannelsEnum {
        CHANNEL_GLOBAL = 0,
        CHANNEL_TEAM = 1,
        CHANNEL_GUILD = 2,
        CHANNEL_ALLIANCE = 3,
        CHANNEL_PARTY = 4,
        CHANNEL_SALES = 5,
        CHANNEL_SEEK = 6,
        CHANNEL_NOOB = 7,
        CHANNEL_ADMIN = 8,
        CHANNEL_ADS = 12,
        CHANNEL_ARENA = 13,
        PSEUDO_CHANNEL_PRIVATE = 9,
        PSEUDO_CHANNEL_INFO = 10,
        PSEUDO_CHANNEL_FIGHT_LOG = 11
    }
    export enum ChatChannelsMultiEnum {
        CHANNEL_GLOBAL = 0,
        CHANNEL_TEAM = 1,
        CHANNEL_GUILD = 2,
        CHANNEL_ALLIANCE = 3,
        CHANNEL_PARTY = 4,
        CHANNEL_SALES = 5,
        CHANNEL_SEEK = 6,
        CHANNEL_NOOB = 7,
        CHANNEL_ADMIN = 8,
        CHANNEL_ADS = 12,
        CHANNEL_ARENA = 13
    }
    export enum ChatErrorEnum {
        CHAT_ERROR_UNKNOWN = 0,
        CHAT_ERROR_RECEIVER_NOT_FOUND = 1,
        CHAT_ERROR_INTERIOR_MONOLOGUE = 2,
        CHAT_ERROR_NO_GUILD = 3,
        CHAT_ERROR_NO_PARTY = 4,
        CHAT_ERROR_ALLIANCE = 5,
        CHAT_ERROR_INVALID_MAP = 6,
        CHAT_ERROR_NO_PARTY_ARENA = 7,
        CHAT_ERROR_NO_TEAM = 8
    }
    export enum ClientInstallTypeEnum {
        CLIENT_INSTALL_UNKNOWN = 0,
        CLIENT_BUNDLE = 1,
        CLIENT_STREAMING = 2
    }
    export enum ClientTechnologyEnum {
        CLIENT_TECHNOLOGY_UNKNOWN = 0,
        CLIENT_AIR = 1,
        CLIENT_FLASH = 2
    }
    export enum CompassTypeEnum {
        COMPASS_TYPE_SIMPLE = 0,
        COMPASS_TYPE_SPOUSE = 1,
        COMPASS_TYPE_PARTY = 2,
        COMPASS_TYPE_PVP_SEEK = 3,
        COMPASS_TYPE_QUEST = 4
    }
    export enum ConsoleMessageTypeEnum {
        CONSOLE_TEXT_MESSAGE = 0,
        CONSOLE_INFO_MESSAGE = 1,
        CONSOLE_ERR_MESSAGE = 2
    }
    export enum CraftResultEnum {
        CRAFT_IMPOSSIBLE = 0,
        CRAFT_FAILED = 1,
        CRAFT_SUCCESS = 2,
        CRAFT_NEUTRAL = 3
    }
    export enum DebugLevelEnum {
        LEVEL_TRACE = 0,
        LEVEL_DEBUG = 1,
        LEVEL_INFO = 2,
        LEVEL_WARN = 3,
        LEVEL_ERROR = 4,
        LEVEL_FATAL = 5
    }
    export enum DelayedActionTypeEnum {
        DELAYED_ACTION_DISCONNECT = 0,
        DELAYED_ACTION_OBJECT_USE = 1,
        DELAYED_ACTION_JOIN_CHARACTER = 2,
        DELAYED_ACTION_AGGRESSION_IMMUNE = 3
    }
    export enum DialogTypeEnum {
        DIALOG_BOOK = 0,
        DIALOG_DIALOG = 1,
        DIALOG_LOCKABLE = 2,
        DIALOG_PURCHASABLE = 3,
        DIALOG_GUILD_INVITATION = 4,
        DIALOG_GUILD_CREATE = 5,
        DIALOG_GUILD_RENAME = 6,
        DIALOG_MARRIAGE = 7,
        DIALOG_DUNGEON_MEETING = 8,
        DIALOG_SPELL_FORGET = 9,
        DIALOG_TELEPORTER = 10,
        DIALOG_EXCHANGE = 11,
        DIALOG_ALLIANCE_INVITATION = 12,
        DIALOG_ALLIANCE_CREATE = 13,
        DIALOG_ALLIANCE_RENAME = 14
    }
    export enum DirectionsEnum {
        DIRECTION_EAST = 0,
        DIRECTION_SOUTH_EAST = 1,
        DIRECTION_SOUTH = 2,
        DIRECTION_SOUTH_WEST = 3,
        DIRECTION_WEST = 4,
        DIRECTION_NORTH_WEST = 5,
        DIRECTION_NORTH = 6,
        DIRECTION_NORTH_EAST = 7
    }
    export enum ExchangeErrorEnum {
        REQUEST_IMPOSSIBLE = 1,
        REQUEST_CHARACTER_OCCUPIED = 2,
        REQUEST_CHARACTER_JOB_NOT_EQUIPED = 3,
        REQUEST_CHARACTER_TOOL_TOO_FAR = 4,
        REQUEST_CHARACTER_OVERLOADED = 5,
        REQUEST_CHARACTER_NOT_SUSCRIBER = 6,
        REQUEST_CHARACTER_RESTRICTED = 7,
        REQUEST_CHARACTER_GUEST = 8,
        SELL_ERROR = 63,
        BUY_ERROR = 64,
        MOUNT_PADDOCK_ERROR = 10,
        BID_SEARCH_ERROR = 11
    }
    export enum ExchangeReplayStopReasonEnum {
        STOPPED_REASON_OK = 1,
        STOPPED_REASON_USER = 2,
        STOPPED_REASON_MISSING_RESSOURCE = 3,
        STOPPED_REASON_IMPOSSIBLE_MODIFICATION = 4
    }
    export enum ExchangeTypeEnum {
        NPC_SHOP = 0,
        PLAYER_TRADE = 1,
        NPC_TRADE = 2,
        CRAFT = 3,
        DISCONNECTED_VENDOR = 4,
        STORAGE = 5,
        SHOP_STOCK = 6,
        TAXCOLLECTOR = 8,
        NPC_MODIFY_TRADE = 9,
        BIDHOUSE_SELL = 10,
        BIDHOUSE_BUY = 11,
        MULTICRAFT_CRAFTER = 12,
        MULTICRAFT_CUSTOMER = 13,
        JOB_INDEX = 14,
        MOUNT = 15,
        MOUNT_STABLE = 16,
        NPC_RESURECT_PET = 17,
        NPC_TRADE_MOUNT = 18,
        REALESTATE_HOUSE = 19,
        REALESTATE_FARM = 20,
        RUNES_TRADE = 21,
        RECYCLE_TRADE = 22
    }
    export enum FightDispellableEnum {
        DISPELLABLE = 1,
        DISPELLABLE_BY_DEATH = 2,
        DISPELLABLE_BY_STRONG_DISPEL = 3,
        REALLY_NOT_DISPELLABLE = 4
    }
    export enum FightOptionsEnum {
        FIGHT_OPTION_SET_SECRET = 0,
        FIGHT_OPTION_SET_TO_PARTY_ONLY = 1,
        FIGHT_OPTION_SET_CLOSED = 2,
        FIGHT_OPTION_ASK_FOR_HELP = 3
    }
    export enum FightOutcomeEnum {
        RESULT_LOST = 0,
        RESULT_DRAW = 1,
        RESULT_VICTORY = 2,
        RESULT_TAX = 5,
        RESULT_DEFENDER_GROUP = 6
    }
    export enum FightSpellCastCriticalEnum {
        NORMAL = 1,
        CRITICAL_HIT = 2,
        CRITICAL_FAIL = 3
    }
    export enum FightTypeEnum {
        FIGHT_TYPE_CHALLENGE = 0,
        FIGHT_TYPE_AGRESSION = 1,
        FIGHT_TYPE_PvMA = 2,
        FIGHT_TYPE_MXvM = 3,
        FIGHT_TYPE_PvM = 4,
        FIGHT_TYPE_PvT = 5,
        FIGHT_TYPE_PvMU = 6,
        FIGHT_TYPE_PVP_ARENA = 7,
        FIGHT_TYPE_Koh = 8,
        FIGHT_TYPE_PvPr = 9
    }
    export enum FighterRefusedReasonEnum {
        FIGHTER_REFUSED = -1,
        FIGHTER_ACCEPTED = 0,
        CHALLENGE_FULL = 1,
        TEAM_FULL = 2,
        WRONG_ALIGNMENT = 3,
        WRONG_GUILD = 4,
        TOO_LATE = 5,
        MUTANT_REFUSED = 6,
        WRONG_MAP = 7,
        JUST_RESPAWNED = 8,
        IM_OCCUPIED = 9,
        OPPONENT_OCCUPIED = 10,
        FIGHT_MYSELF = 11,
        INSUFFICIENT_RIGHTS = 12,
        MEMBER_ACCOUNT_NEEDED = 13,
        OPPONENT_NOT_MEMBER = 14,
        TEAM_LIMITED_BY_MAINCHARACTER = 15,
        MULTIACCOUNT_NOT_ALLOWED = 16,
        GHOST_REFUSED = 17,
        RESTRICTED_ACCOUNT = 19,
        WRONG_ALLIANCE = 20,
        AVA_ZONE = 21,
        COMPANION_REFUSED = 22,
        NOT_ENOUGH_ROOM = 23,
        GUEST_ACCOUNT = 24
    }
    export enum GameActionFightInvisibilityStateEnum {
        INVISIBLE = 1,
        DETECTED = 2,
        VISIBLE = 3
    }
    export enum GameActionMarkCellsTypeEnum {
        CELLS_CIRCLE = 0,
        CELLS_CROSS = 1,
        CELLS_SQUARE = 2
    }
    export enum GameActionMarkTypeEnum {
        GLYPH = 1,
        TRAP = 2,
        WALL = 3,
        PORTAL = 4
    }
    export enum GameContextEnum {
        ROLE_PLAY = 1,
        FIGHT = 2
    }
    export enum GameHierarchyEnum {
        UNAVAILABLE = -1,
        PLAYER = 0,
        MODERATOR = 10,
        GAMEMASTER_PADAWAN = 20,
        GAMEMASTER = 30,
        ADMIN = 40
    }
    export enum GuestLimitationEnum {
        LIMITED_TO_REGISTERED = 0,
        GUEST_LIMIT_ON_JOB_XP = 1,
        GUEST_LIMIT_ON_JOB_USE = 2,
        GUEST_LIMIT_ON_MAP = 3,
        GUEST_LIMIT_ON_ITEM = 4,
        GUEST_LIMIT_ON_VENDOR = 5,
        GUEST_LIMIT_ON_CHAT = 6,
        GUEST_LIMIT_ON_GUILD = 7
    }
    export enum GuildInformationsTypeEnum {
        INFO_GENERAL = 1,
        INFO_MEMBERS = 2,
        INFO_BOOSTS = 3,
        INFO_PADDOCKS = 4,
        INFO_HOUSES = 5,
        INFO_TAX_COLLECTOR_GUILD_ONLY = 6,
        INFO_TAX_COLLECTOR_ALLIANCE = 7,
        INFO_TAX_COLLECTOR_LEAVE = 8
    }
    export enum GuildRightsBitEnum {
        GUILD_RIGHT_NONE = 0,
        GUILD_RIGHT_BOSS = 1,
        GUILD_RIGHT_MANAGE_GUILD_BOOSTS = 2,
        GUILD_RIGHT_MANAGE_RIGHTS = 4,
        GUILD_RIGHT_INVITE_NEW_MEMBERS = 8,
        GUILD_RIGHT_BAN_MEMBERS = 16,
        GUILD_RIGHT_MANAGE_XP_CONTRIBUTION = 32,
        GUILD_RIGHT_MANAGE_RANKS = 64,
        GUILD_RIGHT_HIRE_TAX_COLLECTOR = 128,
        GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION = 256,
        GUILD_RIGHT_COLLECT = 512,
        GUILD_RIGHT_USE_PADDOCKS = 4096,
        GUILD_RIGHT_ORGANIZE_PADDOCKS = 8192,
        GUILD_RIGHT_TAKE_OTHERS_MOUNTS_IN_PADDOCKS = 16384,
        GUILD_RIGHT_DEFENSE_PRIORITY = 32768,
        GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR = 65536,
        GUILD_RIGHT_SET_ALLIANCE_PRISM = 131072,
        GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN = 262144
    }
    export enum HardcoreOrEpicDeathStateEnum {
        DEATH_STATE_ALIVE = 0,
        DEATH_STATE_DEAD = 1,
        DEATH_STATE_WAITING_CONFIRMATION = 2
    }
    export enum IdentificationFailureReasonEnum {
        BAD_VERSION = 1,
        WRONG_CREDENTIALS = 2,
        BANNED = 3,
        KICKED = 4,
        IN_MAINTENANCE = 5,
        TOO_MANY_ON_IP = 6,
        TIME_OUT = 7,
        BAD_IPRANGE = 8,
        CREDENTIALS_RESET = 9,
        EMAIL_UNVALIDATED = 10,
        OTP_TIMEOUT = 11,
        SERVICE_UNAVAILABLE = 53,
        EXTERNAL_ACCOUNT_LINK_REFUSED = 61,
        EXTERNAL_ACCOUNT_ALREADY_LINKED = 62,
        UNKNOWN_AUTH_ERROR = 99,
        SPARE = 100
    }
    export enum ListAddFailureEnum {
        LIST_ADD_FAILURE_UNKNOWN = 0,
        LIST_ADD_FAILURE_OVER_QUOTA = 1,
        LIST_ADD_FAILURE_NOT_FOUND = 2,
        LIST_ADD_FAILURE_EGOCENTRIC = 3,
        LIST_ADD_FAILURE_IS_DOUBLE = 4
    }
    export enum MapObstacleStateEnum {
        OBSTACLE_OPENED = 1,
        OBSTACLE_CLOSED = 2
    }
    export enum MountEquipedErrorEnum {
        UNSET = 0,
        SET = 1,
        RIDING = 2
    }
    export enum NicknameErrorEnum {
        ALREADY_USED = 1,
        SAME_AS_LOGIN = 2,
        TOO_SIMILAR_TO_LOGIN = 3,
        INVALID_NICK = 4,
        UNKNOWN_NICK_ERROR = 99
    }
    export enum NicknameGeneratingFailureEnum {
        NICKNAME_GENERATOR_RETRY_TOO_SHORT = 1,
        NICKNAME_GENERATOR_UNAVAILABLE = 2
    }
    export enum ObjectErrorEnum {
        INVENTORY_FULL = 1,
        CANNOT_EQUIP_TWICE = 2,
        NOT_TRADABLE = 3,
        CANNOT_DROP = 4,
        CANNOT_DROP_NO_PLACE = 5,
        CANNOT_DESTROY = 6,
        LEVEL_TOO_LOW = 7,
        LIVING_OBJECT_REFUSED_FOOD = 8,
        CANNOT_UNEQUIP = 9,
        CANNOT_EQUIP_HERE = 10,
        CRITERIONS = 11,
        SYMBIOTIC_OBJECT_ERROR = 12
    }
    export enum PartStateEnum {
        PART_NOT_INSTALLED = 0,
        PART_BEING_UPDATER = 1,
        PART_UP_TO_DATE = 2
    }
    export enum PartyJoinErrorEnum {
        PARTY_JOIN_ERROR_UNKNOWN = 0,
        PARTY_JOIN_ERROR_PLAYER_NOT_FOUND = 1,
        PARTY_JOIN_ERROR_PARTY_NOT_FOUND = 2,
        PARTY_JOIN_ERROR_PARTY_FULL = 3,
        PARTY_JOIN_ERROR_PLAYER_BUSY = 4,
        PARTY_JOIN_ERROR_PLAYER_ALREADY_INVITED = 6,
        PARTY_JOIN_ERROR_PLAYER_TOO_SOLLICITED = 7,
        PARTY_JOIN_ERROR_PLAYER_LOYAL = 8,
        PARTY_JOIN_ERROR_UNMODIFIABLE = 9,
        PARTY_JOIN_ERROR_UNMET_CRITERION = 10,
        PARTY_JOIN_ERROR_NOT_ENOUGH_ROOM = 11,
        PARTY_JOIN_ERROR_COMPOSITION_CHANGED = 12,
        PARTY_JOIN_ERROR_PLAYER_IN_TUTORIAL = 13
    }
    export enum PartyNameErrorEnum {
        PARTY_NAME_UNDEFINED_ERROR = 0,
        PARTY_NAME_INVALID = 1,
        PARTY_NAME_ALREADY_USED = 2,
        PARTY_NAME_UNALLOWED_RIGHTS = 3,
        PARTY_NAME_UNALLOWED_NOW = 4
    }
    export enum PartyTypeEnum {
        PARTY_TYPE_UNDEFINED = 0,
        PARTY_TYPE_CLASSICAL = 1,
        PARTY_TYPE_DUNGEON = 2,
        PARTY_TYPE_ARENA = 3
    }
    export enum PlayableBreedEnum {
        UNDEFINED = 0,
        Feca = 1,
        Osamodas = 2,
        Enutrof = 3,
        Sram = 4,
        Xelor = 5,
        Ecaflip = 6,
        Eniripsa = 7,
        Iop = 8,
        Cra = 9,
        Sadida = 10,
        Sacrieur = 11,
        Pandawa = 12,
        Roublard = 13,
        Zobal = 14,
        Steamer = 15,
        Eliotrope = 16
    }
    export enum PlayerLifeStatusEnum {
        STATUS_ALIVE_AND_KICKING = 0,
        STATUS_TOMBSTONE = 1,
        STATUS_PHANTOM = 2
    }
    export enum PlayerStateEnum {
        NOT_CONNECTED = 0,
        GAME_TYPE_ROLEPLAY = 1,
        GAME_TYPE_FIGHT = 2,
        UNKNOWN_STATE = 99
    }
    export enum PlayerStatusEnum {
        PLAYER_STATUS_OFFLINE = 0,
        PLAYER_STATUS_UNKNOWN = 1,
        PLAYER_STATUS_AVAILABLE = 10,
        PLAYER_STATUS_IDLE = 20,
        PLAYER_STATUS_AFK = 21,
        PLAYER_STATUS_PRIVATE = 30,
        PLAYER_STATUS_SOLO = 40
    }
    export enum PresetDeleteResultEnum {
        PRESET_DEL_OK = 1,
        PRESET_DEL_ERR_UNKNOWN = 2,
        PRESET_DEL_ERR_BAD_PRESET_ID = 3
    }
    export enum PresetSaveResultEnum {
        PRESET_SAVE_OK = 1,
        PRESET_SAVE_ERR_UNKNOWN = 2,
        PRESET_SAVE_ERR_TOO_MANY = 3
    }
    export enum PresetSaveUpdateErrorEnum {
        PRESET_UPDATE_ERR_UNKNOWN = 1,
        PRESET_UPDATE_ERR_BAD_PRESET_ID = 2,
        PRESET_UPDATE_ERR_BAD_POSITION = 3,
        PRESET_UPDATE_ERR_BAD_OBJECT_ID = 4
    }
    export enum PresetUseResultEnum {
        PRESET_USE_OK = 1,
        PRESET_USE_OK_PARTIAL = 2,
        PRESET_USE_ERR_UNKNOWN = 3,
        PRESET_USE_ERR_CRITERION = 4,
        PRESET_USE_ERR_BAD_PRESET_ID = 5,
        PRESET_USE_ERR_COOLDOWN = 6
    }
    export enum PrismListenEnum {
        PRISM_LISTEN_NONE = 0,
        PRISM_LISTEN_MINE = 1,
        PRISM_LISTEN_ALL = 2
    }
    export enum PrismSetSabotagedRefusedReasonEnum {
        SABOTAGE_REFUSED = -1,
        SABOTAGE_INSUFFICIENT_RIGHTS = 0,
        SABOTAGE_MEMBER_ACCOUNT_NEEDED = 1,
        SABOTAGE_RESTRICTED_ACCOUNT = 2,
        SABOTAGE_WRONG_ALLIANCE = 3,
        SABOTAGE_NO_PRISM = 4,
        SABOTAGE_WRONG_STATE = 5
    }
    export enum PrismStateEnum {
        PRISM_STATE_INVULNERABLE = 0,
        PRISM_STATE_NORMAL = 1,
        PRISM_STATE_ATTACKED = 2,
        PRISM_STATE_FIGHTING = 3,
        PRISM_STATE_WEAKENED = 4,
        PRISM_STATE_VULNERABLE = 5,
        PRISM_STATE_DEFEATED = 6,
        PRISM_STATE_SABOTAGED = 7
    }
    export enum PvpArenaStepEnum {
        ARENA_STEP_REGISTRED = 0,
        ARENA_STEP_WAITING_FIGHT = 1,
        ARENA_STEP_STARTING_FIGHT = 2,
        ARENA_STEP_UNREGISTER = 3
    }
    export enum PvpArenaTypeEnum {
        ARENA_TYPE_3VS3 = 3,
        ARENA_TYPE_5VS5 = 5
    }
    export enum SequenceTypeEnum {
        SEQUENCE_SPELL = 1,
        SEQUENCE_WEAPON = 2,
        SEQUENCE_GLYPH_TRAP = 3,
        SEQUENCE_TRIGGERED = 4,
        SEQUENCE_MOVE = 5,
        SEQUENCE_CHARACTER_DEATH = 6,
        SEQUENCE_TURN_START = 7,
        SEQUENCE_TURN_END = 8,
        SEQUENCE_FIGHT_START = 9
    }
    export enum ServerConnectionErrorEnum {
        SERVER_CONNECTION_ERROR_DUE_TO_STATUS = 0,
        SERVER_CONNECTION_ERROR_NO_REASON = 1,
        SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED = 2,
        SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED = 3,
        SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED = 4,
        SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY = 5,
        SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY = 6
    }
    export enum ServerStatusEnum {
        STATUS_UNKNOWN = 0,
        OFFLINE = 1,
        STARTING = 2,
        ONLINE = 3,
        NOJOIN = 4,
        SAVING = 5,
        STOPING = 6,
        FULL = 7
    }
    export enum ShortcutBarEnum {
        GENERAL_SHORTCUT_BAR = 0,
        SPELL_SHORTCUT_BAR = 1
    }
    export enum SocialContactCategoryEnum {
        SOCIAL_CONTACT_FRIEND = 0,
        SOCIAL_CONTACT_SPOUSE = 1,
        SOCIAL_CONTACT_PARTY = 2,
        SOCIAL_CONTACT_GUILD = 3,
        SOCIAL_CONTACT_ALLIANCE = 4,
        SOCIAL_CONTACT_CRAFTER = 5,
        SOCIAL_CONTACT_INTERLOCUTOR = 6,
        SOCIAL_CONTACT_FIGHT = 7
    }
    export enum SocialGroupCreationResultEnum {
        SOCIAL_GROUP_CREATE_OK = 1,
        SOCIAL_GROUP_CREATE_ERROR_NAME_INVALID = 2,
        SOCIAL_GROUP_CREATE_ERROR_ALREADY_IN_GROUP = 3,
        SOCIAL_GROUP_CREATE_ERROR_NAME_ALREADY_EXISTS = 4,
        SOCIAL_GROUP_CREATE_ERROR_EMBLEM_ALREADY_EXISTS = 5,
        SOCIAL_GROUP_CREATE_ERROR_LEAVE = 6,
        SOCIAL_GROUP_CREATE_ERROR_CANCEL = 7,
        SOCIAL_GROUP_CREATE_ERROR_REQUIREMENT_UNMET = 8,
        SOCIAL_GROUP_CREATE_ERROR_EMBLEM_INVALID = 9,
        SOCIAL_GROUP_CREATE_ERROR_TAG_INVALID = 10,
        SOCIAL_GROUP_CREATE_ERROR_TAG_ALREADY_EXISTS = 11,
        SOCIAL_GROUP_CREATE_ERROR_NEEDS_SUBGROUP = 12,
        SOCIAL_GROUP_CREATE_ERROR_UNKNOWN = 99
    }
    export enum SocialGroupInvitationStateEnum {
        SOCIAL_GROUP_INVITATION_FAILED = 0,
        SOCIAL_GROUP_INVITATION_SENT = 1,
        SOCIAL_GROUP_INVITATION_CANCELED = 2,
        SOCIAL_GROUP_INVITATION_OK = 3
    }
    export enum StatisticTypeEnum {
        STEP0000_CHOSE_NICKNAME = 78,
        STEP0100_CHOSE_SERVER = 79,
        STEP0200_CREATE_FIRST_CHARACTER = 80,
        STEP0300_LOADING_SCREEN = 81,
        STEP0400_DOFUS_TRAILER = 82,
        STEP0500_ARRIVES_ON_TUTORIAL = 83,
        STEP0550_QUITS_TUTORIAL = 84,
        STEP0600_TUTO1_MOVE_MAP = 85,
        STEP0700_TUTO2_TALK_TO_YAKASI = 86,
        STEP0800_TUTO3_EQUIP_RING = 87,
        STEP0820_CLIC_BAG = 88,
        STEP0840_CLIC_RING = 89,
        STEP0860_EQUIP_RING = 90,
        STEP0860_EXIT_BAG = 91,
        STEP0900_TUTO4_CHANGE_MAP = 92,
        STEP1000_TUTO5_START_FIRST_FIGHT = 93,
        STEP1100_TUTO6_CHOSE_START_POSITION = 94,
        STEP1130_CHOSE_POSITION = 95,
        STEP1160_CLIC_READY = 96,
        STEP1200_TUTO7_MOVE_IN_FIGHT = 97,
        STEP1900_TUTO8_USE_SPELL = 98,
        STEP1930_CHOSE_SPELL = 99,
        STEP1960_USE_SPELL = 100,
        STEP2000_TUTO9_END_TURN = 101,
        STEP2100_TUTO10_WIN_FIGHT = 102,
        STEP2050_TUTO10_LOSE_FIGHT = 103,
        STEP2200_TUTO11_START_FIRST_QUEST = 104,
        STEP2220_CLIC_YAKASI = 105,
        STEP2240_TALK_YAKASI = 106,
        STEP2260_ACCEPT_MISSION = 107,
        STEP2300_TUTO12_EQUIP_SET = 108,
        STEP2350_EXIT_BAG = 109,
        STEP2400_TUTO13_LETS_KILL_MONSTER = 110,
        STEP2430_GO_TO_NEXT_MAP = 111,
        STEP2460_CLIC_MONSTER = 112,
        STEP2500_TUTO14_END_SECOND_FIGHT = 113,
        STEP2600_TUTO15_END_TUTO = 114,
        STEP2620_CLIC_YAKASI = 115,
        STEP2640_END_DIALOG = 116,
        CLICK_ON_BUTTON = 151,
        DISPLAY_MENU = 152
    }
    export enum StatsUpgradeResultEnum {
        NONE = -1,
        SUCCESS = 0,
        RESTRICTED = 1,
        GUEST = 2,
        IN_FIGHT = 3,
        NOT_ENOUGH_POINT = 4
    }
    export enum SubEntityBindingPointCategoryEnum {
        HOOK_POINT_CATEGORY_UNUSED = 0,
        HOOK_POINT_CATEGORY_PET = 1,
        HOOK_POINT_CATEGORY_MOUNT_DRIVER = 2,
        HOOK_POINT_CATEGORY_LIFTED_ENTITY = 3,
        HOOK_POINT_CATEGORY_BASE_BACKGROUND = 4,
        HOOK_POINT_CATEGORY_MERCHANT_BAG = 5,
        HOOK_POINT_CATEGORY_BASE_FOREGROUND = 6,
        HOOK_POINT_CATEGORY_PET_FOLLOWER = 7
    }
    export enum SubscriptionRequiredEnum {
        LIMITED_TO_SUBSCRIBER = 0,
        LIMIT_ON_JOB_XP = 1,
        LIMIT_ON_JOB_USE = 2,
        LIMIT_ON_MAP = 3,
        LIMIT_ON_ITEM = 4,
        LIMIT_ON_VENDOR = 5
    }
    export enum TaxCollectorErrorReasonEnum {
        TAX_COLLECTOR_ERROR_UNKNOWN = 0,
        TAX_COLLECTOR_NOT_FOUND = 1,
        TAX_COLLECTOR_NOT_OWNED = 2,
        TAX_COLLECTOR_NO_RIGHTS = 3,
        TAX_COLLECTOR_MAX_REACHED = 4,
        TAX_COLLECTOR_ALREADY_ONE = 5,
        TAX_COLLECTOR_CANT_HIRE_YET = 6,
        TAX_COLLECTOR_CANT_HIRE_HERE = 7,
        TAX_COLLECTOR_NOT_ENOUGH_KAMAS = 8
    }
    export enum TaxCollectorStateEnum {
        STATE_COLLECTING = 0,
        STATE_WAITING_FOR_HELP = 1,
        STATE_FIGHTING = 2
    }
    export enum TeamEnum {
        TEAM_CHALLENGER = 0,
        TEAM_DEFENDER = 1,
        TEAM_SPECTATOR = 2
    }
    export enum TeamTypeEnum {
        TEAM_TYPE_PLAYER = 0,
        TEAM_TYPE_MONSTER = 1,
        TEAM_TYPE_MUTANT = 2,
        TEAM_TYPE_TAXCOLLECTOR = 3,
        TEAM_TYPE_BAD_PLAYER = 4,
        TEAM_TYPE_PRISM = 5
    }
    export enum TeleporterTypeEnum {
        TELEPORTER_ZAAP = 0,
        TELEPORTER_SUBWAY = 1,
        TELEPORTER_PRISM = 2
    }
    export enum TextInformationTypeEnum {
        TEXT_INFORMATION_MESSAGE = 0,
        TEXT_INFORMATION_ERROR = 1,
        TEXT_INFORMATION_PVP = 2,
        TEXT_INFORMATION_FIGHT_LOG = 3,
        TEXT_INFORMATION_POPUP = 4,
        TEXT_LIVING_OBJECT = 5,
        TEXT_ENTITY_TALK = 6,
        TEXT_INFORMATION_FIGHT = 7
    }
    export enum TreasureHuntDigRequestEnum {
        TREASURE_HUNT_DIG_ERROR_UNDEFINED = 0,
        TREASURE_HUNT_DIG_NEW_HINT = 1,
        TREASURE_HUNT_DIG_FINISHED = 2,
        TREASURE_HUNT_DIG_WRONG = 3,
        TREASURE_HUNT_DIG_LOST = 4,
        TREASURE_HUNT_DIG_ERROR_IMPOSSIBLE = 5,
        TREASURE_HUNT_DIG_WRONG_AND_YOU_KNOW_IT = 6
    }
    export enum TreasureHuntFlagRequestEnum {
        TREASURE_HUNT_FLAG_ERROR_UNDEFINED = 0,
        TREASURE_HUNT_FLAG_OK = 1,
        TREASURE_HUNT_FLAG_WRONG = 2,
        TREASURE_HUNT_FLAG_TOO_MANY = 3,
        TREASURE_HUNT_FLAG_ERROR_IMPOSSIBLE = 4,
        TREASURE_HUNT_FLAG_WRONG_INDEX = 5,
        TREASURE_HUNT_FLAG_SAME_MAP = 6
    }
    export enum TreasureHuntFlagStateEnum {
        TREASURE_HUNT_FLAG_STATE_UNKNOWN = 0,
        TREASURE_HUNT_FLAG_STATE_OK = 1,
        TREASURE_HUNT_FLAG_STATE_WRONG = 2
    }
    export enum TreasureHuntRequestEnum {
        TREASURE_HUNT_ERROR_UNDEFINED = 0,
        TREASURE_HUNT_ERROR_NO_QUEST_FOUND = 2,
        TREASURE_HUNT_ERROR_ALREADY_HAVE_QUEST = 3,
        TREASURE_HUNT_ERROR_NOT_AVAILABLE = 4,
        TREASURE_HUNT_OK = 1
    }
    export enum TreasureHuntTypeEnum {
        TREASURE_HUNT_CLASSIC = 0,
        TREASURE_HUNT_PORTAL = 1,
        TREASURE_HUNT_LEGENDARY = 2
    }
    export enum UpdatableMountBoostEnum {
        STAMINA = 3,
        MATURITY = 5,
        ENERGY = 1,
        SERENITY = 2,
        LOVE = 4,
        TIREDNESS = 6,
        RIDEABLE = 7
    }
    export class AdminCommandMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 76;

        content: string;

        constructor() {
            this.content = '';
            super();
        }

        public getMessageId(): number {
            return AdminCommandMessage.ID;
        }

        public reset(): void {
            this.content = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AdminCommandMessage(param1);
        }

        public serializeAs_AdminCommandMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.content);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AdminCommandMessage(param1);
        }

        public deserializeAs_AdminCommandMessage(param1: ICustomDataInput): void {
            this.content = param1.readUTF();

        }
    }
    export class AdminQuietCommandMessage extends AdminCommandMessage {
        public static ID: number = 5662;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return AdminQuietCommandMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AdminQuietCommandMessage(param1);
        }

        public serializeAs_AdminQuietCommandMessage(param1: ICustomDataOutput): void {
            super.serializeAs_AdminCommandMessage(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AdminQuietCommandMessage(param1);
        }

        public deserializeAs_AdminQuietCommandMessage(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class ConsoleCommandsListMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6127;

        aliases: string[];
        args: string[];
        descriptions: string[];

        constructor() {
            this.aliases = [];
            this.args = [];
            this.descriptions = [];
            super();
        }

        public getMessageId(): number {
            return ConsoleCommandsListMessage.ID;
        }

        public reset(): void {
            this.aliases = [];
            this.args = [];
            this.descriptions = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ConsoleCommandsListMessage(param1);
        }

        public serializeAs_ConsoleCommandsListMessage(param1: ICustomDataOutput): void {
            param1.writeShort(this.aliases.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.aliases.length) {
                param1.writeUTF(this.aliases[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.args.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.args.length) {
                param1.writeUTF(this.args[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.descriptions.length);
            var _loc4_: number = 0;
            while (_loc4_ < this.descriptions.length) {
                param1.writeUTF(this.descriptions[_loc4_]);
                _loc4_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ConsoleCommandsListMessage(param1);
        }

        public deserializeAs_ConsoleCommandsListMessage(param1: ICustomDataInput): void {
            var _loc8_: string = null;
            var _loc9_: string = null;
            var _loc10_: string = null;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc8_ = param1.readUTF();
                this.aliases.push(_loc8_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc9_ = param1.readUTF();
                this.args.push(_loc9_);
                _loc5_++;
            }
            var _loc6_: number = param1.readUnsignedShort();
            var _loc7_: number = 0;
            while (_loc7_ < _loc6_) {
                _loc10_ = param1.readUTF();
                this.descriptions.push(_loc10_);
                _loc7_++;
            }

        }
    }
    export class ConsoleMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 75;

        type: number;
        content: string;

        constructor() {
            this.type = 0;
            this.content = '';
            super();
        }

        public getMessageId(): number {
            return ConsoleMessage.ID;
        }

        public reset(): void {
            this.type = 0;
            this.content = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ConsoleMessage(param1);
        }

        public serializeAs_ConsoleMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.type);
            param1.writeUTF(this.content);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ConsoleMessage(param1);
        }

        public deserializeAs_ConsoleMessage(param1: ICustomDataInput): void {
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of ConsoleMessage.type.');
            }
            this.content = param1.readUTF();

        }
    }
    export class NetworkDataContainerMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 2;

        content: ByteArray;

        constructor() {
            this.content = new ByteArray();
            super();
        }

        public getMessageId(): number {
            return NetworkDataContainerMessage.ID;
        }

        public reset(): void {
            this.content = new ByteArray();
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NetworkDataContainerMessage(param1);
        }

        public serializeAs_NetworkDataContainerMessage(param1: ICustomDataOutput): void {
            param1.writeBytes(this.content);
            throw new Error('Not implemented');

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NetworkDataContainerMessage(param1);
        }

        public deserializeAs_NetworkDataContainerMessage(param1: ICustomDataInput): void {
            var _loc2_: number = param1.readVarInt();
            var _loc3_: ByteArray = new ByteArray();
            param1.readBytes(_loc3_, 0, _loc2_);
            _loc3_.uncompress();
            this.content = _loc3_;

        }
    }
    export class BasicPingMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 182;

        quiet: boolean;

        constructor() {
            this.quiet = false;
            super();
        }

        public getMessageId(): number {
            return BasicPingMessage.ID;
        }

        public reset(): void {
            this.quiet = false;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_BasicPingMessage(param1);
        }

        public serializeAs_BasicPingMessage(param1: ICustomDataOutput): void {
            param1.writeBoolean(this.quiet);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_BasicPingMessage(param1);
        }

        public deserializeAs_BasicPingMessage(param1: ICustomDataInput): void {
            this.quiet = param1.readBoolean();

        }
    }
    export class BasicPongMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 183;

        quiet: boolean;

        constructor() {
            this.quiet = false;
            super();
        }

        public getMessageId(): number {
            return BasicPongMessage.ID;
        }

        public reset(): void {
            this.quiet = false;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_BasicPongMessage(param1);
        }

        public serializeAs_BasicPongMessage(param1: ICustomDataOutput): void {
            param1.writeBoolean(this.quiet);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_BasicPongMessage(param1);
        }

        public deserializeAs_BasicPongMessage(param1: ICustomDataInput): void {
            this.quiet = param1.readBoolean();

        }
    }
    export class BasicStatMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6530;

        statId: number;

        constructor() {
            this.statId = 0;
            super();
        }

        public getMessageId(): number {
            return BasicStatMessage.ID;
        }

        public reset(): void {
            this.statId = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_BasicStatMessage(param1);
        }

        public serializeAs_BasicStatMessage(param1: ICustomDataOutput): void {
            param1.writeVarShort(this.statId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_BasicStatMessage(param1);
        }

        public deserializeAs_BasicStatMessage(param1: ICustomDataInput): void {
            this.statId = param1.readVarUhShort();
            if (this.statId < 0) {
                throw new Error('Forbidden value (' + this.statId + ') on element of BasicStatMessage.statId.');
            }

        }
    }
    export class CredentialsAcknowledgementMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6314;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return CredentialsAcknowledgementMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CredentialsAcknowledgementMessage(param1);
        }

        public serializeAs_CredentialsAcknowledgementMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CredentialsAcknowledgementMessage(param1);
        }

        public deserializeAs_CredentialsAcknowledgementMessage(param1: ICustomDataInput): void {

        }
    }
    export class HelloConnectMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 3;

        salt: string;
        key: number[];

        constructor() {
            this.salt = '';
            this.key = [];
            super();
        }

        public getMessageId(): number {
            return HelloConnectMessage.ID;
        }

        public reset(): void {
            this.salt = '';
            this.key = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HelloConnectMessage(param1);
        }

        public serializeAs_HelloConnectMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.salt);
            param1.writeVarInt(this.key.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.key.length) {
                param1.writeByte(this.key[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HelloConnectMessage(param1);
        }

        public deserializeAs_HelloConnectMessage(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
            this.salt = param1.readUTF();
            var _loc2_: number = param1.readVarInt();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.key.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class IdentificationAccountForceMessage extends IdentificationMessage {
        public static ID: number = 6119;

        forcedAccountLogin: string;

        constructor() {
            this.forcedAccountLogin = '';
            super();
        }

        public getMessageId(): number {
            return IdentificationAccountForceMessage.ID;
        }

        public reset(): void {
            this.forcedAccountLogin = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentificationAccountForceMessage(param1);
        }

        public serializeAs_IdentificationAccountForceMessage(param1: ICustomDataOutput): void {
            super.serializeAs_IdentificationMessage(param1);
            param1.writeUTF(this.forcedAccountLogin);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentificationAccountForceMessage(param1);
        }

        public deserializeAs_IdentificationAccountForceMessage(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.forcedAccountLogin = param1.readUTF();

        }
    }
    export class IdentificationFailedBannedMessage extends IdentificationFailedMessage {
        public static ID: number = 6174;

        banEndDate: number;

        constructor() {
            this.banEndDate = 0;
            super();
        }

        public getMessageId(): number {
            return IdentificationFailedBannedMessage.ID;
        }

        public reset(): void {
            this.banEndDate = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentificationFailedBannedMessage(param1);
        }

        public serializeAs_IdentificationFailedBannedMessage(param1: ICustomDataOutput): void {
            super.serializeAs_IdentificationFailedMessage(param1);
            if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.banEndDate + ') on element banEndDate.');
            }
            param1.writeDouble(this.banEndDate);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentificationFailedBannedMessage(param1);
        }

        public deserializeAs_IdentificationFailedBannedMessage(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.banEndDate = param1.readDouble();
            if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.banEndDate + ') on element of IdentificationFailedBannedMessage.banEndDate.');
            }

        }
    }
    export class IdentificationFailedForBadVersionMessage extends IdentificationFailedMessage {
        public static ID: number = 21;

        requiredVersion: Version;

        constructor() {
            this.requiredVersion = new Version();
            super();
        }

        public getMessageId(): number {
            return IdentificationFailedForBadVersionMessage.ID;
        }

        public reset(): void {
            this.requiredVersion = new Version();
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentificationFailedForBadVersionMessage(param1);
        }

        public serializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataOutput): void {
            super.serializeAs_IdentificationFailedMessage(param1);
            this.requiredVersion.serializeAs_Version(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentificationFailedForBadVersionMessage(param1);
        }

        public deserializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.requiredVersion = new Version();
            this.requiredVersion.deserialize(param1);

        }
    }
    export class IdentificationFailedMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 20;

        reason: number;

        constructor() {
            this.reason = 99;
            super();
        }

        public getMessageId(): number {
            return IdentificationFailedMessage.ID;
        }

        public reset(): void {
            this.reason = 99;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentificationFailedMessage(param1);
        }

        public serializeAs_IdentificationFailedMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.reason);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentificationFailedMessage(param1);
        }

        public deserializeAs_IdentificationFailedMessage(param1: ICustomDataInput): void {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of IdentificationFailedMessage.reason.');
            }

        }
    }
    export class IdentificationMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 4;

        version: VersionExtended;
        lang: string;
        credentials: number[];
        serverId: number;
        autoconnect: boolean;
        useCertificate: boolean;
        useLoginToken: boolean;
        sessionOptionalSalt: number;
        failedAttempts: number[];

        constructor() {
            this.version = new VersionExtended();
            this.lang = '';
            this.credentials = [];
            this.serverId = 0;
            this.autoconnect = false;
            this.useCertificate = false;
            this.useLoginToken = false;
            this.sessionOptionalSalt = 0;
            this.failedAttempts = [];
            super();
        }

        public getMessageId(): number {
            return IdentificationMessage.ID;
        }

        public reset(): void {
            this.version = new VersionExtended();
            this.lang = '';
            this.credentials = [];
            this.serverId = 0;
            this.autoconnect = false;
            this.useCertificate = false;
            this.useLoginToken = false;
            this.sessionOptionalSalt = 0;
            this.failedAttempts = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentificationMessage(param1);
        }

        public serializeAs_IdentificationMessage(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.autoconnect);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.useCertificate);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.useLoginToken);
            param1.writeByte(_loc2_);
            this.version.serializeAs_VersionExtended(param1);
            param1.writeUTF(this.lang);
            param1.writeVarInt(this.credentials.length);
            var _loc3_: number = 0;
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
            var _loc4_: number = 0;
            while (_loc4_ < this.failedAttempts.length) {
                if (this.failedAttempts[_loc4_] < 0) {
                    throw new Error('Forbidden value (' + this.failedAttempts[_loc4_] + ') on element 9 (starting at 1) of failedAttempts.');
                }
                param1.writeVarShort(this.failedAttempts[_loc4_]);
                _loc4_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentificationMessage(param1);
        }

        public deserializeAs_IdentificationMessage(param1: ICustomDataInput): void {
            var _loc7_: any = 0;
            var _loc8_: number = 0;
            var _loc2_: number = param1.readByte();
            this.autoconnect = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.useCertificate = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.useLoginToken = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.version = new VersionExtended();
            this.version.deserialize(param1);
            this.lang = param1.readUTF();
            var _loc3_: number = param1.readVarInt();
            var _loc4_: number = 0;
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
            var _loc5_: number = param1.readUnsignedShort();
            var _loc6_: number = 0;
            while (_loc6_ < _loc5_) {
                _loc8_ = param1.readVarUhShort();
                if (_loc8_ < 0) {
                    throw new Error('Forbidden value (' + _loc8_ + ') on elements of failedAttempts.');
                }
                this.failedAttempts.push(_loc8_);
                _loc6_++;
            }

        }
    }
    export class IdentificationSuccessMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 22;

        login: string;
        nickname: string;
        accountId: number;
        communityId: number;
        hasRights: boolean;
        secretQuestion: string;
        accountCreation: number;
        subscriptionElapsedDuration: number;
        subscriptionEndDate: number;
        wasAlreadyConnected: boolean;

        constructor() {
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
            super();
        }

        public getMessageId(): number {
            return IdentificationSuccessMessage.ID;
        }

        public reset(): void {
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
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentificationSuccessMessage(param1);
        }

        public serializeAs_IdentificationSuccessMessage(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentificationSuccessMessage(param1);
        }

        public deserializeAs_IdentificationSuccessMessage(param1: ICustomDataInput): void {
            var _loc2_: number = param1.readByte();
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

        }
    }
    export class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage {
        public static ID: number = 6209;

        loginToken: string;

        constructor() {
            this.loginToken = '';
            super();
        }

        public getMessageId(): number {
            return IdentificationSuccessWithLoginTokenMessage.ID;
        }

        public reset(): void {
            this.loginToken = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
        }

        public serializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataOutput): void {
            super.serializeAs_IdentificationSuccessMessage(param1);
            param1.writeUTF(this.loginToken);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
        }

        public deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.loginToken = param1.readUTF();

        }
    }
    export class SelectedServerDataExtendedMessage extends SelectedServerDataMessage {
        public static ID: number = 6469;

        serverIds: number[];

        constructor() {
            this.serverIds = [];
            super();
        }

        public getMessageId(): number {
            return SelectedServerDataExtendedMessage.ID;
        }

        public reset(): void {
            this.serverIds = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SelectedServerDataExtendedMessage(param1);
        }

        public serializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataOutput): void {
            super.serializeAs_SelectedServerDataMessage(param1);
            param1.writeShort(this.serverIds.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.serverIds.length) {
                if (this.serverIds[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.serverIds[_loc2_] + ') on element 1 (starting at 1) of serverIds.');
                }
                param1.writeVarShort(this.serverIds[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SelectedServerDataExtendedMessage(param1);
        }

        public deserializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of serverIds.');
                }
                this.serverIds.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class SelectedServerDataMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 42;

        serverId: number;
        address: string;
        port: number;
        canCreateNewCharacter: boolean;
        ticket: number[];

        constructor() {
            this.serverId = 0;
            this.address = '';
            this.port = 0;
            this.canCreateNewCharacter = false;
            this.ticket = [];
            super();
        }

        public getMessageId(): number {
            return SelectedServerDataMessage.ID;
        }

        public reset(): void {
            this.serverId = 0;
            this.address = '';
            this.port = 0;
            this.canCreateNewCharacter = false;
            this.ticket = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SelectedServerDataMessage(param1);
        }

        public serializeAs_SelectedServerDataMessage(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.ticket.length) {
                param1.writeByte(this.ticket[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SelectedServerDataMessage(param1);
        }

        public deserializeAs_SelectedServerDataMessage(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
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
            var _loc2_: number = param1.readVarInt();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.ticket.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class SelectedServerRefusedMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 41;

        serverId: number;
        error: number;
        serverStatus: number;

        constructor() {
            this.serverId = 0;
            this.error = 1;
            this.serverStatus = 1;
            super();
        }

        public getMessageId(): number {
            return SelectedServerRefusedMessage.ID;
        }

        public reset(): void {
            this.serverId = 0;
            this.error = 1;
            this.serverStatus = 1;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SelectedServerRefusedMessage(param1);
        }

        public serializeAs_SelectedServerRefusedMessage(param1: ICustomDataOutput): void {
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
            }
            param1.writeVarShort(this.serverId);
            param1.writeByte(this.error);
            param1.writeByte(this.serverStatus);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SelectedServerRefusedMessage(param1);
        }

        public deserializeAs_SelectedServerRefusedMessage(param1: ICustomDataInput): void {
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

        }
    }
    export class ServerSelectionMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 40;

        serverId: number;

        constructor() {
            this.serverId = 0;
            super();
        }

        public getMessageId(): number {
            return ServerSelectionMessage.ID;
        }

        public reset(): void {
            this.serverId = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ServerSelectionMessage(param1);
        }

        public serializeAs_ServerSelectionMessage(param1: ICustomDataOutput): void {
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
            }
            param1.writeVarShort(this.serverId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ServerSelectionMessage(param1);
        }

        public deserializeAs_ServerSelectionMessage(param1: ICustomDataInput): void {
            this.serverId = param1.readVarUhShort();
            if (this.serverId < 0) {
                throw new Error('Forbidden value (' + this.serverId + ') on element of ServerSelectionMessage.serverId.');
            }

        }
    }
    export class ServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 50;

        server: GameServerInformations;

        constructor() {
            this.server = new GameServerInformations();
            super();
        }

        public getMessageId(): number {
            return ServerStatusUpdateMessage.ID;
        }

        public reset(): void {
            this.server = new GameServerInformations();
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ServerStatusUpdateMessage(param1);
        }

        public serializeAs_ServerStatusUpdateMessage(param1: ICustomDataOutput): void {
            this.server.serializeAs_GameServerInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ServerStatusUpdateMessage(param1);
        }

        public deserializeAs_ServerStatusUpdateMessage(param1: ICustomDataInput): void {
            this.server = new GameServerInformations();
            this.server.deserialize(param1);

        }
    }
    export class ServersListMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 30;

        servers: GameServerInformations[];
        alreadyConnectedToServerId: number;
        canCreateNewCharacter: boolean;

        constructor() {
            this.servers = [];
            this.alreadyConnectedToServerId = 0;
            this.canCreateNewCharacter = false;
            super();
        }

        public getMessageId(): number {
            return ServersListMessage.ID;
        }

        public reset(): void {
            this.servers = [];
            this.alreadyConnectedToServerId = 0;
            this.canCreateNewCharacter = false;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ServersListMessage(param1);
        }

        public serializeAs_ServersListMessage(param1: ICustomDataOutput): void {
            param1.writeShort(this.servers.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.servers.length) {
                (this.servers[_loc2_]).serializeAs_GameServerInformations(param1);
                _loc2_++;
            }
            if (this.alreadyConnectedToServerId < 0) {
                throw new Error('Forbidden value (' + this.alreadyConnectedToServerId + ') on element alreadyConnectedToServerId.');
            }
            param1.writeVarShort(this.alreadyConnectedToServerId);
            param1.writeBoolean(this.canCreateNewCharacter);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ServersListMessage(param1);
        }

        public deserializeAs_ServersListMessage(param1: ICustomDataInput): void {
            var _loc4_: GameServerInformations = null;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
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

        }
    }
    export class AccountLinkRequiredMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6607;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return AccountLinkRequiredMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AccountLinkRequiredMessage(param1);
        }

        public serializeAs_AccountLinkRequiredMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AccountLinkRequiredMessage(param1);
        }

        public deserializeAs_AccountLinkRequiredMessage(param1: ICustomDataInput): void {

        }
    }
    export class NicknameAcceptedMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 5641;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return NicknameAcceptedMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NicknameAcceptedMessage(param1);
        }

        public serializeAs_NicknameAcceptedMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NicknameAcceptedMessage(param1);
        }

        public deserializeAs_NicknameAcceptedMessage(param1: ICustomDataInput): void {

        }
    }
    export class NicknameChoiceRequestMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 5639;

        nickname: string;

        constructor() {
            this.nickname = '';
            super();
        }

        public getMessageId(): number {
            return NicknameChoiceRequestMessage.ID;
        }

        public reset(): void {
            this.nickname = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NicknameChoiceRequestMessage(param1);
        }

        public serializeAs_NicknameChoiceRequestMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.nickname);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NicknameChoiceRequestMessage(param1);
        }

        public deserializeAs_NicknameChoiceRequestMessage(param1: ICustomDataInput): void {
            this.nickname = param1.readUTF();

        }
    }
    export class NicknameRefusedMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 5638;

        reason: number;

        constructor() {
            this.reason = 99;
            super();
        }

        public getMessageId(): number {
            return NicknameRefusedMessage.ID;
        }

        public reset(): void {
            this.reason = 99;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NicknameRefusedMessage(param1);
        }

        public serializeAs_NicknameRefusedMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.reason);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NicknameRefusedMessage(param1);
        }

        public deserializeAs_NicknameRefusedMessage(param1: ICustomDataInput): void {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of NicknameRefusedMessage.reason.');
            }

        }
    }
    export class NicknameRegistrationMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 5640;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return NicknameRegistrationMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NicknameRegistrationMessage(param1);
        }

        public serializeAs_NicknameRegistrationMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NicknameRegistrationMessage(param1);
        }

        public deserializeAs_NicknameRegistrationMessage(param1: ICustomDataInput): void {

        }
    }
    export class AcquaintanceSearchErrorMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6143;

        reason: number;

        constructor() {
            this.reason = 0;
            super();
        }

        public getMessageId(): number {
            return AcquaintanceSearchErrorMessage.ID;
        }

        public reset(): void {
            this.reason = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AcquaintanceSearchErrorMessage(param1);
        }

        public serializeAs_AcquaintanceSearchErrorMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.reason);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AcquaintanceSearchErrorMessage(param1);
        }

        public deserializeAs_AcquaintanceSearchErrorMessage(param1: ICustomDataInput): void {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of AcquaintanceSearchErrorMessage.reason.');
            }

        }
    }
    export class AcquaintanceSearchMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6144;

        nickname: string;

        constructor() {
            this.nickname = '';
            super();
        }

        public getMessageId(): number {
            return AcquaintanceSearchMessage.ID;
        }

        public reset(): void {
            this.nickname = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AcquaintanceSearchMessage(param1);
        }

        public serializeAs_AcquaintanceSearchMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.nickname);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AcquaintanceSearchMessage(param1);
        }

        public deserializeAs_AcquaintanceSearchMessage(param1: ICustomDataInput): void {
            this.nickname = param1.readUTF();

        }
    }
    export class AcquaintanceServerListMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6142;

        servers: number[];

        constructor() {
            this.servers = [];
            super();
        }

        public getMessageId(): number {
            return AcquaintanceServerListMessage.ID;
        }

        public reset(): void {
            this.servers = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AcquaintanceServerListMessage(param1);
        }

        public serializeAs_AcquaintanceServerListMessage(param1: ICustomDataOutput): void {
            param1.writeShort(this.servers.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.servers.length) {
                if (this.servers[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.servers[_loc2_] + ') on element 1 (starting at 1) of servers.');
                }
                param1.writeVarShort(this.servers[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AcquaintanceServerListMessage(param1);
        }

        public deserializeAs_AcquaintanceServerListMessage(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of servers.');
                }
                this.servers.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class DebugClearHighlightCellsMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 2002;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return DebugClearHighlightCellsMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DebugClearHighlightCellsMessage(param1);
        }

        public serializeAs_DebugClearHighlightCellsMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DebugClearHighlightCellsMessage(param1);
        }

        public deserializeAs_DebugClearHighlightCellsMessage(param1: ICustomDataInput): void {

        }
    }
    export class DebugHighlightCellsMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 2001;

        color: number;
        cells: number[];

        constructor() {
            this.color = 0;
            this.cells = [];
            super();
        }

        public getMessageId(): number {
            return DebugHighlightCellsMessage.ID;
        }

        public reset(): void {
            this.color = 0;
            this.cells = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DebugHighlightCellsMessage(param1);
        }

        public serializeAs_DebugHighlightCellsMessage(param1: ICustomDataOutput): void {
            param1.writeInt(this.color);
            param1.writeShort(this.cells.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.cells.length) {
                if (this.cells[_loc2_] < 0 || this.cells[_loc2_] > 559) {
                    throw new Error('Forbidden value (' + this.cells[_loc2_] + ') on element 2 (starting at 1) of cells.');
                }
                param1.writeVarShort(this.cells[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DebugHighlightCellsMessage(param1);
        }

        public deserializeAs_DebugHighlightCellsMessage(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            this.color = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0 || _loc4_ > 559) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of cells.');
                }
                this.cells.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class DebugInClientMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6028;

        level: number;
        message: string;

        constructor() {
            this.level = 0;
            this.message = '';
            super();
        }

        public getMessageId(): number {
            return DebugInClientMessage.ID;
        }

        public reset(): void {
            this.level = 0;
            this.message = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DebugInClientMessage(param1);
        }

        public serializeAs_DebugInClientMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.level);
            param1.writeUTF(this.message);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DebugInClientMessage(param1);
        }

        public deserializeAs_DebugInClientMessage(param1: ICustomDataInput): void {
            this.level = param1.readByte();
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element of DebugInClientMessage.level.');
            }
            this.message = param1.readUTF();

        }
    }
    export class ProtocolRequired extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1;

        requiredVersion: number;
        currentVersion: number;

        constructor() {
            this.requiredVersion = 0;
            this.currentVersion = 0;
            super();
        }

        public getMessageId(): number {
            return ProtocolRequired.ID;
        }

        public reset(): void {
            this.requiredVersion = 0;
            this.currentVersion = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ProtocolRequired(param1);
        }

        public serializeAs_ProtocolRequired(param1: ICustomDataOutput): void {
            if (this.requiredVersion < 0) {
                throw new Error('Forbidden value (' + this.requiredVersion + ') on element requiredVersion.');
            }
            param1.writeInt(this.requiredVersion);
            if (this.currentVersion < 0) {
                throw new Error('Forbidden value (' + this.currentVersion + ') on element currentVersion.');
            }
            param1.writeInt(this.currentVersion);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ProtocolRequired(param1);
        }

        public deserializeAs_ProtocolRequired(param1: ICustomDataInput): void {
            this.requiredVersion = param1.readInt();
            if (this.requiredVersion < 0) {
                throw new Error('Forbidden value (' + this.requiredVersion + ') on element of ProtocolRequired.requiredVersion.');
            }
            this.currentVersion = param1.readInt();
            if (this.currentVersion < 0) {
                throw new Error('Forbidden value (' + this.currentVersion + ') on element of ProtocolRequired.currentVersion.');
            }

        }
    }
    export class LoginQueueStatusMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 10;

        position: number;
        total: number;

        constructor() {
            this.position = 0;
            this.total = 0;
            super();
        }

        public getMessageId(): number {
            return LoginQueueStatusMessage.ID;
        }

        public reset(): void {
            this.position = 0;
            this.total = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_LoginQueueStatusMessage(param1);
        }

        public serializeAs_LoginQueueStatusMessage(param1: ICustomDataOutput): void {
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element position.');
            }
            param1.writeShort(this.position);
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element total.');
            }
            param1.writeShort(this.total);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_LoginQueueStatusMessage(param1);
        }

        public deserializeAs_LoginQueueStatusMessage(param1: ICustomDataInput): void {
            this.position = param1.readUnsignedShort();
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element of LoginQueueStatusMessage.position.');
            }
            this.total = param1.readUnsignedShort();
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element of LoginQueueStatusMessage.total.');
            }

        }
    }
    export class QueueStatusMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6100;

        position: number;
        total: number;

        constructor() {
            this.position = 0;
            this.total = 0;
            super();
        }

        public getMessageId(): number {
            return QueueStatusMessage.ID;
        }

        public reset(): void {
            this.position = 0;
            this.total = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_QueueStatusMessage(param1);
        }

        public serializeAs_QueueStatusMessage(param1: ICustomDataOutput): void {
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element position.');
            }
            param1.writeShort(this.position);
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element total.');
            }
            param1.writeShort(this.total);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_QueueStatusMessage(param1);
        }

        public deserializeAs_QueueStatusMessage(param1: ICustomDataInput): void {
            this.position = param1.readUnsignedShort();
            if (this.position < 0 || this.position > 65535) {
                throw new Error('Forbidden value (' + this.position + ') on element of QueueStatusMessage.position.');
            }
            this.total = param1.readUnsignedShort();
            if (this.total < 0 || this.total > 65535) {
                throw new Error('Forbidden value (' + this.total + ') on element of QueueStatusMessage.total.');
            }

        }
    }
    export class TrustStatusMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6267;

        trusted: boolean;
        certified: boolean;

        constructor() {
            this.trusted = false;
            this.certified = false;
            super();
        }

        public getMessageId(): number {
            return TrustStatusMessage.ID;
        }

        public reset(): void {
            this.trusted = false;
            this.certified = false;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TrustStatusMessage(param1);
        }

        public serializeAs_TrustStatusMessage(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.trusted);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.certified);
            param1.writeByte(_loc2_);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TrustStatusMessage(param1);
        }

        public deserializeAs_TrustStatusMessage(param1: ICustomDataInput): void {
            var _loc2_: number = param1.readByte();
            this.trusted = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.certified = BooleanByteWrapper.getFlag(_loc2_, 1);

        }
    }
    export class CheckFileMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6156;

        filenameHash: string;
        type: number;
        value: string;

        constructor() {
            this.filenameHash = '';
            this.type = 0;
            this.value = '';
            super();
        }

        public getMessageId(): number {
            return CheckFileMessage.ID;
        }

        public reset(): void {
            this.filenameHash = '';
            this.type = 0;
            this.value = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CheckFileMessage(param1);
        }

        public serializeAs_CheckFileMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.filenameHash);
            param1.writeByte(this.type);
            param1.writeUTF(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CheckFileMessage(param1);
        }

        public deserializeAs_CheckFileMessage(param1: ICustomDataInput): void {
            this.filenameHash = param1.readUTF();
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of CheckFileMessage.type.');
            }
            this.value = param1.readUTF();

        }
    }
    export class CheckFileRequestMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6154;

        filename: string;
        type: number;

        constructor() {
            this.filename = '';
            this.type = 0;
            super();
        }

        public getMessageId(): number {
            return CheckFileRequestMessage.ID;
        }

        public reset(): void {
            this.filename = '';
            this.type = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CheckFileRequestMessage(param1);
        }

        public serializeAs_CheckFileRequestMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.filename);
            param1.writeByte(this.type);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CheckFileRequestMessage(param1);
        }

        public deserializeAs_CheckFileRequestMessage(param1: ICustomDataInput): void {
            this.filename = param1.readUTF();
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of CheckFileRequestMessage.type.');
            }

        }
    }
    export class CheckIntegrityMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6372;

        data: number[];

        constructor() {
            this.data = [];
            super();
        }

        public getMessageId(): number {
            return CheckIntegrityMessage.ID;
        }

        public reset(): void {
            this.data = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CheckIntegrityMessage(param1);
        }

        public serializeAs_CheckIntegrityMessage(param1: ICustomDataOutput): void {
            param1.writeVarInt(this.data.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.data.length) {
                param1.writeByte(this.data[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CheckIntegrityMessage(param1);
        }

        public deserializeAs_CheckIntegrityMessage(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
            var _loc2_: number = param1.readVarInt();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.data.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class ClientKeyMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 5607;

        key: string;

        constructor() {
            this.key = '';
            super();
        }

        public getMessageId(): number {
            return ClientKeyMessage.ID;
        }

        public reset(): void {
            this.key = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ClientKeyMessage(param1);
        }

        public serializeAs_ClientKeyMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.key);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ClientKeyMessage(param1);
        }

        public deserializeAs_ClientKeyMessage(param1: ICustomDataInput): void {
            this.key = param1.readUTF();

        }
    }
    export class RawDataMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6253;

        content: ByteArray;

        constructor() {
            this.content = new ByteArray();
            super();
        }

        public getMessageId(): number {
            return RawDataMessage.ID;
        }

        public reset(): void {
            this.content = new ByteArray();
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_RawDataMessage(param1);
        }

        public serializeAs_RawDataMessage(param1: ICustomDataOutput): void {
            param1.writeVarInt(this.content.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.content.length) {
                param1.writeByte(this.content.getArray()[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_RawDataMessage(param1);
        }

        public deserializeAs_RawDataMessage(param1: ICustomDataInput): void {
            var _loc2_: number = param1.readVarInt();
            param1.readBytes(this.content, 0, _loc2_);

        }
    }
    export class SystemMessageDisplayMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 189;

        hangUp: boolean;
        msgId: number;
        parameters: string[];

        constructor() {
            this.hangUp = false;
            this.msgId = 0;
            this.parameters = [];
            super();
        }

        public getMessageId(): number {
            return SystemMessageDisplayMessage.ID;
        }

        public reset(): void {
            this.hangUp = false;
            this.msgId = 0;
            this.parameters = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SystemMessageDisplayMessage(param1);
        }

        public serializeAs_SystemMessageDisplayMessage(param1: ICustomDataOutput): void {
            param1.writeBoolean(this.hangUp);
            if (this.msgId < 0) {
                throw new Error('Forbidden value (' + this.msgId + ') on element msgId.');
            }
            param1.writeVarShort(this.msgId);
            param1.writeShort(this.parameters.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.parameters.length) {
                param1.writeUTF(this.parameters[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SystemMessageDisplayMessage(param1);
        }

        public deserializeAs_SystemMessageDisplayMessage(param1: ICustomDataInput): void {
            var _loc4_: string = null;
            this.hangUp = param1.readBoolean();
            this.msgId = param1.readVarUhShort();
            if (this.msgId < 0) {
                throw new Error('Forbidden value (' + this.msgId + ') on element of SystemMessageDisplayMessage.msgId.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUTF();
                this.parameters.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class DownloadCurrentSpeedMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1511;

        downloadSpeed: number;

        constructor() {
            this.downloadSpeed = 0;
            super();
        }

        public getMessageId(): number {
            return DownloadCurrentSpeedMessage.ID;
        }

        public reset(): void {
            this.downloadSpeed = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DownloadCurrentSpeedMessage(param1);
        }

        public serializeAs_DownloadCurrentSpeedMessage(param1: ICustomDataOutput): void {
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element downloadSpeed.');
            }
            param1.writeByte(this.downloadSpeed);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DownloadCurrentSpeedMessage(param1);
        }

        public deserializeAs_DownloadCurrentSpeedMessage(param1: ICustomDataInput): void {
            this.downloadSpeed = param1.readByte();
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element of DownloadCurrentSpeedMessage.downloadSpeed.');
            }

        }
    }
    export class DownloadErrorMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1513;

        errorId: number;
        message: string;
        helpUrl: string;

        constructor() {
            this.errorId = 0;
            this.message = '';
            this.helpUrl = '';
            super();
        }

        public getMessageId(): number {
            return DownloadErrorMessage.ID;
        }

        public reset(): void {
            this.errorId = 0;
            this.message = '';
            this.helpUrl = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DownloadErrorMessage(param1);
        }

        public serializeAs_DownloadErrorMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.errorId);
            param1.writeUTF(this.message);
            param1.writeUTF(this.helpUrl);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DownloadErrorMessage(param1);
        }

        public deserializeAs_DownloadErrorMessage(param1: ICustomDataInput): void {
            this.errorId = param1.readByte();
            if (this.errorId < 0) {
                throw new Error('Forbidden value (' + this.errorId + ') on element of DownloadErrorMessage.errorId.');
            }
            this.message = param1.readUTF();
            this.helpUrl = param1.readUTF();

        }
    }
    export class DownloadGetCurrentSpeedRequestMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1510;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return DownloadGetCurrentSpeedRequestMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DownloadGetCurrentSpeedRequestMessage(param1);
        }

        public serializeAs_DownloadGetCurrentSpeedRequestMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DownloadGetCurrentSpeedRequestMessage(param1);
        }

        public deserializeAs_DownloadGetCurrentSpeedRequestMessage(param1: ICustomDataInput): void {

        }
    }
    export class DownloadPartMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1503;

        id: string;

        constructor() {
            this.id = '';
            super();
        }

        public getMessageId(): number {
            return DownloadPartMessage.ID;
        }

        public reset(): void {
            this.id = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DownloadPartMessage(param1);
        }

        public serializeAs_DownloadPartMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.id);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DownloadPartMessage(param1);
        }

        public deserializeAs_DownloadPartMessage(param1: ICustomDataInput): void {
            this.id = param1.readUTF();

        }
    }
    export class DownloadSetSpeedRequestMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1512;

        downloadSpeed: number;

        constructor() {
            this.downloadSpeed = 0;
            super();
        }

        public getMessageId(): number {
            return DownloadSetSpeedRequestMessage.ID;
        }

        public reset(): void {
            this.downloadSpeed = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DownloadSetSpeedRequestMessage(param1);
        }

        public serializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataOutput): void {
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element downloadSpeed.');
            }
            param1.writeByte(this.downloadSpeed);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DownloadSetSpeedRequestMessage(param1);
        }

        public deserializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataInput): void {
            this.downloadSpeed = param1.readByte();
            if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
                throw new Error('Forbidden value (' + this.downloadSpeed + ') on element of DownloadSetSpeedRequestMessage.downloadSpeed.');
            }

        }
    }
    export class GetPartInfoMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1506;

        id: string;

        constructor() {
            this.id = '';
            super();
        }

        public getMessageId(): number {
            return GetPartInfoMessage.ID;
        }

        public reset(): void {
            this.id = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GetPartInfoMessage(param1);
        }

        public serializeAs_GetPartInfoMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.id);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GetPartInfoMessage(param1);
        }

        public deserializeAs_GetPartInfoMessage(param1: ICustomDataInput): void {
            this.id = param1.readUTF();

        }
    }
    export class GetPartsListMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1501;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return GetPartsListMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GetPartsListMessage(param1);
        }

        public serializeAs_GetPartsListMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GetPartsListMessage(param1);
        }

        public deserializeAs_GetPartsListMessage(param1: ICustomDataInput): void {

        }
    }
    export class PartInfoMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1508;

        part: ContentPart;
        installationPercent: number;

        constructor() {
            this.part = new ContentPart();
            this.installationPercent = 0;
            super();
        }

        public getMessageId(): number {
            return PartInfoMessage.ID;
        }

        public reset(): void {
            this.part = new ContentPart();
            this.installationPercent = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartInfoMessage(param1);
        }

        public serializeAs_PartInfoMessage(param1: ICustomDataOutput): void {
            this.part.serializeAs_ContentPart(param1);
            param1.writeFloat(this.installationPercent);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartInfoMessage(param1);
        }

        public deserializeAs_PartInfoMessage(param1: ICustomDataInput): void {
            this.part = new ContentPart();
            this.part.deserialize(param1);
            this.installationPercent = param1.readFloat();

        }
    }
    export class PartsListMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 1502;

        parts: ContentPart[];

        constructor() {
            this.parts = [];
            super();
        }

        public getMessageId(): number {
            return PartsListMessage.ID;
        }

        public reset(): void {
            this.parts = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartsListMessage(param1);
        }

        public serializeAs_PartsListMessage(param1: ICustomDataOutput): void {
            param1.writeShort(this.parts.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.parts.length) {
                (this.parts[_loc2_]).serializeAs_ContentPart(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartsListMessage(param1);
        }

        public deserializeAs_PartsListMessage(param1: ICustomDataInput): void {
            var _loc4_: ContentPart = null;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new ContentPart();
                _loc4_.deserialize(param1);
                this.parts.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class MailStatusMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6275;

        unread: number;
        total: number;

        constructor() {
            this.unread = 0;
            this.total = 0;
            super();
        }

        public getMessageId(): number {
            return MailStatusMessage.ID;
        }

        public reset(): void {
            this.unread = 0;
            this.total = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MailStatusMessage(param1);
        }

        public serializeAs_MailStatusMessage(param1: ICustomDataOutput): void {
            if (this.unread < 0) {
                throw new Error('Forbidden value (' + this.unread + ') on element unread.');
            }
            param1.writeVarShort(this.unread);
            if (this.total < 0) {
                throw new Error('Forbidden value (' + this.total + ') on element total.');
            }
            param1.writeVarShort(this.total);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MailStatusMessage(param1);
        }

        public deserializeAs_MailStatusMessage(param1: ICustomDataInput): void {
            this.unread = param1.readVarUhShort();
            if (this.unread < 0) {
                throw new Error('Forbidden value (' + this.unread + ') on element of MailStatusMessage.unread.');
            }
            this.total = param1.readVarUhShort();
            if (this.total < 0) {
                throw new Error('Forbidden value (' + this.total + ') on element of MailStatusMessage.total.');
            }

        }
    }
    export class NewMailMessage extends MailStatusMessage {
        public static ID: number = 6292;

        sendersAccountId: number[];

        constructor() {
            this.sendersAccountId = [];
            super();
        }

        public getMessageId(): number {
            return NewMailMessage.ID;
        }

        public reset(): void {
            this.sendersAccountId = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NewMailMessage(param1);
        }

        public serializeAs_NewMailMessage(param1: ICustomDataOutput): void {
            super.serializeAs_MailStatusMessage(param1);
            param1.writeShort(this.sendersAccountId.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.sendersAccountId.length) {
                if (this.sendersAccountId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.sendersAccountId[_loc2_] + ') on element 1 (starting at 1) of sendersAccountId.');
                }
                param1.writeInt(this.sendersAccountId[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NewMailMessage(param1);
        }

        public deserializeAs_NewMailMessage(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of sendersAccountId.');
                }
                this.sendersAccountId.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class KrosmasterAuthTokenErrorMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6345;

        reason: number;

        constructor() {
            this.reason = 0;
            super();
        }

        public getMessageId(): number {
            return KrosmasterAuthTokenErrorMessage.ID;
        }

        public reset(): void {
            this.reason = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterAuthTokenErrorMessage(param1);
        }

        public serializeAs_KrosmasterAuthTokenErrorMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.reason);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterAuthTokenErrorMessage(param1);
        }

        public deserializeAs_KrosmasterAuthTokenErrorMessage(param1: ICustomDataInput): void {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of KrosmasterAuthTokenErrorMessage.reason.');
            }

        }
    }
    export class KrosmasterAuthTokenMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6351;

        token: string;

        constructor() {
            this.token = '';
            super();
        }

        public getMessageId(): number {
            return KrosmasterAuthTokenMessage.ID;
        }

        public reset(): void {
            this.token = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterAuthTokenMessage(param1);
        }

        public serializeAs_KrosmasterAuthTokenMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.token);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterAuthTokenMessage(param1);
        }

        public deserializeAs_KrosmasterAuthTokenMessage(param1: ICustomDataInput): void {
            this.token = param1.readUTF();

        }
    }
    export class KrosmasterAuthTokenRequestMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6346;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return KrosmasterAuthTokenRequestMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterAuthTokenRequestMessage(param1);
        }

        public serializeAs_KrosmasterAuthTokenRequestMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterAuthTokenRequestMessage(param1);
        }

        public deserializeAs_KrosmasterAuthTokenRequestMessage(param1: ICustomDataInput): void {

        }
    }
    export class KrosmasterInventoryErrorMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6343;

        reason: number;

        constructor() {
            this.reason = 0;
            super();
        }

        public getMessageId(): number {
            return KrosmasterInventoryErrorMessage.ID;
        }

        public reset(): void {
            this.reason = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterInventoryErrorMessage(param1);
        }

        public serializeAs_KrosmasterInventoryErrorMessage(param1: ICustomDataOutput): void {
            param1.writeByte(this.reason);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterInventoryErrorMessage(param1);
        }

        public deserializeAs_KrosmasterInventoryErrorMessage(param1: ICustomDataInput): void {
            this.reason = param1.readByte();
            if (this.reason < 0) {
                throw new Error('Forbidden value (' + this.reason + ') on element of KrosmasterInventoryErrorMessage.reason.');
            }

        }
    }
    export class KrosmasterInventoryMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6350;

        figures: KrosmasterFigure[];

        constructor() {
            this.figures = [];
            super();
        }

        public getMessageId(): number {
            return KrosmasterInventoryMessage.ID;
        }

        public reset(): void {
            this.figures = [];
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterInventoryMessage(param1);
        }

        public serializeAs_KrosmasterInventoryMessage(param1: ICustomDataOutput): void {
            param1.writeShort(this.figures.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.figures.length) {
                (this.figures[_loc2_]).serializeAs_KrosmasterFigure(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterInventoryMessage(param1);
        }

        public deserializeAs_KrosmasterInventoryMessage(param1: ICustomDataInput): void {
            var _loc4_: KrosmasterFigure = null;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new KrosmasterFigure();
                _loc4_.deserialize(param1);
                this.figures.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class KrosmasterInventoryRequestMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6344;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return KrosmasterInventoryRequestMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterInventoryRequestMessage(param1);
        }

        public serializeAs_KrosmasterInventoryRequestMessage(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterInventoryRequestMessage(param1);
        }

        public deserializeAs_KrosmasterInventoryRequestMessage(param1: ICustomDataInput): void {

        }
    }
    export class KrosmasterPlayingStatusMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6347;

        playing: boolean;

        constructor() {
            this.playing = false;
            super();
        }

        public getMessageId(): number {
            return KrosmasterPlayingStatusMessage.ID;
        }

        public reset(): void {
            this.playing = false;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterPlayingStatusMessage(param1);
        }

        public serializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataOutput): void {
            param1.writeBoolean(this.playing);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterPlayingStatusMessage(param1);
        }

        public deserializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataInput): void {
            this.playing = param1.readBoolean();

        }
    }
    export class KrosmasterTransferMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6348;

        uid: string;
        failure: number;

        constructor() {
            this.uid = '';
            this.failure = 0;
            super();
        }

        public getMessageId(): number {
            return KrosmasterTransferMessage.ID;
        }

        public reset(): void {
            this.uid = '';
            this.failure = 0;
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterTransferMessage(param1);
        }

        public serializeAs_KrosmasterTransferMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.uid);
            param1.writeByte(this.failure);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterTransferMessage(param1);
        }

        public deserializeAs_KrosmasterTransferMessage(param1: ICustomDataInput): void {
            this.uid = param1.readUTF();
            this.failure = param1.readByte();
            if (this.failure < 0) {
                throw new Error('Forbidden value (' + this.failure + ') on element of KrosmasterTransferMessage.failure.');
            }

        }
    }
    export class KrosmasterTransferRequestMessage extends NetworkMessage implements INetworkMessage {
        public static ID: number = 6349;

        uid: string;

        constructor() {
            this.uid = '';
            super();
        }

        public getMessageId(): number {
            return KrosmasterTransferRequestMessage.ID;
        }

        public reset(): void {
            this.uid = '';
        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterTransferRequestMessage(param1);
        }

        public serializeAs_KrosmasterTransferRequestMessage(param1: ICustomDataOutput): void {
            param1.writeUTF(this.uid);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterTransferRequestMessage(param1);
        }

        public deserializeAs_KrosmasterTransferRequestMessage(param1: ICustomDataInput): void {
            this.uid = param1.readUTF();

        }
    }
    export class ClientYouAreDrunkMessage extends DebugInClientMessage {
        public static ID: number = 6594;



        constructor() {

            super();
        }

        public getMessageId(): number {
            return ClientYouAreDrunkMessage.ID;
        }

        public reset(): void {

        }

        public pack(param1: ICustomDataOutput): void {
            let loc2 = new ByteArray();
            this.serialize(new CustomDataWrapper(loc2));
            NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
        }

        public unpack(param1: ICustomDataInput, param2: number): void {
            this.deserialize(param1);
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ClientYouAreDrunkMessage(param1);
        }

        public serializeAs_ClientYouAreDrunkMessage(param1: ICustomDataOutput): void {
            super.serializeAs_DebugInClientMessage(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ClientYouAreDrunkMessage(param1);
        }

        public deserializeAs_ClientYouAreDrunkMessage(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class StatisticData implements INetworkType {
        public static ID: number = 484;

        actionId: number;

        constructor() {
            this.actionId = 0;
        }

        public getTypeId(): number {
            return StatisticData.ID;
        }

        public reset(): void {
            this.actionId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StatisticData(param1);
        }

        public serializeAs_StatisticData(param1: ICustomDataOutput): void {
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
            }
            param1.writeVarShort(this.actionId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StatisticData(param1);
        }

        public deserializeAs_StatisticData(param1: ICustomDataInput): void {
            this.actionId = param1.readVarUhShort();
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element of StatisticData.actionId.');
            }

        }
    }
    export class StatisticDataBoolean extends StatisticData implements INetworkType {
        public static ID: number = 482;

        value: boolean;

        constructor() {
            this.value = false;
            super();
        }

        public getTypeId(): number {
            return StatisticDataBoolean.ID;
        }

        public reset(): void {
            this.value = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StatisticDataBoolean(param1);
        }

        public serializeAs_StatisticDataBoolean(param1: ICustomDataOutput): void {
            super.serializeAs_StatisticData(param1);
            param1.writeBoolean(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StatisticDataBoolean(param1);
        }

        public deserializeAs_StatisticDataBoolean(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readBoolean();

        }
    }
    export class StatisticDataByte extends StatisticData implements INetworkType {
        public static ID: number = 486;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return StatisticDataByte.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StatisticDataByte(param1);
        }

        public serializeAs_StatisticDataByte(param1: ICustomDataOutput): void {
            super.serializeAs_StatisticData(param1);
            param1.writeByte(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StatisticDataByte(param1);
        }

        public deserializeAs_StatisticDataByte(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readByte();

        }
    }
    export class StatisticDataInt extends StatisticData implements INetworkType {
        public static ID: number = 485;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return StatisticDataInt.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StatisticDataInt(param1);
        }

        public serializeAs_StatisticDataInt(param1: ICustomDataOutput): void {
            super.serializeAs_StatisticData(param1);
            param1.writeInt(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StatisticDataInt(param1);
        }

        public deserializeAs_StatisticDataInt(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readInt();

        }
    }
    export class StatisticDataShort extends StatisticData implements INetworkType {
        public static ID: number = 488;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return StatisticDataShort.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StatisticDataShort(param1);
        }

        public serializeAs_StatisticDataShort(param1: ICustomDataOutput): void {
            super.serializeAs_StatisticData(param1);
            param1.writeShort(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StatisticDataShort(param1);
        }

        public deserializeAs_StatisticDataShort(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readShort();

        }
    }
    export class StatisticDataString extends StatisticData implements INetworkType {
        public static ID: number = 487;

        value: string;

        constructor() {
            this.value = '';
            super();
        }

        public getTypeId(): number {
            return StatisticDataString.ID;
        }

        public reset(): void {
            this.value = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StatisticDataString(param1);
        }

        public serializeAs_StatisticDataString(param1: ICustomDataOutput): void {
            super.serializeAs_StatisticData(param1);
            param1.writeUTF(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StatisticDataString(param1);
        }

        public deserializeAs_StatisticDataString(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readUTF();

        }
    }
    export class GameServerInformations implements INetworkType {
        public static ID: number = 25;

        id: number;
        type: number;
        status: number;
        completion: number;
        isSelectable: boolean;
        charactersCount: number;
        charactersSlots: number;
        date: number;

        constructor() {
            this.id = 0;
            this.type = -1;
            this.status = 1;
            this.completion = 0;
            this.isSelectable = false;
            this.charactersCount = 0;
            this.charactersSlots = 0;
            this.date = 0;
        }

        public getTypeId(): number {
            return GameServerInformations.ID;
        }

        public reset(): void {
            this.id = 0;
            this.type = -1;
            this.status = 1;
            this.completion = 0;
            this.isSelectable = false;
            this.charactersCount = 0;
            this.charactersSlots = 0;
            this.date = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameServerInformations(param1);
        }

        public serializeAs_GameServerInformations(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameServerInformations(param1);
        }

        public deserializeAs_GameServerInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class Achievement implements INetworkType {
        public static ID: number = 363;

        id: number;
        finishedObjective: AchievementObjective[];
        startedObjectives: AchievementStartedObjective[];

        constructor() {
            this.id = 0;
            this.finishedObjective = [];
            this.startedObjectives = [];
        }

        public getTypeId(): number {
            return Achievement.ID;
        }

        public reset(): void {
            this.id = 0;
            this.finishedObjective = [];
            this.startedObjectives = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_Achievement(param1);
        }

        public serializeAs_Achievement(param1: ICustomDataOutput): void {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);
            param1.writeShort(this.finishedObjective.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.finishedObjective.length) {
                (this.finishedObjective[_loc2_]).serializeAs_AchievementObjective(param1);
                _loc2_++;
            }
            param1.writeShort(this.startedObjectives.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.startedObjectives.length) {
                (this.startedObjectives[_loc3_]).serializeAs_AchievementStartedObjective(param1);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_Achievement(param1);
        }

        public deserializeAs_Achievement(param1: ICustomDataInput): void {
            var _loc6_: AchievementObjective = null;
            var _loc7_: AchievementStartedObjective = null;
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of Achievement.id.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = new AchievementObjective();
                _loc6_.deserialize(param1);
                this.finishedObjective.push(_loc6_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = new AchievementStartedObjective();
                _loc7_.deserialize(param1);
                this.startedObjectives.push(_loc7_);
                _loc5_++;
            }

        }
    }
    export class AchievementObjective implements INetworkType {
        public static ID: number = 404;

        id: number;
        maxValue: number;

        constructor() {
            this.id = 0;
            this.maxValue = 0;
        }

        public getTypeId(): number {
            return AchievementObjective.ID;
        }

        public reset(): void {
            this.id = 0;
            this.maxValue = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AchievementObjective(param1);
        }

        public serializeAs_AchievementObjective(param1: ICustomDataOutput): void {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarInt(this.id);
            if (this.maxValue < 0) {
                throw new Error('Forbidden value (' + this.maxValue + ') on element maxValue.');
            }
            param1.writeVarShort(this.maxValue);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AchievementObjective(param1);
        }

        public deserializeAs_AchievementObjective(param1: ICustomDataInput): void {
            this.id = param1.readVarUhInt();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of AchievementObjective.id.');
            }
            this.maxValue = param1.readVarUhShort();
            if (this.maxValue < 0) {
                throw new Error('Forbidden value (' + this.maxValue + ') on element of AchievementObjective.maxValue.');
            }

        }
    }
    export class AchievementRewardable implements INetworkType {
        public static ID: number = 412;

        id: number;
        finishedlevel: number;

        constructor() {
            this.id = 0;
            this.finishedlevel = 0;
        }

        public getTypeId(): number {
            return AchievementRewardable.ID;
        }

        public reset(): void {
            this.id = 0;
            this.finishedlevel = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AchievementRewardable(param1);
        }

        public serializeAs_AchievementRewardable(param1: ICustomDataOutput): void {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);
            if (this.finishedlevel < 0 || this.finishedlevel > 200) {
                throw new Error('Forbidden value (' + this.finishedlevel + ') on element finishedlevel.');
            }
            param1.writeByte(this.finishedlevel);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AchievementRewardable(param1);
        }

        public deserializeAs_AchievementRewardable(param1: ICustomDataInput): void {
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of AchievementRewardable.id.');
            }
            this.finishedlevel = param1.readUnsignedByte();
            if (this.finishedlevel < 0 || this.finishedlevel > 200) {
                throw new Error('Forbidden value (' + this.finishedlevel + ') on element of AchievementRewardable.finishedlevel.');
            }

        }
    }
    export class AchievementStartedObjective extends AchievementObjective implements INetworkType {
        public static ID: number = 402;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return AchievementStartedObjective.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AchievementStartedObjective(param1);
        }

        public serializeAs_AchievementStartedObjective(param1: ICustomDataOutput): void {
            super.serializeAs_AchievementObjective(param1);
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element value.');
            }
            param1.writeVarShort(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AchievementStartedObjective(param1);
        }

        public deserializeAs_AchievementStartedObjective(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readVarUhShort();
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element of AchievementStartedObjective.value.');
            }

        }
    }
    export class FightDispellableEffectExtendedInformations implements INetworkType {
        public static ID: number = 208;

        actionId: number;
        sourceId: number;
        effect: AbstractFightDispellableEffect;

        constructor() {
            this.actionId = 0;
            this.sourceId = 0;
            this.effect = new AbstractFightDispellableEffect();
        }

        public getTypeId(): number {
            return FightDispellableEffectExtendedInformations.ID;
        }

        public reset(): void {
            this.actionId = 0;
            this.sourceId = 0;
            this.effect = new AbstractFightDispellableEffect();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightDispellableEffectExtendedInformations(param1);
        }

        public serializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataOutput): void {
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
            }
            param1.writeVarShort(this.actionId);
            param1.writeInt(this.sourceId);
            param1.writeShort(this.effect.getTypeId());
            this.effect.serialize(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightDispellableEffectExtendedInformations(param1);
        }

        public deserializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataInput): void {
            this.actionId = param1.readVarUhShort();
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element of FightDispellableEffectExtendedInformations.actionId.');
            }
            this.sourceId = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            this.effect = <AbstractFightDispellableEffect>ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
            this.effect.deserialize(param1);

        }
    }
    export class AbstractFightDispellableEffect implements INetworkType {
        public static ID: number = 206;

        uid: number;
        targetId: number;
        turnDuration: number;
        dispelable: number;
        spellId: number;
        effectId: number;
        parentBoostUid: number;

        constructor() {
            this.uid = 0;
            this.targetId = 0;
            this.turnDuration = 0;
            this.dispelable = 1;
            this.spellId = 0;
            this.effectId = 0;
            this.parentBoostUid = 0;
        }

        public getTypeId(): number {
            return AbstractFightDispellableEffect.ID;
        }

        public reset(): void {
            this.uid = 0;
            this.targetId = 0;
            this.turnDuration = 0;
            this.dispelable = 1;
            this.spellId = 0;
            this.effectId = 0;
            this.parentBoostUid = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AbstractFightDispellableEffect(param1);
        }

        public serializeAs_AbstractFightDispellableEffect(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AbstractFightDispellableEffect(param1);
        }

        public deserializeAs_AbstractFightDispellableEffect(param1: ICustomDataInput): void {
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

        }
    }
    export class FightTemporaryBoostEffect extends AbstractFightDispellableEffect implements INetworkType {
        public static ID: number = 209;

        delta: number;

        constructor() {
            this.delta = 0;
            super();
        }

        public getTypeId(): number {
            return FightTemporaryBoostEffect.ID;
        }

        public reset(): void {
            this.delta = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTemporaryBoostEffect(param1);
        }

        public serializeAs_FightTemporaryBoostEffect(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractFightDispellableEffect(param1);
            param1.writeShort(this.delta);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTemporaryBoostEffect(param1);
        }

        public deserializeAs_FightTemporaryBoostEffect(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.delta = param1.readShort();

        }
    }
    export class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect implements INetworkType {
        public static ID: number = 214;

        stateId: number;

        constructor() {
            this.stateId = 0;
            super();
        }

        public getTypeId(): number {
            return FightTemporaryBoostStateEffect.ID;
        }

        public reset(): void {
            this.stateId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTemporaryBoostStateEffect(param1);
        }

        public serializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataOutput): void {
            super.serializeAs_FightTemporaryBoostEffect(param1);
            param1.writeShort(this.stateId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTemporaryBoostStateEffect(param1);
        }

        public deserializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.stateId = param1.readShort();

        }
    }
    export class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect implements INetworkType {
        public static ID: number = 211;

        weaponTypeId: number;

        constructor() {
            this.weaponTypeId = 0;
            super();
        }

        public getTypeId(): number {
            return FightTemporaryBoostWeaponDamagesEffect.ID;
        }

        public reset(): void {
            this.weaponTypeId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
        }

        public serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataOutput): void {
            super.serializeAs_FightTemporaryBoostEffect(param1);
            param1.writeShort(this.weaponTypeId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
        }

        public deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.weaponTypeId = param1.readShort();

        }
    }
    export class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect implements INetworkType {
        public static ID: number = 207;

        boostedSpellId: number;

        constructor() {
            this.boostedSpellId = 0;
            super();
        }

        public getTypeId(): number {
            return FightTemporarySpellBoostEffect.ID;
        }

        public reset(): void {
            this.boostedSpellId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTemporarySpellBoostEffect(param1);
        }

        public serializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataOutput): void {
            super.serializeAs_FightTemporaryBoostEffect(param1);
            if (this.boostedSpellId < 0) {
                throw new Error('Forbidden value (' + this.boostedSpellId + ') on element boostedSpellId.');
            }
            param1.writeVarShort(this.boostedSpellId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTemporarySpellBoostEffect(param1);
        }

        public deserializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.boostedSpellId = param1.readVarUhShort();
            if (this.boostedSpellId < 0) {
                throw new Error('Forbidden value (' + this.boostedSpellId + ') on element of FightTemporarySpellBoostEffect.boostedSpellId.');
            }

        }
    }
    export class FightTemporarySpellImmunityEffect extends AbstractFightDispellableEffect implements INetworkType {
        public static ID: number = 366;

        immuneSpellId: number;

        constructor() {
            this.immuneSpellId = 0;
            super();
        }

        public getTypeId(): number {
            return FightTemporarySpellImmunityEffect.ID;
        }

        public reset(): void {
            this.immuneSpellId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTemporarySpellImmunityEffect(param1);
        }

        public serializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractFightDispellableEffect(param1);
            param1.writeInt(this.immuneSpellId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTemporarySpellImmunityEffect(param1);
        }

        public deserializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.immuneSpellId = param1.readInt();

        }
    }
    export class FightTriggeredEffect extends AbstractFightDispellableEffect implements INetworkType {
        public static ID: number = 210;

        param1: number;
        param2: number;
        param3: number;
        delay: number;

        constructor() {
            this.param1 = 0;
            this.param2 = 0;
            this.param3 = 0;
            this.delay = 0;
            super();
        }

        public getTypeId(): number {
            return FightTriggeredEffect.ID;
        }

        public reset(): void {
            this.param1 = 0;
            this.param2 = 0;
            this.param3 = 0;
            this.delay = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTriggeredEffect(param1);
        }

        public serializeAs_FightTriggeredEffect(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractFightDispellableEffect(param1);
            param1.writeInt(this.param1);
            param1.writeInt(this.param2);
            param1.writeInt(this.param3);
            param1.writeShort(this.delay);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTriggeredEffect(param1);
        }

        public deserializeAs_FightTriggeredEffect(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.param1 = param1.readInt();
            this.param2 = param1.readInt();
            this.param3 = param1.readInt();
            this.delay = param1.readShort();

        }
    }
    export class GameActionMark implements INetworkType {
        public static ID: number = 351;

        markAuthorId: number;
        markTeamId: number;
        markSpellId: number;
        markSpellLevel: number;
        markId: number;
        markType: number;
        markimpactCell: number;
        cells: GameActionMarkedCell[];
        active: boolean;

        constructor() {
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

        public getTypeId(): number {
            return GameActionMark.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameActionMark(param1);
        }

        public serializeAs_GameActionMark(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.cells.length) {
                (this.cells[_loc2_]).serializeAs_GameActionMarkedCell(param1);
                _loc2_++;
            }
            param1.writeBoolean(this.active);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameActionMark(param1);
        }

        public deserializeAs_GameActionMark(param1: ICustomDataInput): void {
            var _loc4_: GameActionMarkedCell = null;
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new GameActionMarkedCell();
                _loc4_.deserialize(param1);
                this.cells.push(_loc4_);
                _loc3_++;
            }
            this.active = param1.readBoolean();

        }
    }
    export class GameActionMarkedCell implements INetworkType {
        public static ID: number = 85;

        cellId: number;
        zoneSize: number;
        cellColor: number;
        cellsType: number;

        constructor() {
            this.cellId = 0;
            this.zoneSize = 0;
            this.cellColor = 0;
            this.cellsType = 0;
        }

        public getTypeId(): number {
            return GameActionMarkedCell.ID;
        }

        public reset(): void {
            this.cellId = 0;
            this.zoneSize = 0;
            this.cellColor = 0;
            this.cellsType = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameActionMarkedCell(param1);
        }

        public serializeAs_GameActionMarkedCell(param1: ICustomDataOutput): void {
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
            }
            param1.writeVarShort(this.cellId);
            param1.writeByte(this.zoneSize);
            param1.writeInt(this.cellColor);
            param1.writeByte(this.cellsType);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameActionMarkedCell(param1);
        }

        public deserializeAs_GameActionMarkedCell(param1: ICustomDataInput): void {
            this.cellId = param1.readVarUhShort();
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element of GameActionMarkedCell.cellId.');
            }
            this.zoneSize = param1.readByte();
            this.cellColor = param1.readInt();
            this.cellsType = param1.readByte();

        }
    }
    export class ServerSessionConstant implements INetworkType {
        public static ID: number = 430;

        id: number;

        constructor() {
            this.id = 0;
        }

        public getTypeId(): number {
            return ServerSessionConstant.ID;
        }

        public reset(): void {
            this.id = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ServerSessionConstant(param1);
        }

        public serializeAs_ServerSessionConstant(param1: ICustomDataOutput): void {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarShort(this.id);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ServerSessionConstant(param1);
        }

        public deserializeAs_ServerSessionConstant(param1: ICustomDataInput): void {
            this.id = param1.readVarUhShort();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of ServerSessionConstant.id.');
            }

        }
    }
    export class ServerSessionConstantInteger extends ServerSessionConstant implements INetworkType {
        public static ID: number = 433;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return ServerSessionConstantInteger.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ServerSessionConstantInteger(param1);
        }

        public serializeAs_ServerSessionConstantInteger(param1: ICustomDataOutput): void {
            super.serializeAs_ServerSessionConstant(param1);
            param1.writeInt(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ServerSessionConstantInteger(param1);
        }

        public deserializeAs_ServerSessionConstantInteger(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readInt();

        }
    }
    export class ServerSessionConstantLong extends ServerSessionConstant implements INetworkType {
        public static ID: number = 429;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return ServerSessionConstantLong.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ServerSessionConstantLong(param1);
        }

        public serializeAs_ServerSessionConstantLong(param1: ICustomDataOutput): void {
            super.serializeAs_ServerSessionConstant(param1);
            if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.value + ') on element value.');
            }
            param1.writeDouble(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ServerSessionConstantLong(param1);
        }

        public deserializeAs_ServerSessionConstantLong(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readDouble();
            if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.value + ') on element of ServerSessionConstantLong.value.');
            }

        }
    }
    export class ServerSessionConstantString extends ServerSessionConstant implements INetworkType {
        public static ID: number = 436;

        value: string;

        constructor() {
            this.value = '';
            super();
        }

        public getTypeId(): number {
            return ServerSessionConstantString.ID;
        }

        public reset(): void {
            this.value = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ServerSessionConstantString(param1);
        }

        public serializeAs_ServerSessionConstantString(param1: ICustomDataOutput): void {
            super.serializeAs_ServerSessionConstant(param1);
            param1.writeUTF(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ServerSessionConstantString(param1);
        }

        public deserializeAs_ServerSessionConstantString(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readUTF();

        }
    }
    export class AbstractCharacterInformation implements INetworkType {
        public static ID: number = 400;

        id: number;

        constructor() {
            this.id = 0;
        }

        public getTypeId(): number {
            return AbstractCharacterInformation.ID;
        }

        public reset(): void {
            this.id = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AbstractCharacterInformation(param1);
        }

        public serializeAs_AbstractCharacterInformation(param1: ICustomDataOutput): void {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeVarInt(this.id);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AbstractCharacterInformation(param1);
        }

        public deserializeAs_AbstractCharacterInformation(param1: ICustomDataInput): void {
            this.id = param1.readVarUhInt();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of AbstractCharacterInformation.id.');
            }

        }
    }
    export class CharacterMinimalAllianceInformations extends CharacterMinimalGuildInformations implements INetworkType {
        public static ID: number = 444;

        alliance: BasicAllianceInformations;

        constructor() {
            this.alliance = new BasicAllianceInformations();
            super();
        }

        public getTypeId(): number {
            return CharacterMinimalAllianceInformations.ID;
        }

        public reset(): void {
            this.alliance = new BasicAllianceInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterMinimalAllianceInformations(param1);
        }

        public serializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterMinimalGuildInformations(param1);
            this.alliance.serializeAs_BasicAllianceInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterMinimalAllianceInformations(param1);
        }

        public deserializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.alliance = new BasicAllianceInformations();
            this.alliance.deserialize(param1);

        }
    }
    export class CharacterMinimalGuildInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
        public static ID: number = 445;

        guild: BasicGuildInformations;

        constructor() {
            this.guild = new BasicGuildInformations();
            super();
        }

        public getTypeId(): number {
            return CharacterMinimalGuildInformations.ID;
        }

        public reset(): void {
            this.guild = new BasicGuildInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterMinimalGuildInformations(param1);
        }

        public serializeAs_CharacterMinimalGuildInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterMinimalPlusLookInformations(param1);
            this.guild.serializeAs_BasicGuildInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterMinimalGuildInformations(param1);
        }

        public deserializeAs_CharacterMinimalGuildInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guild = new BasicGuildInformations();
            this.guild.deserialize(param1);

        }
    }
    export class CharacterMinimalInformations extends AbstractCharacterInformation implements INetworkType {
        public static ID: number = 110;

        level: number;
        name: string;

        constructor() {
            this.level = 0;
            this.name = '';
            super();
        }

        public getTypeId(): number {
            return CharacterMinimalInformations.ID;
        }

        public reset(): void {
            this.level = 0;
            this.name = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterMinimalInformations(param1);
        }

        public serializeAs_CharacterMinimalInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractCharacterInformation(param1);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeUTF(this.name);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterMinimalInformations(param1);
        }

        public deserializeAs_CharacterMinimalInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of CharacterMinimalInformations.level.');
            }
            this.name = param1.readUTF();

        }
    }
    export class CharacterMinimalPlusLookAndGradeInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
        public static ID: number = 193;

        grade: number;

        constructor() {
            this.grade = 0;
            super();
        }

        public getTypeId(): number {
            return CharacterMinimalPlusLookAndGradeInformations.ID;
        }

        public reset(): void {
            this.grade = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
        }

        public serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterMinimalPlusLookInformations(param1);
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element grade.');
            }
            param1.writeVarInt(this.grade);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
        }

        public deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.grade = param1.readVarUhInt();
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element of CharacterMinimalPlusLookAndGradeInformations.grade.');
            }

        }
    }
    export class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations implements INetworkType {
        public static ID: number = 163;

        entityLook: EntityLook;

        constructor() {
            this.entityLook = new EntityLook();
            super();
        }

        public getTypeId(): number {
            return CharacterMinimalPlusLookInformations.ID;
        }

        public reset(): void {
            this.entityLook = new EntityLook();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterMinimalPlusLookInformations(param1);
        }

        public serializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterMinimalInformations(param1);
            this.entityLook.serializeAs_EntityLook(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterMinimalPlusLookInformations(param1);
        }

        public deserializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.entityLook = new EntityLook();
            this.entityLook.deserialize(param1);

        }
    }
    export class ActorAlignmentInformations implements INetworkType {
        public static ID: number = 201;

        alignmentSide: number;
        alignmentValue: number;
        alignmentGrade: number;
        characterPower: number;

        constructor() {
            this.alignmentSide = 0;
            this.alignmentValue = 0;
            this.alignmentGrade = 0;
            this.characterPower = 0;
        }

        public getTypeId(): number {
            return ActorAlignmentInformations.ID;
        }

        public reset(): void {
            this.alignmentSide = 0;
            this.alignmentValue = 0;
            this.alignmentGrade = 0;
            this.characterPower = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ActorAlignmentInformations(param1);
        }

        public serializeAs_ActorAlignmentInformations(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ActorAlignmentInformations(param1);
        }

        public deserializeAs_ActorAlignmentInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class ActorExtendedAlignmentInformations extends ActorAlignmentInformations implements INetworkType {
        public static ID: number = 202;

        honor: number;
        honorGradeFloor: number;
        honorNextGradeFloor: number;
        aggressable: number;

        constructor() {
            this.honor = 0;
            this.honorGradeFloor = 0;
            this.honorNextGradeFloor = 0;
            this.aggressable = 0;
            super();
        }

        public getTypeId(): number {
            return ActorExtendedAlignmentInformations.ID;
        }

        public reset(): void {
            this.honor = 0;
            this.honorGradeFloor = 0;
            this.honorNextGradeFloor = 0;
            this.aggressable = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ActorExtendedAlignmentInformations(param1);
        }

        public serializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataOutput): void {
            super.serializeAs_ActorAlignmentInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ActorExtendedAlignmentInformations(param1);
        }

        public deserializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class CharacterBaseCharacteristic implements INetworkType {
        public static ID: number = 4;

        base: number;
        additionnal: number;
        objectsAndMountBonus: number;
        alignGiftBonus: number;
        contextModif: number;

        constructor() {
            this.base = 0;
            this.additionnal = 0;
            this.objectsAndMountBonus = 0;
            this.alignGiftBonus = 0;
            this.contextModif = 0;
        }

        public getTypeId(): number {
            return CharacterBaseCharacteristic.ID;
        }

        public reset(): void {
            this.base = 0;
            this.additionnal = 0;
            this.objectsAndMountBonus = 0;
            this.alignGiftBonus = 0;
            this.contextModif = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterBaseCharacteristic(param1);
        }

        public serializeAs_CharacterBaseCharacteristic(param1: ICustomDataOutput): void {
            param1.writeVarShort(this.base);
            param1.writeVarShort(this.additionnal);
            param1.writeVarShort(this.objectsAndMountBonus);
            param1.writeVarShort(this.alignGiftBonus);
            param1.writeVarShort(this.contextModif);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterBaseCharacteristic(param1);
        }

        public deserializeAs_CharacterBaseCharacteristic(param1: ICustomDataInput): void {
            this.base = param1.readVarShort();
            this.additionnal = param1.readVarShort();
            this.objectsAndMountBonus = param1.readVarShort();
            this.alignGiftBonus = param1.readVarShort();
            this.contextModif = param1.readVarShort();

        }
    }
    export class CharacterCharacteristicsInformations implements INetworkType {
        public static ID: number = 8;

        experience: number;
        experienceLevelFloor: number;
        experienceNextLevelFloor: number;
        kamas: number;
        statsPoints: number;
        additionnalPoints: number;
        spellsPoints: number;
        alignmentInfos: ActorExtendedAlignmentInformations;
        lifePoints: number;
        maxLifePoints: number;
        energyPoints: number;
        maxEnergyPoints: number;
        actionPointsCurrent: number;
        movementPointsCurrent: number;
        initiative: CharacterBaseCharacteristic;
        prospecting: CharacterBaseCharacteristic;
        actionPoints: CharacterBaseCharacteristic;
        movementPoints: CharacterBaseCharacteristic;
        strength: CharacterBaseCharacteristic;
        vitality: CharacterBaseCharacteristic;
        wisdom: CharacterBaseCharacteristic;
        chance: CharacterBaseCharacteristic;
        agility: CharacterBaseCharacteristic;
        intelligence: CharacterBaseCharacteristic;
        range: CharacterBaseCharacteristic;
        summonableCreaturesBoost: CharacterBaseCharacteristic;
        reflect: CharacterBaseCharacteristic;
        criticalHit: CharacterBaseCharacteristic;
        criticalHitWeapon: number;
        criticalMiss: CharacterBaseCharacteristic;
        healBonus: CharacterBaseCharacteristic;
        allDamagesBonus: CharacterBaseCharacteristic;
        weaponDamagesBonusPercent: CharacterBaseCharacteristic;
        damagesBonusPercent: CharacterBaseCharacteristic;
        trapBonus: CharacterBaseCharacteristic;
        trapBonusPercent: CharacterBaseCharacteristic;
        glyphBonusPercent: CharacterBaseCharacteristic;
        permanentDamagePercent: CharacterBaseCharacteristic;
        tackleBlock: CharacterBaseCharacteristic;
        tackleEvade: CharacterBaseCharacteristic;
        PAAttack: CharacterBaseCharacteristic;
        PMAttack: CharacterBaseCharacteristic;
        pushDamageBonus: CharacterBaseCharacteristic;
        criticalDamageBonus: CharacterBaseCharacteristic;
        neutralDamageBonus: CharacterBaseCharacteristic;
        earthDamageBonus: CharacterBaseCharacteristic;
        waterDamageBonus: CharacterBaseCharacteristic;
        airDamageBonus: CharacterBaseCharacteristic;
        fireDamageBonus: CharacterBaseCharacteristic;
        dodgePALostProbability: CharacterBaseCharacteristic;
        dodgePMLostProbability: CharacterBaseCharacteristic;
        neutralElementResistPercent: CharacterBaseCharacteristic;
        earthElementResistPercent: CharacterBaseCharacteristic;
        waterElementResistPercent: CharacterBaseCharacteristic;
        airElementResistPercent: CharacterBaseCharacteristic;
        fireElementResistPercent: CharacterBaseCharacteristic;
        neutralElementReduction: CharacterBaseCharacteristic;
        earthElementReduction: CharacterBaseCharacteristic;
        waterElementReduction: CharacterBaseCharacteristic;
        airElementReduction: CharacterBaseCharacteristic;
        fireElementReduction: CharacterBaseCharacteristic;
        pushDamageReduction: CharacterBaseCharacteristic;
        criticalDamageReduction: CharacterBaseCharacteristic;
        pvpNeutralElementResistPercent: CharacterBaseCharacteristic;
        pvpEarthElementResistPercent: CharacterBaseCharacteristic;
        pvpWaterElementResistPercent: CharacterBaseCharacteristic;
        pvpAirElementResistPercent: CharacterBaseCharacteristic;
        pvpFireElementResistPercent: CharacterBaseCharacteristic;
        pvpNeutralElementReduction: CharacterBaseCharacteristic;
        pvpEarthElementReduction: CharacterBaseCharacteristic;
        pvpWaterElementReduction: CharacterBaseCharacteristic;
        pvpAirElementReduction: CharacterBaseCharacteristic;
        pvpFireElementReduction: CharacterBaseCharacteristic;
        spellModifications: CharacterSpellModification[];
        probationTime: number;

        constructor() {
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

        public getTypeId(): number {
            return CharacterCharacteristicsInformations.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterCharacteristicsInformations(param1);
        }

        public serializeAs_CharacterCharacteristicsInformations(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.spellModifications.length) {
                (this.spellModifications[_loc2_]).serializeAs_CharacterSpellModification(param1);
                _loc2_++;
            }
            if (this.probationTime < 0) {
                throw new Error('Forbidden value (' + this.probationTime + ') on element probationTime.');
            }
            param1.writeInt(this.probationTime);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterCharacteristicsInformations(param1);
        }

        public deserializeAs_CharacterCharacteristicsInformations(param1: ICustomDataInput): void {
            var _loc4_: CharacterSpellModification = null;
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
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

        }
    }
    export class CharacterSpellModification implements INetworkType {
        public static ID: number = 215;

        modificationType: number;
        spellId: number;
        value: CharacterBaseCharacteristic;

        constructor() {
            this.modificationType = 0;
            this.spellId = 0;
            this.value = new CharacterBaseCharacteristic();
        }

        public getTypeId(): number {
            return CharacterSpellModification.ID;
        }

        public reset(): void {
            this.modificationType = 0;
            this.spellId = 0;
            this.value = new CharacterBaseCharacteristic();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterSpellModification(param1);
        }

        public serializeAs_CharacterSpellModification(param1: ICustomDataOutput): void {
            param1.writeByte(this.modificationType);
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
            }
            param1.writeVarShort(this.spellId);
            this.value.serializeAs_CharacterBaseCharacteristic(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterSpellModification(param1);
        }

        public deserializeAs_CharacterSpellModification(param1: ICustomDataInput): void {
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

        }
    }
    export class AbstractCharacterToRefurbishInformation extends AbstractCharacterInformation implements INetworkType {
        public static ID: number = 475;

        colors: number[];
        cosmeticId: number;

        constructor() {
            this.colors = [];
            this.cosmeticId = 0;
            super();
        }

        public getTypeId(): number {
            return AbstractCharacterToRefurbishInformation.ID;
        }

        public reset(): void {
            this.colors = [];
            this.cosmeticId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AbstractCharacterToRefurbishInformation(param1);
        }

        public serializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractCharacterInformation(param1);
            param1.writeShort(this.colors.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.colors.length) {
                param1.writeInt(this.colors[_loc2_]);
                _loc2_++;
            }
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
            }
            param1.writeVarInt(this.cosmeticId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AbstractCharacterToRefurbishInformation(param1);
        }

        public deserializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.colors.push(_loc4_);
                _loc3_++;
            }
            this.cosmeticId = param1.readVarUhInt();
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element of AbstractCharacterToRefurbishInformation.cosmeticId.');
            }

        }
    }
    export class CharacterBaseInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
        public static ID: number = 45;

        breed: number;
        sex: boolean;

        constructor() {
            this.breed = 0;
            this.sex = false;
            super();
        }

        public getTypeId(): number {
            return CharacterBaseInformations.ID;
        }

        public reset(): void {
            this.breed = 0;
            this.sex = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterBaseInformations(param1);
        }

        public serializeAs_CharacterBaseInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterMinimalPlusLookInformations(param1);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterBaseInformations(param1);
        }

        public deserializeAs_CharacterBaseInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();

        }
    }
    export class CharacterHardcoreOrEpicInformations extends CharacterBaseInformations implements INetworkType {
        public static ID: number = 474;

        deathState: number;
        deathCount: number;
        deathMaxLevel: number;

        constructor() {
            this.deathState = 0;
            this.deathCount = 0;
            this.deathMaxLevel = 0;
            super();
        }

        public getTypeId(): number {
            return CharacterHardcoreOrEpicInformations.ID;
        }

        public reset(): void {
            this.deathState = 0;
            this.deathCount = 0;
            this.deathMaxLevel = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterHardcoreOrEpicInformations(param1);
        }

        public serializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterBaseInformations(param1);
            param1.writeByte(this.deathState);
            if (this.deathCount < 0) {
                throw new Error('Forbidden value (' + this.deathCount + ') on element deathCount.');
            }
            param1.writeVarShort(this.deathCount);
            if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
                throw new Error('Forbidden value (' + this.deathMaxLevel + ') on element deathMaxLevel.');
            }
            param1.writeByte(this.deathMaxLevel);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterHardcoreOrEpicInformations(param1);
        }

        public deserializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class CharacterRemodelingInformation extends AbstractCharacterInformation implements INetworkType {
        public static ID: number = 479;

        name: string;
        breed: number;
        sex: boolean;
        cosmeticId: number;
        colors: number[];

        constructor() {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
            super();
        }

        public getTypeId(): number {
            return CharacterRemodelingInformation.ID;
        }

        public reset(): void {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterRemodelingInformation(param1);
        }

        public serializeAs_CharacterRemodelingInformation(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractCharacterInformation(param1);
            param1.writeUTF(this.name);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
            }
            param1.writeVarShort(this.cosmeticId);
            param1.writeShort(this.colors.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.colors.length) {
                param1.writeInt(this.colors[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterRemodelingInformation(param1);
        }

        public deserializeAs_CharacterRemodelingInformation(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
            super.deserialize(param1);
            this.name = param1.readUTF();
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
            this.cosmeticId = param1.readVarUhShort();
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element of CharacterRemodelingInformation.cosmeticId.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.colors.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class CharacterToRecolorInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
        public static ID: number = 212;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return CharacterToRecolorInformation.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterToRecolorInformation(param1);
        }

        public serializeAs_CharacterToRecolorInformation(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractCharacterToRefurbishInformation(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterToRecolorInformation(param1);
        }

        public deserializeAs_CharacterToRecolorInformation(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class CharacterToRelookInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
        public static ID: number = 399;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return CharacterToRelookInformation.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterToRelookInformation(param1);
        }

        public serializeAs_CharacterToRelookInformation(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractCharacterToRefurbishInformation(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterToRelookInformation(param1);
        }

        public deserializeAs_CharacterToRelookInformation(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class CharacterToRemodelInformations extends CharacterRemodelingInformation implements INetworkType {
        public static ID: number = 477;

        possibleChangeMask: number;
        mandatoryChangeMask: number;

        constructor() {
            this.possibleChangeMask = 0;
            this.mandatoryChangeMask = 0;
            super();
        }

        public getTypeId(): number {
            return CharacterToRemodelInformations.ID;
        }

        public reset(): void {
            this.possibleChangeMask = 0;
            this.mandatoryChangeMask = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_CharacterToRemodelInformations(param1);
        }

        public serializeAs_CharacterToRemodelInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterRemodelingInformation(param1);
            if (this.possibleChangeMask < 0) {
                throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element possibleChangeMask.');
            }
            param1.writeByte(this.possibleChangeMask);
            if (this.mandatoryChangeMask < 0) {
                throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element mandatoryChangeMask.');
            }
            param1.writeByte(this.mandatoryChangeMask);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_CharacterToRemodelInformations(param1);
        }

        public deserializeAs_CharacterToRemodelInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.possibleChangeMask = param1.readByte();
            if (this.possibleChangeMask < 0) {
                throw new Error('Forbidden value (' + this.possibleChangeMask + ') on element of CharacterToRemodelInformations.possibleChangeMask.');
            }
            this.mandatoryChangeMask = param1.readByte();
            if (this.mandatoryChangeMask < 0) {
                throw new Error('Forbidden value (' + this.mandatoryChangeMask + ') on element of CharacterToRemodelInformations.mandatoryChangeMask.');
            }

        }
    }
    export class RemodelingInformation implements INetworkType {
        public static ID: number = 480;

        name: string;
        breed: number;
        sex: boolean;
        cosmeticId: number;
        colors: number[];

        constructor() {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
        }

        public getTypeId(): number {
            return RemodelingInformation.ID;
        }

        public reset(): void {
            this.name = '';
            this.breed = 0;
            this.sex = false;
            this.cosmeticId = 0;
            this.colors = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_RemodelingInformation(param1);
        }

        public serializeAs_RemodelingInformation(param1: ICustomDataOutput): void {
            param1.writeUTF(this.name);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
            }
            param1.writeVarShort(this.cosmeticId);
            param1.writeShort(this.colors.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.colors.length) {
                param1.writeInt(this.colors[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_RemodelingInformation(param1);
        }

        public deserializeAs_RemodelingInformation(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
            this.name = param1.readUTF();
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();
            this.cosmeticId = param1.readVarUhShort();
            if (this.cosmeticId < 0) {
                throw new Error('Forbidden value (' + this.cosmeticId + ') on element of RemodelingInformation.cosmeticId.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.colors.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class ActorRestrictionsInformations implements INetworkType {
        public static ID: number = 204;

        cantBeAggressed: boolean;
        cantBeChallenged: boolean;
        cantTrade: boolean;
        cantBeAttackedByMutant: boolean;
        cantRun: boolean;
        forceSlowWalk: boolean;
        cantMinimize: boolean;
        cantMove: boolean;
        cantAggress: boolean;
        cantChallenge: boolean;
        cantExchange: boolean;
        cantAttack: boolean;
        cantChat: boolean;
        cantBeMerchant: boolean;
        cantUseObject: boolean;
        cantUseTaxCollector: boolean;
        cantUseInteractive: boolean;
        cantSpeakToNPC: boolean;
        cantChangeZone: boolean;
        cantAttackMonster: boolean;
        cantWalk8Directions: boolean;

        constructor() {
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

        public getTypeId(): number {
            return ActorRestrictionsInformations.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ActorRestrictionsInformations(param1);
        }

        public serializeAs_ActorRestrictionsInformations(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.cantBeAggressed);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.cantBeChallenged);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.cantTrade);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.cantBeAttackedByMutant);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.cantRun);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 5, this.forceSlowWalk);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 6, this.cantMinimize);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 7, this.cantMove);
            param1.writeByte(_loc2_);
            var _loc3_: number = 0;
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 0, this.cantAggress);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 1, this.cantChallenge);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 2, this.cantExchange);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 3, this.cantAttack);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 4, this.cantChat);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 5, this.cantBeMerchant);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 6, this.cantUseObject);
            _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 7, this.cantUseTaxCollector);
            param1.writeByte(_loc3_);
            var _loc4_: number = 0;
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 0, this.cantUseInteractive);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 1, this.cantSpeakToNPC);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 2, this.cantChangeZone);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 3, this.cantAttackMonster);
            _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 4, this.cantWalk8Directions);
            param1.writeByte(_loc4_);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ActorRestrictionsInformations(param1);
        }

        public deserializeAs_ActorRestrictionsInformations(param1: ICustomDataInput): void {
            var _loc2_: number = param1.readByte();
            this.cantBeAggressed = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.cantBeChallenged = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.cantTrade = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.cantBeAttackedByMutant = BooleanByteWrapper.getFlag(_loc2_, 3);
            this.cantRun = BooleanByteWrapper.getFlag(_loc2_, 4);
            this.forceSlowWalk = BooleanByteWrapper.getFlag(_loc2_, 5);
            this.cantMinimize = BooleanByteWrapper.getFlag(_loc2_, 6);
            this.cantMove = BooleanByteWrapper.getFlag(_loc2_, 7);
            var _loc3_: number = param1.readByte();
            this.cantAggress = BooleanByteWrapper.getFlag(_loc3_, 0);
            this.cantChallenge = BooleanByteWrapper.getFlag(_loc3_, 1);
            this.cantExchange = BooleanByteWrapper.getFlag(_loc3_, 2);
            this.cantAttack = BooleanByteWrapper.getFlag(_loc3_, 3);
            this.cantChat = BooleanByteWrapper.getFlag(_loc3_, 4);
            this.cantBeMerchant = BooleanByteWrapper.getFlag(_loc3_, 5);
            this.cantUseObject = BooleanByteWrapper.getFlag(_loc3_, 6);
            this.cantUseTaxCollector = BooleanByteWrapper.getFlag(_loc3_, 7);
            var _loc4_: number = param1.readByte();
            this.cantUseInteractive = BooleanByteWrapper.getFlag(_loc4_, 0);
            this.cantSpeakToNPC = BooleanByteWrapper.getFlag(_loc4_, 1);
            this.cantChangeZone = BooleanByteWrapper.getFlag(_loc4_, 2);
            this.cantAttackMonster = BooleanByteWrapper.getFlag(_loc4_, 3);
            this.cantWalk8Directions = BooleanByteWrapper.getFlag(_loc4_, 4);

        }
    }
    export class PlayerStatus implements INetworkType {
        public static ID: number = 415;

        statusId: number;

        constructor() {
            this.statusId = 1;
        }

        public getTypeId(): number {
            return PlayerStatus.ID;
        }

        public reset(): void {
            this.statusId = 1;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PlayerStatus(param1);
        }

        public serializeAs_PlayerStatus(param1: ICustomDataOutput): void {
            param1.writeByte(this.statusId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PlayerStatus(param1);
        }

        public deserializeAs_PlayerStatus(param1: ICustomDataInput): void {
            this.statusId = param1.readByte();
            if (this.statusId < 0) {
                throw new Error('Forbidden value (' + this.statusId + ') on element of PlayerStatus.statusId.');
            }

        }
    }
    export class PlayerStatusExtended extends PlayerStatus implements INetworkType {
        public static ID: number = 414;

        message: string;

        constructor() {
            this.message = '';
            super();
        }

        public getTypeId(): number {
            return PlayerStatusExtended.ID;
        }

        public reset(): void {
            this.message = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PlayerStatusExtended(param1);
        }

        public serializeAs_PlayerStatusExtended(param1: ICustomDataOutput): void {
            super.serializeAs_PlayerStatus(param1);
            param1.writeUTF(this.message);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PlayerStatusExtended(param1);
        }

        public deserializeAs_PlayerStatusExtended(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.message = param1.readUTF();

        }
    }
    export class ActorOrientation implements INetworkType {
        public static ID: number = 353;

        id: number;
        direction: number;

        constructor() {
            this.id = 0;
            this.direction = 1;
        }

        public getTypeId(): number {
            return ActorOrientation.ID;
        }

        public reset(): void {
            this.id = 0;
            this.direction = 1;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ActorOrientation(param1);
        }

        public serializeAs_ActorOrientation(param1: ICustomDataOutput): void {
            param1.writeInt(this.id);
            param1.writeByte(this.direction);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ActorOrientation(param1);
        }

        public deserializeAs_ActorOrientation(param1: ICustomDataInput): void {
            this.id = param1.readInt();
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of ActorOrientation.direction.');
            }

        }
    }
    export class EntityDispositionInformations implements INetworkType {
        public static ID: number = 60;

        cellId: number;
        direction: number;

        constructor() {
            this.cellId = 0;
            this.direction = 1;
        }

        public getTypeId(): number {
            return EntityDispositionInformations.ID;
        }

        public reset(): void {
            this.cellId = 0;
            this.direction = 1;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_EntityDispositionInformations(param1);
        }

        public serializeAs_EntityDispositionInformations(param1: ICustomDataOutput): void {
            if (this.cellId < -1 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
            }
            param1.writeShort(this.cellId);
            param1.writeByte(this.direction);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_EntityDispositionInformations(param1);
        }

        public deserializeAs_EntityDispositionInformations(param1: ICustomDataInput): void {
            this.cellId = param1.readShort();
            if (this.cellId < -1 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element of EntityDispositionInformations.cellId.');
            }
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of EntityDispositionInformations.direction.');
            }

        }
    }
    export class EntityMovementInformations implements INetworkType {
        public static ID: number = 63;

        id: number;
        steps: number[];

        constructor() {
            this.id = 0;
            this.steps = [];
        }

        public getTypeId(): number {
            return EntityMovementInformations.ID;
        }

        public reset(): void {
            this.id = 0;
            this.steps = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_EntityMovementInformations(param1);
        }

        public serializeAs_EntityMovementInformations(param1: ICustomDataOutput): void {
            param1.writeInt(this.id);
            param1.writeShort(this.steps.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.steps.length) {
                param1.writeByte(this.steps[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_EntityMovementInformations(param1);
        }

        public deserializeAs_EntityMovementInformations(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
            this.id = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readByte();
                this.steps.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class FightEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
        public static ID: number = 217;

        carryingCharacterId: number;

        constructor() {
            this.carryingCharacterId = 0;
            super();
        }

        public getTypeId(): number {
            return FightEntityDispositionInformations.ID;
        }

        public reset(): void {
            this.carryingCharacterId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightEntityDispositionInformations(param1);
        }

        public serializeAs_FightEntityDispositionInformations(param1: ICustomDataOutput): void {
            super.serializeAs_EntityDispositionInformations(param1);
            param1.writeInt(this.carryingCharacterId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightEntityDispositionInformations(param1);
        }

        public deserializeAs_FightEntityDispositionInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.carryingCharacterId = param1.readInt();

        }
    }
    export class GameContextActorInformations implements INetworkType {
        public static ID: number = 150;

        contextualId: number;
        look: EntityLook;
        disposition: EntityDispositionInformations;

        constructor() {
            this.contextualId = 0;
            this.look = new EntityLook();
            this.disposition = new EntityDispositionInformations();
        }

        public getTypeId(): number {
            return GameContextActorInformations.ID;
        }

        public reset(): void {
            this.contextualId = 0;
            this.look = new EntityLook();
            this.disposition = new EntityDispositionInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameContextActorInformations(param1);
        }

        public serializeAs_GameContextActorInformations(param1: ICustomDataOutput): void {
            param1.writeInt(this.contextualId);
            this.look.serializeAs_EntityLook(param1);
            param1.writeShort(this.disposition.getTypeId());
            this.disposition.serialize(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameContextActorInformations(param1);
        }

        public deserializeAs_GameContextActorInformations(param1: ICustomDataInput): void {
            this.contextualId = param1.readInt();
            this.look = new EntityLook();
            this.look.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            this.disposition = <EntityDispositionInformations>ProtocolTypeManager.getInstance(EntityDispositionInformations, _loc2_);
            this.disposition.deserialize(param1);

        }
    }
    export class GameRolePlayTaxCollectorInformations extends GameRolePlayActorInformations implements INetworkType {
        public static ID: number = 148;

        identification: TaxCollectorStaticInformations;
        guildLevel: number;
        taxCollectorAttack: number;

        constructor() {
            this.identification = new TaxCollectorStaticInformations();
            this.guildLevel = 0;
            this.taxCollectorAttack = 0;
            super();
        }

        public getTypeId(): number {
            return GameRolePlayTaxCollectorInformations.ID;
        }

        public reset(): void {
            this.identification = new TaxCollectorStaticInformations();
            this.guildLevel = 0;
            this.taxCollectorAttack = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayTaxCollectorInformations(param1);
        }

        public serializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayActorInformations(param1);
            param1.writeShort(this.identification.getTypeId());
            this.identification.serialize(param1);
            if (this.guildLevel < 0 || this.guildLevel > 255) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
            }
            param1.writeByte(this.guildLevel);
            param1.writeInt(this.taxCollectorAttack);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayTaxCollectorInformations(param1);
        }

        public deserializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            this.identification = <TaxCollectorStaticInformations>ProtocolTypeManager.getInstance(TaxCollectorStaticInformations, _loc2_);
            this.identification.deserialize(param1);
            this.guildLevel = param1.readUnsignedByte();
            if (this.guildLevel < 0 || this.guildLevel > 255) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element of GameRolePlayTaxCollectorInformations.guildLevel.');
            }
            this.taxCollectorAttack = param1.readInt();

        }
    }
    export class IdentifiedEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
        public static ID: number = 107;

        id: number;

        constructor() {
            this.id = 0;
            super();
        }

        public getTypeId(): number {
            return IdentifiedEntityDispositionInformations.ID;
        }

        public reset(): void {
            this.id = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdentifiedEntityDispositionInformations(param1);
        }

        public serializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataOutput): void {
            super.serializeAs_EntityDispositionInformations(param1);
            param1.writeInt(this.id);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdentifiedEntityDispositionInformations(param1);
        }

        public deserializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.id = param1.readInt();

        }
    }
    export class MapCoordinates implements INetworkType {
        public static ID: number = 174;

        worldX: number;
        worldY: number;

        constructor() {
            this.worldX = 0;
            this.worldY = 0;
        }

        public getTypeId(): number {
            return MapCoordinates.ID;
        }

        public reset(): void {
            this.worldX = 0;
            this.worldY = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MapCoordinates(param1);
        }

        public serializeAs_MapCoordinates(param1: ICustomDataOutput): void {
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
            }
            param1.writeShort(this.worldX);
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
            }
            param1.writeShort(this.worldY);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MapCoordinates(param1);
        }

        public deserializeAs_MapCoordinates(param1: ICustomDataInput): void {
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of MapCoordinates.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of MapCoordinates.worldY.');
            }

        }
    }
    export class MapCoordinatesAndId extends MapCoordinates implements INetworkType {
        public static ID: number = 392;

        mapId: number;

        constructor() {
            this.mapId = 0;
            super();
        }

        public getTypeId(): number {
            return MapCoordinatesAndId.ID;
        }

        public reset(): void {
            this.mapId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MapCoordinatesAndId(param1);
        }

        public serializeAs_MapCoordinatesAndId(param1: ICustomDataOutput): void {
            super.serializeAs_MapCoordinates(param1);
            param1.writeInt(this.mapId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MapCoordinatesAndId(param1);
        }

        public deserializeAs_MapCoordinatesAndId(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.mapId = param1.readInt();

        }
    }
    export class MapCoordinatesExtended extends MapCoordinatesAndId implements INetworkType {
        public static ID: number = 176;

        subAreaId: number;

        constructor() {
            this.subAreaId = 0;
            super();
        }

        public getTypeId(): number {
            return MapCoordinatesExtended.ID;
        }

        public reset(): void {
            this.subAreaId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MapCoordinatesExtended(param1);
        }

        public serializeAs_MapCoordinatesExtended(param1: ICustomDataOutput): void {
            super.serializeAs_MapCoordinatesAndId(param1);
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MapCoordinatesExtended(param1);
        }

        public deserializeAs_MapCoordinatesExtended(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of MapCoordinatesExtended.subAreaId.');
            }

        }
    }
    export class TaxCollectorStaticExtendedInformations extends TaxCollectorStaticInformations implements INetworkType {
        public static ID: number = 440;

        allianceIdentity: AllianceInformations;

        constructor() {
            this.allianceIdentity = new AllianceInformations();
            super();
        }

        public getTypeId(): number {
            return TaxCollectorStaticExtendedInformations.ID;
        }

        public reset(): void {
            this.allianceIdentity = new AllianceInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorStaticExtendedInformations(param1);
        }

        public serializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataOutput): void {
            super.serializeAs_TaxCollectorStaticInformations(param1);
            this.allianceIdentity.serializeAs_AllianceInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorStaticExtendedInformations(param1);
        }

        public deserializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceIdentity = new AllianceInformations();
            this.allianceIdentity.deserialize(param1);

        }
    }
    export class TaxCollectorStaticInformations implements INetworkType {
        public static ID: number = 147;

        firstNameId: number;
        lastNameId: number;
        guildIdentity: GuildInformations;

        constructor() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.guildIdentity = new GuildInformations();
        }

        public getTypeId(): number {
            return TaxCollectorStaticInformations.ID;
        }

        public reset(): void {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.guildIdentity = new GuildInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorStaticInformations(param1);
        }

        public serializeAs_TaxCollectorStaticInformations(param1: ICustomDataOutput): void {
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
            }
            param1.writeVarShort(this.firstNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);
            this.guildIdentity.serializeAs_GuildInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorStaticInformations(param1);
        }

        public deserializeAs_TaxCollectorStaticInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class AbstractFightTeamInformations implements INetworkType {
        public static ID: number = 116;

        teamId: number;
        leaderId: number;
        teamSide: number;
        teamTypeId: number;
        nbWaves: number;

        constructor() {
            this.teamId = 2;
            this.leaderId = 0;
            this.teamSide = 0;
            this.teamTypeId = 0;
            this.nbWaves = 0;
        }

        public getTypeId(): number {
            return AbstractFightTeamInformations.ID;
        }

        public reset(): void {
            this.teamId = 2;
            this.leaderId = 0;
            this.teamSide = 0;
            this.teamTypeId = 0;
            this.nbWaves = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AbstractFightTeamInformations(param1);
        }

        public serializeAs_AbstractFightTeamInformations(param1: ICustomDataOutput): void {
            param1.writeByte(this.teamId);
            param1.writeInt(this.leaderId);
            param1.writeByte(this.teamSide);
            param1.writeByte(this.teamTypeId);
            if (this.nbWaves < 0) {
                throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
            }
            param1.writeByte(this.nbWaves);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AbstractFightTeamInformations(param1);
        }

        public deserializeAs_AbstractFightTeamInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class FightAllianceTeamInformations extends FightTeamInformations implements INetworkType {
        public static ID: number = 439;

        relation: number;

        constructor() {
            this.relation = 0;
            super();
        }

        public getTypeId(): number {
            return FightAllianceTeamInformations.ID;
        }

        public reset(): void {
            this.relation = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightAllianceTeamInformations(param1);
        }

        public serializeAs_FightAllianceTeamInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FightTeamInformations(param1);
            param1.writeByte(this.relation);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightAllianceTeamInformations(param1);
        }

        public deserializeAs_FightAllianceTeamInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.relation = param1.readByte();
            if (this.relation < 0) {
                throw new Error('Forbidden value (' + this.relation + ') on element of FightAllianceTeamInformations.relation.');
            }

        }
    }
    export class FightCommonInformations implements INetworkType {
        public static ID: number = 43;

        fightId: number;
        fightType: number;
        fightTeams: FightTeamInformations[];
        fightTeamsPositions: number[];
        fightTeamsOptions: FightOptionsInformations[];

        constructor() {
            this.fightId = 0;
            this.fightType = 0;
            this.fightTeams = [];
            this.fightTeamsPositions = [];
            this.fightTeamsOptions = [];
        }

        public getTypeId(): number {
            return FightCommonInformations.ID;
        }

        public reset(): void {
            this.fightId = 0;
            this.fightType = 0;
            this.fightTeams = [];
            this.fightTeamsPositions = [];
            this.fightTeamsOptions = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightCommonInformations(param1);
        }

        public serializeAs_FightCommonInformations(param1: ICustomDataOutput): void {
            param1.writeInt(this.fightId);
            param1.writeByte(this.fightType);
            param1.writeShort(this.fightTeams.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.fightTeams.length) {
                param1.writeShort((this.fightTeams[_loc2_]).getTypeId());
                (this.fightTeams[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.fightTeamsPositions.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.fightTeamsPositions.length) {
                if (this.fightTeamsPositions[_loc3_] < 0 || this.fightTeamsPositions[_loc3_] > 559) {
                    throw new Error('Forbidden value (' + this.fightTeamsPositions[_loc3_] + ') on element 4 (starting at 1) of fightTeamsPositions.');
                }
                param1.writeVarShort(this.fightTeamsPositions[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.fightTeamsOptions.length);
            var _loc4_: number = 0;
            while (_loc4_ < this.fightTeamsOptions.length) {
                (this.fightTeamsOptions[_loc4_]).serializeAs_FightOptionsInformations(param1);
                _loc4_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightCommonInformations(param1);
        }

        public deserializeAs_FightCommonInformations(param1: ICustomDataInput): void {
            var _loc8_: number = 0;
            var _loc9_: FightTeamInformations = null;
            var _loc10_: number = 0;
            var _loc11_: FightOptionsInformations = null;
            this.fightId = param1.readInt();
            this.fightType = param1.readByte();
            if (this.fightType < 0) {
                throw new Error('Forbidden value (' + this.fightType + ') on element of FightCommonInformations.fightType.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = <FightTeamInformations>ProtocolTypeManager.getInstance(FightTeamInformations, _loc8_);
                _loc9_.deserialize(param1);
                this.fightTeams.push(_loc9_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc10_ = param1.readVarUhShort();
                if (_loc10_ < 0 || _loc10_ > 559) {
                    throw new Error('Forbidden value (' + _loc10_ + ') on elements of fightTeamsPositions.');
                }
                this.fightTeamsPositions.push(_loc10_);
                _loc5_++;
            }
            var _loc6_: number = param1.readUnsignedShort();
            var _loc7_: number = 0;
            while (_loc7_ < _loc6_) {
                _loc11_ = new FightOptionsInformations();
                _loc11_.deserialize(param1);
                this.fightTeamsOptions.push(_loc11_);
                _loc7_++;
            }

        }
    }
    export class FightExternalInformations implements INetworkType {
        public static ID: number = 117;

        fightId: number;
        fightType: number;
        fightStart: number;
        fightSpectatorLocked: boolean;
        fightTeams: FightTeamLightInformations[];
        fightTeamsOptions: FightOptionsInformations[];

        constructor() {
            this.fightId = 0;
            this.fightType = 0;
            this.fightStart = 0;
            this.fightSpectatorLocked = false;
            this.fightTeams = [];
            this.fightTeamsOptions = [];
        }

        public getTypeId(): number {
            return FightExternalInformations.ID;
        }

        public reset(): void {
            this.fightId = 0;
            this.fightType = 0;
            this.fightStart = 0;
            this.fightSpectatorLocked = false;
            this.fightTeams = [];
            this.fightTeamsOptions = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightExternalInformations(param1);
        }

        public serializeAs_FightExternalInformations(param1: ICustomDataOutput): void {
            param1.writeInt(this.fightId);
            param1.writeByte(this.fightType);
            if (this.fightStart < 0) {
                throw new Error('Forbidden value (' + this.fightStart + ') on element fightStart.');
            }
            param1.writeInt(this.fightStart);
            param1.writeBoolean(this.fightSpectatorLocked);
            var _loc2_: number = 0;
            while (_loc2_ < 2) {
                this.fightTeams[_loc2_].serializeAs_FightTeamLightInformations(param1);
                _loc2_++;
            }
            var _loc3_: number = 0;
            while (_loc3_ < 2) {
                this.fightTeamsOptions[_loc3_].serializeAs_FightOptionsInformations(param1);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightExternalInformations(param1);
        }

        public deserializeAs_FightExternalInformations(param1: ICustomDataInput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < 2) {
                this.fightTeams[_loc2_] = new FightTeamLightInformations();
                this.fightTeams[_loc2_].deserialize(param1);
                _loc2_++;
            }
            var _loc3_: number = 0;
            while (_loc3_ < 2) {
                this.fightTeamsOptions[_loc3_] = new FightOptionsInformations();
                this.fightTeamsOptions[_loc3_].deserialize(param1);
                _loc3_++;
            }

        }
    }
    export class FightLoot implements INetworkType {
        public static ID: number = 41;

        objects: number[];
        kamas: number;

        constructor() {
            this.objects = [];
            this.kamas = 0;
        }

        public getTypeId(): number {
            return FightLoot.ID;
        }

        public reset(): void {
            this.objects = [];
            this.kamas = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightLoot(param1);
        }

        public serializeAs_FightLoot(param1: ICustomDataOutput): void {
            param1.writeShort(this.objects.length);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightLoot(param1);
        }

        public deserializeAs_FightLoot(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
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

        }
    }
    export class FightOptionsInformations implements INetworkType {
        public static ID: number = 20;

        isSecret: boolean;
        isRestrictedToPartyOnly: boolean;
        isClosed: boolean;
        isAskingForHelp: boolean;

        constructor() {
            this.isSecret = false;
            this.isRestrictedToPartyOnly = false;
            this.isClosed = false;
            this.isAskingForHelp = false;
        }

        public getTypeId(): number {
            return FightOptionsInformations.ID;
        }

        public reset(): void {
            this.isSecret = false;
            this.isRestrictedToPartyOnly = false;
            this.isClosed = false;
            this.isAskingForHelp = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightOptionsInformations(param1);
        }

        public serializeAs_FightOptionsInformations(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isSecret);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isRestrictedToPartyOnly);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isClosed);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.isAskingForHelp);
            param1.writeByte(_loc2_);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightOptionsInformations(param1);
        }

        public deserializeAs_FightOptionsInformations(param1: ICustomDataInput): void {
            var _loc2_: number = param1.readByte();
            this.isSecret = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.isClosed = BooleanByteWrapper.getFlag(_loc2_, 2);
            this.isAskingForHelp = BooleanByteWrapper.getFlag(_loc2_, 3);

        }
    }
    export class FightResultAdditionalData implements INetworkType {
        public static ID: number = 191;



        constructor() {

        }

        public getTypeId(): number {
            return FightResultAdditionalData.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultAdditionalData(param1);
        }

        public serializeAs_FightResultAdditionalData(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultAdditionalData(param1);
        }

        public deserializeAs_FightResultAdditionalData(param1: ICustomDataInput): void {

        }
    }
    export class FightResultExperienceData extends FightResultAdditionalData implements INetworkType {
        public static ID: number = 192;

        experience: number;
        showExperience: boolean;
        experienceLevelFloor: number;
        showExperienceLevelFloor: boolean;
        experienceNextLevelFloor: number;
        showExperienceNextLevelFloor: boolean;
        experienceFightDelta: number;
        showExperienceFightDelta: boolean;
        experienceForGuild: number;
        showExperienceForGuild: boolean;
        experienceForMount: number;
        showExperienceForMount: boolean;
        isIncarnationExperience: boolean;
        rerollExperienceMul: number;

        constructor() {
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
            super();
        }

        public getTypeId(): number {
            return FightResultExperienceData.ID;
        }

        public reset(): void {
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
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultExperienceData(param1);
        }

        public serializeAs_FightResultExperienceData(param1: ICustomDataOutput): void {
            super.serializeAs_FightResultAdditionalData(param1);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultExperienceData(param1);
        }

        public deserializeAs_FightResultExperienceData(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readByte();
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

        }
    }
    export class FightResultFighterListEntry extends FightResultListEntry implements INetworkType {
        public static ID: number = 189;

        id: number;
        alive: boolean;

        constructor() {
            this.id = 0;
            this.alive = false;
            super();
        }

        public getTypeId(): number {
            return FightResultFighterListEntry.ID;
        }

        public reset(): void {
            this.id = 0;
            this.alive = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultFighterListEntry(param1);
        }

        public serializeAs_FightResultFighterListEntry(param1: ICustomDataOutput): void {
            super.serializeAs_FightResultListEntry(param1);
            param1.writeInt(this.id);
            param1.writeBoolean(this.alive);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultFighterListEntry(param1);
        }

        public deserializeAs_FightResultFighterListEntry(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.id = param1.readInt();
            this.alive = param1.readBoolean();

        }
    }
    export class FightResultListEntry implements INetworkType {
        public static ID: number = 16;

        outcome: number;
        wave: number;
        rewards: FightLoot;

        constructor() {
            this.outcome = 0;
            this.wave = 0;
            this.rewards = new FightLoot();
        }

        public getTypeId(): number {
            return FightResultListEntry.ID;
        }

        public reset(): void {
            this.outcome = 0;
            this.wave = 0;
            this.rewards = new FightLoot();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultListEntry(param1);
        }

        public serializeAs_FightResultListEntry(param1: ICustomDataOutput): void {
            param1.writeVarShort(this.outcome);
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element wave.');
            }
            param1.writeByte(this.wave);
            this.rewards.serializeAs_FightLoot(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultListEntry(param1);
        }

        public deserializeAs_FightResultListEntry(param1: ICustomDataInput): void {
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

        }
    }
    export class FightResultMutantListEntry extends FightResultFighterListEntry implements INetworkType {
        public static ID: number = 216;

        level: number;

        constructor() {
            this.level = 0;
            super();
        }

        public getTypeId(): number {
            return FightResultMutantListEntry.ID;
        }

        public reset(): void {
            this.level = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultMutantListEntry(param1);
        }

        public serializeAs_FightResultMutantListEntry(param1: ICustomDataOutput): void {
            super.serializeAs_FightResultFighterListEntry(param1);
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeVarShort(this.level);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultMutantListEntry(param1);
        }

        public deserializeAs_FightResultMutantListEntry(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.level = param1.readVarUhShort();
            if (this.level < 0) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightResultMutantListEntry.level.');
            }

        }
    }
    export class FightResultPlayerListEntry extends FightResultFighterListEntry implements INetworkType {
        public static ID: number = 24;

        level: number;
        additional: FightResultAdditionalData[];

        constructor() {
            this.level = 0;
            this.additional = [];
            super();
        }

        public getTypeId(): number {
            return FightResultPlayerListEntry.ID;
        }

        public reset(): void {
            this.level = 0;
            this.additional = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultPlayerListEntry(param1);
        }

        public serializeAs_FightResultPlayerListEntry(param1: ICustomDataOutput): void {
            super.serializeAs_FightResultFighterListEntry(param1);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeShort(this.additional.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.additional.length) {
                param1.writeShort((this.additional[_loc2_]).getTypeId());
                (this.additional[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultPlayerListEntry(param1);
        }

        public deserializeAs_FightResultPlayerListEntry(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: FightResultAdditionalData = null;
            super.deserialize(param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightResultPlayerListEntry.level.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <FightResultAdditionalData>ProtocolTypeManager.getInstance(FightResultAdditionalData, _loc4_);
                _loc5_.deserialize(param1);
                this.additional.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class FightResultPvpData extends FightResultAdditionalData implements INetworkType {
        public static ID: number = 190;

        grade: number;
        minHonorForGrade: number;
        maxHonorForGrade: number;
        honor: number;
        honorDelta: number;

        constructor() {
            this.grade = 0;
            this.minHonorForGrade = 0;
            this.maxHonorForGrade = 0;
            this.honor = 0;
            this.honorDelta = 0;
            super();
        }

        public getTypeId(): number {
            return FightResultPvpData.ID;
        }

        public reset(): void {
            this.grade = 0;
            this.minHonorForGrade = 0;
            this.maxHonorForGrade = 0;
            this.honor = 0;
            this.honorDelta = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultPvpData(param1);
        }

        public serializeAs_FightResultPvpData(param1: ICustomDataOutput): void {
            super.serializeAs_FightResultAdditionalData(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultPvpData(param1);
        }

        public deserializeAs_FightResultPvpData(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class FightResultTaxCollectorListEntry extends FightResultFighterListEntry implements INetworkType {
        public static ID: number = 84;

        level: number;
        guildInfo: BasicGuildInformations;
        experienceForGuild: number;

        constructor() {
            this.level = 0;
            this.guildInfo = new BasicGuildInformations();
            this.experienceForGuild = 0;
            super();
        }

        public getTypeId(): number {
            return FightResultTaxCollectorListEntry.ID;
        }

        public reset(): void {
            this.level = 0;
            this.guildInfo = new BasicGuildInformations();
            this.experienceForGuild = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightResultTaxCollectorListEntry(param1);
        }

        public serializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataOutput): void {
            super.serializeAs_FightResultFighterListEntry(param1);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            this.guildInfo.serializeAs_BasicGuildInformations(param1);
            param1.writeInt(this.experienceForGuild);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightResultTaxCollectorListEntry(param1);
        }

        public deserializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightResultTaxCollectorListEntry.level.');
            }
            this.guildInfo = new BasicGuildInformations();
            this.guildInfo.deserialize(param1);
            this.experienceForGuild = param1.readInt();

        }
    }
    export class FightTeamInformations extends AbstractFightTeamInformations implements INetworkType {
        public static ID: number = 33;

        teamMembers: FightTeamMemberInformations[];

        constructor() {
            this.teamMembers = [];
            super();
        }

        public getTypeId(): number {
            return FightTeamInformations.ID;
        }

        public reset(): void {
            this.teamMembers = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamInformations(param1);
        }

        public serializeAs_FightTeamInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractFightTeamInformations(param1);
            param1.writeShort(this.teamMembers.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.teamMembers.length) {
                param1.writeShort((this.teamMembers[_loc2_]).getTypeId());
                (this.teamMembers[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamInformations(param1);
        }

        public deserializeAs_FightTeamInformations(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: FightTeamMemberInformations = null;
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <FightTeamMemberInformations>ProtocolTypeManager.getInstance(FightTeamMemberInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.teamMembers.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class FightTeamLightInformations extends AbstractFightTeamInformations implements INetworkType {
        public static ID: number = 115;

        teamMembersCount: number;
        meanLevel: number;
        hasFriend: boolean;
        hasGuildMember: boolean;
        hasAllianceMember: boolean;
        hasGroupMember: boolean;
        hasMyTaxCollector: boolean;

        constructor() {
            this.teamMembersCount = 0;
            this.meanLevel = 0;
            this.hasFriend = false;
            this.hasGuildMember = false;
            this.hasAllianceMember = false;
            this.hasGroupMember = false;
            this.hasMyTaxCollector = false;
            super();
        }

        public getTypeId(): number {
            return FightTeamLightInformations.ID;
        }

        public reset(): void {
            this.teamMembersCount = 0;
            this.meanLevel = 0;
            this.hasFriend = false;
            this.hasGuildMember = false;
            this.hasAllianceMember = false;
            this.hasGroupMember = false;
            this.hasMyTaxCollector = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamLightInformations(param1);
        }

        public serializeAs_FightTeamLightInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractFightTeamInformations(param1);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamLightInformations(param1);
        }

        public deserializeAs_FightTeamLightInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readByte();
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

        }
    }
    export class FightTeamMemberCharacterInformations extends FightTeamMemberInformations implements INetworkType {
        public static ID: number = 13;

        name: string;
        level: number;

        constructor() {
            this.name = '';
            this.level = 0;
            super();
        }

        public getTypeId(): number {
            return FightTeamMemberCharacterInformations.ID;
        }

        public reset(): void {
            this.name = '';
            this.level = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamMemberCharacterInformations(param1);
        }

        public serializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FightTeamMemberInformations(param1);
            param1.writeUTF(this.name);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamMemberCharacterInformations(param1);
        }

        public deserializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.name = param1.readUTF();
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCharacterInformations.level.');
            }

        }
    }
    export class FightTeamMemberCompanionInformations extends FightTeamMemberInformations implements INetworkType {
        public static ID: number = 451;

        companionId: number;
        level: number;
        masterId: number;

        constructor() {
            this.companionId = 0;
            this.level = 0;
            this.masterId = 0;
            super();
        }

        public getTypeId(): number {
            return FightTeamMemberCompanionInformations.ID;
        }

        public reset(): void {
            this.companionId = 0;
            this.level = 0;
            this.masterId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamMemberCompanionInformations(param1);
        }

        public serializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FightTeamMemberInformations(param1);
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
            }
            param1.writeByte(this.companionId);
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeInt(this.masterId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamMemberCompanionInformations(param1);
        }

        public deserializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.companionId = param1.readByte();
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element of FightTeamMemberCompanionInformations.companionId.');
            }
            this.level = param1.readUnsignedByte();
            if (this.level < 1 || this.level > 200) {
                throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCompanionInformations.level.');
            }
            this.masterId = param1.readInt();

        }
    }
    export class FightTeamMemberInformations implements INetworkType {
        public static ID: number = 44;

        id: number;

        constructor() {
            this.id = 0;
        }

        public getTypeId(): number {
            return FightTeamMemberInformations.ID;
        }

        public reset(): void {
            this.id = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamMemberInformations(param1);
        }

        public serializeAs_FightTeamMemberInformations(param1: ICustomDataOutput): void {
            param1.writeInt(this.id);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamMemberInformations(param1);
        }

        public deserializeAs_FightTeamMemberInformations(param1: ICustomDataInput): void {
            this.id = param1.readInt();

        }
    }
    export class FightTeamMemberMonsterInformations extends FightTeamMemberInformations implements INetworkType {
        public static ID: number = 6;

        monsterId: number;
        grade: number;

        constructor() {
            this.monsterId = 0;
            this.grade = 0;
            super();
        }

        public getTypeId(): number {
            return FightTeamMemberMonsterInformations.ID;
        }

        public reset(): void {
            this.monsterId = 0;
            this.grade = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamMemberMonsterInformations(param1);
        }

        public serializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FightTeamMemberInformations(param1);
            param1.writeInt(this.monsterId);
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element grade.');
            }
            param1.writeByte(this.grade);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamMemberMonsterInformations(param1);
        }

        public deserializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.monsterId = param1.readInt();
            this.grade = param1.readByte();
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element of FightTeamMemberMonsterInformations.grade.');
            }

        }
    }
    export class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations implements INetworkType {
        public static ID: number = 177;

        firstNameId: number;
        lastNameId: number;
        level: number;
        guildId: number;
        uid: number;

        constructor() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
            this.guildId = 0;
            this.uid = 0;
            super();
        }

        public getTypeId(): number {
            return FightTeamMemberTaxCollectorInformations.ID;
        }

        public reset(): void {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
            this.guildId = 0;
            this.uid = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamMemberTaxCollectorInformations(param1);
        }

        public serializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FightTeamMemberInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamMemberTaxCollectorInformations(param1);
        }

        public deserializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations implements INetworkType {
        public static ID: number = 426;

        allianceInfos: BasicAllianceInformations;

        constructor() {
            this.allianceInfos = new BasicAllianceInformations();
            super();
        }

        public getTypeId(): number {
            return FightTeamMemberWithAllianceCharacterInformations.ID;
        }

        public reset(): void {
            this.allianceInfos = new BasicAllianceInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
        }

        public serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FightTeamMemberCharacterInformations(param1);
            this.allianceInfos.serializeAs_BasicAllianceInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1);
        }

        public deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceInfos = new BasicAllianceInformations();
            this.allianceInfos.deserialize(param1);

        }
    }
    export class GameFightAIInformations extends GameFightFighterInformations implements INetworkType {
        public static ID: number = 151;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return GameFightAIInformations.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightAIInformations(param1);
        }

        public serializeAs_GameFightAIInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightAIInformations(param1);
        }

        public deserializeAs_GameFightAIInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class GameFightCharacterInformations extends GameFightFighterNamedInformations implements INetworkType {
        public static ID: number = 46;

        level: number;
        alignmentInfos: ActorAlignmentInformations;
        breed: number;
        sex: boolean;

        constructor() {
            this.level = 0;
            this.alignmentInfos = new ActorAlignmentInformations();
            this.breed = 0;
            this.sex = false;
            super();
        }

        public getTypeId(): number {
            return GameFightCharacterInformations.ID;
        }

        public reset(): void {
            this.level = 0;
            this.alignmentInfos = new ActorAlignmentInformations();
            this.breed = 0;
            this.sex = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightCharacterInformations(param1);
        }

        public serializeAs_GameFightCharacterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterNamedInformations(param1);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightCharacterInformations(param1);
        }

        public deserializeAs_GameFightCharacterInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameFightCharacterInformations.level.');
            }
            this.alignmentInfos = new ActorAlignmentInformations();
            this.alignmentInfos.deserialize(param1);
            this.breed = param1.readByte();
            this.sex = param1.readBoolean();

        }
    }
    export class GameFightCompanionInformations extends GameFightFighterInformations implements INetworkType {
        public static ID: number = 450;

        companionGenericId: number;
        level: number;
        masterId: number;

        constructor() {
            this.companionGenericId = 0;
            this.level = 0;
            this.masterId = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightCompanionInformations.ID;
        }

        public reset(): void {
            this.companionGenericId = 0;
            this.level = 0;
            this.masterId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightCompanionInformations(param1);
        }

        public serializeAs_GameFightCompanionInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterInformations(param1);
            if (this.companionGenericId < 0) {
                throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
            }
            param1.writeByte(this.companionGenericId);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);
            param1.writeInt(this.masterId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightCompanionInformations(param1);
        }

        public deserializeAs_GameFightCompanionInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.companionGenericId = param1.readByte();
            if (this.companionGenericId < 0) {
                throw new Error('Forbidden value (' + this.companionGenericId + ') on element of GameFightCompanionInformations.companionGenericId.');
            }
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameFightCompanionInformations.level.');
            }
            this.masterId = param1.readInt();

        }
    }
    export class GameFightFighterCompanionLightInformations extends GameFightFighterLightInformations implements INetworkType {
        public static ID: number = 454;

        companionId: number;
        masterId: number;

        constructor() {
            this.companionId = 0;
            this.masterId = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightFighterCompanionLightInformations.ID;
        }

        public reset(): void {
            this.companionId = 0;
            this.masterId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightFighterCompanionLightInformations(param1);
        }

        public serializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterLightInformations(param1);
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
            }
            param1.writeByte(this.companionId);
            param1.writeInt(this.masterId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightFighterCompanionLightInformations(param1);
        }

        public deserializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.companionId = param1.readByte();
            if (this.companionId < 0) {
                throw new Error('Forbidden value (' + this.companionId + ') on element of GameFightFighterCompanionLightInformations.companionId.');
            }
            this.masterId = param1.readInt();

        }
    }
    export class GameFightFighterInformations extends GameContextActorInformations implements INetworkType {
        public static ID: number = 143;

        teamId: number;
        wave: number;
        alive: boolean;
        stats: GameFightMinimalStats;
        previousPositions: number[];

        constructor() {
            this.teamId = 2;
            this.wave = 0;
            this.alive = false;
            this.stats = new GameFightMinimalStats();
            this.previousPositions = [];
            super();
        }

        public getTypeId(): number {
            return GameFightFighterInformations.ID;
        }

        public reset(): void {
            this.teamId = 2;
            this.wave = 0;
            this.alive = false;
            this.stats = new GameFightMinimalStats();
            this.previousPositions = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightFighterInformations(param1);
        }

        public serializeAs_GameFightFighterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameContextActorInformations(param1);
            param1.writeByte(this.teamId);
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element wave.');
            }
            param1.writeByte(this.wave);
            param1.writeBoolean(this.alive);
            param1.writeShort(this.stats.getTypeId());
            this.stats.serialize(param1);
            param1.writeShort(this.previousPositions.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.previousPositions.length) {
                if (this.previousPositions[_loc2_] < 0 || this.previousPositions[_loc2_] > 559) {
                    throw new Error('Forbidden value (' + this.previousPositions[_loc2_] + ') on element 5 (starting at 1) of previousPositions.');
                }
                param1.writeVarShort(this.previousPositions[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightFighterInformations(param1);
        }

        public deserializeAs_GameFightFighterInformations(param1: ICustomDataInput): void {
            var _loc5_: number = 0;
            super.deserialize(param1);
            this.teamId = param1.readByte();
            if (this.teamId < 0) {
                throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightFighterInformations.teamId.');
            }
            this.wave = param1.readByte();
            if (this.wave < 0) {
                throw new Error('Forbidden value (' + this.wave + ') on element of GameFightFighterInformations.wave.');
            }
            this.alive = param1.readBoolean();
            var _loc2_: number = param1.readUnsignedShort();
            this.stats = <GameFightMinimalStats>ProtocolTypeManager.getInstance(GameFightMinimalStats, _loc2_);
            this.stats.deserialize(param1);
            var _loc3_: number = param1.readUnsignedShort();
            var _loc4_: number = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = param1.readVarUhShort();
                if (_loc5_ < 0 || _loc5_ > 559) {
                    throw new Error('Forbidden value (' + _loc5_ + ') on elements of previousPositions.');
                }
                this.previousPositions.push(_loc5_);
                _loc4_++;
            }

        }
    }
    export class GameFightFighterLightInformations implements INetworkType {
        public static ID: number = 413;

        id: number;
        wave: number;
        level: number;
        breed: number;
        sex: boolean;
        alive: boolean;

        constructor() {
            this.id = 0;
            this.wave = 0;
            this.level = 0;
            this.breed = 0;
            this.sex = false;
            this.alive = false;
        }

        public getTypeId(): number {
            return GameFightFighterLightInformations.ID;
        }

        public reset(): void {
            this.id = 0;
            this.wave = 0;
            this.level = 0;
            this.breed = 0;
            this.sex = false;
            this.alive = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightFighterLightInformations(param1);
        }

        public serializeAs_GameFightFighterLightInformations(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightFighterLightInformations(param1);
        }

        public deserializeAs_GameFightFighterLightInformations(param1: ICustomDataInput): void {
            var _loc2_: number = param1.readByte();
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

        }
    }
    export class GameFightFighterMonsterLightInformations extends GameFightFighterLightInformations implements INetworkType {
        public static ID: number = 455;

        creatureGenericId: number;

        constructor() {
            this.creatureGenericId = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightFighterMonsterLightInformations.ID;
        }

        public reset(): void {
            this.creatureGenericId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightFighterMonsterLightInformations(param1);
        }

        public serializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterLightInformations(param1);
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
            }
            param1.writeVarShort(this.creatureGenericId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightFighterMonsterLightInformations(param1);
        }

        public deserializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.creatureGenericId = param1.readVarUhShort();
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightFighterMonsterLightInformations.creatureGenericId.');
            }

        }
    }
    export class GameFightFighterNamedInformations extends GameFightFighterInformations implements INetworkType {
        public static ID: number = 158;

        name: string;
        status: PlayerStatus;

        constructor() {
            this.name = '';
            this.status = new PlayerStatus();
            super();
        }

        public getTypeId(): number {
            return GameFightFighterNamedInformations.ID;
        }

        public reset(): void {
            this.name = '';
            this.status = new PlayerStatus();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightFighterNamedInformations(param1);
        }

        public serializeAs_GameFightFighterNamedInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterInformations(param1);
            param1.writeUTF(this.name);
            this.status.serializeAs_PlayerStatus(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightFighterNamedInformations(param1);
        }

        public deserializeAs_GameFightFighterNamedInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.name = param1.readUTF();
            this.status = new PlayerStatus();
            this.status.deserialize(param1);

        }
    }
    export class GameFightFighterNamedLightInformations extends GameFightFighterLightInformations implements INetworkType {
        public static ID: number = 456;

        name: string;

        constructor() {
            this.name = '';
            super();
        }

        public getTypeId(): number {
            return GameFightFighterNamedLightInformations.ID;
        }

        public reset(): void {
            this.name = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightFighterNamedLightInformations(param1);
        }

        public serializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterLightInformations(param1);
            param1.writeUTF(this.name);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightFighterNamedLightInformations(param1);
        }

        public deserializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.name = param1.readUTF();

        }
    }
    export class GameFightFighterTaxCollectorLightInformations extends GameFightFighterLightInformations implements INetworkType {
        public static ID: number = 457;

        firstNameId: number;
        lastNameId: number;

        constructor() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightFighterTaxCollectorLightInformations.ID;
        }

        public reset(): void {
            this.firstNameId = 0;
            this.lastNameId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightFighterTaxCollectorLightInformations(param1);
        }

        public serializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterLightInformations(param1);
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
            }
            param1.writeVarShort(this.firstNameId);
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
            }
            param1.writeVarShort(this.lastNameId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightFighterTaxCollectorLightInformations(param1);
        }

        public deserializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.firstNameId = param1.readVarUhShort();
            if (this.firstNameId < 0) {
                throw new Error('Forbidden value (' + this.firstNameId + ') on element of GameFightFighterTaxCollectorLightInformations.firstNameId.');
            }
            this.lastNameId = param1.readVarUhShort();
            if (this.lastNameId < 0) {
                throw new Error('Forbidden value (' + this.lastNameId + ') on element of GameFightFighterTaxCollectorLightInformations.lastNameId.');
            }

        }
    }
    export class GameFightMinimalStats implements INetworkType {
        public static ID: number = 31;

        lifePoints: number;
        maxLifePoints: number;
        baseMaxLifePoints: number;
        permanentDamagePercent: number;
        shieldPoints: number;
        actionPoints: number;
        maxActionPoints: number;
        movementPoints: number;
        maxMovementPoints: number;
        summoner: number;
        summoned: boolean;
        neutralElementResistPercent: number;
        earthElementResistPercent: number;
        waterElementResistPercent: number;
        airElementResistPercent: number;
        fireElementResistPercent: number;
        neutralElementReduction: number;
        earthElementReduction: number;
        waterElementReduction: number;
        airElementReduction: number;
        fireElementReduction: number;
        criticalDamageFixedResist: number;
        pushDamageFixedResist: number;
        pvpNeutralElementResistPercent: number;
        pvpEarthElementResistPercent: number;
        pvpWaterElementResistPercent: number;
        pvpAirElementResistPercent: number;
        pvpFireElementResistPercent: number;
        pvpNeutralElementReduction: number;
        pvpEarthElementReduction: number;
        pvpWaterElementReduction: number;
        pvpAirElementReduction: number;
        pvpFireElementReduction: number;
        dodgePALostProbability: number;
        dodgePMLostProbability: number;
        tackleBlock: number;
        tackleEvade: number;
        invisibilityState: number;

        constructor() {
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

        public getTypeId(): number {
            return GameFightMinimalStats.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightMinimalStats(param1);
        }

        public serializeAs_GameFightMinimalStats(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightMinimalStats(param1);
        }

        public deserializeAs_GameFightMinimalStats(param1: ICustomDataInput): void {
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

        }
    }
    export class GameFightMinimalStatsPreparation extends GameFightMinimalStats implements INetworkType {
        public static ID: number = 360;

        initiative: number;

        constructor() {
            this.initiative = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightMinimalStatsPreparation.ID;
        }

        public reset(): void {
            this.initiative = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightMinimalStatsPreparation(param1);
        }

        public serializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightMinimalStats(param1);
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
            }
            param1.writeVarInt(this.initiative);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightMinimalStatsPreparation(param1);
        }

        public deserializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.initiative = param1.readVarUhInt();
            if (this.initiative < 0) {
                throw new Error('Forbidden value (' + this.initiative + ') on element of GameFightMinimalStatsPreparation.initiative.');
            }

        }
    }
    export class GameFightMonsterInformations extends GameFightAIInformations implements INetworkType {
        public static ID: number = 29;

        creatureGenericId: number;
        creatureGrade: number;

        constructor() {
            this.creatureGenericId = 0;
            this.creatureGrade = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightMonsterInformations.ID;
        }

        public reset(): void {
            this.creatureGenericId = 0;
            this.creatureGrade = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightMonsterInformations(param1);
        }

        public serializeAs_GameFightMonsterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightAIInformations(param1);
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
            }
            param1.writeVarShort(this.creatureGenericId);
            if (this.creatureGrade < 0) {
                throw new Error('Forbidden value (' + this.creatureGrade + ') on element creatureGrade.');
            }
            param1.writeByte(this.creatureGrade);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightMonsterInformations(param1);
        }

        public deserializeAs_GameFightMonsterInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.creatureGenericId = param1.readVarUhShort();
            if (this.creatureGenericId < 0) {
                throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightMonsterInformations.creatureGenericId.');
            }
            this.creatureGrade = param1.readByte();
            if (this.creatureGrade < 0) {
                throw new Error('Forbidden value (' + this.creatureGrade + ') on element of GameFightMonsterInformations.creatureGrade.');
            }

        }
    }
    export class GameFightMonsterWithAlignmentInformations extends GameFightMonsterInformations implements INetworkType {
        public static ID: number = 203;

        alignmentInfos: ActorAlignmentInformations;

        constructor() {
            this.alignmentInfos = new ActorAlignmentInformations();
            super();
        }

        public getTypeId(): number {
            return GameFightMonsterWithAlignmentInformations.ID;
        }

        public reset(): void {
            this.alignmentInfos = new ActorAlignmentInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightMonsterWithAlignmentInformations(param1);
        }

        public serializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightMonsterInformations(param1);
            this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightMonsterWithAlignmentInformations(param1);
        }

        public deserializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.alignmentInfos = new ActorAlignmentInformations();
            this.alignmentInfos.deserialize(param1);

        }
    }
    export class GameFightMutantInformations extends GameFightFighterNamedInformations implements INetworkType {
        public static ID: number = 50;

        powerLevel: number;

        constructor() {
            this.powerLevel = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightMutantInformations.ID;
        }

        public reset(): void {
            this.powerLevel = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightMutantInformations(param1);
        }

        public serializeAs_GameFightMutantInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightFighterNamedInformations(param1);
            if (this.powerLevel < 0) {
                throw new Error('Forbidden value (' + this.powerLevel + ') on element powerLevel.');
            }
            param1.writeByte(this.powerLevel);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightMutantInformations(param1);
        }

        public deserializeAs_GameFightMutantInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.powerLevel = param1.readByte();
            if (this.powerLevel < 0) {
                throw new Error('Forbidden value (' + this.powerLevel + ') on element of GameFightMutantInformations.powerLevel.');
            }

        }
    }
    export class GameFightResumeSlaveInfo implements INetworkType {
        public static ID: number = 364;

        slaveId: number;
        spellCooldowns: GameFightSpellCooldown[];
        summonCount: number;
        bombCount: number;

        constructor() {
            this.slaveId = 0;
            this.spellCooldowns = [];
            this.summonCount = 0;
            this.bombCount = 0;
        }

        public getTypeId(): number {
            return GameFightResumeSlaveInfo.ID;
        }

        public reset(): void {
            this.slaveId = 0;
            this.spellCooldowns = [];
            this.summonCount = 0;
            this.bombCount = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightResumeSlaveInfo(param1);
        }

        public serializeAs_GameFightResumeSlaveInfo(param1: ICustomDataOutput): void {
            param1.writeInt(this.slaveId);
            param1.writeShort(this.spellCooldowns.length);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightResumeSlaveInfo(param1);
        }

        public deserializeAs_GameFightResumeSlaveInfo(param1: ICustomDataInput): void {
            var _loc4_: GameFightSpellCooldown = null;
            this.slaveId = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
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

        }
    }
    export class GameFightSpellCooldown implements INetworkType {
        public static ID: number = 205;

        spellId: number;
        cooldown: number;

        constructor() {
            this.spellId = 0;
            this.cooldown = 0;
        }

        public getTypeId(): number {
            return GameFightSpellCooldown.ID;
        }

        public reset(): void {
            this.spellId = 0;
            this.cooldown = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightSpellCooldown(param1);
        }

        public serializeAs_GameFightSpellCooldown(param1: ICustomDataOutput): void {
            param1.writeInt(this.spellId);
            if (this.cooldown < 0) {
                throw new Error('Forbidden value (' + this.cooldown + ') on element cooldown.');
            }
            param1.writeByte(this.cooldown);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightSpellCooldown(param1);
        }

        public deserializeAs_GameFightSpellCooldown(param1: ICustomDataInput): void {
            this.spellId = param1.readInt();
            this.cooldown = param1.readByte();
            if (this.cooldown < 0) {
                throw new Error('Forbidden value (' + this.cooldown + ') on element of GameFightSpellCooldown.cooldown.');
            }

        }
    }
    export class GameFightTaxCollectorInformations extends GameFightAIInformations implements INetworkType {
        public static ID: number = 48;

        firstNameId: number;
        lastNameId: number;
        level: number;

        constructor() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
            super();
        }

        public getTypeId(): number {
            return GameFightTaxCollectorInformations.ID;
        }

        public reset(): void {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.level = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameFightTaxCollectorInformations(param1);
        }

        public serializeAs_GameFightTaxCollectorInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameFightAIInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameFightTaxCollectorInformations(param1);
        }

        public deserializeAs_GameFightTaxCollectorInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class AllianceInformations extends BasicNamedAllianceInformations implements INetworkType {
        public static ID: number = 417;

        allianceEmblem: GuildEmblem;

        constructor() {
            this.allianceEmblem = new GuildEmblem();
            super();
        }

        public getTypeId(): number {
            return AllianceInformations.ID;
        }

        public reset(): void {
            this.allianceEmblem = new GuildEmblem();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AllianceInformations(param1);
        }

        public serializeAs_AllianceInformations(param1: ICustomDataOutput): void {
            super.serializeAs_BasicNamedAllianceInformations(param1);
            this.allianceEmblem.serializeAs_GuildEmblem(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AllianceInformations(param1);
        }

        public deserializeAs_AllianceInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceEmblem = new GuildEmblem();
            this.allianceEmblem.deserialize(param1);

        }
    }
    export class AlternativeMonstersInGroupLightInformations implements INetworkType {
        public static ID: number = 394;

        playerCount: number;
        monsters: MonsterInGroupLightInformations[];

        constructor() {
            this.playerCount = 0;
            this.monsters = [];
        }

        public getTypeId(): number {
            return AlternativeMonstersInGroupLightInformations.ID;
        }

        public reset(): void {
            this.playerCount = 0;
            this.monsters = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AlternativeMonstersInGroupLightInformations(param1);
        }

        public serializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataOutput): void {
            param1.writeInt(this.playerCount);
            param1.writeShort(this.monsters.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.monsters.length) {
                (this.monsters[_loc2_]).serializeAs_MonsterInGroupLightInformations(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AlternativeMonstersInGroupLightInformations(param1);
        }

        public deserializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataInput): void {
            var _loc4_: MonsterInGroupLightInformations = null;
            this.playerCount = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MonsterInGroupLightInformations();
                _loc4_.deserialize(param1);
                this.monsters.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class AtlasPointsInformations implements INetworkType {
        public static ID: number = 175;

        type: number;
        coords: MapCoordinatesExtended[];

        constructor() {
            this.type = 0;
            this.coords = [];
        }

        public getTypeId(): number {
            return AtlasPointsInformations.ID;
        }

        public reset(): void {
            this.type = 0;
            this.coords = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AtlasPointsInformations(param1);
        }

        public serializeAs_AtlasPointsInformations(param1: ICustomDataOutput): void {
            param1.writeByte(this.type);
            param1.writeShort(this.coords.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.coords.length) {
                (this.coords[_loc2_]).serializeAs_MapCoordinatesExtended(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AtlasPointsInformations(param1);
        }

        public deserializeAs_AtlasPointsInformations(param1: ICustomDataInput): void {
            var _loc4_: MapCoordinatesExtended = null;
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of AtlasPointsInformations.type.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MapCoordinatesExtended();
                _loc4_.deserialize(param1);
                this.coords.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class BasicAllianceInformations extends AbstractSocialGroupInfos implements INetworkType {
        public static ID: number = 419;

        allianceId: number;
        allianceTag: string;

        constructor() {
            this.allianceId = 0;
            this.allianceTag = '';
            super();
        }

        public getTypeId(): number {
            return BasicAllianceInformations.ID;
        }

        public reset(): void {
            this.allianceId = 0;
            this.allianceTag = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_BasicAllianceInformations(param1);
        }

        public serializeAs_BasicAllianceInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractSocialGroupInfos(param1);
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
            }
            param1.writeVarInt(this.allianceId);
            param1.writeUTF(this.allianceTag);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_BasicAllianceInformations(param1);
        }

        public deserializeAs_BasicAllianceInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceId = param1.readVarUhInt();
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element of BasicAllianceInformations.allianceId.');
            }
            this.allianceTag = param1.readUTF();

        }
    }
    export class BasicGuildInformations extends AbstractSocialGroupInfos implements INetworkType {
        public static ID: number = 365;

        guildId: number;
        guildName: string;

        constructor() {
            this.guildId = 0;
            this.guildName = '';
            super();
        }

        public getTypeId(): number {
            return BasicGuildInformations.ID;
        }

        public reset(): void {
            this.guildId = 0;
            this.guildName = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_BasicGuildInformations(param1);
        }

        public serializeAs_BasicGuildInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractSocialGroupInfos(param1);
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
            }
            param1.writeVarInt(this.guildId);
            param1.writeUTF(this.guildName);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_BasicGuildInformations(param1);
        }

        public deserializeAs_BasicGuildInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guildId = param1.readVarUhInt();
            if (this.guildId < 0) {
                throw new Error('Forbidden value (' + this.guildId + ') on element of BasicGuildInformations.guildId.');
            }
            this.guildName = param1.readUTF();

        }
    }
    export class BasicNamedAllianceInformations extends BasicAllianceInformations implements INetworkType {
        public static ID: number = 418;

        allianceName: string;

        constructor() {
            this.allianceName = '';
            super();
        }

        public getTypeId(): number {
            return BasicNamedAllianceInformations.ID;
        }

        public reset(): void {
            this.allianceName = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_BasicNamedAllianceInformations(param1);
        }

        public serializeAs_BasicNamedAllianceInformations(param1: ICustomDataOutput): void {
            super.serializeAs_BasicAllianceInformations(param1);
            param1.writeUTF(this.allianceName);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_BasicNamedAllianceInformations(param1);
        }

        public deserializeAs_BasicNamedAllianceInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceName = param1.readUTF();

        }
    }
    export class GameRolePlayActorInformations extends GameContextActorInformations implements INetworkType {
        public static ID: number = 141;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return GameRolePlayActorInformations.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayActorInformations(param1);
        }

        public serializeAs_GameRolePlayActorInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameContextActorInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayActorInformations(param1);
        }

        public deserializeAs_GameRolePlayActorInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations implements INetworkType {
        public static ID: number = 36;

        alignmentInfos: ActorAlignmentInformations;

        constructor() {
            this.alignmentInfos = new ActorAlignmentInformations();
            super();
        }

        public getTypeId(): number {
            return GameRolePlayCharacterInformations.ID;
        }

        public reset(): void {
            this.alignmentInfos = new ActorAlignmentInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayCharacterInformations(param1);
        }

        public serializeAs_GameRolePlayCharacterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayHumanoidInformations(param1);
            this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayCharacterInformations(param1);
        }

        public deserializeAs_GameRolePlayCharacterInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.alignmentInfos = new ActorAlignmentInformations();
            this.alignmentInfos.deserialize(param1);

        }
    }
    export class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations implements INetworkType {
        public static ID: number = 160;

        staticInfos: GroupMonsterStaticInformations;
        creationTime: number;
        ageBonusRate: number;
        lootShare: number;
        alignmentSide: number;
        keyRingBonus: boolean;
        hasHardcoreDrop: boolean;
        hasAVARewardToken: boolean;

        constructor() {
            this.staticInfos = new GroupMonsterStaticInformations();
            this.creationTime = 0;
            this.ageBonusRate = 0;
            this.lootShare = 0;
            this.alignmentSide = 0;
            this.keyRingBonus = false;
            this.hasHardcoreDrop = false;
            this.hasAVARewardToken = false;
            super();
        }

        public getTypeId(): number {
            return GameRolePlayGroupMonsterInformations.ID;
        }

        public reset(): void {
            this.staticInfos = new GroupMonsterStaticInformations();
            this.creationTime = 0;
            this.ageBonusRate = 0;
            this.lootShare = 0;
            this.alignmentSide = 0;
            this.keyRingBonus = false;
            this.hasHardcoreDrop = false;
            this.hasAVARewardToken = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayGroupMonsterInformations(param1);
        }

        public serializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayActorInformations(param1);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayGroupMonsterInformations(param1);
        }

        public deserializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readByte();
            this.keyRingBonus = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.hasHardcoreDrop = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.hasAVARewardToken = BooleanByteWrapper.getFlag(_loc2_, 2);
            var _loc3_: number = param1.readUnsignedShort();
            this.staticInfos = <GroupMonsterStaticInformations>ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc3_);
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

        }
    }
    export class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations implements INetworkType {
        public static ID: number = 464;

        nbWaves: number;
        alternatives: GroupMonsterStaticInformations[];

        constructor() {
            this.nbWaves = 0;
            this.alternatives = [];
            super();
        }

        public getTypeId(): number {
            return GameRolePlayGroupMonsterWaveInformations.ID;
        }

        public reset(): void {
            this.nbWaves = 0;
            this.alternatives = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
        }

        public serializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayGroupMonsterInformations(param1);
            if (this.nbWaves < 0) {
                throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
            }
            param1.writeByte(this.nbWaves);
            param1.writeShort(this.alternatives.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.alternatives.length) {
                param1.writeShort((this.alternatives[_loc2_]).getTypeId());
                (this.alternatives[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1);
        }

        public deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: GroupMonsterStaticInformations = null;
            super.deserialize(param1);
            this.nbWaves = param1.readByte();
            if (this.nbWaves < 0) {
                throw new Error('Forbidden value (' + this.nbWaves + ') on element of GameRolePlayGroupMonsterWaveInformations.nbWaves.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <GroupMonsterStaticInformations>ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.alternatives.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations implements INetworkType {
        public static ID: number = 159;

        humanoidInfo: HumanInformations;
        accountId: number;

        constructor() {
            this.humanoidInfo = new HumanInformations();
            this.accountId = 0;
            super();
        }

        public getTypeId(): number {
            return GameRolePlayHumanoidInformations.ID;
        }

        public reset(): void {
            this.humanoidInfo = new HumanInformations();
            this.accountId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayHumanoidInformations(param1);
        }

        public serializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayNamedActorInformations(param1);
            param1.writeShort(this.humanoidInfo.getTypeId());
            this.humanoidInfo.serialize(param1);
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
            }
            param1.writeInt(this.accountId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayHumanoidInformations(param1);
        }

        public deserializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            this.humanoidInfo = <HumanInformations>ProtocolTypeManager.getInstance(HumanInformations, _loc2_);
            this.humanoidInfo.deserialize(param1);
            this.accountId = param1.readInt();
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element of GameRolePlayHumanoidInformations.accountId.');
            }

        }
    }
    export class GameRolePlayMerchantInformations extends GameRolePlayNamedActorInformations implements INetworkType {
        public static ID: number = 129;

        sellType: number;
        options: HumanOption[];

        constructor() {
            this.sellType = 0;
            this.options = [];
            super();
        }

        public getTypeId(): number {
            return GameRolePlayMerchantInformations.ID;
        }

        public reset(): void {
            this.sellType = 0;
            this.options = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayMerchantInformations(param1);
        }

        public serializeAs_GameRolePlayMerchantInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayNamedActorInformations(param1);
            if (this.sellType < 0) {
                throw new Error('Forbidden value (' + this.sellType + ') on element sellType.');
            }
            param1.writeByte(this.sellType);
            param1.writeShort(this.options.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.options.length) {
                param1.writeShort((this.options[_loc2_]).getTypeId());
                (this.options[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayMerchantInformations(param1);
        }

        public deserializeAs_GameRolePlayMerchantInformations(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: HumanOption = null;
            super.deserialize(param1);
            this.sellType = param1.readByte();
            if (this.sellType < 0) {
                throw new Error('Forbidden value (' + this.sellType + ') on element of GameRolePlayMerchantInformations.sellType.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <HumanOption>ProtocolTypeManager.getInstance(HumanOption, _loc4_);
                _loc5_.deserialize(param1);
                this.options.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations implements INetworkType {
        public static ID: number = 180;

        ownerName: string;
        level: number;

        constructor() {
            this.ownerName = '';
            this.level = 0;
            super();
        }

        public getTypeId(): number {
            return GameRolePlayMountInformations.ID;
        }

        public reset(): void {
            this.ownerName = '';
            this.level = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayMountInformations(param1);
        }

        public serializeAs_GameRolePlayMountInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayNamedActorInformations(param1);
            param1.writeUTF(this.ownerName);
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element level.');
            }
            param1.writeByte(this.level);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayMountInformations(param1);
        }

        public deserializeAs_GameRolePlayMountInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.ownerName = param1.readUTF();
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error('Forbidden value (' + this.level + ') on element of GameRolePlayMountInformations.level.');
            }

        }
    }
    export class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations implements INetworkType {
        public static ID: number = 3;

        monsterId: number;
        powerLevel: number;

        constructor() {
            this.monsterId = 0;
            this.powerLevel = 0;
            super();
        }

        public getTypeId(): number {
            return GameRolePlayMutantInformations.ID;
        }

        public reset(): void {
            this.monsterId = 0;
            this.powerLevel = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayMutantInformations(param1);
        }

        public serializeAs_GameRolePlayMutantInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayHumanoidInformations(param1);
            if (this.monsterId < 0) {
                throw new Error('Forbidden value (' + this.monsterId + ') on element monsterId.');
            }
            param1.writeVarShort(this.monsterId);
            param1.writeByte(this.powerLevel);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayMutantInformations(param1);
        }

        public deserializeAs_GameRolePlayMutantInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.monsterId = param1.readVarUhShort();
            if (this.monsterId < 0) {
                throw new Error('Forbidden value (' + this.monsterId + ') on element of GameRolePlayMutantInformations.monsterId.');
            }
            this.powerLevel = param1.readByte();

        }
    }
    export class GameRolePlayNamedActorInformations extends GameRolePlayActorInformations implements INetworkType {
        public static ID: number = 154;

        name: string;

        constructor() {
            this.name = '';
            super();
        }

        public getTypeId(): number {
            return GameRolePlayNamedActorInformations.ID;
        }

        public reset(): void {
            this.name = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayNamedActorInformations(param1);
        }

        public serializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayActorInformations(param1);
            param1.writeUTF(this.name);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayNamedActorInformations(param1);
        }

        public deserializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.name = param1.readUTF();

        }
    }
    export class GameRolePlayNpcInformations extends GameRolePlayActorInformations implements INetworkType {
        public static ID: number = 156;

        npcId: number;
        sex: boolean;
        specialArtworkId: number;

        constructor() {
            this.npcId = 0;
            this.sex = false;
            this.specialArtworkId = 0;
            super();
        }

        public getTypeId(): number {
            return GameRolePlayNpcInformations.ID;
        }

        public reset(): void {
            this.npcId = 0;
            this.sex = false;
            this.specialArtworkId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayNpcInformations(param1);
        }

        public serializeAs_GameRolePlayNpcInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayActorInformations(param1);
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
            }
            param1.writeVarShort(this.npcId);
            param1.writeBoolean(this.sex);
            if (this.specialArtworkId < 0) {
                throw new Error('Forbidden value (' + this.specialArtworkId + ') on element specialArtworkId.');
            }
            param1.writeVarShort(this.specialArtworkId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayNpcInformations(param1);
        }

        public deserializeAs_GameRolePlayNpcInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.npcId = param1.readVarUhShort();
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayNpcInformations.npcId.');
            }
            this.sex = param1.readBoolean();
            this.specialArtworkId = param1.readVarUhShort();
            if (this.specialArtworkId < 0) {
                throw new Error('Forbidden value (' + this.specialArtworkId + ') on element of GameRolePlayNpcInformations.specialArtworkId.');
            }

        }
    }
    export class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations implements INetworkType {
        public static ID: number = 383;

        questFlag: GameRolePlayNpcQuestFlag;

        constructor() {
            this.questFlag = new GameRolePlayNpcQuestFlag();
            super();
        }

        public getTypeId(): number {
            return GameRolePlayNpcWithQuestInformations.ID;
        }

        public reset(): void {
            this.questFlag = new GameRolePlayNpcQuestFlag();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayNpcWithQuestInformations(param1);
        }

        public serializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayNpcInformations(param1);
            this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayNpcWithQuestInformations(param1);
        }

        public deserializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.questFlag = new GameRolePlayNpcQuestFlag();
            this.questFlag.deserialize(param1);

        }
    }
    export class GameRolePlayPortalInformations extends GameRolePlayActorInformations implements INetworkType {
        public static ID: number = 467;

        portal: PortalInformation;

        constructor() {
            this.portal = new PortalInformation();
            super();
        }

        public getTypeId(): number {
            return GameRolePlayPortalInformations.ID;
        }

        public reset(): void {
            this.portal = new PortalInformation();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayPortalInformations(param1);
        }

        public serializeAs_GameRolePlayPortalInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayActorInformations(param1);
            param1.writeShort(this.portal.getTypeId());
            this.portal.serialize(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayPortalInformations(param1);
        }

        public deserializeAs_GameRolePlayPortalInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            this.portal = <PortalInformation>ProtocolTypeManager.getInstance(PortalInformation, _loc2_);
            this.portal.deserialize(param1);

        }
    }
    export class GameRolePlayPrismInformations extends GameRolePlayActorInformations implements INetworkType {
        public static ID: number = 161;

        prism: PrismInformation;

        constructor() {
            this.prism = new PrismInformation();
            super();
        }

        public getTypeId(): number {
            return GameRolePlayPrismInformations.ID;
        }

        public reset(): void {
            this.prism = new PrismInformation();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayPrismInformations(param1);
        }

        public serializeAs_GameRolePlayPrismInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayActorInformations(param1);
            param1.writeShort(this.prism.getTypeId());
            this.prism.serialize(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayPrismInformations(param1);
        }

        public deserializeAs_GameRolePlayPrismInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            this.prism = <PrismInformation>ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
            this.prism.deserialize(param1);

        }
    }
    export class GameRolePlayTreasureHintInformations extends GameRolePlayActorInformations implements INetworkType {
        public static ID: number = 471;

        npcId: number;

        constructor() {
            this.npcId = 0;
            super();
        }

        public getTypeId(): number {
            return GameRolePlayTreasureHintInformations.ID;
        }

        public reset(): void {
            this.npcId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayTreasureHintInformations(param1);
        }

        public serializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GameRolePlayActorInformations(param1);
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
            }
            param1.writeVarShort(this.npcId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayTreasureHintInformations(param1);
        }

        public deserializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.npcId = param1.readVarUhShort();
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayTreasureHintInformations.npcId.');
            }

        }
    }
    export class GroupMonsterStaticInformations implements INetworkType {
        public static ID: number = 140;

        mainCreatureLightInfos: MonsterInGroupLightInformations;
        underlings: MonsterInGroupInformations[];

        constructor() {
            this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
            this.underlings = [];
        }

        public getTypeId(): number {
            return GroupMonsterStaticInformations.ID;
        }

        public reset(): void {
            this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
            this.underlings = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GroupMonsterStaticInformations(param1);
        }

        public serializeAs_GroupMonsterStaticInformations(param1: ICustomDataOutput): void {
            this.mainCreatureLightInfos.serializeAs_MonsterInGroupLightInformations(param1);
            param1.writeShort(this.underlings.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.underlings.length) {
                (this.underlings[_loc2_]).serializeAs_MonsterInGroupInformations(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GroupMonsterStaticInformations(param1);
        }

        public deserializeAs_GroupMonsterStaticInformations(param1: ICustomDataInput): void {
            var _loc4_: MonsterInGroupInformations = null;
            this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
            this.mainCreatureLightInfos.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MonsterInGroupInformations();
                _loc4_.deserialize(param1);
                this.underlings.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations implements INetworkType {
        public static ID: number = 396;

        alternatives: AlternativeMonstersInGroupLightInformations[];

        constructor() {
            this.alternatives = [];
            super();
        }

        public getTypeId(): number {
            return GroupMonsterStaticInformationsWithAlternatives.ID;
        }

        public reset(): void {
            this.alternatives = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
        }

        public serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataOutput): void {
            super.serializeAs_GroupMonsterStaticInformations(param1);
            param1.writeShort(this.alternatives.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.alternatives.length) {
                (this.alternatives[_loc2_]).serializeAs_AlternativeMonstersInGroupLightInformations(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
        }

        public deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataInput): void {
            var _loc4_: AlternativeMonstersInGroupLightInformations = null;
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new AlternativeMonstersInGroupLightInformations();
                _loc4_.deserialize(param1);
                this.alternatives.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class GuildInAllianceInformations extends GuildInformations implements INetworkType {
        public static ID: number = 420;

        guildLevel: number;
        nbMembers: number;
        enabled: boolean;

        constructor() {
            this.guildLevel = 0;
            this.nbMembers = 0;
            this.enabled = false;
            super();
        }

        public getTypeId(): number {
            return GuildInAllianceInformations.ID;
        }

        public reset(): void {
            this.guildLevel = 0;
            this.nbMembers = 0;
            this.enabled = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildInAllianceInformations(param1);
        }

        public serializeAs_GuildInAllianceInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GuildInformations(param1);
            if (this.guildLevel < 1 || this.guildLevel > 200) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
            }
            param1.writeByte(this.guildLevel);
            if (this.nbMembers < 1 || this.nbMembers > 240) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
            }
            param1.writeByte(this.nbMembers);
            param1.writeBoolean(this.enabled);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildInAllianceInformations(param1);
        }

        public deserializeAs_GuildInAllianceInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guildLevel = param1.readUnsignedByte();
            if (this.guildLevel < 1 || this.guildLevel > 200) {
                throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildInAllianceInformations.guildLevel.');
            }
            this.nbMembers = param1.readUnsignedByte();
            if (this.nbMembers < 1 || this.nbMembers > 240) {
                throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildInAllianceInformations.nbMembers.');
            }
            this.enabled = param1.readBoolean();

        }
    }
    export class GuildInformations extends BasicGuildInformations implements INetworkType {
        public static ID: number = 127;

        guildEmblem: GuildEmblem;

        constructor() {
            this.guildEmblem = new GuildEmblem();
            super();
        }

        public getTypeId(): number {
            return GuildInformations.ID;
        }

        public reset(): void {
            this.guildEmblem = new GuildEmblem();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildInformations(param1);
        }

        public serializeAs_GuildInformations(param1: ICustomDataOutput): void {
            super.serializeAs_BasicGuildInformations(param1);
            this.guildEmblem.serializeAs_GuildEmblem(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildInformations(param1);
        }

        public deserializeAs_GuildInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guildEmblem = new GuildEmblem();
            this.guildEmblem.deserialize(param1);

        }
    }
    export class HumanInformations implements INetworkType {
        public static ID: number = 157;

        restrictions: ActorRestrictionsInformations;
        sex: boolean;
        options: HumanOption[];

        constructor() {
            this.restrictions = new ActorRestrictionsInformations();
            this.sex = false;
            this.options = [];
        }

        public getTypeId(): number {
            return HumanInformations.ID;
        }

        public reset(): void {
            this.restrictions = new ActorRestrictionsInformations();
            this.sex = false;
            this.options = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanInformations(param1);
        }

        public serializeAs_HumanInformations(param1: ICustomDataOutput): void {
            this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
            param1.writeBoolean(this.sex);
            param1.writeShort(this.options.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.options.length) {
                param1.writeShort((this.options[_loc2_]).getTypeId());
                (this.options[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanInformations(param1);
        }

        public deserializeAs_HumanInformations(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: HumanOption = null;
            this.restrictions = new ActorRestrictionsInformations();
            this.restrictions.deserialize(param1);
            this.sex = param1.readBoolean();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <HumanOption>ProtocolTypeManager.getInstance(HumanOption, _loc4_);
                _loc5_.deserialize(param1);
                this.options.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class HumanOption implements INetworkType {
        public static ID: number = 406;



        constructor() {

        }

        public getTypeId(): number {
            return HumanOption.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOption(param1);
        }

        public serializeAs_HumanOption(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOption(param1);
        }

        public deserializeAs_HumanOption(param1: ICustomDataInput): void {

        }
    }
    export class HumanOptionAlliance extends HumanOption implements INetworkType {
        public static ID: number = 425;

        allianceInformations: AllianceInformations;
        aggressable: number;

        constructor() {
            this.allianceInformations = new AllianceInformations();
            this.aggressable = 0;
            super();
        }

        public getTypeId(): number {
            return HumanOptionAlliance.ID;
        }

        public reset(): void {
            this.allianceInformations = new AllianceInformations();
            this.aggressable = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOptionAlliance(param1);
        }

        public serializeAs_HumanOptionAlliance(param1: ICustomDataOutput): void {
            super.serializeAs_HumanOption(param1);
            this.allianceInformations.serializeAs_AllianceInformations(param1);
            param1.writeByte(this.aggressable);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOptionAlliance(param1);
        }

        public deserializeAs_HumanOptionAlliance(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceInformations = new AllianceInformations();
            this.allianceInformations.deserialize(param1);
            this.aggressable = param1.readByte();
            if (this.aggressable < 0) {
                throw new Error('Forbidden value (' + this.aggressable + ') on element of HumanOptionAlliance.aggressable.');
            }

        }
    }
    export class HumanOptionEmote extends HumanOption implements INetworkType {
        public static ID: number = 407;

        emoteId: number;
        emoteStartTime: number;

        constructor() {
            this.emoteId = 0;
            this.emoteStartTime = 0;
            super();
        }

        public getTypeId(): number {
            return HumanOptionEmote.ID;
        }

        public reset(): void {
            this.emoteId = 0;
            this.emoteStartTime = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOptionEmote(param1);
        }

        public serializeAs_HumanOptionEmote(param1: ICustomDataOutput): void {
            super.serializeAs_HumanOption(param1);
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
            }
            param1.writeByte(this.emoteId);
            if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.emoteStartTime + ') on element emoteStartTime.');
            }
            param1.writeDouble(this.emoteStartTime);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOptionEmote(param1);
        }

        public deserializeAs_HumanOptionEmote(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.emoteId = param1.readUnsignedByte();
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element of HumanOptionEmote.emoteId.');
            }
            this.emoteStartTime = param1.readDouble();
            if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.emoteStartTime + ') on element of HumanOptionEmote.emoteStartTime.');
            }

        }
    }
    export class HumanOptionFollowers extends HumanOption implements INetworkType {
        public static ID: number = 410;

        followingCharactersLook: IndexedEntityLook[];

        constructor() {
            this.followingCharactersLook = [];
            super();
        }

        public getTypeId(): number {
            return HumanOptionFollowers.ID;
        }

        public reset(): void {
            this.followingCharactersLook = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOptionFollowers(param1);
        }

        public serializeAs_HumanOptionFollowers(param1: ICustomDataOutput): void {
            super.serializeAs_HumanOption(param1);
            param1.writeShort(this.followingCharactersLook.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.followingCharactersLook.length) {
                (this.followingCharactersLook[_loc2_]).serializeAs_IndexedEntityLook(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOptionFollowers(param1);
        }

        public deserializeAs_HumanOptionFollowers(param1: ICustomDataInput): void {
            var _loc4_: IndexedEntityLook = null;
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new IndexedEntityLook();
                _loc4_.deserialize(param1);
                this.followingCharactersLook.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class HumanOptionGuild extends HumanOption implements INetworkType {
        public static ID: number = 409;

        guildInformations: GuildInformations;

        constructor() {
            this.guildInformations = new GuildInformations();
            super();
        }

        public getTypeId(): number {
            return HumanOptionGuild.ID;
        }

        public reset(): void {
            this.guildInformations = new GuildInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOptionGuild(param1);
        }

        public serializeAs_HumanOptionGuild(param1: ICustomDataOutput): void {
            super.serializeAs_HumanOption(param1);
            this.guildInformations.serializeAs_GuildInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOptionGuild(param1);
        }

        public deserializeAs_HumanOptionGuild(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guildInformations = new GuildInformations();
            this.guildInformations.deserialize(param1);

        }
    }
    export class HumanOptionObjectUse extends HumanOption implements INetworkType {
        public static ID: number = 449;

        delayTypeId: number;
        delayEndTime: number;
        objectGID: number;

        constructor() {
            this.delayTypeId = 0;
            this.delayEndTime = 0;
            this.objectGID = 0;
            super();
        }

        public getTypeId(): number {
            return HumanOptionObjectUse.ID;
        }

        public reset(): void {
            this.delayTypeId = 0;
            this.delayEndTime = 0;
            this.objectGID = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOptionObjectUse(param1);
        }

        public serializeAs_HumanOptionObjectUse(param1: ICustomDataOutput): void {
            super.serializeAs_HumanOption(param1);
            param1.writeByte(this.delayTypeId);
            if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
                throw new Error('Forbidden value (' + this.delayEndTime + ') on element delayEndTime.');
            }
            param1.writeDouble(this.delayEndTime);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOptionObjectUse(param1);
        }

        public deserializeAs_HumanOptionObjectUse(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class HumanOptionOrnament extends HumanOption implements INetworkType {
        public static ID: number = 411;

        ornamentId: number;

        constructor() {
            this.ornamentId = 0;
            super();
        }

        public getTypeId(): number {
            return HumanOptionOrnament.ID;
        }

        public reset(): void {
            this.ornamentId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOptionOrnament(param1);
        }

        public serializeAs_HumanOptionOrnament(param1: ICustomDataOutput): void {
            super.serializeAs_HumanOption(param1);
            if (this.ornamentId < 0) {
                throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
            }
            param1.writeVarShort(this.ornamentId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOptionOrnament(param1);
        }

        public deserializeAs_HumanOptionOrnament(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.ornamentId = param1.readVarUhShort();
            if (this.ornamentId < 0) {
                throw new Error('Forbidden value (' + this.ornamentId + ') on element of HumanOptionOrnament.ornamentId.');
            }

        }
    }
    export class HumanOptionTitle extends HumanOption implements INetworkType {
        public static ID: number = 408;

        titleId: number;
        titleParam: string;

        constructor() {
            this.titleId = 0;
            this.titleParam = '';
            super();
        }

        public getTypeId(): number {
            return HumanOptionTitle.ID;
        }

        public reset(): void {
            this.titleId = 0;
            this.titleParam = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HumanOptionTitle(param1);
        }

        public serializeAs_HumanOptionTitle(param1: ICustomDataOutput): void {
            super.serializeAs_HumanOption(param1);
            if (this.titleId < 0) {
                throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
            }
            param1.writeVarShort(this.titleId);
            param1.writeUTF(this.titleParam);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HumanOptionTitle(param1);
        }

        public deserializeAs_HumanOptionTitle(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.titleId = param1.readVarUhShort();
            if (this.titleId < 0) {
                throw new Error('Forbidden value (' + this.titleId + ') on element of HumanOptionTitle.titleId.');
            }
            this.titleParam = param1.readUTF();

        }
    }
    export class MonsterInGroupInformations extends MonsterInGroupLightInformations implements INetworkType {
        public static ID: number = 144;

        look: EntityLook;

        constructor() {
            this.look = new EntityLook();
            super();
        }

        public getTypeId(): number {
            return MonsterInGroupInformations.ID;
        }

        public reset(): void {
            this.look = new EntityLook();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MonsterInGroupInformations(param1);
        }

        public serializeAs_MonsterInGroupInformations(param1: ICustomDataOutput): void {
            super.serializeAs_MonsterInGroupLightInformations(param1);
            this.look.serializeAs_EntityLook(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MonsterInGroupInformations(param1);
        }

        public deserializeAs_MonsterInGroupInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.look = new EntityLook();
            this.look.deserialize(param1);

        }
    }
    export class MonsterInGroupLightInformations implements INetworkType {
        public static ID: number = 395;

        creatureGenericId: number;
        grade: number;

        constructor() {
            this.creatureGenericId = 0;
            this.grade = 0;
        }

        public getTypeId(): number {
            return MonsterInGroupLightInformations.ID;
        }

        public reset(): void {
            this.creatureGenericId = 0;
            this.grade = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MonsterInGroupLightInformations(param1);
        }

        public serializeAs_MonsterInGroupLightInformations(param1: ICustomDataOutput): void {
            param1.writeInt(this.creatureGenericId);
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element grade.');
            }
            param1.writeByte(this.grade);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MonsterInGroupLightInformations(param1);
        }

        public deserializeAs_MonsterInGroupLightInformations(param1: ICustomDataInput): void {
            this.creatureGenericId = param1.readInt();
            this.grade = param1.readByte();
            if (this.grade < 0) {
                throw new Error('Forbidden value (' + this.grade + ') on element of MonsterInGroupLightInformations.grade.');
            }

        }
    }
    export class ObjectItemInRolePlay implements INetworkType {
        public static ID: number = 198;

        cellId: number;
        objectGID: number;

        constructor() {
            this.cellId = 0;
            this.objectGID = 0;
        }

        public getTypeId(): number {
            return ObjectItemInRolePlay.ID;
        }

        public reset(): void {
            this.cellId = 0;
            this.objectGID = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemInRolePlay(param1);
        }

        public serializeAs_ObjectItemInRolePlay(param1: ICustomDataOutput): void {
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
            }
            param1.writeVarShort(this.cellId);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemInRolePlay(param1);
        }

        public deserializeAs_ObjectItemInRolePlay(param1: ICustomDataInput): void {
            this.cellId = param1.readVarUhShort();
            if (this.cellId < 0 || this.cellId > 559) {
                throw new Error('Forbidden value (' + this.cellId + ') on element of ObjectItemInRolePlay.cellId.');
            }
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemInRolePlay.objectGID.');
            }

        }
    }
    export class DecraftedItemStackInfo implements INetworkType {
        public static ID: number = 481;

        objectUID: number;
        bonusMin: number;
        bonusMax: number;
        runesId: number[];
        runesQty: number[];

        constructor() {
            this.objectUID = 0;
            this.bonusMin = 0;
            this.bonusMax = 0;
            this.runesId = [];
            this.runesQty = [];
        }

        public getTypeId(): number {
            return DecraftedItemStackInfo.ID;
        }

        public reset(): void {
            this.objectUID = 0;
            this.bonusMin = 0;
            this.bonusMax = 0;
            this.runesId = [];
            this.runesQty = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DecraftedItemStackInfo(param1);
        }

        public serializeAs_DecraftedItemStackInfo(param1: ICustomDataOutput): void {
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            param1.writeFloat(this.bonusMin);
            param1.writeFloat(this.bonusMax);
            param1.writeShort(this.runesId.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.runesId.length) {
                if (this.runesId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.runesId[_loc2_] + ') on element 4 (starting at 1) of runesId.');
                }
                param1.writeVarShort(this.runesId[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.runesQty.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.runesQty.length) {
                if (this.runesQty[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.runesQty[_loc3_] + ') on element 5 (starting at 1) of runesQty.');
                }
                param1.writeVarInt(this.runesQty[_loc3_]);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DecraftedItemStackInfo(param1);
        }

        public deserializeAs_DecraftedItemStackInfo(param1: ICustomDataInput): void {
            var _loc6_: number = 0;
            var _loc7_: number = 0;
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of DecraftedItemStackInfo.objectUID.');
            }
            this.bonusMin = param1.readFloat();
            this.bonusMax = param1.readFloat();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readVarUhShort();
                if (_loc6_ < 0) {
                    throw new Error('Forbidden value (' + _loc6_ + ') on elements of runesId.');
                }
                this.runesId.push(_loc6_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = param1.readVarUhInt();
                if (_loc7_ < 0) {
                    throw new Error('Forbidden value (' + _loc7_ + ') on elements of runesQty.');
                }
                this.runesQty.push(_loc7_);
                _loc5_++;
            }

        }
    }
    export class JobCrafterDirectoryEntryJobInfo implements INetworkType {
        public static ID: number = 195;

        jobId: number;
        jobLevel: number;
        free: boolean;
        minLevel: number;

        constructor() {
            this.jobId = 0;
            this.jobLevel = 0;
            this.free = false;
            this.minLevel = 0;
        }

        public getTypeId(): number {
            return JobCrafterDirectoryEntryJobInfo.ID;
        }

        public reset(): void {
            this.jobId = 0;
            this.jobLevel = 0;
            this.free = false;
            this.minLevel = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
        }

        public serializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_JobCrafterDirectoryEntryJobInfo(param1);
        }

        public deserializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataInput): void {
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

        }
    }
    export class JobCrafterDirectoryEntryPlayerInfo implements INetworkType {
        public static ID: number = 194;

        playerId: number;
        playerName: string;
        alignmentSide: number;
        breed: number;
        sex: boolean;
        isInWorkshop: boolean;
        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;
        status: PlayerStatus;

        constructor() {
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

        public getTypeId(): number {
            return JobCrafterDirectoryEntryPlayerInfo.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        }

        public serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        }

        public deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataInput): void {
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
            var _loc2_: number = param1.readUnsignedShort();
            this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);

        }
    }
    export class JobCrafterDirectoryListEntry implements INetworkType {
        public static ID: number = 196;

        playerInfo: JobCrafterDirectoryEntryPlayerInfo;
        jobInfo: JobCrafterDirectoryEntryJobInfo;

        constructor() {
            this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
            this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
        }

        public getTypeId(): number {
            return JobCrafterDirectoryListEntry.ID;
        }

        public reset(): void {
            this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
            this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_JobCrafterDirectoryListEntry(param1);
        }

        public serializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataOutput): void {
            this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
            this.jobInfo.serializeAs_JobCrafterDirectoryEntryJobInfo(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_JobCrafterDirectoryListEntry(param1);
        }

        public deserializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataInput): void {
            this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
            this.playerInfo.deserialize(param1);
            this.jobInfo = new JobCrafterDirectoryEntryJobInfo();
            this.jobInfo.deserialize(param1);

        }
    }
    export class JobCrafterDirectorySettings implements INetworkType {
        public static ID: number = 97;

        jobId: number;
        minLevel: number;
        free: boolean;

        constructor() {
            this.jobId = 0;
            this.minLevel = 0;
            this.free = false;
        }

        public getTypeId(): number {
            return JobCrafterDirectorySettings.ID;
        }

        public reset(): void {
            this.jobId = 0;
            this.minLevel = 0;
            this.free = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_JobCrafterDirectorySettings(param1);
        }

        public serializeAs_JobCrafterDirectorySettings(param1: ICustomDataOutput): void {
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
            }
            param1.writeByte(this.jobId);
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error('Forbidden value (' + this.minLevel + ') on element minLevel.');
            }
            param1.writeByte(this.minLevel);
            param1.writeBoolean(this.free);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_JobCrafterDirectorySettings(param1);
        }

        public deserializeAs_JobCrafterDirectorySettings(param1: ICustomDataInput): void {
            this.jobId = param1.readByte();
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectorySettings.jobId.');
            }
            this.minLevel = param1.readUnsignedByte();
            if (this.minLevel < 0 || this.minLevel > 255) {
                throw new Error('Forbidden value (' + this.minLevel + ') on element of JobCrafterDirectorySettings.minLevel.');
            }
            this.free = param1.readBoolean();

        }
    }
    export class JobDescription implements INetworkType {
        public static ID: number = 101;

        jobId: number;
        skills: SkillActionDescription[];

        constructor() {
            this.jobId = 0;
            this.skills = [];
        }

        public getTypeId(): number {
            return JobDescription.ID;
        }

        public reset(): void {
            this.jobId = 0;
            this.skills = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_JobDescription(param1);
        }

        public serializeAs_JobDescription(param1: ICustomDataOutput): void {
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
            }
            param1.writeByte(this.jobId);
            param1.writeShort(this.skills.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.skills.length) {
                param1.writeShort((this.skills[_loc2_]).getTypeId());
                (this.skills[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_JobDescription(param1);
        }

        public deserializeAs_JobDescription(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: SkillActionDescription = null;
            this.jobId = param1.readByte();
            if (this.jobId < 0) {
                throw new Error('Forbidden value (' + this.jobId + ') on element of JobDescription.jobId.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <SkillActionDescription>ProtocolTypeManager.getInstance(SkillActionDescription, _loc4_);
                _loc5_.deserialize(param1);
                this.skills.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class JobExperience implements INetworkType {
        public static ID: number = 98;

        jobId: number;
        jobLevel: number;
        jobXP: number;
        jobXpLevelFloor: number;
        jobXpNextLevelFloor: number;

        constructor() {
            this.jobId = 0;
            this.jobLevel = 0;
            this.jobXP = 0;
            this.jobXpLevelFloor = 0;
            this.jobXpNextLevelFloor = 0;
        }

        public getTypeId(): number {
            return JobExperience.ID;
        }

        public reset(): void {
            this.jobId = 0;
            this.jobLevel = 0;
            this.jobXP = 0;
            this.jobXpLevelFloor = 0;
            this.jobXpNextLevelFloor = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_JobExperience(param1);
        }

        public serializeAs_JobExperience(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_JobExperience(param1);
        }

        public deserializeAs_JobExperience(param1: ICustomDataInput): void {
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

        }
    }
    export class DungeonPartyFinderPlayer implements INetworkType {
        public static ID: number = 373;

        playerId: number;
        playerName: string;
        breed: number;
        sex: boolean;
        level: number;

        constructor() {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
            this.level = 0;
        }

        public getTypeId(): number {
            return DungeonPartyFinderPlayer.ID;
        }

        public reset(): void {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
            this.level = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_DungeonPartyFinderPlayer(param1);
        }

        public serializeAs_DungeonPartyFinderPlayer(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_DungeonPartyFinderPlayer(param1);
        }

        public deserializeAs_DungeonPartyFinderPlayer(param1: ICustomDataInput): void {
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

        }
    }
    export class NamedPartyTeam implements INetworkType {
        public static ID: number = 469;

        teamId: number;
        partyName: string;

        constructor() {
            this.teamId = 2;
            this.partyName = '';
        }

        public getTypeId(): number {
            return NamedPartyTeam.ID;
        }

        public reset(): void {
            this.teamId = 2;
            this.partyName = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NamedPartyTeam(param1);
        }

        public serializeAs_NamedPartyTeam(param1: ICustomDataOutput): void {
            param1.writeByte(this.teamId);
            param1.writeUTF(this.partyName);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NamedPartyTeam(param1);
        }

        public deserializeAs_NamedPartyTeam(param1: ICustomDataInput): void {
            this.teamId = param1.readByte();
            if (this.teamId < 0) {
                throw new Error('Forbidden value (' + this.teamId + ') on element of NamedPartyTeam.teamId.');
            }
            this.partyName = param1.readUTF();

        }
    }
    export class NamedPartyTeamWithOutcome implements INetworkType {
        public static ID: number = 470;

        team: NamedPartyTeam;
        outcome: number;

        constructor() {
            this.team = new NamedPartyTeam();
            this.outcome = 0;
        }

        public getTypeId(): number {
            return NamedPartyTeamWithOutcome.ID;
        }

        public reset(): void {
            this.team = new NamedPartyTeam();
            this.outcome = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_NamedPartyTeamWithOutcome(param1);
        }

        public serializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataOutput): void {
            this.team.serializeAs_NamedPartyTeam(param1);
            param1.writeVarShort(this.outcome);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_NamedPartyTeamWithOutcome(param1);
        }

        public deserializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataInput): void {
            this.team = new NamedPartyTeam();
            this.team.deserialize(param1);
            this.outcome = param1.readVarUhShort();
            if (this.outcome < 0) {
                throw new Error('Forbidden value (' + this.outcome + ') on element of NamedPartyTeamWithOutcome.outcome.');
            }

        }
    }
    export class PartyGuestInformations implements INetworkType {
        public static ID: number = 374;

        guestId: number;
        hostId: number;
        name: string;
        guestLook: EntityLook;
        breed: number;
        sex: boolean;
        status: PlayerStatus;
        companions: PartyCompanionBaseInformations[];

        constructor() {
            this.guestId = 0;
            this.hostId = 0;
            this.name = '';
            this.guestLook = new EntityLook();
            this.breed = 0;
            this.sex = false;
            this.status = new PlayerStatus();
            this.companions = [];
        }

        public getTypeId(): number {
            return PartyGuestInformations.ID;
        }

        public reset(): void {
            this.guestId = 0;
            this.hostId = 0;
            this.name = '';
            this.guestLook = new EntityLook();
            this.breed = 0;
            this.sex = false;
            this.status = new PlayerStatus();
            this.companions = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyGuestInformations(param1);
        }

        public serializeAs_PartyGuestInformations(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.companions.length) {
                (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyGuestInformations(param1);
        }

        public deserializeAs_PartyGuestInformations(param1: ICustomDataInput): void {
            var _loc5_: PartyCompanionBaseInformations = null;
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
            var _loc2_: number = param1.readUnsignedShort();
            this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
            var _loc3_: number = param1.readUnsignedShort();
            var _loc4_: number = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = new PartyCompanionBaseInformations();
                _loc5_.deserialize(param1);
                this.companions.push(_loc5_);
                _loc4_++;
            }

        }
    }
    export class PartyInvitationMemberInformations extends CharacterBaseInformations implements INetworkType {
        public static ID: number = 376;

        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;
        companions: PartyCompanionBaseInformations[];

        constructor() {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.companions = [];
            super();
        }

        public getTypeId(): number {
            return PartyInvitationMemberInformations.ID;
        }

        public reset(): void {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.companions = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyInvitationMemberInformations(param1);
        }

        public serializeAs_PartyInvitationMemberInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterBaseInformations(param1);
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
            var _loc2_: number = 0;
            while (_loc2_ < this.companions.length) {
                (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyInvitationMemberInformations(param1);
        }

        public deserializeAs_PartyInvitationMemberInformations(param1: ICustomDataInput): void {
            var _loc4_: PartyCompanionBaseInformations = null;
            super.deserialize(param1);
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new PartyCompanionBaseInformations();
                _loc4_.deserialize(param1);
                this.companions.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class PartyMemberArenaInformations extends PartyMemberInformations implements INetworkType {
        public static ID: number = 391;

        rank: number;

        constructor() {
            this.rank = 0;
            super();
        }

        public getTypeId(): number {
            return PartyMemberArenaInformations.ID;
        }

        public reset(): void {
            this.rank = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyMemberArenaInformations(param1);
        }

        public serializeAs_PartyMemberArenaInformations(param1: ICustomDataOutput): void {
            super.serializeAs_PartyMemberInformations(param1);
            if (this.rank < 0 || this.rank > 2300) {
                throw new Error('Forbidden value (' + this.rank + ') on element rank.');
            }
            param1.writeVarShort(this.rank);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyMemberArenaInformations(param1);
        }

        public deserializeAs_PartyMemberArenaInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.rank = param1.readVarUhShort();
            if (this.rank < 0 || this.rank > 2300) {
                throw new Error('Forbidden value (' + this.rank + ') on element of PartyMemberArenaInformations.rank.');
            }

        }
    }
    export class PartyMemberGeoPosition implements INetworkType {
        public static ID: number = 378;

        memberId: number;
        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;

        constructor() {
            this.memberId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }

        public getTypeId(): number {
            return PartyMemberGeoPosition.ID;
        }

        public reset(): void {
            this.memberId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyMemberGeoPosition(param1);
        }

        public serializeAs_PartyMemberGeoPosition(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyMemberGeoPosition(param1);
        }

        public deserializeAs_PartyMemberGeoPosition(param1: ICustomDataInput): void {
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

        }
    }
    export class PartyMemberInformations extends CharacterBaseInformations implements INetworkType {
        public static ID: number = 90;

        lifePoints: number;
        maxLifePoints: number;
        prospecting: number;
        regenRate: number;
        initiative: number;
        alignmentSide: number;
        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;
        status: PlayerStatus;
        companions: PartyCompanionMemberInformations[];

        constructor() {
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
            super();
        }

        public getTypeId(): number {
            return PartyMemberInformations.ID;
        }

        public reset(): void {
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
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyMemberInformations(param1);
        }

        public serializeAs_PartyMemberInformations(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterBaseInformations(param1);
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
            var _loc2_: number = 0;
            while (_loc2_ < this.companions.length) {
                (this.companions[_loc2_]).serializeAs_PartyCompanionMemberInformations(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyMemberInformations(param1);
        }

        public deserializeAs_PartyMemberInformations(param1: ICustomDataInput): void {
            var _loc5_: PartyCompanionMemberInformations = null;
            super.deserialize(param1);
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
            var _loc2_: number = param1.readUnsignedShort();
            this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);
            var _loc3_: number = param1.readUnsignedShort();
            var _loc4_: number = 0;
            while (_loc4_ < _loc3_) {
                _loc5_ = new PartyCompanionMemberInformations();
                _loc5_.deserialize(param1);
                this.companions.push(_loc5_);
                _loc4_++;
            }

        }
    }
    export class PartyCompanionBaseInformations implements INetworkType {
        public static ID: number = 453;

        indexId: number;
        companionGenericId: number;
        entityLook: EntityLook;

        constructor() {
            this.indexId = 0;
            this.companionGenericId = 0;
            this.entityLook = new EntityLook();
        }

        public getTypeId(): number {
            return PartyCompanionBaseInformations.ID;
        }

        public reset(): void {
            this.indexId = 0;
            this.companionGenericId = 0;
            this.entityLook = new EntityLook();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyCompanionBaseInformations(param1);
        }

        public serializeAs_PartyCompanionBaseInformations(param1: ICustomDataOutput): void {
            if (this.indexId < 0) {
                throw new Error('Forbidden value (' + this.indexId + ') on element indexId.');
            }
            param1.writeByte(this.indexId);
            if (this.companionGenericId < 0) {
                throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
            }
            param1.writeByte(this.companionGenericId);
            this.entityLook.serializeAs_EntityLook(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyCompanionBaseInformations(param1);
        }

        public deserializeAs_PartyCompanionBaseInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class PartyCompanionMemberInformations extends PartyCompanionBaseInformations implements INetworkType {
        public static ID: number = 452;

        initiative: number;
        lifePoints: number;
        maxLifePoints: number;
        prospecting: number;
        regenRate: number;

        constructor() {
            this.initiative = 0;
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.prospecting = 0;
            this.regenRate = 0;
            super();
        }

        public getTypeId(): number {
            return PartyCompanionMemberInformations.ID;
        }

        public reset(): void {
            this.initiative = 0;
            this.lifePoints = 0;
            this.maxLifePoints = 0;
            this.prospecting = 0;
            this.regenRate = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyCompanionMemberInformations(param1);
        }

        public serializeAs_PartyCompanionMemberInformations(param1: ICustomDataOutput): void {
            super.serializeAs_PartyCompanionBaseInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyCompanionMemberInformations(param1);
        }

        public deserializeAs_PartyCompanionMemberInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class GameRolePlayNpcQuestFlag implements INetworkType {
        public static ID: number = 384;

        questsToValidId: number[];
        questsToStartId: number[];

        constructor() {
            this.questsToValidId = [];
            this.questsToStartId = [];
        }

        public getTypeId(): number {
            return GameRolePlayNpcQuestFlag.ID;
        }

        public reset(): void {
            this.questsToValidId = [];
            this.questsToStartId = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GameRolePlayNpcQuestFlag(param1);
        }

        public serializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataOutput): void {
            param1.writeShort(this.questsToValidId.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.questsToValidId.length) {
                if (this.questsToValidId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.questsToValidId[_loc2_] + ') on element 1 (starting at 1) of questsToValidId.');
                }
                param1.writeVarShort(this.questsToValidId[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.questsToStartId.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.questsToStartId.length) {
                if (this.questsToStartId[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.questsToStartId[_loc3_] + ') on element 2 (starting at 1) of questsToStartId.');
                }
                param1.writeVarShort(this.questsToStartId[_loc3_]);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GameRolePlayNpcQuestFlag(param1);
        }

        public deserializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataInput): void {
            var _loc6_: number = 0;
            var _loc7_: number = 0;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readVarUhShort();
                if (_loc6_ < 0) {
                    throw new Error('Forbidden value (' + _loc6_ + ') on elements of questsToValidId.');
                }
                this.questsToValidId.push(_loc6_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc7_ = param1.readVarUhShort();
                if (_loc7_ < 0) {
                    throw new Error('Forbidden value (' + _loc7_ + ') on elements of questsToStartId.');
                }
                this.questsToStartId.push(_loc7_);
                _loc5_++;
            }

        }
    }
    export class QuestActiveDetailedInformations extends QuestActiveInformations implements INetworkType {
        public static ID: number = 382;

        stepId: number;
        objectives: QuestObjectiveInformations[];

        constructor() {
            this.stepId = 0;
            this.objectives = [];
            super();
        }

        public getTypeId(): number {
            return QuestActiveDetailedInformations.ID;
        }

        public reset(): void {
            this.stepId = 0;
            this.objectives = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_QuestActiveDetailedInformations(param1);
        }

        public serializeAs_QuestActiveDetailedInformations(param1: ICustomDataOutput): void {
            super.serializeAs_QuestActiveInformations(param1);
            if (this.stepId < 0) {
                throw new Error('Forbidden value (' + this.stepId + ') on element stepId.');
            }
            param1.writeVarShort(this.stepId);
            param1.writeShort(this.objectives.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.objectives.length) {
                param1.writeShort((this.objectives[_loc2_]).getTypeId());
                (this.objectives[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_QuestActiveDetailedInformations(param1);
        }

        public deserializeAs_QuestActiveDetailedInformations(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: QuestObjectiveInformations = null;
            super.deserialize(param1);
            this.stepId = param1.readVarUhShort();
            if (this.stepId < 0) {
                throw new Error('Forbidden value (' + this.stepId + ') on element of QuestActiveDetailedInformations.stepId.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <QuestObjectiveInformations>ProtocolTypeManager.getInstance(QuestObjectiveInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.objectives.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class QuestActiveInformations implements INetworkType {
        public static ID: number = 381;

        questId: number;

        constructor() {
            this.questId = 0;
        }

        public getTypeId(): number {
            return QuestActiveInformations.ID;
        }

        public reset(): void {
            this.questId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_QuestActiveInformations(param1);
        }

        public serializeAs_QuestActiveInformations(param1: ICustomDataOutput): void {
            if (this.questId < 0) {
                throw new Error('Forbidden value (' + this.questId + ') on element questId.');
            }
            param1.writeVarShort(this.questId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_QuestActiveInformations(param1);
        }

        public deserializeAs_QuestActiveInformations(param1: ICustomDataInput): void {
            this.questId = param1.readVarUhShort();
            if (this.questId < 0) {
                throw new Error('Forbidden value (' + this.questId + ') on element of QuestActiveInformations.questId.');
            }

        }
    }
    export class QuestObjectiveInformations implements INetworkType {
        public static ID: number = 385;

        objectiveId: number;
        objectiveStatus: boolean;
        dialogParams: string[];

        constructor() {
            this.objectiveId = 0;
            this.objectiveStatus = false;
            this.dialogParams = [];
        }

        public getTypeId(): number {
            return QuestObjectiveInformations.ID;
        }

        public reset(): void {
            this.objectiveId = 0;
            this.objectiveStatus = false;
            this.dialogParams = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_QuestObjectiveInformations(param1);
        }

        public serializeAs_QuestObjectiveInformations(param1: ICustomDataOutput): void {
            if (this.objectiveId < 0) {
                throw new Error('Forbidden value (' + this.objectiveId + ') on element objectiveId.');
            }
            param1.writeVarShort(this.objectiveId);
            param1.writeBoolean(this.objectiveStatus);
            param1.writeShort(this.dialogParams.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.dialogParams.length) {
                param1.writeUTF(this.dialogParams[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_QuestObjectiveInformations(param1);
        }

        public deserializeAs_QuestObjectiveInformations(param1: ICustomDataInput): void {
            var _loc4_: string = null;
            this.objectiveId = param1.readVarUhShort();
            if (this.objectiveId < 0) {
                throw new Error('Forbidden value (' + this.objectiveId + ') on element of QuestObjectiveInformations.objectiveId.');
            }
            this.objectiveStatus = param1.readBoolean();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUTF();
                this.dialogParams.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations implements INetworkType {
        public static ID: number = 386;

        curCompletion: number;
        maxCompletion: number;

        constructor() {
            this.curCompletion = 0;
            this.maxCompletion = 0;
            super();
        }

        public getTypeId(): number {
            return QuestObjectiveInformationsWithCompletion.ID;
        }

        public reset(): void {
            this.curCompletion = 0;
            this.maxCompletion = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_QuestObjectiveInformationsWithCompletion(param1);
        }

        public serializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataOutput): void {
            super.serializeAs_QuestObjectiveInformations(param1);
            if (this.curCompletion < 0) {
                throw new Error('Forbidden value (' + this.curCompletion + ') on element curCompletion.');
            }
            param1.writeVarShort(this.curCompletion);
            if (this.maxCompletion < 0) {
                throw new Error('Forbidden value (' + this.maxCompletion + ') on element maxCompletion.');
            }
            param1.writeVarShort(this.maxCompletion);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_QuestObjectiveInformationsWithCompletion(param1);
        }

        public deserializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.curCompletion = param1.readVarUhShort();
            if (this.curCompletion < 0) {
                throw new Error('Forbidden value (' + this.curCompletion + ') on element of QuestObjectiveInformationsWithCompletion.curCompletion.');
            }
            this.maxCompletion = param1.readVarUhShort();
            if (this.maxCompletion < 0) {
                throw new Error('Forbidden value (' + this.maxCompletion + ') on element of QuestObjectiveInformationsWithCompletion.maxCompletion.');
            }

        }
    }
    export class PortalInformation implements INetworkType {
        public static ID: number = 466;

        portalId: number;
        areaId: number;

        constructor() {
            this.portalId = 0;
            this.areaId = 0;
        }

        public getTypeId(): number {
            return PortalInformation.ID;
        }

        public reset(): void {
            this.portalId = 0;
            this.areaId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PortalInformation(param1);
        }

        public serializeAs_PortalInformation(param1: ICustomDataOutput): void {
            if (this.portalId < 0) {
                throw new Error('Forbidden value (' + this.portalId + ') on element portalId.');
            }
            param1.writeVarShort(this.portalId);
            param1.writeShort(this.areaId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PortalInformation(param1);
        }

        public deserializeAs_PortalInformation(param1: ICustomDataInput): void {
            this.portalId = param1.readVarUhShort();
            if (this.portalId < 0) {
                throw new Error('Forbidden value (' + this.portalId + ') on element of PortalInformation.portalId.');
            }
            this.areaId = param1.readShort();

        }
    }
    export class TreasureHuntFlag implements INetworkType {
        public static ID: number = 473;

        mapId: number;
        state: number;

        constructor() {
            this.mapId = 0;
            this.state = 0;
        }

        public getTypeId(): number {
            return TreasureHuntFlag.ID;
        }

        public reset(): void {
            this.mapId = 0;
            this.state = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TreasureHuntFlag(param1);
        }

        public serializeAs_TreasureHuntFlag(param1: ICustomDataOutput): void {
            param1.writeInt(this.mapId);
            param1.writeByte(this.state);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TreasureHuntFlag(param1);
        }

        public deserializeAs_TreasureHuntFlag(param1: ICustomDataInput): void {
            this.mapId = param1.readInt();
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of TreasureHuntFlag.state.');
            }

        }
    }
    export class TreasureHuntStep implements INetworkType {
        public static ID: number = 463;



        constructor() {

        }

        public getTypeId(): number {
            return TreasureHuntStep.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TreasureHuntStep(param1);
        }

        public serializeAs_TreasureHuntStep(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TreasureHuntStep(param1);
        }

        public deserializeAs_TreasureHuntStep(param1: ICustomDataInput): void {

        }
    }
    export class TreasureHuntStepDig extends TreasureHuntStep implements INetworkType {
        public static ID: number = 465;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return TreasureHuntStepDig.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TreasureHuntStepDig(param1);
        }

        public serializeAs_TreasureHuntStepDig(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TreasureHuntStepDig(param1);
        }

        public deserializeAs_TreasureHuntStepDig(param1: ICustomDataInput): void {

        }
    }
    export class TreasureHuntStepFight extends TreasureHuntStep implements INetworkType {
        public static ID: number = 462;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return TreasureHuntStepFight.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TreasureHuntStepFight(param1);
        }

        public serializeAs_TreasureHuntStepFight(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TreasureHuntStepFight(param1);
        }

        public deserializeAs_TreasureHuntStepFight(param1: ICustomDataInput): void {

        }
    }
    export class TreasureHuntStepFollowDirection extends TreasureHuntStep implements INetworkType {
        public static ID: number = 468;

        direction: number;
        mapCount: number;

        constructor() {
            this.direction = 1;
            this.mapCount = 0;
            super();
        }

        public getTypeId(): number {
            return TreasureHuntStepFollowDirection.ID;
        }

        public reset(): void {
            this.direction = 1;
            this.mapCount = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TreasureHuntStepFollowDirection(param1);
        }

        public serializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataOutput): void {
            super.serializeAs_TreasureHuntStep(param1);
            param1.writeByte(this.direction);
            if (this.mapCount < 0) {
                throw new Error('Forbidden value (' + this.mapCount + ') on element mapCount.');
            }
            param1.writeVarShort(this.mapCount);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TreasureHuntStepFollowDirection(param1);
        }

        public deserializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirection.direction.');
            }
            this.mapCount = param1.readVarUhShort();
            if (this.mapCount < 0) {
                throw new Error('Forbidden value (' + this.mapCount + ') on element of TreasureHuntStepFollowDirection.mapCount.');
            }

        }
    }
    export class TreasureHuntStepFollowDirectionToHint extends TreasureHuntStep implements INetworkType {
        public static ID: number = 472;

        direction: number;
        npcId: number;

        constructor() {
            this.direction = 1;
            this.npcId = 0;
            super();
        }

        public getTypeId(): number {
            return TreasureHuntStepFollowDirectionToHint.ID;
        }

        public reset(): void {
            this.direction = 1;
            this.npcId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TreasureHuntStepFollowDirectionToHint(param1);
        }

        public serializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataOutput): void {
            super.serializeAs_TreasureHuntStep(param1);
            param1.writeByte(this.direction);
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
            }
            param1.writeVarShort(this.npcId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TreasureHuntStepFollowDirectionToHint(param1);
        }

        public deserializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToHint.direction.');
            }
            this.npcId = param1.readVarUhShort();
            if (this.npcId < 0) {
                throw new Error('Forbidden value (' + this.npcId + ') on element of TreasureHuntStepFollowDirectionToHint.npcId.');
            }

        }
    }
    export class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep implements INetworkType {
        public static ID: number = 461;

        direction: number;
        poiLabelId: number;

        constructor() {
            this.direction = 1;
            this.poiLabelId = 0;
            super();
        }

        public getTypeId(): number {
            return TreasureHuntStepFollowDirectionToPOI.ID;
        }

        public reset(): void {
            this.direction = 1;
            this.poiLabelId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
        }

        public serializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataOutput): void {
            super.serializeAs_TreasureHuntStep(param1);
            param1.writeByte(this.direction);
            if (this.poiLabelId < 0) {
                throw new Error('Forbidden value (' + this.poiLabelId + ') on element poiLabelId.');
            }
            param1.writeVarShort(this.poiLabelId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
        }

        public deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.direction = param1.readByte();
            if (this.direction < 0) {
                throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToPOI.direction.');
            }
            this.poiLabelId = param1.readVarUhShort();
            if (this.poiLabelId < 0) {
                throw new Error('Forbidden value (' + this.poiLabelId + ') on element of TreasureHuntStepFollowDirectionToPOI.poiLabelId.');
            }

        }
    }
    export class BidExchangerObjectInfo implements INetworkType {
        public static ID: number = 122;

        objectUID: number;
        effects: ObjectEffect[];
        prices: number[];

        constructor() {
            this.objectUID = 0;
            this.effects = [];
            this.prices = [];
        }

        public getTypeId(): number {
            return BidExchangerObjectInfo.ID;
        }

        public reset(): void {
            this.objectUID = 0;
            this.effects = [];
            this.prices = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_BidExchangerObjectInfo(param1);
        }

        public serializeAs_BidExchangerObjectInfo(param1: ICustomDataOutput): void {
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            param1.writeShort(this.effects.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.prices.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.prices.length) {
                if (this.prices[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.prices[_loc3_] + ') on element 3 (starting at 1) of prices.');
                }
                param1.writeInt(this.prices[_loc3_]);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_BidExchangerObjectInfo(param1);
        }

        public deserializeAs_BidExchangerObjectInfo(param1: ICustomDataInput): void {
            var _loc6_: number = 0;
            var _loc7_: ObjectEffect = null;
            var _loc8_: number = 0;
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of BidExchangerObjectInfo.objectUID.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc6_);
                _loc7_.deserialize(param1);
                this.effects.push(_loc7_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readInt();
                if (_loc8_ < 0) {
                    throw new Error('Forbidden value (' + _loc8_ + ') on elements of prices.');
                }
                this.prices.push(_loc8_);
                _loc5_++;
            }

        }
    }
    export class GoldItem extends Item implements INetworkType {
        public static ID: number = 123;

        sum: number;

        constructor() {
            this.sum = 0;
            super();
        }

        public getTypeId(): number {
            return GoldItem.ID;
        }

        public reset(): void {
            this.sum = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GoldItem(param1);
        }

        public serializeAs_GoldItem(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.sum < 0) {
                throw new Error('Forbidden value (' + this.sum + ') on element sum.');
            }
            param1.writeVarInt(this.sum);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GoldItem(param1);
        }

        public deserializeAs_GoldItem(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.sum = param1.readVarUhInt();
            if (this.sum < 0) {
                throw new Error('Forbidden value (' + this.sum + ') on element of GoldItem.sum.');
            }

        }
    }
    export class Item implements INetworkType {
        public static ID: number = 7;



        constructor() {

        }

        public getTypeId(): number {
            return Item.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_Item(param1);
        }

        public serializeAs_Item(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_Item(param1);
        }

        public deserializeAs_Item(param1: ICustomDataInput): void {

        }
    }
    export class ObjectItem extends Item implements INetworkType {
        public static ID: number = 37;

        position: number;
        objectGID: number;
        effects: ObjectEffect[];
        objectUID: number;
        quantity: number;

        constructor() {
            this.position = 63;
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItem.ID;
        }

        public reset(): void {
            this.position = 63;
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItem(param1);
        }

        public serializeAs_ObjectItem(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            param1.writeByte(this.position);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItem(param1);
        }

        public deserializeAs_ObjectItem(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: ObjectEffect = null;
            super.deserialize(param1);
            this.position = param1.readUnsignedByte();
            if (this.position < 0 || this.position > 255) {
                throw new Error('Forbidden value (' + this.position + ') on element of ObjectItem.position.');
            }
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItem.objectGID.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
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

        }
    }
    export class ObjectItemGenericQuantity extends Item implements INetworkType {
        public static ID: number = 483;

        objectGID: number;
        quantity: number;

        constructor() {
            this.objectGID = 0;
            this.quantity = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItemGenericQuantity.ID;
        }

        public reset(): void {
            this.objectGID = 0;
            this.quantity = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemGenericQuantity(param1);
        }

        public serializeAs_ObjectItemGenericQuantity(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemGenericQuantity(param1);
        }

        public deserializeAs_ObjectItemGenericQuantity(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemGenericQuantity.objectGID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemGenericQuantity.quantity.');
            }

        }
    }
    export class ObjectItemInformationWithQuantity extends ObjectItemMinimalInformation implements INetworkType {
        public static ID: number = 387;

        quantity: number;

        constructor() {
            this.quantity = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItemInformationWithQuantity.ID;
        }

        public reset(): void {
            this.quantity = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemInformationWithQuantity(param1);
        }

        public serializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectItemMinimalInformation(param1);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemInformationWithQuantity(param1);
        }

        public deserializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemInformationWithQuantity.quantity.');
            }

        }
    }
    export class ObjectItemMinimalInformation extends Item implements INetworkType {
        public static ID: number = 124;

        objectGID: number;
        effects: ObjectEffect[];

        constructor() {
            this.objectGID = 0;
            this.effects = [];
            super();
        }

        public getTypeId(): number {
            return ObjectItemMinimalInformation.ID;
        }

        public reset(): void {
            this.objectGID = 0;
            this.effects = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemMinimalInformation(param1);
        }

        public serializeAs_ObjectItemMinimalInformation(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.effects.length) {
                param1.writeShort((this.effects[_loc2_]).getTypeId());
                (this.effects[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemMinimalInformation(param1);
        }

        public deserializeAs_ObjectItemMinimalInformation(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: ObjectEffect = null;
            super.deserialize(param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemMinimalInformation.objectGID.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
                _loc5_.deserialize(param1);
                this.effects.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class ObjectItemNotInContainer extends Item implements INetworkType {
        public static ID: number = 134;

        objectGID: number;
        effects: ObjectEffect[];
        objectUID: number;
        quantity: number;

        constructor() {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItemNotInContainer.ID;
        }

        public reset(): void {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemNotInContainer(param1);
        }

        public serializeAs_ObjectItemNotInContainer(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemNotInContainer(param1);
        }

        public deserializeAs_ObjectItemNotInContainer(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: ObjectEffect = null;
            super.deserialize(param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemNotInContainer.objectGID.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
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

        }
    }
    export class ObjectItemQuantity extends Item implements INetworkType {
        public static ID: number = 119;

        objectUID: number;
        quantity: number;

        constructor() {
            this.objectUID = 0;
            this.quantity = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItemQuantity.ID;
        }

        public reset(): void {
            this.objectUID = 0;
            this.quantity = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemQuantity(param1);
        }

        public serializeAs_ObjectItemQuantity(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
            }
            param1.writeVarInt(this.objectUID);
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
            }
            param1.writeVarInt(this.quantity);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemQuantity(param1);
        }

        public deserializeAs_ObjectItemQuantity(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.objectUID = param1.readVarUhInt();
            if (this.objectUID < 0) {
                throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemQuantity.objectUID.');
            }
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemQuantity.quantity.');
            }

        }
    }
    export class ObjectItemToSell extends Item implements INetworkType {
        public static ID: number = 120;

        objectGID: number;
        effects: ObjectEffect[];
        objectUID: number;
        quantity: number;
        objectPrice: number;

        constructor() {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItemToSell.ID;
        }

        public reset(): void {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemToSell(param1);
        }

        public serializeAs_ObjectItemToSell(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemToSell(param1);
        }

        public deserializeAs_ObjectItemToSell(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: ObjectEffect = null;
            super.deserialize(param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemToSell.objectGID.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
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

        }
    }
    export class ObjectItemToSellInBid extends ObjectItemToSell implements INetworkType {
        public static ID: number = 164;

        unsoldDelay: number;

        constructor() {
            this.unsoldDelay = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItemToSellInBid.ID;
        }

        public reset(): void {
            this.unsoldDelay = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemToSellInBid(param1);
        }

        public serializeAs_ObjectItemToSellInBid(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectItemToSell(param1);
            if (this.unsoldDelay < 0) {
                throw new Error('Forbidden value (' + this.unsoldDelay + ') on element unsoldDelay.');
            }
            param1.writeInt(this.unsoldDelay);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemToSellInBid(param1);
        }

        public deserializeAs_ObjectItemToSellInBid(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.unsoldDelay = param1.readInt();
            if (this.unsoldDelay < 0) {
                throw new Error('Forbidden value (' + this.unsoldDelay + ') on element of ObjectItemToSellInBid.unsoldDelay.');
            }

        }
    }
    export class ObjectItemToSellInHumanVendorShop extends Item implements INetworkType {
        public static ID: number = 359;

        objectGID: number;
        effects: ObjectEffect[];
        objectUID: number;
        quantity: number;
        objectPrice: number;
        publicPrice: number;

        constructor() {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
            this.publicPrice = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectItemToSellInHumanVendorShop.ID;
        }

        public reset(): void {
            this.objectGID = 0;
            this.effects = [];
            this.objectUID = 0;
            this.quantity = 0;
            this.objectPrice = 0;
            this.publicPrice = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemToSellInHumanVendorShop(param1);
        }

        public serializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
            }
            param1.writeVarShort(this.objectGID);
            param1.writeShort(this.effects.length);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemToSellInHumanVendorShop(param1);
        }

        public deserializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: ObjectEffect = null;
            super.deserialize(param1);
            this.objectGID = param1.readVarUhShort();
            if (this.objectGID < 0) {
                throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemToSellInHumanVendorShop.objectGID.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
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

        }
    }
    export class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation implements INetworkType {
        public static ID: number = 352;

        objectPrice: number;
        buyCriterion: string;

        constructor() {
            this.objectPrice = 0;
            this.buyCriterion = '';
            super();
        }

        public getTypeId(): number {
            return ObjectItemToSellInNpcShop.ID;
        }

        public reset(): void {
            this.objectPrice = 0;
            this.buyCriterion = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectItemToSellInNpcShop(param1);
        }

        public serializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectItemMinimalInformation(param1);
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
            }
            param1.writeVarInt(this.objectPrice);
            param1.writeUTF(this.buyCriterion);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectItemToSellInNpcShop(param1);
        }

        public deserializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.objectPrice = param1.readVarUhInt();
            if (this.objectPrice < 0) {
                throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSellInNpcShop.objectPrice.');
            }
            this.buyCriterion = param1.readUTF();

        }
    }
    export class SellerBuyerDescriptor implements INetworkType {
        public static ID: number = 121;

        quantities: number[];
        types: number[];
        taxPercentage: number;
        taxModificationPercentage: number;
        maxItemLevel: number;
        maxItemPerAccount: number;
        npcContextualId: number;
        unsoldDelay: number;

        constructor() {
            this.quantities = [];
            this.types = [];
            this.taxPercentage = 0;
            this.taxModificationPercentage = 0;
            this.maxItemLevel = 0;
            this.maxItemPerAccount = 0;
            this.npcContextualId = 0;
            this.unsoldDelay = 0;
        }

        public getTypeId(): number {
            return SellerBuyerDescriptor.ID;
        }

        public reset(): void {
            this.quantities = [];
            this.types = [];
            this.taxPercentage = 0;
            this.taxModificationPercentage = 0;
            this.maxItemLevel = 0;
            this.maxItemPerAccount = 0;
            this.npcContextualId = 0;
            this.unsoldDelay = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SellerBuyerDescriptor(param1);
        }

        public serializeAs_SellerBuyerDescriptor(param1: ICustomDataOutput): void {
            param1.writeShort(this.quantities.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.quantities.length) {
                if (this.quantities[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.quantities[_loc2_] + ') on element 1 (starting at 1) of quantities.');
                }
                param1.writeVarInt(this.quantities[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.types.length);
            var _loc3_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SellerBuyerDescriptor(param1);
        }

        public deserializeAs_SellerBuyerDescriptor(param1: ICustomDataInput): void {
            var _loc6_: number = 0;
            var _loc7_: number = 0;
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readVarUhInt();
                if (_loc6_ < 0) {
                    throw new Error('Forbidden value (' + _loc6_ + ') on elements of quantities.');
                }
                this.quantities.push(_loc6_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
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

        }
    }
    export class SpellItem extends Item implements INetworkType {
        public static ID: number = 49;

        position: number;
        spellId: number;
        spellLevel: number;

        constructor() {
            this.position = 0;
            this.spellId = 0;
            this.spellLevel = 0;
            super();
        }

        public getTypeId(): number {
            return SpellItem.ID;
        }

        public reset(): void {
            this.position = 0;
            this.spellId = 0;
            this.spellLevel = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SpellItem(param1);
        }

        public serializeAs_SpellItem(param1: ICustomDataOutput): void {
            super.serializeAs_Item(param1);
            if (this.position < 63 || this.position > 255) {
                throw new Error('Forbidden value (' + this.position + ') on element position.');
            }
            param1.writeByte(this.position);
            param1.writeInt(this.spellId);
            if (this.spellLevel < 1 || this.spellLevel > 6) {
                throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
            }
            param1.writeByte(this.spellLevel);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SpellItem(param1);
        }

        public deserializeAs_SpellItem(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.position = param1.readUnsignedByte();
            if (this.position < 63 || this.position > 255) {
                throw new Error('Forbidden value (' + this.position + ') on element of SpellItem.position.');
            }
            this.spellId = param1.readInt();
            this.spellLevel = param1.readByte();
            if (this.spellLevel < 1 || this.spellLevel > 6) {
                throw new Error('Forbidden value (' + this.spellLevel + ') on element of SpellItem.spellLevel.');
            }

        }
    }
    export class ObjectEffect implements INetworkType {
        public static ID: number = 76;

        actionId: number;

        constructor() {
            this.actionId = 0;
        }

        public getTypeId(): number {
            return ObjectEffect.ID;
        }

        public reset(): void {
            this.actionId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffect(param1);
        }

        public serializeAs_ObjectEffect(param1: ICustomDataOutput): void {
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
            }
            param1.writeVarShort(this.actionId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffect(param1);
        }

        public deserializeAs_ObjectEffect(param1: ICustomDataInput): void {
            this.actionId = param1.readVarUhShort();
            if (this.actionId < 0) {
                throw new Error('Forbidden value (' + this.actionId + ') on element of ObjectEffect.actionId.');
            }

        }
    }
    export class ObjectEffectCreature extends ObjectEffect implements INetworkType {
        public static ID: number = 71;

        monsterFamilyId: number;

        constructor() {
            this.monsterFamilyId = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectCreature.ID;
        }

        public reset(): void {
            this.monsterFamilyId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectCreature(param1);
        }

        public serializeAs_ObjectEffectCreature(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
            if (this.monsterFamilyId < 0) {
                throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element monsterFamilyId.');
            }
            param1.writeVarShort(this.monsterFamilyId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectCreature(param1);
        }

        public deserializeAs_ObjectEffectCreature(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.monsterFamilyId = param1.readVarUhShort();
            if (this.monsterFamilyId < 0) {
                throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element of ObjectEffectCreature.monsterFamilyId.');
            }

        }
    }
    export class ObjectEffectDate extends ObjectEffect implements INetworkType {
        public static ID: number = 72;

        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;

        constructor() {
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectDate.ID;
        }

        public reset(): void {
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectDate(param1);
        }

        public serializeAs_ObjectEffectDate(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectDate(param1);
        }

        public deserializeAs_ObjectEffectDate(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class ObjectEffectDice extends ObjectEffect implements INetworkType {
        public static ID: number = 73;

        diceNum: number;
        diceSide: number;
        diceConst: number;

        constructor() {
            this.diceNum = 0;
            this.diceSide = 0;
            this.diceConst = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectDice.ID;
        }

        public reset(): void {
            this.diceNum = 0;
            this.diceSide = 0;
            this.diceConst = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectDice(param1);
        }

        public serializeAs_ObjectEffectDice(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectDice(param1);
        }

        public deserializeAs_ObjectEffectDice(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class ObjectEffectDuration extends ObjectEffect implements INetworkType {
        public static ID: number = 75;

        days: number;
        hours: number;
        minutes: number;

        constructor() {
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectDuration.ID;
        }

        public reset(): void {
            this.days = 0;
            this.hours = 0;
            this.minutes = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectDuration(param1);
        }

        public serializeAs_ObjectEffectDuration(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectDuration(param1);
        }

        public deserializeAs_ObjectEffectDuration(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class ObjectEffectInteger extends ObjectEffect implements INetworkType {
        public static ID: number = 70;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectInteger.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectInteger(param1);
        }

        public serializeAs_ObjectEffectInteger(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element value.');
            }
            param1.writeVarShort(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectInteger(param1);
        }

        public deserializeAs_ObjectEffectInteger(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readVarUhShort();
            if (this.value < 0) {
                throw new Error('Forbidden value (' + this.value + ') on element of ObjectEffectInteger.value.');
            }

        }
    }
    export class ObjectEffectLadder extends ObjectEffectCreature implements INetworkType {
        public static ID: number = 81;

        monsterCount: number;

        constructor() {
            this.monsterCount = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectLadder.ID;
        }

        public reset(): void {
            this.monsterCount = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectLadder(param1);
        }

        public serializeAs_ObjectEffectLadder(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffectCreature(param1);
            if (this.monsterCount < 0) {
                throw new Error('Forbidden value (' + this.monsterCount + ') on element monsterCount.');
            }
            param1.writeVarInt(this.monsterCount);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectLadder(param1);
        }

        public deserializeAs_ObjectEffectLadder(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.monsterCount = param1.readVarUhInt();
            if (this.monsterCount < 0) {
                throw new Error('Forbidden value (' + this.monsterCount + ') on element of ObjectEffectLadder.monsterCount.');
            }

        }
    }
    export class ObjectEffectMinMax extends ObjectEffect implements INetworkType {
        public static ID: number = 82;

        min: number;
        max: number;

        constructor() {
            this.min = 0;
            this.max = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectMinMax.ID;
        }

        public reset(): void {
            this.min = 0;
            this.max = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectMinMax(param1);
        }

        public serializeAs_ObjectEffectMinMax(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element min.');
            }
            param1.writeVarInt(this.min);
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element max.');
            }
            param1.writeVarInt(this.max);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectMinMax(param1);
        }

        public deserializeAs_ObjectEffectMinMax(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.min = param1.readVarUhInt();
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element of ObjectEffectMinMax.min.');
            }
            this.max = param1.readVarUhInt();
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element of ObjectEffectMinMax.max.');
            }

        }
    }
    export class ObjectEffectMount extends ObjectEffect implements INetworkType {
        public static ID: number = 179;

        mountId: number;
        date: number;
        modelId: number;

        constructor() {
            this.mountId = 0;
            this.date = 0;
            this.modelId = 0;
            super();
        }

        public getTypeId(): number {
            return ObjectEffectMount.ID;
        }

        public reset(): void {
            this.mountId = 0;
            this.date = 0;
            this.modelId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectMount(param1);
        }

        public serializeAs_ObjectEffectMount(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectMount(param1);
        }

        public deserializeAs_ObjectEffectMount(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class ObjectEffectString extends ObjectEffect implements INetworkType {
        public static ID: number = 74;

        value: string;

        constructor() {
            this.value = '';
            super();
        }

        public getTypeId(): number {
            return ObjectEffectString.ID;
        }

        public reset(): void {
            this.value = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ObjectEffectString(param1);
        }

        public serializeAs_ObjectEffectString(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectEffect(param1);
            param1.writeUTF(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ObjectEffectString(param1);
        }

        public deserializeAs_ObjectEffectString(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readUTF();

        }
    }
    export class ProtectedEntityWaitingForHelpInfo implements INetworkType {
        public static ID: number = 186;

        timeLeftBeforeFight: number;
        waitTimeForPlacement: number;
        nbPositionForDefensors: number;

        constructor() {
            this.timeLeftBeforeFight = 0;
            this.waitTimeForPlacement = 0;
            this.nbPositionForDefensors = 0;
        }

        public getTypeId(): number {
            return ProtectedEntityWaitingForHelpInfo.ID;
        }

        public reset(): void {
            this.timeLeftBeforeFight = 0;
            this.waitTimeForPlacement = 0;
            this.nbPositionForDefensors = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
        }

        public serializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataOutput): void {
            param1.writeInt(this.timeLeftBeforeFight);
            param1.writeInt(this.waitTimeForPlacement);
            if (this.nbPositionForDefensors < 0) {
                throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element nbPositionForDefensors.');
            }
            param1.writeByte(this.nbPositionForDefensors);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ProtectedEntityWaitingForHelpInfo(param1);
        }

        public deserializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataInput): void {
            this.timeLeftBeforeFight = param1.readInt();
            this.waitTimeForPlacement = param1.readInt();
            this.nbPositionForDefensors = param1.readByte();
            if (this.nbPositionForDefensors < 0) {
                throw new Error('Forbidden value (' + this.nbPositionForDefensors + ') on element of ProtectedEntityWaitingForHelpInfo.nbPositionForDefensors.');
            }

        }
    }
    export class AbstractContactInformations implements INetworkType {
        public static ID: number = 380;

        accountId: number;
        accountName: string;

        constructor() {
            this.accountId = 0;
            this.accountName = '';
        }

        public getTypeId(): number {
            return AbstractContactInformations.ID;
        }

        public reset(): void {
            this.accountId = 0;
            this.accountName = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AbstractContactInformations(param1);
        }

        public serializeAs_AbstractContactInformations(param1: ICustomDataOutput): void {
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
            }
            param1.writeInt(this.accountId);
            param1.writeUTF(this.accountName);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AbstractContactInformations(param1);
        }

        public deserializeAs_AbstractContactInformations(param1: ICustomDataInput): void {
            this.accountId = param1.readInt();
            if (this.accountId < 0) {
                throw new Error('Forbidden value (' + this.accountId + ') on element of AbstractContactInformations.accountId.');
            }
            this.accountName = param1.readUTF();

        }
    }
    export class FriendInformations extends AbstractContactInformations implements INetworkType {
        public static ID: number = 78;

        playerState: number;
        lastConnection: number;
        achievementPoints: number;

        constructor() {
            this.playerState = 99;
            this.lastConnection = 0;
            this.achievementPoints = 0;
            super();
        }

        public getTypeId(): number {
            return FriendInformations.ID;
        }

        public reset(): void {
            this.playerState = 99;
            this.lastConnection = 0;
            this.achievementPoints = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FriendInformations(param1);
        }

        public serializeAs_FriendInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractContactInformations(param1);
            param1.writeByte(this.playerState);
            if (this.lastConnection < 0) {
                throw new Error('Forbidden value (' + this.lastConnection + ') on element lastConnection.');
            }
            param1.writeVarShort(this.lastConnection);
            param1.writeInt(this.achievementPoints);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FriendInformations(param1);
        }

        public deserializeAs_FriendInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.playerState = param1.readByte();
            if (this.playerState < 0) {
                throw new Error('Forbidden value (' + this.playerState + ') on element of FriendInformations.playerState.');
            }
            this.lastConnection = param1.readVarUhShort();
            if (this.lastConnection < 0) {
                throw new Error('Forbidden value (' + this.lastConnection + ') on element of FriendInformations.lastConnection.');
            }
            this.achievementPoints = param1.readInt();

        }
    }
    export class FriendOnlineInformations extends FriendInformations implements INetworkType {
        public static ID: number = 92;

        playerId: number;
        playerName: string;
        level: number;
        alignmentSide: number;
        breed: number;
        sex: boolean;
        guildInfo: BasicGuildInformations;
        moodSmileyId: number;
        status: PlayerStatus;

        constructor() {
            this.playerId = 0;
            this.playerName = '';
            this.level = 0;
            this.alignmentSide = 0;
            this.breed = 0;
            this.sex = false;
            this.guildInfo = new BasicGuildInformations();
            this.moodSmileyId = 0;
            this.status = new PlayerStatus();
            super();
        }

        public getTypeId(): number {
            return FriendOnlineInformations.ID;
        }

        public reset(): void {
            this.playerId = 0;
            this.playerName = '';
            this.level = 0;
            this.alignmentSide = 0;
            this.breed = 0;
            this.sex = false;
            this.guildInfo = new BasicGuildInformations();
            this.moodSmileyId = 0;
            this.status = new PlayerStatus();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FriendOnlineInformations(param1);
        }

        public serializeAs_FriendOnlineInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FriendInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FriendOnlineInformations(param1);
        }

        public deserializeAs_FriendOnlineInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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
            var _loc2_: number = param1.readUnsignedShort();
            this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);

        }
    }
    export class FriendSpouseInformations implements INetworkType {
        public static ID: number = 77;

        spouseAccountId: number;
        spouseId: number;
        spouseName: string;
        spouseLevel: number;
        breed: number;
        sex: number;
        spouseEntityLook: EntityLook;
        guildInfo: BasicGuildInformations;
        alignmentSide: number;

        constructor() {
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

        public getTypeId(): number {
            return FriendSpouseInformations.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FriendSpouseInformations(param1);
        }

        public serializeAs_FriendSpouseInformations(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FriendSpouseInformations(param1);
        }

        public deserializeAs_FriendSpouseInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class FriendSpouseOnlineInformations extends FriendSpouseInformations implements INetworkType {
        public static ID: number = 93;

        mapId: number;
        subAreaId: number;
        inFight: boolean;
        followSpouse: boolean;

        constructor() {
            this.mapId = 0;
            this.subAreaId = 0;
            this.inFight = false;
            this.followSpouse = false;
            super();
        }

        public getTypeId(): number {
            return FriendSpouseOnlineInformations.ID;
        }

        public reset(): void {
            this.mapId = 0;
            this.subAreaId = 0;
            this.inFight = false;
            this.followSpouse = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_FriendSpouseOnlineInformations(param1);
        }

        public serializeAs_FriendSpouseOnlineInformations(param1: ICustomDataOutput): void {
            super.serializeAs_FriendSpouseInformations(param1);
            var _loc2_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_FriendSpouseOnlineInformations(param1);
        }

        public deserializeAs_FriendSpouseOnlineInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            var _loc2_: number = param1.readByte();
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

        }
    }
    export class IgnoredInformations extends AbstractContactInformations implements INetworkType {
        public static ID: number = 106;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return IgnoredInformations.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IgnoredInformations(param1);
        }

        public serializeAs_IgnoredInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AbstractContactInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IgnoredInformations(param1);
        }

        public deserializeAs_IgnoredInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class IgnoredOnlineInformations extends IgnoredInformations implements INetworkType {
        public static ID: number = 105;

        playerId: number;
        playerName: string;
        breed: number;
        sex: boolean;

        constructor() {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
            super();
        }

        public getTypeId(): number {
            return IgnoredOnlineInformations.ID;
        }

        public reset(): void {
            this.playerId = 0;
            this.playerName = '';
            this.breed = 0;
            this.sex = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IgnoredOnlineInformations(param1);
        }

        public serializeAs_IgnoredOnlineInformations(param1: ICustomDataOutput): void {
            super.serializeAs_IgnoredInformations(param1);
            if (this.playerId < 0) {
                throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
            }
            param1.writeVarInt(this.playerId);
            param1.writeUTF(this.playerName);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IgnoredOnlineInformations(param1);
        }

        public deserializeAs_IgnoredOnlineInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class GuildEmblem implements INetworkType {
        public static ID: number = 87;

        symbolShape: number;
        symbolColor: number;
        backgroundShape: number;
        backgroundColor: number;

        constructor() {
            this.symbolShape = 0;
            this.symbolColor = 0;
            this.backgroundShape = 0;
            this.backgroundColor = 0;
        }

        public getTypeId(): number {
            return GuildEmblem.ID;
        }

        public reset(): void {
            this.symbolShape = 0;
            this.symbolColor = 0;
            this.backgroundShape = 0;
            this.backgroundColor = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildEmblem(param1);
        }

        public serializeAs_GuildEmblem(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildEmblem(param1);
        }

        public deserializeAs_GuildEmblem(param1: ICustomDataInput): void {
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

        }
    }
    export class GuildMember extends CharacterMinimalInformations implements INetworkType {
        public static ID: number = 88;

        breed: number;
        sex: boolean;
        rank: number;
        givenExperience: number;
        experienceGivenPercent: number;
        rights: number;
        connected: number;
        alignmentSide: number;
        hoursSinceLastConnection: number;
        moodSmileyId: number;
        accountId: number;
        achievementPoints: number;
        status: PlayerStatus;

        constructor() {
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
            super();
        }

        public getTypeId(): number {
            return GuildMember.ID;
        }

        public reset(): void {
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
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildMember(param1);
        }

        public serializeAs_GuildMember(param1: ICustomDataOutput): void {
            super.serializeAs_CharacterMinimalInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildMember(param1);
        }

        public deserializeAs_GuildMember(param1: ICustomDataInput): void {
            super.deserialize(param1);
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
            var _loc2_: number = param1.readUnsignedShort();
            this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
            this.status.deserialize(param1);

        }
    }
    export class AdditionalTaxCollectorInformations implements INetworkType {
        public static ID: number = 165;

        collectorCallerName: string;
        date: number;

        constructor() {
            this.collectorCallerName = '';
            this.date = 0;
        }

        public getTypeId(): number {
            return AdditionalTaxCollectorInformations.ID;
        }

        public reset(): void {
            this.collectorCallerName = '';
            this.date = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AdditionalTaxCollectorInformations(param1);
        }

        public serializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataOutput): void {
            param1.writeUTF(this.collectorCallerName);
            if (this.date < 0) {
                throw new Error('Forbidden value (' + this.date + ') on element date.');
            }
            param1.writeInt(this.date);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AdditionalTaxCollectorInformations(param1);
        }

        public deserializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataInput): void {
            this.collectorCallerName = param1.readUTF();
            this.date = param1.readInt();
            if (this.date < 0) {
                throw new Error('Forbidden value (' + this.date + ') on element of AdditionalTaxCollectorInformations.date.');
            }

        }
    }
    export class TaxCollectorBasicInformations implements INetworkType {
        public static ID: number = 96;

        firstNameId: number;
        lastNameId: number;
        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;

        constructor() {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }

        public getTypeId(): number {
            return TaxCollectorBasicInformations.ID;
        }

        public reset(): void {
            this.firstNameId = 0;
            this.lastNameId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorBasicInformations(param1);
        }

        public serializeAs_TaxCollectorBasicInformations(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorBasicInformations(param1);
        }

        public deserializeAs_TaxCollectorBasicInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class TaxCollectorComplementaryInformations implements INetworkType {
        public static ID: number = 448;



        constructor() {

        }

        public getTypeId(): number {
            return TaxCollectorComplementaryInformations.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorComplementaryInformations(param1);
        }

        public serializeAs_TaxCollectorComplementaryInformations(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorComplementaryInformations(param1);
        }

        public deserializeAs_TaxCollectorComplementaryInformations(param1: ICustomDataInput): void {

        }
    }
    export class TaxCollectorFightersInformation implements INetworkType {
        public static ID: number = 169;

        collectorId: number;
        allyCharactersInformations: CharacterMinimalPlusLookInformations[];
        enemyCharactersInformations: CharacterMinimalPlusLookInformations[];

        constructor() {
            this.collectorId = 0;
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        }

        public getTypeId(): number {
            return TaxCollectorFightersInformation.ID;
        }

        public reset(): void {
            this.collectorId = 0;
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorFightersInformation(param1);
        }

        public serializeAs_TaxCollectorFightersInformation(param1: ICustomDataOutput): void {
            param1.writeInt(this.collectorId);
            param1.writeShort(this.allyCharactersInformations.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.allyCharactersInformations.length) {
                param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
                (this.allyCharactersInformations[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.enemyCharactersInformations.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.enemyCharactersInformations.length) {
                param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
                (this.enemyCharactersInformations[_loc3_]).serialize(param1);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorFightersInformation(param1);
        }

        public deserializeAs_TaxCollectorFightersInformation(param1: ICustomDataInput): void {
            var _loc6_: number = 0;
            var _loc7_: CharacterMinimalPlusLookInformations = null;
            var _loc8_: number = 0;
            var _loc9_: CharacterMinimalPlusLookInformations = null;
            this.collectorId = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = <CharacterMinimalPlusLookInformations>ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
                _loc7_.deserialize(param1);
                this.allyCharactersInformations.push(_loc7_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = <CharacterMinimalPlusLookInformations>ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
                _loc9_.deserialize(param1);
                this.enemyCharactersInformations.push(_loc9_);
                _loc5_++;
            }

        }
    }
    export class TaxCollectorGuildInformations extends TaxCollectorComplementaryInformations implements INetworkType {
        public static ID: number = 446;

        guild: BasicGuildInformations;

        constructor() {
            this.guild = new BasicGuildInformations();
            super();
        }

        public getTypeId(): number {
            return TaxCollectorGuildInformations.ID;
        }

        public reset(): void {
            this.guild = new BasicGuildInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorGuildInformations(param1);
        }

        public serializeAs_TaxCollectorGuildInformations(param1: ICustomDataOutput): void {
            super.serializeAs_TaxCollectorComplementaryInformations(param1);
            this.guild.serializeAs_BasicGuildInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorGuildInformations(param1);
        }

        public deserializeAs_TaxCollectorGuildInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guild = new BasicGuildInformations();
            this.guild.deserialize(param1);

        }
    }
    export class TaxCollectorInformations implements INetworkType {
        public static ID: number = 167;

        uniqueId: number;
        firtNameId: number;
        lastNameId: number;
        additionalInfos: AdditionalTaxCollectorInformations;
        worldX: number;
        worldY: number;
        subAreaId: number;
        state: number;
        look: EntityLook;
        complements: TaxCollectorComplementaryInformations[];

        constructor() {
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

        public getTypeId(): number {
            return TaxCollectorInformations.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorInformations(param1);
        }

        public serializeAs_TaxCollectorInformations(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.complements.length) {
                param1.writeShort((this.complements[_loc2_]).getTypeId());
                (this.complements[_loc2_]).serialize(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorInformations(param1);
        }

        public deserializeAs_TaxCollectorInformations(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            var _loc5_: TaxCollectorComplementaryInformations = null;
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readUnsignedShort();
                _loc5_ = <TaxCollectorComplementaryInformations>ProtocolTypeManager.getInstance(TaxCollectorComplementaryInformations, _loc4_);
                _loc5_.deserialize(param1);
                this.complements.push(_loc5_);
                _loc3_++;
            }

        }
    }
    export class TaxCollectorLootInformations extends TaxCollectorComplementaryInformations implements INetworkType {
        public static ID: number = 372;

        kamas: number;
        experience: number;
        pods: number;
        itemsValue: number;

        constructor() {
            this.kamas = 0;
            this.experience = 0;
            this.pods = 0;
            this.itemsValue = 0;
            super();
        }

        public getTypeId(): number {
            return TaxCollectorLootInformations.ID;
        }

        public reset(): void {
            this.kamas = 0;
            this.experience = 0;
            this.pods = 0;
            this.itemsValue = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorLootInformations(param1);
        }

        public serializeAs_TaxCollectorLootInformations(param1: ICustomDataOutput): void {
            super.serializeAs_TaxCollectorComplementaryInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorLootInformations(param1);
        }

        public deserializeAs_TaxCollectorLootInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class TaxCollectorWaitingForHelpInformations extends TaxCollectorComplementaryInformations implements INetworkType {
        public static ID: number = 447;

        waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;

        constructor() {
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            super();
        }

        public getTypeId(): number {
            return TaxCollectorWaitingForHelpInformations.ID;
        }

        public reset(): void {
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TaxCollectorWaitingForHelpInformations(param1);
        }

        public serializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataOutput): void {
            super.serializeAs_TaxCollectorComplementaryInformations(param1);
            this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TaxCollectorWaitingForHelpInformations(param1);
        }

        public deserializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.waitingForHelpInfo.deserialize(param1);

        }
    }
    export class AccountHouseInformations implements INetworkType {
        public static ID: number = 390;

        houseId: number;
        modelId: number;
        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;

        constructor() {
            this.houseId = 0;
            this.modelId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }

        public getTypeId(): number {
            return AccountHouseInformations.ID;
        }

        public reset(): void {
            this.houseId = 0;
            this.modelId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AccountHouseInformations(param1);
        }

        public serializeAs_AccountHouseInformations(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AccountHouseInformations(param1);
        }

        public deserializeAs_AccountHouseInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class HouseInformations implements INetworkType {
        public static ID: number = 111;

        houseId: number;
        doorsOnMap: number[];
        ownerName: string;
        isOnSale: boolean;
        isSaleLocked: boolean;
        modelId: number;

        constructor() {
            this.houseId = 0;
            this.doorsOnMap = [];
            this.ownerName = '';
            this.isOnSale = false;
            this.isSaleLocked = false;
            this.modelId = 0;
        }

        public getTypeId(): number {
            return HouseInformations.ID;
        }

        public reset(): void {
            this.houseId = 0;
            this.doorsOnMap = [];
            this.ownerName = '';
            this.isOnSale = false;
            this.isSaleLocked = false;
            this.modelId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HouseInformations(param1);
        }

        public serializeAs_HouseInformations(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.isOnSale);
            _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.isSaleLocked);
            param1.writeByte(_loc2_);
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
            }
            param1.writeVarInt(this.houseId);
            param1.writeShort(this.doorsOnMap.length);
            var _loc3_: number = 0;
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HouseInformations(param1);
        }

        public deserializeAs_HouseInformations(param1: ICustomDataInput): void {
            var _loc5_: number = 0;
            var _loc2_: number = param1.readByte();
            this.isOnSale = BooleanByteWrapper.getFlag(_loc2_, 0);
            this.isSaleLocked = BooleanByteWrapper.getFlag(_loc2_, 1);
            this.houseId = param1.readVarUhInt();
            if (this.houseId < 0) {
                throw new Error('Forbidden value (' + this.houseId + ') on element of HouseInformations.houseId.');
            }
            var _loc3_: number = param1.readUnsignedShort();
            var _loc4_: number = 0;
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

        }
    }
    export class HouseInformationsExtended extends HouseInformations implements INetworkType {
        public static ID: number = 112;

        guildInfo: GuildInformations;

        constructor() {
            this.guildInfo = new GuildInformations();
            super();
        }

        public getTypeId(): number {
            return HouseInformationsExtended.ID;
        }

        public reset(): void {
            this.guildInfo = new GuildInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HouseInformationsExtended(param1);
        }

        public serializeAs_HouseInformationsExtended(param1: ICustomDataOutput): void {
            super.serializeAs_HouseInformations(param1);
            this.guildInfo.serializeAs_GuildInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HouseInformationsExtended(param1);
        }

        public deserializeAs_HouseInformationsExtended(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guildInfo = new GuildInformations();
            this.guildInfo.deserialize(param1);

        }
    }
    export class HouseInformationsForGuild implements INetworkType {
        public static ID: number = 170;

        houseId: number;
        modelId: number;
        ownerName: string;
        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;
        skillListIds: number[];
        guildshareParams: number;

        constructor() {
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

        public getTypeId(): number {
            return HouseInformationsForGuild.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HouseInformationsForGuild(param1);
        }

        public serializeAs_HouseInformationsForGuild(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.skillListIds.length) {
                param1.writeInt(this.skillListIds[_loc2_]);
                _loc2_++;
            }
            if (this.guildshareParams < 0) {
                throw new Error('Forbidden value (' + this.guildshareParams + ') on element guildshareParams.');
            }
            param1.writeVarInt(this.guildshareParams);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HouseInformationsForGuild(param1);
        }

        public deserializeAs_HouseInformationsForGuild(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.skillListIds.push(_loc4_);
                _loc3_++;
            }
            this.guildshareParams = param1.readVarUhInt();
            if (this.guildshareParams < 0) {
                throw new Error('Forbidden value (' + this.guildshareParams + ') on element of HouseInformationsForGuild.guildshareParams.');
            }

        }
    }
    export class HouseInformationsForSell implements INetworkType {
        public static ID: number = 221;

        modelId: number;
        ownerName: string;
        ownerConnected: boolean;
        worldX: number;
        worldY: number;
        subAreaId: number;
        nbRoom: number;
        nbChest: number;
        skillListIds: number[];
        isLocked: boolean;
        price: number;

        constructor() {
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

        public getTypeId(): number {
            return HouseInformationsForSell.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HouseInformationsForSell(param1);
        }

        public serializeAs_HouseInformationsForSell(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.skillListIds.length) {
                param1.writeInt(this.skillListIds[_loc2_]);
                _loc2_++;
            }
            param1.writeBoolean(this.isLocked);
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element price.');
            }
            param1.writeVarInt(this.price);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HouseInformationsForSell(param1);
        }

        public deserializeAs_HouseInformationsForSell(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
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

        }
    }
    export class HouseInformationsInside implements INetworkType {
        public static ID: number = 218;

        houseId: number;
        modelId: number;
        ownerId: number;
        ownerName: string;
        worldX: number;
        worldY: number;
        price: number;
        isLocked: boolean;

        constructor() {
            this.houseId = 0;
            this.modelId = 0;
            this.ownerId = 0;
            this.ownerName = '';
            this.worldX = 0;
            this.worldY = 0;
            this.price = 0;
            this.isLocked = false;
        }

        public getTypeId(): number {
            return HouseInformationsInside.ID;
        }

        public reset(): void {
            this.houseId = 0;
            this.modelId = 0;
            this.ownerId = 0;
            this.ownerName = '';
            this.worldX = 0;
            this.worldY = 0;
            this.price = 0;
            this.isLocked = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_HouseInformationsInside(param1);
        }

        public serializeAs_HouseInformationsInside(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_HouseInformationsInside(param1);
        }

        public deserializeAs_HouseInformationsInside(param1: ICustomDataInput): void {
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

        }
    }
    export class Idol implements INetworkType {
        public static ID: number = 489;

        id: number;
        xpBonusPercent: number;
        dropBonusPercent: number;

        constructor() {
            this.id = 0;
            this.xpBonusPercent = 0;
            this.dropBonusPercent = 0;
        }

        public getTypeId(): number {
            return Idol.ID;
        }

        public reset(): void {
            this.id = 0;
            this.xpBonusPercent = 0;
            this.dropBonusPercent = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_Idol(param1);
        }

        public serializeAs_Idol(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_Idol(param1);
        }

        public deserializeAs_Idol(param1: ICustomDataInput): void {
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

        }
    }
    export class PartyIdol extends Idol implements INetworkType {
        public static ID: number = 490;

        ownersIds: number[];

        constructor() {
            this.ownersIds = [];
            super();
        }

        public getTypeId(): number {
            return PartyIdol.ID;
        }

        public reset(): void {
            this.ownersIds = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PartyIdol(param1);
        }

        public serializeAs_PartyIdol(param1: ICustomDataOutput): void {
            super.serializeAs_Idol(param1);
            param1.writeShort(this.ownersIds.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.ownersIds.length) {
                param1.writeInt(this.ownersIds[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PartyIdol(param1);
        }

        public deserializeAs_PartyIdol(param1: ICustomDataInput): void {
            var _loc4_: any = 0;
            super.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readInt();
                this.ownersIds.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class InteractiveElement implements INetworkType {
        public static ID: number = 80;

        elementId: number;
        elementTypeId: number;
        enabledSkills: InteractiveElementSkill[];
        disabledSkills: InteractiveElementSkill[];

        constructor() {
            this.elementId = 0;
            this.elementTypeId = 0;
            this.enabledSkills = [];
            this.disabledSkills = [];
        }

        public getTypeId(): number {
            return InteractiveElement.ID;
        }

        public reset(): void {
            this.elementId = 0;
            this.elementTypeId = 0;
            this.enabledSkills = [];
            this.disabledSkills = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_InteractiveElement(param1);
        }

        public serializeAs_InteractiveElement(param1: ICustomDataOutput): void {
            if (this.elementId < 0) {
                throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
            }
            param1.writeInt(this.elementId);
            param1.writeInt(this.elementTypeId);
            param1.writeShort(this.enabledSkills.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.enabledSkills.length) {
                param1.writeShort((this.enabledSkills[_loc2_]).getTypeId());
                (this.enabledSkills[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.disabledSkills.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.disabledSkills.length) {
                param1.writeShort((this.disabledSkills[_loc3_]).getTypeId());
                (this.disabledSkills[_loc3_]).serialize(param1);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_InteractiveElement(param1);
        }

        public deserializeAs_InteractiveElement(param1: ICustomDataInput): void {
            var _loc6_: number = 0;
            var _loc7_: InteractiveElementSkill = null;
            var _loc8_: number = 0;
            var _loc9_: InteractiveElementSkill = null;
            this.elementId = param1.readInt();
            if (this.elementId < 0) {
                throw new Error('Forbidden value (' + this.elementId + ') on element of InteractiveElement.elementId.');
            }
            this.elementTypeId = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = <InteractiveElementSkill>ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc6_);
                _loc7_.deserialize(param1);
                this.enabledSkills.push(_loc7_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = <InteractiveElementSkill>ProtocolTypeManager.getInstance(InteractiveElementSkill, _loc8_);
                _loc9_.deserialize(param1);
                this.disabledSkills.push(_loc9_);
                _loc5_++;
            }

        }
    }
    export class InteractiveElementNamedSkill extends InteractiveElementSkill implements INetworkType {
        public static ID: number = 220;

        nameId: number;

        constructor() {
            this.nameId = 0;
            super();
        }

        public getTypeId(): number {
            return InteractiveElementNamedSkill.ID;
        }

        public reset(): void {
            this.nameId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_InteractiveElementNamedSkill(param1);
        }

        public serializeAs_InteractiveElementNamedSkill(param1: ICustomDataOutput): void {
            super.serializeAs_InteractiveElementSkill(param1);
            if (this.nameId < 0) {
                throw new Error('Forbidden value (' + this.nameId + ') on element nameId.');
            }
            param1.writeVarInt(this.nameId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_InteractiveElementNamedSkill(param1);
        }

        public deserializeAs_InteractiveElementNamedSkill(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.nameId = param1.readVarUhInt();
            if (this.nameId < 0) {
                throw new Error('Forbidden value (' + this.nameId + ') on element of InteractiveElementNamedSkill.nameId.');
            }

        }
    }
    export class InteractiveElementSkill implements INetworkType {
        public static ID: number = 219;

        skillId: number;
        skillInstanceUid: number;

        constructor() {
            this.skillId = 0;
            this.skillInstanceUid = 0;
        }

        public getTypeId(): number {
            return InteractiveElementSkill.ID;
        }

        public reset(): void {
            this.skillId = 0;
            this.skillInstanceUid = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_InteractiveElementSkill(param1);
        }

        public serializeAs_InteractiveElementSkill(param1: ICustomDataOutput): void {
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
            }
            param1.writeVarInt(this.skillId);
            if (this.skillInstanceUid < 0) {
                throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element skillInstanceUid.');
            }
            param1.writeInt(this.skillInstanceUid);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_InteractiveElementSkill(param1);
        }

        public deserializeAs_InteractiveElementSkill(param1: ICustomDataInput): void {
            this.skillId = param1.readVarUhInt();
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveElementSkill.skillId.');
            }
            this.skillInstanceUid = param1.readInt();
            if (this.skillInstanceUid < 0) {
                throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element of InteractiveElementSkill.skillInstanceUid.');
            }

        }
    }
    export class InteractiveElementWithAgeBonus extends InteractiveElement implements INetworkType {
        public static ID: number = 398;

        ageBonus: number;

        constructor() {
            this.ageBonus = 0;
            super();
        }

        public getTypeId(): number {
            return InteractiveElementWithAgeBonus.ID;
        }

        public reset(): void {
            this.ageBonus = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_InteractiveElementWithAgeBonus(param1);
        }

        public serializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataOutput): void {
            super.serializeAs_InteractiveElement(param1);
            if (this.ageBonus < -1 || this.ageBonus > 1000) {
                throw new Error('Forbidden value (' + this.ageBonus + ') on element ageBonus.');
            }
            param1.writeShort(this.ageBonus);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_InteractiveElementWithAgeBonus(param1);
        }

        public deserializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.ageBonus = param1.readShort();
            if (this.ageBonus < -1 || this.ageBonus > 1000) {
                throw new Error('Forbidden value (' + this.ageBonus + ') on element of InteractiveElementWithAgeBonus.ageBonus.');
            }

        }
    }
    export class MapObstacle implements INetworkType {
        public static ID: number = 200;

        obstacleCellId: number;
        state: number;

        constructor() {
            this.obstacleCellId = 0;
            this.state = 0;
        }

        public getTypeId(): number {
            return MapObstacle.ID;
        }

        public reset(): void {
            this.obstacleCellId = 0;
            this.state = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MapObstacle(param1);
        }

        public serializeAs_MapObstacle(param1: ICustomDataOutput): void {
            if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
                throw new Error('Forbidden value (' + this.obstacleCellId + ') on element obstacleCellId.');
            }
            param1.writeVarShort(this.obstacleCellId);
            param1.writeByte(this.state);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MapObstacle(param1);
        }

        public deserializeAs_MapObstacle(param1: ICustomDataInput): void {
            this.obstacleCellId = param1.readVarUhShort();
            if (this.obstacleCellId < 0 || this.obstacleCellId > 559) {
                throw new Error('Forbidden value (' + this.obstacleCellId + ') on element of MapObstacle.obstacleCellId.');
            }
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of MapObstacle.state.');
            }

        }
    }
    export class StatedElement implements INetworkType {
        public static ID: number = 108;

        elementId: number;
        elementCellId: number;
        elementState: number;

        constructor() {
            this.elementId = 0;
            this.elementCellId = 0;
            this.elementState = 0;
        }

        public getTypeId(): number {
            return StatedElement.ID;
        }

        public reset(): void {
            this.elementId = 0;
            this.elementCellId = 0;
            this.elementState = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StatedElement(param1);
        }

        public serializeAs_StatedElement(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StatedElement(param1);
        }

        public deserializeAs_StatedElement(param1: ICustomDataInput): void {
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

        }
    }
    export class SkillActionDescription implements INetworkType {
        public static ID: number = 102;

        skillId: number;

        constructor() {
            this.skillId = 0;
        }

        public getTypeId(): number {
            return SkillActionDescription.ID;
        }

        public reset(): void {
            this.skillId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SkillActionDescription(param1);
        }

        public serializeAs_SkillActionDescription(param1: ICustomDataOutput): void {
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
            }
            param1.writeVarShort(this.skillId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SkillActionDescription(param1);
        }

        public deserializeAs_SkillActionDescription(param1: ICustomDataInput): void {
            this.skillId = param1.readVarUhShort();
            if (this.skillId < 0) {
                throw new Error('Forbidden value (' + this.skillId + ') on element of SkillActionDescription.skillId.');
            }

        }
    }
    export class SkillActionDescriptionCollect extends SkillActionDescriptionTimed implements INetworkType {
        public static ID: number = 99;

        min: number;
        max: number;

        constructor() {
            this.min = 0;
            this.max = 0;
            super();
        }

        public getTypeId(): number {
            return SkillActionDescriptionCollect.ID;
        }

        public reset(): void {
            this.min = 0;
            this.max = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SkillActionDescriptionCollect(param1);
        }

        public serializeAs_SkillActionDescriptionCollect(param1: ICustomDataOutput): void {
            super.serializeAs_SkillActionDescriptionTimed(param1);
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element min.');
            }
            param1.writeVarShort(this.min);
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element max.');
            }
            param1.writeVarShort(this.max);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SkillActionDescriptionCollect(param1);
        }

        public deserializeAs_SkillActionDescriptionCollect(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.min = param1.readVarUhShort();
            if (this.min < 0) {
                throw new Error('Forbidden value (' + this.min + ') on element of SkillActionDescriptionCollect.min.');
            }
            this.max = param1.readVarUhShort();
            if (this.max < 0) {
                throw new Error('Forbidden value (' + this.max + ') on element of SkillActionDescriptionCollect.max.');
            }

        }
    }
    export class SkillActionDescriptionCraft extends SkillActionDescription implements INetworkType {
        public static ID: number = 100;

        probability: number;

        constructor() {
            this.probability = 0;
            super();
        }

        public getTypeId(): number {
            return SkillActionDescriptionCraft.ID;
        }

        public reset(): void {
            this.probability = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SkillActionDescriptionCraft(param1);
        }

        public serializeAs_SkillActionDescriptionCraft(param1: ICustomDataOutput): void {
            super.serializeAs_SkillActionDescription(param1);
            if (this.probability < 0) {
                throw new Error('Forbidden value (' + this.probability + ') on element probability.');
            }
            param1.writeByte(this.probability);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SkillActionDescriptionCraft(param1);
        }

        public deserializeAs_SkillActionDescriptionCraft(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.probability = param1.readByte();
            if (this.probability < 0) {
                throw new Error('Forbidden value (' + this.probability + ') on element of SkillActionDescriptionCraft.probability.');
            }

        }
    }
    export class SkillActionDescriptionTimed extends SkillActionDescription implements INetworkType {
        public static ID: number = 103;

        time: number;

        constructor() {
            this.time = 0;
            super();
        }

        public getTypeId(): number {
            return SkillActionDescriptionTimed.ID;
        }

        public reset(): void {
            this.time = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SkillActionDescriptionTimed(param1);
        }

        public serializeAs_SkillActionDescriptionTimed(param1: ICustomDataOutput): void {
            super.serializeAs_SkillActionDescription(param1);
            if (this.time < 0 || this.time > 255) {
                throw new Error('Forbidden value (' + this.time + ') on element time.');
            }
            param1.writeByte(this.time);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SkillActionDescriptionTimed(param1);
        }

        public deserializeAs_SkillActionDescriptionTimed(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.time = param1.readUnsignedByte();
            if (this.time < 0 || this.time > 255) {
                throw new Error('Forbidden value (' + this.time + ') on element of SkillActionDescriptionTimed.time.');
            }

        }
    }
    export class IdolsPreset implements INetworkType {
        public static ID: number = 491;

        presetId: number;
        symbolId: number;
        idolId: number[];

        constructor() {
            this.presetId = 0;
            this.symbolId = 0;
            this.idolId = [];
        }

        public getTypeId(): number {
            return IdolsPreset.ID;
        }

        public reset(): void {
            this.presetId = 0;
            this.symbolId = 0;
            this.idolId = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IdolsPreset(param1);
        }

        public serializeAs_IdolsPreset(param1: ICustomDataOutput): void {
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
            }
            param1.writeByte(this.presetId);
            if (this.symbolId < 0) {
                throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
            }
            param1.writeByte(this.symbolId);
            param1.writeShort(this.idolId.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.idolId.length) {
                if (this.idolId[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.idolId[_loc2_] + ') on element 3 (starting at 1) of idolId.');
                }
                param1.writeVarShort(this.idolId[_loc2_]);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IdolsPreset(param1);
        }

        public deserializeAs_IdolsPreset(param1: ICustomDataInput): void {
            var _loc4_: number = 0;
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPreset.presetId.');
            }
            this.symbolId = param1.readByte();
            if (this.symbolId < 0) {
                throw new Error('Forbidden value (' + this.symbolId + ') on element of IdolsPreset.symbolId.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = param1.readVarUhShort();
                if (_loc4_ < 0) {
                    throw new Error('Forbidden value (' + _loc4_ + ') on elements of idolId.');
                }
                this.idolId.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class Preset implements INetworkType {
        public static ID: number = 355;

        presetId: number;
        symbolId: number;
        mount: boolean;
        objects: PresetItem[];

        constructor() {
            this.presetId = 0;
            this.symbolId = 0;
            this.mount = false;
            this.objects = [];
        }

        public getTypeId(): number {
            return Preset.ID;
        }

        public reset(): void {
            this.presetId = 0;
            this.symbolId = 0;
            this.mount = false;
            this.objects = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_Preset(param1);
        }

        public serializeAs_Preset(param1: ICustomDataOutput): void {
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
            var _loc2_: number = 0;
            while (_loc2_ < this.objects.length) {
                (this.objects[_loc2_]).serializeAs_PresetItem(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_Preset(param1);
        }

        public deserializeAs_Preset(param1: ICustomDataInput): void {
            var _loc4_: PresetItem = null;
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of Preset.presetId.');
            }
            this.symbolId = param1.readByte();
            if (this.symbolId < 0) {
                throw new Error('Forbidden value (' + this.symbolId + ') on element of Preset.symbolId.');
            }
            this.mount = param1.readBoolean();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new PresetItem();
                _loc4_.deserialize(param1);
                this.objects.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class PresetItem implements INetworkType {
        public static ID: number = 354;

        position: number;
        objGid: number;
        objUid: number;

        constructor() {
            this.position = 63;
            this.objGid = 0;
            this.objUid = 0;
        }

        public getTypeId(): number {
            return PresetItem.ID;
        }

        public reset(): void {
            this.position = 63;
            this.objGid = 0;
            this.objUid = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PresetItem(param1);
        }

        public serializeAs_PresetItem(param1: ICustomDataOutput): void {
            param1.writeByte(this.position);
            if (this.objGid < 0) {
                throw new Error('Forbidden value (' + this.objGid + ') on element objGid.');
            }
            param1.writeVarShort(this.objGid);
            if (this.objUid < 0) {
                throw new Error('Forbidden value (' + this.objUid + ') on element objUid.');
            }
            param1.writeVarInt(this.objUid);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PresetItem(param1);
        }

        public deserializeAs_PresetItem(param1: ICustomDataInput): void {
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

        }
    }
    export class EntityLook implements INetworkType {
        public static ID: number = 55;

        bonesId: number;
        skins: number[];
        indexedColors: number[];
        scales: number[];
        subentities: SubEntity[];

        constructor() {
            this.bonesId = 0;
            this.skins = [];
            this.indexedColors = [];
            this.scales = [];
            this.subentities = [];
        }

        public getTypeId(): number {
            return EntityLook.ID;
        }

        public reset(): void {
            this.bonesId = 0;
            this.skins = [];
            this.indexedColors = [];
            this.scales = [];
            this.subentities = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_EntityLook(param1);
        }

        public serializeAs_EntityLook(param1: ICustomDataOutput): void {
            if (this.bonesId < 0) {
                throw new Error('Forbidden value (' + this.bonesId + ') on element bonesId.');
            }
            param1.writeVarShort(this.bonesId);
            param1.writeShort(this.skins.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.skins.length) {
                if (this.skins[_loc2_] < 0) {
                    throw new Error('Forbidden value (' + this.skins[_loc2_] + ') on element 2 (starting at 1) of skins.');
                }
                param1.writeVarShort(this.skins[_loc2_]);
                _loc2_++;
            }
            param1.writeShort(this.indexedColors.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.indexedColors.length) {
                param1.writeInt(this.indexedColors[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.scales.length);
            var _loc4_: number = 0;
            while (_loc4_ < this.scales.length) {
                param1.writeVarShort(this.scales[_loc4_]);
                _loc4_++;
            }
            param1.writeShort(this.subentities.length);
            var _loc5_: number = 0;
            while (_loc5_ < this.subentities.length) {
                (this.subentities[_loc5_]).serializeAs_SubEntity(param1);
                _loc5_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_EntityLook(param1);
        }

        public deserializeAs_EntityLook(param1: ICustomDataInput): void {
            var _loc10_: number = 0;
            var _loc11_: any = 0;
            var _loc12_: any = 0;
            var _loc13_: SubEntity = null;
            this.bonesId = param1.readVarUhShort();
            if (this.bonesId < 0) {
                throw new Error('Forbidden value (' + this.bonesId + ') on element of EntityLook.bonesId.');
            }
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc10_ = param1.readVarUhShort();
                if (_loc10_ < 0) {
                    throw new Error('Forbidden value (' + _loc10_ + ') on elements of skins.');
                }
                this.skins.push(_loc10_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc11_ = param1.readInt();
                this.indexedColors.push(_loc11_);
                _loc5_++;
            }
            var _loc6_: number = param1.readUnsignedShort();
            var _loc7_: number = 0;
            while (_loc7_ < _loc6_) {
                _loc12_ = param1.readVarShort();
                this.scales.push(_loc12_);
                _loc7_++;
            }
            var _loc8_: number = param1.readUnsignedShort();
            var _loc9_: number = 0;
            while (_loc9_ < _loc8_) {
                _loc13_ = new SubEntity();
                _loc13_.deserialize(param1);
                this.subentities.push(_loc13_);
                _loc9_++;
            }

        }
    }
    export class IndexedEntityLook implements INetworkType {
        public static ID: number = 405;

        look: EntityLook;
        index: number;

        constructor() {
            this.look = new EntityLook();
            this.index = 0;
        }

        public getTypeId(): number {
            return IndexedEntityLook.ID;
        }

        public reset(): void {
            this.look = new EntityLook();
            this.index = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_IndexedEntityLook(param1);
        }

        public serializeAs_IndexedEntityLook(param1: ICustomDataOutput): void {
            this.look.serializeAs_EntityLook(param1);
            if (this.index < 0) {
                throw new Error('Forbidden value (' + this.index + ') on element index.');
            }
            param1.writeByte(this.index);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_IndexedEntityLook(param1);
        }

        public deserializeAs_IndexedEntityLook(param1: ICustomDataInput): void {
            this.look = new EntityLook();
            this.look.deserialize(param1);
            this.index = param1.readByte();
            if (this.index < 0) {
                throw new Error('Forbidden value (' + this.index + ') on element of IndexedEntityLook.index.');
            }

        }
    }
    export class SubEntity implements INetworkType {
        public static ID: number = 54;

        bindingPointCategory: number;
        bindingPointIndex: number;
        subEntityLook: EntityLook;

        constructor() {
            this.bindingPointCategory = 0;
            this.bindingPointIndex = 0;
            this.subEntityLook = new EntityLook();
        }

        public getTypeId(): number {
            return SubEntity.ID;
        }

        public reset(): void {
            this.bindingPointCategory = 0;
            this.bindingPointIndex = 0;
            this.subEntityLook = new EntityLook();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_SubEntity(param1);
        }

        public serializeAs_SubEntity(param1: ICustomDataOutput): void {
            param1.writeByte(this.bindingPointCategory);
            if (this.bindingPointIndex < 0) {
                throw new Error('Forbidden value (' + this.bindingPointIndex + ') on element bindingPointIndex.');
            }
            param1.writeByte(this.bindingPointIndex);
            this.subEntityLook.serializeAs_EntityLook(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_SubEntity(param1);
        }

        public deserializeAs_SubEntity(param1: ICustomDataInput): void {
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

        }
    }
    export class ItemDurability implements INetworkType {
        public static ID: number = 168;

        durability: number;
        durabilityMax: number;

        constructor() {
            this.durability = 0;
            this.durabilityMax = 0;
        }

        public getTypeId(): number {
            return ItemDurability.ID;
        }

        public reset(): void {
            this.durability = 0;
            this.durabilityMax = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ItemDurability(param1);
        }

        public serializeAs_ItemDurability(param1: ICustomDataOutput): void {
            param1.writeShort(this.durability);
            param1.writeShort(this.durabilityMax);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ItemDurability(param1);
        }

        public deserializeAs_ItemDurability(param1: ICustomDataInput): void {
            this.durability = param1.readShort();
            this.durabilityMax = param1.readShort();

        }
    }
    export class MountClientData implements INetworkType {
        public static ID: number = 178;

        id: number;
        model: number;
        ancestor: number[];
        behaviors: number[];
        name: string;
        sex: boolean;
        ownerId: number;
        experience: number;
        experienceForLevel: number;
        experienceForNextLevel: number;
        level: number;
        isRideable: boolean;
        maxPods: number;
        isWild: boolean;
        stamina: number;
        staminaMax: number;
        maturity: number;
        maturityForAdult: number;
        energy: number;
        energyMax: number;
        serenity: number;
        aggressivityMax: number;
        serenityMax: number;
        love: number;
        loveMax: number;
        fecondationTime: number;
        isFecondationReady: boolean;
        boostLimiter: number;
        boostMax: number;
        reproductionCount: number;
        reproductionCountMax: number;
        effectList: ObjectEffectInteger[];

        constructor() {
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

        public getTypeId(): number {
            return MountClientData.ID;
        }

        public reset(): void {
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

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MountClientData(param1);
        }

        public serializeAs_MountClientData(param1: ICustomDataOutput): void {
            var _loc2_: number = 0;
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
            var _loc3_: number = 0;
            while (_loc3_ < this.ancestor.length) {
                if (this.ancestor[_loc3_] < 0) {
                    throw new Error('Forbidden value (' + this.ancestor[_loc3_] + ') on element 3 (starting at 1) of ancestor.');
                }
                param1.writeInt(this.ancestor[_loc3_]);
                _loc3_++;
            }
            param1.writeShort(this.behaviors.length);
            var _loc4_: number = 0;
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
            var _loc5_: number = 0;
            while (_loc5_ < this.effectList.length) {
                (this.effectList[_loc5_]).serializeAs_ObjectEffectInteger(param1);
                _loc5_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MountClientData(param1);
        }

        public deserializeAs_MountClientData(param1: ICustomDataInput): void {
            var _loc9_: number = 0;
            var _loc10_: number = 0;
            var _loc11_: ObjectEffectInteger = null;
            var _loc2_: number = param1.readByte();
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
            var _loc3_: number = param1.readUnsignedShort();
            var _loc4_: number = 0;
            while (_loc4_ < _loc3_) {
                _loc9_ = param1.readInt();
                if (_loc9_ < 0) {
                    throw new Error('Forbidden value (' + _loc9_ + ') on elements of ancestor.');
                }
                this.ancestor.push(_loc9_);
                _loc4_++;
            }
            var _loc5_: number = param1.readUnsignedShort();
            var _loc6_: number = 0;
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
            var _loc7_: number = param1.readUnsignedShort();
            var _loc8_: number = 0;
            while (_loc8_ < _loc7_) {
                _loc11_ = new ObjectEffectInteger();
                _loc11_.deserialize(param1);
                this.effectList.push(_loc11_);
                _loc8_++;
            }

        }
    }
    export class UpdateMountBoost implements INetworkType {
        public static ID: number = 356;

        type: number;

        constructor() {
            this.type = 0;
        }

        public getTypeId(): number {
            return UpdateMountBoost.ID;
        }

        public reset(): void {
            this.type = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_UpdateMountBoost(param1);
        }

        public serializeAs_UpdateMountBoost(param1: ICustomDataOutput): void {
            param1.writeByte(this.type);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_UpdateMountBoost(param1);
        }

        public deserializeAs_UpdateMountBoost(param1: ICustomDataInput): void {
            this.type = param1.readByte();
            if (this.type < 0) {
                throw new Error('Forbidden value (' + this.type + ') on element of UpdateMountBoost.type.');
            }

        }
    }
    export class UpdateMountIntBoost extends UpdateMountBoost implements INetworkType {
        public static ID: number = 357;

        value: number;

        constructor() {
            this.value = 0;
            super();
        }

        public getTypeId(): number {
            return UpdateMountIntBoost.ID;
        }

        public reset(): void {
            this.value = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_UpdateMountIntBoost(param1);
        }

        public serializeAs_UpdateMountIntBoost(param1: ICustomDataOutput): void {
            super.serializeAs_UpdateMountBoost(param1);
            param1.writeInt(this.value);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_UpdateMountIntBoost(param1);
        }

        public deserializeAs_UpdateMountIntBoost(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.value = param1.readInt();

        }
    }
    export class MountInformationsForPaddock implements INetworkType {
        public static ID: number = 184;

        modelId: number;
        name: string;
        ownerName: string;

        constructor() {
            this.modelId = 0;
            this.name = '';
            this.ownerName = '';
        }

        public getTypeId(): number {
            return MountInformationsForPaddock.ID;
        }

        public reset(): void {
            this.modelId = 0;
            this.name = '';
            this.ownerName = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_MountInformationsForPaddock(param1);
        }

        public serializeAs_MountInformationsForPaddock(param1: ICustomDataOutput): void {
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
            }
            param1.writeByte(this.modelId);
            param1.writeUTF(this.name);
            param1.writeUTF(this.ownerName);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_MountInformationsForPaddock(param1);
        }

        public deserializeAs_MountInformationsForPaddock(param1: ICustomDataInput): void {
            this.modelId = param1.readByte();
            if (this.modelId < 0) {
                throw new Error('Forbidden value (' + this.modelId + ') on element of MountInformationsForPaddock.modelId.');
            }
            this.name = param1.readUTF();
            this.ownerName = param1.readUTF();

        }
    }
    export class PaddockAbandonnedInformations extends PaddockBuyableInformations implements INetworkType {
        public static ID: number = 133;

        guildId: number;

        constructor() {
            this.guildId = 0;
            super();
        }

        public getTypeId(): number {
            return PaddockAbandonnedInformations.ID;
        }

        public reset(): void {
            this.guildId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PaddockAbandonnedInformations(param1);
        }

        public serializeAs_PaddockAbandonnedInformations(param1: ICustomDataOutput): void {
            super.serializeAs_PaddockBuyableInformations(param1);
            param1.writeInt(this.guildId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PaddockAbandonnedInformations(param1);
        }

        public deserializeAs_PaddockAbandonnedInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guildId = param1.readInt();

        }
    }
    export class PaddockBuyableInformations extends PaddockInformations implements INetworkType {
        public static ID: number = 130;

        price: number;
        locked: boolean;

        constructor() {
            this.price = 0;
            this.locked = false;
            super();
        }

        public getTypeId(): number {
            return PaddockBuyableInformations.ID;
        }

        public reset(): void {
            this.price = 0;
            this.locked = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PaddockBuyableInformations(param1);
        }

        public serializeAs_PaddockBuyableInformations(param1: ICustomDataOutput): void {
            super.serializeAs_PaddockInformations(param1);
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element price.');
            }
            param1.writeVarInt(this.price);
            param1.writeBoolean(this.locked);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PaddockBuyableInformations(param1);
        }

        public deserializeAs_PaddockBuyableInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.price = param1.readVarUhInt();
            if (this.price < 0) {
                throw new Error('Forbidden value (' + this.price + ') on element of PaddockBuyableInformations.price.');
            }
            this.locked = param1.readBoolean();

        }
    }
    export class PaddockContentInformations extends PaddockInformations implements INetworkType {
        public static ID: number = 183;

        paddockId: number;
        worldX: number;
        worldY: number;
        mapId: number;
        subAreaId: number;
        abandonned: boolean;
        mountsInformations: MountInformationsForPaddock[];

        constructor() {
            this.paddockId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.abandonned = false;
            this.mountsInformations = [];
            super();
        }

        public getTypeId(): number {
            return PaddockContentInformations.ID;
        }

        public reset(): void {
            this.paddockId = 0;
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.subAreaId = 0;
            this.abandonned = false;
            this.mountsInformations = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PaddockContentInformations(param1);
        }

        public serializeAs_PaddockContentInformations(param1: ICustomDataOutput): void {
            super.serializeAs_PaddockInformations(param1);
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
            var _loc2_: number = 0;
            while (_loc2_ < this.mountsInformations.length) {
                (this.mountsInformations[_loc2_]).serializeAs_MountInformationsForPaddock(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PaddockContentInformations(param1);
        }

        public deserializeAs_PaddockContentInformations(param1: ICustomDataInput): void {
            var _loc4_: MountInformationsForPaddock = null;
            super.deserialize(param1);
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new MountInformationsForPaddock();
                _loc4_.deserialize(param1);
                this.mountsInformations.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class PaddockInformations implements INetworkType {
        public static ID: number = 132;

        maxOutdoorMount: number;
        maxItems: number;

        constructor() {
            this.maxOutdoorMount = 0;
            this.maxItems = 0;
        }

        public getTypeId(): number {
            return PaddockInformations.ID;
        }

        public reset(): void {
            this.maxOutdoorMount = 0;
            this.maxItems = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PaddockInformations(param1);
        }

        public serializeAs_PaddockInformations(param1: ICustomDataOutput): void {
            if (this.maxOutdoorMount < 0) {
                throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element maxOutdoorMount.');
            }
            param1.writeVarShort(this.maxOutdoorMount);
            if (this.maxItems < 0) {
                throw new Error('Forbidden value (' + this.maxItems + ') on element maxItems.');
            }
            param1.writeVarShort(this.maxItems);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PaddockInformations(param1);
        }

        public deserializeAs_PaddockInformations(param1: ICustomDataInput): void {
            this.maxOutdoorMount = param1.readVarUhShort();
            if (this.maxOutdoorMount < 0) {
                throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element of PaddockInformations.maxOutdoorMount.');
            }
            this.maxItems = param1.readVarUhShort();
            if (this.maxItems < 0) {
                throw new Error('Forbidden value (' + this.maxItems + ') on element of PaddockInformations.maxItems.');
            }

        }
    }
    export class PaddockInformationsForSell implements INetworkType {
        public static ID: number = 222;

        guildOwner: string;
        worldX: number;
        worldY: number;
        subAreaId: number;
        nbMount: number;
        nbObject: number;
        price: number;

        constructor() {
            this.guildOwner = '';
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.nbMount = 0;
            this.nbObject = 0;
            this.price = 0;
        }

        public getTypeId(): number {
            return PaddockInformationsForSell.ID;
        }

        public reset(): void {
            this.guildOwner = '';
            this.worldX = 0;
            this.worldY = 0;
            this.subAreaId = 0;
            this.nbMount = 0;
            this.nbObject = 0;
            this.price = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PaddockInformationsForSell(param1);
        }

        public serializeAs_PaddockInformationsForSell(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PaddockInformationsForSell(param1);
        }

        public deserializeAs_PaddockInformationsForSell(param1: ICustomDataInput): void {
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

        }
    }
    export class PaddockItem extends ObjectItemInRolePlay implements INetworkType {
        public static ID: number = 185;

        durability: ItemDurability;

        constructor() {
            this.durability = new ItemDurability();
            super();
        }

        public getTypeId(): number {
            return PaddockItem.ID;
        }

        public reset(): void {
            this.durability = new ItemDurability();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PaddockItem(param1);
        }

        public serializeAs_PaddockItem(param1: ICustomDataOutput): void {
            super.serializeAs_ObjectItemInRolePlay(param1);
            this.durability.serializeAs_ItemDurability(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PaddockItem(param1);
        }

        public deserializeAs_PaddockItem(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.durability = new ItemDurability();
            this.durability.deserialize(param1);

        }
    }
    export class PaddockPrivateInformations extends PaddockAbandonnedInformations implements INetworkType {
        public static ID: number = 131;

        guildInfo: GuildInformations;

        constructor() {
            this.guildInfo = new GuildInformations();
            super();
        }

        public getTypeId(): number {
            return PaddockPrivateInformations.ID;
        }

        public reset(): void {
            this.guildInfo = new GuildInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PaddockPrivateInformations(param1);
        }

        public serializeAs_PaddockPrivateInformations(param1: ICustomDataOutput): void {
            super.serializeAs_PaddockAbandonnedInformations(param1);
            this.guildInfo.serializeAs_GuildInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PaddockPrivateInformations(param1);
        }

        public deserializeAs_PaddockPrivateInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.guildInfo = new GuildInformations();
            this.guildInfo.deserialize(param1);

        }
    }
    export class AllianceInsiderPrismInformation extends PrismInformation implements INetworkType {
        public static ID: number = 431;

        lastTimeSlotModificationDate: number;
        lastTimeSlotModificationAuthorGuildId: number;
        lastTimeSlotModificationAuthorId: number;
        lastTimeSlotModificationAuthorName: string;
        modulesObjects: ObjectItem[];

        constructor() {
            this.lastTimeSlotModificationDate = 0;
            this.lastTimeSlotModificationAuthorGuildId = 0;
            this.lastTimeSlotModificationAuthorId = 0;
            this.lastTimeSlotModificationAuthorName = '';
            this.modulesObjects = [];
            super();
        }

        public getTypeId(): number {
            return AllianceInsiderPrismInformation.ID;
        }

        public reset(): void {
            this.lastTimeSlotModificationDate = 0;
            this.lastTimeSlotModificationAuthorGuildId = 0;
            this.lastTimeSlotModificationAuthorId = 0;
            this.lastTimeSlotModificationAuthorName = '';
            this.modulesObjects = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AllianceInsiderPrismInformation(param1);
        }

        public serializeAs_AllianceInsiderPrismInformation(param1: ICustomDataOutput): void {
            super.serializeAs_PrismInformation(param1);
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
            var _loc2_: number = 0;
            while (_loc2_ < this.modulesObjects.length) {
                (this.modulesObjects[_loc2_]).serializeAs_ObjectItem(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AllianceInsiderPrismInformation(param1);
        }

        public deserializeAs_AllianceInsiderPrismInformation(param1: ICustomDataInput): void {
            var _loc4_: ObjectItem = null;
            super.deserialize(param1);
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
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new ObjectItem();
                _loc4_.deserialize(param1);
                this.modulesObjects.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class AlliancePrismInformation extends PrismInformation implements INetworkType {
        public static ID: number = 427;

        alliance: AllianceInformations;

        constructor() {
            this.alliance = new AllianceInformations();
            super();
        }

        public getTypeId(): number {
            return AlliancePrismInformation.ID;
        }

        public reset(): void {
            this.alliance = new AllianceInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AlliancePrismInformation(param1);
        }

        public serializeAs_AlliancePrismInformation(param1: ICustomDataOutput): void {
            super.serializeAs_PrismInformation(param1);
            this.alliance.serializeAs_AllianceInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AlliancePrismInformation(param1);
        }

        public deserializeAs_AlliancePrismInformation(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.alliance = new AllianceInformations();
            this.alliance.deserialize(param1);

        }
    }
    export class PrismFightersInformation implements INetworkType {
        public static ID: number = 443;

        subAreaId: number;
        waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;
        allyCharactersInformations: CharacterMinimalPlusLookInformations[];
        enemyCharactersInformations: CharacterMinimalPlusLookInformations[];

        constructor() {
            this.subAreaId = 0;
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        }

        public getTypeId(): number {
            return PrismFightersInformation.ID;
        }

        public reset(): void {
            this.subAreaId = 0;
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.allyCharactersInformations = [];
            this.enemyCharactersInformations = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PrismFightersInformation(param1);
        }

        public serializeAs_PrismFightersInformation(param1: ICustomDataOutput): void {
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
            param1.writeShort(this.allyCharactersInformations.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.allyCharactersInformations.length) {
                param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
                (this.allyCharactersInformations[_loc2_]).serialize(param1);
                _loc2_++;
            }
            param1.writeShort(this.enemyCharactersInformations.length);
            var _loc3_: number = 0;
            while (_loc3_ < this.enemyCharactersInformations.length) {
                param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
                (this.enemyCharactersInformations[_loc3_]).serialize(param1);
                _loc3_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PrismFightersInformation(param1);
        }

        public deserializeAs_PrismFightersInformation(param1: ICustomDataInput): void {
            var _loc6_: number = 0;
            var _loc7_: CharacterMinimalPlusLookInformations = null;
            var _loc8_: number = 0;
            var _loc9_: CharacterMinimalPlusLookInformations = null;
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightersInformation.subAreaId.');
            }
            this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
            this.waitingForHelpInfo.deserialize(param1);
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc6_ = param1.readUnsignedShort();
                _loc7_ = <CharacterMinimalPlusLookInformations>ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
                _loc7_.deserialize(param1);
                this.allyCharactersInformations.push(_loc7_);
                _loc3_++;
            }
            var _loc4_: number = param1.readUnsignedShort();
            var _loc5_: number = 0;
            while (_loc5_ < _loc4_) {
                _loc8_ = param1.readUnsignedShort();
                _loc9_ = <CharacterMinimalPlusLookInformations>ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
                _loc9_.deserialize(param1);
                this.enemyCharactersInformations.push(_loc9_);
                _loc5_++;
            }

        }
    }
    export class PrismGeolocalizedInformation extends PrismSubareaEmptyInfo implements INetworkType {
        public static ID: number = 434;

        worldX: number;
        worldY: number;
        mapId: number;
        prism: PrismInformation;

        constructor() {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.prism = new PrismInformation();
            super();
        }

        public getTypeId(): number {
            return PrismGeolocalizedInformation.ID;
        }

        public reset(): void {
            this.worldX = 0;
            this.worldY = 0;
            this.mapId = 0;
            this.prism = new PrismInformation();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PrismGeolocalizedInformation(param1);
        }

        public serializeAs_PrismGeolocalizedInformation(param1: ICustomDataOutput): void {
            super.serializeAs_PrismSubareaEmptyInfo(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PrismGeolocalizedInformation(param1);
        }

        public deserializeAs_PrismGeolocalizedInformation(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.worldX = param1.readShort();
            if (this.worldX < -255 || this.worldX > 255) {
                throw new Error('Forbidden value (' + this.worldX + ') on element of PrismGeolocalizedInformation.worldX.');
            }
            this.worldY = param1.readShort();
            if (this.worldY < -255 || this.worldY > 255) {
                throw new Error('Forbidden value (' + this.worldY + ') on element of PrismGeolocalizedInformation.worldY.');
            }
            this.mapId = param1.readInt();
            var _loc2_: number = param1.readUnsignedShort();
            this.prism = <PrismInformation>ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
            this.prism.deserialize(param1);

        }
    }
    export class PrismInformation implements INetworkType {
        public static ID: number = 428;

        typeId: number;
        state: number;
        nextVulnerabilityDate: number;
        placementDate: number;
        rewardTokenCount: number;

        constructor() {
            this.typeId = 0;
            this.state = 1;
            this.nextVulnerabilityDate = 0;
            this.placementDate = 0;
            this.rewardTokenCount = 0;
        }

        public getTypeId(): number {
            return PrismInformation.ID;
        }

        public reset(): void {
            this.typeId = 0;
            this.state = 1;
            this.nextVulnerabilityDate = 0;
            this.placementDate = 0;
            this.rewardTokenCount = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PrismInformation(param1);
        }

        public serializeAs_PrismInformation(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PrismInformation(param1);
        }

        public deserializeAs_PrismInformation(param1: ICustomDataInput): void {
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

        }
    }
    export class PrismSubareaEmptyInfo implements INetworkType {
        public static ID: number = 438;

        subAreaId: number;
        allianceId: number;

        constructor() {
            this.subAreaId = 0;
            this.allianceId = 0;
        }

        public getTypeId(): number {
            return PrismSubareaEmptyInfo.ID;
        }

        public reset(): void {
            this.subAreaId = 0;
            this.allianceId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_PrismSubareaEmptyInfo(param1);
        }

        public serializeAs_PrismSubareaEmptyInfo(param1: ICustomDataOutput): void {
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
            }
            param1.writeVarShort(this.subAreaId);
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
            }
            param1.writeVarInt(this.allianceId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_PrismSubareaEmptyInfo(param1);
        }

        public deserializeAs_PrismSubareaEmptyInfo(param1: ICustomDataInput): void {
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSubareaEmptyInfo.subAreaId.');
            }
            this.allianceId = param1.readVarUhInt();
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element of PrismSubareaEmptyInfo.allianceId.');
            }

        }
    }
    export class Shortcut implements INetworkType {
        public static ID: number = 369;

        slot: number;

        constructor() {
            this.slot = 0;
        }

        public getTypeId(): number {
            return Shortcut.ID;
        }

        public reset(): void {
            this.slot = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_Shortcut(param1);
        }

        public serializeAs_Shortcut(param1: ICustomDataOutput): void {
            if (this.slot < 0 || this.slot > 99) {
                throw new Error('Forbidden value (' + this.slot + ') on element slot.');
            }
            param1.writeByte(this.slot);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_Shortcut(param1);
        }

        public deserializeAs_Shortcut(param1: ICustomDataInput): void {
            this.slot = param1.readByte();
            if (this.slot < 0 || this.slot > 99) {
                throw new Error('Forbidden value (' + this.slot + ') on element of Shortcut.slot.');
            }

        }
    }
    export class ShortcutEmote extends Shortcut implements INetworkType {
        public static ID: number = 389;

        emoteId: number;

        constructor() {
            this.emoteId = 0;
            super();
        }

        public getTypeId(): number {
            return ShortcutEmote.ID;
        }

        public reset(): void {
            this.emoteId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ShortcutEmote(param1);
        }

        public serializeAs_ShortcutEmote(param1: ICustomDataOutput): void {
            super.serializeAs_Shortcut(param1);
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
            }
            param1.writeByte(this.emoteId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ShortcutEmote(param1);
        }

        public deserializeAs_ShortcutEmote(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.emoteId = param1.readUnsignedByte();
            if (this.emoteId < 0 || this.emoteId > 255) {
                throw new Error('Forbidden value (' + this.emoteId + ') on element of ShortcutEmote.emoteId.');
            }

        }
    }
    export class ShortcutObject extends Shortcut implements INetworkType {
        public static ID: number = 367;



        constructor() {

            super();
        }

        public getTypeId(): number {
            return ShortcutObject.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ShortcutObject(param1);
        }

        public serializeAs_ShortcutObject(param1: ICustomDataOutput): void {
            super.serializeAs_Shortcut(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ShortcutObject(param1);
        }

        public deserializeAs_ShortcutObject(param1: ICustomDataInput): void {
            super.deserialize(param1);

        }
    }
    export class ShortcutObjectIdolsPreset extends ShortcutObject implements INetworkType {
        public static ID: number = 492;

        presetId: number;

        constructor() {
            this.presetId = 0;
            super();
        }

        public getTypeId(): number {
            return ShortcutObjectIdolsPreset.ID;
        }

        public reset(): void {
            this.presetId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ShortcutObjectIdolsPreset(param1);
        }

        public serializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataOutput): void {
            super.serializeAs_ShortcutObject(param1);
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
            }
            param1.writeByte(this.presetId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ShortcutObjectIdolsPreset(param1);
        }

        public deserializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of ShortcutObjectIdolsPreset.presetId.');
            }

        }
    }
    export class ShortcutObjectItem extends ShortcutObject implements INetworkType {
        public static ID: number = 371;

        itemUID: number;
        itemGID: number;

        constructor() {
            this.itemUID = 0;
            this.itemGID = 0;
            super();
        }

        public getTypeId(): number {
            return ShortcutObjectItem.ID;
        }

        public reset(): void {
            this.itemUID = 0;
            this.itemGID = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ShortcutObjectItem(param1);
        }

        public serializeAs_ShortcutObjectItem(param1: ICustomDataOutput): void {
            super.serializeAs_ShortcutObject(param1);
            param1.writeInt(this.itemUID);
            param1.writeInt(this.itemGID);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ShortcutObjectItem(param1);
        }

        public deserializeAs_ShortcutObjectItem(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.itemUID = param1.readInt();
            this.itemGID = param1.readInt();

        }
    }
    export class ShortcutObjectPreset extends ShortcutObject implements INetworkType {
        public static ID: number = 370;

        presetId: number;

        constructor() {
            this.presetId = 0;
            super();
        }

        public getTypeId(): number {
            return ShortcutObjectPreset.ID;
        }

        public reset(): void {
            this.presetId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ShortcutObjectPreset(param1);
        }

        public serializeAs_ShortcutObjectPreset(param1: ICustomDataOutput): void {
            super.serializeAs_ShortcutObject(param1);
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
            }
            param1.writeByte(this.presetId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ShortcutObjectPreset(param1);
        }

        public deserializeAs_ShortcutObjectPreset(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.presetId = param1.readByte();
            if (this.presetId < 0) {
                throw new Error('Forbidden value (' + this.presetId + ') on element of ShortcutObjectPreset.presetId.');
            }

        }
    }
    export class ShortcutSmiley extends Shortcut implements INetworkType {
        public static ID: number = 388;

        smileyId: number;

        constructor() {
            this.smileyId = 0;
            super();
        }

        public getTypeId(): number {
            return ShortcutSmiley.ID;
        }

        public reset(): void {
            this.smileyId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ShortcutSmiley(param1);
        }

        public serializeAs_ShortcutSmiley(param1: ICustomDataOutput): void {
            super.serializeAs_Shortcut(param1);
            if (this.smileyId < 0) {
                throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
            }
            param1.writeVarShort(this.smileyId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ShortcutSmiley(param1);
        }

        public deserializeAs_ShortcutSmiley(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.smileyId = param1.readVarUhShort();
            if (this.smileyId < 0) {
                throw new Error('Forbidden value (' + this.smileyId + ') on element of ShortcutSmiley.smileyId.');
            }

        }
    }
    export class ShortcutSpell extends Shortcut implements INetworkType {
        public static ID: number = 368;

        spellId: number;

        constructor() {
            this.spellId = 0;
            super();
        }

        public getTypeId(): number {
            return ShortcutSpell.ID;
        }

        public reset(): void {
            this.spellId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ShortcutSpell(param1);
        }

        public serializeAs_ShortcutSpell(param1: ICustomDataOutput): void {
            super.serializeAs_Shortcut(param1);
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
            }
            param1.writeVarShort(this.spellId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ShortcutSpell(param1);
        }

        public deserializeAs_ShortcutSpell(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.spellId = param1.readVarUhShort();
            if (this.spellId < 0) {
                throw new Error('Forbidden value (' + this.spellId + ') on element of ShortcutSpell.spellId.');
            }

        }
    }
    export class AbstractSocialGroupInfos implements INetworkType {
        public static ID: number = 416;



        constructor() {

        }

        public getTypeId(): number {
            return AbstractSocialGroupInfos.ID;
        }

        public reset(): void {

        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AbstractSocialGroupInfos(param1);
        }

        public serializeAs_AbstractSocialGroupInfos(param1: ICustomDataOutput): void {

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AbstractSocialGroupInfos(param1);
        }

        public deserializeAs_AbstractSocialGroupInfos(param1: ICustomDataInput): void {

        }
    }
    export class AllianceFactSheetInformations extends AllianceInformations implements INetworkType {
        public static ID: number = 421;

        creationDate: number;

        constructor() {
            this.creationDate = 0;
            super();
        }

        public getTypeId(): number {
            return AllianceFactSheetInformations.ID;
        }

        public reset(): void {
            this.creationDate = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AllianceFactSheetInformations(param1);
        }

        public serializeAs_AllianceFactSheetInformations(param1: ICustomDataOutput): void {
            super.serializeAs_AllianceInformations(param1);
            if (this.creationDate < 0) {
                throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
            }
            param1.writeInt(this.creationDate);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AllianceFactSheetInformations(param1);
        }

        public deserializeAs_AllianceFactSheetInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.creationDate = param1.readInt();
            if (this.creationDate < 0) {
                throw new Error('Forbidden value (' + this.creationDate + ') on element of AllianceFactSheetInformations.creationDate.');
            }

        }
    }
    export class AllianceVersatileInformations implements INetworkType {
        public static ID: number = 432;

        allianceId: number;
        nbGuilds: number;
        nbMembers: number;
        nbSubarea: number;

        constructor() {
            this.allianceId = 0;
            this.nbGuilds = 0;
            this.nbMembers = 0;
            this.nbSubarea = 0;
        }

        public getTypeId(): number {
            return AllianceVersatileInformations.ID;
        }

        public reset(): void {
            this.allianceId = 0;
            this.nbGuilds = 0;
            this.nbMembers = 0;
            this.nbSubarea = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AllianceVersatileInformations(param1);
        }

        public serializeAs_AllianceVersatileInformations(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AllianceVersatileInformations(param1);
        }

        public deserializeAs_AllianceVersatileInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class AlliancedGuildFactSheetInformations extends GuildInformations implements INetworkType {
        public static ID: number = 422;

        allianceInfos: BasicNamedAllianceInformations;

        constructor() {
            this.allianceInfos = new BasicNamedAllianceInformations();
            super();
        }

        public getTypeId(): number {
            return AlliancedGuildFactSheetInformations.ID;
        }

        public reset(): void {
            this.allianceInfos = new BasicNamedAllianceInformations();
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_AlliancedGuildFactSheetInformations(param1);
        }

        public serializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GuildInformations(param1);
            this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_AlliancedGuildFactSheetInformations(param1);
        }

        public deserializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceInfos = new BasicNamedAllianceInformations();
            this.allianceInfos.deserialize(param1);

        }
    }
    export class GuildFactSheetInformations extends GuildInformations implements INetworkType {
        public static ID: number = 424;

        leaderId: number;
        guildLevel: number;
        nbMembers: number;

        constructor() {
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
            super();
        }

        public getTypeId(): number {
            return GuildFactSheetInformations.ID;
        }

        public reset(): void {
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildFactSheetInformations(param1);
        }

        public serializeAs_GuildFactSheetInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GuildInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildFactSheetInformations(param1);
        }

        public deserializeAs_GuildFactSheetInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class GuildInAllianceVersatileInformations extends GuildVersatileInformations implements INetworkType {
        public static ID: number = 437;

        allianceId: number;

        constructor() {
            this.allianceId = 0;
            super();
        }

        public getTypeId(): number {
            return GuildInAllianceVersatileInformations.ID;
        }

        public reset(): void {
            this.allianceId = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildInAllianceVersatileInformations(param1);
        }

        public serializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GuildVersatileInformations(param1);
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
            }
            param1.writeVarInt(this.allianceId);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildInAllianceVersatileInformations(param1);
        }

        public deserializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.allianceId = param1.readVarUhInt();
            if (this.allianceId < 0) {
                throw new Error('Forbidden value (' + this.allianceId + ') on element of GuildInAllianceVersatileInformations.allianceId.');
            }

        }
    }
    export class GuildInsiderFactSheetInformations extends GuildFactSheetInformations implements INetworkType {
        public static ID: number = 423;

        leaderName: string;
        nbConnectedMembers: number;
        nbTaxCollectors: number;
        lastActivity: number;
        enabled: boolean;

        constructor() {
            this.leaderName = '';
            this.nbConnectedMembers = 0;
            this.nbTaxCollectors = 0;
            this.lastActivity = 0;
            this.enabled = false;
            super();
        }

        public getTypeId(): number {
            return GuildInsiderFactSheetInformations.ID;
        }

        public reset(): void {
            this.leaderName = '';
            this.nbConnectedMembers = 0;
            this.nbTaxCollectors = 0;
            this.lastActivity = 0;
            this.enabled = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildInsiderFactSheetInformations(param1);
        }

        public serializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataOutput): void {
            super.serializeAs_GuildFactSheetInformations(param1);
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildInsiderFactSheetInformations(param1);
        }

        public deserializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataInput): void {
            super.deserialize(param1);
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

        }
    }
    export class GuildVersatileInformations implements INetworkType {
        public static ID: number = 435;

        guildId: number;
        leaderId: number;
        guildLevel: number;
        nbMembers: number;

        constructor() {
            this.guildId = 0;
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
        }

        public getTypeId(): number {
            return GuildVersatileInformations.ID;
        }

        public reset(): void {
            this.guildId = 0;
            this.leaderId = 0;
            this.guildLevel = 0;
            this.nbMembers = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_GuildVersatileInformations(param1);
        }

        public serializeAs_GuildVersatileInformations(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_GuildVersatileInformations(param1);
        }

        public deserializeAs_GuildVersatileInformations(param1: ICustomDataInput): void {
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

        }
    }
    export class StartupActionAddObject implements INetworkType {
        public static ID: number = 52;

        uid: number;
        title: string;
        text: string;
        descUrl: string;
        pictureUrl: string;
        items: ObjectItemInformationWithQuantity[];

        constructor() {
            this.uid = 0;
            this.title = '';
            this.text = '';
            this.descUrl = '';
            this.pictureUrl = '';
            this.items = [];
        }

        public getTypeId(): number {
            return StartupActionAddObject.ID;
        }

        public reset(): void {
            this.uid = 0;
            this.title = '';
            this.text = '';
            this.descUrl = '';
            this.pictureUrl = '';
            this.items = [];
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_StartupActionAddObject(param1);
        }

        public serializeAs_StartupActionAddObject(param1: ICustomDataOutput): void {
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element uid.');
            }
            param1.writeInt(this.uid);
            param1.writeUTF(this.title);
            param1.writeUTF(this.text);
            param1.writeUTF(this.descUrl);
            param1.writeUTF(this.pictureUrl);
            param1.writeShort(this.items.length);
            var _loc2_: number = 0;
            while (_loc2_ < this.items.length) {
                (this.items[_loc2_]).serializeAs_ObjectItemInformationWithQuantity(param1);
                _loc2_++;
            }

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_StartupActionAddObject(param1);
        }

        public deserializeAs_StartupActionAddObject(param1: ICustomDataInput): void {
            var _loc4_: ObjectItemInformationWithQuantity = null;
            this.uid = param1.readInt();
            if (this.uid < 0) {
                throw new Error('Forbidden value (' + this.uid + ') on element of StartupActionAddObject.uid.');
            }
            this.title = param1.readUTF();
            this.text = param1.readUTF();
            this.descUrl = param1.readUTF();
            this.pictureUrl = param1.readUTF();
            var _loc2_: number = param1.readUnsignedShort();
            var _loc3_: number = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new ObjectItemInformationWithQuantity();
                _loc4_.deserialize(param1);
                this.items.push(_loc4_);
                _loc3_++;
            }

        }
    }
    export class TrustCertificate implements INetworkType {
        public static ID: number = 377;

        id: number;
        hash: string;

        constructor() {
            this.id = 0;
            this.hash = '';
        }

        public getTypeId(): number {
            return TrustCertificate.ID;
        }

        public reset(): void {
            this.id = 0;
            this.hash = '';
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_TrustCertificate(param1);
        }

        public serializeAs_TrustCertificate(param1: ICustomDataOutput): void {
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element id.');
            }
            param1.writeInt(this.id);
            param1.writeUTF(this.hash);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_TrustCertificate(param1);
        }

        public deserializeAs_TrustCertificate(param1: ICustomDataInput): void {
            this.id = param1.readInt();
            if (this.id < 0) {
                throw new Error('Forbidden value (' + this.id + ') on element of TrustCertificate.id.');
            }
            this.hash = param1.readUTF();

        }
    }
    export class ContentPart implements INetworkType {
        public static ID: number = 350;

        id: string;
        state: number;

        constructor() {
            this.id = '';
            this.state = 0;
        }

        public getTypeId(): number {
            return ContentPart.ID;
        }

        public reset(): void {
            this.id = '';
            this.state = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_ContentPart(param1);
        }

        public serializeAs_ContentPart(param1: ICustomDataOutput): void {
            param1.writeUTF(this.id);
            param1.writeByte(this.state);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_ContentPart(param1);
        }

        public deserializeAs_ContentPart(param1: ICustomDataInput): void {
            this.id = param1.readUTF();
            this.state = param1.readByte();
            if (this.state < 0) {
                throw new Error('Forbidden value (' + this.state + ') on element of ContentPart.state.');
            }

        }
    }
    export class Version implements INetworkType {
        public static ID: number = 11;

        major: number;
        minor: number;
        release: number;
        revision: number;
        patch: number;
        buildType: number;

        constructor() {
            this.major = 0;
            this.minor = 0;
            this.release = 0;
            this.revision = 0;
            this.patch = 0;
            this.buildType = 0;
        }

        public getTypeId(): number {
            return Version.ID;
        }

        public reset(): void {
            this.major = 0;
            this.minor = 0;
            this.release = 0;
            this.revision = 0;
            this.patch = 0;
            this.buildType = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_Version(param1);
        }

        public serializeAs_Version(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_Version(param1);
        }

        public deserializeAs_Version(param1: ICustomDataInput): void {
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

        }
    }
    export class VersionExtended extends Version implements INetworkType {
        public static ID: number = 393;

        install: number;
        technology: number;

        constructor() {
            this.install = 0;
            this.technology = 0;
            super();
        }

        public getTypeId(): number {
            return VersionExtended.ID;
        }

        public reset(): void {
            this.install = 0;
            this.technology = 0;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_VersionExtended(param1);
        }

        public serializeAs_VersionExtended(param1: ICustomDataOutput): void {
            super.serializeAs_Version(param1);
            param1.writeByte(this.install);
            param1.writeByte(this.technology);

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_VersionExtended(param1);
        }

        public deserializeAs_VersionExtended(param1: ICustomDataInput): void {
            super.deserialize(param1);
            this.install = param1.readByte();
            if (this.install < 0) {
                throw new Error('Forbidden value (' + this.install + ') on element of VersionExtended.install.');
            }
            this.technology = param1.readByte();
            if (this.technology < 0) {
                throw new Error('Forbidden value (' + this.technology + ') on element of VersionExtended.technology.');
            }

        }
    }
    export class KrosmasterFigure implements INetworkType {
        public static ID: number = 397;

        uid: string;
        figure: number;
        pedestal: number;
        bound: boolean;

        constructor() {
            this.uid = '';
            this.figure = 0;
            this.pedestal = 0;
            this.bound = false;
        }

        public getTypeId(): number {
            return KrosmasterFigure.ID;
        }

        public reset(): void {
            this.uid = '';
            this.figure = 0;
            this.pedestal = 0;
            this.bound = false;
        }

        public serialize(param1: ICustomDataOutput): void {
            this.serializeAs_KrosmasterFigure(param1);
        }

        public serializeAs_KrosmasterFigure(param1: ICustomDataOutput): void {
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

        }

        public deserialize(param1: ICustomDataInput): void {
            this.deserializeAs_KrosmasterFigure(param1);
        }

        public deserializeAs_KrosmasterFigure(param1: ICustomDataInput): void {
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

        }
    }
    export class MessageReceiver {
        private static _list: { [idx: number]: () => INetworkMessage };

        constructor() {
            MessageReceiver._list = {};
            MessageReceiver._list[AdminCommandMessage.ID] = () => { return new AdminCommandMessage(); };
            MessageReceiver._list[AdminQuietCommandMessage.ID] = () => { return new AdminQuietCommandMessage(); };
            MessageReceiver._list[ConsoleCommandsListMessage.ID] = () => { return new ConsoleCommandsListMessage(); };
            MessageReceiver._list[ConsoleMessage.ID] = () => { return new ConsoleMessage(); };
            MessageReceiver._list[NetworkDataContainerMessage.ID] = () => { return new NetworkDataContainerMessage(); };
            MessageReceiver._list[BasicPingMessage.ID] = () => { return new BasicPingMessage(); };
            MessageReceiver._list[BasicPongMessage.ID] = () => { return new BasicPongMessage(); };
            MessageReceiver._list[BasicStatMessage.ID] = () => { return new BasicStatMessage(); };
            MessageReceiver._list[CredentialsAcknowledgementMessage.ID] = () => { return new CredentialsAcknowledgementMessage(); };
            MessageReceiver._list[HelloConnectMessage.ID] = () => { return new HelloConnectMessage(); };
            MessageReceiver._list[IdentificationAccountForceMessage.ID] = () => { return new IdentificationAccountForceMessage(); };
            MessageReceiver._list[IdentificationFailedBannedMessage.ID] = () => { return new IdentificationFailedBannedMessage(); };
            MessageReceiver._list[IdentificationFailedForBadVersionMessage.ID] = () => { return new IdentificationFailedForBadVersionMessage(); };
            MessageReceiver._list[IdentificationFailedMessage.ID] = () => { return new IdentificationFailedMessage(); };
            MessageReceiver._list[IdentificationMessage.ID] = () => { return new IdentificationMessage(); };
            MessageReceiver._list[IdentificationSuccessMessage.ID] = () => { return new IdentificationSuccessMessage(); };
            MessageReceiver._list[IdentificationSuccessWithLoginTokenMessage.ID] = () => { return new IdentificationSuccessWithLoginTokenMessage(); };
            MessageReceiver._list[SelectedServerDataExtendedMessage.ID] = () => { return new SelectedServerDataExtendedMessage(); };
            MessageReceiver._list[SelectedServerDataMessage.ID] = () => { return new SelectedServerDataMessage(); };
            MessageReceiver._list[SelectedServerRefusedMessage.ID] = () => { return new SelectedServerRefusedMessage(); };
            MessageReceiver._list[ServerSelectionMessage.ID] = () => { return new ServerSelectionMessage(); };
            MessageReceiver._list[ServerStatusUpdateMessage.ID] = () => { return new ServerStatusUpdateMessage(); };
            MessageReceiver._list[ServersListMessage.ID] = () => { return new ServersListMessage(); };
            MessageReceiver._list[AccountLinkRequiredMessage.ID] = () => { return new AccountLinkRequiredMessage(); };
            MessageReceiver._list[NicknameAcceptedMessage.ID] = () => { return new NicknameAcceptedMessage(); };
            MessageReceiver._list[NicknameChoiceRequestMessage.ID] = () => { return new NicknameChoiceRequestMessage(); };
            MessageReceiver._list[NicknameRefusedMessage.ID] = () => { return new NicknameRefusedMessage(); };
            MessageReceiver._list[NicknameRegistrationMessage.ID] = () => { return new NicknameRegistrationMessage(); };
            MessageReceiver._list[AcquaintanceSearchErrorMessage.ID] = () => { return new AcquaintanceSearchErrorMessage(); };
            MessageReceiver._list[AcquaintanceSearchMessage.ID] = () => { return new AcquaintanceSearchMessage(); };
            MessageReceiver._list[AcquaintanceServerListMessage.ID] = () => { return new AcquaintanceServerListMessage(); };
            MessageReceiver._list[DebugClearHighlightCellsMessage.ID] = () => { return new DebugClearHighlightCellsMessage(); };
            MessageReceiver._list[DebugHighlightCellsMessage.ID] = () => { return new DebugHighlightCellsMessage(); };
            MessageReceiver._list[DebugInClientMessage.ID] = () => { return new DebugInClientMessage(); };
            MessageReceiver._list[ProtocolRequired.ID] = () => { return new ProtocolRequired(); };
            MessageReceiver._list[LoginQueueStatusMessage.ID] = () => { return new LoginQueueStatusMessage(); };
            MessageReceiver._list[QueueStatusMessage.ID] = () => { return new QueueStatusMessage(); };
            MessageReceiver._list[TrustStatusMessage.ID] = () => { return new TrustStatusMessage(); };
            MessageReceiver._list[CheckFileMessage.ID] = () => { return new CheckFileMessage(); };
            MessageReceiver._list[CheckFileRequestMessage.ID] = () => { return new CheckFileRequestMessage(); };
            MessageReceiver._list[CheckIntegrityMessage.ID] = () => { return new CheckIntegrityMessage(); };
            MessageReceiver._list[ClientKeyMessage.ID] = () => { return new ClientKeyMessage(); };
            MessageReceiver._list[RawDataMessage.ID] = () => { return new RawDataMessage(); };
            MessageReceiver._list[SystemMessageDisplayMessage.ID] = () => { return new SystemMessageDisplayMessage(); };
            MessageReceiver._list[DownloadCurrentSpeedMessage.ID] = () => { return new DownloadCurrentSpeedMessage(); };
            MessageReceiver._list[DownloadErrorMessage.ID] = () => { return new DownloadErrorMessage(); };
            MessageReceiver._list[DownloadGetCurrentSpeedRequestMessage.ID] = () => { return new DownloadGetCurrentSpeedRequestMessage(); };
            MessageReceiver._list[DownloadPartMessage.ID] = () => { return new DownloadPartMessage(); };
            MessageReceiver._list[DownloadSetSpeedRequestMessage.ID] = () => { return new DownloadSetSpeedRequestMessage(); };
            MessageReceiver._list[GetPartInfoMessage.ID] = () => { return new GetPartInfoMessage(); };
            MessageReceiver._list[GetPartsListMessage.ID] = () => { return new GetPartsListMessage(); };
            MessageReceiver._list[PartInfoMessage.ID] = () => { return new PartInfoMessage(); };
            MessageReceiver._list[PartsListMessage.ID] = () => { return new PartsListMessage(); };
            MessageReceiver._list[MailStatusMessage.ID] = () => { return new MailStatusMessage(); };
            MessageReceiver._list[NewMailMessage.ID] = () => { return new NewMailMessage(); };
            MessageReceiver._list[KrosmasterAuthTokenErrorMessage.ID] = () => { return new KrosmasterAuthTokenErrorMessage(); };
            MessageReceiver._list[KrosmasterAuthTokenMessage.ID] = () => { return new KrosmasterAuthTokenMessage(); };
            MessageReceiver._list[KrosmasterAuthTokenRequestMessage.ID] = () => { return new KrosmasterAuthTokenRequestMessage(); };
            MessageReceiver._list[KrosmasterInventoryErrorMessage.ID] = () => { return new KrosmasterInventoryErrorMessage(); };
            MessageReceiver._list[KrosmasterInventoryMessage.ID] = () => { return new KrosmasterInventoryMessage(); };
            MessageReceiver._list[KrosmasterInventoryRequestMessage.ID] = () => { return new KrosmasterInventoryRequestMessage(); };
            MessageReceiver._list[KrosmasterPlayingStatusMessage.ID] = () => { return new KrosmasterPlayingStatusMessage(); };
            MessageReceiver._list[KrosmasterTransferMessage.ID] = () => { return new KrosmasterTransferMessage(); };
            MessageReceiver._list[KrosmasterTransferRequestMessage.ID] = () => { return new KrosmasterTransferRequestMessage(); };
            MessageReceiver._list[ClientYouAreDrunkMessage.ID] = () => { return new ClientYouAreDrunkMessage(); };
        }

        public static parse(param1: ICustomDataInput, param2: number, param3: number): INetworkMessage {
            let _loc4_ = MessageReceiver._list[param2];
            if (!_loc4_) {
                console.log('Unknown packet received (ID ' + param2 + ', length ' + param3 + ')');
                return null;
            }
            var _loc5_: INetworkMessage = _loc4_();
            _loc5_.unpack(param1, param3);
            return _loc5_;
        }
    }

    export class ProtocolTypeManager {
        private static _list: { [idx: number]: () => INetworkType };

        constructor() {
            ProtocolTypeManager._list = {};
            ProtocolTypeManager._list[StatisticData.ID] = () => { return new StatisticData(); };
            ProtocolTypeManager._list[StatisticDataBoolean.ID] = () => { return new StatisticDataBoolean(); };
            ProtocolTypeManager._list[StatisticDataByte.ID] = () => { return new StatisticDataByte(); };
            ProtocolTypeManager._list[StatisticDataInt.ID] = () => { return new StatisticDataInt(); };
            ProtocolTypeManager._list[StatisticDataShort.ID] = () => { return new StatisticDataShort(); };
            ProtocolTypeManager._list[StatisticDataString.ID] = () => { return new StatisticDataString(); };
            ProtocolTypeManager._list[GameServerInformations.ID] = () => { return new GameServerInformations(); };
            ProtocolTypeManager._list[Achievement.ID] = () => { return new Achievement(); };
            ProtocolTypeManager._list[AchievementObjective.ID] = () => { return new AchievementObjective(); };
            ProtocolTypeManager._list[AchievementRewardable.ID] = () => { return new AchievementRewardable(); };
            ProtocolTypeManager._list[AchievementStartedObjective.ID] = () => { return new AchievementStartedObjective(); };
            ProtocolTypeManager._list[FightDispellableEffectExtendedInformations.ID] = () => { return new FightDispellableEffectExtendedInformations(); };
            ProtocolTypeManager._list[AbstractFightDispellableEffect.ID] = () => { return new AbstractFightDispellableEffect(); };
            ProtocolTypeManager._list[FightTemporaryBoostEffect.ID] = () => { return new FightTemporaryBoostEffect(); };
            ProtocolTypeManager._list[FightTemporaryBoostStateEffect.ID] = () => { return new FightTemporaryBoostStateEffect(); };
            ProtocolTypeManager._list[FightTemporaryBoostWeaponDamagesEffect.ID] = () => { return new FightTemporaryBoostWeaponDamagesEffect(); };
            ProtocolTypeManager._list[FightTemporarySpellBoostEffect.ID] = () => { return new FightTemporarySpellBoostEffect(); };
            ProtocolTypeManager._list[FightTemporarySpellImmunityEffect.ID] = () => { return new FightTemporarySpellImmunityEffect(); };
            ProtocolTypeManager._list[FightTriggeredEffect.ID] = () => { return new FightTriggeredEffect(); };
            ProtocolTypeManager._list[GameActionMark.ID] = () => { return new GameActionMark(); };
            ProtocolTypeManager._list[GameActionMarkedCell.ID] = () => { return new GameActionMarkedCell(); };
            ProtocolTypeManager._list[ServerSessionConstant.ID] = () => { return new ServerSessionConstant(); };
            ProtocolTypeManager._list[ServerSessionConstantInteger.ID] = () => { return new ServerSessionConstantInteger(); };
            ProtocolTypeManager._list[ServerSessionConstantLong.ID] = () => { return new ServerSessionConstantLong(); };
            ProtocolTypeManager._list[ServerSessionConstantString.ID] = () => { return new ServerSessionConstantString(); };
            ProtocolTypeManager._list[AbstractCharacterInformation.ID] = () => { return new AbstractCharacterInformation(); };
            ProtocolTypeManager._list[CharacterMinimalAllianceInformations.ID] = () => { return new CharacterMinimalAllianceInformations(); };
            ProtocolTypeManager._list[CharacterMinimalGuildInformations.ID] = () => { return new CharacterMinimalGuildInformations(); };
            ProtocolTypeManager._list[CharacterMinimalInformations.ID] = () => { return new CharacterMinimalInformations(); };
            ProtocolTypeManager._list[CharacterMinimalPlusLookAndGradeInformations.ID] = () => { return new CharacterMinimalPlusLookAndGradeInformations(); };
            ProtocolTypeManager._list[CharacterMinimalPlusLookInformations.ID] = () => { return new CharacterMinimalPlusLookInformations(); };
            ProtocolTypeManager._list[ActorAlignmentInformations.ID] = () => { return new ActorAlignmentInformations(); };
            ProtocolTypeManager._list[ActorExtendedAlignmentInformations.ID] = () => { return new ActorExtendedAlignmentInformations(); };
            ProtocolTypeManager._list[CharacterBaseCharacteristic.ID] = () => { return new CharacterBaseCharacteristic(); };
            ProtocolTypeManager._list[CharacterCharacteristicsInformations.ID] = () => { return new CharacterCharacteristicsInformations(); };
            ProtocolTypeManager._list[CharacterSpellModification.ID] = () => { return new CharacterSpellModification(); };
            ProtocolTypeManager._list[AbstractCharacterToRefurbishInformation.ID] = () => { return new AbstractCharacterToRefurbishInformation(); };
            ProtocolTypeManager._list[CharacterBaseInformations.ID] = () => { return new CharacterBaseInformations(); };
            ProtocolTypeManager._list[CharacterHardcoreOrEpicInformations.ID] = () => { return new CharacterHardcoreOrEpicInformations(); };
            ProtocolTypeManager._list[CharacterRemodelingInformation.ID] = () => { return new CharacterRemodelingInformation(); };
            ProtocolTypeManager._list[CharacterToRecolorInformation.ID] = () => { return new CharacterToRecolorInformation(); };
            ProtocolTypeManager._list[CharacterToRelookInformation.ID] = () => { return new CharacterToRelookInformation(); };
            ProtocolTypeManager._list[CharacterToRemodelInformations.ID] = () => { return new CharacterToRemodelInformations(); };
            ProtocolTypeManager._list[RemodelingInformation.ID] = () => { return new RemodelingInformation(); };
            ProtocolTypeManager._list[ActorRestrictionsInformations.ID] = () => { return new ActorRestrictionsInformations(); };
            ProtocolTypeManager._list[PlayerStatus.ID] = () => { return new PlayerStatus(); };
            ProtocolTypeManager._list[PlayerStatusExtended.ID] = () => { return new PlayerStatusExtended(); };
            ProtocolTypeManager._list[ActorOrientation.ID] = () => { return new ActorOrientation(); };
            ProtocolTypeManager._list[EntityDispositionInformations.ID] = () => { return new EntityDispositionInformations(); };
            ProtocolTypeManager._list[EntityMovementInformations.ID] = () => { return new EntityMovementInformations(); };
            ProtocolTypeManager._list[FightEntityDispositionInformations.ID] = () => { return new FightEntityDispositionInformations(); };
            ProtocolTypeManager._list[GameContextActorInformations.ID] = () => { return new GameContextActorInformations(); };
            ProtocolTypeManager._list[GameRolePlayTaxCollectorInformations.ID] = () => { return new GameRolePlayTaxCollectorInformations(); };
            ProtocolTypeManager._list[IdentifiedEntityDispositionInformations.ID] = () => { return new IdentifiedEntityDispositionInformations(); };
            ProtocolTypeManager._list[MapCoordinates.ID] = () => { return new MapCoordinates(); };
            ProtocolTypeManager._list[MapCoordinatesAndId.ID] = () => { return new MapCoordinatesAndId(); };
            ProtocolTypeManager._list[MapCoordinatesExtended.ID] = () => { return new MapCoordinatesExtended(); };
            ProtocolTypeManager._list[TaxCollectorStaticExtendedInformations.ID] = () => { return new TaxCollectorStaticExtendedInformations(); };
            ProtocolTypeManager._list[TaxCollectorStaticInformations.ID] = () => { return new TaxCollectorStaticInformations(); };
            ProtocolTypeManager._list[AbstractFightTeamInformations.ID] = () => { return new AbstractFightTeamInformations(); };
            ProtocolTypeManager._list[FightAllianceTeamInformations.ID] = () => { return new FightAllianceTeamInformations(); };
            ProtocolTypeManager._list[FightCommonInformations.ID] = () => { return new FightCommonInformations(); };
            ProtocolTypeManager._list[FightExternalInformations.ID] = () => { return new FightExternalInformations(); };
            ProtocolTypeManager._list[FightLoot.ID] = () => { return new FightLoot(); };
            ProtocolTypeManager._list[FightOptionsInformations.ID] = () => { return new FightOptionsInformations(); };
            ProtocolTypeManager._list[FightResultAdditionalData.ID] = () => { return new FightResultAdditionalData(); };
            ProtocolTypeManager._list[FightResultExperienceData.ID] = () => { return new FightResultExperienceData(); };
            ProtocolTypeManager._list[FightResultFighterListEntry.ID] = () => { return new FightResultFighterListEntry(); };
            ProtocolTypeManager._list[FightResultListEntry.ID] = () => { return new FightResultListEntry(); };
            ProtocolTypeManager._list[FightResultMutantListEntry.ID] = () => { return new FightResultMutantListEntry(); };
            ProtocolTypeManager._list[FightResultPlayerListEntry.ID] = () => { return new FightResultPlayerListEntry(); };
            ProtocolTypeManager._list[FightResultPvpData.ID] = () => { return new FightResultPvpData(); };
            ProtocolTypeManager._list[FightResultTaxCollectorListEntry.ID] = () => { return new FightResultTaxCollectorListEntry(); };
            ProtocolTypeManager._list[FightTeamInformations.ID] = () => { return new FightTeamInformations(); };
            ProtocolTypeManager._list[FightTeamLightInformations.ID] = () => { return new FightTeamLightInformations(); };
            ProtocolTypeManager._list[FightTeamMemberCharacterInformations.ID] = () => { return new FightTeamMemberCharacterInformations(); };
            ProtocolTypeManager._list[FightTeamMemberCompanionInformations.ID] = () => { return new FightTeamMemberCompanionInformations(); };
            ProtocolTypeManager._list[FightTeamMemberInformations.ID] = () => { return new FightTeamMemberInformations(); };
            ProtocolTypeManager._list[FightTeamMemberMonsterInformations.ID] = () => { return new FightTeamMemberMonsterInformations(); };
            ProtocolTypeManager._list[FightTeamMemberTaxCollectorInformations.ID] = () => { return new FightTeamMemberTaxCollectorInformations(); };
            ProtocolTypeManager._list[FightTeamMemberWithAllianceCharacterInformations.ID] = () => { return new FightTeamMemberWithAllianceCharacterInformations(); };
            ProtocolTypeManager._list[GameFightAIInformations.ID] = () => { return new GameFightAIInformations(); };
            ProtocolTypeManager._list[GameFightCharacterInformations.ID] = () => { return new GameFightCharacterInformations(); };
            ProtocolTypeManager._list[GameFightCompanionInformations.ID] = () => { return new GameFightCompanionInformations(); };
            ProtocolTypeManager._list[GameFightFighterCompanionLightInformations.ID] = () => { return new GameFightFighterCompanionLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterInformations.ID] = () => { return new GameFightFighterInformations(); };
            ProtocolTypeManager._list[GameFightFighterLightInformations.ID] = () => { return new GameFightFighterLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterMonsterLightInformations.ID] = () => { return new GameFightFighterMonsterLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterNamedInformations.ID] = () => { return new GameFightFighterNamedInformations(); };
            ProtocolTypeManager._list[GameFightFighterNamedLightInformations.ID] = () => { return new GameFightFighterNamedLightInformations(); };
            ProtocolTypeManager._list[GameFightFighterTaxCollectorLightInformations.ID] = () => { return new GameFightFighterTaxCollectorLightInformations(); };
            ProtocolTypeManager._list[GameFightMinimalStats.ID] = () => { return new GameFightMinimalStats(); };
            ProtocolTypeManager._list[GameFightMinimalStatsPreparation.ID] = () => { return new GameFightMinimalStatsPreparation(); };
            ProtocolTypeManager._list[GameFightMonsterInformations.ID] = () => { return new GameFightMonsterInformations(); };
            ProtocolTypeManager._list[GameFightMonsterWithAlignmentInformations.ID] = () => { return new GameFightMonsterWithAlignmentInformations(); };
            ProtocolTypeManager._list[GameFightMutantInformations.ID] = () => { return new GameFightMutantInformations(); };
            ProtocolTypeManager._list[GameFightResumeSlaveInfo.ID] = () => { return new GameFightResumeSlaveInfo(); };
            ProtocolTypeManager._list[GameFightSpellCooldown.ID] = () => { return new GameFightSpellCooldown(); };
            ProtocolTypeManager._list[GameFightTaxCollectorInformations.ID] = () => { return new GameFightTaxCollectorInformations(); };
            ProtocolTypeManager._list[AllianceInformations.ID] = () => { return new AllianceInformations(); };
            ProtocolTypeManager._list[AlternativeMonstersInGroupLightInformations.ID] = () => { return new AlternativeMonstersInGroupLightInformations(); };
            ProtocolTypeManager._list[AtlasPointsInformations.ID] = () => { return new AtlasPointsInformations(); };
            ProtocolTypeManager._list[BasicAllianceInformations.ID] = () => { return new BasicAllianceInformations(); };
            ProtocolTypeManager._list[BasicGuildInformations.ID] = () => { return new BasicGuildInformations(); };
            ProtocolTypeManager._list[BasicNamedAllianceInformations.ID] = () => { return new BasicNamedAllianceInformations(); };
            ProtocolTypeManager._list[GameRolePlayActorInformations.ID] = () => { return new GameRolePlayActorInformations(); };
            ProtocolTypeManager._list[GameRolePlayCharacterInformations.ID] = () => { return new GameRolePlayCharacterInformations(); };
            ProtocolTypeManager._list[GameRolePlayGroupMonsterInformations.ID] = () => { return new GameRolePlayGroupMonsterInformations(); };
            ProtocolTypeManager._list[GameRolePlayGroupMonsterWaveInformations.ID] = () => { return new GameRolePlayGroupMonsterWaveInformations(); };
            ProtocolTypeManager._list[GameRolePlayHumanoidInformations.ID] = () => { return new GameRolePlayHumanoidInformations(); };
            ProtocolTypeManager._list[GameRolePlayMerchantInformations.ID] = () => { return new GameRolePlayMerchantInformations(); };
            ProtocolTypeManager._list[GameRolePlayMountInformations.ID] = () => { return new GameRolePlayMountInformations(); };
            ProtocolTypeManager._list[GameRolePlayMutantInformations.ID] = () => { return new GameRolePlayMutantInformations(); };
            ProtocolTypeManager._list[GameRolePlayNamedActorInformations.ID] = () => { return new GameRolePlayNamedActorInformations(); };
            ProtocolTypeManager._list[GameRolePlayNpcInformations.ID] = () => { return new GameRolePlayNpcInformations(); };
            ProtocolTypeManager._list[GameRolePlayNpcWithQuestInformations.ID] = () => { return new GameRolePlayNpcWithQuestInformations(); };
            ProtocolTypeManager._list[GameRolePlayPortalInformations.ID] = () => { return new GameRolePlayPortalInformations(); };
            ProtocolTypeManager._list[GameRolePlayPrismInformations.ID] = () => { return new GameRolePlayPrismInformations(); };
            ProtocolTypeManager._list[GameRolePlayTreasureHintInformations.ID] = () => { return new GameRolePlayTreasureHintInformations(); };
            ProtocolTypeManager._list[GroupMonsterStaticInformations.ID] = () => { return new GroupMonsterStaticInformations(); };
            ProtocolTypeManager._list[GroupMonsterStaticInformationsWithAlternatives.ID] = () => { return new GroupMonsterStaticInformationsWithAlternatives(); };
            ProtocolTypeManager._list[GuildInAllianceInformations.ID] = () => { return new GuildInAllianceInformations(); };
            ProtocolTypeManager._list[GuildInformations.ID] = () => { return new GuildInformations(); };
            ProtocolTypeManager._list[HumanInformations.ID] = () => { return new HumanInformations(); };
            ProtocolTypeManager._list[HumanOption.ID] = () => { return new HumanOption(); };
            ProtocolTypeManager._list[HumanOptionAlliance.ID] = () => { return new HumanOptionAlliance(); };
            ProtocolTypeManager._list[HumanOptionEmote.ID] = () => { return new HumanOptionEmote(); };
            ProtocolTypeManager._list[HumanOptionFollowers.ID] = () => { return new HumanOptionFollowers(); };
            ProtocolTypeManager._list[HumanOptionGuild.ID] = () => { return new HumanOptionGuild(); };
            ProtocolTypeManager._list[HumanOptionObjectUse.ID] = () => { return new HumanOptionObjectUse(); };
            ProtocolTypeManager._list[HumanOptionOrnament.ID] = () => { return new HumanOptionOrnament(); };
            ProtocolTypeManager._list[HumanOptionTitle.ID] = () => { return new HumanOptionTitle(); };
            ProtocolTypeManager._list[MonsterInGroupInformations.ID] = () => { return new MonsterInGroupInformations(); };
            ProtocolTypeManager._list[MonsterInGroupLightInformations.ID] = () => { return new MonsterInGroupLightInformations(); };
            ProtocolTypeManager._list[ObjectItemInRolePlay.ID] = () => { return new ObjectItemInRolePlay(); };
            ProtocolTypeManager._list[DecraftedItemStackInfo.ID] = () => { return new DecraftedItemStackInfo(); };
            ProtocolTypeManager._list[JobCrafterDirectoryEntryJobInfo.ID] = () => { return new JobCrafterDirectoryEntryJobInfo(); };
            ProtocolTypeManager._list[JobCrafterDirectoryEntryPlayerInfo.ID] = () => { return new JobCrafterDirectoryEntryPlayerInfo(); };
            ProtocolTypeManager._list[JobCrafterDirectoryListEntry.ID] = () => { return new JobCrafterDirectoryListEntry(); };
            ProtocolTypeManager._list[JobCrafterDirectorySettings.ID] = () => { return new JobCrafterDirectorySettings(); };
            ProtocolTypeManager._list[JobDescription.ID] = () => { return new JobDescription(); };
            ProtocolTypeManager._list[JobExperience.ID] = () => { return new JobExperience(); };
            ProtocolTypeManager._list[DungeonPartyFinderPlayer.ID] = () => { return new DungeonPartyFinderPlayer(); };
            ProtocolTypeManager._list[NamedPartyTeam.ID] = () => { return new NamedPartyTeam(); };
            ProtocolTypeManager._list[NamedPartyTeamWithOutcome.ID] = () => { return new NamedPartyTeamWithOutcome(); };
            ProtocolTypeManager._list[PartyGuestInformations.ID] = () => { return new PartyGuestInformations(); };
            ProtocolTypeManager._list[PartyInvitationMemberInformations.ID] = () => { return new PartyInvitationMemberInformations(); };
            ProtocolTypeManager._list[PartyMemberArenaInformations.ID] = () => { return new PartyMemberArenaInformations(); };
            ProtocolTypeManager._list[PartyMemberGeoPosition.ID] = () => { return new PartyMemberGeoPosition(); };
            ProtocolTypeManager._list[PartyMemberInformations.ID] = () => { return new PartyMemberInformations(); };
            ProtocolTypeManager._list[PartyCompanionBaseInformations.ID] = () => { return new PartyCompanionBaseInformations(); };
            ProtocolTypeManager._list[PartyCompanionMemberInformations.ID] = () => { return new PartyCompanionMemberInformations(); };
            ProtocolTypeManager._list[GameRolePlayNpcQuestFlag.ID] = () => { return new GameRolePlayNpcQuestFlag(); };
            ProtocolTypeManager._list[QuestActiveDetailedInformations.ID] = () => { return new QuestActiveDetailedInformations(); };
            ProtocolTypeManager._list[QuestActiveInformations.ID] = () => { return new QuestActiveInformations(); };
            ProtocolTypeManager._list[QuestObjectiveInformations.ID] = () => { return new QuestObjectiveInformations(); };
            ProtocolTypeManager._list[QuestObjectiveInformationsWithCompletion.ID] = () => { return new QuestObjectiveInformationsWithCompletion(); };
            ProtocolTypeManager._list[PortalInformation.ID] = () => { return new PortalInformation(); };
            ProtocolTypeManager._list[TreasureHuntFlag.ID] = () => { return new TreasureHuntFlag(); };
            ProtocolTypeManager._list[TreasureHuntStep.ID] = () => { return new TreasureHuntStep(); };
            ProtocolTypeManager._list[TreasureHuntStepDig.ID] = () => { return new TreasureHuntStepDig(); };
            ProtocolTypeManager._list[TreasureHuntStepFight.ID] = () => { return new TreasureHuntStepFight(); };
            ProtocolTypeManager._list[TreasureHuntStepFollowDirection.ID] = () => { return new TreasureHuntStepFollowDirection(); };
            ProtocolTypeManager._list[TreasureHuntStepFollowDirectionToHint.ID] = () => { return new TreasureHuntStepFollowDirectionToHint(); };
            ProtocolTypeManager._list[TreasureHuntStepFollowDirectionToPOI.ID] = () => { return new TreasureHuntStepFollowDirectionToPOI(); };
            ProtocolTypeManager._list[BidExchangerObjectInfo.ID] = () => { return new BidExchangerObjectInfo(); };
            ProtocolTypeManager._list[GoldItem.ID] = () => { return new GoldItem(); };
            ProtocolTypeManager._list[Item.ID] = () => { return new Item(); };
            ProtocolTypeManager._list[ObjectItem.ID] = () => { return new ObjectItem(); };
            ProtocolTypeManager._list[ObjectItemGenericQuantity.ID] = () => { return new ObjectItemGenericQuantity(); };
            ProtocolTypeManager._list[ObjectItemInformationWithQuantity.ID] = () => { return new ObjectItemInformationWithQuantity(); };
            ProtocolTypeManager._list[ObjectItemMinimalInformation.ID] = () => { return new ObjectItemMinimalInformation(); };
            ProtocolTypeManager._list[ObjectItemNotInContainer.ID] = () => { return new ObjectItemNotInContainer(); };
            ProtocolTypeManager._list[ObjectItemQuantity.ID] = () => { return new ObjectItemQuantity(); };
            ProtocolTypeManager._list[ObjectItemToSell.ID] = () => { return new ObjectItemToSell(); };
            ProtocolTypeManager._list[ObjectItemToSellInBid.ID] = () => { return new ObjectItemToSellInBid(); };
            ProtocolTypeManager._list[ObjectItemToSellInHumanVendorShop.ID] = () => { return new ObjectItemToSellInHumanVendorShop(); };
            ProtocolTypeManager._list[ObjectItemToSellInNpcShop.ID] = () => { return new ObjectItemToSellInNpcShop(); };
            ProtocolTypeManager._list[SellerBuyerDescriptor.ID] = () => { return new SellerBuyerDescriptor(); };
            ProtocolTypeManager._list[SpellItem.ID] = () => { return new SpellItem(); };
            ProtocolTypeManager._list[ObjectEffect.ID] = () => { return new ObjectEffect(); };
            ProtocolTypeManager._list[ObjectEffectCreature.ID] = () => { return new ObjectEffectCreature(); };
            ProtocolTypeManager._list[ObjectEffectDate.ID] = () => { return new ObjectEffectDate(); };
            ProtocolTypeManager._list[ObjectEffectDice.ID] = () => { return new ObjectEffectDice(); };
            ProtocolTypeManager._list[ObjectEffectDuration.ID] = () => { return new ObjectEffectDuration(); };
            ProtocolTypeManager._list[ObjectEffectInteger.ID] = () => { return new ObjectEffectInteger(); };
            ProtocolTypeManager._list[ObjectEffectLadder.ID] = () => { return new ObjectEffectLadder(); };
            ProtocolTypeManager._list[ObjectEffectMinMax.ID] = () => { return new ObjectEffectMinMax(); };
            ProtocolTypeManager._list[ObjectEffectMount.ID] = () => { return new ObjectEffectMount(); };
            ProtocolTypeManager._list[ObjectEffectString.ID] = () => { return new ObjectEffectString(); };
            ProtocolTypeManager._list[ProtectedEntityWaitingForHelpInfo.ID] = () => { return new ProtectedEntityWaitingForHelpInfo(); };
            ProtocolTypeManager._list[AbstractContactInformations.ID] = () => { return new AbstractContactInformations(); };
            ProtocolTypeManager._list[FriendInformations.ID] = () => { return new FriendInformations(); };
            ProtocolTypeManager._list[FriendOnlineInformations.ID] = () => { return new FriendOnlineInformations(); };
            ProtocolTypeManager._list[FriendSpouseInformations.ID] = () => { return new FriendSpouseInformations(); };
            ProtocolTypeManager._list[FriendSpouseOnlineInformations.ID] = () => { return new FriendSpouseOnlineInformations(); };
            ProtocolTypeManager._list[IgnoredInformations.ID] = () => { return new IgnoredInformations(); };
            ProtocolTypeManager._list[IgnoredOnlineInformations.ID] = () => { return new IgnoredOnlineInformations(); };
            ProtocolTypeManager._list[GuildEmblem.ID] = () => { return new GuildEmblem(); };
            ProtocolTypeManager._list[GuildMember.ID] = () => { return new GuildMember(); };
            ProtocolTypeManager._list[AdditionalTaxCollectorInformations.ID] = () => { return new AdditionalTaxCollectorInformations(); };
            ProtocolTypeManager._list[TaxCollectorBasicInformations.ID] = () => { return new TaxCollectorBasicInformations(); };
            ProtocolTypeManager._list[TaxCollectorComplementaryInformations.ID] = () => { return new TaxCollectorComplementaryInformations(); };
            ProtocolTypeManager._list[TaxCollectorFightersInformation.ID] = () => { return new TaxCollectorFightersInformation(); };
            ProtocolTypeManager._list[TaxCollectorGuildInformations.ID] = () => { return new TaxCollectorGuildInformations(); };
            ProtocolTypeManager._list[TaxCollectorInformations.ID] = () => { return new TaxCollectorInformations(); };
            ProtocolTypeManager._list[TaxCollectorLootInformations.ID] = () => { return new TaxCollectorLootInformations(); };
            ProtocolTypeManager._list[TaxCollectorWaitingForHelpInformations.ID] = () => { return new TaxCollectorWaitingForHelpInformations(); };
            ProtocolTypeManager._list[AccountHouseInformations.ID] = () => { return new AccountHouseInformations(); };
            ProtocolTypeManager._list[HouseInformations.ID] = () => { return new HouseInformations(); };
            ProtocolTypeManager._list[HouseInformationsExtended.ID] = () => { return new HouseInformationsExtended(); };
            ProtocolTypeManager._list[HouseInformationsForGuild.ID] = () => { return new HouseInformationsForGuild(); };
            ProtocolTypeManager._list[HouseInformationsForSell.ID] = () => { return new HouseInformationsForSell(); };
            ProtocolTypeManager._list[HouseInformationsInside.ID] = () => { return new HouseInformationsInside(); };
            ProtocolTypeManager._list[Idol.ID] = () => { return new Idol(); };
            ProtocolTypeManager._list[PartyIdol.ID] = () => { return new PartyIdol(); };
            ProtocolTypeManager._list[InteractiveElement.ID] = () => { return new InteractiveElement(); };
            ProtocolTypeManager._list[InteractiveElementNamedSkill.ID] = () => { return new InteractiveElementNamedSkill(); };
            ProtocolTypeManager._list[InteractiveElementSkill.ID] = () => { return new InteractiveElementSkill(); };
            ProtocolTypeManager._list[InteractiveElementWithAgeBonus.ID] = () => { return new InteractiveElementWithAgeBonus(); };
            ProtocolTypeManager._list[MapObstacle.ID] = () => { return new MapObstacle(); };
            ProtocolTypeManager._list[StatedElement.ID] = () => { return new StatedElement(); };
            ProtocolTypeManager._list[SkillActionDescription.ID] = () => { return new SkillActionDescription(); };
            ProtocolTypeManager._list[SkillActionDescriptionCollect.ID] = () => { return new SkillActionDescriptionCollect(); };
            ProtocolTypeManager._list[SkillActionDescriptionCraft.ID] = () => { return new SkillActionDescriptionCraft(); };
            ProtocolTypeManager._list[SkillActionDescriptionTimed.ID] = () => { return new SkillActionDescriptionTimed(); };
            ProtocolTypeManager._list[IdolsPreset.ID] = () => { return new IdolsPreset(); };
            ProtocolTypeManager._list[Preset.ID] = () => { return new Preset(); };
            ProtocolTypeManager._list[PresetItem.ID] = () => { return new PresetItem(); };
            ProtocolTypeManager._list[EntityLook.ID] = () => { return new EntityLook(); };
            ProtocolTypeManager._list[IndexedEntityLook.ID] = () => { return new IndexedEntityLook(); };
            ProtocolTypeManager._list[SubEntity.ID] = () => { return new SubEntity(); };
            ProtocolTypeManager._list[ItemDurability.ID] = () => { return new ItemDurability(); };
            ProtocolTypeManager._list[MountClientData.ID] = () => { return new MountClientData(); };
            ProtocolTypeManager._list[UpdateMountBoost.ID] = () => { return new UpdateMountBoost(); };
            ProtocolTypeManager._list[UpdateMountIntBoost.ID] = () => { return new UpdateMountIntBoost(); };
            ProtocolTypeManager._list[MountInformationsForPaddock.ID] = () => { return new MountInformationsForPaddock(); };
            ProtocolTypeManager._list[PaddockAbandonnedInformations.ID] = () => { return new PaddockAbandonnedInformations(); };
            ProtocolTypeManager._list[PaddockBuyableInformations.ID] = () => { return new PaddockBuyableInformations(); };
            ProtocolTypeManager._list[PaddockContentInformations.ID] = () => { return new PaddockContentInformations(); };
            ProtocolTypeManager._list[PaddockInformations.ID] = () => { return new PaddockInformations(); };
            ProtocolTypeManager._list[PaddockInformationsForSell.ID] = () => { return new PaddockInformationsForSell(); };
            ProtocolTypeManager._list[PaddockItem.ID] = () => { return new PaddockItem(); };
            ProtocolTypeManager._list[PaddockPrivateInformations.ID] = () => { return new PaddockPrivateInformations(); };
            ProtocolTypeManager._list[AllianceInsiderPrismInformation.ID] = () => { return new AllianceInsiderPrismInformation(); };
            ProtocolTypeManager._list[AlliancePrismInformation.ID] = () => { return new AlliancePrismInformation(); };
            ProtocolTypeManager._list[PrismFightersInformation.ID] = () => { return new PrismFightersInformation(); };
            ProtocolTypeManager._list[PrismGeolocalizedInformation.ID] = () => { return new PrismGeolocalizedInformation(); };
            ProtocolTypeManager._list[PrismInformation.ID] = () => { return new PrismInformation(); };
            ProtocolTypeManager._list[PrismSubareaEmptyInfo.ID] = () => { return new PrismSubareaEmptyInfo(); };
            ProtocolTypeManager._list[Shortcut.ID] = () => { return new Shortcut(); };
            ProtocolTypeManager._list[ShortcutEmote.ID] = () => { return new ShortcutEmote(); };
            ProtocolTypeManager._list[ShortcutObject.ID] = () => { return new ShortcutObject(); };
            ProtocolTypeManager._list[ShortcutObjectIdolsPreset.ID] = () => { return new ShortcutObjectIdolsPreset(); };
            ProtocolTypeManager._list[ShortcutObjectItem.ID] = () => { return new ShortcutObjectItem(); };
            ProtocolTypeManager._list[ShortcutObjectPreset.ID] = () => { return new ShortcutObjectPreset(); };
            ProtocolTypeManager._list[ShortcutSmiley.ID] = () => { return new ShortcutSmiley(); };
            ProtocolTypeManager._list[ShortcutSpell.ID] = () => { return new ShortcutSpell(); };
            ProtocolTypeManager._list[AbstractSocialGroupInfos.ID] = () => { return new AbstractSocialGroupInfos(); };
            ProtocolTypeManager._list[AllianceFactSheetInformations.ID] = () => { return new AllianceFactSheetInformations(); };
            ProtocolTypeManager._list[AllianceVersatileInformations.ID] = () => { return new AllianceVersatileInformations(); };
            ProtocolTypeManager._list[AlliancedGuildFactSheetInformations.ID] = () => { return new AlliancedGuildFactSheetInformations(); };
            ProtocolTypeManager._list[GuildFactSheetInformations.ID] = () => { return new GuildFactSheetInformations(); };
            ProtocolTypeManager._list[GuildInAllianceVersatileInformations.ID] = () => { return new GuildInAllianceVersatileInformations(); };
            ProtocolTypeManager._list[GuildInsiderFactSheetInformations.ID] = () => { return new GuildInsiderFactSheetInformations(); };
            ProtocolTypeManager._list[GuildVersatileInformations.ID] = () => { return new GuildVersatileInformations(); };
            ProtocolTypeManager._list[StartupActionAddObject.ID] = () => { return new StartupActionAddObject(); };
            ProtocolTypeManager._list[TrustCertificate.ID] = () => { return new TrustCertificate(); };
            ProtocolTypeManager._list[ContentPart.ID] = () => { return new ContentPart(); };
            ProtocolTypeManager._list[Version.ID] = () => { return new Version(); };
            ProtocolTypeManager._list[VersionExtended.ID] = () => { return new VersionExtended(); };
            ProtocolTypeManager._list[KrosmasterFigure.ID] = () => { return new KrosmasterFigure(); };
        }

        public static getInstance(networkType: any, param2: number): INetworkType {
            let _loc3_ = ProtocolTypeManager._list[param2];
            if (!_loc3_) {
                throw new Error('Type with id ' + param2 + ' is unknown.');
            }
            return _loc3_();
        }
    }
    export class Binary64 {
        low: number;
        high: number;

        constructor(low: number = 0, high: number = 0) {
            this.high = high;
            this.low = low;
        }

        div(n: number): number {
            var modHigh = 0;
            modHigh = (this.high % n);
            var mod = (((this.low % n) + (modHigh * 6)) % n);
            this.high = (this.high / n);
            var newLow = (((modHigh * 4294967296) + this.low) / n);
            this.high = (this.high + Number((newLow / 4294967296)));
            this.low = newLow;
            return mod;
        };

        mul(n: number): void {
            var newLow = (Number(this.low) * n);
            this.high = (this.high * n);
            this.high = (this.high + Number((newLow / 4294967296)));
            this.low = (this.low * n);
        };

        add(n: number): void {
            var newLow = (Number(this.low) + n);
            this.high = (this.high + Number((newLow / 4294967296)));
            this.low = newLow;
        };

        bitwiseNot(n: number): void {
            this.low = ~(this.low);
            this.high = ~(this.high);
        };
    }

    export class BooleanByteWrapper {
        static setFlag(param1?: number, param2?: number, param3?: boolean): number {
            switch (param2) {
                case 0:
                    if (param3) {
                        param1 = param1 | 1;
                    } else {
                        param1 = param1 & 255 - 1;
                    }
                    break;
                case 1:
                    if (param3) {
                        param1 = param1 | 2;
                    } else {
                        param1 = param1 & 255 - 2;
                    }
                    break;
                case 2:
                    if (param3) {
                        param1 = param1 | 4;
                    } else {
                        param1 = param1 & 255 - 4;
                    }
                    break;
                case 3:
                    if (param3) {
                        param1 = param1 | 8;
                    } else {
                        param1 = param1 & 255 - 8;
                    }
                    break;
                case 4:
                    if (param3) {
                        param1 = param1 | 16;
                    } else {
                        param1 = param1 & 255 - 16;
                    }
                    break;
                case 5:
                    if (param3) {
                        param1 = param1 | 32;
                    } else {
                        param1 = param1 & 255 - 32;
                    }
                    break;
                case 6:
                    if (param3) {
                        param1 = param1 | 64;
                    } else {
                        param1 = param1 & 255 - 64;
                    }
                    break;
                case 7:
                    if (param3) {
                        param1 = param1 | 128;
                    } else {
                        param1 = param1 & 255 - 128;
                    }
                    break;
                default:
                    throw new Error('Bytebox overflow.');
            }
            return param1;
        }

        static getFlag(param1: number, param2: number): boolean {
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
        }
    }
    export interface ICustomDataOutput {
        writeVarInt(param1: number): void;
        writeVarShort(param1: number): void;
        writeVarLong(param1: number): void;
        writeBytes(param1: ByteArray, param2?: number, param3?: number): void;
        writeBoolean(param1: boolean): void;
        writeByte(param1: number): void;
        writeShort(param1: number): void;
        writeInt(param1: number): void;
        writeUnsignedInt(param1: number): void;
        writeFloat(param1: number): void;
        writeDouble(param1: number): void;
        writeMultiByte(param1: string, param2: string): void;
        writeUTF(param1: string): void;
        writeUTFBytes(param1: string): void;
        writeObject(param1: any): void;
    }
    export interface ICustomDataInput {
        readVarInt(): number;
        readVarUhInt(): number;
        readVarShort(): number;
        readVarUhShort(): number;
        readVarLong(): number;
        readVarUhLong(): number;
        readBytes(param1: ByteArray, param2?: number, param3?: number): void;
        readBoolean(): boolean;
        readByte(): number;
        readUnsignedByte(): number;
        readShort(): number;
        readUnsignedShort(): number;
        readInt(): number;
        readUnsignedInt(): number;
        readFloat(): number;
        readDouble(): number;
        readMultiByte(param1: number, param2: string): string;
        readUTF(): string;
        readUTFBytes(param1: number): string;
        bytesAvailable: number;
        readObject(): any;
    }
    export class CustomDataWrapper implements ICustomDataOutput, ICustomDataInput {
        private static INT_SIZE: number = 32;
        private static SHORT_SIZE: number = 16;
        private static SHORT_MIN_VALUE: number = -32768;
        private static SHORT_MAX_VALUE: number = 32767;
        private static UNSIGNED_SHORT_MAX_VALUE: number = 65536;
        private static CHUNCK_BIT_SIZE: number = 7;
        private static MAX_ENCODING_LENGTH: number = Math.ceil(CustomDataWrapper.INT_SIZE / CustomDataWrapper.CHUNCK_BIT_SIZE);
        private static MASK_10000000: number = 128;
        private static MASK_01111111: number = 127;
        private _data: ByteArray;

        constructor(data: ByteArray) {
            this._data = data;
        }

        public set position(param1: number) {
            this._data.position = param1;
        }

        public get position(): number {
            return this._data.position;
        }

        public readVarInt(): number {
            var _loc4_: number = 0;
            var _loc1_: number = 0;
            var _loc2_: number = 0;
            var _loc3_: boolean = false;
            while (_loc2_ < CustomDataWrapper.INT_SIZE) {
                _loc4_ = this._data.readByte();
                _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                if (_loc2_ > 0) {
                    _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                } else {
                    _loc1_ = _loc1_ + (_loc4_ & CustomDataWrapper.MASK_01111111);
                }
                _loc2_ = _loc2_ + CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (!_loc3_) {
                    return _loc1_;
                }
            }
            throw new Error('Too much data');
        }

        public readVarUhInt(): number {
            return this.readVarInt();
        }

        public readVarShort(): number {
            var _loc4_: number = 0;
            var _loc1_: number = 0;
            var _loc2_: number = 0;
            var _loc3_: boolean = false;
            while (_loc2_ < CustomDataWrapper.SHORT_SIZE) {
                _loc4_ = this._data.readByte();
                _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                if (_loc2_ > 0) {
                    _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                } else {
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
        }

        public readVarUhShort(): number {
            return this.readVarShort();
        }

        public readVarLong(): number {
            return this.readInt64(this._data).value();
        }

        public readVarUhLong(): number {
            return this.readUInt64(this._data).value();
        }

        public readBytes(param1: ByteArray, param2: number = 0, param3: number = 0): void {
            this._data.readBytes(param1, param2, param3);
        }

        public readBoolean(): boolean {
            return this._data.readBoolean();
        }

        public readByte(): number {
            return this._data.readByte();
        }

        public readUnsignedByte(): number {
            return this._data.readUnsignedByte();
        }

        public readShort(): number {
            return this._data.readShort();
        }

        public readUnsignedShort(): number {
            return this._data.readUnsignedShort();
        }

        public readInt(): number {
            return this._data.readInt();
        }

        public readUnsignedInt(): number {
            return this._data.readUnsignedInt();
        }

        public readFloat(): number {
            return this._data.readFloat();
        }

        public readDouble(): number {
            return this._data.readDouble();
        }

        public readMultiByte(param1: number, param2: string): string {
            return this._data.readMultiByte(param1, param2);
        }

        public readUTF(): string {
            return this._data.readUTF();
        }

        public readUTFBytes(param1: number): string {
            return this._data.readUTFBytes(param1);
        }

        public get bytesAvailable(): number {
            return this._data.bytesAvailable;
        }

        public readObject(): any {
            //return this._data.readObject();
            return null;
        }

        /*public get objectEncoding(): number {
              return this._data.objectEncoding;
        }
   
        public set objectEncoding(param1: number) {
              this._data.objectEncoding = param1;
        }*/

        public get endian(): string {
            return this._data.endian;
        }

        public set endian(param1: string) {
            this._data.endian = param1;
        }

        public writeVarInt(param1: number): void {
            var _loc5_: number = 0;
            var _loc2_: ByteArray = new ByteArray();
            if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                _loc2_.writeByte(param1);
                this._data.writeBytes(_loc2_);
                return;
            }
            var _loc3_: number = param1;
            var _loc4_: ByteArray = new ByteArray();
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
        }

        public writeVarShort(param1: number): void {
            var _loc5_: number = 0;
            if (param1 > CustomDataWrapper.SHORT_MAX_VALUE || param1 < CustomDataWrapper.SHORT_MIN_VALUE) {
                throw new Error('Forbidden value');
            }
            var _loc2_: ByteArray = new ByteArray();
            if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                _loc2_.writeByte(param1);
                this._data.writeBytes(_loc2_);
                return;
            }
            var _loc3_: any = param1 & 65535;
            var _loc4_: ByteArray = new ByteArray();
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
        }

        public writeVarLong(param1: number): void {
            var _loc3_: number = 0;
            var _loc2_: ByteArray.Int64 = new ByteArray.Int64(param1, 0);
            if (_loc2_.high === 0) {
                this.writeint32(this._data, _loc2_.low);
            } else {
                _loc3_ = 0;
                while (_loc3_ < 4) {
                    this._data.writeByte(_loc2_.low & 127 | 128);
                    _loc2_.low = _loc2_.low >>> 7;
                    _loc3_++;
                }
                if ((_loc2_.high & 268435455 << 3) === 0) {
                    this._data.writeByte(_loc2_.high << 4 | _loc2_.low);
                } else {
                    this._data.writeByte((_loc2_.high << 4 | _loc2_.low) & 127 | 128);
                    this.writeint32(this._data, _loc2_.high >>> 3);
                }
            }
        }

        public writeBytes(param1: ByteArray, param2: number = 0, param3: number = 0): void {
            this._data.writeBytes(param1, param2, param3);
        }

        public writeBoolean(param1: boolean): void {
            this._data.writeBoolean(param1);
        }

        public writeByte(param1: number): void {
            this._data.writeByte(param1);
        }

        public writeShort(param1: number): void {
            this._data.writeShort(param1);
        }

        public writeInt(param1: number): void {
            this._data.writeInt(param1);
        }

        public writeUnsignedInt(param1: number): void {
            this._data.writeUnsignedInt(param1);
        }

        public writeFloat(param1: number): void {
            this._data.writeFloat(param1);
        }

        public writeDouble(param1: number): void {
            this._data.writeDouble(param1);
        }

        public writeMultiByte(param1: string, param2: string): void {
            this._data.writeMultiByte(param1, param2);
        }

        public writeUTF(param1: string): void {
            this._data.writeUTF(param1);
        }

        public writeUTFBytes(param1: string): void {
            this._data.writeUTFBytes(param1);
        }

        public writeObject(param1: any): void {
            //this._data.writeObject(param1);
        }

        private readInt64(param1: ByteArray): ByteArray.Int64 {
            var _loc3_: number = 0;
            var _loc2_: ByteArray.Int64 = new ByteArray.Int64(0, 0);
            var _loc4_: number = 0;
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
                        } else {
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
        }

        private readUInt64(param1: ByteArray): ByteArray.UInt64 {
            var _loc3_: number = 0;
            var _loc2_: ByteArray.UInt64 = new ByteArray.UInt64();
            var _loc4_: number = 0;
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
                        } else {
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
        }

        private writeint32(param1: ByteArray, param2: number): void {
            while (param2 >= 128) {
                param1.writeByte(param2 & 127 | 128);
                param2 = param2 >>> 7;
            }
            param1.writeByte(param2);
        }
    }
    export class NetworkMessage {
        public static BIT_RIGHT_SHIFT_LEN_PACKET_ID: number = 2;
        public static writePacket(param1: ICustomDataOutput, param2: number, param3: ByteArray): void {
            var _loc5_: number = 0;
            var _loc6_: number = 0;
            var _loc4_: number = this.computeTypeLen(param3.buffer.byteLength);
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
        }

        private static computeTypeLen(param1: number): number {
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
        }

        private static subComputeStaticHeader(param1: number, param2: number): number {
            return param1 << NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID | param2;
        }
    }
    export interface INetworkMessage {
        pack(param1: ICustomDataOutput): void;
        unpack(param1: ICustomDataInput, param2: number): void;
        getMessageId(): number;
        reset(): void;
    }
    export interface INetworkType {
        serialize(param1: ICustomDataOutput): void;
        deserialize(param1: ICustomDataInput): void;
        getTypeId(): number;
        reset(): void;
    }
}

export = Protocol;
