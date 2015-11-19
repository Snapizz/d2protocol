/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');

class FightTriggeredEffect extends AbstractFightDispellableEffect implements INetworkType {
    public static ID: number = 210;

    param1: number;
    param2: number;
    param3: number;
    delay: number;

    constructor() {
        this.param1 = 0;
        this.param2 = 0;
        this.param3 = 0;
        this.delay = 0;
        super();
    }

    public getTypeId(): number {
        return FightTriggeredEffect.ID;
    }

    public reset(): void {
        this.param1 = 0;
        this.param2 = 0;
        this.param3 = 0;
        this.delay = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTriggeredEffect(param1);
    }

    public serializeAs_FightTriggeredEffect(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractFightDispellableEffect(param1);
        param1.writeInt(this.param1);
        param1.writeInt(this.param2);
        param1.writeInt(this.param3);
        param1.writeShort(this.delay);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTriggeredEffect(param1);
    }

    public deserializeAs_FightTriggeredEffect(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.param1 = param1.readInt();
        this.param2 = param1.readInt();
        this.param3 = param1.readInt();
        this.delay = param1.readShort();

    }
}

export = FightTriggeredEffect;
