/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import GameRolePlayNpcQuestFlag = require('../../../../../types/game/context/roleplay/quest/game-role-play-npc-quest-flag');
declare class MapNpcsQuestStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
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
export = MapNpcsQuestStatusUpdateMessage;
