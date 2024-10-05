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
      paddingTop="pt-[56px] sm:pt-[56px] md:pt-[24px] lg:pt-[44px] xl:pt-[56px]"
      paddingBottom="pb-[24px] sm:pb-[24px] md:pb-[24px] lg:pb-[44px] xl:pb-[56px]"
    >
      run with the pack
    </HeadingText>

    <BigText paddingTop="md:pt-[24px]" paddingBottom="lg:pb-[32px]">
      get 20% off
    </BigText>

    <SubText paddingBottom="pb-[24px] xl:pb-[32px]">
      on your next order over $50
    </SubText>

    <Button backgroundColor="white" />

    <FooterText paddingTop="pt-[24px]">
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
