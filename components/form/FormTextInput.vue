<template>
  <div :class="['FormTextInput', {'FormTextInput_error': localError}]">
    <input
      v-if="componentData.mask"
      class="input"
      :placeholder="componentData.placeholder"
      :type="componentData.type"
      @input="handleInput"
      @blur="validate"
    />
    <input
      v-else
      class="input"
      :placeholder="componentData.placeholder"
      :type="componentData.type"
      @input="handleInput"
      @blur="validate"
    />
    <p>{{ componentData.errorMassage }}</p>
  </div>
</template>

<script>
export default {
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
  emits: ['update:modelValue', 'form-validate'],
  methods: {
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    validate(event) {
      const pattern = this.componentData.pattern;
      const regEx = new RegExp(pattern);
      console.log(event.target.value, regEx.test(event.target.value), regEx);
      
      const isPatternValid = this.componentData.pattern ? regEx.test(event.target.value) : true;
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
  &.FormTextInput_error {
    input {
      border: 0.1rem solid red;
    }
  }
  input {
    width: 100%;
    height: 100%;
    background: $popup;
    padding-left: 4.1rem;
    border: 0.1rem solid #fff;
    font-size: 1.5rem;
    font-family: ArtegraSans;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
}
</style>