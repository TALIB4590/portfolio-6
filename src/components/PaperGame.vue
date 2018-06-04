<template>
  <transition name="fade">
    <div class="window-wrapper paper center">
      <h2>Paper, Scissor, Stone game</h2>
      <div class="content">
        <h2>{{ message }}</h2>
        <strong>{{ `${counter} win(s) in a row...` }}</strong>
        <div class="players">
          <div class="player">
            <h3>You</h3>
            <img class="pointer circled" :class="{hide: !hide,selected: selected === hand,disabled: selected === hand,looser: result < 0}" v-for="hand in hands" :key="hand" :src="require(`../assets/game/${hand}.png`)" @click="play(hand)">
          </div>
          <div class="player">
            <h3>Koikas.eu</h3>
            <img class="circled" :class="{'rotate-180': opponentHand !== 'question',looser: result > 0}" :src="require(`@/assets/game/${opponentHand}.png`)">
          </div>
        </div>
        <template v-if="result < 0">
          <div class="rank">
            <div class="header">Top 5 - Rank</div>
            <table class="player-top">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tr v-for="(player, key) in sortedPlayers" :key="key">
                <td>{{ player[0] }}</td>
                <td>{{ player[1] }}</td>
              </tr>
            </table>
          </div>
          <div class="search player-upload" v-show="saved">
            <input class="player-name" name="player" type="text" v-model.trim="valueName" placeholder="your name" />
            <button class="play save pointer" @click="save()">Upload Score</button>
          </div>
          <button class="play pointer" @click="reset();counter = 0">Play again</button>
        </template>
      </div>
    </div>
  </transition>
</template>
<script>
import { fire } from "@/firebase.js";
export default {
  name: "paper-game",
  data() {
    return {
      opponentHand: "question",
      selected: "",
      message: "",
      valueName: "",
      hide: true,
      result: 0,
      hands: ["scissor", "paper", "stone"],
      counter: 0,
      players: null,
      saved: true
    };
  },
  computed: {
    sortedPlayers(){
      const vm = this;
      return vm.reverseObject(vm.players);
    }
  },
  methods: {
    reverseObject(obj) {
      const sortable = [];
      for (const key in obj)
        if (obj.hasOwnProperty(key)) sortable.push([key, obj[key]]);
      sortable.sort(function(a, b) {
        return b[1] - a[1];
      });
      return sortable;
    },
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
    displayMessage() {
      const vm = this;
      vm.message =
        vm.result > 0
          ? "You win"
          : vm.result < 0
            ? "You lose"
            : vm.selected === "" ? "" : "It's a draw";
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
        vm.counterIncrement();
        vm.displayMessage();
        setTimeout(() => {
          vm.result >= 0 ? vm.reset() : "";
        }, 1600);
      });
    },
    counterIncrement() {
      const vm = this;
      vm.result > 0 ? vm.counter++ : vm.counter;
    },
    condition(hand) {
      const vm = this;
      if (hand === vm.opponentHand) return (vm.result = 0);
      if (hand === "paper") {
        return (vm.result = vm.opponentHand === "stone" ? 1 : -1);
      }
      if (hand === "scissor") {
        return (vm.result = vm.opponentHand === "paper" ? 1 : -1);
      }
      return (vm.result = vm.opponentHand === "scissor" ? 1 : -1);
    },
    reset() {
      const vm = this;
      vm.result = 0;
      vm.hide = true;
      vm.saved = true;
      vm.message = "";
      vm.selected = "";
      vm.opponentHand = "question";
    },
    save() {
      const vm = this;
      if(vm.valueName.trim() === '' || !vm.valueName) return; 
      fire.db
        .ref(`rank/${vm.valueName}`)
        .set(vm.counter)
        .then((vm.saved = false));
    }
  },
  created() {
    const vm = this;
    const query = fire.db
      .ref("rank")
      .orderByValue()
      .limitToLast(5);

    query.on("value", snapshot => {
      vm.players = {};
      snapshot.forEach(data => {
        vm.players[data.key] = data.val();
      });
    });
  }
};
</script>
<style >
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
.paper {
  background: url(http://images.directoryofshareware.com/full/animated_desktop_wallpaper_starfield_desktop_screen_savers-509108.gif)
    no-repeat;
  background-size: cover;
  padding: 15px;
}
.players {
  display: flex;
}
.player {
  width: 50%;
}
.player img {
  width: 80px;
}
.paper .play {
  -webkit-appearance: none;
  border: 0;
  border: 5px solid mediumseagreen;
  border-radius: 5px;
  text-align: center;
  padding: 5px 10px;
  color: mediumseagreen;
  background-color: #ffffff;
  font-size: 15px;
  display: inline-block;
  margin: 0 auto;
}
.paper .play.save {
  border: 5px solid rosybrown;
  color: rosybrown;
}
.player-name {
  display: inline-block;
  margin: 10px auto;
  padding: 5px;
  border: 0;
  height: 20px;
}
.player-upload input{
  border-bottom: 1px solid #dddddd;
  margin: 5px;
}
.player-label-name {
  color: white;
  display: inline-block;
}
.player-top {
  margin: 0 auto;
  padding: 10px 50px;
}
.rank {
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
.circled {
  border-radius: 50%;
  padding: 5px;
  margin: 5px;
  background-color: grey;
}
</style>
