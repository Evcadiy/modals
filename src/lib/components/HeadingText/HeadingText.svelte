<script>
  export let paddingTop = ""
  export let paddingBottom = ""
</script>

<h2
  class={`uppercase text-white text-center text-text-sm 
  sm:text-+sb_text-sm
  md:text-+sb_text-xl
  xl:text-+text-2xl
  ${paddingTop} ${paddingBottom}`}
>
  <slot />
</h2>
