<script>
  export let paddingBottom = ""
</script>

<p
  class={`uppercase text-white text-center text-text-sm_eb
  md:text-text-lg
  xl:text-+text-xl
  ${paddingBottom}`}
>
  <slot />
</p>
