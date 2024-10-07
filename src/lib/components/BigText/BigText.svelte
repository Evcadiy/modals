<script>
  let className = ""
  export { className as class }
</script>

<p
  class={`uppercase text-4xl font-bold
  sm:text-5xl
  md:text-+text-6xl
  lg:text-+text-7xl
  xl:text-+text-8xl
  ${className}`}
>
  <slot />
</p>
