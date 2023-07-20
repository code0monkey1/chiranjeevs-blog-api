module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    // ...
    path: "/admin",
    build: {
      backend: env(
        "ADMIN_BUILD_BACKEND",
        "https://chiranjeevs-blog-strapi-backend-api.onrender.com"
      ),
    },
  },
});
