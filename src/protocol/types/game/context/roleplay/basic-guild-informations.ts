/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractSocialGroupInfos = require('../../social/abstract-social-group-infos');

class BasicGuildInformations extends AbstractSocialGroupInfos implements INetworkType {
    public static ID: number = 365;

    guildId: number;
    guildName: string;

    constructor() {
        this.guildId = 0;
        this.guildName = '';
        super();
    }

    public getTypeId(): number {
        return BasicGuildInformations.ID;
    }

    public reset(): void {
        this.guildId = 0;
        this.guildName = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_BasicGuildInformations(param1);
    }

    public serializeAs_BasicGuildInformations(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractSocialGroupInfos(param1);
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        param1.writeUTF(this.guildName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicGuildInformations(param1);
    }

    public deserializeAs_BasicGuildInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of BasicGuildInformations.guildId.');
        }
        this.guildName = param1.readUTF();

    }
}

export = BasicGuildInformations;
