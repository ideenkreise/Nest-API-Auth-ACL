import { NumberDictionary, uniqueNamesGenerator } from 'unique-names-generator';
export function randomName(prefix: string) {
    return uniqueNamesGenerator({
        dictionaries: [[prefix], NumberDictionary.generate({ min: 1000000, max: 9999999 })],
        length: 2,
        separator: '_',
        style: 'capital'
    });
}

