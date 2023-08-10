import { computed } from 'vue'

export const selectProps = {
  // 接收父组件v-model传的值
  modelValue: {
    type: [String, Number, Boolean, Object],
  },
  options: {
    type: Array,
    default: () => [],
  },
};

// 修改传过来的modelValue props 的(修改)事件
export const selectEmits = ['update:modelValue','change'];

export const useSelect = (props, emits) => {
  const options = computed(() => props.options)

  const modelValue = computed(() => props.modelValue)
  // {label,value} options里面的值和v-model的值相同的值
  console.log('value对应的值',props.options.find((v) => v.value === props.modelValue))
  
  // options中v-model(modelValue)对应的那一个label值
  const modelLable = computed(() => {
    const item = props.options.find((v) => v.value === props.modelValue)
    return item ? item.label : "";
  });
  return {
    options,
    modelValue,
    modelLable
  };
}