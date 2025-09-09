import { Character } from './Character';
import { ItemType } from './ItemType';
import { ResourceInventory } from './ResourceInventory';

export class FunctionalLibrary {
    static transferResource(from: ResourceInventory, to: ResourceInventory, itemType: ItemType, amount: number) {
        let toBeTaken = from.withdrawResource(itemType, 1);
        let takenAmount = to.depositResource(itemType, toBeTaken, true);
        let leftOver = toBeTaken - takenAmount;
        if (leftOver > 0) {
            from.depositResource(itemType, leftOver, true);
        }
    }

    static checkCharacterRequiredTags(character: Character, requiredTags: string[]): boolean {
        if (requiredTags.length == 0) {
            return true;
        }
        let allMatched = true;
        for (const tag of requiredTags) {
            if (!character.tags.includes(tag)) {
                allMatched = false;
                break;
            }
        }
        return allMatched;
    }

}
export function LOG(scope: string, ...data: any[]) {
    let newData = [scope + ': ', ...data];
    console.log(newData);
}