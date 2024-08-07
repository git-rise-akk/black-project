<template>
  <div :class="['FormTextInput', {'FormTextInput_error': localError}]">
    <input
      class="input"
      :placeholder="componentData.placeholder"
      :type="componentData.type"
      :value="modelValue"
      v-mask="'+7 (###) ###-##-##'"
      @input="handleInput"
      @blur="validate"
    />
    <p>{{ componentData.errorMassage }}</p>
  </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask';
export default {
  directives: {
		mask: VueMaskDirective,
	},
  props: {
    modelValue: {
      type: String,
      required: true
    },
    componentData: {
      type: Object,
      default: () => {
        return {
          type: 'text',
          placeholder: 'Placeholder',
          errorMassage: null,
          pattern: '',
          mask: '',
          minLength: null,
          maxLength: null,
        }
      },
    },
  },
  data() {
    return {
      localError: false,
    };
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    validate(event) {
      console.log(event.target.value, this.componentData.pattern);
      const isPatternValid = this.componentData.pattern ? !!event.target.value.match(this.componentData.pattern) : true;
      const isLengthValid = event.target.value.length >= this.componentData.minLength && event.target.value.length <= this.componentData.maxLength;
      
      if (!isPatternValid || !isLengthValid) {
        this.localError = true;
      } else {
        this.localError = false;
      }
      this.$emit('form-validate', !!(isPatternValid && isLengthValid));
    },
  },
}
</script>

<style lang="scss">
.FormTextInput {
  height: 7.5rem;
  width: 100%;
  &_error {
    input {
      background: red;
    }
  }
  input {
    width: 100%;
    height: 100%;
  }
}
</style>