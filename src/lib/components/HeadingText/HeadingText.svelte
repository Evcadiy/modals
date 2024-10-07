<script>
  let className = ""
  export { className as class }
</script>

<h2
  class={`uppercase text-center text-text-sm 
  sm:text-+sb_text-sm
  md:text-+sb_text-xl
  xl:text-+text-2xl
  ${className}`}
>
  <slot />
</h2>
