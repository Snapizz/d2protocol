/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class LockableUseCodeMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5667;

    code: string;

    constructor() {
        this.code = '';
        super();
    }

    public getMessageId(): number {
        return LockableUseCodeMessage.ID;
    }

    public reset(): void {
        this.code = '';
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
        this.serializeAs_LockableUseCodeMessage(param1);
    }

    public serializeAs_LockableUseCodeMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.code);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LockableUseCodeMessage(param1);
    }

    public deserializeAs_LockableUseCodeMessage(param1: ICustomDataInput): void {
        this.code = param1.readUTF();

    }
}

export = LockableUseCodeMessage;
