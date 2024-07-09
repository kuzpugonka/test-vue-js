const { createApp, ref, AtributeBinding } = Vue;

createApp({
  setup() {
    const counter = ref("0");
    return {
      counter,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 999);
  },
}).mount("#counter");

AtributeBinding({
  data() {
    const msg = ref(`"Страница загружена" + new Date().toLocaleString()`);
    return {
      message,
    };
  },
}).mount("#bind-attribute");
