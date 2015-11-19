/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import BasicNamedAllianceInformations = require('./basic-named-alliance-informations');
import GuildEmblem = require('../../guild/guild-emblem');

class AllianceInformations extends BasicNamedAllianceInformations implements INetworkType {
    public static ID: number = 417;

    allianceEmblem: GuildEmblem;

    constructor() {
        this.allianceEmblem = new GuildEmblem();
        super();
    }

    public getTypeId(): number {
        return AllianceInformations.ID;
    }

    public reset(): void {
        this.allianceEmblem = new GuildEmblem();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AllianceInformations(param1);
    }

    public serializeAs_AllianceInformations(param1: ICustomDataOutput): void {
        super.serializeAs_BasicNamedAllianceInformations(param1);
        this.allianceEmblem.serializeAs_GuildEmblem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceInformations(param1);
    }

    public deserializeAs_AllianceInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceEmblem = new GuildEmblem();
        this.allianceEmblem.deserialize(param1);

    }
}

export = AllianceInformations;
