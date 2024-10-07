<script>
  import FirstModal from "$lib/components/Modals/FirstModal.svelte"
  import SecondModal from "$lib/components/Modals/SecondModal.svelte"

  let activeModal = null

  const showModal = (modal) => {
    activeModal = modal
  }
</script>

<section
  class="flex flex-col items-center justify-center h-screen bg-opacity-50"
>
  <div class="my-4">
    <button
      on:click={() => showModal("first")}
      class="bg-blue-500 text-white py-2 px-4 rounded m-2"
    >
      First Modal
    </button>
    <button
      on:click={() => showModal("second")}
      class="bg-blue-500 text-white py-2 px-4 rounded m-2"
    >
      Second Modal
    </button>
    <button
      on:click={() => showModal("third")}
      class="bg-blue-500 text-white py-2 px-4 rounded m-2"
    >
      Third Modal
    </button>
    <button
      on:click={() => showModal("fourth")}
      class="bg-blue-500 text-white py-2 px-4 rounded m-2"
    >
      Fourth Modal
    </button>
  </div>

  {#if activeModal === "first"}
    <FirstModal />
  {:else if activeModal === "second"}
    <SecondModal />
  {/if}
</section>
