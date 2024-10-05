<script>
  export let paddingTop = ""
  export let paddingBottom = ""
</script>

<p
  class={`uppercase text-white text-center text-4xl font-bold
  sm:text-5xl
  md:text-+text-6xl
  lg:text-+text-7xl
  xl:text-+text-8xl
  ${paddingTop} ${paddingBottom}`}
>
  <slot />
</p>
