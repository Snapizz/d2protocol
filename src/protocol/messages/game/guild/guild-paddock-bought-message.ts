/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PaddockContentInformations = require('../../../types/game/paddock/paddock-content-informations');

class GuildPaddockBoughtMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5952;

    paddockInfo: PaddockContentInformations;

    constructor() {
        this.paddockInfo = new PaddockContentInformations();
        super();
    }

    public getMessageId(): number {
        return GuildPaddockBoughtMessage.ID;
    }

    public reset(): void {
        this.paddockInfo = new PaddockContentInformations();
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
        this.serializeAs_GuildPaddockBoughtMessage(param1);
    }

    public serializeAs_GuildPaddockBoughtMessage(param1: ICustomDataOutput): void {
        this.paddockInfo.serializeAs_PaddockContentInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildPaddockBoughtMessage(param1);
    }

    public deserializeAs_GuildPaddockBoughtMessage(param1: ICustomDataInput): void {
        this.paddockInfo = new PaddockContentInformations();
        this.paddockInfo.deserialize(param1);

    }
}

export = GuildPaddockBoughtMessage;
