<script>
  let className = ""
  export { className as class }
</script>

<p
  class={`uppercase text-center text-sm
  lg:text-3xl

  ${className}`}
>
  <slot />
</p>
