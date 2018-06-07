<template>
    <div class="cme search">
        <form ref="form" @submit.prevent="sendmsg">
            <h4 v-if="sent" style="color: mediumseagreen;">Thank you!!</h4>
            <h4>Contact me!</h4>
            <label>Name:</label>
            <input type="text" v-model="contact.name" required/>
            <label>Email:</label>
            <input type="email" v-model="contact.email" required/>
            <label>Message:</label>
            <textarea v-model="contact.msg" cols="30" rows="10" required></textarea>
            <button type="submit" class="sendButton pointer">Contact</button>
        </form>
    </div>
</template>

<script>
import { fire } from "@/firebase.js";

export default {
  name: "contact",
  data() {
    return {
      sent: false,
      contact: {
        name: "",
        email: "",
        msg: ""
      }
    };
  },
  methods: {
    sendmsg() {
      for (const key of Object.keys(this.contact)) {
        if (this.contact[key].trim() === "") return;
      }
      fire.db
        .ref("messages")
        .push(this.contact)
        .then(() => {
          this.sent = true;
          this.contact;
        });
      for (const key of Object.keys(this.contact)) {
        this.contact[key] = "";
      }
    }
  }
};
</script>

<style>
.cme h4 {
  text-align: center;
}
.cme label {
  display: block;
}
.cme input {
  border-bottom: 1px solid #aaaaaa;
  color: #aaaaaa;
  width: calc(100% - 16px);
}
.cme textarea {
  width: calc(100% - 4px);
  font-size: 24px;
  color: #aaaaaa;
}
.cme .sendButton {
  -webkit-appearance: none;
  border: 0;
  border: 5px solid royalblue;
  border-radius: 2px;
  text-align: center;
  padding: 5px;
  color: royalblue;
  background-color: #ffffff;
  font-size: 15px;
  display: inline-block;
  margin: 0 auto;
}
</style>
