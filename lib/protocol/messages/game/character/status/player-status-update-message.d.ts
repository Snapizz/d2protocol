/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import PlayerStatus = require('../../../../types/game/character/status/player-status');
declare class PlayerStatusUpdateMessage extends NetworkMessage implements INetworkMessage {
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
export = PlayerStatusUpdateMessage;
