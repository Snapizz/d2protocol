/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import AdminCommandMessage = require('./admin-command-message');

class AdminQuietCommandMessage extends AdminCommandMessage {
    public static ID: number = 5662;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return AdminQuietCommandMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_AdminQuietCommandMessage(param1);
    }

    public serializeAs_AdminQuietCommandMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AdminCommandMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AdminQuietCommandMessage(param1);
    }

    public deserializeAs_AdminQuietCommandMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = AdminQuietCommandMessage;
