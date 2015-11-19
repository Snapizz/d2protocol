/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import PlayableBreedEnum = require('../../../../enums/playable-breed-enum');

class CharacterCreationRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 160;

    name: string;
    breed: number;
    sex: boolean;
    colors: number[];
    cosmeticId: number;

    constructor() {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.colors = [];
        this.cosmeticId = 0;
        super();
    }

    public getMessageId(): number {
        return CharacterCreationRequestMessage.ID;
    }

    public reset(): void {
        this.name = '';
        this.breed = 0;
        this.sex = false;
        this.colors = [];
        this.cosmeticId = 0;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterCreationRequestMessage(param1);
    }

    public serializeAs_CharacterCreationRequestMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.name);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        var _loc2_: number = 0;
        while (_loc2_ < 5) {
            param1.writeInt(this.colors[_loc2_]);
            _loc2_++;
        }
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element cosmeticId.');
        }
        param1.writeVarShort(this.cosmeticId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterCreationRequestMessage(param1);
    }

    public deserializeAs_CharacterCreationRequestMessage(param1: ICustomDataInput): void {
        this.name = param1.readUTF();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error('Forbidden value (' + this.breed + ') on element of CharacterCreationRequestMessage.breed.');
        }
        this.sex = param1.readBoolean();
        var _loc2_: number = 0;
        while (_loc2_ < 5) {
        this.colors[_loc2_] = param1.readInt();
            _loc2_++;
        }
        this.cosmeticId = param1.readVarUhShort();
        if (this.cosmeticId < 0) {
            throw new Error('Forbidden value (' + this.cosmeticId + ') on element of CharacterCreationRequestMessage.cosmeticId.');
        }

    }
}

export = CharacterCreationRequestMessage;
