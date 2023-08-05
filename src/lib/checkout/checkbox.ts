import { computed } from "vue"
// props 属性类型的限定
export const checkboxProps = {
  // 子组件v-model传来的值
  modelValue: {
    type: Boolean,
    default: false
  },
  // 单选框对应的值
  label: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  iconSize: {
    type: [String, Number],
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  }
}

// vue3的组件之间双向数据绑定
// 父组件使用子组件 同时v-model 传递数据
// 子组件props接收'modelValue' 
// 更新的时候 自定义事件就叫 emit(update:modelValue,回传父组件的值) 
export const checkboxEmits = ["update:modelValue"]

export const useCheckbox = (props, emits) => {
  const label = computed(() => props.label)
  
  const modelValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      // 触发update:modelValue事件 传值
      emits("update:modelValue", value);
    },
  });

  const size = computed(() => props.size)

  const iconSize = computed(()=>{
    if (props.iconSize) {
      return props.iconSize;
    } else if (size.value === "large") {
      return "12px";
    } else if (size.value === "small") {
      return "8px";
    } else {
      return "10px";
    }
  })

  const disabled = computed(()=>{
    return props.disabled;
  })

  const iconColor = computed(() => {
    if(disabled.value) {
      return '#c2c2c2'
    } else {
      return '#fff'
    }
  })

  const classes = computed(() => ({
    "is-checked": modelValue.value,
    [`xp-checkbox-${size.value}`]: size.value,
    "is-disabled": disabled.value
  }))

  return {
    modelValue,
    label,
    classes,
    size,
    iconSize,
    disabled,
    iconColor
  }
}

