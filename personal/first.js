(function() {
    const {createApp} = Vue;

    createApp({
        data() {
            return { message1 : 'from first.js'}
        },
    }).mount('#app1');
})();