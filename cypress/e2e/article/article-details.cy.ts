let currentArticleId = '';

describe('Пользователь открывает страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('и видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('и видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('и видит список комментариев', () => {
        cy.getByTestId('ArticleDetailsComments').should('exist');
    });
    it('и оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('Test comment');
        cy.getByTestId('CommentCard.Content').should('exist');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('и ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
    // Пример замоканного запроса
    it('и ставит оценку', () => {
        cy.intercept('GET', '**/articles/**', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
