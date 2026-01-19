export let fullscreenImage: string | null = $state(null);

export function openFullscreen(src: string) {
    fullscreenImage = src;
}

export function closeFullscreen() {
    fullscreenImage = null;
}

