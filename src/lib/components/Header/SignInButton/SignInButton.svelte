<script>
  import mobileSigninIcon from "../../../../assets/icons/sign-in.png"
  import { toggleModalState } from "../../../stores/modalsStore"
</script>

<button
  class="header-button"
  on:click={() => toggleModalState("isAuthModalOpen", true)}
>
  Sign in
  <img src={mobileSigninIcon} alt="sign-in-button" class="header-button-icon" />
</button>

<style>
</style>
