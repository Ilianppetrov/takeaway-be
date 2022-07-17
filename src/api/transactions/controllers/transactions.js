module.exports = ({ strapi }) => {
  return {
    uploadUsers: async (ctx) => {
      try {
        let allCuriers = await strapi.entityService.findMany(
          "plugin::users-permissions.user",
          {
            filters: {
              role: 3,
            },
          }
        );

        const addUserPromises = ctx.request.body.map((newUserObj) => {
          const exisitingUser = allCuriers.find(
            ({ email }) => email === newUserObj.email
          );

          if (exisitingUser) {
            return strapi.services["plugin::users-permissions.user"].edit(
              exisitingUser.id,
              newUserObj
            );
          }
          return strapi.services["plugin::users-permissions.user"].add({
            ...newUserObj,
            password: "Test1234",
          });
        });

        let newUsers = await Promise.all(addUserPromises);

        return newUsers;
      } catch (err) {
        console.log("err", err);

        return err;
      }
    },
  };
};
