export function getExistingWishes() {
    const wishes = localStorage.getItem("wishes");

    if (!wishes) {
        return [];
    } else {
        return JSON.parse(wishes);
    }

}