import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home/Home";
import { ED } from "./components/ED";
import { Appointment } from "./components/Appointment";
import { User } from "./components/User";
import { VirtualTriage } from "./components/VirtualTriage";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/virtual-triage',
    element: <VirtualTriage />
  },
  {
    path: '/ed-services',
    element: <ED />
  },
  {
    path: '/appointment-booking',
    element: <Appointment />
  },
  {
    path: '/user-management',
    element: <User />
  }
];

export default AppRoutes;
