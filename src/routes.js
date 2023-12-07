import AdminDashboard from "./views/Admin/AdminDashboard";
// import UserDashboard from "views/UserDashboard.js";
import AdminEvents from "./views/Admin/AdminEvents.js";
import AdminUsers from "./views/Admin/AdminUsers.js";
// import AdminUsers from "views/AdminUsers.js";
// import UserEvents from "views/UserEvents.js";
// import UserProfile from "views/UserProfile.js";
import UserDashboard from "./views/User/UserDashboard";

var routes = [
  {
    path: "/admin-users",
    name: "Gestión de Usuarios",
    icon: "ni ni-single-02 text-yellow",
    component: <AdminUsers />,
    layout: "/admin",
  },
  {
    path: "/admin-dashboard",
    name: "Panel de Control",
    icon: "ni ni-tv-2 text-primary",
    component: <AdminDashboard />,
    layout: "/admin",
  },
  {
    path: "/admin-events",
    name: "Gestión de Eventos",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminEvents />,
    layout: "/admin",
  },
  {
    path: "/admin-user-dashboard",
    name: "Mis Eventos",
    icon: "ni ni-tv-2 text-primary",
    component: <UserDashboard />,
    layout: "/admin",
  },
  // {
  //   path: "/user-events",
  //   name: "Explorar Eventos",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <UserEvents />,
  //   layout: "/user",
  // },
  // {
  //   path: "/user-profile",
  //   name: "Perfil del Usuario",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <UserProfile />,
  //   layout: "/user",
  // },
];

export default routes;
