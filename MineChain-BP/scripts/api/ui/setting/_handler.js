import { frontPage } from "./front.js";

const lastPage = (player, pageId) => {
    const familyTree = {
        'common': frontPage,
        'server': frontPage
    }
    familyTree[pageId](player);
}
export { lastPage }