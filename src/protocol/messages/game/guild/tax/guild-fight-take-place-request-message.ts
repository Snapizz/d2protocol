/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GuildFightJoinRequestMessage = require('./guild-fight-join-request-message');

class GuildFightTakePlaceRequestMessage extends GuildFightJoinRequestMessage {
    public static ID: number = 6235;

    replacedCharacterId: number;

    constructor() {
        this.replacedCharacterId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildFightTakePlaceRequestMessage.ID;
    }

    public reset(): void {
        this.replacedCharacterId = 0;
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
        this.serializeAs_GuildFightTakePlaceRequestMessage(param1);
    }

    public serializeAs_GuildFightTakePlaceRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GuildFightJoinRequestMessage(param1);
        param1.writeInt(this.replacedCharacterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFightTakePlaceRequestMessage(param1);
    }

    public deserializeAs_GuildFightTakePlaceRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.replacedCharacterId = param1.readInt();

    }
}

export = GuildFightTakePlaceRequestMessage;
