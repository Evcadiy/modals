<script>
  import FirstModal from "$lib/components/Modals/FirstModal.svelte"
  import SecondModal from "$lib/components/Modals/SecondModal.svelte"
  import ThirdModal from "$lib/components/Modals/ThirdModal.svelte"
  import FourthModal from "$lib/components/Modals/FourthModal.svelte"
  let activeModal = null

  const showModal = (modal) => {
    activeModal = modal
  }
</script>

<section class="flex-1 items-center justify-center h-screen bg-opacity-50">
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
  {:else if activeModal === "third"}
    <ThirdModal />
  {:else if activeModal === "fourth"}
    <FourthModal />
  {/if}
</section>
