/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import IdentificationSuccessMessage = require('./identification-success-message');

class IdentificationSuccessWithLoginTokenMessage extends IdentificationSuccessMessage {
    public static ID: number = 6209;

    loginToken: string;

    constructor() {
        this.loginToken = '';
        super();
    }

    public getMessageId(): number {
        return IdentificationSuccessWithLoginTokenMessage.ID;
    }

    public reset(): void {
        this.loginToken = '';
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
        this.serializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
    }

    public serializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataOutput): void {
        super.serializeAs_IdentificationSuccessMessage(param1);
        param1.writeUTF(this.loginToken);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1);
    }

    public deserializeAs_IdentificationSuccessWithLoginTokenMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.loginToken = param1.readUTF();

    }
}

export = IdentificationSuccessWithLoginTokenMessage;
