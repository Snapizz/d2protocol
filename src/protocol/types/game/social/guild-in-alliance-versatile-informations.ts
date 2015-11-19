/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildVersatileInformations = require('./guild-versatile-informations');

class GuildInAllianceVersatileInformations extends GuildVersatileInformations implements INetworkType {
    public static ID: number = 437;

    allianceId: number;

    constructor() {
        this.allianceId = 0;
        super();
    }

    public getTypeId(): number {
        return GuildInAllianceVersatileInformations.ID;
    }

    public reset(): void {
        this.allianceId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildInAllianceVersatileInformations(param1);
    }

    public serializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GuildVersatileInformations(param1);
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInAllianceVersatileInformations(param1);
    }

    public deserializeAs_GuildInAllianceVersatileInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of GuildInAllianceVersatileInformations.allianceId.');
        }

    }
}

export = GuildInAllianceVersatileInformations;
