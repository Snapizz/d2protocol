/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../boolean-byte-wrapper');
import VersionExtended = require('../../types/version/version-extended');

class IdentificationMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 4;

    version: VersionExtended;
    lang: string;
    credentials: number[];
    serverId: number;
    autoconnect: boolean;
    useCertificate: boolean;
    useLoginToken: boolean;
    sessionOptionalSalt: number;
    failedAttempts: number[];

    constructor() {
        this.version = new VersionExtended();
        this.lang = '';
        this.credentials = [];
        this.serverId = 0;
        this.autoconnect = false;
        this.useCertificate = false;
        this.useLoginToken = false;
        this.sessionOptionalSalt = 0;
        this.failedAttempts = [];
        super();
    }

    public getMessageId(): number {
        return IdentificationMessage.ID;
    }

    public reset(): void {
        this.version = new VersionExtended();
        this.lang = '';
        this.credentials = [];
        this.serverId = 0;
        this.autoconnect = false;
        this.useCertificate = false;
        this.useLoginToken = false;
        this.sessionOptionalSalt = 0;
        this.failedAttempts = [];
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
        this.serializeAs_IdentificationMessage(param1);
    }

    public serializeAs_IdentificationMessage(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.autoconnect);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.useCertificate);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.useLoginToken);
        param1.writeByte(_loc2_);
        this.version.serializeAs_VersionExtended(param1);
        param1.writeUTF(this.lang);
        param1.writeVarInt(this.credentials.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.credentials.length) {
            param1.writeByte(this.credentials[_loc3_]);
            _loc3_++;
        }
        param1.writeShort(this.serverId);
        if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.sessionOptionalSalt + ') on element sessionOptionalSalt.');
        }
        param1.writeVarLong(this.sessionOptionalSalt);
        param1.writeShort(this.failedAttempts.length);
        var _loc4_: number = 0;
        while (_loc4_ < this.failedAttempts.length) {
            if (this.failedAttempts[_loc4_] < 0) {
                throw new Error('Forbidden value (' + this.failedAttempts[_loc4_] + ') on element 9 (starting at 1) of failedAttempts.');
            }
            param1.writeVarShort(this.failedAttempts[_loc4_]);
            _loc4_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdentificationMessage(param1);
    }

    public deserializeAs_IdentificationMessage(param1: ICustomDataInput): void {
        var _loc7_: any = 0;
        var _loc8_: number = 0;
        var _loc2_: number = param1.readByte();
        this.autoconnect = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.useCertificate = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.useLoginToken = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.version = new VersionExtended();
        this.version.deserialize(param1);
        this.lang = param1.readUTF();
        var _loc3_: number = param1.readVarInt();
        var _loc4_: number = 0;
        while (_loc4_ < _loc3_) {
        _loc7_ = param1.readByte();
            this.credentials.push(_loc7_);
            _loc4_++;
        }
        this.serverId = param1.readShort();
        this.sessionOptionalSalt = param1.readVarLong();
        if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.sessionOptionalSalt + ') on element of IdentificationMessage.sessionOptionalSalt.');
        }
        var _loc5_: number = param1.readUnsignedShort();
        var _loc6_: number = 0;
        while (_loc6_ < _loc5_) {
        _loc8_ = param1.readVarUhShort();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of failedAttempts.');
            }
            this.failedAttempts.push(_loc8_);
            _loc6_++;
        }

    }
}

export = IdentificationMessage;
