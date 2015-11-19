/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismSettingsRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6437;

    subAreaId: number;
    startDefenseTime: number;

    constructor() {
        this.subAreaId = 0;
        this.startDefenseTime = 0;
        super();
    }

    public getMessageId(): number {
        return PrismSettingsRequestMessage.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
        this.startDefenseTime = 0;
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
        this.serializeAs_PrismSettingsRequestMessage(param1);
    }

    public serializeAs_PrismSettingsRequestMessage(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.startDefenseTime < 0) {
            throw new Error('Forbidden value (' + this.startDefenseTime + ') on element startDefenseTime.');
        }
        param1.writeByte(this.startDefenseTime);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismSettingsRequestMessage(param1);
    }

    public deserializeAs_PrismSettingsRequestMessage(param1: ICustomDataInput): void {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSettingsRequestMessage.subAreaId.');
        }
        this.startDefenseTime = param1.readByte();
        if (this.startDefenseTime < 0) {
            throw new Error('Forbidden value (' + this.startDefenseTime + ') on element of PrismSettingsRequestMessage.startDefenseTime.');
        }

    }
}

export = PrismSettingsRequestMessage;
