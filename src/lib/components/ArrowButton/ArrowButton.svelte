<div class="absolute top-20 sm:top-16 md:top-0 right-0">
  <button
    class="relative button-after z-10 inline-flex items-center justify-center p-2 md:p-4 text-white bg-black border border-transparent"
  >
    <span class="uppercase max-md:text-text-sm_eb text-button-2xl"
      >Get Discount</span
    >
    <svg
      class="ml-2"
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3333 9L12.3333 17M20.3333 9L12.3333 1M20.3333 9L1.66665 9"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</div>

<style>
  .button-after::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 8px;
    width: calc(100% - 0.1rem);
    height: 100%;
    border: 2px solid #000;
    z-index: -1;
  }
</style>
