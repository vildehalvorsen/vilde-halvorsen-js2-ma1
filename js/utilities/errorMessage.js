export function errorMessage(message, target) {
    const element = document.querySelector(target);

    element.innerHTML = `<div class="error">${message}</div>`;
}