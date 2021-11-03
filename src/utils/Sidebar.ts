export default [
  {
    icon: "mdi-cash-register",
    title: "sidebar.pos",
    children: [
      {
        icon: "mdi-tray-full",
        title: "sidebar.cashtray",
        to: `/cashtray`,
      },
      {
        icon: "mdi-tray-arrow-down",
        title: "sidebar.open_cashtray",
        to: `/open-cashtray`,
      },
      {
        icon: "mdi-motorbike",
        title: "sidebar.driver_totals",
        to: `/driver-totals`,
      },
    ]
  },
  {
    icon: "mdi-account-outline",
    title: "sidebar.accounts",
    children: [
      {
        icon: "mdi-clipboard-flow-outline",
        title: "sidebar.cashflow",
        to: `/cashflow`,
      },
      {
        icon: "mdi-cash-multiple",
        title: "sidebar.account_balance",
        to: `/account-balance`,
      },
      {
        icon: "mdi-scale-balance",
        title: "sidebar.balance_of_trade",
        to: `/balance-of-trade`,
      },
      {
        icon: "mdi-account-cowboy-hat-outline",
        title: "sidebar.suppliers_balance",
        to: `/suppliers-balance`,
      },
    ]
  },
  {
    icon: "mdi-database-outline",
    title: "sidebar.items",

    children: [
      {
        icon: "mdi-database-lock-outline",
        title: "sidebar.top_sales",
        to: `/top-sales`,
      },
      {
        icon: "mdi-numeric-1-box-outline",
        title: "sidebar.stock",
        to: `/stock`,
      },
      {
        icon: "mdi-reload",
        title: "sidebar.trans_cycle",
        to: `/trans-cycle`,
      },
    ]
  },
];
