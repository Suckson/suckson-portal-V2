<!--
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-06 11:16:49
 * @LastEditors: suckson
 * @LastEditTime: 2019-08-11 17:35:40
 -->
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
        'is-3d' : btn3d,
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
      size ? 'su-btn-size-' + size : '',
      type ? 'su-btn-' + type : '',
      radius ? 'su-btn-radius-'+radius : '' ,
      {
        'is-plain' : plain,
        'is-3d' : btn3d,
        'is-round' : round,
        'is-circle' : circle,
        'su-btn-fluid': fluid,
        'su-btn-disabled': disabled,
        'is-3d-primary': btn3dPrimary,
        'is-3d-success': btn3dSuccess,
        'is-3d-danger': btn3dDanger,
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
    btn3d:Boolean,
    btn3dPrimary: Boolean,
    btn3dSuccess: Boolean,
    btn3dDanger: Boolean,
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
