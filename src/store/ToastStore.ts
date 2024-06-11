import { proxy } from "valtio";

export type ToastData = {
  infoData?: string;
};

type ToastMessage = {
  id: number;
  view: "info";
  data: ToastData;
};

type ToastState = {
  queue: ToastMessage[];
};

const state = proxy<ToastState>({
  queue: [],
});

const ToastStore = {
  state,

  addToast(view: ToastMessage["view"], data: ToastData) {
    const id = Date.now();
    state.queue.push({ id, view, data });
    setTimeout(() => this.removeToast(id), 5000);
  },

  removeToast(id: number) {
    state.queue = state.queue.filter((toast) => toast.id !== id);
  },

  info(text: string) {
    this.addToast("info", { infoData: text });
  },
};

export default ToastStore;
