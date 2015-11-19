/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceCreationResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6391;

    result: number;

    constructor() {
        this.result = 0;
        super();
    }

    public getMessageId(): number {
        return AllianceCreationResultMessage.ID;
    }

    public reset(): void {
        this.result = 0;
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
        this.serializeAs_AllianceCreationResultMessage(param1);
    }

    public serializeAs_AllianceCreationResultMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.result);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceCreationResultMessage(param1);
    }

    public deserializeAs_AllianceCreationResultMessage(param1: ICustomDataInput): void {
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of AllianceCreationResultMessage.result.');
        }

    }
}

export = AllianceCreationResultMessage;
