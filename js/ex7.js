const { createApp } = Vue;

createApp({
    data() {
        return{
            list: ['아이스커피', '오렌지주스', '밀크티', '바닐라라떼'],
            objArr: [
                {site: '양양', taketime:'3시간'},
                {site: '청산도', taketime:'6시간'},
                {site: '집', taketime:'1시간'},
            ],
            myArr : ['일','이','삼','사','오'],
            numArr : [1,2,3,4,5],
        }
    },
    methods : {
        addList() {
            this.myArr.push('추가');
        },
        addListIndex(arg) {
            this.myArr.splice(arg, 0, '삽입'); // splice : 배열 요소를 제거하고 새 요소로 대체함.
        },
        changeList(arg) {
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg) {
            this.myArr.splice(arg, 1);
        },
    }
}).mount('#app');