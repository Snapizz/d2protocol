/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ActorAlignmentInformations = require('./actor-alignment-informations');

class ActorExtendedAlignmentInformations extends ActorAlignmentInformations implements INetworkType {
    public static ID: number = 202;

    honor: number;
    honorGradeFloor: number;
    honorNextGradeFloor: number;
    aggressable: number;

    constructor() {
        this.honor = 0;
        this.honorGradeFloor = 0;
        this.honorNextGradeFloor = 0;
        this.aggressable = 0;
        super();
    }

    public getTypeId(): number {
        return ActorExtendedAlignmentInformations.ID;
    }

    public reset(): void {
        this.honor = 0;
        this.honorGradeFloor = 0;
        this.honorNextGradeFloor = 0;
        this.aggressable = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ActorExtendedAlignmentInformations(param1);
    }

    public serializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataOutput): void {
        super.serializeAs_ActorAlignmentInformations(param1);
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element honor.');
        }
        param1.writeVarShort(this.honor);
        if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorGradeFloor + ') on element honorGradeFloor.');
        }
        param1.writeVarShort(this.honorGradeFloor);
        if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorNextGradeFloor + ') on element honorNextGradeFloor.');
        }
        param1.writeVarShort(this.honorNextGradeFloor);
        param1.writeByte(this.aggressable);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ActorExtendedAlignmentInformations(param1);
    }

    public deserializeAs_ActorExtendedAlignmentInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.honor = param1.readVarUhShort();
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element of ActorExtendedAlignmentInformations.honor.');
        }
        this.honorGradeFloor = param1.readVarUhShort();
        if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorGradeFloor + ') on element of ActorExtendedAlignmentInformations.honorGradeFloor.');
        }
        this.honorNextGradeFloor = param1.readVarUhShort();
        if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
            throw new Error('Forbidden value (' + this.honorNextGradeFloor + ') on element of ActorExtendedAlignmentInformations.honorNextGradeFloor.');
        }
        this.aggressable = param1.readByte();
        if (this.aggressable < 0) {
            throw new Error('Forbidden value (' + this.aggressable + ') on element of ActorExtendedAlignmentInformations.aggressable.');
        }

    }
}

export = ActorExtendedAlignmentInformations;
