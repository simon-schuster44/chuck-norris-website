import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // find object, update counter by one and respond with updated object
      const { count } = await prisma.view.findUnique({
        where: { id: "63d2ceabd0ec0414a54cbc14" },
      });
      const post = await prisma.view.update({
        where: { id: "63d2ceabd0ec0414a54cbc14" },
        data: { count: count + 1 },
      });
      res.status(200).json(post);
      break;
    default:
      res.status(403).json({ message: "Forbidden" });
      break;
  }
}
