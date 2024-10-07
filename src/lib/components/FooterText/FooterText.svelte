<script>
  let className = ""
  export { className as class }
</script>

<p
  class={`uppercase opacity-50 text-center text-text-xs 
  md:text-text-lg_sb
  xl:text-+sb_text-xl
  ${className}`}
>
  <slot />
</p>
