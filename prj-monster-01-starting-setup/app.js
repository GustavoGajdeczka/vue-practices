const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data(){
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    }
  },
  watch: {
    playerHealth(){
      if(this.playerHealth < 1){
        if(this.monsterHealth < 1){
          this.winner = 'draw'
        }else{
          this.winner = 'monster'
        }
      }
    },
    monsterHealth(){
      if(this.monsterHealth < 1){
        if(this.playerHealth < 1){
          this.winner = 'draw'
        }else{
          this.winner = 'player'
        }
        /* this.reset() */
      }
    }
  },
  computed: {
    monsterBarStyles(){
      if(this.monsterHealth < 0){
        return {width: '0%'}
      }
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles(){
      if(this.playerHealth < 0){
        return {width: '0%'}
      }
      return {width: this.playerHealth + '%'}
    },
    mayUseSpecialAttack(){
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    attackMonster(){
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLog('player', 'attack', attackValue);
      this.attackPlayer();
    },
    specialAttack(){
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLog('player', 'special-attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer(){
      this.currentRound++;
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLog('monster', 'attack', attackValue);
    },
    healPlayer(){
      const healValue = getRandomValue(8, 20);
      if(this.playerHealth + healValue > 100){
        this.playerHealth = 100;
      }else{
        this.playerHealth += healValue;
      }
      this.addLog('player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender(){
      this.winner = 'monster';
      this.playerHealth = 0;
    },
    reset(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = []
    },
    addLog(who, what, value){
      this.logMessages.unshift({who: who, what: what, value: value});
    }
  }
}).mount("#game");

