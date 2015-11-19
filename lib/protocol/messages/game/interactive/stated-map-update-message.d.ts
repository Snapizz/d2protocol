/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import StatedElement = require('../../../types/game/interactive/stated-element');
declare class StatedMapUpdateMessage extends NetworkMessage implements INetworkMessage {
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
export = StatedMapUpdateMessage;
