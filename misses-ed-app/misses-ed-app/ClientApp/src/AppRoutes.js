import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { ED } from "./components/ED";
import { Appointment } from "./components/Appointment";

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
    path: '/ed-services',
    element: <ED />
  },
  {
    path: '/appointment-booking',
    element: <Appointment />
  }
];

export default AppRoutes;
