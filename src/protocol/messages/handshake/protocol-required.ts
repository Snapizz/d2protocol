/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class ProtocolRequired extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1;

    requiredVersion: number;
    currentVersion: number;

    constructor() {
        this.requiredVersion = 0;
        this.currentVersion = 0;
        super();
    }

    public getMessageId(): number {
        return ProtocolRequired.ID;
    }

    public reset(): void {
        this.requiredVersion = 0;
        this.currentVersion = 0;
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
        this.serializeAs_ProtocolRequired(param1);
    }

    public serializeAs_ProtocolRequired(param1: ICustomDataOutput): void {
        if (this.requiredVersion < 0) {
            throw new Error('Forbidden value (' + this.requiredVersion + ') on element requiredVersion.');
        }
        param1.writeInt(this.requiredVersion);
        if (this.currentVersion < 0) {
            throw new Error('Forbidden value (' + this.currentVersion + ') on element currentVersion.');
        }
        param1.writeInt(this.currentVersion);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ProtocolRequired(param1);
    }

    public deserializeAs_ProtocolRequired(param1: ICustomDataInput): void {
        this.requiredVersion = param1.readInt();
        if (this.requiredVersion < 0) {
            throw new Error('Forbidden value (' + this.requiredVersion + ') on element of ProtocolRequired.requiredVersion.');
        }
        this.currentVersion = param1.readInt();
        if (this.currentVersion < 0) {
            throw new Error('Forbidden value (' + this.currentVersion + ') on element of ProtocolRequired.currentVersion.');
        }

    }
}

export = ProtocolRequired;
