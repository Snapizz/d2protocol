/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ActorRestrictionsInformations = require('../../../types/game/character/restriction/actor-restrictions-informations');
declare class SetCharacterRestrictionsMessage extends NetworkMessage implements INetworkMessage {
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
export = SetCharacterRestrictionsMessage;
