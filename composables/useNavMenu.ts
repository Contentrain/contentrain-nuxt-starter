import { reactive } from "vue";

export const navMenuStore = reactive({
  show: false,
  setMenuVisibility(value: boolean) {
    this.show = value;
  },
});
