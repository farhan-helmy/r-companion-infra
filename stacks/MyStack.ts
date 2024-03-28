import { StackContext, Table } from "sst/constructs";

export function MyStack({ stack }: StackContext) {
  const table = new Table(stack, "r-companion", {
    fields: {
      id: "string",
      email: "string",
      reminder: "string",
      time: "string",
      frequency: "string",
      createdAt: "string",
    },
    primaryIndex: { partitionKey: "id" },
    globalIndexes: {
      emailIndex: { partitionKey: "email", sortKey: "createdAt" },
    },
  })
}
