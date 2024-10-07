<script>
  import HeadingText from "$lib/components/HeadingText/HeadingText.svelte"
  import BigText from "$lib/components/BigText/BigText.svelte"
  import Button from "$lib/components/Button/Button.svelte"
  import SubText from "$lib/components/SubText/SubText.svelte"
  import FooterText from "$lib/components/FooterText/FooterText.svelte"
  import DiscountButton from "../DiscountButton/DiscountButton.svelte"
</script>

<section class="flex items-center justify-center">
  <div
    class="bg-image-2 flex-row my-4 bg-white rounded-2xl shadow-lg overflow-hidden
    w-[330px] h-[474px]
    sm:w-[576px]
    md:w-[726px] md:h-[620px]
    lg:w-[942px] lg:h-[942px]"
  >
    <div class="p-8 pt-2 w-full h-[50%]">
      <HeadingText
        class="text-white pt-[8px] pb-[24px] md:pt-[24px] md:pb-0 lg:pt-[80px]"
        >run with the pack</HeadingText
      >

      <BigText class="text-white md:pt-[24px] xl:text-+text-7xl"
        >get 20% off</BigText
      >

      <div class="relative">
        <SubText class="text-white pb-[12px]"
          >on your next order over $50</SubText
        >
        <FooterText class="text-white pt-[12px]">
          offer valid until 24th march, 2021
        </FooterText>
        <DiscountButton />
      </div>
    </div>
    <div class="bg-image w-full h-[50%]" />
  </div>
</section>
