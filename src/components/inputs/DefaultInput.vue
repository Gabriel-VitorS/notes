<script lang="ts" setup>
import { useField } from 'vee-validate'
import { toRef, } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String , default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const nameRef = toRef(props, 'name')
const { value, errorMessage, } = useField(nameRef)
</script>
<template>
    <label v-if="label" class="form-label">
        {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>

    <input :type="type" :id="name" v-model="value" :name="name"
     :placeholder="placeholder"
     :class="{'is-invalid': errorMessage}"/>

    <div v-if="errorMessage"  class="invalid-feedback">{{ errorMessage }}</div>
</template>