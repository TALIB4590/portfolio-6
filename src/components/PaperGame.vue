<template>
    <transition name="fade">
    <div class="window-wrapper">
      <div class="content center">
        <div>{{ message }}</div>
        <div>Guest</div>
        <img class="pointer" :class="{hide: !hide,selected: selected === hand,disabled: selected === hand,looser: result < 0}" v-for="hand in hands" :key="hand" :src="require(`../assets/game/${hand}.png`)" @click="play(hand)">
        <div>koikas.eu</div>
        <img :class="{'rotate-180': opponentHand !== 'question',looser: result > 0}" :src="require(`@/assets/game/${opponentHand}.png`)">
        <button class="button pointer" v-if="result < 0" @click="reset()">Play again</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'paper-game',
  data() {
    return {
      opponentHand: 'question',
      selected: '',
      hide: true,
      result: 0,
      hands: ['scissor', 'paper', 'stone'],
    };
  },
  computed:{
    message() {
      const vm = this;
      return vm.result > 0?'You win':
                           vm.result < 0?'You lose':'It\'s a draw'
    }
  },
  methods: {
    animateHand(hand) {
      const vm = this;
      const interval = setInterval(() => {
        vm.opponentHand = vm.randomHand();
      }, 100);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          clearInterval(interval);
          vm.opponentHand = hand;
          resolve();
        }, 3000);
      });
    },
    randomHand() {
      const vm = this;
      const randomNumber = Math.floor(Math.random() * 3);
      return vm.hands[randomNumber];
    },
    play(myHand) {
      const vm = this;
      const hand = vm.randomHand();
      vm.hide = !vm.hide;
      vm.selected = myHand;
      vm.animateHand(hand).then(() => {
        vm.condition(myHand);
        setTimeout(() => {
          vm.result >= 0 ? vm.reset() : '';
        }, 1600);
      });
    },
    condition(hand) {
      const vm = this;
      if (hand === vm.opponentHand) return (vm.result = 0);
      if (hand === 'paper') {
        return (vm.result = vm.opponentHand === 'stone' ? 1 : -1);
      }
      if (hand === 'scissor') {
        return (vm.result = vm.opponentHand === 'paper' ? 1 : -1);
      }
      return (vm.result = vm.opponentHand === 'scissor' ? 1 : -1);
    },
    reset() {
      const vm = this;
      vm.result = 0;
      vm.hide = true;
      vm.selected = '';
      vm.opponentHand = 'question';
    },
  },
};
</script>
<style>
.rotate-180 {
  transform: rotateY(180deg);
}
.looser {
  filter: grayscale(80%);
  opacity: 0.4;
}
.hide {
  display: none;
}
.selected {
  display: inline-block;
}
.center {
  text-align: center;
}
.button{
  -webkit-appearance: none;
  border: 0;
  border: 5px solid mediumseagreen;
  border-radius: 5px;
  text-align: center;
  padding: 5px 10px;
  color: mediumseagreen;
  background-color: #ffffff;
  font-size: 15px;
  display: block;
  margin: 0 auto;
}
</style>
