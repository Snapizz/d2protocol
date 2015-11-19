/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AllianceInformations = require('./alliance-informations');
import HumanOption = require('./human-option');

class HumanOptionAlliance extends HumanOption implements INetworkType {
    public static ID: number = 425;

    allianceInformations: AllianceInformations;
    aggressable: number;

    constructor() {
        this.allianceInformations = new AllianceInformations();
        this.aggressable = 0;
        super();
    }

    public getTypeId(): number {
        return HumanOptionAlliance.ID;
    }

    public reset(): void {
        this.allianceInformations = new AllianceInformations();
        this.aggressable = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOptionAlliance(param1);
    }

    public serializeAs_HumanOptionAlliance(param1: ICustomDataOutput): void {
        super.serializeAs_HumanOption(param1);
        this.allianceInformations.serializeAs_AllianceInformations(param1);
        param1.writeByte(this.aggressable);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOptionAlliance(param1);
    }

    public deserializeAs_HumanOptionAlliance(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.allianceInformations = new AllianceInformations();
        this.allianceInformations.deserialize(param1);
        this.aggressable = param1.readByte();
        if (this.aggressable < 0) {
            throw new Error('Forbidden value (' + this.aggressable + ') on element of HumanOptionAlliance.aggressable.');
        }

    }
}

export = HumanOptionAlliance;
