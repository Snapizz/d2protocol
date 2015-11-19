/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItem = require('../../../../types/game/data/items/object-item');

class ObjectModifiedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 3029;

    object: ObjectItem;

    constructor() {
        this.object = new ObjectItem();
        super();
    }

    public getMessageId(): number {
        return ObjectModifiedMessage.ID;
    }

    public reset(): void {
        this.object = new ObjectItem();
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
        this.serializeAs_ObjectModifiedMessage(param1);
    }

    public serializeAs_ObjectModifiedMessage(param1: ICustomDataOutput): void {
        this.object.serializeAs_ObjectItem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectModifiedMessage(param1);
    }

    public deserializeAs_ObjectModifiedMessage(param1: ICustomDataInput): void {
        this.object = new ObjectItem();
        this.object.deserialize(param1);

    }
}

export = ObjectModifiedMessage;
