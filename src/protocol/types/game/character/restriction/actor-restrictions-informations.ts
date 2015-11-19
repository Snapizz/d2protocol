/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ActorRestrictionsInformations implements INetworkType {
    public static ID: number = 204;

    cantBeAggressed: boolean;
    cantBeChallenged: boolean;
    cantTrade: boolean;
    cantBeAttackedByMutant: boolean;
    cantRun: boolean;
    forceSlowWalk: boolean;
    cantMinimize: boolean;
    cantMove: boolean;
    cantAggress: boolean;
    cantChallenge: boolean;
    cantExchange: boolean;
    cantAttack: boolean;
    cantChat: boolean;
    cantBeMerchant: boolean;
    cantUseObject: boolean;
    cantUseTaxCollector: boolean;
    cantUseInteractive: boolean;
    cantSpeakToNPC: boolean;
    cantChangeZone: boolean;
    cantAttackMonster: boolean;
    cantWalk8Directions: boolean;

    constructor() {
        this.cantBeAggressed = false;
        this.cantBeChallenged = false;
        this.cantTrade = false;
        this.cantBeAttackedByMutant = false;
        this.cantRun = false;
        this.forceSlowWalk = false;
        this.cantMinimize = false;
        this.cantMove = false;
        this.cantAggress = false;
        this.cantChallenge = false;
        this.cantExchange = false;
        this.cantAttack = false;
        this.cantChat = false;
        this.cantBeMerchant = false;
        this.cantUseObject = false;
        this.cantUseTaxCollector = false;
        this.cantUseInteractive = false;
        this.cantSpeakToNPC = false;
        this.cantChangeZone = false;
        this.cantAttackMonster = false;
        this.cantWalk8Directions = false;
    }

    public getTypeId(): number {
        return ActorRestrictionsInformations.ID;
    }

    public reset(): void {
        this.cantBeAggressed = false;
        this.cantBeChallenged = false;
        this.cantTrade = false;
        this.cantBeAttackedByMutant = false;
        this.cantRun = false;
        this.forceSlowWalk = false;
        this.cantMinimize = false;
        this.cantMove = false;
        this.cantAggress = false;
        this.cantChallenge = false;
        this.cantExchange = false;
        this.cantAttack = false;
        this.cantChat = false;
        this.cantBeMerchant = false;
        this.cantUseObject = false;
        this.cantUseTaxCollector = false;
        this.cantUseInteractive = false;
        this.cantSpeakToNPC = false;
        this.cantChangeZone = false;
        this.cantAttackMonster = false;
        this.cantWalk8Directions = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ActorRestrictionsInformations(param1);
    }

    public serializeAs_ActorRestrictionsInformations(param1: ICustomDataOutput): void {
        var _loc2_: number = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.cantBeAggressed);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.cantBeChallenged);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.cantTrade);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 3, this.cantBeAttackedByMutant);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 4, this.cantRun);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 5, this.forceSlowWalk);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 6, this.cantMinimize);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 7, this.cantMove);
        param1.writeByte(_loc2_);
        var _loc3_: number = 0;
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 0, this.cantAggress);
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 1, this.cantChallenge);
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 2, this.cantExchange);
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 3, this.cantAttack);
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 4, this.cantChat);
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 5, this.cantBeMerchant);
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 6, this.cantUseObject);
        _loc3_ = BooleanByteWrapper.setFlag(_loc3_, 7, this.cantUseTaxCollector);
        param1.writeByte(_loc3_);
        var _loc4_: number = 0;
        _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 0, this.cantUseInteractive);
        _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 1, this.cantSpeakToNPC);
        _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 2, this.cantChangeZone);
        _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 3, this.cantAttackMonster);
        _loc4_ = BooleanByteWrapper.setFlag(_loc4_, 4, this.cantWalk8Directions);
        param1.writeByte(_loc4_);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ActorRestrictionsInformations(param1);
    }

    public deserializeAs_ActorRestrictionsInformations(param1: ICustomDataInput): void {
        var _loc2_: number = param1.readByte();
        this.cantBeAggressed = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.cantBeChallenged = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.cantTrade = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.cantBeAttackedByMutant = BooleanByteWrapper.getFlag(_loc2_, 3);
        this.cantRun = BooleanByteWrapper.getFlag(_loc2_, 4);
        this.forceSlowWalk = BooleanByteWrapper.getFlag(_loc2_, 5);
        this.cantMinimize = BooleanByteWrapper.getFlag(_loc2_, 6);
        this.cantMove = BooleanByteWrapper.getFlag(_loc2_, 7);
        var _loc3_: number = param1.readByte();
        this.cantAggress = BooleanByteWrapper.getFlag(_loc3_, 0);
        this.cantChallenge = BooleanByteWrapper.getFlag(_loc3_, 1);
        this.cantExchange = BooleanByteWrapper.getFlag(_loc3_, 2);
        this.cantAttack = BooleanByteWrapper.getFlag(_loc3_, 3);
        this.cantChat = BooleanByteWrapper.getFlag(_loc3_, 4);
        this.cantBeMerchant = BooleanByteWrapper.getFlag(_loc3_, 5);
        this.cantUseObject = BooleanByteWrapper.getFlag(_loc3_, 6);
        this.cantUseTaxCollector = BooleanByteWrapper.getFlag(_loc3_, 7);
        var _loc4_: number = param1.readByte();
        this.cantUseInteractive = BooleanByteWrapper.getFlag(_loc4_, 0);
        this.cantSpeakToNPC = BooleanByteWrapper.getFlag(_loc4_, 1);
        this.cantChangeZone = BooleanByteWrapper.getFlag(_loc4_, 2);
        this.cantAttackMonster = BooleanByteWrapper.getFlag(_loc4_, 3);
        this.cantWalk8Directions = BooleanByteWrapper.getFlag(_loc4_, 4);

    }
}

export = ActorRestrictionsInformations;
