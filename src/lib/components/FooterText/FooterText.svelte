<script>
  export let paddingTop = ""
</script>

<p
  class={`uppercase text-white opacity-50 text-center text-text-xs 
  md:text-text-lg_sb
  xl:text-+sb_text-xl
  ${paddingTop}`}
>
  <slot />
</p>
