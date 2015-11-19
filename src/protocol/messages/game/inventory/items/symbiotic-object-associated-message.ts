/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class SymbioticObjectAssociatedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6527;

    hostUID: number;

    constructor() {
        this.hostUID = 0;
        super();
    }

    public getMessageId(): number {
        return SymbioticObjectAssociatedMessage.ID;
    }

    public reset(): void {
        this.hostUID = 0;
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
        this.serializeAs_SymbioticObjectAssociatedMessage(param1);
    }

    public serializeAs_SymbioticObjectAssociatedMessage(param1: ICustomDataOutput): void {
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element hostUID.');
        }
        param1.writeVarInt(this.hostUID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SymbioticObjectAssociatedMessage(param1);
    }

    public deserializeAs_SymbioticObjectAssociatedMessage(param1: ICustomDataInput): void {
        this.hostUID = param1.readVarUhInt();
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element of SymbioticObjectAssociatedMessage.hostUID.');
        }

    }
}

export = SymbioticObjectAssociatedMessage;
