/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildCharacsUpgradeRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5706;

    charaTypeTarget: number;

    constructor() {
        this.charaTypeTarget = 0;
        super();
    }

    public getMessageId(): number {
        return GuildCharacsUpgradeRequestMessage.ID;
    }

    public reset(): void {
        this.charaTypeTarget = 0;
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
        this.serializeAs_GuildCharacsUpgradeRequestMessage(param1);
    }

    public serializeAs_GuildCharacsUpgradeRequestMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.charaTypeTarget);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildCharacsUpgradeRequestMessage(param1);
    }

    public deserializeAs_GuildCharacsUpgradeRequestMessage(param1: ICustomDataInput): void {
        this.charaTypeTarget = param1.readByte();
        if (this.charaTypeTarget < 0) {
            throw new Error('Forbidden value (' + this.charaTypeTarget + ') on element of GuildCharacsUpgradeRequestMessage.charaTypeTarget.');
        }

    }
}

export = GuildCharacsUpgradeRequestMessage;
