/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildEmblem implements INetworkType {
    public static ID: number = 87;

    symbolShape: number;
    symbolColor: number;
    backgroundShape: number;
    backgroundColor: number;

    constructor() {
        this.symbolShape = 0;
        this.symbolColor = 0;
        this.backgroundShape = 0;
        this.backgroundColor = 0;
    }

    public getTypeId(): number {
        return GuildEmblem.ID;
    }

    public reset(): void {
        this.symbolShape = 0;
        this.symbolColor = 0;
        this.backgroundShape = 0;
        this.backgroundColor = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildEmblem(param1);
    }

    public serializeAs_GuildEmblem(param1: ICustomDataOutput): void {
        if (this.symbolShape < 0) {
            throw new Error('Forbidden value (' + this.symbolShape + ') on element symbolShape.');
        }
        param1.writeVarShort(this.symbolShape);
        param1.writeInt(this.symbolColor);
        if (this.backgroundShape < 0) {
            throw new Error('Forbidden value (' + this.backgroundShape + ') on element backgroundShape.');
        }
        param1.writeByte(this.backgroundShape);
        param1.writeInt(this.backgroundColor);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildEmblem(param1);
    }

    public deserializeAs_GuildEmblem(param1: ICustomDataInput): void {
        this.symbolShape = param1.readVarUhShort();
        if (this.symbolShape < 0) {
            throw new Error('Forbidden value (' + this.symbolShape + ') on element of GuildEmblem.symbolShape.');
        }
        this.symbolColor = param1.readInt();
        this.backgroundShape = param1.readByte();
        if (this.backgroundShape < 0) {
            throw new Error('Forbidden value (' + this.backgroundShape + ') on element of GuildEmblem.backgroundShape.');
        }
        this.backgroundColor = param1.readInt();

    }
}

export = GuildEmblem;
