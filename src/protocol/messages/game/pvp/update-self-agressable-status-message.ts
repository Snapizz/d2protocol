/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class UpdateSelfAgressableStatusMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6456;

    status: number;
    probationTime: number;

    constructor() {
        this.status = 0;
        this.probationTime = 0;
        super();
    }

    public getMessageId(): number {
        return UpdateSelfAgressableStatusMessage.ID;
    }

    public reset(): void {
        this.status = 0;
        this.probationTime = 0;
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
        this.serializeAs_UpdateSelfAgressableStatusMessage(param1);
    }

    public serializeAs_UpdateSelfAgressableStatusMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.status);
        if (this.probationTime < 0) {
            throw new Error('Forbidden value (' + this.probationTime + ') on element probationTime.');
        }
        param1.writeInt(this.probationTime);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_UpdateSelfAgressableStatusMessage(param1);
    }

    public deserializeAs_UpdateSelfAgressableStatusMessage(param1: ICustomDataInput): void {
        this.status = param1.readByte();
        if (this.status < 0) {
            throw new Error('Forbidden value (' + this.status + ') on element of UpdateSelfAgressableStatusMessage.status.');
        }
        this.probationTime = param1.readInt();
        if (this.probationTime < 0) {
            throw new Error('Forbidden value (' + this.probationTime + ') on element of UpdateSelfAgressableStatusMessage.probationTime.');
        }

    }
}

export = UpdateSelfAgressableStatusMessage;
