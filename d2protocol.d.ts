declare module 'd2protocol' {
	/// <reference path="../node_modules/ts-bytearray/ts-bytearray.d.ts" />
	import ByteArray = require('ts-bytearray'); module Protocol {
	    class Metadata {
	        static PROTOCOL_BUILD: number;
	        static PROTOCOL_REQUIRED_BUILD: number;
	        static PROTOCOL_DATE: string;
	        static PROTOCOL_VISIBILITY: string;
	    }
	    enum ProtocolConstantsEnum {
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
	        MAX_RECONNECTION_ATTEMPTS = 5,
	    }
	    enum AccessoryPreviewErrorEnum {
	        PREVIEW_ERROR = 0,
	        PREVIEW_COOLDOWN = 1,
	        PREVIEW_BAD_ITEM = 2,
	    }
	    enum AggressableStatusEnum {
	        NON_AGGRESSABLE = 0,
	        PvP_ENABLED_AGGRESSABLE = 10,
	        PvP_ENABLED_NON_AGGRESSABLE = 11,
	        AvA_ENABLED_AGGRESSABLE = 20,
	        AvA_ENABLED_NON_AGGRESSABLE = 21,
	        AvA_DISQUALIFIED = 22,
	        AvA_PREQUALIFIED_AGGRESSABLE = 23,
	    }
	    enum AlignmentSideEnum {
	        ALIGNMENT_UNKNOWN = -2,
	        ALIGNMENT_WITHOUT = -1,
	        ALIGNMENT_NEUTRAL = 0,
	        ALIGNMENT_ANGEL = 1,
	        ALIGNMENT_EVIL = 2,
	        ALIGNMENT_MERCENARY = 3,
	    }
	    enum AllianceRightsBitEnum {
	        ALLIANCE_RIGHT_NONE = 0,
	        ALLIANCE_RIGHT_BOSS = 1,
	        ALLIANCE_RIGHT_MANAGE_PRISMS = 2,
	        ALLIANCE_RIGHT_TALK_IN_CHAN = 4,
	        ALLIANCE_RIGHT_RECRUIT_GUILDS = 8,
	        ALLIANCE_RIGHT_KICK_GUILDS = 16,
	        ALLIANCE_RIGHT_MANAGE_RIGHTS = 32,
	    }
	    enum BreedEnum {
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
	        INCARNATION = -11,
	    }
	    enum BuildTypeEnum {
	        RELEASE = 0,
	        BETA = 1,
	        ALPHA = 2,
	        TESTING = 3,
	        INTERNAL = 4,
	        DEBUG = 5,
	        EXPERIMENTAL = 6,
	    }
	    enum CharacterCreationResultEnum {
	        OK = 0,
	        ERR_NO_REASON = 1,
	        ERR_INVALID_NAME = 2,
	        ERR_NAME_ALREADY_EXISTS = 3,
	        ERR_TOO_MANY_CHARACTERS = 4,
	        ERR_NOT_ALLOWED = 5,
	        ERR_NEW_PLAYER_NOT_ALLOWED = 6,
	        ERR_RESTRICED_ZONE = 7,
	    }
	    enum CharacterDeletionErrorEnum {
	        DEL_ERR_NO_REASON = 1,
	        DEL_ERR_TOO_MANY_CHAR_DELETION = 2,
	        DEL_ERR_BAD_SECRET_ANSWER = 3,
	        DEL_ERR_RESTRICED_ZONE = 4,
	    }
	    enum CharacterInventoryPositionEnum {
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
	        INVENTORY_POSITION_NOT_EQUIPED = 63,
	    }
	    enum CharacterRemodelingEnum {
	        CHARACTER_REMODELING_NOT_APPLICABLE = 0,
	        CHARACTER_REMODELING_NAME = 1,
	        CHARACTER_REMODELING_COLORS = 2,
	        CHARACTER_REMODELING_COSMETIC = 4,
	        CHARACTER_REMODELING_BREED = 8,
	        CHARACTER_REMODELING_GENDER = 16,
	    }
	    enum CharacterSpellModificationTypeEnum {
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
	        RANGE = 13,
	    }
	    enum ChatActivableChannelsEnum {
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
	        PSEUDO_CHANNEL_FIGHT_LOG = 11,
	    }
	    enum ChatChannelsMultiEnum {
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
	    }
	    enum ChatErrorEnum {
	        CHAT_ERROR_UNKNOWN = 0,
	        CHAT_ERROR_RECEIVER_NOT_FOUND = 1,
	        CHAT_ERROR_INTERIOR_MONOLOGUE = 2,
	        CHAT_ERROR_NO_GUILD = 3,
	        CHAT_ERROR_NO_PARTY = 4,
	        CHAT_ERROR_ALLIANCE = 5,
	        CHAT_ERROR_INVALID_MAP = 6,
	        CHAT_ERROR_NO_PARTY_ARENA = 7,
	        CHAT_ERROR_NO_TEAM = 8,
	    }
	    enum ClientInstallTypeEnum {
	        CLIENT_INSTALL_UNKNOWN = 0,
	        CLIENT_BUNDLE = 1,
	        CLIENT_STREAMING = 2,
	    }
	    enum ClientTechnologyEnum {
	        CLIENT_TECHNOLOGY_UNKNOWN = 0,
	        CLIENT_AIR = 1,
	        CLIENT_FLASH = 2,
	    }
	    enum CompassTypeEnum {
	        COMPASS_TYPE_SIMPLE = 0,
	        COMPASS_TYPE_SPOUSE = 1,
	        COMPASS_TYPE_PARTY = 2,
	        COMPASS_TYPE_PVP_SEEK = 3,
	        COMPASS_TYPE_QUEST = 4,
	    }
	    enum ConsoleMessageTypeEnum {
	        CONSOLE_TEXT_MESSAGE = 0,
	        CONSOLE_INFO_MESSAGE = 1,
	        CONSOLE_ERR_MESSAGE = 2,
	    }
	    enum CraftResultEnum {
	        CRAFT_IMPOSSIBLE = 0,
	        CRAFT_FAILED = 1,
	        CRAFT_SUCCESS = 2,
	        CRAFT_NEUTRAL = 3,
	    }
	    enum DebugLevelEnum {
	        LEVEL_TRACE = 0,
	        LEVEL_DEBUG = 1,
	        LEVEL_INFO = 2,
	        LEVEL_WARN = 3,
	        LEVEL_ERROR = 4,
	        LEVEL_FATAL = 5,
	    }
	    enum DelayedActionTypeEnum {
	        DELAYED_ACTION_DISCONNECT = 0,
	        DELAYED_ACTION_OBJECT_USE = 1,
	        DELAYED_ACTION_JOIN_CHARACTER = 2,
	        DELAYED_ACTION_AGGRESSION_IMMUNE = 3,
	    }
	    enum DialogTypeEnum {
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
	        DIALOG_ALLIANCE_RENAME = 14,
	    }
	    enum DirectionsEnum {
	        DIRECTION_EAST = 0,
	        DIRECTION_SOUTH_EAST = 1,
	        DIRECTION_SOUTH = 2,
	        DIRECTION_SOUTH_WEST = 3,
	        DIRECTION_WEST = 4,
	        DIRECTION_NORTH_WEST = 5,
	        DIRECTION_NORTH = 6,
	        DIRECTION_NORTH_EAST = 7,
	    }
	    enum ExchangeErrorEnum {
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
	        BID_SEARCH_ERROR = 11,
	    }
	    enum ExchangeReplayStopReasonEnum {
	        STOPPED_REASON_OK = 1,
	        STOPPED_REASON_USER = 2,
	        STOPPED_REASON_MISSING_RESSOURCE = 3,
	        STOPPED_REASON_IMPOSSIBLE_MODIFICATION = 4,
	    }
	    enum ExchangeTypeEnum {
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
	        RECYCLE_TRADE = 22,
	    }
	    enum FightDispellableEnum {
	        DISPELLABLE = 1,
	        DISPELLABLE_BY_DEATH = 2,
	        DISPELLABLE_BY_STRONG_DISPEL = 3,
	        REALLY_NOT_DISPELLABLE = 4,
	    }
	    enum FightOptionsEnum {
	        FIGHT_OPTION_SET_SECRET = 0,
	        FIGHT_OPTION_SET_TO_PARTY_ONLY = 1,
	        FIGHT_OPTION_SET_CLOSED = 2,
	        FIGHT_OPTION_ASK_FOR_HELP = 3,
	    }
	    enum FightOutcomeEnum {
	        RESULT_LOST = 0,
	        RESULT_DRAW = 1,
	        RESULT_VICTORY = 2,
	        RESULT_TAX = 5,
	        RESULT_DEFENDER_GROUP = 6,
	    }
	    enum FightSpellCastCriticalEnum {
	        NORMAL = 1,
	        CRITICAL_HIT = 2,
	        CRITICAL_FAIL = 3,
	    }
	    enum FightTypeEnum {
	        FIGHT_TYPE_CHALLENGE = 0,
	        FIGHT_TYPE_AGRESSION = 1,
	        FIGHT_TYPE_PvMA = 2,
	        FIGHT_TYPE_MXvM = 3,
	        FIGHT_TYPE_PvM = 4,
	        FIGHT_TYPE_PvT = 5,
	        FIGHT_TYPE_PvMU = 6,
	        FIGHT_TYPE_PVP_ARENA = 7,
	        FIGHT_TYPE_Koh = 8,
	        FIGHT_TYPE_PvPr = 9,
	    }
	    enum FighterRefusedReasonEnum {
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
	        GUEST_ACCOUNT = 24,
	    }
	    enum GameActionFightInvisibilityStateEnum {
	        INVISIBLE = 1,
	        DETECTED = 2,
	        VISIBLE = 3,
	    }
	    enum GameActionMarkCellsTypeEnum {
	        CELLS_CIRCLE = 0,
	        CELLS_CROSS = 1,
	        CELLS_SQUARE = 2,
	    }
	    enum GameActionMarkTypeEnum {
	        GLYPH = 1,
	        TRAP = 2,
	        WALL = 3,
	        PORTAL = 4,
	    }
	    enum GameContextEnum {
	        ROLE_PLAY = 1,
	        FIGHT = 2,
	    }
	    enum GameHierarchyEnum {
	        UNAVAILABLE = -1,
	        PLAYER = 0,
	        MODERATOR = 10,
	        GAMEMASTER_PADAWAN = 20,
	        GAMEMASTER = 30,
	        ADMIN = 40,
	    }
	    enum GuestLimitationEnum {
	        LIMITED_TO_REGISTERED = 0,
	        GUEST_LIMIT_ON_JOB_XP = 1,
	        GUEST_LIMIT_ON_JOB_USE = 2,
	        GUEST_LIMIT_ON_MAP = 3,
	        GUEST_LIMIT_ON_ITEM = 4,
	        GUEST_LIMIT_ON_VENDOR = 5,
	        GUEST_LIMIT_ON_CHAT = 6,
	        GUEST_LIMIT_ON_GUILD = 7,
	    }
	    enum GuildInformationsTypeEnum {
	        INFO_GENERAL = 1,
	        INFO_MEMBERS = 2,
	        INFO_BOOSTS = 3,
	        INFO_PADDOCKS = 4,
	        INFO_HOUSES = 5,
	        INFO_TAX_COLLECTOR_GUILD_ONLY = 6,
	        INFO_TAX_COLLECTOR_ALLIANCE = 7,
	        INFO_TAX_COLLECTOR_LEAVE = 8,
	    }
	    enum GuildRightsBitEnum {
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
	        GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN = 262144,
	    }
	    enum HardcoreOrEpicDeathStateEnum {
	        DEATH_STATE_ALIVE = 0,
	        DEATH_STATE_DEAD = 1,
	        DEATH_STATE_WAITING_CONFIRMATION = 2,
	    }
	    enum IdentificationFailureReasonEnum {
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
	        SPARE = 100,
	    }
	    enum ListAddFailureEnum {
	        LIST_ADD_FAILURE_UNKNOWN = 0,
	        LIST_ADD_FAILURE_OVER_QUOTA = 1,
	        LIST_ADD_FAILURE_NOT_FOUND = 2,
	        LIST_ADD_FAILURE_EGOCENTRIC = 3,
	        LIST_ADD_FAILURE_IS_DOUBLE = 4,
	    }
	    enum MapObstacleStateEnum {
	        OBSTACLE_OPENED = 1,
	        OBSTACLE_CLOSED = 2,
	    }
	    enum MountEquipedErrorEnum {
	        UNSET = 0,
	        SET = 1,
	        RIDING = 2,
	    }
	    enum NicknameErrorEnum {
	        ALREADY_USED = 1,
	        SAME_AS_LOGIN = 2,
	        TOO_SIMILAR_TO_LOGIN = 3,
	        INVALID_NICK = 4,
	        UNKNOWN_NICK_ERROR = 99,
	    }
	    enum NicknameGeneratingFailureEnum {
	        NICKNAME_GENERATOR_RETRY_TOO_SHORT = 1,
	        NICKNAME_GENERATOR_UNAVAILABLE = 2,
	    }
	    enum ObjectErrorEnum {
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
	        SYMBIOTIC_OBJECT_ERROR = 12,
	    }
	    enum PartStateEnum {
	        PART_NOT_INSTALLED = 0,
	        PART_BEING_UPDATER = 1,
	        PART_UP_TO_DATE = 2,
	    }
	    enum PartyJoinErrorEnum {
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
	        PARTY_JOIN_ERROR_PLAYER_IN_TUTORIAL = 13,
	    }
	    enum PartyNameErrorEnum {
	        PARTY_NAME_UNDEFINED_ERROR = 0,
	        PARTY_NAME_INVALID = 1,
	        PARTY_NAME_ALREADY_USED = 2,
	        PARTY_NAME_UNALLOWED_RIGHTS = 3,
	        PARTY_NAME_UNALLOWED_NOW = 4,
	    }
	    enum PartyTypeEnum {
	        PARTY_TYPE_UNDEFINED = 0,
	        PARTY_TYPE_CLASSICAL = 1,
	        PARTY_TYPE_DUNGEON = 2,
	        PARTY_TYPE_ARENA = 3,
	    }
	    enum PlayableBreedEnum {
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
	    }
	    enum PlayerLifeStatusEnum {
	        STATUS_ALIVE_AND_KICKING = 0,
	        STATUS_TOMBSTONE = 1,
	        STATUS_PHANTOM = 2,
	    }
	    enum PlayerStateEnum {
	        NOT_CONNECTED = 0,
	        GAME_TYPE_ROLEPLAY = 1,
	        GAME_TYPE_FIGHT = 2,
	        UNKNOWN_STATE = 99,
	    }
	    enum PlayerStatusEnum {
	        PLAYER_STATUS_OFFLINE = 0,
	        PLAYER_STATUS_UNKNOWN = 1,
	        PLAYER_STATUS_AVAILABLE = 10,
	        PLAYER_STATUS_IDLE = 20,
	        PLAYER_STATUS_AFK = 21,
	        PLAYER_STATUS_PRIVATE = 30,
	        PLAYER_STATUS_SOLO = 40,
	    }
	    enum PresetDeleteResultEnum {
	        PRESET_DEL_OK = 1,
	        PRESET_DEL_ERR_UNKNOWN = 2,
	        PRESET_DEL_ERR_BAD_PRESET_ID = 3,
	    }
	    enum PresetSaveResultEnum {
	        PRESET_SAVE_OK = 1,
	        PRESET_SAVE_ERR_UNKNOWN = 2,
	        PRESET_SAVE_ERR_TOO_MANY = 3,
	    }
	    enum PresetSaveUpdateErrorEnum {
	        PRESET_UPDATE_ERR_UNKNOWN = 1,
	        PRESET_UPDATE_ERR_BAD_PRESET_ID = 2,
	        PRESET_UPDATE_ERR_BAD_POSITION = 3,
	        PRESET_UPDATE_ERR_BAD_OBJECT_ID = 4,
	    }
	    enum PresetUseResultEnum {
	        PRESET_USE_OK = 1,
	        PRESET_USE_OK_PARTIAL = 2,
	        PRESET_USE_ERR_UNKNOWN = 3,
	        PRESET_USE_ERR_CRITERION = 4,
	        PRESET_USE_ERR_BAD_PRESET_ID = 5,
	        PRESET_USE_ERR_COOLDOWN = 6,
	    }
	    enum PrismListenEnum {
	        PRISM_LISTEN_NONE = 0,
	        PRISM_LISTEN_MINE = 1,
	        PRISM_LISTEN_ALL = 2,
	    }
	    enum PrismSetSabotagedRefusedReasonEnum {
	        SABOTAGE_REFUSED = -1,
	        SABOTAGE_INSUFFICIENT_RIGHTS = 0,
	        SABOTAGE_MEMBER_ACCOUNT_NEEDED = 1,
	        SABOTAGE_RESTRICTED_ACCOUNT = 2,
	        SABOTAGE_WRONG_ALLIANCE = 3,
	        SABOTAGE_NO_PRISM = 4,
	        SABOTAGE_WRONG_STATE = 5,
	    }
	    enum PrismStateEnum {
	        PRISM_STATE_INVULNERABLE = 0,
	        PRISM_STATE_NORMAL = 1,
	        PRISM_STATE_ATTACKED = 2,
	        PRISM_STATE_FIGHTING = 3,
	        PRISM_STATE_WEAKENED = 4,
	        PRISM_STATE_VULNERABLE = 5,
	        PRISM_STATE_DEFEATED = 6,
	        PRISM_STATE_SABOTAGED = 7,
	    }
	    enum PvpArenaStepEnum {
	        ARENA_STEP_REGISTRED = 0,
	        ARENA_STEP_WAITING_FIGHT = 1,
	        ARENA_STEP_STARTING_FIGHT = 2,
	        ARENA_STEP_UNREGISTER = 3,
	    }
	    enum PvpArenaTypeEnum {
	        ARENA_TYPE_3VS3 = 3,
	        ARENA_TYPE_5VS5 = 5,
	    }
	    enum SequenceTypeEnum {
	        SEQUENCE_SPELL = 1,
	        SEQUENCE_WEAPON = 2,
	        SEQUENCE_GLYPH_TRAP = 3,
	        SEQUENCE_TRIGGERED = 4,
	        SEQUENCE_MOVE = 5,
	        SEQUENCE_CHARACTER_DEATH = 6,
	        SEQUENCE_TURN_START = 7,
	        SEQUENCE_TURN_END = 8,
	        SEQUENCE_FIGHT_START = 9,
	    }
	    enum ServerConnectionErrorEnum {
	        SERVER_CONNECTION_ERROR_DUE_TO_STATUS = 0,
	        SERVER_CONNECTION_ERROR_NO_REASON = 1,
	        SERVER_CONNECTION_ERROR_ACCOUNT_RESTRICTED = 2,
	        SERVER_CONNECTION_ERROR_COMMUNITY_RESTRICTED = 3,
	        SERVER_CONNECTION_ERROR_LOCATION_RESTRICTED = 4,
	        SERVER_CONNECTION_ERROR_SUBSCRIBERS_ONLY = 5,
	        SERVER_CONNECTION_ERROR_REGULAR_PLAYERS_ONLY = 6,
	    }
	    enum ServerStatusEnum {
	        STATUS_UNKNOWN = 0,
	        OFFLINE = 1,
	        STARTING = 2,
	        ONLINE = 3,
	        NOJOIN = 4,
	        SAVING = 5,
	        STOPING = 6,
	        FULL = 7,
	    }
	    enum ShortcutBarEnum {
	        GENERAL_SHORTCUT_BAR = 0,
	        SPELL_SHORTCUT_BAR = 1,
	    }
	    enum SocialContactCategoryEnum {
	        SOCIAL_CONTACT_FRIEND = 0,
	        SOCIAL_CONTACT_SPOUSE = 1,
	        SOCIAL_CONTACT_PARTY = 2,
	        SOCIAL_CONTACT_GUILD = 3,
	        SOCIAL_CONTACT_ALLIANCE = 4,
	        SOCIAL_CONTACT_CRAFTER = 5,
	        SOCIAL_CONTACT_INTERLOCUTOR = 6,
	        SOCIAL_CONTACT_FIGHT = 7,
	    }
	    enum SocialGroupCreationResultEnum {
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
	        SOCIAL_GROUP_CREATE_ERROR_UNKNOWN = 99,
	    }
	    enum SocialGroupInvitationStateEnum {
	        SOCIAL_GROUP_INVITATION_FAILED = 0,
	        SOCIAL_GROUP_INVITATION_SENT = 1,
	        SOCIAL_GROUP_INVITATION_CANCELED = 2,
	        SOCIAL_GROUP_INVITATION_OK = 3,
	    }
	    enum StatisticTypeEnum {
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
	        DISPLAY_MENU = 152,
	    }
	    enum StatsUpgradeResultEnum {
	        NONE = -1,
	        SUCCESS = 0,
	        RESTRICTED = 1,
	        GUEST = 2,
	        IN_FIGHT = 3,
	        NOT_ENOUGH_POINT = 4,
	    }
	    enum SubEntityBindingPointCategoryEnum {
	        HOOK_POINT_CATEGORY_UNUSED = 0,
	        HOOK_POINT_CATEGORY_PET = 1,
	        HOOK_POINT_CATEGORY_MOUNT_DRIVER = 2,
	        HOOK_POINT_CATEGORY_LIFTED_ENTITY = 3,
	        HOOK_POINT_CATEGORY_BASE_BACKGROUND = 4,
	        HOOK_POINT_CATEGORY_MERCHANT_BAG = 5,
	        HOOK_POINT_CATEGORY_BASE_FOREGROUND = 6,
	        HOOK_POINT_CATEGORY_PET_FOLLOWER = 7,
	    }
	    enum SubscriptionRequiredEnum {
	        LIMITED_TO_SUBSCRIBER = 0,
	        LIMIT_ON_JOB_XP = 1,
	        LIMIT_ON_JOB_USE = 2,
	        LIMIT_ON_MAP = 3,
	        LIMIT_ON_ITEM = 4,
	        LIMIT_ON_VENDOR = 5,
	    }
	    enum TaxCollectorErrorReasonEnum {
	        TAX_COLLECTOR_ERROR_UNKNOWN = 0,
	        TAX_COLLECTOR_NOT_FOUND = 1,
	        TAX_COLLECTOR_NOT_OWNED = 2,
	        TAX_COLLECTOR_NO_RIGHTS = 3,
	        TAX_COLLECTOR_MAX_REACHED = 4,
	        TAX_COLLECTOR_ALREADY_ONE = 5,
	        TAX_COLLECTOR_CANT_HIRE_YET = 6,
	        TAX_COLLECTOR_CANT_HIRE_HERE = 7,
	        TAX_COLLECTOR_NOT_ENOUGH_KAMAS = 8,
	    }
	    enum TaxCollectorStateEnum {
	        STATE_COLLECTING = 0,
	        STATE_WAITING_FOR_HELP = 1,
	        STATE_FIGHTING = 2,
	    }
	    enum TeamEnum {
	        TEAM_CHALLENGER = 0,
	        TEAM_DEFENDER = 1,
	        TEAM_SPECTATOR = 2,
	    }
	    enum TeamTypeEnum {
	        TEAM_TYPE_PLAYER = 0,
	        TEAM_TYPE_MONSTER = 1,
	        TEAM_TYPE_MUTANT = 2,
	        TEAM_TYPE_TAXCOLLECTOR = 3,
	        TEAM_TYPE_BAD_PLAYER = 4,
	        TEAM_TYPE_PRISM = 5,
	    }
	    enum TeleporterTypeEnum {
	        TELEPORTER_ZAAP = 0,
	        TELEPORTER_SUBWAY = 1,
	        TELEPORTER_PRISM = 2,
	    }
	    enum TextInformationTypeEnum {
	        TEXT_INFORMATION_MESSAGE = 0,
	        TEXT_INFORMATION_ERROR = 1,
	        TEXT_INFORMATION_PVP = 2,
	        TEXT_INFORMATION_FIGHT_LOG = 3,
	        TEXT_INFORMATION_POPUP = 4,
	        TEXT_LIVING_OBJECT = 5,
	        TEXT_ENTITY_TALK = 6,
	        TEXT_INFORMATION_FIGHT = 7,
	    }
	    enum TreasureHuntDigRequestEnum {
	        TREASURE_HUNT_DIG_ERROR_UNDEFINED = 0,
	        TREASURE_HUNT_DIG_NEW_HINT = 1,
	        TREASURE_HUNT_DIG_FINISHED = 2,
	        TREASURE_HUNT_DIG_WRONG = 3,
	        TREASURE_HUNT_DIG_LOST = 4,
	        TREASURE_HUNT_DIG_ERROR_IMPOSSIBLE = 5,
	        TREASURE_HUNT_DIG_WRONG_AND_YOU_KNOW_IT = 6,
	    }
	    enum TreasureHuntFlagRequestEnum {
	        TREASURE_HUNT_FLAG_ERROR_UNDEFINED = 0,
	        TREASURE_HUNT_FLAG_OK = 1,
	        TREASURE_HUNT_FLAG_WRONG = 2,
	        TREASURE_HUNT_FLAG_TOO_MANY = 3,
	        TREASURE_HUNT_FLAG_ERROR_IMPOSSIBLE = 4,
	        TREASURE_HUNT_FLAG_WRONG_INDEX = 5,
	        TREASURE_HUNT_FLAG_SAME_MAP = 6,
	    }
	    enum TreasureHuntFlagStateEnum {
	        TREASURE_HUNT_FLAG_STATE_UNKNOWN = 0,
	        TREASURE_HUNT_FLAG_STATE_OK = 1,
	        TREASURE_HUNT_FLAG_STATE_WRONG = 2,
	    }
	    enum TreasureHuntRequestEnum {
	        TREASURE_HUNT_ERROR_UNDEFINED = 0,
	        TREASURE_HUNT_ERROR_NO_QUEST_FOUND = 2,
	        TREASURE_HUNT_ERROR_ALREADY_HAVE_QUEST = 3,
	        TREASURE_HUNT_ERROR_NOT_AVAILABLE = 4,
	        TREASURE_HUNT_OK = 1,
	    }
	    enum TreasureHuntTypeEnum {
	        TREASURE_HUNT_CLASSIC = 0,
	        TREASURE_HUNT_PORTAL = 1,
	        TREASURE_HUNT_LEGENDARY = 2,
	    }
	    enum UpdatableMountBoostEnum {
	        STAMINA = 3,
	        MATURITY = 5,
	        ENERGY = 1,
	        SERENITY = 2,
	        LOVE = 4,
	        TIREDNESS = 6,
	        RIDEABLE = 7,
	    }
	    class AdminCommandMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AdminCommandMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AdminCommandMessage(param1: ICustomDataInput): void;
	    }
	    class AdminQuietCommandMessage extends AdminCommandMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AdminQuietCommandMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AdminQuietCommandMessage(param1: ICustomDataInput): void;
	    }
	    class ConsoleCommandsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        aliases: string[];
	        args: string[];
	        descriptions: string[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ConsoleCommandsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ConsoleCommandsListMessage(param1: ICustomDataInput): void;
	    }
	    class ConsoleMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: number;
	        content: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ConsoleMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ConsoleMessage(param1: ICustomDataInput): void;
	    }
	    class NetworkDataContainerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: ByteArray;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NetworkDataContainerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NetworkDataContainerMessage(param1: ICustomDataInput): void;
	    }
	    class BasicPingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        quiet: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicPingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicPingMessage(param1: ICustomDataInput): void;
	    }
	    class BasicPongMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        quiet: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicPongMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicPongMessage(param1: ICustomDataInput): void;
	    }
	    class BasicStatMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        statId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicStatMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicStatMessage(param1: ICustomDataInput): void;
	    }
	    class CredentialsAcknowledgementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CredentialsAcknowledgementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CredentialsAcknowledgementMessage(param1: ICustomDataInput): void;
	    }
	    class HelloConnectMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        salt: string;
	        key: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HelloConnectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HelloConnectMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationAccountForceMessage extends IdentificationMessage {
	        static ID: number;
	        forcedAccountLogin: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationAccountForceMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationAccountForceMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationFailedBannedMessage extends IdentificationFailedMessage {
	        static ID: number;
	        banEndDate: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationFailedBannedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationFailedBannedMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationFailedForBadVersionMessage extends IdentificationFailedMessage {
	        static ID: number;
	        requiredVersion: Version;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationFailedForBadVersionMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationFailedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationFailedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationFailedMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        version: VersionExtended;
	        lang: string;
	        credentials: number[];
	        serverId: number;
	        autoconnect: boolean;
	        useCertificate: boolean;
	        useLoginToken: boolean;
	        sessionOptionalSalt: number;
	        failedAttempts: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationSuccessMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
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
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationSuccessMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationSuccessMessage(param1: ICustomDataInput): void;
	    }
	    class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage {
	        static ID: number;
	        loginToken: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataInput): void;
	    }
	    class SelectedServerDataExtendedMessage extends SelectedServerDataMessage {
	        static ID: number;
	        serverIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SelectedServerDataExtendedMessage(param1: ICustomDataInput): void;
	    }
	    class SelectedServerDataMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        serverId: number;
	        address: string;
	        port: number;
	        canCreateNewCharacter: boolean;
	        ticket: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SelectedServerDataMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SelectedServerDataMessage(param1: ICustomDataInput): void;
	    }
	    class SelectedServerRefusedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        serverId: number;
	        error: number;
	        serverStatus: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SelectedServerRefusedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SelectedServerRefusedMessage(param1: ICustomDataInput): void;
	    }
	    class ServerSelectionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        serverId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSelectionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSelectionMessage(param1: ICustomDataInput): void;
	    }
	    class ServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        server: GameServerInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerStatusUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerStatusUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class ServersListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        servers: GameServerInformations[];
	        alreadyConnectedToServerId: number;
	        canCreateNewCharacter: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServersListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServersListMessage(param1: ICustomDataInput): void;
	    }
	    class AccountLinkRequiredMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccountLinkRequiredMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccountLinkRequiredMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameAcceptedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameAcceptedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameAcceptedMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameChoiceRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        nickname: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameChoiceRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameChoiceRequestMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameRefusedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameRefusedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameRefusedMessage(param1: ICustomDataInput): void;
	    }
	    class NicknameRegistrationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NicknameRegistrationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NicknameRegistrationMessage(param1: ICustomDataInput): void;
	    }
	    class AcquaintanceSearchErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AcquaintanceSearchErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AcquaintanceSearchErrorMessage(param1: ICustomDataInput): void;
	    }
	    class AcquaintanceSearchMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        nickname: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AcquaintanceSearchMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AcquaintanceSearchMessage(param1: ICustomDataInput): void;
	    }
	    class AcquaintanceServerListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        servers: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AcquaintanceServerListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AcquaintanceServerListMessage(param1: ICustomDataInput): void;
	    }
	    class DebugClearHighlightCellsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DebugClearHighlightCellsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DebugClearHighlightCellsMessage(param1: ICustomDataInput): void;
	    }
	    class DebugHighlightCellsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        color: number;
	        cells: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DebugHighlightCellsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DebugHighlightCellsMessage(param1: ICustomDataInput): void;
	    }
	    class DebugInClientMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        level: number;
	        message: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DebugInClientMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DebugInClientMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementDetailedListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        startedAchievements: Achievement[];
	        finishedAchievements: Achievement[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementDetailedListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementDetailedListMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementDetailedListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        categoryId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementDetailedListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementDetailedListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementDetailsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        achievement: Achievement;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementDetailsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementDetailsMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementDetailsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        achievementId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementDetailsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementDetailsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementFinishedInformationMessage extends AchievementFinishedMessage {
	        static ID: number;
	        name: string;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementFinishedInformationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementFinishedInformationMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementFinishedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        finishedlevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementFinishedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementFinishedMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        finishedAchievementsIds: number[];
	        rewardableAchievements: AchievementRewardable[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementListMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementRewardErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        achievementId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementRewardErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementRewardErrorMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementRewardRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        achievementId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementRewardRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementRewardRequestMessage(param1: ICustomDataInput): void;
	    }
	    class AchievementRewardSuccessMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        achievementId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementRewardSuccessMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementRewardSuccessMessage(param1: ICustomDataInput): void;
	    }
	    class FriendGuildSetWarnOnAchievementCompleteMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(param1: ICustomDataInput): void;
	    }
	    class FriendGuildWarnOnAchievementCompleteStateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(param1: ICustomDataInput): void;
	    }
	    class AbstractGameActionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        actionId: number;
	        sourceId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractGameActionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractGameActionMessage(param1: ICustomDataInput): void;
	    }
	    class AbstractGameActionWithAckMessage extends AbstractGameActionMessage {
	        static ID: number;
	        waitAckId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractGameActionWithAckMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractGameActionWithAckMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionAcknowledgementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        valid: boolean;
	        actionId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionAcknowledgementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionAcknowledgementMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionNoopMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionNoopMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionNoopMessage(param1: ICustomDataInput): void;
	    }
	    class AbstractGameActionFightTargetedAbilityMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        destinationCellId: number;
	        critical: number;
	        silentCast: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractGameActionFightTargetedAbilityMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractGameActionFightTargetedAbilityMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightActivateGlyphTrapMessage extends AbstractGameActionMessage {
	        static ID: number;
	        markId: number;
	        active: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightActivateGlyphTrapMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightActivateGlyphTrapMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightCarryCharacterMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightCarryCharacterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightCarryCharacterMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightCastOnTargetRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellId: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightCastOnTargetRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightCastOnTargetRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightCastRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightCastRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightCastRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightChangeLookMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        entityLook: EntityLook;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightChangeLookMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightChangeLookMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightCloseCombatMessage extends AbstractGameActionFightTargetedAbilityMessage {
	        static ID: number;
	        weaponGenericId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightCloseCombatMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightCloseCombatMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightDeathMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightDeathMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightDeathMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightDispellEffectMessage extends GameActionFightDispellMessage {
	        static ID: number;
	        boostUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightDispellEffectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightDispellEffectMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightDispellMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightDispellMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightDispellMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightDispellSpellMessage extends GameActionFightDispellMessage {
	        static ID: number;
	        spellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightDispellSpellMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightDispellSpellMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightDispellableEffectMessage extends AbstractGameActionMessage {
	        static ID: number;
	        effect: AbstractFightDispellableEffect;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightDispellableEffectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightDispellableEffectMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightDodgePointLossMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        amount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightDodgePointLossMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightDodgePointLossMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightDropCharacterMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightDropCharacterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightDropCharacterMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightExchangePositionsMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        casterCellId: number;
	        targetCellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightExchangePositionsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightExchangePositionsMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightInvisibilityMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        state: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightInvisibilityMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightInvisibilityMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightInvisibleDetectedMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightInvisibleDetectedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightInvisibleDetectedMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightKillMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightKillMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightKillMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightLifeAndShieldPointsLostMessage extends GameActionFightLifePointsLostMessage {
	        static ID: number;
	        shieldLoss: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightLifePointsGainMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        delta: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightLifePointsGainMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightLifePointsGainMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightLifePointsLostMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        loss: number;
	        permanentDamages: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightLifePointsLostMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightLifePointsLostMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightMarkCellsMessage extends AbstractGameActionMessage {
	        static ID: number;
	        mark: GameActionMark;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightMarkCellsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightMarkCellsMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightModifyEffectsDurationMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        delta: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightModifyEffectsDurationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightModifyEffectsDurationMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightNoSpellCastMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellLevelId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightNoSpellCastMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightNoSpellCastMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightPointsVariationMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        delta: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightPointsVariationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightPointsVariationMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightReduceDamagesMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        amount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightReduceDamagesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightReduceDamagesMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightReflectDamagesMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightReflectDamagesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightReflectDamagesMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightReflectSpellMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightReflectSpellMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightReflectSpellMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightSlideMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        startCellId: number;
	        endCellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightSlideMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightSlideMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightSpellCastMessage extends AbstractGameActionFightTargetedAbilityMessage {
	        static ID: number;
	        spellId: number;
	        spellLevel: number;
	        portalsIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightSpellCastMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightSpellCastMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightSpellCooldownVariationMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        spellId: number;
	        value: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightSpellCooldownVariationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightSpellCooldownVariationMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightSpellImmunityMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        spellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightSpellImmunityMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightSpellImmunityMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightStealKamaMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        amount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightStealKamaMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightStealKamaMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightSummonMessage extends AbstractGameActionMessage {
	        static ID: number;
	        summon: GameFightFighterInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightSummonMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightSummonMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightTackledMessage extends AbstractGameActionMessage {
	        static ID: number;
	        tacklersIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightTackledMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightTackledMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightTeleportOnSameMapMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightTeleportOnSameMapMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightTeleportOnSameMapMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightThrowCharacterMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightThrowCharacterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightThrowCharacterMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightTriggerEffectMessage extends GameActionFightDispellEffectMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightTriggerEffectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightTriggerEffectMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightTriggerGlyphTrapMessage extends AbstractGameActionMessage {
	        static ID: number;
	        markId: number;
	        triggeringCharacterId: number;
	        triggeredSpellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightTriggerGlyphTrapMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightTriggerGlyphTrapMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightUnmarkCellsMessage extends AbstractGameActionMessage {
	        static ID: number;
	        markId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightUnmarkCellsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightUnmarkCellsMessage(param1: ICustomDataInput): void;
	    }
	    class GameActionFightVanishMessage extends AbstractGameActionMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionFightVanishMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionFightVanishMessage(param1: ICustomDataInput): void;
	    }
	    class SequenceEndMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        actionId: number;
	        authorId: number;
	        sequenceType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SequenceEndMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SequenceEndMessage(param1: ICustomDataInput): void;
	    }
	    class SequenceStartMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        sequenceType: number;
	        authorId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SequenceStartMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SequenceStartMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceChangeGuildRightsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildId: number;
	        rights: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceChangeGuildRightsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceChangeGuildRightsMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceCreationResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        result: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceCreationResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceCreationResultMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceCreationStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceCreationStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceCreationStartedMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceCreationValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allianceName: string;
	        allianceTag: string;
	        allianceEmblem: GuildEmblem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceCreationValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceCreationValidMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceFactsErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allianceId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceFactsErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceFactsErrorMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceFactsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        infos: AllianceFactSheetInformations;
	        guilds: GuildInAllianceInformations[];
	        controlledSubareaIds: number[];
	        leaderCharacterId: number;
	        leaderCharacterName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceFactsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceFactsMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceFactsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allianceId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceFactsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceFactsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceGuildLeavingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        kicked: boolean;
	        guildId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceGuildLeavingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceGuildLeavingMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceInsiderInfoMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allianceInfos: AllianceFactSheetInformations;
	        guilds: GuildInsiderFactSheetInformations[];
	        prisms: PrismSubareaEmptyInfo[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInsiderInfoMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInsiderInfoMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceInsiderInfoRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInsiderInfoRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInsiderInfoRequestMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceInvitationAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accept: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInvitationAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInvitationAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceInvitationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInvitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInvitationMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceInvitationStateRecrutedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        invitationState: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInvitationStateRecrutedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInvitationStateRecrutedMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceInvitationStateRecruterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        recrutedName: string;
	        invitationState: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInvitationStateRecruterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInvitationStateRecruterMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceInvitedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        recruterId: number;
	        recruterName: string;
	        allianceInfo: BasicNamedAllianceInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInvitedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInvitedMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceJoinedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allianceInfo: AllianceInformations;
	        enabled: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceJoinedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceJoinedMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceKickRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        kickedId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceKickRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceKickRequestMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceLeftMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceLeftMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceLeftMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        alliances: AllianceFactSheetInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceListMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceMembershipMessage extends AllianceJoinedMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceMembershipMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceMembershipMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceModificationEmblemValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        Alliancemblem: GuildEmblem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceModificationEmblemValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceModificationEmblemValidMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceModificationNameAndTagValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allianceName: string;
	        allianceTag: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceModificationNameAndTagValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceModificationNameAndTagValidMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceModificationStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        canChangeName: boolean;
	        canChangeTag: boolean;
	        canChangeEmblem: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceModificationStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceModificationStartedMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceModificationValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allianceName: string;
	        allianceTag: string;
	        Alliancemblem: GuildEmblem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceModificationValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceModificationValidMessage(param1: ICustomDataInput): void;
	    }
	    class AlliancePartialListMessage extends AllianceListMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlliancePartialListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlliancePartialListMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceVersatileInfoListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        alliances: AllianceVersatileInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceVersatileInfoListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceVersatileInfoListMessage(param1: ICustomDataInput): void;
	    }
	    class KohUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        alliances: AllianceInformations[];
	        allianceNbMembers: number[];
	        allianceRoundWeigth: number[];
	        allianceMatchScore: number[];
	        allianceMapWinner: BasicAllianceInformations;
	        allianceMapWinnerScore: number;
	        allianceMapMyAllianceScore: number;
	        nextTickTime: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KohUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KohUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class AlmanachCalendarDateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        date: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlmanachCalendarDateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlmanachCalendarDateMessage(param1: ICustomDataInput): void;
	    }
	    class AccountCapabilitiesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accountId: number;
	        tutorialAvailable: boolean;
	        breedsVisible: number;
	        breedsAvailable: number;
	        status: number;
	        canCreateNewCharacter: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccountCapabilitiesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccountCapabilitiesMessage(param1: ICustomDataInput): void;
	    }
	    class AccountLoggingKickedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        days: number;
	        hours: number;
	        minutes: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccountLoggingKickedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccountLoggingKickedMessage(param1: ICustomDataInput): void;
	    }
	    class AlreadyConnectedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlreadyConnectedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlreadyConnectedMessage(param1: ICustomDataInput): void;
	    }
	    class AuthenticationTicketAcceptedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AuthenticationTicketAcceptedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AuthenticationTicketAcceptedMessage(param1: ICustomDataInput): void;
	    }
	    class AuthenticationTicketMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        lang: string;
	        ticket: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AuthenticationTicketMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AuthenticationTicketMessage(param1: ICustomDataInput): void;
	    }
	    class AuthenticationTicketRefusedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AuthenticationTicketRefusedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AuthenticationTicketRefusedMessage(param1: ICustomDataInput): void;
	    }
	    class HelloGameMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HelloGameMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HelloGameMessage(param1: ICustomDataInput): void;
	    }
	    class ReloginTokenRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ReloginTokenRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ReloginTokenRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ReloginTokenStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        validToken: boolean;
	        ticket: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ReloginTokenStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ReloginTokenStatusMessage(param1: ICustomDataInput): void;
	    }
	    class ServerOptionalFeaturesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        features: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerOptionalFeaturesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerOptionalFeaturesMessage(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstantsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        variables: ServerSessionConstant[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstantsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstantsMessage(param1: ICustomDataInput): void;
	    }
	    class ServerSettingsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        lang: string;
	        community: number;
	        gameType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSettingsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSettingsMessage(param1: ICustomDataInput): void;
	    }
	    class AtlasPointInformationsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: AtlasPointsInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AtlasPointInformationsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AtlasPointInformationsMessage(param1: ICustomDataInput): void;
	    }
	    class CompassResetMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CompassResetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CompassResetMessage(param1: ICustomDataInput): void;
	    }
	    class CompassUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: number;
	        coords: MapCoordinates;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CompassUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CompassUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class CompassUpdatePartyMemberMessage extends CompassUpdateMessage {
	        static ID: number;
	        memberId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CompassUpdatePartyMemberMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CompassUpdatePartyMemberMessage(param1: ICustomDataInput): void;
	    }
	    class CompassUpdatePvpSeekMessage extends CompassUpdateMessage {
	        static ID: number;
	        memberId: number;
	        memberName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CompassUpdatePvpSeekMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CompassUpdatePvpSeekMessage(param1: ICustomDataInput): void;
	    }
	    class BasicAckMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        seq: number;
	        lastPacketId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicAckMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicAckMessage(param1: ICustomDataInput): void;
	    }
	    class BasicDateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        day: number;
	        month: number;
	        year: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicDateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicDateMessage(param1: ICustomDataInput): void;
	    }
	    class BasicLatencyStatsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        latency: number;
	        sampleCount: number;
	        max: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicLatencyStatsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicLatencyStatsMessage(param1: ICustomDataInput): void;
	    }
	    class BasicLatencyStatsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicLatencyStatsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicLatencyStatsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class BasicNoOperationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicNoOperationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicNoOperationMessage(param1: ICustomDataInput): void;
	    }
	    class BasicTimeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        timestamp: number;
	        timezoneOffset: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicTimeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicTimeMessage(param1: ICustomDataInput): void;
	    }
	    class BasicWhoAmIRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        verbose: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicWhoAmIRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicWhoAmIRequestMessage(param1: ICustomDataInput): void;
	    }
	    class BasicWhoIsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        self: boolean;
	        position: number;
	        accountNickname: string;
	        accountId: number;
	        playerName: string;
	        playerId: number;
	        areaId: number;
	        socialGroups: AbstractSocialGroupInfos[];
	        verbose: boolean;
	        playerState: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicWhoIsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicWhoIsMessage(param1: ICustomDataInput): void;
	    }
	    class BasicWhoIsNoMatchMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        search: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicWhoIsNoMatchMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicWhoIsNoMatchMessage(param1: ICustomDataInput): void;
	    }
	    class BasicWhoIsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        verbose: boolean;
	        search: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicWhoIsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicWhoIsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CurrentServerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        status: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CurrentServerStatusUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CurrentServerStatusUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class NumericWhoIsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playerId: number;
	        accountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NumericWhoIsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NumericWhoIsMessage(param1: ICustomDataInput): void;
	    }
	    class NumericWhoIsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NumericWhoIsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NumericWhoIsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class SequenceNumberMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        number: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SequenceNumberMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SequenceNumberMessage(param1: ICustomDataInput): void;
	    }
	    class SequenceNumberRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SequenceNumberRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SequenceNumberRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TextInformationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        msgType: number;
	        msgId: number;
	        parameters: string[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TextInformationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TextInformationMessage(param1: ICustomDataInput): void;
	    }
	    class BasicCharactersListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        characters: CharacterBaseInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicCharactersListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicCharactersListMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterFirstSelectionMessage extends CharacterSelectionMessage {
	        static ID: number;
	        doTutorial: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterFirstSelectionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterFirstSelectionMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterReplayWithRemodelRequestMessage extends CharacterReplayRequestMessage {
	        static ID: number;
	        remodel: RemodelingInformation;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterReplayWithRemodelRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterReplayWithRemodelRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterSelectedErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSelectedErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSelectedErrorMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterSelectedForceMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSelectedForceMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSelectedForceMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterSelectedForceReadyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSelectedForceReadyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSelectedForceReadyMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterSelectedSuccessMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        infos: CharacterBaseInformations;
	        isCollectingStats: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSelectedSuccessMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSelectedSuccessMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterSelectionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSelectionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSelectionMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterSelectionWithRemodelMessage extends CharacterSelectionMessage {
	        static ID: number;
	        remodel: RemodelingInformation;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSelectionWithRemodelMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSelectionWithRemodelMessage(param1: ICustomDataInput): void;
	    }
	    class CharactersListErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharactersListErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharactersListErrorMessage(param1: ICustomDataInput): void;
	    }
	    class CharactersListMessage extends BasicCharactersListMessage {
	        static ID: number;
	        hasStartupActions: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharactersListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharactersListMessage(param1: ICustomDataInput): void;
	    }
	    class CharactersListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharactersListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharactersListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CharactersListWithModificationsMessage extends CharactersListMessage {
	        static ID: number;
	        charactersToRecolor: CharacterToRecolorInformation[];
	        charactersToRename: number[];
	        unusableCharacters: number[];
	        charactersToRelook: CharacterToRelookInformation[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharactersListWithModificationsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharactersListWithModificationsMessage(param1: ICustomDataInput): void;
	    }
	    class CharactersListWithRemodelingMessage extends CharactersListMessage {
	        static ID: number;
	        charactersToRemodel: CharacterToRemodelInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharactersListWithRemodelingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharactersListWithRemodelingMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterCreationRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        breed: number;
	        sex: boolean;
	        colors: number[];
	        cosmeticId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterCreationRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterCreationRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterCreationResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        result: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterCreationResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterCreationResultMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterNameSuggestionFailureMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterNameSuggestionFailureMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterNameSuggestionFailureMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterNameSuggestionRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterNameSuggestionRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterNameSuggestionRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterNameSuggestionSuccessMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        suggestion: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterNameSuggestionSuccessMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterNameSuggestionSuccessMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterDeletionErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterDeletionErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterDeletionErrorMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterDeletionRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        characterId: number;
	        secretAnswerHash: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterDeletionRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterDeletionRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterReplayRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        characterId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterReplayRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterReplayRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterExperienceGainMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        experienceCharacter: number;
	        experienceMount: number;
	        experienceGuild: number;
	        experienceIncarnation: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterExperienceGainMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterExperienceGainMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterLevelUpInformationMessage extends CharacterLevelUpMessage {
	        static ID: number;
	        name: string;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterLevelUpInformationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterLevelUpInformationMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterLevelUpMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        newLevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterLevelUpMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterLevelUpMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterStatsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        stats: CharacterCharacteristicsInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterStatsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterStatsListMessage(param1: ICustomDataInput): void;
	    }
	    class FighterStatsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        stats: CharacterCharacteristicsInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FighterStatsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FighterStatsListMessage(param1: ICustomDataInput): void;
	    }
	    class LifePointsRegenBeginMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        regenRate: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LifePointsRegenBeginMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LifePointsRegenBeginMessage(param1: ICustomDataInput): void;
	    }
	    class LifePointsRegenEndMessage extends UpdateLifePointsMessage {
	        static ID: number;
	        lifePointsGained: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LifePointsRegenEndMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LifePointsRegenEndMessage(param1: ICustomDataInput): void;
	    }
	    class UpdateLifePointsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        lifePoints: number;
	        maxLifePoints: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateLifePointsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateLifePointsMessage(param1: ICustomDataInput): void;
	    }
	    class PlayerStatusUpdateErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PlayerStatusUpdateErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PlayerStatusUpdateErrorMessage(param1: ICustomDataInput): void;
	    }
	    class PlayerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accountId: number;
	        playerId: number;
	        status: PlayerStatus;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PlayerStatusUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PlayerStatusUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PlayerStatusUpdateRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        status: PlayerStatus;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PlayerStatusUpdateRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PlayerStatusUpdateRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ChatAbstractClientMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatAbstractClientMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatAbstractClientMessage(param1: ICustomDataInput): void;
	    }
	    class ChatAbstractServerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        channel: number;
	        content: string;
	        timestamp: number;
	        fingerprint: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatAbstractServerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatAbstractServerMessage(param1: ICustomDataInput): void;
	    }
	    class ChatAdminServerMessage extends ChatServerMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatAdminServerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatAdminServerMessage(param1: ICustomDataInput): void;
	    }
	    class ChatClientMultiMessage extends ChatAbstractClientMessage {
	        static ID: number;
	        channel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatClientMultiMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatClientMultiMessage(param1: ICustomDataInput): void;
	    }
	    class ChatClientMultiWithObjectMessage extends ChatClientMultiMessage {
	        static ID: number;
	        objects: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatClientMultiWithObjectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatClientMultiWithObjectMessage(param1: ICustomDataInput): void;
	    }
	    class ChatClientPrivateMessage extends ChatAbstractClientMessage {
	        static ID: number;
	        receiver: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatClientPrivateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatClientPrivateMessage(param1: ICustomDataInput): void;
	    }
	    class ChatClientPrivateWithObjectMessage extends ChatClientPrivateMessage {
	        static ID: number;
	        objects: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatClientPrivateWithObjectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatClientPrivateWithObjectMessage(param1: ICustomDataInput): void;
	    }
	    class ChatErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ChatServerCopyMessage extends ChatAbstractServerMessage {
	        static ID: number;
	        receiverId: number;
	        receiverName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatServerCopyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatServerCopyMessage(param1: ICustomDataInput): void;
	    }
	    class ChatServerCopyWithObjectMessage extends ChatServerCopyMessage {
	        static ID: number;
	        objects: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatServerCopyWithObjectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatServerCopyWithObjectMessage(param1: ICustomDataInput): void;
	    }
	    class ChatServerMessage extends ChatAbstractServerMessage {
	        static ID: number;
	        senderId: number;
	        senderName: string;
	        senderAccountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatServerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatServerMessage(param1: ICustomDataInput): void;
	    }
	    class ChatServerWithObjectMessage extends ChatServerMessage {
	        static ID: number;
	        objects: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatServerWithObjectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatServerWithObjectMessage(param1: ICustomDataInput): void;
	    }
	    class ChannelEnablingChangeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        channel: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChannelEnablingChangeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChannelEnablingChangeMessage(param1: ICustomDataInput): void;
	    }
	    class ChannelEnablingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        channel: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChannelEnablingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChannelEnablingMessage(param1: ICustomDataInput): void;
	    }
	    class EnabledChannelsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        channels: number[];
	        disallowed: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EnabledChannelsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EnabledChannelsMessage(param1: ICustomDataInput): void;
	    }
	    class ChatMessageReportMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        senderName: string;
	        content: string;
	        timestamp: number;
	        channel: number;
	        fingerprint: string;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatMessageReportMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatMessageReportMessage(param1: ICustomDataInput): void;
	    }
	    class ChatSmileyExtraPackListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        packIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatSmileyExtraPackListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatSmileyExtraPackListMessage(param1: ICustomDataInput): void;
	    }
	    class ChatSmileyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        entityId: number;
	        smileyId: number;
	        accountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatSmileyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatSmileyMessage(param1: ICustomDataInput): void;
	    }
	    class ChatSmileyRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        smileyId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChatSmileyRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChatSmileyRequestMessage(param1: ICustomDataInput): void;
	    }
	    class LocalizedChatSmileyMessage extends ChatSmileyMessage {
	        static ID: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LocalizedChatSmileyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LocalizedChatSmileyMessage(param1: ICustomDataInput): void;
	    }
	    class MoodSmileyRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        smileyId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MoodSmileyRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MoodSmileyRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MoodSmileyResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        resultCode: number;
	        smileyId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MoodSmileyResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MoodSmileyResultMessage(param1: ICustomDataInput): void;
	    }
	    class MoodSmileyUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accountId: number;
	        playerId: number;
	        smileyId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MoodSmileyUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MoodSmileyUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class GameCautiousMapMovementMessage extends GameMapMovementMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameCautiousMapMovementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameCautiousMapMovementMessage(param1: ICustomDataInput): void;
	    }
	    class GameCautiousMapMovementRequestMessage extends GameMapMovementRequestMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameCautiousMapMovementRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameCautiousMapMovementRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextCreateErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextCreateErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextCreateErrorMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextCreateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        context: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextCreateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextCreateMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextCreateRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextCreateRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextCreateRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextDestroyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextDestroyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextDestroyMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextKickMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextKickMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextKickMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextMoveElementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        movement: EntityMovementInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextMoveElementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextMoveElementMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextMoveMultipleElementsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        movements: EntityMovementInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextMoveMultipleElementsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextMoveMultipleElementsMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextQuitMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextQuitMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextQuitMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextReadyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextReadyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextReadyMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextRefreshEntityLookMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        look: EntityLook;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextRefreshEntityLookMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextRefreshEntityLookMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextRemoveElementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextRemoveElementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextRemoveElementMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextRemoveElementWithEventMessage extends GameContextRemoveElementMessage {
	        static ID: number;
	        elementEventId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextRemoveElementWithEventMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextRemoveElementWithEventMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextRemoveMultipleElementsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextRemoveMultipleElementsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextRemoveMultipleElementsMessage(param1: ICustomDataInput): void;
	    }
	    class GameContextRemoveMultipleElementsWithEventsMessage extends GameContextRemoveMultipleElementsMessage {
	        static ID: number;
	        elementEventIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextRemoveMultipleElementsWithEventsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(param1: ICustomDataInput): void;
	    }
	    class GameEntitiesDispositionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dispositions: IdentifiedEntityDispositionInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameEntitiesDispositionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameEntitiesDispositionMessage(param1: ICustomDataInput): void;
	    }
	    class GameEntityDispositionErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameEntityDispositionErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameEntityDispositionErrorMessage(param1: ICustomDataInput): void;
	    }
	    class GameEntityDispositionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        disposition: IdentifiedEntityDispositionInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameEntityDispositionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameEntityDispositionMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapChangeOrientationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        orientation: ActorOrientation;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapChangeOrientationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapChangeOrientationMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapChangeOrientationRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        direction: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapChangeOrientationRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapChangeOrientationRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapChangeOrientationsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        orientations: ActorOrientation[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapChangeOrientationsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapChangeOrientationsMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapMovementCancelMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapMovementCancelMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapMovementCancelMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapMovementConfirmMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapMovementConfirmMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapMovementConfirmMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapMovementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        keyMovements: number[];
	        actorId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapMovementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapMovementMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapMovementRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        keyMovements: number[];
	        mapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapMovementRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapMovementRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameMapNoMovementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameMapNoMovementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameMapNoMovementMessage(param1: ICustomDataInput): void;
	    }
	    class ShowCellMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        sourceId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShowCellMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShowCellMessage(param1: ICustomDataInput): void;
	    }
	    class ShowCellRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShowCellRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShowCellRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ShowCellSpectatorMessage extends ShowCellMessage {
	        static ID: number;
	        playerName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShowCellSpectatorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShowCellSpectatorMessage(param1: ICustomDataInput): void;
	    }
	    class DisplayNumericalValuePaddockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        rideId: number;
	        value: number;
	        type: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DisplayNumericalValuePaddockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DisplayNumericalValuePaddockMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonKeyRingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        availables: number[];
	        unavailables: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonKeyRingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonKeyRingMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonKeyRingUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        available: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonKeyRingUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonKeyRingUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightEndMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        duration: number;
	        ageBonus: number;
	        lootShareLimitMalus: number;
	        results: FightResultListEntry[];
	        namedPartyTeamsOutcomes: NamedPartyTeamWithOutcome[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightEndMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightEndMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightHumanReadyStateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        characterId: number;
	        isReady: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightHumanReadyStateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightHumanReadyStateMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightJoinMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        canBeCancelled: boolean;
	        canSayReady: boolean;
	        isFightStarted: boolean;
	        timeMaxBeforeFightStart: number;
	        fightType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightJoinMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightJoinMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightJoinRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fighterId: number;
	        fightId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightJoinRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightJoinRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightLeaveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        charId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightLeaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightLeaveMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightNewRoundMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        roundNumber: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightNewRoundMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightNewRoundMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightNewWaveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        teamId: number;
	        nbTurnBeforeNextWave: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightNewWaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightNewWaveMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightOptionStateUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        teamId: number;
	        option: number;
	        state: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightOptionStateUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightOptionStateUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightOptionToggleMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        option: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightOptionToggleMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightOptionToggleMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementPositionRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementPositionRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementPositionRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementPossiblePositionsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        positionsForChallengers: number[];
	        positionsForDefenders: number[];
	        teamNumber: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementPossiblePositionsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementPossiblePositionsMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementSwapPositionsAcceptMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requestId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementSwapPositionsAcceptMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementSwapPositionsAcceptMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementSwapPositionsCancelMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requestId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementSwapPositionsCancelMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementSwapPositionsCancelMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementSwapPositionsCancelledMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requestId: number;
	        cancellerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementSwapPositionsErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementSwapPositionsErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementSwapPositionsErrorMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementSwapPositionsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dispositions: IdentifiedEntityDispositionInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementSwapPositionsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementSwapPositionsMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementSwapPositionsOfferMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requestId: number;
	        requesterId: number;
	        requesterCellId: number;
	        requestedId: number;
	        requestedCellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementSwapPositionsOfferMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementSwapPositionsOfferMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightPlacementSwapPositionsRequestMessage extends GameFightPlacementPositionRequestMessage {
	        static ID: number;
	        requestedId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightPlacementSwapPositionsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightPlacementSwapPositionsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightReadyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        isReady: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightReadyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightReadyMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightRemoveTeamMemberMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        teamId: number;
	        charId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightRemoveTeamMemberMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightRemoveTeamMemberMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightResumeMessage extends GameFightSpectateMessage {
	        static ID: number;
	        spellCooldowns: GameFightSpellCooldown[];
	        summonCount: number;
	        bombCount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightResumeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightResumeMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightResumeWithSlavesMessage extends GameFightResumeMessage {
	        static ID: number;
	        slavesInfo: GameFightResumeSlaveInfo[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightResumeWithSlavesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightResumeWithSlavesMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightSpectateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        effects: FightDispellableEffectExtendedInformations[];
	        marks: GameActionMark[];
	        gameTurn: number;
	        fightStart: number;
	        idols: Idol[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightSpectateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightSpectateMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightSpectatePlayerRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightSpectatePlayerRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightSpectatePlayerRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightSpectatorJoinMessage extends GameFightJoinMessage {
	        static ID: number;
	        namedPartyTeams: NamedPartyTeam[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightSpectatorJoinMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightSpectatorJoinMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightStartMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        idols: Idol[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightStartMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightStartMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightStartingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightType: number;
	        attackerId: number;
	        defenderId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightStartingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightStartingMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightSynchronizeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fighters: GameFightFighterInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightSynchronizeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightSynchronizeMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnEndMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnEndMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnEndMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnFinishMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnFinishMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnFinishMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ids: number[];
	        deadsIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnListMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnReadyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        isReady: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnReadyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnReadyMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnReadyRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnReadyRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnReadyRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnResumeMessage extends GameFightTurnStartMessage {
	        static ID: number;
	        remainingTime: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnResumeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnResumeMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnStartMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        waitTime: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnStartMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnStartMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightTurnStartPlayingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTurnStartPlayingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTurnStartPlayingMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightUpdateTeamMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        team: FightTeamInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightUpdateTeamMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightUpdateTeamMessage(param1: ICustomDataInput): void;
	    }
	    class SlaveSwitchContextMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        masterId: number;
	        slaveId: number;
	        slaveSpells: SpellItem[];
	        slaveStats: CharacterCharacteristicsInformations;
	        shortcuts: Shortcut[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SlaveSwitchContextMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SlaveSwitchContextMessage(param1: ICustomDataInput): void;
	    }
	    class ChallengeInfoMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        challengeId: number;
	        targetId: number;
	        xpBonus: number;
	        dropBonus: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChallengeInfoMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChallengeInfoMessage(param1: ICustomDataInput): void;
	    }
	    class ChallengeResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        challengeId: number;
	        success: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChallengeResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChallengeResultMessage(param1: ICustomDataInput): void;
	    }
	    class ChallengeTargetUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        challengeId: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChallengeTargetUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChallengeTargetUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class ChallengeTargetsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        targetIds: number[];
	        targetCells: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChallengeTargetsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChallengeTargetsListMessage(param1: ICustomDataInput): void;
	    }
	    class ChallengeTargetsListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        challengeId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChallengeTargetsListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChallengeTargetsListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightRefreshFighterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        informations: GameContextActorInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightRefreshFighterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightRefreshFighterMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightShowFighterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        informations: GameFightFighterInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightShowFighterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightShowFighterMessage(param1: ICustomDataInput): void;
	    }
	    class GameFightShowFighterRandomStaticPoseMessage extends GameFightShowFighterMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightShowFighterRandomStaticPoseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightShowFighterRandomStaticPoseMessage(param1: ICustomDataInput): void;
	    }
	    class GameDataPaddockObjectAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        paddockItemDescription: PaddockItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameDataPaddockObjectAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameDataPaddockObjectAddMessage(param1: ICustomDataInput): void;
	    }
	    class GameDataPaddockObjectListAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        paddockItemDescription: PaddockItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameDataPaddockObjectListAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameDataPaddockObjectListAddMessage(param1: ICustomDataInput): void;
	    }
	    class GameDataPaddockObjectRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameDataPaddockObjectRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameDataPaddockObjectRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class MountDataErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountDataErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountDataErrorMessage(param1: ICustomDataInput): void;
	    }
	    class MountDataMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountData: MountClientData;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountDataMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountDataMessage(param1: ICustomDataInput): void;
	    }
	    class MountEmoteIconUsedOkMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountId: number;
	        reactionType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountEmoteIconUsedOkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountEmoteIconUsedOkMessage(param1: ICustomDataInput): void;
	    }
	    class MountEquipedErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        errorType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountEquipedErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountEquipedErrorMessage(param1: ICustomDataInput): void;
	    }
	    class MountFeedRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountUid: number;
	        mountLocation: number;
	        mountFoodUid: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountFeedRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountFeedRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountInformationInPaddockRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapRideId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountInformationInPaddockRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountInformationInPaddockRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountInformationRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        time: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountInformationRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountInformationRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountReleaseRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountReleaseRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountReleaseRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountReleasedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountReleasedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountReleasedMessage(param1: ICustomDataInput): void;
	    }
	    class MountRenameRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        mountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountRenameRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountRenameRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountRenamedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountId: number;
	        name: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountRenamedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountRenamedMessage(param1: ICustomDataInput): void;
	    }
	    class MountRidingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        isRiding: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountRidingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountRidingMessage(param1: ICustomDataInput): void;
	    }
	    class MountSetMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountData: MountClientData;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountSetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountSetMessage(param1: ICustomDataInput): void;
	    }
	    class MountSetXpRatioRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        xpRatio: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountSetXpRatioRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountSetXpRatioRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountSterilizeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountSterilizeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountSterilizeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountSterilizedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountSterilizedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountSterilizedMessage(param1: ICustomDataInput): void;
	    }
	    class MountToggleRidingRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountToggleRidingRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountToggleRidingRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MountUnSetMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountUnSetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountUnSetMessage(param1: ICustomDataInput): void;
	    }
	    class MountXpRatioMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ratio: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountXpRatioMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountXpRatioMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockBuyRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        proposedPrice: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockBuyRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockBuyRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockBuyResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        paddockId: number;
	        bought: boolean;
	        realPrice: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockBuyResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockBuyResultMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockMoveItemRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        oldCellId: number;
	        newCellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockMoveItemRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockMoveItemRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockRemoveItemRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockRemoveItemRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockRemoveItemRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockSellRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        price: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockSellRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockSellRequestMessage(param1: ICustomDataInput): void;
	    }
	    class NotificationByServerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        parameters: string[];
	        forceOpen: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NotificationByServerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NotificationByServerMessage(param1: ICustomDataInput): void;
	    }
	    class NotificationListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        flags: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NotificationListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NotificationListMessage(param1: ICustomDataInput): void;
	    }
	    class NotificationResetMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NotificationResetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NotificationResetMessage(param1: ICustomDataInput): void;
	    }
	    class NotificationUpdateFlagMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        index: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NotificationUpdateFlagMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NotificationUpdateFlagMessage(param1: ICustomDataInput): void;
	    }
	    class ChangeMapMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChangeMapMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChangeMapMessage(param1: ICustomDataInput): void;
	    }
	    class CurrentMapMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        mapKey: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CurrentMapMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CurrentMapMessage(param1: ICustomDataInput): void;
	    }
	    class ErrorMapNotFoundMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ErrorMapNotFoundMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ErrorMapNotFoundMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayShowActorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        informations: GameRolePlayActorInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayShowActorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayShowActorMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayShowActorWithEventMessage extends GameRolePlayShowActorMessage {
	        static ID: number;
	        actorEventId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayShowActorWithEventMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayShowActorWithEventMessage(param1: ICustomDataInput): void;
	    }
	    class MapComplementaryInformationsDataInHouseMessage extends MapComplementaryInformationsDataMessage {
	        static ID: number;
	        currentHouse: HouseInformationsInside;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapComplementaryInformationsDataInHouseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapComplementaryInformationsDataInHouseMessage(param1: ICustomDataInput): void;
	    }
	    class MapComplementaryInformationsDataMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        mapId: number;
	        houses: HouseInformations[];
	        actors: GameRolePlayActorInformations[];
	        interactiveElements: InteractiveElement[];
	        statedElements: StatedElement[];
	        obstacles: MapObstacle[];
	        fights: FightCommonInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapComplementaryInformationsDataMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapComplementaryInformationsDataMessage(param1: ICustomDataInput): void;
	    }
	    class MapComplementaryInformationsWithCoordsMessage extends MapComplementaryInformationsDataMessage {
	        static ID: number;
	        worldX: number;
	        worldY: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapComplementaryInformationsWithCoordsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapComplementaryInformationsWithCoordsMessage(param1: ICustomDataInput): void;
	    }
	    class MapFightCountMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightCount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapFightCountMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapFightCountMessage(param1: ICustomDataInput): void;
	    }
	    class MapInformationsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapInformationsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapInformationsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MapObstacleUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        obstacles: MapObstacle[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapObstacleUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapObstacleUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class MapRunningFightDetailsExtendedMessage extends MapRunningFightDetailsMessage {
	        static ID: number;
	        namedPartyTeams: NamedPartyTeam[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapRunningFightDetailsExtendedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapRunningFightDetailsExtendedMessage(param1: ICustomDataInput): void;
	    }
	    class MapRunningFightDetailsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        attackers: GameFightFighterLightInformations[];
	        defenders: GameFightFighterLightInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapRunningFightDetailsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapRunningFightDetailsMessage(param1: ICustomDataInput): void;
	    }
	    class MapRunningFightDetailsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapRunningFightDetailsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapRunningFightDetailsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MapRunningFightListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fights: FightExternalInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapRunningFightListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapRunningFightListMessage(param1: ICustomDataInput): void;
	    }
	    class MapRunningFightListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapRunningFightListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapRunningFightListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class StopToListenRunningFightRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StopToListenRunningFightRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StopToListenRunningFightRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportOnSameMapMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        targetId: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportOnSameMapMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportOnSameMapMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayFreeSoulRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayFreeSoulRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayFreeSoulRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayGameOverMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayGameOverMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayGameOverMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPlayerLifeStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        state: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPlayerLifeStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPlayerLifeStatusMessage(param1: ICustomDataInput): void;
	    }
	    class WarnOnPermaDeathMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_WarnOnPermaDeathMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_WarnOnPermaDeathMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayDelayedActionFinishedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        delayedCharacterId: number;
	        delayTypeId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayDelayedActionFinishedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayDelayedActionFinishedMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayDelayedActionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        delayedCharacterId: number;
	        delayTypeId: number;
	        delayEndTime: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayDelayedActionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayDelayedActionMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayDelayedObjectUseMessage extends GameRolePlayDelayedActionMessage {
	        static ID: number;
	        objectGID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayDelayedObjectUseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayDelayedObjectUseMessage(param1: ICustomDataInput): void;
	    }
	    class ComicReadingBeginMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        comicId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ComicReadingBeginMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ComicReadingBeginMessage(param1: ICustomDataInput): void;
	    }
	    class DocumentReadingBeginMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        documentId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DocumentReadingBeginMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DocumentReadingBeginMessage(param1: ICustomDataInput): void;
	    }
	    class EmoteAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        emoteId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmoteAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmoteAddMessage(param1: ICustomDataInput): void;
	    }
	    class EmoteListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        emoteIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmoteListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmoteListMessage(param1: ICustomDataInput): void;
	    }
	    class EmotePlayAbstractMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        emoteId: number;
	        emoteStartTime: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmotePlayAbstractMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmotePlayAbstractMessage(param1: ICustomDataInput): void;
	    }
	    class EmotePlayErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        emoteId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmotePlayErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmotePlayErrorMessage(param1: ICustomDataInput): void;
	    }
	    class EmotePlayMassiveMessage extends EmotePlayAbstractMessage {
	        static ID: number;
	        actorIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmotePlayMassiveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmotePlayMassiveMessage(param1: ICustomDataInput): void;
	    }
	    class EmotePlayMessage extends EmotePlayAbstractMessage {
	        static ID: number;
	        actorId: number;
	        accountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmotePlayMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmotePlayMessage(param1: ICustomDataInput): void;
	    }
	    class EmotePlayRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        emoteId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmotePlayRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmotePlayRequestMessage(param1: ICustomDataInput): void;
	    }
	    class EmoteRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        emoteId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EmoteRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EmoteRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayAggressionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        attackerId: number;
	        defenderId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayAggressionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayAggressionMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayAttackMonsterRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        monsterGroupId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayAttackMonsterRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayAttackMonsterRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayFightRequestCanceledMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        sourceId: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayFightRequestCanceledMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayFightRequestCanceledMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPlayerFightFriendlyAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        accept: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPlayerFightFriendlyAnsweredMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        sourceId: number;
	        targetId: number;
	        accept: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPlayerFightFriendlyRequestedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        sourceId: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPlayerFightRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        targetId: number;
	        targetCellId: number;
	        friendly: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPlayerFightRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPlayerFightRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayRemoveChallengeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayRemoveChallengeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayRemoveChallengeMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayShowChallengeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        commonsInfos: FightCommonInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayShowChallengeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayShowChallengeMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaFightAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        accept: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaFightAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaFightAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaFightPropositionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        alliesId: number[];
	        duration: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaFightPropositionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaFightPropositionMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaFighterStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        playerId: number;
	        accepted: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaFighterStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaFighterStatusMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaRegisterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        battleMode: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaRegisterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaRegisterMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaRegistrationStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        registered: boolean;
	        step: number;
	        battleMode: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaRegistrationStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaRegistrationStatusMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaSwitchToFightServerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        address: string;
	        port: number;
	        ticket: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaSwitchToFightServerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaSwitchToFightServerMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaSwitchToGameServerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        validToken: boolean;
	        ticket: number[];
	        homeServerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaUnregisterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaUnregisterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaUnregisterMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayArenaUpdatePlayerInfosMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        rank: number;
	        bestDailyRank: number;
	        bestRank: number;
	        victoryCount: number;
	        arenaFightcount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1: ICustomDataInput): void;
	    }
	    class AccountHouseMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        houses: AccountHouseInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccountHouseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccountHouseMessage(param1: ICustomDataInput): void;
	    }
	    class HouseBuyRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        proposedPrice: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseBuyRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseBuyRequestMessage(param1: ICustomDataInput): void;
	    }
	    class HouseBuyResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        houseId: number;
	        bought: boolean;
	        realPrice: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseBuyResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseBuyResultMessage(param1: ICustomDataInput): void;
	    }
	    class HouseKickIndoorMerchantRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseKickIndoorMerchantRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseKickIndoorMerchantRequestMessage(param1: ICustomDataInput): void;
	    }
	    class HouseKickRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseKickRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseKickRequestMessage(param1: ICustomDataInput): void;
	    }
	    class HouseLockFromInsideRequestMessage extends LockableChangeCodeMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseLockFromInsideRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseLockFromInsideRequestMessage(param1: ICustomDataInput): void;
	    }
	    class HousePropertiesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        properties: HouseInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HousePropertiesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HousePropertiesMessage(param1: ICustomDataInput): void;
	    }
	    class HouseSellFromInsideRequestMessage extends HouseSellRequestMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseSellFromInsideRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseSellFromInsideRequestMessage(param1: ICustomDataInput): void;
	    }
	    class HouseSellRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        amount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseSellRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseSellRequestMessage(param1: ICustomDataInput): void;
	    }
	    class HouseSoldMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        houseId: number;
	        realPrice: number;
	        buyerName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseSoldMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseSoldMessage(param1: ICustomDataInput): void;
	    }
	    class HouseToSellFilterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        areaId: number;
	        atLeastNbRoom: number;
	        atLeastNbChest: number;
	        skillRequested: number;
	        maxPrice: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseToSellFilterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseToSellFilterMessage(param1: ICustomDataInput): void;
	    }
	    class HouseToSellListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        pageIndex: number;
	        totalPage: number;
	        houseList: HouseInformationsForSell[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseToSellListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseToSellListMessage(param1: ICustomDataInput): void;
	    }
	    class HouseToSellListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        pageIndex: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseToSellListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseToSellListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class HouseGuildNoneMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        houseId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseGuildNoneMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseGuildNoneMessage(param1: ICustomDataInput): void;
	    }
	    class HouseGuildRightsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        houseId: number;
	        guildInfo: GuildInformations;
	        rights: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseGuildRightsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseGuildRightsMessage(param1: ICustomDataInput): void;
	    }
	    class HouseGuildRightsViewMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseGuildRightsViewMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseGuildRightsViewMessage(param1: ICustomDataInput): void;
	    }
	    class HouseGuildShareRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        rights: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseGuildShareRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseGuildShareRequestMessage(param1: ICustomDataInput): void;
	    }
	    class JobAllowMultiCraftRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enabled: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobAllowMultiCraftRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobAllowMultiCraftRequestMessage(param1: ICustomDataInput): void;
	    }
	    class JobBookSubscriptionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        addedOrDeleted: boolean;
	        jobId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobBookSubscriptionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobBookSubscriptionMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        listEntry: JobCrafterDirectoryListEntry;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryAddMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryDefineSettingsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        settings: JobCrafterDirectorySettings;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryDefineSettingsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryDefineSettingsMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryEntryMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playerInfo: JobCrafterDirectoryEntryPlayerInfo;
	        jobInfoList: JobCrafterDirectoryEntryJobInfo[];
	        playerLook: EntityLook;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryEntryMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryEntryMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryEntryRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryEntryRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryEntryRequestMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        listEntries: JobCrafterDirectoryListEntry[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryListMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        jobId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        jobId: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectorySettingsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        craftersSettings: JobCrafterDirectorySettings[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectorySettingsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectorySettingsMessage(param1: ICustomDataInput): void;
	    }
	    class JobDescriptionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        jobsDescription: JobDescription[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobDescriptionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobDescriptionMessage(param1: ICustomDataInput): void;
	    }
	    class JobExperienceMultiUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        experiencesUpdate: JobExperience[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobExperienceMultiUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobExperienceMultiUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class JobExperienceOtherPlayerUpdateMessage extends JobExperienceUpdateMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobExperienceOtherPlayerUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobExperienceOtherPlayerUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class JobExperienceUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        experiencesUpdate: JobExperience;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobExperienceUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobExperienceUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class JobLevelUpMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        newLevel: number;
	        jobsDescription: JobDescription;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobLevelUpMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobLevelUpMessage(param1: ICustomDataInput): void;
	    }
	    class JobMultiCraftAvailableSkillsMessage extends JobAllowMultiCraftRequestMessage {
	        static ID: number;
	        playerId: number;
	        skills: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobMultiCraftAvailableSkillsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobMultiCraftAvailableSkillsMessage(param1: ICustomDataInput): void;
	    }
	    class LockableChangeCodeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        code: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LockableChangeCodeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LockableChangeCodeMessage(param1: ICustomDataInput): void;
	    }
	    class LockableCodeResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        result: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LockableCodeResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LockableCodeResultMessage(param1: ICustomDataInput): void;
	    }
	    class LockableShowCodeDialogMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        changeOrUse: boolean;
	        codeSize: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LockableShowCodeDialogMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LockableShowCodeDialogMessage(param1: ICustomDataInput): void;
	    }
	    class LockableStateUpdateAbstractMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        locked: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LockableStateUpdateAbstractMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LockableStateUpdateAbstractMessage(param1: ICustomDataInput): void;
	    }
	    class LockableStateUpdateHouseDoorMessage extends LockableStateUpdateAbstractMessage {
	        static ID: number;
	        houseId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LockableStateUpdateHouseDoorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LockableStateUpdateHouseDoorMessage(param1: ICustomDataInput): void;
	    }
	    class LockableStateUpdateStorageMessage extends LockableStateUpdateAbstractMessage {
	        static ID: number;
	        mapId: number;
	        elementId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LockableStateUpdateStorageMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LockableStateUpdateStorageMessage(param1: ICustomDataInput): void;
	    }
	    class LockableUseCodeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        code: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LockableUseCodeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LockableUseCodeMessage(param1: ICustomDataInput): void;
	    }
	    class AlliancePrismDialogQuestionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlliancePrismDialogQuestionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlliancePrismDialogQuestionMessage(param1: ICustomDataInput): void;
	    }
	    class AllianceTaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionExtendedMessage {
	        static ID: number;
	        alliance: BasicNamedAllianceInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceTaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataInput): void;
	    }
	    class EntityTalkMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        entityId: number;
	        textId: number;
	        parameters: string[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EntityTalkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EntityTalkMessage(param1: ICustomDataInput): void;
	    }
	    class MapNpcsQuestStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        npcsIdsWithQuest: number[];
	        questFlags: GameRolePlayNpcQuestFlag[];
	        npcsIdsWithoutQuest: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapNpcsQuestStatusUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapNpcsQuestStatusUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class NpcDialogCreationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        npcId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NpcDialogCreationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NpcDialogCreationMessage(param1: ICustomDataInput): void;
	    }
	    class NpcDialogQuestionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        messageId: number;
	        dialogParams: string[];
	        visibleReplies: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NpcDialogQuestionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NpcDialogQuestionMessage(param1: ICustomDataInput): void;
	    }
	    class NpcDialogReplyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        replyId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NpcDialogReplyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NpcDialogReplyMessage(param1: ICustomDataInput): void;
	    }
	    class NpcGenericActionFailureMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NpcGenericActionFailureMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NpcGenericActionFailureMessage(param1: ICustomDataInput): void;
	    }
	    class NpcGenericActionRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        npcId: number;
	        npcActionId: number;
	        npcMapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NpcGenericActionRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NpcGenericActionRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorDialogQuestionBasicMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildInfo: BasicGuildInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorDialogQuestionBasicMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorDialogQuestionBasicMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorDialogQuestionExtendedMessage extends TaxCollectorDialogQuestionBasicMessage {
	        static ID: number;
	        maxPods: number;
	        prospecting: number;
	        wisdom: number;
	        taxCollectorsCount: number;
	        taxCollectorAttack: number;
	        kamas: number;
	        experience: number;
	        pods: number;
	        itemsValue: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorDialogQuestionExtendedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectGroundAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number;
	        objectGID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectGroundAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectGroundAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectGroundListAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cells: number[];
	        referenceIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectGroundListAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectGroundListAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectGroundRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cell: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectGroundRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectGroundRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectGroundRemovedMultipleMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cells: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectGroundRemovedMultipleMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectGroundRemovedMultipleMessage(param1: ICustomDataInput): void;
	    }
	    class GameDataPlayFarmObjectAnimationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cellId: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameDataPlayFarmObjectAnimationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameDataPlayFarmObjectAnimationMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockPropertiesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        properties: PaddockInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockPropertiesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockPropertiesMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockSellBuyDialogMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        bsell: boolean;
	        ownerId: number;
	        price: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockSellBuyDialogMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockSellBuyDialogMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockToSellFilterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        areaId: number;
	        atLeastNbMount: number;
	        atLeastNbMachine: number;
	        maxPrice: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockToSellFilterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockToSellFilterMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockToSellListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        pageIndex: number;
	        totalPage: number;
	        paddockList: PaddockInformationsForSell[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockToSellListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockToSellListMessage(param1: ICustomDataInput): void;
	    }
	    class PaddockToSellListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        pageIndex: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockToSellListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockToSellListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class AbstractPartyEventMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractPartyEventMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractPartyEventMessage(param1: ICustomDataInput): void;
	    }
	    class AbstractPartyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        partyId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractPartyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractPartyMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderAvailableDungeonsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderAvailableDungeonsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderAvailableDungeonsMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderAvailableDungeonsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderListenErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderListenErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderListenErrorMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderListenRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderListenRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderListenRequestMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderRegisterErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderRegisterErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderRegisterErrorMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderRegisterRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderRegisterRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderRegisterRequestMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderRegisterSuccessMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderRegisterSuccessMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderRegisterSuccessMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderRoomContentMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        players: DungeonPartyFinderPlayer[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderRoomContentMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderRoomContentMessage(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderRoomContentUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        addedPlayers: DungeonPartyFinderPlayer[];
	        removedPlayersIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderRoomContentUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PartyAbdicateThroneMessage extends AbstractPartyMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyAbdicateThroneMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyAbdicateThroneMessage(param1: ICustomDataInput): void;
	    }
	    class PartyAcceptInvitationMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyAcceptInvitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyAcceptInvitationMessage(param1: ICustomDataInput): void;
	    }
	    class PartyCancelInvitationMessage extends AbstractPartyMessage {
	        static ID: number;
	        guestId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCancelInvitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCancelInvitationMessage(param1: ICustomDataInput): void;
	    }
	    class PartyCancelInvitationNotificationMessage extends AbstractPartyEventMessage {
	        static ID: number;
	        cancelerId: number;
	        guestId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCancelInvitationNotificationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCancelInvitationNotificationMessage(param1: ICustomDataInput): void;
	    }
	    class PartyCannotJoinErrorMessage extends AbstractPartyMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCannotJoinErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCannotJoinErrorMessage(param1: ICustomDataInput): void;
	    }
	    class PartyDeletedMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyDeletedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyDeletedMessage(param1: ICustomDataInput): void;
	    }
	    class PartyFollowMemberRequestMessage extends AbstractPartyMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyFollowMemberRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyFollowMemberRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyFollowStatusUpdateMessage extends AbstractPartyMessage {
	        static ID: number;
	        success: boolean;
	        followedId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyFollowStatusUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyFollowStatusUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PartyFollowThisMemberRequestMessage extends PartyFollowMemberRequestMessage {
	        static ID: number;
	        enabled: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyFollowThisMemberRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyFollowThisMemberRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationArenaRequestMessage extends PartyInvitationRequestMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationArenaRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationArenaRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationCancelledForGuestMessage extends AbstractPartyMessage {
	        static ID: number;
	        cancelerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationCancelledForGuestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationCancelledForGuestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationDetailsMessage extends AbstractPartyMessage {
	        static ID: number;
	        partyType: number;
	        partyName: string;
	        fromId: number;
	        fromName: string;
	        leaderId: number;
	        members: PartyInvitationMemberInformations[];
	        guests: PartyGuestInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationDetailsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationDetailsMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationDetailsRequestMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationDetailsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationDetailsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationDungeonDetailsMessage extends PartyInvitationDetailsMessage {
	        static ID: number;
	        dungeonId: number;
	        playersDungeonReady: boolean[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationDungeonDetailsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationDungeonDetailsMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationDungeonMessage extends PartyInvitationMessage {
	        static ID: number;
	        dungeonId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationDungeonMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationDungeonMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationDungeonRequestMessage extends PartyInvitationRequestMessage {
	        static ID: number;
	        dungeonId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationDungeonRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationDungeonRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationMessage extends AbstractPartyMessage {
	        static ID: number;
	        partyType: number;
	        partyName: string;
	        maxParticipants: number;
	        fromId: number;
	        fromName: string;
	        toId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationMessage(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyJoinMessage extends AbstractPartyMessage {
	        static ID: number;
	        partyType: number;
	        partyLeaderId: number;
	        maxParticipants: number;
	        members: PartyMemberInformations[];
	        guests: PartyGuestInformations[];
	        restricted: boolean;
	        partyName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyJoinMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyJoinMessage(param1: ICustomDataInput): void;
	    }
	    class PartyKickRequestMessage extends AbstractPartyMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyKickRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyKickRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyKickedByMessage extends AbstractPartyMessage {
	        static ID: number;
	        kickerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyKickedByMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyKickedByMessage(param1: ICustomDataInput): void;
	    }
	    class PartyLeaderUpdateMessage extends AbstractPartyEventMessage {
	        static ID: number;
	        partyLeaderId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyLeaderUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyLeaderUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PartyLeaveMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyLeaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyLeaveMessage(param1: ICustomDataInput): void;
	    }
	    class PartyLeaveRequestMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyLeaveRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyLeaveRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyLocateMembersMessage extends AbstractPartyMessage {
	        static ID: number;
	        geopositions: PartyMemberGeoPosition[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyLocateMembersMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyLocateMembersMessage(param1: ICustomDataInput): void;
	    }
	    class PartyLoyaltyStatusMessage extends AbstractPartyMessage {
	        static ID: number;
	        loyal: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyLoyaltyStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyLoyaltyStatusMessage(param1: ICustomDataInput): void;
	    }
	    class PartyMemberEjectedMessage extends PartyMemberRemoveMessage {
	        static ID: number;
	        kickerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberEjectedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberEjectedMessage(param1: ICustomDataInput): void;
	    }
	    class PartyMemberInFightMessage extends AbstractPartyMessage {
	        static ID: number;
	        reason: number;
	        memberId: number;
	        memberAccountId: number;
	        memberName: string;
	        fightId: number;
	        fightMap: MapCoordinatesExtended;
	        timeBeforeFightStart: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberInFightMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberInFightMessage(param1: ICustomDataInput): void;
	    }
	    class PartyMemberRemoveMessage extends AbstractPartyEventMessage {
	        static ID: number;
	        leavingPlayerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class PartyModifiableStatusMessage extends AbstractPartyMessage {
	        static ID: number;
	        enabled: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyModifiableStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyModifiableStatusMessage(param1: ICustomDataInput): void;
	    }
	    class PartyNameSetErrorMessage extends AbstractPartyMessage {
	        static ID: number;
	        result: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyNameSetErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyNameSetErrorMessage(param1: ICustomDataInput): void;
	    }
	    class PartyNameSetRequestMessage extends AbstractPartyMessage {
	        static ID: number;
	        partyName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyNameSetRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyNameSetRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyNameUpdateMessage extends AbstractPartyMessage {
	        static ID: number;
	        partyName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyNameUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyNameUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PartyNewGuestMessage extends AbstractPartyEventMessage {
	        static ID: number;
	        guest: PartyGuestInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyNewGuestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyNewGuestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyNewMemberMessage extends PartyUpdateMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyNewMemberMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyNewMemberMessage(param1: ICustomDataInput): void;
	    }
	    class PartyPledgeLoyaltyRequestMessage extends AbstractPartyMessage {
	        static ID: number;
	        loyal: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyPledgeLoyaltyRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyPledgeLoyaltyRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyRefuseInvitationMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyRefuseInvitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyRefuseInvitationMessage(param1: ICustomDataInput): void;
	    }
	    class PartyRefuseInvitationNotificationMessage extends AbstractPartyEventMessage {
	        static ID: number;
	        guestId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyRefuseInvitationNotificationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyRefuseInvitationNotificationMessage(param1: ICustomDataInput): void;
	    }
	    class PartyRestrictedMessage extends AbstractPartyMessage {
	        static ID: number;
	        restricted: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyRestrictedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyRestrictedMessage(param1: ICustomDataInput): void;
	    }
	    class PartyStopFollowRequestMessage extends AbstractPartyMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyStopFollowRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyStopFollowRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PartyUpdateLightMessage extends AbstractPartyEventMessage {
	        static ID: number;
	        id: number;
	        lifePoints: number;
	        maxLifePoints: number;
	        prospecting: number;
	        regenRate: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyUpdateLightMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyUpdateLightMessage(param1: ICustomDataInput): void;
	    }
	    class PartyUpdateMessage extends AbstractPartyEventMessage {
	        static ID: number;
	        memberInformations: PartyMemberInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PartyCompanionUpdateLightMessage extends PartyUpdateLightMessage {
	        static ID: number;
	        indexId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCompanionUpdateLightMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCompanionUpdateLightMessage(param1: ICustomDataInput): void;
	    }
	    class PurchasableDialogMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        buyOrSell: boolean;
	        purchasableId: number;
	        price: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PurchasableDialogMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PurchasableDialogMessage(param1: ICustomDataInput): void;
	    }
	    class GuidedModeQuitRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuidedModeQuitRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuidedModeQuitRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuidedModeReturnRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuidedModeReturnRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuidedModeReturnRequestMessage(param1: ICustomDataInput): void;
	    }
	    class QuestListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        finishedQuestsIds: number[];
	        finishedQuestsCounts: number[];
	        activeQuests: QuestActiveInformations[];
	        reinitDoneQuestsIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestListMessage(param1: ICustomDataInput): void;
	    }
	    class QuestListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class QuestObjectiveValidatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        objectiveId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestObjectiveValidatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestObjectiveValidatedMessage(param1: ICustomDataInput): void;
	    }
	    class QuestObjectiveValidationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        objectiveId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestObjectiveValidationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestObjectiveValidationMessage(param1: ICustomDataInput): void;
	    }
	    class QuestStartRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestStartRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestStartRequestMessage(param1: ICustomDataInput): void;
	    }
	    class QuestStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestStartedMessage(param1: ICustomDataInput): void;
	    }
	    class QuestStepInfoMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        infos: QuestActiveInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestStepInfoMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestStepInfoMessage(param1: ICustomDataInput): void;
	    }
	    class QuestStepInfoRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestStepInfoRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestStepInfoRequestMessage(param1: ICustomDataInput): void;
	    }
	    class QuestStepStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        stepId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestStepStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestStepStartedMessage(param1: ICustomDataInput): void;
	    }
	    class QuestStepValidatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        stepId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestStepValidatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestStepValidatedMessage(param1: ICustomDataInput): void;
	    }
	    class QuestValidatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestValidatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestValidatedMessage(param1: ICustomDataInput): void;
	    }
	    class SpellForgetUIMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        open: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellForgetUIMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellForgetUIMessage(param1: ICustomDataInput): void;
	    }
	    class SpellForgottenMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellsId: number[];
	        boostPoint: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellForgottenMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellForgottenMessage(param1: ICustomDataInput): void;
	    }
	    class SpellItemBoostMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        statId: number;
	        spellId: number;
	        value: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellItemBoostMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellItemBoostMessage(param1: ICustomDataInput): void;
	    }
	    class SpellUpgradeFailureMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellUpgradeFailureMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellUpgradeFailureMessage(param1: ICustomDataInput): void;
	    }
	    class SpellUpgradeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellId: number;
	        spellLevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellUpgradeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellUpgradeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class SpellUpgradeSuccessMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellId: number;
	        spellLevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellUpgradeSuccessMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellUpgradeSuccessMessage(param1: ICustomDataInput): void;
	    }
	    class ValidateSpellForgetMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ValidateSpellForgetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ValidateSpellForgetMessage(param1: ICustomDataInput): void;
	    }
	    class StatsUpgradeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        useAdditionnal: boolean;
	        statId: number;
	        boostPoint: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatsUpgradeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatsUpgradeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class StatsUpgradeResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        result: number;
	        nbCharacBoost: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatsUpgradeResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatsUpgradeResultMessage(param1: ICustomDataInput): void;
	    }
	    class PortalUseRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        portalId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PortalUseRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PortalUseRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntAvailableRetryCountUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        availableRetryCount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntAvailableRetryCountUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntAvailableRetryCountUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntDigRequestAnswerFailedMessage extends TreasureHuntDigRequestAnswerMessage {
	        static ID: number;
	        wrongFlagCount: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntDigRequestAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        result: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntDigRequestAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntDigRequestAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntDigRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntDigRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntDigRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntFinishedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntFinishedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntFinishedMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntFlagRemoveRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        index: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntFlagRemoveRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntFlagRemoveRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntFlagRequestAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        result: number;
	        index: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntFlagRequestAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntFlagRequestAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntFlagRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        index: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntFlagRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntFlagRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntGiveUpRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntGiveUpRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntGiveUpRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntLegendaryRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        legendaryId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntLegendaryRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntLegendaryRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        startMapId: number;
	        knownStepsList: TreasureHuntStep[];
	        totalStepCount: number;
	        checkPointCurrent: number;
	        checkPointTotal: number;
	        availableRetryCount: number;
	        flags: TreasureHuntFlag[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntRequestAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questType: number;
	        result: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntRequestAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntRequestAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        questLevel: number;
	        questType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntShowLegendaryUIMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        availableLegendaryIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntShowLegendaryUIMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntShowLegendaryUIMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlaySpellAnimMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        casterId: number;
	        targetCellId: number;
	        spellId: number;
	        spellLevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlaySpellAnimMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlaySpellAnimMessage(param1: ICustomDataInput): void;
	    }
	    class LeaveDialogMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dialogType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LeaveDialogMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LeaveDialogMessage(param1: ICustomDataInput): void;
	    }
	    class LeaveDialogRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LeaveDialogRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LeaveDialogRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PauseDialogMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dialogType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PauseDialogMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PauseDialogMessage(param1: ICustomDataInput): void;
	    }
	    class FriendAddFailureMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendAddFailureMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendAddFailureMessage(param1: ICustomDataInput): void;
	    }
	    class FriendAddRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendAddRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendAddRequestMessage(param1: ICustomDataInput): void;
	    }
	    class FriendAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        friendAdded: FriendInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendAddedMessage(param1: ICustomDataInput): void;
	    }
	    class FriendDeleteRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accountId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendDeleteRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendDeleteRequestMessage(param1: ICustomDataInput): void;
	    }
	    class FriendDeleteResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        success: boolean;
	        name: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendDeleteResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendDeleteResultMessage(param1: ICustomDataInput): void;
	    }
	    class FriendJoinRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendJoinRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendJoinRequestMessage(param1: ICustomDataInput): void;
	    }
	    class FriendSetWarnOnConnectionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSetWarnOnConnectionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSetWarnOnConnectionMessage(param1: ICustomDataInput): void;
	    }
	    class FriendSetWarnOnLevelGainMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSetWarnOnLevelGainMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSetWarnOnLevelGainMessage(param1: ICustomDataInput): void;
	    }
	    class FriendSpouseFollowWithCompassRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSpouseFollowWithCompassRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSpouseFollowWithCompassRequestMessage(param1: ICustomDataInput): void;
	    }
	    class FriendSpouseJoinRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSpouseJoinRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSpouseJoinRequestMessage(param1: ICustomDataInput): void;
	    }
	    class FriendUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        friendUpdated: FriendInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class FriendWarnOnConnectionStateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendWarnOnConnectionStateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendWarnOnConnectionStateMessage(param1: ICustomDataInput): void;
	    }
	    class FriendWarnOnLevelGainStateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendWarnOnLevelGainStateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendWarnOnLevelGainStateMessage(param1: ICustomDataInput): void;
	    }
	    class FriendsGetListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendsGetListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendsGetListMessage(param1: ICustomDataInput): void;
	    }
	    class FriendsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        friendsList: FriendInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendsListMessage(param1: ICustomDataInput): void;
	    }
	    class GuildMemberSetWarnOnConnectionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMemberSetWarnOnConnectionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMemberSetWarnOnConnectionMessage(param1: ICustomDataInput): void;
	    }
	    class GuildMemberWarnOnConnectionStateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMemberWarnOnConnectionStateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMemberWarnOnConnectionStateMessage(param1: ICustomDataInput): void;
	    }
	    class IgnoredAddFailureMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredAddFailureMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredAddFailureMessage(param1: ICustomDataInput): void;
	    }
	    class IgnoredAddRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        session: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredAddRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredAddRequestMessage(param1: ICustomDataInput): void;
	    }
	    class IgnoredAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ignoreAdded: IgnoredInformations;
	        session: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredAddedMessage(param1: ICustomDataInput): void;
	    }
	    class IgnoredDeleteRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accountId: number;
	        session: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredDeleteRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredDeleteRequestMessage(param1: ICustomDataInput): void;
	    }
	    class IgnoredDeleteResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        success: boolean;
	        name: string;
	        session: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredDeleteResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredDeleteResultMessage(param1: ICustomDataInput): void;
	    }
	    class IgnoredGetListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredGetListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredGetListMessage(param1: ICustomDataInput): void;
	    }
	    class IgnoredListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ignoredList: IgnoredInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredListMessage(param1: ICustomDataInput): void;
	    }
	    class SpouseGetInformationsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpouseGetInformationsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpouseGetInformationsMessage(param1: ICustomDataInput): void;
	    }
	    class SpouseInformationsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spouse: FriendSpouseInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpouseInformationsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpouseInformationsMessage(param1: ICustomDataInput): void;
	    }
	    class SpouseStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        hasSpouse: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpouseStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpouseStatusMessage(param1: ICustomDataInput): void;
	    }
	    class WarnOnPermaDeathStateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_WarnOnPermaDeathStateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_WarnOnPermaDeathStateMessage(param1: ICustomDataInput): void;
	    }
	    class GuestLimitationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuestLimitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuestLimitationMessage(param1: ICustomDataInput): void;
	    }
	    class GuestModeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        active: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuestModeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuestModeMessage(param1: ICustomDataInput): void;
	    }
	    class ChallengeFightJoinRefusedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playerId: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ChallengeFightJoinRefusedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ChallengeFightJoinRefusedMessage(param1: ICustomDataInput): void;
	    }
	    class GuildChangeMemberParametersMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        memberId: number;
	        rank: number;
	        experienceGivenPercent: number;
	        rights: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildChangeMemberParametersMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildChangeMemberParametersMessage(param1: ICustomDataInput): void;
	    }
	    class GuildCharacsUpgradeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        charaTypeTarget: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildCharacsUpgradeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildCharacsUpgradeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildCreationResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        result: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildCreationResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildCreationResultMessage(param1: ICustomDataInput): void;
	    }
	    class GuildCreationStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildCreationStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildCreationStartedMessage(param1: ICustomDataInput): void;
	    }
	    class GuildCreationValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildName: string;
	        guildEmblem: GuildEmblem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildCreationValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildCreationValidMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFactsErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFactsErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFactsErrorMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFactsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        infos: GuildFactSheetInformations;
	        creationDate: number;
	        nbTaxCollectors: number;
	        enabled: boolean;
	        members: CharacterMinimalInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFactsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFactsMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFactsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFactsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFactsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildGetInformationsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        infoType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildGetInformationsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildGetInformationsMessage(param1: ICustomDataInput): void;
	    }
	    class GuildHouseRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        houseId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildHouseRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildHouseRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class GuildHouseTeleportRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        houseId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildHouseTeleportRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildHouseTeleportRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildHouseUpdateInformationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        housesInformations: HouseInformationsForGuild;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildHouseUpdateInformationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildHouseUpdateInformationMessage(param1: ICustomDataInput): void;
	    }
	    class GuildHousesInformationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        housesInformations: HouseInformationsForGuild[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildHousesInformationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildHousesInformationMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInAllianceFactsMessage extends GuildFactsMessage {
	        static ID: number;
	        allianceInfos: BasicNamedAllianceInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInAllianceFactsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInAllianceFactsMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInformationsGeneralMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enabled: boolean;
	        abandonnedPaddock: boolean;
	        level: number;
	        expLevelFloor: number;
	        experience: number;
	        expNextLevelFloor: number;
	        creationDate: number;
	        nbTotalMembers: number;
	        nbConnectedMembers: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInformationsGeneralMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInformationsGeneralMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInformationsMemberUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        member: GuildMember;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInformationsMemberUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInformationsMemberUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInformationsMembersMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        members: GuildMember[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInformationsMembersMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInformationsMembersMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInformationsPaddocksMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        nbPaddockMax: number;
	        paddocksInformations: PaddockContentInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInformationsPaddocksMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInformationsPaddocksMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInfosUpgradeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        maxTaxCollectorsCount: number;
	        taxCollectorsCount: number;
	        taxCollectorLifePoints: number;
	        taxCollectorDamagesBonuses: number;
	        taxCollectorPods: number;
	        taxCollectorProspecting: number;
	        taxCollectorWisdom: number;
	        boostPoints: number;
	        spellId: number[];
	        spellLevel: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInfosUpgradeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInfosUpgradeMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInvitationAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accept: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInvitationAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInvitationAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInvitationByNameMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInvitationByNameMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInvitationByNameMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInvitationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInvitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInvitationMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInvitationStateRecrutedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        invitationState: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInvitationStateRecrutedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInvitationStateRecrutedMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInvitationStateRecruterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        recrutedName: string;
	        invitationState: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInvitationStateRecruterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInvitationStateRecruterMessage(param1: ICustomDataInput): void;
	    }
	    class GuildInvitedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        recruterId: number;
	        recruterName: string;
	        guildInfo: BasicGuildInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInvitedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInvitedMessage(param1: ICustomDataInput): void;
	    }
	    class GuildJoinedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildInfo: GuildInformations;
	        memberRights: number;
	        enabled: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildJoinedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildJoinedMessage(param1: ICustomDataInput): void;
	    }
	    class GuildKickRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        kickedId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildKickRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildKickRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildLeftMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildLeftMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildLeftMessage(param1: ICustomDataInput): void;
	    }
	    class GuildLevelUpMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        newLevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildLevelUpMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildLevelUpMessage(param1: ICustomDataInput): void;
	    }
	    class GuildListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guilds: GuildInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildListMessage(param1: ICustomDataInput): void;
	    }
	    class GuildMemberLeavingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        kicked: boolean;
	        memberId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMemberLeavingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMemberLeavingMessage(param1: ICustomDataInput): void;
	    }
	    class GuildMemberOnlineStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        memberId: number;
	        online: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMemberOnlineStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMemberOnlineStatusMessage(param1: ICustomDataInput): void;
	    }
	    class GuildMembershipMessage extends GuildJoinedMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMembershipMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMembershipMessage(param1: ICustomDataInput): void;
	    }
	    class GuildModificationEmblemValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildEmblem: GuildEmblem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildModificationEmblemValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildModificationEmblemValidMessage(param1: ICustomDataInput): void;
	    }
	    class GuildModificationNameValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildModificationNameValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildModificationNameValidMessage(param1: ICustomDataInput): void;
	    }
	    class GuildModificationStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        canChangeName: boolean;
	        canChangeEmblem: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildModificationStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildModificationStartedMessage(param1: ICustomDataInput): void;
	    }
	    class GuildModificationValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildName: string;
	        guildEmblem: GuildEmblem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildModificationValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildModificationValidMessage(param1: ICustomDataInput): void;
	    }
	    class GuildMotdMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: string;
	        timestamp: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMotdMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMotdMessage(param1: ICustomDataInput): void;
	    }
	    class GuildMotdSetErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMotdSetErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMotdSetErrorMessage(param1: ICustomDataInput): void;
	    }
	    class GuildPaddockBoughtMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        paddockInfo: PaddockContentInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildPaddockBoughtMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildPaddockBoughtMessage(param1: ICustomDataInput): void;
	    }
	    class GuildPaddockRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        paddockId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildPaddockRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildPaddockRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class GuildPaddockTeleportRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        paddockId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildPaddockTeleportRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildPaddockTeleportRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildSpellUpgradeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildSpellUpgradeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildSpellUpgradeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildVersatileInfoListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guilds: GuildVersatileInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildVersatileInfoListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildVersatileInfoListMessage(param1: ICustomDataInput): void;
	    }
	    class AbstractTaxCollectorListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        informations: TaxCollectorInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractTaxCollectorListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractTaxCollectorListMessage(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayTaxCollectorFightRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        taxCollectorId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayTaxCollectorFightRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayTaxCollectorFightRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFightJoinRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        taxCollectorId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFightJoinRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFightJoinRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFightLeaveRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        taxCollectorId: number;
	        characterId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFightLeaveRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFightLeaveRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFightPlayersEnemiesListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        playerInfo: CharacterMinimalPlusLookInformations[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFightPlayersEnemiesListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFightPlayersEnemiesListMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFightPlayersEnemyRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFightPlayersEnemyRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFightPlayersEnemyRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFightPlayersHelpersJoinMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        playerInfo: CharacterMinimalPlusLookInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFightPlayersHelpersJoinMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFightPlayersHelpersJoinMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFightPlayersHelpersLeaveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fightId: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFightPlayersHelpersLeaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFightPlayersHelpersLeaveMessage(param1: ICustomDataInput): void;
	    }
	    class GuildFightTakePlaceRequestMessage extends GuildFightJoinRequestMessage {
	        static ID: number;
	        replacedCharacterId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFightTakePlaceRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFightTakePlaceRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorAttackedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        guild: BasicGuildInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorAttackedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorAttackedMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorAttackedResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        deadOrAlive: boolean;
	        basicInfos: TaxCollectorBasicInformations;
	        guild: BasicGuildInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorAttackedResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorAttackedResultMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorErrorMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorListMessage extends AbstractTaxCollectorListMessage {
	        static ID: number;
	        nbcollectorMax: number;
	        fightersInformations: TaxCollectorFightersInformation[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorListMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorMovementAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        informations: TaxCollectorInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorMovementAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorMovementAddMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorMovementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        hireOrFire: boolean;
	        basicInfos: TaxCollectorBasicInformations;
	        playerId: number;
	        playerName: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorMovementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorMovementMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorMovementRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        collectorId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorMovementRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorMovementRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorStateUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        uniqueId: number;
	        state: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorStateUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorStateUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class TopTaxCollectorListMessage extends AbstractTaxCollectorListMessage {
	        static ID: number;
	        isDungeon: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TopTaxCollectorListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TopTaxCollectorListMessage(param1: ICustomDataInput): void;
	    }
	    class IdolFightPreparationUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        idolSource: number;
	        idols: Idol[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolFightPreparationUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolFightPreparationUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class IdolListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        chosenIdols: number[];
	        partyChosenIdols: number[];
	        partyIdols: PartyIdol[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolListMessage(param1: ICustomDataInput): void;
	    }
	    class IdolPartyLostMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        idolId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolPartyLostMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolPartyLostMessage(param1: ICustomDataInput): void;
	    }
	    class IdolPartyRefreshMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        partyIdol: PartyIdol;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolPartyRefreshMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolPartyRefreshMessage(param1: ICustomDataInput): void;
	    }
	    class IdolPartyRegisterRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        register: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolPartyRegisterRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolPartyRegisterRequestMessage(param1: ICustomDataInput): void;
	    }
	    class IdolSelectErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        idolId: number;
	        activate: boolean;
	        party: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolSelectErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolSelectErrorMessage(param1: ICustomDataInput): void;
	    }
	    class IdolSelectRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        idolId: number;
	        activate: boolean;
	        party: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolSelectRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolSelectRequestMessage(param1: ICustomDataInput): void;
	    }
	    class IdolSelectedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        idolId: number;
	        activate: boolean;
	        party: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolSelectedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolSelectedMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterCapabilitiesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        guildEmblemSymbolCategories: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterCapabilitiesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterCapabilitiesMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterLoadingCompleteMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterLoadingCompleteMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterLoadingCompleteMessage(param1: ICustomDataInput): void;
	    }
	    class OnConnectionEventMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        eventType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_OnConnectionEventMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_OnConnectionEventMessage(param1: ICustomDataInput): void;
	    }
	    class ServerExperienceModificatorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        experiencePercent: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerExperienceModificatorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerExperienceModificatorMessage(param1: ICustomDataInput): void;
	    }
	    class SetCharacterRestrictionsMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        actorId: number;
	        restrictions: ActorRestrictionsInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SetCharacterRestrictionsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SetCharacterRestrictionsMessage(param1: ICustomDataInput): void;
	    }
	    class InteractiveElementUpdatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        interactiveElement: InteractiveElement;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElementUpdatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElementUpdatedMessage(param1: ICustomDataInput): void;
	    }
	    class InteractiveMapUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        interactiveElements: InteractiveElement[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveMapUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveMapUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class InteractiveUseEndedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        elemId: number;
	        skillId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveUseEndedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveUseEndedMessage(param1: ICustomDataInput): void;
	    }
	    class InteractiveUseErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        elemId: number;
	        skillInstanceUid: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveUseErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveUseErrorMessage(param1: ICustomDataInput): void;
	    }
	    class InteractiveUseRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        elemId: number;
	        skillInstanceUid: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveUseRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveUseRequestMessage(param1: ICustomDataInput): void;
	    }
	    class InteractiveUsedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        entityId: number;
	        elemId: number;
	        skillId: number;
	        duration: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveUsedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveUsedMessage(param1: ICustomDataInput): void;
	    }
	    class StatedElementUpdatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        statedElement: StatedElement;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatedElementUpdatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatedElementUpdatedMessage(param1: ICustomDataInput): void;
	    }
	    class StatedMapUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        statedElements: StatedElement[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatedMapUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatedMapUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportBuddiesAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        accept: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportBuddiesAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportBuddiesAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportBuddiesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportBuddiesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportBuddiesMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportBuddiesRequestedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        inviterId: number;
	        invalidBuddiesIds: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportBuddiesRequestedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportBuddiesRequestedMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportToBuddyAnswerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        buddyId: number;
	        accept: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportToBuddyAnswerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportToBuddyAnswerMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportToBuddyCloseMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        buddyId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportToBuddyCloseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportToBuddyCloseMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportToBuddyOfferMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        dungeonId: number;
	        buddyId: number;
	        timeLeft: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportToBuddyOfferMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportToBuddyOfferMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportDestinationsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        teleporterType: number;
	        mapIds: number[];
	        subAreaIds: number[];
	        costs: number[];
	        destTeleporterType: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportDestinationsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportDestinationsListMessage(param1: ICustomDataInput): void;
	    }
	    class TeleportRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        teleporterType: number;
	        mapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TeleportRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TeleportRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ZaapListMessage extends TeleportDestinationsListMessage {
	        static ID: number;
	        spawnMapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ZaapListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ZaapListMessage(param1: ICustomDataInput): void;
	    }
	    class ZaapRespawnSaveRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ZaapRespawnSaveRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ZaapRespawnSaveRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ZaapRespawnUpdatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mapId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ZaapRespawnUpdatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ZaapRespawnUpdatedMessage(param1: ICustomDataInput): void;
	    }
	    class KamasUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        kamasTotal: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KamasUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KamasUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectAveragePricesErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectAveragePricesErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectAveragePricesErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectAveragePricesGetMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectAveragePricesGetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectAveragePricesGetMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectAveragePricesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ids: number[];
	        avgPrices: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectAveragePricesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectAveragePricesMessage(param1: ICustomDataInput): void;
	    }
	    class DecraftResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        results: DecraftedItemStackInfo[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DecraftResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DecraftResultMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeAcceptMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeAcceptMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeAcceptMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseBuyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        uid: number;
	        qty: number;
	        price: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseBuyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseBuyMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseBuyResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        uid: number;
	        bought: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseBuyResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseBuyResultMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseGenericItemAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objGenericId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseGenericItemAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseGenericItemAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseGenericItemRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objGenericId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseGenericItemRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseGenericItemRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseInListAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        itemUID: number;
	        objGenericId: number;
	        effects: ObjectEffect[];
	        prices: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseInListAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseInListAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseInListRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        itemUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseInListRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseInListRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseInListUpdatedMessage extends ExchangeBidHouseInListAddedMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseInListUpdatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseInListUpdatedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseItemAddOkMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        itemInfo: ObjectItemToSellInBid;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseItemAddOkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseItemAddOkMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseItemRemoveOkMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        sellerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseItemRemoveOkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseItemRemoveOkMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseListMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHousePriceMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        genId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHousePriceMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHousePriceMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseSearchMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: number;
	        genId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseSearchMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseSearchMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidHouseTypeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidHouseTypeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidHouseTypeMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidPriceForSellerMessage extends ExchangeBidPriceMessage {
	        static ID: number;
	        allIdentical: boolean;
	        minimalPrices: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidPriceForSellerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidPriceForSellerMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidPriceMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        genericId: number;
	        averagePrice: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidPriceMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidPriceMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBidSearchOkMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBidSearchOkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBidSearchOkMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBuyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectToBuyId: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBuyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBuyMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeBuyOkMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeBuyOkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeBuyOkMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftCountModifiedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        count: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftCountModifiedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftCountModifiedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftCountRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        count: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftCountRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftCountRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftInformationObjectMessage extends ExchangeCraftResultWithObjectIdMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftInformationObjectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftInformationObjectMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftPaymentModificationRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftPaymentModificationRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftPaymentModificationRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftPaymentModifiedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        goldSum: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftPaymentModifiedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftPaymentModifiedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftResultMagicWithObjectDescMessage extends ExchangeCraftResultWithObjectDescMessage {
	        static ID: number;
	        magicPoolStatus: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        craftResult: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftResultMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftResultWithObjectDescMessage extends ExchangeCraftResultMessage {
	        static ID: number;
	        objectInfo: ObjectItemNotInContainer;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftResultWithObjectDescMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftResultWithObjectDescMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCraftResultWithObjectIdMessage extends ExchangeCraftResultMessage {
	        static ID: number;
	        objectGenericId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCraftResultWithObjectIdMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCraftResultWithObjectIdMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeCrafterJobLevelupMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        crafterJobLevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeCrafterJobLevelupMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeCrafterJobLevelupMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        errorType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeGuildTaxCollectorGetMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        collectorName: string;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        userName: string;
	        experience: number;
	        objectsInfos: ObjectItemGenericQuantity[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeGuildTaxCollectorGetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeGuildTaxCollectorGetMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeHandleMountsStableMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        actionType: number;
	        ridesId: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeHandleMountsStableMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeHandleMountsStableMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeIsReadyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        ready: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeIsReadyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeIsReadyMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeItemAutoCraftStopedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeItemAutoCraftStopedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeItemAutoCraftStopedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeLeaveMessage extends LeaveDialogMessage {
	        static ID: number;
	        success: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeLeaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeLeaveMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountFreeFromPaddockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        worldX: number;
	        worldY: number;
	        liberator: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountFreeFromPaddockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountFreeFromPaddockMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountStableErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountStableErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountStableErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountSterilizeFromPaddockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        worldX: number;
	        worldY: number;
	        sterilizator: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountSterilizeFromPaddockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountSterilizeFromPaddockMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountsPaddockAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountDescription: MountClientData[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountsPaddockAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountsPaddockAddMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountsPaddockRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountsId: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountsPaddockRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountsPaddockRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountsStableAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountDescription: MountClientData[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountsStableAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountsStableAddMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountsStableBornAddMessage extends ExchangeMountsStableAddMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountsStableBornAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountsStableBornAddMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountsStableRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        mountsId: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountsStableRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountsStableRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMountsTakenFromPaddockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        name: string;
	        worldX: number;
	        worldY: number;
	        ownername: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMountsTakenFromPaddockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMountsTakenFromPaddockMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectAddedMessage extends ExchangeObjectMessage {
	        static ID: number;
	        object: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        remote: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectModifyPricedMessage extends ExchangeObjectMovePricedMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectModifyPricedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectModifyPricedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectMoveKamaMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectMoveKamaMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectMoveKamaMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectMoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectMoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectMoveMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectMovePricedMessage extends ExchangeObjectMoveMessage {
	        static ID: number;
	        price: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectMovePricedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectMovePricedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectTransfertAllFromInvMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectTransfertAllFromInvMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectTransfertAllFromInvMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectTransfertAllToInvMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectTransfertAllToInvMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectTransfertAllToInvMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectTransfertExistingFromInvMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectTransfertExistingFromInvMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectTransfertExistingFromInvMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectTransfertExistingToInvMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectTransfertExistingToInvMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectTransfertExistingToInvMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectTransfertListFromInvMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ids: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectTransfertListFromInvMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectTransfertListFromInvMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectTransfertListToInvMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ids: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectTransfertListToInvMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectTransfertListToInvMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectTransfertListWithQuantityToInvMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ids: number[];
	        qtys: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectTransfertListWithQuantityToInvMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectUseInWorkshopMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectUseInWorkshopMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectUseInWorkshopMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectsAddedMessage extends ExchangeObjectMessage {
	        static ID: number;
	        object: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectsAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectsAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeOkMultiCraftMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        initiatorId: number;
	        otherId: number;
	        role: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeOkMultiCraftMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeOkMultiCraftMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeOnHumanVendorRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        humanVendorId: number;
	        humanVendorCell: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeOnHumanVendorRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeOnHumanVendorRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangePlayerMultiCraftRequestMessage extends ExchangeRequestMessage {
	        static ID: number;
	        target: number;
	        skillId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangePlayerMultiCraftRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangePlayerMultiCraftRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangePlayerRequestMessage extends ExchangeRequestMessage {
	        static ID: number;
	        target: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangePlayerRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangePlayerRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeReadyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ready: boolean;
	        step: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeReadyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeReadyMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeReplayStopMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeReplayStopMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeReplayStopMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeReplyTaxVendorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectValue: number;
	        totalTaxValue: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeReplyTaxVendorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeReplyTaxVendorMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        exchangeType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeRequestOnMountStockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeRequestOnMountStockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeRequestOnMountStockMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeRequestOnShopStockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeRequestOnShopStockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeRequestOnShopStockMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeRequestOnTaxCollectorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        taxCollectorId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeRequestOnTaxCollectorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeRequestOnTaxCollectorMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeRequestedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        exchangeType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeRequestedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeRequestedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeRequestedTradeMessage extends ExchangeRequestedMessage {
	        static ID: number;
	        source: number;
	        target: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeRequestedTradeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeRequestedTradeMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeSellMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectToSellId: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeSellMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeSellMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeSellOkMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeSellOkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeSellOkMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeSetCraftRecipeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectGID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeSetCraftRecipeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeSetCraftRecipeMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeShopStockMovementRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeShopStockMovementRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeShopStockMovementRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeShopStockMovementUpdatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectInfo: ObjectItemToSell;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeShopStockMovementUpdatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeShopStockMovementUpdatedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeShopStockMultiMovementRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectIdList: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeShopStockMultiMovementRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeShopStockMultiMovementRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeShopStockMultiMovementUpdatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectInfoList: ObjectItemToSell[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeShopStockMultiMovementUpdatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeShopStockMultiMovementUpdatedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeShopStockStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectsInfos: ObjectItemToSell[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeShopStockStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeShopStockStartedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeShowVendorTaxMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeShowVendorTaxMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeShowVendorTaxMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartAsVendorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartAsVendorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartAsVendorMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkCraftMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkCraftMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkCraftMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkCraftWithInformationMessage extends ExchangeStartOkCraftMessage {
	        static ID: number;
	        skillId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkCraftWithInformationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkCraftWithInformationMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkHumanVendorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        sellerId: number;
	        objectsInfos: ObjectItemToSellInHumanVendorShop[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkHumanVendorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkHumanVendorMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkJobIndexMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        jobs: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkJobIndexMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkJobIndexMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkMountMessage extends ExchangeStartOkMountWithOutPaddockMessage {
	        static ID: number;
	        paddockedMountsDescription: MountClientData[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkMountMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkMountMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkMountWithOutPaddockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        stabledMountsDescription: MountClientData[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkMulticraftCrafterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        skillId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkMulticraftCrafterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkMulticraftCrafterMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkMulticraftCustomerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        skillId: number;
	        crafterJobLevel: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkMulticraftCustomerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkMulticraftCustomerMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkNpcShopMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        npcSellerId: number;
	        tokenId: number;
	        objectsInfos: ObjectItemToSellInNpcShop[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkNpcShopMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkNpcShopMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkNpcTradeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        npcId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkNpcTradeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkNpcTradeMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkRecycleTradeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        percentToPrism: number;
	        percentToPlayer: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkRecycleTradeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkRecycleTradeMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartOkRunesTradeMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartOkRunesTradeMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartOkRunesTradeMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartedBidBuyerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        buyerDescriptor: SellerBuyerDescriptor;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartedBidBuyerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartedBidBuyerMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartedBidSellerMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        sellerDescriptor: SellerBuyerDescriptor;
	        objectsInfos: ObjectItemToSellInBid[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartedBidSellerMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartedBidSellerMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        exchangeType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartedMountStockMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectsInfos: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartedMountStockMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartedMountStockMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartedWithPodsMessage extends ExchangeStartedMessage {
	        static ID: number;
	        firstCharacterId: number;
	        firstCharacterCurrentWeight: number;
	        firstCharacterMaxWeight: number;
	        secondCharacterId: number;
	        secondCharacterCurrentWeight: number;
	        secondCharacterMaxWeight: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartedWithPodsMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartedWithPodsMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStartedWithStorageMessage extends ExchangeStartedMessage {
	        static ID: number;
	        storageMaxSlot: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStartedWithStorageMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStartedWithStorageMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeStoppedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeStoppedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeStoppedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeTypesExchangerDescriptionForUserMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        typeDescription: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeTypesExchangerDescriptionForUserMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeTypesItemsExchangerDescriptionForUserMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        itemTypeDescriptions: BidExchangerObjectInfo[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeTypesItemsExchangerDescriptionForUserMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeWaitingResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        bwait: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeWaitingResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeWaitingResultMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeWeightMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        currentWeight: number;
	        maxWeight: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeWeightMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeWeightMessage(param1: ICustomDataInput): void;
	    }
	    class ItemNoMoreAvailableMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ItemNoMoreAvailableMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ItemNoMoreAvailableMessage(param1: ICustomDataInput): void;
	    }
	    class JobBookSubscribeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        jobId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobBookSubscribeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobBookSubscribeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class RecycleResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        nuggetsForPrism: number;
	        nuggetsForPlayer: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_RecycleResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_RecycleResultMessage(param1: ICustomDataInput): void;
	    }
	    class UpdateMountBoostMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        rideId: number;
	        boostToUpdateList: UpdateMountBoost[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateMountBoostMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateMountBoostMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeKamaModifiedMessage extends ExchangeObjectMessage {
	        static ID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeKamaModifiedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeKamaModifiedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMultiCraftCrafterCanUseHisRessourcesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allowed: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        allow: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectModifiedInBagMessage extends ExchangeObjectMessage {
	        static ID: number;
	        object: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectModifiedInBagMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectModifiedInBagMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectModifiedMessage extends ExchangeObjectMessage {
	        static ID: number;
	        object: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectModifiedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectModifiedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectPutInBagMessage extends ExchangeObjectMessage {
	        static ID: number;
	        object: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectPutInBagMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectPutInBagMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectRemovedFromBagMessage extends ExchangeObjectMessage {
	        static ID: number;
	        objectUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectRemovedFromBagMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectRemovedFromBagMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectRemovedMessage extends ExchangeObjectMessage {
	        static ID: number;
	        objectUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectsModifiedMessage extends ExchangeObjectMessage {
	        static ID: number;
	        object: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectsModifiedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectsModifiedMessage(param1: ICustomDataInput): void;
	    }
	    class ExchangeObjectsRemovedMessage extends ExchangeObjectMessage {
	        static ID: number;
	        objectUID: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ExchangeObjectsRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ExchangeObjectsRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class GoldAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        gold: GoldItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GoldAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GoldAddedMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryContentAndPresetMessage extends InventoryContentMessage {
	        static ID: number;
	        presets: Preset[];
	        idolsPresets: IdolsPreset[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryContentAndPresetMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryContentAndPresetMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryContentMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objects: ObjectItem[];
	        kamas: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryContentMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryContentMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryWeightMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        weight: number;
	        weightMax: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryWeightMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryWeightMessage(param1: ICustomDataInput): void;
	    }
	    class LivingObjectChangeSkinRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        livingUID: number;
	        livingPosition: number;
	        skinId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LivingObjectChangeSkinRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LivingObjectChangeSkinRequestMessage(param1: ICustomDataInput): void;
	    }
	    class LivingObjectDissociateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        livingUID: number;
	        livingPosition: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LivingObjectDissociateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LivingObjectDissociateMessage(param1: ICustomDataInput): void;
	    }
	    class LivingObjectMessageMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        msgId: number;
	        timeStamp: number;
	        owner: string;
	        objectGenericId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LivingObjectMessageMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LivingObjectMessageMessage(param1: ICustomDataInput): void;
	    }
	    class LivingObjectMessageRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        msgId: number;
	        parameters: string[];
	        livingObject: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LivingObjectMessageRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LivingObjectMessageRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MimicryObjectAssociatedMessage extends SymbioticObjectAssociatedMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MimicryObjectAssociatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MimicryObjectAssociatedMessage(param1: ICustomDataInput): void;
	    }
	    class MimicryObjectEraseRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        hostUID: number;
	        hostPos: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MimicryObjectEraseRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MimicryObjectEraseRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MimicryObjectErrorMessage extends SymbioticObjectErrorMessage {
	        static ID: number;
	        preview: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MimicryObjectErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MimicryObjectErrorMessage(param1: ICustomDataInput): void;
	    }
	    class MimicryObjectFeedAndAssociateRequestMessage extends SymbioticObjectAssociateRequestMessage {
	        static ID: number;
	        foodUID: number;
	        foodPos: number;
	        preview: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1: ICustomDataInput): void;
	    }
	    class MimicryObjectPreviewMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        result: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MimicryObjectPreviewMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MimicryObjectPreviewMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        object: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectDeleteMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectDeleteMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectDeleteMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectDeletedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectDeletedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectDeletedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectDropMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectDropMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectDropMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectFeedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        foodUID: number;
	        foodQuantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectFeedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectFeedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectFoundWhileRecoltingMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        genericId: number;
	        quantity: number;
	        resourceGenericId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectFoundWhileRecoltingMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectFoundWhileRecoltingMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectJobAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        jobId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectJobAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectJobAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectModifiedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        object: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectModifiedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectModifiedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectMovementMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        position: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectMovementMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectMovementMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectQuantityMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectQuantityMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectQuantityMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectSetPositionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        position: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectSetPositionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectSetPositionMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectUseMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectUseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectUseMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectUseMultipleMessage extends ObjectUseMessage {
	        static ID: number;
	        quantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectUseMultipleMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectUseMultipleMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectUseOnCellMessage extends ObjectUseMessage {
	        static ID: number;
	        cells: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectUseOnCellMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectUseOnCellMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectUseOnCharacterMessage extends ObjectUseMessage {
	        static ID: number;
	        characterId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectUseOnCharacterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectUseOnCharacterMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectsAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        object: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectsAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectsAddedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectsDeletedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectsDeletedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectsDeletedMessage(param1: ICustomDataInput): void;
	    }
	    class ObjectsQuantityMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectsUIDAndQty: ObjectItemQuantity[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectsQuantityMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectsQuantityMessage(param1: ICustomDataInput): void;
	    }
	    class ObtainedItemMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        genericId: number;
	        baseQuantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObtainedItemMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObtainedItemMessage(param1: ICustomDataInput): void;
	    }
	    class ObtainedItemWithBonusMessage extends ObtainedItemMessage {
	        static ID: number;
	        bonusQuantity: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObtainedItemWithBonusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObtainedItemWithBonusMessage(param1: ICustomDataInput): void;
	    }
	    class SetUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        setId: number;
	        setObjects: number[];
	        setEffects: ObjectEffect[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SetUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SetUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class SymbioticObjectAssociateRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        symbioteUID: number;
	        symbiotePos: number;
	        hostUID: number;
	        hostPos: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SymbioticObjectAssociateRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SymbioticObjectAssociateRequestMessage(param1: ICustomDataInput): void;
	    }
	    class SymbioticObjectAssociatedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        hostUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SymbioticObjectAssociatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SymbioticObjectAssociatedMessage(param1: ICustomDataInput): void;
	    }
	    class SymbioticObjectErrorMessage extends ObjectErrorMessage {
	        static ID: number;
	        errorCode: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SymbioticObjectErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SymbioticObjectErrorMessage(param1: ICustomDataInput): void;
	    }
	    class WrapperObjectAssociatedMessage extends SymbioticObjectAssociatedMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_WrapperObjectAssociatedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_WrapperObjectAssociatedMessage(param1: ICustomDataInput): void;
	    }
	    class WrapperObjectDissociateRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        hostUID: number;
	        hostPos: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_WrapperObjectDissociateRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_WrapperObjectDissociateRequestMessage(param1: ICustomDataInput): void;
	    }
	    class WrapperObjectErrorMessage extends SymbioticObjectErrorMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_WrapperObjectErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_WrapperObjectErrorMessage(param1: ICustomDataInput): void;
	    }
	    class IdolsPresetDeleteMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolsPresetDeleteMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolsPresetDeleteMessage(param1: ICustomDataInput): void;
	    }
	    class IdolsPresetDeleteResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        code: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolsPresetDeleteResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolsPresetDeleteResultMessage(param1: ICustomDataInput): void;
	    }
	    class IdolsPresetSaveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        symbolId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolsPresetSaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolsPresetSaveMessage(param1: ICustomDataInput): void;
	    }
	    class IdolsPresetSaveResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        code: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolsPresetSaveResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolsPresetSaveResultMessage(param1: ICustomDataInput): void;
	    }
	    class IdolsPresetUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        idolsPreset: IdolsPreset;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolsPresetUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolsPresetUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetDeleteMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetDeleteMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetDeleteMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetDeleteResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        code: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetDeleteResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetDeleteResultMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetItemUpdateErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        code: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetItemUpdateErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetItemUpdateErrorMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetItemUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        presetItem: PresetItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetItemUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetItemUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetItemUpdateRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        position: number;
	        objUid: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetItemUpdateRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetItemUpdateRequestMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetSaveCustomMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        symbolId: number;
	        itemsPositions: number[];
	        itemsUids: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetSaveCustomMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetSaveCustomMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetSaveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        symbolId: number;
	        saveEquipment: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetSaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetSaveMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetSaveResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        code: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetSaveResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetSaveResultMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        preset: Preset;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetUseMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetUseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetUseMessage(param1: ICustomDataInput): void;
	    }
	    class InventoryPresetUseResultMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        presetId: number;
	        code: number;
	        unlinkedPosition: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InventoryPresetUseResultMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InventoryPresetUseResultMessage(param1: ICustomDataInput): void;
	    }
	    class SpellListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellPrevisualization: boolean;
	        spells: SpellItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellListMessage(param1: ICustomDataInput): void;
	    }
	    class StorageInventoryContentMessage extends InventoryContentMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StorageInventoryContentMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StorageInventoryContentMessage(param1: ICustomDataInput): void;
	    }
	    class StorageKamasUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        kamasTotal: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StorageKamasUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StorageKamasUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class StorageObjectRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StorageObjectRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StorageObjectRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class StorageObjectUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        object: ObjectItem;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StorageObjectUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StorageObjectUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class StorageObjectsRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectUIDList: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StorageObjectsRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StorageObjectsRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class StorageObjectsUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        objectList: ObjectItem[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StorageObjectsUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StorageObjectsUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class AccessoryPreviewErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        error: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccessoryPreviewErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccessoryPreviewErrorMessage(param1: ICustomDataInput): void;
	    }
	    class AccessoryPreviewMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        look: EntityLook;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccessoryPreviewMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccessoryPreviewMessage(param1: ICustomDataInput): void;
	    }
	    class AccessoryPreviewRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        genericId: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccessoryPreviewRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccessoryPreviewRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PopupWarningMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        lockDuration: number;
	        author: string;
	        content: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PopupWarningMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PopupWarningMessage(param1: ICustomDataInput): void;
	    }
	    class AreaFightModificatorUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        spellPairId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AreaFightModificatorUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AreaFightModificatorUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PrismAttackRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismAttackRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismAttackRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightAddedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fight: PrismFightersInformation;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightAddedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightAddedMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightAttackerAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        fightId: number;
	        attacker: CharacterMinimalPlusLookInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightAttackerAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightAttackerAddMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightAttackerRemoveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        fightId: number;
	        fighterToRemoveId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightAttackerRemoveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightAttackerRemoveMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightDefenderAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        fightId: number;
	        defender: CharacterMinimalPlusLookInformations;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightDefenderAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightDefenderAddMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightDefenderLeaveMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        fightId: number;
	        fighterToRemoveId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightDefenderLeaveMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightDefenderLeaveMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightJoinLeaveRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        join: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightJoinLeaveRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightJoinLeaveRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightStateUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        state: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightStateUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightStateUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class PrismFightSwapRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        targetId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightSwapRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightSwapRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismInfoCloseMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismInfoCloseMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismInfoCloseMessage(param1: ICustomDataInput): void;
	    }
	    class PrismInfoInValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismInfoInValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismInfoInValidMessage(param1: ICustomDataInput): void;
	    }
	    class PrismInfoJoinLeaveRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        join: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismInfoJoinLeaveRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismInfoJoinLeaveRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismModuleExchangeRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismModuleExchangeRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismModuleExchangeRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismSetSabotagedRefusedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismSetSabotagedRefusedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismSetSabotagedRefusedMessage(param1: ICustomDataInput): void;
	    }
	    class PrismSetSabotagedRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismSetSabotagedRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismSetSabotagedRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismSettingsErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismSettingsErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismSettingsErrorMessage(param1: ICustomDataInput): void;
	    }
	    class PrismSettingsRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        subAreaId: number;
	        startDefenseTime: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismSettingsRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismSettingsRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismUseRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        moduleToUse: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismUseRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismUseRequestMessage(param1: ICustomDataInput): void;
	    }
	    class PrismsInfoValidMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        fights: PrismFightersInformation[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismsInfoValidMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismsInfoValidMessage(param1: ICustomDataInput): void;
	    }
	    class PrismsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        prisms: PrismSubareaEmptyInfo[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismsListMessage(param1: ICustomDataInput): void;
	    }
	    class PrismsListRegisterMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        listen: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismsListRegisterMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismsListRegisterMessage(param1: ICustomDataInput): void;
	    }
	    class PrismsListUpdateMessage extends PrismsListMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismsListUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismsListUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class AlignmentRankUpdateMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        alignmentRank: number;
	        verbose: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlignmentRankUpdateMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlignmentRankUpdateMessage(param1: ICustomDataInput): void;
	    }
	    class SetEnableAVARequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SetEnableAVARequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SetEnableAVARequestMessage(param1: ICustomDataInput): void;
	    }
	    class SetEnablePVPRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        enable: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SetEnablePVPRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SetEnablePVPRequestMessage(param1: ICustomDataInput): void;
	    }
	    class UpdateMapPlayersAgressableStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playerIds: number[];
	        enable: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateMapPlayersAgressableStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateMapPlayersAgressableStatusMessage(param1: ICustomDataInput): void;
	    }
	    class UpdateSelfAgressableStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        status: number;
	        probationTime: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateSelfAgressableStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateSelfAgressableStatusMessage(param1: ICustomDataInput): void;
	    }
	    class CharacterReportMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reportedId: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterReportMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterReportMessage(param1: ICustomDataInput): void;
	    }
	    class CinematicMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        cinematicId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CinematicMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CinematicMessage(param1: ICustomDataInput): void;
	    }
	    class URLOpenMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        urlId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_URLOpenMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_URLOpenMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarAddErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        error: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarAddErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarAddErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarAddRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        barType: number;
	        shortcut: Shortcut;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarAddRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarAddRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarContentMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        barType: number;
	        shortcuts: Shortcut[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarContentMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarContentMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarRefreshMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        barType: number;
	        shortcut: Shortcut;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarRefreshMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarRefreshMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarRemoveErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        error: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarRemoveErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarRemoveErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarRemoveRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        barType: number;
	        slot: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarRemoveRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarRemoveRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarRemovedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        barType: number;
	        slot: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarRemovedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarRemovedMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarSwapErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        error: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarSwapErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarSwapErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ShortcutBarSwapRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        barType: number;
	        firstSlot: number;
	        secondSlot: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutBarSwapRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutBarSwapRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ContactLookErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requestId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ContactLookErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ContactLookErrorMessage(param1: ICustomDataInput): void;
	    }
	    class ContactLookMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requestId: number;
	        playerName: string;
	        playerId: number;
	        look: EntityLook;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ContactLookMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ContactLookMessage(param1: ICustomDataInput): void;
	    }
	    class ContactLookRequestByIdMessage extends ContactLookRequestMessage {
	        static ID: number;
	        playerId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ContactLookRequestByIdMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ContactLookRequestByIdMessage(param1: ICustomDataInput): void;
	    }
	    class ContactLookRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requestId: number;
	        contactType: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ContactLookRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ContactLookRequestMessage(param1: ICustomDataInput): void;
	    }
	    class StartupActionAddMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        newAction: StartupActionAddObject;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionAddMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionAddMessage(param1: ICustomDataInput): void;
	    }
	    class StartupActionFinishedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        success: boolean;
	        actionId: number;
	        automaticAction: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionFinishedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionFinishedMessage(param1: ICustomDataInput): void;
	    }
	    class StartupActionsAllAttributionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        characterId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionsAllAttributionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionsAllAttributionMessage(param1: ICustomDataInput): void;
	    }
	    class StartupActionsExecuteMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionsExecuteMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionsExecuteMessage(param1: ICustomDataInput): void;
	    }
	    class StartupActionsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        actions: StartupActionAddObject[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionsListMessage(param1: ICustomDataInput): void;
	    }
	    class StartupActionsObjetAttributionMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        actionId: number;
	        characterId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionsObjetAttributionMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionsObjetAttributionMessage(param1: ICustomDataInput): void;
	    }
	    class SubscriptionLimitationMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SubscriptionLimitationMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SubscriptionLimitationMessage(param1: ICustomDataInput): void;
	    }
	    class SubscriptionZoneMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        active: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SubscriptionZoneMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SubscriptionZoneMessage(param1: ICustomDataInput): void;
	    }
	    class OrnamentGainedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ornamentId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_OrnamentGainedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_OrnamentGainedMessage(param1: ICustomDataInput): void;
	    }
	    class OrnamentSelectErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_OrnamentSelectErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_OrnamentSelectErrorMessage(param1: ICustomDataInput): void;
	    }
	    class OrnamentSelectRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ornamentId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_OrnamentSelectRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_OrnamentSelectRequestMessage(param1: ICustomDataInput): void;
	    }
	    class OrnamentSelectedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        ornamentId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_OrnamentSelectedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_OrnamentSelectedMessage(param1: ICustomDataInput): void;
	    }
	    class TitleGainedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        titleId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TitleGainedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TitleGainedMessage(param1: ICustomDataInput): void;
	    }
	    class TitleLostMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        titleId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TitleLostMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TitleLostMessage(param1: ICustomDataInput): void;
	    }
	    class TitleSelectErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TitleSelectErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TitleSelectErrorMessage(param1: ICustomDataInput): void;
	    }
	    class TitleSelectRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        titleId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TitleSelectRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TitleSelectRequestMessage(param1: ICustomDataInput): void;
	    }
	    class TitleSelectedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        titleId: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TitleSelectedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TitleSelectedMessage(param1: ICustomDataInput): void;
	    }
	    class TitlesAndOrnamentsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        titles: number[];
	        ornaments: number[];
	        activeTitle: number;
	        activeOrnament: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TitlesAndOrnamentsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TitlesAndOrnamentsListMessage(param1: ICustomDataInput): void;
	    }
	    class TitlesAndOrnamentsListRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TitlesAndOrnamentsListRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TitlesAndOrnamentsListRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ClientUIOpenedByObjectMessage extends ClientUIOpenedMessage {
	        static ID: number;
	        uid: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ClientUIOpenedByObjectMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ClientUIOpenedByObjectMessage(param1: ICustomDataInput): void;
	    }
	    class ClientUIOpenedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        type: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ClientUIOpenedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ClientUIOpenedMessage(param1: ICustomDataInput): void;
	    }
	    class ProtocolRequired extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        requiredVersion: number;
	        currentVersion: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ProtocolRequired(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ProtocolRequired(param1: ICustomDataInput): void;
	    }
	    class LoginQueueStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        position: number;
	        total: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_LoginQueueStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_LoginQueueStatusMessage(param1: ICustomDataInput): void;
	    }
	    class QueueStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        position: number;
	        total: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QueueStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QueueStatusMessage(param1: ICustomDataInput): void;
	    }
	    class TrustStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        trusted: boolean;
	        certified: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TrustStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TrustStatusMessage(param1: ICustomDataInput): void;
	    }
	    class CheckFileMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        filenameHash: string;
	        type: number;
	        value: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CheckFileMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CheckFileMessage(param1: ICustomDataInput): void;
	    }
	    class CheckFileRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        filename: string;
	        type: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CheckFileRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CheckFileRequestMessage(param1: ICustomDataInput): void;
	    }
	    class CheckIntegrityMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        data: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CheckIntegrityMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CheckIntegrityMessage(param1: ICustomDataInput): void;
	    }
	    class ClientKeyMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        key: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ClientKeyMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ClientKeyMessage(param1: ICustomDataInput): void;
	    }
	    class RawDataMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        content: ByteArray;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_RawDataMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_RawDataMessage(param1: ICustomDataInput): void;
	    }
	    class SystemMessageDisplayMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        hangUp: boolean;
	        msgId: number;
	        parameters: string[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SystemMessageDisplayMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SystemMessageDisplayMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadCurrentSpeedMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        downloadSpeed: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadCurrentSpeedMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadCurrentSpeedMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        errorId: number;
	        message: string;
	        helpUrl: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadErrorMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadGetCurrentSpeedRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadGetCurrentSpeedRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadGetCurrentSpeedRequestMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadPartMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadPartMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadPartMessage(param1: ICustomDataInput): void;
	    }
	    class DownloadSetSpeedRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        downloadSpeed: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DownloadSetSpeedRequestMessage(param1: ICustomDataInput): void;
	    }
	    class GetPartInfoMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        id: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GetPartInfoMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GetPartInfoMessage(param1: ICustomDataInput): void;
	    }
	    class GetPartsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GetPartsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GetPartsListMessage(param1: ICustomDataInput): void;
	    }
	    class PartInfoMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        part: ContentPart;
	        installationPercent: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartInfoMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartInfoMessage(param1: ICustomDataInput): void;
	    }
	    class PartsListMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        parts: ContentPart[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartsListMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartsListMessage(param1: ICustomDataInput): void;
	    }
	    class MailStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        unread: number;
	        total: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MailStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MailStatusMessage(param1: ICustomDataInput): void;
	    }
	    class NewMailMessage extends MailStatusMessage {
	        static ID: number;
	        sendersAccountId: number[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NewMailMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NewMailMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterAuthTokenErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterAuthTokenErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterAuthTokenErrorMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterAuthTokenMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        token: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterAuthTokenMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterAuthTokenMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterAuthTokenRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterAuthTokenRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterAuthTokenRequestMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterInventoryErrorMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        reason: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterInventoryErrorMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterInventoryErrorMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterInventoryMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        figures: KrosmasterFigure[];
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterInventoryMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterInventoryMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterInventoryRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterInventoryRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterInventoryRequestMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterPlayingStatusMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        playing: boolean;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterPlayingStatusMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterTransferMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        uid: string;
	        failure: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterTransferMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterTransferMessage(param1: ICustomDataInput): void;
	    }
	    class KrosmasterTransferRequestMessage extends NetworkMessage implements INetworkMessage {
	        static ID: number;
	        uid: string;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterTransferRequestMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterTransferRequestMessage(param1: ICustomDataInput): void;
	    }
	    class ClientYouAreDrunkMessage extends DebugInClientMessage {
	        static ID: number;
	        constructor();
	        getMessageId(): number;
	        reset(): void;
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ClientYouAreDrunkMessage(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ClientYouAreDrunkMessage(param1: ICustomDataInput): void;
	    }
	    class StatisticData implements INetworkType {
	        static ID: number;
	        actionId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticData(param1: ICustomDataInput): void;
	    }
	    class StatisticDataBoolean extends StatisticData implements INetworkType {
	        static ID: number;
	        value: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataBoolean(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataBoolean(param1: ICustomDataInput): void;
	    }
	    class StatisticDataByte extends StatisticData implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataByte(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataByte(param1: ICustomDataInput): void;
	    }
	    class StatisticDataInt extends StatisticData implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataInt(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataInt(param1: ICustomDataInput): void;
	    }
	    class StatisticDataShort extends StatisticData implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataShort(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataShort(param1: ICustomDataInput): void;
	    }
	    class StatisticDataString extends StatisticData implements INetworkType {
	        static ID: number;
	        value: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatisticDataString(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatisticDataString(param1: ICustomDataInput): void;
	    }
	    class GameServerInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        type: number;
	        status: number;
	        completion: number;
	        isSelectable: boolean;
	        charactersCount: number;
	        charactersSlots: number;
	        date: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameServerInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameServerInformations(param1: ICustomDataInput): void;
	    }
	    class Achievement implements INetworkType {
	        static ID: number;
	        id: number;
	        finishedObjective: AchievementObjective[];
	        startedObjectives: AchievementStartedObjective[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Achievement(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Achievement(param1: ICustomDataInput): void;
	    }
	    class AchievementObjective implements INetworkType {
	        static ID: number;
	        id: number;
	        maxValue: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementObjective(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementObjective(param1: ICustomDataInput): void;
	    }
	    class AchievementRewardable implements INetworkType {
	        static ID: number;
	        id: number;
	        finishedlevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementRewardable(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementRewardable(param1: ICustomDataInput): void;
	    }
	    class AchievementStartedObjective extends AchievementObjective implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AchievementStartedObjective(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AchievementStartedObjective(param1: ICustomDataInput): void;
	    }
	    class FightDispellableEffectExtendedInformations implements INetworkType {
	        static ID: number;
	        actionId: number;
	        sourceId: number;
	        effect: AbstractFightDispellableEffect;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightDispellableEffectExtendedInformations(param1: ICustomDataInput): void;
	    }
	    class AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        uid: number;
	        targetId: number;
	        turnDuration: number;
	        dispelable: number;
	        spellId: number;
	        effectId: number;
	        parentBoostUid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractFightDispellableEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractFightDispellableEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporaryBoostEffect extends AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        delta: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporaryBoostEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporaryBoostEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect implements INetworkType {
	        static ID: number;
	        stateId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect implements INetworkType {
	        static ID: number;
	        weaponTypeId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect implements INetworkType {
	        static ID: number;
	        boostedSpellId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataInput): void;
	    }
	    class FightTemporarySpellImmunityEffect extends AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        immuneSpellId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataInput): void;
	    }
	    class FightTriggeredEffect extends AbstractFightDispellableEffect implements INetworkType {
	        static ID: number;
	        param1: number;
	        param2: number;
	        param3: number;
	        delay: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTriggeredEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTriggeredEffect(param1: ICustomDataInput): void;
	    }
	    class GameActionMark implements INetworkType {
	        static ID: number;
	        markAuthorId: number;
	        markTeamId: number;
	        markSpellId: number;
	        markSpellLevel: number;
	        markId: number;
	        markType: number;
	        markimpactCell: number;
	        cells: GameActionMarkedCell[];
	        active: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionMark(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionMark(param1: ICustomDataInput): void;
	    }
	    class GameActionMarkedCell implements INetworkType {
	        static ID: number;
	        cellId: number;
	        zoneSize: number;
	        cellColor: number;
	        cellsType: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameActionMarkedCell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameActionMarkedCell(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstant implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstant(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstant(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstantInteger extends ServerSessionConstant implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstantInteger(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstantInteger(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstantLong extends ServerSessionConstant implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstantLong(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstantLong(param1: ICustomDataInput): void;
	    }
	    class ServerSessionConstantString extends ServerSessionConstant implements INetworkType {
	        static ID: number;
	        value: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ServerSessionConstantString(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ServerSessionConstantString(param1: ICustomDataInput): void;
	    }
	    class AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractCharacterInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractCharacterInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalAllianceInformations extends CharacterMinimalGuildInformations implements INetworkType {
	        static ID: number;
	        alliance: BasicAllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalGuildInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
	        static ID: number;
	        guild: BasicGuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalGuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalGuildInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalInformations extends AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        level: number;
	        name: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalPlusLookAndGradeInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
	        static ID: number;
	        grade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations implements INetworkType {
	        static ID: number;
	        entityLook: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataInput): void;
	    }
	    class ActorAlignmentInformations implements INetworkType {
	        static ID: number;
	        alignmentSide: number;
	        alignmentValue: number;
	        alignmentGrade: number;
	        characterPower: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorAlignmentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorAlignmentInformations(param1: ICustomDataInput): void;
	    }
	    class ActorExtendedAlignmentInformations extends ActorAlignmentInformations implements INetworkType {
	        static ID: number;
	        honor: number;
	        honorGradeFloor: number;
	        honorNextGradeFloor: number;
	        aggressable: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterBaseCharacteristic implements INetworkType {
	        static ID: number;
	        base: number;
	        additionnal: number;
	        objectsAndMountBonus: number;
	        alignGiftBonus: number;
	        contextModif: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterBaseCharacteristic(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterBaseCharacteristic(param1: ICustomDataInput): void;
	    }
	    class CharacterCharacteristicsInformations implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterCharacteristicsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterCharacteristicsInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterSpellModification implements INetworkType {
	        static ID: number;
	        modificationType: number;
	        spellId: number;
	        value: CharacterBaseCharacteristic;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterSpellModification(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterSpellModification(param1: ICustomDataInput): void;
	    }
	    class AbstractCharacterToRefurbishInformation extends AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        colors: number[];
	        cosmeticId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractCharacterToRefurbishInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterBaseInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
	        static ID: number;
	        breed: number;
	        sex: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterBaseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterBaseInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterHardcoreOrEpicInformations extends CharacterBaseInformations implements INetworkType {
	        static ID: number;
	        deathState: number;
	        deathCount: number;
	        deathMaxLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataInput): void;
	    }
	    class CharacterRemodelingInformation extends AbstractCharacterInformation implements INetworkType {
	        static ID: number;
	        name: string;
	        breed: number;
	        sex: boolean;
	        cosmeticId: number;
	        colors: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterRemodelingInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterRemodelingInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterToRecolorInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterToRecolorInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterToRecolorInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterToRelookInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterToRelookInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterToRelookInformation(param1: ICustomDataInput): void;
	    }
	    class CharacterToRemodelInformations extends CharacterRemodelingInformation implements INetworkType {
	        static ID: number;
	        possibleChangeMask: number;
	        mandatoryChangeMask: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_CharacterToRemodelInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_CharacterToRemodelInformations(param1: ICustomDataInput): void;
	    }
	    class RemodelingInformation implements INetworkType {
	        static ID: number;
	        name: string;
	        breed: number;
	        sex: boolean;
	        cosmeticId: number;
	        colors: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_RemodelingInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_RemodelingInformation(param1: ICustomDataInput): void;
	    }
	    class ActorRestrictionsInformations implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorRestrictionsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorRestrictionsInformations(param1: ICustomDataInput): void;
	    }
	    class PlayerStatus implements INetworkType {
	        static ID: number;
	        statusId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PlayerStatus(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PlayerStatus(param1: ICustomDataInput): void;
	    }
	    class PlayerStatusExtended extends PlayerStatus implements INetworkType {
	        static ID: number;
	        message: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PlayerStatusExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PlayerStatusExtended(param1: ICustomDataInput): void;
	    }
	    class ActorOrientation implements INetworkType {
	        static ID: number;
	        id: number;
	        direction: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ActorOrientation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ActorOrientation(param1: ICustomDataInput): void;
	    }
	    class EntityDispositionInformations implements INetworkType {
	        static ID: number;
	        cellId: number;
	        direction: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EntityDispositionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EntityDispositionInformations(param1: ICustomDataInput): void;
	    }
	    class EntityMovementInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        steps: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EntityMovementInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EntityMovementInformations(param1: ICustomDataInput): void;
	    }
	    class FightEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
	        static ID: number;
	        carryingCharacterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightEntityDispositionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightEntityDispositionInformations(param1: ICustomDataInput): void;
	    }
	    class GameContextActorInformations implements INetworkType {
	        static ID: number;
	        contextualId: number;
	        look: EntityLook;
	        disposition: EntityDispositionInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameContextActorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameContextActorInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayTaxCollectorInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        identification: TaxCollectorStaticInformations;
	        guildLevel: number;
	        taxCollectorAttack: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class IdentifiedEntityDispositionInformations extends EntityDispositionInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdentifiedEntityDispositionInformations(param1: ICustomDataInput): void;
	    }
	    class MapCoordinates implements INetworkType {
	        static ID: number;
	        worldX: number;
	        worldY: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapCoordinates(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapCoordinates(param1: ICustomDataInput): void;
	    }
	    class MapCoordinatesAndId extends MapCoordinates implements INetworkType {
	        static ID: number;
	        mapId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapCoordinatesAndId(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapCoordinatesAndId(param1: ICustomDataInput): void;
	    }
	    class MapCoordinatesExtended extends MapCoordinatesAndId implements INetworkType {
	        static ID: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapCoordinatesExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapCoordinatesExtended(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorStaticExtendedInformations extends TaxCollectorStaticInformations implements INetworkType {
	        static ID: number;
	        allianceIdentity: AllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorStaticExtendedInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorStaticInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        guildIdentity: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorStaticInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorStaticInformations(param1: ICustomDataInput): void;
	    }
	    class AbstractFightTeamInformations implements INetworkType {
	        static ID: number;
	        teamId: number;
	        leaderId: number;
	        teamSide: number;
	        teamTypeId: number;
	        nbWaves: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractFightTeamInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractFightTeamInformations(param1: ICustomDataInput): void;
	    }
	    class FightAllianceTeamInformations extends FightTeamInformations implements INetworkType {
	        static ID: number;
	        relation: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightAllianceTeamInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightAllianceTeamInformations(param1: ICustomDataInput): void;
	    }
	    class FightCommonInformations implements INetworkType {
	        static ID: number;
	        fightId: number;
	        fightType: number;
	        fightTeams: FightTeamInformations[];
	        fightTeamsPositions: number[];
	        fightTeamsOptions: FightOptionsInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightCommonInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightCommonInformations(param1: ICustomDataInput): void;
	    }
	    class FightExternalInformations implements INetworkType {
	        static ID: number;
	        fightId: number;
	        fightType: number;
	        fightStart: number;
	        fightSpectatorLocked: boolean;
	        fightTeams: FightTeamLightInformations[];
	        fightTeamsOptions: FightOptionsInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightExternalInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightExternalInformations(param1: ICustomDataInput): void;
	    }
	    class FightLoot implements INetworkType {
	        static ID: number;
	        objects: number[];
	        kamas: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightLoot(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightLoot(param1: ICustomDataInput): void;
	    }
	    class FightOptionsInformations implements INetworkType {
	        static ID: number;
	        isSecret: boolean;
	        isRestrictedToPartyOnly: boolean;
	        isClosed: boolean;
	        isAskingForHelp: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightOptionsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightOptionsInformations(param1: ICustomDataInput): void;
	    }
	    class FightResultAdditionalData implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultAdditionalData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultAdditionalData(param1: ICustomDataInput): void;
	    }
	    class FightResultExperienceData extends FightResultAdditionalData implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultExperienceData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultExperienceData(param1: ICustomDataInput): void;
	    }
	    class FightResultFighterListEntry extends FightResultListEntry implements INetworkType {
	        static ID: number;
	        id: number;
	        alive: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultFighterListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultFighterListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultListEntry implements INetworkType {
	        static ID: number;
	        outcome: number;
	        wave: number;
	        rewards: FightLoot;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultMutantListEntry extends FightResultFighterListEntry implements INetworkType {
	        static ID: number;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultMutantListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultMutantListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultPlayerListEntry extends FightResultFighterListEntry implements INetworkType {
	        static ID: number;
	        level: number;
	        additional: FightResultAdditionalData[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultPlayerListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultPlayerListEntry(param1: ICustomDataInput): void;
	    }
	    class FightResultPvpData extends FightResultAdditionalData implements INetworkType {
	        static ID: number;
	        grade: number;
	        minHonorForGrade: number;
	        maxHonorForGrade: number;
	        honor: number;
	        honorDelta: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultPvpData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultPvpData(param1: ICustomDataInput): void;
	    }
	    class FightResultTaxCollectorListEntry extends FightResultFighterListEntry implements INetworkType {
	        static ID: number;
	        level: number;
	        guildInfo: BasicGuildInformations;
	        experienceForGuild: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataInput): void;
	    }
	    class FightTeamInformations extends AbstractFightTeamInformations implements INetworkType {
	        static ID: number;
	        teamMembers: FightTeamMemberInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamLightInformations extends AbstractFightTeamInformations implements INetworkType {
	        static ID: number;
	        teamMembersCount: number;
	        meanLevel: number;
	        hasFriend: boolean;
	        hasGuildMember: boolean;
	        hasAllianceMember: boolean;
	        hasGroupMember: boolean;
	        hasMyTaxCollector: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamLightInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberCharacterInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberCompanionInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        companionId: number;
	        level: number;
	        masterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberMonsterInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        monsterId: number;
	        grade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        level: number;
	        guildId: number;
	        uid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class FightTeamMemberWithAllianceCharacterInformations extends FightTeamMemberCharacterInformations implements INetworkType {
	        static ID: number;
	        allianceInfos: BasicAllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FightTeamMemberWithAllianceCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightAIInformations extends GameFightFighterInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightAIInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightAIInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightCharacterInformations extends GameFightFighterNamedInformations implements INetworkType {
	        static ID: number;
	        level: number;
	        alignmentInfos: ActorAlignmentInformations;
	        breed: number;
	        sex: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightCompanionInformations extends GameFightFighterInformations implements INetworkType {
	        static ID: number;
	        companionGenericId: number;
	        level: number;
	        masterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightCompanionInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightCompanionInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterCompanionLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        companionId: number;
	        masterId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterCompanionLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterInformations extends GameContextActorInformations implements INetworkType {
	        static ID: number;
	        teamId: number;
	        wave: number;
	        alive: boolean;
	        stats: GameFightMinimalStats;
	        previousPositions: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        id: number;
	        wave: number;
	        level: number;
	        breed: number;
	        sex: boolean;
	        alive: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterMonsterLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        creatureGenericId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterMonsterLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterNamedInformations extends GameFightFighterInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        status: PlayerStatus;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterNamedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterNamedInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterNamedLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterNamedLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightFighterTaxCollectorLightInformations extends GameFightFighterLightInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightFighterTaxCollectorLightInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightMinimalStats implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMinimalStats(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMinimalStats(param1: ICustomDataInput): void;
	    }
	    class GameFightMinimalStatsPreparation extends GameFightMinimalStats implements INetworkType {
	        static ID: number;
	        initiative: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataInput): void;
	    }
	    class GameFightMonsterInformations extends GameFightAIInformations implements INetworkType {
	        static ID: number;
	        creatureGenericId: number;
	        creatureGrade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMonsterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMonsterInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightMonsterWithAlignmentInformations extends GameFightMonsterInformations implements INetworkType {
	        static ID: number;
	        alignmentInfos: ActorAlignmentInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMonsterWithAlignmentInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightMutantInformations extends GameFightFighterNamedInformations implements INetworkType {
	        static ID: number;
	        powerLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightMutantInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightMutantInformations(param1: ICustomDataInput): void;
	    }
	    class GameFightResumeSlaveInfo implements INetworkType {
	        static ID: number;
	        slaveId: number;
	        spellCooldowns: GameFightSpellCooldown[];
	        summonCount: number;
	        bombCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightResumeSlaveInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightResumeSlaveInfo(param1: ICustomDataInput): void;
	    }
	    class GameFightSpellCooldown implements INetworkType {
	        static ID: number;
	        spellId: number;
	        cooldown: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightSpellCooldown(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightSpellCooldown(param1: ICustomDataInput): void;
	    }
	    class GameFightTaxCollectorInformations extends GameFightAIInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameFightTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameFightTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class AllianceInformations extends BasicNamedAllianceInformations implements INetworkType {
	        static ID: number;
	        allianceEmblem: GuildEmblem;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInformations(param1: ICustomDataInput): void;
	    }
	    class AlternativeMonstersInGroupLightInformations implements INetworkType {
	        static ID: number;
	        playerCount: number;
	        monsters: MonsterInGroupLightInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlternativeMonstersInGroupLightInformations(param1: ICustomDataInput): void;
	    }
	    class AtlasPointsInformations implements INetworkType {
	        static ID: number;
	        type: number;
	        coords: MapCoordinatesExtended[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AtlasPointsInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AtlasPointsInformations(param1: ICustomDataInput): void;
	    }
	    class BasicAllianceInformations extends AbstractSocialGroupInfos implements INetworkType {
	        static ID: number;
	        allianceId: number;
	        allianceTag: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class BasicGuildInformations extends AbstractSocialGroupInfos implements INetworkType {
	        static ID: number;
	        guildId: number;
	        guildName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicGuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicGuildInformations(param1: ICustomDataInput): void;
	    }
	    class BasicNamedAllianceInformations extends BasicAllianceInformations implements INetworkType {
	        static ID: number;
	        allianceName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BasicNamedAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BasicNamedAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayActorInformations extends GameContextActorInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayActorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayActorInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayCharacterInformations extends GameRolePlayHumanoidInformations implements INetworkType {
	        static ID: number;
	        alignmentInfos: ActorAlignmentInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayCharacterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayCharacterInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayGroupMonsterInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        staticInfos: GroupMonsterStaticInformations;
	        creationTime: number;
	        ageBonusRate: number;
	        lootShare: number;
	        alignmentSide: number;
	        keyRingBonus: boolean;
	        hasHardcoreDrop: boolean;
	        hasAVARewardToken: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayGroupMonsterInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayGroupMonsterWaveInformations extends GameRolePlayGroupMonsterInformations implements INetworkType {
	        static ID: number;
	        nbWaves: number;
	        alternatives: GroupMonsterStaticInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayGroupMonsterWaveInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations implements INetworkType {
	        static ID: number;
	        humanoidInfo: HumanInformations;
	        accountId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayHumanoidInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayMerchantInformations extends GameRolePlayNamedActorInformations implements INetworkType {
	        static ID: number;
	        sellType: number;
	        options: HumanOption[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayMerchantInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayMerchantInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations implements INetworkType {
	        static ID: number;
	        ownerName: string;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayMountInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayMountInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayMutantInformations extends GameRolePlayHumanoidInformations implements INetworkType {
	        static ID: number;
	        monsterId: number;
	        powerLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayMutantInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayMutantInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNamedActorInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        name: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNamedActorInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNpcInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        npcId: number;
	        sex: boolean;
	        specialArtworkId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNpcInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNpcInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNpcWithQuestInformations extends GameRolePlayNpcInformations implements INetworkType {
	        static ID: number;
	        questFlag: GameRolePlayNpcQuestFlag;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNpcWithQuestInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPortalInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        portal: PortalInformation;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPortalInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPortalInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayPrismInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        prism: PrismInformation;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayPrismInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayPrismInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayTreasureHintInformations extends GameRolePlayActorInformations implements INetworkType {
	        static ID: number;
	        npcId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayTreasureHintInformations(param1: ICustomDataInput): void;
	    }
	    class GroupMonsterStaticInformations implements INetworkType {
	        static ID: number;
	        mainCreatureLightInfos: MonsterInGroupLightInformations;
	        underlings: MonsterInGroupInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GroupMonsterStaticInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GroupMonsterStaticInformations(param1: ICustomDataInput): void;
	    }
	    class GroupMonsterStaticInformationsWithAlternatives extends GroupMonsterStaticInformations implements INetworkType {
	        static ID: number;
	        alternatives: AlternativeMonstersInGroupLightInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1: ICustomDataInput): void;
	    }
	    class GuildInAllianceInformations extends GuildInformations implements INetworkType {
	        static ID: number;
	        guildLevel: number;
	        nbMembers: number;
	        enabled: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInAllianceInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInAllianceInformations(param1: ICustomDataInput): void;
	    }
	    class GuildInformations extends BasicGuildInformations implements INetworkType {
	        static ID: number;
	        guildEmblem: GuildEmblem;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInformations(param1: ICustomDataInput): void;
	    }
	    class HumanInformations implements INetworkType {
	        static ID: number;
	        restrictions: ActorRestrictionsInformations;
	        sex: boolean;
	        options: HumanOption[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanInformations(param1: ICustomDataInput): void;
	    }
	    class HumanOption implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOption(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOption(param1: ICustomDataInput): void;
	    }
	    class HumanOptionAlliance extends HumanOption implements INetworkType {
	        static ID: number;
	        allianceInformations: AllianceInformations;
	        aggressable: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionAlliance(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionAlliance(param1: ICustomDataInput): void;
	    }
	    class HumanOptionEmote extends HumanOption implements INetworkType {
	        static ID: number;
	        emoteId: number;
	        emoteStartTime: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionEmote(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionEmote(param1: ICustomDataInput): void;
	    }
	    class HumanOptionFollowers extends HumanOption implements INetworkType {
	        static ID: number;
	        followingCharactersLook: IndexedEntityLook[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionFollowers(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionFollowers(param1: ICustomDataInput): void;
	    }
	    class HumanOptionGuild extends HumanOption implements INetworkType {
	        static ID: number;
	        guildInformations: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionGuild(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionGuild(param1: ICustomDataInput): void;
	    }
	    class HumanOptionObjectUse extends HumanOption implements INetworkType {
	        static ID: number;
	        delayTypeId: number;
	        delayEndTime: number;
	        objectGID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionObjectUse(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionObjectUse(param1: ICustomDataInput): void;
	    }
	    class HumanOptionOrnament extends HumanOption implements INetworkType {
	        static ID: number;
	        ornamentId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionOrnament(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionOrnament(param1: ICustomDataInput): void;
	    }
	    class HumanOptionTitle extends HumanOption implements INetworkType {
	        static ID: number;
	        titleId: number;
	        titleParam: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HumanOptionTitle(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HumanOptionTitle(param1: ICustomDataInput): void;
	    }
	    class MonsterInGroupInformations extends MonsterInGroupLightInformations implements INetworkType {
	        static ID: number;
	        look: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MonsterInGroupInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MonsterInGroupInformations(param1: ICustomDataInput): void;
	    }
	    class MonsterInGroupLightInformations implements INetworkType {
	        static ID: number;
	        creatureGenericId: number;
	        grade: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MonsterInGroupLightInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MonsterInGroupLightInformations(param1: ICustomDataInput): void;
	    }
	    class ObjectItemInRolePlay implements INetworkType {
	        static ID: number;
	        cellId: number;
	        objectGID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemInRolePlay(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemInRolePlay(param1: ICustomDataInput): void;
	    }
	    class DecraftedItemStackInfo implements INetworkType {
	        static ID: number;
	        objectUID: number;
	        bonusMin: number;
	        bonusMax: number;
	        runesId: number[];
	        runesQty: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DecraftedItemStackInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DecraftedItemStackInfo(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryEntryJobInfo implements INetworkType {
	        static ID: number;
	        jobId: number;
	        jobLevel: number;
	        free: boolean;
	        minLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryEntryJobInfo(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryEntryPlayerInfo implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryEntryPlayerInfo(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectoryListEntry implements INetworkType {
	        static ID: number;
	        playerInfo: JobCrafterDirectoryEntryPlayerInfo;
	        jobInfo: JobCrafterDirectoryEntryJobInfo;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectoryListEntry(param1: ICustomDataInput): void;
	    }
	    class JobCrafterDirectorySettings implements INetworkType {
	        static ID: number;
	        jobId: number;
	        minLevel: number;
	        free: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobCrafterDirectorySettings(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobCrafterDirectorySettings(param1: ICustomDataInput): void;
	    }
	    class JobDescription implements INetworkType {
	        static ID: number;
	        jobId: number;
	        skills: SkillActionDescription[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobDescription(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobDescription(param1: ICustomDataInput): void;
	    }
	    class JobExperience implements INetworkType {
	        static ID: number;
	        jobId: number;
	        jobLevel: number;
	        jobXP: number;
	        jobXpLevelFloor: number;
	        jobXpNextLevelFloor: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_JobExperience(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_JobExperience(param1: ICustomDataInput): void;
	    }
	    class DungeonPartyFinderPlayer implements INetworkType {
	        static ID: number;
	        playerId: number;
	        playerName: string;
	        breed: number;
	        sex: boolean;
	        level: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_DungeonPartyFinderPlayer(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_DungeonPartyFinderPlayer(param1: ICustomDataInput): void;
	    }
	    class NamedPartyTeam implements INetworkType {
	        static ID: number;
	        teamId: number;
	        partyName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NamedPartyTeam(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NamedPartyTeam(param1: ICustomDataInput): void;
	    }
	    class NamedPartyTeamWithOutcome implements INetworkType {
	        static ID: number;
	        team: NamedPartyTeam;
	        outcome: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_NamedPartyTeamWithOutcome(param1: ICustomDataInput): void;
	    }
	    class PartyGuestInformations implements INetworkType {
	        static ID: number;
	        guestId: number;
	        hostId: number;
	        name: string;
	        guestLook: EntityLook;
	        breed: number;
	        sex: boolean;
	        status: PlayerStatus;
	        companions: PartyCompanionBaseInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyGuestInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyGuestInformations(param1: ICustomDataInput): void;
	    }
	    class PartyInvitationMemberInformations extends CharacterBaseInformations implements INetworkType {
	        static ID: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        companions: PartyCompanionBaseInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyInvitationMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyInvitationMemberInformations(param1: ICustomDataInput): void;
	    }
	    class PartyMemberArenaInformations extends PartyMemberInformations implements INetworkType {
	        static ID: number;
	        rank: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberArenaInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberArenaInformations(param1: ICustomDataInput): void;
	    }
	    class PartyMemberGeoPosition implements INetworkType {
	        static ID: number;
	        memberId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberGeoPosition(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberGeoPosition(param1: ICustomDataInput): void;
	    }
	    class PartyMemberInformations extends CharacterBaseInformations implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyMemberInformations(param1: ICustomDataInput): void;
	    }
	    class PartyCompanionBaseInformations implements INetworkType {
	        static ID: number;
	        indexId: number;
	        companionGenericId: number;
	        entityLook: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCompanionBaseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCompanionBaseInformations(param1: ICustomDataInput): void;
	    }
	    class PartyCompanionMemberInformations extends PartyCompanionBaseInformations implements INetworkType {
	        static ID: number;
	        initiative: number;
	        lifePoints: number;
	        maxLifePoints: number;
	        prospecting: number;
	        regenRate: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyCompanionMemberInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyCompanionMemberInformations(param1: ICustomDataInput): void;
	    }
	    class GameRolePlayNpcQuestFlag implements INetworkType {
	        static ID: number;
	        questsToValidId: number[];
	        questsToStartId: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GameRolePlayNpcQuestFlag(param1: ICustomDataInput): void;
	    }
	    class QuestActiveDetailedInformations extends QuestActiveInformations implements INetworkType {
	        static ID: number;
	        stepId: number;
	        objectives: QuestObjectiveInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestActiveDetailedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestActiveDetailedInformations(param1: ICustomDataInput): void;
	    }
	    class QuestActiveInformations implements INetworkType {
	        static ID: number;
	        questId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestActiveInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestActiveInformations(param1: ICustomDataInput): void;
	    }
	    class QuestObjectiveInformations implements INetworkType {
	        static ID: number;
	        objectiveId: number;
	        objectiveStatus: boolean;
	        dialogParams: string[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestObjectiveInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestObjectiveInformations(param1: ICustomDataInput): void;
	    }
	    class QuestObjectiveInformationsWithCompletion extends QuestObjectiveInformations implements INetworkType {
	        static ID: number;
	        curCompletion: number;
	        maxCompletion: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_QuestObjectiveInformationsWithCompletion(param1: ICustomDataInput): void;
	    }
	    class PortalInformation implements INetworkType {
	        static ID: number;
	        portalId: number;
	        areaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PortalInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PortalInformation(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntFlag implements INetworkType {
	        static ID: number;
	        mapId: number;
	        state: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntFlag(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntFlag(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStep implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStep(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStep(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepDig extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepDig(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepDig(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFight extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFight(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFight(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFollowDirection extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        direction: number;
	        mapCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFollowDirectionToHint extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        direction: number;
	        npcId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataInput): void;
	    }
	    class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep implements INetworkType {
	        static ID: number;
	        direction: number;
	        poiLabelId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataInput): void;
	    }
	    class BidExchangerObjectInfo implements INetworkType {
	        static ID: number;
	        objectUID: number;
	        effects: ObjectEffect[];
	        prices: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_BidExchangerObjectInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_BidExchangerObjectInfo(param1: ICustomDataInput): void;
	    }
	    class GoldItem extends Item implements INetworkType {
	        static ID: number;
	        sum: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GoldItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GoldItem(param1: ICustomDataInput): void;
	    }
	    class Item implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Item(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Item(param1: ICustomDataInput): void;
	    }
	    class ObjectItem extends Item implements INetworkType {
	        static ID: number;
	        position: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItem(param1: ICustomDataInput): void;
	    }
	    class ObjectItemGenericQuantity extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemGenericQuantity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemGenericQuantity(param1: ICustomDataInput): void;
	    }
	    class ObjectItemInformationWithQuantity extends ObjectItemMinimalInformation implements INetworkType {
	        static ID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataInput): void;
	    }
	    class ObjectItemMinimalInformation extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemMinimalInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemMinimalInformation(param1: ICustomDataInput): void;
	    }
	    class ObjectItemNotInContainer extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemNotInContainer(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemNotInContainer(param1: ICustomDataInput): void;
	    }
	    class ObjectItemQuantity extends Item implements INetworkType {
	        static ID: number;
	        objectUID: number;
	        quantity: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemQuantity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemQuantity(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSell extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        objectPrice: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSell(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSellInBid extends ObjectItemToSell implements INetworkType {
	        static ID: number;
	        unsoldDelay: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSellInBid(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSellInBid(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSellInHumanVendorShop extends Item implements INetworkType {
	        static ID: number;
	        objectGID: number;
	        effects: ObjectEffect[];
	        objectUID: number;
	        quantity: number;
	        objectPrice: number;
	        publicPrice: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSellInHumanVendorShop(param1: ICustomDataInput): void;
	    }
	    class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation implements INetworkType {
	        static ID: number;
	        objectPrice: number;
	        buyCriterion: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataInput): void;
	    }
	    class SellerBuyerDescriptor implements INetworkType {
	        static ID: number;
	        quantities: number[];
	        types: number[];
	        taxPercentage: number;
	        taxModificationPercentage: number;
	        maxItemLevel: number;
	        maxItemPerAccount: number;
	        npcContextualId: number;
	        unsoldDelay: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SellerBuyerDescriptor(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SellerBuyerDescriptor(param1: ICustomDataInput): void;
	    }
	    class SpellItem extends Item implements INetworkType {
	        static ID: number;
	        position: number;
	        spellId: number;
	        spellLevel: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SpellItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SpellItem(param1: ICustomDataInput): void;
	    }
	    class ObjectEffect implements INetworkType {
	        static ID: number;
	        actionId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffect(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectCreature extends ObjectEffect implements INetworkType {
	        static ID: number;
	        monsterFamilyId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectCreature(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectCreature(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectDate extends ObjectEffect implements INetworkType {
	        static ID: number;
	        year: number;
	        month: number;
	        day: number;
	        hour: number;
	        minute: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectDate(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectDate(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectDice extends ObjectEffect implements INetworkType {
	        static ID: number;
	        diceNum: number;
	        diceSide: number;
	        diceConst: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectDice(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectDice(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectDuration extends ObjectEffect implements INetworkType {
	        static ID: number;
	        days: number;
	        hours: number;
	        minutes: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectDuration(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectDuration(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectInteger extends ObjectEffect implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectInteger(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectInteger(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectLadder extends ObjectEffectCreature implements INetworkType {
	        static ID: number;
	        monsterCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectLadder(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectLadder(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectMinMax extends ObjectEffect implements INetworkType {
	        static ID: number;
	        min: number;
	        max: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectMinMax(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectMinMax(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectMount extends ObjectEffect implements INetworkType {
	        static ID: number;
	        mountId: number;
	        date: number;
	        modelId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectMount(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectMount(param1: ICustomDataInput): void;
	    }
	    class ObjectEffectString extends ObjectEffect implements INetworkType {
	        static ID: number;
	        value: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ObjectEffectString(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ObjectEffectString(param1: ICustomDataInput): void;
	    }
	    class ProtectedEntityWaitingForHelpInfo implements INetworkType {
	        static ID: number;
	        timeLeftBeforeFight: number;
	        waitTimeForPlacement: number;
	        nbPositionForDefensors: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ProtectedEntityWaitingForHelpInfo(param1: ICustomDataInput): void;
	    }
	    class AbstractContactInformations implements INetworkType {
	        static ID: number;
	        accountId: number;
	        accountName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractContactInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractContactInformations(param1: ICustomDataInput): void;
	    }
	    class FriendInformations extends AbstractContactInformations implements INetworkType {
	        static ID: number;
	        playerState: number;
	        lastConnection: number;
	        achievementPoints: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendInformations(param1: ICustomDataInput): void;
	    }
	    class FriendOnlineInformations extends FriendInformations implements INetworkType {
	        static ID: number;
	        playerId: number;
	        playerName: string;
	        level: number;
	        alignmentSide: number;
	        breed: number;
	        sex: boolean;
	        guildInfo: BasicGuildInformations;
	        moodSmileyId: number;
	        status: PlayerStatus;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendOnlineInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendOnlineInformations(param1: ICustomDataInput): void;
	    }
	    class FriendSpouseInformations implements INetworkType {
	        static ID: number;
	        spouseAccountId: number;
	        spouseId: number;
	        spouseName: string;
	        spouseLevel: number;
	        breed: number;
	        sex: number;
	        spouseEntityLook: EntityLook;
	        guildInfo: BasicGuildInformations;
	        alignmentSide: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSpouseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSpouseInformations(param1: ICustomDataInput): void;
	    }
	    class FriendSpouseOnlineInformations extends FriendSpouseInformations implements INetworkType {
	        static ID: number;
	        mapId: number;
	        subAreaId: number;
	        inFight: boolean;
	        followSpouse: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_FriendSpouseOnlineInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_FriendSpouseOnlineInformations(param1: ICustomDataInput): void;
	    }
	    class IgnoredInformations extends AbstractContactInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredInformations(param1: ICustomDataInput): void;
	    }
	    class IgnoredOnlineInformations extends IgnoredInformations implements INetworkType {
	        static ID: number;
	        playerId: number;
	        playerName: string;
	        breed: number;
	        sex: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IgnoredOnlineInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IgnoredOnlineInformations(param1: ICustomDataInput): void;
	    }
	    class GuildEmblem implements INetworkType {
	        static ID: number;
	        symbolShape: number;
	        symbolColor: number;
	        backgroundShape: number;
	        backgroundColor: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildEmblem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildEmblem(param1: ICustomDataInput): void;
	    }
	    class GuildMember extends CharacterMinimalInformations implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildMember(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildMember(param1: ICustomDataInput): void;
	    }
	    class AdditionalTaxCollectorInformations implements INetworkType {
	        static ID: number;
	        collectorCallerName: string;
	        date: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AdditionalTaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorBasicInformations implements INetworkType {
	        static ID: number;
	        firstNameId: number;
	        lastNameId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorBasicInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorBasicInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorComplementaryInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorComplementaryInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorFightersInformation implements INetworkType {
	        static ID: number;
	        collectorId: number;
	        allyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        enemyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorFightersInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorFightersInformation(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorGuildInformations extends TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        guild: BasicGuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorGuildInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorGuildInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorInformations implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorLootInformations extends TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        kamas: number;
	        experience: number;
	        pods: number;
	        itemsValue: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorLootInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorLootInformations(param1: ICustomDataInput): void;
	    }
	    class TaxCollectorWaitingForHelpInformations extends TaxCollectorComplementaryInformations implements INetworkType {
	        static ID: number;
	        waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TaxCollectorWaitingForHelpInformations(param1: ICustomDataInput): void;
	    }
	    class AccountHouseInformations implements INetworkType {
	        static ID: number;
	        houseId: number;
	        modelId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AccountHouseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AccountHouseInformations(param1: ICustomDataInput): void;
	    }
	    class HouseInformations implements INetworkType {
	        static ID: number;
	        houseId: number;
	        doorsOnMap: number[];
	        ownerName: string;
	        isOnSale: boolean;
	        isSaleLocked: boolean;
	        modelId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformations(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsExtended extends HouseInformations implements INetworkType {
	        static ID: number;
	        guildInfo: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsExtended(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsForGuild implements INetworkType {
	        static ID: number;
	        houseId: number;
	        modelId: number;
	        ownerName: string;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        skillListIds: number[];
	        guildshareParams: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsForGuild(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsForGuild(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsForSell implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsForSell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsForSell(param1: ICustomDataInput): void;
	    }
	    class HouseInformationsInside implements INetworkType {
	        static ID: number;
	        houseId: number;
	        modelId: number;
	        ownerId: number;
	        ownerName: string;
	        worldX: number;
	        worldY: number;
	        price: number;
	        isLocked: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_HouseInformationsInside(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_HouseInformationsInside(param1: ICustomDataInput): void;
	    }
	    class Idol implements INetworkType {
	        static ID: number;
	        id: number;
	        xpBonusPercent: number;
	        dropBonusPercent: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Idol(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Idol(param1: ICustomDataInput): void;
	    }
	    class PartyIdol extends Idol implements INetworkType {
	        static ID: number;
	        ownersIds: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PartyIdol(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PartyIdol(param1: ICustomDataInput): void;
	    }
	    class InteractiveElement implements INetworkType {
	        static ID: number;
	        elementId: number;
	        elementTypeId: number;
	        enabledSkills: InteractiveElementSkill[];
	        disabledSkills: InteractiveElementSkill[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElement(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElement(param1: ICustomDataInput): void;
	    }
	    class InteractiveElementNamedSkill extends InteractiveElementSkill implements INetworkType {
	        static ID: number;
	        nameId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElementNamedSkill(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElementNamedSkill(param1: ICustomDataInput): void;
	    }
	    class InteractiveElementSkill implements INetworkType {
	        static ID: number;
	        skillId: number;
	        skillInstanceUid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElementSkill(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElementSkill(param1: ICustomDataInput): void;
	    }
	    class InteractiveElementWithAgeBonus extends InteractiveElement implements INetworkType {
	        static ID: number;
	        ageBonus: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_InteractiveElementWithAgeBonus(param1: ICustomDataInput): void;
	    }
	    class MapObstacle implements INetworkType {
	        static ID: number;
	        obstacleCellId: number;
	        state: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MapObstacle(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MapObstacle(param1: ICustomDataInput): void;
	    }
	    class StatedElement implements INetworkType {
	        static ID: number;
	        elementId: number;
	        elementCellId: number;
	        elementState: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StatedElement(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StatedElement(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescription implements INetworkType {
	        static ID: number;
	        skillId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescription(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescription(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescriptionCollect extends SkillActionDescriptionTimed implements INetworkType {
	        static ID: number;
	        min: number;
	        max: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescriptionCollect(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescriptionCollect(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescriptionCraft extends SkillActionDescription implements INetworkType {
	        static ID: number;
	        probability: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescriptionCraft(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescriptionCraft(param1: ICustomDataInput): void;
	    }
	    class SkillActionDescriptionTimed extends SkillActionDescription implements INetworkType {
	        static ID: number;
	        time: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SkillActionDescriptionTimed(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SkillActionDescriptionTimed(param1: ICustomDataInput): void;
	    }
	    class IdolsPreset implements INetworkType {
	        static ID: number;
	        presetId: number;
	        symbolId: number;
	        idolId: number[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IdolsPreset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IdolsPreset(param1: ICustomDataInput): void;
	    }
	    class Preset implements INetworkType {
	        static ID: number;
	        presetId: number;
	        symbolId: number;
	        mount: boolean;
	        objects: PresetItem[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Preset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Preset(param1: ICustomDataInput): void;
	    }
	    class PresetItem implements INetworkType {
	        static ID: number;
	        position: number;
	        objGid: number;
	        objUid: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PresetItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PresetItem(param1: ICustomDataInput): void;
	    }
	    class EntityLook implements INetworkType {
	        static ID: number;
	        bonesId: number;
	        skins: number[];
	        indexedColors: number[];
	        scales: number[];
	        subentities: SubEntity[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_EntityLook(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_EntityLook(param1: ICustomDataInput): void;
	    }
	    class IndexedEntityLook implements INetworkType {
	        static ID: number;
	        look: EntityLook;
	        index: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_IndexedEntityLook(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_IndexedEntityLook(param1: ICustomDataInput): void;
	    }
	    class SubEntity implements INetworkType {
	        static ID: number;
	        bindingPointCategory: number;
	        bindingPointIndex: number;
	        subEntityLook: EntityLook;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_SubEntity(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_SubEntity(param1: ICustomDataInput): void;
	    }
	    class ItemDurability implements INetworkType {
	        static ID: number;
	        durability: number;
	        durabilityMax: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ItemDurability(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ItemDurability(param1: ICustomDataInput): void;
	    }
	    class MountClientData implements INetworkType {
	        static ID: number;
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
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountClientData(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountClientData(param1: ICustomDataInput): void;
	    }
	    class UpdateMountBoost implements INetworkType {
	        static ID: number;
	        type: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateMountBoost(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateMountBoost(param1: ICustomDataInput): void;
	    }
	    class UpdateMountIntBoost extends UpdateMountBoost implements INetworkType {
	        static ID: number;
	        value: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_UpdateMountIntBoost(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_UpdateMountIntBoost(param1: ICustomDataInput): void;
	    }
	    class MountInformationsForPaddock implements INetworkType {
	        static ID: number;
	        modelId: number;
	        name: string;
	        ownerName: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_MountInformationsForPaddock(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_MountInformationsForPaddock(param1: ICustomDataInput): void;
	    }
	    class PaddockAbandonnedInformations extends PaddockBuyableInformations implements INetworkType {
	        static ID: number;
	        guildId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockAbandonnedInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockAbandonnedInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockBuyableInformations extends PaddockInformations implements INetworkType {
	        static ID: number;
	        price: number;
	        locked: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockBuyableInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockBuyableInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockContentInformations extends PaddockInformations implements INetworkType {
	        static ID: number;
	        paddockId: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        subAreaId: number;
	        abandonned: boolean;
	        mountsInformations: MountInformationsForPaddock[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockContentInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockContentInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockInformations implements INetworkType {
	        static ID: number;
	        maxOutdoorMount: number;
	        maxItems: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockInformations(param1: ICustomDataInput): void;
	    }
	    class PaddockInformationsForSell implements INetworkType {
	        static ID: number;
	        guildOwner: string;
	        worldX: number;
	        worldY: number;
	        subAreaId: number;
	        nbMount: number;
	        nbObject: number;
	        price: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockInformationsForSell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockInformationsForSell(param1: ICustomDataInput): void;
	    }
	    class PaddockItem extends ObjectItemInRolePlay implements INetworkType {
	        static ID: number;
	        durability: ItemDurability;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockItem(param1: ICustomDataInput): void;
	    }
	    class PaddockPrivateInformations extends PaddockAbandonnedInformations implements INetworkType {
	        static ID: number;
	        guildInfo: GuildInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PaddockPrivateInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PaddockPrivateInformations(param1: ICustomDataInput): void;
	    }
	    class AllianceInsiderPrismInformation extends PrismInformation implements INetworkType {
	        static ID: number;
	        lastTimeSlotModificationDate: number;
	        lastTimeSlotModificationAuthorGuildId: number;
	        lastTimeSlotModificationAuthorId: number;
	        lastTimeSlotModificationAuthorName: string;
	        modulesObjects: ObjectItem[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceInsiderPrismInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceInsiderPrismInformation(param1: ICustomDataInput): void;
	    }
	    class AlliancePrismInformation extends PrismInformation implements INetworkType {
	        static ID: number;
	        alliance: AllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlliancePrismInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlliancePrismInformation(param1: ICustomDataInput): void;
	    }
	    class PrismFightersInformation implements INetworkType {
	        static ID: number;
	        subAreaId: number;
	        waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;
	        allyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        enemyCharactersInformations: CharacterMinimalPlusLookInformations[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismFightersInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismFightersInformation(param1: ICustomDataInput): void;
	    }
	    class PrismGeolocalizedInformation extends PrismSubareaEmptyInfo implements INetworkType {
	        static ID: number;
	        worldX: number;
	        worldY: number;
	        mapId: number;
	        prism: PrismInformation;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismGeolocalizedInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismGeolocalizedInformation(param1: ICustomDataInput): void;
	    }
	    class PrismInformation implements INetworkType {
	        static ID: number;
	        typeId: number;
	        state: number;
	        nextVulnerabilityDate: number;
	        placementDate: number;
	        rewardTokenCount: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismInformation(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismInformation(param1: ICustomDataInput): void;
	    }
	    class PrismSubareaEmptyInfo implements INetworkType {
	        static ID: number;
	        subAreaId: number;
	        allianceId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_PrismSubareaEmptyInfo(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_PrismSubareaEmptyInfo(param1: ICustomDataInput): void;
	    }
	    class Shortcut implements INetworkType {
	        static ID: number;
	        slot: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Shortcut(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Shortcut(param1: ICustomDataInput): void;
	    }
	    class ShortcutEmote extends Shortcut implements INetworkType {
	        static ID: number;
	        emoteId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutEmote(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutEmote(param1: ICustomDataInput): void;
	    }
	    class ShortcutObject extends Shortcut implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObject(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObject(param1: ICustomDataInput): void;
	    }
	    class ShortcutObjectIdolsPreset extends ShortcutObject implements INetworkType {
	        static ID: number;
	        presetId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObjectIdolsPreset(param1: ICustomDataInput): void;
	    }
	    class ShortcutObjectItem extends ShortcutObject implements INetworkType {
	        static ID: number;
	        itemUID: number;
	        itemGID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObjectItem(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObjectItem(param1: ICustomDataInput): void;
	    }
	    class ShortcutObjectPreset extends ShortcutObject implements INetworkType {
	        static ID: number;
	        presetId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutObjectPreset(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutObjectPreset(param1: ICustomDataInput): void;
	    }
	    class ShortcutSmiley extends Shortcut implements INetworkType {
	        static ID: number;
	        smileyId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutSmiley(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutSmiley(param1: ICustomDataInput): void;
	    }
	    class ShortcutSpell extends Shortcut implements INetworkType {
	        static ID: number;
	        spellId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ShortcutSpell(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ShortcutSpell(param1: ICustomDataInput): void;
	    }
	    class AbstractSocialGroupInfos implements INetworkType {
	        static ID: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AbstractSocialGroupInfos(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AbstractSocialGroupInfos(param1: ICustomDataInput): void;
	    }
	    class AllianceFactSheetInformations extends AllianceInformations implements INetworkType {
	        static ID: number;
	        creationDate: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class AllianceVersatileInformations implements INetworkType {
	        static ID: number;
	        allianceId: number;
	        nbGuilds: number;
	        nbMembers: number;
	        nbSubarea: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AllianceVersatileInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AllianceVersatileInformations(param1: ICustomDataInput): void;
	    }
	    class AlliancedGuildFactSheetInformations extends GuildInformations implements INetworkType {
	        static ID: number;
	        allianceInfos: BasicNamedAllianceInformations;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_AlliancedGuildFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class GuildFactSheetInformations extends GuildInformations implements INetworkType {
	        static ID: number;
	        leaderId: number;
	        guildLevel: number;
	        nbMembers: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class GuildInAllianceVersatileInformations extends GuildVersatileInformations implements INetworkType {
	        static ID: number;
	        allianceId: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataInput): void;
	    }
	    class GuildInsiderFactSheetInformations extends GuildFactSheetInformations implements INetworkType {
	        static ID: number;
	        leaderName: string;
	        nbConnectedMembers: number;
	        nbTaxCollectors: number;
	        lastActivity: number;
	        enabled: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataInput): void;
	    }
	    class GuildVersatileInformations implements INetworkType {
	        static ID: number;
	        guildId: number;
	        leaderId: number;
	        guildLevel: number;
	        nbMembers: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_GuildVersatileInformations(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_GuildVersatileInformations(param1: ICustomDataInput): void;
	    }
	    class StartupActionAddObject implements INetworkType {
	        static ID: number;
	        uid: number;
	        title: string;
	        text: string;
	        descUrl: string;
	        pictureUrl: string;
	        items: ObjectItemInformationWithQuantity[];
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_StartupActionAddObject(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_StartupActionAddObject(param1: ICustomDataInput): void;
	    }
	    class TrustCertificate implements INetworkType {
	        static ID: number;
	        id: number;
	        hash: string;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_TrustCertificate(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_TrustCertificate(param1: ICustomDataInput): void;
	    }
	    class ContentPart implements INetworkType {
	        static ID: number;
	        id: string;
	        state: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_ContentPart(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_ContentPart(param1: ICustomDataInput): void;
	    }
	    class Version implements INetworkType {
	        static ID: number;
	        major: number;
	        minor: number;
	        release: number;
	        revision: number;
	        patch: number;
	        buildType: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_Version(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_Version(param1: ICustomDataInput): void;
	    }
	    class VersionExtended extends Version implements INetworkType {
	        static ID: number;
	        install: number;
	        technology: number;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_VersionExtended(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_VersionExtended(param1: ICustomDataInput): void;
	    }
	    class KrosmasterFigure implements INetworkType {
	        static ID: number;
	        uid: string;
	        figure: number;
	        pedestal: number;
	        bound: boolean;
	        constructor();
	        getTypeId(): number;
	        reset(): void;
	        serialize(param1: ICustomDataOutput): void;
	        serializeAs_KrosmasterFigure(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        deserializeAs_KrosmasterFigure(param1: ICustomDataInput): void;
	    }
	    class MessageReceiver {
	        private static _list;
	        constructor();
	        static parse(param1: ICustomDataInput, param2: number, param3: number): INetworkMessage;
	    }
	    class ProtocolTypeManager {
	        private static _list;
	        constructor();
	        static getInstance(networkType: any, param2: number): INetworkType;
	    }
	    class Binary64 {
	        low: number;
	        high: number;
	        constructor(low?: number, high?: number);
	        div(n: number): number;
	        mul(n: number): void;
	        add(n: number): void;
	        bitwiseNot(n: number): void;
	    }
	    class BooleanByteWrapper {
	        static setFlag(param1?: number, param2?: number, param3?: boolean): number;
	        static getFlag(param1: number, param2: number): boolean;
	    }
	    interface ICustomDataOutput {
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
	    interface ICustomDataInput {
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
	    class CustomDataWrapper implements ICustomDataOutput, ICustomDataInput {
	        private static INT_SIZE;
	        private static SHORT_SIZE;
	        private static SHORT_MIN_VALUE;
	        private static SHORT_MAX_VALUE;
	        private static UNSIGNED_SHORT_MAX_VALUE;
	        private static CHUNCK_BIT_SIZE;
	        private static MAX_ENCODING_LENGTH;
	        private static MASK_10000000;
	        private static MASK_01111111;
	        private _data;
	        constructor(data: ByteArray);
	        position: number;
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
	        endian: string;
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
	        private readInt64(param1);
	        private readUInt64(param1);
	        private writeint32(param1, param2);
	    }
	    class NetworkMessage {
	        static BIT_RIGHT_SHIFT_LEN_PACKET_ID: number;
	        static writePacket(param1: ICustomDataOutput, param2: number, param3: ByteArray): void;
	        private static computeTypeLen(param1);
	        private static subComputeStaticHeader(param1, param2);
	    }
	    interface INetworkMessage {
	        pack(param1: ICustomDataOutput): void;
	        unpack(param1: ICustomDataInput, param2: number): void;
	        getMessageId(): number;
	        reset(): void;
	    }
	    interface INetworkType {
	        serialize(param1: ICustomDataOutput): void;
	        deserialize(param1: ICustomDataInput): void;
	        getTypeId(): number;
	        reset(): void;
	    }
	}
	export = Protocol;

}
