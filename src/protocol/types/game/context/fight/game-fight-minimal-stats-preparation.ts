/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightMinimalStats = require('./game-fight-minimal-stats');

class GameFightMinimalStatsPreparation extends GameFightMinimalStats implements INetworkType {
    public static ID: number = 360;

    initiative: number;

    constructor() {
        this.initiative = 0;
        super();
    }

    public getTypeId(): number {
        return GameFightMinimalStatsPreparation.ID;
    }

    public reset(): void {
        this.initiative = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightMinimalStatsPreparation(param1);
    }

    public serializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightMinimalStats(param1);
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
        }
        param1.writeVarInt(this.initiative);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightMinimalStatsPreparation(param1);
    }

    public deserializeAs_GameFightMinimalStatsPreparation(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.initiative = param1.readVarUhInt();
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element of GameFightMinimalStatsPreparation.initiative.');
        }

    }
}

export = GameFightMinimalStatsPreparation;
