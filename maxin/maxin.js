export const myMixin={
    data(){
        return{
            num:1
        }
    },
    created(){
        this.hello();
    },
    methods:{
        hello(){
            console.log('hello,maxin!')
        },
        one(){
            console.log('one in maxin')
        }
    }
}