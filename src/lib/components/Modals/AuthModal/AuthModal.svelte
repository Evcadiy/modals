<script>
  import { z } from "zod"
  import { authSchema } from "../../../validation-schemas/authSchema"
  import Modal from "../../Modal/Modal.svelte"
  import { modalsState, toggleModalState } from "../../../stores/modalsStore"
  import logo from "../../../../assets/images/logo.png"
  import loginText from "../../../../assets/images/login-text.png"
  import registerText from "../../../../assets/images/register-text.png"
  import closeIcon from "../../../../assets/icons/close.svg"
  import userIcon from "../../../../assets/icons/user-icon.png"
  import passIcon from "../../../../assets/icons/pass-icon.png"
  import Input from "../../Input/Input.svelte"
  import PrivacyAgreementModal from "../PrivacyAgreementModal/PrivacyAgreementModal.svelte"

  let isRegister = false
  let formData = {
    username: "",
    password: "",
    confirmPassword: "",
    policyAgreement: false
  }
  let errors = {}

  const validate = () => {
    const result = authSchema.safeParse(formData)
    if (!result.success) {
      errors = result.error.format()
      return false
    }
    errors = {}
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validate()) {
      if (isRegister && !formData.policyAgreement) {
        console.log("toggle")
        toggleModalState("privacyAgreementModalOpen", true)
        return
      }
      // Form is valid, submit data
      console.log("Form data:", formData)
    }
  }

  const closeModal = () => {
    toggleModalState("isAuthModalOpen", false)
    clearFormFieldsAndErrors()
  }

  const clearFormFieldsAndErrors = () => {
    errors = {}
    formData.confirmPassword = ""
    formData.password = ""
    formData.policyAgreement = false
    formData.username = ""
  }
</script>

<Modal
  on:close={closeModal}
  isCentered={true}
  isModalOpen={$modalsState.isAuthModalOpen}
  className="authModal"
>
  <div class="content">
    <div class="title">
      {#if !isRegister}
        <img src={logo} alt="logo" class="logo-login" />
        <img src={loginText} alt="login" />
      {:else}
        <img src={registerText} alt="register" />
      {/if}
    </div>

    <form class="form" on:submit|preventDefault={handleSubmit}>
      <div class="field">
        <Input
          variant="primary"
          placeholder="Username"
          iconSrc={userIcon}
          errorMsg={errors?.username?._errors[0]}
          bind:value={formData.username}
          errorMsgAbsolute={true}
        />
      </div>
      <div class="field">
        <Input
          variant="primary"
          placeholder="Password"
          iconSrc={passIcon}
          type="password"
          errorMsg={errors?.password?._errors[0]}
          bind:value={formData.password}
          errorMsgAbsolute={true}
        />
      </div>
      {#if isRegister}
        <div class="field">
          <Input
            variant="primary"
            placeholder="Confirm Password"
            iconSrc={passIcon}
            type="password"
            errorMsg={errors?.confirmPassword?._errors[0]}
            bind:value={formData.confirmPassword}
            errorMsgAbsolute={true}
          />
        </div>
        <div class="privacy-agreement">
          <label class="el-checkbox">
            <span
              class="el-checkbox__input"
              class:is-checked={formData.policyAgreement}
              on:click|preventDefault={() => {
                formData.policyAgreement = !formData.policyAgreement
              }}
            >
              <span class="el-checkbox__inner"></span>
              <input
                type="checkbox"
                aria-hidden="false"
                class="el-checkbox__original"
                bind:checked={formData.policyAgreement}
              />
            </span>
          </label>
          <span class="agreement-text"
            >I acknowledge and agree to the Privacy Policy &amp; Terms
          </span>
        </div>
      {/if}

      <div class="buttons {isRegister ? 'register' : ''}">
        <button
          type="button"
          on:click={() => {
            if (!isRegister) {
              isRegister = true
            } else {
              handleSubmit(new Event("submit"))
            }
          }}
          class="secondary"
        >
          REGISTER
        </button>
        <button
          type="button"
          on:click={() => {
            if (isRegister) {
              isRegister = false
            } else {
              handleSubmit(new Event("submit"))
            }
          }}
          class="primary"
        >
          LOGIN
        </button>
      </div>
    </form>
    <img
      on:click={closeModal}
      class="close-button"
      src={closeIcon}
      alt="close modal"
    />
  </div>
</Modal>

<PrivacyAgreementModal />

<style>
  :global(.authModal) {
    background-color: rgba(7, 26, 47, 0.8) !important;
    width: 518px !important;
    border-radius: 10px !important;
    overflow: auto !important;
  }

  @media (max-width: 754px) {
    :global(.authModal) {
      margin: 0 0 auto 0 !important;
      width: 100% !important;
    }
  }

  .checkbox {
    display: inline-block;
    cursor: pointer;
  }
  .content {
    margin: 0 auto;
    padding: 48px 86px;

    @media (max-width: 754px) {
      padding: 1.5rem 1.5rem;
    }
  }
  .title {
    display: flex;
    align-items: center;
  }
  .title img {
    height: 100%;
  }
  .title .logo-login {
    width: 125px;
    margin-right: 10px;
  }
  .form {
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    gap: 25px;
  }
  .buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 45px;
    gap: 30px;
  }
  .buttons.register {
    flex-direction: column-reverse;
  }
  .buttons button {
    width: 100%;
    height: 50px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    color: white;
  }
  .buttons .primary {
    background: linear-gradient(to right, #e2035e, #fea302);
    border: none;
  }
  .buttons .secondary {
    background: transparent;
    border: solid 2px #fea501;
  }
  .close-button {
    position: absolute;
    top: 15px;
    width: 25px;
    height: 25px;
    right: 15px;
    cursor: pointer;
  }
  .error {
    color: red;
    font-size: 12px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .privacy-agreement {
    display: flex;
    align-items: center;
  }

  .agreement-text {
    font-size: 14px;
    color: white;
    margin-left: 10px;
  }

  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
  }
  .el-checkbox__input {
    cursor: pointer;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    white-space: nowrap;
  }
  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    -webkit-transition:
      border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
      background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    transition:
      border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
      background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }
  .el-checkbox__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    -webkit-transform: rotate(45deg) scaleY(1);
    transform: rotate(45deg) scaleY(1);
  }
  .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: -webkit-transform 0.15s ease-in 0.05s;
    transition: transform 0.15s ease-in 0.05s;
    transition:
      transform 0.15s ease-in 0.05s,
      -webkit-transform 0.15s ease-in 0.05s;
    -webkit-transform-origin: center;
    transform-origin: center;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
  }
</style>
