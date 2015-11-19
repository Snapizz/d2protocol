/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class ContentPart implements INetworkType {
    public static ID: number = 350;

    id: string;
    state: number;

    constructor() {
        this.id = '';
        this.state = 0;
    }

    public getTypeId(): number {
        return ContentPart.ID;
    }

    public reset(): void {
        this.id = '';
        this.state = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ContentPart(param1);
    }

    public serializeAs_ContentPart(param1: ICustomDataOutput): void {
        param1.writeUTF(this.id);
        param1.writeByte(this.state);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ContentPart(param1);
    }

    public deserializeAs_ContentPart(param1: ICustomDataInput): void {
        this.id = param1.readUTF();
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of ContentPart.state.');
        }

    }
}

export = ContentPart;
