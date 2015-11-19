/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import EntityLook = require('../../../types/game/look/entity-look');
declare class ContactLookMessage extends NetworkMessage implements INetworkMessage {
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
export = ContactLookMessage;
