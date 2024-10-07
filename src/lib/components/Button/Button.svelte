<script>
  let className = ""
  export { className as class }
</script>

<div class="flex justify-center">
  <button
    class={`uppercase py-4 font-semibold transition duration-300 ease-in-out text-center whitespace-nowrap text-button-2xl w-[880px] 
    max-md:text-text-sm_eb
      ${className === "black" ? "bg-black text-white" : "bg-white text-black"}`}
  >
    Get Discount
  </button>
</div>
