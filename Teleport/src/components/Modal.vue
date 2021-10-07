<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <teleport to="body">
    <template v-if="modelValue">
      <div
        class="modal"
        @click="offModal"
      >
        <div
          :style="{ width: `${parseInt(width)}px`}"
          class="modal__inner"
          @click.stop
        >
          <button
            v-if="closeable"
            class="close"
            @click="offModal"
          >
            X
          </button>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      deafault: false
    },
    width: {
      type: [String, Number],
      default: 400
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue(newValue) {
      if(newValue) {
        window.addEventListener('keyup', this.keyupHandler)
      } else {
        window.removeEventListener('keyup', this.keyupHandler)
      }
    }
  },
  methods: {
    keyupHandler(event) {
      if(event.key === 'Escape') {
        console.log('ESC!!')
        this.offModal()
      }
    },
    onModal() {
      this.$emit('update:modelValue', true)
    },
    offModal() {
      this.$emit('update:modelValue', false)
    }
  },
}
</script>

<style scoped lang="scss">
.modal {
  background-color: rgba(black, .5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 9;
  justify-content: center;
  align-items: center;

  &__inner {
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 10px 10px 0 rgba(black, .2);

    button.close {
      float: right;
    }
  }

}
</style>