export function functionToRewire() {
    console.log('This should never be printed');
}

export default function () {
    functionToRewire();
}
