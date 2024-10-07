<script>
  import HeadingText from "$lib/components/HeadingText/HeadingText.svelte"
  import BigText from "$lib/components/BigText/BigText.svelte"
  import Button from "$lib/components/Button/Button.svelte"
  import SubText from "$lib/components/SubText/SubText.svelte"
  import FooterText from "$lib/components/FooterText/FooterText.svelte"
</script>

<section>
  <div
    class="bg-image p-8 rounded-2xl shadow-lg w-[330px] h-[474px]
    sm:w-[576px]
    md:w-[726px] md:h-[420px]
    lg:w-[942px] lg:h-[600px]
    xl:w-[1200px]
    2xl:w-[1400px]"
  >
    <HeadingText
      class="pt-[56px] pb-[24px] 
      md:py-[24px] 
      lg:py-[44px]
      xl:py-[56px]"
    >
      run with the pack
    </HeadingText>

    <BigText class="md:pt-[24px] lg:pb-[32px]">get 20% off</BigText>

    <SubText class="pb-[24px] xl:pb-[32px]">
      on your next order over $50
    </SubText>

    <Button class="white" />

    <FooterText class="pt-[24px]">
      offer valid until 24th march, 2021
    </FooterText>
  </div>
</section>

<style>
  .bg-image {
    background-image: url("../../../assets/images/bgImage.png");
    background-size: cover;
    background-position: center;
  }
</style>
