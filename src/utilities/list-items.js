import dashboardIcon from "../assets/icons/dashboard-icon.svg";
import kelahiranIcon from "../assets/icons/kelahiran-icon.svg";
import kematianIcon from "../assets/icons/kematian-icon.svg";
import kartukeluargaIcon from "../assets/icons/kartukeluarga-icon.svg";
import pendudukmasukIcon from "../assets/icons/pendudukmasuk-icon.svg";
import pendudukkeluarIcon from "../assets/icons/pendudukkeluar-icon.svg";
import activityIcon from "../assets/icons/activity-icon.svg";

const listMenu = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    icons: {
      outlinedIcon: <img src={dashboardIcon} alt="dashboard-icon" />,
    },
  },
  {
    id: 2,
    name: "Kelahiran",
    link: "/kelahiran",
    icons: {
      outlinedIcon: <img src={kelahiranIcon} alt="kelahiran-icon" />,
    },
  },
  {
    id: 3,
    name: "Kematian",
    link: "/kematian",
    icons: {
      outlinedIcon: <img src={kematianIcon} alt="kematian-icon" />,
    },
  },

  {
    id: 4,
    name: "Kartu Keluarga",
    link: "/kartu_keluarga",
    icons: {
      outlinedIcon: <img src={kartukeluargaIcon} alt="kartukeluarga-icon" />,
    },
  },
  {
    id: 5,
    name: "Penduduk Masuk",
    link: "/penduduk_masuk",
    icons: {
      outlinedIcon: <img src={pendudukmasukIcon} alt="pendudukmasuk-icon" />,
    },
  },
  {
    id: 6,
    name: "Penduduk Keluar",
    link: "/penduduk_keluar",
    icons: {
      outlinedIcon: <img src={pendudukkeluarIcon} alt="pendudukkeluar-icon" />,
    },
  },
  {
    id: 7,
    name: "Activity Logs",
    link: "/activity",
    icons: {
      outlinedIcon: <img src={activityIcon} alt="activity-icon" />,
    },
  },
  {
    id: 8,
    name: "Users",
    link: "/users",
    icons: {
      outlinedIcon: <img src={activityIcon} alt="activity-icon" />,
    },
  },
];

const controlTextMenu = (params) => {
  switch (params.name) {
    case "Kartu Keluarga":
      return "Kependudukan";

    case "Activity Logs":
      return "Aktifitas Admin";

    case "Users":
      return "Super Admin";

    default:
      break;
  }
};

const controlSpace = (params) => {
  switch (params) {
    case "Kependudukan":
      return 2.5;

    case "Aktifitas Admin":
      return 2.5;

    case "Users":
      return 2.5;

    default:
      break;
  }
};

export { listMenu, controlTextMenu, controlSpace };
