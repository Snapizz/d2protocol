/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ObjectItem = require('../../../../types/game/data/items/object-item');
declare class MimicryObjectPreviewMessage extends NetworkMessage implements INetworkMessage {
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
export = MimicryObjectPreviewMessage;
