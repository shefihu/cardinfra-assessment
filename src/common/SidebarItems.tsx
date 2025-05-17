import {
  DashboardIcon,
  BranchesIcon,
  RolesIcon,
  UsersIcon,
  CardSchemeIcon,
  CardProfileIcon,
  CardRequestIcon,
  StockIcon,
  CardIcon,
  AuthorizationListIcon,
  AuthorizationQueueIcon,
  TrailIcon,
  AccountIcon,
} from "../assets/svg/svg";
import { RoutePaths } from "../routes/routesPath";

export const sidebarRoutes = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: RoutePaths.DASHBOARD,
  },
  {
    name: "Branches",
    icon: <BranchesIcon />,
    path: RoutePaths.BRANCHES,
  },
  {
    name: "Roles",
    icon: <RolesIcon />,
    path: RoutePaths.ROLES,
  },
  {
    name: "Users",
    icon: <UsersIcon />,
    path: RoutePaths.USERS,
  },
  {
    name: "Card Scheme",
    icon: <CardSchemeIcon />,
    path: RoutePaths.CARD_SCHEME,
  },
  {
    name: "Card Profile",
    icon: <CardProfileIcon />,
    path: RoutePaths.CARD_PROFILE,
  },
  {
    name: "Card Request",
    icon: <CardRequestIcon />,
    path: RoutePaths.CARD_REQUEST,
  },
  {
    name: "Stock",
    icon: <StockIcon />,
    path: RoutePaths.STOCK,
  },
  {
    name: "Cards",
    icon: <CardIcon />,
    path: RoutePaths.CARDS,
  },
  {
    name: "Authorization List",
    icon: <AuthorizationListIcon />,
    path: RoutePaths.AUTHORIZATION_LIST,
  },
  {
    name: "Authorization Queue",
    icon: <AuthorizationQueueIcon />,
    path: RoutePaths.AUTHORIZATION_QUEUE,
  },
  {
    name: "Trail",
    icon: <TrailIcon />,
    path: RoutePaths.TRAIL,
  },
  {
    name: "Account",
    icon: <AccountIcon />,
    path: RoutePaths.ACCOUNT,
  },
];
