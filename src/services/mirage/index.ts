// import { createServer, Model } from "miragejs";

// export function makeServer({ environment = "test" } = {}) {
//   const server = createServer({
//     environment,

//     models: {
//       task: Model,
//     },
//     seeds(server) {
//       server.create("task", {
//         id: "1",
//         description: "Ir plantar batata",
//         isCompleted: false,
//         createdAt: new Date("2022-08-05 11:20:00"),
//       });
//       server.create("task", {
//         id: "2",
//         description: "Mandar o tiuzin da pipoca se lascar",
//         isCompleted: false,
//         createdAt: new Date("2022-08-05 11:20:00"),
//       });
//       server.create("task", {
//         id: "3",
//         description: "Dormir igual um porco",
//         isCompleted: true,
//         createdAt: new Date("2022-08-05 11:20:00"),
//       });
//     },
//     routes() {
//       this.namespace = "api";
//       this.timing = 750;

//       this.get("/tasks", (schema) => {
//         return schema.all("task");
//       });

//       this.post("/tasks", (schema, request) => {
//         const data = JSON.parse(request.requestBody);

//         return schema.create("task", data);
//       });
//     },
//   });

//   return server;
// }
