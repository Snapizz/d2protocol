/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');
import GuildInformations = require('../../../../../../types/game/context/roleplay/guild-informations');

class HouseGuildRightsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5703;

    houseId: number;
    guildInfo: GuildInformations;
    rights: number;

    constructor() {
        this.houseId = 0;
        this.guildInfo = new GuildInformations();
        this.rights = 0;
        super();
    }

    public getMessageId(): number {
        return HouseGuildRightsMessage.ID;
    }

    public reset(): void {
        this.houseId = 0;
        this.guildInfo = new GuildInformations();
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
        this.serializeAs_HouseGuildRightsMessage(param1);
    }

    public serializeAs_HouseGuildRightsMessage(param1: ICustomDataOutput): void {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        this.guildInfo.serializeAs_GuildInformations(param1);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeVarInt(this.rights);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseGuildRightsMessage(param1);
    }

    public deserializeAs_HouseGuildRightsMessage(param1: ICustomDataInput): void {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseGuildRightsMessage.houseId.');
        }
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of HouseGuildRightsMessage.rights.');
        }

    }
}

export = HouseGuildRightsMessage;
