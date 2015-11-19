/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ObjectFeedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6290;

    objectUID: number;
    foodUID: number;
    foodQuantity: number;

    constructor() {
        this.objectUID = 0;
        this.foodUID = 0;
        this.foodQuantity = 0;
        super();
    }

    public getMessageId(): number {
        return ObjectFeedMessage.ID;
    }

    public reset(): void {
        this.objectUID = 0;
        this.foodUID = 0;
        this.foodQuantity = 0;
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
        this.serializeAs_ObjectFeedMessage(param1);
    }

    public serializeAs_ObjectFeedMessage(param1: ICustomDataOutput): void {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element foodUID.');
        }
        param1.writeVarInt(this.foodUID);
        if (this.foodQuantity < 0) {
            throw new Error('Forbidden value (' + this.foodQuantity + ') on element foodQuantity.');
        }
        param1.writeVarInt(this.foodQuantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectFeedMessage(param1);
    }

    public deserializeAs_ObjectFeedMessage(param1: ICustomDataInput): void {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectFeedMessage.objectUID.');
        }
        this.foodUID = param1.readVarUhInt();
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element of ObjectFeedMessage.foodUID.');
        }
        this.foodQuantity = param1.readVarUhInt();
        if (this.foodQuantity < 0) {
            throw new Error('Forbidden value (' + this.foodQuantity + ') on element of ObjectFeedMessage.foodQuantity.');
        }

    }
}

export = ObjectFeedMessage;
