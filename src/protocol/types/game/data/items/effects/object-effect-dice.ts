/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffect = require('./object-effect');

class ObjectEffectDice extends ObjectEffect implements INetworkType {
    public static ID: number = 73;

    diceNum: number;
    diceSide: number;
    diceConst: number;

    constructor() {
        this.diceNum = 0;
        this.diceSide = 0;
        this.diceConst = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectDice.ID;
    }

    public reset(): void {
        this.diceNum = 0;
        this.diceSide = 0;
        this.diceConst = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectDice(param1);
    }

    public serializeAs_ObjectEffectDice(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffect(param1);
        if (this.diceNum < 0) {
            throw new Error('Forbidden value (' + this.diceNum + ') on element diceNum.');
        }
        param1.writeVarShort(this.diceNum);
        if (this.diceSide < 0) {
            throw new Error('Forbidden value (' + this.diceSide + ') on element diceSide.');
        }
        param1.writeVarShort(this.diceSide);
        if (this.diceConst < 0) {
            throw new Error('Forbidden value (' + this.diceConst + ') on element diceConst.');
        }
        param1.writeVarShort(this.diceConst);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectDice(param1);
    }

    public deserializeAs_ObjectEffectDice(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.diceNum = param1.readVarUhShort();
        if (this.diceNum < 0) {
            throw new Error('Forbidden value (' + this.diceNum + ') on element of ObjectEffectDice.diceNum.');
        }
        this.diceSide = param1.readVarUhShort();
        if (this.diceSide < 0) {
            throw new Error('Forbidden value (' + this.diceSide + ') on element of ObjectEffectDice.diceSide.');
        }
        this.diceConst = param1.readVarUhShort();
        if (this.diceConst < 0) {
            throw new Error('Forbidden value (' + this.diceConst + ') on element of ObjectEffectDice.diceConst.');
        }

    }
}

export = ObjectEffectDice;
