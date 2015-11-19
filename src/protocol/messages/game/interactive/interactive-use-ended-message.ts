/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class InteractiveUseEndedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6112;

    elemId: number;
    skillId: number;

    constructor() {
        this.elemId = 0;
        this.skillId = 0;
        super();
    }

    public getMessageId(): number {
        return InteractiveUseEndedMessage.ID;
    }

    public reset(): void {
        this.elemId = 0;
        this.skillId = 0;
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
        this.serializeAs_InteractiveUseEndedMessage(param1);
    }

    public serializeAs_InteractiveUseEndedMessage(param1: ICustomDataOutput): void {
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element elemId.');
        }
        param1.writeVarInt(this.elemId);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarShort(this.skillId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveUseEndedMessage(param1);
    }

    public deserializeAs_InteractiveUseEndedMessage(param1: ICustomDataInput): void {
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element of InteractiveUseEndedMessage.elemId.');
        }
        this.skillId = param1.readVarUhShort();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveUseEndedMessage.skillId.');
        }

    }
}

export = InteractiveUseEndedMessage;
