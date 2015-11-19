/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismSetSabotagedRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6468;

    subAreaId: number;

    constructor() {
        this.subAreaId = 0;
        super();
    }

    public getMessageId(): number {
        return PrismSetSabotagedRequestMessage.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
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
        this.serializeAs_PrismSetSabotagedRequestMessage(param1);
    }

    public serializeAs_PrismSetSabotagedRequestMessage(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismSetSabotagedRequestMessage(param1);
    }

    public deserializeAs_PrismSetSabotagedRequestMessage(param1: ICustomDataInput): void {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSetSabotagedRequestMessage.subAreaId.');
        }

    }
}

export = PrismSetSabotagedRequestMessage;
