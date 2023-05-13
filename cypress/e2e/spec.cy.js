/// <reference types="cypress" />
import { createTRPCProxyClient } from "@trpc/client";
describe("page", () => {
  it("works", () => {
    cy.visit("https://example.cypress.io");
  });
});
