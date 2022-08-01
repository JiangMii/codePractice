<template>
    <div>
        组件1:{{num}}
    </div>
</template>
<script>
import {myMixin} from './maxin'
export default{
    mixins:[myMixin],
    created(){
        this.num++;
        this.one();
        this.two();
    },
        methods:{
            one(){
            console.log('one in 1')
        },
        two(){
             console.log('two in 1')
        }
    }
}
</script>
