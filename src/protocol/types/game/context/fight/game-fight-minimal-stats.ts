/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightMinimalStats implements INetworkType {
    public static ID: number = 31;

    lifePoints: number;
    maxLifePoints: number;
    baseMaxLifePoints: number;
    permanentDamagePercent: number;
    shieldPoints: number;
    actionPoints: number;
    maxActionPoints: number;
    movementPoints: number;
    maxMovementPoints: number;
    summoner: number;
    summoned: boolean;
    neutralElementResistPercent: number;
    earthElementResistPercent: number;
    waterElementResistPercent: number;
    airElementResistPercent: number;
    fireElementResistPercent: number;
    neutralElementReduction: number;
    earthElementReduction: number;
    waterElementReduction: number;
    airElementReduction: number;
    fireElementReduction: number;
    criticalDamageFixedResist: number;
    pushDamageFixedResist: number;
    pvpNeutralElementResistPercent: number;
    pvpEarthElementResistPercent: number;
    pvpWaterElementResistPercent: number;
    pvpAirElementResistPercent: number;
    pvpFireElementResistPercent: number;
    pvpNeutralElementReduction: number;
    pvpEarthElementReduction: number;
    pvpWaterElementReduction: number;
    pvpAirElementReduction: number;
    pvpFireElementReduction: number;
    dodgePALostProbability: number;
    dodgePMLostProbability: number;
    tackleBlock: number;
    tackleEvade: number;
    invisibilityState: number;

    constructor() {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.baseMaxLifePoints = 0;
        this.permanentDamagePercent = 0;
        this.shieldPoints = 0;
        this.actionPoints = 0;
        this.maxActionPoints = 0;
        this.movementPoints = 0;
        this.maxMovementPoints = 0;
        this.summoner = 0;
        this.summoned = false;
        this.neutralElementResistPercent = 0;
        this.earthElementResistPercent = 0;
        this.waterElementResistPercent = 0;
        this.airElementResistPercent = 0;
        this.fireElementResistPercent = 0;
        this.neutralElementReduction = 0;
        this.earthElementReduction = 0;
        this.waterElementReduction = 0;
        this.airElementReduction = 0;
        this.fireElementReduction = 0;
        this.criticalDamageFixedResist = 0;
        this.pushDamageFixedResist = 0;
        this.pvpNeutralElementResistPercent = 0;
        this.pvpEarthElementResistPercent = 0;
        this.pvpWaterElementResistPercent = 0;
        this.pvpAirElementResistPercent = 0;
        this.pvpFireElementResistPercent = 0;
        this.pvpNeutralElementReduction = 0;
        this.pvpEarthElementReduction = 0;
        this.pvpWaterElementReduction = 0;
        this.pvpAirElementReduction = 0;
        this.pvpFireElementReduction = 0;
        this.dodgePALostProbability = 0;
        this.dodgePMLostProbability = 0;
        this.tackleBlock = 0;
        this.tackleEvade = 0;
        this.invisibilityState = 0;
    }

    public getTypeId(): number {
        return GameFightMinimalStats.ID;
    }

    public reset(): void {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.baseMaxLifePoints = 0;
        this.permanentDamagePercent = 0;
        this.shieldPoints = 0;
        this.actionPoints = 0;
        this.maxActionPoints = 0;
        this.movementPoints = 0;
        this.maxMovementPoints = 0;
        this.summoner = 0;
        this.summoned = false;
        this.neutralElementResistPercent = 0;
        this.earthElementResistPercent = 0;
        this.waterElementResistPercent = 0;
        this.airElementResistPercent = 0;
        this.fireElementResistPercent = 0;
        this.neutralElementReduction = 0;
        this.earthElementReduction = 0;
        this.waterElementReduction = 0;
        this.airElementReduction = 0;
        this.fireElementReduction = 0;
        this.criticalDamageFixedResist = 0;
        this.pushDamageFixedResist = 0;
        this.pvpNeutralElementResistPercent = 0;
        this.pvpEarthElementResistPercent = 0;
        this.pvpWaterElementResistPercent = 0;
        this.pvpAirElementResistPercent = 0;
        this.pvpFireElementResistPercent = 0;
        this.pvpNeutralElementReduction = 0;
        this.pvpEarthElementReduction = 0;
        this.pvpWaterElementReduction = 0;
        this.pvpAirElementReduction = 0;
        this.pvpFireElementReduction = 0;
        this.dodgePALostProbability = 0;
        this.dodgePMLostProbability = 0;
        this.tackleBlock = 0;
        this.tackleEvade = 0;
        this.invisibilityState = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightMinimalStats(param1);
    }

    public serializeAs_GameFightMinimalStats(param1: ICustomDataOutput): void {
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);
        if (this.baseMaxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.baseMaxLifePoints + ') on element baseMaxLifePoints.');
        }
        param1.writeVarInt(this.baseMaxLifePoints);
        if (this.permanentDamagePercent < 0) {
            throw new Error('Forbidden value (' + this.permanentDamagePercent + ') on element permanentDamagePercent.');
        }
        param1.writeVarInt(this.permanentDamagePercent);
        if (this.shieldPoints < 0) {
            throw new Error('Forbidden value (' + this.shieldPoints + ') on element shieldPoints.');
        }
        param1.writeVarInt(this.shieldPoints);
        param1.writeVarShort(this.actionPoints);
        param1.writeVarShort(this.maxActionPoints);
        param1.writeVarShort(this.movementPoints);
        param1.writeVarShort(this.maxMovementPoints);
        param1.writeInt(this.summoner);
        param1.writeBoolean(this.summoned);
        param1.writeVarShort(this.neutralElementResistPercent);
        param1.writeVarShort(this.earthElementResistPercent);
        param1.writeVarShort(this.waterElementResistPercent);
        param1.writeVarShort(this.airElementResistPercent);
        param1.writeVarShort(this.fireElementResistPercent);
        param1.writeVarShort(this.neutralElementReduction);
        param1.writeVarShort(this.earthElementReduction);
        param1.writeVarShort(this.waterElementReduction);
        param1.writeVarShort(this.airElementReduction);
        param1.writeVarShort(this.fireElementReduction);
        param1.writeVarShort(this.criticalDamageFixedResist);
        param1.writeVarShort(this.pushDamageFixedResist);
        param1.writeVarShort(this.pvpNeutralElementResistPercent);
        param1.writeVarShort(this.pvpEarthElementResistPercent);
        param1.writeVarShort(this.pvpWaterElementResistPercent);
        param1.writeVarShort(this.pvpAirElementResistPercent);
        param1.writeVarShort(this.pvpFireElementResistPercent);
        param1.writeVarShort(this.pvpNeutralElementReduction);
        param1.writeVarShort(this.pvpEarthElementReduction);
        param1.writeVarShort(this.pvpWaterElementReduction);
        param1.writeVarShort(this.pvpAirElementReduction);
        param1.writeVarShort(this.pvpFireElementReduction);
        if (this.dodgePALostProbability < 0) {
            throw new Error('Forbidden value (' + this.dodgePALostProbability + ') on element dodgePALostProbability.');
        }
        param1.writeVarShort(this.dodgePALostProbability);
        if (this.dodgePMLostProbability < 0) {
            throw new Error('Forbidden value (' + this.dodgePMLostProbability + ') on element dodgePMLostProbability.');
        }
        param1.writeVarShort(this.dodgePMLostProbability);
        param1.writeVarShort(this.tackleBlock);
        param1.writeVarShort(this.tackleEvade);
        param1.writeByte(this.invisibilityState);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightMinimalStats(param1);
    }

    public deserializeAs_GameFightMinimalStats(param1: ICustomDataInput): void {
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of GameFightMinimalStats.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of GameFightMinimalStats.maxLifePoints.');
        }
        this.baseMaxLifePoints = param1.readVarUhInt();
        if (this.baseMaxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.baseMaxLifePoints + ') on element of GameFightMinimalStats.baseMaxLifePoints.');
        }
        this.permanentDamagePercent = param1.readVarUhInt();
        if (this.permanentDamagePercent < 0) {
            throw new Error('Forbidden value (' + this.permanentDamagePercent + ') on element of GameFightMinimalStats.permanentDamagePercent.');
        }
        this.shieldPoints = param1.readVarUhInt();
        if (this.shieldPoints < 0) {
            throw new Error('Forbidden value (' + this.shieldPoints + ') on element of GameFightMinimalStats.shieldPoints.');
        }
        this.actionPoints = param1.readVarShort();
        this.maxActionPoints = param1.readVarShort();
        this.movementPoints = param1.readVarShort();
        this.maxMovementPoints = param1.readVarShort();
        this.summoner = param1.readInt();
        this.summoned = param1.readBoolean();
        this.neutralElementResistPercent = param1.readVarShort();
        this.earthElementResistPercent = param1.readVarShort();
        this.waterElementResistPercent = param1.readVarShort();
        this.airElementResistPercent = param1.readVarShort();
        this.fireElementResistPercent = param1.readVarShort();
        this.neutralElementReduction = param1.readVarShort();
        this.earthElementReduction = param1.readVarShort();
        this.waterElementReduction = param1.readVarShort();
        this.airElementReduction = param1.readVarShort();
        this.fireElementReduction = param1.readVarShort();
        this.criticalDamageFixedResist = param1.readVarShort();
        this.pushDamageFixedResist = param1.readVarShort();
        this.pvpNeutralElementResistPercent = param1.readVarShort();
        this.pvpEarthElementResistPercent = param1.readVarShort();
        this.pvpWaterElementResistPercent = param1.readVarShort();
        this.pvpAirElementResistPercent = param1.readVarShort();
        this.pvpFireElementResistPercent = param1.readVarShort();
        this.pvpNeutralElementReduction = param1.readVarShort();
        this.pvpEarthElementReduction = param1.readVarShort();
        this.pvpWaterElementReduction = param1.readVarShort();
        this.pvpAirElementReduction = param1.readVarShort();
        this.pvpFireElementReduction = param1.readVarShort();
        this.dodgePALostProbability = param1.readVarUhShort();
        if (this.dodgePALostProbability < 0) {
            throw new Error('Forbidden value (' + this.dodgePALostProbability + ') on element of GameFightMinimalStats.dodgePALostProbability.');
        }
        this.dodgePMLostProbability = param1.readVarUhShort();
        if (this.dodgePMLostProbability < 0) {
            throw new Error('Forbidden value (' + this.dodgePMLostProbability + ') on element of GameFightMinimalStats.dodgePMLostProbability.');
        }
        this.tackleBlock = param1.readVarShort();
        this.tackleEvade = param1.readVarShort();
        this.invisibilityState = param1.readByte();
        if (this.invisibilityState < 0) {
            throw new Error('Forbidden value (' + this.invisibilityState + ') on element of GameFightMinimalStats.invisibilityState.');
        }

    }
}

export = GameFightMinimalStats;
