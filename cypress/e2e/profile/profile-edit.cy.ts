let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.restartProfile(profileId);
    });
    it('профиль загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Фиксик');
    });
    it('и редактирует его', () => {
        const firstname = 'newFirstname';
        const lastname = 'newLastname';
        cy.updateProfile(firstname, lastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', firstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname);
    });
});
