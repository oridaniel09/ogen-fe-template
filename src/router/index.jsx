import HomeScreen from "../screens/HomeScreen";
import SummaryScreen from "../screens/SummaryScreen";
import TransactionsScreen from '../screens/TransactionScreen';

 const router = [
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/summary",
    element: <SummaryScreen />,
  },
  {
    path: "/transactions",
    element: <TransactionsScreen />,
  },
];

export default router;