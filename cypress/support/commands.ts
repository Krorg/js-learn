import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentCommands from './commands/comments';
import * as rateCommands from './commands/rate';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(rateCommands);

export {};
