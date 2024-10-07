<script>
  let className = ""
  export { className as class }
</script>

<p
  class={`uppercase text-white text-center text-text-sm_eb 
  md:text-text-lg
  xl:text-text-xl
  ${className}`}
>
  <slot />
</p>
