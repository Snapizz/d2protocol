/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MountEquipedErrorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5963;

    errorType: number;

    constructor() {
        this.errorType = 0;
        super();
    }

    public getMessageId(): number {
        return MountEquipedErrorMessage.ID;
    }

    public reset(): void {
        this.errorType = 0;
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
        this.serializeAs_MountEquipedErrorMessage(param1);
    }

    public serializeAs_MountEquipedErrorMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.errorType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MountEquipedErrorMessage(param1);
    }

    public deserializeAs_MountEquipedErrorMessage(param1: ICustomDataInput): void {
        this.errorType = param1.readByte();
        if (this.errorType < 0) {
            throw new Error('Forbidden value (' + this.errorType + ') on element of MountEquipedErrorMessage.errorType.');
        }

    }
}

export = MountEquipedErrorMessage;
