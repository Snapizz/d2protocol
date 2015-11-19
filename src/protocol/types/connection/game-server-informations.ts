/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');

class GameServerInformations implements INetworkType {
    public static ID: number = 25;

    id: number;
    type: number;
    status: number;
    completion: number;
    isSelectable: boolean;
    charactersCount: number;
    charactersSlots: number;
    date: number;

    constructor() {
        this.id = 0;
        this.type = -1;
        this.status = 1;
        this.completion = 0;
        this.isSelectable = false;
        this.charactersCount = 0;
        this.charactersSlots = 0;
        this.date = 0;
    }

    public getTypeId(): number {
        return GameServerInformations.ID;
    }

    public reset(): void {
        this.id = 0;
        this.type = -1;
        this.status = 1;
        this.completion = 0;
        this.isSelectable = false;
        this.charactersCount = 0;
        this.charactersSlots = 0;
        this.date = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameServerInformations(param1);
    }

    public serializeAs_GameServerInformations(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        param1.writeByte(this.type);
        param1.writeByte(this.status);
        param1.writeByte(this.completion);
        param1.writeBoolean(this.isSelectable);
        if (this.charactersCount < 0) {
            throw new Error('Forbidden value (' + this.charactersCount + ') on element charactersCount.');
        }
        param1.writeByte(this.charactersCount);
        if (this.charactersSlots < 0) {
            throw new Error('Forbidden value (' + this.charactersSlots + ') on element charactersSlots.');
        }
        param1.writeByte(this.charactersSlots);
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element date.');
        }
        param1.writeDouble(this.date);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameServerInformations(param1);
    }

    public deserializeAs_GameServerInformations(param1: ICustomDataInput): void {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of GameServerInformations.id.');
        }
        this.type = param1.readByte();
        this.status = param1.readByte();
        if (this.status < 0) {
            throw new Error('Forbidden value (' + this.status + ') on element of GameServerInformations.status.');
        }
        this.completion = param1.readByte();
        if (this.completion < 0) {
            throw new Error('Forbidden value (' + this.completion + ') on element of GameServerInformations.completion.');
        }
        this.isSelectable = param1.readBoolean();
        this.charactersCount = param1.readByte();
        if (this.charactersCount < 0) {
            throw new Error('Forbidden value (' + this.charactersCount + ') on element of GameServerInformations.charactersCount.');
        }
        this.charactersSlots = param1.readByte();
        if (this.charactersSlots < 0) {
            throw new Error('Forbidden value (' + this.charactersSlots + ') on element of GameServerInformations.charactersSlots.');
        }
        this.date = param1.readDouble();
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element of GameServerInformations.date.');
        }

    }
}

export = GameServerInformations;
