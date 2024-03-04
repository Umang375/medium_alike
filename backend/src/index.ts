import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

// type Variables = {
//   message : string
// }

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog" , blogRouter);


//Middleware in HONO
// app.use("/api/v1/blog/*", async(c,next) => {
//   const header = c.req.header("authorization") || "";
//   const token = header.split(" ")[1];
//   const response = await verify(token, c.env.JWT_SECRET);
//   // if()
//   await next();
// })

export default app;
