/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PaddockInformationsForSell implements INetworkType {
    public static ID: number = 222;

    guildOwner: string;
    worldX: number;
    worldY: number;
    subAreaId: number;
    nbMount: number;
    nbObject: number;
    price: number;

    constructor() {
        this.guildOwner = '';
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.nbMount = 0;
        this.nbObject = 0;
        this.price = 0;
    }

    public getTypeId(): number {
        return PaddockInformationsForSell.ID;
    }

    public reset(): void {
        this.guildOwner = '';
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.nbMount = 0;
        this.nbObject = 0;
        this.price = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PaddockInformationsForSell(param1);
    }

    public serializeAs_PaddockInformationsForSell(param1: ICustomDataOutput): void {
        param1.writeUTF(this.guildOwner);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.nbMount);
        param1.writeByte(this.nbObject);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockInformationsForSell(param1);
    }

    public deserializeAs_PaddockInformationsForSell(param1: ICustomDataInput): void {
        this.guildOwner = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PaddockInformationsForSell.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PaddockInformationsForSell.worldY.');
        }
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PaddockInformationsForSell.subAreaId.');
        }
        this.nbMount = param1.readByte();
        this.nbObject = param1.readByte();
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PaddockInformationsForSell.price.');
        }

    }
}

export = PaddockInformationsForSell;
