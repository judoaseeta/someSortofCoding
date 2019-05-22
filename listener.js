document.addEventListener('DOMContentLoaded', () => {
    console.log('app started');
    const fo = new EventSource('https://e7a53bd4.fanoutcdn.com/');
    fo.addEventListener('message', (e) => {
        console.log(e);
    })
});

