/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import IdentificationFailedMessage = require('./identification-failed-message');

class IdentificationFailedBannedMessage extends IdentificationFailedMessage {
    public static ID: number = 6174;

    banEndDate: number;

    constructor() {
        this.banEndDate = 0;
        super();
    }

    public getMessageId(): number {
        return IdentificationFailedBannedMessage.ID;
    }

    public reset(): void {
        this.banEndDate = 0;
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
        this.serializeAs_IdentificationFailedBannedMessage(param1);
    }

    public serializeAs_IdentificationFailedBannedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_IdentificationFailedMessage(param1);
        if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.banEndDate + ') on element banEndDate.');
        }
        param1.writeDouble(this.banEndDate);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdentificationFailedBannedMessage(param1);
    }

    public deserializeAs_IdentificationFailedBannedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.banEndDate = param1.readDouble();
        if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.banEndDate + ') on element of IdentificationFailedBannedMessage.banEndDate.');
        }

    }
}

export = IdentificationFailedBannedMessage;
