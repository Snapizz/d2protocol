/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildGetInformationsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5550;

    infoType: number;

    constructor() {
        this.infoType = 0;
        super();
    }

    public getMessageId(): number {
        return GuildGetInformationsMessage.ID;
    }

    public reset(): void {
        this.infoType = 0;
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
        this.serializeAs_GuildGetInformationsMessage(param1);
    }

    public serializeAs_GuildGetInformationsMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.infoType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildGetInformationsMessage(param1);
    }

    public deserializeAs_GuildGetInformationsMessage(param1: ICustomDataInput): void {
        this.infoType = param1.readByte();
        if (this.infoType < 0) {
            throw new Error('Forbidden value (' + this.infoType + ') on element of GuildGetInformationsMessage.infoType.');
        }

    }
}

export = GuildGetInformationsMessage;
