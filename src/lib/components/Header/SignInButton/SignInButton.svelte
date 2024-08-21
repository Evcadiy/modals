<script>
  import mobileSigninIcon from "../../../../assets/icons/sign-in.png"
  import { toggleModalState } from "../../../stores/modalsStore"
  import { setUserState, userState } from "../../../stores/userStore"

  const onButtonClick = () => {
    if ($userState.user) {
      setUserState(null)
    } else {
      toggleModalState("isAuthModalOpen", true)
    }
  }
</script>

<button class="header-button" on:click={onButtonClick}>
  {$userState.user ? $userState.user.username : "Sign in"}
  <img src={mobileSigninIcon} alt="sign-in-button" class="header-button-icon" />
</button>

<style>
</style>
