/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class CharacterReportMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6079;

    reportedId: number;
    reason: number;

    constructor() {
        this.reportedId = 0;
        this.reason = 0;
        super();
    }

    public getMessageId(): number {
        return CharacterReportMessage.ID;
    }

    public reset(): void {
        this.reportedId = 0;
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
        this.serializeAs_CharacterReportMessage(param1);
    }

    public serializeAs_CharacterReportMessage(param1: ICustomDataOutput): void {
        if (this.reportedId < 0) {
            throw new Error('Forbidden value (' + this.reportedId + ') on element reportedId.');
        }
        param1.writeVarInt(this.reportedId);
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element reason.');
        }
        param1.writeByte(this.reason);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterReportMessage(param1);
    }

    public deserializeAs_CharacterReportMessage(param1: ICustomDataInput): void {
        this.reportedId = param1.readVarUhInt();
        if (this.reportedId < 0) {
            throw new Error('Forbidden value (' + this.reportedId + ') on element of CharacterReportMessage.reportedId.');
        }
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of CharacterReportMessage.reason.');
        }

    }
}

export = CharacterReportMessage;
