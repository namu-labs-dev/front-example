import { proxy } from "valtio";
import { type TitleAndContentDrawerProps } from "~/views/drawer/TitleAndContentDrawer";

type ViewType = "TitleAndContent";

type DataType = {
  TitleAndContent: TitleAndContentDrawerProps;
};

type State = {
  open: boolean;
  view?: ViewType;
  data?: DataType;
};

const state = proxy<State>({
  open: false,
});

const DrawerStore = {
  state,

  open(view: State["view"], data?: State["data"]) {
    state.view = view;
    state.data = data;
    state.open = true;
    document.body.style.overflow = "hidden";
  },

  close() {
    state.open = false;
    document.body.style.overflow = "";
  },
};

export default DrawerStore;
