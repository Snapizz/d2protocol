/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');
import PartyCompanionBaseInformations = require('./party-companion-base-informations');
import EntityLook = require('../../../../look/entity-look');

class PartyCompanionMemberInformations extends PartyCompanionBaseInformations implements INetworkType {
    public static ID: number = 452;

    initiative: number;
    lifePoints: number;
    maxLifePoints: number;
    prospecting: number;
    regenRate: number;

    constructor() {
        this.initiative = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
        super();
    }

    public getTypeId(): number {
        return PartyCompanionMemberInformations.ID;
    }

    public reset(): void {
        this.initiative = 0;
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyCompanionMemberInformations(param1);
    }

    public serializeAs_PartyCompanionMemberInformations(param1: ICustomDataOutput): void {
        super.serializeAs_PartyCompanionBaseInformations(param1);
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
        }
        param1.writeVarShort(this.initiative);
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
        }
        param1.writeVarShort(this.prospecting);
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
        }
        param1.writeByte(this.regenRate);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyCompanionMemberInformations(param1);
    }

    public deserializeAs_PartyCompanionMemberInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.initiative = param1.readVarUhShort();
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element of PartyCompanionMemberInformations.initiative.');
        }
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of PartyCompanionMemberInformations.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of PartyCompanionMemberInformations.maxLifePoints.');
        }
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element of PartyCompanionMemberInformations.prospecting.');
        }
        this.regenRate = param1.readUnsignedByte();
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element of PartyCompanionMemberInformations.regenRate.');
        }

    }
}

export = PartyCompanionMemberInformations;
