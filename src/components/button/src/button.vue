<template>
  <a
    v-if="url"
    :target="target"
    :href="url"
    class="su-btn"
    :class="[
      size ? 'su-btn-' + size : '',
      type ? 'su-btn-' + type : '',
      radius ? 'su-btn-radius-'+radius : '' ,
      {
        'is-plain' : plain,
        'is-round' : round,
        'is-circle' : circle,
        'su-btn-fluid': fluid,
        'su-btn-disabled': disabled
      }
    ]"
  ><span>
    <i
      v-if="icon && !right"
      class="left"
      :class="icon"
    />
    <slot><span style="margin: -2px" /></slot>
    <i
      v-if="icon && right"
      class="right"
      :class="icon"
    />
    </span>
  </a>

  <button
    v-else
    class="su-btn"
    :class="[
      size ? 'su-btn-' + size : '',
      type ? 'su-btn-' + type : '',
      radius ? 'su-btn-radius-'+radius : '' ,
      {
        'is-plain' : plain,
        'is-round' : round,
        'is-circle' : circle,
        'su-btn-fluid': fluid,
        'su-btn-disabled': disabled
      }
    ]"
    @click="handleClick"
  >
    <i
      v-if="icon && !right"
      class="left"
      :class="icon"
    />
    <i
      v-if="icon && right"
      class="right"
      :class="icon"
    />
     <slot><span style="margin: -2px" /></slot>
  </button>
</template>

<script>
export default {
  name: 'SuButton',
  props: {
    item: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    radius: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    right: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    fluid: Boolean,
    url: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style scoped>
i.right {
  padding-left: 4px;
}

i.left {
  padding-right: 4px;
}
</style>
