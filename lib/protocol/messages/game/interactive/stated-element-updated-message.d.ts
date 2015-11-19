/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import StatedElement = require('../../../types/game/interactive/stated-element');
declare class StatedElementUpdatedMessage extends NetworkMessage implements INetworkMessage {
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
export = StatedElementUpdatedMessage;
