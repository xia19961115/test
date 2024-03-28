/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2024-03-28 14:51:43
 * @LastEditTime: 2024-03-28 15:46:30
 */
import MockR from './MockR.vue'
export default {
    name:'MockRender',
    comments:{MockR},
    data() {
        return {
            nickName: 'MockRender'
        }
    },
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    render(h) {
        console.log('render');
        return (
            <div>
                hello, {this.nickName}

                <div onClick={this.handleAdd}>{this.count}</div>
                <MockR 
                   mes={this.mes}
                />
            </div>
        )
    },
    methods: {
        handleAdd() {
            this.$emit('add')
        },
        mes(e) {
            console.log('123mes', e);
        }
    } 
}