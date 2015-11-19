/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class KrosmasterFigure implements INetworkType {
    public static ID: number = 397;

    uid: string;
    figure: number;
    pedestal: number;
    bound: boolean;

    constructor() {
        this.uid = '';
        this.figure = 0;
        this.pedestal = 0;
        this.bound = false;
    }

    public getTypeId(): number {
        return KrosmasterFigure.ID;
    }

    public reset(): void {
        this.uid = '';
        this.figure = 0;
        this.pedestal = 0;
        this.bound = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_KrosmasterFigure(param1);
    }

    public serializeAs_KrosmasterFigure(param1: ICustomDataOutput): void {
        param1.writeUTF(this.uid);
        if (this.figure < 0) {
            throw new Error('Forbidden value (' + this.figure + ') on element figure.');
        }
        param1.writeVarShort(this.figure);
        if (this.pedestal < 0) {
            throw new Error('Forbidden value (' + this.pedestal + ') on element pedestal.');
        }
        param1.writeVarShort(this.pedestal);
        param1.writeBoolean(this.bound);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_KrosmasterFigure(param1);
    }

    public deserializeAs_KrosmasterFigure(param1: ICustomDataInput): void {
        this.uid = param1.readUTF();
        this.figure = param1.readVarUhShort();
        if (this.figure < 0) {
            throw new Error('Forbidden value (' + this.figure + ') on element of KrosmasterFigure.figure.');
        }
        this.pedestal = param1.readVarUhShort();
        if (this.pedestal < 0) {
            throw new Error('Forbidden value (' + this.pedestal + ') on element of KrosmasterFigure.pedestal.');
        }
        this.bound = param1.readBoolean();

    }
}

export = KrosmasterFigure;
