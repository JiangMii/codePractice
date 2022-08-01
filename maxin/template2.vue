<template>
    <div>
        组件2:{{num}}
    </div>
</template>
<script>
import {myMixin} from './maxin'
export default{
    mixins:[myMixin],
    created(){
        this.num--
    },
    methods:{
            one(){
            console.log('one in 1')
        }
    }
    }

</script>