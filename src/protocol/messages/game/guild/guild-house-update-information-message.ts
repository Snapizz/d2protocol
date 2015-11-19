/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import HouseInformationsForGuild = require('../../../types/game/house/house-informations-for-guild');

class GuildHouseUpdateInformationMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6181;

    housesInformations: HouseInformationsForGuild;

    constructor() {
        this.housesInformations = new HouseInformationsForGuild();
        super();
    }

    public getMessageId(): number {
        return GuildHouseUpdateInformationMessage.ID;
    }

    public reset(): void {
        this.housesInformations = new HouseInformationsForGuild();
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
        this.serializeAs_GuildHouseUpdateInformationMessage(param1);
    }

    public serializeAs_GuildHouseUpdateInformationMessage(param1: ICustomDataOutput): void {
        this.housesInformations.serializeAs_HouseInformationsForGuild(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildHouseUpdateInformationMessage(param1);
    }

    public deserializeAs_GuildHouseUpdateInformationMessage(param1: ICustomDataInput): void {
        this.housesInformations = new HouseInformationsForGuild();
        this.housesInformations.deserialize(param1);

    }
}

export = GuildHouseUpdateInformationMessage;
