(function() {
    const {createApp} = Vue;

    createApp({
        data() {
            return { message2 : 'from second.js'}
        },
    }).mount('#app2');
})();