<script>
  import HeadingText from "$lib/components/HeadingText/HeadingText.svelte"
  import BigText from "$lib/components/BigText/BigText.svelte"
  import Button from "$lib/components/Button/Button.svelte"
  import SubText from "$lib/components/SubText/SubText.svelte"
  import FooterText from "$lib/components/FooterText/FooterText.svelte"
</script>

<section class="flex items-center justify-center">
  <div
    class="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden
    w-[330px] h-[474px]
    sm:w-[576px]
    md:w-[726px] md:h-[420px]
    lg:w-[942px] lg:h-[600px]
    xl:w-[1200px]
    2xl:w-[1400px]"
  >
    <div
      class="bg-image w-full h-full
			md:w-[24%]
			xl:w-[27%]
			2xl:w-[30%]"
    />
    <div
      class="p-8 w-full
			md:w-[76%]
			xl:w-[73%]
			2xl:w-[70%]"
    >
      <HeadingText
        class="text-black pt-[8px] pb-[24px] md:pt-[24px] md:pb-0 lg:pt-[80px]"
        >run with the pack</HeadingText
      >

      <BigText class="text-black md:pt-[24px]">get 20% off</BigText>

      <SubText class="text-black pb-[24px] xl:pb-[44px]">
        on your next order over $50
      </SubText>

      <Button class="black" />

      <FooterText class="text-black pt-[32px]">
        offer valid until 24th march, 2021
      </FooterText>
    </div>
  </div>
</section>
