/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import IdentificationMessage = require('./identification-message');
import VersionExtended = require('../../types/version/version-extended');

class IdentificationAccountForceMessage extends IdentificationMessage {
    public static ID: number = 6119;

    forcedAccountLogin: string;

    constructor() {
        this.forcedAccountLogin = '';
        super();
    }

    public getMessageId(): number {
        return IdentificationAccountForceMessage.ID;
    }

    public reset(): void {
        this.forcedAccountLogin = '';
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
        this.serializeAs_IdentificationAccountForceMessage(param1);
    }

    public serializeAs_IdentificationAccountForceMessage(param1: ICustomDataOutput): void {
        super.serializeAs_IdentificationMessage(param1);
        param1.writeUTF(this.forcedAccountLogin);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdentificationAccountForceMessage(param1);
    }

    public deserializeAs_IdentificationAccountForceMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.forcedAccountLogin = param1.readUTF();

    }
}

export = IdentificationAccountForceMessage;
