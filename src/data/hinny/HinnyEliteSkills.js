import React from 'react';
import {Ships} from "../Ships";

/*export default function hinnyAttack(props) {
    switch (props.skill) {
        case Ships.TIEIN.id:
            return <TIEIN/>;
        default:
            console.log("Component HinnyEliteSkills didn't recognize skill: " + props.skill);
    }
}*/
export const HinnySkills = {
    HullUpgrade:
        <div>Intentionally blank.</div>,
    ShieldUpgrade:
        <div>Intentionally blank.</div>,
    Outmaneuver:
        <div>
            While perfrorm a <i className="xwi x-frontarc"/> attack, if you are not in defender's firing arc,
            the defender rolls 1 fewer defense die.
        </div>,
    TurrPhennir:
        <div>After you perform an attack, perform <i className="xwi x-barrelroll"/> or <i
            className="xwi x-boost"/> action
            if doing so will reduce the number of total possible dice threatening you, even if you are stressed.
        </div>,
    Marksmanship:
        <div>
            When you perform an attack, change 1 <i className="xwi x-hit"/> result to a <i
            className="xwi x-crit"/> result.
        </div>,
    GideonHask:
        <div>While you perform an attack against a damaged defender, roll 1 additional attack die.</div>,
    CrackShot:
        <div>
            While you perform a primary attack, if the defender is in your <i className="xwi x-bullseyearc"/>,
            before Neutralize Results step, spend 1 <i className="xwi x-charge"/> to cancel 1 <i
            className="xwi x-evade"/> result.
        </div>,
    Daredevil:
        <div>
            While you perform a <i className="xwi x-boost"/> action,you may use [1 <i className="xwi x-turnleft"/>] or
            [1 <i className="xwi x-turnright"/>] template instead.
        </div>,
    TrickShot:
        <div>While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.</div>,
// todo check with Hinny: causes 1 damage according to actual rules
    StaticDischargeVanes:
        <div>
            Before you would gain 1 ion or jam token, choose another ship at range 0-1. The chosen ship gains that ion
            or jam token instead.
        </div>,
    Mauler:
        <div>While you perform an attack at attack range 1, roll 1 additional die.</div>,
    Wampa:
        <div>
            While you perform an attack, spend 1 <i className="xwi x-charge"/> to roll 1 additional die. After
            defending, lose 1 <i className="xwi x-charge"/>.
        </div>,
    Ruthless:
        <div>
            While you perform an attack, after spending tokens, if there are any results other than <i
            className="xwi x-hit"/>/<i className="xwi x-crit"/>, choose another friendly ship at range 0-1 of the
            defender. That ship suffers 1 <i className="xwi x-hit"/> to change 1 of your dice results to a <i
            className="xwi x-hit"/> result.
        </div>,
    NightBeast:
        <div>After you fully execute a non-red maneuver, perform a <i className="xwi focus"/> action. </div>,
    Juke:
        <div>
            While you perform an attack, if you are evading, change 1 of the defender's <i
            className="xwi x-evade"/> results to a <i className="xwi focus"/> result. When Selecting Action, choose <i
            className="xwi x-evade"/> instead of <i
            className="xwi focus"/>.
        </div>,
    Predator:
        <div>
            While you perform a primary attack, if the defender is in your <i className="xwi x-bullseyearc"/>, you may
            reroll 1 attack die.
        </div>,
    Afterburners:
        <div>
            After you fully execute a speed 3-5 maneuver, perform a <i className="xwi x-boost"/> action to get target in
            your firing arc or improve attack, even while stressed.
        </div>,
    SoontirFel:
        <div>
            At the start of the Engagement Phase, it there is an enemy ship in your <i className="xwi x-bullseyearc"/>,
            gain
            1 focus token.
        </div>,
    ProtonBombs:
        <div>
            During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop
            a Proton Bomb, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
            [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an
            enemy ship.
        </div>,
//todo Attack should be in capitals, see the cards
    ClusterMissiles:
        <div>
            Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. After this attack, you may
            perform this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring
            the <i
            className="xwi x-lock"/> requirement.
        </div>,
    SaturationSalvo:
        <div>
            While you perform an attack, you may spend 1 <i className="xwi x-charge"/> from that upgrade. If you do,
            choose 2 defense dice. The defender must reroll those dice.
        </div>,
    DebrisGambit:
        <div>
            After you execute a maneuver, if there is an obstacle at range 0-1, perform a <i
            className="xwi x-evade"/> action.
        </div>,
    ProtonTorpedoes:
        <div>
            Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. Change 1 <i
            className="xwi x-hit"/> to a <i className="xwi x-crit"/> result.
        </div>,
    MunitionFailsafe:
        <div>
            While you perform a <i className="xwi x-missile"/> or a <i className="xwi x-torpedo"/> attack, if the attack
            did not hit, recover 1 <i className="xwi x-charge"/> you spent as a cost for the attack.
        </div>,
    PlasmaTorpedoes:
        <div>
            Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. During the Neutralize Results
            step, <i className="xwi x-crit"/> results are cancelled before <i className="xwi x-hit"/> results. After
            this
            attack hits, the defender loses 1 shield.
        </div>,
    ConnerNets:
        <div>
            During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop
            a Conner Net, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
            [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an
            enemy ship.
        </div>,
    CaptainJonus:
        <div>
            While a friendly ship at range 0-2 performs a <i className="xwi x-missile"/> or a <i
            className="xwi x-torpedo"/> attack, that ship may reroll up to 2 attack dice.
        </div>,
    DiamondBoronMissiles:
        <div>
            Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. After this attack hits, each
            ship at range 0-1 of the defender with agility equal or less than the defender's rolls 1 attack die and
            suffers 1 <i className="xwi x-hit"/>/<i className="xwi x-crit"/> damage for a matching result.
        </div>,
    SwarmTactics:
        <div>
            After you perform an attack, choose the friendly ship with the lowest initiative at range 0-1. That ship may
            perform a bonus attack.
        </div>,
    DeathFire:
        <div>
            After you are destroyed, before you are removed, perform an attack and drop 1 random device (device check is
            considered succesfull).
        </div>,
    SkilledBombardier:
        <div>
            If you would drop or launch a device, use a template of the same bearing with speed 1 higher or lower if the
            template drops the device closer to an enemy ship.
        </div>,
    ElectroProtonBomb:
        <div>
            During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop
            an Electro-Proton Bomb, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>]
            or [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an
            enemy ship. Then place 1 fuse marker on that device. This card's <i className="xwi x-charge"/> cannot be
            recovered.
        </div>,
    IonTorpedoes:
        <div>
            Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. If this attack hits, spend ! <i
            className="xwi hit"/> or <i className="xwi x-crit"/> result to cause the defender to suffer 1 <i
            className="xwi x-hit"/> danage. All remaining <i className="xwi x-hit"/>/<i className="xwi x-crit"/> results
            inflict ion tokens instead of damage.
        </div>,
    ProximityMines:
        <div>
            During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop
            a Proximity Mine, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
            [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an
            enemy ship.
        </div>,
    ConcussionMissiles:
        <div>
            Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. After this attack, each ship at
            range 0-1 of the defender exposes 1 of its damage cards.
        </div>,
    Elusive:
        <div>
            While you defend, you may spend 2 <i className="xwi x-charge"/> to reroll 1 defense die.
        </div>,
    StealthDevice:
        <div>
            While you defend, if your <i className="xwi x-charge"/> is active, roll 1 additional defense die. After you
            suffer damage, lose 1 <i className="xwi x-charge"/>.
        </div>,
    ValenRudor:
        <div>
            After a friendly ship at range 0-1 defends (after the damage is resolved, if any), perform an action.
        </div>,
    ScourgeSkutu:
        <div>
            While you perform an attack against a defender in your <i className="xwi x-bullseyearc"/>, roll 1 additional
            die.
        </div>,
    LoneWolf:
        <div>
            While you defend or attack, if there are no other friendly ships at range 0-2, reroll 1 blank result, or a
            <i className="xwi focus"/> result, if you have no other means to modify it.
        </div>,
    SeynMarana:
        <div>
            While you perform an attack, if the defender is not shielded, spend 1 <i className="xwi x-crit"/> result. If
            you do, deal 1 faceup damage card to the defender, then cancel you remaining results.
        </div>,
    MajorRhymer:
        <div>
            While you perform <i className="xwi x-missile"/> or <i className="xwi x-torpedo"/> attack, you may increase
            or decrease the range requirements by 1, to a limit of 0-3.
        </div>,
    AdvancedProtonTorpedoes:
        <div>
            Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. Change 1 <i
            className="xwi x-hit"/> result to a <i className="xwi x-crit"/> result.
        </div>,
    BombletGenerator:
        <div>
            During the System Phase, perform a device check. If successul, spend 3 <i className="xwi x-charge"/> to drop
            a Bomblet, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
            [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an
            enemy ship.
        </div>,
// todo they depend on focus, but the bomber will almost never have a focus and attack...
    BarrageMissiles:
        <div>
            Attack (<i className="xwi x-focus"/>): Spend 1 <i className="xwi x-charge"/>. If the defender is in your <i
            className="xwi x-bullseyearc"/>, you may spend 1 or more <i className="xwi x-charge"/> to reroll that many
            attack dice.
        </div>,

/*

//todo ship variables should reflect this and ShieldUpgrade
    const HullUpgrade = () => (
        <div>Intentionally blank.</div>
    );

const ShieldUpgrade = () => (
    <div>Intentionally blank.</div>
);

const Outmaneuver = () => (
    <div>While perfrorm a <i className="xwi x-frontarc"/> attack, if you are not in defender's firing arc, the defender
        rolls 1 fewer defense die. </div>
);

const TurrPhennir = () => (
    <div>After you perform an attack, perform <i className="xwi x-barrelroll"/> or <i className="xwi x-boost"/> action
        if doing so will reduce the number of total possible dice threatening you, even if you are stressed.</div>
);

const Marksmanship = () => (
    <div>When you perform an attack, change 1 <i className="xwi x-hit"/> result to a <i className="xwi x-crit"/> result.
    </div>
);

const GideonHask = () => (
    <div>While you perform an attack against a damaged defender, roll 1 additional attack die.</div>
);

const CrackShot = () => (
    <div>While you perform a primary attack, if the defender is in your <i className="xwi x-bullseyearc"/>, before
        Neutralize Results step, spend 1 <i className="xwi x-charge"/> to cancel 1 <i className="xwi x-evade"/> result.
    </div>
);

const Daredevil = () => (
    <div>While you perform a <i className="xwi x-boost"/> action,you may use [1 <i className="xwi x-turnleft"/>] or
        [1 <i className="xwi x-turnright"/>] template instead.
    </div>
);

const TrickShot = () => (
    <div>While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.</div>
);

// todo check with Hinny: causes 1 damage according to actual rules
const StaticDischargeVanes = () => (
    <div>Before you would gain 1 ion or jam token, choose another ship at range 0-1. The chosen ship gains that ion
        or jam token instead.</div>
);

const Mauler = () => (
    <div>While you perform an attack at attack range 1, roll 1 additional die.</div>
);

const Wampa = () => (
    <div>While you perform an attack, spend 1 <i className="xwi x-charge"/> to roll 1 additional die. After defending,
        lose 1 <i className="xwi x-charge"/>.</div>
);

const Ruthless = () => (
    <div>While you perform an attack, after spending tokens, if there are any results other than <i
        className="xwi x-hit"/>/<i className="xwi x-crit"/>, choose another friendly ship at range 0-1 of the defender.
        That ship suffers 1 <i className="xwi x-hit"/> to change 1 of your dice results to a <i
            className="xwi x-hit"/> result.</div>
);

const NightBeast = () => (
    <div>After you fully execute a non-red maneuver, perform a <i className="xwi focus"/> action. </div>
);

const Juke = () => (
    <div>While you perform an attack, if you are evading, change 1 of the defender's <i
        className="xwi x-evade"/> results to a <i className="xwi focus"/> result. When Selecting Action, choose <i
        className="xwi x-evade"/> instead of <i
        className="xwi focus"/>.</div>
);

const Predator = () => (
    <div>
        While you perform a primary attack, if the defender is in your <i className="xwi x-bullseyearc"/>, you may
        reroll 1 attack die.
    </div>
);

const Afterburners = () => (
    <div>
        After you fully execute a speed 3-5 maneuver, perform a <i className="xwi x-boost"/> action to get target in
        your firing arc or improve attack, even while stressed.
    </div>
);

const SoontirFel = () => (
    <div>
        At the start of the Engagement Phase, it there is an enemy ship in your <i className="xwi x-bullseyearc"/>, gain
        1 focus token.
    </div>
);

const ProtonBombs = () => (
    <div>
        During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop a
        Proton Bomb, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
        [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an enemy
        ship.
    </div>
);

//todo Attack should be in capitals, see the cards
const ClusterMissiles = () => (
    <div>
        Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. After this attack, you may perform
        this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring the <i
        className="xwi x-lock"/> requirement.
    </div>
);

const SaturationSalvo = () => (
    <div>
        While you perform an attack, you may spend 1 <i className="xwi x-charge"/> from that upgrade. If you do, choose
        2 defense dice. The defender must reroll those dice.
    </div>
);

const DebrisGambit = () => (
    <div>
        After you execute a maneuver, if there is an obstacle at range 0-1, perform a <i
        className="xwi x-evade"/> action.
    </div>
);

const ProtonTorpedoes = () => (
    <div>
        Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. Change 1 <i
        className="xwi x-hit"/> to a <i className="xwi x-crit"/> result.
    </div>
);

const MunitionFailsafe = () => (
    <div>
        While you perform a <i className="xwi x-missile"/> or a <i className="xwi x-torpedo"/> attack, if the attack did
        not hit, recover 1 <i className="xwi x-charge"/> you spent as a cost for the attack.
    </div>
);

const PlasmaTorpedoes = () => (
    <div>
        Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. During the Neutralize Results step,
        <i className="xwi x-crit"/> results are cancelled before <i className="xwi x-hit"/> results. After this attack
        hits, the defender loses 1 shield.
    </div>
);

const ConnerNets = () => (
    <div>
        During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop a
        Conner Net, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
        [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an enemy
        ship.
    </div>
);

const CaptainJonus = () => (
    <div>
        While a friendly ship at range 0-2 performs a <i className="xwi x-missile"/> or a <i
        className="xwi x-torpedo"/> attack, that ship may reroll up to 2 attack dice.
    </div>
);

const DiamondBoronMissiles = () => (
    <div>
        Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. After this attack hits, each ship
        at
        range 0-1 of the defender with agility equal or less than the defender's rolls 1 attack die and suffers 1 <i
        className="xwi x-hit"/>/<i className="xwi x-crit"/> damage for a matching result.
    </div>
);

const SwarmTactics = () => (
    <div>
        After you perform an attack, choose the friendly ship with the lowest initiative at range 0-1. That ship may
        perform a bonus attack.
    </div>
);

const DeathFire = () => (
    <div>
        After you are destroyed, before you are removed, perform an attack and drop 1 random device (device check is
        considered succesfull).
    </div>
);

const SkilledBombardier = () => (
    <div>
        If you would drop or launch a device, use a template of the same bearing with speed 1 higher or lower if the
        template drops the device closer to an enemy ship.
    </div>
);

const ElectronProtonBomb = () => (
    <div>
        During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop
        an Electro-Proton Bomb, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
        [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an enemy
        ship. Then place 1 fuse marker on that device. This card's <i className="xwi x-charge"/> cannot be recovered.
    </div>
);

const IonTorpedoes = () => (
    <div>
        Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. If this attack hits, spend ! <i
        className="xwi hit"/> or <i className="xwi x-crit"/> result to cause the defender to suffer 1 <i
        className="xwi x-hit"/> danage. All remaining <i className="xwi x-hit"/>/<i className="xwi x-crit"/> results
        inflict ion tokens instead of damage.
    </div>
);

const ProximityMines = () => (
    <div>
        During the System Phase, perform a device check. If successul, spend 1 <i className="xwi x-charge"/> to drop
        a Proximity Mine, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
        [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an enemy
        ship.
    </div>
);

const ConcussionMissiles = () => (
    <div>
        Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. After this attack, each ship at
        range 0-1 of the defender exposes 1 of its damage cards.
    </div>
);

const Elusive = () => (
    <div>
        While you defend, you may spend 2 <i className="xwi x-charge"/> to reroll 1 defense die.
    </div>
);

const StealthDevice = () => (
    <div>
        While you defend, if your <i className="xwi x-charge"/> is active, roll 1 additional defense die. After you
        suffer damage, lose 1 <i className="xwi x-charge"/>.
    </div>
);

const ValenRudor = () => (
    <div>
        After a friendly ship at range 0-1 defends (after the damage is resolved, if any), perform an action.
    </div>
);

const ScourgeSkutu = () => (
    <div>
        While you perform an attack against a defender in your <i className="xwi x-bullseyearc"/>, roll 1 additional
        die.
    </div>
);

const LoneWolf = () => (
    <div>
        While you defend or attack, if there are no other friendly ships at range 0-2, reroll 1 blank result, or a
        <i className="xwi focus"/> result, if you have no other means to modify it.
    </div>
);

const SeynMarana = () => (
    <div>
        While you perform an attack, if the defender is not shielded, spend 1 <i className="xwi x-crit"/> result. If you
        do,
        deal 1 faceup damage card to the defender, then cancel you remaining results.
    </div>
);

const MajorRhymer = () => (
    <div>
        While you perform <i className="xwi x-missile"/> or <i className="xwi x-torpedo"/> attack, you may increase or
        decrease the range requirements by 1, to a limit of 0-3.
    </div>
);

const AdvancedProtonTorpedoes = () => (
    <div>
        Attack (<i className="xwi x-lock"/>): Spend 1 <i className="xwi x-charge"/>. Change 1 <i
        className="xwi x-hit"/> result to a <i className="xwi x-crit"/> result.
    </div>
);

const BombletGenerator = () => (
    <div>
        During the System Phase, perform a device check. If successul, spend 3 <i className="xwi x-charge"/> to drop
        a Bomblet, using the [1 <i className="xwi x-straight"/>], [1 <i className="xwi x-turnleft"/>] or
        [1 <i className="xwi x-turnright"/>] template, depending on which template drops the device closest to an enemy
        ship.
    </div>
);

// todo they depend on focus, but the bomber will almost never have a focus and attack...
const BarrageMissiles = () => (
    <div>
        Attack (<i className="xwi x-focus"/>): Spend 1 <i className="xwi x-charge"/>. If the defender is in your <i
        className="xwi x-bullseyearc"/>, you may spend 1 or more <i className="xwi x-charge"/> to reroll that many
        attack
        dice.
    </div>
);*/
