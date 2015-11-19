/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class InteractiveUseRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5001;

    elemId: number;
    skillInstanceUid: number;

    constructor() {
        this.elemId = 0;
        this.skillInstanceUid = 0;
        super();
    }

    public getMessageId(): number {
        return InteractiveUseRequestMessage.ID;
    }

    public reset(): void {
        this.elemId = 0;
        this.skillInstanceUid = 0;
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
        this.serializeAs_InteractiveUseRequestMessage(param1);
    }

    public serializeAs_InteractiveUseRequestMessage(param1: ICustomDataOutput): void {
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element elemId.');
        }
        param1.writeVarInt(this.elemId);
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element skillInstanceUid.');
        }
        param1.writeVarInt(this.skillInstanceUid);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveUseRequestMessage(param1);
    }

    public deserializeAs_InteractiveUseRequestMessage(param1: ICustomDataInput): void {
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element of InteractiveUseRequestMessage.elemId.');
        }
        this.skillInstanceUid = param1.readVarUhInt();
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element of InteractiveUseRequestMessage.skillInstanceUid.');
        }

    }
}

export = InteractiveUseRequestMessage;
