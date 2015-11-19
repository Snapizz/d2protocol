/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import PartyMemberInformations = require('./party-member-informations');
import EntityLook = require('../../../look/entity-look');
import PlayerStatus = require('../../../character/status/player-status');
import PartyCompanionMemberInformations = require('./companion/party-companion-member-informations');

class PartyMemberArenaInformations extends PartyMemberInformations implements INetworkType {
    public static ID: number = 391;

    rank: number;

    constructor() {
        this.rank = 0;
        super();
    }

    public getTypeId(): number {
        return PartyMemberArenaInformations.ID;
    }

    public reset(): void {
        this.rank = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyMemberArenaInformations(param1);
    }

    public serializeAs_PartyMemberArenaInformations(param1: ICustomDataOutput): void {
        super.serializeAs_PartyMemberInformations(param1);
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element rank.');
        }
        param1.writeVarShort(this.rank);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyMemberArenaInformations(param1);
    }

    public deserializeAs_PartyMemberArenaInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.rank = param1.readVarUhShort();
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element of PartyMemberArenaInformations.rank.');
        }

    }
}

export = PartyMemberArenaInformations;
