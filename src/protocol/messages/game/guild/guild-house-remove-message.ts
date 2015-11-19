/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildHouseRemoveMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6180;

    houseId: number;

    constructor() {
        this.houseId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildHouseRemoveMessage.ID;
    }

    public reset(): void {
        this.houseId = 0;
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
        this.serializeAs_GuildHouseRemoveMessage(param1);
    }

    public serializeAs_GuildHouseRemoveMessage(param1: ICustomDataOutput): void {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildHouseRemoveMessage(param1);
    }

    public deserializeAs_GuildHouseRemoveMessage(param1: ICustomDataInput): void {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of GuildHouseRemoveMessage.houseId.');
        }

    }
}

export = GuildHouseRemoveMessage;
