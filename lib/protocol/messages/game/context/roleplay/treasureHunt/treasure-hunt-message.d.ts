/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import TreasureHuntStep = require('../../../../../types/game/context/roleplay/treasureHunt/treasure-hunt-step');
import TreasureHuntFlag = require('../../../../../types/game/context/roleplay/treasureHunt/treasure-hunt-flag');
declare class TreasureHuntMessage extends NetworkMessage implements INetworkMessage {
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
export = TreasureHuntMessage;
