import { defineComponent } from "vue"
// JSX 元素隐式具有类型 "any"，因为不存在接口 "JSX.IntrinsicElements"。ts(7026)
export default defineComponent({
  setup() {
    return () => (
      <div></div>
    )
  }
})