/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class InteractiveUsedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5745;

    entityId: number;
    elemId: number;
    skillId: number;
    duration: number;

    constructor() {
        this.entityId = 0;
        this.elemId = 0;
        this.skillId = 0;
        this.duration = 0;
        super();
    }

    public getMessageId(): number {
        return InteractiveUsedMessage.ID;
    }

    public reset(): void {
        this.entityId = 0;
        this.elemId = 0;
        this.skillId = 0;
        this.duration = 0;
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
        this.serializeAs_InteractiveUsedMessage(param1);
    }

    public serializeAs_InteractiveUsedMessage(param1: ICustomDataOutput): void {
        if (this.entityId < 0) {
            throw new Error('Forbidden value (' + this.entityId + ') on element entityId.');
        }
        param1.writeVarInt(this.entityId);
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element elemId.');
        }
        param1.writeVarInt(this.elemId);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarShort(this.skillId);
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element duration.');
        }
        param1.writeVarShort(this.duration);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveUsedMessage(param1);
    }

    public deserializeAs_InteractiveUsedMessage(param1: ICustomDataInput): void {
        this.entityId = param1.readVarUhInt();
        if (this.entityId < 0) {
            throw new Error('Forbidden value (' + this.entityId + ') on element of InteractiveUsedMessage.entityId.');
        }
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element of InteractiveUsedMessage.elemId.');
        }
        this.skillId = param1.readVarUhShort();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveUsedMessage.skillId.');
        }
        this.duration = param1.readVarUhShort();
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element of InteractiveUsedMessage.duration.');
        }

    }
}

export = InteractiveUsedMessage;
