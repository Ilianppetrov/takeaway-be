module.exports = {
  routes: [
    {
      method: "POST",
      path: "/transactions/upload-users",
      handler: "transactions.uploadUsers",
    },
  ],
};
