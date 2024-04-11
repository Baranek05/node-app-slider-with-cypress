describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if each slide contains correct title and description', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-slide').each(($slide, index) => {
      cy.wrap($slide).find('.slide-title').then(($title) => {
        const titleText = $title.text().trim();
        expect(titleText).to.not.be.empty;
        switch (index) {
          case 0:
            expect(titleText).to.equal('Rome');
            break;
          case 1:
            expect(titleText).to.equal('London');
            break;
          case 2:
            expect(titleText).to.equal('Paris');
            break;
          default:
        }
      });

      cy.wrap($slide).find('.slide-description').then(($description) => {
        switch (index) {
          case 0:
            expect(descriptionText).to.equal('Italy');
            break;
          case 1:
            expect(descriptionText).to.equal('United Kingdom');
            break;
          case 2:
            expect(descriptionText).to.equal('United Kingdom');
            break;
          default:
        }
      });
    });
  });
});
