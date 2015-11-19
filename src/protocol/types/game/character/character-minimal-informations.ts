/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AbstractCharacterInformation = require('./abstract-character-information');

class CharacterMinimalInformations extends AbstractCharacterInformation implements INetworkType {
    public static ID: number = 110;

    level: number;
    name: string;

    constructor() {
        this.level = 0;
        this.name = '';
        super();
    }

    public getTypeId(): number {
        return CharacterMinimalInformations.ID;
    }

    public reset(): void {
        this.level = 0;
        this.name = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterMinimalInformations(param1);
    }

    public serializeAs_CharacterMinimalInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractCharacterInformation(param1);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeUTF(this.name);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterMinimalInformations(param1);
    }

    public deserializeAs_CharacterMinimalInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of CharacterMinimalInformations.level.');
        }
        this.name = param1.readUTF();

    }
}

export = CharacterMinimalInformations;
