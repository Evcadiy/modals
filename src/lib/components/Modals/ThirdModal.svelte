<script>
  import HeadingText from "$lib/components/HeadingText/HeadingText.svelte"
  import BigText from "$lib/components/BigText/BigText.svelte"
  import Button from "$lib/components/Button/Button.svelte"
  import SubText from "$lib/components/SubText/SubText.svelte"
  import FooterText from "$lib/components/FooterText/FooterText.svelte"
  import MidText from "$lib/components/MidText/MidText.svelte"
</script>

<section
  class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
  <div
    class="bg-image p-10 rounded-2xl shadow-lg w-[330px] h-[474px]
    sm:w-[576px]
    md:w-[726px] md:h-[420px]
    lg:w-[942px] lg:h-[600px]
    xl:w-[1200px]
    2xl:w-[1400px] 2xl:h-[760px]"
  >
    <HeadingText
      class="text-white text-center pt-[24px] pb-[32px] md:py-[10px] lg:py-[44px] xl:py-[32px]"
    >
      run with the pack
    </HeadingText>

    <MidText class=" text-white text-center md:pt-[24px]"
      >······· get ·······</MidText
    >
    <BigText class="text-white text-center lg:text-+text-8xl xl:text-9xl"
      >20%</BigText
    >
    <MidText class="text-white text-center pb-[24px] 2xl:pb-[72px]"
      >······· off ·······</MidText
    >

    <SubText
      class="text-white text-center pb-[35px] md:pb-[20px] 2xl:pb-[52px]"
    >
      on your next order over $50
    </SubText>

    <Button class="bg-white text-center text-black py-2 sm:py-4" />

    <FooterText
      class="text-white text-center pt-[35px] md:pt-[18px] lg:pt-[32px]"
    >
      offer valid until 24th march, 2021
    </FooterText>
  </div>
</section>
