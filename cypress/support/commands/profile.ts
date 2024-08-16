export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(`${firstname}`);
    cy.getByTestId('ProfileCard.lastname').clear().type(`${lastname}`);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const restartProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: '1' },
        body: {
            id: '4',
            first: 'Фиксик',
            lastname: 'Тестирович',
            age: 1,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moskow',
            username: 'testuser',
            avatar: 'https://avatars.dzeninfra.ru/get-zen_brief/7732059/pub_633367c58c27f72c4176016d_633367cc1ef058577fce3699/scale_1200',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            restartProfile(profileId: string): Chainable<void>;
        }
    }
}
