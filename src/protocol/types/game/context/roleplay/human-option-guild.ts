/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GuildInformations = require('./guild-informations');
import HumanOption = require('./human-option');

class HumanOptionGuild extends HumanOption implements INetworkType {
    public static ID: number = 409;

    guildInformations: GuildInformations;

    constructor() {
        this.guildInformations = new GuildInformations();
        super();
    }

    public getTypeId(): number {
        return HumanOptionGuild.ID;
    }

    public reset(): void {
        this.guildInformations = new GuildInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOptionGuild(param1);
    }

    public serializeAs_HumanOptionGuild(param1: ICustomDataOutput): void {
        super.serializeAs_HumanOption(param1);
        this.guildInformations.serializeAs_GuildInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOptionGuild(param1);
    }

    public deserializeAs_HumanOptionGuild(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guildInformations = new GuildInformations();
        this.guildInformations.deserialize(param1);

    }
}

export = HumanOptionGuild;
