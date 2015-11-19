/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AccountCapabilitiesMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6216;

    accountId: number;
    tutorialAvailable: boolean;
    breedsVisible: number;
    breedsAvailable: number;
    status: number;
    canCreateNewCharacter: boolean;

    constructor() {
        this.accountId = 0;
        this.tutorialAvailable = false;
        this.breedsVisible = 0;
        this.breedsAvailable = 0;
        this.status = -1;
        this.canCreateNewCharacter = false;
        super();
    }

    public getMessageId(): number {
        return AccountCapabilitiesMessage.ID;
    }

    public reset(): void {
        this.accountId = 0;
        this.tutorialAvailable = false;
        this.breedsVisible = 0;
        this.breedsAvailable = 0;
        this.status = -1;
        this.canCreateNewCharacter = false;
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
        this.serializeAs_AccountCapabilitiesMessage(param1);
    }

    public serializeAs_AccountCapabilitiesMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.tutorialAvailable);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canCreateNewCharacter);
        param1.writeByte(_loc2_);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        if (this.breedsVisible < 0 || this.breedsVisible > 65535) {
            throw new Error('Forbidden value (' + this.breedsVisible + ') on element breedsVisible.');
        }
        param1.writeShort(this.breedsVisible);
        if (this.breedsAvailable < 0 || this.breedsAvailable > 65535) {
            throw new Error('Forbidden value (' + this.breedsAvailable + ') on element breedsAvailable.');
        }
        param1.writeShort(this.breedsAvailable);
        param1.writeByte(this.status);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AccountCapabilitiesMessage(param1);
    }

    public deserializeAs_AccountCapabilitiesMessage(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.tutorialAvailable = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.canCreateNewCharacter = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of AccountCapabilitiesMessage.accountId.');
        }
        this.breedsVisible = param1.readUnsignedShort();
        if (this.breedsVisible < 0 || this.breedsVisible > 65535) {
            throw new Error('Forbidden value (' + this.breedsVisible + ') on element of AccountCapabilitiesMessage.breedsVisible.');
        }
        this.breedsAvailable = param1.readUnsignedShort();
        if (this.breedsAvailable < 0 || this.breedsAvailable > 65535) {
            throw new Error('Forbidden value (' + this.breedsAvailable + ') on element of AccountCapabilitiesMessage.breedsAvailable.');
        }
        this.status = param1.readByte();

    }
}

export = AccountCapabilitiesMessage;
