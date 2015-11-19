/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildFactSheetInformations = require('./guild-fact-sheet-informations');
import GuildEmblem = require('../guild/guild-emblem');

class GuildInsiderFactSheetInformations extends GuildFactSheetInformations implements INetworkType {
    public static ID: number = 423;

    leaderName: string;
    nbConnectedMembers: number;
    nbTaxCollectors: number;
    lastActivity: number;
    enabled: boolean;

    constructor() {
        this.leaderName = '';
        this.nbConnectedMembers = 0;
        this.nbTaxCollectors = 0;
        this.lastActivity = 0;
        this.enabled = false;
        super();
    }

    public getTypeId(): number {
        return GuildInsiderFactSheetInformations.ID;
    }

    public reset(): void {
        this.leaderName = '';
        this.nbConnectedMembers = 0;
        this.nbTaxCollectors = 0;
        this.lastActivity = 0;
        this.enabled = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildInsiderFactSheetInformations(param1);
    }

    public serializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GuildFactSheetInformations(param1);
        param1.writeUTF(this.leaderName);
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element nbConnectedMembers.');
        }
        param1.writeVarShort(this.nbConnectedMembers);
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element nbTaxCollectors.');
        }
        param1.writeByte(this.nbTaxCollectors);
        if (this.lastActivity < 0) {
            throw new Error('Forbidden value (' + this.lastActivity + ') on element lastActivity.');
        }
        param1.writeInt(this.lastActivity);
        param1.writeBoolean(this.enabled);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInsiderFactSheetInformations(param1);
    }

    public deserializeAs_GuildInsiderFactSheetInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.leaderName = param1.readUTF();
        this.nbConnectedMembers = param1.readVarUhShort();
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element of GuildInsiderFactSheetInformations.nbConnectedMembers.');
        }
        this.nbTaxCollectors = param1.readByte();
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element of GuildInsiderFactSheetInformations.nbTaxCollectors.');
        }
        this.lastActivity = param1.readInt();
        if (this.lastActivity < 0) {
            throw new Error('Forbidden value (' + this.lastActivity + ') on element of GuildInsiderFactSheetInformations.lastActivity.');
        }
        this.enabled = param1.readBoolean();

    }
}

export = GuildInsiderFactSheetInformations;
