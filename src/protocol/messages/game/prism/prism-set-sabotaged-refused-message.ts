/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismSetSabotagedRefusedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6466;

    subAreaId: number;
    reason: number;

    constructor() {
        this.subAreaId = 0;
        this.reason = 0;
        super();
    }

    public getMessageId(): number {
        return PrismSetSabotagedRefusedMessage.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
        this.reason = 0;
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
        this.serializeAs_PrismSetSabotagedRefusedMessage(param1);
    }

    public serializeAs_PrismSetSabotagedRefusedMessage(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.reason);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismSetSabotagedRefusedMessage(param1);
    }

    public deserializeAs_PrismSetSabotagedRefusedMessage(param1: ICustomDataInput): void {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSetSabotagedRefusedMessage.subAreaId.');
        }
        this.reason = param1.readByte();

    }
}

export = PrismSetSabotagedRefusedMessage;
