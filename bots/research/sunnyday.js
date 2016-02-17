/**
 * Summon Talonflames to cast 'Roost' over and over.
 *
 * npm run develop -- --bot=anythinggoes/tester/rooster.js
 */


import AI from 'ai';
import {MOVE, SWITCH} from 'decisions';

export default class SunnyDay extends AI {
  constructor() {
    super();
    this.meta = {
      accepts: 'anythinggoes',
      format: 'anythinggoes',
      team: this.getTeam()
    };

    this.ctr = -1;
  }

  getTeam() {
    return `
Talonflame
Ability: Gale Wings
Level: 100
EVs: 84 HP / 84 Atk / 84 Def / 84 SpA / 84 SpD / 84 Spe
Serious Nature
- Sunny Day
- Agility
- Brave Bird
- Roost

Talonflame
Ability: Gale Wings
Level: 100
EVs: 84 HP / 84 Atk / 84 Def / 84 SpA / 84 SpD / 84 Spe
Serious Nature
- Sunny Day
- Agility
- Brave Bird
- Roost

Talonflame
Ability: Gale Wings
Level: 100
EVs: 84 HP / 84 Atk / 84 Def / 84 SpA / 84 SpD / 84 Spe
Serious Nature
- Sunny Day
- Agility
- Brave Bird
- Roost

Talonflame
Ability: Gale Wings
Level: 100
EVs: 84 HP / 84 Atk / 84 Def / 84 SpA / 84 SpD / 84 Spe
Serious Nature
- Sunny Day
- Agility
- Brave Bird
- Roost

Talonflame
Ability: Gale Wings
Level: 100
EVs: 84 HP / 84 Atk / 84 Def / 84 SpA / 84 SpD / 84 Spe
Serious Nature
- Sunny Day
- Agility
- Brave Bird
- Roost

Talonflame
Ability: Gale Wings
Level: 100
EVs: 84 HP / 84 Atk / 84 Def / 84 SpA / 84 SpD / 84 Spe
Serious Nature
- Sunny Day
- Agility
- Brave Bird
- Roost
`;
  }

  onRequest(state) {
    console.log('WEATHER REPORT: ' + state.weather);
    if (state.forceSwitch || !this.canSunny(state)) {
      this.ctr = this.ctr + 1;
      // will crash out when ctr >= 7;

      return new SWITCH(this.ctr);
    }
    return new MOVE('sunnyday');
  }

  canSunny(state) {
    if (!state.self.active) return false;
    if (!state.self.active.moves) return false;
    const sunny = state.self.active.moves.find(move => move.id === 'sunnyday');
    if (sunny.disabled) return false;
    return true;
  }
}

export default SunnyDay;
