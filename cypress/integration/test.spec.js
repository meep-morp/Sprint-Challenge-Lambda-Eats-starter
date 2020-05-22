describe("Form Inputs", () => {
	it("Can use the forms", () => {
		cy.visit("http://localhost:3000/");

		cy.contains("Order Here!").click();

		cy.get('input[name="name"]').type("pizza").should("have.value", "pizza");

		cy.get('input[name="cheese"]').check().should("have.value", "true");

		cy.get('input[name="pepperoni"]').check().should("have.value", "true");

		cy.get('textarea[name="specialInt"]')
			.type("more cheese pls")
			.should("have.value", "more cheese pls");

		cy.get(".order").click();
	});
});
