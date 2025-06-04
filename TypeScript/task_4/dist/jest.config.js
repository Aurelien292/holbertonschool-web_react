"use strict";
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__test__/**/*.test.ts'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json', // Assure que Jest utilise ton tsconfig adapté
            // Optional: compiler options override can go here
        }
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'], // fichiers à traiter
    // Si tu as besoin de mocker certains fichiers ou modules, tu peux aussi le configurer ici
};
//# sourceMappingURL=jest.config.js.map