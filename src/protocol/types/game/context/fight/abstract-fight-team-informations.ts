/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class AbstractFightTeamInformations implements INetworkType {
    public static ID: number = 116;

    teamId: number;
    leaderId: number;
    teamSide: number;
    teamTypeId: number;
    nbWaves: number;

    constructor() {
        this.teamId = 2;
        this.leaderId = 0;
        this.teamSide = 0;
        this.teamTypeId = 0;
        this.nbWaves = 0;
    }

    public getTypeId(): number {
        return AbstractFightTeamInformations.ID;
    }

    public reset(): void {
        this.teamId = 2;
        this.leaderId = 0;
        this.teamSide = 0;
        this.teamTypeId = 0;
        this.nbWaves = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AbstractFightTeamInformations(param1);
    }

    public serializeAs_AbstractFightTeamInformations(param1: ICustomDataOutput): void {
        param1.writeByte(this.teamId);
        param1.writeInt(this.leaderId);
        param1.writeByte(this.teamSide);
        param1.writeByte(this.teamTypeId);
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element nbWaves.');
        }
        param1.writeByte(this.nbWaves);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AbstractFightTeamInformations(param1);
    }

    public deserializeAs_AbstractFightTeamInformations(param1: ICustomDataInput): void {
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of AbstractFightTeamInformations.teamId.');
        }
        this.leaderId = param1.readInt();
        this.teamSide = param1.readByte();
        this.teamTypeId = param1.readByte();
        if (this.teamTypeId < 0) {
            throw new Error('Forbidden value (' + this.teamTypeId + ') on element of AbstractFightTeamInformations.teamTypeId.');
        }
        this.nbWaves = param1.readByte();
        if (this.nbWaves < 0) {
            throw new Error('Forbidden value (' + this.nbWaves + ') on element of AbstractFightTeamInformations.nbWaves.');
        }

    }
}

export = AbstractFightTeamInformations;
