/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import CharacterMinimalGuildInformations = require('./character-minimal-guild-informations');
import BasicAllianceInformations = require('../context/roleplay/basic-alliance-informations');
import EntityLook = require('../look/entity-look');
import BasicGuildInformations = require('../context/roleplay/basic-guild-informations');

class CharacterMinimalAllianceInformations extends CharacterMinimalGuildInformations implements INetworkType {
    public static ID: number = 444;

    alliance: BasicAllianceInformations;

    constructor() {
        this.alliance = new BasicAllianceInformations();
        super();
    }

    public getTypeId(): number {
        return CharacterMinimalAllianceInformations.ID;
    }

    public reset(): void {
        this.alliance = new BasicAllianceInformations();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterMinimalAllianceInformations(param1);
    }

    public serializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterMinimalGuildInformations(param1);
        this.alliance.serializeAs_BasicAllianceInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterMinimalAllianceInformations(param1);
    }

    public deserializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.alliance = new BasicAllianceInformations();
        this.alliance.deserialize(param1);

    }
}

export = CharacterMinimalAllianceInformations;
