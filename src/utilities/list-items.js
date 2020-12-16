import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";

const listMenu = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    icons: {
      outlinedIcon: <AccountBalanceWalletOutlinedIcon />,
      containedIcon: <AccountBalanceWalletIcon />,
    },
  },
  {
    id: 2,
    name: "Kelahiran",
    link: "/kelahiran",
    icons: {
      outlinedIcon: <LibraryBooksOutlinedIcon />,
      containedIcon: <LibraryBooksIcon />,
    },
  },
  {
    id: 3,
    name: "Kematian",
    link: "/kematian",
    icons: {
      outlinedIcon: <AssignmentIndOutlinedIcon />,
      containedIcon: <AssignmentIndIcon />,
    },
  },

  {
    id: 4,
    name: "Penduduk",
    link: "/penduduk",
    icons: {
      outlinedIcon: <AccountBalanceWalletOutlinedIcon />,
      containedIcon: <AccountBalanceWalletIcon />,
    },
  },
  {
    id: 5,
    name: "Penduduk Masuk",
    link: "/penduduk_masuk",
    icons: {
      outlinedIcon: <AccountBalanceWalletOutlinedIcon />,
      containedIcon: <AccountBalanceWalletIcon />,
    },
  },
  {
    id: 6,
    name: "Penduduk Keluar",
    link: "/penduduk_keluar",
    icons: {
      outlinedIcon: <LibraryBooksOutlinedIcon />,
      containedIcon: <LibraryBooksIcon />,
    },
  },
  {
    id: 7,
    name: "Activity Logs",
    link: "/activity",
    icons: {
      outlinedIcon: <AssignmentIndOutlinedIcon />,
      containedIcon: <AssignmentIndIcon />,
    },
  },
];

const controlTextMenu = (params) => {
  switch (params.name) {
    case "Activity Logs":
      return "Aktifitas Admin";

    default:
      break;
  }
};

const controlSpace = (params) => {
  switch (params.name) {
    case "Penduduk":
      return 2;

    case "Activity Logs":
      return 2;

    default:
      break;
  }
};

export { listMenu, controlTextMenu, controlSpace };
