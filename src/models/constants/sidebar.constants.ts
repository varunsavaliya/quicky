import { ISidebarLink, RoutePaths } from "../../models";

export const SidebarLinks: ISidebarLink[] = [
  {
    label: "Home",
    imgUrl: "/icons/Home.svg",
    route: RoutePaths.HOME,
  },
  {
    label: "Upcoming",
    imgUrl: "/icons/upcoming.svg",
    route: RoutePaths.UPCOMING,
  },
  {
    label: "Previous",
    imgUrl: "/icons/previous.svg",
    route: RoutePaths.PREVIOUS,
  },
  {
    label: "Recordings",
    imgUrl: "/icons/Video.svg",
    route: RoutePaths.RECORDINGS,
  },
  {
    label: "Personal Room",
    imgUrl: "/icons/add-personal.svg",
    route: RoutePaths.PERSONAL_ROOM,
  },
];
