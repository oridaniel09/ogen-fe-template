import AssetsScreen from "../screens/AssetsScreen";
import CreditScoreScreen from "../screens/CreditScoreScreen";
import FinanceScoreScreen from "../screens/FinanceScoreScreen";
import FinancialAssitantScreen from "../screens/FinancialAssistantScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SummaryScreen from "../screens/SummaryScreen";
import TransactionScreen from "../screens/TransactionScreen";
import {
  HOME_SCREEN,
  SUMMARY,
  CHECKING_ACCOUNT,
  ASSETS,
  NOTIFICATION,
  SETTINGS,
  FINANCE_SCORE,
  FINANCIAL_HELPER,
} from "../i18n/i18nconsts";

const router = [
  {
    path: "/",
    element: <HomeScreen />,
    title: HOME_SCREEN,
  },
  {
    path: "/summary",
    element: <SummaryScreen />,
    title: SUMMARY,
  },
  {
    path: "/transactions",
    element: <TransactionScreen />,
    title: CHECKING_ACCOUNT,
  },
  {
    path: "/assets",
    element: <AssetsScreen />,
    title: ASSETS,
  },
  {
    path: "/notification",
    element: <NotificationsScreen />,
    title: NOTIFICATION,
  },
  {
    path: "/settings",
    element: <SettingsScreen />,
    title: SETTINGS,
  },
  {
    path: "/financeScore",
    element: <FinanceScoreScreen />,
    title: FINANCE_SCORE,
  },
  {
    path: "/financeAssistant",
    element: <FinancialAssitantScreen />,
    title: FINANCIAL_HELPER,
  },
];

export default router;
