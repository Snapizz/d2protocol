/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightFighterLightInformations implements INetworkType {
    public static ID: number = 413;

    id: number;
    wave: number;
    level: number;
    breed: number;
    sex: boolean;
    alive: boolean;

    constructor() {
        this.id = 0;
        this.wave = 0;
        this.level = 0;
        this.breed = 0;
        this.sex = false;
        this.alive = false;
    }

    public getTypeId(): number {
        return GameFightFighterLightInformations.ID;
    }

    public reset(): void {
        this.id = 0;
        this.wave = 0;
        this.level = 0;
        this.breed = 0;
        this.sex = false;
        this.alive = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightFighterLightInformations(param1);
    }

    public serializeAs_GameFightFighterLightInformations(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.sex);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.alive);
        param1.writeByte(_loc2_);
        param1.writeInt(this.id);
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element wave.');
        }
        param1.writeByte(this.wave);
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeVarShort(this.level);
        param1.writeByte(this.breed);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightFighterLightInformations(param1);
    }

    public deserializeAs_GameFightFighterLightInformations(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.sex = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.alive = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.id = param1.readInt();
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element of GameFightFighterLightInformations.wave.');
        }
        this.level = param1.readVarUhShort();
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightFighterLightInformations.level.');
        }
        this.breed = param1.readByte();

    }
}

export = GameFightFighterLightInformations;
