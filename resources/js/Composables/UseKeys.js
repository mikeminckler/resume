import { onMounted, onBeforeUnmount } from 'vue'

export function useKeys(data) {

    const onKeydown = (event) => {
        const key = data.find(key => key.key == event.key)
        if(key) {
            key.fn(event)
        }
    }

    onMounted(() => {
        document.addEventListener('keydown', onKeydown);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', onKeydown);
    });
}
