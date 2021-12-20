<template>
    <div>
        <!-- 兄弟组件通讯 -->
        <First />
        <Second />
    </div>
</template>
<script>
import Second from '@/components/second.vue'
import First from '@/components/first.vue'
export default {
    name:'News',
    components:{First,Second}
}
</script>