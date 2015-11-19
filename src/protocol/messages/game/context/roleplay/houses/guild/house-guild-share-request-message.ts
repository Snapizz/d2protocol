/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');

class HouseGuildShareRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5704;

    enable: boolean;
    rights: number;

    constructor() {
        this.enable = false;
        this.rights = 0;
        super();
    }

    public getMessageId(): number {
        return HouseGuildShareRequestMessage.ID;
    }

    public reset(): void {
        this.enable = false;
        this.rights = 0;
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
        this.serializeAs_HouseGuildShareRequestMessage(param1);
    }

    public serializeAs_HouseGuildShareRequestMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.enable);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeVarInt(this.rights);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseGuildShareRequestMessage(param1);
    }

    public deserializeAs_HouseGuildShareRequestMessage(param1: ICustomDataInput): void {
        this.enable = param1.readBoolean();
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of HouseGuildShareRequestMessage.rights.');
        }

    }
}

export = HouseGuildShareRequestMessage;
